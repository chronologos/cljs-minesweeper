// Compiled by ClojureScript 1.10.520 {}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('minesweeper.state');
goog.require('reagent.core');
goog.require('devtools.core');
devtools.core.install_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151)], null));
console.log(cljs.core.range.call(null,(200)));
minesweeper.core.multiply = (function minesweeper$core$multiply(a,b){
return (a * b);
});
minesweeper.core.get_app_element = (function minesweeper$core$get_app_element(){
return goog.dom.getElement("app");
});
minesweeper.core.get_adjacent_cells = (function minesweeper$core$get_adjacent_cells(x,y){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function minesweeper$core$get_adjacent_cells_$_iter__16594(s__16595){
return (new cljs.core.LazySeq(null,(function (){
var s__16595__$1 = s__16595;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16595__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var dx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__16595__$1,dx,xs__6012__auto__,temp__5457__auto__){
return (function minesweeper$core$get_adjacent_cells_$_iter__16594_$_iter__16596(s__16597){
return (new cljs.core.LazySeq(null,((function (s__16595__$1,dx,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__16597__$1 = s__16597;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16597__$1);
if(temp__5457__auto____$1){
var s__16597__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16597__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16597__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16599 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16598 = (0);
while(true){
if((i__16598 < size__4522__auto__)){
var dy = cljs.core._nth.call(null,c__4521__auto__,i__16598);
if(((cljs.core.not_EQ_.call(null,dx,dy,(0))) && ((minesweeper.state.max_x > (x + dx))) && (((0) <= (x + dx))) && ((minesweeper.state.max_y > (y + dy))) && (((0) <= (y + dy))))){
cljs.core.chunk_append.call(null,b__16599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__16600 = (i__16598 + (1));
i__16598 = G__16600;
continue;
} else {
var G__16601 = (i__16598 + (1));
i__16598 = G__16601;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16599),minesweeper$core$get_adjacent_cells_$_iter__16594_$_iter__16596.call(null,cljs.core.chunk_rest.call(null,s__16597__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16599),null);
}
} else {
var dy = cljs.core.first.call(null,s__16597__$2);
if(((cljs.core.not_EQ_.call(null,dx,dy,(0))) && ((minesweeper.state.max_x > (x + dx))) && (((0) <= (x + dx))) && ((minesweeper.state.max_y > (y + dy))) && (((0) <= (y + dy))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),minesweeper$core$get_adjacent_cells_$_iter__16594_$_iter__16596.call(null,cljs.core.rest.call(null,s__16597__$2)));
} else {
var G__16602 = cljs.core.rest.call(null,s__16597__$2);
s__16597__$1 = G__16602;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__16595__$1,dx,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__16595__$1,dx,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,minesweeper$core$get_adjacent_cells_$_iter__16594.call(null,cljs.core.rest.call(null,s__16595__$1)));
} else {
var G__16603 = cljs.core.rest.call(null,s__16595__$1);
s__16595__$1 = G__16603;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
minesweeper.core.get_cell = (function minesweeper$core$get_cell(grid,x,y){
var row = cljs.core.nth.call(null,grid,y);
var col = cljs.core.nth.call(null,row,x);
return col;
});
minesweeper.core.get_cell_value = (function minesweeper$core$get_cell_value(grid,getter,x,y){
var cell = minesweeper.core.get_cell.call(null,grid,x,y);
return getter.call(null,cell);
});
minesweeper.core.return_modified_cell = (function minesweeper$core$return_modified_cell(grid,f,x,y){
var row = cljs.core.nth.call(null,grid,y);
var col = cljs.core.nth.call(null,row,x);
var modified_col = f.call(null,col);
var new_row = cljs.core.assoc.call(null,row,x,modified_col);
var new_grid = cljs.core.assoc.call(null,grid,y,new_row);
return new_grid;
});
minesweeper.core.inc_num_mines = (function minesweeper$core$inc_num_mines(grid,p__16605){
var vec__16606 = p__16605;
var x = cljs.core.nth.call(null,vec__16606,(0),null);
var y = cljs.core.nth.call(null,vec__16606,(1),null);
return minesweeper.core.return_modified_cell.call(null,grid,((function (vec__16606,x,y){
return (function (p1__16604_SHARP_){
return cljs.core.assoc.call(null,p1__16604_SHARP_,new cljs.core.Keyword(null,"num-mines","num-mines",642614764),(new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(p1__16604_SHARP_) + (1)));
});})(vec__16606,x,y))
,x,y);
});
minesweeper.core.gen_mines = (function minesweeper$core$gen_mines(grid,k){
while(true){
var x = cljs.core.rand_int.call(null,minesweeper.state.max_x);
var y = cljs.core.rand_int.call(null,minesweeper.state.max_y);
var col_has_mine = minesweeper.core.get_cell_value.call(null,grid,((function (grid,k,x,y){
return (function (p1__16609_SHARP_){
return new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(p1__16609_SHARP_);
});})(grid,k,x,y))
,x,y);
var adjacents = minesweeper.core.get_adjacent_cells.call(null,x,y);
var grid_with_mine = minesweeper.core.return_modified_cell.call(null,grid,((function (grid,k,x,y,col_has_mine,adjacents){
return (function (p1__16610_SHARP_){
return cljs.core.assoc.call(null,p1__16610_SHARP_,new cljs.core.Keyword(null,"has-mine","has-mine",389744473),true);
});})(grid,k,x,y,col_has_mine,adjacents))
,x,y);
var grid_with_mine_updated_minenums = cljs.core.reduce.call(null,minesweeper.core.inc_num_mines,grid_with_mine,adjacents);
var grid_16611__$1 = grid;
var k_16612__$1 = k;
while(true){
break;
}

if(cljs.core._EQ_.call(null,k,(0))){
return grid;
} else {
if(cljs.core.truth_(col_has_mine)){
var G__16613 = grid;
var G__16614 = k;
grid = G__16613;
k = G__16614;
continue;
} else {
var G__16615 = grid_with_mine_updated_minenums;
var G__16616 = (k - (1));
grid = G__16615;
k = G__16616;
continue;

}
}
break;
}
});
minesweeper.core.populate_grid_BANG_ = (function minesweeper$core$populate_grid_BANG_(){
return cljs.core.reset_BANG_.call(null,minesweeper.state.grid,minesweeper.core.gen_mines.call(null,minesweeper.state.new_grid.call(null),minesweeper.state.num_mines));
});
minesweeper.core.transition_flag_state = (function minesweeper$core$transition_flag_state(point){
var G__16617 = new cljs.core.Keyword(null,"flag-state","flag-state",1599303610).cljs$core$IFn$_invoke$arity$1(point);
var G__16617__$1 = (((G__16617 instanceof cljs.core.Keyword))?G__16617.fqn:null);
switch (G__16617__$1) {
case "unflagged":
return cljs.core.assoc.call(null,point,new cljs.core.Keyword(null,"flag-state","flag-state",1599303610),new cljs.core.Keyword(null,"flagged","flagged",-1918264054));

break;
case "flagged":
return cljs.core.assoc.call(null,point,new cljs.core.Keyword(null,"flag-state","flag-state",1599303610),new cljs.core.Keyword(null,"unknown","unknown",-935977881));

break;
default:
return cljs.core.assoc.call(null,point,new cljs.core.Keyword(null,"flag-state","flag-state",1599303610),new cljs.core.Keyword(null,"unflagged","unflagged",-1482625964));

}
});
minesweeper.core.maybe_reveal_cell = (function minesweeper$core$maybe_reveal_cell(grid,x,y,explored){
var cell = minesweeper.core.get_cell.call(null,grid,x,y);
var is_unclicked = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"unclicked","unclicked",-31529429));
var is_zero_cell = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(cell),(0));
var modified_cell = minesweeper.core.return_modified_cell.call(null,grid,((function (cell,is_unclicked,is_zero_cell){
return (function (p1__16619_SHARP_){
return cljs.core.assoc.call(null,p1__16619_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"clicked","clicked",114423720),new cljs.core.Keyword(null,"flag-state","flag-state",1599303610),new cljs.core.Keyword(null,"unflagged","unflagged",-1482625964));
});})(cell,is_unclicked,is_zero_cell))
,x,y);
if(((is_unclicked) && (is_zero_cell))){
minesweeper.state.decrement_squares_remaining.call(null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modified_cell,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (cell,is_unclicked,is_zero_cell,modified_cell){
return (function minesweeper$core$maybe_reveal_cell_$_iter__16620(s__16621){
return (new cljs.core.LazySeq(null,((function (cell,is_unclicked,is_zero_cell,modified_cell){
return (function (){
var s__16621__$1 = s__16621;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16621__$1);
if(temp__5457__auto__){
var s__16621__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16621__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16621__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16623 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16622 = (0);
while(true){
if((i__16622 < size__4522__auto__)){
var c = cljs.core._nth.call(null,c__4521__auto__,i__16622);
if((!(cljs.core.contains_QMARK_.call(null,explored,c)))){
cljs.core.chunk_append.call(null,b__16623,c);

var G__16624 = (i__16622 + (1));
i__16622 = G__16624;
continue;
} else {
var G__16625 = (i__16622 + (1));
i__16622 = G__16625;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16623),minesweeper$core$maybe_reveal_cell_$_iter__16620.call(null,cljs.core.chunk_rest.call(null,s__16621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16623),null);
}
} else {
var c = cljs.core.first.call(null,s__16621__$2);
if((!(cljs.core.contains_QMARK_.call(null,explored,c)))){
return cljs.core.cons.call(null,c,minesweeper$core$maybe_reveal_cell_$_iter__16620.call(null,cljs.core.rest.call(null,s__16621__$2)));
} else {
var G__16626 = cljs.core.rest.call(null,s__16621__$2);
s__16621__$1 = G__16626;
continue;
}
}
} else {
return null;
}
break;
}
});})(cell,is_unclicked,is_zero_cell,modified_cell))
,null,null));
});})(cell,is_unclicked,is_zero_cell,modified_cell))
;
return iter__4523__auto__.call(null,minesweeper.core.get_adjacent_cells.call(null,x,y));
})())], null);
} else {
if(is_unclicked){
minesweeper.state.decrement_squares_remaining.call(null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modified_cell,cljs.core.PersistentVector.EMPTY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid,cljs.core.PersistentVector.EMPTY], null);

}
}
});
minesweeper.core.explode_from_cell = (function minesweeper$core$explode_from_cell(grid,to_explore,explored){
var cur = cljs.core.peek.call(null,to_explore);
var vec__16627 = cur;
var x = cljs.core.nth.call(null,vec__16627,(0),null);
var y = cljs.core.nth.call(null,vec__16627,(1),null);
if(cljs.core.empty_QMARK_.call(null,to_explore)){
return grid;
} else {
if(cljs.core.empty_QMARK_.call(null,cur)){
return grid;
} else {
if(cljs.core.contains_QMARK_.call(null,explored,cur)){
return minesweeper.core.explode_from_cell.call(null,grid,cljs.core.pop.call(null,to_explore),explored);
} else {
var vec__16630 = minesweeper.core.maybe_reveal_cell.call(null,grid,x,y,explored);
var new_grid = cljs.core.nth.call(null,vec__16630,(0),null);
var more_to_explore = cljs.core.nth.call(null,vec__16630,(1),null);
return minesweeper.core.explode_from_cell.call(null,new_grid,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,more_to_explore,cljs.core.pop.call(null,to_explore))),cljs.core.conj.call(null,explored,cur));

}
}
}
});
minesweeper.core.click_on_cell_BANG_ = (function minesweeper$core$click_on_cell_BANG_(x,y){
var cell = minesweeper.core.get_cell.call(null,cljs.core.deref.call(null,minesweeper.state.grid),x,y);
var cell_has_mine = minesweeper.core.get_cell_value.call(null,cljs.core.deref.call(null,minesweeper.state.grid),((function (cell){
return (function (p1__16633_SHARP_){
return new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(p1__16633_SHARP_);
});})(cell))
,x,y);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"unclicked","unclicked",-31529429))){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
if(cljs.core.not.call(null,cell_has_mine)){
return cljs.core.swap_BANG_.call(null,minesweeper.state.grid,((function (cell,cell_has_mine){
return (function (p1__16634_SHARP_){
return minesweeper.core.explode_from_cell.call(null,p1__16634_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),cljs.core.PersistentHashSet.EMPTY);
});})(cell,cell_has_mine))
);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-first-click","is-first-click",655353539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper.state.game_state)))){
cljs.core.prn.call(null,cljs.core.deref.call(null,minesweeper.state.grid));

minesweeper.core.populate_grid_BANG_.call(null);

cljs.core.prn.call(null,cljs.core.deref.call(null,minesweeper.state.grid));

return minesweeper.core.click_on_cell_BANG_.call(null,x,y);
} else {
cljs.core.swap_BANG_.call(null,minesweeper.state.game_state,((function (cell,cell_has_mine){
return (function (p1__16635_SHARP_){
return cljs.core.assoc.call(null,p1__16635_SHARP_,new cljs.core.Keyword(null,"game-stage","game-stage",190953665),new cljs.core.Keyword(null,"lost","lost",-744692984));
});})(cell,cell_has_mine))
);

return cljs.core.swap_BANG_.call(null,minesweeper.state.grid,((function (cell,cell_has_mine){
return (function (p1__16636_SHARP_){
return minesweeper.core.return_modified_cell.call(null,p1__16636_SHARP_,((function (cell,cell_has_mine){
return (function (c){
return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"clicked","clicked",114423720));
});})(cell,cell_has_mine))
,x,y);
});})(cell,cell_has_mine))
);

}

}
}
});
minesweeper.core.update_game_on_click_BANG_ = (function minesweeper$core$update_game_on_click_BANG_(point){
var x = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point);
var y = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point);
var is_shift_click = cljs.core.deref.call(null,minesweeper.state.shift_down) === true;
if(is_shift_click){
return cljs.core.swap_BANG_.call(null,minesweeper.state.grid,((function (x,y,is_shift_click){
return (function (p1__16637_SHARP_){
return minesweeper.core.return_modified_cell.call(null,p1__16637_SHARP_,minesweeper.core.transition_flag_state,x,y);
});})(x,y,is_shift_click))
);
} else {
return minesweeper.core.click_on_cell_BANG_.call(null,x,y);
}
});
minesweeper.core.act_if_game_notended_BANG_ = (function minesweeper$core$act_if_game_notended_BANG_(point){
if(minesweeper.state.game_ended.call(null) === false){
minesweeper.core.update_game_on_click_BANG_.call(null,point);

return minesweeper.state.check_if_game_won.call(null);
} else {
return cljs.core.prn.call(null,"game-ended");
}
});
minesweeper.core.display = (function minesweeper$core$display(point){
var G__16638 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(point);
var G__16638__$1 = (((G__16638 instanceof cljs.core.Keyword))?G__16638.fqn:null);
switch (G__16638__$1) {
case "unclicked":
var G__16639 = new cljs.core.Keyword(null,"flag-state","flag-state",1599303610).cljs$core$IFn$_invoke$arity$1(point);
var G__16639__$1 = (((G__16639 instanceof cljs.core.Keyword))?G__16639.fqn:null);
switch (G__16639__$1) {
case "flagged":
return "F";

break;
case "unflagged":
return "_";

break;
case "unknown":
return "?";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16639__$1)].join('')));

}

