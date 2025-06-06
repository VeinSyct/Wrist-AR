!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.fp = e()) : (t.fp = e());
})("undefined" != typeof self ? self : this, function () {
    return (function (t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var i = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        n.d(
                            r,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return r;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
    })([
        function (t, e, n) {
            "use strict";
            n.r(e);
            var r = {};
            function i(t) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            n.r(r),
                n.d(r, "VictoryGesture", function () {
                    return L;
                }),
                n.d(r, "ThumbsUpGesture", function () {
                    return P;
                });
            var a = {
                    Thumb: 0,
                    Index: 1,
                    Middle: 2,
                    Ring: 3,
                    Pinky: 4,
                    all: [0, 1, 2, 3, 4],
                    nameMapping: { 0: "Thumb", 1: "Index", 2: "Middle", 3: "Ring", 4: "Pinky" },
                    pointsMapping: {
                        0: [
                            [0, 1],
                            [1, 2],
                            [2, 3],
                            [3, 4],
                        ],
                        1: [
                            [0, 5],
                            [5, 6],
                            [6, 7],
                            [7, 8],
                        ],
                        2: [
                            [0, 9],
                            [9, 10],
                            [10, 11],
                            [11, 12],
                        ],
                        3: [
                            [0, 13],
                            [13, 14],
                            [14, 15],
                            [15, 16],
                        ],
                        4: [
                            [0, 17],
                            [17, 18],
                            [18, 19],
                            [19, 20],
                        ],
                    },
                    getName: function (t) {
                        return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t];
                    },
                    getPoints: function (t) {
                        return void 0 !== i(this.pointsMapping[t]) && this.pointsMapping[t];
                    },
                },
                o = {
                    NoCurl: 0,
                    HalfCurl: 1,
                    FullCurl: 2,
                    nameMapping: { 0: "No Curl", 1: "Half Curl", 2: "Full Curl" },
                    getName: function (t) {
                        return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t];
                    },
                },
                l = {
                    VerticalUp: 0,
                    VerticalDown: 1,
                    HorizontalLeft: 2,
                    HorizontalRight: 3,
                    DiagonalUpRight: 4,
                    DiagonalUpLeft: 5,
                    DiagonalDownRight: 6,
                    DiagonalDownLeft: 7,
                    nameMapping: { 0: "Vertical Up", 1: "Vertical Down", 2: "Horizontal Left", 3: "Horizontal Right", 4: "Diagonal Up Right", 5: "Diagonal Up Left", 6: "Diagonal Down Right", 7: "Diagonal Down Left" },
                    getName: function (t) {
                        return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t];
                    },
                };
            function u(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var r = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: i,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a,
                    o = !0,
                    l = !1;
                return {
                    s: function () {
                        n = n.call(t);
                    },
                    n: function () {
                        var t = n.next();
                        return (o = t.done), t;
                    },
                    e: function (t) {
                        (l = !0), (a = t);
                    },
                    f: function () {
                        try {
                            o || null == n.return || n.return();
                        } finally {
                            if (l) throw a;
                        }
                    },
                };
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? f(Object(n), !0).forEach(function (e) {
                              d(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : f(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          });
                }
                return t;
            }
            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var p = (function () {
                function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.options = s(s({}, { HALF_CURL_START_LIMIT: 60, NO_CURL_START_LIMIT: 130, DISTANCE_VOTE_POWER: 1.1, SINGLE_ANGLE_VOTE_POWER: 0.9, TOTAL_ANGLE_VOTE_POWER: 1.6 }), e));
                }
                var e, n, r;
                return (
                    (e = t),
                    (n = [
                        {
                            key: "estimate",
                            value: function (t) {
                                var e,
                                    n = [],
                                    r = [],
                                    i = u(a.all);
                                try {
                                    for (i.s(); !(e = i.n()).done; ) {
                                        var o,
                                            l = e.value,
                                            c = a.getPoints(l),
                                            f = [],
                                            s = [],
                                            d = u(c);
                                        try {
                                            for (d.s(); !(o = d.n()).done; ) {
                                                var h = o.value,
                                                    p = t[h[0]],
                                                    y = t[h[1]],
                                                    g = this.getSlopes(p, y),
                                                    v = g[0],
                                                    m = g[1];
                                                f.push(v), s.push(m);
                                            }
                                        } catch (t) {
                                            d.e(t);
                                        } finally {
                                            d.f();
                                        }
                                        n.push(f), r.push(s);
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                var b,
                                    D = [],
                                    M = [],
                                    O = u(a.all);
                                try {
                                    for (O.s(); !(b = O.n()).done; ) {
                                        var w = b.value,
                                            T = w == a.Thumb ? 1 : 0,
                                            S = a.getPoints(w),
                                            C = t[S[T][0]],
                                            A = t[S[T + 1][1]],
                                            R = t[S[3][1]],
                                            I = this.estimateFingerCurl(C, A, R),
                                            L = this.calculateFingerDirection(C, A, R, n[w].slice(T));
                                        (D[w] = I), (M[w] = L);
                                    }
                                } catch (t) {
                                    O.e(t);
                                } finally {
                                    O.f();
                                }
                                return { curls: D, directions: M };
                            },
                        },
                        {
                            key: "getSlopes",
                            value: function (t, e) {
                                var n = this.calculateSlope(t[0], t[1], e[0], e[1]);
                                return 2 == t.length ? n : [n, this.calculateSlope(t[1], t[2], e[1], e[2])];
                            },
                        },
                        {
                            key: "angleOrientationAt",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                    n = 0,
                                    r = 0,
                                    i = 0;
                                return t >= 75 && t <= 105 ? (n = 1 * e) : t >= 25 && t <= 155 ? (r = 1 * e) : (i = 1 * e), [n, r, i];
                            },
                        },
                        {
                            key: "estimateFingerCurl",
                            value: function (t, e, n) {
                                var r = t[0] - e[0],
                                    i = t[0] - n[0],
                                    a = e[0] - n[0],
                                    l = t[1] - e[1],
                                    u = t[1] - n[1],
                                    c = e[1] - n[1],
                                    f = t[2] - e[2],
                                    s = t[2] - n[2],
                                    d = e[2] - n[2],
                                    h = Math.sqrt(r * r + l * l + f * f),
                                    p = Math.sqrt(i * i + u * u + s * s),
                                    y = Math.sqrt(a * a + c * c + d * d),
                                    g = (y * y + h * h - p * p) / (2 * y * h);
                                g > 1 ? (g = 1) : g < -1 && (g = -1);
                                var v = Math.acos(g);
                                return (v = (57.2958 * v) % 180) > this.options.NO_CURL_START_LIMIT ? o.NoCurl : v > this.options.HALF_CURL_START_LIMIT ? o.HalfCurl : o.FullCurl;
                            },
                        },
                        {
                            key: "estimateHorizontalDirection",
                            value: function (t, e, n, r) {
                                return r == Math.abs(t) ? (t > 0 ? l.HorizontalLeft : l.HorizontalRight) : r == Math.abs(e) ? (e > 0 ? l.HorizontalLeft : l.HorizontalRight) : n > 0 ? l.HorizontalLeft : l.HorizontalRight;
                            },
                        },
                        {
                            key: "estimateVerticalDirection",
                            value: function (t, e, n, r) {
                                return r == Math.abs(t) ? (t < 0 ? l.VerticalDown : l.VerticalUp) : r == Math.abs(e) ? (e < 0 ? l.VerticalDown : l.VerticalUp) : n < 0 ? l.VerticalDown : l.VerticalUp;
                            },
                        },
                        {
                            key: "estimateDiagonalDirection",
                            value: function (t, e, n, r, i, a, o, u) {
                                var c = this.estimateVerticalDirection(t, e, n, r),
                                    f = this.estimateHorizontalDirection(i, a, o, u);
                                return c == l.VerticalUp ? (f == l.HorizontalLeft ? l.DiagonalUpLeft : l.DiagonalUpRight) : f == l.HorizontalLeft ? l.DiagonalDownLeft : l.DiagonalDownRight;
                            },
                        },
                        {
                            key: "calculateFingerDirection",
                            value: function (t, e, n, r) {
                                var i = t[0] - e[0],
                                    a = t[0] - n[0],
                                    o = e[0] - n[0],
                                    l = t[1] - e[1],
                                    c = t[1] - n[1],
                                    f = e[1] - n[1],
                                    s = Math.max(Math.abs(i), Math.abs(a), Math.abs(o)),
                                    d = Math.max(Math.abs(l), Math.abs(c), Math.abs(f)),
                                    h = 0,
                                    p = 0,
                                    y = 0,
                                    g = d / (s + 1e-5);
                                g > 1.5 ? (h += this.options.DISTANCE_VOTE_POWER) : g > 0.66 ? (p += this.options.DISTANCE_VOTE_POWER) : (y += this.options.DISTANCE_VOTE_POWER);
                                var v = Math.sqrt(i * i + l * l),
                                    m = Math.sqrt(a * a + c * c),
                                    b = Math.sqrt(o * o + f * f),
                                    D = Math.max(v, m, b),
                                    M = t[0],
                                    O = t[1],
                                    w = n[0],
                                    T = n[1];
                                D == v ? ((w = n[0]), (T = n[1])) : D == b && ((M = e[0]), (O = e[1]));
                                var S = [M, O],
                                    C = [w, T],
                                    A = this.getSlopes(S, C),
                                    R = this.angleOrientationAt(A, this.options.TOTAL_ANGLE_VOTE_POWER);
                                (h += R[0]), (p += R[1]), (y += R[2]);
                                var I,
                                    L = u(r);
                                try {
                                    for (L.s(); !(I = L.n()).done; ) {
                                        var _ = I.value,
                                            E = this.angleOrientationAt(_, this.options.SINGLE_ANGLE_VOTE_POWER);
                                        (h += E[0]), (p += E[1]), (y += E[2]);
                                    }
                                } catch (t) {
                                    L.e(t);
                                } finally {
                                    L.f();
                                }
                                return h == Math.max(h, p, y) ? this.estimateVerticalDirection(c, l, f, d) : y == Math.max(p, y) ? this.estimateHorizontalDirection(a, i, o, s) : this.estimateDiagonalDirection(c, l, f, d, a, i, o, s);
                            },
                        },
                        {
                            key: "calculateSlope",
                            value: function (t, e, n, r) {
                                var i = (e - r) / (t - n),
                                    a = (180 * Math.atan(i)) / Math.PI;
                                return a <= 0 ? (a = -a) : a > 0 && (a = 180 - a), a;
                            },
                        },
                    ]) && h(e.prototype, n),
                    r && h(e, r),
                    t
                );
            })();
            function y(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!n) {
                    if (
                        Array.isArray(t) ||
                        (n = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return g(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        n && (t = n);
                        var r = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: i,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a,
                    o = !0,
                    l = !1;
                return {
                    s: function () {
                        n = n.call(t);
                    },
                    n: function () {
                        var t = n.next();
                        return (o = t.done), t;
                    },
                    e: function (t) {
                        (l = !0), (a = t);
                    },
                    f: function () {
                        try {
                            o || null == n.return || n.return();
                        } finally {
                            if (l) throw a;
                        }
                    },
                };
            }
            function g(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function m(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function b(t, e) {
                !(function (t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
                })(t, e),
                    e.add(t);
            }
            var D = new WeakSet(),
                M = (function () {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        v(this, t), b(this, D), (this.estimator = new p(n)), (this.gestures = e);
                    }
                    var e, n, r;
                    return (
                        (e = t),
                        (n = [
                            {
                                key: "estimate",
                                value: function (t, e) {
                                    var n,
                                        r = [],
                                        i = (function (t, e, n) {
                                            if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                                            return n;
                                        })(this, D, O).call(this, t),
                                        u = this.estimator.estimate(i),
                                        c = [],
                                        f = y(a.all);
                                    try {
                                        for (f.s(); !(n = f.n()).done; ) {
                                            var s = n.value;
                                            c.push([a.getName(s), o.getName(u.curls[s]), l.getName(u.directions[s])]);
                                        }
                                    } catch (t) {
                                        f.e(t);
                                    } finally {
                                        f.f();
                                    }
                                    var d,
                                        h = y(this.gestures);
                                    try {
                                        for (h.s(); !(d = h.n()).done; ) {
                                            var p = d.value,
                                                g = p.matchAgainst(u.curls, u.directions);
                                            g >= e && r.push({ name: p.name, score: g });
                                        }
                                    } catch (t) {
                                        h.e(t);
                                    } finally {
                                        h.f();
                                    }
                                    return { poseData: c, gestures: r };
                                },
                            },
                        ]) && m(e.prototype, n),
                        r && m(e, r),
                        t
                    );
                })();
            function O(t) {
                return t.map(function (t) {
                    return [t.x, t.y, t.z];
                });
            }
            function w(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null == n) return;
                        var r,
                            i,
                            a = [],
                            o = !0,
                            l = !1;
                        try {
                            for (n = n.call(t); !(o = (r = n.next()).done) && (a.push(r.value), !e || a.length !== e); o = !0);
                        } catch (t) {
                            (l = !0), (i = t);
                        } finally {
                            try {
                                o || null == n.return || n.return();
                            } finally {
                                if (l) throw i;
                            }
                        }
                        return a;
                    })(t, e) ||
                    S(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function T(t, e) {
                var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = S(t)) || (e && t && "number" == typeof t.length)) {
                        n && (t = n);
                        var r = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: i,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var a,
                    o = !0,
                    l = !1;
                return {
                    s: function () {
                        n = n.call(t);
                    },
                    n: function () {
                        var t = n.next();
                        return (o = t.done), t;
                    },
                    e: function (t) {
                        (l = !0), (a = t);
                    },
                    f: function () {
                        try {
                            o || null == n.return || n.return();
                        } finally {
                            if (l) throw a;
                        }
                    },
                };
            }
            function S(t, e) {
                if (t) {
                    if ("string" == typeof t) return C(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(t, e) : void 0;
                }
            }
            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function A(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var R = (function () {
                    function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                            (this.name = e),
                            (this.curls = {}),
                            (this.directions = {});
                    }
                    var e, n, r;
                    return (
                        (e = t),
                        (n = [
                            {
                                key: "addCurl",
                                value: function (t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                    void 0 === this.curls[t] && (this.curls[t] = []), this.curls[t].push([e, n]);
                                },
                            },
                            {
                                key: "addDirection",
                                value: function (t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                    void 0 === this.directions[t] && (this.directions[t] = []), this.directions[t].push([e, n]);
                                },
                            },
                            {
                                key: "matchAgainst",
                                value: function (t, e) {
                                    var n = 0,
                                        r = 0;
                                    for (var i in t) {
                                        var a = t[i],
                                            o = this.curls[i];
                                        if (void 0 !== o) {
                                            r++;
                                            var l,
                                                u = !1,
                                                c = 0,
                                                f = T(o);
                                            try {
                                                for (f.s(); !(l = f.n()).done; ) {
                                                    var s = w(l.value, 2),
                                                        d = s[0],
                                                        h = s[1];
                                                    if (a == d) {
                                                        (n += h), (c = Math.max(c, h)), (u = !0);
                                                        break;
                                                    }
                                                }
                                            } catch (t) {
                                                f.e(t);
                                            } finally {
                                                f.f();
                                            }
                                            u || (n -= c);
                                        }
                                    }
                                    for (var p in e) {
                                        var y = e[p],
                                            g = this.directions[p];
                                        if (void 0 !== g) {
                                            r++;
                                            var v,
                                                m = !1,
                                                b = 0,
                                                D = T(g);
                                            try {
                                                for (D.s(); !(v = D.n()).done; ) {
                                                    var M = w(v.value, 2),
                                                        O = M[0],
                                                        S = M[1];
                                                    if (y == O) {
                                                        (n += S), (b = Math.max(b, S)), (m = !0);
                                                        break;
                                                    }
                                                }
                                            } catch (t) {
                                                D.e(t);
                                            } finally {
                                                D.f();
                                            }
                                            m || (n -= b);
                                        }
                                    }
                                    return (n / r) * 10;
                                },
                            },
                        ]) && A(e.prototype, n),
                        r && A(e, r),
                        t
                    );
                })(),
                I = new R("victory");
            I.addDirection(a.Thumb, l.VerticalUp, 1),
                I.addDirection(a.Thumb, l.DiagonalUpLeft, 1),
                I.addDirection(a.Thumb, l.DiagonalUpRight, 1),
                I.addCurl(a.Index, o.NoCurl, 1),
                I.addDirection(a.Index, l.VerticalUp, 1),
                I.addDirection(a.Index, l.DiagonalUpLeft, 1),
                I.addDirection(a.Index, l.DiagonalUpRight, 1),
                I.addDirection(a.Index, l.HorizontalLeft, 1),
                I.addDirection(a.Index, l.HorizontalRight, 1),
                I.addCurl(a.Middle, o.NoCurl, 1),
                I.addDirection(a.Middle, l.VerticalUp, 1),
                I.addDirection(a.Middle, l.DiagonalUpLeft, 1),
                I.addDirection(a.Middle, l.DiagonalUpRight, 1),
                I.addDirection(a.Middle, l.HorizontalLeft, 1),
                I.addDirection(a.Middle, l.HorizontalRight, 1),
                I.addCurl(a.Ring, o.FullCurl, 1),
                I.addCurl(a.Ring, o.HalfCurl, 0.9),
                I.addCurl(a.Pinky, o.FullCurl, 1),
                I.addCurl(a.Pinky, o.HalfCurl, 0.9);
            var L = I,
                _ = new R("thumbs_up");
            _.addCurl(a.Thumb, o.NoCurl, 1), _.addDirection(a.Thumb, l.VerticalUp, 1), _.addDirection(a.Thumb, l.DiagonalUpLeft, 0.9), _.addDirection(a.Thumb, l.DiagonalUpRight, 0.9);
            for (var E = 0, j = [a.Index, a.Middle, a.Ring, a.Pinky]; E < j.length; E++) {
                var x = j[E];
                _.addCurl(x, o.FullCurl, 1), _.addCurl(x, o.HalfCurl, 0.9);
            }
            _.addDirection(a.Index, l.DiagonalUpLeft, 1), _.addDirection(a.Index, l.HorizontalLeft, 1), _.addDirection(a.Index, l.HorizontalRight, 1), _.addDirection(a.Index, l.DiagonalUpRight, 1);
            var P = _;
            e.default = { GestureEstimator: M, GestureDescription: R, Finger: a, FingerCurl: o, FingerDirection: l, Gestures: r };
        },
    ]).default;
});