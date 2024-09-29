"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
}); // DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.

(function (fn) {
  if (typeof define === 'function' && define.amd) {
    define([], fn);
  } else if (typeof module !== "undefined" && module !== null && module.exports) {
    module.exports = fn;
  } else {
    fn();
  }
})(function () {
  var assign = Object.assign || window.jQuery && jQuery.extend; // Number of pixels a pressed pointer travels before movestart
  // event is fired.

  var threshold = 8; // Shim for requestAnimationFrame, falling back to timer. See:
  // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  var requestFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (fn, element) {
      return window.setTimeout(function () {
        fn();
      }, 25);
    };
  }(); // Shim for customEvent
  // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill


  (function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  var ignoreTags = {
    textarea: true,
    input: true,
    select: true,
    button: true
  };
  var mouseevents = {
    move: 'mousemove',
    cancel: 'mouseup dragstart',
    end: 'mouseup'
  };
  var touchevents = {
    move: 'touchmove',
    cancel: 'touchend',
    end: 'touchend'
  };
  var rspaces = /\s+/; // DOM Events

  var eventOptions = {
    bubbles: true,
    cancelable: true
  };
  var eventsSymbol = typeof Symbol === "function" ? Symbol('events') : {};

  function createEvent(type) {
    return new CustomEvent(type, eventOptions);
  }

  function getEvents(node) {
    return node[eventsSymbol] || (node[eventsSymbol] = {});
  }

  function on(node, types, fn, data, selector) {
    types = types.split(rspaces);
    var events = getEvents(node);
    var i = types.length;
    var handlers, type;

    function handler(e) {
      fn(e, data);
    }

    while (i--) {
      type = types[i];
      handlers = events[type] || (events[type] = []);
      handlers.push([fn, handler]);
      node.addEventListener(type, handler);
    }
  }

  function off(node, types, fn, selector) {
    types = types.split(rspaces);
    var events = getEvents(node);
    var i = types.length;
    var type, handlers, k;

    if (!events) {
      return;
    }

    while (i--) {
      type = types[i];
      handlers = events[type];

      if (!handlers) {
        continue;
      }

      k = handlers.length;

      while (k--) {
        if (handlers[k][0] === fn) {
          node.removeEventListener(type, handlers[k][1]);
          handlers.splice(k, 1);
        }
      }
    }
  }

  function trigger(node, type, properties) {
    // Don't cache events. It prevents you from triggering an event of a
    // given type from inside the handler of another event of that type.
    var event = createEvent(type);

    if (properties) {
      assign(event, properties);
    }

    node.dispatchEvent(event);
  } // Constructors


  function Timer(fn) {
    var callback = fn,
        active = false,
        running = false;

    function trigger(time) {
      if (active) {
        callback();
        requestFrame(trigger);
        running = true;
        active = false;
      } else {
        running = false;
      }
    }

    this.kick = function (fn) {
      active = true;

      if (!running) {
        trigger();
      }
    };

    this.end = function (fn) {
      var cb = callback;

      if (!fn) {
        return;
      } // If the timer is not running, simply call the end callback.


      if (!running) {
        fn();
      } // If the timer is running, and has been kicked lately, then
      // queue up the current callback and the end callback, otherwise
      // just the end callback.
      else {
        callback = active ? function () {
          cb();
          fn();
        } : fn;
        active = true;
      }
    };
  } // Functions


  function noop() {}

  function preventDefault(e) {
    e.preventDefault();
  }

  function isIgnoreTag(e) {
    return !!ignoreTags[e.target.tagName.toLowerCase()];
  }

  function isPrimaryButton(e) {
    // Ignore mousedowns on any button other than the left (or primary)
    // mouse button, or when a modifier key is pressed.
    return e.which === 1 && !e.ctrlKey && !e.altKey;
  }

  function identifiedTouch(touchList, id) {
    var i, l;

    if (touchList.identifiedTouch) {
      return touchList.identifiedTouch(id);
    } // touchList.identifiedTouch() does not exist in
    // webkit yet… we must do the search ourselves...


    i = -1;
    l = touchList.length;

    while (++i < l) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
  }

  function changedTouch(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier); // This isn't the touch you're looking for.

    if (!touch) {
      return;
    } // Chrome Android (at least) includes touches that have not
    // changed in e.changedTouches. That's a bit annoying. Check
    // that this touch has changed.


    if (touch.pageX === data.pageX && touch.pageY === data.pageY) {
      return;
    }

    return touch;
  } // Handlers that decide when the first movestart is triggered


  function mousedown(e) {
    // Ignore non-primary buttons
    if (!isPrimaryButton(e)) {
      return;
    } // Ignore form and interactive elements


    if (isIgnoreTag(e)) {
      return;
    }

    on(document, mouseevents.move, mousemove, e);
    on(document, mouseevents.cancel, mouseend, e);
  }

  function mousemove(e, data) {
    checkThreshold(e, data, e, removeMouse);
  }

  function mouseend(e, data) {
    removeMouse();
  }

  function removeMouse() {
    off(document, mouseevents.move, mousemove);
    off(document, mouseevents.cancel, mouseend);
  }

  function touchstart(e) {
    // Don't get in the way of interaction with form elements
    if (ignoreTags[e.target.tagName.toLowerCase()]) {
      return;
    }

    var touch = e.changedTouches[0]; // iOS live updates the touch objects whereas Android gives us copies.
    // That means we can't trust the touchstart object to stay the same,
    // so we must copy the data. This object acts as a template for
    // movestart, move and moveend event objects.

    var data = {
      target: touch.target,
      pageX: touch.pageX,
      pageY: touch.pageY,
      identifier: touch.identifier,
      // The only way to make handlers individually unbindable is by
      // making them unique.
      touchmove: function touchmove(e, data) {
        _touchmove(e, data);
      },
      touchend: function touchend(e, data) {
        _touchend(e, data);
      }
    };
    on(document, touchevents.move, data.touchmove, data);
    on(document, touchevents.cancel, data.touchend, data);
  }

  function _touchmove(e, data) {
    var touch = changedTouch(e, data);

    if (!touch) {
      return;
    }

    checkThreshold(e, data, touch, removeTouch);
  }

  function _touchend(e, data) {
    var touch = identifiedTouch(e.changedTouches, data.identifier);

    if (!touch) {
      return;
    }

    removeTouch(data);
  }

  function removeTouch(data) {
    off(document, touchevents.move, data.touchmove);
    off(document, touchevents.cancel, data.touchend);
  }

  function checkThreshold(e, data, touch, fn) {
    var distX = touch.pageX - data.pageX;
    var distY = touch.pageY - data.pageY; // Do nothing if the threshold has not been crossed.

    if (distX * distX + distY * distY < threshold * threshold) {
      return;
    }

    triggerStart(e, data, touch, distX, distY, fn);
  }

  function triggerStart(e, data, touch, distX, distY, fn) {
    var touches = e.targetTouches;
    var time = e.timeStamp - data.timeStamp; // Create a movestart object with some special properties that
    // are passed only to the movestart handlers.

    var template = {
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      startX: data.pageX,
      startY: data.pageY,
      distX: distX,
      distY: distY,
      deltaX: distX,
      deltaY: distY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      velocityX: distX / time,
      velocityY: distY / time,
      identifier: data.identifier,
      targetTouches: touches,
      finger: touches ? touches.length : 1,
      enableMove: function enableMove() {
        this.moveEnabled = true;
        this.enableMove = noop;
        e.preventDefault();
      }
    }; // Trigger the movestart event.

    trigger(data.target, 'movestart', template); // Unbind handlers that tracked the touch or mouse up till now.

    fn(data);
  } // Handlers that control what happens following a movestart


  function activeMousemove(e, data) {
    var timer = data.timer;
    data.touch = e;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeMouseend(e, data) {
    var target = data.target;
    var event = data.event;
    var timer = data.timer;
    removeActiveMouse();
    endEvent(target, event, timer, function () {
      // Unbind the click suppressor, waiting until after mouseup
      // has been handled.
      setTimeout(function () {
        off(target, 'click', preventDefault);
      }, 0);
    });
  }

  function removeActiveMouse() {
    off(document, mouseevents.move, activeMousemove);
    off(document, mouseevents.end, activeMouseend);
  }

  function activeTouchmove(e, data) {
    var event = data.event;
    var timer = data.timer;
    var touch = changedTouch(e, event);

    if (!touch) {
      return;
    } // Stop the interface from gesturing


    e.preventDefault();
    event.targetTouches = e.targetTouches;
    data.touch = touch;
    data.timeStamp = e.timeStamp;
    timer.kick();
  }

  function activeTouchend(e, data) {
    var target = data.target;
    var event = data.event;
    var timer = data.timer;
    var touch = identifiedTouch(e.changedTouches, event.identifier); // This isn't the touch you're looking for.

    if (!touch) {
      return;
    }

    removeActiveTouch(data);
    endEvent(target, event, timer);
  }

  function removeActiveTouch(data) {
    off(document, touchevents.move, data.activeTouchmove);
    off(document, touchevents.end, data.activeTouchend);
  } // Logic for triggering move and moveend events


  function updateEvent(event, touch, timeStamp) {
    var time = timeStamp - event.timeStamp;
    event.distX = touch.pageX - event.startX;
    event.distY = touch.pageY - event.startY;
    event.deltaX = touch.pageX - event.pageX;
    event.deltaY = touch.pageY - event.pageY; // Average the velocity of the last few events using a decay
    // curve to even out spurious jumps in values.

    event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
    event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
    event.pageX = touch.pageX;
    event.pageY = touch.pageY;
  }

  function endEvent(target, event, timer, fn) {
    timer.end(function () {
      trigger(target, 'moveend', event);
      return fn && fn();
    });
  } // Set up the DOM


  function movestart(e) {
    if (e.defaultPrevented) {
      return;
    }

    if (!e.moveEnabled) {
      return;
    }

    var event = {
      startX: e.startX,
      startY: e.startY,
      pageX: e.pageX,
      pageY: e.pageY,
      distX: e.distX,
      distY: e.distY,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      velocityX: e.velocityX,
      velocityY: e.velocityY,
      identifier: e.identifier,
      targetTouches: e.targetTouches,
      finger: e.finger
    };
    var data = {
      target: e.target,
      event: event,
      timer: new Timer(update),
      touch: undefined,
      timeStamp: e.timeStamp
    };

    function update(time) {
      updateEvent(event, data.touch, data.timeStamp);
      trigger(data.target, 'move', event);
    }

    if (e.identifier === undefined) {
      // We're dealing with a mouse event.
      // Stop clicks from propagating during a move
      on(e.target, 'click', preventDefault);
      on(document, mouseevents.move, activeMousemove, data);
      on(document, mouseevents.end, activeMouseend, data);
    } else {
      // In order to unbind correct handlers they have to be unique
      data.activeTouchmove = function (e, data) {
        activeTouchmove(e, data);
      };

      data.activeTouchend = function (e, data) {
        activeTouchend(e, data);
      }; // We're dealing with a touch.


      on(document, touchevents.move, data.activeTouchmove, data);
      on(document, touchevents.end, data.activeTouchend, data);
    }
  }

  on(document, 'mousedown', mousedown);
  on(document, 'touchstart', touchstart);
  on(document, 'movestart', movestart); // jQuery special events
  //
  // jQuery event objects are copies of DOM event objects. They need
  // a little help copying the move properties across.

  if (!window.jQuery) {
    return;
  }

  var properties = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(' ');

  function enableMove1(e) {
    e.enableMove();
  }

  function enableMove2(e) {
    e.enableMove();
  }

  function enableMove3(e) {
    e.enableMove();
  }

  function add(handleObj) {
    var handler = handleObj.handler;

    handleObj.handler = function (e) {
      // Copy move properties across from originalEvent
      var i = properties.length;
      var property;

      while (i--) {
        property = properties[i];
        e[property] = e.originalEvent[property];
      }

      handler.apply(this, arguments);
    };
  }

  jQuery.event.special.movestart = {
    setup: function setup() {
      // Movestart must be enabled to allow other move events
      on(this, 'movestart', enableMove1); // Do listen to DOM events

      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove1);
      return false;
    },
    add: add
  };
  jQuery.event.special.move = {
    setup: function setup() {
      on(this, 'movestart', enableMove2);
      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove2);
      return false;
    },
    add: add
  };
  jQuery.event.special.moveend = {
    setup: function setup() {
      on(this, 'movestart', enableMove3);
      return false;
    },
    teardown: function teardown() {
      off(this, 'movestart', enableMove3);
      return false;
    },
    add: add
  };
}); // jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
// var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
// $jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
// $jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
// (function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
// b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
// 100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
// (b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
// c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
// d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
// g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
// b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
// d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
// l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
// b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
// "return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
// delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
// k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);

/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */


(function ($) {
  $.fn.niceSelect = function (method) {
    // Methods
    if (typeof method == 'string') {
      if (method == 'update') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');

          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);

            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');

          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });

        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {//         console.log('Method "' + method + '" does not exist.')
      }

      return this;
    } // Hide native select


    this.hide(); // Create custom markup

    this.each(function () {
      var $select = $(this);

      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });

    function create_nice_select($select) {
      $select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class') || '').addClass($select.attr('disabled') ? 'disabled' : '').attr('tabindex', $select.attr('disabled') ? null : '0').html('<span class="current"></span><ul class="list"></ul>'));
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      $options.each(function (i) {
        var $option = $(this);
        var display = $option.data('display');
        $dropdown.find('ul').append($('<li></li>').attr('data-value', $option.val()).attr('data-display', display || null).addClass('option' + ($option.is(':selected') ? ' selected' : '') + ($option.is(':disabled') ? ' disabled' : '')).html($option.text()));
      });
    }
    /* Event listeners */
    // Unbind existing events in case that the plugin has been initialized before


    $(document).off('.nice_select'); // Open/close

    $(document).on('click.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');

      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    }); // Close when clicking outside

    $(document).on('click.nice_select', function (event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');
      }
    }); // Option click

    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    }); // Keyboard events

    $(document).on('keydown.nice_select', '.nice-select', function (event) {
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected')); // Space or Enter

      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }

        return false; // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();

          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }

        return false; // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();

          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }

        return false; // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } // Tab

      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    }); // Detect CSS pointer-events support, for IE <= 10. From Modernizr.

    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';

    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }

    return this;
  };
})(jQuery);

(function ($) {
  $.fn.twentytwenty = function (options) {
    var options = $.extend({
      default_offset_pct: 0.5,
      orientation: 'horizontal',
      before_label: 'Before',
      after_label: 'After',
      no_overlay: false,
      move_slider_on_hover: false,
      move_with_handle_only: true,
      click_to_move: false
    }, options);
    return this.each(function () {
      var sliderPct = options.default_offset_pct;
      var container = $(this);
      var sliderOrientation = options.orientation;
      var beforeDirection = sliderOrientation === 'vertical' ? 'down' : 'left';
      var afterDirection = sliderOrientation === 'vertical' ? 'up' : 'right';
      container.wrap("<div class='twentytwenty-wrapper twentytwenty-" + sliderOrientation + "'></div>");

      if (!options.no_overlay) {
        container.append("<div class='twentytwenty-overlay'></div>");
        var overlay = container.find(".twentytwenty-overlay");
        overlay.append("<div class='twentytwenty-before-label' data-content='" + options.before_label + "'></div>");
        overlay.append("<div class='twentytwenty-after-label' data-content='" + options.after_label + "'></div>");
      }

      var beforeImg = container.find("img:first");
      var afterImg = container.find("img:last");
      container.append("<div class='twentytwenty-handle'></div>");
      var slider = container.find(".twentytwenty-handle");
      slider.append("<span class='twentytwenty-" + beforeDirection + "-arrow'></span>");
      slider.append("<span class='twentytwenty-" + afterDirection + "-arrow'></span>");
      container.addClass("twentytwenty-container");
      beforeImg.addClass("twentytwenty-before");
      afterImg.addClass("twentytwenty-after");

      var calcOffset = function calcOffset(dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w + "px",
          h: h + "px",
          cw: dimensionPct * w + "px",
          ch: dimensionPct * h + "px"
        };
      };

      var adjustContainer = function adjustContainer(offset) {
        if (sliderOrientation === 'vertical') {
          beforeImg.css("clip", "rect(0," + offset.w + "," + offset.ch + ",0)");
          afterImg.css("clip", "rect(" + offset.ch + "," + offset.w + "," + offset.h + ",0)");
        } else {
          beforeImg.css("clip", "rect(0," + offset.cw + "," + offset.h + ",0)");
          afterImg.css("clip", "rect(0," + offset.w + "," + offset.h + "," + offset.cw + ")");
        }

        container.css("height", offset.h);
      };

      var adjustSlider = function adjustSlider(pct) {
        var offset = calcOffset(pct);
        slider.css(sliderOrientation === "vertical" ? "top" : "left", sliderOrientation === "vertical" ? offset.ch : offset.cw);
        adjustContainer(offset);
      }; // Return the number specified or the min/max number if it outside the range given.


      var minMaxNumber = function minMaxNumber(num, min, max) {
        return Math.max(min, Math.min(max, num));
      }; // Calculate the slider percentage based on the position.


      var getSliderPercentage = function getSliderPercentage(positionX, positionY) {
        var sliderPercentage = sliderOrientation === 'vertical' ? (positionY - offsetY) / imgHeight : (positionX - offsetX) / imgWidth;
        return minMaxNumber(sliderPercentage, 0, 1);
      };

      $(window).on("resize.twentytwenty", function (e) {
        adjustSlider(sliderPct);
      });
      var offsetX = 0;
      var offsetY = 0;
      var imgWidth = 0;
      var imgHeight = 0;

      var onMoveStart = function onMoveStart(e) {
        if ((e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && sliderOrientation !== 'vertical') {
          e.preventDefault();
        } else if ((e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && e.distX > -e.distY) && sliderOrientation === 'vertical') {
          e.preventDefault();
        }

        container.addClass("active");
        offsetX = container.offset().left;
        offsetY = container.offset().top;
        imgWidth = beforeImg.width();
        imgHeight = beforeImg.height();
      };

      var onMove = function onMove(e) {
        if (container.hasClass("active")) {
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        }
      };

      var onMoveEnd = function onMoveEnd() {
        container.removeClass("active");
      };

      var moveTarget = options.move_with_handle_only ? slider : container;
      moveTarget.on("movestart", onMoveStart);
      moveTarget.on("move", onMove);
      moveTarget.on("moveend", onMoveEnd);

      if (options.move_slider_on_hover) {
        container.on("mouseenter", onMoveStart);
        container.on("mousemove", onMove);
        container.on("mouseleave", onMoveEnd);
      }

      slider.on("touchmove", function (e) {
        e.preventDefault();
      });
      container.find("img").on("mousedown", function (event) {
        event.preventDefault();
      });

      if (options.click_to_move) {
        container.on('click', function (e) {
          offsetX = container.offset().left;
          offsetY = container.offset().top;
          imgWidth = beforeImg.width();
          imgHeight = beforeImg.height();
          sliderPct = getSliderPercentage(e.pageX, e.pageY);
          adjustSlider(sliderPct);
        });
      }

      $(window).trigger("resize.twentytwenty");
    });
  };
})(jQuery);
/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
 * https://jqueryvalidation.org/
 * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */


!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e);
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList));
      }), c.errorList = d), b;
    },
    rules: function rules(b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0],
          k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");

      if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;

          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
              i[b] = f[b], delete f[b];
            }), i) : (delete e[j.name], f);
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g;
      }
    }
  }), a.extend(a.expr.pseudos || a.expr[":"], {
    blank: function blank(b) {
      return !a.trim("" + a(b).val());
    },
    filled: function filled(b) {
      var c = a(b).val();
      return null !== c && !!a.trim("" + c);
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");

          if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
            var e = a.data(this.form, "validator"),
                f = "on" + b.type.replace(/^validate/, ""),
                g = e.settings;
            g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
          }
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
            d = this.currentForm,
            e = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            e[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }

        return this.valid();
      },
      element: function element(b) {
        var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h));
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h;
      },
      showErrors: function showErrors(b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            };
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b);
      },
      resetElements: function resetElements(a) {
        var b;
        if (this.settings.unhighlight) for (b = 0; a[b]; b++) {
          this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        } else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
            c = 0;

        for (b in a) {
          void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
        }

        return c;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
            c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name"),
              e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
            d,
            e = a(b),
            f = b.type,
            g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
          return b;
        }).length,
            i = !1,
            j = this.elementValue(b);
        "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);

        for (d in g) {
          e = {
            method: d,
            parameters: g[d]
          };

          try {
            if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
              i = !0;
              continue;
            }

            if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (k) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k;
          }
        }

        if (!i) return this.objectLength(g) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }
      },
      defaultMessage: function defaultMessage(b, c) {
        "string" == typeof c && (c = {
          method: c
        });
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
            e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
      },
      formatAndAdd: function formatAndAdd(a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;

        for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h);
      },
      errorsFor: function errorsFor(b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
      },
      escapeCssMeta: function escapeCssMeta(a) {
        return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;

          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }

        return b.length;
      },
      depend: function depend(a, b) {
        return !this.dependTypes[_typeof(a)] || this.dependTypes[_typeof(a)](a, b);
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b, c) {
        return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    normalizeAttributeRule: function normalizeAttributeRule(a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0);
    },
    attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      }

      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
      }

      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];

        if (e.param || e.depends) {
          var f = !0;

          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;

            case "function":
              f = e.depends.call(c, c);
          }

          f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }

      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";

        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }

        return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a);
      },
      date: function () {
        var a = !1;
        return function (b, c) {
          return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString());
        };
      }(),
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      minlength: function minlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d;
      },
      maxlength: function maxlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e <= d;
      },
      rangelength: function rangelength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || a <= c;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      step: function step(b, c, d) {
        var e,
            f = a(c).attr("type"),
            g = "Step attribute on input type " + f + " is not supported.",
            h = ["text", "number", "range"],
            i = new RegExp("\\b" + f + "\\b"),
            j = f && !i.test(h.join()),
            k = function k(a) {
          var b = ("" + a).match(/(?:\.(\d+))?$/);
          return b && b[1] ? b[1].length : 0;
        },
            l = function l(a) {
          return Math.round(a * Math.pow(10, e));
        },
            m = !0;

        if (j) throw new Error(g);
        return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f,
            g,
            h,
            i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function success(a) {
            var d,
                g,
                h,
                j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  });
  var b,
      c = {};
  return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
        f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  }), a;
});
$(document).ready(function () {
  $('select').niceSelect();
  $('[bannerSlider_js]').each(function () {
    new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      speed: 700,
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      effect: 'fade',
      autoplay: {
        delay: 3600,
        disableOnInteraction: false
      },
      on: {
        beforeInit: function beforeInit() {
          var slides = this.slides.length;
          var slidesPerView = this.params.slidesPerView; // Проверка количества слайдов

          if (slides <= slidesPerView) {
            this.params.loop = false; // Отключаем loop
          } else {
            this.params.loop = true;
          }
        }
      }
    });
  });
  $('[productsSlider_js]').each(function () {
    var navigationPrev = $(this).parents('.section-products-swiper').find('.swiper__navigation-btn-prev')[0];
    var navigationNext = $(this).parents('.section-products-swiper').find('.swiper__navigation-btn-next')[0];
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 700,
      scrollbar: {
        enabled: true,
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      navigation: {
        nextEl: navigationNext,
        prevEl: navigationPrev
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 20,
          scrollbar: {
            enabled: false
          }
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[lastSizeSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 700,
      scrollbar: {
        enable: true,
        el: ".swiper-scroll",
        draggable: true,
        hide: false
      },
      navigation: {
        nextEl: '.section-last-size__swiper-navigation .swiper__navigation-btn-next',
        prevEl: '.section-last-size__swiper-navigation .swiper__navigation-btn-prev'
      },
      breakpoints: {
        0: {
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 18,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[plusSizeSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 700,
      scrollbar: {
        enable: true,
        el: ".swiper-scroll",
        draggable: true,
        hide: false
      },
      navigation: {
        nextEl: '.section-plus-size .swiper__navigation-btn-next',
        prevEl: '.section-plus-size .swiper__navigation-btn-prev'
      },
      breakpoints: {
        0: {
          scrollbar: {
            enabled: true
          }
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 18,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  $('[productGallerySlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        bullets: true,
        clickable: true
      }
    });
  });
  $('[sertificateSlider_js]').each(function () {
    var swiper = new Swiper($(this)[0], {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 64,
      speed: 700,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        hide: false
      },
      // navigation: {
      //   nextEl: '.section-sertificates .swiper__navigation-btn-next',
      //   prevEl: '.section-sertificates .swiper__navigation-btn-prev',
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
          scrollbar: {
            enabled: true
          }
        },
        767: {
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          scrollbar: {
            enabled: false
          }
        },
        1200: {
          freeMode: true,
          slidesPerView: 'auto',
          spaceBetween: 64,
          scrollbar: {
            enabled: false
          }
        }
      }
    });
  });
  var swiperMarque = new Swiper('.section-partners__swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 4500,
    loop: true,
    allowTouchMove: false,
    // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

    },
    breakpoints: {
      992: {
        slidesPerView: 5,
        spaceBetween: 5
      }
    }
  }); // dooors swipers

  function doorsSwiperInit(el) {
    var isReverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6500;
    var initialSlide = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var swiper = new Swiper(el, {
      direction: 'vertical',
      slidesPerView: 1.4,
      spaceBetween: 30,
      speed: speed,
      initialSlide: initialSlide,
      loop: true,
      allowTouchMove: false,
      // можно ещё отключить свайп
      autoplay: {
        delay: 0,
        reverseDirection: isReverse,
        disableOnInteraction: false // или сделать так, чтобы восстанавливался autoplay после взаимодействия

      } // breakpoints: {
      //   767: {
      //   }
      // }

    });
  }

  var doorsSwiperEl1 = $('.section-doors__swiper_1');
  var doorsSwiperEl2 = $('.section-doors__swiper_2');
  var doorsSwiperEl3 = $('.section-doors__swiper_3');
  var doorsSwiperEl4 = $('.section-doors__swiper_4');
  doorsSwiperInit(doorsSwiperEl1[0]);
  doorsSwiperInit(doorsSwiperEl2[0], true, 8500);
  doorsSwiperInit(doorsSwiperEl3[0], false, 4800);
  doorsSwiperInit(doorsSwiperEl4[0], true, 6200);
  var gallary__swiper = new Swiper('.gallary__swiper', {
    slidesPerView: 4,
    spaceBetween: '1%',
    watchSlidesProgress: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false
    },
    autoplay: {
      delay: 2500
    },
    pagination: {
      el: ".gallary__wrapper .swiper-pagination"
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: '1%',
        scrollbar: {
          enabled: true
        },
        pagination: {
          enabled: false
        }
      },
      578: {
        slidesPerView: 2,
        spaceBetween: '1%',
        scrollbar: {
          enabled: true
        },
        pagination: {
          enabled: false
        }
      },
      767: {
        slidesPerView: 4,
        spaceBetween: '1%',
        scrollbar: {
          enabled: false
        },
        pagination: {
          enabled: true
        }
      }
    }
  });
  $('.tabs-slider').each(function () {
    var $container = $(this).find('.swiper-container');
    var swiperTabs = new Swiper($container, {
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      touchStartForcePreventDefault: true
    });
  });
  $('body').on('click', '[agreementControl_JS]', function () {
    var $this = $(this),
        $form = $this.closest('form'),
        $input = $form.find('[agreementControlCheckbox_JS]'),
        $btn = $form.find('[agreementControlBtn_JS]');

    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      $input.removeAttr('checked');
      $btn.addClass('disabled');
      $btn.attr('disabled', true);
    } else {
      $this.addClass('checked');
      $input.attr('checked', '');
      $btn.removeClass('disabled');
      $btn.removeAttr('disabled');
    }
  });
  $('body').on('click', '[readMoreBtn_JS]', function () {
    var $btn = $(this),
        $parent = $btn.closest('[readMoreContainer_JS]');
    $parent.addClass('open');
  });
  $("[toTop_JS]").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
    return false;
  });
  $("[anchorLink_JS]").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');

    if ($(window).innerWidth() < 769) {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 29.6875;
    } else {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 5, 2548607461902259590120861797162;
    }

    if ($(id).length > 0) {
      var top = $(id).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    } else {
      //             console.log(1);
      window.location.href = "index.html" + id;
    }
  });
  var hash = window.location.hash;

  if (hash != "") {
    if ($(window).innerWidth() < 769) {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 29.6875;
    } else {
      var headerHeight = $(window).innerWidth();
      headerHeight = headerHeight / 100 * 5, 2548607461902259590120861797162;
    }

    if ($(hash).length > 0) {
      var offset = $(hash).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: offset
      }, 1500);
    }
  }

  ;
  $.validator.addMethod('pattern', function (value, element, pattern) {
    // Проверяем, является ли значение пустым (если поле не обязательно) или соответствует регулярному выражению
    return this.optional(element) || pattern.test(value);
  }, 'Поле содержит некорректное значение');
  $('[formValidate_JS]').each(function () {
    var form = $(this);
    $(this).validate({
      errorClass: "validate_error",
      rules: {
        name: {
          required: true,
          pattern: /^[a-zA-Zа-яА-Я\s]+$/,
          // Метод проверки букв и пробелов
          minlength: 2
        },
        phone: {
          required: true,
          pattern: /^(?!.*(\d)\1{3})[0-9()+-]+$/,
          minlength: 7 // Метод проверки повторяющихся подряд символов

        },
        email: {
          pattern: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/ // Проверка корректности email

        }
      },
      errorPlacement: function errorPlacement(error, element) {}
    });
  });
  $('[headerBtn_JS]').on('click', function () {
    menuOpen();
  });
  $('.header__mob-btn-close').on('click', function () {
    menuClose();
  });
  $('.header__mob-content a').on('click', function () {
    if ($('[headerBtn_JS]').hasClass('open')) {
      menuClose();
    }
  });

  function slideToggleSection() {
    $('[toggleItem_JS]').each(function () {
      $(this).removeClass('open');
      $(this).siblings().each(function () {
        if ($(window).outerWidth() < 992) {
          $(this).css('display', 'none');
        } else {
          $(this).removeAttr('style');
        }
      });
    });

    if ($(window).outerWidth() < 992) {
      $('.product-card [toggleItem_JS]').first().addClass('open');
      $('.product-card [toggleItem_JS]').first().siblings().removeAttr('style');
    }

    return;
  }

  $('[toggleItem_JS]').each(function () {
    $(this).on('click', function () {
      if ($(window).outerWidth() < 992) {
        $(this).toggleClass('open');
        $(this).siblings().slideToggle();
      }
    });
  });
  slideToggleSection(); // Dropdown

  function rightDropdown() {
    $('.menu__item.dropdown').each(function () {
      var $submenu = $(this).find('.submenu');
      var $offsetToLeft = $submenu.offset().left + $submenu.outerWidth();

      if ($(window).outerWidth() > 992) {
        if ($offsetToLeft > $(window).outerWidth()) {
          $submenu.css('transform', "translateX(-".concat($offsetToLeft - $(window).outerWidth() + 30, "px)"));
        }
      } else {
        $submenu.removeAttr('style');
      }
    });
  }

  rightDropdown();
  var windowWidth = $(window).outerWidth();
  $(window).on('resize', function () {
    if ($(window).outerWidth() !== windowWidth) {
      rightDropdown();
      slideToggleSection();
    }
  });
  $('.menu__item.dropdown').on('mouseenter', function () {
    if ($(window).outerWidth() > 992) {
      $(this).addClass('is-active');
      $(this).find('.submenu').addClass('is-active');
    }
  });
  $('.menu__item.dropdown').on('mouseleave', function () {
    if ($(window).outerWidth() > 992) {
      $(this).removeClass('is-active');
      $(this).find('.submenu').removeClass('is-active');
    }
  });
  $('.menu__dropdown-btn').each(function () {
    $(this).on('click', function (e) {
      if ($(window).outerWidth() <= 992) {
        var $isOpen = $(this).closest('.menu__item.dropdown').hasClass('is-active'); // $('.menu__dropdown-btn').each(function() {
        //   $(this).closest('.menu__item.dropdown').removeClass('is-active');
        //   $(this).siblings('.submenu').removeClass('is-active');
        //   $(this).siblings('.submenu').slideUp();
        // });

        if ($isOpen) {
          // return;
          $(this).closest('.menu__item.dropdown').removeClass('is-active');
          $(this).siblings('.submenu').removeClass('is-active');
          $(this).siblings('.submenu').slideUp();
        } else {
          $(this).closest('.menu__item.dropdown').addClass('is-active');
          $(this).siblings('.submenu').addClass('is-active');
          $(this).siblings('.submenu').slideDown();
        }
      }
    });
  });
}); // $(document).on('click', function (e) {
//   if ($(window).outerWidth() <= 992) {
//     if ($(e.target).closest('.menu__item.dropdown.is-active').length
//     && !$(e.target).closest('.menu__dropdown-btn.is-active').length) {
//         // клик внутри элемента
//         return;
//     }
//     // клик снаружи элемента
//     $('.menu__item.dropdown.is-active').removeClass('is-active');
//     $('.submenu.is-active').slideUp();
//     $('.submenu.is-active').removeClass('is-active');
//   }
// });

$('[loadMoreBtn_JS]').on('click', function () {
  $(this).closest('[loadMoreContainer_JS]').addClass('md-all-items-visible');
});

function menuOpen() {
  $('[headerBtn_JS]').addClass('active');
  $('[headerBtn_JS]').closest('header').find('.header__mob-content').addClass('open');
  $('html').css('overflow', 'hidden');
}

function menuClose() {
  // $('html').removeAttr('style');
  $('[headerBtn_JS]').removeClass('active');
  $('[headerBtn_JS]').closest('header').find('.header__mob-content').removeClass('open');
  $('html').removeAttr('style');
}

$('.header__catalog-btn').on('click', function (e) {
  $('.header__catalog-nav-wrap').toggleClass('open');
});
$('.header__catalog-btn-close').on('click', function (e) {
  $('.header__catalog-nav-wrap').removeClass('open');
});
$(document).ready(function () {
  $('body').on('click', '[popupOpen]', function () {
    popupClose();
    var $elem = $(this),
        target = $elem.attr('popupOpen');

    if (target == 'promotion-popup' || target == 'service-popup' || target == 'product-popup') {
      var id = $elem.attr('data-hidden-id');
      $('[popupID="' + target + '"]').find('[hiddenValue_JS]').attr('value', id);
    }

    popupOpen(target);
  }); // setTimeout(function() {
  //   popupOpen('marketing-news');
  // }, 30000);
  // setTimeout(function() {
  //   popupOpen('after-sixty');
  // }, 60000);

  $('body').on('click', '[popupClose_JS]', function () {
    popupClose();
  });
  $('body').append('<div class="download-popup-trigger"></div>');
  $('body .download-popup-trigger').hover(function () {
    if (localStorage.getItem('downloadPopupState') === 'true') {
      popupOpen('download-popup');
      localStorage.setItem('downloadPopupState', 'false');
    }

    ;
  });
});

if (localStorage.getItem('downloadPopupState') === null) {
  localStorage.setItem('downloadPopupState', 'true');
}

var galleryThumbsSwiper = new Swiper('.product-popup__gallery-swiper-thumbs', {
  // loop: true,
  direction: 'vertical',
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  },
  breakpoints: {
    767: {
      direction: 'horizontal'
    }
  },
  on: {
    resize: function resize() {
      this.update();
    }
  }
});
var gallerySwiper = new Swiper('.product-popup__gallery-swiper-large', {
  // loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbsSwiper
  }
});

var popupClose = function popupClose() {
  $('.popup.open').find('input').val('');
  $('.popup.open').find('textarea').val('');
  $('.popup.open').find('.form-file').each(function () {
    var text = $(this).attr('data-text');
    $(this).find('div p').text(text);
  });
  $('.popup.open').find('.form-stars label:last-child').trigger('click');
  $('.popup .validate_error').each(function () {
    $(this).removeClass('validate_error');
  });
  $('html').removeAttr('style');
  $('.popup.open').addClass('fade');
  $('.popup.open').removeClass('open');
};

var popupOpen = function popupOpen(e) {
  popupClose();
  var target = e;
  var width = $('.page').width();
  $('html').css('overflow', 'hidden');
  $('[popupID="' + target + '"]').addClass('open');
  $('[popupID="' + target + '"]').removeClass('fade');

  if ($('[popupID="' + target + '"]').hasClass('product-popup')) {
    // clearTimeout(galleryThumbsSwiperUpdateTimeout);
    galleryThumbsSwiper.update();

    if ($(window).outerWidth() <= 767) {
      setTimeout(function () {
        galleryThumbsSwiper.update();
      }, 10);
    }
  }
};

function fixedHeader() {
  var height = jQuery(window).scrollTop();
  var headerHeight = $('.header__top').innerHeight() + $('.header__bottom').innerHeight() + 50;

  if (height > 50) {
    jQuery('.header').addClass('fixed');
    $('body').css('padding-top', headerHeight);
  } else {
    jQuery('.header').removeClass('fixed');
    $('body').css('padding-top', '0');
  }
}

fixedHeader();
jQuery(window).scroll(function ($) {
  fixedHeader();
});
$(window).on('resize', function () {
  fixedHeader();
});
$(window).on('scroll', function () {
  var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
  $('.header-progress').width(ratio + "%");
});
$('img').each(function (e) {
  $(this).addClass('lazy');
});
var lazyLoadInstance = new LazyLoad();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJDIiwiciIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicyIsInNsaWNlIiwiZyIsImZsYXQiLCJjYWxsIiwiY29uY2F0IiwiYXBwbHkiLCJ1IiwicHVzaCIsImkiLCJpbmRleE9mIiwibiIsIm8iLCJ0b1N0cmluZyIsInYiLCJoYXNPd25Qcm9wZXJ0eSIsImEiLCJsIiwieSIsIm0iLCJub2RlVHlwZSIsIngiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwiaCIsIlQiLCJEYXRlIiwiayIsInVlIiwiQSIsIk4iLCJEIiwiaiIsInEiLCJwb3AiLCJMIiwiSCIsIk8iLCJQIiwiUiIsIk0iLCJJIiwiVyIsIkYiLCJCIiwiUmVnRXhwIiwiJCIsIl8iLCJ6IiwiVSIsIlgiLCJWIiwiRyIsIklEIiwiQ0xBU1MiLCJUQUciLCJBVFRSIiwiUFNFVURPIiwiQ0hJTEQiLCJib29sIiwibmVlZHNDb250ZXh0IiwiWSIsIlEiLCJKIiwiSyIsIloiLCJlZSIsInRlIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJyZSIsImllIiwiY2hhckNvZGVBdCIsIm9lIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJkZSIsImhlIiwiZ2UiLCJpc0Rpc2FibGVkIiwidmUiLCJpc1hNTCIsIm5hbWVzcGFjZVVSSSIsImRvY3VtZW50RWxlbWVudCIsInNldERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiY2xhc3NOYW1lIiwiY3JlYXRlQ29tbWVudCIsImdldEJ5SWQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZpbHRlciIsImZpbmQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidmFsdWUiLCJpbm5lckhUTUwiLCJtYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJlc2NhcGUiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwibWUiLCJ3ZSIsIlRlIiwiQ2UiLCJFZSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib25jZSIsInN0b3BPbkZhbHNlIiwibWVtb3J5IiwicmVtb3ZlIiwiZGlzYWJsZSIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY29kZSIsImNoYXJDb2RlIiwia2V5Iiwia2V5Q29kZSIsImJ1dHRvbnMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9pbnRlcklkIiwicG9pbnRlclR5cGUiLCJzY3JlZW5YIiwic2NyZWVuWSIsInRhcmdldFRvdWNoZXMiLCJ0b0VsZW1lbnQiLCJ0b3VjaGVzIiwid2hpY2giLCJibHVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvbiIsIm9uZSIsIk5lIiwiRGUiLCJqZSIsInFlIiwiTGUiLCJIZSIsIk9lIiwiUGUiLCJodG1sIiwiY2xvbmUiLCJfZXZhbFVybCIsIlJlIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIk1lIiwiSWUiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwiV2UiLCJGZSIsIkJlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiJGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsInJvdW5kIiwicGFyc2VGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5MZWZ0Iiwic2Nyb2xsYm94U2l6ZSIsInJlbGlhYmxlVHJEaW1lbnNpb25zIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJfZSIsInplIiwiVWUiLCJYZSIsImNzc1Byb3BzIiwiVmUiLCJHZSIsIlllIiwidmlzaWJpbGl0eSIsIlFlIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJKZSIsIm1heCIsIktlIiwiY2VpbCIsIlplIiwiZ2V0Q2xpZW50UmVjdHMiLCJldCIsImNzc0hvb2tzIiwib3BhY2l0eSIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiY29sdW1uQ291bnQiLCJmaWxsT3BhY2l0eSIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwic2V0UHJvcGVydHkiLCJpc0Zpbml0ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwib3B0aW9ucyIsInByb3BIb29rcyIsInJ1biIsImR1cmF0aW9uIiwicG9zIiwic3RlcCIsImZ4Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImxpbmVhciIsInN3aW5nIiwiY29zIiwiUEkiLCJ0dCIsIm50IiwicnQiLCJpdCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsInB0IiwiZHQiLCJyZW1vdmVBdHRyIiwiYXR0ckhvb2tzIiwiaHQiLCJ2dCIsInl0IiwibXQiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwieHQiLCJ2YWwiLCJ2YWxIb29rcyIsImZvY3VzaW4iLCJidCIsInd0IiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsIlR0IiwiQ3QiLCJFdCIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiU3QiLCJrdCIsIkF0IiwiTnQiLCJEdCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJqdCIsInF0IiwiTHQiLCJIdCIsIk90IiwiUHQiLCJSdCIsIk10IiwiSXQiLCJXdCIsIkZ0IiwiQnQiLCJkYXRhVHlwZXMiLCIkdCIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm90b2NvbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsImFjY2VwdHMiLCJ4bWwiLCJqc29uIiwicmVzcG9uc2VGaWVsZHMiLCJjb252ZXJ0ZXJzIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIl90IiwienQiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJyZXNwb25zZSIsInNjcmlwdCIsInNjcmlwdEF0dHJzIiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJVdCIsIlh0IiwiVnQiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImFuaW1hdGVkIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0UGFyZW50Iiwic2Nyb2xsVG8iLCJIZWlnaHQiLCJXaWR0aCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiR3QiLCJwcm94eSIsImhvbGRSZWFkeSIsInBhcnNlSlNPTiIsImlzRnVuY3Rpb24iLCJpc1dpbmRvdyIsImNhbWVsQ2FzZSIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsImRlZmluZSIsImFtZCIsIll0IiwialF1ZXJ5IiwiUXQiLCJub0NvbmZsaWN0IiwiYXNzaWduIiwidGhyZXNob2xkIiwicmVxdWVzdEZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxlbWVudCIsIkN1c3RvbUV2ZW50IiwicGFyYW1zIiwidW5kZWZpbmVkIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJpZ25vcmVUYWdzIiwidGV4dGFyZWEiLCJtb3VzZWV2ZW50cyIsIm1vdmUiLCJjYW5jZWwiLCJ0b3VjaGV2ZW50cyIsInJzcGFjZXMiLCJldmVudE9wdGlvbnMiLCJldmVudHNTeW1ib2wiLCJnZXRFdmVudHMiLCJub2RlIiwidHlwZXMiLCJwcm9wZXJ0aWVzIiwiZGlzcGF0Y2hFdmVudCIsIlRpbWVyIiwiY2FsbGJhY2siLCJydW5uaW5nIiwidGltZSIsImtpY2siLCJjYiIsImlzSWdub3JlVGFnIiwidGFnTmFtZSIsImlzUHJpbWFyeUJ1dHRvbiIsImlkZW50aWZpZWRUb3VjaCIsInRvdWNoTGlzdCIsImlkZW50aWZpZXIiLCJjaGFuZ2VkVG91Y2giLCJ0b3VjaCIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNlZW5kIiwiY2hlY2tUaHJlc2hvbGQiLCJyZW1vdmVNb3VzZSIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJ0b3VjaGVuZCIsInJlbW92ZVRvdWNoIiwiZGlzdFgiLCJkaXN0WSIsInRyaWdnZXJTdGFydCIsInRlbXBsYXRlIiwic3RhcnRYIiwic3RhcnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwiZmluZ2VyIiwiZW5hYmxlTW92ZSIsIm1vdmVFbmFibGVkIiwiYWN0aXZlTW91c2Vtb3ZlIiwiYWN0aXZlTW91c2VlbmQiLCJyZW1vdmVBY3RpdmVNb3VzZSIsImVuZEV2ZW50IiwiYWN0aXZlVG91Y2htb3ZlIiwiYWN0aXZlVG91Y2hlbmQiLCJyZW1vdmVBY3RpdmVUb3VjaCIsInVwZGF0ZUV2ZW50IiwibW92ZXN0YXJ0IiwidXBkYXRlIiwiZW5hYmxlTW92ZTEiLCJlbmFibGVNb3ZlMiIsImVuYWJsZU1vdmUzIiwicHJvcGVydHkiLCJtb3ZlZW5kIiwibmljZVNlbGVjdCIsIiRzZWxlY3QiLCIkZHJvcGRvd24iLCJjcmVhdGVfbmljZV9zZWxlY3QiLCIkb3B0aW9ucyIsIiRzZWxlY3RlZCIsIiRvcHRpb24iLCIkZm9jdXNlZF9vcHRpb24iLCIkbmV4dCIsIiRwcmV2IiwicG9pbnRlckV2ZW50cyIsInR3ZW50eXR3ZW50eSIsImRlZmF1bHRfb2Zmc2V0X3BjdCIsIm9yaWVudGF0aW9uIiwiYmVmb3JlX2xhYmVsIiwiYWZ0ZXJfbGFiZWwiLCJub19vdmVybGF5IiwibW92ZV9zbGlkZXJfb25faG92ZXIiLCJtb3ZlX3dpdGhfaGFuZGxlX29ubHkiLCJjbGlja190b19tb3ZlIiwic2xpZGVyUGN0IiwiY29udGFpbmVyIiwic2xpZGVyT3JpZW50YXRpb24iLCJiZWZvcmVEaXJlY3Rpb24iLCJhZnRlckRpcmVjdGlvbiIsIm92ZXJsYXkiLCJiZWZvcmVJbWciLCJhZnRlckltZyIsInNsaWRlciIsImNhbGNPZmZzZXQiLCJkaW1lbnNpb25QY3QiLCJjdyIsImNoIiwiYWRqdXN0Q29udGFpbmVyIiwiYWRqdXN0U2xpZGVyIiwicGN0IiwibWluTWF4TnVtYmVyIiwibnVtIiwibWluIiwiZ2V0U2xpZGVyUGVyY2VudGFnZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNsaWRlclBlcmNlbnRhZ2UiLCJpbWdIZWlnaHQiLCJpbWdXaWR0aCIsIm9uTW92ZVN0YXJ0Iiwib25Nb3ZlIiwib25Nb3ZlRW5kIiwibW92ZVRhcmdldCIsInJlcXVpcmUiLCJ2YWxpZGF0ZSIsImRlYnVnIiwidmFsaWRhdG9yIiwic2V0dGluZ3MiLCJvbnN1Ym1pdCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbFN1Ym1pdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3VibWl0dGVkIiwiY3VycmVudEZvcm0iLCJmb3JtIiwicGVuZGluZ1JlcXVlc3QiLCJmb2N1c0ludmFsaWQiLCJ2YWxpZCIsImVycm9yTGlzdCIsInJ1bGVzIiwic3RhdGljUnVsZXMiLCJub3JtYWxpemVSdWxlIiwibWVzc2FnZXMiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiYmxhbmsiLCJmaWxsZWQiLCJ1bmNoZWNrZWQiLCJkZWZhdWx0cyIsImZvcm1hdCIsImdyb3VwcyIsImVycm9yQ2xhc3MiLCJwZW5kaW5nQ2xhc3MiLCJ2YWxpZENsYXNzIiwiZXJyb3JFbGVtZW50IiwiZm9jdXNDbGVhbnVwIiwiZXJyb3JDb250YWluZXIiLCJlcnJvckxhYmVsQ29udGFpbmVyIiwiaWdub3JlIiwiaWdub3JlVGl0bGUiLCJvbmZvY3VzaW4iLCJsYXN0QWN0aXZlIiwidW5oaWdobGlnaHQiLCJoaWRlVGhlc2UiLCJlcnJvcnNGb3IiLCJvbmZvY3Vzb3V0IiwiY2hlY2thYmxlIiwic3VibWl0dGVkIiwib3B0aW9uYWwiLCJvbmtleXVwIiwiZWxlbWVudFZhbHVlIiwiaW52YWxpZCIsIm9uY2xpY2siLCJoaWdobGlnaHQiLCJmaW5kQnlOYW1lIiwic2V0RGVmYXVsdHMiLCJlbWFpbCIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiZXF1YWxUbyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInJhbmdlbGVuZ3RoIiwicmFuZ2UiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwic2hvd0Vycm9ycyIsInByZXBhcmVGb3JtIiwiY3VycmVudEVsZW1lbnRzIiwiZWxlbWVudHMiLCJjaGVjayIsImNsZWFuIiwidmFsaWRhdGlvblRhcmdldEZvciIsInByZXBhcmVFbGVtZW50IiwibnVtYmVyT2ZJbnZhbGlkcyIsInRvSGlkZSIsInN1Y2Nlc3NMaXN0IiwiZGVmYXVsdFNob3dFcnJvcnMiLCJyZXNldEZvcm0iLCJoaWRlRXJyb3JzIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsImFkZFdyYXBwZXIiLCJzaXplIiwiZmluZExhc3RBY3RpdmUiLCJlcnJvcnMiLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsInZhbGlkaXR5IiwiYmFkSW5wdXQiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIm5vcm1hbGl6ZXIiLCJwYXJhbWV0ZXJzIiwibWV0aG9kcyIsImZvcm1hdEFuZEFkZCIsImxvZyIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiY3VzdG9tTWVzc2FnZSIsImZpbmREZWZpbmVkIiwiZGVmYXVsdE1lc3NhZ2UiLCJ0aXRsZSIsIndyYXBwZXIiLCJzaG93TGFiZWwiLCJ2YWxpZEVsZW1lbnRzIiwiaW52YWxpZEVsZW1lbnRzIiwiaWRPck5hbWUiLCJlcnJvclBsYWNlbWVudCIsImVzY2FwZUNzc01ldGEiLCJnZXRMZW5ndGgiLCJkZXBlbmQiLCJkZXBlbmRUeXBlcyIsInN0cmluZyIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0IiwicHJldmlvdXNWYWx1ZSIsImRlc3Ryb3kiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwibm9ybWFsaXplQXR0cmlidXRlUnVsZSIsIk51bWJlciIsImRlcGVuZHMiLCJhZGRNZXRob2QiLCJwb3ciLCJvcmlnaW5hbE1lc3NhZ2UiLCJtb2RlIiwicG9ydCIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImVmZmVjdCIsImF1dG9wbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJiZWZvcmVJbml0Iiwic2xpZGVzIiwibmF2aWdhdGlvblByZXYiLCJuYXZpZ2F0aW9uTmV4dCIsInN3aXBlciIsInNwYWNlQmV0d2VlbiIsInNjcm9sbGJhciIsImVsIiwiZHJhZ2dhYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiZW5hYmxlIiwicGFnaW5hdGlvbiIsImJ1bGxldHMiLCJjbGlja2FibGUiLCJmcmVlTW9kZSIsInN3aXBlck1hcnF1ZSIsImFsbG93VG91Y2hNb3ZlIiwiZG9vcnNTd2lwZXJJbml0IiwiaXNSZXZlcnNlIiwiaW5pdGlhbFNsaWRlIiwicmV2ZXJzZURpcmVjdGlvbiIsImRvb3JzU3dpcGVyRWwxIiwiZG9vcnNTd2lwZXJFbDIiLCJkb29yc1N3aXBlckVsMyIsImRvb3JzU3dpcGVyRWw0IiwiZ2FsbGFyeV9fc3dpcGVyIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIiRjb250YWluZXIiLCJzd2lwZXJUYWJzIiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCIkdGhpcyIsIiRmb3JtIiwiJGlucHV0IiwiJGJ0biIsIiRwYXJlbnQiLCJpbm5lcldpZHRoIiwiaGVhZGVySGVpZ2h0IiwicGF0dGVybiIsInBob25lIiwibWVudU9wZW4iLCJtZW51Q2xvc2UiLCJzbGlkZVRvZ2dsZVNlY3Rpb24iLCJvdXRlcldpZHRoIiwicmlnaHREcm9wZG93biIsIiRzdWJtZW51IiwiJG9mZnNldFRvTGVmdCIsIndpbmRvd1dpZHRoIiwiJGlzT3BlbiIsInBvcHVwQ2xvc2UiLCIkZWxlbSIsInBvcHVwT3BlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZ2FsbGVyeVRodW1ic1N3aXBlciIsInJlc2l6ZSIsImdhbGxlcnlTd2lwZXIiLCJ0aHVtYnMiLCJmaXhlZEhlYWRlciIsImlubmVySGVpZ2h0Iiwic2Nyb2xsIiwicmF0aW8iLCJsYXp5TG9hZEluc3RhbmNlIiwiTGF6eUxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7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Q2pILE1BQUQsQ0FBRCxDQUFVeWQsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVztBQUNoQ2txQixFQUFBQSxXQUFXO0FBQ1osQ0FGRDtBQUlBMWdDLENBQUMsQ0FBQ2pILE1BQUQsQ0FBRCxDQUFVeWQsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVztBQUNoQyxNQUFJcXFCLEtBQUssR0FBRzdnQyxDQUFDLENBQUNuSCxRQUFELENBQUQsQ0FBWTRrQixTQUFaLE1BQTJCLENBQUN6ZCxDQUFDLENBQUNuSCxRQUFELENBQUQsQ0FBWWloQixNQUFaLEtBQXVCOVosQ0FBQyxDQUFDakgsTUFBRCxDQUFELENBQVUrZ0IsTUFBVixFQUF4QixJQUE4QyxHQUF6RSxDQUFaO0FBQ0E5WixFQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRZLEtBQXRCLENBQTRCaW9CLEtBQUssR0FBRyxHQUFwQztBQUNELENBSEQ7QUFPQTdnQyxDQUFDLENBQUMsS0FBRCxDQUFELENBQVN4RCxJQUFULENBQWUsVUFBUy9ELENBQVQsRUFBWTtBQUN6QnVILEVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdpQixRQUFSLENBQWlCLE1BQWpCO0FBQ0QsQ0FGRDtBQUdBLElBQUk4ZSxnQkFBZ0IsR0FBRyxJQUFJQyxRQUFKLEVBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My41LjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZS5kb2N1bWVudD90KGUsITApOmZ1bmN0aW9uKGUpe2lmKCFlLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIHQoZSl9OnQoZSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oQyxlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1bXSxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmZsYXQ/ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZmxhdC5jYWxsKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gdC5jb25jYXQuYXBwbHkoW10sZSl9LHU9dC5wdXNoLGk9dC5pbmRleE9mLG49e30sbz1uLnRvU3RyaW5nLHY9bi5oYXNPd25Qcm9wZXJ0eSxhPXYudG9TdHJpbmcsbD1hLmNhbGwoT2JqZWN0KSx5PXt9LG09ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUubm9kZVR5cGV9LHg9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PT1lLndpbmRvd30sRT1DLmRvY3VtZW50LGM9e3R5cGU6ITAsc3JjOiEwLG5vbmNlOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBiKGUsdCxuKXt2YXIgcixpLG89KG49bnx8RSkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW28uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGY9XCIzLjUuMVwiLFM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IFMuZm4uaW5pdChlLHQpfTtmdW5jdGlvbiBwKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJjA8dCYmdC0xIGluIGUpfVMuZm49Uy5wcm90b3R5cGU9e2pxdWVyeTpmLGNvbnN0cnVjdG9yOlMsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBzLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9zLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PVMubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBTLmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLm1hcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXZlbjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybih0KzEpJTJ9KSl9LG9kZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcyxmdW5jdGlvbihlLHQpe3JldHVybiB0JTJ9KSl9LGVxOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMubGVuZ3RoLG49K2UrKGU8MD90OjApO3JldHVybiB0aGlzLnB1c2hTdGFjaygwPD1uJiZuPHQ/W3RoaXNbbl1dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOnUsc29ydDp0LnNvcnQsc3BsaWNlOnQuc3BsaWNlfSxTLmV4dGVuZD1TLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsbixyLGksbyxhPWFyZ3VtZW50c1swXXx8e30scz0xLHU9YXJndW1lbnRzLmxlbmd0aCxsPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGEmJihsPWEsYT1hcmd1bWVudHNbc118fHt9LHMrKyksXCJvYmplY3RcIj09dHlwZW9mIGF8fG0oYSl8fChhPXt9KSxzPT09dSYmKGE9dGhpcyxzLS0pO3M8dTtzKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW3NdKSlmb3IodCBpbiBlKXI9ZVt0XSxcIl9fcHJvdG9fX1wiIT09dCYmYSE9PXImJihsJiZyJiYoUy5pc1BsYWluT2JqZWN0KHIpfHwoaT1BcnJheS5pc0FycmF5KHIpKSk/KG49YVt0XSxvPWkmJiFBcnJheS5pc0FycmF5KG4pP1tdOml8fFMuaXNQbGFpbk9iamVjdChuKT9uOnt9LGk9ITEsYVt0XT1TLmV4dGVuZChsLG8scikpOnZvaWQgMCE9PXImJihhW3RdPXIpKTtyZXR1cm4gYX0sUy5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisoZitNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihlKX0sbm9vcDpmdW5jdGlvbigpe30saXNQbGFpbk9iamVjdDpmdW5jdGlvbihlKXt2YXIgdCxuO3JldHVybiEoIWV8fFwiW29iamVjdCBPYmplY3RdXCIhPT1vLmNhbGwoZSkpJiYoISh0PXIoZSkpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpJiZhLmNhbGwobik9PT1sKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlKXJldHVybiExO3JldHVybiEwfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGUsdCxuKXtiKGUse25vbmNlOnQmJnQubm9uY2V9LG4pfSxlYWNoOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wO2lmKHAoZSkpe2ZvcihuPWUubGVuZ3RoO3I8bjtyKyspaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrfWVsc2UgZm9yKHIgaW4gZSlpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWs7cmV0dXJuIGV9LG1ha2VBcnJheTpmdW5jdGlvbihlLHQpe3ZhciBuPXR8fFtdO3JldHVybiBudWxsIT1lJiYocChPYmplY3QoZSkpP1MubWVyZ2UobixcInN0cmluZ1wiPT10eXBlb2YgZT9bZV06ZSk6dS5jYWxsKG4sZSkpLG59LGluQXJyYXk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT10Py0xOmkuY2FsbCh0LGUsbil9LG1lcmdlOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPSt0Lmxlbmd0aCxyPTAsaT1lLmxlbmd0aDtyPG47cisrKWVbaSsrXT10W3JdO3JldHVybiBlLmxlbmd0aD1pLGV9LGdyZXA6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1bXSxpPTAsbz1lLmxlbmd0aCxhPSFuO2k8bztpKyspIXQoZVtpXSxpKSE9PWEmJnIucHVzaChlW2ldKTtyZXR1cm4gcn0sbWFwOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89MCxhPVtdO2lmKHAoZSkpZm9yKHI9ZS5sZW5ndGg7bzxyO28rKyludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtlbHNlIGZvcihvIGluIGUpbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7cmV0dXJuIGcoYSl9LGd1aWQ6MSxzdXBwb3J0Onl9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihTLmZuW1N5bWJvbC5pdGVyYXRvcl09dFtTeW1ib2wuaXRlcmF0b3JdKSxTLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pO3ZhciBkPWZ1bmN0aW9uKG4pe3ZhciBlLGQsYixvLGksaCxmLGcsdyx1LGwsVCxDLGEsRSx2LHMsYyx5LFM9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHA9bi5kb2N1bWVudCxrPTAscj0wLG09dWUoKSx4PXVlKCksQT11ZSgpLE49dWUoKSxEPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10JiYobD0hMCksMH0saj17fS5oYXNPd25Qcm9wZXJ0eSx0PVtdLHE9dC5wb3AsTD10LnB1c2gsSD10LnB1c2gsTz10LnNsaWNlLFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspaWYoZVtuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LFI9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLEk9XCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixXPVwiXFxcXFtcIitNK1wiKihcIitJK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0krXCIpKXwpXCIrTStcIipcXFxcXVwiLEY9XCI6KFwiK0krXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1crXCIpKil8LiopXFxcXCl8KVwiLEI9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSwkPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSxVPW5ldyBSZWdFeHAoTStcInw+XCIpLFg9bmV3IFJlZ0V4cChGKSxWPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksRz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrVyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrRiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1IrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxcZCQvaSxLPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFwoW15cXFxcclxcXFxuXFxcXGZdKVwiLFwiZ1wiKSxuZT1mdW5jdGlvbihlLHQpe3ZhciBuPVwiMHhcIitlLnNsaWNlKDEpLTY1NTM2O3JldHVybiB0fHwobjwwP1N0cmluZy5mcm9tQ2hhckNvZGUobis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShuPj4xMHw1NTI5NiwxMDIzJm58NTYzMjApKX0scmU9LyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csaWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD9cIlxcMFwiPT09ZT9cIlxcdWZmZmRcIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5kaXNhYmxlZCYmXCJmaWVsZHNldFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpfSx7ZGlyOlwicGFyZW50Tm9kZVwiLG5leHQ6XCJsZWdlbmRcIn0pO3RyeXtILmFwcGx5KHQ9Ty5jYWxsKHAuY2hpbGROb2RlcykscC5jaGlsZE5vZGVzKSx0W3AuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGUpe0g9e2FwcGx5OnQubGVuZ3RoP2Z1bmN0aW9uKGUsdCl7TC5hcHBseShlLE8uY2FsbCh0KSl9OmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5sZW5ndGgscj0wO3doaWxlKGVbbisrXT10W3IrK10pO2UubGVuZ3RoPW4tMX19fWZ1bmN0aW9uIHNlKHQsZSxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGY9ZSYmZS5vd25lckRvY3VtZW50LHA9ZT9lLm5vZGVUeXBlOjk7aWYobj1ufHxbXSxcInN0cmluZ1wiIT10eXBlb2YgdHx8IXR8fDEhPT1wJiY5IT09cCYmMTEhPT1wKXJldHVybiBuO2lmKCFyJiYoVChlKSxlPWV8fEMsRSkpe2lmKDExIT09cCYmKHU9Wi5leGVjKHQpKSlpZihpPXVbMV0pe2lmKDk9PT1wKXtpZighKGE9ZS5nZXRFbGVtZW50QnlJZChpKSkpcmV0dXJuIG47aWYoYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2UgaWYoZiYmKGE9Zi5nZXRFbGVtZW50QnlJZChpKSkmJnkoZSxhKSYmYS5pZD09PWkpcmV0dXJuIG4ucHVzaChhKSxufWVsc2V7aWYodVsyXSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodCkpLG47aWYoKGk9dVszXSkmJmQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGkpKSxufWlmKGQucXNhJiYhTlt0K1wiIFwiXSYmKCF2fHwhdi50ZXN0KHQpKSYmKDEhPT1wfHxcIm9iamVjdFwiIT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSl7aWYoYz10LGY9ZSwxPT09cCYmKFUudGVzdCh0KXx8ei50ZXN0KHQpKSl7KGY9ZWUudGVzdCh0KSYmeWUoZS5wYXJlbnROb2RlKXx8ZSk9PT1lJiZkLnNjb3BlfHwoKHM9ZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1zLnJlcGxhY2UocmUsaWUpOmUuc2V0QXR0cmlidXRlKFwiaWRcIixzPVMpKSxvPShsPWgodCkpLmxlbmd0aDt3aGlsZShvLS0pbFtvXT0ocz9cIiNcIitzOlwiOnNjb3BlXCIpK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKX10cnl7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7Tih0LCEwKX1maW5hbGx5e3M9PT1TJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKCQsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW1NdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXt2YXIgbj1lLnNwbGl0KFwifFwiKSxyPW4ubGVuZ3RoO3doaWxlKHItLSliLmF0dHJIYW5kbGVbbltyXV09dH1mdW5jdGlvbiBwZShlLHQpe3ZhciBuPXQmJmUscj1uJiYxPT09ZS5ub2RlVHlwZSYmMT09PXQubm9kZVR5cGUmJmUuc291cmNlSW5kZXgtdC5zb3VyY2VJbmRleDtpZihyKXJldHVybiByO2lmKG4pd2hpbGUobj1uLm5leHRTaWJsaW5nKWlmKG49PT10KXJldHVybi0xO3JldHVybiBlPzE6LTF9ZnVuY3Rpb24gZGUodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmZS50eXBlPT09dH19ZnVuY3Rpb24gaGUobil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09dHx8XCJidXR0b25cIj09PXQpJiZlLnR5cGU9PT1ufX1mdW5jdGlvbiBnZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJmb3JtXCJpbiBlP2UucGFyZW50Tm9kZSYmITE9PT1lLmRpc2FibGVkP1wibGFiZWxcImluIGU/XCJsYWJlbFwiaW4gZS5wYXJlbnROb2RlP2UucGFyZW50Tm9kZS5kaXNhYmxlZD09PXQ6ZS5kaXNhYmxlZD09PXQ6ZS5pc0Rpc2FibGVkPT09dHx8ZS5pc0Rpc2FibGVkIT09IXQmJmFlKGUpPT09dDplLmRpc2FibGVkPT09dDpcImxhYmVsXCJpbiBlJiZlLmRpc2FibGVkPT09dH19ZnVuY3Rpb24gdmUoYSl7cmV0dXJuIGxlKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKFtdLGUubGVuZ3RoLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pfSl9ZnVuY3Rpb24geWUoZSl7cmV0dXJuIGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZlfWZvcihlIGluIGQ9c2Uuc3VwcG9ydD17fSxpPXNlLmlzWE1MPWZ1bmN0aW9uKGUpe3ZhciB0PWUubmFtZXNwYWNlVVJJLG49KGUub3duZXJEb2N1bWVudHx8ZSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiFZLnRlc3QodHx8biYmbi5ub2RlTmFtZXx8XCJIVE1MXCIpfSxUPXNlLnNldERvY3VtZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG4scj1lP2Uub3duZXJEb2N1bWVudHx8ZTpwO3JldHVybiByIT1DJiY5PT09ci5ub2RlVHlwZSYmci5kb2N1bWVudEVsZW1lbnQmJihhPShDPXIpLmRvY3VtZW50RWxlbWVudCxFPSFpKEMpLHAhPUMmJihuPUMuZGVmYXVsdFZpZXcpJiZuLnRvcCE9PW4mJihuLmFkZEV2ZW50TGlzdGVuZXI/bi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLG9lKSksZC5zY29wZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChDLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGwmJiFlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6c2NvcGUgZmllbGRzZXQgZGl2XCIpLmxlbmd0aH0pLGQuYXR0cmlidXRlcz1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksZC5nZXRFbGVtZW50c0J5VGFnTmFtZT1jZShmdW5jdGlvbihlKXtyZXR1cm4gZS5hcHBlbmRDaGlsZChDLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmlkPVMsIUMuZ2V0RWxlbWVudHNCeU5hbWV8fCFDLmdldEVsZW1lbnRzQnlOYW1lKFMpLmxlbmd0aH0pLGQuZ2V0QnlJZD8oYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT10fX0sYi5maW5kLklEPWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQmJkUpe3ZhciBuPXQuZ2V0RWxlbWVudEJ5SWQoZSk7cmV0dXJuIG4/W25dOltdfX0pOihiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgbj1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG4scixpLG89dC5nZXRFbGVtZW50QnlJZChlKTtpZihvKXtpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXTtpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO3doaWxlKG89aVtyKytdKWlmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dfXJldHVybltdfX0pLGIuZmluZC5UQUc9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihlLHQpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlUYWdOYW1lP3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk6ZC5xc2E/dC5xdWVyeVNlbGVjdG9yQWxsKGUpOnZvaWQgMH06ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9MCxvPXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZSk7aWYoXCIqXCI9PT1lKXt3aGlsZShuPW9baSsrXSkxPT09bi5ub2RlVHlwZSYmci5wdXNoKG4pO3JldHVybiByfXJldHVybiBvfSxiLmZpbmQuQ0xBU1M9ZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx2PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZShmdW5jdGlvbihlKXt2YXIgdDthLmFwcGVuZENoaWxkKGUpLmlubmVySFRNTD1cIjxhIGlkPSdcIitTK1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrUytcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmdi5wdXNoKFwiWypeJF09XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIiooPzp2YWx1ZXxcIitSK1wiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK1MrXCItXVwiKS5sZW5ndGh8fHYucHVzaChcIn49XCIpLCh0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJcIiksZS5hcHBlbmRDaGlsZCh0KSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT0nJ11cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqbmFtZVwiK00rXCIqPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8di5wdXNoKFwiOmNoZWNrZWRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIitTK1wiKypcIikubGVuZ3RofHx2LnB1c2goXCIuIy4rWyt+XVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJcXFxcXFxmXCIpLHYucHVzaChcIltcXFxcclxcXFxuXFxcXGZdXCIpfSksY2UoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ2LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHYucHVzaChcIiwuKjpcIil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSxcIipcIiksYy5jYWxsKGUsXCJbcyE9JyddOnhcIikscy5wdXNoKFwiIT1cIixGKX0pLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx5PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LEQ9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmeShwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmeShwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7bj1lO3doaWxlKG49bi5wYXJlbnROb2RlKWEudW5zaGlmdChuKTtuPXQ7d2hpbGUobj1uLnBhcmVudE5vZGUpcy51bnNoaWZ0KG4pO3doaWxlKGFbcl09PT1zW3JdKXIrKztyZXR1cm4gcj9wZShhW3JdLHNbcl0pOmFbcl09PXA/LTE6c1tyXT09cD8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZihUKGUpLGQubWF0Y2hlc1NlbGVjdG9yJiZFJiYhTlt0K1wiIFwiXSYmKCFzfHwhcy50ZXN0KHQpKSYmKCF2fHwhdi50ZXN0KHQpKSl0cnl7dmFyIG49Yy5jYWxsKGUsdCk7aWYobnx8ZC5kaXNjb25uZWN0ZWRNYXRjaHx8ZS5kb2N1bWVudCYmMTEhPT1lLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBufWNhdGNoKGUpe04odCwhMCl9cmV0dXJuIDA8c2UodCxDLG51bGwsW2VdKS5sZW5ndGh9LHNlLmNvbnRhaW5zPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSkseShlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPUMmJlQoZSk7dmFyIG49Yi5hdHRySGFuZGxlW3QudG9Mb3dlckNhc2UoKV0scj1uJiZqLmNhbGwoYi5hdHRySGFuZGxlLHQudG9Mb3dlckNhc2UoKSk/bihlLHQsIUUpOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09cj9yOmQuYXR0cmlidXRlc3x8IUU/ZS5nZXRBdHRyaWJ1dGUodCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSxzZS5lc2NhcGU9ZnVuY3Rpb24oZSl7cmV0dXJuKGUrXCJcIikucmVwbGFjZShyZSxpZSl9LHNlLmVycm9yPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2UpfSxzZS51bmlxdWVTb3J0PWZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj0wLGk9MDtpZihsPSFkLmRldGVjdER1cGxpY2F0ZXMsdT0hZC5zb3J0U3RhYmxlJiZlLnNsaWNlKDApLGUuc29ydChEKSxsKXt3aGlsZSh0PWVbaSsrXSl0PT09ZVtpXSYmKHI9bi5wdXNoKGkpKTt3aGlsZShyLS0pZS5zcGxpY2UobltyXSwxKX1yZXR1cm4gdT1udWxsLGV9LG89c2UuZ2V0VGV4dD1mdW5jdGlvbihlKXt2YXIgdCxuPVwiXCIscj0wLGk9ZS5ub2RlVHlwZTtpZihpKXtpZigxPT09aXx8OT09PWl8fDExPT09aSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudGV4dENvbnRlbnQpcmV0dXJuIGUudGV4dENvbnRlbnQ7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKW4rPW8oZSl9ZWxzZSBpZigzPT09aXx8ND09PWkpcmV0dXJuIGUubm9kZVZhbHVlfWVsc2Ugd2hpbGUodD1lW3IrK10pbis9byh0KTtyZXR1cm4gbn0sKGI9c2Uuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86bGUsbWF0Y2g6RyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0ucmVwbGFjZSh0ZSxuZSksZVszXT0oZVszXXx8ZVs0XXx8ZVs1XXx8XCJcIikucmVwbGFjZSh0ZSxuZSksXCJ+PVwiPT09ZVsyXSYmKGVbM109XCIgXCIrZVszXStcIiBcIiksZS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWVbMV0uc2xpY2UoMCwzKT8oZVszXXx8c2UuZXJyb3IoZVswXSksZVs0XT0rKGVbNF0/ZVs1XSsoZVs2XXx8MSk6MiooXCJldmVuXCI9PT1lWzNdfHxcIm9kZFwiPT09ZVszXSkpLGVbNV09KyhlWzddK2VbOF18fFwib2RkXCI9PT1lWzNdKSk6ZVszXSYmc2UuZXJyb3IoZVswXSksZX0sUFNFVURPOmZ1bmN0aW9uKGUpe3ZhciB0LG49IWVbNl0mJmVbMl07cmV0dXJuIEcuQ0hJTEQudGVzdChlWzBdKT9udWxsOihlWzNdP2VbMl09ZVs0XXx8ZVs1XXx8XCJcIjpuJiZYLnRlc3QobikmJih0PWgobiwhMCkpJiYodD1uLmluZGV4T2YoXCIpXCIsbi5sZW5ndGgtdCktbi5sZW5ndGgpJiYoZVswXT1lWzBdLnNsaWNlKDAsdCksZVsyXT1uLnNsaWNlKDAsdCkpLGUuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1lP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10fX0sQ0xBU1M6ZnVuY3Rpb24oZSl7dmFyIHQ9bVtlK1wiIFwiXTtyZXR1cm4gdHx8KHQ9bmV3IFJlZ0V4cChcIihefFwiK00rXCIpXCIrZStcIihcIitNK1wifCQpXCIpKSYmbShlLGZ1bmN0aW9uKGUpe3JldHVybiB0LnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGUuY2xhc3NOYW1lJiZlLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKG4scixpKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9c2UuYXR0cihlLG4pO3JldHVybiBudWxsPT10P1wiIT1cIj09PXI6IXJ8fCh0Kz1cIlwiLFwiPVwiPT09cj90PT09aTpcIiE9XCI9PT1yP3QhPT1pOlwiXj1cIj09PXI/aSYmMD09PXQuaW5kZXhPZihpKTpcIio9XCI9PT1yP2kmJi0xPHQuaW5kZXhPZihpKTpcIiQ9XCI9PT1yP2kmJnQuc2xpY2UoLWkubGVuZ3RoKT09PWk6XCJ+PVwiPT09cj8tMTwoXCIgXCIrdC5yZXBsYWNlKEIsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGkpOlwifD1cIj09PXImJih0PT09aXx8dC5zbGljZSgwLGkubGVuZ3RoKzEpPT09aStcIi1cIikpfX0sQ0hJTEQ6ZnVuY3Rpb24oaCxlLHQsZyx2KXt2YXIgeT1cIm50aFwiIT09aC5zbGljZSgwLDMpLG09XCJsYXN0XCIhPT1oLnNsaWNlKC00KSx4PVwib2YtdHlwZVwiPT09ZTtyZXR1cm4gMT09PWcmJjA9PT12P2Z1bmN0aW9uKGUpe3JldHVybiEhZS5wYXJlbnROb2RlfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGw9eSE9PW0/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIsYz1lLnBhcmVudE5vZGUsZj14JiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscD0hbiYmIXgsZD0hMTtpZihjKXtpZih5KXt3aGlsZShsKXthPWU7d2hpbGUoYT1hW2xdKWlmKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSlyZXR1cm4hMTt1PWw9XCJvbmx5XCI9PT1oJiYhdSYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKHU9W20/Yy5maXJzdENoaWxkOmMubGFzdENoaWxkXSxtJiZwKXtkPShzPShyPShpPShvPShhPWMpW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1rJiZyWzFdKSYmclsyXSxhPXMmJmMuY2hpbGROb2Rlc1tzXTt3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZCl3aGlsZShhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSlpZigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKSYmKytkJiYocCYmKChpPShvPWFbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF09W2ssZF0pLGE9PT1lKSlicmVhaztyZXR1cm4oZC09dik9PT1nfHxkJWc9PTAmJjA8PWQvZ319fSxQU0VVRE86ZnVuY3Rpb24oZSxvKXt2YXIgdCxhPWIucHNldWRvc1tlXXx8Yi5zZXRGaWx0ZXJzW2UudG9Mb3dlckNhc2UoKV18fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitlKTtyZXR1cm4gYVtTXT9hKG8pOjE8YS5sZW5ndGg/KHQ9W2UsZSxcIlwiLG9dLGIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShlLnRvTG93ZXJDYXNlKCkpP2xlKGZ1bmN0aW9uKGUsdCl7dmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPVAoZSxyW2ldKV09ISh0W25dPXJbaV0pfSk6ZnVuY3Rpb24oZSl7cmV0dXJuIGEoZSwwLHQpfSk6YX19LHBzZXVkb3M6e25vdDpsZShmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoJCxcIiQxXCIpKTtyZXR1cm4gc1tTXT9sZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvPXMoZSxudWxsLHIsW10pLGE9ZS5sZW5ndGg7d2hpbGUoYS0tKShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByWzBdPWUscyhyLG51bGwsbixpKSxyWzBdPW51bGwsIWkucG9wKCl9fSksaGFzOmxlKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSxjb250YWluczpsZShmdW5jdGlvbih0KXtyZXR1cm4gdD10LnJlcGxhY2UodGUsbmUpLGZ1bmN0aW9uKGUpe3JldHVybi0xPChlLnRleHRDb250ZW50fHxvKGUpKS5pbmRleE9mKHQpfX0pLGxhbmc6bGUoZnVuY3Rpb24obil7cmV0dXJuIFYudGVzdChufHxcIlwiKXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIituKSxuPW4ucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihlKXt2YXIgdDtkb3tpZih0PUU/ZS5sYW5nOmUuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGUuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4odD10LnRvTG93ZXJDYXNlKCkpPT09bnx8MD09PXQuaW5kZXhPZihuK1wiLVwiKX13aGlsZSgoZT1lLnBhcmVudE5vZGUpJiYxPT09ZS5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGUpe3ZhciB0PW4ubG9jYXRpb24mJm4ubG9jYXRpb24uaGFzaDtyZXR1cm4gdCYmdC5zbGljZSgxKT09PWUuaWR9LHJvb3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1hfSxmb2N1czpmdW5jdGlvbihlKXtyZXR1cm4gZT09PUMuYWN0aXZlRWxlbWVudCYmKCFDLmhhc0ZvY3VzfHxDLmhhc0ZvY3VzKCkpJiYhIShlLnR5cGV8fGUuaHJlZnx8fmUudGFiSW5kZXgpfSxlbmFibGVkOmdlKCExKSxkaXNhYmxlZDpnZSghMCksY2hlY2tlZDpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmISFlLmNoZWNrZWR8fFwib3B0aW9uXCI9PT10JiYhIWUuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnBhcmVudE5vZGUmJmUucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LCEwPT09ZS5zZWxlY3RlZH0sZW1wdHk6ZnVuY3Rpb24oZSl7Zm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWlmKGUubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGUpe3JldHVybiFiLnBzZXVkb3MuZW1wdHkoZSl9LGhlYWRlcjpmdW5jdGlvbihlKXtyZXR1cm4gSi50ZXN0KGUubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihlKXtyZXR1cm4gUS50ZXN0KGUubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJlwiYnV0dG9uXCI9PT1lLnR5cGV8fFwiYnV0dG9uXCI9PT10fSx0ZXh0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVyblwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1lLnR5cGUmJihudWxsPT0odD1lLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PXQudG9Mb3dlckNhc2UoKSl9LGZpcnN0OnZlKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDp2ZShmdW5jdGlvbihlLHQpe3JldHVyblt0LTFdfSksZXE6dmUoZnVuY3Rpb24oZSx0LG4pe3JldHVybltuPDA/bit0Om5dfSksZXZlbjp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLG9kZDp2ZShmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0xO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pLGx0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDp0PG4/dDpuOzA8PS0tcjspZS5wdXNoKHIpO3JldHVybiBlfSksZ3Q6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pfX0pLnBzZXVkb3MubnRoPWIucHNldWRvcy5lcSx7cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pYi5wc2V1ZG9zW2VdPWRlKGUpO2ZvcihlIGlue3N1Ym1pdDohMCxyZXNldDohMH0pYi5wc2V1ZG9zW2VdPWhlKGUpO2Z1bmN0aW9uIG1lKCl7fWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0wLG49ZS5sZW5ndGgscj1cIlwiO3Q8bjt0Kyspcis9ZVt0XS52YWx1ZTtyZXR1cm4gcn1mdW5jdGlvbiBiZShzLGUsdCl7dmFyIHU9ZS5kaXIsbD1lLm5leHQsYz1sfHx1LGY9dCYmXCJwYXJlbnROb2RlXCI9PT1jLHA9cisrO3JldHVybiBlLmZpcnN0P2Z1bmN0aW9uKGUsdCxuKXt3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpcmV0dXJuIHMoZSx0LG4pO3JldHVybiExfTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9W2sscF07aWYobil7d2hpbGUoZT1lW3VdKWlmKCgxPT09ZS5ub2RlVHlwZXx8ZikmJnMoZSx0LG4pKXJldHVybiEwfWVsc2Ugd2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKWlmKGk9KG89ZVtTXXx8KGVbU109e30pKVtlLnVuaXF1ZUlEXXx8KG9bZS51bmlxdWVJRF09e30pLGwmJmw9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpZT1lW3VdfHxlO2Vsc2V7aWYoKHI9aVtjXSkmJnJbMF09PT1rJiZyWzFdPT09cClyZXR1cm4gYVsyXT1yWzJdO2lmKChpW2NdPWEpWzJdPXMoZSx0LG4pKXJldHVybiEwfXJldHVybiExfX1mdW5jdGlvbiB3ZShpKXtyZXR1cm4gMTxpLmxlbmd0aD9mdW5jdGlvbihlLHQsbil7dmFyIHI9aS5sZW5ndGg7d2hpbGUoci0tKWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHYseSxlKXtyZXR1cm4gdiYmIXZbU10mJih2PUNlKHYpKSx5JiYheVtTXSYmKHk9Q2UoeSxlKSksbGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9W10sdT1bXSxsPXQubGVuZ3RoLGM9ZXx8ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj0wLGk9dC5sZW5ndGg7cjxpO3IrKylzZShlLHRbcl0sbik7cmV0dXJuIG59KGh8fFwiKlwiLG4ubm9kZVR5cGU/W25dOm4sW10pLGY9IWR8fCFlJiZoP2M6VGUoYyxzLGQsbixyKSxwPWc/eXx8KGU/ZDpsfHx2KT9bXTp0OmY7aWYoZyYmZyhmLHAsbixyKSx2KXtpPVRlKHAsdSksdihpLFtdLG4sciksbz1pLmxlbmd0aDt3aGlsZShvLS0pKGE9aVtvXSkmJihwW3Vbb11dPSEoZlt1W29dXT1hKSl9aWYoZSl7aWYoeXx8ZCl7aWYoeSl7aT1bXSxvPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmaS5wdXNoKGZbb109YSk7eShudWxsLHA9W10saSxyKX1vPXAubGVuZ3RoO3doaWxlKG8tLSkoYT1wW29dKSYmLTE8KGk9eT9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx5P3kobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSl9ZnVuY3Rpb24gRWUoZSl7Zm9yKHZhciBpLHQsbixyPWUubGVuZ3RoLG89Yi5yZWxhdGl2ZVtlWzBdLnR5cGVdLGE9b3x8Yi5yZWxhdGl2ZVtcIiBcIl0scz1vPzE6MCx1PWJlKGZ1bmN0aW9uKGUpe3JldHVybiBlPT09aX0sYSwhMCksbD1iZShmdW5jdGlvbihlKXtyZXR1cm4tMTxQKGksZSl9LGEsITApLGM9W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj0hbyYmKG58fHQhPT13KXx8KChpPXQpLm5vZGVUeXBlP3UoZSx0LG4pOmwoZSx0LG4pKTtyZXR1cm4gaT1udWxsLHJ9XTtzPHI7cysrKWlmKHQ9Yi5yZWxhdGl2ZVtlW3NdLnR5cGVdKWM9W2JlKHdlKGMpLHQpXTtlbHNle2lmKCh0PWIuZmlsdGVyW2Vbc10udHlwZV0uYXBwbHkobnVsbCxlW3NdLm1hdGNoZXMpKVtTXSl7Zm9yKG49KytzO248cjtuKyspaWYoYi5yZWxhdGl2ZVtlW25dLnR5cGVdKWJyZWFrO3JldHVybiBDZSgxPHMmJndlKGMpLDE8cyYmeGUoZS5zbGljZSgwLHMtMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWVbcy0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZSgkLFwiJDFcIiksdCxzPG4mJkVlKGUuc2xpY2UocyxuKSksbjxyJiZFZShlPWUuc2xpY2UobikpLG48ciYmeGUoZSkpfWMucHVzaCh0KX1yZXR1cm4gd2UoYyl9cmV0dXJuIG1lLnByb3RvdHlwZT1iLmZpbHRlcnM9Yi5wc2V1ZG9zLGIuc2V0RmlsdGVycz1uZXcgbWUsaD1zZS50b2tlbml6ZT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscyx1LGw9eFtlK1wiIFwiXTtpZihsKXJldHVybiB0PzA6bC5zbGljZSgwKTthPWUscz1bXSx1PWIucHJlRmlsdGVyO3doaWxlKGEpe2ZvcihvIGluIG4mJiEocj1fLmV4ZWMoYSkpfHwociYmKGE9YS5zbGljZShyWzBdLmxlbmd0aCl8fGEpLHMucHVzaChpPVtdKSksbj0hMSwocj16LmV4ZWMoYSkpJiYobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6clswXS5yZXBsYWNlKCQsXCIgXCIpfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSksYi5maWx0ZXIpIShyPUdbb10uZXhlYyhhKSl8fHVbb10mJiEocj11W29dKHIpKXx8KG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOm8sbWF0Y2hlczpyfSksYT1hLnNsaWNlKG4ubGVuZ3RoKSk7aWYoIW4pYnJlYWt9cmV0dXJuIHQ/YS5sZW5ndGg6YT9zZS5lcnJvcihlKTp4KGUscykuc2xpY2UoMCl9LGY9c2UuY29tcGlsZT1mdW5jdGlvbihlLHQpe3ZhciBuLHYseSxtLHgscixpPVtdLG89W10sYT1BW2UrXCIgXCJdO2lmKCFhKXt0fHwodD1oKGUpKSxuPXQubGVuZ3RoO3doaWxlKG4tLSkoYT1FZSh0W25dKSlbU10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHY9byxtPTA8KHk9aSkubGVuZ3RoLHg9MDx2Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2E9MCx0fHxvLm93bmVyRG9jdW1lbnQ9PUN8fChUKG8pLG49IUUpO3doaWxlKHM9dlthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKGs9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9eVthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUreS5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihrPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1TLnNwbGl0KFwiXCIpLnNvcnQoRCkuam9pbihcIlwiKT09PVMsZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtTLmZpbmQ9ZCxTLmV4cHI9ZC5zZWxlY3RvcnMsUy5leHByW1wiOlwiXT1TLmV4cHIucHNldWRvcyxTLnVuaXF1ZVNvcnQ9Uy51bmlxdWU9ZC51bmlxdWVTb3J0LFMudGV4dD1kLmdldFRleHQsUy5pc1hNTERvYz1kLmlzWE1MLFMuY29udGFpbnM9ZC5jb250YWlucyxTLmVzY2FwZVNlbGVjdG9yPWQuZXNjYXBlO3ZhciBoPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZTKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1TLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIEQoZSxuLHIpe3JldHVybiBtKG4pP1MuZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP1MuZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/Uy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpTLmZpbmQubWF0Y2hlcyhlLFMuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0sUy5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soUyhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylTLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/Uy51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhRCh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZrLnRlc3QoZSk/UyhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBqLHE9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KFMuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fGosXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpxLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIFM/dFswXTp0LFMubWVyZ2UodGhpcyxTLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxOLnRlc3QoclsxXSkmJlMuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKFMpOlMubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9Uy5mbixqPVMoRSk7dmFyIEw9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSD17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBPKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PVMoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoUy5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJlMoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/Uy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoUyhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMudW5pcXVlU29ydChTLm1lcmdlKHRoaXMuZ2V0KCksUyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxTLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxTLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24ocixpKXtTLmZuW3JdPWZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5tYXAodGhpcyxpLGUpO3JldHVyblwiVW50aWxcIiE9PXIuc2xpY2UoLTUpJiYodD1lKSx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49Uy5maWx0ZXIodCxuKSksMTx0aGlzLmxlbmd0aCYmKEhbcl18fFMudW5pcXVlU29ydChuKSxMLnRlc3QocikmJm4ucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgUD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gUihlKXtyZXR1cm4gZX1mdW5jdGlvbiBNKGUpe3Rocm93IGV9ZnVuY3Rpb24gSShlLHQsbixyKXt2YXIgaTt0cnl7ZSYmbShpPWUucHJvbWlzZSk/aS5jYWxsKGUpLmRvbmUodCkuZmFpbChuKTplJiZtKGk9ZS50aGVuKT9pLmNhbGwoZSx0LG4pOnQuYXBwbHkodm9pZCAwLFtlXS5zbGljZShyKSl9Y2F0Y2goZSl7bi5hcHBseSh2b2lkIDAsW2VdKX19Uy5DYWxsYmFja3M9ZnVuY3Rpb24ocil7dmFyIGUsbjtyPVwic3RyaW5nXCI9PXR5cGVvZiByPyhlPXIsbj17fSxTLmVhY2goZS5tYXRjaChQKXx8W10sZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSksbik6Uy5leHRlbmQoe30scik7dmFyIGksdCxvLGEscz1bXSx1PVtdLGw9LTEsYz1mdW5jdGlvbigpe2ZvcihhPWF8fHIub25jZSxvPWk9ITA7dS5sZW5ndGg7bD0tMSl7dD11LnNoaWZ0KCk7d2hpbGUoKytsPHMubGVuZ3RoKSExPT09c1tsXS5hcHBseSh0WzBdLHRbMV0pJiZyLnN0b3BPbkZhbHNlJiYobD1zLmxlbmd0aCx0PSExKX1yLm1lbW9yeXx8KHQ9ITEpLGk9ITEsYSYmKHM9dD9bXTpcIlwiKX0sZj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIHMmJih0JiYhaSYmKGw9cy5sZW5ndGgtMSx1LnB1c2godCkpLGZ1bmN0aW9uIG4oZSl7Uy5lYWNoKGUsZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pfShhcmd1bWVudHMpLHQmJiFpJiZjKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBTLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGUsdCl7dmFyIG47d2hpbGUoLTE8KG49Uy5pbkFycmF5KHQscyxuKSkpcy5zcGxpY2UobiwxKSxuPD1sJiZsLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/LTE8Uy5pbkFycmF5KGUscyk6MDxzLmxlbmd0aH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHM9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHM9dD1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIXN9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gYT11PVtdLHR8fGl8fChzPXQ9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFhfSxmaXJlV2l0aDpmdW5jdGlvbihlLHQpe3JldHVybiBhfHwodD1bZSwodD10fHxbXSkuc2xpY2U/dC5zbGljZSgpOnRdLHUucHVzaCh0KSxpfHxjKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW99fTtyZXR1cm4gZn0sUy5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGUpe3ZhciBvPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0saT1cInBlbmRpbmdcIixhPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBpfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gcy5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gYS50aGVuKG51bGwsZSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgaT1hcmd1bWVudHM7cmV0dXJuIFMuRGVmZXJyZWQoZnVuY3Rpb24ocil7Uy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oZnVuY3Rpb24oKXt2YXIgZT1uJiZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtlJiZtKGUucHJvbWlzZSk/ZS5wcm9taXNlKCkucHJvZ3Jlc3Moci5ub3RpZnkpLmRvbmUoci5yZXNvbHZlKS5mYWlsKHIucmVqZWN0KTpyW3RbMF0rXCJXaXRoXCJdKHRoaXMsbj9bZV06YXJndW1lbnRzKX0pfSksaT1udWxsfSkucHJvbWlzZSgpfSx0aGVuOmZ1bmN0aW9uKHQsbixyKXt2YXIgdT0wO2Z1bmN0aW9uIGwoaSxvLGEscyl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49dGhpcyxyPWFyZ3VtZW50cyxlPWZ1bmN0aW9uKCl7dmFyIGUsdDtpZighKGk8dSkpe2lmKChlPWEuYXBwbHkobixyKSk9PT1vLnByb21pc2UoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO3Q9ZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmZS50aGVuLG0odCk/cz90LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scykpOih1KyssdC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpLGwodSxvLFIsby5ub3RpZnlXaXRoKSkpOihhIT09UiYmKG49dm9pZCAwLHI9W2VdKSwoc3x8by5yZXNvbHZlV2l0aCkobixyKSl9fSx0PXM/ZTpmdW5jdGlvbigpe3RyeXtlKCl9Y2F0Y2goZSl7Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSx0LnN0YWNrVHJhY2UpLHU8PWkrMSYmKGEhPT1NJiYobj12b2lkIDAscj1bZV0pLG8ucmVqZWN0V2l0aChuLHIpKX19O2k/dCgpOihTLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKHQuc3RhY2tUcmFjZT1TLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxDLnNldFRpbWVvdXQodCkpfX1yZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihlKXtvWzBdWzNdLmFkZChsKDAsZSxtKHIpP3I6UixlLm5vdGlmeVdpdGgpKSxvWzFdWzNdLmFkZChsKDAsZSxtKHQpP3Q6UikpLG9bMl1bM10uYWRkKGwoMCxlLG0obik/bjpNKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sZnVuY3Rpb24oZSx0KXt2YXIgbj10WzJdLHI9dFs1XTthW3RbMV1dPW4uYWRkLHImJm4uYWRkKGZ1bmN0aW9uKCl7aT1yfSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pLGEucHJvbWlzZShzKSxlJiZlLmNhbGwocyxzKSxzfSx3aGVuOmZ1bmN0aW9uKGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgsdD1uLHI9QXJyYXkodCksaT1zLmNhbGwoYXJndW1lbnRzKSxvPVMuRGVmZXJyZWQoKSxhPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyW3RdPXRoaXMsaVt0XT0xPGFyZ3VtZW50cy5sZW5ndGg/cy5jYWxsKGFyZ3VtZW50cyk6ZSwtLW58fG8ucmVzb2x2ZVdpdGgocixpKX19O2lmKG48PTEmJihJKGUsby5kb25lKGEodCkpLnJlc29sdmUsby5yZWplY3QsIW4pLFwicGVuZGluZ1wiPT09by5zdGF0ZSgpfHxtKGlbdF0mJmlbdF0udGhlbikpKXJldHVybiBvLnRoZW4oKTt3aGlsZSh0LS0pSShpW3RdLGEodCksby5yZWplY3QpO3JldHVybiBvLnByb21pc2UoKX19KTt2YXIgVz0vXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZSx0KXtDLmNvbnNvbGUmJkMuY29uc29sZS53YXJuJiZlJiZXLnRlc3QoZS5uYW1lKSYmQy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlLm1lc3NhZ2UsZS5zdGFjayx0KX0sUy5yZWFkeUV4Y2VwdGlvbj1mdW5jdGlvbihlKXtDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlfSl9O3ZhciBGPVMuRGVmZXJyZWQoKTtmdW5jdGlvbiBCKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZSl7Uy5yZWFkeUV4Y2VwdGlvbihlKX0pLHRoaXN9LFMuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1TLnJlYWR5V2FpdDpTLmlzUmVhZHkpfHwoUy5pc1JlYWR5PSEwKSE9PWUmJjA8LS1TLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtTXSl9fSksUy5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpKTt2YXIgJD1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbikkKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPVMuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7d2hpbGUobi0tKWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1TLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLFMuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1YKHIuc2xpY2UoNSkpLFoobyxyLGlbcl0pKTtZLnNldChvLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBpfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBuP3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KTokKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ7aWYobyYmdm9pZCAwPT09ZSlyZXR1cm4gdm9pZCAwIT09KHQ9US5nZXQobyxuKSk/dDp2b2lkIDAhPT0odD1aKG8sbikpP3Q6dm9pZCAwO3RoaXMuZWFjaChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pfSxudWxsLGUsMTxhcmd1bWVudHMubGVuZ3RoLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSl9fSksUy5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZihlKXJldHVybiB0PSh0fHxcImZ4XCIpK1wicXVldWVcIixyPVkuZ2V0KGUsdCksbiYmKCFyfHxBcnJheS5pc0FycmF5KG4pP3I9WS5hY2Nlc3MoZSx0LFMubWFrZUFycmF5KG4pKTpyLnB1c2gobikpLHJ8fFtdfSxkZXF1ZXVlOmZ1bmN0aW9uKGUsdCl7dD10fHxcImZ4XCI7dmFyIG49Uy5xdWV1ZShlLHQpLHI9bi5sZW5ndGgsaT1uLnNoaWZ0KCksbz1TLl9xdWV1ZUhvb2tzKGUsdCk7XCJpbnByb2dyZXNzXCI9PT1pJiYoaT1uLnNoaWZ0KCksci0tKSxpJiYoXCJmeFwiPT09dCYmbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgby5zdG9wLGkuY2FsbChlLGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKGUsdCl9LG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1kucmVtb3ZlKGUsW3QrXCJxdWV1ZVwiLG5dKX0pfSl9fSksUy5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKHQsbil7dmFyIGU9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgdCYmKG49dCx0PVwiZnhcIixlLS0pLGFyZ3VtZW50cy5sZW5ndGg8ZT9TLnF1ZXVlKHRoaXNbMF0sdCk6dm9pZCAwPT09bj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPVMucXVldWUodGhpcyx0LG4pO1MuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJlMuZGVxdWV1ZSh0aGlzLHQpfSl9LGRlcXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZGVxdWV1ZSh0aGlzLGUpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPVMuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLGU9ZXx8XCJmeFwiO3doaWxlKGEtLSkobj1ZLmdldChvW2FdLGUrXCJxdWV1ZUhvb2tzXCIpKSYmbi5lbXB0eSYmKHIrKyxuLmVtcHR5LmFkZChzKSk7cmV0dXJuIHMoKSxpLnByb21pc2UodCl9fSk7dmFyIGVlPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSx0ZT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitlZStcIikoW2EteiVdKikkXCIsXCJpXCIpLG5lPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxyZT1FLmRvY3VtZW50RWxlbWVudCxpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl9LG9lPXtjb21wb3NlZDohMH07cmUuZ2V0Um9vdE5vZGUmJihpZT1mdW5jdGlvbihlKXtyZXR1cm4gUy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSl8fGUuZ2V0Um9vdE5vZGUob2UpPT09ZS5vd25lckRvY3VtZW50fSk7dmFyIGFlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJub25lXCI9PT0oZT10fHxlKS5zdHlsZS5kaXNwbGF5fHxcIlwiPT09ZS5zdHlsZS5kaXNwbGF5JiZpZShlKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiKX07ZnVuY3Rpb24gc2UoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBTLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KFMuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihTLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZ0ZS5leGVjKFMuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlTLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsUy5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciB1ZT17fTtmdW5jdGlvbiBsZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVkuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJmFlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9dWVbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PVMuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksdWVbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixZLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gbGUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXthZSh0aGlzKT9TKHRoaXMpLnNob3coKTpTKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx5LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix5Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIseS5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB2ZShlLHQpe3ZhciBuO3JldHVybiBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEVsZW1lbnRzQnlUYWdOYW1lP2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUodHx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnF1ZXJ5U2VsZWN0b3JBbGw/ZS5xdWVyeVNlbGVjdG9yQWxsKHR8fFwiKlwiKTpbXSx2b2lkIDA9PT10fHx0JiZBKGUsdCk/Uy5tZXJnZShbZV0sbik6bn1mdW5jdGlvbiB5ZShlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylZLnNldChlW25dLFwiZ2xvYmFsRXZhbFwiLCF0fHxZLmdldCh0W25dLFwiZ2xvYmFsRXZhbFwiKSl9Z2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZCx5Lm9wdGlvbnx8KGdlLm9wdGdyb3VwPWdlLm9wdGlvbj1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSk7dmFyIG1lPS88fCYjP1xcdys7LztmdW5jdGlvbiB4ZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhLHMsdSxsLGMsZj10LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxwPVtdLGQ9MCxoPWUubGVuZ3RoO2Q8aDtkKyspaWYoKG89ZVtkXSl8fDA9PT1vKWlmKFwib2JqZWN0XCI9PT13KG8pKVMubWVyZ2UocCxvLm5vZGVUeXBlP1tvXTpvKTtlbHNlIGlmKG1lLnRlc3Qobykpe2E9YXx8Zi5hcHBlbmRDaGlsZCh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLHM9KGRlLmV4ZWMobyl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLHU9Z2Vbc118fGdlLl9kZWZhdWx0LGEuaW5uZXJIVE1MPXVbMV0rUy5odG1sUHJlZmlsdGVyKG8pK3VbMl0sYz11WzBdO3doaWxlKGMtLSlhPWEubGFzdENoaWxkO1MubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmLnRleHRDb250ZW50PVwiXCIsZD0wO3doaWxlKG89cFtkKytdKWlmKHImJi0xPFMuaW5BcnJheShvLHIpKWkmJmkucHVzaChvKTtlbHNlIGlmKGw9aWUobyksYT12ZShmLmFwcGVuZENoaWxkKG8pLFwic2NyaXB0XCIpLGwmJnllKGEpLG4pe2M9MDt3aGlsZShvPWFbYysrXSloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKX1yZXR1cm4gZn12YXIgYmU9L15rZXkvLHdlPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxUZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIENlKCl7cmV0dXJuITB9ZnVuY3Rpb24gRWUoKXtyZXR1cm4hMX1mdW5jdGlvbiBTZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24ga2UoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpa2UoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1FZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gUygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPVMuZ3VpZCsrKSksZS5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5hZGQodGhpcyx0LGkscixuKX0pfWZ1bmN0aW9uIEFlKGUsaSxvKXtvPyhZLnNldChlLGksITEpLFMuZXZlbnQuYWRkKGUsaSx7bmFtZXNwYWNlOiExLGhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPVkuZ2V0KHRoaXMsaSk7aWYoMSZlLmlzVHJpZ2dlciYmdGhpc1tpXSl7aWYoci5sZW5ndGgpKFMuZXZlbnQuc3BlY2lhbFtpXXx8e30pLmRlbGVnYXRlVHlwZSYmZS5zdG9wUHJvcGFnYXRpb24oKTtlbHNlIGlmKHI9cy5jYWxsKGFyZ3VtZW50cyksWS5zZXQodGhpcyxpLHIpLHQ9byh0aGlzLGkpLHRoaXNbaV0oKSxyIT09KG49WS5nZXQodGhpcyxpKSl8fHQ/WS5zZXQodGhpcyxpLCExKTpuPXt9LHIhPT1uKXJldHVybiBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKSxuLnZhbHVlfWVsc2Ugci5sZW5ndGgmJihZLnNldCh0aGlzLGkse3ZhbHVlOlMuZXZlbnQudHJpZ2dlcihTLmV4dGVuZChyWzBdLFMuRXZlbnQucHJvdG90eXBlKSxyLnNsaWNlKDEpLHRoaXMpfSksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSl9fSkpOnZvaWQgMD09PVkuZ2V0KGUsaSkmJlMuZXZlbnQuYWRkKGUsaSxDZSl9Uy5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbih0LGUsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1ZLmdldCh0KTtpZihWKHQpKXtuLmhhbmRsZXImJihuPShvPW4pLmhhbmRsZXIsaT1vLnNlbGVjdG9yKSxpJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJlLGkpLG4uZ3VpZHx8KG4uZ3VpZD1TLmd1aWQrKyksKHU9di5ldmVudHMpfHwodT12LmV2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpKSwoYT12LmhhbmRsZSl8fChhPXYuaGFuZGxlPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBTJiZTLmV2ZW50LnRyaWdnZXJlZCE9PWUudHlwZT9TLmV2ZW50LmRpc3BhdGNoLmFwcGx5KHQsYXJndW1lbnRzKTp2b2lkIDB9KSxsPShlPShlfHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWQ9Zz0ocz1UZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9Uy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmUy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLFMuZXZlbnQuZ2xvYmFsW2RdPSEwKX19LHJlbW92ZTpmdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1LGwsYyxmLHAsZCxoLGcsdj1ZLmhhc0RhdGEoZSkmJlkuZ2V0KGUpO2lmKHYmJih1PXYuZXZlbnRzKSl7bD0odD0odHx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO3doaWxlKGwtLSlpZihkPWc9KHM9VGUuZXhlYyh0W2xdKXx8W10pWzFdLGg9KHNbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksZCl7Zj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHA9dVtkPShyP2YuZGVsZWdhdGVUeXBlOmYuYmluZFR5cGUpfHxkXXx8W10scz1zWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksYT1vPXAubGVuZ3RoO3doaWxlKG8tLSljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHYuaGFuZGxlKXx8Uy5yZW1vdmVFdmVudChlLGQsdi5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpUy5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtTLmlzRW1wdHlPYmplY3QodSkmJlkucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9Uy5ldmVudC5maXgoZSksbD0oWS5nZXQodGhpcyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1TLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2E9Uy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsdSxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7dS5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChTLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8UyhpLHRoaXMpLmluZGV4KGwpOlMuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShTLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkFlKHQsXCJjbGlja1wiLENlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZBZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZZLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sUy5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sUy5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFMuRXZlbnQpKXJldHVybiBuZXcgUy5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP0NlOkVlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJlMuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1tTLmV4cGFuZG9dPSEwfSxTLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Uy5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6RWUsaXNQcm9wYWdhdGlvblN0b3BwZWQ6RWUsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6RWUsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxTLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY29kZTohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihlKXt2YXIgdD1lLmJ1dHRvbjtyZXR1cm4gbnVsbD09ZS53aGljaCYmYmUudGVzdChlLnR5cGUpP251bGwhPWUuY2hhckNvZGU/ZS5jaGFyQ29kZTplLmtleUNvZGU6IWUud2hpY2gmJnZvaWQgMCE9PXQmJndlLnRlc3QoZS50eXBlKT8xJnQ/MToyJnQ/Mzo0JnQ/MjowOmUud2hpY2h9fSxTLmV2ZW50LmFkZFByb3ApLFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7Uy5ldmVudC5zcGVjaWFsW2VdPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBBZSh0aGlzLGUsU2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIEFlKHRoaXMsZSksITB9LGRlbGVnYXRlVHlwZTp0fX0pLFMuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLGkpe1MuZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOmksYmluZFR5cGU6aSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1lLnJlbGF0ZWRUYXJnZXQscj1lLmhhbmRsZU9iajtyZXR1cm4gbiYmKG49PT10aGlzfHxTLmNvbnRhaW5zKHRoaXMsbikpfHwoZS50eXBlPXIub3JpZ1R5cGUsdD1yLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT1pKSx0fX19KSxTLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGtlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4ga2UodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosUyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49RWUpLHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIE5lPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLERlPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksamU9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHFlKGUsdCl7cmV0dXJuIEEoZSxcInRhYmxlXCIpJiZBKDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpJiZTKGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF18fGV9ZnVuY3Rpb24gTGUoZSl7cmV0dXJuIGUudHlwZT0obnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gSGUoZSl7cmV0dXJuXCJ0cnVlL1wiPT09KGUudHlwZXx8XCJcIikuc2xpY2UoMCw1KT9lLnR5cGU9ZS50eXBlLnNsaWNlKDUpOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIE9lKGUsdCl7dmFyIG4scixpLG8sYSxzO2lmKDE9PT10Lm5vZGVUeXBlKXtpZihZLmhhc0RhdGEoZSkmJihzPVkuZ2V0KGUpLmV2ZW50cykpZm9yKGkgaW4gWS5yZW1vdmUodCxcImhhbmRsZSBldmVudHNcIikscylmb3Iobj0wLHI9c1tpXS5sZW5ndGg7bjxyO24rKylTLmV2ZW50LmFkZCh0LGksc1tpXVtuXSk7US5oYXNEYXRhKGUpJiYobz1RLmFjY2VzcyhlKSxhPVMuZXh0ZW5kKHt9LG8pLFEuc2V0KHQsYSkpfX1mdW5jdGlvbiBQZShuLHIsaSxvKXtyPWcocik7dmFyIGUsdCxhLHMsdSxsLGM9MCxmPW4ubGVuZ3RoLHA9Zi0xLGQ9clswXSxoPW0oZCk7aWYoaHx8MTxmJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmIXkuY2hlY2tDbG9uZSYmRGUudGVzdChkKSlyZXR1cm4gbi5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PW4uZXEoZSk7aCYmKHJbMF09ZC5jYWxsKHRoaXMsZSx0Lmh0bWwoKSkpLFBlKHQscixpLG8pfSk7aWYoZiYmKHQ9KGU9eGUocixuWzBdLm93bmVyRG9jdW1lbnQsITEsbixvKSkuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9dCksdHx8bykpe2ZvcihzPShhPVMubWFwKHZlKGUsXCJzY3JpcHRcIiksTGUpKS5sZW5ndGg7YzxmO2MrKyl1PWUsYyE9PXAmJih1PVMuY2xvbmUodSwhMCwhMCkscyYmUy5tZXJnZShhLHZlKHUsXCJzY3JpcHRcIikpKSxpLmNhbGwobltjXSx1LGMpO2lmKHMpZm9yKGw9YVthLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LFMubWFwKGEsSGUpLGM9MDtjPHM7YysrKXU9YVtjXSxoZS50ZXN0KHUudHlwZXx8XCJcIikmJiFZLmFjY2Vzcyh1LFwiZ2xvYmFsRXZhbFwiKSYmUy5jb250YWlucyhsLHUpJiYodS5zcmMmJlwibW9kdWxlXCIhPT0odS50eXBlfHxcIlwiKS50b0xvd2VyQ2FzZSgpP1MuX2V2YWxVcmwmJiF1Lm5vTW9kdWxlJiZTLl9ldmFsVXJsKHUuc3JjLHtub25jZTp1Lm5vbmNlfHx1LmdldEF0dHJpYnV0ZShcIm5vbmNlXCIpfSxsKTpiKHUudGV4dENvbnRlbnQucmVwbGFjZShqZSxcIlwiKSx1LGwpKX1yZXR1cm4gbn1mdW5jdGlvbiBSZShlLHQsbil7Zm9yKHZhciByLGk9dD9TLmZpbHRlcih0LGUpOmUsbz0wO251bGwhPShyPWlbb10pO28rKylufHwxIT09ci5ub2RlVHlwZXx8Uy5jbGVhbkRhdGEodmUocikpLHIucGFyZW50Tm9kZSYmKG4mJmllKHIpJiZ5ZSh2ZShyLFwic2NyaXB0XCIpKSxyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpO3JldHVybiBlfVMuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxjbG9uZTpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYz1lLmNsb25lTm9kZSghMCksZj1pZShlKTtpZighKHkubm9DbG9uZUNoZWNrZWR8fDEhPT1lLm5vZGVUeXBlJiYxMSE9PWUubm9kZVR5cGV8fFMuaXNYTUxEb2MoZSkpKWZvcihhPXZlKGMpLHI9MCxpPShvPXZlKGUpKS5sZW5ndGg7cjxpO3IrKylzPW9bcl0sdT1hW3JdLHZvaWQgMCxcImlucHV0XCI9PT0obD11Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpJiZwZS50ZXN0KHMudHlwZSk/dS5jaGVja2VkPXMuY2hlY2tlZDpcImlucHV0XCIhPT1sJiZcInRleHRhcmVhXCIhPT1sfHwodS5kZWZhdWx0VmFsdWU9cy5kZWZhdWx0VmFsdWUpO2lmKHQpaWYobilmb3Iobz1vfHx2ZShlKSxhPWF8fHZlKGMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspT2Uob1tyXSxhW3JdKTtlbHNlIE9lKGUsYyk7cmV0dXJuIDA8KGE9dmUoYyxcInNjcmlwdFwiKSkubGVuZ3RoJiZ5ZShhLCFmJiZ2ZShlLFwic2NyaXB0XCIpKSxjfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scixpPVMuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKFYobikpe2lmKHQ9bltZLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IociBpbiB0LmV2ZW50cylpW3JdP1MuZXZlbnQucmVtb3ZlKG4scik6Uy5yZW1vdmVFdmVudChuLHIsdC5oYW5kbGUpO25bWS5leHBhbmRvXT12b2lkIDB9bltRLmV4cGFuZG9dJiYobltRLmV4cGFuZG9dPXZvaWQgMCl9fX0pLFMuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFJlKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gUmUodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP1MudGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1lKX0pfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8cWUodGhpcyxlKS5hcHBlbmRDaGlsZChlKX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgdD1xZSh0aGlzLGUpO3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh2ZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gUy5jbG9uZSh0aGlzLGUsdCl9KX0saHRtbDpmdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxyPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIU5lLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPVMuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPHI7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh2ZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBuPVtdO3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcmVudE5vZGU7Uy5pbkFycmF5KHRoaXMsbik8MCYmKFMuY2xlYW5EYXRhKHZlKHRoaXMpKSx0JiZ0LnJlcGxhY2VDaGlsZChlLHRoaXMpKX0sbil9fSksUy5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGUsYSl7Uy5mbltlXT1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1bXSxyPVMoZSksaT1yLmxlbmd0aC0xLG89MDtvPD1pO28rKyl0PW89PT1pP3RoaXM6dGhpcy5jbG9uZSghMCksUyhyW29dKVthXSh0KSx1LmFwcGx5KG4sdC5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBNZT1uZXcgUmVnRXhwKFwiXihcIitlZStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxJZT1mdW5jdGlvbihlKXt2YXIgdD1lLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIHQmJnQub3BlbmVyfHwodD1DKSx0LmdldENvbXB1dGVkU3R5bGUoZSl9LFdlPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89e307Zm9yKGkgaW4gdClvW2ldPWUuc3R5bGVbaV0sZS5zdHlsZVtpXT10W2ldO2ZvcihpIGluIHI9bi5jYWxsKGUpLHQpZS5zdHlsZVtpXT1vW2ldO3JldHVybiByfSxGZT1uZXcgUmVnRXhwKG5lLmpvaW4oXCJ8XCIpLFwiaVwiKTtmdW5jdGlvbiBCZShlLHQsbil7dmFyIHIsaSxvLGEscz1lLnN0eWxlO3JldHVybihuPW58fEllKGUpKSYmKFwiXCIhPT0oYT1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0pfHxpZShlKXx8KGE9Uy5zdHlsZShlLHQpKSwheS5waXhlbEJveFN0eWxlcygpJiZNZS50ZXN0KGEpJiZGZS50ZXN0KHQpJiYocj1zLndpZHRoLGk9cy5taW5XaWR0aCxvPXMubWF4V2lkdGgscy5taW5XaWR0aD1zLm1heFdpZHRoPXMud2lkdGg9YSxhPW4ud2lkdGgscy53aWR0aD1yLHMubWluV2lkdGg9aSxzLm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uICRlKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX0hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYobCl7dS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLGwuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixyZS5hcHBlbmRDaGlsZCh1KS5hcHBlbmRDaGlsZChsKTt2YXIgZT1DLmdldENvbXB1dGVkU3R5bGUobCk7bj1cIjElXCIhPT1lLnRvcCxzPTEyPT09dChlLm1hcmdpbkxlZnQpLGwuc3R5bGUucmlnaHQ9XCI2MCVcIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSxsLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixpPTEyPT09dChsLm9mZnNldFdpZHRoLzMpLHJlLnJlbW92ZUNoaWxkKHUpLGw9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgbixyLGksbyxhLHMsdT1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbD1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5zdHlsZSYmKGwuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGwuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLHkuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWwuc3R5bGUuYmFja2dyb3VuZENsaXAsUy5leHRlbmQoeSx7Ym94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHJ9LHBpeGVsQm94U3R5bGVzOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxvfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxufSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLHN9LHNjcm9sbGJveFNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLGl9LHJlbGlhYmxlVHJEaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7cmV0dXJuIG51bGw9PWEmJihlPUUuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpLHQ9RS5jcmVhdGVFbGVtZW50KFwidHJcIiksbj1FLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweFwiLHQuc3R5bGUuaGVpZ2h0PVwiMXB4XCIsbi5zdHlsZS5oZWlnaHQ9XCI5cHhcIixyZS5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZCh0KS5hcHBlbmRDaGlsZChuKSxyPUMuZ2V0Q29tcHV0ZWRTdHlsZSh0KSxhPTM8cGFyc2VJbnQoci5oZWlnaHQpLHJlLnJlbW92ZUNoaWxkKGUpKSxhfX0pKX0oKTt2YXIgX2U9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLHplPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxVZT17fTtmdW5jdGlvbiBYZShlKXt2YXIgdD1TLmNzc1Byb3BzW2VdfHxVZVtlXTtyZXR1cm4gdHx8KGUgaW4gemU/ZTpVZVtlXT1mdW5jdGlvbihlKXt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPV9lLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9X2Vbbl0rdClpbiB6ZSlyZXR1cm4gZX0oZSl8fGUpfXZhciBWZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sR2U9L14tLS8sWWU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFFlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn07ZnVuY3Rpb24gSmUoZSx0LG4pe3ZhciByPXRlLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBLZShlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPVMuY3NzKGUsbituZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPVMuY3NzKGUsXCJwYWRkaW5nXCIrbmVbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSk6cys9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJjA8PW8mJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSl8fDApLHV9ZnVuY3Rpb24gWmUoZSx0LG4pe3ZhciByPUllKGUpLGk9KCF5LmJveFNpemluZ1JlbGlhYmxlKCl8fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxvPWksYT1CZShlLHQscikscz1cIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO2lmKE1lLnRlc3QoYSkpe2lmKCFuKXJldHVybiBhO2E9XCJhdXRvXCJ9cmV0dXJuKCF5LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fCF5LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkmJkEoZSxcInRyXCIpfHxcImF1dG9cIj09PWF8fCFwYXJzZUZsb2F0KGEpJiZcImlubGluZVwiPT09Uy5jc3MoZSxcImRpc3BsYXlcIiwhMSxyKSkmJmUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJihpPVwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLChvPXMgaW4gZSkmJihhPWVbc10pKSwoYT1wYXJzZUZsb2F0KGEpfHwwKStLZShlLHQsbnx8KGk/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksbyxyLGEpK1wicHhcIn1mdW5jdGlvbiBldChlLHQsbixyLGkpe3JldHVybiBuZXcgZXQucHJvdG90eXBlLmluaXQoZSx0LG4scixpKX1TLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihlLHQpe2lmKHQpe3ZhciBuPUJlKGUsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1uP1wiMVwiOm59fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGdyaWRBcmVhOiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZ3JpZFJvdzohMCxncmlkUm93RW5kOiEwLGdyaWRSb3dTdGFydDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOnt9LHN0eWxlOmZ1bmN0aW9uKGUsdCxuLHIpe2lmKGUmJjMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmZS5zdHlsZSl7dmFyIGksbyxhLHM9WCh0KSx1PUdlLnRlc3QodCksbD1lLnN0eWxlO2lmKHV8fCh0PVhlKHMpKSxhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10sdm9pZCAwPT09bilyZXR1cm4gYSYmXCJnZXRcImluIGEmJnZvaWQgMCE9PShpPWEuZ2V0KGUsITEscikpP2k6bFt0XTtcInN0cmluZ1wiPT09KG89dHlwZW9mIG4pJiYoaT10ZS5leGVjKG4pKSYmaVsxXSYmKG49c2UoZSx0LGkpLG89XCJudW1iZXJcIiksbnVsbCE9biYmbj09biYmKFwibnVtYmVyXCIhPT1vfHx1fHwobis9aSYmaVszXXx8KFMuY3NzTnVtYmVyW3NdP1wiXCI6XCJweFwiKSkseS5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1ufHwwIT09dC5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGxbdF09XCJpbmhlcml0XCIpLGEmJlwic2V0XCJpbiBhJiZ2b2lkIDA9PT0obj1hLnNldChlLG4scikpfHwodT9sLnNldFByb3BlcnR5KHQsbik6bFt0XT1uKSl9fSxjc3M6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHM9WCh0KTtyZXR1cm4gR2UudGVzdCh0KXx8KHQ9WGUocykpLChhPVMuY3NzSG9va3NbdF18fFMuY3NzSG9va3Nbc10pJiZcImdldFwiaW4gYSYmKGk9YS5nZXQoZSwhMCxuKSksdm9pZCAwPT09aSYmKGk9QmUoZSx0LHIpKSxcIm5vcm1hbFwiPT09aSYmdCBpbiBRZSYmKGk9UWVbdF0pLFwiXCI9PT1ufHxuPyhvPXBhcnNlRmxvYXQoaSksITA9PT1ufHxpc0Zpbml0ZShvKT9vfHwwOmkpOml9fSksUy5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oZSx1KXtTLmNzc0hvb2tzW3VdPXtnZXQ6ZnVuY3Rpb24oZSx0LG4pe2lmKHQpcmV0dXJuIVZlLnRlc3QoUy5jc3MoZSxcImRpc3BsYXlcIikpfHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoP1plKGUsdSxuKTpXZShlLFllLGZ1bmN0aW9uKCl7cmV0dXJuIFplKGUsdSxuKX0pfSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9SWUoZSksbz0heS5zY3JvbGxib3hTaXplKCkmJlwiYWJzb2x1dGVcIj09PWkucG9zaXRpb24sYT0ob3x8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLGkpLHM9bj9LZShlLHUsbixhLGkpOjA7cmV0dXJuIGEmJm8mJihzLT1NYXRoLmNlaWwoZVtcIm9mZnNldFwiK3VbMF0udG9VcHBlckNhc2UoKSt1LnNsaWNlKDEpXS1wYXJzZUZsb2F0KGlbdV0pLUtlKGUsdSxcImJvcmRlclwiLCExLGkpLS41KSkscyYmKHI9dGUuZXhlYyh0KSkmJlwicHhcIiE9PShyWzNdfHxcInB4XCIpJiYoZS5zdHlsZVt1XT10LHQ9Uy5jc3MoZSx1KSksSmUoMCx0LHMpfX19KSxTLmNzc0hvb2tzLm1hcmdpbkxlZnQ9JGUoeS5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KEJlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LVdlKGUse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLFMuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGksbyl7Uy5jc3NIb29rc1tpK29dPXtleHBhbmQ6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj17fSxyPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Uuc3BsaXQoXCIgXCIpOltlXTt0PDQ7dCsrKW5baStuZVt0XStvXT1yW3RdfHxyW3QtMl18fHJbMF07cmV0dXJuIG59fSxcIm1hcmdpblwiIT09aSYmKFMuY3NzSG9va3NbaStvXS5zZXQ9SmUpfSksUy5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9SWUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09Uy5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP1Muc3R5bGUoZSx0LG4pOlMuY3NzKGUsdCl9LGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfX0pLCgoUy5Ud2Vlbj1ldCkucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpldCxpbml0OmZ1bmN0aW9uKGUsdCxuLHIsaSxvKXt0aGlzLmVsZW09ZSx0aGlzLnByb3A9bix0aGlzLmVhc2luZz1pfHxTLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9dCx0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9cix0aGlzLnVuaXQ9b3x8KFMuY3NzTnVtYmVyW25dP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGU9ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGUmJmUuZ2V0P2UuZ2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihlKXt2YXIgdCxuPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9dD1TLmVhc2luZ1t0aGlzLmVhc2luZ10oZSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qZSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz10PWUsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKnQrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksbiYmbi5zZXQ/bi5zZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0pLmluaXQucHJvdG90eXBlPWV0LnByb3RvdHlwZSwoZXQucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiAxIT09ZS5lbGVtLm5vZGVUeXBlfHxudWxsIT1lLmVsZW1bZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW2UucHJvcF0/ZS5lbGVtW2UucHJvcF06KHQ9Uy5jc3MoZS5lbGVtLGUucHJvcCxcIlwiKSkmJlwiYXV0b1wiIT09dD90OjB9LHNldDpmdW5jdGlvbihlKXtTLmZ4LnN0ZXBbZS5wcm9wXT9TLmZ4LnN0ZXBbZS5wcm9wXShlKToxIT09ZS5lbGVtLm5vZGVUeXBlfHwhUy5jc3NIb29rc1tlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbWGUoZS5wcm9wKV0/ZS5lbGVtW2UucHJvcF09ZS5ub3c6Uy5zdHlsZShlLmVsZW0sZS5wcm9wLGUubm93K2UudW5pdCl9fX0pLnNjcm9sbFRvcD1ldC5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGUpe2UuZWxlbS5ub2RlVHlwZSYmZS5lbGVtLnBhcmVudE5vZGUmJihlLmVsZW1bZS5wcm9wXT1lLm5vdyl9fSxTLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sUy5meD1ldC5wcm90b3R5cGUuaW5pdCxTLmZ4LnN0ZXA9e307dmFyIHR0LG50LHJ0LGl0LG90PS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxhdD0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIHN0KCl7bnQmJighMT09PUUuaGlkZGVuJiZDLnJlcXVlc3RBbmltYXRpb25GcmFtZT9DLnJlcXVlc3RBbmltYXRpb25GcmFtZShzdCk6Qy5zZXRUaW1lb3V0KHN0LFMuZnguaW50ZXJ2YWwpLFMuZngudGljaygpKX1mdW5jdGlvbiB1dCgpe3JldHVybiBDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0dD12b2lkIDB9KSx0dD1EYXRlLm5vdygpfWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1uZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gY3QoZSx0LG4pe2Zvcih2YXIgcixpPShmdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChmdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGZ0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWZ0LnByZWZpbHRlcnMubGVuZ3RoLHM9Uy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSB1LmVsZW19KSx1PWZ1bmN0aW9uKCl7aWYoYSlyZXR1cm4hMTtmb3IodmFyIGU9dHR8fHV0KCksdD1NYXRoLm1heCgwLGwuc3RhcnRUaW1lK2wuZHVyYXRpb24tZSksbj0xLSh0L2wuZHVyYXRpb258fDApLHI9MCxpPWwudHdlZW5zLmxlbmd0aDtyPGk7cisrKWwudHdlZW5zW3JdLnJ1bihuKTtyZXR1cm4gcy5ub3RpZnlXaXRoKG8sW2wsbix0XSksbjwxJiZpP3Q6KGl8fHMubm90aWZ5V2l0aChvLFtsLDEsMF0pLHMucmVzb2x2ZVdpdGgobyxbbF0pLCExKX0sbD1zLnByb21pc2Uoe2VsZW06byxwcm9wczpTLmV4dGVuZCh7fSxlKSxvcHRzOlMuZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpTLmVhc2luZy5fZGVmYXVsdH0sdCksb3JpZ2luYWxQcm9wZXJ0aWVzOmUsb3JpZ2luYWxPcHRpb25zOnQsc3RhcnRUaW1lOnR0fHx1dCgpLGR1cmF0aW9uOnQuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGUsdCl7dmFyIG49Uy5Ud2VlbihvLGwub3B0cyxlLHQsbC5vcHRzLnNwZWNpYWxFYXNpbmdbZV18fGwub3B0cy5lYXNpbmcpO3JldHVybiBsLnR3ZWVucy5wdXNoKG4pLG59LHN0b3A6ZnVuY3Rpb24oZSl7dmFyIHQ9MCxuPWU/bC50d2VlbnMubGVuZ3RoOjA7aWYoYSlyZXR1cm4gdGhpcztmb3IoYT0hMDt0PG47dCsrKWwudHdlZW5zW3RdLnJ1bigxKTtyZXR1cm4gZT8ocy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsLGVdKSk6cy5yZWplY3RXaXRoKG8sW2wsZV0pLHRoaXN9fSksYz1sLnByb3BzO2ZvcighZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhO2ZvcihuIGluIGUpaWYoaT10W3I9WChuKV0sbz1lW25dLEFycmF5LmlzQXJyYXkobykmJihpPW9bMV0sbz1lW25dPW9bMF0pLG4hPT1yJiYoZVtyXT1vLGRlbGV0ZSBlW25dKSwoYT1TLmNzc0hvb2tzW3JdKSYmXCJleHBhbmRcImluIGEpZm9yKG4gaW4gbz1hLmV4cGFuZChvKSxkZWxldGUgZVtyXSxvKW4gaW4gZXx8KGVbbl09b1tuXSx0W25dPWkpO2Vsc2UgdFtyXT1pfShjLGwub3B0cy5zcGVjaWFsRWFzaW5nKTtyPGk7cisrKWlmKG49ZnQucHJlZmlsdGVyc1tyXS5jYWxsKGwsbyxjLGwub3B0cykpcmV0dXJuIG0obi5zdG9wKSYmKFMuX3F1ZXVlSG9va3MobC5lbGVtLGwub3B0cy5xdWV1ZSkuc3RvcD1uLnN0b3AuYmluZChuKSksbjtyZXR1cm4gUy5tYXAoYyxjdCxsKSxtKGwub3B0cy5zdGFydCkmJmwub3B0cy5zdGFydC5jYWxsKG8sbCksbC5wcm9ncmVzcyhsLm9wdHMucHJvZ3Jlc3MpLmRvbmUobC5vcHRzLmRvbmUsbC5vcHRzLmNvbXBsZXRlKS5mYWlsKGwub3B0cy5mYWlsKS5hbHdheXMobC5vcHRzLmFsd2F5cyksUy5meC50aW1lcihTLmV4dGVuZCh1LHtlbGVtOm8sYW5pbTpsLHF1ZXVlOmwub3B0cy5xdWV1ZX0pKSxsfVMuQW5pbWF0aW9uPVMuZXh0ZW5kKGZ0LHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5jcmVhdGVUd2VlbihlLHQpO3JldHVybiBzZShuLmVsZW0sZSx0ZS5leGVjKHQpLG4pLG59XX0sdHdlZW5lcjpmdW5jdGlvbihlLHQpe20oZSk/KHQ9ZSxlPVtcIipcIl0pOmU9ZS5tYXRjaChQKTtmb3IodmFyIG4scj0wLGk9ZS5sZW5ndGg7cjxpO3IrKyluPWVbcl0sZnQudHdlZW5lcnNbbl09ZnQudHdlZW5lcnNbbl18fFtdLGZ0LnR3ZWVuZXJzW25dLnVuc2hpZnQodCl9LHByZWZpbHRlcnM6W2Z1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjLGY9XCJ3aWR0aFwiaW4gdHx8XCJoZWlnaHRcImluIHQscD10aGlzLGQ9e30saD1lLnN0eWxlLGc9ZS5ub2RlVHlwZSYmYWUoZSksdj1ZLmdldChlLFwiZnhzaG93XCIpO2ZvcihyIGluIG4ucXVldWV8fChudWxsPT0oYT1TLl9xdWV1ZUhvb2tzKGUsXCJmeFwiKSkudW5xdWV1ZWQmJihhLnVucXVldWVkPTAscz1hLmVtcHR5LmZpcmUsYS5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7YS51bnF1ZXVlZHx8cygpfSksYS51bnF1ZXVlZCsrLHAuYWx3YXlzKGZ1bmN0aW9uKCl7cC5hbHdheXMoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sUy5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pfSkpLHQpaWYoaT10W3JdLG90LnRlc3QoaSkpe2lmKGRlbGV0ZSB0W3JdLG89b3x8XCJ0b2dnbGVcIj09PWksaT09PShnP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1pfHwhdnx8dm9pZCAwPT09dltyXSljb250aW51ZTtnPSEwfWRbcl09diYmdltyXXx8Uy5zdHlsZShlLHIpfWlmKCh1PSFTLmlzRW1wdHlPYmplY3QodCkpfHwhUy5pc0VtcHR5T2JqZWN0KGQpKWZvcihyIGluIGYmJjE9PT1lLm5vZGVUeXBlJiYobi5vdmVyZmxvdz1baC5vdmVyZmxvdyxoLm92ZXJmbG93WCxoLm92ZXJmbG93WV0sbnVsbD09KGw9diYmdi5kaXNwbGF5KSYmKGw9WS5nZXQoZSxcImRpc3BsYXlcIikpLFwibm9uZVwiPT09KGM9Uy5jc3MoZSxcImRpc3BsYXlcIikpJiYobD9jPWw6KGxlKFtlXSwhMCksbD1lLnN0eWxlLmRpc3BsYXl8fGwsYz1TLmNzcyhlLFwiZGlzcGxheVwiKSxsZShbZV0pKSksKFwiaW5saW5lXCI9PT1jfHxcImlubGluZS1ibG9ja1wiPT09YyYmbnVsbCE9bCkmJlwibm9uZVwiPT09Uy5jc3MoZSxcImZsb2F0XCIpJiYodXx8KHAuZG9uZShmdW5jdGlvbigpe2guZGlzcGxheT1sfSksbnVsbD09bCYmKGM9aC5kaXNwbGF5LGw9XCJub25lXCI9PT1jP1wiXCI6YykpLGguZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksbi5vdmVyZmxvdyYmKGgub3ZlcmZsb3c9XCJoaWRkZW5cIixwLmFsd2F5cyhmdW5jdGlvbigpe2gub3ZlcmZsb3c9bi5vdmVyZmxvd1swXSxoLm92ZXJmbG93WD1uLm92ZXJmbG93WzFdLGgub3ZlcmZsb3dZPW4ub3ZlcmZsb3dbMl19KSksdT0hMSxkKXV8fCh2P1wiaGlkZGVuXCJpbiB2JiYoZz12LmhpZGRlbik6dj1ZLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih2LmhpZGRlbj0hZyksZyYmbGUoW2VdLCEwKSxwLmRvbmUoZnVuY3Rpb24oKXtmb3IociBpbiBnfHxsZShbZV0pLFkucmVtb3ZlKGUsXCJmeHNob3dcIiksZClTLnN0eWxlKGUscixkW3JdKX0pKSx1PWN0KGc/dltyXTowLHIscCksciBpbiB2fHwodltyXT11LnN0YXJ0LGcmJih1LmVuZD11LnN0YXJ0LHUuc3RhcnQ9MCkpfV0scHJlZmlsdGVyOmZ1bmN0aW9uKGUsdCl7dD9mdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSk6ZnQucHJlZmlsdGVycy5wdXNoKGUpfX0pLFMuc3BlZWQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP1MuZXh0ZW5kKHt9LGUpOntjb21wbGV0ZTpufHwhbiYmdHx8bShlKSYmZSxkdXJhdGlvbjplLGVhc2luZzpuJiZ0fHx0JiYhbSh0KSYmdH07cmV0dXJuIFMuZngub2ZmP3IuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2Ygci5kdXJhdGlvbiYmKHIuZHVyYXRpb24gaW4gUy5meC5zcGVlZHM/ci5kdXJhdGlvbj1TLmZ4LnNwZWVkc1tyLmR1cmF0aW9uXTpyLmR1cmF0aW9uPVMuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1yLnF1ZXVlJiYhMCE9PXIucXVldWV8fChyLnF1ZXVlPVwiZnhcIiksci5vbGQ9ci5jb21wbGV0ZSxyLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bShyLm9sZCkmJnIub2xkLmNhbGwodGhpcyksci5xdWV1ZSYmUy5kZXF1ZXVlKHRoaXMsci5xdWV1ZSl9LHJ9LFMuZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMuZmlsdGVyKGFlKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dH0sZSxuLHIpfSxhbmltYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPVMuaXNFbXB0eU9iamVjdCh0KSxvPVMuc3BlZWQoZSxuLHIpLGE9ZnVuY3Rpb24oKXt2YXIgZT1mdCh0aGlzLFMuZXh0ZW5kKHt9LHQpLG8pOyhpfHxZLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmZS5zdG9wKCEwKX07cmV0dXJuIGEuZmluaXNoPWEsaXx8ITE9PT1vLnF1ZXVlP3RoaXMuZWFjaChhKTp0aGlzLnF1ZXVlKG8ucXVldWUsYSl9LHN0b3A6ZnVuY3Rpb24oaSxlLG8pe3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3RvcDtkZWxldGUgZS5zdG9wLHQobyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBpJiYobz1lLGU9aSxpPXZvaWQgMCksZSYmdGhpcy5xdWV1ZShpfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPVMudGltZXJzLHI9WS5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmYXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8Uy5kZXF1ZXVlKHRoaXMsaSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiExIT09YSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0PVkuZ2V0KHRoaXMpLG49dFthK1wicXVldWVcIl0scj10W2ErXCJxdWV1ZUhvb2tzXCJdLGk9Uy50aW1lcnMsbz1uP24ubGVuZ3RoOjA7Zm9yKHQuZmluaXNoPSEwLFMucXVldWUodGhpcyxhLFtdKSxyJiZyLnN0b3AmJnIuc3RvcC5jYWxsKHRoaXMsITApLGU9aS5sZW5ndGg7ZS0tOylpW2VdLmVsZW09PT10aGlzJiZpW2VdLnF1ZXVlPT09YSYmKGlbZV0uYW5pbS5zdG9wKCEwKSxpLnNwbGljZShlLDEpKTtmb3IoZT0wO2U8bztlKyspbltlXSYmbltlXS5maW5pc2gmJm5bZV0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIHQuZmluaXNofSl9fSksUy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihlLHIpe3ZhciBpPVMuZm5bcl07Uy5mbltyXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PWV8fFwiYm9vbGVhblwiPT10eXBlb2YgZT9pLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUobHQociwhMCksZSx0LG4pfX0pLFMuZWFjaCh7c2xpZGVEb3duOmx0KFwic2hvd1wiKSxzbGlkZVVwOmx0KFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpsdChcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGUscil7Uy5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSxTLnRpbWVycz1bXSxTLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgZSx0PTAsbj1TLnRpbWVycztmb3IodHQ9RGF0ZS5ub3coKTt0PG4ubGVuZ3RoO3QrKykoZT1uW3RdKSgpfHxuW3RdIT09ZXx8bi5zcGxpY2UodC0tLDEpO24ubGVuZ3RofHxTLmZ4LnN0b3AoKSx0dD12b2lkIDB9LFMuZngudGltZXI9ZnVuY3Rpb24oZSl7Uy50aW1lcnMucHVzaChlKSxTLmZ4LnN0YXJ0KCl9LFMuZnguaW50ZXJ2YWw9MTMsUy5meC5zdGFydD1mdW5jdGlvbigpe250fHwobnQ9ITAsc3QoKSl9LFMuZnguc3RvcD1mdW5jdGlvbigpe250PW51bGx9LFMuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LFMuZm4uZGVsYXk9ZnVuY3Rpb24ocixlKXtyZXR1cm4gcj1TLmZ4JiZTLmZ4LnNwZWVkc1tyXXx8cixlPWV8fFwiZnhcIix0aGlzLnF1ZXVlKGUsZnVuY3Rpb24oZSx0KXt2YXIgbj1DLnNldFRpbWVvdXQoZSxyKTt0LnN0b3A9ZnVuY3Rpb24oKXtDLmNsZWFyVGltZW91dChuKX19KX0scnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaXQ9RS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkscnQudHlwZT1cImNoZWNrYm94XCIseS5jaGVja09uPVwiXCIhPT1ydC52YWx1ZSx5Lm9wdFNlbGVjdGVkPWl0LnNlbGVjdGVkLChydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIscnQudHlwZT1cInJhZGlvXCIseS5yYWRpb1ZhbHVlPVwidFwiPT09cnQudmFsdWU7dmFyIHB0LGR0PVMuZXhwci5hdHRySGFuZGxlO1MuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MucmVtb3ZlQXR0cih0aGlzLGUpfSl9fSksUy5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUuZ2V0QXR0cmlidXRlP1MucHJvcChlLHQsbik6KDE9PT1vJiZTLmlzWE1MRG9jKGUpfHwoaT1TLmF0dHJIb29rc1t0LnRvTG93ZXJDYXNlKCldfHwoUy5leHByLm1hdGNoLmJvb2wudGVzdCh0KT9wdDp2b2lkIDApKSx2b2lkIDAhPT1uP251bGw9PT1uP3ZvaWQgUy5yZW1vdmVBdHRyKGUsdCk6aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjooZS5zZXRBdHRyaWJ1dGUodCxuK1wiXCIpLG4pOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjpudWxsPT0ocj1TLmZpbmQuYXR0cihlLHQpKT92b2lkIDA6cil9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGUsdCl7aWYoIXkucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09dCYmQShlLFwiaW5wdXRcIikpe3ZhciBuPWUudmFsdWU7cmV0dXJuIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLHQpLG4mJihlLnZhbHVlPW4pLHR9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10JiZ0Lm1hdGNoKFApO2lmKGkmJjE9PT1lLm5vZGVUeXBlKXdoaWxlKG49aVtyKytdKWUucmVtb3ZlQXR0cmlidXRlKG4pfX0pLHB0PXtzZXQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiExPT09dD9TLnJlbW92ZUF0dHIoZSxuKTplLnNldEF0dHJpYnV0ZShuLG4pLG59fSxTLmVhY2goUy5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGUsdCl7dmFyIGE9ZHRbdF18fFMuZmluZC5hdHRyO2R0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1kdFtvXSxkdFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGR0W29dPWkpLHJ9fSk7dmFyIGh0PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZ3Q9L14oPzphfGFyZWEpJC9pO2Z1bmN0aW9uIHZ0KGUpe3JldHVybihlLm1hdGNoKFApfHxbXSkuam9pbihcIiBcIil9ZnVuY3Rpb24geXQoZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifWZ1bmN0aW9uIG10KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2U6XCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubWF0Y2goUCl8fFtdfVMuZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLnByb3AsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW1MucHJvcEZpeFtlXXx8ZV19KX19KSxTLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJlMuaXNYTUxEb2MoZSl8fCh0PVMucHJvcEZpeFt0XXx8dCxpPVMucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOmh0LnRlc3QoZS5ub2RlTmFtZSl8fGd0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSkseS5vcHRTZWxlY3RlZHx8KFMucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3JldHVybiB0JiZ0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7dCYmKHQuc2VsZWN0ZWRJbmRleCx0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxTLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7Uy5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLFMuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykuYWRkQ2xhc3ModC5jYWxsKHRoaXMsZSx5dCh0aGlzKSkpfSk7aWYoKGU9bXQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPXl0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK3Z0KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pci5pbmRleE9mKFwiIFwiK28rXCIgXCIpPDAmJihyKz1vK1wiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5yZW1vdmVDbGFzcyh0LmNhbGwodGhpcyxlLHl0KHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZigoZT1tdCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSl3aGlsZSgtMTxyLmluZGV4T2YoXCIgXCIrbytcIiBcIikpcj1yLnJlcGxhY2UoXCIgXCIrbytcIiBcIixcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihpLHQpe3ZhciBvPXR5cGVvZiBpLGE9XCJzdHJpbmdcIj09PW98fEFycmF5LmlzQXJyYXkoaSk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiB0JiZhP3Q/dGhpcy5hZGRDbGFzcyhpKTp0aGlzLnJlbW92ZUNsYXNzKGkpOm0oaSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1ModGhpcykudG9nZ2xlQ2xhc3MoaS5jYWxsKHRoaXMsZSx5dCh0aGlzKSx0KSx0KX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQsbixyO2lmKGEpe3Q9MCxuPVModGhpcykscj1tdChpKTt3aGlsZShlPXJbdCsrXSluLmhhc0NsYXNzKGUpP24ucmVtb3ZlQ2xhc3MoZSk6bi5hZGRDbGFzcyhlKX1lbHNlIHZvaWQgMCE9PWkmJlwiYm9vbGVhblwiIT09b3x8KChlPXl0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixlKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGV8fCExPT09aT9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPTA7dD1cIiBcIitlK1wiIFwiO3doaWxlKG49dGhpc1tyKytdKWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoXCIgXCIrdnQoeXQobikpK1wiIFwiKS5pbmRleE9mKHQpKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB4dD0vXFxyL2c7Uy5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihuKXt2YXIgcixlLGksdD10aGlzWzBdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPW0obiksdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciB0OzE9PT10aGlzLm5vZGVUeXBlJiYobnVsbD09KHQ9aT9uLmNhbGwodGhpcyxlLFModGhpcykudmFsKCkpOm4pP3Q9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgdD90Kz1cIlwiOkFycmF5LmlzQXJyYXkodCkmJih0PVMubWFwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/XCJcIjplK1wiXCJ9KSksKHI9Uy52YWxIb29rc1t0aGlzLnR5cGVdfHxTLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gciYmdm9pZCAwIT09ci5zZXQodGhpcyx0LFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXQpKX0pKTp0PyhyPVMudmFsSG9va3NbdC50eXBlXXx8Uy52YWxIb29rc1t0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJnZXRcImluIHImJnZvaWQgMCE9PShlPXIuZ2V0KHQsXCJ2YWx1ZVwiKSk/ZTpcInN0cmluZ1wiPT10eXBlb2YoZT10LnZhbHVlKT9lLnJlcGxhY2UoeHQsXCJcIik6bnVsbD09ZT9cIlwiOmU6dm9pZCAwfX0pLFMuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInZhbHVlXCIpO3JldHVybiBudWxsIT10P3Q6dnQoUy50ZXh0KGUpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG4scixpPWUub3B0aW9ucyxvPWUuc2VsZWN0ZWRJbmRleCxhPVwic2VsZWN0LW9uZVwiPT09ZS50eXBlLHM9YT9udWxsOltdLHU9YT9vKzE6aS5sZW5ndGg7Zm9yKHI9bzwwP3U6YT9vOjA7cjx1O3IrKylpZigoKG49aVtyXSkuc2VsZWN0ZWR8fHI9PT1vKSYmIW4uZGlzYWJsZWQmJighbi5wYXJlbnROb2RlLmRpc2FibGVkfHwhQShuLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKHQ9UyhuKS52YWwoKSxhKXJldHVybiB0O3MucHVzaCh0KX1yZXR1cm4gc30sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG4scixpPWUub3B0aW9ucyxvPVMubWFrZUFycmF5KHQpLGE9aS5sZW5ndGg7d2hpbGUoYS0tKSgocj1pW2FdKS5zZWxlY3RlZD0tMTxTLmluQXJyYXkoUy52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksUy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe1MudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihlLHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIGUuY2hlY2tlZD0tMTxTLmluQXJyYXkoUyhlKS52YWwoKSx0KX19LHkuY2hlY2tPbnx8KFMudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6ZS52YWx1ZX0pfSkseS5mb2N1c2luPVwib25mb2N1c2luXCJpbiBDO3ZhciBidD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sd3Q9ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKX07Uy5leHRlbmQoUy5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmLHA9W258fEVdLGQ9di5jYWxsKGUsXCJ0eXBlXCIpP2UudHlwZTplLGg9di5jYWxsKGUsXCJuYW1lc3BhY2VcIik/ZS5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKG89Zj1hPW49bnx8RSwzIT09bi5ub2RlVHlwZSYmOCE9PW4ubm9kZVR5cGUmJiFidC50ZXN0KGQrUy5ldmVudC50cmlnZ2VyZWQpJiYoLTE8ZC5pbmRleE9mKFwiLlwiKSYmKGQ9KGg9ZC5zcGxpdChcIi5cIikpLnNoaWZ0KCksaC5zb3J0KCkpLHU9ZC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrZCwoZT1lW1MuZXhwYW5kb10/ZTpuZXcgUy5FdmVudChkLFwib2JqZWN0XCI9PXR5cGVvZiBlJiZlKSkuaXNUcmlnZ2VyPXI/MjozLGUubmFtZXNwYWNlPWguam9pbihcIi5cIiksZS5ybmFtZXNwYWNlPWUubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGUucmVzdWx0PXZvaWQgMCxlLnRhcmdldHx8KGUudGFyZ2V0PW4pLHQ9bnVsbD09dD9bZV06Uy5tYWtlQXJyYXkodCxbZV0pLGM9Uy5ldmVudC5zcGVjaWFsW2RdfHx7fSxyfHwhYy50cmlnZ2VyfHwhMSE9PWMudHJpZ2dlci5hcHBseShuLHQpKSl7aWYoIXImJiFjLm5vQnViYmxlJiYheChuKSl7Zm9yKHM9Yy5kZWxlZ2F0ZVR5cGV8fGQsYnQudGVzdChzK2QpfHwobz1vLnBhcmVudE5vZGUpO287bz1vLnBhcmVudE5vZGUpcC5wdXNoKG8pLGE9bzthPT09KG4ub3duZXJEb2N1bWVudHx8RSkmJnAucHVzaChhLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvd3x8Qyl9aT0wO3doaWxlKChvPXBbaSsrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpZj1vLGUudHlwZT0xPGk/czpjLmJpbmRUeXBlfHxkLChsPShZLmdldChvLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVtlLnR5cGVdJiZZLmdldChvLFwiaGFuZGxlXCIpKSYmbC5hcHBseShvLHQpLChsPXUmJm9bdV0pJiZsLmFwcGx5JiZWKG8pJiYoZS5yZXN1bHQ9bC5hcHBseShvLHQpLCExPT09ZS5yZXN1bHQmJmUucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGUudHlwZT1kLHJ8fGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fGMuX2RlZmF1bHQmJiExIT09Yy5fZGVmYXVsdC5hcHBseShwLnBvcCgpLHQpfHwhVihuKXx8dSYmbShuW2RdKSYmIXgobikmJigoYT1uW3VdKSYmKG5bdV09bnVsbCksUy5ldmVudC50cmlnZ2VyZWQ9ZCxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYuYWRkRXZlbnRMaXN0ZW5lcihkLHd0KSxuW2RdKCksZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCx3dCksUy5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGEmJihuW3VdPWEpKSxlLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1TLmV4dGVuZChuZXcgUy5FdmVudCxuLHt0eXBlOmUsaXNTaW11bGF0ZWQ6ITB9KTtTLmV2ZW50LnRyaWdnZXIocixudWxsLHQpfX0pLFMuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1MuZXZlbnQudHJpZ2dlcihlLHQsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIFMuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5mb2N1c2lufHxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihuLHIpe3ZhciBpPWZ1bmN0aW9uKGUpe1MuZXZlbnQuc2ltdWxhdGUocixlLnRhcmdldCxTLmV2ZW50LmZpeChlKSl9O1MuZXZlbnQuc3BlY2lhbFtyXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpO3R8fGUuYWRkRXZlbnRMaXN0ZW5lcihuLGksITApLFkuYWNjZXNzKGUsciwodHx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKS0xO3Q/WS5hY2Nlc3MoZSxyLHQpOihlLnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLCEwKSxZLnJlbW92ZShlLHIpKX19fSk7dmFyIFR0PUMubG9jYXRpb24sQ3Q9e2d1aWQ6RGF0ZS5ub3coKX0sRXQ9L1xcPy87Uy5wYXJzZVhNTD1mdW5jdGlvbihlKXt2YXIgdDtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7dHJ5e3Q9KG5ldyBDLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX1jYXRjaChlKXt0PXZvaWQgMH1yZXR1cm4gdCYmIXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fFMuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrZSksdH07dmFyIFN0PS9cXFtcXF0kLyxrdD0vXFxyP1xcbi9nLEF0PS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxOdD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gRHQobixlLHIsaSl7dmFyIHQ7aWYoQXJyYXkuaXNBcnJheShlKSlTLmVhY2goZSxmdW5jdGlvbihlLHQpe3J8fFN0LnRlc3Qobik/aShuLHQpOkR0KG4rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10P2U6XCJcIikrXCJdXCIsdCxyLGkpfSk7ZWxzZSBpZihyfHxcIm9iamVjdFwiIT09dyhlKSlpKG4sZSk7ZWxzZSBmb3IodCBpbiBlKUR0KG4rXCJbXCIrdCtcIl1cIixlW3RdLHIsaSl9Uy5wYXJhbT1mdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT1mdW5jdGlvbihlLHQpe3ZhciBuPW0odCk/dCgpOnQ7cltyLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGUpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1uP1wiXCI6bil9O2lmKG51bGw9PWUpcmV0dXJuXCJcIjtpZihBcnJheS5pc0FycmF5KGUpfHxlLmpxdWVyeSYmIVMuaXNQbGFpbk9iamVjdChlKSlTLmVhY2goZSxmdW5jdGlvbigpe2kodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IobiBpbiBlKUR0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSxTLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIFMucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT1TLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBlP1MubWFrZUFycmF5KGUpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIVModGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJk50LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFBdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KS5tYXAoZnVuY3Rpb24oZSx0KXt2YXIgbj1TKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1uP251bGw6QXJyYXkuaXNBcnJheShuKT9TLm1hcChuLGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSk6e25hbWU6dC5uYW1lLHZhbHVlOm4ucmVwbGFjZShrdCxcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIganQ9LyUyMC9nLHF0PS8jLiokLyxMdD0vKFs/Jl0pXz1bXiZdKi8sSHQ9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxPdD0vXig/OkdFVHxIRUFEKSQvLFB0PS9eXFwvXFwvLyxSdD17fSxNdD17fSxJdD1cIiovXCIuY29uY2F0KFwiKlwiKSxXdD1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2Z1bmN0aW9uIEZ0KG8pe3JldHVybiBmdW5jdGlvbihlLHQpe1wic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9XCIqXCIpO3ZhciBuLHI9MCxpPWUudG9Mb3dlckNhc2UoKS5tYXRjaChQKXx8W107aWYobSh0KSl3aGlsZShuPWlbcisrXSlcIitcIj09PW5bMF0/KG49bi5zbGljZSgxKXx8XCIqXCIsKG9bbl09b1tuXXx8W10pLnVuc2hpZnQodCkpOihvW25dPW9bbl18fFtdKS5wdXNoKHQpfX1mdW5jdGlvbiBCdCh0LGksbyxhKXt2YXIgcz17fSx1PXQ9PT1NdDtmdW5jdGlvbiBsKGUpe3ZhciByO3JldHVybiBzW2VdPSEwLFMuZWFjaCh0W2VdfHxbXSxmdW5jdGlvbihlLHQpe3ZhciBuPXQoaSxvLGEpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pLHJ9cmV0dXJuIGwoaS5kYXRhVHlwZXNbMF0pfHwhc1tcIipcIl0mJmwoXCIqXCIpfWZ1bmN0aW9uICR0KGUsdCl7dmFyIG4scixpPVMuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IobiBpbiB0KXZvaWQgMCE9PXRbbl0mJigoaVtuXT9lOnJ8fChyPXt9KSlbbl09dFtuXSk7cmV0dXJuIHImJlMuZXh0ZW5kKCEwLGUsciksZX1XdC5ocmVmPVR0LmhyZWYsUy5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOlR0LmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8udGVzdChUdC5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6SXQsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOlMucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihlLHQpe3JldHVybiB0PyR0KCR0KGUsUy5hamF4U2V0dGluZ3MpLHQpOiR0KFMuYWpheFNldHRpbmdzLGUpfSxhamF4UHJlZmlsdGVyOkZ0KFJ0KSxhamF4VHJhbnNwb3J0OkZ0KE10KSxhamF4OmZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGUmJih0PWUsZT12b2lkIDApLHQ9dHx8e307dmFyIGMsZixwLG4sZCxyLGgsZyxpLG8sdj1TLmFqYXhTZXR1cCh7fSx0KSx5PXYuY29udGV4dHx8dixtPXYuY29udGV4dCYmKHkubm9kZVR5cGV8fHkuanF1ZXJ5KT9TKHkpOlMuZXZlbnQseD1TLkRlZmVycmVkKCksYj1TLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHc9di5zdGF0dXNDb2RlfHx7fSxhPXt9LHM9e30sdT1cImNhbmNlbGVkXCIsVD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGgpe2lmKCFuKXtuPXt9O3doaWxlKHQ9SHQuZXhlYyhwKSluW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl09KG5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXXx8W10pLmNvbmNhdCh0WzJdKX10PW5bZS50b0xvd2VyQ2FzZSgpK1wiIFwiXX1yZXR1cm4gbnVsbD09dD9udWxsOnQuam9pbihcIiwgXCIpfSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaD9wOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbD09aCYmKGU9c1tlLnRvTG93ZXJDYXNlKCldPXNbZS50b0xvd2VyQ2FzZSgpXXx8ZSxhW2VdPXQpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWgmJih2Lm1pbWVUeXBlPWUpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoZSlpZihoKVQuYWx3YXlzKGVbVC5zdGF0dXNdKTtlbHNlIGZvcih0IGluIGUpd1t0XT1bd1t0XSxlW3RdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8dTtyZXR1cm4gYyYmYy5hYm9ydCh0KSxsKDAsdCksdGhpc319O2lmKHgucHJvbWlzZShUKSx2LnVybD0oKGV8fHYudXJsfHxUdC5ocmVmKStcIlwiKS5yZXBsYWNlKFB0LFR0LnByb3RvY29sK1wiLy9cIiksdi50eXBlPXQubWV0aG9kfHx0LnR5cGV8fHYubWV0aG9kfHx2LnR5cGUsdi5kYXRhVHlwZXM9KHYuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXCJcIl0sbnVsbD09di5jcm9zc0RvbWFpbil7cj1FLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtyLmhyZWY9di51cmwsci5ocmVmPXIuaHJlZix2LmNyb3NzRG9tYWluPVd0LnByb3RvY29sK1wiLy9cIitXdC5ob3N0IT1yLnByb3RvY29sK1wiLy9cIityLmhvc3R9Y2F0Y2goZSl7di5jcm9zc0RvbWFpbj0hMH19aWYodi5kYXRhJiZ2LnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygdi5kYXRhJiYodi5kYXRhPVMucGFyYW0odi5kYXRhLHYudHJhZGl0aW9uYWwpKSxCdChSdCx2LHQsVCksaClyZXR1cm4gVDtmb3IoaSBpbihnPVMuZXZlbnQmJnYuZ2xvYmFsKSYmMD09Uy5hY3RpdmUrKyYmUy5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLHYudHlwZT12LnR5cGUudG9VcHBlckNhc2UoKSx2Lmhhc0NvbnRlbnQ9IU90LnRlc3Qodi50eXBlKSxmPXYudXJsLnJlcGxhY2UocXQsXCJcIiksdi5oYXNDb250ZW50P3YuZGF0YSYmdi5wcm9jZXNzRGF0YSYmMD09PSh2LmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiYodi5kYXRhPXYuZGF0YS5yZXBsYWNlKGp0LFwiK1wiKSk6KG89di51cmwuc2xpY2UoZi5sZW5ndGgpLHYuZGF0YSYmKHYucHJvY2Vzc0RhdGF8fFwic3RyaW5nXCI9PXR5cGVvZiB2LmRhdGEpJiYoZis9KEV0LnRlc3QoZik/XCImXCI6XCI/XCIpK3YuZGF0YSxkZWxldGUgdi5kYXRhKSwhMT09PXYuY2FjaGUmJihmPWYucmVwbGFjZShMdCxcIiQxXCIpLG89KEV0LnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitDdC5ndWlkKysrbyksdi51cmw9ZitvKSx2LmlmTW9kaWZpZWQmJihTLmxhc3RNb2RpZmllZFtmXSYmVC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixTLmxhc3RNb2RpZmllZFtmXSksUy5ldGFnW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsUy5ldGFnW2ZdKSksKHYuZGF0YSYmdi5oYXNDb250ZW50JiYhMSE9PXYuY29udGVudFR5cGV8fHQuY29udGVudFR5cGUpJiZULnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIix2LmNvbnRlbnRUeXBlKSxULnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIix2LmRhdGFUeXBlc1swXSYmdi5hY2NlcHRzW3YuZGF0YVR5cGVzWzBdXT92LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PXYuZGF0YVR5cGVzWzBdP1wiLCBcIitJdCtcIjsgcT0wLjAxXCI6XCJcIik6di5hY2NlcHRzW1wiKlwiXSksdi5oZWFkZXJzKVQuc2V0UmVxdWVzdEhlYWRlcihpLHYuaGVhZGVyc1tpXSk7aWYodi5iZWZvcmVTZW5kJiYoITE9PT12LmJlZm9yZVNlbmQuY2FsbCh5LFQsdil8fGgpKXJldHVybiBULmFib3J0KCk7aWYodT1cImFib3J0XCIsYi5hZGQodi5jb21wbGV0ZSksVC5kb25lKHYuc3VjY2VzcyksVC5mYWlsKHYuZXJyb3IpLGM9QnQoTXQsdix0LFQpKXtpZihULnJlYWR5U3RhdGU9MSxnJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFtULHZdKSxoKXJldHVybiBUO3YuYXN5bmMmJjA8di50aW1lb3V0JiYoZD1DLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtULmFib3J0KFwidGltZW91dFwiKX0sdi50aW1lb3V0KSk7dHJ5e2g9ITEsYy5zZW5kKGEsbCl9Y2F0Y2goZSl7aWYoaCl0aHJvdyBlO2woLTEsZSl9fWVsc2UgbCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiBsKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD10O2h8fChoPSEwLGQmJkMuY2xlYXJUaW1lb3V0KGQpLGM9dm9pZCAwLHA9cnx8XCJcIixULnJlYWR5U3RhdGU9MDxlPzQ6MCxpPTIwMDw9ZSYmZTwzMDB8fDMwND09PWUsbiYmKHM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHM9ZS5jb250ZW50cyx1PWUuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09dVswXSl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119KHYsVCxuKSksIWkmJi0xPFMuaW5BcnJheShcInNjcmlwdFwiLHYuZGF0YVR5cGVzKSYmKHYuY29udmVydGVyc1tcInRleHQgc2NyaXB0XCJdPWZ1bmN0aW9uKCl7fSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07bz1jLnNoaWZ0KCk7d2hpbGUobylpZihlLnJlc3BvbnNlRmllbGRzW29dJiYobltlLnJlc3BvbnNlRmllbGRzW29dXT10KSwhdSYmciYmZS5kYXRhRmlsdGVyJiYodD1lLmRhdGFGaWx0ZXIodCxlLmRhdGFUeXBlKSksdT1vLG89Yy5zaGlmdCgpKWlmKFwiKlwiPT09bylvPXU7ZWxzZSBpZihcIipcIiE9PXUmJnUhPT1vKXtpZighKGE9bFt1K1wiIFwiK29dfHxsW1wiKiBcIitvXSkpZm9yKGkgaW4gbClpZigocz1pLnNwbGl0KFwiIFwiKSlbMV09PT1vJiYoYT1sW3UrXCIgXCIrc1swXV18fGxbXCIqIFwiK3NbMF1dKSl7ITA9PT1hP2E9bFtpXTohMCE9PWxbaV0mJihvPXNbMF0sYy51bnNoaWZ0KHNbMV0pKTticmVha31pZighMCE9PWEpaWYoYSYmZVtcInRocm93c1wiXSl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fSh2LHMsVCxpKSxpPyh2LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJihTLmxhc3RNb2RpZmllZFtmXT11KSwodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJihTLmV0YWdbZl09dSkpLDIwND09PWV8fFwiSEVBRFwiPT09di50eXBlP2w9XCJub2NvbnRlbnRcIjozMDQ9PT1lP2w9XCJub3Rtb2RpZmllZFwiOihsPXMuc3RhdGUsbz1zLmRhdGEsaT0hKGE9cy5lcnJvcikpKTooYT1sLCFlJiZsfHwobD1cImVycm9yXCIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKStcIlwiLGk/eC5yZXNvbHZlV2l0aCh5LFtvLGwsVF0pOngucmVqZWN0V2l0aCh5LFtULGwsYV0pLFQuc3RhdHVzQ29kZSh3KSx3PXZvaWQgMCxnJiZtLnRyaWdnZXIoaT9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbVCx2LGk/bzphXSksYi5maXJlV2l0aCh5LFtULGxdKSxnJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW1Qsdl0pLC0tUy5hY3RpdmV8fFMuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIFR9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBTLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLFMuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oZSxpKXtTW2ldPWZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBtKHQpJiYocj1yfHxuLG49dCx0PXZvaWQgMCksUy5hamF4KFMuZXh0ZW5kKHt1cmw6ZSx0eXBlOmksZGF0YVR5cGU6cixkYXRhOnQsc3VjY2VzczpufSxTLmlzUGxhaW5PYmplY3QoZSkmJmUpKX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZS5oZWFkZXJzKVwiY29udGVudC10eXBlXCI9PT10LnRvTG93ZXJDYXNlKCkmJihlLmNvbnRlbnRUeXBlPWUuaGVhZGVyc1t0XXx8XCJcIil9KSxTLl9ldmFsVXJsPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gUy5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKCl7fX0sZGF0YUZpbHRlcjpmdW5jdGlvbihlKXtTLmdsb2JhbEV2YWwoZSx0LG4pfX0pfSxTLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gdGhpc1swXSYmKG0oZSkmJihlPWUuY2FsbCh0aGlzWzBdKSksdD1TKGUsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZ0Lmluc2VydEJlZm9yZSh0aGlzWzBdKSx0Lm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXM7d2hpbGUoZS5maXJzdEVsZW1lbnRDaGlsZCllPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGV9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihuKXtyZXR1cm4gbShuKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwSW5uZXIobi5jYWxsKHRoaXMsZSkpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uyh0aGlzKSx0PWUuY29udGVudHMoKTt0Lmxlbmd0aD90LndyYXBBbGwobik6ZS5hcHBlbmQobil9KX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgbj1tKHQpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwQWxsKG4/dC5jYWxsKHRoaXMsZSk6dCl9KX0sdW53cmFwOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSx0aGlzfX0pLFMuZXhwci5wc2V1ZG9zLmhpZGRlbj1mdW5jdGlvbihlKXtyZXR1cm4hUy5leHByLnBzZXVkb3MudmlzaWJsZShlKX0sUy5leHByLnBzZXVkb3MudmlzaWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIShlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl9LFMuYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IEMuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goZSl7fX07dmFyIF90PXswOjIwMCwxMjIzOjIwNH0senQ9Uy5hamF4U2V0dGluZ3MueGhyKCk7eS5jb3JzPSEhenQmJlwid2l0aENyZWRlbnRpYWxzXCJpbiB6dCx5LmFqYXg9enQ9ISF6dCxTLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oaSl7dmFyIG8sYTtpZih5LmNvcnN8fHp0JiYhaS5jcm9zc0RvbWFpbilyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9aS54aHIoKTtpZihyLm9wZW4oaS50eXBlLGkudXJsLGkuYXN5bmMsaS51c2VybmFtZSxpLnBhc3N3b3JkKSxpLnhockZpZWxkcylmb3IobiBpbiBpLnhockZpZWxkcylyW25dPWkueGhyRmllbGRzW25dO2ZvcihuIGluIGkubWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlKGkubWltZVR5cGUpLGkuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKSxlKXIuc2V0UmVxdWVzdEhlYWRlcihuLGVbbl0pO289ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7byYmKG89YT1yLm9ubG9hZD1yLm9uZXJyb3I9ci5vbmFib3J0PXIub250aW1lb3V0PXIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09ZT9yLmFib3J0KCk6XCJlcnJvclwiPT09ZT9cIm51bWJlclwiIT10eXBlb2Ygci5zdGF0dXM/dCgwLFwiZXJyb3JcIik6dChyLnN0YXR1cyxyLnN0YXR1c1RleHQpOnQoX3Rbci5zdGF0dXNdfHxyLnN0YXR1cyxyLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oci5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHIucmVzcG9uc2VUZXh0P3tiaW5hcnk6ci5yZXNwb25zZX06e3RleHQ6ci5yZXNwb25zZVRleHR9LHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LHIub25sb2FkPW8oKSxhPXIub25lcnJvcj1yLm9udGltZW91dD1vKFwiZXJyb3JcIiksdm9pZCAwIT09ci5vbmFib3J0P3Iub25hYm9ydD1hOnIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PXIucmVhZHlTdGF0ZSYmQy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7byYmYSgpfSl9LG89byhcImFib3J0XCIpO3RyeXtyLnNlbmQoaS5oYXNDb250ZW50JiZpLmRhdGF8fG51bGwpfWNhdGNoKGUpe2lmKG8pdGhyb3cgZX19LGFib3J0OmZ1bmN0aW9uKCl7byYmbygpfX19KSxTLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pLFMuYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGUpe3JldHVybiBTLmdsb2JhbEV2YWwoZSksZX19fSksUy5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZS5jYWNoZSYmKGUuY2FjaGU9ITEpLGUuY3Jvc3NEb21haW4mJihlLnR5cGU9XCJHRVRcIil9KSxTLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihuKXt2YXIgcixpO2lmKG4uY3Jvc3NEb21haW58fG4uc2NyaXB0QXR0cnMpcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXtyPVMoXCI8c2NyaXB0PlwiKS5hdHRyKG4uc2NyaXB0QXR0cnN8fHt9KS5wcm9wKHtjaGFyc2V0Om4uc2NyaXB0Q2hhcnNldCxzcmM6bi51cmx9KS5vbihcImxvYWQgZXJyb3JcIixpPWZ1bmN0aW9uKGUpe3IucmVtb3ZlKCksaT1udWxsLGUmJnQoXCJlcnJvclwiPT09ZS50eXBlPzQwNDoyMDAsZS50eXBlKX0pLEUuaGVhZC5hcHBlbmRDaGlsZChyWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtpJiZpKCl9fX0pO3ZhciBVdCxYdD1bXSxWdD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO1MuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBlPVh0LnBvcCgpfHxTLmV4cGFuZG8rXCJfXCIrQ3QuZ3VpZCsrO3JldHVybiB0aGlzW2VdPSEwLGV9fSksUy5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT0hMSE9PWUuanNvbnAmJihWdC50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVnQudGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPW0oZS5qc29ucENhbGxiYWNrKT9lLmpzb25wQ2FsbGJhY2soKTplLmpzb25wQ2FsbGJhY2ssYT9lW2FdPWVbYV0ucmVwbGFjZShWdCxcIiQxXCIrcik6ITEhPT1lLmpzb25wJiYoZS51cmwrPShFdC50ZXN0KGUudXJsKT9cIiZcIjpcIj9cIikrZS5qc29ucCtcIj1cIityKSxlLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBvfHxTLmVycm9yKHIrXCIgd2FzIG5vdCBjYWxsZWRcIiksb1swXX0sZS5kYXRhVHlwZXNbMF09XCJqc29uXCIsaT1DW3JdLENbcl09ZnVuY3Rpb24oKXtvPWFyZ3VtZW50c30sbi5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1pP1MoQykucmVtb3ZlUHJvcChyKTpDW3JdPWksZVtyXSYmKGUuanNvbnBDYWxsYmFjaz10Lmpzb25wQ2FsbGJhY2ssWHQucHVzaChyKSksbyYmbShpKSYmaShvWzBdKSxvPWk9dm9pZCAwfSksXCJzY3JpcHRcIn0pLHkuY3JlYXRlSFRNTERvY3VtZW50PSgoVXQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keSkuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09VXQuY2hpbGROb2Rlcy5sZW5ndGgpLFMucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9bXTooXCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHR8fCh5LmNyZWF0ZUhUTUxEb2N1bWVudD8oKHI9KHQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPUUubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9RSksbz0hbiYmW10sKGk9Ti5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT14ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmUyhvKS5yZW1vdmUoKSxTLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LFMuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuLTE8cyYmKHI9dnQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLG0odCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSwwPGEubGVuZ3RoJiZTLmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKGZ1bmN0aW9uKGUpe289YXJndW1lbnRzLGEuaHRtbChyP1MoXCI8ZGl2PlwiKS5hcHBlbmQoUy5wYXJzZUhUTUwoZSkpLmZpbmQocik6ZSl9KS5hbHdheXMobiYmZnVuY3Rpb24oZSx0KXthLmVhY2goZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSl9KSx0aGlzfSxTLmV4cHIucHNldWRvcy5hbmltYXRlZD1mdW5jdGlvbih0KXtyZXR1cm4gUy5ncmVwKFMudGltZXJzLGZ1bmN0aW9uKGUpe3JldHVybiB0PT09ZS5lbGVtfSkubGVuZ3RofSxTLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1TLmNzcyhlLFwicG9zaXRpb25cIiksYz1TKGUpLGY9e307XCJzdGF0aWNcIj09PWwmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1jLm9mZnNldCgpLG89Uy5jc3MoZSxcInRvcFwiKSx1PVMuY3NzKGUsXCJsZWZ0XCIpLChcImFic29sdXRlXCI9PT1sfHxcImZpeGVkXCI9PT1sKSYmLTE8KG8rdSkuaW5kZXhPZihcImF1dG9cIik/KGE9KHI9Yy5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxtKHQpJiYodD10LmNhbGwoZSxuLFMuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihmLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihmLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGYpOihcIm51bWJlclwiPT10eXBlb2YgZi50b3AmJihmLnRvcCs9XCJweFwiKSxcIm51bWJlclwiPT10eXBlb2YgZi5sZWZ0JiYoZi5sZWZ0Kz1cInB4XCIpLGMuY3NzKGYpKX19LFMuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihlKXtTLm9mZnNldC5zZXRPZmZzZXQodGhpcyx0LGUpfSk7dmFyIGUsbixyPXRoaXNbMF07cmV0dXJuIHI/ci5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZT1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ci5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LHt0b3A6ZS50b3Arbi5wYWdlWU9mZnNldCxsZWZ0OmUubGVmdCtuLnBhZ2VYT2Zmc2V0fSk6e3RvcDowLGxlZnQ6MH06dm9pZCAwfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBlLHQsbixyPXRoaXNbMF0saT17dG9wOjAsbGVmdDowfTtpZihcImZpeGVkXCI9PT1TLmNzcyhyLFwicG9zaXRpb25cIikpdD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2Vsc2V7dD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O3doaWxlKGUmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5wYXJlbnROb2RlO2UmJmUhPT1yJiYxPT09ZS5ub2RlVHlwZSYmKChpPVMoZSkub2Zmc2V0KCkpLnRvcCs9Uy5jc3MoZSxcImJvcmRlclRvcFdpZHRoXCIsITApLGkubGVmdCs9Uy5jc3MoZSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSl9cmV0dXJue3RvcDp0LnRvcC1pLnRvcC1TLmNzcyhyLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6dC5sZWZ0LWkubGVmdC1TLmNzcyhyLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShlJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpKWU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGV8fHJlfSl9fSksUy5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZih4KGUpP3I9ZTo5PT09ZS5ub2RlVHlwZSYmKHI9ZS5kZWZhdWx0Vmlldyksdm9pZCAwPT09bilyZXR1cm4gcj9yW2ldOmVbdF07cj9yLnNjcm9sbFRvKG8/ci5wYWdlWE9mZnNldDpuLG8/bjpyLnBhZ2VZT2Zmc2V0KTplW3RdPW59LHQsZSxhcmd1bWVudHMubGVuZ3RoKX19KSxTLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGUsbil7Uy5jc3NIb29rc1tuXT0kZSh5LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybiB0PUJlKGUsbiksTWUudGVzdCh0KT9TKGUpLnBvc2l0aW9uKClbbl0rXCJweFwiOnR9KX0pLFMuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLHMpe1MuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OnMsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24ocixvKXtTLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gJCh0aGlzLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtyZXR1cm4geChlKT8wPT09by5pbmRleE9mKFwib3V0ZXJcIik/ZVtcImlubmVyXCIrYV06ZS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09ZS5ub2RlVHlwZT8ocj1lLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChlLmJvZHlbXCJzY3JvbGxcIithXSxyW1wic2Nyb2xsXCIrYV0sZS5ib2R5W1wib2Zmc2V0XCIrYV0scltcIm9mZnNldFwiK2FdLHJbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PW4/Uy5jc3MoZSx0LGkpOlMuc3R5bGUoZSx0LG4saSl9LHMsbj9lOnZvaWQgMCxuKX19KX0pLFMuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLFMuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSxuKXtTLmZuW25dPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA8YXJndW1lbnRzLmxlbmd0aD90aGlzLm9uKG4sbnVsbCxlLHQpOnRoaXMudHJpZ2dlcihuKX19KTt2YXIgR3Q9L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nO1MucHJveHk9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPWVbdF0sdD1lLGU9biksbShlKSlyZXR1cm4gcj1zLmNhbGwoYXJndW1lbnRzLDIpLChpPWZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodHx8dGhpcyxyLmNvbmNhdChzLmNhbGwoYXJndW1lbnRzKSkpfSkuZ3VpZD1lLmd1aWQ9ZS5ndWlkfHxTLmd1aWQrKyxpfSxTLmhvbGRSZWFkeT1mdW5jdGlvbihlKXtlP1MucmVhZHlXYWl0Kys6Uy5yZWFkeSghMCl9LFMuaXNBcnJheT1BcnJheS5pc0FycmF5LFMucGFyc2VKU09OPUpTT04ucGFyc2UsUy5ub2RlTmFtZT1BLFMuaXNGdW5jdGlvbj1tLFMuaXNXaW5kb3c9eCxTLmNhbWVsQ2FzZT1YLFMudHlwZT13LFMubm93PURhdGUubm93LFMuaXNOdW1lcmljPWZ1bmN0aW9uKGUpe3ZhciB0PVMudHlwZShlKTtyZXR1cm4oXCJudW1iZXJcIj09PXR8fFwic3RyaW5nXCI9PT10KSYmIWlzTmFOKGUtcGFyc2VGbG9hdChlKSl9LFMudHJpbT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOihlK1wiXCIpLnJlcGxhY2UoR3QsXCJcIil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gU30pO3ZhciBZdD1DLmpRdWVyeSxRdD1DLiQ7cmV0dXJuIFMubm9Db25mbGljdD1mdW5jdGlvbihlKXtyZXR1cm4gQy4kPT09UyYmKEMuJD1RdCksZSYmQy5qUXVlcnk9PT1TJiYoQy5qUXVlcnk9WXQpLFN9LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoQy5qUXVlcnk9Qy4kPVMpLFN9KTtcbi8vIERPTS5ldmVudC5tb3ZlXG4vL1xuLy8gMi4wLjBcbi8vXG4vLyBTdGVwaGVuIEJhbmRcbi8vXG4vLyBUcmlnZ2VycyAnbW92ZXN0YXJ0JywgJ21vdmUnIGFuZCAnbW92ZWVuZCcgZXZlbnRzIGFmdGVyXG4vLyBtb3VzZW1vdmVzIGZvbGxvd2luZyBhIG1vdXNlZG93biBjcm9zcyBhIGRpc3RhbmNlIHRocmVzaG9sZCxcbi8vIHNpbWlsYXIgdG8gdGhlIG5hdGl2ZSAnZHJhZ3N0YXJ0JywgJ2RyYWcnIGFuZCAnZHJhZ2VuZCcgZXZlbnRzLlxuLy8gTW92ZSBldmVudHMgYXJlIHRocm90dGxlZCB0byBhbmltYXRpb24gZnJhbWVzLiBNb3ZlIGV2ZW50IG9iamVjdHNcbi8vIGhhdmUgdGhlIHByb3BlcnRpZXM6XG4vL1xuLy8gcGFnZVg6XG4vLyBwYWdlWTogICAgIFBhZ2UgY29vcmRpbmF0ZXMgb2YgcG9pbnRlci5cbi8vIHN0YXJ0WDpcbi8vIHN0YXJ0WTogICAgUGFnZSBjb29yZGluYXRlcyBvZiBwb2ludGVyIGF0IG1vdmVzdGFydC5cbi8vIGRpc3RYOlxuLy8gZGlzdFk6ICAgICBEaXN0YW5jZSB0aGUgcG9pbnRlciBoYXMgbW92ZWQgc2luY2UgbW92ZXN0YXJ0LlxuLy8gZGVsdGFYOlxuLy8gZGVsdGFZOiAgICBEaXN0YW5jZSB0aGUgZmluZ2VyIGhhcyBtb3ZlZCBzaW5jZSBsYXN0IGV2ZW50LlxuLy8gdmVsb2NpdHlYOlxuLy8gdmVsb2NpdHlZOiBBdmVyYWdlIHZlbG9jaXR5IG92ZXIgbGFzdCBmZXcgZXZlbnRzLlxuXG5cbihmdW5jdGlvbihmbikge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZm4pO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICE9PSBudWxsKSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZuO1xuXHR9IGVsc2Uge1xuXHRcdGZuKCk7XG5cdH1cbn0pKGZ1bmN0aW9uKCl7XG5cdHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IHdpbmRvdy5qUXVlcnkgJiYgalF1ZXJ5LmV4dGVuZDtcblxuXHQvLyBOdW1iZXIgb2YgcGl4ZWxzIGEgcHJlc3NlZCBwb2ludGVyIHRyYXZlbHMgYmVmb3JlIG1vdmVzdGFydFxuXHQvLyBldmVudCBpcyBmaXJlZC5cblx0dmFyIHRocmVzaG9sZCA9IDg7XG5cblx0Ly8gU2hpbSBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBmYWxsaW5nIGJhY2sgdG8gdGltZXIuIFNlZTpcblx0Ly8gc2VlIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG5cdHZhciByZXF1ZXN0RnJhbWUgPSAoZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHRcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdFx0ZnVuY3Rpb24oZm4sIGVsZW1lbnQpe1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmbigpO1xuXHRcdFx0XHR9LCAyNSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSkoKTtcblxuXHQvLyBTaGltIGZvciBjdXN0b21FdmVudFxuXHQvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50L0N1c3RvbUV2ZW50I1BvbHlmaWxsXG5cdChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2U7XG5cdFx0ZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xuXHRcdFx0cGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9O1xuXHRcdFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XG5cdFx0XHRldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XG5cdFx0XHRyZXR1cm4gZXZ0O1xuXHRcdH1cblxuXHRcdEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG5cdFx0d2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG5cdH0pKCk7XG5cblx0dmFyIGlnbm9yZVRhZ3MgPSB7XG5cdFx0XHR0ZXh0YXJlYTogdHJ1ZSxcblx0XHRcdGlucHV0OiB0cnVlLFxuXHRcdFx0c2VsZWN0OiB0cnVlLFxuXHRcdFx0YnV0dG9uOiB0cnVlXG5cdFx0fTtcblxuXHR2YXIgbW91c2VldmVudHMgPSB7XG5cdFx0bW92ZTogICAnbW91c2Vtb3ZlJyxcblx0XHRjYW5jZWw6ICdtb3VzZXVwIGRyYWdzdGFydCcsXG5cdFx0ZW5kOiAgICAnbW91c2V1cCdcblx0fTtcblxuXHR2YXIgdG91Y2hldmVudHMgPSB7XG5cdFx0bW92ZTogICAndG91Y2htb3ZlJyxcblx0XHRjYW5jZWw6ICd0b3VjaGVuZCcsXG5cdFx0ZW5kOiAgICAndG91Y2hlbmQnXG5cdH07XG5cblx0dmFyIHJzcGFjZXMgPSAvXFxzKy87XG5cblxuXHQvLyBET00gRXZlbnRzXG5cblx0dmFyIGV2ZW50T3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9O1xuXG5cdHZhciBldmVudHNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woJ2V2ZW50cycpIDoge307XG5cblx0ZnVuY3Rpb24gY3JlYXRlRXZlbnQodHlwZSkge1xuXHRcdHJldHVybiBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgZXZlbnRPcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEV2ZW50cyhub2RlKSB7XG5cdFx0cmV0dXJuIG5vZGVbZXZlbnRzU3ltYm9sXSB8fCAobm9kZVtldmVudHNTeW1ib2xdID0ge30pO1xuXHR9XG5cblx0ZnVuY3Rpb24gb24obm9kZSwgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3Rvcikge1xuXHRcdHR5cGVzID0gdHlwZXMuc3BsaXQocnNwYWNlcyk7XG5cblx0XHR2YXIgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUpO1xuXHRcdHZhciBpID0gdHlwZXMubGVuZ3RoO1xuXHRcdHZhciBoYW5kbGVycywgdHlwZTtcblxuXHRcdGZ1bmN0aW9uIGhhbmRsZXIoZSkgeyBmbihlLCBkYXRhKTsgfVxuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0dHlwZSA9IHR5cGVzW2ldO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbdHlwZV0gfHwgKGV2ZW50c1t0eXBlXSA9IFtdKTtcblx0XHRcdGhhbmRsZXJzLnB1c2goW2ZuLCBoYW5kbGVyXSk7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb2ZmKG5vZGUsIHR5cGVzLCBmbiwgc2VsZWN0b3IpIHtcblx0XHR0eXBlcyA9IHR5cGVzLnNwbGl0KHJzcGFjZXMpO1xuXG5cdFx0dmFyIGV2ZW50cyA9IGdldEV2ZW50cyhub2RlKTtcblx0XHR2YXIgaSA9IHR5cGVzLmxlbmd0aDtcblx0XHR2YXIgdHlwZSwgaGFuZGxlcnMsIGs7XG5cblx0XHRpZiAoIWV2ZW50cykgeyByZXR1cm47IH1cblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdO1xuXHRcdFx0aWYgKCFoYW5kbGVycykgeyBjb250aW51ZTsgfVxuXHRcdFx0ayA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChrLS0pIHtcblx0XHRcdFx0aWYgKGhhbmRsZXJzW2tdWzBdID09PSBmbikge1xuXHRcdFx0XHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyc1trXVsxXSk7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdHJpZ2dlcihub2RlLCB0eXBlLCBwcm9wZXJ0aWVzKSB7XG5cdFx0Ly8gRG9uJ3QgY2FjaGUgZXZlbnRzLiBJdCBwcmV2ZW50cyB5b3UgZnJvbSB0cmlnZ2VyaW5nIGFuIGV2ZW50IG9mIGFcblx0XHQvLyBnaXZlbiB0eXBlIGZyb20gaW5zaWRlIHRoZSBoYW5kbGVyIG9mIGFub3RoZXIgZXZlbnQgb2YgdGhhdCB0eXBlLlxuXHRcdHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KHR5cGUpO1xuXHRcdGlmIChwcm9wZXJ0aWVzKSB7IGFzc2lnbihldmVudCwgcHJvcGVydGllcyk7IH1cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG5cblxuXHQvLyBDb25zdHJ1Y3RvcnNcblxuXHRmdW5jdGlvbiBUaW1lcihmbil7XG5cdFx0dmFyIGNhbGxiYWNrID0gZm4sXG5cdFx0ICAgIGFjdGl2ZSA9IGZhbHNlLFxuXHRcdCAgICBydW5uaW5nID0gZmFsc2U7XG5cblx0XHRmdW5jdGlvbiB0cmlnZ2VyKHRpbWUpIHtcblx0XHRcdGlmIChhY3RpdmUpe1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHRyZXF1ZXN0RnJhbWUodHJpZ2dlcik7XG5cdFx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRhY3RpdmUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5raWNrID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdGFjdGl2ZSA9IHRydWU7XG5cdFx0XHRpZiAoIXJ1bm5pbmcpIHsgdHJpZ2dlcigpOyB9XG5cdFx0fTtcblxuXHRcdHRoaXMuZW5kID0gZnVuY3Rpb24oZm4pIHtcblx0XHRcdHZhciBjYiA9IGNhbGxiYWNrO1xuXG5cdFx0XHRpZiAoIWZuKSB7IHJldHVybjsgfVxuXG5cdFx0XHQvLyBJZiB0aGUgdGltZXIgaXMgbm90IHJ1bm5pbmcsIHNpbXBseSBjYWxsIHRoZSBlbmQgY2FsbGJhY2suXG5cdFx0XHRpZiAoIXJ1bm5pbmcpIHtcblx0XHRcdFx0Zm4oKTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSB0aW1lciBpcyBydW5uaW5nLCBhbmQgaGFzIGJlZW4ga2lja2VkIGxhdGVseSwgdGhlblxuXHRcdFx0Ly8gcXVldWUgdXAgdGhlIGN1cnJlbnQgY2FsbGJhY2sgYW5kIHRoZSBlbmQgY2FsbGJhY2ssIG90aGVyd2lzZVxuXHRcdFx0Ly8ganVzdCB0aGUgZW5kIGNhbGxiYWNrLlxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrID0gYWN0aXZlID9cblx0XHRcdFx0XHRmdW5jdGlvbigpeyBjYigpOyBmbigpOyB9IDpcblx0XHRcdFx0XHRmbiA7XG5cblx0XHRcdFx0YWN0aXZlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblxuXHQvLyBGdW5jdGlvbnNcblxuXHRmdW5jdGlvbiBub29wKCkge31cblxuXHRmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNJZ25vcmVUYWcoZSkge1xuXHRcdHJldHVybiAhIWlnbm9yZVRhZ3NbZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzUHJpbWFyeUJ1dHRvbihlKSB7XG5cdFx0Ly8gSWdub3JlIG1vdXNlZG93bnMgb24gYW55IGJ1dHRvbiBvdGhlciB0aGFuIHRoZSBsZWZ0IChvciBwcmltYXJ5KVxuXHRcdC8vIG1vdXNlIGJ1dHRvbiwgb3Igd2hlbiBhIG1vZGlmaWVyIGtleSBpcyBwcmVzc2VkLlxuXHRcdHJldHVybiAoZS53aGljaCA9PT0gMSAmJiAhZS5jdHJsS2V5ICYmICFlLmFsdEtleSk7XG5cdH1cblxuXHRmdW5jdGlvbiBpZGVudGlmaWVkVG91Y2godG91Y2hMaXN0LCBpZCkge1xuXHRcdHZhciBpLCBsO1xuXG5cdFx0aWYgKHRvdWNoTGlzdC5pZGVudGlmaWVkVG91Y2gpIHtcblx0XHRcdHJldHVybiB0b3VjaExpc3QuaWRlbnRpZmllZFRvdWNoKGlkKTtcblx0XHR9XG5cblx0XHQvLyB0b3VjaExpc3QuaWRlbnRpZmllZFRvdWNoKCkgZG9lcyBub3QgZXhpc3QgaW5cblx0XHQvLyB3ZWJraXQgeWV04oCmIHdlIG11c3QgZG8gdGhlIHNlYXJjaCBvdXJzZWx2ZXMuLi5cblxuXHRcdGkgPSAtMTtcblx0XHRsID0gdG91Y2hMaXN0Lmxlbmd0aDtcblxuXHRcdHdoaWxlICgrK2kgPCBsKSB7XG5cdFx0XHRpZiAodG91Y2hMaXN0W2ldLmlkZW50aWZpZXIgPT09IGlkKSB7XG5cdFx0XHRcdHJldHVybiB0b3VjaExpc3RbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2hhbmdlZFRvdWNoKGUsIGRhdGEpIHtcblx0XHR2YXIgdG91Y2ggPSBpZGVudGlmaWVkVG91Y2goZS5jaGFuZ2VkVG91Y2hlcywgZGF0YS5pZGVudGlmaWVyKTtcblxuXHRcdC8vIFRoaXMgaXNuJ3QgdGhlIHRvdWNoIHlvdSdyZSBsb29raW5nIGZvci5cblx0XHRpZiAoIXRvdWNoKSB7IHJldHVybjsgfVxuXG5cdFx0Ly8gQ2hyb21lIEFuZHJvaWQgKGF0IGxlYXN0KSBpbmNsdWRlcyB0b3VjaGVzIHRoYXQgaGF2ZSBub3Rcblx0XHQvLyBjaGFuZ2VkIGluIGUuY2hhbmdlZFRvdWNoZXMuIFRoYXQncyBhIGJpdCBhbm5veWluZy4gQ2hlY2tcblx0XHQvLyB0aGF0IHRoaXMgdG91Y2ggaGFzIGNoYW5nZWQuXG5cdFx0aWYgKHRvdWNoLnBhZ2VYID09PSBkYXRhLnBhZ2VYICYmIHRvdWNoLnBhZ2VZID09PSBkYXRhLnBhZ2VZKSB7IHJldHVybjsgfVxuXG5cdFx0cmV0dXJuIHRvdWNoO1xuXHR9XG5cblxuXHQvLyBIYW5kbGVycyB0aGF0IGRlY2lkZSB3aGVuIHRoZSBmaXJzdCBtb3Zlc3RhcnQgaXMgdHJpZ2dlcmVkXG5cblx0ZnVuY3Rpb24gbW91c2Vkb3duKGUpe1xuXHRcdC8vIElnbm9yZSBub24tcHJpbWFyeSBidXR0b25zXG5cdFx0aWYgKCFpc1ByaW1hcnlCdXR0b24oZSkpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBJZ25vcmUgZm9ybSBhbmQgaW50ZXJhY3RpdmUgZWxlbWVudHNcblx0XHRpZiAoaXNJZ25vcmVUYWcoZSkpIHsgcmV0dXJuOyB9XG5cblx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgbW91c2Vtb3ZlLCBlKTtcblx0XHRvbihkb2N1bWVudCwgbW91c2VldmVudHMuY2FuY2VsLCBtb3VzZWVuZCwgZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZW1vdmUoZSwgZGF0YSl7XG5cdFx0Y2hlY2tUaHJlc2hvbGQoZSwgZGF0YSwgZSwgcmVtb3ZlTW91c2UpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2VlbmQoZSwgZGF0YSkge1xuXHRcdHJlbW92ZU1vdXNlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVNb3VzZSgpIHtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLm1vdmUsIG1vdXNlbW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5jYW5jZWwsIG1vdXNlZW5kKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvdWNoc3RhcnQoZSkge1xuXHRcdC8vIERvbid0IGdldCBpbiB0aGUgd2F5IG9mIGludGVyYWN0aW9uIHdpdGggZm9ybSBlbGVtZW50c1xuXHRcdGlmIChpZ25vcmVUYWdzW2UudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKV0pIHsgcmV0dXJuOyB9XG5cblx0XHR2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG5cdFx0Ly8gaU9TIGxpdmUgdXBkYXRlcyB0aGUgdG91Y2ggb2JqZWN0cyB3aGVyZWFzIEFuZHJvaWQgZ2l2ZXMgdXMgY29waWVzLlxuXHRcdC8vIFRoYXQgbWVhbnMgd2UgY2FuJ3QgdHJ1c3QgdGhlIHRvdWNoc3RhcnQgb2JqZWN0IHRvIHN0YXkgdGhlIHNhbWUsXG5cdFx0Ly8gc28gd2UgbXVzdCBjb3B5IHRoZSBkYXRhLiBUaGlzIG9iamVjdCBhY3RzIGFzIGEgdGVtcGxhdGUgZm9yXG5cdFx0Ly8gbW92ZXN0YXJ0LCBtb3ZlIGFuZCBtb3ZlZW5kIGV2ZW50IG9iamVjdHMuXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHR0YXJnZXQ6ICAgICB0b3VjaC50YXJnZXQsXG5cdFx0XHRwYWdlWDogICAgICB0b3VjaC5wYWdlWCxcblx0XHRcdHBhZ2VZOiAgICAgIHRvdWNoLnBhZ2VZLFxuXHRcdFx0aWRlbnRpZmllcjogdG91Y2guaWRlbnRpZmllcixcblxuXHRcdFx0Ly8gVGhlIG9ubHkgd2F5IHRvIG1ha2UgaGFuZGxlcnMgaW5kaXZpZHVhbGx5IHVuYmluZGFibGUgaXMgYnlcblx0XHRcdC8vIG1ha2luZyB0aGVtIHVuaXF1ZS5cblx0XHRcdHRvdWNobW92ZTogIGZ1bmN0aW9uKGUsIGRhdGEpIHsgdG91Y2htb3ZlKGUsIGRhdGEpOyB9LFxuXHRcdFx0dG91Y2hlbmQ6ICAgZnVuY3Rpb24oZSwgZGF0YSkgeyB0b3VjaGVuZChlLCBkYXRhKTsgfVxuXHRcdH07XG5cblx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS50b3VjaG1vdmUsIGRhdGEpO1xuXHRcdG9uKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5jYW5jZWwsIGRhdGEudG91Y2hlbmQsIGRhdGEpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2htb3ZlKGUsIGRhdGEpIHtcblx0XHR2YXIgdG91Y2ggPSBjaGFuZ2VkVG91Y2goZSwgZGF0YSk7XG5cdFx0aWYgKCF0b3VjaCkgeyByZXR1cm47IH1cblx0XHRjaGVja1RocmVzaG9sZChlLCBkYXRhLCB0b3VjaCwgcmVtb3ZlVG91Y2gpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG91Y2hlbmQoZSwgZGF0YSkge1xuXHRcdHZhciB0b3VjaCA9IGlkZW50aWZpZWRUb3VjaChlLmNoYW5nZWRUb3VjaGVzLCBkYXRhLmlkZW50aWZpZXIpO1xuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cdFx0cmVtb3ZlVG91Y2goZGF0YSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVUb3VjaChkYXRhKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLnRvdWNobW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5jYW5jZWwsIGRhdGEudG91Y2hlbmQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2hlY2tUaHJlc2hvbGQoZSwgZGF0YSwgdG91Y2gsIGZuKSB7XG5cdFx0dmFyIGRpc3RYID0gdG91Y2gucGFnZVggLSBkYXRhLnBhZ2VYO1xuXHRcdHZhciBkaXN0WSA9IHRvdWNoLnBhZ2VZIC0gZGF0YS5wYWdlWTtcblxuXHRcdC8vIERvIG5vdGhpbmcgaWYgdGhlIHRocmVzaG9sZCBoYXMgbm90IGJlZW4gY3Jvc3NlZC5cblx0XHRpZiAoKGRpc3RYICogZGlzdFgpICsgKGRpc3RZICogZGlzdFkpIDwgKHRocmVzaG9sZCAqIHRocmVzaG9sZCkpIHsgcmV0dXJuOyB9XG5cblx0XHR0cmlnZ2VyU3RhcnQoZSwgZGF0YSwgdG91Y2gsIGRpc3RYLCBkaXN0WSwgZm4pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpZ2dlclN0YXJ0KGUsIGRhdGEsIHRvdWNoLCBkaXN0WCwgZGlzdFksIGZuKSB7XG5cdFx0dmFyIHRvdWNoZXMgPSBlLnRhcmdldFRvdWNoZXM7XG5cdFx0dmFyIHRpbWUgPSBlLnRpbWVTdGFtcCAtIGRhdGEudGltZVN0YW1wO1xuXG5cdFx0Ly8gQ3JlYXRlIGEgbW92ZXN0YXJ0IG9iamVjdCB3aXRoIHNvbWUgc3BlY2lhbCBwcm9wZXJ0aWVzIHRoYXRcblx0XHQvLyBhcmUgcGFzc2VkIG9ubHkgdG8gdGhlIG1vdmVzdGFydCBoYW5kbGVycy5cblx0XHR2YXIgdGVtcGxhdGUgPSB7XG5cdFx0XHRhbHRLZXk6ICAgICBlLmFsdEtleSxcblx0XHRcdGN0cmxLZXk6ICAgIGUuY3RybEtleSxcblx0XHRcdHNoaWZ0S2V5OiAgIGUuc2hpZnRLZXksXG5cdFx0XHRzdGFydFg6ICAgICBkYXRhLnBhZ2VYLFxuXHRcdFx0c3RhcnRZOiAgICAgZGF0YS5wYWdlWSxcblx0XHRcdGRpc3RYOiAgICAgIGRpc3RYLFxuXHRcdFx0ZGlzdFk6ICAgICAgZGlzdFksXG5cdFx0XHRkZWx0YVg6ICAgICBkaXN0WCxcblx0XHRcdGRlbHRhWTogICAgIGRpc3RZLFxuXHRcdFx0cGFnZVg6ICAgICAgdG91Y2gucGFnZVgsXG5cdFx0XHRwYWdlWTogICAgICB0b3VjaC5wYWdlWSxcblx0XHRcdHZlbG9jaXR5WDogIGRpc3RYIC8gdGltZSxcblx0XHRcdHZlbG9jaXR5WTogIGRpc3RZIC8gdGltZSxcblx0XHRcdGlkZW50aWZpZXI6IGRhdGEuaWRlbnRpZmllcixcblx0XHRcdHRhcmdldFRvdWNoZXM6IHRvdWNoZXMsXG5cdFx0XHRmaW5nZXI6IHRvdWNoZXMgPyB0b3VjaGVzLmxlbmd0aCA6IDEsXG5cdFx0XHRlbmFibGVNb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5tb3ZlRW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZW5hYmxlTW92ZSA9IG5vb3A7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gVHJpZ2dlciB0aGUgbW92ZXN0YXJ0IGV2ZW50LlxuXHRcdHRyaWdnZXIoZGF0YS50YXJnZXQsICdtb3Zlc3RhcnQnLCB0ZW1wbGF0ZSk7XG5cblx0XHQvLyBVbmJpbmQgaGFuZGxlcnMgdGhhdCB0cmFja2VkIHRoZSB0b3VjaCBvciBtb3VzZSB1cCB0aWxsIG5vdy5cblx0XHRmbihkYXRhKTtcblx0fVxuXG5cblx0Ly8gSGFuZGxlcnMgdGhhdCBjb250cm9sIHdoYXQgaGFwcGVucyBmb2xsb3dpbmcgYSBtb3Zlc3RhcnRcblxuXHRmdW5jdGlvbiBhY3RpdmVNb3VzZW1vdmUoZSwgZGF0YSkge1xuXHRcdHZhciB0aW1lciAgPSBkYXRhLnRpbWVyO1xuXG5cdFx0ZGF0YS50b3VjaCA9IGU7XG5cdFx0ZGF0YS50aW1lU3RhbXAgPSBlLnRpbWVTdGFtcDtcblx0XHR0aW1lci5raWNrKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhY3RpdmVNb3VzZWVuZChlLCBkYXRhKSB7XG5cdFx0dmFyIHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuXHRcdHZhciBldmVudCAgPSBkYXRhLmV2ZW50O1xuXHRcdHZhciB0aW1lciAgPSBkYXRhLnRpbWVyO1xuXG5cdFx0cmVtb3ZlQWN0aXZlTW91c2UoKTtcblxuXHRcdGVuZEV2ZW50KHRhcmdldCwgZXZlbnQsIHRpbWVyLCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIFVuYmluZCB0aGUgY2xpY2sgc3VwcHJlc3Nvciwgd2FpdGluZyB1bnRpbCBhZnRlciBtb3VzZXVwXG5cdFx0XHQvLyBoYXMgYmVlbiBoYW5kbGVkLlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRvZmYodGFyZ2V0LCAnY2xpY2snLCBwcmV2ZW50RGVmYXVsdCk7XG5cdFx0XHR9LCAwKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZU1vdXNlKCkge1xuXHRcdG9mZihkb2N1bWVudCwgbW91c2VldmVudHMubW92ZSwgYWN0aXZlTW91c2Vtb3ZlKTtcblx0XHRvZmYoZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmVuZCwgYWN0aXZlTW91c2VlbmQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWN0aXZlVG91Y2htb3ZlKGUsIGRhdGEpIHtcblx0XHR2YXIgZXZlbnQgPSBkYXRhLmV2ZW50O1xuXHRcdHZhciB0aW1lciA9IGRhdGEudGltZXI7XG5cdFx0dmFyIHRvdWNoID0gY2hhbmdlZFRvdWNoKGUsIGV2ZW50KTtcblxuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBTdG9wIHRoZSBpbnRlcmZhY2UgZnJvbSBnZXN0dXJpbmdcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRldmVudC50YXJnZXRUb3VjaGVzID0gZS50YXJnZXRUb3VjaGVzO1xuXHRcdGRhdGEudG91Y2ggPSB0b3VjaDtcblx0XHRkYXRhLnRpbWVTdGFtcCA9IGUudGltZVN0YW1wO1xuXG5cdFx0dGltZXIua2ljaygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWN0aXZlVG91Y2hlbmQoZSwgZGF0YSkge1xuXHRcdHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcblx0XHR2YXIgZXZlbnQgID0gZGF0YS5ldmVudDtcblx0XHR2YXIgdGltZXIgID0gZGF0YS50aW1lcjtcblx0XHR2YXIgdG91Y2ggID0gaWRlbnRpZmllZFRvdWNoKGUuY2hhbmdlZFRvdWNoZXMsIGV2ZW50LmlkZW50aWZpZXIpO1xuXG5cdFx0Ly8gVGhpcyBpc24ndCB0aGUgdG91Y2ggeW91J3JlIGxvb2tpbmcgZm9yLlxuXHRcdGlmICghdG91Y2gpIHsgcmV0dXJuOyB9XG5cblx0XHRyZW1vdmVBY3RpdmVUb3VjaChkYXRhKTtcblx0XHRlbmRFdmVudCh0YXJnZXQsIGV2ZW50LCB0aW1lcik7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVBY3RpdmVUb3VjaChkYXRhKSB7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5tb3ZlLCBkYXRhLmFjdGl2ZVRvdWNobW92ZSk7XG5cdFx0b2ZmKGRvY3VtZW50LCB0b3VjaGV2ZW50cy5lbmQsIGRhdGEuYWN0aXZlVG91Y2hlbmQpO1xuXHR9XG5cblxuXHQvLyBMb2dpYyBmb3IgdHJpZ2dlcmluZyBtb3ZlIGFuZCBtb3ZlZW5kIGV2ZW50c1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUV2ZW50KGV2ZW50LCB0b3VjaCwgdGltZVN0YW1wKSB7XG5cdFx0dmFyIHRpbWUgPSB0aW1lU3RhbXAgLSBldmVudC50aW1lU3RhbXA7XG5cblx0XHRldmVudC5kaXN0WCA9ICB0b3VjaC5wYWdlWCAtIGV2ZW50LnN0YXJ0WDtcblx0XHRldmVudC5kaXN0WSA9ICB0b3VjaC5wYWdlWSAtIGV2ZW50LnN0YXJ0WTtcblx0XHRldmVudC5kZWx0YVggPSB0b3VjaC5wYWdlWCAtIGV2ZW50LnBhZ2VYO1xuXHRcdGV2ZW50LmRlbHRhWSA9IHRvdWNoLnBhZ2VZIC0gZXZlbnQucGFnZVk7XG5cblx0XHQvLyBBdmVyYWdlIHRoZSB2ZWxvY2l0eSBvZiB0aGUgbGFzdCBmZXcgZXZlbnRzIHVzaW5nIGEgZGVjYXlcblx0XHQvLyBjdXJ2ZSB0byBldmVuIG91dCBzcHVyaW91cyBqdW1wcyBpbiB2YWx1ZXMuXG5cdFx0ZXZlbnQudmVsb2NpdHlYID0gMC4zICogZXZlbnQudmVsb2NpdHlYICsgMC43ICogZXZlbnQuZGVsdGFYIC8gdGltZTtcblx0XHRldmVudC52ZWxvY2l0eVkgPSAwLjMgKiBldmVudC52ZWxvY2l0eVkgKyAwLjcgKiBldmVudC5kZWx0YVkgLyB0aW1lO1xuXHRcdGV2ZW50LnBhZ2VYID0gIHRvdWNoLnBhZ2VYO1xuXHRcdGV2ZW50LnBhZ2VZID0gIHRvdWNoLnBhZ2VZO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5kRXZlbnQodGFyZ2V0LCBldmVudCwgdGltZXIsIGZuKSB7XG5cdFx0dGltZXIuZW5kKGZ1bmN0aW9uKCl7XG5cdFx0XHR0cmlnZ2VyKHRhcmdldCwgJ21vdmVlbmQnLCBldmVudCk7XG5cdFx0XHRyZXR1cm4gZm4gJiYgZm4oKTtcblx0XHR9KTtcblx0fVxuXG5cblx0Ly8gU2V0IHVwIHRoZSBET01cblxuXHRmdW5jdGlvbiBtb3Zlc3RhcnQoZSkge1xuXHRcdGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuOyB9XG5cdFx0aWYgKCFlLm1vdmVFbmFibGVkKSB7IHJldHVybjsgfVxuXG5cdFx0dmFyIGV2ZW50ID0ge1xuXHRcdFx0c3RhcnRYOiAgICAgICAgZS5zdGFydFgsXG5cdFx0XHRzdGFydFk6ICAgICAgICBlLnN0YXJ0WSxcblx0XHRcdHBhZ2VYOiAgICAgICAgIGUucGFnZVgsXG5cdFx0XHRwYWdlWTogICAgICAgICBlLnBhZ2VZLFxuXHRcdFx0ZGlzdFg6ICAgICAgICAgZS5kaXN0WCxcblx0XHRcdGRpc3RZOiAgICAgICAgIGUuZGlzdFksXG5cdFx0XHRkZWx0YVg6ICAgICAgICBlLmRlbHRhWCxcblx0XHRcdGRlbHRhWTogICAgICAgIGUuZGVsdGFZLFxuXHRcdFx0dmVsb2NpdHlYOiAgICAgZS52ZWxvY2l0eVgsXG5cdFx0XHR2ZWxvY2l0eVk6ICAgICBlLnZlbG9jaXR5WSxcblx0XHRcdGlkZW50aWZpZXI6ICAgIGUuaWRlbnRpZmllcixcblx0XHRcdHRhcmdldFRvdWNoZXM6IGUudGFyZ2V0VG91Y2hlcyxcblx0XHRcdGZpbmdlcjogICAgICAgIGUuZmluZ2VyXG5cdFx0fTtcblxuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0dGFyZ2V0OiAgICBlLnRhcmdldCxcblx0XHRcdGV2ZW50OiAgICAgZXZlbnQsXG5cdFx0XHR0aW1lcjogICAgIG5ldyBUaW1lcih1cGRhdGUpLFxuXHRcdFx0dG91Y2g6ICAgICB1bmRlZmluZWQsXG5cdFx0XHR0aW1lU3RhbXA6IGUudGltZVN0YW1wXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSh0aW1lKSB7XG5cdFx0XHR1cGRhdGVFdmVudChldmVudCwgZGF0YS50b3VjaCwgZGF0YS50aW1lU3RhbXApO1xuXHRcdFx0dHJpZ2dlcihkYXRhLnRhcmdldCwgJ21vdmUnLCBldmVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKGUuaWRlbnRpZmllciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSBtb3VzZSBldmVudC5cblx0XHRcdC8vIFN0b3AgY2xpY2tzIGZyb20gcHJvcGFnYXRpbmcgZHVyaW5nIGEgbW92ZVxuXHRcdFx0b24oZS50YXJnZXQsICdjbGljaycsIHByZXZlbnREZWZhdWx0KTtcblx0XHRcdG9uKGRvY3VtZW50LCBtb3VzZWV2ZW50cy5tb3ZlLCBhY3RpdmVNb3VzZW1vdmUsIGRhdGEpO1xuXHRcdFx0b24oZG9jdW1lbnQsIG1vdXNlZXZlbnRzLmVuZCwgYWN0aXZlTW91c2VlbmQsIGRhdGEpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIEluIG9yZGVyIHRvIHVuYmluZCBjb3JyZWN0IGhhbmRsZXJzIHRoZXkgaGF2ZSB0byBiZSB1bmlxdWVcblx0XHRcdGRhdGEuYWN0aXZlVG91Y2htb3ZlID0gZnVuY3Rpb24oZSwgZGF0YSkgeyBhY3RpdmVUb3VjaG1vdmUoZSwgZGF0YSk7IH07XG5cdFx0XHRkYXRhLmFjdGl2ZVRvdWNoZW5kID0gZnVuY3Rpb24oZSwgZGF0YSkgeyBhY3RpdmVUb3VjaGVuZChlLCBkYXRhKTsgfTtcblxuXHRcdFx0Ly8gV2UncmUgZGVhbGluZyB3aXRoIGEgdG91Y2guXG5cdFx0XHRvbihkb2N1bWVudCwgdG91Y2hldmVudHMubW92ZSwgZGF0YS5hY3RpdmVUb3VjaG1vdmUsIGRhdGEpO1xuXHRcdFx0b24oZG9jdW1lbnQsIHRvdWNoZXZlbnRzLmVuZCwgZGF0YS5hY3RpdmVUb3VjaGVuZCwgZGF0YSk7XG5cdFx0fVxuXHR9XG5cblx0b24oZG9jdW1lbnQsICdtb3VzZWRvd24nLCBtb3VzZWRvd24pO1xuXHRvbihkb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0KTtcblx0b24oZG9jdW1lbnQsICdtb3Zlc3RhcnQnLCBtb3Zlc3RhcnQpO1xuXG5cblx0Ly8galF1ZXJ5IHNwZWNpYWwgZXZlbnRzXG5cdC8vXG5cdC8vIGpRdWVyeSBldmVudCBvYmplY3RzIGFyZSBjb3BpZXMgb2YgRE9NIGV2ZW50IG9iamVjdHMuIFRoZXkgbmVlZFxuXHQvLyBhIGxpdHRsZSBoZWxwIGNvcHlpbmcgdGhlIG1vdmUgcHJvcGVydGllcyBhY3Jvc3MuXG5cblx0aWYgKCF3aW5kb3cualF1ZXJ5KSB7IHJldHVybjsgfVxuXG5cdHZhciBwcm9wZXJ0aWVzID0gKFwic3RhcnRYIHN0YXJ0WSBwYWdlWCBwYWdlWSBkaXN0WCBkaXN0WSBkZWx0YVggZGVsdGFZIHZlbG9jaXR5WCB2ZWxvY2l0eVlcIikuc3BsaXQoJyAnKTtcblxuXHRmdW5jdGlvbiBlbmFibGVNb3ZlMShlKSB7IGUuZW5hYmxlTW92ZSgpOyB9XG5cdGZ1bmN0aW9uIGVuYWJsZU1vdmUyKGUpIHsgZS5lbmFibGVNb3ZlKCk7IH1cblx0ZnVuY3Rpb24gZW5hYmxlTW92ZTMoZSkgeyBlLmVuYWJsZU1vdmUoKTsgfVxuXG5cdGZ1bmN0aW9uIGFkZChoYW5kbGVPYmopIHtcblx0XHR2YXIgaGFuZGxlciA9IGhhbmRsZU9iai5oYW5kbGVyO1xuXG5cdFx0aGFuZGxlT2JqLmhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHQvLyBDb3B5IG1vdmUgcHJvcGVydGllcyBhY3Jvc3MgZnJvbSBvcmlnaW5hbEV2ZW50XG5cdFx0XHR2YXIgaSA9IHByb3BlcnRpZXMubGVuZ3RoO1xuXHRcdFx0dmFyIHByb3BlcnR5O1xuXG5cdFx0XHR3aGlsZShpLS0pIHtcblx0XHRcdFx0cHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuXHRcdFx0XHRlW3Byb3BlcnR5XSA9IGUub3JpZ2luYWxFdmVudFtwcm9wZXJ0eV07XG5cdFx0XHR9XG5cblx0XHRcdGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZXN0YXJ0ID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIE1vdmVzdGFydCBtdXN0IGJlIGVuYWJsZWQgdG8gYWxsb3cgb3RoZXIgbW92ZSBldmVudHNcblx0XHRcdG9uKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMSk7XG5cblx0XHRcdC8vIERvIGxpc3RlbiB0byBET00gZXZlbnRzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdG9mZih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTEpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRhZGQ6IGFkZFxuXHR9O1xuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsLm1vdmUgPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0b24odGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUyKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0b2ZmKHRoaXMsICdtb3Zlc3RhcnQnLCBlbmFibGVNb3ZlMik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGFkZDogYWRkXG5cdH07XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWwubW92ZWVuZCA9IHtcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRvbih0aGlzLCAnbW92ZXN0YXJ0JywgZW5hYmxlTW92ZTMpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRvZmYodGhpcywgJ21vdmVzdGFydCcsIGVuYWJsZU1vdmUzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0YWRkOiBhZGRcblx0fTtcbn0pO1xuXG4vLyBqUXVlcnkgTWFzayBQbHVnaW4gdjEuMTQuMTZcbi8vIGdpdGh1Yi5jb20vaWdvcmVzY29iYXIvalF1ZXJ5LU1hc2stUGx1Z2luXG4vLyB2YXIgJGpzY29tcD0kanNjb21wfHx7fTskanNjb21wLnNjb3BlPXt9OyRqc2NvbXAuZmluZEludGVybmFsPWZ1bmN0aW9uKGEsbixmKXthIGluc3RhbmNlb2YgU3RyaW5nJiYoYT1TdHJpbmcoYSkpO2Zvcih2YXIgcD1hLmxlbmd0aCxrPTA7azxwO2srKyl7dmFyIGI9YVtrXTtpZihuLmNhbGwoZixiLGssYSkpcmV0dXJue2k6ayx2OmJ9fXJldHVybntpOi0xLHY6dm9pZCAwfX07JGpzY29tcC5BU1NVTUVfRVM1PSExOyRqc2NvbXAuQVNTVU1FX05PX05BVElWRV9NQVA9ITE7JGpzY29tcC5BU1NVTUVfTk9fTkFUSVZFX1NFVD0hMTskanNjb21wLlNJTVBMRV9GUk9VTkRfUE9MWUZJTEw9ITE7XG4vLyAkanNjb21wLmRlZmluZVByb3BlcnR5PSRqc2NvbXAuQVNTVU1FX0VTNXx8XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsbixmKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW25dPWYudmFsdWUpfTskanNjb21wLmdldEdsb2JhbD1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT1hP2E6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDphfTskanNjb21wLmdsb2JhbD0kanNjb21wLmdldEdsb2JhbCh0aGlzKTtcbi8vICRqc2NvbXAucG9seWZpbGw9ZnVuY3Rpb24oYSxuLGYscCl7aWYobil7Zj0kanNjb21wLmdsb2JhbDthPWEuc3BsaXQoXCIuXCIpO2ZvcihwPTA7cDxhLmxlbmd0aC0xO3ArKyl7dmFyIGs9YVtwXTtrIGluIGZ8fChmW2tdPXt9KTtmPWZba119YT1hW2EubGVuZ3RoLTFdO3A9ZlthXTtuPW4ocCk7biE9cCYmbnVsbCE9biYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShmLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSl9fTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmZpbmRcIixmdW5jdGlvbihhKXtyZXR1cm4gYT9hOmZ1bmN0aW9uKGEsZil7cmV0dXJuICRqc2NvbXAuZmluZEludGVybmFsKHRoaXMsYSxmKS52fX0sXCJlczZcIixcImVzM1wiKTtcbi8vIChmdW5jdGlvbihhLG4sZil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBNZXRlb3I/bW9kdWxlLmV4cG9ydHM9YShyZXF1aXJlKFwianF1ZXJ5XCIpKTphKG58fGYpfSkoZnVuY3Rpb24oYSl7dmFyIG49ZnVuY3Rpb24oYixkLGUpe3ZhciBjPXtpbnZhbGlkOltdLGdldENhcmV0OmZ1bmN0aW9uKCl7dHJ5e3ZhciBhPTAscj1iLmdldCgwKSxoPWRvY3VtZW50LnNlbGVjdGlvbixkPXIuc2VsZWN0aW9uU3RhcnQ7aWYoaCYmLTE9PT1uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSAxMFwiKSl7dmFyIGU9aC5jcmVhdGVSYW5nZSgpO2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsLWMudmFsKCkubGVuZ3RoKTthPWUudGV4dC5sZW5ndGh9ZWxzZSBpZihkfHxcIjBcIj09PWQpYT1kO3JldHVybiBhfWNhdGNoKEMpe319LHNldENhcmV0OmZ1bmN0aW9uKGEpe3RyeXtpZihiLmlzKFwiOmZvY3VzXCIpKXt2YXIgYz1cbi8vIGIuZ2V0KDApO2lmKGMuc2V0U2VsZWN0aW9uUmFuZ2UpYy5zZXRTZWxlY3Rpb25SYW5nZShhLGEpO2Vsc2V7dmFyIGc9Yy5jcmVhdGVUZXh0UmFuZ2UoKTtnLmNvbGxhcHNlKCEwKTtnLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIixhKTtnLm1vdmVTdGFydChcImNoYXJhY3RlclwiLGEpO2cuc2VsZWN0KCl9fX1jYXRjaChCKXt9fSxldmVudHM6ZnVuY3Rpb24oKXtiLm9uKFwia2V5ZG93bi5tYXNrXCIsZnVuY3Rpb24oYSl7Yi5kYXRhKFwibWFzay1rZXljb2RlXCIsYS5rZXlDb2RlfHxhLndoaWNoKTtiLmRhdGEoXCJtYXNrLXByZXZpdXMtdmFsdWVcIixiLnZhbCgpKTtiLmRhdGEoXCJtYXNrLXByZXZpdXMtY2FyZXQtcG9zXCIsYy5nZXRDYXJldCgpKTtjLm1hc2tEaWdpdFBvc01hcE9sZD1jLm1hc2tEaWdpdFBvc01hcH0pLm9uKGEuak1hc2tHbG9iYWxzLnVzZUlucHV0P1wiaW5wdXQubWFza1wiOlwia2V5dXAubWFza1wiLGMuYmVoYXZpb3VyKS5vbihcInBhc3RlLm1hc2sgZHJvcC5tYXNrXCIsZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5rZXlkb3duKCkua2V5dXAoKX0sXG4vLyAxMDApfSkub24oXCJjaGFuZ2UubWFza1wiLGZ1bmN0aW9uKCl7Yi5kYXRhKFwiY2hhbmdlZFwiLCEwKX0pLm9uKFwiYmx1ci5tYXNrXCIsZnVuY3Rpb24oKXtmPT09Yy52YWwoKXx8Yi5kYXRhKFwiY2hhbmdlZFwiKXx8Yi50cmlnZ2VyKFwiY2hhbmdlXCIpO2IuZGF0YShcImNoYW5nZWRcIiwhMSl9KS5vbihcImJsdXIubWFza1wiLGZ1bmN0aW9uKCl7Zj1jLnZhbCgpfSkub24oXCJmb2N1cy5tYXNrXCIsZnVuY3Rpb24oYil7ITA9PT1lLnNlbGVjdE9uRm9jdXMmJmEoYi50YXJnZXQpLnNlbGVjdCgpfSkub24oXCJmb2N1c291dC5tYXNrXCIsZnVuY3Rpb24oKXtlLmNsZWFySWZOb3RNYXRjaCYmIWsudGVzdChjLnZhbCgpKSYmYy52YWwoXCJcIil9KX0sZ2V0UmVnZXhNYXNrOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGIsYyxlLHQsZj0wO2Y8ZC5sZW5ndGg7ZisrKShiPWwudHJhbnNsYXRpb25bZC5jaGFyQXQoZildKT8oYz1iLnBhdHRlcm4udG9TdHJpbmcoKS5yZXBsYWNlKC8uezF9JHxeLnsxfS9nLFwiXCIpLGU9Yi5vcHRpb25hbCxcbi8vIChiPWIucmVjdXJzaXZlKT8oYS5wdXNoKGQuY2hhckF0KGYpKSx0PXtkaWdpdDpkLmNoYXJBdChmKSxwYXR0ZXJuOmN9KTphLnB1c2goZXx8Yj9jK1wiP1wiOmMpKTphLnB1c2goZC5jaGFyQXQoZikucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLFwiXFxcXCQmXCIpKTthPWEuam9pbihcIlwiKTt0JiYoYT1hLnJlcGxhY2UobmV3IFJlZ0V4cChcIihcIit0LmRpZ2l0K1wiKC4qXCIrdC5kaWdpdCtcIik/KVwiKSxcIigkMSk/XCIpLnJlcGxhY2UobmV3IFJlZ0V4cCh0LmRpZ2l0LFwiZ1wiKSx0LnBhdHRlcm4pKTtyZXR1cm4gbmV3IFJlZ0V4cChhKX0sZGVzdHJveUV2ZW50czpmdW5jdGlvbigpe2Iub2ZmKFwiaW5wdXQga2V5ZG93biBrZXl1cCBwYXN0ZSBkcm9wIGJsdXIgZm9jdXNvdXQgXCIuc3BsaXQoXCIgXCIpLmpvaW4oXCIubWFzayBcIikpfSx2YWw6ZnVuY3Rpb24oYSl7dmFyIGM9Yi5pcyhcImlucHV0XCIpP1widmFsXCI6XCJ0ZXh0XCI7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZihiW2NdKCkhPT1hKWJbY10oYSk7XG4vLyBjPWJ9ZWxzZSBjPWJbY10oKTtyZXR1cm4gY30sY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbjpmdW5jdGlvbihhKXt2YXIgZD1jLmdldE1hc2tlZCgpLGg9Yy5nZXRDYXJldCgpO2lmKGEhPT1kKXt2YXIgZT1iLmRhdGEoXCJtYXNrLXByZXZpdXMtY2FyZXQtcG9zXCIpfHwwO2Q9ZC5sZW5ndGg7dmFyIGc9YS5sZW5ndGgsZj1hPTAsbD0wLGs9MCxtO2ZvcihtPWg7bTxkJiZjLm1hc2tEaWdpdFBvc01hcFttXTttKyspZisrO2ZvcihtPWgtMTswPD1tJiZjLm1hc2tEaWdpdFBvc01hcFttXTttLS0pYSsrO2ZvcihtPWgtMTswPD1tO20tLSljLm1hc2tEaWdpdFBvc01hcFttXSYmbCsrO2ZvcihtPWUtMTswPD1tO20tLSljLm1hc2tEaWdpdFBvc01hcE9sZFttXSYmaysrO2g+Zz9oPTEwKmQ6ZT49aCYmZSE9PWc/Yy5tYXNrRGlnaXRQb3NNYXBPbGRbaF18fChlPWgsaD1oLShrLWwpLWEsYy5tYXNrRGlnaXRQb3NNYXBbaF0mJihoPWUpKTpoPmUmJihoPWgrKGwtaykrZil9cmV0dXJuIGh9LGJlaGF2aW91cjpmdW5jdGlvbihkKXtkPVxuLy8gZHx8d2luZG93LmV2ZW50O2MuaW52YWxpZD1bXTt2YXIgZT1iLmRhdGEoXCJtYXNrLWtleWNvZGVcIik7aWYoLTE9PT1hLmluQXJyYXkoZSxsLmJ5UGFzc0tleXMpKXtlPWMuZ2V0TWFza2VkKCk7dmFyIGg9Yy5nZXRDYXJldCgpLGc9Yi5kYXRhKFwibWFzay1wcmV2aXVzLXZhbHVlXCIpfHxcIlwiO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjLnNldENhcmV0KGMuY2FsY3VsYXRlQ2FyZXRQb3NpdGlvbihnKSl9LGEuak1hc2tHbG9iYWxzLmtleVN0cm9rZUNvbXBlbnNhdGlvbik7Yy52YWwoZSk7Yy5zZXRDYXJldChoKTtyZXR1cm4gYy5jYWxsYmFja3MoZCl9fSxnZXRNYXNrZWQ6ZnVuY3Rpb24oYSxiKXt2YXIgaD1bXSxmPXZvaWQgMD09PWI/Yy52YWwoKTpiK1wiXCIsZz0wLGs9ZC5sZW5ndGgsbj0wLHA9Zi5sZW5ndGgsbT0xLHI9XCJwdXNoXCIsdT0tMSx3PTA7Yj1bXTtpZihlLnJldmVyc2Upe3I9XCJ1bnNoaWZ0XCI7bT0tMTt2YXIgeD0wO2c9ay0xO249cC0xO3ZhciBBPWZ1bmN0aW9uKCl7cmV0dXJuLTE8XG4vLyBnJiYtMTxufX1lbHNlIHg9ay0xLEE9ZnVuY3Rpb24oKXtyZXR1cm4gZzxrJiZuPHB9O2Zvcih2YXIgejtBKCk7KXt2YXIgeT1kLmNoYXJBdChnKSx2PWYuY2hhckF0KG4pLHE9bC50cmFuc2xhdGlvblt5XTtpZihxKXYubWF0Y2gocS5wYXR0ZXJuKT8oaFtyXSh2KSxxLnJlY3Vyc2l2ZSYmKC0xPT09dT91PWc6Zz09PXgmJmchPT11JiYoZz11LW0pLHg9PT11JiYoZy09bSkpLGcrPW0pOnY9PT16Pyh3LS0sej12b2lkIDApOnEub3B0aW9uYWw/KGcrPW0sbi09bSk6cS5mYWxsYmFjaz8oaFtyXShxLmZhbGxiYWNrKSxnKz1tLG4tPW0pOmMuaW52YWxpZC5wdXNoKHtwOm4sdjp2LGU6cS5wYXR0ZXJufSksbis9bTtlbHNle2lmKCFhKWhbcl0oeSk7dj09PXk/KGIucHVzaChuKSxuKz1tKTooej15LGIucHVzaChuK3cpLHcrKyk7Zys9bX19YT1kLmNoYXJBdCh4KTtrIT09cCsxfHxsLnRyYW5zbGF0aW9uW2FdfHxoLnB1c2goYSk7aD1oLmpvaW4oXCJcIik7Yy5tYXBNYXNrZGlnaXRQb3NpdGlvbnMoaCxcbi8vIGIscCk7cmV0dXJuIGh9LG1hcE1hc2tkaWdpdFBvc2l0aW9uczpmdW5jdGlvbihhLGIsZCl7YT1lLnJldmVyc2U/YS5sZW5ndGgtZDowO2MubWFza0RpZ2l0UG9zTWFwPXt9O2ZvcihkPTA7ZDxiLmxlbmd0aDtkKyspYy5tYXNrRGlnaXRQb3NNYXBbYltkXSthXT0xfSxjYWxsYmFja3M6ZnVuY3Rpb24oYSl7dmFyIGc9Yy52YWwoKSxoPWchPT1mLGs9W2csYSxiLGVdLGw9ZnVuY3Rpb24oYSxiLGMpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlW2FdJiZiJiZlW2FdLmFwcGx5KHRoaXMsYyl9O2woXCJvbkNoYW5nZVwiLCEwPT09aCxrKTtsKFwib25LZXlQcmVzc1wiLCEwPT09aCxrKTtsKFwib25Db21wbGV0ZVwiLGcubGVuZ3RoPT09ZC5sZW5ndGgsayk7bChcIm9uSW52YWxpZFwiLDA8Yy5pbnZhbGlkLmxlbmd0aCxbZyxhLGIsYy5pbnZhbGlkLGVdKX19O2I9YShiKTt2YXIgbD10aGlzLGY9Yy52YWwoKSxrO2Q9XCJmdW5jdGlvblwiPT09dHlwZW9mIGQ/ZChjLnZhbCgpLHZvaWQgMCxiLGUpOmQ7bC5tYXNrPVxuLy8gZDtsLm9wdGlvbnM9ZTtsLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBhPWMuZ2V0Q2FyZXQoKTtsLm9wdGlvbnMucGxhY2Vob2xkZXImJmIucmVtb3ZlQXR0cihcInBsYWNlaG9sZGVyXCIpO2IuZGF0YShcIm1hc2stbWF4bGVuZ3RoXCIpJiZiLnJlbW92ZUF0dHIoXCJtYXhsZW5ndGhcIik7Yy5kZXN0cm95RXZlbnRzKCk7Yy52YWwobC5nZXRDbGVhblZhbCgpKTtjLnNldENhcmV0KGEpO3JldHVybiBifTtsLmdldENsZWFuVmFsPWZ1bmN0aW9uKCl7cmV0dXJuIGMuZ2V0TWFza2VkKCEwKX07bC5nZXRNYXNrZWRWYWw9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuZ2V0TWFza2VkKCExLGEpfTtsLmluaXQ9ZnVuY3Rpb24oZyl7Zz1nfHwhMTtlPWV8fHt9O2wuY2xlYXJJZk5vdE1hdGNoPWEuak1hc2tHbG9iYWxzLmNsZWFySWZOb3RNYXRjaDtsLmJ5UGFzc0tleXM9YS5qTWFza0dsb2JhbHMuYnlQYXNzS2V5cztsLnRyYW5zbGF0aW9uPWEuZXh0ZW5kKHt9LGEuak1hc2tHbG9iYWxzLnRyYW5zbGF0aW9uLGUudHJhbnNsYXRpb24pO1xuLy8gbD1hLmV4dGVuZCghMCx7fSxsLGUpO2s9Yy5nZXRSZWdleE1hc2soKTtpZihnKWMuZXZlbnRzKCksYy52YWwoYy5nZXRNYXNrZWQoKSk7ZWxzZXtlLnBsYWNlaG9sZGVyJiZiLmF0dHIoXCJwbGFjZWhvbGRlclwiLGUucGxhY2Vob2xkZXIpO2IuZGF0YShcIm1hc2tcIikmJmIuYXR0cihcImF1dG9jb21wbGV0ZVwiLFwib2ZmXCIpO2c9MDtmb3IodmFyIGY9ITA7ZzxkLmxlbmd0aDtnKyspe3ZhciBoPWwudHJhbnNsYXRpb25bZC5jaGFyQXQoZyldO2lmKGgmJmgucmVjdXJzaXZlKXtmPSExO2JyZWFrfX1mJiZiLmF0dHIoXCJtYXhsZW5ndGhcIixkLmxlbmd0aCkuZGF0YShcIm1hc2stbWF4bGVuZ3RoXCIsITApO2MuZGVzdHJveUV2ZW50cygpO2MuZXZlbnRzKCk7Zz1jLmdldENhcmV0KCk7Yy52YWwoYy5nZXRNYXNrZWQoKSk7Yy5zZXRDYXJldChnKX19O2wuaW5pdCghYi5pcyhcImlucHV0XCIpKX07YS5tYXNrV2F0Y2hlcnM9e307dmFyIGY9ZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGQ9e30sZT1iLmF0dHIoXCJkYXRhLW1hc2tcIik7XG4vLyBiLmF0dHIoXCJkYXRhLW1hc2stcmV2ZXJzZVwiKSYmKGQucmV2ZXJzZT0hMCk7Yi5hdHRyKFwiZGF0YS1tYXNrLWNsZWFyaWZub3RtYXRjaFwiKSYmKGQuY2xlYXJJZk5vdE1hdGNoPSEwKTtcInRydWVcIj09PWIuYXR0cihcImRhdGEtbWFzay1zZWxlY3RvbmZvY3VzXCIpJiYoZC5zZWxlY3RPbkZvY3VzPSEwKTtpZihwKGIsZSxkKSlyZXR1cm4gYi5kYXRhKFwibWFza1wiLG5ldyBuKHRoaXMsZSxkKSl9LHA9ZnVuY3Rpb24oYixkLGUpe2U9ZXx8e307dmFyIGM9YShiKS5kYXRhKFwibWFza1wiKSxmPUpTT04uc3RyaW5naWZ5O2I9YShiKS52YWwoKXx8YShiKS50ZXh0KCk7dHJ5e3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBkJiYoZD1kKGIpKSxcIm9iamVjdFwiIT09dHlwZW9mIGN8fGYoYy5vcHRpb25zKSE9PWYoZSl8fGMubWFzayE9PWR9Y2F0Y2godyl7fX0saz1mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2E9XCJvblwiK2E7dmFyIGU9YSBpbiBiO2V8fChiLnNldEF0dHJpYnV0ZShhLFxuLy8gXCJyZXR1cm47XCIpLGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGJbYV0pO3JldHVybiBlfTthLmZuLm1hc2s9ZnVuY3Rpb24oYixkKXtkPWR8fHt9O3ZhciBlPXRoaXMuc2VsZWN0b3IsYz1hLmpNYXNrR2xvYmFscyxmPWMud2F0Y2hJbnRlcnZhbDtjPWQud2F0Y2hJbnB1dHN8fGMud2F0Y2hJbnB1dHM7dmFyIGs9ZnVuY3Rpb24oKXtpZihwKHRoaXMsYixkKSlyZXR1cm4gYSh0aGlzKS5kYXRhKFwibWFza1wiLG5ldyBuKHRoaXMsYixkKSl9O2EodGhpcykuZWFjaChrKTtlJiZcIlwiIT09ZSYmYyYmKGNsZWFySW50ZXJ2YWwoYS5tYXNrV2F0Y2hlcnNbZV0pLGEubWFza1dhdGNoZXJzW2VdPXNldEludGVydmFsKGZ1bmN0aW9uKCl7YShkb2N1bWVudCkuZmluZChlKS5lYWNoKGspfSxmKSk7cmV0dXJuIHRoaXN9O2EuZm4ubWFza2VkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRhdGEoXCJtYXNrXCIpLmdldE1hc2tlZFZhbChhKX07YS5mbi51bm1hc2s9ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKGEubWFza1dhdGNoZXJzW3RoaXMuc2VsZWN0b3JdKTtcbi8vIGRlbGV0ZSBhLm1hc2tXYXRjaGVyc1t0aGlzLnNlbGVjdG9yXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKS5kYXRhKFwibWFza1wiKTtiJiZiLnJlbW92ZSgpLnJlbW92ZURhdGEoXCJtYXNrXCIpfSl9O2EuZm4uY2xlYW5WYWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kYXRhKFwibWFza1wiKS5nZXRDbGVhblZhbCgpfTthLmFwcGx5RGF0YU1hc2s9ZnVuY3Rpb24oYil7Yj1ifHxhLmpNYXNrR2xvYmFscy5tYXNrRWxlbWVudHM7KGIgaW5zdGFuY2VvZiBhP2I6YShiKSkuZmlsdGVyKGEuak1hc2tHbG9iYWxzLmRhdGFNYXNrQXR0cikuZWFjaChmKX07az17bWFza0VsZW1lbnRzOlwiaW5wdXQsdGQsc3BhbixkaXZcIixkYXRhTWFza0F0dHI6XCIqW2RhdGEtbWFza11cIixkYXRhTWFzazohMCx3YXRjaEludGVydmFsOjMwMCx3YXRjaElucHV0czohMCxrZXlTdHJva2VDb21wZW5zYXRpb246MTAsdXNlSW5wdXQ6IS9DaHJvbWVcXC9bMi00XVswLTldfFNhbXN1bmdCcm93c2VyLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSYmXG4vLyBrKFwiaW5wdXRcIiksd2F0Y2hEYXRhTWFzazohMSxieVBhc3NLZXlzOls5LDE2LDE3LDE4LDM2LDM3LDM4LDM5LDQwLDkxXSx0cmFuc2xhdGlvbjp7MDp7cGF0dGVybjovXFxkL30sOTp7cGF0dGVybjovXFxkLyxvcHRpb25hbDohMH0sXCIjXCI6e3BhdHRlcm46L1xcZC8scmVjdXJzaXZlOiEwfSxBOntwYXR0ZXJuOi9bYS16QS1aMC05XS99LFM6e3BhdHRlcm46L1thLXpBLVpdL319fTthLmpNYXNrR2xvYmFscz1hLmpNYXNrR2xvYmFsc3x8e307az1hLmpNYXNrR2xvYmFscz1hLmV4dGVuZCghMCx7fSxrLGEuak1hc2tHbG9iYWxzKTtrLmRhdGFNYXNrJiZhLmFwcGx5RGF0YU1hc2soKTtzZXRJbnRlcnZhbChmdW5jdGlvbigpe2Euak1hc2tHbG9iYWxzLndhdGNoRGF0YU1hc2smJmEuYXBwbHlEYXRhTWFzaygpfSxrLndhdGNoSW50ZXJ2YWwpfSx3aW5kb3cualF1ZXJ5LHdpbmRvdy5aZXB0byk7XG5cbi8qICBqUXVlcnkgTmljZSBTZWxlY3QgLSB2MS4xLjBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vaGVybmFuc2FydG9yaW8vanF1ZXJ5LW5pY2Utc2VsZWN0XG4gICAgTWFkZSBieSBIZXJuw6FuIFNhcnRvcmlvICAqL1xuXG4oZnVuY3Rpb24oJCkge1xuXG4gICQuZm4ubmljZVNlbGVjdCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgLy8gTWV0aG9kc1xuICAgIGlmICh0eXBlb2YgbWV0aG9kID09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAobWV0aG9kID09ICd1cGRhdGUnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgJHNlbGVjdCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcykubmV4dCgnLm5pY2Utc2VsZWN0Jyk7XG4gICAgICAgICAgdmFyIG9wZW4gPSAkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjcmVhdGVfbmljZV9zZWxlY3QoJHNlbGVjdCk7XG5cbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICRzZWxlY3QubmV4dCgpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09ICdkZXN0cm95Jykge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciAkZHJvcGRvd24gPSAkKHRoaXMpLm5leHQoJy5uaWNlLXNlbGVjdCcpO1xuXG4gICAgICAgICAgaWYgKCRkcm9wZG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRkcm9wZG93bi5yZW1vdmUoKTtcbiAgICAgICAgICAgICRzZWxlY3QuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgkKCcubmljZS1zZWxlY3QnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignLm5pY2Vfc2VsZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRob2QgXCInICsgbWV0aG9kICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBIaWRlIG5hdGl2ZSBzZWxlY3RcbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIC8vIENyZWF0ZSBjdXN0b20gbWFya3VwXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoISRzZWxlY3QubmV4dCgpLmhhc0NsYXNzKCduaWNlLXNlbGVjdCcpKSB7XG4gICAgICAgIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9uaWNlX3NlbGVjdCgkc2VsZWN0KSB7XG4gICAgICAkc2VsZWN0LmFmdGVyKCQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgLmFkZENsYXNzKCduaWNlLXNlbGVjdCcpXG4gICAgICAgIC5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2NsYXNzJykgfHwgJycpXG4gICAgICAgIC5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2Rpc2FibGVkJykgPyAnZGlzYWJsZWQnIDogJycpXG4gICAgICAgIC5hdHRyKCd0YWJpbmRleCcsICRzZWxlY3QuYXR0cignZGlzYWJsZWQnKSA/IG51bGwgOiAnMCcpXG4gICAgICAgIC5odG1sKCc8c3BhbiBjbGFzcz1cImN1cnJlbnRcIj48L3NwYW4+PHVsIGNsYXNzPVwibGlzdFwiPjwvdWw+JylcbiAgICAgICk7XG5cbiAgICAgIHZhciAkZHJvcGRvd24gPSAkc2VsZWN0Lm5leHQoKTtcbiAgICAgIHZhciAkb3B0aW9ucyA9ICRzZWxlY3QuZmluZCgnb3B0aW9uJyk7XG4gICAgICB2YXIgJHNlbGVjdGVkID0gJHNlbGVjdC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKTtcblxuICAgICAgJGRyb3Bkb3duLmZpbmQoJy5jdXJyZW50JykuaHRtbCgkc2VsZWN0ZWQuZGF0YSgnZGlzcGxheScpIHx8wqAkc2VsZWN0ZWQudGV4dCgpKTtcblxuICAgICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRpc3BsYXkgPSAkb3B0aW9uLmRhdGEoJ2Rpc3BsYXknKTtcblxuICAgICAgICAkZHJvcGRvd24uZmluZCgndWwnKS5hcHBlbmQoJCgnPGxpPjwvbGk+JylcbiAgICAgICAgICAuYXR0cignZGF0YS12YWx1ZScsICRvcHRpb24udmFsKCkpXG4gICAgICAgICAgLmF0dHIoJ2RhdGEtZGlzcGxheScsIChkaXNwbGF5IHx8IG51bGwpKVxuICAgICAgICAgIC5hZGRDbGFzcygnb3B0aW9uJyArXG4gICAgICAgICAgICAoJG9wdGlvbi5pcygnOnNlbGVjdGVkJykgPyAnIHNlbGVjdGVkJyA6ICcnKSArXG4gICAgICAgICAgICAoJG9wdGlvbi5pcygnOmRpc2FibGVkJykgPyAnIGRpc2FibGVkJyA6ICcnKSlcbiAgICAgICAgICAuaHRtbCgkb3B0aW9uLnRleHQoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIEV2ZW50IGxpc3RlbmVycyAqL1xuXG4gICAgLy8gVW5iaW5kIGV4aXN0aW5nIGV2ZW50cyBpbiBjYXNlIHRoYXQgdGhlIHBsdWdpbiBoYXMgYmVlbiBpbml0aWFsaXplZCBiZWZvcmVcbiAgICAkKGRvY3VtZW50KS5vZmYoJy5uaWNlX3NlbGVjdCcpO1xuXG4gICAgLy8gT3Blbi9jbG9zZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcyk7XG5cbiAgICAgICQoJy5uaWNlLXNlbGVjdCcpLm5vdCgkZHJvcGRvd24pLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAkZHJvcGRvd24udG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcub3B0aW9uJyk7XG4gICAgICAgICRkcm9wZG93bi5maW5kKCcuZm9jdXMnKS5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgJGRyb3Bkb3duLmZpbmQoJy5zZWxlY3RlZCcpLmFkZENsYXNzKCdmb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGRyb3Bkb3duLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSB3aGVuIGNsaWNraW5nIG91dHNpZGVcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2submljZV9zZWxlY3QnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcubmljZS1zZWxlY3QnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJCgnLm5pY2Utc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCcub3B0aW9uJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gY2xpY2tcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2submljZV9zZWxlY3QnLCAnLm5pY2Utc2VsZWN0IC5vcHRpb246bm90KC5kaXNhYmxlZCknLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuICAgICAgdmFyICRkcm9wZG93biA9ICRvcHRpb24uY2xvc2VzdCgnLm5pY2Utc2VsZWN0Jyk7XG5cbiAgICAgICRkcm9wZG93bi5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICRvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cbiAgICAgIHZhciB0ZXh0ID0gJG9wdGlvbi5kYXRhKCdkaXNwbGF5JykgfHwgJG9wdGlvbi50ZXh0KCk7XG4gICAgICAkZHJvcGRvd24uZmluZCgnLmN1cnJlbnQnKS50ZXh0KHRleHQpO1xuXG4gICAgICAkZHJvcGRvd24ucHJldignc2VsZWN0JykudmFsKCRvcHRpb24uZGF0YSgndmFsdWUnKSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBLZXlib2FyZCBldmVudHNcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bi5uaWNlX3NlbGVjdCcsICcubmljZS1zZWxlY3QnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyICRkcm9wZG93biA9ICQodGhpcyk7XG4gICAgICB2YXIgJGZvY3VzZWRfb3B0aW9uID0gJCgkZHJvcGRvd24uZmluZCgnLmZvY3VzJykgfHwgJGRyb3Bkb3duLmZpbmQoJy5saXN0IC5vcHRpb24uc2VsZWN0ZWQnKSk7XG5cbiAgICAgIC8vIFNwYWNlIG9yIEVudGVyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzMiB8fCBldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgIGlmICgkZHJvcGRvd24uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICRmb2N1c2VkX29wdGlvbi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcm9wZG93bi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIERvd25cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyICRuZXh0ID0gJGZvY3VzZWRfb3B0aW9uLm5leHRBbGwoJy5vcHRpb246bm90KC5kaXNhYmxlZCknKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkbmV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gVXBcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgICAgICBpZiAoISRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyICRwcmV2ID0gJGZvY3VzZWRfb3B0aW9uLnByZXZBbGwoJy5vcHRpb246bm90KC5kaXNhYmxlZCknKS5maXJzdCgpO1xuICAgICAgICAgIGlmICgkcHJldi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkZHJvcGRvd24uZmluZCgnLmZvY3VzJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAkcHJldi5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgLy8gRXNjXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgJGRyb3Bkb3duLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICAgIC8vIFRhYlxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDkpIHtcbiAgICAgICAgaWYgKCRkcm9wZG93bi5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlY3QgQ1NTIHBvaW50ZXItZXZlbnRzIHN1cHBvcnQsIGZvciBJRSA8PSAxMC4gRnJvbSBNb2Rlcm5penIuXG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLnN0eWxlO1xuICAgIHN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgaWYgKHN0eWxlLnBvaW50ZXJFdmVudHMgIT09ICdhdXRvJykge1xuICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby1jc3Nwb2ludGVyZXZlbnRzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfTtcblxufShqUXVlcnkpKTtcbihmdW5jdGlvbigkKXtcblxuICAkLmZuLnR3ZW50eXR3ZW50eSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGRlZmF1bHRfb2Zmc2V0X3BjdDogMC41LFxuICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICAgIGJlZm9yZV9sYWJlbDogJ0JlZm9yZScsXG4gICAgICBhZnRlcl9sYWJlbDogJ0FmdGVyJyxcbiAgICAgIG5vX292ZXJsYXk6IGZhbHNlLFxuICAgICAgbW92ZV9zbGlkZXJfb25faG92ZXI6IGZhbHNlLFxuICAgICAgbW92ZV93aXRoX2hhbmRsZV9vbmx5OiB0cnVlLFxuICAgICAgY2xpY2tfdG9fbW92ZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBzbGlkZXJQY3QgPSBvcHRpb25zLmRlZmF1bHRfb2Zmc2V0X3BjdDtcbiAgICAgIHZhciBjb250YWluZXIgPSAkKHRoaXMpO1xuICAgICAgdmFyIHNsaWRlck9yaWVudGF0aW9uID0gb3B0aW9ucy5vcmllbnRhdGlvbjtcbiAgICAgIHZhciBiZWZvcmVEaXJlY3Rpb24gPSAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpID8gJ2Rvd24nIDogJ2xlZnQnO1xuICAgICAgdmFyIGFmdGVyRGlyZWN0aW9uID0gKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSA/ICd1cCcgOiAncmlnaHQnO1xuXG5cbiAgICAgIGNvbnRhaW5lci53cmFwKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LXdyYXBwZXIgdHdlbnR5dHdlbnR5LVwiICsgc2xpZGVyT3JpZW50YXRpb24gKyBcIic+PC9kaXY+XCIpO1xuICAgICAgaWYoIW9wdGlvbnMubm9fb3ZlcmxheSkge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LW92ZXJsYXknPjwvZGl2PlwiKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjb250YWluZXIuZmluZChcIi50d2VudHl0d2VudHktb3ZlcmxheVwiKTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmQoXCI8ZGl2IGNsYXNzPSd0d2VudHl0d2VudHktYmVmb3JlLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK29wdGlvbnMuYmVmb3JlX2xhYmVsK1wiJz48L2Rpdj5cIik7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWFmdGVyLWxhYmVsJyBkYXRhLWNvbnRlbnQ9J1wiK29wdGlvbnMuYWZ0ZXJfbGFiZWwrXCInPjwvZGl2PlwiKTtcbiAgICAgIH1cbiAgICAgIHZhciBiZWZvcmVJbWcgPSBjb250YWluZXIuZmluZChcImltZzpmaXJzdFwiKTtcbiAgICAgIHZhciBhZnRlckltZyA9IGNvbnRhaW5lci5maW5kKFwiaW1nOmxhc3RcIik7XG4gICAgICBjb250YWluZXIuYXBwZW5kKFwiPGRpdiBjbGFzcz0ndHdlbnR5dHdlbnR5LWhhbmRsZSc+PC9kaXY+XCIpO1xuICAgICAgdmFyIHNsaWRlciA9IGNvbnRhaW5lci5maW5kKFwiLnR3ZW50eXR3ZW50eS1oYW5kbGVcIik7XG4gICAgICBzbGlkZXIuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J3R3ZW50eXR3ZW50eS1cIiArIGJlZm9yZURpcmVjdGlvbiArIFwiLWFycm93Jz48L3NwYW4+XCIpO1xuICAgICAgc2xpZGVyLmFwcGVuZChcIjxzcGFuIGNsYXNzPSd0d2VudHl0d2VudHktXCIgKyBhZnRlckRpcmVjdGlvbiArIFwiLWFycm93Jz48L3NwYW4+XCIpO1xuICAgICAgY29udGFpbmVyLmFkZENsYXNzKFwidHdlbnR5dHdlbnR5LWNvbnRhaW5lclwiKTtcbiAgICAgIGJlZm9yZUltZy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1iZWZvcmVcIik7XG4gICAgICBhZnRlckltZy5hZGRDbGFzcyhcInR3ZW50eXR3ZW50eS1hZnRlclwiKTtcblxuICAgICAgdmFyIGNhbGNPZmZzZXQgPSBmdW5jdGlvbihkaW1lbnNpb25QY3QpIHtcbiAgICAgICAgdmFyIHcgPSBiZWZvcmVJbWcud2lkdGgoKTtcbiAgICAgICAgdmFyIGggPSBiZWZvcmVJbWcuaGVpZ2h0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdzogdytcInB4XCIsXG4gICAgICAgICAgaDogaCtcInB4XCIsXG4gICAgICAgICAgY3c6IChkaW1lbnNpb25QY3QqdykrXCJweFwiLFxuICAgICAgICAgIGNoOiAoZGltZW5zaW9uUGN0KmgpK1wicHhcIlxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgdmFyIGFkanVzdENvbnRhaW5lciA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgXHRpZiAoc2xpZGVyT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBiZWZvcmVJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoMCxcIitvZmZzZXQudytcIixcIitvZmZzZXQuY2grXCIsMClcIik7XG4gICAgICAgICAgYWZ0ZXJJbWcuY3NzKFwiY2xpcFwiLCBcInJlY3QoXCIrb2Zmc2V0LmNoK1wiLFwiK29mZnNldC53K1wiLFwiK29mZnNldC5oK1wiLDApXCIpO1xuICAgICAgXHR9XG4gICAgICBcdGVsc2Uge1xuICAgICAgICAgIGJlZm9yZUltZy5jc3MoXCJjbGlwXCIsIFwicmVjdCgwLFwiK29mZnNldC5jdytcIixcIitvZmZzZXQuaCtcIiwwKVwiKTtcbiAgICAgICAgICBhZnRlckltZy5jc3MoXCJjbGlwXCIsIFwicmVjdCgwLFwiK29mZnNldC53K1wiLFwiK29mZnNldC5oK1wiLFwiK29mZnNldC5jdytcIilcIik7XG4gICAgXHR9XG4gICAgICAgIGNvbnRhaW5lci5jc3MoXCJoZWlnaHRcIiwgb2Zmc2V0LmgpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGFkanVzdFNsaWRlciA9IGZ1bmN0aW9uKHBjdCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gY2FsY09mZnNldChwY3QpO1xuICAgICAgICBzbGlkZXIuY3NzKChzbGlkZXJPcmllbnRhdGlvbj09PVwidmVydGljYWxcIikgPyBcInRvcFwiIDogXCJsZWZ0XCIsIChzbGlkZXJPcmllbnRhdGlvbj09PVwidmVydGljYWxcIikgPyBvZmZzZXQuY2ggOiBvZmZzZXQuY3cpO1xuICAgICAgICBhZGp1c3RDb250YWluZXIob2Zmc2V0KTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFJldHVybiB0aGUgbnVtYmVyIHNwZWNpZmllZCBvciB0aGUgbWluL21heCBudW1iZXIgaWYgaXQgb3V0c2lkZSB0aGUgcmFuZ2UgZ2l2ZW4uXG4gICAgICB2YXIgbWluTWF4TnVtYmVyID0gZnVuY3Rpb24obnVtLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIG51bSkpO1xuICAgICAgfTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBzbGlkZXIgcGVyY2VudGFnZSBiYXNlZCBvbiB0aGUgcG9zaXRpb24uXG4gICAgICB2YXIgZ2V0U2xpZGVyUGVyY2VudGFnZSA9IGZ1bmN0aW9uKHBvc2l0aW9uWCwgcG9zaXRpb25ZKSB7XG4gICAgICAgIHZhciBzbGlkZXJQZXJjZW50YWdlID0gKHNsaWRlck9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSA/XG4gICAgICAgICAgKHBvc2l0aW9uWS1vZmZzZXRZKS9pbWdIZWlnaHQgOlxuICAgICAgICAgIChwb3NpdGlvblgtb2Zmc2V0WCkvaW1nV2lkdGg7XG5cbiAgICAgICAgcmV0dXJuIG1pbk1heE51bWJlcihzbGlkZXJQZXJjZW50YWdlLCAwLCAxKTtcbiAgICAgIH07XG5cblxuICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplLnR3ZW50eXR3ZW50eVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFkanVzdFNsaWRlcihzbGlkZXJQY3QpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBvZmZzZXRYID0gMDtcbiAgICAgIHZhciBvZmZzZXRZID0gMDtcbiAgICAgIHZhciBpbWdXaWR0aCA9IDA7XG4gICAgICB2YXIgaW1nSGVpZ2h0ID0gMDtcbiAgICAgIHZhciBvbk1vdmVTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKCgoZS5kaXN0WCA+IGUuZGlzdFkgJiYgZS5kaXN0WCA8IC1lLmRpc3RZKSB8fCAoZS5kaXN0WCA8IGUuZGlzdFkgJiYgZS5kaXN0WCA+IC1lLmRpc3RZKSkgJiYgc2xpZGVyT3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChlLmRpc3RYIDwgZS5kaXN0WSAmJiBlLmRpc3RYIDwgLWUuZGlzdFkpIHx8IChlLmRpc3RYID4gZS5kaXN0WSAmJiBlLmRpc3RYID4gLWUuZGlzdFkpKSAmJiBzbGlkZXJPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIG9mZnNldFggPSBjb250YWluZXIub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgb2Zmc2V0WSA9IGNvbnRhaW5lci5vZmZzZXQoKS50b3A7XG4gICAgICAgIGltZ1dpZHRoID0gYmVmb3JlSW1nLndpZHRoKCk7XG4gICAgICAgIGltZ0hlaWdodCA9IGJlZm9yZUltZy5oZWlnaHQoKTtcbiAgICAgIH07XG4gICAgICB2YXIgb25Nb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoY29udGFpbmVyLmhhc0NsYXNzKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc2xpZGVyUGN0ID0gZ2V0U2xpZGVyUGVyY2VudGFnZShlLnBhZ2VYLCBlLnBhZ2VZKTtcbiAgICAgICAgICBhZGp1c3RTbGlkZXIoc2xpZGVyUGN0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBvbk1vdmVFbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbW92ZVRhcmdldCA9IG9wdGlvbnMubW92ZV93aXRoX2hhbmRsZV9vbmx5ID8gc2xpZGVyIDogY29udGFpbmVyO1xuICAgICAgbW92ZVRhcmdldC5vbihcIm1vdmVzdGFydFwiLG9uTW92ZVN0YXJ0KTtcbiAgICAgIG1vdmVUYXJnZXQub24oXCJtb3ZlXCIsb25Nb3ZlKTtcbiAgICAgIG1vdmVUYXJnZXQub24oXCJtb3ZlZW5kXCIsb25Nb3ZlRW5kKTtcblxuICAgICAgaWYgKG9wdGlvbnMubW92ZV9zbGlkZXJfb25faG92ZXIpIHtcbiAgICAgICAgY29udGFpbmVyLm9uKFwibW91c2VlbnRlclwiLCBvbk1vdmVTdGFydCk7XG4gICAgICAgIGNvbnRhaW5lci5vbihcIm1vdXNlbW92ZVwiLCBvbk1vdmUpO1xuICAgICAgICBjb250YWluZXIub24oXCJtb3VzZWxlYXZlXCIsIG9uTW92ZUVuZCk7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlci5vbihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb250YWluZXIuZmluZChcImltZ1wiKS5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsaWNrX3RvX21vdmUpIHtcbiAgICAgICAgY29udGFpbmVyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBvZmZzZXRYID0gY29udGFpbmVyLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgb2Zmc2V0WSA9IGNvbnRhaW5lci5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgaW1nV2lkdGggPSBiZWZvcmVJbWcud2lkdGgoKTtcbiAgICAgICAgICBpbWdIZWlnaHQgPSBiZWZvcmVJbWcuaGVpZ2h0KCk7XG5cbiAgICAgICAgICBzbGlkZXJQY3QgPSBnZXRTbGlkZXJQZXJjZW50YWdlKGUucGFnZVgsIGUucGFnZVkpO1xuICAgICAgICAgIGFkanVzdFNsaWRlcihzbGlkZXJQY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoXCJyZXNpemUudHdlbnR5dHdlbnR5XCIpO1xuICAgIH0pO1xuICB9O1xuXG59KShqUXVlcnkpO1xuXG4vKiEgalF1ZXJ5IFZhbGlkYXRpb24gUGx1Z2luIC0gdjEuMTkuMSAtIDYvMTUvMjAxOVxuICogaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9cbiAqIENvcHlyaWdodCAoYykgMjAxOSBKw7ZybiBaYWVmZmVyZXI7IExpY2Vuc2VkIE1JVCAqL1xuIWZ1bmN0aW9uKGEpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGEpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEocmVxdWlyZShcImpxdWVyeVwiKSk6YShqUXVlcnkpfShmdW5jdGlvbihhKXthLmV4dGVuZChhLmZuLHt2YWxpZGF0ZTpmdW5jdGlvbihiKXtpZighdGhpcy5sZW5ndGgpcmV0dXJuIHZvaWQoYiYmYi5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybihcIk5vdGhpbmcgc2VsZWN0ZWQsIGNhbid0IHZhbGlkYXRlLCByZXR1cm5pbmcgbm90aGluZy5cIikpO3ZhciBjPWEuZGF0YSh0aGlzWzBdLFwidmFsaWRhdG9yXCIpO3JldHVybiBjP2M6KHRoaXMuYXR0cihcIm5vdmFsaWRhdGVcIixcIm5vdmFsaWRhdGVcIiksYz1uZXcgYS52YWxpZGF0b3IoYix0aGlzWzBdKSxhLmRhdGEodGhpc1swXSxcInZhbGlkYXRvclwiLGMpLGMuc2V0dGluZ3Mub25zdWJtaXQmJih0aGlzLm9uKFwiY2xpY2sudmFsaWRhdGVcIixcIjpzdWJtaXRcIixmdW5jdGlvbihiKXtjLnN1Ym1pdEJ1dHRvbj1iLmN1cnJlbnRUYXJnZXQsYSh0aGlzKS5oYXNDbGFzcyhcImNhbmNlbFwiKSYmKGMuY2FuY2VsU3VibWl0PSEwKSx2b2lkIDAhPT1hKHRoaXMpLmF0dHIoXCJmb3Jtbm92YWxpZGF0ZVwiKSYmKGMuY2FuY2VsU3VibWl0PSEwKX0pLHRoaXMub24oXCJzdWJtaXQudmFsaWRhdGVcIixmdW5jdGlvbihiKXtmdW5jdGlvbiBkKCl7dmFyIGQsZTtyZXR1cm4gYy5zdWJtaXRCdXR0b24mJihjLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXJ8fGMuZm9ybVN1Ym1pdHRlZCkmJihkPWEoXCI8aW5wdXQgdHlwZT0naGlkZGVuJy8+XCIpLmF0dHIoXCJuYW1lXCIsYy5zdWJtaXRCdXR0b24ubmFtZSkudmFsKGEoYy5zdWJtaXRCdXR0b24pLnZhbCgpKS5hcHBlbmRUbyhjLmN1cnJlbnRGb3JtKSksIShjLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXImJiFjLnNldHRpbmdzLmRlYnVnKXx8KGU9Yy5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyLmNhbGwoYyxjLmN1cnJlbnRGb3JtLGIpLGQmJmQucmVtb3ZlKCksdm9pZCAwIT09ZSYmZSl9cmV0dXJuIGMuc2V0dGluZ3MuZGVidWcmJmIucHJldmVudERlZmF1bHQoKSxjLmNhbmNlbFN1Ym1pdD8oYy5jYW5jZWxTdWJtaXQ9ITEsZCgpKTpjLmZvcm0oKT9jLnBlbmRpbmdSZXF1ZXN0PyhjLmZvcm1TdWJtaXR0ZWQ9ITAsITEpOmQoKTooYy5mb2N1c0ludmFsaWQoKSwhMSl9KSksYyl9LHZhbGlkOmZ1bmN0aW9uKCl7dmFyIGIsYyxkO3JldHVybiBhKHRoaXNbMF0pLmlzKFwiZm9ybVwiKT9iPXRoaXMudmFsaWRhdGUoKS5mb3JtKCk6KGQ9W10sYj0hMCxjPWEodGhpc1swXS5mb3JtKS52YWxpZGF0ZSgpLHRoaXMuZWFjaChmdW5jdGlvbigpe2I9Yy5lbGVtZW50KHRoaXMpJiZiLGJ8fChkPWQuY29uY2F0KGMuZXJyb3JMaXN0KSl9KSxjLmVycm9yTGlzdD1kKSxifSxydWxlczpmdW5jdGlvbihiLGMpe3ZhciBkLGUsZixnLGgsaSxqPXRoaXNbMF0saz1cInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcy5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT10aGlzLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7aWYobnVsbCE9aiYmKCFqLmZvcm0mJmsmJihqLmZvcm09dGhpcy5jbG9zZXN0KFwiZm9ybVwiKVswXSxqLm5hbWU9dGhpcy5hdHRyKFwibmFtZVwiKSksbnVsbCE9ai5mb3JtKSl7aWYoYilzd2l0Y2goZD1hLmRhdGEoai5mb3JtLFwidmFsaWRhdG9yXCIpLnNldHRpbmdzLGU9ZC5ydWxlcyxmPWEudmFsaWRhdG9yLnN0YXRpY1J1bGVzKGopLGIpe2Nhc2VcImFkZFwiOmEuZXh0ZW5kKGYsYS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShjKSksZGVsZXRlIGYubWVzc2FnZXMsZVtqLm5hbWVdPWYsYy5tZXNzYWdlcyYmKGQubWVzc2FnZXNbai5uYW1lXT1hLmV4dGVuZChkLm1lc3NhZ2VzW2oubmFtZV0sYy5tZXNzYWdlcykpO2JyZWFrO2Nhc2VcInJlbW92ZVwiOnJldHVybiBjPyhpPXt9LGEuZWFjaChjLnNwbGl0KC9cXHMvKSxmdW5jdGlvbihhLGIpe2lbYl09ZltiXSxkZWxldGUgZltiXX0pLGkpOihkZWxldGUgZVtqLm5hbWVdLGYpfXJldHVybiBnPWEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGVzKGEuZXh0ZW5kKHt9LGEudmFsaWRhdG9yLmNsYXNzUnVsZXMoaiksYS52YWxpZGF0b3IuYXR0cmlidXRlUnVsZXMoaiksYS52YWxpZGF0b3IuZGF0YVJ1bGVzKGopLGEudmFsaWRhdG9yLnN0YXRpY1J1bGVzKGopKSxqKSxnLnJlcXVpcmVkJiYoaD1nLnJlcXVpcmVkLGRlbGV0ZSBnLnJlcXVpcmVkLGc9YS5leHRlbmQoe3JlcXVpcmVkOmh9LGcpKSxnLnJlbW90ZSYmKGg9Zy5yZW1vdGUsZGVsZXRlIGcucmVtb3RlLGc9YS5leHRlbmQoZyx7cmVtb3RlOmh9KSksZ319fSksYS5leHRlbmQoYS5leHByLnBzZXVkb3N8fGEuZXhwcltcIjpcIl0se2JsYW5rOmZ1bmN0aW9uKGIpe3JldHVybiFhLnRyaW0oXCJcIithKGIpLnZhbCgpKX0sZmlsbGVkOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYikudmFsKCk7cmV0dXJuIG51bGwhPT1jJiYhIWEudHJpbShcIlwiK2MpfSx1bmNoZWNrZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIWEoYikucHJvcChcImNoZWNrZWRcIil9fSksYS52YWxpZGF0b3I9ZnVuY3Rpb24oYixjKXt0aGlzLnNldHRpbmdzPWEuZXh0ZW5kKCEwLHt9LGEudmFsaWRhdG9yLmRlZmF1bHRzLGIpLHRoaXMuY3VycmVudEZvcm09Yyx0aGlzLmluaXQoKX0sYS52YWxpZGF0b3IuZm9ybWF0PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP2Z1bmN0aW9uKCl7dmFyIGM9YS5tYWtlQXJyYXkoYXJndW1lbnRzKTtyZXR1cm4gYy51bnNoaWZ0KGIpLGEudmFsaWRhdG9yLmZvcm1hdC5hcHBseSh0aGlzLGMpfTp2b2lkIDA9PT1jP2I6KGFyZ3VtZW50cy5sZW5ndGg+MiYmYy5jb25zdHJ1Y3RvciE9PUFycmF5JiYoYz1hLm1ha2VBcnJheShhcmd1bWVudHMpLnNsaWNlKDEpKSxjLmNvbnN0cnVjdG9yIT09QXJyYXkmJihjPVtjXSksYS5lYWNoKGMsZnVuY3Rpb24oYSxjKXtiPWIucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIithK1wiXFxcXH1cIixcImdcIiksZnVuY3Rpb24oKXtyZXR1cm4gY30pfSksYil9LGEuZXh0ZW5kKGEudmFsaWRhdG9yLHtkZWZhdWx0czp7bWVzc2FnZXM6e30sZ3JvdXBzOnt9LHJ1bGVzOnt9LGVycm9yQ2xhc3M6XCJlcnJvclwiLHBlbmRpbmdDbGFzczpcInBlbmRpbmdcIix2YWxpZENsYXNzOlwidmFsaWRcIixlcnJvckVsZW1lbnQ6XCJsYWJlbFwiLGZvY3VzQ2xlYW51cDohMSxmb2N1c0ludmFsaWQ6ITAsZXJyb3JDb250YWluZXI6YShbXSksZXJyb3JMYWJlbENvbnRhaW5lcjphKFtdKSxvbnN1Ym1pdDohMCxpZ25vcmU6XCI6aGlkZGVuXCIsaWdub3JlVGl0bGU6ITEsb25mb2N1c2luOmZ1bmN0aW9uKGEpe3RoaXMubGFzdEFjdGl2ZT1hLHRoaXMuc2V0dGluZ3MuZm9jdXNDbGVhbnVwJiYodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodCYmdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKSx0aGlzLmhpZGVUaGVzZSh0aGlzLmVycm9yc0ZvcihhKSkpfSxvbmZvY3Vzb3V0OmZ1bmN0aW9uKGEpe3RoaXMuY2hlY2thYmxlKGEpfHwhKGEubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCkmJnRoaXMub3B0aW9uYWwoYSl8fHRoaXMuZWxlbWVudChhKX0sb25rZXl1cDpmdW5jdGlvbihiLGMpe3ZhciBkPVsxNiwxNywxOCwyMCwzNSwzNiwzNywzOCwzOSw0MCw0NSwxNDQsMjI1XTs5PT09Yy53aGljaCYmXCJcIj09PXRoaXMuZWxlbWVudFZhbHVlKGIpfHxhLmluQXJyYXkoYy5rZXlDb2RlLGQpIT09LTF8fChiLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWR8fGIubmFtZSBpbiB0aGlzLmludmFsaWQpJiZ0aGlzLmVsZW1lbnQoYil9LG9uY2xpY2s6ZnVuY3Rpb24oYSl7YS5uYW1lIGluIHRoaXMuc3VibWl0dGVkP3RoaXMuZWxlbWVudChhKTphLnBhcmVudE5vZGUubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCYmdGhpcy5lbGVtZW50KGEucGFyZW50Tm9kZSl9LGhpZ2hsaWdodDpmdW5jdGlvbihiLGMsZCl7XCJyYWRpb1wiPT09Yi50eXBlP3RoaXMuZmluZEJ5TmFtZShiLm5hbWUpLmFkZENsYXNzKGMpLnJlbW92ZUNsYXNzKGQpOmEoYikuYWRkQ2xhc3MoYykucmVtb3ZlQ2xhc3MoZCl9LHVuaGlnaGxpZ2h0OmZ1bmN0aW9uKGIsYyxkKXtcInJhZGlvXCI9PT1iLnR5cGU/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkucmVtb3ZlQ2xhc3MoYykuYWRkQ2xhc3MoZCk6YShiKS5yZW1vdmVDbGFzcyhjKS5hZGRDbGFzcyhkKX19LHNldERlZmF1bHRzOmZ1bmN0aW9uKGIpe2EuZXh0ZW5kKGEudmFsaWRhdG9yLmRlZmF1bHRzLGIpfSxtZXNzYWdlczp7cmVxdWlyZWQ6XCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLHJlbW90ZTpcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixlbWFpbDpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsdXJsOlwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLGRhdGU6XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLGRhdGVJU086XCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlIChJU08pLlwiLG51bWJlcjpcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlci5cIixkaWdpdHM6XCJQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuXCIsZXF1YWxUbzpcIlBsZWFzZSBlbnRlciB0aGUgc2FtZSB2YWx1ZSBhZ2Fpbi5cIixtYXhsZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycy5cIiksbWlubGVuZ3RoOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIikscmFuZ2VsZW5ndGg6YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfSBjaGFyYWN0ZXJzIGxvbmcuXCIpLHJhbmdlOmEudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0uXCIpLG1heDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxtaW46YS52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiksc3RlcDphLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSBtdWx0aXBsZSBvZiB7MH0uXCIpfSxhdXRvQ3JlYXRlUmFuZ2VzOiExLHByb3RvdHlwZTp7aW5pdDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEodGhpcykuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09YSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO2lmKCF0aGlzLmZvcm0mJmMmJih0aGlzLmZvcm09YSh0aGlzKS5jbG9zZXN0KFwiZm9ybVwiKVswXSx0aGlzLm5hbWU9YSh0aGlzKS5hdHRyKFwibmFtZVwiKSksZD09PXRoaXMuZm9ybSl7dmFyIGU9YS5kYXRhKHRoaXMuZm9ybSxcInZhbGlkYXRvclwiKSxmPVwib25cIitiLnR5cGUucmVwbGFjZSgvXnZhbGlkYXRlLyxcIlwiKSxnPWUuc2V0dGluZ3M7Z1tmXSYmIWEodGhpcykuaXMoZy5pZ25vcmUpJiZnW2ZdLmNhbGwoZSx0aGlzLGIpfX10aGlzLmxhYmVsQ29udGFpbmVyPWEodGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyKSx0aGlzLmVycm9yQ29udGV4dD10aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aCYmdGhpcy5sYWJlbENvbnRhaW5lcnx8YSh0aGlzLmN1cnJlbnRGb3JtKSx0aGlzLmNvbnRhaW5lcnM9YSh0aGlzLnNldHRpbmdzLmVycm9yQ29udGFpbmVyKS5hZGQodGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyKSx0aGlzLnN1Ym1pdHRlZD17fSx0aGlzLnZhbHVlQ2FjaGU9e30sdGhpcy5wZW5kaW5nUmVxdWVzdD0wLHRoaXMucGVuZGluZz17fSx0aGlzLmludmFsaWQ9e30sdGhpcy5yZXNldCgpO3ZhciBjLGQ9dGhpcy5jdXJyZW50Rm9ybSxlPXRoaXMuZ3JvdXBzPXt9O2EuZWFjaCh0aGlzLnNldHRpbmdzLmdyb3VwcyxmdW5jdGlvbihiLGMpe1wic3RyaW5nXCI9PXR5cGVvZiBjJiYoYz1jLnNwbGl0KC9cXHMvKSksYS5lYWNoKGMsZnVuY3Rpb24oYSxjKXtlW2NdPWJ9KX0pLGM9dGhpcy5zZXR0aW5ncy5ydWxlcyxhLmVhY2goYyxmdW5jdGlvbihiLGQpe2NbYl09YS52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShkKX0pLGEodGhpcy5jdXJyZW50Rm9ybSkub24oXCJmb2N1c2luLnZhbGlkYXRlIGZvY3Vzb3V0LnZhbGlkYXRlIGtleXVwLnZhbGlkYXRlXCIsXCI6dGV4dCwgW3R5cGU9J3Bhc3N3b3JkJ10sIFt0eXBlPSdmaWxlJ10sIHNlbGVjdCwgdGV4dGFyZWEsIFt0eXBlPSdudW1iZXInXSwgW3R5cGU9J3NlYXJjaCddLCBbdHlwZT0ndGVsJ10sIFt0eXBlPSd1cmwnXSwgW3R5cGU9J2VtYWlsJ10sIFt0eXBlPSdkYXRldGltZSddLCBbdHlwZT0nZGF0ZSddLCBbdHlwZT0nbW9udGgnXSwgW3R5cGU9J3dlZWsnXSwgW3R5cGU9J3RpbWUnXSwgW3R5cGU9J2RhdGV0aW1lLWxvY2FsJ10sIFt0eXBlPSdyYW5nZSddLCBbdHlwZT0nY29sb3InXSwgW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddLCBbY29udGVudGVkaXRhYmxlXSwgW3R5cGU9J2J1dHRvbiddXCIsYikub24oXCJjbGljay52YWxpZGF0ZVwiLFwic2VsZWN0LCBvcHRpb24sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLGIpLHRoaXMuc2V0dGluZ3MuaW52YWxpZEhhbmRsZXImJmEodGhpcy5jdXJyZW50Rm9ybSkub24oXCJpbnZhbGlkLWZvcm0udmFsaWRhdGVcIix0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyKX0sZm9ybTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoZWNrRm9ybSgpLGEuZXh0ZW5kKHRoaXMuc3VibWl0dGVkLHRoaXMuZXJyb3JNYXApLHRoaXMuaW52YWxpZD1hLmV4dGVuZCh7fSx0aGlzLmVycm9yTWFwKSx0aGlzLnZhbGlkKCl8fGEodGhpcy5jdXJyZW50Rm9ybSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkLWZvcm1cIixbdGhpc10pLHRoaXMuc2hvd0Vycm9ycygpLHRoaXMudmFsaWQoKX0sY2hlY2tGb3JtOmZ1bmN0aW9uKCl7dGhpcy5wcmVwYXJlRm9ybSgpO2Zvcih2YXIgYT0wLGI9dGhpcy5jdXJyZW50RWxlbWVudHM9dGhpcy5lbGVtZW50cygpO2JbYV07YSsrKXRoaXMuY2hlY2soYlthXSk7cmV0dXJuIHRoaXMudmFsaWQoKX0sZWxlbWVudDpmdW5jdGlvbihiKXt2YXIgYyxkLGU9dGhpcy5jbGVhbihiKSxmPXRoaXMudmFsaWRhdGlvblRhcmdldEZvcihlKSxnPXRoaXMsaD0hMDtyZXR1cm4gdm9pZCAwPT09Zj9kZWxldGUgdGhpcy5pbnZhbGlkW2UubmFtZV06KHRoaXMucHJlcGFyZUVsZW1lbnQoZiksdGhpcy5jdXJyZW50RWxlbWVudHM9YShmKSxkPXRoaXMuZ3JvdXBzW2YubmFtZV0sZCYmYS5lYWNoKHRoaXMuZ3JvdXBzLGZ1bmN0aW9uKGEsYil7Yj09PWQmJmEhPT1mLm5hbWUmJihlPWcudmFsaWRhdGlvblRhcmdldEZvcihnLmNsZWFuKGcuZmluZEJ5TmFtZShhKSkpLGUmJmUubmFtZSBpbiBnLmludmFsaWQmJihnLmN1cnJlbnRFbGVtZW50cy5wdXNoKGUpLGg9Zy5jaGVjayhlKSYmaCkpfSksYz10aGlzLmNoZWNrKGYpIT09ITEsaD1oJiZjLGM/dGhpcy5pbnZhbGlkW2YubmFtZV09ITE6dGhpcy5pbnZhbGlkW2YubmFtZV09ITAsdGhpcy5udW1iZXJPZkludmFsaWRzKCl8fCh0aGlzLnRvSGlkZT10aGlzLnRvSGlkZS5hZGQodGhpcy5jb250YWluZXJzKSksdGhpcy5zaG93RXJyb3JzKCksYShiKS5hdHRyKFwiYXJpYS1pbnZhbGlkXCIsIWMpKSxofSxzaG93RXJyb3JzOmZ1bmN0aW9uKGIpe2lmKGIpe3ZhciBjPXRoaXM7YS5leHRlbmQodGhpcy5lcnJvck1hcCxiKSx0aGlzLmVycm9yTGlzdD1hLm1hcCh0aGlzLmVycm9yTWFwLGZ1bmN0aW9uKGEsYil7cmV0dXJue21lc3NhZ2U6YSxlbGVtZW50OmMuZmluZEJ5TmFtZShiKVswXX19KSx0aGlzLnN1Y2Nlc3NMaXN0PWEuZ3JlcCh0aGlzLnN1Y2Nlc3NMaXN0LGZ1bmN0aW9uKGEpe3JldHVybiEoYS5uYW1lIGluIGIpfSl9dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzP3RoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycy5jYWxsKHRoaXMsdGhpcy5lcnJvck1hcCx0aGlzLmVycm9yTGlzdCk6dGhpcy5kZWZhdWx0U2hvd0Vycm9ycygpfSxyZXNldEZvcm06ZnVuY3Rpb24oKXthLmZuLnJlc2V0Rm9ybSYmYSh0aGlzLmN1cnJlbnRGb3JtKS5yZXNldEZvcm0oKSx0aGlzLmludmFsaWQ9e30sdGhpcy5zdWJtaXR0ZWQ9e30sdGhpcy5wcmVwYXJlRm9ybSgpLHRoaXMuaGlkZUVycm9ycygpO3ZhciBiPXRoaXMuZWxlbWVudHMoKS5yZW1vdmVEYXRhKFwicHJldmlvdXNWYWx1ZVwiKS5yZW1vdmVBdHRyKFwiYXJpYS1pbnZhbGlkXCIpO3RoaXMucmVzZXRFbGVtZW50cyhiKX0scmVzZXRFbGVtZW50czpmdW5jdGlvbihhKXt2YXIgYjtpZih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KWZvcihiPTA7YVtiXTtiKyspdGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsYVtiXSx0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsXCJcIiksdGhpcy5maW5kQnlOYW1lKGFbYl0ubmFtZSkucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtlbHNlIGEucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpfSxudW1iZXJPZkludmFsaWRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub2JqZWN0TGVuZ3RoKHRoaXMuaW52YWxpZCl9LG9iamVjdExlbmd0aDpmdW5jdGlvbihhKXt2YXIgYixjPTA7Zm9yKGIgaW4gYSl2b2lkIDAhPT1hW2JdJiZudWxsIT09YVtiXSYmYVtiXSE9PSExJiZjKys7cmV0dXJuIGN9LGhpZGVFcnJvcnM6ZnVuY3Rpb24oKXt0aGlzLmhpZGVUaGVzZSh0aGlzLnRvSGlkZSl9LGhpZGVUaGVzZTpmdW5jdGlvbihhKXthLm5vdCh0aGlzLmNvbnRhaW5lcnMpLnRleHQoXCJcIiksdGhpcy5hZGRXcmFwcGVyKGEpLmhpZGUoKX0sdmFsaWQ6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PXRoaXMuc2l6ZSgpfSxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXJyb3JMaXN0Lmxlbmd0aH0sZm9jdXNJbnZhbGlkOmZ1bmN0aW9uKCl7aWYodGhpcy5zZXR0aW5ncy5mb2N1c0ludmFsaWQpdHJ5e2EodGhpcy5maW5kTGFzdEFjdGl2ZSgpfHx0aGlzLmVycm9yTGlzdC5sZW5ndGgmJnRoaXMuZXJyb3JMaXN0WzBdLmVsZW1lbnR8fFtdKS5maWx0ZXIoXCI6dmlzaWJsZVwiKS50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihcImZvY3VzaW5cIil9Y2F0Y2goYil7fX0sZmluZExhc3RBY3RpdmU6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmxhc3RBY3RpdmU7cmV0dXJuIGImJjE9PT1hLmdyZXAodGhpcy5lcnJvckxpc3QsZnVuY3Rpb24oYSl7cmV0dXJuIGEuZWxlbWVudC5uYW1lPT09Yi5uYW1lfSkubGVuZ3RoJiZifSxlbGVtZW50czpmdW5jdGlvbigpe3ZhciBiPXRoaXMsYz17fTtyZXR1cm4gYSh0aGlzLmN1cnJlbnRGb3JtKS5maW5kKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGVdXCIpLm5vdChcIjpzdWJtaXQsIDpyZXNldCwgOmltYWdlLCA6ZGlzYWJsZWRcIikubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgZD10aGlzLm5hbWV8fGEodGhpcykuYXR0cihcIm5hbWVcIiksZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgYSh0aGlzKS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpJiZcImZhbHNlXCIhPT1hKHRoaXMpLmF0dHIoXCJjb250ZW50ZWRpdGFibGVcIik7cmV0dXJuIWQmJmIuc2V0dGluZ3MuZGVidWcmJndpbmRvdy5jb25zb2xlJiZjb25zb2xlLmVycm9yKFwiJW8gaGFzIG5vIG5hbWUgYXNzaWduZWRcIix0aGlzKSxlJiYodGhpcy5mb3JtPWEodGhpcykuY2xvc2VzdChcImZvcm1cIilbMF0sdGhpcy5uYW1lPWQpLHRoaXMuZm9ybT09PWIuY3VycmVudEZvcm0mJighKGQgaW4gY3x8IWIub2JqZWN0TGVuZ3RoKGEodGhpcykucnVsZXMoKSkpJiYoY1tkXT0hMCwhMCkpfSl9LGNsZWFuOmZ1bmN0aW9uKGIpe3JldHVybiBhKGIpWzBdfSxlcnJvcnM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLnNldHRpbmdzLmVycm9yQ2xhc3Muc3BsaXQoXCIgXCIpLmpvaW4oXCIuXCIpO3JldHVybiBhKHRoaXMuc2V0dGluZ3MuZXJyb3JFbGVtZW50K1wiLlwiK2IsdGhpcy5lcnJvckNvbnRleHQpfSxyZXNldEludGVybmFsczpmdW5jdGlvbigpe3RoaXMuc3VjY2Vzc0xpc3Q9W10sdGhpcy5lcnJvckxpc3Q9W10sdGhpcy5lcnJvck1hcD17fSx0aGlzLnRvU2hvdz1hKFtdKSx0aGlzLnRvSGlkZT1hKFtdKX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnJlc2V0SW50ZXJuYWxzKCksdGhpcy5jdXJyZW50RWxlbWVudHM9YShbXSl9LHByZXBhcmVGb3JtOmZ1bmN0aW9uKCl7dGhpcy5yZXNldCgpLHRoaXMudG9IaWRlPXRoaXMuZXJyb3JzKCkuYWRkKHRoaXMuY29udGFpbmVycyl9LHByZXBhcmVFbGVtZW50OmZ1bmN0aW9uKGEpe3RoaXMucmVzZXQoKSx0aGlzLnRvSGlkZT10aGlzLmVycm9yc0ZvcihhKX0sZWxlbWVudFZhbHVlOmZ1bmN0aW9uKGIpe3ZhciBjLGQsZT1hKGIpLGY9Yi50eXBlLGc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuYXR0cihcImNvbnRlbnRlZGl0YWJsZVwiKSYmXCJmYWxzZVwiIT09ZS5hdHRyKFwiY29udGVudGVkaXRhYmxlXCIpO3JldHVyblwicmFkaW9cIj09PWZ8fFwiY2hlY2tib3hcIj09PWY/dGhpcy5maW5kQnlOYW1lKGIubmFtZSkuZmlsdGVyKFwiOmNoZWNrZWRcIikudmFsKCk6XCJudW1iZXJcIj09PWYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLnZhbGlkaXR5P2IudmFsaWRpdHkuYmFkSW5wdXQ/XCJOYU5cIjplLnZhbCgpOihjPWc/ZS50ZXh0KCk6ZS52YWwoKSxcImZpbGVcIj09PWY/XCJDOlxcXFxmYWtlcGF0aFxcXFxcIj09PWMuc3Vic3RyKDAsMTIpP2Muc3Vic3RyKDEyKTooZD1jLmxhc3RJbmRleE9mKFwiL1wiKSxkPj0wP2Muc3Vic3RyKGQrMSk6KGQ9Yy5sYXN0SW5kZXhPZihcIlxcXFxcIiksZD49MD9jLnN1YnN0cihkKzEpOmMpKTpcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoL1xcci9nLFwiXCIpOmMpfSxjaGVjazpmdW5jdGlvbihiKXtiPXRoaXMudmFsaWRhdGlvblRhcmdldEZvcih0aGlzLmNsZWFuKGIpKTt2YXIgYyxkLGUsZixnPWEoYikucnVsZXMoKSxoPWEubWFwKGcsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYn0pLmxlbmd0aCxpPSExLGo9dGhpcy5lbGVtZW50VmFsdWUoYik7XCJmdW5jdGlvblwiPT10eXBlb2YgZy5ub3JtYWxpemVyP2Y9Zy5ub3JtYWxpemVyOlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuc2V0dGluZ3Mubm9ybWFsaXplciYmKGY9dGhpcy5zZXR0aW5ncy5ub3JtYWxpemVyKSxmJiYoaj1mLmNhbGwoYixqKSxkZWxldGUgZy5ub3JtYWxpemVyKTtmb3IoZCBpbiBnKXtlPXttZXRob2Q6ZCxwYXJhbWV0ZXJzOmdbZF19O3RyeXtpZihjPWEudmFsaWRhdG9yLm1ldGhvZHNbZF0uY2FsbCh0aGlzLGosYixlLnBhcmFtZXRlcnMpLFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiPT09YyYmMT09PWgpe2k9ITA7Y29udGludWV9aWYoaT0hMSxcInBlbmRpbmdcIj09PWMpcmV0dXJuIHZvaWQodGhpcy50b0hpZGU9dGhpcy50b0hpZGUubm90KHRoaXMuZXJyb3JzRm9yKGIpKSk7aWYoIWMpcmV0dXJuIHRoaXMuZm9ybWF0QW5kQWRkKGIsZSksITF9Y2F0Y2goayl7dGhyb3cgdGhpcy5zZXR0aW5ncy5kZWJ1ZyYmd2luZG93LmNvbnNvbGUmJmNvbnNvbGUubG9nKFwiRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIitiLmlkK1wiLCBjaGVjayB0aGUgJ1wiK2UubWV0aG9kK1wiJyBtZXRob2QuXCIsayksayBpbnN0YW5jZW9mIFR5cGVFcnJvciYmKGsubWVzc2FnZSs9XCIuICBFeGNlcHRpb24gb2NjdXJyZWQgd2hlbiBjaGVja2luZyBlbGVtZW50IFwiK2IuaWQrXCIsIGNoZWNrIHRoZSAnXCIrZS5tZXRob2QrXCInIG1ldGhvZC5cIiksa319aWYoIWkpcmV0dXJuIHRoaXMub2JqZWN0TGVuZ3RoKGcpJiZ0aGlzLnN1Y2Nlc3NMaXN0LnB1c2goYiksITB9LGN1c3RvbURhdGFNZXNzYWdlOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEoYikuZGF0YShcIm1zZ1wiK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSl8fGEoYikuZGF0YShcIm1zZ1wiKX0sY3VzdG9tTWVzc2FnZTpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYV07cmV0dXJuIGMmJihjLmNvbnN0cnVjdG9yPT09U3RyaW5nP2M6Y1tiXSl9LGZpbmREZWZpbmVkOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxhcmd1bWVudHMubGVuZ3RoO2ErKylpZih2b2lkIDAhPT1hcmd1bWVudHNbYV0pcmV0dXJuIGFyZ3VtZW50c1thXX0sZGVmYXVsdE1lc3NhZ2U6ZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiPT10eXBlb2YgYyYmKGM9e21ldGhvZDpjfSk7dmFyIGQ9dGhpcy5maW5kRGVmaW5lZCh0aGlzLmN1c3RvbU1lc3NhZ2UoYi5uYW1lLGMubWV0aG9kKSx0aGlzLmN1c3RvbURhdGFNZXNzYWdlKGIsYy5tZXRob2QpLCF0aGlzLnNldHRpbmdzLmlnbm9yZVRpdGxlJiZiLnRpdGxlfHx2b2lkIDAsYS52YWxpZGF0b3IubWVzc2FnZXNbYy5tZXRob2RdLFwiPHN0cm9uZz5XYXJuaW5nOiBObyBtZXNzYWdlIGRlZmluZWQgZm9yIFwiK2IubmFtZStcIjwvc3Ryb25nPlwiKSxlPS9cXCQ/XFx7KFxcZCspXFx9L2c7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZD9kPWQuY2FsbCh0aGlzLGMucGFyYW1ldGVycyxiKTplLnRlc3QoZCkmJihkPWEudmFsaWRhdG9yLmZvcm1hdChkLnJlcGxhY2UoZSxcInskMX1cIiksYy5wYXJhbWV0ZXJzKSksZH0sZm9ybWF0QW5kQWRkOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5kZWZhdWx0TWVzc2FnZShhLGIpO3RoaXMuZXJyb3JMaXN0LnB1c2goe21lc3NhZ2U6YyxlbGVtZW50OmEsbWV0aG9kOmIubWV0aG9kfSksdGhpcy5lcnJvck1hcFthLm5hbWVdPWMsdGhpcy5zdWJtaXR0ZWRbYS5uYW1lXT1jfSxhZGRXcmFwcGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNldHRpbmdzLndyYXBwZXImJihhPWEuYWRkKGEucGFyZW50KHRoaXMuc2V0dGluZ3Mud3JhcHBlcikpKSxhfSxkZWZhdWx0U2hvd0Vycm9yczpmdW5jdGlvbigpe3ZhciBhLGIsYztmb3IoYT0wO3RoaXMuZXJyb3JMaXN0W2FdO2ErKyljPXRoaXMuZXJyb3JMaXN0W2FdLHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0JiZ0aGlzLnNldHRpbmdzLmhpZ2hsaWdodC5jYWxsKHRoaXMsYy5lbGVtZW50LHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpLHRoaXMuc2hvd0xhYmVsKGMuZWxlbWVudCxjLm1lc3NhZ2UpO2lmKHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCYmKHRoaXMudG9TaG93PXRoaXMudG9TaG93LmFkZCh0aGlzLmNvbnRhaW5lcnMpKSx0aGlzLnNldHRpbmdzLnN1Y2Nlc3MpZm9yKGE9MDt0aGlzLnN1Y2Nlc3NMaXN0W2FdO2ErKyl0aGlzLnNob3dMYWJlbCh0aGlzLnN1Y2Nlc3NMaXN0W2FdKTtpZih0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KWZvcihhPTAsYj10aGlzLnZhbGlkRWxlbWVudHMoKTtiW2FdO2ErKyl0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcyxiW2FdLHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyx0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpO3RoaXMudG9IaWRlPXRoaXMudG9IaWRlLm5vdCh0aGlzLnRvU2hvdyksdGhpcy5oaWRlRXJyb3JzKCksdGhpcy5hZGRXcmFwcGVyKHRoaXMudG9TaG93KS5zaG93KCl9LHZhbGlkRWxlbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jdXJyZW50RWxlbWVudHMubm90KHRoaXMuaW52YWxpZEVsZW1lbnRzKCkpfSxpbnZhbGlkRWxlbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gYSh0aGlzLmVycm9yTGlzdCkubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudH0pfSxzaG93TGFiZWw6ZnVuY3Rpb24oYixjKXt2YXIgZCxlLGYsZyxoPXRoaXMuZXJyb3JzRm9yKGIpLGk9dGhpcy5pZE9yTmFtZShiKSxqPWEoYikuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIik7aC5sZW5ndGg/KGgucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLGguaHRtbChjKSk6KGg9YShcIjxcIit0aGlzLnNldHRpbmdzLmVycm9yRWxlbWVudCtcIj5cIikuYXR0cihcImlkXCIsaStcIi1lcnJvclwiKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpLmh0bWwoY3x8XCJcIiksZD1oLHRoaXMuc2V0dGluZ3Mud3JhcHBlciYmKGQ9aC5oaWRlKCkuc2hvdygpLndyYXAoXCI8XCIrdGhpcy5zZXR0aW5ncy53cmFwcGVyK1wiLz5cIikucGFyZW50KCkpLHRoaXMubGFiZWxDb250YWluZXIubGVuZ3RoP3RoaXMubGFiZWxDb250YWluZXIuYXBwZW5kKGQpOnRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQ/dGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudC5jYWxsKHRoaXMsZCxhKGIpKTpkLmluc2VydEFmdGVyKGIpLGguaXMoXCJsYWJlbFwiKT9oLmF0dHIoXCJmb3JcIixpKTowPT09aC5wYXJlbnRzKFwibGFiZWxbZm9yPSdcIit0aGlzLmVzY2FwZUNzc01ldGEoaSkrXCInXVwiKS5sZW5ndGgmJihmPWguYXR0cihcImlkXCIpLGo/ai5tYXRjaChuZXcgUmVnRXhwKFwiXFxcXGJcIit0aGlzLmVzY2FwZUNzc01ldGEoZikrXCJcXFxcYlwiKSl8fChqKz1cIiBcIitmKTpqPWYsYShiKS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGopLGU9dGhpcy5ncm91cHNbYi5uYW1lXSxlJiYoZz10aGlzLGEuZWFjaChnLmdyb3VwcyxmdW5jdGlvbihiLGMpe2M9PT1lJiZhKFwiW25hbWU9J1wiK2cuZXNjYXBlQ3NzTWV0YShiKStcIiddXCIsZy5jdXJyZW50Rm9ybSkuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixoLmF0dHIoXCJpZFwiKSl9KSkpKSwhYyYmdGhpcy5zZXR0aW5ncy5zdWNjZXNzJiYoaC50ZXh0KFwiXCIpLFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLnNldHRpbmdzLnN1Y2Nlc3M/aC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnN1Y2Nlc3MpOnRoaXMuc2V0dGluZ3Muc3VjY2VzcyhoLGIpKSx0aGlzLnRvU2hvdz10aGlzLnRvU2hvdy5hZGQoaCl9LGVycm9yc0ZvcjpmdW5jdGlvbihiKXt2YXIgYz10aGlzLmVzY2FwZUNzc01ldGEodGhpcy5pZE9yTmFtZShiKSksZD1hKGIpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLGU9XCJsYWJlbFtmb3I9J1wiK2MrXCInXSwgbGFiZWxbZm9yPSdcIitjK1wiJ10gKlwiO3JldHVybiBkJiYoZT1lK1wiLCAjXCIrdGhpcy5lc2NhcGVDc3NNZXRhKGQpLnJlcGxhY2UoL1xccysvZyxcIiwgI1wiKSksdGhpcy5lcnJvcnMoKS5maWx0ZXIoZSl9LGVzY2FwZUNzc01ldGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvKFtcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AXFxbXFxdXmB7fH1+XSkvZyxcIlxcXFwkMVwiKX0saWRPck5hbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ3JvdXBzW2EubmFtZV18fCh0aGlzLmNoZWNrYWJsZShhKT9hLm5hbWU6YS5pZHx8YS5uYW1lKX0sdmFsaWRhdGlvblRhcmdldEZvcjpmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5jaGVja2FibGUoYikmJihiPXRoaXMuZmluZEJ5TmFtZShiLm5hbWUpKSxhKGIpLm5vdCh0aGlzLnNldHRpbmdzLmlnbm9yZSlbMF19LGNoZWNrYWJsZTpmdW5jdGlvbihhKXtyZXR1cm4vcmFkaW98Y2hlY2tib3gvaS50ZXN0KGEudHlwZSl9LGZpbmRCeU5hbWU6ZnVuY3Rpb24oYil7cmV0dXJuIGEodGhpcy5jdXJyZW50Rm9ybSkuZmluZChcIltuYW1lPSdcIit0aGlzLmVzY2FwZUNzc01ldGEoYikrXCInXVwiKX0sZ2V0TGVuZ3RoOmZ1bmN0aW9uKGIsYyl7c3dpdGNoKGMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZVwic2VsZWN0XCI6cmV0dXJuIGEoXCJvcHRpb246c2VsZWN0ZWRcIixjKS5sZW5ndGg7Y2FzZVwiaW5wdXRcIjppZih0aGlzLmNoZWNrYWJsZShjKSlyZXR1cm4gdGhpcy5maW5kQnlOYW1lKGMubmFtZSkuZmlsdGVyKFwiOmNoZWNrZWRcIikubGVuZ3RofXJldHVybiBiLmxlbmd0aH0sZGVwZW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIXRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIGFdfHx0aGlzLmRlcGVuZFR5cGVzW3R5cGVvZiBhXShhLGIpfSxkZXBlbmRUeXBlczp7XCJib29sZWFuXCI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN0cmluZzpmdW5jdGlvbihiLGMpe3JldHVybiEhYShiLGMuZm9ybSkubGVuZ3RofSxcImZ1bmN0aW9uXCI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYShiKX19LG9wdGlvbmFsOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuZWxlbWVudFZhbHVlKGIpO3JldHVybiFhLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLmNhbGwodGhpcyxjLGIpJiZcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIn0sc3RhcnRSZXF1ZXN0OmZ1bmN0aW9uKGIpe3RoaXMucGVuZGluZ1tiLm5hbWVdfHwodGhpcy5wZW5kaW5nUmVxdWVzdCsrLGEoYikuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5wZW5kaW5nQ2xhc3MpLHRoaXMucGVuZGluZ1tiLm5hbWVdPSEwKX0sc3RvcFJlcXVlc3Q6ZnVuY3Rpb24oYixjKXt0aGlzLnBlbmRpbmdSZXF1ZXN0LS0sdGhpcy5wZW5kaW5nUmVxdWVzdDwwJiYodGhpcy5wZW5kaW5nUmVxdWVzdD0wKSxkZWxldGUgdGhpcy5wZW5kaW5nW2IubmFtZV0sYShiKS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLnBlbmRpbmdDbGFzcyksYyYmMD09PXRoaXMucGVuZGluZ1JlcXVlc3QmJnRoaXMuZm9ybVN1Ym1pdHRlZCYmdGhpcy5mb3JtKCk/KGEodGhpcy5jdXJyZW50Rm9ybSkuc3VibWl0KCksdGhpcy5zdWJtaXRCdXR0b24mJmEoXCJpbnB1dDpoaWRkZW5bbmFtZT0nXCIrdGhpcy5zdWJtaXRCdXR0b24ubmFtZStcIiddXCIsdGhpcy5jdXJyZW50Rm9ybSkucmVtb3ZlKCksdGhpcy5mb3JtU3VibWl0dGVkPSExKTohYyYmMD09PXRoaXMucGVuZGluZ1JlcXVlc3QmJnRoaXMuZm9ybVN1Ym1pdHRlZCYmKGEodGhpcy5jdXJyZW50Rm9ybSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkLWZvcm1cIixbdGhpc10pLHRoaXMuZm9ybVN1Ym1pdHRlZD0hMSl9LHByZXZpb3VzVmFsdWU6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYz1cInN0cmluZ1wiPT10eXBlb2YgYyYmY3x8XCJyZW1vdGVcIixhLmRhdGEoYixcInByZXZpb3VzVmFsdWVcIil8fGEuZGF0YShiLFwicHJldmlvdXNWYWx1ZVwiLHtvbGQ6bnVsbCx2YWxpZDohMCxtZXNzYWdlOnRoaXMuZGVmYXVsdE1lc3NhZ2UoYix7bWV0aG9kOmN9KX0pfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEZvcm0oKSxhKHRoaXMuY3VycmVudEZvcm0pLm9mZihcIi52YWxpZGF0ZVwiKS5yZW1vdmVEYXRhKFwidmFsaWRhdG9yXCIpLmZpbmQoXCIudmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1lcXVhbFRvXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtbGVzc1RoYW4tYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtbGVzc1RoYW5cIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1sZXNzVGhhbi1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtbGVzc1RoYW5FcXVhbC1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1sZXNzVGhhbkVxdWFsXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtbGVzc1RoYW5FcXVhbC1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbC1ibHVyXCIpLm9mZihcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsXCIpLnJlbW92ZUNsYXNzKFwidmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbC1ibHVyXCIpLmZpbmQoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW4tYmx1clwiKS5vZmYoXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5cIikucmVtb3ZlQ2xhc3MoXCJ2YWxpZGF0ZS1ncmVhdGVyVGhhbi1ibHVyXCIpfX0sY2xhc3NSdWxlU2V0dGluZ3M6e3JlcXVpcmVkOntyZXF1aXJlZDohMH0sZW1haWw6e2VtYWlsOiEwfSx1cmw6e3VybDohMH0sZGF0ZTp7ZGF0ZTohMH0sZGF0ZUlTTzp7ZGF0ZUlTTzohMH0sbnVtYmVyOntudW1iZXI6ITB9LGRpZ2l0czp7ZGlnaXRzOiEwfSxjcmVkaXRjYXJkOntjcmVkaXRjYXJkOiEwfX0sYWRkQ2xhc3NSdWxlczpmdW5jdGlvbihiLGMpe2IuY29uc3RydWN0b3I9PT1TdHJpbmc/dGhpcy5jbGFzc1J1bGVTZXR0aW5nc1tiXT1jOmEuZXh0ZW5kKHRoaXMuY2xhc3NSdWxlU2V0dGluZ3MsYil9LGNsYXNzUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGM9e30sZD1hKGIpLmF0dHIoXCJjbGFzc1wiKTtyZXR1cm4gZCYmYS5lYWNoKGQuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKCl7dGhpcyBpbiBhLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5ncyYmYS5leHRlbmQoYyxhLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5nc1t0aGlzXSl9KSxjfSxub3JtYWxpemVBdHRyaWJ1dGVSdWxlOmZ1bmN0aW9uKGEsYixjLGQpey9taW58bWF4fHN0ZXAvLnRlc3QoYykmJihudWxsPT09Ynx8L251bWJlcnxyYW5nZXx0ZXh0Ly50ZXN0KGIpKSYmKGQ9TnVtYmVyKGQpLGlzTmFOKGQpJiYoZD12b2lkIDApKSxkfHwwPT09ZD9hW2NdPWQ6Yj09PWMmJlwicmFuZ2VcIiE9PWImJihhW2NdPSEwKX0sYXR0cmlidXRlUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGMsZCxlPXt9LGY9YShiKSxnPWIuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtmb3IoYyBpbiBhLnZhbGlkYXRvci5tZXRob2RzKVwicmVxdWlyZWRcIj09PWM/KGQ9Yi5nZXRBdHRyaWJ1dGUoYyksXCJcIj09PWQmJihkPSEwKSxkPSEhZCk6ZD1mLmF0dHIoYyksdGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKGUsZyxjLGQpO3JldHVybiBlLm1heGxlbmd0aCYmLy0xfDIxNDc0ODM2NDd8NTI0Mjg4Ly50ZXN0KGUubWF4bGVuZ3RoKSYmZGVsZXRlIGUubWF4bGVuZ3RoLGV9LGRhdGFSdWxlczpmdW5jdGlvbihiKXt2YXIgYyxkLGU9e30sZj1hKGIpLGc9Yi5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO2ZvcihjIGluIGEudmFsaWRhdG9yLm1ldGhvZHMpZD1mLmRhdGEoXCJydWxlXCIrYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStjLnN1YnN0cmluZygxKS50b0xvd2VyQ2FzZSgpKSxcIlwiPT09ZCYmKGQ9ITApLHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShlLGcsYyxkKTtyZXR1cm4gZX0sc3RhdGljUnVsZXM6ZnVuY3Rpb24oYil7dmFyIGM9e30sZD1hLmRhdGEoYi5mb3JtLFwidmFsaWRhdG9yXCIpO3JldHVybiBkLnNldHRpbmdzLnJ1bGVzJiYoYz1hLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGQuc2V0dGluZ3MucnVsZXNbYi5uYW1lXSl8fHt9KSxjfSxub3JtYWxpemVSdWxlczpmdW5jdGlvbihiLGMpe3JldHVybiBhLmVhY2goYixmdW5jdGlvbihkLGUpe2lmKGU9PT0hMSlyZXR1cm4gdm9pZCBkZWxldGUgYltkXTtpZihlLnBhcmFtfHxlLmRlcGVuZHMpe3ZhciBmPSEwO3N3aXRjaCh0eXBlb2YgZS5kZXBlbmRzKXtjYXNlXCJzdHJpbmdcIjpmPSEhYShlLmRlcGVuZHMsYy5mb3JtKS5sZW5ndGg7YnJlYWs7Y2FzZVwiZnVuY3Rpb25cIjpmPWUuZGVwZW5kcy5jYWxsKGMsYyl9Zj9iW2RdPXZvaWQgMD09PWUucGFyYW18fGUucGFyYW06KGEuZGF0YShjLmZvcm0sXCJ2YWxpZGF0b3JcIikucmVzZXRFbGVtZW50cyhhKGMpKSxkZWxldGUgYltkXSl9fSksYS5lYWNoKGIsZnVuY3Rpb24oZCxlKXtiW2RdPWEuaXNGdW5jdGlvbihlKSYmXCJub3JtYWxpemVyXCIhPT1kP2UoYyk6ZX0pLGEuZWFjaChbXCJtaW5sZW5ndGhcIixcIm1heGxlbmd0aFwiXSxmdW5jdGlvbigpe2JbdGhpc10mJihiW3RoaXNdPU51bWJlcihiW3RoaXNdKSl9KSxhLmVhY2goW1wicmFuZ2VsZW5ndGhcIixcInJhbmdlXCJdLGZ1bmN0aW9uKCl7dmFyIGM7Ylt0aGlzXSYmKGEuaXNBcnJheShiW3RoaXNdKT9iW3RoaXNdPVtOdW1iZXIoYlt0aGlzXVswXSksTnVtYmVyKGJbdGhpc11bMV0pXTpcInN0cmluZ1wiPT10eXBlb2YgYlt0aGlzXSYmKGM9Ylt0aGlzXS5yZXBsYWNlKC9bXFxbXFxdXS9nLFwiXCIpLnNwbGl0KC9bXFxzLF0rLyksYlt0aGlzXT1bTnVtYmVyKGNbMF0pLE51bWJlcihjWzFdKV0pKX0pLGEudmFsaWRhdG9yLmF1dG9DcmVhdGVSYW5nZXMmJihudWxsIT1iLm1pbiYmbnVsbCE9Yi5tYXgmJihiLnJhbmdlPVtiLm1pbixiLm1heF0sZGVsZXRlIGIubWluLGRlbGV0ZSBiLm1heCksbnVsbCE9Yi5taW5sZW5ndGgmJm51bGwhPWIubWF4bGVuZ3RoJiYoYi5yYW5nZWxlbmd0aD1bYi5taW5sZW5ndGgsYi5tYXhsZW5ndGhdLGRlbGV0ZSBiLm1pbmxlbmd0aCxkZWxldGUgYi5tYXhsZW5ndGgpKSxifSxub3JtYWxpemVSdWxlOmZ1bmN0aW9uKGIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXt2YXIgYz17fTthLmVhY2goYi5zcGxpdCgvXFxzLyksZnVuY3Rpb24oKXtjW3RoaXNdPSEwfSksYj1jfXJldHVybiBifSxhZGRNZXRob2Q6ZnVuY3Rpb24oYixjLGQpe2EudmFsaWRhdG9yLm1ldGhvZHNbYl09YyxhLnZhbGlkYXRvci5tZXNzYWdlc1tiXT12b2lkIDAhPT1kP2Q6YS52YWxpZGF0b3IubWVzc2FnZXNbYl0sYy5sZW5ndGg8MyYmYS52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhiLGEudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoYikpfSxtZXRob2RzOntyZXF1aXJlZDpmdW5jdGlvbihiLGMsZCl7aWYoIXRoaXMuZGVwZW5kKGQsYykpcmV0dXJuXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7aWYoXCJzZWxlY3RcIj09PWMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7dmFyIGU9YShjKS52YWwoKTtyZXR1cm4gZSYmZS5sZW5ndGg+MH1yZXR1cm4gdGhpcy5jaGVja2FibGUoYyk/dGhpcy5nZXRMZW5ndGgoYixjKT4wOnZvaWQgMCE9PWImJm51bGwhPT1iJiZiLmxlbmd0aD4wfSxlbWFpbDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KGEpfSx1cmw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OltcXC8/I11cXFMqKT8kL2kudGVzdChhKX0sZGF0ZTpmdW5jdGlvbigpe3ZhciBhPSExO3JldHVybiBmdW5jdGlvbihiLGMpe3JldHVybiBhfHwoYT0hMCx0aGlzLnNldHRpbmdzLmRlYnVnJiZ3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuKFwiVGhlIGBkYXRlYCBtZXRob2QgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gJzIuMC4wJy5cXG5QbGVhc2UgZG9uJ3QgdXNlIGl0LCBzaW5jZSBpdCByZWxpZXMgb24gdGhlIERhdGUgY29uc3RydWN0b3IsIHdoaWNoXFxuYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IGFjcm9zcyBicm93c2VycyBhbmQgbG9jYWxlcy4gVXNlIGBkYXRlSVNPYFxcbmluc3RlYWQgb3Igb25lIG9mIHRoZSBsb2NhbGUgc3BlY2lmaWMgbWV0aG9kcyBpbiBgbG9jYWxpemF0aW9ucy9gXFxuYW5kIGBhZGRpdGlvbmFsLW1ldGhvZHMuanNgLlwiKSksdGhpcy5vcHRpb25hbChjKXx8IS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZShiKS50b1N0cmluZygpKX19KCksZGF0ZUlTTzpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXlxcZHs0fVtcXC9cXC1dKDA/WzEtOV18MVswMTJdKVtcXC9cXC1dKDA/WzEtOV18WzEyXVswLTldfDNbMDFdKSQvLnRlc3QoYSl9LG51bWJlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHwvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KGEpfSxkaWdpdHM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vcHRpb25hbChiKXx8L15cXGQrJC8udGVzdChhKX0sbWlubGVuZ3RoOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmlzQXJyYXkoYik/Yi5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYixjKTtyZXR1cm4gdGhpcy5vcHRpb25hbChjKXx8ZT49ZH0sbWF4bGVuZ3RoOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmlzQXJyYXkoYik/Yi5sZW5ndGg6dGhpcy5nZXRMZW5ndGgoYixjKTtyZXR1cm4gdGhpcy5vcHRpb25hbChjKXx8ZTw9ZH0scmFuZ2VsZW5ndGg6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuaXNBcnJheShiKT9iLmxlbmd0aDp0aGlzLmdldExlbmd0aChiLGMpO3JldHVybiB0aGlzLm9wdGlvbmFsKGMpfHxlPj1kWzBdJiZlPD1kWzFdfSxtaW46ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPj1jfSxtYXg6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9wdGlvbmFsKGIpfHxhPD1jfSxyYW5nZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub3B0aW9uYWwoYil8fGE+PWNbMF0mJmE8PWNbMV19LHN0ZXA6ZnVuY3Rpb24oYixjLGQpe3ZhciBlLGY9YShjKS5hdHRyKFwidHlwZVwiKSxnPVwiU3RlcCBhdHRyaWJ1dGUgb24gaW5wdXQgdHlwZSBcIitmK1wiIGlzIG5vdCBzdXBwb3J0ZWQuXCIsaD1bXCJ0ZXh0XCIsXCJudW1iZXJcIixcInJhbmdlXCJdLGk9bmV3IFJlZ0V4cChcIlxcXFxiXCIrZitcIlxcXFxiXCIpLGo9ZiYmIWkudGVzdChoLmpvaW4oKSksaz1mdW5jdGlvbihhKXt2YXIgYj0oXCJcIithKS5tYXRjaCgvKD86XFwuKFxcZCspKT8kLyk7cmV0dXJuIGImJmJbMV0/YlsxXS5sZW5ndGg6MH0sbD1mdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5yb3VuZChhKk1hdGgucG93KDEwLGUpKX0sbT0hMDtpZihqKXRocm93IG5ldyBFcnJvcihnKTtyZXR1cm4gZT1rKGQpLChrKGIpPmV8fGwoYiklbChkKSE9PTApJiYobT0hMSksdGhpcy5vcHRpb25hbChjKXx8bX0sZXF1YWxUbzpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YShkKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5vbmZvY3Vzb3V0JiZlLm5vdChcIi52YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIikubGVuZ3RoJiZlLmFkZENsYXNzKFwidmFsaWRhdGUtZXF1YWxUby1ibHVyXCIpLm9uKFwiYmx1ci52YWxpZGF0ZS1lcXVhbFRvXCIsZnVuY3Rpb24oKXthKGMpLnZhbGlkKCl9KSxiPT09ZS52YWwoKX0scmVtb3RlOmZ1bmN0aW9uKGIsYyxkLGUpe2lmKHRoaXMub3B0aW9uYWwoYykpcmV0dXJuXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7ZT1cInN0cmluZ1wiPT10eXBlb2YgZSYmZXx8XCJyZW1vdGVcIjt2YXIgZixnLGgsaT10aGlzLnByZXZpb3VzVmFsdWUoYyxlKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdfHwodGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdPXt9KSxpLm9yaWdpbmFsTWVzc2FnZT1pLm9yaWdpbmFsTWVzc2FnZXx8dGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tjLm5hbWVdW2VdLHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXVtlXT1pLm1lc3NhZ2UsZD1cInN0cmluZ1wiPT10eXBlb2YgZCYme3VybDpkfXx8ZCxoPWEucGFyYW0oYS5leHRlbmQoe2RhdGE6Yn0sZC5kYXRhKSksaS5vbGQ9PT1oP2kudmFsaWQ6KGkub2xkPWgsZj10aGlzLHRoaXMuc3RhcnRSZXF1ZXN0KGMpLGc9e30sZ1tjLm5hbWVdPWIsYS5hamF4KGEuZXh0ZW5kKCEwLHttb2RlOlwiYWJvcnRcIixwb3J0OlwidmFsaWRhdGVcIitjLm5hbWUsZGF0YVR5cGU6XCJqc29uXCIsZGF0YTpnLGNvbnRleHQ6Zi5jdXJyZW50Rm9ybSxzdWNjZXNzOmZ1bmN0aW9uKGEpe3ZhciBkLGcsaCxqPWE9PT0hMHx8XCJ0cnVlXCI9PT1hO2Yuc2V0dGluZ3MubWVzc2FnZXNbYy5uYW1lXVtlXT1pLm9yaWdpbmFsTWVzc2FnZSxqPyhoPWYuZm9ybVN1Ym1pdHRlZCxmLnJlc2V0SW50ZXJuYWxzKCksZi50b0hpZGU9Zi5lcnJvcnNGb3IoYyksZi5mb3JtU3VibWl0dGVkPWgsZi5zdWNjZXNzTGlzdC5wdXNoKGMpLGYuaW52YWxpZFtjLm5hbWVdPSExLGYuc2hvd0Vycm9ycygpKTooZD17fSxnPWF8fGYuZGVmYXVsdE1lc3NhZ2UoYyx7bWV0aG9kOmUscGFyYW1ldGVyczpifSksZFtjLm5hbWVdPWkubWVzc2FnZT1nLGYuaW52YWxpZFtjLm5hbWVdPSEwLGYuc2hvd0Vycm9ycyhkKSksaS52YWxpZD1qLGYuc3RvcFJlcXVlc3QoYyxqKX19LGQpKSxcInBlbmRpbmdcIil9fX0pO3ZhciBiLGM9e307cmV0dXJuIGEuYWpheFByZWZpbHRlcj9hLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWEucG9ydDtcImFib3J0XCI9PT1hLm1vZGUmJihjW2VdJiZjW2VdLmFib3J0KCksY1tlXT1kKX0pOihiPWEuYWpheCxhLmFqYXg9ZnVuY3Rpb24oZCl7dmFyIGU9KFwibW9kZVwiaW4gZD9kOmEuYWpheFNldHRpbmdzKS5tb2RlLGY9KFwicG9ydFwiaW4gZD9kOmEuYWpheFNldHRpbmdzKS5wb3J0O3JldHVyblwiYWJvcnRcIj09PWU/KGNbZl0mJmNbZl0uYWJvcnQoKSxjW2ZdPWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGNbZl0pOmIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSksYX0pO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdzZWxlY3QnKS5uaWNlU2VsZWN0KCk7XG4gICAgJCgnW2Jhbm5lclNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICAgIGNyb3NzRmFkZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICBkZWxheTogMzYwMCxcbiAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgYmVmb3JlSW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVzID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IHRoaXMucGFyYW1zLnNsaWRlc1BlclZpZXc7XG5cbiAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0LrQvtC70LjRh9C10YHRgtCy0LAg0YHQu9Cw0LnQtNC+0LJcbiAgICAgICAgICAgIGlmIChzbGlkZXMgPD0gc2xpZGVzUGVyVmlldykge1xuICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5sb29wID0gZmFsc2U7IC8vINCe0YLQutC70Y7Rh9Cw0LXQvCBsb29wXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH0pO1xuICAkKCdbcHJvZHVjdHNTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmF2aWdhdGlvblByZXYgPSAkKHRoaXMpLnBhcmVudHMoJy5zZWN0aW9uLXByb2R1Y3RzLXN3aXBlcicpLmZpbmQoJy5zd2lwZXJfX25hdmlnYXRpb24tYnRuLXByZXYnKVswXTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uTmV4dCA9ICQodGhpcykucGFyZW50cygnLnNlY3Rpb24tcHJvZHVjdHMtc3dpcGVyJykuZmluZCgnLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tbmV4dCcpWzBdO1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGVsOiBcIi5zd2lwZXItc2Nyb2xsYmFyXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IG5hdmlnYXRpb25OZXh0LFxuICAgICAgICBwcmV2RWw6IG5hdmlnYXRpb25QcmV2LFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDk5Mjoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICAkKCdbbGFzdFNpemVTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIHNwZWVkOiA3MDAsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbFwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnNlY3Rpb24tbGFzdC1zaXplX19zd2lwZXItbmF2aWdhdGlvbiAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnNlY3Rpb24tbGFzdC1zaXplX19zd2lwZXItbmF2aWdhdGlvbiAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1wcmV2JyxcbiAgICAgIH0sXG4gICAgICBicmVha3BvaW50czoge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIDc2Nzoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcbiAgJCgnW3BsdXNTaXplU2xpZGVyX2pzXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCQodGhpcylbMF0sIHtcbiAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBzcGVlZDogNzAwLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxcIixcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zZWN0aW9uLXBsdXMtc2l6ZSAuc3dpcGVyX19uYXZpZ2F0aW9uLWJ0bi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnNlY3Rpb24tcGx1cy1zaXplIC5zd2lwZXJfX25hdmlnYXRpb24tYnRuLXByZXYnLFxuICAgICAgfSxcbiAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE4LFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuICAkKCdbcHJvZHVjdEdhbGxlcnlTbGlkZXJfanNdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJCh0aGlzKVswXSwge1xuICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgIGJ1bGxldHM6IHRydWUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfSk7XG4gICQoJ1tzZXJ0aWZpY2F0ZVNsaWRlcl9qc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcigkKHRoaXMpWzBdLCB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDY0LFxuICAgICAgc3BlZWQ6IDcwMCxcbiAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8vIG5hdmlnYXRpb246IHtcbiAgICAgIC8vICAgbmV4dEVsOiAnLnNlY3Rpb24tc2VydGlmaWNhdGVzIC5zd2lwZXJfX25hdmlnYXRpb24tYnRuLW5leHQnLFxuICAgICAgLy8gICBwcmV2RWw6ICcuc2VjdGlvbi1zZXJ0aWZpY2F0ZXMgLnN3aXBlcl9fbmF2aWdhdGlvbi1idG4tcHJldicsXG4gICAgICAvLyB9LFxuICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgNzY3OiB7XG4gICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogNjQsXG4gICAgICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgc3dpcGVyTWFycXVlID0gbmV3IFN3aXBlcignLnNlY3Rpb24tcGFydG5lcnNfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICBzcGVlZDogNDUwMCxcbiAgICBsb29wOiB0cnVlLFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgLy8g0LzQvtC20L3QviDQtdGJ0ZEg0L7RgtC60LvRjtGH0LjRgtGMINGB0LLQsNC50L9cbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UgLy8g0LjQu9C4INGB0LTQtdC70LDRgtGMINGC0LDQuiwg0YfRgtC+0LHRiyDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC70YHRjyBhdXRvcGxheSDQv9C+0YHQu9C1INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Y9cbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA1LFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gZG9vb3JzIHN3aXBlcnNcbiAgZnVuY3Rpb24gZG9vcnNTd2lwZXJJbml0KGVsLCBpc1JldmVyc2UgPSBmYWxzZSwgc3BlZWQgPSA2NTAwLCBpbml0aWFsU2xpZGUgPSAwKSB7XG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoZWwsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjQsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgIHNwZWVkOiBzcGVlZCxcbiAgICAgICAgaW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgLy8g0LzQvtC20L3QviDQtdGJ0ZEg0L7RgtC60LvRjtGH0LjRgtGMINGB0LLQsNC50L9cbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICByZXZlcnNlRGlyZWN0aW9uOiBpc1JldmVyc2UsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlIC8vINC40LvQuCDRgdC00LXQu9Cw0YLRjCDRgtCw0LosINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQu9GB0Y8gYXV0b3BsYXkg0L/QvtGB0LvQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNGPXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgIC8vICAgNzY3OiB7XG5cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbiAgfVxuICB2YXIgZG9vcnNTd2lwZXJFbDEgPSAkKCcuc2VjdGlvbi1kb29yc19fc3dpcGVyXzEnKTtcbiAgdmFyIGRvb3JzU3dpcGVyRWwyID0gJCgnLnNlY3Rpb24tZG9vcnNfX3N3aXBlcl8yJyk7XG4gIHZhciBkb29yc1N3aXBlckVsMyA9ICQoJy5zZWN0aW9uLWRvb3JzX19zd2lwZXJfMycpO1xuICB2YXIgZG9vcnNTd2lwZXJFbDQgPSAkKCcuc2VjdGlvbi1kb29yc19fc3dpcGVyXzQnKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWwxWzBdKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWwyWzBdLCB0cnVlLCA4NTAwKTtcbiAgZG9vcnNTd2lwZXJJbml0KGRvb3JzU3dpcGVyRWwzWzBdLCBmYWxzZSwgNDgwMCk7XG4gIGRvb3JzU3dpcGVySW5pdChkb29yc1N3aXBlckVsNFswXSwgdHJ1ZSwgNjIwMCk7XG5cbiAgY29uc3QgZ2FsbGFyeV9fc3dpcGVyID0gbmV3IFN3aXBlcignLmdhbGxhcnlfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogJzElJyxcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgICAgZGVsYXk6IDI1MDAsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5nYWxsYXJ5X193cmFwcGVyIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6e1xuICAgICAgMDp7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIDU3ODp7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sXG4gICAgICA3Njc6e1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAnMSUnLFxuICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgIH0sXG4gICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgfSxcblxuXG4gICAgfVxufSlcblxuICAgICQoJy50YWJzLXNsaWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItY29udGFpbmVyJyk7XG4gICAgICB2YXIgc3dpcGVyVGFicyA9IG5ldyBTd2lwZXIoJGNvbnRhaW5lciwge1xuICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgICB9KSA7XG4gICAgfSlcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2FncmVlbWVudENvbnRyb2xfSlNdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgJGZvcm0gPSAkdGhpcy5jbG9zZXN0KCdmb3JtJyksXG4gICAgICAgICAgICAkaW5wdXQgPSAkZm9ybS5maW5kKCdbYWdyZWVtZW50Q29udHJvbENoZWNrYm94X0pTXScpLFxuICAgICAgICAgICAgJGJ0biA9ICRmb3JtLmZpbmQoJ1thZ3JlZW1lbnRDb250cm9sQnRuX0pTXScpO1xuXG4gICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICRidG4uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYnRuLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgICAkYnRuLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGJ0bi5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tyZWFkTW9yZUJ0bl9KU10nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkYnRuID0gJCh0aGlzKSxcbiAgICAgICAgICAgICRwYXJlbnQgPSAkYnRuLmNsb3Nlc3QoJ1tyZWFkTW9yZUNvbnRhaW5lcl9KU10nKTtcblxuICAgICAgICAkcGFyZW50LmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG5cbiAgICAkKFwiW3RvVG9wX0pTXVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgIH0sIDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkKFwiW2FuY2hvckxpbmtfSlNdXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykuaW5uZXJXaWR0aCgpIDwgNzY5KSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogMjkuNjg3NTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gKGhlYWRlckhlaWdodCAvIDEwMCkgKiA1LCAyNTQ4NjA3NDYxOTAyMjU5NTkwMTIwODYxNzk3MTYyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoaWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB0b3AgPSAoJChpZCkub2Zmc2V0KCkudG9wKSAtIGhlYWRlckhlaWdodDtcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wXG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIiArIGlkO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgIGlmIChoYXNoICE9IFwiXCIpIHtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA8IDc2OSkge1xuICAgICAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAoaGVhZGVySGVpZ2h0IC8gMTAwKSAqIDI5LjY4NzU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9IChoZWFkZXJIZWlnaHQgLyAxMDApICogNSwgMjU0ODYwNzQ2MTkwMjI1OTU5MDEyMDg2MTc5NzE2MjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKGhhc2gpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIGhlYWRlckhlaWdodDtcbiAgICAgICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuXG4gICQudmFsaWRhdG9yLmFkZE1ldGhvZCgncGF0dGVybicsIGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXR0ZXJuKSB7XG4gICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0LfQvdCw0YfQtdC90LjQtSDQv9GD0YHRgtGL0LwgKNC10YHQu9C4INC/0L7Qu9C1INC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvikg0LjQu9C4INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINGA0LXQs9GD0LvRj9GA0L3QvtC80YMg0LLRi9GA0LDQttC10L3QuNGOXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgcGF0dGVybi50ZXN0KHZhbHVlKTtcbn0sICfQn9C+0LvQtSDRgdC+0LTQtdGA0LbQuNGCINC90LXQutC+0YDRgNC10LrRgtC90L7QtSDQt9C90LDRh9C10L3QuNC1Jyk7XG5cbiAgICAkKCdbZm9ybVZhbGlkYXRlX0pTXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoe1xuICAgICAgICAgICAgZXJyb3JDbGFzczogXCJ2YWxpZGF0ZV9lcnJvclwiLFxuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlthLXpBLVrQsC3Rj9CQLdCvXFxzXSskLywgLy8g0JzQtdGC0L7QtCDQv9GA0L7QstC10YDQutC4INCx0YPQutCyINC4INC/0YDQvtCx0LXQu9C+0LJcbiAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogMixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXig/IS4qKFxcZClcXDF7M30pWzAtOSgpKy1dKyQvLFxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogNywgLy8g0JzQtdGC0L7QtCDQv9GA0L7QstC10YDQutC4INC/0L7QstGC0L7RgNGP0Y7RidC40YXRgdGPINC/0L7QtNGA0Y/QtCDRgdC40LzQstC+0LvQvtCyXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihbYS16QS1aMC05Xy4rLV0pK1xcQCgoW2EtekEtWjAtOS1dKStcXC4pKyhbYS16QS1aMC05XXsyLDR9KSskLywgLy8g0J/RgNC+0LLQtdGA0LrQsCDQutC+0YDRgNC10LrRgtC90L7RgdGC0LggZW1haWxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIChlcnJvciwgZWxlbWVudCkge30sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtZW51T3BlbigpO1xuICAgIH0pO1xuXG4gICAgJCgnLmhlYWRlcl9fbW9iLWJ0bi1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lbnVDbG9zZSgpO1xuICAgIH0pO1xuXG5cdCQoJy5oZWFkZXJfX21vYi1jb250ZW50IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQoJ1toZWFkZXJCdG5fSlNdJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgbWVudUNsb3NlKCk7XG5cdFx0fVxuICB9KTtcblxuICBmdW5jdGlvbiBzbGlkZVRvZ2dsZVNlY3Rpb24oKSB7XG4gICAgJCgnW3RvZ2dsZUl0ZW1fSlNdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8IDk5Mikge1xuICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA5OTIpIHtcbiAgICAgICQoJy5wcm9kdWN0LWNhcmQgW3RvZ2dsZUl0ZW1fSlNdJykuZmlyc3QoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgJCgnLnByb2R1Y3QtY2FyZCBbdG9nZ2xlSXRlbV9KU10nKS5maXJzdCgpLnNpYmxpbmdzKCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJCgnW3RvZ2dsZUl0ZW1fSlNdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPCA5OTIpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHNsaWRlVG9nZ2xlU2VjdGlvbigpO1xuXG5cblxuICAvLyBEcm9wZG93blxuICBmdW5jdGlvbiByaWdodERyb3Bkb3duKCkge1xuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHN1Ym1lbnUgPSAkKHRoaXMpLmZpbmQoJy5zdWJtZW51Jyk7XG4gICAgICB2YXIgJG9mZnNldFRvTGVmdCA9ICRzdWJtZW51Lm9mZnNldCgpLmxlZnQgKyAkc3VibWVudS5vdXRlcldpZHRoKCk7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICBpZigkb2Zmc2V0VG9MZWZ0ID4gJCh3aW5kb3cpLm91dGVyV2lkdGgoKSkge1xuICAgICAgICAgICRzdWJtZW51LmNzcygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVgoLSR7JG9mZnNldFRvTGVmdCAtICQod2luZG93KS5vdXRlcldpZHRoKCkgKyAzMH1weClgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHN1Ym1lbnUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByaWdodERyb3Bkb3duKCk7XG5cbiAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLm91dGVyV2lkdGgoKTtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSAhPT0gd2luZG93V2lkdGgpIHtcbiAgICAgIHJpZ2h0RHJvcGRvd24oKTtcbiAgICAgIHNsaWRlVG9nZ2xlU2VjdGlvbigpO1xuICAgIH1cbiAgfSk7XG5cblxuICAgICQoJy5tZW51X19pdGVtLmRyb3Bkb3duJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA+IDk5Mikge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcubWVudV9faXRlbS5kcm9wZG93bicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPiA5OTIpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN1Ym1lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcubWVudV9fZHJvcGRvd24tYnRuJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5vdXRlcldpZHRoKCkgPD0gOTkyKSB7XG4gICAgICAgICAgdmFyICRpc09wZW4gPSAkKHRoaXMpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIC8vICQoJy5tZW51X19kcm9wZG93bi1idG4nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAvLyAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgIC8vICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgaWYoJGlzT3Blbikge1xuICAgICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWVudV9faXRlbS5kcm9wZG93bicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLnN1Ym1lbnUnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1lbnVfX2l0ZW0uZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc3VibWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5zdWJtZW51Jykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICAgIC8vICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICBpZiAoJCh3aW5kb3cpLm91dGVyV2lkdGgoKSA8PSA5OTIpIHtcbiAgICAvLyAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZW51X19pdGVtLmRyb3Bkb3duLmlzLWFjdGl2ZScpLmxlbmd0aFxuICAgIC8vICAgICAmJiAhJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnVfX2Ryb3Bkb3duLWJ0bi5pcy1hY3RpdmUnKS5sZW5ndGgpIHtcbiAgICAvLyAgICAgICAgIC8vINC60LvQuNC6INCy0L3Rg9GC0YDQuCDRjdC70LXQvNC10L3RgtCwXG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8g0LrQu9C40Log0YHQvdCw0YDRg9C20Lgg0Y3Qu9C10LzQtdC90YLQsFxuICAgIC8vICAgICAkKCcubWVudV9faXRlbS5kcm9wZG93bi5pcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgLy8gICAgICQoJy5zdWJtZW51LmlzLWFjdGl2ZScpLnNsaWRlVXAoKTtcbiAgICAvLyAgICAgJCgnLnN1Ym1lbnUuaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG5cbiAgICAkKCdbbG9hZE1vcmVCdG5fSlNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ1tsb2FkTW9yZUNvbnRhaW5lcl9KU10nKS5hZGRDbGFzcygnbWQtYWxsLWl0ZW1zLXZpc2libGUnKTtcbiAgICB9KTtcblxuXG5cblxuZnVuY3Rpb24gbWVudU9wZW4oKSB7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgJCgnW2hlYWRlckJ0bl9KU10nKS5jbG9zZXN0KCdoZWFkZXInKS5maW5kKCcuaGVhZGVyX19tb2ItY29udGVudCcpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgJCgnaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIG1lbnVDbG9zZSgpIHtcbiAgICAvLyAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCdbaGVhZGVyQnRuX0pTXScpLmNsb3Nlc3QoJ2hlYWRlcicpLmZpbmQoJy5oZWFkZXJfX21vYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbn1cblxuJCgnLmhlYWRlcl9fY2F0YWxvZy1idG4nKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAkKCcuaGVhZGVyX19jYXRhbG9nLW5hdi13cmFwJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuJCgnLmhlYWRlcl9fY2F0YWxvZy1idG4tY2xvc2UnKS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAkKCcuaGVhZGVyX19jYXRhbG9nLW5hdi13cmFwJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuXG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW3BvcHVwT3Blbl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBvcHVwQ2xvc2UoKTtcbiAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKSxcbiAgICAgICAgICAgIHRhcmdldCA9ICRlbGVtLmF0dHIoJ3BvcHVwT3BlbicpO1xuXG4gICAgICAgIGlmICh0YXJnZXQgPT0gJ3Byb21vdGlvbi1wb3B1cCcgfHwgdGFyZ2V0ID09ICdzZXJ2aWNlLXBvcHVwJyB8fCB0YXJnZXQgPT0gJ3Byb2R1Y3QtcG9wdXAnKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSAkZWxlbS5hdHRyKCdkYXRhLWhpZGRlbi1pZCcpO1xuXG4gICAgICAgICAgICAkKCdbcG9wdXBJRD1cIicgKyB0YXJnZXQgKyAnXCJdJykuZmluZCgnW2hpZGRlblZhbHVlX0pTXScpLmF0dHIoJ3ZhbHVlJywgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdXBPcGVuKHRhcmdldCk7XG4gICAgfSk7XG5cblxuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICBwb3B1cE9wZW4oJ21hcmtldGluZy1uZXdzJyk7XG4gICAgLy8gfSwgMzAwMDApO1xuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICBwb3B1cE9wZW4oJ2FmdGVyLXNpeHR5Jyk7XG4gICAgLy8gfSwgNjAwMDApO1xuXG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1twb3B1cENsb3NlX0pTXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcG9wdXBDbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImRvd25sb2FkLXBvcHVwLXRyaWdnZXJcIj48L2Rpdj4nKTtcblxuICAgICQoJ2JvZHkgLmRvd25sb2FkLXBvcHVwLXRyaWdnZXInKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rvd25sb2FkUG9wdXBTdGF0ZScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcG9wdXBPcGVuKCdkb3dubG9hZC1wb3B1cCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJywgJ2ZhbHNlJyk7XG4gICAgICB9O1xuICAgIH0pO1xufSk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJykgPT09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG93bmxvYWRQb3B1cFN0YXRlJywgJ3RydWUnKVxufVxuXG52YXIgZ2FsbGVyeVRodW1ic1N3aXBlciA9IG5ldyBTd2lwZXIoJy5wcm9kdWN0LXBvcHVwX19nYWxsZXJ5LXN3aXBlci10aHVtYnMnLCB7XG4gIC8vIGxvb3A6IHRydWUsXG4gIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICBoaWRlOiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzY3OiB7XG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICB9XG4gIH0sXG4gIG9uOiB7XG4gICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG59KTtcbnZhciBnYWxsZXJ5U3dpcGVyID0gbmV3IFN3aXBlcignLnByb2R1Y3QtcG9wdXBfX2dhbGxlcnktc3dpcGVyLWxhcmdlJywge1xuICAvLyBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDEwLFxuICB0aHVtYnM6IHtcbiAgICBzd2lwZXI6IGdhbGxlcnlUaHVtYnNTd2lwZXIsXG4gIH0sXG59KTtcblxuXG52YXIgcG9wdXBDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJ3RleHRhcmVhJykudmFsKCcnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJy5mb3JtLWZpbGUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0ZXh0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnKTtcblxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2RpdiBwJykudGV4dCh0ZXh0KTtcbiAgICB9KTtcbiAgICAkKCcucG9wdXAub3BlbicpLmZpbmQoJy5mb3JtLXN0YXJzIGxhYmVsOmxhc3QtY2hpbGQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICQoJy5wb3B1cCAudmFsaWRhdGVfZXJyb3InKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndmFsaWRhdGVfZXJyb3InKTtcbiAgICB9KTtcbiAgICAkKCdodG1sJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAkKCcucG9wdXAub3BlbicpLmFkZENsYXNzKCdmYWRlJyk7XG4gICAgJCgnLnBvcHVwLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xufTtcblxudmFyIHBvcHVwT3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcG9wdXBDbG9zZSgpO1xuICAgIHZhciB0YXJnZXQgPSBlO1xuICAgIHZhciB3aWR0aCA9ICQoJy5wYWdlJykud2lkdGgoKTtcblxuICAgICQoJ2h0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5yZW1vdmVDbGFzcygnZmFkZScpO1xuICAgIGlmKCQoJ1twb3B1cElEPVwiJyArIHRhcmdldCArICdcIl0nKS5oYXNDbGFzcygncHJvZHVjdC1wb3B1cCcpKSB7XG4gICAgICAvLyBjbGVhclRpbWVvdXQoZ2FsbGVyeVRodW1ic1N3aXBlclVwZGF0ZVRpbWVvdXQpO1xuICAgICAgZ2FsbGVyeVRodW1ic1N3aXBlci51cGRhdGUoKTtcbiAgICAgIGlmKCQod2luZG93KS5vdXRlcldpZHRoKCkgPD0gNzY3KSB7XG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGdhbGxlcnlUaHVtYnNTd2lwZXIudXBkYXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBmaXhlZEhlYWRlcigpIHtcbiAgdmFyIGhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcl9fdG9wJykuaW5uZXJIZWlnaHQoKSArICQoJy5oZWFkZXJfX2JvdHRvbScpLmlubmVySGVpZ2h0KCkgKyA1MDtcblx0aWYgKCBoZWlnaHQgPiA1MCApIHtcbiAgICBqUXVlcnkoJy5oZWFkZXInKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXRvcCcsIGhlYWRlckhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgalF1ZXJ5KCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgJCgnYm9keScpLmNzcygncGFkZGluZy10b3AnLCAnMCcpO1xuICB9XG59XG5cbmZpeGVkSGVhZGVyKCk7XG5qUXVlcnkod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oJCkge1xuXHRmaXhlZEhlYWRlcigpO1xufSk7XG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICBmaXhlZEhlYWRlcigpO1xufSk7XG5cbiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gIHZhciByYXRpbyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIC8gKCgkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQod2luZG93KS5oZWlnaHQoKSkgLyAxMDApO1xuICAkKCcuaGVhZGVyLXByb2dyZXNzJykud2lkdGgocmF0aW8gKyBcIiVcIik7XG59KTtcblxuXG5cbiQoJ2ltZycpLmVhY2goIGZ1bmN0aW9uKGUpIHtcbiAgJCh0aGlzKS5hZGRDbGFzcygnbGF6eScpO1xufSk7XG5sZXQgbGF6eUxvYWRJbnN0YW5jZSA9IG5ldyBMYXp5TG9hZCgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
