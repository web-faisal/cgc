"use strict";
var q,
  aa =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
function ba(a) {
  a = [
    "object" == typeof globalThis && globalThis,
    a,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
}
var ca = ba(this);
function da(a, b) {
  if (b)
    a: {
      var c = ca;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        aa(c, a, { configurable: !0, writable: !0, value: b });
    }
}
function ea(a) {
  function b(d) {
    return a.next(d);
  }
  function c(d) {
    return a.throw(d);
  }
  return new Promise(function (d, e) {
    function f(g) {
      g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
    }
    f(a.next());
  });
}
function u(a) {
  return ea(a());
}
function fa(a, b) {
  a instanceof String && (a += "");
  var c = 0,
    d = !1,
    e = {
      next: function () {
        if (!d && c < a.length) {
          var f = c++;
          return { value: b(f, a[f]), done: !1 };
        }
        d = !0;
        return { done: !0, value: void 0 };
      },
    };
  e[Symbol.iterator] = function () {
    return e;
  };
  return e;
}
da("Array.prototype.values", function (a) {
  return a
    ? a
    : function () {
        return fa(this, function (b, c) {
          return c;
        });
      };
});
da("Object.values", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c;
      };
});
da("Array.prototype.includes", function (a) {
  return a
    ? a
    : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }
        return !1;
      };
});
da("Object.entries", function (a) {
  return a
    ? a
    : function (b) {
        var c = [],
          d;
        for (d in b)
          Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c;
      };
});
da("String.prototype.matchAll", function (a) {
  return a
    ? a
    : function (b) {
        if (b instanceof RegExp && !b.global)
          throw new TypeError(
            "RegExp passed into String.prototype.matchAll() must have global tag."
          );
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
          d = this,
          e = !1,
          f = {
            next: function () {
              if (e) return { value: void 0, done: !0 };
              var g = c.exec(d);
              if (!g) return (e = !0), { value: void 0, done: !0 };
              "" === g[0] && (c.lastIndex += 1);
              return { value: g, done: !1 };
            },
          };
        f[Symbol.iterator] = function () {
          return f;
        };
        return f;
      };
});
da("Promise.prototype.finally", function (a) {
  return a
    ? a
    : function (b) {
        return this.then(
          function (c) {
            return Promise.resolve(b()).then(function () {
              return c;
            });
          },
          function (c) {
            return Promise.resolve(b()).then(function () {
              throw c;
            });
          }
        );
      };
}); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var v = this || self;
function w(a, b) {
  a = a.split(".");
  b = b || v;
  for (var c = 0; c < a.length; c++)
    if (((b = b[a[c]]), null == b)) return null;
  return b;
}
function ha(a) {
  var b = typeof a;
  b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  return "array" == b || ("object" == b && "number" == typeof a.length);
}
function ia(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ja(a, b, c) {
  if (!a) throw Error();
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }
  return function () {
    return a.apply(b, arguments);
  };
}
function ka(a, b, c) {
  ka =
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? ia
      : ja;
  return ka.apply(null, arguments);
}
function x(a, b) {
  a = a.split(".");
  var c = v;
  a[0] in c ||
    "undefined" == typeof c.execScript ||
    c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift()); )
    a.length || void 0 === b
      ? c[d] && c[d] !== Object.prototype[d]
        ? (c = c[d])
        : (c = c[d] = {})
      : (c[d] = b);
}
function la(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.Wa = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.Wb = function (d, e, f) {
    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
      g[h - 2] = arguments[h];
    return b.prototype[e].apply(d, g);
  };
}
function ma(a) {
  return a;
}
function na(a, b) {
  if (Error.captureStackTrace) Error.captureStackTrace(this, na);
  else {
    const c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
  void 0 !== b && (this.cause = b);
}
la(na, Error);
na.prototype.name = "CustomError";
function oa() {}
function pa(a, b) {
  Array.prototype.forEach.call(a, b, void 0);
}
function ra(a, b) {
  return Array.prototype.map.call(a, b, void 0);
}
function sa(a, b) {
  b = Array.prototype.indexOf.call(a, b, void 0);
  0 <= b && Array.prototype.splice.call(a, b, 1);
}
function ta(a, b) {
  for (let c = 1; c < arguments.length; c++) {
    const d = arguments[c];
    if (ha(d)) {
      const e = a.length || 0,
        f = d.length || 0;
      a.length = e + f;
      for (let g = 0; g < f; g++) a[e + g] = d[g];
    } else a.push(d);
  }
}
function ua(a) {
  for (const b in a) return !1;
  return !0;
}
function va(a) {
  if (!a || "object" !== typeof a) return a;
  if ("function" === typeof a.clone) return a.clone();
  if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
  if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
  if (a instanceof Date) return new Date(a.getTime());
  const b = Array.isArray(a)
    ? []
    : "function" !== typeof ArrayBuffer ||
      "function" !== typeof ArrayBuffer.isView ||
      !ArrayBuffer.isView(a) ||
      a instanceof DataView
    ? {}
    : new a.constructor(a.length);
  for (const c in a) b[c] = va(a[c]);
  return b;
}
const wa =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function xa(a, b) {
  let c, d;
  for (let e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) a[c] = d[c];
    for (let f = 0; f < wa.length; f++)
      (c = wa[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}
var ya;
function za() {}
function Aa(a) {
  return new za(Ba, a);
}
var Ba = {};
Aa("");
var Ca = class {
    constructor(a) {
      this.h = a;
    }
    toString() {
      return this.h + "";
    }
  },
  Da = {};
var Ea = String.prototype.trim
  ? function (a) {
      return a.trim();
    }
  : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    };
var Fa,
  Ga = w("CLOSURE_FLAGS"),
  Ha = Ga && Ga[610401301];
Fa = null != Ha ? Ha : !1;
function Ia() {
  var a = v.navigator;
  return a && (a = a.userAgent) ? a : "";
}
var Ja;
const Ka = v.navigator;
Ja = Ka ? Ka.userAgentData || null : null;
function La(a) {
  return Fa
    ? Ja
      ? Ja.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
      : !1
    : !1;
}
function y(a) {
  return -1 != Ia().indexOf(a);
}
function Ma() {
  return Fa ? !!Ja && 0 < Ja.brands.length : !1;
}
function Na() {
  return Ma()
    ? La("Chromium")
    : ((y("Chrome") || y("CriOS")) && !(Ma() ? 0 : y("Edge"))) || y("Silk");
}
var Oa = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function Pa(a) {
  return a ? decodeURI(a) : a;
}
function Qa(a, b, c) {
  if (Array.isArray(b))
    for (var d = 0; d < b.length; d++) Qa(a, String(b[d]), c);
  else
    null != b &&
      c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))));
}
function Ra(a) {
  var b = [],
    c;
  for (c in a) Qa(c, a[c], b);
  return b.join("&");
}
function Sa() {
  this.j = this.j;
  this.l = this.l;
}
Sa.prototype.j = !1;
Sa.prototype.dispose = function () {
  this.j || ((this.j = !0), this.O());
};
Sa.prototype.O = function () {
  if (this.l) for (; this.l.length; ) this.l.shift()();
};
function Ta(a, b) {
  a.__closure__error__context__984382 ||
    (a.__closure__error__context__984382 = {});
  a.__closure__error__context__984382.severity = b;
}
function Ua(a) {
  var b = w("window.location.href");
  null == a && (a = 'Unknown Error of type "null/undefined"');
  if ("string" === typeof a)
    return {
      message: a,
      name: "Unknown error",
      lineNumber: "Not available",
      fileName: b,
      stack: "Not available",
    };
  var c = !1;
  try {
    var d = a.lineNumber || a.line || "Not available";
  } catch (g) {
    (d = "Not available"), (c = !0);
  }
  try {
    var e = a.fileName || a.filename || a.sourceURL || v.$googDebugFname || b;
  } catch (g) {
    (e = "Not available"), (c = !0);
  }
  b = Va(a);
  if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
    c = a.message;
    if (null == c) {
      if (a.constructor && a.constructor instanceof Function) {
        if (a.constructor.name) c = a.constructor.name;
        else if (((c = a.constructor), Wa[c])) c = Wa[c];
        else {
          c = String(c);
          if (!Wa[c]) {
            var f = /function\s+([^\(]+)/m.exec(c);
            Wa[c] = f ? f[1] : "[Anonymous]";
          }
          c = Wa[c];
        }
        c = 'Unknown Error of type "' + c + '"';
      } else c = "Unknown Error of unknown type";
      "function" === typeof a.toString &&
        Object.prototype.toString !== a.toString &&
        (c += ": " + a.toString());
    }
    return {
      message: c,
      name: a.name || "UnknownError",
      lineNumber: d,
      fileName: e,
      stack: b || "Not available",
    };
  }
  a.stack = b;
  return {
    message: a.message,
    name: a.name,
    lineNumber: a.lineNumber,
    fileName: a.fileName,
    stack: a.stack,
  };
}
function Va(a, b) {
  b || (b = {});
  b[Xa(a)] = !0;
  var c = a.stack || "";
  (a = a.cause) &&
    !b[Xa(a)] &&
    ((c += "\nCaused by: "),
    (a.stack && 0 == a.stack.indexOf(a.toString())) ||
      (c += "string" === typeof a ? a : a.message + "\n"),
    (c += Va(a, b)));
  return c;
}
function Xa(a) {
  var b = "";
  "function" === typeof a.toString && (b = "" + a);
  return b + a.stack;
}
var Wa = {};
var Ya = Ma() ? !1 : y("Trident") || y("MSIE");
function Za(a, b) {
  a.l(b);
  100 > a.i && (a.i++, (b.next = a.h), (a.h = b));
}
class $a {
  constructor(a, b) {
    this.j = a;
    this.l = b;
    this.i = 0;
    this.h = null;
  }
  get() {
    let a;
    0 < this.i
      ? (this.i--, (a = this.h), (this.h = a.next), (a.next = null))
      : (a = this.j());
    return a;
  }
}
function ab(a) {
  v.setTimeout(() => {
    throw a;
  }, 0);
}
class bb {
  constructor() {
    this.i = this.h = null;
  }
  add(a, b) {
    const c = cb.get();
    c.set(a, b);
    this.i ? (this.i.next = c) : (this.h = c);
    this.i = c;
  }
  remove() {
    let a = null;
    this.h &&
      ((a = this.h),
      (this.h = this.h.next),
      this.h || (this.i = null),
      (a.next = null));
    return a;
  }
}
var cb = new $a(
  () => new db(),
  (a) => a.reset()
);
class db {
  constructor() {
    this.next = this.scope = this.h = null;
  }
  set(a, b) {
    this.h = a;
    this.scope = b;
    this.next = null;
  }
  reset() {
    this.next = this.scope = this.h = null;
  }
}
let eb,
  fb = !1,
  gb = new bb(),
  ib = (a, b) => {
    eb || hb();
    fb || (eb(), (fb = !0));
    gb.add(a, b);
  },
  hb = () => {
    const a = v.Promise.resolve(void 0);
    eb = () => {
      a.then(jb);
    };
  };
var jb = () => {
  let a;
  for (; (a = gb.remove()); ) {
    try {
      a.h.call(a.scope);
    } catch (b) {
      ab(b);
    }
    Za(cb, a);
  }
  fb = !1;
};
function A(a) {
  this.h = 0;
  this.A = void 0;
  this.l = this.i = this.j = null;
  this.m = this.s = !1;
  if (a != oa)
    try {
      var b = this;
      a.call(
        void 0,
        function (c) {
          kb(b, 2, c);
        },
        function (c) {
          kb(b, 3, c);
        }
      );
    } catch (c) {
      kb(this, 3, c);
    }
}
function lb() {
  this.next = this.context = this.i = this.j = this.h = null;
  this.l = !1;
}
lb.prototype.reset = function () {
  this.context = this.i = this.j = this.h = null;
  this.l = !1;
};
var mb = new $a(
  function () {
    return new lb();
  },
  function (a) {
    a.reset();
  }
);
function nb(a, b, c) {
  var d = mb.get();
  d.j = a;
  d.i = b;
  d.context = c;
  return d;
}
function ob(a) {
  if (a instanceof A) return a;
  var b = new A(oa);
  kb(b, 2, a);
  return b;
}
A.prototype.then = function (a, b, c) {
  return pb(
    this,
    "function" === typeof a ? a : null,
    "function" === typeof b ? b : null,
    c
  );
};
A.prototype.$goog_Thenable = !0;
q = A.prototype;
q.Za = function (a, b) {
  return pb(this, null, a, b);
};
q.catch = A.prototype.Za;
q.cancel = function (a) {
  if (0 == this.h) {
    var b = new qb(a);
    ib(function () {
      rb(this, b);
    }, this);
  }
};
function rb(a, b) {
  if (0 == a.h)
    if (a.j) {
      var c = a.j;
      if (c.i) {
        for (
          var d = 0, e = null, f = null, g = c.i;
          g && (g.l || (d++, g.h == a && (e = g), !(e && 1 < d)));
          g = g.next
        )
          e || (f = g);
        e &&
          (0 == c.h && 1 == d
            ? rb(c, b)
            : (f
                ? ((d = f), d.next == c.l && (c.l = d), (d.next = d.next.next))
                : sb(c),
              tb(c, e, 3, b)));
      }
      a.j = null;
    } else kb(a, 3, b);
}
function ub(a, b) {
  a.i || (2 != a.h && 3 != a.h) || vb(a);
  a.l ? (a.l.next = b) : (a.i = b);
  a.l = b;
}
function pb(a, b, c, d) {
  var e = nb(null, null, null);
  e.h = new A(function (f, g) {
    e.j = b
      ? function (h) {
          try {
            var k = b.call(d, h);
            f(k);
          } catch (l) {
            g(l);
          }
        }
      : f;
    e.i = c
      ? function (h) {
          try {
            var k = c.call(d, h);
            void 0 === k && h instanceof qb ? g(h) : f(k);
          } catch (l) {
            g(l);
          }
        }
      : g;
  });
  e.h.j = a;
  ub(a, e);
  return e.h;
}
q.ab = function (a) {
  this.h = 0;
  kb(this, 2, a);
};
q.bb = function (a) {
  this.h = 0;
  kb(this, 3, a);
};
function kb(a, b, c) {
  if (0 == a.h) {
    a === c &&
      ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
    a.h = 1;
    a: {
      var d = c,
        e = a.ab,
        f = a.bb;
      if (d instanceof A) {
        ub(d, nb(e || oa, f || null, a));
        var g = !0;
      } else {
        if (d)
          try {
            var h = !!d.$goog_Thenable;
          } catch (l) {
            h = !1;
          }
        else h = !1;
        if (h) d.then(e, f, a), (g = !0);
        else {
          h = typeof d;
          if (("object" == h && null != d) || "function" == h)
            try {
              var k = d.then;
              if ("function" === typeof k) {
                wb(d, k, e, f, a);
                g = !0;
                break a;
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a;
            }
          g = !1;
        }
      }
    }
    g ||
      ((a.A = c),
      (a.h = b),
      (a.j = null),
      vb(a),
      3 != b || c instanceof qb || xb(a, c));
  }
}
function wb(a, b, c, d, e) {
  function f(k) {
    h || ((h = !0), d.call(e, k));
  }
  function g(k) {
    h || ((h = !0), c.call(e, k));
  }
  var h = !1;
  try {
    b.call(a, g, f);
  } catch (k) {
    f(k);
  }
}
function vb(a) {
  a.s || ((a.s = !0), ib(a.Ia, a));
}
function sb(a) {
  var b = null;
  a.i && ((b = a.i), (a.i = b.next), (b.next = null));
  a.i || (a.l = null);
  return b;
}
q.Ia = function () {
  for (var a; (a = sb(this)); ) tb(this, a, this.h, this.A);
  this.s = !1;
};
function tb(a, b, c, d) {
  if (3 == c && b.i && !b.l) for (; a && a.m; a = a.j) a.m = !1;
  if (b.h) (b.h.j = null), yb(b, c, d);
  else
    try {
      b.l ? b.j.call(b.context) : yb(b, c, d);
    } catch (e) {
      zb.call(null, e);
    }
  Za(mb, b);
}
function yb(a, b, c) {
  2 == b ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c);
}
function xb(a, b) {
  a.m = !0;
  ib(function () {
    a.m && zb.call(null, b);
  });
}
var zb = ab;
function qb(a) {
  na.call(this, a);
}
la(qb, na);
qb.prototype.name = "cancel";
function Ab() {
  throw Error("Invalid UTF8");
}
function Bb(a, b) {
  b = String.fromCharCode.apply(null, b);
  return null == a ? b : a + b;
}
let Cb = void 0,
  Db;
const Eb = "undefined" !== typeof TextDecoder;
!y("Android") || Na();
Na();
var Fb =
  y("Safari") &&
  !(
    Na() ||
    (Ma() ? 0 : y("Coast")) ||
    (Ma() ? 0 : y("Opera")) ||
    (Ma() ? 0 : y("Edge")) ||
    (Ma() ? La("Microsoft Edge") : y("Edg/")) ||
    (Ma() ? La("Opera") : y("OPR")) ||
    y("Firefox") ||
    y("FxiOS") ||
    y("Silk") ||
    y("Android")
  ) &&
  !((y("iPhone") && !y("iPod") && !y("iPad")) || y("iPad") || y("iPod"));
var Gb = {},
  Hb = null;
