/*FB_PKG_DELIM*/

__d(
  "SUISpinner.react",
  [
    "cx",
    "fbt",
    "invariant",
    "LoadingMarker.react",
    "joinClasses",
    "react",
    "withSUITheme",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = d("react"),
      l = d("react").useRef,
      m = 0.75,
      n = 1.5;
    function a(a) {
      var b = a["data-testid"];
      b = a.arcSpread;
      b = b === void 0 ? m : b;
      var d = a.className,
        e = a.margin,
        f = a.animationDuration,
        g = a.background;
      g = g === void 0 ? "light" : g;
      var h = a.size;
      h = h === void 0 ? "large" : h;
      var n = a.style;
      a = a.theme;
      a || j(0, 20159);
      var p = a.SUISpinner;
      p = p.sizes[h];
      var q = p.border;
      p = p.diameter;
      p = p + q * 2;
      q = l(null);
      return k.jsx(c("LoadingMarker.react"), {
        nodeRef: q,
        children: k.jsx("span", {
          "aria-busy": !0,
          "aria-valuemax": 360,
          "aria-valuemin": 0,
          "aria-valuetext": i._("Loading..."),
          className: c("joinClasses")("_4cgy", d, e),
          "data-testid": void 0,
          ref: q,
          role: "progressbar",
          style: babelHelpers["extends"]({}, n, { height: p, width: p }),
          children: k.jsx(o, {
            animationDuration: f,
            arcSpread: b,
            background: g,
            frameSize: p,
            size: h,
            theme: a,
          }),
        }),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    function o(a) {
      var b = a.animationDuration,
        c = a.arcSpread,
        d = a.background,
        e = a.frameSize,
        f = a.size;
      a = a.theme;
      a = a.SUISpinner;
      b = b !== void 0 ? { animationDuration: b + "ms" } : void 0;
      var g = d === "dark" ? a.darkActiveColor : a.activeColor;
      d = d === "dark" ? a.darkBackgroundColor : a.backgroundColor;
      a = a.sizes[f];
      f = a.border;
      a = a.diameter;
      var h = (e - a) / 2,
        i = a / 2,
        j = e / 2;
      return k.jsxs("svg", {
        className: "_1lid",
        height: e,
        style: b,
        viewBox: "0 0 " + e + " " + e,
        width: e,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          k.jsx("rect", {
            fill: "none",
            height: a,
            rx: i,
            strokeWidth: f,
            style: { stroke: d },
            width: a,
            x: h,
            y: h,
          }),
          k.jsx("path", {
            d: s(j, j, i, n * Math.PI, ((n + c) % 2) * Math.PI),
            fill: "none",
            strokeWidth: f,
            style: { stroke: g },
          }),
        ],
      });
    }
    o.displayName = o.name + " [from " + f.id + "]";
    function p(a) {
      return (a * Math.PI) / 180;
    }
    function q(a) {
      return (a * 180) / Math.PI;
    }
    function r(a, b, c, d) {
      d = p(d);
      return { x: a + c * Math.cos(d), y: b + c * Math.sin(d) };
    }
    function s(a, b, c, d, e) {
      d = q(d);
      e = q(e);
      var f = r(a, b, c, e);
      a = r(a, b, c, d);
      b = d - e > 180 ? "0" : "1";
      return [
        "M " + f.x + " " + f.y,
        "A " +
          c +
          " " +
          c +
          " " +
          0 +
          " " +
          b +
          " " +
          0 +
          " " +
          a.x +
          " " +
          a.y,
      ].join(" ");
    }
    b = c("withSUITheme")(a);
    g["default"] = b;
  },
  98
);
__d(
  "SUISpinnerUniform.bui",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      activeColor: "#1877F2",
      backgroundColor: "#CCD0D5",
      darkActiveColor: "#FFFFFF",
      darkBackgroundColor: "rgba(255, 255, 255, 0.3)",
      sizes: {
        large: { border: 2, diameter: 20 },
        small: { border: 1.5, diameter: 13 },
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "BUISpinner_DEPRECATED.react",
  [
    "cx",
    "BUIText.react",
    "SUISpinner.react",
    "SUISpinnerUniform.bui",
    "joinClasses",
    "makeBUIStandardComponent",
    "makeSUIFDSPrivateTheme",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = { maxWidth: "100%" },
      k = 1.25,
      l = c("makeSUIFDSPrivateTheme")("BUISpinner_DEPRECATED", {
        SUISpinner: c("SUISpinnerUniform.bui"),
      });
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.$1 = function () {
        return this.props.center === void 0
          ? Boolean(this.props.title)
          : this.props.center;
      };
      d.render = function () {
        var a = this.props,
          b = a.shade === "light" ? "dark" : "light",
          d = Boolean(a.title),
          e = this.$1();
        if (!d && !e)
          return i.jsx(c("SUISpinner.react"), {
            animationDuration: 750,
            arcSpread: k,
            background: b,
            "data-testid": void 0,
            margin: a.margin,
            size: a.size,
            style: a.style,
            theme: l,
          });
        var f = null;
        if (d) {
          d = b === "dark" ? ["white", "primary"] : ["primary", "secondary"];
          var g = d[0];
          d = d[1];
          f = i.jsxs("div", {
            style: j,
            children: [
              i.jsx(c("BUIText.react"), {
                color: g,
                display: "truncate",
                margin: "_3-8y",
                palette: b,
                size: "header4",
                textAlign: "center",
                weight: "bold",
                whiteSpace: "nowrap",
                children: a.title,
              }),
              a.subtitle != null &&
                i.jsx(c("BUIText.react"), {
                  color: d,
                  display: "truncate",
                  margin: "_3-8w",
                  palette: b,
                  size: "body2",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  children: a.subtitle,
                }),
            ],
          });
        }
        return i.jsxs("div", {
          className: c("joinClasses")(
            "_aeqv" +
              (a.shade === "light" ? " _aeqw" : "") +
              (e ? " _aeqx" : ""),
            a.margin
          ),
          "data-testid": void 0,
          style: a.style,
          children: [
            i.jsx(c("SUISpinner.react"), {
              animationDuration: 750,
              arcSpread: k,
              background: b,
              size: a.size,
              theme: l,
            }),
            f,
          ],
        });
      };
      return b;
    })(i.PureComponent);
    a.defaultProps = { shade: "dark", size: "large" };
    b = c("makeBUIStandardComponent")("BUISpinner_DEPRECATED", a);
    g["default"] = b;
  },
  98
);
__d(
  "TextInputControl",
  ["DOMControl", "Event", "Input", "debounce"],
  function (a, b, c, d, e, f) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        c = a.call(this, c) || this;
        var d = c.getRoot(),
          e = b("debounce")(
            c.update.bind(babelHelpers.assertThisInitialized(c)),
            0
          );
        b("Event").listen(d, { input: e, keydown: e, paste: e });
        return c;
      }
      var d = c.prototype;
      d.setMaxLength = function (a) {
        b("Input").setMaxLength(this.getRoot(), a);
        return this;
      };
      d.getValue = function () {
        return b("Input").getValue(this.getRoot());
      };
      d.isEmpty = function () {
        return b("Input").isEmpty(this.getRoot());
      };
      d.setValue = function (a) {
        b("Input").setValue(this.getRoot(), a);
        this.update();
        return this;
      };
      d.clear = function () {
        return this.setValue("");
      };
      d.setPlaceholderText = function (a) {
        b("Input").setPlaceholder(this.getRoot(), a);
        return this;
      };
      return c;
    })(b("DOMControl"));
    e.exports = a;
  },
  null
);
__d(
  "transferTextStyles",
  ["Style"],
  function (a, b, c, d, e, f, g) {
    var h = {
      fontFamily: null,
      fontSize: null,
      fontStyle: null,
      fontWeight: null,
      lineHeight: null,
      wordWrap: null,
    };
    function a(a, b) {
      for (var d in h)
        Object.prototype.hasOwnProperty.call(h, d) &&
          (h[d] = c("Style").get(a, d));
      c("Style").apply(b, h);
    }
    g["default"] = a;
  },
  98
);
__d(
  "TextMetrics",
  ["DOM", "Style", "UserAgent", "transferTextStyles"],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      var b = a.clientWidth,
        d = c("Style").get(a, "-moz-box-sizing") == "border-box";
      if (d && c("UserAgent").isBrowser("Firefox < 29")) return b;
      d =
        c("Style").getFloat(a, "paddingLeft") +
        c("Style").getFloat(a, "paddingRight");
      return b - d;
    }
    a = (function () {
      function a(a, b) {
        this.$1 = a;
        this.$2 = !!b;
        b = "textarea";
        var d = "textMetrics";
        this.$2 && ((b = "div"), (d += " textMetricsInline"));
        this.$3 = c("DOM").create(b, { className: d });
        c("transferTextStyles")(a, this.$3);
        (b = document.body) == null ? void 0 : b.appendChild(this.$3);
      }
      var b = a.prototype;
      b.measure = function (a) {
        var b = this.$1,
          d = this.$3;
        a = ((a = a) != null ? a : b.value) + "...";
        if (!this.$2) {
          var e = h(b);
          c("Style").set(d, "width", Math.max(e, 0) + "px");
        }
        b.nodeName === "TEXTAREA" && d instanceof HTMLTextAreaElement
          ? (d.value = a)
          : c("DOM").setContent(d, a);
        return { width: d.scrollWidth, height: d.scrollHeight };
      };
      b.destroy = function () {
        c("DOM").remove(this.$3);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "TextAreaControl",
  [
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "DOMControl",
    "Event",
    "Style",
    "TextInputControl",
    "TextMetrics",
    "classWithMixins",
    "mixin",
  ],
  function (a, b, c, d, e, f) {
    function g(a, c) {
      return b("Style").getFloat(a, c) || 0;
    }
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c) {
        var d;
        d = a.call(this, c) || this;
        d.autogrow = b("CSS").hasClass(c, "uiTextareaAutogrow");
        d.autogrowWithPlaceholder = b("CSS").hasClass(
          c,
          "uiTextareaAutogrowWithPlaceholder"
        );
        d.width = null;
        b("Event").listen(
          c,
          "focus",
          d._handleFocus.bind(babelHelpers.assertThisInitialized(d))
        );
        return d;
      }
      var d = c.prototype;
      d.setAutogrow = function (a) {
        this.autogrow = a;
        return this;
      };
      d.onupdate = function () {
        a.prototype.onupdate.call(this), this.updateHeight();
      };
      d.updateHeight = function () {
        if (this.autogrow) {
          var a = this.getRoot();
          this.metrics || (this.metrics = new (b("TextMetrics"))(a));
          typeof this.initialHeight === "undefined" &&
            ((this.isBorderBox =
              b("Style").get(a, "box-sizing") === "border-box" ||
              b("Style").get(a, "-moz-box-sizing") === "border-box" ||
              b("Style").get(a, "-webkit-box-sizing") === "border-box"),
            (this.borderBoxOffset =
              g(a, "padding-top") +
              g(a, "padding-bottom") +
              g(a, "border-top-width") +
              g(a, "border-bottom-width")),
            (this.initialHeight = a.offsetHeight - this.borderBoxOffset));
          var c;
          (!a.value || a.value.length === 0) && this.autogrowWithPlaceholder
            ? (c = this.metrics.measure(a.placeholder))
            : (c = this.metrics.measure());
          c = Math.max(this.initialHeight, c.height);
          this.isBorderBox && (c += this.borderBoxOffset);
          this.maxHeight &&
            c > this.maxHeight &&
            ((c = this.maxHeight),
            b("Arbiter").inform("maxHeightExceeded", { textArea: a }));
          c !== this.height &&
            ((this.height = c),
            b("Style").set(a, "height", c + "px"),
            b("Arbiter").inform("reflow"),
            this.inform("resize"));
        } else this.metrics && (this.metrics.destroy(), (this.metrics = null));
      };
      d.resetHeight = function () {
        (this.height = -1), this.update();
      };
      d.setMaxHeight = function (a) {
        this.maxHeight = a;
      };
      d.setAutogrowWithPlaceholder = function (a) {
        this.autogrowWithPlacedholder = a;
      };
      d._handleFocus = function () {
        this.width = null;
      };
      c.getInstance = function (a) {
        return b("DOMControl").getInstance(a) || new c(a);
      };
      return c;
    })(
      b("classWithMixins")(b("TextInputControl"), b("mixin")(b("ArbiterMixin")))
    );
    e.exports = a;
  },
  null
);
__d(
  "AbstractTextArea.react",
  ["cx", "AbstractTextField.react", "TextAreaControl", "mergeRefs", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = d("react").Component;
    b = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.$5 = function (a) {
            (d.$1 = a), d.$6(), c("mergeRefs")(d.props.textareaRef)(a);
          }),
          (d.$7 = function () {
            d.$2 && d.$2.onupdate();
          }),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = b.prototype;
      d.componentDidUpdate = function () {
        this.$4();
      };
      d.componentWillUnmount = function () {
        window.cancelAnimationFrame(this.$3),
          (this.$3 = null),
          (this.$2 = null);
      };
      d.render = function () {
        var a = this.props;
        a.autoGrow;
        a.textareaRef;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          "autoGrow",
          "textareaRef",
        ]);
        return i.jsx(
          c("AbstractTextField.react"),
          babelHelpers["extends"]({}, a, {
            children: i.jsx("textarea", {
              className: "_58an",
              onClick: this.props.onClick,
              onMouseDown: this.props.onMouseDown,
              onKeyUp: this.props.onKeyUp,
              onPaste: this.props.onPaste,
              rows: this.props.rows,
              tabIndex: this.props.tabIndex,
              ref: this.$5,
            }),
          })
        );
      };
      d.$4 = function () {
        this.$1 && this.$1.offsetParent != null
          ? this.$7()
          : (window.cancelAnimationFrame(this.$3),
            (this.$3 = window.requestAnimationFrame(this.$7)));
      };
      d.$6 = function () {
        if (this.$1 && this.props.autoGrow && !this.$2) {
          var a = new (c("TextAreaControl"))(this.$1);
          a.setAutogrow(!0);
          this.$4();
          this.$2 = a;
        }
      };
      d.focusInput = function () {
        this.$1 && this.$1.focus();
      };
      d.blurInput = function () {
        this.$1 && this.$1.blur();
      };
      d.getTextFieldDOM = function () {
        return this.$1;
      };
      d.getValue = function () {
        return this.$1 ? this.$1.value : "";
      };
      return b;
    })(a);
    g["default"] = b;
  },
  98
);
__d(
  "AsyncUploadBase",
  [
    "ArbiterMixin",
    "AsyncRequest",
    "AsyncResponse",
    "BrowserSupport",
    "Form",
    "forEachObject",
    "mixin",
    "removeFromArray",
  ],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      b.parseFiles = function (a) {
        var b = {};
        c("forEachObject")(a, function (a, c) {
          if (Array.isArray(a)) b[c] = a;
          else {
            b[c] = [];
            if (a instanceof window.FileList)
              for (var d = 0; d < a.length; d++) b[c].push(a.item(d));
            else
              (a instanceof window.File || a instanceof window.Blob) &&
                b[c].push(a);
          }
        });
        return b;
      };
      function b(b) {
        var c;
        c = a.call(this) || this;
        c._allowCrossOrigin = !1;
        c._allowCrossPageTransition = !1;
        c._customHeader = {};
        c._inFlight = !1;
        c._limit = 10;
        c._option = {};
        c._preventDefaultErrorHandler = !1;
        c._suspended = !1;
        b && c.setURI(b);
        c.setNetworkErrorRetryLimit(0);
        return c;
      }
      var e = b.prototype;
      e.setAllowCrossOrigin = function (a) {
        this._allowCrossOrigin = !!a;
        return this;
      };
      e.setAllowCrossPageTransition = function (a) {
        this._allowCrossPageTransition = !!a;
        return this;
      };
      e.setCustomHttpHeader = function (a, b) {
        this._customHeader[a] = b;
        return this;
      };
      e.setData = function (a) {
        this._data = a;
        return this;
      };
      e.setOption = function (a, b) {
        this._option[a] = b;
        return this;
      };
      e.setPreventDefaultErrorHandler = function (a) {
        this._preventDefaultErrorHandler = a;
        return this;
      };
      e.setLimit = function (a) {
        this._limit = a;
        return this;
      };
      e.setNetworkErrorRetryLimit = function (a) {
        this._retryLimit = a;
        return this;
      };
      e.setPreprocessHandler = function (a) {
        this._preprocessHandler = a;
        return this;
      };
      e.setRelativeTo = function (a) {
        this._relativeTo = a;
        return this;
      };
      e.setStatusElement = function (a) {
        this._statusElement = a;
        return this;
      };
      e.setURI = function (a) {
        this._uri = a;
        return this;
      };
      e.suspend = function () {
        this._suspended = !0;
        return this;
      };
      e.resume = function () {
        this._suspended = !1;
        this._processQueue();
        return this;
      };
      e.isUploading = function () {
        return this._inFlight;
      };
      e._createFileUpload = function (a, b, c) {
        return new h(a, b, c);
      };
      e._processQueue = function () {
        if (this._suspended) return;
        while (this._pending.length < this._limit) {
          if (!this._waiting.length) break;
          var a = this._waiting.shift(),
            b = this._preprocessHandler;
          b ? b(a, this._processUpload.bind(this)) : this._processUpload(a);
          this._pending.push(a);
        }
      };
      e._processUpload = function (a) {
        var b = d("Form").createFormData(a.getData() || this._data);
        if (a.getFile()) {
          b.append(a.getName(), a.getFile());
          var e = a.getFile().uploadID;
          e && b.append("upload_id", e);
          a.getAdditionalData().forEach(function (a, c) {
            return b.append(c, a);
          });
        }
        e = new (c("AsyncRequest"))()
          .setAllowCrossOrigin(this._allowCrossOrigin)
          .setAllowCrossPageTransition(this._allowCrossPageTransition)
          .setURI(this._uri)
          .setRawData(b)
          .setStatusElement(this._statusElement)
          .setHandler(this._success.bind(this, a))
          .setErrorHandler(this._failure.bind(this, a))
          .setUploadProgressHandler(this._progress.bind(this, a))
          .setInitialHandler(this._initial.bind(this, a));
        for (var f in this._option) e.setOption(f, this._option[f]);
        for (f in this._customHeader)
          e.setRequestHeader(f, this._customHeader[f]);
        this._relativeTo && e.setRelativeTo(this._relativeTo);
        e.send();
        a.setAsyncRequest(e);
        this._inFlight = !0;
        a.getRetryCount() || this.inform("start", a);
      };
      e._abort = function (a) {
        this._pending.indexOf(a) !== -1 &&
          (c("removeFromArray")(this._pending, a), this._processQueue()),
          c("removeFromArray")(this._waiting, a),
          a.abort();
      };
      e._initial = function (a) {
        if (a.isAborted()) return;
        this.inform("initial", a);
      };
      e._success = function (a, b) {
        if (a.isAborted()) {
          this.inform("success_after_abort", b);
          return;
        }
        this._complete(a);
        this.inform("success", a.handleSuccess(b));
        this._processQueue();
      };
      e._retryUpload = function (a) {
        a.increaseRetryCount(), this._processUpload(a);
      };
      e._failure = function (a, b) {
        if (a.isAborted()) return;
        if (b.error === 1004 && a.getRetryCount() < (this._retryLimit || 0))
          return this._retryUpload(a);
        this._complete(a);
        this.inform("failure", a.handleFailure(b)) !== !1 &&
          (this._preventDefaultErrorHandler ||
            c("AsyncResponse").defaultErrorHandler(b));
        this._processQueue();
      };
      e._progress = function (a, b) {
        if (a.isAborted()) return;
        this.inform("progress", a.handleProgress(b));
      };
      e._complete = function (a) {
        c("removeFromArray")(this._pending, a),
          this._pending.length || (this._inFlight = !1);
      };
      b.isSupported = function () {
        return d("BrowserSupport").hasFileAPI();
      };
      return b;
    })(c("mixin")(c("ArbiterMixin")));
    var h = (function () {
      function a(a, b, c) {
        (this._additionalData = new Map()),
          (this._success = null),
          (this._response = null),
          (this._progressEvent = null),
          (this._request = null),
          (this._numRetries = 0),
          (this._aborted = !1),
          (this._name = a),
          (this._file = b),
          (this._data = c);
      }
      var b = a.prototype;
      b.getName = function () {
        return this._name;
      };
      b.getFile = function () {
        return this._file;
      };
      b.setFile = function (a) {
        this._file = a;
      };
      b.getData = function () {
        return this._data;
      };
      b.getAdditionalData = function () {
        return this._additionalData;
      };
      b.isComplete = function () {
        return this._success !== null;
      };
      b.isSuccess = function () {
        return this._success === !0;
      };
      b.getResponse = function () {
        return this._response;
      };
      b.getProgressEvent = function () {
        return this._progressEvent;
      };
      b.setAsyncRequest = function (a) {
        this._request = a;
        return this;
      };
      b.increaseRetryCount = function () {
        this._numRetries++;
        return this;
      };
      b.getRetryCount = function () {
        return this._numRetries;
      };
      b.isWaiting = function () {
        return !this._request;
      };
      b.isAborted = function () {
        return this._aborted;
      };
      b.abort = function () {
        (this._request = null), (this._aborted = !0);
      };
      b.handleSuccess = function (a) {
        this._success = !0;
        this._response = a;
        this._progressEvent = null;
        return this;
      };
      b.handleFailure = function (a) {
        this._success = !1;
        this._response = a;
        this._progressEvent = null;
        return this;
      };
      b.handleProgress = function (a) {
        this._progressEvent = a;
        return this;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "AsyncUploadRequest",
  ["AsyncUploadBase"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c._files = null),
          (c._uploads = []),
          (c._fileLessUpload = null),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var d = b.prototype;
      d.setFiles = function (a) {
        this._files = c("AsyncUploadBase").parseFiles(a);
        return this;
      };
      d.setAlwaysReturnResponse = function (a) {
        this._shouldAlwaysReturnResponse = a;
      };
      d.abort = function () {
        var a = this;
        this._uploads.forEach(function (b) {
          return a._abort(b);
        });
      };
      d.send = function () {
        var a = this;
        if (this._inFlight) return;
        this._inFlight = !0;
        this._uploads = [];
        for (var b in this._files)
          this._files[b].forEach(function (c) {
            a._uploads.push(a._createFileUpload(b, c));
          });
        this._waiting = this._uploads.slice(0);
        this._pending = [];
        this._uploads.length
          ? this._processQueue()
          : ((this._fileLessUpload = this._createFileUpload(null, null)),
            this._processUpload(this._fileLessUpload));
      };
      d._processQueue = function () {
        a.prototype._processQueue.call(this);
        if (!this._pending.length && !this._waiting.length) {
          var b = this._uploads;
          b = this._shouldAlwaysReturnResponse
            ? this._fileLessUpload != null
              ? { response: this._fileLessUpload.getResponse(), uploads: b }
              : { response: b[0].getResponse(), uploads: b }
            : b;
          this.inform("complete", b);
        }
      };
      b.isSupported = function () {
        return c("AsyncUploadBase").isSupported();
      };
      return b;
    })(c("AsyncUploadBase"));
    g["default"] = a;
  },
  98
);
__d(
  "DOMClone",
  ["DataStoreConfig"],
  function (a, b, c, d, e, f) {
    a = {
      shallowClone: function (a) {
        return g(a, !1);
      },
      deepClone: function (a) {
        return g(a, !0);
      },
    };
    function g(a, c) {
      a = a.cloneNode(c);
      typeof a.__FB_TOKEN !== "undefined" && delete a.__FB_TOKEN;
      typeof a[b("DataStoreConfig").expandoKey] !== "undefined" &&
        delete a[b("DataStoreConfig").expandoKey];
      return a;
    }
    e.exports = a;
  },
  null
);
__d(
  "XUIGrayText.react",
  ["cx", "XUIText.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        return a.apply(this, arguments) || this;
      }
      var d = c.prototype;
      d.render = function () {
        var a = this.props,
          c = a.shade;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["shade"]);
        c =
          (c === "light" ? "_50f8" : "") +
          (c === "medium" ? " _c24" : "") +
          (c === "dark" ? " _50f9" : "");
        return i.jsx(
          b("XUIText.react"),
          babelHelpers["extends"]({}, a, {
            className: b("joinClasses")(this.props.className, c),
            children: this.props.children,
          })
        );
      };
      return c;
    })(i.Component);
    a.defaultProps = { shade: "light" };
    e.exports = a;
  },
  null
);
__d(
  "WebGraphQLLegacyHelper",
  ["invariant"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a(a) {
      var b = a.controller,
        c = a.docID,
        d = a.queryID,
        e = a.variables;
      a = a.legacyResponseFormat;
      (c != d && (c || d) != null) || h(0, 5819, c, d);
      b = b.getURIBuilder();
      d ? b.setFBID("query_id", d) : b.setFBID("doc_id", c);
      a && b.setBool("legacy_response_format", !0);
      e && b.setString("variables", JSON.stringify(e));
      return b.getURI();
    }
    g.getURI = a;
  },
  98
);
__d(
  "XWebGraphQLMutationController",
  ["XController"],
  function (a, b, c, d, e, f) {
    e.exports = b("XController").create("/webgraphql/mutation/", {
      query_id: { type: "FBID" },
      variables: { type: "String" },
      doc_id: { type: "FBID" },
      legacy_response_format: { type: "Bool", defaultValue: !1 },
    });
  },
  null
);
