(ns ^:figwheel-hooks minesweeper.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [devtools.core :as devtools]))

(devtools.core/install! [:formatters :hints])
(.log js/console (range 200))

(println "This text is printed from src/minesweeper/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))


;; define your app data so that it doesn't get over-written on reload
;(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

;(defn hello-world []
;  [:div
;   [:h1 (:text @app-state)]
;   [:h3 "Edit this in src/minesweeper/core.cljs and watch it change!"]])

(def max-x 4)
(def max-y 4)
(def num-mines 4)

(def game-state
  (atom {:game-ended false}))

(def grid
  (atom (vec (for [y (range max-x)] (vec (for [x (range max-y)]  {:mine-num 0 :has-mine false :state :unclicked :row y :col x}))))))

(defn get-adjacent-cells [x y]
  (for [dx [-1 0 1] dy [-1 0 1] :when (not= dx dy 0)]
    [(+ x dx) (+ y dy)]))

(defn get-cell-value [grid getter x y]
  (let [row (nth grid y)
        col (nth row x)]
      (getter col)))

(defn return-modified-cell [grid f x y]
  (let [row (nth grid y)
        col (nth row x)
        modified-col (f col)
        new-row (assoc row x modified-col)
        new-grid (assoc grid y new-row)] new-grid))

(defn inc-num-mines [grid [x y]]
  (return-modified-cell grid
                        #(assoc % :mine-num (inc (:mine-num %)))
                        x y))

(defn gen-mines [grid k]
  (let [x (rand-int max-x)
        y (rand-int max-y)
        col (get-cell-value grid #(:has-mine %) x y)
        adjacents (get-adjacent-cells x y)
        _ (prn (str "adjacents: " adjacents))
        grid-with-mine (return-modified-cell grid #(assoc % :has-mine true) x y)
        _ (prn (str "grid-with-mine:" grid-with-mine))
        grid-with-mine-updated-minenums (reduce #(inc-num-mines %1 %2) grid-with-mine adjacents)
        _ (prn (str "latest grid: " grid-with-mine-updated-minenums))]

    (loop [grid grid k k])
    (cond (= k 0) grid
          (:has-mine col) (recur grid k)
            :else (recur grid-with-mine-updated-minenums (dec k)))))

(defn grid-populate [] (swap! grid gen-mines num-mines)

  (defn click-on-point-in-grid [grid point]
    (let [
          game-ended (:game-ended @game-state)
          ;_ (prn grid)
          row (nth grid (:row point))
          col (nth row (:col point))
          ;_ (prn col)
          modified-col (assoc col :state :clicked)
          ;_ (prn modified-col)
          new-row (assoc row (:col point) modified-col)
          ;_ (prn new-row)
          new-grid (assoc grid (:row point) new-row)]
      (cond (:has-mine modified-col) (swap! game-state #(assoc % :game-ended true)))
      (cond (false? game-ended) new-grid :else grid))))


(defn display [point]
  (case (:state point)
    :unclicked "?"
    :clicked (cond (:has-mine point) "X" :else (:mine-num point))
    "?"))

(defn style [point]
  [(:state point) (if (:has-mine point) :has-mine :no-mine)])

(defn header-component []
  (let [ended (@game-state :game-ended)
        _ (prn (str "ended: " ended))
        header-text (cond (true? ended) "Game Over!"
                           :else "Minesweeper")]
    [:div [:p header-text " - " (str @game-state)]]))

(defn simple-example []
  [:div [header-component]
   (for [row @grid]
     ^{:key (str row)}[:div (for [point row]
                              ^{:key (str (:row point) (:col point))}
                              [:input {:type "button"
                                       :class (style point)
                                       :value (display point)
                                       :on-click #(swap! grid click-on-point-in-grid point)}])])])

(defn mount [el]
  (grid-populate)
  (prn @grid)
  (reagent/render-component [simple-example] el))

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