break;
case "clicked":
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))){
return "X";
} else {
return new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point);

}

break;
default:
return "_";

}
});
minesweeper.core.style = (function minesweeper$core$style(point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(point),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point),(1)))?new cljs.core.Keyword(null,"1-mine","1-mine",-1038568625):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point),(2)))?new cljs.core.Keyword(null,"2-mine","2-mine",1499123113):(((new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point) >= (3)))?new cljs.core.Keyword(null,"3-mine","3-mine",-744946494):new cljs.core.Keyword(null,"no-mine","no-mine",-134881797)
)))], null);
});
minesweeper.core.game_header_component = (function minesweeper$core$game_header_component(){
var ended = cljs.core.deref.call(null,minesweeper.state.game_state).call(null,new cljs.core.Keyword(null,"game-stage","game-stage",190953665));
var header_text = ((ended === true)?"Game Over!":"Minesweeper"
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),header_text," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper.state.game_state))], null)], null);
});
minesweeper.core.minesweeper_game_component = (function minesweeper$core$minesweeper_game_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.game_header_component], null),(function (){var iter__4523__auto__ = (function minesweeper$core$minesweeper_game_component_$_iter__16642(s__16643){
return (new cljs.core.LazySeq(null,(function (){
var s__16643__$1 = s__16643;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16643__$1);
if(temp__5457__auto__){
var s__16643__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16643__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16643__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16645 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16644 = (0);
while(true){
if((i__16644 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__16644);
cljs.core.chunk_append.call(null,b__16645,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (i__16644,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__){
return (function minesweeper$core$minesweeper_game_component_$_iter__16642_$_iter__16646(s__16647){
return (new cljs.core.LazySeq(null,((function (i__16644,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__){
return (function (){
var s__16647__$1 = s__16647;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16647__$1);
if(temp__5457__auto____$1){
var s__16647__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16647__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__16647__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__16649 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__16648 = (0);
while(true){
if((i__16648 < size__4522__auto____$1)){
var point = cljs.core._nth.call(null,c__4521__auto____$1,i__16648);
cljs.core.chunk_append.call(null,b__16649,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16648,i__16644,point,c__4521__auto____$1,size__4522__auto____$1,b__16649,s__16647__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__){
return (function (){
return minesweeper.core.act_if_game_notended_BANG_.call(null,point);
});})(i__16648,i__16644,point,c__4521__auto____$1,size__4522__auto____$1,b__16649,s__16647__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)));

var G__16666 = (i__16648 + (1));
i__16648 = G__16666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16649),minesweeper$core$minesweeper_game_component_$_iter__16642_$_iter__16646.call(null,cljs.core.chunk_rest.call(null,s__16647__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16649),null);
}
} else {
var point = cljs.core.first.call(null,s__16647__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16644,point,s__16647__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__){
return (function (){
return minesweeper.core.act_if_game_notended_BANG_.call(null,point);
});})(i__16644,point,s__16647__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)),minesweeper$core$minesweeper_game_component_$_iter__16642_$_iter__16646.call(null,cljs.core.rest.call(null,s__16647__$2)));
}
} else {
return null;
}
break;
}
});})(i__16644,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__))
,null,null));
});})(i__16644,row,c__4521__auto__,size__4522__auto__,b__16645,s__16643__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)], null)));

