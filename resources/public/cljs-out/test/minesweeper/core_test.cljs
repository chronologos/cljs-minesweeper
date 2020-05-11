(ns minesweeper.core-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [minesweeper.core :refer [multiply inc-num-mines]]))

(deftest multiply-test
  (is (= (* 1 2) (multiply 1 2))))

(deftest multiply-test-2
  (is (= (* 75 10) (multiply 10 75))))

(def test-grid [[{:mine-num 0, :has-mine false, :state :unclicked, :row 0, :col 0}]])

(def test-grid-2 [[{:mine-num 0, :has-mine false, :state :unclicked, :row 0, :col 0}, {:mine-num 1, :has-mine false, :state :unclicked, :row 0, :col 1}]])


(deftest inc-num-mines-test
  (is (= [[{:mine-num 1, :has-mine false, :state :unclicked, :row 0, :col 0}]] (inc-num-mines test-grid [0 0]))))

(deftest inc-num-mines-test-2
  (is (= [[{:mine-num 1, :has-mine false, :state :unclicked, :row 0, :col 0}, {:mine-num 2, :has-mine false, :state :unclicked, :row 0, :col 1}]] (reduce inc-num-mines test-grid-2 [[0 0] [1 0]]))))