function Ib(a, b) {
  void 0 === b && (b = 0);
  Jb();
  b = Gb[b];
  const c = Array(Math.floor(a.length / 3)),
    d = b[64] || "";
  let e = 0,
    f = 0;
  for (; e < a.length - 2; e += 3) {
    var g = a[e],
      h = a[e + 1],
      k = a[e + 2],
      l = b[g >> 2];
    g = b[((g & 3) << 4) | (h >> 4)];
    h = b[((h & 15) << 2) | (k >> 6)];
    k = b[k & 63];
    c[f++] = "" + l + g + h + k;
  }
  l = 0;
  k = d;
  switch (a.length - e) {
    case 2:
      (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
    case 1:
      (a = a[e]),
        (c[f] = "" + b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
  }
  return c.join("");
}
function Kb(a) {
  var b = a.length,
    c = (3 * b) / 4;
  c % 3
    ? (c = Math.floor(c))
    : -1 != "=.".indexOf(a[b - 1]) &&
      (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
  var d = new Uint8Array(c),
    e = 0;
  Lb(a, function (f) {
    d[e++] = f;
  });
  return e !== c ? d.subarray(0, e) : d;
}
function Lb(a, b) {
  function c(k) {
    for (; d < a.length; ) {
      var l = a.charAt(d++),
        n = Hb[l];
      if (null != n) return n;
      if (!/^[\s\xa0]*$/.test(l))
        throw Error("Unknown base64 encoding at char: " + l);
    }
    return k;
  }
  Jb();
  for (var d = 0; ; ) {
    var e = c(-1),
      f = c(0),
      g = c(64),
      h = c(64);
    if (64 === h && -1 === e) break;
    b((e << 2) | (f >> 4));
    64 != g &&
      (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
  }
}
function Jb() {
  if (!Hb) {
    Hb = {};
    for (
      var a =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
            ""
          ),
        b = ["+/=", "+/", "-_=", "-_.", "-_"],
        c = 0;
      5 > c;
      c++
    ) {
      var d = a.concat(b[c].split(""));
      Gb[c] = d;
      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        void 0 === Hb[f] && (Hb[f] = e);
      }
    }
  }
}
var Mb = "undefined" !== typeof Uint8Array,
  Nb = !Ya && "function" === typeof btoa;
function Ob(a) {
  if (!Nb) return Ib(a);
  let b = "",
    c = 0;
  const d = a.length - 10240;
  for (; c < d; )
    b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
  b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
  return btoa(b);
}
const Pb = /[-_.]/g,
  Qb = { "-": "+", _: "/", ".": "=" };
function Rb(a) {
  return Qb[a] || "";
}
function Sb(a) {
  if (!Nb) return Kb(a);
  Pb.test(a) && (a = a.replace(Pb, Rb));
  a = atob(a);
  const b = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
  return b;
}
function Tb(a) {
  return Mb && null != a && a instanceof Uint8Array;
}
let Ub;
var Vb = {};
let Wb;
function Xb(a) {
  if (a !== Vb) throw Error("illegal external caller");
}
function Yb() {
  return Wb || (Wb = new Zb(null, Vb));
}
function $b(a) {
  Xb(Vb);
  var b = a.S;
  b = null == b || Tb(b) ? b : "string" === typeof b ? Sb(b) : null;
  return null == b ? b : (a.S = b);
}
var Zb = class {
  constructor(a, b) {
    Xb(b);
    this.S = a;
    if (null != a && 0 === a.length)
      throw Error("ByteString should be constructed with non-empty values");
  }
  ra() {
    return null == this.S;
  }
  sizeBytes() {
    const a = $b(this);
    return a ? a.length : 0;
  }
};
function ac(a, b) {
  return Error(`Invalid wire type: ${a} (at position ${b})`);
}
function bc() {
  return Error("Failed to read varint, encoding is invalid.");
}
function cc(a, b) {
  return Error(`Tried to read past the end of the data ${b} > ${a}`);
}
function dc(a) {
  if ("string" === typeof a) return { buffer: Sb(a), K: !1 };
  if (Array.isArray(a)) return { buffer: new Uint8Array(a), K: !1 };
  if (a.constructor === Uint8Array) return { buffer: a, K: !1 };
  if (a.constructor === ArrayBuffer)
    return { buffer: new Uint8Array(a), K: !1 };
  if (a.constructor === Zb)
    return { buffer: $b(a) || Ub || (Ub = new Uint8Array(0)), K: !0 };
  if (a instanceof Uint8Array)
    return {
      buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
      K: !1,
    };
  throw Error(
    "Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers"
  );
}
const ec = "function" === typeof Uint8Array.prototype.slice;
function fc(a, b) {
  a.h = b;
  if (b > a.i) throw cc(a.i, b);
}
function gc(a) {
  const b = a.j;
  let c = a.h,
    d = b[c++],
    e = d & 127;
  if (
    d & 128 &&
    ((d = b[c++]),
    (e |= (d & 127) << 7),
    d & 128 &&
      ((d = b[c++]),
      (e |= (d & 127) << 14),
      d & 128 &&
        ((d = b[c++]),
        (e |= (d & 127) << 21),
        d & 128 &&
          ((d = b[c++]),
          (e |= d << 28),
          d & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128 &&
            b[c++] & 128))))
  )
    throw bc();
  fc(a, c);
  return e;
}
function hc(a, b) {
  if (0 > b) throw Error(`Tried to read a negative byte length: ${b}`);
  const c = a.h,
    d = c + b;
  if (d > a.i) throw cc(b, a.i - c);
  a.h = d;
  return c;
}
var ic = class {
    constructor(a, b) {
      this.j = null;
      this.m = !1;
      this.h = this.i = this.l = 0;
      this.init(a, void 0, void 0, b);
    }
    init(a, b, c, { Y: d = !1 } = {}) {
      this.Y = d;
      a &&
        ((a = dc(a)),
        (this.j = a.buffer),
        (this.m = a.K),
        (this.l = b || 0),
        (this.i = void 0 !== c ? this.l + c : this.j.length),
        (this.h = this.l));
    }
    clear() {
      this.j = null;
      this.m = !1;
      this.h = this.i = this.l = 0;
      this.Y = !1;
    }
    reset() {
      this.h = this.l;
    }
    advance(a) {
      fc(this, this.h + a);
    }
  },
  jc = [];
function kc(a, { oa: b = !1 } = {}) {
  a.oa = b;
}
function lc(a) {
  var b = a.h;
  if (b.h == b.i) return !1;
  a.j = a.h.h;
  var c = gc(a.h) >>> 0;
  b = c >>> 3;
  c &= 7;
  if (!(0 <= c && 5 >= c)) throw ac(c, a.j);
  if (1 > b) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
  a.l = b;
  a.i = c;
  return !0;
}
function mc(a) {
  switch (a.i) {
    case 0:
      if (0 != a.i) mc(a);
      else
        a: {
          a = a.h;
          var b = a.h;
          const c = b + 10,
            d = a.j;
          for (; b < c; )
            if (0 === (d[b++] & 128)) {
              fc(a, b);
              break a;
            }
          throw bc();
        }
      break;
    case 1:
      a.h.advance(8);
      break;
    case 2:
      2 != a.i ? mc(a) : ((b = gc(a.h) >>> 0), a.h.advance(b));
      break;
    case 5:
      a.h.advance(4);
      break;
    case 3:
      b = a.l;
      do {
        if (!lc(a)) throw Error("Unmatched start-group tag: stream EOF");
        if (4 == a.i) {
          if (a.l != b) throw Error("Unmatched end-group tag");
          break;
        }
        mc(a);
      } while (1);
      break;
    default:
      throw ac(a.i, a.j);
  }
}
var nc = class {
    constructor(a, b) {
      if (jc.length) {
        const c = jc.pop();
        c.init(a, void 0, void 0, b);
        a = c;
      } else a = new ic(a, b);
      this.h = a;
      this.j = this.h.h;
      this.i = this.l = -1;
      kc(this, b);
    }
    reset() {
      this.h.reset();
      this.j = this.h.h;
      this.i = this.l = -1;
    }
    advance(a) {
      this.h.advance(a);
    }
  },
  oc = [];
class pc {
  constructor(a, b) {
    this.h = a;
    this.i = b;
  }
}
function qc(a) {
  return Array.prototype.slice.call(a);
}
const B =
  "function" === typeof Symbol && "symbol" === typeof Symbol()
    ? Symbol()
    : void 0;
[
  ...Object.values({
    Jb: 1,
    Hb: 2,
    Gb: 4,
    Ob: 8,
    Nb: 16,
    Mb: 32,
    gb: 64,
    Sb: 128,
    lb: 256,
    kb: 512,
    Ib: 1024,
  }),
];
var rc = B
  ? (a, b) => {
      a[B] |= b;
    }
  : (a, b) => {
      void 0 !== a.C
        ? (a.C |= b)
        : Object.defineProperties(a, {
            C: { value: b, configurable: !0, writable: !0, enumerable: !1 },
          });
    };
function sc(a) {
  const b = C(a);
  1 !== (b & 1) && (Object.isFrozen(a) && (a = qc(a)), E(a, b | 1));
}
var tc = B
    ? (a, b) => {
        a[B] &= ~b;
      }
    : (a, b) => {
        void 0 !== a.C && (a.C &= ~b);
      },
  C = B ? (a) => a[B] | 0 : (a) => a.C | 0,
  F = B ? (a) => a[B] : (a) => a.C,
  E = B
    ? (a, b) => {
        a[B] = b;
      }
    : (a, b) => {
        void 0 !== a.C
          ? (a.C = b)
          : Object.defineProperties(a, {
              C: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            });
      };
function uc() {
  var a = [];
  rc(a, 1);
  return a;
}
function vc(a, b) {
  E(b, (a | 0) & -255);
}
function wc(a, b) {
  E(b, (a | 34) & -221);
}
function xc(a) {
  a = (a >> 11) & 1023;
  return 0 === a ? 536870912 : a;
}
var yc = {};
function zc(a) {
  return (
    null !== a &&
    "object" === typeof a &&
    !Array.isArray(a) &&
    a.constructor === Object
  );
}
let Ac;
function Bc(a, b, c) {
  if (!Array.isArray(a) || a.length) return !1;
  const d = C(a);
  if (d & 1) return !0;
  if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
  E(a, d | 1);
  return !0;
}
var Cc;
const Dc = [];
E(Dc, 55);
Cc = Object.freeze(Dc);
function Ec(a) {
  if (a & 2) throw Error();
}
let Fc;
function Gc(a, b) {
  (b = Fc ? b[Fc] : void 0) && (a[Fc] = qc(b));
}
let Hc;
function Ic() {
  const a = Error();
  Ta(a, "incident");
  ab(a);
}
function Jc() {
  const a = Error();
  Ta(a, "warning");
  return a;
}
function Kc(a) {
  return a.displayName || a.name || "unknown type name";
}
const Lc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
function Mc(a) {
  return (
    ("number" === typeof a && Number.isFinite(a)) ||
    (!!a && "string" === typeof a && isFinite(a))
  );
}
function Nc(a) {
  if (null == a) return a;
  if ("string" === typeof a) {
    if (!a) return;
    a = +a;
  }
  if ("number" === typeof a) return a;
}
function Oc(a) {
  if (!Mc(a)) throw Jc();
  const b = typeof a;
  ("number" === b ? Number.isFinite(a) : "string" !== b ? 0 : Lc.test(a)) ||
    Ic();
  "string" === typeof a ? Mc(a) : Mc(a);
  return a;
}
function Pc(a) {
  if (null != a && "string" !== typeof a) throw Error();
  return a;
}
function Qc(a, b) {
  if (!(a instanceof b))
    throw Error(
      `Expected instanceof ${Kc(b)} but got ${a && Kc(a.constructor)}`
    );
  return a;
}
function Rc(a, b, c) {
  var d = !1;
  if (
    null != a &&
    "object" === typeof a &&
    !(d = Array.isArray(a)) &&
    a.da === yc
  )
    return a;
  if (d) {
    var e = (d = C(a));
    0 === e && (e |= c & 32);
    e |= c & 2;
    e !== d && E(a, e);
    return new b(a);
  }
}
let Sc, Tc, Uc;
function Vc(a) {
  switch (typeof a) {
    case "boolean":
      return Tc || (Tc = [0, void 0, !0]);
    case "number":
      return 0 < a ? void 0 : 0 === a ? Uc || (Uc = [0, void 0]) : [-a, void 0];
    case "string":
      return [0, a];
    case "object":
      return a;
  }
}
function Wc(a, b, c) {
  null == a && (a = Sc);
  Sc = void 0;
  if (null == a) {
    var d = 96;
    c ? ((a = [c]), (d |= 512)) : (a = []);
    b && (d = (d & -2095105) | ((b & 1023) << 11));
  } else {
    if (!Array.isArray(a)) throw Error();
    d = C(a);
    if (d & 64) return Hc && delete a[Hc], a;
    d |= 64;
    if (c && ((d |= 512), c !== a[0])) throw Error();
    a: {
      c = a;
      var e = c.length;
      if (e) {
        const g = e - 1;
        var f = c[g];
        if (zc(f)) {
          d |= 256;
          b = +!!(d & 512) - 1;
          e = g - b;
          1024 <= e && (Xc(c, b, f), (e = 1023));
          d = (d & -2095105) | ((e & 1023) << 11);
          break a;
        }
      }
      b &&
        ((f = +!!(d & 512) - 1),
        (b = Math.max(b, e - f)),
        1024 < b && (Xc(c, f, {}), (d |= 256), (b = 1023)),
        (d = (d & -2095105) | ((b & 1023) << 11)));
    }
  }
  E(a, d);
  return a;
}
function Xc(a, b, c) {
  const d = 1023 + b,
    e = a.length;
  for (let f = d; f < e; f++) {
    const g = a[f];
    null != g && g !== c && (c[f - b] = g);
  }
  a.length = d + 1;
  a[d] = c;
}
function Yc(a, b) {
  return Zc(b);
}
function Zc(a) {
  switch (typeof a) {
    case "number":
      return isFinite(a) ? a : String(a);
    case "boolean":
      return a ? 1 : 0;
    case "object":
      if (a && !Array.isArray(a)) {
        if (Tb(a)) return Ob(a);
        if (a instanceof Zb) {
          const b = a.S;
          return null == b ? "" : "string" === typeof b ? b : (a.S = Ob(b));
        }
      }
  }
  return a;
}
function $c(a, b, c) {
  const d = qc(a);
  var e = d.length;
  const f = b & 256 ? d[e - 1] : void 0;
  e += f ? -1 : 0;
  for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
  if (f) {
    b = d[b] = {};
    for (const g in f) b[g] = c(f[g]);
  }
  Gc(d, a);
  return d;
}
function ad(a, b, c, d, e, f) {
  if (null != a) {
    if (Array.isArray(a))
      a =
        e && 0 == a.length && C(a) & 1
          ? void 0
          : f && C(a) & 2
          ? a
          : bd(a, b, c, void 0 !== d, e, f);
    else if (zc(a)) {
      const g = {};
      for (let h in a) g[h] = ad(a[h], b, c, d, e, f);
      a = g;
    } else a = b(a, d);
    return a;
  }
}
function bd(a, b, c, d, e, f) {
  const g = d || c ? C(a) : 0;
  d = d ? !!(g & 32) : void 0;
  const h = qc(a);
  for (let k = 0; k < h.length; k++) h[k] = ad(h[k], b, c, d, e, f);
  c && (Gc(h, a), c(g, h));
  return h;
}
function cd(a) {
  return a.da === yc ? a.toJSON() : Zc(a);
}
function dd(a, b, c = wc) {
  if (null != a) {
    if (Mb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
    if (Array.isArray(a)) {
      var d = C(a);
      if (d & 2) return a;
      b && (b = 0 === d || (!!(d & 32) && !(d & 64 || !(d & 16))));
      return b
        ? (E(a, (d | 34) & -5), a)
        : bd(a, dd, d & 4 ? wc : c, !0, !1, !0);
    }
    a.da === yc && ((c = a.o), (d = F(c)), (a = d & 2 ? a : ed(a, c, d, !0)));
    return a;
  }
}
function ed(a, b, c, d) {
  a = a.constructor;
  Sc = b = fd(b, c, d);
  b = new a(b);
  Sc = void 0;
  return b;
}
function fd(a, b, c) {
  const d = c || b & 2 ? wc : vc,
    e = !!(b & 32);
  a = $c(a, b, (f) => dd(f, e, d));
  rc(a, 32 | (c ? 2 : 0));
  return a;
}
function gd(a) {
  const b = a.o,
    c = F(b);
  return c & 2 ? ed(a, b, c, !1) : a;
}
function hd(a, b) {
  a = a.o;
  return id(a, F(a), b);
}
function id(a, b, c, d) {
  if (-1 === c) return null;
  if (c >= xc(b)) {
    if (b & 256) return a[a.length - 1][c];
  } else {
    var e = a.length;
    if (d && b & 256 && ((d = a[e - 1][c]), null != d)) return d;
    b = c + (+!!(b & 512) - 1);
    if (b < e) return a[b];
  }
}
function jd(a, b, c) {
  const d = a.o,
    e = F(d);
  Ec(e);
  G(d, e, b, c);
  return a;
}
function G(a, b, c, d, e) {
  var f = xc(b);
  if (c >= f || e) {
    e = b;
    if (b & 256) f = a[a.length - 1];
    else {
      if (null == d) return;
      f = a[f + (+!!(b & 512) - 1)] = {};
      e |= 256;
    }
    f[c] = d;
    e !== b && E(a, e);
  } else
    (a[c + (+!!(b & 512) - 1)] = d),
      b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
}
function kd(a, b, c, d) {
  var e = b & 2;
  let f = id(a, b, c);
  Array.isArray(f) || (f = Cc);
  const g = !(d & 2),
    h = !(d & 1);
  d = !!(b & 32);
  let k = C(f);
  0 !== k || !d || e || g ? k & 1 || ((k |= 1), E(f, k)) : ((k |= 33), E(f, k));
  e
    ? (k & 2 || rc(f, 34), h && Object.freeze(f))
    : ((e = k & 2),
      h && e
        ? ((f = qc(f)), (e = 1), d && !g && (e |= 32), E(f, e), G(a, b, c, f))
        : g && k & 32 && !e && tc(f, 32));
  return f;
}
function ld(a, b, c, d) {
  const e = a.o,
    f = F(e);
  Ec(f);
  (c = md(e, f, c)) && c !== b && null != d && G(e, f, c);
  G(e, f, b, d);
  return a;
}
function nd(a, b, c) {
  a = a.o;
  return md(a, F(a), b) === c ? c : -1;
}
function md(a, b, c) {
  let d = 0;
  for (let e = 0; e < c.length; e++) {
    const f = c[e];
    null != id(a, b, f) && (0 !== d && G(a, b, d), (d = f));
  }
  return d;
}
function od(a, b, c) {
  var d = a.o,
    e = F(d),
    f = id(d, e, c, !1);
  b = Rc(f, b, e);
  b !== f && null != b && G(d, e, c, b, !1);
  d = b;
  if (null == d) return d;
  a = a.o;
  e = F(a);
  e & 2 || ((f = gd(d)), f !== d && ((d = f), G(a, e, c, d, !1)));
  return d;
}
function pd(a, b, c, d, e) {
  var f = !!(b & 2),
    g = kd(a, b, d, 1),
    h = g === Cc;
  if (h && 2 !== e) return g;
  if (h || !(C(g) & 4)) {
    var k = g;
    g = !!(b & 2);
    h = !!(C(k) & 2);
    f = k;
    !g && h && (k = qc(k));
    h = h || void 0;
    var l = b | (h ? 2 : 0),
      n = h;
    h = !1;
    let m = 0,
      r = 0;
    for (; m < k.length; m++) {
      const p = Rc(k[m], c, l);
      if (!(p instanceof c)) continue;
      const t = !!(C(p.o) & 2);
      n = n || t;
      h = h || !t;
      k[r++] = p;
    }
    r < m && (k.length = r);
    c = k;
    k = C(c);
    l = k | 5;
    n = n ? l & -9 : l | 8;
    n = h ? n & -17 : n | 16;
    k != n && (Object.isFrozen(c) && (c = qc(c)), E(c, n));
    k = c;
    f !== k && G(a, b, d, k);
    ((g && 2 !== e) || 1 === e) && Object.freeze(k);
    return k;
  }
  if (3 === e) return g;
  f
    ? 2 === e && ((e = C(g)), (g = qc(g)), E(g, e), G(a, b, d, g))
    : ((f = Object.isFrozen(g)),
      1 === e
        ? f || Object.freeze(g)
        : ((e = C(g)),
          (c = e & -33),
          f || e & 2
            ? ((g = qc(g)), E(g, c & -3), G(a, b, d, g))
            : e !== c && E(g, c)));
  return g;
}
function qd(a) {
  a = a.o;
  var b = F(a),
    c = !!(b & 2);
  a = pd(a, b, rd, 1, c ? 1 : 2);
  if (!(c || C(a) & 8)) {
    for (c = 0; c < a.length; c++) {
      b = a[c];
      const d = gd(b);
      b !== d && (a[c] = d);
    }
    rc(a, 8);
  }
  return a;
}
function H(a, b, c, d) {
  null != d ? Qc(d, b) : (d = void 0);
  return jd(a, c, d);
}
function sd(a, b, c, d, e) {
  null != e ? Qc(e, b) : (e = void 0);
  ld(a, c, d, e);
}
function td(a, b, c, d) {
  a = a.o;
  const e = F(a);
  Ec(e);
  b = pd(a, e, c, b, 2);
  c = null != d ? Qc(d, c) : new c();
  b.push(c);
  C(c.o) & 2 ? tc(b, 8) : tc(b, 16);
}
function ud(a, b) {
  a = hd(a, b);
  return null == a || "string" === typeof a ? a : void 0;
}
function vd(a, b) {
  a = ud(a, b);
  return null != a ? a : "";
}
function wd(a, b, c) {
  if (null != c) {
    if ("number" !== typeof c) throw Jc();
    Number.isFinite(c) || Ic();
  }
  return jd(a, b, c);
}
function xd(a, b, c) {
  jd(a, b, null == c ? c : Oc(c));
}
function I(a, b, c) {
  return jd(a, b, Pc(c));
}
function K(a, b, c) {
  null != c && (Number.isFinite(c) || Ic());
  return jd(a, b, c);
}
var L = class {
  constructor(a, b, c) {
    this.o = Wc(a, b, c);
  }
  toJSON() {
    if (Ac) var a = yd(this, this.o, !1);
    else (a = bd(this.o, cd, void 0, void 0, !1, !1)), (a = yd(this, a, !0));
    return a;
  }
  clone() {
    const a = this.o;
    return ed(this, a, F(a), !1);
  }
  K() {
    return !!(C(this.o) & 2);
  }
};
L.prototype.da = yc;
function yd(a, b, c) {
  const d = a.constructor.v;
  var e = F(c ? a.o : b),
    f = xc(e),
    g = !1;
  if (d) {
    if (!c) {
      b = qc(b);
      var h;
      if (b.length && zc((h = b[b.length - 1])))
        for (g = 0; g < d.length; g++)
          if (d[g] >= f) {
            Object.assign((b[b.length - 1] = {}), h);
            break;
          }
      g = !0;
    }
    f = b;
    c = !c;
    h = F(a.o);
    a = xc(h);
    h = +!!(h & 512) - 1;
    var k;
    for (let N = 0; N < d.length; N++) {
      var l = d[N];
      if (l < a) {
        l += h;
        var n = f[l];
        null == n ? (f[l] = c ? Cc : uc()) : c && n !== Cc && sc(n);
      } else {
        if (!k) {
          var m = void 0;
          f.length && zc((m = f[f.length - 1])) ? (k = m) : f.push((k = {}));
        }
        n = k[l];
        null == k[l] ? (k[l] = c ? Cc : uc()) : c && n !== Cc && sc(n);
      }
    }
  }
  k = b.length;
  if (!k) return b;
  let r, p;
  if (zc((m = b[k - 1]))) {
    a: {
      var t = m;
      f = {};
      c = !1;
      for (var z in t)
        (a = t[z]),
          Array.isArray(a) &&
            ((h = a), Bc(a, d, +z) && (a = null), a != h && (c = !0)),
          null != a ? (f[z] = a) : (c = !0);
      if (c) {
        for (let N in f) {
          t = f;
          break a;
        }
        t = null;
      }
    }
    t != m && (r = !0);
    k--;
  }
  for (e = +!!(e & 512) - 1; 0 < k; k--) {
    z = k - 1;
    m = b[z];
    if (null != m && !Bc(m, d, z - e)) break;
    p = !0;
  }
  if (!r && !p) return b;
  var D;
  g ? (D = b) : (D = Array.prototype.slice.call(b, 0, k));
  b = D;
  g && (b.length = k);
  t && b.push(t);
  return b;
}
const zd = Symbol();
function Ad(a) {
  let b = a[zd];
  if (!b) {
    const c = Bd(a),
      d = Cd(a),
      e = d.h;
    b = e
      ? (f, g) => e(f, g, d)
      : (f, g) => {
          for (; lc(g) && 4 != g.i; ) {
            var h = g.l,
              k = d[h];
            if (!k) {
              var l = d.extensions;
              l && (l = l[h]) && (k = d[h] = Dd(l));
            }
            if (!k || !k(g, f, h)) {
              k = g;
              h = k.j;
              mc(k);
              if (k.oa) k = void 0;
              else {
                l = k.h.h - h;
                k.h.h = h;
                b: {
                  k = k.h;
                  h = l;
                  if (0 == h) {
                    k = Yb();
                    break b;
                  }
                  const n = hc(k, h);
                  k.Y && k.m
                    ? (h = k.j.subarray(n, n + h))
                    : ((k = k.j),
                      (l = n),
                      (h = n + h),
                      (h =
                        l === h
                          ? Ub || (Ub = new Uint8Array(0))
                          : ec
                          ? k.slice(l, h)
                          : new Uint8Array(k.subarray(l, h))));
                  k = 0 == h.length ? Yb() : new Zb(h, Vb);
                }
              }
              h = f;
              k &&
                (Fc || (Fc = Symbol()),
                (l = h[Fc]) ? l.push(k) : (h[Fc] = [k]));
            }
          }
          for (const n in c) {
            f[Hc || (Hc = Symbol())] = c;
            break;
          }
        };
    a[zd] = b;
  }
  return b;
}
function Ed(a) {
  if ((a = a.Ea)) return Ad(a);
}
function Dd(a) {
  const b = Ed(a),
    c = a.jc.h;
  if (b) {
    const d = Cd(a.Ea).ca;
    return (e, f, g) => c(e, f, g, d, b);
  }
  return (d, e, f) => c(d, e, f);
}
const Fd = Symbol();
function Gd(a, b, c, d) {
  let e;
  if (d) {
    const f = d[Fd];
    e = f ? f.ca : Vc(d[0]);
    c[a] = null != f ? f : d;
  }
  e && e === Tc
    ? ((b = c.Pa), b || (c.Pa = b = []), b.push(a))
    : b.i && ((b = c.Ua), b || (c.Ua = b = []), b.push(a));
}
function Hd(a, b, c, d) {
  Gd(a, b, d);
}
function Id(a, b, c, d, e) {
  Gd(a, b, e, c);
}
function Bd(a) {
  let b = a[Fd];
  if (b) return b;
  b = a[Fd] = {};
  return (b = Jd(a, b, Hd, Id, b));
}
function Jd(a, b, c, d, e) {
  b.ca = Vc(a[0]);
  let f = 1;
  if (a.length > f && !(a[f] instanceof pc)) {
    var g = a[f++];
    if (Array.isArray(g)) return (b.h = g[0]), (b.extensions = g[1]), b;
    b.extensions = g;
  }
  for (g = 0; f < a.length; ) {
    var h = a[f++],
      k = a[f];
    "number" === typeof k ? (f++, (g += k)) : g++;
    for (k = f; k < a.length && !(a[k] instanceof pc); ) k++;
    if ((k -= f)) {
      var l = a,
        n = f,
        m = l[n];
      "function" == typeof m && ((m = m()), (l[n] = m));
      if (
        (l = Array.isArray(m)) &&
        !(l = Kd in m || Ld in m) &&
        (l = 0 < m.length)
      ) {
        l = m;
        n = l[0];
        const r = Vc(n);
        null != r && r !== n && (l[0] = r);
        l = null != r;
      }
      (m = l ? m : void 0)
        ? (f++,
          1 === k
            ? ((h = d(g, h, m, void 0, e)), void 0 !== h && (b[g] = h))
            : ((h = d(g, h, m, a[f++], e)), void 0 !== h && (b[g] = h)))
        : ((h = c(g, h, a[f++], e)), void 0 !== h && (b[g] = h));
    } else (h = c(g, h, void 0, e)), void 0 !== h && (b[g] = h);
  }
  return b;
}
const Ld = Symbol(),
  Kd = Symbol();
function Md(a, b, c) {
  const d = b.h;
  return c ? (e, f, g) => d(e, f, g, c) : d;
}
function Nd(a, b, c, d) {
  const e = b.h;
  let f, g;
  return (h, k, l) => e(h, k, l, g || (g = Cd(c).ca), f || (f = Ad(c)), d);
}
function Cd(a) {
  let b = a[Kd];
  if (b) return b;
  Bd(a);
  b = Jd(a, (a[Kd] = {}), Md, Nd);
  Kd in a && Ld in a && (a.length = 0);
  return b;
}
var Od;
Od = new pc(function (a, b, c) {
  if (2 !== a.i) return !1;
  var d = gc(a.h) >>> 0;
  a = a.h;
  var e = hc(a, d);
  a = a.j;
  if (Eb) {
    var f = a,
      g;
    (g = Db) || (g = Db = new TextDecoder("utf-8", { fatal: !0 }));
    a = e + d;
    f = 0 === e && a === f.length ? f : f.subarray(e, a);
    try {
      var h = g.decode(f);
    } catch (l) {
      if (void 0 === Cb) {
        try {
          g.decode(new Uint8Array([128]));
        } catch (n) {}
        try {
          g.decode(new Uint8Array([97])), (Cb = !0);
        } catch (n) {
          Cb = !1;
        }
      }
      !Cb && (Db = void 0);
      throw l;
    }
  } else {
    h = e;
    d = h + d;
    e = [];
    let l = null;
    let n;
    for (; h < d; ) {
      var k = a[h++];
      128 > k
        ? e.push(k)
        : 224 > k
        ? h >= d
          ? Ab()
          : ((n = a[h++]),
            194 > k || 128 !== (n & 192)
              ? (h--, Ab())
              : e.push(((k & 31) << 6) | (n & 63)))
        : 240 > k
        ? h >= d - 1
          ? Ab()
          : ((n = a[h++]),
            128 !== (n & 192) ||
            (224 === k && 160 > n) ||
            (237 === k && 160 <= n) ||
            128 !== ((f = a[h++]) & 192)
              ? (h--, Ab())
              : e.push(((k & 15) << 12) | ((n & 63) << 6) | (f & 63)))
        : 244 >= k
        ? h >= d - 2
          ? Ab()
          : ((n = a[h++]),
            128 !== (n & 192) ||
            0 !== ((k << 28) + (n - 144)) >> 30 ||
            128 !== ((f = a[h++]) & 192) ||
            128 !== ((g = a[h++]) & 192)
              ? (h--, Ab())
              : ((k =
                  ((k & 7) << 18) |
                  ((n & 63) << 12) |
                  ((f & 63) << 6) |
                  (g & 63)),
                (k -= 65536),
                e.push(((k >> 10) & 1023) + 55296, (k & 1023) + 56320)))
        : Ab();
      8192 <= e.length && ((l = Bb(l, e)), (e.length = 0));
    }
    h = Bb(l, e);
  }
  G(b, F(b), c, h);
  return !0;
}, !1);
var Pd;
Pd = new pc(function (a, b, c, d, e) {
  if (2 !== a.i) return !1;
  d = Wc(void 0, d[0], d[1]);
  var f = F(b);
  Ec(f);
  var g = kd(b, f, c, 3);
  C(g) & 4 && ((g = qc(g)), E(g, (C(g) | 1) & -31), G(b, f, c, g));
  g.push(d);
  b = a.h.i;
  c = gc(a.h) >>> 0;
  f = a.h.h + c;
  g = f - b;
  0 >= g && ((a.h.i = f), e(d, a, void 0, void 0, void 0), (g = f - a.h.h));
  if (g)
    throw Error(
      "Message parsing ended unexpectedly. Expected to read " +
        `${c} bytes, instead read ${c - g} bytes, either the ` +
        "data ended unexpectedly or the message misreported its own length"
    );
  a.h.h = f;
  a.h.i = b;
  return !0;
}, !0);
Aa("csi.gstatic.com");
Aa("googleads.g.doubleclick.net");
Aa("partner.googleadservices.com");
Aa("pubads.g.doubleclick.net");
Aa("securepubads.g.doubleclick.net");
Aa("tpc.googlesyndication.com");
function Qd(a, b = `unexpected value ${a}!`) {
  throw Error(b);
}
function Rd(a) {
  if (!a) return "";
  if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
  a.startsWith("blob:") && (a = a.substring(5));
  a = a.split("#")[0].split("?")[0];
  a = a.toLowerCase();
  0 == a.indexOf("//") && (a = window.location.protocol + a);
  /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
  var b = a.substring(a.indexOf("://") + 3),
    c = b.indexOf("/");
  -1 != c && (b = b.substring(0, c));
  c = a.substring(0, a.indexOf("://"));
  if (!c) throw Error("URI is missing protocol: " + a);
  if (
    "http" !== c &&
    "https" !== c &&
    "chrome-extension" !== c &&
    "moz-extension" !== c &&
    "file" !== c &&
    "android-app" !== c &&
    "chrome-search" !== c &&
    "chrome-untrusted" !== c &&
    "chrome" !== c &&
    "app" !== c &&
    "devtools" !== c
  )
    throw Error("Invalid URI scheme in origin: " + c);
  a = "";
  var d = b.indexOf(":");
  if (-1 != d) {
    var e = b.substring(d + 1);
    b = b.substring(0, d);
    if (("http" === c && "80" !== e) || ("https" === c && "443" !== e))
      a = ":" + e;
  }
  return c + "://" + b + a;
}
function Sd() {
  function a() {
    e[0] = 1732584193;
    e[1] = 4023233417;
    e[2] = 2562383102;
    e[3] = 271733878;
    e[4] = 3285377520;
    n = l = 0;
  }
  function b(m) {
    for (var r = g, p = 0; 64 > p; p += 4)
      r[p / 4] = (m[p] << 24) | (m[p + 1] << 16) | (m[p + 2] << 8) | m[p + 3];
    for (p = 16; 80 > p; p++)
      (m = r[p - 3] ^ r[p - 8] ^ r[p - 14] ^ r[p - 16]),
        (r[p] = ((m << 1) | (m >>> 31)) & 4294967295);
    m = e[0];
    var t = e[1],
      z = e[2],
      D = e[3],
      N = e[4];
    for (p = 0; 80 > p; p++) {
      if (40 > p)
        if (20 > p) {
          var J = D ^ (t & (z ^ D));
          var qa = 1518500249;
        } else (J = t ^ z ^ D), (qa = 1859775393);
      else
        60 > p
          ? ((J = (t & z) | (D & (t | z))), (qa = 2400959708))
          : ((J = t ^ z ^ D), (qa = 3395469782));
      J =
        ((((m << 5) | (m >>> 27)) & 4294967295) + J + N + qa + r[p]) &
        4294967295;
      N = D;
      D = z;
      z = ((t << 30) | (t >>> 2)) & 4294967295;
      t = m;
      m = J;
    }
    e[0] = (e[0] + m) & 4294967295;
    e[1] = (e[1] + t) & 4294967295;
    e[2] = (e[2] + z) & 4294967295;
    e[3] = (e[3] + D) & 4294967295;
    e[4] = (e[4] + N) & 4294967295;
  }
  function c(m, r) {
    if ("string" === typeof m) {
      m = unescape(encodeURIComponent(m));
      for (var p = [], t = 0, z = m.length; t < z; ++t) p.push(m.charCodeAt(t));
      m = p;
    }
    r || (r = m.length);
    p = 0;
    if (0 == l)
      for (; p + 64 < r; ) b(m.slice(p, p + 64)), (p += 64), (n += 64);
    for (; p < r; )
      if (((f[l++] = m[p++]), n++, 64 == l))
        for (l = 0, b(f); p + 64 < r; )
          b(m.slice(p, p + 64)), (p += 64), (n += 64);
  }
  function d() {
    var m = [],
      r = 8 * n;
    56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
    for (var p = 63; 56 <= p; p--) (f[p] = r & 255), (r >>>= 8);
    b(f);
    for (p = r = 0; 5 > p; p++)
      for (var t = 24; 0 <= t; t -= 8) m[r++] = (e[p] >> t) & 255;
    return m;
  }
  for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
  var l, n;
  a();
  return {
    reset: a,
    update: c,
    digest: d,
    Ha: function () {
      for (var m = d(), r = "", p = 0; p < m.length; p++)
        r +=
          "0123456789ABCDEF".charAt(Math.floor(m[p] / 16)) +
          "0123456789ABCDEF".charAt(m[p] % 16);
      return r;
    },
  };
}
function Td(a, b, c) {
  var d = String(v.location.href);
  return d && a && b ? [b, Ud(Rd(d), a, c || null)].join(" ") : null;
}
function Ud(a, b, c) {
  var d = [],
    e = [];
  if (1 == (Array.isArray(c) ? 2 : 1))
    return (
      (e = [b, a]),
      pa(d, function (h) {
        e.push(h);
      }),
      Vd(e.join(" "))
    );
  var f = [],
    g = [];
  pa(c, function (h) {
    g.push(h.key);
    f.push(h.value);
  });
  c = Math.floor(new Date().getTime() / 1e3);
  e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
  pa(d, function (h) {
    e.push(h);
  });
  a = Vd(e.join(" "));
  a = [c, a];
  0 == g.length || a.push(g.join(""));
  return a.join("_");
}
function Vd(a) {
  var b = Sd();
  b.update(a);
  return b.Ha().toLowerCase();
}
const Wd = {};
function Xd() {
  this.h = document || { cookie: "" };
}
q = Xd.prototype;
q.isEnabled = function () {
  if (!v.navigator.cookieEnabled) return !1;
  if (!this.ra()) return !0;
  this.set("TESTCOOKIESENABLED", "1", { sa: 60 });
  if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
  this.remove("TESTCOOKIESENABLED");
  return !0;
};
q.set = function (a, b, c) {
  let d,
    e,
    f,
    g = !1,
    h;
  "object" === typeof c &&
    ((h = c.nc),
    (g = c.oc || !1),
    (f = c.domain || void 0),
    (e = c.path || void 0),
    (d = c.sa));
  if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
  if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
  void 0 === d && (d = -1);
  this.h.cookie =
    a +
    "=" +
    b +
    (f ? ";domain=" + f : "") +
    (e ? ";path=" + e : "") +
    (0 > d
      ? ""
      : 0 == d
      ? ";expires=" + new Date(1970, 1, 1).toUTCString()
      : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
    (g ? ";secure" : "") +
    (null != h ? ";samesite=" + h : "");
};
q.get = function (a, b) {
  const c = a + "=",
    d = (this.h.cookie || "").split(";");
  for (let e = 0, f; e < d.length; e++) {
    f = Ea(d[e]);
    if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
    if (f == a) return "";
  }
  return b;
};
q.remove = function (a, b, c) {
  const d = void 0 !== this.get(a);
  this.set(a, "", { sa: 0, path: b, domain: c });
  return d;
};
q.ra = function () {
  return !this.h.cookie;
};
q.clear = function () {
  var a = (this.h.cookie || "").split(";");
  const b = [],
    c = [];
  let d, e;
  for (let f = 0; f < a.length; f++)
    (e = Ea(a[f])),
      (d = e.indexOf("=")),
      -1 == d
        ? (b.push(""), c.push(e))
        : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
};
function Yd() {
  return !!Wd.FPA_SAMESITE_PHASE2_MOD || !1;
}
function Zd(a, b, c, d) {
  (a = v[a]) || "undefined" === typeof document || (a = new Xd().get(b));
  return a ? Td(a, c, d) : null;
}
"undefined" !== typeof TextDecoder && new TextDecoder();
"undefined" !== typeof TextEncoder && new TextEncoder();
const $d = self;
class ae {
  constructor() {
    this.promise = new Promise((a) => {
      this.resolve = a;
    });
  }
}
function M(a) {
  Sa.call(this);
  this.A = 1;
  this.m = [];
  this.s = 0;
  this.h = [];
  this.i = {};
  this.G = !!a;
}
la(M, Sa);
q = M.prototype;
q.Aa = function (a, b, c) {
  var d = this.i[a];
  d || (d = this.i[a] = []);
  var e = this.A;
  this.h[e] = a;
  this.h[e + 1] = b;
  this.h[e + 2] = c;
  this.A = e + 3;
  d.push(e);
  return e;
};
q.ga = function (a) {
  var b = this.h[a];
  if (b) {
    var c = this.i[b];
    0 != this.s
      ? (this.m.push(a), (this.h[a + 1] = () => {}))
      : (c && sa(c, a),
        delete this.h[a],
        delete this.h[a + 1],
        delete this.h[a + 2]);
  }
  return !!b;
};
q.ea = function (a, b) {
  var c = this.i[a];
  if (c) {
    for (
      var d = Array(arguments.length - 1), e = 1, f = arguments.length;
      e < f;
      e++
    )
      d[e - 1] = arguments[e];
    if (this.G)
      for (e = 0; e < c.length; e++) {
        var g = c[e];
        be(this.h[g + 1], this.h[g + 2], d);
      }
    else {
      this.s++;
      try {
        for (e = 0, f = c.length; e < f && !this.j; e++)
          (g = c[e]), this.h[g + 1].apply(this.h[g + 2], d);
      } finally {
        if ((this.s--, 0 < this.m.length && 0 == this.s))
          for (; (c = this.m.pop()); ) this.ga(c);
      }
    }
    return 0 != e;
  }
  return !1;
};
function be(a, b, c) {
  ib(function () {
    a.apply(b, c);
  });
}
q.clear = function (a) {
  if (a) {
    var b = this.i[a];
    b && (b.forEach(this.ga, this), delete this.i[a]);
  } else (this.h.length = 0), (this.i = {});
};
q.O = function () {
  M.Wa.O.call(this);
  this.clear();
  this.m.length = 0;
}; /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let O = {};
var ce =
  "undefined" !== typeof Uint8Array &&
  "undefined" !== typeof Uint16Array &&
  "undefined" !== typeof Int32Array;
O.assign = function (a) {
  for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
    var c = b.shift();
    if (c) {
      if ("object" !== typeof c) throw new TypeError(c + "must be non-object");
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
  }
  return a;
};
O.sc = function (a, b) {
  if (a.length === b) return a;
  if (a.subarray) return a.subarray(0, b);
  a.length = b;
  return a;
};
var de = {
    Da: function (a, b, c, d, e) {
      if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
      else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
    },
    Ja: function (a) {
      var b, c;
      var d = (c = 0);
      for (b = a.length; d < b; d++) c += a[d].length;
      var e = new Uint8Array(c);
      d = c = 0;
      for (b = a.length; d < b; d++) {
        var f = a[d];
        e.set(f, c);
        c += f.length;
      }
      return e;
    },
  },
  ee = {
    Da: function (a, b, c, d, e) {
      for (var f = 0; f < d; f++) a[e + f] = b[c + f];
    },
    Ja: function (a) {
      return [].concat.apply([], a);
    },
  };
O.Va = function () {
  ce
    ? ((O.ya = Uint8Array),
      (O.wa = Uint16Array),
      (O.xa = Int32Array),
      O.assign(O, de))
    : ((O.ya = Array), (O.wa = Array), (O.xa = Array), O.assign(O, ee));
};
O.Va();
try {
  new Uint8Array(1);
} catch (a) {}
function fe(a) {
  for (var b = a.length; 0 <= --b; ) a[b] = 0;
}
fe(Array(576));
fe(Array(60));
fe(Array(512));
fe(Array(256));
fe(Array(29));
fe(Array(30)); /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var ge = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
var he = class {
  constructor(a) {
    this.name = a;
  }
};
var ie = new he("rawColdConfigGroup");
var je = new he("rawHotConfigGroup");
function ke(a, b) {
  return wd(a, 1, b);
}
var le = class extends L {
  constructor(a) {
    super(a);
  }
};
var me = class extends L {
  constructor(a) {
    super(a);
  }
};
me.v = [1];
var ne = class extends L {
  constructor(a) {
    super(a);
  }
};
var oe = class extends L {
  constructor(a) {
    super(a);
  }
};
var pe = class extends L {
  constructor(a) {
    super(a);
  }
};
pe.v = [2];
var qe = class extends L {
  constructor(a) {
    super(a);
  }
  getPlayerType() {
    var a = hd(this, 36);
    return null != a ? a : 0;
  }
  setHomeGroupInfo(a) {
    return H(this, pe, 81, a);
  }
  clearLocationPlayabilityToken() {
    return jd(this, 89);
  }
};
qe.v = [9, 66, 32, 86, 100, 101];
var se = class extends L {
    constructor(a) {
      super(a);
    }
    getKey() {
      return vd(this, 1);
    }
    J() {
      return vd(this, nd(this, re, 2));
    }
  },
  re = [2, 3, 4, 5, 6];
var te = class extends L {
  constructor(a) {
    super(a);
  }
};
te.v = [15, 26, 28];
var ue = class extends L {
  constructor(a) {
    super(a);
  }
};
ue.v = [5];
var ve = class extends L {
  constructor(a) {
    super(a);
  }
};
var we = class extends L {
  constructor(a) {
    super(a);
  }
  setSafetyMode(a) {
    return K(this, 5, a);
  }
};
we.v = [12];
var xe = class extends L {
  constructor(a) {
    super(a);
  }
  j(a) {
    return H(this, qe, 1, a);
  }
};
xe.v = [12];
var ye = class extends L {
  constructor(a) {
    super(a);
  }
  getKey() {
    return vd(this, 1);
  }
  J() {
    return vd(this, 2);
  }
};
var ze = class extends L {
  constructor(a) {
    super(a);
  }
};
ze.v = [4, 5];
var Ae = class extends L {
  constructor(a) {
    super(a);
  }
};
var Be = class extends L {
    constructor(a) {
      super(a);
    }
  },
  Ce = [2, 3, 4, 5];
var De = class extends L {
  constructor(a) {
    super(a);
  }
  getMessage() {
    return vd(this, 1);
  }
};
var Ee = class extends L {
  constructor(a) {
    super(a);
  }
};
var Fe = class extends L {
  constructor(a) {
    super(a);
  }
};
var Ge = class extends L {
  constructor(a) {
    super(a);
  }
};
Ge.v = [10, 17];
var He = class extends L {
  constructor(a) {
    super(a);
  }
};
var Ie = class extends L {
  constructor(a) {
    super(a);
  }
};
var Je = class extends L {
  constructor(a) {
    super(a);
  }
};
var Ke = class extends L {
  constructor(a) {
    super(a);
  }
};
var Le = class extends L {
  constructor(a) {
    super(a);
  }
  getVideoData() {
    return od(this, Ke, 15);
  }
};
Le.v = [4];
function Me(a, b) {
  H(a, Ie, 1, b);
}
var Ne = class extends L {
  constructor(a) {
    super(a);
  }
};
function Oe(a, b) {
  return H(a, Ie, 1, b);
}
var Pe = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 2, a);
  }
};
function Qe(a, b) {
  return H(a, Ie, 2, b);
}
var Re = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
};
Re.v = [3];
var Se = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
};
var Te = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
};
var Ue = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
};
var Ve = class extends L {
  constructor(a) {
    super(a);
  }
  h(a) {
    return I(this, 1, a);
  }
};
var We = class extends L {
  constructor(a) {
    super(a);
  }
};
var Xe = class extends L {
  constructor(a) {
    super(a);
  }
};
var P = class extends L {
    constructor(a) {
      super(a, 487);
    }
  },
  Ye = [
    2, 3, 5, 6, 7, 11, 13, 20, 21, 22, 23, 24, 28, 32, 37, 45, 59, 72, 73, 74,
    76, 78, 79, 80, 85, 91, 97, 100, 102, 105, 111, 117, 119, 126, 127, 136,
    146, 148, 151, 156, 157, 158, 159, 163, 164, 168, 176, 177, 178, 179, 184,
    188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
    204, 205, 206, 208, 209, 215, 219, 222, 225, 226, 227, 229, 232, 233, 234,
    240, 241, 244, 247, 248, 249, 251, 254, 255, 256, 257, 258, 259, 260, 261,
    266, 270, 272, 278, 288, 291, 293, 300, 304, 308, 309, 310, 311, 313, 314,
    319, 320, 321, 323, 324, 327, 328, 330, 331, 332, 334, 337, 338, 340, 344,
    348, 350, 351, 352, 353, 354, 355, 356, 357, 358, 361, 363, 364, 368, 369,
    370, 373, 374, 375, 378, 380, 381, 383, 388, 389, 399, 402, 403, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 423, 424, 425, 426, 427, 429, 430, 431,
    439, 441, 444, 448, 458, 469, 471, 473, 474, 480, 481, 482, 484, 485, 486,
  ];
