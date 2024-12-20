!(function () {
  "use strict";
  var t,
    e,
    u = new RegExp(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/),
    n = navigator.userAgent.match(/MSIE (\d+)|Trident[^\)]+rv:(\d+)/i),
    r = n ? Number(n[1] || n[2]) : NaN,
    n = function () {
      var e = document.getElementsByTagName("script");
      if (e.length) for (var t = e.length - 1; 0 <= t; t--) if ("LA-DATA-WIDGET" === e[t].getAttribute("id")) return e[t];
      return null;
    },
    v = function (e, t) {
      return (t = t || null), o(document.createElement(e), t);
    },
    o = function (e, t) {
      if (((t = t || null), "function" == typeof e.style.setProperty && 9 !== r)) {
        if (
          (e.style.setProperty("box-sizing", "border-box", "important"),
          e.style.setProperty("margin", "0", "important"),
          e.style.setProperty("margin-top", "0", "important"),
          e.style.setProperty("margin-left", "0", "important"),
          e.style.setProperty("margin-bottom", "0", "important"),
          e.style.setProperty("margin-right", "0", "important"),
          e.style.setProperty("font-size", "12px", "important"),
          e.style.setProperty("line-height", "1.71428em", "important"),
          e.style.setProperty("color", "#333", "important"),
          t)
        )
          for (var n in t) e.style.setProperty(n.replace(/([A-Z])/g, "-$1").toLowerCase(), String(t[n]), "important");
      } else if (
        ((e.style.boxSizing = "border-box"),
        (e.style.margin = "0 0 0 0"),
        (e.style.marginTop = "0"),
        (e.style.marginLeft = "0"),
        (e.style.marginBottom = "0"),
        (e.style.marginRight = "0"),
        (e.style.fontSize = "12px"),
        (e.style.lineHeight = "1.71428em"),
        (e.style.color = "#333"),
        t)
      )
        for (var o in t) e.style[o] = t[o];
      return e;
    },
    x = {
      isNaN:
        ((t = function (e) {
          return Number.isNaN ? Number.isNaN(e) : isNaN(e);
        }),
        (a.toString = function () {
          return t.toString();
        }),
        a),
    },
    z = function (e) {
      if (void 0 === e) return 0;
      e = String(e).split(".");
      return 1e8 <= parseInt(e[0], 10)
        ? "".concat((e[0] / 1e8).toFixed(2), "亿")
        : ""
            .concat(
              String(e[0]).replace(/\d{1,3}(?=(\d{3})+$)/g, function (e) {
                return "".concat(e, ",");
              })
            )
            .concat(e[1] ? "." : "")
            .concat(e[1] ? "".concat(e[1]).substring(0, 2) : "");
    },
    i = String("true"),
    b = [["ol"], ["t", "u"], ["t", "p"], ["y", "u"], ["y", "p"], ["m", "p"], ["tl", "p"]],
    N = { ol: "最近活跃访客", t: "今日", y: "昨日", m: "本月", tl: "总", i: "访问人数", p: "访问量", u: "访问人数", tt: "网站数据概况" },
    y = { themeColor: ["#1690FF", "#FD6591", "#33D279", "#FFA233", "#B880F5"], titleColor: "#333", color: "#999", numberColor: "#333", backgroundColor: "#fff", fontSize: 12 },
    S = ["borderColor", "titleColor", "color", "numberColor", "backgroundColor", "iconColor", "fontSize"],
    C = [
      '<svg width="70" height="13" viewBox="0 0 70 15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n<path d="M54.794 4.286l.385 4.5 3.99-4.5h4.375l-8.75 10.5H52.64V4.903H51.43v-.617h3.365zm12.748 0c.95 0 1.649.206 2.098.618.45.412.484 1.101.103 2.068h-2.418l.043-.107c.092-.234.093-.412.003-.534a.524.524 0 0 0-.37-.214.109.109 0 0 0-.052-.015h-.116a.191.191 0 0 0-.064.015c-.196.02-.402.102-.618.244a1.261 1.261 0 0 0-.481.61l-.603 1.527c.285-.163.612-.298.98-.405.367-.106.722-.16 1.065-.16.044 0 .09.003.137.008.048.005.099.008.154.008.495.06.866.323 1.114.785.247.464.155 1.244-.28 2.343l-.084.214c-.418 1.058-1 1.905-1.748 2.54-.748.637-1.701.955-2.86.955-.077 0-.15-.003-.22-.008a3.042 3.042 0 0 0-.22-.008c-.683-.06-1.236-.297-1.658-.71-.422-.411-.434-1.12-.037-2.128l1.916-4.853c.382-.967.962-1.674 1.74-2.122a4.89 4.89 0 0 1 2.476-.671zm-1.99 4.772c-.279 0-.506.17-.681.506-.176.337-.344.79-.504 1.36-.17.604-.265 1.067-.282 1.386-.019.32.081.509.298.567a.988.988 0 0 0 .756-.34c.208-.227.431-.764.67-1.613.16-.57.242-1.023.248-1.36.005-.337-.164-.506-.505-.506z" id="a" fill="${color}"/>\n</defs>\n<g>\n<path d="M21.842 12.002c-.842 0-1.524.67-1.524 1.499 0 .828.682 1.499 1.524 1.499s1.524-.671 1.524-1.5c0-.827-.682-1.498-1.524-1.498zM28.439 0H25.39v14.992h7.944l1.17-2.998H28.44V0zm14.456.61c-.323-.813-1.492-.813-1.815 0l-5.7 14.382h3.285l3.322-8.38 3.322 8.38h3.287L42.895.61zM15.242 14.992h3.048V0h-3.048v14.992zM12.193 0H0v2.998h10.983L12.193 0zM8.151 4.997H0v2.999h8.15c1.121 0 2.033.896 2.033 1.999 0 1.102-.912 1.999-2.032 1.999H1.195L0 14.992h8.15c2.803 0 5.082-2.242 5.082-4.997 0-2.756-2.28-4.998-5.081-4.998z" fill="${color}"/><use xlink:href="#a" fill="${color}"/>\n</g>\n</svg>',
      '<svg width="72" height="13" viewBox="0 0 70 15" xmlns="http://www.w3.org/2000/svg">\n<g fill="none" fill-rule="evenodd">\n<path d="M21.842 12.002c-.842 0-1.524.67-1.524 1.499 0 .828.682 1.499 1.524 1.499s1.524-.671 1.524-1.5c0-.827-.682-1.498-1.524-1.498zM28.439 0H25.39v14.992h7.944l1.17-2.998H28.44V0zm14.456.61c-.323-.813-1.492-.813-1.815 0l-5.7 14.382h3.285l3.322-8.38 3.322 8.38h3.287L42.895.61zM15.242 14.992h3.048V0h-3.048v14.992zM12.193 0H0v2.998h10.983L12.193 0zM8.151 4.997H0v2.999h8.15c1.121 0 2.033.896 2.033 1.999 0 1.102-.912 1.999-2.032 1.999H1.195L0 14.992h8.15c2.803 0 5.082-2.242 5.082-4.997 0-2.756-2.28-4.998-5.081-4.998zM54 0h13a5 5 0 0 1 0 10H50V4a4 4 0 0 1 4-4z" fill="${color}"/>\n<path d="M55.875 2c-.746 0-1.317.252-1.712.757v-.603H53V10h1.251V7.048c.46.615 1.032.933 1.69.933.812 0 1.46-.297 1.92-.89.428-.548.648-1.24.648-2.073 0-.878-.22-1.58-.659-2.13C57.368 2.297 56.71 2 55.875 2zm-.186 1.01c.548 0 .954.197 1.218.592.208.33.318.801.318 1.416 0 .614-.12 1.086-.351 1.415-.264.352-.68.538-1.23.538-.405 0-.735-.164-.998-.494-.296-.362-.439-.845-.439-1.437v-.088c0-.57.11-1.02.351-1.36.264-.396.637-.582 1.13-.582zM62.284 2c-.351 0-.648.099-.9.307-.208.154-.384.373-.538.659v-.812h-1.24v5.673h1.24V4.82c0-.483.143-.867.45-1.163.264-.263.56-.384.89-.384a2.7 2.7 0 0 1 .811.12v-1.25A1.592 1.592 0 0 0 62.284 2zm4.06 0c-.867 0-1.558.274-2.074.845-.527.56-.779 1.273-.779 2.15 0 .868.252 1.581.768 2.13.527.57 1.218.856 2.085.856.856 0 1.559-.286 2.085-.856.505-.549.769-1.262.769-2.13 0-.877-.264-1.59-.78-2.15C67.892 2.275 67.2 2 66.344 2zm0 1.02c.516 0 .922.198 1.207.615.242.351.374.812.374 1.36 0 .539-.132.989-.374 1.35-.285.407-.69.615-1.207.615-.526 0-.922-.208-1.207-.614-.241-.351-.362-.801-.362-1.35s.12-1.01.362-1.36c.285-.418.68-.615 1.207-.615z" fill="#FFF"/>\n</g>\n</svg>',
    ],
    w = function (e) {
      return N[String(e)] || e;
    };
  function a(e) {
    return t.apply(this, arguments);
  }
  !(function () {
    if (!i || "false" === i || "0" === i) return 1;
    var e = "*.gh.emoo.us.kg,*.ghproxy.cn".split(",");
    if (e.length)
      for (var t = e.length - 1; 0 <= t; t--)
        if (
          (function (e) {
            if (e === ((location && location.host) || "")) return !0;
            var t = (function () {
              try {
                var e = "mh_".concat(Math.random()),
                  t = new RegExp("(^|;)\\s*".concat(e, "=12345")),
                  n = new Date(0),
                  o = document.domain.split("."),
                  r = [];
                for (r.unshift(o.pop()); o.length; ) {
                  r.unshift(o.pop());
                  var i = r.join("."),
                    a = "".concat(e, "=", 12345, ";domain=.").concat(i);
                  if (((document.cookie = a), t.test(document.cookie))) return (document.cookie = "".concat(a, ";expires=").concat(n)), i;
                }
              } catch (e) {
                return null;
              }
            })();
            return !!(t && -1 < e.indexOf(t)) || !/([\w.]+\/?)\S*/.test(e);
          })(e[t])
        )
          return 1;
  })()
    ? (e = n()) && e.parentNode && e.parentNode.removeChild(e)
    : (e = n())
    ? (function (e, t) {
        var n = (t = t || null),
          o = n.col,
          n = n.insert;
        if ((e = e || null) && e.parentNode) {
          var r = document.createElement("div");
          if (
            ((r.innerHTML =
              "<p>网站数据概况</p><p><span>0</span><span>10</span></p><p><span>1</span><span>6</span></p><p><span>2</span><span>6</span></p><p><span>3</span><span>523</span></p><p><span>4</span><span>665</span></p><p><span>5</span><span>8529</span></p><p><span>6</span><span>60406</span></p>"),
            o)
          ) {
            var i = v("div", {
              backgroundColor: (t && t.theme.backgroundColor) || "#fff",
              padding: "16px 20px",
              fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
              border: "1px solid ".concat((t && t.theme.borderColor) || "#1690ff"),
              height: t && t.h ? "".concat(t.h, "px") : "auto",
            });
            i.setAttribute("class", "la-widget la-data-widget__container"),
              t.display[0] &&
                (((s = v("p", {
                  fontWeight: "bold",
                  lineHeight: "1em",
                  marginBottom: "6px",
                  color: (t && t.theme.titleColor) || "#333",
                  fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
                  textAlign: "left",
                })).innerText = N.tt),
                i.appendChild(s));
            for (var a, l, c, p, s, h = 1; h < t.display.length; h++)
              t.display[h] &&
                ((a = r.childNodes[h]),
                (l = v("p", { fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px", textAlign: "left" })),
                (c = v("span", { display: "inline-block", color: (t && t.theme.color) || "#999", fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px" })),
                (p = parseInt(a.childNodes[0].innerText)),
                (c.innerText = w(1 < b[p].length ? "".concat(w(b[p][0])).concat(w(b[p][1])) : w(b[p][0]))),
                ((p = v("span", {
                  fontWeight: "bold",
                  color: (t && t.theme.numberColor) || "#333",
                  fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
                  float: "right",
                })).innerText = z(a.childNodes[1].innerText)),
                l.appendChild(p),
                l.appendChild(c),
                i.appendChild(l));
            t &&
              t.badge &&
              ((o = v("hr", { height: "1px", border: "none", borderTop: "1px solid ".concat(t.theme.borderColor), marginTop: "6px", marginBottom: "12px" })),
              i.appendChild(o),
              (s = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect),
              (d = v("p", { textAlign: (-1 !== t.badge.indexOf("icon") && t.icon) || ("text" === t.badge && t.text) || "left", lineHeight: "1em", color: t.theme.iconColor })),
              (o = v("a", { width: "auto", lineHeight: "1em", color: t.theme.iconColor, textDecoration: "none" })).setAttribute("target", "_blank"),
              o.setAttribute("href", "https://v6.51.la/"),
              o.setAttribute("title", "「我要啦」网站流量统计"),
              s && -1 !== t.badge.indexOf("icon")
                ? ((s = C[parseInt(t.badge.replace("icon_", ""), 10)] || C[0]), (o.innerHTML = s.replace(/\$\{color\}/g, t.theme.iconColor)))
                : (o.innerText = "51LA网站统计"),
              d.appendChild(o),
              i.appendChild(d)),
              n ? e.parentNode.insertBefore(i, e.parentNode.childNodes[0]) : e.parentNode.appendChild(i);
          } else {
            var d,
              f = v("span", { lineHeight: "1.71428em" });
            f.setAttribute("class", "la-widget la-data-widget__container"),
              t.display[0] &&
                (((d = v("span", {
                  fontWeight: "bold",
                  lineHeight: "1.71428em",
                  color: (t && t.theme.titleColor) || "#333",
                  fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
                })).innerText = "".concat(N.tt, "  - ")),
                f.appendChild(d));
            for (var m, g, u, x, y = 1; y < t.display.length; y++)
              t.display[y] &&
                ((m = r.childNodes[y]),
                (g = v("span", {
                  fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
                  borderLeft: f.childNodes.length < 1 || (t.display[0] && 1 === f.childNodes.length) ? "none" : "1px solid ".concat(t.theme.borderColor),
                  marginLeft: f.childNodes.length < 1 || (t.display[0] && 1 === f.childNodes.length) ? "0" : "6px",
                  paddingLeft: f.childNodes.length < 1 || (t.display[0] && 1 === f.childNodes.length) ? "0" : "6px",
                  lineHeight: "1.71428em",
                })),
                (u = v("span", {
                  display: "inline-block",
                  color: (t && t.theme.color) || "#999",
                  fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
                  lineHeight: "1.71428em",
                })),
                (x = parseInt(m.childNodes[0].innerText)),
                (u.innerText = w(1 < b[x].length ? "".concat(w(b[x][0])).concat(w(b[x][1])) : w(b[x][0]))),
                ((x = v("span", {
                  fontWeight: "bold",
                  color: (t && t.theme.numberColor) || "#333",
                  fontSize: t && t.theme.fontSize ? "".concat(t.theme.fontSize) : "12px",
                  marginLeft: "6px",
                  lineHeight: "1.71428em",
                })).innerText = z(m.childNodes[1].innerText)),
                g.appendChild(u),
                g.appendChild(x),
                f.appendChild(g));
            n ? e.parentNode.insertBefore(f, e.parentNode.childNodes[0]) : e.parentNode.appendChild(f);
          }
        }
      })(
        e,
        (function (e) {
          var t = "";
          if (!(-1 < e.indexOf("?"))) return null;
          var n = {};
          if (-1 != (t = "?".concat(e.split("?")[1])).indexOf("?"))
            for (var o = t.substr(1).split("&"), r = 0; r < o.length; r++) {
              var i = o[r].split("=")[0],
                a = decodeURIComponent(o[r].split("=")[1]);
              n[i] = "true" === a || ("false" !== a && a);
            }
          var l = n.theme,
            e = n.display,
            t = n.f;
          t && !x.isNaN(Number(t)) && (y.fontSize = t);
          for (
            var c = l ? l.split(",") : [], p = e ? e.split(",") : [], s = {}, h = [], d = x.isNaN(parseInt(c[0])) || 4 < parseInt(c[0]) ? 0 : parseInt(c[0]), f = 0;
            f < S.length;
            f++
          ) {
            var m = "fontSize" === S[f] ? "".concat(c[f] || y[S[f]], "px") : u.test(c[f]) ? c[f] : y[S[f]] || y.themeColor[d];
            s[S[f]] = m;
          }
          if (p.length) for (var g = 0; g <= 7; g++) h.push(!p[g] || ("true" !== p[g] && "1" !== p[g]) ? 0 : 1);
          else h = [1, 1, 1, 1, 1, 1, 1, 1];
          return (n.display = h), (n.theme = s), n;
        })(
          (function (e) {
            if ((e = e || null)) return document.querySelector ? e.src : e.getAttribute("src");
            var t = document.getElementsByTagName("script"),
              n = [];
            if (t.length) {
              for (var o = t.length - 1; 0 <= o; o--)
                if ("LA-DATA-WIDGET" === t[o].getAttribute("id")) {
                  n.push(t[o].getAttribute("src"));
                  break;
                }
              if (n.length) return n[0];
            }
            var r = "";
            try {
              throw Error("获取JS路径有误");
            } catch (e) {
              e.fileName ? (r = e.fileName) : e.sourceURL ? (r = e.sourceURL) : e.stack && (r = (e.stack.match(/at\s+(.*?):\d+:\d+/) || ["", ""])[1]);
            }
            return r || void 0;
          })(e)
        )
      )
    : console.error("can not found this script element");
})();
