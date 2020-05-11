// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10406__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10407__i = 0, G__10407__a = new Array(arguments.length -  0);
while (G__10407__i < G__10407__a.length) {G__10407__a[G__10407__i] = arguments[G__10407__i + 0]; ++G__10407__i;}
  args = new cljs.core.IndexedSeq(G__10407__a,0,null);
} 
return G__10406__delegate.call(this,args);};
G__10406.cljs$lang$maxFixedArity = 0;
G__10406.cljs$lang$applyTo = (function (arglist__10408){
var args = cljs.core.seq(arglist__10408);
return G__10406__delegate(args);
});
G__10406.cljs$core$IFn$_invoke$arity$variadic = G__10406__delegate;
return G__10406;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10409__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10410__i = 0, G__10410__a = new Array(arguments.length -  0);
while (G__10410__i < G__10410__a.length) {G__10410__a[G__10410__i] = arguments[G__10410__i + 0]; ++G__10410__i;}
  args = new cljs.core.IndexedSeq(G__10410__a,0,null);
} 
return G__10409__delegate.call(this,args);};
G__10409.cljs$lang$maxFixedArity = 0;
G__10409.cljs$lang$applyTo = (function (arglist__10411){
var args = cljs.core.seq(arglist__10411);
return G__10409__delegate(args);
});
G__10409.cljs$core$IFn$_invoke$arity$variadic = G__10409__delegate;
return G__10409;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
