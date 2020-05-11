// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21302){
var map__21303 = p__21302;
var map__21303__$1 = (((((!((map__21303 == null))))?(((((map__21303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21303):map__21303);
var m = map__21303__$1;
var n = cljs.core.get.call(null,map__21303__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21303__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21305_21337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21306_21338 = null;
var count__21307_21339 = (0);
var i__21308_21340 = (0);
while(true){
if((i__21308_21340 < count__21307_21339)){
var f_21341 = cljs.core._nth.call(null,chunk__21306_21338,i__21308_21340);
cljs.core.println.call(null,"  ",f_21341);


var G__21342 = seq__21305_21337;
var G__21343 = chunk__21306_21338;
var G__21344 = count__21307_21339;
var G__21345 = (i__21308_21340 + (1));
seq__21305_21337 = G__21342;
chunk__21306_21338 = G__21343;
count__21307_21339 = G__21344;
i__21308_21340 = G__21345;
continue;
} else {
var temp__5457__auto___21346 = cljs.core.seq.call(null,seq__21305_21337);
if(temp__5457__auto___21346){
var seq__21305_21347__$1 = temp__5457__auto___21346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21305_21347__$1)){
var c__4550__auto___21348 = cljs.core.chunk_first.call(null,seq__21305_21347__$1);
var G__21349 = cljs.core.chunk_rest.call(null,seq__21305_21347__$1);
var G__21350 = c__4550__auto___21348;
var G__21351 = cljs.core.count.call(null,c__4550__auto___21348);
var G__21352 = (0);
seq__21305_21337 = G__21349;
chunk__21306_21338 = G__21350;
count__21307_21339 = G__21351;
i__21308_21340 = G__21352;
continue;
} else {
var f_21353 = cljs.core.first.call(null,seq__21305_21347__$1);
cljs.core.println.call(null,"  ",f_21353);


var G__21354 = cljs.core.next.call(null,seq__21305_21347__$1);
var G__21355 = null;
var G__21356 = (0);
var G__21357 = (0);
seq__21305_21337 = G__21354;
chunk__21306_21338 = G__21355;
count__21307_21339 = G__21356;
i__21308_21340 = G__21357;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21358 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21358);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21358)))?cljs.core.second.call(null,arglists_21358):arglists_21358));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21309_21359 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21310_21360 = null;
var count__21311_21361 = (0);
var i__21312_21362 = (0);
while(true){
if((i__21312_21362 < count__21311_21361)){
var vec__21323_21363 = cljs.core._nth.call(null,chunk__21310_21360,i__21312_21362);
var name_21364 = cljs.core.nth.call(null,vec__21323_21363,(0),null);
var map__21326_21365 = cljs.core.nth.call(null,vec__21323_21363,(1),null);
var map__21326_21366__$1 = (((((!((map__21326_21365 == null))))?(((((map__21326_21365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21326_21365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21326_21365):map__21326_21365);
var doc_21367 = cljs.core.get.call(null,map__21326_21366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21368 = cljs.core.get.call(null,map__21326_21366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21364);

cljs.core.println.call(null," ",arglists_21368);

if(cljs.core.truth_(doc_21367)){
cljs.core.println.call(null," ",doc_21367);
} else {
}


var G__21369 = seq__21309_21359;
var G__21370 = chunk__21310_21360;
var G__21371 = count__21311_21361;
var G__21372 = (i__21312_21362 + (1));
seq__21309_21359 = G__21369;
chunk__21310_21360 = G__21370;
count__21311_21361 = G__21371;
i__21312_21362 = G__21372;
continue;
} else {
var temp__5457__auto___21373 = cljs.core.seq.call(null,seq__21309_21359);
if(temp__5457__auto___21373){
var seq__21309_21374__$1 = temp__5457__auto___21373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21309_21374__$1)){
var c__4550__auto___21375 = cljs.core.chunk_first.call(null,seq__21309_21374__$1);
var G__21376 = cljs.core.chunk_rest.call(null,seq__21309_21374__$1);
var G__21377 = c__4550__auto___21375;
var G__21378 = cljs.core.count.call(null,c__4550__auto___21375);
var G__21379 = (0);
seq__21309_21359 = G__21376;
chunk__21310_21360 = G__21377;
count__21311_21361 = G__21378;
i__21312_21362 = G__21379;
continue;
} else {
var vec__21328_21380 = cljs.core.first.call(null,seq__21309_21374__$1);
var name_21381 = cljs.core.nth.call(null,vec__21328_21380,(0),null);
var map__21331_21382 = cljs.core.nth.call(null,vec__21328_21380,(1),null);
var map__21331_21383__$1 = (((((!((map__21331_21382 == null))))?(((((map__21331_21382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21331_21382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21331_21382):map__21331_21382);
var doc_21384 = cljs.core.get.call(null,map__21331_21383__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21385 = cljs.core.get.call(null,map__21331_21383__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21381);

cljs.core.println.call(null," ",arglists_21385);

if(cljs.core.truth_(doc_21384)){
cljs.core.println.call(null," ",doc_21384);
} else {
}


var G__21386 = cljs.core.next.call(null,seq__21309_21374__$1);
var G__21387 = null;
var G__21388 = (0);
var G__21389 = (0);
seq__21309_21359 = G__21386;
chunk__21310_21360 = G__21387;
count__21311_21361 = G__21388;
i__21312_21362 = G__21389;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__21333 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21334 = null;
var count__21335 = (0);
var i__21336 = (0);
while(true){
if((i__21336 < count__21335)){
var role = cljs.core._nth.call(null,chunk__21334,i__21336);
var temp__5457__auto___21390__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21390__$1)){
var spec_21391 = temp__5457__auto___21390__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21391));
} else {
}


var G__21392 = seq__21333;
var G__21393 = chunk__21334;
var G__21394 = count__21335;
var G__21395 = (i__21336 + (1));
seq__21333 = G__21392;
chunk__21334 = G__21393;
count__21335 = G__21394;
i__21336 = G__21395;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__21333);
if(temp__5457__auto____$1){
var seq__21333__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21333__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__21333__$1);
var G__21396 = cljs.core.chunk_rest.call(null,seq__21333__$1);
var G__21397 = c__4550__auto__;
var G__21398 = cljs.core.count.call(null,c__4550__auto__);
var G__21399 = (0);
seq__21333 = G__21396;
chunk__21334 = G__21397;
count__21335 = G__21398;
i__21336 = G__21399;
continue;
} else {
var role = cljs.core.first.call(null,seq__21333__$1);
var temp__5457__auto___21400__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___21400__$2)){
var spec_21401 = temp__5457__auto___21400__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21401));
} else {
}


var G__21402 = cljs.core.next.call(null,seq__21333__$1);
var G__21403 = null;
var G__21404 = (0);
var G__21405 = (0);
seq__21333 = G__21402;
chunk__21334 = G__21403;
count__21335 = G__21404;
i__21336 = G__21405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21406 = cljs.core.conj.call(null,via,t);
var G__21407 = cljs.core.ex_cause.call(null,t);
via = G__21406;
t = G__21407;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21410 = datafied_throwable;
var map__21410__$1 = (((((!((map__21410 == null))))?(((((map__21410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21410):map__21410);
var via = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21410__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21411 = cljs.core.last.call(null,via);
var map__21411__$1 = (((((!((map__21411 == null))))?(((((map__21411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21411):map__21411);
var type = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21411__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21412 = data;
var map__21412__$1 = (((((!((map__21412 == null))))?(((((map__21412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21412):map__21412);
var problems = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21412__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21413 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21413__$1 = (((((!((map__21413 == null))))?(((((map__21413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21413):map__21413);
var top_data = map__21413__$1;
var source = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21418 = phase;
var G__21418__$1 = (((G__21418 instanceof cljs.core.Keyword))?G__21418.fqn:null);
switch (G__21418__$1) {
case "read-source":
var map__21419 = data;
var map__21419__$1 = (((((!((map__21419 == null))))?(((((map__21419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21419):map__21419);
var line = cljs.core.get.call(null,map__21419__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21419__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21421 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21421__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21421,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21421);
var G__21421__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21421__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21421__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21421__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21421__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21422 = top_data;
var G__21422__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21422,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21422);
var G__21422__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21422__$1);
var G__21422__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21422__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21422__$2);
var G__21422__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21422__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21422__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21422__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21422__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21423 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21423,(0),null);
var method = cljs.core.nth.call(null,vec__21423,(1),null);
var file = cljs.core.nth.call(null,vec__21423,(2),null);
var line = cljs.core.nth.call(null,vec__21423,(3),null);
var G__21426 = top_data;
var G__21426__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21426,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21426);
var G__21426__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21426__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21426__$1);
var G__21426__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__21426__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21426__$2);
var G__21426__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21426__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21426__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21426__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21426__$4;
}

break;
case "execution":
var vec__21427 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21427,(0),null);
var method = cljs.core.nth.call(null,vec__21427,(1),null);
var file = cljs.core.nth.call(null,vec__21427,(2),null);
var line = cljs.core.nth.call(null,vec__21427,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__21427,source__$1,method,file,line,G__21418,G__21418__$1,map__21410,map__21410__$1,via,trace,phase,map__21411,map__21411__$1,type,message,data,map__21412,map__21412__$1,problems,fn,caller,map__21413,map__21413__$1,top_data,source){
return (function (p1__21409_SHARP_){
var or__4131__auto__ = (p1__21409_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21409_SHARP_);
}
});})(vec__21427,source__$1,method,file,line,G__21418,G__21418__$1,map__21410,map__21410__$1,via,trace,phase,map__21411,map__21411__$1,type,message,data,map__21412,map__21412__$1,problems,fn,caller,map__21413,map__21413__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__21430 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21430__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21430,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21430);
var G__21430__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21430__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21430__$1);
var G__21430__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21430__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21430__$2);
var G__21430__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21430__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21430__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21430__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21430__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21418__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21434){
var map__21435 = p__21434;
var map__21435__$1 = (((((!((map__21435 == null))))?(((((map__21435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21435):map__21435);
var triage_data = map__21435__$1;
var phase = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21435__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21437 = phase;
var G__21437__$1 = (((G__21437 instanceof cljs.core.Keyword))?G__21437.fqn:null);
switch (G__21437__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21438_21447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21439_21448 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21440_21449 = true;
var _STAR_print_fn_STAR__temp_val__21441_21450 = ((function (_STAR_print_newline_STAR__orig_val__21438_21447,_STAR_print_fn_STAR__orig_val__21439_21448,_STAR_print_newline_STAR__temp_val__21440_21449,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21438_21447,_STAR_print_fn_STAR__orig_val__21439_21448,_STAR_print_newline_STAR__temp_val__21440_21449,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21440_21449;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21441_21450;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21438_21447,_STAR_print_fn_STAR__orig_val__21439_21448,_STAR_print_newline_STAR__temp_val__21440_21449,_STAR_print_fn_STAR__temp_val__21441_21450,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21438_21447,_STAR_print_fn_STAR__orig_val__21439_21448,_STAR_print_newline_STAR__temp_val__21440_21449,_STAR_print_fn_STAR__temp_val__21441_21450,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21432_SHARP_){
return cljs.core.dissoc.call(null,p1__21432_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21438_21447,_STAR_print_fn_STAR__orig_val__21439_21448,_STAR_print_newline_STAR__temp_val__21440_21449,_STAR_print_fn_STAR__temp_val__21441_21450,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21438_21447,_STAR_print_fn_STAR__orig_val__21439_21448,_STAR_print_newline_STAR__temp_val__21440_21449,_STAR_print_fn_STAR__temp_val__21441_21450,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21439_21448;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21438_21447;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21442_21451 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21443_21452 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21444_21453 = true;
var _STAR_print_fn_STAR__temp_val__21445_21454 = ((function (_STAR_print_newline_STAR__orig_val__21442_21451,_STAR_print_fn_STAR__orig_val__21443_21452,_STAR_print_newline_STAR__temp_val__21444_21453,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__21442_21451,_STAR_print_fn_STAR__orig_val__21443_21452,_STAR_print_newline_STAR__temp_val__21444_21453,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21444_21453;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21445_21454;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__21442_21451,_STAR_print_fn_STAR__orig_val__21443_21452,_STAR_print_newline_STAR__temp_val__21444_21453,_STAR_print_fn_STAR__temp_val__21445_21454,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__21442_21451,_STAR_print_fn_STAR__orig_val__21443_21452,_STAR_print_newline_STAR__temp_val__21444_21453,_STAR_print_fn_STAR__temp_val__21445_21454,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__21433_SHARP_){
return cljs.core.dissoc.call(null,p1__21433_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__21442_21451,_STAR_print_fn_STAR__orig_val__21443_21452,_STAR_print_newline_STAR__temp_val__21444_21453,_STAR_print_fn_STAR__temp_val__21445_21454,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__21442_21451,_STAR_print_fn_STAR__orig_val__21443_21452,_STAR_print_newline_STAR__temp_val__21444_21453,_STAR_print_fn_STAR__temp_val__21445_21454,sb__4661__auto__,G__21437,G__21437__$1,loc,class_name,simple_class,cause_type,format,map__21435,map__21435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21443_21452;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21442_21451;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21437__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
