(ns ^:figwheel-hooks minesweeper.core
  (:require
    [goog.dom :as gdom]
    [minesweeper.state]
    [reagent.core :as reagent :refer [atom]]))
    ;[devtools.core :as devtools]))

;(devtools.core/install! [:formatters :hints])
(.log js/console (range 200))

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
;(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn get-adjacent-cells [x y]
  (vec (for [dx [-1 0 1]
             dy [-1 0 1]
             :when (and
                     (not= dx dy 0)
                     (> minesweeper.state/max-x (+ x dx))
                     (<= 0 (+ x dx))
                     (> minesweeper.state/max-y (+ y dy))
                     (<= 0 (+ y dy)))]
         [(+ x dx) (+ y dy)])))

(defn get-cell [grid x y]
  (let [row (nth grid y)
        col (nth row x)] col))

(defn get-cell-value [grid getter x y]
  (let [cell (get-cell grid x y)]
    (getter cell)))

;; Takes a function that modifies a cell (takes cell and returns cell), and applies it to the cell (x,y) in grid.
(defn return-modified-cell [grid f x y]
  (let [row (nth grid y)
        col (nth row x)
        modified-col (f col)
        new-row (assoc row x modified-col)
        new-grid (assoc grid y new-row)] new-grid))

(defn inc-num-mines [grid [x y]]
  (return-modified-cell grid
                        #(assoc % :num-mines (inc (:num-mines %)))
                        x y))

(defn gen-mines [grid k]
  (let [x (rand-int minesweeper.state/max-x)
        y (rand-int minesweeper.state/max-y)
        col-has-mine (get-cell-value grid #(:has-mine %) x y)
        adjacents (get-adjacent-cells x y)
        grid-with-mine (return-modified-cell grid #(assoc % :has-mine true) x y)
        grid-with-mine-updated-minenums (reduce inc-num-mines grid-with-mine adjacents)]

    (loop [grid grid k k])
    (cond (= k 0) grid
          col-has-mine (recur grid k)
          :else (recur grid-with-mine-updated-minenums (dec k)))))

(defn populate-grid! [] (do
                          (reset! minesweeper.state/grid (gen-mines (minesweeper.state/new-grid) minesweeper.state/num-mines))))

(defn transition-flag-state [point]
  (case (:flag-state point)
    :unflagged (assoc point :flag-state :flagged)
    :flagged (assoc point :flag-state :unknown)
    (assoc point :flag-state :unflagged)))

;; return [grid adjacencies]
(defn maybe-reveal-cell [grid x y explored]
  (let [
        ;_ (prn (str "maybe revealing x=" x " ,y=" y))
        cell (get-cell grid x y)
        is-unclicked (= (:state cell) :unclicked)
        is-zero-cell (= (:num-mines cell) 0)
        modified-cell (return-modified-cell grid
                                            #(assoc % :state :clicked :flag-state :unflagged)
                                            x y)]
    (cond (and is-unclicked is-zero-cell) (do
                                            ;(prn "revealing x:" x " y:" y)
                                            (minesweeper.state/decrement-squares-remaining)
                                            [modified-cell (into [] (for [c (get-adjacent-cells x y) :when (not (contains? explored c))] c))])
          is-unclicked (do
                         (minesweeper.state/decrement-squares-remaining)
                         [modified-cell []])
          :else [grid []])))

;; to-explore is vector of [x y] coordinates.
(defn explode-from-cell [grid to-explore explored]
  (let [
        cur (peek to-explore)
        [x y] cur]
    (cond (empty? to-explore) grid
          (empty? cur) grid
          (contains? explored cur) (explode-from-cell grid (pop to-explore) explored)
          :else (let [[new-grid more-to-explore] (maybe-reveal-cell grid x y explored)]
                  (explode-from-cell new-grid (into [] (concat more-to-explore (pop to-explore))) (conj explored cur))))))

;; Account for effects when l-clicking on an unexplored cell.
(defn click-on-cell! [x y]
  (let [cell (get-cell @minesweeper.state/grid x y)
        cell-has-mine (get-cell-value @minesweeper.state/grid #(:has-mine %) x y)]
    (cond (not= (:state cell) :unclicked)
          :default
          (not cell-has-mine)
          (do
            (swap! minesweeper.state/game-state #(assoc % :is-first-click false))
            (swap! minesweeper.state/grid #(explode-from-cell % [[x y]] #{})))
          :else ; don't decrement unrevealed squares.
          (cond (:is-first-click @minesweeper.state/game-state)
                (do
                  (prn @minesweeper.state/grid)
                  (populate-grid!)
                  (prn @minesweeper.state/grid)
                  (click-on-cell! x y)) ; never lose on first click.
                :else
                (do
                  (swap! minesweeper.state/game-state #(assoc % :game-stage :lost))
                  (swap! minesweeper.state/grid #(return-modified-cell % (fn [c] (assoc c :state :clicked)) x y)))))))

(defn update-game-on-click! [point]
  (let [
        x (:col point)
        y (:row point)
        is-shift-click (true? @minesweeper.state/shift-down)]
    (if is-shift-click (swap! minesweeper.state/grid #(return-modified-cell % transition-flag-state x y))
                       (click-on-cell! x y))))

(defn act-if-game-notended! [point]
  (if (false? (minesweeper.state/game-ended))
    (do (update-game-on-click! point)
        (minesweeper.state/check-if-game-won))
    (prn "game-ended")))

(defn display [point]
  (case (:state point)
    :unclicked (case (:flag-state point)
                 :flagged "F"
                 :unflagged "_"
                 :unknown "?")
    :clicked (cond (:has-mine point) "X" :else (:num-mines point))
    "_"))

(defn style [point]
  [(:state point) (cond (= (:num-mines point) 1) :1-mine
                        (= (:num-mines point) 2) :2-mine
                        (>= (:num-mines point) 3) :3-mine
                        :else :no-mine)])

(defn game-header-component []
  (let [ended (@minesweeper.state/game-state :game-stage)
        ;_ (prn (str "ended: " ended))
        header-text (cond (true? ended) "Game Over!"
                          :else "Minesweeper")]
    [:div [:p header-text " - " (str @minesweeper.state/game-state)]]))

(defn minesweeper-game-component []
  [:div [game-header-component]
   (for [row @minesweeper.state/grid]
     ^{:key (str row)} [:div (for [point row]
                               ^{:key (str (:row point) (:col point))}
                               [:input {:type "button"
                                        :class (style point)
                                        :value (display point)
                                        :on-click #(act-if-game-notended! point)}])])
   [:h1 " --- debug --- "]
   (for [row @minesweeper.state/grid]
     ^{:key (str row)} [:div (for [point row]
                               ^{:key (str (:row point) (:col point))}
                               [:input {:type "button"
                                        :class (style point)
                                        :value (cond (:has-mine point) "X" :else (:num-mines point))}])])])

(defn mount [el]
  (populate-grid!)
  (.addEventListener js/window "keydown" minesweeper.state/handle-keydown-event!)
  (.addEventListener js/window "keyup" minesweeper.state/handle-keyup-event!)
  (reagent/render-component [minesweeper-game-component] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)