var Ze = {
  Fb: 0,
  mb: 1,
  sb: 2,
  tb: 4,
  zb: 8,
  ub: 16,
  vb: 32,
  Eb: 64,
  Db: 128,
  ob: 256,
  qb: 512,
  xb: 1024,
  pb: 2048,
  rb: 4096,
  nb: 8192,
  wb: 16384,
  Ab: 32768,
  yb: 65536,
  Bb: 131072,
  Cb: 262144,
};
var $e = class extends L {
  constructor(a) {
    super(a);
  }
};
var bf = class extends L {
    constructor(a) {
      super(a);
    }
    setVideoId(a) {
      return ld(this, 1, af, Pc(a));
    }
    getPlaylistId() {
      return ud(this, nd(this, af, 2));
    }
  },
  af = [1, 2];
var cf = class extends L {
  constructor() {
    super();
  }
};
cf.v = [3];
var df = new he("recordNotificationInteractionsEndpoint");
var ef = ["notification/convert_endpoint_to_url"],
  ff = ["notification/record_interactions"],
  gf = ["notification_registration/set_registration"];
var hf = (a) =>
  self
    .btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a))))
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
var jf = ["notifications_register", "notifications_check_registration"];
var kf = class extends Error {
  constructor(a, ...b) {
    super(a);
    this.args = [...b];
  }
};
let lf = null;
function Q(a, b) {
  const c = {};
  c.key = a;
  c.value = b;
  return mf().then(
    (d) =>
      new Promise((e, f) => {
        try {
          const g = d
            .transaction("swpushnotificationsstore", "readwrite")
            .objectStore("swpushnotificationsstore")
            .put(c);
          g.onsuccess = () => {
            e();
          };
          g.onerror = () => {
            f();
          };
        } catch (g) {
          f(g);
        }
      })
  );
}
function nf() {
  return Q("IndexedDBCheck", "testing IndexedDB")
    .then(() => of("IndexedDBCheck"))
    .then((a) =>
      "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()
    )
    .then(() => !0)
    .catch(() => !1);
}
function of(a) {
  const b = new kf("Error accessing DB");
  return mf().then(
    (c) =>
      new Promise((d, e) => {
        try {
          const f = c
            .transaction("swpushnotificationsstore")
            .objectStore("swpushnotificationsstore")
            .get(a);
          f.onsuccess = () => {
            const g = f.result;
            d(g ? g.value : null);
          };
          f.onerror = () => {
            b.params = { key: a, source: "onerror" };
            e(b);
          };
        } catch (f) {
          (b.params = { key: a, thrownError: String(f) }), e(b);
        }
      }),
    () => null
  );
}
function mf() {
  return lf
    ? Promise.resolve(lf)
    : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
          const d = c.result;
          if (d.objectStoreNames.contains("swpushnotificationsstore"))
            (lf = d), a(lf);
          else
            return self.indexedDB.deleteDatabase("swpushnotificationsdb"), mf();
        };
        c.onupgradeneeded = pf;
      });
}
function pf(a) {
  a = a.target.result;
  a.objectStoreNames.contains("swpushnotificationsstore") &&
    a.deleteObjectStore("swpushnotificationsstore");
  a.createObjectStore("swpushnotificationsstore", { keyPath: "key" });
}
const qf = {
  WEB_UNPLUGGED: "^unplugged/",
  WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
  WEB_UNPLUGGED_OPS: "^unplugged/",
  WEB_UNPLUGGED_PUBLIC: "^unplugged/",
  WEB_CREATOR: "^creator/",
  WEB_KIDS: "^kids/",
  WEB_EXPERIMENTS: "^experiments/",
  WEB_MUSIC: "^music/",
  WEB_REMIX: "^music/",
  WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
  WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/",
};
function rf(a) {
  if (1 === a.length) return a[0];
  var b = qf.UNKNOWN_INTERFACE;
  if (b) {
    b = new RegExp(b);
    for (var c of a) if (b.exec(c)) return c;
  }
  const d = [];
  Object.entries(qf).forEach(([e, f]) => {
    "UNKNOWN_INTERFACE" !== e && d.push(f);
  });
  c = new RegExp(d.join("|"));
  a.sort((e, f) => e.length - f.length);
  for (const e of a) if (!c.exec(e)) return e;
  return a[0];
}
function sf(a) {
  return `/youtubei/v1/${rf(a)}`;
}
var tf = class extends L {
  constructor(a) {
    super(a);
  }
};
var uf = class extends L {
  constructor(a) {
    super(a, 0, "yt.sw.adr");
  }
};
const vf = v.window;
let wf, xf;
const yf =
  (null == vf ? void 0 : null == (wf = vf.yt) ? void 0 : wf.config_) ||
  (null == vf ? void 0 : null == (xf = vf.ytcfg) ? void 0 : xf.data_) ||
  {};
x("yt.config_", yf);
function R(...a) {
  a = arguments;
  1 < a.length ? (yf[a[0]] = a[1]) : 1 === a.length && Object.assign(yf, a[0]);
}
function S(a, b) {
  return a in yf ? yf[a] : b;
}
function zf() {
  return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
}
function Af() {
  const a = yf.EXPERIMENT_FLAGS;
  return a ? a.web_disable_gel_stp_ecatcher_killswitch : void 0;
}
const Bf = [];
function Cf(a) {
  Bf.forEach((b) => b(a));
}
function Df(a) {
  return a && window.yterr
    ? function () {
        try {
          return a.apply(this, arguments);
        } catch (b) {
          Ef(b);
        }
      }
    : a;
}
function Ef(a) {
  var b = w("yt.logging.errors.log");
  b
    ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0)
    : ((b = S("ERRORS", [])),
      b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]),
      R("ERRORS", b));
  Cf(a);
}
function Ff(a) {
  var b = w("yt.logging.errors.log");
  b
    ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0)
    : ((b = S("ERRORS", [])),
      b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]),
      R("ERRORS", b));
}
const Gf = /^[\w.]*$/,
  Hf = { q: !0, search_query: !0 };
function If(a, b) {
  b = a.split(b);
  const c = {};
  for (let f = 0, g = b.length; f < g; f++) {
    const h = b[f].split("=");
    if ((1 == h.length && h[0]) || 2 == h.length)
      try {
        const k = Jf(h[0] || ""),
          l = Jf(h[1] || "");
        k in c
          ? Array.isArray(c[k])
            ? ta(c[k], l)
            : (c[k] = [c[k], l])
          : (c[k] = l);
      } catch (k) {
        var d = k,
          e = h[0];
        const l = String(If);
        d.args = [
          { key: e, value: h[1], query: a, method: Kf == l ? "unchanged" : l },
        ];
        Hf.hasOwnProperty(e) || Ff(d);
      }
  }
  return c;
}
const Kf = String(If);
function Lf(a) {
  "?" == a.charAt(0) && (a = a.substr(1));
  return If(a, "&");
}
function Mf(a, b, c) {
  var d = a.split("#", 2);
  a = d[0];
  d = 1 < d.length ? "#" + d[1] : "";
  var e = a.split("?", 2);
  a = e[0];
  e = Lf(e[1] || "");
  for (var f in b) (!c && null !== e && f in e) || (e[f] = b[f]);
  b = a;
  a = Ra(e);
  a
    ? ((c = b.indexOf("#")),
      0 > c && (c = b.length),
      (f = b.indexOf("?")),
      0 > f || f > c ? ((f = c), (e = "")) : (e = b.substring(f + 1, c)),
      (b = [b.slice(0, f), e, b.slice(c)]),
      (c = b[1]),
      (b[1] = a ? (c ? c + "&" + a : a) : c),
      (a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]))
    : (a = b);
  return a + d;
}
function Nf(a) {
  if (!b) var b = window.location.href;
  const c = a.match(Oa)[1] || null,
    d = Pa(a.match(Oa)[3] || null);
  c && d
    ? ((a = a.match(Oa)),
      (b = b.match(Oa)),
      (a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]))
    : (a = d
        ? Pa(b.match(Oa)[3] || null) == d &&
          (Number(b.match(Oa)[4] || null) || null) ==
            (Number(a.match(Oa)[4] || null) || null)
        : !0);
  return a;
}
function Jf(a) {
  return a && a.match(Gf) ? a : decodeURIComponent(a.replace(/\+/g, " "));
}
function T(a) {
  a = Of(a);
  return "string" === typeof a && "false" === a ? !1 : !!a;
}
function Pf(a, b) {
  a = Of(a);
  return void 0 === a && void 0 !== b ? b : Number(a || 0);
}
function Qf() {
  return S("EXPERIMENTS_TOKEN", "");
}
function Of(a) {
  return S("EXPERIMENT_FLAGS", {})[a];
}
function Rf() {
  const a = [],
    b = S("EXPERIMENTS_FORCED_FLAGS", {});
  for (var c of Object.keys(b)) a.push({ key: c, value: String(b[c]) });
  c = S("EXPERIMENT_FLAGS", {});
  for (const d of Object.keys(c))
    d.startsWith("force_") &&
      void 0 === b[d] &&
      a.push({ key: d, value: String(c[d]) });
  return a;
}
function Sf(a, b) {
  "function" === typeof a && (a = Df(a));
  return window.setTimeout(a, b);
}
var Tf =
    "client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(
      " "
    ),
  Uf = [...Tf, "client_dev_set_cookie"];
[...Tf];
let Vf = !1;
function Wf(a, b) {
  const c = { method: b.method || "GET", credentials: "same-origin" };
  b.headers && (c.headers = b.headers);
  a = Xf(a, b);
  const d = Yf(a, b);
  d && (c.body = d);
  b.withCredentials && (c.credentials = "include");
  const e = b.context || v;
  let f = !1,
    g;
  fetch(a, c)
    .then((h) => {
      if (!f) {
        f = !0;
        g && window.clearTimeout(g);
        var k = h.ok,
          l = (n) => {
            n = n || {};
            k
              ? b.onSuccess && b.onSuccess.call(e, n, h)
              : b.onError && b.onError.call(e, n, h);
            b.onFinish && b.onFinish.call(e, n, h);
          };
        "JSON" == (b.format || "JSON") &&
        (k || (400 <= h.status && 500 > h.status))
          ? h.json().then(l, function () {
              l(null);
            })
          : l(null);
      }
    })
    .catch(() => {
      b.onError && b.onError.call(e, {}, {});
    });
  a = b.timeout || 0;
  b.onFetchTimeout &&
    0 < a &&
    (g = Sf(() => {
      f ||
        ((f = !0),
        window.clearTimeout(g),
        b.onFetchTimeout.call(b.context || v));
    }, a));
}
function Xf(a, b) {
  b.includeDomain &&
    (a =
      document.location.protocol +
      "//" +
      document.location.hostname +
      (document.location.port ? ":" + document.location.port : "") +
      a);
  const c = S("XSRF_FIELD_NAME");
  if ((b = b.urlParams)) b[c] && delete b[c], (a = Mf(a, b || {}, !0));
  return a;
}
function Yf(a, b) {
  const c = S("XSRF_FIELD_NAME"),
    d = S("XSRF_TOKEN");
  var e = b.postBody || "",
    f = b.postParams;
  const g = S("XSRF_FIELD_NAME");
  let h;
  b.headers && (h = b.headers["Content-Type"]);
  b.excludeXsrf ||
    (Pa(a.match(Oa)[3] || null) &&
      !b.withCredentials &&
      Pa(a.match(Oa)[3] || null) != document.location.hostname) ||
    "POST" != b.method ||
    (h && "application/x-www-form-urlencoded" != h) ||
    (b.postParams && b.postParams[g]) ||
    (f || (f = {}), (f[c] = d));
  ((T("ajax_parse_query_data_only_when_filled") &&
    f &&
    0 < Object.keys(f).length) ||
    f) &&
    "string" === typeof e &&
    ((e = Lf(e)),
    xa(e, f),
    (e =
      b.postBodyFormat && "JSON" == b.postBodyFormat
        ? JSON.stringify(e)
        : Ra(e)));
  f = e || (f && !ua(f));
  !Vf &&
    f &&
    "POST" != b.method &&
    ((Vf = !0), Ef(Error("AJAX request with postData should use POST")));
  return e;
}
const Zf = [
  {
    ba: (a) => `Cannot read property '${a.key}'`,
    V: {
      Error: [
        {
          u: /(Permission denied) to access property "([^']+)"/,
          groups: ["reason", "key"],
        },
      ],
      TypeError: [
        {
          u: /Cannot read property '([^']+)' of (null|undefined)/,
          groups: ["key", "value"],
        },
        {
          u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
          groups: ["value", "key"],
        },
        {
          u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
          groups: ["value", "key"],
        },
        {
          u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
          groups: ["key"],
        },
        {
          u: /Unable to get property '([^']+)' of (undefined or null) reference/,
          groups: ["key", "value"],
        },
        {
          u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
          groups: ["value", "base", "key"],
        },
      ],
    },
  },
  {
    ba: (a) => `Cannot call '${a.key}'`,
    V: {
      TypeError: [
        {
          u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
          groups: ["base", "key"],
        },
        {
          u: /([^ ]+) called on (null or undefined)/,
          groups: ["key", "value"],
        },
        { u: /Object (.*) has no method '([^ ]+)'/, groups: ["base", "key"] },
        {
          u: /Object doesn't support property or method '([^ ]+)'/,
          groups: ["key"],
        },
        {
          u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
          groups: ["key"],
        },
        {
          u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
          groups: ["key"],
        },
      ],
    },
  },
  {
    ba: (a) => `${a.key} is not defined`,
    V: {
      ReferenceError: [
        { u: /(.*) is not defined/, groups: ["key"] },
        { u: /Can't find variable: (.*)/, groups: ["key"] },
      ],
    },
  },
];
var ag = { F: [], D: [{ callback: $f, weight: 500 }] };
function $f(a) {
  if ("JavaException" === a.name) return !0;
  a = a.stack;
  return (
    a.includes("chrome://") ||
    a.includes("chrome-extension://") ||
    a.includes("moz-extension://")
  );
}
function bg() {
  if (!cg) {
    var a = (cg = new dg());
    a.F.length = 0;
    a.D.length = 0;
    eg(a, ag);
  }
  return cg;
}
function eg(a, b) {
  b.F && a.F.push.apply(a.F, b.F);
  b.D && a.D.push.apply(a.D, b.D);
}
var dg = class {
    constructor() {
      this.D = [];
      this.F = [];
    }
  },
  cg;
