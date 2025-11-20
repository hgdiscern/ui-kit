import { jsx as ce, jsxs as Kt } from "react/jsx-runtime";
import * as k from "react";
import Ue, { isValidElement as it, cloneElement as at, Children as Rn } from "react";
import Pn from "@emotion/styled";
import { keyframes as He, css as Yr } from "@emotion/react";
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tt = { exports: {} }, rt = { exports: {} }, K = {};
var ir;
function An() {
  if (ir) return K;
  ir = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function A(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case l:
                case p:
                case y:
                case v:
                case s:
                  return b;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function S(b) {
    return A(b) === f;
  }
  return K.AsyncMode = u, K.ConcurrentMode = f, K.ContextConsumer = l, K.ContextProvider = s, K.Element = t, K.ForwardRef = p, K.Fragment = n, K.Lazy = y, K.Memo = v, K.Portal = r, K.Profiler = i, K.StrictMode = o, K.Suspense = h, K.isAsyncMode = function(b) {
    return S(b) || A(b) === u;
  }, K.isConcurrentMode = S, K.isContextConsumer = function(b) {
    return A(b) === l;
  }, K.isContextProvider = function(b) {
    return A(b) === s;
  }, K.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, K.isForwardRef = function(b) {
    return A(b) === p;
  }, K.isFragment = function(b) {
    return A(b) === n;
  }, K.isLazy = function(b) {
    return A(b) === y;
  }, K.isMemo = function(b) {
    return A(b) === v;
  }, K.isPortal = function(b) {
    return A(b) === r;
  }, K.isProfiler = function(b) {
    return A(b) === i;
  }, K.isStrictMode = function(b) {
    return A(b) === o;
  }, K.isSuspense = function(b) {
    return A(b) === h;
  }, K.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === h || b === g || typeof b == "object" && b !== null && (b.$$typeof === y || b.$$typeof === v || b.$$typeof === s || b.$$typeof === l || b.$$typeof === p || b.$$typeof === E || b.$$typeof === R || b.$$typeof === P || b.$$typeof === c);
  }, K.typeOf = A, K;
}
var H = {};
var ar;
function kn() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function A(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === f || O === i || O === o || O === h || O === g || typeof O == "object" && O !== null && (O.$$typeof === y || O.$$typeof === v || O.$$typeof === s || O.$$typeof === l || O.$$typeof === p || O.$$typeof === E || O.$$typeof === R || O.$$typeof === P || O.$$typeof === c);
    }
    function S(O) {
      if (typeof O == "object" && O !== null) {
        var me = O.$$typeof;
        switch (me) {
          case t:
            var we = O.type;
            switch (we) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case h:
                return we;
              default:
                var Ze = we && we.$$typeof;
                switch (Ze) {
                  case l:
                  case p:
                  case y:
                  case v:
                  case s:
                    return Ze;
                  default:
                    return me;
                }
            }
          case r:
            return me;
        }
      }
    }
    var b = u, w = f, L = l, ee = s, Y = t, q = p, z = n, a = y, x = v, T = r, _ = i, I = o, te = h, le = !1;
    function ie(O) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C(O) || S(O) === u;
    }
    function C(O) {
      return S(O) === f;
    }
    function $(O) {
      return S(O) === l;
    }
    function N(O) {
      return S(O) === s;
    }
    function V(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function M(O) {
      return S(O) === p;
    }
    function F(O) {
      return S(O) === n;
    }
    function B(O) {
      return S(O) === y;
    }
    function j(O) {
      return S(O) === v;
    }
    function W(O) {
      return S(O) === r;
    }
    function G(O) {
      return S(O) === i;
    }
    function U(O) {
      return S(O) === o;
    }
    function ue(O) {
      return S(O) === h;
    }
    H.AsyncMode = b, H.ConcurrentMode = w, H.ContextConsumer = L, H.ContextProvider = ee, H.Element = Y, H.ForwardRef = q, H.Fragment = z, H.Lazy = a, H.Memo = x, H.Portal = T, H.Profiler = _, H.StrictMode = I, H.Suspense = te, H.isAsyncMode = ie, H.isConcurrentMode = C, H.isContextConsumer = $, H.isContextProvider = N, H.isElement = V, H.isForwardRef = M, H.isFragment = F, H.isLazy = B, H.isMemo = j, H.isPortal = W, H.isProfiler = G, H.isStrictMode = U, H.isSuspense = ue, H.isValidElementType = A, H.typeOf = S;
  })()), H;
}
var sr;
function Gr() {
  return sr || (sr = 1, process.env.NODE_ENV === "production" ? rt.exports = An() : rt.exports = kn()), rt.exports;
}
var _t, lr;
function In() {
  if (lr) return _t;
  lr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _t = o() ? Object.assign : function(i, s) {
    for (var l, u = n(i), f, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var h in l)
        t.call(l, h) && (u[h] = l[h]);
      if (e) {
        f = e(l);
        for (var g = 0; g < f.length; g++)
          r.call(l, f[g]) && (u[f[g]] = l[f[g]]);
      }
    }
    return u;
  }, _t;
}
var At, cr;
function Ht() {
  if (cr) return At;
  cr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return At = e, At;
}
var kt, ur;
function qr() {
  return ur || (ur = 1, kt = Function.call.bind(Object.prototype.hasOwnProperty)), kt;
}
var It, fr;
function Mn() {
  if (fr) return It;
  fr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ht(), r = {}, n = /* @__PURE__ */ qr();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var g = Error(
                (u || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            h = i[p](s, p, u, l, null, t);
          } catch (y) {
            h = y;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + l + " type: " + h.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, It = o, It;
}
var Mt, dr;
function Nn() {
  if (dr) return Mt;
  dr = 1;
  var e = Gr(), t = In(), r = /* @__PURE__ */ Ht(), n = /* @__PURE__ */ qr(), o = /* @__PURE__ */ Mn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Mt = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(C) {
      var $ = C && (f && C[f] || C[p]);
      if (typeof $ == "function")
        return $;
    }
    var g = "<<anonymous>>", v = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: P(),
      arrayOf: A,
      element: S(),
      elementType: b(),
      instanceOf: w,
      node: q(),
      objectOf: ee,
      oneOf: L,
      oneOfType: Y,
      shape: a,
      exact: x
    };
    function y(C, $) {
      return C === $ ? C !== 0 || 1 / C === 1 / $ : C !== C && $ !== $;
    }
    function c(C, $) {
      this.message = C, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function E(C) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, N = 0;
      function V(F, B, j, W, G, U, ue) {
        if (W = W || g, U = U || j, ue !== r) {
          if (u) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = W + ":" + j;
            !$[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[me] = !0, N++);
          }
        }
        return B[j] == null ? F ? B[j] === null ? new c("The " + G + " `" + U + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new c("The " + G + " `" + U + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : C(B, j, W, G, U);
      }
      var M = V.bind(null, !1);
      return M.isRequired = V.bind(null, !0), M;
    }
    function R(C) {
      function $(N, V, M, F, B, j) {
        var W = N[V], G = I(W);
        if (G !== C) {
          var U = te(W);
          return new c(
            "Invalid " + F + " `" + B + "` of type " + ("`" + U + "` supplied to `" + M + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return E($);
    }
    function P() {
      return E(s);
    }
    function A(C) {
      function $(N, V, M, F, B) {
        if (typeof C != "function")
          return new c("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var j = N[V];
        if (!Array.isArray(j)) {
          var W = I(j);
          return new c("Invalid " + F + " `" + B + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected an array."));
        }
        for (var G = 0; G < j.length; G++) {
          var U = C(j, G, M, F, B + "[" + G + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return E($);
    }
    function S() {
      function C($, N, V, M, F) {
        var B = $[N];
        if (!l(B)) {
          var j = I(B);
          return new c("Invalid " + M + " `" + F + "` of type " + ("`" + j + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(C);
    }
    function b() {
      function C($, N, V, M, F) {
        var B = $[N];
        if (!e.isValidElementType(B)) {
          var j = I(B);
          return new c("Invalid " + M + " `" + F + "` of type " + ("`" + j + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(C);
    }
    function w(C) {
      function $(N, V, M, F, B) {
        if (!(N[V] instanceof C)) {
          var j = C.name || g, W = ie(N[V]);
          return new c("Invalid " + F + " `" + B + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return E($);
    }
    function L(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function $(N, V, M, F, B) {
        for (var j = N[V], W = 0; W < C.length; W++)
          if (y(j, C[W]))
            return null;
        var G = JSON.stringify(C, function(ue, O) {
          var me = te(O);
          return me === "symbol" ? String(O) : O;
        });
        return new c("Invalid " + F + " `" + B + "` of value `" + String(j) + "` " + ("supplied to `" + M + "`, expected one of " + G + "."));
      }
      return E($);
    }
    function ee(C) {
      function $(N, V, M, F, B) {
        if (typeof C != "function")
          return new c("Property `" + B + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var j = N[V], W = I(j);
        if (W !== "object")
          return new c("Invalid " + F + " `" + B + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected an object."));
        for (var G in j)
          if (n(j, G)) {
            var U = C(j, G, M, F, B + "." + G, r);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return E($);
    }
    function Y(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var $ = 0; $ < C.length; $++) {
        var N = C[$];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(N) + " at index " + $ + "."
          ), s;
      }
      function V(M, F, B, j, W) {
        for (var G = [], U = 0; U < C.length; U++) {
          var ue = C[U], O = ue(M, F, B, j, W, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && G.push(O.data.expectedType);
        }
        var me = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new c("Invalid " + j + " `" + W + "` supplied to " + ("`" + B + "`" + me + "."));
      }
      return E(V);
    }
    function q() {
      function C($, N, V, M, F) {
        return T($[N]) ? null : new c("Invalid " + M + " `" + F + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return E(C);
    }
    function z(C, $, N, V, M) {
      return new c(
        (C || "React class") + ": " + $ + " type `" + N + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function a(C) {
      function $(N, V, M, F, B) {
        var j = N[V], W = I(j);
        if (W !== "object")
          return new c("Invalid " + F + " `" + B + "` of type `" + W + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var G in C) {
          var U = C[G];
          if (typeof U != "function")
            return z(M, F, B, G, te(U));
          var ue = U(j, G, M, F, B + "." + G, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return E($);
    }
    function x(C) {
      function $(N, V, M, F, B) {
        var j = N[V], W = I(j);
        if (W !== "object")
          return new c("Invalid " + F + " `" + B + "` of type `" + W + "` " + ("supplied to `" + M + "`, expected `object`."));
        var G = t({}, N[V], C);
        for (var U in G) {
          var ue = C[U];
          if (n(C, U) && typeof ue != "function")
            return z(M, F, B, U, te(ue));
          if (!ue)
            return new c(
              "Invalid " + F + " `" + B + "` key `" + U + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(N[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var O = ue(j, U, M, F, B + "." + U, r);
          if (O)
            return O;
        }
        return null;
      }
      return E($);
    }
    function T(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(T);
          if (C === null || l(C))
            return !0;
          var $ = h(C);
          if ($) {
            var N = $.call(C), V;
            if ($ !== C.entries) {
              for (; !(V = N.next()).done; )
                if (!T(V.value))
                  return !1;
            } else
              for (; !(V = N.next()).done; ) {
                var M = V.value;
                if (M && !T(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(C, $) {
      return C === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function I(C) {
      var $ = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : _($, C) ? "symbol" : $;
    }
    function te(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var $ = I(C);
      if ($ === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function le(C) {
      var $ = te(C);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function ie(C) {
      return !C.constructor || !C.constructor.name ? g : C.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, Mt;
}
var Nt, pr;
function Bn() {
  if (pr) return Nt;
  pr = 1;
  var e = /* @__PURE__ */ Ht();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Nt = function() {
    function n(s, l, u, f, p, h) {
      if (h !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Nt;
}
var mr;
function Dn() {
  if (mr) return tt.exports;
  if (mr = 1, process.env.NODE_ENV !== "production") {
    var e = Gr(), t = !0;
    tt.exports = /* @__PURE__ */ Nn()(e.isElement, t);
  } else
    tt.exports = /* @__PURE__ */ Bn()();
  return tt.exports;
}
var Vn = /* @__PURE__ */ Dn();
const d = /* @__PURE__ */ _n(Vn);
function Kr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Kr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function fe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Kr(e)) && (n && (n += " "), n += t);
  return n;
}
function ct(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], l = t[i];
        if (!l)
          n[i] = s || {};
        else if (!s)
          n[i] = l;
        else {
          n[i] = {
            ...l
          };
          for (const u in s)
            if (Object.prototype.hasOwnProperty.call(s, u)) {
              const f = u;
              n[i][f] = ct(s[f], l[f], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = fe(e?.className, t?.className) : i === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function Xt(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", l = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (s += (l === !0 ? "" : " ") + t(f), l = !1, r && r[f] && (s += " " + r[f]));
    }
    n[o] = s;
  }
  return n;
}
const hr = (e) => e, jn = () => {
  let e = hr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = hr;
    }
  };
}, Ln = jn();
function Oe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function se(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Oe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var nt = { exports: {} }, J = {};
var gr;
function zn() {
  if (gr) return J;
  gr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
  function y(c) {
    if (typeof c == "object" && c !== null) {
      var E = c.$$typeof;
      switch (E) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case g:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case l:
                case h:
                case p:
                  return c;
                case i:
                  return c;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return J.ContextConsumer = i, J.ContextProvider = s, J.Element = e, J.ForwardRef = l, J.Fragment = r, J.Lazy = h, J.Memo = p, J.Portal = t, J.Profiler = o, J.StrictMode = n, J.Suspense = u, J.SuspenseList = f, J.isContextConsumer = function(c) {
    return y(c) === i;
  }, J.isContextProvider = function(c) {
    return y(c) === s;
  }, J.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, J.isForwardRef = function(c) {
    return y(c) === l;
  }, J.isFragment = function(c) {
    return y(c) === r;
  }, J.isLazy = function(c) {
    return y(c) === h;
  }, J.isMemo = function(c) {
    return y(c) === p;
  }, J.isPortal = function(c) {
    return y(c) === t;
  }, J.isProfiler = function(c) {
    return y(c) === o;
  }, J.isStrictMode = function(c) {
    return y(c) === n;
  }, J.isSuspense = function(c) {
    return y(c) === u;
  }, J.isSuspenseList = function(c) {
    return y(c) === f;
  }, J.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === p || c.$$typeof === s || c.$$typeof === i || c.$$typeof === l || c.$$typeof === v || c.getModuleId !== void 0);
  }, J.typeOf = y, J;
}
var Z = {};
var yr;
function Fn() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var E = c.$$typeof;
        switch (E) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case f:
              case p:
              case v:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case l:
                  case u:
                  case g:
                  case h:
                    return c;
                  case s:
                    return c;
                  default:
                    return E;
                }
            }
          case r:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
    Z.ContextConsumer = s, Z.ContextProvider = l, Z.Element = t, Z.ForwardRef = u, Z.Fragment = n, Z.Lazy = g, Z.Memo = h, Z.Portal = r, Z.Profiler = i, Z.StrictMode = o, Z.Suspense = f, Z.SuspenseList = p, Z.isContextConsumer = function(c) {
      return e(c) === s;
    }, Z.isContextProvider = function(c) {
      return e(c) === l;
    }, Z.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, Z.isForwardRef = function(c) {
      return e(c) === u;
    }, Z.isFragment = function(c) {
      return e(c) === n;
    }, Z.isLazy = function(c) {
      return e(c) === g;
    }, Z.isMemo = function(c) {
      return e(c) === h;
    }, Z.isPortal = function(c) {
      return e(c) === r;
    }, Z.isProfiler = function(c) {
      return e(c) === i;
    }, Z.isStrictMode = function(c) {
      return e(c) === o;
    }, Z.isSuspense = function(c) {
      return e(c) === f;
    }, Z.isSuspenseList = function(c) {
      return e(c) === p;
    }, Z.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === f || c === p || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === h || c.$$typeof === l || c.$$typeof === s || c.$$typeof === u || c.$$typeof === y || c.getModuleId !== void 0);
    }, Z.typeOf = e;
  })()), Z;
}
var br;
function Wn() {
  return br || (br = 1, process.env.NODE_ENV === "production" ? nt.exports = /* @__PURE__ */ zn() : nt.exports = /* @__PURE__ */ Fn()), nt.exports;
}
var ut = /* @__PURE__ */ Wn();
function Te(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Hr(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || ut.isValidElementType(e) || !Te(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Hr(e[r]);
  }), t;
}
function pe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Te(e) && Te(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ k.isValidElement(t[o]) || ut.isValidElementType(t[o]) ? n[o] = t[o] : Te(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Te(e[o]) ? n[o] = pe(e[o], t[o], r) : r.clone ? n[o] = Te(t[o]) ? Hr(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function qe(e, t) {
  return t ? pe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Pe = process.env.NODE_ENV !== "production" ? d.oneOfType([d.number, d.string, d.object, d.array]) : {};
function vr(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(n.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Un(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Yn(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Oe(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Gn(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...l) => t(e.breakpoints.up(...l), s), i.down = (...l) => t(e.breakpoints.down(...l), s), i.between = (...l) => t(e.breakpoints.between(...l), s), i.only = (...l) => t(e.breakpoints.only(...l), s), i.not = (...l) => {
      const u = t(e.breakpoints.not(...l), s);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const mt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Sr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${mt[e]}px)`
}, qn = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : mt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function xe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Sr;
    return t.reduce((s, l, u) => (s[i.up(i.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Sr;
    return Object.keys(t).reduce((s, l) => {
      if (Un(i.keys, l)) {
        const u = Yn(n.containerQueries ? n : qn, l);
        u && (s[u] = r(t[l], l));
      } else if (Object.keys(i.values || mt).includes(l)) {
        const u = i.up(l);
        s[u] = r(t[l], l);
      } else {
        const u = l;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Kn(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function Cr(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function ht(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ft(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = ht(e, r) || n, t && (o = t(o, n, e)), o;
}
function ae(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], u = s.theme, f = ht(u, n) || {};
    return xe(s, l, (h) => {
      let g = ft(f, o, h);
      return h === g && typeof h == "string" && (g = ft(f, o, `${t}${h === "default" ? "" : se(h)}`, h)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Pe
  } : {}, i.filterProps = [t], i;
}
function Hn(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Xn = {
  m: "margin",
  p: "padding"
}, Qn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Er = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Jn = Hn((e) => {
  if (e.length > 2)
    if (Er[e])
      e = Er[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Xn[t], o = Qn[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), gt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], yt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Zn = [...gt, ...yt];
function Xe(e, t, r, n) {
  const o = ht(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Qt(e) {
  return Xe(e, "spacing", 8, "spacing");
}
function Qe(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function eo(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Qe(t, r), n), {});
}
function to(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Jn(r), i = eo(o, n), s = e[r];
  return xe(e, s, i);
}
function Xr(e, t) {
  const r = Qt(e.theme);
  return Object.keys(e).map((n) => to(e, t, n, r)).reduce(qe, {});
}
function ne(e) {
  return Xr(e, gt);
}
ne.propTypes = process.env.NODE_ENV !== "production" ? gt.reduce((e, t) => (e[t] = Pe, e), {}) : {};
ne.filterProps = gt;
function oe(e) {
  return Xr(e, yt);
}
oe.propTypes = process.env.NODE_ENV !== "production" ? yt.reduce((e, t) => (e[t] = Pe, e), {}) : {};
oe.filterProps = yt;
process.env.NODE_ENV !== "production" && Zn.reduce((e, t) => (e[t] = Pe, e), {});
function bt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? qe(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ge(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ye(e, t) {
  return ae({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ro = ye("border", ge), no = ye("borderTop", ge), oo = ye("borderRight", ge), io = ye("borderBottom", ge), ao = ye("borderLeft", ge), so = ye("borderColor"), lo = ye("borderTopColor"), co = ye("borderRightColor"), uo = ye("borderBottomColor"), fo = ye("borderLeftColor"), po = ye("outline", ge), mo = ye("outlineColor"), vt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xe(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Qe(t, n)
    });
    return xe(e, e.borderRadius, r);
  }
  return null;
};
vt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Pe
} : {};
vt.filterProps = ["borderRadius"];
bt(ro, no, oo, io, ao, so, lo, co, uo, fo, vt, po, mo);
const St = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xe(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Qe(t, n)
    });
    return xe(e, e.gap, r);
  }
  return null;
};
St.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Pe
} : {};
St.filterProps = ["gap"];
const Ct = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xe(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Qe(t, n)
    });
    return xe(e, e.columnGap, r);
  }
  return null;
};
Ct.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Pe
} : {};
Ct.filterProps = ["columnGap"];
const Et = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xe(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Qe(t, n)
    });
    return xe(e, e.rowGap, r);
  }
  return null;
};
Et.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Pe
} : {};
Et.filterProps = ["rowGap"];
const ho = ae({
  prop: "gridColumn"
}), go = ae({
  prop: "gridRow"
}), yo = ae({
  prop: "gridAutoFlow"
}), bo = ae({
  prop: "gridAutoColumns"
}), vo = ae({
  prop: "gridAutoRows"
}), So = ae({
  prop: "gridTemplateColumns"
}), Co = ae({
  prop: "gridTemplateRows"
}), Eo = ae({
  prop: "gridTemplateAreas"
}), To = ae({
  prop: "gridArea"
});
bt(St, Ct, Et, ho, go, yo, bo, vo, So, Co, Eo, To);
function Le(e, t) {
  return t === "grey" ? t : e;
}
const xo = ae({
  prop: "color",
  themeKey: "palette",
  transform: Le
}), wo = ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Le
}), $o = ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Le
});
bt(xo, wo, $o);
function de(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Oo = ae({
  prop: "width",
  transform: de
}), Jt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || mt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: de(r)
      };
    };
    return xe(e, e.maxWidth, t);
  }
  return null;
};
Jt.filterProps = ["maxWidth"];
const Ro = ae({
  prop: "minWidth",
  transform: de
}), Po = ae({
  prop: "height",
  transform: de
}), _o = ae({
  prop: "maxHeight",
  transform: de
}), Ao = ae({
  prop: "minHeight",
  transform: de
});
ae({
  prop: "size",
  cssProperty: "width",
  transform: de
});
ae({
  prop: "size",
  cssProperty: "height",
  transform: de
});
const ko = ae({
  prop: "boxSizing"
});
bt(Oo, Jt, Ro, Po, _o, Ao, ko);
const Tt = {
  // borders
  border: {
    themeKey: "borders",
    transform: ge
  },
  borderTop: {
    themeKey: "borders",
    transform: ge
  },
  borderRight: {
    themeKey: "borders",
    transform: ge
  },
  borderBottom: {
    themeKey: "borders",
    transform: ge
  },
  borderLeft: {
    themeKey: "borders",
    transform: ge
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ge
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Le
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Le
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Le
  },
  // spacing
  p: {
    style: oe
  },
  pt: {
    style: oe
  },
  pr: {
    style: oe
  },
  pb: {
    style: oe
  },
  pl: {
    style: oe
  },
  px: {
    style: oe
  },
  py: {
    style: oe
  },
  padding: {
    style: oe
  },
  paddingTop: {
    style: oe
  },
  paddingRight: {
    style: oe
  },
  paddingBottom: {
    style: oe
  },
  paddingLeft: {
    style: oe
  },
  paddingX: {
    style: oe
  },
  paddingY: {
    style: oe
  },
  paddingInline: {
    style: oe
  },
  paddingInlineStart: {
    style: oe
  },
  paddingInlineEnd: {
    style: oe
  },
  paddingBlock: {
    style: oe
  },
  paddingBlockStart: {
    style: oe
  },
  paddingBlockEnd: {
    style: oe
  },
  m: {
    style: ne
  },
  mt: {
    style: ne
  },
  mr: {
    style: ne
  },
  mb: {
    style: ne
  },
  ml: {
    style: ne
  },
  mx: {
    style: ne
  },
  my: {
    style: ne
  },
  margin: {
    style: ne
  },
  marginTop: {
    style: ne
  },
  marginRight: {
    style: ne
  },
  marginBottom: {
    style: ne
  },
  marginLeft: {
    style: ne
  },
  marginX: {
    style: ne
  },
  marginY: {
    style: ne
  },
  marginInline: {
    style: ne
  },
  marginInlineStart: {
    style: ne
  },
  marginInlineEnd: {
    style: ne
  },
  marginBlock: {
    style: ne
  },
  marginBlockStart: {
    style: ne
  },
  marginBlockEnd: {
    style: ne
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: St
  },
  rowGap: {
    style: Et
  },
  columnGap: {
    style: Ct
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: de
  },
  maxWidth: {
    style: Jt
  },
  minWidth: {
    transform: de
  },
  height: {
    transform: de
  },
  maxHeight: {
    transform: de
  },
  minHeight: {
    transform: de
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Io(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Mo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function No() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: p,
      style: h
    } = l;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = ht(o, f) || {};
    return h ? h(s) : xe(s, n, (y) => {
      let c = ft(g, p, y);
      return y === c && typeof y == "string" && (c = ft(g, p, `${r}${y === "default" ? "" : se(y)}`, y)), u === !1 ? c : {
        [u]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? Tt;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(o);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const p = Kn(o.breakpoints), h = Object.keys(p);
      let g = p;
      return Object.keys(f).forEach((v) => {
        const y = Mo(f[v], o);
        if (y != null)
          if (typeof y == "object")
            if (s[v])
              g = qe(g, e(v, y, o, s));
            else {
              const c = xe({
                theme: o
              }, y, (E) => ({
                [v]: E
              }));
              Io(c, y) ? g[v] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : g = qe(g, c);
            }
          else
            g = qe(g, e(v, y, o, s));
      }), !i && o.modularCssLayers ? {
        "@layer sx": vr(o, Cr(h, g))
      } : vr(o, Cr(h, g));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return t;
}
const ze = No();
ze.filterProps = ["sx"];
function Bo(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Do = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Vo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var jo = /[A-Z]|^ms/g, Lo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qr = function(t) {
  return t.charCodeAt(1) === 45;
}, Tr = function(t) {
  return t != null && typeof t != "boolean";
}, Bt = /* @__PURE__ */ Vo(function(e) {
  return Qr(e) ? e : e.replace(jo, "-$&").toLowerCase();
}), xr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Lo, function(n, o, i) {
          return $e = {
            name: o,
            styles: i,
            next: $e
          }, o;
        });
  }
  return Do[t] !== 1 && !Qr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function dt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return $e = {
          name: o.name,
          styles: o.styles,
          next: $e
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            $e = {
              name: s.name,
              styles: s.styles,
              next: $e
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return zo(e, t, r);
    }
  }
  var u = r;
  return u;
}
function zo(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += dt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var l = s;
        Tr(l) && (n += Bt(i) + ":" + xr(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var u = 0; u < s.length; u++)
          Tr(s[u]) && (n += Bt(i) + ":" + xr(i, s[u]) + ";");
      else {
        var f = dt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Bt(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var wr = /label:\s*([^\s;{]+)\s*(;|$)/g, $e;
function Fo(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  $e = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += dt(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += dt(r, t, e[l]), n) {
      var u = i;
      o += u[l];
    }
  wr.lastIndex = 0;
  for (var f = "", p; (p = wr.exec(o)) !== null; )
    f += "-" + p[1];
  var h = Bo(o) + f;
  return {
    name: h,
    styles: o,
    next: $e
  };
}
function Wo(e, t) {
  const r = Pn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Uo(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const $r = [];
function Me(e) {
  return $r[0] = e, Fo($r);
}
const Yo = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Go(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Yo(t), s = Object.keys(i);
  function l(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function u(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function f(g, v) {
    const y = s.indexOf(v);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : v) - n / 100}${r})`;
  }
  function p(g) {
    return s.indexOf(g) + 1 < s.length ? f(g, s[s.indexOf(g) + 1]) : l(g);
  }
  function h(g) {
    const v = s.indexOf(g);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? u(s[v]) : f(g, s[s.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: l,
    down: u,
    between: f,
    only: p,
    not: h,
    unit: r,
    ...o
  };
}
const qo = {
  borderRadius: 4
};
function Jr(e = 8, t = Qt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Ko(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Zr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = Go(r), u = Jr(o);
  let f = pe({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...qo,
      ...i
    }
  }, s);
  return f = Gn(f), f.applyStyles = Ko, f = t.reduce((p, h) => pe(p, h), f), f.unstable_sxConfig = {
    ...Tt,
    ...s?.unstable_sxConfig
  }, f.unstable_sx = function(h) {
    return ze({
      sx: h,
      theme: this
    });
  }, f;
}
const Ho = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Je(e, t, r = "Mui") {
  const n = Ho[t];
  return n ? `${r}-${n}` : `${Ln.generate(e)}-${t}`;
}
function xt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Je(e, o, r);
  }), n;
}
function en(e, t = "") {
  return e.displayName || e.name || t;
}
function Or(e, t, r) {
  const n = en(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Xo(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return en(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ut.ForwardRef:
          return Or(e, e.render, "ForwardRef");
        case ut.Memo:
          return Or(e, e.type, "memo");
        default:
          return;
      }
  }
}
function tn(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Me(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Me(o.style));
  }), n;
}
const Qo = Zr();
function Dt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ke(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Jo(e) {
  return e ? (t, r) => r[e] : null;
}
function Zo(e, t, r) {
  e.theme = ni(e.theme) ? r : e.theme[t] || e.theme;
}
function st(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => st(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? ke(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...s
      } = n;
      o = r ? ke(Me(s), r) : s;
    }
    return rn(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? ke(Me(n.style), r) : n.style : r ? ke(Me(n), r) : n;
}
function rn(e, t, r = [], n = void 0) {
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !s.props(o))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && e.ownerState?.[l] !== s.props[l])
          continue e;
    typeof s.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? ke(Me(s.style(o)), n) : s.style(o))) : r.push(n ? ke(Me(s.style), n) : s.style);
  }
  return r;
}
function ei(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Qo,
    rootShouldForwardProp: n = Dt,
    slotShouldForwardProp: o = Dt
  } = e;
  function i(l) {
    Zo(l, t, r);
  }
  return (l, u = {}) => {
    Uo(l, (w) => w.filter((L) => L !== ze));
    const {
      name: f,
      slot: p,
      skipVariantsResolver: h,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Jo(nn(p)),
      ...y
    } = u, c = f && f.startsWith("Mui") || p ? "components" : "custom", E = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), R = g || !1;
    let P = Dt;
    p === "Root" || p === "root" ? P = n : p ? P = o : oi(l) && (P = void 0);
    const A = Wo(l, {
      shouldForwardProp: P,
      label: ri(f, p),
      ...y
    }), S = (w) => {
      if (w.__emotion_real === w)
        return w;
      if (typeof w == "function")
        return function(ee) {
          return st(ee, w, ee.theme.modularCssLayers ? c : void 0);
        };
      if (Te(w)) {
        const L = tn(w);
        return function(Y) {
          return L.variants ? st(Y, L, Y.theme.modularCssLayers ? c : void 0) : Y.theme.modularCssLayers ? ke(L.style, c) : L.style;
        };
      }
      return w;
    }, b = (...w) => {
      const L = [], ee = w.map(S), Y = [];
      if (L.push(i), f && v && Y.push(function(x) {
        const _ = x.theme.components?.[f]?.styleOverrides;
        if (!_)
          return null;
        const I = {};
        for (const te in _)
          I[te] = st(x, _[te], x.theme.modularCssLayers ? "theme" : void 0);
        return v(x, I);
      }), f && !E && Y.push(function(x) {
        const _ = x.theme?.components?.[f]?.variants;
        return _ ? rn(x, _, [], x.theme.modularCssLayers ? "theme" : void 0) : null;
      }), R || Y.push(ze), Array.isArray(ee[0])) {
        const a = ee.shift(), x = new Array(L.length).fill(""), T = new Array(Y.length).fill("");
        let _;
        _ = [...x, ...a, ...T], _.raw = [...x, ...a.raw, ...T], L.unshift(_);
      }
      const q = [...L, ...ee, ...Y], z = A(...q);
      return l.muiName && (z.muiName = l.muiName), process.env.NODE_ENV !== "production" && (z.displayName = ti(f, p, l)), z;
    };
    return A.withConfig && (b.withConfig = A.withConfig), b;
  };
}
function ti(e, t, r) {
  return e ? `${e}${se(t || "")}` : `Styled(${Xo(r)})`;
}
function ri(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${nn(t || "Root")}`), r;
}
function ni(e) {
  for (const t in e)
    return !1;
  return !0;
}
function oi(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function nn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ii = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
function ai(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Zt(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), ai(e, t, r);
}
function si(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Re(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Re(si(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Oe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Oe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const li = (e) => {
  const t = Re(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ye = (e, t) => {
  try {
    return li(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function wt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function on(e) {
  e = Re(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (f, p = (f + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", u.push(t[3])), wt({
    type: l,
    values: u
  });
}
function Lt(e) {
  e = Re(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Re(on(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Rr(e, t) {
  const r = Lt(e), n = Lt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function an(e, t) {
  return e = Re(e), t = Zt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, wt(e);
}
function _e(e, t, r) {
  try {
    return an(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function $t(e, t) {
  if (e = Re(e), t = Zt(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return wt(e);
}
function X(e, t, r) {
  try {
    return $t(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ot(e, t) {
  if (e = Re(e), t = Zt(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return wt(e);
}
function Q(e, t, r) {
  try {
    return Ot(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ci(e, t = 0.15) {
  return Lt(e) > 0.5 ? $t(e, t) : Ot(e, t);
}
function ot(e, t, r) {
  try {
    return ci(e, t);
  } catch {
    return e;
  }
}
const ui = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (d.node, d.object);
function fi(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? ct(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? ct(o, n, t.components.mergeClassNameAndStyle) : n;
}
function di({
  props: e,
  name: t
}) {
  const r = k.useContext(ui);
  return fi({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Pr = 0;
function pi(e) {
  const [t, r] = k.useState(e), n = e || t;
  return k.useEffect(() => {
    t == null && (Pr += 1, r(`mui-${Pr}`));
  }, [t]), n;
}
const mi = {
  ...k
}, _r = mi.useId;
function hi(e) {
  if (_r !== void 0) {
    const t = _r();
    return e ?? t;
  }
  return pi(e);
}
const Ar = {
  theme: void 0
};
function gi(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Ar.theme = o.theme, i = tn(e(Ar)), t = i, r = o.theme), i;
  };
}
function yi(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const kr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, bi = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([l, u]) => {
      (!r || r && !r([...i, l])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, l], Array.isArray(u) ? [...s, l] : s) : t([...i, l], u, s));
    });
  }
  n(e);
}, vi = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Vt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return bi(
    e,
    (l, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(l, u))) {
        const p = `--${r ? `${r}-` : ""}${l.join("-")}`, h = vi(l, u);
        Object.assign(o, {
          [p]: h
        }), kr(i, l, `var(${p})`, f), kr(s, l, `var(${p}, ${h})`, f);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Si(e, t = {}) {
  const {
    getSelector: r = R,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: u = "light",
    ...f
  } = e, {
    vars: p,
    css: h,
    varsWithDefaults: g
  } = Vt(f, t);
  let v = g;
  const y = {}, {
    [u]: c,
    ...E
  } = s;
  if (Object.entries(E || {}).forEach(([S, b]) => {
    const {
      vars: w,
      css: L,
      varsWithDefaults: ee
    } = Vt(b, t);
    v = pe(v, ee), y[S] = {
      css: L,
      vars: w
    };
  }), c) {
    const {
      css: S,
      vars: b,
      varsWithDefaults: w
    } = Vt(c, t);
    v = pe(v, w), y[u] = {
      css: S,
      vars: b
    };
  }
  function R(S, b) {
    let w = o;
    if (o === "class" && (w = ".%s"), o === "data" && (w = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (w = `[${o}="%s"]`), S) {
      if (w === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${s[S]?.palette?.mode || S})`]: {
            ":root": b
          }
        };
      if (w)
        return e.defaultColorScheme === S ? `:root, ${w.replace("%s", String(S))}` : w.replace("%s", String(S));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let S = {
        ...p
      };
      return Object.entries(y).forEach(([, {
        vars: b
      }]) => {
        S = pe(S, b);
      }), S;
    },
    generateStyleSheets: () => {
      const S = [], b = e.defaultColorScheme || "light";
      function w(Y, q) {
        Object.keys(q).length && S.push(typeof Y == "string" ? {
          [Y]: {
            ...q
          }
        } : Y);
      }
      w(r(void 0, {
        ...h
      }), h);
      const {
        [b]: L,
        ...ee
      } = y;
      if (L) {
        const {
          css: Y
        } = L, q = s[b]?.palette?.mode, z = !n && q ? {
          colorScheme: q,
          ...Y
        } : {
          ...Y
        };
        w(r(b, {
          ...z
        }), z);
      }
      return Object.entries(ee).forEach(([Y, {
        css: q
      }]) => {
        const z = s[Y]?.palette?.mode, a = !n && z ? {
          colorScheme: z,
          ...q
        } : {
          ...q
        };
        w(r(Y, {
          ...a
        }), a);
      }), i && S.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), S;
    }
  };
}
function Ci(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ke = {
  black: "#000",
  white: "#fff"
}, Ei = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ne = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Be = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, We = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, De = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ve = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, je = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function sn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ke.white,
      default: Ke.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ln = sn();
function cn() {
  return {
    text: {
      primary: Ke.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ke.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const zt = cn();
function Ir(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Ot(e.main, o) : t === "dark" && (e.dark = $t(e.main, i)));
}
function Mr(e, t, r, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Ti(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[700],
    light: De[400],
    dark: De[800]
  };
}
function xi(e = "light") {
  return e === "dark" ? {
    main: Ne[200],
    light: Ne[50],
    dark: Ne[400]
  } : {
    main: Ne[500],
    light: Ne[300],
    dark: Ne[700]
  };
}
function wi(e = "light") {
  return e === "dark" ? {
    main: Be[500],
    light: Be[300],
    dark: Be[700]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function $i(e = "light") {
  return e === "dark" ? {
    main: Ve[400],
    light: Ve[300],
    dark: Ve[700]
  } : {
    main: Ve[700],
    light: Ve[500],
    dark: Ve[900]
  };
}
function Oi(e = "light") {
  return e === "dark" ? {
    main: je[400],
    light: je[300],
    dark: je[700]
  } : {
    main: je[800],
    light: je[500],
    dark: je[900]
  };
}
function Ri(e = "light") {
  return e === "dark" ? {
    main: We[400],
    light: We[300],
    dark: We[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: We[500],
    dark: We[900]
  };
}
function Pi(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function er(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Ti(t), l = e.secondary || xi(t), u = e.error || wi(t), f = e.info || $i(t), p = e.success || Oi(t), h = e.warning || Ri(t);
  function g(E) {
    if (o)
      return Pi(E);
    const R = Rr(E, zt.text.primary) >= r ? zt.text.primary : ln.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = Rr(E, R);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${R} on ${E}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return R;
  }
  const v = ({
    color: E,
    name: R,
    mainShade: P = 500,
    lightShade: A = 300,
    darkShade: S = 700
  }) => {
    if (E = {
      ...E
    }, !E.main && E[P] && (E.main = E[P]), !E.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : Oe(11, R ? ` (${R})` : "", P));
    if (typeof E.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(E.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Oe(12, R ? ` (${R})` : "", JSON.stringify(E.main)));
    return o ? (Mr(o, E, "light", A, n), Mr(o, E, "dark", S, n)) : (Ir(E, "light", A, n), Ir(E, "dark", S, n)), E.contrastText || (E.contrastText = g(E.main)), E;
  };
  let y;
  return t === "light" ? y = sn() : t === "dark" && (y = cn()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), pe({
    // A collection of common colors.
    common: {
      ...Ke
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Ei,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...y
  }, i);
}
function _i(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Ai(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ki(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Nr = {
  textTransform: "uppercase"
}, Br = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ii(e, t) {
  const {
    fontFamily: r = Br,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, v = p || ((E) => `${E / u * g}rem`), y = (E, R, P, A, S) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: v(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Br ? {
      letterSpacing: `${ki(A / R)}em`
    } : {},
    ...S,
    ...f
  }), c = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, Nr),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, Nr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return pe({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...c
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Mi = 0.2, Ni = 0.14, Bi = 0.12;
function re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mi})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ni})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Bi})`].join(",");
}
const Di = ["none", re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Vi = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ji = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Dr(e) {
  return `${Math.round(e)}ms`;
}
function Li(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function zi(e) {
  const t = {
    ...Vi,
    ...e.easing
  }, r = {
    ...ji,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Li,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (g) => typeof g == "string", h = (g) => !Number.isNaN(parseFloat(g));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : Dr(s)} ${l} ${typeof u == "string" ? u : Dr(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Fi = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Wi(e) {
  return Te(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function un(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !Wi(l) || s.startsWith("unstable_") ? delete n[s] : Te(l) && (n[s] = {
        ...l
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Vr(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Ui = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Yi(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : an(t, Ui(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Vr(r)})` : Ot(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Vr(r)})` : $t(t, r);
    }
  });
}
function Ft(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: l = {},
    shape: u,
    colorSpace: f,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Oe(20));
  const h = er({
    ...i,
    colorSpace: f
  }), g = Zr(e);
  let v = pe(g, {
    mixins: Ai(g.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Di.slice(),
    typography: Ii(h, l),
    transitions: zi(s),
    zIndex: {
      ...Fi
    }
  });
  if (v = pe(v, p), v = t.reduce((y, c) => pe(y, c), v), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], c = (E, R) => {
      let P;
      for (P in E) {
        const A = E[P];
        if (y.includes(P) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const S = Je("", P);
            console.error([`MUI: The \`${R}\` component increases the CSS specificity of the \`${P}\` internal state.`, "You can not override it like this: ", JSON.stringify(E, null, 2), "", `Instead, you need to use the '&.${S}' syntax:`, JSON.stringify({
              root: {
                [`&.${S}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          E[P] = {};
        }
      }
    };
    Object.keys(v.components).forEach((E) => {
      const R = v.components[E].styleOverrides;
      R && E.startsWith("Mui") && c(R, E);
    });
  }
  return v.unstable_sxConfig = {
    ...Tt,
    ...p?.unstable_sxConfig
  }, v.unstable_sx = function(c) {
    return ze({
      sx: c,
      theme: this
    });
  }, v.toRuntimeSource = un, Yi(v), v;
}
function Gi(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const qi = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Gi(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function fn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function dn(e) {
  return e === "dark" ? qi : [];
}
function Ki(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, s = er({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...fn(s.mode),
      ...r
    },
    overlays: n || dn(s.mode),
    ...i
  };
}
function Hi(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Xi = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Qi = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Xi(e.cssVarPrefix).forEach((l) => {
        s[l] = r[l], delete r[l];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Ji(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function m(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ge(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : on(e);
}
function Ce(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ye(Ge(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Zi(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Se = (e) => {
  try {
    return e();
  } catch {
  }
}, ea = (e = "mui") => yi(e);
function jt(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Ki({
      ...r,
      palette: {
        mode: i,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...l
  } = Ft({
    ...n,
    palette: {
      mode: i,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: s,
    opacity: {
      ...fn(i),
      ...r?.opacity
    },
    overlays: r?.overlays || dn(i)
  }, l;
}
function ta(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Hi,
    colorSchemeSelector: u = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...p
  } = e, h = Object.keys(r)[0], g = n || (r.light && h !== "light" ? "light" : h), v = ea(i), {
    [g]: y,
    light: c,
    dark: E,
    ...R
  } = r, P = {
    ...R
  };
  let A = y;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Oe(21, g));
  let S;
  s && (S = "oklch");
  const b = jt(S, P, A, p, g);
  c && !P.light && jt(S, P, c, void 0, "light"), E && !P.dark && jt(S, P, E, void 0, "dark");
  let w = {
    defaultColorScheme: g,
    ...b,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    rootSelector: f,
    getCssVar: v,
    colorSchemes: P,
    font: {
      ..._i(b.typography),
      ...b.font
    },
    spacing: Zi(p.spacing)
  };
  Object.keys(w.colorSchemes).forEach((z) => {
    const a = w.colorSchemes[z].palette, x = (_) => {
      const I = _.split("-"), te = I[1], le = I[2];
      return v(_, a[te][le]);
    };
    a.mode === "light" && (m(a.common, "background", "#fff"), m(a.common, "onBackground", "#000")), a.mode === "dark" && (m(a.common, "background", "#000"), m(a.common, "onBackground", "#fff"));
    function T(_, I, te) {
      if (S) {
        let le;
        return _ === _e && (le = `transparent ${((1 - te) * 100).toFixed(0)}%`), _ === X && (le = `#000 ${(te * 100).toFixed(0)}%`), _ === Q && (le = `#fff ${(te * 100).toFixed(0)}%`), `color-mix(in ${S}, ${I}, ${le})`;
      }
      return _(I, te);
    }
    if (Ji(a, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), a.mode === "light") {
      m(a.Alert, "errorColor", T(X, a.error.light, 0.6)), m(a.Alert, "infoColor", T(X, a.info.light, 0.6)), m(a.Alert, "successColor", T(X, a.success.light, 0.6)), m(a.Alert, "warningColor", T(X, a.warning.light, 0.6)), m(a.Alert, "errorFilledBg", x("palette-error-main")), m(a.Alert, "infoFilledBg", x("palette-info-main")), m(a.Alert, "successFilledBg", x("palette-success-main")), m(a.Alert, "warningFilledBg", x("palette-warning-main")), m(a.Alert, "errorFilledColor", Se(() => a.getContrastText(a.error.main))), m(a.Alert, "infoFilledColor", Se(() => a.getContrastText(a.info.main))), m(a.Alert, "successFilledColor", Se(() => a.getContrastText(a.success.main))), m(a.Alert, "warningFilledColor", Se(() => a.getContrastText(a.warning.main))), m(a.Alert, "errorStandardBg", T(Q, a.error.light, 0.9)), m(a.Alert, "infoStandardBg", T(Q, a.info.light, 0.9)), m(a.Alert, "successStandardBg", T(Q, a.success.light, 0.9)), m(a.Alert, "warningStandardBg", T(Q, a.warning.light, 0.9)), m(a.Alert, "errorIconColor", x("palette-error-main")), m(a.Alert, "infoIconColor", x("palette-info-main")), m(a.Alert, "successIconColor", x("palette-success-main")), m(a.Alert, "warningIconColor", x("palette-warning-main")), m(a.AppBar, "defaultBg", x("palette-grey-100")), m(a.Avatar, "defaultBg", x("palette-grey-400")), m(a.Button, "inheritContainedBg", x("palette-grey-300")), m(a.Button, "inheritContainedHoverBg", x("palette-grey-A100")), m(a.Chip, "defaultBorder", x("palette-grey-400")), m(a.Chip, "defaultAvatarColor", x("palette-grey-700")), m(a.Chip, "defaultIconColor", x("palette-grey-700")), m(a.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), m(a.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), m(a.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), m(a.LinearProgress, "primaryBg", T(Q, a.primary.main, 0.62)), m(a.LinearProgress, "secondaryBg", T(Q, a.secondary.main, 0.62)), m(a.LinearProgress, "errorBg", T(Q, a.error.main, 0.62)), m(a.LinearProgress, "infoBg", T(Q, a.info.main, 0.62)), m(a.LinearProgress, "successBg", T(Q, a.success.main, 0.62)), m(a.LinearProgress, "warningBg", T(Q, a.warning.main, 0.62)), m(a.Skeleton, "bg", S ? T(_e, a.text.primary, 0.11) : `rgba(${x("palette-text-primaryChannel")} / 0.11)`), m(a.Slider, "primaryTrack", T(Q, a.primary.main, 0.62)), m(a.Slider, "secondaryTrack", T(Q, a.secondary.main, 0.62)), m(a.Slider, "errorTrack", T(Q, a.error.main, 0.62)), m(a.Slider, "infoTrack", T(Q, a.info.main, 0.62)), m(a.Slider, "successTrack", T(Q, a.success.main, 0.62)), m(a.Slider, "warningTrack", T(Q, a.warning.main, 0.62));
      const _ = S ? T(X, a.background.default, 0.6825) : ot(a.background.default, 0.8);
      m(a.SnackbarContent, "bg", _), m(a.SnackbarContent, "color", Se(() => S ? zt.text.primary : a.getContrastText(_))), m(a.SpeedDialAction, "fabHoverBg", ot(a.background.paper, 0.15)), m(a.StepConnector, "border", x("palette-grey-400")), m(a.StepContent, "border", x("palette-grey-400")), m(a.Switch, "defaultColor", x("palette-common-white")), m(a.Switch, "defaultDisabledColor", x("palette-grey-100")), m(a.Switch, "primaryDisabledColor", T(Q, a.primary.main, 0.62)), m(a.Switch, "secondaryDisabledColor", T(Q, a.secondary.main, 0.62)), m(a.Switch, "errorDisabledColor", T(Q, a.error.main, 0.62)), m(a.Switch, "infoDisabledColor", T(Q, a.info.main, 0.62)), m(a.Switch, "successDisabledColor", T(Q, a.success.main, 0.62)), m(a.Switch, "warningDisabledColor", T(Q, a.warning.main, 0.62)), m(a.TableCell, "border", T(Q, T(_e, a.divider, 1), 0.88)), m(a.Tooltip, "bg", T(_e, a.grey[700], 0.92));
    }
    if (a.mode === "dark") {
      m(a.Alert, "errorColor", T(Q, a.error.light, 0.6)), m(a.Alert, "infoColor", T(Q, a.info.light, 0.6)), m(a.Alert, "successColor", T(Q, a.success.light, 0.6)), m(a.Alert, "warningColor", T(Q, a.warning.light, 0.6)), m(a.Alert, "errorFilledBg", x("palette-error-dark")), m(a.Alert, "infoFilledBg", x("palette-info-dark")), m(a.Alert, "successFilledBg", x("palette-success-dark")), m(a.Alert, "warningFilledBg", x("palette-warning-dark")), m(a.Alert, "errorFilledColor", Se(() => a.getContrastText(a.error.dark))), m(a.Alert, "infoFilledColor", Se(() => a.getContrastText(a.info.dark))), m(a.Alert, "successFilledColor", Se(() => a.getContrastText(a.success.dark))), m(a.Alert, "warningFilledColor", Se(() => a.getContrastText(a.warning.dark))), m(a.Alert, "errorStandardBg", T(X, a.error.light, 0.9)), m(a.Alert, "infoStandardBg", T(X, a.info.light, 0.9)), m(a.Alert, "successStandardBg", T(X, a.success.light, 0.9)), m(a.Alert, "warningStandardBg", T(X, a.warning.light, 0.9)), m(a.Alert, "errorIconColor", x("palette-error-main")), m(a.Alert, "infoIconColor", x("palette-info-main")), m(a.Alert, "successIconColor", x("palette-success-main")), m(a.Alert, "warningIconColor", x("palette-warning-main")), m(a.AppBar, "defaultBg", x("palette-grey-900")), m(a.AppBar, "darkBg", x("palette-background-paper")), m(a.AppBar, "darkColor", x("palette-text-primary")), m(a.Avatar, "defaultBg", x("palette-grey-600")), m(a.Button, "inheritContainedBg", x("palette-grey-800")), m(a.Button, "inheritContainedHoverBg", x("palette-grey-700")), m(a.Chip, "defaultBorder", x("palette-grey-700")), m(a.Chip, "defaultAvatarColor", x("palette-grey-300")), m(a.Chip, "defaultIconColor", x("palette-grey-300")), m(a.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), m(a.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), m(a.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), m(a.LinearProgress, "primaryBg", T(X, a.primary.main, 0.5)), m(a.LinearProgress, "secondaryBg", T(X, a.secondary.main, 0.5)), m(a.LinearProgress, "errorBg", T(X, a.error.main, 0.5)), m(a.LinearProgress, "infoBg", T(X, a.info.main, 0.5)), m(a.LinearProgress, "successBg", T(X, a.success.main, 0.5)), m(a.LinearProgress, "warningBg", T(X, a.warning.main, 0.5)), m(a.Skeleton, "bg", S ? T(_e, a.text.primary, 0.13) : `rgba(${x("palette-text-primaryChannel")} / 0.13)`), m(a.Slider, "primaryTrack", T(X, a.primary.main, 0.5)), m(a.Slider, "secondaryTrack", T(X, a.secondary.main, 0.5)), m(a.Slider, "errorTrack", T(X, a.error.main, 0.5)), m(a.Slider, "infoTrack", T(X, a.info.main, 0.5)), m(a.Slider, "successTrack", T(X, a.success.main, 0.5)), m(a.Slider, "warningTrack", T(X, a.warning.main, 0.5));
      const _ = S ? T(Q, a.background.default, 0.985) : ot(a.background.default, 0.98);
      m(a.SnackbarContent, "bg", _), m(a.SnackbarContent, "color", Se(() => S ? ln.text.primary : a.getContrastText(_))), m(a.SpeedDialAction, "fabHoverBg", ot(a.background.paper, 0.15)), m(a.StepConnector, "border", x("palette-grey-600")), m(a.StepContent, "border", x("palette-grey-600")), m(a.Switch, "defaultColor", x("palette-grey-300")), m(a.Switch, "defaultDisabledColor", x("palette-grey-600")), m(a.Switch, "primaryDisabledColor", T(X, a.primary.main, 0.55)), m(a.Switch, "secondaryDisabledColor", T(X, a.secondary.main, 0.55)), m(a.Switch, "errorDisabledColor", T(X, a.error.main, 0.55)), m(a.Switch, "infoDisabledColor", T(X, a.info.main, 0.55)), m(a.Switch, "successDisabledColor", T(X, a.success.main, 0.55)), m(a.Switch, "warningDisabledColor", T(X, a.warning.main, 0.55)), m(a.TableCell, "border", T(X, T(_e, a.divider, 1), 0.68)), m(a.Tooltip, "bg", T(_e, a.grey[700], 0.92));
    }
    Ce(a.background, "default"), Ce(a.background, "paper"), Ce(a.common, "background"), Ce(a.common, "onBackground"), Ce(a, "divider"), Object.keys(a).forEach((_) => {
      const I = a[_];
      _ !== "tonalOffset" && I && typeof I == "object" && (I.main && m(a[_], "mainChannel", Ye(Ge(I.main))), I.light && m(a[_], "lightChannel", Ye(Ge(I.light))), I.dark && m(a[_], "darkChannel", Ye(Ge(I.dark))), I.contrastText && m(a[_], "contrastTextChannel", Ye(Ge(I.contrastText))), _ === "text" && (Ce(a[_], "primary"), Ce(a[_], "secondary")), _ === "action" && (I.active && Ce(a[_], "active"), I.selected && Ce(a[_], "selected")));
    });
  }), w = t.reduce((z, a) => pe(z, a), w);
  const L = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Qi(w),
    enableContrastVars: s
  }, {
    vars: ee,
    generateThemeVars: Y,
    generateStyleSheets: q
  } = Si(w, L);
  return w.vars = ee, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([z, a]) => {
    w[z] = a;
  }), w.generateThemeVars = Y, w.generateStyleSheets = q, w.generateSpacing = function() {
    return Jr(p.spacing, Qt(this));
  }, w.getColorSchemeSelector = Ci(u), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = l, w.unstable_sxConfig = {
    ...Tt,
    ...p?.unstable_sxConfig
  }, w.unstable_sx = function(a) {
    return ze({
      sx: a,
      theme: this
    });
  }, w.toRuntimeSource = un, w;
}
function jr(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: er({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ra(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r?.mode,
    ...s
  } = e, l = i || "light", u = o?.[l], f = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Ft(e, ...t);
    let p = r;
    "palette" in e || f[l] && (f[l] !== !0 ? p = f[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const h = Ft({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = l, h.colorSchemes = f, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: h.palette
    }, jr(h, "dark", f.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: h.palette
    }, jr(h, "light", f.light)), h;
  }
  return !r && !("light" in f) && l === "light" && (f.light = !0), ta({
    ...s,
    colorSchemes: f,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const na = ra(), oa = "$$material";
function ia(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const pn = (e) => ia(e) && e !== "classes", be = ei({
  themeId: oa,
  defaultTheme: na,
  rootShouldForwardProp: pn
}), Rt = gi;
process.env.NODE_ENV !== "production" && (d.node, d.object.isRequired);
function Pt(e) {
  return di(e);
}
function lt(e) {
  const t = k.useRef(e);
  return ii(() => {
    t.current = e;
  }), k.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Lr(...e) {
  const t = k.useRef(void 0), r = k.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, l = s(n);
        return typeof l == "function" ? l : () => {
          s(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i?.());
    };
  }, e);
  return k.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const aa = d.oneOfType([d.func, d.object]);
function mn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function sa(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function la(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !sa(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ca = mn(d.elementType, la);
function zr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Fr = {};
function hn(e, t) {
  const r = k.useRef(Fr);
  return r.current === Fr && (r.current = e(t)), r;
}
class pt {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new pt();
  }
  static use() {
    const t = hn(pt.create).current, [r, n] = k.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, k.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = fa(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function ua() {
  return pt.use();
}
function fa() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wt.apply(null, arguments);
}
function da(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ut(e, t) {
  return Ut = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Ut(e, t);
}
function pa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ut(e, t);
}
const Wr = Ue.createContext(null);
function ma(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tr(e, t) {
  var r = function(i) {
    return t && it(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Rn.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function ha(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, l = {};
  for (var u in t) {
    if (n[u])
      for (s = 0; s < n[u].length; s++) {
        var f = n[u][s];
        l[n[u][s]] = r(f);
      }
    l[u] = r(u);
  }
  for (s = 0; s < o.length; s++)
    l[o[s]] = r(o[s]);
  return l;
}
function Ie(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function ga(e, t) {
  return tr(e.children, function(r) {
    return at(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ie(r, "appear", e),
      enter: Ie(r, "enter", e),
      exit: Ie(r, "exit", e)
    });
  });
}
function ya(e, t, r) {
  var n = tr(e.children), o = ha(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (it(s)) {
      var l = i in t, u = i in n, f = t[i], p = it(f) && !f.props.in;
      u && (!l || p) ? o[i] = at(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ie(s, "exit", e),
        enter: Ie(s, "enter", e)
      }) : !u && l && !p ? o[i] = at(s, {
        in: !1
      }) : u && l && it(f) && (o[i] = at(s, {
        onExited: r.bind(null, s),
        in: f.props.in,
        exit: Ie(s, "exit", e),
        enter: Ie(s, "enter", e)
      }));
    }
  }), o;
}
var ba = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, va = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, rr = /* @__PURE__ */ (function(e) {
  pa(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(ma(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, l = i.handleExited, u = i.firstRender;
    return {
      children: u ? ga(o, l) : ya(o, s, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = tr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var u = Wt({}, l.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, l = da(o, ["component", "childFactory"]), u = this.state.contextValue, f = ba(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ Ue.createElement(Wr.Provider, {
      value: u
    }, f) : /* @__PURE__ */ Ue.createElement(Wr.Provider, {
      value: u
    }, /* @__PURE__ */ Ue.createElement(i, l, f));
  }, t;
})(Ue.Component);
rr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: d.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: d.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: d.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: d.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: d.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: d.func
} : {};
rr.defaultProps = va;
const Sa = [];
function Ca(e) {
  k.useEffect(e, Sa);
}
class nr {
  static create() {
    return new nr();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function Ea() {
  const e = hn(nr.create).current;
  return Ca(e.disposeEffect), e;
}
function gn(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: u,
    timeout: f
  } = e, [p, h] = k.useState(!1), g = fe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, y = fe(r.child, p && r.childLeaving, n && r.childPulsate);
  return !l && !p && h(!0), k.useEffect(() => {
    if (!l && u != null) {
      const c = setTimeout(u, f);
      return () => {
        clearTimeout(c);
      };
    }
  }, [u, l, f]), /* @__PURE__ */ ce("span", {
    className: g,
    style: v,
    children: /* @__PURE__ */ ce("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (gn.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: d.object.isRequired,
  className: d.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: d.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: d.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: d.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: d.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: d.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: d.number,
  /**
   * exit delay
   */
  timeout: d.number.isRequired
});
const he = xt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Yt = 550, Ta = 80, xa = He`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, wa = He`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, $a = He`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Oa = be("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Ra = be(gn, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${he.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${xa};
    animation-duration: ${Yt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${he.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${he.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${he.childLeaving} {
    opacity: 0;
    animation-name: ${wa};
    animation-duration: ${Yt}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${he.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${$a};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, yn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...l
  } = n, [u, f] = k.useState([]), p = k.useRef(0), h = k.useRef(null);
  k.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const g = k.useRef(!1), v = Ea(), y = k.useRef(null), c = k.useRef(null), E = k.useCallback((S) => {
    const {
      pulsate: b,
      rippleX: w,
      rippleY: L,
      rippleSize: ee,
      cb: Y
    } = S;
    f((q) => [...q, /* @__PURE__ */ ce(Ra, {
      classes: {
        ripple: fe(i.ripple, he.ripple),
        rippleVisible: fe(i.rippleVisible, he.rippleVisible),
        ripplePulsate: fe(i.ripplePulsate, he.ripplePulsate),
        child: fe(i.child, he.child),
        childLeaving: fe(i.childLeaving, he.childLeaving),
        childPulsate: fe(i.childPulsate, he.childPulsate)
      },
      timeout: Yt,
      pulsate: b,
      rippleX: w,
      rippleY: L,
      rippleSize: ee
    }, p.current)]), p.current += 1, h.current = Y;
  }, [i]), R = k.useCallback((S = {}, b = {}, w = () => {
  }) => {
    const {
      pulsate: L = !1,
      center: ee = o || b.pulsate,
      fakeElement: Y = !1
      // For test purposes
    } = b;
    if (S?.type === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    S?.type === "touchstart" && (g.current = !0);
    const q = Y ? null : c.current, z = q ? q.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let a, x, T;
    if (ee || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      a = Math.round(z.width / 2), x = Math.round(z.height / 2);
    else {
      const {
        clientX: _,
        clientY: I
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      a = Math.round(_ - z.left), x = Math.round(I - z.top);
    }
    if (ee)
      T = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), T % 2 === 0 && (T += 1);
    else {
      const _ = Math.max(Math.abs((q ? q.clientWidth : 0) - a), a) * 2 + 2, I = Math.max(Math.abs((q ? q.clientHeight : 0) - x), x) * 2 + 2;
      T = Math.sqrt(_ ** 2 + I ** 2);
    }
    S?.touches ? y.current === null && (y.current = () => {
      E({
        pulsate: L,
        rippleX: a,
        rippleY: x,
        rippleSize: T,
        cb: w
      });
    }, v.start(Ta, () => {
      y.current && (y.current(), y.current = null);
    })) : E({
      pulsate: L,
      rippleX: a,
      rippleY: x,
      rippleSize: T,
      cb: w
    });
  }, [o, E, v]), P = k.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), A = k.useCallback((S, b) => {
    if (v.clear(), S?.type === "touchend" && y.current) {
      y.current(), y.current = null, v.start(0, () => {
        A(S, b);
      });
      return;
    }
    y.current = null, f((w) => w.length > 0 ? w.slice(1) : w), h.current = b;
  }, [v]);
  return k.useImperativeHandle(r, () => ({
    pulsate: P,
    start: R,
    stop: A
  }), [P, R, A]), /* @__PURE__ */ ce(Oa, {
    className: fe(he.root, i.root, s),
    ref: c,
    ...l,
    children: /* @__PURE__ */ ce(rr, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (yn.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: d.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: d.object,
  /**
   * @ignore
   */
  className: d.string
});
function Pa(e) {
  return Je("MuiButtonBase", e);
}
const _a = xt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Aa = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Xt({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Pa, o);
  return r && n && (s.root += ` ${n}`), s;
}, ka = be("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${_a.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), bn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: u = "button",
    disabled: f = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: g = !1,
    focusVisibleClassName: v,
    LinkComponent: y = "a",
    onBlur: c,
    onClick: E,
    onContextMenu: R,
    onDragLeave: P,
    onFocus: A,
    onFocusVisible: S,
    onKeyDown: b,
    onKeyUp: w,
    onMouseDown: L,
    onMouseLeave: ee,
    onMouseUp: Y,
    onTouchEnd: q,
    onTouchMove: z,
    onTouchStart: a,
    tabIndex: x = 0,
    TouchRippleProps: T,
    touchRippleRef: _,
    type: I,
    ...te
  } = n, le = k.useRef(null), ie = ua(), C = Lr(ie.ref, _), [$, N] = k.useState(!1);
  f && $ && N(!1), k.useImperativeHandle(o, () => ({
    focusVisible: () => {
      N(!0), le.current.focus();
    }
  }), []);
  const V = ie.shouldMount && !p && !f;
  k.useEffect(() => {
    $ && g && !p && ie.pulsate();
  }, [p, g, $, ie]);
  const M = Ee(ie, "start", L, h), F = Ee(ie, "stop", R, h), B = Ee(ie, "stop", P, h), j = Ee(ie, "stop", Y, h), W = Ee(ie, "stop", (D) => {
    $ && D.preventDefault(), ee && ee(D);
  }, h), G = Ee(ie, "start", a, h), U = Ee(ie, "stop", q, h), ue = Ee(ie, "stop", z, h), O = Ee(ie, "stop", (D) => {
    zr(D.target) || N(!1), c && c(D);
  }, !1), me = lt((D) => {
    le.current || (le.current = D.currentTarget), zr(D.target) && (N(!0), S && S(D)), A && A(D);
  }), we = () => {
    const D = le.current;
    return u && u !== "button" && !(D.tagName === "A" && D.href);
  }, Ze = lt((D) => {
    g && !D.repeat && $ && D.key === " " && ie.stop(D, () => {
      ie.start(D);
    }), D.target === D.currentTarget && we() && D.key === " " && D.preventDefault(), b && b(D), D.target === D.currentTarget && we() && D.key === "Enter" && !f && (D.preventDefault(), E && E(D));
  }), wn = lt((D) => {
    g && D.key === " " && $ && !D.defaultPrevented && ie.stop(D, () => {
      ie.pulsate(D);
    }), w && w(D), E && D.target === D.currentTarget && we() && D.key === " " && !D.defaultPrevented && E(D);
  });
  let et = u;
  et === "button" && (te.href || te.to) && (et = y);
  const Fe = {};
  et === "button" ? (Fe.type = I === void 0 ? "button" : I, Fe.disabled = f) : (!te.href && !te.to && (Fe.role = "button"), f && (Fe["aria-disabled"] = f));
  const $n = Lr(r, le), or = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: g,
    tabIndex: x,
    focusVisible: $
  }, On = Aa(or);
  return /* @__PURE__ */ Kt(ka, {
    as: et,
    className: fe(On.root, l),
    ownerState: or,
    onBlur: O,
    onClick: E,
    onContextMenu: F,
    onFocus: me,
    onKeyDown: Ze,
    onKeyUp: wn,
    onMouseDown: M,
    onMouseLeave: W,
    onMouseUp: j,
    onDragLeave: B,
    onTouchEnd: U,
    onTouchMove: ue,
    onTouchStart: G,
    ref: $n,
    tabIndex: f ? -1 : x,
    type: I,
    ...Fe,
    ...te,
    children: [s, V ? /* @__PURE__ */ ce(yn, {
      ref: C,
      center: i,
      ...T
    }) : null]
  });
});
function Ee(e, t, r, n = !1) {
  return lt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: aa,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: d.bool,
  /**
   * The content of the component.
   */
  children: d.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: d.object,
  /**
   * @ignore
   */
  className: d.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ca,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: d.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: d.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: d.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: d.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: d.string,
  /**
   * @ignore
   */
  href: d.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: d.elementType,
  /**
   * @ignore
   */
  onBlur: d.func,
  /**
   * @ignore
   */
  onClick: d.func,
  /**
   * @ignore
   */
  onContextMenu: d.func,
  /**
   * @ignore
   */
  onDragLeave: d.func,
  /**
   * @ignore
   */
  onFocus: d.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: d.func,
  /**
   * @ignore
   */
  onKeyDown: d.func,
  /**
   * @ignore
   */
  onKeyUp: d.func,
  /**
   * @ignore
   */
  onMouseDown: d.func,
  /**
   * @ignore
   */
  onMouseLeave: d.func,
  /**
   * @ignore
   */
  onMouseUp: d.func,
  /**
   * @ignore
   */
  onTouchEnd: d.func,
  /**
   * @ignore
   */
  onTouchMove: d.func,
  /**
   * @ignore
   */
  onTouchStart: d.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: d.oneOfType([d.arrayOf(d.oneOfType([d.func, d.object, d.bool])), d.func, d.object]),
  /**
   * @default 0
   */
  tabIndex: d.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: d.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: d.oneOfType([d.func, d.shape({
    current: d.shape({
      pulsate: d.func.isRequired,
      start: d.func.isRequired,
      stop: d.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: d.oneOfType([d.oneOf(["button", "reset", "submit"]), d.string])
});
function Ia(e) {
  return typeof e.main == "string";
}
function Ma(e, t = []) {
  if (!Ia(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function vn(e = []) {
  return ([, t]) => t && Ma(t, e);
}
function Na(e) {
  return Je("MuiCircularProgress", e);
}
xt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const ve = 44, Gt = He`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, qt = He`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Ba = typeof Gt != "string" ? Yr`
        animation: ${Gt} 1.4s linear infinite;
      ` : null, Da = typeof qt != "string" ? Yr`
        animation: ${qt} 1.4s ease-in-out infinite;
      ` : null, Va = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${se(n)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${se(r)}`, o && "circleDisableShrink"]
  };
  return Xt(i, Na, t);
}, ja = be("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${se(r.color)}`]];
  }
})(Rt(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Ba || {
      animation: `${Gt} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(vn()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), La = be("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), za = be("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${se(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Rt(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Da || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${qt} 1.4s ease-in-out infinite`
    }
  }]
}))), Fa = be("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(Rt(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Sn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = Pt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: l = !1,
    size: u = 40,
    style: f,
    thickness: p = 3.6,
    value: h = 0,
    variant: g = "indeterminate",
    ...v
  } = n, y = {
    ...n,
    color: i,
    disableShrink: s,
    size: u,
    thickness: p,
    value: h,
    variant: g,
    enableTrackSlot: l
  }, c = Va(y), E = {}, R = {}, P = {};
  if (g === "determinate") {
    const A = 2 * Math.PI * ((ve - p) / 2);
    E.strokeDasharray = A.toFixed(3), P["aria-valuenow"] = Math.round(h), E.strokeDashoffset = `${((100 - h) / 100 * A).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ ce(ja, {
    className: fe(c.root, o),
    style: {
      width: u,
      height: u,
      ...R,
      ...f
    },
    ownerState: y,
    ref: r,
    role: "progressbar",
    ...P,
    ...v,
    children: /* @__PURE__ */ Kt(La, {
      className: c.svg,
      ownerState: y,
      viewBox: `${ve / 2} ${ve / 2} ${ve} ${ve}`,
      children: [l ? /* @__PURE__ */ ce(Fa, {
        className: c.track,
        ownerState: y,
        cx: ve,
        cy: ve,
        r: (ve - p) / 2,
        fill: "none",
        strokeWidth: p,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ ce(za, {
        className: c.circle,
        style: E,
        ownerState: y,
        cx: ve,
        cy: ve,
        r: (ve - p) / 2,
        fill: "none",
        strokeWidth: p
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: d.object,
  /**
   * @ignore
   */
  className: d.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: d.oneOfType([d.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), d.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: mn(d.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: d.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: d.oneOfType([d.number, d.string]),
  /**
   * @ignore
   */
  style: d.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: d.oneOfType([d.arrayOf(d.oneOfType([d.func, d.object, d.bool])), d.func, d.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: d.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: d.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: d.oneOf(["determinate", "indeterminate"])
});
function Wa(e) {
  return Je("MuiButton", e);
}
const Ae = xt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Cn = /* @__PURE__ */ k.createContext({});
process.env.NODE_ENV !== "production" && (Cn.displayName = "ButtonGroupContext");
const En = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (En.displayName = "ButtonGroupButtonContext");
const Ua = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: l,
    classes: u
  } = e, f = {
    root: ["root", s && "loading", i, `${i}${se(t)}`, `size${se(o)}`, `${i}Size${se(o)}`, `color${se(t)}`, r && "disableElevation", n && "fullWidth", s && `loadingPosition${se(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${se(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${se(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = Xt(f, Wa, u);
  return {
    ...u,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Tn = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Ya = be(bn, {
  shouldForwardProp: (e) => pn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${se(r.color)}`], t[`size${se(r.size)}`], t[`${r.variant}Size${se(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Rt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Ae.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Ae.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ae.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Ae.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(vn()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Ae.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ae.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Ae.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Ga = be("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${se(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...Tn]
})), qa = be("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${se(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...Tn]
})), Ka = be("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Ur = be("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), xn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = k.useContext(Cn), o = k.useContext(En), i = ct(n, t), s = Pt({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: u = "primary",
    component: f = "button",
    className: p,
    disabled: h = !1,
    disableElevation: g = !1,
    disableFocusRipple: v = !1,
    endIcon: y,
    focusVisibleClassName: c,
    fullWidth: E = !1,
    id: R,
    loading: P = null,
    loadingIndicator: A,
    loadingPosition: S = "center",
    size: b = "medium",
    startIcon: w,
    type: L,
    variant: ee = "text",
    ...Y
  } = s, q = hi(R), z = A ?? /* @__PURE__ */ ce(Sn, {
    "aria-labelledby": q,
    color: "inherit",
    size: 16
  }), a = {
    ...s,
    color: u,
    component: f,
    disabled: h,
    disableElevation: g,
    disableFocusRipple: v,
    fullWidth: E,
    loading: P,
    loadingIndicator: z,
    loadingPosition: S,
    size: b,
    type: L,
    variant: ee
  }, x = Ua(a), T = (w || P && S === "start") && /* @__PURE__ */ ce(Ga, {
    className: x.startIcon,
    ownerState: a,
    children: w || /* @__PURE__ */ ce(Ur, {
      className: x.loadingIconPlaceholder,
      ownerState: a
    })
  }), _ = (y || P && S === "end") && /* @__PURE__ */ ce(qa, {
    className: x.endIcon,
    ownerState: a,
    children: y || /* @__PURE__ */ ce(Ur, {
      className: x.loadingIconPlaceholder,
      ownerState: a
    })
  }), I = o || "", te = typeof P == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ce("span", {
      className: x.loadingWrapper,
      style: {
        display: "contents"
      },
      children: P && /* @__PURE__ */ ce(Ka, {
        className: x.loadingIndicator,
        ownerState: a,
        children: z
      })
    })
  ) : null;
  return /* @__PURE__ */ Kt(Ya, {
    ownerState: a,
    className: fe(n.className, x.root, p, I),
    component: f,
    disabled: h || P,
    focusRipple: !v,
    focusVisibleClassName: fe(x.focusVisible, c),
    ref: r,
    type: L,
    id: P ? q : R,
    ...Y,
    classes: x,
    children: [T, S !== "end" && te, l, S === "end" && te, _]
  });
});
process.env.NODE_ENV !== "production" && (xn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: d.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: d.object,
  /**
   * @ignore
   */
  className: d.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: d.oneOfType([d.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), d.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: d.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: d.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: d.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: d.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: d.bool,
  /**
   * Element placed after the children.
   */
  endIcon: d.node,
  /**
   * @ignore
   */
  focusVisibleClassName: d.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: d.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: d.string,
  /**
   * @ignore
   */
  id: d.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: d.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: d.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: d.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: d.oneOfType([d.oneOf(["small", "medium", "large"]), d.string]),
  /**
   * Element placed before the children.
   */
  startIcon: d.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: d.oneOfType([d.arrayOf(d.oneOfType([d.func, d.object, d.bool])), d.func, d.object]),
  /**
   * @ignore
   */
  type: d.oneOfType([d.oneOf(["button", "reset", "submit"]), d.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: d.oneOfType([d.oneOf(["contained", "outlined", "text"]), d.string])
});
const Za = ({ children: e, variantName: t, ...r }) => /* @__PURE__ */ ce(xn, { variant: t === "secondary" ? "outlined" : "contained", ...r, children: e });
export {
  Za as Button
};