var G__16667 = (i__16644 + (1));
i__16644 = G__16667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16645),minesweeper$core$minesweeper_game_component_$_iter__16642.call(null,cljs.core.chunk_rest.call(null,s__16643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16645),null);
}
} else {
var row = cljs.core.first.call(null,s__16643__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (row,s__16643__$2,temp__5457__auto__){
return (function minesweeper$core$minesweeper_game_component_$_iter__16642_$_iter__16650(s__16651){
return (new cljs.core.LazySeq(null,((function (row,s__16643__$2,temp__5457__auto__){
return (function (){
var s__16651__$1 = s__16651;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16651__$1);
if(temp__5457__auto____$1){
var s__16651__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16651__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16651__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16653 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16652 = (0);
while(true){
if((i__16652 < size__4522__auto__)){
var point = cljs.core._nth.call(null,c__4521__auto__,i__16652);
cljs.core.chunk_append.call(null,b__16653,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16652,point,c__4521__auto__,size__4522__auto__,b__16653,s__16651__$2,temp__5457__auto____$1,row,s__16643__$2,temp__5457__auto__){
return (function (){
return minesweeper.core.act_if_game_notended_BANG_.call(null,point);
});})(i__16652,point,c__4521__auto__,size__4522__auto__,b__16653,s__16651__$2,temp__5457__auto____$1,row,s__16643__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)));

var G__16668 = (i__16652 + (1));
i__16652 = G__16668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16653),minesweeper$core$minesweeper_game_component_$_iter__16642_$_iter__16650.call(null,cljs.core.chunk_rest.call(null,s__16651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16653),null);
}
} else {
var point = cljs.core.first.call(null,s__16651__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (point,s__16651__$2,temp__5457__auto____$1,row,s__16643__$2,temp__5457__auto__){
return (function (){
return minesweeper.core.act_if_game_notended_BANG_.call(null,point);
});})(point,s__16651__$2,temp__5457__auto____$1,row,s__16643__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)),minesweeper$core$minesweeper_game_component_$_iter__16642_$_iter__16650.call(null,cljs.core.rest.call(null,s__16651__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16643__$2,temp__5457__auto__))
,null,null));
});})(row,s__16643__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)], null)),minesweeper$core$minesweeper_game_component_$_iter__16642.call(null,cljs.core.rest.call(null,s__16643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,minesweeper.state.grid));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462)," --- debug --- "], null),(function (){var iter__4523__auto__ = (function minesweeper$core$minesweeper_game_component_$_iter__16654(s__16655){
return (new cljs.core.LazySeq(null,(function (){
var s__16655__$1 = s__16655;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16655__$1);
if(temp__5457__auto__){
var s__16655__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16655__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16655__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16657 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16656 = (0);
while(true){
if((i__16656 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__16656);
cljs.core.chunk_append.call(null,b__16657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (i__16656,row,c__4521__auto__,size__4522__auto__,b__16657,s__16655__$2,temp__5457__auto__){
return (function minesweeper$core$minesweeper_game_component_$_iter__16654_$_iter__16658(s__16659){
return (new cljs.core.LazySeq(null,((function (i__16656,row,c__4521__auto__,size__4522__auto__,b__16657,s__16655__$2,temp__5457__auto__){
return (function (){
var s__16659__$1 = s__16659;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16659__$1);
if(temp__5457__auto____$1){
var s__16659__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16659__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__16659__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__16661 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__16660 = (0);
while(true){
if((i__16660 < size__4522__auto____$1)){
var point = cljs.core._nth.call(null,c__4521__auto____$1,i__16660);
cljs.core.chunk_append.call(null,b__16661,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))?"X":new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point)
)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)));

var G__16669 = (i__16660 + (1));
i__16660 = G__16669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16661),minesweeper$core$minesweeper_game_component_$_iter__16654_$_iter__16658.call(null,cljs.core.chunk_rest.call(null,s__16659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16661),null);
}
} else {
var point = cljs.core.first.call(null,s__16659__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))?"X":new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point)
)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)),minesweeper$core$minesweeper_game_component_$_iter__16654_$_iter__16658.call(null,cljs.core.rest.call(null,s__16659__$2)));
}
} else {
return null;
}
break;
}
});})(i__16656,row,c__4521__auto__,size__4522__auto__,b__16657,s__16655__$2,temp__5457__auto__))
,null,null));
});})(i__16656,row,c__4521__auto__,size__4522__auto__,b__16657,s__16655__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)], null)));

