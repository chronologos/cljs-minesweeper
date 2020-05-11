// Compiled by ClojureScript 1.10.520 {}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('devtools.core');
devtools.core.install_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151)], null));
console.log(cljs.core.range.call(null,(200)));
cljs.core.println.call(null,"This text is printed from src/minesweeper/core.cljs. Go ahead and edit it and see reloading in action.");
minesweeper.core.multiply = (function minesweeper$core$multiply(a,b){
return (a * b);
});
minesweeper.core.get_app_element = (function minesweeper$core$get_app_element(){
return goog.dom.getElement("app");
});
minesweeper.core.max_x = (4);
minesweeper.core.max_y = (4);
minesweeper.core.num_mines = (4);
minesweeper.core.game_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-ended","game-ended",803959446),false], null));
minesweeper.core.grid = reagent.core.atom.call(null,cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function minesweeper$core$iter__10928(s__10929){
return (new cljs.core.LazySeq(null,(function (){
var s__10929__$1 = s__10929;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10929__$1);
if(temp__5457__auto__){
var s__10929__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10929__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10929__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10931 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10930 = (0);
while(true){
if((i__10930 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__10930);
cljs.core.chunk_append.call(null,b__10931,cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (i__10930,y,c__4521__auto__,size__4522__auto__,b__10931,s__10929__$2,temp__5457__auto__){
return (function minesweeper$core$iter__10928_$_iter__10932(s__10933){
return (new cljs.core.LazySeq(null,((function (i__10930,y,c__4521__auto__,size__4522__auto__,b__10931,s__10929__$2,temp__5457__auto__){
return (function (){
var s__10933__$1 = s__10933;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__10933__$1);
if(temp__5457__auto____$1){
var s__10933__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10933__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__10933__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__10935 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__10934 = (0);
while(true){
if((i__10934 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__10934);
cljs.core.chunk_append.call(null,b__10935,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mine-num","mine-num",1067400209),(0),new cljs.core.Keyword(null,"has-mine","has-mine",389744473),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unclicked","unclicked",-31529429),new cljs.core.Keyword(null,"row","row",-570139521),y,new cljs.core.Keyword(null,"col","col",-1959363084),x], null));

var G__10940 = (i__10934 + (1));
i__10934 = G__10940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10935),minesweeper$core$iter__10928_$_iter__10932.call(null,cljs.core.chunk_rest.call(null,s__10933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10935),null);
}
} else {
var x = cljs.core.first.call(null,s__10933__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mine-num","mine-num",1067400209),(0),new cljs.core.Keyword(null,"has-mine","has-mine",389744473),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unclicked","unclicked",-31529429),new cljs.core.Keyword(null,"row","row",-570139521),y,new cljs.core.Keyword(null,"col","col",-1959363084),x], null),minesweeper$core$iter__10928_$_iter__10932.call(null,cljs.core.rest.call(null,s__10933__$2)));
}
} else {
return null;
}
break;
}
});})(i__10930,y,c__4521__auto__,size__4522__auto__,b__10931,s__10929__$2,temp__5457__auto__))
,null,null));
});})(i__10930,y,c__4521__auto__,size__4522__auto__,b__10931,s__10929__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,minesweeper.core.max_y));
})()));