const fg = new M();
function gg(a) {
  const b = a.length;
  let c = 0;
  const d = () => a.charCodeAt(c++);
  do {
    var e = hg(d);
    if (Infinity === e) break;
    const f = e >> 3;
    switch (e & 7) {
      case 0:
        e = hg(d);
        if (2 === f) return e;
        break;
      case 1:
        if (2 === f) return;
        c += 8;
        break;
      case 2:
        e = hg(d);
        if (2 === f) return a.substr(c, e);
        c += e;
        break;
      case 5:
        if (2 === f) return;
        c += 4;
        break;
      default:
        return;
    }
  } while (c < b);
}
function hg(a) {
  let b = a(),
    c = b & 127;
  if (128 > b) return c;
  b = a();
  c |= (b & 127) << 7;
  if (128 > b) return c;
  b = a();
  c |= (b & 127) << 14;
  if (128 > b) return c;
  b = a();
  return 128 > b ? c | ((b & 127) << 21) : Infinity;
}
function ig(a, b, c, d) {
  if (a)
    if (Array.isArray(a)) {
      var e = d;
      for (
        d = 0;
        d < a.length && !(a[d] && ((e += jg(d, a[d], b, c)), 500 < e));
        d++
      );
      d = e;
    } else if ("object" === typeof a)
      for (e in a) {
        if (a[e]) {
          var f = a[e];
          var g = b;
          var h = c;
          g =
            "string" !== typeof f ||
            ("clickTrackingParams" !== e && "trackingParams" !== e)
              ? 0
              : (f = gg(atob(f.replace(/-/g, "+").replace(/_/g, "/"))))
              ? jg(`${e}.ve`, f, g, h)
              : 0;
          d += g;
          d += jg(e, a[e], b, c);
          if (500 < d) break;
        }
      }
    else (c[b] = kg(a)), (d += c[b].length);
  else (c[b] = kg(a)), (d += c[b].length);
  return d;
}
function jg(a, b, c, d) {
  c += `.${a}`;
  a = kg(b);
  d[c] = a;
  return c.length + a.length;
}
function kg(a) {
  try {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(
      0,
      500
    );
  } catch (b) {
    return `unable to serialize ${typeof a} (${b.message})`;
  }
}
function lg() {
  mg.h || (mg.h = new mg());
  return mg.h;
}
function ng(a, b) {
  a = {};
  var c = [],
    d = Rd(String(v.location.href));
  var e = [];
  var f = v.__SAPISID || v.__APISID || v.__3PSAPISID || v.__OVERRIDE_SID;
  Yd() && (f = f || v.__1PSAPISID);
  if (f) f = !0;
  else {
    if ("undefined" !== typeof document) {
      const g = new Xd();
      f =
        g.get("SAPISID") ||
        g.get("APISID") ||
        g.get("__Secure-3PAPISID") ||
        g.get("SID") ||
        g.get("OSID");
      Yd() && (f = f || g.get("__Secure-1PAPISID"));
    }
    f = !!f;
  }
  f &&
    ((f = (d =
      0 == d.indexOf("https:") ||
      0 == d.indexOf("chrome-extension:") ||
      0 == d.indexOf("moz-extension:"))
      ? v.__SAPISID
      : v.__APISID),
    f ||
      "undefined" === typeof document ||
      ((f = new Xd()),
      (f = f.get(d ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID"))),
    (f = f ? Td(f, d ? "SAPISIDHASH" : "APISIDHASH", c) : null) && e.push(f),
    d &&
      Yd() &&
      ((d = Zd("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) &&
        e.push(d),
      (c = Zd("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) &&
        e.push(c)));
  if ((e = 0 == e.length ? null : e.join(" ")))
    (a.Authorization = e),
      (e = b = null == b ? void 0 : b.sessionIndex),
      void 0 === e &&
        ((e = Number(S("SESSION_INDEX", 0))), (e = isNaN(e) ? 0 : e)),
      T("voice_search_auth_header_removal") ||
        (a["X-Goog-AuthUser"] = e.toString()),
      "INNERTUBE_HOST_OVERRIDE" in yf ||
        (a["X-Origin"] = window.location.origin),
      void 0 === b &&
        "DELEGATED_SESSION_ID" in yf &&
        (a["X-Goog-PageId"] = S("DELEGATED_SESSION_ID"));
  return a;
}
var mg = class {
  constructor() {
    this.Xa = !0;
  }
};
var og = { identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN" };
function pg(a) {
  switch (a) {
    case "DESKTOP":
      return 1;
    case "UNKNOWN_PLATFORM":
      return 0;
    case "TV":
      return 2;
    case "GAME_CONSOLE":
      return 3;
    case "MOBILE":
      return 4;
    case "TABLET":
      return 5;
  }
}
x("ytglobal.prefsUserPrefsPrefs_", w("ytglobal.prefsUserPrefsPrefs_") || {});
function qg() {
  if (void 0 !== S("DATASYNC_ID")) return S("DATASYNC_ID");
  throw new kf("Datasync ID not set", "unknown");
}
function rg(a, b) {
  return sg(a, 0, b);
}
function tg(a) {
  const b = w("yt.scheduler.instance.addImmediateJob");
  b ? b(a) : a();
}
var ug = class {
  h(a) {
    sg(a, 1);
  }
};
function vg() {
  wg.h || (wg.h = new wg());
  return wg.h;
}
function sg(a, b, c) {
  void 0 !== c && Number.isNaN(Number(c)) && (c = void 0);
  const d = w("yt.scheduler.instance.addJob");
  return d ? d(a, b, c) : void 0 === c ? (a(), NaN) : Sf(a, c || 0);
}
var wg = class extends ug {
    T(a) {
      if (void 0 === a || !Number.isNaN(Number(a))) {
        var b = w("yt.scheduler.instance.cancelJob");
        b ? b(a) : window.clearTimeout(a);
      }
    }
    start() {
      const a = w("yt.scheduler.instance.start");
      a && a();
    }
  },
  xg = vg();
const yg = [];
let zg,
  Ag = !1;
function Bg(a) {
  Ag ||
    (zg
      ? zg.handleError(a)
      : (yg.push({ type: "ERROR", payload: a }), 10 < yg.length && yg.shift()));
}
function Cg(a, b) {
  Ag ||
    (zg
      ? zg.U(a, b)
      : (yg.push({ type: "EVENT", eventType: a, payload: b }),
        10 < yg.length && yg.shift()));
}
function Dg(a) {
  if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}
function Eg(a) {
  return a.substr(0, a.indexOf(":")) || a;
}
const Fg = {
    AUTH_INVALID: "No user identifier specified.",
    EXPLICIT_ABORT: "Transaction was explicitly aborted.",
    IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
    MISSING_INDEX: "Index not created.",
    MISSING_OBJECT_STORES: "Object stores not created.",
    DB_DELETED_BY_MISSING_OBJECT_STORES:
      "Database is deleted because expected object stores were not created.",
    DB_REOPENED_BY_MISSING_OBJECT_STORES:
      "Database is reopened because expected object stores were not created.",
    UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
    QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
    QUOTA_MAYBE_EXCEEDED:
      "The current transaction may have failed because of exceeding quota limitations.",
    EXECUTE_TRANSACTION_ON_CLOSED_DB:
      "Can't start a transaction on a closed database",
    INCOMPATIBLE_DB_VERSION:
      "The binary is incompatible with the database version",
  },
  Gg = {
    AUTH_INVALID: "ERROR",
    EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
    EXPLICIT_ABORT: "IGNORED",
    IDB_NOT_SUPPORTED: "ERROR",
    MISSING_INDEX: "WARNING",
    MISSING_OBJECT_STORES: "ERROR",
    DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
    DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
    QUOTA_EXCEEDED: "WARNING",
    QUOTA_MAYBE_EXCEEDED: "WARNING",
    UNKNOWN_ABORT: "WARNING",
    INCOMPATIBLE_DB_VERSION: "WARNING",
  },
  Hg = {
    AUTH_INVALID: !1,
    EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
    EXPLICIT_ABORT: !1,
    IDB_NOT_SUPPORTED: !1,
    MISSING_INDEX: !1,
    MISSING_OBJECT_STORES: !1,
    DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
    DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
    QUOTA_EXCEEDED: !1,
    QUOTA_MAYBE_EXCEEDED: !0,
    UNKNOWN_ABORT: !0,
    INCOMPATIBLE_DB_VERSION: !1,
  };
var U = class extends kf {
    constructor(a, b = {}, c = Fg[a], d = Gg[a], e = Hg[a]) {
      super(
        c,
        Object.assign(
          {},
          {
            name: "YtIdbKnownError",
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            type: a,
          },
          b
        )
      );
      this.type = a;
      this.message = c;
      this.level = d;
      this.h = e;
      Object.setPrototypeOf(this, U.prototype);
    }
  },
  Ig = class extends U {
    constructor(a, b) {
      super(
        "MISSING_OBJECT_STORES",
        { expectedObjectStores: b, foundObjectStores: a },
        Fg.MISSING_OBJECT_STORES
      );
      Object.setPrototypeOf(this, Ig.prototype);
    }
  },
  Jg = class extends Error {
    constructor(a, b) {
      super();
      this.index = a;
      this.objectStore = b;
      Object.setPrototypeOf(this, Jg.prototype);
    }
  };
const Kg = [
  "The database connection is closing",
  "Can't start a transaction on a closed database",
  "A mutation operation was attempted on a database that did not allow mutations",
];
function Lg(a, b, c, d) {
  b = Eg(b);
  let e;
  e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
  if (e instanceof U) return e;
  a = { objectStoreNames: c, dbName: b, dbVersion: d };
  if ("QuotaExceededError" === e.name) return new U("QUOTA_EXCEEDED", a);
  if (Fb && "UnknownError" === e.name) return new U("QUOTA_MAYBE_EXCEEDED", a);
  if (e instanceof Jg)
    return new U(
      "MISSING_INDEX",
      Object.assign({}, a, { objectStore: e.objectStore, index: e.index })
    );
  if ("InvalidStateError" === e.name && Kg.some((f) => e.message.includes(f)))
    return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB", a);
  if ("AbortError" === e.name) return new U("UNKNOWN_ABORT", a, e.message);
  e.args = [Object.assign({}, a, { name: "IdbError", ec: e.name })];
  e.level = "WARNING";
  return e;
}
function Mg(a, b, c) {
  return new U("IDB_NOT_SUPPORTED", {
    context: { caller: a, publicName: b, version: c, hasSucceededOnce: void 0 },
  });
}
function Ng(a) {
  if (!a) throw Error();
  throw a;
}
function Og(a) {
  return a;
}
var Pg = class {
  constructor(a) {
    this.h = a;
  }
};
function Qg(a, b, c, d, e) {
  try {
    if ("FULFILLED" !== a.state.status)
      throw Error("calling handleResolve before the promise is fulfilled.");
    const f = c(a.state.value);
    f instanceof Rg ? Sg(a, b, f, d, e) : d(f);
  } catch (f) {
    e(f);
  }
}
function Tg(a, b, c, d, e) {
  try {
    if ("REJECTED" !== a.state.status)
      throw Error("calling handleReject before the promise is rejected.");
    const f = c(a.state.reason);
    f instanceof Rg ? Sg(a, b, f, d, e) : d(f);
  } catch (f) {
    e(f);
  }
}
function Sg(a, b, c, d, e) {
  b === c
    ? e(new TypeError("Circular promise chain detected."))
    : c.then(
        (f) => {
          f instanceof Rg ? Sg(a, b, f, d, e) : d(f);
        },
        (f) => {
          e(f);
        }
      );
}
var Rg = class {
  constructor(a) {
    this.state = { status: "PENDING" };
    this.h = [];
    this.i = [];
    a = a.h;
    const b = (d) => {
        if ("PENDING" === this.state.status) {
          this.state = { status: "FULFILLED", value: d };
          for (const e of this.h) e();
        }
      },
      c = (d) => {
        if ("PENDING" === this.state.status) {
          this.state = { status: "REJECTED", reason: d };
          for (const e of this.i) e();
        }
      };
    try {
      a(b, c);
    } catch (d) {
      c(d);
    }
  }
  static all(a) {
    return new Rg(
      new Pg((b, c) => {
        const d = [];
        let e = a.length;
        0 === e && b(d);
        for (let f = 0; f < a.length; ++f)
          Rg.resolve(a[f])
            .then((g) => {
              d[f] = g;
              e--;
              0 === e && b(d);
            })
            .catch((g) => {
              c(g);
            });
      })
    );
  }
  static resolve(a) {
    return new Rg(
      new Pg((b, c) => {
        a instanceof Rg ? a.then(b, c) : b(a);
      })
    );
  }
  then(a, b) {
    const c = null != a ? a : Og,
      d = null != b ? b : Ng;
    return new Rg(
      new Pg((e, f) => {
        "PENDING" === this.state.status
          ? (this.h.push(() => {
              Qg(this, this, c, e, f);
            }),
            this.i.push(() => {
              Tg(this, this, d, e, f);
            }))
          : "FULFILLED" === this.state.status
          ? Qg(this, this, c, e, f)
          : "REJECTED" === this.state.status && Tg(this, this, d, e, f);
      })
    );
  }
  catch(a) {
    return this.then(void 0, a);
  }
};
function Ug(a, b, c) {
  const d = () => {
      try {
        a.removeEventListener("success", e), a.removeEventListener("error", f);
      } catch (g) {}
    },
    e = () => {
      b(a.result);
      d();
    },
    f = () => {
      c(a.error);
      d();
    };
  a.addEventListener("success", e);
  a.addEventListener("error", f);
}
function Vg(a) {
  return new Promise((b, c) => {
    Ug(a, b, c);
  });
}
function V(a) {
  return new Rg(
    new Pg((b, c) => {
      Ug(a, b, c);
    })
  );
}
function Wg(a, b) {
  return new Rg(
    new Pg((c, d) => {
      const e = () => {
        const f = a ? b(a) : null;
        f
          ? f.then((g) => {
              a = g;
              e();
            }, d)
          : c();
      };
      e();
    })
  );
}
const Xg = window;
var W =
  Xg.ytcsi && Xg.ytcsi.now
    ? Xg.ytcsi.now
    : Xg.performance &&
      Xg.performance.timing &&
      Xg.performance.now &&
      Xg.performance.timing.navigationStart
    ? () => Xg.performance.timing.navigationStart + Xg.performance.now()
    : () => new Date().getTime();
function X(a, b, c, d) {
  return u(function* () {
    const e = { mode: "readonly", B: !1, tag: "IDB_TRANSACTION_TAG_UNKNOWN" };
    "string" === typeof c ? (e.mode = c) : Object.assign(e, c);
    a.transactionCount++;
    const f = e.B ? 3 : 1;
    let g = 0,
      h;
    for (; !h; ) {
      g++;
      const l = Math.round(W());
      try {
        const n = a.h.transaction(b, e.mode);
        var k = d;
        const m = new Yg(n),
          r = yield Zg(m, k),
          p = Math.round(W());
        $g(a, l, p, g, void 0, b.join(), e);
        return r;
      } catch (n) {
        k = Math.round(W());
        const m = Lg(n, a.h.name, b.join(), a.h.version);
        if ((m instanceof U && !m.h) || g >= f)
          $g(a, l, k, g, m, b.join(), e), (h = m);
      }
    }
    return Promise.reject(h);
  });
}
function ah(a, b, c) {
  a = a.h.createObjectStore(b, c);
  return new bh(a);
}
function ch(a, b, c, d) {
  return X(a, [b], { mode: "readwrite", B: !0 }, (e) => {
    e = e.objectStore(b);
    return V(e.h.put(c, d));
  });
}
function $g(a, b, c, d, e, f, g) {
  b = c - b;
  e
    ? (e instanceof U &&
        ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) &&
        Cg("QUOTA_EXCEEDED", {
          dbName: Eg(a.h.name),
          objectStoreNames: f,
          transactionCount: a.transactionCount,
          transactionMode: g.mode,
        }),
      e instanceof U &&
        "UNKNOWN_ABORT" === e.type &&
        ((c -= a.j),
        0 > c && c >= Math.pow(2, 31) && (c = 0),
        Cg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
          objectStoreNames: f,
          transactionDuration: b,
          transactionCount: a.transactionCount,
          dbDuration: c,
        }),
        (a.i = !0)),
      dh(a, !1, d, f, b, g.tag),
      Bg(e))
    : dh(a, !0, d, f, b, g.tag);
}
function dh(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
  Cg("TRANSACTION_ENDED", {
    objectStoreNames: d,
    connectionHasUnknownAbortedTransaction: a.i,
    duration: e,
    isSuccessful: b,
    tryCount: c,
    tag: f,
  });
}
var eh = class {
  constructor(a, b) {
    this.h = a;
    this.options = b;
    this.transactionCount = 0;
    this.j = Math.round(W());
    this.i = !1;
  }
  add(a, b, c) {
    return X(this, [a], { mode: "readwrite", B: !0 }, (d) =>
      d.objectStore(a).add(b, c)
    );
  }
  clear(a) {
    return X(this, [a], { mode: "readwrite", B: !0 }, (b) =>
      b.objectStore(a).clear()
    );
  }
  close() {
    this.h.close();
    let a;
    (null == (a = this.options) ? 0 : a.closed) && this.options.closed();
  }
  count(a, b) {
    return X(this, [a], { mode: "readonly", B: !0 }, (c) =>
      c.objectStore(a).count(b)
    );
  }
  delete(a, b) {
    return X(this, [a], { mode: "readwrite", B: !0 }, (c) =>
      c.objectStore(a).delete(b)
    );
  }
  get(a, b) {
    return X(this, [a], { mode: "readonly", B: !0 }, (c) =>
      c.objectStore(a).get(b)
    );
  }
  getAll(a, b, c) {
    return X(this, [a], { mode: "readonly", B: !0 }, (d) =>
      d.objectStore(a).getAll(b, c)
    );
  }
  objectStoreNames() {
    return Array.from(this.h.objectStoreNames);
  }
  getName() {
    return this.h.name;
  }
};
function fh(a, b, c) {
  a = a.h.openCursor(b.query, b.direction);
  return gh(a).then((d) => Wg(d, c));
}
function hh(a, b) {
  return fh(a, { query: b }, (c) => c.delete().then(() => c.continue())).then(
    () => {}
  );
}
function ih(a, b, c) {
  const d = [];
  return fh(a, { query: b }, (e) => {
    if (!(void 0 !== c && d.length >= c)) return d.push(e.J()), e.continue();
  }).then(() => d);
}
var bh = class {
  constructor(a) {
    this.h = a;
  }
  add(a, b) {
    return V(this.h.add(a, b));
  }
  autoIncrement() {
    return this.h.autoIncrement;
  }
  clear() {
    return V(this.h.clear()).then(() => {});
  }
  count(a) {
    return V(this.h.count(a));
  }
  delete(a) {
    return a instanceof IDBKeyRange ? hh(this, a) : V(this.h.delete(a));
  }
  get(a) {
    return V(this.h.get(a));
  }
  getAll(a, b) {
    return "getAll" in IDBObjectStore.prototype
      ? V(this.h.getAll(a, b))
      : ih(this, a, b);
  }
  index(a) {
    try {
      return new jh(this.h.index(a));
    } catch (b) {
      if (b instanceof Error && "NotFoundError" === b.name)
        throw new Jg(a, this.h.name);
      throw b;
    }
  }
  getName() {
    return this.h.name;
  }
  keyPath() {
    return this.h.keyPath;
  }
};
function Zg(a, b) {
  const c = new Promise((d, e) => {
    try {
      b(a)
        .then((f) => {
          d(f);
        })
        .catch(e);
    } catch (f) {
      e(f), a.abort();
    }
  });
  return Promise.all([c, a.done]).then(([d]) => d);
}
var Yg = class {
  constructor(a) {
    this.h = a;
    this.j = new Map();
    this.i = !1;
    this.done = new Promise((b, c) => {
      this.h.addEventListener("complete", () => {
        b();
      });
      this.h.addEventListener("error", (d) => {
        d.currentTarget === d.target && c(this.h.error);
      });
      this.h.addEventListener("abort", () => {
        var d = this.h.error;
        if (d) c(d);
        else if (!this.i) {
          d = U;
          var e = this.h.objectStoreNames;
          const f = [];
          for (let g = 0; g < e.length; g++) {
            const h = e.item(g);
            if (null === h)
              throw Error("Invariant: item in DOMStringList is null");
            f.push(h);
          }
          d = new d("UNKNOWN_ABORT", {
            objectStoreNames: f.join(),
            dbName: this.h.db.name,
            mode: this.h.mode,
          });
          c(d);
        }
      });
    });
  }
  abort() {
    this.h.abort();
    this.i = !0;
    throw new U("EXPLICIT_ABORT");
  }
  objectStore(a) {
    a = this.h.objectStore(a);
    let b = this.j.get(a);
    b || ((b = new bh(a)), this.j.set(a, b));
    return b;
  }
};
function kh(a, b, c) {
  const { query: d = null, direction: e = "next" } = b;
  a = a.h.openCursor(d, e);
  return gh(a).then((f) => Wg(f, c));
}
function lh(a, b, c) {
  const d = [];
  return kh(a, { query: b }, (e) => {
    if (!(void 0 !== c && d.length >= c)) return d.push(e.J()), e.continue();
  }).then(() => d);
}
var jh = class {
  constructor(a) {
    this.h = a;
  }
  count(a) {
    return V(this.h.count(a));
  }
  delete(a) {
    return kh(this, { query: a }, (b) => b.delete().then(() => b.continue()));
  }
  get(a) {
    return V(this.h.get(a));
  }
  getAll(a, b) {
    return "getAll" in IDBIndex.prototype
      ? V(this.h.getAll(a, b))
      : lh(this, a, b);
  }
  getKey(a) {
    return V(this.h.getKey(a));
  }
  keyPath() {
    return this.h.keyPath;
  }
  unique() {
    return this.h.unique;
  }
};
function gh(a) {
  return V(a).then((b) => (b ? new mh(a, b) : null));
}
var mh = class {
  constructor(a, b) {
    this.request = a;
    this.cursor = b;
  }
  advance(a) {
    this.cursor.advance(a);
    return gh(this.request);
  }
  continue(a) {
    this.cursor.continue(a);
    return gh(this.request);
  }
  delete() {
    return V(this.cursor.delete()).then(() => {});
  }
  getKey() {
    return this.cursor.key;
  }
  J() {
    return this.cursor.value;
  }
  update(a) {
    return V(this.cursor.update(a));
  }
};
function nh(a, b, c) {
  return new Promise((d, e) => {
    let f;
    f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
    const g = c.Fa,
      h = c.blocking,
      k = c.Ya,
      l = c.upgrade,
      n = c.closed;
    let m;
    const r = () => {
      m || (m = new eh(f.result, { closed: n }));
      return m;
    };
    f.addEventListener("upgradeneeded", (p) => {
      try {
        if (null === p.newVersion)
          throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
        if (null === f.transaction)
          throw Error("Invariant: transaction on IDbOpenDbRequest is null");
        p.dataLoss &&
          "none" !== p.dataLoss &&
          Cg("IDB_DATA_CORRUPTED", {
            reason: p.dataLossMessage || "unknown reason",
            dbName: Eg(a),
          });
        const t = r(),
          z = new Yg(f.transaction);
        l && l(t, (D) => p.oldVersion < D && p.newVersion >= D, z);
        z.done.catch((D) => {
          e(D);
        });
      } catch (t) {
        e(t);
      }
    });
    f.addEventListener("success", () => {
      const p = f.result;
      h &&
        p.addEventListener("versionchange", () => {
          h(r());
        });
      p.addEventListener("close", () => {
        Cg("IDB_UNEXPECTEDLY_CLOSED", { dbName: Eg(a), dbVersion: p.version });
        k && k();
      });
      d(r());
    });
    f.addEventListener("error", () => {
      e(f.error);
    });
    g &&
      f.addEventListener("blocked", () => {
        g();
      });
  });
}
function oh(a, b, c = {}) {
  return nh(a, b, c);
}
function ph(a, b = {}) {
  return u(function* () {
    try {
      const c = self.indexedDB.deleteDatabase(a),
        d = b.Fa;
      d &&
        c.addEventListener("blocked", () => {
          d();
        });
      yield Vg(c);
    } catch (c) {
      throw Lg(c, a, "", -1);
    }
  });
}
function qh(a, b) {
  return new U("INCOMPATIBLE_DB_VERSION", {
    dbName: a.name,
    oldVersion: a.options.version,
    newVersion: b,
  });
}
function rh(a, b) {
  if (!b) throw Mg("openWithToken", Eg(a.name));
  return a.open();
}
var sh = class {
  constructor(a, b) {
    this.name = a;
    this.options = b;
    this.j = !0;
    this.m = this.l = 0;
  }
  i(a, b, c = {}) {
    return oh(a, b, c);
  }
  delete(a = {}) {
    return ph(this.name, a);
  }
  open() {
    if (!this.j) throw qh(this);
    if (this.h) return this.h;
    let a;
    const b = () => {
        this.h === a && (this.h = void 0);
      },
      c = {
        blocking: (e) => {
          e.close();
        },
        closed: b,
        Ya: b,
        upgrade: this.options.upgrade,
      },
      d = () => {
        const e = this;
        return u(function* () {
          var f,
            g = null != (f = Error().stack) ? f : "";
          try {
            const k = yield e.i(e.name, e.options.version, c);
            var h = e.options;
            f = [];
            for (const l of Object.keys(h.M)) {
              const { L: n, kc: m = Number.MAX_VALUE } = h.M[l];
              !(k.h.version >= n) ||
                k.h.version >= m ||
                k.h.objectStoreNames.contains(l) ||
                f.push(l);
            }
            if (0 !== f.length) {
              const l = Object.keys(e.options.M),
                n = k.objectStoreNames();
              if (e.m < Pf("ytidb_reopen_db_retries", 0))
                return (
                  e.m++,
                  k.close(),
                  Bg(
                    new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                      dbName: e.name,
                      expectedObjectStores: l,
                      foundObjectStores: n,
                    })
                  ),
                  d()
                );
              if (e.l < Pf("ytidb_remake_db_retries", 1))
                return (
                  e.l++,
                  yield e.delete(),
                  Bg(
                    new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                      dbName: e.name,
                      expectedObjectStores: l,
                      foundObjectStores: n,
                    })
                  ),
                  d()
                );
              throw new Ig(n, l);
            }
            return k;
          } catch (k) {
            if (
              k instanceof DOMException
                ? "VersionError" === k.name
                : "DOMError" in self && k instanceof DOMError
                ? "VersionError" === k.name
                : k instanceof Object &&
                  "message" in k &&
                  "An attempt was made to open a database using a lower version than the existing version." ===
                    k.message
            ) {
              g = yield e.i(
                e.name,
                void 0,
                Object.assign({}, c, { upgrade: void 0 })
              );
              h = g.h.version;
              if (void 0 !== e.options.version && h > e.options.version + 1)
                throw (g.close(), (e.j = !1), qh(e, h));
              return g;
            }
            b();
            k instanceof Error &&
              !T("ytidb_async_stack_killswitch") &&
              (k.stack = `${k.stack}\n${g.substring(g.indexOf("\n") + 1)}`);
            let l;
            throw Lg(k, e.name, "", null != (l = e.options.version) ? l : -1);
          }
        });
      };
    return (this.h = a = d());
  }
};
const th = new sh("YtIdbMeta", {
  M: { databases: { L: 1 } },
  upgrade(a, b) {
    b(1) && ah(a, "databases", { keyPath: "actualName" });
  },
});
function uh(a, b) {
  return u(function* () {
    return X(
      yield rh(th, b),
      ["databases"],
      { B: !0, mode: "readwrite" },
      (c) => {
        const d = c.objectStore("databases");
        return d.get(a.actualName).then((e) => {
          if (
            e
              ? a.actualName !== e.actualName ||
                a.publicName !== e.publicName ||
                a.userIdentifier !== e.userIdentifier
              : 1
          )
            return V(d.h.put(a, void 0)).then(() => {});
        });
      }
    );
  });
}
function vh(a, b) {
  return u(function* () {
    if (a) return (yield rh(th, b)).delete("databases", a);
  });
}
let wh;
const xh = new (class {
  constructor() {}
})(
  new (class {
    constructor() {}
  })()
);
function yh() {
  return u(function* () {
    return !0;
  });
}
function zh() {
  if (void 0 !== wh) return wh;
  Ag = !0;
  return (wh = yh().then((a) => {
    Ag = !1;
    return a;
  }));
}
function Ah() {
  return w("ytglobal.idbToken_") || void 0;
}
function Bh() {
  const a = Ah();
  return a
    ? Promise.resolve(a)
    : zh().then((b) => {
        (b = b ? xh : void 0) && x("ytglobal.idbToken_", b);
        return b;
      });
}
new ae();
function Ch(a) {
  try {
    qg();
    var b = !0;
  } catch (c) {
    b = !1;
  }
  if (!b) throw ((a = new U("AUTH_INVALID", { dbName: a })), Bg(a), a);
  b = qg();
  return { actualName: `${a}:${b}`, publicName: a, userIdentifier: b };
}
function Dh(a, b, c, d) {
  return u(function* () {
    var e,
      f = null != (e = Error().stack) ? e : "";
    e = yield Bh();
    if (!e)
      throw (
        ((e = Mg("openDbImpl", a, b)),
        T("ytidb_async_stack_killswitch") ||
          (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n") + 1)}`),
        Bg(e),
        e)
      );
    Dg(a);
    f = c ? { actualName: a, publicName: a, userIdentifier: void 0 } : Ch(a);
    try {
      return yield uh(f, e), yield oh(f.actualName, b, d);
    } catch (g) {
      try {
        yield vh(f.actualName, e);
      } catch (h) {}
      throw g;
    }
  });
}
function Eh(a, b, c = {}) {
  return Dh(a, b, !1, c);
}
function Fh(a, b, c = {}) {
  return Dh(a, b, !0, c);
}
function Gh(a, b = {}) {
  return u(function* () {
    const c = yield Bh();
    if (c) {
      Dg(a);
      var d = Ch(a);
      yield ph(d.actualName, b);
      yield vh(d.actualName, c);
    }
  });
}
function Hh(a, b = {}) {
  return u(function* () {
    const c = yield Bh();
    c && (Dg(a), yield ph(a, b), yield vh(a, c));
  });
}
function Ih(a, b) {
  let c;
  return () => {
    c || (c = new Jh(a, b));
    return c;
  };
}
var Jh = class extends sh {
  constructor(a, b) {
    super(a, b);
    this.options = b;
    Dg(a);
  }
  i(a, b, c = {}) {
    return (this.options.X ? Fh : Eh)(a, b, Object.assign({}, c));
  }
  delete(a = {}) {
    return (this.options.X ? Hh : Gh)(this.name, a);
  }
};
function Kh(a, b) {
  return Ih(a, b);
}
var Lh = Kh("ytGcfConfig", {
  M: { coldConfigStore: { L: 1 }, hotConfigStore: { L: 1 } },
  X: !1,
  upgrade(a, b) {
    b(1) &&
      (ah(a, "hotConfigStore", {
        keyPath: "key",
        autoIncrement: !0,
      }).h.createIndex("hotTimestampIndex", "timestamp", { unique: !1 }),
      ah(a, "coldConfigStore", {
        keyPath: "key",
        autoIncrement: !0,
      }).h.createIndex("coldTimestampIndex", "timestamp", { unique: !1 }));
  },
  version: 1,
});
function Mh(a) {
  return rh(Lh(), a);
}
function Nh(a, b, c) {
  return u(function* () {
    const d = { config: a, hashData: b, timestamp: W() },
      e = yield Mh(c);
    yield e.clear("hotConfigStore");
    return yield ch(e, "hotConfigStore", d);
  });
}
function Oh(a, b, c, d) {
  return u(function* () {
    const e = { config: a, hashData: b, configData: c, timestamp: W() },
      f = yield Mh(d);
    yield f.clear("coldConfigStore");
    return yield ch(f, "coldConfigStore", e);
  });
}
function Ph(a) {
  return u(function* () {
    let b = void 0;
    yield X(
      yield Mh(a),
      ["coldConfigStore"],
      { mode: "readwrite", B: !0 },
      (c) =>
        kh(
          c.objectStore("coldConfigStore").index("coldTimestampIndex"),
          { direction: "prev" },
          (d) => {
            b = d.J();
          }
        )
    );
    return b;
  });
}
function Qh(a) {
  return u(function* () {
    let b = void 0;
    yield X(
      yield Mh(a),
      ["hotConfigStore"],
      { mode: "readwrite", B: !0 },
      (c) =>
        kh(
          c.objectStore("hotConfigStore").index("hotTimestampIndex"),
          { direction: "prev" },
          (d) => {
            b = d.J();
          }
        )
    );
    return b;
  });
}
var Rh = class extends Sa {
  constructor() {
    super();
    this.i = [];
    this.h = [];
    const a = w("yt.gcf.config.hotUpdateCallbacks");
    a
      ? ((this.i = [...a]), (this.h = a))
      : ((this.h = []), x("yt.gcf.config.hotUpdateCallbacks", this.h));
  }
  O() {
    for (const b of this.i) {
      var a = this.h;
      const c = a.indexOf(b);
      0 <= c && a.splice(c, 1);
    }
    this.i.length = 0;
    super.O();
  }
};
function Sh(a, b, c) {
  return u(function* () {
    if (T("start_client_gcf")) {
      c && ((a.j = c), x("yt.gcf.config.hotConfigGroup", a.j || null));
      a.hotHashData = b;
      x("yt.gcf.config.hotHashData", a.hotHashData || null);
      var d = Ah();
      if (d) {
        if (!c) {
          var e;
          c = null == (e = yield Qh(d)) ? void 0 : e.config;
        }
        yield Nh(c, b, d);
      }
      if (c) {
        d = a.i;
        e = c;
        for (const f of d.h) f(e);
      }
    }
  });
}
function Th(a, b, c) {
  return u(function* () {
    if (T("start_client_gcf")) {
      a.coldHashData = b;
      x("yt.gcf.config.coldHashData", a.coldHashData || null);
      const d = Ah();
      if (d) {
        if (!c) {
          let e;
          c = null == (e = yield Ph(d)) ? void 0 : e.config;
        }
        c && (yield Oh(c, b, c.configData, d));
      }
    }
  });
}
var Uh = class {
  constructor() {
    this.h = 0;
    this.i = new Rh();
  }
};
function Vh() {
  return "INNERTUBE_API_KEY" in yf && "INNERTUBE_API_VERSION" in yf;
}
function Wh() {
  return {
    innertubeApiKey: S("INNERTUBE_API_KEY"),
    innertubeApiVersion: S("INNERTUBE_API_VERSION"),
    Z: S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
    Ka: S("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
    La: S("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
    innertubeContextClientVersion: S("INNERTUBE_CONTEXT_CLIENT_VERSION"),
    qa: S("INNERTUBE_CONTEXT_HL"),
    pa: S("INNERTUBE_CONTEXT_GL"),
    Ma: S("INNERTUBE_HOST_OVERRIDE") || "",
    Oa: !!S("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
    Na: !!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
    appInstallData: S("SERIALIZED_CLIENT_CONFIG_DATA"),
  };
}
function Xh(a) {
  const b = {
    client: {
      hl: a.qa,
      gl: a.pa,
      clientName: a.Ka,
      clientVersion: a.innertubeContextClientVersion,
      configInfo: a.Z,
    },
  };
  navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
  var c = v.devicePixelRatio;
  c && 1 != c && (b.client.screenDensityFloat = String(c));
  c = Qf();
  "" !== c && (b.client.experimentsToken = c);
  c = Rf();
  0 < c.length && (b.request = { internalExperimentFlags: c });
  Yh(void 0, b);
  Zh(a, void 0, b);
  T("start_client_gcf") && $h(void 0, b);
  S("DELEGATED_SESSION_ID") &&
    !T("pageid_as_header_web") &&
    (b.user = { onBehalfOfUser: S("DELEGATED_SESSION_ID") });
  !T("fill_delegate_context_in_gel_killswitch") &&
    (a = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
    (b.user = Object.assign({}, b.user, { serializedDelegationContext: a }));
  a = Object;
  c = a.assign;
  var d = b.client,
    e = S("DEVICE", "");
  const f = {};
  for (const [g, h] of Object.entries(Lf(e))) {
    e = g;
    const k = h;
    "cbrand" === e
      ? (f.deviceMake = k)
      : "cmodel" === e
      ? (f.deviceModel = k)
      : "cbr" === e
      ? (f.browserName = k)
      : "cbrver" === e
      ? (f.browserVersion = k)
      : "cos" === e
      ? (f.osName = k)
      : "cosver" === e
      ? (f.osVersion = k)
      : "cplatform" === e && (f.platform = k);
  }
  b.client = c.call(a, d, f);
  return b;
}
function Yh(a, b) {
  const c = w("yt.embedded_player.embed_url");
  c &&
    (a
      ? ((b = od(a, ue, 7) || new ue()), I(b, 4, c), H(a, ue, 7, b))
      : b && (b.thirdParty = { embedUrl: c }));
}
function Zh(a, b, c) {
  if (a.appInstallData)
    if (b) {
      let d;
      c = null != (d = od(b, oe, 62)) ? d : new oe();
      I(c, 6, a.appInstallData);
      H(b, oe, 62, c);
    } else
      c &&
        ((c.client.configInfo = c.client.configInfo || {}),
        (c.client.configInfo.appInstallData = a.appInstallData));
}
function ai(a, b, c = {}) {
  let d = {};
  S("EOM_VISITOR_DATA")
    ? (d = { "X-Goog-EOM-Visitor-Id": S("EOM_VISITOR_DATA") })
    : (d = { "X-Goog-Visitor-Id": c.visitorData || S("VISITOR_DATA", "") });
  if (b && b.includes("www.youtube-nocookie.com")) return d;
  b = c.Vb || S("AUTHORIZATION");
  b ||
    (a
      ? (b = `Bearer ${w("gapi.auth.getToken")().Ub}`)
      : ((a = ng(lg())),
        T("pageid_as_header_web") || delete a["X-Goog-PageId"],
        (d = Object.assign({}, d, a))));
  b && (d.Authorization = b);
  return d;
}
function $h(a, b) {
  if (!Uh.h) {
    var c = new Uh();
    Uh.h = c;
  }
  c = Uh.h;
  var d = W() - c.h;
  if (0 !== c.h && d < Pf("send_config_hash_timer")) c = void 0;
  else {
    d = w("yt.gcf.config.coldConfigData");
    var e = w("yt.gcf.config.hotHashData"),
      f = w("yt.gcf.config.coldHashData");
    d && e && f && (c.h = W());
    c = { coldConfigData: d, hotHashData: e, coldHashData: f };
  }
  if ((e = c))
    if (
      ((c = e.coldConfigData),
      (d = e.coldHashData),
      (e = e.hotHashData),
      c && d && e)
    )
      if (a) {
        let g;
        b = null != (g = od(a, oe, 62)) ? g : new oe();
        I(b, 1, c);
        I(b, 3, d);
        I(b, 5, e);
        H(a, oe, 62, b);
      } else
        b &&
          ((b.client.configInfo = b.client.configInfo || {}),
          (b.client.configInfo.coldConfigData = c),
          (b.client.configInfo.coldHashData = d),
          (b.client.configInfo.hotHashData = e));
}
function bi(a) {
  this.version = 1;
  this.args = a;
}
function ci() {
  var a = di;
  this.topic = "screen-created";
  this.h = a;
}
ci.prototype.toString = function () {
  return this.topic;
};
const ei = w("ytPubsub2Pubsub2Instance") || new M();
M.prototype.subscribe = M.prototype.Aa;
M.prototype.unsubscribeByKey = M.prototype.ga;
M.prototype.publish = M.prototype.ea;
M.prototype.clear = M.prototype.clear;
x("ytPubsub2Pubsub2Instance", ei);
const fi = w("ytPubsub2Pubsub2SubscribedKeys") || {};
x("ytPubsub2Pubsub2SubscribedKeys", fi);
const gi = w("ytPubsub2Pubsub2TopicToKeys") || {};
x("ytPubsub2Pubsub2TopicToKeys", gi);
const hi = w("ytPubsub2Pubsub2IsAsync") || {};
x("ytPubsub2Pubsub2IsAsync", hi);
x("ytPubsub2Pubsub2SkipSubKey", null);
function ii(a, b) {
  const c = ji();
  c && c.publish.call(c, a.toString(), a, b);
}
function ki(a) {
  var b = li;
  const c = ji();
  if (!c) return 0;
  const d = c.subscribe(b.toString(), (e, f) => {
    var g = w("ytPubsub2Pubsub2SkipSubKey");
    (g && g == d) ||
      ((g = () => {
        if (fi[d])
          try {
            if (f && b instanceof ci && b != e)
              try {
                var h = b.h,
                  k = f;
                if (!k.args || !k.version)
                  throw Error(
                    "yt.pubsub2.Data.deserialize(): serializedData is incomplete."
                  );
                try {
                  if (!h.va) {
                    const p = new h();
                    h.va = p.version;
                  }
                  var l = h.va;
                } catch (p) {}
                if (!l || k.version != l)
                  throw Error(
                    "yt.pubsub2.Data.deserialize(): serializedData version is incompatible."
                  );
                try {
                  l = Reflect;
                  var n = l.construct;
                  {
                    var m = k.args;
                    const p = m.length;
                    if (0 < p) {
                      const t = Array(p);
                      for (k = 0; k < p; k++) t[k] = m[k];
                      var r = t;
                    } else r = [];
                  }
                  f = n.call(l, h, r);
                } catch (p) {
                  throw (
                    ((p.message =
                      "yt.pubsub2.Data.deserialize(): " + p.message),
                    p)
                  );
                }
              } catch (p) {
                throw (
                  ((p.message =
                    "yt.pubsub2.pubsub2 cross-binary conversion error for " +
                    b.toString() +
                    ": " +
                    p.message),
                  p)
                );
              }
            a.call(window, f);
          } catch (p) {
            Ef(p);
          }
      }),
      hi[b.toString()]
        ? w("yt.scheduler.instance")
          ? xg.h(g)
          : Sf(g, 0)
        : g());
  });
  fi[d] = !0;
  gi[b.toString()] || (gi[b.toString()] = []);
  gi[b.toString()].push(d);
  return d;
}
function mi() {
  var a = ni;
  const b = ki(function (c) {
    a.apply(void 0, arguments);
    oi(b);
  });
  return b;
}
function oi(a) {
  const b = ji();
  b &&
    ("number" === typeof a && (a = [a]),
    pa(a, (c) => {
      b.unsubscribeByKey(c);
      delete fi[c];
    }));
}
function ji() {
  return w("ytPubsub2Pubsub2Instance");
}
let pi = void 0,
  qi = void 0;
var ri = {
  accountStateChangeSignedIn: 23,
  accountStateChangeSignedOut: 24,
  delayedEventMetricCaptured: 11,
  latencyActionBaselined: 6,
  latencyActionInfo: 7,
  latencyActionTicked: 5,
  offlineTransferStatusChanged: 2,
  offlineImageDownload: 335,
  playbackStartStateChanged: 9,
  systemHealthCaptured: 3,
  mangoOnboardingCompleted: 10,
  mangoPushNotificationReceived: 230,
  mangoUnforkDbMigrationError: 121,
  mangoUnforkDbMigrationSummary: 122,
  mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
  mangoUnforkDbMigrationPhoneMetadata: 134,
  mangoUnforkDbMigrationPhoneStorage: 135,
  mangoUnforkDbMigrationStep: 142,
  mangoAsyncApiMigrationEvent: 223,
  mangoDownloadVideoResult: 224,
  mangoHomepageVideoCount: 279,
  mangoHomeV3State: 295,
  mangoImageClientCacheHitEvent: 273,
  sdCardStatusChanged: 98,
  framesDropped: 12,
  thumbnailHovered: 13,
  deviceRetentionInfoCaptured: 14,
  thumbnailLoaded: 15,
  backToAppEvent: 318,
  streamingStatsCaptured: 17,
  offlineVideoShared: 19,
  appCrashed: 20,
  youThere: 21,
  offlineStateSnapshot: 22,
  mdxSessionStarted: 25,
  mdxSessionConnected: 26,
  mdxSessionDisconnected: 27,
  bedrockResourceConsumptionSnapshot: 28,
  nextGenWatchWatchSwiped: 29,
  kidsAccountsSnapshot: 30,
  zeroStepChannelCreated: 31,
  tvhtml5SearchCompleted: 32,
  offlineSharePairing: 34,
  offlineShareUnlock: 35,
  mdxRouteDistributionSnapshot: 36,
  bedrockRepetitiveActionTimed: 37,
  unpluggedDegradationInfo: 229,
  uploadMp4HeaderMoved: 38,
  uploadVideoTranscoded: 39,
  uploadProcessorStarted: 46,
  uploadProcessorEnded: 47,
  uploadProcessorReady: 94,
  uploadProcessorRequirementPending: 95,
  uploadProcessorInterrupted: 96,
  uploadFrontendEvent: 241,
  assetPackDownloadStarted: 41,
  assetPackDownloaded: 42,
  assetPackApplied: 43,
  assetPackDeleted: 44,
  appInstallAttributionEvent: 459,
  playbackSessionStopped: 45,
  adBlockerMessagingShown: 48,
  distributionChannelCaptured: 49,
  dataPlanCpidRequested: 51,
  detailedNetworkTypeCaptured: 52,
  sendStateUpdated: 53,
  receiveStateUpdated: 54,
  sendDebugStateUpdated: 55,
  receiveDebugStateUpdated: 56,
  kidsErrored: 57,
  mdxMsnSessionStatsFinished: 58,
  appSettingsCaptured: 59,
  mdxWebSocketServerHttpError: 60,
  mdxWebSocketServer: 61,
  startupCrashesDetected: 62,
  coldStartInfo: 435,
  offlinePlaybackStarted: 63,
  liveChatMessageSent: 225,
  liveChatUserPresent: 434,
  liveChatBeingModerated: 457,
  liveCreationCameraUpdated: 64,
  liveCreationEncodingCaptured: 65,
  liveCreationError: 66,
  liveCreationHealthUpdated: 67,
  liveCreationVideoEffectsCaptured: 68,
  liveCreationStageOccured: 75,
  liveCreationBroadcastScheduled: 123,
  liveCreationArchiveReplacement: 149,
  liveCreationCostreamingConnection: 421,
  liveCreationStreamWebrtcStats: 288,
  mdxSessionRecoveryStarted: 69,
  mdxSessionRecoveryCompleted: 70,
  mdxSessionRecoveryStopped: 71,
  visualElementShown: 72,
  visualElementHidden: 73,
  visualElementGestured: 78,
  visualElementStateChanged: 208,
  screenCreated: 156,
  playbackAssociated: 202,
  visualElementAttached: 215,
  playbackContextEvent: 214,
  cloudCastingPlaybackStarted: 74,
  webPlayerApiCalled: 76,
  tvhtml5AccountDialogOpened: 79,
  foregroundHeartbeat: 80,
  foregroundHeartbeatScreenAssociated: 111,
  kidsOfflineSnapshot: 81,
  mdxEncryptionSessionStatsFinished: 82,
  playerRequestCompleted: 83,
  liteSchedulerStatistics: 84,
  mdxSignIn: 85,
  spacecastMetadataLookupRequested: 86,
  spacecastBatchLookupRequested: 87,
  spacecastSummaryRequested: 88,
  spacecastPlayback: 89,
  spacecastDiscovery: 90,
  tvhtml5LaunchUrlComponentChanged: 91,
  mdxBackgroundPlaybackRequestCompleted: 92,
  mdxBrokenAdditionalDataDeviceDetected: 93,
  tvhtml5LocalStorage: 97,
  tvhtml5DeviceStorageStatus: 147,
  autoCaptionsAvailable: 99,
  playbackScrubbingEvent: 339,
  flexyState: 100,
  interfaceOrientationCaptured: 101,
  mainAppBrowseFragmentCache: 102,
  offlineCacheVerificationFailure: 103,
  offlinePlaybackExceptionDigest: 217,
  vrCopresenceStats: 104,
  vrCopresenceSyncStats: 130,
  vrCopresenceCommsStats: 137,
  vrCopresencePartyStats: 153,
  vrCopresenceEmojiStats: 213,
  vrCopresenceEvent: 141,
  vrCopresenceFlowTransitEvent: 160,
  vrPlaybackEvent: 345,
  kidsAgeGateTracking: 105,
  offlineDelayAllowedTracking: 106,
  mainAppAutoOfflineState: 107,
  videoAsThumbnailDownload: 108,
  videoAsThumbnailPlayback: 109,
  liteShowMore: 110,
  renderingError: 118,
  kidsProfilePinGateTracking: 119,
  abrTrajectory: 124,
  scrollEvent: 125,
  streamzIncremented: 126,
  kidsProfileSwitcherTracking: 127,
  kidsProfileCreationTracking: 129,
  buyFlowStarted: 136,
  mbsConnectionInitiated: 138,
  mbsPlaybackInitiated: 139,
  mbsLoadChildren: 140,
  liteProfileFetcher: 144,
  mdxRemoteTransaction: 146,
  reelPlaybackError: 148,
  reachabilityDetectionEvent: 150,
  mobilePlaybackEvent: 151,
  courtsidePlayerStateChanged: 152,
  musicPersistentCacheChecked: 154,
  musicPersistentCacheCleared: 155,
  playbackInterrupted: 157,
  playbackInterruptionResolved: 158,
  fixFopFlow: 159,
  anrDetection: 161,
  backstagePostCreationFlowEnded: 162,
  clientError: 163,
  gamingAccountLinkStatusChanged: 164,
  liteHousewarming: 165,
  buyFlowEvent: 167,
  kidsParentalGateTracking: 168,
  kidsSignedOutSettingsStatus: 437,
  kidsSignedOutPauseHistoryFixStatus: 438,
  tvhtml5WatchdogViolation: 444,
  ypcUpgradeFlow: 169,
  yongleStudy: 170,
  ypcUpdateFlowStarted: 171,
  ypcUpdateFlowCancelled: 172,
  ypcUpdateFlowSucceeded: 173,
  ypcUpdateFlowFailed: 174,
  liteGrowthkitPromo: 175,
  paymentFlowStarted: 341,
  transactionFlowShowPaymentDialog: 405,
  transactionFlowStarted: 176,
  transactionFlowSecondaryDeviceStarted: 222,
  transactionFlowSecondaryDeviceSignedOutStarted: 383,
  transactionFlowCancelled: 177,
  transactionFlowPaymentCallBackReceived: 387,
  transactionFlowPaymentSubmitted: 460,
  transactionFlowPaymentSucceeded: 329,
  transactionFlowSucceeded: 178,
  transactionFlowFailed: 179,
  transactionFlowPlayBillingConnectionStartEvent: 428,
  transactionFlowSecondaryDeviceSuccess: 458,
  transactionFlowErrorEvent: 411,
  liteVideoQualityChanged: 180,
  watchBreakEnablementSettingEvent: 181,
  watchBreakFrequencySettingEvent: 182,
  videoEffectsCameraPerformanceMetrics: 183,
  adNotify: 184,
  startupTelemetry: 185,
  playbackOfflineFallbackUsed: 186,
  outOfMemory: 187,
  ypcPauseFlowStarted: 188,
  ypcPauseFlowCancelled: 189,
  ypcPauseFlowSucceeded: 190,
  ypcPauseFlowFailed: 191,
  uploadFileSelected: 192,
  ypcResumeFlowStarted: 193,
  ypcResumeFlowCancelled: 194,
  ypcResumeFlowSucceeded: 195,
  ypcResumeFlowFailed: 196,
  adsClientStateChange: 197,
  ypcCancelFlowStarted: 198,
  ypcCancelFlowCancelled: 199,
  ypcCancelFlowSucceeded: 200,
  ypcCancelFlowFailed: 201,
  ypcCancelFlowGoToPaymentProcessor: 402,
  ypcDeactivateFlowStarted: 320,
  ypcRedeemFlowStarted: 203,
  ypcRedeemFlowCancelled: 204,
  ypcRedeemFlowSucceeded: 205,
  ypcRedeemFlowFailed: 206,
  ypcFamilyCreateFlowStarted: 258,
  ypcFamilyCreateFlowCancelled: 259,
  ypcFamilyCreateFlowSucceeded: 260,
  ypcFamilyCreateFlowFailed: 261,
  ypcFamilyManageFlowStarted: 262,
  ypcFamilyManageFlowCancelled: 263,
  ypcFamilyManageFlowSucceeded: 264,
  ypcFamilyManageFlowFailed: 265,
  restoreContextEvent: 207,
  embedsAdEvent: 327,
  autoplayTriggered: 209,
  clientDataErrorEvent: 210,
  experimentalVssValidation: 211,
  tvhtml5TriggeredEvent: 212,
  tvhtml5FrameworksFieldTrialResult: 216,
  tvhtml5FrameworksFieldTrialStart: 220,
  musicOfflinePreferences: 218,
  watchTimeSegment: 219,
  appWidthLayoutError: 221,
  accountRegistryChange: 226,
  userMentionAutoCompleteBoxEvent: 227,
  downloadRecommendationEnablementSettingEvent: 228,
  musicPlaybackContentModeChangeEvent: 231,
  offlineDbOpenCompleted: 232,
  kidsFlowEvent: 233,
  kidsFlowCorpusSelectedEvent: 234,
  videoEffectsEvent: 235,
  unpluggedOpsEogAnalyticsEvent: 236,
  playbackAudioRouteEvent: 237,
  interactionLoggingDebugModeError: 238,
  offlineYtbRefreshed: 239,
  kidsFlowError: 240,
  musicAutoplayOnLaunchAttempted: 242,
  deviceContextActivityEvent: 243,
  deviceContextEvent: 244,
  templateResolutionException: 245,
  musicSideloadedPlaylistServiceCalled: 246,
  embedsStorageAccessNotChecked: 247,
  embedsHasStorageAccessResult: 248,
  embedsItpPlayedOnReload: 249,
  embedsRequestStorageAccessResult: 250,
  embedsShouldRequestStorageAccessResult: 251,
  embedsRequestStorageAccessState: 256,
  embedsRequestStorageAccessFailedState: 257,
  embedsItpWatchLaterResult: 266,
  searchSuggestDecodingPayloadFailure: 252,
  siriShortcutActivated: 253,
  tvhtml5KeyboardPerformance: 254,
  latencyActionSpan: 255,
  elementsLog: 267,
  ytbFileOpened: 268,
  tfliteModelError: 269,
  apiTest: 270,
  yongleUsbSetup: 271,
  touStrikeInterstitialEvent: 272,
  liteStreamToSave: 274,
  appBundleClientEvent: 275,
  ytbFileCreationFailed: 276,
  adNotifyFailure: 278,
  ytbTransferFailed: 280,
  blockingRequestFailed: 281,
  liteAccountSelector: 282,
  liteAccountUiCallbacks: 283,
  dummyPayload: 284,
  browseResponseValidationEvent: 285,
  entitiesError: 286,
  musicIosBackgroundFetch: 287,
  mdxNotificationEvent: 289,
  layersValidationError: 290,
  musicPwaInstalled: 291,
  liteAccountCleanup: 292,
  html5PlayerHealthEvent: 293,
  watchRestoreAttempt: 294,
  liteAccountSignIn: 296,
  notaireEvent: 298,
  kidsVoiceSearchEvent: 299,
  adNotifyFilled: 300,
  delayedEventDropped: 301,
  analyticsSearchEvent: 302,
  systemDarkThemeOptOutEvent: 303,
  flowEvent: 304,
  networkConnectivityBaselineEvent: 305,
  ytbFileImported: 306,
  downloadStreamUrlExpired: 307,
  directSignInEvent: 308,
  lyricImpressionEvent: 309,
  accessibilityStateEvent: 310,
  tokenRefreshEvent: 311,
  genericAttestationExecution: 312,
  tvhtml5VideoSeek: 313,
  unpluggedAutoPause: 314,
  scrubbingEvent: 315,
  bedtimeReminderEvent: 317,
  tvhtml5UnexpectedRestart: 319,
  tvhtml5StabilityTraceEvent: 478,
  tvhtml5OperationHealth: 467,
  tvhtml5WatchKeyEvent: 321,
  voiceLanguageChanged: 322,
  tvhtml5LiveChatStatus: 323,
  parentToolsCorpusSelectedEvent: 324,
  offerAdsEnrollmentInitiated: 325,
  networkQualityIntervalEvent: 326,
  deviceStartupMetrics: 328,
  heartbeatActionPlayerTransitioned: 330,
  tvhtml5Lifecycle: 331,
  heartbeatActionPlayerHalted: 332,
  adaptiveInlineMutedSettingEvent: 333,
  mainAppLibraryLoadingState: 334,
  thirdPartyLogMonitoringEvent: 336,
  appShellAssetLoadReport: 337,
  tvhtml5AndroidAttestation: 338,
  tvhtml5StartupSoundEvent: 340,
  iosBackgroundRefreshTask: 342,
  iosBackgroundProcessingTask: 343,
  sliEventBatch: 344,
  postImpressionEvent: 346,
  musicSideloadedPlaylistExport: 347,
  idbUnexpectedlyClosed: 348,
  voiceSearchEvent: 349,
  mdxSessionCastEvent: 350,
  idbQuotaExceeded: 351,
  idbTransactionEnded: 352,
  idbTransactionAborted: 353,
  tvhtml5KeyboardLogging: 354,
  idbIsSupportedCompleted: 355,
  creatorStudioMobileEvent: 356,
  idbDataCorrupted: 357,
  parentToolsAppChosenEvent: 358,
  webViewBottomSheetResized: 359,
  activeStateControllerScrollPerformanceSummary: 360,
  navigatorValidation: 361,
  mdxSessionHeartbeat: 362,
  clientHintsPolyfillDiagnostics: 363,
  clientHintsPolyfillEvent: 364,
  proofOfOriginTokenError: 365,
  kidsAddedAccountSummary: 366,
  musicWearableDevice: 367,
  ypcRefundFlowEvent: 368,
  tvhtml5PlaybackMeasurementEvent: 369,
  tvhtml5WatermarkMeasurementEvent: 370,
  clientExpGcfPropagationEvent: 371,
  mainAppReferrerIntent: 372,
  leaderLockEnded: 373,
  leaderLockAcquired: 374,
  googleHatsEvent: 375,
  persistentLensLaunchEvent: 376,
  parentToolsChildWelcomeChosenEvent: 378,
  browseThumbnailPreloadEvent: 379,
  finalPayload: 380,
  mdxDialAdditionalDataUpdateEvent: 381,
  webOrchestrationTaskLifecycleRecord: 382,
  startupSignalEvent: 384,
  accountError: 385,
  gmsDeviceCheckEvent: 386,
  accountSelectorEvent: 388,
  accountUiCallbacks: 389,
  mdxDialAdditionalDataProbeEvent: 390,
  downloadsSearchIcingApiStats: 391,
  downloadsSearchIndexUpdatedEvent: 397,
  downloadsSearchIndexSnapshot: 398,
  dataPushClientEvent: 392,
  kidsCategorySelectedEvent: 393,
  mdxDeviceManagementSnapshotEvent: 394,
  prefetchRequested: 395,
  prefetchableCommandExecuted: 396,
  gelDebuggingEvent: 399,
  webLinkTtsPlayEnd: 400,
  clipViewInvalid: 401,
  persistentStorageStateChecked: 403,
  cacheWipeoutEvent: 404,
  playerEvent: 410,
  sfvEffectPipelineStartedEvent: 412,
  sfvEffectPipelinePausedEvent: 429,
  sfvEffectPipelineEndedEvent: 413,
  sfvEffectChosenEvent: 414,
  sfvEffectLoadedEvent: 415,
  sfvEffectUserInteractionEvent: 465,
  sfvEffectFirstFrameProcessedLatencyEvent: 416,
  sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
  sfvEffectAggregatedFramesDroppedEvent: 418,
  sfvEffectPipelineErrorEvent: 430,
  sfvEffectGraphFrozenEvent: 419,
  sfvEffectGlThreadBlockedEvent: 420,
  mdeVideoChangedEvent: 442,
  mdePlayerPerformanceMetrics: 472,
  genericClientExperimentEvent: 423,
  homePreloadTaskScheduled: 424,
  homePreloadTaskExecuted: 425,
  homePreloadCacheHit: 426,
  polymerPropertyChangedInObserver: 427,
  applicationStarted: 431,
  networkCronetRttBatch: 432,
  networkCronetRttSummary: 433,
  repeatChapterLoopEvent: 436,
  seekCancellationEvent: 462,
  lockModeTimeoutEvent: 483,
  offlineTransferStarted: 4,
  musicOfflineMixtapePreferencesChanged: 16,
  mangoDailyNewVideosNotificationAttempt: 40,
  mangoDailyNewVideosNotificationError: 77,
  dtwsPlaybackStarted: 112,
  dtwsTileFetchStarted: 113,
  dtwsTileFetchCompleted: 114,
  dtwsTileFetchStatusChanged: 145,
  dtwsKeyframeDecoderBufferSent: 115,
  dtwsTileUnderflowedOnNonkeyframe: 116,
  dtwsBackfillFetchStatusChanged: 143,
  dtwsBackfillUnderflowed: 117,
  dtwsAdaptiveLevelChanged: 128,
  blockingVisitorIdTimeout: 277,
  liteSocial: 18,
  mobileJsInvocation: 297,
  biscottiBasedDetection: 439,
  coWatchStateChange: 440,
  embedsVideoDataDidChange: 441,
  shortsFirst: 443,
  cruiseControlEvent: 445,
  qoeClientLoggingContext: 446,
  atvRecommendationJobExecuted: 447,
  tvhtml5UserFeedback: 448,
  producerProjectCreated: 449,
  producerProjectOpened: 450,
  producerProjectDeleted: 451,
  producerProjectElementAdded: 453,
  producerProjectElementRemoved: 454,
  tvhtml5ShowClockEvent: 455,
  deviceCapabilityCheckMetrics: 456,
  youtubeClearcutEvent: 461,
  offlineBrowseFallbackEvent: 463,
  getCtvTokenEvent: 464,
  startupDroppedFramesSummary: 466,
  screenshotEvent: 468,
  miniAppPlayEvent: 469,
  elementsDebugCounters: 470,
  fontLoadEvent: 471,
  webKillswitchReceived: 473,
  webKillswitchExecuted: 474,
  cameraOpenEvent: 475,
  manualSmoothnessMeasurement: 476,
  tvhtml5AppQualityEvent: 477,
  polymerPropertyAccessEvent: 479,
  miniAppSdkUsage: 480,
  cobaltTelemetryEvent: 481,
  crossDevicePlayback: 482,
  channelCreatedWithObakeImage: 484,
  channelEditedWithObakeImage: 485,
  offlineDeleteEvent: 486,
  crossDeviceNotificationTransfer: 487,
};
const si = ["client.name", "client.version"];
function ti(a) {
  if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
  a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter((b) =>
    b.key ? si.includes(b.key) : !1
  );
  return a;
}
var ui = Kh("ServiceWorkerLogsDatabase", {
  M: { SWHealthLog: { L: 1 } },
  X: !0,
  upgrade: (a, b) => {
    b(1) &&
      ah(a, "SWHealthLog", { keyPath: "id", autoIncrement: !0 }).h.createIndex(
        "swHealthNewRequest",
        ["interface", "timestamp"],
        { unique: !1 }
      );
  },
  version: 1,
});
function vi(a, b) {
  return u(function* () {
    var c = yield rh(ui(), b),
      d = S("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
    const e = Object.assign({}, a);
    e.clientError && (e.clientError = ti(e.clientError));
    e.interface = d;
    return ch(c, "SWHealthLog", e);
  });
}
x(
  "ytNetworklessLoggingInitializationOptions",
  v.ytNetworklessLoggingInitializationOptions || { isNwlInitialized: !1 }
);
function wi(a, b, c, d) {
  !S("VISITOR_DATA") &&
    "visitor_id" !== b &&
    0.01 > Math.random() &&
    Ff(new kf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
  if (!a.isReady())
    throw ((a = new kf("innertube xhrclient not ready", b, c, d)), Ef(a), a);
  c = {
    headers: d.headers || {},
    method: "POST",
    postParams: c,
    postBody: d.postBody,
    postBodyFormat: d.postBodyFormat || "JSON",
    onTimeout: () => {
      d.onTimeout();
    },
    onFetchTimeout: d.onTimeout,
    onSuccess: (k, l) => {
      if (d.onSuccess) d.onSuccess(l);
    },
    onFetchSuccess: (k) => {
      if (d.onSuccess) d.onSuccess(k);
    },
    onError: (k, l) => {
      if (d.onError) d.onError(l);
    },
    onFetchError: (k) => {
      if (d.onError) d.onError(k);
    },
    timeout: d.timeout,
    withCredentials: !0,
    compress: d.compress,
  };
  c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
  let e = "";
  var f = a.config_.Ma;
  f && (e = f);
  var g = a.config_.Oa || !1;
  f = ai(g, e, d);
  Object.assign(c.headers, f);
  (f = c.headers.Authorization) &&
    !e &&
    g &&
    (c.headers["x-origin"] = window.location.origin);
  b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
  g = { alt: "json" };
  let h = a.config_.Na && f;
  h = h && f.startsWith("Bearer");
  h || (g.key = a.config_.innertubeApiKey);
  a = Mf(`${e}${b}`, g || {}, !0);
  try {
    Wf(a, c);
  } catch (k) {
    if ("InvalidAccessError" == k.name)
      Ff(Error("An extension is blocking network request."));
    else throw k;
  }
}
class xi {
  constructor(a) {
    this.config_ = null;
    a ? (this.config_ = a) : Vh() && (this.config_ = Wh());
  }
  isReady() {
    !this.config_ && Vh() && (this.config_ = Wh());
    return !!this.config_;
  }
}
let yi = 0;
x("ytDomDomGetNextId", w("ytDomDomGetNextId") || (() => ++yi));
x("ytEventsEventsListeners", v.ytEventsEventsListeners || {});
x("ytEventsEventsCounter", v.ytEventsEventsCounter || { count: 0 });
function zi() {
  const a = w("_lact", window);
  return null == a ? -1 : Math.max(Date.now() - a, 0);
}
v.ytPubsubPubsubInstance || new M();
var Ai = Symbol("injectionDeps"),
  Bi = class {
    constructor() {
      this.name = "INNERTUBE_TRANSPORT_TOKEN";
    }
    toString() {
      return `InjectionToken(${this.name})`;
    }
  },
  Ci = class {
    constructor() {
      this.key = Uh;
    }
  };
function Di(a) {
  var b = { Sa: Ei, ta: Fi.h };
  a.i.set(b.Sa, b);
}
function Gi(a, b, c, d = !1) {
  if (-1 < c.indexOf(b)) throw Error(`Deps cycle for: ${b}`);
  if (a.h.has(b)) return a.h.get(b);
  if (!a.i.has(b)) {
    if (d) return;
    throw Error(`No provider for: ${b}`);
  }
  d = a.i.get(b);
  c.push(b);
  if (void 0 !== d.ta) var e = d.ta;
  else if (d.eb) (e = d[Ai] ? Hi(a, d[Ai], c) : []), (e = d.eb(...e));
  else if (d.cb) {
    e = d.cb;
    const f = e[Ai] ? Hi(a, e[Ai], c) : [];
    e = new e(...f);
  } else throw Error(`Could not resolve providers for: ${b}`);
  c.pop();
  d.tc || a.h.set(b, e);
  return e;
}
function Hi(a, b, c) {
  return b
    ? b.map((d) => (d instanceof Ci ? Gi(a, d.key, c, !0) : Gi(a, d, c)))
    : [];
}
var Ii = class {
  constructor() {
    this.i = new Map();
    this.h = new Map();
  }
  resolve(a) {
    return a instanceof Ci ? Gi(this, a.key, [], !0) : Gi(this, a, []);
  }
};
let Ji;
function Ki() {
  Ji || (Ji = new Ii());
  return Ji;
}
let Li = window;
function Mi() {
  let a, b;
  return "h5vcc" in Li &&
    (null == (a = Li.h5vcc.traceEvent) ? 0 : a.traceBegin) &&
    (null == (b = Li.h5vcc.traceEvent) ? 0 : b.traceEnd)
    ? 1
    : "performance" in Li && Li.performance.mark && Li.performance.measure
    ? 2
    : 0;
}
function Ni(a) {
  const b = Mi();
  switch (b) {
    case 1:
      Li.h5vcc.traceEvent.traceBegin("YTLR", a);
      break;
    case 2:
      Li.performance.mark(`${a}-start`);
      break;
    case 0:
      break;
    default:
      Qd(b, "unknown trace type");
  }
}
function Oi(a) {
  var b = Mi();
  switch (b) {
    case 1:
      Li.h5vcc.traceEvent.traceEnd("YTLR", a);
      break;
    case 2:
      b = `${a}-start`;
      const c = `${a}-end`;
      Li.performance.mark(c);
      Li.performance.measure(a, b, c);
      break;
    case 0:
      break;
    default:
      Qd(b, "unknown trace type");
  }
}
var Pi = T("web_enable_lifecycle_monitoring") && 0 !== Mi(),
  Qi = T("web_enable_lifecycle_monitoring");
function Ri(a) {
  let b;
  return null != (b = a.priority) ? b : 0;
}
function Si(a) {
  var b = Array.from(a.h.keys()).sort((c, d) => Ri(a.h[d]) - Ri(a.h[c]));
  for (const c of b)
    (b = a.h[c]),
      void 0 === b.jobId || b.W || (a.scheduler.T(b.jobId), sg(b.aa, 10));
}
var Ti = class {
  constructor(a) {
    this.scheduler = vg();
    this.i = new ae();
    this.h = a;
    for (let b = 0; b < this.h.length; b++) {
      const c = this.h[b];
      a = () => {
        c.aa();
        this.h[b].W = !0;
        this.h.every((e) => !0 === e.W) && this.i.resolve();
      };
      const d = sg(a, Ri(c));
      this.h[b] = Object.assign({}, c, { aa: a, jobId: d });
    }
  }
  cancel() {
    for (const a of this.h)
      void 0 === a.jobId || a.W || this.scheduler.T(a.jobId), (a.W = !0);
    this.i.resolve();
  }
};
function Ui(a, b, c) {
  Qi &&
    console.groupCollapsed &&
    console.groupEnd &&
    (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`),
    console.log("with message: ", c),
    console.groupEnd());
}
function Vi(a, b) {
  const c = b.filter((e) => 10 === Wi(a, e)),
    d = b.filter((e) => 10 !== Wi(a, e));
  return a.l.qc
    ? (...e) =>
        u(function* () {
          yield Xi(c, ...e);
          Yi(a, d, ...e);
        })
    : (...e) => {
        Zi(c, ...e);
        Yi(a, d, ...e);
      };
}
function Wi(a, b) {
  let c, d;
  return null != (d = null != (c = a.j) ? c : b.priority) ? d : 0;
}
function Xi(a, ...b) {
  return u(function* () {
    vg();
    for (const c of a) {
      let d;
      tg(() => {
        $i(c.name);
        const e = c.callback(...b);
        "function" === typeof (null == e ? void 0 : e.then)
          ? (d = e.then(() => {
              aj(c.name);
            }))
          : aj(c.name);
      });
      d && (yield d);
    }
  });
}
function Yi(a, b, ...c) {
  b = b.map((d) => ({
    aa: () => {
      $i(d.name);
      d.callback(...c);
      aj(d.name);
    },
    priority: Wi(a, d),
  }));
  b.length && (a.i = new Ti(b));
}
function Zi(a, ...b) {
  vg();
  for (const c of a)
    tg(() => {
      $i(c.name);
      c.callback(...b);
      aj(c.name);
    });
}
function $i(a) {
  Pi && a && Ni(a);
}
function aj(a) {
  Pi && a && Oi(a);
}
var bj = class {
  constructor() {
    this.state = "none";
    this.plugins = [];
    this.j = void 0;
    this.l = {};
    Pi && Ni(this.state);
  }
  get currentState() {
    return this.state;
  }
  install(a) {
    this.plugins.push(a);
    return this;
  }
  uninstall(...a) {
    a.forEach((b) => {
      b = this.plugins.indexOf(b);
      -1 < b && this.plugins.splice(b, 1);
    });
  }
  transition(a, b) {
    Pi && Oi(this.state);
    var c = this.transitions.find((d) =>
      Array.isArray(d.from)
        ? d.from.find((e) => e === this.state && d.R === a)
        : d.from === this.state && d.R === a
    );
    if (c) {
      this.i && (Si(this.i), (this.i = void 0));
      Ui(this, a, b);
      this.state = a;
      Pi && Ni(this.state);
      c = c.action.bind(this);
      const d = this.plugins.filter((e) => e[a]).map((e) => e[a]);
      c(Vi(this, d), b);
    } else throw Error(`no transition specified from ${this.state} to ${a}`);
  }
};
function cj() {
  dj || (dj = new ej());
  return dj;
}
var ej = class extends bj {
    constructor() {
      super();
      this.h = null;
      this.j = 10;
      this.transitions = [
        { from: "none", R: "application_navigating", action: this.m },
        { from: "application_navigating", R: "none", action: this.s },
        {
          from: "application_navigating",
          R: "application_navigating",
          action: () => {},
        },
        { from: "none", R: "none", action: () => {} },
      ];
    }
    m(a, b) {
      this.h = rg(() => {
        "application_navigating" === this.currentState &&
          this.transition("none");
      }, 5e3);
      a(null == b ? void 0 : b.event);
    }
    s(a, b) {
      this.h && (xg.T(this.h), (this.h = null));
      a(null == b ? void 0 : b.event);
    }
  },
  dj;
let fj = [];
x("yt.logging.transport.getScrapedGelPayloads", function () {
  return fj;
});
function gj(a, b) {
  const c = hj(b);
  if (a.h[c]) return a.h[c];
  const d = Object.keys(a.store) || [];
  if (1 >= d.length && hj(b) === d[0]) return d;
  const e = [];
  for (let g = 0; g < d.length; g++) {
    const h = d[g].split("/");
    if (ij(b.auth, h[0])) {
      var f = b.isJspb;
      ij(void 0 === f ? "undefined" : f ? "true" : "false", h[1]) &&
        ij(b.cttAuthInfo, h[2]) &&
        ((f = b.tier),
        (f = void 0 === f ? "undefined" : JSON.stringify(f)),
        ij(f, h[3]) && e.push(d[g]));
    }
  }
  return (a.h[c] = e);
}
function ij(a, b) {
  return void 0 === a || "undefined" === a ? !0 : a === b;
}
var jj = class {
  constructor() {
    this.store = {};
    this.h = {};
  }
  storePayload(a, b) {
    a = hj(a);
    this.store[a]
      ? this.store[a].push(b)
      : ((this.h = {}), (this.store[a] = [b]));
    return a;
  }
  smartExtractMatchingEntries(a) {
    if (!a.keys.length) return [];
    const b = gj(this, a.keys.splice(0, 1)[0]),
      c = [];
    for (let d = 0; d < b.length; d++)
      this.store[b[d]] &&
        a.sizeLimit &&
        (this.store[b[d]].length <= a.sizeLimit
          ? (c.push(...this.store[b[d]]), delete this.store[b[d]])
          : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
    (null == a ? 0 : a.sizeLimit) &&
      c.length < (null == a ? void 0 : a.sizeLimit) &&
      ((a.sizeLimit -= c.length),
      c.push(...this.smartExtractMatchingEntries(a)));
    return c;
  }
  extractMatchingEntries(a) {
    a = gj(this, a);
    const b = [];
    for (let c = 0; c < a.length; c++)
      this.store[a[c]] &&
        (b.push(...this.store[a[c]]), delete this.store[a[c]]);
    return b;
  }
  getSequenceCount(a) {
    a = gj(this, a);
    let b = 0;
    for (let c = 0; c < a.length; c++) {
      let d;
      b += (null == (d = this.store[a[c]]) ? void 0 : d.length) || 0;
    }
    return b;
  }
};
jj.prototype.getSequenceCount = jj.prototype.getSequenceCount;
jj.prototype.extractMatchingEntries = jj.prototype.extractMatchingEntries;
jj.prototype.smartExtractMatchingEntries =
  jj.prototype.smartExtractMatchingEntries;
jj.prototype.storePayload = jj.prototype.storePayload;
function hj(a) {
  return [
    void 0 === a.auth ? "undefined" : a.auth,
    void 0 === a.isJspb ? "undefined" : a.isJspb,
    void 0 === a.cttAuthInfo ? "undefined" : a.cttAuthInfo,
    void 0 === a.tier ? "undefined" : a.tier,
  ].join("/");
}
function kj(a, b) {
  if (a) return a[b.name];
} /*

 SPDX-License-Identifier: Apache-2.0
*/
const lj = Pf("initial_gel_batch_timeout", 2e3),
  mj = Pf("gel_queue_timeout_max_ms", 6e4),
  nj = Math.pow(2, 16) - 1,
  oj = Pf("gel_min_batch_size", 5);
let pj = void 0;
class qj {
  constructor() {
    this.l = this.h = this.i = 0;
    this.j = !1;
  }
}
const rj = new qj(),
  sj = new qj(),
  tj = new qj(),
  uj = new qj();
let vj,
  wj = !0,
  xj = 1;
const yj = new Map(),
  zj = v.ytLoggingTransportTokensToCttTargetIds_ || {},
  Aj = v.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Bj = {};
function Cj() {
  let a = w("yt.logging.ims");
  a || ((a = new jj()), x("yt.logging.ims", a));
  return a;
}
function Dj(a, b) {
  if ("log_event" === a.endpoint) {
    Ej();
    var c = Fj(a),
      d = Gj(a.payload) || "",
      e = Hj(d),
      f = 200;
    if (e) {
      if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch"))
        return;
      f = Ij(e.tier);
      if (400 === f) {
        Jj(a, b);
        return;
      }
    }
    Bj[c] = !0;
    e = { cttAuthInfo: c, isJspb: !1, tier: f };
    Cj().storePayload(e, a.payload);
    Kj(b, c, !1, e, Lj(d));
  }
}
function Mj(a, b, c) {
  if ("log_event" === b.endpoint) {
    Ej();
    var d = Fj(b, !0),
      e = Hj(a),
      f = 200;
    if (e) {
      if (!1 === e.enabled && !T("web_payload_policy_disabled_killswitch"))
        return;
      f = Ij(e.tier);
      if (400 === f) {
        Nj(a, b, c);
        return;
      }
    }
    Bj[d] = !0;
    e = { cttAuthInfo: d, isJspb: !0, tier: f };
    Cj().storePayload(e, b.payload.toJSON());
    Kj(c, d, !0, e, Lj(a));
  }
}
function Kj(a, b, c = !1, d, e = !1) {
  a && (pj = new a());
  a =
    Pf("tvhtml5_logging_max_batch_ads_fork") ||
    Pf("web_logging_max_batch") ||
    100;
  const f = W(),
    g = Oj(c, d.tier),
    h = g.l;
  e && (g.j = !0);
  e = 0;
  d && (e = Cj().getSequenceCount(d));
  const k = () => {
    Pj(
      { writeThenSend: !0 },
      T("flush_only_full_queue") ? b : void 0,
      c,
      d.tier
    );
  };
  1e3 <= e
    ? k()
    : e >= a
    ? vj ||
      (vj = Qj(() => {
        k();
        vj = void 0;
      }, 0))
    : 10 <= f - h && (Rj(c, d.tier), (g.l = f));
}
function Jj(a, b) {
  if ("log_event" === a.endpoint) {
    Ej();
    var c = Fj(a),
      d = new Map();
    d.set(c, [a.payload]);
    var e = Gj(a.payload) || "";
    b && (pj = new b());
    return new A((f, g) => {
      pj && pj.isReady()
        ? Sj(d, pj, f, g, { bypassNetworkless: !0 }, !0, Lj(e))
        : f();
    });
  }
}
function Nj(a, b, c) {
  if ("log_event" === b.endpoint) {
    Ej();
    var d = Fj(b, !0),
      e = new Map();
    e.set(d, [b.payload.toJSON()]);
    c && (pj = new c());
    return new A((f) => {
      pj && pj.isReady()
        ? Tj(e, pj, f, { bypassNetworkless: !0 }, !0, Lj(a))
        : f();
    });
  }
}
function Fj(a, b = !1) {
  var c = "";
  if (a.dangerousLogToVisitorSession) c = "visitorOnlyApprovedKey";
  else if (a.cttAuthInfo) {
    if (b) {
      b = a.cttAuthInfo.token;
      c = a.cttAuthInfo;
      const d = new bf();
      c.videoId
        ? d.setVideoId(c.videoId)
        : c.playlistId && ld(d, 2, af, Pc(c.playlistId));
      Aj[b] = d;
    } else
      (b = a.cttAuthInfo),
        (c = {}),
        b.videoId
          ? (c.videoId = b.videoId)
          : b.playlistId && (c.playlistId = b.playlistId),
        (zj[a.cttAuthInfo.token] = c);
    c = a.cttAuthInfo.token;
  }
  return c;
}
function Pj(a = {}, b, c = !1, d) {
  new A((e, f) => {
    const g = Oj(c, d),
      h = g.j;
    g.j = !1;
    Uj(g.i);
    Uj(g.h);
    g.h = 0;
    pj && pj.isReady()
      ? void 0 === d && T("enable_web_tiered_gel")
        ? Vj(e, f, a, b, c, 300, h)
        : Vj(e, f, a, b, c, d, h)
      : (Rj(c, d), e());
  });
}
function Vj(a, b, c = {}, d, e = !1, f = 200, g = !1) {
  var h = pj,
    k = new Map();
  const l = new Map(),
    n = { isJspb: e, cttAuthInfo: d, tier: f },
    m = { isJspb: e, cttAuthInfo: d };
  if (void 0 !== d)
    e
      ? ((b = T("enable_web_tiered_gel")
          ? Cj().smartExtractMatchingEntries({ keys: [n, m], sizeLimit: 1e3 })
          : Cj().extractMatchingEntries(m)),
        k.set(d, b),
        Tj(k, h, a, c, !1, g))
      : ((k = T("enable_web_tiered_gel")
          ? Cj().smartExtractMatchingEntries({ keys: [n, m], sizeLimit: 1e3 })
          : Cj().extractMatchingEntries(m)),
        l.set(d, k),
        Sj(l, h, a, b, c, !1, g));
  else if (e) {
    for (const r of Object.keys(Bj))
      (b = T("enable_web_tiered_gel")
        ? Cj().smartExtractMatchingEntries({ keys: [n, m], sizeLimit: 1e3 })
        : Cj().extractMatchingEntries({ isJspb: !0, cttAuthInfo: r })),
        0 < b.length && k.set(r, b),
        ((T("web_fp_via_jspb_and_json") && c.writeThenSend) ||
          !T("web_fp_via_jspb_and_json")) &&
          delete Bj[r];
    Tj(k, h, a, c, !1, g);
  } else {
    for (const r of Object.keys(Bj))
      (d = T("enable_web_tiered_gel")
        ? Cj().smartExtractMatchingEntries({
            keys: [
              { isJspb: !1, cttAuthInfo: r, tier: f },
              { isJspb: !1, cttAuthInfo: r },
            ],
            sizeLimit: 1e3,
          })
        : Cj().extractMatchingEntries({ isJspb: !1, cttAuthInfo: r })),
        0 < d.length && l.set(r, d),
        ((T("web_fp_via_jspb_and_json") && c.writeThenSend) ||
          !T("web_fp_via_jspb_and_json")) &&
          delete Bj[r];
    Sj(l, h, a, b, c, !1, g);
  }
}
function Rj(a = !1, b = 200) {
  const c = () => {
      Pj({ writeThenSend: !0 }, void 0, a, b);
    },
    d = Oj(a, b);
  var e = d === uj || d === tj ? 5e3 : mj;
  T("web_gel_timeout_cap") &&
    !d.h &&
    ((e = Qj(() => {
      c();
    }, e)),
    (d.h = e));
  Uj(d.i);
  e = S("LOGGING_BATCH_TIMEOUT", Pf("web_gel_debounce_ms", 1e4));
  T("shorten_initial_gel_batch_timeout") && wj && (e = lj);
  e = Qj(() => {
    0 < Pf("gel_min_batch_size")
      ? Cj().getSequenceCount({ cttAuthInfo: void 0, isJspb: a, tier: b }) >=
          oj && c()
      : c();
  }, e);
  d.i = e;
}
function Sj(a, b, c, d, e = {}, f, g) {
  const h = Math.round(W());
  let k = a.size;
  const l = Wj(g);
  for (const [n, m] of a) {
    a = n;
    g = m;
    const r = va({ context: Xh(b.config_ || Wh()) });
    if (!ha(g) && !T("throw_err_when_logevent_malformed_killswitch")) {
      d();
      break;
    }
    r.events = g;
    (g = zj[a]) && Xj(r, a, g);
    delete zj[a];
    const p = "visitorOnlyApprovedKey" === a;
    Yj(r, h, p);
    Zj(e);
    const t = (N) => {
      T("start_client_gcf") &&
        xg.h(() =>
          u(function* () {
            yield ak(N);
          })
        );
      k--;
      k || c();
    };
    let z = 0;
    const D = () => {
      z++;
      if (e.bypassNetworkless && 1 === z)
        try {
          wi(b, l, r, bk({ writeThenSend: !0 }, p, t, D, f)), (wj = !1);
        } catch (N) {
          Ef(N), d();
        }
      k--;
      k || c();
    };
    try {
      wi(b, l, r, bk(e, p, t, D, f)), (wj = !1);
    } catch (N) {
      Ef(N), d();
    }
  }
}
function Tj(a, b, c, d = {}, e, f) {
  const g = Math.round(W()),
    h = { value: a.size };
  var k = new Map([...a]);
  for (const [N] of k) {
    var l = N,
      n = a.get(l);
    k = new cf();
    var m = b.config_ || Wh(),
      r = new xe(),
      p = new qe();
    I(p, 1, m.qa);
    I(p, 2, m.pa);
    K(p, 16, m.La);
    I(p, 17, m.innertubeContextClientVersion);
    if (m.Z) {
      var t = m.Z,
        z = new oe();
      t.coldConfigData && I(z, 1, t.coldConfigData);
      t.appInstallData && I(z, 6, t.appInstallData);
      t.coldHashData && I(z, 3, t.coldHashData);
      t.hotHashData && I(z, 5, t.hotHashData);
      H(p, oe, 62, z);
    }
    if ((t = v.devicePixelRatio) && 1 != t) {
      if (null != t && "number" !== typeof t)
        throw Error(
          `Value of float/double field must be a number, found ${typeof t}: ${t}`
        );
      jd(p, 65, t);
    }
    t = Qf();
    "" !== t && I(p, 54, t);
    t = Rf();
    if (0 < t.length) {
      z = new te();
      for (let J = 0; J < t.length; J++) {
        const qa = new se();
        I(qa, 1, t[J].key);
        ld(qa, 2, re, Pc(t[J].value));
        td(z, 15, se, qa);
      }
      H(r, te, 5, z);
    }
    Yh(r);
    Zh(m, p);
    T("start_client_gcf") && $h(p);
    S("DELEGATED_SESSION_ID") &&
      !T("pageid_as_header_web") &&
      ((m = new we()), I(m, 3, S("DELEGATED_SESSION_ID")));
    !T("fill_delegate_context_in_gel_killswitch") &&
      (m = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
      ((t = od(r, we, 3) || new we()), (m = I(t, 18, m)), H(r, we, 3, m));
    m = p;
    t = S("DEVICE", "");
    for (const [J, qa] of Object.entries(Lf(t)))
      (t = J),
        (z = qa),
        "cbrand" === t
          ? I(m, 12, z)
          : "cmodel" === t
          ? I(m, 13, z)
          : "cbr" === t
          ? I(m, 87, z)
          : "cbrver" === t
          ? I(m, 88, z)
          : "cos" === t
          ? I(m, 18, z)
          : "cosver" === t
          ? I(m, 19, z)
          : "cplatform" === t && K(m, 42, pg(z));
    r.j(p);
    H(k, xe, 1, r);
    if ((p = Aj[l]))
      a: {
        if (ud(p, nd(p, af, 1))) r = 1;
        else if (p.getPlaylistId()) r = 2;
        else break a;
        H(k, bf, 4, p);
        p = od(k, xe, 1) || new xe();
        m = od(p, we, 3) || new we();
        t = new ve();
        I(t, 2, l);
        K(t, 1, r);
        td(m, 12, ve, t);
        H(p, we, 3, m);
      }
    delete Aj[l];
    l = "visitorOnlyApprovedKey" === l;
    ck() || xd(k, 2, g);
    !l &&
      (r = S("EVENT_ID")) &&
      ((p = dk()), (m = new $e()), I(m, 1, r), xd(m, 2, p), H(k, $e, 5, m));
    Zj(d);
    if (T("jspb_serialize_with_worker")) {
      if (!qi)
        if ((r = S("WORKER_SERIALIZATION_URL"))) {
          if ((r = r.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)) {
            if (void 0 === ya)
              if (((p = null), (m = v.trustedTypes) && m.createPolicy)) {
                try {
                  p = m.createPolicy("goog#html", {
                    createHTML: ma,
                    createScript: ma,
                    createScriptURL: ma,
                  });
                } catch (J) {
                  v.console && v.console.error(J.message);
                }
                ya = p;
              } else ya = p;
            r = (p = ya) ? p.createScriptURL(r) : r;
            r = new Ca(r, Da);
          } else r = null;
          qi = r;
        } else qi = null;
      r = qi || void 0;
      pi ||
        void 0 === r ||
        (pi = new Worker(
          r instanceof Ca && r.constructor === Ca
            ? r.h
            : "type_error:TrustedResourceUrl",
          void 0
        ));
      if ((r = pi) && d.writeThenSend) {
        yj.set(xj, {
          client: b,
          resolve: c,
          networklessOptions: d,
          isIsolated: e,
          useVSSEndpoint: f,
          dangerousLogToVisitorSession: l,
          requestsOutstanding: h,
        });
        r.postMessage({
          op: "gelBatchToSerialize",
          batchRequest: k.toJSON(),
          clientEvents: n,
          key: xj,
        });
        xj++;
        break;
      }
    }
    if (n) {
      r = [];
      for (p = 0; p < n.length; p++)
        try {
          r.push(new P(n[p]));
        } catch (J) {
          Ef(new kf("Transport failed to deserialize " + String(n[p])));
        }
      n = r;
    } else n = [];
    for (const J of n) td(k, 3, P, J);
    n = { startTime: W(), ticks: {}, infos: {} };
    a: {
      Ac = !0;
      try {
        var D = JSON.stringify(k.toJSON(), Yc);
        break a;
      } finally {
        Ac = !1;
      }
      D = void 0;
    }
    k = D;
    n.ticks.geljspc = W();
    T("log_jspb_serialize_latency") &&
      0.001 > Math.random() &&
      ii("meta_logging_csi_event", { timerName: "gel_jspb_serialize", uc: n });
    ek(k, b, c, d, e, f, l, h);
  }
}
function ek(a, b, c, d = {}, e, f, g, h = { value: 0 }) {
  f = Wj(f);
  d = bk(
    d,
    g,
    (k) => {
      T("start_client_gcf") &&
        xg.h(() =>
          u(function* () {
            yield ak(k);
          })
        );
      h.value--;
      h.value || c();
    },
    () => {
      h.value--;
      h.value || c();
    },
    e
  );
  d.headers["Content-Type"] = "application/json+protobuf";
  d.postBodyFormat = "JSPB";
  d.postBody = a;
  wi(b, f, "", d);
  wj = !1;
}
function Zj(a) {
  T("always_send_and_write") && (a.writeThenSend = !1);
}
function bk(a, b, c, d, e) {
  a = {
    retry: !0,
    onSuccess: c,
    onError: d,
    networklessOptions: a,
    dangerousLogToVisitorSession: b,
    Xb: !!e,
    headers: {},
    postBodyFormat: "",
    postBody: "",
    compress: T("compress_gel") || T("compress_gel_lr"),
  };
  ck() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
  return a;
}
function Yj(a, b, c) {
  ck() || (a.requestTimeMs = String(b));
  T("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
  !c &&
    (b = S("EVENT_ID")) &&
    ((c = dk()),
    (a.serializedClientEventId = {
      serializedEventId: b,
      clientCounter: String(c),
    }));
}
function dk() {
  let a = S("BATCH_CLIENT_COUNTER") || 0;
  a || (a = Math.floor((Math.random() * nj) / 2));
  a++;
  a > nj && (a = 1);
  R("BATCH_CLIENT_COUNTER", a);
  return a;
}
function Xj(a, b, c) {
  let d;
  if (c.videoId) d = "VIDEO";
  else if (c.playlistId) d = "PLAYLIST";
  else return;
  a.credentialTransferTokenTargetId = c;
  a.context = a.context || {};
  a.context.user = a.context.user || {};
  a.context.user.credentialTransferTokens = [{ token: b, scope: d }];
}
function Ej() {
  var a;
  (a = w("yt.logging.transport.enableScrapingForTest")) ||
    ((a = Of("il_payload_scraping")),
    (a = "enable_il_payload_scraping" !== (void 0 !== a ? String(a) : "")));
  a ||
    ((fj = []),
    x("yt.logging.transport.enableScrapingForTest", !0),
    x("yt.logging.transport.scrapedPayloadsForTesting", fj),
    x(
      "yt.logging.transport.payloadToScrape",
      "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(
        " "
      )
    ),
    x("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
    x("yt.logging.transport.scrapeClientEvent", !0));
}
function ck() {
  return T("use_request_time_ms_header") || T("lr_use_request_time_ms_header");
}
function Qj(a, b) {
  return T("transport_use_scheduler")
    ? T("logging_avoid_blocking_during_navigation") ||
      T("lr_logging_avoid_blocking_during_navigation")
      ? rg(() => {
          "none" === cj().currentState
            ? a()
            : cj().install({ none: { callback: a } });
        }, b)
      : rg(a, b)
    : Sf(a, b);
}
function Uj(a) {
  T("transport_use_scheduler") ? xg.T(a) : window.clearTimeout(a);
}
function ak(a) {
  return u(function* () {
    var b,
      c =
        null == a
          ? void 0
          : null == (b = a.responseContext)
          ? void 0
          : b.globalConfigGroup;
    b = kj(c, je);
    const d = null == c ? void 0 : c.hotHashData,
      e = kj(c, ie);
    c = null == c ? void 0 : c.coldHashData;
    const f = Ki().resolve(new Ci());
    f &&
      (d && (b ? yield Sh(f, d, b) : yield Sh(f, d)),
      c && (e ? yield Th(f, c, e) : yield Th(f, c)));
  });
}
function Oj(a, b = 200) {
  return a ? (300 === b ? uj : sj) : 300 === b ? tj : rj;
}
function Hj(a) {
  if (T("enable_web_tiered_gel")) {
    a = ri[a || ""];
    var b, c;
    if (null == Ki().resolve(new Ci())) var d = void 0;
    else {
      var e = null != (d = w("yt.gcf.config.hotConfigGroup")) ? d : null;
      d =
        null == e
          ? void 0
          : null == (b = e.loggingHotConfig)
          ? void 0
          : null == (c = b.eventLoggingConfig)
          ? void 0
          : c.payloadPolicies;
    }
    if ((b = d))
      for (c = 0; c < b.length; c++) if (b[c].payloadNumber === a) return b[c];
  }
}
function Gj(a) {
  a = Object.keys(a);
  for (const b of a) if (ri[b]) return b;
}
function Ij(a) {
  switch (a) {
    case "DELAYED_EVENT_TIER_UNSPECIFIED":
      return 0;
    case "DELAYED_EVENT_TIER_DEFAULT":
      return 100;
    case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
      return 200;
    case "DELAYED_EVENT_TIER_FAST":
      return 300;
    case "DELAYED_EVENT_TIER_IMMEDIATE":
      return 400;
    default:
      return 200;
  }
}
function Lj(a) {
  return "gelDebuggingEvent" === a;
}
function Wj(a = !1) {
  return a && T("vss_through_gel_video_stats") ? "video_stats" : "log_event";
}
const fk = v.ytLoggingGelSequenceIdObj_ || {};
function gk(a, b, c, d = {}) {
  const e = {},
    f = Math.round(d.timestamp || W());
  e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
  e[a] = b;
  a = zi();
  e.context = { lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a) };
  d.sequenceGroup &&
    !T("web_gel_sequence_info_killswitch") &&
    ((a = e.context),
    (b = d.sequenceGroup),
    (b = { index: hk(b), groupKey: b }),
    (a.sequence = b),
    d.endOfSequence && delete fk[d.sequenceGroup]);
  (d.sendIsolatedPayload ? Jj : Dj)(
    {
      endpoint: "log_event",
      payload: e,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession,
    },
    c
  );
}
function ik(a = !1) {
  Pj(void 0, void 0, a);
}
function hk(a) {
  fk[a] = a in fk ? fk[a] + 1 : 0;
  return fk[a];
}
let jk = xi,
  kk = [];
function Y(a, b, c = {}) {
  let d = jk;
  S("ytLoggingEventsDefaultDisabled", !1) && jk === xi && (d = null);
  T("web_all_payloads_via_jspb") &&
    !c.timestamp &&
    ((c.lact = zi()), (c.timestamp = W()));
  gk(a, b, d, c);
}
const lk = v.ytLoggingGelSequenceIdObj_ || {};
function mk(a, b, c, d = {}) {
  var e = Math.round(d.timestamp || W());
  xd(b, 1, e < Number.MAX_SAFE_INTEGER ? e : 0);
  e = new Xe();
  if (d.lact) xd(e, 1, isFinite(d.lact) ? d.lact : -1);
  else if (d.timestamp) xd(e, 1, -1);
  else {
    var f = zi();
    xd(e, 1, isFinite(f) ? f : -1);
  }
  if (d.sequenceGroup && !T("web_gel_sequence_info_killswitch")) {
    f = d.sequenceGroup;
    const g = hk(f),
      h = new We();
    xd(h, 2, g);
    I(h, 1, f);
    H(e, We, 3, h);
    d.endOfSequence && delete lk[d.sequenceGroup];
  }
  H(b, Xe, 33, e);
  (d.sendIsolatedPayload ? Nj : Mj)(
    a,
    {
      endpoint: "log_event",
      payload: b,
      cttAuthInfo: d.cttAuthInfo,
      dangerousLogToVisitorSession: d.dangerousLogToVisitorSession,
    },
    c
  );
}
function nk(a, b, c = {}) {
  let d = !1;
  S("ytLoggingEventsDefaultDisabled", !1) && (d = !0);
  mk(a, b, d ? null : xi, c);
}
function ok(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
  sd(d, Ue, 72, Ye, a);
  c ? mk("visualElementShown", d, c, b) : nk("visualElementShown", d, b);
}
function pk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
  sd(d, Te, 73, Ye, a);
  c ? mk("visualElementHidden", d, c, b) : nk("visualElementHidden", d, b);
}
function qk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
  sd(d, Se, 78, Ye, a);
  c ? mk("visualElementGestured", d, c, b) : nk("visualElementGestured", d, b);
}
function rk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
  sd(d, Ve, 208, Ye, a);
  c
    ? mk("visualElementStateChanged", d, c, b)
    : nk("visualElementStateChanged", d, b);
}
function sk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
  sd(d, Pe, 156, Ye, a);
  c ? mk("screenCreated", d, c, b) : nk("screenCreated", d, b);
}
function tk(a, b, c) {
  const d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
  sd(d, Re, 215, Ye, a);
  c ? mk("visualElementAttached", d, c, b) : nk("visualElementAttached", d, b);
}
var uk = new Set(),
  vk = 0,
  wk = 0,
  xk = 0,
  yk = [];
const zk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];
function Ak(a) {
  Bk(a);
}
function Ck(a) {
  Bk(a, "WARNING");
}
function Bk(a, b = "ERROR") {
  var c = {};
  c.name = S("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
  c.version = S("INNERTUBE_CONTEXT_CLIENT_VERSION");
  Dk(a, c, b);
}
function Dk(a, b, c = "ERROR") {
  if (a) {
    a.hasOwnProperty("level") && a.level && (c = a.level);
    if (T("console_log_js_exceptions")) {
      var d = [];
      d.push(`Name: ${a.name}`);
      d.push(`Message: ${a.message}`);
      a.hasOwnProperty("params") &&
        d.push(`Error Params: ${JSON.stringify(a.params)}`);
      a.hasOwnProperty("args") &&
        d.push(`Error args: ${JSON.stringify(a.args)}`);
      d.push(`File name: ${a.fileName}`);
      d.push(`Stacktrace: ${a.stack}`);
      window.console.log(d.join("\n"), a);
    }
    if (!(5 <= vk)) {
      d = yk;
      var e = Ua(a);
      const m = e.message || "Unknown Error",
        r = e.name || "UnknownError";
      var f = e.stack || a.i || "Not available";
      if (f.startsWith(`${r}: ${m}`)) {
        var g = f.split("\n");
        g.shift();
        f = g.join("\n");
      }
      g = e.lineNumber || "Not available";
      e = e.fileName || "Not available";
      let p = 0;
      if (a.hasOwnProperty("args") && a.args && a.args.length)
        for (
          var h = 0;
          h < a.args.length &&
          !((p = ig(a.args[h], `params.${h}`, b, p)), 500 <= p);
          h++
        );
      else if (a.hasOwnProperty("params") && a.params) {
        const t = a.params;
        if ("object" === typeof a.params)
          for (h in t) {
            if (!t[h]) continue;
            const z = `params.${h}`,
              D = kg(t[h]);
            b[z] = D;
            p += z.length + D.length;
            if (500 < p) break;
          }
        else b.params = kg(t);
      }
      if (d.length)
        for (
          h = 0;
          h < d.length &&
          !((p = ig(d[h], `params.context.${h}`, b, p)), 500 <= p);
          h++
        );
      navigator.vendor &&
        !b.hasOwnProperty("vendor") &&
        (b["device.vendor"] = navigator.vendor);
      b = {
        message: m,
        name: r,
        lineNumber: g,
        fileName: e,
        stack: f,
        params: b,
        sampleWeight: 1,
      };
      d = Number(a.columnNumber);
      isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
      if ("IGNORED" === a.level) var k = 0;
      else
        a: {
          a = bg();
          for (k of a.F)
            if (b.message && b.message.match(k.Qa)) {
              k = k.weight;
              break a;
            }
          for (var l of a.D)
            if (l.callback(b)) {
              k = l.weight;
              break a;
            }
          k = 1;
        }
      b.sampleWeight = k;
      k = b;
      for (var n of Zf)
        if (n.V[k.name]) {
          l = n.V[k.name];
          for (const t of l)
            if ((l = k.message.match(t.u))) {
              k.params["params.error.original"] = l[0];
              a = t.groups;
              b = {};
              for (d = 0; d < a.length; d++)
                (b[a[d]] = l[d + 1]),
                  (k.params[`params.error.${a[d]}`] = l[d + 1]);
              k.message = n.ba(b);
              break;
            }
        }
      k.params || (k.params = {});
      n = bg();
      k.params[
        "params.errorServiceSignature"
      ] = `msg=${n.F.length}&cb=${n.D.length}`;
      k.params["params.serviceWorker"] = "true";
      v.document &&
        v.document.querySelectorAll &&
        (k.params["params.fscripts"] = String(
          document.querySelectorAll("script:not([nonce])").length
        ));
      Aa("sample").constructor !== za && (k.params["params.fconst"] = "true");
      window.yterr && "function" === typeof window.yterr && window.yterr(k);
      0 === k.sampleWeight || uk.has(k.message) || Ek(k, c);
    }
  }
}
function Ek(a, b = "ERROR") {
  if ("ERROR" === b) {
    fg.ea("handleError", a);
    if (T("record_app_crashed_web") && 0 === xk && 1 === a.sampleWeight)
      if ((xk++, T("errors_via_jspb"))) {
        var c = new He();
        c = K(c, 1, 1);
        if (!T("report_client_error_with_app_crash_ks")) {
          var d = new Ge();
          var e = new Fe();
          var f = new Ee();
          var g = new De();
          g = I(g, 1, a.message);
          f = H(f, De, 3, g);
          e = H(e, Ee, 5, f);
          d = H(d, Fe, 9, e);
          H(c, Ge, 4, d);
        }
        d = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
        sd(d, He, 20, Ye, c);
        nk("appCrashed", d);
      } else
        (c = { appCrashType: "APP_CRASH_TYPE_BREAKPAD" }),
          T("report_client_error_with_app_crash_ks") ||
            (c.systemHealth = {
              crashData: {
                clientError: { logMessage: { message: a.message } },
              },
            }),
          Y("appCrashed", c);
    wk++;
  } else "WARNING" === b && fg.ea("handleWarning", a);
  a: {
    if (T("errors_via_jspb")) {
      if (Fk()) var h = void 0;
      else {
        c = new Ae();
        I(c, 1, a.stack);
        a.fileName && I(c, 4, a.fileName);
        var k =
          a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        0 !== k.length &&
          (1 !== k.length || isNaN(Number(k[0]))
            ? 2 !== k.length ||
              isNaN(Number(k[0])) ||
              isNaN(Number(k[1])) ||
              (wd(c, 2, Number(k[0])), wd(c, 3, Number(k[1])))
            : wd(c, 2, Number(k[0])));
        k = new De();
        I(k, 1, a.message);
        I(k, 3, a.name);
        wd(k, 6, a.sampleWeight);
        "ERROR" === b ? K(k, 2, 2) : "WARNING" === b ? K(k, 2, 1) : K(k, 2, 0);
        var l = new Be();
        jd(l, 1, !0);
        sd(l, Ae, 3, Ce, c);
        c = new ze();
        I(c, 3, window.location.href);
        d = S("FEXP_EXPERIMENTS", []);
        for (f = 0; f < d.length; f++) {
          g = Oc(d[f]);
          e = c.o;
          const m = F(e);
          Ec(m);
          kd(e, m, 5, 2).push(g);
        }
        d = zf();
        if (!Af() && d)
          for (var n of Object.keys(d))
            (e = new ye()), I(e, 1, n), I(e, 2, String(d[n])), td(c, 4, ye, e);
        if ((n = a.params))
          for (h of Object.keys(n))
            (d = new ye()),
              I(d, 1, `client.${h}`),
              I(d, 2, String(n[h])),
              td(c, 4, ye, d);
        n = S("SERVER_NAME");
        h = S("SERVER_VERSION");
        n &&
          h &&
          ((d = new ye()),
          I(d, 1, "server.name"),
          I(d, 2, n),
          td(c, 4, ye, d),
          (n = new ye()),
          I(n, 1, "server.version"),
          I(n, 2, h),
          td(c, 4, ye, n));
        h = new Ee();
        H(h, ze, 1, c);
        H(h, Be, 2, l);
        H(h, De, 3, k);
      }
      if (!h) break a;
      n = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
      sd(n, Ee, 163, Ye, h);
      nk("clientError", n);
    } else {
      h = {};
      if (Fk()) h = void 0;
      else {
        c = { stackTrace: a.stack };
        a.fileName && (c.filename = a.fileName);
        n = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        0 !== n.length &&
          (1 !== n.length || isNaN(Number(n[0]))
            ? 2 !== n.length ||
              isNaN(Number(n[0])) ||
              isNaN(Number(n[1])) ||
              ((c.lineNumber = Number(n[0])), (c.columnNumber = Number(n[1])))
            : (c.lineNumber = Number(n[0])));
        n = {
          level: "ERROR_LEVEL_UNKNOWN",
          message: a.message,
          errorClassName: a.name,
          sampleWeight: a.sampleWeight,
        };
        "ERROR" === b
          ? (n.level = "ERROR_LEVEL_ERROR")
          : "WARNING" === b && (n.level = "ERROR_LEVEL_WARNNING");
        c = { isObfuscated: !0, browserStackInfo: c };
        h.pageUrl = window.location.href;
        h.kvPairs = [];
        S("FEXP_EXPERIMENTS") && (h.experimentIds = S("FEXP_EXPERIMENTS"));
        d = zf();
        if (!Af() && d)
          for (l of Object.keys(d))
            h.kvPairs.push({ key: l, value: String(d[l]) });
        if ((l = a.params))
          for (k of Object.keys(l))
            h.kvPairs.push({ key: `client.${k}`, value: String(l[k]) });
        k = S("SERVER_NAME");
        l = S("SERVER_VERSION");
        k &&
          l &&
          (h.kvPairs.push({ key: "server.name", value: k }),
          h.kvPairs.push({ key: "server.version", value: l }));
        h = { errorMetadata: h, stackTrace: c, logMessage: n };
      }
      if (!h) break a;
      Y("clientError", h);
    }
    if ("ERROR" === b || T("errors_flush_gel_always_killswitch"))
      b: {
        if (T("web_fp_via_jspb")) {
          b = kk;
          kk = [];
          if (b) for (const m of b) gk(m.N, m.payload, jk, m.options);
          ik(!0);
          if (!T("web_fp_via_jspb_and_json")) break b;
        }
        ik();
      }
  }
  try {
    uk.add(a.message);
  } catch (m) {}
  vk++;
}
function Fk() {
  for (const a of zk) {
    const b = Ia();
    if (b && 0 <= b.toLowerCase().indexOf(a.toLowerCase())) return !0;
  }
  return !1;
}
function Gk(a, ...b) {
  a.args || (a.args = []);
  a.args.push(...b);
}
function Hk(a) {
  return u(function* () {
    var b = yield v.fetch(a.i);
    if (200 !== b.status)
      return Promise.reject("Server error when retrieving AmbientData");
    b = yield b.text();
    if (!b.startsWith(")]}'\n"))
      return Promise.reject("Incorrect JSPB formatting");
    a: {
      b = JSON.parse(b.substring(5));
      for (let c = 0; c < b.length; c++)
        if ("yt.sw.adr" === b[c][0]) {
          b = new uf(b[c]);
          break a;
        }
      b = null;
    }
    return b ? b : Promise.reject("AmbientData missing from response");
  });
}
function Ik(a = !1) {
  const b = Jk.h;
  return u(function* () {
    if (a || !b.h)
      b.h = Hk(b)
        .then(b.j)
        .catch((c) => {
          delete b.h;
          Bk(c);
        });
    return b.h;
  });
}
var Jk = class {
  constructor() {
    this.i = Kk("/sw.js_data");
  }
  j(a) {
    const b = od(a, tf, 2);
    if (b) {
      var c = vd(b, 5);
      c && (v.__SAPISID = c);
      null != ud(b, 10)
        ? R("EOM_VISITOR_DATA", vd(b, 10))
        : null != ud(b, 7) && R("VISITOR_DATA", vd(b, 7));
      if (null != Nc(hd(b, 4))) {
        c = String;
        var d = Nc(hd(b, 4));
        R("SESSION_INDEX", c(null != d ? d : 0));
      }
      null != ud(b, 8) && R("DELEGATED_SESSION_ID", vd(b, 8));
      null != ud(b, 11) &&
        R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", vd(b, 11));
    }
    return a;
  }
};
function Lk(a, b) {
  b.encryptedTokenJarContents &&
    ((a.h[b.encryptedTokenJarContents] = b),
    "string" === typeof b.expirationSeconds &&
      setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents];
      }, 1e3 * Number(b.expirationSeconds)));
}
var Mk = class {
  constructor() {
    this.h = {};
  }
  handleResponse(a, b) {
    if (!b) throw Error("request needs to be passed into ConsistencyService");
    let c, d;
    b =
      (null == (c = b.H.context)
        ? void 0
        : null == (d = c.request)
        ? void 0
        : d.consistencyTokenJars) || [];
    let e;
    if (
      (a = null == (e = a.responseContext) ? void 0 : e.consistencyTokenJar)
    ) {
      for (const f of b) delete this.h[f.encryptedTokenJarContents];
      Lk(this, a);
    }
  }
};
let Nk = Date.now().toString();
function Ok() {
  const a = Array(16);
  for (var b = 0; 16 > b; b++) {
    var c = Date.now();
    for (let d = 0; d < c % 23; d++) a[b] = Math.random();
    a[b] = Math.floor(256 * Math.random());
  }
  if (Nk)
    for (b = 1, c = 0; c < Nk.length; c++)
      (a[b % 16] = a[b % 16] ^ (a[(b - 1) % 16] / 4) ^ Nk.charCodeAt(c)), b++;
  return a;
}
function Pk() {
  if (window.crypto && window.crypto.getRandomValues)
    try {
      const a = Array(16),
        b = new Uint8Array(16);
      window.crypto.getRandomValues(b);
      for (let c = 0; c < a.length; c++) a[c] = b[c];
      return a;
    } catch (a) {}
  return Ok();
}
let Qk = v.ytLoggingDocDocumentNonce_;
if (!Qk) {
  const a = Pk(),
    b = [];
  for (let c = 0; c < a.length; c++)
    b.push(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
        a[c] & 63
      )
    );
  Qk = b.join("");
}
var Rk = Qk;
var Sk = {
  ib: 0,
  fb: 1,
  hb: 2,
  Kb: 3,
  jb: 4,
  Tb: 5,
  Lb: 6,
  Rb: 7,
  Pb: 8,
  Qb: 9,
  0: "DEFAULT",
  1: "CHAT",
  2: "CONVERSATIONS",
  3: "MINIPLAYER",
  4: "DIALOG",
  5: "VOZ",
  6: "MUSIC_WATCH_TABS",
  7: "SHARE",
  8: "PUSH_NOTIFICATIONS",
  9: "RICH_GRID_WATCH",
};
let Tk = 1;
function Uk(a) {
  return new Vk({ trackingParams: a });
}
function Wk(a) {
  const b = Tk++;
  return new Vk({
    veType: a,
    veCounter: b,
    elementIndex: void 0,
    dataElement: void 0,
    youtubeData: void 0,
    jspbYoutubeData: void 0,
    loggingDirectives: void 0,
  });
}
var Vk = class {
  constructor(a) {
    this.h = a;
  }
  getAsJson() {
    const a = {};
    void 0 !== this.h.trackingParams
      ? (a.trackingParams = this.h.trackingParams)
      : ((a.veType = this.h.veType),
        void 0 !== this.h.veCounter && (a.veCounter = this.h.veCounter),
        void 0 !== this.h.elementIndex &&
          (a.elementIndex = this.h.elementIndex));
    void 0 !== this.h.dataElement &&
      (a.dataElement = this.h.dataElement.getAsJson());
    void 0 !== this.h.youtubeData && (a.youtubeData = this.h.youtubeData);
    this.h.isCounterfactual && (a.isCounterfactual = !0);
    return a;
  }
  getAsJspb() {
    const a = new Ie();
    if (void 0 !== this.h.trackingParams) {
      var b = this.h.trackingParams;
      if (null != b)
        if ("string" === typeof b) b = b ? new Zb(b, Vb) : Yb();
        else if (b.constructor !== Zb)
          if (Tb(b)) b = b.length ? new Zb(new Uint8Array(b), Vb) : Yb();
          else throw Error();
      jd(a, 1, b);
    } else
      void 0 !== this.h.veType && wd(a, 2, this.h.veType),
        void 0 !== this.h.veCounter && wd(a, 6, this.h.veCounter),
        void 0 !== this.h.elementIndex && wd(a, 3, this.h.elementIndex),
        this.h.isCounterfactual && jd(a, 5, !0);
    void 0 !== this.h.dataElement &&
      ((b = this.h.dataElement.getAsJspb()), H(a, Ie, 7, b));
    void 0 !== this.h.youtubeData && H(a, ne, 8, this.h.jspbYoutubeData);
    return a;
  }
  toString() {
    return JSON.stringify(this.getAsJson());
  }
  isClientVe() {
    return !this.h.trackingParams && !!this.h.veType;
  }
  getLoggingDirectives() {
    return this.h.loggingDirectives;
  }
};
function Xk(a = 0) {
  return S("client-screen-nonce-store", {})[a];
}
function Yk(a, b = 0) {
  let c = S("client-screen-nonce-store");
  c || ((c = {}), R("client-screen-nonce-store", c));
  c[b] = a;
}
function Zk(a = 0) {
  return 0 === a ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`;
}
function $k(a = 0) {
  return S(Zk(a));
}
function al(a = 0) {
  return (a = $k(a))
    ? new Vk({ veType: a, youtubeData: void 0, jspbYoutubeData: void 0 })
    : null;
}
function bl() {
  let a = S("csn-to-ctt-auth-info");
  a || ((a = {}), R("csn-to-ctt-auth-info", a));
  return a;
}
function cl() {
  return Object.values(S("client-screen-nonce-store", {})).filter(
    (a) => void 0 !== a
  );
}
function dl(a = 0) {
  a = Xk(a);
  if (!a && !S("USE_CSN_FALLBACK", !0)) return null;
  a || (a = "UNDEFINED_CSN");
  return a ? a : null;
}
function el(a) {
  for (const b of Object.values(Sk)) if (dl(b) === a) return !0;
  return !1;
}
function fl(a, b, c) {
  const d = bl();
  (c = dl(c)) && delete d[c];
  b && (d[a] = b);
}
function gl(a) {
  return bl()[a];
}
function hl(a, b, c = 0, d) {
  if (a !== Xk(c) || b !== S(Zk(c)))
    if (
      (fl(a, d, c),
      Yk(a, c),
      R(Zk(c), b),
      (b = () => {
        setTimeout(() => {
          if (a)
            if (T("web_time_via_jspb")) {
              const e = new Je();
              I(e, 1, Rk);
              I(e, 2, a);
              const f = T("jspb_sparse_encoded_pivot") ? new P([{}]) : new P();
              sd(f, Je, 111, Ye, e);
              nk("foregroundHeartbeatScreenAssociated", f);
            } else
              Y("foregroundHeartbeatScreenAssociated", {
                clientDocumentNonce: Rk,
                clientScreenNonce: a,
              });
        }, 0);
      }),
      "requestAnimationFrame" in window)
    )
      try {
        window.requestAnimationFrame(b);
      } catch (e) {
        b();
      }
    else b();
}
function il() {
  var a = S("INNERTUBE_CONTEXT");
  if (!a)
    return (
      Bk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {}
    );
  a = va(a);
  T("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
  a.client || (a.client = {});
  var b = a.client;
  b.utcOffsetMinutes = -Math.floor(new Date().getTimezoneOffset());
  var c = Qf();
  c ? (b.experimentsToken = c) : delete b.experimentsToken;
  Mk.h || (Mk.h = new Mk());
  b = Mk.h.h;
  c = [];
  let d = 0;
  for (var e in b) c[d++] = b[e];
  a.request = Object.assign({}, a.request, { consistencyTokenJars: c });
  a.user = Object.assign({}, a.user);
  if ((e = S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")))
    a.user.serializedDelegationContext = e;
  return a;
}
function jl(a) {
  var b = a;
  if ((a = S("INNERTUBE_HOST_OVERRIDE"))) {
    a = String(a);
    var c = String,
      d = b.match(Oa);
    b = d[5];
    var e = d[6];
    d = d[7];
    var f = "";
    b && (f += b);
    e && (f += "?" + e);
    d && (f += "#" + d);
    b = a + c(f);
  }
  return b;
}
var kl = class {};
const ll = {
  GET_DATASYNC_IDS: (function (a) {
    return () => new a();
  })(class extends kl {}),
};
function ml(a = !0) {
  a = a ? Pk() : Ok();
  const b = [];
  for (let c = 0; c < a.length; c++)
    b.push(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
        a[c] & 63
      )
    );
  return b.join("");
}
x("ytLoggingLatencyUsageStats_", v.ytLoggingLatencyUsageStats_ || {});
const nl = window;
class ol {
  constructor() {
    this.timing = {};
    this.clearResourceTimings = () => {};
    this.webkitClearResourceTimings = () => {};
    this.mozClearResourceTimings = () => {};
    this.msClearResourceTimings = () => {};
    this.oClearResourceTimings = () => {};
  }
}
var pl =
  nl.performance ||
  nl.mozPerformance ||
  nl.msPerformance ||
  nl.webkitPerformance ||
  new ol();
ka(
  pl.clearResourceTimings ||
    pl.webkitClearResourceTimings ||
    pl.mozClearResourceTimings ||
    pl.msClearResourceTimings ||
    pl.oClearResourceTimings ||
    oa,
  pl
);
const ql = [
  "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse",
];
function rl(a) {
  var b = { Zb: {} },
    c = lg();
  if (void 0 !== Fi.h) {
    const d = Fi.h;
    a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
    if (a.some((e) => e))
      throw new kf("InnerTubeTransportService is already initialized", a);
  } else Fi.h = new Fi(b, a, c);
}
function sl(a, b) {
  return u(function* () {
    var c,
      d = {
        sessionIndex:
          null == a ? void 0 : null == (c = a.la) ? void 0 : c.sessionIndex,
      };
    c = yield ob(ng(0, d));
    return Promise.resolve(Object.assign({}, tl(b), c));
  });
}
function ul(a, b, c) {
  return u(function* () {
    var d;
    if (null == b ? 0 : null == (d = b.H) ? 0 : d.context) {
      d = b.H.context;
      for (var e of []) yield e.ic(d);
    }
    var f;
    if (null == (f = a.i) ? 0 : f.pc(b.input, b.H))
      return yield a.i.dc(b.input, b.H);
    var g;
    if (
      (f = null == (g = b.config) ? void 0 : g.lc) &&
      a.h.has(f) &&
      T("web_memoize_inflight_requests")
    )
      var h = a.h.get(f);
    else {
      g = JSON.stringify(b.H);
      let m;
      e = null != (m = null == (h = b.P) ? void 0 : h.headers) ? m : {};
      b.P = Object.assign({}, b.P, { headers: Object.assign({}, e, c) });
      h = Object.assign({}, b.P);
      "POST" === b.P.method && (h = Object.assign({}, h, { body: g }));
      h = a.l.fetch(b.input, h, b.config);
      f && a.h.set(f, h);
    }
    h = yield h;
    var k;
    let l;
    if (
      h &&
      "error" in h &&
      (null == (k = h) ? 0 : null == (l = k.error) ? 0 : l.details)
    ) {
      k = h.error.details;
      for (const m of k)
        (k = m["@type"]) && -1 < ql.indexOf(k) && (delete m["@type"], (h = m));
    }
    f && a.h.has(f) && a.h.delete(f);
    let n;
    !h &&
      (null == (n = a.i) ? 0 : n.Yb(b.input, b.H)) &&
      (h = yield a.i.cc(b.input, b.H));
    return h || void 0;
  });
}
function vl(a, b, c) {
  var d = { la: { identity: og } };
  b.context || (b.context = il());
  return new A((e) =>
    u(function* () {
      var f = jl(c);
      f = Nf(f) ? "same-origin" : "cors";
      if (a.j.Xa) {
        var g,
          h = null == d ? void 0 : null == (g = d.la) ? void 0 : g.sessionIndex;
        g = ng(0, { sessionIndex: h });
        f = Object.assign({}, tl(f), g);
      } else f = yield sl(d, f);
      g = jl(c);
      h = {};
      (S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") &&
        (null == f ? 0 : f.Authorization)) ||
        (h.key = S("INNERTUBE_API_KEY"));
      T("json_condensed_response") && (h.prettyPrint = "false");
      g = Mf(g, h || {}, !1);
      h = {
        method: "POST",
        mode: Nf(g) ? "same-origin" : "cors",
        credentials: Nf(g) ? "same-origin" : "include",
      };
      var k = {};
      const l = {};
      for (const n of Object.keys(k)) k[n] && (l[n] = k[n]);
      0 < Object.keys(l).length && (h.headers = l);
      e(ul(a, { input: g, P: h, H: b, config: d }, f));
    })
  );
}
function tl(a) {
  const b = { "Content-Type": "application/json" };
  S("EOM_VISITOR_DATA")
    ? (b["X-Goog-EOM-Visitor-Id"] = S("EOM_VISITOR_DATA"))
    : S("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = S("VISITOR_DATA"));
  S("WEBVIEW_EOM", !1) && (b["X-Yt-Webview-Eom"] = "1");
  b["X-Youtube-Bootstrap-Logged-In"] = S("LOGGED_IN", !1);
  S("DEBUG_SETTINGS_METADATA") &&
    (b["X-Debug-Settings-Metadata"] = S("DEBUG_SETTINGS_METADATA"));
  "cors" !== a &&
    ((a = S("INNERTUBE_CONTEXT_CLIENT_NAME")) &&
      (b["X-Youtube-Client-Name"] = a),
    (a = S("INNERTUBE_CONTEXT_CLIENT_VERSION")) &&
      (b["X-Youtube-Client-Version"] = a),
    (a = S("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a),
    (a = S("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
  return b;
}
var Fi = class {
  constructor(a, b, c) {
    this.m = a;
    this.l = b;
    this.j = c;
    this.i = void 0;
    this.h = new Map();
    a.fa || (a.fa = {});
    a.fa = Object.assign({}, ll, a.fa);
  }
};
var Ei = new Bi();
let wl;
function xl() {
  if (!wl) {
    const a = Ki();
    rl({ fetch: (b, c) => ob(fetch(new Request(b, c))) });
    Di(a);
    wl = a.resolve(Ei);
  }
  return wl;
}
function yl(a) {
  return u(function* () {
    yield zl();
    Ck(a);
  });
}
function Al(a) {
  return u(function* () {
    yield zl();
    Bk(a);
  });
}
function Bl(a) {
  u(function* () {
    var b = yield Bh();
    b
      ? yield vi(a, b)
      : (yield Ik(),
        (b = { timestamp: a.timestamp }),
        (b = a.appShellAssetLoadReport
          ? {
              N: "appShellAssetLoadReport",
              payload: a.appShellAssetLoadReport,
              options: b,
            }
          : a.clientError
          ? { N: "clientError", payload: a.clientError, options: b }
          : void 0),
        b && Y(b.N, b.payload));
  });
}
function zl() {
  return u(function* () {
    try {
      yield Ik();
    } catch (a) {}
  });
}
class di extends bi {
  constructor(a) {
    super(arguments);
    this.csn = a;
  }
}
const li = new ci(),
  Cl = [];
let El = Dl,
  Fl = 0;
const Gl = new Map(),
  Hl = new Map(),
  Il = new Map();
function Jl(a, b, c, d, e, f, g, h) {
  const k = El(),
    l = new Vk({ veType: b, youtubeData: f, jspbYoutubeData: void 0 });
  f = Kl({}, k);
  e && (f.cttAuthInfo = e);
  var n = () => {
    Ck(new kf("newScreen() parent element does not have a VE - rootVe", b));
  };
  if (T("il_via_jspb")) {
    e = Oe(new Pe().h(k), l.getAsJspb());
    c && c.visualElement
      ? ((n = new Ne()),
        c.clientScreenNonce && I(n, 2, c.clientScreenNonce),
        Me(n, c.visualElement.getAsJspb()),
        g && K(n, 4, Ze[g]),
        H(e, Ne, 5, n))
      : c && n();
    d && I(e, 3, d);
    if (T("expectation_logging") && h && h.screenCreatedLoggingExpectations) {
      c = new me();
      h = h.screenCreatedLoggingExpectations.expectedParentScreens || [];
      for (var m of h)
        m.screenVeType && ((h = ke(new le(), m.screenVeType)), td(c, 1, le, h));
      H(e, me, 7, c);
    }
    sk(e, f, a);
  } else
    (m = { csn: k, pageVe: l.getAsJson() }),
      T("expectation_logging") &&
        h &&
        h.screenCreatedLoggingExpectations &&
        (m.screenCreatedLoggingExpectations =
          h.screenCreatedLoggingExpectations),
      c && c.visualElement
        ? ((m.implicitGesture = {
            parentCsn: c.clientScreenNonce,
            gesturedVe: c.visualElement.getAsJson(),
          }),
          g && (m.implicitGesture.gestureType = g))
        : c && n(),
      d && (m.cloneCsn = d),
      a ? gk("screenCreated", m, a, f) : Y("screenCreated", m, f);
  ii(li, new di(k));
  Gl.clear();
  Hl.clear();
  Il.clear();
  return k;
}
function Ll(a, b, c, d, e = !1) {
  Ml(a, b, c, [d], e);
}
function Ml(a, b, c, d, e = !1) {
  const f = Kl({ cttAuthInfo: gl(b) || void 0 }, b);
  for (const h of d) {
    var g = h.getAsJson();
    (ua(g) || (!g.trackingParams && !g.veType)) &&
      Ck(Error("Child VE logged with no data"));
    if (T("no_client_ve_attach_unless_shown")) {
      const k = Nl(h, b);
      if (g.veType && !Hl.has(k) && !Il.has(k) && !e) {
        Gl.set(k, [a, b, c, h]);
        return;
      }
      g = Nl(c, b);
      Gl.has(g) ? Ol(c, b) : Il.set(g, !0);
    }
  }
  d = d.filter((h) => {
    h.csn !== b ? ((h.csn = b), (h = !0)) : (h = !1);
    return h;
  });
  if (T("il_via_jspb")) {
    const h = Qe(new Re().h(b), c.getAsJspb());
    ra(d, (k) => {
      k = k.getAsJspb();
      td(h, 3, Ie, k);
    });
    "UNDEFINED_CSN" === b
      ? Z("visualElementAttached", f, void 0, h)
      : tk(h, f, a);
  } else
    (c = {
      csn: b,
      parentVe: c.getAsJson(),
      childVes: ra(d, (h) => h.getAsJson()),
    }),
      "UNDEFINED_CSN" === b
        ? Z("visualElementAttached", f, c)
        : a
        ? gk("visualElementAttached", c, a, f)
        : Y("visualElementAttached", c, f);
}
function Pl(a, b, c, d, e, f) {
  Ql(a, b, c, e, f);
}
function Ql(a, b, c, d, e) {
  Rl(c, b);
  const f = Kl({ cttAuthInfo: gl(b) || void 0 }, b);
  T("il_via_jspb")
    ? ((d = new Ue().h(b)),
      (c = c.getAsJspb()),
      (c = H(d, Ie, 2, c)),
      (c = K(c, 4, 1)),
      e && H(c, Le, 3, e),
      "UNDEFINED_CSN" === b
        ? Z("visualElementShown", f, void 0, c)
        : ok(c, f, a))
    : ((e = { csn: b, ve: c.getAsJson(), eventType: 1 }),
      d && (e.clientData = d),
      "UNDEFINED_CSN" === b
        ? Z("visualElementShown", f, e)
        : a
        ? gk("visualElementShown", e, a, f)
        : Y("visualElementShown", e, f));
}
function Sl(a, b, c, d = !1) {
  var e = d ? 16 : 8;
  const f = Kl({ cttAuthInfo: gl(b) || void 0, endOfSequence: d }, b);
  T("il_via_jspb")
    ? ((e = new Te().h(b)),
      (c = c.getAsJspb()),
      (c = H(e, Ie, 2, c)),
      K(c, 4, d ? 16 : 8),
      "UNDEFINED_CSN" === b
        ? Z("visualElementHidden", f, void 0, c)
        : pk(c, f, a))
    : ((d = { csn: b, ve: c.getAsJson(), eventType: e }),
      "UNDEFINED_CSN" === b
        ? Z("visualElementHidden", f, d)
        : a
        ? gk("visualElementHidden", d, a, f)
        : Y("visualElementHidden", d, f));
}
function Tl(a, b, c, d) {
  var e = void 0;
  Rl(c, b);
  e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
  const f = Kl({ cttAuthInfo: gl(b) || void 0 }, b);
  T("il_via_jspb")
    ? ((d = new Se().h(b)),
      (c = c.getAsJspb()),
      (c = H(d, Ie, 2, c)),
      K(c, 4, Ze[e]),
      "UNDEFINED_CSN" === b
        ? Z("visualElementGestured", f, void 0, c)
        : qk(c, f, a))
    : ((e = { csn: b, ve: c.getAsJson(), gestureType: e }),
      d && (e.clientData = d),
      "UNDEFINED_CSN" === b
        ? Z("visualElementGestured", f, e)
        : a
        ? gk("visualElementGestured", e, a, f)
        : Y("visualElementGestured", e, f));
}
function Dl() {
  if (T("enable_web_96_bit_csn")) var a = ml();
  else if (T("enable_web_96_bit_csn_no_crypto")) a = ml(!1);
  else {
    a = Math.random() + "";
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    a = Ib(b, 3);
  }
  return a;
}
function Z(a, b, c, d) {
  Cl.push({ N: a, payload: c, I: d, options: b });
  Fl || (Fl = mi());
}
function ni(a) {
  if (Cl) {
    for (const b of Cl)
      if (T("il_via_jspb") && b.I)
        switch ((b.I.h(a.csn), b.N)) {
          case "screenCreated":
            sk(b.I, b.options);
            break;
          case "visualElementAttached":
            tk(b.I, b.options);
            break;
          case "visualElementShown":
            ok(b.I, b.options);
            break;
          case "visualElementHidden":
            pk(b.I, b.options);
            break;
          case "visualElementGestured":
            qk(b.I, b.options);
            break;
          case "visualElementStateChanged":
            rk(b.I, b.options);
            break;
          default:
            Ck(new kf("flushQueue unable to map payloadName to JSPB setter"));
        }
      else b.payload && ((b.payload.csn = a.csn), Y(b.N, b.payload, b.options));
    Cl.length = 0;
  }
  Fl = 0;
}
function Nl(a, b) {
  return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`;
}
function Rl(a, b) {
  if (T("no_client_ve_attach_unless_shown")) {
    var c = Nl(a, b);
    Hl.set(c, !0);
    Ol(a, b);
  }
}
function Ol(a, b) {
  a = Nl(a, b);
  Gl.has(a) &&
    ((b = Gl.get(a) || []), Ll(b[0], b[1], b[2], b[3], !0), Gl.delete(a));
}
function Kl(a, b) {
  T("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
  return a;
}
function Ul() {
  Vl.h || (Vl.h = new Vl());
  return Vl.h;
}
function Wl(a, b, c) {
  const d = dl(c);
  return null === a.csn || d === a.csn || c
    ? d
    : ((a = new kf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d,
      })),
      Ck(a),
      null);
}
function Xl(a) {
  return (
    Math.floor(
      Number(
        (a.data &&
          a.data.loggingDirectives &&
          a.data.loggingDirectives.visibility &&
          a.data.loggingDirectives.visibility.types) ||
          ""
      )
    ) || 1
  );
}
var Vl = class {
  constructor() {
    this.m = new Set();
    this.l = new Set();
    this.h = new Map();
    this.client = void 0;
    this.csn = null;
  }
  j(a) {
    this.client = a;
  }
  s() {
    this.clear();
    this.csn = dl();
  }
  clear() {
    this.m.clear();
    this.l.clear();
    this.h.clear();
    this.csn = null;
  }
  G(a, b, c) {
    b = this.i(a);
    var d = a.visualElement ? a.visualElement : b,
      e = this.m.has(d),
      f = this.h.get(d);
    this.m.add(d);
    this.h.set(d, !0);
    a.impressionLog && !e && a.impressionLog();
    if (b || a.visualElement)
      if ((c = Wl(this, a, c))) {
        var g = !(!a.data || !a.data.loggingDirectives);
        if (Xl(a) || g) {
          d = a.visualElement ? a.visualElement : Uk(b);
          var h = a.interactionLoggingClientData;
          b = a.interactionLoggingClientDataJspbType;
          g || e
            ? Xl(a) & 4
              ? f ||
                ((a = this.client),
                Rl(d, c),
                (e = Kl({ cttAuthInfo: gl(c) || void 0 }, c)),
                T("il_via_jspb")
                  ? ((f = new Ue().h(c)),
                    (d = d.getAsJspb()),
                    (f = H(f, Ie, 2, d)),
                    (f = K(f, 4, 4)),
                    b && H(f, Le, 3, b),
                    "UNDEFINED_CSN" === c
                      ? Z("visualElementShown", e, void 0, f)
                      : ok(f, e, a))
                  : ((b = { csn: c, ve: d.getAsJson(), eventType: 4 }),
                    h && (b.clientData = h),
                    "UNDEFINED_CSN" === c
                      ? Z("visualElementShown", e, b)
                      : a
                      ? gk("visualElementShown", b, a, e)
                      : Y("visualElementShown", b, e)))
              : Xl(a) & 1 && !e && Ql(this.client, c, d, h, b)
            : Ql(this.client, c, d, h, b);
        }
      }
  }
  A(a, b, c) {
    var d = this.i(a),
      e = a.visualElement ? a.visualElement : d;
    b = this.l.has(e);
    const f = this.h.get(e);
    this.l.add(e);
    this.h.set(e, !1);
    if (!1 === f) return !0;
    if (!d && !a.visualElement) return !1;
    c = Wl(this, a, c);
    if (!c || (!Xl(a) && a.data && a.data.loggingDirectives)) return !1;
    d = a.visualElement ? a.visualElement : Uk(d);
    Xl(a) & 8
      ? Sl(this.client, c, d)
      : Xl(a) & 2 &&
        !b &&
        ((a = this.client),
        (b = Kl({ cttAuthInfo: gl(c) || void 0 }, c)),
        T("il_via_jspb")
          ? ((e = new Te().h(c)),
            (d = d.getAsJspb()),
            (d = H(e, Ie, 2, d)),
            (d = K(d, 4, 2)),
            "UNDEFINED_CSN" === c
              ? Z("visualElementHidden", b, void 0, d)
              : pk(d, b, a))
          : ((d = { csn: c, ve: d.getAsJson(), eventType: 2 }),
            "UNDEFINED_CSN" === c
              ? Z("visualElementHidden", b, d)
              : a
              ? gk("visualElementHidden", d, a, b)
              : Y("visualElementHidden", d, b)));
    return !0;
  }
  i(a) {
    let b;
    const c = a.data || (null == (b = a.props) ? void 0 : b.data);
    let d, e;
    if (
      T("il_use_view_model_logging_context") &&
      (null == c
        ? 0
        : null == (d = c.context)
        ? 0
        : null == (e = d.loggingContext)
        ? 0
        : e.loggingDirectives)
    )
      return c.context.loggingContext.loggingDirectives.trackingParams || "";
    if (null == c ? 0 : c.loggingDirectives)
      return c.loggingDirectives.trackingParams || "";
    let f;
    return (null == (f = a.veContainer) ? 0 : f.trackingParams)
      ? a.veContainer.trackingParams
      : (null == c ? void 0 : c.trackingParams) || "";
  }
};
function Yl() {
  Zl.h || (Zl.h = new Zl());
}
function $l(a) {
  Yl();
  Df(Ul().G).bind(Ul())(a, void 0, 8);
}
function am(a) {
  Yl();
  Df(Ul().A).bind(Ul())(a, void 0, 8);
}
var Zl = class {
  j(a) {
    Df(Ul().j).bind(Ul())(a);
  }
  clear() {
    Df(Ul().clear).bind(Ul())();
  }
};
function bm() {
  cm.h || (cm.h = new cm());
  return cm.h;
}
function dm(a, b, c = {}) {
  a.i.add(c.layer || 0);
  a.m = () => {
    em(a, b, c);
    const d = al(c.layer);
    if (d) {
      for (const e of a.G) fm(a, e[0], e[1] || d, c.layer);
      for (const e of a.ha) gm(a, e[0], e[1]);
    }
  };
  dl(c.layer) || a.m();
  if (c.na) for (const d of c.na) hm(a, d, c.layer);
  else Bk(Error("Delayed screen needs a data promise."));
}
function em(a, b, c = {}) {
  var d = void 0;
  c.layer || (c.layer = 0);
  d = void 0 !== c.Ra ? c.Ra : c.layer;
  const e = dl(d);
  d = al(d);
  let f;
  d &&
    (void 0 !== c.parentCsn
      ? (f = { clientScreenNonce: c.parentCsn, visualElement: d })
      : e &&
        "UNDEFINED_CSN" !== e &&
        (f = { clientScreenNonce: e, visualElement: d }));
  let g;
  const h = S("EVENT_ID");
  "UNDEFINED_CSN" === e &&
    h &&
    (g = { servletData: { serializedServletEventId: h } });
  T("combine_ve_grafts") && e && im(a, e);
  T("no_client_ve_attach_unless_shown") && d && e && Ol(d, e);
  let k;
  try {
    k = Jl(a.client, b, f, c.ma, c.cttAuthInfo, g, c.bc, c.loggingExpectations);
  } catch (m) {
    Gk(m, { mc: b, rootVe: d, hc: void 0, ac: e, fc: f, ma: c.ma });
    Bk(m);
    return;
  }
  hl(k, b, c.layer, c.cttAuthInfo);
  e && "UNDEFINED_CSN" !== e && d && !el(e) && Sl(a.client, e, d, !0);
  a.h[a.h.length - 1] &&
    !a.h[a.h.length - 1].csn &&
    (a.h[a.h.length - 1].csn = k || "");
  Yl();
  Df(Ul().s).bind(Ul())();
  const l = al(c.layer);
  e &&
    "UNDEFINED_CSN" !== e &&
    l &&
    (T("web_mark_root_visible") || T("music_web_mark_root_visible")) &&
    Df(Pl)(void 0, k, l, void 0, void 0, void 0);
  a.i.delete(c.layer || 0);
  a.m = void 0;
  let n;
  null == (n = a.za.get(c.layer)) ||
    n.forEach((m, r) => {
      m ? fm(a, r, m, c.layer) : l && fm(a, r, l, c.layer);
    });
  jm(a);
}
function km(a) {
  var b = 28631,
    c = { layer: 8 };
  Df(() => {
    [28631].includes(b) ||
      (Ck(new kf("createClientScreen() called with a non-page VE", b)),
      (b = 83769));
    c.isHistoryNavigation || a.h.push({ rootVe: b, key: c.key || "" });
    a.G = [];
    a.ha = [];
    c.na ? dm(a, b, c) : em(a, b, c);
  })();
}
function hm(a, b, c = 0) {
  Df(() => {
    b.then((d) => {
      a.i.has(c) && a.m && a.m();
      const e = dl(c),
        f = al(c);
      if (e && f) {
        var g;
        (null == d ? 0 : null == (g = d.response) ? 0 : g.trackingParams) &&
          Ll(a.client, e, f, Uk(d.response.trackingParams));
        var h;
        (null == d
          ? 0
          : null == (h = d.playerResponse)
          ? 0
          : h.trackingParams) &&
          Ll(a.client, e, f, Uk(d.playerResponse.trackingParams));
      }
    });
  })();
}
function fm(a, b, c, d = 0) {
  Df(() => {
    if (a.i.has(d)) return a.G.push([b, c]), !0;
    const e = dl(d),
      f = c || al(d);
    if (e && f) {
      if (T("combine_ve_grafts")) {
        const g = a.l.get(f.toString());
        g ? g.push(b) : (a.A.set(f.toString(), f), a.l.set(f.toString(), [b]));
        a.ja ||
          (a.ja = rg(() => {
            im(a, e);
          }, 1200));
      } else Ll(a.client, e, f, b);
      return !0;
    }
    return !1;
  })();
}
function lm(a, b) {
  return Df(() => {
    const c = Uk(b);
    fm(a, c, void 0, 8);
    return c;
  })();
}
function im(a, b) {
  if (void 0 === b) {
    const c = cl();
    for (let d = 0; d < c.length; d++) void 0 !== c[d] && im(a, c[d]);
  } else
    a.l.forEach((c, d) => {
      (d = a.A.get(d)) && Ml(a.client, b, d, c);
    }),
      a.l.clear(),
      a.A.clear(),
      (a.ja = void 0);
}
function mm(a, b, c = 0) {
  (c = dl(c)) && Tl(a.client, c, b);
}
function nm(a, b, c, d = 0) {
  if (!b) return !1;
  d = dl(d);
  if (!d) return !1;
  Tl(a.client, d, Uk(b), c);
  return !0;
}
function om(a, b) {
  const c = b.getScreenLayer && b.getScreenLayer();
  b.visualElement
    ? mm(a, b.visualElement, c)
    : (Yl(), (b = Df(Ul().i).bind(Ul())(b)), nm(a, b, void 0, c));
}
function gm(a, b, c, d = 0) {
  const e = dl(d);
  d = b || al(d);
  e &&
    d &&
    ((a = a.client),
    (b = Kl({ cttAuthInfo: gl(e) || void 0 }, e)),
    T("il_via_jspb")
      ? ((c = new Ve()),
        c.h(e),
        (d = d.getAsJspb()),
        H(c, Ie, 2, d),
        "UNDEFINED_CSN" === e
          ? Z("visualElementStateChanged", b, void 0, c)
          : rk(c, b, a))
      : ((c = { csn: e, ve: d.getAsJson(), clientData: c }),
        "UNDEFINED_CSN" === e
          ? Z("visualElementStateChanged", b, c)
          : a
          ? gk("visualElementStateChanged", c, a, b)
          : Y("visualElementStateChanged", c, b)));
}
function jm(a) {
  for (var b = 0; b < a.s.length; b++) {
    var c = a.s[b];
    try {
      c();
    } catch (d) {
      Bk(d);
    }
  }
  a.s.length = 0;
  for (b = 0; b < a.ia.length; b++) {
    c = a.ia[b];
    try {
      c();
    } catch (d) {
      Bk(d);
    }
  }
}
var cm = class {
  constructor() {
    this.G = [];
    this.ha = [];
    this.h = [];
    this.s = [];
    this.ia = [];
    this.l = new Map();
    this.A = new Map();
    this.i = new Set();
    this.za = new Map();
  }
  j(a) {
    this.client = a;
  }
  clickCommand(a, b, c = 0) {
    return nm(this, a.clickTrackingParams, b, c);
  }
  stateChanged(a, b, c = 0) {
    this.visualElementStateChanged(Uk(a), b, c);
  }
  visualElementStateChanged(a, b, c = 0) {
    0 === c && this.i.has(c) ? this.ha.push([a, b]) : gm(this, a, b, c);
  }
};
const pm = { granted: "GRANTED", denied: "DENIED", unknown: "UNKNOWN" },
  qm = RegExp("^(?:[a-z]+:)?//", "i");
function rm(a) {
  var b = a.data;
  a = b.type;
  b = b.data;
  "notifications_register" === a
    ? (Q("IDToken", b), sm())
    : "notifications_check_registration" === a && tm(b);
}
function um() {
  return self.clients
    .matchAll({ type: "window", includeUncontrolled: !0 })
    .then((a) => {
      if (a)
        for (const b of a)
          b.postMessage({ type: "update_unseen_notifications_count_signal" });
    });
}
function vm(a) {
  const b = [];
  a.forEach((c) => {
    b.push({ key: c.key, value: c.value });
  });
  return b;
}
function wm(a) {
  return u(function* () {
    const b = vm(a.payload.chrome.extraUrlParams),
      c = {
        recipientId: a.recipientId,
        endpoint: a.payload.chrome.endpoint,
        extraUrlParams: b,
      },
      d = sf(ef);
    return xm().then((e) =>
      vl(e, c, d).then((f) => {
        f.json()
          .then((g) =>
            g && g.endpointUrl ? ym(a, g.endpointUrl) : Promise.resolve()
          )
          .catch((g) => {
            Al(g);
            Promise.reject(g);
          });
      })
    );
  });
}
function zm(a, b) {
  var c = dl(8);
  if (null == c || !b) return a;
  a = qm.test(a) ? new URL(a) : new URL(a, self.registration.scope);
  a.searchParams.set("parentCsn", c);
  a.searchParams.set("parentTrackingParams", b);
  return a.toString();
}
function ym(a, b) {
  a.deviceId && Q("DeviceId", a.deviceId);
  a.timestampSec && Q("TimestampLowerBound", a.timestampSec);
  const c = a.payload.chrome,
    d = bm();
  km(d);
  var e;
  const f = null == (e = c.postedEndpoint) ? void 0 : e.clickTrackingParams;
  e = c.title;
  const g = {
    body: c.body,
    icon: c.iconUrl,
    data: {
      nav: zm(b, f),
      id: c.notificationId,
      attributionTag: c.attributionTag,
      clickEndpoint: c.clickEndpoint,
      postedEndpoint: c.postedEndpoint,
      clickTrackingParams: f,
      isDismissed: !0,
    },
    tag: c.notificationTag || c.title + c.body + c.iconUrl,
    requireInteraction: !0,
  };
  return self.registration
    .showNotification(e, g)
    .then(() => {
      var h;
      (null == (h = g.data) ? 0 : h.postedEndpoint) &&
        Am(g.data.postedEndpoint);
      let k;
      if (null == (k = g.data) ? 0 : k.clickTrackingParams)
        (h = {
          screenLayer: 8,
          visualElement: lm(d, g.data.clickTrackingParams),
        }),
          $l(h);
      Bm(a.displayCap);
    })
    .catch(() => {});
}
function Am(a) {
  if (!kj(a, df)) return Promise.reject();
  const b = {
      serializedRecordNotificationInteractionsRequest: kj(a, df)
        .serializedInteractionsRequest,
    },
    c = sf(ff);
  return xm()
    .then((d) => vl(d, b, c))
    .then((d) => d);
}
function Bm(a) {
  -1 !== a &&
    self.registration.getNotifications().then((b) => {
      for (let d = 0; d < b.length - a; d++) {
        b[d].data.isDismissed = !1;
        b[d].close();
        let e;
        if (null == (e = b[d].data) ? 0 : e.clickTrackingParams) {
          let f;
          var c = Uk(null == (f = b[d].data) ? void 0 : f.clickTrackingParams);
          const g = { screenLayer: 8, visualElement: c },
            h = Wk(82046),
            k = bm();
          fm(k, h, c, 8);
          c = { screenLayer: 8, visualElement: h };
          $l(c);
          om(k, c);
          am(g);
        }
      }
    });
}
function tm(a) {
  const b = [Cm(a), of("RegistrationTimestamp").then(Dm), Em(), Fm(), Gm()];
  Promise.all(b).catch(() => {
    Q("IDToken", a);
    sm();
    return Promise.resolve();
  });
}
function Dm(a) {
  return 9e7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject();
}
function Cm(a) {
  return of("IDToken").then((b) =>
    a === b ? Promise.resolve() : Promise.reject()
  );
}
function Em() {
  return of("Permission").then((a) =>
    Notification.permission === a ? Promise.resolve() : Promise.reject()
  );
}
function Fm() {
  return of("Endpoint").then((a) =>
    Hm().then((b) => (a === b ? Promise.resolve() : Promise.reject()))
  );
}
function Gm() {
  return of("application_server_key").then((a) =>
    Im().then((b) => (a === b ? Promise.resolve() : Promise.reject()))
  );
}
function Jm() {
  var a = Notification.permission;
  if (pm[a]) return pm[a];
}
function sm() {
  Q("RegistrationTimestamp", 0);
  Promise.all([Hm(), Km(), Lm(), Im()])
    .then(([a, b, c, d]) => {
      b = b ? hf(b) : null;
      c = c ? hf(c) : null;
      d = d ? Ib(new Uint8Array(d), 4) : null;
      Mm(a, b, c, d);
    })
    .catch(() => {
      Mm();
    });
}
function Mm(a = null, b = null, c = null, d = null) {
  nf().then((e) => {
    e &&
      (Q("Endpoint", a),
      Q("P256dhKey", b),
      Q("AuthKey", c),
      Q("application_server_key", d),
      Q("Permission", Notification.permission),
      Promise.all([of("DeviceId"), of("NotificationsDisabled")]).then(
        ([f, g]) => {
          if (null != f) var h = f;
          else {
            f = [];
            var k;
            h = h || ge.length;
            for (k = 0; 256 > k; k++) f[k] = ge[0 | (Math.random() * h)];
            h = f.join("");
          }
          Nm(
            h,
            null != a ? a : void 0,
            null != b ? b : void 0,
            null != c ? c : void 0,
            null != d ? d : void 0,
            null != g ? g : void 0
          );
        }
      ));
  });
}
function Nm(a, b, c, d, e, f) {
  u(function* () {
    const g = {
        notificationRegistration: {
          chromeRegistration: {
            deviceId: a,
            pushParams: {
              applicationServerKey: e,
              authKey: d,
              p256dhKey: c,
              browserEndpoint: b,
            },
            notificationsDisabledInApp: f,
            permission: Jm(),
          },
        },
      },
      h = sf(gf);
    return xm().then((k) =>
      vl(k, g, h).then(
        () => {
          Q("DeviceId", a);
          Q("RegistrationTimestamp", Date.now());
          Q("TimestampLowerBound", Date.now());
        },
        (l) => {
          yl(l);
        }
      )
    );
  });
}
function Hm() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) => (a ? Promise.resolve(a.endpoint) : Promise.resolve(null)));
}
function Km() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a && a.getKey
        ? Promise.resolve(a.getKey("p256dh"))
        : Promise.resolve(null)
    );
}
function Lm() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null)
    );
}
function Im() {
  return self.registration.pushManager
    .getSubscription()
    .then((a) =>
      a
        ? Promise.resolve(a.options.applicationServerKey)
        : Promise.resolve(null)
    );
}
function xm() {
  return u(function* () {
    try {
      return yield Ik(!0), xl();
    } catch (a) {
      return yield yl(a), Promise.reject(a);
    }
  });
}
let Om = self.location.origin + "/";
function Kk(a) {
  let b =
    "undefined" !== typeof ServiceWorkerGlobalScope &&
    self instanceof ServiceWorkerGlobalScope
      ? $d.registration.scope
      : Om;
  b.endsWith("/") && (b = b.slice(0, -1));
  return b + a;
}
let Pm = void 0;
function Qm(a) {
  return u(function* () {
    Pm || (Pm = yield a.open("yt-appshell-assets"));
    return Pm;
  });
}
function Rm(a, b) {
  return u(function* () {
    const c = yield Qm(a),
      d = b.map((e) => Sm(c, e));
    return Promise.all(d);
  });
}
function Tm(a, b) {
  return u(function* () {
    let c;
    try {
      c = yield a.match(b, { cacheName: "yt-appshell-assets" });
    } catch (d) {}
    return c;
  });
}
function Um(a, b) {
  return u(function* () {
    const c = yield Qm(a),
      d = (yield c.keys())
        .filter((e) => !b.includes(e.url))
        .map((e) => c.delete(e));
    return Promise.all(d);
  });
}
function Vm(a, b, c) {
  return u(function* () {
    yield (yield Qm(a)).put(b, c);
  });
}
function Wm(a, b) {
  u(function* () {
    yield (yield Qm(a)).delete(b);
  });
}
function Sm(a, b) {
  return u(function* () {
    return (yield a.match(b)) ? Promise.resolve() : a.add(b);
  });
}
var Xm = Kh("yt-serviceworker-metadata", {
  M: { auth: { L: 1 }, ["resource-manifest-assets"]: { L: 2 } },
  X: !0,
  upgrade(a, b) {
    b(1) && ah(a, "resource-manifest-assets");
    b(2) && ah(a, "auth");
  },
  version: 2,
});
let Ym = null;
function Zm(a) {
  return rh(Xm(), a);
}
function $m() {
  return u(function* () {
    const a = yield Bh();
    if (a) return an.h || (an.h = new an(a)), an.h;
  });
}
function bn(a, b) {
  return u(function* () {
    yield X(
      yield Zm(a.token),
      ["resource-manifest-assets"],
      "readwrite",
      (c) => {
        const d = c.objectStore("resource-manifest-assets"),
          e = Date.now();
        return V(d.h.put(b, e)).then(() => {
          Ym = e;
          let f = !0;
          return fh(
            d,
            { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
            (g) =>
              f
                ? ((f = !1), g.advance(5))
                : d.delete(g.getKey()).then(() => g.continue())
          );
        });
      }
    );
  });
}
function cn(a, b) {
  return u(function* () {
    let c = !1,
      d = 0;
    yield X(yield Zm(a.token), ["resource-manifest-assets"], "readonly", (e) =>
      fh(
        e.objectStore("resource-manifest-assets"),
        { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
        (f) => {
          if (f.J().includes(b)) c = !0;
          else return (d += 1), f.continue();
        }
      )
    );
    return c ? d : -1;
  });
}
function dn(a) {
  return u(function* () {
    Ym ||
      (yield X(
        yield Zm(a.token),
        ["resource-manifest-assets"],
        "readonly",
        (b) =>
          fh(
            b.objectStore("resource-manifest-assets"),
            { query: IDBKeyRange.bound(0, Date.now()), direction: "prev" },
            (c) => {
              Ym = c.getKey();
            }
          )
      ));
    return Ym;
  });
}
var an = class {
  constructor(a) {
    this.token = a;
  }
};
function en() {
  return u(function* () {
    const a = yield Bh();
    if (a) return fn.h || (fn.h = new fn(a)), fn.h;
  });
}
function gn(a, b) {
  return u(function* () {
    yield ch(yield Zm(a.token), "auth", b, "shell_identifier_key");
  });
}
function hn(a) {
  return u(function* () {
    return (
      (yield (yield Zm(a.token)).get("auth", "shell_identifier_key")) || ""
    );
  });
}
function jn(a) {
  return u(function* () {
    yield (yield Zm(a.token)).clear("auth");
  });
}
var fn = class {
  constructor(a) {
    this.token = a;
  }
};
function kn() {
  u(function* () {
    const a = yield en();
    a && (yield jn(a));
  });
}
var rd = class extends L {
    constructor(a) {
      super(a);
    }
    hasUrl() {
      return null != ud(this, 1);
    }
  },
  ln = [0, Od];
var mn = class extends L {
  constructor(a) {
    super(a);
  }
};
mn.v = [1];
var nn = (function (a, b) {
  return (c, d) => {
    a: {
      if (oc.length) {
        const f = oc.pop();
        kc(f, d);
        f.h.init(c, void 0, void 0, d);
        c = f;
      } else c = new nc(c, d);
      try {
        const f = new a(),
          g = f.o;
        Ad(b)(g, c);
        Hc && delete g[Hc];
        var e = f;
        break a;
      } finally {
        c.h.clear(), (c.l = -1), (c.i = -1), 100 > oc.length && oc.push(c);
      }
      e = void 0;
    }
    return e;
  };
})(mn, [0, Pd, ln]);
function on(a) {
  return u(function* () {
    const b = a.headers.get("X-Resource-Manifest");
    return b
      ? Promise.resolve(pn(b))
      : Promise.reject(Error("No resource manifest header"));
  });
}
function pn(a) {
  return qd(nn(decodeURIComponent(a))).reduce((b, c) => {
    (c = vd(c, 1)) && b.push(c);
    return b;
  }, []);
}
function qn(a) {
  return u(function* () {
    const b = yield Ik();
    if (b && null != ud(b, 3)) {
      var c = yield en();
      c && ((c = yield hn(c)), ud(b, 3) !== c && (Wm(a.caches, a.h), kn()));
    }
  });
}
function rn(a) {
  return u(function* () {
    let b, c;
    try {
      (c = yield sn(a.i)), (b = yield on(c)), yield Rm(a.caches, b);
    } catch (d) {
      return Promise.reject(d);
    }
    try {
      yield tn(), yield Vm(a.caches, a.h, c);
    } catch (d) {
      return Promise.reject(d);
    }
    if (b)
      try {
        yield un(a, b, a.h);
      } catch (d) {}
    return Promise.resolve();
  });
}
function vn(a) {
  return u(function* () {
    yield qn(a);
    return rn(a);
  });
}
function sn(a) {
  return u(function* () {
    try {
      return yield v.fetch(new Request(a));
    } catch (b) {
      return Promise.reject(b);
    }
  });
}
function tn() {
  return u(function* () {
    var a = yield Ik();
    let b;
    a && null != ud(a, 3) && (b = vd(a, 3));
    return b
      ? (a = yield en())
        ? Promise.resolve(gn(a, b))
        : Promise.reject(Error("Could not get AuthMonitor instance"))
      : Promise.reject(Error("Could not get datasync ID"));
  });
}
function un(a, b, c) {
  return u(function* () {
    const d = yield $m();
    if (d)
      try {
        yield bn(d, b);
      } catch (e) {
        yield yl(e);
      }
    b.push(c);
    try {
      yield Um(a.caches, b);
    } catch (e) {
      yield yl(e);
    }
    return Promise.resolve();
  });
}
function wn(a, b) {
  return u(function* () {
    return Tm(a.caches, b);
  });
}
function xn(a) {
  return u(function* () {
    return Tm(a.caches, a.h);
  });
}
var yn = class {
  constructor() {
    var a = self.caches;
    let b = Kk("/app_shell");
    T("service_worker_forward_exp_params") && (b += self.location.search);
    var c = Kk("/app_shell_home");
    this.caches = a;
    this.i = b;
    this.h = c;
  }
};
var zn = class {
  constructor() {
    const a = this;
    this.stream = new ReadableStream({
      start(b) {
        a.close = () => void b.close();
        a.h = (c) => {
          const d = c.getReader();
          return d.read().then(function h({ done: f, value: g }) {
            if (f) return Promise.resolve();
            b.enqueue(g);
            return d.read().then(h);
          });
        };
        a.i = () => {
          const c = new TextEncoder().encode(
            "<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>"
          );
          b.enqueue(c);
        };
      },
    });
  }
};
function An(a, b) {
  return u(function* () {
    const c = b.request,
      d = yield wn(a.h, c.url);
    if (d)
      return (
        Bl({
          appShellAssetLoadReport: { assetPath: c.url, cacheHit: !0 },
          timestamp: W(),
        }),
        d
      );
    Bn(c);
    return Cn(b);
  });
}
function Dn(a, b) {
  return u(function* () {
    const c = yield En(b);
    if (
      c.response &&
      (c.response.ok ||
        "opaqueredirect" === c.response.type ||
        429 === c.response.status ||
        303 === c.response.status ||
        (300 <= c.response.status && 400 > c.response.status))
    )
      return c.response;
    const d = yield xn(a.h);
    if (d) return Fn(a), Gn(d, b);
    Hn(a);
    return c.response ? c.response : Promise.reject(c.error);
  });
}
function In(a, b) {
  b = new URL(b);
  if (!a.config.ka.includes(b.pathname)) return !1;
  if (!b.search) return !0;
  b = new URLSearchParams(b.search);
  for (const c of a.config.Ca)
    if (((a = b.get(c.key)), void 0 === c.value || a === c.value))
      if ((b.delete(c.key), !b.toString())) return !0;
  return !1;
}
function Jn(a, b) {
  return u(function* () {
    const c = yield xn(a.h);
    if (!c) return Hn(a), Cn(b);
    Fn(a);
    var d;
    a: {
      if (
        c.headers &&
        (d = c.headers.get("date")) &&
        ((d = Date.parse(d)), !isNaN(d))
      ) {
        d = Math.round(W() - d);
        break a;
      }
      d = -1;
    }
    if (!(-1 < d && 7 <= d / 864e5)) return Gn(c, b);
    d = yield En(b);
    return d.response && d.response.ok ? d.response : Gn(c, b);
  });
}
function Cn(a) {
  return Promise.resolve(a.preloadResponse).then((b) =>
    b && !Kn(b) ? b : v.fetch(a.request)
  );
}
function Bn(a) {
  const b = { assetPath: a.url, cacheHit: !1 };
  $m().then((c) => {
    if (c) {
      var d = dn(c).then((e) => {
        e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1e3)));
      });
      c = cn(c, a.url).then((e) => {
        b.appBundleVersionDiffCount = e;
      });
      Promise.all([d, c])
        .catch((e) => {
          yl(e);
        })
        .finally(() => {
          Bl({ appShellAssetLoadReport: b, timestamp: W() });
        });
    } else Bl({ appShellAssetLoadReport: b, timestamp: W() });
  });
}
function Fn(a) {
  Bl({
    appShellAssetLoadReport: { assetPath: a.h.h, cacheHit: !0 },
    timestamp: W(),
  });
}
function Hn(a) {
  Bl({
    appShellAssetLoadReport: { assetPath: a.h.h, cacheHit: !1 },
    timestamp: W(),
  });
}
function Gn(a, b) {
  if (!T("sw_nav_preload_pbj")) return a;
  const c = new zn(),
    d = c.h(a.body);
  Promise.resolve(b.preloadResponse)
    .then((e) => {
      if (!e || !Kn(e)) throw Error("no pbj preload response available");
      d.then(() => c.h(e.body)).then(() => void c.close());
    })
    .catch(() => {
      d.then(() => {
        c.i();
        c.close();
      });
    });
  return new Response(c.stream, {
    status: a.status,
    statusText: a.statusText,
    headers: a.headers,
  });
}
function En(a) {
  return u(function* () {
    try {
      return { response: yield Cn(a) };
    } catch (b) {
      return { error: b };
    }
  });
}
function Kn(a) {
  return "pbj" === a.headers.get("x-navigation-preload-response-type");
}
var Tn = class {
  constructor() {
    var a = Ln;
    var b = {
      Ga: Mn,
      Ta: Nn([On, /\/signin/, /\/logout/]),
      ka: ["/", "/feed/downloads"],
      Ca: Pn([{ key: "feature", value: "ytca" }]),
      Ba: Qn(T("kevlar_sw_app_wide_fallback") ? Rn : Sn),
    };
    this.h = a;
    this.config = b;
  }
};
const Un = /^\/$/,
  Sn = [Un, /^\/feed\/downloads$/],
  Rn = [
    Un,
    /^\/feed\/\w*/,
    /^\/results$/,
    /^\/playlist$/,
    /^\/watch$/,
    /^\/channel\/\w*/,
  ];
function Qn(a) {
  return new RegExp(a.map((b) => b.source).join("|"));
}
const Vn = /^https:\/\/([\w-]*\.)*youtube\.com.*/;
function Nn(a) {
  a = Qn(a);
  return new RegExp(`${Vn.source}(${a.source})`);
}
const Wn = Qn([
    /\.css$/,
    /\.js$/,
    /\.ico$/,
    /\/ytmweb\/_\/js\//,
    /\/ytmweb\/_\/ss\//,
    /\/kabuki\/_\/js\//,
    /\/kabuki\/_\/ss\//,
    /\/ytmainappweb\/_\/ss\//,
  ]),
  Mn = new RegExp(`${Vn.source}(${Wn.source})`),
  On = /purge_shell=1/;
function Pn(a = []) {
  const b = [];
  for (const c of Uf) b.push({ key: c });
  for (const c of a) b.push(c);
  return b;
}
Nn([On]);
Pn();
var Yn = class {
  constructor() {
    var a = Ln,
      b = Xn;
    this.h = self;
    this.i = a;
    this.m = b;
    this.G = jf;
  }
  init() {
    this.h.oninstall = this.s.bind(this);
    this.h.onactivate = this.j.bind(this);
    this.h.onfetch = this.l.bind(this);
    this.h.onmessage = this.A.bind(this);
  }
  s(a) {
    this.h.skipWaiting();
    const b = vn(this.i).catch((c) => {
      yl(c);
      return Promise.resolve();
    });
    a.waitUntil(b);
  }
  j(a) {
    const b = [this.h.clients.claim()],
      c = this.h.registration;
    c.navigationPreload &&
      (b.push(c.navigationPreload.enable()),
      T("sw_nav_preload_pbj") &&
        b.push(c.navigationPreload.setHeaderValue("pbj")));
    a.waitUntil(Promise.all(b));
  }
  l(a) {
    const b = this;
    return u(function* () {
      var c = b.m,
        d = !!b.h.registration.navigationPreload;
      const e = a.request;
      if (c.config.Ta.test(e.url))
        Jk.h &&
          (delete Jk.h.h,
          (v.__SAPISID = void 0),
          R("VISITOR_DATA", void 0),
          R("SESSION_INDEX", void 0),
          R("DELEGATED_SESSION_ID", void 0),
          R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", void 0)),
          (d = a.respondWith),
          (c = c.h),
          Wm(c.caches, c.h),
          kn(),
          (c = Cn(a)),
          d.call(a, c);
      else if (c.config.Ga.test(e.url)) a.respondWith(An(c, a));
      else if ("navigate" === e.mode) {
        const f = new URL(e.url),
          g = c.config.ka;
        (
          !T("sw_nav_request_network_first") && g.includes(f.pathname)
            ? 0
            : c.config.Ba.test(f.pathname)
        )
          ? a.respondWith(Dn(c, a))
          : In(c, e.url)
          ? a.respondWith(Jn(c, a))
          : d && a.respondWith(Cn(a));
      }
    });
  }
  A(a) {
    const b = a.data;
    this.G.includes(b.type)
      ? rm(a)
      : "refresh_shell" === b.type &&
        rn(this.i).catch((c) => {
          yl(c);
        });
  }
};
function Zn() {
  let a = w("ytglobal.storage_");
  a || ((a = new $n()), x("ytglobal.storage_", a));
  return a;
}
var $n = class {
  estimate() {
    return u(function* () {
      const a = navigator;
      let b;
      if (null == (b = a.storage) ? 0 : b.estimate) return a.storage.estimate();
      let c;
      if (null == (c = a.webkitTemporaryStorage) ? 0 : c.queryUsageAndQuota)
        return ao();
    });
  }
};
function ao() {
  const a = navigator;
  return new Promise((b, c) => {
    let d;
    null != (d = a.webkitTemporaryStorage) && d.queryUsageAndQuota
      ? a.webkitTemporaryStorage.queryUsageAndQuota(
          (e, f) => {
            b({ usage: e, quota: f });
          },
          (e) => {
            c(e);
          }
        )
      : c(Error("webkitTemporaryStorage is not supported."));
  });
}
x("ytglobal.storageClass_", $n);
function bo(a, b) {
  Zn()
    .estimate()
    .then((c) => {
      c = Object.assign({}, b, {
        isSw: void 0 === self.document,
        isIframe: self !== self.top,
        deviceStorageUsageMbytes: co(null == c ? void 0 : c.usage),
        deviceStorageQuotaMbytes: co(null == c ? void 0 : c.quota),
      });
      a.h("idbQuotaExceeded", c);
    });
}
class eo {
  constructor() {
    var a = fo;
    this.handleError = go;
    this.h = a;
    this.i = !1;
    void 0 === self.document ||
      self.addEventListener("beforeunload", () => {
        this.i = !0;
      });
    this.j =
      Math.random() <=
      Pf("ytidb_transaction_ended_event_rate_limit_session", 0.2);
  }
  U(a, b) {
    switch (a) {
      case "IDB_DATA_CORRUPTED":
        T("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
        break;
      case "IDB_UNEXPECTEDLY_CLOSED":
        this.h("idbUnexpectedlyClosed", b);
        break;
      case "IS_SUPPORTED_COMPLETED":
        T("idb_is_supported_completed_killswitch") ||
          this.h("idbIsSupportedCompleted", b);
        break;
      case "QUOTA_EXCEEDED":
        bo(this, b);
        break;
      case "TRANSACTION_ENDED":
        this.j &&
          Math.random() <=
            Pf("ytidb_transaction_ended_event_rate_limit_transaction", 0.1) &&
          this.h("idbTransactionEnded", b);
        break;
      case "TRANSACTION_UNEXPECTEDLY_ABORTED":
        (a = Object.assign({}, b, { hasWindowUnloaded: this.i })),
          this.h("idbTransactionAborted", a);
    }
  }
}
function co(a) {
  return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576));
}
eg(bg(), { F: [{ Qa: /Failed to fetch/, weight: 500 }], D: [] });
var { handleError: go = Ak, U: fo = Y } = {
  handleError: Al,
  U: function (a, b) {
    return u(function* () {
      yield zl();
      Y(a, b);
    });
  },
};
for (zg = new eo(); 0 < yg.length; ) {
  const a = yg.shift();
  switch (a.type) {
    case "ERROR":
      zg.handleError(a.payload);
      break;
    case "EVENT":
      zg.U(a.eventType, a.payload);
  }
}
Jk.h = new Jk();
self.onnotificationclick = function (a) {
  a.notification.close();
  const b = a.notification.data;
  b.isDismissed = !1;
  const c = self.clients.matchAll({ type: "window", includeUncontrolled: !0 });
  c.then((d) => {
    a: {
      var e = b.nav;
      for (const f of d)
        if (f.url === e) {
          f.focus();
          break a;
        }
      self.clients.openWindow(e);
    }
  });
  a.waitUntil(c);
  a.waitUntil(Am(b.clickEndpoint));
};
self.onnotificationclose = function (a) {
  var b = a.notification.data;
  if (null == b ? 0 : b.clickTrackingParams) {
    var c = Uk(b.clickTrackingParams);
    a = { screenLayer: 8, visualElement: c };
    if (b.isDismissed) {
      const d = Wk(74726);
      b = bm();
      fm(b, d, c, 8);
      c = { screenLayer: 8, visualElement: d };
      $l(c);
      om(b, c);
    }
    am(a);
  }
};
self.onpush = function (a) {
  a.waitUntil(
    of("NotificationsDisabled").then((b) => {
      if (b) return Promise.resolve();
      if (a.data && a.data.text().length)
        try {
          return wm(a.data.json());
        } catch (c) {
          return Promise.resolve(c.message);
        }
      return Promise.resolve();
    })
  );
  a.waitUntil(um());
};
self.onpushsubscriptionchange = function () {
  sm();
};
const Ln = new yn(),
  Xn = new Tn();
new Yn().init();