var G__16670 = (i__16656 + (1));
i__16656 = G__16670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16657),minesweeper$core$minesweeper_game_component_$_iter__16654.call(null,cljs.core.chunk_rest.call(null,s__16655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16657),null);
}
} else {
var row = cljs.core.first.call(null,s__16655__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (row,s__16655__$2,temp__5457__auto__){
return (function minesweeper$core$minesweeper_game_component_$_iter__16654_$_iter__16662(s__16663){
return (new cljs.core.LazySeq(null,((function (row,s__16655__$2,temp__5457__auto__){
return (function (){
var s__16663__$1 = s__16663;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16663__$1);
if(temp__5457__auto____$1){
var s__16663__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16663__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16663__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16665 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16664 = (0);
while(true){
if((i__16664 < size__4522__auto__)){
var point = cljs.core._nth.call(null,c__4521__auto__,i__16664);
cljs.core.chunk_append.call(null,b__16665,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))?"X":new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point)
)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)));

var G__16671 = (i__16664 + (1));
i__16664 = G__16671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16665),minesweeper$core$minesweeper_game_component_$_iter__16654_$_iter__16662.call(null,cljs.core.chunk_rest.call(null,s__16663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16665),null);
}
} else {
var point = cljs.core.first.call(null,s__16663__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))?"X":new cljs.core.Keyword(null,"num-mines","num-mines",642614764).cljs$core$IFn$_invoke$arity$1(point)
)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)),minesweeper$core$minesweeper_game_component_$_iter__16654_$_iter__16662.call(null,cljs.core.rest.call(null,s__16663__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__16655__$2,temp__5457__auto__))
,null,null));
});})(row,s__16655__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)], null)),minesweeper$core$minesweeper_game_component_$_iter__16654.call(null,cljs.core.rest.call(null,s__16655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,minesweeper.state.grid));
})()], null);
});
minesweeper.core.mount = (function minesweeper$core$mount(el){
minesweeper.core.populate_grid_BANG_.call(null);

window.addEventListener("keydown",minesweeper.state.handle_keydown_event_BANG_);

window.addEventListener("keyup",minesweeper.state.handle_keyup_event_BANG_);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.minesweeper_game_component], null),el);
});
minesweeper.core.mount_app_element = (function minesweeper$core$mount_app_element(){
var temp__5457__auto__ = minesweeper.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return minesweeper.core.mount.call(null,el);
} else {
return null;
}
});
minesweeper.core.mount_app_element.call(null);
minesweeper.core.on_reload = (function minesweeper$core$on_reload(){
return minesweeper.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