var G__10941 = (i__10930 + (1));
i__10930 = G__10941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10931),minesweeper$core$iter__10928.call(null,cljs.core.chunk_rest.call(null,s__10929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10931),null);
}
} else {
var y = cljs.core.first.call(null,s__10929__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (y,s__10929__$2,temp__5457__auto__){
return (function minesweeper$core$iter__10928_$_iter__10936(s__10937){
return (new cljs.core.LazySeq(null,((function (y,s__10929__$2,temp__5457__auto__){
return (function (){
var s__10937__$1 = s__10937;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__10937__$1);
if(temp__5457__auto____$1){
var s__10937__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10937__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10937__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10939 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10938 = (0);
while(true){
if((i__10938 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__10938);
cljs.core.chunk_append.call(null,b__10939,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mine-num","mine-num",1067400209),(0),new cljs.core.Keyword(null,"has-mine","has-mine",389744473),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unclicked","unclicked",-31529429),new cljs.core.Keyword(null,"row","row",-570139521),y,new cljs.core.Keyword(null,"col","col",-1959363084),x], null));

var G__10942 = (i__10938 + (1));
i__10938 = G__10942;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10939),minesweeper$core$iter__10928_$_iter__10936.call(null,cljs.core.chunk_rest.call(null,s__10937__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10939),null);
}
} else {
var x = cljs.core.first.call(null,s__10937__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mine-num","mine-num",1067400209),(0),new cljs.core.Keyword(null,"has-mine","has-mine",389744473),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unclicked","unclicked",-31529429),new cljs.core.Keyword(null,"row","row",-570139521),y,new cljs.core.Keyword(null,"col","col",-1959363084),x], null),minesweeper$core$iter__10928_$_iter__10936.call(null,cljs.core.rest.call(null,s__10937__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__10929__$2,temp__5457__auto__))
,null,null));
});})(y,s__10929__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,minesweeper.core.max_y));
})()),minesweeper$core$iter__10928.call(null,cljs.core.rest.call(null,s__10929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,minesweeper.core.max_x));
})()));
minesweeper.core.get_adjacent_cells = (function minesweeper$core$get_adjacent_cells(x,y){
var iter__4523__auto__ = (function minesweeper$core$get_adjacent_cells_$_iter__10943(s__10944){
return (new cljs.core.LazySeq(null,(function (){
var s__10944__$1 = s__10944;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10944__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var dx = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__10944__$1,dx,xs__6012__auto__,temp__5457__auto__){
return (function minesweeper$core$get_adjacent_cells_$_iter__10943_$_iter__10945(s__10946){
return (new cljs.core.LazySeq(null,((function (s__10944__$1,dx,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__10946__$1 = s__10946;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__10946__$1);
if(temp__5457__auto____$1){
var s__10946__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10946__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10946__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10948 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10947 = (0);
while(true){
if((i__10947 < size__4522__auto__)){
var dy = cljs.core._nth.call(null,c__4521__auto__,i__10947);
if(cljs.core.not_EQ_.call(null,dx,dy,(0))){
cljs.core.chunk_append.call(null,b__10948,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null));

var G__10949 = (i__10947 + (1));
i__10947 = G__10949;
continue;
} else {
var G__10950 = (i__10947 + (1));
i__10947 = G__10950;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10948),minesweeper$core$get_adjacent_cells_$_iter__10943_$_iter__10945.call(null,cljs.core.chunk_rest.call(null,s__10946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10948),null);
}
} else {
var dy = cljs.core.first.call(null,s__10946__$2);
if(cljs.core.not_EQ_.call(null,dx,dy,(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),minesweeper$core$get_adjacent_cells_$_iter__10943_$_iter__10945.call(null,cljs.core.rest.call(null,s__10946__$2)));
} else {
var G__10951 = cljs.core.rest.call(null,s__10946__$2);
s__10946__$1 = G__10951;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__10944__$1,dx,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__10944__$1,dx,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,minesweeper$core$get_adjacent_cells_$_iter__10943.call(null,cljs.core.rest.call(null,s__10944__$1)));
} else {
var G__10952 = cljs.core.rest.call(null,s__10944__$1);
s__10944__$1 = G__10952;
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
});
minesweeper.core.get_cell_value = (function minesweeper$core$get_cell_value(grid,getter,x,y){
var row = cljs.core.nth.call(null,grid,y);
var col = cljs.core.nth.call(null,row,x);
return getter.call(null,col);
});
minesweeper.core.return_modified_cell = (function minesweeper$core$return_modified_cell(grid,f,x,y){
var row = cljs.core.nth.call(null,grid,y);
var col = cljs.core.nth.call(null,row,x);
var modified_col = f.call(null,col);
var new_row = cljs.core.assoc.call(null,row,x,modified_col);
var new_grid = cljs.core.assoc.call(null,grid,y,new_row);
return new_grid;
});
minesweeper.core.inc_num_mines = (function minesweeper$core$inc_num_mines(grid,p__10954){
var vec__10955 = p__10954;
var x = cljs.core.nth.call(null,vec__10955,(0),null);
var y = cljs.core.nth.call(null,vec__10955,(1),null);
return minesweeper.core.return_modified_cell.call(null,grid,((function (vec__10955,x,y){
return (function (p1__10953_SHARP_){
return cljs.core.assoc.call(null,p1__10953_SHARP_,new cljs.core.Keyword(null,"mine-num","mine-num",1067400209),(new cljs.core.Keyword(null,"mine-num","mine-num",1067400209).cljs$core$IFn$_invoke$arity$1(p1__10953_SHARP_) + (1)));
});})(vec__10955,x,y))
,x,y);
});
minesweeper.core.gen_mines = (function minesweeper$core$gen_mines(grid,k){
while(true){
var x = cljs.core.rand_int.call(null,minesweeper.core.max_x);
var y = cljs.core.rand_int.call(null,minesweeper.core.max_y);
var col = minesweeper.core.get_cell_value.call(null,grid,((function (grid,k,x,y){
return (function (p1__10958_SHARP_){
return new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(p1__10958_SHARP_);
});})(grid,k,x,y))
,x,y);
var adjacents = minesweeper.core.get_adjacent_cells.call(null,x,y);
var _ = cljs.core.prn.call(null,["adjacents: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(adjacents)].join(''));
var grid_with_mine = minesweeper.core.return_modified_cell.call(null,grid,((function (grid,k,x,y,col,adjacents,_){
return (function (p1__10959_SHARP_){
return cljs.core.assoc.call(null,p1__10959_SHARP_,new cljs.core.Keyword(null,"has-mine","has-mine",389744473),true);
});})(grid,k,x,y,col,adjacents,_))
,x,y);
var ___$1 = cljs.core.prn.call(null,["grid-with-mine:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grid_with_mine)].join(''));
var grid_with_mine_updated_minenums = cljs.core.reduce.call(null,((function (grid,k,x,y,col,adjacents,_,grid_with_mine,___$1){
return (function (p1__10960_SHARP_,p2__10961_SHARP_){
return minesweeper.core.inc_num_mines.call(null,p1__10960_SHARP_,p2__10961_SHARP_);
});})(grid,k,x,y,col,adjacents,_,grid_with_mine,___$1))
,grid_with_mine,adjacents);
var ___$2 = cljs.core.prn.call(null,["latest grid: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(grid_with_mine_updated_minenums)].join(''));
var grid_10962__$1 = grid;
var k_10963__$1 = k;
while(true){
break;
}

if(cljs.core._EQ_.call(null,k,(0))){
return grid;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(col))){
var G__10964 = grid;
var G__10965 = k;
grid = G__10964;
k = G__10965;
continue;
} else {
var G__10966 = grid_with_mine_updated_minenums;
var G__10967 = (k - (1));
grid = G__10966;
k = G__10967;
continue;

}
}
break;
}
});
minesweeper.core.grid_populate = (function minesweeper$core$grid_populate(){
cljs.core.swap_BANG_.call(null,minesweeper.core.grid,minesweeper.core.gen_mines,minesweeper.core.num_mines);

return (
minesweeper.core.click_on_point_in_grid = (function minesweeper$core$grid_populate_$_click_on_point_in_grid(grid,point){
var game_ended = new cljs.core.Keyword(null,"game-ended","game-ended",803959446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper.core.game_state));
var row = cljs.core.nth.call(null,grid,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point));
var col = cljs.core.nth.call(null,row,new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point));
var modified_col = cljs.core.assoc.call(null,col,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"clicked","clicked",114423720));
var new_row = cljs.core.assoc.call(null,row,new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point),modified_col);
var new_grid = cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point),new_row);
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(modified_col))){
cljs.core.swap_BANG_.call(null,minesweeper.core.game_state,((function (game_ended,row,col,modified_col,new_row,new_grid){
return (function (p1__10968_SHARP_){
return cljs.core.assoc.call(null,p1__10968_SHARP_,new cljs.core.Keyword(null,"game-ended","game-ended",803959446),true);
});})(game_ended,row,col,modified_col,new_row,new_grid))
);
} else {
}

if(game_ended === false){
return new_grid;
} else {
return grid;

}
}))
;
});
minesweeper.core.display = (function minesweeper$core$display(point){
var G__10969 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(point);
var G__10969__$1 = (((G__10969 instanceof cljs.core.Keyword))?G__10969.fqn:null);
switch (G__10969__$1) {
case "unclicked":
return "?";

break;
case "clicked":
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))){
return "X";
} else {
return new cljs.core.Keyword(null,"mine-num","mine-num",1067400209).cljs$core$IFn$_invoke$arity$1(point);

}

break;
default:
return "?";

}
});
minesweeper.core.style = (function minesweeper$core$style(point){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(point),(cljs.core.truth_(new cljs.core.Keyword(null,"has-mine","has-mine",389744473).cljs$core$IFn$_invoke$arity$1(point))?new cljs.core.Keyword(null,"has-mine","has-mine",389744473):new cljs.core.Keyword(null,"no-mine","no-mine",-134881797))], null);
});
minesweeper.core.header_component = (function minesweeper$core$header_component(){
var ended = cljs.core.deref.call(null,minesweeper.core.game_state).call(null,new cljs.core.Keyword(null,"game-ended","game-ended",803959446));
var _ = cljs.core.prn.call(null,["ended: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ended)].join(''));
var header_text = ((ended === true)?"Game Over!":"Minesweeper"
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),header_text," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,minesweeper.core.game_state))], null)], null);
});
minesweeper.core.simple_example = (function minesweeper$core$simple_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.header_component], null),(function (){var iter__4523__auto__ = (function minesweeper$core$simple_example_$_iter__10971(s__10972){
return (new cljs.core.LazySeq(null,(function (){
var s__10972__$1 = s__10972;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__10972__$1);
if(temp__5457__auto__){
var s__10972__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10972__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10972__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10974 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10973 = (0);
while(true){
if((i__10973 < size__4522__auto__)){
var row = cljs.core._nth.call(null,c__4521__auto__,i__10973);
cljs.core.chunk_append.call(null,b__10974,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (i__10973,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__){
return (function minesweeper$core$simple_example_$_iter__10971_$_iter__10975(s__10976){
return (new cljs.core.LazySeq(null,((function (i__10973,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__){
return (function (){
var s__10976__$1 = s__10976;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__10976__$1);
if(temp__5457__auto____$1){
var s__10976__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10976__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__10976__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__10978 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__10977 = (0);
while(true){
if((i__10977 < size__4522__auto____$1)){
var point = cljs.core._nth.call(null,c__4521__auto____$1,i__10977);
cljs.core.chunk_append.call(null,b__10978,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10977,i__10973,point,c__4521__auto____$1,size__4522__auto____$1,b__10978,s__10976__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,minesweeper.core.grid,minesweeper.core.click_on_point_in_grid,point);
});})(i__10977,i__10973,point,c__4521__auto____$1,size__4522__auto____$1,b__10978,s__10976__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)));

var G__10983 = (i__10977 + (1));
i__10977 = G__10983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10978),minesweeper$core$simple_example_$_iter__10971_$_iter__10975.call(null,cljs.core.chunk_rest.call(null,s__10976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10978),null);
}
} else {
var point = cljs.core.first.call(null,s__10976__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10973,point,s__10976__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,minesweeper.core.grid,minesweeper.core.click_on_point_in_grid,point);
});})(i__10973,point,s__10976__$2,temp__5457__auto____$1,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)),minesweeper$core$simple_example_$_iter__10971_$_iter__10975.call(null,cljs.core.rest.call(null,s__10976__$2)));
}
} else {
return null;
}
break;
}
});})(i__10973,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__))
,null,null));
});})(i__10973,row,c__4521__auto__,size__4522__auto__,b__10974,s__10972__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)], null)));

