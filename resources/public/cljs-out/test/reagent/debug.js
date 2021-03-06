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
var G__13098__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13099__i = 0, G__13099__a = new Array(arguments.length -  0);
while (G__13099__i < G__13099__a.length) {G__13099__a[G__13099__i] = arguments[G__13099__i + 0]; ++G__13099__i;}
  args = new cljs.core.IndexedSeq(G__13099__a,0,null);
} 
return G__13098__delegate.call(this,args);};
G__13098.cljs$lang$maxFixedArity = 0;
G__13098.cljs$lang$applyTo = (function (arglist__13100){
var args = cljs.core.seq(arglist__13100);
return G__13098__delegate(args);
});
G__13098.cljs$core$IFn$_invoke$arity$variadic = G__13098__delegate;
return G__13098;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13101__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13102__i = 0, G__13102__a = new Array(arguments.length -  0);
while (G__13102__i < G__13102__a.length) {G__13102__a[G__13102__i] = arguments[G__13102__i + 0]; ++G__13102__i;}
  args = new cljs.core.IndexedSeq(G__13102__a,0,null);
} 
return G__13101__delegate.call(this,args);};
G__13101.cljs$lang$maxFixedArity = 0;
G__13101.cljs$lang$applyTo = (function (arglist__13103){
var args = cljs.core.seq(arglist__13103);
return G__13101__delegate(args);
});
G__13101.cljs$core$IFn$_invoke$arity$variadic = G__13101__delegate;
return G__13101;
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
