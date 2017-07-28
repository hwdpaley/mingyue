/**
 * This file is part of Qunee for HTML5.
 * Copyright (c) 2015 by qunee.com
 **/
window.Q = function (t, i, e) {
    "use strict";
    function n(t, i, e) {
        if (t[jr]()) {
            var s = t._fs || t.getChildren();
            if (s) {
                s = s._ix || s;
                for (var r = 0, a = s.length; a > r; r++)if (i[Br](e, s[r]) === !1 || n(s[r], i, e) === !1)return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t.hasChildren())return t instanceof fj ? t : null;
        for (var i, e = t._fs._ix, n = e[$r] - 1; n >= 0;) {
            if (i = e[n], i = s(i))return i;
            n--
        }
        return null
    }

    function r(t, i, e, n) {
        return n ? a(t, i, e) : h(t, i, e)
    }

    function a(t, i, e) {
        t = t._ix || t;
        for (var n, s = 0, r = t[$r]; r > s; s++)if (n = t[s], n.hasChildren() && !a(n.children, i, e) || i[Br](e, n) === !1)return !1;
        return !0
    }

    function h(t, i, e) {
        t = t._ix || t;
        for (var n, s = 0, r = t[$r]; r > s; s++)if (n = t[s], i[Br](e, n) === !1 || n.hasChildren() && !h(n[Gr], i, e))return !1;
        return !0
    }

    function o(t, i, e, n) {
        return n ? _(t, i, e) : f(t, i, e)
    }

    function _(t, i, e) {
        t = t._ix || t;
        for (var n, s = t.length, r = s - 1; r >= 0; r--)if (n = t[r], n[jr]() && !_(n[Gr], i, e) || i.call(e, n) === !1)return !1;
        return !0
    }

    function f(t, i, e) {
        t = t._ix || t;
        for (var n, s = t[$r], r = s - 1; r >= 0; r--)if (n = t[r], i[Br](e, n) === !1 || n[jr]() && !f(n[Gr], i, e))return !1;
        return !0
    }

    function c(t, i, e) {
        for (var n, s = (t._ix || t)[Fr](0); s.length;) {
            n = s[0], s = s[zr](1);
            var r = i.call(e, n);
            if (r === !1)return !1;
            if (n.hasChildren()) {
                var a = n[Gr];
                a = a._ix || a, s = s[Yr](a)
            }
        }
        return !0
    }

    function u(t, i, e) {
        for (var n, s = (t._ix || t).slice(0); s.length;) {
            n = s[s.length - 1], s = s[zr](0, s.length - 1);
            var r = i.call(e, n);
            if (r === !1)return !1;
            if (n[jr]()) {
                var a = n.children;
                a = a._ix || a, s = s[Yr](a)
            }
        }
        return !0
    }

    function d(t, i) {
        function e(t, e) {
            for (var n = t.length, s = e[$r], r = n + s, a = new Array(r), h = 0, o = 0, _ = 0; r > _;)a[_++] = h === n ? e[o++] : o === s || i(t[h], e[o]) <= 0 ? t[h++] : e[o++];
            return a
        }

        function n(t) {
            var i = t.length, s = Math.ceil(i / 2);
            return 1 >= i ? t : e(n(t[Fr](0, s)), n(t[Fr](s)))
        }

        return n(t)
    }

    function l(t, i, e, n) {
        t instanceof ED && (t = t._ix);
        for (var s = 0, r = (t._ix || t)[$r]; r > s; s++) {
            var a = i.call(e, t[s], s, n);
            if (a === !1)return !1
        }
        return !0
    }

    function v(t, i, e) {
        for (var n = t instanceof ED, s = t._ix || t, r = 0, a = s[$r]; a > r; r++) {
            var h = s[r];
            i.call(e, h) && (n ? t.remove(h) : t[zr](r, 1), r--, a--)
        }
    }

    function b(t, i, e, n) {
        t instanceof ED && (t = t._ix);
        for (var s = (t._ix || t)[$r] - 1; s >= 0; s--) {
            var r = i[Br](e, t[s], s, n);
            if (r === !1)return !1
        }
        return !0
    }

    function g(t) {
        if (t[Hr]instanceof Function)return t[Hr](!0);
        var i, e = [];
        return l(t, function (t) {
            i = t && t.clone instanceof Function ? t[Hr]() : t, e.push(i)
        }, this), e
    }

    function y(t, i, n) {
        n === e || 0 > n ? t.push(i) : t[zr](n, 0, i)
    }

    function E(t, i) {
        var e = t[Ur](i);
        return 0 > e || e >= t.length ? !1 : t[zr](e, 1)
    }

    function p(t, i) {
        var e = !1;
        return l(t, function (t) {
            return i == t ? (e = !0, !1) : void 0
        }), e
    }

    function m(t, i, e) {
        return i instanceof Object ? t = z(i, t) : i && !e && (e = parseInt(i)), i && !e && (e = parseInt(i)), e ? setTimeout(t, e) : setTimeout(t)
    }

    function x(i, e) {
        return e && (i = z(e, i)), t.requestAnimationFrame(i)
    }

    function T(t, i) {
        return t.className = i, t
    }

    function w(t, i) {
        if (!t.hasOwnProperty(qr)) {
            var e = t.getAttribute(Wr);
            if (!e)return T(t, i);
            for (var n = e.split(Xr), s = 0, r = n.length; r > s; s++)if (n[s] == i)return;
            return e += Xr + i, T(t, e)
        }
        t.classList[Vr](i)
    }

    function O(t, i) {
        if (!t.hasOwnProperty(qr)) {
            var e = t.getAttribute(Wr);
            if (!e || !e[Ur](i))return;
            for (var n = "", s = e[Kr](Xr), r = 0, a = s[$r]; a > r; r++)s[r] != i && (n += s[r] + Xr);
            return T(t, n)
        }
        t[qr][Zr](i)
    }

    function S(t) {
        return t instanceof Number || Jr == typeof t
    }

    function k(t) {
        return t !== e && (t instanceof String || Qr == typeof t)
    }

    function I(t) {
        return t !== e && (t instanceof Boolean || ta == typeof t)
    }

    function L(t) {
        return Array[ia](t)
    }

    function A(i) {
        i || (i = t.event), i[ea] ? i[ea]() : i[na] = !1
    }

    function C(i) {
        i || (i = t.event), i.stopPropagation ? i[sa]() : i[ra] || (i[ra] = !0)
    }

    function R(t) {
        A(t), C(t)
    }

    function P(t) {
        return Math.floor(Math.random() * t)
    }

    function D() {
        return Math.random() >= .5
    }

    function M(t, i) {
        var e = t;
        for (var n in i)if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(n), r = i.__lookupSetter__(n);
            s || r ? (s && e.__defineGetter__(n, s), r && e.__defineSetter__(n, r)) : e[n] = i[n]
        } else e[n] = i[n];
        return e
    }

    function N(t, i, e) {
        if (!(t instanceof Function))throw new Error("subclass must be type of Function");
        var n = null;
        aa == typeof i && (n = i, i = t, t = function () {
            i[ha](this, arguments)
        });
        var s = t.prototype, r = function () {
        };
        return r.prototype = i.prototype, t.prototype = new r, t.superclass = i.prototype, t[oa].constructor = i, M(t.prototype, s), n && M(t[_a], n), e && M(t.prototype, e), t[_a][Wr] = t, t
    }

    function j(t, i, e) {
        return B(t, i, "constructor", e)
    }

    function B(t, i, e, n) {
        var s = i[oa];
        if (s) {
            var r = s[e];
            return r ? r.apply(t, n) : void 0
        }
    }

    function $(t) {
        return t[fa](4)
    }

    function G(t) {
        delete t[ca], delete t.handle
    }

    function F(t, i) {
        t[i] && (G(t[i]), delete t[i])
    }

    function z(t, i) {
        var e = function () {
            return e[ua][ha](e.scope, arguments)
        };
        return e.handle = i, e.scope = t, e
    }

    function Y(t, i) {
        return t == i
    }

    function H(t, i, n, s, r) {
        if (s)return void Object.defineProperty(t, i, {value: n, enumerable: !0});
        var a = {configurable: !0, enumerable: !0}, h = da + i;
        n !== e && (t[h] = n), a[la] = function () {
            return this[h]
        }, a.set = function (t) {
            var e = this[h];
            if (Y(e, t))return !1;
            var n = new BD(this, i, t, e);
            return this.beforeEvent(n) ? (this[h] = t, r && r.call(this, t, e), this[va](n), !0) : !1
        }, Object.defineProperty(t, i, a)
    }

    function U(t, i) {
        for (var e = 0, n = i[$r]; n > e; e++) {
            var s = i[e];
            H(t, s.name || s, s.defaultValue || s.value, s.readOnly, s.onSetting)
        }
    }

    function q(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math.random());
            return ba + (i >> 16 & 255) + ga + (i >> 8 & 255) + ga + (255 & i) + ga + t.toFixed(2) + ya
        }
        return V(Math.floor(16777215 * Math.random()))
    }

    function W(t) {
        return t > 0 ? Math[Ea](t) : Math[pa](t)
    }

    function X(t) {
        return t > 0 ? Math.ceil(t) : Math[Ea](t)
    }

    function V(t) {
        return 16777216 > t ? ma + (xa + t.toString(16)).slice(-6) : ba + (t >> 16 & 255) + ga + (t >> 8 & 255) + ga + (255 & t) + ga + ((t >> 24 & 255) / 255).toFixed(2) + ya
    }

    function K(t, i, e) {
        aa != typeof e || e.hasOwnProperty(Ta) || (e[Ta] = !0), Object.defineProperty(t, i, e)
    }

    function Z(t, i) {
        for (var e in i)if (wa != e[0]) {
            var n = i[e];
            aa != typeof n || n.hasOwnProperty(Ta) || (n.enumerable = !0)
        }
        Object.defineProperties(t, i)
    }

    function J(i, e) {
        e || (e = t);
        for (var n = i[Kr](Oa), s = 0, r = n[$r]; r > s; s++) {
            var a = n[s];
            e = e[a]
        }
        return e
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== e
    }

    function ti(i) {
        t.console && console.log(i)
    }

    function ii(i) {
        t[Sa] && console[ka](i)
    }

    function ei(i) {
        t[Sa] && console[Ia](i)
    }

    function ni(t, i, e) {
        var n, s, r;
        0 == t._n9 ? (n = -1, r = 0, s = i) : 0 == t._na ? (n = 0, r = 1, s = e) : (n = -1 / t._n9, s = (t._n9 - n) * i + t._nc, r = 1);
        var a = new wD;
        return a._n9 = n, a._nc = s, a._na = r, a._n7 = i, a._n6 = e, a._la = Math.atan2(n, r), a._naos = Math.cos(a._la), a._sin = Math[La](a._la), a
    }

    function si(t, i, e, n, s) {
        var r, a;
        i > n ? r = -1 : n > i && (r = 1), e > s ? a = -1 : s > e && (a = 1);
        var h, o;
        if (!r)return o = 0 > a ? t.y : t.bottom, {x: i, y: o};
        if (!a)return h = 0 > r ? t.x : t[Aa], {x: h, y: e};
        var _ = (e - s) / (i - n), f = e - _ * i, c = 0 > r ? i - t.x : i - t[Aa], u = 0 > a ? e - t.y : e - t.bottom;
        return Math.abs(_) >= Math.abs(u / c) ? (o = 0 > a ? t.y : t[Ca], h = (o - f) / _) : (h = 0 > r ? t.x : t[Aa], o = _ * h + f), {
            x: h,
            y: o
        }
    }

    function ri(t, i, e, n, s, r, a, h) {
        return 0 >= a || 0 >= h || 0 >= e || 0 >= n ? !1 : (a += s, h += r, e += t, n += i, (s > a || a > t) && (r > h || h > i) && (t > e || e > s) && (i > n || n > r))
    }

    function ai(t, i, e, n, s, r) {
        return s >= t && t + e >= s && r >= i && i + n >= r
    }

    function hi(t, i, e, n, s, r, a, h) {
        return s >= t && r >= i && t + e >= s + a && i + n >= r + h
    }

    function oi(t, i, n) {
        if (!t)return {x: 0, y: 0};
        if (t.x !== e)return {x: t.x, y: t.y};
        var s, r, a = t[Ra], h = t[Pa];
        switch (a) {
            case LD:
                s = 0;
                break;
            case CD:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (h) {
            case RD:
                r = 0;
                break;
            case DD:
                r = n;
                break;
            default:
                r = n / 2
        }
        return {x: s, y: r}
    }

    function _i(t, i, e) {
        t[Gr][Vr](i, e), t[Da](i, e)
    }

    function fi(t, i) {
        t._fs && (t._fs[Zr](i), t[Ma](i))
    }

    function ci(t) {
        return t.replace(/^-ms-/, Na).replace(/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function ui(t, i) {
        var e = t.style;
        if (!e)return !1;
        var n, s;
        for (n in i)i.hasOwnProperty(n) && (s = iM(n)) && (e[s] = i[n]);
        return t
    }

    function di(t, i, e) {
        (i = iM(i)) && (t.style[i] = e)
    }

    function li(t, i) {
        return QD ? QD[ja] ? void QD[ja](t + Ba + i + $a, 0) : void(QD[Ga] && QD[Ga](t, i, 0)) : !1
    }

    function vi(i, e) {
        i.touches && (i = i.changedTouches && i[Fa].length ? i[Fa][0] : i.touches[0]);
        var n = e[za](), s = i.clientX || 0, r = i.clientY || 0;
        return dD && oD && (t[Ya] && s == i.pageX && (s -= t[Ya]), t.pageYOffset && r == i.pageY && (r -= t.pageYOffset)), {
            x: s - n[Ha],
            y: r - n[Ua]
        }
    }

    function bi(t, i) {
        return this[da + i] = nM(t, i, function (t) {
            return pi[Br](this, t, i)
        }, !1, this)
    }

    function gi(t) {
        var i = this;
        return t[qa] = function () {
            return i._kd[Wa](t)
        }, t.getUI = function () {
            return i._kd[Xa](t)
        }, t
    }

    function yi(t) {
        this.__naancelClick || (this.__nalickEvent = t, this.__nalickTime ? this.__nalickTime++ : (this.__nalickTime = 1, setTimeout(z(this, function () {
            if (this.__nalickEvent) {
                var t = this.__nalickTime;
                this.__nalickTime = 0, 1 == t ? this._id(this.__nalickEvent, Va) : t > 1 && this._id(this.__nalickEvent, Ka), this.__nalickEvent = null
            }
        }), gD[Za])))
    }

    function Ei(t) {
        if (t[Ja]) {
            for (var i = t.touches, e = [], n = 0, s = i.length; s > n; n++) {
                var r = i[n];
                e.push({pageX: r.pageX, pageY: r.pageY, clientX: r[Qa], clientY: r[th]})
            }
            return {timeStamp: t.timeStamp, touches: e, scale: t.scale}
        }
        return {timeStamp: t[ih], x: t.clientX, y: t[th]}
    }

    function pi(t, i) {
        switch (t = gi.call(this, t), i) {
            case"touchstart":
                if (t.touches[$r] >= 2)return this._9k = Ei(t), this._nal[eh](), this._22(), void(this._nap || (this._nap = t, this._9k = Ei(t)));
            case"mousedown":
                if (R(t), this._id(t, nh), this._nap = t, this._9k = Ei(t), t[sh] || (this.__onLongPressFunction ? this.__longPressTimer && this._22() : this.__onLongPressFunction = z(this, function () {
                        this.__longPressTimer = null, this._nap && (this.__naancelClick = !0, this._id(this._nap, rh))
                    }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, gD[ah]), this.__naancelClick = !1), dD)return;
                return void(hM._naurrentInteractionSupport = this);
            case"touchend":
                if (!this._nap)return void(this._moving = null);
                if (t.touches[$r])return void(this._9k = Ei(t));
                t.timeStamp - this._nap.timeStamp < 200 && yi.call(this, this._nap);
            case"touchcancel":
                if (!this._nap)return void(this._moving = null);
                this._moving && (this._moving = null, this._i9(t));
            case"mouseup":
                return void this._eg(t);
            case"click":
                return void yi.call(this, t);
            case"mousewheel":
            case"DOMMouseScroll":
                return t[hh] = t[oh] || -t[_h], this._id(t, fh);
            case"touchmove":
                var e = t.touches.length;
                return this._moving || (this._moving = !0, 1 == e && this._du()), void this._jt(t)
        }
        return this._id(t, ch + i)
    }

    function mi(t, i) {
        var e = da + i;
        sM(t, i, this[e]), F(this, e)
    }

    function xi(i) {
        l(rM, function (t) {
            bi.call(this, i, t)
        }, this), dD || hM._n9m || (hM._n9m = !0, nM(t, uh, function (t) {
            if (hM._naurrentInteractionSupport) {
                R(t);
                var i = hM._naurrentInteractionSupport;
                if (!hM._dragging) {
                    if (i._nap) {
                        var e = i._nap[dh] - t.screenX, n = i._nap.screenY - t.screenY;
                        if (4 > e * e + n * n)return
                    }
                    hM._dragging = !0, i._du()
                }
                i._jt(t)
            }
        }, !0), nM(t, lh, function (t) {
            var i = hM._naurrentInteractionSupport;
            delete hM._naurrentInteractionSupport, hM._dragging && (delete hM._dragging, A(t), t = gi[Br](i, t), i._i9(t), i._eg(t))
        }, !0))
    }

    function Ti(t) {
        l(rM, function (i) {
            mi.call(this, t, i)
        }, this), dD || (hM._naurrentInteractionSupport == this && (delete hM._dragging, delete hM._naurrentInteractionSupport), this._22(), delete this._nap, delete this._9k)
    }

    function wi(t, i, e) {
        this._mn = t, this._nal = new Si, xi[Br](this, t), i && (this._listener = i), this._kf = e
    }

    function Oi(t) {
        return _D && t[vh] || !_D && t[bh]
    }

    function Si() {
        this.points = []
    }

    function ki(t, i, e, n, s) {
        Li(t, function (n) {
            if (i) {
                var s = n.responseXML;
                if (!s)return void(e || pM)(gh + t + yh);
                i(s)
            }
        }, e, n, s)
    }

    function Ii(t, i, e, n, s) {
        Li(t, function (n) {
            if (i) {
                var s, r = n[Eh];
                if (!r)return (e || pM)(gh + t + ph), s = new Error(gh + t + ph), i(r, s);
                try {
                    r = JSON.parse(r)
                } catch (a) {
                    (e || pM)(a), s = a
                }
                i(r, s)
            }
        }, e, n, s)
    }

    function Li(t, i, e, n, s) {
        (e === !1 || n === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest, a = encodeURI(t);
            if (s !== !1) {
                var h;
                h = a[Ur](mh) > 0 ? "&" : mh, a += h + xh + Date.now()
            }
            r[Th](wh, a), r[Oh] = function () {
                return 4 == r[Sh] ? r[kh] && 200 != r.status ? void(e || pM)(gh + t + Ih) : void(i && i(r)) : void 0
            }, r.send(n)
        } catch (o) {
            (e || pM)(gh + t + Ih, o)
        }
    }

    function ri(t, i, e, n, s, r, a, h) {
        return 0 >= a || 0 >= h || 0 >= e || 0 >= n ? !1 : (a += s, h += r, e += t, n += i, (s > a || a > t) && (r > h || h > i) && (t > e || e > s) && (i > n || n > r))
    }

    function hi(t, i, e, n, s, r, a, h) {
        return s >= t && r >= i && t + e >= s + a && i + n >= r + h
    }

    function Ai(t, i, e) {
        return t instanceof Object && t.x ? Ri(t, i, 0, 0) : Ci(t, i, e, 0, 0)
    }

    function Ci(t, i, e, n, s) {
        var r = Math.sin(e), a = Math[Lh](e), h = t - n, o = i - s;
        return t = h * a - o * r + n, i = h * r + o * a + s, new xD(t, i, e)
    }

    function Ri(t, i, e, n) {
        e = e || 0, n = n || 0;
        var s = Math[La](i), r = Math.cos(i), a = t.x - e, h = t.y - n;
        return t.x = a * r - h * s + e, t.y = a * s + h * r + n, t
    }

    function Pi(t, i, e) {
        return Di(t, i, e, 0, 0)
    }

    function Di(t, i, e, n, s) {
        var r = Ci(t.x, t.y, i, n, s), a = Ai(t.x + t[Ah], t.y, i, n, s), h = Ai(t.x + t[Ah], t.y + t.height, i, n, s), o = Ai(t.x, t.y + t.height, i, n, s);
        return e ? e.clear() : e = new SD, e[Ch](r), e.addPoint(a), e[Ch](h), e.addPoint(o), e
    }

    function Mi(t, i) {
        var e = this[Rh] || 1;
        this.style.width = t + Ph, this.style.height = i + Ph, this[Ah] = t * e, this[Dh] = i * e
    }

    function Ni() {
        this[Mh][Ah] = this[Mh][Ah]
    }

    function ji(t) {
        var i = t[Nh] || t[jh] || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
        return TM / i
    }

    function Bi(t, e, n) {
        var s = i.createElement(Mh);
        if (s.g = s[Bh]($h), t !== !0 && !n)return t && e && (s[Ah] = t, s.height = e), s;
        var r = s.g;
        return r[Rh] = s.ratio = ji(r), s[Gh] = Mi, r._kt = Ni, t && e && s.setSize(t, e), s
    }

    function $i(t, i, n) {
        if (t === e || null === t)return {width: 0, height: 0};
        var s = Gi();
        n = n || gD[Fh], s.font != n && (s[zh] = n);
        for (var r = i * gD[Yh], a = 0, h = 0, o = t.split(Hh), _ = 0, f = o[$r]; f > _; _++) {
            var c = o[_];
            a = Math[Uh](s.measureText(c).width, a), h += r
        }
        return {width: a, height: h}
    }

    function Gi(t, i) {
        return wM || (wM = Bi()), t && i && (wM[Ah] = t, wM[Dh] = i), wM.g
    }

    function Fi(t) {
        return Math.log(t + Math.sqrt(t * t + 1))
    }

    function zi(t, i) {
        i = i || t(1);
        var e = 1 / i, n = .5 * e, s = Math.min(1, i / 100);
        return function (r) {
            if (0 >= r)return 0;
            if (r >= i)return 1;
            for (var a = r * e, h = 0; h++ < 10;) {
                var o = t(a), _ = r - o;
                if (Math[qh](_) <= s)return a;
                a += _ * n
            }
            return a
        }
    }

    function Yi(t, i, e) {
        var n = 1 - t, s = n * n * i[0] + 2 * n * t * i[2] + t * t * i[4], r = n * n * i[1] + 2 * n * t * i[3] + t * t * i[5];
        if (e) {
            var a = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], h = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {x: s, y: r, rotate: Math[Wh](h, a)}
        }
        return {t: t, x: s, y: r}
    }

    function Hi(t, i, e) {
        var n = t - 2 * i + e;
        return 0 != n ? (t - i) / n : -1
    }

    function Ui(t, i) {
        i[Vr](t[4], t[5]);
        var e = Hi(t[0], t[2], t[4]);
        if (e > 0 && 1 > e) {
            var n = Yi(e, t);
            i.add(n.x, n.y)
        }
        var s = Hi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var n = Yi(s, t);
            i[Vr](n.x, n.y)
        }
        return i
    }

    function qi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0], e = t[1], n = t[4], s = t[5], r = Math.sqrt(OM(i, e, n, s));
            return function (t) {
                return r * t
            }
        }
        var a = t[0], h = t[2], o = t[4], _ = a - 2 * h + o, f = 2 * h - 2 * a;
        a = t[1], h = t[3], o = t[5];
        var c = a - 2 * h + o, u = 2 * h - 2 * a, d = 4 * (_ * _ + c * c), l = 4 * (_ * f + c * u), v = f * f + u * u, r = 4 * d * v - l * l, b = 1 / r, g = .125 * Math[Xh](d, -1.5), y = 2 * Math[Vh](d), E = (r * Fi(l / Math.sqrt(r)) + 2 * Math.sqrt(d) * l * Math[Vh](v)) * g;
        return function (t) {
            var i = l + 2 * t * d, e = i / Math.sqrt(r), n = i * i * b;
            return (r * Math.log(e + Math.sqrt(n + 1)) + y * i * Math.sqrt(v + t * l + t * t * d)) * g - E
        }
    }

    function Wi(t, i, e) {
        var n = 1 - t, s = i[0], r = i[2], a = i[4], h = i[6], o = s * n * n * n + 3 * r * t * n * n + 3 * a * t * t * n + h * t * t * t;
        if (e)var _ = 3 * t * t * h + (6 * t - 9 * t * t) * a + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], r = i[3], a = i[5], h = i[7];
        var f = s * n * n * n + 3 * r * t * n * n + 3 * a * t * t * n + h * t * t * t;
        if (e) {
            var c = 3 * t * t * h + (6 * t - 9 * t * t) * a + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {x: o, y: f, rotate: Math.atan2(c, _)}
        }
        return {x: o, y: f}
    }

    function Xi(t, i, e, n) {
        var s = -t + 3 * i - 3 * e + n;
        if (0 == s)return [(t - i) / (2 * e - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * e, a = i - t, h = r * r - 4 * s * a;
        return 0 > h ? void 0 : 0 == h ? [-r / (2 * s)] : (h = Math.sqrt(h), [(h - r) / (2 * s), (-h - r) / (2 * s)])
    }

    function Vi(t, i) {
        i.add(t[6], t[7]);
        var e = Xi(t[0], t[2], t[4], t[6]);
        if (e)for (var n = 0; n < e.length; n++) {
            var s = e[n];
            if (!(0 >= s || s >= 1)) {
                var r = Wi(s, t);
                i[Vr](r.x, r.y)
            }
        }
        if (e = Xi(t[1], t[3], t[5], t[7]))for (var n = 0; n < e[$r]; n++) {
            var s = e[n];
            if (!(0 >= s || s >= 1)) {
                var r = Wi(s, t);
                i[Vr](r.x, r.y)
            }
        }
    }

    function Ki(t) {
        var i = {x: t[0], y: t[1]}, e = {x: t[2], y: t[3]}, n = {x: t[4], y: t[5]}, s = {
            x: t[6],
            y: t[7]
        }, r = i.x - 0, a = i.y - 0, h = e.x - 0, o = e.y - 0, _ = n.x - 0, f = n.y - 0, c = s.x - 0, u = s.y - 0, d = 3 * (-r + 3 * h - 3 * _ + c), l = 6 * (r - 2 * h + _), v = 3 * (-r + h), b = 3 * (-a + 3 * o - 3 * f + u), g = 6 * (a - 2 * o + f), y = 3 * (-a + o), E = function (t) {
            var i = d * t * t + l * t + v, e = b * t * t + g * t + y;
            return Math[Vh](i * i + e * e)
        }, p = (E(0) + 4 * E(.5) + E(1)) / 6;
        return p
    }

    function Zi(t, i) {
        function e(t, i, e, n) {
            var s = -t + 3 * i - 3 * e + n, r = 2 * t - 4 * i + 2 * e, a = i - t;
            return function (t) {
                return 3 * (s * t * t + r * t + a)
            }
        }

        function n(t, i) {
            var e = s(t), n = r(t);
            return Math[Vh](e * e + n * n) * i
        }

        var s = e(t[0], t[2], t[4], t[6]), r = e(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var a = 1 / i;
        return function (t) {
            if (!t)return 0;
            for (var i, e = 0, s = 0; ;) {
                if (i = e + a, i >= t)return s += n(e, i - e);
                s += n(e, a), e = i
            }
        }
    }

    function Ji(t, i, e) {
        return OM(i, e, t.cx, t.cy) <= t._squareR + SM
    }

    function Qi(t, i, e, n) {
        return e = e || te(t, i), new ie((t.x + i.x) / 2, (t.y + i.y) / 2, e / 2, t, i, null, n)
    }

    function te(t, i) {
        return TD(t.x, t.y, i.x, i.y)
    }

    function ie(t, i, e, n, s, r, a) {
        this.cx = t, this.cy = i, this.r = e, this._squareR = e * e, this.p1 = n, this.p2 = s, this.p3 = r, this._otherPoint = a
    }

    function ee(t, i, e, n) {
        this.cx = t, this.cy = i, this.width = e, this[Dh] = n
    }

    function ne(t) {
        var i = t[0], e = t[1], n = t[2], s = ie._ivCircle(i, e, n);
        return re(t, i, e, n, s)
    }

    function se(t, i) {
        i = i || ae(t);
        for (var e, n = i.width / i[Dh], s = [], r = t[$r], a = 0; r > a; a++)e = t[a], s.push({x: e.x, y: e.y * n});
        var h = ne(s);
        return h ? new ee(h.cx, h.cy / n, 2 * h.r, 2 * h.r / n) : void 0
    }

    function re(t, i, e, n, s) {
        for (var r, a, h = t.length, o = s._squareR, _ = 0; h > _; _++)if (r = t[_], r != i && r != e && r != n) {
            var f = OM(s.cx, s.cy, r.x, r.y);
            f - SM > o && (o = f, a = r)
        }
        if (!a)return s;
        var c, u = ie._ivCircle(a, i, e), d = ie._ivCircle(a, i, n), l = ie._ivCircle(a, n, e);
        return Ji(u, n.x, n.y) && (c = u), Ji(d, e.x, e.y) && (!c || c.r > d.r) && (c = d), Ji(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, e = c.p2, n = c.p3 || c._otherPoint, re(t, i, e, n, c)
    }

    function ae(t) {
        for (var i, e = t[$r], n = new SD, s = 0; e > s; s++)i = t[s], n.add(i.x, i.y);
        return n
    }

    function he(t, i, e, n, s) {
        this._6f && this.validate();
        var r = s ? this[Kh](s) : this[Zh], a = e / r.width, h = t - a * r.x, o = n / r[Dh], _ = i - o * r.y, f = this._gd, c = [];
        return l(f, function (t) {
            var i = t[Hr](), e = i[Jh];
            if (e && e[$r]) {
                for (var n = e[$r], s = [], r = 0; n > r; r++) {
                    var f = e[r];
                    r++;
                    var u = e[r];
                    f = a * f + h, u = o * u + _, s.push(f), s[Qh](u)
                }
                i[Jh] = s
            }
            c[Qh](i)
        }, this), new nN(c)
    }

    function oe(t, i, e, n, s, r) {
        if (s = s || 0, e = e || 0, !s && !r)return !1;
        if (!n) {
            var a = this[Kh](s);
            if (!a[to](t, i, e))return !1
        }
        var h = Math.round(2 * e) || 1, o = Gi(h, h), _ = (o.canvas, -t + e), f = -i + e;
        if (o.setTransform(1, 0, 0, 1, _, f), !o[io]) {
            this._ls(o), s && o.stroke(), r && o.fill();
            for (var c = o[eo](0, 0, h, h)[no], u = c[$r] / 4; u > 0;) {
                if (c[4 * u - 1] > eN)return !0;
                --u
            }
            return !1
        }
        return o[so] = (s || 0) + 2 * e, this._ls(o), s && o[io](e, e) ? !0 : r ? o.isPointInPath(e, e) : !1
    }

    function _e(t, i, e) {
        if (!this._iw)return null;
        var n = this._gd;
        if (n.length < 2)return null;
        e === !1 && (t += this._iw);
        var s = n[0];
        if (0 >= t)return Ns(s.points[0], s[Jh][1], n[1][Jh][0], n[1][Jh][1], t, i);
        if (t >= this._iw) {
            s = n[n.length - 1];
            var r, a, h = s.points, o = h.length, _ = h[o - 2], f = h[o - 1];
            if (o >= 4)r = h[o - 4], a = h[o - 3]; else {
                s = n[n[$r] - 2];
                var c = s[ro];
                r = c.x, a = c.y
            }
            return Ns(_, f, _ + _ - r, f + f - a, t - this._iw, i)
        }
        for (var u, d = 0, l = 1, o = n[$r]; o > l; l++)if (u = n[l], u._iw) {
            if (!(d + u._iw < t)) {
                var v, c = s[ro];
                if (u[ao] == QM) {
                    var b = u.points;
                    v = fe(t - d, u, c.x, c.y, b[0], b[1], b[2], b[3], u._r)
                } else {
                    if (!u._lf)return Ns(c.x, c.y, u[Jh][0], u[Jh][1], t - d, i);
                    var g = zi(u._lf, u._iw)(t - d), b = u.points;
                    v = u.type == JM && 6 == b.length ? Wi(g, [c.x, c.y][Yr](b), !0) : Yi(g, [c.x, c.y].concat(b), !0)
                }
                return i && (v.x -= i * Math.sin(v.rotate || 0), v.y += i * Math[Lh](v.rotate || 0)), v
            }
            d += u._iw, s = u
        } else s = u
    }

    function fe(t, i, e, n, s, r, a, h) {
        if (t <= i._l1)return Ns(e, n, s, r, t);
        if (t >= i._iw)return t -= i._iw, Ns(i._p2x, i._p2y, a, h, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = -o);
            var _ = Ci(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return _[ho] += i._n91 || 0, _.rotate += Math.PI, _
        }
        return Ns(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }

    function ni(t, i, e) {
        var n, s, r;
        0 == t._n9 ? (n = -1, r = 0, s = i) : 0 == t._na ? (n = 0, r = 1, s = e) : (n = -1 / t._n9, s = (t._n9 - n) * i + t._nc, r = 1);
        var a = new wD;
        return a._n9 = n, a._nc = s, a._na = r, a._n7 = i, a._n6 = e, a
    }

    function ce(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function ue(t, i, e, n, s, r, a, h) {
        var o = TD(i, e, n, s), _ = TD(n, s, r, a);
        if (!o || !_)return t._d = 0, t._r = 0, t._l1 = o, t._l2 = _, t._iw = 0;
        var f = le(n, s, i, e), c = le(n, s, r, a);
        t._n91 = f, t._n92 = c;
        var u = f - c;
        u = ce(u), u > Math.PI && (u = 2 * Math.PI - u, t._CCW = !0);
        var d = Math.PI - u, l = Math.tan(u / 2), v = h / l, b = Math[oo](o, _);
        v > b && (v = b, h = l * v);
        var g, y = n + Math.cos(f) * v, E = s + Math.sin(f) * v, p = n + Math.cos(c) * v, m = s + Math.sin(c) * v, x = new wD(i, e, n, s), T = new wD(n, s, r, a), w = ni(x, y, E), O = ni(T, p, m), S = w._3p(O), k = Math.atan2(E - S.y, y - S.x), I = Math[Wh](m - S.y, p - S.x);
        g = t._CCW ? I : k;
        for (var L, A = 0; 4 > A;) {
            var C = A * pD;
            if (ce(C - g) <= d) {
                var R, P;
                if (L ? L++ : L = 1, 0 == A ? (R = S.x + h, P = S.y) : 1 == A ? (R = S.x, P = S.y + h) : 2 == A ? (R = S.x - h, P = S.y) : (R = S.x, P = S.y - h), t[_o + L] = {
                        x: R,
                        y: P
                    }, 2 == L)break
            }
            A++
        }
        return t._p1x = y, t._p1y = E, t._p2x = p, t._p2y = m, t._o = S, t._d = v, t._r = h, t._l1 = o - v, t._l2 = _ - v, t._iw = t._l1 + d * h
    }

    function de(t, i, e, n, s, r, a) {
        var h = le(e, n, t, i), o = le(e, n, s, r), _ = h - o;
        return a ? _ : (0 > _ && (_ = -_), _ > Math.PI && (_ -= Math.PI), _)
    }

    function le(t, i, e, n) {
        return Math[Wh](n - i, e - t)
    }

    function ve(t) {
        var i = IM.exec(t);
        if (i)return i[1];
        var e = t[fo](Oa);
        return e >= 0 && e < t[$r] - 1 ? t.substring(e + 1) : void 0
    }

    function be(t) {
        if (!t)return null;
        if (t instanceof nN)return MM;
        if (t[co]instanceof Function)return DM;
        if (k(t)) {
            var i = ve(t);
            if (i) {
                if (!eD && LM.test(i))return PM;
                if (AM[uo](i))return RM
            }
            return CM
        }
    }

    function ge(t, i, e) {
        if (this._lq = be(t), !this._lq)throw new Error("the image format is not supported", t);
        this._lp = t, this._n9c = i, this._96 = e, this.width = i || gD[lo], this[Dh] = e || gD.IMAGE_HEIGHT, this._jl = {}
    }

    function ye(t, i, e, n) {
        return i ? ($M[t] = new ge(i, e, n), t) : void delete $M[t]
    }

    function Ee(t) {
        if (t._kb)return t._kb;
        var i = k(t);
        if (!i && !t[vo])return t._kb = new ge(t);
        var e = t.name || t;
        return e in $M ? $M[e] : $M[e] = new ge(t)
    }

    function pe(t) {
        return t in $M
    }

    function me(t, i, e) {
        e = e || {};
        var n = t.getBounds(e.lineWidth);
        if (!n.width || !n.height)return !1;
        var s = i[Bh]($h), r = i.ratio || 1, a = e.scaleMode || bo, h = /full/i[uo](a), o = /uniform/i.test(a), _ = 1, f = 1;
        if (h) {
            var c = i[Ah], u = i.height, d = e[go], l = 0, v = 0;
            if (d) {
                var b, g, y, E;
                S(d) ? b = g = y = E = d : (b = d.top || 0, g = d[Ca] || 0, y = d.left || 0, E = d.right || 0), c -= y + E, u -= b + g, l += y, v += b
            }
            _ = c / n.width, f = u / n.height, o && (_ > f ? (l += (c - f * n.width) / 2, _ = f) : f > _ && (v += (u - _ * n[Dh]) / 2, f = _)), (l || v) && s[yo](l, v)
        }
        s[yo](-n.x * _, -n.y * f), t.draw(s, r, e, _, f, !0)
    }

    function xe(t, i, e) {
        var n = Ee(t);
        return n ? (n.validate(), (n._lq == PM || n._6b()) && n._n9h(function (t) {
            t.source && (this.width = this[Ah], me(t.source, this, e))
        }, i), void me(n, i, e)) : (mM.error(Eo + t), !1)
    }

    function Te(t, i, n, s) {
        var r = t[$r];
        if (r && !(0 > r)) {
            s = s || 1;
            for (var a, h, o, _ = [], f = 0; f++ < r;)if (a = t.getLocation(f, 0), a && TD(i, n, a.x, a.y) <= s) {
                h = f, o = a[ho];
                break
            }
            if (h !== e) {
                for (var a, c, u, d = 0, f = 0, l = t._gd[$r]; l > f; f++) {
                    if (a = t._gd[f], !c && (d += a._iw || 0, d > h)) {
                        c = !0;
                        var v = Math[Uh](10, a._iw / 6), b = v * Math[La](o), g = v * Math.cos(o);
                        if (a.type == JM) {
                            var y = a.points[0], E = a[Jh][1];
                            if (u) {
                                var p = new wD(i, n, i + g, n + b), m = p._3p(new wD(u[ro].x, u[ro].y, a[Jh][0], a[Jh][1]));
                                m.x !== e && (y = m.x, E = m.y)
                            }
                            _[Qh](new iN(JM, [y, E, i - g, n - b, i, n]))
                        } else _.push(new iN(ZM, [i - g, n - b, i, n]));
                        if (a[Jh])if (a[ao] == JM) {
                            a[Jh][0] = i + g, a[Jh][1] = n + b;
                            var p = new wD(i, n, i + g, n + b), m = p._3p(new wD(a.points[2], a[Jh][3], a[Jh][4], a[Jh][5]));
                            m.x !== e && (a[Jh][2] = m.x, a[Jh][3] = m.y)
                        } else if (a.type == ZM) {
                            a[ao] = JM, a[Jh] = [i + g, n + b].concat(a.points);
                            var p = new wD(i, n, i + g, n + b), m = p._3p(new wD(a[Jh][2], a.points[3], a[Jh][4], a.points[5]));
                            m.x !== e && (a.points[2] = m.x, a.points[3] = m.y)
                        } else a.type == KM && (a.type = ZM, a[Jh] = [i + g, n + b].concat(a.points), f == l - 1 && (a[po] = !0))
                    }
                    _[Qh](a), u = a
                }
                return _
            }
        }
    }

    function we(t) {
        var i = t.width, e = t.height;
        try {
            var n = t.g[eo](0, 0, i, e), s = n.data;
            return Oe(s, i, e)
        } catch (r) {
            mM.error(r)
        }
    }

    function Oe(t, i) {
        var e, n, s, r, a, h = t[$r], o = 0, _ = 0;
        for (a = 0; h > a; a += 4)if (t[a + 3] > 0) {
            e = (a + 4) / i / 4 | 0;
            break
        }
        for (a = h - 4; a >= 0; a -= 4)if (t[a + 3] > 0) {
            n = (a + 4) / i / 4 | 0;
            break
        }
        for (o = 0; i > o; o++) {
            for (_ = e; n > _; _++)if (t[_ * i * 4 + 4 * o + 3] > 0) {
                s = o;
                break
            }
            if (s >= 0)break
        }
        for (o = i - 1; o >= 0; o--) {
            for (_ = e; n > _; _++)if (t[_ * i * 4 + 4 * o + 3] > 0) {
                r = o;
                break
            }
            if (r >= 0)break
        }
        var f, c, u, d = [], l = [];
        for (o = s; r >= o; o++)for (u = [], d.push(u), _ = e; n >= _; _++)a = 4 * (_ * i + o), f = t[a + 3], f ? (c = {
            a: f,
            r: t[a],
            g: t[a + 1],
            b: t[a + 2]
        }, u[Qh](c), l[Qh](c.r), l[Qh](c.g), l[Qh](c.b), l[Qh](c.a)) : (u.push(null), l[Qh](0), l[Qh](0), l[Qh](0), l[Qh](0));
        return d._x = s, d._y = e, d._width = r - s + 1, d._height = n - e + 1, d._j6 = new SD(s, e, d._width, d._height), d._pixelSize = d._width * d._height, d
    }

    function Se(t, i, e, n, s) {
        if (s = 1 | s, !s || 1 > s) {
            var r = t[e];
            return r ? r[n] : !1
        }
        var a = n - s, h = e - s;
        0 > a && (a = 0), 0 > h && (h = 0);
        var o = e + s, _ = n + s;
        for (o > i[Ah] && (o = i[Ah]), _ > i[Dh] && (_ = i[Dh]); o > h;) {
            for (; _ > a;) {
                if (t[h][a])return !0;
                a++
            }
            h++
        }
        return !1
    }

    function ke(t) {
        if (ma == t[0]) {
            if (t = t[mo](1), 3 == t.length)t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t.length)return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf(xo), e = t[Ur](ya);
            if (0 > i || i > e)return;
            if (t = t.substring(i + 1, e), t = t.split(ga), t[$r] < 3)return;
            var n = parseInt(t[0]), s = parseInt(t[1]), r = parseInt(t[2]), a = 3 == t[$r] ? 255 : parseInt(t[3]);
            return [n, s, r, a]
        }
    }

    function Ie(t, i, e) {
        return e || (e = gD.BLEND_MODE), e == xM[To] ? t * i : e == xM[wo] ? Math.min(t, i) : e == xM.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : e == xM[Oo] ? t + i - 1 : e == xM.BLEND_MODE_LIGHTEN ? Math.max(t, i) : e == xM[So] ? t + i - t * i : i
    }

    function Le(t, i, e) {
        var n = ke(i), s = t.g[eo](0, 0, t[Ah], t.height), r = s.data;
        if (e instanceof Function)r = e(t, r, n) || r; else {
            var a = n[0] / 255, h = n[1] / 255, o = n[2] / 255;
            if (e == xM[ko])for (var _ = 0, f = r.length; f > _; _ += 4) {
                var c = 77 * r[_] + 151 * r[_ + 1] + 28 * r[_ + 2] >> 8;
                r[_] = c * a | 0, r[_ + 1] = c * h | 0, r[_ + 2] = c * o | 0
            } else for (var _ = 0, f = r.length; f > _; _ += 4)r[_] = 255 * Ie(a, r[_] / 255, e) | 0, r[_ + 1] = 255 * Ie(h, r[_ + 1] / 255, e) | 0, r[_ + 2] = 255 * Ie(o, r[_ + 2] / 255, e) | 0
        }
        var t = Bi(t.width, t[Dh]);
        return t.g.putImageData(s, 0, 0), t
    }

    function Ae(t, i, e, n) {
        return 1 > e && (e = 1), Ce(t - e, i - e, 2 * e, 2 * e, n)
    }

    function Ce(t, i, e, n, s) {
        e = Math[Io](e) || 1, n = Math.round(n) || 1;
        var r = Gi(e, n);
        r.setTransform(1, 0, 0, 1, -t, -i), s.draw(r);
        for (var a = r.getImageData(0, 0, e, n).data, h = a[$r] / 4; h-- > 0;)if (a[4 * h - 1] > eN)return !0;
        return !1
    }

    function Re(t, i, e, n, s, r) {
        t -= s.$x, i -= s.$y;
        var a = s._fp.intersection(t, i, e, n);
        if (!a)return !1;
        t = a.x * r, i = a.y * r, e = a.width * r, n = a[Dh] * r, e = Math.round(e) || 1, n = Math[Io](n) || 1;
        var h = Gi(), o = h[Mh];
        o.width < e || o.height < n ? (o.width = e, o.height = n) : (h[Lo](1, 0, 0, 1, 0, 0), h[Ao](0, 0, e, n)), h[Lo](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), h[Co](r, r), s._jc(h, 1);
        for (var _ = h[eo](0, 0, e, n).data, f = _[$r] / 4; f-- > 0;)if (_[4 * f - 1] > eN)return !0;
        return !1
    }

    function Pe(t, i, e, n, s, r, a, h, o) {
        if (ai(t, i, e, n, h, o))return null;
        var _, f, c, u = new iN(KM, [t + e - s, i]), d = new iN(ZM, [t + e, i, t + e, i + r]), l = new iN(KM, [t + e, i + n - r]), v = new iN(ZM, [t + e, i + n, t + e - s, i + n]), b = new iN(KM, [t + s, i + n]), g = new iN(ZM, [t, i + n, t, i + n - r]), y = new iN(KM, [t, i + r]), E = new iN(ZM, [t, i, t + s, i]), p = (new iN(tN), [u, d, l, v, b, g, y, E]), m = new SD(t + s, i + r, e - s - s, n - r - r);
        t > h ? (_ = LD, c = 5) : h > t + e ? (_ = CD, c = 1) : (_ = AD, c = 0), i > o ? (f = RD, _ == LD && (c = 7)) : o > i + n ? (f = DD, _ == CD ? c = 3 : _ == AD && (c = 4)) : (f = PD, _ == LD ? c = 6 : _ == CD && (c = 2));
        var x = $e(c, t, i, e, n, s, r, a, h, o, m), T = x[0], w = x[1], O = new nN, S = O._gd;
        S[Qh](new iN(VM, [T.x, T.y])), S.push(new iN(KM, [h, o])), S.push(new iN(KM, [w.x, w.y])), w._m1 && (S.push(w._m1), w._m1NO++);
        for (var k = w._m1NO % 8, I = T._m1NO; S.push(p[k]), ++k, k %= 8, k != I;);
        return T._m1 && S.push(T._m1), O.closePath(), O
    }

    function De(t, i, n, s, r, a, h, o, _, f, c, u, d, l) {
        var v = new wD(u, d, n, s), b = new wD(i[0], i[1], i[4], i[5]), g = b._3p(v, c), y = g[0], E = g[1];
        if (y._rest !== e) {
            y._m1NO = (t - 1) % 8, E._m1NO = (t + 1) % 8;
            var p = y._rest;
            7 == t ? (y.y = a + f + Math[oo](l.height, p), E.x = r + _ + Math.min(l.width, p)) : 5 == t ? (y.x = r + _ + Math[oo](l.width, p), E.y = a + o - f - Math.min(l.height, p)) : 3 == t ? (y.y = a + o - f - Math[oo](l[Dh], p), E.x = r + h - _ - Math.min(l[Ah], p)) : 1 == t && (y.x = r + h - _ - Math[oo](l.width, p), E.y = a + f + Math[oo](l[Dh], p))
        } else {
            v._mt(v._n7, v._n6, y.x, y.y), y = v._$l(i), v._mt(v._n7, v._n6, E.x, E.y), E = v._$l(i);
            var m = Ge(i, [y, E]), x = m[0], T = m[2];
            y._m1NO = t, E._m1NO = t, y._m1 = new iN(ZM, x.slice(2)), E._m1 = new iN(ZM, T.slice(2))
        }
        return [y, E]
    }

    function Me(t, i, e, n, s, r, a, h, o, _) {
        var f, c;
        if (o - h >= i + r)f = {y: e, x: o - h}, f._m1NO = 0; else {
            f = {y: e + a, x: Math.max(i, o - h)};
            var u = [i, e + a, i, e, i + r, e], d = new wD(o, _, f.x, f.y);
            if (f = d._$l(u)) {
                L(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Ge(u, [f]);
                l = l[0], l && (f._m1 = new iN(ZM, l.slice(2))), f._m1NO = 7
            } else f = {y: e, x: i + r}, f._m1NO = 0
        }
        if (i + n - r >= o + h)c = {y: e, x: o + h}, c._m1NO = 0; else {
            c = {y: e + a, x: Math[oo](i + n, o + h)};
            var v = [i + n - r, e, i + n, e, i + n, e + a], d = new wD(o, _, c.x, c.y);
            if (c = d._$l(v)) {
                L(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ge(v, [c]);
                l && l[l.length - 1] && (c._m1 = new iN(ZM, l[l[$r] - 1][Fr](2))), c._m1NO = 1
            } else c = {y: e, x: i + n - r}, c._m1NO = 0
        }
        return [f, c]
    }

    function Ne(t, i, e, n, s, r, a, h, o, _) {
        var f, c;
        if (_ - h >= e + a)f = {x: i + n, y: _ - h}, f._m1NO = 2; else {
            f = {x: i + n - r, y: Math.max(e, _ - h)};
            var u = [i + n - r, e, i + n, e, i + n, e + a], d = new wD(o, _, f.x, f.y);
            if (f = d._$l(u)) {
                L(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Ge(u, [f]);
                l = l[0], l && (f._m1 = new iN(ZM, l.slice(2))), f._m1NO = 1
            } else f = {x: i + n, y: e + a}, f._m1NO = 2
        }
        if (e + s - a >= _ + h)c = {x: i + n, y: _ + h}, c._m1NO = 2; else {
            c = {x: i + n - r, y: Math.min(e + s, _ + h)};
            var v = [i + n, e + s - a, i + n, e + s, i + n - r, e + s], d = new wD(o, _, c.x, c.y);
            if (c = d._$l(v)) {
                L(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ge(v, [c]);
                l[1] && (c._m1 = new iN(ZM, l[1].slice(2))), c._m1NO = 3
            } else c = {x: i + n, y: e + s - a}, c._m1NO = 2
        }
        return [f, c]
    }

    function je(t, i, e, n, s, r, a, h, o, _) {
        var f, c;
        if (o - h >= i + r)c = {y: e + s, x: o - h}, c._m1NO = 4; else {
            c = {y: e + s - a, x: Math[Uh](i, o - h)};
            var u = [i + r, e + s, i, e + s, i, e + s - a], d = new wD(o, _, c.x, c.y);
            if (c = d._$l(u)) {
                L(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ge(u, [c]);
                l = l[l.length - 1], l && (c._m1 = new iN(ZM, l[Fr](2))), c._m1NO = 5
            } else c = {y: e + s, x: i + r}, c._m1NO = 4
        }
        if (i + n - r >= o + h)f = {y: e + s, x: o + h}, f._m1NO = 4; else {
            f = {y: e + s - a, x: Math[oo](i + n, o + h)};
            var v = [i + n, e + s - a, i + n, e + s, i + n - r, e + s], d = new wD(o, _, f.x, f.y);
            if (f = d._$l(v)) {
                L(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Ge(v, [f]);
                l[0] && (f._m1 = new iN(ZM, l[0].slice(2))), f._m1NO = 3
            } else f = {y: e + s, x: i + n - r}, f._m1NO = 4
        }
        return [f, c]
    }

    function Be(t, i, e, n, s, r, a, h, o, _) {
        var f, c;
        if (_ - h >= e + a)c = {x: i, y: _ - h}, c._m1NO = 6; else {
            c = {x: i + r, y: Math[Uh](e, _ - h)};
            var u = [i, e + a, i, e, i + r, e], d = new wD(o, _, c.x, c.y);
            if (c = d._$l(u)) {
                L(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ge(u, [c]);
                l = l[l[$r] - 1], l && (c._m1 = new iN(ZM, l[Fr](2)))
            } else c = {x: i, y: e + a};
            c._m1NO = 7
        }
        if (e + s - a >= _ + h)f = {x: i, y: _ + h}, f._m1NO = 6; else {
            f = {x: i + r, y: Math[oo](e + s, _ + h)};
            var v = [i + r, e + s, i, e + s, i, e + s - a], d = new wD(o, _, f.x, f.y);
            if (f = d._$l(v)) {
                L(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Ge(v, [f]);
                l[0] && (f._m1 = new iN(ZM, l[0][Fr](2))), f._m1NO = 5
            } else f = {x: i, y: e + s - a}, f._m1NO = 6
        }
        return [f, c]
    }

    function $e(t, i, e, n, s, r, a, h, o, _, f) {
        var c = h / 2;
        switch (t) {
            case 7:
                var u = [i, e + a, i, e, i + r, e], d = i + r, l = e + a;
                return De(t, u, d, l, i, e, n, s, r, a, h, o, _, f);
            case 5:
                return u = [i + r, e + s, i, e + s, i, e + s - a], d = i + r, l = e + s - a, De(t, u, d, l, i, e, n, s, r, a, h, o, _, f);
            case 3:
                return u = [i + n, e + s - a, i + n, e + s, i + n - r, e + s], d = i + n - r, l = e + s - a, De(t, u, d, l, i, e, n, s, r, a, h, o, _, f);
            case 1:
                return u = [i + n - r, e, i + n, e, i + n, e + a], d = i + n - r, l = e + a, De(t, u, d, l, i, e, n, s, r, a, h, o, _, f);
            case 0:
                return Me(t, i, e, n, s, r, a, c, o, _, f);
            case 2:
                return Ne(t, i, e, n, s, r, a, c, o, _, f);
            case 4:
                return je(t, i, e, n, s, r, a, c, o, _, f);
            case 6:
                return Be(t, i, e, n, s, r, a, c, o, _, f)
        }
    }

    function Ge(t, i) {
        for (var n, s, r, a, h, o, _ = t[0], f = t[1], c = t[2], u = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++)h = i[b], o = h.t, 0 != o && 1 != o ? (n = _ + (c - _) * o, s = f + (u - f) * o, r = c + (d - c) * o, a = u + (l - u) * o, v.push([_, f, n, s, h.x, h.y]), _ = h.x, f = h.y, c = r, u = a) : v[Qh](null);
        return r !== e && v[Qh]([h.x, h.y, r, a, d, l]), v
    }

    function Fe(t) {
        return this[Ro] && this._n9p && (t.x -= this._n9p.x, t.y -= this._n9p.y), this.$rotate && Ri(t, this.$rotate), t.x += this[Po] || 0, t.y += this[Do] || 0, this.$rotatable && this[Mo] ? Ri(t, this.$_hostRotate) : t
    }

    function ze(t) {
        return this.$rotatable && this.$_hostRotate && Ri(t, -this.$_hostRotate), t.x -= this.$offsetX || 0, t.y -= this.$offsetY || 0, this.$rotate && Ri(t, -this.$rotate), this.$layoutByAnchorPoint && this._n9p && (t.x += this._n9p.x, t.y += this._n9p.y), t
    }

    function Ye() {
        var t = this[No];
        this.$invalidateSize && (this[No] = !1, this[jo] = !0, this._7w.setByRect(this._j6), this[Bo] && this._7w.grow(this.$padding), this[$o] && this._7w[Go](this.$border));
        var i = this._$z();
        if (i)var e = this.showPointer && this[Fo];
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this.$invalidateAnchorPoint = !1, e && (t = !0), this._n9p = oi(this.$anchorPosition, this._7w.width, this._7w.height), this._n9p.x += this._7w.x, this._n9p.y += this._7w.y), i ? (t && (this._ncackgroundGradientInvalidateFlag = !0, He.call(this, e)), this._ncackgroundGradientInvalidateFlag && (this._ncackgroundGradientInvalidateFlag = !1, this._ncackgroundGradient = this[zo] && this._mlShape && this._mlShape.bounds ? GM.prototype.generatorGradient[Br](this.backgroundGradient, this._mlShape.bounds) : null), t) : (this.__mePointer = !1, t)
    }

    function He(t) {
        var i = this._7w.x + this.$border / 2, e = this._7w.y + this[$o] / 2, n = this._7w.width - this[$o], s = this._7w.height - this.$border, r = 0, a = 0;
        if (this.$borderRadius && (S(this[Yo]) ? r = a = this.$borderRadius : (r = this.$borderRadius.x || 0, a = this.$borderRadius.y || 0), r = Math.min(r, n / 2), a = Math[oo](a, s / 2)), t && (this._pointerX = this._n9p.x - this[Po] + this[Ho], this._pointerY = this._n9p.y - this.$offsetY + this.$pointerY, !this._7w.intersectsPoint(this._pointerX, this._pointerY))) {
            var h = new rN(i, e, n, s, r, a, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._mlShape = h._m1, this._mlShape[Zh][Uo](i, e, n, s), void(this.__mePointer = !0)
        }
        this._mlShape && this._mlShape.clear(), this._mlShape = uj[qo](i, e, n, s, r, a, this._mlShape), this._mlShape.bounds.set(i, e, n, s)
    }

    function Ue(t, i, e, n) {
        return n && (t[Ah] < 0 || t[Dh] < 0) ? (t.x = i, t.y = e, void(t[Ah] = t[Dh] = 0)) : (i < t.x ? (t[Ah] += t.x - i, t.x = i) : i > t.x + t[Ah] && (t.width = i - t.x), void(e < t.y ? (t.height += t.y - e, t.y = e) : e > t.y + t.height && (t.height = e - t.y)))
    }

    function qe(t, i, n) {
        var s, r = t[Wo], a = t.layoutByPath === e ? this[Xo] : t.layoutByPath;
        return this[Vo]instanceof nN && a ? (s = kM._n98(r, this.$data, this.lineWidth, i, n), s.x *= this._j8, s.y *= this._j9) : (s = oi(r, this._7w[Ah], this._7w.height), s.x += this._7w.x, s.y += this._7w.y), Fe.call(this, s)
    }

    function We(t, i) {
        if (i)if (i._7w[Ko]())t.$x = i.$x, t.$y = i.$y; else {
            var e = qe.call(i, t);
            t.$x = e.x, t.$y = e.y, t._hostRotate = e[ho]
        } else t.$x = 0, t.$y = 0;
        t.$invalidateRotate && oN.call(t)
    }

    function Xe(t) {
        if (t[Zo] === e) {
            var i, n;
            if (t.setLineDash)i = t.getLineDash, n = t.setLineDash; else {
                var s;
                if (t[Jo] !== e)s = Jo; else {
                    if (t.webkitLineDash === e)return !1;
                    s = Qo
                }
                n = function (t) {
                    this[s] = t
                }, i = function () {
                    return this[s]
                }
            }
            K(t, Zo, {
                get: function () {
                    return i[Br](this)
                }, set: function (t) {
                    n.call(this, t)
                }
            })
        }
        if (t[t_] === e) {
            var r;
            if (t[i_] !== e)r = i_; else {
                if (t[e_] === e)return;
                r = e_
            }
            K(t, t_, {
                get: function () {
                    return this[r]
                }, set: function (t) {
                    this[r] = t
                }
            })
        }
    }

    function Ve(t, i, e, n, s) {
        var r, a, h, o, _, f, c, u, d = function (t) {
            return function (i) {
                t(i)
            }
        }, l = function () {
            a = null, h = null, o = _, _ = null, f = null
        }, v = function (t) {
            r = t, c || (c = Bi()), c[Ah] = r[Ah], c[Dh] = r.height, i[Ah] = r[Ah], i[Dh] = r.height
        }, b = function (t) {
            g(), l(), a = t[n_] ? t.transparencyIndex : null, h = 10 * t[s_], _ = t.disposalMethod
        }, g = function () {
            if (f) {
                var t = f.getImageData(0, 0, r.width, r[Dh]), e = {
                    data: t,
                    _pixels: Oe(t[no], r[Ah], r.height),
                    delay: h
                };
                s.call(i, e)
            }
        }, y = function (t) {
            f || (f = c.getContext($h));
            var i = t[r_] ? t[a_] : r[h_], e = f.getImageData(t[o_], t.topPos, t[Ah], t[Dh]);
            t.pixels.forEach(function (t, n) {
                a !== t ? (e.data[4 * n + 0] = i[t][0], e[no][4 * n + 1] = i[t][1], e.data[4 * n + 2] = i[t][2], e[no][4 * n + 3] = 255) : (2 === o || 3 === o) && (e[no][4 * n + 3] = 0)
            }), f[Ao](0, 0, r.width, r[Dh]), f.putImageData(e, t.leftPos, t.topPos)
        }, E = function () {
        }, p = {
            hdr: d(v), gce: d(b), com: d(E), app: {NETSCAPE: d(E)}, img: d(y, !0), eof: function () {
                g(), e[Br](i)
            }
        }, m = new XMLHttpRequest;
        eD || m.overrideMimeType("text/plain; charset=x-user-defined"), m[__] = function () {
            u = new dN(m[Eh]);
            try {
                vN(u, p)
            } catch (t) {
                n.call(i, f_)
            }
        }, m[c_] = function () {
            n.call(i, u_)
        }, m.open(wh, t, !0), m[d_]()
    }

    function Ke(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 51, 49, 51, 51, 55, 51, 51, 55, 50, 49, 56, 10, 10, 48, 10];
        return i[l_](function (e, n) {
            i[n] = t(e)
        }), i[v_]("")
    }

    function Ze(t, i) {
        try {
            if (null == t || t.length < 8)return;
            if (null == i || i[$r] <= 0)return;
            for (var e = "", n = 0; n < i[$r]; n++)e += i.charCodeAt(n).toString();
            var s = Math.floor(e.length / 5), r = parseInt(e[b_](s) + e.charAt(2 * s) + e.charAt(3 * s) + e[b_](4 * s) + e.charAt(5 * s), 10), a = Math.round(i.length / 2), h = Math.pow(2, 31) - 1, o = parseInt(t[mo](t.length - 8, t[$r]), 16);
            for (t = t.substring(0, t[$r] - 8), e += o; e[$r] > 10;)e = (parseInt(e.substring(0, 10), 10) + parseInt(e.substring(10, e.length), 10)).toString();
            e = (r * e + a) % h;
            for (var _ = "", f = "", n = 0; n < t.length; n += 2)_ = parseInt(parseInt(t[mo](n, n + 2), 16) ^ Math.floor(e / h * 255), 10), f += String[g_](_), e = (r * e + a) % h;
            return 0 | f[0] ? qN = mN[y_ + wN + E_](f) : null
        } catch (c) {
        }
    }

    function Je() {
        var t = gN;
        if (!t)return void(JN = !0);
        UN = t;
        var i;
        t = t[Kr](ga);
        for (var e = 0; e < t.length && (i = Ze(t[e], EN), !(i && i[Kr](Hh)[$r] >= 8));)1 == t.length && (i = Ze(t[e], p_)), e++;
        if (!i || i[Kr](Hh)[$r] < 8)return VN = !0, "" === EN || EN == m_ + IN + x_ + LN + T_ || EN == w_ + kN + O_ ? (KN = ej, JN = !1, tj = !1, void(HN = !1)) : (KN = ej, void(JN = !0));
        HN = i[Kr](Hh);
        var n = HN[3];
        if (n != BB)return VN = !0, void(tj = !0);
        JN = !1, tj = !1;
        var s = HN[0];
        (S_ == s || k_ == s) && (VN = !1);
        var r = HN[5];
        ZN = r;
        var a = HN[6];
        KN = a
    }

    function Qe() {
        var t = UN;
        if (t) {
            var i;
            t = t.split(ga);
            for (var e = 0; e < t.length && (i = nj(t[e], EN), !(i && i.split(Hh)[$r] >= 8));)1 == t[$r] && (i = nj(t[e], p_)), e++;
            if (i.split(Hh)[$r] >= 8)return void(QN = !1)
        }
        return "" === EN || EN == m_ + IN + x_ + LN + T_ || EN == w_ + kN + O_ ? void(QN = !1) : void(QN = !0)
    }

    function tn() {
        if (VN) {
            var t = sr[DN + ao]._jc, i = XN;
            sr[DN + ao]._jc = function () {
                t.apply(this, arguments), i[Br](this._d2, this.g)
            };
            var e = _s[DN + ao]._fi;
            _s[DN + ao]._fi = function (t) {
                e.apply(this, arguments), i.call(this, t)
            }
        }
    }

    function en() {
        if (ZN !== !0 && ZN) {
            var t = ZN.split(Oa);
            if (3 != t.length)return void(lj.prototype._jc = null);
            var i = parseInt(t[0], 10), e = parseInt(t[1], 10), n = parseInt(t[2], 10), s = 3, r = (365.2425 * (i - 2e3 + 10 * s) + (e - 1) * s * 10 + n) * s * 8 * s * 1200 * 1e3;
            yN > r && (lj.prototype._jc = null)
        }
    }

    function nn() {
        var t = 0 | KN;
        t && (ED[DN + ao]._l6 = function (i, n) {
            var s = i.id;
            return s === e || this[I_](s) ? !1 : this._ix.length > t ? !1 : (y(this._ix, i, n), this._lz[s] = i, i)
        })
    }

    function sn() {
        JN && (ED[DN + ao]._l6 = ED[DN + ao]._fd)
    }

    function rn() {
        QN && (_s[DN + ao]._jj = null)
    }

    function an() {
        ij && (fs[_a]._jd = fs[_a]._5h)
    }

    function hn() {
        tj && (Mj[DN + ao]._jj = null)
    }

    function on() {
        HN === e && (_s[DN + ao]._jj = null)
    }

    function _n(t) {
        return t[L_] ? (t = t.parent, t._dk ? t._dk : t._gh === !1 ? t : null) : null
    }

    function fn(t, i, e) {
        if (e = e || i[A_], e == t)return !1;
        var n = t[C_](e);
        return n || (n = new kB(t, e), t._linkedNodes[e.id] = n), n._ij(i, t)
    }

    function cn(t, i, e) {
        if (e = e || i.toAgent, e == t)return !1;
        var n = t.getEdgeBundle(e);
        return n ? n._nac(i, t) : void 0
    }

    function un(t, i, n) {
        return n === e && (n = i.toAgent), n != t ? (t._80 || (t._80 = new ED), t._80[Vr](i) === !1 ? !1 : void t._99++) : void 0
    }

    function dn(t, i, e) {
        return t._80 && t._80.remove(i) !== !1 ? (t._99--, void cn(t, i, e)) : !1
    }

    function ln(t, i) {
        return i.fromAgent != t ? (t._9n || (t._9n = new ED), t._9n[Vr](i) === !1 ? !1 : void t._n9a++) : void 0
    }

    function vn(t, i) {
        return t._9n && t._9n.remove(i) !== !1 ? (t._n9a--, void cn(i[R_], i, t)) : !1
    }

    function bn(t, i) {
        if (i === e && (i = t instanceof _j), i) {
            if (t.isInvalid())return null;
            var n = bn(t.from, !1);
            if (t.isLooped())return n;
            for (var s = bn(t.to, !1); null != n && null != s;) {
                if (n == s)return n;
                if (n.isDescendantOf(s))return s;
                if (s.isDescendantOf(n))return n;
                n = bn(n, !1), s = bn(s, !1)
            }
            return null
        }
        for (var r = t[L_]; null != r;) {
            if (r._i0())return r;
            r = r.parent
        }
        return null
    }

    function gn(t, i, e) {
        t._i0() && t[jr]() && t.children[l_](function (t) {
            t instanceof fj && i.add(t) && gn(t, i, e)
        }, this), t[P_]() && t._e0[l_](function (t) {
            (null == e || e[D_](t)) && i[Vr](t) && gn(t, i, e)
        })
    }

    function yn(t, i) {
        i.parent ? i[L_].setChildIndex(i, i[L_][M_] - 1) : t.roots.setIndex(i, t[N_].length - 1)
    }

    function En(t, i) {
        if (i instanceof _j)return void(i.isInvalid() || mn(t, i));
        for (yn(t, i); i = i[L_];)yn(t, i)
    }

    function pn(t, i) {
        if (i instanceof _j)return void(i[j_]() || mn(t, i));
        for (yn(t, i); i = i[L_];)yn(t, i)
    }

    function mn(t, i) {
        var e = i.fromAgent;
        if (i.isLooped())yn(t, e); else {
            var n = i.toAgent;
            yn(t, e), yn(t, n)
        }
    }

    function xn(t, i) {
        return t._99++, t._g3 ? (i._hq = t._ho, t._ho._ht = i, void(t._ho = i)) : (t._g3 = i, void(t._ho = i))
    }

    function Tn(t, i) {
        t._99--, t._ho == i && (t._ho = i._hq), i._hq ? i._hq._ht = i._ht : t._g3 = i._ht, i._ht && (i._ht._hq = i._hq), i._hq = null, i._ht = null, cn(t, i, i[B_])
    }

    function wn(t, i) {
        return t._n9a++, t._ib ? (i._k0 = t._iz, t._iz._k1 = i, void(t._iz = i)) : (t._ib = i, void(t._iz = i))
    }

    function On(t, i) {
        t._n9a--, t._iz == i && (t._iz = i._k0), i._k0 ? i._k0._k1 = i._k1 : t._ib = i._k1, i._k1 && (i._k1._k0 = i._k0), i._k0 = null, i._k1 = null
    }

    function Sn(t, i) {
        return i = i || new ED, t.forEachEdge(function (t) {
            i[Vr]({id: t.id, edge: t, fromAgent: t.$from._dk, toAgent: t[B_]._dk})
        }), t[$_](function (t) {
            t instanceof fj && Sn(t, i)
        }), i
    }

    function kn(t, i, e) {
        return Ln(t, i, e) === !1 ? !1 : In(t, i, e)
    }

    function In(t, i, e) {
        if (t._g3)for (var n = t._g3; n;) {
            if (i[Br](e, n) === !1)return !1;
            n = n._ht
        }
    }

    function Ln(t, i, e) {
        if (t._ib)for (var n = t._ib; n;) {
            if (i.call(e, n) === !1)return !1;
            n = n._k1
        }
    }

    function An(t, i, n, s, r, a, h) {
        return a || h ? (a = a || 0, h = h === e ? a : h || 0, a = Math[oo](a, s / 2), h = Math.min(h, r / 2), t.moveTo(i + a, n), t[G_](i + s - a, n), t.quadTo(i + s, n, i + s, n + h), t.lineTo(i + s, n + r - h), t.quadTo(i + s, n + r, i + s - a, n + r), t.lineTo(i + a, n + r), t.quadTo(i, n + r, i, n + r - h), t.lineTo(i, n + h), t.quadTo(i, n, i + a, n), t[F_](), t) : (t.moveTo(i, n), t.lineTo(i + s, n), t[G_](i + s, n + r), t.lineTo(i, n + r), t[F_](), t)
    }

    function Cn(t, i) {
        var e = i.r || 1, n = i.cx || 0, s = i.cy || 0, r = e * Math.tan(Math.PI / 8), a = e * Math.sin(Math.PI / 4);
        t.moveTo(n + e, s), t.quadTo(n + e, s + r, n + a, s + a), t[z_](n + r, s + e, n, s + e), t[z_](n - r, s + e, n - a, s + a), t.quadTo(n - e, s + r, n - e, s), t[z_](n - e, s - r, n - a, s - a), t.quadTo(n - r, s - e, n, s - e), t.quadTo(n + r, s - e, n + a, s - a), t[z_](n + e, s - r, n + e, s)
    }

    function Rn(t, i, e, n, s) {
        i instanceof ee && (n = i.width, s = i[Dh], e = i.cy - s / 2, i = i.cx - n / 2);
        var r = .5522848, a = n / 2 * r, h = s / 2 * r, o = i + n, _ = e + s, f = i + n / 2, c = e + s / 2;
        return t[Y_](i, c), t.curveTo(i, c - h, f - a, e, f, e), t[H_](f + a, e, o, c - h, o, c), t.curveTo(o, c + h, f + a, _, f, _), t.curveTo(f - a, _, i, c + h, i, c), t
    }

    function Pn(t, i, e, n, s) {
        var r = 2 * n, a = 2 * s, h = i + n / 2, o = e + s / 2;
        return t.moveTo(h - r / 4, o - a / 12), t.lineTo(i + .306 * n, e + .579 * s), t[G_](h - r / 6, o + a / 4), t.lineTo(i + n / 2, e + .733 * s), t.lineTo(h + r / 6, o + a / 4), t[G_](i + .693 * n, e + .579 * s), t[G_](h + r / 4, o - a / 12), t[G_](i + .611 * n, e + .332 * s), t[G_](h + 0, o - a / 4), t.lineTo(i + .388 * n, e + .332 * s), t.closePath(), t
    }

    function Dn(t, i, e, n, s) {
        return t[Y_](i, e), t.lineTo(i + n, e + s / 2), t.lineTo(i, e + s), t.closePath(), t
    }

    function Mn(t, i, e, n, s) {
        return t.moveTo(i, e + s / 2), t.lineTo(i + n / 2, e), t.lineTo(i + n, e + s / 2), t.lineTo(i + n / 2, e + s), t.closePath(), t
    }

    function Nn(t, i, e, n, s, r) {
        return t.moveTo(i, e), t[G_](i + n, e + s / 2), t[G_](i, e + s), r || (t[G_](i + .25 * n, e + s / 2), t[F_]()), t
    }

    function jn(t, i, e, n, s) {
        if (!t || 3 > t)throw new Error("edge number must greater than 2");
        t = 0 | t, n = n || 50, s = s || 0, i = i || 0, e = e || 0;
        for (var r, a, h = 0, o = 2 * Math.PI / t, _ = new nN; t > h;)r = i + n * Math.cos(s), a = e + n * Math.sin(s), h ? _[G_](r, a) : _.moveTo(r, a), ++h, s += o;
        return _.closePath(), _
    }

    function Bn() {
        var t = new nN;
        return t[Y_](75, 40), t[H_](75, 37, 70, 25, 50, 25), t.curveTo(20, 25, 20, 62.5, 20, 62.5), t[H_](20, 80, 40, 102, 75, 120), t[H_](110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t[H_](85, 25, 75, 37, 75, 40), t
    }

    function $n() {
        var t = new nN;
        return t.moveTo(20, 0), t.lineTo(80, 0), t[G_](100, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function Gn() {
        var t = new nN;
        return t.moveTo(100, 0), t[G_](100, 80), t.lineTo(0, 100), t[G_](0, 20), t[F_](), t
    }

    function Fn() {
        var t = new nN;
        return t[Y_](20, 0), t.lineTo(100, 0), t[G_](80, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function zn() {
        var t = new nN;
        return t[Y_](43, 23), t[G_](28, 10), t.lineTo(37, 2), t.lineTo(63, 31), t[G_](37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t[F_](), t
    }

    function Yn() {
        var t = new nN;
        return t.moveTo(1, 8), t.lineTo(7, 2), t[G_](32, 26), t[G_](7, 50), t[G_](1, 44), t[G_](18, 26), t[F_](), t[Y_](27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t[G_](33, 50), t[G_](27, 44), t[G_](44, 26), t[F_](), t
    }

    function Hn() {
        var t = new nN;
        return t.moveTo(0, 15), t[G_](23, 15), t[G_](23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t[G_](23, 29), t[G_](0, 29), t.closePath(), t
    }

    function Un() {
        var t = new nN;
        return t.moveTo(0, 21), t.lineTo(30, 21), t[G_](19, 0), t[G_](25, 0), t[G_](47, 25), t.lineTo(25, 48), t[G_](19, 48), t[G_](30, 28), t[G_](0, 28), t[F_](), t
    }

    function qn() {
        var t = new nN;
        return t.moveTo(0, 0), t[G_](34, 24), t[G_](0, 48), t[G_](14, 24), t.closePath(), t
    }

    function Wn() {
        var t = new nN;
        return t.moveTo(20, 0), t.lineTo(34, 14), t.lineTo(20, 28), t.lineTo(22, 18), t[G_](1, 25), t.lineTo(10, 14), t.lineTo(1, 3), t.lineTo(22, 10), t.closePath(), t
    }

    function Xn() {
        var t = new nN;
        return t[Y_](4, 18), t[G_](45, 18), t.lineTo(37, 4), t[G_](83, 25), t.lineTo(37, 46), t.lineTo(45, 32), t.lineTo(4, 32), t.closePath(), t
    }

    function Vn() {
        var t = new nN;
        return t.moveTo(17, 11), t.lineTo(27, 11), t[G_](42, 27), t.lineTo(27, 42), t.lineTo(17, 42), t.lineTo(28, 30), t.lineTo(4, 30), t[G_](4, 23), t[G_](28, 23), t[F_](), t
    }

    function Kn() {
        uj.register(xM.SHAPE_CIRCLE, Rn(new nN, 0, 0, 100, 100)), uj[U_](xM.SHAPE_RECT, An(new nN, 0, 0, 100, 100)), uj.register(xM.SHAPE_ROUNDRECT, An(new nN, 0, 0, 100, 100, 20, 20)), uj.register(xM.SHAPE_STAR, Pn(new nN, 0, 0, 100, 100)), uj[U_](xM.SHAPE_TRIANGLE, Dn(new nN, 0, 0, 100, 100)), uj.register(xM.SHAPE_PENTAGON, jn(5)), uj.register(xM[q_], jn(6)), uj.register(xM.SHAPE_DIAMOND, Mn(new nN, 0, 0, 100, 100)), uj[U_](xM.SHAPE_HEART, Bn()), uj[U_](xM[W_], $n()), uj.register(xM[X_], Gn()), uj[U_](xM[V_], Fn());
        var t = new nN;
        t[Y_](20, 0), t[G_](40, 0), t.lineTo(40, 20), t[G_](60, 20), t.lineTo(60, 40), t[G_](40, 40), t.lineTo(40, 60), t[G_](20, 60), t.lineTo(20, 40), t.lineTo(0, 40), t.lineTo(0, 20), t[G_](20, 20), t[F_](), uj.register(xM[K_], t), uj[U_](xM[Z_], Nn(new nN, 0, 0, 100, 100)), uj[U_](xM.SHAPE_ARROW_1, zn()), uj[U_](xM[J_], Yn()), uj.register(xM.SHAPE_ARROW_3, Hn()), uj[U_](xM[Q_], Un()), uj[U_](xM[tf], qn()), uj.register(xM.SHAPE_ARROW_6, Wn()), uj[U_](xM[ef], Xn()), uj[U_](xM[nf], Vn()), uj.register(xM.SHAPE_ARROW_OPEN, Nn(new nN, 0, 0, 100, 100, !0))
    }

    function Zn() {
        j(this, Zn, arguments), this[sf] = !0
    }

    function Jn() {
        j(this, Jn), this._13 = new HD
    }

    function Qn() {
        if (this._gh === !0) {
            var t = this._80, i = this._9n;
            if (t)for (t = t._ix; t.length;) {
                var e = t[0];
                dn(this, e, e[A_])
            }
            if (i)for (i = i._ix; i[$r];) {
                var e = i[0];
                vn(this, e, e.fromAgent)
            }
            return void this.forEachChild(function (t) {
                t._i0() && Qn.call(t)
            })
        }
        var n = Sn(this);
        n.forEach(function (t) {
            t = t.edge;
            var i = t[rf], e = t.$to, n = i[af](this), s = e.isDescendantOf(this);
            n && !s ? (un(this, t), fn(this, t)) : s && !n && (ln(this, t), fn(t.fromAgent, t, this))
        }, this)
    }

    function ts() {
        j(this, ts, arguments), this.$image = null
    }

    function is(t, i, e, n) {
        return t[i] = e, n ? {
            get: function () {
                return this[i]
            }, set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this._n9m, this._1x = !0;
                    for (var e = n.length; --e >= 0;)this[n[e]] = !0
                }
            }
        } : {
            get: function () {
                return this[i]
            }, set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function es(t, i) {
        var e = {}, n = {};
        for (var s in i) {
            var r = i[s];
            r.validateFlags && r[hf][l_](function (t, i, e) {
                e[i] = of + t, n[t] = !0
            }), e[s] = is(t, da + s, r.value, r[hf])
        }
        for (var a in n)t[of + a] = !0;
        Object.defineProperties(t, e)
    }

    function ns(t, i, e, n) {
        if (Array[ia](i))for (var s = i.length; --s >= 0;)ns(t, i[s], e, n); else {
            var r = i.target;
            if (r) {
                if (r instanceof lj || (r = t[r]), !r)return
            } else r = t;
            if (n || (n = t[_f](i.property, e)), i.bindingProperty && (r[i[ff]] = n), i[cf]) {
                var a = i.callback;
                a instanceof Function || (a = t[a]), a instanceof Function && a[Br](t, n, r)
            }
        }
    }

    function ss() {
        vj[l_](function (t) {
            this[t] = {}
        }, this)
    }

    function rs(t, i, e, n) {
        return n == xM[uf] ? void(t[e] = i) : n == xM.PROPERTY_TYPE_CLIENT ? void t[Uo](e, i) : n == xM.PROPERTY_TYPE_STYLE ? void t[df](e, i) : !1
    }

    function as() {
        j(this, as, arguments)
    }

    function hs() {
        j(this, hs, arguments)
    }

    function os(t) {
        var i = Bi(!0);
        return Xe(i.g), i[lf] = function () {
            return !1
        }, t[vf](i), ui(i, Rj), i
    }

    function _s(t) {
        this._mx = t, w(this._mx, bf), t.tabIndex = 0, this._ji = os(t), this.ratio = this._ji.ratio || 1, this._topCanvas = new sr(this, t), this._fj = [], this._ncd = new Pj, this._jm = new fs(this), this._mw = new ED;
        var i = this;
        this._mw._fd = function (t, e, n) {
            e[gf]();
            var s = e[yf];
            return e._hw && s && i._ncd._ml(e.$x + e[yf].x, e.$y + e[yf].y, e.uiBounds.width, e[yf][Dh]), ED.prototype._fd[Br](this, t, e, n)
        }, this._mw.clear = function () {
            return this[l_](function (t) {
                t.destroy()
            }), ED.prototype[eh][Br](this)
        }, this._naa = [], this._8f = {}, this._8e = new SD, this._88 = [], this._naj()
    }

    function fs(t) {
        this._d2 = t, this._jm = new yD, this._jm[Rh] = t.ratio, this._6q = new SD
    }

    function cs(t, i, e, n) {
        var s = us(t, i, e, n), r = [];
        if (bs(t))ds(s, i, e, r, n[Ef](bj.EDGE_EXTEND)); else {
            Ss(t, i, e, r, s, n);
            var a = ls(t, n), h = a ? ms(t, s, i, e, n.getStyle(bj[pf])) : n.getStyle(bj.EDGE_SPLIT_VALUE);
            0 == h && (s = !s)
        }
        return r
    }

    function us(t, i, e) {
        if (null != t) {
            if (t == xM.EDGE_TYPE_ELBOW_HORIZONTAL || t == xM[mf] || t == xM[xf] || t == xM[Tf] || t == xM.EDGE_TYPE_EXTEND_RIGHT)return !0;
            if (t == xM.EDGE_TYPE_ELBOW_VERTICAL || t == xM[wf] || t == xM.EDGE_TYPE_VERTICAL_HORIZONTAL || t == xM.EDGE_TYPE_EXTEND_TOP || t == xM.EDGE_TYPE_EXTEND_BOTTOM)return !1
        }
        var n = Es(i, e), s = ps(i, e);
        return n >= s
    }

    function ds(t, i, e, n, s) {
        t ? Cs(i, e, n, s) : Rs(i, e, n, s)
    }

    function ls(t, i) {
        return i.getStyle(bj.EDGE_SPLIT_BY_PERCENT)
    }

    function vs(t) {
        return null != t && (t == xM[Of] || t == xM.EDGE_TYPE_EXTEND_LEFT || t == xM[Sf] || t == xM[kf])
    }

    function bs(t) {
        return t && (t == xM.EDGE_TYPE_ELBOW || t == xM[If] || t == xM.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function gs(t, i, e, n, s) {
        if (t == xM[xf] || t == xM.EDGE_TYPE_VERTICAL_HORIZONTAL)return new xD(n.x + n.width / 2, n.y + n.height / 2);
        var r;
        if (vs(t)) {
            var a = Math.min(e.y, n.y), h = Math[oo](e.x, n.x), o = Math.max(e[Ca], n.bottom), _ = Math[Uh](e.right, n[Aa]);
            if (r = s[Ef](bj[Lf]), t == xM[Of])return new xD((h + _) / 2, a - r);
            if (t == xM.EDGE_TYPE_EXTEND_LEFT)return new xD(h - r, (a + o) / 2);
            if (t == xM.EDGE_TYPE_EXTEND_BOTTOM)return new xD((h + _) / 2, o + r);
            if (t == xM[kf])return new xD(_ + r, (a + o) / 2)
        }
        var f = ls(t, s);
        if (r = f ? ms(t, i, e, n, s[Ef](bj[pf])) : s[Ef](bj.EDGE_SPLIT_VALUE), r == Number.NEGATIVE_INFINITY || r == Number.POSITIVE_INFINITY)return new xD(n.x + n[Ah] / 2, n.y + n.height / 2);
        if (0 == r)return new xD(e.x + e.width / 2, e.y + e[Dh] / 2);
        if (i) {
            var c = e.x + e[Aa] < n.x + n[Aa];
            return new xD(ws(c, r, e.x, e[Ah]), e.y + e[Dh] / 2)
        }
        var u = e.y + e.bottom < n.y + n.bottom;
        return new xD(e.x + e[Ah] / 2, ws(u, r, e.y, e[Dh]))
    }

    function ys(t, i, e, n) {
        var s = Math[Uh](i, n) - Math.min(t, e);
        return s - (i - t + n - e)
    }

    function Es(t, i) {
        var e = Math[Uh](t.x + t[Ah], i.x + i.width) - Math.min(t.x, i.x);
        return e - t[Ah] - i[Ah]
    }

    function ps(t, i) {
        var e = Math.max(t.y + t.height, i.y + i[Dh]) - Math[oo](t.y, i.y);
        return e - t[Dh] - i[Dh]
    }

    function ms(t, i, e, n, s) {
        var r = xs(s, i, e, n, null);
        return r * s
    }

    function xs(t, i, e, n) {
        return i ? Ts(t, e.x, e.right, n.x, n[Aa]) : Ts(t, e.y, e.bottom, n.y, n[Ca])
    }

    function Ts(t, i, e, n, s) {
        var r = ys(i, e, n, s), a = n + s > i + e;
        if (r > 0) {
            if (1 == t)return r + (s - n) / 2;
            if (t >= 0 && 1 > t)return r;
            if (0 > t)return a ? n - i : e - s
        }
        return Math[qh](a && t > 0 || !a && 0 > t ? e - s : i - n)
    }

    function ws(t, i, e, n) {
        return t == i > 0 ? e + n + Math[qh](i) : e - Math.abs(i)
    }

    function Os(t, i) {
        var e = t[$r];
        if (!(3 > e)) {
            var n = i[Ef](bj.EDGE_CORNER);
            if (n != xM.EDGE_CORNER_NONE) {
                var s = i.getStyle(bj.EDGE_CORNER_RADIUS), r = 0, a = 0;
                s && (S(s) ? r = a = s : (r = s.x || 0, a = s.y || 0));
                for (var h, o, _, f, c = t[0], u = t[1], d = null, l = 2; e > l; l++) {
                    var v = t[l], b = u.x - c.x, g = u.y - c.y, p = v.x - u.x, m = v.y - u.y, x = !b || b > -SM && SM > b, T = !g || g > -SM && SM > g, w = !p || p > -SM && SM > p, O = !m || m > -SM && SM > m, k = T;
                    (x && O || T && w) && (k ? (h = Math[oo](2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math[oo](l == e - 1 ? Math[qh](m) : Math.abs(m) / 2, a), _ = new xD(u.x - (b > 0 ? h : -h), u.y), f = new xD(u.x, u.y + (m > 0 ? o : -o))) : (h = Math.min(l == e - 1 ? Math.abs(p) : Math.abs(p) / 2, r), o = Math[oo](2 == l ? Math.abs(g) : Math.abs(g) / 2, a), _ = new xD(u.x, u.y - (g > 0 ? o : -o)), f = new xD(u.x + (p > 0 ? h : -h), u.y)), E(t, u), l--, e--, (_.x != c.x || _.y != c.y) && (y(t, _, l), l++, e++), n == xM[Af] ? (y(t, f, l), l++, e++) : n == xM.EDGE_CORNER_ROUND && (y(t, [u, f], l), l++, e++)), c = u, u = v
                }
                null != d && f.x == u.x && f.y == u.y && E(t, u)
            }
        }
    }

    function Ss(t, i, e, n, s, r) {
        var a = r[Ef](bj.EDGE_CONTROL_POINT), h = null == a;
        if (null != a) {
            var o = (new SD)[Cf](i).union(e);
            o.intersects(a) || (s = ks(a.x, a.y, o.y, o.x, o[Ca], o[Aa]))
        } else a = gs(t, s, i, e, r);
        s ? As(i, e, a, n, h) : Ls(i, e, a, n, h)
    }

    function ks(t, i, e, n, s, r) {
        return e > i && e - i > n - t && e - i > t - r || i > s && i - s > n - t && i - s > t - r ? !1 : !0
    }

    function Is(t, i, e) {
        return i >= t.x && i <= t[Aa] && e >= t.y && e <= t.bottom
    }

    function Ls(t, i, e, n, s) {
        var r = Math.max(t.y, i.y), a = Math[oo](t.y + t[Dh], i.y + i[Dh]), h = null != e ? e.y : a + (r - a) / 2, o = t.x + t[Ah] / 2, _ = i.x + i[Ah] / 2;
        if (0 == s && null != e && (e.x >= t.x && e.x <= t.x + t.width && (o = e.x), e.x >= i.x && e.x <= i.x + i[Ah] && (_ = e.x)), Is(i, o, h) || Is(t, o, h) || n.push(new xD(o, h)), Is(i, _, h) || Is(t, _, h) || n[Qh](new xD(_, h)), 0 == n[$r])if (null != e)Is(i, e.x, h) || Is(t, e.x, h) || n.push(new xD(e.x, h)); else {
            var f = Math[Uh](t.x, i.x), c = Math[oo](t.x + t[Ah], i.x + i.width);
            n[Qh](new xD(f + (c - f) / 2, h))
        }
    }

    function As(t, i, e, n, s) {
        var r = Math.max(t.x, i.x), a = Math[oo](t.x + t[Ah], i.x + i.width), h = null != e ? e.x : a + (r - a) / 2, o = t.y + t.height / 2, _ = i.y + i[Dh] / 2;
        if (0 == s && null != e && (e.y >= t.y && e.y <= t.y + t[Dh] && (o = e.y), e.y >= i.y && e.y <= i.y + i.height && (_ = e.y)), Is(i, h, o) || Is(t, h, o) || n[Qh](new xD(h, o)), Is(i, h, _) || Is(t, h, _) || n[Qh](new xD(h, _)), 0 == n[$r])if (null != e)Is(i, h, e.y) || Is(t, h, e.y) || n[Qh](new xD(h, e.y)); else {
            var f = Math[Uh](t.y, i.y), c = Math[oo](t.y + t[Dh], i.y + i.height);
            n[Qh](new xD(h, f + (c - f) / 2))
        }
    }

    function Cs(t, i, e, n) {
        var s = i.x + i.width < t.x, r = t.x + t.width < i.x, a = s ? t.x : t.x + t.width, h = t.y + t.height / 2, o = r ? i.x : i.x + i[Ah], _ = i.y + i[Dh] / 2, f = n, c = s ? -f : f, u = new xD(a + c, h);
        c = r ? -f : f;
        var d = new xD(o + c, _);
        if (s == r) {
            var l = s ? Math[oo](a, o) - n : Math.max(a, o) + n;
            e[Qh](new xD(l, h)), e[Qh](new xD(l, _))
        } else if (u.x < d.x == s) {
            var v = h + (_ - h) / 2;
            e[Qh](u), e[Qh](new xD(u.x, v)), e[Qh](new xD(d.x, v)), e[Qh](d)
        } else e.push(u), e.push(d)
    }

    function Rs(t, i, e, n) {
        var s = i.y + i.height < t.y, r = t.y + t[Dh] < i.y, a = t.x + t.width / 2, h = s ? t.y : t.y + t.height, o = i.x + i[Ah] / 2, _ = r ? i.y : i.y + i.height, f = n, c = s ? -f : f, u = new xD(a, h + c);
        c = r ? -f : f;
        var d = new xD(o, _ + c);
        if (s == r) {
            var l = s ? Math[oo](h, _) - n : Math.max(h, _) + n;
            e.push(new xD(a, l)), e.push(new xD(o, l))
        } else if (u.y < d.y == s) {
            var v = a + (o - a) / 2;
            e.push(u), e.push(new xD(v, u.y)), e[Qh](new xD(v, d.y)), e.push(d)
        } else e[Qh](u), e.push(d)
    }

    function Ps(t) {
        return t == xM.EDGE_TYPE_ORTHOGONAL || t == xM[mf] || t == xM.EDGE_TYPE_HORIZONTAL_VERTICAL || t == xM[wf] || t == xM[Rf] || t == xM.EDGE_TYPE_EXTEND_TOP || t == xM[Tf] || t == xM.EDGE_TYPE_EXTEND_BOTTOM || t == xM.EDGE_TYPE_EXTEND_RIGHT || t == xM[Pf] || t == xM[If] || t == xM.EDGE_TYPE_ELBOW_VERTICAL
    }

    function Ds(t, i) {
        var e, n;
        i && i[Ah] && i.height ? (e = i.width, n = i[Dh]) : e = n = isNaN(i) ? gD.ARROW_SIZE : i;
        var s = uj[Df](t, -e, -n / 2, e, n);
        return s || (s = new nN, s.moveTo(-e, -n / 2), s.lineTo(0, 0), s.lineTo(-e, n / 2)), s
    }

    function Ms(t, i) {
        var e = Math[La](i), n = Math[Lh](i), s = t.x, r = t.y;
        return t.x = s * n - r * e, t.y = s * e + r * n, t
    }

    function Ns(t, i, e, n, s, r) {
        var a = Math.atan2(n - i, e - t), h = new xD(s, r);
        return h.rotate = a, Ms(h, a), h.x += t, h.y += i, h
    }

    function js(t, i, e, n, s) {
        i = si(n, i.x, i.y, e.x, e.y), e = si(s, e.x, e.y, i.x, i.y);
        var r = Math.PI / 2 + Math[Wh](e.y - i.y, e.x - i.x), a = t * Math[Lh](r), h = t * Math.sin(r), o = e.x - i.x, _ = e.y - i.y, f = i.x + .25 * o, c = i.y + .25 * _, u = i.x + .75 * o, d = i.y + .75 * _;
        return [new iN(JM, [f + a, c + h, u + a, d + h])]
    }

    function Bs(t, i, n) {
        if (y(t, new iN(VM, [i.x, i.y]), 0), n) {
            if (t[$r] > 1) {
                var s = t[t[$r] - 1];
                if (ZM == s.type && (s[po] || s.points[2] === e || null === s[Jh][2]))return s[Jh][2] = n.x, s.points[3] = n.y, void(s.invalidTerminal = !0);
                if (JM == s.type && (s.invalidTerminal || s[Jh][4] === e || null === s[Jh][4]))return s[Jh][4] = n.x, s[Jh][5] = n.y, void(s[po] = !0)
            }
            t[Qh](new iN(KM, [n.x, n.y]))
        }
    }

    function $s(t, i, e, n, s, r, a, h) {
        return i.hasPathSegments() ? void(e._gd = i._9d[Mf]()) : n == s ? void t.drawLoopedEdge(e, n, r, a) : void t[Nf](e, n, s, r, a, h)
    }

    function Gs(t, i, e, n, s) {
        var r = n == s, a = t[jf][Bf](n), h = r ? a : t.graph.getUI(s), o = i.edgeType, _ = a[$f].clone(), f = r ? _ : h.bodyBounds.clone(), c = i[Gf]();
        if (!r && !o && !c) {
            var u = n[sf], d = s[sf];
            if (u != d) {
                var l, v, b, g, y = i[Ff];
                u ? (l = a, v = _, b = h, g = f) : (l = h, v = f, b = a, g = _);
                var E = qs(v, l, u, b, g, y);
                if (E && 2 == E.length) {
                    var p = E[0], m = E[1];
                    return e.moveTo(p.x, p.y), m.x == p.x && m.y == p.y && (m.y += .01), e.lineTo(m.x, m.y), void(e._6f = !0)
                }
            }
        }
        $s(t, i, e, a, h, o, _, f), (!r || c) && Fs(t, i, e, a, h, o, _, f), e._6f = !0
    }

    function Fs(t, i, n, s, r, a, h, o) {
        var _ = h.center, f = o.center, c = t[zf], u = t.toAtEdge;
        if (!c && !u)return void Bs(n._gd, _, f);
        var d = n._gd;
        if (d[$r]) {
            if (c) {
                var l = d[0], v = l[Yf];
                h.contains(v.x, v.y) && (l.type == JM ? (_ = v, v = {
                    x: l.points[2],
                    y: l.points[3]
                }, l.points = l[Jh][Fr](2), l[ao] = ZM) : l[ao] == ZM && (_ = v, v = {
                    x: l.points[0],
                    y: l.points[1]
                }, l.points = l.points[Fr](2), l[ao] = KM)), zs(s, h, v, _, e, e)
            }
            if (u) {
                var b, g = d[d.length - 1], y = g[ro], E = g[Jh].length, p = y.x === e || y.y === e;
                E >= 4 && (p || o[Hf](y.x, y.y)) && (p || (f = y), b = !0, y = {
                    x: g.points[E - 4],
                    y: g[Jh][E - 3]
                }, o.contains(y.x, y.y) && (f = y, E >= 6 ? (y = {
                    x: g[Jh][E - 6],
                    y: g[Jh][E - 5]
                }, g.points = g[Jh][Fr](0, 4), g.type = ZM) : 1 == d.length ? (y = {
                    x: _.x,
                    y: _.y
                }, g[Jh] = g.points.slice(0, 2), g[ao] = KM) : (g = d[d.length - 2], y = g[ro]))), zs(r, o, y, f, e, e), b && (E = g.points[$r], g.points[E - 2] = f.x, g[Jh][E - 1] = f.y, f = null)
            }
        } else {
            var m = Math[Wh](f.y - _.y, f.x - _.x), x = Math.cos(m), T = Math.sin(m);
            c && zs(s, h, f, _, x, T), u && zs(r, o, _, f, -x, -T)
        }
        Bs(n._gd, _, f)
    }

    function zs(t, i, n, s, r, a) {
        if (r === e) {
            var h = Math[Wh](n.y - s.y, n.x - s.x);
            r = Math[Lh](h), a = Math.sin(h)
        }
        for (r += r, a += a, n = {x: n.x, y: n.y}, i.contains(n.x, n.y) || (n = si(i, s.x, s.y, n.x, n.y)); ;) {
            if (!i.contains(n.x, n.y))return s;
            if (t._hk(n.x - r, n.y - a, 2)) {
                s.x = n.x - r / 4, s.y = n.y - a / 4;
                break
            }
            n.x -= r, n.y -= a
        }
        return s
    }

    function Ys(t, i, e, n, s, r, a, h) {
        if (i.hasPathSegments())return i._9d;
        var o = i[Uf];
        if (Ps(o)) {
            var _ = cs(o, e, n, t, s, r);
            if (!_ || !_[$r])return null;
            y(_, a, 0), _.push(h), o != xM[Pf] && Os(_, t);
            for (var f = [], c = _[$r], u = 1; c - 1 > u; u++) {
                var d = _[u];
                f.push(L(d) ? new iN(ZM, [d[0].x, d[0].y, d[1].x, d[1].y]) : new iN(KM, [d.x, d.y]))
            }
            return f
        }
        if (i[qf]) {
            var l = t._2w();
            if (!l)return;
            return js(l, a, h, e, n)
        }
    }

    function Hs(t, i, e) {
        var n = t[Ef](bj[Wf]), s = t._2w(), r = n + .2 * s, a = i.x + i[Ah] - r, h = i.y, o = i.x + i[Ah], _ = i.y + r;
        n += s;
        var f = .707, c = -.707, u = i.x + i.width, d = i.y, l = u + f * n, v = d + c * n, b = {x: a, y: h}, g = {
            x: l,
            y: v
        }, y = {
            x: o,
            y: _
        }, E = b.x, p = g.x, m = y.x, x = b.y, T = g.y, w = y.y, O = ((w - x) * (T * T - x * x + p * p - E * E) + (T - x) * (x * x - w * w + E * E - m * m)) / (2 * (p - E) * (w - x) - 2 * (m - E) * (T - x)), S = ((m - E) * (p * p - E * E + T * T - x * x) + (p - E) * (E * E - m * m + x * x - w * w)) / (2 * (T - x) * (m - E) - 2 * (w - x) * (p - E)), r = Math.sqrt((E - O) * (E - O) + (x - S) * (x - S)), k = Math[Wh](b.y - S, b.x - O), I = Math[Wh](y.y - S, y.x - O), L = I - k;
        return 0 > L && (L += 2 * Math.PI), Us(O, S, k, L, r, r, !0, e)
    }

    function Us(t, i, e, n, s, r, a, h) {
        var o, _, f, c, u, d, l, v, b, g, y;
        if (Math.abs(n) > 2 * Math.PI && (n = 2 * Math.PI), u = Math.ceil(Math[qh](n) / (Math.PI / 4)), o = n / u, _ = o, f = e, u > 0) {
            d = t + Math[Lh](f) * s, l = i + Math[La](f) * r, moveTo ? h[Y_](d, l) : h[G_](d, l);
            for (var E = 0; u > E; E++)f += _, c = f - _ / 2, v = t + Math.cos(f) * s, b = i + Math.sin(f) * r, g = t + Math.cos(c) * (s / Math[Lh](_ / 2)), y = i + Math[La](c) * (r / Math[Lh](_ / 2)), h[z_](g, y, v, b)
        }
    }

    function qs(t, i, n, s, r, a) {
        var h = r.cx, o = r.cy, _ = h < t.x, f = h > t[Aa], c = o < t.y, u = o > t[Ca], d = t.cx, l = t.cy, v = _ || f, b = c || u, g = a === e || null === a;
        g && (a = Math[Wh](o - l, h - d), v || b || (a += Math.PI));
        var y = Math[Lh](a), E = Math[La](a), p = Xs(i, t, {x: h, y: o}, -y, -E);
        p || (a = Math[Wh](o - l, h - d), v || b || (a += Math.PI), y = Math.cos(a), E = Math.sin(a), p = Xs(i, t, {
                x: h,
                y: o
            }, -y, -E) || {x: d, y: l});
        var m = Xs(s, r, {x: p.x, y: p.y}, -p.perX || y, -p.perY || E, !1) || {x: h, y: o};
        return n ? [p, m] : [m, p]
    }

    function Ws(t, i, e, n, s, r) {
        var a = i < t.x, h = i > t.right, o = e < t.y, _ = e > t.bottom;
        if (a && n > 0) {
            var f = t.x - i, c = e + f * s / n;
            if (c >= t.y && c <= t[Ca])return {x: t.x, y: c, perX: n, perY: s}
        }
        if (h && 0 > n) {
            var f = t[Aa] - i, c = e + f * s / n;
            if (c >= t.y && c <= t[Ca])return {x: t[Aa], y: c, perX: n, perY: s}
        }
        if (o && s > 0) {
            var u = t.y - e, d = i + u * n / s;
            if (d >= t.x && d <= t.right)return {x: d, y: t.y, perX: n, perY: s}
        }
        if (_ && 0 > s) {
            var u = t[Ca] - e, d = i + u * n / s;
            if (d >= t.x && d <= t.right)return {x: d, y: t[Ca], perX: n, perY: s}
        }
        return r !== !1 ? Ws(t, i, e, -n, -s, !1) : void 0
    }

    function Xs(t, i, e, n, s, r) {
        if (!i[Hf](e.x, e.y)) {
            if (e = Ws(i, e.x, e.y, n, s, r), !e)return;
            return Vs(t, i, e, e.perX, e.perY)
        }
        return r === !1 ? Vs(t, i, e, n, s) : Vs(t, i, {x: e.x, y: e.y, perX: n, perY: s}, n, s) || Vs(t, i, e, -n, -s)
    }

    function Vs(t, i, e, n, s) {
        for (; ;) {
            if (!i.contains(e.x, e.y))return;
            if (t._hk(e.x + n, e.y + s))break;
            e.x += n, e.y += s
        }
        return e
    }

    function Ks(t) {
        return pe(t) ? t : t[Xf](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t.draw ? t : void 0)
    }

    function Zs(t) {
        for (var i = t[L_]; i;) {
            if (i.enableSubNetwork)return i;
            i = i.parent
        }
        return null
    }

    function Js() {
        j(this, Js, arguments)
    }

    function Qs(t, e, n, s, r, a, h) {
        var o = i.createElement(Vf);
        o[Kf] = Zf, ui(o, Bj), e && ui(o, e);
        var _ = i[Jf](Qf);
        return a && (dD ? _.ontouchstart = a : _[tc] = a), _.name = h, _[ic] = n, ui(_, $j), r && ui(_, r), s && di(_, ec, nc), o._img = _, o[vf](_), t.appendChild(o), o
    }

    function tr(t, e) {
        this._navPane = i[Jf](Vf), this._navPane[Kf] = sc, ui(this._navPane, {
            "background-color": rc,
            overflow: ac,
            "float": Ha,
            "user-select": hc,
            position: oc
        }), this._top = Qs(this._navPane, {width: _c}, gD[fc], !1, null, e, Ua), this._left = Qs(this._navPane, {height: _c}, gD[cc], !1, Gj, e, Ha), this._right = Qs(this._navPane, {
            height: _c,
            right: uc
        }, gD[cc], !0, Gj, e, Aa), this._ncottom = Qs(this._navPane, {
            width: _c,
            bottom: uc
        }, gD.NAVIGATION_IMAGE_TOP, !0, null, e, Ca), t[vf](this._navPane)
    }

    function ir(t, i) {
        this._d2 = t;
        var e = function (i) {
            var e, n, s = i.target, r = s.name;
            if (Ha == r)e = 1; else if (Aa == r)e = -1; else if (Ua == r)n = 1; else {
                if (Ca != r)return;
                n = -1
            }
            dD && (s.className = dc, setTimeout(function () {
                s.className = ""
            }, 100)), R(i), t._kd._9u(e, n)
        };
        tr.call(this, i, e), this._3o(i.clientWidth, i.clientHeight)
    }

    function er(t, i) {
        this._d2 = t, this[lc](i, t)
    }

    function nr() {
        j(this, nr, arguments)
    }

    function sr(t, i) {
        this._d2 = t, this._ji = os(i), this.g = this._ji.g, this._9v = new ED
    }

    function rr(t) {
        var i = t[vc], e = [];
        return t[bc][l_](function (i) {
            t.isVisible(i) && t[gc](i) && e[Qh](i)
        }), i.set(e)
    }

    function ar(t, i, n, s) {
        s === e && (s = gD.ZOOM_ANIMATE);
        var r = t.globalToLocal(i);
        return n ? t[yc](r.x, r.y, s) : t[Ec](r.x, r.y, s)
    }

    function hr(t, i, e) {
        var n = t.bounds;
        e = e || n, i = i || 1;
        var s = null;
        s && e[Ah] * e.height * i * i > s && (i = Math[Vh](s / e[Ah] / e[Dh]));
        var r = Bi();
        Xe(r.g), r.width = e[Ah] * i, r[Dh] = e.height * i, t._84._fi(r.g, i, e);
        var a = null;
        try {
            a = r.toDataURL(pc)
        } catch (h) {
            mM[Ia](h)
        }
        return {canvas: r, data: a, width: r.width, height: r.height}
    }

    function or(t) {
        this.graph = t, this.topCanvas = t[mc]
    }

    function _r(t, i) {
        this[xc] = t, this.defaultCursor = i || Tc
    }

    function fr() {
        j(this, fr, arguments)
    }

    function cr(t, i) {
        if (!t)return i;
        var n = {};
        for (var s in t)n[s] = t[s];
        for (var s in i)n[s] === e && (n[s] = i[s]);
        return n
    }

    function ur() {
        j(this, ur, arguments)
    }

    function dr() {
        j(this, dr, arguments)
    }

    function lr() {
        j(this, lr, arguments)
    }

    function vr() {
        j(this, vr, arguments)
    }

    function br(i, e, n) {
        i += t.pageXOffset, e += t[wc];
        var s = n[za]();
        return {x: i + s.left, y: e + s.top}
    }

    function gr(t, i, e) {
        var n = t[Oc], s = t.offsetHeight;
        t.style[Ha] = i - n / 2 + Ph, t.style[Ua] = e - s / 2 + Ph
    }

    function yr(t) {
        var e = i.createElement(Mh), n = e.getContext($h), s = getComputedStyle(t, null), r = s.font;
        r || (r = s.fontStyle + Xr + s[Sc] + Xr + s[kc]), n[zh] = r;
        var a = t[Ic], h = a.split(Hh), o = parseInt(s.fontSize), _ = 0, f = 0;
        return mM.forEach(h, function (t) {
            var i = n[Lc](t)[Ah];
            i > _ && (_ = i), f += 1.2 * o
        }), {width: _, height: f}
    }

    function Er(t, e) {
        if (Jr == typeof t[Ac] && Jr == typeof t.selectionEnd) {
            var n = t[Ic], s = t.selectionStart;
            t.value = n[Fr](0, s) + e + n.slice(t.selectionEnd), t.selectionEnd = t.selectionStart = s + e.length
        } else if (Cc != typeof i[Rc]) {
            var r = i.selection.createRange();
            r[Pc] = e, r[Dc](!1), r.select()
        }
    }

    function pr(i) {
        if (eD) {
            var e = t[Mc] || t.pageXOffset, n = t[Nc] || t[wc];
            return i[jc](), void t[Bc](e, n)
        }
        i.select()
    }

    function mr() {
    }

    function xr(t) {
        this.graph = t, this[mc] = t[mc], this.handlerSize = dD ? 8 : 5
    }

    function Tr(t) {
        this.graph = t, this[mc] = t.topCanvas, this[$c] = dD ? 8 : 4, this._rotateHandleLength = dD ? 30 : 20
    }

    function wr(t, i) {
        var e = new SD;
        return e[Ch](Fe.call(t, {x: i.x, y: i.y})), e.addPoint(Fe.call(t, {
            x: i.x + i.width,
            y: i.y
        })), e[Ch](Fe.call(t, {x: i.x + i.width, y: i.y + i[Dh]})), e[Ch](Fe[Br](t, {x: i.x, y: i.y + i[Dh]})), e
    }

    function Or(t) {
        t %= 2 * Math.PI;
        var i = Math.round(t / Yj);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Gc
    }

    function Sr(e, n, s) {
        var r = i.documentElement, a = new mM[Fc](t.pageXOffset, t[wc], r.clientWidth - 2, r.clientHeight - 2), h = e[Oc], o = e.offsetHeight;
        n + h > a.x + a[Ah] && (n = a.x + a[Ah] - h), s + o > a.y + a[Dh] && (s = a.y + a[Dh] - o), n < a.x && (n = a.x), s < a.y && (s = a.y), e[zc][Ha] = n + Ph, e[zc][Ua] = s + Ph
    }

    function kr(t, i, e, n, s) {
        this.source = t, this.type = Yc, this.kind = i, this[Hc] = e, this[no] = n, this[Uc] = s
    }

    function Ir(t) {
        this._4x = {}, this._kd = t, this._kd._20[qc](this._9o, this), this[Wc] = xM.INTERACTION_MODE_DEFAULT
    }

    function Lr(t) {
        return t >= 10 && 20 > t
    }

    function Ar(t) {
        return t == aB || t == _B
    }

    function Cr() {
        var t, i, e = {}, n = [], s = 0, r = {}, a = 0;
        this[jf][l_](function (h) {
            if (this.isLayoutable(h))if (h instanceof fj) {
                var o = {node: h, id: h.id, x: h.x, y: h.y};
                for (this[Xc] && this.appendNodeInfo(h, o), e[h.id] = o, n.push(o), s++, i = h.parent; i instanceof dj;) {
                    t || (t = {});
                    var _ = t[i.id];
                    _ || (_ = t[i.id] = {id: i.id, children: []}), _[Gr].push(o), i = i[L_]
                }
            } else if (h instanceof _j && !h.isLooped() && h.fromAgent && h.toAgent) {
                var o = {edge: h};
                r[h.id] = o, a++
            }
        }, this);
        var h = {};
        for (var o in r) {
            var _ = r[o], f = _[Vc], c = f[R_], u = f[A_], d = c.id + Kc + u.id, l = u.id + Kc + c.id;
            if (e[c.id] && e[u.id] && !h[d] && !h[l]) {
                var v = e[c.id], b = e[u.id];
                _[Zc] = v, _.to = b, h[d] = _, this[Jc] && this.appendEdgeInfo(f, _)
            } else delete r[o], a--
        }
        return {groups: t, nodesArray: n, nodes: e, nodeCount: s, edges: r, edgeCount: a, minEnergy: this[Qc](s, a)}
    }

    function Rr(t) {
        this.graph = t, this[tu] = {}
    }

    function Pr() {
        j(this, Pr, arguments)
    }

    function Dr(t, i, e, n, s) {
        n ? t[iu](function (n) {
            var r = n.otherNode(t);
            r != e && r._marker != s && i(r, t)
        }, this, !0) : t.forEachOutEdge(function (n) {
            var r = n[A_];
            r != e && r._marker != s && i(r, t)
        })
    }

    var Mr = "61e71b047d012d30be24c5270ab7e3d130d4a9f32c8ce513716c0942ab6ee9e75854258d2754fda8968616ebc5a04c8e3f739511fb7cbc8cc3082f0249910f767a064c1c4297a366be065e293d683ac8a218e1cf407657cf01a777c63c1444a2503f09570415cb63fda364a7e7949fb5c002611e20cd2d6ad7fac2bb40cd652c14e6f5a3392769c0a1abc0eaf40d98935416c3994e671995bd106271f90d54deac372e9fc642ea32b44f82018f36c51ed6ec4d91a06ccbaa83a210acdf39b542a819e28652401e8063d98141df38bda1824b4e12b69297bc50214ddd5844446aa2a88c3697bf2eed2e79d4bee7fe997927987934aa441148d9581497e54af1942f45b3cbd59490d15d5ea0df099f08a8f9de5bf7cb4c824ee15ba2efa241fd089bef26fbd4704d19a0532991241ec135237eb52299d44ae733a56e0ff3fa2a3832539432a8f7fbe0a9928ca9a36ab9f47b90a0d47f54c8d4e8da77c494c1a90b74c722f03f85e4375dca9564d12aeda17fcea356068bd4ff066095cb1c3c944b36a5d129b7fc39667e395f576955886407763c05655ae5d8d9d2ceb087fdccfd97754e3f7969162784771fa1ae1678b84a5e38c2ac3b5f1e4a6bd85d6572c3abc07ac479e64b5e02e73abeeb5cdfa012640c99508d9b5ffb2096af05790d3f8749ffe9cfdacfead94042b3a5a7b02c0aa7b894dfde8150079c00d8c45877386d285dd13c72655610acd1080cab41463141058337cee29ece40f0c8d24d250d0b5108ad148b5d922c142767d5afa030a27d5217b2cb9f01282da9d1a18319771e6b3a4ce890b4324cb27be833464ff26a81c63f884bbc9b693f0de12c3c529285cb014430e407b22d269e755274aa4ade80250c9732a2c7024f327958664f34727f650bc50ed9be714f70ddf63265fa8a3dbd5e696de44773304aa388a32c682c1180751f9567d87239f080f3e9cf5d04ab77c36d393c16c83cc7e75b0f85ee725cd9b72e2b4722f84eea4f14bea40e092fc7e205d8bf3b8f33b6569f03918e655c166bbd286b52f8bcd25ae46042975536cba0dcfb9c054102da879d6deccf943ca22f017412b568d6795ffee349511684848ed9c270765c4539a56cedab78cfae03adb329e2109a793cd6f1d84fa4dd2461298f6ebef735dd089f9553af24d12d2e65946e33953a80d2e5625388384fa844fecb0706c8fe3bd31315b6b09048aeb67fcc3bf5c273d42cec50fdee590006c71fdae98ca69cdc80d5f805a38c3631bf24b0215b6347cc9e188121d0934aed27b78e4925c777e17f172b76a92a8f1a5a38c87d023423950be62522ff966f20f44f73b6275d4cbf4022396251a5e1044fc4f943e2922f1e217b4e230c35b34016e5978360507d0cccc35b19848ffb30048ef34c5a5bc976a9a87576fe093cd11eba6d6ff25bd4229f33e878b5bcc8a35dd8f3764de98cdbb78736f24eff9fc47c56eaa202e6007d5feb68a5a95d5be1ddb59b833fa2267e036a35e5716453c6d1613d058ea293914bd01357f10064bf39ce4cf7612c53ef930777d0b750be61c2f6a74f89f9802113ee32bf435cdc692ea4d2de691428fa163f1ac2d0c102e2aeddc384a0b59792b93c56bdbc2bd721fc75861a1ad09e66a9f78b60a1307f0d027f8bef3056b951a2d66201d03d2da041bd2a887855d710263530ae816bb118656c0fa462f7aa8949d397fee15f7398ba26134bd51a145a03cc6c97e13e2ce9f2fb4953d16242858dfbe9631cf7f13d1a7a3ad6996b0128ff529d16da713aa7a0c15226d8eace8c69cf78f295e8c0a0def7a759a393d6aec844efff51d69961d5ba4b36977ec5f8a85eabe049de53ef3e5d23432e96ac6c01b97c28e2f2b4f33c90240ee0f220a48417ced0d98a9b4cc47bea9dc0ac4d3260856719354fa56e691e3dda6d8d0c4c5343666091c8fba762275fadffe1c6af6ead13e0003df09f3abcf9d461fce853505b46ea2ab62541cb1dd655565f5a37371a65311e92ad5f255f24eb1e67635eee74ce8403322c7ab642673c698302885138a97860e7e4906e819c6c8b1730b5ba01a84b834ed0c0d0c88f488c107d7f4ca07b27e70253ea469699676649852f939f834fbbc558710828fdfab9252229be9d8c0e24f76920dac95a572df9c08b69c12529698d3e79bd2336f84abb142d84b01207caaf31295c0c5b2d4337240b27574b3cb7b8d3b944867faf6bb6dea02113d57b7074afbddc128ea2b3b0e843f44f155b11d61d0c824dfc9b70aa9466891d705e8461331b1bff7be60049cbecf493dc1c022d9185d8016ed92a9e7699468bb242f4165d6f98324e497969d517e796acddbf2cc22e395ef3aee4bdfd608b0ac91c1b5c90e501701a30dd4a3dc834182c39eb00418f3ff45e99b3c4af7be0fafe8ae6ad912fdd85992ea7868da25912b72d0cf3bb815dedd69a298e6cbca203fc6074e449195e6735003e8d7b26a8705820e610b75166c5eec6c9851ec48acbe503941677ebe72b95de252e2b1b711b411cd38f6633fb0dce035e0ad4a8686512efb96b6e3d064d2ddd996592a90d333a5dabb3dc62e8ea8dcfe1799ad91b7587305f2232b1c8e639d979da762883073df7669351a88026af593c6d21a9d90a006252c10e5ccace8101aed385b536a86605acd41166c951fb2fdb0a78168cc45ba79974858d9e2b1fc21e2c822658233bf1a663e0388fae0f28782ecb16048b6ad45d5c54d5afa267e878e101283b450cca69c486b67c98e7dbce1ddaecd9ec6519be7d904778ace902ab333ddc9d040ab7375b41eb01fd165abeeba420f4f1c56d6940777a1bb8fa1dbaddfbfe8a58de2f45f578871396442dfc3140010be34bd087033268a7883abdc0a76722689b46e16b54ac80d2d519f159a0845fe7b5e2ee2f4ab7e1da73ffaedfff8a6c90de3d2c6da78dd472afa99de9fceb5dc4cd2184cce50febc6f120eca001eaa1fc829e7c35ad57109f7327d1800f4406f9a77597813db268a222461e88f145e56e7debe35dab859c5aa40909b71a4b909584740b8e8113eac84960e1ecbd30a1ab9ba8e56a3c3fe449b45a90ab97fb95ce2a75bc1350842976cfd673b6cfed797a819cbf7ec5de2aca738263cb0f4cce26125122154493a03d0768e7093b10caed1151237cabbd08b64d47b6f4dbf9981737a186c268de2aafc7f3129b11eb149f48a28519a35d2a9759dc0d548c72a9e72c1df18805e0fa1c370d8591075719f97c5ee23a90d5b1633d0412b41c0e36a0e7f50336b7ec61b5ca75c811e5966b597387e6338bb3b7cf323e44b53007fb95eaf3e1826e565a19c7083b318803ea4fda4b058198a86345e6b9c24832debd163faf2b3dfa4ff23aa2068ec96d7dd5d8799f1cd67bdea22373d4f2befd31aaefd25255a20fd79c3f25003d6d11868459266a975d81920633a9fa9032a2665455dab2972caaa9afeef02e447104f0929ba3e0de3abc4a6519f18ef85302b44e70463c00e3db700fc4302c4a911e24b3dd0a5ba6ed365a9c961b08b283916f15e2c81d6c734a027ead08e447e5d6c396c80ccf34f6b5ef24966a3819e131b4cb04a54e30c05710bffd6f31822b864575cc278547d7e6831a548f6ad79b0cfbba9c136a425da720f54a21b22273375353b4e680630776fdcabf5a10d640134414806ebe581bdb482b1f43759ba54ba2ecc7ad385bc76d686ea1365e92269b7dea8e409d7046afc292263af2bc2764ea07bcf4056a878a651de2f2333a8310deba6984d1140a46d54bf4d299db08058ae9005c1afdc2b43991c747f14c793176c94ecb26806ca2125bbdf074db088d817002b983fdf884be23f23f0fc27f8ae8a11876a524bcfba3f80be92b5b0e0ff30df75024c710b57823c44d17c71c81b0bbb7a9875ba5abfdf5082fb37586be38336437160fb38fff14f5040f19cfe9b09c6d937e07196f86b85cd632c5195e5cbea19f2f14fa6a1dab37f89e0fb4077eebdef8be577db46fe0ba642b003d177230075ffc6e30b05897435f47c9b214616643fa82b8937dcd34f5651f7b925741586acd023cb7945c3160bb6ec5c18411877e90619c29f3e8638e8ed992739866480f4be0f9bf44139109e2050f104945097b25a55e86b638ffc5e7f9a492b2aa4cadba2cc47d07b6bc9b2a5be557b30def5d8b06f28a51af928e220324e0e4a1d6aa6538ae92ea15f8f149a2e4943278f70c97f087ddee00a79e0746bc1bdc103fb034bc1a5b9a820f603528c994adfd6c0ffb784f0c4bba062980aac7344691f92284ea6f7fd52af0a8e409606c8dacdcc2d130f1c7f3e4dc729d4e8c1cac4ad4b38ec556ea5f91574d7a202a9c8c9ece83db7dc15825436410661bc1581359b450121ac32f97e75cc8048f012917ff4f4c974a19ff32eba0acc5b6ce354ff72da9e03bebebd4f093155799d9a2a94889f5a1061bd03a6580e12a19ed548773246df4f358c1113dec0a6f51257745db7dc2af69cc509072763dddf54de00d704655e38cdacd14c27a2027434867f30928738827f62e12c439e911a82822df331ba3dbfc360ca3a3d7cea91d56c3eed6055933c2366dde4e1bda9df40c9146cd9ccf44a698056db38f8f5a2109e88a24eb54b0df923999246c6fd3fb54f537bc6c9139e71c9b705fbc5adbe0baa4815bbc2cf370f3d9cb81ec6fe11b8df3352f343c83a7c7407b91391e84ab7e740cbf02cd5f686454d63b083b3f0c5a740d277ca245618a3c301fcfcdc27846fd622f9f137d9680c08a6aab19abe31652ba23142d19b337df7a9a59ef988ed018b8e66ea7fff3148e3c5f0619ca6fabcdb3be89c389cee811a4523f15680ec8c166502ad4c61de5fa4fca1470886e0d79800ef36e741fad9307ed5140ecd8d17bc9b2c49bd23d2bd42043bc87f5b7824aad9850ed3af61e1958efd9836d1a4057e69df0718ddae5f2ccd616f7eb62b6d6d77ecb3636eee75272298d224c78b5856c1362a62f5175c4e1f49875d53eb8424b1d0cd5001a7c9e2e2f074c36d3c26872d8b180847641d4f57473c1bb285241010bd31263c8a41b4bc1fa4c7b28a88f1250a8178fbc5bdb3a2bee97cd8b9784b1c993b8fb4dad282a49e67c558aeed06d31faf2b5afd396c7aad3f9223e41a91321d787146c392dbc206420d8870ec48039f0c5426d0ac01ae26eb01f9cc7a92565c78f9c69226cd523a2ac1384089554102417efa014aa6ea8932d5708fa420b887a5f454c14a926cda7dbf202efb7c827f73f7118531f2461dac0bfbad5a7a36db5a646289811469acdc70f59c89eacc82575410bb0ad3bbf5b207a42fc42eebe7f7eb95feb9054c777f84113d71cb406dc6d761cdf3e8df3bb7f218f72aab539814616e7fcc619d794de212d4993ab41930f0fb268bd00aac4a422ba05e0a24f6a54a7ebee9d616593bfe10890975c27b4915fd9a89e1445811bdbf464bd260b0d9b6ad815c72884881ccdc422e4bfa75b6a17814b8fe1ab24e39bc946440dfdf2686aef3a534b9d01c32e131265e6b1f0bbce5510ae8e19aa3be780dc2b183f0577fa2090ebb957b583f10915427f3fe809695a0c4181773966ddc7efee99bac55788dd5593dd0d573e4a5920f72df9c03b574a04cd87b76da16014484d12daefaa97c4d60288804a402e6f602a1b8ad5a94c345a41109578408dfef3eb5e6c6d7040e2fd9a87915fb9a659a67d78cc38ac39f61a6df9d3c57eb984f39996099ddedacac3c3f86735c37149ca3e3041d2aaa11c5ae832a72bc2a0e149c8948ad5db786cf081a365a28c78cfac37c6b0b50a304a2969efa40963afb6fca0263103c0625b5bb56a4d818fd61537e5775ed20bd6baefde5401780886a73a737dd9139971ee121b162b966933334c29fed15ecacb30db74dee6ecc2b5da711a1c2254af144413cf8533a87d6d943c82ea9f9a21a45ac9beba5a2adc9632817a9ab8de753b40a0e28c909bfea52c2a09c479242b28703b019b4a57ee4b20103bfb08be3340d603957d41f770f58fb268d0497c952f087c2ebdbddf3ac530ba0e9caf87c03a6b1eaf7ca3225ea7423f81f80faa4c4cb117017d420d249f3b41c612e2cdc465bd4c2c273ecbd24a2f959b2f13c9e8994ddb58d9cf929dda05101f0fb914c2d58732a4507869f18d6100fc1a50044f5fd0ab847f82b2543e6dd7b9a51ae4dfa0d529e6a8df9f5b30776bb1c91d7f9a19d60f3b2741bd92bf5a434c2ec0760b3514c731b09eff3490c531c95649313375d27977932189ff8fd775ec3342fea845f6bf8de0658b0fb30f494d143726f93784fea56079404ce92121f9a8709d9f87fdd531c5aafb6f7f9de457b1fbcba05d003dca1e7cb5d60f47a2ff60fbbc06bdbba98a43107eafe1cbff56ae7591123de01fd59b0a8766212eb79404ac7d5d96190ada3769f86d62d4a65f872cc79f1f40b51595d7a88ecaa5c8da8d964a4dbb42e142b2cf5656c3bd2f2cbdaf56f1311c885603b61a27841921298edcbe3eef8bfdb09b4e7ec61fb8af71d816c39f219cfcfdbe58a5cfd7563ad54bb2771540336ea8e589ab28f01ebb85d2c809c8e365a8006432820de9202d271706efba4e9624a831d0d8472dae476d019ba2ab70da773fcb948a21a3bde4a70c399f940c6ec0462f9611e27d0bfb26b5be5a37205f136d52edb3d5ebfa7a729205f579f2fb7ddefe87a947f34b1698abe69ffc4648dbd5ef61a2cc1e0f2da45ea3c47f0c702cb6976b3efa7511d9c484e4243c5f4ab8b5f117358ff76058862182441d33ae83b631c049050bc1bc6e639e32ba0f7f95982e0607faa2061bf4da535c551207d2d41d11e951070a97473f2701765d92578cff210337bac0c7955ecdf44e7b4239c1355914cf76a2739110d3a436842c4f1aa94e811af410d7ab165d9293ec0eda2f64284eaeaf64b1d14ba57431440c5445c1c80e6f9330756db2d1eb7bcdb1031c02d9e8838dd504c5a064f98caf7e96edd0bcda9477d6425388b0b153129f6881cf37a2d1372cf431d6fb3dc713aaf7ebe1e894e69903b6daa7967c6124d9a0312ee4ddaabcb72bb4660e0c030e3968ba5e4dcd80c59fe74109f98d8553db84d078750a301529e07bce39fad93e4f03c823e0647374e0f6fe64e1202c95dbf3324b87b5611457c9896219142d5d7caf09859bd117bcb6cd0ce89924963b0e94e2c28a39e4c8dfdecb5cf662edab168a73b1ae2e1aa2fd251542a72f3745cac190142b824463fb2bab568c22c3dfb2eaf2b4a5fdf91207b294ea42c31d8326b1b14a59b55363c9d465132302cabecbdc6e11d372a2f235eee4f933ca7f87d6dfa9c3a089318b719d16af4851e8438ce393938ca28271c5f2d1684b416e496ccad48316bec1d43458ddcbc7d9647d7ea514e8843fccfe1f79d8014c2ac7fdb09ce247f95f7cc4a742f66fdb870163b0b603f681267de5194ace2996b2db2bc421a60a2264ea2fe51784d0b92fb601ebca361ae1f48407cf17dec3c6c859ba29975427ee965e66925389df5e06699d785a19762cce0afa04773a91db0b6ff97894e9ea53bd4d787b236aed55cf089ad408d82947a2abdbd869fc50bf85156b85d3e48fc5a1dcac2c3e99b4a04f5a2bb4618e2d3bb3e1b21479deaea03d20126ce4cf7a2aec828794eaba130e95b3717a867139f87b80fa22dae0b93b377eeb94588a3410f85163eaf2dc5633341b6e3a3c6163e38a846442cf185d889969e280e51f8163dd84ee5432ec89b5f1eb89249c7d428be250d9800c3f53ce1cf26dbbc4646a707eba94ba8356e484a7ae14cef76ada097c275d615e296097df260b716e26c700e4ef7db639f9af8426e135bc8ecf5719c4bc9873989cb2fb41b4c1f9e63bfc1b6cca1786cfc36ada250727d45a2b82a45dc8ddda0424cd7cc16d8cf45c0c82e0d99b65f071c847490cbd9cbc692a83acafa3784bc2ed188549f35263b033ee18432d3dc34652480e61dd0b9c4b892135dff4e79780f130176989b5a4f31262d83f7b50532f8970090a6b3f287804544c74b06e3326ebc489aa431d81faa30899c889b7da4ea98dde6c7003232f6a5553dad8e0ad375f66ea4c4049cb272a059efd9d65298f47dc3ecfe7255ed5d3e0711b05ad6e3913b1947cffbd18ed8fc0f68c3fc16efc229f48d4c47f03c069a1ea81f5ab8bd34da4494fb5bdd2967d4e6d8ff371295d600708dcb1ab942480c2bc1df07aa069a2041bdfd13ff7e80d87b6706850cde03dd359d49d5a5126c75ac9acc950eea1c1e8ca9d0f5775eab5fcff8a4f69f6ac0ce4b06daf0bc9b18a6dc0cf6cd4baac1ba5b1e6d8a8ee200187d2fce2a32a97b8c1a50f49e1019c08d70615f643986801723b3582463494e89f801472d686c1c157963d94665c3e2734f37a22a8462c497f219683a58407b9071ef911e41f45a9724a098220b94c018ddf1253a843c63e62abcb392146bad64020fd56f7fe4891d602cc63b54eaa98997c3a5bdf5381761c9a718d9ef1d61308e69d5b2e8b68081f0a008e10b14d70e1d8539c05baa4250e79375d55da83687b0581b7ca592453abdf25f91549a281b1cb2de8e4b9a51c86dace37c13a68a5a26bd8fbe693c1546025ef98a9f379bd6b5ed86de09a9d254bf5b744c79f7257d6e62c15c74ab113cb6023e8e73bfb1015edba4423b9bbe42646bc8fb3e7312bc3b8957ceaf7276cc9c9bede18e87cfd2dcf4577e692cd543135ec1c94e470644fd94b1dedc4b817bdbdfada5a7f8a88882cb971d5f6982ae20983a085401b465b14e3cbd6ace35765219c3475e8f3f391d6e0230bed63e8550ed05d6d9b89f7e3905cbe00970d27717cf64d3ff3cb19295c8064a961f6393da68112a1d28244226e596a45784b2b63f4d6c423eb1f041e32d3fada17c9d53d57ddbd34153e471b8f493d34c30f08617c88e0d460cdc71f0d104d83bac4b6c158f3597b85adc6f8cd15a4b59188fa3a3d1deb6f2256f2f4e5f6e660538733ad1d773bc822bbbd015d5acbe58309aefc213682846e851b1a922f36dfcdc1535405700cf4172bca4143810e12adbb6ee493e648028620fb3903d8ced69b6384e063746c9c3972b1b7cced7f2deb36ab4b8468f487fa97290cb91baf7e44cad56fc057e060a47684afdbf443190457e3b94a79e1d2b00cb0d0c858598c344c105c488319794036141cad8918de976dbd73ca16706d5adbd2fac477442a5fc45c51e8bafb479944cfc6fdfe778f16f1af0ac46f2e4b62746ad05365eb951bd1238a4312989bebed65aca8958b139360bc389376aa591aada71265a9db24c392f1bfcbe1a48a19f21c85d7707e51a169cecec2378161e2caf8b464fe3cfaecf9dad659dcee2ac7c9807c20a23a9c95714d8aeb91173c9f94cbae895c8dc726e2b1dd1829f8b3512b8b868a0b7d0523655d1596ca71036f7b5e99f7f33a80b30b7de07ef0b266bfc681e912d269ad967c0ef3bd9d1a510da6a2cb784bd0d70581d501b48f62e70a387953c78ed0d02d511adf33cd509265b9a8d9f53eb8bba79e20f88e6276e5db675067c65e1fcb801d76681b85ecb8894ad3363f216e65a66de77153c5ac9bb3b0467cd7dc48ebc1a6ac501b655dab6846f9dbb82c74a7b4c05c12b9bbe934f3bf9576221cedfdae5a4c559258a3cfe3008eedbd4c9d7a5e4da2b092f1131cdf2cfb7c647273b7a0291f1b7b839497f7820577ece4509af56f2193f6e1609b6e852613bf6ffd4b3eee88c724a7f1c9f1d93bd69518934643f110c6d7307e943e6bae60ac8bcf80ba72b7673c5ad0e643980a50f25feca21917739560060d496eea24cb06a55a7b0eb66c8d3fa7e3bb456d2b0762ba196183e15453cd542fa4006629eeda22f1389adef3f18f4d09abaa8dcfbaa8013ec41dd8554b562efa146188e3edd86e60b68a45f0ff90b079e5dd64b1cd21990254636502e581e69450e884e756ae8d2b7cc16c335a0e2b9f5d1a0d7866223598eae600a86dd4e8a5806e6ac051b8ef06665665d4dc6f1a7ece3f248bc94253813294446b2ad29434054048f9d9c712df6a74ddd4e4c009041a9e1b43b6cbcdc60ca41557aa7d586b89b2c353d642df39532b6751af9fbe95ee8412c99fcd32f66d586e6c2244cb104a4122abbb0a800e0a8cd1c0e98511dcffff85e25e95d2e8a617d08234e9b6a81bdb0fcd856dd5b7c6efe29f0ca5d76924b809de137c608da1d1080ff1efd4fa2609adeae54eecf6d42ccb4d0b8c0b0a66dec932c29bb1ad3f112a02cba50a1dbe3f55072668d647f09042504342c69d1ebf3247e857ad66208f7ad0b482adb909939b867cda5576c522616a04e702452c44bbaf015623c0c93d2f245a4ed904b885c8ca9b479d2ddb2adf6e0cdbc10faa38d81797efbcf01d690b3e62ad89cd938e05830e56e65a5e03d80f9ce7091d9dfc5f290e45a642ccbff65a52b49c09e9af728bdeae523bf4a8a4308ed5ff2bab277352c9b63ab32dba16ab2d3402ba673d1118fd3b330e4e8ff9b2d8ed280428de1327f3291607796636fa8696b851e0ce8693854a60f183aa18b164e27a6abd0e009877975685c8050c8d61b883c0fc1629e3b75e69bea1b403360e16a263a28fb76e5d16d8ff2aa865715b55a7122687a5a122488688f38451c3d77ef8d53dd3459adbf8badecc881292a67f6bbf4815a78b2ee4683f8a7154abc5a317a5790854033bbb5e8e748751880846650bbe806bb6e6f5ce0980d6201a469c210a41191f8690605c30a66b0982b7fc99bb17a76bc20b5443f1f0056190384120c30bfb9e9fdabecff3909968c76f1d5860555df8a84393f7a5114c143fe94a054ce9cb6156226ae1e0d42b83a6473091a4bf26f6d4318e266c689668f61fc88142c9beccbb965f5b279bdc3cc63b1bbae1260c072ee9bf5832e0b16c6ec311d75d21f822dd9437d8a392bdb28c8abeb079293e909c82f39152cfe81d58252e3fcf63a80ea9e5ee9b433091ca2425be8097352d342b3d79e59d504f0fe5813ae8cb10b749dc193069d52d8638a230d1b05eb87eb2c6b3d65139745ff7a458720c1c11b3e3ca15b01407592d5b0fbe28ac829a324213618309c84dab02e72da0a0f7729d81e44160c5dadd8bad342d7dd4356d06a289aac5ffda67b88f20111cc3f77104f6dfed59c8151b5e806f7988baa019bb1d0632ba9ca9453166d89a4f5a2145ed973d7bbea8c0ece88be398860da5c16d83d598e4e9b2fdfdcf5de4c56756d44b643eedd3468af5bb735327e7b37f0048fca768c45cedc66c08fdb7b000bd989356d958f69377aab0cd67b95b43c442ce2e9e8b7561f5694999446efef1a51f2871fd017dc67662c5b1d799687686d6713293ffd86c9a19536f66cd53beffc7387e066884512736d0c8d3428d8b1d091b5b23afaa069dbea788f5dc0a03300f9534ec625300d2e5511ef4063ec773dbbceb03a06f0875cc2ad60ae1636c1af6e8978f6513ace01ea0cc3b7d83acfad7a753ab4906416d040813f9a5c7c804a419e61ac962d5da9c6edad90e6f222a2d60fad0c47f8a0c2a75192d84a8943f32283bd904f45a68fa5bfb34119c3fc9d77a22b39fb6bffcbdc11874c7b78dcbb2501fd5776384a6cb3239329a7283e79e43bde6a0377ad1c59984021575a1b858db2c195216b443ffb9cbb6faa57881626440139e469ea60f76b897ff10d49b7243a1755128d23990e3b6a4d5bb3c7b61f2dc845c9f71b4aef014647fbfa4c405bf077c60ae10fc81e415908f704296c9124fce8d7d4c09bf49d4c61a0959ad6f21c8fc42986a0ddef01b1058ce07ac383f303c901bcdc266aca876609f0d6e4a81be664b6b7caa7b87bb30625efcd8184999656ad5f32df757fae9ab3f5f083a50a28e0b11c976cd7d7f9c4a7d25f4c70ba3c856ca78a45e54cc3748205c26b376b6ca86462f7ff8a00ab88d50d526bb521adb1c4ed7f0944c4103f52813a6105899976886bbb122e5d9701421511b853dffdcdaf493f002ca8eda9d607de1c3b93866fd090c989e49c4475e4741518770fcc875524c35027429c57afa9950a9dd3eca9e22ebe13f6d2cc8bf4834f7c0ae9d430bc2f8e70a79239f5c728fc50cf050bd7c86e9f32e2a1fa1aada4e54af2f286f470f4c4c599a17f6ca5b6208b568a7023decd252077101dfd7d3701e13decfb3b0ef71de9e5d4fe7eb502cf05f15539df8040b216e3fb59cde33133d719417e7d9d01746b756cede9a8a02cef6fe0efe59fad7e826f86acd3868166bba33ff908c7fc000890ac787de33b809da202029e959f185d57dc9ac9e0e20f35ee7332acf0bcc02ea961da0962351f24f7751435b1ab7e97f1f71feb0e479729a7dc72138ace70dde83310f2e1868eb65f45da59d5234aabe2d4fe5e548836fc2148f58bcf7054c6af09d35472eb2ae5ee6c5d2cb3d1bd9911c85c0fa78cf219dd16f171caa644d0019e289e9ec5d8c1a47ec24e32f0d6084762d26712031a442e0d709a8bfc24ec85b038483c4ab8360c67ea516c129f8151694a3099e77876b28ac4358ee8f8af7ec1423d9b02eef4ae9e409acec47aaad8fb7bc44bd91c8e4adcb04b2138681db4455a07ce1c377104f04c513fe727730d09b950f7c623f8626d0bb0430cafa546d59d0dcb3029c87b5c757ac6e49c87d902661d671cf6d112fb7111c4ea9058d86e10a272859ec547d498b50448f9cedcbee04c7321890e9acc2b963448ab44a755cb3e1a29ef990307c1a908a5c845c3b506e50817308818d312b10d2892c331fcb5315b00af9cb6ab4db78e52ae72ba36bdaf6e10575e6d5e01d99160cf733e15d399b9bfb2fc3e04d09bcf884a6f66bdc75f6d790024d2bba04425d7f9bf49cc37d6cf5aed7960e5404c37ee84ffa3ca3301e086cd841ce43d70d8dab8b7052a4a7bc4fb6b66e0fe7d8544955813ab2065fada1992648dff38697efaa69b9f6a750e54a5faeb23b31eebb4b8acdfcd9ad4e017ddacc2a01871e48d08852159f21a6b9626a49eaccd961a43ec9da391bb2db6f9cb8b10dc16802abc849c3f5d0ebdb979390f813cafcda2e25593ce23382a33d5f2cb16293f7af2e9127cf4396ef805421b93f55a0eba258fa897defbacbfbd8dcf37aa5fc7d385712483e1ee84493fc3d1f3b59b4efbb4196c35fa50e8619e65fb731687d435b1eb3f9ab52d081303575aa5c944982444b18c8da2157269557aa6ee03ca6a0c66a5be2096509920e59bf0230110d6a5404234e0913468205b2cb4740576843a3c1ce0361a71a739f80ad749086051ab97137aa04f3a8e8f50d0d68a4c1567aae37f683f59469a8c9ccea4b71d3b372843bf7bcee0b8c45e13055dd922849ac19ea348a1d9f52db6a631a8b1f77a6af7e158096382e37b80f7bb936ca0521988e7bdb82729678fe162b51f572ef60291188da5a5aa12e23fdd244e1acc4faacee7faabbcb38b241cb52793ad4f348e99a1f1ae60eae8b103f636740f13d5e54632e896ad9e265343417c4662adb419740812eadbbef729be9ec3dca3463fbc627252410378c1ae24ff16d6d269b5cb5744ad4b29c3011cb3cb6c4046bda4152b613a1d072d1766760b8f5c684a404a6ad0633687def64d205819975fda3aabd532c44b47fcd3309c5c5373dd74240323e6b1e553f62171170690cb7f9aeb3462686f6f23b6cf896264148dee904fe20e8956e0c5d7cf70b73151d0ab1a5df51da22826cf5ee3e090f3edea513ab247416f6a38f6eea888923a35bd06dce5c421562cdbb79263447bda6d78726168088e4f6bb33f0ec08adea45e93a63408224110ee6aac56c773045b54a112e647a2025918ab63d48911b3e54341e2eef6271b59e9930ee6df4a5e9cdd6b6f404767c348d109a781a6c4c6262b07ddac5970d74bb4b6f7739dff6fbaa9f6b90ae9e9ae744d9c76cea08ef00e5199c16d0caf5c2ef22834134a86ae1a86257b7aa0a3a80bd732e0e7c1fd2a740facc9370cda497fcdc59fca3aa2cae90dd3a994c081e07610e1969d334712fe2e73494854b779bc343b80465d4a31f4cb93b6855c939397a8f4e2d814599ddb2093b61286ebc98e9ac09240692d0386344c55fa1570c1935c23d662dc21d81544c534b9e3f7cb8b3ce355f277d2b896c84a2156613b2a4d713f29869767ea5b47d1fd8d8d2395788cfca63a4e33956d6c6264092446329a6c264ba6af63795df61805f298d11eb7e4377c9bde9c078cdeb7b34d6ab4145259ba7bc9a9a169f6724c0692275a187ffcc192c922a34b78fea19564b95ef448a9be14f312dc3b69ac982a19a92ec9cb033925c75c4a20abb5ab5cc69fa6fd836e2ee341a5284e09216eb393246c48d61312a90af14f25a92f632b8178916f7244999c7577f31d7bc0e4eafb5d6e9539b7e33c4276d50c33a90072eef0653e301f62bf82e052fcc0e96005b0185def41df939f597185f9c31aba3bceb7e644bc5af9895cd06ae4a9b96417a28d59a6f4adc6012794993769aebf61a0c66c618a4b7e7169c0c8fb551b8aa4dd04f5ae60a9cf54ea58776adec719ab56fb8f14c98acb0b689d42d97a0caece0d0b99d043e4778f39440e03a04d7db7f3cb71d605974601ea1f56110ba8759b48fa69ee102378bb50173d8aa6172aed9a7552965148d8e66c294acba532b4148ffb9dbeb56463ba2b265b51cafeefaa7856f6e8ef616a14810f9c0bb79c9eaedd21da180627885c8a801c31e8585d10ec0d2a8d53c77a20317e0aa86ca0957a68763eb28473f7b3d73d43ebc2fd53d40048a5bd99b4ad13f2fd7e917f8d56139fecd464a026d7061194908505f2764a6983c0cf7b64585ec698895e442ca03ed22dda00c76ad3617d00e82389923bd6fe7239aba0509d1140ac2dbab1b4c38fe78c8942cabb48bc04efdc6314c19c1466ba3d86d8aaab8646fcfa8192bb1e8a8235838fa635e29a77f004bc70868abedf2dbbdb7eaa91f55528d767a50333bb6b7991b6ec004b5997fde691bcce795e848ee3b0c5021a32788037da9eba8ca70e8dffb9dd3c332ec49be08ec293b703e47ac006a12703ff0883752ac7f698add6a4e09b854830b9a12ce663472c9c82b86dad935df0d0bb52892e07b85010e6d9ece21de524deae7c3530d18f5a850bec80a6c23a3ccc8221b116bd51dbe00d3a733ab4f9d75b6043ff57a0a4a7d24fd11b82d1b8d734933ef6b96b1c8b6b0756c10da753d937f7bf1b9720fe4b6a5f01a578b2e3272946ae15cbb620e8eeac3b6ba225d0ea03d7c6060c94f3a514bf06969c1e374ebd0b7c5a78bcaf562a79773c1191a80a334ab6852ef2474548e2d45011057c55002c314158844eec96d374b30551c2bd8c6a1e2ef2ceabc4ee61764f9f59563ff8fac84953e6988bb431ad595e1f7860335506f824355cf461a6ec65b59445a8198d48874442abc689dcc79aa161f3360d248d27b9a069926818fc91e753f467a6c8f59ace9ac7093f528bd4b22af7828f99bdee321b50778c21e8ad9f9f3f6996a1e0a656b66e8152530d21c3a5983ba766f141348292fc5a78e085882eac30f1dab6c3fa476b9b40e790a102f01a0ab2caf2b7a828c0450241513e27b9b4d72d52da8fa4df494b1485aaab7be093d8e6e9b6235ab1dcea46da64d88ff7d970dc701c73d4520df3021f9799d2178c70ec0fc397d2af9189d20a1884039bbdb91db93229bda603a5367759b9c5f16fcdd714ac6e9ac6ec3e06b79f984a0d60a0d5461a22e2923eec7ad48621b12f52e3d508a2cd23d5d949b716675ea1e41e27cb1ba8270c8777d4d4ccfbb96703aa1d853e6d9a9216074f0f52291560713bfb00c33204a96266a2ca6cce343b664db56c58e416e0a00b3c57869772f2cc28759ff3d2c361ee0d9eebdb5a936d4fe98351dcee34b74d9463502a0a0176c2c65ccc0f19871ec99f469214bf4cea4bec45d37e57ace498a1d00f785f9fc99a1f8714123b8b72e93e68e8d807bfda1a86007e1d674faf39b61e45bb18747e8cd53711515897766bc5acd4a3b775c9c3945f651fb28aeb4fbb1118f23dde73480778292ceb51216edd13954b5133a0d74e1cbdd99c5f0686c7cf9581cc1e36b4654464bac98af23d87020ea3d64de939e3f871e41b74f7d7a61f380014b27e040f926c46b59aa95eb2f6da960d152b2a076469ecb05e3d4f53fc319ceeb5821118f0e83566b45a568744615ac5ae2350297713e2a7f478dc05b167609bc99208354aafe17f5f546be954306394e1cd276e41007c17eefd1f22197584da47ce09c43dcc5fec93a09afd5eeef3badf6a9e34c39e5ea492ad35bd9162885c09c1736761859ffa01baada531ec1d4d9c785c5556a4c873d3215f9228e776289cebaea5d29beec0825df99f8d8675328875c458d4b3f6ba316b40824cdf7e6dcf6c005c83f8c", Nr = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    !function (t) {
        function i(t, i) {
            for (var e = "", n = 0; n < i.length; n++)e += i.charCodeAt(n).toString();
            var s = Math.floor(e.length / 5), r = parseInt(e.charAt(s) + e.charAt(2 * s) + e.charAt(3 * s) + e.charAt(4 * s) + e.charAt(5 * s)), a = Math.round(i.length / 2), h = Math.pow(2, 31) - 1, o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), e += o; e.length > 10;)e = (parseInt(e.substring(0, 10)) + parseInt(e.substring(10, e.length))).toString();
            e = (r * e + a) % h;
            for (var _ = "", f = "", n = 0; n < t.length; n += 2)_ = parseInt(parseInt(t.substring(n, n + 2), 16) ^ Math.floor(e / h * 255)), f += String.fromCharCode(_), e = (r * e + a) % h;
            return f
        }

        t = i(t, "QUNEE"), Nr = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(Mr);
    var jr = Nr[0] + Nr[1] + Nr[2], Br = Nr[3], $r = Nr[4], Gr = Nr[5], Fr = Nr[6], zr = Nr[7], Yr = Nr[8], Hr = Nr[9], Ur = Nr[10] + Nr[11] + Nr[12], qr = Nr[13] + Nr[14] + Nr[15], Wr = Nr[13], Xr = Nr[16], Vr = Nr[17], Kr = Nr[18], Zr = Nr[19], Jr = Nr[20], Qr = Nr[21], ta = Nr[22], ia = Nr[23] + Nr[24] + Nr[25], ea = Nr[26] + Nr[27] + Nr[28], na = Nr[29] + Nr[30] + Nr[31], sa = Nr[32] + Nr[33] + Nr[34], ra = Nr[35] + Nr[36] + Nr[37], aa = Nr[38], ha = Nr[39], oa = Nr[40], _a = Nr[41], fa = Nr[42] + Nr[43] + Nr[44], ca = Nr[45], ua = Nr[46], da = Nr[47], la = Nr[48], va = Nr[49] + Nr[50] + Nr[51], ba = Nr[52] + Nr[53], ga = Nr[54], ya = Nr[55], Ea = Nr[56], pa = Nr[57], ma = Nr[58], xa = Nr[59], Ta = Nr[60], wa = Nr[61], Oa = Nr[62], Sa = Nr[63], ka = Nr[64], Ia = Nr[65], La = Nr[66], Aa = Nr[67], Ca = Nr[68], Ra = Nr[69] + Nr[33] + Nr[70], Pa = Nr[71] + Nr[33] + Nr[70], Da = Nr[49] + Nr[1] + Nr[72] + Nr[24] + Nr[73], Ma = Nr[49] + Nr[1] + Nr[72] + Nr[74] + Nr[75], Na = Nr[76] + Nr[77], ja = Nr[78] + Nr[74] + Nr[79], Ba = Nr[80], $a = Nr[81], Ga = Nr[17] + Nr[74] + Nr[79], Fa = Nr[82] + Nr[83] + Nr[84], za = Nr[48] + Nr[36] + Nr[85] + Nr[1] + Nr[86] + Nr[74] + Nr[87], Ya = Nr[88] + Nr[89] + Nr[90], Ha = Nr[91], Ua = Nr[92], qa = Nr[48] + Nr[27] + Nr[93], Wa = Nr[48] + Nr[50] + Nr[94] + Nr[36] + Nr[95] + Nr[96] + Nr[97] + Nr[50] + Nr[51], Xa = Nr[48] + Nr[98] + Nr[95] + Nr[96] + Nr[97] + Nr[50] + Nr[51], Va = Nr[99], Ka = Nr[100], Za = Nr[101] + Nr[61] + Nr[102] + Nr[61] + Nr[103] + Nr[61] + Nr[104], Ja = Nr[105], Qa = Nr[106] + Nr[107], th = Nr[106] + Nr[108], ih = Nr[109] + Nr[110] + Nr[111], eh = Nr[112], nh = Nr[113], sh = Nr[114], rh = Nr[115], ah = Nr[116] + Nr[61] + Nr[117] + Nr[61] + Nr[103], hh = Nr[118], oh = Nr[119] + Nr[27] + Nr[120], _h = Nr[121], fh = Nr[122], ch = Nr[49], uh = Nr[123], dh = Nr[124] + Nr[107], lh = Nr[125], vh = Nr[126] + Nr[127] + Nr[128], bh = Nr[129] + Nr[127] + Nr[128], gh = Nr[130], yh = Nr[131] + Nr[132] + Nr[16] + Nr[133] + Nr[16] + Nr[65] + Nr[62], Eh = Nr[134] + Nr[83] + Nr[135], ph = Nr[131] + Nr[136] + Nr[16] + Nr[133] + Nr[16] + Nr[65] + Nr[62], mh = Nr[137], xh = Nr[138] + Nr[109] + Nr[139], Th = Nr[140], wh = Nr[141], Oh = Nr[142], Sh = Nr[143] + Nr[110] + Nr[144], kh = Nr[145], Ih = Nr[131] + Nr[146] + Nr[16] + Nr[65], Lh = Nr[147], Ah = Nr[148], Ch = Nr[17] + Nr[33] + Nr[149], Rh = Nr[150], Ph = Nr[151], Dh = Nr[152], Mh = Nr[153], Nh = Nr[154] + Nr[36] + Nr[155] + Nr[110] + Nr[156] + Nr[33] + Nr[157] + Nr[74] + Nr[158], jh = Nr[159] + Nr[36] + Nr[155] + Nr[110] + Nr[156] + Nr[33] + Nr[157] + Nr[74] + Nr[158], Bh = Nr[48] + Nr[1] + Nr[160], $h = Nr[161] + Nr[162], Gh = Nr[163] + Nr[110] + Nr[164], Fh = Nr[165], zh = Nr[166], Yh = Nr[167] + Nr[61] + Nr[168], Hh = Nr[169], Uh = Nr[170], qh = Nr[171], Wh = Nr[172] + Nr[161], Xh = Nr[173], Vh = Nr[174], Kh = Nr[48] + Nr[36] + Nr[175], Zh = Nr[176], Jh = Nr[177], Qh = Nr[178], to = Nr[179] + Nr[33] + Nr[149], io = Nr[23] + Nr[33] + Nr[149] + Nr[180] + Nr[181] + Nr[110] + Nr[182], eo = Nr[48] + Nr[180] + Nr[183] + Nr[27] + Nr[93], no = Nr[184], so = Nr[185] + Nr[186] + Nr[187], ro = Nr[188] + Nr[33] + Nr[149], ao = Nr[189], ho = Nr[190], oo = Nr[191], _o = Nr[61] + Nr[192] + Nr[33] + Nr[149], fo = Nr[188] + Nr[180] + Nr[193] + Nr[11] + Nr[12], co = Nr[194], uo = Nr[195], lo = Nr[196] + Nr[61] + Nr[197], vo = Nr[198], bo = Nr[199] + Nr[62] + Nr[200], go = Nr[201], yo = Nr[202], Eo = Nr[194] + Nr[16] + Nr[203] + Nr[16] + Nr[65] + Nr[204], po = Nr[205] + Nr[83] + Nr[206], mo = Nr[207], xo = Nr[53], To = Nr[208] + Nr[61] + Nr[209] + Nr[61] + Nr[210], wo = Nr[208] + Nr[61] + Nr[209] + Nr[61] + Nr[211], Oo = Nr[208] + Nr[61] + Nr[209] + Nr[61] + Nr[212] + Nr[61] + Nr[213], So = Nr[208] + Nr[61] + Nr[209] + Nr[61] + Nr[214], ko = Nr[208] + Nr[61] + Nr[209] + Nr[61] + Nr[215], Io = Nr[216], Lo = Nr[163] + Nr[83] + Nr[217], Ao = Nr[112] + Nr[74] + Nr[87], Co = Nr[218], Ro = Nr[47] + Nr[219] + Nr[36] + Nr[95] + Nr[24] + Nr[220] + Nr[33] + Nr[149], Po = Nr[47] + Nr[221] + Nr[107], Do = Nr[47] + Nr[221] + Nr[108], Mo = Nr[222] + Nr[223] + Nr[74] + Nr[224], No = Nr[47] + Nr[225] + Nr[110] + Nr[164], jo = Nr[47] + Nr[225] + Nr[24] + Nr[220] + Nr[33] + Nr[149], Bo = Nr[47] + Nr[201], $o = Nr[47] + Nr[226], Go = Nr[227], Fo = Nr[47] + Nr[228] + Nr[186] + Nr[187], zo = Nr[229] + Nr[230] + Nr[231], Yo = Nr[47] + Nr[226] + Nr[74] + Nr[232], Ho = Nr[47] + Nr[228] + Nr[107], Uo = Nr[163], qo = Nr[48] + Nr[74] + Nr[87], Wo = Nr[233], Xo = Nr[219] + Nr[36] + Nr[95] + Nr[33] + Nr[234], Vo = Nr[47] + Nr[184], Ko = Nr[23] + Nr[50] + Nr[235], Zo = Nr[185] + Nr[27] + Nr[236], Jo = Nr[159] + Nr[27] + Nr[236], Qo = Nr[154] + Nr[14] + Nr[237] + Nr[27] + Nr[236], t_ = Nr[185] + Nr[27] + Nr[236] + Nr[11] + Nr[90], i_ = Nr[159] + Nr[27] + Nr[236] + Nr[11] + Nr[90], e_ = Nr[154] + Nr[14] + Nr[237] + Nr[27] + Nr[236] + Nr[11] + Nr[90], n_ = Nr[238] + Nr[230] + Nr[239], s_ = Nr[240] + Nr[83] + Nr[241], r_ = Nr[242] + Nr[43] + Nr[243], a_ = Nr[242], h_ = Nr[244], o_ = Nr[91] + Nr[33] + Nr[245], __ = Nr[246], f_ = Nr[247], c_ = Nr[248], u_ = Nr[249], d_ = Nr[250], l_ = Nr[251] + Nr[50] + Nr[252], v_ = Nr[253], b_ = Nr[254] + Nr[24] + Nr[255], g_ = Nr[256] + Nr[1] + Nr[257] + Nr[1] + Nr[258], y_ = Nr[259] + Nr[260], E_ = Nr[261], p_ = Nr[262], m_ = Nr[263], x_ = Nr[264], T_ = Nr[255], w_ = Nr[265], O_ = Nr[266] + Nr[62] + Nr[266] + Nr[62] + Nr[267], S_ = Nr[161], k_ = Nr[268], I_ = Nr[269] + Nr[36] + Nr[95] + Nr[180] + Nr[162], L_ = Nr[270], A_ = Nr[42] + Nr[24] + Nr[271], C_ = Nr[48] + Nr[50] + Nr[272] + Nr[36] + Nr[273], R_ = Nr[256] + Nr[24] + Nr[271], P_ = Nr[0] + Nr[43] + Nr[274], D_ = Nr[275], M_ = Nr[5] + Nr[1] + Nr[276], N_ = Nr[277], j_ = Nr[23] + Nr[180] + Nr[278], B_ = Nr[47] + Nr[42], $_ = Nr[251] + Nr[50] + Nr[252] + Nr[1] + Nr[72], G_ = Nr[185] + Nr[83] + Nr[279], F_ = Nr[280] + Nr[33] + Nr[234], z_ = Nr[281] + Nr[83] + Nr[279], Y_ = Nr[282] + Nr[83] + Nr[279], H_ = Nr[283] + Nr[83] + Nr[279], U_ = Nr[284], q_ = Nr[285] + Nr[61] + Nr[286], W_ = Nr[285] + Nr[61] + Nr[287], X_ = Nr[285] + Nr[61] + Nr[288], V_ = Nr[285] + Nr[61] + Nr[289], K_ = Nr[285] + Nr[61] + Nr[290], Z_ = Nr[285] + Nr[61] + Nr[291] + Nr[61] + Nr[292], J_ = Nr[285] + Nr[61] + Nr[291] + Nr[61] + Nr[161], Q_ = Nr[285] + Nr[61] + Nr[291] + Nr[61] + Nr[293], tf = Nr[285] + Nr[61] + Nr[291] + Nr[61] + Nr[294], ef = Nr[285] + Nr[61] + Nr[291] + Nr[61] + Nr[295], nf = Nr[285] + Nr[61] + Nr[291] + Nr[61] + Nr[296], sf = Nr[297] + Nr[14] + Nr[298], rf = Nr[47] + Nr[256], af = Nr[23] + Nr[27] + Nr[299] + Nr[11] + Nr[12], hf = Nr[300] + Nr[43] + Nr[301], of = Nr[47] + Nr[225], _f = Nr[48] + Nr[33] + Nr[302], ff = Nr[303] + Nr[33] + Nr[302], cf = Nr[304], uf = Nr[305] + Nr[61] + Nr[306] + Nr[61] + Nr[307], df = Nr[163] + Nr[110] + Nr[308], lf = Nr[309], vf = Nr[310] + Nr[1] + Nr[72], bf = Nr[311] + Nr[77] + Nr[230] + Nr[312], gf = Nr[313], yf = Nr[314] + Nr[36] + Nr[175], Ef = Nr[48] + Nr[110] + Nr[308], pf = Nr[315] + Nr[61] + Nr[316] + Nr[61] + Nr[317], mf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[318] + Nr[61] + Nr[319], xf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[319] + Nr[61] + Nr[320], Tf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[321] + Nr[61] + Nr[322], wf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[318] + Nr[61] + Nr[320], Of = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[321] + Nr[61] + Nr[323], Sf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[321] + Nr[61] + Nr[324], kf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[321] + Nr[61] + Nr[325], If = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[326] + Nr[61] + Nr[319], Lf = Nr[315] + Nr[61] + Nr[321], Af = Nr[315] + Nr[61] + Nr[327] + Nr[61] + Nr[328], Cf = Nr[329], Rf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[320] + Nr[61] + Nr[319], Pf = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[326], Df = Nr[48] + Nr[110] + Nr[330], Mf = Nr[42] + Nr[27] + Nr[331], Nf = Nr[194] + Nr[50] + Nr[272], jf = Nr[332], Bf = Nr[48] + Nr[333], $f = Nr[334] + Nr[36] + Nr[175], Gf = Nr[0] + Nr[33] + Nr[234] + Nr[110] + Nr[335], Ff = Nr[336], zf = Nr[256] + Nr[24] + Nr[255] + Nr[50] + Nr[272], Yf = Nr[337] + Nr[33] + Nr[149], Hf = Nr[269], Uf = Nr[338] + Nr[83] + Nr[339], qf = Nr[47] + Nr[340] + Nr[50] + Nr[341], Wf = Nr[315] + Nr[61] + Nr[342] + Nr[61] + Nr[343], Xf = Nr[344], Vf = Nr[345], Kf = Nr[13] + Nr[346] + Nr[347], Zf = Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[346] + Nr[348] + Nr[77] + Nr[36] + Nr[349], Jf = Nr[350] + Nr[50] + Nr[94], Qf = Nr[351], tc = Nr[352], ic = Nr[353], ec = Nr[354], nc = Nr[190] + Nr[53] + Nr[355] + Nr[356] + Nr[55], sc = Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[346] + Nr[348], rc = Nr[52] + Nr[53] + Nr[266] + Nr[357] + Nr[266] + Nr[357] + Nr[266] + Nr[357] + Nr[266] + Nr[55], ac = Nr[358], hc = Nr[359], oc = Nr[360], _c = Nr[361] + Nr[362], fc = Nr[363] + Nr[61] + Nr[196] + Nr[61] + Nr[323], cc = Nr[363] + Nr[61] + Nr[196] + Nr[61] + Nr[322], uc = Nr[266] + Nr[151], dc = Nr[364], lc = Nr[365], vc = Nr[366] + Nr[96] + Nr[367], bc = Nr[332] + Nr[96] + Nr[367], gc = Nr[23] + Nr[110] + Nr[368], yc = Nr[369] + Nr[180] + Nr[181], Ec = Nr[369] + Nr[11] + Nr[370], pc = Nr[203] + Nr[371] + Nr[372], mc = Nr[92] + Nr[1] + Nr[373], xc = Nr[374], Tc = Nr[375], wc = Nr[88] + Nr[376] + Nr[90], Oc = Nr[221] + Nr[186] + Nr[187], Sc = Nr[166] + Nr[110] + Nr[164], kc = Nr[166] + Nr[43] + Nr[377], Ic = Nr[378], Lc = Nr[379] + Nr[83] + Nr[135], Ac = Nr[366] + Nr[110] + Nr[380], Cc = Nr[381], Rc = Nr[366], Pc = Nr[382], Dc = Nr[383], Mc = Nr[384] + Nr[107], Nc = Nr[384] + Nr[108], jc = Nr[385], Bc = Nr[384] + Nr[83] + Nr[279], $c = Nr[386] + Nr[110] + Nr[164], Gc = Nr[387] + Nr[77] + Nr[388], Fc = Nr[74] + Nr[87], zc = Nr[389], Yc = Nr[390], Hc = Nr[391], Uc = Nr[392], qc = Nr[17] + Nr[14] + Nr[393], Wc = Nr[394] + Nr[96] + Nr[258], Xc = Nr[310] + Nr[346] + Nr[258] + Nr[180] + Nr[395], Vc = Nr[338], Kc = Nr[77], Zc = Nr[256], Jc = Nr[310] + Nr[50] + Nr[272] + Nr[180] + Nr[395], Qc = Nr[191] + Nr[50] + Nr[396] + Nr[43] + Nr[397], tu = Nr[394] + Nr[96] + Nr[398] + Nr[346] + Nr[399], iu = Nr[251] + Nr[50] + Nr[252] + Nr[50] + Nr[272], eu = Nr[400] + Nr[24] + Nr[271], nu = Nr[401], su = Nr[402] + Nr[24] + Nr[403] + Nr[43] + Nr[404], ru = Nr[159] + Nr[74] + Nr[405] + Nr[24] + Nr[403] + Nr[43] + Nr[404], au = Nr[76] + Nr[74] + Nr[405] + Nr[24] + Nr[403] + Nr[43] + Nr[404], hu = Nr[163] + Nr[83] + Nr[406], ou = Nr[159] + Nr[1] + Nr[407] + Nr[24] + Nr[403] + Nr[43] + Nr[404], _u = Nr[279] + Nr[1] + Nr[407] + Nr[24] + Nr[403] + Nr[43] + Nr[404], fu = Nr[76] + Nr[1] + Nr[407] + Nr[24] + Nr[403] + Nr[43] + Nr[404], cu = Nr[58] + Nr[408], uu = Nr[409], du = Nr[165] + Nr[61] + Nr[410], lu = Nr[165] + Nr[61] + Nr[411], vu = Nr[151] + Nr[16], bu = Nr[412] + Nr[53], gu = Nr[54] + Nr[266] + Nr[54] + Nr[266] + Nr[54], yu = Nr[131] + Nr[413] + Nr[16] + Nr[414], Eu = Nr[48] + Nr[36] + Nr[95] + Nr[180] + Nr[162], pu = Nr[42] + Nr[260] + Nr[415] + Nr[1] + Nr[416], mu = Nr[337] + Nr[50] + Nr[94] + Nr[1] + Nr[72], xu = Nr[417] + Nr[83] + Nr[339], Tu = Nr[418] + Nr[346] + Nr[347], wu = Nr[419] + Nr[50] + Nr[94] + Nr[110] + Nr[420], Ou = Nr[33] + Nr[149] + Nr[53], Su = Nr[357], ku = Nr[421] + Nr[33] + Nr[302], Iu = Nr[422], Lu = Nr[346] + Nr[423] + Nr[346], Au = Nr[110] + Nr[164] + Nr[53], Cu = Nr[179] + Nr[74] + Nr[87], Ru = Nr[17] + Nr[74] + Nr[87], Pu = Nr[424] + Nr[61] + Nr[425], Du = Nr[426], Mu = Nr[427] + Nr[346] + Nr[347], Nu = Nr[428], ju = Nr[429], Bu = Nr[430], $u = Nr[431], Gu = Nr[432], Fu = Nr[322] + Nr[61] + Nr[323], zu = Nr[322] + Nr[61] + Nr[433], Yu = Nr[322] + Nr[61] + Nr[324], Hu = Nr[434] + Nr[61] + Nr[433], Uu = Nr[325] + Nr[61] + Nr[323], qu = Nr[434] + Nr[61] + Nr[323], Wu = Nr[435], Xu = Nr[436], Vu = Nr[437], Ku = Nr[438], Zu = Nr[438] + Nr[439], Ju = Nr[357] + Nr[189] + Nr[439], Qu = Nr[357] + Nr[440] + Nr[439], td = Nr[441] + Nr[30] + Nr[31], id = Nr[442] + Nr[62] + Nr[443], ed = Nr[357] + Nr[442] + Nr[346] + Nr[347] + Nr[439], nd = Nr[357] + Nr[441] + Nr[30] + Nr[31] + Nr[439], sd = Nr[357] + Nr[378] + Nr[439], rd = Nr[442] + Nr[346] + Nr[347], ad = Nr[440], hd = Nr[444] + Nr[180] + Nr[193], od = Nr[441] + Nr[180] + Nr[193], _d = Nr[48] + Nr[1] + Nr[72] + Nr[180] + Nr[193], fd = Nr[445] + Nr[62] + Nr[17], cd = Nr[445] + Nr[62] + Nr[19], ud = Nr[445], dd = Nr[445] + Nr[62] + Nr[10], ld = Nr[446], vd = Nr[447], bd = Nr[448] + Nr[50] + Nr[51], gd = Nr[449], yd = Nr[19] + Nr[14] + Nr[393], Ed = Nr[450], pd = Nr[10], md = Nr[357] + Nr[184] + Nr[439], xd = Nr[357] + Nr[10] + Nr[439], Td = Nr[357] + Nr[441] + Nr[180] + Nr[193] + Nr[439], wd = Nr[451] + Nr[61] + Nr[452], Od = Nr[451] + Nr[61] + Nr[453], Sd = Nr[10] + Nr[62] + Nr[443], kd = Nr[49] + Nr[33] + Nr[454] + Nr[1] + Nr[455], Id = Nr[42] + Nr[1] + Nr[2], Ld = Nr[451] + Nr[61] + Nr[456] + Nr[61] + Nr[457], Ad = Nr[61] + Nr[428] + Nr[458], Cd = Nr[61] + Nr[459], Rd = Nr[460], Pd = Nr[450] + Nr[1] + Nr[461] + Nr[27] + Nr[462], Dd = Nr[184] + Nr[1] + Nr[461] + Nr[27] + Nr[462], Md = Nr[448] + Nr[27] + Nr[93] + Nr[33] + Nr[302] + Nr[1] + Nr[461], Nd = Nr[49] + Nr[27] + Nr[93] + Nr[33] + Nr[302] + Nr[1] + Nr[455], jd = Nr[47] + Nr[277], Bd = Nr[463], $d = Nr[48] + Nr[50] + Nr[464], Gd = Nr[19] + Nr[1] + Nr[72], Fd = Nr[270] + Nr[1] + Nr[461] + Nr[27] + Nr[462], zd = Nr[184] + Nr[465], Yd = Nr[48] + Nr[36] + Nr[95] + Nr[180] + Nr[193], Hd = Nr[466], Ud = Nr[83] + Nr[217], qd = Nr[42] + Nr[14] + Nr[467] + Nr[1] + Nr[416], Wd = Nr[350] + Nr[33] + Nr[468], Xd = Nr[350] + Nr[83] + Nr[135] + Nr[346] + Nr[258], Vd = Nr[382] + Nr[371] + Nr[469], Kd = Nr[262] + Nr[77] + Nr[470], Zd = Nr[471], Jd = Nr[472], Qd = Nr[17] + Nr[50] + Nr[51] + Nr[14] + Nr[393], tl = Nr[473] + Nr[97] + Nr[110] + Nr[474], il = Nr[54] + Nr[475] + Nr[54] + Nr[125] + Nr[54] + Nr[476] + Nr[54] + Nr[123] + Nr[54] + Nr[477], el = Nr[54] + Nr[478] + Nr[54] + Nr[479] + Nr[54] + Nr[480] + Nr[54] + Nr[481], nl = Nr[482], sl = Nr[483], rl = Nr[484], al = Nr[48] + Nr[1] + Nr[485] + Nr[110] + Nr[486], hl = Nr[487], ol = Nr[488], _l = Nr[489], fl = Nr[49] + Nr[50] + Nr[94] + Nr[74] + Nr[490], cl = Nr[49] + Nr[1] + Nr[491], ul = Nr[162] + Nr[110] + Nr[492], dl = Nr[493], ll = Nr[494], vl = Nr[495], bl = Nr[77] + Nr[154] + Nr[77] + Nr[369] + Nr[77] + Nr[496], gl = Nr[77] + Nr[154] + Nr[77] + Nr[369] + Nr[77] + Nr[497], yl = Nr[77] + Nr[154] + Nr[77] + Nr[498], El = Nr[77] + Nr[154] + Nr[77] + Nr[499], pl = Nr[77] + Nr[159] + Nr[77] + Nr[369] + Nr[77] + Nr[496], ml = Nr[77] + Nr[159] + Nr[77] + Nr[369] + Nr[77] + Nr[497], xl = Nr[77] + Nr[159] + Nr[77] + Nr[498], Tl = Nr[77] + Nr[159] + Nr[77] + Nr[499], wl = Nr[500], Ol = Nr[282], Sl = Nr[501] + Nr[53] + Nr[184] + Nr[471] + Nr[203] + Nr[371] + Nr[502] + Nr[503] + Nr[504] + Nr[505] + Nr[54] + Nr[506] + Nr[507] + Nr[508] + Nr[266] + Nr[509] + Nr[510] + Nr[511] + Nr[512] + Nr[513] + Nr[514] + Nr[515] + Nr[12] + Nr[296] + Nr[371] + Nr[516] + Nr[512] + Nr[517] + Nr[432] + Nr[161] + Nr[518] + Nr[266] + Nr[162] + Nr[161] + Nr[43] + Nr[95] + Nr[519] + Nr[516] + Nr[506] + Nr[520] + Nr[432] + Nr[521] + Nr[181] + Nr[522] + Nr[428] + Nr[523] + Nr[294] + Nr[524] + Nr[525] + Nr[526] + Nr[346] + Nr[527] + Nr[371] + Nr[33] + Nr[528] + Nr[33] + Nr[508] + Nr[96] + Nr[529] + Nr[530] + Nr[12] + Nr[531] + Nr[95] + Nr[532] + Nr[181] + Nr[371] + Nr[533] + Nr[534] + Nr[535] + Nr[536] + Nr[526] + Nr[24] + Nr[537] + Nr[230] + Nr[514] + Nr[107] + Nr[293] + Nr[538] + Nr[539] + Nr[540] + Nr[431] + Nr[541] + Nr[508] + Nr[267] + Nr[1] + Nr[542] + Nr[543] + Nr[428] + Nr[24] + Nr[267] + Nr[95] + Nr[24] + Nr[293] + Nr[544] + Nr[127] + Nr[512] + Nr[108] + Nr[508] + Nr[36] + Nr[545] + Nr[546] + Nr[547] + Nr[548] + Nr[549] + Nr[550] + Nr[514] + Nr[551] + Nr[514] + Nr[552] + Nr[296] + Nr[512] + Nr[371] + Nr[293] + Nr[553] + Nr[554] + Nr[555] + Nr[556] + Nr[294] + Nr[557] + Nr[558] + Nr[296] + Nr[16] + Nr[296] + Nr[54] + Nr[500], kl = Nr[559] + Nr[11] + Nr[370], Il = Nr[560], Ll = Nr[61] + Nr[561], Al = Nr[266] + Nr[62] + Nr[266], Cl = Nr[23] + Nr[83] + Nr[562] + Nr[110] + Nr[563], Rl = Nr[180] + Nr[564], Pl = Nr[50] + Nr[51], Dl = Nr[14] + Nr[15] + Nr[50] + Nr[51], Ml = Nr[565] + Nr[566], Nl = Nr[33] + Nr[70], jl = Nr[27] + Nr[93], Bl = Nr[110] + Nr[567] + Nr[96] + Nr[367], $l = Nr[27] + Nr[93] + Nr[96] + Nr[367], Gl = Nr[146] + Nr[568], Fl = Nr[23] + Nr[96] + Nr[569] + Nr[127] + Nr[128], zl = Nr[565] + Nr[236] + Nr[14] + Nr[15], Yl = Nr[27] + Nr[570] + Nr[110] + Nr[563], Hl = Nr[571], Ul = Nr[572], ql = Nr[226] + Nr[62] + Nr[573], Wl = Nr[226], Xl = Nr[574], Vl = Nr[575], Kl = Nr[575] + Nr[62] + Nr[565], Zl = Nr[575] + Nr[62] + Nr[30], Jl = Nr[576], Ql = Nr[576] + Nr[62] + Nr[565], tv = Nr[576] + Nr[62] + Nr[30], iv = Nr[576] + Nr[62] + Nr[565] + Nr[62] + Nr[30], ev = Nr[576] + Nr[62] + Nr[30] + Nr[62] + Nr[565], nv = Nr[577] + Nr[62] + Nr[92], sv = Nr[577] + Nr[62] + Nr[91], rv = Nr[577] + Nr[62] + Nr[68], av = Nr[577] + Nr[62] + Nr[67], hv = Nr[578], ov = Nr[579], _v = Nr[573], fv = Nr[580], cv = Nr[581], uv = Nr[582], dv = Nr[583], lv = Nr[584], vv = Nr[585], bv = Nr[586], gv = Nr[587], yv = Nr[588], Ev = Nr[589], pv = Nr[590], mv = Nr[591], xv = Nr[592], Tv = Nr[593], wv = Nr[594] + Nr[62] + Nr[595], Ov = Nr[594] + Nr[62] + Nr[267], Sv = Nr[594] + Nr[62] + Nr[161], kv = Nr[594] + Nr[62] + Nr[268], Iv = Nr[594] + Nr[62] + Nr[293], Lv = Nr[594] + Nr[62] + Nr[294], Av = Nr[594] + Nr[62] + Nr[458], Cv = Nr[594] + Nr[62] + Nr[295], Rv = Nr[594] + Nr[62] + Nr[296], Pv = Nr[594] + Nr[62] + Nr[140], Dv = Nr[596], Mv = Nr[167] + Nr[61] + Nr[597] + Nr[61] + Nr[306] + Nr[61] + Nr[598], Nv = Nr[599], jv = Nr[167] + Nr[61] + Nr[600] + Nr[61] + Nr[306] + Nr[61] + Nr[601], Bv = Nr[602], $v = Nr[603] + Nr[61] + Nr[306] + Nr[61] + Nr[604], Gv = Nr[603] + Nr[61] + Nr[605], Fv = Nr[603] + Nr[61] + Nr[306], zv = Nr[606] + Nr[61] + Nr[607], Yv = Nr[608] + Nr[61] + Nr[197], Hv = Nr[350] + Nr[1] + Nr[373], Uv = Nr[609] + Nr[83] + Nr[279], qv = Nr[610] + Nr[1] + Nr[611] + Nr[83] + Nr[279], Wv = Nr[196] + Nr[61] + Nr[168], Xv = Nr[300], Vv = Nr[180] + Nr[183] + Nr[16] + Nr[146] + Nr[16] + Nr[65] + Nr[204], Kv = Nr[612], Zv = Nr[334], Jv = Nr[613], Qv = Nr[270] + Nr[346] + Nr[258], tb = Nr[196] + Nr[61] + Nr[424] + Nr[61] + Nr[411], ib = Nr[614] + Nr[180] + Nr[183] + Nr[27] + Nr[93], eb = Nr[615], nb = Nr[58] + Nr[616], sb = Nr[382] + Nr[24] + Nr[617], rb = Nr[618], ab = Nr[382] + Nr[36] + Nr[619], hb = Nr[620], ob = Nr[621] + Nr[110] + Nr[308], _b = Nr[58] + Nr[622], fb = Nr[409] + Nr[16], cb = Nr[623] + Nr[110] + Nr[308], ub = Nr[58] + Nr[624], db = Nr[623] + Nr[83] + Nr[135], lb = Nr[58] + Nr[625], vb = Nr[626], bb = Nr[574] + Nr[1] + Nr[627], gb = Nr[574] + Nr[36] + Nr[628], yb = Nr[574] + Nr[11] + Nr[90] + Nr[107], Eb = Nr[574] + Nr[11] + Nr[90] + Nr[108], pb = Nr[14] + Nr[629] + Nr[630], mb = Nr[50] + Nr[631] + Nr[630], xb = Nr[194] + Nr[180] + Nr[183], Tb = Nr[170] + Nr[110] + Nr[492], wb = Nr[203], Ob = Nr[146], Sb = Nr[0] + Nr[180] + Nr[183], kb = Nr[48] + Nr[24] + Nr[632] + Nr[180] + Nr[633], Ib = Nr[634] + Nr[61] + Nr[306] + Nr[61] + Nr[635], Lb = Nr[636], Ab = Nr[634] + Nr[61] + Nr[306] + Nr[61] + Nr[212], Cb = Nr[637], Rb = Nr[212] + Nr[61] + Nr[634] + Nr[61] + Nr[319], Pb = Nr[638] + Nr[61] + Nr[212] + Nr[61] + Nr[634] + Nr[61] + Nr[320], Db = Nr[638] + Nr[61] + Nr[635] + Nr[61] + Nr[634], Mb = Nr[542], Nb = Nr[423], jb = Nr[539], Bb = Nr[639] + Nr[61] + Nr[167] + Nr[61] + Nr[640], $b = Nr[639] + Nr[61] + Nr[641] + Nr[61] + Nr[640], Gb = Nr[639] + Nr[61] + Nr[642] + Nr[61] + Nr[640], Fb = Nr[639] + Nr[61] + Nr[643] + Nr[61] + Nr[640], zb = Nr[23] + Nr[346] + Nr[644], Yb = Nr[33] + Nr[234] + Nr[110] + Nr[645], Hb = Nr[366] + Nr[110] + Nr[646] + Nr[36] + Nr[628], Ub = Nr[603] + Nr[61] + Nr[306] + Nr[61] + Nr[606], qb = Nr[366] + Nr[36] + Nr[647], Wb = Nr[185] + Nr[648] + Nr[649], Xb = Nr[650] + Nr[110] + Nr[308], Vb = Nr[651] + Nr[33] + Nr[234], Kb = Nr[652], Zb = Nr[653], Jb = Nr[654] + Nr[62] + Nr[655], Qb = Nr[656] + Nr[62] + Nr[655], tg = Nr[657], ig = Nr[124], eg = Nr[658], ng = Nr[208] + Nr[61] + Nr[209], sg = Nr[52] + Nr[53] + Nr[266] + Nr[54] + Nr[266] + Nr[54] + Nr[266] + Nr[54] + Nr[266] + Nr[55], rg = Nr[185] + Nr[1] + Nr[659], ag = Nr[350] + Nr[14] + Nr[660] + Nr[230] + Nr[231], hg = Nr[17] + Nr[1] + Nr[627] + Nr[110] + Nr[92], og = Nr[58] + Nr[267] + Nr[1] + Nr[458] + Nr[36] + Nr[516] + Nr[27], _g = Nr[58] + Nr[661], fg = Nr[58] + Nr[662] + Nr[50] + Nr[296] + Nr[36], cg = Nr[58] + Nr[663] + Nr[36] + Nr[664], ug = Nr[58] + Nr[663] + Nr[24] + Nr[665], dg = Nr[58] + Nr[666] + Nr[1] + Nr[667], lg = Nr[58] + Nr[668], vg = Nr[58] + Nr[267] + Nr[27] + Nr[458] + Nr[1] + Nr[516] + Nr[43], bg = Nr[58] + Nr[669] + Nr[36] + Nr[266], gg = Nr[58] + Nr[670] + Nr[671], yg = Nr[58] + Nr[267] + Nr[43] + Nr[458] + Nr[672] + Nr[161], Eg = Nr[58] + Nr[663] + Nr[24] + Nr[673], pg = Nr[58] + Nr[674], mg = Nr[623], xg = Nr[58] + Nr[161] + Nr[526] + Nr[296] + Nr[675], Tg = Nr[621], wg = Nr[58] + Nr[676], Og = Nr[609], Sg = Nr[602] + Nr[14] + Nr[677], kg = Nr[58] + Nr[678] + Nr[27] + Nr[667], Ig = Nr[58] + Nr[679], Lg = Nr[58] + Nr[267] + Nr[43] + Nr[680] + Nr[24] + Nr[293], Ag = Nr[58] + Nr[681] + Nr[682] + Nr[161], Cg = Nr[58] + Nr[683] + Nr[684], Rg = Nr[58] + Nr[267] + Nr[50] + Nr[458] + Nr[685] + Nr[266], Pg = Nr[58] + Nr[686], Dg = Nr[58] + Nr[12] + Nr[295] + Nr[12] + Nr[296] + Nr[12] + Nr[296], Mg = Nr[58] + Nr[458] + Nr[24] + Nr[687], Ng = Nr[58] + Nr[293] + Nr[43] + Nr[293] + Nr[1] + Nr[293] + Nr[36], jg = Nr[58] + Nr[688], Bg = Nr[58] + Nr[689], $g = Nr[58] + Nr[458] + Nr[43] + Nr[458] + Nr[50] + Nr[458] + Nr[43], Gg = Nr[58] + Nr[293] + Nr[1] + Nr[690], Fg = Nr[58] + Nr[691], zg = Nr[58] + Nr[295] + Nr[27] + Nr[295] + Nr[27] + Nr[295] + Nr[27], Yg = Nr[58] + Nr[692], Hg = Nr[58] + Nr[693], Ug = Nr[58] + Nr[694], qg = Nr[58] + Nr[516] + Nr[50] + Nr[516] + Nr[27] + Nr[516] + Nr[27], Wg = Nr[58] + Nr[24] + Nr[295] + Nr[24] + Nr[294] + Nr[24] + Nr[293], Xg = Nr[58] + Nr[24] + Nr[516] + Nr[24] + Nr[458] + Nr[24] + Nr[294], Vg = Nr[58] + Nr[24] + Nr[295] + Nr[24] + Nr[293] + Nr[24] + Nr[268], Kg = Nr[58] + Nr[695], Zg = Nr[58] + Nr[50] + Nr[516] + Nr[696], Jg = Nr[697], Qg = Nr[58] + Nr[516] + Nr[698] + Nr[266] + Nr[423] + Nr[266], ty = Nr[699] + Nr[1] + Nr[611] + Nr[83] + Nr[279], iy = Nr[58] + Nr[429] + Nr[516] + Nr[700], ey = Nr[58] + Nr[268] + Nr[526] + Nr[268] + Nr[423] + Nr[701], ny = Nr[58] + Nr[36] + Nr[161] + Nr[702], sy = Nr[58] + Nr[161] + Nr[50] + Nr[296] + Nr[703], ry = Nr[704] + Nr[24] + Nr[705], ay = Nr[58] + Nr[706], hy = Nr[58] + Nr[432] + Nr[294] + Nr[432] + Nr[294] + Nr[432] + Nr[458], oy = Nr[311] + Nr[77], _y = Nr[47] + Nr[225] + Nr[74] + Nr[224], fy = Nr[707], cy = Nr[708], uy = Nr[709], dy = Nr[254] + Nr[1] + Nr[258] + Nr[24] + Nr[255], ly = Nr[710] + Nr[36] + Nr[711], vy = Nr[710] + Nr[260] + Nr[712], by = Nr[180] + Nr[278] + Nr[16] + Nr[713] + Nr[16] + Nr[714] + Nr[62], gy = Nr[710], yy = Nr[715], Ey = Nr[716], py = Nr[346] + Nr[717] + Nr[16] + Nr[423] + Nr[16] + Nr[716] + Nr[16] + Nr[718] + Nr[62], my = Nr[244] + Nr[43] + Nr[243], xy = Nr[654] + Nr[74] + Nr[719], Ty = Nr[720], wy = Nr[244] + Nr[110] + Nr[164], Oy = Nr[721] + Nr[24] + Nr[722] + Nr[74] + Nr[158], Sy = Nr[723], ky = Nr[724] + Nr[96] + Nr[725], Iy = Nr[238] + Nr[180] + Nr[193], Ly = Nr[726], Ay = Nr[727], Cy = Nr[728], Ry = Nr[729], Py = Nr[730] + Nr[565] + Nr[731], Dy = Nr[730] + Nr[27] + Nr[93], My = Nr[732], Ny = Nr[733], jy = Nr[734], By = Nr[735], $y = Nr[736], Gy = Nr[737] + Nr[1] + Nr[258], Fy = Nr[738], zy = Nr[135] + Nr[83] + Nr[339], Yy = Nr[739], Hy = Nr[740] + Nr[96] + Nr[496] + Nr[1] + Nr[258] + Nr[110] + Nr[164], Uy = Nr[741], qy = Nr[742], Wy = Nr[135], Xy = Nr[743], Vy = Nr[260] + Nr[744] + Nr[16] + Nr[745] + Nr[439] + Nr[266] + Nr[746], Ky = Nr[477], Zy = Nr[720] + Nr[127] + Nr[128], Jy = Nr[747] + Nr[1] + Nr[258], Qy = Nr[169] + Nr[30] + Nr[748] + Nr[204], tE = Nr[169] + Nr[33] + Nr[749] + Nr[16] + Nr[27] + Nr[750] + Nr[204], iE = Nr[751] + Nr[27] + Nr[750], eE = Nr[752], nE = Nr[12] + Nr[753] + Nr[432] + Nr[293] + Nr[526] + Nr[754] + Nr[755] + Nr[295] + Nr[423] + Nr[756] + Nr[526] + Nr[757] + Nr[429] + Nr[268] + Nr[758] + Nr[516] + Nr[759] + Nr[760] + Nr[761] + Nr[762] + Nr[763] + Nr[266] + Nr[432] + Nr[294] + Nr[12] + Nr[764] + Nr[423] + Nr[765] + Nr[766] + Nr[767] + Nr[432] + Nr[295] + Nr[768] + Nr[268] + Nr[423] + Nr[769] + Nr[770] + Nr[771] + Nr[429] + Nr[516] + Nr[432] + Nr[772] + Nr[423] + Nr[161] + Nr[773] + Nr[774] + Nr[775] + Nr[776] + Nr[777] + Nr[161] + Nr[778] + Nr[779] + Nr[54] + Nr[780] + Nr[267] + Nr[423] + Nr[781] + Nr[162] + Nr[782] + Nr[423] + Nr[783] + Nr[12] + Nr[784] + Nr[785] + Nr[786] + Nr[787] + Nr[788] + Nr[789] + Nr[293] + Nr[790] + Nr[791] + Nr[792] + Nr[793] + Nr[423] + Nr[295] + Nr[459] + Nr[268] + Nr[429] + Nr[266] + Nr[794] + Nr[795] + Nr[796] + Nr[797] + Nr[526] + Nr[771] + Nr[798] + Nr[799] + Nr[162] + Nr[800] + Nr[526] + Nr[801] + Nr[785] + Nr[161] + Nr[429] + Nr[802] + Nr[526] + Nr[516] + Nr[803] + Nr[804] + Nr[805] + Nr[806] + Nr[459] + Nr[516] + Nr[423] + Nr[807] + Nr[808] + Nr[665] + Nr[809] + Nr[266] + Nr[810] + Nr[811] + Nr[423] + Nr[812] + Nr[526] + Nr[293], sE = Nr[169] + Nr[14] + Nr[813] + Nr[16] + Nr[42] + Nr[439], rE = Nr[362] + Nr[814] + Nr[815] + Nr[362] + Nr[268] + Nr[24] + Nr[362] + Nr[814] + Nr[816] + Nr[62] + Nr[262] + Nr[62] + Nr[729] + Nr[362] + Nr[161] + Nr[1] + Nr[817] + Nr[62] + Nr[262] + Nr[62] + Nr[729], aE = Nr[818], hE = Nr[819], oE = Nr[820], _E = Nr[163] + Nr[83], fE = Nr[821], cE = Nr[295] + Nr[62], uE = Nr[822], dE = Nr[245], lE = Nr[823], vE = Nr[1] + Nr[373], bE = Nr[74] + Nr[824], gE = Nr[1] + Nr[825], yE = Nr[826], EE = Nr[827], pE = Nr[350], mE = Nr[828], xE = Nr[829], TE = Nr[830], wE = Nr[831], OE = Nr[832], SE = Nr[833], kE = Nr[406], IE = Nr[834], LE = Nr[835], AE = Nr[311] + Nr[836], CE = Nr[16] + Nr[251] + Nr[16] + Nr[837] + Nr[294], RE = Nr[838], PE = Nr[839] + Nr[186] + Nr[840], DE = Nr[841], ME = Nr[842] + Nr[62] + Nr[843] + Nr[62] + Nr[267], NE = Nr[110] + Nr[844], jE = Nr[50] + Nr[94], BE = Nr[347], $E = Nr[845], GE = Nr[846] + Nr[186] + Nr[840], FE = Nr[847], zE = Nr[135] + Nr[161] + Nr[27], YE = Nr[428] + Nr[83] + Nr[135], HE = Nr[848] + Nr[50] + Nr[94], UE = Nr[305] + Nr[61] + Nr[306] + Nr[61] + Nr[410], qE = Nr[47] + Nr[198], WE = Nr[0] + Nr[50] + Nr[272], XE = Nr[314], VE = Nr[225], KE = Nr[311] + Nr[62] + Nr[50] + Nr[94], ZE = Nr[314] + Nr[1] + Nr[849], JE = Nr[539] + Nr[180] + Nr[193], QE = Nr[850] + Nr[110] + Nr[851] + Nr[346] + Nr[852], tp = Nr[311] + Nr[62] + Nr[50] + Nr[272], ip = Nr[853], ep = Nr[854] + Nr[62] + Nr[855], np = Nr[856] + Nr[33] + Nr[234] + Nr[1] + Nr[461], sp = Nr[857], rp = Nr[42], ap = Nr[340] + Nr[50] + Nr[341], hp = Nr[47] + Nr[203], op = Nr[311] + Nr[77] + Nr[417], _p = Nr[47] + Nr[858] + Nr[33] + Nr[70], fp = Nr[47] + Nr[859], cp = Nr[225] + Nr[30] + Nr[860], up = Nr[859], dp = Nr[42] + Nr[43] + Nr[274], lp = Nr[163] + Nr[180] + Nr[193], vp = Nr[311] + Nr[62] + Nr[346] + Nr[258], bp = Nr[223], gp = Nr[861] + Nr[62] + Nr[17], yp = Nr[861] + Nr[62] + Nr[19], Ep = Nr[862], pp = Nr[858] + Nr[33] + Nr[70], mp = Nr[47] + Nr[854], xp = Nr[863] + Nr[61] + Nr[864], Tp = Nr[614] + Nr[110] + Nr[865], wp = Nr[311] + Nr[62] + Nr[110] + Nr[330] + Nr[346] + Nr[258], Op = Nr[854], Sp = Nr[110] + Nr[330] + Nr[346] + Nr[258], kp = Nr[866], Ip = Nr[311] + Nr[62] + Nr[36] + Nr[867], Lp = Nr[36] + Nr[867], Ap = Nr[435] + Nr[346] + Nr[258], Cp = Nr[394] + Nr[110] + Nr[851] + Nr[346] + Nr[852], Rp = Nr[868] + Nr[61] + Nr[306] + Nr[61] + Nr[869], Pp = Nr[868] + Nr[61] + Nr[870], Dp = Nr[225] + Nr[43] + Nr[243], Mp = Nr[47] + Nr[871] + Nr[83] + Nr[339], Np = Nr[868] + Nr[61] + Nr[306], jp = Nr[868] + Nr[61] + Nr[872], Bp = Nr[311] + Nr[62] + Nr[230] + Nr[873], $p = Nr[874], Gp = Nr[191] + Nr[110] + Nr[164], Fp = Nr[871] + Nr[83] + Nr[339], zp = Nr[871] + Nr[180] + Nr[183], Yp = Nr[230] + Nr[873], Hp = Nr[311] + Nr[62] + Nr[83] + Nr[135], Up = Nr[83] + Nr[135], qp = Nr[58] + Nr[875], Wp = Nr[47] + Nr[858] + Nr[33] + Nr[149], Xp = Nr[366] + Nr[1] + Nr[627], Vp = Nr[366] + Nr[110] + Nr[646] + Nr[11] + Nr[90] + Nr[107], Kp = Nr[366] + Nr[36] + Nr[876] + Nr[1] + Nr[627], Zp = Nr[623] + Nr[74] + Nr[87], Jp = Nr[47] + Nr[190], Qp = Nr[366] + Nr[83] + Nr[339], tm = Nr[603] + Nr[61] + Nr[306] + Nr[61] + Nr[606] + Nr[61] + Nr[869], im = Nr[47] + Nr[229] + Nr[1] + Nr[627], em = Nr[47] + Nr[229] + Nr[230] + Nr[231], nm = Nr[379], sm = Nr[47] + Nr[225] + Nr[14] + Nr[877], rm = Nr[47] + Nr[878], am = Nr[879] + Nr[30] + Nr[880], hm = Nr[47] + Nr[225] + Nr[30] + Nr[860], om = Nr[221], _m = Nr[30] + Nr[860], fm = Nr[14] + Nr[877], cm = Nr[24] + Nr[220] + Nr[33] + Nr[149], um = Nr[110] + Nr[164], dm = Nr[36] + Nr[876] + Nr[230] + Nr[231], lm = Nr[74] + Nr[224], vm = Nr[881], bm = Nr[442], gm = Nr[366] + Nr[62] + Nr[654], ym = Nr[603] + Nr[61] + Nr[606], Em = Nr[366] + Nr[62] + Nr[226], pm = Nr[603] + Nr[61] + Nr[604] + Nr[61] + Nr[882], mm = Nr[603] + Nr[61] + Nr[604] + Nr[61] + Nr[883] + Nr[61] + Nr[107], xm = Nr[603] + Nr[61] + Nr[604] + Nr[61] + Nr[883] + Nr[61] + Nr[108], Tm = Nr[366] + Nr[62] + Nr[189], wm = Nr[884] + Nr[62] + Nr[654], Om = Nr[885], Sm = Nr[886], km = Nr[604] + Nr[61] + Nr[882], Im = Nr[574] + Nr[62] + Nr[887], Lm = Nr[574] + Nr[62] + Nr[654], Am = Nr[604] + Nr[61] + Nr[883] + Nr[61] + Nr[107], Cm = Nr[574] + Nr[62] + Nr[221] + Nr[62] + Nr[746], Rm = Nr[574] + Nr[62] + Nr[221] + Nr[62] + Nr[95], Pm = Nr[888] + Nr[62] + Nr[623], Dm = Nr[285] + Nr[61] + Nr[889] + Nr[61] + Nr[410], Mm = Nr[888] + Nr[62] + Nr[623] + Nr[62] + Nr[389], Nm = Nr[285] + Nr[61] + Nr[167] + Nr[61] + Nr[890], jm = Nr[888] + Nr[62] + Nr[185] + Nr[62] + Nr[891], Bm = Nr[888] + Nr[62] + Nr[621] + Nr[62] + Nr[654], $m = Nr[888] + Nr[62] + Nr[621] + Nr[62] + Nr[892], Gm = Nr[285] + Nr[61] + Nr[893], Fm = Nr[888] + Nr[62] + Nr[650], zm = Nr[888] + Nr[62] + Nr[650] + Nr[62] + Nr[389], Ym = Nr[167] + Nr[61] + Nr[597], Hm = Nr[185] + Nr[62] + Nr[894], Um = Nr[185] + Nr[62] + Nr[253], qm = Nr[895] + Nr[61] + Nr[896] + Nr[61] + Nr[897], Wm = Nr[219] + Nr[62] + Nr[898] + Nr[62] + Nr[854], Xm = Nr[229] + Nr[62] + Nr[654], Vm = Nr[229] + Nr[62] + Nr[892], Km = Nr[226] + Nr[62] + Nr[148], Zm = Nr[226] + Nr[62] + Nr[654], Jm = Nr[226] + Nr[62] + Nr[185] + Nr[62] + Nr[891], Qm = Nr[606] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], tx = Nr[226] + Nr[62] + Nr[437], ix = Nr[870], ex = Nr[196] + Nr[61] + Nr[899] + Nr[61] + Nr[634], nx = Nr[196] + Nr[61] + Nr[606], sx = Nr[203] + Nr[62] + Nr[226] + Nr[62] + Nr[148], rx = Nr[203] + Nr[62] + Nr[226] + Nr[62] + Nr[389], ax = Nr[196] + Nr[61] + Nr[607], hx = Nr[203] + Nr[62] + Nr[437], ox = Nr[196] + Nr[61] + Nr[870], _x = Nr[203] + Nr[62] + Nr[201], fx = Nr[196] + Nr[61] + Nr[518] + Nr[61] + Nr[456], cx = Nr[203] + Nr[62] + Nr[539] + Nr[62] + Nr[10], ux = Nr[203] + Nr[62] + Nr[886], dx = Nr[900] + Nr[61] + Nr[901], lx = Nr[738] + Nr[62] + Nr[190], vx = Nr[900] + Nr[61] + Nr[902], bx = Nr[738] + Nr[62] + Nr[233], gx = Nr[738] + Nr[62] + Nr[654], yx = Nr[738] + Nr[62] + Nr[166] + Nr[62] + Nr[862], Ex = Nr[738] + Nr[62] + Nr[166] + Nr[62] + Nr[903], px = Nr[738] + Nr[62] + Nr[166] + Nr[62] + Nr[389], mx = Nr[738] + Nr[62] + Nr[201], xx = Nr[738] + Nr[62] + Nr[228] + Nr[62] + Nr[148], Tx = Nr[738] + Nr[62] + Nr[228], wx = Nr[900] + Nr[61] + Nr[607], Ox = Nr[738] + Nr[62] + Nr[437], Sx = Nr[900] + Nr[61] + Nr[883] + Nr[61] + Nr[107], kx = Nr[738] + Nr[62] + Nr[221] + Nr[62] + Nr[746], Ix = Nr[738] + Nr[62] + Nr[221] + Nr[62] + Nr[95], Lx = Nr[738] + Nr[62] + Nr[862], Ax = Nr[900] + Nr[61] + Nr[904] + Nr[61] + Nr[902], Cx = Nr[738] + Nr[62] + Nr[905] + Nr[62] + Nr[233], Rx = Nr[900] + Nr[61] + Nr[606], Px = Nr[738] + Nr[62] + Nr[226], Dx = Nr[738] + Nr[62] + Nr[226] + Nr[62] + Nr[389], Mx = Nr[738] + Nr[62] + Nr[906], Nx = Nr[738] + Nr[62] + Nr[574] + Nr[62] + Nr[887], jx = Nr[900] + Nr[61] + Nr[604] + Nr[61] + Nr[605], Bx = Nr[738] + Nr[62] + Nr[574] + Nr[62] + Nr[654], $x = Nr[738] + Nr[62] + Nr[539] + Nr[62] + Nr[10], Gx = Nr[900] + Nr[61] + Nr[907] + Nr[61] + Nr[323], Fx = Nr[738] + Nr[62] + Nr[49] + Nr[62] + Nr[92], zx = Nr[868] + Nr[61] + Nr[899] + Nr[61] + Nr[605], Yx = Nr[868] + Nr[61] + Nr[889], Hx = Nr[871] + Nr[62] + Nr[623], Ux = Nr[871] + Nr[62] + Nr[623] + Nr[62] + Nr[654], qx = Nr[868] + Nr[61] + Nr[889] + Nr[61] + Nr[167] + Nr[61] + Nr[890], Wx = Nr[868] + Nr[61] + Nr[889] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], Xx = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[909] + Nr[61] + Nr[902], Vx = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[605], Kx = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[165] + Nr[61] + Nr[411], Zx = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[608], Jx = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[607], Qx = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[606], tT = Nr[338] + Nr[62] + Nr[148], iT = Nr[315] + Nr[61] + Nr[605], eT = Nr[338] + Nr[62] + Nr[654], nT = Nr[338] + Nr[62] + Nr[650], sT = Nr[315] + Nr[61] + Nr[893] + Nr[61] + Nr[410], rT = Nr[338] + Nr[62] + Nr[650] + Nr[62] + Nr[389], aT = Nr[315] + Nr[61] + Nr[167] + Nr[61] + Nr[890], hT = Nr[338] + Nr[62] + Nr[185] + Nr[62] + Nr[891], oT = Nr[338] + Nr[62] + Nr[256] + Nr[62] + Nr[221], _T = Nr[315] + Nr[61] + Nr[640] + Nr[61] + Nr[883], fT = Nr[338] + Nr[62] + Nr[42] + Nr[62] + Nr[221], cT = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[910], uT = Nr[338] + Nr[62] + Nr[340] + Nr[62] + Nr[911], dT = Nr[338] + Nr[62] + Nr[912] + Nr[62] + Nr[913], lT = Nr[338] + Nr[62] + Nr[577], vT = Nr[338] + Nr[62] + Nr[914] + Nr[62] + Nr[915], bT = Nr[338] + Nr[62] + Nr[18] + Nr[62] + Nr[916], gT = Nr[315] + Nr[61] + Nr[316] + Nr[61] + Nr[425], yT = Nr[338] + Nr[62] + Nr[18] + Nr[62] + Nr[378], ET = Nr[315] + Nr[61] + Nr[327], pT = Nr[338] + Nr[62] + Nr[917], mT = Nr[338] + Nr[62] + Nr[917] + Nr[62] + Nr[437], xT = Nr[315] + Nr[61] + Nr[918] + Nr[61] + Nr[919] + Nr[61] + Nr[315], TT = Nr[338] + Nr[62] + Nr[256] + Nr[62] + Nr[920] + Nr[62] + Nr[338], wT = Nr[315] + Nr[61] + Nr[640] + Nr[61] + Nr[919] + Nr[61] + Nr[315], OT = Nr[338] + Nr[62] + Nr[42] + Nr[62] + Nr[920] + Nr[62] + Nr[338], ST = Nr[291] + Nr[61] + Nr[918], kT = Nr[594] + Nr[62] + Nr[256], IT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[411], LT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[862], AT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[221], CT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[889], RT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[623], PT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[889] + Nr[61] + Nr[410], DT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[893], MT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[650], NT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[167] + Nr[61] + Nr[890], jT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[185] + Nr[62] + Nr[891], BT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], $T = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[921] + Nr[61] + Nr[605], GT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[921] + Nr[61] + Nr[634], FT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[167] + Nr[61] + Nr[597], zT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[185] + Nr[62] + Nr[894], YT = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[167] + Nr[61] + Nr[600], HT = Nr[594] + Nr[62] + Nr[256] + Nr[62] + Nr[185] + Nr[62] + Nr[253], UT = Nr[594] + Nr[62] + Nr[42], qT = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[411], WT = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[862], XT = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[883], VT = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[221], KT = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[889], ZT = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[623], JT = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[893], QT = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[650], tw = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[167] + Nr[61] + Nr[890], iw = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[185] + Nr[62] + Nr[891], ew = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[621] + Nr[62] + Nr[654], nw = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[185] + Nr[62] + Nr[894], sw = Nr[594] + Nr[62] + Nr[42] + Nr[62] + Nr[185] + Nr[62] + Nr[253], rw = Nr[900] + Nr[61] + Nr[909] + Nr[61] + Nr[902], aw = Nr[900] + Nr[61] + Nr[605], hw = Nr[654], ow = Nr[900] + Nr[61] + Nr[606] + Nr[61] + Nr[410], _w = Nr[226] + Nr[1] + Nr[627], fw = Nr[900] + Nr[61] + Nr[899] + Nr[61] + Nr[605], cw = Nr[229] + Nr[1] + Nr[627], uw = Nr[922] + Nr[11] + Nr[181] + Nr[83] + Nr[923], dw = Nr[604] + Nr[61] + Nr[605], lw = Nr[900] + Nr[61] + Nr[165] + Nr[61] + Nr[410], vw = Nr[166] + Nr[110] + Nr[308], bw = Nr[905] + Nr[33] + Nr[70], gw = Nr[900] + Nr[61] + Nr[870], yw = Nr[900] + Nr[61] + Nr[608] + Nr[61] + Nr[197], Ew = Nr[228] + Nr[186] + Nr[187], pw = Nr[900] + Nr[61] + Nr[608], mw = Nr[922] + Nr[33] + Nr[924], xw = Nr[226] + Nr[74] + Nr[232], Tw = Nr[221] + Nr[107], ww = Nr[221] + Nr[108], Ow = Nr[906], Sw = Nr[900] + Nr[61] + Nr[899] + Nr[61] + Nr[634], kw = Nr[900] + Nr[61] + Nr[604] + Nr[61] + Nr[882], Iw = Nr[900] + Nr[61] + Nr[604] + Nr[61] + Nr[883] + Nr[61] + Nr[107], Lw = Nr[900] + Nr[61] + Nr[604] + Nr[61] + Nr[883] + Nr[61] + Nr[108], Aw = Nr[900] + Nr[61] + Nr[518] + Nr[61] + Nr[456], Cw = Nr[884] + Nr[1] + Nr[627], Rw = Nr[884] + Nr[1] + Nr[627] + Nr[36] + Nr[925] + Nr[96] + Nr[258], Pw = Nr[61] + Nr[926], Dw = Nr[899] + Nr[61] + Nr[605], Mw = Nr[899] + Nr[61] + Nr[634], Nw = Nr[606], jw = Nr[606] + Nr[61] + Nr[605], Bw = Nr[226] + Nr[14] + Nr[237] + Nr[27] + Nr[236], $w = Nr[226] + Nr[14] + Nr[237] + Nr[27] + Nr[236] + Nr[11] + Nr[90], Gw = Nr[61] + Nr[927], Fw = Nr[621] + Nr[1] + Nr[627], zw = Nr[650], Yw = Nr[285] + Nr[61] + Nr[921] + Nr[61] + Nr[634], Hw = Nr[621] + Nr[230] + Nr[231], Uw = Nr[167] + Nr[61] + Nr[600], qw = Nr[196] + Nr[61] + Nr[899] + Nr[61] + Nr[605], Ww = Nr[196] + Nr[61] + Nr[606] + Nr[61] + Nr[607], Xw = Nr[196] + Nr[61] + Nr[606] + Nr[61] + Nr[167] + Nr[61] + Nr[890], Vw = Nr[196] + Nr[61] + Nr[885], Kw = Nr[928] + Nr[36] + Nr[929], Zw = Nr[61] + Nr[294] + Nr[930], Jw = Nr[888], Qw = Nr[868] + Nr[61] + Nr[899] + Nr[61] + Nr[634], tO = Nr[61] + Nr[931], iO = Nr[315] + Nr[61] + Nr[197], eO = Nr[256] + Nr[24] + Nr[932], nO = Nr[291] + Nr[61] + Nr[640], sO = Nr[42] + Nr[24] + Nr[932], rO = Nr[42] + Nr[24] + Nr[255] + Nr[50] + Nr[272], aO = Nr[315] + Nr[61] + Nr[893], hO = Nr[315] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], oO = Nr[256] + Nr[24] + Nr[932] + Nr[110] + Nr[164], _O = Nr[291] + Nr[61] + Nr[918] + Nr[61] + Nr[883], fO = Nr[256] + Nr[24] + Nr[932] + Nr[11] + Nr[90], cO = Nr[256] + Nr[24] + Nr[932] + Nr[110] + Nr[182], uO = Nr[256] + Nr[24] + Nr[932] + Nr[110] + Nr[182] + Nr[110] + Nr[308], dO = Nr[256] + Nr[24] + Nr[932] + Nr[11] + Nr[933], lO = Nr[256] + Nr[24] + Nr[932] + Nr[43] + Nr[934] + Nr[1] + Nr[627], vO = Nr[256] + Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[27] + Nr[236], bO = Nr[256] + Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[648] + Nr[649], gO = Nr[256] + Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[1] + Nr[659], yO = Nr[42] + Nr[24] + Nr[932] + Nr[110] + Nr[164], EO = Nr[42] + Nr[24] + Nr[932] + Nr[11] + Nr[90], pO = Nr[42] + Nr[24] + Nr[932] + Nr[110] + Nr[182], mO = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[889] + Nr[61] + Nr[410], xO = Nr[42] + Nr[24] + Nr[932] + Nr[110] + Nr[182] + Nr[110] + Nr[308], TO = Nr[42] + Nr[24] + Nr[932] + Nr[11] + Nr[933], wO = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[893] + Nr[61] + Nr[410], OO = Nr[42] + Nr[24] + Nr[932] + Nr[11] + Nr[933] + Nr[110] + Nr[308], SO = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[921] + Nr[61] + Nr[605], kO = Nr[42] + Nr[24] + Nr[932] + Nr[43] + Nr[934] + Nr[1] + Nr[627], IO = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[921] + Nr[61] + Nr[634], LO = Nr[42] + Nr[24] + Nr[932] + Nr[43] + Nr[934] + Nr[230] + Nr[231], AO = Nr[42] + Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[27] + Nr[236], CO = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], RO = Nr[291] + Nr[61] + Nr[640] + Nr[61] + Nr[167] + Nr[61] + Nr[600], PO = Nr[42] + Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[648] + Nr[649], DO = Nr[42] + Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[1] + Nr[659], MO = Nr[340] + Nr[14] + Nr[935], NO = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[902], jO = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[936], BO = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[165] + Nr[61] + Nr[410], $O = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[899] + Nr[61] + Nr[605], GO = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[900] + Nr[61] + Nr[899] + Nr[61] + Nr[634], FO = Nr[225] + Nr[110] + Nr[330], zO = Nr[196] + Nr[61] + Nr[606] + Nr[61] + Nr[605], YO = Nr[196] + Nr[61] + Nr[606] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], HO = Nr[225] + Nr[1] + Nr[2] + Nr[180] + Nr[193], UO = Nr[225] + Nr[110] + Nr[164], qO = Nr[49] + Nr[36] + Nr[937] + Nr[33] + Nr[302] + Nr[1] + Nr[461], WO = Nr[225] + Nr[74] + Nr[938], XO = Nr[17] + Nr[1] + Nr[72], VO = Nr[365] + Nr[36] + Nr[937] + Nr[33] + Nr[939], KO = Nr[442] + Nr[83] + Nr[339], ZO = Nr[17] + Nr[36] + Nr[937], JO = Nr[300] + Nr[1] + Nr[2], QO = Nr[427], tS = Nr[47] + Nr[366] + Nr[36] + Nr[647], iS = Nr[47] + Nr[574] + Nr[11] + Nr[90] + Nr[107], eS = Nr[47] + Nr[366] + Nr[110] + Nr[646] + Nr[11] + Nr[90] + Nr[107], nS = Nr[47] + Nr[574] + Nr[11] + Nr[90] + Nr[108], sS = Nr[47] + Nr[366] + Nr[110] + Nr[646] + Nr[11] + Nr[90] + Nr[108], rS = Nr[47] + Nr[574] + Nr[36] + Nr[628], aS = Nr[47] + Nr[366] + Nr[110] + Nr[646] + Nr[36] + Nr[628], hS = Nr[333] + Nr[61] + Nr[940] + Nr[61] + Nr[941], oS = Nr[49] + Nr[36] + Nr[175] + Nr[1] + Nr[455], _S = Nr[47] + Nr[225] + Nr[36] + Nr[175], fS = Nr[47] + Nr[884] + Nr[1] + Nr[627] + Nr[36] + Nr[925] + Nr[96] + Nr[258], cS = Nr[47] + Nr[574] + Nr[1] + Nr[627], uS = Nr[47] + Nr[906], dS = Nr[47] + Nr[884] + Nr[1] + Nr[627], lS = Nr[49] + Nr[27] + Nr[93] + Nr[1] + Nr[455], vS = Nr[47] + Nr[225] + Nr[43] + Nr[934] + Nr[230] + Nr[231], bS = Nr[866] + Nr[230] + Nr[231], gS = Nr[47] + Nr[621] + Nr[230] + Nr[231], yS = Nr[110] + Nr[492], ES = Nr[43] + Nr[934] + Nr[230] + Nr[231], pS = Nr[904] + Nr[61] + Nr[902], mS = Nr[47] + Nr[166] + Nr[110] + Nr[164], xS = Nr[47] + Nr[166], TS = Nr[47] + Nr[862], wS = Nr[163] + Nr[96] + Nr[942] + Nr[36] + Nr[175], OS = Nr[621] + Nr[83] + Nr[135], SS = Nr[43] + Nr[825], kS = Nr[47] + Nr[166] + Nr[110] + Nr[308], IS = Nr[47] + Nr[166] + Nr[43] + Nr[377], LS = Nr[165] + Nr[61] + Nr[943], AS = Nr[47] + Nr[225] + Nr[43] + Nr[944] + Nr[24] + Nr[932], CS = Nr[47] + Nr[225] + Nr[83] + Nr[279] + Nr[24] + Nr[932], RS = Nr[854] + Nr[36] + Nr[175], PS = Nr[300] + Nr[83] + Nr[279] + Nr[24] + Nr[932], DS = Nr[47] + Nr[256] + Nr[24] + Nr[932] + Nr[11] + Nr[90], MS = Nr[48] + Nr[14] + Nr[877], NS = Nr[256] + Nr[24] + Nr[932] + Nr[14] + Nr[877], jS = Nr[47] + Nr[256] + Nr[24] + Nr[932] + Nr[110] + Nr[330], BS = Nr[47] + Nr[256] + Nr[24] + Nr[932], $S = Nr[256] + Nr[24] + Nr[932] + Nr[110] + Nr[865], GS = Nr[256] + Nr[24] + Nr[932] + Nr[43] + Nr[934] + Nr[230] + Nr[231], FS = Nr[47] + Nr[42] + Nr[24] + Nr[932] + Nr[110] + Nr[330], zS = Nr[47] + Nr[42] + Nr[24] + Nr[932] + Nr[11] + Nr[90], YS = Nr[42] + Nr[24] + Nr[932] + Nr[14] + Nr[877], HS = Nr[47] + Nr[42] + Nr[24] + Nr[932], US = Nr[47] + Nr[42] + Nr[24] + Nr[932] + Nr[110] + Nr[164], qS = Nr[230] + Nr[231], WS = Nr[42] + Nr[24] + Nr[932] + Nr[110] + Nr[865], XS = Nr[24] + Nr[932] + Nr[110] + Nr[182], VS = Nr[24] + Nr[932] + Nr[110] + Nr[182] + Nr[110] + Nr[308], KS = Nr[24] + Nr[932] + Nr[110] + Nr[865], ZS = Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[27] + Nr[236], JS = Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[27] + Nr[236] + Nr[11] + Nr[90], QS = Nr[24] + Nr[932] + Nr[43] + Nr[934] + Nr[1] + Nr[627], tk = Nr[24] + Nr[932] + Nr[43] + Nr[934] + Nr[230] + Nr[231], ik = Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[1] + Nr[659], ek = Nr[24] + Nr[932] + Nr[14] + Nr[237] + Nr[648] + Nr[649], nk = Nr[24] + Nr[932] + Nr[11] + Nr[933], sk = Nr[24] + Nr[932] + Nr[11] + Nr[933] + Nr[110] + Nr[308], rk = Nr[47] + Nr[621] + Nr[1] + Nr[627], ak = Nr[43] + Nr[944] + Nr[24] + Nr[932], hk = Nr[83] + Nr[279] + Nr[24] + Nr[932], ok = Nr[945], _k = Nr[315] + Nr[61] + Nr[918] + Nr[61] + Nr[883], fk = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[946], ck = Nr[23] + Nr[36] + Nr[273] + Nr[50] + Nr[341], uk = Nr[947] + Nr[36] + Nr[948], dk = Nr[23] + Nr[33] + Nr[949] + Nr[11] + Nr[950], lk = Nr[48] + Nr[36] + Nr[273] + Nr[14] + Nr[935], vk = Nr[951], bk = Nr[928] + Nr[36] + Nr[273] + Nr[14] + Nr[935], gk = Nr[194] + Nr[74] + Nr[952] + Nr[14] + Nr[237], yk = Nr[315] + Nr[61] + Nr[306] + Nr[61] + Nr[953], Ek = Nr[854] + Nr[110] + Nr[335], pk = Nr[266] + Nr[16] + Nr[266], mk = Nr[62] + Nr[311] + Nr[77] + Nr[230] + Nr[312], xk = Nr[382] + Nr[77] + Nr[905] + Nr[439] + Nr[91] + Nr[954] + Nr[650] + Nr[439] + Nr[359] + Nr[955] + Nr[154] + Nr[77] + Nr[956] + Nr[77] + Nr[957] + Nr[77] + Nr[654] + Nr[471] + Nr[52] + Nr[53] + Nr[266] + Nr[54] + Nr[266] + Nr[54] + Nr[266] + Nr[54] + Nr[266] + Nr[958] + Nr[400] + Nr[77] + Nr[385] + Nr[439] + Nr[359], Tk = Nr[251] + Nr[50] + Nr[252] + Nr[74] + Nr[959], wk = Nr[266], Ok = Nr[960] + Nr[24] + Nr[255] + Nr[1] + Nr[961], Sk = Nr[314] + Nr[180] + Nr[162], kk = Nr[240], Ik = Nr[106] + Nr[186] + Nr[187], Lk = Nr[106] + Nr[565] + Nr[962], Ak = Nr[434] + Nr[61] + Nr[324], Ck = Nr[58] + Nr[963], Rk = Nr[291] + Nr[61] + Nr[411], Pk = Nr[58] + Nr[964] + Nr[965] + Nr[294], Dk = Nr[58] + Nr[966] + Nr[50] + Nr[266], Mk = Nr[967] + Nr[61] + Nr[605] + Nr[61] + Nr[208] + Nr[61] + Nr[209], Nk = Nr[363] + Nr[61] + Nr[968], jk = Nr[969] + Nr[62] + Nr[970], Bk = Nr[969] + Nr[62] + Nr[359], $k = Nr[363] + Nr[61] + Nr[971], Gk = Nr[969] + Nr[62] + Nr[114], Fk = Nr[363] + Nr[61] + Nr[306], zk = Nr[48] + Nr[50] + Nr[94] + Nr[36] + Nr[95] + Nr[180] + Nr[162], Yk = Nr[972], Hk = Nr[19] + Nr[36] + Nr[95] + Nr[180] + Nr[162], Uk = Nr[49] + Nr[33] + Nr[302] + Nr[1] + Nr[461], qk = Nr[61] + Nr[973], Wk = Nr[251] + Nr[50] + Nr[252] + Nr[36] + Nr[95] + Nr[27] + Nr[974] + Nr[43] + Nr[975], Xk = Nr[48] + Nr[180] + Nr[193] + Nr[36] + Nr[95] + Nr[180] + Nr[162], Vk = Nr[333] + Nr[465], Kk = Nr[131] + Nr[413] + Nr[16] + Nr[976], Zk = Nr[163] + Nr[180] + Nr[193] + Nr[36] + Nr[977], Jk = Nr[163] + Nr[180] + Nr[193] + Nr[24] + Nr[978], Qk = Nr[878], tI = Nr[23] + Nr[14] + Nr[979], iI = Nr[980] + Nr[62] + Nr[176], eI = Nr[388], nI = Nr[981] + Nr[30] + Nr[982], sI = Nr[983], rI = Nr[984], aI = Nr[985] + Nr[24] + Nr[986], hI = Nr[346] + Nr[258], oI = Nr[350] + Nr[346] + Nr[258], _I = Nr[987], fI = Nr[106] + Nr[33] + Nr[939], cI = Nr[49] + Nr[50] + Nr[94] + Nr[1] + Nr[988], uI = Nr[989] + Nr[61] + Nr[990], dI = Nr[991], lI = Nr[992], vI = Nr[993], bI = Nr[17] + Nr[50] + Nr[94], gI = Nr[202] + Nr[83] + Nr[279], yI = Nr[618] + Nr[83] + Nr[279], EI = Nr[191] + Nr[110] + Nr[492], pI = Nr[369] + Nr[24] + Nr[255], mI = Nr[218] + Nr[110] + Nr[994], xI = Nr[3] + Nr[14] + Nr[995], TI = Nr[996], wI = Nr[997] + Nr[110] + Nr[998] + Nr[24] + Nr[632], OI = Nr[23] + Nr[96] + Nr[999], SI = Nr[17] + Nr[1] + Nr[1e3] + Nr[180] + Nr[1001], kI = Nr[61] + Nr[1002], II = Nr[1003], LI = Nr[27] + Nr[1004] + Nr[16] + Nr[50] + Nr[1005] + Nr[204], AI = Nr[49] + Nr[180] + Nr[1001] + Nr[50] + Nr[51], CI = Nr[350] + Nr[110] + Nr[330] + Nr[346] + Nr[258], RI = Nr[110] + Nr[330], PI = Nr[14] + Nr[237], DI = Nr[110] + Nr[865], MI = Nr[350] + Nr[50] + Nr[272], NI = Nr[50] + Nr[272], jI = Nr[338] + Nr[1006] + Nr[849], BI = Nr[1007] + Nr[50] + Nr[1008], $I = Nr[225] + Nr[50] + Nr[94], GI = Nr[14] + Nr[935] + Nr[16] + Nr[1] + Nr[1009] + Nr[130] + Nr[255] + Nr[16] + Nr[50] + Nr[235], FI = Nr[390] + Nr[96] + Nr[258], zI = Nr[390] + Nr[33] + Nr[939], YI = Nr[1010] + Nr[50] + Nr[272], HI = Nr[1011], UI = Nr[1012] + Nr[50] + Nr[464], qI = Nr[42] + Nr[14] + Nr[1013], WI = Nr[1014], XI = Nr[442] + Nr[1] + Nr[461] + Nr[27] + Nr[462], VI = Nr[445] + Nr[180] + Nr[193] + Nr[1] + Nr[461] + Nr[27] + Nr[462], KI = Nr[366] + Nr[1] + Nr[461] + Nr[27] + Nr[462], ZI = Nr[225] + Nr[27] + Nr[93], JI = Nr[868] + Nr[61] + Nr[306] + Nr[61] + Nr[1015], QI = Nr[868] + Nr[61] + Nr[306] + Nr[61] + Nr[581], tL = Nr[23] + Nr[30] + Nr[1016], iL = Nr[61] + Nr[1017], eL = Nr[184] + Nr[471] + Nr[203] + Nr[371] + Nr[372] + Nr[503] + Nr[504] + Nr[505] + Nr[54] + Nr[506] + Nr[507] + Nr[508] + Nr[266] + Nr[509] + Nr[510] + Nr[511] + Nr[512] + Nr[513] + Nr[514] + Nr[1018] + Nr[279] + Nr[1019] + Nr[1011] + Nr[96] + Nr[1020] + Nr[517] + Nr[432] + Nr[161] + Nr[518] + Nr[266] + Nr[162] + Nr[161] + Nr[43] + Nr[95] + Nr[519] + Nr[516] + Nr[506] + Nr[520] + Nr[432] + Nr[521] + Nr[181] + Nr[522] + Nr[428] + Nr[523] + Nr[294] + Nr[524] + Nr[1021] + Nr[1022] + Nr[1023] + Nr[526] + Nr[346] + Nr[1024] + Nr[30] + Nr[428] + Nr[267] + Nr[180] + Nr[1025] + Nr[267] + Nr[1026] + Nr[1027] + Nr[180] + Nr[1028] + Nr[1029] + Nr[371] + Nr[1030] + Nr[1031] + Nr[1032] + Nr[230] + Nr[268] + Nr[1033] + Nr[162] + Nr[1034] + Nr[1035] + Nr[27] + Nr[162] + Nr[36] + Nr[512] + Nr[1036] + Nr[371] + Nr[267] + Nr[1037] + Nr[255] + Nr[267] + Nr[1038] + Nr[266] + Nr[1039] + Nr[458] + Nr[50] + Nr[1011] + Nr[1040] + Nr[458] + Nr[1041] + Nr[266] + Nr[506] + Nr[1042] + Nr[1043] + Nr[1044] + Nr[161] + Nr[12] + Nr[346] + Nr[664] + Nr[512] + Nr[161] + Nr[12] + Nr[108] + Nr[1011] + Nr[423] + Nr[1045] + Nr[1046] + Nr[27] + Nr[1047] + Nr[296] + Nr[1048] + Nr[33] + Nr[516] + Nr[371] + Nr[458] + Nr[429] + Nr[771] + Nr[533] + Nr[518] + Nr[161] + Nr[1049] + Nr[821] + Nr[1050] + Nr[1051] + Nr[1052] + Nr[508] + Nr[1053] + Nr[508] + Nr[27] + Nr[512] + Nr[295] + Nr[836] + Nr[458] + Nr[370] + Nr[295] + Nr[1054] + Nr[1055] + Nr[1056] + Nr[74] + Nr[295] + Nr[1057] + Nr[107] + Nr[268] + Nr[230] + Nr[423] + Nr[14] + Nr[268] + Nr[1058] + Nr[514] + Nr[311] + Nr[429] + Nr[267] + Nr[1059] + Nr[458] + Nr[547] + Nr[110] + Nr[514] + Nr[1060] + Nr[514] + Nr[1061] + Nr[1062] + Nr[230] + Nr[296] + Nr[1063] + Nr[423] + Nr[260] + Nr[428] + Nr[1064] + Nr[266] + Nr[1065] + Nr[255] + Nr[14] + Nr[506] + Nr[1066] + Nr[431] + Nr[311] + Nr[1067] + Nr[24] + Nr[1068] + Nr[1069] + Nr[295] + Nr[746] + Nr[1070] + Nr[267] + Nr[1071] + Nr[510] + Nr[371] + Nr[43] + Nr[1072] + Nr[268] + Nr[11] + Nr[458] + Nr[33] + Nr[1073] + Nr[1074] + Nr[458] + Nr[1075] + Nr[267] + Nr[514] + Nr[1076] + Nr[428] + Nr[1077] + Nr[95] + Nr[1078] + Nr[266] + Nr[508] + Nr[50] + Nr[755] + Nr[30] + Nr[1079] + Nr[1080] + Nr[430] + Nr[458] + Nr[1011] + Nr[1081] + Nr[1082] + Nr[428] + Nr[1083] + Nr[1084] + Nr[1085] + Nr[107] + Nr[423] + Nr[267] + Nr[1086] + Nr[371] + Nr[1087] + Nr[267] + Nr[1088] + Nr[1089] + Nr[161] + Nr[1090] + Nr[1091] + Nr[1092] + Nr[295] + Nr[260] + Nr[428] + Nr[371] + Nr[1093] + Nr[295] + Nr[11] + Nr[1094] + Nr[1049] + Nr[1095] + Nr[127] + Nr[430] + Nr[180] + Nr[181] + Nr[518] + Nr[161] + Nr[30] + Nr[431] + Nr[648] + Nr[746] + Nr[1011] + Nr[96] + Nr[429] + Nr[371] + Nr[514] + Nr[50] + Nr[12] + Nr[161] + Nr[30] + Nr[296] + Nr[1011] + Nr[1096] + Nr[836] + Nr[161] + Nr[43] + Nr[1097] + Nr[186] + Nr[1098] + Nr[267] + Nr[1099] + Nr[1100] + Nr[1025] + Nr[1069] + Nr[293] + Nr[432] + Nr[14] + Nr[526] + Nr[458] + Nr[1101] + Nr[516] + Nr[514] + Nr[36] + Nr[268] + Nr[1102] + Nr[267] + Nr[107] + Nr[1011] + Nr[24] + Nr[181] + Nr[266] + Nr[311] + Nr[1011] + Nr[1103] + Nr[1104] + Nr[371] + Nr[266] + Nr[50] + Nr[181] + Nr[74] + Nr[1104] + Nr[30] + Nr[295] + Nr[1105] + Nr[295] + Nr[1106] + Nr[1107] + Nr[1108] + Nr[162] + Nr[24] + Nr[506] + Nr[1055] + Nr[526] + Nr[294] + Nr[27] + Nr[1109] + Nr[371] + Nr[1110] + Nr[648] + Nr[268] + Nr[514] + Nr[1111] + Nr[371] + Nr[230] + Nr[432] + Nr[296] + Nr[1112] + Nr[110] + Nr[371] + Nr[161] + Nr[1113] + Nr[96] + Nr[533] + Nr[127] + Nr[458] + Nr[371] + Nr[268] + Nr[96] + Nr[516] + Nr[1114] + Nr[1110] + Nr[1115] + Nr[1116] + Nr[230] + Nr[514] + Nr[266] + Nr[230] + Nr[267] + Nr[1011] + Nr[1117] + Nr[295] + Nr[1011] + Nr[294] + Nr[1118] + Nr[1119] + Nr[1120] + Nr[230] + Nr[930] + Nr[1121] + Nr[431] + Nr[648] + Nr[1122] + Nr[186] + Nr[161] + Nr[346] + Nr[508] + Nr[267] + Nr[371] + Nr[514] + Nr[293] + Nr[371] + Nr[516] + Nr[1123] + Nr[1124] + Nr[27] + Nr[1125] + Nr[1106] + Nr[293] + Nr[1126] + Nr[429] + Nr[74] + Nr[506] + Nr[1127] + Nr[255] + Nr[294] + Nr[930] + Nr[83] + Nr[1128] + Nr[1011] + Nr[95] + Nr[1129] + Nr[296] + Nr[1130] + Nr[430] + Nr[1131] + Nr[542] + Nr[267] + Nr[851] + Nr[161] + Nr[371] + Nr[1132] + Nr[311] + Nr[430] + Nr[1011] + Nr[1133] + Nr[311] + Nr[1104] + Nr[30] + Nr[1134] + Nr[458] + Nr[1011] + Nr[1135] + Nr[30] + Nr[1136] + Nr[1137] + Nr[1138] + Nr[266] + Nr[1139] + Nr[1140] + Nr[30] + Nr[295] + Nr[508] + Nr[14] + Nr[1141] + Nr[296] + Nr[930] + Nr[1142] + Nr[267] + Nr[526] + Nr[107] + Nr[428] + Nr[1143] + Nr[430] + Nr[161] + Nr[1144] + Nr[1145] + Nr[1146] + Nr[161] + Nr[346] + Nr[431] + Nr[1147] + Nr[542] + Nr[1148] + Nr[428] + Nr[1011] + Nr[1149] + Nr[267] + Nr[1150] + Nr[255] + Nr[266] + Nr[1151] + Nr[565] + Nr[279] + Nr[346] + Nr[512] + Nr[107] + Nr[1025] + Nr[1152] + Nr[1153] + Nr[1154] + Nr[1025] + Nr[83] + Nr[1155] + Nr[296] + Nr[33] + Nr[930] + Nr[43] + Nr[293] + Nr[1156] + Nr[930] + Nr[230] + Nr[1157] + Nr[1158] + Nr[1159] + Nr[565] + Nr[1160] + Nr[1161] + Nr[255] + Nr[268] + Nr[107] + Nr[1162] + Nr[293] + Nr[186] + Nr[1104] + Nr[516] + Nr[11] + Nr[1104] + Nr[1163] + Nr[293] + Nr[1063] + Nr[295] + Nr[162] + Nr[268] + Nr[346] + Nr[95] + Nr[260] + Nr[506] + Nr[108] + Nr[431] + Nr[648] + Nr[268] + Nr[110] + Nr[1164] + Nr[127] + Nr[1104] + Nr[127] + Nr[1165] + Nr[518] + Nr[1166] + Nr[458] + Nr[1167] + Nr[1011] + Nr[27] + Nr[1168] + Nr[1169] + Nr[423] + Nr[458] + Nr[127] + Nr[1170] + Nr[127] + Nr[296] + Nr[107] + Nr[506] + Nr[1011] + Nr[565] + Nr[268] + Nr[181] + Nr[1171] + Nr[1172] + Nr[230] + Nr[266] + Nr[428] + Nr[230] + Nr[267] + Nr[430] + Nr[1] + Nr[526] + Nr[83] + Nr[95] + Nr[108] + Nr[746] + Nr[267] + Nr[428] + Nr[296] + Nr[1173] + Nr[107] + Nr[295] + Nr[1174] + Nr[293] + Nr[1] + Nr[508] + Nr[294] + Nr[110] + Nr[432] + Nr[565] + Nr[746] + Nr[296] + Nr[12] + Nr[27] + Nr[1175] + Nr[1176] + Nr[255] + Nr[108] + Nr[293] + Nr[539] + Nr[161] + Nr[230] + Nr[1177] + Nr[1178] + Nr[508] + Nr[43] + Nr[371] + Nr[95] + Nr[293] + Nr[836] + Nr[14] + Nr[1179] + Nr[186] + Nr[1180] + Nr[1181] + Nr[371] + Nr[423] + Nr[1182] + Nr[1011] + Nr[1183] + Nr[296] + Nr[230] + Nr[279] + Nr[74] + Nr[1104] + Nr[266] + Nr[896] + Nr[542] + Nr[1184] + Nr[1185] + Nr[551] + Nr[279] + Nr[294] + Nr[1186] + Nr[294] + Nr[162] + Nr[1187] + Nr[431] + Nr[33] + Nr[293] + Nr[36] + Nr[1188] + Nr[1189] + Nr[1011] + Nr[181] + Nr[267] + Nr[822] + Nr[1190] + Nr[1191] + Nr[268] + Nr[1192] + Nr[255] + Nr[96] + Nr[746] + Nr[1193] + Nr[458] + Nr[746] + Nr[50] + Nr[431] + Nr[11] + Nr[294] + Nr[11] + Nr[526] + Nr[1194] + Nr[539] + Nr[458] + Nr[162] + Nr[1195] + Nr[1196] + Nr[1197] + Nr[432] + Nr[186] + Nr[161] + Nr[1198] + Nr[268] + Nr[346] + Nr[533] + Nr[1199] + Nr[423] + Nr[1200] + Nr[836] + Nr[648] + Nr[533] + Nr[1201] + Nr[1202] + Nr[814] + Nr[1203] + Nr[1204] + Nr[1205] + Nr[1206] + Nr[110] + Nr[266] + Nr[518] + Nr[516] + Nr[1207] + Nr[295] + Nr[1208] + Nr[1209] + Nr[458] + Nr[508] + Nr[1210] + Nr[181] + Nr[110] + Nr[294] + Nr[1211] + Nr[311] + Nr[428] + Nr[295] + Nr[1212] + Nr[11] + Nr[1213] + Nr[1214] + Nr[1104] + Nr[33] + Nr[162] + Nr[1215] + Nr[429] + Nr[793] + Nr[24] + Nr[295] + Nr[836] + Nr[296] + Nr[423] + Nr[565] + Nr[430] + Nr[295] + Nr[230] + Nr[514] + Nr[27] + Nr[295] + Nr[526] + Nr[110] + Nr[1216] + Nr[458] + Nr[1217] + Nr[186] + Nr[423] + Nr[43] + Nr[266] + Nr[930] + Nr[83] + Nr[516] + Nr[1104] + Nr[1218] + Nr[1011] + Nr[429] + Nr[27] + Nr[516] + Nr[428] + Nr[295] + Nr[526] + Nr[1219] + Nr[533] + Nr[295] + Nr[1011] + Nr[110] + Nr[1220] + Nr[1221] + Nr[50] + Nr[526] + Nr[458] + Nr[430] + Nr[1222] + Nr[268] + Nr[1223] + Nr[1011] + Nr[1104] + Nr[268] + Nr[30] + Nr[1224] + Nr[295] + Nr[1225] + Nr[293] + Nr[36] + Nr[930] + Nr[11] + Nr[458] + Nr[1226] + Nr[565] + Nr[930] + Nr[1227] + Nr[539] + Nr[458] + Nr[255] + Nr[1228] + Nr[95] + Nr[161] + Nr[1229] + Nr[96] + Nr[508] + Nr[268] + Nr[1230] + Nr[542] + Nr[83] + Nr[930] + Nr[1231] + Nr[266] + Nr[1110] + Nr[1232] + Nr[1233] + Nr[161] + Nr[1234] + Nr[1011] + Nr[1235] + Nr[1236] + Nr[33] + Nr[294] + Nr[506] + Nr[296] + Nr[432] + Nr[107] + Nr[1237] + Nr[556] + Nr[294] + Nr[557] + Nr[139], nL = Nr[184] + Nr[471] + Nr[203] + Nr[371] + Nr[372] + Nr[503] + Nr[504] + Nr[505] + Nr[54] + Nr[506] + Nr[507] + Nr[508] + Nr[266] + Nr[509] + Nr[510] + Nr[511] + Nr[512] + Nr[513] + Nr[514] + Nr[1238] + Nr[514] + Nr[1239] + Nr[371] + Nr[74] + Nr[181] + Nr[1011] + Nr[295] + Nr[517] + Nr[432] + Nr[161] + Nr[518] + Nr[266] + Nr[162] + Nr[161] + Nr[43] + Nr[95] + Nr[519] + Nr[516] + Nr[506] + Nr[520] + Nr[432] + Nr[521] + Nr[181] + Nr[522] + Nr[428] + Nr[523] + Nr[294] + Nr[524] + Nr[1021] + Nr[1240] + Nr[1023] + Nr[526] + Nr[346] + Nr[430] + Nr[1241] + Nr[1110] + Nr[1011] + Nr[1242] + Nr[428] + Nr[1243] + Nr[1025] + Nr[296] + Nr[533] + Nr[1244] + Nr[514] + Nr[1245] + Nr[430] + Nr[1246] + Nr[512] + Nr[24] + Nr[506] + Nr[1247] + Nr[95] + Nr[266] + Nr[1248] + Nr[1237] + Nr[30] + Nr[1249] + Nr[311] + Nr[12] + Nr[266] + Nr[24] + Nr[1011] + Nr[1] + Nr[1250] + Nr[1251] + Nr[423] + Nr[43] + Nr[428] + Nr[346] + Nr[836] + Nr[293] + Nr[1252] + Nr[255] + Nr[311] + Nr[542] + Nr[230] + Nr[1253] + Nr[1254] + Nr[514] + Nr[1255] + Nr[1025] + Nr[513] + Nr[255] + Nr[230] + Nr[161] + Nr[180] + Nr[431] + Nr[1256] + Nr[533] + Nr[516] + Nr[181] + Nr[161] + Nr[33] + Nr[429] + Nr[266] + Nr[1257] + Nr[1258] + Nr[268] + Nr[107] + Nr[533] + Nr[296] + Nr[11] + Nr[12] + Nr[346] + Nr[1259] + Nr[1260] + Nr[371] + Nr[162] + Nr[1261] + Nr[1262] + Nr[565] + Nr[1263] + Nr[108] + Nr[430] + Nr[43] + Nr[1264] + Nr[1265] + Nr[512] + Nr[293] + Nr[12] + Nr[1011] + Nr[428] + Nr[260] + Nr[1266] + Nr[50] + Nr[1267] + Nr[296] + Nr[107] + Nr[181] + Nr[1011] + Nr[95] + Nr[1268] + Nr[293] + Nr[836] + Nr[1269] + Nr[533] + Nr[1270] + Nr[746] + Nr[295] + Nr[1271] + Nr[43] + Nr[279] + Nr[268] + Nr[1011] + Nr[1272] + Nr[1273] + Nr[371] + Nr[1274] + Nr[539] + Nr[1275] + Nr[1276] + Nr[371] + Nr[516] + Nr[1277] + Nr[1278] + Nr[371] + Nr[526] + Nr[24] + Nr[1279] + Nr[1248] + Nr[533] + Nr[1280] + Nr[430] + Nr[1281] + Nr[181] + Nr[230] + Nr[268] + Nr[432] + Nr[266] + Nr[1282] + Nr[266] + Nr[1283] + Nr[27] + Nr[295] + Nr[24] + Nr[1110] + Nr[371] + Nr[42] + Nr[565] + Nr[266] + Nr[1284] + Nr[1285] + Nr[1011] + Nr[1286] + Nr[429] + Nr[294] + Nr[1287] + Nr[1110] + Nr[180] + Nr[430] + Nr[1288] + Nr[181] + Nr[24] + Nr[266] + Nr[1289] + Nr[1104] + Nr[1290] + Nr[1291] + Nr[1292] + Nr[508] + Nr[1293] + Nr[230] + Nr[1294] + Nr[1295] + Nr[43] + Nr[1296] + Nr[230] + Nr[514] + Nr[1297] + Nr[930] + Nr[1298] + Nr[296] + Nr[531] + Nr[1025] + Nr[268] + Nr[371] + Nr[296] + Nr[346] + Nr[1299] + Nr[1256] + Nr[1011] + Nr[746] + Nr[50] + Nr[279] + Nr[267] + Nr[1300] + Nr[294] + Nr[1301] + Nr[1302] + Nr[43] + Nr[508] + Nr[458] + Nr[1303] + Nr[423] + Nr[518] + Nr[997] + Nr[268] + Nr[1011] + Nr[267] + Nr[127] + Nr[255] + Nr[30] + Nr[542] + Nr[107] + Nr[432] + Nr[295] + Nr[518] + Nr[1104] + Nr[268] + Nr[255] + Nr[266] + Nr[565] + Nr[95] + Nr[296] + Nr[518] + Nr[296] + Nr[1304] + Nr[24] + Nr[12] + Nr[186] + Nr[514] + Nr[1305] + Nr[1306] + Nr[1307] + Nr[1308] + Nr[1309] + Nr[161] + Nr[423] + Nr[311] + Nr[1310] + Nr[50] + Nr[267] + Nr[1311] + Nr[311] + Nr[762] + Nr[311] + Nr[1312] + Nr[1313] + Nr[74] + Nr[423] + Nr[1314] + Nr[1025] + Nr[161] + Nr[431] + Nr[1297] + Nr[12] + Nr[516] + Nr[1315] + Nr[1316] + Nr[1317] + Nr[83] + Nr[930] + Nr[24] + Nr[1318] + Nr[518] + Nr[506] + Nr[1319] + Nr[1320] + Nr[311] + Nr[1321] + Nr[311] + Nr[296] + Nr[431] + Nr[1322] + Nr[1323] + Nr[27] + Nr[1324] + Nr[24] + Nr[539] + Nr[1325] + Nr[506] + Nr[516] + Nr[107] + Nr[1110] + Nr[516] + Nr[74] + Nr[1025] + Nr[1294] + Nr[423] + Nr[11] + Nr[294] + Nr[36] + Nr[673] + Nr[1104] + Nr[107] + Nr[514] + Nr[11] + Nr[526] + Nr[1326] + Nr[429] + Nr[648] + Nr[294] + Nr[1327] + Nr[542] + Nr[518] + Nr[267] + Nr[74] + Nr[533] + Nr[458] + Nr[11] + Nr[506] + Nr[260] + Nr[279] + Nr[1328] + Nr[432] + Nr[267] + Nr[1329] + Nr[1330] + Nr[458] + Nr[1331] + Nr[1332] + Nr[1333] + Nr[1334] + Nr[267] + Nr[1335] + Nr[180] + Nr[930] + Nr[1336] + Nr[539] + Nr[793] + Nr[180] + Nr[1337] + Nr[267] + Nr[512] + Nr[1] + Nr[1338] + Nr[108] + Nr[268] + Nr[512] + Nr[268] + Nr[108] + Nr[161] + Nr[533] + Nr[50] + Nr[1339] + Nr[295] + Nr[533] + Nr[1340] + Nr[1104] + Nr[96] + Nr[1341] + Nr[260] + Nr[429] + Nr[1259] + Nr[1342] + Nr[230] + Nr[542] + Nr[1343] + Nr[1344] + Nr[33] + Nr[1345] + Nr[1011] + Nr[836] + Nr[186] + Nr[542] + Nr[265] + Nr[279] + Nr[648] + Nr[542] + Nr[230] + Nr[293] + Nr[230] + Nr[1346] + Nr[268] + Nr[107] + Nr[267] + Nr[83] + Nr[1347] + Nr[267] + Nr[95] + Nr[24] + Nr[458] + Nr[1348] + Nr[1101] + Nr[1349] + Nr[1350] + Nr[648] + Nr[12] + Nr[33] + Nr[293] + Nr[526] + Nr[96] + Nr[430] + Nr[1351] + Nr[295] + Nr[1] + Nr[293] + Nr[1] + Nr[267] + Nr[508] + Nr[96] + Nr[512] + Nr[1352] + Nr[539] + Nr[1353] + Nr[1354] + Nr[266] + Nr[508] + Nr[648] + Nr[255] + Nr[1355] + Nr[514] + Nr[1356] + Nr[508] + Nr[1357] + Nr[95] + Nr[1358] + Nr[533] + Nr[296] + Nr[1359] + Nr[667] + Nr[33] + Nr[95] + Nr[1052] + Nr[267] + Nr[110] + Nr[542] + Nr[260] + Nr[506] + Nr[516] + Nr[107] + Nr[1360] + Nr[1361] + Nr[162] + Nr[30] + Nr[1362] + Nr[1104] + Nr[266] + Nr[108] + Nr[267] + Nr[1363] + Nr[161] + Nr[1364] + Nr[293] + Nr[423] + Nr[30] + Nr[1365] + Nr[1366] + Nr[1177] + Nr[180] + Nr[268] + Nr[1367] + Nr[161] + Nr[1368] + Nr[295] + Nr[346] + Nr[430] + Nr[107] + Nr[181] + Nr[30] + Nr[458] + Nr[428] + Nr[1369] + Nr[161] + Nr[1370] + Nr[533] + Nr[294] + Nr[542] + Nr[346] + Nr[181] + Nr[296] + Nr[1025] + Nr[11] + Nr[1371] + Nr[1372] + Nr[1373] + Nr[14] + Nr[1374] + Nr[1375] + Nr[267] + Nr[24] + Nr[1376] + Nr[296] + Nr[1377] + Nr[1216] + Nr[458] + Nr[428] + Nr[43] + Nr[542] + Nr[346] + Nr[1378] + Nr[36] + Nr[371] + Nr[423] + Nr[33] + Nr[1379] + Nr[1380] + Nr[50] + Nr[12] + Nr[14] + Nr[1381] + Nr[161] + Nr[432] + Nr[1382] + Nr[1304] + Nr[371] + Nr[565] + Nr[1011] + Nr[24] + Nr[181] + Nr[294] + Nr[1383] + Nr[346] + Nr[930] + Nr[1384] + Nr[526] + Nr[127] + Nr[1025] + Nr[268] + Nr[1385] + Nr[516] + Nr[1386] + Nr[266] + Nr[1387] + Nr[371] + Nr[346] + Nr[542] + Nr[83] + Nr[1388] + Nr[371] + Nr[1389] + Nr[516] + Nr[431] + Nr[1390] + Nr[458] + Nr[423] + Nr[50] + Nr[533] + Nr[648] + Nr[423] + Nr[516] + Nr[1391] + Nr[260] + Nr[429] + Nr[266] + Nr[518] + Nr[528] + Nr[27] + Nr[512] + Nr[1011] + Nr[14] + Nr[162] + Nr[96] + Nr[268] + Nr[930] + Nr[161] + Nr[930] + Nr[516] + Nr[428] + Nr[1392] + Nr[428] + Nr[1393] + Nr[293] + Nr[346] + Nr[295] + Nr[43] + Nr[1394] + Nr[1395] + Nr[294] + Nr[50] + Nr[1396] + Nr[648] + Nr[1397] + Nr[1398], sL = Nr[1399] + Nr[151], rL = Nr[1400] + Nr[16] + Nr[266] + Nr[62] + Nr[161] + Nr[1110] + Nr[16] + Nr[1401] + Nr[77] + Nr[496], aL = Nr[1402], hL = Nr[745], oL = Nr[62] + Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[346] + Nr[348] + Nr[16] + Nr[351], _L = Nr[1400] + Nr[471] + Nr[267] + Nr[503] + Nr[229] + Nr[77] + Nr[654] + Nr[439] + Nr[52] + Nr[53] + Nr[266] + Nr[357] + Nr[266] + Nr[357] + Nr[266] + Nr[357] + Nr[266] + Nr[62] + Nr[294] + Nr[55], fL = Nr[62] + Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[346] + Nr[348], cL = Nr[1400] + Nr[471] + Nr[266] + Nr[503], uL = Nr[1403], dL = Nr[471] + Nr[1400] + Nr[16] + Nr[268] + Nr[1110] + Nr[16] + Nr[1404] + Nr[77] + Nr[610] + Nr[53] + Nr[266] + Nr[62] + Nr[296] + Nr[357] + Nr[266] + Nr[357] + Nr[266] + Nr[62] + Nr[296] + Nr[357] + Nr[267] + Nr[55], lL = Nr[62] + Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[346] + Nr[348] + Nr[471] + Nr[364], vL = Nr[1400] + Nr[471] + Nr[267] + Nr[503], bL = Nr[471] + Nr[1400] + Nr[16] + Nr[266] + Nr[62] + Nr[268] + Nr[1110] + Nr[16] + Nr[656], gL = Nr[1405] + Nr[36] + Nr[175], yL = Nr[62] + Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[110] + Nr[474] + Nr[36] + Nr[1350], EL = Nr[233] + Nr[439] + Nr[360] + Nr[503] + Nr[466] + Nr[77] + Nr[1406] + Nr[439] + Nr[226] + Nr[77] + Nr[466] + Nr[503] + Nr[466] + Nr[77] + Nr[574] + Nr[1407] + Nr[624] + Nr[16] + Nr[266] + Nr[151] + Nr[16] + Nr[266] + Nr[151] + Nr[16] + Nr[267] + Nr[151] + Nr[954] + Nr[229] + Nr[77] + Nr[654] + Nr[439] + Nr[52] + Nr[53] + Nr[1408] + Nr[54] + Nr[1408] + Nr[54] + Nr[1408] + Nr[54] + Nr[266] + Nr[62] + Nr[268] + Nr[958] + Nr[226] + Nr[77] + Nr[437] + Nr[439] + Nr[293] + Nr[151] + Nr[503] + Nr[1409] + Nr[439] + Nr[267] + Nr[151] + Nr[503], pL = Nr[1409] + Nr[77] + Nr[68] + Nr[439] + Nr[296] + Nr[151] + Nr[503], mL = Nr[1409] + Nr[77] + Nr[67] + Nr[439] + Nr[296] + Nr[151] + Nr[503], xL = Nr[62] + Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[110] + Nr[474] + Nr[33] + Nr[1410], TL = Nr[471] + Nr[1400] + Nr[16] + Nr[268] + Nr[1110] + Nr[16] + Nr[1404] + Nr[77] + Nr[610] + Nr[53] + Nr[266] + Nr[62] + Nr[296] + Nr[357] + Nr[266] + Nr[357] + Nr[266] + Nr[62] + Nr[296] + Nr[357] + Nr[267] + Nr[958], wL = Nr[311] + Nr[77] + Nr[230] + Nr[312] + Nr[77] + Nr[110] + Nr[474] + Nr[33] + Nr[1410], OL = Nr[23] + Nr[565], SL = Nr[32] + Nr[50] + Nr[51], kL = Nr[36] + Nr[1411], IL = Nr[1412], LL = Nr[1413], AL = Nr[1414] + Nr[61] + Nr[1415], CL = Nr[1416] + Nr[61] + Nr[306], RL = Nr[1401] + Nr[11] + Nr[370], PL = Nr[170] + Nr[83] + Nr[241], DL = Nr[1417] + Nr[83] + Nr[339], ML = Nr[1416] + Nr[61] + Nr[1418], NL = Nr[1419] + Nr[61] + Nr[1420] + Nr[61] + Nr[411] + Nr[61] + Nr[1421], jL = Nr[1419] + Nr[61] + Nr[901] + Nr[61] + Nr[1420] + Nr[61] + Nr[411] + Nr[61] + Nr[1421], BL = Nr[980], $L = Nr[17] + Nr[27] + Nr[1422], GL = Nr[1423], FL = Nr[194] + Nr[33] + Nr[149], zL = Nr[389] + Nr[27] + Nr[1424], YL = Nr[48] + Nr[27] + Nr[28] + Nr[27] + Nr[1424] + Nr[110] + Nr[865], HL = Nr[1007], UL = Nr[879] + Nr[27] + Nr[1424], qL = Nr[1425], WL = Nr[48] + Nr[27] + Nr[28] + Nr[110] + Nr[308], XL = Nr[639] + Nr[61] + Nr[1426] + Nr[61] + Nr[640], VL = Nr[350] + Nr[110] + Nr[330] + Nr[36] + Nr[95] + Nr[180] + Nr[1001], KL = Nr[1] + Nr[1427] + Nr[110] + Nr[330] + Nr[180] + Nr[1001], ZL = Nr[285] + Nr[61] + Nr[167] + Nr[61] + Nr[890] + Nr[61] + Nr[883], JL = Nr[50] + Nr[272] + Nr[333], QL = Nr[394] + Nr[33] + Nr[149], tA = Nr[947] + Nr[14] + Nr[1428] + Nr[43] + Nr[944], iA = Nr[947] + Nr[14] + Nr[1428] + Nr[83] + Nr[279], eA = Nr[1429], nA = Nr[1] + Nr[1427] + Nr[110] + Nr[1430] + Nr[50] + Nr[272] + Nr[180] + Nr[1001], sA = Nr[1431], rA = Nr[311] + Nr[77] + Nr[14] + Nr[935] + Nr[50] + Nr[1432], aA = Nr[1433] + Nr[1434] + Nr[1312] + Nr[50] + Nr[16] + Nr[267] + Nr[151], hA = Nr[294] + Nr[151], oA = Nr[466] + Nr[110] + Nr[646], _A = Nr[49] + Nr[30] + Nr[31] + Nr[1] + Nr[461], fA = Nr[1435], cA = Nr[221] + Nr[565] + Nr[962], uA = Nr[350] + Nr[837], dA = Nr[32] + Nr[50] + Nr[1008] + Nr[186] + Nr[1436] + Nr[1] + Nr[1437] + Nr[11] + Nr[181] + Nr[186] + Nr[840], lA = Nr[475], vA = Nr[163] + Nr[83] + Nr[135], bA = Nr[32] + Nr[50] + Nr[1008], gA = Nr[23] + Nr[50] + Nr[1438], yA = Nr[738] + Nr[50] + Nr[1432], EA = Nr[1439] + Nr[110] + Nr[851] + Nr[346] + Nr[852], pA = Nr[850] + Nr[27] + Nr[1440] + Nr[1] + Nr[1437] + Nr[83] + Nr[279] + Nr[11] + Nr[1441], mA = Nr[369] + Nr[83] + Nr[279] + Nr[11] + Nr[1441], xA = Nr[23] + Nr[50] + Nr[1442], TA = Nr[1443] + Nr[83] + Nr[1444], wA = Nr[19] + Nr[110] + Nr[567] + Nr[36] + Nr[95] + Nr[180] + Nr[1001], OA = Nr[1445] + Nr[16] + Nr[203] + Nr[204], SA = Nr[16] + Nr[746] + Nr[16], kA = Nr[1446] + Nr[50] + Nr[1005], IA = Nr[394] + Nr[27] + Nr[1447] + Nr[50] + Nr[94], LA = Nr[282] + Nr[50] + Nr[1005], AA = Nr[989] + Nr[61] + Nr[1426] + Nr[61] + Nr[1448], CA = Nr[850] + Nr[180] + Nr[1449], RA = Nr[704] + Nr[83] + Nr[279] + Nr[14] + Nr[1450], PA = Nr[184] + Nr[33] + Nr[302] + Nr[1] + Nr[461] + Nr[27] + Nr[462], DA = Nr[19] + Nr[27] + Nr[1422], MA = Nr[194] + Nr[14] + Nr[237], NA = Nr[58] + Nr[1451], jA = Nr[1452] + Nr[127] + Nr[128], BA = Nr[19] + Nr[33] + Nr[234] + Nr[110] + Nr[645] + Nr[36] + Nr[95] + Nr[180] + Nr[193], $A = Nr[23] + Nr[1] + Nr[1453] + Nr[33] + Nr[149], GA = Nr[1454] + Nr[61] + Nr[1426] + Nr[61] + Nr[1455], FA = Nr[915], zA = Nr[855], YA = Nr[419] + Nr[110] + Nr[645], HA = Nr[1454] + Nr[61] + Nr[1456], UA = Nr[603] + Nr[61] + Nr[1457] + Nr[61] + Nr[921] + Nr[61] + Nr[605], qA = Nr[1458] + Nr[61] + Nr[1448], WA = Nr[603] + Nr[61] + Nr[1457] + Nr[61] + Nr[889] + Nr[61] + Nr[605], XA = Nr[603] + Nr[61] + Nr[1457] + Nr[61] + Nr[889], VA = Nr[251] + Nr[50] + Nr[252] + Nr[30] + Nr[1016] + Nr[333], KA = Nr[1459] + Nr[77] + Nr[388], ZA = Nr[1460] + Nr[77] + Nr[388], JA = Nr[1461] + Nr[77] + Nr[388], QA = Nr[325] + Nr[61] + Nr[433], tC = Nr[325] + Nr[61] + Nr[324], iC = Nr[52] + Nr[53] + Nr[266] + Nr[357] + Nr[1462] + Nr[357] + Nr[266] + Nr[357] + Nr[267] + Nr[55], eC = Nr[58] + Nr[1463] + Nr[266], nC = Nr[23] + Nr[74] + Nr[1464], sC = Nr[639] + Nr[61] + Nr[1465], rC = Nr[900] + Nr[61] + Nr[411], aC = Nr[1466] + Nr[61] + Nr[1448], hC = Nr[23] + Nr[110] + Nr[1467], oC = Nr[250] + Nr[83] + Nr[279] + Nr[83] + Nr[923], _C = Nr[1458], fC = Nr[311] + Nr[77] + Nr[83] + Nr[1468], cC = Nr[469], uC = Nr[58] + Nr[1469], dC = Nr[267] + Nr[151] + Nr[16] + Nr[1433] + Nr[1434] + Nr[27] + Nr[516] + Nr[27] + Nr[516] + Nr[27] + Nr[516], lC = Nr[161] + Nr[151] + Nr[16] + Nr[293] + Nr[151], vC = Nr[1470] + Nr[83] + Nr[339], bC = Nr[1471], gC = Nr[1472] + Nr[1134] + Nr[1473], yC = Nr[382] + Nr[1] + Nr[1474], EC = Nr[1475] + Nr[837], pC = Nr[88] + Nr[107], mC = Nr[1476], xC = Nr[350] + Nr[43] + Nr[397], TC = Nr[1470] + Nr[27] + Nr[1477], wC = Nr[1478] + Nr[61] + Nr[1479], OC = Nr[850] + Nr[186] + Nr[1480] + Nr[518] + Nr[1481], SC = Nr[980] + Nr[62] + Nr[282] + Nr[62] + Nr[1007], kC = Nr[980] + Nr[62] + Nr[1482], IC = Nr[980] + Nr[62] + Nr[282] + Nr[62] + Nr[824], LC = Nr[980] + Nr[62] + Nr[1483], AC = Nr[989] + Nr[61] + Nr[1484], CC = Nr[980] + Nr[62] + Nr[1485], RC = Nr[915] + Nr[62] + Nr[282] + Nr[62] + Nr[1007], PC = Nr[915] + Nr[62] + Nr[1482], DC = Nr[1454] + Nr[61] + Nr[1426] + Nr[61] + Nr[1448], MC = Nr[915] + Nr[62] + Nr[282] + Nr[62] + Nr[824], NC = Nr[388] + Nr[62] + Nr[1007], jC = Nr[1486], BC = Nr[1487], $C = Nr[388] + Nr[62] + Nr[824], GC = Nr[315] + Nr[61] + Nr[908], FC = Nr[338] + Nr[62] + Nr[340], zC = Nr[385] + Nr[62] + Nr[1007], YC = Nr[385] + Nr[62] + Nr[1488], HC = Nr[385] + Nr[62] + Nr[824], UC = Nr[1489] + Nr[62] + Nr[476], qC = Nr[394] + Nr[180] + Nr[1001] + Nr[96] + Nr[258], WC = Nr[375] + Nr[1] + Nr[1490], XC = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[1491], VC = Nr[1492], KC = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[603], ZC = Nr[1493], JC = Nr[1494], QC = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[1495] + Nr[61] + Nr[1496] + Nr[61] + Nr[315], tR = Nr[350] + Nr[62] + Nr[1497] + Nr[62] + Nr[338], iR = Nr[350] + Nr[62] + Nr[338], eR = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[1495] + Nr[61] + Nr[285], nR = Nr[350] + Nr[62] + Nr[888], sR = Nr[350] + Nr[62] + Nr[185], rR = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[1495] + Nr[61] + Nr[315], aR = Nr[284] + Nr[180] + Nr[1498], hR = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[953], oR = Nr[1419] + Nr[61] + Nr[209] + Nr[61] + Nr[1499], _R = Nr[186] + Nr[1480] + Nr[518] + Nr[1481] + Nr[180] + Nr[1001], fR = Nr[27] + Nr[1440] + Nr[1] + Nr[1437] + Nr[180] + Nr[1001], cR = Nr[50] + Nr[1500] + Nr[180] + Nr[1001], uR = Nr[83] + Nr[1468] + Nr[180] + Nr[1001], dR = Nr[74] + Nr[1501] + Nr[110] + Nr[567] + Nr[180] + Nr[1001], lR = Nr[1502], vR = Nr[1503], bR = Nr[1504], gR = Nr[417], yR = Nr[981] + Nr[14] + Nr[1505], ER = Nr[1506] + Nr[61] + Nr[325], pR = Nr[1506] + Nr[61] + Nr[434], mR = Nr[1506] + Nr[61] + Nr[433], xR = Nr[1507], TR = Nr[1508] + Nr[62] + Nr[1509], wR = Nr[1507] + Nr[62] + Nr[512], OR = Nr[1507] + Nr[62] + Nr[930], SR = Nr[895] + Nr[61] + Nr[306] + Nr[61] + Nr[1510], kR = Nr[895] + Nr[61] + Nr[306] + Nr[61] + Nr[1511] + Nr[61] + Nr[1512], IR = Nr[23] + Nr[565] + Nr[1513] + Nr[27] + Nr[1514], LR = Nr[375] + Nr[110] + Nr[164], AR = Nr[48] + Nr[346] + Nr[258] + Nr[110] + Nr[164], CR = Nr[270] + Nr[1] + Nr[2] + Nr[27] + Nr[1514], RR = Nr[512] + Nr[230] + Nr[659], PR = Nr[930] + Nr[230] + Nr[659], DR = Nr[219] + Nr[83] + Nr[339], MR = Nr[1515], NR = Nr[879] + Nr[14] + Nr[298], jR = Nr[61] + Nr[1516], BR = Nr[61] + Nr[1517], $R = Nr[223] + Nr[1518], GR = Nr[223] + Nr[1063], FR = Nr[417] + Nr[108], zR = Nr[417] + Nr[107], YR = Nr[270] + Nr[36] + Nr[175], HR = Nr[219] + Nr[27] + Nr[331], UR = Nr[989] + Nr[61] + Nr[1426] + Nr[61] + Nr[1455], qR = Nr[1519], WR = Nr[1520] + Nr[14] + Nr[298] + Nr[27] + Nr[331], XR = Nr[48] + Nr[96] + Nr[1521] + Nr[180] + Nr[1522], VR = Nr[417] + Nr[1] + Nr[276], KR = Nr[1523], ZR = Nr[1524], JR = Nr[163] + Nr[14] + Nr[877], QR = Nr[23] + Nr[74] + Nr[1525], tP = Nr[1526], iP = Nr[911], eP = Nr[1007] + Nr[24] + Nr[1527], nP = Nr[36] + Nr[1528] + Nr[14] + Nr[1529], sP = Nr[1530], rP = Nr[1531], aP = Nr[200], hP = Nr[1532], oP = Nr[1533], _P = Nr[23] + Nr[14] + Nr[1534], fP = Nr[48] + Nr[230] + Nr[659], cP = Nr[1535], uP = Nr[336] + Nr[110] + Nr[1536], dP = Nr[437] + Nr[96] + Nr[258], lP = Nr[417] + Nr[161], vP = Nr[315] + Nr[61] + Nr[908] + Nr[61] + Nr[872], bP = Nr[1537], gP = Nr[494] + Nr[180] + Nr[1538], yP = Nr[1539] + Nr[107], EP = Nr[1539] + Nr[108], pP = Nr[1540], mP = Nr[23] + Nr[180] + Nr[1541], xP = Nr[1539], TP = Nr[1542] + Nr[61] + Nr[425], wP = Nr[1543], OP = Nr[219] + Nr[96] + Nr[1544], SP = Nr[219] + Nr[50] + Nr[1545], kP = Nr[1546], IP = Nr[1547], LP = Nr[981], AP = Nr[109] + Nr[110] + Nr[994], CP = Nr[110] + Nr[1548] + Nr[14] + Nr[1529], RP = Nr[441] + Nr[14] + Nr[1505], PP = Nr[251] + Nr[50] + Nr[252] + Nr[36] + Nr[95] + Nr[83] + Nr[1549] + Nr[27] + Nr[974] + Nr[43] + Nr[975] + Nr[110] + Nr[1550], DP = Nr[251] + Nr[50] + Nr[252] + Nr[36] + Nr[95] + Nr[83] + Nr[1549] + Nr[36] + Nr[1551] + Nr[43] + Nr[975] + Nr[110] + Nr[1550], MP = Nr[42] + Nr[1] + Nr[627], NP = Nr[1552], jP = Nr[23] + Nr[186] + Nr[1553], BP = Nr[23] + Nr[230] + Nr[1554], $P = Nr[23] + Nr[43] + Nr[1555], GP = Nr[23] + Nr[110] + Nr[1556], FP = Nr[230] + Nr[312], zP = Nr[50] + Nr[94] + Nr[333], YP = Nr[14] + Nr[935] + Nr[333], HP = Nr[180] + Nr[183] + Nr[333], UP = Nr[180] + Nr[1001] + Nr[50] + Nr[51], qP = Nr[230] + Nr[312] + Nr[96] + Nr[367], WP = Nr[311] + Nr[1557] + Nr[16] + Nr[251] + Nr[16] + Nr[837] + Nr[294], XP = Nr[161] + Nr[62] + Nr[266], VP = Nr[1558], KP = Nr[311] + Nr[1557] + Nr[204] + Nr[27] + Nr[1559] + Nr[16] + Nr[1] + Nr[1560] + Nr[16] + Nr[251] + Nr[16] + Nr[837] + Nr[294] + Nr[371] + Nr[1] + Nr[373], ZP = Nr[1561], JP = Nr[1562] + Nr[371] + Nr[294] + Nr[371] + Nr[1563], QP = 0;
    if (t.navigator) {
        var tD = navigator[eu], iD = /opera/i.test(tD), eD = !iD && /msie/i[uo](tD), nD = /rv:11.0/i.test(tD);
        if (nD && (eD = !0), /msie\s[6,7,8]/i.test(tD))throw new Error("your browser is not supported");
        var sD = /webkit|khtml/i.test(tD), rD = !sD && /gecko/i[uo](tD), aD = /firefox\//i.test(tD), hD = /Chrome\//i.test(tD), oD = !hD && /Safari\//i[uo](tD), _D = /Macintosh;/i[uo](tD), fD = /(iPad|iPhone|iPod)/g[uo](tD), cD = /Android/g[uo](tD), uD = /Windows Phone/g.test(tD), dD = (fD || cD || uD) && nu in t, lD = tD.match(/AppleWebKit\/([0-9\.]*)/);
        if (lD && lD.length > 1)var vD = parseFloat(lD[1]);
        if (cD && (parseFloat(tD[Xf](/Android\s([0-9\.]*)/)[1]), vD && 534.3 >= vD))var bD = !0
    }
    t.requestAnimationFrame || (t[su] = t.webkitRequestAnimationFrame || t[ru] || t.oRequestAnimationFrame || t[au] || function (i) {
            return t[hu](function () {
                i()
            }, 1e3 / 60)
        }), t.cancelAnimationFrame || (t.cancelAnimationFrame = t.webkitCancelAnimationFrame || t[ou] || t[_u] || t[fu] || function (i) {
            return t.clearTimeout(i)
        });
    var gD = {SELECTION_TOLERANCE: 2, DOUBLE_BUFFER: e, LABEL_COLOR: cu};
    Z(gD, {
        FONT_STYLE: {
            get: function () {
                return this._e3 || (this._e3 = uu)
            }, set: function (t) {
                this._e3 != t && (this._e3 = t, this._fontChanged = !0)
            }
        }, FONT_SIZE: {
            get: function () {
                return this._ha || (this._ha = 12)
            }, set: function (t) {
                this._ha != t && (this._ha = t, this._fontChanged = !0)
            }
        }, FONT_FAMILY: {
            get: function () {
                return this._nar || (this._nar = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this._nar != t && (this._nar = t, this._fontChanged = !0)
            }
        }, FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === e) && (this._fontChanged = !1, this._font = this[du] + Xr + this[lu] + vu + this.FONT_FAMILY), this._font
            }
        }
    });
    var yD = function () {
    };
    yD.prototype = {
        _n3: 0, _n2: 0, _kv: !0, _ku: 1, _fh: function (t, i, e) {
            var n = this._na8(i), s = this._ncs(e), r = t * n, a = t * s;
            return this._9z(t, i - r, e - a)
        }, _na8: function (t) {
            return (t - this._n3) / this._ku
        }, _ncs: function (t) {
            return (t - this._n2) / this._ku
        }, _ea: function (t, i) {
            return this._9z(this._ku, this._n3 + t, this._n2 + i)
        }, _9z: function (t, i, e) {
            return this._ku == t && this._n3 == i && this._n2 == e ? !1 : (this._kv && (1 != this.ratio || 2 != this.ratio ? (i = Math[Io](i * this[Rh]) / this[Rh], e = Math[Io](e * this[Rh]) / this.ratio) : (i = Math.round(i), e = Math.round(e))), this._n3 = i, this._n2 = e, this._ku = t, void(this._3d && this._3d()))
        }, _gx: function () {
            return {a: this._ku, b: 0, c: 0, d: this._ku, e: this._n3, f: this._n2}
        }, toString: function () {
            return bu + $(this._ku) + gu + $(this._ku) + ga + $(this._n3) + ga + $(this._n2) + ya
        }, _gz: function (t) {
            di(t, ec, this.toString())
        }
    };
    var ED = function (t) {
        this._ix = [], this._lz = {}, t && this.add(t)
    };
    ED.prototype = {
        _ix: null, _lz: null, get: function (t) {
            return this.getByIndex(t)
        }, getById: function (t) {
            return this._lz[t]
        }, getByIndex: function (t) {
            return this._ix[t]
        }, forEach: function (t, i, e) {
            return l(this._ix, t, i, e)
        }, forEachReverse: function (t, i, e) {
            return b(this._ix, t, i, e)
        }, size: function () {
            return this._ix[$r]
        }, contains: function (t) {
            return this[I_](t.id)
        }, containsById: function (t) {
            return this._lz.hasOwnProperty(t)
        }, setIndex: function (t, i) {
            var e = this._ix.indexOf(t);
            if (0 > e)throw new Error(gh + t.id + yu);
            return e == i ? !1 : (this._ix.splice(e, 1), this._ix[zr](i, 0, t), !0)
        }, setIndexAfter: function (t, i) {
            var e = this._ix[Ur](t);
            if (0 > e)throw new Error(gh + t.id + yu);
            return e == i ? i : e == i + 1 ? i + 1 : (e > i && (i += 1), this._ix.splice(e, 1), this._ix[zr](i, 0, t), i)
        }, setIndexBefore: function (t, i) {
            var e = this._ix[Ur](t);
            if (0 > e)throw new Error(gh + t.id + yu);
            return e == i ? i : e == i - 1 ? i - 1 : (i > e && (i -= 1), this._ix.splice(e, 1), this._ix.splice(i, 0, t), i)
        }, indexOf: function (t) {
            return this._ix.indexOf(t)
        }, getIndexById: function (t) {
            var i = this[Eu](t);
            return i ? this._ix.indexOf(i) : -1
        }, add: function (t, i) {
            return L(t) ? this._fe(t, i) : this._l6(t, i)
        }, addFirst: function (t) {
            return this[Vr](t, 0)
        }, _fe: function (t, i) {
            if (0 == t.length)return !1;
            var n = !1, s = i >= 0;
            t = t._ix || t;
            for (var r = 0, a = t.length; a > r; r++) {
                var h = t[r];
                null !== h && h !== e && this._l6(h, i, !0) && (n = !0, s && i++)
            }
            return n
        }, _l6: function (t, i) {
            var n = t.id;
            return n === e || this.containsById(n) ? !1 : (y(this._ix, t, i), this._lz[n] = t, t)
        }, remove: function (t) {
            return L(t) ? this._n9i(t) : t.id ? this._fd(t.id, t) : this.removeById(t)
        }, _n9i: function (t) {
            if (0 == t[$r])return !1;
            var i = !1;
            t = t._ix || t;
            for (var n = 0, s = t[$r]; s > n; n++) {
                var r = t[n];
                if (null !== r && r !== e) {
                    r.id === e && (r = this._lz[r]);
                    var a = r.id;
                    this._fd(a, r, !0) && (i = !0)
                }
            }
            return i
        }, _fd: function (t, i) {
            return t !== e && this.containsById(t) ? ((null === i || i === e) && (i = this[Eu](t)), delete this._lz[t], E(this._ix, i), !0) : !1
        }, removeById: function (t) {
            var i = this._lz[t];
            return i ? this._fd(t, i) : !1
        }, set: function (t) {
            if (!t || 0 == t)return void this[eh]();
            if (this[Ko]() || !L(t))return this.clear(), this[Vr](t);
            var i = [], e = {}, n = 0;
            if (l(t, function (t) {
                    this._lz[t.id] ? (e[t.id] = t, n++) : i[Qh](t)
                }, this), n != this.length) {
                var s = [];
                this.forEach(function (t) {
                    e[t.id] || s[Qh](t)
                }, this), s.length && this._n9i(s)
            }
            return i[$r] && this._fe(i), !0
        }, clear: function () {
            return this.isEmpty() ? !1 : (this._ix[$r] = 0, this._lz = {}, !0)
        }, toDatas: function () {
            return this._ix[Fr](0)
        }, isEmpty: function () {
            return 0 == this._ix[$r]
        }, valueOf: function () {
            return this._ix[$r]
        }, clone: function (t) {
            var i = new ED;
            return i[Vr](t ? g(this._ix) : this[Mf]()), i
        }
    }, Z(ED.prototype, {
        datas: {
            get: function () {
                return this._ix
            }
        }, random: {
            get: function () {
                return this._ix && this._ix[$r] ? this._ix[P(this._ix[$r])] : null
            }
        }, length: {
            get: function () {
                return this._ix ? this._ix[$r] : 0
            }
        }
    });
    var pD = (2 * Math.PI, .5 * Math.PI), mD = function (t, i) {
        i = i[pu]();
        for (var e = eD ? t.firstChild : t[mu]; e && (1 != e[xu] || e[Tu] && e[Tu].toUpperCase() != i);)e = eD ? e.nextSibling : e[wu];
        return e && 1 == e[xu] && e[Tu] && e.tagName.toUpperCase() == i ? e : null
    }, xD = function (t, i, e) {
        t instanceof xD && (i = t.y, t = t.x, e = t.rotate), this[Uo](t, i, e)
    }, TD = function (t, i, e, n) {
        var s = t - e, r = i - n;
        return Math.sqrt(s * s + r * r)
    };
    xD.prototype = {
        x: 0, y: 0, rotate: e, set: function (t, i, e) {
            this.x = t || 0, this.y = i || 0, this[ho] = e || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return TD(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return Ou + this.x + Su + this.y + ya
        }, clone: function () {
            return new xD(this.x, this.y)
        }
    }, Object[ku](xD[_a], Iu, {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    });
    var wD = function (t, i, n, s) {
        t !== e && this._mt(t, i, n, s)
    };
    wD.prototype = {
        _n7: null,
        _n6: null,
        _n5: null,
        _n4: null,
        _n9: null,
        _nc: null,
        _na: 1,
        _mt: function (t, i, e, n) {
            this._n7 = t, this._n6 = i, this._n5 = e, this._n4 = n, t == e ? (this._n9 = -1, this._na = 0, this._nc = t) : (this._n9 = (i - n) / (t - e), this._nc = i - this._n9 * t, this._na = 1), this._la = Math[Wh](this._n4 - this._n6, this._n5 - this._n7), this._naos = Math[Lh](this._la), this._sin = Math[La](this._la)
        },
        _ncv: function (t) {
            return 0 == this._na ? Number.NaN : this._n9 * t + this._nc
        },
        _ncq: function (t) {
            return 0 == this._n9 ? Number[Lu] : (t - this._nc) / this._n9
        },
        _$l: function (t) {
            var i, e, n, s, r, a = t[0], h = t[2], o = t[4], _ = t[1], f = t[3], c = t[5], u = this._n9, d = this._nc, l = this._na;
            if (0 == l ? (n = Math[Vh]((-u * u * a - u * d) * o + u * u * h * h + 2 * u * d * h - u * d * a), s = -u * h + u * a, r = u * o - 2 * u * h + u * a) : (n = Math.sqrt((-_ + u * a + d) * c + f * f + (-2 * u * h - 2 * d) * f + (u * o + d) * _ + (-u * u * a - u * d) * o + u * u * h * h + 2 * u * d * h - u * d * a), s = -f + _ + u * h - u * a, r = c - 2 * f + _ - u * o + 2 * u * h - u * a), 0 != r) {
                i = (n + s) / r, e = (-n + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Yi(i, t)), e >= 0 && 1 >= e && (b = Yi(e, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        },
        _3p: function (t, i, e) {
            if (this._n9 == t._n9 || 0 == this._na && 0 == t._na)return null;
            var n, s;
            if (n = 0 == this._na ? this._nc : 0 == t._na ? t._nc : (t._nc - this._nc) / (this._n9 - t._n9), s = 0 == this._n9 ? this._nc : 0 == t._n9 ? t._nc : this._na ? this._n9 * n + this._nc : t._n9 * n + t._nc, !i)return {
                x: n,
                y: s
            };
            var r, a, h;
            if (e)r = -i / 2, a = -r; else {
                r = -TD(this._n7, this._n6, n, s), a = TD(this._n5, this._n4, n, s);
                var o = -r + a;
                if (o > i) {
                    var _ = i / o;
                    r *= _, a *= _
                } else h = (i - o) / 2
            }
            var f = this._7o(n, s, r), c = this._7o(n, s, a);
            return h && (f._rest = h, c._rest = h), [f, c]
        },
        _7o: function (t, i, e) {
            return 0 == this._na ? {x: t, y: i + e} : {x: t + e * this._naos, y: i + e * this._sin}
        }
    };
    var OD = function (t, i) {
        this[Ah] = t, this[Dh] = i
    };
    OD[_a] = {
        width: 0, height: 0, isEmpty: function () {
            return this[Ah] <= 0 || this.height <= 0
        }, clone: function () {
            return new OD(this.width, this.height)
        }, toString: function () {
            return Au + this[Ah] + Su + this.height + ya
        }
    };
    var SD = function (t, i, n, s) {
        n === e && (n = -1), s === e && (s = -1), this.x = t || 0, this.y = i || 0, this.width = n, this.height = s
    };
    SD.prototype = {
        x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this[Ah] = t.width || 0, this[Dh] = t[Dh] || 0
        }, set: function (t, i, e, n) {
            this.x = t || 0, this.y = i || 0, this[Ah] = e || 0, this.height = n || 0
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, contains: function (t, i) {
            return t instanceof SD ? hi(this.x, this.y, this.width, this[Dh], t.x, t.y, t[Ah], t[Dh]) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        }, intersectsPoint: function (t, i, e) {
            return this.width <= 0 && this.height <= 0 ? !1 : e ? this.intersectsRect(t - e, i - e, 2 * e, 2 * e) : t >= this.x && t <= this.x + this[Ah] && i >= this.y && i <= this.y + this[Dh]
        }, intersectsRect: function (t, i, e, n) {
            return ri(this.x, this.y, this[Ah], this.height, t, i, e, n)
        }, intersects: function (t, i) {
            return t instanceof SD ? this[Cu](t.x, t.y, t.width, t[Dh]) : this.intersectsPoint(t, i)
        }, intersection: function (t, i, e, n) {
            var s = this.x, r = this.y, a = s;
            a += this[Ah];
            var h = r;
            h += this.height;
            var o = t;
            o += e;
            var _ = i;
            return _ += n, t > s && (s = t), i > r && (r = i), a > o && (a = o), h > _ && (h = _), a -= s, h -= r, 0 > a || 0 > h ? null : new SD(s, r, a, h)
        }, addPoint: function (t) {
            this.add(t.x, t.y)
        }, add: function (t, i) {
            if (t instanceof SD)return this[Ru](t.x, t.y, t[Ah], t[Dh]);
            if (t instanceof xD && (i = t.y, t = t.x), this[Ah] < 0 || this[Dh] < 0)return this.x = t, this.y = i, void(this[Ah] = this.height = 0);
            var e = this.x, n = this.y, s = this[Ah], r = this[Dh];
            s += e, r += n, e > t && (e = t), n > i && (n = i), t > s && (s = t), i > r && (r = i), s -= e, r -= n, s > Number[Pu] && (s = Number.MAX_VALUE), r > Number[Pu] && (r = Number.MAX_VALUE), this[Uo](e, n, s, r)
        }, addRect: function (t, i, e, n) {
            var s = this.width, r = this.height;
            (0 > s || 0 > r) && this[Uo](t, i, e, n);
            var a = e, h = n;
            if (!(0 > a || 0 > h)) {
                var o = this.x, _ = this.y;
                s += o, r += _;
                var f = t, c = i;
                a += f, h += c, o > f && (o = f), _ > c && (_ = c), a > s && (s = a), h > r && (r = h), s -= o, r -= _, s > Number.MAX_VALUE && (s = Number[Pu]), r > Number[Pu] && (r = Number[Pu]), this.set(o, _, s, r)
            }
        }, grow: function (t, i, e, n) {
            return S(t) ? 1 == arguments.length ? n = i = e = t || 0 : 2 == arguments.length ? (e = t || 0, n = i || 0) : (t = t || 0, i = i || 0, e = e || 0, n = n || 0) : (i = t[Ha] || 0, e = t.bottom || 0, n = t.right || 0, t = t[Ua] || 0), this.x -= i, this.y -= t, this[Ah] += i + n, this.height += t + e, this
        }, isEmpty: function () {
            return this.width <= 0 && this.height <= 0
        }, toString: function () {
            return this.x + Du + this.y + Du + this[Ah] + Du + this.height
        }, union: function (t) {
            var i = this.width, e = this[Dh];
            if (0 > i || 0 > e)return new SD(t.x, t.y, t.width, t.height);
            var n = t[Ah], s = t[Dh];
            if (0 > n || 0 > s)return new SD(this.x, this.y, this.width, this[Dh]);
            var r = this.x, a = this.y;
            i += r, e += a;
            var h = t.x, o = t.y;
            return n += h, s += o, r > h && (r = h), a > o && (a = o), n > i && (i = n), s > e && (e = s), i -= r, e -= a, i > Number.MAX_VALUE && (i = Number.MAX_VALUE), e > Number[Pu] && (e = Number.MAX_VALUE), new SD(r, a, i, e)
        }, clear: function () {
            this.set(0, 0, -1, -1)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this.width == t[Ah] && this.height == t.height
        }, clone: function (t, i) {
            return new SD(this.x + (t || 0), this.y + (i || 0), this[Ah], this.height)
        }, getIntersectionPoint: function (t, i, e, n) {
            return si(this, t, i, e, n)
        }
    }, N(SD, OD), Z(SD[_a], {
        bottom: {
            get: function () {
                return this.y + this[Dh]
            }
        }, right: {
            get: function () {
                return this.x + this.width
            }
        }, cx: {
            get: function () {
                return this.x + this.width / 2
            }
        }, cy: {
            get: function () {
                return this.y + this.height / 2
            }
        }, center: {
            get: function () {
                return new xD(this.cx, this.cy)
            }
        }
    });
    var kD = function (t, i, e, n) {
        1 == arguments[$r] ? i = e = n = t : 2 == arguments[$r] && (e = t, n = i), this.set(t, i, e, n)
    };
    kD[_a] = {
        top: 0, bottom: 0, left: 0, right: 0, set: function (t, i, e, n) {
            this[Ua] = t || 0, this.left = i || 0, this.bottom = e || 0, this.right = n || 0
        }, clone: function () {
            return new kD(this[Ua], this.left, this[Ca], this[Aa])
        }, equals: function (t) {
            return t && this[Ua] == t[Ua] && this.bottom == t[Ca] && this.left == t[Ha] && this[Aa] == t.right
        }
    };
    var ID = function (t, i) {
        this[Ra] = t, this.verticalPosition = i
    };
    ID.prototype = {
        verticalPosition: !1, horizontalPosition: !1, toString: function () {
            return (this.horizontalPosition || "") + (this[Pa] || "")
        }
    }, K(ID[_a], Mu, {
        get: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    });
    var LD = Nu, AD = ju, CD = Bu, RD = T_, PD = $u, DD = Gu;
    ID[Fu] = new ID(LD, RD), ID[zu] = new ID(LD, PD), ID[Yu] = new ID(LD, DD), ID.CENTER_TOP = new ID(AD, RD), ID[Hu] = new ID(AD, PD), ID.CENTER_BOTTOM = new ID(AD, DD), ID[Uu] = new ID(CD, RD), ID.RIGHT_MIDDLE = new ID(CD, PD), ID.RIGHT_BOTTOM = new ID(CD, DD);
    var MD = [ID[Fu], ID.LEFT_MIDDLE, ID[Yu], ID[qu], ID[Hu], ID.CENTER_BOTTOM, ID.RIGHT_TOP, ID.RIGHT_MIDDLE, ID.RIGHT_BOTTOM];
    K(ID, Wu, {
        get: function () {
            return MD[P(MD[$r])]
        }
    });
    var ND = function (t, i, e, n, s) {
        this.set(t, i, e, n), this.radius = s
    };
    ND[_a] = {
        radius: 0, classify: function (t, i, e, n) {
            return i > t ? 0 : i + n > t ? 1 : e - n > t ? 2 : e > t ? 3 : 4
        }, intersectsRect: function (t, i, e, n) {
            if (B(this, ND, Cu, arguments) === !1)return !1;
            var s = this.x, r = this.y, a = s + this[Ah], h = r + this.height, o = 2 * radius, _ = 2 * radius, f = Math[oo](this.width, Math[qh](o)) / 2, c = Math.min(this[Dh], Math[qh](_)) / 2, u = this.classify(t, s, a, f), d = this[Xu](t + e, s, a, f), l = this[Xu](i, r, h, c), v = this[Xu](i + n, r, h, c);
            return 2 == u || 2 == d || 2 == l || 2 == v ? !0 : 2 > u && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + e - (s + f) : t -= a - f, i = 1 == v ? i = i + n - (r + c) : i -= h - c, t /= f, i /= c, 1 >= t * t + i * i)
        }, intersectsPoint: function (t, i) {
            if (B(this, ND, to, arguments) === !1)return !1;
            var e = this.x, n = this.y, s = e + this.width, r = n + this.height;
            if (e > t || n > i || t >= s || i >= r)return !1;
            var a = 2 * radius, h = 2 * radius, o = Math.min(this.width, Math.abs(a)) / 2, _ = Math.min(this.height, Math.abs(h)) / 2;
            return t >= (e += o) && t < (e = s - o) ? !0 : i >= (n += _) && i < (n = r - _) ? !0 : (t = (t - e) / o, i = (i - n) / _, 1 >= t * t + i * i)
        }, clone: function () {
            return new ND(this.x, this.y, this[Ah], this[Dh], this[Vu])
        }
    }, N(ND, SD);
    var jD = function (t, i, e, n) {
        this[Ku] = t, this.type = i, this.kind = e, this.value = n
    };
    jD[_a] = {
        source: null, type: null, kind: null, value: null, toString: function () {
            return Zu + this.source + Ju + this[ao] + Qu + this.kind
        }
    };
    var BD = function (t, i, e, n, s) {
        this[Ku] = t, this.kind = i, this[td] = n, this[Ic] = e, this.propertyType = s
    };
    BD.prototype = {
        type: id, propertyType: null, toString: function () {
            return Zu + this.source + Ju + this[ao] + ed + this.kind + nd + this[td] + sd + this[Ic]
        }
    }, N(BD, jD), K(BD.prototype, rd, {
        get: function () {
            return this[ad]
        }, set: function (t) {
            this[ad] = t
        }
    });
    var $D = function (t, i, e) {
        this[Ku] = t, this.oldValue = t[L_], this.value = i, this[hd] = e, this[td] && (this[od] = this[td][_d](t))
    };
    $D[_a] = {kind: L_}, N($D, BD);
    var GD = function (t, i) {
        this.source = t, this[Ic] = i
    };
    GD.prototype[ad] = fd, N(GD, BD);
    var FD = function (t, i) {
        this[Ku] = t, this.value = i
    };
    FD[_a][ad] = cd, N(FD, BD);
    var zD = function (t, i, e, n) {
        this[Ku] = i, this.oldValue = e, this[Ic] = n, this[L_] = t, this[ud] = i, this.oldIndex = e, this.newIndex = n
    };
    zD[_a].kind = dd, N(zD, BD);
    var YD = function () {
    };
    YD[_a] = {
        listener: null, beforeEvent: function (t) {
            return null != this.listener && this[ld].beforeEvent ? this[ld].beforeEvent(t) : !0
        }, onEvent: function (t) {
            null != this.listener && this[ld][va] && this.listener[va](t)
        }
    };
    var HD = function () {
        j(this, HD, arguments), this.events = {}, this[vd] = []
    }, UD = function (t, i) {
        this.listener = t, this.scope = i, t instanceof Function ? this.onEvent = t : (this[va] = t.onEvent, this.beforeEvent = t[bd]), this[gd] = function (t) {
            return t && this[ld] == t[ld] && this.scope == t.scope
        }
    };
    UD[_a] = {
        equals: function (t) {
            return t && this.listener == t.listener && this[ca] == t.scope
        }, destroy: function () {
            delete this[ca], delete this.listener
        }
    }, HD[_a] = {
        listeners: null, _n9q: function () {
            return this.listeners && this[vd][$r] > 0
        }, _75: function (t, i) {
            return t instanceof HD ? t : new UD(t, i)
        }, _n91: function (t, i) {
            if (t instanceof HD)return this[vd].indexOf(t);
            for (var e = this.listeners, n = 0, s = e[$r]; s > n; n++) {
                var r = e[n];
                if (r[ld] == t && r[ca] == i)return n
            }
            return -1
        }, contains: function (t, i) {
            return this._n91(t, i) >= 0
        }, addListener: function (t, i) {
            return this.contains(t, i) ? !1 : void this.listeners[Qh](this._75(t, i))
        }, removeListener: function (t, i, e) {
            var n = this._n91(t, i);
            if (n >= 0) {
                var s = this.listeners[zr](n, 1)[0];
                e || G(s)
            }
        }, on: function (t, i) {
            this.addListener(t, i)
        }, un: function (t, i, e) {
            this[yd](t, i, e)
        }, onEvent: function (t) {
            return this.listeners ? void l(this.listeners, function (i) {
                i[va] && (i.scope ? i.onEvent[Br](i[ca], t) : i.onEvent(t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this.listeners ? l(this.listeners, function (i) {
                return i.beforeEvent ? i[ca] ? i[bd][Br](i[ca], t) : i[bd](t) : !0
            }, this) : !0
        }, _e5: function (t) {
            return this.beforeEvent(t) === !1 ? !1 : (this[va](t), !0)
        }, clear: function () {
            this[vd] = []
        }, destroy: function () {
            this.clear()
        }
    }, N(HD, YD);
    var qD = {
        onEvent: function () {
        }, beforeEvent: function () {
        }
    }, WD = function (t, i, e, n, s) {
        this.source = t, this[ao] = Ed, this[ad] = i, this.data = e, this[pd] = n, this[od] = s
    };
    WD[_a] = {
        index: -1, oldIndex: -1, toString: function () {
            return Zu + this.source + Ju + this.type + Qu + this.kind + md + this[no] + xd + this.index + Td + this[od]
        }
    }, N(WD, jD), WD.KIND_ADD = Vr, WD[wd] = Zr, WD[Od] = eh, WD.KIND_INDEX_CHANGE = Sd;
    var XD = function () {
        this.id = ++QP, this._na7 = {}
    };
    XD.prototype = {
        _na7: null, id: null, get: function (t) {
            return this._na7[t]
        }, set: function (t, i) {
            var e = this[la](t);
            if (e === i)return !1;
            var n = new BD(this, t, i, e);
            return n.propertyType = xM.PROPERTY_TYPE_CLIENT, this._n97(t, i, n, this._na7)
        }, _n97: function (t, i, n, s) {
            return this[bd](n) === !1 ? !1 : (s || (s = this._na7), i === e ? delete s[t] : s[t] = i, this.onEvent(n), !0)
        }, remove: function (t) {
            this[Uo](t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _dx: function (t, i) {
            if (i === e && (i = -1), this == t || t == this._ja)return !1;
            if (t && this == t._ja && !t._dx(null))return !1;
            var n = new $D(this, t, i);
            if (!this[bd](n))return !1;
            var s, r, a = this._ja;
            return t && (s = new GD(t, this), !t.beforeEvent(s)) ? !1 : null == a || (r = new FD(a, this), a[bd](r)) ? (this._ja = t, null != t && _i(t, this, i), null != a && fi(a, this), this[va](n), null != t && t.onEvent(s), null != a && a[va](r), this[kd](a, t), !0) : !1
        }, addChild: function (t, i) {
            var e = t._dx(this, i);
            return e && this.onChildAdd(t, i), e
        }, onChildAdd: function () {
        }, removeChild: function (t) {
            if (!this._fs || !this._fs.contains(t))return !1;
            var i = t._dx(null);
            return this.onChildRemove(t), i
        }, onChildRemove: function () {
        }, toChildren: function () {
            return this._fs ? this._fs[Mf]() : null
        }, clearChildren: function () {
            if (this._fs && this._fs[$r]) {
                var t = this[Id]();
                l(t, function (t) {
                    t._dx(null)
                }, this), this.onChildrenClear(t)
            }
        }, forEachChild: function (t, i) {
            return this[jr]() ? this._fs[l_](t, i) : !1
        }, onChildrenClear: function () {
        }, getChildIndex: function (t) {
            return this._fs && this._fs[$r] ? this._fs[Ur](t) : -1
        }, setChildIndex: function (t, i) {
            if (!this._fs || !this._fs.length)return !1;
            var e = this._fs.indexOf(t);
            if (0 > e || e == i)return !1;
            var n = new zD(this, t, e, i);
            return this.beforeEvent(n) === !1 ? !1 : (this._fs.remove(t) && this._fs.add(t, i), this.onEvent(n), !0)
        }, hasChildren: function () {
            return this._fs && this._fs[$r] > 0
        }, getChildAt: function (t) {
            return null == this._fs ? null : this._fs._ix[t]
        }, isDescendantOf: function (t) {
            if (!t[jr]())return !1;
            for (var i = this.parent; null != i;) {
                if (t == i)return !0;
                i = i.parent
            }
            return !1
        }, onParentChanged: function () {
        }, firePropertyChangeEvent: function (t, i, e, n) {
            this.onEvent(new BD(this, t, i, e, n))
        }
    }, N(XD, YD), Z(XD[_a], {
        childrenCount: {
            get: function () {
                return this._fs ? this._fs[$r] : 0
            }
        }, children: {
            get: function () {
                return this._fs || (this._fs = new ED), this._fs
            }
        }, parent: {
            get: function () {
                return this._ja
            }, set: function (t) {
                this._dx(t, -1)
            }
        }, properties: {
            get: function () {
                return this._na7
            }, set: function (t) {
                this._na7 != t && (this._na7 = t)
            }
        }
    });
    var VD = function () {
        this._ix = [], this._lz = {}, this._20 = new HD
    };
    VD.prototype = {
        beforeEvent: function (t) {
            return null != this._20 && this._20.beforeEvent ? this._20.beforeEvent(t) : !0
        }, onEvent: function (t) {
            return this._20 instanceof Function ? void this._20(t) : void(null != this._20 && this._20.onEvent && this._20[va](t))
        }, _20: null, setIndex: function (t, i) {
            if (!this[Hf](t))throw new Error(gh + t.getId() + yu);
            var e = this[Ur](t);
            if (e == i)return !1;
            var n = new WD(this, WD[Ld], t, i, e);
            return this[bd](n) === !1 ? !1 : (this._ix.remove(t) >= 0 && this._ix.add(i, t), this[va](n), !0)
        }, _fe: function (t, i) {
            if (0 == t.length)return !1;
            var n = !1, s = i >= 0, r = new WD(this, WD.KIND_ADD, t, i);
            if (this[bd](r) === !1)return !1;
            var a = [];
            t = t._ix || t;
            for (var h = 0, o = t.length; o > h; h++) {
                var _ = t[h];
                null !== _ && _ !== e && this._l6(_, i, !0) && (a.push(_), n = !0, s && i++)
            }
            return r.data = a, this[va](r), n
        }, _l6: function (t, i, e) {
            if (this.accept(t) === !1)return !1;
            if (e)return B(this, VD, Ad, arguments);
            var n = new WD(this, WD.KIND_ADD, t, i);
            return this.beforeEvent(n) === !1 ? !1 : B(this, VD, Ad, arguments) ? (this._kw(t, n), t) : !1
        }, _kw: function (t, i) {
            this[va](i)
        }, _n9i: function (t) {
            if (0 == t.length)return !1;
            var i = new WD(this, WD.KIND_REMOVE, t);
            if (this.beforeEvent(i) === !1)return !1;
            var n = [], s = !1;
            t = t._ix || t;
            for (var r = 0, a = t.length; a > r; r++) {
                var h = t[r];
                if (null !== h && h !== e) {
                    var o = h.id || h;
                    h.id === e && (h = null), this._fd(o, h, !0) && (n.push(h), s = !0)
                }
            }
            return i.data = n, this.onEvent(i), s
        }, _fd: function (t, i, e) {
            if (e)return B(this, VD, Cd, arguments);
            var n = new WD(this, WD[wd], i);
            return this.beforeEvent(n) === !1 ? !1 : B(this, VD, Cd, arguments) ? (this[va](n), !0) : !1
        }, clear: function () {
            if (this[Ko]())return !1;
            var t = new WD(this, WD[Od], this.toDatas());
            return this[bd](t) === !1 ? !1 : B(this, VD, eh) ? (this[va](t), !0) : !1
        }, accept: function (t) {
            return this[Rd] && this[Rd](t) === !1 ? !1 : !0
        }
    }, N(VD, ED), K(VD[_a], Pd, {
        get: function () {
            return this._20
        }
    });
    var KD = function () {
        j(this, KD, arguments), this.selectionChangeDispatcher = new HD, this._selectionModel = new ZD(this), this._selectionModel._20 = this.selectionChangeDispatcher, this[Dd] = new HD, this[Dd][qc]({
            beforeEvent: this[Md],
            onEvent: this[Nd]
        }, this), this.parentChangeDispatcher = new HD, this.childIndexChangeDispatcher = new HD, this[jd] = new ED;
        var t = this;
        this[jd].setIndex = function (i, e) {
            if (!t[jd].contains(i))throw new Error(gh + i.id + yu);
            var n = t[jd]._ix[Ur](i);
            if (n == e)return !1;
            t.$roots._ix.splice(n, 1), t.$roots._ix[zr](e, 0, i), t._najIndexFlag = !0;
            var s = new zD(t, i, n, e);
            return t._2x(s), !0
        }
    };
    KD[_a] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _kw: function (t, i) {
            t[ld] = this.dataChangeDispatcher, t.parent || this[jd].add(t), this.onEvent(i)
        },
        _fd: function (t, i) {
            if (B(this, KD, Cd, arguments)) {
                if (i instanceof _j)i[Bd](); else if (i instanceof fj) {
                    var e = i[$d]();
                    this.remove(e)
                }
                var n = i[L_];
                return null == n ? this.$roots[Zr](i) : (n[Gd](i), n.__6f = !0), i[jr]() && this[Zr](i.toChildren()), i.listener = null, !0
            }
            return !1
        },
        _5t: function (t) {
            var i = t[Ku];
            this[Hf](i) && (null == i.parent ? this.$roots[Vr](i) : null == t[td] && this[jd][Zr](i), this.parentChangeDispatcher[va](t))
        },
        _2x: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof $D ? this[Fd][bd](t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof $D ? (this._najIndexFlag = !0, t.source._najIndexFlag = !0, void this._5t(t)) : void(t instanceof zD && (this._najIndexFlag = !0, t.source._najIndexFlag = !0, this._2x(t)))
        },
        toRoots: function () {
            return this.$roots[Mf]()
        },
        _gf: function (t) {
            var i, e = t._ja;
            i = e ? e._fs : this[jd];
            var n = i.indexOf(t);
            if (0 > n)throw new Error(zd + t + "' not exist in the box");
            return 0 == n ? e : i[Yd](n - 1)
        },
        _gg: function (t) {
            var i, e = t._ja;
            i = e ? e._fs : this.$roots;
            var n = i.indexOf(t);
            if (0 > n)throw new Error(zd + t + "' not exist in the box");
            return n == i.length - 1 ? e ? this._gg(e) : null : i[Yd](n + 1)
        },
        forEachByDepthFirst: function (t, i, e) {
            return this.$roots.length ? r(this.$roots, t, i, e) : !1
        },
        forEachByDepthFirstReverse: function (t, i, e) {
            return this[jd][$r] ? o(this[jd], t, i, e) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this.$roots[$r] ? c(this.$roots, t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this[jd][$r] ? u(this.$roots, t, i) : !1
        },
        clear: function () {
            return B(this, KD, eh) ? (this.$roots.clear(), this.selectionModel.clear(), !0) : !1
        }
    }, N(KD, VD), Z(KD[_a], {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        }, roots: {
            get: function () {
                return this.$roots
            }
        }
    });
    var ZD = function (t) {
        j(this, ZD), this[Hd] = t, this._ncoxChangeListener = {
            onEvent: function (t) {
                WD[wd] == t.kind ? null != t[no] ? this.remove(t[no]) : null != t.datas && this[Zr](t[Uc]) : WD.KIND_CLEAR == t[ad] && this.clear()
            }
        }, this[Hd][Pd][qc](this._ncoxChangeListener, this)
    };
    ZD[_a] = {
        box: null, isSelected: function (t) {
            return this.containsById(t.id || t)
        }, select: function (t) {
            return this.add(t)
        }, unselect: function (t) {
            return this[Zr](t)
        }, reverseSelect: function (t) {
            return this[Hf](t) ? this[Zr](t) : this.add(t)
        }, accept: function (t) {
            return this[Hd][Hf](t)
        }
    }, N(ZD, VD);
    var JD = null, QD = null, tM = null, iM = function () {
        if (!i[Jf])return function (t) {
            return t
        };
        var t = i[Jf](Vf), n = t[zc], s = {};
        return function (t) {
            if (s[t])return s[t];
            var i = ci(t);
            return n[i] !== e || tM && n[i = ci(tM + i)] !== e ? (s[t] = i, i) : t
        }
    }(), eM = {};
    !function () {
        if (!i.head)return !1;
        for (var n = i.head, s = "Webkit Moz O ms Khtml"[Kr](Xr), r = 0; r < s[$r]; r++)if (n[zc][s[r] + Ud] !== e) {
            tM = Kc + s[r][qd]() + Kc;
            break
        }
        var a = i.createElement(zc);
        t[Wd] || a[vf](i[Xd]("")), a[qr] && (JD = !0), a.type = Vd, a.id = Kd, n.appendChild(a), QD = a.sheet;
        var h, o;
        for (var _ in eM) {
            var f = eM[_];
            h = _, o = "";
            for (var c in f)o += iM(c) + Zd + f[c] + Jd;
            li(h, o)
        }
    }();
    var nM = function (t, i, e, n, s) {
        if (s) {
            var r = function (t) {
                r.handle.call(r.scope, t)
            };
            return r[ca] = s, r.handle = e, t[Qd](i, r, n), r
        }
        return t.addEventListener(i, e, n), e
    }, sM = function (t, i, e) {
        t.removeEventListener(i, e)
    }, A = function (t) {
        t.preventDefault ? t[ea]() : t.returnValue = !1
    }, C = function (t) {
        t[sa] ? t[sa]() : t[ra] || (t.cancelBubble = !0)
    }, R = function (t) {
        A(t), C(t)
    };
    gD[Za] = dD ? 500 : 300, gD.LONG_PRESS_INTERVAL = dD ? 1500 : 1e3;
    var rM, aM = fh in t ? "mousewheel" : tl;
    rM = aM + il, dD && (rM += el), rM = rM.split(ga), wi.prototype = {
        _kf: null, _hs: function () {
            var t = this._mn;
            t && Ti[Br](this, t)
        }, destroy: function () {
            this._hs()
        }, _nap: null, _22: function () {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        }, _du: function () {
            this.__naancelClick = !0, this._22(), this._id(this._nap, nl), this._nal.clear()
        }, _nal: null, _76: function (t) {
            var i = this._9k;
            this._9k = Ei(t), this._nal.add(i, this._9k, t)
        }, _jt: function (t) {
            this._76(t), this._id(t, sl), t[Ja] && t[Ja][$r] > 1 && this._id(t, rl)
        }, _i9: function (t) {
            dD || this._76(t);
            var i = this._nal[al]();
            i && (t.vx = i.x, t.vy = i.y), this._id(t, hl), this._nal[eh]()
        }, _eg: function (t) {
            this._nap && (this._22(), this._id(t, ol), this._nap = null, this._9k = null)
        }, _id: function (t, i) {
            this._listener && this._listener[i]instanceof Function && this._listener[i][Br](this._listener, t, this._kf || this._mn)
        }
    };
    var hM = function (t) {
        this._kd = t, j(this, hM, [t[_l]])
    };
    hM._naurrentInteractionSupport = null, hM.prototype = {
        _4g: function (t) {
            this._4h(function (i) {
                i.onElementRemoved instanceof Function && i[fl](t, this._kd)
            })
        }, _7q: function () {
            this._4h(function (t) {
                t.onClear instanceof Function && t[cl](this._kd)
            })
        }, _hs: function () {
            this._27 && this._2q(this._27), this._$t && this._2q(this._$t);
            var t = this._kd.html;
            t && Ti[Br](this, t)
        }, _kd: null, _27: null, _$t: null, _7d: function (t) {
            return this._27 == t ? !1 : (this._27 && this._27.length && this._2q(this._27), void(this._27 = t))
        }, _$b: function (t) {
            this._$t || (this._$t = []), this._$t.push(t)
        }, _5: function (t) {
            this._$t && 0 != this._$t.length && E(this._$t, t)
        }, _id: function (t, i, e) {
            this._kd[i]instanceof Function && this._kd[i].call(this._kd, t, e), this._27 && this._hf(t, i, this._27, e), this._$t && this._hf(t, i, this._$t, e)
        }, _4h: function (t) {
            this._27 && l(this._27, t, this), this._$t && l(this._$t, t, this)
        }, _hf: function (t, i, e, n) {
            if (!L(e))return void this._9f(t, i, e, n);
            for (var s = 0; s < e.length; s++) {
                var r = e[s];
                this._9f(t, i, r, n)
            }
        }, _9f: function (t, i, e, n) {
            var s = e[i];
            s && s.call(e, t, this._kd, n)
        }, _3e: function (t) {
            t.destroy instanceof Function && t.destroy[Br](t, this._kd)
        }, _2q: function (t) {
            if (!L(t))return void this._3e(t);
            for (var i = 0; i < t.length; i++) {
                var e = t[i];
                e && this._3e(e)
            }
        }
    }, N(hM, wi), Si.prototype = {
        limitCount: 10, points: null, add: function (t, i, e) {
            var n = i.timeStamp - t.timeStamp || 1;
            e.interval = n;
            var s, r;
            if (!e.touches)return s = i.x - t.x, r = i.y - t.y, e.dx = s, e.dy = r, void this._l6(s, r, n);
            var a = e.touches[$r];
            if (1 == a)s = e[Ja][0][Qa] - t.touches[0].clientX, r = e.touches[0].clientY - t.touches[0][th]; else {
                for (var h, o, _, f = [], c = [], u = 0, d = 0, l = 0, v = 0, b = 0, g = 0, y = 0, a = t[Ja][$r]; a > y; y++) {
                    h = t[Ja][y];
                    var E = h.clientX, p = h.clientY;
                    u += E, d += p, y && (b = Math.max(b, Math[Vh]((E - o) * (E - o) + (p - _) * (p - _)))), o = E, _ = p, f.push({
                        x: E,
                        y: p
                    })
                }
                u /= a, d /= a;
                for (var y = 0, a = e[Ja].length; a > y; y++) {
                    h = e.touches[y];
                    var E = h[Qa], p = h[th];
                    l += E, v += p, y && (g = Math.max(g, Math.sqrt((E - o) * (E - o) + (p - _) * (p - _)))), o = E, _ = p, c.push({
                        x: E,
                        y: p
                    })
                }
                if (l /= a, v /= a, s = l - u, r = v - d, b && g) {
                    var m = g / b;
                    e[Co] && t.scale && (m = e[Co] / t[Co]), e.center = {
                        x: l,
                        y: v,
                        clientX: l,
                        clientY: v
                    }, e[ul] = m, e[dl] = t
                }
            }
            e.dx = s, e.dy = r, this._l6(s, r, n)
        }, _l6: function (t, i, e) {
            var n = {interval: e, dx: t, dy: i};
            this[Jh].splice(0, 0, n), this[Jh].length > this.limitCount && this[Jh][ll]()
        }, getCurrentSpeed: function () {
            if (!this[Jh][$r])return null;
            for (var t = 0, i = 0, e = 0, n = 0, s = this[Jh][$r]; s > n; n++) {
                var r = this.points[n], a = r.interval;
                if (a > 300)break;
                if (t += r[vl], i += r.dx, e += r.dy, t > 500)break
            }
            return 0 == t || 0 == i && 0 == e ? null : {x: i / t, y: e / t}
        }, clear: function () {
            this[Jh] = []
        }
    };
    var oM, _M, fM, cM;
    sD ? (oM = bl, _M = gl, fM = yl, cM = El) : rD ? (oM = pl, _M = ml, fM = xl, cM = Tl) : (oM = wl, _M = wl, fM = Tc, cM = Ol);
    var uM = Sl, dM = Math.PI, lM = Math.pow, vM = Math.sin, bM = 1.70158, gM = {
        swing: function (t) {
            return -Math[Lh](t * dM) / 2 + .5
        }, easeNone: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return (2 - t) * t
        }, easeBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        }, easeInStrong: function (t) {
            return t * t * t * t
        }, easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        }, easeBothStrong: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        }, elasticIn: function (t) {
            var i = .3, e = i / 4;
            return 0 === t || 1 === t ? t : -(lM(2, 10 * (t -= 1)) * vM(2 * (t - e) * dM / i))
        }, elasticOut: function (t) {
            var i = .3, e = i / 4;
            return 0 === t || 1 === t ? t : lM(2, -10 * t) * vM(2 * (t - e) * dM / i) + 1
        }, elasticBoth: function (t) {
            var i = .45, e = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * lM(2, 10 * (t -= 1)) * vM(2 * (t - e) * dM / i) : lM(2, -10 * (t -= 1)) * vM(2 * (t - e) * dM / i) * .5 + 1
        }, backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((bM + 1) * t - bM)
        }, backOut: function (t) {
            return (t -= 1) * t * ((bM + 1) * t + bM) + 1
        }, backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((bM *= 1.525) + 1) * t - bM) : .5 * ((t -= 2) * t * (((bM *= 1.525) + 1) * t + bM) + 2)
        }, bounceIn: function (t) {
            return 1 - gM.bounceOut(1 - t)
        }, bounceOut: function (t) {
            var i, e = 7.5625;
            return i = 1 / 2.75 > t ? e * t * t : 2 / 2.75 > t ? e * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? e * (t -= 2.25 / 2.75) * t + .9375 : e * (t -= 2.625 / 2.75) * t + .984375
        }, bounceBoth: function (t) {
            return .5 > t ? .5 * gM.bounceIn(2 * t) : .5 * gM[kl](2 * t - 1) + .5
        }
    }, yM = function (t) {
        this._js = t
    };
    yM.prototype = {
        _js: null, _ke: function (t) {
            var i = Date[Il]();
            this._lw();
            var e = this;
            this._requestID = requestAnimationFrame(function n() {
                var s = Date.now(), r = s - i;
                return !r || e._js && e._js(r) !== !1 ? (i = s, void(e._requestID = requestAnimationFrame(n))) : (e._lw(), void(t instanceof Function && t[Br]()))
            })
        }, _lw: function () {
            return this._requestID ? (t.cancelAnimationFrame(this._requestID), void delete this._requestID) : !1
        }, _dv: function () {
            return null != this._requestID
        }
    };
    var EM = function (t, i, e, n) {
        this._onStep = t, this._kf = i || this, this._3n = n, e && e > 0 && (this._ip = e)
    };
    EM[_a] = {
        _ip: 1e3, _3n: null, _ev: 0, _lw: function () {
            return this._ev = 0, this._d7 = 0, B(this, EM, Ll)
        }, _d7: 0, _js: function (t) {
            if (this._ev += t, this._ev >= this._ip)return this._onStep.call(this._kf, 1, (1 - this._d7) * this._ip, t, this._ip), !1;
            var i = this._ev / this._ip;
            return this._3n && (i = this._3n(i)), this._onStep[Br](this._kf, i, (i - this._d7) * this._ip, t, this._ip) === !1 ? !1 : void(this._d7 = i)
        }
    }, N(EM, yM);
    var pM = function (t) {
        ei(t)
    }, mM = {
        version: Al,
        extend: N,
        doSuperConstructor: j,
        doSuper: B,
        createFunction: z,
        setClass: T,
        appendClass: w,
        removeClass: O,
        forEach: l,
        forEachReverse: b,
        isNumber: S,
        isString: k,
        isBoolean: I,
        isArray: L,
        eventPreventDefault: A,
        eventStopPropagation: C,
        stopEvent: R,
        callLater: m,
        nextFrame: x,
        forEachChild: n,
        forEachByDepthFirst: r,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: P,
        randomBool: D,
        randomColor: q,
        addEventListener: nM,
        getFirstElementChildByTagName: mD
    };
    mM[Cl] = dD, mM.isIOS = fD, mM.intersectsPoint = ai, mM.containsRect = hi, mM[Fc] = SD, mM.Size = OD, mM.Point = xD, mM[Rl] = kD, mM[Pl] = jD, mM.PropertyChangeEvent = BD, mM[Dl] = WD, mM[Ml] = YD, mM.Dispatcher = HD, mM[Nl] = ID, mM[jl] = XD, mM[Bl] = ZD, mM[$l] = KD, mM.IListener = qD, mM[Gl] = Li, mM.loadXML = ki, mM.loadJSON = Ii, mM[Fl] = Oi, mM.calculateDistance = TD, mM[zl] = ED, mM[Yl] = wi, mM[Hl] = function (t) {
        alert(t)
    }, mM[Ul] = function (t, i, e, n) {
        var s = prompt(t, i);
        return s != i && e ? e[Br](n, s) : s
    }, mM.confirm = function (t, i, e) {
        var n = confirm(t);
        return n && i ? i.call(e) : n
    }, mM.addCSSRule = li;
    var xM = {
        SELECTION_TYPE_BORDER_RECT: ql,
        SELECTION_TYPE_BORDER: Wl,
        SELECTION_TYPE_SHADOW: Xl,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: Vl,
        EDGE_TYPE_ELBOW_HORIZONTAL: Kl,
        EDGE_TYPE_ELBOW_VERTICAL: Zl,
        EDGE_TYPE_ORTHOGONAL: Jl,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Ql,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: tv,
        EDGE_TYPE_HORIZONTAL_VERTICAL: iv,
        EDGE_TYPE_VERTICAL_HORIZONTAL: ev,
        EDGE_TYPE_EXTEND_TOP: nv,
        EDGE_TYPE_EXTEND_LEFT: sv,
        EDGE_TYPE_EXTEND_BOTTOM: rv,
        EDGE_TYPE_EXTEND_RIGHT: av,
        EDGE_TYPE_ZIGZAG: hv,
        EDGE_CORNER_NONE: hc,
        EDGE_CORNER_ROUND: Io,
        EDGE_CORNER_BEVEL: ov,
        GROUP_TYPE_RECT: _v,
        GROUP_TYPE_CIRCLE: fv,
        GROUP_TYPE_ELLIPSE: cv,
        SHAPE_CIRCLE: uv,
        SHAPE_RECT: _v,
        SHAPE_ROUNDRECT: dv,
        SHAPE_STAR: lv,
        SHAPE_TRIANGLE: vv,
        SHAPE_HEXAGON: bv,
        SHAPE_PENTAGON: gv,
        SHAPE_TRAPEZIUM: yv,
        SHAPE_RHOMBUS: Ev,
        SHAPE_PARALLELOGRAM: pv,
        SHAPE_HEART: mv,
        SHAPE_DIAMOND: xv,
        SHAPE_CROSS: Tv,
        SHAPE_ARROW_STANDARD: wv,
        SHAPE_ARROW_1: Ov,
        SHAPE_ARROW_2: Sv,
        SHAPE_ARROW_3: kv,
        SHAPE_ARROW_4: Iv,
        SHAPE_ARROW_5: Lv,
        SHAPE_ARROW_6: Av,
        SHAPE_ARROW_7: Cv,
        SHAPE_ARROW_8: Rv,
        SHAPE_ARROW_OPEN: Pv
    };
    xM.LINE_CAP_TYPE_BUTT = Dv, xM.LINE_CAP_TYPE_ROUND = Io, xM[Mv] = Nv, xM.LINE_JOIN_TYPE_BEVEL = ov, xM.LINE_JOIN_TYPE_ROUND = Io, xM[jv] = Bv, gD.SELECTION_TYPE = xM[$v], gD.SELECTION_TOLERANCE = 3, gD.SELECTION_BORDER = 2, gD.SELECTION_SHADOW_BLUR = 7, gD[Gv] = V(3422561023), gD[Fv] = xM.SELECTION_TYPE_SHADOW, gD[zv] = 10, gD[Yv] = 10, gD.DOUBLE_BUFFER = e, gD.ARROW_SIZE = 10, gD.IMAGE_MAX_SIZE = 200, gD.LINE_HEIGHT = 1.2;
    var TM = t.devicePixelRatio || 1;
    1 > TM && (TM = 1);
    var wM;
    mM[Hv] = Bi;
    var OM = function (t, i, e, n) {
        var s = t - e, r = i - n;
        return s * s + r * r
    };
    ie.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, ie._ivCircle = function (t, i, e) {
        if (!e)return Qi(t, i);
        var n = OM(t.x, t.y, i.x, i.y), s = OM(t.x, t.y, e.x, e.y), r = OM(e.x, e.y, i.x, i.y);
        if (n + SM >= s + r)return Qi(t, i, 0, e);
        if (s + SM >= n + r)return Qi(t, e, 0, i);
        if (r + SM >= n + s)return Qi(i, e, 0, t);
        var a;
        Math.abs(e.y - i.y) < 1e-4 && (a = t, t = i, i = a), a = e.x * (t.y - i.y) + t.x * (i.y - e.y) + i.x * (-t.y + e.y);
        var h = (e.x * e.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - e.y)) * (i.y - e.y) + i.x * i.x * (-t.y + e.y)) / (2 * a), o = (i.y + e.y) / 2 - (e.x - i.x) / (e.y - i.y) * (h - (i.x + e.x) / 2);
        return new ie(h, o, TD(h, o, t.x, t.y), t, i, e)
    };
    var SM = .01, kM = {
        _n98: function (t, i, n, s, r) {
            var a = 0, h = 0, o = i._iw;
            if (n = n || 0, t.x === e) {
                var _ = t.horizontalPosition, f = t[Pa], c = !0;
                switch (_) {
                    case CD:
                        c = !1;
                        break;
                    case AD:
                        a += o / 2
                }
                switch (f) {
                    case RD:
                        h -= n / 2;
                        break;
                    case DD:
                        h += n / 2
                }
            } else a = t.x, h = t.y, Math[qh](a) > 0 && Math[qh](a) < 1 && (a *= o);
            r && null != s && (h += s.y, a += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var u = _e.call(i, a, h, c);
            return u ? (r || null == s || u.offset(s), u) : {x: 0, y: 0}
        }, _ls: function (t, i) {
            var e = i[ao], n = i.points;
            switch (e) {
                case QM:
                    t[Uv](n[0], n[1], n[2], n[3], i._r);
                    break;
                case VM:
                    t[Y_](n[0], n[1]);
                    break;
                case KM:
                    t.lineTo(n[0], n[1]);
                    break;
                case ZM:
                    t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                    break;
                case JM:
                    t[qv](n[0], n[1], n[2], n[3], n[4], n[5]);
                    break;
                case tN:
                    t[F_]()
            }
        }, _69: function (t, i, e, n) {
            var s = i.type;
            if (s != VM && s != tN) {
                var r = e.lastPoint, a = i[Jh];
                switch (e[ao] == VM && t.add(r.x, r.y), s) {
                    case QM:
                        ue(i, r.x, r.y, a[0], a[1], a[2], a[3], a[4]), t.add(a[0], a[1]), t[Vr](i._p1x, i._p1y), t.add(i._p2x, i._p2y), i._ncoundaryPoint1 && t[Vr](i._ncoundaryPoint1.x, i._ncoundaryPoint1.y), i._ncoundaryPoint2 && t[Vr](i._ncoundaryPoint2.x, i._ncoundaryPoint2.y);
                        break;
                    case KM:
                        t.add(a[0], a[1]);
                        break;
                    case ZM:
                        Ui([r.x, r.y].concat(a), t);
                        break;
                    case JM:
                        Vi([r.x, r.y].concat(a), t);
                        break;
                    case tN:
                        n && t[Vr](n[Jh][0], n.points[1])
                }
            }
        }, _67: function (t, i, e) {
            var n = t[ao];
            if (n == VM)return 0;
            var s = i[ro], r = t[Jh];
            switch (n == JM && 4 == r.length && (n = ZM), n) {
                case KM:
                    return TD(r[0], r[1], s.x, s.y);
                case QM:
                    return t._iw;
                case ZM:
                    var a = qi([s.x, s.y][Yr](r));
                    return t._lf = a, a(1);
                case JM:
                    var a = Zi([s.x, s.y][Yr](r));
                    return t._lf = a, a(1) || Ki([s.x, s.y].concat(r));
                case tN:
                    if (s && e)return t[Jh] = e.points, TD(e[Jh][0], e.points[1], s.x, s.y)
            }
            return 0
        }
    }, IM = /^data:image\/(\w+);base64,/i, LM = /^gif/i, AM = /^svg/i, CM = 10, RM = 11, PM = 12, DM = 20, MM = 30;
    gD[lo] = 50, gD[Wv] = 30, gD.MAX_CACHE_PIXELS = 1e6;
    var NM = 1, jM = 2, BM = 3;
    ge.prototype = {
        _jg: 0, _6f: !0, _kb: null, _ji: null, _lp: null, _lq: null, _n9c: e, _96: e, _6b: function () {
            return this._jg == NM
        }, getBounds: function (t) {
            return this._lq == MM ? this._lp[Kh](t) : (this._6f && this._f6(), this)
        }, validate: function () {
            this._6f && this._f6()
        }, _f6: function () {
            if (this._6f = !1, this._lq == MM)return this._lp[Xv](), void this.setByRect(this._lp[Zh]);
            if (this._lq == DM)return void this._9i();
            if (this._jg != NM)try {
                this._ec()
            } catch (t) {
                this._jg = BM, mM.error(t)
            }
        }, _58: function () {
            this._e5(), this._dispatcher.clear(), delete this._dispatcher
        }, _i1: function (t) {
            this._kb && this._kb.parentNode && this._kb.parentNode.removeChild(this._kb), this._jg = BM, mM[Ia](Vv + this._lp), this._pixels = null, this._ji = null, this._kb = null, t !== !1 && this._58()
        }, _ec: function () {
            var t = this._lp;
            if (this._jg = NM, this._dispatcher = new HD, this._lq == PM) {
                for (var e in fN)this[e] = fN[e];
                return void Ve(this._lp, this, this._naw, this._i1, this._f1)
            }
            this._kb || (eD ? (this._kb = i.createElement(Qf), this._kb[zc][Kv] = ac, i[Zv][vf](this._kb)) : this._kb = new Image), this._kb[ic] = t, !eD && this._kb[Ah] ? (this._kb[__] = this._kb.onerror = null, this._82()) : (this._kb.onload = eD ? function (t) {
                setTimeout(this._82.bind(this, t), 100)
            }[Jv](this) : this._82[Jv](this), this._kb.onerror = this._i1.bind(this))
        }, _82: function () {
            this._jg = jM;
            var t = this._kb.width, i = this._kb[Dh];
            if (this._kb[Qv] && this._kb.parentNode[Gd](this._kb), !t || !i)return void this._i1();
            this.width = t, this.height = i;
            var e = this._df();
            e[Ah] = t, e[Dh] = i, e.g.drawImage(this._kb, 0, 0, t, i), this._pixels = eD && this._lq == RM ? null : we(e), this._58()
        }, _9i: function () {
            var t = this._lp;
            if (!(t.draw instanceof Function))return void this._i1(!1);
            var i = t[Ah] || gD.IMAGE_MAX_SIZE, e = t.height || gD[tb], n = this._df(), s = n.g;
            t[co](s);
            var r = s[eo](0, 0, i, e), a = Oe(r.data, i, e);
            this.x = a._x, this.y = a._y, this.width = a._width, this[Dh] = a._height, n.width = this[Ah], n.height = this.height, s[ib](r, -this.x, -this.y), this._pixels = a
        }, _df: function () {
            return this._ji || (this._ji = Bi())
        }, _6s: function (t, i, e, n, s, r) {
            i[eb](), i[_v](0, 0, n, s), i.fillStyle = r || nb, i.fill(), i.clip(), i[sb] = rb, i[ab] = hb, i[ob] = _b;
            var a = 6 * (i[Mh][Rh] || 1);
            i.font = fb + a + "px Verdana,helvetica,arial,sans-serif", i[cb] = ub, i[so] = 1, i[db](t, n / 2 + .5, s / 2 + .5), i.strokeStyle = lb, i.strokeText(t, n / 2 - .5, s / 2 - .5), i.fillText(t, n / 2, s / 2), i[vb]()
        }, draw: function (t, i, e, n, s, r) {
            if (this[Ah] && this.height) {
                i = i || 1, n = n || 1, s = s || 1;
                var a = this[Ah] * n, h = this[Dh] * s;
                if (r && e[bb] && (t[bb] = e.shadowColor, t.shadowBlur = (e[gb] || 0) * i, t.shadowOffsetX = (e[yb] || 0) * i, t[Eb] = (e.shadowOffsetY || 0) * i), this._jg == NM)return this._6s(pb, t, i, a, h, e.renderColor);
                if (this._jg == BM)return this._6s(mb, t, i, a, h, e.renderColor);
                if (this._lq == MM)return t.scale(n, s), void this._lp.draw(t, i, e);
                var o = this._fl(i, n, s);
                return o ? ((this.x || this.y) && t.translate(this.x * n, this.y * s), t.scale(n / o.scale, s / o[Co]), void o._ls(t, e.renderColor, e.renderColorBlendMode)) : void this._jj(t, i, n, s, this.width * n, this.height * s)
            }
        }, _jj: function (t, i, e, n, s, r) {
            if (this._lq == DM)return 1 != e && 1 != n && t[Co](e, n), void this._lp.draw(t);
            if (this._kb) {
                if (!aD)return void t.drawImage(this._kb, 0, 0, s, r);
                var e = i * s / this[Ah], n = i * r / this[Dh];
                t[Co](1 / e, 1 / n), t[xb](this._kb, 0, 0, s * e, r * n)
            }
        }, _jl: null, _fl: function (t, i, e) {
            if (this._lq == CM || (t *= Math.max(i, e)) <= 1)return this._defaultCache || (this._defaultCache = this._fm(this._ji || this._kb, 1)), this._defaultCache;
            var n = this._jl.maxScale || 0;
            if (t = Math.ceil(t), n >= t) {
                for (var s = t, r = this._jl[s]; !r && ++s <= n;)r = this._jl[s];
                if (r)return r
            }
            t % 2 && t++;
            var a = this[Ah] * t, h = this[Dh] * t;
            if (a * h > gD.MAX_CACHE_PIXELS)return null;
            var o = Bi(a, h);
            return (this.x || this.y) && o.g[yo](-this.x * t, -this.y * t), this._jj(o.g, 1, t, t, a, h), this._fm(o, t)
        }, _fm: function (t, i) {
            var e = new sN(t, i);
            return this._jl[i] = e, this._jl[Tb] = i, e
        }, _hk: function (t, i, e) {
            if (this._lq == MM)return this._lp._hk.apply(this._lp, arguments);
            if (!(this._pixels || this._kb && this._kb._pixels))return !0;
            var n = this._pixels || this._kb._pixels;
            return t -= n._j6.x, i -= n._j6.y, t = Math[Io](t), i = Math.round(i), Se(n, n._j6, t, i, e)
        }, _e5: function () {
            this._dispatcher && this._dispatcher.onEvent(new jD(this, wb, Ob, this._kb))
        }, _n9h: function (t, i) {
            this._dispatcher && this._dispatcher[qc](t, i)
        }, _6m: function (t, i) {
            this._dispatcher && this._dispatcher.removeListener(t, i)
        }, _na2: function (t) {
            this._jl = {}, (t || this.width * this[Dh] > 1e5) && (this._kb = null, this._ji = null)
        }
    }, N(ge, SD);
    var $M = {};
    mM.drawImage = xe, mM.registerImage = ye, mM[Sb] = pe, mM[kb] = function () {
        var t = [];
        for (var i in $M)t[Qh](i);
        return t
    };
    var GM = function (t, i, e, n, s, r) {
        this[ao] = t, this.colors = i, this.positions = e, this[Ff] = n || 0, this.tx = s || 0, this.ty = r || 0
    };
    xM[Ib] = Bu, xM.GRADIENT_TYPE_LINEAR = Nu, GM[_a] = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: ID.CENTER_MIDDLE,
        isEmpty: function () {
            return null == this[Lb] || 0 == this[Lb].length
        },
        _78: function () {
            var t = this[Lb][$r];
            if (1 == t)return [0];
            for (var i = [], e = 1 / (t - 1), n = 0; t > n; n++)i[Qh](e * n);
            return this.positions || (this.positions = i), i
        },
        generatorGradient: function (t) {
            if (null == this[Lb] || 0 == this.colors.length)return null;
            var i, e = Gi();
            if (this.type == xM[Ab]) {
                var n = this[Ff];
                n > Math.PI && (n -= Math.PI);
                var s;
                if (n <= Math.PI / 2) {
                    var r = Math[Wh](t[Dh], t[Ah]), a = Math.sqrt(t[Ah] * t[Ah] + t.height * t[Dh]), h = r - n;
                    s = Math.cos(h) * a
                } else {
                    var r = Math.atan2(t.width, t.height), a = Math[Vh](t[Ah] * t.width + t[Dh] * t.height), h = r - (n - Math.PI / 2);
                    s = Math[Lh](h) * a
                }
                var o = s / 2, _ = o * Math.cos(n), f = o * Math[La](n), c = t.x + t[Ah] / 2 - _, u = t.y + t.height / 2 - f, d = t.x + t[Ah] / 2 + _, l = t.y + t.height / 2 + f;
                i = e.createLinearGradient(c, u, d, l)
            } else {
                if (!(this.type = xM[Ib]))return null;
                var v = oi(this[Wo], t[Ah], t[Dh]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math[qh](this.tx) < 1 ? t[Ah] * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Dh] * this.ty : this.ty);
                var b = TD(v.x, v.y, t.x, t.y);
                b = Math[Uh](b, TD(v.x, v.y, t.x, t.y + t[Dh])), b = Math[Uh](b, TD(v.x, v.y, t.x + t[Ah], t.y + t[Dh])), b = Math[Uh](b, TD(v.x, v.y, t.x + t.width, t.y)), i = e.createRadialGradient(v.x, v.y, 0, v.x, v.y, b)
            }
            var g = this[Lb], y = this[Cb];
            y && y.length == g[$r] || (y = this._78());
            for (var E = 0, p = g.length; p > E; E++)i.addColorStop(y[E], g[E]);
            return i
        }
    };
    var FM = new GM(xM[Ab], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2), zM = new GM(xM[Ab], [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0), YM = (new GM(xM[Ab], [V(1154272460), V(1442840575)], [.1, .9], 0), new GM(xM[Ib], [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)), HM = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)], UM = [0, .12, .28, .45, .6, .75, .8, 1], qM = new GM(xM[Ab], HM, UM), WM = new GM(xM.GRADIENT_TYPE_LINEAR, HM, UM, Math.PI / 2), XM = new GM(xM.GRADIENT_TYPE_RADIAL, HM, UM);
    GM.LINEAR_GRADIENT_VERTICAL = FM, GM[Rb] = zM, GM.RADIAL_GRADIENT = YM, GM.RAINBOW_LINEAR_GRADIENT = qM, GM[Pb] = WM, GM[Db] = XM;
    var VM = $u, KM = Nu, ZM = Mb, JM = ju, QM = Nb, tN = jb;
    xM.SEGMENT_MOVE_TO = VM, xM[Bb] = KM, xM[$b] = ZM, xM[Gb] = JM, xM[Fb] = QM, xM.SEGMENT_CLOSE = tN;
    var iN = function (t, i) {
        this.id = ++QP, L(t) ? this.points = t : (this.type = t, this[Jh] = i)
    };
    iN[_a] = {
        toJSON: function () {
            var t = {type: this.type, points: this.points};
            return this[po] && (t[po] = !0), t
        }, parseJSON: function (t) {
            this[ao] = t[ao], this[Jh] = t[Jh], this[po] = t.invalidTerminal
        }, points: null, type: KM, clone: function () {
            return new iN(this.type, g(this[Jh]))
        }, move: function (t, i) {
            if (this.points)for (var e = 0, n = this.points.length; n > e; e++) {
                var s = this[Jh][e];
                mM[zb](s) && (this[Jh][e] += e % 2 == 0 ? t : i)
            }
        }
    }, Z(iN.prototype, {
        lastPoint: {
            get: function () {
                return this.type == QM ? {x: this._p2x, y: this._p2y} : {
                    x: this[Jh][this.points.length - 2],
                    y: this.points[this[Jh][$r] - 1]
                }
            }
        }, firstPoint: {
            get: function () {
                return {x: this.points[0], y: this.points[1]}
            }
        }
    }), mM[Yb] = iN;
    var eN = 0, nN = function (t) {
        this[Zh] = new SD, this._gd = t || []
    };
    nN.prototype = {
        toJSON: function () {
            var t = [];
            return this._gd[l_](function (i) {
                t.push(i.toJSON())
            }), t
        }, parseJSON: function (t) {
            var i = this._gd;
            t[l_](function (t) {
                i.push(new iN(t[ao], t.points))
            })
        }, clear: function () {
            this._gd[$r] = 0, this[Zh][eh](), this._iw = 0, this._6f = !0
        }, _dp: !0, _6a: function (t, i) {
            this._dp && 0 === this._gd[$r] && t != VM && this._gd[Qh](new iN(VM, [0, 0])), this._gd.push(new iN(t, i)), this._6f = !0
        }, removePathSegment: function (t) {
            return t >= this._gd[$r] ? !1 : (this._gd[zr](t, 1), void(this._6f = !0))
        }, moveTo: function (t, i) {
            this._6a(VM, [t, i])
        }, lineTo: function (t, i) {
            this._6a(KM, [t, i])
        }, quadTo: function (t, i, e, n) {
            this._6a(ZM, [t, i, e, n])
        }, curveTo: function (t, i, e, n, s, r) {
            this._6a(JM, [t, i, e, n, s, r])
        }, arcTo: function (t, i, e, n, s) {
            this._6a(QM, [t, i, e, n, s])
        }, closePath: function () {
            this._6a(tN)
        }, _89: function (t, i, e, n, s) {
            if (n.selectionColor) {
                if (e == xM[$v]) {
                    if (!n[Hb])return;
                    return t[bb] = n.selectionColor, t.shadowBlur = n.selectionShadowBlur * i, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i, void(t[Eb] = (n.selectionShadowOffsetY || 0) * i)
                }
                if (e == xM[Ub]) {
                    if (!n[qb])return;
                    t[cb] = n.selectionColor, t.lineWidth = n.selectionBorder + (s[so] || 0), this._ls(t), t.stroke()
                }
            }
        }, _6f: !0, _gd: null, _iw: 0, lineCap: Dv, lineJoin: Io, draw: function (t, i, e, n, s) {
            t.lineCap = e.lineCap || this.lineCap, t.lineJoin = e[Wb] || this.lineJoin, n && (s || (s = e), this._89(t, i, s.selectionType, s, e)), e[Xb] && (this._ls(t), t[so] = e.lineWidth + 2 * (e.outline || 0), t.strokeStyle = e[Xb], t.stroke()), t[so] = 0, this._ls(t), e.fillColor && (t.fillStyle = e.renderColor || e.fillColor, t.fill()), e.fillGradient && (t.fillStyle = e._fillGradient || e.fillGradient, t.fill()), e[so] && (t[so] = e[so], e[Zo] && (t.lineDash = e.lineDash, t[t_] = e[t_]), t[cb] = e.renderColor || e.strokeStyle, t.stroke(), t.lineDash = [])
        }, _ls: function (t) {
            t[Vb]();
            for (var i, e, n = 0, s = this._gd[$r]; s > n; n++)i = this._gd[n], kM._ls(t, i, e), e = i
        }, validate: function () {
            if (this._6f = !1, this.bounds[eh](), this._iw = 0, 0 != this._gd.length)for (var t, i, e = this._gd, n = 1, s = e[0], r = s, a = e.length; a > n; n++)t = e[n], t[ao] == VM ? r = t : (kM._69(this[Zh], t, s, r), i = kM._67(t, s, r), t._iw = i, this._iw += i), s = t
        }, getBounds: function (t, i) {
            if (this._6f && this.validate(), i = i || new SD, t) {
                var e = t / 2;
                i.set(this[Zh].x - e, this.bounds.y - e, this.bounds[Ah] + t, this.bounds[Dh] + t)
            } else i.set(this.bounds.x, this.bounds.y, this[Zh][Ah], this.bounds[Dh]);
            return i
        }, _hk: function (t, i, e, n, s, r) {
            return oe[Br](this, t, i, e, n, s, r)
        }, toSegments: function () {
            return [][Yr](this._gd)
        }, generator: function (t, i, e, n, s) {
            return he[Br](this, t, i, e, n, s)
        }, getLocation: function (t, i) {
            return _e.call(this, t, i || 0)
        }
    }, Z(nN.prototype, {
        segments: {
            get: function () {
                return this._gd
            }, set: function (t) {
                this[eh](), this._gd = t
            }
        }, length: {
            get: function () {
                return this._6f && this.validate(), this._iw
            }
        }, _empty: {
            get: function () {
                return 0 == this._gd.length
            }
        }
    }), xM[wo] = Kb, xM.BLEND_MODE_MULTIPLY = Zb, xM.BLEND_MODE_COLOR_BURN = Jb, xM[Oo] = Qb, xM.BLEND_MODE_LIGHTEN = tg, xM[So] = ig, xM[ko] = eg, gD[ng] = xM[Oo];
    var sN = function (t, i, e) {
        this._ji = t, this[Co] = i || 1, t instanceof Image && (e = !1), this._ig = e
    };
    sN[_a] = {
        scale: 1, _ji: null, _jl: null, _ig: !0, _ls: function (t, i, e) {
            if (!i || this._ig === !1)return void t.drawImage(this._ji, 0, 0);
            this._jl || (this._jl = {});
            var n = i + e, s = this._jl[n];
            s || (s = Le(this._ji, i, e), s || (this._ig = !1), this._jl[n] = s || this._ji), t[xb](s, 0, 0)
        }
    };
    var rN = function (t, i, e, n, s, r, a, h, o) {
        this._m1 = Pe(t, i, e, n, s, r, a, h, o)
    }, aN = {
        server: {
            draw: function (t) {
                t.save(), t[yo](0, 0), t.beginPath(), t.moveTo(0, 0), t[G_](40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t[F_](), t.clip(), t[yo](0, 0), t.translate(0, 0), t[Co](1, 1), t[yo](0, 0), t[cb] = sg, t[rg] = Dv, t[Wb] = Bv, t.miterLimit = 4, t[eb](), t.save(), t[vb](), t.save(), t[vb](), t.save(), t.restore(), t.save(), t[vb](), t[eb](), t[vb](), t[eb](), t[vb](), t[eb](), t[vb](), t[eb](), t[vb](), t[eb](), t.restore(), t.save(), t[vb](), t.save(), t[vb](), t.save(), t.restore(), t.save(), t[vb](), t.restore(), t[eb]();
                var i = t[ag](6.75, 3.9033, 30.5914, 27.7447);
                i[hg](.0493, og), i.addColorStop(.0689, _g), i.addColorStop(.0939, fg), i[hg](.129, cg), i.addColorStop(.2266, ug), i.addColorStop(.2556, dg), i.addColorStop(.2869, lg), i[hg](.3194, vg), i.addColorStop(.3525, bg), i.addColorStop(.3695, gg), i.addColorStop(.5025, yg), i.addColorStop(.9212, Eg), i.addColorStop(1, pg), t[ob] = i, t[Vb](), t.moveTo(25.677, 4.113), t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[qv](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[qv](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t.bezierCurveTo(9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t.bezierCurveTo(8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[qv](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[qv](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[qv](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[qv](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t[F_](), t.fill(), t[mg](), t[vb](), t[eb](), t[eb](), t[ob] = xg, t.beginPath(), t.moveTo(19.763, 6.645), t[qv](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[qv](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[qv](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[G_](21.398, 36.253), t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[qv](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t[qv](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t.lineTo(2.924, 8.431), t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[qv](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t[qv](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[G_](19.763, 6.645), t[F_](), t[Tg](), t[mg](), t[vb](), t.restore(), t.save(), t.fillStyle = wg, t.beginPath(), t[Og](12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = xg, t[Vb](), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[F_](), t.fill(), t.stroke(), t.restore(), t[eb](), t.fillStyle = wg, t[Vb](), t.moveTo(19.377, 17.247), t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[G_](5.882, 18.108999999999998), t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[G_](5.02, 11.144), t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t.bezierCurveTo(18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t.lineTo(19.377, 17.247), t[F_](), t[Tg](), t.stroke(), t.restore(), t.save(), t.save(), t.fillStyle = xg, t.beginPath(), t[Y_](18.536, 13.176),t[qv](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),t[G_](6.479, 13.794),t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),t.lineTo(5.861, 11.84),t[qv](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),t[G_](17.918, 11.221),t[qv](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),t.lineTo(18.535, 13.176),t[F_](),t.fill(),t.stroke(),t[vb](),t.save(),t.fillStyle = xg,t[Vb](),t[Y_](18.536, 16.551),t[qv](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),t[G_](6.479, 17.168999999999997),t[qv](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),t[G_](5.861, 15.215999999999998),t[qv](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),t.lineTo(17.918, 14.596999999999998),t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),t.lineTo(18.535, 16.551),t[F_](),t[Tg](),t[mg](),t[vb](),t[vb](),t.restore()
            }
        }, exchanger2: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t.beginPath(), t[Y_](0, 0), t[G_](40, 0), t[G_](40, 40), t[G_](0, 40), t[F_](), t.clip(), t.translate(0, 0), t.translate(0, 0), t[Co](1, 1), t[yo](0, 0), t.strokeStyle = sg, t[rg] = Dv, t[Wb] = Bv, t[Sg] = 4, t[eb](), t[eb](), t.restore(), t[eb](), t.restore(), t[eb](), t[vb](), t.save(), t[vb](), t[eb](), t.restore(), t.save(), t[vb](), t[eb](), t[vb](), t.save(), t[vb](), t[eb](), t[vb](), t.save(), t[vb](), t.restore(), t.save();
                var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                i.addColorStop(0, og), i.addColorStop(.0788, ug), i[hg](.2046, kg), i[hg](.3649, Ig), i.addColorStop(.5432, Lg), i[hg](.6798, Ag), i.addColorStop(.7462, Cg), i.addColorStop(.8508, Rg), i[hg](.98, dg), i[hg](1, Pg), t[ob] = i, t[Vb](), t[Y_](.41, 16.649), t[qv](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[qv](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[qv](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t.fill(), t[mg](), t.restore(), t[eb](), t.save(), t[ob] = xg, t.beginPath(), t.moveTo(16.4, 25.185), t[qv](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[qv](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t.closePath(), t.fill(), t.stroke(), t.restore(), t[vb](), t[eb](), t.save(), t.save(), t.save(), t[eb](), t.fillStyle = Dg, t[Vb](), t[Y_](5.21, 21.754), t[G_](8.188, 17.922), t[G_](9.53, 18.75), t.lineTo(15.956, 16.004), t[G_](18.547, 17.523), t[G_](12.074, 20.334), t[G_](13.464, 21.204), t[G_](5.21, 21.754), t.closePath(), t.fill(), t.stroke(), t.restore(), t[vb](), t[vb](), t.save(), t.save(), t[eb](), t[ob] = Dg, t.beginPath(), t.moveTo(17.88, 14.61), t.lineTo(9.85, 13.522), t[G_](11.703, 12.757), t[G_](7.436, 10.285), t[G_](10.783, 8.942), t.lineTo(15.091, 11.357), t.lineTo(16.88, 10.614), t.lineTo(17.88, 14.61), t.closePath(), t.fill(), t.stroke(), t[vb](), t[vb](), t.save(), t[eb](), t[ob] = Dg, t[Vb](), t.moveTo(17.88, 14.61), t[G_](9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t[G_](10.783, 8.942), t[G_](15.091, 11.357), t[G_](16.88, 10.614), t[G_](17.88, 14.61), t.closePath(), t[Tg](), t[mg](), t.restore(), t.restore(), t[vb](),t[eb](),t[eb](),t.save(),t.fillStyle = Dg,t.beginPath(),t.moveTo(23.556, 15.339),t.lineTo(20.93, 13.879),t[G_](26.953, 11.304),t.lineTo(25.559, 10.567),t.lineTo(33.251, 9.909),t[G_](31.087, 13.467),t[G_](29.619, 12.703),t.lineTo(23.556, 15.339),t.closePath(),t[Tg](),t[mg](),t[vb](),t.restore(),t.restore(),t[eb](),t.save(),t[eb](),t.fillStyle = Dg,t[Vb](),t.moveTo(30.028, 23.383),t[G_](24.821, 20.366),t.lineTo(22.915, 21.227),t[G_](21.669, 16.762),t[G_](30.189, 17.942),t.lineTo(28.33, 18.782),t.lineTo(33.579, 21.725),t.lineTo(30.028, 23.383),t.closePath(),t.fill(),t.stroke(),t.restore(),t[vb](),t.save(),t.save(),t[ob] = Dg,t.beginPath(),t.moveTo(30.028, 23.383),t[G_](24.821, 20.366),t.lineTo(22.915, 21.227),t[G_](21.669, 16.762),t[G_](30.189, 17.942),t.lineTo(28.33, 18.782),t.lineTo(33.579, 21.725),t[G_](30.028, 23.383),t.closePath(),t.fill(),t[mg](),t[vb](),t.restore(),t.restore(),t.restore(),t.restore(),t[vb]()
            }
        }, exchanger: {
            draw: function (t) {
                t[eb](), t.translate(0, 0), t[Vb](), t[Y_](0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[G_](0, 40), t.closePath(), t.clip(), t[yo](0, 0), t.translate(0, 0), t[Co](1, 1), t.translate(0, 0), t[cb] = sg, t.lineCap = Dv, t[Wb] = Bv, t.miterLimit = 4, t.save(), t.save(), t[vb](), t.save(), t.restore(), t[eb](), t[vb](), t.save(), t[vb](), t.save(), t.restore(), t[eb](), t.restore(), t.save(), t.restore(), t.restore(), t[eb]();
                var i = t[ag](.2095, 20.7588, 39.4941, 20.7588);
                i[hg](0, Mg), i[hg](.0788, Ng), i[hg](.352, jg), i.addColorStop(.6967, Bg), i[hg](.8916, $g), i.addColorStop(.9557, Gg), i.addColorStop(1, Fg), t.fillStyle = i, t.beginPath(), t.moveTo(39.449, 12.417), t[G_](39.384, 9.424), t[qv](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[qv](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t[qv](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[qv](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[qv](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[qv](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[qv](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t.bezierCurveTo(37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t.lineTo(39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[qv](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[F_](), t.fill(), t[mg](), t[vb](), t.save(), t[eb](), t[eb](), t[eb](), t[vb](), t[eb](), t.restore(), t[eb](), t.restore(), t.save(), t[vb](), t.save(), t[vb](), t.save(), t[vb](), t[eb](), t.restore(), t.save(), t[vb](), t.save(), t.restore(), t[vb](), t[eb]();
                var i = t[ag](19.8052, 7.7949, 19.8052, 24.7632);
                i.addColorStop(0, zg), i[hg](.1455, Yg), i[hg](.2975, Hg), i.addColorStop(.4527, Ug), i[hg](.6099, qg), i[hg](.7687, Wg), i.addColorStop(.9268, Xg), i.addColorStop(.9754, Vg), i[hg](1, Kg), t.fillStyle = i, t[Vb](), t.moveTo(33.591, 24.763), t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[qv](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[qv](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[qv](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[qv](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[qv](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[qv](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[qv](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t.closePath(), t.fill(), t.stroke(), t.restore(), t[vb](), t.restore(), t[eb](), t[eb](), t[eb](), t[ob] = Dg, t.beginPath(), t.moveTo(10.427, 19.292), t[G_](5.735, 16.452), t.lineTo(12.58, 13.8), t.lineTo(12.045, 15.07), t[G_](20.482, 15.072), t[G_](19.667, 17.887), t.lineTo(11.029, 17.851), t.lineTo(10.427, 19.292), t.closePath(), t[Tg](), t[mg](), t.restore(), t.restore(), t.save(), t[eb](), t[ob] = Dg, t.beginPath(), t.moveTo(13.041, 13.042), t[G_](8.641, 10.73), t[G_](14.82, 8.474), t.lineTo(14.373, 9.537), t.lineTo(22.102, 9.479), t.lineTo(21.425, 11.816), t[G_](13.54, 11.85), t.lineTo(13.041, 13.042), t[F_](), t[Tg](), t.stroke(), t[vb](), t.restore(), t.save(), t[eb](), t.fillStyle = Dg, t.beginPath(), t[Y_](29.787, 16.049), t[G_](29.979, 14.704), t.lineTo(21.51, 14.706), t.lineTo(22.214, 12.147), t.lineTo(30.486, 12.116), t[G_](30.653, 10.926), t[G_](36.141, 13.4), t[G_](29.787, 16.049), t.closePath(), t.fill(), t[mg](), t.restore(), t.restore(), t[eb](), t[eb](), t[ob] = Dg, t[Vb](), t.moveTo(28.775, 23.14), t.lineTo(29.011, 21.49), t.lineTo(19.668, 21.405), t.lineTo(20.523, 18.295), t[G_](29.613, 18.338), t.lineTo(29.815, 16.898), t.lineTo(35.832, 19.964), t.lineTo(28.775, 23.14), t.closePath(), t[Tg](), t[mg](), t[vb](), t[vb](), t.restore(),t.restore()
            }
        }, cloud: {
            draw: function (t) {
                t.save(), t.beginPath(), t.moveTo(0, 0), t[G_](90.75, 0), t[G_](90.75, 62.125), t.lineTo(0, 62.125), t.closePath(), t.clip(), t.strokeStyle = sg, t[rg] = Dv, t.lineJoin = Bv, t.miterLimit = 4, t.save();
                var i = t[ag](44.0054, 6.4116, 44.0054, 51.3674);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, Zg), t[ob] = i, t[Vb](), t[Y_](57.07, 20.354), t[qv](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[qv](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t.bezierCurveTo(33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[qv](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[qv](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[qv](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[qv](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[qv](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t.closePath(), t.fill(), t[mg](), t.restore(), t.restore()
            }
        }, node: {
            width: 60, height: 100, draw: function (t) {
                t.save(), t[yo](0, 0), t[Vb](), t[Y_](0, 0), t[G_](40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t[F_](), t[Jg](), t[yo](0, 0), t.translate(0, 0), t[Co](1, 1), t[yo](0, 0), t[cb] = sg, t.lineCap = Dv, t[Wb] = Bv, t[Sg] = 4, t.save(), t[ob] = Qg, t.beginPath(), t[Y_](13.948, 31.075), t[G_](25.914, 31.075), t[ty](25.914, 31.075, 25.914, 31.075), t[G_](25.914, 34.862), t[ty](25.914, 34.862, 25.914, 34.862), t[G_](13.948, 34.862), t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862), t[G_](13.948, 31.075), t[ty](13.948, 31.075, 13.948, 31.075), t[F_](), t[Tg](), t.stroke(), t.restore(), t[eb](), t.fillStyle = iy, t.beginPath(), t.moveTo(29.679, 35.972), t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t[qv](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t.lineTo(10.183, 36.136), t[qv](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t.lineTo(28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t.lineTo(29.678, 35.972), t[F_](), t.fill(), t.stroke(), t[vb](), t[eb](), t.fillStyle = iy, t.beginPath(), t.moveTo(.196, 29.346), t[qv](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[G_](37.936, 31.075), t[qv](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t.lineTo(.196, 27.174), t.lineTo(.196, 29.346), t[F_](), t.fill(), t.stroke(), t.restore(), t[eb](), t.fillStyle = ey, t.beginPath(), t.moveTo(37.937, 3.884), t.lineTo(1.926, 3.884), t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[G_](.19699999999999984, 27.12), t[G_](39.666000000000004, 27.12), t[G_](39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[F_](), t.fill(), t.stroke(), t.restore(), t.save(), t[eb](), t.restore(), t.save(), t[vb](), t[vb](), t[eb]();
                var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                i[hg](0, ny), i.addColorStop(1, sy), t[ob] = i, t.beginPath(), t.moveTo(35.788, 6.39), t.lineTo(4.074, 6.39), t.bezierCurveTo(3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[G_](2.702, 24.616), t[G_](37.159, 24.616), t[G_](37.159, 7.763), t[qv](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t.closePath(), t.fill(), t[mg](), t[vb](), t.restore()
            }
        }, group: {
            draw: function (t) {
                t[eb](), t[yo](0, 0), t[Vb](), t.moveTo(0, 0), t.lineTo(47.75, 0), t[G_](47.75, 40), t.lineTo(0, 40), t[F_](), t[Jg](), t.translate(0, 0), t.translate(0, 0), t[Co](1, 1), t.translate(0, 0), t.strokeStyle = sg, t.lineCap = Dv, t[Wb] = Bv, t[Sg] = 4, t.save(), t.save(), t[ob] = Qg, t.beginPath(), t.moveTo(10.447, 26.005), t.lineTo(18.847, 26.005), t[ty](18.847, 26.005, 18.847, 26.005), t.lineTo(18.847, 28.663), t[ty](18.847, 28.663, 18.847, 28.663), t.lineTo(10.447, 28.663), t[ty](10.447, 28.663, 10.447, 28.663), t[G_](10.447, 26.005), t[ty](10.447, 26.005, 10.447, 26.005), t[F_](), t[Tg](), t.stroke(), t[vb](), t[eb](), t.fillStyle = iy, t[Vb](), t[Y_](21.491, 29.443), t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t.lineTo(8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t.bezierCurveTo(7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t[qv](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t.lineTo(21.491, 29.443), t[F_](), t.fill(), t[mg](), t[vb](), t.save(), t[ob] = iy, t[Vb](), t.moveTo(.789, 24.79), t[qv](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[G_](27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[G_](28.504, 23.267), t[G_](.789, 23.267), t[G_](.789, 24.79), t[F_](), t.fill(), t.stroke(), t[vb](), t.save(), t[ob] = ey, t[Vb](), t[Y_](27.289, 6.912), t[G_](2.006, 6.912), t[qv](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t.lineTo(.7889999999999997, 23.227), t.lineTo(28.503999999999998, 23.227), t[G_](28.503999999999998, 8.126), t[qv](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[F_](), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t[vb](), t.save(), t[vb](), t.restore(), t.save();
                var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                i.addColorStop(0, ny), i.addColorStop(1, sy), t[ob] = i, t[Vb](), t[Y_](25.78, 8.671), t.lineTo(3.514, 8.671), t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t.lineTo(26.743, 21.466), t[G_](26.743, 9.636), t[qv](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[F_](), t[Tg](), t[mg](), t[vb](), t.restore(), t.save(), t.save(), t.fillStyle = Qg, t.beginPath(), t.moveTo(27.053, 33.602), t[G_](36.22, 33.602), t[ty](36.22, 33.602, 36.22, 33.602), t[G_](36.22, 36.501), t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t[ty](27.053, 36.501, 27.053, 36.501), t.lineTo(27.053, 33.602), t[ty](27.053, 33.602, 27.053, 33.602), t[F_](), t[Tg](), t.stroke(), t[vb](), t[eb](), t[ob] = iy, t.beginPath(), t.moveTo(39.104, 37.352), t[qv](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[G_](25.143, 38.327), t[qv](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t[G_](24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t[qv](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t.lineTo(39.105, 37.352), t[F_](), t[Tg](), t[mg](), t[vb](), t.save(), t[ob] = iy, t[Vb](), t.moveTo(16.514, 32.275), t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t.lineTo(45.433, 33.601), t[qv](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[G_](46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t[G_](16.514, 32.275), t.closePath(), t[Tg](), t.stroke(), t.restore(), t[eb](), t[ob] = ey, t.beginPath(), t[Y_](45.433, 12.763), t[G_](17.839, 12.763), t[qv](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t.lineTo(16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t[G_](46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t[vb](), t.save(), t[vb](), t.restore(), t.save(), i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, ny), i[hg](1, sy), t[ob] = i, t[Vb](), t[Y_](43.785, 14.683), t.lineTo(19.486, 14.683), t[qv](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[G_](44.837, 28.649), t.lineTo(44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t.closePath(), t.fill(), t[mg](), t.restore(), t.restore(),t[eb](),t[ry] = .5,t.beginPath(),t[Y_](23.709, 36.33),t[G_](4.232, 36.33),t[G_](4.232, 27.199),t[G_](5.304, 27.199),t.lineTo(5.304, 35.259),t[G_](23.709, 35.259),t[G_](23.709, 36.33),t.closePath(),t[Tg](),t.stroke(),t[vb](),t[vb]()
            }
        }, subnetwork: {
            draw: function (t) {
                t[eb](), t[yo](0, 0), t.beginPath(), t[Y_](0, 0), t[G_](60.75, 0), t.lineTo(60.75, 42.125), t[G_](0, 42.125), t[F_](), t.clip(), t.translate(0, .26859504132231393), t[Co](.6694214876033058, .6694214876033058), t.translate(0, 0), t.strokeStyle = sg, t[rg] = Dv, t.lineJoin = Bv, t.miterLimit = 4, t[eb](), t[eb](), t.restore(), t.save(), t[vb](), t.restore(), t[eb]();
                var i = t[ag](43.6724, -2.7627, 43.6724, 59.3806);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, Zg), t.fillStyle = i, t[Vb](), t.moveTo(61.732, 16.509), t[qv](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[qv](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[qv](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[qv](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t[qv](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[qv](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t[qv](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t.closePath(), t[Tg](), t.stroke(), t[vb](), t.save(), t[eb](), t[ob] = Qg, t.beginPath(), t[Y_](34.966, 44.287), t[G_](45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t[G_](45.112, 47.497), t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t[ty](34.966, 47.497, 34.966, 47.497), t[G_](34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t.closePath(), t[Tg](), t.stroke(), t.restore(), t.save(), t.fillStyle = ay, t.beginPath(), t[Y_](48.306, 48.439), t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[G_](31.771, 48.578), t[qv](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[G_](47.226, 47.497), t[qv](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[G_](48.306, 48.439), t[F_](), t[Tg](), t.stroke(), t[vb](), t.save(), t.fillStyle = hy, t[Vb](), t.moveTo(23.302, 42.82), t[qv](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[qv](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[G_](56.775, 40.98), t[G_](23.302, 40.98), t.lineTo(23.302, 42.82), t.closePath(), t.fill(), t[mg](), t[vb](), t[eb](), t[ob] = ey, t.beginPath(), t.moveTo(55.307, 21.229), t.lineTo(24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[G_](23.301000000000002, 40.933), t[G_](56.774, 40.933), t.lineTo(56.774, 22.695), t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[F_](), t[Tg](), t[mg](), t.restore(), t[eb](), t.save(), t.restore(), t.save(), t.restore(), t.restore(), t.save(), i = t[ag](29.04, 20.4219, 51.0363, 42.4181), i[hg](0, ny), i[hg](1, sy), t[ob] = i, t.beginPath(), t[Y_](53.485, 23.353), t[G_](26.592, 23.353), t[qv](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[G_](25.427, 38.807), t[G_](54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(),t[Tg](),t[mg](),t.restore(),t.restore(),t[vb]()
            }
        }
    };
    for (var hN in aN)ye(oy + hN, aN[hN]);
    var oN = function () {
        this[_y] = !1;
        var t = this._fp;
        t.clear();
        var i = this._7w.x + this.$border / 2, e = this._7w.y + this[$o] / 2, n = this._7w.width - this.$border, s = this._7w.height - this.$border, r = Fe[Br](this, {
            x: i,
            y: e
        });
        Ue(t, r.x, r.y, !0), r = Fe.call(this, {x: i + n, y: e}), Ue(t, r.x, r.y), r = Fe[Br](this, {
            x: i + n,
            y: e + s
        }), Ue(t, r.x, r.y), r = Fe[Br](this, {
            x: i,
            y: e + s
        }), Ue(t, r.x, r.y), this.__mePointer && (r = Fe[Br](this, {
            x: this._pointerX,
            y: this._pointerY
        }), Ue(t, r.x, r.y)), this.$border && t[Go](this[$o] / 2)
    }, _N = 20, fN = {
        _gn: !1, _j7: null, _na1: 0, _lg: -1, _lm: null, _f1: function (t) {
            this._j7 || (this._j7 = [], this._jg = jM), this._j7.push(t), this._dm(), this._ke()
        }, _ke: function () {
            if (!this._lm) {
                var t = this;
                this._lm = setTimeout(function i() {
                    return t._dm() !== !1 ? void(t._lm = setTimeout(i, t._gl())) : void delete t._lm
                }, this._gl())
            }
        }, _gl: function () {
            return Math[Uh](_N, this._j7[this._lg].delay)
        }, _dm: function () {
            return this._gi(this._lg + 1)
        }, _gi: function (t) {
            if (this._gn)t %= this._na1; else if (t >= this._j7.length)return !1;
            if (this._lg == t)return !1;
            this._lg = t;
            var i = this._j7[this._lg], e = i._naache;
            return e || (i._naache = e = Bi(this[Ah], this[Dh]), e.g[ib](i.data, 0, 0), e._pixels = i._pixels), this._kb = e, this[No] = !0, this._e5()
        }, _naw: function () {
            return this._j7 ? (this._gn = !0, this._na1 = this._j7.length, 1 == this._na1 ? this._e5() : void this._ke()) : void this._i1()
        }, _lw: function () {
            this._lm && (clearTimeout(this._lm), delete this._lm)
        }, _e5: function () {
            var t = this._dispatcher.listeners;
            if (!t || !t[$r])return !1;
            for (var i = new jD(this, wb, Ob, this._kb), e = 0, n = t[$r]; n > e; e++) {
                var s = t[e];
                s.scope._ja && s.scope._ja._hsed ? (t.splice(e, 1), e--, n--) : s[va].call(s[ca], i)
            }
            return t.length > 0
        }, _n9h: function (t, i) {
            this._dispatcher[qc](t, i), this._gn && !this._lm && this._ke()
        }, _6m: function (t, i) {
            this._dispatcher[yd](t, i), this._dispatcher._n9q() || this._lw()
        }, _hs: function () {
            this._lw(), this._dispatcher.clear()
        }, _fl: function () {
            var t = this._kb._ncufferedImage;
            return t || (this._kb._ncufferedImage = t = new sN(this._kb, 1)), t
        }
    }, cN = function (t) {
        return t[fy](function (t, i) {
            return 2 * t + i
        }, 0)
    }, uN = function (t) {
        for (var i = [], e = 7; e >= 0; e--)i.push(!!(t & 1 << e));
        return i
    }, dN = function (t) {
        this[no] = t, this[cy] = this.data[$r], this[uy] = 0, this.readByte = function () {
            if (this[uy] >= this.data[$r])throw new Error("Attempted to read past end of stream.");
            return 255 & t[dy](this[uy]++)
        }, this.readBytes = function (t) {
            for (var i = [], e = 0; t > e; e++)i[Qh](this[ly]());
            return i
        }, this.read = function (t) {
            for (var i = "", e = 0; t > e; e++)i += String[g_](this.readByte());
            return i
        }, this[vy] = function () {
            var t = this.readBytes(2);
            return (t[1] << 8) + t[0]
        }
    }, lN = function (t, i) {
        for (var e, n, s = 0, r = function (t) {
            for (var e = 0, n = 0; t > n; n++)i[dy](s >> 3) & 1 << (7 & s) && (e |= 1 << n), s++;
            return e
        }, a = [], h = 1 << t, o = h + 1, _ = t + 1, f = [], c = function () {
            f = [], _ = t + 1;
            for (var i = 0; h > i; i++)f[i] = [i];
            f[h] = [], f[o] = null
        }; ;)if (n = e, e = r(_), e !== h) {
            if (e === o)break;
            if (e < f.length)n !== h && f[Qh](f[n].concat(f[e][0])); else {
                if (e !== f[$r])throw new Error(by);
                f.push(f[n][Yr](f[n][0]))
            }
            a.push.apply(a, f[e]), f.length === 1 << _ && 12 > _ && _++
        } else c();
        return a
    }, vN = function (t, i) {
        i || (i = {});
        var e = function (i) {
            for (var e = [], n = 0; i > n; n++)e.push(t.readBytes(3));
            return e
        }, n = function () {
            var i, e;
            e = "";
            do i = t[ly](), e += t[gy](i); while (0 !== i);
            return e
        }, s = function () {
            var n = {};
            if (n[yy] = t.read(3), n.ver = t[gy](3), Ey !== n[yy])throw new Error(py);
            n.width = t.readUnsigned(), n[Dh] = t[vy]();
            var s = uN(t.readByte());
            n[my] = s.shift(), n[xy] = cN(s.splice(0, 3)), n.sorted = s[Ty](), n[wy] = cN(s[zr](0, 3)), n.bgColor = t.readByte(), n[Oy] = t[ly](), n[my] && (n.gct = e(1 << n.gctSize + 1)), i.hdr && i.hdr(n)
        }, r = function (e) {
            var s = function (e) {
                var n = (t.readByte(), uN(t[ly]()));
                e[Sy] = n[zr](0, 3), e[ky] = cN(n[zr](0, 3)), e.userInput = n.shift(), e.transparencyGiven = n.shift(), e[s_] = t[vy](), e[Iy] = t[ly](), e[Ly] = t.readByte(), i[Ay] && i.gce(e)
            }, r = function (t) {
                t[Cy] = n(), i.com && i[Ry](t)
            }, a = function (e) {
                t[ly](), e[Py] = t.readBytes(12), e[Dy] = n(), i[My] && i.pte(e)
            }, h = function (e) {
                var s = function (e) {
                    t[ly](), e[Ny] = t[ly](), e.iterations = t.readUnsigned(), e[Ly] = t.readByte(), i.app && i[jy][By] && i[jy].NETSCAPE(e)
                }, r = function (t) {
                    t.appData = n(), i[jy] && i[jy][t.identifier] && i.app[t[$y]](t)
                };
                switch (t[ly](), e[$y] = t.read(8), e[Gy] = t[gy](3), e[$y]) {
                    case"NETSCAPE":
                        s(e);
                        break;
                    default:
                        r(e)
                }
            }, o = function (t) {
                t[no] = n(), i.unknown && i.unknown(t)
            };
            switch (e[Fy] = t[ly](), e[Fy]) {
                case 249:
                    e[zy] = Ay, s(e);
                    break;
                case 254:
                    e.extType = Ry, r(e);
                    break;
                case 1:
                    e.extType = My, a(e);
                    break;
                case 255:
                    e.extType = jy, h(e);
                    break;
                default:
                    e.extType = Ny, o(e)
            }
        }, a = function (s) {
            var r = function (t, i) {
                for (var e = new Array(t[$r]), n = t.length / i, s = function (n, s) {
                    var r = t[Fr](s * i, (s + 1) * i);
                    e.splice.apply(e, [n * i, i][Yr](r))
                }, r = [0, 4, 2, 1], a = [8, 8, 4, 2], h = 0, o = 0; 4 > o; o++)for (var _ = r[o]; n > _; _ += a[o])s(_, h), h++;
                return e
            };
            s[o_] = t.readUnsigned(), s.topPos = t.readUnsigned(), s[Ah] = t[vy](), s[Dh] = t[vy]();
            var a = uN(t.readByte());
            s[r_] = a[Ty](), s[Yy] = a[Ty](), s.sorted = a.shift(), s[Sy] = a[zr](0, 2), s.lctSize = cN(a.splice(0, 3)), s[r_] && (s.lct = e(1 << s.lctSize + 1)), s.lzwMinCodeSize = t.readByte();
            var h = n();
            s.pixels = lN(s[Hy], h), s[Yy] && (s[Uy] = r(s[Uy], s[Ah])), i.img && i[Qf](s)
        }, h = function () {
            var e = {};
            switch (e.sentinel = t.readByte(), String[g_](e[qy])) {
                case"!":
                    e[ao] = Wy, r(e);
                    break;
                case",":
                    e.type = Qf, a(e);
                    break;
                case";":
                    e[ao] = Xy, i[Xy] && i[Xy](e);
                    break;
                default:
                    throw new Error(Vy + e[qy].toString(16))
            }
            Xy !== e.type && setTimeout(h, 0)
        }, o = function () {
            s(), setTimeout(h, 0)
        };
        o()
    }, bN = "";
    i.addEventListener && i.addEventListener(Ky, function (t) {
        if (t.ctrlKey && t[Zy] && t.altKey && 73 == t[Jy]) {
            var i = mM.name + Qy + mM.version + tE + mM[iE] + Hh + mM[eE] + Hh + mM.copyright + bN;
            mM.alert(i)
        }
    }, !1);
    var gN = nE;
    bN = sE + decodeURIComponent(rE);
    var yN, EN, pN, mN = t, xN = aE, TN = hE, wN = oE, ON = _E, SN = fE, kN = cE, IN = uE, LN = dE, AN = lE, CN = vE, RN = bE, PN = gE, DN = yE, MN = EE, NN = pE, jN = mE, BN = xE, $N = TE, GN = wE, FN = OE, zN = SE, YN = mN[ON + kE];
    YN && (EN = mN[MN + IE][SN + LE], YN.call(mN, Je, jN), YN[Br](mN, Qe, GN), YN[Br](mN, function () {
        UN && UN == gN && (ij = !1)
    }, BN));
    var HN, UN, qN, WN = 111, XN = function (t, i) {
        i || (i = '');
        try {
            pN.call(t, i, 6 * WN, 1 * WN)
        } catch (e) {
        }
    }, VN = !0, KN = !0, ZN = !0, JN = !0, QN = !0, tj = !0, ij = !0, ej = dD ? 200 : 1024, nj = function (t, i) {
        return Ze ? Ze(t, i) || "" : void 0
    };
    if (i.createElement) {
        var sj = i.createElement(RE);
        sj.style.display = hc, sj.onload = function (t) {
            var i = t.target[PE], e = EN;
            if ("" === e || DE == e || ME == e)return void this.parentNode[Qv].removeChild(this[Qv]);
            var n = i[NE].fromCharCode;
            i[ON + kE](function () {
                Ke(n) != HN && (lj.prototype._jc = null)
            }, GN), this.parentNode.parentNode.removeChild(this[Qv])
        };
        var rj = i[Jf](Vf);
        rj.style[Ah] = uc, rj[zc].height = uc, rj[zc].overflow = ac, rj[vf](sj), i.documentElement[vf](rj)
    }
    if (i[NN + jE]) {
        var aj = i[NN + jE](AN + BE);
        aj[zc].display = hc, aj.onload = function (t) {
            var i = $E, e = t.target[i + GE];
            yN = e.Date[Il]();
            var n = e[CN + RN + FE + PN + zE][DN + ao];
            pN = n[xN + YE];
            var s = e[ON + kE];
            /*s[Br](mN,sn,GN),s[Br](mN,rn,FN),s[Br](mN,hn,zN),s[Br](mN,on,BN),s.call(mN,tn,$N),s.call(mN,nn,zN),s.call(mN,an,GN),s.call(mN,en,GN),*/
            this.parentNode.parentNode[Gd](this[Qv])
        };
        var rj = i[Jf](Vf);
        rj.style[Ah] = uc, rj.style[Dh] = uc, rj.style.overflow = ac, rj.appendChild(aj), i[HE].appendChild(rj)
    }
    var hj = function (t, i, e, n) {
        this.source = t, this.kind = i, this.oldValue = n, this[Ic] = e, this.propertyType = xM[UE]
    };
    N(hj, BD);
    var oj = function (t) {
        this.id = ++QP, this._na7 = {}, this._j0 = {}, t && (this[qE] = t)
    };
    oj.prototype = {
        _j0: null, getStyle: function (t) {
            return this._j0[t]
        }, setStyle: function (t, i) {
            var e = this._j0[t];
            return e === i || e && i && e.equals && e[gd](i) ? !1 : this._n97(t, i, new hj(this, t, i, e), this._j0)
        }, putStyles: function (t, i) {
            for (var e in t) {
                var n = t[e];
                i ? this._j0[e] = n : this.setStyle(e, n)
            }
        }, _$x: !0, invalidateVisibility: function (t) {
            this._$x = !0, t || (this instanceof fj && this[WE]() && this.forEachEdge(function (t) {
                t._$x = !0
            }), this._i0() && this.hasChildren() && this[$_](function (t) {
                t.invalidateVisibility()
            }))
        }, onParentChanged: function () {
            this.invalidateVisibility()
        }, _i0: function () {
            return !this._4f && this instanceof dj
        }, invalidate: function () {
            this.onEvent(new jD(this, XE, VE))
        }, _nad: null, addUI: function (t, i) {
            if (this._nad || (this._nad = new ED), this._nad.containsById(t.id))return !1;
            var e = {id: t.id, ui: t, bindingProperties: i};
            this._nad[Vr](e);
            var n = new jD(this, XE, Vr, e);
            return this.onEvent(n)
        }, removeUI: function (t) {
            if (!this._nad)return !1;
            var i = this._nad.getById(t.id);
            return i ? (this._nad.remove(i), void this.onEvent(new jD(this, XE, Zr, i))) : !1
        }, toString: function () {
            return this.$name || this.id
        }, type: KE, _4f: !1, _hw: !0
    }, N(oj, XD), U(oj.prototype, [ZE, vo, JE]), Z(oj[_a], {
        enableSubNetwork: {
            get: function () {
                return this._4f
            }, set: function (t) {
                if (this._4f != t) {
                    var i = this._4f;
                    this._4f = t, this instanceof fj && this._18(), this[va](new BD(this, QE, t, i))
                }
            }
        }, bindingUIs: {
            get: function () {
                return this._nad
            }
        }, styles: {
            get: function () {
                return this._j0
            }, set: function (t) {
                if (this._j0 != t) {
                    for (var i in this._j0)i in t || (t[i] = e);
                    this.putStyles(t), this._j0 = t
                }
            }
        }
    });
    var _j = function (t, i, e) {
        this.id = ++QP, this._na7 = {}, this._j0 = {}, e && (this.$name = e), this.$from = t, this.$to = i, this.connect()
    };
    _j.prototype = {
        $uiClass: as,
        _k0: null,
        _hq: null,
        _k1: null,
        _ht: null,
        _er: !1,
        type: tp,
        otherNode: function (t) {
            return t == this[Zc] ? this.to : t == this.to ? this[Zc] : void 0
        },
        connect: function () {
            if (this._er)return !1;
            if (!this[rf] || !this.$to)return !1;
            if (this._er = !0, this.$from == this[B_])return void this[rf]._ii(this);
            wn(this[B_], this), xn(this[rf], this), fn(this.$from, this, this[B_]);
            var t = this[R_], i = this[A_];
            if (t != i) {
                var e;
                this.$from._dk && (un(t, this, i), e = !0), this.$to._dk && (ln(i, this, t), e = !0), e && fn(t, this, i)
            }
        },
        disconnect: function () {
            if (!this._er)return !1;
            if (this._er = !1, this.$from == this.$to)return void this.$from._nam(this);
            Tn(this[rf], this), On(this.$to, this), cn(this.$from, this, this[B_]);
            var t = this[R_], i = this.toAgent;
            if (t != i) {
                var e;
                this.$from._dk && (dn(t, this, i), e = !0), this[B_]._dk && (vn(i, this, t), e = !0), e && cn(t, this, i)
            }
        },
        isConnected: function () {
            return this._er
        },
        isInvalid: function () {
            return !this[rf] || !this.$to
        },
        isLooped: function () {
            return this[rf] == this.$to
        },
        getEdgeBundle: function (t) {
            return t ? this._3i() : this.isLooped() ? this[rf]._4i : this[rf].getEdgeBundle(this.$to)
        },
        hasEdgeBundle: function () {
            var t = this[C_](!0);
            return t && t[ip].length > 1
        },
        _3i: function () {
            var t = this.fromAgent, i = this.toAgent;
            return t == i ? this[rf]._dk || this[B_]._dk ? null : this[rf]._4i : this[R_].getEdgeBundle(this[A_])
        },
        _9d: null,
        hasPathSegments: function () {
            return this._9d && !this._9d.isEmpty()
        },
        isBundleEnabled: function () {
            return this.bundleEnabled && !this[Gf]()
        },
        firePathChange: function (t) {
            this.onEvent(new BD(this, ep, t))
        },
        addPathSegment: function (t, i, e) {
            var n = new iN(i || KM, t);
            this._9d || (this._9d = new ED), this._9d.add(n, e), this.firePathChange(n)
        },
        addPathSegement: function () {
            return this.addPathSegment[ha](this, arguments)
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9d)return !1;
            var i = this._9d[Yd](t);
            i && (this._9d.remove(i), this[np](i))
        },
        removePathSegment: function (t) {
            return this._9d ? (this._9d.remove(t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function (t, i, e) {
            if (!this._9d)return !1;
            if (t = t || 0, i = i || 0, mM.isNumber(e)) {
                var n = this._9d.getByIndex(e);
                return n ? (n.move(t, i), void this.firePathChange()) : !1
            }
            l(function (e) {
                e.move(t, i)
            }), this.firePathChange()
        }
    }, N(_j, oj), Z(_j[_a], {
        pathSegments: {
            get: function () {
                return this._9d
            }, set: function (t) {
                mM[ia](t) && (t = new ED(t)), this._9d = t, this[np]()
            }
        }, from: {
            get: function () {
                return this[rf]
            }, set: function (t) {
                if (this.$from != t) {
                    var i = new BD(this, Zc, t, this[rf]);
                    this.beforeEvent(i) !== !1 && (this[Bd](), this.$from = t, this[sp](), this[va](i))
                }
            }
        }, to: {
            get: function () {
                return this.$to
            }, set: function (t) {
                if (this[B_] != t) {
                    var i = new BD(this, rp, t, this[B_]);
                    this[bd](i) !== !1 && (this.disconnect(), this[B_] = t, this.connect(), this[va](i))
                }
            }
        }, fromAgent: {
            get: function () {
                return this.$from ? this.$from._dk || this.$from : null
            }
        }, toAgent: {
            get: function () {
                return this.$to ? this.$to._dk || this.$to : null
            }
        }
    }), U(_j.prototype, [Uf, {name: ap, value: !0}, Ff]);
    var fj = function (t, i, e) {
        this.id = ++QP, this._na7 = {}, this._j0 = {}, t && (this.$name = t), this[hp] = op, this[_p] = ID[Hu], this[fp] = {
            x: i || 0,
            y: e || 0
        }, this._linkedNodes = {}
    };
    fj.prototype = {
        $uiClass: hs, _dk: null, forEachEdge: function (t, i, e) {
            return !e && this._kk && this._kk.forEach(t, i) === !1 ? !1 : kn(this, t, i)
        }, forEachOutEdge: function (t, i) {
            return In(this, t, i)
        }, forEachInEdge: function (t, i) {
            return Ln(this, t, i)
        }, getEdges: function () {
            var t = [];
            return this[iu](function (i) {
                t.push(i)
            }), t
        }, _ib: null, _g3: null, _iz: null, _ho: null, _n9a: 0, _99: 0, hasInEdge: function () {
            return null != this._ib
        }, hasOutEdge: function () {
            return null != this._g3
        }, hasEdge: function () {
            return null != this._ib || null != this._g3 || this.hasLoops()
        }, linkedWith: function (t) {
            return t[Zc] == this || t.to == this || t[R_] == this || t[A_] == this
        }, hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i[ip].length > 0
        }, _kk: null, _4i: null, hasLoops: function () {
            return this._kk && this._kk.length > 0
        }, _ii: function (t) {
            return this._kk || (this._kk = new ED, this._4i = new kB(this, this, this._kk)), this._4i._ij(t)
        }, _nam: function (t) {
            return this._4i ? this._4i._nac(t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._4i : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        }, _7c: function () {
            return this._9n && this._9n[$r]
        }, _5c: function () {
            return this._80 && this._80[$r]
        }, _91: function () {
            return this._7c() || this._5c()
        }, _80: null, _9n: null, _na4: function () {
            var t = this._dk, i = _n(this);
            if (t != i) {
                var e = Sn(this);
                this._8w(i), e[l_](function (t) {
                    var i = t.fromAgent, e = t[A_], t = t.edge, n = t[rf]._dk, s = t.$to._dk;
                    i != e && (i && dn(i, t, e || t[B_]), e && vn(e, t, i || t.$from)), n != s && (n && un(n, t, s || t[B_]), s && ln(s, t, n || t.$from), fn(n || t.$from, t, s || t.$to))
                }, this)
            }
        }, onParentChanged: function () {
            this[cp](), this._na4()
        }, _7y: null, _18: function () {
            var t;
            if (this._4f ? t = null : (t = this._dk, t || this._gh !== !1 || (t = this)), this._7y == t)return !1;
            if (this._7y = t, this._fs && this._fs._ix.length)for (var i, e = this._fs._ix, n = 0, s = e[$r]; s > n; n++)i = e[n], i instanceof fj && i._8w(t)
        }, setLocation: function (t, i) {
            if (this[fp] && this[fp].x == t && this.$location.y == i)return !1;
            var e = new BD(this, up, this.$location, {x: t, y: i});
            return this[bd](e) === !1 ? !1 : (this.$location ? (this[fp].x = t, this.$location.y = i) : this[fp] = new xD(t, i), this.onEvent(e), !0)
        }, _e0: null, addFollower: function (t) {
            return null == t ? !1 : t.host = this
        }, removeFollower: function (t) {
            return this._e0 && this._e0.contains(t) ? t.host = null : !1
        }, hasFollowers: function () {
            return this._e0 && !this._e0.isEmpty()
        }, toFollowers: function () {
            return this[P_]() ? this._e0.toDatas() : null
        }, clearFollowers: function () {
            this.hasFollowers() && (this[dp](), l(this.toFollowers(), function (t) {
                t.host = null
            }))
        }, getFollowerIndex: function (t) {
            return this._e0 && this._e0.contains(t) ? this._e0.indexOf(t) : -1
        }, setFollowerIndex: function (t, i) {
            return this._e0 && this._e0[Hf](t) ? void this._e0[lp](t, i) : -1
        }, getFollowerCount: function () {
            return null == !this._e0 ? 0 : this._e0[$r]
        }, _8y: function () {
            return this._e0 ? this._e0 : (this._e0 = new ED, this._e0)
        }, isFollow: function (t) {
            if (!t || !this._host)return !1;
            for (var i = this._host; i;) {
                if (i == t)return !0;
                i = i._host
            }
            return !1
        }, _8w: function (t) {
            return t == this._dk ? !1 : (this._dk = t, this[cp](), void this._18())
        }, type: vp
    }, N(fj, oj), Z(fj[_a], {
        loops: {
            get: function () {
                return this._kk
            }
        }, edgeCount: {
            get: function () {
                return this._n9a + this._99
            }
        }, agentNode: {
            get: function () {
                return this._dk || this
            }
        }, host: {
            set: function (t) {
                if (this == t || t == this._host)return !1;
                var i = new BD(this, bp, this._host, t);
                if (!1 === this.beforeEvent(i))return !1;
                var e = null, n = null, s = this._host;
                if (null != t && (e = new BD(t, gp, null, this), !1 === t.beforeEvent(e)))return !1;
                if (null != s && (n = new BD(s, yp, null, this), !1 === s[bd](n)))return !1;
                if (this._host = t, null != t) {
                    var r = t._8y();
                    r[Vr](this)
                }
                if (null != s) {
                    var r = s._8y();
                    r[Zr](this)
                }
                return this[va](i), null != t && t.onEvent(e), null != s && s.onEvent(n), !0
            }, get: function () {
                return this._host
            }
        }
    }), U(fj[_a], [up, Ep, wb, ho, pp]), Z(fj[_a], {
        x: {
            get: function () {
                return this[up].x
            }, set: function (t) {
                t != this.location.x && (this[up] = new xD(t, this[up].y))
            }
        }, y: {
            get: function () {
                return this.location.y
            }, set: function (t) {
                t != this.location.y && (this[up] = new xD(this.location.x, t))
            }
        }
    });
    var cj = function (t, i) {
        t instanceof nN && (i = t, t = e), j(this, cj, [t]), this.$path = i || new nN, this[wb] = this[mp], this.anchorPosition = null, this[ZE] = nr, gD[xp] || (gD.SHAPENODE_STYLES = {}, gD.SHAPENODE_STYLES[bj.ARROW_TO] = !1), this[Tp](gD.SHAPENODE_STYLES)
    };
    cj[_a] = {
        $uiClass: nr, type: wp, moveTo: function (t, i) {
            this.path.moveTo(t, i), this.firePathChange()
        }, lineTo: function (t, i) {
            this.path.lineTo(t, i), this.firePathChange()
        }, quadTo: function (t, i, e, n) {
            this[Op][z_](t, i, e, n), this[np]()
        }, curveTo: function (t, i, e, n, s, r) {
            this[Op][H_](t, i, e, n, s, r), this[np]()
        }, arcTo: function (t, i, e, n, s) {
            this[Op][Uv](t, i, e, n, s), this[np]()
        }, closePath: function () {
            this[Op][F_](), this[np]()
        }, clear: function () {
            this[Op].clear(), this.firePathChange()
        }, removePathSegmentByIndex: function (t) {
            this.path.removePathSegment(t) !== !1 && this.firePathChange()
        }, firePathChange: function () {
            this.path._6f = !0, this[va](new BD(this, ep))
        }
    }, N(cj, fj), U(cj.prototype, [Op]), Z(cj.prototype, {
        pathSegments: {
            get: function () {
                return this[Op].segments
            }, set: function (t) {
                this[Op].segments = t || [], this[np]()
            }
        }, length: {
            get: function () {
                return this[Op][$r]
            }
        }
    }), mM[Sp] = cj;
    var uj = {
        _jv: {}, register: function (t, i) {
            uj._jv[t] = i
        }, getShape: function (t, i, n, s, r, a) {
            s === e && (s = i, r = n, i = 0, n = 0), s || (s = 50), r || (r = 50);
            var h = uj._jv[t];
            return h ? h[kp]instanceof Function ? h[kp](i, n, s, r, a) : h : void 0
        }, getRect: function (t, i, e, n, s, r, a) {
            return An(a || new nN, t, i, e, n, s, r)
        }, getAllShapes: function (t, i, e, n, s) {
            var r = {};
            for (var a in uj._jv) {
                var h = uj[Df](a, t, i, e, n, s);
                h && (r[a] = h)
            }
            return r
        }, createRegularShape: function (t, i, e, n, s) {
            return jn(t, i, e, n, s)
        }
    };
    Kn(), Zn[_a] = {type: Ip}, N(Zn, cj), mM[Lp] = Zn, Jn[_a] = {
        _gc: function (t) {
            var i, e = t._ja;
            i = e ? e._fs : this[jd];
            var n = i.indexOf(t);
            if (0 > n)throw new Error(zd + t + "' not exist in the box");
            for (; n >= 0;) {
                if (0 == n)return e instanceof fj ? e : null;
                n -= 1;
                var r = i.getByIndex(n);
                if (r = s(r))return r
            }
            return null
        }, forEachNode: function (t, i) {
            this[l_](function (e) {
                return e instanceof fj && t.call(i, e) === !1 ? !1 : void 0
            })
        }, _41: null
    }, N(Jn, KD), Z(Jn[_a], {
        propertyChangeDispatcher: {
            get: function () {
                return this._13
            }
        }, randomNode: {
            get: function () {
                return this._kdModel[Ap]
            }
        }, currentSubNetwork: {
            get: function () {
                return this._41
            }, set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._41 != t) {
                    var i = this._41;
                    this._41 = t, this._13.onEvent(new BD(this, Cp, t, i))
                }
            }
        }
    }), gD.GROUP_TYPE = xM[Rp], gD[Pp] = 5, gD.GROUP_EXPANDED = !0, gD.GROUP_MIN_SIZE = {width: 60, height: 60};
    var dj = function (t, i, n) {
        j(this, dj, arguments), (i === e || n === e) && (this.$location[Dp] = !0), this[Mp] = gD[Np], this.$padding = gD.GROUP_PADDING, this[hp] = aN.group, this.$minSize = gD.GROUP_MIN_SIZE, this.expanded = gD[jp]
    };
    dj.prototype = {
        type: Bp, $uiClass: Js, _9q: function () {
            return !this._gh && !this._dk
        }, forEachOutEdge: function (t, i, e) {
            return In(this, t, i) === !1 ? !1 : !e && this._9q() && this._80 ? this._80[l_](t, i) : void 0
        }, forEachInEdge: function (t, i, e) {
            return Ln(this, t, i) === !1 ? !1 : !e && this._9q() && this._9n ? this._9n[l_](t, i) : void 0
        }, forEachEdge: function (t, i, e) {
            return B(this, dj, iu, arguments) === !1 ? !1 : e || e || !this._9q() ? void 0 : this._9n && this._9n[l_](t, i) === !1 ? !1 : this._80 ? this._80.forEach(t, i) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._ib : null != this._ib || this._7c()
        }, hasOutEdge: function (t) {
            return t ? null != this._g3 : null != this._g3 || this._5c()
        }, hasEdge: function (t) {
            return t ? null != this._ib || null != this._g3 : null != this._ib || null != this._g3 || this._91()
        }
    }, N(dj, fj), Z(dj[_a], {
        expanded: {
            get: function () {
                return this._gh
            }, set: function (t) {
                if (this._gh != t) {
                    var i = new BD(this, $p, t, this._gh);
                    this.beforeEvent(i) !== !1 && (this._gh = t, this._18(), this.onEvent(i), this._dk || Qn[Br](this))
                }
            }
        }
    }), U(dj[_a], [Gp, Fp, go, zp]), mM[Yp] = dj, ts[_a].type = Hp, N(ts, fj), mM[Up] = ts;
    var lj = function (t) {
        this._j6 = new SD, this._7w = new SD, this._fp = new SD, this.id = ++QP, t && (this.data = t)
    };
    lj[_a] = {
        invalidate: function () {
            this.invalidateData()
        },
        _1x: !0,
        _j6: null,
        _7w: null,
        _fp: null,
        _n9m: !1,
        _j8: 1,
        _j9: 1,
        _hw: !0,
        _87: 0,
        _6i: 0,
        _ja: null,
        _n9p: null,
        borderColor: qp,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1l: function () {
            this[Wp] = oi(this.anchorPosition, this._87, this._6i)
        },
        setMeasuredBounds: function (t, i, e, n) {
            return t instanceof Object && (e = t.x, n = t.y, i = t[Dh], t = t[Ah]), this._j6[Ah] == t && this._j6[Dh] == i && this._j6.x == e && this._j6.y == n ? !1 : void this._j6[Uo](e || 0, n || 0, t || 0, i || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _89: function (t, i, e) {
            e.selectionType == xM[$v] ? (t[bb] = e[Xp], t.shadowBlur = e.selectionShadowBlur * i, t.shadowOffsetX = (e[Vp] || 0) * i, t[Eb] = (e.selectionShadowOffsetY || 0) * i) : this._2h(t, i, e)
        },
        _2h: function (t, i, e) {
            var n = e.selectionBorder || 0;
            e[Kp] && (t[ob] = e[Kp], t.fillRect(this._7w.x - n / 2, this._7w.y - n / 2, this._7w[Ah] + n, this._7w[Dh] + n)), t.strokeStyle = e.selectionColor, t[so] = n, t[Zp](this._7w.x - n / 2, this._7w.y - n / 2, this._7w[Ah] + n, this._7w[Dh] + n)
        },
        _jc: function (t, i, e, n) {
            if (!this._hw)return !1;
            if (this.syncSelection || (e = this.selected), (e && !this.syncSelectionStyles || !n) && (n = this), t.save(), 1 != this.$alpha && (t[ry] = this.$alpha), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t[ho](this.$_hostRotate), (this.offsetX || this.offsetY) && t.translate(this.offsetX, this.offsetY), this[Jp] && t[ho](this[Jp]), this[Ro] && this._n9p && t[yo](-this._n9p.x, -this._n9p.y), this.shadowColor && (t.shadowColor = this.shadowColor, t.shadowBlur = this[gb] * i, t.shadowOffsetX = this[yb] * i, t[Eb] = this.shadowOffsetY * i), e && n[Qp] == xM[tm] && (this._2h(t, i, n), e = !1), this._$z() && this._mlShape && !this._mlShape._empty) {
                this._mlShape.validate();
                var s = {
                    lineWidth: this[$o],
                    strokeStyle: this.borderColor,
                    lineDash: this.borderLineDash,
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this.$backgroundColor,
                    fillGradient: this._ncackgroundGradient,
                    lineCap: Dv,
                    lineJoin: Io
                };
                this._mlShape.draw(t, i, s, e, n), e = !1, t.shadowColor = sg
            }
            t[Vb](), this[co](t, i, e, n), t[vb]()
        },
        invalidateData: function () {
            this.$invalidateData = !0, this._1x = !0
        },
        invalidateSize: function () {
            this[No] = !0, this._1x = !0
        },
        invalidateRender: function () {
            this._1x = !0
        },
        _5e: function () {
        },
        _$z: function () {
            return this[im] || this.$backgroundGradient || this.$border
        },
        _4b: function () {
            return this.$backgroundColor || this[em]
        },
        doValidate: function () {
            return this.$invalidateData && (this.$invalidateData = !1, this[nm]() !== !1 && (this.$invalidateSize = !0)), this[No] && this.validateSize && this.validateSize(), Ye[Br](this) ? (this[_y] = !0, this.onBoundsChanged && this.onBoundsChanged(), !0) : this[sm] ? (this[sm] = !1, !0) : void 0
        },
        validate: function () {
            var t = this._hw;
            return this.$invalidateVisibility && (this.$invalidateVisibility = !1, this._hw = this[rm], !this._hw || (this[Vo] || this.$showEmpty) && this._5e() !== !1 || (this._hw = !1), !this._hw) ? t : this._hw ? (this._1x = !1, this._n9m || (this.initialize(), this._n9m = !0), this[am]()) : t
        },
        _hm: function (t, i) {
            return t -= this.$x, i -= this.$y, ze.call(this, {x: t, y: i})
        },
        _hk: function (t, i, e, n) {
            if (t -= this.$x, i -= this.$y, !this._fp.intersectsPoint(t, i, e))return !1;
            var s = ze[Br](this, {x: t, y: i});
            return t = s.x, i = s.y, !n && this._$z() && this._mlShape && this._mlShape._hk(t, i, e, !1, this[$o], this.$backgroundColor || this.$backgroundGradient) ? !0 : this._dj ? this._dj(t, i, e) : this._j6[to](t, i, e)
        },
        onDataChanged: function () {
            this.$invalidateData = !0, this._1x = !0, this[hm] = !0
        },
        getBounds: function () {
            var t = this._fp[Hr]();
            return t[om](this.x, this.y), this.parent && (this.parent.rotate && Pi(t, this[L_].rotate, t), t.offset(this[L_].x || 0, this[L_].y || 0)), t
        },
        destroy: function () {
            this._hsed = !0
        },
        _dz: !1
    }, Z(lj[_a], {
        data: {
            get: function () {
                return this.$data
            }, set: function (t) {
                if (this.$data != t) {
                    var i = this[Vo];
                    this[Vo] = t, this.onDataChanged(t, i)
                }
            }
        }, parent: {
            get: function () {
                return this._ja
            }
        }, showOnTop: {
            get: function () {
                return this._dz
            }, set: function (t) {
                t != this._dz && (this._dz = t, this._1x = !0, this._ja && this._ja._n95 && this._ja._n95(this))
            }
        }
    }), es(lj.prototype, {
        visible: {value: !0, validateFlags: [_m, fm]},
        showEmpty: {validateFlags: [_m]},
        anchorPosition: {value: ID.CENTER_MIDDLE, validateFlags: [cm]},
        position: {value: ID[Hu], validateFlags: [fm]},
        offsetX: {value: 0, validateFlags: [fm]},
        offsetY: {value: 0, validateFlags: [fm]},
        layoutByAnchorPoint: {value: !0, validateFlags: [um, cm]},
        padding: {value: 0, validateFlags: [um]},
        border: {value: 0, validateFlags: [um]},
        borderRadius: {value: gD.BORDER_RADIUS},
        showPointer: {value: !1, validateFlags: [um]},
        pointerX: {value: 0, validateFlags: [um]},
        pointerY: {value: 0, validateFlags: [um]},
        pointerWidth: {value: gD[Yv]},
        backgroundColor: {validateFlags: [um]},
        backgroundGradient: {validateFlags: [um, dm]},
        selected: {value: !1, validateFlags: [um]},
        selectionBorder: {value: gD.SELECTION_BORDER, validateFlags: [um]},
        selectionShadowBlur: {value: gD.SELECTION_SHADOW_BLUR, validateFlags: [um]},
        selectionColor: {value: gD.SELECTION_COLOR, validateFlags: [um]},
        selectionType: {value: gD.SELECTION_TYPE, validateFlags: [um]},
        selectionShadowOffsetX: {value: 0, validateFlags: [um]},
        selectionShadowOffsetY: {value: 0, validateFlags: [um]},
        shadowBlur: {value: 0, validateFlags: [um]},
        shadowColor: {validateFlags: [um]},
        shadowOffsetX: {value: 0, validateFlags: [um]},
        shadowOffsetY: {value: 0, validateFlags: [um]},
        renderColorBlendMode: {},
        renderColor: {},
        x: {value: 0, validateFlags: [fm]},
        y: {value: 0, validateFlags: [fm]},
        rotatable: {value: !0, validateFlags: [lm, um]},
        rotate: {value: 0, validateFlags: [lm, um]},
        _hostRotate: {validateFlags: [lm]},
        lineWidth: {value: 0, validateFlags: [jl]},
        alpha: {value: 1}
    });
    var vj = [xM.PROPERTY_TYPE_ACCESSOR, xM[UE], xM.PROPERTY_TYPE_CLIENT];
    ss[_a] = {
        removeBinding: function (t) {
            for (var i = vj.length; --i >= 0;) {
                var e = vj[i], n = this[e];
                for (var s in n) {
                    var r = n[s];
                    Array[ia](r) ? (v(r, function (i) {
                        return i.target == t
                    }, this), r.length || delete n[s]) : r.target == t && delete n[s]
                }
            }
        }, _2j: function (t, i, e) {
            if (!e && (e = this[i.propertyType || xM.PROPERTY_TYPE_ACCESSOR], !e))return !1;
            var n = e[t];
            n ? (Array[ia](n) || (e[t] = n = [n]), n.push(i)) : e[t] = i
        }, _32: function (t, i, e, n, s, r) {
            t = t || xM[uf];
            var a = this[t];
            if (!a)return !1;
            var h = {property: i, propertyType: t, bindingProperty: n, target: e, callback: s, invalidateSize: r};
            this._2j(i, h, a)
        }, onBindingPropertyChange: function (t, i, e, n) {
            var s = this[e || xM[uf]];
            if (!s)return !1;
            var r = s[i];
            return r ? (t._1x = !0, ns(t, r, e, n), !0) : !1
        }, initBindingProperties: function (t, i) {
            for (var n = vj.length; --n >= 0;) {
                var s = vj[n], r = this[s];
                for (var a in r) {
                    var h = r[a];
                    if (h.bindingProperty) {
                        var o = h[vm];
                        if (o) {
                            if (!(o instanceof lj || (o = t[o])))continue
                        } else o = t;
                        var _;
                        _ = i === !1 ? t[_f](h[bm], s) : s == xM[UE] ? t.graph.getStyle(t[Vo], h.property) : t.$data[h[bm]], _ !== e && (o[h.bindingProperty] = _)
                    }
                }
            }
        }
    };
    var bj = {};
    bj[Gv] = gm, bj[ym] = Em, bj[pm] = "selection.shadow.blur", bj[mm] = "selection.shadow.offset.x", bj[xm] = "selection.shadow.offset.y", bj.SELECTION_TYPE = Tm, bj.RENDER_COLOR = wm, bj.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", bj[Om] = Sm, bj[km] = Im, bj.SHADOW_COLOR = Lm, bj[Am] = Cm, bj.SHADOW_OFFSET_Y = Rm, bj.SHAPE_STROKE = Pm, bj[Dm] = Mm, bj[Nm] = jm, bj.SHAPE_LINE_DASH_OFFSET = "shape.line.dash.offset", bj.SHAPE_FILL_COLOR = Bm, bj.SHAPE_FILL_GRADIENT = $m, bj[Gm] = Fm, bj.SHAPE_OUTLINE_STYLE = zm, bj[Ym] = Hm, bj.LINE_JOIN = Um, bj[qm] = Wm, bj.BACKGROUND_COLOR = Xm, bj.BACKGROUND_GRADIENT = Vm, bj.BORDER = Km, bj.BORDER_COLOR = Zm, bj.BORDER_LINE_DASH = Jm, bj[Qm] = "border.line.dash.offset", bj[zv] = tx, bj[ix] = go, bj.IMAGE_BACKGROUND_COLOR = "image.background.color", bj[ex] = "image.background.gradient", bj[nx] = sx, bj.IMAGE_BORDER_STYLE = bj.IMAGE_BORDER_COLOR = rx, bj.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", bj.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", bj[ax] = bj.IMAGE_BORDER_RADIUS = hx, bj[ox] = _x, bj[fx] = cx, bj.IMAGE_ALPHA = ux, bj[dx] = lx, bj[vx] = bx, bj.LABEL_ANCHOR_POSITION = "label.anchor.position", bj.LABEL_COLOR = gx, bj.LABEL_FONT_SIZE = yx, bj.LABEL_FONT_FAMILY = Ex, bj.LABEL_FONT_STYLE = px, bj.LABEL_PADDING = mx, bj.LABEL_POINTER_WIDTH = xx, bj.LABEL_POINTER = Tx, bj[wx] = Ox, bj[Sx] = kx, bj.LABEL_OFFSET_Y = Ix, bj.LABEL_SIZE = Lx, bj[Ax] = Cx, bj[Rx] = Px, bj.LABEL_BORDER_STYLE = Dx, bj.LABEL_BACKGROUND_COLOR = "label.background.color", bj.LABEL_BACKGROUND_GRADIENT = "label.background.gradient", bj.LABEL_ROTATABLE = Mx, bj.LABEL_SHADOW_BLUR = Nx, bj[jx] = Bx, bj.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x", bj.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", bj.LABEL_Z_INDEX = $x, bj[Gx] = Fx, bj[zx] = "group.background.color", bj.GROUP_BACKGROUND_GRADIENT = "group.background.gradient", bj[Yx] = Hx, bj.GROUP_STROKE_STYLE = Ux, bj[qx] = "group.stroke.line.dash", bj[Wx] = "group.stroke.line.dash.offset", bj.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate", bj.EDGE_BUNDLE_LABEL_POSITION = "edge.bundle.label.position", bj[Xx] = "edge.bundle.label.anchor.position", bj[Vx] = "edge.bundle.label.color", bj[Kx] = "edge.bundle.label.font.size", bj.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", bj.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", bj.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", bj.EDGE_BUNDLE_LABEL_POINTER_WIDTH = "edge.bundle.label.pointer.width", bj[Zx] = "edge.bundle.label.pointer", bj[Jx] = "edge.bundle.label.radius", bj.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x", bj.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", bj[Qx] = "edge.bundle.label.border", bj.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color", bj.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color", bj.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", bj.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable", bj.EDGE_WIDTH = tT, bj[iT] = eT, bj.EDGE_OUTLINE = nT, bj[sT] = rT, bj[aT] = hT, bj.EDGE_LINE_DASH_OFFSET = "edge.line.dash.offset", bj.EDGE_FROM_OFFSET = oT, bj[_T] = fT, bj[cT] = uT,bj[Wf] = dT,bj[Lf] = lT,bj.EDGE_CONTROL_POINT = vT,bj.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent",bj.EDGE_SPLIT_PERCENT = bT,bj[gT] = yT,bj[ET] = pT,bj.EDGE_CORNER_RADIUS = mT,bj[xT] = TT,bj[wT] = OT,bj[ST] = kT,bj[IT] = LT,bj.ARROW_FROM_OFFSET = AT,bj[CT] = RT,bj[PT] = "arrow.from.stroke.style",bj[DT] = MT,bj.ARROW_FROM_OUTLINE_STYLE = "arrow.from.outline.style",bj[NT] = jT,bj[BT] = "arrow.from.line.dash.offset",bj[$T] = "arrow.from.fill.color",bj[GT] = "arrow.from.fill.gradient",bj[FT] = zT,bj[YT] = HT,bj.ARROW_TO = UT,bj[qT] = WT,bj[XT] = VT,bj[KT] = ZT,bj.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",bj[JT] = QT,bj.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style",bj[tw] = iw,bj.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",bj.ARROW_TO_FILL_COLOR = ew,bj.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",bj.ARROW_TO_LINE_CAP = nw,bj.ARROW_TO_LINE_JOIN = sw;
    var gj = new ss, yj = xM.PROPERTY_TYPE_ACCESSOR, Ej = xM.PROPERTY_TYPE_STYLE, pj = !1;
    gj._32(Ej, bj.SELECTION_TYPE, null, Qp), gj._32(Ej, bj.SELECTION_BORDER, null, qb), gj._32(Ej, bj[pm], null, Hb), gj._32(Ej, bj.SELECTION_COLOR, null, Xp), gj._32(Ej, bj.SELECTION_SHADOW_OFFSET_X, null, "selectionShadowOffsetX"), gj._32(Ej, bj.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), gj._32(yj, vo, Fy, no), gj._32(Ej, bj[vx], Fy, Wo), gj._32(Ej, bj[rw], Fy, pp), gj._32(Ej, bj[aw], Fy, hw), gj._32(Ej, bj.LABEL_FONT_SIZE, Fy, Sc), gj._32(Ej, bj.LABEL_BORDER, Fy, Wl), gj._32(Ej, bj[ow], Fy, _w), gj._32(Ej, bj[fw], Fy, cw), gj._32(Ej, bj[Gx], Fy, uw), pj || (gj._32(Ej, bj[km], null, gb), gj._32(Ej, bj[dw], null, bb), gj._32(Ej, bj.SHADOW_OFFSET_X, null, yb), gj._32(Ej, bj.SHADOW_OFFSET_Y, null, Eb), gj._32(Ej, bj.LABEL_FONT_FAMILY, Fy, kc), gj._32(Ej, bj[lw], Fy, vw), gj._32(Ej, bj[Ax], Fy, bw), gj._32(Ej, bj.LABEL_ROTATE, Fy, ho), gj._32(Ej, bj[gw], Fy, go), gj._32(Ej, bj[yw], Fy, Ew), gj._32(Ej, bj[pw], Fy, mw), gj._32(Ej, bj[wx], Fy, xw), gj._32(Ej, bj.LABEL_OFFSET_X, Fy, Tw), gj._32(Ej, bj.LABEL_OFFSET_Y, Fy, ww), gj._32(Ej, bj.LABEL_ROTATABLE, Fy, Ow), gj._32(Ej, bj[Sw], Fy, zo), gj._32(Ej, bj.LABEL_SIZE, Fy, Ep), gj._32(Ej, bj[kw], Fy, gb), gj._32(Ej, bj[jx], Fy, bb), gj._32(Ej, bj[Iw], Fy, yb), gj._32(Ej, bj[Lw], Fy, Eb), gj._32(Ej, bj[Aw], Fy, JE), gj._32(Ej, bj.RENDER_COLOR, null, Cw), gj._32(Ej, bj.RENDER_COLOR_BLEND_MODE, null, Rw), gj._32(Ej, bj.ALPHA, null, Sm));
    var mj = new ss;
    mj._32(yj, up), mj._32(yj, pp, null, Pw), mj._32(yj, ho, null, ho), pj || (mj._32(Ej, bj[Dw], null, cw), mj._32(Ej, bj[Mw], null, zo), mj._32(Ej, bj.PADDING, null, go), mj._32(Ej, bj[Nw], null, Wl), mj._32(Ej, bj[zv], null, xw), mj._32(Ej, bj[jw], null, _w), mj._32(Ej, bj.BORDER_LINE_DASH, null, Bw), mj._32(Ej, bj[Qm], null, $w)), mj._32(yj, wb, wb, no, Gw), mj._32(yj, Ep, wb, Ep), mj._32(Ej, bj.SHAPE_STROKE, wb, so), mj._32(Ej, bj[Dm], wb, cb), mj._32(Ej, bj.SHAPE_FILL_COLOR, wb, Fw), pj || (mj._32(Ej, bj.SHAPE_OUTLINE, wb, zw), mj._32(Ej, bj.SHAPE_OUTLINE_STYLE, wb, Xb), mj._32(Ej, bj[Yw], wb, Hw), mj._32(Ej, bj.SHAPE_LINE_DASH, wb, Zo), mj._32(Ej, bj.SHAPE_LINE_DASH_OFFSET, wb, t_), mj._32(Ej, bj.LINE_CAP, wb, rg), mj._32(Ej, bj[Uw], wb, Wb), mj._32(Ej, bj.LAYOUT_BY_PATH, wb, Xo), mj._32(Ej, bj[qw], wb, cw), mj._32(Ej, bj.IMAGE_BACKGROUND_GRADIENT, wb, zo), mj._32(Ej, bj[ox], wb, go), mj._32(Ej, bj.IMAGE_BORDER, wb, Wl), mj._32(Ej, bj[Ww], wb, xw), mj._32(Ej, bj.IMAGE_BORDER_COLOR, wb, _w), mj._32(Ej, bj[Xw], wb, Bw), mj._32(Ej, bj.IMAGE_BORDER_LINE_DASH_OFFSET, wb, $w), mj._32(Ej, bj.IMAGE_Z_INDEX, wb, JE), mj._32(Ej, bj[Vw], wb, Sm)), mj._32(yj, $p, null, null, Kw), mj._32(yj, QE, null, null, Kw);
    var xj = new ss;
    xj._32(yj, Fp, null, null, Zw), xj._32(yj, zp, null, null, Zw), xj._32(yj, Gp, null, null, Zw), xj._32(yj, go, null, null, Zw), xj._32(Ej, bj.GROUP_BACKGROUND_COLOR, Jw, Fw), xj._32(Ej, bj[Qw], Jw, Hw), xj._32(Ej, bj.GROUP_STROKE, Jw, so), xj._32(Ej, bj.GROUP_STROKE_STYLE, Jw, cb), xj._32(Ej, bj[qx], Jw, Zo), xj._32(Ej, bj.GROUP_STROKE_LINE_DASH_OFFSET, Jw, t_);
    var Tj = new ss;
    Tj._32(yj, Zc, Jw, null, tO), Tj._32(yj, rp, Jw, null, tO), Tj._32(yj, Uf, Jw, null, tO), Tj._32(Ej, bj[iO], Jw, so), Tj._32(Ej, bj[iT], Jw, cb), Tj._32(Ej, bj.ARROW_FROM, Jw, eO), Tj._32(Ej, bj[nO], Jw, sO), pj || (Tj._32(Ej, bj[xT], null, zf, tO), Tj._32(Ej, bj[wT], null, rO, tO), Tj._32(Ej, bj[aO], Jw, zw), Tj._32(Ej, bj.EDGE_OUTLINE_STYLE, Jw, Xb), Tj._32(Ej, bj[aT], Jw, Zo), Tj._32(Ej, bj[hO], Jw, t_), Tj._32(Ej, bj.EDGE_CONTROL_POINT, Jw, null, tO), Tj._32(Ej, bj.EDGE_FROM_OFFSET, Jw, null, tO), Tj._32(Ej, bj.EDGE_TO_OFFSET, Jw, null, tO), Tj._32(Ej, bj[Ym], Jw, rg), Tj._32(Ej, bj[Uw], Jw, Wb), Tj._32(yj, ep, null, null, tO, !0), Tj._32(yj, Ff, null, null, tO, !0), Tj._32(Ej, bj.ARROW_FROM_SIZE, Jw, oO), Tj._32(Ej, bj[_O], Jw, fO), Tj._32(Ej, bj[CT], Jw, cO), Tj._32(Ej, bj.ARROW_FROM_STROKE_STYLE, Jw, uO), Tj._32(Ej, bj.ARROW_FROM_OUTLINE, Jw, dO), Tj._32(Ej, bj.ARROW_FROM_OUTLINE_STYLE, Jw, "fromArrowOutlineStyle"), Tj._32(Ej, bj[$T], Jw, lO), Tj._32(Ej, bj.ARROW_FROM_FILL_GRADIENT, Jw, "fromArrowFillGradient"), Tj._32(Ej, bj.ARROW_FROM_LINE_DASH, Jw, vO), Tj._32(Ej, bj[BT], Jw, "fromArrowLineDashOffset"), Tj._32(Ej, bj.ARROW_FROM_LINE_JOIN, Jw, bO), Tj._32(Ej, bj[FT], Jw, gO), Tj._32(Ej, bj[qT], Jw, yO), Tj._32(Ej, bj.ARROW_TO_OFFSET, Jw, EO), Tj._32(Ej, bj.ARROW_TO_STROKE, Jw, pO), Tj._32(Ej, bj[mO], Jw, xO), Tj._32(Ej, bj.ARROW_TO_OUTLINE, Jw, TO), Tj._32(Ej, bj[wO], Jw, OO), Tj._32(Ej, bj[SO], Jw, kO), Tj._32(Ej, bj[IO], Jw, LO), Tj._32(Ej, bj.ARROW_TO_LINE_DASH, Jw, AO), Tj._32(Ej, bj[CO], Jw, "toArrowLineDashOffset"), Tj._32(Ej, bj[RO], Jw, PO), Tj._32(Ej, bj.ARROW_TO_LINE_CAP, Jw, DO));
    var wj = new ss;
    wj._32(Ej, bj[Vx], MO, hw), wj._32(Ej, bj[NO], MO, Wo), wj._32(Ej, bj[Xx], MO, pp), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_FONT_SIZE, MO, Sc), wj._32(Ej, bj[jO], MO, Ow), pj || (wj._32(Ej, bj.EDGE_BUNDLE_LABEL_ROTATE, MO, ho), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_FONT_FAMILY, MO, kc), wj._32(Ej, bj[BO], MO, vw), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_PADDING, MO, go), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_POINTER_WIDTH, MO, Ew), wj._32(Ej, bj[Zx], MO, mw), wj._32(Ej, bj[Jx], MO, xw), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_OFFSET_X, MO, Tw), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_OFFSET_Y, MO, ww), wj._32(Ej, bj[Qx], MO, Wl), wj._32(Ej, bj.EDGE_BUNDLE_LABEL_BORDER_STYLE, MO, _w), wj._32(Ej, bj[$O], MO, cw), wj._32(Ej, bj[GO], MO, zo));
    var Oj = new ss;
    Oj._32(yj, up), Oj._32(Ej, bj[Dw], null, cw), Oj._32(Ej, bj.BACKGROUND_GRADIENT, null, zo), Oj._32(Ej, bj[ix], null, go), Oj._32(Ej, bj.BORDER, null, Wl), Oj._32(Ej, bj.BORDER_RADIUS, null, xw), Oj._32(Ej, bj[jw], null, _w), Oj._32(Ej, bj.BORDER_LINE_DASH, null, Bw), Oj._32(Ej, bj.BORDER_LINE_DASH_OFFSET, null, $w), Oj._32(yj, ho, null, ho), Oj._32(yj, ep, null, null, FO), Oj._32(yj, Op, wb, no), Oj._32(yj, Ep, wb, Ep), Oj._32(Ej, bj.SHAPE_STROKE, wb, so), Oj._32(Ej, bj.SHAPE_STROKE_STYLE, wb, cb), Oj._32(Ej, bj.SHAPE_FILL_COLOR, wb, Fw), Oj._32(Ej, bj.SHAPE_FILL_GRADIENT, wb, Hw), pj || (Oj._32(Ej, bj.SHAPE_OUTLINE, wb, zw), Oj._32(Ej, bj.SHAPE_OUTLINE_STYLE, wb, Xb), Oj._32(Ej, bj[Nm], wb, Zo), Oj._32(Ej, bj.SHAPE_LINE_DASH_OFFSET, wb, t_), Oj._32(Ej, bj[Ym], wb, rg), Oj._32(Ej, bj.LINE_JOIN, wb, Wb), Oj._32(Ej, bj.LAYOUT_BY_PATH, wb, Xo), Oj._32(Ej, bj[qw], wb, cw), Oj._32(Ej, bj.IMAGE_BACKGROUND_GRADIENT, wb, zo), Oj._32(Ej, bj.IMAGE_PADDING, wb, go), Oj._32(Ej, bj.IMAGE_BORDER, wb, Wl), Oj._32(Ej, bj.IMAGE_BORDER_RADIUS, wb, xw), Oj._32(Ej, bj[zO], wb, _w), Oj._32(Ej, bj.IMAGE_BORDER_LINE_DASH, wb, Bw), Oj._32(Ej, bj[YO], wb, $w), Oj._32(Ej, bj[ST], wb, eO), Oj._32(Ej, bj[IT], wb, oO), Oj._32(Ej, bj[_O], wb, fO), Oj._32(Ej, bj.ARROW_FROM_STROKE, wb, cO), Oj._32(Ej, bj.ARROW_FROM_STROKE_STYLE, wb, uO), Oj._32(Ej, bj.ARROW_FROM_FILL_COLOR, wb, lO), Oj._32(Ej, bj.ARROW_FROM_FILL_GRADIENT, wb, "fromArrowFillGradient"), Oj._32(Ej, bj[NT], wb, vO), Oj._32(Ej, bj.ARROW_FROM_LINE_DASH_OFFSET, wb, "fromArrowLineDashOffset"), Oj._32(Ej, bj.ARROW_FROM_LINE_JOIN, wb, bO), Oj._32(Ej, bj[FT], wb, gO), Oj._32(Ej, bj.ARROW_TO_SIZE, wb, yO), Oj._32(Ej, bj[XT], wb, EO), Oj._32(Ej, bj[nO], wb, sO), Oj._32(Ej, bj[KT], wb, pO), Oj._32(Ej, bj.ARROW_TO_STROKE_STYLE, wb, xO), Oj._32(Ej, bj[SO], wb, kO), Oj._32(Ej, bj[IO], wb, LO), Oj._32(Ej, bj[tw], wb, AO), Oj._32(Ej, bj.ARROW_TO_LINE_DASH_OFFSET, wb, "toArrowLineDashOffset"), Oj._32(Ej, bj.ARROW_TO_LINE_JOIN, wb, PO), Oj._32(Ej, bj.ARROW_TO_LINE_CAP, wb, DO));
    var Sj = function (t, i) {
        return t = t.zIndex, i = i.zIndex, t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    }, kj = function (t, i) {
        this[yf] = new SD, j(this, kj, arguments), this.id = this.$data.id, this.graph = i, this._fs = [], this._nct = new ss
    };
    kj.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _nct: null,
        _fs: null,
        addChild: function (t, i) {
            t._ja = this, i !== e ? y(this._fs, t, i) : this._fs[Qh](t), t._dz && this._n95(t), this[HO](), this[UO]()
        },
        removeChild: function (t) {
            this._nct.removeBinding(t), t._ja = null, E(this._fs, t), this._jr && this._jr.remove(t), this[UO]()
        },
        getProperty: function (t, i) {
            return i == xM[UE] ? this.graph[Ef](this.$data, t) : i == xM.PROPERTY_TYPE_CLIENT ? this.$data[la](t) : this.$data[t]
        },
        getStyle: function (t) {
            return this.graph.getStyle(this[Vo], t)
        },
        _15: function (t, i, e) {
            var n = this._nct.onBindingPropertyChange(this, t, i, e);
            return gj[qO](this, t, i, e) || n
        },
        onPropertyChange: function (t) {
            if (JE == t[ad])return this[WO](), !0;
            if (XE == t.type) {
                if (VE == t.kind)return this.invalidate(), !0;
                var i = t.value;
                return i && i.ui ? (Vr == t[ad] ? this._95(i) : Zr == t.kind && this.removeChild(i.ui), !0) : !1
            }
            return this._15(t[ad], t.propertyType || yj, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new Lj;
            t[vo] = Fy, this[XO](t), this[Fy] = t
        },
        initialize: function () {
            this.initLabel(), this[Vo]._nad && this[Vo]._nad.forEach(this._95, this), gj[VO](this), this._nct.initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i[bm] ? (i[vm] = t, void this._nct._2j(i[bm], i)) : !1
        },
        _fr: function (t, i) {
            var e = this[Vo];
            if (!e._nad)return !1;
            var n = e._nad[Eu](t.id);
            if (!n || !n.bindingProperties)return !1;
            var s = n.bindingProperties;
            if (L(s)) {
                var r = !1;
                return l(s, function (t) {
                    return no == t.bindingProperty ? (r = rs(e, i, t[bm], t.propertyType), !1) : void 0
                }, this), r
            }
            return no == s.bindingProperty ? rs(e, i, s[bm], s[KO]) : !1
        },
        _95: function (t) {
            var i = t.ui;
            if (i) {
                var e = t.bindingProperties;
                e && (Array[ia](e) ? e.forEach(function (t) {
                    this[ZO](i, t)
                }, this) : this[ZO](i, e)), this[XO](i)
            }
        },
        validate: function () {
            return this._n9m || (this.initialize(), this._n9m = !0), this.doValidate()
        },
        _$h: !0,
        invalidateChildrenIndex: function () {
            this._$h = !0
        },
        doValidate: function () {
            if (this._1x && (this._1x = !1, this[JO]() && (this.measure(), this.$invalidateSize = !0), this._$h && (this._$h = !1, hD ? this._fs = d(this._fs, Sj) : this._fs[QO](Sj))), Ye[Br](this) && (this[_y] = !0), this.$invalidateRotate) {
                oN.call(this), this[yf].setByRect(this._fp);
                var t = this.$selectionBorder || 0, i = Math.max(this[tS] || 0, this[iS] || 0, this[eS] || 0), e = Math[Uh](this[nS] || 0, this[sS] || 0), n = Math[Uh](2 * t, this[rS], this[aS]);
                n += gD[hS] || 0;
                var s = n - i, r = n + i, a = n - e, h = n + e;
                return 0 > s && (s = 0), 0 > r && (r = 0), 0 > a && (a = 0), 0 > h && (h = 0), this[yf][Go](a, s, h, r), this[oS] && this[oS](), this[_S] = !0, !0
            }
        },
        validateChildren: function () {
            var t, i = this._ncody, e = this.bodyChanged;
            i && (i.$renderColor = this.$renderColor, i[fS] = this[fS], i[cS] = this.$shadowColor, i.$shadowBlur = this[rS], i.$shadowOffsetX = this.$shadowOffsetX, i[nS] = this.$shadowOffsetY), this.bodyChanged = !1, i && i._1x && (e = i[Xv]() || e, i.$x = 0, i.$y = 0, i.$invalidateRotate && oN[Br](i), t = !0);
            for (var n = 0, s = this._fs[$r]; s > n; n++) {
                var r = this._fs[n];
                r != i && (r._1x && r[Xv]() || e) && r._hw && (We(r, i, this), t || (t = !0))
            }
            return t
        },
        measure: function () {
            this._j6[eh]();
            for (var t, i, e = 0, n = this._fs.length; n > e; e++)t = this._fs[e], t._hw && (i = t._fp, i.width <= 0 || i[Dh] <= 0 || this._j6[Ru](t.$x + i.x, t.$y + i.y, i[Ah], i.height))
        },
        _jr: null,
        _n95: function (t) {
            if (!this._jr) {
                if (!t[uw])return;
                return this._jr = new ED, this._jr.add(t)
            }
            return t.showOnTop ? this._jr[Vr](t) : this._jr[Zr](t)
        },
        draw: function (t, i, e) {
            for (var n, s = 0, r = this._fs[$r]; r > s; s++)n = this._fs[s], n._hw && !n[uw] && n._jc(t, i, e, this)
        },
        _93: function (t, i) {
            if (!this._hw || !this._jr || !this._jr.length)return !1;
            t[eb](), t[yo](this.$x, this.$y), this[uS] && this.$_hostRotate && t.rotate(this[Mo]), (this.offsetX || this[ww]) && t[yo](this[Tw], this.offsetY), this[Jp] && t[ho](this.$rotate), this[Ro] && this._n9p && t[yo](-this._n9p.x, -this._n9p.y), this.shadowColor && (t.shadowColor = this[bb], t[gb] = this[gb] * i, t.shadowOffsetX = this.shadowOffsetX * i, t[Eb] = this[Eb] * i), t[Vb]();
            for (var e, n = 0, s = this._fs.length; s > n; n++)e = this._fs[n], e._hw && e[uw] && e._jc(t, i, this.selected, this);
            t[vb]()
        },
        _dj: function (t, i, e) {
            if (e) {
                if (!this._j6.intersectsRect(t - e, i - e, 2 * e, 2 * e))return !1
            } else if (!this._j6.intersectsPoint(t, i))return !1;
            return this._59(t, i, e)
        },
        _59: function (t, i, e) {
            for (var n, s = this._fs.length - 1; s >= 0; s--)if (n = this._fs[s], n._hw && n._hk(t, i, e))return n;
            return !1
        },
        destroy: function () {
            this._hsed = !0;
            for (var t, i = this._fs.length - 1; i >= 0; i--)t = this._fs[i], t.destroy()
        }
    }, N(kj, lj), Z(kj[_a], {
        renderColorBlendMode: {
            get: function () {
                return this[fS]
            }, set: function (t) {
                this[fS] = t, this._1x = !0, this[Zv] && (this.body.renderColorBlendMode = this.$renderColorBlendMode)
            }
        }, renderColor: {
            get: function () {
                return this.$renderColor
            }, set: function (t) {
                this.$renderColor = t, this._1x = !0, this[Zv] && (this.body.renderColor = this[dS])
            }
        }, bodyBounds: {
            get: function () {
                if (this[_S]) {
                    this[_S] = !1;
                    var t, i = this.body;
                    t = i && i._hw && !this._$z() ? i._fp[Hr]() : this._fp.clone(), this[ho] && Pi(t, this[ho], t), t.x += this.$x, t.y += this.$y, this._naq = t
                }
                return this._naq
            }
        }, body: {
            get: function () {
                return this._ncody
            }, set: function (t) {
                t && this._ncody != t && (this._ncody = t, this.bodyChanged = !0, this[UO]())
            }
        }
    }), gD[hS] = 1;
    var Ij = function () {
        j(this, Ij, arguments)
    };
    Ij.prototype = {
        strokeStyle: lb,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _j8: 1,
        _j9: 1,
        outline: 0,
        onDataChanged: function (t) {
            B(this, Ij, lS, arguments), this._kb && this._82 && this._kb._6m(this._82, this), t && this._ncx(t)
        },
        _ncx: function (t) {
            this._kb = Ee(t), this._kb.validate(), (this._kb._lq == PM || this._kb._6b()) && (this._82 || (this._82 = function () {
                this.invalidateData(), this._ja && this._ja[jf] && (this._ja[UO](), this._ja.graph[VE]())
            }), this._kb._n9h(this._82, this))
        },
        _kb: null,
        initialize: function () {
            this._ncx(this.$data)
        },
        _5e: function () {
            return this._kb && this._kb[co]
        },
        _n92: function (t) {
            if (!t || t[Ah] <= 0 || t[Dh] <= 0 || !this.$size || !(this[Ep]instanceof Object))return this._j8 = 1, void(this._j9 = 1);
            var i = this[Ep][Ah], n = this.size.height;
            if ((i === e || null === i) && (i = -1), (n === e || null === n) && (n = -1), 0 > i && 0 > n)return this._j8 = 1, void(this._j9 = 1);
            var s, r, a = t.width, h = t.height;
            i >= 0 && (s = i / a), n >= 0 && (r = n / h), 0 > i ? s = r : 0 > n && (r = s), this._j8 = s, this._j9 = r
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this.$invalidateScale = !1;
                var t = this._originalBounds;
                this._j8, this._j9, this._n92(t), this.setMeasuredBounds(t[Ah] * this._j8, t[Dh] * this._j9, t.x * this._j8, t.y * this._j9)
            }
        },
        measure: function () {
            var t = this._kb[Kh](this[so] + this.outline);
            return t ? (this.$invalidateScale = !0, void(this._originalBounds = t[Hr]())) : void this._j6[Uo](0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this[vS] = !0
        },
        _26: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this.fillGradient ? GM[_a][bS].call(this[gS], this._7w) : null
        },
        draw: function (t, i, e, n) {
            if (this._j8 && this._j9) {
                if (this.$invalidateFillGradient && this._26(), t.save(), this._kb._lq == MM)return t.scale(this._j8, this._j9), this._kb._lp.draw(t, i, this, e, n || this), void t.restore();
                e && this._89(t, i, n), this._kb.draw(t, i, this, this._j8, this._j9), t[vb]()
            }
        },
        _dj: function (t, i, e) {
            if (this._kb._hk) {
                t /= this._j8, i /= this._j9;
                var n = (this._j8 + this._j9) / 2;
                return n > 1 && (e /= n, e = 0 | e), this._kb._lp instanceof nN ? this._kb._lp._hk(t, i, e, !0, this.$lineWidth, this.$fillColor || this.$fillGradient) : this._kb._hk(t, i, e)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, N(Ij, lj), es(Ij[_a], {
        fillColor: {},
        size: {validateFlags: [um, yS]},
        fillGradient: {validateFlags: [ES]}
    }), Z(Ij[_a], {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    }), gD[pS] = ID.CENTER_MIDDLE;
    var Lj = function () {
        j(this, Lj, arguments), this.color = gD[aw]
    };
    Lj.prototype = {
        color: gD[aw],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _hd: null,
        alignPosition: null,
        measure: function () {
            this.font;
            var t = $i(this.$data, this[mS] || gD.FONT_SIZE, this[xS]);
            if (this._hd = t, this.$size) {
                var i = this[TS][Ah] || 0, e = this.$size.height || 0;
                return this[wS](i > t[Ah] ? i : t[Ah], e > t[Dh] ? e : t.height)
            }
            return this.setMeasuredBounds(t.width, t[Dh])
        },
        _dj: function (t, i, e) {
            return this.$data ? Ae(t, i, e, this) : !1
        },
        draw: function (t, i, e, n) {
            e && this._89(t, i, n);
            var s = this.$fontSize || gD[lu];
            if (this.$rotatable && this[Mo]) {
                var r = ce(this.$_hostRotate);
                r > pD && 3 * pD > r && (t.translate(this._j6.width / 2, this._j6[Dh] / 2), t[ho](Math.PI), t[yo](-this._j6.width / 2, -this._j6[Dh] / 2))
            }
            var a = this[bw] || gD.ALIGN_POSITION, h = a.horizontalPosition, o = a[Pa], _ = s * gD.LINE_HEIGHT, f = _ / 2;
            if (o != RD && this._hd[Dh] < this._j6[Dh]) {
                var c = this._j6[Dh] - this._hd[Dh];
                f += o == PD ? c / 2 : c
            }
            t[yo](0, f), t[zh] != this.$font && (t[zh] = this[xS]), h == AD ? (t[sb] = rb, t[yo](this._j6.width / 2, 0)) : h == CD ? (t.textAlign = Aa, t[yo](this._j6.width, 0)) : t[sb] = Ha, t[ab] = hb, t.fillStyle = this.color;
            for (var u = 0, d = this[Vo].split(Hh), l = 0, v = d.length; v > l; l++) {
                var b = d[l];
                t[OS](b, 0, u), u += _
            }
        },
        _5e: function () {
            return null != this[Vo] || this[TS]
        },
        $invalidateFont: !0
    }, N(Lj, lj), es(Lj.prototype, {
        size: {validateFlags: [jl]},
        fontStyle: {validateFlags: [jl, SS]},
        fontSize: {validateFlags: [jl, SS]},
        fontFamily: {validateFlags: [jl, SS]}
    }), Z(Lj[_a], {
        font: {
            get: function () {
                return this.$invalidateFont && (this.$invalidateFont = !1, this[xS] = (this[kS] || gD.FONT_STYLE) + Xr + (this.$fontSize || gD[lu]) + vu + (this[IS] || gD[LS])), this[xS]
            }
        }
    });
    var Aj = function (t) {
        t = t || new nN, this.pathBounds = new SD, j(this, Aj, [t])
    };
    Aj.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this[AS] = !0, this[CS] = !0, this.$data.getBounds(this.$lineWidth + this.$outline, this[RS]), this[wS](this[RS])
        },
        validateSize: function () {
            if (this[AS] || this[CS]) {
                var t = this.pathBounds[Hr]();
                if (this.$invalidateFromArrow) {
                    this[AS] = !1;
                    var i = this.validateFromArrow();
                    i && t[Vr](i)
                }
                if (this[CS]) {
                    this[CS] = !1;
                    var i = this[PS]();
                    i && t.add(i)
                }
                this[wS](t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._iw || !this.$fromArrow)return void(this.$fromArrowShape = null);
            var t = this.$data, i = 0, e = 0, n = this[DS];
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0, i > 0 && 1 > i && (i *= t._iw)), this.fromArrowLocation = t[MS](i, e), this[NS][ho] = Math.PI + this[NS][ho] || 0, this[jS] = Ds(this[BS], this.$fromArrowSize);
            var s = this[jS][Kh](this.fromArrowStyles[so] + this[$S][zw]);
            return this.fromArrowFillGradient instanceof mM.Gradient ? this[$S]._fillGradient = GM[_a].generatorGradient[Br](this[GS], s) : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null), Di(s, this.fromArrowLocation.rotate, s, s[Aa], s.cy), s[om](this[NS].x, this.fromArrowLocation.y), s
        },
        validateToArrow: function () {
            if (!this[Vo]._iw || !this.$toArrow)return void(this[FS] = null);
            var t = this[Vo], i = 0, e = 0, n = this[zS];
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0), 0 > i && i > -1 && (i *= t._iw), i += t._iw, this[YS] = t[MS](i, e), this.$toArrowShape = Ds(this[HS], this[US]);
            var s = this[FS].getBounds(this.toArrowStyles[so] + this.toArrowStyles.outline);
            return this[LO]instanceof mM[qS] ? this.toArrowStyles._fillGradient = GM.prototype[bS].call(this[LO], s) : this.toArrowStyles && (this[WS]._fillGradient = null), Di(s, this.toArrowLocation[ho], s, s.right, s.cy), s[om](this[YS].x, this[YS].y), s
        },
        _2u: function (t) {
            var i = t ? "from" : rp, n = this[i + XS];
            n === e && (n = this.$lineWidth);
            var s = this[i + VS];
            s === e && (s = this[cb]);
            var r = this[i + KS];
            r || (this[i + KS] = r = {}), r.lineWidth = n, r.strokeStyle = s, r.lineDash = this[i + ZS], r[t_] = this[i + JS], r.fillColor = this[i + QS], r[Hw] = this[i + tk], r.lineCap = this[i + ik], r[Wb] = this[i + ek], r[zw] = this[i + nk] || 0, r[Xb] = this[i + sk]
        },
        doValidate: function () {
            return this[BS] && this._2u(!0), this.$toArrow && this._2u(!1), B(this, Aj, am)
        },
        drawArrow: function (t, i, e, n) {
            if (this[BS] && this.$fromArrowShape) {
                t.save();
                var s = this[NS], r = s.x, a = s.y, h = s.rotate;
                t[yo](r, a), h && t.rotate(h), this[jS].draw(t, i, this[$S], e, n), t[vb]()
            }
            if (this[HS] && this[FS]) {
                t.save();
                var s = this.toArrowLocation, r = s.x, a = s.y, h = s.rotate;
                t[yo](r, a), h && t.rotate(h), this[FS][co](t, i, this[WS], e, n), t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _26: function () {
            this[vS] = !1, this._fillGradient = this[gS] ? GM.prototype.generatorGradient[Br](this[gS], this._7w) : null
        },
        draw: function (t, i, e, n) {
            this.$invalidateFillGradient && this._26(), this[Vo][co](t, i, this, e, n), this.drawArrow(t, i, e, n)
        },
        _dj: function (t, i, e) {
            if (this.$data._hk(t, i, e, !0, this.$lineWidth + this.$outline, this[rk] || this.$fillGradient))return !0;
            if (this[HS] && this.$toArrowShape) {
                var n = t - this.toArrowLocation.x, s = i - this[YS].y;
                if (this.toArrowLocation[ho]) {
                    var r = Ai(n, s, -this.toArrowLocation[ho]);
                    n = r.x, s = r.y
                }
                var a = this.toArrowStyles[Fw] || this.toArrowStyles.fillGradient;
                if (this.$toArrowShape._hk(n, s, e, !0, this.toArrowStyles[so], a))return !0
            }
            if (this.$fromArrow && this.$fromArrowShape) {
                var n = t - this[NS].x, s = i - this.fromArrowLocation.y;
                if (this.fromArrowLocation[ho]) {
                    var r = Ai(n, s, -this.fromArrowLocation.rotate);
                    n = r.x, s = r.y
                }
                var a = this.fromArrowStyles.fillColor || this.fromArrowStyles.fillGradient;
                if (this.$fromArrowShape._hk(n, s, e, !0, this.fromArrowStyles.lineWidth, a))return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, N(Aj, lj), es(Aj[_a], {
        fillColor: {},
        fillGradient: {validateFlags: [ES]},
        fromArrowOffset: {validateFlags: [ak, um]},
        fromArrowSize: {validateFlags: [ak, um]},
        fromArrow: {validateFlags: [ak, um]},
        fromArrowOutline: {validateFlags: [ak, um]},
        fromArrowStroke: {validateFlags: [ak, um]},
        toArrowOffset: {validateFlags: [hk, um]},
        toArrowSize: {validateFlags: [hk, um]},
        toArrow: {validateFlags: [hk, um]},
        toArrowOutline: {validateFlags: [hk, um]},
        toArrowStroke: {validateFlags: [hk, um]},
        outline: {value: 0, validateFlags: [jl]}
    }), Z(Aj[_a], {
        length: {
            get: function () {
                return this.data[$r]
            }
        }
    }), as[_a] = {
        shape: null, path: null, initialize: function () {
            B(this, as, ok), this.path = new nN, this[Op]._dp = !1, this[Jw] = new Aj(this[Op]), this[XO](this[Jw], 0), this._ncody = this[Jw], Tj.initBindingProperties(this)
        }, _29: !0, _5f: null, _$z: function () {
            return !1
        }, _4b: function () {
            return !1
        }, validatePoints: function () {
            this.shape.invalidateData();
            var t = this.$data, i = this.path;
            i.clear();
            var e = t.fromAgent, n = t.toAgent;
            e && n && Gs(this, t, i, e, n)
        }, drawLoopedEdge: function (t, i, e, n) {
            Hs(this, n, t)
        }, drawEdge: function (t, i, e, n, s, r) {
            var a = this[Ef](bj[_k]), h = this.getStyle(bj[_T]);
            if (a && (s.x += a.x || 0, s.y += a.y || 0), h && (r.x += h.x || 0, r.y += h.y || 0), n == xM[fk]) {
                var o = s.center, _ = r.center, f = (o.x + _.x) / 2, c = (o.y + _.y) / 2, u = o.x - _.x, d = o.y - _.y, l = Math.sqrt(u * u + d * d), v = Math.atan2(d, u);
                v += Math.PI / 6, l *= .04, l > 30 && (l = 30);
                var b = Math[Lh](v) * l, g = Math.sin(v) * l;
                return t[G_](f - g, c + b), void t[G_](f + g, c - b)
            }
            var y = Ys(this, this[no], s, r, i, e, s.center, r.center);
            y && (t._gd = y)
        }, _2w: function () {
            if (!this[Vo][ck]())return null;
            var t = this[jf]._84._8n(this.$data);
            if (!t || !t[uk](this.graph) || !t._gh)return null;
            var i = t.getYOffset(this);
            return t[dk](this.$data) || (i = -i), i
        }, checkBundleLabel: function () {
            var t = this[lk]();
            return t ? (this[MO] || this.createBundleLabel(), this.bundleLabel._hw = !0, void(this[MO].data = t)) : void(this[MO] && (this[MO]._hw = !1, this.bundleLabel.data = null))
        }, createBundleLabel: function () {
            var t = new Lj;
            t[vk] = !1, this[MO] = t, this[XO](this.bundleLabel), wj[VO](this)
        }, getBundleLabel: function () {
            return this.graph[lk](this.data)
        }, doValidate: function () {
            return this._29 && (this._29 = !1, this.validatePoints()), this[bk](), B(this, as, am)
        }, _53: function () {
            this._29 = !0, this.invalidateSize()
        }, _15: function (t, i, e) {
            var n = this._nct[qO](this, t, i, e);
            return n = gj.onBindingPropertyChange(this, t, i, e) || n, this[MO] && this[MO].$data && (n = wj.onBindingPropertyChange(this, t, i, e) || n), Tj[qO](this, t, i, e) || n
        }
    }, N(as, kj), as[gk] = function (t, i, e, n) {
        if (t[Y_](i.x, i.y), !n || n == xM[yk])return void t[G_](e.x, e.y);
        if (n == xM.EDGE_TYPE_VERTICAL_HORIZONTAL)t[G_](i.x, e.y); else if (n == xM.EDGE_TYPE_HORIZONTAL_VERTICAL)t[G_](e.x, i.y); else if (0 == n[Ur](xM.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = n == xM.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : n == xM.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math[qh](i.x - e.x) > Math[qh](i.y - e.y);
            var r = (i.x + e.x) / 2, a = (i.y + e.y) / 2;
            s ? (t[G_](r, i.y), t[G_](r, e.y)) : (t[G_](i.x, a), t[G_](e.x, a))
        }
        t.lineTo(e.x, e.y)
    }, Z(as[_a], {
        length: {
            get: function () {
                return this.path ? this.path[$r] : 0
            }
        }
    }), as.prototype[Ch] = function (t, i, e) {
        var n = Te(this.path, t, i, e);
        if (n && n[$r] > 2) {
            var s = this[no], r = n[n.length - 1];
            s[Ek] = r[ao] == KM ? n[zr](1, n[$r] - 2) : n.splice(1, n[$r] - 1)
        }
    }, hs[_a] = {
        _38: null, image: null, initialize: function () {
            B(this, hs, ok), this._ncb(), mj.initBindingProperties(this)
        }, _ncx: function () {
            this[no][wb] ? this.image && (this.body = this[wb]) : this.label && (this.body = this.label)
        }, _ncb: function () {
            this.image = new Ij, this.addChild(this.image, 0), this._ncx()
        }, doValidate: function () {
            this[Zv] && (this instanceof Js && !this[Vo].groupImage && this._5w() ? this[Zv].$layoutByAnchorPoint = !1 : (this.body.$layoutByAnchorPoint = null != this._38, this.body.anchorPosition = this._38));
            var t = this.$data[fp], i = 0, e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return n && (this[_S] = !0), this.$x = i, this.$y = e, kj[_a].doValidate.call(this) || n
        }, _15: function (t, i, e) {
            var n = this._nct.onBindingPropertyChange(this, t, i, e);
            return n = gj.onBindingPropertyChange(this, t, i, e) || n, mj[qO](this, t, i, e) || n
        }
    }, N(hs, kj);
    var Cj = function (t, i) {
        return t = t[Vo].zIndex || 0, i = i[Vo][JE] || 0, t - i
    }, Rj = {position: oc, "user-select": hc, "transform-origin": pk, "-webkit-tap-highlight-color": sg};
    li(mk, xk), _s.prototype = {
        _ky: 1,
        _naa: null,
        _8f: null,
        _8e: null,
        _$m: !0,
        _mw: null,
        _mx: null,
        _ji: null,
        _ncd: null,
        _6f: !1,
        _n9m: !1,
        _jm: null,
        _4q: function (t, i) {
            for (var e = this._naa, n = 0, s = e[$r]; s > n; n++)if (t[Br](i, e[n]) === !1)return !1
        },
        _ek: function (t, i) {
            this._mw.forEach(t, i)
        },
        _16: function (t, i) {
            for (var e = this._naa, n = e[$r] - 1; n >= 0; n--)if (t[Br](i, e[n]) === !1)return !1
        },
        _4d: function (t, i) {
            this._mw[Tk](t, i)
        },
        _3o: function (t, i) {
            this._73 && this._73._3o && this._73._3o(t, i)
        },
        _nah: function () {
            ui(this._mx, {
                overflow: ac,
                padding: wk
            }), this._jm._4y(), this._kd && this._kd[Ok] ? this._jm._es(0, 0) : this._jm._2z = !0
        },
        _4p: function () {
            return this._$m && (this._$m = !1, this._2e()), this._8e
        },
        _3r: function () {
            return this._jm._1g ? !1 : (this._jm._1g = !0, void this._naj())
        },
        _naj: function () {
            this._6f || (this._6f = !0, x(this._f6[Jv](this)))
        },
        _nci: function () {
            var t = !this._n9m || 0 == this._mw[$r];
            this._n9m || (this._n9m = !0, this._nah()), this._nc4(t);
            var i = this._ji.g;
            if (this._mw.isEmpty())return i._kt(), this._topCanvas._jc(), this._6f = !1, this._jm._jd(this, !0), void this._4p();
            if (this._jm._jd(this, this._ncd._ln), this._jj) {
                var e = this._ku;
                i[Mh].ratio && (e *= i[Mh].ratio), this._jj(i, e, t)
            }
            this._ncd._kt(), this._jm._6n(), this._topCanvas._jc(), this._6f = !1
        },
        _f6: function () {
            this._6f && (this._hsed || (this._n9m && this._kd && this._kd._$x && (this._kd._$x = !1, this._kd.forEach(function (t) {
                t.invalidateVisibility(!0)
            })), this._nci(), this._2m()))
        },
        _fj: null,
        _1r: function (t, i, e, n, s) {
            if (!e || !n)return void this._61();
            var r = this._naa, a = this._8f;
            this._61(), this._fj[$r] = 0;
            var h, o = {}, _ = this._ncd;
            s = s || _._ln;
            for (var f, c, u, d, l, v, b = this._mw._ix, g = t + e, y = i + n, E = 0, p = b[$r]; p > E; E++)if (v = b[E], l = v.__oldBounds, v.__oldBounds = null, v._hw)if (d = v.__j6Changed, v.__j6Changed = !1, f = v[yf], c = f.x + v.$x, u = f.y + v.$y, g > c && y > u && c + f[Ah] > t && u + f.height > i) {
                if (h = v.$data.zIndex, h in o || (o[h] = !0, this._fj[Qh](h || 0)), r.push(v), this._8f[v.id] = v, s)continue;
                l && (_._ml(l.x, l.y, l[Ah], l[Dh]), s = _._ln), d && (_._ml(c, u, f.width, f[Dh]), s = _._ln)
            } else!s && a[v.id] && l && (_._ml(l.x, l.y, l[Ah], l[Dh]), s = _._ln); else!s && l && (_._ml(l.x, l.y, l.width, l.height), s = _._ln)
        },
        _nag: function (t) {
            var i = t[Vo].__hwChanged;
            return t[Vo].__hwChanged = !1, t._1x || t[Vo]._6f ? (t[Vo]._6f = !1, t._n9m && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t[yf].y,
                width: t.uiBounds.width,
                height: t.uiBounds[Dh]
            }), t.__j6Changed = t.validate(), i || t.__j6Changed) : (i && t._n9m && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t[yf].y,
                width: t.uiBounds.width,
                height: t[yf][Dh]
            }), i)
        },
        _jj: function (t, i, e, n) {
            n = n || this._jm._6q;
            var s = n.x, r = n.y, a = n[Ah], h = n[Dh];
            this._1r(s, r, a, h, e), this._4p(), this._fj[$r] && (hD ? (this._fj.sort(), this._naa = d(this._naa, Cj)) : this._naa[QO](Cj)), this._hy(t, i)
        },
        _hy: function (t, i) {
            t[eb](), this._ncd._k7(t, this._ji, this._jm), this._jm._nc3(t);
            for (var e, n, s = this._naa, r = [], a = 0, h = s[$r]; h > a; a++)e = s[a], n = e[yf], (this._ncd._ln || this._ncd._f2(n.x + e.$x, n.y + e.$y, n[Ah], n[Dh])) && (e._jc(t, i), e._jr && e._jr[$r] && r.push(e));
            if (r.length)for (a = 0, h = r[$r]; h > a; a++)r[a]._93(t, i);
            t.restore()
        },
        _fi: function (t, i, e) {
            t[eb](), t.translate(-e.x * i, -e.y * i), t.scale(i, i);
            var n, s, r = this._mw._ix.slice();
            this._fj[$r] && (hD ? (this._fj[QO](), r = d(r, Cj)) : r[QO](Cj));
            for (var a = [], h = 0, o = r[$r]; o > h; h++)n = r[h], n._hw && (s = n.uiBounds, e.intersectsRect(s.x + n.$x, s.y + n.$y, s.width, s[Dh]) && (n._jc(t, i), n._jr && n._jr.length && a.push(n)));
            if (a[$r])for (h = 0, o = a.length; o > h; h++)a[h]._93(t, i);
            t[vb]()
        },
        _1a: function () {
        },
        _2e: function () {
            for (var t, i, e = this._mw._ix, n = new SD, s = e.length - 1; s >= 0; s--)t = e[s], t._hw && (i = t.uiBounds, n.addRect(t.$x + i.x, t.$y + i.y, i[Ah], i[Dh]));
            var r = this._8e;
            this._8e = n, n[gd](r) || this._1a(r, n)
        },
        _nc4: function () {
            for (var t, i = this._mw._ix, e = i[$r] - 1; e >= 0; e--)t = i[e], this._nag(t) && !this._$m && (this._$m = !0)
        },
        _2d: function (t, i, e, n) {
            this._ncd._ln || (t && (t > 0 && this._ncd._ml(this._jm._6q.x, this._jm._6q.y, t / this._jm._ku, this._jm._9r / this._jm._ku), e + t < this._jm._n9s && this._ncd._ml(this._jm._6q.x + (e + t) / this._jm._ku, this._jm._6q.y, (this._jm._n9s - e - t) / this._jm._ku, this._jm._9r / this._jm._ku)), i && (i > 0 && this._ncd._ml(this._jm._6q.x, this._jm._6q.y, this._jm._n9s / this._jm._ku, i / this._jm._ku), n + i < this._jm._9r && this._ncd._ml(this._jm._6q.x, this._jm._6q.y + (n + i) / this._jm._ku, this._jm._n9s / this._jm._ku, (this._jm._9r - n - i) / this._jm._ku)))
        },
        _ea: function (t, i) {
            this._naj(), this._jm._ea(t, i)
        },
        _n9z: function (t, i, e) {
            this._naj(), this._jm._n9z(t, i, e)
        },
        _8d: function () {
        },
        _fh: function (t, i, e) {
            return this._n9m ? void(this._jm._fh(t, i, e) !== !1 && this._naj()) : void(this._jm._ku = t)
        },
        _2b: function () {
            var t = this._4p();
            if (!t.isEmpty()) {
                var i = this._jm._n9s / t[Ah], e = this._jm._9r / t.height, n = Math[oo](i, e);
                return n = Math[Uh](this._fy, Math[oo](this._g0, n)), {scale: n, cx: t.cx, cy: t.cy}
            }
        },
        _jo: function (t, i, e) {
            return this._jm._jo(t, i, e) === !1 ? !1 : void this._naj()
        },
        _hv: function (t, i) {
            return this._jm._hv(t, i) === !1 ? !1 : void this._naj()
        },
        _jq: function (t, i) {
            return this._jm._jq(t, i) === !1 ? !1 : void this._naj()
        },
        _6k: function () {
            return this._jm._6kFlag ? !1 : (this._jm._6kFlag = !0, void this._naj())
        },
        _61: function () {
            this._naa.length = 0, this._8f = {}
        },
        _l0: function () {
            this._kt()
        },
        _hs: function () {
            this._kt(), this._hsed = !0, this._6f = !1, this._topCanvas.clear(), this._88[$r] = 0, this._73 && (this._73._hs(), delete this._73)
        },
        _kt: function () {
            this._n9m = !1, this._$m = !0, this._mw[eh](), this._61(), this._ncd._kt(), this._naj()
        },
        _8c: function (t, i, e, n) {
            var s = this._ku;
            return new SD(this._na8(t), this._ncs(i), e / s, n / s)
        },
        _na8: function (t) {
            return this._jm._na8(t)
        },
        _ncs: function (t) {
            return this._jm._ncs(t)
        },
        _ew: function (t) {
            return this._jm._ew(t)
        },
        _ex: function (t) {
            return this._jm._ex(t)
        },
        _l4: function (t) {
            return this._mw.getById(t.id || t)
        },
        _$j: function (t) {
            var i = this._8b(t);
            return i.x = this._na8(i.x), i.y = this._ncs(i.y), i
        },
        _fg: function (t, i) {
            return {x: this._ew(t), y: this._ex(i)}
        },
        _dh: function (t, i) {
            return {x: this._na8(t), y: this._ncs(i)}
        },
        _8b: function (t) {
            return vi(t, this._mx)
        },
        _3x: function (t) {
            if (t[Sk] !== e)return t[Sk] ? this._mw[Eu](t.uiId) : null;
            var i = Math.round(gD.SELECTION_TOLERANCE / this._jm._ku) || .1;
            this._ji.ratio && (i *= this._ji[Rh]);
            for (var n, s = this._$j(t), r = s.x, a = s.y, h = this._naa, o = h.length - 1; o >= 0; o--)if (n = h[o], n._hw && n._hk(r, a, i))return t[Sk] = n.id, n;
            t[Sk] = null
        },
        _hk: function (t) {
            var i = this._3x(t);
            if (!i)return null;
            var e = Math[Io](gD.SELECTION_TOLERANCE / this._jm._ku) || 1;
            this._ji.ratio && (e *= this._ji[Rh]);
            var n = this._$j(t), s = n.x, r = n.y, a = i._hk(s, r, e, !0);
            return a instanceof lj ? a : i
        },
        _nc1: function (t) {
            t.id !== e && (t = t.id);
            var i = this._mw[Eu](t);
            return i ? new SD((i.$x || 0) + i.uiBounds.x, (i.$y || 0) + i[yf].y, i[yf].width, i[yf].height) : void 0
        },
        _88: null,
        _2m: function () {
            if (!this._88[$r])return !1;
            var t = this._88;
            this._88 = [], l(t, function (t) {
                try {
                    t[kk] ? m(t.call, t[ca], t[kk]) : t.call.call(t.scope)
                } catch (i) {
                }
            }, this), this._f6()
        },
        callLater: function (t, i, e) {
            i && S(i) && (e = i, i = null);
            var n = this._88;
            n.push({call: t, scope: i, delay: e}), this._6f || this._2m()
        }
    }, Z(_s.prototype, {
        _6q: {
            get: function () {
                return this._jm._6q
            }
        }, _en: {
            get: function () {
                return this._jm._en
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._jm._en = t)
            }
        }, _g0: {
            get: function () {
                return this._jm._g0
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._jm._g0 = t)
            }
        }, _fy: {
            get: function () {
                return this._jm._fy
            }, set: function (t) {
                return !t || 0 >= t ? !1 : void(this._jm._fy = t)
            }
        }, _ku: {
            get: function () {
                return this._jm._fx()
            }, set: function (t) {
                this._fh(t)
            }
        }, _n3: {
            get: function () {
                return this._jm._lk()
            }
        }, _n2: {
            get: function () {
                return this._jm._lj()
            }
        }
    }), fs[_a] = {
        _d2: null,
        _n9s: 0,
        _9r: 0,
        _2z: !0,
        _1g: !0,
        _jm: null,
        _6q: null,
        _en: 1.3,
        _g0: 10,
        _fy: .1,
        _ku: 1,
        _n3: 0,
        _n2: 0,
        _6n: function () {
            this._jm._gz(this._d2._ji)
        },
        _4y: function () {
            return this._1g = !1, this._5h(this._d2._mx[Ik], this._d2._mx.clientHeight)
        },
        _5h: function (t, i) {
            return this._n9s == t && this._9r == i ? !1 : (this._n9s = t, this._9r = i, void this._d2._3o(t, i))
        },
        _es: function (t, i, e) {
            e && (e = Math.max(this._fy, Math[oo](this._g0, e)), this._ku = e), this._n3 = this._n9s / 2 - t * this._ku, this._n2 = this._9r / 2 - i * this._ku, this._2z = !0
        },
        _34: function (t, i) {
            t = t || this._n9s, i = i || this._9r, this._6q.set(-this._n3 / this._ku, -this._n2 / this._ku, t / this._ku, i / this._ku)
        },
        _jo: function (t, i, e) {
            return this._fh(this._5j() * t, i, e)
        },
        _jq: function (t, i) {
            return this._fh(this._5j() * this._en, t, i)
        },
        _hv: function (t, i) {
            return this._fh(this._5j() / this._en, t, i)
        },
        _fh: function (t, i, n) {
            this._6kFlag = !1, t = Math[Uh](this._fy, Math[oo](this._g0, t));
            var s = this._5j();
            return i === e && (i = this._n9s / 2, n = this._9r / 2), t != s && (this._2z = !0, this._d2._8d(s, t)), this._jm._fh(t / this._ku, i, n)
        },
        _5j: function () {
            return this._ku * this._jm._ku
        },
        _ea: function (t, i) {
            this._jm._ea(t, i)
        },
        _n9z: function (t, i, e) {
            var n = this._lk(), s = this._lj(), r = this._fx();
            return e && (e = Math[Uh](this._fy, Math.min(this._g0, e))), t != n || i != s || e && e != r ? (e && e != r ? (e /= this._ku, this._2z = !0) : e = this._jm._ku, t -= n * e, i -= s * e, this._jm._9z(e, t, i), this._d2._3d(n, s, r, arguments[0], arguments[1], arguments[2]), r != arguments[2] && this._d2._8d(r, arguments[2]), !0) : !1
        },
        _6k: function () {
            this._6kFlag = !0
        },
        _fx: function () {
            return this._ku * this._jm._ku
        },
        _lk: function () {
            return this._n3 * this._jm._ku + this._jm._n3
        },
        _lj: function () {
            return this._n2 * this._jm._ku + this._jm._n2
        },
        _jd: function (t, i) {
            this._1g && this._4y(), dD && cD && (i = !0);
            var e = t._ji, n = e.ratio || 1, s = e.clientWidth, r = e[Lk], a = this._n9s != s, h = this._9r != r, o = a || h;
            o && t._topCanvas._ji.setSize(this._n9s, this._9r);
            var _ = this._n3, f = this._n2, c = this._ku;
            if (this._6kFlag) {
                this._6kFlag = !1;
                var u = t._2b();
                u && this._es(u.cx, u.cy, u[Co])
            }
            if (this._2z || i || o)return this._2z = !1, this._ku *= this._jm._ku, this._n3 = this._n3 * this._jm._ku + this._jm._n3, this._n2 = this._n2 * this._jm._ku + this._jm._n2, this._jm._ku = 1, this._jm._n3 = 0, this._jm._n2 = 0, o && e[Gh](this._n9s, this._9r), t._ncd._ln = !0, this._34(this._n9s, this._9r), void((_ != this._n3 || f != this._n2 || c != this._ku) && (t._3d(_, f, c, this._n3, this._n2, this._ku), c != this._ku && t._8d(c, this._ku)));
            var d = this._jm._n3, l = this._jm._n2;
            if (d || l) {
                this._jm._n3 = 0, this._jm._n2 = 0, this._n3 += d, this._n2 += l, this._34(s, r);
                var v = e.g;
                this._e2(v, e, d * n, l * n), t._2d(d, l, s, r), t._3d(_, f, c, this._n3, this._n2, this._ku)
            }
        },
        _e2: function (t, e, n, s) {
            var r = this._ncackCanvas;
            r || (r = this._ncackCanvas = i.createElement(Mh), r.g = r.getContext($h)), r.width = e[Ah], r.height = e[Dh], r.g[xb](e, n, s), t._kt(), t[xb](r, 0, 0)
        },
        _nc3: function (t) {
            1 != t.canvas.ratio && t.scale(t.canvas[Rh], t[Mh].ratio), t.translate(this._n3, this._n2), t.scale(this._ku, this._ku)
        },
        _na8: function (t) {
            return (t - this._n3) / this._ku
        },
        _ncs: function (t) {
            return (t - this._n2) / this._ku
        },
        _ew: function (t) {
            return t * this._ku + this._n3
        },
        _ex: function (t) {
            return t * this._ku + this._n2
        }
    };
    var Pj = function () {
        this._h2 = [], this._j6 = new SD
    };
    Pj.prototype = {
        _h0: 20, _h2: null, _ln: !1, _j6: null, _kt: function () {
            this._ln = !1, this._h2.length = 0, this._j6.clear()
        }, _hr: function () {
            return this._ln || this._h2[$r] > 0
        }, _ml: function (t, i, e, n) {
            this._ln || 0 >= e || 0 >= n || (this._h2.push({x: t, y: i, width: e, height: n}), this._j6[Ru](t, i, e, n))
        }, _h4: function (t) {
            this._ml(t.x, t.y, t.width, t[Dh])
        }, _f2: function (t, i, e, n) {
            if (!this._j6.intersectsRect(t, i, e, n))return !1;
            if (bD || this._h2[$r] >= this._h0)return !0;
            for (var s, r = 0, a = this._h2.length; a > r; r++)if (s = this._h2[r], ri(t, i, e, n, s.x, s.y, s.width, s.height))return !0;
            return !1
        }, _k7: function (t, i, e) {
            if (this._ln)return t[Lo](1, 0, 0, 1, 0, 0), void t[Ao](0, 0, i.width, i.height);
            t[Vb]();
            var n, s, r, a, h = e._ku, o = this._h2, _ = i.ratio || 1;
            if (bD || o.length >= this._h0)return n = e._ew(this._j6.x) * _, s = e._ex(this._j6.y) * _, r = X(n + this._j6[Ah] * h * _) - (n = W(n)), a = X(s + this._j6.height * h * _) - (s = W(s)), t.clearRect(n, s, r, a), t[_v](n, s, r, a), void t[Jg]();
            for (var f, c = 0, u = o.length; u > c; c++)f = o[c], n = e._ew(f.x) * _, s = e._ex(f.y) * _, r = X(n + f.width * h * _) - (n = W(n)), a = X(s + f.height * h * _) - (s = W(s)), t.clearRect(n, s, r, a), t.rect(n, s, r, a);
            t[Jg]()
        }
    };
    var Dj = {};
    Dj[bj.SELECTION_COLOR] = gD.SELECTION_COLOR, Dj[bj.SELECTION_BORDER] = gD.SELECTION_BORDER, Dj[bj[pm]] = gD[pm], Dj[bj[Fv]] = xM.SELECTION_TYPE_SHADOW, Dj[bj[mm]] = 2, Dj[bj[xm]] = 2, Dj[bj.LABEL_COLOR] = gD[aw], Dj[bj.LABEL_POSITION] = ID[Ak], Dj[bj.LABEL_ANCHOR_POSITION] = ID.CENTER_TOP, Dj[bj.LABEL_PADDING] = new kD(0, 2), Dj[bj[yw]] = 8, Dj[bj.LABEL_RADIUS] = 8, Dj[bj.LABEL_POINTER] = !0, Dj[bj[Rx]] = 0, Dj[bj[ow]] = lb, Dj[bj.LABEL_ROTATABLE] = !0, Dj[bj.LABEL_BACKGROUND_COLOR] = null, Dj[bj.LABEL_BACKGROUND_GRADIENT] = null, Dj[bj.EDGE_COLOR] = Ck, Dj[bj.EDGE_WIDTH] = 1.5, Dj[bj.EDGE_FROM_AT_EDGE] = !0, Dj[bj.EDGE_TO_AT_EDGE] = !0, Dj[bj[zx]] = V(3438210798), Dj[bj[Yx]] = 1, Dj[bj.GROUP_STROKE_STYLE] = lb, Dj[bj[nO]] = !0, Dj[bj.ARROW_FROM_SIZE] = gD.ARROW_SIZE, Dj[bj.ARROW_TO_SIZE] = gD[Rk], Dj[bj[Wf]] = 10, Dj[bj.EDGE_CORNER_RADIUS] = 8, Dj[bj.EDGE_CORNER] = xM.EDGE_CORNER_ROUND, Dj[bj.EDGE_SPLIT_BY_PERCENT] = !0, Dj[bj.EDGE_EXTEND] = 20, Dj[bj.EDGE_SPLIT_PERCENT] = .5, Dj[bj[gT]] = 20, Dj[bj[cT]] = 20, Dj[bj.EDGE_BUNDLE_LABEL_ANCHOR_POSITION] = ID.CENTER_BOTTOM, Dj[bj[NO]] = ID.CENTER_TOP, Dj[bj[Vx]] = Pk, Dj[bj.SHAPE_STROKE] = 1, Dj[bj.SHAPE_STROKE_STYLE] = Dk, Dj[bj[Mk]] = gD.BLEND_MODE, Dj[bj[Om]] = 1, xM[Nk] = jk, xM.NAVIGATION_NONE = Bk, xM[$k] = Gk, gD[Fk] = xM.NAVIGATION_SCROLLBAR;
    var Mj = function (t, e) {
        this._kd = t, k(e) && (e = i[zk](e)), e && e.tagName || (e = i[Jf](Vf)), j(this, Mj, [e]), this._kd._13[qc](this._1k, this), this._kd._8[qc](this._1v, this), this._kd._20[qc](this._9o, this), this._kd._1e[qc](this._6w, this), this._kd._$r.addListener(this._3m, this), this._kd._$v[qc](this._42, this), this._nc2 = {}, this._46(gD.NAVIGATION_TYPE, !0)
    };
    Mj[_a] = {
        _$n: null, _42: function (t) {
            var i = t[Ku], e = t[no];
            if (e)if (this._n9m) {
                var n, s;
                if (L(e))for (var r = 0, a = e[$r]; a > r; r++)s = e[r].id, n = this._mw[Eu](s), n && (n[Yk] = i[I_](s), n.invalidateRender()); else {
                    if (s = e.id, n = this._mw.getById(s), !n)return;
                    n[Yk] = i[I_](s), n[WO]()
                }
                this._naj()
            } else {
                this._$n || (this._$n = {});
                var n, s;
                if (L(e))for (var r = 0, a = e.length; a > r; r++)s = e[r].id, this._$n[s] = !0; else s = e.id, this._$n[s] = !0
            }
        }, _kd: null, _naz: function (t) {
            var i = t.uiClass;
            return i ? new i(t, this._kd) : void 0
        }, _1k: function () {
        }, _1v: function (t) {
            if (!this._n9m)return !1;
            var i = t.source, e = t[ad];
            QE == e && this._kd.invalidateVisibility(), ZE == e ? (this._mw[Hk](i.id), this._kw(i)) : $p == e && i._i0() && t.value && this._5n(i);
            var n = this._mw.getById(i.id);
            n && n._n9m && n[Uk](t) && this._naj()
        }, _48: function (t) {
            var i = this._l4(t);
            i && (i.invalidateData(), this._naj())
        }, _9o: function (t) {
            if (!this._n9m)return !1;
            switch (this._$m = !0, t.kind) {
                case WD.KIND_ADD:
                    this._kw(t[no]);
                    break;
                case WD.KIND_REMOVE:
                    this._h7(t.data);
                    break;
                case WD.KIND_CLEAR:
                    this._i2(t.data)
            }
        }, _kt: function () {
            this._nc2 = {}, B(this, Mj, qk)
        }, _nc2: null, _kw: function (t) {
            var i = this._naz(t);
            i && (this._mw.add(i), this._n9m && (this._nc2[t.id] = t), this._naj())
        }, _h7: function (t) {
            if (mM.isArray(t)) {
                for (var i, e = [], n = 0, s = t[$r]; s > n; n++)i = t[n].id, e[Qh](i), delete this._nc2[i];
                t = e
            } else t = t.id, delete this._nc2[t];
            this._mw[Zr](t) && this._naj()
        }, _i2: function () {
            this._kt()
        }, _6w: function (t) {
            return this._n9m ? void(t[Ku]instanceof fj && !this._nc2[t[Ku].id] && (t[td] && (this._48(t[td]), t.oldValue.__6f = !0), t[Ic] && (this._48(t.value), t.value.__6f = !0), this._5n(t[Ku]))) : !1
        }, _3m: function (t) {
            return this._n9m ? void(t.source instanceof fj && !this._nc2[t[Ku].id] && this._5n(t.source)) : !1
        }, _nc4: function (t) {
            return t ? this._11() : void this._9g()
        }, _3l: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[C_](!0);
                i ? i._f6(this._kd) : t._edgeBundleInvalidateFlag = !1
            }
        }, _11: function () {
            var t, i = (this._kd, this._kd.graphModel), e = this._mw, n = [], s = 1;
            if (i[Wk](function (i) {
                    return i instanceof _j ? (this._3l(i), void n[Qh](i)) : (t = this._naz(i), void(t && (e.add(t), t._hw = this._ee(i, !1, !0), i.__lg = s++)))
                }, this), e.length)for (var r = e._ix, s = r.length - 1; s >= 0; s--)t = r[s], t._hw && this._3t(t, t.$data);
            for (var a, s = 0, h = n.length; h > s; s++)if (a = n[s], t = this._naz(a))if (t._hw = this._ee(a, !0, !0), t._hw) {
                this._3t(t, a, !0), e[Vr](t);
                var o = a[R_], _ = a[A_], f = o.__lg || 0;
                o != _ && (f = Math[Uh](f, _.__lg || 0)), a.__lg = f
            } else e.add(t);
            if (n[$r] && e._ix.sort(function (t, i) {
                    return t.$data.__lg - i.$data.__lg
                }), this._$n) {
                var c = i.selectionModel;
                for (var u in this._$n)if (c[I_](u)) {
                    var t = e[Eu](u);
                    t && (t.selected = !0)
                }
                this._$n = null
            }
        }, _9g: function () {
            for (var t in this._nc2) {
                var i = this._nc2[t];
                i instanceof fj ? this._5n(i) : this._5s(i)
            }
            this._nc2 = {};
            for (var e, n, s, r = this._mw._ix, a = [], h = r[$r] - 1; h >= 0; h--)e = r[h], n = e[Vo], s = n instanceof _j, s && this._3l(n), e._hw = this._ee(n, s), e._hw ? s ? a[Qh](e) : this._3t(e, n) && !this._$m && (this._$m = !0) : n.__hwChanged && e._n9m && (e.__oldBounds = {
                x: e.$x + e.uiBounds.x,
                y: e.$y + e.uiBounds.y,
                width: e.uiBounds[Ah],
                height: e.uiBounds[Dh]
            });
            if (a.length)for (var h = 0, o = a.length; o > h; h++)e = a[h], this._3t(e, e.$data) && !this._$m && (this._$m = !0)
        }, _3t: function (t, i, n) {
            if (n || n === e && i instanceof _j)return i.__53 && (i.__53 = !1, t._53()), this._nag(t);
            if (i.__6f && i._i0() && (t._5v(), i.__6f = !1), this._nag(t)) {
                var s = this._4s(i);
                return s && (s.__6f = !0), i[WE]() && i[iu](function (t) {
                    t.__53 = !0
                }, this), !0
            }
        }, _3k: function (t, i) {
            var e = t[R_], n = t[A_], s = i[Xk](e.id);
            if (e == n)return s;
            var r = i[Xk](n.id);
            return Math[Uh](s, r)
        }, _3j: function (t, i) {
            var e = this[bc]._gc(t);
            return e ? i.getIndexById(e.id) : 0
        }, _5n: function (t) {
            var i = this._mw, e = i.getById(t.id);
            if (!e)throw new Error(Vk + t[vo] + Kk);
            var s = this._3j(t, i), r = [e];
            t.hasChildren() && n(t, function (t) {
                t instanceof fj && (e = i[Eu](t.id), e && r[Qh](e))
            }, this), this._4u(i, s, r)
        }, _5s: function (t) {
            var i = this._mw[Eu](t.id);
            if (i) {
                var e = this._3k(t, this._mw);
                this._mw[Zk](i, e)
            }
        }, _4u: function (t, i, e) {
            function n(t) {
                s[Vr](t)
            }

            var s = new ED;
            l(e, function (e) {
                i = t[Jk](e, i), e.$data.forEachEdge(n)
            }, this), 0 != s[$r] && s.forEach(this._5s, this)
        }, _8n: function (t) {
            return t.getEdgeBundle(!0)
        }, _57: function (t) {
            if (!t[ck]())return !1;
            var i = t.getEdgeBundle(!0);
            i && i.reverseExpanded() !== !1 && this._naj()
        }, _4s: function (t) {
            var i = bn(t);
            return i && i[$p] ? i : null
        }, _h5: function (t) {
            return bn(t)
        }, _31: function (t, i, e) {
            t._$x = !1;
            var n = t._hw;
            t._hw = this._5e(t, i), e || t._hw == n || (t.__hwChanged = !0)
        }, _5e: function (t, i) {
            return this._44(t, i) ? !this._kd._hwFilter || this._kd._hwFilter(t) !== !1 : !1
        }, _ee: function (t, i, e) {
            return t._$x && this._31(t, i, e), t._hw
        }, _9b: function (t) {
            return !this._kd._41 || this._kd._41 == Zs(t)
        }, _44: function (t, i) {
            if (t[Qk] === !1)return !1;
            if (i === e && (i = t instanceof _j), !i)return this._kd._41 != Zs(t) ? !1 : !t._dk;
            var n = t[R_], s = t[A_];
            if (!n || !s)return !1;
            if (n == s && !t[tI]())return !1;
            if (t[ck]()) {
                var r = t.getEdgeBundle(!0);
                if (r && !r._ee(t))return !1
            }
            var a = this._ee(n, !1), h = this._ee(s, !1);
            return a && h ? !0 : !1
        }, _71: null, _73: null, _46: function (t, i) {
            return i || t != this._71 ? (this._71 = t, this._73 && (this._73._hs(), delete this._73), t == xM[Nk] ? void(this._73 = new er(this, this._mx)) : t == xM.NAVIGATION_BUTTON ? void(this._73 = new ir(this, this._mx)) : void 0) : !1
        }, _3d: function (t, i, e, n, s, r) {
            this._kd._4k(new BD(this._kd, ec, {tx: n, ty: s, scale: r}, {tx: t, ty: i, scale: e})), this._5z()
        }, _8d: function (t, i) {
            this._kd._4k(new BD(this._kd, Co, i, t))
        }, _5z: function () {
            this._73 && this._73._jd(), this._kd._4k(new BD(this._kd, Zh))
        }, _1a: function (t, i) {
            this._kd._4k(new BD(this._kd, iI, i, t)), this._5z()
        }
    }, N(Mj, _s), Z(Mj[_a], {
        graphModel: {
            get: function () {
                return this._kd._kdModel
            }
        }
    });
    var Nj = function (i, e) {
        this._13 = new HD, this._13.on(function (t) {
            Cp == t[ad] && this.invalidateVisibility()
        }, this), this._20 = new HD, this._20.addListener(function (t) {
            !this[Cp] || t.kind != WD[Od] && t.kind != WD[wd] || this.graphModel.contains(this[Cp]) || (this[Cp] = null)
        }, this), this._8 = new HD, this._1e = new HD, this._$r = new HD, this._$v = new HD, this.graphModel = e || new Jn, this._84 = new Mj(this, i), this._36 = new Ir(this), this._1p = new HD, this._onresize = nM(t, eI, function () {
            this[nI]()
        }, !1, this), this._84._mx[sI] = function (t) {
            this[sI](t)
        }.bind(this), this._84._mx.ondragover = function (t) {
            this[rI](t)
        }.bind(this)
    };
    Nj.prototype = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            mM.stopEvent(t)
        },
        getDropInfo: function (t, i) {
            var e = null;
            if (i)try {
                e = JSON.parse(i)
            } catch (n) {
            }
            return e
        },
        ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var e = i.getData(Pc), n = this.getDropInfo(t, e);
                n || (n = {}, n.image = i[qa](wb), n[ao] = i.getData(ao), n[Fy] = i.getData(Fy), n[zp] = i.getData(zp));
                var s = this.globalToLocal(t);
                if (s = this.toLogical(s.x, s.y), !(this[aI]instanceof Function && this.dropAction.call(this, t, s, n) === !1) && (n.image || n[Fy])) {
                    var r = n.image, a = n.type, h = n[Fy], o = n.groupImage;
                    mM.stopEvent(t);
                    var _;
                    if (a && hI != a ? Up == a ? _ = this.createText(h, s.x, s.y) : Sp == a ? _ = this.createShapeNode(h, s.x, s.y) : Yp == a ? (_ = this.createGroup(h, s.x, s.y), o && (o = Ks(o), o && (_.groupImage = o))) : (a = J(a), a instanceof Function && a.prototype instanceof fj && (_ = new a, _.name = h, _.location = new xD(s.x, s.y), this._kdModel[Vr](_))) : _ = this[oI](h, s.x, s.y), _) {
                        if (r && (r = Ks(r), r && (_.image = r)), t.shiftKey) {
                            var f = this[Wa](t);
                            (f[QE] || f instanceof dj) && (_[L_] = f)
                        }
                        if (n.properties)for (var c in n[_I])_[c] = n.properties[c];
                        if (n.clientProperties)for (var c in n.clientProperties)_.set(c, n[fI][c]);
                        if (n.styles && _[Tp](n.styles), this[cI](_, t, n) === !1)return !1;
                        var u = new kr(this, kr[uI], t, _);
                        return this.onInteractionEvent(u), _
                    }
                }
            }
        },
        enableDoubleClickToOverview: !0,
        _84: null,
        _13: null,
        _20: null,
        _8: null,
        _$v: null,
        _1e: null,
        _$r: null,
        _2a: function (t) {
            return this._13.beforeEvent(t)
        },
        _4k: function (t) {
            this._13.onEvent(t)
        },
        isVisible: function (t) {
            return this._84._ee(t)
        },
        isMovable: function (t) {
            return t instanceof fj && t[dI] !== !1
        },
        isSelectable: function (t) {
            return t[lI] !== !1
        },
        isEditable: function (t) {
            return t.editable !== !1
        },
        isRotatable: function (t) {
            return t[Ow] !== !1
        },
        isResizable: function (t) {
            return t.resizable !== !1
        },
        canLinkFrom: function (t) {
            return t.linkable !== !1
        },
        canLinkTo: function (t) {
            return t[vI] !== !1
        },
        createNode: function (t, i, e) {
            var n = new fj(t, i, e);
            return this._kdModel[Vr](n), n
        },
        createText: function (t, i, e) {
            var n = new ts(t, i, e);
            return this._kdModel.add(n), n
        },
        createShapeNode: function (t, i, e, n) {
            S(i) && (n = e, e = i, i = null);
            var s = new cj(t, i);
            return s.$location = new xD(e, n), this._kdModel.add(s), s
        },
        createGroup: function (t, i, e) {
            var n = new dj(t, i, e);
            return this._kdModel[Vr](n), n
        },
        createEdge: function (t, i, e) {
            if (t instanceof fj) {
                var n = e;
                e = i, i = t, t = n
            }
            var s = new _j(i, e);
            return t && (s.$name = t), this._kdModel[Vr](s), s
        },
        addElement: function (t, i) {
            this._kdModel[Vr](t), i && t.hasChildren() && t[$_](function (t) {
                this[bI](t, i)
            }, this)
        },
        removeElement: function (t) {
            this._kdModel.remove(t)
        },
        clear: function () {
            this._kdModel.clear()
        },
        getStyle: function (t, i) {
            var n = t._j0[i];
            return n !== e ? n : this.getDefaultStyle(i)
        },
        getDefaultStyle: function (t) {
            if (this._j0) {
                var i = this._j0[t];
                if (i !== e)return i
            }
            return Dj[t]
        },
        translate: function (t, i, e) {
            return e ? this.translateTo(this.tx + t, this.ty + i, this[Co], e) : this._84._ea(t, i)
        },
        translateTo: function (t, i, e, n) {
            if (n) {
                var s = this._65();
                return s._kp(t, i, e, n)
            }
            return this._84._n9z(t, i, e)
        },
        centerTo: function (t, i, e, n) {
            return (!e || 0 >= e) && (e = this.scale), this[gI](this[Ah] / 2 - t * e, this[Dh] / 2 - i * e, e, n)
        },
        moveToCenter: function (t, i) {
            this.callLater(function () {
                var e = this.bounds;
                this[yI](e.cx, e.cy, t, i)
            }, this)
        },
        zoomToOverview: function (t) {
            return t ? this.callLater(function () {
                var i = this._84._2b();
                i && this[yI](i.cx, i.cy, i[Co], t)
            }, this) : void this._84._6k()
        },
        zoomAt: function (t, i, n, s) {
            if (s === e && (s = gD.ZOOM_ANIMATE), i === e && (i = this[Ah] / 2), i = i || 0, n === e && (n = this[Dh] / 2), n = n || 0, s) {
                var r = this.scale;
                return t = r * t, t >= this.maxScale || t <= this[EI] ? !1 : (i = t * (this.tx - i) / r + i, n = t * (this.ty - n) / r + n, this.translateTo(i, n, t, s))
            }
            return this._84._jo(t, i, n)
        },
        zoomOut: function (t, i, e) {
            return this[pI](1 / this[mI], t, i, e)
        },
        zoomIn: function (t, i, e) {
            return this.zoomAt(this.scaleStep, t, i, e)
        },
        _65: function () {
            return this._panAnimation || (this._panAnimation = new zj(this)), this._panAnimation
        },
        enableInertia: !0,
        _9u: function (t, i) {
            var e = this._65();
            return e._hb(t || 0, i || 0)
        },
        getUI: function (t) {
            return Q(t) ? this._84._3x(t) : this._84._l4(t)
        },
        getUIByMouseEvent: function (t) {
            return this._84._3x(t)
        },
        hitTest: function (t) {
            return this._84._hk(t)
        },
        globalToLocal: function (t) {
            return this._84._8b(t)
        },
        toCanvas: function (t, i) {
            return this._84._fg(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._84._$j(t) : this._84._dh(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._84._3x(t);
            return i ? i[Vo] : void 0
        },
        getElement: function (t) {
            if (Q(t)) {
                var i = this._84._3x(t);
                return i ? i.$data : null
            }
            return this._kdModel[Eu](t)
        },
        invalidate: function () {
            this._84._naj()
        },
        invalidateUI: function (t) {
            t.invalidate(), this[VE]()
        },
        invalidateElement: function (t) {
            this._84._48(t)
        },
        getUIBounds: function (t) {
            return this._84._nc1(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._84._4q(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._84._16(t, i)
        },
        forEachUI: function (t, i) {
            return this._84._ek(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._84._4d(t, i)
        },
        forEach: function (t, i) {
            return this._kdModel[l_](t, i)
        },
        getElementByName: function (t) {
            var i;
            return this._kdModel.forEach(function (e) {
                return e.name == t ? (i = e, !1) : void 0
            }), i
        },
        focus: function (i) {
            if (i) {
                var e = t[Mc] || t[Ya], n = t.scrollY || t[wc];
                return this.html.focus(), void t.scrollTo(e, n)
            }
            this.html.focus()
        },
        callLater: function (t, i, e) {
            this._84[xI](t, i, e)
        },
        exportImage: function (t, i) {
            return hr(this, t, i)
        },
        setSelection: function (t) {
            return this._kdModel._selectionModel.set(t)
        },
        select: function (t) {
            return this._kdModel._selectionModel[jc](t)
        },
        unselect: function (t) {
            return this._kdModel._selectionModel[TI](t)
        },
        reverseSelect: function (t) {
            return this._kdModel._selectionModel.reverseSelect(t)
        },
        selectAll: function () {
            rr(this)
        },
        unSelectAll: function () {
            this[vc][eh]()
        },
        unselectAll: function () {
            this[wI]()
        },
        isSelected: function (t) {
            return this._kdModel._selectionModel.contains(t)
        },
        sendToTop: function (t) {
            En(this._kdModel, t)
        },
        sendToBottom: function (t) {
            pn(this._kdModel, t)
        },
        moveElements: function (t, i, e) {
            var n = [], s = new ED;
            return l(t, function (t) {
                t instanceof fj ? n[Qh](t) : t instanceof _j && s.add(t)
            }), this._f0(n, i, e, s)
        },
        _f0: function (t, i, e, n) {
            if (0 == i && 0 == e || 0 == t[$r] && 0 == n.length)return !1;
            if (0 != t[$r]) {
                var s = this._4n(t);
                n = this._4l(s, n), l(s, function (t) {
                    var n = t[fp];
                    n ? t.setLocation(n.x + i, n.y + e) : t.setLocation(i, e)
                })
            }
            return !0
        },
        _4l: function (t, i) {
            return i
        },
        _4n: function (t) {
            var i = new ED;
            return l(t, function (t) {
                !this[OI](t), i[Vr](t), gn(t, i, this._movableFilter)
            }, this), i
        },
        reverseExpanded: function (t) {
            return this._84._57(t)
        },
        _36: null,
        _1p: null,
        beforeInteractionEvent: function (t) {
            return this._1p.beforeEvent(t)
        },
        onInteractionEvent: function (t) {
            this._1p.onEvent(t)
        },
        addCustomInteraction: function (t) {
            this._36[SI](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t.tooltip || t[vo]
        },
        updateViewport: function () {
            this._84._3r()
        },
        destroy: function () {
            this._4k(new BD(this, gf, !0, this._hsed)), this._hsed = !0, sM(t, eI, this._onresize), F(this, kI), this._36[gf](), this[bc] = new Jn;
            var i = this.html;
            this._84._hs(), i && (i.innerHTML = "")
        },
        onPropertyChange: function (t, i, e) {
            this._13.addListener(function (n) {
                n.kind == t && i[Br](e, n)
            })
        },
        removeSelection: function () {
            var t = this[vc]._ix;
            return t && 0 != t.length ? (t = t.slice(), this._kdModel[Zr](t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this[vc].datas;
            return i && 0 != i[$r] ? void mM[II](LI + i.length, function () {
                var i = this.removeSelection();
                if (i) {
                    var e = new kr(this, kr.ELEMENT_REMOVED, t, i);
                    this[AI](e)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, e, n) {
            var s = new nN(i);
            i[$r] > 2 && s.closePath();
            var r = this[CI](RI, s, e, n);
            this[cI](r, t);
            var a = new kr(this, kr[uI], t, r);
            return this.onInteractionEvent(a), r
        },
        createLineByInteraction: function (t, i, e, n) {
            var s = new nN(i), r = this[CI](PI, s, e, n);
            r.setStyle(mM[DI].SHAPE_FILL_COLOR, null), r[df](mM.Styles[Yw], null), r.setStyle(mM.Styles[qm], !0), this.onElementCreated(r, t);
            var a = new kr(this, kr[uI], t, r);
            return this[AI](a), r
        },
        createEdgeByInteraction: function (t, i, e, n) {
            var s = this[MI](NI, t, i);
            if (n)s._9d = n; else {
                var r = this[jI], a = this.edgeType;
                this.interactionProperties && (r = this.interactionProperties[ZE] || r, a = this.interactionProperties[Uf] || a), r && (s[ZE] = r), a && (s[Uf] = a)
            }
            this.onElementCreated(s, e);
            var h = new kr(this, kr.ELEMENT_CREATED, e, s);
            return this[AI](h), s
        },
        onElementCreated: function (t) {
            !t.parent && this.currentSubNetwork && (t.parent = this[Cp])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, e, n) {
            var s = this;
            e[BI](n.x, n.y, i[no], this.getStyle(t, bj.LABEL_FONT_SIZE), function (e) {
                return s.onLabelEdit(t, i, e, i.parent)
            })
        },
        onLabelEdit: function (t, i, e, n) {
            return e || this.allowEmptyLabel ? void(Fy == i.name ? t[vo] = e : n._fr(i, e) === !1 && (i.data = e, this[$I](t))) : (mM[Hl](GI), !1)
        },
        setInteractionMode: function (t, i) {
            this[FI] = t, this[zI] = i
        },
        upSubNetwork: function () {
            return this._41 ? this[Cp] = Zs(this._41) : !1
        },
        _$x: !1,
        invalidateVisibility: function () {
            this._$x = !0, this[VE]()
        },
        getBundleLabel: function (t) {
            var i = t.getEdgeBundle(!0);
            return i && i[YI] == t ? HI + i[UI][$r] : null
        }
    }, Z(Nj.prototype, {
        center: {
            get: function () {
                return this[qI](this[_l][Ik] / 2, this.html[Lk] / 2)
            }
        }, visibleFilter: {
            get: function () {
                return this._hwFilter
            }, set: function (t) {
                this._hwFilter = t, this[VE]()
            }
        }, topCanvas: {
            get: function () {
                return this._84._topCanvas
            }
        }, propertyChangeDispatcher: {
            get: function () {
                return this._13
            }
        }, listChangeDispatcher: {
            get: function () {
                return this._20
            }
        }, dataPropertyChangeDispatcher: {
            get: function () {
                return this._8
            }
        }, selectionChangeDispatcher: {
            get: function () {
                return this._$v
            }
        }, parentChangeDispatcher: {
            get: function () {
                return this._1e
            }
        }, childIndexChangeDispatcher: {
            get: function () {
                return this._$r
            }
        }, bounds: {
            get: function () {
                return this._84._4p()
            }
        }, interactionDispatcher: {
            get: function () {
                return this._1p
            }
        }, cursor: {
            set: function (t) {
                this[_l][zc].cursor = t || this._36.defaultCursor
            }, get: function () {
                return this[_l][zc][WI]
            }
        }, interactionMode: {
            get: function () {
                return this._36._naurrentMode
            }, set: function (t) {
                var i = this.interactionMode;
                i != t && (this._36.currentMode = t, this._4k(new BD(this, FI, t, i)))
            }
        }, scaleStep: {
            get: function () {
                return this._84._en
            }, set: function (t) {
                this._84._en = t
            }
        }, maxScale: {
            get: function () {
                return this._84._g0
            }, set: function (t) {
                this._84._g0 = t
            }
        }, minScale: {
            get: function () {
                return this._84._fy
            }, set: function (t) {
                this._84._fy = t
            }
        }, scale: {
            get: function () {
                return this._84._ku
            }, set: function (t) {
                return this._84._ku = t
            }
        }, tx: {
            get: function () {
                return this._84._n3
            }
        }, ty: {
            get: function () {
                return this._84._n2
            }
        }, styles: {
            get: function () {
                return this._j0
            }, set: function (t) {
                this._j0 = t
            }
        }, selectionModel: {
            get: function () {
                return this._kdModel._selectionModel
            }
        }, graphModel: {
            get: function () {
                return this._kdModel
            }, set: function (t) {
                if (this._kdModel == t)return !1;
                var i = this._kdModel, e = new BD(this, bc, i, t);
                return this._2a(e) === !1 ? !1 : (null != i && (i[XI].removeListener(this._13, this), i.listChangeDispatcher[yd](this._20, this), i[Dd][yd](this._8, this), i[Fd][yd](this._1e, this), i.childIndexChangeDispatcher[yd](this._$r, this), i.selectionChangeDispatcher.removeListener(this._$v, this)), this._kdModel = t, this._kdModel && (this._kdModel.propertyChangeDispatcher.addListener(this._13, this), this._kdModel.listChangeDispatcher.addListener(this._20, this), this._kdModel.dataChangeDispatcher[qc](this._8, this), this._kdModel[Fd][qc](this._1e, this), this._kdModel[VI].addListener(this._$r, this), this._kdModel[KI][qc](this._$v, this)), this._84 && this._84._l0(), void this._4k(e))
            }
        }, count: {
            get: function () {
                return this._kdModel.length
            }
        }, width: {
            get: function () {
                return this.html[Ik]
            }
        }, height: {
            get: function () {
                return this[_l].clientHeight
            }
        }, viewportBounds: {
            get: function () {
                return this._84._6q
            }
        }, html: {
            get: function () {
                return this._84._mx
            }
        }, navigationType: {
            get: function () {
                return this._84._71
            }, set: function (t) {
                this._84._46(t)
            }
        }, _41: {
            get: function () {
                return this._kdModel._41
            }
        }, currentSubNetwork: {
            get: function () {
                return this._kdModel.currentSubNetwork
            }, set: function (t) {
                this._kdModel[Cp] = t
            }
        }
    }), Js[_a] = {
        initialize: function () {
            B(this, Js, ok), this.checkBody()
        }, _ncn: function () {
            this._m1 = new nN, this.shape = new Ij(this._m1), this.shape[Xo] = !1, this[XO](this[Jw], 0), this.body = this.shape
        }, checkBody: function () {
            return this._5w() ? (this._2l = !0, this.shape ? (this[Jw][Qk] = !0, this.body = this.shape) : (this._ncn(), xj[VO](this)), void(this.image && (this.image.visible = !1))) : (this.image ? (this[wb].visible = !0, this[Zv] = this[wb]) : this._ncb(), void(this.shape && (this.shape[Qk] = !1)))
        }, _5w: function () {
            return this.$data._i0() && this[Vo][$p]
        }, _m1: null, _2l: !0, _5v: function () {
            this._1x = !0, this._2l = !0
        }, doValidate: function () {
            if (this._2l && this._5w()) {
                if (this._2l = !1, this[Jw][ZI](), this[Vo].groupImage) {
                    this.shape.data = this.$data.groupImage;
                    var t = this._2s();
                    return this.shape.offsetX = t.x + t[Ah] / 2, this[Jw].offsetY = t.y + t.height / 2, this.shape[Ep] = {
                        width: t[Ah],
                        height: t[Dh]
                    }, hs[_a].doValidate[Br](this)
                }
                this[Jw][Tw] = 0, this[Jw].offsetY = 0;
                var i = this._8g(this[Vo].groupType);
                this._m1.clear(), i instanceof SD ? An(this._m1, i.x, i.y, i[Ah], i.height, i.rx, i.ry) : i instanceof ie ? Cn(this._m1, i) : i instanceof ee && Rn(this._m1, i), this._m1._6f = !0, this[Jw][ZI]()
            }
            return hs[_a].doValidate[Br](this)
        }, _77: function (t, i, e) {
            switch (t) {
                case xM[JI]:
                    return new ie(0, 0, Math.max(i, e) / 2);
                case xM[QI]:
                    return new ee(0, 0, i, e);
                default:
                    return new SD(-i / 2, -e / 2, i, e)
            }
        }, _2s: function () {
            return this._8g(null)
        }, _8g: function (t) {
            var i = this.data, e = i[go], n = i.minSize, s = 60, r = 60;
            if (n && (s = n.width, r = n[Dh]), !i.hasChildren())return this._77(t, s, r);
            var a, h = this[Vo]._fs._ix;
            (t == xM[JI] || t == xM[QI]) && (a = []);
            for (var o, _, f, c, u = new SD, d = 0, l = h.length; l > d; d++) {
                var v = h[d];
                if (this[jf][tL](v)) {
                    var b = this[jf][Bf](v);
                    b && (o = b.$x + b._fp.x, _ = b.$y + b._fp.y, f = b._fp[Ah], c = b._fp[Dh], u[Ru](o, _, f, c), a && (a[Qh]({
                        x: o,
                        y: _
                    }), a.push({x: o + f, y: _}), a[Qh]({x: o + f, y: _ + c}), a.push({x: o, y: _ + c})))
                }
            }
            e && u[Go](e);
            var g = this.$data.$location;
            g ? g.invalidateFlag && (g.invalidateFlag = !1, g.x = u.cx, g.y = u.cy) : g = this[Vo].$location = {
                x: u.cx,
                y: u.cy
            };
            var y, E = g.x, p = g.y;
            if (t == xM.GROUP_TYPE_CIRCLE) {
                y = ne(a), y.cx -= E, y.cy -= p;
                var m = Math[Uh](s, r) / 2;
                return y.r < m && (y.cx += m - y.r, y.cy += m - y.r, y.r = m), y
            }
            return t == xM[QI] ? (y = se(a, u), y.cx -= E, y.cy -= p, y[Ah] < s && (y.cx += (s - y[Ah]) / 2, y.width = s), y.height < r && (y.cy += (r - y[Dh]) / 2, y.height = r), y) : (y = u, u.width < s && (u.width = s), u.height < r && (u.height = r), u.offset(-E, -p), y)
        }, _15: function (t, i, e) {
            if (!this._5w())return B(this, Js, iL, arguments);
            var n = this._nct[qO](this, t, i, e);
            return n = gj[qO](this, t, i, e) || n, n = mj.onBindingPropertyChange(this, t, i, e) || n, xj.onBindingPropertyChange(this, t, i, e) || n
        }
    }, N(Js, hs);
    var jj = {
        draw: function () {
        }
    };
    gD.NAVIGATION_IMAGE_LEFT = eL, gD[fc] = nL;
    var Bj = {position: oc, "text-align": rb}, $j = {padding: sL, transition: rL}, Gj = {position: aL, display: hL};
    li(oL, "opacity:0.7;vertical-align:middle;"), li(".Q-Graph-Nav img:hover,img.hover", _L), dD || (li(fL, cL + iM(uL) + dL), li(lL, vL + iM(uL) + bL)), ir[_a] = {
        _dd: function (t, i) {
            return t._hw == i ? !1 : (t._hw = i, void(t[zc].display = i ? "block" : hc))
        }, _3o: function (t, i) {
            var e = i / 2 - this._left._img[Lk] / 2 + Ph;
            this._left._img[zc].top = e, this._right._img[zc].top = e, this._navPane.style.width = t + Ph, this._navPane.style[Dh] = i + Ph
        }, _9m: function (t, i, e, n) {
            this._dd(this._top, t), this._dd(this._left, i), this._dd(this._ncottom, e), this._dd(this._right, n)
        }, _hs: function () {
            var t = this._navPane[Qv];
            t && t.removeChild(this._navPane)
        }, _jd: function () {
            var t = this._d2._kd;
            if (t) {
                var i = t[Zh];
                if (i.isEmpty())return void this._9m(!1, !1, !1, !1);
                var e = t[gL], n = e.y > i.y + 1, s = e.x > i.x + 1, r = e.bottom < i[Ca] - 1, a = e.right < i.right - 1;
                this._9m(n, s, r, a)
            }
        }
    };
    var Fj = 8;
    li(yL, EL), li(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + iM(uL) + ": background-color 0.2s linear;"), li(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), li(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), li(".Q-Graph-ScrollBar--V.Both", pL), li(".Q-Graph-ScrollBar--H.Both", mL), dD || (li(xL, cL + iM(uL) + TL), li(".Q-Graph:hover .Q-Graph-ScrollPane", vL + iM(uL) + ":opacity 0.3s linear;")), er.prototype = {
        _hs: function () {
            this._verticalDragSupport._hs(), this._horizontalDragSupport._hs(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._mn.parentNode && this._mn[Qv][Gd](this._mn)
        }, _mn: null, _n9o: null, _8s: null, init: function (t) {
            var e = i[Jf](Vf);
            e.className = wL, ui(e, {width: _c, height: _c, position: aL});
            var n = i[Jf](Vf);
            n.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[Jf](Vf);
            s[Kf] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", e[vf](n), e[vf](s), t[vf](e), this._mn = e, this._8s = s, this._n9o = n, s[OL] = !0;
            var r = this, a = {
                ondrag: function (t, i) {
                    var e = r._d2._kd;
                    if (e) {
                        var n = i[OL], s = n ? t.dx : t.dy;
                        if (s && i[Co]) {
                            var a = e[Co] / i.scale;
                            n ? e[yo](-a * s, 0) : e.translate(0, -a * s), mM[SL](t)
                        }
                    }
                }, enddrag: function (t, i) {
                    var e = r._d2._kd;
                    if (e && e.enableInertia) {
                        var n = i[OL], s = n ? t.vx : t.vy;
                        if (Math[qh](s) > .1) {
                            var a = e[Co] / i[Co];
                            s *= a, n ? e._9u(-s, 0) : e._9u(0, -s)
                        }
                    }
                }
            };
            this._verticalDragSupport = new wi(n, a), this._horizontalDragSupport = new wi(s, a)
        }, _jd: function () {
            var t = this._d2._kd;
            if (t) {
                var i = t.bounds;
                if (i[Ko]())return this._52(!1), void this._51(!1);
                var e = t.viewportBounds, n = t.width, s = t[Dh], r = t.scale, a = 1 / r, h = e.x > i.x + a || e.right < i.right - a, o = e.y > i.y + a || e.bottom < i[Ca] - a, _ = h && o;
                _ ? (w(this._n9o, kL), w(this._8s, kL)) : (O(this._n9o, kL), O(this._8s, kL)), this._52(h, e, i, _ ? n - Fj : n), this._51(o, e, i, _ ? s - Fj : s)
            }
        }, _52: function (t, i, e, n) {
            if (!t)return this._8s[zc][IL] = hc, void(this._8s[Co] = 0);
            var s = Math.min(i.x, e.x), r = Math.max(i.right, e.right), a = r - s, h = n / a;
            this._8s.scale = h, this._8s.style.left = parseInt((i.x - s) * h) + Ph, this._8s.style.right = parseInt((r - i.right) * h) + Ph, this._8s.style[IL] = ""
        }, _51: function (t, i, e, n) {
            if (!t)return this._n9o.style[IL] = hc, void(this._n9o.scale = 0);
            var s = Math[oo](i.y, e.y), r = Math[Uh](i[Ca], e[Ca]), a = r - s, h = n / a;
            this._n9o[Co] = h, this._n9o.style[Ua] = parseInt((i.y - s) * h) + Ph, this._n9o[zc].bottom = parseInt((r - i.bottom) * h) + Ph, this._n9o.style[IL] = ""
        }
    }, nr[_a] = {
        shape: null, initialize: function () {
            B(this, nr, ok), this._ncb(), Oj.initBindingProperties(this)
        }, _ncb: function () {
            this[wb] = new Aj(this.$data[Op]), this.addChild(this[wb], 0), this.body = this[wb]
        }, invalidateShape: function () {
            this[wb].invalidateData(), this.invalidateRender()
        }, _15: function (t, i, e) {
            var n = this._nct.onBindingPropertyChange(this, t, i, e);
            return n = gj.onBindingPropertyChange(this, t, i, e) || n, Oj.onBindingPropertyChange(this, t, i, e) || n
        }, doValidate: function () {
            this[Zv] && (this.body.$layoutByAnchorPoint = null != this._38, this[Zv][pp] = this._38);
            var t = this.$data.$location, i = 0, e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return n && (this[_S] = !0), this.$x = i, this.$y = e, kj[_a].doValidate.call(this) || n
        }
    }, N(nr, kj), Z(nr.prototype, {
        path: {
            get: function () {
                return this.data[Op]
            }
        }, length: {
            get: function () {
                return this.data.length
            }
        }
    }), nr.prototype.addPoint = function (t, i, e) {
        var n = this._hm(t, i), s = this.data, r = Te(s[Op], n.x, n.y, e);
        r && (s.pathSegments = r)
    }, sr[_a] = {
        _me: function () {
            this._ji.style.visibility = Qk
        }, _k5: function () {
            this._ji.style[Kv] = ac
        }, clear: function () {
            this._9v[eh](), this._naj()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._9v.containsById(t)
        }, addDrawable: function (t, i) {
            if (i) {
                var e = {id: ++QP, drawable: t, scope: i};
                return this._9v[Vr](e), e
            }
            return t.id || (t.id = ++QP), this._9v.add(t), t
        }, removeDrawable: function (t) {
            return t.id ? void this._9v[Zr](t) : this._9v[Hk](t)
        }, _9v: null, invalidate: function () {
            this._naj()
        }, _naj: function () {
            this._d2._6f || this._jc()
        }, _jc: function () {
            di(this._ji, ec, "");
            var t = this._d2._ku, i = this.g;
            i[Lo](1, 0, 0, 1, 0, 0), i[Ao](0, 0, this._ji.width, this._ji[Dh]), i.save(), this._d2._jm._nc3(i);
            for (var e = this._9v._ix, n = 0, s = e[$r]; s > n; n++)i[eb](), i[Vb](), this._hj(i, e[n], t), i[vb]();
            i.restore()
        }, _hj: function (t, i, e) {
            return i instanceof Function ? void i(t, e) : void(i[LL]instanceof Function && i[ca] && i[LL][Br](i[ca], t, e))
        }
    }, gD[AL] = !0;
    var zj = function (t) {
        this._kd = t
    };
    gD.ANIMATION_MAXTIME = 600, gD[CL] = gM[RL], zj[_a] = {
        _kd: null, _n9: .001, _ej: null, _nae: function (t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        }, _hb: function (t, i) {
            t *= .6, i *= .6, t = this._nae(t), i = this._nae(i), this._lw();
            var e = Math.sqrt(t * t + i * i);
            if (.01 > e)return !1;
            var n = Math.min(gD.ANIMATION_MAXTIME, e / this._n9);
            this._speedX = t, this._speedY = i, this._n9X = t / n, this._n9Y = i / n, this._ej = new EM(this._5o, this, n, gM.easeOutStrong), this._ej._ke()
        }, _5o: function (t, i) {
            if (0 != t) {
                var e = this._speedX * i - .5 * this._n9X * i * i, n = this._speedY * i - .5 * this._n9Y * i * i;
                this._speedX -= this._n9X * i, this._speedY -= this._n9Y * i, this._kd.translate(e, n)
            }
        }, _lw: function () {
            this._ej && this._ej._lw()
        }, _im: function (t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t, e = this._fromTY + (this._toTY - this._fromTY) * t, n = this._fromScale + (this._toScale - this._fromScale) * t;
            this._kd[gI](i, e, n)
        }, _kp: function (t, i, e, n) {
            var s = this._kd, r = s.scale;
            if (0 >= e && (e = r), this._lw(), t != s.tx || i != s.ty || e != r) {
                var a, h, o;
                n instanceof Object && (a = n.duration, h = n[PL], o = n[DL]);
                var _ = s.tx, f = s.ty;
                if (!a) {
                    var c = TD(t, i, _, f);
                    if (a = c / 2, e != r) {
                        var u = e > r ? e / r : r / e;
                        a = Math[Uh](a, 50 * u)
                    }
                }
                h = h || gD[ML], o = o || gD[CL], a = Math[oo](h, a), this._fromTX = _, this._fromTY = f, this._fromScale = r, this._toTX = t, this._toTY = i, this._toScale = e, this._ej = new EM(this._im, this, a, o), this._ej._ke()
            }
        }
    }, gD[NL] = 8, gD.INTERACTION_HANDLER_SIZE_DESKTOP = 4, gD[jL] = 30, gD.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP = 20;
    var Yj = Math.PI / 4;
    or.prototype = {
        onElementRemoved: function (t, i) {
            this.element && (t == this[BL] || L(t) && p(t, this.element)) && this.destroy(i)
        }, onClear: function (t) {
            this.element && this.destroy(t)
        }, destroy: function () {
            delete this[BL], this.removeDrawable()
        }, invalidate: function () {
            this.topCanvas[VE]()
        }, removeDrawable: function () {
            this._g9Id && (this[mc].removeDrawable(this._g9Id), delete this._g9Id, this[VE]())
        }, addDrawable: function () {
            this._g9Id || (this._g9Id = this.topCanvas[$L](this.doDraw, this).id, this.invalidate())
        }, doDraw: function () {
        }, escapable: !0, onkeydown: function (t, i) {
            this[GL] && 27 == t.keyCode && (R(t), this[gf](i))
        }
    }, mM.ResizeInteraction = Tr, _r.prototype = {
        defaultCursor: Tc, getInteractionInstances: function (t) {
            if (!this[xc])return null;
            for (var i = [], e = 0, n = this[xc][$r]; n > e; e++) {
                var s = this.interactions[e];
                s instanceof Function ? i.push(new s(t)) : s instanceof Object && i.push(s)
            }
            return i
        }
    }, fr.prototype = {
        _dn: null, _j3: null, destroy: function () {
            B(this, fr, gf, arguments), delete this._j3, delete this._9k, delete this._dn
        }, doDraw: function (t) {
            var i = this.points;
            i && (i.forEach(function (i) {
                this[FL](t, i)
            }, this), this.isClosePath && t[F_](), this[zL](t))
        }, styleDraw: function (t) {
            var i = cr(this.graph.interactionProperties, this[YL](this[jf]));
            i[so] && (t[so] = i[so], i[rg] && (t[rg] = i[rg]), i[Wb] && (t[Wb] = i[Wb]), i[Zo] && (t.lineDash = i.lineDash, t[t_] = i.lineDashOffset || 0), t.strokeStyle = i[cb], t.stroke()), i.fillStyle && (t.fillStyle = i.fillStyle, t.fill())
        }, drawPoint: function (t, i, e) {
            if (e)return void t.moveTo(i.x, i.y);
            if (mM.isArray(i)) {
                var n = i[0], s = i[1];
                t[ty](n.x, n.y, s.x, s.y)
            } else t.lineTo(i.x, i.y)
        }, _gb: function (t) {
            this._j3 || (this._j3 = [], this.addDrawable()), this._j3.push(t), this[VE]()
        }
    }, Z(fr[_a], {
        currentPoint: {
            get: function () {
                return this._9k
            }, set: function (t) {
                this._9k = t, this[VE]()
            }
        }, points: {
            get: function () {
                return this._9k && this._j3 && this._j3.length ? this._j3.concat(this._9k) : void 0
            }
        }
    }), N(fr, or), ur.prototype = {
        destroy: function () {
            B(this, ur, gf, arguments), delete this._keTime, delete this[HL]
        }, doDraw: function (t, i) {
            return this._j3 ? this._j3[$r] <= 1 ? vr[_a][UL].call(this, t, i) : void B(this, ur, UL, arguments) : void 0
        }, ondblclick: function (t, i) {
            this.destroy(i)
        }, finish: function (t, i, e) {
            if (this._keTime && Date[Il]() - this._keTime < 200)return void this.destroy(i);
            var n;
            this._j3 && this._j3[$r] >= 2 && (this._j3[Ty](), n = new ED, l(this._j3, function (t) {
                if (mM.isArray(t)) {
                    var i = t[0], e = t[1];
                    n[Vr](new iN(xM[$b], [i.x, i.y, e.x, e.y]))
                } else n[Vr](new iN(xM.SEGMENT_LINE_TO, [t.x, t.y]))
            }, this)), i.createEdgeByInteraction(this.start, e, t, n), this[gf](i)
        }, onstart: function (t, i) {
            if (2 != t[sh]) {
                var e = t.getData(), n = e instanceof fj;
                return this.start ? n ? void this[qL](t, i, e) : void this._gb(i.toLogical(t)) : void(n && (this.start = e, this._keTime = Date.now(), this._gb(i[qI](t))))
            }
        }, onmousemove: function (t, i) {
            this.start && (this.currentPoint = i[qI](t))
        }, startdrag: function (t) {
            this[HL] && (t.responded = !0)
        }, ondrag: function (t, i) {
            this.start && (this.currentPoint = i.toLogical(t))
        }, enddrag: function (t, i) {
            if (this.start) {
                var e = t[qa]();
                e instanceof fj && this[qL](t, i, e)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[jf].getDefaultStyle(bj.EDGE_WIDTH),
                strokeStyle: this.graph[WL](bj.EDGE_COLOR),
                lineDash: this[jf][WL](bj.EDGE_LINE_DASH),
                lineDashOffset: this[jf].getDefaultStyle(bj.EDGE_LINE_DASH_OFFSET),
                lineCap: this[jf].getDefaultStyle(bj.LINE_CAP),
                lineJoin: this[jf].getDefaultStyle(bj.LINE_JOIN)
            }
        }
    }, N(ur, fr), dr[_a] = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this[jf].getDefaultStyle(bj.SHAPE_STROKE),
                strokeStyle: this.graph[WL](bj.SHAPE_STROKE_STYLE),
                fillStyle: this[jf][WL](bj.SHAPE_FILL_COLOR)
            }
        }, finish: function (t, i) {
            if (this._j3 && this._j3.length) {
                var e = this._j3, n = 0, s = 0, r = 0;
                e[l_](function (t) {
                    return mM[ia](t) ? void t[l_](function () {
                        n += t.x, s += t.y, r++
                    }) : (n += t.x, s += t.y, void r++)
                }), n /= r, s /= r;
                var a = [];
                e[l_](function (t, i) {
                    if (0 == i)return void a.push(new iN(xM[XL], [t.x - n, t.y - s]));
                    if (mM.isArray(t)) {
                        var e = t[0], r = t[1];
                        a[Qh](new iN(xM.SEGMENT_QUAD_TO, [e.x - n, e.y - s, r.x - n, r.y - s]))
                    } else a.push(new iN(xM.SEGMENT_LINE_TO, [t.x - n, t.y - s]))
                }), this.createElement(t, a, n, s), this.destroy(i)
            }
        }, startdrag: function (t) {
            t.responded = !0
        }, createElement: function (t, i, e, n) {
            return this[jf][VL](t, i, e, n)
        }, onstart: function (t, i) {
            var e = i.toLogical(t);
            this._dn = e, this._gb(e)
        }, onmousemove: function (t, i) {
            this._dn && (this.currentPoint = i.toLogical(t))
        }, ondblclick: function (t, i) {
            if (this._dn) {
                if (this._j3[$r] < 3)return void this[gf](i);
                delete this._j3[this._j3[$r] - 1], this[qL](t, i)
            }
        }, isClosePath: !0
    }, N(dr, fr), mM[KL] = dr, lr.prototype = {
        isClosePath: !1, createElement: function (t, i, e, n) {
            return this.graph.createLineByInteraction(t, i, e, n)
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: Dj[bj.SHAPE_STROKE],
                strokeStyle: Dj[bj.SHAPE_STROKE_STYLE],
                lineDash: this.graph.getDefaultStyle(bj[Nm]),
                lineDashOffset: this.graph[WL](bj[ZL]),
                lineCap: this.graph[WL](bj[Ym]),
                lineJoin: this[jf][WL](bj.LINE_JOIN)
            }
        }
    }, N(lr, dr), mM.CreateLineInteraction = lr, vr[_a] = {
        destroy: function (t) {
            B(this, vr, gf, arguments), t[WI] = "", this.start = null
        }, doDraw: function (t) {
            if (this.start && this.currentPoint) {
                var i, e;
                this.graph[zI] && (i = this.graph.interactionProperties.uiClass, e = this.graph[zI].edgeType), i = i || this[jf].edgeUIClass || mM[JL], e = e || this.graph[Uf];
                var n = i.drawReferenceLine || mM.EdgeUI.drawReferenceLine, s = this[jf][Bf](this[HL]);
                s && s[$f] && (s = s.bodyBounds[rb], n(t, s, this[QL], e), this[zL](t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof fj && i[tA](t)
        }, canLinkTo: function (t, i) {
            return t instanceof fj && i[iA](t, this.start)
        }, startdrag: function (t, i) {
            var e = t.getData();
            this[tA](e, i) && (t[eA] = !0, this[HL] = e, i[WI] = wl, this[$L]())
        }, ondrag: function (t, i) {
            this.start && (mM.stopEvent(t), this[QL] = i[qI](t), this[VE]())
        }, enddrag: function (t, i) {
            if (this.start) {
                this[VE]();
                var e = t.getData();
                this.canLinkTo(e, i) && i.createEdgeByInteraction(this[HL], e, t), this[gf](i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[jf].getDefaultStyle(bj.EDGE_WIDTH),
                strokeStyle: this[jf][WL](bj.EDGE_COLOR),
                lineDash: this.graph[WL](bj.EDGE_LINE_DASH),
                lineDashOffset: this[jf][WL](bj.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph[WL](bj[Ym]),
                lineJoin: this[jf].getDefaultStyle(bj.LINE_JOIN)
            }
        }
    }, N(vr, fr), mM[nA] = vr, mr.prototype = {
        html: null, createHTML: function () {
            var t = i.createElement(sA);
            t.className = rA, t[zc].position = oc, t.style.textAlign = rb, t[zc][Wl] = aA, t[zc][go] = hA, t.style[oA] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t[zc][IL] = hc, t.style.overflow = ac;
            var e = this;
            return t.oninput = function (t) {
                e[_A](t)
            }, t.onkeydown = function (t) {
                return 27 == t.keyCode ? void e.cancelEdit() : void 0
            }, t[fA] = function (i) {
                if (13 == i.keyCode || 10 == i[Jy]) {
                    if (i[ea](), i.altKey || i.ctrlKey || i[Zy])return Er(t, Hh), void e[_A](i);
                    e.stopEdit()
                }
            }, i.body.appendChild(t), t
        }, setText: function (t, i) {
            this.html[Ic] = t || "", i && (this.html[zc][Sc] = i), pr(this[_l]), this.onSizeChange(this[_l])
        }, onSizeChange: function (t) {
            var i = (t[Oc], t[cA], yr(t));
            return t[zc][Ah] = i.width + 30 + Ph, t.style[Dh] = i[Dh] + 10 + Ph, i
        }, onValueChange: function (t) {
            var i = t.target;
            this.onSizeChange(i), i[zc].left = i.x - i[Oc] / 2 + Ph
        }, startEdit: function (i, e, n, s, r) {
            if (this[_l] || (this.html = this[uA]()), !this[dA]) {
                var a = this;
                this.stopEditWhenClickOnWindow = function (t) {
                    t.target != a.html && a.cancelEdit()
                }
            }
            t[Qd](lA, this[dA], !0), this[cf] = r, this.html.x = i, this[_l].y = e, this[_l][zc].display = hL, gr(this.html, i, e), this[vA](n, s || 10), gr(this[_l], i, e)
        }, isEditing: function () {
            return hc != this[_l][zc].display
        }, cancelEdit: function () {
            this[bA](!0)
        }, stopEdit: function (i) {
            if (this[gA]()) {
                t.removeEventListener(lA, this[dA]);
                var e = this.html[Ic];
                if (!i && this[cf] && this.callback(e) === !1)return !1;
                this.html[zc].display = hc, this.html[Ic] = null, this.callback = null
            }
        }, destroy: function () {
            this[_l] && i.body.removeChild(this[_l])
        }
    }, mM.LabelEditor = mr;
    var Hj = function (t) {
        this[jf] = t
    };
    Hj[_a] = {
        destroy: function (t) {
            t[yA] && (t.labelEditor.destroy(), delete t.labelEditor)
        }, ondblclick: function (t, i) {
            var e = t[qa]();
            if (!e)return i.currentSubNetwork ? void i[EA]() : void(i[pA] && i[mA](gD.ZOOM_ANIMATE));
            if (i[vk] && i[xA](e)) {
                var n = i[TA](t);
                if (n instanceof Lj && n[vk] !== !1) {
                    var s = i.labelEditor;
                    s || (i.labelEditor = s = new mr);
                    var r = n[Kh]();
                    return r = i.toCanvas(r.x + r[Ah] / 2, r.y + r.height / 2), r = br(r.x, r.y, i[_l]), void i.startLabelEdit(e, n, s, r)
                }
            }
            var a = e instanceof dj, h = e instanceof _j && e.hasEdgeBundle();
            return e._4f && (Oi(t) || !a && !h) ? void(i.currentSubNetwork = e) : a ? void(e.expanded = !e.expanded) : h ? void this[jf].reverseExpanded(e) : void 0
        }
    };
    var Uj = function (t) {
        this[jf] = t
    };
    Uj[_a] = {
        onkeydown: function (t, i) {
            if (i[vk]) {
                var e = t.keyCode;
                if (8 == e || 46 == e || 127 == e)return i[wA](t), void A(t);
                if (Oi(t)) {
                    if (67 == e); else if (86 == e); else if (90 == e); else if (89 != e)return;
                    A(t)
                }
            }
        }
    };
    var qj = function (t) {
        this[jf] = t
    };
    qj.prototype = {
        onkeydown: function (i, e) {
            if (i.metaKey && 83 == i.keyCode) {
                var n = e.exportImage(e.scale, e.viewportBounds), s = t.open(), r = s.document;
                r.title = OA + n.width + SA + n[Dh];
                var a = r[Jf](Qf);
                a[ic] = n[no], r[Zv].appendChild(a), A(i)
            }
        }
    };
    var Wj = function (t) {
        this.graph = t
    };
    Wj[_a] = {
        destroy: function () {
            delete this[kA], delete this[IA]
        }, _2f: function (t) {
            var i = new ED;
            return t.selectionModel.forEach(function (e) {
                t.isMovable(e) && t.isVisible(e) && i[Vr](e)
            }, this), i
        }, onstart: function (t, i) {
            this.currentDraggingElement && this.destroy(i)
        }, startdrag: function (t, i) {
            if (!t[eA]) {
                var e = t[qa]();
                if (!e || !i.isSelected(e) || !i.isMovable(e))return void this[gf](i);
                t.responded = !0, this.currentDraggingElement = e, this.draggingElements = this._2f(i);
                var n = new kr(i, kr.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements[Uc]);
                return i.beforeInteractionEvent(n) === !1 ? void this[gf](i) : void i.onInteractionEvent(n)
            }
        }, ondrag: function (t, i) {
            if (this.currentDraggingElement) {
                R(t);
                var e = t.dx, n = t.dy, s = i[Co];
                e /= s, n /= s;
                var r = new kr(i, kr.ELEMENT_MOVING, t, this.currentDraggingElement, this[kA].datas);
                i[LA](this[kA][Uc], e, n), i.onInteractionEvent(r)
            }
        }, enddrag: function (t, i) {
            if (this[IA]) {
                if (this.draggingElements && this[kA][$r]) {
                    if (t[Zy]) {
                        var e, n = i.toLogical(t), s = n.x, r = n.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t.data;
                            if (!this.draggingElements.contains(i) && t.uiBounds[to](s - t.x, r - t.y) && t._hk(s, r, 1)) {
                                if (i instanceof mM[NI]) {
                                    if (!i[QE])return;
                                    for (var n = this[kA].length; n-- > 0;) {
                                        var a = this[kA][la](n);
                                        if (a instanceof mM[hI] && a.linkedWith(i))return
                                    }
                                    return e = i, !1
                                }
                                return (i.enableSubNetwork || i._i0() && i[$p]) && (e = i), !1
                            }
                        }, this), e && this[kA].forEach(function (t) {
                            for (var i = t[L_]; i;) {
                                if (this.draggingElements.contains(i))return;
                                i = i.parent
                            }
                            t.parent = e
                        }, this)
                    }
                    var a = new kr(i, kr.ELEMENT_MOVE_END, t, this[IA], this.draggingElements[Uc]);
                    i[AI](a)
                }
                this[gf](i)
            }
        }, onpinch: function (t, i) {
            this.currentDraggingElement && this[hl](t, i)
        }, step: 1, onkeydown: function (t, i) {
            if (Oi(t)) {
                var e, n;
                if (37 == t.keyCode ? e = -1 : 39 == t.keyCode ? e = 1 : 38 == t[Jy] ? n = -1 : 40 == t.keyCode && (n = 1), e || n) {
                    var s = this._2f(i)[Uc];
                    if (0 != s.length) {
                        A(t), e = e || 0, n = n || 0;
                        var r = this.step / i.scale, a = new kr(i, kr[AA], t, null, s);
                        i[LA](s, e * r, n * r), i.onInteractionEvent(a)
                    }
                }
            }
        }
    };
    var Xj = function (t) {
        this.graph = t
    };
    Xj[_a] = {
        onkeydown: function (t, i) {
            Oi(t) || (37 == t.keyCode ? (this._60(i, 1, 0), A(t)) : 39 == t[Jy] ? (this._60(i, -1, 0), A(t)) : 38 == t[Jy] ? (this._60(i, 0, 1), A(t)) : 40 == t[Jy] && (this._60(i, 0, -1), A(t)))
        }, _60: function (t, i, e) {
            t._9u(i, e)
        }, onstart: function (t, i) {
            this._ke && this.destroy(i)
        }, _ke: !1, startdrag: function (t, i) {
            t[eA] || (t[eA] = !0, this._ke = !0, i[WI] = cM)
        }, ondrag: function (t, i) {
            this._ke && (R(t), i[yo](t.dx || 0, t.dy || 0))
        }, enddrag: function (t, i) {
            if (this._ke) {
                if (i[CA] !== !1) {
                    var e = t.vx, n = t.vy;
                    (Math[qh](e) > .1 || Math[qh](n) > .1) && i._9u(e, n)
                }
                this[gf](i)
            }
        }, onpinch: function (t, i) {
            this._ke = !0;
            var e = t[ul];
            if (e && 1 != e) {
                var n = i[RA](t.center);
                i[pI](e, n.x, n.y, !1)
            }
        }, destroy: function (t) {
            this._ke = !1, t[WI] = null
        }
    }, xr[_a] = {
        _1v: function (t) {
            this.element && t.source == this.element && this[jf].callLater(function () {
                this._jd()
            }, this)
        }, _6: function () {
            this._lpPropertyChangeListing || (this._lpPropertyChangeListing = !0, this.graph[PA].addListener(this._1v, this))
        }, _4: function () {
            this._lpPropertyChangeListing = !1, this[jf][PA][yd](this._1v, this)
        }, onElementRemoved: function (t, i) {
            this[BL] && (t == this[BL] || L(t) && p(t, this.element)) && this[gf](i)
        }, onClear: function (t) {
            this[BL] && this.destroy(t)
        }, destroy: function () {
            this.graph[WI] = null, this[BL] && delete this.element._editting, delete this.element, delete this._9d, delete this._9k, delete this._naanEdit, this._6p(), this._4()
        }, _6p: function () {
            this.drawLineId && (this[mc][DA](this.drawLineId), delete this.drawLineId, this.topCanvas.invalidate())
        }, _nc0: function () {
            this.drawLineId && this.topCanvas[Hf](this.drawLineId) || (this.drawLineId = this.topCanvas[$L](this[MA], this).id, this[mc][VE]())
        }, _9d: null, _5l: function (t) {
            this._9d = t, this[VE]()
        }, _eh: function (t, i, e) {
            t[Vb](), i.isControlPoint ? t[_v](i.x - this.handlerSize / e, i.y - this.handlerSize / e, this.handlerSize / e * 2, this[$c] / e * 2) : t[Og](i.x, i.y, this[$c] / e, 0, 2 * Math.PI, !1), t.lineWidth = 1 / e, t.lineDash = [], t.strokeStyle = _b, t.fillStyle = "rgba(255, 255, 0, 0.8)", t[mg](), t[Tg]()
        }, _g9: function (t, i, e, n) {
            n ? t[Y_](i, e) : t[G_](i, e)
        }, drawLine: function (t, i) {
            if (this._9d && this._9d.length) {
                t[eb]();
                var e = this.element instanceof cj;
                e && (t.translate(this.element.x, this[BL].y), this.element.rotate && t[ho](this[BL][ho]));
                var n, s = [];
                t[Vb](), this._9d[$r], l(this._9d, function (i) {
                    if (i.type != xM.SEGMENT_CLOSE)for (var e = 0, r = i[Jh]; e + 1 < r.length;) {
                        var a = r[e], h = r[e + 1], o = {x: a, y: h, isControlPoint: this._6h(i, e)};
                        s.push(o), this._g9(t, o.x, o.y, null == n), n = o, e += 2
                    }
                }, this), t[so] = 1 / i, t.lineDash = [2 / i, 3 / i], t[cb] = NA, t.stroke(), l(s, function (e) {
                    this._eh(t, e, i)
                }, this), t[vb]()
            }
        }, invalidate: function () {
            this[mc].invalidate()
        }, _40: function (t) {
            if (this[BL] != t && (this[BL] && this.destroy(), t && this[xA](t))) {
                var i = this._5i(t, this[jf]);
                i && (this.element = t, t._editting = !0, this._naanEdit = !0, this._5l(i), this._6(), this._nc0())
            }
        }, _jd: function () {
            if (this.drawLineId && this[BL]) {
                var t = this._5i(this.element, this[jf]);
                return t ? void this._5l(t) : void this[gf](this.graph)
            }
        }, _5i: function (t, i) {
            return i[xA](t) ? t.pathSegments || [] : void 0
        }, _hm: function (t, i) {
            t -= this.element.x, i -= this[BL].y;
            var e = {x: t, y: i};
            return this[BL][ho] && Ms(e, -this[BL].rotate), e
        }, onclick: function (t, i) {
            if (i[vk] && t[jA] && this.element) {
                var e = this._g8(t, i);
                if (e && e.isControlPoint)return void this.element[BA](e.index);
                if (this.element == t[qa]()) {
                    var n = i[qI](t), s = i[Bf](this.element);
                    s[Ch](n.x, n.y, this.handlerSize || 2)
                }
            }
        }, isEditable: function (t) {
            return this[jf].isEditable(t) && (t instanceof _j || t instanceof cj)
        }, ondblclick: function (t, i) {
            if (!i.editable)return void(this[BL] && this.destroy(i));
            var e = t.getData();
            return !e || e == this.element || e._editting ? void this.destroy(i) : void this._40(e)
        }, onstart: function (t, i) {
            if (!i[vk])return void(this[BL] && this.destroy(i));
            if (!t.responded) {
                if (this[BL] && this._g8(t, i))return void(t.responded = !0);
                var e = t[qa]();
                return e && i.isResizable(e) && e instanceof cj ? void(this.element && e != this[BL] && this.destroy()) : void this._40(e)
            }
        }, onrelease: function () {
            this.element && (this._naanEdit = !0)
        }, _9k: null, _g8: function (t, i) {
            var e = i.toLogical(t);
            this.element instanceof cj && (e = this._hm(e.x, e.y));
            var n, s = i[Co], r = this.handlerSize / s, a = this._9d;
            return l(a, function (t, i) {
                for (var s = 0, h = t.points; s + 1 < h[$r];) {
                    var o = h[s], _ = h[s + 1], f = TD(e.x, e.y, o, _);
                    if (r > f) {
                        if (n = {segment: t, index: i, pointIndex: s}, this._6h(t, s)) {
                            n[$A] = !0;
                            var c = a instanceof ED ? a[Yd](i + 1) : a[i + 1];
                            c && (n.nextSegment = c)
                        }
                        return !1
                    }
                    s += 2
                }
            }, this), n
        }, _6h: function (t, i) {
            return i == t.points.length - 2
        }, startdrag: function (t, i) {
            if (this[BL] && this._naanEdit && (this._9k = this._g8(t, i), this._9k)) {
                this._6p(), t.responded = !0;
                var e = new kr(i, kr[GA], t, this.element);
                e[FA] = this._9k, i[AI](e)
            }
        }, ondrag: function (t, i) {
            if (this.element && this._9k) {
                var e = t.dx, n = t.dy, s = i[Co];
                if (e /= s, n /= s, this.element.rotate) {
                    var r = {x: e, y: n};
                    Ms(r, -this.element.rotate), e = r.x, n = r.y
                }
                var a = this._9k[zA];
                if (!this._9k[$A] || a[ao] != ZM && a[ao] != JM)a.points[this._9k.pointIndex] += e, a.points[this._9k.pointIndex + 1] += n; else {
                    for (var h = a[Jh].length - 4; h < a[Jh][$r];)a.points[h] += e, a.points[h + 1] += n, h += 2;
                    !this._9k[YA] || this._9k.nextSegment[ao] != JM && this._9k.nextSegment.type != ZM || (this._9k[YA].points[0] += e, this._9k[YA].points[1] += n)
                }
                this[BL].firePathChange();
                var o = new kr(i, kr[HA], t, this.element);
                o.point = this._9k, i.onInteractionEvent(o)
            }
        }, enddrag: function (t, i) {
            if (this.element && this._9k) {
                this._nc0(), this._jd();
                var e = new kr(i, kr.POINT_MOVE_END, t, this.element);
                e[FA] = this._9k, i[AI](e)
            }
        }, onmousemove: function (t, i) {
            this[BL] && (i[WI] = t[jA] && (this._g8(t, i) || this.element == t[qa]()) ? "crosshair" : null)
        }
    }, gD.SELECTION_RECTANGLE_STROKE = 1, gD.SELECTION_RECTANGLE_STROKE_COLOR = V(3724541951), gD[UA] = V(1430753245);
    var Vj = function (t) {
        this[jf] = t, this.topCanvas = t._84._topCanvas
    };
    Vj.prototype = {
        onstart: function (t, i) {
            this._ke && this.destroy(i)
        }, startdrag: function (t, i) {
            t[eA] || (t[eA] = !0, this._ke = i[qI](t), i[WI] = wl, this._1jId = this[mc].addDrawable(this._1j, this).id)
        }, ondrag: function (t, i) {
            if (this._ke) {
                R(t), this._end = i.toLogical(t), this[VE]();
                var e = new kr(i, kr.SELECT_START, t, i.selectionModel);
                i[AI](e)
            }
        }, enddrag: function (t, i) {
            if (this._ke) {
                this._f6Timer && clearTimeout(this._f6Timer), this._f6(!0), this.destroy(i);
                var e = new kr(i, kr[qA], t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        }, onpinch: function (t, i) {
            this._ke && this[hl](t, i)
        }, _1j: function (t, i) {
            t[cb] = gD[WA], t[ob] = gD.SELECTION_RECTANGLE_FILL_COLOR, t.lineWidth = gD[XA] / i;
            var e = this._ke.x, n = this._ke.y;
            t[_v](e, n, this._end.x - e, this._end.y - n), t[Tg](), t[mg]()
        }, invalidate: function () {
            return this.invalidateFlag ? void this[mc].invalidate() : (this[Dp] = !0, void(this._f6Timer = setTimeout(this._f6[Jv](this), 100)))
        }, _f6: function (t) {
            if (this._f6Timer = null, this[Dp] = !1, !this._ke)return void this.topCanvas[VE]();
            var i = Math[oo](this._ke.x, this._end.x), e = Math.min(this._ke.y, this._end.y), n = Math.abs(this._ke.x - this._end.x), s = Math.abs(this._ke.y - this._end.y);
            if (!n || !s)return void this.graph.selectionModel[eh]();
            var r, a = [], h = this.graph.scale;
            if (this.graph[VA](function (t) {
                    t._hw && this[jf][gc](t.$data) && (r = t._fp, (hi(i, e, n, s, r.x + t._x, r.y + t._y, r[Ah], r.height) || Re(i, e, n, s, t, h)) && a.push(t[Vo]))
                }, this), this.graph.selectionModel.set(a), this[mc][VE](), !t) {
                var o = new kr(this[jf], kr.SELECT_BETWEEN, null, this[jf].selectionModel);
                this.graph[AI](o)
            }
        }, destroy: function (t) {
            this._ke = null, t[WI] = null, this._1jId && (this[mc][DA](this._1jId), delete this._1jId, this.topCanvas.invalidate())
        }
    };
    var Yj = Math.PI / 4;
    Tr[_a] = {
        _e8: !1, _e9: !1, _1v: function (t) {
            this.element && t.source == this[BL] && this.graph.callLater(function () {
                this._9h()
            }, this)
        }, _6: function () {
            this._lpPropertyChangeListing || (this._lpPropertyChangeListing = !0, this[jf][PA][qc](this._1v, this))
        }, _4: function () {
            this._lpPropertyChangeListing = !1, this.graph[PA].removeListener(this._1v, this)
        }, onElementRemoved: function (t, i) {
            this[BL] && (t == this.element || L(t) && p(t, this.element)) && this[gf](i)
        }, onClear: function (t) {
            this[BL] && this[gf](t)
        }, ondblclick: function (t, i) {
            this[BL] && this[gf](i)
        }, destroy: function (t) {
            t[WI] = null, delete this[BL], delete this._naq, delete this._ncody, delete this._9k, delete this._naanEdit, delete this._j3, delete this._rotatePoint, delete this._e9, delete this._e8, delete this._insets, this._6p(), this._4()
        }, _6p: function () {
            this._g9Id && (this[mc][DA](this._g9Id), delete this._g9Id, this.topCanvas.invalidate())
        }, _nc0: function () {
            this._g9Id && this[mc][Hf](this._g9Id) || (this._g9Id = this.topCanvas[$L](this._g9, this).id, this[mc][VE]())
        }, _naq: null, _j3: null, _8m: function (t) {
            this._naq = t;
            var i = this._naq.x, e = this._naq.y, n = this._naq[Ah], s = this._naq.height;
            if (this._e9) {
                var r = [];
                r.push({x: i, y: e, p: ID[Fu], cursor: KA, rotate: 5 * Yj}), r[Qh]({
                    x: i + n / 2,
                    y: e,
                    p: ID[qu],
                    cursor: ZA,
                    rotate: 6 * Yj
                }), r[Qh]({x: i + n, y: e, p: ID[Uu], cursor: Gc, rotate: 7 * Yj}), r.push({
                    x: i,
                    y: e + s / 2,
                    p: ID.LEFT_MIDDLE,
                    cursor: JA,
                    rotate: 4 * Yj
                }), r.push({x: i + n, y: e + s / 2, p: ID[QA], cursor: JA, rotate: 0}), r.push({
                    x: i,
                    y: e + s,
                    p: ID.LEFT_BOTTOM,
                    cursor: Gc,
                    rotate: 3 * Yj
                }), r[Qh]({x: i + n / 2, y: e + s, p: ID[Ak], cursor: ZA, rotate: 2 * Yj}), r.push({
                    x: i + n,
                    y: e + s,
                    p: ID[tC],
                    cursor: KA,
                    rotate: Yj
                }), this._j3 = r
            }
            this._rotatePoint = this._e8 ? {x: i + n / 2, y: e, cursor: uM} : null, this._naj()
        }, _eh: function (t, i, e, n) {
            t[Vb]();
            var s = (this.handlerSize - 1) / n;
            t.rect(i - s, e - s, 2 * s, 2 * s), t.lineWidth = 1 / n, t[Zo] = [], t[cb] = _b, t.fillStyle = "rgba(255, 255, 255, 0.8)", t.stroke(), t.fill()
        }, _5y: function (t, i, e, n, s, r) {
            s = s || this[$c], r = r || iC, t.beginPath(), s /= n, t[Og](i, e, s, 0, 2 * Math.PI, !1), t[so] = 1 / n, t.lineDash = [], t.strokeStyle = _b, t[ob] = r, t[mg](), t[Tg]()
        }, _hm: function (t, i) {
            t -= this[BL].x, i -= this.element.y;
            var e = {x: t, y: i};
            return this.element[ho] && Ms(e, -this[BL][ho]), e
        }, _g9: function (t, i) {
            if (this._naq) {
                if (t.save(), t.translate(this.element.x, this[BL].y), this.element[ho] && t.rotate(this.element.rotate), this._rotatePoint) {
                    this._5y(t, 0, 0, i, 3, eC);
                    var e = this._rotatePoint.x, n = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath(), t.moveTo(e, this._rotatePoint.y), t[G_](e, n), t.lineWidth = 1 / i, t.strokeStyle = NA, t[mg](), this._5y(t, e, n, i)
                }
                if (this._j3) {
                    var s = this._naq.x, r = this._naq.y, a = this._naq[Ah], h = this._naq.height;
                    t.beginPath(), t[_v](s, r, a, h), t.lineWidth = 1 / i, t[Zo] = [2 / i, 3 / i], t.strokeStyle = NA, t[mg](), l(this._j3, function (e) {
                        this._eh(t, e.x, e.y, i)
                    }, this)
                }
                t.restore()
            }
        }, _naj: function () {
            this.topCanvas[VE]()
        }, _40: function (t, i, e, n) {
            this.element = t, this._nc0();
            var s = i[Bf](t);
            this._ncody = s[Zv], this._e9 = e, this._e8 = n, this._9h(), this._6()
        }, _9h: function () {
            if (this._g9Id) {
                var t = wr(this._ncody, this._ncody._j6), i = wr(this._ncody, this._ncody._7w);
                this._insets = new kD(t.y - i.y, t.x - i.x, i.bottom - t.bottom, i.right - t[Aa]), this._8m(i)
            }
        }, _nc8: function (t, i) {
            return (!t._i0() || !t[$p]) && i.isResizable(t)
        }, _nc6: function (t, i) {
            return (!t._i0() || !t.expanded) && i[nC](t)
        }, _nas: function (t, i) {
            return t instanceof fj && i.isEditable(t)
        }, onstart: function (t, i) {
            if (!i[vk])return void(this.element && this[gf](i));
            if (!t[eA]) {
                var e = i[Bf](t), n = t.getData();
                if (n != this[BL]) {
                    if (this[BL]) {
                        if (this._g8(t, i))return void(t.responded = !0);
                        this.destroy(i)
                    }
                    if (n && !n._editting && this._nas(n, i)) {
                        var s = this._nc8(n, i, e), r = this._nc6(n, i, e);
                        (s || r) && this._40(n, i, s, r)
                    }
                }
            }
        }, onrelease: function (t, i) {
            this[BL] && (this._naanEdit = !0, this._nc0(), i.callLater(function () {
                this._9h()
            }, this))
        }, _9k: null, _g8: function (t, i) {
            var e = i[qI](t);
            e = this._hm(e.x, e.y);
            var n = i[Co], s = this.handlerSize / n;
            if (this._rotatePoint) {
                var r = this._rotatePoint.x, a = this._rotatePoint.y - this._rotateHandleLength / n;
                if (TD(e.x, e.y, r, a) < s)return this._rotatePoint
            }
            if (this._j3 && this._j3[$r]) {
                var h;
                return l(this._j3, function (t) {
                    return TD(e.x, e.y, t.x, t.y) < s ? (h = t, !1) : void 0
                }, this), h
            }
        }, onmousemove: function (t, i) {
            if (this.element) {
                var e = this._g8(t, i);
                if (!e)return void(i.cursor = null);
                if (e != this._rotatePoint && this.element.rotate) {
                    var n = e.rotate + this[BL][ho];
                    return void(i[WI] = Or(n))
                }
                i[WI] = e.cursor
            }
        }, startdrag: function (t, i) {
            if (this[BL] && (this._6p(), this._naanEdit && (this._9k = this._g8(t, i), this._9k))) {
                if (t[eA] = !0, this._9k == this._rotatePoint)return this._9k.start = i.toLogical(t), void(this._9k.rotate = this.element.rotate || 0);
                var e = new kr(i, kr.RESIZE_START, t, this[BL]);
                e.point = this._9k, i[AI](e)
            }
        }, _6x: function (t, i, e, n, s, r) {
            var a = this._naq, h = a.x, o = a.y, _ = a.width, f = a.height;
            if (r) {
                var c = n != _;
                c ? s = n * f / _ : n = s * _ / f
            }
            var u = t[Op]._gd, d = n / _, l = s / f, v = -h * d + i, b = -o * l + e;
            u[l_](function (t) {
                if (t.type != xM[sC]) {
                    var n = t.points;
                    if (n && n.length)for (var s = 0, r = n.length; r > s; s += 2) {
                        var a = n[s], _ = n[s + 1];
                        n[s] = (a - h) * d + i - v, n[s + 1] = (_ - o) * l + e - b
                    }
                }
            }), this._naq.set(i - v, e - b, n, s), t.setLocation(t.x + v, t.y + b), t.firePathChange()
        }, _4w: function (t, i, e, n, s) {
            if (this.element instanceof cj)return this._6x(this[BL], t, i, e, n, s);
            var r = this._ncody instanceof Lj;
            if (!r && s) {
                var a = this._naq, h = this._ncody.originalBounds, o = e != a.width;
                o ? n = e * h.height / h.width : e = n * h.width / h[Dh]
            }
            var _ = this[BL].anchorPosition, f = new OD(e - this._insets[Ha] - this._insets[Aa], n - this._insets.top - this._insets.bottom);
            if (f[Ah] < 1 && (e = this._insets.left + this._insets.right + 1, f.width = 1), f[Dh] < 1 && (n = this._insets.top + this._insets[Ca] + 1, f[Dh] = 1), r ? this.element.setStyle(bj[rC], f) : this.element.size = f, _) {
                var c = oi(_, e, n), u = c.x + t - (this._ncody[Tw] || 0), d = c.y + i - (this._ncody[ww] || 0);
                if (this._naq.set(t - u, i - d, e, n), this.element[ho]) {
                    var c = Ms({x: u, y: d}, this.element.rotate);
                    u = c.x, d = c.y
                }
                this.element.x += u, this.element.y += d
            } else {
                var u = this._naq.x * e / this._naq.width - t, d = this._naq.y * n / this._naq.height - i;
                if (this._naq.set(t + u, i + d, e, n), this.element.rotate) {
                    var c = Ms({x: u, y: d}, this[BL][ho]);
                    u = c.x, d = c.y
                }
                this[BL].x -= u, this.element.y -= d
            }
        }, ondrag: function (t, i) {
            if (this[BL] && this._9k) {
                if (this._9k == this._rotatePoint) {
                    var e = i[qI](t), n = de(e.x, e.y, this[BL].x, this[BL].y, this._9k[HL].x, this._9k.start.y, !0);
                    return n += this._9k[ho] || 0, t[Zy] && (n = Math[Io](n / Math.PI * 4) * Math.PI / 4), void(this.element[ho] = n % (2 * Math.PI))
                }
                var s = t.dx, r = t.dy, a = i[Co];
                if (s /= a, r /= a, this[BL].rotate) {
                    var e = {x: s, y: r};
                    Ms(e, -this.element.rotate), s = e.x, r = e.y
                }
                var h = this._9k.p, o = this._naq, _ = o.x, f = o.y, c = o[Ah], u = o[Dh];
                h.horizontalPosition == LD ? s >= c ? (_ += c, c = s - c || 1) : (_ += s, c -= s) : h.horizontalPosition == CD && (-s >= c ? (c = -s - c || 1, _ -= c) : c += s), h[Pa] == RD ? r >= u ? (f += u, u = r - u || 1) : (f += r, u -= r) : h[Pa] == DD && (-r >= u ? (u = -r - u || 1, f -= u) : u += r), this._4w(_, f, c, u, t.shiftKey);
                var d = new kr(i, kr.RESIZING, t, this[BL]);
                d[FA] = this._9k, i.onInteractionEvent(d)
            }
        }, enddrag: function (t, i) {
            if (this[BL] && this._9k && this._9k != this._rotatePoint) {
                var e = new kr(i, kr[aC], t, this.element);
                e.point = this._9k, i[AI](e)
            }
        }
    }, mM.ResizeInteraction = Tr;
    var Kj = function (t) {
        this.graph = t
    };
    Kj.prototype = {
        onstart: function (t, i) {
            if (!t.responded) {
                dD || eD || i.focus(!0);
                var e = t[qa]();
                if (e && !i[gc](e) && (e = null), e && Oi(t)) {
                    i.reverseSelect(e);
                    var n = new kr(i, kr.SELECT, t, i[vc]);
                    return void i[AI](n)
                }
                if (!e || !i.selectionModel[hC](e)) {
                    e ? (i.setSelection(e), i[oC](e)) : i.setSelection(null);
                    var n = new kr(i, kr[_C], t, i.selectionModel);
                    i.onInteractionEvent(n)
                }
            }
        }, onkeydown: function (t, i) {
            return 27 == t[Jy] ? void i.unSelectAll() : void(Oi(t) && 65 == t[Jy] && (i.selectAll(), A(t)))
        }
    };
    var Zj = 0, Jj = 15;
    gD.TOOLTIP_DURATION = 3e3, gD.TOOLTIP_DELAY = 1e3;
    var Qj = function (t) {
        this[jf] = t
    };
    Qj[_a] = {
        _nch: {}, _ncf: null, _nce: function () {
            delete this._initTimer, this._nch.data && (this._ncf || (this._ncf = i.createElement(Vf), this._ncf.className = fC, mM[cC](this._ncf, {
                "background-color": uC,
                overflow: ac,
                "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
                color: lb,
                "pointer-events": hc,
                border: dC,
                padding: lC,
                display: hL,
                position: oc
            })), this._ncf[Qv] || i.body.appendChild(this._ncf), this._nao(this.graph, this._nch[no]))
        }, _nao: function (t, i) {
            var e = t.getTooltip(i), n = Pc == i[vC];
            e && !n && (e = e[bC](/\n/g, gC)), n ? this._ncf[yC] = e || "" : this._ncf[EC] = e || "";
            var s = this._nch.evt[pC] + Zj, r = this._nch[mC].pageY + Jj;
            Sr(this._ncf, s, r), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._deleteTimer = setTimeout(mM[xC](this, this._8k), t[TC] || gD[wC])
        }, _8k: function () {
            delete this._deleteTimer, this._ncf && this._ncf[Qv] && this._ncf[Qv].removeChild(this._ncf), delete this._ncf, this._nch = {}
        }, _e4: function (t, i, e, n) {
            if (!this._ncf) {
                var s = n.tooltipDelay;
                return isNaN(s) && (s = gD.TOOLTIP_DELAY), void(this._initTimer = setTimeout(mM[xC](this, this._nce), s))
            }
            this._nao(n, t)
        }, onstart: function (t, i) {
            this[gf](i)
        }, onmousemove: function (t, i) {
            if (i.enableTooltip) {
                var e = t.getData();
                if (this._nch.evt = t, this._nch.data != e && (this._nch[no] = e, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), e)) {
                    var n = i.getTooltip(e);
                    n && this._e4(e, n, t, i)
                }
            }
        }, destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._ncf && this._8k()
        }
    };
    var tB = function (t) {
        this.graph = t
    };
    tB.prototype = {
        onmousewheel: function (t, i) {
            if (i[OC] !== !1) {
                if (i._scaling)return void A(t);
                i._scaling = !0, m(function () {
                    delete i._scaling
                }, this, 100), ar(i, t, t[hh] > 0) !== !1 && A(t)
            }
        }
    };
    var iB = function (t) {
        this[jf] = t
    };
    iB.prototype = {
        onclick: function (t, i) {
            ar(i, t, !Oi(t))
        }
    };
    var eB = function (t) {
        this.graph = t
    };
    eB[_a] = {
        onclick: function (t, i) {
            ar(i, t, Oi(t))
        }
    }, N(kr, jD), kr.ELEMENT_MOVE_START = SC, kr.ELEMENT_MOVING = kC, kr.ELEMENT_MOVE_END = IC, kr[uI] = LC, kr[AC] = CC, kr[GA] = RC, kr.POINT_MOVING = PC, kr[DC] = MC, kr.RESIZE_START = NC, kr[jC] = BC, kr[aC] = $C, kr[GC] = FC, kr.SELECT = jc, kr.SELECT_START = zC, kr.SELECT_BETWEEN = YC, kr[qA] = HC, kr.LONG_CLICK = UC, Ir[_a] = {
        _9o: function (t) {
            if (this._interactionSupport)switch (t.kind) {
                case WD.KIND_REMOVE:
                    this._interactionSupport._4g(t[no]);
                    break;
                case WD[Od]:
                    this._interactionSupport._7q(t[no])
            }
        }, destroy: function () {
            delete this._kd, delete this._4x, this._interactionSupport && (this._interactionSupport._hs(), delete this._interactionSupport)
        }, _kd: null, _4x: null, defaultMode: null, _gw: function (t, i, e) {
            this._4x[t] = new _r(i, e), t == this[Wc] && this._interactionSupport._7d(i)
        }, addCustomInteraction: function (t) {
            this._interactionSupport._$b(t)
        }, _my: function (t) {
            var i = this._4x[t];
            return i ? i : nB[t]
        }
    }, Z(Ir.prototype, {
        defaultCursor: {
            get: function () {
                return this[qC] ? this[qC][WC] : void 0
            }
        }, currentMode: {
            get: function () {
                return this._naurrentMode
            }, set: function (t) {
                this._naurrentMode != t && (this._naurrentMode, this._interactionSupport || (this._interactionSupport = new hM(this._kd)), this._naurrentMode = t, this[qC] = this._my(this._naurrentMode), this._kd.cursor = this[WC], this._interactionSupport._7d(this.currentInteractionMode ? this[qC].getInteractionInstances(this._kd) : []))
            }
        }
    });
    var nB = {};
    gD.registerInteractions = function (t, i, e) {
        var n = new _r(i, e);
        nB[t] = n
    }, xM[XC] = VC, xM.INTERACTION_MODE_DEFAULT = Tc, xM[KC] = Rc, xM.INTERACTION_MODE_ZOOMIN = ZC, xM.INTERACTION_MODE_ZOOMOUT = JC, xM[QC] = tR, xM.INTERACTION_MODE_CREATE_EDGE = iR, xM[eR] = nR, xM.INTERACTION_MODE_CREATE_LINE = sR, gD.registerInteractions(xM[XC], [Kj, Xj, tB, qj, Hj, Qj]), gD.registerInteractions(xM[QC], [Uj, vr, Kj, Xj, tB, qj, Qj]), gD.registerInteractions(xM[rR], [Uj, ur, Kj, Xj, tB, qj, Qj]), gD.registerInteractions(xM[eR], [Uj, dr, Kj, Xj, tB, qj, Qj]), gD[aR](xM.INTERACTION_MODE_CREATE_LINE, [lr, Kj, Xj, tB, qj, Qj]), gD.registerInteractions(xM[hR], [Uj, Tr, xr, Kj, Wj, Xj, tB, qj, Hj, Qj]), gD.registerInteractions(xM.INTERACTION_MODE_SELECTION, [Uj, Tr, xr, Kj, Wj, Vj, Xj, tB, qj, Hj, Qj]), gD.registerInteractions(xM.INTERACTION_MODE_ZOOMIN, [tB, qj, iB], oM), gD[aR](xM[oR], [tB, qj, eB], _M), mM.PanInteraction = Xj, mM.SelectionInteraction = Kj, mM.MoveInteraction = Wj, mM[_R] = tB, mM[fR] = Hj, mM[cR] = qj, mM[uR] = Qj, mM[dR] = Vj, mM.PointsInteraction = xr;
    var sB = function (t) {
        this.graph = t
    };
    mM.Layouter = sB, sB.prototype = {
        getNodeBounds: function (t) {
            return this[jf].getUIBounds(t)
        }, isLayoutable: function (t) {
            return t[lR] !== !1
        }, getLayoutResult: function () {
        }, updateLocations: function (t, i, e, n, s) {
            if (i === !0) {
                if (this[vR] || (this[vR] = new CB), e && (this[vR][bR] = e), n && (this.animate.animationType = n), this[vR].locations = t, s) {
                    var r = s, a = this;
                    s = function () {
                        r[Br](a, t)
                    }
                }
                return void this[vR][HL](s)
            }
            for (var h in t) {
                var o = t[h], _ = o[gR];
                _.setLocation(o.x, o.y)
            }
            s && s.call(this, t)
        }, _fo: function (t) {
            var i, e, n, s = null;
            t && (i = t.byAnimate, s = t[cf], e = t.duration, n = t.animationType);
            var r = this.getLayoutResult(t);
            return r ? (this[yR](r, i, e, n, s), r) : !1
        }, doLayout: function (t, i) {
            return this[jf] && i !== !0 ? void this[jf].callLater(function () {
                this._fo(t)
            }, this) : this._fo(t)
        }
    };
    var rB = 11, aB = 12, hB = 13, oB = 21, _B = 22, fB = 23;
    xM[ER] = rB, xM.DIRECTION_LEFT = aB, xM[pR] = hB, xM.DIRECTION_BOTTOM = oB, xM.DIRECTION_TOP = _B, xM[mR] = fB;
    var cB = xR, uB = TR, dB = wR, lB = OR;
    xM[SR] = cB, xM.LAYOUT_TYPE_EVEN_HORIZONTAL = dB, xM.LAYOUT_TYPE_EVEN_VERTICAL = lB, xM[kR] = uB, mM[IR] = Lr;
    var vB = function (t) {
        this[jf] = t
    };
    vB[_a] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: oB,
        layoutType: cB,
        defaultSize: {width: 50, height: 60},
        getNodeSize: function (t) {
            if (this.graph._84._n9m) {
                var i = this.graph[Bf](t);
                if (i)return i._fp
            }
            return t.image && t.image.bounds ? {width: t[wb].bounds[Ah], height: t.image.bounds[Dh]} : this[LR]
        },
        _na5: function (t, i) {
            if (this.isLayoutable(t)) {
                var e = this[AR](t), n = t.id, s = (t[CR], i ? this._9p[i.id] : this._n9t);
                this._9p[n] = new bB(t[RR] || this[RR], t[PR] || this[PR], t[DR] || this.layoutType, t.parentChildrenDirection, s, t, e.width, e[Dh])
            }
        },
        _9p: null,
        _n9t: null,
        _kt: function () {
            this._9p = null, this._n9t = null
        },
        getLayoutResult: function (t) {
            var i, e, n, s, r = this[jf];
            t instanceof Object && (i = t.x, e = t.y, r = t.root || this.graph, n = t[Zh], s = t[MR]), this._9p = {}, this._n9t = new bB, this._n9t._mt(this.hGap, this.vGap, this.parentChildrenDirection, this.layoutType);
            var a = {}, h = DB(r, this._na5, this, !1, s);
            return h && (this._n9t._fo(i || 0, e || 0, a), n && n[Uo](this._n9t.x, this._n9t.y, this._n9t.width, this._n9t.height)), this._kt(), a
        },
        doLayout: function (t, i) {
            if (S(t)) {
                var e = t, n = 0;
                S(i) && (n = i), t = {x: e, y: n}, i = !0
            }
            return B(this, vB, NR, [t, i])
        }
    }, N(vB, sB);
    var bB = function (t, i, e, n, s, r, a, h) {
        this._mg = t || 0, this._mi = i || 0, this.layoutType = e, this[CR] = n, this.parentBounds = s, s && s._gq(this), this[gR] = r, this._ep = a, this._nax = h
    };
    bB.prototype = {
        _mt: function (t, i, e, n) {
            this._mg = t, this._mi = i, this.parentChildrenDirection = e, this.layoutType = n
        },
        _8l: function () {
            this._fs = []
        },
        _mg: 0,
        _mi: 0,
        _fs: null,
        _ep: 0,
        _nax: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _gq: function (t) {
            this._fs || (this._fs = []), this._fs[Qh](t)
        },
        _d0: function (t, i, e, n) {
            var s = new SD;
            return e(this._fs, function (e) {
                e._4a(t, i), s.add(e), n ? t += e.width + this._mg : i += e.height + this._mi
            }, this), s
        },
        _8p: function (t, i, e, n, s) {
            var r, a = n ? this._mg : this._mi, h = n ? this._mi : this._mg, o = n ? "width" : Dh, _ = n ? "height" : Ah, f = n ? "_ep" : jR, c = n ? "_nax" : BR, u = n ? "hostDX" : $R, d = n ? "hostDY" : GR, v = new SD, b = 0, g = 0, y = [], E = 0, p = 0;
            e(this._fs, function (e) {
                var s = p >= g;
                e._inheritedParentChildrenDirection = s ? n ? aB : _B : n ? rB : oB, e._4a(t, i), s ? (y[Qh](e), b = Math.max(b, e[o]), g += e[_] + h) : (r || (r = []), r.push(e), E = Math.max(E, e[o]), p += e[_] + h)
            }, this), g -= h, p -= h;
            var m = Math[Uh](g, p), x = a, T = 0;
            this[gR] && (s && (x += this[f] + a, m > this[c] ? this[d] = (m - this[c]) / 2 : T = (this[c] - m) / 2), this[u] = b + x / 2 - this[f] / 2);
            var w = 0, O = T;
            return l(y, function (t) {
                n ? t.offset(b - t[o], O) : t[om](O, b - t[o]), O += h + t[_], v[Vr](t)
            }, this), r ? (O = T, w = b + x, l(r, function (t) {
                n ? t[om](w, O) : t.offset(O, w), O += h + t[_], v.add(t)
            }, this), v) : v
        },
        offset: function (t, i) {
            this.x += t, this.y += i, this.nodeX += t, this[FR] += i, this._7m(t, i)
        },
        _n9v: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _n9f: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _mp: function (t) {
            if (this._fs && 0 != this._fs[$r]) {
                if (t)return this.node && (this[zR] += this._n9v(this.nodeX, this._ep)), void l(this._fs, function (t) {
                    t.offset(this._n9v(t.x, t[Ah]), 0)
                }, this);
                this.node && (this.nodeY += this._n9f(this[FR], this._nax)), l(this._fs, function (t) {
                    t.offset(0, this._n9f(t.y, t[Dh]))
                }, this)
            }
        },
        _7m: function (t, i) {
            this._fs && l(this._fs, function (e) {
                e[om](t, i)
            }, this)
        },
        _4a: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._fs && 0 != this._fs[$r] ? void this._1z(this.x, this.y, this[DR]) : void(this[gR] && (this.width = this._ep, this[Dh] = this._nax, this[zR] = this.x, this[FR] = this.y))
        },
        _7e: function (t) {
            this.node && (t[this[gR].id] = {
                node: this.node,
                x: this.nodeX + this._ep / 2,
                y: this[FR] + this._nax / 2,
                left: this.nodeX,
                top: this.nodeY,
                width: this._ep,
                height: this._nax
            }), this._fs && l(this._fs, function (i) {
                i._7e(t)
            }, this)
        },
        _fo: function (t, i, e) {
            this._4a(t, i), this._7e(e)
        },
        _1z: function (t, i, n) {
            var s, r = t, a = i;
            !this.parentChildrenDirection && this.parentBounds && (this[CR] = this._inheritedParentChildrenDirection || this[YR][CR]);
            var h = this[CR], o = Lr(h);
            if (this[gR]) {
                s = h == hB || h == fB;
                var _ = Ar(h);
                s || (o ? t += this._ep + this._mg : i += this._nax + this._mi)
            }
            var f, c = this.node && this.node.layoutReverse ? b : l;
            if (n == uB)f = this._8p(t, i, c, !o, s); else {
                var u;
                u = n == cB ? !o : n == dB, f = this._d0(t, i, c, u, s)
            }
            var d = 0, v = 0;
            f && !f[Ko]() && (d = f.width, v = f[Dh], this.add(f)), this[gR] && (this.nodeX = r, this.nodeY = a, this.hostDX !== e || this.hostDY !== e ? (this.nodeX += this.hostDX || 0, this[FR] += this.hostDY || 0) : o ? this[FR] += v / 2 - this._nax / 2 : this.nodeX += d / 2 - this._ep / 2, this[Ru](this[zR], this[FR], this._ep, this._nax), _ && this._mp(o))
        },
        node: null,
        uiBounds: null
    }, N(bB, SD), Rr.prototype = {
        layoutDatas: null, isMovable: function (t) {
            return !this.currentMovingNodes[t.id]
        }, _7r: !1, _3v: function () {
            this._7r = !0, this[jf]._20[qc](this._n94, this), this.graph._1p[qc](this._2o, this)
        }, _1y: function () {
            this._7r = !1, this[jf]._20.removeListener(this._n94, this), this[jf]._1p[yd](this._2o, this)
        }, invalidateFlag: !0, invalidateLayoutDatas: function () {
            this.invalidateFlag = !0
        }, resetLayoutDatas: function () {
            return this.invalidateFlag = !1, this[HR] = Cr.call(this)
        }, _2o: function (t) {
            kr[UR] == t[ad] ? (this.currentMovingNodes = {}, t[Uc].forEach(function (t) {
                this.currentMovingNodes[t.id] = t
            }, this)) : kr.ELEMENT_MOVE_END == t.kind && (this[tu] = {})
        }, _n94: function () {
            this.invalidateLayoutDatas()
        }, isRunning: function () {
            return this.timer && this[qR]._dv()
        }, getLayoutResult: function () {
            this.stop(), this[WR]();
            for (var t = this[XR](this.layoutDatas[VR] || 0, this.layoutDatas.edgeCount || 0), i = 0; t > i && this[KR](!1) !== !1; i++);
            var e = this.layoutDatas[ZR];
            return this.onstop(), e
        }, _ly: function () {
            return !1
        }, step: function (t) {
            if (t === !1)return this._ly(this.timeStep);
            (this[Dp] || !this[HR]) && this.resetLayoutDatas();
            var i = this._ly(t), e = this.layoutDatas.nodes;
            for (var n in e) {
                var s = e[n], r = s[gR];
                this[OI](r) ? r[JR](s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        }, onstop: function () {
            delete this[HR]
        }, start: function (t) {
            if (this[QR]())return !1;
            this._7r || this._3v(), this._jsr || (this._jsr = z(this, function (t) {
                return this[KR](t)
            })), this.invalidateLayoutDatas(), this.timer = new yM(this._jsr);
            var i = this;
            return this.timer._ke(function () {
                i[tP](), t && t()
            }), !0
        }, stop: function () {
            this.timer && (this[qR]._lw(), this.onstop())
        }, getMaxIterations: function (t) {
            return Math.min(1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        }, resetGraph: function () {
            this._7r || this._3v(), this.resetLayoutDatas()
        }, destroy: function () {
            this.stop(), this._1y()
        }
    }, N(Rr, sB);
    var gB = function (t, i, e, n) {
        this.graph = t, S(i) && (this[Vu] = i), S(e) && (this[iP] = e), S(n) && (this[eP] = n)
    };
    mM[nP] = gB;
    var yB = sP, EB = rP, pB = aP, mB = hP;
    xM.ANGLE_SPACING_PROPORTIONAL = yB, xM.ANGLE_SPACING_REGULAR = EB, xM.RADIUS_MODE_UNIFORM = pB, xM.RADIUS_MODE_VARIABLE = mB, gB[_a] = {
        angleSpacing: yB,
        radiusMode: mB,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9p: null,
        _n9t: null,
        _kt: function () {
            this._9p = null, this._n9t = null
        },
        getLayoutResult: function (t) {
            var i, e = 0, n = 0, s = this.graph;
            t instanceof Object && (e = t.cx || 0, n = t.cy || 0, s = t[oP] || this[jf], i = t.bounds), this._9p = {}, this._n9t = new wB(this);
            var r = {}, a = MB(s, this._na5, this);
            return a && (this._n9t._fs && 1 == this._n9t._fs.length && (this._n9t = this._n9t._fs[0]), this._n9t._dw(!0), this._n9t._62(e, n, this[eP], r, i)), this._kt(), r
        },
        _na5: function (t, i) {
            if (this[_P](t)) {
                var e = i ? this._9p[i.id] : this._n9t;
                this._9p[t.id] = new wB(this, t, e)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this[Vu]
        },
        getNodeSize: function (t) {
            if (this[jf]._84._n9m) {
                var i = this[jf].getUI(t);
                if (i)return (i._fp.width + i._fp.height) / 2
            }
            return this.defaultSize
        },
        getGap: function () {
            return this[iP]
        },
        _3a: function (t, i, e) {
            return this.getNodeSize(t, i, e) + this[fP](t, i, e)
        }
    };
    var xB = function (t) {
        var i, e = this._fs[$r], n = 0, s = 0;
        if (l(this._fs, function (t) {
                var e = t._dw();
                1 > e && (e = 1), s += e, e > n && (n = e, i = t)
            }, this), e > 1) {
            var r = 0, a = {}, h = s / e / 3;
            s = 0, l(this._fs, function (t) {
                var i = t._m8;
                h > i && (i = h), a[t.id] = i, s += i
            }, this);
            var o = OB / s;
            l(this._fs, function (i, e) {
                var n = a[i.id], s = n * o;
                0 === e && (r = t ? -s / 2 : -s), i._la = r + s / 2, i._lc = s, r += s
            }, this)
        }
        return [n, i._lc]
    }, TB = function (t) {
        var i = this._86, e = 2 * Math.PI / i, n = 0, s = t ? 0 : i > 1 ? -e / 2 : 0;
        return l(this._fs, function (t) {
            t._la = s % OB, s += e, t._lc = e;
            var i = t._dw();
            i > n && (n = i)
        }, this), [n, e]
    }, wB = function (t, i, e) {
        this[cP] = t, i && (this._ma = i, this.id = i.id), e && (e._gq(this), e._m6 = !1, this._l7 = e._l7 + 1)
    }, OB = 2 * Math.PI;
    wB[_a] = {
        _lc: 0,
        _la: 0,
        _j1: 0,
        _em: 0,
        _db: 0,
        _l7: 0,
        _m6: !0,
        _m8: 0,
        _gp: 0,
        _fs: null,
        _ma: null,
        _gq: function (t) {
            this._fs || (this._fs = []), this._fs.push(t), t.parent = this
        },
        _gu: function (t) {
            if (this._la = (this._la + t) % OB, this._fs) {
                var i = this._fs[$r];
                if (1 == i)return void this._fs[0]._gu(this._la);
                t = this._la + Math.PI, l(this._fs, function (i) {
                    i._gu(t)
                }, this)
            }
        },
        _86: 0,
        _7i: function (t) {
            return this._ma && (this._gp = this.layouter._3a(this._ma, this._l7, this._m6) / 2), this._fs ? (this._gp, this._86 = this._fs[$r], this._86 <= 2 || this[cP][uP] == EB ? TB.call(this, t) : xB.call(this, t)) : null
        },
        _dw: function (t) {
            var i = this._7i(t);
            if (!i)return this._m8 = this._gp;
            var e = i[0], n = i[1], s = this.layouter.getRadius(this._ma, this._l7);
            if (s < this._gp && (s = this._gp), this._em = s, this._gp + e > s && (s = this._gp + e), e && this._86 > 1 && n < Math.PI) {
                var r = e / Math.sin(n / 2);
                r > s && (s = r)
            }
            return this._j1 = s, this._m8 = s + e, this._ma && this._fs && this[cP][dP] == mB && l(this._fs, function (t) {
                var i = t._m8;
                1 == t._86 && (i /= 2);
                var e = this._gp + i, n = t._lc;
                if (n && n < Math.PI) {
                    var s = Math.sin(n / 2), r = i / s;
                    r > i && (i = r)
                }
                e > i && (i = e), t._db = i
            }, this), (!this._ma || t) && this._gu(0), this._m8
        },
        _62: function (t, i, e, n, s) {
            if (this._ma && (n[this._ma.id] = {
                    x: t,
                    y: i,
                    node: this._ma
                }, s && s.addRect(t - this._gp / 2, i - this._gp / 2, this._gp, this._gp)), this._fs) {
                if (!this._ma && 1 == this._fs[$r])return void this._fs[0]._62(t, i, e, n, s);
                e = e || 0;
                var r = this._j1, a = this._em;
                l(this._fs, function (h) {
                    var o = r;
                    h._db && (o = Math.max(a, h._db));
                    var _ = h._la + e, f = t + o * Math[Lh](_), c = i + o * Math[La](_);
                    h._62(f, c, e, n, s)
                }, this)
            }
        }
    }, N(gB, sB);
    var SB = function () {
        j(this, SB, arguments)
    };
    N(SB, Pr);
    var kB = function (t, i) {
        this.node1 = t, this[lP] = i, t == i ? (this.isLooped = !0, this._l2 = t._kk) : this._l2 = new ED, this._8h = [], this._gh = gD.EDGE_BUNDLE_EXPANDED
    };
    gD[vP] = !0, kB.prototype = {
        node1: null,
        node2: null,
        _l2: null,
        _gh: gD.EDGE_BUNDLE_EXPANDED,
        _8h: null,
        _gk: null,
        agentEdge: null,
        _ncp: function (t, i, e) {
            this._l2[l_](function (n) {
                return e && n[rf] != e && n[R_] != e ? void 0 : t[Br](i, n)
            })
        },
        _64: 0,
        _66: 0,
        _ij: function (t, i) {
            return this._l2.add(t) === !1 ? !1 : (i == this.node1 ? this._64++ : this._66++, this._n9m ? void this._1c(t) : void(this._n9m = !0))
        },
        _nac: function (t, i) {
            return this._l2[Zr](t) === !1 ? !1 : (i == this.node1 ? this._64-- : this._66--, this._najBindableFlag = !0, this._6f = !0, void this._l2.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0, t.__53 = !0
            }, this))
        },
        _1c: function (t) {
            this._najBindableFlag = !0, this._6f = !0, t._edgeBundleInvalidateFlag = !0, t.__53 = !0
        },
        _naj: function () {
            this._6f || (this._6f = !0, this._l2[l_](function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function () {
            return this._l2.isEmpty()
        },
        isPositiveOrder: function (t) {
            return this.node1 == t[rf] || this.node1 == t.fromAgent
        },
        canBind: function (t) {
            return t && this._6f && this._f6(t), this._l2.length > 1 && this._8h[$r] > 1
        },
        _ie: function (t) {
            return this._8h[Ur](t)
        },
        getYOffset: function (t) {
            return this._gk[t.id]
        },
        _4m: function (t) {
            if (!this[uk]())return void(this._gk = {});
            var i = {}, e = this._8h.length;
            if (!(2 > e)) {
                var n = 0, s = this._8h[0];
                i[s.id] = 0;
                for (var r = 1; e > r; r++) {
                    s = this._8h[r];
                    var a = t[Ef](s, bj.EDGE_BUNDLE_GAP) || Dj[bj[cT]];
                    n += a, i[s.id] = n
                }
                if (!this.isLooped)for (var h = n / 2, r = 0; e > r; r++)s = this._8h[r], i[s.id] -= h;
                this._gk = i
            }
        },
        _n9b: function (t) {
            return this._gh == t ? !1 : (this._gh = t, this._naj(), !0)
        },
        reverseExpanded: function () {
            return this._n9b(!this._gh)
        },
        _1t: function () {
            this._najBindableFlag = !1, this._8h.length = 0;
            var t;
            this._l2.forEach(function (i) {
                if (i[ck]()) {
                    if (!this[dk](i))return t || (t = []), void t[Qh](i);
                    this._8h.push(i)
                }
            }, this), t && (this._8h = t[Yr](this._8h))
        },
        _ee: function (t) {
            return t == this[YI] || !this[uk]() || this._gh
        },
        _f6: function (t) {
            this._6f = !1, this._l2.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._najBindableFlag && this._1t();
            var i = this._gh, e = this.canBind(), n = !e || i;
            l(this._8h, function (t) {
                t._$x = !0, t._hwInBundle = n, n && (t.__53 = !0)
            }, this), n ? this._8x(null, t) : (this._8x(this._8h[0], t), this[YI]._hwInBundle = !0, this[YI].__53 = !0), n && this._4m(t)
        },
        _8x: function (t, i) {
            if (t != this.agentEdge) {
                var e = this.agentEdge;
                return this[YI] = t, i && i._4k(new BD(this, YI, t, e)), !0
            }
        }
    }, Z(kB[_a], {
        bindableEdges: {
            get: function () {
                return this._8h
            }
        }, edges: {
            get: function () {
                return this._l2._ix
            }
        }, length: {
            get: function () {
                return this._l2 ? this._l2.length : 1
            }
        }, expanded: {
            get: function () {
                return this._gh
            }, set: function (t) {
                return this._gh == t ? !1 : (this._gh = t, void this._naj())
            }
        }
    });
    var IB = function () {
        function t(t, i) {
            this[gR] = t, this[Zv] = i
        }

        function i() {
            this[bP] = [], this[gP] = 0
        }

        var e = -1e6, n = .8;
        i[_a] = {
            isEmpty: function () {
                return 0 === this[gP]
            }, push: function (i, e) {
                var n = this[bP][this.popIdx];
                n ? (n.node = i, n[Zv] = e) : this.stack[this.popIdx] = new t(i, e), ++this[gP]
            }, pop: function () {
                return this.popIdx > 0 ? this.stack[--this.popIdx] : void 0
            }, reset: function () {
                this[gP] = 0
            }
        };
        var s = [], r = new i, a = function () {
            this[Zv] = null, this.quads = [], this.mass = 0, this[yP] = 0, this[EP] = 0, this[Ha] = 0, this.top = 0, this[Ca] = 0, this.right = 0, this.isInternal = !1
        }, h = [], o = 0, _ = function () {
            var t;
            return h[o] ? (t = h[o], t[pP][0] = null, t[pP][1] = null, t.quads[2] = null, t[pP][3] = null, t.body = null, t.mass = t[yP] = t.massY = 0, t.left = t[Aa] = t.top = t.bottom = 0, t[mP] = !1) : (t = new a, h[o] = t), ++o, t
        }, f = _(), c = function (t, i) {
            var e = Math.abs(t.x - i.x), n = Math.abs(t.y - i.y);
            return 1e-8 > e && 1e-8 > n
        }, u = function (t) {
            for (r.reset(), r[Qh](f, t); !r.isEmpty();) {
                var i = r[ll](), e = i[gR], n = i.body;
                if (e[mP]) {
                    var s = n.x, a = n.y;
                    e[xP] = e[xP] + n.mass, e.massX = e[yP] + n[xP] * s, e.massY = e[EP] + n.mass * a;
                    var h = 0, o = e[Ha], u = (e.right + o) / 2, d = e.top, l = (e[Ca] + d) / 2;
                    if (s > u) {
                        h += 1;
                        var v = o;
                        o = u, u += u - v
                    }
                    if (a > l) {
                        h += 2;
                        var b = d;
                        d = l, l += l - b
                    }
                    var g = e.quads[h];
                    g || (g = _(), g.left = o, g[Ua] = d, g.right = u, g.bottom = l, e[pP][h] = g), r.push(g, n)
                } else if (e[Zv]) {
                    var y = e.body;
                    if (e[Zv] = null, e[mP] = !0, c(y, n)) {
                        if (e.right - e.left < 1e-8)return;
                        do {
                            var E = Math[Wu](), p = (e.right - e[Ha]) * E, m = (e.bottom - e[Ua]) * E;
                            y.x = e[Ha] + p, y.y = e.top + m
                        } while (c(y, n))
                    }
                    r[Qh](e, y), r[Qh](e, n)
                } else e[Zv] = n
            }
        }, d = function (t) {
            var i, r, a, h, o = s, _ = 1, c = 0, u = 1;
            for (o[0] = f; _;) {
                var d = o[c], l = d[Zv];
                _ -= 1, c += 1, l && l !== t ? (r = l.x - t.x, a = l.y - t.y, h = Math.sqrt(r * r + a * a), 0 === h && (r = (Math.random() - .5) / 50, a = (Math.random() - .5) / 50, h = Math.sqrt(r * r + a * a)), i = e * l.mass * t.mass / (h * h), -1e3 > i && (i = -1e3), i /= h, t.fx = t.fx + i * r, t.fy = t.fy + i * a) : (r = d.massX / d[xP] - t.x, a = d.massY / d[xP] - t.y, h = Math[Vh](r * r + a * a), 0 === h && (r = (Math[Wu]() - .5) / 50, a = (Math[Wu]() - .5) / 50, h = Math[Vh](r * r + a * a)), (d.right - d[Ha]) / h < n ? (i = e * d.mass * t.mass / (h * h), -1e3 > i && (i = -1e3), i /= h, t.fx = t.fx + i * r, t.fy = t.fy + i * a) : (d[pP][0] && (o[u] = d[pP][0], _ += 1, u += 1), d[pP][1] && (o[u] = d[pP][1], _ += 1, u += 1), d.quads[2] && (o[u] = d.quads[2], _ += 1, u += 1), d[pP][3] && (o[u] = d[pP][3], _ += 1, u += 1)))
            }
        }, l = function (t, i) {
            e = i;
            var n, s = Number[Pu], r = Number.MAX_VALUE, a = Number[TP], h = Number.MIN_VALUE, c = t, d = c.length;
            for (n = d; n--;) {
                var l = c[n].x, v = c[n].y;
                s > l && (s = l), l > a && (a = l), r > v && (r = v), v > h && (h = v)
            }
            var b = a - s, g = h - r;
            for (b > g ? h = r + b : a = s + g, o = 0, f = _(), f[Ha] = s, f[Aa] = a, f[Ua] = r, f.bottom = h, n = d; n--;)u(c[n], f)
        };
        return {init: l, update: d}
    }, LB = function (t) {
        t.fx -= t.x * this.attractive, t.fy -= t.y * this[wP]
    }, AB = function (t) {
        if (0 != t.k) {
            var i = this._ncz, e = t[Zc], n = t.to, s = n.x - e.x, r = n.y - e.y, a = s * s + r * r, h = Math[Vh](a) || .1, o = (h - i) * t.k * this.elastic;
            o /= h;
            var _ = o * s, f = o * r;
            n.fx -= _, n.fy -= f, e.fx += _, e.fy += f
        }
    };
    Pr.prototype = {
        appendNodeInfo: function (t, i) {
            i.mass = t.layoutMass || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        }, appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1
        }, setMass: function (t, i) {
            t[OP] = i, this[HR] && this.layoutDatas.nodes && (t = this.layoutDatas[ZR][t.id], t && (t[xP] = i))
        }, setElasticity: function (t, i) {
            t[SP] = i, this[HR] && this.layoutDatas.edges && (t = this.layoutDatas.edges[t.id], t && (t.k = i))
        }, _ncz: 50, _il: .5, timeStep: .15, repulsion: 50, attractive: .1, elastic: 3, _m9: 1e3, _jy: function (t) {
            return this._m9 + .3 * (t - this._m9)
        }, _ly: function (t, i) {
            var e = (Date[Il](), this[HR].nodes);
            for (var n in e) {
                var s = e[n];
                i && (s.x += Math.random() - .5, s.y += Math.random() - .5), LB.call(this, s)
            }
            var r = this[HR][kP];
            if (r)for (var n in r) {
                var a = r[n], h = a[Gr], o = 0, _ = 0;
                h[l_](function (t) {
                    o += t.x, _ += t.y
                }), o /= h.length, _ /= h[$r];
                var f = 10 * this.attractive;
                h[l_](function (t) {
                    t.fx -= (t.x - o) * f, t.fy -= (t.y - _) * f
                })
            }
            var c = this._nbodyForce;
            c || (c = this._nbodyForce = IB()), c[lc](this[HR].nodesArray, -this[IP] * this[IP] * this[IP]);
            for (var n in e)c[LP](e[n]);
            if (this.elastic) {
                var u = this[HR].edges;
                for (var n in u)AB.call(this, u[n])
            }
            return this._mb(t)
        }, _mb: function (t) {
            var i = this.layoutDatas.minEnergy, e = (this[HR].currentEnergy, this.layoutDatas.nodes), t = this[AP], n = 0, s = this._il;
            for (var r in e) {
                var a = e[r], h = a.fx / a[xP], o = a.fy / a.mass, _ = a.vx += h * t, f = a.vy += o * t;
                a.x += _ * t, a.y += f * t, i > n && (n += 2 * (_ * _ + f * f)), a.fx = 0, a.fy = 0, a.vx *= s, a.vy *= s
            }
            return this[HR].currentEnergy = n, n >= i
        }
    }, N(Pr, Rr), mM[CP] = Pr;
    var CB = function (t) {
        this.locations = t
    };
    CB.prototype = {
        oldLocations: null, _dr: null, duration: 700, animationType: gM.easeOutStrong, _7g: function (t) {
            if (this._dr = t, this[RP] = {}, t)for (var i in t) {
                var e = t[i], n = e[gR];
                this[RP][i] = {x: n.x, y: n.y}
            }
        }, setLocation: function (t, i, e) {
            t.setLocation(i, e)
        }, forEach: function (t, i) {
            for (var e in this.locations) {
                var n = this[RP][e], s = this.locations[e];
                t.call(i, n, s)
            }
        }, _k3: function (t) {
            this.forEach(function (i, e) {
                var n = e[gR], s = i.x + (e.x - i.x) * t, r = i.y + (e.y - i.y) * t;
                this[JR](n, s, r)
            }, this)
        }, stop: function () {
            this._n9nimate && this._n9nimate._lw()
        }, start: function (t) {
            this._n9nimate ? (this._n9nimate._lw(), this._n9nimate._ip = this[bR], this._n9nimate._ejType = this.animationType, this._n9nimate._onfinish = this._onfinish) : this._n9nimate = new EM(this._k3, this, this.duration, this[DL]), this._n9nimate._ke(t)
        }
    }, Z(CB[_a], {
        locations: {
            get: function () {
                return this._dr
            }, set: function (t) {
                this._dr != t && this._7g(t)
            }
        }
    });
    var RB = function (t) {
        var i = new ED;
        return t[l_](function (t) {
            t instanceof fj && (t.hasInEdge() || i[Vr](t._dk || t))
        }), i
    }, PB = function (t, i, e, n, s, r) {
        if (i instanceof XD)return t(i, e, n, s, r), i;
        if (i instanceof Nj) {
            var a = new ED;
            i._kdModel.forEach(function (t) {
                return i[tL](t) ? t._i0() && t._gh && t.hasChildren() ? void(t.$location && (t.$location.invalidateFlag = !1)) : void a[Vr](t) : void 0
            }), i = a
        }
        var i = RB(i);
        return l(i, function (i) {
            t(i, e, n, s, r)
        }), i
    }, DB = function (t, i, e, n, s) {
        return PB(NB, t, i, e, n, s)
    }, MB = function (t, i, e, n, s) {
        return PB(jB, t, i, e, n, s)
    };
    Jn[_a][PP] = function (t, i, e, n) {
        DB(this, t, i, e, n)
    }, Jn[_a][DP] = function (t, i, e, n) {
        MB(this, t, i, e, n)
    };
    var NB = function (t, i, e, n, s) {
        function r(t, i, e, n, s, a, h, o) {
            t._marker = a, n || i[Br](e, t, o, h), Dr(t, function (o) {
                r(o, i, e, n, s, a, h + 1, t)
            }, o, s, a), n && i.call(e, t, o, h)
        }

        r(t, i, e, n, s, {}, 0)
    }, jB = function (t, i, e, n, s) {
        function r(t, i, e, n, s, a, h) {
            var o, _ = t.length;
            t[l_](function (t, r) {
                var f = t.v;
                f._marker = a, n || i.call(e, f, t._from, h, r, _), Dr(f, function (t) {
                    o || (o = []), t._marker = a, o[Qh]({v: t, _from: f})
                }, f, s, a)
            }), o && r(o, i, e, n, s, a, h + 1), n && t[l_](function (t, n) {
                i.call(e, t.v, t._from, h, n, _)
            })
        }

        r([{v: t}], i, e, n, s, {}, 0)
    };
    mM[MP] = V, mM[NP] = ti, mM[Ia] = ei, mM.trace = ii, mM.isIE = eD, mM.isOpera = iD, mM[jP] = sD, mM[BP] = rD, mM[$P] = aD, mM[GP] = oD, mM.isChrome = hD, mM.isMac = _D, mM.DefaultStyles = Dj, mM.Defaults = gD, mM[DI] = bj, mM.Consts = xM, mM.Graphs = aN, mM[FP] = Nj, mM.BaseUI = lj, mM[zP] = kj, mM.NodeUI = hs, mM.EdgeUI = as, mM[YP] = Lj, mM[HP] = Ij, mM.Shapes = uj, mM.Path = nN, mM[qS] = GM, mM[UP] = kr, mM.Element = oj, mM.Node = fj, mM.Edge = _j, mM[qP] = Jn, mM.EdgeBundle = kB, mM.TreeLayouter = vB, mM.name = WP;
    var BB = XP;
    return mM[VP] = XP, mM[eE] = KP, mM[ZP] = "Copyright © 2015 Qunee.com", mM.css = ui, mM.IDrawable = jj, ti = function () {
    }, mM.publishDate = JP, mM
}(window, document);