(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 30370, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    e.s(["default", 0, function () {
        let e = (0, r.useRef)(null),
            n = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            let t, r = e.current;
            if (!r) return;
            let s = r.getContext("2d");
            if (!s) return;
            let l = document.createElement("video");
            l.src = "/fog_bg.mp4", l.muted = !0, l.loop = !0, l.playsInline = !0, l.autoplay = !0, l.style.display = "none", document.body.appendChild(l), n.current = l, l.play().catch(e => {
                console.warn("Autoplay was prevented, waiting for user interaction", e)
            });
            let a = document.createElement("canvas"),
                i = a.getContext("2d");
            if (!i) return;
            let o = document.createElement("canvas");
            o.width = 40, o.height = 22;
            let c = o.getContext("2d");
            if (!c) return;
            let d = [
                    [0, 8, 2, 10],
                    [12, 4, 14, 6],
                    [3, 11, 1, 9],
                    [15, 7, 13, 5]
                ].map(e => e.map(e => (e + .5) / 16)),
                u = [
                    [3, 3, 4],
                    [18, 18, 22],
                    [55, 57, 65],
                    [145, 148, 155],
                    [225, 228, 232]
                ],
                h = u.length - 1,
                f = 960,
                x = 540,
                p = 1,
                m = 960,
                g = 540,
                w = 1,
                v = 0,
                b = () => {
                    if (!r) return;
                    let e = window.innerWidth,
                        t = window.innerHeight;
                    r.width = e, r.height = t;
                    let n = Math.ceil(e / 4),
                        s = Math.ceil(t / 4);
                    if (n > 380) {
                        let e = 380 / n;
                        n = 380, s = Math.round(s * e)
                    }
                    a.width = n, a.height = s
                };
            window.addEventListener("resize", b), b();
            let j = () => {
                let e = a.width,
                    n = a.height;
                if (v++, i.fillStyle = "#000000", i.fillRect(0, 0, e, n), l.readyState >= 2) {
                    let t = l.videoWidth,
                        r = l.videoHeight;
                    if (v % 15 == 0) {
                        c.drawImage(l, 0, 0, 40, 22);
                        let e = c.getImageData(0, 0, 40, 22).data,
                            n = 0,
                            s = 0,
                            a = 0,
                            i = 40,
                            o = 0,
                            d = 22,
                            u = 0;
                        for (let t = 0; t < 22; t++)
                            for (let r = 0; r < 40; r++) {
                                let l = (40 * t + r) * 4,
                                    c = .299 * e[l] + .587 * e[l + 1] + .114 * e[l + 2];
                                if (c > 40) {
                                    let e = c / 255,
                                        l = e * e;
                                    s += r * l, a += t * l, n += l, r < i && (i = r), r > o && (o = r), t < d && (d = t), t > u && (u = t)
                                }
                            }
                        n > 0 ? (m = s / n / 40 * t, g = a / n / 22 * r, w = 1 + (1 - Math.max((o - i) / 40, (u - d) / 22)) * 1.4) : (m = t / 2, g = r / 2, w = 1)
                    }
                    f += (m - f) * .025, x += (g - x) * .025;
                    let s = e / n,
                        a = t / (p += (w - p) * .015),
                        o = r / p;
                    s > t / r ? o = a / s : a = o * s;
                    let d = f - a / 2,
                        u = x - o / 2;
                    d = Math.max(0, Math.min(t - a, d)), u = Math.max(0, Math.min(r - o, u)), i.drawImage(l, d, u, a, o, 0, 0, e, n)
                }
                let o = i.getImageData(0, 0, e, n),
                    b = o.data;
                for (let t = 0; t < n; t++) {
                    let r = d[t % 4];
                    for (let n = 0; n < e; n++) {
                        let s = (t * e + n) * 4,
                            l = (.299 * b[s] + .587 * b[s + 1] + .114 * b[s + 2]) / 255,
                            a = Math.max(0, Math.min(1, l * l * 1.5)),
                            i = r[n % 4],
                            o = a * h,
                            c = Math.floor(o),
                            d = u[Math.min(h, Math.max(0, o - c > i ? c + 1 : c))];
                        b[s] = d[0], b[s + 1] = d[1], b[s + 2] = d[2]
                    }
                }
                i.putImageData(o, 0, 0), s.imageSmoothingEnabled = !1, s.drawImage(a, 0, 0, r.width, r.height), t = requestAnimationFrame(j)
            };
            j();
            let y = () => {
                l.paused && l.play().catch(() => {})
            };
            return window.addEventListener("click", y), window.addEventListener("keydown", y), () => {
                window.removeEventListener("resize", b), window.removeEventListener("click", y), window.removeEventListener("keydown", y), cancelAnimationFrame(t), l && (l.pause(), l.remove())
            }
        }, []), (0, t.jsxs)("div", {
            className: "fixed inset-0 w-full h-full -z-10 bg-[#030304] overflow-hidden",
            children: [(0, t.jsx)("canvas", {
                ref: e,
                className: "absolute inset-0 w-full h-full",
                style: {
                    imageRendering: "pixelated"
                }
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(circle, transparent 40%, #030304 43%)",
                    backgroundSize: "4px 4px",
                    backgroundPosition: "0 0"
                }
            })]
        })
    }])
}, 95057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function () {
            return i
        },
        formatWithValidation: function () {
            return c
        },
        urlObjectKeys: function () {
            return o
        }
    };
    for (var s in n) Object.defineProperty(r, s, {
        enumerable: !0,
        get: n[s]
    });
    let l = e.r(90809)._(e.r(98183)),
        a = /https?|ftp|gopher|file/;

    function i(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", s = e.pathname || "", i = e.hash || "", o = e.query || "", c = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), o && "object" == typeof o && (o = String(l.urlQueryToSearchParams(o)));
        let d = e.search || o && `?${o}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || a.test(n)) && !1 !== c ? (c = "//" + (c || ""), s && "/" !== s[0] && (s = "/" + s)) : c || (c = ""), i && "#" !== i[0] && (i = "#" + i), d && "?" !== d[0] && (d = "?" + d), s = s.replace(/[?#]/g, encodeURIComponent), d = d.replace("#", "%23"), `${n}${c}${s}${d}${i}`
    }
    let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function c(e) {
        return i(e)
    }
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
            return s
        }
    });
    let n = e.r(71645);

    function s(e, t) {
        let r = (0, n.useRef)(null),
            s = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = s.current;
                t && (s.current = null, t())
            } else e && (r.current = l(e, n)), t && (s.current = l(t, n))
        }, [e, t])
    }

    function l(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
            return l
        }
    });
    let n = e.r(18967),
        s = e.r(52817);

    function l(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, s.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 84508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
            return n
        }
    });
    let n = e => {}
}, 22016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function () {
            return g
        },
        useLinkStatus: function () {
            return v
        }
    };
    for (var s in n) Object.defineProperty(r, s, {
        enumerable: !0,
        get: n[s]
    });
    let l = e.r(90809),
        a = e.r(43476),
        i = l._(e.r(71645)),
        o = e.r(95057),
        c = e.r(8372),
        d = e.r(18581),
        u = e.r(18967),
        h = e.r(5550);
    e.r(33525);
    let f = e.r(88540),
        x = e.r(91949),
        p = e.r(73668),
        m = e.r(9396);

    function g(t) {
        var r, n;
        let s, l, g, [v, b] = (0, i.useOptimistic)(x.IDLE_LINK_STATUS),
            j = (0, i.useRef)(null),
            {
                href: y,
                as: k,
                children: N,
                prefetch: C = null,
                passHref: M,
                replace: L,
                shallow: S,
                scroll: _,
                onClick: T,
                onMouseEnter: z,
                onTouchStart: O,
                legacyBehavior: P = !1,
                onNavigate: E,
                transitionTypes: R,
                ref: I,
                unstable_dynamicOnHover: A,
                ...D
            } = t;
        s = N, P && ("string" == typeof s || "number" == typeof s) && (s = (0, a.jsx)("a", {
            children: s
        }));
        let U = i.default.useContext(c.AppRouterContext),
            B = !1 !== C,
            W = !1 !== C ? null === (n = C) || "auto" === n ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            F = "string" == typeof (r = k || y) ? r : (0, o.formatUrl)(r);
        if (P) {
            if (s?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            l = i.default.Children.only(s)
        }
        let K = P ? l && "object" == typeof l && l.ref : I,
            $ = i.default.useCallback(e => (null !== U && (j.current = (0, x.mountLinkInstance)(e, F, U, W, B, b)), () => {
                j.current && ((0, x.unmountLinkForCurrentNavigation)(j.current), j.current = null), (0, x.unmountPrefetchableInstance)(e)
            }), [B, F, U, W, b]),
            H = {
                ref: (0, d.useMergedRef)($, K),
                onClick(t) {
                    P || "function" != typeof T || T(t), P && l.props && "function" == typeof l.props.onClick && l.props.onClick(t), !U || t.defaultPrevented || function (t, r, n, s, l, a, o) {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: d
                            } = t.currentTarget;
                            if ("A" === d.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, p.isLocalURL)(r)) {
                                s && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: u
                            } = e.r(99781);
                            i.default.startTransition(() => {
                                u(r, s ? "replace" : "push", !1 === l ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, n.current, o)
                            })
                        }
                    }(t, F, j, L, _, E, R)
                },
                onMouseEnter(e) {
                    P || "function" != typeof z || z(e), P && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e), U && B && (0, x.onNavigationIntent)(e.currentTarget, !0 === A)
                },
                onTouchStart: function (e) {
                    P || "function" != typeof O || O(e), P && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e), U && B && (0, x.onNavigationIntent)(e.currentTarget, !0 === A)
                }
            };
        return (0, u.isAbsoluteUrl)(F) ? H.href = F : P && !M && ("a" !== l.type || "href" in l.props) || (H.href = (0, h.addBasePath)(F)), g = P ? i.default.cloneElement(l, H) : (0, a.jsx)("a", {
            ...D,
            ...H,
            children: s
        }), (0, a.jsx)(w.Provider, {
            value: v,
            children: g
        })
    }
    e.r(84508);
    let w = (0, i.createContext)(x.IDLE_LINK_STATUS),
        v = () => (0, i.useContext)(w);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 45678, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(22016);
    e.s(["default", 0, function () {
        let [e, s] = (0, r.useState)(!1), [l, a] = (0, r.useState)(!1);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("header", {
                className: "fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50",
                children: (0, t.jsxs)("div", {
                    className: "glass-nav rounded-full px-6 py-3 flex items-center justify-between shadow-2xl",
                    children: [(0, t.jsxs)(n.default, {
                        href: "/",
                        className: "flex items-center space-x-3 cursor-pointer group",
                        children: [(0, t.jsx)("div", {
                            className: "w-8 h-8 relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-12",
                            children: (0, t.jsx)("img", {
                                src: "/aspectlogo.png",
                                alt: "aspect logo",
                                className: "w-full h-full object-contain"
                            })
                        }), (0, t.jsx)("span", {
                            className: "text-white font-semibold text-lg tracking-wider font-sans",
                            children: "aspect"
                        })]
                    }), (0, t.jsxs)("nav", {
                        className: "flex items-center space-x-8 mr-4",
                        children: [(0, t.jsx)(n.default, {
                            href: "/discord",
                            className: "text-[#a3a3a3] hover:text-white text-sm font-medium transition-colors duration-200",
                            children: "Discord"
                        }), (0, t.jsx)("button", {
                            onClick: () => s(!0),
                            className: "text-[#a3a3a3] hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer",
                            children: "Contact me"
                        })]
                    })]
                })
            }), e && (0, t.jsx)("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300",
                children: (0, t.jsxs)("div", {
                    className: "glass-panel w-[90%] max-w-[480px] rounded-3xl p-8 border border-white/10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200",
                    onClick: e => e.stopPropagation(),
                    children: [(0, t.jsx)("button", {
                        onClick: () => s(!1),
                        className: "absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors cursor-pointer",
                        children: (0, t.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    }), (0, t.jsx)("h3", {
                        className: "text-xl font-bold text-white mb-4",
                        children: "Contact Me"
                    }), (0, t.jsxs)("p", {
                        className: "text-zinc-300 text-sm leading-relaxed mb-6 font-light",
                        children: ["my discord is", " ", (0, t.jsxs)("span", {
                            onClick: () => {
                                navigator.clipboard.writeText("za1k"), a(!0), setTimeout(() => a(!1), 2e3)
                            },
                            className: "relative inline-block cursor-pointer font-semibold text-white px-2 py-0.5 rounded bg-white/10 border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-glow-subtle select-all",
                            title: "Click to copy Discord handle",
                            style: {
                                textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)"
                            },
                            children: ["za1k", l && (0, t.jsx)("span", {
                                className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-bounce select-none pointer-events-none",
                                children: "Copied!"
                            })]
                        }), " ", "and im open to commission in python, c++, c#, luau. my rates are very cheap for great prices n shii."]
                    }), (0, t.jsx)("div", {
                        className: "flex justify-end pt-2",
                        children: (0, t.jsx)("button", {
                            onClick: () => s(!1),
                            className: "glass-button-primary px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer",
                            children: "Close"
                        })
                    })]
                })
            })]
        })
    }])
}, 7887, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(22016);

    function s() {
        let [e, n] = (0, r.useState)(283), [s, l] = (0, r.useState)(0);
        return (0, r.useEffect)(() => {
            n(283), l(0);
            let e = setTimeout(() => {
                    n(5.660000000000025)
                }, 100),
                t = 0,
                r = setInterval(() => {
                    l(t += 1), t >= 98 && clearInterval(r)
                }, 20);
            return () => {
                clearTimeout(e), clearInterval(r)
            }
        }, []), (0, t.jsxs)("div", {
            className: "relative flex flex-col items-center justify-center py-6 bg-white/2 rounded-2xl border border-white/5",
            children: [(0, t.jsxs)("div", {
                className: "relative w-44 h-44 flex items-center justify-center",
                children: [(0, t.jsxs)("svg", {
                    className: "absolute inset-0 w-full h-full transform -rotate-90",
                    viewBox: "0 0 100 100",
                    children: [(0, t.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "45",
                        fill: "transparent",
                        stroke: "rgba(255,255,255,0.04)",
                        strokeWidth: "6"
                    }), (0, t.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "45",
                        fill: "transparent",
                        stroke: "#ffffff",
                        strokeWidth: "6",
                        strokeDasharray: "283",
                        strokeDashoffset: e,
                        strokeLinecap: "round",
                        className: "transition-all duration-[1500ms] ease-out",
                        style: {
                            filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))"
                        }
                    })]
                }), (0, t.jsx)("div", {
                    className: "text-center z-10 flex flex-col items-center",
                    children: (0, t.jsxs)("span", {
                        className: "text-4xl font-bold tracking-tight text-white",
                        children: [s, "%"]
                    })
                })]
            }), (0, t.jsx)("span", {
                className: "text-xs text-[#a3a3a3] font-medium tracking-wide mt-4",
                children: "Unc"
            })]
        })
    }
    e.s(["default", 0, function () {
        let [e, l] = (0, r.useState)(!1), a = () => (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                className: "flex items-start space-x-4 p-4 rounded-2xl bg-white/3 border border-white/5",
                children: [(0, t.jsx)("div", {
                    className: "text-white p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center",
                    children: (0, t.jsx)("svg", {
                        className: "w-6 h-6 animate-pulse",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        })
                    })
                }), (0, t.jsxs)("div", {
                    children: [(0, t.jsx)("h3", {
                        className: "text-white font-semibold text-lg",
                        children: "Hey!"
                    }), (0, t.jsx)("p", {
                        className: "text-sm text-[#8e8e93] mt-1",
                        children: "Skidding has never been so easy!"
                    })]
                })]
            }), (0, t.jsxs)("div", {
                className: "flex flex-col space-y-4",
                children: [(0, t.jsx)("h4", {
                    className: "text-white font-medium text-base tracking-wide uppercase text-xs text-[#8e8e93]",
                    children: "environment unc test"
                }), (0, t.jsx)(s, {})]
            })]
        });
        return (0, t.jsxs)("section", {
            className: "relative w-full min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden",
            children: [(0, t.jsxs)("div", {
                className: "w-[92%] max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10",
                children: [(0, t.jsxs)("div", {
                    className: "lg:col-span-7 flex flex-col space-y-6 text-left",
                    children: [(0, t.jsx)("div", {
                        className: "inline-flex",
                        children: (0, t.jsx)("span", {
                            className: "px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider text-white uppercase bg-white/5 border border-white/10 shadow-inner",
                            children: "ROBLOX LUAU SCRIPT TOOLING"
                        })
                    }), (0, t.jsxs)("h1", {
                        className: "text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight font-sans",
                        children: ["Best", (0, t.jsx)("br", {}), (0, t.jsx)("span", {
                            className: "inline-block mt-2 px-4 py-1 rounded-2xl border-2 border-white text-black bg-white shadow-xl shadow-white/5 text-glow-subtle",
                            children: "Stable"
                        }), (0, t.jsx)("br", {}), "environment logger."]
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-wrap gap-4 pt-4",
                        children: [(0, t.jsx)(n.default, {
                            href: "/discord",
                            children: (0, t.jsx)("button", {
                                className: "glass-button-primary px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-xl cursor-pointer",
                                children: "Get Logger"
                            })
                        }), (0, t.jsx)("button", {
                            onClick: () => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                }), setTimeout(() => {
                                    l(!0)
                                }, 150)
                            },
                            className: "glass-button-secondary px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider cursor-pointer",
                            children: "Show Demo"
                        })]
                    }), (0, t.jsx)("div", {
                        className: "flex items-center gap-4 pt-6 text-sm text-[#8e8e93]",
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [(0, t.jsx)("span", {
                                className: "text-white font-bold text-lg",
                                children: "✓"
                            }), (0, t.jsx)("span", {
                                children: "Trusted by 3,100+ people"
                            })]
                        })
                    })]
                }), (0, t.jsx)("div", {
                    className: "lg:col-span-5 flex justify-center lg:justify-end",
                    children: (0, t.jsx)("div", {
                        className: "glass-panel w-full max-w-[440px] rounded-3xl p-8 flex flex-col space-y-8 border-glow-white",
                        children: a()
                    })
                })]
            }), e && (0, t.jsxs)("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-0 cursor-zoom-out animate-backdrop-fade",
                    onClick: () => l(!1)
                }), (0, t.jsxs)("div", {
                    className: "glass-panel w-full max-w-[440px] rounded-3xl p-8 flex flex-col space-y-8 border-glow-white z-10 animate-modal-zoom relative border-white/30 shadow-[0_0_80px_rgba(255,255,255,0.15)] ring-1 ring-white/10",
                    onClick: e => e.stopPropagation(),
                    children: [(0, t.jsx)("button", {
                        onClick: () => l(!1),
                        className: "absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors cursor-pointer",
                        title: "Close Demo",
                        children: (0, t.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        })
                    }), a()]
                })]
            })]
        })
    }], 7887)
}, 37950, e => {
    "use strict";
    var t = e.i(43476);
    let r = [{
        stat: "98% unc",
        label: "Why Aspect is Good",
        desc: "Comparing Aspect to Galactic Dumper, reveal.lol, Threaded etc. Aspect blows them out of the water. Galactic couldn't even get to the part where the results show the UNC and Reveal couldn't do that either, while Aspect can get to the results and gets a solid 100-50% result! (depending on if ur using a good unc test or not)",
        icon: (0, t.jsx)("svg", {
            className: "w-5 h-5 text-white",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M13 10V3L4 14h7v7l9-11h-7z"
            })
        })
    }, {
        stat: "13/8",
        label: "Can Env 13/8 of Obfuscators",
        desc: "Tested with moonveil, moonsec, old luraph, wynfuscate, ib1/ib2, etc",
        icon: (0, t.jsx)("svg", {
            className: "w-5 h-5 text-white",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
            })
        })
    }, {
        stat: "za1k & fear",
        label: "Active Developers",
        desc: "Made by za1k and fear with love",
        icon: (0, t.jsx)("svg", {
            className: "w-5 h-5 text-white",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            })
        })
    }];
    e.s(["default", 0, function () {
        return (0, t.jsx)("section", {
            className: "relative w-full py-16 flex items-center justify-center overflow-hidden",
            children: (0, t.jsxs)("div", {
                className: "w-[92%] max-w-7xl z-10 flex flex-col space-y-12",
                children: [(0, t.jsxs)("div", {
                    className: "flex flex-col space-y-3 text-left max-w-xl",
                    children: [(0, t.jsx)("h2", {
                        className: "text-2xl md:text-3xl font-bold tracking-tight text-white font-sans text-glow-subtle",
                        children: "Why we are goated"
                    }), (0, t.jsx)("p", {
                        className: "text-sm md:text-base text-[#a3a3a3] font-light",
                        children: "Comprehensive logging and telemetry tooling for Roblox Luau executors. Audit env globals, inspect table functions, and securely flat-track calls."
                    })]
                }), (0, t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-start",
                    children: r.map((e, r) => (0, t.jsxs)("div", {
                        className: "glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col space-y-4 h-fit",
                        children: [(0, t.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [(0, t.jsx)("div", {
                                className: "p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center",
                                children: e.icon
                            }), (0, t.jsx)("span", {
                                className: "text-lg md:text-xl font-bold tracking-tight text-white font-mono text-glow-subtle",
                                children: e.stat
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col space-y-2",
                            children: [(0, t.jsx)("h3", {
                                className: "text-white font-semibold text-sm tracking-wide",
                                children: e.label
                            }), (0, t.jsx)("p", {
                                className: "text-xs text-[#8e8e93] font-light leading-relaxed",
                                children: e.desc
                            })]
                        })]
                    }, r))
                })]
            })
        })
    }])
}]);