var G__10984 = (i__10973 + (1));
i__10973 = G__10984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10974),minesweeper$core$simple_example_$_iter__10971.call(null,cljs.core.chunk_rest.call(null,s__10972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10974),null);
}
} else {
var row = cljs.core.first.call(null,s__10972__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4523__auto__ = ((function (row,s__10972__$2,temp__5457__auto__){
return (function minesweeper$core$simple_example_$_iter__10971_$_iter__10979(s__10980){
return (new cljs.core.LazySeq(null,((function (row,s__10972__$2,temp__5457__auto__){
return (function (){
var s__10980__$1 = s__10980;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__10980__$1);
if(temp__5457__auto____$1){
var s__10980__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10980__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__10980__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__10982 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__10981 = (0);
while(true){
if((i__10981 < size__4522__auto__)){
var point = cljs.core._nth.call(null,c__4521__auto__,i__10981);
cljs.core.chunk_append.call(null,b__10982,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__10981,point,c__4521__auto__,size__4522__auto__,b__10982,s__10980__$2,temp__5457__auto____$1,row,s__10972__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,minesweeper.core.grid,minesweeper.core.click_on_point_in_grid,point);
});})(i__10981,point,c__4521__auto__,size__4522__auto__,b__10982,s__10980__$2,temp__5457__auto____$1,row,s__10972__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)));

var G__10985 = (i__10981 + (1));
i__10981 = G__10985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10982),minesweeper$core$simple_example_$_iter__10971_$_iter__10979.call(null,cljs.core.chunk_rest.call(null,s__10980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10982),null);
}
} else {
var point = cljs.core.first.call(null,s__10980__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper.core.style.call(null,point),new cljs.core.Keyword(null,"value","value",305978217),minesweeper.core.display.call(null,point),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (point,s__10980__$2,temp__5457__auto____$1,row,s__10972__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,minesweeper.core.grid,minesweeper.core.click_on_point_in_grid,point);
});})(point,s__10980__$2,temp__5457__auto____$1,row,s__10972__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(point)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(point))].join('')], null)),minesweeper$core$simple_example_$_iter__10971_$_iter__10979.call(null,cljs.core.rest.call(null,s__10980__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__10972__$2,temp__5457__auto__))
,null,null));
});})(row,s__10972__$2,temp__5457__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)], null)),minesweeper$core$simple_example_$_iter__10971.call(null,cljs.core.rest.call(null,s__10972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,minesweeper.core.grid));
})()], null);
});
minesweeper.core.mount = (function minesweeper$core$mount(el){
minesweeper.core.grid_populate.call(null);

cljs.core.prn.call(null,cljs.core.deref.call(null,minesweeper.core.grid));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.simple_example], null),el);
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
