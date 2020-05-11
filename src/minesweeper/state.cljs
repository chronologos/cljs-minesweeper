(ns ^:figwheel-hooks minesweeper.state
  (:require
    [reagent.core :as reagent :refer [atom]]))
    ;[devtools.core :as devtools]))

(def max-x 6)
(def max-y 6)
(def num-mines 5)

(def game-state
  (atom {:game-stage :in-progress
         :mines-remaining num-mines
         :unrevealed-squares (- (* max-x max-y) num-mines)
         :is-first-click true}))

(defn game-ended [] (or (= (:game-stage @game-state) :lost) (= (:game-stage @game-state) :won)))
(defn game-lost [] (= (:game-stage @game-state) :lost))
(defn game-won [] (= (:game-stage @game-state) :won))

(defn check-if-game-won []
  (cond (= (:unrevealed-squares @game-state) 0) (swap! game-state #(assoc % :game-stage :won))))

(defn decrement-squares-remaining []
  (swap! game-state #(assoc % :unrevealed-squares (dec (:unrevealed-squares %)))))

;; Track state of shift key.
(def shift-down (atom false))

(defn handle-keydown-event! [event]
  (let [keyCode (. event -keyCode)]
    (if (= keyCode 16) (reset! shift-down true))))
;(prn keyCode)))

(defn handle-keyup-event! [event]
  (let [keyCode (. event -keyCode)]
    (if (= keyCode 16) (reset! shift-down false))))
;(prn keyCode)))

(defn new-grid []
  (vec (for [y (range max-x)]
         (vec (for [x (range max-y)]
                {:num-mines 0
                 :has-mine false
                 :state :unclicked
                 :row y
                 :col x
                 :flag-state :unflagged})))))


(def grid
  (atom (new-grid)))