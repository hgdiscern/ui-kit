import * as D from "react";
import Qe, { forwardRef as zo, useContext as Wo, isValidElement as _t, cloneElement as Ot, Children as Yo } from "react";
function Uo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tt = { exports: {} }, it = {};
var qr;
function qo() {
  if (qr) return it;
  qr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return it.Fragment = t, it.jsx = r, it.jsxs = r, it;
}
var at = {};
var Gr;
function Go() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === L ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case v:
          return "Fragment";
        case P:
          return "Profiler";
        case R:
          return "StrictMode";
        case x:
          return "Suspense";
        case A:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case l:
            return "Portal";
          case T:
            return p.displayName || "Context";
          case O:
            return (p._context.displayName || "Context") + ".Consumer";
          case d:
            var k = p.render;
            return p = p.displayName, p || (p = k.displayName || k.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case H:
            return k = p.displayName || null, k !== null ? k : e(p.type) || "Memo";
          case z:
            k = p._payload, p = p._init;
            try {
              return e(p(k));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function r(p) {
      try {
        t(p);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var M = k.error, I = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(p);
      }
    }
    function n(p) {
      if (p === v) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === z)
        return "<...>";
      try {
        var k = e(p);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var p = s.A;
      return p === null ? null : p.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(p) {
      if (_.call(p, "key")) {
        var k = Object.getOwnPropertyDescriptor(p, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function c(p, k) {
      function M() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: M,
        configurable: !0
      });
    }
    function u() {
      var p = e(this.type);
      return K[p] || (K[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function f(p, k, M, I, W, F) {
      var N = M.ref;
      return p = {
        $$typeof: g,
        type: p,
        key: k,
        props: M,
        _owner: I
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function m(p, k, M, I, W, F) {
      var N = k.children;
      if (N !== void 0)
        if (I)
          if ($(N)) {
            for (I = 0; I < N.length; I++)
              h(N[I]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(N);
      if (_.call(k, "key")) {
        N = e(p);
        var V = Object.keys(k).filter(function(q) {
          return q !== "key";
        });
        I = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", w[N + I] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          N,
          V,
          N
        ), w[N + I] = !0);
      }
      if (N = null, M !== void 0 && (r(M), N = "" + M), a(k) && (r(k.key), N = "" + k.key), "key" in k) {
        M = {};
        for (var G in k)
          G !== "key" && (M[G] = k[G]);
      } else M = k;
      return N && c(
        M,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), f(
        p,
        N,
        M,
        o(),
        W,
        F
      );
    }
    function h(p) {
      b(p) ? p._store && (p._store.validated = 1) : typeof p == "object" && p !== null && p.$$typeof === z && (p._payload.status === "fulfilled" ? b(p._payload.value) && p._payload.value._store && (p._payload.value._store.validated = 1) : p._store && (p._store.validated = 1));
    }
    function b(p) {
      return typeof p == "object" && p !== null && p.$$typeof === g;
    }
    var C = Qe, g = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), T = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), s = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Object.prototype.hasOwnProperty, $ = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(p) {
        return p();
      }
    };
    var j, K = {}, ce = C.react_stack_bottom_frame.bind(
      C,
      i
    )(), ae = B(n(i)), w = {};
    at.Fragment = v, at.jsx = function(p, k, M) {
      var I = 1e4 > s.recentlyCreatedOwnerStacks++;
      return m(
        p,
        k,
        M,
        !1,
        I ? Error("react-stack-top-frame") : ce,
        I ? B(n(p)) : ae
      );
    }, at.jsxs = function(p, k, M) {
      var I = 1e4 > s.recentlyCreatedOwnerStacks++;
      return m(
        p,
        k,
        M,
        !0,
        I ? Error("react-stack-top-frame") : ce,
        I ? B(n(p)) : ae
      );
    };
  })()), at;
}
var Hr;
function Ho() {
  return Hr || (Hr = 1, process.env.NODE_ENV === "production" ? Tt.exports = qo() : Tt.exports = Go()), Tt.exports;
}
var de = Ho(), Ct = { exports: {} }, xt = { exports: {} }, Q = {};
var Kr;
function Ko() {
  if (Kr) return Q;
  Kr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function O(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case t:
          switch (d = d.type, d) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case m:
                case g:
                case C:
                case a:
                  return d;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function T(d) {
    return O(d) === f;
  }
  return Q.AsyncMode = u, Q.ConcurrentMode = f, Q.ContextConsumer = c, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = m, Q.Fragment = n, Q.Lazy = g, Q.Memo = C, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = h, Q.isAsyncMode = function(d) {
    return T(d) || O(d) === u;
  }, Q.isConcurrentMode = T, Q.isContextConsumer = function(d) {
    return O(d) === c;
  }, Q.isContextProvider = function(d) {
    return O(d) === a;
  }, Q.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, Q.isForwardRef = function(d) {
    return O(d) === m;
  }, Q.isFragment = function(d) {
    return O(d) === n;
  }, Q.isLazy = function(d) {
    return O(d) === g;
  }, Q.isMemo = function(d) {
    return O(d) === C;
  }, Q.isPortal = function(d) {
    return O(d) === r;
  }, Q.isProfiler = function(d) {
    return O(d) === i;
  }, Q.isStrictMode = function(d) {
    return O(d) === o;
  }, Q.isSuspense = function(d) {
    return O(d) === h;
  }, Q.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === i || d === o || d === h || d === b || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === C || d.$$typeof === a || d.$$typeof === c || d.$$typeof === m || d.$$typeof === v || d.$$typeof === R || d.$$typeof === P || d.$$typeof === l);
  }, Q.typeOf = O, Q;
}
var Z = {};
var Xr;
function Xo() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function O(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === f || E === i || E === o || E === h || E === b || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === C || E.$$typeof === a || E.$$typeof === c || E.$$typeof === m || E.$$typeof === v || E.$$typeof === R || E.$$typeof === P || E.$$typeof === l);
    }
    function T(E) {
      if (typeof E == "object" && E !== null) {
        var ye = E.$$typeof;
        switch (ye) {
          case t:
            var Ee = E.type;
            switch (Ee) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case h:
                return Ee;
              default:
                var Ve = Ee && Ee.$$typeof;
                switch (Ve) {
                  case c:
                  case m:
                  case g:
                  case C:
                  case a:
                    return Ve;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var d = u, x = f, A = c, H = a, z = t, Y = m, L = n, s = g, _ = C, $ = r, B = i, j = o, K = h, ce = !1;
    function ae(E) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(E) || T(E) === u;
    }
    function w(E) {
      return T(E) === f;
    }
    function p(E) {
      return T(E) === c;
    }
    function k(E) {
      return T(E) === a;
    }
    function M(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function I(E) {
      return T(E) === m;
    }
    function W(E) {
      return T(E) === n;
    }
    function F(E) {
      return T(E) === g;
    }
    function N(E) {
      return T(E) === C;
    }
    function V(E) {
      return T(E) === r;
    }
    function G(E) {
      return T(E) === i;
    }
    function q(E) {
      return T(E) === o;
    }
    function he(E) {
      return T(E) === h;
    }
    Z.AsyncMode = d, Z.ConcurrentMode = x, Z.ContextConsumer = A, Z.ContextProvider = H, Z.Element = z, Z.ForwardRef = Y, Z.Fragment = L, Z.Lazy = s, Z.Memo = _, Z.Portal = $, Z.Profiler = B, Z.StrictMode = j, Z.Suspense = K, Z.isAsyncMode = ae, Z.isConcurrentMode = w, Z.isContextConsumer = p, Z.isContextProvider = k, Z.isElement = M, Z.isForwardRef = I, Z.isFragment = W, Z.isLazy = F, Z.isMemo = N, Z.isPortal = V, Z.isProfiler = G, Z.isStrictMode = q, Z.isSuspense = he, Z.isValidElementType = O, Z.typeOf = T;
  })()), Z;
}
var Jr;
function qn() {
  return Jr || (Jr = 1, process.env.NODE_ENV === "production" ? xt.exports = Ko() : xt.exports = Xo()), xt.exports;
}
var cr, Qr;
function Jo() {
  if (Qr) return cr;
  Qr = 1;
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
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return cr = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), f, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var h in c)
        t.call(c, h) && (u[h] = c[h]);
      if (e) {
        f = e(c);
        for (var b = 0; b < f.length; b++)
          r.call(c, f[b]) && (u[f[b]] = c[f[b]]);
      }
    }
    return u;
  }, cr;
}
var lr, Zr;
function Or() {
  if (Zr) return lr;
  Zr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lr = e, lr;
}
var ur, en;
function Gn() {
  return en || (en = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var fr, tn;
function Qo() {
  if (tn) return fr;
  tn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Or(), r = {}, n = /* @__PURE__ */ Gn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var h;
          try {
            if (typeof i[m] != "function") {
              var b = Error(
                (u || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            h = i[m](a, m, u, c, null, t);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var C = f ? f() : "";
            e(
              "Failed " + c + " type: " + h.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, fr = o, fr;
}
var dr, rn;
function Zo() {
  if (rn) return dr;
  rn = 1;
  var e = qn(), t = Jo(), r = /* @__PURE__ */ Or(), n = /* @__PURE__ */ Gn(), o = /* @__PURE__ */ Qo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return dr = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function h(w) {
      var p = w && (f && w[f] || w[m]);
      if (typeof p == "function")
        return p;
    }
    var b = "<<anonymous>>", C = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: P(),
      arrayOf: O,
      element: T(),
      elementType: d(),
      instanceOf: x,
      node: Y(),
      objectOf: H,
      oneOf: A,
      oneOfType: z,
      shape: s,
      exact: _
    };
    function g(w, p) {
      return w === p ? w !== 0 || 1 / w === 1 / p : w !== w && p !== p;
    }
    function l(w, p) {
      this.message = w, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function v(w) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, k = 0;
      function M(W, F, N, V, G, q, he) {
        if (V = V || b, q = q || N, he !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = V + ":" + N;
            !p[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[ye] = !0, k++);
          }
        }
        return F[N] == null ? W ? F[N] === null ? new l("The " + G + " `" + q + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new l("The " + G + " `" + q + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : w(F, N, V, G, q);
      }
      var I = M.bind(null, !1);
      return I.isRequired = M.bind(null, !0), I;
    }
    function R(w) {
      function p(k, M, I, W, F, N) {
        var V = k[M], G = j(V);
        if (G !== w) {
          var q = K(V);
          return new l(
            "Invalid " + W + " `" + F + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return v(p);
    }
    function P() {
      return v(a);
    }
    function O(w) {
      function p(k, M, I, W, F) {
        if (typeof w != "function")
          return new l("Property `" + F + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var N = k[M];
        if (!Array.isArray(N)) {
          var V = j(N);
          return new l("Invalid " + W + " `" + F + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected an array."));
        }
        for (var G = 0; G < N.length; G++) {
          var q = w(N, G, I, W, F + "[" + G + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return v(p);
    }
    function T() {
      function w(p, k, M, I, W) {
        var F = p[k];
        if (!c(F)) {
          var N = j(F);
          return new l("Invalid " + I + " `" + W + "` of type " + ("`" + N + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(w);
    }
    function d() {
      function w(p, k, M, I, W) {
        var F = p[k];
        if (!e.isValidElementType(F)) {
          var N = j(F);
          return new l("Invalid " + I + " `" + W + "` of type " + ("`" + N + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(w);
    }
    function x(w) {
      function p(k, M, I, W, F) {
        if (!(k[M] instanceof w)) {
          var N = w.name || b, V = ae(k[M]);
          return new l("Invalid " + W + " `" + F + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return v(p);
    }
    function A(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function p(k, M, I, W, F) {
        for (var N = k[M], V = 0; V < w.length; V++)
          if (g(N, w[V]))
            return null;
        var G = JSON.stringify(w, function(he, E) {
          var ye = K(E);
          return ye === "symbol" ? String(E) : E;
        });
        return new l("Invalid " + W + " `" + F + "` of value `" + String(N) + "` " + ("supplied to `" + I + "`, expected one of " + G + "."));
      }
      return v(p);
    }
    function H(w) {
      function p(k, M, I, W, F) {
        if (typeof w != "function")
          return new l("Property `" + F + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var N = k[M], V = j(N);
        if (V !== "object")
          return new l("Invalid " + W + " `" + F + "` of type " + ("`" + V + "` supplied to `" + I + "`, expected an object."));
        for (var G in N)
          if (n(N, G)) {
            var q = w(N, G, I, W, F + "." + G, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return v(p);
    }
    function z(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var p = 0; p < w.length; p++) {
        var k = w[p];
        if (typeof k != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(k) + " at index " + p + "."
          ), a;
      }
      function M(I, W, F, N, V) {
        for (var G = [], q = 0; q < w.length; q++) {
          var he = w[q], E = he(I, W, F, N, V, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && G.push(E.data.expectedType);
        }
        var ye = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new l("Invalid " + N + " `" + V + "` supplied to " + ("`" + F + "`" + ye + "."));
      }
      return v(M);
    }
    function Y() {
      function w(p, k, M, I, W) {
        return $(p[k]) ? null : new l("Invalid " + I + " `" + W + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return v(w);
    }
    function L(w, p, k, M, I) {
      return new l(
        (w || "React class") + ": " + p + " type `" + k + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function s(w) {
      function p(k, M, I, W, F) {
        var N = k[M], V = j(N);
        if (V !== "object")
          return new l("Invalid " + W + " `" + F + "` of type `" + V + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var G in w) {
          var q = w[G];
          if (typeof q != "function")
            return L(I, W, F, G, K(q));
          var he = q(N, G, I, W, F + "." + G, r);
          if (he)
            return he;
        }
        return null;
      }
      return v(p);
    }
    function _(w) {
      function p(k, M, I, W, F) {
        var N = k[M], V = j(N);
        if (V !== "object")
          return new l("Invalid " + W + " `" + F + "` of type `" + V + "` " + ("supplied to `" + I + "`, expected `object`."));
        var G = t({}, k[M], w);
        for (var q in G) {
          var he = w[q];
          if (n(w, q) && typeof he != "function")
            return L(I, W, F, q, K(he));
          if (!he)
            return new l(
              "Invalid " + W + " `" + F + "` key `" + q + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(k[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var E = he(N, q, I, W, F + "." + q, r);
          if (E)
            return E;
        }
        return null;
      }
      return v(p);
    }
    function $(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every($);
          if (w === null || c(w))
            return !0;
          var p = h(w);
          if (p) {
            var k = p.call(w), M;
            if (p !== w.entries) {
              for (; !(M = k.next()).done; )
                if (!$(M.value))
                  return !1;
            } else
              for (; !(M = k.next()).done; ) {
                var I = M.value;
                if (I && !$(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(w, p) {
      return w === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function j(w) {
      var p = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : B(p, w) ? "symbol" : p;
    }
    function K(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var p = j(w);
      if (p === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function ce(w) {
      var p = K(w);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function ae(w) {
      return !w.constructor || !w.constructor.name ? b : w.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, dr;
}
var pr, nn;
function ei() {
  if (nn) return pr;
  nn = 1;
  var e = /* @__PURE__ */ Or();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, pr = function() {
    function n(a, c, u, f, m, h) {
      if (h !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
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
  }, pr;
}
var on;
function ti() {
  if (on) return Ct.exports;
  if (on = 1, process.env.NODE_ENV !== "production") {
    var e = qn(), t = !0;
    Ct.exports = /* @__PURE__ */ Zo()(e.isElement, t);
  } else
    Ct.exports = /* @__PURE__ */ ei()();
  return Ct.exports;
}
var ri = /* @__PURE__ */ ti();
const y = /* @__PURE__ */ Uo(ri);
function Hn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Hn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ve() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Hn(e)) && (n && (n += " "), n += t);
  return n;
}
function Dt(e, t, r = !1) {
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
        const a = e[i], c = t[i];
        if (!c)
          n[i] = a || {};
        else if (!a)
          n[i] = c;
        else {
          n[i] = {
            ...c
          };
          for (const u in a)
            if (Object.prototype.hasOwnProperty.call(a, u)) {
              const f = u;
              n[i][f] = Dt(a[f], c[f], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = ve(e?.className, t?.className) : i === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
function kr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (a += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
const an = (e) => e, ni = () => {
  let e = an;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = an;
    }
  };
}, oi = ni();
function je(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : je(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var wt = { exports: {} }, oe = {};
var sn;
function ii() {
  if (sn) return oe;
  sn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), C = Symbol.for("react.client.reference");
  function g(l) {
    if (typeof l == "object" && l !== null) {
      var v = l.$$typeof;
      switch (v) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case b:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case c:
                case h:
                case m:
                  return l;
                case i:
                  return l;
                default:
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = a, oe.Element = e, oe.ForwardRef = c, oe.Fragment = r, oe.Lazy = h, oe.Memo = m, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = u, oe.SuspenseList = f, oe.isContextConsumer = function(l) {
    return g(l) === i;
  }, oe.isContextProvider = function(l) {
    return g(l) === a;
  }, oe.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, oe.isForwardRef = function(l) {
    return g(l) === c;
  }, oe.isFragment = function(l) {
    return g(l) === r;
  }, oe.isLazy = function(l) {
    return g(l) === h;
  }, oe.isMemo = function(l) {
    return g(l) === m;
  }, oe.isPortal = function(l) {
    return g(l) === t;
  }, oe.isProfiler = function(l) {
    return g(l) === o;
  }, oe.isStrictMode = function(l) {
    return g(l) === n;
  }, oe.isSuspense = function(l) {
    return g(l) === u;
  }, oe.isSuspenseList = function(l) {
    return g(l) === f;
  }, oe.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === u || l === f || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === m || l.$$typeof === a || l.$$typeof === i || l.$$typeof === c || l.$$typeof === C || l.getModuleId !== void 0);
  }, oe.typeOf = g, oe;
}
var ie = {};
var cn;
function ai() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var v = l.$$typeof;
        switch (v) {
          case t:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case m:
              case C:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case u:
                  case b:
                  case h:
                    return l;
                  case a:
                    return l;
                  default:
                    return v;
                }
            }
          case r:
            return v;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    ie.ContextConsumer = a, ie.ContextProvider = c, ie.Element = t, ie.ForwardRef = u, ie.Fragment = n, ie.Lazy = b, ie.Memo = h, ie.Portal = r, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = f, ie.SuspenseList = m, ie.isContextConsumer = function(l) {
      return e(l) === a;
    }, ie.isContextProvider = function(l) {
      return e(l) === c;
    }, ie.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, ie.isForwardRef = function(l) {
      return e(l) === u;
    }, ie.isFragment = function(l) {
      return e(l) === n;
    }, ie.isLazy = function(l) {
      return e(l) === b;
    }, ie.isMemo = function(l) {
      return e(l) === h;
    }, ie.isPortal = function(l) {
      return e(l) === r;
    }, ie.isProfiler = function(l) {
      return e(l) === i;
    }, ie.isStrictMode = function(l) {
      return e(l) === o;
    }, ie.isSuspense = function(l) {
      return e(l) === f;
    }, ie.isSuspenseList = function(l) {
      return e(l) === m;
    }, ie.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === m || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === h || l.$$typeof === c || l.$$typeof === a || l.$$typeof === u || l.$$typeof === g || l.getModuleId !== void 0);
    }, ie.typeOf = e;
  })()), ie;
}
var ln;
function si() {
  return ln || (ln = 1, process.env.NODE_ENV === "production" ? wt.exports = /* @__PURE__ */ ii() : wt.exports = /* @__PURE__ */ ai()), wt.exports;
}
var Bt = /* @__PURE__ */ si();
function De(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kn(e) {
  if (/* @__PURE__ */ D.isValidElement(e) || Bt.isValidElementType(e) || !De(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Kn(e[r]);
  }), t;
}
function Ce(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return De(e) && De(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ D.isValidElement(t[o]) || Bt.isValidElementType(t[o]) ? n[o] = t[o] : De(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && De(e[o]) ? n[o] = Ce(e[o], t[o], r) : r.clone ? n[o] = De(t[o]) ? Kn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function ft(e, t) {
  return t ? Ce(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Le = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {};
function un(e, t) {
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
function ci(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function li(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : je(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function ui(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = t(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const zt = {
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
}, fn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${zt[e]}px)`
}, fi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : zt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Be(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || fn;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || fn;
    return Object.keys(t).reduce((a, c) => {
      if (ci(i.keys, c)) {
        const u = li(n.containerQueries ? n : fi, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || zt).includes(c)) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function di(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function dn(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Wt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function jt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Wt(e, r) || n, t && (o = t(o, n, e)), o;
}
function fe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, f = Wt(u, n) || {};
    return Be(a, c, (h) => {
      let b = jt(f, o, h);
      return h === b && typeof h == "string" && (b = jt(f, o, `${t}${h === "default" ? "" : me(h)}`, h)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Le
  } : {}, i.filterProps = [t], i;
}
function pi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const mi = {
  m: "margin",
  p: "padding"
}, hi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, pn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, gi = pi((e) => {
  if (e.length > 2)
    if (pn[e])
      e = pn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = mi[t], o = hi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Yt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ut = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], yi = [...Yt, ...Ut];
function gt(e, t, r, n) {
  const o = Wt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ar(e) {
  return gt(e, "spacing", 8, "spacing");
}
function yt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function bi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = yt(t, r), n), {});
}
function vi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = gi(r), i = bi(o, n), a = e[r];
  return Be(e, a, i);
}
function Xn(e, t) {
  const r = Ar(e.theme);
  return Object.keys(e).map((n) => vi(e, t, n, r)).reduce(ft, {});
}
function le(e) {
  return Xn(e, Yt);
}
le.propTypes = process.env.NODE_ENV !== "production" ? Yt.reduce((e, t) => (e[t] = Le, e), {}) : {};
le.filterProps = Yt;
function ue(e) {
  return Xn(e, Ut);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? Ut.reduce((e, t) => (e[t] = Le, e), {}) : {};
ue.filterProps = Ut;
process.env.NODE_ENV !== "production" && yi.reduce((e, t) => (e[t] = Le, e), {});
function qt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? ft(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Re(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $e(e, t) {
  return fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Si = $e("border", Re), Ei = $e("borderTop", Re), Ti = $e("borderRight", Re), Ci = $e("borderBottom", Re), xi = $e("borderLeft", Re), wi = $e("borderColor"), Ri = $e("borderTopColor"), $i = $e("borderRightColor"), Pi = $e("borderBottomColor"), _i = $e("borderLeftColor"), Oi = $e("outline", Re), ki = $e("outlineColor"), Gt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = gt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: yt(t, n)
    });
    return Be(e, e.borderRadius, r);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Le
} : {};
Gt.filterProps = ["borderRadius"];
qt(Si, Ei, Ti, Ci, xi, wi, Ri, $i, Pi, _i, Gt, Oi, ki);
const Ht = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = gt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: yt(t, n)
    });
    return Be(e, e.gap, r);
  }
  return null;
};
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Le
} : {};
Ht.filterProps = ["gap"];
const Kt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = gt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: yt(t, n)
    });
    return Be(e, e.columnGap, r);
  }
  return null;
};
Kt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Le
} : {};
Kt.filterProps = ["columnGap"];
const Xt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = gt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: yt(t, n)
    });
    return Be(e, e.rowGap, r);
  }
  return null;
};
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Le
} : {};
Xt.filterProps = ["rowGap"];
const Ai = fe({
  prop: "gridColumn"
}), Ii = fe({
  prop: "gridRow"
}), Mi = fe({
  prop: "gridAutoFlow"
}), Ni = fe({
  prop: "gridAutoColumns"
}), Di = fe({
  prop: "gridAutoRows"
}), Bi = fe({
  prop: "gridTemplateColumns"
}), ji = fe({
  prop: "gridTemplateRows"
}), Fi = fe({
  prop: "gridTemplateAreas"
}), Li = fe({
  prop: "gridArea"
});
qt(Ht, Kt, Xt, Ai, Ii, Mi, Ni, Di, Bi, ji, Fi, Li);
function Ze(e, t) {
  return t === "grey" ? t : e;
}
const Vi = fe({
  prop: "color",
  themeKey: "palette",
  transform: Ze
}), zi = fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ze
}), Wi = fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ze
});
qt(Vi, zi, Wi);
function Te(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Yi = fe({
  prop: "width",
  transform: Te
}), Ir = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || zt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Te(r)
      };
    };
    return Be(e, e.maxWidth, t);
  }
  return null;
};
Ir.filterProps = ["maxWidth"];
const Ui = fe({
  prop: "minWidth",
  transform: Te
}), qi = fe({
  prop: "height",
  transform: Te
}), Gi = fe({
  prop: "maxHeight",
  transform: Te
}), Hi = fe({
  prop: "minHeight",
  transform: Te
});
fe({
  prop: "size",
  cssProperty: "width",
  transform: Te
});
fe({
  prop: "size",
  cssProperty: "height",
  transform: Te
});
const Ki = fe({
  prop: "boxSizing"
});
qt(Yi, Ir, Ui, qi, Gi, Hi, Ki);
const Jt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Re
  },
  borderTop: {
    themeKey: "borders",
    transform: Re
  },
  borderRight: {
    themeKey: "borders",
    transform: Re
  },
  borderBottom: {
    themeKey: "borders",
    transform: Re
  },
  borderLeft: {
    themeKey: "borders",
    transform: Re
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
    transform: Re
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Gt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ze
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ze
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ze
  },
  // spacing
  p: {
    style: ue
  },
  pt: {
    style: ue
  },
  pr: {
    style: ue
  },
  pb: {
    style: ue
  },
  pl: {
    style: ue
  },
  px: {
    style: ue
  },
  py: {
    style: ue
  },
  padding: {
    style: ue
  },
  paddingTop: {
    style: ue
  },
  paddingRight: {
    style: ue
  },
  paddingBottom: {
    style: ue
  },
  paddingLeft: {
    style: ue
  },
  paddingX: {
    style: ue
  },
  paddingY: {
    style: ue
  },
  paddingInline: {
    style: ue
  },
  paddingInlineStart: {
    style: ue
  },
  paddingInlineEnd: {
    style: ue
  },
  paddingBlock: {
    style: ue
  },
  paddingBlockStart: {
    style: ue
  },
  paddingBlockEnd: {
    style: ue
  },
  m: {
    style: le
  },
  mt: {
    style: le
  },
  mr: {
    style: le
  },
  mb: {
    style: le
  },
  ml: {
    style: le
  },
  mx: {
    style: le
  },
  my: {
    style: le
  },
  margin: {
    style: le
  },
  marginTop: {
    style: le
  },
  marginRight: {
    style: le
  },
  marginBottom: {
    style: le
  },
  marginLeft: {
    style: le
  },
  marginX: {
    style: le
  },
  marginY: {
    style: le
  },
  marginInline: {
    style: le
  },
  marginInlineStart: {
    style: le
  },
  marginInlineEnd: {
    style: le
  },
  marginBlock: {
    style: le
  },
  marginBlockStart: {
    style: le
  },
  marginBlockEnd: {
    style: le
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
    style: Ht
  },
  rowGap: {
    style: Xt
  },
  columnGap: {
    style: Kt
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
    transform: Te
  },
  maxWidth: {
    style: Ir
  },
  minWidth: {
    transform: Te
  },
  height: {
    transform: Te
  },
  maxHeight: {
    transform: Te
  },
  minHeight: {
    transform: Te
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
function Xi(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ji(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qi() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: m,
      style: h
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = Wt(o, f) || {};
    return h ? h(a) : Be(a, n, (g) => {
      let l = jt(b, m, g);
      return g === l && typeof g == "string" && (l = jt(b, m, `${r}${g === "default" ? "" : me(g)}`, g)), u === !1 ? l : {
        [u]: l
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
    const a = o.unstable_sxConfig ?? Jt;
    function c(u) {
      let f = u;
      if (typeof u == "function")
        f = u(o);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const m = di(o.breakpoints), h = Object.keys(m);
      let b = m;
      return Object.keys(f).forEach((C) => {
        const g = Ji(f[C], o);
        if (g != null)
          if (typeof g == "object")
            if (a[C])
              b = ft(b, e(C, g, o, a));
            else {
              const l = Be({
                theme: o
              }, g, (v) => ({
                [C]: v
              }));
              Xi(l, g) ? b[C] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : b = ft(b, l);
            }
          else
            b = ft(b, e(C, g, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": un(o, dn(h, b))
      } : un(o, dn(h, b));
    }
    return Array.isArray(n) ? n.map(c) : c(n);
  }
  return t;
}
const tt = Qi();
tt.filterProps = ["sx"];
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ft.apply(null, arguments);
}
function Zi(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ea(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ta = /* @__PURE__ */ (function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ea(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Zi(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), be = "-ms-", Lt = "-moz-", X = "-webkit-", Jn = "comm", Mr = "rule", Nr = "decl", ra = "@import", Qn = "@keyframes", na = "@layer", oa = Math.abs, Qt = String.fromCharCode, ia = Object.assign;
function aa(e, t) {
  return ge(e, 0) ^ 45 ? (((t << 2 ^ ge(e, 0)) << 2 ^ ge(e, 1)) << 2 ^ ge(e, 2)) << 2 ^ ge(e, 3) : 0;
}
function Zn(e) {
  return e.trim();
}
function sa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, r) {
  return e.replace(t, r);
}
function vr(e, t) {
  return e.indexOf(t);
}
function ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function dt(e, t, r) {
  return e.slice(t, r);
}
function ke(e) {
  return e.length;
}
function Dr(e) {
  return e.length;
}
function Rt(e, t) {
  return t.push(e), e;
}
function ca(e, t) {
  return e.map(t).join("");
}
var Zt = 1, rt = 1, eo = 0, Se = 0, pe = 0, nt = "";
function er(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Zt, column: rt, length: a, return: "" };
}
function st(e, t) {
  return ia(er("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function la() {
  return pe;
}
function ua() {
  return pe = Se > 0 ? ge(nt, --Se) : 0, rt--, pe === 10 && (rt = 1, Zt--), pe;
}
function xe() {
  return pe = Se < eo ? ge(nt, Se++) : 0, rt++, pe === 10 && (rt = 1, Zt++), pe;
}
function Ie() {
  return ge(nt, Se);
}
function kt() {
  return Se;
}
function bt(e, t) {
  return dt(nt, e, t);
}
function pt(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function to(e) {
  return Zt = rt = 1, eo = ke(nt = e), Se = 0, [];
}
function ro(e) {
  return nt = "", e;
}
function At(e) {
  return Zn(bt(Se - 1, Sr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fa(e) {
  for (; (pe = Ie()) && pe < 33; )
    xe();
  return pt(e) > 2 || pt(pe) > 3 ? "" : " ";
}
function da(e, t) {
  for (; --t && xe() && !(pe < 48 || pe > 102 || pe > 57 && pe < 65 || pe > 70 && pe < 97); )
    ;
  return bt(e, kt() + (t < 6 && Ie() == 32 && xe() == 32));
}
function Sr(e) {
  for (; xe(); )
    switch (pe) {
      // ] ) " '
      case e:
        return Se;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sr(pe);
        break;
      // (
      case 40:
        e === 41 && Sr(e);
        break;
      // \
      case 92:
        xe();
        break;
    }
  return Se;
}
function pa(e, t) {
  for (; xe() && e + pe !== 57; )
    if (e + pe === 84 && Ie() === 47)
      break;
  return "/*" + bt(t, Se - 1) + "*" + Qt(e === 47 ? e : xe());
}
function ma(e) {
  for (; !pt(Ie()); )
    xe();
  return bt(e, Se);
}
function ha(e) {
  return ro(It("", null, null, null, [""], e = to(e), 0, [0], e));
}
function It(e, t, r, n, o, i, a, c, u) {
  for (var f = 0, m = 0, h = a, b = 0, C = 0, g = 0, l = 1, v = 1, R = 1, P = 0, O = "", T = o, d = i, x = n, A = O; v; )
    switch (g = P, P = xe()) {
      // (
      case 40:
        if (g != 108 && ge(A, h - 1) == 58) {
          vr(A += J(At(P), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += At(P);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        A += fa(g);
        break;
      // \
      case 92:
        A += da(kt() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ie()) {
          case 42:
          case 47:
            Rt(ga(pa(xe(), kt()), t, r), u);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * l:
        c[f++] = ke(A) * R;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (P) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + m:
            R == -1 && (A = J(A, /\f/g, "")), C > 0 && ke(A) - h && Rt(C > 32 ? hn(A + ";", n, r, h - 1) : hn(J(A, " ", "") + ";", n, r, h - 2), u);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (Rt(x = mn(A, t, r, f, m, o, c, O, T = [], d = [], h), i), P === 123)
              if (m === 0)
                It(A, t, x, x, T, i, h, c, d);
              else
                switch (b === 99 && ge(A, 3) === 110 ? 100 : b) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    It(e, x, x, n && Rt(mn(e, x, x, 0, 0, o, c, O, o, T = [], h), d), o, d, h, c, n ? T : d);
                    break;
                  default:
                    It(A, x, x, x, [""], d, 0, c, d);
                }
        }
        f = m = C = 0, l = R = 1, O = A = "", h = a;
        break;
      // :
      case 58:
        h = 1 + ke(A), C = g;
      default:
        if (l < 1) {
          if (P == 123)
            --l;
          else if (P == 125 && l++ == 0 && ua() == 125)
            continue;
        }
        switch (A += Qt(P), P * l) {
          // &
          case 38:
            R = m > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            c[f++] = (ke(A) - 1) * R, R = 1;
            break;
          // @
          case 64:
            Ie() === 45 && (A += At(xe())), b = Ie(), m = h = ke(O = A += ma(kt())), P++;
            break;
          // -
          case 45:
            g === 45 && ke(A) == 2 && (l = 0);
        }
    }
  return i;
}
function mn(e, t, r, n, o, i, a, c, u, f, m) {
  for (var h = o - 1, b = o === 0 ? i : [""], C = Dr(b), g = 0, l = 0, v = 0; g < n; ++g)
    for (var R = 0, P = dt(e, h + 1, h = oa(l = a[g])), O = e; R < C; ++R)
      (O = Zn(l > 0 ? b[R] + " " + P : J(P, /&\f/g, b[R]))) && (u[v++] = O);
  return er(e, t, r, o === 0 ? Mr : c, u, f, m);
}
function ga(e, t, r) {
  return er(e, t, r, Jn, Qt(la()), dt(e, 2, -2), 0);
}
function hn(e, t, r, n) {
  return er(e, t, r, Nr, dt(e, 0, n), dt(e, n + 1, -1), n);
}
function et(e, t) {
  for (var r = "", n = Dr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ya(e, t, r, n) {
  switch (e.type) {
    case na:
      if (e.children.length) break;
    case ra:
    case Nr:
      return e.return = e.return || e.value;
    case Jn:
      return "";
    case Qn:
      return e.return = e.value + "{" + et(e.children, n) + "}";
    case Mr:
      e.value = e.props.join(",");
  }
  return ke(r = et(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ba(e) {
  var t = Dr(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function va(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function no(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Sa = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ie(), o === 38 && i === 12 && (r[n] = 1), !pt(i); )
    xe();
  return bt(t, Se);
}, Ea = function(t, r) {
  var n = -1, o = 44;
  do
    switch (pt(o)) {
      case 0:
        o === 38 && Ie() === 12 && (r[n] = 1), t[n] += Sa(Se - 1, r, n);
        break;
      case 2:
        t[n] += At(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ie() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Qt(o);
    }
  while (o = xe());
  return t;
}, Ta = function(t, r) {
  return ro(Ea(to(t), r));
}, gn = /* @__PURE__ */ new WeakMap(), Ca = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !gn.get(n)) && !o) {
      gn.set(t, !0);
      for (var i = [], a = Ta(r, i), c = n.props, u = 0, f = 0; u < a.length; u++)
        for (var m = 0; m < c.length; m++, f++)
          t.props[f] = i[u] ? a[u].replace(/&\f/g, c[m]) : c[m] + " " + a[u];
    }
  }
}, xa = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function oo(e, t) {
  switch (aa(e, t)) {
    // color-adjust
    case 5103:
      return X + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + Lt + e + be + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return X + e + be + e + e;
    // order
    case 6165:
      return X + e + be + "flex-" + e + e;
    // align-items
    case 5187:
      return X + e + J(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + be + "flex-$1$2") + e;
    // align-self
    case 5443:
      return X + e + be + "flex-item-" + J(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return X + e + be + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return X + e + be + J(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return X + e + be + J(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return X + "box-" + J(e, "-grow", "") + X + e + be + J(e, "grow", "positive") + e;
    // transition
    case 4554:
      return X + J(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    // cursor
    case 6187:
      return J(J(J(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, X + "$1$`$1");
    // justify-content
    case 4968:
      return J(J(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + X + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ke(e) - 1 - t > 6) switch (ge(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ge(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return J(e, /(.+:)(.+)-([^]+)/, "$1" + X + "$2-$3$1" + Lt + (ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~vr(e, "stretch") ? oo(J(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ge(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ge(e, ke(e) - 3 - (~vr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return J(e, ":", ":" + X) + e;
        // (inline-)?fl(e)x
        case 101:
          return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + X + (ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + X + "$2$3$1" + be + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ge(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return X + e + be + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return X + e + be + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return X + e + be + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return X + e + be + e + e;
  }
  return e;
}
var wa = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Nr:
      t.return = oo(t.value, t.length);
      break;
    case Qn:
      return et([st(t, {
        value: J(t.value, "@", "@" + X)
      })], o);
    case Mr:
      if (t.length) return ca(t.props, function(i) {
        switch (sa(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return et([st(t, {
              props: [J(i, /:(read-\w+)/, ":" + Lt + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return et([st(t, {
              props: [J(i, /:(plac\w+)/, ":" + X + "input-$1")]
            }), st(t, {
              props: [J(i, /:(plac\w+)/, ":" + Lt + "$1")]
            }), st(t, {
              props: [J(i, /:(plac\w+)/, be + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ra = [wa], $a = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var v = l.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ra, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(l) {
      for (var v = l.getAttribute("data-emotion").split(" "), R = 1; R < v.length; R++)
        i[v[R]] = !0;
      c.push(l);
    }
  );
  var u, f = [Ca, xa];
  {
    var m, h = [ya, va(function(l) {
      m.insert(l);
    })], b = ba(f.concat(o, h)), C = function(v) {
      return et(ha(v), b);
    };
    u = function(v, R, P, O) {
      m = P, C(v ? v + "{" + R.styles + "}" : R.styles), O && (g.inserted[R.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new ta({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(c), g;
}, $t = { exports: {} }, ee = {};
var yn;
function Pa() {
  if (yn) return ee;
  yn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function O(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case t:
          switch (d = d.type, d) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case c:
                case m:
                case g:
                case C:
                case a:
                  return d;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function T(d) {
    return O(d) === f;
  }
  return ee.AsyncMode = u, ee.ConcurrentMode = f, ee.ContextConsumer = c, ee.ContextProvider = a, ee.Element = t, ee.ForwardRef = m, ee.Fragment = n, ee.Lazy = g, ee.Memo = C, ee.Portal = r, ee.Profiler = i, ee.StrictMode = o, ee.Suspense = h, ee.isAsyncMode = function(d) {
    return T(d) || O(d) === u;
  }, ee.isConcurrentMode = T, ee.isContextConsumer = function(d) {
    return O(d) === c;
  }, ee.isContextProvider = function(d) {
    return O(d) === a;
  }, ee.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, ee.isForwardRef = function(d) {
    return O(d) === m;
  }, ee.isFragment = function(d) {
    return O(d) === n;
  }, ee.isLazy = function(d) {
    return O(d) === g;
  }, ee.isMemo = function(d) {
    return O(d) === C;
  }, ee.isPortal = function(d) {
    return O(d) === r;
  }, ee.isProfiler = function(d) {
    return O(d) === i;
  }, ee.isStrictMode = function(d) {
    return O(d) === o;
  }, ee.isSuspense = function(d) {
    return O(d) === h;
  }, ee.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === f || d === i || d === o || d === h || d === b || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === C || d.$$typeof === a || d.$$typeof === c || d.$$typeof === m || d.$$typeof === v || d.$$typeof === R || d.$$typeof === P || d.$$typeof === l);
  }, ee.typeOf = O, ee;
}
var te = {};
var bn;
function _a() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function O(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === f || E === i || E === o || E === h || E === b || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === C || E.$$typeof === a || E.$$typeof === c || E.$$typeof === m || E.$$typeof === v || E.$$typeof === R || E.$$typeof === P || E.$$typeof === l);
    }
    function T(E) {
      if (typeof E == "object" && E !== null) {
        var ye = E.$$typeof;
        switch (ye) {
          case t:
            var Ee = E.type;
            switch (Ee) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case h:
                return Ee;
              default:
                var Ve = Ee && Ee.$$typeof;
                switch (Ve) {
                  case c:
                  case m:
                  case g:
                  case C:
                  case a:
                    return Ve;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var d = u, x = f, A = c, H = a, z = t, Y = m, L = n, s = g, _ = C, $ = r, B = i, j = o, K = h, ce = !1;
    function ae(E) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(E) || T(E) === u;
    }
    function w(E) {
      return T(E) === f;
    }
    function p(E) {
      return T(E) === c;
    }
    function k(E) {
      return T(E) === a;
    }
    function M(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function I(E) {
      return T(E) === m;
    }
    function W(E) {
      return T(E) === n;
    }
    function F(E) {
      return T(E) === g;
    }
    function N(E) {
      return T(E) === C;
    }
    function V(E) {
      return T(E) === r;
    }
    function G(E) {
      return T(E) === i;
    }
    function q(E) {
      return T(E) === o;
    }
    function he(E) {
      return T(E) === h;
    }
    te.AsyncMode = d, te.ConcurrentMode = x, te.ContextConsumer = A, te.ContextProvider = H, te.Element = z, te.ForwardRef = Y, te.Fragment = L, te.Lazy = s, te.Memo = _, te.Portal = $, te.Profiler = B, te.StrictMode = j, te.Suspense = K, te.isAsyncMode = ae, te.isConcurrentMode = w, te.isContextConsumer = p, te.isContextProvider = k, te.isElement = M, te.isForwardRef = I, te.isFragment = W, te.isLazy = F, te.isMemo = N, te.isPortal = V, te.isProfiler = G, te.isStrictMode = q, te.isSuspense = he, te.isValidElementType = O, te.typeOf = T;
  })()), te;
}
var vn;
function Oa() {
  return vn || (vn = 1, process.env.NODE_ENV === "production" ? $t.exports = Pa() : $t.exports = _a()), $t.exports;
}
var mr, Sn;
function ka() {
  if (Sn) return mr;
  Sn = 1;
  var e = Oa(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function a(g) {
    return e.isMemo(g) ? o : i[g.$$typeof] || t;
  }
  var c = Object.defineProperty, u = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, b = Object.prototype;
  function C(g, l, v) {
    if (typeof l != "string") {
      if (b) {
        var R = h(l);
        R && R !== b && C(g, R, v);
      }
      var P = u(l);
      f && (P = P.concat(f(l)));
      for (var O = a(g), T = a(l), d = 0; d < P.length; ++d) {
        var x = P[d];
        if (!r[x] && !(v && v[x]) && !(T && T[x]) && !(O && O[x])) {
          var A = m(l, x);
          try {
            c(g, x, A);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return mr = C, mr;
}
ka();
var Aa = !0;
function io(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Br = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Aa === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ao = function(t, r, n) {
  Br(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ia(e) {
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
var Ma = {
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
}, Na = /[A-Z]|^ms/g, Da = /_EMO_([^_]+?)_([^]*?)_EMO_/g, so = function(t) {
  return t.charCodeAt(1) === 45;
}, En = function(t) {
  return t != null && typeof t != "boolean";
}, hr = /* @__PURE__ */ no(function(e) {
  return so(e) ? e : e.replace(Na, "-$&").toLowerCase();
}), Tn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Da, function(n, o, i) {
          return Ae = {
            name: o,
            styles: i,
            next: Ae
          }, o;
        });
  }
  return Ma[t] !== 1 && !so(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function mt(e, t, r) {
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
        return Ae = {
          name: o.name,
          styles: o.styles,
          next: Ae
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ae = {
              name: a.name,
              styles: a.styles,
              next: Ae
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return Ba(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ae, f = r(e);
        return Ae = u, mt(e, t, f);
      }
      break;
    }
  }
  var m = r;
  if (t == null)
    return m;
  var h = t[m];
  return h !== void 0 ? h : m;
}
function Ba(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += mt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : En(c) && (n += hr(i) + ":" + Tn(i, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var u = 0; u < a.length; u++)
          En(a[u]) && (n += hr(i) + ":" + Tn(i, a[u]) + ";");
      else {
        var f = mt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += hr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Cn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ae;
function tr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ae = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += mt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += mt(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  Cn.lastIndex = 0;
  for (var f = "", m; (m = Cn.exec(o)) !== null; )
    f += "-" + m[1];
  var h = Ia(o) + f;
  return {
    name: h,
    styles: o,
    next: Ae
  };
}
var ja = function(t) {
  return t();
}, Fa = D.useInsertionEffect ? D.useInsertionEffect : !1, co = Fa || ja, lo = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $a({
    key: "css"
  }) : null
);
lo.Provider;
var uo = function(t) {
  return /* @__PURE__ */ zo(function(r, n) {
    var o = Wo(lo);
    return t(r, o, n);
  });
}, fo = /* @__PURE__ */ D.createContext({}), jr = {}.hasOwnProperty, Er = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", La = function(t, r) {
  var n = {};
  for (var o in r)
    jr.call(r, o) && (n[o] = r[o]);
  return n[Er] = t, n;
}, Va = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Br(r, n, o), co(function() {
    return ao(r, n, o);
  }), null;
}, za = /* @__PURE__ */ uo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Er], i = [n], a = "";
  typeof e.className == "string" ? a = io(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = tr(i, void 0, D.useContext(fo));
  a += t.key + "-" + c.name;
  var u = {};
  for (var f in e)
    jr.call(e, f) && f !== "css" && f !== Er && (u[f] = e[f]);
  return u.className = a, r && (u.ref = r), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Va, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ D.createElement(o, u));
}), Wa = za, xn = function(t, r) {
  var n = arguments;
  if (r == null || !jr.call(r, "css"))
    return D.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = Wa, i[1] = La(t, r);
  for (var a = 2; a < o; a++)
    i[a] = n[a];
  return D.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(xn || (xn = {}));
function Fr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return tr(t);
}
function vt() {
  var e = Fr.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Ya = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ua = /* @__PURE__ */ no(
  function(e) {
    return Ya.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qa = Ua, Ga = function(t) {
  return t !== "theme";
}, wn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? qa : Ga;
}, Rn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ha = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Br(r, n, o), co(function() {
    return ao(r, n, o);
  }), null;
}, Ka = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Rn(t, r, n), u = c || wn(o), f = !u("as");
  return function() {
    var m = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      h.push.apply(h, m);
    else {
      var b = m[0];
      h.push(b[0]);
      for (var C = m.length, g = 1; g < C; g++)
        h.push(m[g], b[g]);
    }
    var l = uo(function(v, R, P) {
      var O = f && v.as || o, T = "", d = [], x = v;
      if (v.theme == null) {
        x = {};
        for (var A in v)
          x[A] = v[A];
        x.theme = D.useContext(fo);
      }
      typeof v.className == "string" ? T = io(R.registered, d, v.className) : v.className != null && (T = v.className + " ");
      var H = tr(h.concat(d), R.registered, x);
      T += R.key + "-" + H.name, a !== void 0 && (T += " " + a);
      var z = f && c === void 0 ? wn(O) : u, Y = {};
      for (var L in v)
        f && L === "as" || z(L) && (Y[L] = v[L]);
      return Y.className = T, P && (Y.ref = P), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Ha, {
        cache: R,
        serialized: H,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ D.createElement(O, Y));
    });
    return l.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", l.defaultProps = t.defaultProps, l.__emotion_real = l, l.__emotion_base = o, l.__emotion_styles = h, l.__emotion_forwardProp = c, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + a;
      }
    }), l.withComponent = function(v, R) {
      var P = e(v, Ft({}, r, R, {
        shouldForwardProp: Rn(l, R, !0)
      }));
      return P.apply(void 0, h);
    }, l;
  };
}, Xa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Tr = Ka.bind(null);
Xa.forEach(function(e) {
  Tr[e] = Tr(e);
});
function Ja(e, t) {
  const r = Tr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Qa(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const $n = [];
function qe(e) {
  return $n[0] = e, tr($n);
}
const Za = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function es(e) {
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
  } = e, i = Za(t), a = Object.keys(i);
  function c(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r})`;
  }
  function u(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - n / 100}${r})`;
  }
  function f(b, C) {
    const g = a.indexOf(C);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : C) - n / 100}${r})`;
  }
  function m(b) {
    return a.indexOf(b) + 1 < a.length ? f(b, a[a.indexOf(b) + 1]) : c(b);
  }
  function h(b) {
    const C = a.indexOf(b);
    return C === 0 ? c(a[1]) : C === a.length - 1 ? u(a[C]) : f(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: f,
    only: m,
    not: h,
    unit: r,
    ...o
  };
}
const ts = {
  borderRadius: 4
};
function po(e = 8, t = Ar({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function rs(e, t) {
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
function mo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = es(r), u = po(o);
  let f = Ce({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...ts,
      ...i
    }
  }, a);
  return f = ui(f), f.applyStyles = rs, f = t.reduce((m, h) => Ce(m, h), f), f.unstable_sxConfig = {
    ...Jt,
    ...a?.unstable_sxConfig
  }, f.unstable_sx = function(h) {
    return tt({
      sx: h,
      theme: this
    });
  }, f;
}
const ns = {
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
function St(e, t, r = "Mui") {
  const n = ns[t];
  return n ? `${r}-${n}` : `${oi.generate(e)}-${t}`;
}
function rr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = St(e, o, r);
  }), n;
}
function ho(e, t = "") {
  return e.displayName || e.name || t;
}
function Pn(e, t, r) {
  const n = ho(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function os(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ho(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Bt.ForwardRef:
          return Pn(e, e.render, "ForwardRef");
        case Bt.Memo:
          return Pn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function go(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: qe(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = qe(o.style));
  }), n;
}
const is = mo();
function gr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ye(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function as(e) {
  return e ? (t, r) => r[e] : null;
}
function ss(e, t, r) {
  e.theme = fs(e.theme) ? r : e.theme[t] || e.theme;
}
function Mt(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Mt(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Ye(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = r ? Ye(qe(a), r) : a;
    }
    return yo(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? Ye(qe(n.style), r) : n.style : r ? Ye(qe(n), r) : n;
}
function yo(e, t, r = [], n = void 0) {
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(o))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && e.ownerState?.[c] !== a.props[c])
          continue e;
    typeof a.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? Ye(qe(a.style(o)), n) : a.style(o))) : r.push(n ? Ye(qe(a.style), n) : a.style);
  }
  return r;
}
function cs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = is,
    rootShouldForwardProp: n = gr,
    slotShouldForwardProp: o = gr
  } = e;
  function i(c) {
    ss(c, t, r);
  }
  return (c, u = {}) => {
    Qa(c, (x) => x.filter((A) => A !== tt));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: h,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = as(bo(m)),
      ...g
    } = u, l = f && f.startsWith("Mui") || m ? "components" : "custom", v = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), R = b || !1;
    let P = gr;
    m === "Root" || m === "root" ? P = n : m ? P = o : ds(c) && (P = void 0);
    const O = Ja(c, {
      shouldForwardProp: P,
      label: us(f, m),
      ...g
    }), T = (x) => {
      if (x.__emotion_real === x)
        return x;
      if (typeof x == "function")
        return function(H) {
          return Mt(H, x, H.theme.modularCssLayers ? l : void 0);
        };
      if (De(x)) {
        const A = go(x);
        return function(z) {
          return A.variants ? Mt(z, A, z.theme.modularCssLayers ? l : void 0) : z.theme.modularCssLayers ? Ye(A.style, l) : A.style;
        };
      }
      return x;
    }, d = (...x) => {
      const A = [], H = x.map(T), z = [];
      if (A.push(i), f && C && z.push(function(_) {
        const B = _.theme.components?.[f]?.styleOverrides;
        if (!B)
          return null;
        const j = {};
        for (const K in B)
          j[K] = Mt(_, B[K], _.theme.modularCssLayers ? "theme" : void 0);
        return C(_, j);
      }), f && !v && z.push(function(_) {
        const B = _.theme?.components?.[f]?.variants;
        return B ? yo(_, B, [], _.theme.modularCssLayers ? "theme" : void 0) : null;
      }), R || z.push(tt), Array.isArray(H[0])) {
        const s = H.shift(), _ = new Array(A.length).fill(""), $ = new Array(z.length).fill("");
        let B;
        B = [..._, ...s, ...$], B.raw = [..._, ...s.raw, ...$], A.unshift(B);
      }
      const Y = [...A, ...H, ...z], L = O(...Y);
      return c.muiName && (L.muiName = c.muiName), process.env.NODE_ENV !== "production" && (L.displayName = ls(f, m, c)), L;
    };
    return O.withConfig && (d.withConfig = O.withConfig), d;
  };
}
function ls(e, t, r) {
  return e ? `${e}${me(t || "")}` : `Styled(${os(r)})`;
}
function us(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${bo(t || "Root")}`), r;
}
function fs(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ds(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function bo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ps = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function ms(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Lr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), ms(e, t, r);
}
function hs(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Fe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Fe(hs(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : je(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : je(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const gs = (e) => {
  const t = Fe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, lt = (e, t) => {
  try {
    return gs(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function nr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function vo(e) {
  e = Fe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, m = (f + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), nr({
    type: c,
    values: u
  });
}
function Cr(e) {
  e = Fe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Fe(vo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function _n(e, t) {
  const r = Cr(e), n = Cr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function So(e, t) {
  return e = Fe(e), t = Lr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, nr(e);
}
function ze(e, t, r) {
  try {
    return So(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function or(e, t) {
  if (e = Fe(e), t = Lr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return nr(e);
}
function re(e, t, r) {
  try {
    return or(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ir(e, t) {
  if (e = Fe(e), t = Lr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return nr(e);
}
function ne(e, t, r) {
  try {
    return ir(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ys(e, t = 0.15) {
  return Cr(e) > 0.5 ? or(e, t) : ir(e, t);
}
function Pt(e, t, r) {
  try {
    return ys(e, t);
  } catch {
    return e;
  }
}
const bs = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (y.node, y.object);
function vs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Dt(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Dt(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Ss({
  props: e,
  name: t
}) {
  const r = D.useContext(bs);
  return vs({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let On = 0;
function Es(e) {
  const [t, r] = D.useState(e), n = e || t;
  return D.useEffect(() => {
    t == null && (On += 1, r(`mui-${On}`));
  }, [t]), n;
}
const Ts = {
  ...D
}, kn = Ts.useId;
function Cs(e) {
  if (kn !== void 0) {
    const t = kn();
    return e ?? t;
  }
  return Es(e);
}
const An = {
  theme: void 0
};
function xs(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (An.theme = o.theme, i = go(e(An)), t = i, r = o.theme), i;
  };
}
function ws(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const In = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Rs = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, $s = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function yr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Rs(
    e,
    (c, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, h = $s(c, u);
        Object.assign(o, {
          [m]: h
        }), In(i, c, `var(${m})`, f), In(a, c, `var(${m}, ${h})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Ps(e, t = {}) {
  const {
    getSelector: r = R,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: c,
    defaultColorScheme: u = "light",
    ...f
  } = e, {
    vars: m,
    css: h,
    varsWithDefaults: b
  } = yr(f, t);
  let C = b;
  const g = {}, {
    [u]: l,
    ...v
  } = a;
  if (Object.entries(v || {}).forEach(([T, d]) => {
    const {
      vars: x,
      css: A,
      varsWithDefaults: H
    } = yr(d, t);
    C = Ce(C, H), g[T] = {
      css: A,
      vars: x
    };
  }), l) {
    const {
      css: T,
      vars: d,
      varsWithDefaults: x
    } = yr(l, t);
    C = Ce(C, x), g[u] = {
      css: T,
      vars: d
    };
  }
  function R(T, d) {
    let x = o;
    if (o === "class" && (x = ".%s"), o === "data" && (x = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (x = `[${o}="%s"]`), T) {
      if (x === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${a[T]?.palette?.mode || T})`]: {
            ":root": d
          }
        };
      if (x)
        return e.defaultColorScheme === T ? `:root, ${x.replace("%s", String(T))}` : x.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: C,
    generateThemeVars: () => {
      let T = {
        ...m
      };
      return Object.entries(g).forEach(([, {
        vars: d
      }]) => {
        T = Ce(T, d);
      }), T;
    },
    generateStyleSheets: () => {
      const T = [], d = e.defaultColorScheme || "light";
      function x(z, Y) {
        Object.keys(Y).length && T.push(typeof z == "string" ? {
          [z]: {
            ...Y
          }
        } : z);
      }
      x(r(void 0, {
        ...h
      }), h);
      const {
        [d]: A,
        ...H
      } = g;
      if (A) {
        const {
          css: z
        } = A, Y = a[d]?.palette?.mode, L = !n && Y ? {
          colorScheme: Y,
          ...z
        } : {
          ...z
        };
        x(r(d, {
          ...L
        }), L);
      }
      return Object.entries(H).forEach(([z, {
        css: Y
      }]) => {
        const L = a[z]?.palette?.mode, s = !n && L ? {
          colorScheme: L,
          ...Y
        } : {
          ...Y
        };
        x(r(z, {
          ...s
        }), s);
      }), i && T.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), T;
    }
  };
}
function _s(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const ht = {
  black: "#000",
  white: "#fff"
}, Os = {
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
}, Ge = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, He = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ct = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ke = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Xe = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Je = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Eo() {
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
      paper: ht.white,
      default: ht.white
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
const To = Eo();
function Co() {
  return {
    text: {
      primary: ht.white,
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
      active: ht.white,
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
const xr = Co();
function Mn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ir(e.main, o) : t === "dark" && (e.dark = or(e.main, i)));
}
function Nn(e, t, r, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function ks(e = "light") {
  return e === "dark" ? {
    main: Ke[200],
    light: Ke[50],
    dark: Ke[400]
  } : {
    main: Ke[700],
    light: Ke[400],
    dark: Ke[800]
  };
}
function As(e = "light") {
  return e === "dark" ? {
    main: Ge[200],
    light: Ge[50],
    dark: Ge[400]
  } : {
    main: Ge[500],
    light: Ge[300],
    dark: Ge[700]
  };
}
function Is(e = "light") {
  return e === "dark" ? {
    main: He[500],
    light: He[300],
    dark: He[700]
  } : {
    main: He[700],
    light: He[400],
    dark: He[800]
  };
}
function Ms(e = "light") {
  return e === "dark" ? {
    main: Xe[400],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: Xe[700],
    light: Xe[500],
    dark: Xe[900]
  };
}
function Ns(e = "light") {
  return e === "dark" ? {
    main: Je[400],
    light: Je[300],
    dark: Je[700]
  } : {
    main: Je[800],
    light: Je[500],
    dark: Je[900]
  };
}
function Ds(e = "light") {
  return e === "dark" ? {
    main: ct[400],
    light: ct[300],
    dark: ct[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ct[500],
    dark: ct[900]
  };
}
function Bs(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Vr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || ks(t), c = e.secondary || As(t), u = e.error || Is(t), f = e.info || Ms(t), m = e.success || Ns(t), h = e.warning || Ds(t);
  function b(v) {
    if (o)
      return Bs(v);
    const R = _n(v, xr.text.primary) >= r ? xr.text.primary : To.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = _n(v, R);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${R} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return R;
  }
  const C = ({
    color: v,
    name: R,
    mainShade: P = 500,
    lightShade: O = 300,
    darkShade: T = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[P] && (v.main = v[P]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : je(11, R ? ` (${R})` : "", P));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : je(12, R ? ` (${R})` : "", JSON.stringify(v.main)));
    return o ? (Nn(o, v, "light", O, n), Nn(o, v, "dark", T, n)) : (Mn(v, "light", O, n), Mn(v, "dark", T, n)), v.contrastText || (v.contrastText = b(v.main)), v;
  };
  let g;
  return t === "light" ? g = Eo() : t === "dark" && (g = Co()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ce({
    // A collection of common colors.
    common: {
      ...ht
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: C({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: C({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: C({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: C({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: C({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: C({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: Os,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: b,
    // Generate a rich color object.
    augmentColor: C,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...g
  }, i);
}
function js(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Fs(e, t) {
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
function Ls(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Dn = {
  textTransform: "uppercase"
}, Bn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vs(e, t) {
  const {
    fontFamily: r = Bn,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, C = m || ((v) => `${v / u * b}rem`), g = (v, R, P, O, T) => ({
    fontFamily: r,
    fontWeight: v,
    fontSize: C(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Bn ? {
      letterSpacing: `${Ls(O / R)}em`
    } : {},
    ...T,
    ...f
  }), l = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, Dn),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, Dn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ce({
    htmlFontSize: u,
    pxToRem: C,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...l
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const zs = 0.2, Ws = 0.14, Ys = 0.12;
function se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${zs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Ws})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ys})`].join(",");
}
const Us = ["none", se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qs = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gs = {
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
function jn(e) {
  return `${Math.round(e)}ms`;
}
function Hs(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ks(e) {
  const t = {
    ...qs,
    ...e.easing
  }, r = {
    ...Gs,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Hs,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (b) => typeof b == "string", h = (b) => !Number.isNaN(parseFloat(b));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !m(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : jn(a)} ${c} ${typeof u == "string" ? u : jn(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Xs = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Js(e) {
  return De(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function xo(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Js(c) || a.startsWith("unstable_") ? delete n[a] : De(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Fn(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Qs = (e) => {
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
function Zs(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : So(t, Qs(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Fn(r)})` : ir(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Fn(r)})` : or(t, r);
    }
  });
}
function wr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : je(20));
  const h = Vr({
    ...i,
    colorSpace: f
  }), b = mo(e);
  let C = Ce(b, {
    mixins: Fs(b.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Us.slice(),
    typography: Vs(h, c),
    transitions: Ks(a),
    zIndex: {
      ...Xs
    }
  });
  if (C = Ce(C, m), C = t.reduce((g, l) => Ce(g, l), C), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], l = (v, R) => {
      let P;
      for (P in v) {
        const O = v[P];
        if (g.includes(P) && Object.keys(O).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = St("", P);
            console.error([`MUI: The \`${R}\` component increases the CSS specificity of the \`${P}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: O
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[P] = {};
        }
      }
    };
    Object.keys(C.components).forEach((v) => {
      const R = C.components[v].styleOverrides;
      R && v.startsWith("Mui") && l(R, v);
    });
  }
  return C.unstable_sxConfig = {
    ...Jt,
    ...m?.unstable_sxConfig
  }, C.unstable_sx = function(l) {
    return tt({
      sx: l,
      theme: this
    });
  }, C.toRuntimeSource = xo, Zs(C), C;
}
function ec(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const tc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ec(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function wo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ro(e) {
  return e === "dark" ? tc : [];
}
function rc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = Vr({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...wo(a.mode),
      ...r
    },
    overlays: n || Ro(a.mode),
    ...i
  };
}
function nc(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const oc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ic = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return oc(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
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
function ac(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function S(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ut(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : vo(e);
}
function Me(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = lt(ut(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function sc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Oe = (e) => {
  try {
    return e();
  } catch {
  }
}, cc = (e = "mui") => ws(e);
function br(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = rc({
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
    palette: a,
    ...c
  } = wr({
    ...n,
    palette: {
      mode: i,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...wo(i),
      ...r?.opacity
    },
    overlays: r?.overlays || Ro(i)
  }, c;
}
function lc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: c = nc,
    colorSchemeSelector: u = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...m
  } = e, h = Object.keys(r)[0], b = n || (r.light && h !== "light" ? "light" : h), C = cc(i), {
    [b]: g,
    light: l,
    dark: v,
    ...R
  } = r, P = {
    ...R
  };
  let O = g;
  if ((b === "dark" && !("dark" in r) || b === "light" && !("light" in r)) && (O = !0), !O)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${b}\` option is either missing or invalid.` : je(21, b));
  let T;
  a && (T = "oklch");
  const d = br(T, P, O, m, b);
  l && !P.light && br(T, P, l, void 0, "light"), v && !P.dark && br(T, P, v, void 0, "dark");
  let x = {
    defaultColorScheme: b,
    ...d,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    rootSelector: f,
    getCssVar: C,
    colorSchemes: P,
    font: {
      ...js(d.typography),
      ...d.font
    },
    spacing: sc(m.spacing)
  };
  Object.keys(x.colorSchemes).forEach((L) => {
    const s = x.colorSchemes[L].palette, _ = (B) => {
      const j = B.split("-"), K = j[1], ce = j[2];
      return C(B, s[K][ce]);
    };
    s.mode === "light" && (S(s.common, "background", "#fff"), S(s.common, "onBackground", "#000")), s.mode === "dark" && (S(s.common, "background", "#000"), S(s.common, "onBackground", "#fff"));
    function $(B, j, K) {
      if (T) {
        let ce;
        return B === ze && (ce = `transparent ${((1 - K) * 100).toFixed(0)}%`), B === re && (ce = `#000 ${(K * 100).toFixed(0)}%`), B === ne && (ce = `#fff ${(K * 100).toFixed(0)}%`), `color-mix(in ${T}, ${j}, ${ce})`;
      }
      return B(j, K);
    }
    if (ac(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      S(s.Alert, "errorColor", $(re, s.error.light, 0.6)), S(s.Alert, "infoColor", $(re, s.info.light, 0.6)), S(s.Alert, "successColor", $(re, s.success.light, 0.6)), S(s.Alert, "warningColor", $(re, s.warning.light, 0.6)), S(s.Alert, "errorFilledBg", _("palette-error-main")), S(s.Alert, "infoFilledBg", _("palette-info-main")), S(s.Alert, "successFilledBg", _("palette-success-main")), S(s.Alert, "warningFilledBg", _("palette-warning-main")), S(s.Alert, "errorFilledColor", Oe(() => s.getContrastText(s.error.main))), S(s.Alert, "infoFilledColor", Oe(() => s.getContrastText(s.info.main))), S(s.Alert, "successFilledColor", Oe(() => s.getContrastText(s.success.main))), S(s.Alert, "warningFilledColor", Oe(() => s.getContrastText(s.warning.main))), S(s.Alert, "errorStandardBg", $(ne, s.error.light, 0.9)), S(s.Alert, "infoStandardBg", $(ne, s.info.light, 0.9)), S(s.Alert, "successStandardBg", $(ne, s.success.light, 0.9)), S(s.Alert, "warningStandardBg", $(ne, s.warning.light, 0.9)), S(s.Alert, "errorIconColor", _("palette-error-main")), S(s.Alert, "infoIconColor", _("palette-info-main")), S(s.Alert, "successIconColor", _("palette-success-main")), S(s.Alert, "warningIconColor", _("palette-warning-main")), S(s.AppBar, "defaultBg", _("palette-grey-100")), S(s.Avatar, "defaultBg", _("palette-grey-400")), S(s.Button, "inheritContainedBg", _("palette-grey-300")), S(s.Button, "inheritContainedHoverBg", _("palette-grey-A100")), S(s.Chip, "defaultBorder", _("palette-grey-400")), S(s.Chip, "defaultAvatarColor", _("palette-grey-700")), S(s.Chip, "defaultIconColor", _("palette-grey-700")), S(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(s.LinearProgress, "primaryBg", $(ne, s.primary.main, 0.62)), S(s.LinearProgress, "secondaryBg", $(ne, s.secondary.main, 0.62)), S(s.LinearProgress, "errorBg", $(ne, s.error.main, 0.62)), S(s.LinearProgress, "infoBg", $(ne, s.info.main, 0.62)), S(s.LinearProgress, "successBg", $(ne, s.success.main, 0.62)), S(s.LinearProgress, "warningBg", $(ne, s.warning.main, 0.62)), S(s.Skeleton, "bg", T ? $(ze, s.text.primary, 0.11) : `rgba(${_("palette-text-primaryChannel")} / 0.11)`), S(s.Slider, "primaryTrack", $(ne, s.primary.main, 0.62)), S(s.Slider, "secondaryTrack", $(ne, s.secondary.main, 0.62)), S(s.Slider, "errorTrack", $(ne, s.error.main, 0.62)), S(s.Slider, "infoTrack", $(ne, s.info.main, 0.62)), S(s.Slider, "successTrack", $(ne, s.success.main, 0.62)), S(s.Slider, "warningTrack", $(ne, s.warning.main, 0.62));
      const B = T ? $(re, s.background.default, 0.6825) : Pt(s.background.default, 0.8);
      S(s.SnackbarContent, "bg", B), S(s.SnackbarContent, "color", Oe(() => T ? xr.text.primary : s.getContrastText(B))), S(s.SpeedDialAction, "fabHoverBg", Pt(s.background.paper, 0.15)), S(s.StepConnector, "border", _("palette-grey-400")), S(s.StepContent, "border", _("palette-grey-400")), S(s.Switch, "defaultColor", _("palette-common-white")), S(s.Switch, "defaultDisabledColor", _("palette-grey-100")), S(s.Switch, "primaryDisabledColor", $(ne, s.primary.main, 0.62)), S(s.Switch, "secondaryDisabledColor", $(ne, s.secondary.main, 0.62)), S(s.Switch, "errorDisabledColor", $(ne, s.error.main, 0.62)), S(s.Switch, "infoDisabledColor", $(ne, s.info.main, 0.62)), S(s.Switch, "successDisabledColor", $(ne, s.success.main, 0.62)), S(s.Switch, "warningDisabledColor", $(ne, s.warning.main, 0.62)), S(s.TableCell, "border", $(ne, $(ze, s.divider, 1), 0.88)), S(s.Tooltip, "bg", $(ze, s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      S(s.Alert, "errorColor", $(ne, s.error.light, 0.6)), S(s.Alert, "infoColor", $(ne, s.info.light, 0.6)), S(s.Alert, "successColor", $(ne, s.success.light, 0.6)), S(s.Alert, "warningColor", $(ne, s.warning.light, 0.6)), S(s.Alert, "errorFilledBg", _("palette-error-dark")), S(s.Alert, "infoFilledBg", _("palette-info-dark")), S(s.Alert, "successFilledBg", _("palette-success-dark")), S(s.Alert, "warningFilledBg", _("palette-warning-dark")), S(s.Alert, "errorFilledColor", Oe(() => s.getContrastText(s.error.dark))), S(s.Alert, "infoFilledColor", Oe(() => s.getContrastText(s.info.dark))), S(s.Alert, "successFilledColor", Oe(() => s.getContrastText(s.success.dark))), S(s.Alert, "warningFilledColor", Oe(() => s.getContrastText(s.warning.dark))), S(s.Alert, "errorStandardBg", $(re, s.error.light, 0.9)), S(s.Alert, "infoStandardBg", $(re, s.info.light, 0.9)), S(s.Alert, "successStandardBg", $(re, s.success.light, 0.9)), S(s.Alert, "warningStandardBg", $(re, s.warning.light, 0.9)), S(s.Alert, "errorIconColor", _("palette-error-main")), S(s.Alert, "infoIconColor", _("palette-info-main")), S(s.Alert, "successIconColor", _("palette-success-main")), S(s.Alert, "warningIconColor", _("palette-warning-main")), S(s.AppBar, "defaultBg", _("palette-grey-900")), S(s.AppBar, "darkBg", _("palette-background-paper")), S(s.AppBar, "darkColor", _("palette-text-primary")), S(s.Avatar, "defaultBg", _("palette-grey-600")), S(s.Button, "inheritContainedBg", _("palette-grey-800")), S(s.Button, "inheritContainedHoverBg", _("palette-grey-700")), S(s.Chip, "defaultBorder", _("palette-grey-700")), S(s.Chip, "defaultAvatarColor", _("palette-grey-300")), S(s.Chip, "defaultIconColor", _("palette-grey-300")), S(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(s.LinearProgress, "primaryBg", $(re, s.primary.main, 0.5)), S(s.LinearProgress, "secondaryBg", $(re, s.secondary.main, 0.5)), S(s.LinearProgress, "errorBg", $(re, s.error.main, 0.5)), S(s.LinearProgress, "infoBg", $(re, s.info.main, 0.5)), S(s.LinearProgress, "successBg", $(re, s.success.main, 0.5)), S(s.LinearProgress, "warningBg", $(re, s.warning.main, 0.5)), S(s.Skeleton, "bg", T ? $(ze, s.text.primary, 0.13) : `rgba(${_("palette-text-primaryChannel")} / 0.13)`), S(s.Slider, "primaryTrack", $(re, s.primary.main, 0.5)), S(s.Slider, "secondaryTrack", $(re, s.secondary.main, 0.5)), S(s.Slider, "errorTrack", $(re, s.error.main, 0.5)), S(s.Slider, "infoTrack", $(re, s.info.main, 0.5)), S(s.Slider, "successTrack", $(re, s.success.main, 0.5)), S(s.Slider, "warningTrack", $(re, s.warning.main, 0.5));
      const B = T ? $(ne, s.background.default, 0.985) : Pt(s.background.default, 0.98);
      S(s.SnackbarContent, "bg", B), S(s.SnackbarContent, "color", Oe(() => T ? To.text.primary : s.getContrastText(B))), S(s.SpeedDialAction, "fabHoverBg", Pt(s.background.paper, 0.15)), S(s.StepConnector, "border", _("palette-grey-600")), S(s.StepContent, "border", _("palette-grey-600")), S(s.Switch, "defaultColor", _("palette-grey-300")), S(s.Switch, "defaultDisabledColor", _("palette-grey-600")), S(s.Switch, "primaryDisabledColor", $(re, s.primary.main, 0.55)), S(s.Switch, "secondaryDisabledColor", $(re, s.secondary.main, 0.55)), S(s.Switch, "errorDisabledColor", $(re, s.error.main, 0.55)), S(s.Switch, "infoDisabledColor", $(re, s.info.main, 0.55)), S(s.Switch, "successDisabledColor", $(re, s.success.main, 0.55)), S(s.Switch, "warningDisabledColor", $(re, s.warning.main, 0.55)), S(s.TableCell, "border", $(re, $(ze, s.divider, 1), 0.68)), S(s.Tooltip, "bg", $(ze, s.grey[700], 0.92));
    }
    Me(s.background, "default"), Me(s.background, "paper"), Me(s.common, "background"), Me(s.common, "onBackground"), Me(s, "divider"), Object.keys(s).forEach((B) => {
      const j = s[B];
      B !== "tonalOffset" && j && typeof j == "object" && (j.main && S(s[B], "mainChannel", lt(ut(j.main))), j.light && S(s[B], "lightChannel", lt(ut(j.light))), j.dark && S(s[B], "darkChannel", lt(ut(j.dark))), j.contrastText && S(s[B], "contrastTextChannel", lt(ut(j.contrastText))), B === "text" && (Me(s[B], "primary"), Me(s[B], "secondary")), B === "action" && (j.active && Me(s[B], "active"), j.selected && Me(s[B], "selected")));
    });
  }), x = t.reduce((L, s) => Ce(L, s), x);
  const A = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: ic(x),
    enableContrastVars: a
  }, {
    vars: H,
    generateThemeVars: z,
    generateStyleSheets: Y
  } = Ps(x, A);
  return x.vars = H, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([L, s]) => {
    x[L] = s;
  }), x.generateThemeVars = z, x.generateStyleSheets = Y, x.generateSpacing = function() {
    return po(m.spacing, Ar(this));
  }, x.getColorSchemeSelector = _s(u), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = c, x.unstable_sxConfig = {
    ...Jt,
    ...m?.unstable_sxConfig
  }, x.unstable_sx = function(s) {
    return tt({
      sx: s,
      theme: this
    });
  }, x.toRuntimeSource = xo, x;
}
function Ln(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Vr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function uc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r?.mode,
    ...a
  } = e, c = i || "light", u = o?.[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return wr(e, ...t);
    let m = r;
    "palette" in e || f[c] && (f[c] !== !0 ? m = f[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const h = wr({
      ...e,
      palette: m
    }, ...t);
    return h.defaultColorScheme = c, h.colorSchemes = f, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: h.palette
    }, Ln(h, "dark", f.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: h.palette
    }, Ln(h, "light", f.light)), h;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), lc({
    ...a,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const fc = uc(), dc = "$$material";
function pc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $o = (e) => pc(e) && e !== "classes", Pe = cs({
  themeId: dc,
  defaultTheme: fc,
  rootShouldForwardProp: $o
}), ar = xs;
process.env.NODE_ENV !== "production" && (y.node, y.object.isRequired);
function sr(e) {
  return Ss(e);
}
function Nt(e) {
  const t = D.useRef(e);
  return ps(() => {
    t.current = e;
  }), D.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Vn(...e) {
  const t = D.useRef(void 0), r = D.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, c = a(n);
        return typeof c == "function" ? c : () => {
          a(null);
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
  return D.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const mc = y.oneOfType([y.func, y.object]);
function Po(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function hc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function gc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !hc(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const yc = Po(y.elementType, gc);
function zn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Wn = {};
function _o(e, t) {
  const r = D.useRef(Wn);
  return r.current === Wn && (r.current = e(t)), r;
}
class Vt {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Vt();
  }
  static use() {
    const t = _o(Vt.create).current, [r, n] = D.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, D.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = vc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function bc() {
  return Vt.use();
}
function vc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Sc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Rr(e, t) {
  return Rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Rr(e, t);
}
function Ec(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Rr(e, t);
}
const Yn = Qe.createContext(null);
function Tc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zr(e, t) {
  var r = function(i) {
    return t && _t(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Yo.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Cc(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var f = n[u][a];
        c[n[u][a]] = r(f);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function Ue(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function xc(e, t) {
  return zr(e.children, function(r) {
    return Ot(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ue(r, "appear", e),
      enter: Ue(r, "enter", e),
      exit: Ue(r, "exit", e)
    });
  });
}
function wc(e, t, r) {
  var n = zr(e.children), o = Cc(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (_t(a)) {
      var c = i in t, u = i in n, f = t[i], m = _t(f) && !f.props.in;
      u && (!c || m) ? o[i] = Ot(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Ue(a, "exit", e),
        enter: Ue(a, "enter", e)
      }) : !u && c && !m ? o[i] = Ot(a, {
        in: !1
      }) : u && c && _t(f) && (o[i] = Ot(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: Ue(a, "exit", e),
        enter: Ue(a, "enter", e)
      }));
    }
  }), o;
}
var Rc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, $c = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Wr = /* @__PURE__ */ (function(e) {
  Ec(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Tc(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
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
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? xc(o, c) : wc(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = zr(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = Ft({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Sc(o, ["component", "childFactory"]), u = this.state.contextValue, f = Rc(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Qe.createElement(Yn.Provider, {
      value: u
    }, f) : /* @__PURE__ */ Qe.createElement(Yn.Provider, {
      value: u
    }, /* @__PURE__ */ Qe.createElement(i, c, f));
  }, t;
})(Qe.Component);
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: y.any,
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
  children: y.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: y.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: y.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: y.bool,
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
  childFactory: y.func
} : {};
Wr.defaultProps = $c;
const Pc = [];
function _c(e) {
  D.useEffect(e, Pc);
}
class Yr {
  static create() {
    return new Yr();
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
function Oc() {
  const e = _o(Yr.create).current;
  return _c(e.disposeEffect), e;
}
function Oo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: f
  } = e, [m, h] = D.useState(!1), b = ve(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = ve(r.child, m && r.childLeaving, n && r.childPulsate);
  return !c && !m && h(!0), D.useEffect(() => {
    if (!c && u != null) {
      const l = setTimeout(u, f);
      return () => {
        clearTimeout(l);
      };
    }
  }, [u, c, f]), /* @__PURE__ */ de.jsx("span", {
    className: b,
    style: C,
    children: /* @__PURE__ */ de.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Oo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object.isRequired,
  className: y.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: y.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: y.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: y.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: y.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: y.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: y.number,
  /**
   * exit delay
   */
  timeout: y.number.isRequired
});
const we = rr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), $r = 550, kc = 80, Ac = vt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ic = vt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Mc = vt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Nc = Pe("span", {
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
}), Dc = Pe(Oo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${we.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ac};
    animation-duration: ${$r}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${we.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${we.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${we.childLeaving} {
    opacity: 0;
    animation-name: ${Ic};
    animation-duration: ${$r}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${we.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Mc};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ko = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = sr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, f] = D.useState([]), m = D.useRef(0), h = D.useRef(null);
  D.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const b = D.useRef(!1), C = Oc(), g = D.useRef(null), l = D.useRef(null), v = D.useCallback((T) => {
    const {
      pulsate: d,
      rippleX: x,
      rippleY: A,
      rippleSize: H,
      cb: z
    } = T;
    f((Y) => [...Y, /* @__PURE__ */ de.jsx(Dc, {
      classes: {
        ripple: ve(i.ripple, we.ripple),
        rippleVisible: ve(i.rippleVisible, we.rippleVisible),
        ripplePulsate: ve(i.ripplePulsate, we.ripplePulsate),
        child: ve(i.child, we.child),
        childLeaving: ve(i.childLeaving, we.childLeaving),
        childPulsate: ve(i.childPulsate, we.childPulsate)
      },
      timeout: $r,
      pulsate: d,
      rippleX: x,
      rippleY: A,
      rippleSize: H
    }, m.current)]), m.current += 1, h.current = z;
  }, [i]), R = D.useCallback((T = {}, d = {}, x = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: H = o || d.pulsate,
      fakeElement: z = !1
      // For test purposes
    } = d;
    if (T?.type === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    T?.type === "touchstart" && (b.current = !0);
    const Y = z ? null : l.current, L = Y ? Y.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let s, _, $;
    if (H || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      s = Math.round(L.width / 2), _ = Math.round(L.height / 2);
    else {
      const {
        clientX: B,
        clientY: j
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      s = Math.round(B - L.left), _ = Math.round(j - L.top);
    }
    if (H)
      $ = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3), $ % 2 === 0 && ($ += 1);
    else {
      const B = Math.max(Math.abs((Y ? Y.clientWidth : 0) - s), s) * 2 + 2, j = Math.max(Math.abs((Y ? Y.clientHeight : 0) - _), _) * 2 + 2;
      $ = Math.sqrt(B ** 2 + j ** 2);
    }
    T?.touches ? g.current === null && (g.current = () => {
      v({
        pulsate: A,
        rippleX: s,
        rippleY: _,
        rippleSize: $,
        cb: x
      });
    }, C.start(kc, () => {
      g.current && (g.current(), g.current = null);
    })) : v({
      pulsate: A,
      rippleX: s,
      rippleY: _,
      rippleSize: $,
      cb: x
    });
  }, [o, v, C]), P = D.useCallback(() => {
    R({}, {
      pulsate: !0
    });
  }, [R]), O = D.useCallback((T, d) => {
    if (C.clear(), T?.type === "touchend" && g.current) {
      g.current(), g.current = null, C.start(0, () => {
        O(T, d);
      });
      return;
    }
    g.current = null, f((x) => x.length > 0 ? x.slice(1) : x), h.current = d;
  }, [C]);
  return D.useImperativeHandle(r, () => ({
    pulsate: P,
    start: R,
    stop: O
  }), [P, R, O]), /* @__PURE__ */ de.jsx(Nc, {
    className: ve(we.root, i.root, a),
    ref: l,
    ...c,
    children: /* @__PURE__ */ de.jsx(Wr, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (ko.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: y.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string
});
function Bc(e) {
  return St("MuiButtonBase", e);
}
const jc = rr("MuiButtonBase", ["root", "disabled", "focusVisible"]), Fc = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = kr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Bc, o);
  return r && n && (a.root += ` ${n}`), a;
}, Lc = Pe("button", {
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
  [`&.${jc.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ao = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = sr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: f = !1,
    disableRipple: m = !1,
    disableTouchRipple: h = !1,
    focusRipple: b = !1,
    focusVisibleClassName: C,
    LinkComponent: g = "a",
    onBlur: l,
    onClick: v,
    onContextMenu: R,
    onDragLeave: P,
    onFocus: O,
    onFocusVisible: T,
    onKeyDown: d,
    onKeyUp: x,
    onMouseDown: A,
    onMouseLeave: H,
    onMouseUp: z,
    onTouchEnd: Y,
    onTouchMove: L,
    onTouchStart: s,
    tabIndex: _ = 0,
    TouchRippleProps: $,
    touchRippleRef: B,
    type: j,
    ...K
  } = n, ce = D.useRef(null), ae = bc(), w = Vn(ae.ref, B), [p, k] = D.useState(!1);
  f && p && k(!1), D.useImperativeHandle(o, () => ({
    focusVisible: () => {
      k(!0), ce.current.focus();
    }
  }), []);
  const M = ae.shouldMount && !m && !f;
  D.useEffect(() => {
    p && b && !m && ae.pulsate();
  }, [m, b, p, ae]);
  const I = Ne(ae, "start", A, h), W = Ne(ae, "stop", R, h), F = Ne(ae, "stop", P, h), N = Ne(ae, "stop", z, h), V = Ne(ae, "stop", (U) => {
    p && U.preventDefault(), H && H(U);
  }, h), G = Ne(ae, "start", s, h), q = Ne(ae, "stop", Y, h), he = Ne(ae, "stop", L, h), E = Ne(ae, "stop", (U) => {
    zn(U.target) || k(!1), l && l(U);
  }, !1), ye = Nt((U) => {
    ce.current || (ce.current = U.currentTarget), zn(U.target) && (k(!0), T && T(U)), O && O(U);
  }), Ee = () => {
    const U = ce.current;
    return u && u !== "button" && !(U.tagName === "A" && U.href);
  }, Ve = Nt((U) => {
    b && !U.repeat && p && U.key === " " && ae.stop(U, () => {
      ae.start(U);
    }), U.target === U.currentTarget && Ee() && U.key === " " && U.preventDefault(), d && d(U), U.target === U.currentTarget && Ee() && U.key === "Enter" && !f && (U.preventDefault(), v && v(U));
  }), Fo = Nt((U) => {
    b && U.key === " " && p && !U.defaultPrevented && ae.stop(U, () => {
      ae.pulsate(U);
    }), x && x(U), v && U.target === U.currentTarget && Ee() && U.key === " " && !U.defaultPrevented && v(U);
  });
  let Et = u;
  Et === "button" && (K.href || K.to) && (Et = g);
  const ot = {};
  Et === "button" ? (ot.type = j === void 0 ? "button" : j, ot.disabled = f) : (!K.href && !K.to && (ot.role = "button"), f && (ot["aria-disabled"] = f));
  const Lo = Vn(r, ce), Ur = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: m,
    disableTouchRipple: h,
    focusRipple: b,
    tabIndex: _,
    focusVisible: p
  }, Vo = Fc(Ur);
  return /* @__PURE__ */ de.jsxs(Lc, {
    as: Et,
    className: ve(Vo.root, c),
    ownerState: Ur,
    onBlur: E,
    onClick: v,
    onContextMenu: W,
    onFocus: ye,
    onKeyDown: Ve,
    onKeyUp: Fo,
    onMouseDown: I,
    onMouseLeave: V,
    onMouseUp: N,
    onDragLeave: F,
    onTouchEnd: q,
    onTouchMove: he,
    onTouchStart: G,
    ref: Lo,
    tabIndex: f ? -1 : _,
    type: j,
    ...ot,
    ...K,
    children: [a, M ? /* @__PURE__ */ de.jsx(ko, {
      ref: w,
      center: i,
      ...$
    }) : null]
  });
});
function Ne(e, t, r, n = !1) {
  return Nt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: mc,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: y.bool,
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: yc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: y.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: y.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: y.string,
  /**
   * @ignore
   */
  href: y.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: y.elementType,
  /**
   * @ignore
   */
  onBlur: y.func,
  /**
   * @ignore
   */
  onClick: y.func,
  /**
   * @ignore
   */
  onContextMenu: y.func,
  /**
   * @ignore
   */
  onDragLeave: y.func,
  /**
   * @ignore
   */
  onFocus: y.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: y.func,
  /**
   * @ignore
   */
  onKeyDown: y.func,
  /**
   * @ignore
   */
  onKeyUp: y.func,
  /**
   * @ignore
   */
  onMouseDown: y.func,
  /**
   * @ignore
   */
  onMouseLeave: y.func,
  /**
   * @ignore
   */
  onMouseUp: y.func,
  /**
   * @ignore
   */
  onTouchEnd: y.func,
  /**
   * @ignore
   */
  onTouchMove: y.func,
  /**
   * @ignore
   */
  onTouchStart: y.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @default 0
   */
  tabIndex: y.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: y.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: y.oneOfType([y.func, y.shape({
    current: y.shape({
      pulsate: y.func.isRequired,
      start: y.func.isRequired,
      stop: y.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string])
});
function Vc(e) {
  return typeof e.main == "string";
}
function zc(e, t = []) {
  if (!Vc(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Io(e = []) {
  return ([, t]) => t && zc(t, e);
}
function Wc(e) {
  return St("MuiCircularProgress", e);
}
rr("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const _e = 44, Pr = vt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, _r = vt`
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
`, Yc = typeof Pr != "string" ? Fr`
        animation: ${Pr} 1.4s linear infinite;
      ` : null, Uc = typeof _r != "string" ? Fr`
        animation: ${_r} 1.4s ease-in-out infinite;
      ` : null, qc = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${me(n)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${me(r)}`, o && "circleDisableShrink"]
  };
  return kr(i, Wc, t);
}, Gc = Pe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${me(r.color)}`]];
  }
})(ar(({
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
    style: Yc || {
      animation: `${Pr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Io()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Hc = Pe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Kc = Pe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${me(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(ar(({
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
    style: Uc || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${_r} 1.4s ease-in-out infinite`
    }
  }]
}))), Xc = Pe("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ar(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Mo = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = sr({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    enableTrackSlot: c = !1,
    size: u = 40,
    style: f,
    thickness: m = 3.6,
    value: h = 0,
    variant: b = "indeterminate",
    ...C
  } = n, g = {
    ...n,
    color: i,
    disableShrink: a,
    size: u,
    thickness: m,
    value: h,
    variant: b,
    enableTrackSlot: c
  }, l = qc(g), v = {}, R = {}, P = {};
  if (b === "determinate") {
    const O = 2 * Math.PI * ((_e - m) / 2);
    v.strokeDasharray = O.toFixed(3), P["aria-valuenow"] = Math.round(h), v.strokeDashoffset = `${((100 - h) / 100 * O).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ de.jsx(Gc, {
    className: ve(l.root, o),
    style: {
      width: u,
      height: u,
      ...R,
      ...f
    },
    ownerState: g,
    ref: r,
    role: "progressbar",
    ...P,
    ...C,
    children: /* @__PURE__ */ de.jsxs(Hc, {
      className: l.svg,
      ownerState: g,
      viewBox: `${_e / 2} ${_e / 2} ${_e} ${_e}`,
      children: [c ? /* @__PURE__ */ de.jsx(Xc, {
        className: l.track,
        ownerState: g,
        cx: _e,
        cy: _e,
        r: (_e - m) / 2,
        fill: "none",
        strokeWidth: m,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ de.jsx(Kc, {
        className: l.circle,
        style: v,
        ownerState: g,
        cx: _e,
        cy: _e,
        r: (_e - m) / 2,
        fill: "none",
        strokeWidth: m
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: y.oneOfType([y.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), y.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Po(y.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: y.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: y.oneOfType([y.number, y.string]),
  /**
   * @ignore
   */
  style: y.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: y.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: y.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: y.oneOf(["determinate", "indeterminate"])
});
function Jc(e) {
  return St("MuiButton", e);
}
const We = rr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), No = /* @__PURE__ */ D.createContext({});
process.env.NODE_ENV !== "production" && (No.displayName = "ButtonGroupContext");
const Do = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (Do.displayName = "ButtonGroupButtonContext");
const Qc = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: c,
    classes: u
  } = e, f = {
    root: ["root", a && "loading", i, `${i}${me(t)}`, `size${me(o)}`, `${i}Size${me(o)}`, `color${me(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${me(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${me(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${me(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, m = kr(f, Jc, u);
  return {
    ...u,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...m
  };
}, Bo = [{
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
}], Zc = Pe(Ao, {
  shouldForwardProp: (e) => $o(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${me(r.color)}`], t[`size${me(r.size)}`], t[`${r.variant}Size${me(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(ar(({
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
    [`&.${We.disabled}`]: {
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
        [`&.${We.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${We.disabled}`]: {
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
        [`&.${We.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Io()).map(([n]) => ({
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
        [`&.${We.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${We.disabled}`]: {
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
        [`&.${We.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), el = Pe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${me(r.size)}`]];
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
  }, ...Bo]
})), tl = Pe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${me(r.size)}`]];
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
  }, ...Bo]
})), rl = Pe("span", {
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
})), Un = Pe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), jo = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = D.useContext(No), o = D.useContext(Do), i = Dt(n, t), a = sr({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: f = "button",
    className: m,
    disabled: h = !1,
    disableElevation: b = !1,
    disableFocusRipple: C = !1,
    endIcon: g,
    focusVisibleClassName: l,
    fullWidth: v = !1,
    id: R,
    loading: P = null,
    loadingIndicator: O,
    loadingPosition: T = "center",
    size: d = "medium",
    startIcon: x,
    type: A,
    variant: H = "text",
    ...z
  } = a, Y = Cs(R), L = O ?? /* @__PURE__ */ de.jsx(Mo, {
    "aria-labelledby": Y,
    color: "inherit",
    size: 16
  }), s = {
    ...a,
    color: u,
    component: f,
    disabled: h,
    disableElevation: b,
    disableFocusRipple: C,
    fullWidth: v,
    loading: P,
    loadingIndicator: L,
    loadingPosition: T,
    size: d,
    type: A,
    variant: H
  }, _ = Qc(s), $ = (x || P && T === "start") && /* @__PURE__ */ de.jsx(el, {
    className: _.startIcon,
    ownerState: s,
    children: x || /* @__PURE__ */ de.jsx(Un, {
      className: _.loadingIconPlaceholder,
      ownerState: s
    })
  }), B = (g || P && T === "end") && /* @__PURE__ */ de.jsx(tl, {
    className: _.endIcon,
    ownerState: s,
    children: g || /* @__PURE__ */ de.jsx(Un, {
      className: _.loadingIconPlaceholder,
      ownerState: s
    })
  }), j = o || "", K = typeof P == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ de.jsx("span", {
      className: _.loadingWrapper,
      style: {
        display: "contents"
      },
      children: P && /* @__PURE__ */ de.jsx(rl, {
        className: _.loadingIndicator,
        ownerState: s,
        children: L
      })
    })
  ) : null;
  return /* @__PURE__ */ de.jsxs(Zc, {
    ownerState: s,
    className: ve(n.className, _.root, m, j),
    component: f,
    disabled: h || P,
    focusRipple: !C,
    focusVisibleClassName: ve(_.focusVisible, l),
    ref: r,
    type: A,
    id: P ? Y : R,
    ...z,
    classes: _,
    children: [$, T !== "end" && K, c, T === "end" && K, B]
  });
});
process.env.NODE_ENV !== "production" && (jo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: y.oneOfType([y.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: y.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * Element placed after the children.
   */
  endIcon: y.node,
  /**
   * @ignore
   */
  focusVisibleClassName: y.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: y.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: y.string,
  /**
   * @ignore
   */
  id: y.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: y.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: y.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: y.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: y.oneOfType([y.oneOf(["small", "medium", "large"]), y.string]),
  /**
   * Element placed before the children.
   */
  startIcon: y.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: y.oneOfType([y.oneOf(["contained", "outlined", "text"]), y.string])
});
const ol = ({ children: e, variantName: t, ...r }) => {
  const n = t === "secondary" ? "outlined" : "contained";
  return /* @__PURE__ */ de.jsx(jo, { variant: n, ...r, children: e });
};
export {
  ol as Button
};
