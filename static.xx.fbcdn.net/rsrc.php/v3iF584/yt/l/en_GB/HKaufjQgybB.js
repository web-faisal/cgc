/*FB_PKG_DELIM*/

__d(
  "compareDOMOrder",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : 1;
    }
    f["default"] = a;
  },
  66
);
__d(
  "createLayoutContext",
  [
    "compareDOMOrder",
    "emptyFunction",
    "react",
    "useRefEffect",
    "useUnsafeRef_DEPRECATED",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
      j = b.useImperativeHandle,
      k = b.useMemo,
      l = b.useReducer;
    function a(a) {
      var b = {
          getLayout: function () {
            return a;
          },
          dispatch: c("emptyFunction"),
          nodes: new Map(),
          values: [],
        },
        d = h.createContext(b);
      function e(a) {
        var b = a.children,
          c = a.imperativeRef,
          e = a.value;
        a = o();
        var f = a[0],
          g = a[1],
          i = a[2];
        j(
          c,
          function () {
            return {
              forceUpdate: function () {
                return i();
              },
            };
          },
          [i]
        );
        a = k(
          function () {
            return { getLayout: e, dispatch: i, nodes: f, values: g };
          },
          [i, f, e, g]
        );
        return h.jsx(d.Provider, { value: a, children: b });
      }
      e.displayName = e.name + " [from " + f.id + "]";
      function g(a) {
        return h.jsx(d.Provider, babelHelpers["extends"]({ value: b }, a));
      }
      g.displayName = g.name + " [from " + f.id + "]";
      function l(b) {
        var e = c("useUnsafeRef_DEPRECATED")(null),
          f = i(d),
          g = f.getLayout,
          h = f.dispatch,
          j = f.nodes,
          l = f.values;
        f = k(
          function () {
            var b = e.current && j.get(e.current),
              c = j.size;
            return b != null
              ? g({
                  isFirst: b === 0,
                  isLast: b >= 0 && b === c - 1,
                  index: b,
                  total: c,
                  values: l,
                  nodes: j,
                })
              : a;
          },
          [g, j, l]
        );
        var m = c("useRefEffect")(
          function (a) {
            e.current = a;
            h({ add: a, value: b });
            return function () {
              (e.current = null), h({ remove: a });
            };
          },
          [h, b]
        );
        return [f, m];
      }
      function m(a) {
        var b = l(a.value),
          c = b[0];
        b = b[1];
        return a.children(c, b);
      }
      m.displayName = m.name + " [from " + f.id + "]";
      return {
        Provider: e,
        Consumer: m,
        Resetter: g,
        useLayoutContext: l,
        _context: d,
      };
    }
    function m(a, b) {
      a = a.node;
      b = b.node;
      return c("compareDOMOrder")(a, b);
    }
    function n(a, b) {
      var c = Array.from(a);
      b != null &&
        (b.remove &&
          (c = a.filter(function (a) {
            a = a.node;
            return a !== b.remove;
          })),
        b.add &&
          (c = c
            .filter(function (a) {
              a = a.node;
              return a !== b.add;
            })
            .concat({ node: b.add, value: b.value })));
      return c.sort(m);
    }
    function o() {
      var a = l(n, []),
        b = a[0];
      a = a[1];
      var c = k(
          function () {
            var a = new Map(),
              c = [];
            b.forEach(function (b, d) {
              var e = b.node;
              b = b.value;
              a.set(e, d);
              c.push(b);
            });
            return { nodes: a, values: c };
          },
          [b]
        ),
        d = c.nodes;
      c = c.values;
      return [d, c, a];
    }
    g["default"] = a;
  },
  98
);
__d(
  "TooltipMixinClass.react",
  ["DOM", "ReactDOMComet", "TooltipData", "react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    function i(a) {
      a = a.tooltip;
      return a != null && h.isValidElement(a);
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((b = d = a.call.apply(a, [this].concat(f)) || this),
          (d.state = {
            tooltipContainer: i(d.props) ? c("DOM").create("div") : null,
          }),
          (d.refFromTooltipMixin = h.createRef()),
          b) || babelHelpers.assertThisInitialized(d)
        );
      }
      b.getDerivedStateFromProps = function (a, b) {
        a = i(a);
        b = b.tooltipContainer;
        if (b && !a) return { tooltipContainer: null, root: void 0 };
        else if (!b && a) {
          b = c("DOM").create("div");
          a = d("ReactDOMComet").createRoot(b);
          return { tooltipContainer: b, root: a };
        }
        return null;
      };
      var e = b.prototype;
      e.componentDidMount = function () {
        this.$1();
      };
      e.componentDidUpdate = function (a, b) {
        b.tooltipContainer && !this.state.tooltipContainer && this.$2(),
          this.$1();
      };
      e.$1 = function () {
        var a = this.state.tooltipContainer,
          b = this.props.tooltip;
        if (b != null && h.isValidElement(b) && a != null) {
          var c,
            e = function () {
              return b;
            };
          (c = this.state.root) == null ? void 0 : c.render(h.jsx(e, {}));
        } else a = this.props.tooltip;
        a != null && this.refFromTooltipMixin.current != null
          ? d("TooltipData").set(
              this.refFromTooltipMixin.current,
              a,
              this.props.position,
              this.props.alignH
            )
          : this.refFromTooltipMixin.current != null &&
            d("TooltipData").remove(this.refFromTooltipMixin.current);
      };
      e.componentWillUnmount = function () {
        this.state.tooltipContainer && this.$2(),
          this.refFromTooltipMixin.current != null &&
            d("TooltipData").remove(this.refFromTooltipMixin.current);
      };
      e.$2 = function () {
        var a;
        (a = this.state.root) == null ? void 0 : a.unmount();
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "TooltipLink.react",
  ["TooltipMixinClass.react", "react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var c = b.prototype;
      c.render = function () {
        return h.jsx(
          "a",
          babelHelpers["extends"]({}, this.props, {
            ref: this.refFromTooltipMixin,
            children: this.props.children,
          })
        );
      };
      return b;
    })(c("TooltipMixinClass.react"));
    g["default"] = a;
  },
  98
);
__d(
  "BUIPrivateButtonLayoutContext",
  ["createLayoutContext"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("createLayoutContext")({});
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "XUIDialogCloseButton.react",
  ["fbt", "XUIDialogButton.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        return i.jsx(
          c("XUIDialogButton.react"),
          babelHelpers["extends"]({}, this.props, {
            action: "cancel",
            label: h._("Close"),
          })
        );
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "LayerAutoFocusReact",
  ["focusWithinLayer"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        (this._layer = a), (this._subscription = null);
      }
      var b = a.prototype;
      b.enable = function () {
        this._layer.containsReactComponent &&
          (this._subscription = this._layer.subscribe(
            "reactshow",
            this._focus.bind(this)
          ));
      };
      b.disable = function () {
        this._subscription &&
          (this._subscription.unsubscribe(), (this._subscription = null));
      };
      b._focus = function () {
        var a = this._layer.getRoot();
        a && c("focusWithinLayer")(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "LayerDestroyOnHide",
  ["setTimeout"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        var a = this._layer.destroy.bind(this._layer);
        this._subscription = this._layer.subscribe("hide", function () {
          c("setTimeout")(a, 0);
        });
      };
      b.disable = function () {
        this._subscription &&
          (this._subscription.unsubscribe(), (this._subscription = null));
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "SimpleXUIDialog",
  [
    "cx",
    "DialogX",
    "LayerAutoFocusReact",
    "LayerDestroyOnHide",
    "LayerFadeOnHide",
    "LayerFadeOnShow",
    "LayerHideOnBlur",
    "LayerHideOnEscape",
    "LayerRefocusOnHide",
    "XUIDialogBody.react",
    "XUIDialogButton.react",
    "XUIDialogCancelButton.react",
    "XUIDialogFooter.react",
    "XUIDialogOkayButton.react",
    "XUIDialogTitle.react",
    "joinClasses",
    "react",
    "uniqueID",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || b("react"),
      j = 445,
      k = {
        show: function (a, c, d, e) {
          var f = i.jsx(b("XUIDialogOkayButton.react"), {
            action: "cancel",
            use: "confirm",
          });
          return k.showEx(a, c, f, d, e);
        },
        showConfirm: function (a, c, d, e) {
          var f = !1,
            g = i.jsx(b("XUIDialogOkayButton.react"), {
              action: "cancel",
              className: e && e.autofocusConfirm ? "autofocus" : "",
              use: "confirm",
              onClick: function () {
                f = !0;
              },
              "data-testid": void 0,
            });
          e &&
            e.confirmBtnTxt &&
            (g = i.jsx(b("XUIDialogButton.react"), {
              className: b("joinClasses")(
                e && e.autofocusConfirm ? "autofocus" : "",
                "_2z1w"
              ),
              action: "cancel",
              use: "confirm",
              label: e.confirmBtnTxt,
              onClick: function () {
                f = !0;
              },
              "data-testid": void 0,
            }));
          g = i.jsxs("div", {
            children: [
              i.jsx(b("XUIDialogCancelButton.react"), {
                onClick: function () {
                  f = !1;
                },
                "data-testid": void 0,
              }),
              g,
            ],
          });
          function h() {
            d && d(f);
          }
          return k.showEx(a, c, g, h, e);
        },
        showEx: function (a, c, d, e, f) {
          f = f || {};
          var g = [
            b("LayerDestroyOnHide"),
            b("LayerFadeOnShow"),
            b("LayerFadeOnHide"),
            b("LayerHideOnEscape"),
            b("LayerRefocusOnHide"),
          ];
          f.hideOnBlur !== !1 && g.push(b("LayerHideOnBlur"));
          f.useReactFocusBehavior && g.push(b("LayerAutoFocusReact"));
          g = {
            width: f.width || j,
            xui: !0,
            addedBehaviors: g,
            causalElement: f.causalElement,
          };
          if (c) {
            var h = b("uniqueID")();
            g.titleID = h;
            c = i.jsx(b("XUIDialogTitle.react"), {
              showCloseButton: f.showCloseButton !== !1,
              id: h,
              children: c,
            });
          }
          d &&
            (d = i.jsx(b("XUIDialogFooter.react"), {
              "data-testid": void 0,
              leftContent: f.leftContent,
              children: d,
            }));
          h = i.jsxs("div", {
            children: [
              c,
              i.jsx(b("XUIDialogBody.react"), {
                "data-testid": void 0,
                children: a,
              }),
              d,
            ],
          });
          f = new (b("DialogX"))(g, h);
          e && f.subscribe("hide", e);
          f.show();
          return f;
        },
      };
    e.exports = k;
  },
  null
);
__d(
  "DialogHideOnSuccess",
  ["csx", "CSS"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      "use strict";
      function a(a) {
        this._layer = a;
      }
      var c = a.prototype;
      c.enable = function () {
        this._subscription = this._layer.subscribe(
          "success",
          this._handle.bind(this)
        );
      };
      c.disable = function () {
        this._subscription.unsubscribe(), (this._subscription = null);
      };
      c._handle = function (a, c) {
        b("CSS").matchesSelector(c.getTarget(), "._s") && this._layer.hide();
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    e.exports = a;
  },
  null
);
__d(
  "LayerRemoveOnHide",
  ["DOM"],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        this._layer = a;
      }
      var b = a.prototype;
      b.enable = function () {
        this._subscription = this._layer.subscribe(
          "hide",
          c("DOM").remove.bind(null, this._layer.getRoot())
        );
      };
      b.disable = function () {
        this._subscription &&
          (this._subscription.unsubscribe(), (this._subscription = null));
      };
      return a;
    })();
    Object.assign(a.prototype, { _subscription: null });
    g["default"] = a;
  },
  98
);
__d(
  "useCustomEqualityMemo",
  ["react", "useUnsafeRef_DEPRECATED"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;
    function a(a, b) {
      var d = c("useUnsafeRef_DEPRECATED")(a),
        e = b(d.current, a) ? d.current : a;
      h(
        function () {
          d.current = e;
        },
        [e]
      );
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "useDebouncedValue",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
      i = b.useState;
    function a(a, b) {
      var c = i(a),
        d = c[0],
        e = c[1];
      h(
        function () {
          var c = setTimeout(function () {
            return e(a);
          }, b);
          return function () {
            return clearTimeout(c);
          };
        },
        [a, b]
      );
      return d;
    }
    g["default"] = a;
  },
  98
);
__d(
  "sortBy",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
      a = a.map(function (a, c) {
        return { index: c, sortValue: b(a), value: a };
      });
      a.sort(function (a, b) {
        var c = a.sortValue,
          d = b.sortValue;
        if (c > d) return 1;
        return c < d ? -1 : a.index - b.index;
      });
      return a.map(function (a) {
        return a.value;
      });
    }
    f["default"] = a;
  },
  66
);
