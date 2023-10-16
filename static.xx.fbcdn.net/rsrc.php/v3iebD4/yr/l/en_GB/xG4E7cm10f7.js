/*FB_PKG_DELIM*/

__d(
  "SUITypeStyle",
  ["UserAgent"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    d = c("UserAgent").isPlatform("Windows") ? "" : "0.01em";
    var h = { letterSpacing: d },
      i = {
        "40px": "50px",
        "32px": "40px",
        "24px": "30px",
        "16px": "20px",
        "14px": "18px",
        "13px": "16px",
        "12px": "16px",
        "11px": "14px",
      };
    function a(a) {
      return a + "px";
    }
    function b(a) {
      return babelHelpers["extends"]({}, h, a, { lineHeight: i[a.fontSize] });
    }
    b.createSUIFontSize = a;
    g["default"] = b;
  },
  98
);
__d(
  "createBUITypeStyle",
  ["BUISystemFonts", "SUITypeStyle"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = d("BUISystemFonts").FONT_FAMILY,
        e = d("BUISystemFonts").LETTER_SPACING;
      return c("SUITypeStyle")(
        babelHelpers["extends"]({}, a, { fontFamily: b, letterSpacing: e })
      );
    }
    g["default"] = a;
  },
  98
);
__d(
  "SUIActionMenuUniform.business",
  ["cssVar", "ix", "Image.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      backgroundColor: "#FFFFFF",
      borderColor: "#CCD0D5",
      descriptionTypeStyle: c("createBUITypeStyle")({
        color: "#8D949E",
        fontSize: "12px",
        fontWeight: "normal",
      }),
      disabledItemColor: "#BEC3C9",
      headerColor: "#606770",
      headerTypeStyle: c("createBUITypeStyle")({
        color: "#606770",
        fontSize: "12px",
        fontWeight: "bold",
      }),
      highlightedItemBackgroundColor: "#F2F3F5",
      highlightedItemColor: "#606770",
      itemColor: "#606770",
      itemIconWidth: 16,
      itemHeight: 32,
      itemTypeStyle: c("createBUITypeStyle")({
        color: "#606770",
        fontSize: "12px",
        fontWeight: "normal",
      }),
      submenuIndicatorLTR: a.jsx(c("Image.react"), { src: i("496757") }),
      submenuIndicatorRTL: a.jsx(c("Image.react"), { src: i("503180") }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIBreadcrumbNavUniform.business",
  ["ix", "Image.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("react");
    b = {
      breadcrumbSeparatorIconLTR: a.jsx(c("Image.react"), { src: h("124209") }),
      breadcrumbSeparatorIconRTL: a.jsx(c("Image.react"), { src: h("124199") }),
      truncatedIcon: a.jsx(c("Image.react"), { src: h("122194") }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIButtonUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      height: { normal: 28, short: 24, tall: 36 },
      padding: {
        normal: { button: "12px", icon: "8px", onlyIcon: "6px" },
        short: { button: "8px", icon: "4px", onlyIcon: "4px" },
        tall: { button: "20px", icon: "8px", onlyIcon: "10px" },
      },
      typeStyle: c("createBUITypeStyle")({
        color: "#444950",
        fontSize: "12px",
        fontWeight: "bold",
      }),
      use: {
        default: {
          active: {
            background: "#DADDE1",
            borderColor: "#DADDE1",
            color: "#444950",
          },
          disabled: {
            background: "#F5F6F7",
            borderColor: "#EBEDF0",
            color: "#BEC3C9",
          },
          hover: {
            background: "#EBEDF0",
            borderColor: "#DADDE1",
            color: "#444950",
          },
          normal: {
            background: "#F5F6F7",
            borderColor: "#DADDE1",
            color: "#444950",
          },
        },
        confirm: {
          active: {
            background: "#043B87",
            borderColor: "#043B87",
            color: "#FFFFFF",
          },
          disabled: {
            background: "#B0D5FF",
            borderColor: "#B0D5FF",
            color: "#FFFFFF",
          },
          hover: {
            background: "#0E52B0",
            borderColor: "#0E52B0",
            color: "#FFFFFF",
          },
          normal: {
            background: "#1877F2",
            borderColor: "#1877F2",
            color: "#FFFFFF",
          },
        },
        special: {
          active: {
            background: "#006900",
            borderColor: "#006900",
            color: "#FFFFFF",
          },
          disabled: {
            background: "#86DF81",
            borderColor: "#86DF81",
            color: "#FFFFFF",
          },
          hover: {
            background: "#008C00",
            borderColor: "#008C00",
            color: "#FFFFFF",
          },
          normal: {
            background: "#00A400",
            borderColor: "#00A400",
            color: "#FFFFFF",
          },
        },
        flat: {
          active: {
            background: "rgba(0, 0, 0, 0.1)",
            borderColor: "transparent",
            color: "#444950",
          },
          disabled: {
            background: "transparent",
            borderColor: "transparent",
            color: "#BEC3C9",
          },
          hover: {
            background: "rgba(0, 0, 0, 0.05)",
            borderColor: "transparent",
            color: "#444950",
          },
          normal: {
            background: "transparent",
            borderColor: "transparent",
            color: "#444950",
          },
        },
        flatWhite: {
          active: {
            background: "rgba(255, 255, 255, 0.1)",
            borderColor: "transparent",
            color: "#FFFFFF",
          },
          disabled: {
            background: "transparent",
            borderColor: "transparent",
            color: "rgba(255, 255, 255, 0.4)",
          },
          hover: {
            background: "rgba(255, 255, 255, 0.05)",
            borderColor: "transparent",
            color: "#FFFFFF",
          },
          normal: {
            background: "transparent",
            borderColor: "transparent",
            color: "#FFFFFF",
          },
        },
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUICardUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#FFFFFF",
      borderColor: "#DADDE1",
      borderRadius: "4px",
      borderWidth: 1,
      body: {
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 12,
        paddingRight: 12,
        typeStyle: c("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "12px",
          WebkitFontSmoothing: "subpixel-antialiased",
        }),
      },
      footer: {
        borderTopColor: "#DADDE1",
        borderTopWidth: 1,
        marginLeft: 12,
        marginRight: 12,
        paddingBottom: 12,
        paddingTop: 12,
        typeStyle: c("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "12px",
          WebkitFontSmoothing: "subpixel-antialiased",
        }),
      },
      header: {
        borderBottomColor: "#DADDE1",
        borderBottomWidth: 1,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
      },
      status: {
        backgroundColor: "#F5F6F7",
        borderTopColor: "#DADDE1",
        borderTopWidth: 1,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12,
        typeStyle: c("createBUITypeStyle")({
          color: "#606770",
          fontSize: "11px",
          WebkitFontSmoothing: "subpixel-antialiased",
        }),
      },
      title: {
        typeStyle: c("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "14px",
          fontWeight: "bold",
          textRendering: "optimizelegibility",
        }),
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUICardUniformDEPRECATED.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      colors: {
        background: "#FFFFFF",
        border: "#dddfe2",
        footerBackground: "#f6f7f9",
        innerBorder: "#dddfe2",
      },
      typeStyles: {
        content: c("createBUITypeStyle")({
          color: "#4b4f56",
          fontSize: "12px",
        }),
        footer: c("createBUITypeStyle")({ color: "#f6f7f9", fontSize: "12px" }),
        header: c("createBUITypeStyle")({
          color: "#4b4f56",
          fontSize: "14px",
          fontWeight: "bold",
          textRendering: "optimizelegibility",
        }),
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIGlyphIcon.react",
  ["Image.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    function a(a) {
      var b = a.active,
        d = a.disabled,
        e = a.focused,
        f = a.hover,
        g = a.srcActive,
        i = a.srcDefault,
        j = a.srcDisabled,
        k = a.srcFocused,
        l = a.srcHover;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "active",
        "disabled",
        "focused",
        "hover",
        "srcActive",
        "srcDefault",
        "srcDisabled",
        "srcFocused",
        "srcHover",
      ]);
      i = i;
      d === !0 && j != null && j !== ""
        ? (i = j)
        : b === !0 && g != null && g !== ""
        ? (i = g)
        : e === !0 && k != null && k !== ""
        ? (i = k)
        : f === !0 && l != null && l !== "" && (i = l);
      return h.jsx(
        c("Image.react"),
        babelHelpers["extends"]({}, a, { src: i })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "SUICloseButtonUniform.business",
  ["ix", "SUIGlyphIcon.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = {
      dark: {
        large: function (a) {
          return i.jsx(
            c("SUIGlyphIcon.react"),
            babelHelpers["extends"]({}, a, {
              srcDefault: h("499680"),
              srcDisabled: h("490191"),
              srcHover: h("499681"),
            })
          );
        },
        small: function (a) {
          return i.jsx(
            c("SUIGlyphIcon.react"),
            babelHelpers["extends"]({}, a, {
              srcDefault: h("499672"),
              srcDisabled: h("490190"),
              srcHover: h("499673"),
            })
          );
        },
      },
      light: {
        large: function (a) {
          return i.jsx(
            c("SUIGlyphIcon.react"),
            babelHelpers["extends"]({}, a, {
              srcDefault: h("489948"),
              srcDisabled: h("499675"),
              srcHover: h("499674"),
            })
          );
        },
        small: function (a) {
          return i.jsx(
            c("SUIGlyphIcon.react"),
            babelHelpers["extends"]({}, a, {
              srcDefault: h("489947"),
              srcDisabled: h("499667"),
              srcHover: h("499666"),
            })
          );
        },
      },
      iconSize: { large: 16, small: 12 },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "getSUIDividerUniform.bui",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    function a() {
      return { color: "#DADDE1", margin: "_3-8p" };
    }
    g["default"] = a;
  },
  98
);
__d(
  "SUIDividerUniform.bui",
  ["getSUIDividerUniform.bui"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getSUIDividerUniform.bui")();
    g["default"] = a;
  },
  98
);
__d(
  "SUIDropdownMenuUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = { borderRadius: 2, boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)" };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIErrorUniform.business",
  ["cssVar", "ix", "Image.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      error: {
        borderColor: "#FA383E",
        icon: a.jsx(c("Image.react"), { src: i("480267") }),
      },
      warning: {
        borderColor: "#FFBA00",
        icon: a.jsx(c("Image.react"), { src: i("480789") }),
      },
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIFileSelectorUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: { default: "#FFFFFF", hovering: "#FFFFFF" },
      borderColor: { default: "#dddfe2", error: "#fa3e3e" },
      typeStyles: {
        content: c("createBUITypeStyle")({
          color: "#4b4f56",
          fontSize: "12px",
        }),
        header: c("createBUITypeStyle")({
          color: "#1d2129",
          fontSize: "24px",
          fontWeight: "bold",
        }),
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIFormRowUniform.business",
  ["cssVar", "SUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = c("SUITypeStyle")({
      color: "#1d2129",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "12px",
    });
    b = {
      childrenText: a,
      labelText: a,
      positions: {
        helpPosition: "13px",
        requiredPosition: "16px",
        requiredPositionWithHelp: "32px",
      },
      emphasizedBackgroundColor: "#e9ebee",
      requiredColor: "#fa3e3e",
    };
    d = b;
    g["default"] = d;
  },
  98
);
__d(
  "SUIHelpMessageUniform.business",
  ["ix", "Image.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("react");
    b = { icon: a.jsx(c("Image.react"), { src: h("481013") }) };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIHighlightedTextUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = { backgroundColor: "#dddfe2" };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIHorizontalLayoutUniform.business",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { margin: 8 };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "SUIInlineNuxUniform.business",
  ["cssVar", "ix", "Image.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      borderColor: "#DADDE1",
      icon: a.jsx(c("Image.react"), { src: i("403739") }),
      titleTypeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "14px",
        fontWeight: "bold",
      }),
      childrenTypeStyle: c("createBUITypeStyle")({
        color: "#444950",
        fontSize: "12px",
        fontWeight: "normal",
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIInlineTypeaheadUniform.business",
  ["cssVar", "ix", "SUIGlyphIcon.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      dividerBorderColor: "#ced0d4",
      searchIcon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: i("407178"),
        style: { top: "8px" },
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUILayerFooterUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = { isFullBleed: !1, topBorderColor: "#DADDE1" };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUILayerHeaderUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#FFFFFF",
      bottomBorderColor: "#DADDE1",
      errorIconMarginLeft: "8px",
      horizontalPadding: 12,
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "14px",
        fontWeight: "bold",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUILinkUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      normalColor: "#365899",
      hoverColor: "#365899",
      inverseColor: "#FFFFFF",
      inverseHoverColor: "#FFFFFF",
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIMessageBoxUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      outline: {
        backgroundColor: "#FFFFFF",
        border: "1px solid",
        borderColor: "#BEC3C9",
      },
      filled: {
        backgroundColor: "#E6F2FF",
        border: "1px solid",
        borderColor: "#BEC3C9",
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIModalBackgroundUniformDEPRECATED.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = { backgroundColor: "rgba(0, 0, 0, 0.4)" };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIModalCardUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#FFFFFF",
      bodyHorizontalMargin: 12,
      bodyVerticalMargin: 24,
      cardBoxShadow:
        "0 0 0 1px rgba(0, 0, 0, 0.1),\n       0 16px 32px 2px rgba(0, 0, 0, 0.15)",
      closeButtonPosition: 12,
      modalBoxShadow:
        "0 0 0 1px rgba(0, 0, 0, 0.1),\n       0 16px 32px 2px rgba(0, 0, 0, 0.15)",
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIModalCardUniformDEPRECATED.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
      colors: {
        background: "#FFFFFF",
        border: "#C6C9CC",
        footerBackground: "#FFFFFF",
        headerBackground: "#F5F7F8",
        innerBorder: "#DADCDE",
      },
      fullWidthFooterDivider: !1,
      padding: {
        contentLightPadding: {
          paddingBottom: "24px",
          paddingLeft: "12px",
          paddingRight: "12px",
          paddingTop: "24px",
        },
        contentNormalPadding: {
          paddingBottom: "24px",
          paddingLeft: "12px",
          paddingRight: "12px",
          paddingTop: "24px",
        },
        footer: {
          paddingBottom: "12px",
          paddingLeft: "12px",
          paddingRight: "12px",
          paddingTop: "12px",
        },
        header: {
          paddingBottom: "12px",
          paddingLeft: "12px",
          paddingRight: "12px",
          paddingTop: "12px",
        },
      },
      typeStyles: {
        content: c("createBUITypeStyle")({
          color: "#5B5C5E",
          fontSize: "12px",
        }),
        footer: c("createBUITypeStyle")({ color: "#5B5C5E", fontSize: "12px" }),
        header: c("createBUITypeStyle")({
          color: "#5B5C5E",
          fontSize: "14px",
          fontWeight: "bold",
        }),
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIModalUniformDEPRECATED.business",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { margin: 32 };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "SUIMultistepModalUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#FFFFFF",
      borderColor: "#DADCDE",
      boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
      headerTypeStyle: c("createBUITypeStyle")({
        color: "#1C1D1D",
        fontSize: "24px",
      }),
      selectedDotBackgroundColor: "#2887E6",
      textHeight: 34,
      typeStyle: c("createBUITypeStyle")({
        color: "#5B5C5E",
        fontSize: "12px",
      }),
      unselectedDotBackgroundColor: "#DADCDE",
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUINoticeGroupUniform.business",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { margin: 8 };
    b = a;
    f["default"] = b;
  },
  66
);
__d(
  "SUINoticeUniform.business",
  ["cssVar", "ix", "Image.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      textStyle: c("createBUITypeStyle")({
        color: "#5B5C5E",
        fontSize: "12px",
      }),
      type: {
        error: {
          icon: a.jsx(c("Image.react"), { src: i("407620") }),
          iconBackgroundColor: "#CE002F",
          messageBackgroundColor: "#FFFFFF",
          messageBorderColor: "#DADCDE",
        },
        information: {
          icon: a.jsx(c("Image.react"), { src: i("403743") }),
          iconBackgroundColor: "#066CD2",
          messageBackgroundColor: "#FFFFFF",
          messageBorderColor: "#DADCDE",
        },
        success: {
          icon: a.jsx(c("Image.react"), { src: i("376185") }),
          iconBackgroundColor: "#099A32",
          messageBackgroundColor: "#FFFFFF",
          messageBorderColor: "#DADCDE",
        },
        warning: {
          icon: a.jsx(c("Image.react"), { src: i("390679") }),
          iconBackgroundColor: "#FBA000",
          messageBackgroundColor: "#FFFFFF",
          messageBorderColor: "#DADCDE",
        },
      },
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIPopoverUniform.business",
  ["cssVar", "ix", "SUIGlyphIcon.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      backgroundColor: "#FFFFFF",
      border: "1px solid #DADCDE",
      boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
      icon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: i("403741"),
        srcHover: i("403742"),
      }),
      footer: { borderTop: "1px solid #DADCDE" },
      showArrow: !0,
      title: {
        typeStyle: c("createBUITypeStyle")({
          color: "#1C1D1D",
          fontSize: "14px",
          fontWeight: "bold",
        }),
      },
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1D1D",
        fontSize: "12px",
        fontWeight: "normal",
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIRadioListUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      activeBackgroundColor: "#dddfe2",
      activeBorderColor: "#bec2c9",
      activeDotColor: "#4b4f56",
      backgroundColor: "#FFFFFF",
      borderColor: "#dddfe2",
      disabledBackgroundColor: "#FFFFFF",
      disabledBorderColor: "#dddfe2",
      disabledDotColor: "#bec2c9",
      disabledTypeColor: "#bec2c9",
      dotColor: "#4b4f56",
      enabledTypeColor: "#1d2129",
      typeStyle: c("createBUITypeStyle")({
        color: "#4b4f56",
        fontSize: "12px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIRemovableSearchableSelectorUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      removeButtonBackgroundColor: "#F5F6F7",
      removeButtonBorderColor: "#DADDE1",
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUISearchInputUniform.business",
  ["ix", "SUIGlyphIcon.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = d("react");
    b = {
      cancelIcon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: h("363586"),
        srcHover: h("378280"),
      }),
      searchIcon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: h("394327"),
        srcFocused: h("407178"),
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUISearchableSelectorUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      disabledSubtitleTypeStyle: c("createBUITypeStyle")({
        color: "#BEC3C9",
        fontSize: "12px",
      }),
      disabledTitleTypeStyle: c("createBUITypeStyle")({
        color: "#BEC3C9",
        fontSize: "12px",
      }),
      dropdownBackgroundColor: "#FFFFFF",
      dropdownBorderColor: "#DADDE1",
      footerBackgroundColor: "#FFFFFF",
      footerTypeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
      }),
      headerBackgroundColor: "#F2F3F5",
      headerTypeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
      }),
      subtitleColor: "#606770",
      subtitleTypeStyle: c("createBUITypeStyle")({
        color: "#606770",
        fontSize: "12px",
      }),
      titleTypeStyle: c("createBUITypeStyle")({
        color: "#444950",
        fontSize: "12px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUISelectorButtonUniform.business",
  ["cssVar", "ix", "SUIGlyphIcon.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      use: {
        default: {
          chevron: a.jsx(c("SUIGlyphIcon.react"), {
            srcDefault: i("481883"),
            srcDisabled: i("482773"),
            style: { marginRight: "-2px" },
          }),
          disabled: {
            background: "#EBEDF0",
            borderColor: "#DADDE1",
            color: "#BEC3C9",
          },
        },
        confirm: {
          chevron: a.jsx(c("SUIGlyphIcon.react"), {
            srcDefault: i("483254"),
            srcDisabled: i("483254"),
            style: { marginRight: "-2px" },
          }),
          disabled: {
            background: "#EBEDF0",
            borderColor: "#DADDE1",
            color: "#BEC3C9",
          },
        },
        special: {
          chevron: a.jsx(c("SUIGlyphIcon.react"), {
            srcDefault: i("483254"),
            srcDisabled: i("483254"),
            style: { marginRight: "-2px" },
          }),
          disabled: {
            background: "#EBEDF0",
            borderColor: "#DADDE1",
            color: "#BEC3C9",
          },
        },
      },
      padding: "12px",
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUISelectorOptionGroupUniform.business",
  ["cssVar", "ix", "Image.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      activeBackgroundColor: "#DADDE1",
      activeColor: "#1C1E21",
      collapsedIcon: a.jsx(c("Image.react"), { src: i("496752") }),
      color: "#1C1E21",
      expandedIcon: a.jsx(c("Image.react"), { src: i("504839") }),
      highlightedBackgroundColor: "#F5F6F7",
      highlightedColor: "#1C1E21",
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
        fontWeight: "bold",
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUISelectorOptionUniform.business",
  ["cssVar", "ix", "SUIGlyphIcon.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      activeBackgroundColor: "#DADDE1",
      activeColor: "#1C1E21",
      color: "#1C1E21",
      descriptionColor: "#606770",
      descriptionSelectedColor: "#606770",
      disabledBackgroundColor: "#F5F6F7",
      disabledColor: "#606770",
      highlightedBackgroundColor: "#F5F6F7",
      highlightedColor: "#1C1E21",
      iconMargin: { left: "0", right: "8px" },
      padding: { bottom: "6px", left: "32px", right: "24px", top: "6px" },
      paddingWhenNoValue: {
        bottom: "6px",
        left: "12px",
        right: "24px",
        top: "6px",
      },
      selectedBackgroundColor: "#ECF3FF",
      selectedColor: "#1C1E21",
      selectedIcon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: i("495838"),
        style: { position: "relative", top: -1 },
      }),
      selectedIconMarginRight: "8px",
      selectedTypeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
        fontWeight: "bold",
      }),
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
        fontWeight: "normal",
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUISelectorSeparatorUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      color: "#dddfe2",
      margin: { bottom: "12px", left: "12px", right: "12px", top: "12px" },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUISelectorUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#FFFFFF",
      borderColor: "#DADDE1",
      boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUISimpleTableUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      colors: {
        background: "transparent",
        border: "#DADDE1",
        footerTopBorder: "#1C1E21",
        headerBottomBorder: "#1C1E21",
        hoverBackground: "#F5F6F7",
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUISpinnerUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      activeColor: "#1877F2",
      backgroundColor: "#E6F2FF",
      darkActiveColor: "#FFFFFF",
      darkBackgroundColor: "#777D88",
      sizes: {
        large: { border: 2, diameter: 20 },
        small: { border: 1.5, diameter: 14 },
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUISplitButtonUniform.business",
  ["cssVar", "ix", "Image.react", "SUIGlyphIcon.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      chevronPadding: "4px",
      use: {
        confirm: {
          chevron: a.jsx(c("Image.react"), { src: i("483254") }),
          dividerColor: "#FFFFFF",
        },
        default: {
          chevron: a.jsx(c("SUIGlyphIcon.react"), {
            srcDefault: i("481883"),
            srcDisabled: i("482773"),
          }),
          dividerColor: "#CCD0D5",
        },
        special: {
          chevron: a.jsx(c("Image.react"), { src: i("483254") }),
          dividerColor: "#FFFFFF",
        },
        flat: {
          chevron: a.jsx(c("SUIGlyphIcon.react"), {
            srcDefault: i("481883"),
            srcDisabled: i("482773"),
          }),
          dividerColor: "#DADDE1",
        },
        flatWhite: {
          chevron: a.jsx(c("Image.react"), { src: i("483254") }),
          dividerColor: "#FFFFFF",
        },
      },
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIStatusIndicatorUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      colors: {
        active: "#00A400",
        error: "#FA383E",
        empty: "#FFFFFF",
        inactive: "#8D949E",
        warning: "#FFBA00",
      },
      size: { border: 2, diameter: 8 },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITabGroupUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = { bottom: "8px", left: "16px", right: "24px", top: "8px" };
    b = {
      activeIndicatorColor: "#4267B2",
      dividerColor: "#DADDE1",
      subItem: {
        selectedBackgroundColor: "#FFFFFF",
        selectedColor: "#444950",
        highlightedBackgroundColor: "#4267B2",
        highlightedColor: "#FFFFFF",
        padding: a,
      },
    };
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "SUITabItemUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      activeBorderBottomColor: "#4267B2",
      activeTypeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "14px",
      }),
      disabledColor: "#BEC3C9",
      height: 44,
      hoverBackgroundColor: "#FFFFFF",
      iconMargin: 4,
      subtextTypeStyle: c("createBUITypeStyle")({
        color: "#606770",
        fontSize: "12px",
        fontWeight: "normal",
      }),
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "14px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITableCellUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      colors: {
        border: "#DADDE1",
        errorBackground: "#F9E3E6",
        loadingBarBackground: "#EBEDF0",
        modifiedBackground: "#F2F3F5",
        warningBackground: "#FFF4DB",
      },
      textStyles: {
        primaryText: c("createBUITypeStyle")({
          color: "#1C1E21",
          fontSize: "12px",
        }),
        secondaryText: c("createBUITypeStyle")({
          color: "#606770",
          fontSize: "11px",
          fontWeight: "400",
        }),
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITableHeaderCellUniform.business",
  ["cssVar", "ix", "Image.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      sortIcon: {
        ascending: a.jsx(c("Image.react"), { src: i("505789") }),
        descending: a.jsx(c("Image.react"), { src: i("505782") }),
        unsorted: a.jsx(c("Image.react"), { src: i("505794") }),
      },
      checkmarkIcon: a.jsx(c("Image.react"), { src: i("495429") }),
      borderColor: "#DADDE1",
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUITableUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      colors: {
        background: "#FFFFFF",
        bodyTopAndBottomBorder: "#1C1E21",
        border: "#DADDE1",
        disabledRow: "#FFFFFF",
        hoverBackground: "#F5F6F7",
        selectedRow: "#E6F2FF",
        highlightedRow: "#F2F3F5",
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITextAreaUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      disabled: {
        background: "#F5F6F7",
        borderColor: "#DADDE1",
        color: "#BEC3C9",
      },
      enabled: {
        background: "#FFFFFF",
        borderColor: "#DADDE1",
        color: "#1C1E21",
      },
      focusedBorderColor: "#3578E5",
      placeholderColor: "#8D949E",
      placeholderColorFocused: "#8D949E",
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITextInputUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      characterCountTypeStyle: c("createBUITypeStyle")({
        color: "#606770",
        fontSize: "11px",
        fontWeight: "normal",
      }),
      disabled: {
        background: "#F5F6F7",
        borderColor: "#DADDE1",
        color: "#BEC3C9",
      },
      enabled: {
        background: "#FFFFFF",
        borderColor: "#DADDE1",
        color: "#1C1E21",
      },
      errorIconMargin: "6px",
      focusedBorderColor: "#3578E5",
      height: 28,
      maxLengthHighlightColor: "rgba(250, 62, 62, 0.3)",
      placeholderColor: "#8D949E",
      placeholderColorFocused: "#8D949E",
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITextUniform.business",
  ["cssVar", "BUISystemFonts"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      header1: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 24,
        lineHeight: 28,
      },
      header2: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 20,
        lineHeight: 24,
      },
      header3: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
      },
      header4: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
      },
      body1: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
      },
      body1_DEPRECATED: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
      },
      body2: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 13,
        lineHeight: 17,
      },
      body2_DEPRECATED: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
      },
      body3: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 12,
        lineHeight: 16,
      },
      body3_DEPRECATED: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 13,
        lineHeight: 17,
      },
      meta1: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 12,
        lineHeight: 16,
      },
      display: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 40,
        lineHeight: 48,
      },
      heading: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 24,
        lineHeight: 32,
      },
      subheading: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 20,
        lineHeight: 24,
      },
      headline: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 16,
        lineHeight: 24,
      },
      regular: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 14,
        lineHeight: 20,
      },
      regularUI: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 14,
        lineHeight: 16,
      },
      large: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
      },
      letterSpacing: "normal",
      medium: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
      },
      shade: {
        dark: "#1d2129",
        light: "#90949c",
        link: "#365899",
        medium: "#4b4f56",
        white: "#FFFFFF",
      },
      small: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 12,
        lineHeight: 16,
      },
      color: {
        blueLink: "#385898",
        disabled: "#BEC3C9",
        disabledDark: "#373737",
        interactive: "#1877F2",
        negative: "#FA383E",
        placeholder: "#8D949E",
        positive: "#00A400",
        primary: "#1C1E21",
        primaryDark: "#cccccc",
        secondary: "#606770",
        secondaryDark: "#4A4A4A",
        white: "#FFFFFF",
      },
      xlarge: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 18,
        lineHeight: 24,
      },
      xsmall: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 11,
        lineHeight: 14,
      },
      xxlarge: {
        fontFamily: d("BUISystemFonts").FONT_FAMILY,
        fontSize: 24,
        lineHeight: 30,
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIThreeStateCheckboxInputUniform.business",
  [
    "cssVar",
    "ix",
    "SUIGlyphIcon.react",
    "autoFlipStyleProps",
    "createBUITypeStyle",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      activeCheckboxBackgroundColor: "#EBEDF0",
      activeCheckboxBorderColor: "#DADDE1",
      checkboxBackgroundColor: "#FFFFFF",
      checkboxBorderColor: "#DADDE1",
      checkedIcon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: i("495429"),
        srcDisabled: i("492920"),
        style: c("autoFlipStyleProps")({ left: "0", top: "0" }),
      }),
      disabledLabelColor: "#BEC3C9",
      disabledCheckboxBackgroundColor: "#EBEDF0",
      labelColor: "#1C1E21",
      partiallyCheckedIcon: a.jsx(c("SUIGlyphIcon.react"), {
        srcDefault: i("495440"),
        srcDisabled: i("492942"),
        style: c("autoFlipStyleProps")({ left: "0", top: "0" }),
      }),
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1E21",
        fontSize: "12px",
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUIToggleButtonGroupUniform.business",
  ["cssVar"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      disabled: {
        backgroundColor: "#F5F6F7",
        borderColor: "#DADDE1",
        color: "#BEC3C9",
      },
      normal: {
        backgroundColor: "#F5F6F7",
        borderColor: "#DADDE1",
        color: "#444950",
      },
      selected: {
        backgroundColor: "#DADDE1",
        borderColor: "#DADDE1",
        color: "#444950",
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITokenUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#F3F4F4",
      border: {
        borderColor: "#DADCDE",
        borderRadius: 100,
        borderStyle: "solid",
        borderWidth: 1,
      },
      color: "#1C1D1D",
      closeButtonShade: "dark",
      typeStyle: c("createBUITypeStyle")({
        color: "#1C1D1D",
        fontSize: "12px",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITokenizerItemListUniform.business",
  ["cssVar", "ix", "Image.react", "createBUITypeStyle", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      backgroundColor: "#FFFFFF",
      borderColor: "#e9ebee",
      categoryHeader: {
        borderColor: "#FFFFFF",
        typeStyle: c("createBUITypeStyle")({
          color: "#4b4f56",
          fontSize: "12px",
          fontWeight: "bold",
        }),
      },
      collapsedIcon: a.jsx(c("Image.react"), { src: i("363532") }),
      expandedIcon: a.jsx(c("Image.react"), { src: i("388066") }),
      typeStyle: c("createBUITypeStyle")({
        color: "#4b4f56",
        fontSize: "12px",
      }),
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUITokenizerItemUniform.business",
  ["cssVar", "ix", "Image.react", "react"],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = d("react");
    b = {
      disabled: { color: "#bec2c9", subtitleColor: "#bec2c9" },
      highlighted: {
        backgroundColor: "#f6f7f9",
        color: "#4b4f56",
        subtitleColor: "#90949c",
      },
      normal: { color: "#4b4f56", subtitleColor: "#90949c" },
      remove: {
        disabledIcon: a.jsx(c("Image.react"), { src: i("363585") }),
        highlightedIcon: a.jsx(c("Image.react"), { src: i("378280") }),
        normalIcon: a.jsx(c("Image.react"), { src: i("378280") }),
        selectedIcon: a.jsx(c("Image.react"), { src: i("378280") }),
      },
      selected: {
        backgroundColor: "#edf2fa",
        color: "#4b4f56",
        disabledIcon: a.jsx(c("Image.react"), { src: i("363511") }),
        highlightedIcon: a.jsx(c("Image.react"), { src: i("385699") }),
        isIconShownForSingleSelection: !0,
        normalIcon: a.jsx(c("Image.react"), { src: i("385699") }),
        selectedIcon: a.jsx(c("Image.react"), { src: i("385699") }),
        subtitleColor: "#90949c",
      },
    };
    e = b;
    g["default"] = e;
  },
  98
);
__d(
  "SUITokenizerUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      disabled: { backgroundColor: "#F3F4F4", borderColor: "#DADCDE" },
      enabled: { backgroundColor: "#FFFFFF", borderColor: "#DADCDE" },
      errorIconMarginRight: "8px",
      typeaheadInput: {
        typeStyle: c("createBUITypeStyle")({
          color: "#1C1D1D",
          fontSize: "12px",
        }),
      },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITooltipUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      backgroundColor: "#1C1E21",
      color: "#FFFFFF",
      showArrow: !0,
      typeStyle: c("createBUITypeStyle")({
        color: "#FFFFFF",
        fontSize: "12px",
        fontWeight: "bold",
      }),
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUITypeaheadUniform.business",
  ["cssVar", "createBUITypeStyle"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = {
      input: {
        backgroundColor: "#FFFFFF",
        borderColor: "#dddfe2",
        errorBorderColor: "#fa3e3e",
        focusedBorderColor: "#4080ff",
        typeStyle: c("createBUITypeStyle")({
          color: "#1d2129",
          fontSize: "12px",
        }),
        height: 28,
      },
      disabled: {
        backgroundColor: "#F5F6F7",
        borderColor: "#DADDE1",
        color: "#BEC3C9",
      },
      dropdown: {
        backgroundColor: "#FFFFFF",
        borderColor: "#ced0d4",
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.2)",
        itemPadding: { bottom: "8px", left: "12px", right: "12px", top: "8px" },
      },
      highlight: { backgroundColor: "#f6f7f9" },
    };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "SUIBusinessThemeComponents",
  [
    "SUIActionMenuUniform.business",
    "SUIBreadcrumbNavUniform.business",
    "SUIButtonUniform.business",
    "SUICardUniform.business",
    "SUICardUniformDEPRECATED.business",
    "SUICloseButtonUniform.business",
    "SUIDividerUniform.bui",
    "SUIDropdownMenuUniform.business",
    "SUIErrorUniform.business",
    "SUIFileSelectorUniform.business",
    "SUIFormRowUniform.business",
    "SUIHelpMessageUniform.business",
    "SUIHighlightedTextUniform.business",
    "SUIHorizontalLayoutUniform.business",
    "SUIInlineNuxUniform.business",
    "SUIInlineTypeaheadUniform.business",
    "SUILayerFooterUniform.business",
    "SUILayerHeaderUniform.business",
    "SUILinkUniform.business",
    "SUIMessageBoxUniform.business",
    "SUIModalBackgroundUniformDEPRECATED.business",
    "SUIModalCardUniform.business",
    "SUIModalCardUniformDEPRECATED.business",
    "SUIModalUniformDEPRECATED.business",
    "SUIMultistepModalUniform.business",
    "SUINoticeGroupUniform.business",
    "SUINoticeUniform.business",
    "SUIPopoverUniform.business",
    "SUIRadioListUniform.business",
    "SUIRemovableSearchableSelectorUniform.business",
    "SUISearchInputUniform.business",
    "SUISearchableSelectorUniform.business",
    "SUISelectorButtonUniform.business",
    "SUISelectorOptionGroupUniform.business",
    "SUISelectorOptionUniform.business",
    "SUISelectorSeparatorUniform.business",
    "SUISelectorUniform.business",
    "SUISimpleTableUniform.business",
    "SUISpinnerUniform.business",
    "SUISplitButtonUniform.business",
    "SUIStatusIndicatorUniform.business",
    "SUITabGroupUniform.business",
    "SUITabItemUniform.business",
    "SUITableCellUniform.business",
    "SUITableHeaderCellUniform.business",
    "SUITableUniform.business",
    "SUITextAreaUniform.business",
    "SUITextInputUniform.business",
    "SUITextUniform.business",
    "SUIThreeStateCheckboxInputUniform.business",
    "SUIToggleButtonGroupUniform.business",
    "SUITokenUniform.business",
    "SUITokenizerItemListUniform.business",
    "SUITokenizerItemUniform.business",
    "SUITokenizerUniform.business",
    "SUITooltipUniform.business",
    "SUITypeaheadUniform.business",
  ],
  function (a, b, c, d, e, f) {
    "use strict";
    a = {
      SUIActionMenu: b("SUIActionMenuUniform.business"),
      SUIBreadcrumbNav: b("SUIBreadcrumbNavUniform.business"),
      SUIButton: b("SUIButtonUniform.business"),
      SUICardDEPRECATED: b("SUICardUniformDEPRECATED.business"),
      SUICard: b("SUICardUniform.business"),
      SUICloseButton: b("SUICloseButtonUniform.business"),
      SUIDropdownMenu: b("SUIDropdownMenuUniform.business"),
      SUIDivider: b("SUIDividerUniform.bui"),
      SUIError: b("SUIErrorUniform.business"),
      SUIFileSelector: b("SUIFileSelectorUniform.business"),
      SUIFormRow: b("SUIFormRowUniform.business"),
      SUITableHeaderCell: b("SUITableHeaderCellUniform.business"),
      SUIHelpMessage: b("SUIHelpMessageUniform.business"),
      SUIHighlightedText: b("SUIHighlightedTextUniform.business"),
      SUIHorizontalLayout: b("SUIHorizontalLayoutUniform.business"),
      SUIInlineNux: b("SUIInlineNuxUniform.business"),
      SUIInlineTypeahead: b("SUIInlineTypeaheadUniform.business"),
      SUILayerFooter: b("SUILayerFooterUniform.business"),
      SUILayerHeader: b("SUILayerHeaderUniform.business"),
      SUILink: b("SUILinkUniform.business"),
      SUIMessageBox: b("SUIMessageBoxUniform.business"),
      SUIModalDEPRECATED: b("SUIModalUniformDEPRECATED.business"),
      SUIModalBackgroundDEPRECATED: b(
        "SUIModalBackgroundUniformDEPRECATED.business"
      ),
      SUIModalCardDEPRECATED: b("SUIModalCardUniformDEPRECATED.business"),
      SUIModalCard: b("SUIModalCardUniform.business"),
      SUIMultistepModal: b("SUIMultistepModalUniform.business"),
      SUINotice: b("SUINoticeUniform.business"),
      SUINoticeGroup: b("SUINoticeGroupUniform.business"),
      SUIPopover: b("SUIPopoverUniform.business"),
      SUIRadioList: b("SUIRadioListUniform.business"),
      SUIRemovableSearchableSelector: b(
        "SUIRemovableSearchableSelectorUniform.business"
      ),
      SUISearchableSelector: b("SUISearchableSelectorUniform.business"),
      SUISearchInput: b("SUISearchInputUniform.business"),
      SUISelector: b("SUISelectorUniform.business"),
      SUISelectorButton: b("SUISelectorButtonUniform.business"),
      SUISelectorOption: b("SUISelectorOptionUniform.business"),
      SUISelectorOptionGroup: b("SUISelectorOptionGroupUniform.business"),
      SUISelectorSeparator: b("SUISelectorSeparatorUniform.business"),
      SUISimpleTable: b("SUISimpleTableUniform.business"),
      SUISpinner: b("SUISpinnerUniform.business"),
      SUISplitButton: b("SUISplitButtonUniform.business"),
      SUIStatusIndicator: b("SUIStatusIndicatorUniform.business"),
      SUITabGroup: b("SUITabGroupUniform.business"),
      SUITableCell: b("SUITableCellUniform.business"),
      SUITable: b("SUITableUniform.business"),
      SUITabItem: b("SUITabItemUniform.business"),
      SUIText: b("SUITextUniform.business"),
      SUITextArea: b("SUITextAreaUniform.business"),
      SUITextInput: b("SUITextInputUniform.business"),
      SUIThreeStateCheckboxInput: b(
        "SUIThreeStateCheckboxInputUniform.business"
      ),
      SUIToggleButtonGroup: b("SUIToggleButtonGroupUniform.business"),
      SUIToken: b("SUITokenUniform.business"),
      SUITokenizer: b("SUITokenizerUniform.business"),
      SUITokenizerItem: b("SUITokenizerItemUniform.business"),
      SUITokenizerItemList: b("SUITokenizerItemListUniform.business"),
      SUITooltip: b("SUITooltipUniform.business"),
      SUITypeahead: b("SUITypeaheadUniform.business"),
    };
    e.exports = a;
  },
  null
);
__d(
  "SUIBusinessTheme",
  ["SUIBusinessThemeComponents", "SUITheme"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = new (c("SUITheme"))({
      id: "big",
      components: d("SUIBusinessThemeComponents"),
    });
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "PopoverAsyncMenu",
  [
    "Bootloader",
    "Event",
    "KeyStatus",
    "PopoverMenu",
    "VirtualCursorStatus",
    "setImmediate",
  ],
  function (a, b, c, d, e, f) {
    var g = {},
      h = 0;
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(c, d, e, f, i, j) {
        c = a.call(this, c, d, null, i) || this;
        c._endpoint = f;
        c._endpointData = j || {};
        c._loadingMenu = e;
        c._instanceId = h++;
        g[c._instanceId] = babelHelpers.assertThisInitialized(c);
        c._mouseoverListener = b("Event").listen(
          d,
          "mouseover",
          c.fetchMenu.bind(babelHelpers.assertThisInitialized(c))
        );
        return c;
      }
      var d = c.prototype;
      d._onLayerInit = function () {
        var a = this;
        !this._menu && this._loadingMenu && this.setMenu(this._loadingMenu);
        this._popover
          .getLayer()
          .subscribe("key", this._handleKeyEvent.bind(this));
        this._triggerInfo = {
          isKeyDown: b("KeyStatus").isKeyDown(),
          isVirtualCursorTriggered: b(
            "VirtualCursorStatus"
          ).isVirtualCursorTriggered(),
        };
        b("setImmediate")(function () {
          return a.fetchMenu();
        });
      };
      d._onPopoverHide = function () {
        a.prototype._onPopoverHide.call(this), (this._triggerInfo = null);
      };
      d._refetchMenu = function () {
        this._menu &&
          (this._menu.destroy(),
          (this._fetched = !1),
          (this._mouseoverListener = b("Event").listen(
            this.getTriggerElem(),
            "mouseover",
            this.fetchMenu.bind(this)
          )));
      };
      d.fetchMenu = function () {
        var a = this;
        if (this._fetched) return;
        b("Bootloader").loadModules(
          ["AsyncRequest"],
          function (b) {
            new b()
              .setURI(a._endpoint)
              .setData(
                babelHelpers["extends"](
                  { pmid: a._instanceId },
                  a._endpointData
                )
              )
              .send();
          },
          "PopoverAsyncMenu"
        );
        this._fetched = !0;
        this._mouseoverListener &&
          (this._mouseoverListener.remove(), (this._mouseoverListener = null));
      };
      d._setFocus = function (a) {
        var b = this._triggerInfo || {},
          c = b.isKeyDown;
        b = b.isVirtualCursorTriggered;
        this.setInitialFocus(a, c || b);
        this._triggerInfo = null;
      };
      c.setMenu = function (a, b) {
        a = g[a];
        a.setMenu(b);
        a._setFocus(b);
      };
      c.disableTypeaheadActivationForInstance = function (a) {
        a = g[a];
        a._isTypeaheadActivationDisabled = !0;
      };
      c.getInstance = function (a) {
        return g[a];
      };
      c.getInstanceByTriggerElem = function (a) {
        var b = null;
        Object.keys(g).forEach(function (c) {
          g[c]._triggerElem == a && (b = g[c]);
        });
        return b;
      };
      return c;
    })(b("PopoverMenu"));
    e.exports = a;
  },
  null
);
__d(
  "PopoverLoadingMenu",
  ["cx", "BehaviorsMixin", "DOM", "PopoverMenuInterface", "joinClasses"],
  function (a, b, c, d, e, f, g) {
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c(b) {
        var c;
        c = a.call(this) || this;
        c._config = b || {};
        c._theme = b.theme || {};
        return c;
      }
      var d = c.prototype;
      d.getRoot = function () {
        if (!this._root) {
          var a;
          this._root = (a = b("DOM")).create(
            "div",
            {
              className: b("joinClasses")(
                "_54nq",
                this._config.className,
                this._theme.className
              ),
            },
            a.create(
              "div",
              { className: "_54ng" },
              a.create(
                "div",
                { className: "_54nf _54af" },
                a.create("span", { className: "_54ag" })
              )
            )
          );
          this._config.behaviors &&
            this.enableBehaviors(this._config.behaviors);
        }
        return this._root;
      };
      return c;
    })(b("PopoverMenuInterface"));
    Object.assign(a.prototype, b("BehaviorsMixin"), { _root: null });
    e.exports = a;
  },
  null
);
__d(
  "PopoverAsyncMenu.react",
  [
    "cx",
    "CSS",
    "InlineBlock.react",
    "MenuTheme",
    "Popover",
    "PopoverAsyncMenu",
    "PopoverLoadingMenu",
    "PopoverMenu.react",
    "ReactDOM",
    "URI",
    "joinClasses",
    "prop-types",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = h || b("react");
    a = (function (a) {
      "use strict";
      babelHelpers.inheritsLoose(c, a);
      function c() {
        var c, d;
        for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
          f[g] = arguments[g];
        return (
          ((c = d = a.call.apply(a, [this].concat(f)) || this),
          (d.getPopoverMenu = function () {
            return d.$2;
          }),
          (d.$3 = function () {
            var a = b("ReactDOM").findDOMNode(d.refs.root);
            a = a.firstChild;
            return new (b("PopoverAsyncMenu"))(
              d.$1,
              a,
              d.props.loadingMenu,
              d.props.endpoint,
              d.props.behaviors,
              d.props.endpointData
            );
          }),
          (d.getMenu = function () {
            return d.$2.getMenu();
          }),
          (d.showPopover = function (a) {
            d.$1.showLayer();
            if (a) {
              var b = d.$2.getMenu();
              b.blur();
              b.focusAnItem(a);
            }
          }),
          (d.hidePopover = function () {
            var a = d.$1;
            a && a.isShown() && a.hideLayer();
          }),
          (d.getFocusedItem = function () {
            var a = d.$2.getMenu();
            return a.getFocusedItem();
          }),
          c) || babelHelpers.assertThisInitialized(d)
        );
      }
      var d = c.prototype;
      d.componentDidMount = function () {
        var a = this;
        a = b("ReactDOM").findDOMNode(this.refs.root);
        var c = a.firstChild;
        b("CSS").addClass(c, "_p");
        this.$1 = new (b("Popover"))(a, c, this.props.layerBehaviors, {
          alignh: this.props.alignh,
          position: this.props.position,
          disabled: this.props.disabled,
        });
        this.props.onShow && this.$1.subscribe("show", this.props.onShow);
        this.props.onHide && this.$1.subscribe("hide", this.props.onHide);
        this.$2 = this.$3();
      };
      d.componentDidUpdate = function (a) {
        this.props.alignh !== a.alignh &&
          this.$2.getPopover().getLayer().setAlignment(this.props.alignh),
          this.props.disabled !== a.disabled &&
            (this.props.disabled ? this.$2.disable() : this.$2.enable()),
          this.props.endpoint.toString() !== a.endpoint.toString() &&
            (this.hidePopover(), (this.$2 = this.$3()));
      };
      d.render = function () {
        var a = j.Children.map(this.props.children, function (a, c) {
          if (c === 0)
            return j.cloneElement(a, {
              className: b("joinClasses")(a.props.className, "_p"),
            });
          else return a;
        });
        return j.jsx(
          b("InlineBlock.react"),
          babelHelpers["extends"]({}, this.props, {
            className: b("joinClasses")(this.props.className, "uiPopover"),
            ref: "root",
            disabled: null,
            children: a,
          })
        );
      };
      d.componentWillUnmount = function () {
        this.hidePopover();
      };
      return c;
    })(j.Component);
    a.getButtonSize = b("PopoverMenu.react").getButtonSize;
    a.propTypes = {
      alignh: b("prop-types").oneOf(["left", "center", "right"]),
      alignv: b("prop-types").oneOf(["baseline", "bottom", "middle", "top"]),
      position: b("prop-types").oneOf(["above", "below", "left", "right"]),
      layerBehaviors: b("prop-types").array,
      loadingMenu: b("prop-types").instanceOf(b("PopoverLoadingMenu")),
      disabled: b("prop-types").bool,
      endpoint: b("prop-types").oneOfType([
        b("prop-types").string.isRequired,
        b("prop-types").instanceOf(i || (i = b("URI"))).isRequired,
      ]),
      endpointData: b("prop-types").object,
      onShow: b("prop-types").func,
      onHide: b("prop-types").func,
    };
    a.defaultProps = {
      alignv: "middle",
      loadingMenu: new (b("PopoverLoadingMenu"))({ theme: b("MenuTheme") }),
    };
    e.exports = a;
  },
  null
);
__d(
  "RoundImage.react",
  ["cx", "Image.react", "joinClasses", "react"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = c("joinClasses")(this.props.className, b.baseClassName);
        return i.jsx(
          c("Image.react"),
          babelHelpers["extends"]({}, this.props, { className: a })
        );
      };
      return b;
    })(i.Component);
    a.baseClassName = "_2qgu";
    g["default"] = a;
  },
  98
);
__d(
  "CornerEnum",
  ["keyMirror", "objectValues"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
      topLeft: null,
      topRight: null,
      bottomRight: null,
      bottomLeft: null,
    });
    b = c("objectValues")(a);
    d = babelHelpers["extends"]({}, a, { values: b });
    g["default"] = d;
  },
  98
);
__d(
  "SideEnum",
  ["keyMirror", "objectValues", "prop-types"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({ top: null, right: null, bottom: null, left: null });
    b = c("objectValues")(a);
    d = c("prop-types").oneOf(b);
    e = babelHelpers["extends"]({}, a, { values: b, propType: d });
    g["default"] = e;
  },
  98
);
__d(
  "ElementVisibilityTracking",
  [
    "Event",
    "SubscriptionsHandler",
    "ViewportTrackingHelper",
    "Visibility",
    "throttle",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = (function () {
      function a(a) {
        var b = this;
        this.handleVisibilityChange = function (a) {
          c("Visibility").isHidden()
            ? b.config.onLeaveViewport()
            : b.config.onEnterViewport();
        };
        this.config = a;
        this.subscriptions = new (c("SubscriptionsHandler"))();
        this.isVisible = this.$1();
        this.isVisible && a.onEnterViewport();
      }
      var b = a.prototype;
      b.init = function () {
        var a = this,
          b = c("throttle")(function (b) {
            a.handleResize(b);
          }, this.config.resizeThrottlingInterval),
          d = c("throttle")(function (b) {
            a.handleScroll(b);
          }, this.config.scrollThrottlingInterval);
        this.subscriptions.addSubscriptions(
          c("Event").listen(window, "resize", b),
          c("Event").listen(window, "scroll", d),
          c("Visibility").addListener(
            c("Visibility").VISIBLE,
            this.handleVisibilityChange
          ),
          c("Visibility").addListener(
            c("Visibility").HIDDEN,
            this.handleVisibilityChange
          )
        );
      };
      b.removeListeners = function () {
        this.subscriptions.release();
      };
      b.handleResize = function (a) {
        this.$2(a);
      };
      b.handleScroll = function (a) {
        this.$2(a);
      };
      b.$1 = function () {
        return d("ViewportTrackingHelper").isVisibleUnderBluebar(
          this.config.element,
          this.config.minVisibleHeight
        );
      };
      b.$2 = function (a) {
        a = this.$1();
        this.isVisible && !a
          ? this.config.onLeaveViewport()
          : !this.isVisible && a && this.config.onEnterViewport();
        this.isVisible = a;
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "SUIBorderUtils",
  ["CornerEnum", "Locale", "SideEnum", "prop-types"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    e = c("prop-types").arrayOf(c("prop-types").oneOf(c("SideEnum").values));
    f = c("prop-types").arrayOf(c("prop-types").oneOf(c("CornerEnum").values));
    function a(a, b) {
      b = b;
      if (a === c("CornerEnum").values)
        return b != null ? { borderRadius: b } : null;
      a = new Set(a);
      if (a.size === c("CornerEnum").values.length)
        return b != null ? { borderRadius: b } : null;
      b == null && (b = "2px");
      a = {
        borderTopLeftRadius: a.has("topLeft") ? b : "0",
        borderTopRightRadius: a.has("topRight") ? b : "0",
        borderBottomRightRadius: a.has("bottomRight") ? b : "0",
        borderBottomLeftRadius: a.has("bottomLeft") ? b : "0",
      };
      return d("Locale").isRTL()
        ? {
            borderTopLeftRadius: a.borderTopRightRadius,
            borderTopRightRadius: a.borderTopLeftRadius,
            borderBottomRightRadius: a.borderBottomLeftRadius,
            borderBottomLeftRadius: a.borderBottomRightRadius,
          }
        : a;
    }
    function b(a) {
      if (a === c("SideEnum").values) return null;
      a = new Set(a);
      if (a.size === c("SideEnum").values.length) return null;
      a = {
        borderTopWidth: a.has("top") ? "1px" : "0",
        borderRightWidth: a.has("right") ? "1px" : "0",
        borderBottomWidth: a.has("bottom") ? "1px" : "0",
        borderLeftWidth: a.has("left") ? "1px" : "0",
      };
      return d("Locale").isRTL()
        ? babelHelpers["extends"]({}, a, {
            borderRightWidth: a.borderLeftWidth,
            borderLeftWidth: a.borderRightWidth,
          })
        : a;
    }
    g.ALL_CORNERS = c("CornerEnum").values;
    g.ALL_SIDES = c("SideEnum").values;
    g.BorderedSidesPropType = e;
    g.RoundedCornersPropType = f;
    g.getBorderRadiusStyles = a;
    g.getBorderWidthStyles = b;
  },
  98
);
__d(
  "SUIInternalMouseUpListener",
  ["DOMEventListener"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
      i = null;
    function a(a) {
      i || (i = d("DOMEventListener").add(window, "mouseup", j)), (h = a);
    }
    function b(a) {
      h === a && (h = null);
    }
    function j(a) {
      h && (h(a), (h = null));
    }
    g.set = a;
    g.unset = b;
  },
  98
);
__d(
  "SUIButtonContext",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({ isFixedWidthPadded: void 0 });
    c = b;
    g["default"] = c;
  },
  98
);
__d(
  "mergeDeepInto",
  ["invariant", "mergeHelpers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = (c = b("mergeHelpers")).ArrayStrategies,
      i = c.checkArrayStrategy,
      j = c.checkMergeArrayArgs,
      k = c.checkMergeLevel,
      l = c.checkMergeObjectArgs,
      m = c.isTerminal,
      n = c.normalizeMergeArg,
      o = function (a, b, c, d) {
        l(a, b);
        k(d);
        var e = b ? Object.keys(b) : [];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          q(a, b, g, c, d);
        }
      },
      p = function (a, b, c, d) {
        j(a, b);
        k(d);
        if (c === h.Concat) a.push.apply(a, b);
        else {
          var e = Math.max(a.length, b.length);
          for (var f = 0; f < e; f++) q(a, b, f, c, d);
        }
      },
      q = function (a, b, c, d, e) {
        var f = b[c];
        b = Object.prototype.hasOwnProperty.call(b, c);
        var i = b && m(f),
          j = b && Array.isArray(f),
          k = b && !j && !j,
          l = a[c],
          n = Object.prototype.hasOwnProperty.call(a, c),
          q = n && m(l),
          r = n && Array.isArray(l),
          s = n && !r && !r;
        q
          ? i
            ? (a[c] = f)
            : j
            ? ((a[c] = []), p(a[c], f, d, e + 1))
            : k
            ? ((a[c] = {}), o(a[c], f, d, e + 1))
            : b || (a[c] = l)
          : r
          ? i
            ? (a[c] = f)
            : j
            ? ((d && h[d]) || g(0, 5117),
              d === h.Clobber && (l.length = 0),
              p(l, f, d, e + 1))
            : k && ((a[c] = {}), o(a[c], f, d, e + 1))
          : s
          ? i
            ? (a[c] = f)
            : j
            ? ((a[c] = []), p(a[c], f, d, e + 1))
            : k && o(l, f, d, e + 1)
          : n ||
            (i
              ? (a[c] = f)
              : j
              ? ((a[c] = []), p(a[c], f, d, e + 1))
              : k && ((a[c] = {}), o(a[c], f, d, e + 1)));
      };
    function a(a, b, c) {
      b = n(b);
      i(c);
      o(a, b, c, 0);
    }
    f["default"] = a;
  },
  66
);
__d(
  "mergeDeep",
  ["mergeDeepInto", "mergeHelpers"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b, d) {
      a = c("mergeHelpers").normalizeMergeArg(a);
      b = c("mergeHelpers").normalizeMergeArg(b);
      c("mergeHelpers").checkMergeObjectArgs(a, b);
      c("mergeHelpers").checkArrayStrategy(d);
      var e = {};
      c("mergeDeepInto")(e, a, d);
      c("mergeDeepInto")(e, b, d);
      return e;
    }
    g["default"] = a;
  },
  98
);
__d(
  "SUIButton_DEPRECATED.react",
  [
    "cx",
    "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",
    "KeyStatus",
    "Link.react",
    "RTLKeys",
    "SUIBorderUtils",
    "SUIButtonContext",
    "SUIErrorBoundary.react",
    "SUIGlyphIcon.react",
    "SUIInternalMouseUpListener",
    "SUITheme",
    "TooltipData",
    "VirtualCursorStatus",
    "autoFlipStyleProps",
    "joinClasses",
    "mergeDeep",
    "react",
    "shallowEqual",
    "withSUITheme",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = !1;
    b = "normal";
    e = "center";
    f = "button";
    var j = "default";
    h = {
      borderedSides: d("SUIBorderUtils").ALL_SIDES,
      disabled: a,
      hasHoverState: !0,
      height: b,
      labelIsHidden: !1,
      roundedCorners: d("SUIBorderUtils").ALL_CORNERS,
      suppressLabelOverflowTooltip: !1,
      suppressed: !1,
      textAlign: e,
      tooltipDelay: 0,
      type: f,
      use: j,
    };
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        b = a.call(this) || this;
        b.$1 = null;
        b.$4 = function (a) {
          b.setState({ isActive: !1, showFocusRing: !1 }),
            b.props.onBlur && b.props.onBlur(a);
        };
        b.$5 = function (a) {
          if (b.props.disabled) {
            a.preventDefault();
            return;
          }
          b.props.onClick &&
            (b.props.onClick(a), b.props.href || a.preventDefault());
        };
        b.$6 = function (a) {
          (d("KeyStatus").isKeyDown() ||
            d("VirtualCursorStatus").isVirtualCursorTriggered()) &&
            b.setState({ showFocusRing: !0 }),
            b.props.onFocus && b.props.onFocus(a);
        };
        b.$7 = function (a) {
          if (b.props.disabled) return;
          switch (a.keyCode) {
            case c("RTLKeys").RETURN:
            case c("RTLKeys").SPACE:
              b.setState({ isActive: !0, showFocusRing: !0 });
              break;
          }
          b.props.onKeyDown && b.props.onKeyDown(a);
        };
        b.$8 = function (a) {
          switch (a.keyCode) {
            case c("RTLKeys").RETURN:
            case c("RTLKeys").SPACE:
              b.setState({ isActive: !1 });
              break;
          }
          b.props.onKeyUp && b.props.onKeyUp(a);
        };
        b.$9 = function (a) {
          b.setState({ isHovering: !0 }),
            b.props.onMouseEnter &&
              (b.props.onMouseEnter(a), a.preventDefault());
        };
        b.$10 = function (a) {
          b.setState({ isHovering: !1 }),
            b.props.onMouseLeave &&
              (b.props.onMouseLeave(a), a.preventDefault());
        };
        b.$11 = function (a) {
          if (b.props.disabled) return;
          d("SUIInternalMouseUpListener").set(b.$2);
          b.setState({ isActive: !0, showFocusRing: !1 });
          b.props.onMouseDown && (b.props.onMouseDown(a), a.preventDefault());
        };
        b.$2 = function (a) {
          if (!b.state.isActive) return;
          b.setState({ isActive: !1 });
          b.props.onMouseUp && (b.props.onMouseUp(a), a.preventDefault());
        };
        b.$21 = function (a) {
          b.$1 = a;
          b.props.buttonRef == null
            ? void 0
            : b.props.buttonRef((a = a) != null ? a : null);
        };
        b.state = { isActive: !1, isHovering: !1, showFocusRing: !1 };
        return b;
      }
      var e = b.prototype;
      e.componentWillUnmount = function () {
        d("SUIInternalMouseUpListener").unset(this.$2);
      };
      e.componentDidUpdate = function (a) {
        if (this.$1) {
          a = this.$3(a);
          var b = this.$3(this.props);
          c("shallowEqual")(a, b) || d("TooltipData").refreshIfActive(this.$1);
        }
      };
      e.$3 = function (a) {
        a = a === void 0 ? this.props : a;
        var b = a.tooltip;
        a = a.tooltipDelay;
        var c;
        b &&
          ((c = d("TooltipData").propsFor(b)),
          a && (c["data-tooltip-delay"] = a));
        return c;
      };
      e.$12 = function () {
        return { textAlign: this.props.textAlign };
      };
      e.$13 = function (a) {
        var b = this.props.use || j,
          c;
        this.props.disabled
          ? (c = "disabled")
          : this.props.isDepressed || this.state.isActive
          ? (c = "active")
          : this.state.isHovering || this.state.showFocusRing
          ? (c = "hover")
          : (c = "normal");
        a = a.use[b];
        b = a[c];
        c = {
          backgroundColor: b.background,
          borderColor: b.borderColor,
          color: b.color,
        };
        a.fontWeight != null && (c.fontWeight = a.fontWeight);
        return b.backgroundImage
          ? babelHelpers["extends"]({}, c, {
              backgroundImage: b.backgroundImage,
            })
          : c;
      };
      e.$14 = function (a) {
        a = a.height[this.props.height];
        return { height: a + "px" };
      };
      e.$15 = function () {
        var a = this.props,
          b = a.width,
          c = a.maxWidth;
        a = a.minWidth;
        var d = {};
        b && (d.width = b);
        c && (d.maxWidth = c);
        a != null && (d.minWidth = a);
        return d;
      };
      e.$16 = function (a) {
        var b = new Set(this.props.borderedSides);
        a = a.height[this.props.height];
        b.has("bottom") && (a -= 1);
        b.has("top") && (a -= 1);
        return { lineHeight: a + "px" };
      };
      e.$17 = function (a, b, d, e) {
        if (b || (d && e)) return {};
        b = e ? "marginLeft" : "marginRight";
        d = a.padding[this.props.height].icon;
        return c("autoFlipStyleProps")(((e = {}), (e[b] = d), e)) || {};
      };
      e.$18 = function (a, b, c) {
        if (typeof this.props.width === "number" && c !== !0) return {};
        c = a.padding[this.props.height];
        a = c[b ? "onlyIcon" : "button"];
        return { paddingLeft: a, paddingRight: a };
      };
      e.$19 = function () {
        return this.props.uniformOverride
          ? c("mergeDeep")(
              c("SUITheme").get(this).SUIButton,
              this.props.uniformOverride
            )
          : c("SUITheme").get(this).SUIButton;
      };
      e.$20 = function (a, b, d, e, f, g) {
        return i.cloneElement(
          e,
          babelHelpers["extends"](
            {
              "aria-hidden": !0,
              className: "_271o",
              disabled: a,
              style: babelHelpers["extends"](
                {},
                this.$17(g, b, d, f),
                c(
                  "DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE"
                )(e).props.style
              ),
            },
            c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(
              e
            ).type === c("SUIGlyphIcon.react")
              ? {
                  active: this.state.isActive || this.props.isDepressed,
                  focused: this.state.showFocusRing,
                  hover: this.state.isHovering,
                }
              : {}
          )
        );
      };
      e.render = function () {
        var a = this;
        return i.jsx(c("SUIButtonContext").Consumer, {
          children: function (b) {
            b = b.isFixedWidthPadded;
            var e = a.$19(),
              f = a.props,
              g = f.borderedSides;
            f.buttonRef;
            var h = f.className_DEPRECATED,
              j = f.disabled,
              k = f.hasHoverState;
            f.height;
            var l = f.icon,
              m = f.iconAfter,
              n = f.isDepressed,
              o = f.isLabelFullWidth,
              p = f.label,
              q = f.labelIsHidden,
              r = f.layerAction;
            f.maxWidth;
            f.minWidth;
            var s = f.margin,
              t = f.rightContent,
              u = f.roundedCorners,
              v = f.suppressLabelOverflowTooltip,
              w = f.suppressed;
            f.textAlign;
            f.theme;
            var x = f.tooltip;
            f.tooltipDelay;
            f.use;
            f.uniformOverride;
            var y = f.width;
            f = babelHelpers.objectWithoutPropertiesLoose(f, [
              "borderedSides",
              "buttonRef",
              "className_DEPRECATED",
              "disabled",
              "hasHoverState",
              "height",
              "icon",
              "iconAfter",
              "isDepressed",
              "isLabelFullWidth",
              "label",
              "labelIsHidden",
              "layerAction",
              "maxWidth",
              "minWidth",
              "margin",
              "rightContent",
              "roundedCorners",
              "suppressLabelOverflowTooltip",
              "suppressed",
              "textAlign",
              "theme",
              "tooltip",
              "tooltipDelay",
              "use",
              "uniformOverride",
              "width",
            ]);
            var z = l != null,
              A = m != null,
              B = Boolean(p) && !q,
              C = z && A && !B;
            z = (z || A) && !C && !B;
            A = c("autoFlipStyleProps")(
              babelHelpers["extends"](
                {},
                a.$15(),
                e.typeStyle,
                a.$12(),
                a.$13(e),
                a.$14(e),
                a.$16(e),
                a.$18(e, z, b),
                d("SUIBorderUtils").getBorderRadiusStyles(u, e.borderRadius),
                d("SUIBorderUtils").getBorderWidthStyles(g),
                { backgroundClip: "padding-box" },
                a.props.style || {}
              )
            );
            w &&
              (A = babelHelpers["extends"]({}, A, {
                backgroundColor: "transparent",
                borderColor: "transparent",
              }));
            B = c("joinClasses")(
              "_271k" +
                (a.props.density === "flex" ? " _6uvr" : "") +
                (l ? " _271l" : "") +
                (z ? " _1o4e" : "") +
                (y === void 0 || y === "auto" ? " _271m" : "") +
                (j ? " _271n" : "") +
                (a.state.showFocusRing ? "" : " _1qjd") +
                (a.props.href ? " _1gwm" : "") +
                (f.autoFocus ? " autofocus" : "") +
                (r === "confirm" ? " layerConfirm" : "") +
                (r === "cancel" ? " layerCancel" : "") +
                (r === "button" ? " layerButton" : ""),
              s,
              h
            );
            var D;
            !x &&
              !f["data-tooltip-content"] &&
              !v &&
              ((D = {
                "data-hover": "tooltip",
                "data-tooltip-display": "overflow",
              }),
              f["data-tooltip-position"] &&
                (D = babelHelpers["extends"]({}, D, {
                  "data-tooltip-position": f["data-tooltip-position"],
                })));
            u = babelHelpers["extends"](
              {
                "aria-pressed":
                  (b = a.props["aria-pressed"]) != null ? b : void 0,
              },
              f
            );
            n != null &&
              a.props["aria-pressed"] === void 0 &&
              (u["aria-pressed"] = n);
            var E, F;
            l && (E = a.$20(j, z, C, l, !1, e));
            m && (F = a.$20(j, z, C, m, !0, e));
            var G;
            p &&
              (G = q
                ? i.jsx("span", { className: "accessible_elem", children: p })
                : i.jsx(
                    "div",
                    babelHelpers["extends"]({}, D, {
                      className: "_43rm" + (o ? " _46ce" : ""),
                      children: p,
                    })
                  ));
            g = babelHelpers["extends"]({}, a.$3(), u, {
              "aria-disabled": a.props.disabled,
              className: B,
              onBlur: a.$4,
              onClick: a.$5,
              onFocus: a.$6,
              onKeyDown: a.$7,
              onKeyUp: a.$8,
              onMouseDown: a.$11,
              onMouseEnter: k ? a.$9 : null,
              onMouseLeave: k ? a.$10 : null,
              style: A,
              type: a.props.type,
            });
            w = i.jsx("div", {
              className: "_43rl",
              children: i.jsxs(c("SUIErrorBoundary.react"), {
                children: [E, G, F, t],
              }),
            });
            return a.props.href
              ? i.jsx(
                  c("Link.react"),
                  babelHelpers["extends"]({}, g, {
                    linkRef: a.$21,
                    children: w,
                  })
                )
              : i.jsx(
                  "button",
                  babelHelpers["extends"]({}, g, { ref: a.$21, children: w })
                );
          },
        });
      };
      return b;
    })(i.PureComponent);
    a.defaultProps = h;
    b = c("withSUITheme")(a);
    g["default"] = b;
  },
  98
);
__d(
  "SUIButton.react",
  ["SUIButton_DEPRECATED.react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("SUIButton_DEPRECATED.react");
  },
  98
);
__d(
  "TrackingNodeTypes",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      HEADLINE: 1,
      USER_NAME: 2,
      ACTOR_PHOTO: 3,
      ACTION_LINKS: 4,
      LIKE_LINK: 5,
      UNLIKE_LINK: 6,
      PARTICIPANT: 7,
      PRONOUN: 8,
      ROBOTEXT: 9,
      TITLE: 10,
      MEDIA_GENERIC: 11,
      PHOTO: 12,
      VIDEO: 13,
      MUSIC: 14,
      ATTACHMENT: 15,
      NAME_LIST: 16,
      SHARE_LINK: 17,
      USER_MESSAGE: 18,
      SUBTITLE: 19,
      DESCRIPTION: 20,
      SOURCE: 21,
      BLINGBOX: 22,
      OTHER: 23,
      VIEW_ALL_COMMENTS: 24,
      COMMENT: 25,
      COMMENT_LINK: 26,
      SMALL_ACTOR_PHOTO: 27,
      SUBSTORY: 28,
      XBUTTON: 29,
      HIDE_LINK: 30,
      REPORT_SPAM_LINK: 31,
      HIDE_ALL_LINK: 32,
      BAD_AGGREGATION_LINK: 33,
      ADD_COMMENT_BOX: 34,
      APP_CALL_TO_ACTION: 35,
      UFI: 36,
      OG_LEFT_SLIDE_PAGER: 37,
      OG_RIGHT_SLIDE_PAGER: 38,
      EXP_CALL_TO_ACTION: 39,
      LARGE_MEDIA_ATTACHMENT: 40,
      FAN_PAGE: 42,
      UNFAN_PAGE: 43,
      SEE_MORE: 44,
      COLLECTION_ROBOTEXT_LINK: 45,
      COLLECTION_ACTION_LINK: 46,
      COLLECTION_TICKER_LINK: 47,
      SPONSORED_LINK: 49,
      PAGE_LINK: 50,
      SOCIAL_CONTEXT: 51,
      SOCIAL_ACTOR_PHOTO: 52,
      OFFERS_CLAIM: 53,
      OFFERS_CLICK: 54,
      DROPDOWN_BUTTON: 55,
      EVENT_VIEW: 56,
      EVENT_RSVP: 57,
      ADS_SHIMMED_LINK: 58,
      COLLECTION_ADD_BUTTON: 59,
      EVENT_INVITE_FRIENDS: 60,
      RHC_AD: 61,
      AD_CREATIVE_TITLE: 62,
      AD_CREATIVE_BODY: 63,
      AD_CREATIVE_IMAGE: 64,
      AD_SOCIAL_SENTENCE: 65,
      APP_NAME: 66,
      GROUP_JOIN: 67,
      PAGE_COVER_PHOTO: 68,
      PAGE_PROFILE_PIC: 69,
      AD_IDENTITY: 70,
      UNHIDE_LINK: 71,
      TRENDING_TOPIC_LINK: 72,
      RELATED_SHARE_ARTICLE: 73,
      OFFERS_USE_NOW: 74,
      RELATED_SHARE_VIDEO: 75,
      RHC_CARD: 76,
      RHC_CARD_HIDE: 77,
      RHC_SIMPLIFICATION: 78,
      RHC_SIMPLIFICATION_HIDE: 79,
      TOPIC_PIVOT_HEADER: 80,
      ADD_FRIEND_BUTTON: 81,
      SNOWLIFT: 82,
      SNOWLIFT_MESSAGE: 83,
      OFFERS_RESEND: 84,
      RHC_LINK_OPEN: 85,
      GENERIC_CALL_TO_ACTION_BUTTON: 86,
      AD_LOGOUT: 87,
      RHC_PHOTO_SLIDER: 88,
      RHC_COMMENT_BUTTON: 89,
      HASHTAG: 90,
      NOTE: 91,
      RELATED_SHARE_ARTICLE_HIDE: 92,
      RELATED_SHARE_VIDEO_HIDE: 93,
      NEKO_PREVIEW: 94,
      OG_COMPOSER_OBJECT: 95,
      INSTALL_ACTION: 96,
      SPONSORED_CONTEXT: 97,
      DIGITAL_GOOD: 98,
      STORY_FOOTER: 99,
      STORY_LOCATION: 100,
      ADD_PHOTO_ACTION: 101,
      ACTION_ICON: 102,
      EGO_FEED_UNIT: 103,
      PLACE_STAR_SURVEY: 104,
      REVIEW_MENU: 105,
      SAVE_ACTION: 106,
      PHOTO_GALLERY: 107,
      SUB_ATTACHMENT: 108,
      FEEDBACK_SECTION: 109,
      ALBUM: 110,
      ALBUM_COLLAGE: 111,
      AVATAR_LIST: 112,
      STORY_LIST: 113,
      MEDIA_CONTROLS: 114,
      ZERO_UPSELL_BUY: 115,
      ZERO_UPSELL_FEED_UNIT: 116,
      RATING: 117,
      PERMALINK_COMMENT: 118,
      LIKE_COUNT: 119,
      RETRY_BUTTON: 120,
      TIMELINE_GIFTS: 121,
      NEARBY_FRIENDS_LIST: 122,
      PRESENCE_UNIT: 123,
      EVENT_INVITE_SENT: 124,
      ATTACHMENT_TITLE: 125,
      HSCROLL_PAGER: 126,
      STORY_MESSAGE: 127,
      STATUS_LINK: 128,
      ADD_MEDIA_LINK: 129,
      ADD_QUESTION_LINK: 130,
      START_Q_AND_A_LINK: 131,
      FEED_STORY_MESSAGE_FLYOUT: 132,
      START_CONVERSATION_LINK: 133,
      ATTACH_LIFE_EVENT_LINK: 134,
      ATTACH_PLACE_LINK: 135,
      COVER_PHOTO_EDIT_LINK: 136,
      SHOW_LIKES: 137,
      ROTATE_LEFT_BUTTON: 138,
      ROTATE_RIGHT_BUTTON: 139,
      TAG_LINK: 140,
      CLOSE_BUTTON: 141,
      PAGER_NEXT: 142,
      PAGER_PREVIOUS: 143,
      FULLSCREEN_BUTTON: 144,
      ACTIONS: 145,
      CURATION_MENU: 146,
      PROFILE_PIC_EDIT_LINK: 147,
      VIEW_ALL_SHARES: 148,
      THUMBNAIL_LINK: 149,
      EDIT_HISTORY: 150,
      ADD_TO_THREAD: 151,
      SIDEBAR: 152,
      HOME_SIDENAV: 153,
      BUDDYLIST_NUB: 154,
      TITLEBAR: 155,
      SEND_BUTTON: 156,
      CONVERSATION: 157,
      CHAT_FLYOUT: 158,
      INPUT: 159,
      EMOTICONS: 160,
      VIDEOCHAT: 161,
      TYPEAHEAD: 162,
      OPTIONS_MENU: 163,
      BOOST_POST_BUTTON: 164,
      TOGGLE_BUTTON: 165,
      CHAT_SIDEBAR_FOOTER: 166,
      GRIPPER: 167,
      BOOKMARK_ITEM: 168,
      BOOKMARKS_SECTION: 169,
      BOOKMARKS_NAV: 170,
      RHC: 171,
      RHC_HEADER: 172,
      SIDE_ADS: 173,
      BUDDY_LIST: 174,
      SHOW_ADS_FEED: 184,
      VIDEO_IN_PLAY_CALL_TO_ACTION_BUTTON: 185,
      VIDEO_ENDSCREEN_CALL_TO_ACTION_BUTTON: 186,
      INLINE_PHOTO_PIVOTS_HIDE: 187,
      VIDEO_CALL_TO_ACTION_ENDSCREEN_REPLAY: 188,
      APP_ATTACHMENT: 189,
      ACTIVITY_LINK: 190,
      SAVE_BUTTON: 191,
      SEE_MORE_PHOTO_PAGE_POST_BUTTON: 192,
      BUY_VIRTUAL_GOOD: 193,
      SAVE_SECONDARY_MENU: 194,
      MPP_INSIGHTS: 195,
      GROUP_CANCEL: 197,
      GROUP_LEAVE: 198,
      MESSAGE_LINK: 199,
      VIDEO_SPONSORSHIP_LABEL: 200,
      MULTI_ATTACHMENT_PAGER_NEXT: 201,
      MULTI_ATTACHMENT_PAGER_PREV: 202,
      WEB_CLICK: 203,
      COMPOSER_POST: 204,
      MULTI_ATTACHMENT_VIDEO: 205,
      VIDEO_CALL_TO_ACTION_PAUSESCREEN_RESUME: 206,
      VOICECHAT: 207,
      PAGE_INVITE_FRIEND: 208,
      SEE_MORE_REDIRECT: 209,
      VIDEO_CALL_TO_ACTION_ATTACHMENT: 210,
      PAGE_POST_SEE_FIRST: 211,
      PAGE_POST_DEFAULT: 212,
      TOPIC_FEED_CUSTOMIZATION_UNIT_SUBMIT: 213,
      TOPIC_FEED_CUSTOMIZATION_UNIT_OPTION: 214,
      LEAD_GEN_OPEN_POPOVER: 215,
      LEAD_GEN_SUBMIT_CLICK: 216,
      LEAD_GEN_PRIVACY_CLICK: 217,
      LEAD_GEN_OFFSITE_CLICK: 218,
      EVENT_YOU_MAY_LIKE_HSCROLL: 219,
      LEAD_GEN_CONTEXT_CARD_CLOSE: 220,
      LEAD_GEN_CONTEXT_CARD_CTA_CLICK: 221,
      FEED_STORY_PLACE_ATTACHMENT: 222,
      PAGE_CALL_TO_ACTION_UNIT: 224,
      TRANSLATION: 225,
      FEED_STORY_ATTACHMENT_MISINFO_WARNING: 226,
      RELATED_LOCAL_NEWS_ATTACHMENT_LINK: 227,
      RELATED_LOCAL_NEWS_ATTACHMENT_SHARE: 228,
      STORY_TIMESTAMP: 229,
      STORY_HEADER: 230,
      SPONSORED_STORY: 231,
      EVENT_CTA_BUTTON: 232,
      RELATED_PAGE_POSTS_ATTACHMENT_CLICK: 233,
      RELATED_PAGE_POSTS_ATTACHMENT_SHARE: 234,
      RELATED_PAGE_POSTS_ATTACHMENT_XOUT: 235,
      RELATED_PAGE_POSTS_UNIT_XOUT: 236,
      CAROUSEL_CARD_STORY: 237,
      OFFERS_DETAILS_POPOVER: 238,
      SPOTLIGHT: 239,
      INSTREAM_CALL_TO_ACTION_BUTTON: 240,
      INSTREAM_CALL_TO_ACTION_ATTACHMENT: 241,
      SEARCH_AD_ATTACHMENT_CLICK: 242,
      SEARCH_AD_CTA_CLICK: 243,
      SEARCH_AD_OFFSITE_CLICK: 244,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_1: 245,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_2: 246,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_3: 247,
      MULTI_SHARE_GRID_EXPERIMENT_CARD_4: 248,
      MULTI_SHARE_GRID_EXPERIMENT_SEE_MORE: 249,
      HOVERCARD: 250,
      INSTANT_GAME_PLAYER: 251,
      POLITICAL_AD_STORY_HEADER_CLICK: 252,
      PHOTO_VOICE: 253,
      PHOTO_TAG: 254,
      ANDROID_PLAYSTORE_WATCH_AND_INSTALL_BUTTON: 255,
      VIDEO_POLLING_IN_CREATIVE_CTA_BUTTON: 256,
      VIDEO_SETTINGS: 257,
      PLAYABLE_CALL_TO_ACTION_BUTTON: 258,
      ATTACHMENT_FOOTER: 259,
      LEAD_GEN_THANK_YOU_PAGE: 260,
      SHOW_MENTIONS_PLUGIN: 261,
      AD_BREAK_FULL_VIDEO_INDICATOR: 262,
      INSTREAM_AD_IMAGE: 263,
      INSTREAM_AD_CONTEXT: 264,
      ATTACHMENT_FOOTER_DISCLAIMER: 265,
      INSTREAM_LONGER_AD_CLICK_WATCH_AND_MORE: 266,
      INSTREAM_POST_ROLL_LONGER_AD_ENDING_SCREEN: 267,
      ACTIVATE_OFFER_CTA_BUTTON: 268,
      INSTREAM_COLLECTION_AD_FOOTER_TITLE: 269,
      INSTREAM_COLLECTION_AD_CONTEXT_FOOTER_SUBIMAGE: 270,
      INSTREAM_COLLECTION_AD_DEFERRED_FOOTER_SUBIMAGE: 271,
      WATCH_AND_MORE: 272,
      INSTREAM_CONTEXT_CARD_IMAGE: 273,
      INSTREAM_CONTEXT_CARD_HEADLINE: 274,
      INSTREAM_CONTEXT_CARD_DISPLAY_LINK: 275,
      INSTREAM_CONTEXT_CARD_STORY_MESSAGE: 276,
      INSTREAM_CONTEXT_CARD_MAI_RATING: 277,
      INSTREAM_DEFERRED_CTA_IMAGE: 278,
      INSTREAM_DEFERRED_CTA_HEADLINE: 279,
      INSTREAM_DEFERRED_CTA_DISPLAY_LINK: 280,
      INSTREAM_DEFERRED_CTA_STORY_MESSAGE: 281,
      BIZ_DISCO_PERSISTENT_CTA: 282,
      STORY: 301,
      PERMALINK_STORY: 302,
      ARTICLE_CONTEXT_TRIGGER: 303,
      LINK: 304,
      ATTACHMENT_FOLLOW: 305,
      SNOWFLAKE_STORY: 306,
      SNOWFLAKE_PHOTO: 307,
      BIRTHDAY_REMINDER: 308,
      FRIEND_REQUEST: 309,
      PYMK_JEWEL: 310,
      BROWSE_RESULT: 311,
      PROFILE_LINK: 312,
      USER_PROFILE_PIC: 313,
      GROUP_MEMBER: 314,
      GROUP_SUGGESTION: 315,
      REACTION_BROWSER: 316,
      GROUP_MEMBER_SUGGESTION: 317,
      PROFILE_NAV_ITEM: 318,
      NOTIFICATION_JEWEL: 319,
      NOTIFICATION_ITEM: 320,
      SNACKS: 321,
      PROFILE_TILE: 322,
      FRIEND_PROFILE_TILE: 323,
      INTRO_PROFILE_TILE: 324,
      SUGGEST_FRIENDS_DIALOG: 325,
      APP_COLLECTION: 326,
      ALL_FRIENDS_COLLECTION: 327,
      MUTUAL_FRIENDS_COLLECTION: 328,
      OUTGOING_FRIEND_REQUESTS: 329,
      INSTANT_ARTICLE_RECIRCULATION_STORY: 330,
      FRIEND_CENTER_PYMK: 331,
      PARTICIPANTS_DIALOG: 332,
      FEED_COMPOSER: 333,
      CONFIRM_FRIEND_REQUEST: 334,
      GENERIC_PROFILE_BROWSER: 335,
      INSTANT_ARTICLE_NATIVE_STORY: 336,
      INSTANT_EXPERIENCE_DOCUMENT: 337,
      LIVE_VIDEO_CONTEXT: 338,
      COMMENT_ACTION: 339,
      ATTACHED_STORY: 340,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_1: 341,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_2: 342,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_3: 343,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_4: 344,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_5: 345,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_6: 346,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_7: 347,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_8: 348,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_9: 349,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_10: 350,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_11: 351,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_12: 352,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_13: 353,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_14: 354,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_15: 355,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_16: 356,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_17: 357,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_18: 358,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_19: 359,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_20: 360,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_21: 361,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_22: 362,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_23: 363,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_24: 364,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_25: 365,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_26: 366,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_27: 367,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_28: 368,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_29: 369,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_30: 370,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_31: 371,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_32: 372,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_33: 373,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_34: 374,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_35: 375,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_36: 376,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_37: 377,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_38: 378,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_39: 379,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_40: 380,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_41: 381,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_42: 382,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_43: 383,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_44: 384,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_45: 385,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_46: 386,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_47: 387,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_48: 388,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_49: 389,
      GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_50: 390,
      AGGREGATED_STORY: 391,
      THREADED_POSITION: 392,
      AR_ADS_OPEN_CAMERA: 393,
      AR_ADS_TAP_TO_CAMERA: 394,
      AR_ADS_CTA_SWIPE: 395,
      WORK_GALAHAD_NAV_ITEM: 400,
      WORK_GALAHAD_TAB_HOME: 401,
      WORK_GALAHAD_TAB_NOTIFICATIONS: 402,
      WORK_GALAHAD_TAB_CHATS: 403,
      WORK_GALAHAD_TAB_PROFILE: 404,
      WORK_GALAHAD_LIST_SHORTCUTS: 405,
      WORK_GALAHAD_LIST_GROUPS: 406,
      WORK_GALAHAD_LIST_PEOPLE: 407,
      WORK_GALAHAD_TAB_ADMIN_PANEL: 408,
      WORK_GALAHAD_TAB_RESELLER_CONSOLE: 409,
      HSCROLL_LEFT_ARROW: 410,
      HSCROLL_RIGHT_ARROW: 411,
      GET_SHOWTIMES_CALL_TO_ACTION: 412,
      INTERESTED_CALL_TO_ACTION: 413,
      OTHER_CALL_TO_ACTION: 414,
      WORK_GALAHAD_TAB_DIRECT: 415,
      WORK_GALAHAD_LIST_BOTS: 416,
      INTERACTIVE_POLL_OPTION: 417,
      INTERACTIVE_POLL_BACKGROUND_CARD: 418,
      HSCROLL_PREVIOUS_BUTTON: 419,
      HSCROLL_NEXT_BUTTON: 420,
      WORK_GALAHAD_TAB_MEETING: 421,
      WORK_GALAHAD_LIST_SEE_FIRST_GROUPS: 422,
      AR_ADS_CTA: 423,
      PBIA_PROFILE: 424,
      PRODUCT_TAG: 425,
      WAM_ENTRY_POINT: 426,
      WORK_GALAHAD_TAB_CALL: 427,
      WORK_GALAHAD_TAB_FILES: 428,
      VIEW_PRODUCTS: 429,
      USER_TAG: 430,
      VIDEO_VIEWER_LIST: 431,
      PRODUCT_DETAIL_PAGE: 432,
      SHOPPING_SHEET_BUTTON: 433,
      WORK_TEAMWORK_TAB_SEARCH: 434,
      WORK_TEAMWORK_TAB_EXPLORE: 435,
      WORK_GALAHAD_TAB_TOOLS: 436,
      WORK_GALAHAD_TAB_VC: 437,
      INSTAGRAM_EXPLORE: 438,
      REMINDER_AD_CTA_BUTTON: 439,
      CTC_POST_CLICK_CTA: 440,
      KNOWLEDGE_NOTE: 441,
      WORKPLATFORM_TAB: 443,
      FB_SHOPS_PRODUCT: 444,
      FB_SHOPS_FOOTER: 445,
      WORK_GARDEN_TAB_HOME: 446,
      KNOWLEDGE_COLLECTION: 447,
      COMMUNITY_VIEW_INLINE: 448,
      MORE_VIDEOS_ON_WATCH: 449,
      VIDEO_AD_VIEWER: 450,
      BUSINESS_CONTACT_THIRD_PARTY: 451,
      BUSINESS_CONTACT_PHONE: 452,
      BUSINESS_CONTACT_MESSAGE: 453,
      BUSINESS_CONTACT_WEBSITE: 454,
      BUSINESS_CONTACT_WHATSAPP: 455,
      BUSINESS_IMAGE: 460,
      FACEBOOK_REELS_LIKE_BS_FLOATING_CTA: 461,
      FACEBOOK_REELS_COMMENT_BS_FLOATING_CTA: 462,
      FACEBOOK_REELS_PROFILE_FLOATING_CTA: 463,
      FACEBOOK_GENERIC_FLOATING_CTA: 464,
      FACEBOOK_GENERIC_FLOATING_CTA_COMMENT: 527,
      FACEBOOK_GENERIC_FLOATING_CTA_PERMALINK: 535,
      WORK_GALAHAD_TAB_WATCH: 465,
      IG_STORY_SHOWCASE_ADS_CLICK: 466,
      FACEBOOK_REELS_POST_LOOP_CONTEXT_CARD_CLICK: 467,
      FACEBOOK_REELS_POST_LOOP_DEFERRED_CARD_CLICK: 468,
      COLLECTION_PRODUCT_TILE: 469,
      WORKPLACE_EMBED_HEADER: 470,
      WORKPLACE_EMBED_UFI: 471,
      WORKPLACE_EMBED_COMMENT_CTA: 472,
      INLINE_COMMENT: 473,
      STICKER_ADS_CTA_BUTTON: 474,
      STICKER_ADS_TOOLTIP: 475,
      STICKER_ADS_PROFILE_NAME: 476,
      FB_NOTE: 477,
      WORKPLACE_KNOWLEDGE_LIBRARY: 478,
      SHOP_TILE: 479,
      WORK_GALAHAD_TAB_SHIFTS: 480,
      FACEBOOK_REELS: 482,
      FACEBOOK_REELS_BANNER_ADS_CLICK: 483,
      WORKSTREAM: 484,
      EXPLORE_GRID_ADS_CTA_BUTTON: 485,
      EXPLORE_GRID_ADS_PROFILE_NAME: 486,
      FACEBOOK_REELS_BANNER_ADS_CLICK_PROFILE: 487,
      COMMERCE_BUY_SELL_GROUPS_STORY_ATTACHMENT: 488,
      COMMERCE_BUY_SELL_GROUPS_STORY_ATTACHMENT_MESSAGE_CTA: 489,
      COMMERCE_BUY_SELL_GROUPS_GROUP_MALL_SELL_PILL: 490,
      COMMERCE_MARKETPLACE_SELLING_CREATE_LISTING: 491,
      COMMERCE_MARKETPLACE_CREATE_LISTING_DROPDOWN: 492,
      COMMERCE_MARKETPLACE_YOUR_COMMERCE_PROFILE: 493,
      COMMERCE_MARKETPLACE_FEED_CARD: 494,
      COMMERCE_BUY_SELL_GROUPS_GROUP_MALL_COMPOSER: 496,
      COMMERCE_MARKETPLACE_EDIT_LISTING_DROPDOWN: 497,
      COMMERCE_MARKETPLACE_YOUR_LISTING_EDIT_BUTTON: 498,
      COMMERCE_MARKETPLACE_DELETE_LISTING_DROPDOWN: 499,
      COMMERCE_BUY_SELL_GROUPS_YOUR_ITEMS_TAB: 501,
      COMMERCE_BUY_SELL_GROUPS_YOUR_ITEMS_TAB_AVAILABLE_LISTING: 502,
      COMMERCE_MARKETPLACE_YOUR_LISTING_DELETE_BUTTON: 503,
      COMMERCE_MARKETPLACE_SELL_HUB: 506,
      COMMERCE_BUY_SELL_GROUPS_GROUP_MALL_YOUR_LISTINGS_PLINK: 507,
      COMMERCE_MARKETPLACE_YOU_SURFACE_SELLING_SECTION: 511,
      COMMERCE_MARKETPLACE_SELLING_ACTIVITY_MODULE: 512,
      COMMERCE_MARKETPLACE_SURFACE_HIGHLIGHTS_MODULE: 513,
      COMMERCE_YOU_SURFACE_COMMERCE_PROFILE: 514,
      COMMERCE_BUY_SELL_GROUPS_PDP_ACTION_BAR: 515,
      COMMERCE_MARKETPLACE_LIST_IN_MORE_PLACES_CTA: 516,
      COMMERCE_MARKETPLACE_UNIFIED_SEE_POSTS_ACTION_CTA: 517,
      COMMERCE_MARKETPLACE_SELLER_LISTING_NOTICE: 518,
      COMMERCE_MARKETPLACE_BUYER_SELLER_FLYWHEEL: 519,
      COMMERCE_MARKETPLACE_MANAGE_YOUR_LISTINGS_FEED_UNIT: 520,
      COMMERCE_MARKETPLACE_ACTIVE_LISTINGS_FEED_UNIT: 521,
      COMMERCE_MARKETPLACE_BAN_WARNING_BOTTOMSHEET: 522,
      COMMERCE_MARKETPLACE_COMMERCE_PROFILE_FEED_CARD: 523,
      COMMERCE_SHOPS__NAVIGATION_BAR__CART_BUTTON: 600,
      COMMERCE_SHOPS__NAVIGATION_BAR__STOREFRONT_ENTRY: 601,
      FACEBOOK_REELS_ADS_END_SCENE: 495,
      SAVES_LIST_CELL: 500,
      CONTEXTUAL_TRAY: 504,
      CONTEXTUAL_TRAY_CARD: 505,
      WORK_GALAHAD_TAB_CONTENT_MANAGER: 508,
      PLINK: 509,
      KNOWLEDGE_BUNDLE: 510,
      PAPER_DOCUMENT_CASE: 524,
      ADS_PRODUCT_PAGE: 525,
      ADS_TEXT_OVERLAY: 526,
      FACEBOOK_REELS_H_SCROLL: 528,
      CONTEXTUAL_FEED_PROFILE: 529,
      CONTEXTUAL_FEED_SEARCH: 530,
      SEARCH_GRID_ADS_CTA_BUTTON: 531,
      SEARCH_GRID_ADS_PROFILE_NAME: 532,
      WHATSAPP_CTA_BUTTON_IN_IAB: 533,
      TOOLTIP_CTA: 534,
      FACEBOOK_REELS_MULTI_CARD_END_CARD: 536,
      FACEBOOK_REELS_ADS_SWIPE_LEFT: 537,
      AD_EXTENSIONS_CARD: 41,
      COLLECTION_TILE: 538,
      COLLECTION_HSCROLL_TILE: 539,
      HIDE_AD: 540,
      REPORT_AD: 541,
      WAIST_AD: 542,
      BOTTOM_SHEET: 543,
    });
    f["default"] = a;
  },
  66
);
__d(
  "encodeTrackingNode",
  ["TrackingNodeConstants"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      var c = function (a) {
          return Math.pow(d("TrackingNodeConstants").BASE_CODE_SIZE, a);
        },
        e = function (a, b) {
          var c = "";
          a = a;
          b = b;
          while (b > 0) {
            var e = a % d("TrackingNodeConstants").BASE_CODE_SIZE;
            c =
              String.fromCharCode(
                d("TrackingNodeConstants").BASE_CODE_START + e
              ) + c;
            a = parseInt(a / d("TrackingNodeConstants").BASE_CODE_SIZE, 10);
            b -= 1;
          }
          return c;
        },
        f = function (a) {
          a =
            a -
            d("TrackingNodeConstants").TOTAL_IDS_SUPPORTED_BY_LEGACY_ENCODING -
            1;
          if (a < c(2))
            return (
              String.fromCharCode(
                d("TrackingNodeConstants")
                  .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE
              ) + e(a, 2)
            );
          a -= c(2);
          return (
            String.fromCharCode(
              d("TrackingNodeConstants")
                .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE
            ) + e(a, 3)
          );
        },
        g = (a - 1) % d("TrackingNodeConstants").BASE_CODE_SIZE,
        h = parseInt((a - 1) / d("TrackingNodeConstants").BASE_CODE_SIZE, 10);
      if (
        a < 1 ||
        a >
          (d("TrackingNodeConstants").PREFIX_CODE_SIZE + 1) *
            d("TrackingNodeConstants").BASE_CODE_SIZE +
            Math.pow(d("TrackingNodeConstants").BASE_CODE_SIZE, 2) +
            Math.pow(d("TrackingNodeConstants").BASE_CODE_SIZE, 3)
      )
        throw Error("Invalid tracking node: " + a);
      var i = "";
      h > d("TrackingNodeConstants").PREFIX_CODE_SIZE
        ? (i += f(a))
        : (h > 0 &&
            (i += String.fromCharCode(
              h - 1 + d("TrackingNodeConstants").PREFIX_CODE_START
            )),
          (i += String.fromCharCode(
            g + d("TrackingNodeConstants").BASE_CODE_START
          )));
      b !== void 0 &&
        b > 0 &&
        (b > 10 && (i += "#"),
        (i += parseInt(
          Math.min(b, d("TrackingNodeConstants").ENCODE_NUMBER_MAX) - 1,
          10
        )));
      return i;
    }
    g["default"] = a;
  },
  98
);
__d(
  "TrackingNodes",
  [
    "DataAttributeUtils",
    "TrackingNodeConstants",
    "TrackingNodeTypes",
    "decodeTrackingNode",
    "encodeTrackingNode",
    "react",
  ],
  function (a, b, c, d, e, f, g) {
    c("react");
    var h = {
      types: c("TrackingNodeTypes"),
      BASE_CODE_START: d("TrackingNodeConstants").BASE_CODE_START,
      BASE_CODE_END: d("TrackingNodeConstants").BASE_CODE_END,
      BASE_CODE_SIZE: d("TrackingNodeConstants").BASE_CODE_SIZE,
      PREFIX_CODE_START: d("TrackingNodeConstants").PREFIX_CODE_START,
      PREFIX_CODE_END: d("TrackingNodeConstants").PREFIX_CODE_END,
      PREFIX_CODE_SIZE: d("TrackingNodeConstants").PREFIX_CODE_SIZE,
      ENCODE_NUMBER_MAX: d("TrackingNodeConstants").ENCODE_NUMBER_MAX,
      ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE: d("TrackingNodeConstants")
        .ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
      ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE: d("TrackingNodeConstants")
        .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
      TN_URL_PARAM: d("TrackingNodeConstants").TN_URL_PARAM,
      encodeTN: c("encodeTrackingNode"),
      decodeTN: c("decodeTrackingNode"),
      parseTrackingNodeString: function (a) {
        var b = [];
        while (a.length > 0) {
          var c = h.decodeTN(a);
          if (c.length == 1) return [];
          b.push(c[1]);
          a = a.substring(c[0]);
        }
        return b;
      },
      getTrackingInfo: function (a, b) {
        return '{"tn":"' + h.encodeTN(a, b).replace("\\", "\\\\") + '"}';
      },
      addDataAttribute: function (a, b, d) {
        if (b === void 0) return;
        ["data-ft", "data-gt"].forEach(function (e) {
          var f;
          if (a.getAttribute)
            f = c("DataAttributeUtils").getDataAttribute(a, e) || "{}";
          else if (a.props) f = a.props[e] || "{}";
          else return;
          var g = h.encodeTN(b, d);
          try {
            f = JSON.parse(f);
            if (f.tn && f.tn === g) return;
            f.tn = g;
            if (a.setAttribute) a.setAttribute(e, JSON.stringify(f));
            else if (a.props) a.props[e] = JSON.stringify(f);
            else return;
          } catch (a) {}
        });
      },
    };
    f.exports = h;
  },
  34
);
__d(
  "CommercialBreakCallToActionAttachment.react",
  ["cx", "TrackingNodes", "XUIText.react", "react"],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        if (
          !this.props.link ||
          (!this.props.linkCaption && !this.props.linkTitle)
        )
          return null;
        var a = c("TrackingNodes").getTrackingInfo(
          c("TrackingNodes").types.INSTREAM_CALL_TO_ACTION_ATTACHMENT
        );
        return i.jsxs("div", {
          className: "_1y4d",
          "data-ft": a,
          children: [
            i.jsx(c("XUIText.react"), {
              className: "_1y4e",
              children: this.props.linkTitle,
            }),
            i.jsx(c("XUIText.react"), {
              className: "_1y4g",
              style: {
                paddingTop: this.props.linkTitle ? "12px" : "0px",
                display: this.props.linkCaption ? "inherit" : "none",
              },
              children: this.props.linkCaption,
            }),
            i.jsx("a", {
              className: "_275_",
              href: this.props.link,
              target: "_blank",
              onClick: this.props.onClick,
            }),
          ],
        });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "ServerHTML.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    var h = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b, c;
        for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
          e[f] = arguments[f];
        return (
          ((b = c = a.call.apply(a, [this].concat(e)) || this),
          (c.elementRef = h.createRef()),
          b) || babelHelpers.assertThisInitialized(c)
        );
      }
      var c = b.prototype;
      c.render = function () {
        var a = this.props,
          b = a.blob;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["blob"]);
        return typeof b === "string"
          ? h.jsx(
              "div",
              babelHelpers["extends"]({}, a, {
                ref: this.elementRef,
                children: b,
              })
            )
          : h.jsx(
              "div",
              babelHelpers["extends"]({}, a, {
                ref: this.elementRef,
                dangerouslySetInnerHTML: b,
              })
            );
      };
      return b;
    })(h.Component);
    g["default"] = a;
  },
  98
);
__d(
  "CommercialBreakCallToActionButton.react",
  [
    "cx",
    "SUIBusinessTheme",
    "SUIButton.react",
    "ServerHTML.react",
    "TrackingNodes",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        if (this.props.callToActionType === "NO_BUTTON") return null;
        var a = c("TrackingNodes").getTrackingInfo(
          c("TrackingNodes").types.INSTREAM_CALL_TO_ACTION_BUTTON
        );
        switch (this.props.buttonLocation) {
          case "inline":
            return i.jsx("a", {
              onClick: this.props.onClick,
              href: this.props.link,
              "data-ft": a,
              target: "_blank",
              children: i.jsx(c("ServerHTML.react"), {
                blob: this.props.callToActionText,
                className: "_44mp",
              }),
            });
          case "context_card":
            return i.jsx(c("SUIButton.react"), {
              label: i.jsx(c("ServerHTML.react"), {
                blob: this.props.callToActionText,
              }),
              href: { url: this.props.link },
              target: "_blank",
              "data-ft": a,
              theme: c("SUIBusinessTheme"),
              onClick: this.props.onClick,
            });
          default:
            return null;
        }
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "CommercialBreakContextCard.react",
  [
    "cx",
    "fbt",
    "ix",
    "AsyncRequest",
    "CenteredContainer.react",
    "CommercialBreakCallToActionAttachment.react",
    "CommercialBreakCallToActionButton.react",
    "CommercialBreakUtil",
    "Image.react",
    "LayerFadeOnHide",
    "PopoverAsyncMenu.react",
    "RoundImage.react",
    "XBasicFBNuxDismissController",
    "XBasicFBNuxViewController",
    "XUIAmbientNUX.react",
    "XUIDialog.react",
    "XUIDialogBody.react",
    "XUIDialogFooter.react",
    "XUIDialogOkayButton.react",
    "XUIDialogTitle.react",
    "XUIText.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i, j) {
    var k = d("react");
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        var b;
        b = a.call(this) || this;
        b.state = { inforCardShown: !1, infoCardNuxShown: !1 };
        b.$15 = function () {
          if (b.props.infoCardNuxID) {
            var a = c("XBasicFBNuxDismissController")
              .getURIBuilder()
              .setInt("nux_id", b.props.infoCardNuxID)
              .getURI();
            new (c("AsyncRequest"))().setURI(a).send();
          }
          b.setState({ infoCardNuxShown: !1 });
        };
        b.$1 = null;
        b.$2 = null;
        b.$3 = !1;
        return b;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.$2 ||
          (this.$2 = this.props.hostVPC.addListener(
            "commercialBreak/showUFI",
            this.$4.bind(this)
          )),
          this.props.infoCardNuxID &&
            !this.state.infoCardNuxShown &&
            this.setState({ infoCardNuxShown: !0 });
      };
      e.componentWillUnmount = function () {
        this.$2 && this.$2.remove(), (this.$2 = null);
      };
      e.render = function () {
        return k.jsxs("div", {
          className: "_36l3",
          children: [this.$5(), this.$6()],
        });
      };
      e.$5 = function () {
        return this.props.callToAction &&
          this.props.config.isDREnabled &&
          this.props.config.sponsorLocation !== "context_card"
          ? null
          : k.jsxs("div", {
              className: "_1y8j",
              children: [
                k.jsx("div", {
                  className: "_1y8k",
                  children: k.jsx("a", {
                    href: this.props.profileLink,
                    target: "_blank",
                    onClick: this.$7.bind(this),
                    children: k.jsx(c("Image.react"), {
                      style: { display: "block" },
                      height: "40",
                      width: "40",
                      src: this.props.profilePicURI,
                    }),
                  }),
                }),
                k.jsx("div", {
                  className: "_1y8n",
                  children: k.jsxs("div", {
                    className: "_1y8v",
                    children: [
                      k.jsx("div", {
                        className: "_1y8w",
                        children: k.jsx("a", {
                          href: this.props.profileLink,
                          target: "_blank",
                          onClick: this.$7.bind(this),
                          children: this.props.profileName,
                        }),
                      }),
                      k.jsx("div", {
                        className: "_1y8x",
                        children: i._("Sponsored"),
                      }),
                    ],
                  }),
                }),
                k.jsxs("div", {
                  className: "_2n2q",
                  children: [this.$8(), this.$9(), this.$10()],
                }),
              ],
            });
      };
      e.$9 = function () {
        if (
          !this.props.hostVideoOwnerPageProfileName ||
          !this.props.hostVideoOwnerPageProfileImageURI
        )
          return null;
        return this.props.hostVPC.getSource() === "tahoe" ||
          (this.props.config.isDREnabled &&
            this.props.callToAction &&
            this.props.config.ctaButtonLocation === "context_card")
          ? null
          : k.jsxs("div", {
              className: "_1z7o",
              role: "presentation",
              onClick: this.$11.bind(this),
              ref: "infoButton",
              children: [
                this.$12(),
                this.$13(),
                k.jsx(c("Image.react"), { src: j("124739") }),
              ],
            });
      };
      e.$11 = function () {
        this.setState({ inforCardShown: !0, infoCardNuxShown: !1 }),
          d("CommercialBreakUtil").logMarauderEvent(
            this.props.hostVPC,
            "commercial_break_context_card_info_button_click"
          );
      };
      e.$7 = function () {
        d("CommercialBreakUtil").logMarauderEvent(
          this.props.hostVPC,
          "commercial_break_click",
          { ad_break_click_source: "PROFILE" }
        );
      };
      e.$14 = function () {
        this.setState({ inforCardShown: !1 });
      };
      e.$12 = function () {
        return k.jsxs(c("XUIDialog.react"), {
          behaviors: { LayerFadeOnHide: c("LayerFadeOnHide") },
          isStrictlyControlled: !0,
          shown: this.state.inforCardShown,
          onHide: this.$14.bind(this),
          width: 400,
          children: [
            k.jsx(c("XUIDialogTitle.react"), {
              children: k.jsx(c("XUIText.react"), {
                weight: "bold",
                children: i._("Why you're seeing ads in videos"),
              }),
            }),
            k.jsx(c("XUIDialogBody.react"), {
              children: k.jsxs(c("CenteredContainer.react"), {
                children: [
                  k.jsx("div", {
                    className: "_1z7p",
                    children: k.jsx(c("RoundImage.react"), {
                      src: this.props.hostVideoOwnerPageProfileImageURI,
                      width: 56,
                      height: 56,
                    }),
                  }),
                  k.jsx("div", {
                    className: "_1z7q",
                    children: i._(
                      "{profile_name} paused their video for an in-stream ad. In-stream ads are a way for video creators to earn money on Facebook.",
                      [
                        i._param(
                          "profile_name",
                          k.jsx("strong", {
                            children: this.props.hostVideoOwnerPageProfileName,
                          })
                        ),
                      ]
                    ),
                  }),
                ],
              }),
            }),
            k.jsx(c("XUIDialogFooter.react"), {
              children: k.jsx(c("XUIDialogOkayButton.react"), {
                use: "confirm",
                action: "cancel",
              }),
            }),
          ],
        });
      };
      e.$13 = function () {
        var a = this;
        if (!this.props.infoCardNuxID) return null;
        if (this.state.infoCardNuxShown && !this.$3) {
          var b = c("XBasicFBNuxViewController")
            .getURIBuilder()
            .setInt("nux_id", this.props.infoCardNuxID)
            .getURI();
          new (c("AsyncRequest"))().setURI(b).send();
          this.$3 = !0;
        }
        return k.jsx(c("XUIAmbientNUX.react"), {
          contextRef: function () {
            return a.refs.infoButton;
          },
          shown: this.state.infoCardNuxShown,
          position: "below",
          width: "auto",
          alignment: "right",
          onCloseButtonClick: this.$15,
          children: i._("About ads in videos"),
        });
      };
      e.$10 = function () {
        var a = this;
        if (
          !this.props.chevronButtonID ||
          !this.props.instreamVideoOptionMenuURI
        )
          return null;
        return this.props.hostVPC.getSource() === "tahoe" ||
          (this.props.config.isDREnabled &&
            this.props.callToAction &&
            this.props.config.ctaButtonLocation === "context_card")
          ? null
          : k.jsx("div", {
              className: "_1cx5",
              children: k.jsx(c("PopoverAsyncMenu.react"), {
                alignh: "center",
                alignv: "bottom",
                position: "above",
                endpoint: this.props.instreamVideoOptionMenuURI,
                id: this.props.chevronButtonID,
                layerBehaviors: [],
                ref: function (b) {
                  a.$1 = b;
                },
                children: k.jsx(c("Image.react"), { src: j("123796") }),
              }),
            });
      };
      e.$8 = function () {
        var a = this.props.callToAction;
        return !this.props.config.isDREnabled ||
          !a ||
          this.props.config.ctaButtonLocation !== "context_card"
          ? null
          : k.jsx("div", {
              className: "_11_p",
              children: k.jsx(c("CommercialBreakCallToActionButton.react"), {
                buttonLocation: this.props.config.ctaButtonLocation,
                callToActionType: a.ctaType,
                callToActionText: a.ctaFbt,
                link: a.link,
                onClick: this.$16.bind(this),
              }),
            });
      };
      e.$16 = function () {
        d("CommercialBreakUtil").logMarauderEvent(
          this.props.hostVPC,
          "commercial_break_click",
          { ad_break_click_source: "CALL_TO_ACTION_BUTTON" }
        ),
          this.props.hostVPC.emit("commercialBreak/CTAClicked");
      };
      e.$6 = function () {
        var a = this.props.callToAction;
        return !this.props.config.isDREnabled || !a
          ? null
          : k.jsx(c("CommercialBreakCallToActionAttachment.react"), {
              link: a.link,
              linkTitle: a.linkTitle,
              linkCaption: a.linkCaption,
              onClick: this.$17.bind(this),
            });
      };
      e.$17 = function () {
        d("CommercialBreakUtil").logMarauderEvent(
          this.props.hostVPC,
          "commercial_break_click",
          { ad_break_click_source: "SPONSOR_CONTEXT_CARD" }
        ),
          this.props.hostVPC.emit("commercialBreak/CTAClicked");
      };
      e.$4 = function () {
        this.$1 && this.$1.hidePopover();
      };
      return b;
    })(k.Component);
    g["default"] = a;
  },
  98
);
__d(
  "InstreamPlacement",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      PRE_ROLL: "pre_roll",
      MID_ROLL: "mid_roll",
      POST_ROLL: "post_roll",
      NON_INTERRUPTIVE: "non_interruptive",
      DOWNSTREAM: "downstream",
      OVERLAY: "overlay",
    });
    f["default"] = a;
  },
  66
);
__d(
  "VideoInstreamRealtimeWatchTimeCounter",
  [],
  function (a, b, c, d, e, f) {
    var g = 0;
    a = (function () {
      function a(a) {
        a = a.videoPlayerController;
        this.$1 = 0;
        this.$2 = a;
        this.$3();
      }
      var b = a.prototype;
      b.$3 = function () {
        this.$2.addListener("beginPlayback", this.$4.bind(this)),
          this.$2.addListener("pausePlayback", this.$5.bind(this));
      };
      b.$4 = function () {
        this.$1 === 0 && (this.$1 = Date.now());
      };
      b.$5 = function () {
        this.$1 > 0 && (g += Date.now() - this.$1), (this.$1 = 0);
      };
      a.resetWatchTimeMs = function () {
        g = 0;
      };
      return a;
    })();
    f["default"] = a;
  },
  66
);
__d(
  "InstreamVideoAdsController",
  [
    "CommercialBreakShouldLogMarauderEvent",
    "DOMQuery",
    "DataAttributeUtils",
    "DateConsts",
    "FBLogger",
    "MarauderLogger",
    "NonBlockingIFrame",
    "ODS",
    "URI",
    "VideoInstreamRealtimeWatchTimeCounter",
    "ViewableImpressionConfig",
  ],
  function (a, b, c, d, e, f, g) {
    var h = null,
      i = new Set();
    a = (function () {
      function a() {
        this.$1 = new Map();
      }
      var b = a.prototype;
      b.$2 = function (a) {
        var b = [];
        this.$1.forEach(function (c, e) {
          !e.isState("destroyed") &&
            d("DOMQuery").contains(a, e.getRootNode()) &&
            b.push(e);
        });
        return b.length === 0 ? null : b[0];
      };
      b.$3 = function (a, b) {
        if (this.$1.has(a)) return;
        this.$1.set(a, b);
      };
      a.registerVideoController = function (b, e) {
        h === null && (h = new a());
        h.$3(b, e);
        d("MarauderLogger").log(
          "commercial_break_register_video",
          "commercial_break",
          { commercial_break_ad_client_token: b.getAdClientToken() }
        );
        var f = h;
        b.once("beginPlayback", function () {
          f.$4(b),
            c("VideoInstreamRealtimeWatchTimeCounter").resetWatchTimeMs();
        });
      };
      b.$4 = function (a) {
        var b = this.$1.get(a);
        if (d("DOMQuery").contains(b, a.getRootNode())) {
          a = c("DataAttributeUtils").getDataAttribute(b, "data-xt");
          b = Math.floor(Date.now() / d("DateConsts").MS_PER_SEC);
          a = { xt: a, isv: 1, cts: b };
          try {
            d("NonBlockingIFrame").loadIFrame(
              new (c("URI"))(c("ViewableImpressionConfig").impressionURL)
                .addQueryData(a)
                .toString()
            );
          } catch (a) {
            c("FBLogger")("instream_ads")
              .catching(a)
              .warn("Failed to log instream ads impression on web");
            d("ODS").bumpEntityKey(
              2966,
              "instreamads",
              "impression_logging_exception"
            );
            return;
          }
          d("ODS").bumpEntityKey(
            2966,
            "instreamads",
            "impression_logging_succeed"
          );
        }
      };
      a.logNonInterruptiveUIEvent = function (a, b, e) {
        e === void 0 && (e = {});
        if (
          !(
            Object.prototype.hasOwnProperty.call(
              c("CommercialBreakShouldLogMarauderEvent"),
              a
            ) && c("CommercialBreakShouldLogMarauderEvent")[a]
          )
        )
          return;
        d("MarauderLogger").log(
          a,
          "commercial_break",
          babelHelpers["extends"](
            {
              xt: b.xt,
              instream_placement: b.instreamPlacement,
              ad_break_index: b.instreamVideoAdBreakIndex,
              commercial_break_ad_client_token:
                b.instreamVideoAdBreakClientToken,
            },
            e
          )
        );
      };
      a.logNonInterruptiveAdImpression = function (a) {
        a = a.xt;
        if (i.has(a)) return;
        var b = Math.floor(Date.now() / d("DateConsts").MS_PER_SEC);
        b = { xt: a, isv: 1, cts: b };
        d("NonBlockingIFrame").loadIFrame(
          new (c("URI"))(c("ViewableImpressionConfig").impressionURL)
            .addQueryData(b)
            .toString()
        );
        i.add(a);
      };
      a.findVideoControllerForStory = function (a) {
        return h === null ? null : h.$2(a);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
__d(
  "NonInterruptiveAdHeader.react",
  [
    "cx",
    "ix",
    "BUIText.react",
    "Image.react",
    "PopoverAsyncMenu.react",
    "gkx",
    "react",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    function k(a) {
      return j.jsxs("div", {
        className: "_6yiz",
        children: [
          j.jsx(c("BUIText.react"), {
            size: "header4",
            weight: "bold",
            children: "Ads in this video",
          }),
          j.jsx(m, babelHelpers["extends"]({}, a)),
        ],
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    function l(a) {
      var b = a.nonInterruptiveAd;
      return j.jsxs("div", {
        className: "_6yiz",
        onClick: a.onClick,
        children: [
          j.jsx("div", {
            className: "_6yi_",
            children: j.jsx("a", {
              href: b.profileLink,
              target: "_blank",
              children: j.jsx(c("Image.react"), {
                style: { display: "block", borderRadius: "50%" },
                height: "40",
                width: "40",
                src: b.profilePicURI,
              }),
            }),
          }),
          j.jsxs("div", {
            className: "_6yj0",
            children: [
              j.jsx("div", {
                className: "_6_uo",
                children: j.jsx(c("BUIText.react"), {
                  size: "header4",
                  weight: "bold",
                  children: j.jsx("a", {
                    href: b.profileLink,
                    target: "_blank",
                    children: b.profileName,
                  }),
                }),
              }),
              j.jsx("div", {
                children: j.jsx(c("BUIText.react"), {
                  size: "body3",
                  color: "placeholder",
                  children: "Sponsored",
                }),
              }),
            ],
          }),
          j.jsx(m, babelHelpers["extends"]({}, a)),
        ],
      });
    }
    l.displayName = l.name + " [from " + f.id + "]";
    function m(a) {
      return j.jsxs("div", {
        className: "_6yj4",
        children: [
          a.isCollapsed || a.instreamVideoOptionMenuURI === null
            ? null
            : c("gkx")("1007029")
            ? j.jsx("div", {
                className: "_6yj5",
                children: j.jsx(c("PopoverAsyncMenu.react"), {
                  alignh: "center",
                  alignv: "bottom",
                  position: "above",
                  endpoint: a.instreamVideoOptionMenuURI,
                  id: a.chevronButtonID,
                  layerBehaviors: [],
                  children: j.jsx(c("Image.react"), { src: i("516422") }),
                }),
              })
            : j.jsx("div", {
                className: "_6yj5",
                children: j.jsx(c("Image.react"), { src: i("516422") }),
              }),
          j.jsx("div", {
            className: "_6yj6",
            onClick: a.onChevronButtonClicked,
            role: "presentation",
            children: j.jsx(c("Image.react"), {
              src: a.isCollapsed ? i("687232") : i("687239"),
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + f.id + "]";
    function a(a) {
      return a.isCollapsed
        ? j.jsx(k, babelHelpers["extends"]({}, a))
        : j.jsx(l, babelHelpers["extends"]({}, a));
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "VideoWithNonInterruptiveAd.react",
  [
    "cx",
    "BUIText.react",
    "ElementVisibilityTracking",
    "Image.react",
    "InstreamVideoAdsController",
    "LineClamp.react",
    "NonInterruptiveAdHeader.react",
    "ServerHTML.react",
    "SubscriptionsHandler",
    "react",
    "setTimeout",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
      j = 1e3;
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b) {
        var d;
        d = a.call(this, b) || this;
        d.$3 = i.createRef();
        d.$4 = i.createRef();
        d.state = {
          isCollapsed: !1,
          entranceAnimationTriggered: !1,
          shouldShowAd: !1,
          isViewable: !1,
          nonInterruptiveAd: null,
          adHeight: null,
          containerHeight: null,
          shouldUnhide: !1,
        };
        d.$2 = new (c("SubscriptionsHandler"))();
        d.$2.addSubscriptions(
          d.props.videoWithCommercialBreak.addListener(
            "nonInterruptiveAd/showNonInterruptiveAd",
            function (a) {
              var b =
                d.props.videoWithCommercialBreak.getNonInterruptiveStatus();
              d.setState({
                isCollapsed: b.isEnable == !0 ? b.isNICollapse : !1,
                shouldShowAd: !0,
                nonInterruptiveAd: a,
              });
            }
          ),
          d.props.videoWithCommercialBreak.addListener(
            "nonInterruptiveAd/hideNonInterruptiveAd",
            function () {
              d.setState({
                shouldShowAd: !1,
                entranceAnimationTriggered: !1,
                adHeight: null,
                containerHeight: null,
              });
            }
          ),
          d.props.videoWithCommercialBreak.addListener(
            "nonInterruptiveAd/unhide",
            function () {
              d.setState({ shouldUnhide: !0 });
            }
          )
        );
        return d;
      }
      var d = b.prototype;
      d.componentDidUpdate = function () {
        var a = this,
          b = this.$3.current,
          d = this.$4.current;
        ((this.state.adHeight == null &&
          this.state.containerHeight == null &&
          this.state.nonInterruptiveAd != null &&
          this.state.shouldShowAd &&
          !this.props.videoWithCommercialBreak.getIsNIPreloadedAndHide()) ||
          this.state.shouldUnhide == !0) &&
          b &&
          d &&
          this.setState(
            {
              adHeight: b.clientHeight,
              containerHeight: d.clientHeight,
              shouldUnhide: !1,
            },
            function () {
              c("setTimeout")(function () {
                a.setState({ entranceAnimationTriggered: !0 }, function () {
                  (a.$1 = new (c("ElementVisibilityTracking"))({
                    minVisibleHeight: 1,
                    resizeThrottlingInterval: j,
                    scrollThrottlingInterval: j,
                    element: d,
                    onEnterViewport: a.$5.bind(a),
                    onLeaveViewport: a.$6.bind(a),
                  })),
                    a.$1.init();
                });
              }, 0);
            }
          );
      };
      d.componentWillUnmount = function () {
        this.props.videoWithCommercialBreak.updateNIStatus({
          NISourceState: null,
        }),
          this.$1 && this.$1.removeListeners(),
          this.$2.release();
      };
      d.$7 = function () {
        if (this.state.containerHeight == null) return "initial";
        else if (this.state.entranceAnimationTriggered)
          return this.state.containerHeight + "px";
        else return "0";
      };
      d.$8 = function () {
        if (this.state.isCollapsed) return "0";
        else if (this.state.adHeight == null) return "initial";
        else return this.state.adHeight + "px";
      };
      d.$9 = function () {
        var a = this,
          b = this.state.nonInterruptiveAd;
        if (!b) return null;
        var d = b.ctaButton,
          e = b.ctaAttachment;
        return i.jsx("div", {
          className: "_6-gf",
          style: { height: this.$8() },
          children: i.jsxs("div", {
            className: "_6yj7",
            ref: this.$3,
            children: [
              e != null
                ? i.jsx("div", {
                    children: i.jsx(c("ServerHTML.react"), {
                      blob: e,
                      onClick: function (b) {
                        a.$10("LINK_CONTEXT_CARD");
                      },
                    }),
                  })
                : null,
              i.jsx("div", {
                className: "_6yj8",
                children: i.jsx(c("Image.react"), {
                  src: b.imageURL,
                  height: "102",
                  width: "auto",
                  style: { borderRadius: "4px" },
                }),
              }),
              i.jsxs("div", {
                className: "_6yj9",
                children: [
                  i.jsx("div", {
                    className: "_6yja",
                    children: i.jsx(c("BUIText.react"), {
                      size: "header4",
                      weight: "bold",
                      children: i.jsx(c("LineClamp.react"), {
                        lines: 1,
                        children: b.callToActionLinkTitle,
                      }),
                    }),
                  }),
                  i.jsx("div", {
                    className: "_6yjb",
                    children: i.jsx(c("BUIText.react"), {
                      size: "body1",
                      color: "secondary",
                      children: i.jsx(c("LineClamp.react"), {
                        lines: 2,
                        children: b.message,
                      }),
                    }),
                  }),
                  d != null
                    ? i.jsx("div", {
                        children: i.jsx(c("ServerHTML.react"), {
                          blob: d,
                          onClick: function (b) {
                            a.$10("CALL_TO_ACTION_BUTTON");
                          },
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      };
      d.render = function () {
        var a = this;
        return !this.state.shouldShowAd
          ? null
          : i.jsx("div", {
              className: "_6y6q",
              ref: this.$4,
              style: { height: this.$7() },
              children: this.state.nonInterruptiveAd
                ? i.jsxs("div", {
                    children: [
                      i.jsx(c("NonInterruptiveAdHeader.react"), {
                        isCollapsed: this.state.isCollapsed,
                        nonInterruptiveAd: this.state.nonInterruptiveAd,
                        onChevronButtonClicked: this.$11.bind(this),
                        chevronButtonID:
                          this.props.videoWithCommercialBreak.getChevronButtonID(),
                        instreamVideoOptionMenuURI:
                          this.props.videoWithCommercialBreak.getInstreamVideoOptionMenuURI(),
                        onClick: function () {
                          a.$10("PROFILE");
                        },
                      }),
                      this.$9(),
                      i.jsx("div", { className: "_89nq _89nr" }),
                    ],
                  })
                : null,
            });
      };
      d.$11 = function (a) {
        var b = this,
          d = this.state.nonInterruptiveAd;
        if (!d) return;
        a.stopPropagation();
        this.setState(function (a) {
          var e = a.adHeight;
          e === 0 && b.$3.current && (e = b.$3.current.clientHeight);
          a.isCollapsed
            ? c("InstreamVideoAdsController").logNonInterruptiveUIEvent(
                "commercial_break_non_interruptive_expanded",
                d
              )
            : c("InstreamVideoAdsController").logNonInterruptiveUIEvent(
                "commercial_break_non_interruptive_collapsed",
                d
              );
          b.props.videoWithCommercialBreak.updateNIStatus({
            isNICollapse: !a.isCollapsed,
          });
          return {
            isCollapsed: !a.isCollapsed,
            containerHeight: null,
            adHeight: e,
          };
        });
      };
      d.$10 = function (a) {
        var b = this.state.nonInterruptiveAd;
        if (!b) return;
        c("InstreamVideoAdsController").logNonInterruptiveUIEvent(
          "commercial_break_click",
          b,
          { ad_break_click_source: a }
        );
      };
      d.$5 = function () {
        var a = this.state.nonInterruptiveAd;
        if (!a) return;
        c("InstreamVideoAdsController").logNonInterruptiveUIEvent(
          "commercial_break_non_interruptive_shown",
          a
        );
        c("InstreamVideoAdsController").logNonInterruptiveAdImpression(a);
        this.setState({ isViewable: !0 });
      };
      d.$6 = function () {
        var a = this.state.nonInterruptiveAd;
        if (!a) return;
        c("InstreamVideoAdsController").logNonInterruptiveUIEvent(
          "commercial_break_non_interruptive_hidden",
          a
        );
        this.setState({ isViewable: !1 });
      };
      return b;
    })(i.Component);
    g["default"] = a;
  },
  98
);
__d(
  "CommercialBreakUtil",
  [
    "csx",
    "CommercialBreakContextCard.react",
    "CommercialBreakExperiments",
    "DOM",
    "DataStore",
    "InstreamPlacement",
    "ReactDOM",
    "ReactLegacyShim_DEPRECATED",
    "VideoPlayerFormatsMap",
    "VideoWithNonInterruptiveAd.react",
    "react",
  ],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    function a(a, b) {
      if (b === null) return;
      var e = a.getOption("VideoWithInstreamVideo", "controller"),
        f = a.getOption("VideoWithCommercialBreak", "controller"),
        g = e && e.getAdController();
      e = e && e.getConfig();
      if (e && !e.isLive && g) {
        var h = JSON.parse(d("DataStore").get(g.getRootNode(), "store"));
        if (
          h &&
          Object.prototype.hasOwnProperty.call(h, "profileName") &&
          Object.prototype.hasOwnProperty.call(h, "profilePicURI") &&
          Object.prototype.hasOwnProperty.call(h, "profileLink")
        ) {
          var j = null,
            k = f && f.getContextCardTrackingWrapper();
          if (k) {
            k = c("DOM").setContent(b, k);
            k.length != 0 && (j = k[0]);
          }
          k = f && f.getCallToAction();
          var l = k && k.adVideoID && k.adVideoID.toString();
          g.getVideoID() !== l && (k = null);
          g = null;
          l = null;
          var m = null,
            n = null,
            o = null;
          c("CommercialBreakExperiments").instreamAdsNFXOnContextCard &&
            ((g = f && f.getChevronButtonID()),
            (l = f && f.getInstreamVideoOptionMenuURI()));
          c("CommercialBreakExperiments").instreamAdsInfoCard &&
            ((m = e && e.hostVideoOwnerPageProfileName),
            (n = e && e.hostVideoOwnerPageProfileImageURI),
            (o = f && f.getInfoCardNuxID()));
          d("ReactLegacyShim_DEPRECATED").render(
            i.jsx(c("CommercialBreakContextCard.react"), {
              callToAction: k,
              config: e,
              hostVPC: a,
              profileName: h.profileName,
              profilePicURI: h.profilePicURI,
              profileLink: h.profileLink,
              chevronButtonID: g,
              instreamVideoOptionMenuURI: l,
              hostVideoOwnerPageProfileName: m,
              hostVideoOwnerPageProfileImageURI: n,
              infoCardNuxID: o,
            }),
            j ? j : b
          );
        }
      }
    }
    function b(a) {
      if (!a) return;
      var b = c("DOM").find(a, "._36l3");
      b && d("ReactDOM").unmountComponentAtNode(b.parentNode, f.id);
      c("DOM").remove(a);
    }
    function e(a, b, e) {
      var f = null;
      if (e) {
        e = c("DOM").setContent(b, e);
        e.length !== 0 &&
          ((f = e[0]), a.setNonInterruptiveAdTrackingWrapper(f));
      }
      d("ReactLegacyShim_DEPRECATED").render(
        i.jsx(c("VideoWithNonInterruptiveAd.react"), {
          videoWithCommercialBreak: a,
        }),
        f || b
      );
    }
    function h(a, b) {
      if (!a) return;
      b && d("ReactDOM").unmountComponentAtNode(b, f.id);
      c("DOM").remove(a);
    }
    function j(a, b, c) {
      c === void 0 && (c = {});
      a = a.getOption("VideoWithInstreamVideo", "controller");
      a && a.logMarauderEvent(b, c);
    }
    function k(a) {
      if (a.isFullscreen()) return "full_screen";
      a = a.getSource();
      return a ? c("VideoPlayerFormatsMap")[a] : "inline";
    }
    function l(a) {
      return a.getPlayerSuborigin() || a.getSource();
    }
    function m(a) {
      if (a == null) return c("InstreamPlacement").MID_ROLL;
      switch (a.toLowerCase()) {
        case c("InstreamPlacement").PRE_ROLL:
          return c("InstreamPlacement").PRE_ROLL;
        case c("InstreamPlacement").MID_ROLL:
          return c("InstreamPlacement").MID_ROLL;
        case c("InstreamPlacement").POST_ROLL:
          return c("InstreamPlacement").POST_ROLL;
        case c("InstreamPlacement").NON_INTERRUPTIVE:
          return c("InstreamPlacement").NON_INTERRUPTIVE;
        default:
          return c("InstreamPlacement").MID_ROLL;
      }
    }
    function n() {
      return new Set([3, 263]);
    }
    g.renderContextCard = a;
    g.removeContextCard = b;
    g.renderNonInterruptiveAd = e;
    g.removeNonInterruptiveAd = h;
    g.logMarauderEvent = j;
    g.getVideoPlayerFormat = k;
    g.getVideoPlayerSubOrigin = l;
    g.coerceInstreamPlacementEnum = m;
    g.getNonInterruptiveStoryTypeConfig = n;
  },
  98
);
__d(
  "CommercialBreakHostStoryComponentType",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      POP_OVER_MENU: "POP_OVER_MENU",
      HOST_STORY_HEADER: "HOST_STORY_HEADER",
    });
    f["default"] = a;
  },
  66
);
__d(
  "StoryComponentVideoPlayerControllerRegistry",
  ["CommercialBreakHostStoryComponentType", "DOMQuery", "EventEmitter"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = new (c("EventEmitter"))(),
      i = new Map(),
      j = new Map(),
      k = new Map();
    function l(a) {
      a = a;
      var b = [];
      while (a) b.unshift(a), (a = a.parentElement);
      return b;
    }
    function m(a, b) {
      if (a === null) return null;
      var c = l(a);
      a = null;
      var d = null;
      b.forEach(function (b) {
        var e = b[0];
        b = b[1];
        e = l(e);
        for (var f = 0; f < c.length; ++f)
          if (c[f] !== e[f]) {
            (d === null || f > d) && ((d = f), (a = b));
            break;
          }
      });
      return a;
    }
    function a(a, b) {
      var d = a.getVideoID(),
        e = i.get(d);
      e ? e.push(a) : ((e = [a]), i.set(d, e));
      d = null;
      b === c("CommercialBreakHostStoryComponentType").POP_OVER_MENU
        ? (d = p(a))
        : b === c("CommercialBreakHostStoryComponentType").HOST_STORY_HEADER &&
          (d = q(a));
      if (!d) return;
      h.emit(d.getInstanceID() + "/register", a);
    }
    function b(a, b, c) {
      var d = k.get(b);
      d ? d.push(a) : ((d = [a]), k.set(b, d));
      r(a, b, c);
    }
    function e(a, b) {
      var c = b.host_video_id;
      if (!c) return;
      a = new s(a, b);
      b = a.getInstanceID();
      var d = j.get(c);
      d || ((d = []), j.set(c, d));
      d.push(a);
      n(a.getTriggerElem(), b, c, a.registerVideoPlayerController.bind(a));
    }
    function n(a, b, c, d) {
      h.addListener(b + "/register", d);
      d = o(a, c);
      if (!d) return;
      h.emit(b + "/register", d);
    }
    function o(a, b) {
      b = i.get(b);
      return !b
        ? null
        : m(
            a,
            b
              .filter(function (a) {
                return !a.isState("destroyed") && !a.isState("fallback");
              })
              .map(function (a) {
                return [a.getRootNode(), a];
              })
          );
    }
    function p(a) {
      var b = j.get(a.getVideoID());
      return !b
        ? null
        : m(
            a.getRootNode(),
            b.map(function (a) {
              return [a.getTriggerElem(), a];
            })
          );
    }
    function q(a) {
      var b = k.get(a.getVideoID());
      if (!b) return null;
      for (var c = 0; c < b.length; c++) {
        var e = b[c];
        if (d("DOMQuery").contains(e.getContainerElement(), a.getRootNode()))
          return e;
      }
      return null;
    }
    function r(a, b, c) {
      h.addListener(a.getInstanceID() + "/register", c);
      c = i.get(b);
      if (!c) return;
      c = c.filter(function (a) {
        return !a.isState("destroyed") && !a.isState("fallback");
      });
      for (b = 0; b < c.length; b++) {
        var e = c[b];
        if (d("DOMQuery").contains(a.getContainerElement(), e.getRootNode())) {
          h.emit(a.getInstanceID() + "/register", e);
          return;
        }
      }
    }
    var s = (function () {
      function a(a, b) {
        (this._menu = a),
          (this._originalEndpoint = this._menu._endpoint),
          (this._additionalData = b);
      }
      var b = a.prototype;
      b.registerVideoPlayerController = function (a) {
        var b = this;
        a.addListener("commercialBreak/updateOptionMenuURI", function (a) {
          b._updateEndpoint(a);
        });
        a.addListener("commercialBreak/recoverOptionMenuURI", function () {
          return b._updateEndpoint(b._originalEndpoint);
        });
      };
      b._updateEndpoint = function (a) {
        var b = this._menu;
        b.setMenu(b._loadingMenu);
        b._setFocus(b._loadingMenu);
        b._endpoint = a;
        b._fetched && ((b._fetched = !1), b.fetchMenu());
      };
      b.getInstanceID = function () {
        return this._menu._instanceId.toString();
      };
      b.getTriggerElem = function () {
        return this._menu.getTriggerElem();
      };
      b.getOptionsButtonID = function () {
        return this._additionalData.options_button_id || "";
      };
      return a;
    })();
    g.registerVideoPlayerController = a;
    g.registerHostStoryController = b;
    g.registerPopoverAsyncMenu = e;
    g._informStoryComponentRegister = n;
    g.findVideoPlayerControllerForElement = o;
    g.findPopoverAsyncMenuForVideoPlayerController = p;
    g.findHostStoryControllerForVideoPlayerController = q;
    g.findVideoControllerForStoryController = r;
  },
  98
);
__d(
  "CommercialBreakHostStoryController",
  [
    "csx",
    "cx",
    "Arbiter",
    "CSS",
    "CommercialBreakUtil",
    "DOM",
    "DOMQuery",
    "StoryComponentVideoPlayerControllerRegistry",
    "ge",
  ],
  function (a, b, c, d, e, f, g, h, i) {
    a = (function () {
      function a(a, b, c, e, f) {
        this.$1 = null;
        this.$6 = null;
        this.$7 = null;
        this.$8 = null;
        this.$2 = c;
        this.$17 = f;
        this.$4 = a;
        this.$3 = b;
        this.$11 = null;
        e && (this.$16 = e.toString());
        c = d("DOMQuery").scry(b, ".uiLikePageButton");
        c.length !== 0 && (this.$1 = c[0]);
        f = d("DOMQuery").scry(b, "._2ezg");
        f.length != 0 && (this.$6 = f[0]);
        a = d("DOMQuery").scry(b, "._5pcm");
        a.length != 0 && (this.$7 = a[0]);
        e = d("DOMQuery").scry(b, "._5pbz");
        if (e.length != 0) {
          c = e[0];
          this.$8 = d("DOMQuery").scry(c, "._1dwg");
        }
        f = d("DOMQuery").scry(b, "._nqx");
        f.length > 0 && (this.$9 = f[0]);
        d(
          "StoryComponentVideoPlayerControllerRegistry"
        ).registerHostStoryController(this, this.$16, this.$18.bind(this));
      }
      var b = a.prototype;
      b.getContainerElement = function () {
        return this.$3;
      };
      b.getInstanceID = function () {
        return this.$2;
      };
      b.$18 = function (a) {
        var b = this;
        this.$12 = a;
        this.$5 = this.$12.getRootNode();
        c("Arbiter").subscribe("VideoChannelView/closed", this.$19.bind(this));
        c("Arbiter").subscribe(
          "RHCVideoWNSController/closeEnd",
          this.$20.bind(this)
        );
        this.$12.addListener("commercialBreak/hideUFI", this.$21.bind(this));
        this.$12.addListener("commercialBreak/showUFI", function () {
          b.$10 &&
            (d("CommercialBreakUtil").removeContextCard(b.$10), (b.$10 = null));
        });
        this.$12.addListener("TahoeController/exitTahoe", this.$22.bind(this));
        this.$15 = a.addListener("optionsChange", function () {
          return b.$23();
        });
        this.$23();
      };
      b.$23 = function () {
        var a = this;
        this.$14 = this.$12.getOption("VideoWithCommercialBreak", "controller");
        this.$13 = this.$12.getOption("VideoWithInstreamVideo", "controller");
        this.$14 &&
          (this.$15.remove(),
          this.$14.setStoryIdentifier(this.$17),
          this.$14.addListener("commercialBreak/stateChange", function (b) {
            return a.$24(b.state);
          }));
      };
      b.$24 = function (a) {
        a === "PLAY_AD" &&
        !d("CommercialBreakUtil")
          .getNonInterruptiveStoryTypeConfig()
          .has(this.$14.getReceivedAdStoryType())
          ? this.$25()
          : this.$26();
      };
      b.$19 = function () {
        this.$27();
      };
      b.$22 = function () {
        this.$27();
      };
      b.$20 = function () {
        this.$27();
      };
      b.$27 = function () {
        this.$14 && this.$14.getIsVideoAdCommercialBreakOnGoing() && this.$21();
      };
      b.$21 = function () {
        if (!this.$28()) return;
        var a = this.$5 && this.$5.parentNode;
        if (a) {
          a = c("DOM").scry(a, "._16bp");
          if (a.length != 0) return;
        }
        this.$10 = c("DOM").create("div", { className: "_16bp" });
        c("DOM").insertAfter(this.$5, this.$10);
        d("CommercialBreakUtil").renderContextCard(this.$12, this.$10);
      };
      b.$28 = function () {
        return this.$29() || this.$30();
      };
      b.$30 = function () {
        return this.$12 ? this.$12.getSource() === "permalink" : !1;
      };
      b.$29 = function () {
        return this.$12 ? this.$12.getSource() === "inline" : !1;
      };
      b.$25 = function () {
        this.$1 && d("CSS").addClass(this.$1, "_3fcl");
        this.$6 && d("CSS").addClass(this.$6, "_3fcl");
        this.$7 && d("CSS").addClass(this.$7, "_3fcl");
        this.$8 &&
          this.$8.map(function (a) {
            d("CSS").addClass(a, "_3fcl");
          });
        this.$9 && d("CSS").addClass(this.$9, "_gtd");
        var a = d(
          "StoryComponentVideoPlayerControllerRegistry"
        ).findPopoverAsyncMenuForVideoPlayerController(this.$12);
        if (a) {
          a = a.getOptionsButtonID();
          this.$11 = c("ge")(a);
        }
        this.$11 && d("CSS").addClass(this.$11, "_3fcl");
      };
      b.$26 = function () {
        this.$1 && d("CSS").removeClass(this.$1, "_3fcl"),
          this.$6 && d("CSS").removeClass(this.$6, "_3fcl"),
          this.$7 && d("CSS").removeClass(this.$7, "_3fcl"),
          this.$8 &&
            this.$8.map(function (a) {
              d("CSS").removeClass(a, "_3fcl");
            }),
          this.$9 && d("CSS").removeClass(this.$9, "_gtd"),
          this.$11 && d("CSS").removeClass(this.$11, "_3fcl"),
          (this.$11 = null);
      };
      return a;
    })();
    g["default"] = a;
  },
  98
);
