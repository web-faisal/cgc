(function (g) {
  var window = this;
  ("use strict");
  var $7 = function (a) {
      g.ro(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(Math.floor(2147483648 * Math.random()) ^ g.ib()).toString(36)
      );
      return a;
    },
    a8 = function (a, b, c) {
      Array.isArray(c) || (c = [String(c)]);
      g.wga(a.B, b, c);
    },
    Lvb = function (a) {
      if (a instanceof g.ts) return a;
      if ("function" == typeof a.Bk) return a.Bk(!1);
      if (g.Za(a)) {
        var b = 0,
          c = new g.ts();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return g.E2;
            if (b in a) return g.us(a[b++]);
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    Mvb = function (a, b, c) {
      if (g.Za(a)) g.$b(a, b, c);
      else
        for (a = Lvb(a); ; ) {
          var d = a.next();
          if (d.done) break;
          b.call(c, d.value, void 0, a);
        }
    },
    Nvb = function (a, b) {
      var c = [];
      Mvb(
        b,
        function (d) {
          try {
            var e = g.Ou.prototype.B.call(this, d, !0);
          } catch (f) {
            if ("Storage: Invalid value was encountered" == f) return;
            throw f;
          }
          void 0 === e ? c.push(d) : g.kla(e) && c.push(d);
        },
        a
      );
      return c;
    },
    Ovb = function (a, b) {
      Nvb(a, b).forEach(function (c) {
        g.Ou.prototype.remove.call(this, c);
      }, a);
    },
    Pvb = function (a) {
      if (a.ma) {
        if (a.ma.locationOverrideToken)
          return { locationOverrideToken: a.ma.locationOverrideToken };
        if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7)
          return { latitudeE7: a.ma.latitudeE7, longitudeE7: a.ma.longitudeE7 };
      }
      return null;
    },
    Qvb = function (a, b) {
      g.Db(a, b) || a.push(b);
    },
    Rvb = function (a) {
      var b = 0,
        c;
      for (c in a) b++;
      return b;
    },
    Svb = function (a, b) {
      return g.gd(a, b);
    },
    Tvb = function (a) {
      try {
        return g.Sa.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    b8 = function (a) {
      if (g.Sa.JSON)
        try {
          return g.Sa.JSON.parse(a);
        } catch (b) {}
      return Tvb(a);
    },
    Uvb = function (a, b, c, d) {
      var e = new g.jo(null);
      a && g.ko(e, a);
      b && g.lo(e, b);
      c && g.mo(e, c);
      d && (e.C = d);
      return e;
    },
    Vvb = function () {
      this.j = c8();
      this.j.Tl("/client_streamz/youtube/living_room/mdx/channel/opened", {
        Xf: 3,
        Wf: "channel_type",
      });
    },
    Wvb = function (a, b) {
      a.j.Im("/client_streamz/youtube/living_room/mdx/channel/opened", b);
    },
    Xvb = function () {
      this.j = c8();
      this.j.Tl("/client_streamz/youtube/living_room/mdx/channel/closed", {
        Xf: 3,
        Wf: "channel_type",
      });
    },
    Yvb = function (a, b) {
      a.j.Im("/client_streamz/youtube/living_room/mdx/channel/closed", b);
    },
    Zvb = function () {
      this.j = c8();
      this.j.Tl(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        { Xf: 3, Wf: "channel_type" }
      );
    },
    $vb = function (a, b) {
      a.j.Im(
        "/client_streamz/youtube/living_room/mdx/channel/message_received",
        b
      );
    },
    awb = function () {
      this.j = c8();
      this.j.Tl("/client_streamz/youtube/living_room/mdx/channel/error", {
        Xf: 3,
        Wf: "channel_type",
      });
    },
    bwb = function (a, b) {
      a.j.Im("/client_streamz/youtube/living_room/mdx/channel/error", b);
    },
    cwb = function () {
      this.j = c8();
      this.j.Tl(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps"
      );
    },
    dwb = function () {
      this.j = c8();
      this.j.Tl(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps"
      );
    },
    d8 = function (a) {
      this.name = this.id = "";
      this.clientName = "UNKNOWN_INTERFACE";
      this.app = "";
      this.type = "REMOTE_CONTROL";
      this.obfuscatedGaiaId = this.avatar = this.username = "";
      this.capabilities = new Set();
      this.compatibleSenderThemes = new Set();
      this.experiments = new Set();
      this.theme = "u";
      new g.wu();
      this.model = this.brand = "";
      this.year = 0;
      this.chipset = this.osVersion = this.os = "";
      this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
      a &&
        ((this.id = a.id || a.name),
        (this.name = a.name),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.app = a.app),
        (this.type = a.type || "REMOTE_CONTROL"),
        (this.username = a.user || ""),
        (this.avatar = a.userAvatarUri || ""),
        (this.obfuscatedGaiaId = a.obfuscatedGaiaId || ""),
        (this.theme = a.theme || "u"),
        ewb(this, a.capabilities || ""),
        fwb(this, a.compatibleSenderThemes || ""),
        gwb(this, a.experiments || ""),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"),
        (a = a.deviceInfo)) &&
        ((a = JSON.parse(a)),
        (this.brand = a.brand || ""),
        (this.model = a.model || ""),
        (this.year = a.year || 0),
        (this.os = a.os || ""),
        (this.osVersion = a.osVersion || ""),
        (this.chipset = a.chipset || ""),
        (this.clientName = a.clientName
          ? a.clientName.toUpperCase()
          : "UNKNOWN_INTERFACE"),
        (this.mdxDialServerType =
          a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN"));
    },
    ewb = function (a, b) {
      a.capabilities.clear();
      g.ys(b.split(","), g.gb(Svb, hwb)).forEach(function (c) {
        a.capabilities.add(c);
      });
    },
    fwb = function (a, b) {
      a.compatibleSenderThemes.clear();
      g.ys(b.split(","), g.gb(Svb, iwb)).forEach(function (c) {
        a.compatibleSenderThemes.add(c);
      });
    },
    gwb = function (a, b) {
      a.experiments.clear();
      b.split(",").forEach(function (c) {
        a.experiments.add(c);
      });
    },
    e8 = function (a) {
      a = a || {};
      this.name = a.name || "";
      this.id = a.id || a.screenId || "";
      this.token = a.token || a.loungeToken || "";
      this.uuid = a.uuid || a.dialId || "";
      this.idType = a.screenIdType || "normal";
    },
    f8 = function (a, b) {
      return !!b && (a.id == b || a.uuid == b);
    },
    jwb = function (a) {
      return {
        name: a.name,
        screenId: a.id,
        loungeToken: a.token,
        dialId: a.uuid,
        screenIdType: a.idType,
      };
    },
    kwb = function (a) {
      return new e8(a);
    },
    lwb = function (a) {
      return Array.isArray(a) ? g.eq(a, kwb) : [];
    },
    g8 = function (a) {
      return a
        ? '{name:"' +
            a.name +
            '",id:' +
            a.id.substr(0, 6) +
            "..,token:" +
            ((a.token ? ".." + a.token.slice(-6) : "-") +
              ",uuid:" +
              (a.uuid ? ".." + a.uuid.slice(-6) : "-") +
              ",idType:" +
              a.idType +
              "}")
        : "null";
    },
    mwb = function (a) {
      return Array.isArray(a) ? "[" + g.eq(a, g8).join(",") + "]" : "null";
    },
    nwb = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (a) {
          var b = (16 * Math.random()) | 0;
          return ("x" == a ? b : (b & 3) | 8).toString(16);
        }
      );
    },
    owb = function (a) {
      return g.eq(a, function (b) {
        return { key: b.id, name: b.name };
      });
    },
    pwb = function (a, b) {
      return g.Bb(a, function (c) {
        return c || b ? (!c != !b ? !1 : c.id == b.id) : !0;
      });
    },
    h8 = function (a, b) {
      return g.Bb(a, function (c) {
        return f8(c, b);
      });
    },
    qwb = function () {
      var a = (0, g.XC)();
      a && Ovb(a, a.j.Bk(!0));
    },
    i8 = function () {
      var a = g.ZC("yt-remote-connected-devices") || [];
      g.Xb(a);
      return a;
    },
    rwb = function (a) {
      if (0 == a.length) return [];
      var b = a[0].indexOf("#"),
        c = -1 == b ? a[0] : a[0].substring(0, b);
      return g.eq(a, function (d, e) {
        return 0 == e ? d : d.substring(c.length);
      });
    },
    swb = function (a) {
      g.YC("yt-remote-connected-devices", a, 86400);
    },
    j8 = function () {
      if (twb) return twb;
      var a = g.ZC("yt-remote-device-id");
      a || ((a = nwb()), g.YC("yt-remote-device-id", a, 31536e3));
      for (var b = i8(), c = 1, d = a; g.Db(b, d); ) c++, (d = a + "#" + c);
      return (twb = d);
    },
    uwb = function () {
      var a = i8(),
        b = j8();
      g.aD() && g.Zb(a, b);
      a = rwb(a);
      if (0 == a.length)
        try {
          g.Jna("remote_sid");
        } catch (c) {}
      else
        try {
          g.pC("remote_sid", a.join(","), -1);
        } catch (c) {}
    },
    vwb = function () {
      return g.ZC("yt-remote-session-browser-channel");
    },
    wwb = function () {
      return g.ZC("yt-remote-local-screens") || [];
    },
    xwb = function () {
      g.YC("yt-remote-lounge-token-expiration", !0, 86400);
    },
    ywb = function (a) {
      5 < a.length && (a = a.slice(a.length - 5));
      var b = g.eq(wwb(), function (d) {
          return d.loungeToken;
        }),
        c = g.eq(a, function (d) {
          return d.loungeToken;
        });
      g.fq(c, function (d) {
        return !g.Db(b, d);
      }) && xwb();
      g.YC("yt-remote-local-screens", a, 31536e3);
    },
    k8 = function (a) {
      a ||
        (g.$C("yt-remote-session-screen-id"),
        g.$C("yt-remote-session-video-id"));
      uwb();
      a = i8();
      g.Fb(a, j8());
      swb(a);
    },
    zwb = function () {
      if (!l8) {
        var a = g.Xu();
        a && (l8 = new g.Lu(a));
      }
    },
    Awb = function () {
      zwb();
      return l8 ? !!l8.get("yt-remote-use-staging-server") : !1;
    },
    m8 = function (a, b) {
      g.LE[a] = !0;
      var c = g.JE();
      c && c.publish.apply(c, arguments);
      g.LE[a] = !1;
    },
    Bwb = function () {},
    c8 = function () {
      if (!n8) {
        n8 = new g.ig(new Bwb());
        var a = g.LB("client_streamz_web_flush_count", -1);
        -1 !== a && (n8.D = a);
      }
      return n8;
    },
    Cwb = function () {
      var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
      return a ? parseInt(a[1], 10) : 0;
    },
    Dwb = function (a) {
      return (
        !!document.currentScript &&
        (-1 != document.currentScript.src.indexOf("?" + a) ||
          -1 != document.currentScript.src.indexOf("&" + a))
      );
    },
    Ewb = function () {
      return "function" == typeof window.__onGCastApiAvailable
        ? window.__onGCastApiAvailable
        : null;
    },
    o8 = function (a) {
      a.length
        ? Fwb(a.shift(), function () {
            o8(a);
          })
        : Gwb();
    },
    Hwb = function (a) {
      return "chrome-extension://" + a + "/cast_sender.js";
    },
    Fwb = function (a, b, c) {
      var d = document.createElement("script");
      d.onerror = b;
      c && (d.onload = c);
      g.Kn(d, g.Kv(a));
      (document.head || document.documentElement).appendChild(d);
    },
    Iwb = function () {
      var a = Cwb(),
        b = [];
      if (1 < a) {
        var c = a - 1;
        b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
        b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js");
      }
      return b;
    },
    Gwb = function () {
      var a = Ewb();
      a && a(!1, "No cast extension found");
    },
    Kwb = function () {
      if (Jwb) {
        var a = 2,
          b = Ewb(),
          c = function () {
            a--;
            0 == a && b && b(!0);
          };
        window.__onGCastApiAvailable = c;
        Fwb(
          "//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",
          Gwb,
          c
        );
      }
    },
    Lwb = function () {
      Kwb();
      var a = Iwb();
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    Nwb = function () {
      Kwb();
      var a = Iwb();
      a.push.apply(a, g.oa(Mwb.map(Hwb)));
      a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
      o8(a);
    },
    p8 = function (a, b, c) {
      g.J.call(this);
      this.K = null != c ? (0, g.fb)(a, c) : a;
      this.Ri = b;
      this.G = (0, g.fb)(this.m1, this);
      this.j = !1;
      this.B = 0;
      this.C = this.od = null;
      this.D = [];
    },
    q8 = function (a, b, c) {
      g.J.call(this);
      this.D = null != c ? a.bind(c) : a;
      this.Ri = b;
      this.C = null;
      this.j = !1;
      this.B = 0;
      this.od = null;
    },
    Owb = function (a) {
      a.od = g.gg(function () {
        a.od = null;
        a.j && !a.B && ((a.j = !1), Owb(a));
      }, a.Ri);
      var b = a.C;
      a.C = null;
      a.D.apply(null, b);
    },
    r8 = function () {},
    Pwb = function () {
      g.xb.call(this, "p");
    },
    Qwb = function () {
      g.xb.call(this, "o");
    },
    Swb = function () {
      return (Rwb = Rwb || new g.Gd());
    },
    Twb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    s8 = function (a) {
      var b = Swb();
      b.dispatchEvent(new Twb(b, a));
    },
    Uwb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    t8 = function (a) {
      var b = Swb();
      b.dispatchEvent(new Uwb(b, a));
    },
    Vwb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.SA = d;
    },
    u8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Sa.setTimeout(function () {
        a();
      }, b);
    },
    Wwb = function () {},
    v8 = function (a, b, c, d) {
      this.G = a;
      this.D = b;
      this.Xc = c;
      this.wc = d || 1;
      this.ib = new g.wo(this);
      this.yb = 45e3;
      a = g.vS ? 125 : void 0;
      this.jb = new g.fg(a);
      this.Na = null;
      this.C = !1;
      this.Z = this.fb = this.N = this.Ta = this.Aa = this.Qb = this.Y = null;
      this.qa = [];
      this.j = null;
      this.ma = 0;
      this.K = this.Ga = null;
      this.Ib = -1;
      this.La = !1;
      this.wb = 0;
      this.Za = null;
      this.kc = this.Va = this.dc = this.Da = !1;
      this.B = new Xwb();
    },
    Xwb = function () {
      this.C = null;
      this.j = "";
      this.B = !1;
    },
    Zwb = function (a, b, c) {
      a.Ta = 1;
      a.N = $7(b.clone());
      a.Z = c;
      a.Da = !0;
      Ywb(a, null);
    },
    Ywb = function (a, b) {
      a.Aa = Date.now();
      w8(a);
      a.fb = a.N.clone();
      a8(a.fb, "t", a.wc);
      a.ma = 0;
      var c = a.G.Ta;
      a.B = new Xwb();
      a.j = $wb(a.G, c ? b : null, !a.Z);
      0 < a.wb && (a.Za = new q8((0, g.fb)(a.xS, a, a.j), a.wb));
      a.ib.Sa(a.j, "readystatechange", a.q1);
      b = a.Na ? g.pd(a.Na) : {};
      a.Z
        ? (a.Ga || (a.Ga = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.j.send(a.fb, a.Ga, a.Z, b))
        : ((a.Ga = "GET"), a.j.send(a.fb, a.Ga, null, b));
      s8(1);
    },
    axb = function (a) {
      return a.j ? "GET" == a.Ga && 2 != a.Ta && a.G.Ef : !1;
    },
    exb = function (a, b, c) {
      for (var d = !0, e; !a.La && a.ma < c.length; )
        if (((e = bxb(a, c)), e == x8)) {
          4 == b && ((a.K = 4), t8(14), (d = !1));
          break;
        } else if (e == cxb) {
          a.K = 4;
          t8(15);
          d = !1;
          break;
        } else dxb(a, e);
      axb(a) && e != x8 && e != cxb && ((a.B.j = ""), (a.ma = 0));
      4 != b || 0 != c.length || a.B.B || ((a.K = 1), t8(16), (d = !1));
      a.C = a.C && d;
      d ? 0 < c.length && !a.kc && ((a.kc = !0), a.G.vP(a)) : (y8(a), z8(a));
    },
    bxb = function (a, b) {
      var c = a.ma,
        d = b.indexOf("\n", c);
      if (-1 == d) return x8;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return cxb;
      d += 1;
      if (d + c > b.length) return x8;
      b = b.slice(d, d + c);
      a.ma = d + c;
      return b;
    },
    w8 = function (a) {
      a.Qb = Date.now() + a.yb;
      fxb(a, a.yb);
    },
    fxb = function (a, b) {
      if (null != a.Y) throw Error("WatchDog timer not null");
      a.Y = u8((0, g.fb)(a.n1, a), b);
    },
    A8 = function (a) {
      a.Y && (g.Sa.clearTimeout(a.Y), (a.Y = null));
    },
    z8 = function (a) {
      a.G.ih() || a.La || gxb(a.G, a);
    },
    y8 = function (a) {
      A8(a);
      g.sb(a.Za);
      a.Za = null;
      a.jb.stop();
      a.ib.Lf();
      if (a.j) {
        var b = a.j;
        a.j = null;
        b.abort();
        b.dispose();
      }
    },
    dxb = function (a, b) {
      try {
        var c = a.G;
        if (0 != c.Gh && (c.j == a || hxb(c.B, a)))
          if (!a.Va && hxb(c.B, a) && 3 == c.Gh) {
            try {
              var d = c.Ff.j.parse(b);
            } catch (y) {
              d = null;
            }
            if (Array.isArray(d) && 3 == d.length) {
              var e = d;
              if (0 == e[0])
                a: {
                  if (!c.Z) {
                    if (c.j)
                      if (c.j.Aa + 3e3 < a.Aa) B8(c), C8(c);
                      else break a;
                    ixb(c);
                    t8(18);
                  }
                }
              else
                (c.Ld = e[1]),
                  0 < c.Ld - c.Za &&
                    37500 > e[2] &&
                    c.Va &&
                    0 == c.qa &&
                    !c.ma &&
                    (c.ma = u8((0, g.fb)(c.s1, c), 6e3));
              if (1 >= jxb(c.B) && c.pd) {
                try {
                  c.pd();
                } catch (y) {}
                c.pd = void 0;
              }
            } else D8(c, 11);
          } else if (((a.Va || c.j == a) && B8(c), !g.fc(b)))
            for (e = c.Ff.j.parse(b), b = 0; b < e.length; b++) {
              var f = e[b];
              c.Za = f[0];
              f = f[1];
              if (2 == c.Gh)
                if ("c" == f[0]) {
                  c.D = f[1];
                  c.kc = f[2];
                  var h = f[3];
                  null != h && (c.yS = h);
                  var l = f[5];
                  null != l &&
                    "number" === typeof l &&
                    0 < l &&
                    (c.ib = 1.5 * l);
                  d = c;
                  var m = a.LN();
                  if (m) {
                    var n = g.Fm(m, "X-Client-Wire-Protocol");
                    if (n) {
                      var p = d.B;
                      !p.j &&
                        (g.hc(n, "spdy") || g.hc(n, "quic") || g.hc(n, "h2")) &&
                        ((p.D = p.G),
                        (p.j = new Set()),
                        p.B && (kxb(p, p.B), (p.B = null)));
                    }
                    if (d.Da) {
                      var q = g.Fm(m, "X-HTTP-Session-Id");
                      q && ((d.Je = q), g.ro(d.Na, d.Da, q));
                    }
                  }
                  c.Gh = 3;
                  c.G && c.G.ES();
                  c.Tc && (c.Ud = Date.now() - a.Aa);
                  d = c;
                  var r = a;
                  d.Id = lxb(d, d.Ta ? d.kc : null, d.wc);
                  if (r.Va) {
                    mxb(d.B, r);
                    var t = r,
                      v = d.ib;
                    v && t.setTimeout(v);
                    t.Y && (A8(t), w8(t));
                    d.j = r;
                  } else nxb(d);
                  0 < c.C.length && E8(c);
                } else ("stop" != f[0] && "close" != f[0]) || D8(c, 7);
              else
                3 == c.Gh &&
                  ("stop" == f[0] || "close" == f[0]
                    ? "stop" == f[0]
                      ? D8(c, 7)
                      : c.disconnect()
                    : "noop" != f[0] && c.G && c.G.DS(f),
                  (c.qa = 0));
            }
        s8(4);
      } catch (y) {}
    },
    oxb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    pxb = function (a) {
      this.G = a || 10;
      g.Sa.PerformanceNavigationTiming
        ? ((a = g.Sa.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)))
        : (a = !!(
            g.Sa.chrome &&
            g.Sa.chrome.loadTimes &&
            g.Sa.chrome.loadTimes() &&
            g.Sa.chrome.loadTimes().wasFetchedViaSpdy
          ));
      this.D = a ? this.G : 1;
      this.j = null;
      1 < this.D && (this.j = new Set());
      this.B = null;
      this.C = [];
    },
    qxb = function (a) {
      return a.B ? !0 : a.j ? a.j.size >= a.D : !1;
    },
    jxb = function (a) {
      return a.B ? 1 : a.j ? a.j.size : 0;
    },
    hxb = function (a, b) {
      return a.B ? a.B == b : a.j ? a.j.has(b) : !1;
    },
    kxb = function (a, b) {
      a.j ? a.j.add(b) : (a.B = b);
    },
    mxb = function (a, b) {
      a.B && a.B == b ? (a.B = null) : a.j && a.j.has(b) && a.j.delete(b);
    },
    rxb = function (a) {
      if (null != a.B) return a.C.concat(a.B.qa);
      if (null != a.j && 0 !== a.j.size) {
        var b = a.C;
        a = g.u(a.j.values());
        for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
        return b;
      }
      return g.Ib(a.C);
    },
    sxb = function (a, b) {
      var c = new Wwb();
      if (g.Sa.Image) {
        var d = new Image();
        d.onload = g.gb(F8, c, d, "TestLoadImage: loaded", !0, b);
        d.onerror = g.gb(F8, c, d, "TestLoadImage: error", !1, b);
        d.onabort = g.gb(F8, c, d, "TestLoadImage: abort", !1, b);
        d.ontimeout = g.gb(F8, c, d, "TestLoadImage: timeout", !1, b);
        g.Sa.setTimeout(function () {
          if (d.ontimeout) d.ontimeout();
        }, 1e4);
        d.src = a;
      } else b(!1);
    },
    F8 = function (a, b, c, d, e) {
      try {
        (b.onload = null),
          (b.onerror = null),
          (b.onabort = null),
          (b.ontimeout = null),
          e(d);
      } catch (f) {}
    },
    txb = function () {
      this.j = new r8();
    },
    uxb = function (a, b, c) {
      var d = c || "";
      try {
        g.io(a, function (e, f) {
          var h = e;
          g.$a(e) && (h = g.um(e));
          b.push(d + f + "=" + encodeURIComponent(h));
        });
      } catch (e) {
        throw (b.push(d + "type=" + encodeURIComponent("_badmap")), e);
      }
    },
    G8 = function (a, b, c) {
      return c && c.i6 ? c.i6[a] || b : b;
    },
    vxb = function (a) {
      this.C = [];
      this.kc =
        this.Id =
        this.Na =
        this.wc =
        this.j =
        this.Je =
        this.Da =
        this.La =
        this.N =
        this.Qb =
        this.Y =
          null;
      this.Sf = this.fb = 0;
      this.Qf = G8("failFast", !1, a);
      this.Va = this.ma = this.Z = this.K = this.G = null;
      this.Xc = !0;
      this.Ld = this.Za = -1;
      this.dc = this.qa = this.Aa = 0;
      this.Pf = G8("baseRetryDelayMs", 5e3, a);
      this.dg = G8("retryDelaySeedMs", 1e4, a);
      this.Rf = G8("forwardChannelMaxRetries", 2, a);
      this.Kd = G8("forwardChannelRequestTimeoutMs", 2e4, a);
      this.Ie = (a && a.nhb) || void 0;
      this.Ef = (a && a.khb) || !1;
      this.ib = void 0;
      this.Ta = (a && a.maa) || !1;
      this.D = "";
      this.B = new pxb(a && a.Feb);
      this.Ff = new txb();
      this.yb = (a && a.Ueb) || !1;
      this.wb = (a && a.Keb) || !1;
      this.yb && this.wb && (this.wb = !1);
      this.eg = (a && a.zeb) || !1;
      a && a.Web && (this.Xc = !1);
      this.Tc = (!this.yb && this.Xc && a && a.Ieb) || !1;
      this.qd = void 0;
      a && a.yX && 0 < a.yX && (this.qd = a.yX);
      this.pd = void 0;
      this.Ud = 0;
      this.jb = !1;
      this.Ib = this.Ga = null;
    },
    C8 = function (a) {
      a.j && (wxb(a), a.j.cancel(), (a.j = null));
    },
    xxb = function (a) {
      C8(a);
      a.Z && (g.Sa.clearTimeout(a.Z), (a.Z = null));
      B8(a);
      a.B.cancel();
      a.K && ("number" === typeof a.K && g.Sa.clearTimeout(a.K), (a.K = null));
    },
    E8 = function (a) {
      qxb(a.B) || a.K || ((a.K = !0), g.Tf(a.AS, a), (a.Aa = 0));
    },
    zxb = function (a, b) {
      if (jxb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
      if (a.K) return (a.C = b.qa.concat(a.C)), !0;
      if (1 == a.Gh || 2 == a.Gh || a.Aa >= (a.Qf ? 0 : a.Rf)) return !1;
      a.K = u8((0, g.fb)(a.AS, a, b), yxb(a, a.Aa));
      a.Aa++;
      return !0;
    },
    Bxb = function (a, b) {
      var c;
      b ? (c = b.Xc) : (c = a.fb++);
      var d = a.Na.clone();
      g.ro(d, "SID", a.D);
      g.ro(d, "RID", c);
      g.ro(d, "AID", a.Za);
      H8(a, d);
      a.N && a.Y && g.vo(d, a.N, a.Y);
      c = new v8(a, a.D, c, a.Aa + 1);
      null === a.N && (c.Na = a.Y);
      b && (a.C = b.qa.concat(a.C));
      b = Axb(a, c, 1e3);
      c.setTimeout(
        Math.round(0.5 * a.Kd) + Math.round(0.5 * a.Kd * Math.random())
      );
      kxb(a.B, c);
      Zwb(c, d, b);
    },
    H8 = function (a, b) {
      a.La &&
        g.Tc(a.La, function (c, d) {
          g.ro(b, d, c);
        });
      a.G &&
        g.io({}, function (c, d) {
          g.ro(b, d, c);
        });
    },
    Axb = function (a, b, c) {
      c = Math.min(a.C.length, c);
      var d = a.G ? (0, g.fb)(a.G.t1, a.G, a) : null;
      a: for (var e = a.C, f = -1; ; ) {
        var h = ["count=" + c];
        -1 == f
          ? 0 < c
            ? ((f = e[0].j), h.push("ofs=" + f))
            : (f = 0)
          : h.push("ofs=" + f);
        for (var l = !0, m = 0; m < c; m++) {
          var n = e[m].j,
            p = e[m].map;
          n -= f;
          if (0 > n) (f = Math.max(0, e[m].j - 100)), (l = !1);
          else
            try {
              uxb(p, h, "req" + n + "_");
            } catch (q) {
              d && d(p);
            }
        }
        if (l) {
          d = h.join("&");
          break a;
        }
      }
      a = a.C.splice(0, c);
      b.qa = a;
      return d;
    },
    nxb = function (a) {
      a.j || a.Z || ((a.dc = 1), g.Tf(a.zS, a), (a.qa = 0));
    },
    ixb = function (a) {
      if (a.j || a.Z || 3 <= a.qa) return !1;
      a.dc++;
      a.Z = u8((0, g.fb)(a.zS, a), yxb(a, a.qa));
      a.qa++;
      return !0;
    },
    wxb = function (a) {
      null != a.Ga && (g.Sa.clearTimeout(a.Ga), (a.Ga = null));
    },
    Cxb = function (a) {
      a.j = new v8(a, a.D, "rpc", a.dc);
      null === a.N && (a.j.Na = a.Y);
      a.j.wb = 0;
      var b = a.Id.clone();
      g.ro(b, "RID", "rpc");
      g.ro(b, "SID", a.D);
      g.ro(b, "AID", a.Za);
      g.ro(b, "CI", a.Va ? "0" : "1");
      !a.Va && a.qd && g.ro(b, "TO", a.qd);
      g.ro(b, "TYPE", "xmlhttp");
      H8(a, b);
      a.N && a.Y && g.vo(b, a.N, a.Y);
      a.ib && a.j.setTimeout(a.ib);
      var c = a.j;
      a = a.kc;
      c.Ta = 1;
      c.N = $7(b.clone());
      c.Z = null;
      c.Da = !0;
      Ywb(c, a);
    },
    B8 = function (a) {
      null != a.ma && (g.Sa.clearTimeout(a.ma), (a.ma = null));
    },
    gxb = function (a, b) {
      var c = null;
      if (a.j == b) {
        B8(a);
        wxb(a);
        a.j = null;
        var d = 2;
      } else if (hxb(a.B, b)) (c = b.qa), mxb(a.B, b), (d = 1);
      else return;
      if (0 != a.Gh)
        if (b.C)
          if (1 == d) {
            c = b.Z ? b.Z.length : 0;
            b = Date.now() - b.Aa;
            var e = a.Aa;
            d = Swb();
            d.dispatchEvent(new Vwb(d, c, b, e));
            E8(a);
          } else nxb(a);
        else {
          var f = b.Ib;
          e = b.getLastError();
          if (
            3 == e ||
            (0 == e && 0 < f) ||
            !((1 == d && zxb(a, b)) || (2 == d && ixb(a)))
          )
            switch (
              (c && 0 < c.length && ((b = a.B), (b.C = b.C.concat(c))), e)
            ) {
              case 1:
                D8(a, 5);
                break;
              case 4:
                D8(a, 10);
                break;
              case 3:
                D8(a, 6);
                break;
              default:
                D8(a, 2);
            }
        }
    },
    yxb = function (a, b) {
      var c = a.Pf + Math.floor(Math.random() * a.dg);
      a.isActive() || (c *= 2);
      return c * b;
    },
    D8 = function (a, b) {
      if (2 == b) {
        var c = null;
        a.G && (c = null);
        var d = (0, g.fb)(a.saa, a);
        c ||
          ((c = new g.jo("//www.google.com/images/cleardot.gif")),
          (g.Sa.location && "http" == g.Sa.location.protocol) ||
            g.ko(c, "https"),
          $7(c));
        sxb(c.toString(), d);
      } else t8(2);
      a.Gh = 0;
      a.G && a.G.CS(b);
      Dxb(a);
      xxb(a);
    },
    Dxb = function (a) {
      a.Gh = 0;
      a.Ib = [];
      if (a.G) {
        var b = rxb(a.B);
        if (0 != b.length || 0 != a.C.length)
          g.Lb(a.Ib, b),
            g.Lb(a.Ib, a.C),
            (a.B.C.length = 0),
            g.Ib(a.C),
            (a.C.length = 0);
        a.G.BS();
      }
    },
    Exb = function (a) {
      if (0 == a.Gh) return a.Ib;
      var b = [];
      g.Lb(b, rxb(a.B));
      g.Lb(b, a.C);
      return b;
    },
    lxb = function (a, b, c) {
      var d = g.so(c);
      "" != d.j
        ? (b && g.lo(d, b + "." + d.j), g.mo(d, d.D))
        : ((d = g.Sa.location),
          (d = Uvb(
            d.protocol,
            b ? b + "." + d.hostname : d.hostname,
            +d.port,
            c
          )));
      b = a.Da;
      c = a.Je;
      b && c && g.ro(d, b, c);
      g.ro(d, "VER", a.yS);
      H8(a, d);
      return d;
    },
    $wb = function (a, b, c) {
      if (b && !a.Ta)
        throw Error("Can't create secondary domain capable XhrIo object.");
      b = c && a.Ef && !a.Ie ? new g.ym(new g.eo({ VZ: !0 })) : new g.ym(a.Ie);
      b.K = a.Ta;
      return b;
    },
    Fxb = function () {},
    Gxb = function () {
      if (g.af && !g.Nc(10))
        throw Error("Environmental error: no available transport.");
    },
    J8 = function (a, b) {
      g.Gd.call(this);
      this.j = new vxb(b);
      this.G = a;
      this.B = (b && b.T6) || null;
      a = (b && b.S6) || null;
      b &&
        b.Eeb &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" }));
      this.j.Y = a;
      a = (b && b.Qfb) || null;
      b &&
        b.FX &&
        (a
          ? (a["X-WebChannel-Content-Type"] = b.FX)
          : (a = { "X-WebChannel-Content-Type": b.FX }));
      b &&
        b.bV &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = b.bV)
          : (a = { "X-WebChannel-Client-Profile": b.bV }));
      this.j.Qb = a;
      (a = b && b.Pfb) && !g.fc(a) && (this.j.N = a);
      this.K = (b && b.maa) || !1;
      this.D = (b && b.Kgb) || !1;
      (b = b && b.d6) &&
        !g.fc(b) &&
        ((this.j.Da = b), g.fd(this.B, b) && g.jd(this.B, b));
      this.C = new I8(this);
    },
    Hxb = function (a) {
      Pwb.call(this);
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
      var b = a.__sm__;
      b
        ? (this.data = (this.j = g.Yc(b)) ? g.nd(b, this.j) : b)
        : (this.data = a);
    },
    Ixb = function (a) {
      Qwb.call(this);
      this.status = 1;
      this.errorCode = a;
    },
    I8 = function (a) {
      this.j = a;
    },
    Jxb = function (a, b) {
      this.B = a;
      this.j = b;
    },
    Kxb = function (a) {
      return Exb(a.j).map(function (b) {
        b = b.map;
        "__data__" in b && ((b = b.__data__), (b = a.B.D ? Tvb(b) : b));
        return b;
      });
    },
    K8 = function (a, b) {
      if ("function" !== typeof a)
        throw Error("Fn must not be null and must be a function");
      return g.Sa.setTimeout(function () {
        a();
      }, b);
    },
    M8 = function (a) {
      L8.dispatchEvent(new Lxb(L8, a));
    },
    Lxb = function (a) {
      g.xb.call(this, "statevent", a);
    },
    N8 = function (a, b, c, d) {
      this.j = a;
      this.D = b;
      this.N = c;
      this.K = d || 1;
      this.B = 45e3;
      this.C = new g.wo(this);
      this.G = new g.fg();
      this.G.setInterval(250);
    },
    Nxb = function (a, b, c) {
      a.Hx = 1;
      a.Sr = $7(b.clone());
      a.Eu = c;
      a.Da = !0;
      Mxb(a, null);
    },
    Oxb = function (a, b, c, d, e) {
      a.Hx = 1;
      a.Sr = $7(b.clone());
      a.Eu = null;
      a.Da = c;
      e && (a.zZ = !1);
      Mxb(a, d);
    },
    Mxb = function (a, b) {
      a.Gx = Date.now();
      O8(a);
      a.Ur = a.Sr.clone();
      a8(a.Ur, "t", a.K);
      a.bG = 0;
      a.dj = a.j.aL(a.j.KB() ? b : null);
      0 < a.YK && (a.ZF = new q8((0, g.fb)(a.FS, a, a.dj), a.YK));
      a.C.Sa(a.dj, "readystatechange", a.w1);
      b = a.Du ? g.pd(a.Du) : {};
      a.Eu
        ? ((a.aG = "POST"),
          (b["Content-Type"] = "application/x-www-form-urlencoded"),
          a.dj.send(a.Ur, a.aG, a.Eu, b))
        : ((a.aG = "GET"),
          a.zZ && !g.Pc && (b.Connection = "close"),
          a.dj.send(a.Ur, a.aG, null, b));
      a.j.Kn(1);
    },
    Rxb = function (a, b) {
      var c = a.bG,
        d = b.indexOf("\n", c);
      if (-1 == d) return Pxb;
      c = Number(b.substring(c, d));
      if (isNaN(c)) return Qxb;
      d += 1;
      if (d + c > b.length) return Pxb;
      b = b.slice(d, d + c);
      a.bG = d + c;
      return b;
    },
    Txb = function (a, b) {
      a.Gx = Date.now();
      O8(a);
      var c = b ? window.location.hostname : "";
      a.Ur = a.Sr.clone();
      g.ro(a.Ur, "DOMAIN", c);
      g.ro(a.Ur, "t", a.K);
      try {
        a.Yn = new ActiveXObject("htmlfile");
      } catch (m) {
        P8(a);
        a.Tr = 7;
        M8(22);
        Q8(a);
        return;
      }
      var d = "<html><body>";
      if (b) {
        var e = "";
        for (b = 0; b < c.length; b++) {
          var f = c.charAt(b);
          if ("<" == f) f = e + "\\x3c";
          else if (">" == f) f = e + "\\x3e";
          else {
            if (f in R8) f = R8[f];
            else if (f in Sxb) f = R8[f] = Sxb[f];
            else {
              var h = f.charCodeAt(0);
              if (31 < h && 127 > h) var l = f;
              else {
                if (256 > h) {
                  if (((l = "\\x"), 16 > h || 256 < h)) l += "0";
                } else (l = "\\u"), 4096 > h && (l += "0");
                l += h.toString(16).toUpperCase();
              }
              f = R8[f] = l;
            }
            f = e + f;
          }
          e = f;
        }
        d += '<script>document.domain="' + e + '"\x3c/script>';
      }
      d += "</body></html>";
      g.Td("b/12014412");
      c = g.je(d);
      a.Yn.open();
      a.Yn.write(g.ie(c));
      a.Yn.close();
      a.Yn.parentWindow.m = (0, g.fb)(a.H9, a);
      a.Yn.parentWindow.d = (0, g.fb)(a.EY, a, !0);
      a.Yn.parentWindow.rpcClose = (0, g.fb)(a.EY, a, !1);
      c = a.Yn.createElement("DIV");
      a.Yn.parentWindow.document.body.appendChild(c);
      d = g.ae(a.Ur.toString()) || g.ge;
      d = g.ze(g.Zd(d));
      g.Td("b/12014412");
      d = g.je('<iframe src="' + d + '"></iframe>');
      g.Rba(c, d);
      a.j.Kn(1);
    },
    O8 = function (a) {
      a.ZK = Date.now() + a.B;
      Uxb(a, a.B);
    },
    Uxb = function (a, b) {
      if (null != a.Ix) throw Error("WatchDog timer not null");
      a.Ix = K8((0, g.fb)(a.v1, a), b);
    },
    Vxb = function (a) {
      a.Ix && (g.Sa.clearTimeout(a.Ix), (a.Ix = null));
    },
    Q8 = function (a) {
      a.j.ih() || a.Cu || a.j.cG(a);
    },
    P8 = function (a) {
      Vxb(a);
      g.sb(a.ZF);
      a.ZF = null;
      a.G.stop();
      a.C.Lf();
      if (a.dj) {
        var b = a.dj;
        a.dj = null;
        b.abort();
        b.dispose();
      }
      a.Yn && (a.Yn = null);
    },
    Wxb = function (a, b) {
      try {
        a.j.GS(a, b), a.j.Kn(4);
      } catch (c) {}
    },
    Yxb = function (a, b, c, d, e) {
      if (0 == d) c(!1);
      else {
        var f = e || 0;
        d--;
        Xxb(a, b, function (h) {
          h
            ? c(!0)
            : g.Sa.setTimeout(function () {
                Yxb(a, b, c, d, f);
              }, f);
        });
      }
    },
    Xxb = function (a, b, c) {
      var d = new Image();
      d.onload = function () {
        try {
          S8(d), c(!0);
        } catch (e) {}
      };
      d.onerror = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.onabort = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      d.ontimeout = function () {
        try {
          S8(d), c(!1);
        } catch (e) {}
      };
      g.Sa.setTimeout(function () {
        if (d.ontimeout) d.ontimeout();
      }, b);
      d.src = a;
    },
    S8 = function (a) {
      a.onload = null;
      a.onerror = null;
      a.onabort = null;
      a.ontimeout = null;
    },
    Zxb = function (a) {
      this.j = a;
      this.B = new r8();
    },
    $xb = function (a) {
      var b = T8(a.j, a.oC, "/mail/images/cleardot.gif");
      $7(b);
      Yxb(b.toString(), 5e3, (0, g.fb)(a.X3, a), 3, 2e3);
      a.Kn(1);
    },
    ayb = function (a) {
      var b = a.j.K;
      if (null != b)
        M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
      else if (
        ((a.Ij = new N8(a)),
        (a.Ij.Du = a.bL),
        (b = a.j),
        (b = T8(b, b.KB() ? a.JB : null, a.cL)),
        M8(5),
        !g.af || g.Nc(10))
      )
        a8(b, "TYPE", "xmlhttp"), Oxb(a.Ij, b, !1, a.JB, !1);
      else {
        a8(b, "TYPE", "html");
        var c = a.Ij;
        a = !!a.JB;
        c.Hx = 3;
        c.Sr = $7(b.clone());
        Txb(c, a);
      }
    },
    byb = function (a, b, c) {
      this.j = 1;
      this.B = [];
      this.C = [];
      this.G = new r8();
      this.Y = a || null;
      this.K = null != b ? b : null;
      this.Z = c || !1;
    },
    cyb = function (a, b) {
      this.j = a;
      this.map = b;
      this.context = null;
    },
    dyb = function (a, b, c, d) {
      g.xb.call(this, "timingevent", a);
      this.size = b;
      this.SA = d;
    },
    eyb = function (a) {
      g.xb.call(this, "serverreachability", a);
    },
    gyb = function (a) {
      a.z1(1, 0);
      a.dG = T8(a, null, a.dL);
      fyb(a);
    },
    hyb = function (a) {
      a.Ds && (a.Ds.abort(), (a.Ds = null));
      a.Sg && (a.Sg.cancel(), (a.Sg = null));
      a.eq && (g.Sa.clearTimeout(a.eq), (a.eq = null));
      V8(a);
      a.Rj && (a.Rj.cancel(), (a.Rj = null));
      a.Vr && (g.Sa.clearTimeout(a.Vr), (a.Vr = null));
    },
    iyb = function (a, b) {
      if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
      a.B.push(new cyb(a.A1++, b));
      (2 != a.j && 3 != a.j) || fyb(a);
    },
    jyb = function (a) {
      var b = 0;
      a.Sg && b++;
      a.Rj && b++;
      return b;
    },
    fyb = function (a) {
      a.Rj || a.Vr || ((a.Vr = K8((0, g.fb)(a.KS, a), 0)), (a.Kx = 0));
    },
    myb = function (a, b) {
      if (1 == a.j) {
        if (!b) {
          a.MB = Math.floor(1e5 * Math.random());
          b = a.MB++;
          var c = new N8(a, "", b);
          c.Du = a.xo;
          var d = kyb(a),
            e = a.dG.clone();
          g.ro(e, "RID", b);
          g.ro(e, "CVER", "1");
          W8(a, e);
          Nxb(c, e, d);
          a.Rj = c;
          a.j = 2;
        }
      } else 3 == a.j && (b ? lyb(a, b) : 0 == a.B.length || a.Rj || lyb(a));
    },
    lyb = function (a, b) {
      if (b)
        if (6 < a.Fu) {
          a.B = a.C.concat(a.B);
          a.C.length = 0;
          var c = a.MB - 1;
          b = kyb(a);
        } else (c = b.N), (b = b.Eu);
      else (c = a.MB++), (b = kyb(a));
      var d = a.dG.clone();
      g.ro(d, "SID", a.D);
      g.ro(d, "RID", c);
      g.ro(d, "AID", a.Lx);
      W8(a, d);
      c = new N8(a, a.D, c, a.Kx + 1);
      c.Du = a.xo;
      c.setTimeout(1e4 + Math.round(1e4 * Math.random()));
      a.Rj = c;
      Nxb(c, d, b);
    },
    W8 = function (a, b) {
      a.Ii &&
        (a = a.Ii.OS()) &&
        g.Tc(a, function (c, d) {
          g.ro(b, d, c);
        });
    },
    kyb = function (a) {
      var b = Math.min(a.B.length, 1e3),
        c = ["count=" + b];
      if (6 < a.Fu && 0 < b) {
        var d = a.B[0].j;
        c.push("ofs=" + d);
      } else d = 0;
      for (var e = {}, f = 0; f < b; e = { Wz: e.Wz }, f++) {
        e.Wz = a.B[f].j;
        var h = a.B[f].map;
        e.Wz = 6 >= a.Fu ? f : e.Wz - d;
        try {
          g.Tc(
            h,
            (function (l) {
              return function (m, n) {
                c.push("req" + l.Wz + "_" + n + "=" + encodeURIComponent(m));
              };
            })(e)
          );
        } catch (l) {
          c.push("req" + e.Wz + "_type=" + encodeURIComponent("_badmap"));
        }
      }
      a.C = a.C.concat(a.B.splice(0, b));
      return c.join("&");
    },
    nyb = function (a) {
      a.Sg ||
        a.eq ||
        ((a.N = 1), (a.eq = K8((0, g.fb)(a.JS, a), 0)), (a.Jx = 0));
    },
    pyb = function (a) {
      if (a.Sg || a.eq || 3 <= a.Jx) return !1;
      a.N++;
      a.eq = K8((0, g.fb)(a.JS, a), oyb(a, a.Jx));
      a.Jx++;
      return !0;
    },
    U8 = function (a, b, c) {
      a.BK = null == a.K ? c : !a.K;
      a.zo = b.cq;
      a.Z || gyb(a);
    },
    V8 = function (a) {
      null != a.Gu && (g.Sa.clearTimeout(a.Gu), (a.Gu = null));
    },
    oyb = function (a, b) {
      var c = 5e3 + Math.floor(1e4 * Math.random());
      a.isActive() || (c *= 2);
      return c * b;
    },
    X8 = function (a, b) {
      if (2 == b || 9 == b) {
        var c = null;
        a.Ii && (c = null);
        var d = (0, g.fb)(a.raa, a);
        c || ((c = new g.jo("//www.google.com/images/cleardot.gif")), $7(c));
        Xxb(c.toString(), 1e4, d);
      } else M8(2);
      qyb(a, b);
    },
    qyb = function (a, b) {
      a.j = 0;
      a.Ii && a.Ii.LS(b);
      ryb(a);
      hyb(a);
    },
    ryb = function (a) {
      a.j = 0;
      a.zo = -1;
      if (a.Ii)
        if (0 == a.C.length && 0 == a.B.length) a.Ii.eL();
        else {
          var b = g.Ib(a.C),
            c = g.Ib(a.B);
          a.C.length = 0;
          a.B.length = 0;
          a.Ii.eL(b, c);
        }
    },
    T8 = function (a, b, c) {
      var d = g.so(c);
      if ("" != d.j) b && g.lo(d, b + "." + d.j), g.mo(d, d.D);
      else {
        var e = window.location;
        d = Uvb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
      }
      a.LB &&
        g.Tc(a.LB, function (f, h) {
          g.ro(d, h, f);
        });
      g.ro(d, "VER", a.Fu);
      W8(a, d);
      return d;
    },
    syb = function () {},
    tyb = function () {
      this.j = [];
      this.B = [];
    },
    uyb = function (a) {
      g.xb.call(this, "channelMessage");
      this.message = a;
    },
    vyb = function (a) {
      g.xb.call(this, "channelError");
      this.error = a;
    },
    wyb = function (a, b) {
      this.action = a;
      this.params = b || {};
    },
    Y8 = function (a, b) {
      g.J.call(this);
      this.j = new g.eu(this.z9, 0, this);
      g.L(this, this.j);
      this.Ri = 5e3;
      this.B = 0;
      if ("function" === typeof a) b && (a = (0, g.fb)(a, b));
      else if (a && "function" === typeof a.handleEvent)
        a = (0, g.fb)(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      this.C = a;
    },
    xyb = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      d =
        void 0 === d
          ? function () {
              return "";
            }
          : d;
      e = void 0 === e ? !1 : e;
      this.Aa = a;
      this.N = b;
      this.C = new g.Ku();
      this.B = new Y8(this.J$, this);
      this.j = null;
      this.ma = !1;
      this.K = null;
      this.Y = "";
      this.Z = this.G = 0;
      this.D = [];
      this.Ta = c;
      this.qa = d;
      this.Va = e;
      this.Na = new Vvb();
      this.Ga = new Xvb();
      this.La = new Zvb();
      this.Da = new awb();
      this.Za = new cwb();
      this.fb = new dwb();
    },
    yyb = function (a) {
      if (a.j) {
        var b = a.qa(),
          c = a.j.xo || {};
        b
          ? (c["x-youtube-lounge-xsrf-token"] = b)
          : delete c["x-youtube-lounge-xsrf-token"];
        a.j.xo = c;
      }
    },
    Z8 = function (a) {
      this.scheme = "https";
      this.port = this.domain = "";
      this.j = "/api/lounge";
      this.B = !0;
      a = a || document.location.href;
      var b = Number(g.vl(4, a)) || "";
      b && (this.port = ":" + b);
      this.domain = g.wl(a) || "";
      a = g.mc();
      0 <= a.search("MSIE") &&
        ((a = a.match(/MSIE ([\d.]+)/)[1]),
        0 > g.lc(a, "10.0") && (this.B = !1));
    },
    $8 = function (a, b) {
      var c = a.j;
      a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
      return g.Cl(c + b, {});
    },
    zyb = function (a, b, c, d, e) {
      a = {
        format: "JSON",
        method: "POST",
        context: a,
        timeout: 5e3,
        withCredentials: !1,
        onSuccess: g.gb(a.D, d, !0),
        onError: g.gb(a.C, e),
        onTimeout: g.gb(a.G, e),
      };
      c &&
        ((a.postParams = c),
        (a.headers = { "Content-Type": "application/x-www-form-urlencoded" }));
      return g.gC(b, a);
    },
    Ayb = function (a, b) {
      g.Gd.call(this);
      var c = this;
      this.Fd = a();
      this.Fd.subscribe("handlerOpened", this.E1, this);
      this.Fd.subscribe("handlerClosed", this.C1, this);
      this.Fd.subscribe("handlerError", function (d, e) {
        c.onError(e);
      });
      this.Fd.subscribe("handlerMessage", this.D1, this);
      this.j = b;
    },
    Byb = function (a, b, c) {
      var d = this;
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      var e = void 0 === e ? new Gxb() : e;
      var f = void 0 === f ? new g.Ku() : f;
      this.pathPrefix = a;
      this.j = b;
      this.Aa = c;
      this.G = f;
      this.Z = null;
      this.Y = this.N = 0;
      this.channel = null;
      this.K = 0;
      this.C = new Y8(function () {
        d.C.isActive();
        var h;
        0 === (null == (h = d.channel) ? void 0 : jxb(new Jxb(h, h.j).j.B)) &&
          d.connect(d.Z, d.N);
      });
      this.D = {};
      this.B = {};
      this.ma = !1;
      this.logger = null;
      this.qa = [];
      this.Mg = void 0;
      this.Na = new Vvb();
      this.Ga = new Xvb();
      this.La = new Zvb();
      this.Da = new awb();
    },
    Cyb = function (a) {
      g.xd(a.channel, "m", function () {
        a.K = 3;
        a.C.reset();
        a.Z = null;
        a.N = 0;
        for (var b = g.u(a.qa), c = b.next(); !c.done; c = b.next())
          (c = c.value), a.channel && a.channel.send(c);
        a.qa = [];
        a.oa("webChannelOpened");
        Wvb(a.Na, "WEB_CHANNEL");
      });
      g.xd(a.channel, "n", function () {
        a.K = 0;
        a.C.isActive() || a.oa("webChannelClosed");
        var b,
          c = null == (b = a.channel) ? void 0 : Kxb(new Jxb(b, b.j));
        c && (a.qa = [].concat(g.oa(c)));
        Yvb(a.Ga, "WEB_CHANNEL");
      });
      g.xd(a.channel, "p", function (b) {
        var c = b.data;
        "gracefulReconnect" === c[0]
          ? (a.C.start(), a.channel && a.channel.close())
          : a.oa("webChannelMessage", new wyb(c[0], c[1]));
        a.Mg = b.statusCode;
        $vb(a.La, "WEB_CHANNEL");
      });
      g.xd(a.channel, "o", function () {
        401 === a.Mg || a.C.start();
        a.oa("webChannelError");
        bwb(a.Da, "WEB_CHANNEL");
      });
    },
    Dyb = function (a) {
      var b = a.Aa();
      b
        ? (a.D["x-youtube-lounge-xsrf-token"] = b)
        : delete a.D["x-youtube-lounge-xsrf-token"];
    },
    Eyb = function (a) {
      g.Gd.call(this);
      this.j = a();
      this.j.subscribe("webChannelOpened", this.H1, this);
      this.j.subscribe("webChannelClosed", this.F1, this);
      this.j.subscribe("webChannelError", this.onError, this);
      this.j.subscribe("webChannelMessage", this.G1, this);
    },
    Fyb = function (a, b, c, d, e) {
      function f() {
        return new xyb($8(a, "/bc"), b, !1, c, d);
      }
      c =
        void 0 === c
          ? function () {
              return "";
            }
          : c;
      return g.KB("enable_mdx_web_channel_desktop")
        ? new Eyb(function () {
            return new Byb($8(a, "/wc"), b, c);
          })
        : new Ayb(f, e);
    },
    Jyb = function () {
      var a = Gyb;
      Hyb();
      a9.push(a);
      Iyb();
    },
    b9 = function (a, b) {
      Hyb();
      var c = Kyb(a, String(b));
      0 == a9.length
        ? Lyb(c)
        : (Iyb(),
          g.$b(a9, function (d) {
            d(c);
          }));
    },
    c9 = function (a) {
      b9("CP", a);
    },
    Hyb = function () {
      a9 ||
        ((a9 = g.Va("yt.mdx.remote.debug.handlers_") || []),
        g.Ua("yt.mdx.remote.debug.handlers_", a9));
    },
    Lyb = function (a) {
      var b = (d9 + 1) % 50;
      d9 = b;
      e9[b] = a;
      f9 || (f9 = 49 == b);
    },
    Iyb = function () {
      var a = a9;
      if (e9[0]) {
        var b = f9 ? d9 : -1;
        do {
          b = (b + 1) % 50;
          var c = e9[b];
          g.$b(a, function (d) {
            d(c);
          });
        } while (b != d9);
        e9 = Array(50);
        d9 = -1;
        f9 = !1;
      }
    },
    Kyb = function (a, b) {
      var c = (Date.now() - Myb) / 1e3;
      c.toFixed && (c = c.toFixed(3));
      var d = [];
      d.push("[", c + "s", "] ");
      d.push("[", "yt.mdx.remote", "] ");
      d.push(a + ": " + b, "\n");
      return d.join("");
    },
    g9 = function (a) {
      g.fG.call(this);
      this.K = a;
      this.screens = [];
    },
    Nyb = function (a, b) {
      var c = a.get(b.uuid) || a.get(b.id);
      if (c)
        return (
          (a = c.name),
          (c.id = b.id || c.id),
          (c.name = b.name),
          (c.token = b.token),
          (c.uuid = b.uuid || c.uuid),
          c.name != a
        );
      a.screens.push(b);
      return !0;
    },
    Oyb = function (a, b) {
      var c = a.screens.length != b.length;
      a.screens = g.ys(a.screens, function (f) {
        return !!pwb(b, f);
      });
      for (var d = 0, e = b.length; d < e; d++) c = Nyb(a, b[d]) || c;
      return c;
    },
    Pyb = function (a, b) {
      var c = a.screens.length;
      a.screens = g.ys(a.screens, function (d) {
        return !(d || b ? (!d != !b ? 0 : d.id == b.id) : 1);
      });
      return a.screens.length < c;
    },
    Qyb = function (a, b, c, d, e) {
      g.fG.call(this);
      this.C = a;
      this.N = b;
      this.D = c;
      this.K = d;
      this.G = e;
      this.B = 0;
      this.j = null;
      this.od = NaN;
    },
    i9 = function (a) {
      g9.call(this, "LocalScreenService");
      this.B = a;
      this.j = NaN;
      h9(this);
      this.info("Initializing with " + mwb(this.screens));
    },
    Ryb = function (a) {
      if (a.screens.length) {
        var b = g.eq(a.screens, function (d) {
            return d.id;
          }),
          c = $8(a.B, "/pairing/get_lounge_token_batch");
        zyb(
          a.B,
          c,
          { screen_ids: b.join(",") },
          (0, g.fb)(a.B5, a),
          (0, g.fb)(a.A5, a)
        );
      }
    },
    h9 = function (a) {
      if (g.KB("deprecate_pair_servlet_enabled")) return Oyb(a, []);
      var b = lwb(wwb());
      b = g.ys(b, function (c) {
        return !c.uuid;
      });
      return Oyb(a, b);
    },
    j9 = function (a, b) {
      ywb(g.eq(a.screens, jwb));
      b && xwb();
    },
    Tyb = function (a, b) {
      g.fG.call(this);
      this.K = b;
      b = (b = g.ZC("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
      for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
        var h = d[f].id;
        c[h] = g.Db(b, h);
      }
      this.j = c;
      this.G = a;
      this.C = this.D = NaN;
      this.B = null;
      Syb("Initialized with " + g.um(this.j));
    },
    Uyb = function (a, b, c) {
      var d = $8(a.G, "/pairing/get_screen_availability");
      zyb(
        a.G,
        d,
        { lounge_token: b.token },
        (0, g.fb)(function (e) {
          e = e.screens || [];
          for (var f = e.length, h = 0; h < f; ++h)
            if (e[h].loungeToken == b.token) {
              c("online" == e[h].status);
              return;
            }
          c(!1);
        }, a),
        (0, g.fb)(function () {
          c(!1);
        }, a)
      );
    },
    Wyb = function (a, b) {
      a: if (Rvb(b) != Rvb(a.j)) var c = !1;
      else {
        c = g.ed(b);
        for (var d = c.length, e = 0; e < d; ++e)
          if (!a.j[c[e]]) {
            c = !1;
            break a;
          }
        c = !0;
      }
      c ||
        (Syb("Updated online screens: " + g.um(a.j)),
        (a.j = b),
        a.oa("screenChange"));
      Vyb(a);
    },
    k9 = function (a) {
      isNaN(a.C) || g.dC(a.C);
      a.C = g.bC((0, g.fb)(a.JQ, a), 0 < a.D && a.D < g.ib() ? 2e4 : 1e4);
    },
    Syb = function (a) {
      b9("OnlineScreenService", a);
    },
    Xyb = function (a) {
      var b = {};
      g.$b(a.K(), function (c) {
        c.token
          ? (b[c.token] = c.id)
          : this.cg("Requesting availability of screen w/o lounge token.");
      });
      return b;
    },
    Vyb = function (a) {
      a = g.ed(
        g.Uc(a.j, function (b) {
          return b;
        })
      );
      g.Xb(a);
      a.length
        ? g.YC("yt-remote-online-screen-ids", a.join(","), 60)
        : g.$C("yt-remote-online-screen-ids");
    },
    l9 = function (a, b) {
      b = void 0 === b ? !1 : b;
      g9.call(this, "ScreenService");
      this.D = a;
      this.N = b;
      this.j = this.B = null;
      this.C = [];
      this.G = {};
      Yyb(this);
    },
    $yb = function (a, b, c, d, e, f) {
      a.info("getAutomaticScreenByIds " + c + " / " + b);
      c || (c = a.G[b]);
      var h = a.Mk(),
        l = c ? h8(h, c) : null;
      (c && (a.N || l)) || (l = h8(h, b));
      if (l) {
        l.uuid = b;
        var m = m9(a, l);
        Uyb(a.j, m, function (n) {
          e(n ? m : null);
        });
      } else
        c
          ? Zyb(
              a,
              c,
              (0, g.fb)(function (n) {
                var p = m9(
                  this,
                  new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || "",
                  })
                );
                Uyb(this.j, p, function (q) {
                  e(q ? p : null);
                });
              }, a),
              f
            )
          : e(null);
    },
    azb = function (a, b) {
      for (var c = a.screens.length, d = 0; d < c; ++d)
        if (a.screens[d].name == b) return a.screens[d];
      return null;
    },
    bzb = function (a, b, c) {
      Uyb(a.j, b, c);
    },
    Zyb = function (a, b, c, d) {
      a.info("requestLoungeToken_ for " + b);
      var e = {
        postParams: { screen_ids: b },
        method: "POST",
        context: a,
        onSuccess: function (f, h) {
          f = (h && h.screens) || [];
          f[0] && f[0].screenId == b
            ? c(f[0].loungeToken)
            : d(Error("Missing lounge token in token response"));
        },
        onError: function () {
          d(Error("Request screen lounge token failed"));
        },
      };
      g.gC($8(a.D, "/pairing/get_lounge_token_batch"), e);
    },
    czb = function (a) {
      a.screens = a.B.Mk();
      var b = a.G,
        c = {},
        d;
      for (d in b) c[b[d]] = d;
      b = a.screens.length;
      for (d = 0; d < b; ++d) {
        var e = a.screens[d];
        e.uuid = c[e.id] || "";
      }
      a.info("Updated manual screens: " + mwb(a.screens));
    },
    Yyb = function (a) {
      dzb(a);
      a.B = new i9(a.D);
      a.B.subscribe("screenChange", (0, g.fb)(a.L5, a));
      czb(a);
      a.N || (a.C = lwb(g.ZC("yt-remote-automatic-screen-cache") || []));
      dzb(a);
      a.info("Initializing automatic screens: " + mwb(a.C));
      a.j = new Tyb(a.D, (0, g.fb)(a.Mk, a, !0));
      a.j.subscribe(
        "screenChange",
        (0, g.fb)(function () {
          this.oa("onlineScreenChange");
        }, a)
      );
    },
    m9 = function (a, b) {
      var c = a.get(b.id);
      c
        ? ((c.uuid = b.uuid), (b = c))
        : ((c = h8(a.C, b.uuid))
            ? ((c.id = b.id), (c.token = b.token), (b = c))
            : a.C.push(b),
          a.N || ezb(a));
      dzb(a);
      a.G[b.uuid] = b.id;
      g.YC("yt-remote-device-id-map", a.G, 31536e3);
      return b;
    },
    ezb = function (a) {
      a = g.ys(a.C, function (b) {
        return "shortLived" != b.idType;
      });
      g.YC("yt-remote-automatic-screen-cache", g.eq(a, jwb));
    },
    dzb = function (a) {
      a.G = g.ZC("yt-remote-device-id-map") || {};
    },
    n9 = function (a, b, c) {
      g.fG.call(this);
      this.Da = c;
      this.D = a;
      this.B = b;
      this.j = null;
    },
    o9 = function (a, b) {
      a.j = b;
      a.oa("sessionScreen", a.j);
    },
    fzb = function (a, b) {
      a.j && ((a.j.token = b), m9(a.D, a.j));
      a.oa("sessionScreen", a.j);
    },
    p9 = function (a, b) {
      b9(a.Da, b);
    },
    q9 = function (a, b, c) {
      n9.call(this, a, b, "CastSession");
      var d = this;
      this.config_ = c;
      this.C = null;
      this.qa = (0, g.fb)(this.M1, this);
      this.Ga = (0, g.fb)(this.P9, this);
      this.ma = g.bC(function () {
        gzb(d, null);
      }, 12e4);
      this.N = this.G = this.K = this.Z = 0;
      this.Aa = !1;
      this.Y = "unknown";
    },
    izb = function (a, b) {
      g.dC(a.N);
      a.N = 0;
      0 == b
        ? hzb(a)
        : (a.N = g.bC(function () {
            hzb(a);
          }, b));
    },
    hzb = function (a) {
      jzb(a, "getLoungeToken");
      g.dC(a.G);
      a.G = g.bC(function () {
        kzb(a, null);
      }, 3e4);
    },
    jzb = function (a, b) {
      a.info("sendYoutubeMessage_: " + b + " " + g.um());
      var c = {};
      c.type = b;
      a.C
        ? a.C.sendMessage(
            "urn:x-cast:com.google.youtube.mdx",
            c,
            function () {},
            (0, g.fb)(function () {
              p9(this, "Failed to send message: " + b + ".");
            }, a)
          )
        : p9(a, "Sending yt message without session: " + g.um(c));
    },
    lzb = function (a, b) {
      b
        ? (a.info("onConnectedScreenId_: Received screenId: " + b),
          (a.j && a.j.id == b) ||
            a.eW(
              b,
              function (c) {
                o9(a, c);
              },
              function () {
                return a.yj();
              },
              5
            ))
        : a.yj(Error("Waiting for session status timed out."));
    },
    nzb = function (a, b, c) {
      a.info(
        "onConnectedScreenData_: Received screenData: " + JSON.stringify(b)
      );
      var d = new e8(b);
      mzb(
        a,
        d,
        function (e) {
          e
            ? ((a.Aa = !0), m9(a.D, d), o9(a, d), (a.Y = "unknown"), izb(a, c))
            : (g.NB(
                Error(
                  "CastSession, RemoteScreen from screenData: " +
                    JSON.stringify(b) +
                    " is not online."
                )
              ),
              a.yj());
        },
        5
      );
    },
    gzb = function (a, b) {
      g.dC(a.ma);
      a.ma = 0;
      b
        ? a.config_.enableCastLoungeToken && b.loungeToken
          ? b.deviceId
            ? (a.j && a.j.uuid == b.deviceId) ||
              (b.loungeTokenRefreshIntervalMs
                ? nzb(
                    a,
                    {
                      name: a.B.friendlyName,
                      screenId: b.screenId,
                      loungeToken: b.loungeToken,
                      dialId: b.deviceId,
                      screenIdType: "shortLived",
                    },
                    b.loungeTokenRefreshIntervalMs
                  )
                : (g.NB(
                    Error(
                      "No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " +
                        JSON.stringify(b) +
                        "."
                    )
                  ),
                  lzb(a, b.screenId)))
            : (g.NB(
                Error(
                  "No device id presents in mdxSessionStatusData: " +
                    JSON.stringify(b) +
                    "."
                )
              ),
              lzb(a, b.screenId))
          : lzb(a, b.screenId)
        : a.yj(Error("Waiting for session status timed out."));
    },
    kzb = function (a, b) {
      g.dC(a.G);
      a.G = 0;
      var c = null;
      if (b)
        if (b.loungeToken) {
          var d;
          (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
            (c = "staleLoungeToken");
        } else c = "missingLoungeToken";
      else c = "noLoungeTokenResponse";
      c
        ? (a.info(
            "Did not receive a new lounge token in onLoungeToken_ with data: " +
              (JSON.stringify(b) + ", error: " + c)
          ),
          (a.Y = c),
          izb(a, 3e4))
        : (fzb(a, b.loungeToken),
          (a.Aa = !1),
          (a.Y = "unknown"),
          izb(a, b.loungeTokenRefreshIntervalMs));
    },
    mzb = function (a, b, c, d) {
      g.dC(a.K);
      a.K = 0;
      bzb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.bC(function () {
              mzb(a, b, c, d - 1);
            }, 300));
      });
    },
    ozb = function (a) {
      g.dC(a.Z);
      a.Z = 0;
      g.dC(a.K);
      a.K = 0;
      g.dC(a.ma);
      a.ma = 0;
      g.dC(a.G);
      a.G = 0;
      g.dC(a.N);
      a.N = 0;
    },
    r9 = function (a, b, c, d) {
      n9.call(this, a, b, "DialSession");
      this.config_ = d;
      this.C = this.Z = null;
      this.Ga = "";
      this.Ta = c;
      this.Na = null;
      this.ma = function () {};
      this.Y = NaN;
      this.La = (0, g.fb)(this.N1, this);
      this.G = function () {};
      this.N = this.K = 0;
      this.qa = !1;
      this.Aa = "unknown";
    },
    s9 = function (a) {
      var b;
      return !!(
        a.config_.enableDialLoungeToken &&
        (null == (b = a.C) ? 0 : b.getDialAppInfo)
      );
    },
    pzb = function (a) {
      a.G = a.D.QS(
        a.Ga,
        a.B.label,
        a.B.friendlyName,
        s9(a),
        function (b, c) {
          a.G = function () {};
          a.qa = !0;
          o9(a, b);
          "shortLived" == b.idType && 0 < c && t9(a, c);
        },
        function (b) {
          a.G = function () {};
          a.yj(b);
        }
      );
    },
    qzb = function (a) {
      var b = {};
      b.pairingCode = a.Ga;
      b.theme = a.Ta;
      Awb() && (b.env_useStageMdx = 1);
      return g.Bl(b);
    },
    rzb = function (a) {
      return new Promise(function (b) {
        a.Ga = nwb();
        if (a.Na) {
          var c = new chrome.cast.DialLaunchResponse(!0, qzb(a));
          b(c);
          pzb(a);
        } else
          (a.ma = function () {
            g.dC(a.Y);
            a.ma = function () {};
            a.Y = NaN;
            var d = new chrome.cast.DialLaunchResponse(!0, qzb(a));
            b(d);
            pzb(a);
          }),
            (a.Y = g.bC(function () {
              a.ma();
            }, 100));
      });
    },
    tzb = function (a, b, c) {
      a.info(
        "initOnConnectedScreenDataPromise_: Received screenData: " +
          JSON.stringify(b)
      );
      var d = new e8(b);
      return new Promise(function (e) {
        szb(
          a,
          d,
          function (f) {
            f
              ? ((a.qa = !0), m9(a.D, d), o9(a, d), t9(a, c))
              : g.NB(
                  Error(
                    "DialSession, RemoteScreen from screenData: " +
                      JSON.stringify(b) +
                      " is not online."
                  )
                );
            e(f);
          },
          5
        );
      }).then(function (e) {
        return e ? new chrome.cast.DialLaunchResponse(!1) : rzb(a);
      });
    },
    uzb = function (a, b) {
      var c = a.Z.receiver.label,
        d = a.B.friendlyName;
      return new Promise(function (e) {
        $yb(
          a.D,
          c,
          b,
          d,
          function (f) {
            f && f.token && o9(a, f);
            e(f);
          },
          function (f) {
            p9(a, "Failed to get DIAL screen: " + f);
            e(null);
          }
        );
      }).then(function (e) {
        return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : rzb(a);
      });
    },
    szb = function (a, b, c, d) {
      g.dC(a.K);
      a.K = 0;
      bzb(a.D, b, function (e) {
        e || 0 > d
          ? c(e)
          : (a.K = g.bC(function () {
              szb(a, b, c, d - 1);
            }, 300));
      });
    },
    t9 = function (a, b) {
      a.info("getDialAppInfoWithTimeout_ " + b);
      s9(a) &&
        (g.dC(a.N),
        (a.N = 0),
        0 == b
          ? vzb(a)
          : (a.N = g.bC(function () {
              vzb(a);
            }, b)));
    },
    vzb = function (a) {
      s9(a) &&
        a.C.getDialAppInfo(
          function (b) {
            a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
            b = b.extraData || {};
            var c = null;
            if (b.loungeToken) {
              var d;
              (null == (d = a.j) ? void 0 : d.token) == b.loungeToken &&
                (c = "staleLoungeToken");
            } else c = "missingLoungeToken";
            c
              ? ((a.Aa = c), t9(a, 3e4))
              : ((a.qa = !1),
                (a.Aa = "unknown"),
                fzb(a, b.loungeToken),
                t9(a, b.loungeTokenRefreshIntervalMs));
          },
          function (b) {
            a.info("getDialAppInfo error: " + b);
            a.Aa = "noLoungeTokenResponse";
            t9(a, 3e4);
          }
        );
    },
    wzb = function (a) {
      g.dC(a.K);
      a.K = 0;
      g.dC(a.N);
      a.N = 0;
      a.G();
      a.G = function () {};
      g.dC(a.Y);
    },
    u9 = function (a, b) {
      n9.call(this, a, b, "ManualSession");
      this.C = g.bC((0, g.fb)(this.Pz, this, null), 150);
    },
    v9 = function (a, b) {
      g.fG.call(this);
      this.config_ = b;
      this.B = a;
      this.Z = b.appId || "233637DE";
      this.D = b.theme || "cl";
      this.Y = b.disableCastApi || !1;
      this.K = b.forceMirroring || !1;
      this.j = null;
      this.N = !1;
      this.C = [];
      this.G = (0, g.fb)(this.K8, this);
    },
    xzb = function (a, b) {
      return b
        ? g.Bb(
            a.C,
            function (c) {
              return f8(b, c.label);
            },
            a
          )
        : null;
    },
    w9 = function (a) {
      b9("Controller", a);
    },
    Gyb = function (a) {
      window.chrome &&
        chrome.cast &&
        chrome.cast.logMessage &&
        chrome.cast.logMessage(a);
    },
    x9 = function (a) {
      return a.N || !!a.C.length || !!a.j;
    },
    y9 = function (a, b, c) {
      b != a.j &&
        (g.sb(a.j),
        (a.j = b)
          ? (c
              ? a.oa("yt-remote-cast2-receiver-resumed", b.B)
              : a.oa("yt-remote-cast2-receiver-selected", b.B),
            b.subscribe("sessionScreen", (0, g.fb)(a.CY, a, b)),
            b.subscribe("sessionFailed", function () {
              return yzb(a, b);
            }),
            b.j
              ? a.oa("yt-remote-cast2-session-change", b.j)
              : c && a.j.Pz(null))
          : a.oa("yt-remote-cast2-session-change", null));
    },
    yzb = function (a, b) {
      a.j == b && a.oa("yt-remote-cast2-session-failed");
    },
    zzb = function (a) {
      var b = a.B.PS(),
        c = a.j && a.j.B;
      a = g.eq(
        b,
        function (d) {
          c && f8(d, c.label) && (c = null);
          var e = d.uuid ? d.uuid : d.id,
            f = xzb(this, d);
          f
            ? ((f.label = e), (f.friendlyName = d.name))
            : ((f = new chrome.cast.Receiver(e, d.name)),
              (f.receiverType = chrome.cast.ReceiverType.CUSTOM));
          return f;
        },
        a
      );
      c &&
        (c.receiverType != chrome.cast.ReceiverType.CUSTOM &&
          ((c = new chrome.cast.Receiver(c.label, c.friendlyName)),
          (c.receiverType = chrome.cast.ReceiverType.CUSTOM)),
        a.push(c));
      return a;
    },
    Gzb = function (a, b, c, d) {
      d.disableCastApi
        ? z9("Cannot initialize because disabled by Mdx config.")
        : Azb()
        ? Bzb(b, d) &&
          (Czb(!0),
          window.chrome && chrome.cast && chrome.cast.isAvailable
            ? Dzb(a, c)
            : ((window.__onGCastApiAvailable = function (e, f) {
                e
                  ? Dzb(a, c)
                  : (A9("Failed to load cast API: " + f),
                    Ezb(!1),
                    Czb(!1),
                    g.$C("yt-remote-cast-available"),
                    g.$C("yt-remote-cast-receiver"),
                    Fzb(),
                    c(!1));
              }),
              d.loadCastApiSetupScript
                ? g.Hra(
                    "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"
                  )
                : 0 <= window.navigator.userAgent.indexOf("Android") &&
                  0 <= window.navigator.userAgent.indexOf("Chrome/") &&
                  window.navigator.presentation
                ? 60 <= Cwb() && Lwb()
                : !window.chrome ||
                  !window.navigator.presentation ||
                  0 <= window.navigator.userAgent.indexOf("Edge")
                ? Gwb()
                : 89 <= Cwb()
                ? Nwb()
                : (Kwb(), o8(Mwb.map(Hwb)))))
        : z9("Cannot initialize because not running Chrome");
    },
    Fzb = function () {
      z9("dispose");
      var a = B9();
      a && a.dispose();
      g.Ua("yt.mdx.remote.cloudview.instance_", null);
      Hzb(!1);
      g.OE(Izb);
      Izb.length = 0;
    },
    C9 = function () {
      return !!g.ZC("yt-remote-cast-installed");
    },
    Jzb = function () {
      var a = g.ZC("yt-remote-cast-receiver");
      return a ? a.friendlyName : null;
    },
    Kzb = function () {
      z9("clearCurrentReceiver");
      g.$C("yt-remote-cast-receiver");
    },
    Lzb = function () {
      return C9()
        ? B9()
          ? B9().getCastSession()
          : (A9("getCastSelector: Cast is not initialized."), null)
        : (A9("getCastSelector: Cast API is not installed!"), null);
    },
    Mzb = function () {
      C9()
        ? B9()
          ? D9()
            ? (z9("Requesting cast selector."), B9().requestSession())
            : (z9("Wait for cast API to be ready to request the session."),
              Izb.push(g.NE("yt-remote-cast2-api-ready", Mzb)))
          : A9("requestCastSelector: Cast is not initialized.")
        : A9("requestCastSelector: Cast API is not installed!");
    },
    E9 = function (a, b) {
      D9()
        ? B9().setConnectedScreenStatus(a, b)
        : A9("setConnectedScreenStatus called before ready.");
    },
    Azb = function () {
      var a = 0 <= g.mc().search(/ (CrMo|Chrome|CriOS)\//);
      return g.mL || a;
    },
    Nzb = function (a, b) {
      B9().init(a, b);
    },
    Bzb = function (a, b) {
      var c = !1;
      B9() ||
        ((a = new v9(a, b)),
        a.subscribe("yt-remote-cast2-availability-change", function (d) {
          g.YC("yt-remote-cast-available", d);
          m8("yt-remote-cast2-availability-change", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
          z9("onReceiverSelected: " + d.friendlyName);
          g.YC("yt-remote-cast-receiver", d);
          m8("yt-remote-cast2-receiver-selected", d);
        }),
        a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
          z9("onReceiverResumed: " + d.friendlyName);
          g.YC("yt-remote-cast-receiver", d);
          m8("yt-remote-cast2-receiver-resumed", d);
        }),
        a.subscribe("yt-remote-cast2-session-change", function (d) {
          z9("onSessionChange: " + g8(d));
          d || g.$C("yt-remote-cast-receiver");
          m8("yt-remote-cast2-session-change", d);
        }),
        g.Ua("yt.mdx.remote.cloudview.instance_", a),
        (c = !0));
      z9("cloudview.createSingleton_: " + c);
      return c;
    },
    B9 = function () {
      return g.Va("yt.mdx.remote.cloudview.instance_");
    },
    Dzb = function (a, b) {
      Ezb(!0);
      Czb(!1);
      Nzb(a, function (c) {
        c
          ? (Hzb(!0), g.PE("yt-remote-cast2-api-ready"))
          : (A9("Failed to initialize cast API."),
            Ezb(!1),
            g.$C("yt-remote-cast-available"),
            g.$C("yt-remote-cast-receiver"),
            Fzb());
        b(c);
      });
    },
    z9 = function (a) {
      b9("cloudview", a);
    },
    A9 = function (a) {
      b9("cloudview", a);
    },
    Ezb = function (a) {
      z9("setCastInstalled_ " + a);
      g.YC("yt-remote-cast-installed", a);
    },
    D9 = function () {
      return !!g.Va("yt.mdx.remote.cloudview.apiReady_");
    },
    Hzb = function (a) {
      z9("setApiReady_ " + a);
      g.Ua("yt.mdx.remote.cloudview.apiReady_", a);
    },
    Czb = function (a) {
      g.Ua("yt.mdx.remote.cloudview.initializing_", a);
    },
    F9 = function (a) {
      this.index = -1;
      this.videoId = this.listId = "";
      this.volume = this.playerState = -1;
      this.muted = !1;
      this.audioTrackId = null;
      this.K = this.N = 0;
      this.trackData = null;
      this.Sk = this.mp = !1;
      this.Z = this.G = this.j = this.D = 0;
      this.C = NaN;
      this.B = !1;
      this.reset(a);
    },
    Ozb = function (a) {
      a.audioTrackId = null;
      a.trackData = null;
      a.playerState = -1;
      a.mp = !1;
      a.Sk = !1;
      a.N = 0;
      a.K = g.ib();
      a.D = 0;
      a.j = 0;
      a.G = 0;
      a.Z = 0;
      a.C = NaN;
      a.B = !1;
    },
    G9 = function (a) {
      return a.isPlaying() ? (g.ib() - a.K) / 1e3 : 0;
    },
    H9 = function (a, b) {
      a.N = b;
      a.K = g.ib();
    },
    I9 = function (a) {
      switch (a.playerState) {
        case 1:
        case 1081:
          return (g.ib() - a.K) / 1e3 + a.N;
        case -1e3:
          return 0;
      }
      return a.N;
    },
    J9 = function (a, b, c) {
      var d = a.videoId;
      a.videoId = b;
      a.index = c;
      b != d && Ozb(a);
    },
    Pzb = function (a) {
      var b = {};
      b.index = a.index;
      b.listId = a.listId;
      b.videoId = a.videoId;
      b.playerState = a.playerState;
      b.volume = a.volume;
      b.muted = a.muted;
      b.audioTrackId = a.audioTrackId;
      b.trackData = g.qd(a.trackData);
      b.hasPrevious = a.mp;
      b.hasNext = a.Sk;
      b.playerTime = a.N;
      b.playerTimeAt = a.K;
      b.seekableStart = a.D;
      b.seekableEnd = a.j;
      b.duration = a.G;
      b.loadedTime = a.Z;
      b.liveIngestionTime = a.C;
      return b;
    },
    L9 = function (a, b) {
      g.fG.call(this);
      this.C = 0;
      this.D = a;
      this.K = [];
      this.G = new tyb();
      this.B = this.j = null;
      this.Y = (0, g.fb)(this.A7, this);
      this.N = (0, g.fb)(this.mE, this);
      this.Z = (0, g.fb)(this.z7, this);
      this.ma = (0, g.fb)(this.D7, this);
      var c = 0;
      a
        ? ((c = a.getProxyState()),
          3 != c && (a.subscribe("proxyStateChange", this.cR, this), Qzb(this)))
        : (c = 3);
      0 != c &&
        (b
          ? this.cR(c)
          : g.bC(
              (0, g.fb)(function () {
                this.cR(c);
              }, this),
              0
            ));
      (a = Lzb()) && K9(this, a);
      this.subscribe("yt-remote-cast2-session-change", this.ma);
    },
    M9 = function (a) {
      return new F9(a.D.getPlayerContextData());
    },
    Qzb = function (a) {
      g.$b(
        "nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(
          " "
        ),
        function (b) {
          this.K.push(this.D.subscribe(b, g.gb(this.I8, b), this));
        },
        a
      );
    },
    Rzb = function (a) {
      g.$b(
        a.K,
        function (b) {
          this.D.unsubscribeByKey(b);
        },
        a
      );
      a.K.length = 0;
    },
    N9 = function (a) {
      return 1 == a.getState();
    },
    O9 = function (a, b) {
      var c = a.G;
      50 > c.j.length + c.B.length && a.G.B.push(b);
    },
    Szb = function (a, b, c) {
      var d = M9(a);
      H9(d, c);
      -1e3 != d.playerState && (d.playerState = b);
      P9(a, d);
    },
    Q9 = function (a, b, c) {
      a.D.sendMessage(b, c);
    },
    P9 = function (a, b) {
      Rzb(a);
      a.D.setPlayerContextData(Pzb(b));
      Qzb(a);
    },
    K9 = function (a, b) {
      a.B &&
        (a.B.removeUpdateListener(a.Y),
        a.B.removeMediaListener(a.N),
        a.mE(null));
      a.B = b;
      a.B &&
        (c9("Setting cast session: " + a.B.sessionId),
        a.B.addUpdateListener(a.Y),
        a.B.addMediaListener(a.N),
        a.B.media.length && a.mE(a.B.media[0]));
    },
    Tzb = function (a) {
      var b = a.j.media,
        c = a.j.customData;
      if (b && c) {
        var d = M9(a);
        b.contentId != d.videoId &&
          c9("Cast changing video to: " + b.contentId);
        d.videoId = b.contentId;
        d.playerState = c.playerState;
        H9(d, a.j.getEstimatedTime());
        P9(a, d);
      } else c9("No cast media video. Ignoring state update.");
    },
    R9 = function (a, b, c) {
      return (0, g.fb)(function (d) {
        this.cg(
          "Failed to " + b + " with cast v2 channel. Error code: " + d.code
        );
        d.code != chrome.cast.ErrorCode.TIMEOUT &&
          (this.cg("Retrying " + b + " using MDx browser channel."),
          Q9(this, b, c));
      }, a);
    },
    U9 = function (a, b, c, d) {
      d = void 0 === d ? !1 : d;
      g.fG.call(this);
      var e = this;
      this.K = NaN;
      this.Ga = !1;
      this.Y = this.Z = this.qa = this.Aa = NaN;
      this.ma = [];
      this.G = this.N = this.D = this.j = this.B = null;
      this.Na = a;
      this.La = d;
      this.ma.push(
        g.PC(window, "beforeunload", function () {
          e.Xy(2);
        })
      );
      this.C = [];
      this.j = new F9();
      this.Ta = b.id;
      this.Da = b.idType;
      this.B = Fyb(this.Na, c, this.VS, "shortLived" == this.Da, this.Ta);
      this.B.Sa("channelOpened", function () {
        Uzb(e);
      });
      this.B.Sa("channelClosed", function () {
        S9("Channel closed");
        isNaN(e.K) ? k8(!0) : k8();
        e.dispose();
      });
      this.B.Sa("channelError", function (f) {
        k8();
        isNaN(e.jD())
          ? (1 == f &&
              "shortLived" == e.Da &&
              e.oa("browserChannelAuthError", f),
            S9("Channel error: " + f + " without reconnection"),
            e.dispose())
          : ((e.Ga = !0),
            S9(
              "Channel error: " + f + " with reconnection in " + e.jD() + " ms"
            ),
            T9(e, 2));
      });
      this.B.Sa("channelMessage", function (f) {
        Vzb(e, f);
      });
      this.B.Br(b.token);
      this.subscribe("remoteQueueChange", function () {
        var f = e.j.videoId;
        g.aD() && g.YC("yt-remote-session-video-id", f);
      });
    },
    Wzb = function (a) {
      return g.Bb(a.C, function (b) {
        return "LOUNGE_SCREEN" == b.type;
      });
    },
    S9 = function (a) {
      b9("conn", a);
    },
    T9 = function (a, b) {
      a.oa("proxyStateChange", b);
    },
    Xzb = function (a) {
      a.K = g.bC(function () {
        S9("Connecting timeout");
        a.Xy(1);
      }, 2e4);
    },
    Yzb = function (a) {
      g.dC(a.K);
      a.K = NaN;
    },
    Zzb = function (a) {
      g.dC(a.Aa);
      a.Aa = NaN;
    },
    aAb = function (a) {
      $zb(a);
      a.qa = g.bC(function () {
        V9(a, "getNowPlaying");
      }, 2e4);
    },
    $zb = function (a) {
      g.dC(a.qa);
      a.qa = NaN;
    },
    Uzb = function (a) {
      S9("Channel opened");
      a.Ga &&
        ((a.Ga = !1),
        Zzb(a),
        (a.Aa = g.bC(function () {
          S9("Timing out waiting for a screen.");
          a.Xy(1);
        }, 15e3)));
    },
    cAb = function (a, b) {
      var c = null;
      if (b) {
        var d = Wzb(a);
        d &&
          (c = {
            clientName: d.clientName,
            deviceMake: d.brand,
            deviceModel: d.model,
            osVersion: d.osVersion,
          });
      }
      g.Ua("yt.mdx.remote.remoteClient_", c);
      b && (Yzb(a), Zzb(a));
      c = a.B.Ez() && isNaN(a.K);
      b == c
        ? b && (T9(a, 1), V9(a, "getSubtitlesTrack"))
        : b
        ? (a.ZV() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), bAb(a))
        : a.Xy(1);
    },
    dAb = function (a, b) {
      var c = b.params.videoId;
      delete b.params.videoId;
      c == a.j.videoId &&
        (g.id(b.params) ? (a.j.trackData = null) : (a.j.trackData = b.params),
        a.oa("remotePlayerChange"));
    },
    eAb = function (a, b, c) {
      var d = b.params.videoId || b.params.video_id,
        e = parseInt(b.params.currentIndex, 10);
      a.j.listId = b.params.listId || a.j.listId;
      J9(a.j, d, e);
      a.oa("remoteQueueChange", c);
    },
    gAb = function (a, b) {
      b.params = b.params || {};
      eAb(a, b, "NOW_PLAYING_MAY_CHANGE");
      fAb(a, b);
      a.oa("autoplayDismissed");
    },
    fAb = function (a, b) {
      var c = parseInt(b.params.currentTime || b.params.current_time, 10);
      H9(a.j, isNaN(c) ? 0 : c);
      c = parseInt(b.params.state, 10);
      c = isNaN(c) ? -1 : c;
      -1 == c && -1e3 == a.j.playerState && (c = -1e3);
      a.j.playerState = c;
      c = Number(b.params.loadedTime);
      a.j.Z = isNaN(c) ? 0 : c;
      a.j.rl(Number(b.params.duration));
      c = a.j;
      var d = Number(b.params.liveIngestionTime);
      c.C = d;
      c.B = isNaN(d) ? !1 : !0;
      c = a.j;
      d = Number(b.params.seekableStartTime);
      b = Number(b.params.seekableEndTime);
      c.D = isNaN(d) ? 0 : d;
      c.j = isNaN(b) ? 0 : b;
      1 == a.j.playerState ? aAb(a) : $zb(a);
      a.oa("remotePlayerChange");
    },
    hAb = function (a, b) {
      if (-1e3 != a.j.playerState) {
        var c = 1085;
        switch (parseInt(b.params.adState, 10)) {
          case 1:
            c = 1081;
            break;
          case 2:
            c = 1084;
            break;
          case 0:
            c = 1083;
        }
        a.j.playerState = c;
        b = parseInt(b.params.currentTime, 10);
        H9(a.j, isNaN(b) ? 0 : b);
        a.oa("remotePlayerChange");
      }
    },
    iAb = function (a, b) {
      var c = "true" == b.params.muted;
      a.j.volume = parseInt(b.params.volume, 10);
      a.j.muted = c;
      a.oa("remotePlayerChange");
    },
    jAb = function (a, b) {
      a.N = b.params.videoId;
      a.oa("nowAutoplaying", parseInt(b.params.timeout, 10));
    },
    kAb = function (a, b) {
      a.N = b.params.videoId || null;
      a.oa("autoplayUpNext", a.N);
    },
    lAb = function (a, b) {
      a.G = b.params.autoplayMode;
      a.oa("autoplayModeChange", a.G);
      "DISABLED" == a.G && a.oa("autoplayDismissed");
    },
    mAb = function (a, b) {
      var c = "true" == b.params.hasNext;
      a.j.mp = "true" == b.params.hasPrevious;
      a.j.Sk = c;
      a.oa("previousNextChange");
    },
    Vzb = function (a, b) {
      b = b.message;
      b.params
        ? S9("Received: action=" + b.action + ", params=" + g.um(b.params))
        : S9("Received: action=" + b.action + " {}");
      switch (b.action) {
        case "loungeStatus":
          b = b8(b.params.devices);
          a.C = g.eq(b, function (d) {
            return new d8(d);
          });
          b = !!g.Bb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          cAb(a, b);
          b = a.aX("mlm");
          a.oa("multiStateLoopEnabled", b);
          break;
        case "loungeScreenDisconnected":
          g.Gb(a.C, function (d) {
            return "LOUNGE_SCREEN" == d.type;
          });
          cAb(a, !1);
          break;
        case "remoteConnected":
          var c = new d8(b8(b.params.device));
          g.Bb(a.C, function (d) {
            return d.equals(c);
          }) || Qvb(a.C, c);
          break;
        case "remoteDisconnected":
          c = new d8(b8(b.params.device));
          g.Gb(a.C, function (d) {
            return d.equals(c);
          });
          break;
        case "gracefulDisconnect":
          break;
        case "playlistModified":
          eAb(a, b, "QUEUE_MODIFIED");
          break;
        case "nowPlaying":
          gAb(a, b);
          break;
        case "onStateChange":
          fAb(a, b);
          break;
        case "onAdStateChange":
          hAb(a, b);
          break;
        case "onVolumeChanged":
          iAb(a, b);
          break;
        case "onSubtitlesTrackChanged":
          dAb(a, b);
          break;
        case "nowAutoplaying":
          jAb(a, b);
          break;
        case "autoplayDismissed":
          a.oa("autoplayDismissed");
          break;
        case "autoplayUpNext":
          kAb(a, b);
          break;
        case "onAutoplayModeChanged":
          lAb(a, b);
          break;
        case "onHasPreviousNextChanged":
          mAb(a, b);
          break;
        case "requestAssistedSignIn":
          a.oa("assistedSignInRequested", b.params.authCode);
          break;
        case "onLoopModeChanged":
          a.oa("loopModeChange", b.params.loopMode);
          break;
        default:
          S9("Unrecognized action: " + b.action);
      }
    },
    bAb = function (a) {
      g.dC(a.Y);
      a.Y = g.bC(function () {
        a.Xy(1);
      }, 864e5);
    },
    V9 = function (a, b, c) {
      c
        ? S9("Sending: action=" + b + ", params=" + g.um(c))
        : S9("Sending: action=" + b);
      a.B.sendMessage(b, c);
    },
    nAb = function (a) {
      g9.call(this, "ScreenServiceProxy");
      this.hh = a;
      this.j = [];
      this.j.push(this.hh.$_s("screenChange", (0, g.fb)(this.R1, this)));
      this.j.push(this.hh.$_s("onlineScreenChange", (0, g.fb)(this.q8, this)));
    },
    sAb = function (a, b) {
      zwb();
      if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
        b = g.HB("MDX_CONFIG") || b;
        qwb();
        uwb();
        W9 ||
          ((W9 = new Z8(b ? b.loungeApiHost : void 0)),
          Awb() && (W9.j = "/api/loungedev"));
        X9 ||
          ((X9 = g.Va("yt.mdx.remote.deferredProxies_") || []),
          g.Ua("yt.mdx.remote.deferredProxies_", X9));
        oAb();
        var c = Y9();
        if (!c) {
          var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
          g.Ua("yt.mdx.remote.screenService_", d);
          c = Y9();
          var e = {};
          b &&
            (e = {
              appId: b.appId,
              disableDial: b.disableDial,
              theme: b.theme,
              loadCastApiSetupScript: b.loadCastApiSetupScript,
              disableCastApi: b.disableCastApi,
              enableDialLoungeToken: b.enableDialLoungeToken,
              enableCastLoungeToken: b.enableCastLoungeToken,
              forceMirroring: b.forceMirroring,
            });
          g.Ua(
            "yt.mdx.remote.enableConnectWithInitialState_",
            b ? b.enableConnectWithInitialState || !1 : !1
          );
          Gzb(
            a,
            d,
            function (f) {
              f
                ? Z9() && E9(Z9(), "YouTube TV")
                : d.subscribe("onlineScreenChange", function () {
                    m8("yt-remote-receiver-availability-change");
                  });
            },
            e
          );
        }
        b &&
          !g.Va("yt.mdx.remote.initialized_") &&
          (g.Ua("yt.mdx.remote.initialized_", !0),
          $9("Initializing: " + g.um(b)),
          a$.push(
            g.NE("yt-remote-cast2-api-ready", function () {
              m8("yt-remote-api-ready");
            })
          ),
          a$.push(
            g.NE("yt-remote-cast2-availability-change", function () {
              m8("yt-remote-receiver-availability-change");
            })
          ),
          a$.push(
            g.NE("yt-remote-cast2-receiver-selected", function () {
              b$(null);
              m8("yt-remote-auto-connect", "cast-selector-receiver");
            })
          ),
          a$.push(
            g.NE("yt-remote-cast2-receiver-resumed", function () {
              m8("yt-remote-receiver-resumed", "cast-selector-receiver");
            })
          ),
          a$.push(g.NE("yt-remote-cast2-session-change", pAb)),
          a$.push(
            g.NE("yt-remote-connection-change", function (f) {
              f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), Kzb());
            })
          ),
          a$.push(
            g.NE("yt-remote-cast2-session-failed", function () {
              m8("yt-remote-connection-failed");
            })
          ),
          (a = qAb()),
          b.isAuto && (a.id += "#dial"),
          (e = b.capabilities || []),
          g.KB("desktop_enable_autoplay") && e.push("atp"),
          0 < e.length && (a.capabilities = e),
          (a.name = b.device),
          (a.app = b.app),
          (b = b.theme) && (a.theme = b),
          $9(" -- with channel params: " + g.um(a)),
          a
            ? (g.YC("yt-remote-session-app", a.app),
              g.YC("yt-remote-session-name", a.name))
            : (g.$C("yt-remote-session-app"), g.$C("yt-remote-session-name")),
          g.Ua("yt.mdx.remote.channelParams_", a),
          c.start(),
          Z9() || rAb());
      }
    },
    tAb = function () {
      var a = Y9().hh.$_gos();
      var b = d$();
      b && e$() && (pwb(a, b) || a.push(b));
      return owb(a);
    },
    vAb = function () {
      var a = uAb();
      !a &&
        C9() &&
        Jzb() &&
        (a = { key: "cast-selector-receiver", name: Jzb() });
      return a;
    },
    uAb = function () {
      var a = tAb(),
        b = d$();
      b || (b = c$());
      return g.Bb(a, function (c) {
        return b && f8(b, c.key) ? !0 : !1;
      });
    },
    d$ = function () {
      var a = Z9();
      if (!a) return null;
      var b = Y9().Mk();
      return h8(b, a);
    },
    pAb = function (a) {
      $9("remote.onCastSessionChange_: " + g8(a));
      if (a) {
        var b = d$();
        if (b && b.id == a.id) {
          if (
            (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token))
          )
            f$ && (f$.token = a), (b = e$()) && b.Br(a);
        } else b && g$(), h$(a, 1);
      } else e$() && g$();
    },
    g$ = function () {
      D9() ? B9().stopSession() : A9("stopSession called before API ready.");
      var a = e$();
      a && (a.disconnect(1), wAb(null));
    },
    xAb = function () {
      var a = e$();
      return !!a && 3 != a.getProxyState();
    },
    $9 = function (a) {
      b9("remote", a);
    },
    Y9 = function () {
      if (!yAb) {
        var a = g.Va("yt.mdx.remote.screenService_");
        yAb = a ? new nAb(a) : null;
      }
      return yAb;
    },
    Z9 = function () {
      return g.Va("yt.mdx.remote.currentScreenId_");
    },
    zAb = function (a) {
      g.Ua("yt.mdx.remote.currentScreenId_", a);
    },
    AAb = function () {
      return g.Va("yt.mdx.remote.connectData_");
    },
    b$ = function (a) {
      g.Ua("yt.mdx.remote.connectData_", a);
    },
    e$ = function () {
      return g.Va("yt.mdx.remote.connection_");
    },
    wAb = function (a) {
      var b = e$();
      b$(null);
      a || zAb("");
      g.Ua("yt.mdx.remote.connection_", a);
      X9 &&
        (g.$b(X9, function (c) {
          c(a);
        }),
        (X9.length = 0));
      b && !a
        ? m8("yt-remote-connection-change", !1)
        : !b && a && m8("yt-remote-connection-change", !0);
    },
    c$ = function () {
      var a = g.aD();
      if (!a) return null;
      var b = Y9();
      if (!b) return null;
      b = b.Mk();
      return h8(b, a);
    },
    h$ = function (a, b) {
      Z9();
      d$() && d$();
      if (i$) f$ = a;
      else {
        zAb(a.id);
        var c = g.Va("yt.mdx.remote.enableConnectWithInitialState_") || !1;
        a = new U9(W9, a, qAb(), c);
        a.connect(b, AAb());
        a.subscribe("beforeDisconnect", function (d) {
          m8("yt-remote-before-disconnect", d);
        });
        a.subscribe("beforeDispose", function () {
          e$() && (e$(), wAb(null));
        });
        a.subscribe("browserChannelAuthError", function () {
          var d = d$();
          d &&
            "shortLived" == d.idType &&
            (D9()
              ? B9().handleBrowserChannelAuthError()
              : A9("refreshLoungeToken called before API ready."));
        });
        wAb(a);
      }
    },
    rAb = function () {
      var a = c$();
      a
        ? ($9("Resume connection to: " + g8(a)), h$(a, 0))
        : (k8(),
          Kzb(),
          $9("Skipping connecting because no session screen found."));
    },
    oAb = function () {
      var a = qAb();
      if (g.id(a)) {
        a = j8();
        var b = g.ZC("yt-remote-session-name") || "",
          c = g.ZC("yt-remote-session-app") || "";
        a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 };
        a.authuser = String(g.HB("SESSION_INDEX", "0"));
        (b = g.HB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
        g.Ua("yt.mdx.remote.channelParams_", a);
      }
    },
    qAb = function () {
      return g.Va("yt.mdx.remote.channelParams_") || {};
    },
    DAb = function (a, b, c) {
      g.J.call(this);
      var d = this;
      this.module = a;
      this.J = b;
      this.Gc = c;
      this.events = new g.TK(this);
      this.Y = this.events.T(this.J, "onVolumeChange", function (e) {
        BAb(d, e);
      });
      this.D = !1;
      this.G = new g.KL(64);
      this.j = new g.eu(this.RZ, 500, this);
      this.B = new g.eu(this.SZ, 1e3, this);
      this.N = new p8(this.Naa, 0, this);
      this.C = {};
      this.Z = new g.eu(this.G_, 1e3, this);
      this.K = new q8(this.seekTo, 1e3, this);
      g.L(this, this.events);
      this.events.T(b, "onCaptionsTrackListChanged", this.b8);
      this.events.T(b, "captionschanged", this.x7);
      this.events.T(b, "captionssettingschanged", this.b_);
      this.events.T(b, "videoplayerreset", this.pJ);
      this.events.T(b, "mdxautoplaycancel", function () {
        d.Gc.pV();
      });
      b.L("enable_mdx_video_play_directly") &&
        this.events.T(b, "videodatachange", function () {
          CAb(d.module) || j$(d) || k$(d, 0);
        });
      a = this.Gc;
      a.isDisposed();
      a.subscribe("proxyStateChange", this.zY, this);
      a.subscribe("remotePlayerChange", this.sE, this);
      a.subscribe("remoteQueueChange", this.pJ, this);
      a.subscribe("previousNextChange", this.wY, this);
      a.subscribe("nowAutoplaying", this.rY, this);
      a.subscribe("autoplayDismissed", this.XX, this);
      g.L(this, this.j);
      g.L(this, this.B);
      g.L(this, this.N);
      g.L(this, this.Z);
      g.L(this, this.K);
      this.b_();
      this.pJ();
      this.sE();
    },
    BAb = function (a, b) {
      if (j$(a)) {
        a.Gc.unsubscribe("remotePlayerChange", a.sE, a);
        var c = Math.round(b.volume);
        b = !!b.muted;
        var d = M9(a.Gc);
        if (c !== d.volume || b !== d.muted) a.Gc.setVolume(c, b), a.Z.start();
        a.Gc.subscribe("remotePlayerChange", a.sE, a);
      }
    },
    EAb = function (a) {
      a.Hc(0);
      a.j.stop();
      a.zc(new g.KL(64));
    },
    FAb = function (a, b) {
      if (j$(a) && !a.D) {
        var c = null;
        b && ((c = { style: a.J.getSubtitlesUserSettings() }), g.rd(c, b));
        a.Gc.US(a.J.getVideoData(1).videoId, c);
        a.C = M9(a.Gc).trackData;
      }
    },
    k$ = function (a, b) {
      var c = a.J.getPlaylist();
      if (null == c ? 0 : c.listId) {
        var d = c.index;
        var e = c.listId.toString();
      }
      c = a.J.getVideoData(1);
      a.Gc.playVideo(c.videoId, b, d, e, c.playerParams, c.Aa, Pvb(c));
      a.zc(new g.KL(1));
    },
    GAb = function (a, b) {
      if (b) {
        var c = a.J.getOption("captions", "tracklist", { OW: 1 });
        c && c.length
          ? (a.J.setOption("captions", "track", b), (a.D = !1))
          : (a.J.loadModule("captions"), (a.D = !0));
      } else a.J.setOption("captions", "track", {});
    },
    j$ = function (a) {
      return M9(a.Gc).videoId === a.J.getVideoData(1).videoId;
    },
    l$ = function () {
      g.U.call(this, {
        I: "div",
        S: "ytp-mdx-popup-dialog",
        W: { role: "dialog" },
        V: [
          {
            I: "div",
            S: "ytp-mdx-popup-dialog-inner-content",
            V: [
              { I: "div", S: "ytp-mdx-popup-title", xa: "You're signed out" },
              {
                I: "div",
                S: "ytp-mdx-popup-description",
                xa: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.",
              },
              {
                I: "div",
                S: "ytp-mdx-privacy-popup-buttons",
                V: [
                  {
                    I: "button",
                    Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                    xa: "Cancel",
                  },
                  {
                    I: "button",
                    Ma: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                    xa: "Confirm",
                  },
                ],
              },
            ],
          },
        ],
      });
      this.j = new g.PG(this, 250);
      this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
      this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
      g.L(this, this.j);
      this.T(this.cancelButton, "click", this.B);
      this.T(this.confirmButton, "click", this.C);
    },
    m$ = function (a) {
      g.U.call(this, {
        I: "div",
        S: "ytp-remote",
        V: [
          {
            I: "div",
            S: "ytp-remote-display-status",
            V: [
              { I: "div", S: "ytp-remote-display-status-icon", V: [g.Gua()] },
              {
                I: "div",
                S: "ytp-remote-display-status-text",
                xa: "{{statustext}}",
              },
            ],
          },
        ],
      });
      this.api = a;
      this.j = new g.PG(this, 250);
      g.L(this, this.j);
      this.T(a, "presentingplayerstatechange", this.onStateChange);
      this.Fc(a.Tb());
    },
    n$ = function (a, b) {
      g.EX.call(this, "Play on", 1, a, b);
      this.J = a;
      this.St = {};
      this.T(a, "onMdxReceiversChange", this.D);
      this.T(a, "presentingplayerstatechange", this.D);
      this.D();
    },
    HAb = function (a) {
      g.xV.call(this, a);
      this.Ep = { key: nwb(), name: "This computer" };
      this.Sl = null;
      this.subscriptions = [];
      this.iQ = this.Gc = null;
      this.St = [this.Ep];
      this.Fs = this.Ep;
      this.gf = new g.KL(64);
      this.jX = 0;
      this.Qh = -1;
      this.ME = !1;
      this.KE = this.IA = null;
      if (!g.hS(this.player.U()) && !g.kH(this.player.U())) {
        a = this.player;
        var b = g.cU(a);
        b && (b = b.jn()) && ((b = new n$(a, b)), g.L(this, b));
        b = new m$(a);
        g.L(this, b);
        g.qU(a, b.element, 4);
        this.IA = new l$();
        g.L(this, this.IA);
        g.qU(a, this.IA.element, 4);
        this.ME = !!c$();
      }
    },
    o$ = function (a) {
      a.KE &&
        (a.player.removeEventListener("presentingplayerstatechange", a.KE),
        (a.KE = null));
    },
    IAb = function (a, b, c) {
      a.gf = c;
      a.player.oa("presentingplayerstatechange", new g.UG(c, b));
    },
    p$ = function (a, b) {
      if (b.key !== a.Fs.key)
        if (b.key === a.Ep.key) g$();
        else if (
          (CAb(a) && JAb(a),
          (a.Fs = b),
          !a.player
            .U()
            .L("disable_mdx_connection_in_mdx_module_for_music_web") ||
            !g.kH(a.player.U()))
        ) {
          var c = a.player.getPlaylistId();
          var d = a.player.getVideoData(1);
          var e = d.videoId;
          if (
            (!c && !e) ||
            ((2 === a.player.getAppState() || 1 === a.player.getAppState()) &&
              a.player
                .U()
                .L("should_clear_video_data_on_player_cued_unstarted"))
          )
            d = null;
          else {
            var f = a.player.getPlaylist();
            if (f) {
              var h = [];
              for (var l = 0; l < f.length; l++) h[l] = g.uV(f, l).videoId;
            } else h = [e];
            f = a.player.getCurrentTime(1);
            a = {
              videoIds: h,
              listId: c,
              videoId: e,
              playerParams: d.playerParams,
              clickTrackingParams: d.Aa,
              index: Math.max(a.player.getPlaylistIndex(), 0),
              currentTime: 0 === f ? void 0 : f,
            };
            (d = Pvb(d)) && (a.locationInfo = d);
            d = a;
          }
          $9("Connecting to: " + g.um(b));
          "cast-selector-receiver" == b.key
            ? (b$(d || null),
              (b = d || null),
              D9()
                ? B9().setLaunchParams(b)
                : A9("setLaunchParams called before ready."))
            : !d && xAb() && Z9() == b.key
            ? m8("yt-remote-connection-change", !0)
            : (g$(),
              b$(d || null),
              (d = Y9().Mk()),
              (b = h8(d, b.key)) && h$(b, 1));
        }
    },
    CAb = function (a) {
      var b = a.player.U();
      return !b.L("mdx_enable_privacy_disclosure_ui") ||
        a.isLoggedIn() ||
        a.ME ||
        !a.IA
        ? !1
        : g.sS(b) || g.uS(b);
    },
    JAb = function (a) {
      a.player.Tb().isPlaying()
        ? a.player.pauseVideo()
        : ((a.KE = function (b) {
            !a.ME && g.XG(b, 8) && (a.player.pauseVideo(), o$(a));
          }),
          a.player.addEventListener("presentingplayerstatechange", a.KE));
      a.IA && a.IA.xd();
      e$() || (i$ = !0);
    };
  g.yx.prototype.Rs = g.ca(0, function () {
    return g.Ij(this, 6);
  });
  var Sxb = {
      "\x00": "\\0",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\x0B",
      '"': '\\"',
      "\\": "\\\\",
      "<": "\\u003C",
    },
    R8 = { "'": "\\'" },
    hwb = {
      Ola: "atp",
      S_a: "ska",
      XXa: "que",
      RPa: "mus",
      R_a: "sus",
      yBa: "dsp",
      dZa: "seq",
      uOa: "mic",
      Esa: "dpa",
      Yma: "cds",
      IPa: "mlm",
      ssa: "dsdtr",
      rQa: "ntb",
      Wab: "vsp",
      uta: "scn",
      lYa: "rpe",
      qsa: "dcn",
      rsa: "dcp",
    },
    iwb = {
      u3: "u",
      CLASSIC: "cl",
      X2: "k",
      H0: "i",
      s0: "cr",
      f3: "m",
      E0: "g",
      eU: "up",
    };
  d8.prototype.equals = function (a) {
    return a ? this.id == a.id : !1;
  };
  var l8,
    twb = "";
  Bwb.prototype.flush = function (a, b) {
    a = void 0 === a ? [] : a;
    b = void 0 === b ? !1 : b;
    if (g.KB("enable_client_streamz_web")) {
      a = g.u(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = g.Jea(c.value)),
          (c = { serializedIncrementBatch: g.lg(c.j()) }),
          g.rD("streamzIncremented", c, { sendIsolatedPayload: b });
    }
  };
  var n8,
    Jwb = Dwb("loadCastFramework") || Dwb("loadCastApplicationFramework"),
    Mwb = [
      "pkedcjkdefgpdelpbcmbmeomcjbeemfm",
      "enhhojjnijigcajfphajepfemndkmdlo",
    ];
  g.kb(p8, g.J);
  g.k = p8.prototype;
  g.k.l1 = function (a) {
    this.D = arguments;
    this.j = !1;
    this.od ? (this.C = g.ib() + this.Ri) : (this.od = g.gg(this.G, this.Ri));
  };
  g.k.stop = function () {
    this.od && (g.Sa.clearTimeout(this.od), (this.od = null));
    this.C = null;
    this.j = !1;
    this.D = [];
  };
  g.k.pause = function () {
    ++this.B;
  };
  g.k.resume = function () {
    this.B &&
      (--this.B,
      !this.B && this.j && ((this.j = !1), this.K.apply(null, this.D)));
  };
  g.k.ya = function () {
    this.stop();
    p8.Of.ya.call(this);
  };
  g.k.m1 = function () {
    this.od && (g.Sa.clearTimeout(this.od), (this.od = null));
    this.C
      ? ((this.od = g.gg(this.G, this.C - g.ib())), (this.C = null))
      : this.B
      ? (this.j = !0)
      : ((this.j = !1), this.K.apply(null, this.D));
  };
  g.w(q8, g.J);
  g.k = q8.prototype;
  g.k.XK = function (a) {
    this.C = arguments;
    this.od || this.B ? (this.j = !0) : Owb(this);
  };
  g.k.stop = function () {
    this.od &&
      (g.Sa.clearTimeout(this.od),
      (this.od = null),
      (this.j = !1),
      (this.C = null));
  };
  g.k.pause = function () {
    this.B++;
  };
  g.k.resume = function () {
    this.B--;
    this.B || !this.j || this.od || ((this.j = !1), Owb(this));
  };
  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.stop();
  };
  r8.prototype.stringify = function (a) {
    return g.Sa.JSON.stringify(a, void 0);
  };
  r8.prototype.parse = function (a) {
    return g.Sa.JSON.parse(a, void 0);
  };
  g.kb(Pwb, g.xb);
  g.kb(Qwb, g.xb);
  var Rwb = null;
  g.kb(Twb, g.xb);
  g.kb(Uwb, g.xb);
  g.kb(Vwb, g.xb);
  Wwb.prototype.info = function () {};
  Wwb.prototype.warning = function () {};
  var cxb = {},
    x8 = {};
  g.k = v8.prototype;
  g.k.setTimeout = function (a) {
    this.yb = a;
  };
  g.k.q1 = function (a) {
    a = a.target;
    var b = this.Za;
    b && 3 == g.Bm(a) ? b.XK() : this.xS(a);
  };
  g.k.xS = function (a) {
    try {
      if (a == this.j)
        a: {
          var b = g.Bm(this.j),
            c = this.j.B,
            d = this.j.getStatus();
          if (
            !(3 > b) &&
            (3 != b ||
              g.vS ||
              (this.j && (this.B.B || g.Dm(this.j) || g.Em(this.j))))
          ) {
            this.La || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
            A8(this);
            var e = this.j.getStatus();
            this.Ib = e;
            b: if (axb(this)) {
              var f = g.Em(this.j);
              a = "";
              var h = f.length,
                l = 4 == g.Bm(this.j);
              if (!this.B.C) {
                if ("undefined" === typeof TextDecoder) {
                  y8(this);
                  z8(this);
                  var m = "";
                  break b;
                }
                this.B.C = new g.Sa.TextDecoder();
              }
              for (c = 0; c < h; c++)
                (this.B.B = !0),
                  (a += this.B.C.decode(f[c], { stream: l && c == h - 1 }));
              f.splice(0, h);
              this.B.j += a;
              this.ma = 0;
              m = this.B.j;
            } else m = g.Dm(this.j);
            if ((this.C = 200 == e)) {
              if (this.dc && !this.Va) {
                b: {
                  if (this.j) {
                    var n = g.Fm(this.j, "X-HTTP-Initial-Response");
                    if (n && !g.fc(n)) {
                      var p = n;
                      break b;
                    }
                  }
                  p = null;
                }
                if ((e = p)) (this.Va = !0), dxb(this, e);
                else {
                  this.C = !1;
                  this.K = 3;
                  t8(12);
                  y8(this);
                  z8(this);
                  break a;
                }
              }
              this.Da
                ? (exb(this, b, m),
                  g.vS &&
                    this.C &&
                    3 == b &&
                    (this.ib.Sa(this.jb, "tick", this.o1), this.jb.start()))
                : dxb(this, m);
              4 == b && y8(this);
              this.C &&
                !this.La &&
                (4 == b ? gxb(this.G, this) : ((this.C = !1), w8(this)));
            } else
              g.zfa(this.j),
                400 == e && 0 < m.indexOf("Unknown SID")
                  ? ((this.K = 3), t8(12))
                  : ((this.K = 0), t8(13)),
                y8(this),
                z8(this);
          }
        }
    } catch (q) {
    } finally {
    }
  };
  g.k.o1 = function () {
    if (this.j) {
      var a = g.Bm(this.j),
        b = g.Dm(this.j);
      this.ma < b.length &&
        (A8(this), exb(this, a, b), this.C && 4 != a && w8(this));
    }
  };
  g.k.cancel = function () {
    this.La = !0;
    y8(this);
  };
  g.k.n1 = function () {
    this.Y = null;
    var a = Date.now();
    0 <= a - this.Qb
      ? (2 != this.Ta && (s8(3), t8(17)), y8(this), (this.K = 2), z8(this))
      : fxb(this, this.Qb - a);
  };
  g.k.getLastError = function () {
    return this.K;
  };
  g.k.LN = function () {
    return this.j;
  };
  pxb.prototype.cancel = function () {
    this.C = rxb(this);
    if (this.B) this.B.cancel(), (this.B = null);
    else if (this.j && 0 !== this.j.size) {
      for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next())
        b.value.cancel();
      this.j.clear();
    }
  };
  g.k = vxb.prototype;
  g.k.yS = 8;
  g.k.Gh = 1;
  g.k.connect = function (a, b, c, d) {
    t8(0);
    this.wc = a;
    this.La = b || {};
    c && void 0 !== d && ((this.La.OSID = c), (this.La.OAID = d));
    this.Va = this.Xc;
    this.Na = lxb(this, null, this.wc);
    E8(this);
  };
  g.k.disconnect = function () {
    xxb(this);
    if (3 == this.Gh) {
      var a = this.fb++,
        b = this.Na.clone();
      g.ro(b, "SID", this.D);
      g.ro(b, "RID", a);
      g.ro(b, "TYPE", "terminate");
      H8(this, b);
      a = new v8(this, this.D, a);
      a.Ta = 2;
      a.N = $7(b.clone());
      b = !1;
      if (g.Sa.navigator && g.Sa.navigator.sendBeacon)
        try {
          b = g.Sa.navigator.sendBeacon(a.N.toString(), "");
        } catch (c) {}
      !b && g.Sa.Image && ((new Image().src = a.N), (b = !0));
      b || ((a.j = $wb(a.G, null)), a.j.send(a.N));
      a.Aa = Date.now();
      w8(a);
    }
    Dxb(this);
  };
  g.k.ih = function () {
    return 0 == this.Gh;
  };
  g.k.getState = function () {
    return this.Gh;
  };
  g.k.AS = function (a) {
    if (this.K)
      if (((this.K = null), 1 == this.Gh)) {
        if (!a) {
          this.fb = Math.floor(1e5 * Math.random());
          a = this.fb++;
          var b = new v8(this, "", a),
            c = this.Y;
          this.Qb && (c ? ((c = g.pd(c)), g.rd(c, this.Qb)) : (c = this.Qb));
          null !== this.N || this.wb || ((b.Na = c), (c = null));
          var d;
          if (this.yb)
            a: {
              for (var e = (d = 0); e < this.C.length; e++) {
                b: {
                  var f = this.C[e];
                  if (
                    "__data__" in f.map &&
                    ((f = f.map.__data__), "string" === typeof f)
                  ) {
                    f = f.length;
                    break b;
                  }
                  f = void 0;
                }
                if (void 0 === f) break;
                d += f;
                if (4096 < d) {
                  d = e;
                  break a;
                }
                if (4096 === d || e === this.C.length - 1) {
                  d = e + 1;
                  break a;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          d = Axb(this, b, d);
          e = this.Na.clone();
          g.ro(e, "RID", a);
          g.ro(e, "CVER", 22);
          this.Da && g.ro(e, "X-HTTP-Session-Id", this.Da);
          H8(this, e);
          c &&
            (this.wb
              ? (d = "headers=" + g.xe(g.xga(c)) + "&" + d)
              : this.N && g.vo(e, this.N, c));
          kxb(this.B, b);
          this.eg && g.ro(e, "TYPE", "init");
          this.yb
            ? (g.ro(e, "$req", d),
              g.ro(e, "SID", "null"),
              (b.dc = !0),
              Zwb(b, e, null))
            : Zwb(b, e, d);
          this.Gh = 2;
        }
      } else
        3 == this.Gh &&
          (a ? Bxb(this, a) : 0 == this.C.length || qxb(this.B) || Bxb(this));
  };
  g.k.zS = function () {
    this.Z = null;
    Cxb(this);
    if (this.Tc && !(this.jb || null == this.j || 0 >= this.Ud)) {
      var a = 2 * this.Ud;
      this.Ga = u8((0, g.fb)(this.w7, this), a);
    }
  };
  g.k.w7 = function () {
    this.Ga &&
      ((this.Ga = null),
      (this.Va = !1),
      (this.jb = !0),
      t8(10),
      C8(this),
      Cxb(this));
  };
  g.k.vP = function (a) {
    this.j == a && this.Tc && !this.jb && (wxb(this), (this.jb = !0), t8(11));
  };
  g.k.s1 = function () {
    null != this.ma && ((this.ma = null), C8(this), ixb(this), t8(19));
  };
  g.k.saa = function (a) {
    a ? t8(2) : t8(1);
  };
  g.k.isActive = function () {
    return !!this.G && this.G.isActive(this);
  };
  g.k = Fxb.prototype;
  g.k.ES = function () {};
  g.k.DS = function () {};
  g.k.CS = function () {};
  g.k.BS = function () {};
  g.k.isActive = function () {
    return !0;
  };
  g.k.t1 = function () {};
  g.kb(J8, g.Gd);
  J8.prototype.open = function () {
    this.j.G = this.C;
    this.K && (this.j.Ta = !0);
    this.j.connect(this.G, this.B || void 0);
  };
  J8.prototype.close = function () {
    this.j.disconnect();
  };
  J8.prototype.send = function (a) {
    var b = this.j;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.D && ((c = {}), (c.__data__ = g.um(a)), (a = c));
    b.C.push(new oxb(b.Sf++, a));
    3 == b.Gh && E8(b);
  };
  J8.prototype.ya = function () {
    this.j.G = null;
    delete this.C;
    this.j.disconnect();
    delete this.j;
    J8.Of.ya.call(this);
  };
  g.kb(Hxb, Pwb);
  g.kb(Ixb, Qwb);
  g.kb(I8, Fxb);
  I8.prototype.ES = function () {
    this.j.dispatchEvent("m");
  };
  I8.prototype.DS = function (a) {
    this.j.dispatchEvent(new Hxb(a));
  };
  I8.prototype.CS = function (a) {
    this.j.dispatchEvent(new Ixb(a));
  };
  I8.prototype.BS = function () {
    this.j.dispatchEvent("n");
  };
  var L8 = new g.Gd();
  g.w(Lxb, g.xb);
  g.k = N8.prototype;
  g.k.Du = null;
  g.k.bq = !1;
  g.k.Ix = null;
  g.k.ZK = null;
  g.k.Gx = null;
  g.k.Hx = null;
  g.k.Sr = null;
  g.k.Ur = null;
  g.k.Eu = null;
  g.k.dj = null;
  g.k.bG = 0;
  g.k.Yn = null;
  g.k.aG = null;
  g.k.Tr = null;
  g.k.IB = -1;
  g.k.zZ = !0;
  g.k.Cu = !1;
  g.k.YK = 0;
  g.k.ZF = null;
  var Qxb = {},
    Pxb = {};
  g.k = N8.prototype;
  g.k.setTimeout = function (a) {
    this.B = a;
  };
  g.k.w1 = function (a) {
    a = a.target;
    var b = this.ZF;
    b && 3 == g.Bm(a) ? b.XK() : this.FS(a);
  };
  g.k.FS = function (a) {
    try {
      if (a == this.dj)
        a: {
          var b = g.Bm(this.dj),
            c = this.dj.B,
            d = this.dj.getStatus();
          if ((g.af && !g.Nc(10)) || (g.Pc && !g.Mc("420+"))) {
            if (4 > b) break a;
          } else if (3 > b || (3 == b && !g.Dm(this.dj))) break a;
          this.Cu ||
            4 != b ||
            7 == c ||
            (8 == c || 0 >= d ? this.j.Kn(3) : this.j.Kn(2));
          Vxb(this);
          var e = this.dj.getStatus();
          this.IB = e;
          var f = g.Dm(this.dj);
          if ((this.bq = 200 == e)) {
            4 == b && P8(this);
            if (this.Da) {
              for (a = !0; !this.Cu && this.bG < f.length; ) {
                var h = Rxb(this, f);
                if (h == Pxb) {
                  4 == b && ((this.Tr = 4), M8(15), (a = !1));
                  break;
                } else if (h == Qxb) {
                  this.Tr = 4;
                  M8(16);
                  a = !1;
                  break;
                } else Wxb(this, h);
              }
              4 == b && 0 == f.length && ((this.Tr = 1), M8(17), (a = !1));
              this.bq = this.bq && a;
              a || (P8(this), Q8(this));
            } else Wxb(this, f);
            this.bq &&
              !this.Cu &&
              (4 == b ? this.j.cG(this) : ((this.bq = !1), O8(this)));
          } else
            400 == e && 0 < f.indexOf("Unknown SID")
              ? ((this.Tr = 3), M8(13))
              : ((this.Tr = 0), M8(14)),
              P8(this),
              Q8(this);
        }
    } catch (l) {
    } finally {
    }
  };
  g.k.H9 = function (a) {
    K8((0, g.fb)(this.G9, this, a), 0);
  };
  g.k.G9 = function (a) {
    this.Cu || (Vxb(this), Wxb(this, a), O8(this));
  };
  g.k.EY = function (a) {
    K8((0, g.fb)(this.F9, this, a), 0);
  };
  g.k.F9 = function (a) {
    this.Cu || (P8(this), (this.bq = a), this.j.cG(this), this.j.Kn(4));
  };
  g.k.cancel = function () {
    this.Cu = !0;
    P8(this);
  };
  g.k.v1 = function () {
    this.Ix = null;
    var a = Date.now();
    0 <= a - this.ZK
      ? (2 != this.Hx && this.j.Kn(3),
        P8(this),
        (this.Tr = 2),
        M8(18),
        Q8(this))
      : Uxb(this, this.ZK - a);
  };
  g.k.getLastError = function () {
    return this.Tr;
  };
  g.k = Zxb.prototype;
  g.k.bL = null;
  g.k.Ij = null;
  g.k.MJ = !1;
  g.k.TZ = null;
  g.k.pH = null;
  g.k.HO = null;
  g.k.cL = null;
  g.k.Pl = null;
  g.k.cq = -1;
  g.k.JB = null;
  g.k.oC = null;
  g.k.connect = function (a) {
    this.cL = a;
    a = T8(this.j, null, this.cL);
    M8(3);
    this.TZ = Date.now();
    var b = this.j.Y;
    null != b
      ? ((this.JB = b[0]),
        (this.oC = b[1])
          ? ((this.Pl = 1), $xb(this))
          : ((this.Pl = 2), ayb(this)))
      : (a8(a, "MODE", "init"),
        (this.Ij = new N8(this)),
        (this.Ij.Du = this.bL),
        Oxb(this.Ij, a, !1, null, !0),
        (this.Pl = 0));
  };
  g.k.X3 = function (a) {
    if (a) (this.Pl = 2), ayb(this);
    else {
      M8(4);
      var b = this.j;
      b.zo = b.Ds.cq;
      X8(b, 9);
    }
    a && this.Kn(2);
  };
  g.k.aL = function (a) {
    return this.j.aL(a);
  };
  g.k.abort = function () {
    this.Ij && (this.Ij.cancel(), (this.Ij = null));
    this.cq = -1;
  };
  g.k.ih = function () {
    return !1;
  };
  g.k.GS = function (a, b) {
    this.cq = a.IB;
    if (0 == this.Pl)
      if (b) {
        try {
          var c = this.B.parse(b);
        } catch (d) {
          a = this.j;
          a.zo = this.cq;
          X8(a, 2);
          return;
        }
        this.JB = c[0];
        this.oC = c[1];
      } else (a = this.j), (a.zo = this.cq), X8(a, 2);
    else if (2 == this.Pl)
      if (this.MJ) M8(7), (this.HO = Date.now());
      else if ("11111" == b) {
        if (
          (M8(6),
          (this.MJ = !0),
          (this.pH = Date.now()),
          (a = this.pH - this.TZ),
          !g.af || g.Nc(10) || 500 > a)
        )
          (this.cq = 200), this.Ij.cancel(), M8(12), U8(this.j, this, !0);
      } else M8(8), (this.pH = this.HO = Date.now()), (this.MJ = !1);
  };
  g.k.cG = function () {
    this.cq = this.Ij.IB;
    if (this.Ij.bq)
      0 == this.Pl
        ? this.oC
          ? ((this.Pl = 1), $xb(this))
          : ((this.Pl = 2), ayb(this))
        : 2 == this.Pl &&
          ((!g.af || g.Nc(10) ? !this.MJ : 200 > this.HO - this.pH)
            ? (M8(11), U8(this.j, this, !1))
            : (M8(12), U8(this.j, this, !0)));
    else {
      0 == this.Pl ? M8(9) : 2 == this.Pl && M8(10);
      var a = this.j;
      this.Ij.getLastError();
      a.zo = this.cq;
      X8(a, 2);
    }
  };
  g.k.KB = function () {
    return this.j.KB();
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.Kn = function (a) {
    this.j.Kn(a);
  };
  g.k = byb.prototype;
  g.k.xo = null;
  g.k.LB = null;
  g.k.Rj = null;
  g.k.Sg = null;
  g.k.dL = null;
  g.k.dG = null;
  g.k.HS = null;
  g.k.eG = null;
  g.k.MB = 0;
  g.k.A1 = 0;
  g.k.Ii = null;
  g.k.Vr = null;
  g.k.eq = null;
  g.k.Gu = null;
  g.k.Ds = null;
  g.k.BK = null;
  g.k.Lx = -1;
  g.k.IS = -1;
  g.k.zo = -1;
  g.k.Kx = 0;
  g.k.Jx = 0;
  g.k.Fu = 8;
  g.kb(dyb, g.xb);
  g.kb(eyb, g.xb);
  g.k = byb.prototype;
  g.k.connect = function (a, b, c, d, e) {
    M8(0);
    this.dL = b;
    this.LB = c || {};
    d && void 0 !== e && ((this.LB.OSID = d), (this.LB.OAID = e));
    this.Z ? (K8((0, g.fb)(this.cV, this, a), 100), gyb(this)) : this.cV(a);
  };
  g.k.disconnect = function () {
    hyb(this);
    if (3 == this.j) {
      var a = this.MB++,
        b = this.dG.clone();
      g.ro(b, "SID", this.D);
      g.ro(b, "RID", a);
      g.ro(b, "TYPE", "terminate");
      W8(this, b);
      a = new N8(this, this.D, a);
      a.Hx = 2;
      a.Sr = $7(b.clone());
      new Image().src = a.Sr.toString();
      a.Gx = Date.now();
      O8(a);
    }
    ryb(this);
  };
  g.k.cV = function (a) {
    this.Ds = new Zxb(this);
    this.Ds.bL = this.xo;
    this.Ds.B = this.G;
    this.Ds.connect(a);
  };
  g.k.ih = function () {
    return 0 == this.j;
  };
  g.k.getState = function () {
    return this.j;
  };
  g.k.KS = function (a) {
    this.Vr = null;
    myb(this, a);
  };
  g.k.JS = function () {
    this.eq = null;
    this.Sg = new N8(this, this.D, "rpc", this.N);
    this.Sg.Du = this.xo;
    this.Sg.YK = 0;
    var a = this.HS.clone();
    g.ro(a, "RID", "rpc");
    g.ro(a, "SID", this.D);
    g.ro(a, "CI", this.BK ? "0" : "1");
    g.ro(a, "AID", this.Lx);
    W8(this, a);
    if (!g.af || g.Nc(10))
      g.ro(a, "TYPE", "xmlhttp"), Oxb(this.Sg, a, !0, this.eG, !1);
    else {
      g.ro(a, "TYPE", "html");
      var b = this.Sg,
        c = !!this.eG;
      b.Hx = 3;
      b.Sr = $7(a.clone());
      Txb(b, c);
    }
  };
  g.k.GS = function (a, b) {
    if (0 != this.j && (this.Sg == a || this.Rj == a))
      if (((this.zo = a.IB), this.Rj == a && 3 == this.j))
        if (7 < this.Fu) {
          try {
            var c = this.G.parse(b);
          } catch (d) {
            c = null;
          }
          if (Array.isArray(c) && 3 == c.length)
            if (((a = c), 0 == a[0]))
              a: {
                if (!this.eq) {
                  if (this.Sg)
                    if (this.Sg.Gx + 3e3 < this.Rj.Gx)
                      V8(this), this.Sg.cancel(), (this.Sg = null);
                    else break a;
                  pyb(this);
                  M8(19);
                }
              }
            else
              (this.IS = a[1]),
                0 < this.IS - this.Lx &&
                  37500 > a[2] &&
                  this.BK &&
                  0 == this.Jx &&
                  !this.Gu &&
                  (this.Gu = K8((0, g.fb)(this.B1, this), 6e3));
          else X8(this, 11);
        } else null != b && X8(this, 11);
      else if ((this.Sg == a && V8(this), !g.fc(b)))
        for (a = this.G.parse(b), b = 0; b < a.length; b++)
          (c = a[b]),
            (this.Lx = c[0]),
            (c = c[1]),
            2 == this.j
              ? "c" == c[0]
                ? ((this.D = c[1]),
                  (this.eG = c[2]),
                  (c = c[3]),
                  null != c ? (this.Fu = c) : (this.Fu = 6),
                  (this.j = 3),
                  this.Ii && this.Ii.NS(),
                  (this.HS = T8(this, this.KB() ? this.eG : null, this.dL)),
                  nyb(this))
                : "stop" == c[0] && X8(this, 7)
              : 3 == this.j &&
                ("stop" == c[0]
                  ? X8(this, 7)
                  : "noop" != c[0] && this.Ii && this.Ii.MS(c),
                (this.Jx = 0));
  };
  g.k.B1 = function () {
    null != this.Gu &&
      ((this.Gu = null), this.Sg.cancel(), (this.Sg = null), pyb(this), M8(20));
  };
  g.k.cG = function (a) {
    if (this.Sg == a) {
      V8(this);
      this.Sg = null;
      var b = 2;
    } else if (this.Rj == a) (this.Rj = null), (b = 1);
    else return;
    this.zo = a.IB;
    if (0 != this.j)
      if (a.bq)
        if (1 == b) {
          b = Date.now() - a.Gx;
          var c = L8;
          c.dispatchEvent(new dyb(c, a.Eu ? a.Eu.length : 0, b, this.Kx));
          fyb(this);
          this.C.length = 0;
        } else nyb(this);
      else {
        c = a.getLastError();
        var d;
        if (!(d = 3 == c || 7 == c || (0 == c && 0 < this.zo))) {
          if ((d = 1 == b))
            this.Rj || this.Vr || 1 == this.j || 2 <= this.Kx
              ? (d = !1)
              : ((this.Vr = K8(
                  (0, g.fb)(this.KS, this, a),
                  oyb(this, this.Kx)
                )),
                this.Kx++,
                (d = !0));
          d = !(d || (2 == b && pyb(this)));
        }
        if (d)
          switch (c) {
            case 1:
              X8(this, 5);
              break;
            case 4:
              X8(this, 10);
              break;
            case 3:
              X8(this, 6);
              break;
            case 7:
              X8(this, 12);
              break;
            default:
              X8(this, 2);
          }
      }
  };
  g.k.z1 = function (a) {
    if (!g.Db(arguments, this.j))
      throw Error("Unexpected channel state: " + this.j);
  };
  g.k.raa = function (a) {
    a ? M8(2) : (M8(1), qyb(this, 8));
  };
  g.k.aL = function (a) {
    if (a) throw Error("Can't create secondary domain capable XhrIo object.");
    a = new g.ym();
    a.K = !1;
    return a;
  };
  g.k.isActive = function () {
    return !!this.Ii && this.Ii.isActive(this);
  };
  g.k.Kn = function (a) {
    var b = L8;
    b.dispatchEvent(new eyb(b, a));
  };
  g.k.KB = function () {
    return !(!g.af || g.Nc(10));
  };
  g.k = syb.prototype;
  g.k.NS = function () {};
  g.k.MS = function () {};
  g.k.LS = function () {};
  g.k.eL = function () {};
  g.k.OS = function () {
    return {};
  };
  g.k.isActive = function () {
    return !0;
  };
  g.k = tyb.prototype;
  g.k.isEmpty = function () {
    return 0 === this.j.length && 0 === this.B.length;
  };
  g.k.clear = function () {
    this.j = [];
    this.B = [];
  };
  g.k.contains = function (a) {
    return g.Db(this.j, a) || g.Db(this.B, a);
  };
  g.k.remove = function (a) {
    var b = this.j;
    var c = (0, g.Wcb)(b, a);
    0 <= c ? (g.Eb(b, c), (b = !0)) : (b = !1);
    return b || g.Fb(this.B, a);
  };
  g.k.hm = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
    var c = this.B.length;
    for (b = 0; b < c; ++b) a.push(this.B[b]);
    return a;
  };
  g.w(uyb, g.xb);
  g.w(vyb, g.xb);
  g.kb(Y8, g.J);
  g.k = Y8.prototype;
  g.k.z9 = function () {
    this.Ri = Math.min(3e5, 2 * this.Ri);
    this.C();
    this.B && this.start();
  };
  g.k.start = function () {
    var a = this.Ri + 15e3 * Math.random();
    g.fu(this.j, a);
    this.B = Date.now() + a;
  };
  g.k.stop = function () {
    this.j.stop();
    this.B = 0;
  };
  g.k.isActive = function () {
    return this.j.isActive();
  };
  g.k.reset = function () {
    this.j.stop();
    this.Ri = 5e3;
  };
  g.kb(xyb, syb);
  g.k = xyb.prototype;
  g.k.subscribe = function (a, b, c) {
    return this.C.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.C.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.C.Wh(a);
  };
  g.k.oa = function (a, b) {
    return this.C.oa.apply(this.C, arguments);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.sb(this.C),
      this.disconnect(),
      g.sb(this.B),
      (this.B = null),
      (this.qa = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.k.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
      this.Y = "";
      this.B.stop();
      this.K = a || null;
      this.G = b || 0;
      a = this.Aa + "/test";
      b = this.Aa + "/bind";
      var d = new byb(
          c ? c.firstTestResults : null,
          c ? c.secondTestResults : null,
          this.Ta
        ),
        e = this.j;
      e && (e.Ii = null);
      d.Ii = this;
      this.j = d;
      yyb(this);
      if (this.j) {
        d = g.HB("ID_TOKEN");
        var f = this.j.xo || {};
        d
          ? (f["x-youtube-identity-token"] = d)
          : delete f["x-youtube-identity-token"];
        this.j.xo = f;
      }
      e
        ? ((3 != e.getState() && 0 == jyb(e)) || e.getState(),
          this.j.connect(a, b, this.N, e.D, e.Lx))
        : c
        ? this.j.connect(a, b, this.N, c.sessionId, c.arrayId)
        : this.j.connect(a, b, this.N);
    }
  };
  g.k.disconnect = function (a) {
    this.Z = a || 0;
    this.B.stop();
    yyb(this);
    this.j && (3 == this.j.getState() && myb(this.j), this.j.disconnect());
    this.Z = 0;
  };
  g.k.sendMessage = function (a, b) {
    a = { _sc: a };
    b && g.rd(a, b);
    this.B.isActive() || 2 == (this.j ? this.j.getState() : 0)
      ? this.D.push(a)
      : this.Ez() && (yyb(this), iyb(this.j, a));
  };
  g.k.NS = function () {
    this.B.reset();
    this.K = null;
    this.G = 0;
    if (this.D.length) {
      var a = this.D;
      this.D = [];
      for (var b = 0, c = a.length; b < c; ++b) iyb(this.j, a[b]);
    }
    this.oa("handlerOpened");
    Wvb(this.Na, "BROWSER_CHANNEL");
  };
  g.k.LS = function (a) {
    var b = 2 == a && 401 == this.j.zo;
    4 == a || b || this.B.start();
    this.oa("handlerError", a, b);
    bwb(this.Da, "BROWSER_CHANNEL");
  };
  g.k.eL = function (a, b) {
    if (!this.B.isActive()) this.oa("handlerClosed");
    else if (b)
      for (var c = 0, d = b.length; c < d; ++c) {
        var e = b[c].map;
        e && this.D.push(e);
      }
    Yvb(this.Ga, "BROWSER_CHANNEL");
    a &&
      this.Za.j.fL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",
        a.length
      );
    b &&
      this.fb.j.fL(
        "/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",
        b.length
      );
  };
  g.k.OS = function () {
    var a = { v: 2 };
    this.Y && (a.gsessionid = this.Y);
    0 != this.G && (a.ui = "" + this.G);
    0 != this.Z && (a.ui = "" + this.Z);
    this.K && g.rd(a, this.K);
    return a;
  };
  g.k.MS = function (a) {
    "S" == a[0]
      ? (this.Y = a[1])
      : "gracefulReconnect" == a[0]
      ? (this.B.start(), this.j.disconnect())
      : this.oa("handlerMessage", new wyb(a[0], a[1]));
    $vb(this.La, "BROWSER_CHANNEL");
  };
  g.k.Ez = function () {
    return !!this.j && 3 == this.j.getState();
  };
  g.k.Br = function (a) {
    (this.N.loungeIdToken = a) || this.B.stop();
    if (this.Va && this.j) {
      var b = this.j.xo || {};
      a
        ? (b["X-YouTube-LoungeId-Token"] = a)
        : delete b["X-YouTube-LoungeId-Token"];
      this.j.xo = b;
    }
  };
  g.k.Rs = function () {
    return this.N.id;
  };
  g.k.Xs = function () {
    return this.B.isActive() ? this.B.B - Date.now() : NaN;
  };
  g.k.Lw = function () {
    var a = this.B;
    g.gu(a.j);
    a.start();
  };
  g.k.J$ = function () {
    this.B.isActive();
    0 == jyb(this.j) && this.connect(this.K, this.G);
  };
  Z8.prototype.D = function (a, b, c, d) {
    b ? a(d) : a({ text: c.responseText });
  };
  Z8.prototype.C = function (a, b) {
    a(Error("Request error: " + b.status));
  };
  Z8.prototype.G = function (a) {
    a(Error("request timed out"));
  };
  g.w(Ayb, g.Gd);
  g.k = Ayb.prototype;
  g.k.connect = function (a, b, c) {
    this.Fd.connect(a, b, c);
  };
  g.k.disconnect = function (a) {
    this.Fd.disconnect(a);
  };
  g.k.Lw = function () {
    this.Fd.Lw();
  };
  g.k.Rs = function () {
    return this.Fd.Rs();
  };
  g.k.Xs = function () {
    return this.Fd.Xs();
  };
  g.k.Ez = function () {
    return this.Fd.Ez();
  };
  g.k.E1 = function () {
    this.dispatchEvent("channelOpened");
    var a = this.Fd,
      b = this.j;
    g.YC("yt-remote-session-browser-channel", {
      firstTestResults: [""],
      secondTestResults: !a.j.BK,
      sessionId: a.j.D,
      arrayId: a.j.Lx,
    });
    g.YC("yt-remote-session-screen-id", b);
    a = i8();
    b = j8();
    g.Db(a, b) || a.push(b);
    swb(a);
    uwb();
  };
  g.k.C1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.D1 = function (a) {
    this.dispatchEvent(new uyb(a));
  };
  g.k.onError = function (a) {
    this.dispatchEvent(new vyb(a ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.Fd.sendMessage(a, b);
  };
  g.k.Br = function (a) {
    this.Fd.Br(a);
  };
  g.k.dispose = function () {
    this.Fd.dispose();
  };
  g.k = Byb.prototype;
  g.k.connect = function (a, b) {
    a = void 0 === a ? {} : a;
    b = void 0 === b ? 0 : b;
    2 !== this.K &&
      (this.C.stop(),
      (this.Z = a),
      (this.N = b),
      Dyb(this),
      (a = g.HB("ID_TOKEN"))
        ? (this.D["x-youtube-identity-token"] = a)
        : delete this.D["x-youtube-identity-token"],
      this.j &&
        ((this.B.device = this.j.device),
        (this.B.name = this.j.name),
        (this.B.app = this.j.app),
        (this.B.id = this.j.id),
        this.j.O6 && (this.B.mdxVersion = "" + this.j.O6),
        this.j.theme && (this.B.theme = this.j.theme),
        this.j.capabilities && (this.B.capabilities = this.j.capabilities),
        this.j.p4 && (this.B.cst = this.j.p4),
        this.j.authuser && (this.B.authuser = this.j.authuser),
        this.j.pageId && (this.B.pageId = this.j.pageId)),
      0 !== this.N ? (this.B.ui = "" + this.N) : delete this.B.ui,
      Object.assign(this.B, this.Z),
      (this.channel = new J8(this.pathPrefix, {
        d6: "gsessionid",
        S6: this.D,
        T6: this.B,
      })),
      this.channel.open(),
      (this.K = 2),
      Cyb(this));
  };
  g.k.disconnect = function (a) {
    this.Y = void 0 === a ? 0 : a;
    this.C.stop();
    Dyb(this);
    this.channel &&
      (0 !== this.Y ? (this.B.ui = "" + this.Y) : delete this.B.ui,
      this.channel.close());
    this.Y = 0;
  };
  g.k.Xs = function () {
    return this.C.isActive() ? this.C.B - Date.now() : NaN;
  };
  g.k.Lw = function () {
    var a = this.C;
    g.gu(a.j);
    a.start();
  };
  g.k.sendMessage = function (a, b) {
    this.channel &&
      (Dyb(this), (a = Object.assign({}, { _sc: a }, b)), this.channel.send(a));
  };
  g.k.Br = function (a) {
    a || this.C.stop();
    a
      ? (this.D["X-YouTube-LoungeId-Token"] = a)
      : delete this.D["X-YouTube-LoungeId-Token"];
  };
  g.k.Rs = function () {
    return this.j ? this.j.id : "";
  };
  g.k.oa = function (a) {
    return this.G.oa.apply(this.G, [a].concat(g.oa(g.Ja.apply(1, arguments))));
  };
  g.k.subscribe = function (a, b, c) {
    return this.G.subscribe(a, b, c);
  };
  g.k.unsubscribe = function (a, b, c) {
    return this.G.unsubscribe(a, b, c);
  };
  g.k.Wh = function (a) {
    return this.G.Wh(a);
  };
  g.k.dispose = function () {
    this.ma ||
      ((this.ma = !0),
      g.sb(this.G),
      this.disconnect(),
      g.sb(this.C),
      (this.Aa = function () {
        return "";
      }));
  };
  g.k.isDisposed = function () {
    return this.ma;
  };
  g.w(Eyb, g.Gd);
  g.k = Eyb.prototype;
  g.k.connect = function (a, b) {
    this.j.connect(a, b);
  };
  g.k.disconnect = function (a) {
    this.j.disconnect(a);
  };
  g.k.Lw = function () {
    this.j.Lw();
  };
  g.k.Rs = function () {
    return this.j.Rs();
  };
  g.k.Xs = function () {
    return this.j.Xs();
  };
  g.k.Ez = function () {
    return 3 === this.j.K;
  };
  g.k.H1 = function () {
    this.dispatchEvent("channelOpened");
  };
  g.k.F1 = function () {
    this.dispatchEvent("channelClosed");
  };
  g.k.G1 = function (a) {
    this.dispatchEvent(new uyb(a));
  };
  g.k.onError = function () {
    this.dispatchEvent(new vyb(401 === this.j.Mg ? 1 : 0));
  };
  g.k.sendMessage = function (a, b) {
    this.j.sendMessage(a, b);
  };
  g.k.Br = function (a) {
    this.j.Br(a);
  };
  g.k.dispose = function () {
    this.j.dispose();
  };
  var Myb = Date.now(),
    a9 = null,
    e9 = Array(50),
    d9 = -1,
    f9 = !1;
  g.kb(g9, g.fG);
  g9.prototype.Mk = function () {
    return this.screens;
  };
  g9.prototype.contains = function (a) {
    return !!pwb(this.screens, a);
  };
  g9.prototype.get = function (a) {
    return a ? h8(this.screens, a) : null;
  };
  g9.prototype.info = function (a) {
    b9(this.K, a);
  };
  g.w(Qyb, g.fG);
  g.k = Qyb.prototype;
  g.k.start = function () {
    !this.j && isNaN(this.od) && this.VY();
  };
  g.k.stop = function () {
    this.j && (this.j.abort(), (this.j = null));
    isNaN(this.od) || (g.dC(this.od), (this.od = NaN));
  };
  g.k.ya = function () {
    this.stop();
    g.fG.prototype.ya.call(this);
  };
  g.k.VY = function () {
    this.od = NaN;
    this.j = g.gC($8(this.C, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: this.N },
      timeout: 5e3,
      onSuccess: (0, g.fb)(this.J1, this),
      onError: (0, g.fb)(this.I1, this),
      onTimeout: (0, g.fb)(this.K1, this),
    });
  };
  g.k.J1 = function (a, b) {
    this.j = null;
    a = b.screen || {};
    a.dialId = this.D;
    a.name = this.K;
    b = -1;
    this.G &&
      a.shortLivedLoungeToken &&
      a.shortLivedLoungeToken.value &&
      a.shortLivedLoungeToken.refreshIntervalMs &&
      ((a.screenIdType = "shortLived"),
      (a.loungeToken = a.shortLivedLoungeToken.value),
      (b = a.shortLivedLoungeToken.refreshIntervalMs));
    this.oa("pairingComplete", new e8(a), b);
  };
  g.k.I1 = function (a) {
    this.j = null;
    a.status && 404 == a.status
      ? this.B >= KAb.length
        ? this.oa("pairingFailed", Error("DIAL polling timed out"))
        : ((a = KAb[this.B]),
          (this.od = g.bC((0, g.fb)(this.VY, this), a)),
          this.B++)
      : this.oa("pairingFailed", Error("Server error " + a.status));
  };
  g.k.K1 = function () {
    this.j = null;
    this.oa("pairingFailed", Error("Server not responding"));
  };
  var KAb = [2e3, 2e3, 1e3, 1e3, 1e3, 2e3, 2e3, 5e3, 5e3, 1e4];
  g.kb(i9, g9);
  g.k = i9.prototype;
  g.k.start = function () {
    h9(this) && this.oa("screenChange");
    !g.ZC("yt-remote-lounge-token-expiration") && Ryb(this);
    g.dC(this.j);
    this.j = g.bC((0, g.fb)(this.start, this), 1e4);
  };
  g.k.add = function (a, b) {
    h9(this);
    Nyb(this, a);
    j9(this, !1);
    this.oa("screenChange");
    b(a);
    a.token || Ryb(this);
  };
  g.k.remove = function (a, b) {
    var c = h9(this);
    Pyb(this, a) && (j9(this, !1), (c = !0));
    b(a);
    c && this.oa("screenChange");
  };
  g.k.AK = function (a, b, c, d) {
    var e = h9(this),
      f = this.get(a.id);
    f
      ? (f.name != b && ((f.name = b), j9(this, !1), (e = !0)), c(a))
      : d(Error("no such local screen."));
    e && this.oa("screenChange");
  };
  g.k.ya = function () {
    g.dC(this.j);
    i9.Of.ya.call(this);
  };
  g.k.B5 = function (a) {
    h9(this);
    var b = this.screens.length;
    a = (a && a.screens) || [];
    for (var c = 0, d = a.length; c < d; ++c) {
      var e = a[c],
        f = this.get(e.screenId);
      f && ((f.token = e.loungeToken), --b);
    }
    j9(this, !b);
    b && b9(this.K, "Missed " + b + " lounge tokens.");
  };
  g.k.A5 = function (a) {
    b9(this.K, "Requesting lounge tokens failed: " + a);
  };
  g.w(Tyb, g.fG);
  g.k = Tyb.prototype;
  g.k.start = function () {
    var a = parseInt(g.ZC("yt-remote-fast-check-period") || "0", 10);
    (this.D = g.ib() - 144e5 < a ? 0 : a)
      ? k9(this)
      : ((this.D = g.ib() + 3e5),
        g.YC("yt-remote-fast-check-period", this.D),
        this.JQ());
  };
  g.k.isEmpty = function () {
    return g.id(this.j);
  };
  g.k.update = function () {
    Syb("Updating availability on schedule.");
    var a = this.K(),
      b = g.Uc(
        this.j,
        function (c, d) {
          return c && !!h8(a, d);
        },
        this
      );
    Wyb(this, b);
  };
  g.k.ya = function () {
    g.dC(this.C);
    this.C = NaN;
    this.B && (this.B.abort(), (this.B = null));
    g.fG.prototype.ya.call(this);
  };
  g.k.JQ = function () {
    g.dC(this.C);
    this.C = NaN;
    this.B && this.B.abort();
    var a = Xyb(this);
    if (Rvb(a)) {
      var b = $8(this.G, "/pairing/get_screen_availability");
      this.B = zyb(
        this.G,
        b,
        { lounge_token: g.ed(a).join(",") },
        (0, g.fb)(this.f9, this, a),
        (0, g.fb)(this.e9, this)
      );
    } else Wyb(this, {}), k9(this);
  };
  g.k.f9 = function (a, b) {
    this.B = null;
    var c = g.ed(Xyb(this));
    if (g.Yb(c, g.ed(a))) {
      b = b.screens || [];
      c = {};
      for (var d = b.length, e = 0; e < d; ++e)
        c[a[b[e].loungeToken]] = "online" == b[e].status;
      Wyb(this, c);
      k9(this);
    } else this.cg("Changing Screen set during request."), this.JQ();
  };
  g.k.e9 = function (a) {
    this.cg("Screen availability failed: " + a);
    this.B = null;
    k9(this);
  };
  g.k.cg = function (a) {
    b9("OnlineScreenService", a);
  };
  g.kb(l9, g9);
  g.k = l9.prototype;
  g.k.start = function () {
    this.B.start();
    this.j.start();
    this.screens.length &&
      (this.oa("screenChange"),
      this.j.isEmpty() || this.oa("onlineScreenChange"));
  };
  g.k.add = function (a, b, c) {
    this.B.add(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.B.remove(a, b, c);
    this.j.update();
  };
  g.k.AK = function (a, b, c, d) {
    this.B.contains(a)
      ? this.B.AK(a, b, c, d)
      : ((a = "Updating name of unknown screen: " + a.name),
        b9(this.K, a),
        d(Error(a)));
  };
  g.k.Mk = function (a) {
    return a
      ? this.screens
      : g.Hb(
          this.screens,
          g.ys(
            this.C,
            function (b) {
              return !this.contains(b);
            },
            this
          )
        );
  };
  g.k.PS = function () {
    return g.ys(
      this.Mk(!0),
      function (a) {
        return !!this.j.j[a.id];
      },
      this
    );
  };
  g.k.QS = function (a, b, c, d, e, f) {
    var h = this;
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var l = new Qyb(this.D, a, b, c, d);
    l.subscribe("pairingComplete", function (m, n) {
      g.sb(l);
      e(m9(h, m), n);
    });
    l.subscribe("pairingFailed", function (m) {
      g.sb(l);
      f(m);
    });
    l.start();
    return (0, g.fb)(l.stop, l);
  };
  g.k.L1 = function (a, b, c, d) {
    g.gC($8(this.D, "/pairing/get_screen"), {
      method: "POST",
      postParams: { pairing_code: a },
      timeout: 5e3,
      onSuccess: (0, g.fb)(function (e, f) {
        e = new e8(f.screen || {});
        if (!e.name || azb(this, e.name)) {
          a: {
            f = e.name;
            for (var h = 2, l = b(f, h); azb(this, l); ) {
              h++;
              if (20 < h) break a;
              l = b(f, h);
            }
            f = l;
          }
          e.name = f;
        }
        c(m9(this, e));
      }, this),
      onError: (0, g.fb)(function (e) {
        d(Error("pairing request failed: " + e.status));
      }, this),
      onTimeout: (0, g.fb)(function () {
        d(Error("pairing request timed out."));
      }, this),
    });
  };
  g.k.ya = function () {
    g.sb(this.B);
    g.sb(this.j);
    l9.Of.ya.call(this);
  };
  g.k.L5 = function () {
    czb(this);
    this.oa("screenChange");
    this.j.update();
  };
  l9.prototype.dispose = l9.prototype.dispose;
  g.kb(n9, g.fG);
  g.k = n9.prototype;
  g.k.yj = function (a) {
    this.isDisposed() ||
      (a && (p9(this, "" + a), this.oa("sessionFailed")),
      (this.j = null),
      this.oa("sessionScreen", null));
  };
  g.k.info = function (a) {
    b9(this.Da, a);
  };
  g.k.RS = function () {
    return null;
  };
  g.k.ZQ = function (a) {
    var b = this.B;
    a
      ? ((b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, [])),
        (b.displayStatus.showStop = !0))
      : (b.displayStatus = null);
    chrome.cast.setReceiverDisplayStatus(
      b,
      (0, g.fb)(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a);
      }, this),
      (0, g.fb)(function () {
        p9(this, "Failed to update receiver status for: " + b.friendlyName);
      }, this)
    );
  };
  g.k.ya = function () {
    this.ZQ("");
    n9.Of.ya.call(this);
  };
  g.w(q9, n9);
  g.k = q9.prototype;
  g.k.YQ = function (a) {
    if (this.C) {
      if (this.C == a) return;
      p9(this, "Overriding cast session with new session object");
      ozb(this);
      this.Aa = !1;
      this.Y = "unknown";
      this.C.removeUpdateListener(this.qa);
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ga
      );
    }
    this.C = a;
    this.C.addUpdateListener(this.qa);
    this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ga);
    jzb(this, "getMdxSessionStatus");
  };
  g.k.Pz = function (a) {
    this.info("launchWithParams no-op for Cast: " + g.um(a));
  };
  g.k.stop = function () {
    this.C
      ? this.C.stop(
          (0, g.fb)(function () {
            this.yj();
          }, this),
          (0, g.fb)(function () {
            this.yj(Error("Failed to stop receiver app."));
          }, this)
        )
      : this.yj(Error("Stopping cast device without session."));
  };
  g.k.ZQ = function () {};
  g.k.ya = function () {
    this.info("disposeInternal");
    ozb(this);
    this.C &&
      (this.C.removeUpdateListener(this.qa),
      this.C.removeMessageListener(
        "urn:x-cast:com.google.youtube.mdx",
        this.Ga
      ));
    this.C = null;
    n9.prototype.ya.call(this);
  };
  g.k.P9 = function (a, b) {
    if (!this.isDisposed())
      if (b)
        if (((b = b8(b)), g.$a(b)))
          switch (
            ((a = "" + b.type),
            (b = b.data || {}),
            this.info("onYoutubeMessage_: " + a + " " + g.um(b)),
            a)
          ) {
            case "mdxSessionStatus":
              gzb(this, b);
              break;
            case "loungeToken":
              kzb(this, b);
              break;
            default:
              p9(this, "Unknown youtube message: " + a);
          }
        else p9(this, "Unable to parse message.");
      else p9(this, "No data in message.");
  };
  g.k.eW = function (a, b, c, d) {
    g.dC(this.Z);
    this.Z = 0;
    $yb(
      this.D,
      this.B.label,
      a,
      this.B.friendlyName,
      (0, g.fb)(function (e) {
        e
          ? b(e)
          : 0 <= d
          ? (p9(
              this,
              "Screen " + a + " appears to be offline. " + d + " retries left."
            ),
            (this.Z = g.bC((0, g.fb)(this.eW, this, a, b, c, d - 1), 300)))
          : c(Error("Unable to fetch screen."));
      }, this),
      c
    );
  };
  g.k.RS = function () {
    return this.C;
  };
  g.k.M1 = function (a) {
    this.isDisposed() || a || (p9(this, "Cast session died."), this.yj());
  };
  g.w(r9, n9);
  g.k = r9.prototype;
  g.k.YQ = function (a) {
    this.C = a;
    this.C.addUpdateListener(this.La);
  };
  g.k.Pz = function (a) {
    this.Na = a;
    this.ma();
  };
  g.k.stop = function () {
    wzb(this);
    this.C
      ? this.C.stop(
          (0, g.fb)(this.yj, this, null),
          (0, g.fb)(this.yj, this, "Failed to stop DIAL device.")
        )
      : this.yj();
  };
  g.k.ya = function () {
    wzb(this);
    this.C && this.C.removeUpdateListener(this.La);
    this.C = null;
    n9.prototype.ya.call(this);
  };
  g.k.N1 = function (a) {
    this.isDisposed() ||
      a ||
      (p9(this, "DIAL session died."),
      this.G(),
      (this.G = function () {}),
      this.yj());
  };
  g.w(u9, n9);
  u9.prototype.stop = function () {
    this.yj();
  };
  u9.prototype.YQ = function () {};
  u9.prototype.Pz = function () {
    g.dC(this.C);
    this.C = NaN;
    var a = h8(this.D.Mk(), this.B.label);
    a ? o9(this, a) : this.yj(Error("No such screen"));
  };
  u9.prototype.ya = function () {
    g.dC(this.C);
    this.C = NaN;
    n9.prototype.ya.call(this);
  };
  g.w(v9, g.fG);
  g.k = v9.prototype;
  g.k.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3e4;
    var c = new chrome.cast.SessionRequest(this.Z, [
      chrome.cast.Capability.AUDIO_OUT,
    ]);
    this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
    a =
      a || this.K
        ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB
        : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
    var e = (0, g.fb)(this.N8, this);
    c = new chrome.cast.ApiConfig(c, (0, g.fb)(this.AY, this), e, d, a);
    c.customDialLaunchCallback = (0, g.fb)(this.K7, this);
    chrome.cast.initialize(
      c,
      (0, g.fb)(function () {
        this.isDisposed() ||
          (chrome.cast.addReceiverActionListener(this.G),
          Jyb(),
          this.B.subscribe("onlineScreenChange", (0, g.fb)(this.SS, this)),
          (this.C = zzb(this)),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.fb)(function (f) {
              this.cg("Failed to set initial custom receivers: " + g.um(f));
            }, this)
          ),
          this.oa("yt-remote-cast2-availability-change", x9(this)),
          b(!0));
      }, this),
      (0, g.fb)(function (f) {
        this.cg("Failed to initialize API: " + g.um(f));
        b(!1);
      }, this)
    );
  };
  g.k.O$ = function (a, b) {
    w9("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
      var c = this.j.j;
      if (!a || (c && c.id != a))
        w9("Unsetting old screen status: " + this.j.B.friendlyName),
          y9(this, null);
    }
    if (a && b) {
      if (!this.j) {
        c = h8(this.B.Mk(), a);
        if (!c) {
          w9("setConnectedScreenStatus: Unknown screen.");
          return;
        }
        if ("shortLived" == c.idType) {
          w9(
            "setConnectedScreenStatus: Screen with id type to be short lived."
          );
          return;
        }
        a = xzb(this, c);
        a ||
          (w9("setConnectedScreenStatus: Connected receiver not custom..."),
          (a = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name)),
          (a.receiverType = chrome.cast.ReceiverType.CUSTOM),
          this.C.push(a),
          chrome.cast.setCustomReceivers(
            this.C,
            function () {},
            (0, g.fb)(function (d) {
              this.cg("Failed to set initial custom receivers: " + g.um(d));
            }, this)
          ));
        w9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
        y9(this, new u9(this.B, a), !0);
      }
      this.j.ZQ(b);
    } else w9("setConnectedScreenStatus: no screen.");
  };
  g.k.R$ = function (a) {
    this.isDisposed()
      ? this.cg("Setting connection data on disposed cast v2")
      : this.j
      ? this.j.Pz(a)
      : this.cg("Setting connection data without a session");
  };
  g.k.P1 = function () {
    this.isDisposed()
      ? this.cg("Stopping session on disposed cast v2")
      : this.j
      ? (this.j.stop(), y9(this, null))
      : w9("Stopping non-existing session");
  };
  g.k.requestSession = function () {
    chrome.cast.requestSession(
      (0, g.fb)(this.AY, this),
      (0, g.fb)(this.i9, this)
    );
  };
  g.k.ya = function () {
    this.B.unsubscribe("onlineScreenChange", (0, g.fb)(this.SS, this));
    window.chrome &&
      chrome.cast &&
      chrome.cast.removeReceiverActionListener(this.G);
    var a = Gyb,
      b = g.Va("yt.mdx.remote.debug.handlers_");
    g.Fb(b || [], a);
    g.sb(this.j);
    g.fG.prototype.ya.call(this);
  };
  g.k.cg = function (a) {
    b9("Controller", a);
  };
  g.k.CY = function (a, b) {
    this.j == a &&
      (b || y9(this, null), this.oa("yt-remote-cast2-session-change", b));
  };
  g.k.K8 = function (a, b) {
    if (!this.isDisposed())
      if (a)
        switch (
          ((a.friendlyName = chrome.cast.unescape(a.friendlyName)),
          w9(
            "onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b
          ),
          b)
        ) {
          case chrome.cast.ReceiverAction.CAST:
            if (this.j)
              if (this.j.B.label != a.label)
                w9(
                  "onReceiverAction_: Stopping active receiver: " +
                    this.j.B.friendlyName
                ),
                  this.j.stop();
              else {
                w9("onReceiverAction_: Casting to active receiver.");
                this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                break;
              }
            switch (a.receiverType) {
              case chrome.cast.ReceiverType.CUSTOM:
                y9(this, new u9(this.B, a));
                break;
              case chrome.cast.ReceiverType.DIAL:
                y9(this, new r9(this.B, a, this.D, this.config_));
                break;
              case chrome.cast.ReceiverType.CAST:
                y9(this, new q9(this.B, a, this.config_));
                break;
              default:
                this.cg("Unknown receiver type: " + a.receiverType);
            }
            break;
          case chrome.cast.ReceiverAction.STOP:
            this.j && this.j.B.label == a.label
              ? this.j.stop()
              : this.cg("Stopping receiver w/o session: " + a.friendlyName);
        }
      else this.cg("onReceiverAction_ called without receiver.");
  };
  g.k.K7 = function (a) {
    if (this.isDisposed()) return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL &&
      (this.cg("Not DIAL receiver: " + b.friendlyName),
      (b.receiverType = chrome.cast.ReceiverType.DIAL));
    var c = this.j ? this.j.B : null;
    if (!c || c.label != b.label)
      return (
        this.cg(
          "Receiving DIAL launch request for non-clicked DIAL receiver: " +
            b.friendlyName
        ),
        Promise.reject(Error("illegal DIAL launch"))
      );
    if (
      c &&
      c.label == b.label &&
      c.receiverType != chrome.cast.ReceiverType.DIAL
    ) {
      if (this.j.j)
        return (
          w9("Reselecting dial screen."),
          this.oa("yt-remote-cast2-session-change", this.j.j),
          Promise.resolve(new chrome.cast.DialLaunchResponse(!1))
        );
      this.cg(
        'Changing CAST intent from "' +
          c.receiverType +
          '" to "dial" for ' +
          b.friendlyName
      );
      y9(this, new r9(this.B, b, this.D, this.config_));
    }
    b = this.j;
    b.Z = a;
    b.Z.appState == chrome.cast.DialAppState.RUNNING
      ? ((a = b.Z.extraData || {}),
        (c = a.screenId || null),
        s9(b) && a.loungeToken
          ? a.loungeTokenRefreshIntervalMs
            ? (a = tzb(
                b,
                {
                  name: b.B.friendlyName,
                  screenId: a.screenId,
                  loungeToken: a.loungeToken,
                  dialId: b.Z.receiver.label,
                  screenIdType: "shortLived",
                },
                a.loungeTokenRefreshIntervalMs
              ))
            : (g.NB(
                Error(
                  "No loungeTokenRefreshIntervalMs presents in additionalData: " +
                    JSON.stringify(a) +
                    "."
                )
              ),
              (a = uzb(b, c)))
          : (a = uzb(b, c)))
      : (a = rzb(b));
    return a;
  };
  g.k.AY = function (a) {
    var b = this;
    if (!this.isDisposed() && !this.K) {
      w9("New cast session ID: " + a.sessionId);
      var c = a.receiver;
      if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
        if (!this.j)
          if (c.receiverType == chrome.cast.ReceiverType.CAST)
            w9("Got resumed cast session before resumed mdx connection."),
              (c.friendlyName = chrome.cast.unescape(c.friendlyName)),
              y9(this, new q9(this.B, c, this.config_), !0);
          else {
            this.cg(
              "Got non-cast session without previous mdx receiver event, or mdx resume."
            );
            return;
          }
        var d = this.j.B,
          e = h8(this.B.Mk(), d.label);
        e &&
          f8(e, c.label) &&
          d.receiverType != chrome.cast.ReceiverType.CAST &&
          c.receiverType == chrome.cast.ReceiverType.CAST &&
          (w9(
            "onSessionEstablished_: manual to cast session change " +
              c.friendlyName
          ),
          g.sb(this.j),
          (this.j = new q9(this.B, c, this.config_)),
          this.j.subscribe("sessionScreen", (0, g.fb)(this.CY, this, this.j)),
          this.j.subscribe("sessionFailed", function () {
            return yzb(b, b.j);
          }),
          this.j.Pz(null));
        this.j.YQ(a);
      }
    }
  };
  g.k.O1 = function () {
    return this.j ? this.j.RS() : null;
  };
  g.k.i9 = function (a) {
    this.isDisposed() ||
      (this.cg("Failed to estabilish a session: " + g.um(a)),
      a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null),
      this.oa("yt-remote-cast2-session-failed"));
  };
  g.k.N8 = function (a) {
    w9("Receiver availability updated: " + a);
    if (!this.isDisposed()) {
      var b = x9(this);
      this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
      x9(this) != b && this.oa("yt-remote-cast2-availability-change", x9(this));
    }
  };
  g.k.SS = function () {
    this.isDisposed() ||
      ((this.C = zzb(this)),
      w9("Updating custom receivers: " + g.um(this.C)),
      chrome.cast.setCustomReceivers(
        this.C,
        function () {},
        (0, g.fb)(function () {
          this.cg("Failed to set custom receivers.");
        }, this)
      ),
      this.oa("yt-remote-cast2-availability-change", x9(this)));
  };
  v9.prototype.setLaunchParams = v9.prototype.R$;
  v9.prototype.setConnectedScreenStatus = v9.prototype.O$;
  v9.prototype.stopSession = v9.prototype.P1;
  v9.prototype.getCastSession = v9.prototype.O1;
  v9.prototype.requestSession = v9.prototype.requestSession;
  v9.prototype.init = v9.prototype.init;
  v9.prototype.dispose = v9.prototype.dispose;
  var Izb = [];
  g.k = F9.prototype;
  g.k.reset = function (a) {
    this.listId = "";
    this.index = -1;
    this.videoId = "";
    Ozb(this);
    this.volume = -1;
    this.muted = !1;
    a &&
      ((this.index = a.index),
      (this.listId = a.listId),
      (this.videoId = a.videoId),
      (this.playerState = a.playerState),
      (this.volume = a.volume),
      (this.muted = a.muted),
      (this.audioTrackId = a.audioTrackId),
      (this.trackData = a.trackData),
      (this.mp = a.hasPrevious),
      (this.Sk = a.hasNext),
      (this.N = a.playerTime),
      (this.K = a.playerTimeAt),
      (this.D = a.seekableStart),
      (this.j = a.seekableEnd),
      (this.G = a.duration),
      (this.Z = a.loadedTime),
      (this.C = a.liveIngestionTime),
      (this.B = !isNaN(this.C)));
  };
  g.k.isPlaying = function () {
    return 1 == this.playerState;
  };
  g.k.rl = function (a) {
    this.G = isNaN(a) ? 0 : a;
  };
  g.k.getDuration = function () {
    return this.B ? this.G + G9(this) : this.G;
  };
  g.k.clone = function () {
    return new F9(Pzb(this));
  };
  g.w(L9, g.fG);
  g.k = L9.prototype;
  g.k.getState = function () {
    return this.C;
  };
  g.k.Xs = function () {
    return this.D.getReconnectTimeout();
  };
  g.k.Lw = function () {
    this.D.reconnect();
  };
  g.k.play = function () {
    N9(this)
      ? (this.j ? this.j.play(null, g.Md, R9(this, "play")) : Q9(this, "play"),
        Szb(this, 1, I9(M9(this))),
        this.oa("remotePlayerChange"))
      : O9(this, this.play);
  };
  g.k.pause = function () {
    N9(this)
      ? (this.j
          ? this.j.pause(null, g.Md, R9(this, "pause"))
          : Q9(this, "pause"),
        Szb(this, 2, I9(M9(this))),
        this.oa("remotePlayerChange"))
      : O9(this, this.pause);
  };
  g.k.seekTo = function (a) {
    if (N9(this)) {
      if (this.j) {
        var b = M9(this),
          c = new chrome.cast.media.SeekRequest();
        c.currentTime = a;
        b.isPlaying() || 3 == b.playerState
          ? (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START)
          : (c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE);
        this.j.seek(c, g.Md, R9(this, "seekTo", { newTime: a }));
      } else Q9(this, "seekTo", { newTime: a });
      Szb(this, 3, a);
      this.oa("remotePlayerChange");
    } else O9(this, g.gb(this.seekTo, a));
  };
  g.k.stop = function () {
    if (N9(this)) {
      this.j
        ? this.j.stop(null, g.Md, R9(this, "stopVideo"))
        : Q9(this, "stopVideo");
      var a = M9(this);
      a.index = -1;
      a.videoId = "";
      Ozb(a);
      P9(this, a);
      this.oa("remotePlayerChange");
    } else O9(this, this.stop);
  };
  g.k.setVolume = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      if (this.B) {
        if (c.volume != a) {
          var d = Math.round(a) / 100;
          this.B.setReceiverVolumeLevel(
            d,
            (0, g.fb)(function () {
              c9("set receiver volume: " + d);
            }, this),
            (0, g.fb)(function () {
              this.cg("failed to set receiver volume.");
            }, this)
          );
        }
        c.muted != b &&
          this.B.setReceiverMuted(
            b,
            (0, g.fb)(function () {
              c9("set receiver muted: " + b);
            }, this),
            (0, g.fb)(function () {
              this.cg("failed to set receiver muted.");
            }, this)
          );
      } else {
        var e = { volume: a, muted: b };
        -1 != c.volume && (e.delta = a - c.volume);
        Q9(this, "setVolume", e);
      }
      c.muted = b;
      c.volume = a;
      P9(this, c);
    } else O9(this, g.gb(this.setVolume, a, b));
  };
  g.k.US = function (a, b) {
    if (N9(this)) {
      var c = M9(this);
      a = { videoId: a };
      b &&
        ((c.trackData = {
          trackName: b.name,
          languageCode: b.languageCode,
          sourceLanguageCode: b.translationLanguage
            ? b.translationLanguage.languageCode
            : "",
          languageName: b.languageName,
          kind: b.kind,
        }),
        (a.style = g.um(b.style)),
        g.rd(a, c.trackData));
      Q9(this, "setSubtitlesTrack", a);
      P9(this, c);
    } else O9(this, g.gb(this.US, a, b));
  };
  g.k.setAudioTrack = function (a, b) {
    N9(this)
      ? ((b = b.getLanguageInfo().getId()),
        Q9(this, "setAudioTrack", { videoId: a, audioTrackId: b }),
        (a = M9(this)),
        (a.audioTrackId = b),
        P9(this, a))
      : O9(this, g.gb(this.setAudioTrack, a, b));
  };
  g.k.playVideo = function (a, b, c, d, e, f, h) {
    d = void 0 === d ? null : d;
    e = void 0 === e ? null : e;
    f = void 0 === f ? null : f;
    h = void 0 === h ? null : h;
    var l = M9(this),
      m = { videoId: a };
    void 0 !== c && (m.currentIndex = c);
    J9(l, a, c || 0);
    void 0 !== b && (H9(l, b), (m.currentTime = b));
    d && (m.listId = d);
    e && (m.playerParams = e);
    f && (m.clickTrackingParams = f);
    h && (m.locationInfo = g.um(h));
    Q9(this, "setPlaylist", m);
    d || P9(this, l);
  };
  g.k.FJ = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "previous");
    } else O9(this, g.gb(this.FJ, a, b));
  };
  g.k.nextVideo = function (a, b) {
    if (N9(this)) {
      if (a && b) {
        var c = M9(this);
        J9(c, a, b);
        P9(this, c);
      }
      Q9(this, "next");
    } else O9(this, g.gb(this.nextVideo, a, b));
  };
  g.k.JG = function () {
    if (N9(this)) {
      Q9(this, "clearPlaylist");
      var a = M9(this);
      a.reset();
      P9(this, a);
      this.oa("remotePlayerChange");
    } else O9(this, this.JG);
  };
  g.k.pV = function () {
    N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.pV);
  };
  g.k.dispose = function () {
    if (3 != this.C) {
      var a = this.C;
      this.C = 3;
      this.oa("proxyStateChange", a, this.C);
    }
    g.fG.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    Rzb(this);
    this.D = null;
    this.G.clear();
    K9(this, null);
    g.fG.prototype.ya.call(this);
  };
  g.k.cR = function (a) {
    if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
      var b = this.C;
      this.C = a;
      this.oa("proxyStateChange", b, a);
      if (1 == a)
        for (; !this.G.isEmpty(); )
          (b = a = this.G),
            0 === b.j.length && ((b.j = b.B), b.j.reverse(), (b.B = [])),
            a.j.pop().apply(this);
      else 3 == a && this.dispose();
    }
  };
  g.k.I8 = function (a, b) {
    this.oa(a, b);
  };
  g.k.A7 = function (a) {
    if (!a) this.mE(null), K9(this, null);
    else if (this.B.receiver.volume) {
      a = this.B.receiver.volume;
      var b = M9(this),
        c = Math.round(100 * a.level || 0);
      if (b.volume != c || b.muted != a.muted)
        c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")),
          (b.volume = c),
          (b.muted = !!a.muted),
          P9(this, b);
    }
  };
  g.k.mE = function (a) {
    c9("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.Z);
    if ((this.j = a))
      this.j.addUpdateListener(this.Z),
        Tzb(this),
        this.oa("remotePlayerChange");
  };
  g.k.z7 = function (a) {
    a ? (Tzb(this), this.oa("remotePlayerChange")) : this.mE(null);
  };
  g.k.AR = function () {
    Q9(this, "sendDebugCommand", { debugCommand: "stats4nerds " });
  };
  g.k.D7 = function () {
    var a = Lzb();
    a && K9(this, a);
  };
  g.k.cg = function (a) {
    b9("CP", a);
  };
  g.w(U9, g.fG);
  g.k = U9.prototype;
  g.k.connect = function (a, b) {
    if (b) {
      var c = b.listId,
        d = b.videoId,
        e = b.videoIds,
        f = b.playerParams,
        h = b.clickTrackingParams,
        l = b.index,
        m = { videoId: d },
        n = b.currentTime,
        p = b.locationInfo;
      b = b.loopMode;
      void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
      f && (m.playerParams = f);
      p && (m.locationInfo = p);
      h && (m.clickTrackingParams = h);
      c && (m.listId = c);
      e && 0 < e.length && (m.videoIds = e.join(","));
      void 0 !== l && (m.currentIndex = l);
      this.La && (m.loopMode = b || "LOOP_MODE_OFF");
      c && (this.j.listId = c);
      this.j.videoId = d;
      this.j.index = l || 0;
      this.j.state = 3;
      H9(this.j, n);
      this.G = "UNSUPPORTED";
      c = this.La ? "setInitialState" : "setPlaylist";
      S9("Connecting with " + c + " and params: " + g.um(m));
      this.B.connect({ method: c, params: g.um(m) }, a, vwb());
    } else S9("Connecting without params"), this.B.connect({}, a, vwb());
    Xzb(this);
  };
  g.k.Br = function (a) {
    this.B.Br(a);
  };
  g.k.dispose = function () {
    this.isDisposed() ||
      (g.Ua("yt.mdx.remote.remoteClient_", null),
      this.oa("beforeDispose"),
      T9(this, 3));
    g.fG.prototype.dispose.call(this);
  };
  g.k.ya = function () {
    Yzb(this);
    $zb(this);
    Zzb(this);
    g.dC(this.Z);
    this.Z = NaN;
    g.dC(this.Y);
    this.Y = NaN;
    this.D = null;
    g.QC(this.ma);
    this.ma.length = 0;
    this.B.dispose();
    g.fG.prototype.ya.call(this);
    this.G = this.N = this.C = this.j = this.B = null;
  };
  g.k.aX = function (a) {
    if (!this.C || 0 === this.C.length) return !1;
    for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
      if (!c.value.capabilities.has(a)) return !1;
    return !0;
  };
  g.k.o5 = function () {
    var a = 3;
    this.isDisposed() ||
      ((a = 0),
      isNaN(this.jD()) ? this.B.Ez() && isNaN(this.K) && (a = 1) : (a = 2));
    return a;
  };
  g.k.Xy = function (a) {
    S9("Disconnecting with " + a);
    g.Ua("yt.mdx.remote.remoteClient_", null);
    Yzb(this);
    this.oa("beforeDisconnect", a);
    1 == a && k8();
    this.B.disconnect(a);
    this.dispose();
  };
  g.k.m5 = function () {
    var a = this.j;
    this.D && ((a = this.j.clone()), J9(a, this.D, a.index));
    return Pzb(a);
  };
  g.k.S$ = function (a) {
    var b = this,
      c = new F9(a);
    c.videoId &&
      c.videoId != this.j.videoId &&
      ((this.D = c.videoId),
      g.dC(this.Z),
      (this.Z = g.bC(function () {
        if (b.D) {
          var e = b.D;
          b.D = null;
          b.j.videoId != e && V9(b, "getNowPlaying");
        }
      }, 5e3)));
    var d = [];
    (this.j.listId == c.listId &&
      this.j.videoId == c.videoId &&
      this.j.index == c.index) ||
      d.push("remoteQueueChange");
    (this.j.playerState == c.playerState &&
      this.j.volume == c.volume &&
      this.j.muted == c.muted &&
      I9(this.j) == I9(c) &&
      g.um(this.j.trackData) == g.um(c.trackData)) ||
      d.push("remotePlayerChange");
    this.j.reset(a);
    g.$b(
      d,
      function (e) {
        this.oa(e);
      },
      this
    );
  };
  g.k.ZV = function () {
    var a = this.B.Rs(),
      b = g.Bb(this.C, function (c) {
        return "REMOTE_CONTROL" == c.type && c.id != a;
      });
    return b ? b.id : "";
  };
  g.k.jD = function () {
    return this.B.Xs();
  };
  g.k.d5 = function () {
    return this.G || "UNSUPPORTED";
  };
  g.k.e5 = function () {
    return this.N || "";
  };
  g.k.Q1 = function () {
    !isNaN(this.jD()) && this.B.Lw();
  };
  g.k.N$ = function (a, b) {
    V9(this, a, b);
    bAb(this);
  };
  g.k.VS = function () {
    var a = g.qC("SID", "") || "",
      b = g.qC("SAPISID", "") || "",
      c = g.qC("__Secure-3PAPISID", "") || "";
    if (!a && !b && !c) return "";
    a = g.lg(g.kg(a), 2);
    b = g.lg(g.kg(b), 2);
    c = g.lg(g.kg(c), 2);
    return g.lg(g.kg(a + "," + b + "," + c), 2);
  };
  U9.prototype.subscribe = U9.prototype.subscribe;
  U9.prototype.unsubscribeByKey = U9.prototype.Wh;
  U9.prototype.getProxyState = U9.prototype.o5;
  U9.prototype.disconnect = U9.prototype.Xy;
  U9.prototype.getPlayerContextData = U9.prototype.m5;
  U9.prototype.setPlayerContextData = U9.prototype.S$;
  U9.prototype.getOtherConnectedRemoteId = U9.prototype.ZV;
  U9.prototype.getReconnectTimeout = U9.prototype.jD;
  U9.prototype.getAutoplayMode = U9.prototype.d5;
  U9.prototype.getAutoplayVideoId = U9.prototype.e5;
  U9.prototype.reconnect = U9.prototype.Q1;
  U9.prototype.sendMessage = U9.prototype.N$;
  U9.prototype.getXsrfToken = U9.prototype.VS;
  U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.aX;
  g.w(nAb, g9);
  g.k = nAb.prototype;
  g.k.Mk = function (a) {
    return this.hh.$_gs(a);
  };
  g.k.contains = function (a) {
    return !!this.hh.$_c(a);
  };
  g.k.get = function (a) {
    return this.hh.$_g(a);
  };
  g.k.start = function () {
    this.hh.$_st();
  };
  g.k.add = function (a, b, c) {
    this.hh.$_a(a, b, c);
  };
  g.k.remove = function (a, b, c) {
    this.hh.$_r(a, b, c);
  };
  g.k.AK = function (a, b, c, d) {
    this.hh.$_un(a, b, c, d);
  };
  g.k.ya = function () {
    for (var a = 0, b = this.j.length; a < b; ++a) this.hh.$_ubk(this.j[a]);
    this.j.length = 0;
    this.hh = null;
    g9.prototype.ya.call(this);
  };
  g.k.R1 = function () {
    this.oa("screenChange");
  };
  g.k.q8 = function () {
    this.oa("onlineScreenChange");
  };
  l9.prototype.$_st = l9.prototype.start;
  l9.prototype.$_gspc = l9.prototype.L1;
  l9.prototype.$_gsppc = l9.prototype.QS;
  l9.prototype.$_c = l9.prototype.contains;
  l9.prototype.$_g = l9.prototype.get;
  l9.prototype.$_a = l9.prototype.add;
  l9.prototype.$_un = l9.prototype.AK;
  l9.prototype.$_r = l9.prototype.remove;
  l9.prototype.$_gs = l9.prototype.Mk;
  l9.prototype.$_gos = l9.prototype.PS;
  l9.prototype.$_s = l9.prototype.subscribe;
  l9.prototype.$_ubk = l9.prototype.Wh;
  var f$ = null,
    i$ = !1,
    W9 = null,
    X9 = null,
    yAb = null,
    a$ = [];
  g.w(DAb, g.J);
  g.k = DAb.prototype;
  g.k.ya = function () {
    g.J.prototype.ya.call(this);
    this.j.stop();
    this.B.stop();
    this.N.stop();
    var a = this.Gc;
    a.unsubscribe("proxyStateChange", this.zY, this);
    a.unsubscribe("remotePlayerChange", this.sE, this);
    a.unsubscribe("remoteQueueChange", this.pJ, this);
    a.unsubscribe("previousNextChange", this.wY, this);
    a.unsubscribe("nowAutoplaying", this.rY, this);
    a.unsubscribe("autoplayDismissed", this.XX, this);
    this.Gc = this.module = null;
  };
  g.k.Rk = function (a) {
    var b = g.Ja.apply(1, arguments);
    if (2 != this.Gc.C)
      if (j$(this)) {
        if (1081 != M9(this.Gc).playerState || "control_seek" !== a)
          switch (a) {
            case "control_toggle_play_pause":
              M9(this.Gc).isPlaying() ? this.Gc.pause() : this.Gc.play();
              break;
            case "control_play":
              this.Gc.play();
              break;
            case "control_pause":
              this.Gc.pause();
              break;
            case "control_seek":
              this.K.XK(b[0], b[1]);
              break;
            case "control_subtitles_set_track":
              FAb(this, b[0]);
              break;
            case "control_set_audio_track":
              this.setAudioTrack(b[0]);
          }
      } else
        switch (a) {
          case "control_toggle_play_pause":
          case "control_play":
          case "control_pause":
            b = this.J.getCurrentTime();
            k$(this, 0 === b ? void 0 : b);
            break;
          case "control_seek":
            k$(this, b[0]);
            break;
          case "control_subtitles_set_track":
            FAb(this, b[0]);
            break;
          case "control_set_audio_track":
            this.setAudioTrack(b[0]);
        }
  };
  g.k.x7 = function (a) {
    this.N.l1(a);
  };
  g.k.Naa = function (a) {
    this.Rk("control_subtitles_set_track", g.id(a) ? null : a);
  };
  g.k.b_ = function () {
    var a = this.J.getOption("captions", "track");
    g.id(a) || FAb(this, a);
  };
  g.k.Hc = function (a) {
    this.module.Hc(a, this.J.getVideoData().lengthSeconds);
  };
  g.k.b8 = function () {
    g.id(this.C) || GAb(this, this.C);
    this.D = !1;
  };
  g.k.zY = function (a, b) {
    this.B.stop();
    2 === b && this.SZ();
  };
  g.k.sE = function () {
    if (j$(this)) {
      this.j.stop();
      var a = M9(this.Gc);
      switch (a.playerState) {
        case 1080:
        case 1081:
        case 1084:
        case 1085:
          this.module.Qh = 1;
          break;
        case 1082:
        case 1083:
          this.module.Qh = 0;
          break;
        default:
          this.module.Qh = -1;
      }
      switch (a.playerState) {
        case 1081:
        case 1:
          this.zc(new g.KL(8));
          this.RZ();
          break;
        case 1085:
        case 3:
          this.zc(new g.KL(9));
          break;
        case 1083:
        case 0:
          this.zc(new g.KL(2));
          this.K.stop();
          this.Hc(this.J.getVideoData().lengthSeconds);
          break;
        case 1084:
          this.zc(new g.KL(4));
          break;
        case 2:
          this.zc(new g.KL(4));
          this.Hc(I9(a));
          break;
        case -1:
          this.zc(new g.KL(64));
          break;
        case -1e3:
          this.zc(
            new g.KL(128, {
              errorCode: "mdx.remoteerror",
              errorMessage: "This video is not available for remote playback.",
              lH: 2,
            })
          );
      }
      a = M9(this.Gc).trackData;
      var b = this.C;
      (a || b
        ? a &&
          b &&
          a.trackName == b.trackName &&
          a.languageCode == b.languageCode &&
          a.languageName == b.languageName &&
          a.kind == b.kind
        : 1) || ((this.C = a), GAb(this, a));
      a = M9(this.Gc);
      -1 === a.volume ||
        (Math.round(this.J.getVolume()) === a.volume &&
          this.J.isMuted() === a.muted) ||
        this.Z.isActive() ||
        this.G_();
    } else EAb(this);
  };
  g.k.wY = function () {
    this.J.oa("mdxpreviousnextchange");
  };
  g.k.pJ = function () {
    j$(this) || EAb(this);
  };
  g.k.rY = function (a) {
    isNaN(a) || this.J.oa("mdxnowautoplaying", a);
  };
  g.k.XX = function () {
    this.J.oa("mdxautoplaycanceled");
  };
  g.k.setAudioTrack = function (a) {
    j$(this) && this.Gc.setAudioTrack(this.J.getVideoData(1).videoId, a);
  };
  g.k.seekTo = function (a, b) {
    -1 === M9(this.Gc).playerState ? k$(this, a) : b && this.Gc.seekTo(a);
  };
  g.k.G_ = function () {
    var a = this;
    if (j$(this)) {
      var b = M9(this.Gc);
      this.events.Pc(this.Y);
      b.muted ? this.J.mute() : this.J.unMute();
      this.J.setVolume(b.volume);
      this.Y = this.events.T(this.J, "onVolumeChange", function (c) {
        BAb(a, c);
      });
    }
  };
  g.k.RZ = function () {
    this.j.stop();
    if (!this.Gc.isDisposed()) {
      var a = M9(this.Gc);
      a.isPlaying() && this.zc(new g.KL(8));
      this.Hc(I9(a));
      this.j.start();
    }
  };
  g.k.SZ = function () {
    this.B.stop();
    this.j.stop();
    var a = this.Gc.Xs();
    2 == this.Gc.C && !isNaN(a) && this.B.start();
  };
  g.k.zc = function (a) {
    this.B.stop();
    var b = this.G;
    if (!g.DBa(b, a)) {
      var c = g.VG(a, 2);
      c !== g.VG(this.G, 2) && this.J.bB(c);
      this.G = a;
      IAb(this.module, b, a);
    }
  };
  g.w(l$, g.U);
  l$.prototype.xd = function () {
    this.j.show();
  };
  l$.prototype.Ob = function () {
    this.j.hide();
  };
  l$.prototype.B = function () {
    m8("mdx-privacy-popup-cancel");
    this.Ob();
  };
  l$.prototype.C = function () {
    m8("mdx-privacy-popup-confirm");
    this.Ob();
  };
  g.w(m$, g.U);
  m$.prototype.onStateChange = function (a) {
    this.Fc(a.state);
  };
  m$.prototype.Fc = function (a) {
    if (3 === this.api.getPresentingPlayerType()) {
      var b = {
        RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name,
      };
      a = g.VG(a, 128)
        ? g.pK("Error on $RECEIVER_NAME", b)
        : a.isPlaying() || a.isPaused()
        ? g.pK("Playing on $RECEIVER_NAME", b)
        : g.pK("Connected to $RECEIVER_NAME", b);
      this.updateValue("statustext", a);
      this.j.show();
    } else this.j.hide();
  };
  g.w(n$, g.EX);
  n$.prototype.D = function () {
    var a = this.J.getOption("remote", "receivers");
    a && 1 < a.length && !this.J.getOption("remote", "quickCast")
      ? ((this.St = g.cc(a, this.j, this)),
        g.FX(this, g.eq(a, this.j)),
        (a = this.J.getOption("remote", "currentReceiver")),
        (a = this.j(a)),
        this.options[a] && this.Jj(a),
        this.enable(!0))
      : this.enable(!1);
  };
  n$.prototype.j = function (a) {
    return a.key;
  };
  n$.prototype.Ak = function (a) {
    return "cast-selector-receiver" === a ? "Cast..." : this.St[a].name;
  };
  n$.prototype.qh = function (a) {
    g.EX.prototype.qh.call(this, a);
    this.J.setOption("remote", "currentReceiver", this.St[a]);
    this.Mb.Ob();
  };
  g.w(HAb, g.xV);
  g.k = HAb.prototype;
  g.k.create = function () {
    var a = this.player.U(),
      b = g.gS(a);
    a = {
      device: "Desktop",
      app: "youtube-desktop",
      loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
      enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
      enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token"),
    };
    sAb(b, a);
    this.subscriptions.push(g.NE("yt-remote-before-disconnect", this.v7, this));
    this.subscriptions.push(g.NE("yt-remote-connection-change", this.O8, this));
    this.subscriptions.push(
      g.NE("yt-remote-receiver-availability-change", this.yY, this)
    );
    this.subscriptions.push(g.NE("yt-remote-auto-connect", this.M8, this));
    this.subscriptions.push(g.NE("yt-remote-receiver-resumed", this.L8, this));
    this.subscriptions.push(g.NE("mdx-privacy-popup-confirm", this.g$, this));
    this.subscriptions.push(g.NE("mdx-privacy-popup-cancel", this.f$, this));
    this.yY();
  };
  g.k.load = function () {
    this.player.cancelPlayback();
    g.xV.prototype.load.call(this);
    this.Sl = new DAb(this, this.player, this.Gc);
    var a = (a = AAb()) ? a.currentTime : 0;
    var b = xAb() ? new L9(e$(), void 0) : null;
    0 == a && b && (a = I9(M9(b)));
    0 !== a && this.Hc(a);
    IAb(this, this.gf, this.gf);
    this.player.Rp(6);
  };
  g.k.unload = function () {
    this.player.oa("mdxautoplaycanceled");
    this.Fs = this.Ep;
    g.tb(this.Sl, this.Gc);
    this.Gc = this.Sl = null;
    g.xV.prototype.unload.call(this);
    this.player.Rp(5);
    o$(this);
  };
  g.k.ya = function () {
    g.OE(this.subscriptions);
    g.xV.prototype.ya.call(this);
  };
  g.k.oE = function (a) {
    var b = g.Ja.apply(1, arguments);
    this.loaded && this.Sl.Rk.apply(this.Sl, [a].concat(g.oa(b)));
  };
  g.k.getAdState = function () {
    return this.Qh;
  };
  g.k.mp = function () {
    return this.Gc ? M9(this.Gc).mp : !1;
  };
  g.k.Sk = function () {
    return this.Gc ? M9(this.Gc).Sk : !1;
  };
  g.k.Hc = function (a, b) {
    this.jX = a || 0;
    this.player.oa("progresssync", a, b);
    this.player.Ra("onVideoProgress", a || 0);
  };
  g.k.getCurrentTime = function () {
    return this.jX;
  };
  g.k.getProgressState = function () {
    var a = M9(this.Gc),
      b = this.player.getVideoData();
    return {
      airingStart: 0,
      airingEnd: 0,
      allowSeeking: 1081 != a.playerState && this.player.Ph(),
      clipEnd: b.clipEnd,
      clipStart: b.clipStart,
      current: this.getCurrentTime(),
      displayedStart: -1,
      duration: a.getDuration(),
      ingestionTime: a.B ? a.C + G9(a) : a.C,
      isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
      loaded: a.Z,
      seekableEnd: a.B ? a.j + G9(a) : a.j,
      seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
      offset: 0,
      viewerLivestreamJoinMediaTime: 0,
    };
  };
  g.k.nextVideo = function () {
    this.Gc && this.Gc.nextVideo();
  };
  g.k.FJ = function () {
    this.Gc && this.Gc.FJ();
  };
  g.k.v7 = function (a) {
    1 === a && (this.iQ = this.Gc ? M9(this.Gc) : null);
  };
  g.k.O8 = function () {
    var a = xAb() ? new L9(e$(), void 0) : null;
    if (a) {
      var b = this.Fs;
      this.loaded && this.unload();
      this.Gc = a;
      this.iQ = null;
      b.key !== this.Ep.key && ((this.Fs = b), this.load());
    } else
      g.sb(this.Gc),
        (this.Gc = null),
        this.loaded &&
          (this.unload(),
          (a = this.iQ) &&
            a.videoId === this.player.getVideoData().videoId &&
            this.player.cueVideoById(a.videoId, I9(a)));
    this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3);
  };
  g.k.yY = function () {
    var a = [this.Ep],
      b = a.concat,
      c = tAb();
    C9() &&
      g.ZC("yt-remote-cast-available") &&
      c.push({ key: "cast-selector-receiver", name: "Cast..." });
    this.St = b.call(a, c);
    a = vAb() || this.Ep;
    p$(this, a);
    this.player.Ra("onMdxReceiversChange");
  };
  g.k.M8 = function () {
    var a = vAb();
    p$(this, a);
  };
  g.k.L8 = function () {
    this.Fs = vAb();
  };
  g.k.g$ = function () {
    this.ME = !0;
    o$(this);
    i$ = !1;
    f$ && h$(f$, 1);
    f$ = null;
  };
  g.k.f$ = function () {
    this.ME = !1;
    o$(this);
    p$(this, this.Ep);
    this.Fs = this.Ep;
    i$ = !1;
    f$ = null;
    this.player.playVideo();
  };
  g.k.Ih = function (a, b) {
    switch (a) {
      case "casting":
        return this.loaded;
      case "receivers":
        return this.St;
      case "currentReceiver":
        return (
          b && ("cast-selector-receiver" === b.key ? Mzb() : p$(this, b)),
          this.loaded ? this.Fs : this.Ep
        );
      case "quickCast":
        return 2 === this.St.length &&
          "cast-selector-receiver" === this.St[1].key
          ? (b && Mzb(), !0)
          : !1;
    }
  };
  g.k.AR = function () {
    this.Gc.AR();
  };
  g.k.vl = function () {
    return !1;
  };
  g.k.getOptions = function () {
    return ["casting", "receivers", "currentReceiver", "quickCast"];
  };
  g.k.isLoggedIn = function () {
    var a, b;
    return void 0 !==
      (null == (a = g.HB("PLAYER_CONFIG"))
        ? void 0
        : null == (b = a.args)
        ? void 0
        : b.authuser)
      ? !0
      : !(!g.HB("SESSION_INDEX") && !g.HB("LOGGED_IN"));
  };
  g.wV("remote", HAb);
})(_yt_player);
