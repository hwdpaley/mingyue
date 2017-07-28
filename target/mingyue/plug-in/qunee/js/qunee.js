window.Q = function (t, i, e) {
    "use strict";
    function n(t, i, e) {
        if (t.hasChildren()) {
            var s = t._f5 || t.getChildren();
            if (s) {
                s = s._ja || s;
                for (var r = 0, h = s[jr]; h > r; r++)if (i.call(e, s[r]) === !1 || n(s[r], i, e) === !1)return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t[Br]())return t instanceof PN ? t : null;
        for (var i, e = t._f5._ja, n = e[jr] - 1; n >= 0;) {
            if (i = e[n], i = s(i))return i;
            n--
        }
        return null
    }

    function r(t, i, e, n) {
        return n ? h(t, i, e) : a(t, i, e)
    }

    function h(t, i, e) {
        t = t._ja || t;
        for (var n, s = 0, r = t[jr]; r > s; s++)if (n = t[s], n[Br]() && !h(n[$r], i, e) || i[Fr](e, n) === !1)return !1;
        return !0
    }

    function a(t, i, e) {
        t = t._ja || t;
        for (var n, s = 0, r = t.length; r > s; s++)if (n = t[s], i.call(e, n) === !1 || n.hasChildren() && !a(n[$r], i, e))return !1;
        return !0
    }

    function o(t, i, e, n) {
        return n ? _(t, i, e) : f(t, i, e)
    }

    function _(t, i, e) {
        t = t._ja || t;
        for (var n, s = t.length, r = s - 1; r >= 0; r--)if (n = t[r], n[Br]() && !_(n.children, i, e) || i[Fr](e, n) === !1)return !1;
        return !0
    }

    function f(t, i, e) {
        t = t._ja || t;
        for (var n, s = t.length, r = s - 1; r >= 0; r--)if (n = t[r], i[Fr](e, n) === !1 || n[Br]() && !f(n.children, i, e))return !1;
        return !0
    }

    function c(t, i, e) {
        for (var n, s = (t._ja || t).slice(0); s.length;) {
            n = s[0], s = s[Gr](1);
            var r = i[Fr](e, n);
            if (r === !1)return !1;
            if (n.hasChildren()) {
                var h = n[$r];
                h = h._ja || h, s = s[zr](h)
            }
        }
        return !0
    }

    function u(t, i, e) {
        for (var n, s = (t._ja || t).slice(0); s[jr];) {
            n = s[s.length - 1], s = s.splice(0, s[jr] - 1);
            var r = i[Fr](e, n);
            if (r === !1)return !1;
            if (n[Br]()) {
                var h = n[$r];
                h = h._ja || h, s = s[zr](h)
            }
        }
        return !0
    }

    function d(t, i) {
        function e(t, e) {
            for (var n = t.length, s = e[jr], r = n + s, h = new Array(r), a = 0, o = 0, _ = 0; r > _;)h[_++] = a === n ? e[o++] : o === s || i(t[a], e[o]) <= 0 ? t[a++] : e[o++];
            return h
        }

        function n(t) {
            var i = t.length, s = Math.ceil(i / 2);
            return 1 >= i ? t : e(n(t[Yr](0, s)), n(t.slice(s)))
        }

        return n(t)
    }

    function l(t, i, e, n) {
        t instanceof HM && (t = t._ja);
        for (var s = 0, r = (t._ja || t).length; r > s; s++) {
            var h = i[Fr](e, t[s], s, n);
            if (h === !1)return !1
        }
        return !0
    }

    function v(t, i, e) {
        for (var n = t instanceof HM, s = t._ja || t, r = 0, h = s[jr]; h > r; r++) {
            var a = s[r];
            i[Fr](e, a) && (n ? t[Hr](a) : t[Gr](r, 1), r--, h--)
        }
    }

    function b(t, i, e, n) {
        t instanceof HM && (t = t._ja);
        for (var s = (t._ja || t).length - 1; s >= 0; s--) {
            var r = i.call(e, t[s], s, n);
            if (r === !1)return !1
        }
        return !0
    }

    function g(t) {
        if (t[qr]instanceof Function)return t[qr](!0);
        var i, e = [];
        return l(t, function (t) {
            i = t && t.clone instanceof Function ? t[qr]() : t, e.push(i)
        }, this), e
    }

    function y(t, i, n) {
        n === e || 0 > n ? t[Wr](i) : t.splice(n, 0, i)
    }

    function p(t, i) {
        var e = t[Ur](i);
        return 0 > e || e >= t[jr] ? !1 : t[Gr](e, 1)
    }

    function E(t, i) {
        var e = !1;
        return l(t, function (t) {
            return i == t ? (e = !0, !1) : void 0
        }), e
    }

    function m(t, i, e) {
        return i instanceof Object ? t = z(i, t) : i && !e && (e = parseInt(i)), i && !e && (e = parseInt(i)), e ? setTimeout(t, e) : setTimeout(t)
    }

    function x(i, e) {
        return e && (i = z(e, i)), t[Xr](i)
    }

    function T(t, i) {
        return t.className = i, t
    }

    function w(t, i) {
        if (!t.hasOwnProperty(Vr)) {
            var e = t[Zr](Kr);
            if (!e)return T(t, i);
            for (var n = e[Jr](Qr), s = 0, r = n.length; r > s; s++)if (n[s] == i)return;
            return e += Qr + i, T(t, e)
        }
        t[Vr].add(i)
    }

    function O(t, i) {
        if (!t.hasOwnProperty(Vr)) {
            var e = t.getAttribute(Kr);
            if (!e || !e.indexOf(i))return;
            for (var n = "", s = e[Jr](Qr), r = 0, h = s.length; h > r; r++)s[r] != i && (n += s[r] + Qr);
            return T(t, n)
        }
        t.classList.remove(i)
    }

    function k(t) {
        return t instanceof Number || th == typeof t
    }

    function S(t) {
        return t !== e && (t instanceof String || ih == typeof t)
    }

    function I(t) {
        return t !== e && (t instanceof Boolean || eh == typeof t)
    }

    function A(t) {
        return Array.isArray(t)
    }

    function L(i) {
        i || (i = t[nh]), i.preventDefault ? i.preventDefault() : i[sh] = !1
    }

    function C(i) {
        i || (i = t[nh]), i[rh] ? i[rh]() : i[hh] || (i.cancelBubble = !0)
    }

    function R(t) {
        L(t), C(t)
    }

    function M(t) {
        return Math[ah](Math[oh]() * t)
    }

    function D() {
        return Math[oh]() >= .5
    }

    function P(t, i) {
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
        _h == typeof i && (n = i, i = t, t = function () {
            i.apply(this, arguments)
        });
        var s = t.prototype, r = function () {
        };
        return r[fh] = i.prototype, t.prototype = new r, t.superclass = i.prototype, t.superclass.constructor = i, P(t[fh], s), n && P(t.prototype, n), e && P(t.prototype, e), t.prototype[Kr] = t, t
    }

    function j(t, i, e) {
        return B(t, i, "constructor", e)
    }

    function B(t, i, e, n) {
        var s = i[ch];
        if (s) {
            var r = s[e];
            return r ? r.apply(t, n) : void 0
        }
    }

    function $(t) {
        return t[uh](4)
    }

    function F(t) {
        delete t[dh], delete t[lh]
    }

    function G(t, i) {
        t[i] && (F(t[i]), delete t[i])
    }

    function z(t, i) {
        var e = function () {
            return e[lh][vh](e.scope, arguments)
        };
        return e[lh] = i, e.scope = t, e
    }

    function Y(t, i) {
        return t == i
    }

    function H(t, i, n, s, r) {
        if (s)return void Object[bh](t, i, {value: n, enumerable: !0});
        var h = {configurable: !0, enumerable: !0}, a = gh + i;
        n !== e && (t[a] = n), h.get = function () {
            return this[a]
        }, h.set = function (t) {
            var e = this[a];
            if (Y(e, t))return !1;
            var n = new _D(this, i, t, e);
            return this[yh](n) ? (this[a] = t, r && r[Fr](this, t, e), this.onEvent(n), !0) : !1
        }, Object[bh](t, i, h)
    }

    function q(t, i) {
        for (var e = 0, n = i[jr]; n > e; e++) {
            var s = i[e];
            H(t, s[ph] || s, s[Eh] || s.value, s.readOnly, s.onSetting)
        }
    }

    function W(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math[oh]());
            return mh + (i >> 16 & 255) + xh + (i >> 8 & 255) + xh + (255 & i) + xh + t[uh](2) + Th
        }
        return V(Math[ah](16777215 * Math[oh]()))
    }

    function U(t) {
        return t > 0 ? Math[ah](t) : Math[wh](t)
    }

    function X(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    function V(t) {
        return 16777216 > t ? Oh + (kh + t.toString(16)).slice(-6) : mh + (t >> 16 & 255) + xh + (t >> 8 & 255) + xh + (255 & t) + xh + ((t >> 24 & 255) / 255)[uh](2) + Th
    }

    function Z(t, i, e) {
        _h != typeof e || e.hasOwnProperty(Sh) || (e.enumerable = !0), Object.defineProperty(t, i, e)
    }

    function K(t, i) {
        for (var e in i)if (Ih != e[0]) {
            var n = i[e];
            _h != typeof n || n.hasOwnProperty(Sh) || (n.enumerable = !0)
        }
        Object[Ah](t, i)
    }

    function J(i, e) {
        e || (e = t);
        for (var n = i[Jr](Lh), s = 0, r = n.length; r > s; s++) {
            var h = n[s];
            e = e[h]
        }
        return e
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== e
    }

    function ti(i) {
        t[Ch] && console[Rh](i)
    }

    function ii(i) {
        t[Ch] && console.trace(i)
    }

    function ei(i) {
        t.console && console[Mh](i)
    }

    function ni(t, i, e) {
        var n, s, r;
        0 == t._n7 ? (n = -1, r = 0, s = i) : 0 == t._n8 ? (n = 0, r = 1, s = e) : (n = -1 / t._n7, s = (t._n7 - n) * i + t._n9, r = 1);
        var h = new VM;
        return h._n7 = n, h._n9 = s, h._n8 = r, h._n2 = i, h._n3 = e, h._ke = Math.atan2(n, r), h._n8os = Math.cos(h._ke), h._sin = Math[Dh](h._ke), h
    }

    function si(t, i, e, n, s) {
        var r, h;
        i > n ? r = -1 : n > i && (r = 1), e > s ? h = -1 : s > e && (h = 1);
        var a, o;
        if (!r)return o = 0 > h ? t.y : t.bottom, {x: i, y: o};
        if (!h)return a = 0 > r ? t.x : t[Ph], {x: a, y: e};
        var _ = (e - s) / (i - n), f = e - _ * i, c = 0 > r ? i - t.x : i - t.right, u = 0 > h ? e - t.y : e - t.bottom;
        return Math[Nh](_) >= Math[Nh](u / c) ? (o = 0 > h ? t.y : t[jh], a = (o - f) / _) : (a = 0 > r ? t.x : t[Ph], o = _ * a + f), {
            x: a,
            y: o
        }
    }

    function ri(t, i, e, n, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= e || 0 >= n ? !1 : (h += s, a += r, e += t, n += i, (s > h || h > t) && (r > a || a > i) && (t > e || e > s) && (i > n || n > r))
    }

    function hi(t, i, e, n, s, r) {
        return s >= t && t + e >= s && r >= i && i + n >= r
    }

    function ai(t, i, e, n, s, r, h, a) {
        return s >= t && r >= i && t + e >= s + h && i + n >= r + a
    }

    function oi(t, i, n) {
        if (!t)return {x: 0, y: 0};
        if (t.x !== e)return {x: t.x, y: t.y};
        var s, r, h = t[Bh], a = t[$h];
        switch (h) {
            case tD:
                s = 0;
                break;
            case eD:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (a) {
            case nD:
                r = 0;
                break;
            case rD:
                r = n;
                break;
            default:
                r = n / 2
        }
        return {x: s, y: r}
    }

    function _i(t, i, e) {
        t.children.add(i, e), t[Fh](i, e)
    }

    function fi(t, i) {
        t._f5 && (t._f5.remove(i), t.onChildRemove(i))
    }

    function ci(t) {
        return t[Gh](/^-ms-/, zh)[Gh](/-([\da-z])/gi, function (t, i) {
            return i.toUpperCase()
        })
    }

    function ui(t, i) {
        var e = t.style;
        if (!e)return !1;
        var n, s;
        for (n in i)i.hasOwnProperty(n) && (s = kD(n)) && (e[s] = i[n]);
        return t
    }

    function di(t, i, e) {
        (i = kD(i)) && (t[Yh][i] = e)
    }

    function li(t, i) {
        return wD ? wD.insertRule ? void wD.insertRule(t + Hh + i + qh, 0) : void(wD.addRule && wD.addRule(t, i, 0)) : !1
    }

    function vi(i, e) {
        i.touches && (i = i.changedTouches && i[Wh][jr] ? i.changedTouches[0] : i[Uh][0]);
        var n = e[Xh](), s = i[Vh] || 0, r = i.clientY || 0;
        return BM && MM && (t.pageXOffset && s == i.pageX && (s -= t[Zh]), t.pageYOffset && r == i.pageY && (r -= t[Kh])), {
            x: s - n.left,
            y: r - n[Jh]
        }
    }

    function bi(t, i) {
        return this[gh + i] = ID(t, i, function (t) {
            return Ei.call(this, t, i)
        }, !1, this)
    }

    function gi(t) {
        var i = this;
        return t.getData = function () {
            return i._kk.getElementByMouseEvent(t)
        }, t.getUI = function () {
            return i._kk[Qh](t)
        }, t
    }

    function yi(t) {
        this.__n8ancelClick || (this.__n8lickEvent = t, this.__n8lickTime ? this.__n8lickTime++ : (this.__n8lickTime = 1, setTimeout(z(this, function () {
            if (this.__n8lickEvent) {
                var t = this.__n8lickTime;
                this.__n8lickTime = 0, 1 == t ? this._hx(this.__n8lickEvent, ta) : t > 1 && this._hx(this.__n8lickEvent, ia), this.__n8lickEvent = null
            }
        }), zM[ea])))
    }

    function pi(t) {
        if (t[Uh]) {
            for (var i = t.touches, e = [], n = 0, s = i[jr]; s > n; n++) {
                var r = i[n];
                e[Wr]({pageX: r[na], pageY: r.pageY, clientX: r.clientX, clientY: r[sa]})
            }
            return {timeStamp: t[ra], touches: e, scale: t[ha]}
        }
        return {timeStamp: t.timeStamp, x: t[Vh], y: t[sa]}
    }

    function Ei(t, i) {
        switch (t = gi.call(this, t), i) {
            case"touchstart":
                if (t[Uh].length >= 2)return this._9i = pi(t), this._n84.clear(), this._27(), void(this._n83 || (this._n83 = t, this._9i = pi(t)));
            case"mousedown":
                if (R(t), this._hx(t, aa), this._n83 = t, this._9i = pi(t), t.button || (this.__onLongPressFunction ? this.__longPressTimer && this._27() : this.__onLongPressFunction = z(this, function () {
                        this.__longPressTimer = null, this._n83 && (this.__n8ancelClick = !0, this._hx(this._n83, oa))
                    }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, zM.LONG_PRESS_INTERVAL), this.__n8ancelClick = !1), BM)return;
                return void(RD._n8urrentInteractionSupport = this);
            case"touchend":
                if (!this._n83)return void(this._moving = null);
                if (t.touches.length)return void(this._9i = pi(t));
                t.timeStamp - this._n83.timeStamp < 200 && yi[Fr](this, this._n83);
            case"touchcancel":
                if (!this._n83)return void(this._moving = null);
                this._moving && (this._moving = null, this._il(t));
            case"mouseup":
                return void this._ei(t);
            case"click":
                return void yi.call(this, t);
            case"mousewheel":
            case"DOMMouseScroll":
                return t.delta = t.wheelDelta || -t.detail, this._hx(t, _a);
            case"touchmove":
                var e = t[Uh].length;
                return this._moving || (this._moving = !0, 1 == e && this._e1()), void this._j2(t)
        }
        return this._hx(t, fa + i)
    }

    function mi(t, i) {
        var e = gh + i;
        AD(t, i, this[e]), G(this, e)
    }

    function xi(i) {
        l(LD, function (t) {
            bi[Fr](this, i, t)
        }, this), BM || RD._n7g || (RD._n7g = !0, ID(t, ca, function (t) {
            if (RD._n8urrentInteractionSupport) {
                R(t);
                var i = RD._n8urrentInteractionSupport;
                if (!RD._dragging) {
                    if (i._n83) {
                        var e = i._n83.screenX - t[ua], n = i._n83[da] - t.screenY;
                        if (4 > e * e + n * n)return
                    }
                    RD._dragging = !0, i._e1()
                }
                i._j2(t)
            }
        }, !0), ID(t, la, function (t) {
            var i = RD._n8urrentInteractionSupport;
            delete RD._n8urrentInteractionSupport, RD._dragging && (delete RD._dragging, L(t), t = gi.call(i, t), i._il(t), i._ei(t))
        }, !0))
    }

    function Ti(t) {
        l(LD, function (i) {
            mi.call(this, t, i)
        }, this), BM || (RD._n8urrentInteractionSupport == this && (delete RD._dragging, delete RD._n8urrentInteractionSupport), this._27(), delete this._n83, delete this._9i)
    }

    function wi(t, i, e) {
        this._lq = t, this._n84 = new ki, xi.call(this, t), i && (this._listener = i), this._km = e
    }

    function Oi(t) {
        return DM && t.metaKey || !DM && t[va]
    }

    function ki() {
        this.points = []
    }

    function Si(t, i, e, n, s) {
        Ai(t, function (n) {
            if (i) {
                var s = n.responseXML;
                if (!s)return void(e || qD)(ba + t + ga);
                i(s)
            }
        }, e, n, s)
    }

    function Ii(t, i, e, n, s) {
        Ai(t, function (n) {
            if (i) {
                var s, r = n.responseText;
                if (!r)return (e || qD)(ba + t + ya), s = new Error(ba + t + ya), i(r, s);
                try {
                    r = JSON[pa](r)
                } catch (h) {
                    (e || qD)(h), s = h
                }
                i(r, s)
            }
        }, e, n, s)
    }

    function Ai(t, i, e, n, s) {
        (e === !1 || n === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest, h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h.indexOf(Ea) > 0 ? "&" : Ea, h += a + ma + Date.now()
            }
            r[xa](Ta, h), r.onreadystatechange = function () {
                return 4 == r.readyState ? r[wa] && 200 != r[wa] ? void(e || qD)(ba + t + Oa) : void(i && i(r)) : void 0
            }, r.send(n)
        } catch (o) {
            (e || qD)(ba + t + Oa, o)
        }
    }

    function ri(t, i, e, n, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= e || 0 >= n ? !1 : (h += s, a += r, e += t, n += i, (s > h || h > t) && (r > a || a > i) && (t > e || e > s) && (i > n || n > r))
    }

    function ai(t, i, e, n, s, r, h, a) {
        return s >= t && r >= i && t + e >= s + h && i + n >= r + a
    }

    function Li(t, i, e) {
        return t instanceof Object && t.x ? Ri(t, i, 0, 0) : Ci(t, i, e, 0, 0)
    }

    function Ci(t, i, e, n, s) {
        var r = Math[Dh](e), h = Math.cos(e), a = t - n, o = i - s;
        return t = a * h - o * r + n, i = a * r + o * h + s, new UM(t, i, e)
    }

    function Ri(t, i, e, n) {
        e = e || 0, n = n || 0;
        var s = Math.sin(i), r = Math.cos(i), h = t.x - e, a = t.y - n;
        return t.x = h * r - a * s + e, t.y = h * s + a * r + n, t
    }

    function Mi(t, i, e) {
        return Di(t, i, e, 0, 0)
    }

    function Di(t, i, e, n, s) {
        var r = Ci(t.x, t.y, i, n, s), h = Li(t.x + t.width, t.y, i, n, s), a = Li(t.x + t[ka], t.y + t[Sa], i, n, s), o = Li(t.x, t.y + t.height, i, n, s);
        return e ? e[Ia]() : e = new KM, e[Aa](r), e[Aa](h), e.addPoint(a), e.addPoint(o), e
    }

    function Pi(t, i) {
        var e = this[La] || 1;
        this[Yh][ka] = t + Ca, this.style.height = i + Ca, this.width = t * e, this.height = i * e
    }

    function Ni() {
        this.canvas[ka] = this[Ra].width
    }

    function ji(t) {
        var i = t[Ma] || t.mozBackingStorePixelRatio || t[Da] || t.oBackingStorePixelRatio || t[Pa] || 1;
        return XD / i
    }

    function Bi(t, e, n) {
        var s = i[Na](Ra);
        if (s.g = s[ja](Ba), t !== !0 && !n)return t && e && (s[ka] = t, s[Sa] = e), s;
        var r = s.g;
        return r[La] = s[La] = ji(r), s[$a] = Pi, r._kg = Ni, t && e && s[$a](t, e), s
    }

    function $i(t, i, n) {
        if (t === e || null === t)return {width: 0, height: 0};
        var s = Fi();
        n = n || zM.FONT, s[Fa] != n && (s[Fa] = n);
        for (var r = i * zM.LINE_HEIGHT, h = 0, a = 0, o = t[Jr](Ga), _ = 0, f = o[jr]; f > _; _++) {
            var c = o[_];
            h = Math[za](s[Ya](c)[ka], h), a += r
        }
        return {width: h, height: a}
    }

    function Fi(t, i) {
        return VD || (VD = Bi()), t && i && (VD.width = t, VD.height = i), VD.g
    }

    function Gi(t) {
        return Math[Rh](t + Math.sqrt(t * t + 1))
    }

    function zi(t, i) {
        i = i || t(1);
        var e = 1 / i, n = .5 * e, s = Math[Ha](1, i / 100);
        return function (r) {
            if (0 >= r)return 0;
            if (r >= i)return 1;
            for (var h = r * e, a = 0; a++ < 10;) {
                var o = t(h), _ = r - o;
                if (Math.abs(_) <= s)return h;
                h += _ * n
            }
            return h
        }
    }

    function Yi(t, i, e) {
        var n = 1 - t, s = n * n * i[0] + 2 * n * t * i[2] + t * t * i[4], r = n * n * i[1] + 2 * n * t * i[3] + t * t * i[5];
        if (e) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {x: s, y: r, rotate: Math.atan2(a, h)}
        }
        return {t: t, x: s, y: r}
    }

    function Hi(t, i, e) {
        var n = t - 2 * i + e;
        return 0 != n ? (t - i) / n : -1
    }

    function qi(t, i) {
        i.add(t[4], t[5]);
        var e = Hi(t[0], t[2], t[4]);
        if (e > 0 && 1 > e) {
            var n = Yi(e, t);
            i[qa](n.x, n.y)
        }
        var s = Hi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var n = Yi(s, t);
            i.add(n.x, n.y)
        }
        return i
    }

    function Wi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0], e = t[1], n = t[4], s = t[5], r = Math.sqrt(ZD(i, e, n, s));
            return function (t) {
                return r * t
            }
        }
        var h = t[0], a = t[2], o = t[4], _ = h - 2 * a + o, f = 2 * a - 2 * h;
        h = t[1], a = t[3], o = t[5];
        var c = h - 2 * a + o, u = 2 * a - 2 * h, d = 4 * (_ * _ + c * c), l = 4 * (_ * f + c * u), v = f * f + u * u, r = 4 * d * v - l * l, b = 1 / r, g = .125 * Math.pow(d, -1.5), y = 2 * Math[Wa](d), p = (r * Gi(l / Math.sqrt(r)) + 2 * Math[Wa](d) * l * Math[Wa](v)) * g;
        return function (t) {
            var i = l + 2 * t * d, e = i / Math[Wa](r), n = i * i * b;
            return (r * Math.log(e + Math[Wa](n + 1)) + y * i * Math.sqrt(v + t * l + t * t * d)) * g - p
        }
    }

    function Ui(t, i, e) {
        var n = 1 - t, s = i[0], r = i[2], h = i[4], a = i[6], o = s * n * n * n + 3 * r * t * n * n + 3 * h * t * t * n + a * t * t * t;
        if (e)var _ = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], r = i[3], h = i[5], a = i[7];
        var f = s * n * n * n + 3 * r * t * n * n + 3 * h * t * t * n + a * t * t * t;
        if (e) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {x: o, y: f, rotate: Math[Ua](c, _)}
        }
        return {x: o, y: f}
    }

    function Xi(t, i, e, n) {
        var s = -t + 3 * i - 3 * e + n;
        if (0 == s)return [(t - i) / (2 * e - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * e, h = i - t, a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[Wa](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
    }

    function Vi(t, i) {
        i.add(t[6], t[7]);
        var e = Xi(t[0], t[2], t[4], t[6]);
        if (e)for (var n = 0; n < e.length; n++) {
            var s = e[n];
            if (!(0 >= s || s >= 1)) {
                var r = Ui(s, t);
                i[qa](r.x, r.y)
            }
        }
        if (e = Xi(t[1], t[3], t[5], t[7]))for (var n = 0; n < e.length; n++) {
            var s = e[n];
            if (!(0 >= s || s >= 1)) {
                var r = Ui(s, t);
                i.add(r.x, r.y)
            }
        }
    }

    function Zi(t) {
        var i = {x: t[0], y: t[1]}, e = {x: t[2], y: t[3]}, n = {x: t[4], y: t[5]}, s = {
            x: t[6],
            y: t[7]
        }, r = i.x - 0, h = i.y - 0, a = e.x - 0, o = e.y - 0, _ = n.x - 0, f = n.y - 0, c = s.x - 0, u = s.y - 0, d = 3 * (-r + 3 * a - 3 * _ + c), l = 6 * (r - 2 * a + _), v = 3 * (-r + a), b = 3 * (-h + 3 * o - 3 * f + u), g = 6 * (h - 2 * o + f), y = 3 * (-h + o), p = function (t) {
            var i = d * t * t + l * t + v, e = b * t * t + g * t + y;
            return Math.sqrt(i * i + e * e)
        }, E = (p(0) + 4 * p(.5) + p(1)) / 6;
        return E
    }

    function Ki(t, i) {
        function e(t, i, e, n) {
            var s = -t + 3 * i - 3 * e + n, r = 2 * t - 4 * i + 2 * e, h = i - t;
            return function (t) {
                return 3 * (s * t * t + r * t + h)
            }
        }

        function n(t, i) {
            var e = s(t), n = r(t);
            return Math.sqrt(e * e + n * n) * i
        }

        var s = e(t[0], t[2], t[4], t[6]), r = e(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function (t) {
            if (!t)return 0;
            for (var i, e = 0, s = 0; ;) {
                if (i = e + h, i >= t)return s += n(e, i - e);
                s += n(e, h), e = i
            }
        }
    }

    function Ji(t, i, e) {
        return ZD(i, e, t.cx, t.cy) <= t._squareR + KD
    }

    function Qi(t, i, e, n) {
        return e = e || te(t, i), new ie((t.x + i.x) / 2, (t.y + i.y) / 2, e / 2, t, i, null, n)
    }

    function te(t, i) {
        return XM(t.x, t.y, i.x, i.y)
    }

    function ie(t, i, e, n, s, r, h) {
        this.cx = t, this.cy = i, this.r = e, this._squareR = e * e, this.p1 = n, this.p2 = s, this.p3 = r, this._otherPoint = h
    }

    function ee(t, i, e, n) {
        this.cx = t, this.cy = i, this[ka] = e, this.height = n
    }

    function ne(t) {
        var i = t[0], e = t[1], n = t[2], s = ie._jwCircle(i, e, n);
        return re(t, i, e, n, s)
    }

    function se(t, i) {
        i = i || he(t);
        for (var e, n = i[ka] / i.height, s = [], r = t[jr], h = 0; r > h; h++)e = t[h], s.push({x: e.x, y: e.y * n});
        var a = ne(s);
        return a ? new ee(a.cx, a.cy / n, 2 * a.r, 2 * a.r / n) : void 0
    }

    function re(t, i, e, n, s) {
        for (var r, h, a = t[jr], o = s._squareR, _ = 0; a > _; _++)if (r = t[_], r != i && r != e && r != n) {
            var f = ZD(s.cx, s.cy, r.x, r.y);
            f - KD > o && (o = f, h = r)
        }
        if (!h)return s;
        var c, u = ie._jwCircle(h, i, e), d = ie._jwCircle(h, i, n), l = ie._jwCircle(h, n, e);
        return Ji(u, n.x, n.y) && (c = u), Ji(d, e.x, e.y) && (!c || c.r > d.r) && (c = d), Ji(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, e = c.p2, n = c.p3 || c._otherPoint, re(t, i, e, n, c)
    }

    function he(t) {
        for (var i, e = t.length, n = new KM, s = 0; e > s; s++)i = t[s], n.add(i.x, i.y);
        return n
    }

    function ae(t, i, e, n, s) {
        this._6s && this.validate();
        var r = s ? this.getBounds(s) : this.bounds, h = e / r.width, a = t - h * r.x, o = n / r.height, _ = i - o * r.y, f = this._fb, c = [];
        return l(f, function (t) {
            var i = t[qr](), e = i[Xa];
            if (e && e.length) {
                for (var n = e.length, s = [], r = 0; n > r; r++) {
                    var f = e[r];
                    r++;
                    var u = e[r];
                    f = h * f + a, u = o * u + _, s.push(f), s[Wr](u)
                }
                i.points = s
            }
            c[Wr](i)
        }, this), new IP(c)
    }

    function oe(t, i, e, n, s, r) {
        if (s = s || 0, e = e || 0, !s && !r)return !1;
        if (!n) {
            var h = this.getBounds(s);
            if (!h[Va](t, i, e))return !1
        }
        var a = Math[Za](2 * e) || 1, o = Fi(a, a), _ = (o[Ra], -t + e), f = -i + e;
        if (o[Ka](1, 0, 0, 1, _, f), !o[Ja]) {
            this._ln(o), s && o.stroke(), r && o.fill();
            for (var c = o[Qa](0, 0, a, a)[to], u = c.length / 4; u > 0;) {
                if (c[4 * u - 1] > SP)return !0;
                --u
            }
            return !1
        }
        return o[io] = (s || 0) + 2 * e, this._ln(o), s && o[Ja](e, e) ? !0 : r ? o[eo](e, e) : !1
    }

    function _e(t, i, e) {
        if (!this._iv)return null;
        var n = this._fb;
        if (n.length < 2)return null;
        e === !1 && (t += this._iv);
        var s = n[0];
        if (0 >= t)return Ns(s.points[0], s[Xa][1], n[1].points[0], n[1][Xa][1], t, i);
        if (t >= this._iv) {
            s = n[n.length - 1];
            var r, h, a = s.points, o = a.length, _ = a[o - 2], f = a[o - 1];
            if (o >= 4)r = a[o - 4], h = a[o - 3]; else {
                s = n[n[jr] - 2];
                var c = s.lastPoint;
                r = c.x, h = c.y
            }
            return Ns(_, f, _ + _ - r, f + f - h, t - this._iv, i)
        }
        for (var u, d = 0, l = 1, o = n.length; o > l; l++)if (u = n[l], u._iv) {
            if (!(d + u._iv < t)) {
                var v, c = s.lastPoint;
                if (u[no] == wP) {
                    var b = u.points;
                    v = fe(t - d, u, c.x, c.y, b[0], b[1], b[2], b[3], u._r)
                } else {
                    if (!u._lf)return Ns(c.x, c.y, u[Xa][0], u[Xa][1], t - d, i);
                    var g = zi(u._lf, u._iv)(t - d), b = u.points;
                    v = u[no] == TP && 6 == b[jr] ? Ui(g, [c.x, c.y][zr](b), !0) : Yi(g, [c.x, c.y].concat(b), !0)
                }
                return i && (v.x -= i * Math[Dh](v[so] || 0), v.y += i * Math.cos(v[so] || 0)), v
            }
            d += u._iv, s = u
        } else s = u
    }

    function fe(t, i, e, n, s, r, h, a) {
        if (t <= i._l1)return Ns(e, n, s, r, t);
        if (t >= i._iv)return t -= i._iv, Ns(i._p2x, i._p2y, h, a, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = -o);
            var _ = Ci(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return _[so] += i._n71 || 0, _[so] += Math.PI, _
        }
        return Ns(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }

    function ni(t, i, e) {
        var n, s, r;
        0 == t._n7 ? (n = -1, r = 0, s = i) : 0 == t._n8 ? (n = 0, r = 1, s = e) : (n = -1 / t._n7, s = (t._n7 - n) * i + t._n9, r = 1);
        var h = new VM;
        return h._n7 = n, h._n9 = s, h._n8 = r, h._n2 = i, h._n3 = e, h
    }

    function ce(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function ue(t, i, e, n, s, r, h, a) {
        var o = XM(i, e, n, s), _ = XM(n, s, r, h);
        if (!o || !_)return t._d = 0, t._r = 0, t._l1 = o, t._l2 = _, t._iv = 0;
        var f = le(n, s, i, e), c = le(n, s, r, h);
        t._n71 = f, t._n72 = c;
        var u = f - c;
        u = ce(u), u > Math.PI && (u = 2 * Math.PI - u, t._CCW = !0);
        var d = Math.PI - u, l = Math.tan(u / 2), v = a / l, b = Math.min(o, _);
        v > b && (v = b, a = l * v);
        var g, y = n + Math[ro](f) * v, p = s + Math.sin(f) * v, E = n + Math[ro](c) * v, m = s + Math[Dh](c) * v, x = new VM(i, e, n, s), T = new VM(n, s, r, h), w = ni(x, y, p), O = ni(T, E, m), k = w._3t(O), S = Math.atan2(p - k.y, y - k.x), I = Math.atan2(m - k.y, E - k.x);
        g = t._CCW ? I : S;
        for (var A, L = 0; 4 > L;) {
            var C = L * qM;
            if (ce(C - g) <= d) {
                var R, M;
                if (A ? A++ : A = 1, 0 == L ? (R = k.x + a, M = k.y) : 1 == L ? (R = k.x, M = k.y + a) : 2 == L ? (R = k.x - a, M = k.y) : (R = k.x, M = k.y - a), t[ho + A] = {
                        x: R,
                        y: M
                    }, 2 == A)break
            }
            L++
        }
        return t._p1x = y, t._p1y = p, t._p2x = E, t._p2y = m, t._o = k, t._d = v, t._r = a, t._l1 = o - v, t._l2 = _ - v, t._iv = t._l1 + d * a
    }

    function de(t, i, e, n, s, r, h) {
        var a = le(e, n, t, i), o = le(e, n, s, r), _ = a - o;
        return h ? _ : (0 > _ && (_ = -_), _ > Math.PI && (_ -= Math.PI), _)
    }

    function le(t, i, e, n) {
        return Math.atan2(n - i, e - t)
    }

    function ve(t) {
        var i = QD[ao](t);
        if (i)return i[1];
        var e = t.lastIndexOf(Lh);
        return e >= 0 && e < t.length - 1 ? t[oo](e + 1) : void 0
    }

    function be(t) {
        if (!t)return null;
        if (t instanceof IP)return hP;
        if (t.draw instanceof Function)return rP;
        if (S(t)) {
            var i = ve(t);
            if (i) {
                if (!SM && tP.test(i))return sP;
                if (iP[_o](i))return nP
            }
            return eP
        }
    }

    function ge(t, i, e) {
        if (this._lv = be(t), !this._lv)throw new Error("the image format is not supported", t);
        this._lu = t, this._n7e = i, this._9a = e, this[ka] = i || zM.IMAGE_WIDTH, this.height = e || zM.IMAGE_HEIGHT, this._ju = {}
    }

    function ye(t, i, e, n) {
        return i ? (fP[t] = new ge(i, e, n), t) : void delete fP[t]
    }

    function pe(t) {
        if (t._kb)return t._kb;
        var i = S(t);
        if (!i && !t[ph])return t._kb = new ge(t);
        var e = t[ph] || t;
        return e in fP ? fP[e] : fP[e] = new ge(t)
    }

    function Ee(t) {
        return t in fP
    }

    function me(t, i, e) {
        e = e || {};
        var n = t[fo](e.lineWidth);
        if (!n[ka] || !n.height)return !1;
        var s = i[ja](Ba), r = i.ratio || 1, h = e[co] || uo, a = /full/i[_o](h), o = /uniform/i.test(h), _ = 1, f = 1;
        if (a) {
            var c = i.width, u = i.height, d = e[lo], l = 0, v = 0;
            if (d) {
                var b, g, y, p;
                k(d) ? b = g = y = p = d : (b = d.top || 0, g = d.bottom || 0, y = d[vo] || 0, p = d.right || 0), c -= y + p, u -= b + g, l += y, v += b
            }
            _ = c / n[ka], f = u / n[Sa], o && (_ > f ? (l += (c - f * n[ka]) / 2, _ = f) : f > _ && (v += (u - _ * n.height) / 2, f = _)), (l || v) && s[bo](l, v)
        }
        s.translate(-n.x * _, -n.y * f), t.draw(s, r, e, _, f, !0)
    }

    function xe(t, i, e) {
        var n = pe(t);
        return n ? (n[go](), (n._lv == sP || n._6t()) && n._n7i(function (t) {
            t[yo] && (this.width = this[ka], me(t.source, this, e))
        }, i), void me(n, i, e)) : (WD.error(po + t), !1)
    }

    function Te(t, i, n, s) {
        var r = t[jr];
        if (r && !(0 > r)) {
            s = s || 1;
            for (var h, a, o, _ = [], f = 0; f++ < r;)if (h = t.getLocation(f, 0), h && XM(i, n, h.x, h.y) <= s) {
                a = f, o = h[so];
                break
            }
            if (a !== e) {
                for (var h, c, u, d = 0, f = 0, l = t._fb[jr]; l > f; f++) {
                    if (h = t._fb[f], !c && (d += h._iv || 0, d > a)) {
                        c = !0;
                        var v = Math[za](10, h._iv / 6), b = v * Math.sin(o), g = v * Math[ro](o);
                        if (h.type == TP) {
                            var y = h[Xa][0], p = h.points[1];
                            if (u) {
                                var E = new VM(i, n, i + g, n + b), m = E._3t(new VM(u.lastPoint.x, u[Eo].y, h.points[0], h.points[1]));
                                m.x !== e && (y = m.x, p = m.y)
                            }
                            _[Wr](new kP(TP, [y, p, i - g, n - b, i, n]))
                        } else _[Wr](new kP(xP, [i - g, n - b, i, n]));
                        if (h[Xa])if (h[no] == TP) {
                            h.points[0] = i + g, h[Xa][1] = n + b;
                            var E = new VM(i, n, i + g, n + b), m = E._3t(new VM(h[Xa][2], h[Xa][3], h[Xa][4], h.points[5]));
                            m.x !== e && (h[Xa][2] = m.x, h[Xa][3] = m.y)
                        } else if (h.type == xP) {
                            h[no] = TP, h[Xa] = [i + g, n + b].concat(h[Xa]);
                            var E = new VM(i, n, i + g, n + b), m = E._3t(new VM(h.points[2], h[Xa][3], h.points[4], h[Xa][5]));
                            m.x !== e && (h.points[2] = m.x, h[Xa][3] = m.y)
                        } else h[no] == mP && (h[no] = xP, h[Xa] = [i + g, n + b].concat(h.points), f == l - 1 && (h[mo] = !0))
                    }
                    _.push(h), u = h
                }
                return _
            }
        }
    }

    function we(t) {
        var i = t[ka], e = t[Sa];
        try {
            var n = t.g[Qa](0, 0, i, e), s = n.data;
            return Oe(s, i, e)
        } catch (r) {
            WD.error(r)
        }
    }

    function Oe(t, i) {
        var e, n, s, r, h, a = t.length, o = 0, _ = 0;
        for (h = 0; a > h; h += 4)if (t[h + 3] > 0) {
            e = (h + 4) / i / 4 | 0;
            break
        }
        for (h = a - 4; h >= 0; h -= 4)if (t[h + 3] > 0) {
            n = (h + 4) / i / 4 | 0;
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
        for (o = s; r >= o; o++)for (u = [], d.push(u), _ = e; n >= _; _++)h = 4 * (_ * i + o), f = t[h + 3], f ? (c = {
            a: f,
            r: t[h],
            g: t[h + 1],
            b: t[h + 2]
        }, u[Wr](c), l[Wr](c.r), l[Wr](c.g), l[Wr](c.b), l.push(c.a)) : (u[Wr](null), l[Wr](0), l[Wr](0), l[Wr](0), l.push(0));
        return d._x = s, d._y = e, d._width = r - s + 1, d._height = n - e + 1, d._iz = new KM(s, e, d._width, d._height), d._pixelSize = d._width * d._height, d
    }

    function ke(t, i, e, n, s) {
        if (s = 1 | s, !s || 1 > s) {
            var r = t[e];
            return r ? r[n] : !1
        }
        var h = n - s, a = e - s;
        0 > h && (h = 0), 0 > a && (a = 0);
        var o = e + s, _ = n + s;
        for (o > i.width && (o = i[ka]), _ > i.height && (_ = i.height); o > a;) {
            for (; _ > h;) {
                if (t[a][h])return !0;
                h++
            }
            a++
        }
        return !1
    }

    function Se(t) {
        if (Oh == t[0]) {
            if (t = t[oo](1), 3 == t.length)t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]; else if (6 != t.length)return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf(xo), e = t.indexOf(Th);
            if (0 > i || i > e)return;
            if (t = t[oo](i + 1, e), t = t.split(xh), t.length < 3)return;
            var n = parseInt(t[0]), s = parseInt(t[1]), r = parseInt(t[2]), h = 3 == t.length ? 255 : parseInt(t[3]);
            return [n, s, r, h]
        }
    }

    function Ie(t, i, e) {
        return e || (e = zM.BLEND_MODE), e == UD.BLEND_MODE_MULTIPLY ? t * i : e == UD[To] ? Math[Ha](t, i) : e == UD[wo] ? 1 - (1 - i) / t : e == UD[Oo] ? t + i - 1 : e == UD.BLEND_MODE_LIGHTEN ? Math.max(t, i) : e == UD[ko] ? t + i - t * i : i
    }

    function Ae(t, i, e) {
        var n = Se(i), s = t.g[Qa](0, 0, t.width, t.height), r = s.data;
        if (e instanceof Function)r = e(t, r, n) || r; else {
            var h = n[0] / 255, a = n[1] / 255, o = n[2] / 255;
            if (e == UD.BLEND_MODE_GRAY)for (var _ = 0, f = r.length; f > _; _ += 4) {
                var c = 77 * r[_] + 151 * r[_ + 1] + 28 * r[_ + 2] >> 8;
                r[_] = c * h | 0, r[_ + 1] = c * a | 0, r[_ + 2] = c * o | 0
            } else for (var _ = 0, f = r[jr]; f > _; _ += 4)r[_] = 255 * Ie(h, r[_] / 255, e) | 0, r[_ + 1] = 255 * Ie(a, r[_ + 1] / 255, e) | 0, r[_ + 2] = 255 * Ie(o, r[_ + 2] / 255, e) | 0
        }
        var t = Bi(t.width, t.height);
        return t.g.putImageData(s, 0, 0), t
    }

    function Le(t, i, e, n) {
        return 1 > e && (e = 1), Ce(t - e, i - e, 2 * e, 2 * e, n)
    }

    function Ce(t, i, e, n, s) {
        e = Math[Za](e) || 1, n = Math.round(n) || 1;
        var r = Fi(e, n);
        r.setTransform(1, 0, 0, 1, -t, -i), s.draw(r);
        for (var h = r.getImageData(0, 0, e, n).data, a = h[jr] / 4; a-- > 0;)if (h[4 * a - 1] > SP)return !0;
        return !1
    }

    function Re(t, i, e, n, s, r) {
        t -= s.$x, i -= s.$y;
        var h = s._fc[So](t, i, e, n);
        if (!h)return !1;
        t = h.x * r, i = h.y * r, e = h[ka] * r, n = h.height * r, e = Math[Za](e) || 1, n = Math.round(n) || 1;
        var a = Fi(), o = a[Ra];
        o[ka] < e || o[Sa] < n ? (o.width = e, o[Sa] = n) : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, e, n)), a.setTransform(1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), a[ha](r, r), s._je(a, 1);
        for (var _ = a[Qa](0, 0, e, n).data, f = _[jr] / 4; f-- > 0;)if (_[4 * f - 1] > SP)return !0;
        return !1
    }

    function Me(t, i, e, n, s, r, h, a, o) {
        if (hi(t, i, e, n, a, o))return null;
        var _, f, c, u = new kP(mP, [t + e - s, i]), d = new kP(xP, [t + e, i, t + e, i + r]), l = new kP(mP, [t + e, i + n - r]), v = new kP(xP, [t + e, i + n, t + e - s, i + n]), b = new kP(mP, [t + s, i + n]), g = new kP(xP, [t, i + n, t, i + n - r]), y = new kP(mP, [t, i + r]), p = new kP(xP, [t, i, t + s, i]), E = (new kP(OP), [u, d, l, v, b, g, y, p]), m = new KM(t + s, i + r, e - s - s, n - r - r);
        t > a ? (_ = tD, c = 5) : a > t + e ? (_ = eD, c = 1) : (_ = iD, c = 0), i > o ? (f = nD, _ == tD && (c = 7)) : o > i + n ? (f = rD, _ == eD ? c = 3 : _ == iD && (c = 4)) : (f = sD, _ == tD ? c = 6 : _ == eD && (c = 2));
        var x = $e(c, t, i, e, n, s, r, h, a, o, m), T = x[0], w = x[1], O = new IP, k = O._fb;
        k.push(new kP(EP, [T.x, T.y])), k.push(new kP(mP, [a, o])), k[Wr](new kP(mP, [w.x, w.y])), w._m1 && (k[Wr](w._m1), w._m1NO++);
        for (var S = w._m1NO % 8, I = T._m1NO; k.push(E[S]), ++S, S %= 8, S != I;);
        return T._m1 && k[Wr](T._m1), O.closePath(), O
    }

    function De(t, i, n, s, r, h, a, o, _, f, c, u, d, l) {
        var v = new VM(u, d, n, s), b = new VM(i[0], i[1], i[4], i[5]), g = b._3t(v, c), y = g[0], p = g[1];
        if (y._rest !== e) {
            y._m1NO = (t - 1) % 8, p._m1NO = (t + 1) % 8;
            var E = y._rest;
            7 == t ? (y.y = h + f + Math[Ha](l[Sa], E), p.x = r + _ + Math.min(l[ka], E)) : 5 == t ? (y.x = r + _ + Math.min(l[ka], E), p.y = h + o - f - Math.min(l.height, E)) : 3 == t ? (y.y = h + o - f - Math[Ha](l.height, E), p.x = r + a - _ - Math[Ha](l[ka], E)) : 1 == t && (y.x = r + a - _ - Math[Ha](l[ka], E), p.y = h + f + Math.min(l.height, E))
        } else {
            v._mo(v._n2, v._n3, y.x, y.y), y = v._$j(i), v._mo(v._n2, v._n3, p.x, p.y), p = v._$j(i);
            var m = Fe(i, [y, p]), x = m[0], T = m[2];
            y._m1NO = t, p._m1NO = t, y._m1 = new kP(xP, x.slice(2)), p._m1 = new kP(xP, T[Yr](2))
        }
        return [y, p]
    }

    function Pe(t, i, e, n, s, r, h, a, o, _) {
        var f, c;
        if (o - a >= i + r)f = {y: e, x: o - a}, f._m1NO = 0; else {
            f = {y: e + h, x: Math.max(i, o - a)};
            var u = [i, e + h, i, e, i + r, e], d = new VM(o, _, f.x, f.y);
            if (f = d._$j(u)) {
                A(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Fe(u, [f]);
                l = l[0], l && (f._m1 = new kP(xP, l.slice(2))), f._m1NO = 7
            } else f = {y: e, x: i + r}, f._m1NO = 0
        }
        if (i + n - r >= o + a)c = {y: e, x: o + a}, c._m1NO = 0; else {
            c = {y: e + h, x: Math[Ha](i + n, o + a)};
            var v = [i + n - r, e, i + n, e, i + n, e + h], d = new VM(o, _, c.x, c.y);
            if (c = d._$j(v)) {
                A(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Fe(v, [c]);
                l && l[l.length - 1] && (c._m1 = new kP(xP, l[l[jr] - 1][Yr](2))), c._m1NO = 1
            } else c = {y: e, x: i + n - r}, c._m1NO = 0
        }
        return [f, c]
    }

    function Ne(t, i, e, n, s, r, h, a, o, _) {
        var f, c;
        if (_ - a >= e + h)f = {x: i + n, y: _ - a}, f._m1NO = 2; else {
            f = {x: i + n - r, y: Math[za](e, _ - a)};
            var u = [i + n - r, e, i + n, e, i + n, e + h], d = new VM(o, _, f.x, f.y);
            if (f = d._$j(u)) {
                A(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Fe(u, [f]);
                l = l[0], l && (f._m1 = new kP(xP, l.slice(2))), f._m1NO = 1
            } else f = {x: i + n, y: e + h}, f._m1NO = 2
        }
        if (e + s - h >= _ + a)c = {x: i + n, y: _ + a}, c._m1NO = 2; else {
            c = {x: i + n - r, y: Math.min(e + s, _ + a)};
            var v = [i + n, e + s - h, i + n, e + s, i + n - r, e + s], d = new VM(o, _, c.x, c.y);
            if (c = d._$j(v)) {
                A(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Fe(v, [c]);
                l[1] && (c._m1 = new kP(xP, l[1].slice(2))), c._m1NO = 3
            } else c = {x: i + n, y: e + s - h}, c._m1NO = 2
        }
        return [f, c]
    }

    function je(t, i, e, n, s, r, h, a, o, _) {
        var f, c;
        if (o - a >= i + r)c = {y: e + s, x: o - a}, c._m1NO = 4; else {
            c = {y: e + s - h, x: Math.max(i, o - a)};
            var u = [i + r, e + s, i, e + s, i, e + s - h], d = new VM(o, _, c.x, c.y);
            if (c = d._$j(u)) {
                A(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Fe(u, [c]);
                l = l[l.length - 1], l && (c._m1 = new kP(xP, l[Yr](2))), c._m1NO = 5
            } else c = {y: e + s, x: i + r}, c._m1NO = 4
        }
        if (i + n - r >= o + a)f = {y: e + s, x: o + a}, f._m1NO = 4; else {
            f = {y: e + s - h, x: Math.min(i + n, o + a)};
            var v = [i + n, e + s - h, i + n, e + s, i + n - r, e + s], d = new VM(o, _, f.x, f.y);
            if (f = d._$j(v)) {
                A(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Fe(v, [f]);
                l[0] && (f._m1 = new kP(xP, l[0].slice(2))), f._m1NO = 3
            } else f = {y: e + s, x: i + n - r}, f._m1NO = 4
        }
        return [f, c]
    }

    function Be(t, i, e, n, s, r, h, a, o, _) {
        var f, c;
        if (_ - a >= e + h)c = {x: i, y: _ - a}, c._m1NO = 6; else {
            c = {x: i + r, y: Math.max(e, _ - a)};
            var u = [i, e + h, i, e, i + r, e], d = new VM(o, _, c.x, c.y);
            if (c = d._$j(u)) {
                A(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Fe(u, [c]);
                l = l[l.length - 1], l && (c._m1 = new kP(xP, l[Yr](2)))
            } else c = {x: i, y: e + h};
            c._m1NO = 7
        }
        if (e + s - h >= _ + a)f = {x: i, y: _ + a}, f._m1NO = 6; else {
            f = {x: i + r, y: Math[Ha](e + s, _ + a)};
            var v = [i + r, e + s, i, e + s, i, e + s - h], d = new VM(o, _, f.x, f.y);
            if (f = d._$j(v)) {
                A(f) && (f = f[0].t > f[1].t ? f[0] : f[1]);
                var l = Fe(v, [f]);
                l[0] && (f._m1 = new kP(xP, l[0].slice(2))), f._m1NO = 5
            } else f = {x: i, y: e + s - h}, f._m1NO = 6
        }
        return [f, c]
    }

    function $e(t, i, e, n, s, r, h, a, o, _, f) {
        var c = a / 2;
        switch (t) {
            case 7:
                var u = [i, e + h, i, e, i + r, e], d = i + r, l = e + h;
                return De(t, u, d, l, i, e, n, s, r, h, a, o, _, f);
            case 5:
                return u = [i + r, e + s, i, e + s, i, e + s - h], d = i + r, l = e + s - h, De(t, u, d, l, i, e, n, s, r, h, a, o, _, f);
            case 3:
                return u = [i + n, e + s - h, i + n, e + s, i + n - r, e + s], d = i + n - r, l = e + s - h, De(t, u, d, l, i, e, n, s, r, h, a, o, _, f);
            case 1:
                return u = [i + n - r, e, i + n, e, i + n, e + h], d = i + n - r, l = e + h, De(t, u, d, l, i, e, n, s, r, h, a, o, _, f);
            case 0:
                return Pe(t, i, e, n, s, r, h, c, o, _, f);
            case 2:
                return Ne(t, i, e, n, s, r, h, c, o, _, f);
            case 4:
                return je(t, i, e, n, s, r, h, c, o, _, f);
            case 6:
                return Be(t, i, e, n, s, r, h, c, o, _, f)
        }
    }

    function Fe(t, i) {
        for (var n, s, r, h, a, o, _ = t[0], f = t[1], c = t[2], u = t[3], d = t[4], l = t[5], v = [], b = 0; b < i.length; b++)a = i[b], o = a.t, 0 != o && 1 != o ? (n = _ + (c - _) * o, s = f + (u - f) * o, r = c + (d - c) * o, h = u + (l - u) * o, v[Wr]([_, f, n, s, a.x, a.y]), _ = a.x, f = a.y, c = r, u = h) : v[Wr](null);
        return r !== e && v[Wr]([a.x, a.y, r, h, d, l]), v
    }

    function Ge(t) {
        return this.$layoutByAnchorPoint && this._n7k && (t.x -= this._n7k.x, t.y -= this._n7k.y), this.$rotate && Ri(t, this[Io]), t.x += this[Ao] || 0, t.y += this[Lo] || 0, this.$rotatable && this[Co] ? Ri(t, this[Co]) : t
    }

    function ze(t) {
        return this.$rotatable && this.$_hostRotate && Ri(t, -this[Co]), t.x -= this[Ao] || 0, t.y -= this[Lo] || 0, this.$rotate && Ri(t, -this.$rotate), this[Ro] && this._n7k && (t.x += this._n7k.x, t.y += this._n7k.y), t
    }

    function Ye() {
        var t = this.$invalidateSize;
        this.$invalidateSize && (this[Mo] = !1, this.$invalidateAnchorPoint = !0, this._8l[Do](this._iz), this.$padding && this._8l[Po](this.$padding), this.$border && this._8l.grow(this.$border));
        var i = this._$z();
        if (i)var e = this[No] && this[jo];
        return this.$invalidateAnchorPoint && this.$layoutByAnchorPoint && (this[Bo] = !1, e && (t = !0), this._n7k = oi(this.$anchorPosition, this._8l.width, this._8l[Sa]), this._n7k.x += this._8l.x, this._n7k.y += this._8l.y), i ? (t && (this._n9ackgroundGradientInvalidateFlag = !0, He[Fr](this, e)), this._n9ackgroundGradientInvalidateFlag && (this._n9ackgroundGradientInvalidateFlag = !1, this._n9ackgroundGradient = this[$o] && this._mbShape && this._mbShape[Fo] ? cP.prototype.generatorGradient[Fr](this.backgroundGradient, this._mbShape.bounds) : null), t) : (this.__mdPointer = !1, t)
    }

    function He(t) {
        var i = this._8l.x + this[Go] / 2, e = this._8l.y + this.$border / 2, n = this._8l.width - this[Go], s = this._8l[Sa] - this[Go], r = 0, h = 0;
        if (this[zo] && (k(this.$borderRadius) ? r = h = this[zo] : (r = this[zo].x || 0, h = this[zo].y || 0), r = Math.min(r, n / 2), h = Math[Ha](h, s / 2)), t && (this._pointerX = this._n7k.x - this.$offsetX + this.$pointerX, this._pointerY = this._n7k.y - this.$offsetY + this.$pointerY, !this._8l[Va](this._pointerX, this._pointerY))) {
            var a = new LP(i, e, n, s, r, h, this[jo], this._pointerX, this._pointerY);
            return this._mbShape = a._m1, this._mbShape.bounds.set(i, e, n, s), void(this.__mdPointer = !0)
        }
        this._mbShape && this._mbShape.clear(), this._mbShape = jN.getRect(i, e, n, s, r, h, this._mbShape), this._mbShape[Fo].set(i, e, n, s)
    }

    function qe(t, i, e, n) {
        return n && (t[ka] < 0 || t[Sa] < 0) ? (t.x = i, t.y = e, void(t.width = t[Sa] = 0)) : (i < t.x ? (t.width += t.x - i, t.x = i) : i > t.x + t.width && (t[ka] = i - t.x), void(e < t.y ? (t.height += t.y - e, t.y = e) : e > t.y + t.height && (t[Sa] = e - t.y)))
    }

    function We(t, i, n) {
        var s, r = t.position, h = t[Yo] === e ? this.layoutByPath : t.layoutByPath;
        return this[Ho]instanceof IP && h ? (s = JD._n7r(r, this.$data, this.lineWidth, i, n), s.x *= this._jr, s.y *= this._jt) : (s = oi(r, this._8l[ka], this._8l[Sa]), s.x += this._8l.x, s.y += this._8l.y), Ge.call(this, s)
    }

    function Ue(t, i) {
        if (i)if (i._8l[qo]())t.$x = i.$x, t.$y = i.$y; else {
            var e = We.call(i, t);
            t.$x = e.x, t.$y = e.y, t._hostRotate = e.rotate
        } else t.$x = 0, t.$y = 0;
        t[Wo] && MP.call(t)
    }

    function Xe(t) {
        if (t.lineDash === e) {
            var i, n;
            if (t[Uo])i = t[Xo], n = t[Uo]; else {
                var s;
                if (t[Vo] !== e)s = Vo; else {
                    if (t[Zo] === e)return !1;
                    s = Zo
                }
                n = function (t) {
                    this[s] = t
                }, i = function () {
                    return this[s]
                }
            }
            Z(t, Ko, {
                get: function () {
                    return i[Fr](this)
                }, set: function (t) {
                    n.call(this, t)
                }
            })
        }
        if (t.lineDashOffset === e) {
            var r;
            if (t[Jo] !== e)r = Jo; else {
                if (t[Qo] === e)return;
                r = Qo
            }
            Z(t, t_, {
                get: function () {
                    return this[r]
                }, set: function (t) {
                    this[r] = t
                }
            })
        }
    }

    function Ve(t, i, e, n, s) {
        var r, h, a, o, _, f, c, u, d = function (t) {
            return function (i) {
                t(i)
            }
        }, l = function () {
            h = null, a = null, o = _, _ = null, f = null
        }, v = function (t) {
            r = t, c || (c = Bi()), c.width = r.width, c[Sa] = r.height, i[ka] = r.width, i.height = r[Sa]
        }, b = function (t) {
            g(), l(), h = t.transparencyGiven ? t[i_] : null, a = 10 * t.delayTime, _ = t.disposalMethod
        }, g = function () {
            if (f) {
                var t = f.getImageData(0, 0, r.width, r.height), e = {
                    data: t,
                    _pixels: Oe(t.data, r.width, r[Sa]),
                    delay: a
                };
                s.call(i, e)
            }
        }, y = function (t) {
            f || (f = c[ja](Ba));
            var i = t.lctFlag ? t.lct : r[e_], e = f.getImageData(t.leftPos, t[n_], t.width, t.height);
            t[s_].forEach(function (t, n) {
                h !== t ? (e.data[4 * n + 0] = i[t][0], e[to][4 * n + 1] = i[t][1], e[to][4 * n + 2] = i[t][2], e.data[4 * n + 3] = 255) : (2 === o || 3 === o) && (e[to][4 * n + 3] = 0)
            }), f.clearRect(0, 0, r.width, r[Sa]), f.putImageData(e, t.leftPos, t[n_])
        }, p = function () {
        }, E = {
            hdr: d(v), gce: d(b), com: d(p), app: {NETSCAPE: d(p)}, img: d(y, !0), eof: function () {
                g(), e.call(i)
            }
        }, m = new XMLHttpRequest;
        SM || m[r_]("text/plain; charset=x-user-defined"), m.onload = function () {
            u = new BP(m[h_]);
            try {
                FP(u, E)
            } catch (t) {
                n[Fr](i, pa)
            }
        }, m[a_] = function () {
            n[Fr](i, o_)
        }, m[xa](Ta, t, !0), m.send()
    }

    function Ze(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 51, 49, 51, 51, 55, 51, 51, 55, 50, 49, 56, 10, 10, 48, 10];
        return i[__](function (e, n) {
            i[n] = t(e)
        }), i[f_]("")
    }

    function Ke(t, i) {
        try {
            if (null == t || t[jr] < 8)return;
            if (null == i || i.length <= 0)return;
            for (var e = "", n = 0; n < i.length; n++)e += i[c_](n).toString();
            var s = Math[ah](e.length / 5), r = parseInt(e[u_](s) + e[u_](2 * s) + e[u_](3 * s) + e.charAt(4 * s) + e[u_](5 * s), 10), h = Math[Za](i.length / 2), a = Math.pow(2, 31) - 1, o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t[oo](0, t.length - 8), e += o; e.length > 10;)e = (parseInt(e[oo](0, 10), 10) + parseInt(e[oo](10, e[jr]), 10)).toString();
            e = (r * e + h) % a;
            for (var _ = "", f = "", n = 0; n < t[jr]; n += 2)_ = parseInt(parseInt(t.substring(n, n + 2), 16) ^ Math.floor(e / a * 255), 10), f += String.fromCharCode(_), e = (r * e + h) % a;
            return 0 | f[0] ? gN = WP[d_ + VP + l_](f) : null
        } catch (c) {
        }
    }

    function Je() {
        var t = zP;
        if (!t)return void(TN = !0);
        bN = t;
        var i;
        t = t.split(xh);
        for (var e = 0; e < t.length && (i = Ke(t[e], HP), !(i && i[Jr](Ga)[jr] >= 8));)1 == t[jr] && (i = Ke(t[e], v_)), e++;
        if (!i || i[Jr](Ga).length < 8)return EN = !0, "" === HP || HP == b_ + QP + g_ + tN + y_ || HP == p_ + JP + E_ ? (mN = SN, TN = !1, ON = !1, void(vN = !1)) : (mN = SN, void(TN = !0));
        vN = i[Jr](Ga);
        var n = vN[3];
        if (n != _B)return EN = !0, void(ON = !0);
        TN = !1, ON = !1;
        var s = vN[0];
        (m_ == s || x_ == s) && (EN = !1);
        var r = vN[5];
        xN = r;
        var h = vN[6];
        mN = h
    }

    function Qe() {
        var t = bN;
        if (t) {
            var i;
            t = t[Jr](xh);
            for (var e = 0; e < t[jr] && (i = IN(t[e], HP), !(i && i[Jr](Ga)[jr] >= 8));)1 == t.length && (i = IN(t[e], v_)), e++;
            if (i.split(Ga).length >= 8)return void(wN = !1)
        }
        return "" === HP || HP == b_ + QP + g_ + tN + y_ || HP == p_ + JP + E_ ? void(wN = !1) : void(wN = !0)
    }

    function tn() {
        if (EN) {
            var t = sr[rN + no]._je, i = pN;
            sr[rN + no]._je = function () {
                t.apply(this, arguments), i[Fr](this._n8e, this.g)
            };
            var e = _s[rN + no]._fk;
            _s[rN + no]._fk = function (t) {
                e.apply(this, arguments), i.call(this, t)
            }
        }
    }

    function en() {
        if (xN !== !0 && xN) {
            var t = xN[Jr](Lh);
            if (3 != t.length)return void($N.prototype._je = null);
            var i = parseInt(t[0], 10), e = parseInt(t[1], 10), n = parseInt(t[2], 10), s = 3, r = (365.2425 * (i - 2e3 + 10 * s) + (e - 1) * s * 10 + n) * s * 8 * s * 1200 * 1e3;
            YP > r && ($N[fh]._je = null)
        }
    }

    function nn() {
        var t = 0 | mN;
        t && (HM[rN + no]._kl = function (i, n) {
            var s = i.id;
            return s === e || this.containsById(s) ? !1 : this._ja.length > t ? !1 : (y(this._ja, i, n), this._lo[s] = i, i)
        })
    }

    function sn() {
        TN && (HM[rN + no]._kl = HM[rN + no]._fo)
    }

    function rn() {
        wN && (_s[rN + no]._jq = null)
    }

    function hn() {
        kN && (fs[fh]._j7 = fs.prototype._5x)
    }

    function an() {
        ON && (hj[rN + no]._jq = null)
    }

    function on() {
        vN === e && (_s[rN + no]._jq = null)
    }

    function _n(t) {
        return t.parent ? (t = t.parent, t._e3 ? t._e3 : t._gq === !1 ? t : null) : null
    }

    function fn(t, i, e) {
        if (e = e || i.toAgent, e == t)return !1;
        var n = t.getEdgeBundle(e);
        return n || (n = new Jj(t, e), t._linkedNodes[e.id] = n), n._i9(i, t)
    }

    function cn(t, i, e) {
        if (e = e || i[T_], e == t)return !1;
        var n = t.getEdgeBundle(e);
        return n ? n._n8g(i, t) : void 0
    }

    function un(t, i, n) {
        return n === e && (n = i.toAgent), n != t ? (t._8a || (t._8a = new HM), t._8a[qa](i) === !1 ? !1 : void t._9j++) : void 0
    }

    function dn(t, i, e) {
        return t._8a && t._8a.remove(i) !== !1 ? (t._9j--, void cn(t, i, e)) : !1
    }

    function ln(t, i) {
        return i.fromAgent != t ? (t._9d || (t._9d = new HM), t._9d.add(i) === !1 ? !1 : void t._n7m++) : void 0
    }

    function vn(t, i) {
        return t._9d && t._9d[Hr](i) !== !1 ? (t._n7m--, void cn(i.fromAgent, i, t)) : !1
    }

    function bn(t, i) {
        if (i === e && (i = t instanceof DN), i) {
            if (t[w_]())return null;
            var n = bn(t.from, !1);
            if (t[O_]())return n;
            for (var s = bn(t.to, !1); null != n && null != s;) {
                if (n == s)return n;
                if (n[k_](s))return s;
                if (s.isDescendantOf(n))return n;
                n = bn(n, !1), s = bn(s, !1)
            }
            return null
        }
        for (var r = t.parent; null != r;) {
            if (r._i5())return r;
            r = r[S_]
        }
        return null
    }

    function gn(t, i, e) {
        t._i5() && t[Br]() && t.children[__](function (t) {
            t instanceof PN && i[qa](t) && gn(t, i, e)
        }, this), t.hasFollowers() && t._e5[__](function (t) {
            (null == e || e[I_](t)) && i.add(t) && gn(t, i, e)
        })
    }

    function yn(t, i) {
        i.parent ? i[S_].setChildIndex(i, i[S_][A_] - 1) : t[L_][C_](i, t[L_][jr] - 1)
    }

    function pn(t, i) {
        if (i instanceof DN)return void(i[w_]() || mn(t, i));
        for (yn(t, i); i = i[S_];)yn(t, i)
    }

    function En(t, i) {
        if (i instanceof DN)return void(i.isInvalid() || mn(t, i));
        for (yn(t, i); i = i[S_];)yn(t, i)
    }

    function mn(t, i) {
        var e = i.fromAgent;
        if (i[O_]())yn(t, e); else {
            var n = i.toAgent;
            yn(t, e), yn(t, n)
        }
    }

    function xn(t, i) {
        return t._9j++, t._fa ? (i._io = t._hl, t._hl._ip = i, void(t._hl = i)) : (t._fa = i, void(t._hl = i))
    }

    function Tn(t, i) {
        t._9j--, t._hl == i && (t._hl = i._io), i._io ? i._io._ip = i._ip : t._fa = i._ip, i._ip && (i._ip._io = i._io), i._io = null, i._ip = null, cn(t, i, i[R_])
    }

    function wn(t, i) {
        return t._n7m++, t._hh ? (i._k5 = t._jg, t._jg._k3 = i, void(t._jg = i)) : (t._hh = i, void(t._jg = i))
    }

    function On(t, i) {
        t._n7m--, t._jg == i && (t._jg = i._k5), i._k5 ? i._k5._k3 = i._k3 : t._hh = i._k3, i._k3 && (i._k3._k5 = i._k5), i._k5 = null, i._k3 = null
    }

    function kn(t, i) {
        return i = i || new HM, t.forEachEdge(function (t) {
            i[qa]({id: t.id, edge: t, fromAgent: t[M_]._e3, toAgent: t[R_]._e3})
        }), t.forEachChild(function (t) {
            t instanceof PN && kn(t, i)
        }), i
    }

    function Sn(t, i, e) {
        return An(t, i, e) === !1 ? !1 : In(t, i, e)
    }

    function In(t, i, e) {
        if (t._fa)for (var n = t._fa; n;) {
            if (i.call(e, n) === !1)return !1;
            n = n._ip
        }
    }

    function An(t, i, e) {
        if (t._hh)for (var n = t._hh; n;) {
            if (i.call(e, n) === !1)return !1;
            n = n._k3
        }
    }

    function Ln(t, i, n, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === e ? h : a || 0, h = Math.min(h, s / 2), a = Math[Ha](a, r / 2), t[D_](i + h, n), t[P_](i + s - h, n), t.quadTo(i + s, n, i + s, n + a), t[P_](i + s, n + r - a), t.quadTo(i + s, n + r, i + s - h, n + r), t[P_](i + h, n + r), t.quadTo(i, n + r, i, n + r - a), t[P_](i, n + a), t.quadTo(i, n, i + h, n), t[N_](), t) : (t.moveTo(i, n), t[P_](i + s, n), t[P_](i + s, n + r), t.lineTo(i, n + r), t[N_](), t)
    }

    function Cn(t, i) {
        var e = i.r || 1, n = i.cx || 0, s = i.cy || 0, r = e * Math.tan(Math.PI / 8), h = e * Math[Dh](Math.PI / 4);
        t.moveTo(n + e, s), t.quadTo(n + e, s + r, n + h, s + h), t[j_](n + r, s + e, n, s + e), t.quadTo(n - r, s + e, n - h, s + h), t.quadTo(n - e, s + r, n - e, s), t.quadTo(n - e, s - r, n - h, s - h), t.quadTo(n - r, s - e, n, s - e), t[j_](n + r, s - e, n + h, s - h), t.quadTo(n + e, s - r, n + e, s)
    }

    function Rn(t, i, e, n, s) {
        i instanceof ee && (n = i[ka], s = i.height, e = i.cy - s / 2, i = i.cx - n / 2);
        var r = .5522848, h = n / 2 * r, a = s / 2 * r, o = i + n, _ = e + s, f = i + n / 2, c = e + s / 2;
        return t.moveTo(i, c), t.curveTo(i, c - a, f - h, e, f, e), t.curveTo(f + h, e, o, c - a, o, c), t.curveTo(o, c + a, f + h, _, f, _), t[B_](f - h, _, i, c + a, i, c), t
    }

    function Mn(t, i, e, n, s) {
        var r = 2 * n, h = 2 * s, a = i + n / 2, o = e + s / 2;
        return t[D_](a - r / 4, o - h / 12), t[P_](i + .306 * n, e + .579 * s), t.lineTo(a - r / 6, o + h / 4), t.lineTo(i + n / 2, e + .733 * s), t.lineTo(a + r / 6, o + h / 4), t[P_](i + .693 * n, e + .579 * s), t[P_](a + r / 4, o - h / 12), t.lineTo(i + .611 * n, e + .332 * s), t.lineTo(a + 0, o - h / 4), t.lineTo(i + .388 * n, e + .332 * s), t[N_](), t
    }

    function Dn(t, i, e, n, s) {
        return t[D_](i, e), t[P_](i + n, e + s / 2), t[P_](i, e + s), t.closePath(), t
    }

    function Pn(t, i, e, n, s) {
        return t[D_](i, e + s / 2), t[P_](i + n / 2, e), t[P_](i + n, e + s / 2), t.lineTo(i + n / 2, e + s), t[N_](), t
    }

    function Nn(t, i, e, n, s, r) {
        return t.moveTo(i, e), t.lineTo(i + n, e + s / 2), t[P_](i, e + s), r || (t.lineTo(i + .25 * n, e + s / 2), t.closePath()), t
    }

    function jn(t, i, e, n, s) {
        if (!t || 3 > t)throw new Error("edge number must greater than 2");
        t = 0 | t, n = n || 50, s = s || 0, i = i || 0, e = e || 0;
        for (var r, h, a = 0, o = 2 * Math.PI / t, _ = new IP; t > a;)r = i + n * Math[ro](s), h = e + n * Math[Dh](s), a ? _[P_](r, h) : _[D_](r, h), ++a, s += o;
        return _[N_](), _
    }

    function Bn() {
        var t = new IP;
        return t[D_](75, 40), t[B_](75, 37, 70, 25, 50, 25), t[B_](20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t[B_](110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t
    }

    function $n() {
        var t = new IP;
        return t.moveTo(20, 0), t[P_](80, 0), t[P_](100, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function Fn() {
        var t = new IP;
        return t.moveTo(100, 0), t.lineTo(100, 80), t.lineTo(0, 100), t[P_](0, 20), t.closePath(), t
    }

    function Gn() {
        var t = new IP;
        return t[D_](20, 0), t[P_](100, 0), t.lineTo(80, 100), t.lineTo(0, 100), t.closePath(), t
    }

    function zn() {
        var t = new IP;
        return t.moveTo(43, 23), t.lineTo(28, 10), t.lineTo(37, 2), t[P_](63, 31), t[P_](37, 59), t.lineTo(28, 52), t[P_](44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t.closePath(), t
    }

    function Yn() {
        var t = new IP;
        return t.moveTo(1, 8), t[P_](7, 2), t.lineTo(32, 26), t.lineTo(7, 50), t.lineTo(1, 44), t[P_](18, 26), t.closePath(), t[D_](27, 8), t.lineTo(33, 2), t[P_](57, 26), t.lineTo(33, 50), t.lineTo(27, 44), t[P_](44, 26), t[N_](), t
    }

    function Hn() {
        var t = new IP;
        return t[D_](0, 15), t.lineTo(23, 15), t.lineTo(23, 1), t.lineTo(47, 23), t.lineTo(23, 43), t[P_](23, 29), t.lineTo(0, 29), t[N_](), t
    }

    function qn() {
        var t = new IP;
        return t.moveTo(0, 21), t[P_](30, 21), t[P_](19, 0), t.lineTo(25, 0), t.lineTo(47, 25), t[P_](25, 48), t.lineTo(19, 48), t[P_](30, 28), t.lineTo(0, 28), t[N_](), t
    }

    function Wn() {
        var t = new IP;
        return t.moveTo(0, 0), t.lineTo(34, 24), t.lineTo(0, 48), t[P_](14, 24), t[N_](), t
    }

    function Un() {
        var t = new IP;
        return t[D_](20, 0), t.lineTo(34, 14), t.lineTo(20, 28), t.lineTo(22, 18), t[P_](1, 25), t[P_](10, 14), t.lineTo(1, 3), t[P_](22, 10), t[N_](), t
    }

    function Xn() {
        var t = new IP;
        return t[D_](4, 18), t.lineTo(45, 18), t[P_](37, 4), t[P_](83, 25), t[P_](37, 46), t[P_](45, 32), t.lineTo(4, 32), t.closePath(), t
    }

    function Vn() {
        var t = new IP;
        return t.moveTo(17, 11), t.lineTo(27, 11), t.lineTo(42, 27), t.lineTo(27, 42), t[P_](17, 42), t[P_](28, 30), t[P_](4, 30), t[P_](4, 23), t[P_](28, 23), t[N_](), t
    }

    function Zn() {
        jN[$_](UD[F_], Rn(new IP, 0, 0, 100, 100)), jN.register(UD[G_], Ln(new IP, 0, 0, 100, 100)), jN.register(UD.SHAPE_ROUNDRECT, Ln(new IP, 0, 0, 100, 100, 20, 20)), jN.register(UD[z_], Mn(new IP, 0, 0, 100, 100)), jN.register(UD.SHAPE_TRIANGLE, Dn(new IP, 0, 0, 100, 100)), jN[$_](UD.SHAPE_PENTAGON, jn(5)), jN[$_](UD.SHAPE_HEXAGON, jn(6)), jN.register(UD[Y_], Pn(new IP, 0, 0, 100, 100)), jN[$_](UD.SHAPE_HEART, Bn()), jN.register(UD[H_], $n()), jN[$_](UD[q_], Fn()), jN.register(UD.SHAPE_PARALLELOGRAM, Gn());
        var t = new IP;
        t.moveTo(20, 0), t[P_](40, 0), t.lineTo(40, 20), t[P_](60, 20), t[P_](60, 40), t[P_](40, 40), t.lineTo(40, 60), t[P_](20, 60), t[P_](20, 40), t.lineTo(0, 40), t.lineTo(0, 20), t.lineTo(20, 20), t[N_](), jN.register(UD.SHAPE_CROSS, t), jN[$_](UD.SHAPE_ARROW_STANDARD, Nn(new IP, 0, 0, 100, 100)), jN.register(UD.SHAPE_ARROW_1, zn()), jN[$_](UD[W_], Yn()), jN.register(UD[U_], Hn()), jN.register(UD.SHAPE_ARROW_4, qn()), jN.register(UD.SHAPE_ARROW_5, Wn()), jN.register(UD[X_], Un()), jN[$_](UD.SHAPE_ARROW_7, Xn()), jN.register(UD[V_], Vn()), jN.register(UD.SHAPE_ARROW_OPEN, Nn(new IP, 0, 0, 100, 100, !0))
    }

    function Kn() {
        j(this, Kn, arguments), this.busLayout = !0
    }

    function Jn() {
        j(this, Jn), this._14 = new vD
    }

    function Qn() {
        if (this._gq === !0) {
            var t = this._8a, i = this._9d;
            if (t)for (t = t._ja; t[jr];) {
                var e = t[0];
                dn(this, e, e[T_])
            }
            if (i)for (i = i._ja; i[jr];) {
                var e = i[0];
                vn(this, e, e.fromAgent)
            }
            return void this[Z_](function (t) {
                t._i5() && Qn.call(t)
            })
        }
        var n = kn(this);
        n[__](function (t) {
            t = t[K_];
            var i = t.$from, e = t.$to, n = i[k_](this), s = e[k_](this);
            n && !s ? (un(this, t), fn(this, t)) : s && !n && (ln(this, t), fn(t.fromAgent, t, this))
        }, this)
    }

    function ts() {
        j(this, ts, arguments), this[J_] = null
    }

    function is(t, i, e, n) {
        return t[i] = e, n ? {
            get: function () {
                return this[i]
            }, set: function (t) {
                if (t !== this[i]) {
                    this[i] = t, !this._n7g, this._1s = !0;
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
            r[Q_] && r.validateFlags[__](function (t, i, e) {
                e[i] = tf + t, n[t] = !0
            }), e[s] = is(t, gh + s, r[ef], r.validateFlags)
        }
        for (var h in n)t[tf + h] = !0;
        Object.defineProperties(t, e)
    }

    function ns(t, i, e, n) {
        if (Array.isArray(i))for (var s = i[jr]; --s >= 0;)ns(t, i[s], e, n); else {
            var r = i.target;
            if (r) {
                if (r instanceof $N || (r = t[r]), !r)return
            } else r = t;
            if (n || (n = t[nf](i.property, e)), i[sf] && (r[i[sf]] = n), i.callback) {
                var h = i.callback;
                h instanceof Function || (h = t[h]), h instanceof Function && h[Fr](t, n, r)
            }
        }
    }

    function ss() {
        FN.forEach(function (t) {
            this[t] = {}
        }, this)
    }

    function rs(t, i, e, n) {
        return n == UD[rf] ? void(t[e] = i) : n == UD[hf] ? void t.set(e, i) : n == UD[af] ? void t[of](e, i) : !1
    }

    function hs() {
        j(this, hs, arguments)
    }

    function as() {
        j(this, as, arguments)
    }

    function os(t) {
        var i = Bi(!0);
        return Xe(i.g), i.onselectstart = function () {
            return !1
        }, t.appendChild(i), ui(i, nj), i
    }

    function _s(t) {
        this._mr = t, w(this._mr, _f), t[ff] = 0, this._jo = os(t), this[La] = this._jo[La] || 1, this._topCanvas = new sr(this, t), this._fe = [], this._n98 = new sj, this._j1 = new fs(this), this._mt = new HM;
        var i = this;
        this._mt._fo = function (t, e, n) {
            e.destroy();
            var s = e[cf];
            return e._hg && s && i._n98._mb(e.$x + e.uiBounds.x, e.$y + e[cf].y, e.uiBounds[ka], e.uiBounds.height), HM[fh]._fo.call(this, t, e, n)
        }, this._mt[Ia] = function () {
            return this[__](function (t) {
                t.destroy()
            }), HM[fh][Ia][Fr](this)
        }, this._n8k = [], this._8i = {}, this._8k = new KM, this._8x = [], this._n8i()
    }

    function fs(t) {
        this._n8e = t, this._j1 = new YM, this._j1.ratio = t[La], this._7m = new KM
    }

    function cs(t, i, e, n) {
        var s = us(t, i, e, n), r = [];
        if (bs(t))ds(s, i, e, r, n.getStyle(GN[uf])); else {
            ks(t, i, e, r, s, n);
            var h = ls(t, n), a = h ? ms(t, s, i, e, n.getStyle(GN.EDGE_SPLIT_PERCENT)) : n[df](GN.EDGE_SPLIT_VALUE);
            0 == a && (s = !s)
        }
        return r
    }

    function us(t, i, e) {
        if (null != t) {
            if (t == UD.EDGE_TYPE_ELBOW_HORIZONTAL || t == UD.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == UD[lf] || t == UD.EDGE_TYPE_EXTEND_LEFT || t == UD[vf])return !0;
            if (t == UD.EDGE_TYPE_ELBOW_VERTICAL || t == UD.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == UD.EDGE_TYPE_VERTICAL_HORIZONTAL || t == UD.EDGE_TYPE_EXTEND_TOP || t == UD.EDGE_TYPE_EXTEND_BOTTOM)return !1
        }
        var n = ps(i, e), s = Es(i, e);
        return n >= s
    }

    function ds(t, i, e, n, s) {
        t ? Cs(i, e, n, s) : Rs(i, e, n, s)
    }

    function ls(t, i) {
        return i[df](GN[bf])
    }

    function vs(t) {
        return null != t && (t == UD[gf] || t == UD[yf] || t == UD.EDGE_TYPE_EXTEND_BOTTOM || t == UD.EDGE_TYPE_EXTEND_RIGHT)
    }

    function bs(t) {
        return t && (t == UD.EDGE_TYPE_ELBOW || t == UD.EDGE_TYPE_ELBOW_HORIZONTAL || t == UD.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function gs(t, i, e, n, s) {
        if (t == UD.EDGE_TYPE_HORIZONTAL_VERTICAL || t == UD.EDGE_TYPE_VERTICAL_HORIZONTAL)return new UM(n.x + n.width / 2, n.y + n[Sa] / 2);
        var r;
        if (vs(t)) {
            var h = Math.min(e.y, n.y), a = Math[Ha](e.x, n.x), o = Math.max(e.bottom, n.bottom), _ = Math.max(e[Ph], n[Ph]);
            if (r = s.getStyle(GN[uf]), t == UD[gf])return new UM((a + _) / 2, h - r);
            if (t == UD.EDGE_TYPE_EXTEND_LEFT)return new UM(a - r, (h + o) / 2);
            if (t == UD.EDGE_TYPE_EXTEND_BOTTOM)return new UM((a + _) / 2, o + r);
            if (t == UD[vf])return new UM(_ + r, (h + o) / 2)
        }
        var f = ls(t, s);
        if (r = f ? ms(t, i, e, n, s[df](GN[pf])) : s[df](GN.EDGE_SPLIT_VALUE), r == Number[Ef] || r == Number[mf])return new UM(n.x + n[ka] / 2, n.y + n[Sa] / 2);
        if (0 == r)return new UM(e.x + e[ka] / 2, e.y + e[Sa] / 2);
        if (i) {
            var c = e.x + e[Ph] < n.x + n[Ph];
            return new UM(ws(c, r, e.x, e[ka]), e.y + e.height / 2)
        }
        var u = e.y + e.bottom < n.y + n[jh];
        return new UM(e.x + e.width / 2, ws(u, r, e.y, e.height))
    }

    function ys(t, i, e, n) {
        var s = Math[za](i, n) - Math.min(t, e);
        return s - (i - t + n - e)
    }

    function ps(t, i) {
        var e = Math.max(t.x + t.width, i.x + i[ka]) - Math.min(t.x, i.x);
        return e - t[ka] - i.width
    }

    function Es(t, i) {
        var e = Math.max(t.y + t[Sa], i.y + i[Sa]) - Math.min(t.y, i.y);
        return e - t.height - i.height
    }

    function ms(t, i, e, n, s) {
        var r = xs(s, i, e, n, null);
        return r * s
    }

    function xs(t, i, e, n) {
        return i ? Ts(t, e.x, e[Ph], n.x, n[Ph]) : Ts(t, e.y, e.bottom, n.y, n.bottom)
    }

    function Ts(t, i, e, n, s) {
        var r = ys(i, e, n, s), h = n + s > i + e;
        if (r > 0) {
            if (1 == t)return r + (s - n) / 2;
            if (t >= 0 && 1 > t)return r;
            if (0 > t)return h ? n - i : e - s
        }
        return Math[Nh](h && t > 0 || !h && 0 > t ? e - s : i - n)
    }

    function ws(t, i, e, n) {
        return t == i > 0 ? e + n + Math.abs(i) : e - Math[Nh](i)
    }

    function Os(t, i) {
        var e = t.length;
        if (!(3 > e)) {
            var n = i.getStyle(GN.EDGE_CORNER);
            if (n != UD[xf]) {
                var s = i.getStyle(GN[Tf]), r = 0, h = 0;
                s && (k(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
                for (var a, o, _, f, c = t[0], u = t[1], d = null, l = 2; e > l; l++) {
                    var v = t[l], b = u.x - c.x, g = u.y - c.y, E = v.x - u.x, m = v.y - u.y, x = !b || b > -KD && KD > b, T = !g || g > -KD && KD > g, w = !E || E > -KD && KD > E, O = !m || m > -KD && KD > m, S = T;
                    (x && O || T && w) && (S ? (a = Math.min(2 == l ? Math.abs(b) : Math[Nh](b) / 2, r), o = Math.min(l == e - 1 ? Math[Nh](m) : Math.abs(m) / 2, h), _ = new UM(u.x - (b > 0 ? a : -a), u.y), f = new UM(u.x, u.y + (m > 0 ? o : -o))) : (a = Math.min(l == e - 1 ? Math.abs(E) : Math[Nh](E) / 2, r), o = Math.min(2 == l ? Math.abs(g) : Math[Nh](g) / 2, h), _ = new UM(u.x, u.y - (g > 0 ? o : -o)), f = new UM(u.x + (E > 0 ? a : -a), u.y)), p(t, u), l--, e--, (_.x != c.x || _.y != c.y) && (y(t, _, l), l++, e++), n == UD[wf] ? (y(t, f, l), l++, e++) : n == UD[Of] && (y(t, [u, f], l), l++, e++)), c = u, u = v
                }
                null != d && f.x == u.x && f.y == u.y && p(t, u)
            }
        }
    }

    function ks(t, i, e, n, s, r) {
        var h = r.getStyle(GN[kf]), a = null == h;
        if (null != h) {
            var o = (new KM)[Sf](i).union(e);
            o[If](h) || (s = Ss(h.x, h.y, o.y, o.x, o.bottom, o[Ph]))
        } else h = gs(t, s, i, e, r);
        s ? Ls(i, e, h, n, a) : As(i, e, h, n, a)
    }

    function Ss(t, i, e, n, s, r) {
        return e > i && e - i > n - t && e - i > t - r || i > s && i - s > n - t && i - s > t - r ? !1 : !0
    }

    function Is(t, i, e) {
        return i >= t.x && i <= t.right && e >= t.y && e <= t.bottom
    }

    function As(t, i, e, n, s) {
        var r = Math.max(t.y, i.y), h = Math[Ha](t.y + t.height, i.y + i.height), a = null != e ? e.y : h + (r - h) / 2, o = t.x + t[ka] / 2, _ = i.x + i[ka] / 2;
        if (0 == s && null != e && (e.x >= t.x && e.x <= t.x + t.width && (o = e.x), e.x >= i.x && e.x <= i.x + i.width && (_ = e.x)), Is(i, o, a) || Is(t, o, a) || n.push(new UM(o, a)), Is(i, _, a) || Is(t, _, a) || n[Wr](new UM(_, a)), 0 == n[jr])if (null != e)Is(i, e.x, a) || Is(t, e.x, a) || n.push(new UM(e.x, a)); else {
            var f = Math.max(t.x, i.x), c = Math.min(t.x + t.width, i.x + i.width);
            n.push(new UM(f + (c - f) / 2, a))
        }
    }

    function Ls(t, i, e, n, s) {
        var r = Math[za](t.x, i.x), h = Math.min(t.x + t.width, i.x + i.width), a = null != e ? e.x : h + (r - h) / 2, o = t.y + t.height / 2, _ = i.y + i.height / 2;
        if (0 == s && null != e && (e.y >= t.y && e.y <= t.y + t[Sa] && (o = e.y), e.y >= i.y && e.y <= i.y + i.height && (_ = e.y)), Is(i, a, o) || Is(t, a, o) || n.push(new UM(a, o)), Is(i, a, _) || Is(t, a, _) || n[Wr](new UM(a, _)), 0 == n.length)if (null != e)Is(i, a, e.y) || Is(t, a, e.y) || n.push(new UM(a, e.y)); else {
            var f = Math.max(t.y, i.y), c = Math.min(t.y + t[Sa], i.y + i.height);
            n.push(new UM(a, f + (c - f) / 2))
        }
    }

    function Cs(t, i, e, n) {
        var s = i.x + i[ka] < t.x, r = t.x + t[ka] < i.x, h = s ? t.x : t.x + t[ka], a = t.y + t[Sa] / 2, o = r ? i.x : i.x + i.width, _ = i.y + i[Sa] / 2, f = n, c = s ? -f : f, u = new UM(h + c, a);
        c = r ? -f : f;
        var d = new UM(o + c, _);
        if (s == r) {
            var l = s ? Math.min(h, o) - n : Math.max(h, o) + n;
            e[Wr](new UM(l, a)), e.push(new UM(l, _))
        } else if (u.x < d.x == s) {
            var v = a + (_ - a) / 2;
            e[Wr](u), e[Wr](new UM(u.x, v)), e.push(new UM(d.x, v)), e.push(d)
        } else e[Wr](u), e[Wr](d)
    }

    function Rs(t, i, e, n) {
        var s = i.y + i.height < t.y, r = t.y + t.height < i.y, h = t.x + t.width / 2, a = s ? t.y : t.y + t.height, o = i.x + i.width / 2, _ = r ? i.y : i.y + i.height, f = n, c = s ? -f : f, u = new UM(h, a + c);
        c = r ? -f : f;
        var d = new UM(o, _ + c);
        if (s == r) {
            var l = s ? Math[Ha](a, _) - n : Math[za](a, _) + n;
            e[Wr](new UM(h, l)), e[Wr](new UM(o, l))
        } else if (u.y < d.y == s) {
            var v = h + (o - h) / 2;
            e[Wr](u), e[Wr](new UM(v, u.y)), e.push(new UM(v, d.y)), e[Wr](d)
        } else e[Wr](u), e.push(d)
    }

    function Ms(t) {
        return t == UD[Af] || t == UD.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == UD[lf] || t == UD.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == UD[Lf] || t == UD[gf] || t == UD[yf] || t == UD.EDGE_TYPE_EXTEND_BOTTOM || t == UD[vf] || t == UD.EDGE_TYPE_ELBOW || t == UD.EDGE_TYPE_ELBOW_HORIZONTAL || t == UD.EDGE_TYPE_ELBOW_VERTICAL
    }

    function Ds(t, i) {
        var e, n;
        i && i[ka] && i[Sa] ? (e = i[ka], n = i.height) : e = n = isNaN(i) ? zM.ARROW_SIZE : i;
        var s = jN.getShape(t, -e, -n / 2, e, n);
        return s || (s = new IP, s[D_](-e, -n / 2), s[P_](0, 0), s[P_](-e, n / 2)), s
    }

    function Ps(t, i) {
        var e = Math[Dh](i), n = Math[ro](i), s = t.x, r = t.y;
        return t.x = s * n - r * e, t.y = s * e + r * n, t
    }

    function Ns(t, i, e, n, s, r) {
        var h = Math.atan2(n - i, e - t), a = new UM(s, r);
        return a[so] = h, Ps(a, h), a.x += t, a.y += i, a
    }

    function js(t, i, e, n, s) {
        i = si(n, i.x, i.y, e.x, e.y), e = si(s, e.x, e.y, i.x, i.y);
        var r = Math.PI / 2 + Math[Ua](e.y - i.y, e.x - i.x), h = t * Math[ro](r), a = t * Math[Dh](r), o = e.x - i.x, _ = e.y - i.y, f = i.x + .25 * o, c = i.y + .25 * _, u = i.x + .75 * o, d = i.y + .75 * _;
        return [new kP(TP, [f + h, c + a, u + h, d + a])]
    }

    function Bs(t, i, n) {
        if (y(t, new kP(EP, [i.x, i.y]), 0), n) {
            if (t.length > 1) {
                var s = t[t[jr] - 1];
                if (xP == s[no] && (s.invalidTerminal || s.points[2] === e || null === s.points[2]))return s.points[2] = n.x, s.points[3] = n.y, void(s.invalidTerminal = !0);
                if (TP == s.type && (s.invalidTerminal || s.points[4] === e || null === s[Xa][4]))return s.points[4] = n.x, s.points[5] = n.y, void(s[mo] = !0)
            }
            t.push(new kP(mP, [n.x, n.y]))
        }
    }

    function $s(t, i, e, n, s, r, h, a) {
        return i[Cf]() ? void(e._fb = i._9q.toDatas()) : n == s ? void t.drawLoopedEdge(e, n, r, h) : void t.drawEdge(e, n, s, r, h, a)
    }

    function Fs(t, i, e, n, s) {
        var r = n == s, h = t[Rf][Mf](n), a = r ? h : t.graph[Mf](s), o = i[Df], _ = h.bodyBounds[qr](), f = r ? _ : a.bodyBounds[qr](), c = i[Cf]();
        if (!r && !o && !c) {
            var u = n[Pf], d = s[Pf];
            if (u != d) {
                var l, v, b, g, y = i[Nf];
                u ? (l = h, v = _, b = a, g = f) : (l = a, v = f, b = h, g = _);
                var p = Ws(v, l, u, b, g, y);
                if (p && 2 == p.length) {
                    var E = p[0], m = p[1];
                    return e.moveTo(E.x, E.y), m.x == E.x && m.y == E.y && (m.y += .01), e[P_](m.x, m.y), void(e._6s = !0)
                }
            }
        }
        $s(t, i, e, h, a, o, _, f), (!r || c) && Gs(t, i, e, h, a, o, _, f), e._6s = !0
    }

    function Gs(t, i, n, s, r, h, a, o) {
        var _ = a.center, f = o[jf], c = t[Bf], u = t[$f];
        if (!c && !u)return void Bs(n._fb, _, f);
        var d = n._fb;
        if (d.length) {
            if (c) {
                var l = d[0], v = l.firstPoint;
                a.contains(v.x, v.y) && (l[no] == TP ? (_ = v, v = {
                    x: l[Xa][2],
                    y: l[Xa][3]
                }, l[Xa] = l.points.slice(2), l[no] = xP) : l.type == xP && (_ = v, v = {
                    x: l[Xa][0],
                    y: l[Xa][1]
                }, l[Xa] = l[Xa].slice(2), l.type = mP)), zs(s, a, v, _, e, e)
            }
            if (u) {
                var b, g = d[d.length - 1], y = g[Eo], p = g.points.length, E = y.x === e || y.y === e;
                p >= 4 && (E || o[Ff](y.x, y.y)) && (E || (f = y), b = !0, y = {
                    x: g[Xa][p - 4],
                    y: g[Xa][p - 3]
                }, o[Ff](y.x, y.y) && (f = y, p >= 6 ? (y = {
                    x: g.points[p - 6],
                    y: g[Xa][p - 5]
                }, g.points = g.points[Yr](0, 4), g.type = xP) : 1 == d[jr] ? (y = {
                    x: _.x,
                    y: _.y
                }, g[Xa] = g.points.slice(0, 2), g[no] = mP) : (g = d[d.length - 2], y = g[Eo]))), zs(r, o, y, f, e, e), b && (p = g.points[jr], g[Xa][p - 2] = f.x, g.points[p - 1] = f.y, f = null)
            }
        } else {
            var m = Math[Ua](f.y - _.y, f.x - _.x), x = Math.cos(m), T = Math.sin(m);
            c && zs(s, a, f, _, x, T), u && zs(r, o, _, f, -x, -T)
        }
        Bs(n._fb, _, f)
    }

    function zs(t, i, n, s, r, h) {
        if (r === e) {
            var a = Math[Ua](n.y - s.y, n.x - s.x);
            r = Math[ro](a), h = Math.sin(a)
        }
        for (r += r, h += h, n = {x: n.x, y: n.y}, i[Ff](n.x, n.y) || (n = si(i, s.x, s.y, n.x, n.y)); ;) {
            if (!i.contains(n.x, n.y))return s;
            if (t._hj(n.x - r, n.y - h, 2)) {
                s.x = n.x - r / 4, s.y = n.y - h / 4;
                break
            }
            n.x -= r, n.y -= h
        }
        return s
    }

    function Ys(t, i, e, n, s, r, h, a) {
        if (i.hasPathSegments())return i._9q;
        var o = i[Df];
        if (Ms(o)) {
            var _ = cs(o, e, n, t, s, r);
            if (!_ || !_[jr])return null;
            y(_, h, 0), _.push(a), o != UD.EDGE_TYPE_ELBOW && Os(_, t);
            for (var f = [], c = _.length, u = 1; c - 1 > u; u++) {
                var d = _[u];
                f[Wr](A(d) ? new kP(xP, [d[0].x, d[0].y, d[1].x, d[1].y]) : new kP(mP, [d.x, d.y]))
            }
            return f
        }
        if (i[Gf]) {
            var l = t._2f();
            if (!l)return;
            return js(l, h, a, e, n)
        }
    }

    function Hs(t, i, e) {
        var n = t.getStyle(GN.EDGE_LOOPED_EXTAND), s = t._2f(), r = n + .2 * s, h = i.x + i[ka] - r, a = i.y, o = i.x + i[ka], _ = i.y + r;
        n += s;
        var f = .707, c = -.707, u = i.x + i.width, d = i.y, l = u + f * n, v = d + c * n, b = {x: h, y: a}, g = {
            x: l,
            y: v
        }, y = {
            x: o,
            y: _
        }, p = b.x, E = g.x, m = y.x, x = b.y, T = g.y, w = y.y, O = ((w - x) * (T * T - x * x + E * E - p * p) + (T - x) * (x * x - w * w + p * p - m * m)) / (2 * (E - p) * (w - x) - 2 * (m - p) * (T - x)), k = ((m - p) * (E * E - p * p + T * T - x * x) + (E - p) * (p * p - m * m + x * x - w * w)) / (2 * (T - x) * (m - p) - 2 * (w - x) * (E - p)), r = Math.sqrt((p - O) * (p - O) + (x - k) * (x - k)), S = Math[Ua](b.y - k, b.x - O), I = Math.atan2(y.y - k, y.x - O), A = I - S;
        return 0 > A && (A += 2 * Math.PI), qs(O, k, S, A, r, r, !0, e)
    }

    function qs(t, i, e, n, s, r, h, a) {
        var o, _, f, c, u, d, l, v, b, g, y;
        if (Math[Nh](n) > 2 * Math.PI && (n = 2 * Math.PI), u = Math.ceil(Math.abs(n) / (Math.PI / 4)), o = n / u, _ = o, f = e, u > 0) {
            d = t + Math[ro](f) * s, l = i + Math.sin(f) * r, moveTo ? a[D_](d, l) : a.lineTo(d, l);
            for (var p = 0; u > p; p++)f += _, c = f - _ / 2, v = t + Math[ro](f) * s, b = i + Math[Dh](f) * r, g = t + Math.cos(c) * (s / Math[ro](_ / 2)), y = i + Math[Dh](c) * (r / Math[ro](_ / 2)), a[j_](g, y, v, b)
        }
    }

    function Ws(t, i, n, s, r, h) {
        var a = r.cx, o = r.cy, _ = a < t.x, f = a > t[Ph], c = o < t.y, u = o > t.bottom, d = t.cx, l = t.cy, v = _ || f, b = c || u, g = h === e || null === h;
        g && (h = Math[Ua](o - l, a - d), v || b || (h += Math.PI));
        var y = Math.cos(h), p = Math.sin(h), E = Xs(i, t, {x: a, y: o}, -y, -p);
        E || (h = Math.atan2(o - l, a - d), v || b || (h += Math.PI), y = Math.cos(h), p = Math[Dh](h), E = Xs(i, t, {
                x: a,
                y: o
            }, -y, -p) || {x: d, y: l});
        var m = Xs(s, r, {x: E.x, y: E.y}, -E[zf] || y, -E[Yf] || p, !1) || {x: a, y: o};
        return n ? [E, m] : [m, E]
    }

    function Us(t, i, e, n, s, r) {
        var h = i < t.x, a = i > t.right, o = e < t.y, _ = e > t.bottom;
        if (h && n > 0) {
            var f = t.x - i, c = e + f * s / n;
            if (c >= t.y && c <= t.bottom)return {x: t.x, y: c, perX: n, perY: s}
        }
        if (a && 0 > n) {
            var f = t[Ph] - i, c = e + f * s / n;
            if (c >= t.y && c <= t[jh])return {x: t.right, y: c, perX: n, perY: s}
        }
        if (o && s > 0) {
            var u = t.y - e, d = i + u * n / s;
            if (d >= t.x && d <= t[Ph])return {x: d, y: t.y, perX: n, perY: s}
        }
        if (_ && 0 > s) {
            var u = t.bottom - e, d = i + u * n / s;
            if (d >= t.x && d <= t[Ph])return {x: d, y: t[jh], perX: n, perY: s}
        }
        return r !== !1 ? Us(t, i, e, -n, -s, !1) : void 0
    }

    function Xs(t, i, e, n, s, r) {
        if (!i[Ff](e.x, e.y)) {
            if (e = Us(i, e.x, e.y, n, s, r), !e)return;
            return Vs(t, i, e, e[zf], e.perY)
        }
        return r === !1 ? Vs(t, i, e, n, s) : Vs(t, i, {x: e.x, y: e.y, perX: n, perY: s}, n, s) || Vs(t, i, e, -n, -s)
    }

    function Vs(t, i, e, n, s) {
        for (; ;) {
            if (!i.contains(e.x, e.y))return;
            if (t._hj(e.x + n, e.y + s))break;
            e.x += n, e.y += s
        }
        return e
    }

    function Zs(t) {
        return Ee(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t[Hf] ? t : void 0)
    }

    function Ks(t) {
        for (var i = t.parent; i;) {
            if (i[qf])return i;
            i = i[S_]
        }
        return null
    }

    function Js() {
        j(this, Js, arguments)
    }

    function Qs(t, e, n, s, r, h, a) {
        var o = i[Na](Wf);
        o.className = Uf, ui(o, _j), e && ui(o, e);
        var _ = i.createElement(Xf);
        return h && (BM ? _.ontouchstart = h : _.onmousedown = h), _.name = a, _[Vf] = n, ui(_, fj), r && ui(_, r), s && di(_, Zf, Kf), o._img = _, o.appendChild(_), t[Jf](o), o
    }

    function tr(t, e) {
        this._navPane = i[Na](Wf), this._navPane[Qf] = tc, ui(this._navPane, {
            "background-color": ic,
            overflow: ec,
            "float": vo,
            "user-select": nc,
            position: sc
        }), this._top = Qs(this._navPane, {width: rc}, zM[hc], !1, null, e, Jh), this._left = Qs(this._navPane, {height: rc}, zM[ac], !1, cj, e, vo), this._right = Qs(this._navPane, {
            height: rc,
            right: oc
        }, zM.NAVIGATION_IMAGE_LEFT, !0, cj, e, Ph), this._n9ottom = Qs(this._navPane, {
            width: rc,
            bottom: oc
        }, zM[hc], !0, null, e, jh), t[Jf](this._navPane)
    }

    function ir(t, i) {
        this._n8e = t;
        var e = function (i) {
            var e, n, s = i[_c], r = s[ph];
            if (vo == r)e = 1; else if (Ph == r)e = -1; else if (Jh == r)n = 1; else {
                if (jh != r)return;
                n = -1
            }
            BM && (s.className = fc, setTimeout(function () {
                s[Qf] = ""
            }, 100)), R(i), t._kk._9r(e, n)
        };
        tr[Fr](this, i, e), this._3z(i[cc], i.clientHeight)
    }

    function er(t, i) {
        this._n8e = t, this[uc](i, t)
    }

    function nr() {
        j(this, nr, arguments)
    }

    function sr(t, i) {
        this._n8e = t, this._jo = os(i), this.g = this._jo.g, this._n76 = new HM
    }

    function rr(t) {
        var i = t[dc], e = [];
        return t.graphModel.forEach(function (i) {
            t.isVisible(i) && t[lc](i) && e.push(i)
        }), i.set(e)
    }

    function hr(t, i, n, s) {
        s === e && (s = zM[vc]);
        var r = t.globalToLocal(i);
        return n ? t.zoomIn(r.x, r.y, s) : t.zoomOut(r.x, r.y, s)
    }

    function ar(t, i, e) {
        var n = t[Fo];
        e = e || n, i = i || 1;
        var s = null;
        s && e[ka] * e.height * i * i > s && (i = Math.sqrt(s / e[ka] / e[Sa]));
        var r = Bi();
        Xe(r.g), r.width = e[ka] * i, r.height = e.height * i, t._8v._fk(r.g, i, e);
        var h = null;
        try {
            h = r[bc](gc)
        } catch (a) {
            WD[Mh](a)
        }
        return {canvas: r, data: h, width: r.width, height: r[Sa]}
    }

    function or(t) {
        this[Rf] = t, this.topCanvas = t[yc]
    }

    function _r(t, i) {
        this[pc] = t, this.defaultCursor = i || Ec
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
        i += t.pageXOffset, e += t.pageYOffset;
        var s = n.getBoundingClientRect();
        return {x: i + s[vo], y: e + s.top}
    }

    function gr(t, i, e) {
        var n = t.offsetWidth, s = t.offsetHeight;
        t[Yh][vo] = i - n / 2 + Ca, t.style.top = e - s / 2 + Ca
    }

    function yr(t) {
        var e = i[Na](Ra), n = e.getContext(Ba), s = getComputedStyle(t, null), r = s.font;
        r || (r = s.fontStyle + Qr + s.fontSize + Qr + s[mc]), n[Fa] = r;
        var h = t.value, a = h.split(Ga), o = parseInt(s[xc]), _ = 0, f = 0;
        return WD[__](a, function (t) {
            var i = n[Ya](t)[ka];
            i > _ && (_ = i), f += 1.2 * o
        }), {width: _, height: f}
    }

    function pr(t, e) {
        if (th == typeof t[Tc] && th == typeof t[wc]) {
            var n = t[ef], s = t[Tc];
            t.value = n[Yr](0, s) + e + n.slice(t.selectionEnd), t.selectionEnd = t[Tc] = s + e[jr]
        } else if (Oc != typeof i[kc]) {
            var r = i[kc][Sc]();
            r.text = e, r.collapse(!1), r.select()
        }
    }

    function Er(i) {
        if (SM) {
            var e = t.scrollX || t[Zh], n = t.scrollY || t.pageYOffset;
            return i[Ic](), void t[Ac](e, n)
        }
        i[Ic]()
    }

    function mr() {
    }

    function xr(t) {
        this[Rf] = t, this[yc] = t[yc], this.handlerSize = BM ? 8 : 5
    }

    function Tr(t) {
        this[Rf] = t, this.topCanvas = t[yc], this.handlerSize = BM ? 8 : 4, this._rotateHandleLength = BM ? 30 : 20
    }

    function wr(t, i) {
        var e = new KM;
        return e.addPoint(Ge[Fr](t, {x: i.x, y: i.y})), e[Aa](Ge[Fr](t, {
            x: i.x + i.width,
            y: i.y
        })), e.addPoint(Ge.call(t, {x: i.x + i[ka], y: i.y + i[Sa]})), e[Aa](Ge[Fr](t, {x: i.x, y: i.y + i[Sa]})), e
    }

    function Or(t) {
        t %= 2 * Math.PI;
        var i = Math.round(t / lj);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Lc
    }

    function kr(e, n, s) {
        var r = i.documentElement, h = new WD.Rect(t[Zh], t.pageYOffset, r.clientWidth - 2, r.clientHeight - 2), a = e.offsetWidth, o = e.offsetHeight;
        n + a > h.x + h.width && (n = h.x + h.width - a), s + o > h.y + h.height && (s = h.y + h[Sa] - o), n < h.x && (n = h.x), s < h.y && (s = h.y), e.style[vo] = n + Ca, e[Yh][Jh] = s + Ca
    }

    function Sr(t, i, e, n, s) {
        this.source = t, this[no] = Cc, this[Rc] = i, this[nh] = e, this.data = n, this[Mc] = s
    }

    function Ir(t) {
        this._4r = {}, this._kk = t, this._kk._1u.addListener(this._9s, this), this[Dc] = UD[Pc]
    }

    function Ar(t) {
        return t >= 10 && 20 > t
    }

    function Lr(t) {
        return t == Cj || t == Dj
    }

    function Cr() {
        var t, i, e = {}, n = [], s = 0, r = {}, h = 0;
        this.graph.forEach(function (a) {
            if (this[Nc](a))if (a instanceof PN) {
                var o = {node: a, id: a.id, x: a.x, y: a.y};
                for (this[jc] && this.appendNodeInfo(a, o), e[a.id] = o, n.push(o), s++, i = a[S_]; i instanceof BN;) {
                    t || (t = {});
                    var _ = t[i.id];
                    _ || (_ = t[i.id] = {id: i.id, children: []}), _.children.push(o), i = i.parent
                }
            } else if (a instanceof DN && !a[O_]() && a.fromAgent && a[T_]) {
                var o = {edge: a};
                r[a.id] = o, h++
            }
        }, this);
        var a = {};
        for (var o in r) {
            var _ = r[o], f = _[K_], c = f.fromAgent, u = f.toAgent, d = c.id + Bc + u.id, l = u.id + Bc + c.id;
            if (e[c.id] && e[u.id] && !a[d] && !a[l]) {
                var v = e[c.id], b = e[u.id];
                _[$c] = v, _.to = b, a[d] = _, this.appendEdgeInfo && this[Fc](f, _)
            } else delete r[o], h--
        }
        return {
            groups: t,
            nodesArray: n,
            nodes: e,
            nodeCount: s,
            edges: r,
            edgeCount: h,
            minEnergy: this.minEnergyFunction(s, h)
        }
    }

    function Rr(t) {
        this[Rf] = t, this[Gc] = {}
    }

    function Mr() {
        j(this, Mr, arguments)
    }

    function Dr(t, i, e, n, s) {
        n ? t.forEachEdge(function (n) {
            var r = n.otherNode(t);
            r != e && r._marker != s && i(r, t)
        }, this, !0) : t[zc](function (n) {
            var r = n[T_];
            r != e && r._marker != s && i(r, t)
        })
    }

    var Pr = "b23f613d1951d058c2060f7bc0b7d2283a1817b5e52b8b2ff8d3fc67124486c18b6501776ea8c7fa606ac7dd36ed1beb23cef3800d4561bb169b3d5bbefaa1dfdbc94e71852c1e669a96dafdeb007bcfef96d560bf1c27084ce721c9f52bf0cb491231c8c2c793deb7579fbbe6a99af14bbd805d20b1eafa341d1eb0fe2bc839d4d4b35df83f2f9ef9d20d47763c0a9152ef884b1b38e6832702aae1fc62ebd915718e0eb31533558db2a6890da19c2eaef7408d41175bf9d34745c5f6ae0bd1f0bd508e24b4593b05eaab030cd2f00d19b26ce83c8c385ddd48b8b5ecda2c9957872c183c5e43f042d9478e73732d1051b451cca4ba63b2942f82cc2ca868a26c813eac5e04ec3f7f1a4b946652c007dc18edc936cae7bb376ad6bf0258010596087f64a7bf29676c585692f128304a254360cbb8cccdb66dd6121cb52ec26ae506062a89e1c79a1d1bdfb917034e9de9deb0a51de6dd68b83dce8aa2873b1092f25186a56321949e12625c1a1bfaa8f769f1faade66ac4fbbe1cc5768ac59bdb8fc0e8ed7cc6564b24c7af0e5c6b17c057439a47f4bacc85b0a19f8c52c0c7225586093dc580405ba464e398efaae2c2428bb3c6626453aa63a6f55660e72aad9a444219c5b6df456aafb7e5afd9ea77fcc990584885d6256971a40da5dfb46e1f6dac1c6e941c34856d651b8bde55b7bf7eb45870456f818e834f13a94a83455d4ec68976b1f31cd56dd94c69b3fa6d88901c2a87c08416656ec27bb39f832904f5bf0584c3d0775e1836905769c7e4fa139bd255bfe58fcb727ccce349aa9cc08107afb354298ba5285734c10219dfa3c0922223db8921e6f8be432734efd2a75882377053517222330d955b32d382639671d239680ac6b93afd275321fd535ad6933f956620d108f984ba76925ace817b1d95ebd3404afa9d2958a7918de223489c0a47b67aef29dfb144147828d15f919ddac00ff503d25892facfbe134a6e7734cf8d796e5c1be117bfcc7ee7ed6e2ad9c51a9d21001400171462754864eb8e01199faeb8c6a77d6a55dcfec9679e3406c0804f132060b05bab2cd5e113a2abd04b301786867ac19dda8c51017ac096c1c15847e78646e466112a356a5e988baf76d935f099722f6184dd3a4d66445481816ec8bd039a1ee91ad835d9b7615b41c0b7555514746deb3682d9c931b084c02ac1d1238c7c60444a22324a589c34995c892f51de8860e771a8482fd3aa5078d6ef71a9db9654f9b9dd35118b835e087b8e81e260ce856f8d2084a06603bae75788e207d516accd6468a45679174a1e29c8c2f03bbefb5f7dbe8f2cae53f002242375ee44a230c7ed7fef8d202ab7d228521b70c06b997e88469a22f84df2d8ad79b3ff36fbca5fd4fbfec95c4ee3975da083bd3bcb96652be0e0fcc41fe8680edc48ecf6f667ef3032832448db72db0ec138d27ed924b6eeb9f910e7ef0ce74a0105c2139b491e300b6be85d4b601aa4dad7aca71674d03c375adfb6bffc72211ee87601f3e02892de598545e6a07c4e93a3c50da344659ccaf8933cbd4fa308d3711dccd9842f7f936d8404323b2535ca32eb155e3390122475627207df0755dcf024562b128de8b880147f30690e2aa183b6cecedbf2f670edbec985ce46a0b478572965ef77e266062bf8a515184b51b7172dce3256358f793982a55d851c58763d200842acfd87a40d76a61a2c0f693b298db8ad9c690c184143192cbb2d248b3d15f5808fa5bf2c92ea8b52f0a9fd06c2d2b2511864280edf69b1b3632484d109f1b751053d39cf8472c7dea65f20b45072ec840791873af8e3c4fed939a601937e441483e26d81933ba35330195080324476c714c870fc2a72bf47270509842694becb4550d7e91e479db753f3b3f87697f7cf0ba9501e6f409dbc1ba9dad0cc330f3bab0067e4889a5712979cdbe9ed10c1cecb72c106ca03e2b9edee126850b4bd29a5a97cd09398bee4e8baf6f7fd3431f296a5ab62f22f888f490b3313255f2731c65c780e91b7dd15c0d87fd3d30ccf7592defb82a5e58f193b78a5dddb971f2ac3d70423367e68f0573786982070558423aefaaf2965f0d1aa0803efbccd4b9e512312136f04a110423bd03f8deab9efcb4c6b29153618191dfaeaeeb835c8c376c8e129758c36ee2e0a267d3047e03d1f284ee43838ca5f6e2708426ba4877349a9045b1a4a700dcc0be5817ee249092faa256cd1d71bcf8e27c65eb5fc010c0268479cd7d268df5a2bdd0225940372495f5c4ed0466610c39937fcebcd1cbdfe72a7ff86bf9f911b20746fbee5879284ebcb38211e60fb3641d56027d439156b7f355ab40d033cdd8ecb64176a82c5a6ce907675e73d681002d9f7a796cf502b536a3e9e5f9c21e45624221181251d009c5f3a90abd5fac16dc7d073b4823b64b97965f51538cec9810cac2234f4d52a611c3911e9a22eef2417e75eb5bb9297c21f4bdf128d6698551ad099b2fd3b85653d41e0dff3161f5a2ffce6bbc29f29850c918f108e27a3b84ca0be7af65c4c012367a73f1eb08ba6d3b7c29270f08307a41296d9a4cae7d616e01c1129488a4b91cce285ed2f16a4dae35f976a4e1bf1bc6ae8fcb6a5a194f9122a51ee7658d8921f75a91186f02120c759a04557badeab2224f02f128bb5cfb6b04ca4a195417a92257ff8b054053bf29c2ee70517b7a9ee535ff50e13228e69bfe842445b87a7bce6a13070f75841fa4fbba78e8346dd34ced0bacaf8714cb696e9b3d4dd4bee6ab48f6ca26a954984519e9eb3ac722c31e9628fccec9a68dbab9031aebd7142220d1c7fdc9aadfc71409297c439afa939ad8090f508b34d6f2ce9ae5ad28480b35d23fbd8a7d1b582cceb6c0fa439f3068b9c02eca11d9e9df3f98b50df2549931aa043595e94d7ec3c6d0581df9df4874260d0e523fbf374a38cc0f6012505ee21a535511ec7270e9771457797345b5ecf383a8121732be956497626f0e68ad036c72b22c14ecf01bdf097d60eb9726d2a99210a93bf962aa92bb320a72edc3315b69fcaeb942839bcf3d5aec47a15108c909ed73a8f7da52f441567b4cdde505d8dd6e510da056cbaaaaf24f2aeda07eb37e93352d228997c9416ff555a4a19116033d0133ce62039ec2d3e294a36936e148c61bfc1cdea86133fb18d7664f1a6dbfcad39c4bf600b73bb229d1a9947d4e5032899cf586cdf9ec4e20aec656a2aee7a8392ed05f7bdbb2649cb45390789e918f2c2d4427d92546b907fbeb7a57a123a594bfbfecdd6976632b9529952245651819dbfd49c807d53fbe1e8f17061ab4d3e4b8eed4210ad028cef095070c284b64040f7c2c5886d5c972260224d4c88ed7ae087a7f91b6f68d97bc9cf4cab1819eed2d5cdf5a588d4b7f216ef6ff35b5b1e9166dc7db934c156f4cb31cb3eff808344a2492d18d8e180a7a64d164f2033f701415868fc013d4368497cffe6c8e31a0c8d6837027b3cf5f0d3e686c7f575149cb3f4fb212bc43f688ff25537d87e9bf6267a9857501a5a922455fe04f53c9ac07e551e0ee83b2fe7efdc8ff8ccadfb083311735925f4a140e8929288785cb1738a45374061df8bb134fdbeeb6f7b4cfffa9447adc81296075bc8380a3ccc41225850a24e6e0d900b7d89722813baf3a73596014364fa759b607de8929dea100136ec5dc2fc7b0d7415bd02b7fe6d9eed3df409091d7c93d9ad65fce49453fd7651180efb4fc16bc249ef3cac381e0e7588babee2e23fd07c733a08bf8e2d92b625be511a06934febb52a0610a2d476c162105e6e743015d6469ecc5449bdf9c68a34c9a18bf722223849fc2247a1837afb14c5178064aafd7cc6ae5fef5a28df504bf249354aa2e9696c01930c31d6a58ecdce6480f206ff094339270f4d2ee32f183431a2133b94d124a85a7ea3d17ee9b2b2e14f053e83baeaf743e61ee74705d13911224f5a81e7c748174b6a35556a3eedff4770f1fcc2411425f97baf27d67156a2c6498eea92e3f8a004fa2f064232f82553da9254a799b9b23f401e28de91910fb55390588a52577185f01dc7f4f8e90a5473fa3c42b3d61bd5c4e8c628a67ef162d0919e44b6a9948633e22f36c9919c4f95d2922d4b6c68562f07b564c00399a043e5f8a54c66c18155db99e820b7b069cc7e33a3a7386ec701c2b44388542bafc9a46581ae8ba91371160bd98670bd6b02b9d65780368fad612961231f8829d34c5852465f7fe4cfd6c59187b20b0853bc03d7875dbe6c2698e8c0431eb561e804961919e20c486d20e21ec99f731c32eadea51271258fab5f6595f57c024e0257dc99ede0f04db964e268aa547aa228dbb5e313e6723d22f57ad4260c17c3a5d263b557779e055325352b55b6a3fb17ab0b38439f8ef70378c1240f62ba9c66c59ffa86cc484c78f5df1b38ab73827e5c764e992b822d87788dac2fca751ec4dfbecaea32409dfb2801993b9573fcc4945188186f49cf2eacb794d1c08418a992b22c3ce8e14c5bbcbf9d3731b3c9e032a5f0b12a7c1cc162f11111a1e604f1f2d19d716f6237fca27262430425c93f33d2bdd9467f8b123772e3262276e190f9d297be82ee7521d1e04c76e6722cbe9dbfb951d7ed7c5fd68c168d1dd5b018358d3059ed627fa69e500c4ca613b412e7ef39a4701c6feb0b6a67cd525887ac6efc5351a6e09235973cac8dfe76a7ac1984ba82b832588e5d9a3da30d6b4c47bbe234f9a61f1b638ecc6e2a8ec8f6b30873fd0364e488da33c91e42e9cdbc781fba948d59edfc001f01ac8845beec5fcb0e9a3cdb901f339ca3d7015f4a2e10d525d29a5259bf3c638f509a3a79b7394597a5787989fc323a045b7244e00fc8be88e4841f62c78e87fa40596193db0c5af5eade93661e486ca9a0efd8ab6c1e85600d67b4408d91ad3ad38be3b8f948702a12f8cc86a5eaa5d4f7c2795bad4b7a7218fb84e4d6d2288b0402b5b8e000f91eb3cf5bbe2c89a0abbc357f40735adb0278ecb77244f9fbfa9917b0325ca2a90b4b1bf4d26d0813671c5be865461b2269f5e82cf5ec26c65b6ec2ce7d349eb72053d479d5c84afb38d9560a440c86777774333ce6a71730f314301e43ba2f5ed78c5b5b5100d7b5f6770e63423bcd9c2de4c5beb9e5bc9163871c5176ec9f94e0bf87c5353e7954174e2ce8f7cdf532c3f47d5fa8b4ba92bd984266941238bda1db219094831d7ea5ce186f789aedeb088c2424d155cafaa9a9e4cbfe74510e98b212685faf7fb691cc4b422c4a46c9a96ac99275c6dadb487396a3b6ac74f7ff0d76f075ad489b9df6bb5bb94983b4514a3b835e25a9461486f8bd88183cf6b0bce3fd5994e085dfa1f759c0e531ead4faa354fd4638c5f21c62d51ac89399ae896ab3e2c268bb4e6445aa0d1a0cafe5ac7653892d3281aa47caca98d0774355df11d5f6ce53c2bd70fbd2afc16292861c922202b0572a5ef206e003bfff0b5e1d975bfcaafa551854fbc3b781aa43a7038e990eade8d9b99d22c717e041adf4bc592b9580874245ba4ffb5ca852d84e1af7a80905e85cc8222510531973ebb190d4a4af4df323a9451eccfc41916137c7879a2bf6e144941d8ec7342a7b42eb0045c2d9330de9026862da6134bd36bb298cabd8531c1a0decc1308a70e6be3d4b737a5eea3813e3fd862fa61dc5353d82a8b5055dc25913a76d4ebf562b4f557bb1442e8eb97d8cb829a6e03a51f907f4bb851d5762807fdf7fdc59f817b7f77655148b52826de68e466d03711b0cd8c62a366a009d8addab8a6d67081c05a820edcd03499b555ec9bc8e094375133da2c21e8575e8e39af585ae3a3962f8547bd49b42d53ab9beeeaa4c659911ba9df19714036de908e0f9d998d5b9025043eac638e61fa35c1d70ac7c2923c8035566fd90f7b2ed71653401f2b3b6986c157f8daec865bc27c6a0324b55c11b534d7c8714a3f300393803b5f95a4fe3e39e1c9ee3e0ce845d29013271d7a51256257fd3537d56c2734dda2a1eba21ac10f6b8c37cccaab94d053e9545bf28c32322efb706cfdcd5a7cdc3a1b3ed352eef41a613b871198984b46f908045a751a4a5e36f17705657da809530ba4e44a67df14503aed889fcc58774d636743eac24626c746d6d27307cbe3cb629e83f13f8d1adcea7f56756bc50939bf08deee7100df8a838b70f723a469675c7fd1d8bc83df02f02a2b501f7d99ee84bbc6a459f3585ce952be7e0037a90410fdffd1131ade2f09c871a057034f66aa188bbb7ec5a14a9007758accaf2b25148f07e053dcd6507c024e5af768d9aebb0cfca79dfcd208ad67002772394e79f127e8328929c32f6ca2ac5f9ab8d6cefbffc3d8bee7771fc80a505c01e2b1f5d750c52f90f8d37a4a3fd815899ba9bb4ddf72f84e4064b848830e62709c33d471e9d7638ed7ac606a7e38a3ad3ab308e8bf3c0d3874b0cc9a9f96c2726c7323aa1464ce2fc83a4ad14da4ef82e724422636cd4c630ba10097e34fc53bc66d0d4b61772042a7ec8f93ffc5db7f32bdbdad90b6176d5824ab57afd05b029d7179a6a1b82c6bc82fa0f080c5a3164fe25ef57e972714fb3321c67bbddd4060b1f62cf895589ad127fcd4abb0fec77d94b74d53df490af117ea458a296076b71371ca0991b26d156b555c08b3a839a9ab50b104db11d9b76b0c55ad0774693350b75bbd2e291a9138328be9a9ae7b8285f8a64b7f48a61d163d27a39e8846530412e0cbfd9e9e9eb4bec2a8e96c39a4eeaafb0250d1096147408f343af04fccd2ea62f9241c0dcce4629a9216a73f71a0c9b39a92b00a0db17c7bae3b67f0d14fd2fe3742ec40e3b4c8005320d22b54b42184f44665d4b6ce2442710889cc0471c28fecec7fa3b3e5b10adfcfdbe7d198133f37c0cb73ae298dac6f109573c2756325141d306e1b35b808166922f97ecbbefb286a1ae6f270213867537436a4a88eafe14a02cb082d6aeef97fd1cb8770d5a016b685d252f87173fece302904a9b56719cbb29d85b7cab558611e5907e46b15a99c4e7acffb996416e3c4ef1b4fc20316d57a90682c0f38bd09a04b222d5bd42f4892acbf6f943d62ae7e574aa259fec026e52a615a5a5ebd4be6c07b0b80a0edcb17c68bea6b9215c451b56217dec7d118d723b471bedae74bf2a55d5b45d79418d90762766fd4bc9780f2fbc70cef39a31433ff08481542e6efc94f9ed64ce7138fc58e72efde84cf215b1f17cd9b189819b56498cc1915f80648d5bcba15621e286786f19d8954e3e465812e420018498433b46506cb4383c173e651e12c6248bc463016522a3694a558346e15bb6a41f3e81587f0b4a8af690e4089a0c73186231bdf8ef7c1edebf964bd3a9f2a060f7df0d9b61234d9d4c722cd221c122ef6c7e10b3bb3b269643879396be6f748c873b73b023d2925d6062c075f8a04e8fb4b840a90e1996cc6312a4f39bd14f26582cb1fb8878bb16076188280c09ba8bff74c37fd60e83debaac95fe2b40bc51faed5f24365263cfbd853b91724316b2e8d3f41cacf03e618d4ddfe1f5ca94baf03dbe08a690ccd715f75368c7e0aea9dc1cc6f0229734f266893f2287fb0ac4bd141e5262d4ea1478d04ff8ba26db5d21258658e2c196d4eb66e91c2c8430d8580b9e17b9328b39dfcaec13267320c8a2c1bbe98493e2dfb1946ccf04f9d5814c36af7690532036b23d406a1f4165d10f973df5bc80a93cbcecc27999dfa48426f1db9abbca7a43812e58084e856e3483aa38bc56d5a5c05647ef46881a951798d6cf0650fc5fa86106290dbfb78d8309893b5a42bb338e6b16528d33d34589cf294da1502f300b6b9c454b25b1f3d138107df79ccdde44c33c6d77b12288787cb693e16095db738ffe61e55a89816a8857782be0a9117b5ded61bfb5bce88787146ac6b7c8b5a43866e9a8fe501f9bbf87ac783bcb42da1f3dc6e3431da760e8313dfc0c66afdc42ac90f188895a370bb0dee9191a2b70d58feab0de90e8d89d7d023399a641334fee606ca0ce18721ec99b6b149592b52b77970488748b8530037def467e9d2406f311a34535f245590919f8ccbed7b70d55af4fe9aa94a7015cb0e73e6b7f63c5839bfa1f3a56193640197c60f3dea02b5ac0b16817021ba862ab9c676dcb02eb26c4c882dfb2f65d6421d7fa2820e1f13da5f4159d4b21b90ca4df2b6901dc5cd326187767bb8e48b60146092d71a3cb4366dd313545e68fc993e8a81076f643d43a9faa447c1bd44afa294f8c9e4be13762995dfa4913485e9446e14a1757c51d5a4a60f7b8f05dad50238d0c9336a9e2d4a826949eaec137678569ee27b352ed859c83aad4247e17f884b12dc2f9f60cd779467b9afa55558987442a9ff7ce9d1dd52ecd6677cc122eff4a74d87fafdc0333eaed247d63167fd1377c12590cf32e7168594a5470c1b697acb5f329b52f32311e155b73c81024fbcf818e2f84f8d2f84abcd700ac9ca65fc4f553cff03f8f9b01f46a26aad8fc1db1441f1013367a9dc11b6c767f4b2f374dd9c71199522fd1463ab4b705c45093c3d2aa45f5ba285e52bce96a45d28a1a31569ff76237447c7dcf82cccf4208c8884b026e670d33e533312d4d69275897a702baa9a80ba8997988a8b095ad223c89f4f6161ea88c501a9144c17bf668f957a652c1f2f497b39919cb5bc1537fabebe8f8f2db33aaa59cd95c9d7c455f3135fbab0e3822139d82e103658f84dd626cd49dc07916dcbec3363fb217c66849d286f1f82f45f6c412f180fe58a80bbf647540c658bd798564a433cc752fc60b9c11a8ba019a8b20b9cc937d1c6639e9fdcd1f0c216a617681d0c704cf78cc13ef4d5c15925eaab5860cb6f9bbcfa277658dd50dcc66aa03e75f3f5eab0a4d19e39887bc5dc1e43421590ff7f10e3d9bf9fa0138c09fa907fc93c8eaa77da04ff3580fea4b7881a8aea58b4384feacb76570b02b2d30467faf5ae4e980c028dc2ec564c28224eb3ed3a9dcf8681d6a4a54f605437b507751b6375fbe62c882430e4f0cf314e2752fa35b322e546c8dfd3b037cc777c99d4a2acdfb3ea33ea0034efae975452b88ac5926d4c4411711b2a97e11b201e62e1f4f26c1f6a571142de96e324ba8d8c59bf46c44d657a8583407a313f99515af210af3279be68b07172b03da18fe63d51ca062cdf2524a66c05d456669a6c0d69986bad2cffdcea3f5cf9e627a3fc54aaf27a48f111cf1e4cc97d1823476e05290b9a93f2466097a3ca9458c1463b52511caa7f0a17d1e942995efb3504e8d846549def3e406d499c44a750d2994ece4439a097670fb8595713d504e3259abd20ce2f3d801782ef21395670af3ba19493b1dc6d245d7b6281ead6d5ec0196b8e4a91000f9ce0544f28b2f771da85e808c622eabc6db2df0957d6abea60ed7f0c1dd9926b258971d1b3e5084c11b0739c95f061e0c052d6eb80f3e8ab8c0106472f13e799d388cc2fe6826f3f87bca864737fd1c06c2dccaf408fbaab9a48842507ba22b1592a04648924e6e3d34cd387d3b6883a1c80b8adcce5a0b26331a9b989ff7e38914ca9723dbb7672b7d7a2c0671f780720719c345a10cdbb9bb655e14aa73c893f41da64979a20c7aa1e3cb5f2281c5456184a9f8f924159b70dced80e3f883088021e1f97a9f2c47ab103e6bc4f30b1f3406b71282f82cbbf87e580ed130a3887ad71c7d6cfdb357cf3f02c7607d0704ce4cef65c6b2fb2424d37941d42d14be99936bf977451a89381f488b6a20fabf3088be87959bea4ea3f37b6aeeb8a925d79e866cce8d1932f2719da8a58c5ece3ee6b4edc3686843784e67b7acbb1835f3a0cf1dccc94e420416a8acdb798e1f489faf94f1ae4b28a673cd53da75e0d45cb6f216b09dd691a78a67a6de6ecb32f4193f8f0dc9fef2a412672e2068ca689d21a12d16e796034c6547cc3b2c0ccc36da7aab102500ee378fbd1aabc71668ffa0a620206f957eb4729c6c628d595cd74b10b6518474dd4a0dc8378649d4389e84d03c7482ce0cc1566ba54b84d891dfc29e94ca787f8bec8355d96b01f432e8353e0ce72c67182f2aa30f09c81ba7f80af285a8bddb2ea3eea5906bcf7ab1aec5f161366a4b2e615ceb70550ab68312602585edb237c4d43340b295aac0ca5a761da04c8763788735d1d8c8e9e4dee6f20c33ee92ce3252a03039a67c955109521f65b6a36316f47a4c4dbcf664d6bd952f878d61838f94c994c876833b2df300ca8988a37f87f831f9318e4aa9c4e17a551e647219b366ced5e257d9516e1bd672b23a907b345b1dd8e191ade7cbf21bbc4f72321db8e4d6c48a0069142080dac732b02c80d98fb2a1a988da4c79753f25e33735a594c212296c0acb212dc5895ee5baeeeebb809f386f3a29cf2b9b684e3962e44e0242b6cd01640c7b32ac275ac3c06be121a47c45e259f97b358fe91425fadd0948340fe3bd04f7af966088da2a9866ad554f296dda841fdab1e0ddb91ea5b8172bc05ecac66870c5501bc5cc4b3a99b344137116c4937bb82fae4f34dc058871ab864feb03a7afc66f0c0fb868e57db3e862b54447618eaca6784800c6673c1826e19b15451ad351d005fffe8d545a9ec95a8e151d69aa177e8ca326ea484e99801f902a8765c72bab33ba598223057174717053e76d41c8d2bcaba50e6ed66ab424524b40353947bb6199b94868bb7ff3c058c91b2eb34233ea8739df429678f007753569dbf83ce35944288e76b4164055d8bbc3d974f4bb09eb84a5a3c715e18dbdbdd637483e72565cd31a5b3f76a1727a9c1302f8f49bc675ec9e8439e24b6eda82849e3187a40cfd652bd2c1861859533cbe95b127c57782274caa588bacd0db14beb2945afb50035cd14b12b5b589bd07af2f20937d86c11185afff7eefee47c3ea1ab3541cefe1682fd47a9aa28e1ef41a9dc033a2e07eb06bc14663750b7a0e2724bd5481f74b5859549113747f47465cdc555c3569fbfb20c751ba888c9999887621308f12d1d8f7ba7b3ad17cea83af7c3a2f2c650a78beae4004f979aa5d8e39e645d590c495926bde86c7e670dadaefc77a0d08797b5b2c28e5362ccf178d0e14d1f9434ea111e08355b709a657ad43c0d69fe18ed503e41160bd052cd7e7c9bc08f045ff7daae4a0f765279972620808903a68dd808751ba41367ef1ff97d20da05a25cb3b397f67a5243b7d9ce278f4d480a7114246a525a1b01f75da37931febb40b6670a3965e806fa39a6ac71785cb3cc5d0047fcdfe57c5088dde36b9ac6f3ea1f9271618b681e12a0daad045a6d973d3064ce8924f17b1cf6d60197c1bc1966bece384676a888265557735f36e51c3ed08fbf327134f0121b22d27b6d2af05c9c19999e83e05ebc591abcc147152794062e0dad5ff932660e95b6c80b43d263ec2ac28206176f16f68d5667ff01f22a838b6e68ff2b34a68949765fe5ebe85a095d8f230f6ae691f96d3a9b026b25e68debd7955684070ea3b2a1aa154f87a44d3c1ed16535820af732180a9c91ffe9b10139a4657af9107425a934b53a75daa6f78d92d1d4800c52ec94881c1206adfc07d05177f68b9f3c52744c62316ef27293fdbd6266cfd92d07e30360c7f593114b0f07e17b033f90986cf28e8d119309b76534d8e70f19ff8217c71c12c6b11617d26256f7a1fec1d185549be69cae97aa326806250a908024efc6c8bd844a82c1bf6269ab0f214177db325f4e07ee46ce3d8485eeb8df7bffe1ed99c871441b17330319790cc775e3bb699986f80a5282126c71bd2b27a9ea70631bd4488577a4141bd926d21f60be8c83c940357e845be20742d77ea053e1701f48590713a7438ffa2bb0ace902679df73beb026eac7faad5006a3116563364fd16714622ab82f874353e6de71c3f89decc64fd95713ef44ad7847f05a29a4615aba7ed56da31cb8aeb148368b220183415e19368b909dbe9ac9f9f49656ebef36fc3540dbed6289979deab2143aaa272688829a119606a6024dbc208603a1240ebe6ac4cab8c4addaa7541cb2664e415200ae8154628ff453da5a516d4f750724f4401a51174d0e56574fbfcf434b7bbaef45c2e90d518d011519f9ad43d981e9b21a062f913ed8874a2d4c4e4b70872359853b99f355be91fddfd0496bb70c4927ed7a566f4f30bdf929fa8eae4782224a59d13b83c10e5cd2238c94f5fcfb0fe221b3f149d5eebe665d99226bb31fff61861e991a92b0f09981d78e271de8a9923c209c0b6d8aa0651c8cdbcf13180ee16a7256cb51acc994caf5b8e3b17bff8652d88e9d08e5fd93ee40434e01f9dae4feef3277271e739f4126591647035c72dab15159cf33ee8287e6794de425b949c1ad857457491e8b22ba56a271ce373064063e2212ba284d4e38983ceb07d60e88934e02568de91dd738d65bc21e1dbbe7d9298997d06e1573f14f5e2aae025eac4bece030a57d913139a96cd3b631a0da0f4749293a6dfed39882c829bcf97d2b7008e2a0e722b8b860c3198b73c82e94327a87c0314131ba8ced5fc38ee829bce82b66d93347719d4941a27745003e025fd3e8631cd36910297937704159672497341ab94d4f42287cc330713ce137b43481ebeb7729ff176f2475f84048320be900c52b9b5b3a005f7a79dd8e25db27ec10240bd7238153d1f757c6ec6443cb663dc5109d1b1be627cb93e14fcea86450d70c6b0448ab4168398cc059af68f15ce73a8b2788e5e2bdee0d5f246454576189c16220bef921a897c3896ff8201335a4084e5f69deb8408c36746aeb65ec32698f1cafe5447fd7e47475654cb35ad05a5cb138869de92b64b9f246a975eb89d2759340a6911ed25ec29d8b9e9c743aef876d304dee07552e42d20c323fe4391ad359af26a57f080be604c37453722f3679a81d555eaa754ca65ca741476cfdf975d95a9fd9735398fec7d30603512de4d9934ee7c5a96502ac02d2f190221c4a8726a49bfae584c1023934811b90ae65e3af1a9330cf92e2243b52bd4576f265436687ffe7c6135fd87f3c0c418df68f61df10dcdb3612e7e427842f358e4427b23f1377f5b8dd061415e24678735c3bcf930f46596813680b645d318d30ecb329ca7a7d276b0b5e8d7bbaa1bb0211868fab964c70ced8a2143122af7e58665d4b90d77497c627573ac11eba579af52b2f11b3f1061d4af16111f5fefa92f77648a65e0fac847881bbb0b57f6cc4868615fe42124622532a68fafbaa832669645dad159c63e8d2e92d265e71d462b0afefd945811aa4577384c732ff64757ec46d2b0776f26e85b53616d5a6bf0368d7ef8ceeac1c77b8a1be7d9afd042b2187c028ac4c519cb7934dbfa6cd06593056116604ee07157a0c8d14c0d924a3f9b5307cb107c5e0e07fb6fad1929ea6b3753c3ad75ae4ccb93bd25dfcf4632920dc527ea81d2bf781c2bb13121629ea4a7fc6fa259f8f07e104099ea899cf12dda81ed795d54c9f0cb220b53037d9cc8afc1dea9bf6fe986ff7fd23e5d948915353bbf31b5524c5cb2b2484fe36a7c95f32137e5b9d125f5eadbc352f6a2451d4bd87734602d686ab75640b2037ca846c51eadf43b521da9338b72b3ab73e7e7e5206305084444ec0fd5aa34070391b7e92a4262c6f28a2ee3ad1f447828367d1a67608b66280ae7a09f47ac1a2e4b45c6e9704f2272cd2e869a42ae1e1f3c05f49990d4c26a4e5fb4854afda0bcfeda5b6015a54c8dc00ae9fa1bd32ef63fee657d00a7ef88194c4ce9bac97b8fd3911512105dc921e8c31e7f8cb47d259cf83aaf948b161d56fca2cdefb0bb7b8891752099bd93f2fd30dadc46352399183b19cf9e505a543c477a01cb34a200cc4096a67dfa4c08e2bde4b89cc59cd0df1a89d8262bc34f3570c8b0564bd9b425df0f012d48e1da8037b283399f6e47fdd06a9dab968c8399864002798da1787f81f9855a22300c070444634c5a8892c4d95dd8d31b57cf247ea30e5a4f41f7004226c9cb180863a7896bb2d6ff6ce59241a274fdca4c26523c1101dd3ae0fc3118dbc414138691ff44bc10a34500b86beee9e4d8ff93d66f7a8b313e29294122407ce51fc28814c6b02b66d323a2f39b4776cb2b29a60380129f0769eae9df6d787d24665011f151c3a69bad64979789fd3eae27ec90b53d63b97adcdd5f5b94c34b51a5405df2a4913aba2ebac6fddab3bc8d48e7f1c3dbfc30debd8d8806a57c78f29a193c8d188785a4ec50001c0906085653481dba7de6e200b375432cac6fc3956ed4e9e643db8039441a55bafbb3b7d0401c2949e8ecd5aee0a864f8dfd8d3ee3e477483a13ababe074e5f5531cbc01e044996b27db02cd6480fca165a94a9576fc9f4afb7f257cfb909bda80bf09199e93fd9b6e9a02a796824c920692ba8fd56a80283ed64681ddd6cd1c5f543ecde1b90b2c701d8ccd1e6cc660ea001a0862ee07d6b5e42efd1d937b90a9b68849abe1ca5835ce808a481eebfbe981b38082dcfd4193a9bb74054587860bef1f815bc3a5c2f528bbf48489e6794461482e60f549e5747cc327fc1c7cddfc3f1cd41373e3f63c3c7cd5f3c8cb96d4a4ac94f5ae63126f6aa3f977cc600881773a2d4799d4ed83218e2985402a874eccaeb7cd6691c92de8b660027c0e379e97ddd0bcb7e373ce789d69890633addc4f3de1d48141b154daa7bf11645fccba6688bbdfb832455ceb033e2b1303811c9eea264c297da69a9efcc2f2f4f45195c0c29514f40590d35e132ed2297608eb8299546f8ff12663d41c90d6edad4eaa762cd0f68bf0dcf30b551da168a3a65e3ed4926b12d2081573f6968445ffadc9c4ba681bf2dcc63be04868c1edcdab82241ee7ec37edf3466346e7eab0ef85c91eb64d0ff480d3baaca10a30ccb1bd0f97c40b876a27324a16c00f3a5aa8c9f152423505b0f95a27f8c1cf94cf2f669667dfae42e59b5a4f2e56554aef5d302d52ca052c809c990437a43b91ac9528a8dd14b73c1f65bf2b7ba8adfcf02624d2af40aecaede878b9448840f221149680b19fd2e0e5d921331c9f4787e30c7622c9b64dd9bf271b33d783b0227cc3b4362f52a902fb4ba76038bf4253b6a6904e534f0471cbd3fdcba79bab99df79437fe1b052248b3363768a6005d3a133f388c0bfafd1016158217f6c1d1ef3a0fa61ebef01856e42b41d226c831088498ff9ebd53d579b0780f1af3a6b6ad383dc9a85e485ae218886717e5fd60abfbcc34e40f5c1b2b4e78867a014b8fca281af6a1a55f7f56e57f4574dd4372fa9e2a28b7ce53feb4800a9570807802cedc36307b7e5bcbeb1dd7e63f9f000895476a4633dcc69bda75e61f8e6998b6eaa21c1f7d05e8394d076a1acf831ccdd1a6301d3137427205aaac79cc91b3fedf01d662d0c44e916101b7dade41128a4c931de1908fd0192d6d7a49c709ba5dd122dee9566a8908f0a3ae6f5213f9007f2055b2e1355fb067268a2fc5acc8738d7f6781acd910147eb6d0ffd0648d9929acc28d9f11f3509a2d1473cf176378d0dd46bafb1c56fef3f4732bb3a8bd39196a89142b301e03257bde0997dcdd6f8680bfee7a83cf3649adc8d8b1e8e5e3ed0b568b7bfab99aa5284d3077b580f9092d082b69ef63abd641eb00997e5e77e92b20a158b82756af5e89ac758cee21cddd17d49efbea0e61832d81a923854e9b6993c7d6d545a66779c05b852e468a565a088922a864c88b77707f85407e2dba5006bbec18f44b9eb6e00696a1f0e19db65a2886abbe90b32ca4ca06930cefc0e3606cbdb09e858d5c91b64f454c1d79422e4b663ca2c17a9fd5961092cca7148ecc97306e257ee198577944515a3947305b43b380750f04cec49a70050514c5c167d1bf2fc70fd524cb4a9973621629c19d79631ef404a9100f5a84fce845968aa42198c809b349140e1529672247d192ba9a8aa204c39f7fa71d2f7ab498c05294def55f9d5afd1ea526880d98ce5aedb020d18515b10569ec85ba752395a08a5e59b754c8149392da2a33532a2583ca14d1bcb597ee9ef1ace8f5e06871e64b71763f3d1261218878bd7ab98ad520a553f56045aeb38d0f1f61bb469fc03949fa27325b709a684dadc899f9c741e171367fb888aede854c8304869a4debadf13a165f94514317747a58c2568da2e17224a6001d5f2882758266802321e4e6974a05eec038", Nr = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    !function (t) {
        function i(t, i) {
            for (var e = "", n = 0; n < i.length; n++)e += i.charCodeAt(n).toString();
            var s = Math.floor(e.length / 5), r = parseInt(e.charAt(s) + e.charAt(2 * s) + e.charAt(3 * s) + e.charAt(4 * s) + e.charAt(5 * s)), h = Math.round(i.length / 2), a = Math.pow(2, 31) - 1, o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), e += o; e.length > 10;)e = (parseInt(e.substring(0, 10)) + parseInt(e.substring(10, e.length))).toString();
            e = (r * e + h) % a;
            for (var _ = "", f = "", n = 0; n < t.length; n += 2)_ = parseInt(parseInt(t.substring(n, n + 2), 16) ^ Math.floor(e / a * 255)), f += String.fromCharCode(_), e = (r * e + h) % a;
            return f
        }

        t = i(t, "QUNEE"), Nr = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(Pr);
    var jr = Nr[0], Br = Nr[1] + Nr[2] + Nr[3], $r = Nr[4], Fr = Nr[5], Gr = Nr[6], zr = Nr[7], Yr = Nr[8], Hr = Nr[9], qr = Nr[10], Wr = Nr[11], Ur = Nr[12] + Nr[13] + Nr[14], Xr = Nr[15] + Nr[16] + Nr[17] + Nr[18] + Nr[19], Vr = Nr[20] + Nr[21] + Nr[22], Zr = Nr[23] + Nr[16] + Nr[24], Kr = Nr[20], Jr = Nr[25], Qr = Nr[26], th = Nr[27], ih = Nr[28], eh = Nr[29], nh = Nr[30], sh = Nr[31] + Nr[32] + Nr[33], rh = Nr[34] + Nr[35] + Nr[36], hh = Nr[37] + Nr[38] + Nr[39], ah = Nr[40], oh = Nr[41], _h = Nr[42], fh = Nr[43], ch = Nr[44], uh = Nr[45] + Nr[18] + Nr[46], dh = Nr[47], lh = Nr[48], vh = Nr[49], bh = Nr[50] + Nr[35] + Nr[51], gh = Nr[52], yh = Nr[53] + Nr[54] + Nr[55], ph = Nr[56], Eh = Nr[57] + Nr[32] + Nr[33], mh = Nr[58] + Nr[59], xh = Nr[60], Th = Nr[61], wh = Nr[62], Oh = Nr[63], kh = Nr[64], Sh = Nr[65], Ih = Nr[66], Ah = Nr[50] + Nr[35] + Nr[67], Lh = Nr[68], Ch = Nr[69], Rh = Nr[70], Mh = Nr[71], Dh = Nr[72], Ph = Nr[73], Nh = Nr[74], jh = Nr[75], Bh = Nr[76] + Nr[35] + Nr[77], $h = Nr[78] + Nr[35] + Nr[77], Fh = Nr[79] + Nr[2] + Nr[80] + Nr[16] + Nr[81], Gh = Nr[82], zh = Nr[83] + Nr[84], Yh = Nr[85], Hh = Nr[86], qh = Nr[87], Wh = Nr[88] + Nr[89] + Nr[90], Uh = Nr[91], Xh = Nr[23] + Nr[38] + Nr[92] + Nr[2] + Nr[93] + Nr[94] + Nr[95], Vh = Nr[96] + Nr[97], Zh = Nr[98] + Nr[99] + Nr[100], Kh = Nr[98] + Nr[101] + Nr[100], Jh = Nr[102], Qh = Nr[23] + Nr[103] + Nr[104] + Nr[105] + Nr[106] + Nr[54] + Nr[55], ta = Nr[107], ia = Nr[108], ea = Nr[109] + Nr[66] + Nr[110] + Nr[66] + Nr[111] + Nr[66] + Nr[112], na = Nr[98] + Nr[97], sa = Nr[96] + Nr[113], ra = Nr[114] + Nr[115] + Nr[116], ha = Nr[117], aa = Nr[118], oa = Nr[119], _a = Nr[120], fa = Nr[79], ca = Nr[121], ua = Nr[122] + Nr[97], da = Nr[122] + Nr[113], la = Nr[123], va = Nr[124] + Nr[125] + Nr[126], ba = Nr[127], ga = Nr[128] + Nr[129] + Nr[26] + Nr[130] + Nr[26] + Nr[71] + Nr[68], ya = Nr[128] + Nr[131] + Nr[26] + Nr[130] + Nr[26] + Nr[71] + Nr[68], pa = Nr[132], Ea = Nr[133], ma = Nr[134] + Nr[114] + Nr[135], xa = Nr[136], Ta = Nr[137], wa = Nr[138], Oa = Nr[128] + Nr[139] + Nr[26] + Nr[71], ka = Nr[140], Sa = Nr[141], Ia = Nr[142], Aa = Nr[143] + Nr[35] + Nr[144], La = Nr[145], Ca = Nr[146], Ra = Nr[147], Ma = Nr[148] + Nr[38] + Nr[149] + Nr[115] + Nr[150] + Nr[35] + Nr[151] + Nr[94] + Nr[152], Da = Nr[83] + Nr[38] + Nr[149] + Nr[115] + Nr[150] + Nr[35] + Nr[151] + Nr[94] + Nr[152], Pa = Nr[153] + Nr[115] + Nr[150] + Nr[35] + Nr[151] + Nr[94] + Nr[152], Na = Nr[154] + Nr[54] + Nr[155], ja = Nr[23] + Nr[2] + Nr[156], Ba = Nr[157] + Nr[158], $a = Nr[159] + Nr[115] + Nr[160], Fa = Nr[161], Ga = Nr[162], za = Nr[163], Ya = Nr[164] + Nr[89] + Nr[165], Ha = Nr[166], qa = Nr[143], Wa = Nr[167], Ua = Nr[168] + Nr[157], Xa = Nr[169], Va = Nr[170] + Nr[35] + Nr[144], Za = Nr[171], Ka = Nr[159] + Nr[89] + Nr[172], Ja = Nr[173] + Nr[35] + Nr[144] + Nr[174] + Nr[175] + Nr[115] + Nr[176], Qa = Nr[23] + Nr[174] + Nr[177] + Nr[178] + Nr[179], to = Nr[180], io = Nr[181] + Nr[182] + Nr[183], eo = Nr[173] + Nr[35] + Nr[144] + Nr[174] + Nr[175] + Nr[35] + Nr[184], no = Nr[185], so = Nr[186], ro = Nr[187], ho = Nr[66] + Nr[175] + Nr[188] + Nr[189] + Nr[35] + Nr[144], ao = Nr[190], oo = Nr[191], _o = Nr[192], fo = Nr[23] + Nr[38] + Nr[193], co = Nr[117] + Nr[105] + Nr[194], uo = Nr[195] + Nr[68] + Nr[196], lo = Nr[197], vo = Nr[198], bo = Nr[199], go = Nr[200], yo = Nr[201], po = Nr[202] + Nr[26] + Nr[203] + Nr[26] + Nr[71] + Nr[204], Eo = Nr[205] + Nr[35] + Nr[144], mo = Nr[206] + Nr[89] + Nr[207], xo = Nr[59], To = Nr[208] + Nr[66] + Nr[209] + Nr[66] + Nr[210], wo = Nr[208] + Nr[66] + Nr[209] + Nr[66] + Nr[211] + Nr[66] + Nr[212], Oo = Nr[208] + Nr[66] + Nr[209] + Nr[66] + Nr[213] + Nr[66] + Nr[212], ko = Nr[208] + Nr[66] + Nr[209] + Nr[66] + Nr[214], So = Nr[215], Io = Nr[52] + Nr[186], Ao = Nr[52] + Nr[216] + Nr[97], Lo = Nr[52] + Nr[216] + Nr[113], Co = Nr[217] + Nr[218] + Nr[94] + Nr[219], Ro = Nr[52] + Nr[220] + Nr[38] + Nr[104] + Nr[16] + Nr[221] + Nr[35] + Nr[144], Mo = Nr[52] + Nr[222] + Nr[115] + Nr[160], Do = Nr[159] + Nr[38] + Nr[104] + Nr[94] + Nr[95], Po = Nr[223], No = Nr[224] + Nr[35] + Nr[225], jo = Nr[52] + Nr[226] + Nr[182] + Nr[183], Bo = Nr[52] + Nr[222] + Nr[16] + Nr[221] + Nr[35] + Nr[144], $o = Nr[227] + Nr[228] + Nr[229], Fo = Nr[230], Go = Nr[52] + Nr[231], zo = Nr[52] + Nr[231] + Nr[94] + Nr[232], Yo = Nr[220] + Nr[38] + Nr[104] + Nr[35] + Nr[184], Ho = Nr[52] + Nr[180], qo = Nr[173] + Nr[54] + Nr[233], Wo = Nr[52] + Nr[222] + Nr[94] + Nr[219], Uo = Nr[159] + Nr[21] + Nr[234] + Nr[178] + Nr[235], Xo = Nr[23] + Nr[21] + Nr[234] + Nr[178] + Nr[235], Vo = Nr[236] + Nr[178] + Nr[235], Zo = Nr[148] + Nr[21] + Nr[234] + Nr[178] + Nr[235], Ko = Nr[181] + Nr[178] + Nr[235], Jo = Nr[236] + Nr[178] + Nr[235] + Nr[13] + Nr[100], Qo = Nr[148] + Nr[21] + Nr[234] + Nr[178] + Nr[235] + Nr[13] + Nr[100], t_ = Nr[181] + Nr[178] + Nr[235] + Nr[13] + Nr[100], i_ = Nr[237] + Nr[174] + Nr[238], e_ = Nr[239], n_ = Nr[102] + Nr[35] + Nr[240], s_ = Nr[241], r_ = Nr[242] + Nr[105] + Nr[243] + Nr[89] + Nr[244], h_ = Nr[245] + Nr[89] + Nr[165], a_ = Nr[246], o_ = Nr[247], __ = Nr[248] + Nr[54] + Nr[249], f_ = Nr[250], c_ = Nr[251] + Nr[2] + Nr[194] + Nr[16] + Nr[252], u_ = Nr[251] + Nr[16] + Nr[252], d_ = Nr[253] + Nr[254], l_ = Nr[255], v_ = Nr[256], b_ = Nr[257], g_ = Nr[258], y_ = Nr[252], p_ = Nr[259], E_ = Nr[260] + Nr[68] + Nr[260] + Nr[68] + Nr[261], m_ = Nr[157], x_ = Nr[262], T_ = Nr[45] + Nr[16] + Nr[263], w_ = Nr[173] + Nr[174] + Nr[264], O_ = Nr[173] + Nr[21] + Nr[265], k_ = Nr[173] + Nr[178] + Nr[266] + Nr[13] + Nr[14], S_ = Nr[267], I_ = Nr[268], A_ = Nr[4] + Nr[2] + Nr[269], L_ = Nr[270], C_ = Nr[159] + Nr[174] + Nr[238], R_ = Nr[52] + Nr[45], M_ = Nr[52] + Nr[271], D_ = Nr[272] + Nr[89] + Nr[273], P_ = Nr[181] + Nr[89] + Nr[273], N_ = Nr[274] + Nr[35] + Nr[184], j_ = Nr[275] + Nr[89] + Nr[273], B_ = Nr[276] + Nr[89] + Nr[273], $_ = Nr[277], F_ = Nr[278] + Nr[66] + Nr[279], G_ = Nr[278] + Nr[66] + Nr[280], z_ = Nr[278] + Nr[66] + Nr[281], Y_ = Nr[278] + Nr[66] + Nr[282], H_ = Nr[278] + Nr[66] + Nr[283], q_ = Nr[278] + Nr[66] + Nr[284], W_ = Nr[278] + Nr[66] + Nr[285] + Nr[66] + Nr[157], U_ = Nr[278] + Nr[66] + Nr[285] + Nr[66] + Nr[262], X_ = Nr[278] + Nr[66] + Nr[285] + Nr[66] + Nr[286], V_ = Nr[278] + Nr[66] + Nr[285] + Nr[66] + Nr[287], Z_ = Nr[248] + Nr[54] + Nr[249] + Nr[2] + Nr[80], K_ = Nr[288], J_ = Nr[52] + Nr[203], Q_ = Nr[200] + Nr[18] + Nr[289], tf = Nr[52] + Nr[222], ef = Nr[290], nf = Nr[23] + Nr[35] + Nr[51], sf = Nr[291] + Nr[35] + Nr[51], rf = Nr[292] + Nr[66] + Nr[293] + Nr[66] + Nr[294], hf = Nr[292] + Nr[66] + Nr[293] + Nr[66] + Nr[295], af = Nr[292] + Nr[66] + Nr[293] + Nr[66] + Nr[296], of = Nr[159] + Nr[115] + Nr[297], _f = Nr[298] + Nr[84] + Nr[228] + Nr[299], ff = Nr[300] + Nr[174] + Nr[238], cf = Nr[301] + Nr[38] + Nr[193], uf = Nr[302] + Nr[66] + Nr[303], df = Nr[23] + Nr[115] + Nr[297], lf = Nr[302] + Nr[66] + Nr[293] + Nr[66] + Nr[304] + Nr[66] + Nr[305], vf = Nr[302] + Nr[66] + Nr[293] + Nr[66] + Nr[303] + Nr[66] + Nr[306], bf = Nr[302] + Nr[66] + Nr[307] + Nr[66] + Nr[308] + Nr[66] + Nr[309], gf = Nr[302] + Nr[66] + Nr[293] + Nr[66] + Nr[303] + Nr[66] + Nr[310], yf = Nr[302] + Nr[66] + Nr[293] + Nr[66] + Nr[303] + Nr[66] + Nr[311], pf = Nr[302] + Nr[66] + Nr[307] + Nr[66] + Nr[309], Ef = Nr[312] + Nr[66] + Nr[313], mf = Nr[314] + Nr[66] + Nr[313], xf = Nr[302] + Nr[66] + Nr[315] + Nr[66] + Nr[316], Tf = Nr[302] + Nr[66] + Nr[315] + Nr[66] + Nr[317], wf = Nr[302] + Nr[66] + Nr[315] + Nr[66] + Nr[318], Of = Nr[302] + Nr[66] + Nr[315] + Nr[66] + Nr[319], kf = Nr[302] + Nr[66] + Nr[320] + Nr[66] + Nr[321], Sf = Nr[322], If = Nr[170], Af = Nr[302] + Nr[66] + Nr[293] + Nr[66] + Nr[323], Lf = Nr[302] + Nr[66] + Nr[293] + Nr[66] + Nr[305] + Nr[66] + Nr[304], Cf = Nr[1] + Nr[35] + Nr[184] + Nr[115] + Nr[324], Rf = Nr[325], Mf = Nr[23] + Nr[326], Df = Nr[288] + Nr[89] + Nr[244], Pf = Nr[327] + Nr[21] + Nr[328], Nf = Nr[329], jf = Nr[330], Bf = Nr[271] + Nr[16] + Nr[252] + Nr[54] + Nr[331], $f = Nr[45] + Nr[16] + Nr[252] + Nr[54] + Nr[331], Ff = Nr[332], Gf = Nr[52] + Nr[333] + Nr[54] + Nr[334], zf = Nr[335] + Nr[97], Yf = Nr[335] + Nr[113], Hf = Nr[202], qf = Nr[336] + Nr[115] + Nr[337] + Nr[338] + Nr[339], Wf = Nr[340], Uf = Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[338] + Nr[341] + Nr[84] + Nr[38] + Nr[342], Xf = Nr[343], Vf = Nr[344], Zf = Nr[345], Kf = Nr[186] + Nr[59] + Nr[346] + Nr[347] + Nr[61], Jf = Nr[348] + Nr[2] + Nr[80], Qf = Nr[20] + Nr[338] + Nr[349], tc = Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[338] + Nr[341], ic = Nr[58] + Nr[59] + Nr[260] + Nr[350] + Nr[260] + Nr[350] + Nr[260] + Nr[350] + Nr[260] + Nr[61], ec = Nr[351], nc = Nr[352], sc = Nr[353], rc = Nr[354] + Nr[355], hc = Nr[356] + Nr[66] + Nr[357] + Nr[66] + Nr[310], ac = Nr[356] + Nr[66] + Nr[357] + Nr[66] + Nr[311], oc = Nr[260] + Nr[146], _c = Nr[358], fc = Nr[359], cc = Nr[96] + Nr[182] + Nr[183], uc = Nr[360], dc = Nr[361] + Nr[105] + Nr[362], lc = Nr[173] + Nr[115] + Nr[363], vc = Nr[364] + Nr[66] + Nr[365], bc = Nr[45] + Nr[178] + Nr[179] + Nr[366], gc = Nr[203] + Nr[367] + Nr[368], yc = Nr[102] + Nr[2] + Nr[369], pc = Nr[370], Ec = Nr[57], mc = Nr[161] + Nr[18] + Nr[371], xc = Nr[161] + Nr[115] + Nr[160], Tc = Nr[361] + Nr[115] + Nr[372], wc = Nr[361] + Nr[54] + Nr[373], Oc = Nr[374], kc = Nr[361], Sc = Nr[154] + Nr[94] + Nr[375], Ic = Nr[376], Ac = Nr[377] + Nr[89] + Nr[273], Lc = Nr[378] + Nr[84] + Nr[379], Cc = Nr[380], Rc = Nr[381], Mc = Nr[382], Dc = Nr[383] + Nr[105] + Nr[194], Pc = Nr[384] + Nr[66] + Nr[209] + Nr[66] + Nr[385], Nc = Nr[173] + Nr[21] + Nr[386], jc = Nr[348] + Nr[338] + Nr[194] + Nr[174] + Nr[387], Bc = Nr[84], $c = Nr[271], Fc = Nr[348] + Nr[54] + Nr[331] + Nr[174] + Nr[387], Gc = Nr[383] + Nr[105] + Nr[388] + Nr[338] + Nr[389], zc = Nr[248] + Nr[54] + Nr[249] + Nr[13] + Nr[390] + Nr[54] + Nr[331], Yc = Nr[391], Hc = Nr[392] + Nr[16] + Nr[263], qc = Nr[393], Wc = Nr[394], Uc = Nr[273] + Nr[94] + Nr[395] + Nr[16] + Nr[17] + Nr[18] + Nr[19], Xc = Nr[37] + Nr[16] + Nr[17] + Nr[18] + Nr[19], Vc = Nr[148] + Nr[2] + Nr[396] + Nr[16] + Nr[17] + Nr[18] + Nr[19], Zc = Nr[83] + Nr[2] + Nr[396] + Nr[16] + Nr[17] + Nr[18] + Nr[19], Kc = Nr[63] + Nr[397], Jc = Nr[398], Qc = Nr[399] + Nr[66] + Nr[296], tu = Nr[399] + Nr[66] + Nr[400], iu = Nr[146] + Nr[26], eu = Nr[401] + Nr[59], nu = Nr[60] + Nr[260] + Nr[60] + Nr[260] + Nr[60], su = Nr[128] + Nr[402] + Nr[26] + Nr[403], ru = Nr[23] + Nr[38] + Nr[104] + Nr[174] + Nr[158], hu = Nr[332] + Nr[38] + Nr[104] + Nr[174] + Nr[158], au = Nr[45] + Nr[178] + Nr[404], ou = Nr[45] + Nr[254] + Nr[405] + Nr[2] + Nr[406], _u = Nr[407] + Nr[2] + Nr[80], fu = Nr[407] + Nr[54] + Nr[155] + Nr[2] + Nr[80], cu = Nr[408] + Nr[89] + Nr[244], uu = Nr[409] + Nr[338] + Nr[349], du = Nr[159], lu = Nr[35] + Nr[144] + Nr[59], vu = Nr[350], bu = Nr[410], gu = Nr[338] + Nr[411] + Nr[338], yu = Nr[115] + Nr[160] + Nr[59], pu = Nr[170] + Nr[94] + Nr[95], Eu = Nr[412] + Nr[66] + Nr[413], mu = Nr[414], xu = Nr[415] + Nr[338] + Nr[349], Tu = Nr[416], wu = Nr[417], Ou = Nr[418], ku = Nr[419], Su = Nr[420], Iu = Nr[311] + Nr[66] + Nr[310], Au = Nr[421] + Nr[66] + Nr[422], Lu = Nr[306] + Nr[66] + Nr[423], Cu = Nr[306] + Nr[66] + Nr[422], Ru = Nr[424], Mu = Nr[425], Du = Nr[201] + Nr[426], Pu = Nr[350] + Nr[185] + Nr[426], Nu = Nr[350] + Nr[381] + Nr[426], ju = Nr[427] + Nr[68] + Nr[428], Bu = Nr[350] + Nr[427] + Nr[338] + Nr[349] + Nr[426], $u = Nr[350] + Nr[429] + Nr[32] + Nr[33] + Nr[426], Fu = Nr[350] + Nr[290] + Nr[426], Gu = Nr[427] + Nr[338] + Nr[349], zu = Nr[429] + Nr[32] + Nr[33], Yu = Nr[429] + Nr[174] + Nr[238], Hu = Nr[23] + Nr[2] + Nr[80] + Nr[174] + Nr[238], qu = Nr[430] + Nr[68] + Nr[143], Wu = Nr[430] + Nr[68] + Nr[9], Uu = Nr[430], Xu = Nr[430] + Nr[68] + Nr[12], Vu = Nr[79] + Nr[54] + Nr[55], Zu = Nr[431], Ku = Nr[432], Ju = Nr[433], Qu = Nr[9] + Nr[21] + Nr[434], td = Nr[435], id = Nr[350] + Nr[180] + Nr[426], ed = Nr[350] + Nr[12] + Nr[426], nd = Nr[350] + Nr[429] + Nr[174] + Nr[238] + Nr[426], sd = Nr[436] + Nr[66] + Nr[437], rd = Nr[436] + Nr[66] + Nr[438] + Nr[66] + Nr[439], hd = Nr[12] + Nr[68] + Nr[428], ad = Nr[79] + Nr[35] + Nr[440] + Nr[2] + Nr[441], od = Nr[45] + Nr[2] + Nr[3], _d = Nr[79] + Nr[2] + Nr[3] + Nr[2] + Nr[442], fd = Nr[436] + Nr[66] + Nr[443], cd = Nr[66] + Nr[444], ud = Nr[66] + Nr[445], dd = Nr[446], ld = Nr[435] + Nr[2] + Nr[447] + Nr[178] + Nr[448], vd = Nr[361] + Nr[2] + Nr[447] + Nr[178] + Nr[448], bd = Nr[180] + Nr[2] + Nr[447] + Nr[178] + Nr[448], gd = Nr[143] + Nr[21] + Nr[434], yd = Nr[53] + Nr[178] + Nr[179] + Nr[35] + Nr[51] + Nr[2] + Nr[447], pd = Nr[430] + Nr[174] + Nr[238] + Nr[2] + Nr[447] + Nr[178] + Nr[448], Ed = Nr[52] + Nr[270], md = Nr[449], xd = Nr[267] + Nr[2] + Nr[447] + Nr[178] + Nr[448], Td = Nr[180] + Nr[450], wd = Nr[451], Od = Nr[452], kd = Nr[89] + Nr[172], Sd = Nr[154] + Nr[35] + Nr[453], Id = Nr[154] + Nr[89] + Nr[165] + Nr[338] + Nr[194], Ad = Nr[454] + Nr[367] + Nr[455], Ld = Nr[256] + Nr[84] + Nr[456], Cd = Nr[457], Rd = Nr[458], Md = Nr[143] + Nr[54] + Nr[55] + Nr[21] + Nr[434], Dd = Nr[459] + Nr[178] + Nr[460], Pd = Nr[461] + Nr[66] + Nr[462] + Nr[66] + Nr[111], Nd = Nr[463] + Nr[106] + Nr[115] + Nr[464], jd = Nr[60] + Nr[465] + Nr[60] + Nr[123] + Nr[60] + Nr[466] + Nr[60] + Nr[121] + Nr[60] + Nr[467], Bd = Nr[60] + Nr[468] + Nr[60] + Nr[469] + Nr[60] + Nr[470] + Nr[60] + Nr[471], $d = Nr[472], Fd = Nr[473], Gd = Nr[474], zd = Nr[23] + Nr[2] + Nr[475] + Nr[115] + Nr[476], Yd = Nr[477], Hd = Nr[478], qd = Nr[79] + Nr[2] + Nr[442], Wd = Nr[158] + Nr[115] + Nr[479], Ud = Nr[480], Xd = Nr[481], Vd = Nr[84] + Nr[148] + Nr[84] + Nr[482] + Nr[84] + Nr[483], Zd = Nr[84] + Nr[148] + Nr[84] + Nr[482] + Nr[84] + Nr[484], Kd = Nr[84] + Nr[148] + Nr[84] + Nr[485], Jd = Nr[84] + Nr[148] + Nr[84] + Nr[486], Qd = Nr[84] + Nr[236] + Nr[84] + Nr[482] + Nr[84] + Nr[483], tl = Nr[84] + Nr[236] + Nr[84] + Nr[482] + Nr[84] + Nr[484], il = Nr[84] + Nr[236] + Nr[84] + Nr[485], el = Nr[84] + Nr[236] + Nr[84] + Nr[486], nl = Nr[487], sl = Nr[272], rl = Nr[488] + Nr[59] + Nr[180] + Nr[457] + Nr[203] + Nr[367] + Nr[489] + Nr[490] + Nr[491] + Nr[492] + Nr[60] + Nr[493] + Nr[494] + Nr[495] + Nr[260] + Nr[496] + Nr[497] + Nr[498] + Nr[499] + Nr[500] + Nr[501] + Nr[502] + Nr[14] + Nr[287] + Nr[367] + Nr[188] + Nr[499] + Nr[503] + Nr[420] + Nr[157] + Nr[504] + Nr[260] + Nr[158] + Nr[157] + Nr[18] + Nr[104] + Nr[505] + Nr[188] + Nr[493] + Nr[506] + Nr[420] + Nr[507] + Nr[175] + Nr[508] + Nr[416] + Nr[509] + Nr[510] + Nr[511] + Nr[512] + Nr[513] + Nr[338] + Nr[514] + Nr[367] + Nr[35] + Nr[515] + Nr[35] + Nr[495] + Nr[105] + Nr[516] + Nr[517] + Nr[14] + Nr[518] + Nr[104] + Nr[519] + Nr[175] + Nr[367] + Nr[520] + Nr[521] + Nr[522] + Nr[523] + Nr[513] + Nr[16] + Nr[524] + Nr[228] + Nr[501] + Nr[97] + Nr[525] + Nr[526] + Nr[527] + Nr[528] + Nr[419] + Nr[529] + Nr[495] + Nr[261] + Nr[2] + Nr[530] + Nr[531] + Nr[416] + Nr[16] + Nr[261] + Nr[104] + Nr[16] + Nr[525] + Nr[532] + Nr[125] + Nr[499] + Nr[113] + Nr[495] + Nr[38] + Nr[533] + Nr[534] + Nr[535] + Nr[536] + Nr[537] + Nr[538] + Nr[501] + Nr[539] + Nr[501] + Nr[540] + Nr[287] + Nr[499] + Nr[367] + Nr[525] + Nr[541] + Nr[542] + Nr[543] + Nr[544] + Nr[510] + Nr[545] + Nr[546] + Nr[287] + Nr[26] + Nr[287] + Nr[60] + Nr[487], hl = Nr[547] + Nr[13] + Nr[390], al = Nr[547] + Nr[174] + Nr[175], ol = Nr[548], _l = Nr[66] + Nr[549], fl = Nr[260] + Nr[68] + Nr[260], cl = Nr[173] + Nr[550], ul = Nr[94] + Nr[95], dl = Nr[54] + Nr[55], ll = Nr[35] + Nr[51] + Nr[2] + Nr[447] + Nr[54] + Nr[55], vl = Nr[178] + Nr[448], bl = Nr[139] + Nr[129], gl = Nr[551] + Nr[178] + Nr[552], yl = Nr[553], pl = Nr[231] + Nr[68] + Nr[554], El = Nr[231], ml = Nr[555], xl = Nr[556], Tl = Nr[556] + Nr[68] + Nr[557], wl = Nr[556] + Nr[68] + Nr[32], Ol = Nr[558], kl = Nr[558] + Nr[68] + Nr[557], Sl = Nr[558] + Nr[68] + Nr[32], Il = Nr[558] + Nr[68] + Nr[557] + Nr[68] + Nr[32], Al = Nr[558] + Nr[68] + Nr[32] + Nr[68] + Nr[557], Ll = Nr[559] + Nr[68] + Nr[102], Cl = Nr[559] + Nr[68] + Nr[198], Rl = Nr[559] + Nr[68] + Nr[75], Ml = Nr[559] + Nr[68] + Nr[73], Dl = Nr[560], Pl = Nr[561], Nl = Nr[554], jl = Nr[562], Bl = Nr[563], $l = Nr[564], Fl = Nr[565], Gl = Nr[566], zl = Nr[567], Yl = Nr[568], Hl = Nr[569], ql = Nr[570], Wl = Nr[571], Ul = Nr[572], Xl = Nr[573], Vl = Nr[574], Zl = Nr[575], Kl = Nr[576] + Nr[68] + Nr[577], Jl = Nr[576] + Nr[68] + Nr[261], Ql = Nr[576] + Nr[68] + Nr[157], tv = Nr[576] + Nr[68] + Nr[262], iv = Nr[576] + Nr[68] + Nr[525], ev = Nr[576] + Nr[68] + Nr[510], nv = Nr[576] + Nr[68] + Nr[286], sv = Nr[576] + Nr[68] + Nr[578], rv = Nr[576] + Nr[68] + Nr[287], hv = Nr[576] + Nr[68] + Nr[136], av = Nr[579] + Nr[66] + Nr[580] + Nr[66] + Nr[293] + Nr[66] + Nr[581], ov = Nr[582], _v = Nr[579] + Nr[66] + Nr[580] + Nr[66] + Nr[293] + Nr[66] + Nr[583], fv = Nr[584], cv = Nr[579] + Nr[66] + Nr[585] + Nr[66] + Nr[293] + Nr[66] + Nr[586], uv = Nr[587], dv = Nr[588] + Nr[66] + Nr[293], lv = Nr[588] + Nr[66] + Nr[293] + Nr[66] + Nr[589], vv = Nr[588] + Nr[66] + Nr[590], bv = Nr[588] + Nr[66] + Nr[589] + Nr[66] + Nr[591], gv = Nr[109] + Nr[66] + Nr[592], yv = Nr[285] + Nr[66] + Nr[400], pv = Nr[579] + Nr[66] + Nr[593], Ev = Nr[216], mv = Nr[594] + Nr[2] + Nr[595] + Nr[89] + Nr[273], xv = Nr[412] + Nr[66] + Nr[596] + Nr[66] + Nr[597], Tv = Nr[9] + Nr[2] + Nr[80], wv = Nr[174] + Nr[177] + Nr[26] + Nr[139] + Nr[26] + Nr[71] + Nr[204], Ov = Nr[598], kv = Nr[599], Sv = Nr[600], Iv = Nr[601], Av = Nr[267] + Nr[338] + Nr[194], Lv = Nr[357] + Nr[66] + Nr[412] + Nr[66] + Nr[400], Cv = Nr[602] + Nr[115] + Nr[297], Rv = Nr[63] + Nr[603], Mv = Nr[602], Dv = Nr[604], Pv = Nr[454] + Nr[38] + Nr[605], Nv = Nr[606], jv = Nr[63] + Nr[607], Bv = Nr[398] + Nr[26], $v = Nr[608] + Nr[115] + Nr[297], Fv = Nr[63] + Nr[609], Gv = Nr[608] + Nr[89] + Nr[165], zv = Nr[63] + Nr[610], Yv = Nr[602] + Nr[89] + Nr[165], Hv = Nr[555] + Nr[2] + Nr[611], qv = Nr[555] + Nr[13] + Nr[100] + Nr[97], Wv = Nr[555] + Nr[13] + Nr[100] + Nr[113], Uv = Nr[21] + Nr[612] + Nr[613], Xv = Nr[614] + Nr[2] + Nr[611], Vv = Nr[54] + Nr[615] + Nr[613], Zv = Nr[202] + Nr[174] + Nr[177], Kv = Nr[163] + Nr[115] + Nr[479], Jv = Nr[203], Qv = Nr[139], tb = Nr[23] + Nr[16] + Nr[616] + Nr[174] + Nr[617], ib = Nr[618] + Nr[66] + Nr[293] + Nr[66] + Nr[619], eb = Nr[618] + Nr[66] + Nr[293] + Nr[66] + Nr[213], nb = Nr[620], sb = Nr[621], rb = Nr[154] + Nr[21] + Nr[622] + Nr[228] + Nr[229], hb = Nr[154] + Nr[94] + Nr[623] + Nr[228] + Nr[229], ab = Nr[143] + Nr[2] + Nr[611] + Nr[115] + Nr[102], ob = Nr[213] + Nr[66] + Nr[618] + Nr[66] + Nr[304], _b = Nr[619] + Nr[66] + Nr[618], fb = Nr[624] + Nr[66] + Nr[213] + Nr[66] + Nr[618], cb = Nr[624] + Nr[66] + Nr[619] + Nr[66] + Nr[618], ub = Nr[530], db = Nr[411], lb = Nr[527], vb = Nr[625] + Nr[66] + Nr[626] + Nr[66] + Nr[627], bb = Nr[625] + Nr[66] + Nr[628] + Nr[66] + Nr[627], gb = Nr[625] + Nr[66] + Nr[629], yb = Nr[173] + Nr[338] + Nr[630], pb = Nr[45] + Nr[131], Eb = Nr[361] + Nr[115] + Nr[631] + Nr[13] + Nr[100] + Nr[97], mb = Nr[588] + Nr[66] + Nr[293] + Nr[66] + Nr[632], xb = Nr[361] + Nr[38] + Nr[633], Tb = Nr[608], wb = Nr[181] + Nr[2] + Nr[634], Ob = Nr[181] + Nr[635] + Nr[636], kb = Nr[637], Sb = Nr[637] + Nr[115] + Nr[297], Ib = Nr[638], Ab = Nr[208] + Nr[66] + Nr[209] + Nr[66] + Nr[639], Lb = Nr[640], Cb = Nr[641] + Nr[68] + Nr[642], Rb = Nr[643] + Nr[68] + Nr[642], Mb = Nr[208] + Nr[66] + Nr[209] + Nr[66] + Nr[644], Db = Nr[645], Pb = Nr[122], Nb = Nr[646], jb = Nr[647], Bb = Nr[58] + Nr[59] + Nr[260] + Nr[60] + Nr[260] + Nr[60] + Nr[260] + Nr[60] + Nr[260] + Nr[61], $b = Nr[648], Fb = Nr[63] + Nr[261] + Nr[2] + Nr[286] + Nr[38] + Nr[188] + Nr[178], Gb = Nr[63] + Nr[649], zb = Nr[63] + Nr[650] + Nr[54] + Nr[287] + Nr[38], Yb = Nr[63] + Nr[651] + Nr[38] + Nr[652], Hb = Nr[63] + Nr[651] + Nr[16] + Nr[653], qb = Nr[63] + Nr[654] + Nr[2] + Nr[655], Wb = Nr[63] + Nr[656], Ub = Nr[63] + Nr[261] + Nr[178] + Nr[286] + Nr[2] + Nr[188] + Nr[18], Xb = Nr[63] + Nr[657] + Nr[38] + Nr[260], Vb = Nr[63] + Nr[658] + Nr[659], Zb = Nr[63] + Nr[261] + Nr[18] + Nr[286] + Nr[660] + Nr[157], Kb = Nr[63] + Nr[651] + Nr[16] + Nr[661], Jb = Nr[63] + Nr[662], Qb = Nr[663] + Nr[2] + Nr[595] + Nr[89] + Nr[273], tg = Nr[63] + Nr[157] + Nr[513] + Nr[287] + Nr[664], ig = Nr[665] + Nr[35] + Nr[184], eg = Nr[63] + Nr[666], ng = Nr[667], sg = Nr[587] + Nr[21] + Nr[668], rg = Nr[63] + Nr[669] + Nr[178] + Nr[655], hg = Nr[63] + Nr[670], ag = Nr[63] + Nr[261] + Nr[18] + Nr[671] + Nr[16] + Nr[525], og = Nr[63] + Nr[672] + Nr[673] + Nr[157], _g = Nr[63] + Nr[674] + Nr[675], fg = Nr[63] + Nr[261] + Nr[54] + Nr[286] + Nr[676] + Nr[260], cg = Nr[63] + Nr[677], ug = Nr[63] + Nr[14] + Nr[578] + Nr[14] + Nr[287] + Nr[14] + Nr[287], dg = Nr[63] + Nr[286] + Nr[16] + Nr[678], lg = Nr[63] + Nr[525] + Nr[18] + Nr[525] + Nr[2] + Nr[525] + Nr[38], vg = Nr[63] + Nr[679], bg = Nr[63] + Nr[680], gg = Nr[63] + Nr[286] + Nr[18] + Nr[286] + Nr[54] + Nr[286] + Nr[18], yg = Nr[63] + Nr[525] + Nr[2] + Nr[681], pg = Nr[63] + Nr[682], Eg = Nr[63] + Nr[578] + Nr[178] + Nr[578] + Nr[178] + Nr[578] + Nr[178], mg = Nr[63] + Nr[683], xg = Nr[63] + Nr[684], Tg = Nr[63] + Nr[685], wg = Nr[63] + Nr[188] + Nr[54] + Nr[188] + Nr[178] + Nr[188] + Nr[178], Og = Nr[63] + Nr[16] + Nr[578] + Nr[16] + Nr[510] + Nr[16] + Nr[525], kg = Nr[63] + Nr[16] + Nr[188] + Nr[16] + Nr[286] + Nr[16] + Nr[510], Sg = Nr[63] + Nr[16] + Nr[578] + Nr[16] + Nr[525] + Nr[16] + Nr[262], Ig = Nr[63] + Nr[686], Ag = Nr[63] + Nr[54] + Nr[188] + Nr[687], Lg = Nr[63] + Nr[188] + Nr[688] + Nr[260] + Nr[411] + Nr[260], Cg = Nr[63] + Nr[417] + Nr[188] + Nr[689], Rg = Nr[63] + Nr[262] + Nr[513] + Nr[262] + Nr[411] + Nr[690], Mg = Nr[63] + Nr[38] + Nr[157] + Nr[691], Dg = Nr[63] + Nr[157] + Nr[54] + Nr[287] + Nr[692], Pg = Nr[693] + Nr[16] + Nr[694], Ng = Nr[63] + Nr[695], jg = Nr[63] + Nr[420] + Nr[510] + Nr[420] + Nr[510] + Nr[420] + Nr[286], Bg = Nr[298] + Nr[84], $g = Nr[696], Fg = Nr[697], Gg = Nr[698] + Nr[38] + Nr[699], zg = Nr[698] + Nr[38] + Nr[700], Yg = Nr[698], Hg = Nr[698] + Nr[254] + Nr[701], qg = Nr[174] + Nr[264] + Nr[26] + Nr[702] + Nr[26] + Nr[703] + Nr[68], Wg = Nr[704], Ug = Nr[705], Xg = Nr[338] + Nr[706] + Nr[26] + Nr[411] + Nr[26] + Nr[705] + Nr[26] + Nr[707] + Nr[68], Vg = Nr[708], Zg = Nr[709] + Nr[16] + Nr[710] + Nr[94] + Nr[152], Kg = Nr[239] + Nr[18] + Nr[711], Jg = Nr[239] + Nr[115] + Nr[160], Qg = Nr[712], ty = Nr[713], iy = Nr[714] + Nr[105] + Nr[715], ey = Nr[716], ny = Nr[717], sy = Nr[718], ry = Nr[719], hy = Nr[720], ay = Nr[721], oy = Nr[722], _y = Nr[723], fy = Nr[724], cy = Nr[725], uy = Nr[726], dy = Nr[165] + Nr[89] + Nr[244], ly = Nr[727], vy = Nr[728] + Nr[18] + Nr[711], by = Nr[728], gy = Nr[728] + Nr[115] + Nr[160], yy = Nr[729] + Nr[105] + Nr[483] + Nr[2] + Nr[194] + Nr[115] + Nr[160], py = Nr[271] + Nr[2] + Nr[730] + Nr[2] + Nr[194], Ey = Nr[165], my = Nr[731], xy = Nr[254] + Nr[732] + Nr[26] + Nr[733] + Nr[426] + Nr[260] + Nr[734], Ty = Nr[735], wy = Nr[467], Oy = Nr[708] + Nr[125] + Nr[126], ky = Nr[736] + Nr[2] + Nr[194], Sy = Nr[162] + Nr[32] + Nr[737] + Nr[204], Iy = Nr[738], Ay = Nr[162] + Nr[35] + Nr[739] + Nr[26] + Nr[178] + Nr[740] + Nr[204], Ly = Nr[741] + Nr[178] + Nr[740], Cy = Nr[742], Ry = Nr[743], My = Nr[14] + Nr[744] + Nr[420] + Nr[525] + Nr[513] + Nr[745] + Nr[746] + Nr[578] + Nr[411] + Nr[747] + Nr[513] + Nr[748] + Nr[417] + Nr[262] + Nr[749] + Nr[188] + Nr[750] + Nr[751] + Nr[752] + Nr[753] + Nr[754] + Nr[260] + Nr[420] + Nr[510] + Nr[14] + Nr[755] + Nr[411] + Nr[756] + Nr[757] + Nr[758] + Nr[420] + Nr[578] + Nr[759] + Nr[262] + Nr[411] + Nr[760] + Nr[761] + Nr[762] + Nr[417] + Nr[188] + Nr[420] + Nr[763] + Nr[411] + Nr[157] + Nr[764] + Nr[765] + Nr[766] + Nr[767] + Nr[768] + Nr[157] + Nr[769] + Nr[770] + Nr[60] + Nr[771] + Nr[261] + Nr[411] + Nr[772] + Nr[158] + Nr[773] + Nr[411] + Nr[774] + Nr[14] + Nr[775] + Nr[776] + Nr[777] + Nr[778] + Nr[779] + Nr[780] + Nr[525] + Nr[781] + Nr[782] + Nr[783] + Nr[784] + Nr[411] + Nr[578] + Nr[785] + Nr[262] + Nr[417] + Nr[260] + Nr[786] + Nr[787] + Nr[788] + Nr[789] + Nr[513] + Nr[762] + Nr[790] + Nr[791] + Nr[158] + Nr[792] + Nr[513] + Nr[793] + Nr[776] + Nr[157] + Nr[417] + Nr[794] + Nr[513] + Nr[188] + Nr[795] + Nr[796] + Nr[797] + Nr[798] + Nr[785] + Nr[188] + Nr[411] + Nr[799] + Nr[800] + Nr[653] + Nr[801] + Nr[260] + Nr[802] + Nr[803] + Nr[411] + Nr[804] + Nr[513] + Nr[525], Dy = Nr[162] + Nr[21] + Nr[805] + Nr[26] + Nr[45] + Nr[426], Py = Nr[355] + Nr[806] + Nr[807] + Nr[355] + Nr[262] + Nr[16] + Nr[355] + Nr[806] + Nr[808] + Nr[68] + Nr[256] + Nr[68] + Nr[718] + Nr[355] + Nr[157] + Nr[2] + Nr[809] + Nr[68] + Nr[256] + Nr[68] + Nr[718], Ny = Nr[810], jy = Nr[811], By = Nr[812], $y = Nr[159] + Nr[89], Fy = Nr[813], Gy = Nr[578] + Nr[68], zy = Nr[814], Yy = Nr[240], Hy = Nr[815], qy = Nr[2] + Nr[369], Wy = Nr[94] + Nr[816], Uy = Nr[2] + Nr[817], Xy = Nr[818], Vy = Nr[819], Zy = Nr[154], Ky = Nr[820], Jy = Nr[821], Qy = Nr[822], tp = Nr[823], ip = Nr[824], ep = Nr[825], np = Nr[826], sp = Nr[827], rp = Nr[828], hp = Nr[298] + Nr[829], ap = Nr[26] + Nr[248] + Nr[26] + Nr[830] + Nr[510], op = Nr[831], _p = Nr[832], fp = Nr[833] + Nr[182] + Nr[834], cp = Nr[835], up = Nr[836] + Nr[68] + Nr[837] + Nr[68] + Nr[261], dp = Nr[54] + Nr[155], lp = Nr[349], vp = Nr[838], bp = Nr[839] + Nr[182] + Nr[834], gp = Nr[178] + Nr[740], yp = Nr[840], pp = Nr[165] + Nr[157] + Nr[178], Ep = Nr[416] + Nr[89] + Nr[165], mp = Nr[841] + Nr[54] + Nr[155], xp = Nr[427] + Nr[89] + Nr[244], Tp = Nr[1] + Nr[54] + Nr[331], wp = Nr[222] + Nr[32] + Nr[842], Op = Nr[301], kp = Nr[222], Sp = Nr[52] + Nr[56], Ip = Nr[298] + Nr[68] + Nr[54] + Nr[155], Ap = Nr[301] + Nr[2] + Nr[843], Lp = Nr[527] + Nr[174] + Nr[238], Cp = Nr[298] + Nr[68] + Nr[54] + Nr[331], Rp = Nr[271] + Nr[16] + Nr[263], Mp = Nr[23] + Nr[54] + Nr[331] + Nr[38] + Nr[844], Dp = Nr[845], Pp = Nr[846] + Nr[68] + Nr[847], Np = Nr[848] + Nr[35] + Nr[184] + Nr[2] + Nr[447], jp = Nr[45], Bp = Nr[333] + Nr[54] + Nr[334], $p = Nr[298] + Nr[84] + Nr[408], Fp = Nr[52] + Nr[849] + Nr[35] + Nr[77], Gp = Nr[248] + Nr[54] + Nr[249] + Nr[54] + Nr[331], zp = Nr[1] + Nr[21] + Nr[850], Yp = Nr[52] + Nr[851], Hp = Nr[851], qp = Nr[218], Wp = Nr[1] + Nr[18] + Nr[852], Up = Nr[45] + Nr[18] + Nr[852], Xp = Nr[298] + Nr[68] + Nr[338] + Nr[194], Vp = Nr[853] + Nr[68] + Nr[143], Zp = Nr[853] + Nr[68] + Nr[9], Kp = Nr[854], Jp = Nr[849] + Nr[35] + Nr[77], Qp = Nr[52] + Nr[846], tE = Nr[855] + Nr[66] + Nr[856], iE = Nr[285] + Nr[66] + Nr[627], eE = Nr[298] + Nr[68] + Nr[115] + Nr[857] + Nr[338] + Nr[194], nE = Nr[846], sE = Nr[298] + Nr[68] + Nr[38] + Nr[858], rE = Nr[38] + Nr[858], hE = Nr[41] + Nr[338] + Nr[194], aE = Nr[383] + Nr[115] + Nr[337] + Nr[338] + Nr[339], oE = Nr[859] + Nr[66] + Nr[293], _E = Nr[859] + Nr[66] + Nr[860], fE = Nr[52] + Nr[197], cE = Nr[52] + Nr[166] + Nr[115] + Nr[160], uE = Nr[859] + Nr[66] + Nr[861] + Nr[66] + Nr[400], dE = Nr[298] + Nr[68] + Nr[228] + Nr[862], lE = Nr[863], vE = Nr[166] + Nr[115] + Nr[160], bE = Nr[864] + Nr[89] + Nr[244], gE = Nr[864] + Nr[174] + Nr[177], yE = Nr[298] + Nr[68] + Nr[89] + Nr[165], pE = Nr[89] + Nr[165], EE = Nr[222] + Nr[178] + Nr[179], mE = Nr[63] + Nr[865], xE = Nr[361] + Nr[89] + Nr[244], TE = Nr[361] + Nr[2] + Nr[611], wE = Nr[555] + Nr[38] + Nr[866], OE = Nr[361] + Nr[115] + Nr[631] + Nr[38] + Nr[866], kE = Nr[602] + Nr[94] + Nr[95], SE = Nr[608] + Nr[94] + Nr[95], IE = Nr[867] + Nr[115] + Nr[868], AE = Nr[869], LE = Nr[867] + Nr[115] + Nr[868] + Nr[115] + Nr[870], CE = Nr[52] + Nr[871], RE = Nr[216] + Nr[97], ME = Nr[216] + Nr[113], DE = Nr[52] + Nr[222] + Nr[178] + Nr[179], PE = Nr[52] + Nr[227] + Nr[2] + Nr[611], NE = Nr[52] + Nr[227] + Nr[228] + Nr[229], jE = Nr[164], BE = Nr[79] + Nr[38] + Nr[193] + Nr[2] + Nr[441], $E = Nr[52] + Nr[222] + Nr[21] + Nr[872], FE = Nr[52] + Nr[222] + Nr[32] + Nr[842], GE = Nr[873], zE = Nr[79] + Nr[178] + Nr[179] + Nr[2] + Nr[441], YE = Nr[32] + Nr[842], HE = Nr[21] + Nr[872], qE = Nr[16] + Nr[221] + Nr[35] + Nr[144], WE = Nr[115] + Nr[160], UE = Nr[874] + Nr[66] + Nr[875], XE = Nr[38] + Nr[876] + Nr[228] + Nr[229], VE = Nr[588] + Nr[66] + Nr[632], ZE = Nr[94] + Nr[219], KE = Nr[178] + Nr[179], JE = Nr[173] + Nr[16] + Nr[877], QE = Nr[427], tm = Nr[361] + Nr[68] + Nr[641], im = Nr[361] + Nr[68] + Nr[231], em = Nr[361] + Nr[68] + Nr[185], nm = Nr[614] + Nr[68] + Nr[641], sm = Nr[878] + Nr[66] + Nr[211] + Nr[66] + Nr[208] + Nr[66] + Nr[209], rm = Nr[871], hm = Nr[589] + Nr[66] + Nr[591], am = Nr[555] + Nr[68] + Nr[879], om = Nr[589] + Nr[66] + Nr[211], _m = Nr[555] + Nr[68] + Nr[641], fm = Nr[555] + Nr[68] + Nr[216] + Nr[68] + Nr[734], cm = Nr[555] + Nr[68] + Nr[216] + Nr[68] + Nr[104], um = Nr[278] + Nr[66] + Nr[880], dm = Nr[881] + Nr[68] + Nr[608], lm = Nr[881] + Nr[68] + Nr[608] + Nr[68] + Nr[85], vm = Nr[881] + Nr[68] + Nr[181] + Nr[68] + Nr[882], bm = Nr[278] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], gm = Nr[278] + Nr[66] + Nr[885] + Nr[66] + Nr[211], ym = Nr[881] + Nr[68] + Nr[602] + Nr[68] + Nr[641], pm = Nr[278] + Nr[66] + Nr[885] + Nr[66] + Nr[618], Em = Nr[881] + Nr[68] + Nr[602] + Nr[68] + Nr[886], mm = Nr[881] + Nr[68] + Nr[637], xm = Nr[881] + Nr[68] + Nr[637] + Nr[68] + Nr[85], Tm = Nr[181] + Nr[68] + Nr[887], wm = Nr[579] + Nr[66] + Nr[585], Om = Nr[181] + Nr[68] + Nr[250], km = Nr[220] + Nr[68] + Nr[888] + Nr[68] + Nr[846], Sm = Nr[227] + Nr[68] + Nr[641], Im = Nr[227] + Nr[68] + Nr[886], Am = Nr[632], Lm = Nr[231] + Nr[68] + Nr[140], Cm = Nr[632] + Nr[66] + Nr[211], Rm = Nr[231] + Nr[68] + Nr[641], Mm = Nr[231] + Nr[68] + Nr[181] + Nr[68] + Nr[882], Dm = Nr[632] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], Pm = Nr[231] + Nr[68] + Nr[424], Nm = Nr[860], jm = Nr[357] + Nr[66] + Nr[889] + Nr[66] + Nr[211], Bm = Nr[203] + Nr[68] + Nr[231] + Nr[68] + Nr[140], $m = Nr[357] + Nr[66] + Nr[632] + Nr[66] + Nr[211], Fm = Nr[203] + Nr[68] + Nr[231] + Nr[68] + Nr[85], Gm = Nr[357] + Nr[66] + Nr[317], zm = Nr[203] + Nr[68] + Nr[424], Ym = Nr[203] + Nr[68] + Nr[197], Hm = Nr[203] + Nr[68] + Nr[527] + Nr[68] + Nr[12], qm = Nr[357] + Nr[66] + Nr[890], Wm = Nr[203] + Nr[68] + Nr[871], Um = Nr[725] + Nr[68] + Nr[186], Xm = Nr[725] + Nr[68] + Nr[891], Vm = Nr[892] + Nr[66] + Nr[211], Zm = Nr[725] + Nr[68] + Nr[641], Km = Nr[725] + Nr[68] + Nr[161] + Nr[68] + Nr[854], Jm = Nr[725] + Nr[68] + Nr[161] + Nr[68] + Nr[893], Qm = Nr[725] + Nr[68] + Nr[161] + Nr[68] + Nr[85], tx = Nr[892] + Nr[66] + Nr[860], ix = Nr[725] + Nr[68] + Nr[197], ex = Nr[892] + Nr[66] + Nr[874] + Nr[66] + Nr[875], nx = Nr[725] + Nr[68] + Nr[226] + Nr[68] + Nr[140], sx = Nr[892] + Nr[66] + Nr[874], rx = Nr[725] + Nr[68] + Nr[226], hx = Nr[725] + Nr[68] + Nr[424], ax = Nr[892] + Nr[66] + Nr[884] + Nr[66] + Nr[97], ox = Nr[725] + Nr[68] + Nr[216] + Nr[68] + Nr[734], _x = Nr[892] + Nr[66] + Nr[884] + Nr[66] + Nr[113], fx = Nr[725] + Nr[68] + Nr[216] + Nr[68] + Nr[104], cx = Nr[725] + Nr[68] + Nr[854], ux = Nr[892] + Nr[66] + Nr[894] + Nr[66] + Nr[895], dx = Nr[725] + Nr[68] + Nr[896] + Nr[68] + Nr[891], lx = Nr[892] + Nr[66] + Nr[632], vx = Nr[725] + Nr[68] + Nr[231], bx = Nr[892] + Nr[66] + Nr[632] + Nr[66] + Nr[296], gx = Nr[725] + Nr[68] + Nr[231] + Nr[68] + Nr[85], yx = Nr[892] + Nr[66] + Nr[889] + Nr[66] + Nr[618], px = Nr[725] + Nr[68] + Nr[897], Ex = Nr[725] + Nr[68] + Nr[555] + Nr[68] + Nr[879], mx = Nr[892] + Nr[66] + Nr[589] + Nr[66] + Nr[211], xx = Nr[725] + Nr[68] + Nr[555] + Nr[68] + Nr[641], Tx = Nr[725] + Nr[68] + Nr[527] + Nr[68] + Nr[12], wx = Nr[892] + Nr[66] + Nr[898] + Nr[66] + Nr[310], Ox = Nr[725] + Nr[68] + Nr[79] + Nr[68] + Nr[102], kx = Nr[859] + Nr[66] + Nr[889] + Nr[66] + Nr[618], Sx = Nr[864] + Nr[68] + Nr[608], Ix = Nr[859] + Nr[66] + Nr[880] + Nr[66] + Nr[296], Ax = Nr[864] + Nr[68] + Nr[608] + Nr[68] + Nr[641], Lx = Nr[859] + Nr[66] + Nr[880] + Nr[66] + Nr[579] + Nr[66] + Nr[883], Cx = Nr[859] + Nr[66] + Nr[880] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], Rx = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[895], Mx = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[900] + Nr[66] + Nr[895], Dx = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[211], Px = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[399] + Nr[66] + Nr[901], Nx = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[874] + Nr[66] + Nr[875], jx = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[317], Bx = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[884] + Nr[66] + Nr[113], $x = Nr[288] + Nr[68] + Nr[140], Fx = Nr[302] + Nr[66] + Nr[211], Gx = Nr[288] + Nr[68] + Nr[641], zx = Nr[302] + Nr[66] + Nr[902], Yx = Nr[288] + Nr[68] + Nr[637], Hx = Nr[302] + Nr[66] + Nr[902] + Nr[66] + Nr[296], qx = Nr[288] + Nr[68] + Nr[637] + Nr[68] + Nr[85], Wx = Nr[302] + Nr[66] + Nr[579] + Nr[66] + Nr[883], Ux = Nr[288] + Nr[68] + Nr[181] + Nr[68] + Nr[882], Xx = Nr[302] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], Vx = Nr[288] + Nr[68] + Nr[271] + Nr[68] + Nr[216], Zx = Nr[288] + Nr[68] + Nr[45] + Nr[68] + Nr[216], Kx = Nr[288] + Nr[68] + Nr[333] + Nr[68] + Nr[903], Jx = Nr[302] + Nr[66] + Nr[904] + Nr[66] + Nr[905], Qx = Nr[288] + Nr[68] + Nr[906] + Nr[68] + Nr[907], tT = Nr[288] + Nr[68] + Nr[559], iT = Nr[288] + Nr[68] + Nr[908] + Nr[68] + Nr[909], eT = Nr[288] + Nr[68] + Nr[25] + Nr[68] + Nr[910], nT = Nr[302] + Nr[66] + Nr[307] + Nr[66] + Nr[413], sT = Nr[288] + Nr[68] + Nr[25] + Nr[68] + Nr[290], rT = Nr[302] + Nr[66] + Nr[315], hT = Nr[288] + Nr[68] + Nr[911], aT = Nr[288] + Nr[68] + Nr[911] + Nr[68] + Nr[424], oT = Nr[288] + Nr[68] + Nr[271] + Nr[68] + Nr[912] + Nr[68] + Nr[288], _T = Nr[302] + Nr[66] + Nr[627] + Nr[66] + Nr[913] + Nr[66] + Nr[302], fT = Nr[288] + Nr[68] + Nr[45] + Nr[68] + Nr[912] + Nr[68] + Nr[288], cT = Nr[285] + Nr[66] + Nr[914], uT = Nr[576] + Nr[68] + Nr[271], dT = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[854], lT = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[216], vT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[880], bT = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[608], gT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[902], yT = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[637], pT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[902] + Nr[66] + Nr[296], ET = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[181] + Nr[68] + Nr[882], mT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], xT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[885] + Nr[66] + Nr[211], TT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[579] + Nr[66] + Nr[580], wT = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[181] + Nr[68] + Nr[887], OT = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[579] + Nr[66] + Nr[585], kT = Nr[576] + Nr[68] + Nr[271] + Nr[68] + Nr[181] + Nr[68] + Nr[250], ST = Nr[576] + Nr[68] + Nr[45], IT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[854], AT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[216], LT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[608], CT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[637], RT = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[902] + Nr[66] + Nr[296], MT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[181] + Nr[68] + Nr[882], DT = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], PT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[602] + Nr[68] + Nr[641], NT = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[579] + Nr[66] + Nr[580], jT = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[181] + Nr[68] + Nr[887], BT = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[579] + Nr[66] + Nr[585], $T = Nr[576] + Nr[68] + Nr[45] + Nr[68] + Nr[181] + Nr[68] + Nr[250], FT = Nr[588] + Nr[66] + Nr[589] + Nr[66] + Nr[884] + Nr[66] + Nr[97], GT = Nr[892] + Nr[66] + Nr[895], zT = Nr[891], YT = Nr[892] + Nr[66] + Nr[900] + Nr[66] + Nr[895], HT = Nr[641], qT = Nr[231] + Nr[2] + Nr[611], WT = Nr[892] + Nr[66] + Nr[889] + Nr[66] + Nr[211], UT = Nr[227] + Nr[2] + Nr[611], XT = Nr[224] + Nr[13] + Nr[175] + Nr[89] + Nr[915], VT = Nr[589] + Nr[66] + Nr[884] + Nr[66] + Nr[97], ZT = Nr[892] + Nr[66] + Nr[399] + Nr[66] + Nr[901], KT = Nr[161] + Nr[115] + Nr[297], JT = Nr[896] + Nr[35] + Nr[77], QT = Nr[226] + Nr[182] + Nr[183], tw = Nr[892] + Nr[66] + Nr[317], iw = Nr[231] + Nr[94] + Nr[232], ew = Nr[897], nw = Nr[892] + Nr[66] + Nr[589] + Nr[66] + Nr[884] + Nr[66] + Nr[113], sw = Nr[878] + Nr[66] + Nr[211], rw = Nr[614] + Nr[2] + Nr[611] + Nr[38] + Nr[916] + Nr[105] + Nr[194], hw = Nr[66] + Nr[262] + Nr[420], aw = Nr[889] + Nr[66] + Nr[211], ow = Nr[889] + Nr[66] + Nr[618], _w = Nr[632] + Nr[66] + Nr[317], fw = Nr[632] + Nr[66] + Nr[579] + Nr[66] + Nr[883], cw = Nr[231] + Nr[21] + Nr[234] + Nr[178] + Nr[235], uw = Nr[231] + Nr[21] + Nr[234] + Nr[178] + Nr[235] + Nr[13] + Nr[100], dw = Nr[66] + Nr[175] + Nr[753], lw = Nr[278] + Nr[66] + Nr[880] + Nr[66] + Nr[296], vw = Nr[602] + Nr[2] + Nr[611], bw = Nr[278] + Nr[66] + Nr[902], gw = Nr[278] + Nr[66] + Nr[902] + Nr[66] + Nr[296], yw = Nr[602] + Nr[228] + Nr[229], pw = Nr[278] + Nr[66] + Nr[579] + Nr[66] + Nr[883], Ew = Nr[579] + Nr[66] + Nr[580], mw = Nr[917] + Nr[66] + Nr[308] + Nr[66] + Nr[918], xw = Nr[357] + Nr[66] + Nr[889] + Nr[66] + Nr[618], Tw = Nr[357] + Nr[66] + Nr[860], ww = Nr[357] + Nr[66] + Nr[632] + Nr[66] + Nr[317], Ow = Nr[357] + Nr[66] + Nr[632] + Nr[66] + Nr[579] + Nr[66] + Nr[883], kw = Nr[357] + Nr[66] + Nr[504] + Nr[66] + Nr[438], Sw = Nr[919] + Nr[38] + Nr[920], Iw = Nr[66] + Nr[286] + Nr[513], Aw = Nr[859] + Nr[66] + Nr[889] + Nr[66] + Nr[211], Lw = Nr[881], Cw = Nr[859] + Nr[66] + Nr[880], Rw = Nr[66] + Nr[510] + Nr[417], Mw = Nr[271] + Nr[16] + Nr[921], Dw = Nr[45] + Nr[16] + Nr[921], Pw = Nr[302] + Nr[66] + Nr[914] + Nr[66] + Nr[913] + Nr[66] + Nr[302], Nw = Nr[302] + Nr[66] + Nr[914] + Nr[66] + Nr[884], jw = Nr[271] + Nr[16] + Nr[921] + Nr[115] + Nr[160], Bw = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[884], $w = Nr[271] + Nr[16] + Nr[921] + Nr[13] + Nr[100], Fw = Nr[271] + Nr[16] + Nr[921] + Nr[115] + Nr[176], Gw = Nr[271] + Nr[16] + Nr[921] + Nr[115] + Nr[176] + Nr[115] + Nr[297], zw = Nr[271] + Nr[16] + Nr[921] + Nr[13] + Nr[922], Yw = Nr[271] + Nr[16] + Nr[921] + Nr[18] + Nr[923] + Nr[2] + Nr[611], Hw = Nr[285] + Nr[66] + Nr[914] + Nr[66] + Nr[885] + Nr[66] + Nr[618], qw = Nr[271] + Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[178] + Nr[235], Ww = Nr[271] + Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[635] + Nr[636], Uw = Nr[271] + Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[2] + Nr[634], Xw = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[400], Vw = Nr[45] + Nr[16] + Nr[921] + Nr[115] + Nr[160], Zw = Nr[45] + Nr[16] + Nr[921] + Nr[13] + Nr[100], Kw = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[880], Jw = Nr[45] + Nr[16] + Nr[921] + Nr[115] + Nr[176], Qw = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[880] + Nr[66] + Nr[296], tO = Nr[45] + Nr[16] + Nr[921] + Nr[115] + Nr[176] + Nr[115] + Nr[297], iO = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[902], eO = Nr[45] + Nr[16] + Nr[921] + Nr[13] + Nr[922], nO = Nr[45] + Nr[16] + Nr[921] + Nr[13] + Nr[922] + Nr[115] + Nr[297], sO = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[885] + Nr[66] + Nr[211], rO = Nr[45] + Nr[16] + Nr[921] + Nr[18] + Nr[923] + Nr[2] + Nr[611], hO = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[885] + Nr[66] + Nr[618], aO = Nr[45] + Nr[16] + Nr[921] + Nr[18] + Nr[923] + Nr[228] + Nr[229], oO = Nr[285] + Nr[66] + Nr[627] + Nr[66] + Nr[579] + Nr[66] + Nr[883], _O = Nr[45] + Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[178] + Nr[235], fO = Nr[45] + Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[635] + Nr[636], cO = Nr[45] + Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[2] + Nr[634], uO = Nr[333] + Nr[21] + Nr[924], dO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[399] + Nr[66] + Nr[400], lO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[925], vO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[926], bO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[399] + Nr[66] + Nr[296], gO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[884] + Nr[66] + Nr[97], yO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[632], pO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[889] + Nr[66] + Nr[211], EO = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[892] + Nr[66] + Nr[889] + Nr[66] + Nr[618], mO = Nr[222] + Nr[115] + Nr[857], xO = Nr[357] + Nr[66] + Nr[632] + Nr[66] + Nr[579] + Nr[66] + Nr[883] + Nr[66] + Nr[884], TO = Nr[222] + Nr[115] + Nr[160], wO = Nr[79] + Nr[38] + Nr[927] + Nr[35] + Nr[51] + Nr[2] + Nr[447], OO = Nr[360] + Nr[21] + Nr[924], kO = Nr[360] + Nr[38] + Nr[927] + Nr[35] + Nr[67], SO = Nr[143] + Nr[38] + Nr[927], IO = Nr[143] + Nr[2] + Nr[80], AO = Nr[200] + Nr[2] + Nr[3], LO = Nr[52] + Nr[361] + Nr[38] + Nr[633], CO = Nr[52] + Nr[555] + Nr[13] + Nr[100] + Nr[97], RO = Nr[52] + Nr[361] + Nr[115] + Nr[631] + Nr[13] + Nr[100] + Nr[97], MO = Nr[52] + Nr[361] + Nr[115] + Nr[631] + Nr[38] + Nr[866], DO = Nr[599] + Nr[2] + Nr[441], PO = Nr[52] + Nr[614] + Nr[2] + Nr[611], NO = Nr[52] + Nr[555] + Nr[2] + Nr[611], jO = Nr[52] + Nr[555] + Nr[38] + Nr[866], BO = Nr[52] + Nr[555] + Nr[13] + Nr[100] + Nr[113], $O = Nr[52] + Nr[897], FO = Nr[928], GO = Nr[52] + Nr[614] + Nr[2] + Nr[611] + Nr[38] + Nr[916] + Nr[105] + Nr[194], zO = Nr[52] + Nr[854], YO = Nr[52] + Nr[222] + Nr[115] + Nr[479], HO = Nr[929] + Nr[228] + Nr[229], qO = Nr[52] + Nr[602] + Nr[228] + Nr[229], WO = Nr[52] + Nr[222] + Nr[18] + Nr[923] + Nr[228] + Nr[229], UO = Nr[52] + Nr[602] + Nr[2] + Nr[611], XO = Nr[115] + Nr[479], VO = Nr[18] + Nr[923] + Nr[228] + Nr[229], ZO = Nr[159] + Nr[105] + Nr[930] + Nr[38] + Nr[193], KO = Nr[894] + Nr[66] + Nr[895], JO = Nr[52] + Nr[161], QO = Nr[18] + Nr[817], tk = Nr[52] + Nr[222] + Nr[18] + Nr[817], ik = Nr[52] + Nr[222] + Nr[18] + Nr[931] + Nr[16] + Nr[921], ek = Nr[52] + Nr[222] + Nr[89] + Nr[273] + Nr[16] + Nr[921], nk = Nr[52] + Nr[181] + Nr[182] + Nr[183], sk = Nr[52] + Nr[637], rk = Nr[846] + Nr[38] + Nr[193], hk = Nr[200] + Nr[18] + Nr[931] + Nr[16] + Nr[921], ak = Nr[52] + Nr[271] + Nr[16] + Nr[921], ok = Nr[271] + Nr[16] + Nr[921] + Nr[21] + Nr[872], _k = Nr[52] + Nr[271] + Nr[16] + Nr[921] + Nr[115] + Nr[857], fk = Nr[52] + Nr[271] + Nr[16] + Nr[921] + Nr[115] + Nr[160], ck = Nr[271] + Nr[16] + Nr[921] + Nr[115] + Nr[870], uk = Nr[271] + Nr[16] + Nr[921] + Nr[18] + Nr[923] + Nr[228] + Nr[229], dk = Nr[52] + Nr[45] + Nr[16] + Nr[921], lk = Nr[52] + Nr[45] + Nr[16] + Nr[921] + Nr[115] + Nr[857], vk = Nr[52] + Nr[45] + Nr[16] + Nr[921] + Nr[13] + Nr[100], bk = Nr[45] + Nr[16] + Nr[921] + Nr[21] + Nr[872], gk = Nr[45] + Nr[16] + Nr[921] + Nr[115] + Nr[870], yk = Nr[16] + Nr[921] + Nr[115] + Nr[176], pk = Nr[16] + Nr[921] + Nr[115] + Nr[176] + Nr[115] + Nr[297], Ek = Nr[16] + Nr[921] + Nr[115] + Nr[870], mk = Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[178] + Nr[235], xk = Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[178] + Nr[235] + Nr[13] + Nr[100], Tk = Nr[16] + Nr[921] + Nr[18] + Nr[923] + Nr[2] + Nr[611], wk = Nr[16] + Nr[921] + Nr[18] + Nr[923] + Nr[228] + Nr[229], Ok = Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[2] + Nr[634], kk = Nr[16] + Nr[921] + Nr[21] + Nr[234] + Nr[635] + Nr[636], Sk = Nr[16] + Nr[921] + Nr[13] + Nr[922], Ik = Nr[16] + Nr[921] + Nr[13] + Nr[922] + Nr[115] + Nr[297], Ak = Nr[932] + Nr[32] + Nr[933], Lk = Nr[18] + Nr[931] + Nr[16] + Nr[921], Ck = Nr[89] + Nr[273] + Nr[16] + Nr[921], Rk = Nr[302] + Nr[66] + Nr[627] + Nr[66] + Nr[884], Mk = Nr[173] + Nr[38] + Nr[844] + Nr[54] + Nr[334], Dk = Nr[173] + Nr[35] + Nr[934] + Nr[13] + Nr[935], Pk = Nr[23] + Nr[38] + Nr[844] + Nr[21] + Nr[924], Nk = Nr[202] + Nr[94] + Nr[936] + Nr[21] + Nr[234], jk = Nr[846] + Nr[115] + Nr[324], Bk = Nr[52] + Nr[222] + Nr[38] + Nr[193], $k = Nr[260] + Nr[26] + Nr[260], Fk = Nr[68] + Nr[298] + Nr[84] + Nr[228] + Nr[299], Gk = Nr[454] + Nr[84] + Nr[896] + Nr[426] + Nr[198] + Nr[937] + Nr[637] + Nr[426] + Nr[352] + Nr[938] + Nr[148] + Nr[84] + Nr[939] + Nr[84] + Nr[940] + Nr[84] + Nr[641] + Nr[457] + Nr[58] + Nr[59] + Nr[260] + Nr[60] + Nr[260] + Nr[60] + Nr[260] + Nr[60] + Nr[260] + Nr[941] + Nr[392] + Nr[84] + Nr[376] + Nr[426] + Nr[352], zk = Nr[248] + Nr[54] + Nr[249] + Nr[94] + Nr[942], Yk = Nr[260], Hk = Nr[415], qk = Nr[301] + Nr[174] + Nr[158], Wk = Nr[943], Uk = Nr[143] + Nr[94] + Nr[95], Xk = Nr[142] + Nr[94] + Nr[95], Vk = Nr[421] + Nr[66] + Nr[423], Zk = Nr[892] + Nr[66] + Nr[925], Kk = Nr[63] + Nr[944], Jk = Nr[421] + Nr[66] + Nr[310], Qk = Nr[63] + Nr[945] + Nr[946] + Nr[510], tS = Nr[63] + Nr[947] + Nr[54] + Nr[260], iS = Nr[208] + Nr[66] + Nr[209], eS = Nr[356] + Nr[66] + Nr[948], nS = Nr[949] + Nr[68] + Nr[950], sS = Nr[949] + Nr[68] + Nr[352], rS = Nr[949] + Nr[68] + Nr[951], hS = Nr[356] + Nr[66] + Nr[293], aS = Nr[222] + Nr[94] + Nr[952], oS = Nr[9] + Nr[38] + Nr[104] + Nr[174] + Nr[158], _S = Nr[436] + Nr[66] + Nr[953], fS = Nr[66] + Nr[954], cS = Nr[248] + Nr[54] + Nr[249] + Nr[38] + Nr[104] + Nr[178] + Nr[955] + Nr[18] + Nr[956], uS = Nr[23] + Nr[174] + Nr[238] + Nr[38] + Nr[104] + Nr[174] + Nr[158], dS = Nr[326] + Nr[450], lS = Nr[128] + Nr[402] + Nr[26] + Nr[957], vS = Nr[159] + Nr[174] + Nr[238] + Nr[38] + Nr[958], bS = Nr[959] + Nr[54] + Nr[960], gS = Nr[961] + Nr[68] + Nr[230], yS = Nr[325] + Nr[105] + Nr[362], pS = Nr[379], ES = Nr[962], mS = Nr[963], xS = Nr[454], TS = Nr[23] + Nr[178] + Nr[964] + Nr[174] + Nr[387], wS = Nr[693] + Nr[89] + Nr[273] + Nr[21] + Nr[965], OS = Nr[966] + Nr[16] + Nr[967], kS = Nr[338] + Nr[194], SS = Nr[115] + Nr[857] + Nr[338] + Nr[194], IS = Nr[154] + Nr[115] + Nr[857] + Nr[338] + Nr[194], AS = Nr[228] + Nr[862], LS = Nr[154] + Nr[228] + Nr[862], CS = Nr[968], RS = Nr[96] + Nr[35] + Nr[67], MS = Nr[969] + Nr[115] + Nr[870], DS = Nr[970] + Nr[66] + Nr[971], PS = Nr[79] + Nr[174] + Nr[972] + Nr[54] + Nr[55], NS = Nr[143] + Nr[54] + Nr[155], jS = Nr[23] + Nr[178] + Nr[460] + Nr[115] + Nr[297], BS = Nr[199] + Nr[89] + Nr[273], $S = Nr[482] + Nr[16] + Nr[252], FS = Nr[117] + Nr[115] + Nr[973], GS = Nr[377] + Nr[97], zS = Nr[377] + Nr[113], YS = Nr[974], HS = Nr[975], qS = Nr[5] + Nr[21] + Nr[976], WS = Nr[977] + Nr[115] + Nr[978] + Nr[16] + Nr[616], US = Nr[159] + Nr[21] + Nr[872], XS = Nr[173] + Nr[105] + Nr[979], VS = Nr[143] + Nr[2] + Nr[980] + Nr[174] + Nr[972], ZS = Nr[981], KS = Nr[66] + Nr[982], JS = Nr[983] + Nr[830], QS = Nr[984], tI = Nr[178] + Nr[985] + Nr[26] + Nr[54] + Nr[986] + Nr[204], iI = Nr[115] + Nr[857], eI = Nr[21] + Nr[234], nI = Nr[115] + Nr[870], sI = Nr[79] + Nr[54] + Nr[155] + Nr[2] + Nr[987], rI = Nr[154] + Nr[54] + Nr[331], hI = Nr[54] + Nr[331], aI = Nr[380] + Nr[35] + Nr[67], oI = Nr[892] + Nr[66] + Nr[399] + Nr[66] + Nr[400], _I = Nr[222] + Nr[54] + Nr[155], fI = Nr[21] + Nr[924] + Nr[26] + Nr[2] + Nr[988] + Nr[127] + Nr[252] + Nr[26] + Nr[54] + Nr[233], cI = Nr[380] + Nr[105] + Nr[194], uI = Nr[989] + Nr[54] + Nr[331], dI = Nr[990], lI = Nr[45] + Nr[21] + Nr[991], vI = Nr[96] + Nr[557] + Nr[992], bI = Nr[57] + Nr[2] + Nr[993], gI = Nr[427] + Nr[2] + Nr[447] + Nr[178] + Nr[448], yI = Nr[994], pI = Nr[859] + Nr[66] + Nr[293] + Nr[66] + Nr[563], EI = Nr[222] + Nr[18] + Nr[711], mI = Nr[859] + Nr[66] + Nr[293] + Nr[66] + Nr[279], xI = Nr[66] + Nr[995], TI = Nr[180] + Nr[457] + Nr[203] + Nr[367] + Nr[368] + Nr[490] + Nr[491] + Nr[492] + Nr[60] + Nr[493] + Nr[494] + Nr[495] + Nr[260] + Nr[496] + Nr[497] + Nr[498] + Nr[499] + Nr[500] + Nr[501] + Nr[996] + Nr[273] + Nr[997] + Nr[990] + Nr[105] + Nr[998] + Nr[503] + Nr[420] + Nr[157] + Nr[504] + Nr[260] + Nr[158] + Nr[157] + Nr[18] + Nr[104] + Nr[505] + Nr[188] + Nr[493] + Nr[506] + Nr[420] + Nr[507] + Nr[175] + Nr[508] + Nr[416] + Nr[509] + Nr[510] + Nr[511] + Nr[999] + Nr[1e3] + Nr[1001] + Nr[513] + Nr[338] + Nr[1002] + Nr[32] + Nr[416] + Nr[261] + Nr[174] + Nr[1003] + Nr[261] + Nr[1004] + Nr[1005] + Nr[174] + Nr[1006] + Nr[1007] + Nr[367] + Nr[1008] + Nr[1009] + Nr[1010] + Nr[228] + Nr[262] + Nr[1011] + Nr[158] + Nr[1012] + Nr[1013] + Nr[178] + Nr[158] + Nr[38] + Nr[499] + Nr[1014] + Nr[367] + Nr[261] + Nr[1015] + Nr[252] + Nr[261] + Nr[1016] + Nr[260] + Nr[1017] + Nr[286] + Nr[54] + Nr[990] + Nr[1018] + Nr[286] + Nr[1019] + Nr[260] + Nr[493] + Nr[1020] + Nr[1021] + Nr[1022] + Nr[157] + Nr[14] + Nr[338] + Nr[652] + Nr[499] + Nr[157] + Nr[14] + Nr[113] + Nr[990] + Nr[411] + Nr[1023] + Nr[1024] + Nr[178] + Nr[1025] + Nr[287] + Nr[1026] + Nr[35] + Nr[188] + Nr[367] + Nr[286] + Nr[417] + Nr[762] + Nr[520] + Nr[504] + Nr[157] + Nr[1027] + Nr[813] + Nr[1028] + Nr[1029] + Nr[1030] + Nr[495] + Nr[1031] + Nr[495] + Nr[178] + Nr[499] + Nr[578] + Nr[829] + Nr[286] + Nr[390] + Nr[578] + Nr[1032] + Nr[1033] + Nr[1034] + Nr[94] + Nr[578] + Nr[1035] + Nr[97] + Nr[262] + Nr[228] + Nr[411] + Nr[21] + Nr[262] + Nr[1036] + Nr[501] + Nr[298] + Nr[417] + Nr[261] + Nr[1037] + Nr[286] + Nr[535] + Nr[115] + Nr[501] + Nr[1038] + Nr[501] + Nr[1039] + Nr[1040] + Nr[228] + Nr[287] + Nr[1041] + Nr[411] + Nr[254] + Nr[416] + Nr[1042] + Nr[260] + Nr[1043] + Nr[252] + Nr[21] + Nr[493] + Nr[1044] + Nr[419] + Nr[298] + Nr[1045] + Nr[16] + Nr[1046] + Nr[1047] + Nr[578] + Nr[734] + Nr[1048] + Nr[261] + Nr[1049] + Nr[497] + Nr[367] + Nr[18] + Nr[1050] + Nr[262] + Nr[13] + Nr[286] + Nr[35] + Nr[1051] + Nr[1052] + Nr[286] + Nr[1053] + Nr[261] + Nr[501] + Nr[1054] + Nr[416] + Nr[1055] + Nr[104] + Nr[1056] + Nr[260] + Nr[495] + Nr[54] + Nr[746] + Nr[32] + Nr[1057] + Nr[1058] + Nr[418] + Nr[286] + Nr[990] + Nr[1059] + Nr[1060] + Nr[416] + Nr[1061] + Nr[1062] + Nr[1063] + Nr[97] + Nr[411] + Nr[261] + Nr[1064] + Nr[367] + Nr[1065] + Nr[261] + Nr[1066] + Nr[1067] + Nr[157] + Nr[1068] + Nr[1069] + Nr[1070] + Nr[578] + Nr[254] + Nr[416] + Nr[367] + Nr[1071] + Nr[578] + Nr[13] + Nr[1072] + Nr[1027] + Nr[1073] + Nr[125] + Nr[418] + Nr[174] + Nr[175] + Nr[504] + Nr[157] + Nr[32] + Nr[419] + Nr[635] + Nr[734] + Nr[990] + Nr[105] + Nr[417] + Nr[367] + Nr[501] + Nr[54] + Nr[14] + Nr[157] + Nr[32] + Nr[287] + Nr[990] + Nr[1074] + Nr[829] + Nr[157] + Nr[18] + Nr[1075] + Nr[182] + Nr[1076] + Nr[261] + Nr[1077] + Nr[1078] + Nr[1003] + Nr[1047] + Nr[525] + Nr[420] + Nr[21] + Nr[513] + Nr[286] + Nr[1079] + Nr[188] + Nr[501] + Nr[38] + Nr[262] + Nr[1080] + Nr[261] + Nr[97] + Nr[990] + Nr[16] + Nr[175] + Nr[260] + Nr[298] + Nr[990] + Nr[1081] + Nr[1082] + Nr[367] + Nr[260] + Nr[54] + Nr[175] + Nr[94] + Nr[1082] + Nr[32] + Nr[578] + Nr[1083] + Nr[578] + Nr[1084] + Nr[1085] + Nr[1086] + Nr[158] + Nr[16] + Nr[493] + Nr[1033] + Nr[513] + Nr[510] + Nr[178] + Nr[1087] + Nr[367] + Nr[1088] + Nr[635] + Nr[262] + Nr[501] + Nr[1089] + Nr[367] + Nr[228] + Nr[420] + Nr[287] + Nr[1090] + Nr[115] + Nr[367] + Nr[157] + Nr[1091] + Nr[105] + Nr[520] + Nr[125] + Nr[286] + Nr[367] + Nr[262] + Nr[105] + Nr[188] + Nr[1092] + Nr[1088] + Nr[1093] + Nr[1094] + Nr[228] + Nr[501] + Nr[260] + Nr[228] + Nr[261] + Nr[990] + Nr[1095] + Nr[578] + Nr[990] + Nr[510] + Nr[1096] + Nr[1097] + Nr[1098] + Nr[228] + Nr[1099] + Nr[1100] + Nr[419] + Nr[635] + Nr[1101] + Nr[182] + Nr[157] + Nr[338] + Nr[495] + Nr[261] + Nr[367] + Nr[501] + Nr[525] + Nr[367] + Nr[188] + Nr[1102] + Nr[1103] + Nr[178] + Nr[1104] + Nr[1084] + Nr[525] + Nr[1105] + Nr[417] + Nr[94] + Nr[493] + Nr[1106] + Nr[252] + Nr[510] + Nr[1099] + Nr[89] + Nr[1107] + Nr[990] + Nr[104] + Nr[1108] + Nr[287] + Nr[1109] + Nr[418] + Nr[1110] + Nr[530] + Nr[261] + Nr[337] + Nr[157] + Nr[367] + Nr[1111] + Nr[298] + Nr[418] + Nr[990] + Nr[1112] + Nr[298] + Nr[1082] + Nr[32] + Nr[1113] + Nr[286] + Nr[990] + Nr[1114] + Nr[32] + Nr[1115] + Nr[1116] + Nr[1117] + Nr[260] + Nr[1118] + Nr[1119] + Nr[32] + Nr[578] + Nr[495] + Nr[21] + Nr[1120] + Nr[287] + Nr[1099] + Nr[1121] + Nr[261] + Nr[513] + Nr[97] + Nr[416] + Nr[1122] + Nr[418] + Nr[157] + Nr[1123] + Nr[1124] + Nr[1125] + Nr[157] + Nr[338] + Nr[419] + Nr[1126] + Nr[530] + Nr[1127] + Nr[416] + Nr[990] + Nr[1128] + Nr[261] + Nr[1129] + Nr[252] + Nr[260] + Nr[1130] + Nr[557] + Nr[273] + Nr[338] + Nr[499] + Nr[97] + Nr[1003] + Nr[1131] + Nr[1132] + Nr[1133] + Nr[1003] + Nr[89] + Nr[1134] + Nr[287] + Nr[35] + Nr[1099] + Nr[18] + Nr[525] + Nr[1135] + Nr[1099] + Nr[228] + Nr[1136] + Nr[1137] + Nr[1138] + Nr[557] + Nr[1139] + Nr[1140] + Nr[252] + Nr[262] + Nr[97] + Nr[1141] + Nr[525] + Nr[182] + Nr[1082] + Nr[188] + Nr[13] + Nr[1082] + Nr[1142] + Nr[525] + Nr[1041] + Nr[578] + Nr[158] + Nr[262] + Nr[338] + Nr[104] + Nr[254] + Nr[493] + Nr[113] + Nr[419] + Nr[635] + Nr[262] + Nr[115] + Nr[1143] + Nr[125] + Nr[1082] + Nr[125] + Nr[1144] + Nr[504] + Nr[1145] + Nr[286] + Nr[1146] + Nr[990] + Nr[178] + Nr[1147] + Nr[1148] + Nr[411] + Nr[286] + Nr[125] + Nr[1149] + Nr[125] + Nr[287] + Nr[97] + Nr[493] + Nr[990] + Nr[557] + Nr[262] + Nr[175] + Nr[1150] + Nr[1151] + Nr[228] + Nr[260] + Nr[416] + Nr[228] + Nr[261] + Nr[418] + Nr[2] + Nr[513] + Nr[89] + Nr[104] + Nr[113] + Nr[734] + Nr[261] + Nr[416] + Nr[287] + Nr[1152] + Nr[97] + Nr[578] + Nr[1153] + Nr[525] + Nr[2] + Nr[495] + Nr[510] + Nr[115] + Nr[420] + Nr[557] + Nr[734] + Nr[287] + Nr[14] + Nr[178] + Nr[1154] + Nr[1155] + Nr[252] + Nr[113] + Nr[525] + Nr[527] + Nr[157] + Nr[228] + Nr[1156] + Nr[1157] + Nr[495] + Nr[18] + Nr[367] + Nr[104] + Nr[525] + Nr[829] + Nr[21] + Nr[1158] + Nr[182] + Nr[1159] + Nr[1160] + Nr[367] + Nr[411] + Nr[1161] + Nr[990] + Nr[1162] + Nr[287] + Nr[228] + Nr[273] + Nr[94] + Nr[1082] + Nr[260] + Nr[308] + Nr[530] + Nr[1163] + Nr[1164] + Nr[539] + Nr[273] + Nr[510] + Nr[1165] + Nr[510] + Nr[158] + Nr[1166] + Nr[419] + Nr[35] + Nr[525] + Nr[38] + Nr[1167] + Nr[1168] + Nr[990] + Nr[175] + Nr[261] + Nr[814] + Nr[1169] + Nr[1170] + Nr[262] + Nr[1171] + Nr[252] + Nr[105] + Nr[734] + Nr[1172] + Nr[286] + Nr[734] + Nr[54] + Nr[419] + Nr[13] + Nr[510] + Nr[13] + Nr[513] + Nr[1173] + Nr[527] + Nr[286] + Nr[158] + Nr[1174] + Nr[1175] + Nr[1176] + Nr[420] + Nr[182] + Nr[157] + Nr[1177] + Nr[262] + Nr[338] + Nr[520] + Nr[1178] + Nr[411] + Nr[1179] + Nr[829] + Nr[635] + Nr[520] + Nr[1180] + Nr[1181] + Nr[806] + Nr[1182] + Nr[1183] + Nr[1184] + Nr[1185] + Nr[115] + Nr[260] + Nr[504] + Nr[188] + Nr[1186] + Nr[578] + Nr[1187] + Nr[1188] + Nr[286] + Nr[495] + Nr[1189] + Nr[175] + Nr[115] + Nr[510] + Nr[1190] + Nr[298] + Nr[416] + Nr[578] + Nr[1191] + Nr[13] + Nr[1192] + Nr[1193] + Nr[1082] + Nr[35] + Nr[158] + Nr[1194] + Nr[417] + Nr[784] + Nr[16] + Nr[578] + Nr[829] + Nr[287] + Nr[411] + Nr[557] + Nr[418] + Nr[578] + Nr[228] + Nr[501] + Nr[178] + Nr[578] + Nr[513] + Nr[115] + Nr[1195] + Nr[286] + Nr[1196] + Nr[182] + Nr[411] + Nr[18] + Nr[260] + Nr[1099] + Nr[89] + Nr[188] + Nr[1082] + Nr[1197] + Nr[990] + Nr[417] + Nr[178] + Nr[188] + Nr[416] + Nr[578] + Nr[513] + Nr[1198] + Nr[520] + Nr[578] + Nr[990] + Nr[115] + Nr[1199] + Nr[1200] + Nr[54] + Nr[513] + Nr[286] + Nr[418] + Nr[1201] + Nr[262] + Nr[1202] + Nr[990] + Nr[1082] + Nr[262] + Nr[32] + Nr[1203] + Nr[578] + Nr[1204] + Nr[525] + Nr[38] + Nr[1099] + Nr[13] + Nr[286] + Nr[1205] + Nr[557] + Nr[1099] + Nr[1206] + Nr[527] + Nr[286] + Nr[252] + Nr[1207] + Nr[104] + Nr[157] + Nr[1208] + Nr[105] + Nr[495] + Nr[262] + Nr[1209] + Nr[530] + Nr[89] + Nr[1099] + Nr[1210] + Nr[260] + Nr[1088] + Nr[1211] + Nr[1212] + Nr[157] + Nr[1213] + Nr[990] + Nr[1214] + Nr[1215] + Nr[35] + Nr[510] + Nr[493] + Nr[287] + Nr[420] + Nr[97] + Nr[1216] + Nr[544] + Nr[510] + Nr[545] + Nr[135], wI = Nr[180] + Nr[457] + Nr[203] + Nr[367] + Nr[368] + Nr[490] + Nr[491] + Nr[492] + Nr[60] + Nr[493] + Nr[494] + Nr[495] + Nr[260] + Nr[496] + Nr[497] + Nr[498] + Nr[499] + Nr[500] + Nr[501] + Nr[1217] + Nr[501] + Nr[1218] + Nr[367] + Nr[94] + Nr[175] + Nr[990] + Nr[578] + Nr[503] + Nr[420] + Nr[157] + Nr[504] + Nr[260] + Nr[158] + Nr[157] + Nr[18] + Nr[104] + Nr[505] + Nr[188] + Nr[493] + Nr[506] + Nr[420] + Nr[507] + Nr[175] + Nr[508] + Nr[416] + Nr[509] + Nr[510] + Nr[511] + Nr[999] + Nr[1219] + Nr[1001] + Nr[513] + Nr[338] + Nr[418] + Nr[1220] + Nr[1088] + Nr[990] + Nr[1221] + Nr[416] + Nr[1222] + Nr[1003] + Nr[287] + Nr[520] + Nr[1223] + Nr[501] + Nr[1224] + Nr[418] + Nr[1225] + Nr[499] + Nr[16] + Nr[493] + Nr[1226] + Nr[104] + Nr[260] + Nr[1227] + Nr[1216] + Nr[32] + Nr[1228] + Nr[298] + Nr[14] + Nr[260] + Nr[16] + Nr[990] + Nr[2] + Nr[1229] + Nr[1230] + Nr[411] + Nr[18] + Nr[416] + Nr[338] + Nr[829] + Nr[525] + Nr[1231] + Nr[252] + Nr[298] + Nr[530] + Nr[228] + Nr[1232] + Nr[1233] + Nr[501] + Nr[1234] + Nr[1003] + Nr[500] + Nr[252] + Nr[228] + Nr[157] + Nr[174] + Nr[419] + Nr[1235] + Nr[520] + Nr[188] + Nr[175] + Nr[157] + Nr[35] + Nr[417] + Nr[260] + Nr[1236] + Nr[1237] + Nr[262] + Nr[97] + Nr[520] + Nr[287] + Nr[13] + Nr[14] + Nr[338] + Nr[1238] + Nr[1239] + Nr[367] + Nr[158] + Nr[1240] + Nr[1241] + Nr[557] + Nr[1242] + Nr[113] + Nr[418] + Nr[18] + Nr[1243] + Nr[1244] + Nr[499] + Nr[525] + Nr[14] + Nr[990] + Nr[416] + Nr[254] + Nr[1245] + Nr[54] + Nr[1246] + Nr[287] + Nr[97] + Nr[175] + Nr[990] + Nr[104] + Nr[1247] + Nr[525] + Nr[829] + Nr[1248] + Nr[520] + Nr[1249] + Nr[734] + Nr[578] + Nr[1250] + Nr[18] + Nr[273] + Nr[262] + Nr[990] + Nr[1251] + Nr[1252] + Nr[367] + Nr[1253] + Nr[527] + Nr[1254] + Nr[1255] + Nr[367] + Nr[188] + Nr[1256] + Nr[1257] + Nr[367] + Nr[513] + Nr[16] + Nr[1258] + Nr[1227] + Nr[520] + Nr[1259] + Nr[418] + Nr[1260] + Nr[175] + Nr[228] + Nr[262] + Nr[420] + Nr[260] + Nr[1261] + Nr[260] + Nr[1262] + Nr[178] + Nr[578] + Nr[16] + Nr[1088] + Nr[367] + Nr[45] + Nr[557] + Nr[260] + Nr[1263] + Nr[1264] + Nr[990] + Nr[1265] + Nr[417] + Nr[510] + Nr[1266] + Nr[1088] + Nr[174] + Nr[418] + Nr[1267] + Nr[175] + Nr[16] + Nr[260] + Nr[1268] + Nr[1082] + Nr[1269] + Nr[1270] + Nr[1271] + Nr[495] + Nr[1272] + Nr[228] + Nr[1273] + Nr[1274] + Nr[18] + Nr[1275] + Nr[228] + Nr[501] + Nr[1276] + Nr[1099] + Nr[1277] + Nr[287] + Nr[518] + Nr[1003] + Nr[262] + Nr[367] + Nr[287] + Nr[338] + Nr[1278] + Nr[1235] + Nr[990] + Nr[734] + Nr[54] + Nr[273] + Nr[261] + Nr[1279] + Nr[510] + Nr[1280] + Nr[1281] + Nr[18] + Nr[495] + Nr[286] + Nr[1282] + Nr[411] + Nr[504] + Nr[977] + Nr[262] + Nr[990] + Nr[261] + Nr[125] + Nr[252] + Nr[32] + Nr[530] + Nr[97] + Nr[420] + Nr[578] + Nr[504] + Nr[1082] + Nr[262] + Nr[252] + Nr[260] + Nr[557] + Nr[104] + Nr[287] + Nr[504] + Nr[287] + Nr[1283] + Nr[16] + Nr[14] + Nr[182] + Nr[501] + Nr[1284] + Nr[1285] + Nr[1286] + Nr[1287] + Nr[1288] + Nr[157] + Nr[411] + Nr[298] + Nr[1289] + Nr[54] + Nr[261] + Nr[1290] + Nr[298] + Nr[753] + Nr[298] + Nr[1291] + Nr[1292] + Nr[94] + Nr[411] + Nr[1293] + Nr[1003] + Nr[157] + Nr[419] + Nr[1276] + Nr[14] + Nr[188] + Nr[1294] + Nr[1295] + Nr[1296] + Nr[89] + Nr[1099] + Nr[16] + Nr[1297] + Nr[504] + Nr[493] + Nr[1298] + Nr[1299] + Nr[298] + Nr[1300] + Nr[298] + Nr[287] + Nr[419] + Nr[1301] + Nr[1302] + Nr[178] + Nr[1303] + Nr[16] + Nr[527] + Nr[1304] + Nr[493] + Nr[188] + Nr[97] + Nr[1088] + Nr[188] + Nr[94] + Nr[1003] + Nr[1273] + Nr[411] + Nr[13] + Nr[510] + Nr[38] + Nr[661] + Nr[1082] + Nr[97] + Nr[501] + Nr[13] + Nr[513] + Nr[1305] + Nr[417] + Nr[635] + Nr[510] + Nr[1306] + Nr[530] + Nr[504] + Nr[261] + Nr[94] + Nr[520] + Nr[286] + Nr[13] + Nr[493] + Nr[254] + Nr[273] + Nr[1307] + Nr[420] + Nr[261] + Nr[1308] + Nr[1309] + Nr[286] + Nr[1310] + Nr[1311] + Nr[1312] + Nr[1313] + Nr[261] + Nr[1314] + Nr[174] + Nr[1099] + Nr[1315] + Nr[527] + Nr[784] + Nr[174] + Nr[1316] + Nr[261] + Nr[499] + Nr[2] + Nr[1317] + Nr[113] + Nr[262] + Nr[499] + Nr[262] + Nr[113] + Nr[157] + Nr[520] + Nr[54] + Nr[1318] + Nr[578] + Nr[520] + Nr[1319] + Nr[1082] + Nr[105] + Nr[1320] + Nr[254] + Nr[417] + Nr[1238] + Nr[1321] + Nr[228] + Nr[530] + Nr[1322] + Nr[1323] + Nr[35] + Nr[1324] + Nr[990] + Nr[829] + Nr[182] + Nr[530] + Nr[259] + Nr[273] + Nr[635] + Nr[530] + Nr[228] + Nr[525] + Nr[228] + Nr[1325] + Nr[262] + Nr[97] + Nr[261] + Nr[89] + Nr[1326] + Nr[261] + Nr[104] + Nr[16] + Nr[286] + Nr[1327] + Nr[1079] + Nr[1328] + Nr[1329] + Nr[635] + Nr[14] + Nr[35] + Nr[525] + Nr[513] + Nr[105] + Nr[418] + Nr[1330] + Nr[578] + Nr[2] + Nr[525] + Nr[2] + Nr[261] + Nr[495] + Nr[105] + Nr[499] + Nr[1331] + Nr[527] + Nr[1332] + Nr[1333] + Nr[260] + Nr[495] + Nr[635] + Nr[252] + Nr[1334] + Nr[501] + Nr[1335] + Nr[495] + Nr[1336] + Nr[104] + Nr[1337] + Nr[520] + Nr[287] + Nr[1338] + Nr[655] + Nr[35] + Nr[104] + Nr[1030] + Nr[261] + Nr[115] + Nr[530] + Nr[254] + Nr[493] + Nr[188] + Nr[97] + Nr[1339] + Nr[1340] + Nr[158] + Nr[32] + Nr[1341] + Nr[1082] + Nr[260] + Nr[113] + Nr[261] + Nr[1342] + Nr[157] + Nr[1343] + Nr[525] + Nr[411] + Nr[32] + Nr[1344] + Nr[1345] + Nr[1156] + Nr[174] + Nr[262] + Nr[1346] + Nr[157] + Nr[1347] + Nr[578] + Nr[338] + Nr[418] + Nr[97] + Nr[175] + Nr[32] + Nr[286] + Nr[416] + Nr[1348] + Nr[157] + Nr[1349] + Nr[520] + Nr[510] + Nr[530] + Nr[338] + Nr[175] + Nr[287] + Nr[1003] + Nr[13] + Nr[1350] + Nr[1351] + Nr[1352] + Nr[21] + Nr[1353] + Nr[1354] + Nr[261] + Nr[16] + Nr[1355] + Nr[287] + Nr[1356] + Nr[1195] + Nr[286] + Nr[416] + Nr[18] + Nr[530] + Nr[338] + Nr[1357] + Nr[38] + Nr[367] + Nr[411] + Nr[35] + Nr[1358] + Nr[1359] + Nr[54] + Nr[14] + Nr[21] + Nr[1360] + Nr[157] + Nr[420] + Nr[1361] + Nr[1283] + Nr[367] + Nr[557] + Nr[990] + Nr[16] + Nr[175] + Nr[510] + Nr[1362] + Nr[338] + Nr[1099] + Nr[1363] + Nr[513] + Nr[125] + Nr[1003] + Nr[262] + Nr[1364] + Nr[188] + Nr[1365] + Nr[260] + Nr[1366] + Nr[367] + Nr[338] + Nr[530] + Nr[89] + Nr[1367] + Nr[367] + Nr[1368] + Nr[188] + Nr[419] + Nr[1369] + Nr[286] + Nr[411] + Nr[54] + Nr[520] + Nr[635] + Nr[411] + Nr[188] + Nr[1370] + Nr[254] + Nr[417] + Nr[260] + Nr[504] + Nr[515] + Nr[178] + Nr[499] + Nr[990] + Nr[21] + Nr[158] + Nr[105] + Nr[262] + Nr[1099] + Nr[157] + Nr[1099] + Nr[188] + Nr[416] + Nr[1371] + Nr[416] + Nr[1372] + Nr[525] + Nr[338] + Nr[578] + Nr[18] + Nr[1373] + Nr[1374] + Nr[510] + Nr[54] + Nr[1375] + Nr[635] + Nr[1376] + Nr[1377], OI = Nr[1378] + Nr[146], kI = Nr[1379] + Nr[26] + Nr[260] + Nr[68] + Nr[157] + Nr[1088] + Nr[26] + Nr[1380] + Nr[84] + Nr[483], SI = Nr[1381], II = Nr[733], AI = Nr[68] + Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[338] + Nr[341] + Nr[26] + Nr[343], LI = Nr[1379] + Nr[457] + Nr[261] + Nr[490] + Nr[227] + Nr[84] + Nr[641] + Nr[426] + Nr[58] + Nr[59] + Nr[260] + Nr[350] + Nr[260] + Nr[350] + Nr[260] + Nr[350] + Nr[260] + Nr[68] + Nr[510] + Nr[61], CI = Nr[68] + Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[338] + Nr[341], RI = Nr[1379] + Nr[457] + Nr[260] + Nr[490], MI = Nr[1382], DI = Nr[457] + Nr[1379] + Nr[26] + Nr[262] + Nr[1088] + Nr[26] + Nr[1383] + Nr[84] + Nr[663] + Nr[59] + Nr[260] + Nr[68] + Nr[287] + Nr[350] + Nr[260] + Nr[350] + Nr[260] + Nr[68] + Nr[287] + Nr[350] + Nr[261] + Nr[61], PI = Nr[68] + Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[338] + Nr[341] + Nr[457] + Nr[359], NI = Nr[1379] + Nr[457] + Nr[261] + Nr[490], jI = Nr[457] + Nr[1379] + Nr[26] + Nr[260] + Nr[68] + Nr[262] + Nr[1088] + Nr[26] + Nr[643], BI = Nr[1384] + Nr[38] + Nr[193], $I = Nr[68] + Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[115] + Nr[464] + Nr[38] + Nr[1329], FI = Nr[891] + Nr[426] + Nr[353] + Nr[490] + Nr[451] + Nr[84] + Nr[1385] + Nr[426] + Nr[231] + Nr[84] + Nr[451] + Nr[490] + Nr[451] + Nr[84] + Nr[555] + Nr[1386] + Nr[609] + Nr[26] + Nr[260] + Nr[146] + Nr[26] + Nr[260] + Nr[146] + Nr[26] + Nr[261] + Nr[146] + Nr[937] + Nr[227] + Nr[84] + Nr[641] + Nr[426] + Nr[58] + Nr[59] + Nr[1387] + Nr[60] + Nr[1387] + Nr[60] + Nr[1387] + Nr[60] + Nr[260] + Nr[68] + Nr[262] + Nr[941] + Nr[231] + Nr[84] + Nr[424] + Nr[426] + Nr[525] + Nr[146] + Nr[490] + Nr[1388] + Nr[426] + Nr[261] + Nr[146] + Nr[490], GI = Nr[1388] + Nr[84] + Nr[75] + Nr[426] + Nr[287] + Nr[146] + Nr[490], zI = Nr[1388] + Nr[84] + Nr[73] + Nr[426] + Nr[287] + Nr[146] + Nr[490], YI = Nr[68] + Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[115] + Nr[464] + Nr[35] + Nr[1389], HI = Nr[457] + Nr[1379] + Nr[26] + Nr[262] + Nr[1088] + Nr[26] + Nr[1383] + Nr[84] + Nr[663] + Nr[59] + Nr[260] + Nr[68] + Nr[287] + Nr[350] + Nr[260] + Nr[350] + Nr[260] + Nr[68] + Nr[287] + Nr[350] + Nr[261] + Nr[941], qI = Nr[298] + Nr[84] + Nr[228] + Nr[299] + Nr[84] + Nr[115] + Nr[464] + Nr[35] + Nr[1389], WI = Nr[336] + Nr[174] + Nr[1390], UI = Nr[38] + Nr[1391], XI = Nr[1392], VI = Nr[1393] + Nr[66] + Nr[1394], ZI = Nr[1393] + Nr[66] + Nr[293], KI = Nr[1380] + Nr[13] + Nr[390], JI = Nr[1395], QI = Nr[163] + Nr[89] + Nr[243], tA = Nr[384] + Nr[66] + Nr[926] + Nr[66] + Nr[1396] + Nr[66] + Nr[400] + Nr[66] + Nr[1397], iA = Nr[961], eA = Nr[932] + Nr[178] + Nr[1398], nA = Nr[94] + Nr[1399] + Nr[174] + Nr[972], sA = Nr[202] + Nr[35] + Nr[144], rA = Nr[173] + Nr[2] + Nr[1400] + Nr[35] + Nr[184], hA = Nr[143] + Nr[178] + Nr[1401], aA = Nr[23] + Nr[178] + Nr[179], oA = Nr[1402], _A = Nr[383] + Nr[35] + Nr[144], fA = Nr[1403], cA = Nr[302] + Nr[66] + Nr[875], uA = Nr[625] + Nr[66] + Nr[1404] + Nr[66] + Nr[627], dA = Nr[625] + Nr[66] + Nr[579] + Nr[66] + Nr[627], lA = Nr[154] + Nr[115] + Nr[857] + Nr[38] + Nr[104] + Nr[174] + Nr[972], vA = Nr[2] + Nr[1405] + Nr[21] + Nr[234] + Nr[174] + Nr[972], bA = Nr[288] + Nr[1406] + Nr[843], gA = Nr[54] + Nr[331] + Nr[326], yA = Nr[599] + Nr[38] + Nr[193], pA = Nr[1407] + Nr[21] + Nr[1408] + Nr[89] + Nr[273], EA = Nr[1407] + Nr[21] + Nr[1408] + Nr[18] + Nr[931], mA = Nr[1409], xA = Nr[34] + Nr[54] + Nr[55], TA = Nr[2] + Nr[1405] + Nr[115] + Nr[1410] + Nr[54] + Nr[331] + Nr[174] + Nr[972], wA = Nr[1411], OA = Nr[298] + Nr[84] + Nr[21] + Nr[924] + Nr[54] + Nr[1412], kA = Nr[454] + Nr[16] + Nr[1413], SA = Nr[1414] + Nr[1415] + Nr[1291] + Nr[54] + Nr[26] + Nr[261] + Nr[146], IA = Nr[510] + Nr[146], AA = Nr[451] + Nr[115] + Nr[631], LA = Nr[1416], CA = Nr[79] + Nr[32] + Nr[33] + Nr[2] + Nr[447], RA = Nr[1417], MA = Nr[1418], DA = Nr[79] + Nr[115] + Nr[160] + Nr[2] + Nr[447], PA = Nr[216] + Nr[557] + Nr[992], NA = Nr[216] + Nr[182] + Nr[183], jA = Nr[37] + Nr[54] + Nr[1419], BA = Nr[465], $A = Nr[34] + Nr[54] + Nr[1419] + Nr[182] + Nr[1420] + Nr[2] + Nr[1421] + Nr[13] + Nr[175] + Nr[182] + Nr[834], FA = Nr[1422], GA = Nr[173] + Nr[54] + Nr[1423], zA = Nr[21] + Nr[924] + Nr[54] + Nr[1412], YA = Nr[725] + Nr[54] + Nr[1412], HA = Nr[336] + Nr[178] + Nr[1424] + Nr[2] + Nr[1421] + Nr[89] + Nr[273] + Nr[13] + Nr[1425], qA = Nr[1426], WA = Nr[173] + Nr[54] + Nr[1427], UA = Nr[1428] + Nr[89] + Nr[1429], XA = Nr[1402] + Nr[21] + Nr[924] + Nr[54] + Nr[1419], VA = Nr[1] + Nr[54] + Nr[331] + Nr[38] + Nr[844], ZA = Nr[1430] + Nr[125] + Nr[126], KA = Nr[1431] + Nr[174] + Nr[177], JA = Nr[841], QA = Nr[1431] + Nr[26] + Nr[203] + Nr[204], tL = Nr[26] + Nr[734] + Nr[26], iL = Nr[383] + Nr[178] + Nr[1432] + Nr[54] + Nr[155], eL = Nr[173] + Nr[115] + Nr[1433], nL = Nr[1434] + Nr[54] + Nr[986], sL = Nr[970] + Nr[66] + Nr[1404] + Nr[66] + Nr[1435], rL = Nr[53] + Nr[174] + Nr[972] + Nr[54] + Nr[55], hL = Nr[23], aL = Nr[1436] + Nr[182] + Nr[1437], oL = Nr[970] + Nr[66] + Nr[1404] + Nr[66] + Nr[1438], _L = Nr[272] + Nr[54] + Nr[986], fL = Nr[1439], cL = Nr[9] + Nr[178] + Nr[1401], uL = Nr[202] + Nr[21] + Nr[234] + Nr[174] + Nr[158], dL = Nr[202] + Nr[21] + Nr[234], lL = Nr[173] + Nr[2] + Nr[1440] + Nr[35] + Nr[144], vL = Nr[1441] + Nr[115] + Nr[160], bL = Nr[63] + Nr[1442], gL = Nr[173] + Nr[94] + Nr[1443], yL = Nr[23] + Nr[38] + Nr[104] + Nr[174] + Nr[238], pL = Nr[1444] + Nr[115] + Nr[1445], EL = Nr[909] + Nr[174] + Nr[238], mL = Nr[588] + Nr[66] + Nr[1446] + Nr[66] + Nr[880], xL = Nr[588] + Nr[66] + Nr[1446] + Nr[66] + Nr[880] + Nr[66] + Nr[211], TL = Nr[588] + Nr[66] + Nr[1446] + Nr[66] + Nr[885] + Nr[66] + Nr[211], wL = Nr[248] + Nr[54] + Nr[249] + Nr[32] + Nr[1447] + Nr[326], OL = Nr[1448] + Nr[66] + Nr[1449], kL = Nr[180] + Nr[35] + Nr[51] + Nr[2] + Nr[447] + Nr[178] + Nr[448], SL = Nr[1450] + Nr[84] + Nr[379], IL = Nr[1451] + Nr[84] + Nr[379], AL = Nr[311] + Nr[66] + Nr[422], LL = Nr[1452] + Nr[84] + Nr[379], CL = Nr[311] + Nr[66] + Nr[423], RL = Nr[58] + Nr[59] + Nr[260] + Nr[350] + Nr[1453] + Nr[350] + Nr[260] + Nr[350] + Nr[261] + Nr[61], ML = Nr[63] + Nr[1454] + Nr[260], DL = Nr[1455] + Nr[38] + Nr[193], PL = Nr[892] + Nr[66] + Nr[400], NL = Nr[909], jL = Nr[1456] + Nr[66] + Nr[1438], BL = Nr[959] + Nr[115] + Nr[978], $L = Nr[159] + Nr[115] + Nr[868], FL = Nr[376] + Nr[16] + Nr[616], GL = Nr[1457] + Nr[66] + Nr[1458], zL = Nr[298] + Nr[84] + Nr[89] + Nr[1459], YL = Nr[63] + Nr[1460], HL = Nr[261] + Nr[146] + Nr[26] + Nr[1414] + Nr[1415] + Nr[178] + Nr[188] + Nr[178] + Nr[188] + Nr[178] + Nr[188], qL = Nr[157] + Nr[146] + Nr[26] + Nr[525] + Nr[146], WL = Nr[981] + Nr[89] + Nr[244], UL = Nr[1461] + Nr[1113] + Nr[1462], XL = Nr[1463], VL = Nr[98] + Nr[113], ZL = Nr[1457] + Nr[66] + Nr[1464], KL = Nr[154] + Nr[18] + Nr[1465], JL = Nr[336] + Nr[89] + Nr[1459], QL = Nr[23] + Nr[89] + Nr[1459], tC = Nr[961] + Nr[68] + Nr[272] + Nr[68] + Nr[1402], iC = Nr[970] + Nr[66] + Nr[1466], eC = Nr[961] + Nr[68] + Nr[1467], nC = Nr[961] + Nr[68] + Nr[272] + Nr[68] + Nr[816], sC = Nr[961] + Nr[68] + Nr[1468], rC = Nr[961] + Nr[68] + Nr[1469], hC = Nr[909] + Nr[68] + Nr[272] + Nr[68] + Nr[1402], aC = Nr[909] + Nr[68] + Nr[1467], oC = Nr[321] + Nr[66] + Nr[1404] + Nr[66] + Nr[1438], _C = Nr[909] + Nr[68] + Nr[272] + Nr[68] + Nr[816], fC = Nr[379] + Nr[68] + Nr[1402], cC = Nr[1470], uC = Nr[1471], dC = Nr[379] + Nr[68] + Nr[816], lC = Nr[302] + Nr[66] + Nr[899], vC = Nr[288] + Nr[68] + Nr[333], bC = Nr[1448], gC = Nr[376] + Nr[68] + Nr[1402], yC = Nr[376] + Nr[68] + Nr[1472], pC = Nr[1448] + Nr[66] + Nr[1438], EC = Nr[376] + Nr[68] + Nr[816], mC = Nr[461] + Nr[66] + Nr[110], xC = Nr[1473] + Nr[68] + Nr[466], TC = Nr[383] + Nr[174] + Nr[972] + Nr[105] + Nr[194], wC = Nr[384] + Nr[66] + Nr[209] + Nr[66] + Nr[1474], OC = Nr[1475], kC = Nr[1476], SC = Nr[384] + Nr[66] + Nr[209] + Nr[66] + Nr[1477], IC = Nr[1478], AC = Nr[384] + Nr[66] + Nr[209] + Nr[66] + Nr[1479] + Nr[66] + Nr[1480] + Nr[66] + Nr[302], LC = Nr[154] + Nr[68] + Nr[1481] + Nr[68] + Nr[288], CC = Nr[154] + Nr[68] + Nr[288], RC = Nr[384] + Nr[66] + Nr[209] + Nr[66] + Nr[1479] + Nr[66] + Nr[278], MC = Nr[154] + Nr[68] + Nr[881], DC = Nr[384] + Nr[66] + Nr[209] + Nr[66] + Nr[1479] + Nr[66] + Nr[579], PC = Nr[154] + Nr[68] + Nr[181], NC = Nr[277] + Nr[174] + Nr[1482], jC = Nr[105] + Nr[1483] + Nr[174] + Nr[972], BC = Nr[182] + Nr[1484] + Nr[504] + Nr[1485] + Nr[174] + Nr[972], $C = Nr[35] + Nr[1486] + Nr[174] + Nr[972], FC = Nr[21] + Nr[1487], GC = Nr[1488], zC = Nr[1489], YC = Nr[888] + Nr[16] + Nr[1490], HC = Nr[1491] + Nr[89] + Nr[244], qC = Nr[23] + Nr[21] + Nr[328] + Nr[94] + Nr[1492], WC = Nr[1493] + Nr[66] + Nr[311], UC = Nr[1493] + Nr[66] + Nr[421], XC = Nr[1493] + Nr[66] + Nr[310], VC = Nr[1494], ZC = Nr[1495] + Nr[68] + Nr[1496], KC = Nr[1494] + Nr[68] + Nr[499], JC = Nr[1494] + Nr[68] + Nr[1099], QC = Nr[917] + Nr[66] + Nr[293] + Nr[66] + Nr[1497], tR = Nr[917] + Nr[66] + Nr[293] + Nr[66] + Nr[1497] + Nr[66] + Nr[305], iR = Nr[267] + Nr[2] + Nr[3] + Nr[178] + Nr[1498], eR = Nr[499] + Nr[228] + Nr[634], nR = Nr[1099] + Nr[228] + Nr[634], sR = Nr[220] + Nr[89] + Nr[244], rR = Nr[932] + Nr[21] + Nr[328], hR = Nr[267] + Nr[38] + Nr[193], aR = Nr[66] + Nr[158] + Nr[261], oR = Nr[66] + Nr[1499], _R = Nr[218] + Nr[1500], fR = Nr[218] + Nr[1041], cR = Nr[408] + Nr[113], uR = Nr[408] + Nr[97], dR = Nr[408], lR = Nr[222] + Nr[21] + Nr[328] + Nr[178] + Nr[404], vR = Nr[34], bR = Nr[1501] + Nr[21] + Nr[328] + Nr[178] + Nr[404], gR = Nr[408] + Nr[2] + Nr[269], yR = Nr[1502], pR = Nr[220] + Nr[178] + Nr[404], ER = Nr[1503], mR = Nr[1504], xR = Nr[1505], TR = Nr[903], wR = Nr[1506], OR = Nr[1507], kR = Nr[196], SR = Nr[1508], IR = Nr[1509] + Nr[66] + Nr[1510] + Nr[66] + Nr[1511], AR = Nr[317] + Nr[66] + Nr[209] + Nr[66] + Nr[1512], LR = Nr[1402] + Nr[16] + Nr[1513], CR = Nr[23] + Nr[338] + Nr[194] + Nr[115] + Nr[160], RR = Nr[1514], MR = Nr[329] + Nr[115] + Nr[1515], DR = Nr[408] + Nr[261], PR = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[1516], NR = Nr[302] + Nr[66] + Nr[899] + Nr[66] + Nr[1517], jR = Nr[1407] + Nr[38] + Nr[1518], BR = Nr[480] + Nr[174] + Nr[1519], $R = Nr[1520], FR = Nr[1521], GR = Nr[1521] + Nr[97], zR = Nr[173] + Nr[174] + Nr[1522], YR = Nr[1501], HR = Nr[1521] + Nr[113], qR = Nr[861] + Nr[66] + Nr[413], WR = Nr[220] + Nr[105] + Nr[1523], UR = Nr[220] + Nr[54] + Nr[1524], XR = Nr[1525], VR = Nr[1526], ZR = Nr[1527], KR = Nr[166] + Nr[54] + Nr[1528], JR = Nr[383] + Nr[54] + Nr[1528], QR = Nr[115] + Nr[1529] + Nr[21] + Nr[1487], tM = Nr[1380] + Nr[13] + Nr[390] + Nr[115] + Nr[1530], iM = Nr[429] + Nr[21] + Nr[1531], eM = Nr[1532], nM = Nr[1] + Nr[174] + Nr[175] + Nr[54] + Nr[331], sM = Nr[173] + Nr[32] + Nr[1447], rM = Nr[248] + Nr[54] + Nr[249] + Nr[38] + Nr[104] + Nr[89] + Nr[1533] + Nr[178] + Nr[955] + Nr[18] + Nr[956] + Nr[115] + Nr[1534], hM = Nr[45] + Nr[2] + Nr[611], aM = Nr[1535], oM = Nr[173] + Nr[1536], _M = Nr[173] + Nr[182] + Nr[1537], fM = Nr[173] + Nr[228] + Nr[1538], cM = Nr[173] + Nr[115] + Nr[1539], uM = Nr[178] + Nr[460] + Nr[115] + Nr[870], dM = Nr[2] + Nr[1540], lM = Nr[228] + Nr[1541], vM = Nr[21] + Nr[924] + Nr[326], bM = Nr[115] + Nr[1542], gM = Nr[228] + Nr[229], yM = Nr[174] + Nr[972] + Nr[54] + Nr[55], pM = Nr[228] + Nr[299] + Nr[105] + Nr[362], EM = Nr[298] + Nr[1543] + Nr[26] + Nr[248] + Nr[26] + Nr[830] + Nr[510], mM = Nr[157] + Nr[68] + Nr[260], xM = Nr[298] + Nr[1543] + Nr[204] + Nr[178] + Nr[1544] + Nr[26] + Nr[2] + Nr[1545] + Nr[26] + Nr[248] + Nr[26] + Nr[830] + Nr[510] + Nr[367] + Nr[2] + Nr[369], TM = Nr[1546] + Nr[367] + Nr[510] + Nr[367] + Nr[1547], wM = 0;
    if (t[Yc]) {
        var OM = navigator[Hc], kM = /opera/i[_o](OM), SM = !kM && /msie/i[_o](OM), IM = /rv:11.0/i[_o](OM);
        if (IM && (SM = !0), /msie\s[6,7,8]/i[_o](OM))throw new Error("your browser is not supported");
        var AM = /webkit|khtml/i[_o](OM), LM = !AM && /gecko/i[_o](OM), CM = /firefox\//i[_o](OM), RM = /Chrome\//i[_o](OM), MM = !RM && /Safari\//i[_o](OM), DM = /Macintosh;/i.test(OM), PM = /(iPad|iPhone|iPod)/g.test(OM), NM = /Android/g.test(OM), jM = /Windows Phone/g.test(OM), BM = (PM || NM || jM) && qc in t, $M = OM.match(/AppleWebKit\/([0-9\.]*)/);
        if ($M && $M[jr] > 1)var FM = parseFloat($M[1]);
        if (NM && (parseFloat(OM[Wc](/Android\s([0-9\.]*)/)[1]), FM && 534.3 >= FM))var GM = !0
    }
    t[Xr] || (t[Xr] = t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t[Uc] || t.msRequestAnimationFrame || function (i) {
            return t.setTimeout(function () {
                i()
            }, 1e3 / 60)
        }), t.cancelAnimationFrame || (t[Xc] = t[Vc] || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t[Zc] || function (i) {
            return t.clearTimeout(i)
        });
    var zM = {SELECTION_TOLERANCE: 2, DOUBLE_BUFFER: e, LABEL_COLOR: Kc};
    K(zM, {
        FONT_STYLE: {
            get: function () {
                return this._fontStyle || (this._fontStyle = Jc)
            }, set: function (t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        }, FONT_SIZE: {
            get: function () {
                return this._fontSize || (this._fontSize = 12)
            }, set: function (t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        }, FONT_FAMILY: {
            get: function () {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            }, set: function (t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        }, FONT: {
            get: function () {
                return (this._fontChanged || this._fontChanged === e) && (this._fontChanged = !1, this._font = this[Qc] + Qr + this[tu] + iu + this.FONT_FAMILY), this._font
            }
        }
    });
    var YM = function () {
    };
    YM[fh] = {
        _mz: 0, _n1: 0, _l5: !0, _kp: 1, _fs: function (t, i, e) {
            var n = this._n87(i), s = this._n86(e), r = t * n, h = t * s;
            return this._9z(t, i - r, e - h)
        }, _n87: function (t) {
            return (t - this._mz) / this._kp
        }, _n86: function (t) {
            return (t - this._n1) / this._kp
        }, _de: function (t, i) {
            return this._9z(this._kp, this._mz + t, this._n1 + i)
        }, _9z: function (t, i, e) {
            return this._kp == t && this._mz == i && this._n1 == e ? !1 : (this._l5 && (1 != this[La] || 2 != this.ratio ? (i = Math.round(i * this[La]) / this.ratio, e = Math[Za](e * this[La]) / this[La]) : (i = Math[Za](i), e = Math.round(e))), this._mz = i, this._n1 = e, this._kp = t, void(this._3o && this._3o()))
        }, _gb: function () {
            return {a: this._kp, b: 0, c: 0, d: this._kp, e: this._mz, f: this._n1}
        }, toString: function () {
            return eu + $(this._kp) + nu + $(this._kp) + xh + $(this._mz) + xh + $(this._n1) + Th
        }, _gc: function (t) {
            di(t, Zf, this.toString())
        }
    };
    var HM = function (t) {
        this._ja = [], this._lo = {}, t && this.add(t)
    };
    HM[fh] = {
        _ja: null, _lo: null, get: function (t) {
            return this.getByIndex(t)
        }, getById: function (t) {
            return this._lo[t]
        }, getByIndex: function (t) {
            return this._ja[t]
        }, forEach: function (t, i, e) {
            return l(this._ja, t, i, e)
        }, forEachReverse: function (t, i, e) {
            return b(this._ja, t, i, e)
        }, size: function () {
            return this._ja.length
        }, contains: function (t) {
            return this.containsById(t.id)
        }, containsById: function (t) {
            return this._lo.hasOwnProperty(t)
        }, setIndex: function (t, i) {
            var e = this._ja.indexOf(t);
            if (0 > e)throw new Error(ba + t.id + su);
            return e == i ? !1 : (this._ja[Gr](e, 1), this._ja.splice(i, 0, t), !0)
        }, setIndexAfter: function (t, i) {
            var e = this._ja.indexOf(t);
            if (0 > e)throw new Error(ba + t.id + su);
            return e == i ? i : e == i + 1 ? i + 1 : (e > i && (i += 1), this._ja[Gr](e, 1), this._ja.splice(i, 0, t), i)
        }, setIndexBefore: function (t, i) {
            var e = this._ja[Ur](t);
            if (0 > e)throw new Error(ba + t.id + su);
            return e == i ? i : e == i - 1 ? i - 1 : (i > e && (i -= 1), this._ja.splice(e, 1), this._ja.splice(i, 0, t), i)
        }, indexOf: function (t) {
            return this._ja.indexOf(t)
        }, getIndexById: function (t) {
            var i = this[ru](t);
            return i ? this._ja[Ur](i) : -1
        }, add: function (t, i) {
            return A(t) ? this._fm(t, i) : this._kl(t, i)
        }, addFirst: function (t) {
            return this[qa](t, 0)
        }, _fm: function (t, i) {
            if (0 == t[jr])return !1;
            var n = !1, s = i >= 0;
            t = t._ja || t;
            for (var r = 0, h = t[jr]; h > r; r++) {
                var a = t[r];
                null !== a && a !== e && this._kl(a, i, !0) && (n = !0, s && i++)
            }
            return n
        }, _kl: function (t, i) {
            var n = t.id;
            return n === e || this[hu](n) ? !1 : (y(this._ja, t, i), this._lo[n] = t, t)
        }, remove: function (t) {
            return A(t) ? this._n7f(t) : t.id ? this._fo(t.id, t) : this.removeById(t)
        }, _n7f: function (t) {
            if (0 == t[jr])return !1;
            var i = !1;
            t = t._ja || t;
            for (var n = 0, s = t.length; s > n; n++) {
                var r = t[n];
                if (null !== r && r !== e) {
                    r.id === e && (r = this._lo[r]);
                    var h = r.id;
                    this._fo(h, r, !0) && (i = !0)
                }
            }
            return i
        }, _fo: function (t, i) {
            return t !== e && this[hu](t) ? ((null === i || i === e) && (i = this[ru](t)), delete this._lo[t], p(this._ja, i), !0) : !1
        }, removeById: function (t) {
            var i = this._lo[t];
            return i ? this._fo(t, i) : !1
        }, set: function (t) {
            if (!t || 0 == t)return void this[Ia]();
            if (this.isEmpty() || !A(t))return this[Ia](), this.add(t);
            var i = [], e = {}, n = 0;
            if (l(t, function (t) {
                    this._lo[t.id] ? (e[t.id] = t, n++) : i[Wr](t)
                }, this), n != this[jr]) {
                var s = [];
                this.forEach(function (t) {
                    e[t.id] || s[Wr](t)
                }, this), s[jr] && this._n7f(s)
            }
            return i[jr] && this._fm(i), !0
        }, clear: function () {
            return this[qo]() ? !1 : (this._ja[jr] = 0, this._lo = {}, !0)
        }, toDatas: function () {
            return this._ja.slice(0)
        }, isEmpty: function () {
            return 0 == this._ja[jr]
        }, valueOf: function () {
            return this._ja[jr]
        }, clone: function (t) {
            var i = new HM;
            return i.add(t ? g(this._ja) : this[au]()), i
        }
    }, K(HM.prototype, {
        datas: {
            get: function () {
                return this._ja
            }
        }, random: {
            get: function () {
                return this._ja && this._ja[jr] ? this._ja[M(this._ja[jr])] : null
            }
        }, length: {
            get: function () {
                return this._ja ? this._ja.length : 0
            }
        }
    });
    var qM = (2 * Math.PI, .5 * Math.PI), WM = function (t, i) {
        i = i[ou]();
        for (var e = SM ? t[_u] : t[fu]; e && (1 != e[cu] || e.tagName && e[uu].toUpperCase() != i);)e = SM ? e.nextSibling : e.nextElementSibling;
        return e && 1 == e.nodeType && e.tagName && e[uu][ou]() == i ? e : null
    }, UM = function (t, i, e) {
        t instanceof UM && (i = t.y, t = t.x, e = t.rotate), this[du](t, i, e)
    }, XM = function (t, i, e, n) {
        var s = t - e, r = i - n;
        return Math[Wa](s * s + r * r)
    };
    UM.prototype = {
        x: 0, y: 0, rotate: e, set: function (t, i, e) {
            this.x = t || 0, this.y = i || 0, this.rotate = e || 0
        }, negate: function () {
            this.x = -this.x, this.y = -this.y
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y
        }, distanceTo: function (t) {
            return XM(this.x, this.y, t.x, t.y)
        }, toString: function () {
            return lu + this.x + vu + this.y + Th
        }, clone: function () {
            return new UM(this.x, this.y)
        }
    }, Object[bh](UM[fh], bu, {
        get: function () {
            return Math[Wa](this.x * this.x + this.y * this.y)
        }
    });
    var VM = function (t, i, n, s) {
        t !== e && this._mo(t, i, n, s)
    };
    VM[fh] = {
        _n2: null, _n3: null, _mx: null, _n5: null, _n7: null, _n9: null, _n8: 1, _mo: function (t, i, e, n) {
            this._n2 = t, this._n3 = i, this._mx = e, this._n5 = n, t == e ? (this._n7 = -1, this._n8 = 0, this._n9 = t) : (this._n7 = (i - n) / (t - e), this._n9 = i - this._n7 * t, this._n8 = 1), this._ke = Math[Ua](this._n5 - this._n3, this._mx - this._n2), this._n8os = Math[ro](this._ke), this._sin = Math.sin(this._ke)
        }, _d6: function (t) {
            return 0 == this._n8 ? Number[gu] : this._n7 * t + this._n9
        }, _d7: function (t) {
            return 0 == this._n7 ? Number.NaN : (t - this._n9) / this._n7
        }, _$j: function (t) {
            var i, e, n, s, r, h = t[0], a = t[2], o = t[4], _ = t[1], f = t[3], c = t[5], u = this._n7, d = this._n9, l = this._n8;
            if (0 == l ? (n = Math[Wa]((-u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = -u * a + u * h, r = u * o - 2 * u * a + u * h) : (n = Math[Wa]((-_ + u * h + d) * c + f * f + (-2 * u * a - 2 * d) * f + (u * o + d) * _ + (-u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = -f + _ + u * a - u * h, r = c - 2 * f + _ - u * o + 2 * u * a - u * h), 0 != r) {
                i = (n + s) / r, e = (-n + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Yi(i, t)), e >= 0 && 1 >= e && (b = Yi(e, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        }, _3t: function (t, i, e) {
            if (this._n7 == t._n7 || 0 == this._n8 && 0 == t._n8)return null;
            var n, s;
            if (n = 0 == this._n8 ? this._n9 : 0 == t._n8 ? t._n9 : (t._n9 - this._n9) / (this._n7 - t._n7), s = 0 == this._n7 ? this._n9 : 0 == t._n7 ? t._n9 : this._n8 ? this._n7 * n + this._n9 : t._n7 * n + t._n9, !i)return {
                x: n,
                y: s
            };
            var r, h, a;
            if (e)r = -i / 2, h = -r; else {
                r = -XM(this._n2, this._n3, n, s), h = XM(this._mx, this._n5, n, s);
                var o = -r + h;
                if (o > i) {
                    var _ = i / o;
                    r *= _, h *= _
                } else a = (i - o) / 2
            }
            var f = this._85(n, s, r), c = this._85(n, s, h);
            return a && (f._rest = a, c._rest = a), [f, c]
        }, _85: function (t, i, e) {
            return 0 == this._n8 ? {x: t, y: i + e} : {x: t + e * this._n8os, y: i + e * this._sin}
        }
    };
    var ZM = function (t, i) {
        this.width = t, this[Sa] = i
    };
    ZM[fh] = {
        width: 0, height: 0, isEmpty: function () {
            return this[ka] <= 0 || this.height <= 0
        }, clone: function () {
            return new ZM(this.width, this[Sa])
        }, toString: function () {
            return yu + this[ka] + vu + this[Sa] + Th
        }
    };
    var KM = function (t, i, n, s) {
        n === e && (n = -1), s === e && (s = -1), this.x = t || 0, this.y = i || 0, this[ka] = n, this[Sa] = s
    };
    KM[fh] = {
        x: 0, y: 0, width: -1, height: -1, setByRect: function (t) {
            this.x = t.x || 0, this.y = t.y || 0, this[ka] = t[ka] || 0, this[Sa] = t.height || 0
        }, set: function (t, i, e, n) {
            this.x = t || 0, this.y = i || 0, this.width = e || 0, this.height = n || 0
        }, offset: function (t, i) {
            this.x += t, this.y += i
        }, contains: function (t, i) {
            return t instanceof KM ? ai(this.x, this.y, this.width, this.height, t.x, t.y, t.width, t.height) : t >= this.x && t <= this.x + this[ka] && i >= this.y && i <= this.y + this[Sa]
        }, intersectsPoint: function (t, i, e) {
            return this.width <= 0 && this[Sa] <= 0 ? !1 : e ? this[pu](t - e, i - e, 2 * e, 2 * e) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
        }, intersectsRect: function (t, i, e, n) {
            return ri(this.x, this.y, this[ka], this[Sa], t, i, e, n)
        }, intersects: function (t, i) {
            return t instanceof KM ? this[pu](t.x, t.y, t[ka], t[Sa]) : this[Va](t, i)
        }, intersection: function (t, i, e, n) {
            var s = this.x, r = this.y, h = s;
            h += this[ka];
            var a = r;
            a += this[Sa];
            var o = t;
            o += e;
            var _ = i;
            return _ += n, t > s && (s = t), i > r && (r = i), h > o && (h = o), a > _ && (a = _), h -= s, a -= r, 0 > h || 0 > a ? null : new KM(s, r, h, a)
        }, addPoint: function (t) {
            this.add(t.x, t.y)
        }, add: function (t, i) {
            if (t instanceof KM)return this.addRect(t.x, t.y, t[ka], t.height);
            if (t instanceof UM && (i = t.y, t = t.x), this[ka] < 0 || this.height < 0)return this.x = t, this.y = i, void(this[ka] = this[Sa] = 0);
            var e = this.x, n = this.y, s = this.width, r = this.height;
            s += e, r += n, e > t && (e = t), n > i && (n = i), t > s && (s = t), i > r && (r = i), s -= e, r -= n, s > Number[Eu] && (s = Number.MAX_VALUE), r > Number.MAX_VALUE && (r = Number[Eu]), this.set(e, n, s, r)
        }, addRect: function (t, i, e, n) {
            var s = this[ka], r = this[Sa];
            (0 > s || 0 > r) && this.set(t, i, e, n);
            var h = e, a = n;
            if (!(0 > h || 0 > a)) {
                var o = this.x, _ = this.y;
                s += o, r += _;
                var f = t, c = i;
                h += f, a += c, o > f && (o = f), _ > c && (_ = c), h > s && (s = h), a > r && (r = a), s -= o, r -= _, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), r > Number.MAX_VALUE && (r = Number[Eu]), this[du](o, _, s, r)
            }
        }, grow: function (t, i, e, n) {
            return k(t) ? 1 == arguments.length ? n = i = e = t || 0 : 2 == arguments.length ? (e = t || 0, n = i || 0) : (t = t || 0, i = i || 0, e = e || 0, n = n || 0) : (i = t[vo] || 0, e = t.bottom || 0, n = t[Ph] || 0, t = t[Jh] || 0), this.x -= i, this.y -= t, this[ka] += i + n, this.height += t + e, this
        }, isEmpty: function () {
            return this[ka] <= 0 && this[Sa] <= 0
        }, toString: function () {
            return this.x + mu + this.y + mu + this.width + mu + this.height
        }, union: function (t) {
            var i = this.width, e = this.height;
            if (0 > i || 0 > e)return new KM(t.x, t.y, t[ka], t[Sa]);
            var n = t[ka], s = t[Sa];
            if (0 > n || 0 > s)return new KM(this.x, this.y, this.width, this.height);
            var r = this.x, h = this.y;
            i += r, e += h;
            var a = t.x, o = t.y;
            return n += a, s += o, r > a && (r = a), h > o && (h = o), n > i && (i = n), s > e && (e = s), i -= r, e -= h, i > Number.MAX_VALUE && (i = Number[Eu]), e > Number.MAX_VALUE && (e = Number.MAX_VALUE), new KM(r, h, i, e)
        }, clear: function () {
            this[du](0, 0, -1, -1)
        }, equals: function (t) {
            return this.x == t.x && this.y == t.y && this[ka] == t[ka] && this[Sa] == t[Sa]
        }, clone: function (t, i) {
            return new KM(this.x + (t || 0), this.y + (i || 0), this[ka], this[Sa])
        }, getIntersectionPoint: function (t, i, e, n) {
            return si(this, t, i, e, n)
        }
    }, N(KM, ZM), K(KM.prototype, {
        bottom: {
            get: function () {
                return this.y + this[Sa]
            }
        }, right: {
            get: function () {
                return this.x + this.width
            }
        }, cx: {
            get: function () {
                return this.x + this[ka] / 2
            }
        }, cy: {
            get: function () {
                return this.y + this[Sa] / 2
            }
        }, center: {
            get: function () {
                return new UM(this.cx, this.cy)
            }
        }
    });
    var JM = function (t, i, e, n) {
        1 == arguments.length ? i = e = n = t : 2 == arguments.length && (e = t, n = i), this.set(t, i, e, n)
    };
    JM.prototype = {
        top: 0, bottom: 0, left: 0, right: 0, set: function (t, i, e, n) {
            this.top = t || 0, this.left = i || 0, this[jh] = e || 0, this.right = n || 0
        }, clone: function () {
            return new JM(this.top, this[vo], this[jh], this.right)
        }, equals: function (t) {
            return t && this[Jh] == t[Jh] && this.bottom == t[jh] && this.left == t.left && this.right == t.right
        }
    };
    var QM = function (t, i) {
        this[Bh] = t, this[$h] = i
    };
    QM.prototype = {
        verticalPosition: !1, horizontalPosition: !1, toString: function () {
            return (this.horizontalPosition || "") + (this.verticalPosition || "")
        }
    }, Z(QM.prototype, xu, {
        get: function () {
            return (this[Bh] || "") + (this[$h] || "")
        }
    });
    var tD = Tu, iD = wu, eD = Ou, nD = y_, sD = ku, rD = Su;
    QM[Iu] = new QM(tD, nD), QM.LEFT_MIDDLE = new QM(tD, sD), QM.LEFT_BOTTOM = new QM(tD, rD), QM.CENTER_TOP = new QM(iD, nD), QM[Au] = new QM(iD, sD), QM.CENTER_BOTTOM = new QM(iD, rD), QM.RIGHT_TOP = new QM(eD, nD), QM.RIGHT_MIDDLE = new QM(eD, sD), QM[Lu] = new QM(eD, rD);
    var hD = [QM[Iu], QM.LEFT_MIDDLE, QM.LEFT_BOTTOM, QM.CENTER_TOP, QM.CENTER_MIDDLE, QM.CENTER_BOTTOM, QM.RIGHT_TOP, QM[Cu], QM[Lu]];
    Z(QM, oh, {
        get: function () {
            return hD[M(hD[jr])]
        }
    });
    var aD = function (t, i, e, n, s) {
        this[du](t, i, e, n), this[Ru] = s
    };
    aD[fh] = {
        radius: 0, classify: function (t, i, e, n) {
            return i > t ? 0 : i + n > t ? 1 : e - n > t ? 2 : e > t ? 3 : 4
        }, intersectsRect: function (t, i, e, n) {
            if (B(this, aD, pu, arguments) === !1)return !1;
            var s = this.x, r = this.y, h = s + this.width, a = r + this.height, o = 2 * radius, _ = 2 * radius, f = Math.min(this[ka], Math[Nh](o)) / 2, c = Math.min(this.height, Math[Nh](_)) / 2, u = this[Mu](t, s, h, f), d = this[Mu](t + e, s, h, f), l = this[Mu](i, r, a, c), v = this.classify(i + n, r, a, c);
            return 2 == u || 2 == d || 2 == l || 2 == v ? !0 : 2 > u && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + e - (s + f) : t -= h - f, i = 1 == v ? i = i + n - (r + c) : i -= a - c, t /= f, i /= c, 1 >= t * t + i * i)
        }, intersectsPoint: function (t, i) {
            if (B(this, aD, Va, arguments) === !1)return !1;
            var e = this.x, n = this.y, s = e + this[ka], r = n + this[Sa];
            if (e > t || n > i || t >= s || i >= r)return !1;
            var h = 2 * radius, a = 2 * radius, o = Math[Ha](this[ka], Math[Nh](h)) / 2, _ = Math.min(this[Sa], Math.abs(a)) / 2;
            return t >= (e += o) && t < (e = s - o) ? !0 : i >= (n += _) && i < (n = r - _) ? !0 : (t = (t - e) / o, i = (i - n) / _, 1 >= t * t + i * i)
        }, clone: function () {
            return new aD(this.x, this.y, this.width, this[Sa], this[Ru])
        }
    }, N(aD, KM);
    var oD = function (t, i, e, n) {
        this[yo] = t, this.type = i, this[Rc] = e, this.value = n
    };
    oD.prototype = {
        source: null, type: null, kind: null, value: null, toString: function () {
            return Du + this[yo] + Pu + this.type + Nu + this.kind
        }
    };
    var _D = function (t, i, e, n, s) {
        this[yo] = t, this[Rc] = i, this.oldValue = n, this[ef] = e, this.propertyType = s
    };
    _D[fh] = {
        type: ju, propertyType: null, toString: function () {
            return Du + this[yo] + Pu + this[no] + Bu + this.kind + $u + this.oldValue + Fu + this.value
        }
    }, N(_D, oD), Z(_D.prototype, Gu, {
        get: function () {
            return this[Rc]
        }, set: function (t) {
            this[Rc] = t
        }
    });
    var fD = function (t, i, e) {
        this.source = t, this[zu] = t.parent, this[ef] = i, this.newIndex = e, this[zu] && (this[Yu] = this.oldValue[Hu](t))
    };
    fD[fh] = {kind: S_}, N(fD, _D);
    var cD = function (t, i) {
        this[yo] = t, this[ef] = i
    };
    cD.prototype[Rc] = qu, N(cD, _D);
    var uD = function (t, i) {
        this[yo] = t, this.value = i
    };
    uD[fh].kind = Wu, N(uD, _D);
    var dD = function (t, i, e, n) {
        this[yo] = i, this[zu] = e, this.value = n, this[S_] = t, this[Uu] = i, this.oldIndex = e, this.newIndex = n
    };
    dD.prototype.kind = Xu, N(dD, _D);
    var lD = function () {
    };
    lD[fh] = {
        listener: null, beforeEvent: function (t) {
            return null != this.listener && this.listener.beforeEvent ? this.listener[yh](t) : !0
        }, onEvent: function (t) {
            null != this.listener && this.listener[Vu] && this.listener[Vu](t)
        }
    };
    var vD = function () {
        j(this, vD, arguments), this.events = {}, this[Zu] = []
    }, bD = function (t, i) {
        this.listener = t, this.scope = i, t instanceof Function ? this.onEvent = t : (this.onEvent = t.onEvent, this.beforeEvent = t[yh]), this[Ku] = function (t) {
            return t && this[Ju] == t[Ju] && this.scope == t.scope
        }
    };
    bD[fh] = {
        equals: function (t) {
            return t && this.listener == t.listener && this[dh] == t[dh]
        }, destroy: function () {
            delete this.scope, delete this[Ju]
        }
    }, vD.prototype = {
        listeners: null, _n95: function () {
            return this[Zu] && this.listeners[jr] > 0
        }, _84: function (t, i) {
            return t instanceof vD ? t : new bD(t, i)
        }, _n74: function (t, i) {
            if (t instanceof vD)return this[Zu][Ur](t);
            for (var e = this[Zu], n = 0, s = e[jr]; s > n; n++) {
                var r = e[n];
                if (r[Ju] == t && r[dh] == i)return n
            }
            return -1
        }, contains: function (t, i) {
            return this._n74(t, i) >= 0
        }, addListener: function (t, i) {
            return this[Ff](t, i) ? !1 : void this.listeners[Wr](this._84(t, i))
        }, removeListener: function (t, i, e) {
            var n = this._n74(t, i);
            if (n >= 0) {
                var s = this.listeners[Gr](n, 1)[0];
                e || F(s)
            }
        }, on: function (t, i) {
            this.addListener(t, i)
        }, un: function (t, i, e) {
            this[Qu](t, i, e)
        }, onEvent: function (t) {
            return this[Zu] ? void l(this.listeners, function (i) {
                i[Vu] && (i[dh] ? i.onEvent[Fr](i.scope, t) : i[Vu](t))
            }, this) : !1
        }, beforeEvent: function (t) {
            return this[Zu] ? l(this[Zu], function (i) {
                return i.beforeEvent ? i[dh] ? i[yh][Fr](i.scope, t) : i[yh](t) : !0
            }, this) : !0
        }, _dh: function (t) {
            return this[yh](t) === !1 ? !1 : (this[Vu](t), !0)
        }, clear: function () {
            this[Zu] = []
        }, destroy: function () {
            this.clear()
        }
    }, N(vD, lD);
    var gD = {
        onEvent: function () {
        }, beforeEvent: function () {
        }
    }, yD = function (t, i, e, n, s) {
        this[yo] = t, this[no] = td, this[Rc] = i, this[to] = e, this.index = n, this.oldIndex = s
    };
    yD.prototype = {
        index: -1, oldIndex: -1, toString: function () {
            return Du + this.source + Pu + this.type + Nu + this[Rc] + id + this.data + ed + this.index + nd + this[Yu]
        }
    }, N(yD, oD), yD.KIND_ADD = qa, yD[sd] = Hr, yD.KIND_CLEAR = Ia, yD[rd] = hd;
    var pD = function () {
        this.id = ++wM, this._n9r = {}
    };
    pD.prototype = {
        _n9r: null, id: null, get: function (t) {
            return this._n9r[t]
        }, set: function (t, i) {
            var e = this.get(t);
            if (e === i)return !1;
            var n = new _D(this, t, i, e);
            return n.propertyType = UD.PROPERTY_TYPE_CLIENT, this._n7p(t, i, n, this._n9r)
        }, _n7p: function (t, i, n, s) {
            return this[yh](n) === !1 ? !1 : (s || (s = this._n9r), i === e ? delete s[t] : s[t] = i, this[Vu](n), !0)
        }, remove: function (t) {
            this[du](t, null)
        }, valueOf: function () {
            return this.id
        }, toString: function () {
            return this.id
        }, _dw: function (t, i) {
            if (i === e && (i = -1), this == t || t == this._jv)return !1;
            if (t && this == t._jv && !t._dw(null))return !1;
            var n = new fD(this, t, i);
            if (!this[yh](n))return !1;
            var s, r, h = this._jv;
            return t && (s = new cD(t, this), !t[yh](s)) ? !1 : null == h || (r = new uD(h, this), h[yh](r)) ? (this._jv = t, null != t && _i(t, this, i), null != h && fi(h, this), this.onEvent(n), null != t && t[Vu](s), null != h && h.onEvent(r), this[ad](h, t), !0) : !1
        }, addChild: function (t, i) {
            var e = t._dw(this, i);
            return e && this[Fh](t, i), e
        }, onChildAdd: function () {
        }, removeChild: function (t) {
            if (!this._f5 || !this._f5[Ff](t))return !1;
            var i = t._dw(null);
            return this.onChildRemove(t), i
        }, onChildRemove: function () {
        }, toChildren: function () {
            return this._f5 ? this._f5.toDatas() : null
        }, clearChildren: function () {
            if (this._f5 && this._f5.length) {
                var t = this[od]();
                l(t, function (t) {
                    t._dw(null)
                }, this), this[_d](t)
            }
        }, forEachChild: function (t, i) {
            return this[Br]() ? this._f5.forEach(t, i) : !1
        }, onChildrenClear: function () {
        }, getChildIndex: function (t) {
            return this._f5 && this._f5[jr] ? this._f5[Ur](t) : -1
        }, setChildIndex: function (t, i) {
            if (!this._f5 || !this._f5[jr])return !1;
            var e = this._f5[Ur](t);
            if (0 > e || e == i)return !1;
            var n = new dD(this, t, e, i);
            return this.beforeEvent(n) === !1 ? !1 : (this._f5.remove(t) && this._f5.add(t, i), this[Vu](n), !0)
        }, hasChildren: function () {
            return this._f5 && this._f5[jr] > 0
        }, getChildAt: function (t) {
            return null == this._f5 ? null : this._f5._ja[t]
        }, isDescendantOf: function (t) {
            if (!t.hasChildren())return !1;
            for (var i = this.parent; null != i;) {
                if (t == i)return !0;
                i = i[S_]
            }
            return !1
        }, onParentChanged: function () {
        }, firePropertyChangeEvent: function (t, i, e, n) {
            this[Vu](new _D(this, t, i, e, n))
        }
    }, N(pD, lD), K(pD[fh], {
        childrenCount: {
            get: function () {
                return this._f5 ? this._f5.length : 0
            }
        }, children: {
            get: function () {
                return this._f5 || (this._f5 = new HM), this._f5
            }
        }, parent: {
            get: function () {
                return this._jv
            }, set: function (t) {
                this._dw(t, -1)
            }
        }, properties: {
            get: function () {
                return this._n9r
            }, set: function (t) {
                this._n9r != t && (this._n9r = t)
            }
        }
    });
    var ED = function () {
        this._ja = [], this._lo = {}, this._1u = new vD
    };
    ED.prototype = {
        beforeEvent: function (t) {
            return null != this._1u && this._1u[yh] ? this._1u[yh](t) : !0
        }, onEvent: function (t) {
            return this._1u instanceof Function ? void this._1u(t) : void(null != this._1u && this._1u.onEvent && this._1u.onEvent(t))
        }, _1u: null, setIndex: function (t, i) {
            if (!this.contains(t))throw new Error(ba + t.getId() + su);
            var e = this.indexOf(t);
            if (e == i)return !1;
            var n = new yD(this, yD.KIND_INDEX_CHANGE, t, i, e);
            return this.beforeEvent(n) === !1 ? !1 : (this._ja.remove(t) >= 0 && this._ja.add(i, t), this.onEvent(n), !0)
        }, _fm: function (t, i) {
            if (0 == t.length)return !1;
            var n = !1, s = i >= 0, r = new yD(this, yD[fd], t, i);
            if (this[yh](r) === !1)return !1;
            var h = [];
            t = t._ja || t;
            for (var a = 0, o = t[jr]; o > a; a++) {
                var _ = t[a];
                null !== _ && _ !== e && this._kl(_, i, !0) && (h[Wr](_), n = !0, s && i++)
            }
            return r[to] = h, this.onEvent(r), n
        }, _kl: function (t, i, e) {
            if (this.accept(t) === !1)return !1;
            if (e)return B(this, ED, cd, arguments);
            var n = new yD(this, yD[fd], t, i);
            return this[yh](n) === !1 ? !1 : B(this, ED, cd, arguments) ? (this._kx(t, n), t) : !1
        }, _kx: function (t, i) {
            this[Vu](i)
        }, _n7f: function (t) {
            if (0 == t[jr])return !1;
            var i = new yD(this, yD[sd], t);
            if (this.beforeEvent(i) === !1)return !1;
            var n = [], s = !1;
            t = t._ja || t;
            for (var r = 0, h = t.length; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== e) {
                    var o = a.id || a;
                    a.id === e && (a = null), this._fo(o, a, !0) && (n[Wr](a), s = !0)
                }
            }
            return i.data = n, this.onEvent(i), s
        }, _fo: function (t, i, e) {
            if (e)return B(this, ED, ud, arguments);
            var n = new yD(this, yD[sd], i);
            return this[yh](n) === !1 ? !1 : B(this, ED, ud, arguments) ? (this[Vu](n), !0) : !1
        }, clear: function () {
            if (this[qo]())return !1;
            var t = new yD(this, yD.KIND_CLEAR, this[au]());
            return this.beforeEvent(t) === !1 ? !1 : B(this, ED, Ia) ? (this.onEvent(t), !0) : !1
        }, accept: function (t) {
            return this[dd] && this[dd](t) === !1 ? !1 : !0
        }
    }, N(ED, HM), Z(ED[fh], ld, {
        get: function () {
            return this._1u
        }
    });
    var mD = function () {
        j(this, mD, arguments), this.selectionChangeDispatcher = new vD, this._selectionModel = new xD(this), this._selectionModel._1u = this[vd], this.dataChangeDispatcher = new vD, this[bd][gd]({
            beforeEvent: this[yd],
            onEvent: this.onDataPropertyChanged
        }, this), this.parentChangeDispatcher = new vD, this[pd] = new vD, this.$roots = new HM;
        var t = this;
        this.$roots.setIndex = function (i, e) {
            if (!t[Ed][Ff](i))throw new Error(ba + i.id + su);
            var n = t[Ed]._ja[Ur](i);
            if (n == e)return !1;
            t[Ed]._ja[Gr](n, 1), t[Ed]._ja.splice(e, 0, i), t._n8iIndexFlag = !0;
            var s = new dD(t, i, n, e);
            return t._2l(s), !0
        }
    };
    mD.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _kx: function (t, i) {
            t.listener = this.dataChangeDispatcher, t[S_] || this[Ed][qa](t), this.onEvent(i)
        },
        _fo: function (t, i) {
            if (B(this, mD, ud, arguments)) {
                if (i instanceof DN)i[md](); else if (i instanceof PN) {
                    var e = i.getEdges();
                    this.remove(e)
                }
                var n = i.parent;
                return null == n ? this[Ed][Hr](i) : (n.removeChild(i), n.__6s = !0), i.hasChildren() && this[Hr](i.toChildren()), i[Ju] = null, !0
            }
            return !1
        },
        _5i: function (t) {
            var i = t[yo];
            this.contains(i) && (null == i.parent ? this[Ed][qa](i) : null == t[zu] && this[Ed][Hr](i), this[xd].onEvent(t))
        },
        _2l: function (t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof fD ? this[xd][yh](t) : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof fD ? (this._n8iIndexFlag = !0, t.source._n8iIndexFlag = !0, void this._5i(t)) : void(t instanceof dD && (this._n8iIndexFlag = !0, t[yo]._n8iIndexFlag = !0, this._2l(t)))
        },
        toRoots: function () {
            return this.$roots[au]()
        },
        _g4: function (t) {
            var i, e = t._jv;
            i = e ? e._f5 : this.$roots;
            var n = i[Ur](t);
            if (0 > n)throw new Error(Td + t + "' not exist in the box");
            return 0 == n ? e : i.getByIndex(n - 1)
        },
        _g5: function (t) {
            var i, e = t._jv;
            i = e ? e._f5 : this[Ed];
            var n = i.indexOf(t);
            if (0 > n)throw new Error(Td + t + "' not exist in the box");
            return n == i[jr] - 1 ? e ? this._g5(e) : null : i.getByIndex(n + 1)
        },
        forEachByDepthFirst: function (t, i, e) {
            return this[Ed][jr] ? r(this[Ed], t, i, e) : !1
        },
        forEachByDepthFirstReverse: function (t, i, e) {
            return this[Ed][jr] ? o(this[Ed], t, i, e) : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this[Ed].length ? c(this[Ed], t, i) : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this[Ed].length ? u(this.$roots, t, i) : !1
        },
        clear: function () {
            return B(this, mD, Ia) ? (this.$roots[Ia](), this[dc].clear(), !0) : !1
        }
    }, N(mD, ED), K(mD.prototype, {
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
    var xD = function (t) {
        j(this, xD), this[wd] = t, this._n9oxChangeListener = {
            onEvent: function (t) {
                yD.KIND_REMOVE == t.kind ? null != t.data ? this.remove(t.data) : null != t.datas && this[Hr](t[Mc]) : yD.KIND_CLEAR == t.kind && this[Ia]()
            }
        }, this[wd].listChangeDispatcher.addListener(this._n9oxChangeListener, this)
    };
    xD[fh] = {
        box: null, isSelected: function (t) {
            return this[hu](t.id || t)
        }, select: function (t) {
            return this[qa](t)
        }, unselect: function (t) {
            return this[Hr](t)
        }, reverseSelect: function (t) {
            return this[Ff](t) ? this.remove(t) : this[qa](t)
        }, accept: function (t) {
            return this[wd][Ff](t)
        }
    }, N(xD, ED);
    var TD = null, wD = null, OD = null, kD = function () {
        if (!i.createElement)return function (t) {
            return t
        };
        var t = i.createElement(Wf), n = t[Yh], s = {};
        return function (t) {
            if (s[t])return s[t];
            var i = ci(t);
            return n[i] !== e || OD && n[i = ci(OD + i)] !== e ? (s[t] = i, i) : t
        }
    }(), SD = {};
    !function () {
        if (!i[Od])return !1;
        for (var n = i.head, s = "Webkit Moz O ms Khtml"[Jr](Qr), r = 0; r < s[jr]; r++)if (n.style[s[r] + kd] !== e) {
            OD = Bc + s[r].toLowerCase() + Bc;
            break
        }
        var h = i[Na](Yh);
        t[Sd] || h.appendChild(i[Id]("")), h[Vr] && (TD = !0), h[no] = Ad, h.id = Ld, n[Jf](h), wD = h.sheet;
        var a, o;
        for (var _ in SD) {
            var f = SD[_];
            a = _, o = "";
            for (var c in f)o += kD(c) + Cd + f[c] + Rd;
            li(a, o)
        }
    }();
    var ID = function (t, i, e, n, s) {
        if (s) {
            var r = function (t) {
                r.handle.call(r[dh], t)
            };
            return r.scope = s, r[lh] = e, t.addEventListener(i, r, n), r
        }
        return t[Md](i, e, n), e
    }, AD = function (t, i, e) {
        t.removeEventListener(i, e)
    }, L = function (t) {
        t[Dd] ? t[Dd]() : t.returnValue = !1
    }, C = function (t) {
        t[rh] ? t[rh]() : t[hh] || (t[hh] = !0)
    }, R = function (t) {
        L(t), C(t)
    };
    zM[ea] = BM ? 500 : 300, zM[Pd] = BM ? 1500 : 1e3;
    var LD, CD = _a in t ? "mousewheel" : Nd;
    LD = CD + jd, BM && (LD += Bd), LD = LD[Jr](xh), wi.prototype = {
        _km: null, _hd: function () {
            var t = this._lq;
            t && Ti[Fr](this, t)
        }, destroy: function () {
            this._hd()
        }, _n83: null, _27: function () {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        }, _e1: function () {
            this.__n8ancelClick = !0, this._27(), this._hx(this._n83, $d), this._n84[Ia]()
        }, _n84: null, _6v: function (t) {
            var i = this._9i;
            this._9i = pi(t), this._n84.add(i, this._9i, t)
        }, _j2: function (t) {
            this._6v(t), this._hx(t, Fd), t[Uh] && t.touches[jr] > 1 && this._hx(t, Gd)
        }, _il: function (t) {
            BM || this._6v(t);
            var i = this._n84[zd]();
            i && (t.vx = i.x, t.vy = i.y), this._hx(t, Yd), this._n84[Ia]()
        }, _ei: function (t) {
            this._n83 && (this._27(), this._hx(t, Hd), this._n83 = null, this._9i = null)
        }, _hx: function (t, i) {
            this._listener && this._listener[i]instanceof Function && this._listener[i].call(this._listener, t, this._km || this._lq)
        }
    };
    var RD = function (t) {
        this._kk = t, j(this, RD, [t.html])
    };
    RD._n8urrentInteractionSupport = null, RD[fh] = {
        _58: function (t) {
            this._4n(function (i) {
                i.onElementRemoved instanceof Function && i.onElementRemoved(t, this._kk)
            })
        }, _74: function () {
            this._4n(function (t) {
                t.onClear instanceof Function && t[qd](this._kk)
            })
        }, _hd: function () {
            this._2a && this._2p(this._2a), this._$w && this._2p(this._$w);
            var t = this._kk.html;
            t && Ti.call(this, t)
        }, _kk: null, _2a: null, _$w: null, _7h: function (t) {
            return this._2a == t ? !1 : (this._2a && this._2a[jr] && this._2p(this._2a), void(this._2a = t))
        }, _$b: function (t) {
            this._$w || (this._$w = []), this._$w[Wr](t)
        }, _7: function (t) {
            this._$w && 0 != this._$w.length && p(this._$w, t)
        }, _hx: function (t, i, e) {
            this._kk[i]instanceof Function && this._kk[i].call(this._kk, t, e), this._2a && this._gs(t, i, this._2a, e), this._$w && this._gs(t, i, this._$w, e)
        }, _4n: function (t) {
            this._2a && l(this._2a, t, this), this._$w && l(this._$w, t, this)
        }, _gs: function (t, i, e, n) {
            if (!A(e))return void this._95(t, i, e, n);
            for (var s = 0; s < e[jr]; s++) {
                var r = e[s];
                this._95(t, i, r, n)
            }
        }, _95: function (t, i, e, n) {
            var s = e[i];
            s && s.call(e, t, this._kk, n)
        }, _39: function (t) {
            t.destroy instanceof Function && t.destroy[Fr](t, this._kk)
        }, _2p: function (t) {
            if (!A(t))return void this._39(t);
            for (var i = 0; i < t[jr]; i++) {
                var e = t[i];
                e && this._39(e)
            }
        }
    }, N(RD, wi), ki[fh] = {
        limitCount: 10, points: null, add: function (t, i, e) {
            var n = i.timeStamp - t.timeStamp || 1;
            e.interval = n;
            var s, r;
            if (!e.touches)return s = i.x - t.x, r = i.y - t.y, e.dx = s, e.dy = r, void this._kl(s, r, n);
            var h = e[Uh].length;
            if (1 == h)s = e.touches[0].clientX - t.touches[0].clientX, r = e.touches[0][sa] - t[Uh][0].clientY; else {
                for (var a, o, _, f = [], c = [], u = 0, d = 0, l = 0, v = 0, b = 0, g = 0, y = 0, h = t.touches[jr]; h > y; y++) {
                    a = t.touches[y];
                    var p = a[Vh], E = a[sa];
                    u += p, d += E, y && (b = Math.max(b, Math[Wa]((p - o) * (p - o) + (E - _) * (E - _)))), o = p, _ = E, f.push({
                        x: p,
                        y: E
                    })
                }
                u /= h, d /= h;
                for (var y = 0, h = e.touches.length; h > y; y++) {
                    a = e.touches[y];
                    var p = a[Vh], E = a.clientY;
                    l += p, v += E, y && (g = Math.max(g, Math[Wa]((p - o) * (p - o) + (E - _) * (E - _)))), o = p, _ = E, c[Wr]({
                        x: p,
                        y: E
                    })
                }
                if (l /= h, v /= h, s = l - u, r = v - d, b && g) {
                    var m = g / b;
                    e.scale && t[ha] && (m = e.scale / t.scale), e[jf] = {
                        x: l,
                        y: v,
                        clientX: l,
                        clientY: v
                    }, e[Wd] = m, e.prev = t
                }
            }
            e.dx = s, e.dy = r, this._kl(s, r, n)
        }, _kl: function (t, i, e) {
            var n = {interval: e, dx: t, dy: i};
            this.points[Gr](0, 0, n), this[Xa][jr] > this.limitCount && this[Xa][Ud]()
        }, getCurrentSpeed: function () {
            if (!this[Xa][jr])return null;
            for (var t = 0, i = 0, e = 0, n = 0, s = this.points[jr]; s > n; n++) {
                var r = this[Xa][n], h = r[Xd];
                if (h > 300)break;
                if (t += r.interval, i += r.dx, e += r.dy, t > 500)break
            }
            return 0 == t || 0 == i && 0 == e ? null : {x: i / t, y: e / t}
        }, clear: function () {
            this[Xa] = []
        }
    };
    var MD, DD, PD, ND;
    AM ? (MD = Vd, DD = Zd, PD = Kd, ND = Jd) : LM ? (MD = Qd, DD = tl, PD = il, ND = el) : (MD = nl, DD = nl, PD = Ec, ND = sl);
    var jD = rl, BD = Math.PI, $D = Math.pow, FD = Math.sin, GD = 1.70158, zD = {
        swing: function (t) {
            return -Math[ro](t * BD) / 2 + .5
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
            return 0 === t || 1 === t ? t : -($D(2, 10 * (t -= 1)) * FD(2 * (t - e) * BD / i))
        }, elasticOut: function (t) {
            var i = .3, e = i / 4;
            return 0 === t || 1 === t ? t : $D(2, -10 * t) * FD(2 * (t - e) * BD / i) + 1
        }, elasticBoth: function (t) {
            var i = .45, e = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * $D(2, 10 * (t -= 1)) * FD(2 * (t - e) * BD / i) : $D(2, -10 * (t -= 1)) * FD(2 * (t - e) * BD / i) * .5 + 1
        }, backIn: function (t) {
            return 1 === t && (t -= .001), t * t * ((GD + 1) * t - GD)
        }, backOut: function (t) {
            return (t -= 1) * t * ((GD + 1) * t + GD) + 1
        }, backBoth: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * (((GD *= 1.525) + 1) * t - GD) : .5 * ((t -= 2) * t * (((GD *= 1.525) + 1) * t + GD) + 2)
        }, bounceIn: function (t) {
            return 1 - zD[hl](1 - t)
        }, bounceOut: function (t) {
            var i, e = 7.5625;
            return i = 1 / 2.75 > t ? e * t * t : 2 / 2.75 > t ? e * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? e * (t -= 2.25 / 2.75) * t + .9375 : e * (t -= 2.625 / 2.75) * t + .984375
        }, bounceBoth: function (t) {
            return .5 > t ? .5 * zD[al](2 * t) : .5 * zD[hl](2 * t - 1) + .5
        }
    }, YD = function (t) {
        this._k1 = t
    };
    YD.prototype = {
        _k1: null, _kc: function (t) {
            var i = Date[ol]();
            this._lp();
            var e = this;
            this._requestID = requestAnimationFrame(function n() {
                var s = Date[ol](), r = s - i;
                return !r || e._k1 && e._k1(r) !== !1 ? (i = s, void(e._requestID = requestAnimationFrame(n))) : (e._lp(), void(t instanceof Function && t.call()))
            })
        }, _lp: function () {
            return this._requestID ? (t[Xc](this._requestID), void delete this._requestID) : !1
        }, _ek: function () {
            return null != this._requestID
        }
    };
    var HD = function (t, i, e, n) {
        this._onStep = t, this._km = i || this, this._46 = n, e && e > 0 && (this._im = e)
    };
    HD.prototype = {
        _im: 1e3, _46: null, _em: 0, _lp: function () {
            return this._em = 0, this._n8v = 0, B(this, HD, _l)
        }, _n8v: 0, _k1: function (t) {
            if (this._em += t, this._em >= this._im)return this._onStep.call(this._km, 1, (1 - this._n8v) * this._im, t, this._im), !1;
            var i = this._em / this._im;
            return this._46 && (i = this._46(i)), this._onStep.call(this._km, i, (i - this._n8v) * this._im, t, this._im) === !1 ? !1 : void(this._n8v = i)
        }
    }, N(HD, YD);
    var qD = function (t) {
        ei(t)
    }, WD = {
        version: fl,
        extend: N,
        doSuperConstructor: j,
        doSuper: B,
        createFunction: z,
        setClass: T,
        appendClass: w,
        removeClass: O,
        forEach: l,
        forEachReverse: b,
        isNumber: k,
        isString: S,
        isBoolean: I,
        isArray: A,
        eventPreventDefault: L,
        eventStopPropagation: C,
        stopEvent: R,
        callLater: m,
        nextFrame: x,
        forEachChild: n,
        forEachByDepthFirst: r,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: M,
        randomBool: D,
        randomColor: W,
        addEventListener: ID,
        getFirstElementChildByTagName: WM
    };
    WD.isTouchSupport = BM, WD[cl] = PM, WD.intersectsPoint = hi, WD.containsRect = ai, WD[ul] = KM, WD.Size = ZM, WD.Point = UM, WD.Insets = JM, WD[dl] = oD, WD[ll] = _D, WD.ListEvent = yD, WD.Handler = lD, WD[vl] = vD, WD.Position = QM, WD.Data = pD, WD.SelectionModel = xD, WD.DataModel = mD, WD.IListener = gD, WD.loadURL = Ai, WD[bl] = Si, WD.loadJSON = Ii, WD.isMetaKey = Oi, WD[gl] = XM, WD.HashList = HM, WD.DragSupport = wi, WD[yl] = function (t) {
        alert(t)
    }, WD.prompt = function (t, i, e, n) {
        var s = prompt(t, i);
        return s != i && e ? e[Fr](n, s) : s
    }, WD.confirm = function (t, i, e) {
        var n = confirm(t);
        return n && i ? i.call(e) : n
    }, WD.addCSSRule = li;
    var UD = {
        SELECTION_TYPE_BORDER_RECT: pl,
        SELECTION_TYPE_BORDER: El,
        SELECTION_TYPE_SHADOW: ml,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: xl,
        EDGE_TYPE_ELBOW_HORIZONTAL: Tl,
        EDGE_TYPE_ELBOW_VERTICAL: wl,
        EDGE_TYPE_ORTHOGONAL: Ol,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: kl,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: Sl,
        EDGE_TYPE_HORIZONTAL_VERTICAL: Il,
        EDGE_TYPE_VERTICAL_HORIZONTAL: Al,
        EDGE_TYPE_EXTEND_TOP: Ll,
        EDGE_TYPE_EXTEND_LEFT: Cl,
        EDGE_TYPE_EXTEND_BOTTOM: Rl,
        EDGE_TYPE_EXTEND_RIGHT: Ml,
        EDGE_TYPE_ZIGZAG: Dl,
        EDGE_CORNER_NONE: nc,
        EDGE_CORNER_ROUND: Za,
        EDGE_CORNER_BEVEL: Pl,
        GROUP_TYPE_RECT: Nl,
        GROUP_TYPE_CIRCLE: jl,
        GROUP_TYPE_ELLIPSE: Bl,
        SHAPE_CIRCLE: $l,
        SHAPE_RECT: Nl,
        SHAPE_ROUNDRECT: Fl,
        SHAPE_STAR: Gl,
        SHAPE_TRIANGLE: zl,
        SHAPE_HEXAGON: Yl,
        SHAPE_PENTAGON: Hl,
        SHAPE_TRAPEZIUM: ql,
        SHAPE_RHOMBUS: Wl,
        SHAPE_PARALLELOGRAM: Ul,
        SHAPE_HEART: Xl,
        SHAPE_DIAMOND: Vl,
        SHAPE_CROSS: Zl,
        SHAPE_ARROW_STANDARD: Kl,
        SHAPE_ARROW_1: Jl,
        SHAPE_ARROW_2: Ql,
        SHAPE_ARROW_3: tv,
        SHAPE_ARROW_4: iv,
        SHAPE_ARROW_5: ev,
        SHAPE_ARROW_6: nv,
        SHAPE_ARROW_7: sv,
        SHAPE_ARROW_8: rv,
        SHAPE_ARROW_OPEN: hv
    };
    UD[av] = ov, UD.LINE_CAP_TYPE_ROUND = Za, UD[_v] = fv, UD.LINE_JOIN_TYPE_BEVEL = Pl, UD.LINE_JOIN_TYPE_ROUND = Za, UD[cv] = uv, zM[dv] = UD[lv], zM[vv] = 3, zM.SELECTION_BORDER = 2, zM[bv] = 7, zM.SELECTION_COLOR = V(3422561023), zM.SELECTION_TYPE = UD.SELECTION_TYPE_SHADOW, zM.BORDER_RADIUS = 10, zM.POINTER_WIDTH = 10, zM[gv] = e, zM[yv] = 10, zM.IMAGE_MAX_SIZE = 200, zM[pv] = 1.2;
    var XD = t.devicePixelRatio || 1;
    1 > XD && (XD = 1);
    var VD;
    WD.createCanvas = Bi;
    var ZD = function (t, i, e, n) {
        var s = t - e, r = i - n;
        return s * s + r * r
    };
    ie.prototype = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, ie._jwCircle = function (t, i, e) {
        if (!e)return Qi(t, i);
        var n = ZD(t.x, t.y, i.x, i.y), s = ZD(t.x, t.y, e.x, e.y), r = ZD(e.x, e.y, i.x, i.y);
        if (n + KD >= s + r)return Qi(t, i, 0, e);
        if (s + KD >= n + r)return Qi(t, e, 0, i);
        if (r + KD >= n + s)return Qi(i, e, 0, t);
        var h;
        Math[Nh](e.y - i.y) < 1e-4 && (h = t, t = i, i = h), h = e.x * (t.y - i.y) + t.x * (i.y - e.y) + i.x * (-t.y + e.y);
        var a = (e.x * e.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - e.y)) * (i.y - e.y) + i.x * i.x * (-t.y + e.y)) / (2 * h), o = (i.y + e.y) / 2 - (e.x - i.x) / (e.y - i.y) * (a - (i.x + e.x) / 2);
        return new ie(a, o, XM(a, o, t.x, t.y), t, i, e)
    };
    var KD = .01, JD = {
        _n7r: function (t, i, n, s, r) {
            var h = 0, a = 0, o = i._iv;
            if (n = n || 0, t.x === e) {
                var _ = t.horizontalPosition, f = t.verticalPosition, c = !0;
                switch (_) {
                    case eD:
                        c = !1;
                        break;
                    case iD:
                        h += o / 2
                }
                switch (f) {
                    case nD:
                        a -= n / 2;
                        break;
                    case rD:
                        a += n / 2
                }
            } else h = t.x, a = t.y, Math.abs(h) > 0 && Math[Nh](h) < 1 && (h *= o);
            r && null != s && (a += s.y, h += Math[Nh](s.x) < 1 ? s.x * o : s.x);
            var u = _e[Fr](i, h, a, c);
            return u ? (r || null == s || u[Ev](s), u) : {x: 0, y: 0}
        }, _ln: function (t, i) {
            var e = i.type, n = i.points;
            switch (e) {
                case wP:
                    t.arcTo(n[0], n[1], n[2], n[3], i._r);
                    break;
                case EP:
                    t[D_](n[0], n[1]);
                    break;
                case mP:
                    t[P_](n[0], n[1]);
                    break;
                case xP:
                    t[mv](n[0], n[1], n[2], n[3]);
                    break;
                case TP:
                    t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                    break;
                case OP:
                    t[N_]()
            }
        }, _6d: function (t, i, e, n) {
            var s = i[no];
            if (s != EP && s != OP) {
                var r = e.lastPoint, h = i.points;
                switch (e.type == EP && t[qa](r.x, r.y), s) {
                    case wP:
                        ue(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]), t[qa](h[0], h[1]), t[qa](i._p1x, i._p1y), t[qa](i._p2x, i._p2y), i._n9oundaryPoint1 && t[qa](i._n9oundaryPoint1.x, i._n9oundaryPoint1.y), i._n9oundaryPoint2 && t[qa](i._n9oundaryPoint2.x, i._n9oundaryPoint2.y);
                        break;
                    case mP:
                        t[qa](h[0], h[1]);
                        break;
                    case xP:
                        qi([r.x, r.y][zr](h), t);
                        break;
                    case TP:
                        Vi([r.x, r.y].concat(h), t);
                        break;
                    case OP:
                        n && t[qa](n.points[0], n[Xa][1])
                }
            }
        }, _6a: function (t, i, e) {
            var n = t[no];
            if (n == EP)return 0;
            var s = i[Eo], r = t.points;
            switch (n == TP && 4 == r[jr] && (n = xP), n) {
                case mP:
                    return XM(r[0], r[1], s.x, s.y);
                case wP:
                    return t._iv;
                case xP:
                    var h = Wi([s.x, s.y].concat(r));
                    return t._lf = h, h(1);
                case TP:
                    var h = Ki([s.x, s.y][zr](r));
                    return t._lf = h, h(1) || Zi([s.x, s.y][zr](r));
                case OP:
                    if (s && e)return t.points = e[Xa], XM(e[Xa][0], e[Xa][1], s.x, s.y)
            }
            return 0
        }
    }, QD = /^data:image\/(\w+);base64,/i, tP = /^gif/i, iP = /^svg/i, eP = 10, nP = 11, sP = 12, rP = 20, hP = 30;
    zM.IMAGE_WIDTH = 50, zM.IMAGE_HEIGHT = 30, zM[xv] = 1e6;
    var aP = 1, oP = 2, _P = 3;
    ge.prototype = {
        _jl: 0, _6s: !0, _kb: null, _jo: null, _lu: null, _lv: null, _n7e: e, _9a: e, _6t: function () {
            return this._jl == aP
        }, getBounds: function (t) {
            return this._lv == hP ? this._lu[fo](t) : (this._6s && this._f9(), this)
        }, validate: function () {
            this._6s && this._f9()
        }, _f9: function () {
            if (this._6s = !1, this._lv == hP)return this._lu[go](), void this[Do](this._lu.bounds);
            if (this._lv == rP)return void this._9n();
            if (this._jl != aP)try {
                this._dm()
            } catch (t) {
                this._jl = _P, WD[Mh](t)
            }
        }, _5p: function () {
            this._dh(), this._dispatcher[Ia](), delete this._dispatcher
        }, _hp: function (t) {
            this._kb && this._kb.parentNode && this._kb.parentNode[Tv](this._kb), this._jl = _P, WD.error(wv + this._lu), this._pixels = null, this._jo = null, this._kb = null, t !== !1 && this._5p()
        }, _dm: function () {
            var t = this._lu;
            if (this._jl = aP, this._dispatcher = new vD, this._lv == sP) {
                for (var e in PP)this[e] = PP[e];
                return void Ve(this._lu, this, this._n8s, this._hp, this._eg)
            }
            this._kb || (SM ? (this._kb = i.createElement(Xf), this._kb.style[Ov] = ec, i[kv][Jf](this._kb)) : this._kb = new Image), this._kb.src = t, !SM && this._kb[ka] ? (this._kb.onload = this._kb[a_] = null, this._8m()) : (this._kb[Sv] = SM ? function (t) {
                setTimeout(this._8m[Iv](this, t), 100)
            }.bind(this) : this._8m[Iv](this), this._kb[a_] = this._hp[Iv](this))
        }, _8m: function () {
            this._jl = oP;
            var t = this._kb[ka], i = this._kb[Sa];
            if (this._kb.parentNode && this._kb[Av].removeChild(this._kb), !t || !i)return void this._hp();
            this.width = t, this.height = i;
            var e = this._do();
            e[ka] = t, e[Sa] = i, e.g.drawImage(this._kb, 0, 0, t, i), this._pixels = SM && this._lv == nP ? null : we(e), this._5p()
        }, _9n: function () {
            var t = this._lu;
            if (!(t.draw instanceof Function))return void this._hp(!1);
            var i = t[ka] || zM[Lv], e = t[Sa] || zM.IMAGE_MAX_SIZE, n = this._do(), s = n.g;
            t.draw(s);
            var r = s.getImageData(0, 0, i, e), h = Oe(r[to], i, e);
            this.x = h._x, this.y = h._y, this.width = h._width, this.height = h._height, n[ka] = this.width, n[Sa] = this.height, s.putImageData(r, -this.x, -this.y), this._pixels = h
        }, _do: function () {
            return this._jo || (this._jo = Bi())
        }, _71: function (t, i, e, n, s, r) {
            i.save(), i.rect(0, 0, n, s), i[Cv] = r || Rv, i[Mv](), i[Dv](), i.textAlign = jf, i[Pv] = Nv, i[Cv] = jv;
            var h = 6 * (i[Ra].ratio || 1);
            i.font = Bv + h + "px Verdana,helvetica,arial,sans-serif", i[$v] = Fv, i.lineWidth = 1, i[Gv](t, n / 2 + .5, s / 2 + .5), i[$v] = zv, i.strokeText(t, n / 2 - .5, s / 2 - .5), i[Yv](t, n / 2, s / 2), i.restore()
        }, draw: function (t, i, e, n, s, r) {
            if (this.width && this.height) {
                i = i || 1, n = n || 1, s = s || 1;
                var h = this[ka] * n, a = this[Sa] * s;
                if (r && e[Hv] && (t[Hv] = e[Hv], t.shadowBlur = (e.shadowBlur || 0) * i, t[qv] = (e.shadowOffsetX || 0) * i, t[Wv] = (e[Wv] || 0) * i), this._jl == aP)return this._71(Uv, t, i, h, a, e[Xv]);
                if (this._jl == _P)return this._71(Vv, t, i, h, a, e[Xv]);
                if (this._lv == hP)return t[ha](n, s), void this._lu.draw(t, i, e);
                var o = this._fu(i, n, s);
                return o ? ((this.x || this.y) && t.translate(this.x * n, this.y * s), t.scale(n / o.scale, s / o.scale), void o._ln(t, e[Xv], e.renderColorBlendMode)) : void this._jq(t, i, n, s, this[ka] * n, this.height * s)
            }
        }, _jq: function (t, i, e, n, s, r) {
            if (this._lv == rP)return 1 != e && 1 != n && t.scale(e, n), void this._lu[Hf](t);
            if (this._kb) {
                if (!CM)return void t[Zv](this._kb, 0, 0, s, r);
                var e = i * s / this.width, n = i * r / this[Sa];
                t[ha](1 / e, 1 / n), t[Zv](this._kb, 0, 0, s * e, r * n)
            }
        }, _ju: null, _fu: function (t, i, e) {
            if (this._lv == eP || (t *= Math.max(i, e)) <= 1)return this._defaultCache || (this._defaultCache = this._fq(this._jo || this._kb, 1)), this._defaultCache;
            var n = this._ju[Kv] || 0;
            if (t = Math[wh](t), n >= t) {
                for (var s = t, r = this._ju[s]; !r && ++s <= n;)r = this._ju[s];
                if (r)return r
            }
            t % 2 && t++;
            var h = this[ka] * t, a = this.height * t;
            if (h * a > zM[xv])return null;
            var o = Bi(h, a);
            return (this.x || this.y) && o.g.translate(-this.x * t, -this.y * t), this._jq(o.g, 1, t, t, h, a), this._fq(o, t)
        }, _fq: function (t, i) {
            var e = new AP(t, i);
            return this._ju[i] = e, this._ju[Kv] = i, e
        }, _hj: function (t, i, e) {
            if (this._lv == hP)return this._lu._hj[vh](this._lu, arguments);
            if (!(this._pixels || this._kb && this._kb._pixels))return !0;
            var n = this._pixels || this._kb._pixels;
            return t -= n._iz.x, i -= n._iz.y, t = Math[Za](t), i = Math.round(i), ke(n, n._iz, t, i, e)
        }, _dh: function () {
            this._dispatcher && this._dispatcher[Vu](new oD(this, Jv, Qv, this._kb))
        }, _n7i: function (t, i) {
            this._dispatcher && this._dispatcher[gd](t, i)
        }, _6x: function (t, i) {
            this._dispatcher && this._dispatcher.removeListener(t, i)
        }, _n8o: function (t) {
            this._ju = {}, (t || this[ka] * this[Sa] > 1e5) && (this._kb = null, this._jo = null)
        }
    }, N(ge, KM);
    var fP = {};
    WD[Zv] = xe, WD.registerImage = ye, WD.hasImage = Ee, WD[tb] = function () {
        var t = [];
        for (var i in fP)t[Wr](i);
        return t
    };
    var cP = function (t, i, e, n, s, r) {
        this.type = t, this.colors = i, this.positions = e, this[Nf] = n || 0, this.tx = s || 0, this.ty = r || 0
    };
    UD[ib] = Ou, UD[eb] = Tu, cP.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: QM[Au],
        isEmpty: function () {
            return null == this[nb] || 0 == this[nb][jr]
        },
        _7l: function () {
            var t = this.colors[jr];
            if (1 == t)return [0];
            for (var i = [], e = 1 / (t - 1), n = 0; t > n; n++)i.push(e * n);
            return this.positions || (this[sb] = i), i
        },
        generatorGradient: function (t) {
            if (null == this[nb] || 0 == this[nb].length)return null;
            var i, e = Fi();
            if (this.type == UD[eb]) {
                var n = this.angle;
                n > Math.PI && (n -= Math.PI);
                var s;
                if (n <= Math.PI / 2) {
                    var r = Math[Ua](t[Sa], t.width), h = Math.sqrt(t[ka] * t[ka] + t.height * t[Sa]), a = r - n;
                    s = Math[ro](a) * h
                } else {
                    var r = Math.atan2(t.width, t.height), h = Math[Wa](t[ka] * t.width + t[Sa] * t.height), a = r - (n - Math.PI / 2);
                    s = Math[ro](a) * h
                }
                var o = s / 2, _ = o * Math.cos(n), f = o * Math[Dh](n), c = t.x + t.width / 2 - _, u = t.y + t[Sa] / 2 - f, d = t.x + t[ka] / 2 + _, l = t.y + t.height / 2 + f;
                i = e[rb](c, u, d, l)
            } else {
                if (!(this.type = UD[ib]))return null;
                var v = oi(this.position, t[ka], t[Sa]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math[Nh](this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Sa] * this.ty : this.ty);
                var b = XM(v.x, v.y, t.x, t.y);
                b = Math[za](b, XM(v.x, v.y, t.x, t.y + t.height)), b = Math.max(b, XM(v.x, v.y, t.x + t[ka], t.y + t.height)), b = Math[za](b, XM(v.x, v.y, t.x + t.width, t.y)), i = e[hb](v.x, v.y, 0, v.x, v.y, b)
            }
            var g = this[nb], y = this[sb];
            y && y.length == g[jr] || (y = this._7l());
            for (var p = 0, E = g[jr]; E > p; p++)i[ab](y[p], g[p]);
            return i
        }
    };
    var uP = new cP(UD.GRADIENT_TYPE_LINEAR, [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], Math.PI / 2), dP = new cP(UD.GRADIENT_TYPE_LINEAR, [V(2332033023), V(1154272460), V(1154272460), V(1442840575)], [.1, .3, .7, .9], 0), lP = (new cP(UD.GRADIENT_TYPE_LINEAR, [V(1154272460), V(1442840575)], [.1, .9], 0), new cP(UD.GRADIENT_TYPE_RADIAL, [V(2298478591), V(1156509422), V(1720223880), V(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)), vP = [V(0), V(4294901760), V(4294967040), V(4278255360), V(4278250239), V(4278190992), V(4294901958), V(0)], bP = [0, .12, .28, .45, .6, .75, .8, 1], gP = new cP(UD.GRADIENT_TYPE_LINEAR, vP, bP), yP = new cP(UD[eb], vP, bP, Math.PI / 2), pP = new cP(UD[ib], vP, bP);
    cP.LINEAR_GRADIENT_VERTICAL = uP, cP[ob] = dP, cP[_b] = lP, cP[fb] = gP, cP.RAINBOW_LINEAR_GRADIENT_VERTICAL = yP, cP[cb] = pP;
    var EP = ku, mP = Tu, xP = ub, TP = wu, wP = db, OP = lb;
    UD.SEGMENT_MOVE_TO = EP, UD.SEGMENT_LINE_TO = mP, UD[vb] = xP, UD[bb] = TP, UD.SEGMENT_ARC_TO = wP, UD[gb] = OP;
    var kP = function (t, i) {
        this.id = ++wM, A(t) ? this[Xa] = t : (this.type = t, this[Xa] = i)
    };
    kP[fh] = {
        toJSON: function () {
            return {type: this[no], invalidTerminal: this.invalidTerminal, points: this[Xa]}
        }, parseJSON: function (t) {
            this.type = t[no], this[Xa] = t.points, this.invalidTerminal = t[mo]
        }, points: null, type: mP, clone: function () {
            return new kP(this[no], g(this[Xa]))
        }, move: function (t, i) {
            if (this[Xa])for (var e = 0, n = this[Xa].length; n > e; e++) {
                var s = this.points[e];
                WD[yb](s) && (this[Xa][e] += e % 2 == 0 ? t : i)
            }
        }
    }, K(kP.prototype, {
        lastPoint: {
            get: function () {
                return this[no] == wP ? {x: this._p2x, y: this._p2y} : {
                    x: this.points[this[Xa].length - 2],
                    y: this.points[this.points.length - 1]
                }
            }
        }, firstPoint: {
            get: function () {
                return {x: this[Xa][0], y: this[Xa][1]}
            }
        }
    }), WD.PathSegment = kP;
    var SP = 0, IP = function (t) {
        this.bounds = new KM, this._fb = t || []
    };
    IP.prototype = {
        toJSON: function () {
            var t = [];
            return this._fb[__](function (i) {
                t[Wr](i[pb]())
            }), t
        }, parseJSON: function (t) {
            var i = this._fb;
            t.forEach(function (t) {
                i.push(new kP(t[no], t.points))
            })
        }, clear: function () {
            this._fb.length = 0, this.bounds[Ia](), this._iv = 0, this._6s = !0
        }, _di: !0, _6p: function (t, i) {
            this._di && 0 === this._fb[jr] && t != EP && this._fb[Wr](new kP(EP, [0, 0])), this._fb[Wr](new kP(t, i)), this._6s = !0
        }, removePathSegment: function (t) {
            return t >= this._fb[jr] ? !1 : (this._fb.splice(t, 1), void(this._6s = !0))
        }, moveTo: function (t, i) {
            this._6p(EP, [t, i])
        }, lineTo: function (t, i) {
            this._6p(mP, [t, i])
        }, quadTo: function (t, i, e, n) {
            this._6p(xP, [t, i, e, n])
        }, curveTo: function (t, i, e, n, s, r) {
            this._6p(TP, [t, i, e, n, s, r])
        }, arcTo: function (t, i, e, n, s) {
            this._6p(wP, [t, i, e, n, s])
        }, closePath: function () {
            this._6p(OP)
        }, _88: function (t, i, e, n, s) {
            if (n.selectionColor) {
                if (e == UD[lv]) {
                    if (!n.selectionShadowBlur)return;
                    return t.shadowColor = n.selectionColor, t.shadowBlur = n.selectionShadowBlur * i, t.shadowOffsetX = (n[Eb] || 0) * i, void(t[Wv] = (n.selectionShadowOffsetY || 0) * i)
                }
                if (e == UD[mb]) {
                    if (!n.selectionBorder)return;
                    t.strokeStyle = n.selectionColor, t[io] = n[xb] + (s.lineWidth || 0), this._ln(t), t[Tb]()
                }
            }
        }, _6s: !0, _fb: null, _iv: 0, lineCap: ov, lineJoin: Za, draw: function (t, i, e, n, s) {
            t[wb] = e[wb] || this[wb], t[Ob] = e[Ob] || this.lineJoin, n && (s || (s = e), this._88(t, i, s.selectionType, s, e)), e.outlineStyle && (this._ln(t), t[io] = e.lineWidth + 2 * (e[kb] || 0), t[$v] = e[Sb], t[Tb]()), t[io] = 0, this._ln(t), e.fillColor && (t[Cv] = e[Xv] || e.fillColor, t[Mv]()), e.fillGradient && (t[Cv] = e._fillGradient || e.fillGradient, t.fill()), e[io] && (t[io] = e[io], e[Ko] && (t[Ko] = e.lineDash, t[t_] = e[t_]), t[$v] = e.renderColor || e[$v], t.stroke(), t[Ko] = [])
        }, _ln: function (t) {
            t.beginPath();
            for (var i, e, n = 0, s = this._fb[jr]; s > n; n++)i = this._fb[n], JD._ln(t, i, e), e = i
        }, validate: function () {
            if (this._6s = !1, this[Fo][Ia](), this._iv = 0, 0 != this._fb[jr])for (var t, i, e = this._fb, n = 1, s = e[0], r = s, h = e.length; h > n; n++)t = e[n], t[no] == EP ? r = t : (JD._6d(this[Fo], t, s, r), i = JD._6a(t, s, r), t._iv = i, this._iv += i), s = t
        }, getBounds: function (t, i) {
            if (this._6s && this.validate(), i = i || new KM, t) {
                var e = t / 2;
                i.set(this[Fo].x - e, this[Fo].y - e, this[Fo].width + t, this[Fo].height + t)
            } else i[du](this.bounds.x, this[Fo].y, this[Fo][ka], this[Fo][Sa]);
            return i
        }, _hj: function (t, i, e, n, s, r) {
            return oe.call(this, t, i, e, n, s, r)
        }, toSegments: function () {
            return [].concat(this._fb)
        }, generator: function (t, i, e, n, s) {
            return ae[Fr](this, t, i, e, n, s)
        }, getLocation: function (t, i) {
            return _e.call(this, t, i || 0)
        }
    }, K(IP.prototype, {
        segments: {
            get: function () {
                return this._fb
            }, set: function (t) {
                this.clear(), this._fb = t
            }
        }, length: {
            get: function () {
                return this._6s && this[go](), this._iv
            }
        }, _empty: {
            get: function () {
                return 0 == this._fb[jr]
            }
        }
    }), UD.BLEND_MODE_DARKEN = Ib, UD[Ab] = Lb, UD.BLEND_MODE_COLOR_BURN = Cb, UD[Oo] = Rb, UD[Mb] = Db, UD[ko] = Pb, UD.BLEND_MODE_GRAY = Nb, zM.BLEND_MODE = UD.BLEND_MODE_LINEAR_BURN;
    var AP = function (t, i, e) {
        this._jo = t, this[ha] = i || 1, t instanceof Image && (e = !1), this._if = e
    };
    AP[fh] = {
        scale: 1, _jo: null, _ju: null, _if: !0, _ln: function (t, i, e) {
            if (!i || this._if === !1)return void t[Zv](this._jo, 0, 0);
            this._ju || (this._ju = {});
            var n = i + e, s = this._ju[n];
            s || (s = Ae(this._jo, i, e), s || (this._if = !1), this._ju[n] = s || this._jo), t[Zv](s, 0, 0)
        }
    };
    var LP = function (t, i, e, n, s, r, h, a, o) {
        this._m1 = Me(t, i, e, n, s, r, h, a, o)
    }, CP = {
        server: {
            draw: function (t) {
                t[jb](), t.translate(0, 0), t.beginPath(), t[D_](0, 0), t.lineTo(40, 0), t[P_](40, 40), t.lineTo(0, 40), t[N_](), t[Dv](), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t[$v] = Bb, t.lineCap = ov, t.lineJoin = uv, t.miterLimit = 4, t[jb](), t[jb](), t[$b](), t[jb](), t[$b](), t[jb](), t[$b](), t[jb](), t[$b](), t[jb](), t[$b](), t[jb](), t.restore(), t.save(), t[$b](), t.save(), t.restore(), t[jb](), t[$b](), t[jb](), t[$b](), t[jb](), t[$b](), t[jb](), t.restore(), t.save(), t.restore(), t[$b](), t[jb]();
                var i = t[rb](6.75, 3.9033, 30.5914, 27.7447);
                i.addColorStop(.0493, Fb), i[ab](.0689, Gb), i[ab](.0939, zb), i[ab](.129, Yb), i[ab](.2266, Hb), i.addColorStop(.2556, qb), i[ab](.2869, Wb), i.addColorStop(.3194, Ub), i.addColorStop(.3525, Xb), i[ab](.3695, Vb), i.addColorStop(.5025, Zb), i[ab](.9212, Kb), i.addColorStop(1, Jb), t.fillStyle = i, t.beginPath(), t[D_](25.677, 4.113), t[Qb](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[Qb](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[Qb](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[Qb](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[Qb](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t.bezierCurveTo(4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[Qb](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t.bezierCurveTo(25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[Qb](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[Qb](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[Qb](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t[Mv](), t.stroke(), t[$b](), t[jb](), t[jb](), t[Cv] = tg, t[ig](), t[D_](19.763, 6.645), t[Qb](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[Qb](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[P_](21.398, 36.253), t[Qb](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[Qb](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t.lineTo(4.675, 37.877), t[Qb](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[Qb](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[P_](2.924, 8.431), t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t.bezierCurveTo(3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t[Qb](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[Qb](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[P_](19.763, 6.645), t[N_](), t.fill(), t.stroke(), t.restore(), t[$b](), t[jb](), t.fillStyle = eg, t[ig](), t[ng](12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t.closePath(), t[Mv](), t[Tb](), t[$b](), t.save(), t[Cv] = tg, t.beginPath(), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[N_](), t.fill(), t.stroke(), t.restore(), t[jb](), t.fillStyle = eg, t[ig](), t.moveTo(19.377, 17.247), t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t.lineTo(5.882, 18.108999999999998), t[Qb](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[P_](5.02, 11.144), t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t[Qb](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t.lineTo(19.377, 17.247), t[N_](), t[Mv](), t.stroke(), t[$b](), t.save(), t.save(), t[Cv] = tg, t.beginPath(), t.moveTo(18.536, 13.176),t[Qb](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),t.lineTo(6.479, 13.794),t[Qb](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),t[P_](5.861, 11.84),t[Qb](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),t.lineTo(17.918, 11.221),t[Qb](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),t[P_](18.535, 13.176),t.closePath(),t[Mv](),t[Tb](),t[$b](),t.save(),t[Cv] = tg,t.beginPath(),t.moveTo(18.536, 16.551),t[Qb](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),t[P_](6.479, 17.168999999999997),t[Qb](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),t.lineTo(5.861, 15.215999999999998),t.bezierCurveTo(5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),t.lineTo(17.918, 14.596999999999998),t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),t[P_](18.535, 16.551),t[N_](),t[Mv](),t.stroke(),t[$b](),t[$b](),t[$b]()
            }
        }, exchanger2: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t[ig](), t[D_](0, 0), t.lineTo(40, 0), t[P_](40, 40), t[P_](0, 40), t[N_](), t[Dv](), t[bo](0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = Bb, t.lineCap = ov, t.lineJoin = uv, t[sg] = 4, t.save(), t.save(), t.restore(), t.save(), t.restore(), t.save(), t.restore(), t[jb](), t.restore(), t.save(), t[$b](), t[jb](), t[$b](), t.save(), t[$b](), t[jb](), t[$b](), t.save(), t[$b](), t.save(), t[$b](), t.restore(), t[jb]();
                var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
                i.addColorStop(0, Fb), i.addColorStop(.0788, Hb), i[ab](.2046, rg), i.addColorStop(.3649, hg), i[ab](.5432, ag), i[ab](.6798, og), i.addColorStop(.7462, _g), i.addColorStop(.8508, fg), i[ab](.98, qb), i.addColorStop(1, cg), t[Cv] = i, t.beginPath(), t.moveTo(.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[Qb](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t.bezierCurveTo(10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[Qb](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[Qb](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t[Mv](), t[Tb](), t[$b](), t.save(), t[jb](), t.fillStyle = tg, t[ig](), t.moveTo(16.4, 25.185), t[Qb](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[Qb](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[Qb](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[Qb](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[Qb](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[Qb](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[N_](), t.fill(), t[Tb](), t.restore(), t[$b](), t[jb](), t.save(), t[jb](), t.save(), t.save(), t[Cv] = ug, t[ig](), t[D_](5.21, 21.754), t.lineTo(8.188, 17.922), t.lineTo(9.53, 18.75), t.lineTo(15.956, 16.004), t[P_](18.547, 17.523), t[P_](12.074, 20.334), t[P_](13.464, 21.204), t[P_](5.21, 21.754), t.closePath(), t.fill(), t[Tb](), t.restore(), t.restore(), t.restore(), t.save(), t.save(), t[jb](), t.fillStyle = ug, t.beginPath(), t[D_](17.88, 14.61), t[P_](9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t[P_](10.783, 8.942), t[P_](15.091, 11.357), t[P_](16.88, 10.614), t[P_](17.88, 14.61), t.closePath(), t[Mv](), t[Tb](), t.restore(), t.restore(), t[jb](), t[jb](), t[Cv] = ug, t.beginPath(), t[D_](17.88, 14.61), t[P_](9.85, 13.522), t[P_](11.703, 12.757), t[P_](7.436, 10.285), t[P_](10.783, 8.942), t[P_](15.091, 11.357), t[P_](16.88, 10.614), t[P_](17.88, 14.61), t[N_](), t[Mv](), t[Tb](), t.restore(), t[$b](), t.restore(),t[jb](),t[jb](),t.save(),t[Cv] = ug,t[ig](),t.moveTo(23.556, 15.339),t[P_](20.93, 13.879),t[P_](26.953, 11.304),t[P_](25.559, 10.567),t[P_](33.251, 9.909),t[P_](31.087, 13.467),t[P_](29.619, 12.703),t[P_](23.556, 15.339),t.closePath(),t.fill(),t[Tb](),t.restore(),t.restore(),t.restore(),t.save(),t[jb](),t.save(),t.fillStyle = ug,t.beginPath(),t[D_](30.028, 23.383),t[P_](24.821, 20.366),t.lineTo(22.915, 21.227),t[P_](21.669, 16.762),t[P_](30.189, 17.942),t[P_](28.33, 18.782),t.lineTo(33.579, 21.725),t[P_](30.028, 23.383),t[N_](),t[Mv](),t.stroke(),t[$b](),t[$b](),t[jb](),t.save(),t.fillStyle = ug,t.beginPath(),t[D_](30.028, 23.383),t.lineTo(24.821, 20.366),t.lineTo(22.915, 21.227),t.lineTo(21.669, 16.762),t[P_](30.189, 17.942),t.lineTo(28.33, 18.782),t[P_](33.579, 21.725),t[P_](30.028, 23.383),t[N_](),t[Mv](),t[Tb](),t.restore(),t[$b](),t[$b](),t.restore(),t[$b](),t.restore()
            }
        }, exchanger: {
            draw: function (t) {
                t.save(), t.translate(0, 0), t[ig](), t.moveTo(0, 0), t.lineTo(40, 0), t[P_](40, 40), t.lineTo(0, 40), t.closePath(), t.clip(), t.translate(0, 0), t[bo](0, 0), t.scale(1, 1), t.translate(0, 0), t.strokeStyle = Bb, t[wb] = ov, t[Ob] = uv, t.miterLimit = 4, t.save(), t.save(), t.restore(), t.save(), t[$b](), t.save(), t[$b](), t[jb](), t.restore(), t[jb](), t.restore(), t[jb](), t[$b](), t[jb](), t[$b](), t.restore(), t.save();
                var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                i[ab](0, dg), i.addColorStop(.0788, lg), i[ab](.352, vg), i.addColorStop(.6967, bg), i.addColorStop(.8916, gg), i.addColorStop(.9557, yg), i[ab](1, pg), t.fillStyle = i, t.beginPath(), t.moveTo(39.449, 12.417), t[P_](39.384, 9.424), t[Qb](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[Qb](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t.bezierCurveTo(23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[Qb](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t.lineTo(39.281, 16.498999999999995), t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[N_](), t.fill(), t[Tb](), t[$b](), t[jb](), t[jb](), t[jb](), t.save(), t[$b](), t[jb](), t[$b](), t[jb](), t.restore(), t.save(), t[$b](), t[jb](), t.restore(), t[jb](), t[$b](), t[jb](), t.restore(), t.save(), t[$b](), t.save(), t[$b](), t.restore(), t.save();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i[ab](0, Eg), i[ab](.1455, mg), i.addColorStop(.2975, xg), i[ab](.4527, Tg), i.addColorStop(.6099, wg), i.addColorStop(.7687, Og), i[ab](.9268, kg), i.addColorStop(.9754, Sg), i[ab](1, Ig), t.fillStyle = i, t[ig](), t.moveTo(33.591, 24.763), t[Qb](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[Qb](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[Qb](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t.bezierCurveTo(6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[Qb](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[Qb](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[Qb](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[Qb](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[Qb](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t.closePath(), t.fill(), t.stroke(), t[$b](), t.restore(), t.restore(), t[jb](), t[jb](), t.save(), t[Cv] = ug, t[ig](), t[D_](10.427, 19.292), t.lineTo(5.735, 16.452), t[P_](12.58, 13.8), t[P_](12.045, 15.07), t[P_](20.482, 15.072), t[P_](19.667, 17.887), t[P_](11.029, 17.851), t[P_](10.427, 19.292), t.closePath(), t[Mv](), t[Tb](), t[$b](), t.restore(), t.save(), t.save(), t.fillStyle = ug, t.beginPath(), t.moveTo(13.041, 13.042), t[P_](8.641, 10.73), t.lineTo(14.82, 8.474), t.lineTo(14.373, 9.537), t.lineTo(22.102, 9.479), t.lineTo(21.425, 11.816), t.lineTo(13.54, 11.85), t.lineTo(13.041, 13.042), t.closePath(), t[Mv](), t.stroke(), t.restore(), t.restore(), t.save(), t.save(), t.fillStyle = ug, t[ig](), t.moveTo(29.787, 16.049), t.lineTo(29.979, 14.704), t.lineTo(21.51, 14.706), t[P_](22.214, 12.147), t[P_](30.486, 12.116), t.lineTo(30.653, 10.926), t[P_](36.141, 13.4), t.lineTo(29.787, 16.049), t.closePath(), t.fill(), t.stroke(), t[$b](), t.restore(), t[jb](), t[jb](), t.fillStyle = ug, t[ig](), t[D_](28.775, 23.14), t[P_](29.011, 21.49), t[P_](19.668, 21.405), t[P_](20.523, 18.295), t.lineTo(29.613, 18.338), t[P_](29.815, 16.898), t[P_](35.832, 19.964), t[P_](28.775, 23.14), t.closePath(), t[Mv](), t[Tb](), t[$b](), t.restore(), t.restore(),t.restore()
            }
        }, cloud: {
            draw: function (t) {
                t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(90.75, 0), t[P_](90.75, 62.125), t[P_](0, 62.125), t[N_](), t.clip(), t[$v] = Bb, t[wb] = ov, t.lineJoin = uv, t[sg] = 4, t[jb]();
                var i = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i[ab](.9726, Ag), t[Cv] = i, t[ig](), t.moveTo(57.07, 20.354), t[Qb](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[Qb](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[Qb](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[Qb](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[Qb](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[Qb](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[N_](), t.fill(), t[Tb](), t.restore(), t.restore()
            }
        }, node: {
            width: 60, height: 100, draw: function (t) {
                t[jb](), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t[P_](40, 0), t.lineTo(40, 40), t.lineTo(0, 40), t[N_](), t.clip(), t[bo](0, 0), t.translate(0, 0), t.scale(1, 1), t[bo](0, 0), t.strokeStyle = Bb, t.lineCap = ov, t.lineJoin = uv, t.miterLimit = 4, t.save(), t[Cv] = Lg, t.beginPath(), t.moveTo(13.948, 31.075), t.lineTo(25.914, 31.075), t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075), t.lineTo(25.914, 34.862), t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862), t[P_](13.948, 34.862), t[mv](13.948, 34.862, 13.948, 34.862), t[P_](13.948, 31.075), t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075), t[N_](), t[Mv](), t[Tb](), t.restore(), t.save(), t.fillStyle = Cg, t[ig](), t.moveTo(29.679, 35.972), t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t.lineTo(11.456, 37.244), t[Qb](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[P_](10.183, 36.136), t.bezierCurveTo(10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t.lineTo(28.407, 34.863), t.bezierCurveTo(29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t.lineTo(29.678, 35.972), t[N_](), t[Mv](), t.stroke(), t[$b](), t[jb](), t.fillStyle = Cg, t[ig](), t[D_](.196, 29.346), t[Qb](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t.lineTo(37.936, 31.075), t[Qb](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t[P_](.196, 27.174), t[P_](.196, 29.346), t[N_](), t.fill(), t[Tb](), t.restore(), t[jb](), t[Cv] = Rg, t.beginPath(), t.moveTo(37.937, 3.884), t.lineTo(1.926, 3.884), t[Qb](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t.lineTo(.19699999999999984, 27.12), t[P_](39.666000000000004, 27.12), t[P_](39.666000000000004, 5.615), t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[N_](), t[Mv](), t[Tb](), t.restore(), t.save(), t[jb](), t[$b](), t[jb](), t.restore(), t[$b](), t[jb]();
                var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                i.addColorStop(0, Mg), i.addColorStop(1, Dg), t.fillStyle = i, t[ig](), t[D_](35.788, 6.39), t.lineTo(4.074, 6.39), t[Qb](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t.lineTo(2.702, 24.616), t[P_](37.159, 24.616), t.lineTo(37.159, 7.763), t[Qb](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[N_](), t.fill(), t[Tb](), t.restore(), t.restore()
            }
        }, group: {
            draw: function (t) {
                t[jb](), t.translate(0, 0), t.beginPath(), t[D_](0, 0), t[P_](47.75, 0), t[P_](47.75, 40), t[P_](0, 40), t[N_](), t[Dv](), t.translate(0, 0), t.translate(0, 0), t.scale(1, 1), t.translate(0, 0), t[$v] = Bb, t[wb] = ov, t.lineJoin = uv, t[sg] = 4, t[jb](), t.save(), t[Cv] = Lg, t[ig](), t.moveTo(10.447, 26.005), t[P_](18.847, 26.005), t[mv](18.847, 26.005, 18.847, 26.005), t[P_](18.847, 28.663), t[mv](18.847, 28.663, 18.847, 28.663), t[P_](10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t[P_](10.447, 26.005), t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.fillStyle = Cg, t[ig](), t[D_](21.491, 29.443), t[Qb](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[P_](8.698, 30.338), t[Qb](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t.lineTo(7.8020000000000005, 29.557000000000002), t[Qb](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[P_](20.597, 28.662000000000003), t[Qb](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[P_](21.491, 29.443), t[N_](), t.fill(), t.stroke(), t.restore(), t[jb](), t.fillStyle = Cg, t[ig](), t[D_](.789, 24.79), t[Qb](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[P_](27.289, 26.005), t.bezierCurveTo(27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t.lineTo(28.504, 23.267), t[P_](.789, 23.267), t[P_](.789, 24.79), t.closePath(), t.fill(), t.stroke(), t[$b](), t.save(), t.fillStyle = Rg, t.beginPath(), t[D_](27.289, 6.912), t[P_](2.006, 6.912), t.bezierCurveTo(1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t.lineTo(.7889999999999997, 23.227), t[P_](28.503999999999998, 23.227), t[P_](28.503999999999998, 8.126), t[Qb](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[N_](), t.fill(), t.stroke(), t.restore(), t.save(), t[jb](), t.restore(), t.save(), t[$b](), t.restore(), t.save();
                var i = t[rb](5.54, 6.2451, 23.7529, 24.458);
                i[ab](0, Mg), i[ab](1, Dg), t[Cv] = i, t[ig](), t.moveTo(25.78, 8.671), t[P_](3.514, 8.671), t[Qb](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t[P_](26.743, 21.466), t[P_](26.743, 9.636), t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[N_](), t[Mv](), t[Tb](), t[$b](), t.restore(), t[jb](), t[jb](), t[Cv] = Lg, t[ig](), t[D_](27.053, 33.602), t[P_](36.22, 33.602), t[mv](36.22, 33.602, 36.22, 33.602), t[P_](36.22, 36.501), t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501), t.lineTo(27.053, 36.501), t.quadraticCurveTo(27.053, 36.501, 27.053, 36.501), t[P_](27.053, 33.602), t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602), t[N_](), t.fill(), t[Tb](), t[$b](), t.save(), t.fillStyle = Cg, t.beginPath(), t.moveTo(39.104, 37.352), t.bezierCurveTo(39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t.lineTo(25.143, 38.327), t[Qb](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t[P_](24.166, 37.477999999999994), t[Qb](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[P_](39.105, 37.352), t.closePath(), t.fill(), t[Tb](), t[$b](), t[jb](), t.fillStyle = Cg, t[ig](), t.moveTo(16.514, 32.275), t[Qb](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[P_](45.433, 33.601), t[Qb](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[P_](46.758, 30.607999999999997), t.lineTo(16.514, 30.607999999999997), t.lineTo(16.514, 32.275), t.closePath(), t.fill(), t[Tb](), t.restore(), t[jb](), t[Cv] = Rg, t[ig](), t.moveTo(45.433, 12.763), t[P_](17.839, 12.763), t[Qb](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t.lineTo(16.514, 30.57), t.lineTo(46.757999999999996, 30.57), t[P_](46.757999999999996, 14.088), t.bezierCurveTo(46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t.closePath(), t[Mv](), t[Tb](), t[$b](), t.save(), t.save(), t[$b](), t.save(), t[$b](), t[$b](), t[jb](), i = t[rb](21.6973, 12.0352, 41.5743, 31.9122), i[ab](0, Mg), i[ab](1, Dg), t[Cv] = i, t[ig](), t[D_](43.785, 14.683), t[P_](19.486, 14.683), t.bezierCurveTo(18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[P_](44.837, 28.649), t[P_](44.837, 15.734), t[Qb](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[N_](), t[Mv](), t[Tb](), t[$b](), t.restore(),t.save(),t[Pg] = .5,t[ig](),t[D_](23.709, 36.33),t[P_](4.232, 36.33),t[P_](4.232, 27.199),t.lineTo(5.304, 27.199),t.lineTo(5.304, 35.259),t.lineTo(23.709, 35.259),t[P_](23.709, 36.33),t.closePath(),t.fill(),t.stroke(),t[$b](),t.restore()
            }
        }, subnetwork: {
            draw: function (t) {
                t[jb](), t.translate(0, 0), t[ig](), t[D_](0, 0), t.lineTo(60.75, 0), t[P_](60.75, 42.125), t.lineTo(0, 42.125), t.closePath(), t[Dv](), t[bo](0, .26859504132231393), t[ha](.6694214876033058, .6694214876033058), t.translate(0, 0), t.strokeStyle = Bb, t[wb] = ov, t.lineJoin = uv, t[sg] = 4, t[jb](), t.save(), t[$b](), t[jb](), t.restore(), t[$b](), t.save();
                var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                i[ab](0, "rgba(159, 160, 160, 0.7)"), i[ab](.9726, Ag), t[Cv] = i, t[ig](), t.moveTo(61.732, 16.509), t[Qb](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[Qb](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t.bezierCurveTo(2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[Qb](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[Qb](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[N_](), t[Mv](), t[Tb](), t.restore(), t.save(), t[jb](), t[Cv] = Lg, t.beginPath(), t.moveTo(34.966, 44.287), t.lineTo(45.112, 44.287), t.quadraticCurveTo(45.112, 44.287, 45.112, 44.287), t.lineTo(45.112, 47.497), t[mv](45.112, 47.497, 45.112, 47.497), t[P_](34.966, 47.497), t[mv](34.966, 47.497, 34.966, 47.497), t.lineTo(34.966, 44.287), t[mv](34.966, 44.287, 34.966, 44.287), t[N_](), t[Mv](), t.stroke(), t.restore(), t.save(), t.fillStyle = Ng, t[ig](), t.moveTo(48.306, 48.439), t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t.bezierCurveTo(32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[P_](31.771, 48.578), t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t.lineTo(47.226, 47.497), t[Qb](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[P_](48.306, 48.439), t[N_](), t[Mv](), t.stroke(), t[$b](), t.save(), t.fillStyle = jg, t.beginPath(), t.moveTo(23.302, 42.82), t[Qb](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t.lineTo(56.775, 40.98), t[P_](23.302, 40.98), t.lineTo(23.302, 42.82), t[N_](), t.fill(), t.stroke(), t[$b](), t[jb](), t[Cv] = Rg, t[ig](), t.moveTo(55.307, 21.229), t[P_](24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[P_](23.301000000000002, 40.933), t.lineTo(56.774, 40.933), t.lineTo(56.774, 22.695), t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t.closePath(), t.fill(), t.stroke(), t.restore(), t.save(), t.save(), t.restore(), t.save(), t[$b](), t[$b](), t[jb](), i = t[rb](29.04, 20.4219, 51.0363, 42.4181), i[ab](0, Mg), i.addColorStop(1, Dg), t[Cv] = i, t[ig](), t.moveTo(53.485, 23.353), t[P_](26.592, 23.353), t[Qb](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[P_](25.427, 38.807), t[P_](54.647, 38.807), t.lineTo(54.647, 24.517000000000003), t.bezierCurveTo(54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t.closePath(),t.fill(),t[Tb](),t[$b](),t[$b](),t[$b]()
            }
        }
    };
    for (var RP in CP)ye(Bg + RP, CP[RP]);
    var MP = function () {
        this[Wo] = !1;
        var t = this._fc;
        t.clear();
        var i = this._8l.x + this[Go] / 2, e = this._8l.y + this[Go] / 2, n = this._8l.width - this[Go], s = this._8l.height - this[Go], r = Ge.call(this, {
            x: i,
            y: e
        });
        qe(t, r.x, r.y, !0), r = Ge[Fr](this, {x: i + n, y: e}), qe(t, r.x, r.y), r = Ge[Fr](this, {
            x: i + n,
            y: e + s
        }), qe(t, r.x, r.y), r = Ge[Fr](this, {
            x: i,
            y: e + s
        }), qe(t, r.x, r.y), this.__mdPointer && (r = Ge[Fr](this, {
            x: this._pointerX,
            y: this._pointerY
        }), qe(t, r.x, r.y)), this[Go] && t.grow(this[Go] / 2)
    }, DP = 20, PP = {
        _fz: !1, _jy: null, _n8u: 0, _lg: -1, _li: null, _eg: function (t) {
            this._jy || (this._jy = [], this._jl = oP), this._jy[Wr](t), this._ef(), this._kc()
        }, _kc: function () {
            if (!this._li) {
                var t = this;
                this._li = setTimeout(function i() {
                    return t._ef() !== !1 ? void(t._li = setTimeout(i, t._g1())) : void delete t._li
                }, this._g1())
            }
        }, _g1: function () {
            return Math.max(DP, this._jy[this._lg].delay)
        }, _ef: function () {
            return this._fy(this._lg + 1)
        }, _fy: function (t) {
            if (this._fz)t %= this._n8u; else if (t >= this._jy[jr])return !1;
            if (this._lg == t)return !1;
            this._lg = t;
            var i = this._jy[this._lg], e = i._n8ache;
            return e || (i._n8ache = e = Bi(this.width, this.height), e.g.putImageData(i.data, 0, 0), e._pixels = i._pixels), this._kb = e, this[Mo] = !0, this._dh()
        }, _n8s: function () {
            return this._jy ? (this._fz = !0, this._n8u = this._jy.length, 1 == this._n8u ? this._dh() : void this._kc()) : void this._hp()
        }, _lp: function () {
            this._li && (clearTimeout(this._li), delete this._li)
        }, _dh: function () {
            var t = this._dispatcher.listeners;
            if (!t || !t[jr])return !1;
            for (var i = new oD(this, Jv, Qv, this._kb), e = 0, n = t[jr]; n > e; e++) {
                var s = t[e];
                s.scope._jv && s[dh]._jv._hded ? (t[Gr](e, 1), e--, n--) : s[Vu].call(s.scope, i)
            }
            return t[jr] > 0
        }, _n7i: function (t, i) {
            this._dispatcher[gd](t, i), this._fz && !this._li && this._kc()
        }, _6x: function (t, i) {
            this._dispatcher[Qu](t, i), this._dispatcher._n95() || this._lp()
        }, _hd: function () {
            this._lp(), this._dispatcher.clear()
        }, _fu: function () {
            var t = this._kb._n9ufferedImage;
            return t || (this._kb._n9ufferedImage = t = new AP(this._kb, 1)), t
        }
    }, NP = function (t) {
        return t[$g](function (t, i) {
            return 2 * t + i
        }, 0)
    }, jP = function (t) {
        for (var i = [], e = 7; e >= 0; e--)i[Wr](!!(t & 1 << e));
        return i
    }, BP = function (t) {
        this.data = t, this.len = this[to][jr], this[Fg] = 0, this[Gg] = function () {
            if (this[Fg] >= this[to][jr])throw new Error("Attempted to read past end of stream.");
            return 255 & t.charCodeAt(this[Fg]++)
        }, this[zg] = function (t) {
            for (var i = [], e = 0; t > e; e++)i.push(this[Gg]());
            return i
        }, this[Yg] = function (t) {
            for (var i = "", e = 0; t > e; e++)i += String.fromCharCode(this[Gg]());
            return i
        }, this[Hg] = function () {
            var t = this[zg](2);
            return (t[1] << 8) + t[0]
        }
    }, $P = function (t, i) {
        for (var e, n, s = 0, r = function (t) {
            for (var e = 0, n = 0; t > n; n++)i.charCodeAt(s >> 3) & 1 << (7 & s) && (e |= 1 << n), s++;
            return e
        }, h = [], a = 1 << t, o = a + 1, _ = t + 1, f = [], c = function () {
            f = [], _ = t + 1;
            for (var i = 0; a > i; i++)f[i] = [i];
            f[a] = [], f[o] = null
        }; ;)if (n = e, e = r(_), e !== a) {
            if (e === o)break;
            if (e < f[jr])n !== a && f.push(f[n][zr](f[e][0])); else {
                if (e !== f.length)throw new Error(qg);
                f[Wr](f[n][zr](f[n][0]))
            }
            h.push.apply(h, f[e]), f[jr] === 1 << _ && 12 > _ && _++
        } else c();
        return h
    }, FP = function (t, i) {
        i || (i = {});
        var e = function (i) {
            for (var e = [], n = 0; i > n; n++)e[Wr](t.readBytes(3));
            return e
        }, n = function () {
            var i, e;
            e = "";
            do i = t[Gg](), e += t.read(i); while (0 !== i);
            return e
        }, s = function () {
            var n = {};
            if (n[Wg] = t.read(3), n.ver = t[Yg](3), Ug !== n.sig)throw new Error(Xg);
            n[ka] = t[Hg](), n[Sa] = t.readUnsigned();
            var s = jP(t[Gg]());
            n.gctFlag = s[Vg](), n.colorRes = NP(s.splice(0, 3)), n.sorted = s[Vg](), n.gctSize = NP(s.splice(0, 3)), n.bgColor = t[Gg](), n[Zg] = t[Gg](), n[Kg] && (n.gct = e(1 << n[Jg] + 1)), i[Qg] && i.hdr(n)
        }, r = function (e) {
            var s = function (e) {
                var n = (t[Gg](), jP(t[Gg]()));
                e[ty] = n.splice(0, 3), e[iy] = NP(n.splice(0, 3)), e.userInput = n[Vg](), e.transparencyGiven = n.shift(), e.delayTime = t.readUnsigned(), e[i_] = t.readByte(), e.terminator = t.readByte(), i[ey] && i.gce(e)
            }, r = function (t) {
                t[ny] = n(), i.com && i[sy](t)
            }, h = function (e) {
                t[Gg](), e.ptHeader = t.readBytes(12), e.ptData = n(), i.pte && i.pte(e)
            }, a = function (e) {
                var s = function (e) {
                    t[Gg](), e[ry] = t[Gg](), e[hy] = t.readUnsigned(), e[ay] = t[Gg](), i.app && i.app[oy] && i[_y].NETSCAPE(e)
                }, r = function (t) {
                    t.appData = n(), i[_y] && i[_y][t[fy]] && i.app[t.identifier](t)
                };
                switch (t.readByte(), e.identifier = t[Yg](8), e.authCode = t.read(3), e.identifier) {
                    case"NETSCAPE":
                        s(e);
                        break;
                    default:
                        r(e)
                }
            }, o = function (t) {
                t[to] = n(), i.unknown && i.unknown(t)
            };
            switch (e[cy] = t.readByte(), e[cy]) {
                case 249:
                    e.extType = ey, s(e);
                    break;
                case 254:
                    e.extType = sy, r(e);
                    break;
                case 1:
                    e.extType = uy, h(e);
                    break;
                case 255:
                    e.extType = _y, a(e);
                    break;
                default:
                    e[dy] = ry, o(e)
            }
        }, h = function (s) {
            var r = function (t, i) {
                for (var e = new Array(t.length), n = t.length / i, s = function (n, s) {
                    var r = t.slice(s * i, (s + 1) * i);
                    e.splice.apply(e, [n * i, i].concat(r))
                }, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)for (var _ = r[o]; n > _; _ += h[o])s(_, a), a++;
                return e
            };
            s.leftPos = t.readUnsigned(), s[n_] = t.readUnsigned(), s.width = t[Hg](), s.height = t[Hg]();
            var h = jP(t.readByte());
            s.lctFlag = h.shift(), s.interlaced = h[Vg](), s[ly] = h[Vg](), s.reserved = h[Gr](0, 2), s.lctSize = NP(h.splice(0, 3)), s[vy] && (s[by] = e(1 << s[gy] + 1)), s[yy] = t[Gg]();
            var a = n();
            s[s_] = $P(s.lzwMinCodeSize, a), s.interlaced && (s[s_] = r(s[s_], s[ka])), i[Xf] && i.img(s)
        }, a = function () {
            var e = {};
            switch (e.sentinel = t.readByte(), String[py](e.sentinel)) {
                case"!":
                    e[no] = Ey, r(e);
                    break;
                case",":
                    e[no] = Xf, h(e);
                    break;
                case";":
                    e.type = my, i[my] && i[my](e);
                    break;
                default:
                    throw new Error(xy + e[Ty].toString(16))
            }
            my !== e[no] && setTimeout(a, 0)
        }, o = function () {
            s(), setTimeout(a, 0)
        };
        o()
    }, GP = "";
    i.addEventListener && i[Md](wy, function (t) {
        if (t.ctrlKey && t[Oy] && t.altKey && 73 == t[ky]) {
            var i = WD.name + Sy + WD[Iy] + Ay + WD[Ly] + Ga + WD[Cy] + Ga + WD[Ry] + GP;
            WD.alert(i)
        }
    }, !1);
    var zP = My;
    GP = Dy + decodeURIComponent(Py);
    var YP, HP, qP, WP = t, UP = Ny, XP = jy, VP = By, ZP = $y, KP = Fy, JP = Gy, QP = zy, tN = Yy, iN = Hy, eN = qy, nN = Wy, sN = Uy, rN = Xy, hN = Vy, aN = Zy, oN = Ky, _N = Jy, fN = Qy, cN = tp, uN = ip, dN = ep, lN = WP[ZP + np];
    lN && (HP = WP[hN + sp][KP + rp], lN.call(WP, Je, oN), lN[Fr](WP, Qe, cN), lN.call(WP, function () {
        bN && bN == zP && (kN = !1)
    }, _N));
    var vN, bN, gN, yN = 111, pN = function (t, i) {
        i || (i = hp + XP + ap);
        try {
            qP.call(t, i, 6 * yN, 1 * yN)
        } catch (e) {
        }
    }, EN = !0, mN = !0, xN = !0, TN = !0, wN = !0, ON = !0, kN = !0, SN = BM ? 200 : 1024, IN = function (t, i) {
        return Ke ? Ke(t, i) || "" : void 0
    };
    if (i[Na]) {
        var AN = i.createElement(op);
        AN.style[_p] = nc, AN.onload = function (t) {
            var i = t.target[fp], e = HP;
            if ("" === e || cp == e || up == e)return void this[Av].parentNode[Tv](this.parentNode);
            var n = i.String.fromCharCode;
            i[ZP + np](function () {
                Ze(n) != vN && ($N.prototype._je = null)
            }, cN), this[Av].parentNode.removeChild(this[Av])
        };
        var LN = i.createElement(Wf);
        LN[Yh].width = oc, LN[Yh].height = oc, LN.style.overflow = ec, LN.appendChild(AN), i.documentElement.appendChild(LN)
    }
    if (i[aN + dp]) {
        var CN = i[aN + dp](iN + lp);
        CN.style[_p] = nc, CN.onload = function (t) {
            var i = vp, e = t.target[i + bp];
            YP = e[gp][ol]();
            var n = e[eN + nN + yp + sN + pp][rN + no];
            qP = n[UP + Ep];
            var s = e[ZP + np];
            s.call(WP, sn, cN), s[Fr](WP, rn, uN), s[Fr](WP, an, dN), s.call(WP, on, _N), s.call(WP, tn, fN), s[Fr](WP, nn, dN), s.call(WP, hn, cN), s[Fr](WP, en, cN), this.parentNode.parentNode[Tv](this.parentNode)
        };
        var LN = i[Na](Wf);
        LN.style.width = oc, LN[Yh][Sa] = oc, LN[Yh].overflow = ec, LN[Jf](CN), i[mp].appendChild(LN)
    }
    var RN = function (t, i, e, n) {
        this.source = t, this[Rc] = i, this[zu] = n, this.value = e, this[xp] = UD[af]
    };
    N(RN, _D);
    var MN = function (t) {
        this.id = ++wM, this._n9r = {}, this._jj = {}, t && (this.$name = t)
    };
    MN[fh] = {
        _jj: null, getStyle: function (t) {
            return this._jj[t]
        }, setStyle: function (t, i) {
            var e = this._jj[t];
            return e === i || e && i && e.equals && e[Ku](i) ? !1 : this._n7p(t, i, new RN(this, t, i, e), this._jj)
        }, putStyles: function (t, i) {
            for (var e in t) {
                var n = t[e];
                i ? this._jj[e] = n : this.setStyle(e, n)
            }
        }, _13: !0, invalidateVisibility: function (t) {
            this._13 = !0, t || (this instanceof PN && this[Tp]() && this.forEachEdge(function (t) {
                t._13 = !0
            }), this._i5() && this.hasChildren() && this[Z_](function (t) {
                t.invalidateVisibility()
            }))
        }, onParentChanged: function () {
            this[wp]()
        }, _i5: function () {
            return !this._4i && this instanceof BN
        }, invalidate: function () {
            this[Vu](new oD(this, Op, kp))
        }, _n9q: null, addUI: function (t, i) {
            if (this._n9q || (this._n9q = new HM), this._n9q[hu](t.id))return !1;
            var e = {id: t.id, ui: t, bindingProperties: i};
            this._n9q.add(e);
            var n = new oD(this, Op, qa, e);
            return this[Vu](n)
        }, removeUI: function (t) {
            if (!this._n9q)return !1;
            var i = this._n9q.getById(t.id);
            return i ? (this._n9q.remove(i), void this[Vu](new oD(this, Op, Hr, i))) : !1
        }, toString: function () {
            return this[Sp] || this.id
        }, type: Ip, _4i: !1, _hg: !0
    }, N(MN, pD), q(MN.prototype, [Ap, ph, Lp]), K(MN[fh], {
        enableSubNetwork: {
            get: function () {
                return this._4i
            }, set: function (t) {
                if (this._4i != t) {
                    var i = this._4i;
                    this._4i = t, this instanceof PN && this._19(), this.onEvent(new _D(this, qf, t, i))
                }
            }
        }, bindingUIs: {
            get: function () {
                return this._n9q
            }
        }, styles: {
            get: function () {
                return this._jj
            }, set: function (t) {
                if (this._jj != t) {
                    for (var i in this._jj)i in t || (t[i] = e);
                    this.putStyles(t), this._jj = t
                }
            }
        }
    });
    var DN = function (t, i, e) {
        this.id = ++wM, this._n9r = {}, this._jj = {}, e && (this.$name = e), this.$from = t, this.$to = i, this.connect()
    };
    DN.prototype = {
        $uiClass: hs,
        _k5: null,
        _io: null,
        _k3: null,
        _ip: null,
        _ev: !1,
        type: Cp,
        otherNode: function (t) {
            return t == this[$c] ? this.to : t == this.to ? this[$c] : void 0
        },
        connect: function () {
            if (this._ev)return !1;
            if (!this.$from || !this.$to)return !1;
            if (this._ev = !0, this[M_] == this.$to)return void this[M_]._hr(this);
            wn(this[R_], this), xn(this[M_], this), fn(this.$from, this, this[R_]);
            var t = this[Rp], i = this.toAgent;
            if (t != i) {
                var e;
                this.$from._e3 && (un(t, this, i), e = !0), this[R_]._e3 && (ln(i, this, t), e = !0), e && fn(t, this, i)
            }
        },
        disconnect: function () {
            if (!this._ev)return !1;
            if (this._ev = !1, this[M_] == this.$to)return void this.$from._n9w(this);
            Tn(this.$from, this), On(this[R_], this), cn(this[M_], this, this[R_]);
            var t = this.fromAgent, i = this[T_];
            if (t != i) {
                var e;
                this.$from._e3 && (dn(t, this, i), e = !0), this[R_]._e3 && (vn(i, this, t), e = !0), e && cn(t, this, i)
            }
        },
        isConnected: function () {
            return this._ev
        },
        isInvalid: function () {
            return !this.$from || !this[R_]
        },
        isLooped: function () {
            return this[M_] == this[R_]
        },
        getEdgeBundle: function (t) {
            return t ? this._3d() : this.isLooped() ? this[M_]._4o : this.$from[Mp](this.$to)
        },
        hasEdgeBundle: function () {
            var t = this.getEdgeBundle(!0);
            return t && t[Dp].length > 1
        },
        _3d: function () {
            var t = this[Rp], i = this.toAgent;
            return t == i ? this.$from._e3 || this[R_]._e3 ? null : this.$from._4o : this.fromAgent[Mp](this.toAgent)
        },
        _9q: null,
        hasPathSegments: function () {
            return this._9q && !this._9q.isEmpty()
        },
        isBundleEnabled: function () {
            return this.bundleEnabled && !this.hasPathSegments()
        },
        firePathChange: function (t) {
            this.onEvent(new _D(this, Pp, t))
        },
        addPathSegment: function (t, i, e) {
            var n = new kP(i || mP, t);
            this._9q || (this._9q = new HM), this._9q.add(n, e), this.firePathChange(n)
        },
        addPathSegement: function () {
            return this.addPathSegment[vh](this, arguments)
        },
        removePathSegmentByIndex: function (t) {
            if (!this._9q)return !1;
            var i = this._9q.getByIndex(t);
            i && (this._9q.remove(i), this[Np](i))
        },
        removePathSegment: function (t) {
            return this._9q ? (this._9q.remove(t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function (t, i, e) {
            if (!this._9q)return !1;
            if (t = t || 0, i = i || 0, WD[yb](e)) {
                var n = this._9q.getByIndex(e);
                return n ? (n.move(t, i), void this[Np]()) : !1
            }
            l(function (e) {
                e.move(t, i)
            }), this[Np]()
        }
    }, N(DN, MN), K(DN.prototype, {
        pathSegments: {
            get: function () {
                return this._9q
            }, set: function (t) {
                WD.isArray(t) && (t = new HM(t)), this._9q = t, this.firePathChange()
            }
        }, from: {
            get: function () {
                return this.$from
            }, set: function (t) {
                if (this[M_] != t) {
                    var i = new _D(this, $c, t, this.$from);
                    this.beforeEvent(i) !== !1 && (this.disconnect(), this[M_] = t, this.connect(), this[Vu](i))
                }
            }
        }, to: {
            get: function () {
                return this[R_]
            }, set: function (t) {
                if (this.$to != t) {
                    var i = new _D(this, jp, t, this[R_]);
                    this.beforeEvent(i) !== !1 && (this[md](), this[R_] = t, this.connect(), this.onEvent(i))
                }
            }
        }, fromAgent: {
            get: function () {
                return this.$from ? this.$from._e3 || this[M_] : null
            }
        }, toAgent: {
            get: function () {
                return this.$to ? this.$to._e3 || this[R_] : null
            }
        }
    }), q(DN.prototype, [Df, {name: Bp, value: !0}, Nf]);
    var PN = function (t, i, e) {
        this.id = ++wM, this._n9r = {}, this._jj = {}, t && (this[Sp] = t), this[J_] = $p, this[Fp] = QM[Au], this.$location = {
            x: i || 0,
            y: e || 0
        }, this._linkedNodes = {}
    };
    PN[fh] = {
        $uiClass: as, _e3: null, forEachEdge: function (t, i, e) {
            return !e && this._l7 && this._l7[__](t, i) === !1 ? !1 : Sn(this, t, i)
        }, forEachOutEdge: function (t, i) {
            return In(this, t, i)
        }, forEachInEdge: function (t, i) {
            return An(this, t, i)
        }, getEdges: function () {
            var t = [];
            return this[Gp](function (i) {
                t.push(i)
            }), t
        }, _hh: null, _fa: null, _jg: null, _hl: null, _n7m: 0, _9j: 0, hasInEdge: function () {
            return null != this._hh
        }, hasOutEdge: function () {
            return null != this._fa
        }, hasEdge: function () {
            return null != this._hh || null != this._fa || this[zp]()
        }, linkedWith: function (t) {
            return t.from == this || t.to == this || t.fromAgent == this || t[T_] == this
        }, hasEdgeWith: function (t) {
            var i = this.getEdgeBundle(t);
            return i && i.edges[jr] > 0
        }, _l7: null, _4o: null, hasLoops: function () {
            return this._l7 && this._l7[jr] > 0
        }, _hr: function (t) {
            return this._l7 || (this._l7 = new HM, this._4o = new Jj(this, this, this._l7)), this._4o._i9(t)
        }, _n9w: function (t) {
            return this._4o ? this._4o._n8g(t) : void 0
        }, getEdgeBundle: function (t) {
            return t == this ? this._4o : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        }, _6z: function () {
            return this._9d && this._9d[jr]
        }, _5w: function () {
            return this._8a && this._8a.length
        }, _94: function () {
            return this._6z() || this._5w()
        }, _8a: null, _9d: null, _n9v: function () {
            var t = this._e3, i = _n(this);
            if (t != i) {
                var e = kn(this);
                this._98(i), e.forEach(function (t) {
                    var i = t[Rp], e = t[T_], t = t[K_], n = t[M_]._e3, s = t[R_]._e3;
                    i != e && (i && dn(i, t, e || t[R_]), e && vn(e, t, i || t.$from)), n != s && (n && un(n, t, s || t[R_]), s && ln(s, t, n || t.$from), fn(n || t[M_], t, s || t[R_]))
                }, this)
            }
        }, onParentChanged: function () {
            this.invalidateVisibility(), this._n9v()
        }, _8g: null, _19: function () {
            var t;
            if (this._4i ? t = null : (t = this._e3, t || this._gq !== !1 || (t = this)), this._8g == t)return !1;
            if (this._8g = t, this._f5 && this._f5._ja[jr])for (var i, e = this._f5._ja, n = 0, s = e[jr]; s > n; n++)i = e[n], i instanceof PN && i._98(t)
        }, setLocation: function (t, i) {
            if (this[Yp] && this[Yp].x == t && this[Yp].y == i)return !1;
            var e = new _D(this, Hp, this[Yp], {x: t, y: i});
            return this.beforeEvent(e) === !1 ? !1 : (this.$location ? (this[Yp].x = t, this.$location.y = i) : this.$location = new UM(t, i), this[Vu](e), !0)
        }, _e5: null, addFollower: function (t) {
            return null == t ? !1 : t[qp] = this
        }, removeFollower: function (t) {
            return this._e5 && this._e5.contains(t) ? t[qp] = null : !1
        }, hasFollowers: function () {
            return this._e5 && !this._e5[qo]()
        }, toFollowers: function () {
            return this[Wp]() ? this._e5.toDatas() : null
        }, clearFollowers: function () {
            this.hasFollowers() && (this[Up](), l(this.toFollowers(), function (t) {
                t.host = null
            }))
        }, getFollowerIndex: function (t) {
            return this._e5 && this._e5[Ff](t) ? this._e5[Ur](t) : -1
        }, setFollowerIndex: function (t, i) {
            return this._e5 && this._e5[Ff](t) ? void this._e5.setIndex(t, i) : -1
        }, getFollowerCount: function () {
            return null == !this._e5 ? 0 : this._e5[jr]
        }, _99: function () {
            return this._e5 ? this._e5 : (this._e5 = new HM, this._e5)
        }, isFollow: function (t) {
            if (!t || !this._host)return !1;
            for (var i = this._host; i;) {
                if (i == t)return !0;
                i = i._host
            }
            return !1
        }, _98: function (t) {
            return t == this._e3 ? !1 : (this._e3 = t, this.invalidateVisibility(), void this._19())
        }, type: Xp
    }, N(PN, MN), K(PN[fh], {
        loops: {
            get: function () {
                return this._l7
            }
        }, edgeCount: {
            get: function () {
                return this._n7m + this._9j
            }
        }, agentNode: {
            get: function () {
                return this._e3 || this
            }
        }, host: {
            set: function (t) {
                if (this == t || t == this._host)return !1;
                var i = new _D(this, qp, this._host, t);
                if (!1 === this.beforeEvent(i))return !1;
                var e = null, n = null, s = this._host;
                if (null != t && (e = new _D(t, Vp, null, this), !1 === t.beforeEvent(e)))return !1;
                if (null != s && (n = new _D(s, Zp, null, this), !1 === s.beforeEvent(n)))return !1;
                if (this._host = t, null != t) {
                    var r = t._99();
                    r[qa](this)
                }
                if (null != s) {
                    var r = s._99();
                    r.remove(this)
                }
                return this[Vu](i), null != t && t.onEvent(e), null != s && s.onEvent(n), !0
            }, get: function () {
                return this._host
            }
        }
    }), q(PN.prototype, [Hp, Kp, Jv, so, Jp]), K(PN[fh], {
        x: {
            get: function () {
                return this.location.x
            }, set: function (t) {
                t != this.location.x && (this.location = new UM(t, this[Hp].y))
            }
        }, y: {
            get: function () {
                return this.location.y
            }, set: function (t) {
                t != this[Hp].y && (this.location = new UM(this[Hp].x, t))
            }
        }
    });
    var NN = function (t, i) {
        t instanceof IP && (i = t, t = e), j(this, NN, [t]), this.$path = i || new IP, this.image = this[Qp], this.anchorPosition = null, this.uiClass = nr, zM[tE] || (zM[tE] = {}, zM.SHAPENODE_STYLES[GN[iE]] = !1), this.putStyles(zM[tE])
    };
    NN.prototype = {
        $uiClass: nr, type: eE, moveTo: function (t, i) {
            this.path.moveTo(t, i), this.firePathChange()
        }, lineTo: function (t, i) {
            this[nE].lineTo(t, i), this.firePathChange()
        }, quadTo: function (t, i, e, n) {
            this[nE][j_](t, i, e, n), this[Np]()
        }, curveTo: function (t, i, e, n, s, r) {
            this[nE][B_](t, i, e, n, s, r), this.firePathChange()
        }, arcTo: function (t, i, e, n, s) {
            this.path.arcTo(t, i, e, n, s), this.firePathChange()
        }, closePath: function () {
            this.path[N_](), this[Np]()
        }, clear: function () {
            this[nE][Ia](), this[Np]()
        }, removePathSegmentByIndex: function (t) {
            this.path.removePathSegment(t) !== !1 && this.firePathChange()
        }, firePathChange: function () {
            this[nE]._6s = !0, this[Vu](new _D(this, Pp))
        }
    }, N(NN, PN), q(NN[fh], [nE]), K(NN[fh], {
        pathSegments: {
            get: function () {
                return this.path.segments
            }, set: function (t) {
                this.path.segments = t || [], this.firePathChange()
            }
        }, length: {
            get: function () {
                return this.path[jr]
            }
        }
    }), WD.ShapeNode = NN;
    var jN = {
        _k0: {}, register: function (t, i) {
            jN._k0[t] = i
        }, getShape: function (t, i, n, s, r, h) {
            s === e && (s = i, r = n, i = 0, n = 0), s || (s = 50), r || (r = 50);
            var a = jN._k0[t];
            return a ? a.generator instanceof Function ? a.generator(i, n, s, r, h) : a : void 0
        }, getRect: function (t, i, e, n, s, r, h) {
            return Ln(h || new IP, t, i, e, n, s, r)
        }, getAllShapes: function (t, i, e, n, s) {
            var r = {};
            for (var h in jN._k0) {
                var a = jN.getShape(h, t, i, e, n, s);
                a && (r[h] = a)
            }
            return r
        }, createRegularShape: function (t, i, e, n, s) {
            return jn(t, i, e, n, s)
        }
    };
    Zn(), Kn.prototype = {type: sE}, N(Kn, NN), WD[rE] = Kn, Jn[fh] = {
        _g3: function (t) {
            var i, e = t._jv;
            i = e ? e._f5 : this[Ed];
            var n = i.indexOf(t);
            if (0 > n)throw new Error(Td + t + "' not exist in the box");
            for (; n >= 0;) {
                if (0 == n)return e instanceof PN ? e : null;
                n -= 1;
                var r = i.getByIndex(n);
                if (r = s(r))return r
            }
            return null
        }, forEachNode: function (t, i) {
            this.forEach(function (e) {
                return e instanceof PN && t[Fr](i, e) === !1 ? !1 : void 0
            })
        }, _4b: null
    }, N(Jn, mD), K(Jn.prototype, {
        propertyChangeDispatcher: {
            get: function () {
                return this._14
            }
        }, randomNode: {
            get: function () {
                return this._kkModel[hE]
            }
        }, currentSubNetwork: {
            get: function () {
                return this._4b
            }, set: function (t) {
                if (t && !t.enableSubNetwork && (t = null), this._4b != t) {
                    var i = this._4b;
                    this._4b = t, this._14.onEvent(new _D(this, aE, t, i))
                }
            }
        }
    }), zM[oE] = UD.GROUP_TYPE_RECT, zM[_E] = 5, zM.GROUP_EXPANDED = !0, zM.GROUP_MIN_SIZE = {width: 60, height: 60};
    var BN = function (t, i, n) {
        j(this, BN, arguments), (i === e || n === e) && (this.$location.invalidateFlag = !0), this.$groupType = zM.GROUP_TYPE, this[fE] = zM.GROUP_PADDING, this[J_] = CP.group, this[cE] = zM[uE], this.expanded = zM.GROUP_EXPANDED
    };
    BN[fh] = {
        type: dE, $uiClass: Js, _n7a: function () {
            return !this._gq && !this._e3
        }, forEachOutEdge: function (t, i, e) {
            return In(this, t, i) === !1 ? !1 : !e && this._n7a() && this._8a ? this._8a.forEach(t, i) : void 0
        }, forEachInEdge: function (t, i, e) {
            return An(this, t, i) === !1 ? !1 : !e && this._n7a() && this._9d ? this._9d[__](t, i) : void 0
        }, forEachEdge: function (t, i, e) {
            return B(this, BN, Gp, arguments) === !1 ? !1 : e || e || !this._n7a() ? void 0 : this._9d && this._9d[__](t, i) === !1 ? !1 : this._8a ? this._8a[__](t, i) : void 0
        }, hasInEdge: function (t) {
            return t ? null != this._hh : null != this._hh || this._6z()
        }, hasOutEdge: function (t) {
            return t ? null != this._fa : null != this._fa || this._5w()
        }, hasEdge: function (t) {
            return t ? null != this._hh || null != this._fa : null != this._hh || null != this._fa || this._94()
        }
    }, N(BN, PN), K(BN.prototype, {
        expanded: {
            get: function () {
                return this._gq
            }, set: function (t) {
                if (this._gq != t) {
                    var i = new _D(this, lE, t, this._gq);
                    this.beforeEvent(i) !== !1 && (this._gq = t, this._19(), this[Vu](i), this._e3 || Qn.call(this))
                }
            }
        }
    }), q(BN[fh], [vE, bE, lo, gE]), WD.Group = BN, ts.prototype.type = yE, N(ts, PN), WD[pE] = ts;
    var $N = function (t) {
        this._iz = new KM, this._8l = new KM, this._fc = new KM, this.id = ++wM, t && (this[to] = t)
    };
    $N.prototype = {
        invalidate: function () {
            this[EE]()
        },
        _1s: !0,
        _iz: null,
        _8l: null,
        _fc: null,
        _n7g: !1,
        _jr: 1,
        _jt: 1,
        _hg: !0,
        _8b: 0,
        _6r: 0,
        _jv: null,
        _n7k: null,
        borderColor: mE,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1m: function () {
            this.$anchorPoint = oi(this[Jp], this._8b, this._6r)
        },
        setMeasuredBounds: function (t, i, e, n) {
            return t instanceof Object && (e = t.x, n = t.y, i = t[Sa], t = t.width), this._iz[ka] == t && this._iz.height == i && this._iz.x == e && this._iz.y == n ? !1 : void this._iz[du](e || 0, n || 0, t || 0, i || 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _88: function (t, i, e) {
            e[xE] == UD[lv] ? (t.shadowColor = e[TE], t[wE] = e[OE] * i, t.shadowOffsetX = (e[Eb] || 0) * i, t.shadowOffsetY = (e.selectionShadowOffsetY || 0) * i) : this._2i(t, i, e)
        },
        _2i: function (t, i, e) {
            var n = e.selectionBorder || 0;
            e.selectionBackgroundColor && (t[Cv] = e.selectionBackgroundColor, t[kE](this._8l.x - n / 2, this._8l.y - n / 2, this._8l[ka] + n, this._8l.height + n)), t.strokeStyle = e.selectionColor, t.lineWidth = n, t[SE](this._8l.x - n / 2, this._8l.y - n / 2, this._8l[ka] + n, this._8l[Sa] + n)
        },
        _je: function (t, i, e, n) {
            if (!this._hg)return !1;
            if (this[IE] || (e = this[AE]), (e && !this[LE] || !n) && (n = this), t[jb](), 1 != this.$alpha && (t.globalAlpha = this[CE]), t.translate(this.$x, this.$y), this.$rotatable && this.$_hostRotate && t[so](this.$_hostRotate), (this[RE] || this[ME]) && t.translate(this[RE], this[ME]), this[Io] && t[so](this[Io]), this.$layoutByAnchorPoint && this._n7k && t.translate(-this._n7k.x, -this._n7k.y), this.shadowColor && (t[Hv] = this[Hv], t[wE] = this.shadowBlur * i, t.shadowOffsetX = this[qv] * i, t.shadowOffsetY = this.shadowOffsetY * i), e && n[xE] == UD.SELECTION_TYPE_BORDER_RECT && (this._2i(t, i, n), e = !1), this._$z() && this._mbShape && !this._mbShape._empty) {
                this._mbShape[go]();
                var s = {
                    lineWidth: this[Go],
                    strokeStyle: this.borderColor,
                    lineDash: this.borderLineDash,
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this.$backgroundColor,
                    fillGradient: this._n9ackgroundGradient,
                    lineCap: ov,
                    lineJoin: Za
                };
                this._mbShape.draw(t, i, s, e, n), e = !1, t.shadowColor = Bb
            }
            t[ig](), this[Hf](t, i, e, n), t.restore()
        },
        invalidateData: function () {
            this[DE] = !0, this._1s = !0
        },
        invalidateSize: function () {
            this.$invalidateSize = !0, this._1s = !0
        },
        invalidateRender: function () {
            this._1s = !0
        },
        _5g: function () {
        },
        _$z: function () {
            return this[PE] || this[NE] || this.$border
        },
        _4l: function () {
            return this[PE] || this[NE]
        },
        doValidate: function () {
            return this.$invalidateData && (this.$invalidateData = !1, this[jE]() !== !1 && (this.$invalidateSize = !0)), this[Mo] && this.validateSize && this.validateSize(), Ye.call(this) ? (this[Wo] = !0, this[BE] && this[BE](), !0) : this[$E] ? (this[$E] = !1, !0) : void 0
        },
        validate: function () {
            var t = this._hg;
            return this[FE] && (this.$invalidateVisibility = !1, this._hg = this.$visible, !this._hg || (this.$data || this.$showEmpty) && this._5g() !== !1 || (this._hg = !1), !this._hg) ? t : this._hg ? (this._1s = !1, this._n7g || (this[GE](), this._n7g = !0), this.doValidate()) : t
        },
        _hw: function (t, i) {
            return t -= this.$x, i -= this.$y, ze[Fr](this, {x: t, y: i})
        },
        _hj: function (t, i, e, n) {
            if (t -= this.$x, i -= this.$y, !this._fc[Va](t, i, e))return !1;
            var s = ze.call(this, {x: t, y: i});
            return t = s.x, i = s.y, !n && this._$z() && this._mbShape && this._mbShape._hj(t, i, e, !1, this[Go], this[PE] || this[NE]) ? !0 : this._dg ? this._dg(t, i, e) : this._iz.intersectsPoint(t, i, e)
        },
        onDataChanged: function () {
            this.$invalidateData = !0, this._1s = !0, this.$invalidateVisibility = !0
        },
        getBounds: function () {
            var t = this._fc.clone();
            return t[Ev](this.x, this.y), this[S_] && (this[S_].rotate && Mi(t, this[S_].rotate, t), t[Ev](this[S_].x || 0, this[S_].y || 0)), t
        },
        destroy: function () {
            this._hded = !0
        },
        _ds: !1
    }, K($N.prototype, {
        data: {
            get: function () {
                return this.$data
            }, set: function (t) {
                if (this.$data != t) {
                    var i = this[Ho];
                    this.$data = t, this[zE](t, i)
                }
            }
        }, parent: {
            get: function () {
                return this._jv
            }
        }, showOnTop: {
            get: function () {
                return this._ds
            }, set: function (t) {
                t != this._ds && (this._ds = t, this._1s = !0, this._jv && this._jv._n7y && this._jv._n7y(this))
            }
        }
    }), es($N.prototype, {
        visible: {value: !0, validateFlags: [YE, HE]},
        showEmpty: {validateFlags: [YE]},
        anchorPosition: {value: QM.CENTER_MIDDLE, validateFlags: [qE]},
        position: {value: QM.CENTER_MIDDLE, validateFlags: [HE]},
        offsetX: {value: 0, validateFlags: [HE]},
        offsetY: {value: 0, validateFlags: [HE]},
        layoutByAnchorPoint: {value: !0, validateFlags: [WE, qE]},
        padding: {value: 0, validateFlags: [WE]},
        border: {value: 0, validateFlags: [WE]},
        borderRadius: {value: zM.BORDER_RADIUS},
        showPointer: {value: !1, validateFlags: [WE]},
        pointerX: {value: 0, validateFlags: [WE]},
        pointerY: {value: 0, validateFlags: [WE]},
        pointerWidth: {value: zM[UE]},
        backgroundColor: {validateFlags: [WE]},
        backgroundGradient: {validateFlags: [WE, XE]},
        selected: {value: !1, validateFlags: [WE]},
        selectionBorder: {value: zM[VE], validateFlags: [WE]},
        selectionShadowBlur: {value: zM[bv], validateFlags: [WE]},
        selectionColor: {value: zM.SELECTION_COLOR, validateFlags: [WE]},
        selectionType: {value: zM[dv], validateFlags: [WE]},
        selectionShadowOffsetX: {value: 0, validateFlags: [WE]},
        selectionShadowOffsetY: {value: 0, validateFlags: [WE]},
        shadowBlur: {value: 0, validateFlags: [WE]},
        shadowColor: {validateFlags: [WE]},
        shadowOffsetX: {value: 0, validateFlags: [WE]},
        shadowOffsetY: {value: 0, validateFlags: [WE]},
        renderColorBlendMode: {},
        renderColor: {},
        x: {value: 0, validateFlags: [HE]},
        y: {value: 0, validateFlags: [HE]},
        rotatable: {value: !0, validateFlags: [ZE, WE]},
        rotate: {value: 0, validateFlags: [ZE, WE]},
        _hostRotate: {validateFlags: [ZE]},
        lineWidth: {value: 0, validateFlags: [KE]},
        alpha: {value: 1}
    });
    var FN = [UD.PROPERTY_TYPE_ACCESSOR, UD[af], UD.PROPERTY_TYPE_CLIENT];
    ss[fh] = {
        removeBinding: function (t) {
            for (var i = FN.length; --i >= 0;) {
                var e = FN[i], n = this[e];
                for (var s in n) {
                    var r = n[s];
                    Array[JE](r) ? (v(r, function (i) {
                        return i[_c] == t
                    }, this), r.length || delete n[s]) : r.target == t && delete n[s]
                }
            }
        }, _2h: function (t, i, e) {
            if (!e && (e = this[i.propertyType || UD.PROPERTY_TYPE_ACCESSOR], !e))return !1;
            var n = e[t];
            n ? (Array[JE](n) || (e[t] = n = [n]), n[Wr](i)) : e[t] = i
        }, _35: function (t, i, e, n, s, r) {
            t = t || UD[rf];
            var h = this[t];
            if (!h)return !1;
            var a = {property: i, propertyType: t, bindingProperty: n, target: e, callback: s, invalidateSize: r};
            this._2h(i, a, h)
        }, onBindingPropertyChange: function (t, i, e, n) {
            var s = this[e || UD.PROPERTY_TYPE_ACCESSOR];
            if (!s)return !1;
            var r = s[i];
            return r ? (t._1s = !0, ns(t, r, e, n), !0) : !1
        }, initBindingProperties: function (t, i) {
            for (var n = FN.length; --n >= 0;) {
                var s = FN[n], r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[sf]) {
                        var o = a[_c];
                        if (o) {
                            if (!(o instanceof $N || (o = t[o])))continue
                        } else o = t;
                        var _;
                        _ = i === !1 ? t[nf](a.property, s) : s == UD.PROPERTY_TYPE_STYLE ? t[Rf].getStyle(t[Ho], a[QE]) : t.$data[a[QE]], _ !== e && (o[a[sf]] = _)
                    }
                }
            }
        }
    };
    var GN = {};
    GN.SELECTION_COLOR = tm, GN.SELECTION_BORDER = im, GN.SELECTION_SHADOW_BLUR = "selection.shadow.blur", GN.SELECTION_SHADOW_OFFSET_X = "selection.shadow.offset.x", GN.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y", GN.SELECTION_TYPE = em, GN.RENDER_COLOR = nm, GN[sm] = "render.color.blend.mode", GN.ALPHA = rm, GN[hm] = am, GN[om] = _m, GN.SHADOW_OFFSET_X = fm, GN.SHADOW_OFFSET_Y = cm, GN[um] = dm, GN.SHAPE_STROKE_STYLE = lm, GN.SHAPE_LINE_DASH = vm, GN[bm] = "shape.line.dash.offset", GN[gm] = ym, GN[pm] = Em, GN.SHAPE_OUTLINE = mm, GN.SHAPE_OUTLINE_STYLE = xm, GN.LINE_CAP = Tm, GN[wm] = Om, GN.LAYOUT_BY_PATH = km, GN.BACKGROUND_COLOR = Sm, GN.BACKGROUND_GRADIENT = Im, GN[Am] = Lm, GN[Cm] = Rm, GN.BORDER_LINE_DASH = Mm, GN[Dm] = "border.line.dash.offset", GN.BORDER_RADIUS = Pm, GN[Nm] = lo, GN[jm] = "image.background.color", GN.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient", GN.IMAGE_BORDER = Bm, GN.IMAGE_BORDER_STYLE = GN[$m] = Fm, GN.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", GN.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", GN[Gm] = GN.IMAGE_BORDER_RADIUS = zm, GN.IMAGE_PADDING = Ym, GN.IMAGE_Z_INDEX = Hm, GN[qm] = Wm, GN.LABEL_ROTATE = Um, GN.LABEL_POSITION = Xm, GN.LABEL_ANCHOR_POSITION = "label.anchor.position", GN[Vm] = Zm, GN.LABEL_FONT_SIZE = Km, GN.LABEL_FONT_FAMILY = Jm, GN.LABEL_FONT_STYLE = Qm, GN[tx] = ix, GN[ex] = nx, GN[sx] = rx, GN.LABEL_RADIUS = hx, GN[ax] = ox, GN[_x] = fx, GN.LABEL_SIZE = cx, GN[ux] = dx, GN[lx] = vx, GN[bx] = gx, GN.LABEL_BACKGROUND_COLOR = "label.background.color", GN[yx] = "label.background.gradient", GN.LABEL_ROTATABLE = px, GN.LABEL_SHADOW_BLUR = Ex, GN[mx] = xx, GN.LABEL_SHADOW_OFFSET_X = "label.shadow.offset.x", GN.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", GN.LABEL_Z_INDEX = Tx, GN[wx] = Ox, GN.GROUP_BACKGROUND_COLOR = "group.background.color", GN[kx] = "group.background.gradient", GN.GROUP_STROKE = Sx, GN[Ix] = Ax, GN[Lx] = "group.stroke.line.dash", GN[Cx] = "group.stroke.line.dash.offset", GN.EDGE_BUNDLE_LABEL_ROTATE = "edge.bundle.label.rotate", GN[Rx] = "edge.bundle.label.position", GN[Mx] = "edge.bundle.label.anchor.position", GN[Dx] = "edge.bundle.label.color", GN.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size", GN[Px] = "edge.bundle.label.font.family", GN.EDGE_BUNDLE_LABEL_FONT_STYLE = "edge.bundle.label.font.style", GN.EDGE_BUNDLE_LABEL_PADDING = "edge.bundle.label.padding", GN[Nx] = "edge.bundle.label.pointer.width", GN.EDGE_BUNDLE_LABEL_POINTER = "edge.bundle.label.pointer", GN[jx] = "edge.bundle.label.radius", GN.EDGE_BUNDLE_LABEL_OFFSET_X = "edge.bundle.label.offset.x", GN[Bx] = "edge.bundle.label.offset.y", GN.EDGE_BUNDLE_LABEL_BORDER = "edge.bundle.label.border", GN.EDGE_BUNDLE_LABEL_BORDER_STYLE = "edge.bundle.label.border.color", GN.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = "edge.bundle.label.background.color", GN.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient", GN.EDGE_BUNDLE_LABEL_ROTATABLE = "edge.bundle.label.rotatable", GN.EDGE_WIDTH = $x, GN[Fx] = Gx, GN[zx] = Yx, GN[Hx] = qx, GN[Wx] = Ux, GN[Xx] = "edge.line.dash.offset", GN.EDGE_FROM_OFFSET = Vx, GN.EDGE_TO_OFFSET = Zx, GN.EDGE_BUNDLE_GAP = Kx,GN[Jx] = Qx,GN.EDGE_EXTEND = tT,GN.EDGE_CONTROL_POINT = iT,GN.EDGE_SPLIT_BY_PERCENT = "edge.split.by.percent",GN.EDGE_SPLIT_PERCENT = eT,GN[nT] = sT,GN[rT] = hT,GN[Tf] = aT,GN.EDGE_FROM_AT_EDGE = oT,GN[_T] = fT,GN[cT] = uT,GN.ARROW_FROM_SIZE = dT,GN.ARROW_FROM_OFFSET = lT,GN[vT] = bT,GN.ARROW_FROM_STROKE_STYLE = "arrow.from.stroke.style",GN[gT] = yT,GN[pT] = "arrow.from.outline.style",GN.ARROW_FROM_LINE_DASH = ET,GN[mT] = "arrow.from.line.dash.offset",GN[xT] = "arrow.from.fill.color",GN.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient",GN[TT] = wT,GN[OT] = kT,GN[iE] = ST,GN.ARROW_TO_SIZE = IT,GN.ARROW_TO_OFFSET = AT,GN.ARROW_TO_STROKE = LT,GN.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style",GN.ARROW_TO_OUTLINE = CT,GN[RT] = "arrow.to.outline.style",GN.ARROW_TO_LINE_DASH = MT,GN[DT] = "arrow.to.line.dash.offset",GN.ARROW_TO_FILL_COLOR = PT,GN.ARROW_TO_FILL_GRADIENT = "arrow.to.fill.gradient",GN[NT] = jT,GN[BT] = $T;
    var zN = new ss, YN = UD[rf], HN = UD[af], qN = !1;
    zN._35(HN, GN[dv], null, xE), zN._35(HN, GN[VE], null, xb), zN._35(HN, GN[bv], null, OE), zN._35(HN, GN.SELECTION_COLOR, null, TE), zN._35(HN, GN[FT], null, "selectionShadowOffsetX"), zN._35(HN, GN.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), zN._35(YN, ph, cy, to), zN._35(HN, GN[GT], cy, zT), zN._35(HN, GN[YT], cy, Jp), zN._35(HN, GN.LABEL_COLOR, cy, HT), zN._35(HN, GN.LABEL_FONT_SIZE, cy, xc), zN._35(HN, GN[lx], cy, El), zN._35(HN, GN.LABEL_BORDER_STYLE, cy, qT), zN._35(HN, GN[WT], cy, UT), zN._35(HN, GN.LABEL_ON_TOP, cy, XT), qN || (zN._35(HN, GN[hm], null, wE), zN._35(HN, GN.SHADOW_COLOR, null, Hv), zN._35(HN, GN[VT], null, qv), zN._35(HN, GN.SHADOW_OFFSET_Y, null, Wv), zN._35(HN, GN[ZT], cy, mc), zN._35(HN, GN.LABEL_FONT_STYLE, cy, KT), zN._35(HN, GN.LABEL_ALIGN_POSITION, cy, JT), zN._35(HN, GN.LABEL_ROTATE, cy, so), zN._35(HN, GN.LABEL_PADDING, cy, lo), zN._35(HN, GN.LABEL_POINTER_WIDTH, cy, QT), zN._35(HN, GN[sx], cy, No), zN._35(HN, GN[tw], cy, iw), zN._35(HN, GN[ax], cy, RE), zN._35(HN, GN.LABEL_OFFSET_Y, cy, ME), zN._35(HN, GN.LABEL_ROTATABLE, cy, ew), zN._35(HN, GN.LABEL_BACKGROUND_GRADIENT, cy, $o), zN._35(HN, GN.LABEL_SIZE, cy, Kp), zN._35(HN, GN.LABEL_SHADOW_BLUR, cy, wE), zN._35(HN, GN[mx], cy, Hv), zN._35(HN, GN.LABEL_SHADOW_OFFSET_X, cy, qv), zN._35(HN, GN[nw], cy, Wv), zN._35(HN, GN.LABEL_Z_INDEX, cy, Lp), zN._35(HN, GN[sw], null, Xv), zN._35(HN, GN[sm], null, rw), zN._35(HN, GN.ALPHA, null, rm));
    var WN = new ss;
    WN._35(YN, Hp), WN._35(YN, Jp, null, hw), WN._35(YN, so, null, so), qN || (WN._35(HN, GN[aw], null, UT), WN._35(HN, GN[ow], null, $o), WN._35(HN, GN.PADDING, null, lo), WN._35(HN, GN.BORDER, null, El), WN._35(HN, GN[_w], null, iw), WN._35(HN, GN.BORDER_COLOR, null, qT), WN._35(HN, GN[fw], null, cw), WN._35(HN, GN.BORDER_LINE_DASH_OFFSET, null, uw)), WN._35(YN, Jv, Jv, to, dw), WN._35(YN, Kp, Jv, Kp), WN._35(HN, GN[um], Jv, io), WN._35(HN, GN[lw], Jv, $v), WN._35(HN, GN[gm], Jv, vw), qN || (WN._35(HN, GN[bw], Jv, kb), WN._35(HN, GN[gw], Jv, Sb), WN._35(HN, GN.SHAPE_FILL_GRADIENT, Jv, yw), WN._35(HN, GN[pw], Jv, Ko), WN._35(HN, GN.SHAPE_LINE_DASH_OFFSET, Jv, t_), WN._35(HN, GN[Ew], Jv, wb), WN._35(HN, GN[wm], Jv, Ob), WN._35(HN, GN[mw], Jv, Yo), WN._35(HN, GN.IMAGE_BACKGROUND_COLOR, Jv, UT), WN._35(HN, GN[xw], Jv, $o), WN._35(HN, GN[Tw], Jv, lo), WN._35(HN, GN.IMAGE_BORDER, Jv, El), WN._35(HN, GN[ww], Jv, iw), WN._35(HN, GN[$m], Jv, qT), WN._35(HN, GN[Ow], Jv, cw), WN._35(HN, GN.IMAGE_BORDER_LINE_DASH_OFFSET, Jv, uw), WN._35(HN, GN[kw], Jv, Lp), WN._35(HN, GN[qm], Jv, rm)), WN._35(YN, lE, null, null, Sw), WN._35(YN, qf, null, null, Sw);
    var UN = new ss;
    UN._35(YN, bE, null, null, Iw), UN._35(YN, gE, null, null, Iw), UN._35(YN, vE, null, null, Iw), UN._35(YN, lo, null, null, Iw), UN._35(HN, GN[Aw], Lw, vw), UN._35(HN, GN.GROUP_BACKGROUND_GRADIENT, Lw, yw), UN._35(HN, GN[Cw], Lw, io), UN._35(HN, GN[Ix], Lw, $v), UN._35(HN, GN[Lx], Lw, Ko), UN._35(HN, GN.GROUP_STROKE_LINE_DASH_OFFSET, Lw, t_);
    var XN = new ss;
    XN._35(YN, $c, Lw, null, Rw), XN._35(YN, jp, Lw, null, Rw), XN._35(YN, Df, Lw, null, Rw), XN._35(HN, GN.EDGE_WIDTH, Lw, io), XN._35(HN, GN.EDGE_COLOR, Lw, $v), XN._35(HN, GN.ARROW_FROM, Lw, Mw), XN._35(HN, GN.ARROW_TO, Lw, Dw), qN || (XN._35(HN, GN[Pw], null, Bf, Rw), XN._35(HN, GN.EDGE_TO_AT_EDGE, null, $f, Rw), XN._35(HN, GN.EDGE_OUTLINE, Lw, kb), XN._35(HN, GN.EDGE_OUTLINE_STYLE, Lw, Sb), XN._35(HN, GN[Wx], Lw, Ko), XN._35(HN, GN[Xx], Lw, t_), XN._35(HN, GN[kf], Lw, null, Rw), XN._35(HN, GN[Nw], Lw, null, Rw), XN._35(HN, GN.EDGE_TO_OFFSET, Lw, null, Rw), XN._35(HN, GN[Ew], Lw, wb), XN._35(HN, GN[wm], Lw, Ob), XN._35(YN, Pp, null, null, Rw, !0), XN._35(YN, Nf, null, null, Rw, !0), XN._35(HN, GN.ARROW_FROM_SIZE, Lw, jw), XN._35(HN, GN[Bw], Lw, $w), XN._35(HN, GN[vT], Lw, Fw), XN._35(HN, GN.ARROW_FROM_STROKE_STYLE, Lw, Gw), XN._35(HN, GN[gT], Lw, zw), XN._35(HN, GN.ARROW_FROM_OUTLINE_STYLE, Lw, "fromArrowOutlineStyle"), XN._35(HN, GN.ARROW_FROM_FILL_COLOR, Lw, Yw), XN._35(HN, GN[Hw], Lw, "fromArrowFillGradient"), XN._35(HN, GN.ARROW_FROM_LINE_DASH, Lw, qw), XN._35(HN, GN[mT], Lw, "fromArrowLineDashOffset"), XN._35(HN, GN.ARROW_FROM_LINE_JOIN, Lw, Ww), XN._35(HN, GN.ARROW_FROM_LINE_CAP, Lw, Uw), XN._35(HN, GN[Xw], Lw, Vw), XN._35(HN, GN.ARROW_TO_OFFSET, Lw, Zw), XN._35(HN, GN[Kw], Lw, Jw), XN._35(HN, GN[Qw], Lw, tO), XN._35(HN, GN[iO], Lw, eO), XN._35(HN, GN[RT], Lw, nO), XN._35(HN, GN[sO], Lw, rO), XN._35(HN, GN[hO], Lw, aO), XN._35(HN, GN[oO], Lw, _O), XN._35(HN, GN.ARROW_TO_LINE_DASH_OFFSET, Lw, "toArrowLineDashOffset"), XN._35(HN, GN[BT], Lw, fO), XN._35(HN, GN[NT], Lw, cO));
    var VN = new ss;
    VN._35(HN, GN.EDGE_BUNDLE_LABEL_COLOR, uO, HT), VN._35(HN, GN.EDGE_BUNDLE_LABEL_POSITION, uO, zT), VN._35(HN, GN[Mx], uO, Jp), VN._35(HN, GN[dO], uO, xc), VN._35(HN, GN[lO], uO, ew), qN || (VN._35(HN, GN[vO], uO, so), VN._35(HN, GN[Px], uO, mc), VN._35(HN, GN[bO], uO, KT), VN._35(HN, GN.EDGE_BUNDLE_LABEL_PADDING, uO, lo), VN._35(HN, GN[Nx], uO, QT), VN._35(HN, GN.EDGE_BUNDLE_LABEL_POINTER, uO, No), VN._35(HN, GN[jx], uO, iw), VN._35(HN, GN[gO], uO, RE), VN._35(HN, GN.EDGE_BUNDLE_LABEL_OFFSET_Y, uO, ME), VN._35(HN, GN[yO], uO, El), VN._35(HN, GN.EDGE_BUNDLE_LABEL_BORDER_STYLE, uO, qT), VN._35(HN, GN[pO], uO, UT), VN._35(HN, GN[EO], uO, $o));
    var ZN = new ss;
    ZN._35(YN, Hp), ZN._35(HN, GN[aw], null, UT), ZN._35(HN, GN[ow], null, $o), ZN._35(HN, GN[Nm], null, lo), ZN._35(HN, GN[Am], null, El), ZN._35(HN, GN[_w], null, iw), ZN._35(HN, GN.BORDER_COLOR, null, qT), ZN._35(HN, GN.BORDER_LINE_DASH, null, cw), ZN._35(HN, GN.BORDER_LINE_DASH_OFFSET, null, uw), ZN._35(YN, so, null, so), ZN._35(YN, Pp, null, null, mO), ZN._35(YN, nE, Jv, to), ZN._35(YN, Kp, Jv, Kp), ZN._35(HN, GN[um], Jv, io), ZN._35(HN, GN[lw], Jv, $v), ZN._35(HN, GN[gm], Jv, vw), ZN._35(HN, GN.SHAPE_FILL_GRADIENT, Jv, yw), qN || (ZN._35(HN, GN[bw], Jv, kb), ZN._35(HN, GN.SHAPE_OUTLINE_STYLE, Jv, Sb), ZN._35(HN, GN.SHAPE_LINE_DASH, Jv, Ko), ZN._35(HN, GN.SHAPE_LINE_DASH_OFFSET, Jv, t_), ZN._35(HN, GN.LINE_CAP, Jv, wb), ZN._35(HN, GN.LINE_JOIN, Jv, Ob), ZN._35(HN, GN[mw], Jv, Yo), ZN._35(HN, GN.IMAGE_BACKGROUND_COLOR, Jv, UT), ZN._35(HN, GN.IMAGE_BACKGROUND_GRADIENT, Jv, $o), ZN._35(HN, GN.IMAGE_PADDING, Jv, lo), ZN._35(HN, GN.IMAGE_BORDER, Jv, El), ZN._35(HN, GN[ww], Jv, iw), ZN._35(HN, GN[$m], Jv, qT), ZN._35(HN, GN.IMAGE_BORDER_LINE_DASH, Jv, cw), ZN._35(HN, GN[xO], Jv, uw), ZN._35(HN, GN.ARROW_FROM, Jv, Mw), ZN._35(HN, GN.ARROW_FROM_SIZE, Jv, jw), ZN._35(HN, GN.ARROW_FROM_OFFSET, Jv, $w), ZN._35(HN, GN.ARROW_FROM_STROKE, Jv, Fw), ZN._35(HN, GN.ARROW_FROM_STROKE_STYLE, Jv, Gw), ZN._35(HN, GN.ARROW_FROM_FILL_COLOR, Jv, Yw), ZN._35(HN, GN.ARROW_FROM_FILL_GRADIENT, Jv, "fromArrowFillGradient"), ZN._35(HN, GN.ARROW_FROM_LINE_DASH, Jv, qw), ZN._35(HN, GN[mT], Jv, "fromArrowLineDashOffset"), ZN._35(HN, GN.ARROW_FROM_LINE_JOIN, Jv, Ww), ZN._35(HN, GN.ARROW_FROM_LINE_CAP, Jv, Uw), ZN._35(HN, GN.ARROW_TO_SIZE, Jv, Vw), ZN._35(HN, GN.ARROW_TO_OFFSET, Jv, Zw), ZN._35(HN, GN.ARROW_TO, Jv, Dw), ZN._35(HN, GN.ARROW_TO_STROKE, Jv, Jw), ZN._35(HN, GN.ARROW_TO_STROKE_STYLE, Jv, tO), ZN._35(HN, GN[sO], Jv, rO), ZN._35(HN, GN[hO], Jv, aO), ZN._35(HN, GN[oO], Jv, _O), ZN._35(HN, GN.ARROW_TO_LINE_DASH_OFFSET, Jv, "toArrowLineDashOffset"), ZN._35(HN, GN[BT], Jv, fO), ZN._35(HN, GN[NT], Jv, cO));
    var KN = function (t, i) {
        return t = t[Lp], i = i[Lp], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    }, JN = function (t, i) {
        this[cf] = new KM, j(this, JN, arguments), this.id = this.$data.id, this[Rf] = i, this._f5 = [], this._n81 = new ss
    };
    JN.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _n81: null,
        _f5: null,
        addChild: function (t, i) {
            t._jv = this, i !== e ? y(this._f5, t, i) : this._f5[Wr](t), t._ds && this._n7y(t), this.invalidateChildrenIndex(), this[TO]()
        },
        removeChild: function (t) {
            this._n81.removeBinding(t), t._jv = null, p(this._f5, t), this._jx && this._jx.remove(t), this.invalidateSize()
        },
        getProperty: function (t, i) {
            return i == UD[af] ? this.graph.getStyle(this.$data, t) : i == UD[hf] ? this[Ho].get(t) : this.$data[t]
        },
        getStyle: function (t) {
            return this.graph[df](this[Ho], t)
        },
        _16: function (t, i, e) {
            var n = this._n81.onBindingPropertyChange(this, t, i, e);
            return zN[wO](this, t, i, e) || n
        },
        onPropertyChange: function (t) {
            if (Lp == t[Rc])return this.invalidateRender(), !0;
            if (Op == t.type) {
                if (kp == t.kind)return this[kp](), !0;
                var i = t[ef];
                return i && i.ui ? (qa == t.kind ? this._9c(i) : Hr == t[Rc] && this.removeChild(i.ui), !0) : !1
            }
            return this._16(t.kind, t.propertyType || YN, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new tj;
            t[ph] = cy, this.addChild(t), this[cy] = t
        },
        initialize: function () {
            this[OO](), this[Ho]._n9q && this.$data._n9q[__](this._9c, this), zN[kO](this), this._n81.initBindingProperties(this, !1)
        },
        addBinding: function (t, i) {
            return i[QE] ? (i.target = t, void this._n81._2h(i[QE], i)) : !1
        },
        _fg: function (t, i) {
            var e = this.$data;
            if (!e._n9q)return !1;
            var n = e._n9q.getById(t.id);
            if (!n || !n.bindingProperties)return !1;
            var s = n.bindingProperties;
            if (A(s)) {
                var r = !1;
                return l(s, function (t) {
                    return to == t.bindingProperty ? (r = rs(e, i, t.property, t.propertyType), !1) : void 0
                }, this), r
            }
            return to == s.bindingProperty ? rs(e, i, s[QE], s.propertyType) : !1
        },
        _9c: function (t) {
            var i = t.ui;
            if (i) {
                var e = t.bindingProperties;
                e && (Array.isArray(e) ? e.forEach(function (t) {
                    this.addBinding(i, t)
                }, this) : this[SO](i, e)), this[IO](i)
            }
        },
        validate: function () {
            return this._n7g || (this.initialize(), this._n7g = !0), this.doValidate()
        },
        _$k: !0,
        invalidateChildrenIndex: function () {
            this._$k = !0
        },
        doValidate: function () {
            if (this._1s && (this._1s = !1, this[AO]() && (this.measure(), this.$invalidateSize = !0), this._$k && (this._$k = !1, RM ? this._f5 = d(this._f5, KN) : this._f5.sort(KN))), Ye[Fr](this) && (this.$invalidateRotate = !0), this[Wo]) {
                MP.call(this), this[cf].setByRect(this._fc);
                var t = this.$selectionBorder || 0, i = Math.max(this[LO] || 0, this[CO] || 0, this[RO] || 0), e = Math.max(this.$shadowOffsetY || 0, this.$selectionShadowOffsetY || 0), n = Math[za](2 * t, this.$shadowBlur, this[MO]);
                n += zM.UI_BOUNDS_GROW || 0;
                var s = n - i, r = n + i, h = n - e, a = n + e;
                return 0 > s && (s = 0), 0 > r && (r = 0), 0 > h && (h = 0), 0 > a && (a = 0), this.uiBounds[Po](h, s, a, r), this[BE] && this.onBoundsChanged(), this.$invalidateBounds = !0, !0
            }
        },
        validateChildren: function () {
            var t, i = this._n9ody, e = this[DO];
            i && (i[PO] = this[PO], i.$renderColorBlendMode = this.$renderColorBlendMode, i.$shadowColor = this[NO], i[jO] = this.$shadowBlur, i[CO] = this.$shadowOffsetX, i.$shadowOffsetY = this[BO]), this[DO] = !1, i && i._1s && (e = i[go]() || e, i.$x = 0, i.$y = 0, i.$invalidateRotate && MP.call(i), t = !0);
            for (var n = 0, s = this._f5.length; s > n; n++) {
                var r = this._f5[n];
                r != i && (r._1s && r.validate() || e) && r._hg && (Ue(r, i, this), t || (t = !0))
            }
            return t
        },
        measure: function () {
            this._iz.clear();
            for (var t, i, e = 0, n = this._f5.length; n > e; e++)t = this._f5[e], t._hg && (i = t._fc, i.width <= 0 || i[Sa] <= 0 || this._iz.addRect(t.$x + i.x, t.$y + i.y, i[ka], i[Sa]))
        },
        _jx: null,
        _n7y: function (t) {
            if (!this._jx) {
                if (!t[XT])return;
                return this._jx = new HM, this._jx.add(t)
            }
            return t[XT] ? this._jx[qa](t) : this._jx.remove(t)
        },
        draw: function (t, i, e) {
            for (var n, s = 0, r = this._f5[jr]; r > s; s++)n = this._f5[s], n._hg && !n.showOnTop && n._je(t, i, e, this)
        },
        _97: function (t, i) {
            if (!this._hg || !this._jx || !this._jx.length)return !1;
            t.save(), t.translate(this.$x, this.$y), this[$O] && this.$_hostRotate && t.rotate(this[Co]), (this.offsetX || this.offsetY) && t[bo](this[RE], this.offsetY), this.$rotate && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._n7k && t[bo](-this._n7k.x, -this._n7k.y), this.shadowColor && (t[Hv] = this[Hv], t.shadowBlur = this[wE] * i, t.shadowOffsetX = this[qv] * i, t.shadowOffsetY = this[Wv] * i), t.beginPath();
            for (var e, n = 0, s = this._f5.length; s > n; n++)e = this._f5[n], e._hg && e[XT] && e._je(t, i, this.selected, this);
            t.restore()
        },
        _dg: function (t, i, e) {
            if (e) {
                if (!this._iz.intersectsRect(t - e, i - e, 2 * e, 2 * e))return !1
            } else if (!this._iz.intersectsPoint(t, i))return !1;
            return this._5v(t, i, e)
        },
        _5v: function (t, i, e) {
            for (var n, s = this._f5[jr] - 1; s >= 0; s--)if (n = this._f5[s], n._hg && n._hj(t, i, e))return n;
            return !1
        },
        destroy: function () {
            this._hded = !0;
            for (var t, i = this._f5.length - 1; i >= 0; i--)t = this._f5[i], t[FO]()
        }
    }, N(JN, $N), K(JN[fh], {
        renderColorBlendMode: {
            get: function () {
                return this.$renderColorBlendMode
            }, set: function (t) {
                this[GO] = t, this._1s = !0, this[kv] && (this.body.renderColorBlendMode = this.$renderColorBlendMode)
            }
        }, renderColor: {
            get: function () {
                return this.$renderColor
            }, set: function (t) {
                this[PO] = t, this._1s = !0, this.body && (this[kv].renderColor = this.$renderColor)
            }
        }, bodyBounds: {
            get: function () {
                if (this.$invalidateBounds) {
                    this.$invalidateBounds = !1;
                    var t, i = this[kv];
                    t = i && i._hg && !this._$z() ? i._fc[qr]() : this._fc.clone(), this[so] && Mi(t, this.rotate, t), t.x += this.$x, t.y += this.$y, this._d9 = t
                }
                return this._d9
            }
        }, body: {
            get: function () {
                return this._n9ody
            }, set: function (t) {
                t && this._n9ody != t && (this._n9ody = t, this.bodyChanged = !0, this[TO]())
            }
        }
    }), zM.UI_BOUNDS_GROW = 1;
    var QN = function () {
        j(this, QN, arguments)
    };
    QN.prototype = {
        strokeStyle: zv,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jr: 1,
        _jt: 1,
        outline: 0,
        onDataChanged: function (t) {
            B(this, QN, zE, arguments), this._kb && this._8m && this._kb._6x(this._8m, this), t && this._n82(t)
        },
        _n82: function (t) {
            this._kb = pe(t), this._kb[go](), (this._kb._lv == sP || this._kb._6t()) && (this._8m || (this._8m = function () {
                this.invalidateData(), this._jv && this._jv.graph && (this._jv[TO](), this._jv[Rf].invalidate())
            }), this._kb._n7i(this._8m, this))
        },
        _kb: null,
        initialize: function () {
            this._n82(this[Ho])
        },
        _5g: function () {
            return this._kb && this._kb[Hf]
        },
        _9f: function (t) {
            if (!t || t.width <= 0 || t.height <= 0 || !this[zO] || !(this.size instanceof Object))return this._jr = 1, void(this._jt = 1);
            var i = this.size.width, n = this.size.height;
            if ((i === e || null === i) && (i = -1), (n === e || null === n) && (n = -1), 0 > i && 0 > n)return this._jr = 1, void(this._jt = 1);
            var s, r, h = t.width, a = t[Sa];
            i >= 0 && (s = i / h), n >= 0 && (r = n / a), 0 > i ? s = r : 0 > n && (r = s), this._jr = s, this._jt = r
        },
        validateSize: function () {
            if (this.$invalidateScale) {
                this[YO] = !1;
                var t = this._originalBounds;
                this._jr, this._jt, this._9f(t), this.setMeasuredBounds(t[ka] * this._jr, t.height * this._jt, t.x * this._jr, t.y * this._jt)
            }
        },
        measure: function () {
            var t = this._kb.getBounds(this[io] + this.outline);
            return t ? (this[YO] = !0, void(this._originalBounds = t[qr]())) : void this._iz.set(0, 0, 0, 0)
        },
        onBoundsChanged: function () {
            this.$invalidateFillGradient = !0
        },
        _28: function () {
            this.$invalidateFillGradient = !1, this._fillGradient = this.fillGradient ? cP.prototype[HO].call(this[qO], this._8l) : null
        },
        draw: function (t, i, e, n) {
            if (this._jr && this._jt) {
                if (this[WO] && this._28(), t[jb](), this._kb._lv == hP)return t.scale(this._jr, this._jt), this._kb._lu[Hf](t, i, this, e, n || this), void t.restore();
                e && this._88(t, i, n), this._kb[Hf](t, i, this, this._jr, this._jt), t.restore()
            }
        },
        _dg: function (t, i, e) {
            if (this._kb._hj) {
                t /= this._jr, i /= this._jt;
                var n = (this._jr + this._jt) / 2;
                return n > 1 && (e /= n, e = 0 | e), this._kb._lu instanceof IP ? this._kb._lu._hj(t, i, e, !0, this.$lineWidth, this[UO] || this.$fillGradient) : this._kb._hj(t, i, e)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, N(QN, $N), es(QN[fh], {
        fillColor: {},
        size: {validateFlags: [WE, XO]},
        fillGradient: {validateFlags: [VO]}
    }), K(QN.prototype, {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        }
    }), zM.ALIGN_POSITION = QM.CENTER_MIDDLE;
    var tj = function () {
        j(this, tj, arguments), this.color = zM.LABEL_COLOR
    };
    tj.prototype = {
        color: zM[Vm],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _g6: null,
        alignPosition: null,
        measure: function () {
            this[Fa];
            var t = $i(this.$data, this.$fontSize || zM[tu], this.$font);
            if (this._g6 = t, this.$size) {
                var i = this[zO][ka] || 0, e = this.$size[Sa] || 0;
                return this[ZO](i > t.width ? i : t.width, e > t.height ? e : t.height)
            }
            return this.setMeasuredBounds(t[ka], t[Sa])
        },
        _dg: function (t, i, e) {
            return this.$data ? Le(t, i, e, this) : !1
        },
        draw: function (t, i, e, n) {
            e && this._88(t, i, n);
            var s = this.$fontSize || zM[tu];
            if (this[$O] && this[Co]) {
                var r = ce(this.$_hostRotate);
                r > qM && 3 * qM > r && (t[bo](this._iz.width / 2, this._iz[Sa] / 2), t[so](Math.PI), t[bo](-this._iz.width / 2, -this._iz.height / 2))
            }
            var h = this[JT] || zM[KO], a = h[Bh], o = h[$h], _ = s * zM[pv], f = _ / 2;
            if (o != nD && this._g6.height < this._iz[Sa]) {
                var c = this._iz[Sa] - this._g6[Sa];
                f += o == sD ? c / 2 : c
            }
            t[bo](0, f), t[Fa] != this.$font && (t[Fa] = this[JO]), a == iD ? (t.textAlign = jf, t.translate(this._iz.width / 2, 0)) : a == eD ? (t.textAlign = Ph, t.translate(this._iz.width, 0)) : t.textAlign = vo, t.textBaseline = Nv, t[Cv] = this[HT];
            for (var u = 0, d = this.$data.split(Ga), l = 0, v = d[jr]; v > l; l++) {
                var b = d[l];
                t.fillText(b, 0, u), u += _
            }
        },
        _5g: function () {
            return null != this[Ho] || this[zO]
        },
        $invalidateFont: !0
    }, N(tj, $N), es(tj[fh], {
        size: {validateFlags: [KE]},
        fontStyle: {validateFlags: [KE, QO]},
        fontSize: {validateFlags: [KE, QO]},
        fontFamily: {validateFlags: [KE, QO]}
    }), K(tj[fh], {
        font: {
            get: function () {
                return this[tk] && (this.$invalidateFont = !1, this[JO] = (this.$fontStyle || zM[Qc]) + Qr + (this.$fontSize || zM[tu]) + iu + (this.$fontFamily || zM.FONT_FAMILY)), this[JO]
            }
        }
    });
    var ij = function (t) {
        t = t || new IP, this.pathBounds = new KM, j(this, ij, [t])
    };
    ij.prototype = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            this[ik] = !0, this[ek] = !0, this.$data.getBounds(this[nk] + this[sk], this.pathBounds), this.setMeasuredBounds(this[rk])
        },
        validateSize: function () {
            if (this[ik] || this[ek]) {
                var t = this[rk].clone();
                if (this.$invalidateFromArrow) {
                    this.$invalidateFromArrow = !1;
                    var i = this[hk]();
                    i && t.add(i)
                }
                if (this.$invalidateToArrow) {
                    this[ek] = !1;
                    var i = this.validateToArrow();
                    i && t[qa](i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._iv || !this[ak])return void(this.$fromArrowShape = null);
            var t = this.$data, i = 0, e = 0, n = this.$fromArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0, i > 0 && 1 > i && (i *= t._iv)), this.fromArrowLocation = t.getLocation(i, e), this[ok].rotate = Math.PI + this[ok][so] || 0, this[_k] = Ds(this[ak], this[fk]);
            var s = this[_k][fo](this[ck].lineWidth + this.fromArrowStyles.outline);
            return this.fromArrowFillGradient instanceof WD.Gradient ? this[ck]._fillGradient = cP.prototype[HO][Fr](this[uk], s) : this[ck] && (this[ck]._fillGradient = null), Di(s, this.fromArrowLocation[so], s, s[Ph], s.cy), s.offset(this[ok].x, this.fromArrowLocation.y), s
        },
        validateToArrow: function () {
            if (!this.$data._iv || !this[dk])return void(this[lk] = null);
            var t = this.$data, i = 0, e = 0, n = this[vk];
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0) : i += n || 0), 0 > i && i > -1 && (i *= t._iv), i += t._iv, this[bk] = t.getLocation(i, e), this[lk] = Ds(this[dk], this.$toArrowSize);
            var s = this[lk][fo](this.toArrowStyles[io] + this.toArrowStyles[kb]);
            return this[aO]instanceof WD.Gradient ? this.toArrowStyles._fillGradient = cP[fh].generatorGradient.call(this.toArrowFillGradient, s) : this[gk] && (this.toArrowStyles._fillGradient = null), Di(s, this.toArrowLocation[so], s, s.right, s.cy), s.offset(this.toArrowLocation.x, this[bk].y), s
        },
        _2x: function (t) {
            var i = t ? "from" : jp, n = this[i + yk];
            n === e && (n = this.$lineWidth);
            var s = this[i + pk];
            s === e && (s = this.strokeStyle);
            var r = this[i + Ek];
            r || (this[i + Ek] = r = {}), r.lineWidth = n, r.strokeStyle = s, r.lineDash = this[i + mk], r.lineDashOffset = this[i + xk], r[vw] = this[i + Tk], r[yw] = this[i + wk], r[wb] = this[i + Ok], r.lineJoin = this[i + kk], r.outline = this[i + Sk] || 0, r[Sb] = this[i + Ik]
        },
        doValidate: function () {
            return this[ak] && this._2x(!0), this.$toArrow && this._2x(!1), B(this, ij, Ak)
        },
        drawArrow: function (t, i, e, n) {
            if (this.$fromArrow && this.$fromArrowShape) {
                t.save();
                var s = this[ok], r = s.x, h = s.y, a = s.rotate;
                t[bo](r, h), a && t.rotate(a), this[_k][Hf](t, i, this[ck], e, n), t[$b]()
            }
            if (this.$toArrow && this[lk]) {
                t.save();
                var s = this.toArrowLocation, r = s.x, h = s.y, a = s.rotate;
                t[bo](r, h), a && t[so](a), this.$toArrowShape.draw(t, i, this.toArrowStyles, e, n), t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this[WO] = !0
        },
        _28: function () {
            this[WO] = !1, this._fillGradient = this.$fillGradient ? cP.prototype[HO].call(this.$fillGradient, this._8l) : null
        },
        draw: function (t, i, e, n) {
            this.$invalidateFillGradient && this._28(), this.$data.draw(t, i, this, e, n), this.drawArrow(t, i, e, n)
        },
        _dg: function (t, i, e) {
            if (this.$data._hj(t, i, e, !0, this.$lineWidth + this[sk], this.$fillColor || this.$fillGradient))return !0;
            if (this.$toArrow && this[lk]) {
                var n = t - this.toArrowLocation.x, s = i - this.toArrowLocation.y;
                if (this[bk][so]) {
                    var r = Li(n, s, -this.toArrowLocation[so]);
                    n = r.x, s = r.y
                }
                var h = this[gk].fillColor || this.toArrowStyles.fillGradient;
                if (this[lk]._hj(n, s, e, !0, this[gk].lineWidth, h))return !0
            }
            if (this[ak] && this[_k]) {
                var n = t - this[ok].x, s = i - this[ok].y;
                if (this.fromArrowLocation[so]) {
                    var r = Li(n, s, -this.fromArrowLocation[so]);
                    n = r.x, s = r.y
                }
                var h = this[ck].fillColor || this.fromArrowStyles[yw];
                if (this.$fromArrowShape._hj(n, s, e, !0, this.fromArrowStyles[io], h))return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, N(ij, $N), es(ij[fh], {
        fillColor: {},
        fillGradient: {validateFlags: [VO]},
        fromArrowOffset: {validateFlags: [Lk, WE]},
        fromArrowSize: {validateFlags: [Lk, WE]},
        fromArrow: {validateFlags: [Lk, WE]},
        fromArrowOutline: {validateFlags: [Lk, WE]},
        fromArrowStroke: {validateFlags: [Lk, WE]},
        toArrowOffset: {validateFlags: [Ck, WE]},
        toArrowSize: {validateFlags: [Ck, WE]},
        toArrow: {validateFlags: [Ck, WE]},
        toArrowOutline: {validateFlags: [Ck, WE]},
        toArrowStroke: {validateFlags: [Ck, WE]},
        outline: {value: 0, validateFlags: [KE]}
    }), K(ij.prototype, {
        length: {
            get: function () {
                return this.data.length
            }
        }
    }), hs.prototype = {
        shape: null, path: null, initialize: function () {
            B(this, hs, GE), this.path = new IP, this[nE]._di = !1, this.shape = new ij(this[nE]), this.addChild(this.shape, 0), this._n9ody = this.shape, XN.initBindingProperties(this)
        }, _21: !0, _5y: null, _$z: function () {
            return !1
        }, _4l: function () {
            return !1
        }, validatePoints: function () {
            this[Lw].invalidateData();
            var t = this.$data, i = this.path;
            i[Ia]();
            var e = t[Rp], n = t[T_];
            e && n && Fs(this, t, i, e, n)
        }, drawLoopedEdge: function (t, i, e, n) {
            Hs(this, n, t)
        }, drawEdge: function (t, i, e, n, s, r) {
            var h = this.getStyle(GN[Nw]), a = this[df](GN[Rk]);
            if (h && (s.x += h.x || 0, s.y += h.y || 0), a && (r.x += a.x || 0, r.y += a.y || 0), n == UD.EDGE_TYPE_ZIGZAG) {
                var o = s.center, _ = r.center, f = (o.x + _.x) / 2, c = (o.y + _.y) / 2, u = o.x - _.x, d = o.y - _.y, l = Math.sqrt(u * u + d * d), v = Math.atan2(d, u);
                v += Math.PI / 6, l *= .04, l > 30 && (l = 30);
                var b = Math.cos(v) * l, g = Math[Dh](v) * l;
                return t[P_](f - g, c + b), void t.lineTo(f + g, c - b)
            }
            var y = Ys(this, this[to], s, r, i, e, s.center, r.center);
            y && (t._fb = y)
        }, _2f: function () {
            if (!this[Ho][Mk]())return null;
            var t = this.graph._8v._8q(this[Ho]);
            if (!t || !t.canBind(this.graph) || !t._gq)return null;
            var i = t.getYOffset(this);
            return t[Dk](this.$data) || (i = -i), i
        }, checkBundleLabel: function () {
            var t = this[Pk]();
            return t ? (this[uO] || this.createBundleLabel(), this[uO]._hg = !0, void(this[uO].data = t)) : void(this.bundleLabel && (this.bundleLabel._hg = !1, this.bundleLabel.data = null))
        }, createBundleLabel: function () {
            var t = new tj;
            t.editable = !1, this.bundleLabel = t, this[IO](this[uO]), VN[kO](this)
        }, getBundleLabel: function () {
            return this[Rf][Pk](this.data)
        }, doValidate: function () {
            return this._21 && (this._21 = !1, this.validatePoints()), this.checkBundleLabel(), B(this, hs, Ak)
        }, _5c: function () {
            this._21 = !0, this.invalidateSize()
        }, _16: function (t, i, e) {
            var n = this._n81.onBindingPropertyChange(this, t, i, e);
            return n = zN.onBindingPropertyChange(this, t, i, e) || n, this.bundleLabel && this[uO][Ho] && (n = VN[wO](this, t, i, e) || n), XN[wO](this, t, i, e) || n
        }
    }, N(hs, JN), hs[Nk] = function (t, i, e, n) {
        if (t.moveTo(i.x, i.y), !n || n == UD.EDGE_TYPE_DEFAULT)return void t[P_](e.x, e.y);
        if (n == UD.EDGE_TYPE_VERTICAL_HORIZONTAL)t.lineTo(i.x, e.y); else if (n == UD.EDGE_TYPE_HORIZONTAL_VERTICAL)t.lineTo(e.x, i.y); else if (0 == n.indexOf(UD[Af])) {
            var s;
            s = n == UD.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : n == UD.EDGE_TYPE_ORTHOGONAL_VERTICAL ? !1 : Math.abs(i.x - e.x) > Math[Nh](i.y - e.y);
            var r = (i.x + e.x) / 2, h = (i.y + e.y) / 2;
            s ? (t.lineTo(r, i.y), t.lineTo(r, e.y)) : (t.lineTo(i.x, h), t.lineTo(e.x, h))
        }
        t.lineTo(e.x, e.y)
    }, K(hs[fh], {
        length: {
            get: function () {
                return this.path ? this[nE].length : 0
            }
        }
    }), hs[fh][Aa] = function (t, i, e) {
        var n = Te(this[nE], t, i, e);
        if (n && n[jr] > 2) {
            var s = this[to], r = n[n.length - 1];
            s[jk] = r.type == mP ? n[Gr](1, n.length - 2) : n.splice(1, n[jr] - 1)
        }
    }, as[fh] = {
        _3b: null, image: null, initialize: function () {
            B(this, as, GE), this._n7n(), WN[kO](this)
        }, _n82: function () {
            this[to][Jv] ? this.image && (this[kv] = this.image) : this[cy] && (this.body = this[cy])
        }, _n7n: function () {
            this.image = new QN, this.addChild(this[Jv], 0), this._n82()
        }, doValidate: function () {
            this.body && (this instanceof Js && !this[Ho].groupImage && this._6g() ? this.body.$layoutByAnchorPoint = !1 : (this[kv].$layoutByAnchorPoint = null != this._3b, this.body.anchorPosition = this._3b));
            var t = this.$data[Yp], i = 0, e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return n && (this[Bk] = !0), this.$x = i, this.$y = e, JN[fh].doValidate.call(this) || n
        }, _16: function (t, i, e) {
            var n = this._n81[wO](this, t, i, e);
            return n = zN.onBindingPropertyChange(this, t, i, e) || n, WN[wO](this, t, i, e) || n
        }
    }, N(as, JN);
    var ej = function (t, i) {
        return t = t[Ho][Lp] || 0, i = i[Ho][Lp] || 0, t - i
    }, nj = {position: sc, "user-select": nc, "transform-origin": $k, "-webkit-tap-highlight-color": Bb};
    li(Fk, Gk), _s[fh] = {
        _kz: 1,
        _n8k: null,
        _8i: null,
        _8k: null,
        _$l: !0,
        _mt: null,
        _mr: null,
        _jo: null,
        _n98: null,
        _6s: !1,
        _n7g: !1,
        _j1: null,
        _53: function (t, i) {
            for (var e = this._n8k, n = 0, s = e.length; s > n; n++)if (t.call(i, e[n]) === !1)return !1
        },
        _ex: function (t, i) {
            this._mt.forEach(t, i)
        },
        _17: function (t, i) {
            for (var e = this._n8k, n = e[jr] - 1; n >= 0; n--)if (t[Fr](i, e[n]) === !1)return !1
        },
        _59: function (t, i) {
            this._mt[zk](t, i)
        },
        _3z: function (t, i) {
            this._81 && this._81._3z && this._81._3z(t, i)
        },
        _n8j: function () {
            ui(this._mr, {
                overflow: ec,
                padding: Yk
            }), this._j1._4v(), this._kk && this._kk.originAtCenter ? this._j1._db(0, 0) : this._j1._30 = !0
        },
        _4k: function () {
            return this._$l && (this._$l = !1, this._22()), this._8k
        },
        _41: function () {
            return this._j1._1b ? !1 : (this._j1._1b = !0, void this._n8i())
        },
        _n8i: function () {
            this._6s || (this._6s = !0, x(this._f9.bind(this)))
        },
        _n7d: function () {
            var t = !this._n7g || 0 == this._mt.length;
            this._n7g || (this._n7g = !0, this._n8j()), this._n7w(t);
            var i = this._jo.g;
            if (this._mt.isEmpty())return i._kg(), this._topCanvas._je(), this._6s = !1, this._j1._j7(this, !0), void this._4k();
            if (this._j1._j7(this, this._n98._mg), this._jq) {
                var e = this._kp;
                i.canvas.ratio && (e *= i.canvas.ratio), this._jq(i, e, t)
            }
            this._n98._kg(), this._j1._7n(), this._topCanvas._je(), this._6s = !1
        },
        _f9: function () {
            this._6s && (this._hded || (this._n7g && this._kk && this._kk._13 && (this._kk._13 = !1, this._kk[__](function (t) {
                t[wp](!0)
            })), this._n7d(), this._2z()))
        },
        _fe: null,
        _1n: function (t, i, e, n, s) {
            if (!e || !n)return void this._69();
            var r = this._n8k, h = this._8i;
            this._69(), this._fe.length = 0;
            var a, o = {}, _ = this._n98;
            s = s || _._mg;
            for (var f, c, u, d, l, v, b = this._mt._ja, g = t + e, y = i + n, p = 0, E = b.length; E > p; p++)if (v = b[p], l = v.__oldBounds, v.__oldBounds = null, v._hg)if (d = v.__izChanged, v.__izChanged = !1, f = v.uiBounds, c = f.x + v.$x, u = f.y + v.$y, g > c && y > u && c + f[ka] > t && u + f[Sa] > i) {
                if (a = v[Ho].zIndex, a in o || (o[a] = !0, this._fe.push(a || 0)), r.push(v), this._8i[v.id] = v, s)continue;
                l && (_._mb(l.x, l.y, l.width, l.height), s = _._mg), d && (_._mb(c, u, f.width, f[Sa]), s = _._mg)
            } else!s && h[v.id] && l && (_._mb(l.x, l.y, l.width, l.height), s = _._mg); else!s && l && (_._mb(l.x, l.y, l.width, l[Sa]), s = _._mg)
        },
        _n8c: function (t) {
            var i = t[Ho].__hgChanged;
            return t.$data.__hgChanged = !1, t._1s || t[Ho]._6s ? (t.$data._6s = !1, t._n7g && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t.uiBounds.y,
                width: t.uiBounds.width,
                height: t[cf][Sa]
            }), t.__izChanged = t[go](), i || t.__izChanged) : (i && t._n7g && (t.__oldBounds = {
                x: t.$x + t[cf].x,
                y: t.$y + t.uiBounds.y,
                width: t[cf][ka],
                height: t[cf][Sa]
            }), i)
        },
        _jq: function (t, i, e, n) {
            n = n || this._j1._7m;
            var s = n.x, r = n.y, h = n.width, a = n[Sa];
            this._1n(s, r, h, a, e), this._4k(), this._fe[jr] && (RM ? (this._fe[Hk](), this._n8k = d(this._n8k, ej)) : this._n8k[Hk](ej)), this._hv(t, i)
        },
        _hv: function (t, i) {
            t[jb](), this._n98._ix(t, this._jo, this._j1), this._j1._n9o(t);
            for (var e, n, s = this._n8k, r = [], h = 0, a = s[jr]; a > h; h++)e = s[h], n = e[cf], (this._n98._mg || this._n98._e9(n.x + e.$x, n.y + e.$y, n[ka], n[Sa])) && (e._je(t, i), e._jx && e._jx.length && r[Wr](e));
            if (r[jr])for (h = 0, a = r[jr]; a > h; h++)r[h]._97(t, i);
            t[$b]()
        },
        _fk: function (t, i, e) {
            t[jb](), t[bo](-e.x * i, -e.y * i), t.scale(i, i);
            var n, s, r = this._mt._ja[Yr]();
            this._fe.length && (RM ? (this._fe.sort(), r = d(r, ej)) : r[Hk](ej));
            for (var h = [], a = 0, o = r.length; o > a; a++)n = r[a], n._hg && (s = n.uiBounds, e.intersectsRect(s.x + n.$x, s.y + n.$y, s.width, s.height) && (n._je(t, i), n._jx && n._jx[jr] && h.push(n)));
            if (h.length)for (a = 0, o = h[jr]; o > a; a++)h[a]._97(t, i);
            t.restore()
        },
        _1h: function () {
        },
        _22: function () {
            for (var t, i, e = this._mt._ja, n = new KM, s = e.length - 1; s >= 0; s--)t = e[s], t._hg && (i = t[cf], n.addRect(t.$x + i.x, t.$y + i.y, i[ka], i[Sa]));
            var r = this._8k;
            this._8k = n, n.equals(r) || this._1h(r, n)
        },
        _n7w: function () {
            for (var t, i = this._mt._ja, e = i[jr] - 1; e >= 0; e--)t = i[e], this._n8c(t) && !this._$l && (this._$l = !0)
        },
        _23: function (t, i, e, n) {
            this._n98._mg || (t && (t > 0 && this._n98._mb(this._j1._7m.x, this._j1._7m.y, t / this._j1._kp, this._j1._9k / this._j1._kp), e + t < this._j1._n9m && this._n98._mb(this._j1._7m.x + (e + t) / this._j1._kp, this._j1._7m.y, (this._j1._n9m - e - t) / this._j1._kp, this._j1._9k / this._j1._kp)), i && (i > 0 && this._n98._mb(this._j1._7m.x, this._j1._7m.y, this._j1._n9m / this._j1._kp, i / this._j1._kp), n + i < this._j1._9k && this._n98._mb(this._j1._7m.x, this._j1._7m.y + (n + i) / this._j1._kp, this._j1._n9m / this._j1._kp, (this._j1._9k - n - i) / this._j1._kp)))
        },
        _de: function (t, i) {
            this._n8i(), this._j1._de(t, i)
        },
        _n97: function (t, i, e) {
            this._n8i(), this._j1._n97(t, i, e)
        },
        _8p: function () {
        },
        _fs: function (t, i, e) {
            return this._n7g ? void(this._j1._fs(t, i, e) !== !1 && this._n8i()) : void(this._j1._kp = t)
        },
        _1v: function () {
            var t = this._4k();
            if (!t[qo]()) {
                var i = this._j1._n9m / t[ka], e = this._j1._9k / t[Sa], n = Math.min(i, e);
                return n = Math[za](this._gl, Math.min(this._gn, n)), {scale: n, cx: t.cx, cy: t.cy}
            }
        },
        _j4: function (t, i, e) {
            return this._j1._j4(t, i, e) === !1 ? !1 : void this._n8i()
        },
        _hz: function (t, i) {
            return this._j1._hz(t, i) === !1 ? !1 : void this._n8i()
        },
        _j5: function (t, i) {
            return this._j1._j5(t, i) === !1 ? !1 : void this._n8i()
        },
        _7t: function () {
            return this._j1._7tFlag ? !1 : (this._j1._7tFlag = !0, void this._n8i())
        },
        _69: function () {
            this._n8k[jr] = 0, this._8i = {}
        },
        _l3: function () {
            this._kg()
        },
        _hd: function () {
            this._kg(), this._hded = !0, this._6s = !1, this._topCanvas[Ia](), this._8x.length = 0, this._81 && (this._81._hd(), delete this._81)
        },
        _kg: function () {
            this._n7g = !1, this._$l = !0, this._mt[Ia](), this._69(), this._n98._kg(), this._n8i()
        },
        _8f: function (t, i, e, n) {
            var s = this._kp;
            return new KM(this._n87(t), this._n86(i), e / s, n / s)
        },
        _n87: function (t) {
            return this._j1._n87(t)
        },
        _n86: function (t) {
            return this._j1._n86(t)
        },
        _du: function (t) {
            return this._j1._du(t)
        },
        _dv: function (t) {
            return this._j1._dv(t)
        },
        _l8: function (t) {
            return this._mt[ru](t.id || t)
        },
        _$h: function (t) {
            var i = this._87(t);
            return i.x = this._n87(i.x), i.y = this._n86(i.y), i
        },
        _g2: function (t, i) {
            return {x: this._du(t), y: this._dv(i)}
        },
        _ed: function (t, i) {
            return {x: this._n87(t), y: this._n86(i)}
        },
        _87: function (t) {
            return vi(t, this._mr)
        },
        _3x: function (t) {
            if (t.uiId !== e)return t.uiId ? this._mt.getById(t.uiId) : null;
            var i = Math[Za](zM.SELECTION_TOLERANCE / this._j1._kp) || .1;
            this._jo[La] && (i *= this._jo[La]);
            for (var n, s = this._$h(t), r = s.x, h = s.y, a = this._n8k, o = a[jr] - 1; o >= 0; o--)if (n = a[o], n._hg && n._hj(r, h, i))return t[qk] = n.id, n;
            t.uiId = null
        },
        _hj: function (t) {
            var i = this._3x(t);
            if (!i)return null;
            var e = Math.round(zM[vv] / this._j1._kp) || 1;
            this._jo.ratio && (e *= this._jo.ratio);
            var n = this._$h(t), s = n.x, r = n.y, h = i._hj(s, r, e, !0);
            return h instanceof $N ? h : i
        },
        _n7u: function (t) {
            t.id !== e && (t = t.id);
            var i = this._mt[ru](t);
            return i ? new KM((i.$x || 0) + i.uiBounds.x, (i.$y || 0) + i.uiBounds.y, i[cf].width, i[cf][Sa]) : void 0
        },
        _8x: null,
        _2z: function () {
            if (!this._8x.length)return !1;
            var t = this._8x;
            this._8x = [], l(t, function (t) {
                try {
                    t.delay ? m(t.call, t[dh], t[Wk]) : t.call.call(t[dh])
                } catch (i) {
                }
            }, this), this._f9()
        },
        callLater: function (t, i, e) {
            i && k(i) && (e = i, i = null);
            var n = this._8x;
            n[Wr]({call: t, scope: i, delay: e}), this._6s || this._2z()
        }
    }, K(_s.prototype, {
        _7m: {
            get: function () {
                return this._j1._7m
            }
        }, _ew: {
            get: function () {
                return this._j1._ew
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._j1._ew = t)
            }
        }, _gn: {
            get: function () {
                return this._j1._gn
            }, set: function (t) {
                return !t || 1 > t ? !1 : void(this._j1._gn = t)
            }
        }, _gl: {
            get: function () {
                return this._j1._gl
            }, set: function (t) {
                return !t || 0 >= t ? !1 : void(this._j1._gl = t)
            }
        }, _kp: {
            get: function () {
                return this._j1._gf()
            }, set: function (t) {
                this._fs(t)
            }
        }, _mz: {
            get: function () {
                return this._j1._kr()
            }
        }, _n1: {
            get: function () {
                return this._j1._ks()
            }
        }
    }), fs[fh] = {
        _n8e: null,
        _n9m: 0,
        _9k: 0,
        _30: !0,
        _1b: !0,
        _j1: null,
        _7m: null,
        _ew: 1.3,
        _gn: 10,
        _gl: .1,
        _kp: 1,
        _mz: 0,
        _n1: 0,
        _7n: function () {
            this._j1._gc(this._n8e._jo)
        },
        _4v: function () {
            return this._1b = !1, this._5x(this._n8e._mr.clientWidth, this._n8e._mr.clientHeight)
        },
        _5x: function (t, i) {
            return this._n9m == t && this._9k == i ? !1 : (this._n9m = t, this._9k = i, void this._n8e._3z(t, i))
        },
        _db: function (t, i, e) {
            e && (e = Math[za](this._gl, Math[Ha](this._gn, e)), this._kp = e), this._mz = this._n9m / 2 - t * this._kp, this._n1 = this._9k / 2 - i * this._kp, this._30 = !0
        },
        _3e: function (t, i) {
            t = t || this._n9m, i = i || this._9k, this._7m[du](-this._mz / this._kp, -this._n1 / this._kp, t / this._kp, i / this._kp)
        },
        _j4: function (t, i, e) {
            return this._fs(this._60() * t, i, e)
        },
        _j5: function (t, i) {
            return this._fs(this._60() * this._ew, t, i)
        },
        _hz: function (t, i) {
            return this._fs(this._60() / this._ew, t, i)
        },
        _fs: function (t, i, n) {
            this._7tFlag = !1, t = Math.max(this._gl, Math[Ha](this._gn, t));
            var s = this._60();
            return i === e && (i = this._n9m / 2, n = this._9k / 2), t != s && (this._30 = !0, this._n8e._8p(s, t)), this._j1._fs(t / this._kp, i, n)
        },
        _60: function () {
            return this._kp * this._j1._kp
        },
        _de: function (t, i) {
            this._j1._de(t, i)
        },
        _n97: function (t, i, e) {
            var n = this._kr(), s = this._ks(), r = this._gf();
            return e && (e = Math.max(this._gl, Math.min(this._gn, e))), t != n || i != s || e && e != r ? (e && e != r ? (e /= this._kp, this._30 = !0) : e = this._j1._kp, t -= n * e, i -= s * e, this._j1._9z(e, t, i), this._n8e._3o(n, s, r, arguments[0], arguments[1], arguments[2]), r != arguments[2] && this._n8e._8p(r, arguments[2]), !0) : !1
        },
        _7t: function () {
            this._7tFlag = !0
        },
        _gf: function () {
            return this._kp * this._j1._kp
        },
        _kr: function () {
            return this._mz * this._j1._kp + this._j1._mz
        },
        _ks: function () {
            return this._n1 * this._j1._kp + this._j1._n1
        },
        _j7: function (t, i) {
            this._1b && this._4v(), BM && NM && (i = !0);
            var e = t._jo, n = e[La] || 1, s = e[cc], r = e.clientHeight, h = this._n9m != s, a = this._9k != r, o = h || a;
            o && t._topCanvas._jo.setSize(this._n9m, this._9k);
            var _ = this._mz, f = this._n1, c = this._kp;
            if (this._7tFlag) {
                this._7tFlag = !1;
                var u = t._1v();
                u && this._db(u.cx, u.cy, u.scale)
            }
            if (this._30 || i || o)return this._30 = !1, this._kp *= this._j1._kp, this._mz = this._mz * this._j1._kp + this._j1._mz, this._n1 = this._n1 * this._j1._kp + this._j1._n1, this._j1._kp = 1, this._j1._mz = 0, this._j1._n1 = 0, o && e[$a](this._n9m, this._9k), t._n98._mg = !0, this._3e(this._n9m, this._9k), void((_ != this._mz || f != this._n1 || c != this._kp) && (t._3o(_, f, c, this._mz, this._n1, this._kp), c != this._kp && t._8p(c, this._kp)));
            var d = this._j1._mz, l = this._j1._n1;
            if (d || l) {
                this._j1._mz = 0, this._j1._n1 = 0, this._mz += d, this._n1 += l, this._3e(s, r);
                var v = e.g;
                this._dd(v, e, d * n, l * n), t._23(d, l, s, r), t._3o(_, f, c, this._mz, this._n1, this._kp)
            }
        },
        _dd: function (t, e, n, s) {
            var r = this._n9ackCanvas;
            r || (r = this._n9ackCanvas = i.createElement(Ra), r.g = r.getContext(Ba)), r[ka] = e.width, r[Sa] = e.height, r.g[Zv](e, n, s), t._kg(), t[Zv](r, 0, 0)
        },
        _n9o: function (t) {
            1 != t[Ra][La] && t.scale(t.canvas[La], t.canvas.ratio), t.translate(this._mz, this._n1), t[ha](this._kp, this._kp)
        },
        _n87: function (t) {
            return (t - this._mz) / this._kp
        },
        _n86: function (t) {
            return (t - this._n1) / this._kp
        },
        _du: function (t) {
            return t * this._kp + this._mz
        },
        _dv: function (t) {
            return t * this._kp + this._n1
        }
    };
    var sj = function () {
        this._gy = [], this._iz = new KM
    };
    sj.prototype = {
        _gx: 20, _gy: null, _mg: !1, _iz: null, _kg: function () {
            this._mg = !1, this._gy[jr] = 0, this._iz[Ia]()
        }, _iq: function () {
            return this._mg || this._gy[jr] > 0
        }, _mb: function (t, i, e, n) {
            this._mg || 0 >= e || 0 >= n || (this._gy[Wr]({x: t, y: i, width: e, height: n}), this._iz[Uk](t, i, e, n))
        }, _gz: function (t) {
            this._mb(t.x, t.y, t.width, t[Sa])
        }, _e9: function (t, i, e, n) {
            if (!this._iz[pu](t, i, e, n))return !1;
            if (GM || this._gy[jr] >= this._gx)return !0;
            for (var s, r = 0, h = this._gy.length; h > r; r++)if (s = this._gy[r], ri(t, i, e, n, s.x, s.y, s.width, s.height))return !0;
            return !1
        }, _ix: function (t, i, e) {
            if (this._mg)return t.setTransform(1, 0, 0, 1, 0, 0), void t[Xk](0, 0, i[ka], i[Sa]);
            t.beginPath();
            var n, s, r, h, a = e._kp, o = this._gy, _ = i[La] || 1;
            if (GM || o[jr] >= this._gx)return n = e._du(this._iz.x) * _, s = e._dv(this._iz.y) * _, r = X(n + this._iz[ka] * a * _) - (n = U(n)), h = X(s + this._iz.height * a * _) - (s = U(s)), t.clearRect(n, s, r, h), t.rect(n, s, r, h), void t.clip();
            for (var f, c = 0, u = o[jr]; u > c; c++)f = o[c], n = e._du(f.x) * _, s = e._dv(f.y) * _, r = X(n + f.width * a * _) - (n = U(n)), h = X(s + f.height * a * _) - (s = U(s)), t[Xk](n, s, r, h), t.rect(n, s, r, h);
            t[Dv]()
        }
    };
    var rj = {};
    rj[GN.SELECTION_COLOR] = zM.SELECTION_COLOR, rj[GN.SELECTION_BORDER] = zM[VE], rj[GN.SELECTION_SHADOW_BLUR] = zM[bv], rj[GN[dv]] = UD[lv], rj[GN[FT]] = 2, rj[GN.SELECTION_SHADOW_OFFSET_Y] = 2, rj[GN.LABEL_COLOR] = zM.LABEL_COLOR, rj[GN[GT]] = QM[Vk], rj[GN.LABEL_ANCHOR_POSITION] = QM.CENTER_TOP, rj[GN[tx]] = new JM(0, 2), rj[GN.LABEL_POINTER_WIDTH] = 8, rj[GN.LABEL_RADIUS] = 8, rj[GN[sx]] = !0, rj[GN.LABEL_BORDER] = 0, rj[GN[bx]] = zv, rj[GN[Zk]] = !0, rj[GN[WT]] = null, rj[GN[yx]] = null, rj[GN[Fx]] = Kk, rj[GN.EDGE_WIDTH] = 1.5, rj[GN[Pw]] = !0, rj[GN[_T]] = !0, rj[GN[Aw]] = V(3438210798), rj[GN[Cw]] = 1, rj[GN[Ix]] = zv, rj[GN[iE]] = !0, rj[GN.ARROW_FROM_SIZE] = zM.ARROW_SIZE, rj[GN.ARROW_TO_SIZE] = zM.ARROW_SIZE, rj[GN[Jx]] = 10, rj[GN.EDGE_CORNER_RADIUS] = 8, rj[GN[rT]] = UD[Of], rj[GN.EDGE_SPLIT_BY_PERCENT] = !0, rj[GN.EDGE_EXTEND] = 20, rj[GN[pf]] = .5, rj[GN[nT]] = 20, rj[GN.EDGE_BUNDLE_GAP] = 20, rj[GN[Mx]] = QM.CENTER_BOTTOM, rj[GN[Rx]] = QM[Jk], rj[GN.EDGE_BUNDLE_LABEL_COLOR] = Qk, rj[GN.SHAPE_STROKE] = 1, rj[GN.SHAPE_STROKE_STYLE] = tS, rj[GN.RENDER_COLOR_BLEND_MODE] = zM[iS], rj[GN.ALPHA] = 1, UD[eS] = nS, UD.NAVIGATION_NONE = sS, UD.NAVIGATION_BUTTON = rS, zM[hS] = UD[eS];
    var hj = function (t, e) {
        this._kk = t, S(e) && (e = i.getElementById(e)), e && e[uu] || (e = i.createElement(Wf)), j(this, hj, [e]), this._kk._14[gd](this._1l, this), this._kk._$a.addListener(this._1x, this), this._kk._1u[gd](this._9s, this), this._kk._1j[gd](this._7s, this), this._kk._$r.addListener(this._3f, this), this._kk._$y.addListener(this._44, this), this._n7t = {}, this._4f(zM[hS], !0)
    };
    hj.prototype = {
        _$n: null, _44: function (t) {
            var i = t[yo], e = t[to];
            if (e)if (this._n7g) {
                var n, s;
                if (A(e))for (var r = 0, h = e[jr]; h > r; r++)s = e[r].id, n = this._mt[ru](s), n && (n[AE] = i.containsById(s), n[aS]()); else {
                    if (s = e.id, n = this._mt.getById(s), !n)return;
                    n.selected = i.containsById(s), n.invalidateRender()
                }
                this._n8i()
            } else {
                this._$n || (this._$n = {});
                var n, s;
                if (A(e))for (var r = 0, h = e.length; h > r; r++)s = e[r].id, this._$n[s] = !0; else s = e.id, this._$n[s] = !0
            }
        }, _kk: null, _n8m: function (t) {
            var i = t.uiClass;
            return i ? new i(t, this._kk) : void 0
        }, _1l: function () {
        }, _1x: function (t) {
            if (!this._n7g)return !1;
            var i = t.source, e = t[Rc];
            qf == e && this._kk[wp](), Ap == e ? (this._mt[oS](i.id), this._kx(i)) : lE == e && i._i5() && t[ef] && this._65(i);
            var n = this._mt.getById(i.id);
            n && n._n7g && n.onPropertyChange(t) && this._n8i()
        }, _48: function (t) {
            var i = this._l8(t);
            i && (i[EE](), this._n8i())
        }, _9s: function (t) {
            if (!this._n7g)return !1;
            switch (this._$l = !0, t[Rc]) {
                case yD[fd]:
                    this._kx(t[to]);
                    break;
                case yD[sd]:
                    this._gi(t.data);
                    break;
                case yD[_S]:
                    this._hm(t[to])
            }
        }, _kg: function () {
            this._n7t = {}, B(this, hj, fS)
        }, _n7t: null, _kx: function (t) {
            var i = this._n8m(t);
            i && (this._mt.add(i), this._n7g && (this._n7t[t.id] = t), this._n8i())
        }, _gi: function (t) {
            if (WD[JE](t)) {
                for (var i, e = [], n = 0, s = t.length; s > n; n++)i = t[n].id, e[Wr](i), delete this._n7t[i];
                t = e
            } else t = t.id, delete this._n7t[t];
            this._mt.remove(t) && this._n8i()
        }, _hm: function () {
            this._kg()
        }, _7s: function (t) {
            return this._n7g ? void(t.source instanceof PN && !this._n7t[t[yo].id] && (t[zu] && (this._48(t[zu]), t.oldValue.__6s = !0), t.value && (this._48(t[ef]), t[ef].__6s = !0), this._65(t.source))) : !1
        }, _3f: function (t) {
            return this._n7g ? void(t.source instanceof PN && !this._n7t[t.source.id] && this._65(t.source)) : !1
        }, _n7w: function (t) {
            return t ? this._11() : void this._9u()
        }, _3h: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[Mp](!0);
                i ? i._f9(this._kk) : t._edgeBundleInvalidateFlag = !1
            }
        }, _11: function () {
            var t, i = (this._kk, this._kk.graphModel), e = this._mt, n = [], s = 1;
            if (i[cS](function (i) {
                    return i instanceof DN ? (this._3h(i), void n.push(i)) : (t = this._n8m(i), void(t && (e[qa](t), t._hg = this._f1(i, !1, !0), i.__lg = s++)))
                }, this), e.length)for (var r = e._ja, s = r[jr] - 1; s >= 0; s--)t = r[s], t._hg && this._4a(t, t.$data);
            for (var h, s = 0, a = n.length; a > s; s++)if (h = n[s], t = this._n8m(h))if (t._hg = this._f1(h, !0, !0), t._hg) {
                this._4a(t, h, !0), e[qa](t);
                var o = h[Rp], _ = h.toAgent, f = o.__lg || 0;
                o != _ && (f = Math[za](f, _.__lg || 0)), h.__lg = f
            } else e[qa](t);
            if (n[jr] && e._ja.sort(function (t, i) {
                    return t[Ho].__lg - i.$data.__lg
                }), this._$n) {
                var c = i.selectionModel;
                for (var u in this._$n)if (c[hu](u)) {
                    var t = e[ru](u);
                    t && (t[AE] = !0)
                }
                this._$n = null
            }
        }, _9u: function () {
            for (var t in this._n7t) {
                var i = this._n7t[t];
                i instanceof PN ? this._65(i) : this._67(i)
            }
            this._n7t = {};
            for (var e, n, s, r = this._mt._ja, h = [], a = r.length - 1; a >= 0; a--)e = r[a], n = e.$data, s = n instanceof DN, s && this._3h(n), e._hg = this._f1(n, s), e._hg ? s ? h.push(e) : this._4a(e, n) && !this._$l && (this._$l = !0) : n.__hgChanged && e._n7g && (e.__oldBounds = {
                x: e.$x + e[cf].x,
                y: e.$y + e[cf].y,
                width: e[cf][ka],
                height: e[cf].height
            });
            if (h.length)for (var a = 0, o = h[jr]; o > a; a++)e = h[a], this._4a(e, e[Ho]) && !this._$l && (this._$l = !0)
        }, _4a: function (t, i, n) {
            if (n || n === e && i instanceof DN)return i.__5c && (i.__5c = !1, t._5c()), this._n8c(t);
            if (i.__6s && i._i5() && (t._6e(), i.__6s = !1), this._n8c(t)) {
                var s = this._57(i);
                return s && (s.__6s = !0), i[Tp]() && i[Gp](function (t) {
                    t.__5c = !0
                }, this), !0
            }
        }, _3i: function (t, i) {
            var e = t[Rp], n = t.toAgent, s = i[uS](e.id);
            if (e == n)return s;
            var r = i[uS](n.id);
            return Math[za](s, r)
        }, _3k: function (t, i) {
            var e = this.graphModel._g3(t);
            return e ? i.getIndexById(e.id) : 0
        }, _65: function (t) {
            var i = this._mt, e = i[ru](t.id);
            if (!e)throw new Error(dS + t[ph] + lS);
            var s = this._3k(t, i), r = [e];
            t[Br]() && n(t, function (t) {
                t instanceof PN && (e = i[ru](t.id), e && r.push(e))
            }, this), this._55(i, s, r)
        }, _67: function (t) {
            var i = this._mt[ru](t.id);
            if (i) {
                var e = this._3i(t, this._mt);
                this._mt[vS](i, e)
            }
        }, _55: function (t, i, e) {
            function n(t) {
                s[qa](t)
            }

            var s = new HM;
            l(e, function (e) {
                i = t.setIndexAfter(e, i), e.$data.forEachEdge(n)
            }, this), 0 != s[jr] && s[__](this._67, this)
        }, _8q: function (t) {
            return t[Mp](!0)
        }, _68: function (t) {
            if (!t[Mk]())return !1;
            var i = t[Mp](!0);
            i && i[bS]() !== !1 && this._n8i()
        }, _57: function (t) {
            var i = bn(t);
            return i && i[lE] ? i : null
        }, _gk: function (t) {
            return bn(t)
        }, _3m: function (t, i, e) {
            t._13 = !1;
            var n = t._hg;
            t._hg = this._5g(t, i), e || t._hg == n || (t.__hgChanged = !0)
        }, _5g: function (t, i) {
            return this._4d(t, i) ? !this._kk._hgFilter || this._kk._hgFilter(t) !== !1 : !1
        }, _f1: function (t, i, e) {
            return t._13 && this._3m(t, i, e), t._hg
        }, _9v: function (t) {
            return !this._kk._4b || this._kk._4b == Ks(t)
        }, _4d: function (t, i) {
            if (t.visible === !1)return !1;
            if (i === e && (i = t instanceof DN), !i)return this._kk._4b != Ks(t) ? !1 : !t._e3;
            var n = t.fromAgent, s = t[T_];
            if (!n || !s)return !1;
            if (n == s && !t[O_]())return !1;
            if (t.isBundleEnabled()) {
                var r = t[Mp](!0);
                if (r && !r._f1(t))return !1
            }
            var h = this._f1(n, !1), a = this._f1(s, !1);
            return h && a ? !0 : !1
        }, _7z: null, _81: null, _4f: function (t, i) {
            return i || t != this._7z ? (this._7z = t, this._81 && (this._81._hd(), delete this._81), t == UD[eS] ? void(this._81 = new er(this, this._mr)) : t == UD.NAVIGATION_BUTTON ? void(this._81 = new ir(this, this._mr)) : void 0) : !1
        }, _3o: function (t, i, e, n, s, r) {
            this._kk._4x(new _D(this._kk, Zf, {tx: n, ty: s, scale: r}, {tx: t, ty: i, scale: e})), this._6c()
        }, _8p: function (t, i) {
            this._kk._4x(new _D(this._kk, ha, i, t))
        }, _6c: function () {
            this._81 && this._81._j7(), this._kk._4x(new _D(this._kk, Fo))
        }, _1h: function (t, i) {
            this._kk._4x(new _D(this._kk, gS, i, t)), this._6c()
        }
    }, N(hj, _s), K(hj.prototype, {
        graphModel: {
            get: function () {
                return this._kk._kkModel
            }
        }
    });
    var aj = function (i, e) {
        this._14 = new vD, this._14.on(function (t) {
            aE == t[Rc] && this[wp]()
        }, this), this._1u = new vD, this._1u.addListener(function (t) {
            !this[aE] || t.kind != yD.KIND_CLEAR && t.kind != yD[sd] || this[yS][Ff](this.currentSubNetwork) || (this[aE] = null)
        }, this), this._$a = new vD, this._1j = new vD, this._$r = new vD, this._$y = new vD, this.graphModel = e || new Jn, this._8v = new hj(this, i), this._37 = new Ir(this), this._1r = new vD, this._onresize = ID(t, pS, function () {
            this.updateViewport()
        }, !1, this), this._8v._mr[ES] = function (t) {
            this[ES](t)
        }.bind(this), this._8v._mr[mS] = function (t) {
            this[mS](t)
        }[Iv](this)
    };
    aj[fh] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            WD.stopEvent(t)
        },
        getDropInfo: function (t, i) {
            var e = null;
            if (i)try {
                e = JSON[pa](i)
            } catch (n) {
            }
            return e
        },
        ondrop: function (t) {
            var i = t.dataTransfer;
            if (i) {
                var e = i.getData(xS), n = this[TS](t, e);
                n || (n = {}, n[Jv] = i.getData(Jv), n.type = i.getData(no), n[cy] = i.getData(cy), n.groupImage = i.getData(gE));
                var s = this[wS](t);
                if (s = this.toLogical(s.x, s.y), !(this[OS]instanceof Function && this[OS][Fr](this, t, s, n) === !1) && (n.image || n.label)) {
                    var r = n[Jv], h = n.type, a = n[cy], o = n[gE];
                    WD.stopEvent(t);
                    var _;
                    if (h && kS != h ? pE == h ? _ = this.createText(a, s.x, s.y) : SS == h ? _ = this[IS](a, s.x, s.y) : AS == h ? (_ = this[LS](a, s.x, s.y), o && (o = Zs(o), o && (_[gE] = o))) : (h = J(h), h instanceof Function && h[fh]instanceof PN && (_ = new h, _[ph] = a, _[Hp] = new UM(s.x, s.y), this._kkModel[qa](_))) : _ = this.createNode(a, s.x, s.y), _) {
                        if (r && (r = Zs(r), r && (_[Jv] = r)), t.shiftKey) {
                            var f = this.getElementByMouseEvent(t);
                            (f[qf] || f instanceof BN) && (_[S_] = f)
                        }
                        if (n.properties)for (var c in n[CS])_[c] = n[CS][c];
                        if (n[RS])for (var c in n.clientProperties)_.set(c, n[RS][c]);
                        if (n.styles && _[MS](n.styles), this.onElementCreated(_, t, n) === !1)return !1;
                        var u = new Sr(this, Sr[DS], t, _);
                        return this[PS](u), _
                    }
                }
            }
        },
        enableDoubleClickToOverview: !0,
        _8v: null,
        _14: null,
        _1u: null,
        _$a: null,
        _$y: null,
        _1j: null,
        _$r: null,
        _2b: function (t) {
            return this._14[yh](t)
        },
        _4x: function (t) {
            this._14[Vu](t)
        },
        isVisible: function (t) {
            return this._8v._f1(t)
        },
        isMovable: function (t) {
            return t instanceof PN && t.movable !== !1
        },
        isSelectable: function (t) {
            return t.selectable !== !1
        },
        isEditable: function (t) {
            return t.editable !== !1
        },
        isRotatable: function (t) {
            return t.rotatable !== !1
        },
        isResizable: function (t) {
            return t.resizable !== !1
        },
        canLinkFrom: function (t) {
            return t.linkable !== !1
        },
        canLinkTo: function (t) {
            return t.linkable !== !1
        },
        createNode: function (t, i, e) {
            var n = new PN(t, i, e);
            return this._kkModel.add(n), n
        },
        createText: function (t, i, e) {
            var n = new ts(t, i, e);
            return this._kkModel.add(n), n
        },
        createShapeNode: function (t, i, e, n) {
            k(i) && (n = e, e = i, i = null);
            var s = new NN(t, i);
            return s.$location = new UM(e, n), this._kkModel.add(s), s
        },
        createGroup: function (t, i, e) {
            var n = new BN(t, i, e);
            return this._kkModel[qa](n), n
        },
        createEdge: function (t, i, e) {
            if (t instanceof PN) {
                var n = e;
                e = i, i = t, t = n
            }
            var s = new DN(i, e);
            return t && (s.$name = t), this._kkModel.add(s), s
        },
        addElement: function (t, i) {
            this._kkModel.add(t), i && t[Br]() && t.forEachChild(function (t) {
                this[NS](t, i)
            }, this)
        },
        removeElement: function (t) {
            this._kkModel[Hr](t)
        },
        clear: function () {
            this._kkModel.clear()
        },
        getStyle: function (t, i) {
            var n = t._jj[i];
            return n !== e ? n : this[jS](i)
        },
        getDefaultStyle: function (t) {
            if (this._jj) {
                var i = this._jj[t];
                if (i !== e)return i
            }
            return rj[t]
        },
        translate: function (t, i, e) {
            return e ? this[BS](this.tx + t, this.ty + i, this[ha], e) : this._8v._de(t, i)
        },
        translateTo: function (t, i, e, n) {
            if (n) {
                var s = this._5s();
                return s._ku(t, i, e, n)
            }
            return this._8v._n97(t, i, e)
        },
        centerTo: function (t, i, e, n) {
            return (!e || 0 >= e) && (e = this[ha]), this.translateTo(this[ka] / 2 - t * e, this.height / 2 - i * e, e, n)
        },
        moveToCenter: function (t, i) {
            this.callLater(function () {
                var e = this.bounds;
                this.centerTo(e.cx, e.cy, t, i)
            }, this)
        },
        zoomToOverview: function (t) {
            return t ? this.callLater(function () {
                var i = this._8v._1v();
                i && this.centerTo(i.cx, i.cy, i.scale, t)
            }, this) : void this._8v._7t()
        },
        zoomAt: function (t, i, n, s) {
            if (s === e && (s = zM[vc]), i === e && (i = this.width / 2), i = i || 0, n === e && (n = this[Sa] / 2), n = n || 0, s) {
                var r = this[ha];
                return t = r * t, t >= this.maxScale || t <= this.minScale ? !1 : (i = t * (this.tx - i) / r + i, n = t * (this.ty - n) / r + n, this[BS](i, n, t, s))
            }
            return this._8v._j4(t, i, n)
        },
        zoomOut: function (t, i, e) {
            return this[$S](1 / this.scaleStep, t, i, e)
        },
        zoomIn: function (t, i, e) {
            return this[$S](this[FS], t, i, e)
        },
        _5s: function () {
            return this._panAnimation || (this._panAnimation = new dj(this)), this._panAnimation
        },
        enableInertia: !0,
        _9r: function (t, i) {
            var e = this._5s();
            return e._gr(t || 0, i || 0)
        },
        getUI: function (t) {
            return Q(t) ? this._8v._3x(t) : this._8v._l8(t)
        },
        getUIByMouseEvent: function (t) {
            return this._8v._3x(t)
        },
        hitTest: function (t) {
            return this._8v._hj(t)
        },
        globalToLocal: function (t) {
            return this._8v._87(t)
        },
        toCanvas: function (t, i) {
            return this._8v._g2(t, i)
        },
        toLogical: function (t, i) {
            return Q(t) ? this._8v._$h(t) : this._8v._ed(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._8v._3x(t);
            return i ? i.$data : void 0
        },
        getElement: function (t) {
            if (Q(t)) {
                var i = this._8v._3x(t);
                return i ? i.$data : null
            }
            return this._kkModel.getById(t)
        },
        invalidate: function () {
            this._8v._n8i()
        },
        invalidateUI: function (t) {
            t[kp](), this.invalidate()
        },
        invalidateElement: function (t) {
            this._8v._48(t)
        },
        getUIBounds: function (t) {
            return this._8v._n7u(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._8v._53(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._8v._17(t, i)
        },
        forEachUI: function (t, i) {
            return this._8v._ex(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._8v._59(t, i)
        },
        forEach: function (t, i) {
            return this._kkModel[__](t, i)
        },
        getElementByName: function (t) {
            var i;
            return this._kkModel[__](function (e) {
                return e.name == t ? (i = e, !1) : void 0
            }), i
        },
        focus: function (i) {
            if (i) {
                var e = t[GS] || t[Zh], n = t[zS] || t.pageYOffset;
                return this[YS].focus(), void t[Ac](e, n)
            }
            this.html[HS]()
        },
        callLater: function (t, i, e) {
            this._8v[qS](t, i, e)
        },
        exportImage: function (t, i) {
            return ar(this, t, i)
        },
        setSelection: function (t) {
            return this._kkModel._selectionModel[du](t)
        },
        select: function (t) {
            return this._kkModel._selectionModel[Ic](t)
        },
        unselect: function (t) {
            return this._kkModel._selectionModel.unselect(t)
        },
        reverseSelect: function (t) {
            return this._kkModel._selectionModel.reverseSelect(t)
        },
        selectAll: function () {
            rr(this)
        },
        unSelectAll: function () {
            this.selectionModel[Ia]()
        },
        unselectAll: function () {
            this[WS]()
        },
        isSelected: function (t) {
            return this._kkModel._selectionModel.contains(t)
        },
        sendToTop: function (t) {
            pn(this._kkModel, t)
        },
        sendToBottom: function (t) {
            En(this._kkModel, t)
        },
        moveElements: function (t, i, e) {
            var n = [], s = new HM;
            return l(t, function (t) {
                t instanceof PN ? n.push(t) : t instanceof DN && s.add(t)
            }), this._e6(n, i, e, s)
        },
        _e6: function (t, i, e, n) {
            if (0 == i && 0 == e || 0 == t[jr] && 0 == n.length)return !1;
            if (0 != t.length) {
                var s = this._51(t);
                n = this._4z(s, n), l(s, function (t) {
                    var n = t.$location;
                    n ? t.setLocation(n.x + i, n.y + e) : t[US](i, e)
                })
            }
            return !0
        },
        _4z: function (t, i) {
            return i
        },
        _51: function (t) {
            var i = new HM;
            return l(t, function (t) {
                !this[XS](t), i.add(t), gn(t, i, this._movableFilter)
            }, this), i
        },
        reverseExpanded: function (t) {
            return this._8v._68(t)
        },
        _37: null,
        _1r: null,
        beforeInteractionEvent: function (t) {
            return this._1r[yh](t)
        },
        onInteractionEvent: function (t) {
            this._1r[Vu](t)
        },
        addCustomInteraction: function (t) {
            this._37[VS](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t[ZS] || t[ph]
        },
        updateViewport: function () {
            this._8v._41()
        },
        destroy: function () {
            this._4x(new _D(this, FO, !0, this._hded)), this._hded = !0, AD(t, pS, this._onresize), G(this, KS), this._37.destroy(), this.graphModel = new Jn;
            var i = this[YS];
            this._8v._hd(), i && (i[JS] = "")
        },
        onPropertyChange: function (t, i, e) {
            this._14.addListener(function (n) {
                n.kind == t && i.call(e, n)
            })
        },
        removeSelection: function () {
            var t = this.selectionModel._ja;
            return t && 0 != t.length ? (t = t.slice(), this._kkModel.remove(t), t) : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this.selectionModel.datas;
            return i && 0 != i[jr] ? void WD[QS](tI + i.length, function () {
                var i = this.removeSelection();
                if (i) {
                    var e = new Sr(this, Sr.ELEMENT_REMOVED, t, i);
                    this[PS](e)
                }
            }, this) : !1
        },
        createShapeByInteraction: function (t, i, e, n) {
            var s = new IP(i);
            i.length > 2 && s[N_]();
            var r = this.createShapeNode(iI, s, e, n);
            this.onElementCreated(r, t);
            var h = new Sr(this, Sr[DS], t, r);
            return this[PS](h), r
        },
        createLineByInteraction: function (t, i, e, n) {
            var s = new IP(i), r = this[IS](eI, s, e, n);
            r.setStyle(WD.Styles.SHAPE_FILL_COLOR, null), r.setStyle(WD[nI][pm], null), r[of](WD.Styles[mw], !0), this[sI](r, t);
            var h = new Sr(this, Sr[DS], t, r);
            return this[PS](h), r
        },
        createEdgeByInteraction: function (t, i, e, n) {
            var s = this[rI](hI, t, i);
            if (n)s._9q = n; else {
                var r = this.edgeUIClass, h = this.edgeType;
                this[aI] && (r = this[aI][Ap] || r, h = this.interactionProperties.edgeType || h), r && (s[Ap] = r), h && (s[Df] = h)
            }
            this[sI](s, e);
            var a = new Sr(this, Sr[DS], e, s);
            return this.onInteractionEvent(a), s
        },
        onElementCreated: function (t) {
            !t.parent && this[aE] && (t.parent = this.currentSubNetwork)
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, e, n) {
            var s = this;
            e.startEdit(n.x, n.y, i.data, this.getStyle(t, GN[oI]), function (e) {
                return s.onLabelEdit(t, i, e, i.parent)
            })
        },
        onLabelEdit: function (t, i, e, n) {
            return e || this.allowEmptyLabel ? void(cy == i[ph] ? t[ph] = e : n._fg(i, e) === !1 && (i.data = e, this[_I](t))) : (WD.alert(fI), !1)
        },
        setInteractionMode: function (t, i) {
            this[cI] = t, this.interactionProperties = i
        },
        upSubNetwork: function () {
            return this._4b ? this[aE] = Ks(this._4b) : !1
        },
        _13: !1,
        invalidateVisibility: function () {
            this._13 = !0, this.invalidate()
        },
        getBundleLabel: function (t) {
            var i = t.getEdgeBundle(!0);
            return i && i[uI] == t ? dI + i.bindableEdges.length : null
        }
    }, K(aj.prototype, {
        center: {
            get: function () {
                return this[lI](this.html[cc] / 2, this.html[vI] / 2)
            }
        }, visibleFilter: {
            get: function () {
                return this._hgFilter
            }, set: function (t) {
                this._hgFilter = t, this[kp]()
            }
        }, topCanvas: {
            get: function () {
                return this._8v._topCanvas
            }
        }, propertyChangeDispatcher: {
            get: function () {
                return this._14
            }
        }, listChangeDispatcher: {
            get: function () {
                return this._1u
            }
        }, dataPropertyChangeDispatcher: {
            get: function () {
                return this._$a
            }
        }, selectionChangeDispatcher: {
            get: function () {
                return this._$y
            }
        }, parentChangeDispatcher: {
            get: function () {
                return this._1j
            }
        }, childIndexChangeDispatcher: {
            get: function () {
                return this._$r
            }
        }, bounds: {
            get: function () {
                return this._8v._4k()
            }
        }, interactionDispatcher: {
            get: function () {
                return this._1r
            }
        }, cursor: {
            set: function (t) {
                this.html[Yh].cursor = t || this._37[bI]
            }, get: function () {
                return this.html.style.cursor
            }
        }, interactionMode: {
            get: function () {
                return this._37._n8urrentMode
            }, set: function (t) {
                var i = this.interactionMode;
                i != t && (this._37[Dc] = t, this._4x(new _D(this, cI, t, i)))
            }
        }, scaleStep: {
            get: function () {
                return this._8v._ew
            }, set: function (t) {
                this._8v._ew = t
            }
        }, maxScale: {
            get: function () {
                return this._8v._gn
            }, set: function (t) {
                this._8v._gn = t
            }
        }, minScale: {
            get: function () {
                return this._8v._gl
            }, set: function (t) {
                this._8v._gl = t
            }
        }, scale: {
            get: function () {
                return this._8v._kp
            }, set: function (t) {
                return this._8v._kp = t
            }
        }, tx: {
            get: function () {
                return this._8v._mz
            }
        }, ty: {
            get: function () {
                return this._8v._n1
            }
        }, styles: {
            get: function () {
                return this._jj
            }, set: function (t) {
                this._jj = t
            }
        }, selectionModel: {
            get: function () {
                return this._kkModel._selectionModel
            }
        }, graphModel: {
            get: function () {
                return this._kkModel
            }, set: function (t) {
                if (this._kkModel == t)return !1;
                var i = this._kkModel, e = new _D(this, yS, i, t);
                return this._2b(e) === !1 ? !1 : (null != i && (i[gI][Qu](this._14, this), i[ld][Qu](this._1u, this), i[bd][Qu](this._$a, this), i.parentChangeDispatcher.removeListener(this._1j, this), i.childIndexChangeDispatcher.removeListener(this._$r, this), i[vd].removeListener(this._$y, this)), this._kkModel = t, this._kkModel && (this._kkModel.propertyChangeDispatcher[gd](this._14, this), this._kkModel.listChangeDispatcher.addListener(this._1u, this), this._kkModel[bd][gd](this._$a, this), this._kkModel.parentChangeDispatcher.addListener(this._1j, this), this._kkModel[pd][gd](this._$r, this), this._kkModel.selectionChangeDispatcher.addListener(this._$y, this)), this._8v && this._8v._l3(), void this._4x(e))
            }
        }, count: {
            get: function () {
                return this._kkModel[jr]
            }
        }, width: {
            get: function () {
                return this[YS][cc]
            }
        }, height: {
            get: function () {
                return this[YS].clientHeight
            }
        }, viewportBounds: {
            get: function () {
                return this._8v._7m
            }
        }, html: {
            get: function () {
                return this._8v._mr
            }
        }, navigationType: {
            get: function () {
                return this._8v._7z
            }, set: function (t) {
                this._8v._4f(t)
            }
        }, _4b: {
            get: function () {
                return this._kkModel._4b
            }
        }, currentSubNetwork: {
            get: function () {
                return this._kkModel.currentSubNetwork
            }, set: function (t) {
                this._kkModel[aE] = t
            }
        }
    }), Js[fh] = {
        initialize: function () {
            B(this, Js, GE), this[Sw]()
        }, _n9e: function () {
            this._m1 = new IP, this[Lw] = new QN(this._m1), this[Lw][Yo] = !1, this.addChild(this[Lw], 0), this[kv] = this[Lw]
        }, checkBody: function () {
            return this._6g() ? (this._2t = !0, this.shape ? (this[Lw][yI] = !0, this.body = this[Lw]) : (this._n9e(), UN.initBindingProperties(this)), void(this[Jv] && (this.image[yI] = !1))) : (this[Jv] ? (this[Jv][yI] = !0, this[kv] = this[Jv]) : this._n7n(), void(this[Lw] && (this[Lw].visible = !1)))
        }, _6g: function () {
            return this.$data._i5() && this[Ho].expanded
        }, _m1: null, _2t: !0, _6e: function () {
            this._1s = !0, this._2t = !0
        }, doValidate: function () {
            if (this._2t && this._6g()) {
                if (this._2t = !1, this.shape.invalidateData(), this.$data.groupImage) {
                    this[Lw][to] = this[Ho].groupImage;
                    var t = this._2u();
                    return this[Lw].offsetX = t.x + t[ka] / 2, this[Lw].offsetY = t.y + t[Sa] / 2, this[Lw].size = {
                        width: t[ka],
                        height: t[Sa]
                    }, as[fh].doValidate[Fr](this)
                }
                this[Lw][RE] = 0, this.shape[ME] = 0;
                var i = this._90(this.$data.groupType);
                this._m1[Ia](), i instanceof KM ? Ln(this._m1, i.x, i.y, i.width, i[Sa], i.rx, i.ry) : i instanceof ie ? Cn(this._m1, i) : i instanceof ee && Rn(this._m1, i), this._m1._6s = !0, this[Lw].invalidateData()
            }
            return as[fh][Ak][Fr](this)
        }, _6w: function (t, i, e) {
            switch (t) {
                case UD.GROUP_TYPE_CIRCLE:
                    return new ie(0, 0, Math.max(i, e) / 2);
                case UD[pI]:
                    return new ee(0, 0, i, e);
                default:
                    return new KM(-i / 2, -e / 2, i, e)
            }
        }, _2u: function () {
            return this._90(null)
        }, _90: function (t) {
            var i = this.data, e = i[lo], n = i.minSize, s = 60, r = 60;
            if (n && (s = n.width, r = n[Sa]), !i[Br]())return this._6w(t, s, r);
            var h, a = this[Ho]._f5._ja;
            (t == UD.GROUP_TYPE_CIRCLE || t == UD.GROUP_TYPE_ELLIPSE) && (h = []);
            for (var o, _, f, c, u = new KM, d = 0, l = a[jr]; l > d; d++) {
                var v = a[d];
                if (this[Rf].isVisible(v)) {
                    var b = this.graph.getUI(v);
                    b && (o = b.$x + b._fc.x, _ = b.$y + b._fc.y, f = b._fc.width, c = b._fc.height, u.addRect(o, _, f, c), h && (h[Wr]({
                        x: o,
                        y: _
                    }), h.push({x: o + f, y: _}), h.push({x: o + f, y: _ + c}), h.push({x: o, y: _ + c})))
                }
            }
            e && u.grow(e);
            var g = this[Ho].$location;
            g ? g.invalidateFlag && (g[EI] = !1, g.x = u.cx, g.y = u.cy) : g = this.$data[Yp] = {x: u.cx, y: u.cy};
            var y, p = g.x, E = g.y;
            if (t == UD[mI]) {
                y = ne(h), y.cx -= p, y.cy -= E;
                var m = Math.max(s, r) / 2;
                return y.r < m && (y.cx += m - y.r, y.cy += m - y.r, y.r = m), y
            }
            return t == UD.GROUP_TYPE_ELLIPSE ? (y = se(h, u), y.cx -= p, y.cy -= E, y[ka] < s && (y.cx += (s - y.width) / 2, y[ka] = s), y[Sa] < r && (y.cy += (r - y.height) / 2, y[Sa] = r), y) : (y = u, u[ka] < s && (u.width = s), u.height < r && (u[Sa] = r), u[Ev](-p, -E), y)
        }, _16: function (t, i, e) {
            if (!this._6g())return B(this, Js, xI, arguments);
            var n = this._n81.onBindingPropertyChange(this, t, i, e);
            return n = zN[wO](this, t, i, e) || n, n = WN[wO](this, t, i, e) || n, UN.onBindingPropertyChange(this, t, i, e) || n
        }
    }, N(Js, as);
    var oj = {
        draw: function () {
        }
    };
    zM[ac] = TI, zM.NAVIGATION_IMAGE_TOP = wI;
    var _j = {position: sc, "text-align": jf}, fj = {padding: OI, transition: kI}, cj = {position: SI, display: II};
    li(AI, "opacity:0.7;vertical-align:middle;"), li(".Q-Graph-Nav img:hover,img.hover", LI), BM || (li(CI, RI + kD(MI) + DI), li(PI, NI + kD(MI) + jI)), ir[fh] = {
        _d5: function (t, i) {
            return t._hg == i ? !1 : (t._hg = i, void(t.style.display = i ? "block" : nc))
        }, _3z: function (t, i) {
            var e = i / 2 - this._left._img[vI] / 2 + Ca;
            this._left._img[Yh].top = e, this._right._img.style[Jh] = e, this._navPane.style.width = t + Ca, this._navPane[Yh][Sa] = i + Ca
        }, _n78: function (t, i, e, n) {
            this._d5(this._top, t), this._d5(this._left, i), this._d5(this._n9ottom, e), this._d5(this._right, n)
        }, _hd: function () {
            var t = this._navPane.parentNode;
            t && t.removeChild(this._navPane)
        }, _j7: function () {
            var t = this._n8e._kk;
            if (t) {
                var i = t.bounds;
                if (i[qo]())return void this._n78(!1, !1, !1, !1);
                var e = t[BI], n = e.y > i.y + 1, s = e.x > i.x + 1, r = e[jh] < i.bottom - 1, h = e.right < i.right - 1;
                this._n78(n, s, r, h)
            }
        }
    };
    var uj = 8;
    li($I, FI), li(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + kD(MI) + ": background-color 0.2s linear;"), li(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), li(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), li(".Q-Graph-ScrollBar--V.Both", GI), li(".Q-Graph-ScrollBar--H.Both", zI), BM || (li(YI, RI + kD(MI) + HI), li(".Q-Graph:hover .Q-Graph-ScrollPane", NI + kD(MI) + ":opacity 0.3s linear;")), er[fh] = {
        _hd: function () {
            this._verticalDragSupport._hd(), this._horizontalDragSupport._hd(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._lq[Av] && this._lq[Av].removeChild(this._lq)
        }, _lq: null, _n9l: null, _8t: null, init: function (t) {
            var e = i[Na](Wf);
            e[Qf] = qI, ui(e, {width: rc, height: rc, position: SI});
            var n = i[Na](Wf);
            n[Qf] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i.createElement(Wf);
            s.className = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", e[Jf](n), e[Jf](s), t.appendChild(e), this._lq = e, this._8t = s, this._n9l = n, s.isH = !0;
            var r = this, h = {
                ondrag: function (t, i) {
                    var e = r._n8e._kk;
                    if (e) {
                        var n = i.isH, s = n ? t.dx : t.dy;
                        if (s && i[ha]) {
                            var h = e.scale / i[ha];
                            n ? e[bo](-h * s, 0) : e.translate(0, -h * s), WD.stopEvent(t)
                        }
                    }
                }, enddrag: function (t, i) {
                    var e = r._n8e._kk;
                    if (e && e[WI]) {
                        var n = i.isH, s = n ? t.vx : t.vy;
                        if (Math.abs(s) > .1) {
                            var h = e[ha] / i[ha];
                            s *= h, n ? e._9r(-s, 0) : e._9r(0, -s)
                        }
                    }
                }
            };
            this._verticalDragSupport = new wi(n, h), this._horizontalDragSupport = new wi(s, h)
        }, _j7: function () {
            var t = this._n8e._kk;
            if (t) {
                var i = t.bounds;
                if (i[qo]())return this._4p(!1), void this._4u(!1);
                var e = t.viewportBounds, n = t.width, s = t[Sa], r = t.scale, h = 1 / r, a = e.x > i.x + h || e.right < i[Ph] - h, o = e.y > i.y + h || e[jh] < i.bottom - h, _ = a && o;
                _ ? (w(this._n9l, UI), w(this._8t, UI)) : (O(this._n9l, UI), O(this._8t, UI)), this._4p(a, e, i, _ ? n - uj : n), this._4u(o, e, i, _ ? s - uj : s)
            }
        }, _4p: function (t, i, e, n) {
            if (!t)return this._8t.style.display = nc, void(this._8t[ha] = 0);
            var s = Math.min(i.x, e.x), r = Math[za](i.right, e[Ph]), h = r - s, a = n / h;
            this._8t.scale = a, this._8t[Yh][vo] = parseInt((i.x - s) * a) + Ca, this._8t[Yh][Ph] = parseInt((r - i.right) * a) + Ca, this._8t[Yh].display = ""
        }, _4u: function (t, i, e, n) {
            if (!t)return this._n9l.style.display = nc, void(this._n9l[ha] = 0);
            var s = Math.min(i.y, e.y), r = Math[za](i[jh], e[jh]), h = r - s, a = n / h;
            this._n9l[ha] = a, this._n9l[Yh].top = parseInt((i.y - s) * a) + Ca, this._n9l[Yh][jh] = parseInt((r - i[jh]) * a) + Ca, this._n9l[Yh][_p] = ""
        }
    }, nr[fh] = {
        shape: null, initialize: function () {
            B(this, nr, GE), this._n7n(), ZN[kO](this)
        }, _n7n: function () {
            this.image = new ij(this.$data.path), this.addChild(this.image, 0), this.body = this[Jv]
        }, invalidateShape: function () {
            this[Jv][EE](), this.invalidateRender()
        }, _16: function (t, i, e) {
            var n = this._n81.onBindingPropertyChange(this, t, i, e);
            return n = zN[wO](this, t, i, e) || n, ZN.onBindingPropertyChange(this, t, i, e) || n
        }, doValidate: function () {
            this.body && (this.body[Ro] = null != this._3b, this[kv][Jp] = this._3b);
            var t = this[Ho][Yp], i = 0, e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return n && (this[Bk] = !0), this.$x = i, this.$y = e, JN[fh][Ak][Fr](this) || n
        }
    }, N(nr, JN), K(nr.prototype, {
        path: {
            get: function () {
                return this[to][nE]
            }
        }, length: {
            get: function () {
                return this[to].length
            }
        }
    }), nr[fh][Aa] = function (t, i, e) {
        var n = this._hw(t, i), s = this.data, r = Te(s[nE], n.x, n.y, e);
        r && (s[jk] = r)
    }, sr.prototype = {
        _md: function () {
            this._jo.style.visibility = yI
        }, _jc: function () {
            this._jo[Yh].visibility = ec
        }, clear: function () {
            this._n76.clear(), this._n8i()
        }, contains: function (t) {
            return t instanceof Object && t.id && (t = t.id), this._n76[hu](t)
        }, addDrawable: function (t, i) {
            if (i) {
                var e = {id: ++wM, drawable: t, scope: i};
                return this._n76.add(e), e
            }
            return t.id || (t.id = ++wM), this._n76.add(t), t
        }, removeDrawable: function (t) {
            return t.id ? void this._n76.remove(t) : this._n76.removeById(t)
        }, _n76: null, invalidate: function () {
            this._n8i()
        }, _n8i: function () {
            this._n8e._6s || this._je()
        }, _je: function () {
            di(this._jo, Zf, "");
            var t = this._n8e._kp, i = this.g;
            i.setTransform(1, 0, 0, 1, 0, 0), i[Xk](0, 0, this._jo.width, this._jo.height), i.save(), this._n8e._j1._n9o(i);
            for (var e = this._n76._ja, n = 0, s = e.length; s > n; n++)i.save(), i[ig](), this._g8(i, e[n], t), i.restore();
            i[$b]()
        }, _g8: function (t, i, e) {
            return i instanceof Function ? void i(t, e) : void(i.drawable instanceof Function && i.scope && i[XI].call(i.scope, t, e))
        }
    }, zM.ZOOM_ANIMATE = !0;
    var dj = function (t) {
        this._kk = t
    };
    zM[VI] = 600, zM[ZI] = zD[KI], dj.prototype = {
        _kk: null, _n7: .001, _en: null, _n8b: function (t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        }, _gr: function (t, i) {
            t *= .6, i *= .6, t = this._n8b(t), i = this._n8b(i), this._lp();
            var e = Math.sqrt(t * t + i * i);
            if (.01 > e)return !1;
            var n = Math.min(zM[VI], e / this._n7);
            this._speedX = t, this._speedY = i, this._n7X = t / n, this._n7Y = i / n, this._en = new HD(this._6i, this, n, zD.easeOutStrong), this._en._kc()
        }, _6i: function (t, i) {
            if (0 != t) {
                var e = this._speedX * i - .5 * this._n7X * i * i, n = this._speedY * i - .5 * this._n7Y * i * i;
                this._speedX -= this._n7X * i, this._speedY -= this._n7Y * i, this._kk[bo](e, n)
            }
        }, _lp: function () {
            this._en && this._en._lp()
        }, _hi: function (t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t, e = this._fromTY + (this._toTY - this._fromTY) * t, n = this._fromScale + (this._toScale - this._fromScale) * t;
            this._kk.translateTo(i, e, n)
        }, _ku: function (t, i, e, n) {
            var s = this._kk, r = s[ha];
            if (0 >= e && (e = r), this._lp(), t != s.tx || i != s.ty || e != r) {
                var h, a, o;
                n instanceof Object && (h = n[JI], a = n[QI], o = n.animationType);
                var _ = s.tx, f = s.ty;
                if (!h) {
                    var c = XM(t, i, _, f);
                    if (h = c / 2, e != r) {
                        var u = e > r ? e / r : r / e;
                        h = Math[za](h, 50 * u)
                    }
                }
                a = a || zM.ANIMATION_MAXTIME, o = o || zM.ANIMATION_TYPE, h = Math[Ha](a, h), this._fromTX = _, this._fromTY = f, this._fromScale = r, this._toTX = t, this._toTY = i, this._toScale = e, this._en = new HD(this._hi, this, h, o), this._en._kc()
            }
        }
    }, zM.INTERACTION_HANDLER_SIZE_TOUCH = 8, zM.INTERACTION_HANDLER_SIZE_DESKTOP = 4, zM.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30, zM[tA] = 20;
    var lj = Math.PI / 4;
    or.prototype = {
        onElementRemoved: function (t, i) {
            this.element && (t == this[iA] || A(t) && E(t, this.element)) && this[FO](i)
        }, onClear: function (t) {
            this.element && this.destroy(t)
        }, destroy: function () {
            delete this[iA], this.removeDrawable()
        }, invalidate: function () {
            this.topCanvas[kp]()
        }, removeDrawable: function () {
            this._f8Id && (this[yc].removeDrawable(this._f8Id), delete this._f8Id, this[kp]())
        }, addDrawable: function () {
            this._f8Id || (this._f8Id = this[yc].addDrawable(this[eA], this).id, this.invalidate())
        }, doDraw: function () {
        }, escapable: !0, onkeydown: function (t, i) {
            this.escapable && 27 == t[ky] && (R(t), this.destroy(i))
        }
    }, WD[nA] = Tr, _r.prototype = {
        defaultCursor: Ec, getInteractionInstances: function (t) {
            if (!this[pc])return null;
            for (var i = [], e = 0, n = this[pc].length; n > e; e++) {
                var s = this[pc][e];
                s instanceof Function ? i.push(new s(t)) : s instanceof Object && i.push(s)
            }
            return i
        }
    }, fr.prototype = {
        _e8: null, _jh: null, destroy: function () {
            B(this, fr, FO, arguments), delete this._jh, delete this._9i, delete this._e8
        }, doDraw: function (t) {
            var i = this[Xa];
            i && (i.forEach(function (i) {
                this[sA](t, i)
            }, this), this[rA] && t[N_](), this.styleDraw(t))
        }, styleDraw: function (t) {
            var i = cr(this[Rf][aI], this.getDefaultDrawStyles(this.graph));
            i[io] && (t[io] = i.lineWidth, i.lineCap && (t[wb] = i.lineCap), i.lineJoin && (t[Ob] = i.lineJoin), i.lineDash && (t[Ko] = i[Ko], t.lineDashOffset = i.lineDashOffset || 0), t[$v] = i[$v], t[Tb]()), i.fillStyle && (t[Cv] = i[Cv], t.fill())
        }, drawPoint: function (t, i, e) {
            if (e)return void t.moveTo(i.x, i.y);
            if (WD.isArray(i)) {
                var n = i[0], s = i[1];
                t.quadraticCurveTo(n.x, n.y, s.x, s.y)
            } else t.lineTo(i.x, i.y)
        }, _fi: function (t) {
            this._jh || (this._jh = [], this[hA]()), this._jh.push(t), this.invalidate()
        }
    }, K(fr.prototype, {
        currentPoint: {
            get: function () {
                return this._9i
            }, set: function (t) {
                this._9i = t, this[kp]()
            }
        }, points: {
            get: function () {
                return this._9i && this._jh && this._jh[jr] ? this._jh.concat(this._9i) : void 0
            }
        }
    }), N(fr, or), ur.prototype = {
        destroy: function () {
            B(this, ur, FO, arguments), delete this._kcTime, delete this.start
        }, doDraw: function (t, i) {
            return this._jh ? this._jh[jr] <= 1 ? vr.prototype[eA][Fr](this, t, i) : void B(this, ur, eA, arguments) : void 0
        }, ondblclick: function (t, i) {
            this[FO](i)
        }, finish: function (t, i, e) {
            if (this._kcTime && Date[ol]() - this._kcTime < 200)return void this[FO](i);
            var n;
            this._jh && this._jh[jr] >= 2 && (this._jh[Vg](), n = new HM, l(this._jh, function (t) {
                if (WD.isArray(t)) {
                    var i = t[0], e = t[1];
                    n.add(new kP(UD.SEGMENT_QUAD_TO, [i.x, i.y, e.x, e.y]))
                } else n[qa](new kP(UD.SEGMENT_LINE_TO, [t.x, t.y]))
            }, this)), i.createEdgeByInteraction(this.start, e, t, n), this.destroy(i)
        }, onstart: function (t, i) {
            if (2 != t.button) {
                var e = t[aA](), n = e instanceof PN;
                return this[oA] ? n ? void this.finish(t, i, e) : void this._fi(i.toLogical(t)) : void(n && (this[oA] = e, this._kcTime = Date[ol](), this._fi(i[lI](t))))
            }
        }, onmousemove: function (t, i) {
            this.start && (this[_A] = i[lI](t))
        }, startdrag: function (t) {
            this.start && (t.responded = !0)
        }, ondrag: function (t, i) {
            this.start && (this.currentPoint = i.toLogical(t))
        }, enddrag: function (t, i) {
            if (this[oA]) {
                var e = t.getData();
                e instanceof PN && this[fA](t, i, e)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[jS](GN[cA]),
                strokeStyle: this.graph[jS](GN[Fx]),
                lineDash: this[Rf][jS](GN[Wx]),
                lineDashOffset: this.graph[jS](GN.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph[jS](GN[Ew]),
                lineJoin: this[Rf].getDefaultStyle(GN.LINE_JOIN)
            }
        }
    }, N(ur, fr), dr[fh] = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: this.graph[jS](GN[um]),
                strokeStyle: this.graph.getDefaultStyle(GN[lw]),
                fillStyle: this.graph[jS](GN.SHAPE_FILL_COLOR)
            }
        }, finish: function (t, i) {
            if (this._jh && this._jh[jr]) {
                var e = this._jh, n = 0, s = 0, r = 0;
                e.forEach(function (t) {
                    return WD.isArray(t) ? void t.forEach(function () {
                        n += t.x, s += t.y, r++
                    }) : (n += t.x, s += t.y, void r++)
                }), n /= r, s /= r;
                var h = [];
                e[__](function (t, i) {
                    if (0 == i)return void h[Wr](new kP(UD[uA], [t.x - n, t.y - s]));
                    if (WD.isArray(t)) {
                        var e = t[0], r = t[1];
                        h.push(new kP(UD[vb], [e.x - n, e.y - s, r.x - n, r.y - s]))
                    } else h[Wr](new kP(UD[dA], [t.x - n, t.y - s]))
                }), this[Na](t, h, n, s), this[FO](i)
            }
        }, startdrag: function (t) {
            t.responded = !0
        }, createElement: function (t, i, e, n) {
            return this[Rf][lA](t, i, e, n)
        }, onstart: function (t, i) {
            var e = i.toLogical(t);
            this._e8 = e, this._fi(e)
        }, onmousemove: function (t, i) {
            this._e8 && (this.currentPoint = i[lI](t))
        }, ondblclick: function (t, i) {
            if (this._e8) {
                if (this._jh[jr] < 3)return void this.destroy(i);
                delete this._jh[this._jh.length - 1], this.finish(t, i)
            }
        }, isClosePath: !0
    }, N(dr, fr), WD.CreateShapeInteraction = dr, lr.prototype = {
        isClosePath: !1,
        createElement: function (t, i, e, n) {
            return this.graph.createLineByInteraction(t, i, e, n)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: rj[GN.SHAPE_STROKE],
                strokeStyle: rj[GN.SHAPE_STROKE_STYLE],
                lineDash: this.graph.getDefaultStyle(GN[pw]),
                lineDashOffset: this[Rf].getDefaultStyle(GN.SHAPE_LINE_DASH_OFFSET),
                lineCap: this[Rf].getDefaultStyle(GN[Ew]),
                lineJoin: this.graph.getDefaultStyle(GN.LINE_JOIN)
            }
        }
    }, N(lr, dr), WD[vA] = lr, vr[fh] = {
        destroy: function (t) {
            B(this, vr, FO, arguments), t.cursor = "", this[oA] = null
        }, doDraw: function (t) {
            if (this[oA] && this.currentPoint) {
                var i, e;
                this.graph[aI] && (i = this[Rf].interactionProperties[Ap], e = this.graph.interactionProperties[Df]), i = i || this[Rf][bA] || WD.EdgeUI, e = e || this[Rf][Df];
                var n = i[Nk] || WD[gA].drawReferenceLine, s = this.graph.getUI(this[oA]);
                s && s[yA] && (s = s.bodyBounds[jf], n(t, s, this[_A], e), this.styleDraw(t))
            }
        }, canLinkFrom: function (t, i) {
            return t instanceof PN && i.canLinkFrom(t)
        }, canLinkTo: function (t, i) {
            return t instanceof PN && i[pA](t, this.start)
        }, startdrag: function (t, i) {
            var e = t.getData();
            this[EA](e, i) && (t[mA] = !0, this[oA] = e, i.cursor = nl, this.addDrawable())
        }, ondrag: function (t, i) {
            this[oA] && (WD[xA](t), this[_A] = i.toLogical(t), this[kp]())
        }, enddrag: function (t, i) {
            if (this.start) {
                this.invalidate();
                var e = t.getData();
                this.canLinkTo(e, i) && i.createEdgeByInteraction(this[oA], e, t), this[FO](i)
            }
        }, getDefaultDrawStyles: function () {
            return {
                lineWidth: this[Rf][jS](GN.EDGE_WIDTH),
                strokeStyle: this[Rf].getDefaultStyle(GN[Fx]),
                lineDash: this.graph.getDefaultStyle(GN[Wx]),
                lineDashOffset: this.graph.getDefaultStyle(GN[Xx]),
                lineCap: this.graph.getDefaultStyle(GN.LINE_CAP),
                lineJoin: this.graph[jS](GN[wm])
            }
        }
    }, N(vr, fr), WD[TA] = vr, mr.prototype = {
        html: null, createHTML: function () {
            var t = i[Na](wA);
            t.className = OA, t.style[zT] = sc, t.style[kA] = jf, t.style[El] = SA, t[Yh][lo] = IA, t[Yh][AA] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t[Yh][_p] = nc, t.style[LA] = ec;
            var e = this;
            return t.oninput = function (t) {
                e[CA](t)
            }, t[RA] = function (t) {
                return 27 == t[ky] ? void e.cancelEdit() : void 0
            }, t[MA] = function (i) {
                if (13 == i.keyCode || 10 == i[ky]) {
                    if (i.preventDefault(), i.altKey || i[va] || i[Oy])return pr(t, Ga), void e.onValueChange(i);
                    e.stopEdit()
                }
            }, i.body[Jf](t), t
        }, setText: function (t, i) {
            this.html.value = t || "", i && (this[YS].style[xc] = i), Er(this[YS]), this[DA](this[YS])
        }, onSizeChange: function (t) {
            var i = (t.offsetWidth, t[PA], yr(t));
            return t.style[ka] = i.width + 30 + Ca, t.style[Sa] = i.height + 10 + Ca, i
        }, onValueChange: function (t) {
            var i = t.target;
            this[DA](i), i[Yh][vo] = i.x - i[NA] / 2 + Ca
        }, startEdit: function (i, e, n, s, r) {
            if (this.html || (this.html = this.createHTML()), !this.stopEditWhenClickOnWindow) {
                var h = this;
                this.stopEditWhenClickOnWindow = function (t) {
                    t.target != h.html && h[jA]()
                }
            }
            t[Md](BA, this[$A], !0), this[FA] = r, this.html.x = i, this[YS].y = e, this[YS][Yh].display = II, gr(this.html, i, e), this.setText(n, s || 10), gr(this[YS], i, e)
        }, isEditing: function () {
            return nc != this.html.style[_p]
        }, cancelEdit: function () {
            this.stopEdit(!0)
        }, stopEdit: function (i) {
            if (this[GA]()) {
                t.removeEventListener(BA, this.stopEditWhenClickOnWindow);
                var e = this[YS][ef];
                if (!i && this.callback && this[FA](e) === !1)return !1;
                this[YS][Yh].display = nc, this[YS].value = null, this.callback = null
            }
        }, destroy: function () {
            this.html && i[kv].removeChild(this[YS])
        }
    }, WD[zA] = mr;
    var vj = function (t) {
        this[Rf] = t
    };
    vj[fh] = {
        destroy: function (t) {
            t.labelEditor && (t.labelEditor.destroy(), delete t[YA])
        }, ondblclick: function (t, i) {
            var e = t[aA]();
            if (!e)return i[aE] ? void i.upSubNetwork() : void(i[HA] && i.zoomToOverview(zM[vc]));
            if (i[qA] && i[WA](e)) {
                var n = i[UA](t);
                if (n instanceof tj && n.editable !== !1) {
                    var s = i.labelEditor;
                    s || (i.labelEditor = s = new mr);
                    var r = n[fo]();
                    return r = i.toCanvas(r.x + r.width / 2, r.y + r[Sa] / 2), r = br(r.x, r.y, i.html), void i[XA](e, n, s, r)
                }
            }
            var h = e instanceof BN, a = e instanceof DN && e[VA]();
            return e._4i && (Oi(t) || !h && !a) ? void(i[aE] = e) : h ? void(e.expanded = !e[lE]) : a ? void this[Rf].reverseExpanded(e) : void 0
        }
    };
    var bj = function (t) {
        this.graph = t
    };
    bj[fh] = {
        onkeydown: function (t, i) {
            if (i[qA]) {
                var e = t.keyCode;
                if (8 == e || 46 == e || 127 == e)return i.removeSelectionByInteraction(t), void L(t);
                if (Oi(t)) {
                    if (67 == e); else if (86 == e); else if (90 == e); else if (89 != e)return;
                    L(t)
                }
            }
        }
    };
    var gj = function (t) {
        this.graph = t
    };
    gj[fh] = {
        onkeydown: function (i, e) {
            if (i[ZA] && 83 == i[ky]) {
                var n = e[KA](e[ha], e[BI]), s = t[xa](), r = s[JA];
                r.title = QA + n[ka] + tL + n[Sa];
                var h = r.createElement(Xf);
                h[Vf] = n.data, r.body[Jf](h), L(i)
            }
        }
    };
    var yj = function (t) {
        this[Rf] = t
    };
    yj[fh] = {
        destroy: function () {
            delete this.draggingElements, delete this.currentDraggingElement
        }, _2r: function (t) {
            var i = new HM;
            return t[dc][__](function (e) {
                t.isMovable(e) && t.isVisible(e) && i[qa](e)
            }, this), i
        }, onstart: function (t, i) {
            this[iL] && this[FO](i)
        }, startdrag: function (t, i) {
            if (!t.responded) {
                var e = t.getData();
                if (!e || !i[eL](e) || !i[XS](e))return void this[FO](i);
                t[mA] = !0, this[iL] = e, this[nL] = this._2r(i);
                var n = new Sr(i, Sr[sL], t, this[iL], this.draggingElements[Mc]);
                return i[rL](n) === !1 ? void this.destroy(i) : void i[PS](n)
            }
        }, ondrag: function (t, i) {
            if (this[iL]) {
                R(t);
                var e = t.dx, n = t.dy, s = i.scale;
                e /= s, n /= s;
                var r = new Sr(i, Sr.ELEMENT_MOVING, t, this[iL], this[nL].datas);
                i.moveElements(this.draggingElements.datas, e, n), i[PS](r)
            }
        }, enddrag: function (t, i) {
            if (this.currentDraggingElement) {
                if (this[nL] && this[nL].length) {
                    if (t.shiftKey) {
                        var e, n = i.toLogical(t), s = n.x, r = n.y;
                        i.forEachReverseVisibleUI(function (t) {
                            var i = t.data;
                            if (!this[nL].contains(i) && t.uiBounds[Va](s - t.x, r - t.y) && t._hj(s, r, 1)) {
                                if (i instanceof WD[hI]) {
                                    if (!i[qf])return;
                                    for (var n = this[nL].length; n-- > 0;) {
                                        var h = this.draggingElements[hL](n);
                                        if (h instanceof WD.Node && h[aL](i))return
                                    }
                                    return e = i, !1
                                }
                                return (i[qf] || i._i5() && i[lE]) && (e = i), !1
                            }
                        }, this), e && this[nL].forEach(function (t) {
                            for (var i = t[S_]; i;) {
                                if (this[nL].contains(i))return;
                                i = i[S_]
                            }
                            t[S_] = e
                        }, this)
                    }
                    var h = new Sr(i, Sr.ELEMENT_MOVE_END, t, this.currentDraggingElement, this[nL][Mc]);
                    i[PS](h)
                }
                this.destroy(i)
            }
        }, onpinch: function (t, i) {
            this.currentDraggingElement && this[Yd](t, i)
        }, step: 1, onkeydown: function (t, i) {
            if (Oi(t)) {
                var e, n;
                if (37 == t.keyCode ? e = -1 : 39 == t.keyCode ? e = 1 : 38 == t[ky] ? n = -1 : 40 == t[ky] && (n = 1), e || n) {
                    var s = this._2r(i).datas;
                    if (0 != s.length) {
                        L(t), e = e || 0, n = n || 0;
                        var r = this.step / i.scale, h = new Sr(i, Sr[oL], t, null, s);
                        i[_L](s, e * r, n * r), i.onInteractionEvent(h)
                    }
                }
            }
        }
    };
    var pj = function (t) {
        this.graph = t
    };
    pj[fh] = {
        onkeydown: function (t, i) {
            Oi(t) || (37 == t[ky] ? (this._6m(i, 1, 0), L(t)) : 39 == t[ky] ? (this._6m(i, -1, 0), L(t)) : 38 == t[ky] ? (this._6m(i, 0, 1), L(t)) : 40 == t[ky] && (this._6m(i, 0, -1), L(t)))
        }, _6m: function (t, i, e) {
            t._9r(i, e)
        }, onstart: function (t, i) {
            this._kc && this[FO](i)
        }, _kc: !1, startdrag: function (t, i) {
            t[mA] || (t.responded = !0, this._kc = !0, i[fL] = ND)
        }, ondrag: function (t, i) {
            this._kc && (R(t), i.translate(t.dx || 0, t.dy || 0))
        }, enddrag: function (t, i) {
            if (this._kc) {
                if (i[WI] !== !1) {
                    var e = t.vx, n = t.vy;
                    (Math.abs(e) > .1 || Math.abs(n) > .1) && i._9r(e, n)
                }
                this[FO](i)
            }
        }, onpinch: function (t, i) {
            this._kc = !0;
            var e = t.dScale;
            if (e && 1 != e) {
                var n = i.globalToLocal(t[jf]);
                i.zoomAt(e, n.x, n.y, !1)
            }
        }, destroy: function (t) {
            this._kc = !1, t[fL] = null
        }
    }, xr[fh] = {
        _1x: function (t) {
            this[iA] && t.source == this.element && this.graph.callLater(function () {
                this._j7()
            }, this)
        }, _8: function () {
            this._luPropertyChangeListing || (this._luPropertyChangeListing = !0, this[Rf].dataPropertyChangeDispatcher[gd](this._1x, this))
        }, _5: function () {
            this._luPropertyChangeListing = !1, this.graph.dataPropertyChangeDispatcher.removeListener(this._1x, this)
        }, onElementRemoved: function (t, i) {
            this[iA] && (t == this[iA] || A(t) && E(t, this[iA])) && this[FO](i)
        }, onClear: function (t) {
            this.element && this[FO](t)
        }, destroy: function () {
            this.graph.cursor = null, this.element && delete this.element._editting, delete this.element, delete this._9q, delete this._9i, delete this._n8anEdit, this._75(), this._5()
        }, _75: function () {
            this.drawLineId && (this[yc][cL](this[uL]), delete this[uL], this[yc][kp]())
        }, _n7z: function () {
            this.drawLineId && this.topCanvas[Ff](this[uL]) || (this.drawLineId = this.topCanvas[hA](this[dL], this).id, this[yc][kp]())
        }, _9q: null, _5t: function (t) {
            this._9q = t, this[kp]()
        }, _f3: function (t, i, e) {
            t[ig](), i[lL] ? t.rect(i.x - this.handlerSize / e, i.y - this[vL] / e, this[vL] / e * 2, this.handlerSize / e * 2) : t[ng](i.x, i.y, this.handlerSize / e, 0, 2 * Math.PI, !1), t.lineWidth = 1 / e, t.lineDash = [], t[$v] = jv, t.fillStyle = "rgba(255, 255, 0, 0.8)", t.stroke(), t[Mv]()
        }, _f8: function (t, i, e, n) {
            n ? t.moveTo(i, e) : t.lineTo(i, e)
        }, drawLine: function (t, i) {
            if (this._9q && this._9q.length) {
                t[jb]();
                var e = this.element instanceof NN;
                e && (t.translate(this[iA].x, this[iA].y), this[iA][so] && t.rotate(this.element.rotate));
                var n, s = [];
                t[ig](), this._9q.length, l(this._9q, function (i) {
                    if (i.type != UD[gb])for (var e = 0, r = i.points; e + 1 < r.length;) {
                        var h = r[e], a = r[e + 1], o = {x: h, y: a, isControlPoint: this._7v(i, e)};
                        s.push(o), this._f8(t, o.x, o.y, null == n), n = o, e += 2
                    }
                }, this), t.lineWidth = 1 / i, t.lineDash = [2 / i, 3 / i], t[$v] = bL, t[Tb](), l(s, function (e) {
                    this._f3(t, e, i)
                }, this), t[$b]()
            }
        }, invalidate: function () {
            this[yc][kp]()
        }, _3u: function (t) {
            if (this.element != t && (this.element && this.destroy(), t && this[WA](t))) {
                var i = this._6k(t, this.graph);
                i && (this[iA] = t, t._editting = !0, this._n8anEdit = !0, this._5t(i), this._8(), this._n7z())
            }
        }, _j7: function () {
            if (this[uL] && this.element) {
                var t = this._6k(this[iA], this.graph);
                return t ? void this._5t(t) : void this[FO](this[Rf])
            }
        }, _6k: function (t, i) {
            return i.isEditable(t) ? t[jk] || [] : void 0
        }, _hw: function (t, i) {
            t -= this[iA].x, i -= this[iA].y;
            var e = {x: t, y: i};
            return this[iA][so] && Ps(e, -this.element[so]), e
        }, onclick: function (t, i) {
            if (i.editable && t.altKey && this[iA]) {
                var e = this._f7(t, i);
                if (e && e[lL])return void this.element.removePathSegmentByIndex(e.index);
                if (this.element == t.getData()) {
                    var n = i.toLogical(t), s = i.getUI(this[iA]);
                    s[Aa](n.x, n.y, this.handlerSize || 2)
                }
            }
        }, isEditable: function (t) {
            return this.graph[WA](t) && (t instanceof DN || t instanceof NN)
        }, ondblclick: function (t, i) {
            if (!i[qA])return void(this[iA] && this.destroy(i));
            var e = t[aA]();
            return !e || e == this.element || e._editting ? void this[FO](i) : void this._3u(e)
        }, onstart: function (t, i) {
            if (!i.editable)return void(this[iA] && this.destroy(i));
            if (!t[mA]) {
                if (this.element && this._f7(t, i))return void(t.responded = !0);
                var e = t.getData();
                return e && i[gL](e) && e instanceof NN ? void(this[iA] && e != this[iA] && this[FO]()) : void this._3u(e)
            }
        }, onrelease: function () {
            this.element && (this._n8anEdit = !0)
        }, _9i: null, _f7: function (t, i) {
            var e = i[lI](t);
            this[iA]instanceof NN && (e = this._hw(e.x, e.y));
            var n, s = i[ha], r = this[vL] / s, h = this._9q;
            return l(h, function (t, i) {
                for (var s = 0, a = t.points; s + 1 < a[jr];) {
                    var o = a[s], _ = a[s + 1], f = XM(e.x, e.y, o, _);
                    if (r > f) {
                        if (n = {segment: t, index: i, pointIndex: s}, this._7v(t, s)) {
                            n.isControlPoint = !0;
                            var c = h instanceof HM ? h[yL](i + 1) : h[i + 1];
                            c && (n[pL] = c)
                        }
                        return !1
                    }
                    s += 2
                }
            }, this), n
        }, _7v: function (t, i) {
            return i == t.points.length - 2
        }, startdrag: function (t, i) {
            if (this.element && this._n8anEdit && (this._9i = this._f7(t, i), this._9i)) {
                this._75(), t.responded = !0;
                var e = new Sr(i, Sr.POINT_MOVE_START, t, this.element);
                e.point = this._9i, i[PS](e)
            }
        }, ondrag: function (t, i) {
            if (this.element && this._9i) {
                var e = t.dx, n = t.dy, s = i.scale;
                if (e /= s, n /= s, this.element[so]) {
                    var r = {x: e, y: n};
                    Ps(r, -this[iA][so]), e = r.x, n = r.y
                }
                var h = this._9i.segment;
                if (!this._9i[lL] || h.type != xP && h[no] != TP)h.points[this._9i[EL]] += e, h.points[this._9i[EL] + 1] += n; else {
                    for (var a = h[Xa][jr] - 4; a < h.points[jr];)h[Xa][a] += e, h[Xa][a + 1] += n, a += 2;
                    !this._9i.nextSegment || this._9i.nextSegment[no] != TP && this._9i[pL].type != xP || (this._9i.nextSegment[Xa][0] += e, this._9i[pL][Xa][1] += n)
                }
                this.element.firePathChange();
                var o = new Sr(i, Sr.POINT_MOVING, t, this.element);
                o.point = this._9i, i.onInteractionEvent(o)
            }
        }, enddrag: function (t, i) {
            if (this.element && this._9i) {
                this._n7z(), this._j7();
                var e = new Sr(i, Sr.POINT_MOVE_END, t, this.element);
                e.point = this._9i, i[PS](e)
            }
        }, onmousemove: function (t, i) {
            this.element && (i[fL] = t.altKey && (this._f7(t, i) || this[iA] == t[aA]()) ? "crosshair" : null)
        }
    }, zM[mL] = 1, zM[xL] = V(3724541951), zM[TL] = V(1430753245);
    var Ej = function (t) {
        this.graph = t, this.topCanvas = t._8v._topCanvas
    };
    Ej.prototype = {
        onstart: function (t, i) {
            this._kc && this.destroy(i)
        }, startdrag: function (t, i) {
            t.responded || (t[mA] = !0, this._kc = i[lI](t), i.cursor = nl, this._1dId = this[yc].addDrawable(this._1d, this).id)
        }, ondrag: function (t, i) {
            if (this._kc) {
                R(t), this._end = i.toLogical(t), this.invalidate();
                var e = new Sr(i, Sr.SELECT_START, t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        }, enddrag: function (t, i) {
            if (this._kc) {
                this._f9Timer && clearTimeout(this._f9Timer), this._f9(!0), this.destroy(i);
                var e = new Sr(i, Sr.SELECT_END, t, i.selectionModel);
                i.onInteractionEvent(e)
            }
        }, onpinch: function (t, i) {
            this._kc && this[Yd](t, i)
        }, _1d: function (t, i) {
            t[$v] = zM[xL], t[Cv] = zM.SELECTION_RECTANGLE_FILL_COLOR, t.lineWidth = zM[mL] / i;
            var e = this._kc.x, n = this._kc.y;
            t.rect(e, n, this._end.x - e, this._end.y - n), t[Mv](), t.stroke()
        }, invalidate: function () {
            return this.invalidateFlag ? void this.topCanvas.invalidate() : (this.invalidateFlag = !0, void(this._f9Timer = setTimeout(this._f9.bind(this), 100)))
        }, _f9: function (t) {
            if (this._f9Timer = null, this.invalidateFlag = !1, !this._kc)return void this[yc].invalidate();
            var i = Math.min(this._kc.x, this._end.x), e = Math.min(this._kc.y, this._end.y), n = Math[Nh](this._kc.x - this._end.x), s = Math.abs(this._kc.y - this._end.y);
            if (!n || !s)return void this.graph[dc].clear();
            var r, h = [], a = this.graph[ha];
            if (this[Rf][wL](function (t) {
                    t._hg && this[Rf].isSelectable(t[Ho]) && (r = t._fc, (ai(i, e, n, s, r.x + t._x, r.y + t._y, r.width, r.height) || Re(i, e, n, s, t, a)) && h.push(t.$data))
                }, this), this.graph.selectionModel[du](h), this.topCanvas.invalidate(), !t) {
                var o = new Sr(this[Rf], Sr[OL], null, this.graph.selectionModel);
                this.graph.onInteractionEvent(o)
            }
        }, destroy: function (t) {
            this._kc = null, t[fL] = null, this._1dId && (this[yc].removeDrawable(this._1dId), delete this._1dId, this.topCanvas[kp]())
        }
    };
    var lj = Math.PI / 4;
    Tr[fh] = {
        _ey: !1, _ez: !1, _1x: function (t) {
            this[iA] && t.source == this.element && this[Rf][qS](function () {
                this._9g()
            }, this)
        }, _8: function () {
            this._luPropertyChangeListing || (this._luPropertyChangeListing = !0, this.graph[kL].addListener(this._1x, this))
        }, _5: function () {
            this._luPropertyChangeListing = !1, this.graph.dataPropertyChangeDispatcher[Qu](this._1x, this)
        }, onElementRemoved: function (t, i) {
            this.element && (t == this[iA] || A(t) && E(t, this[iA])) && this.destroy(i)
        }, onClear: function (t) {
            this[iA] && this.destroy(t)
        }, ondblclick: function (t, i) {
            this[iA] && this[FO](i)
        }, destroy: function (t) {
            t[fL] = null, delete this[iA], delete this._d9, delete this._n9ody, delete this._9i, delete this._n8anEdit, delete this._jh, delete this._rotatePoint, delete this._ez, delete this._ey, delete this._insets, this._75(), this._5()
        }, _75: function () {
            this._f8Id && (this[yc].removeDrawable(this._f8Id), delete this._f8Id, this.topCanvas[kp]())
        }, _n7z: function () {
            this._f8Id && this[yc][Ff](this._f8Id) || (this._f8Id = this.topCanvas.addDrawable(this._f8, this).id, this[yc].invalidate())
        }, _d9: null, _jh: null, _91: function (t) {
            this._d9 = t;
            var i = this._d9.x, e = this._d9.y, n = this._d9[ka], s = this._d9[Sa];
            if (this._ez) {
                var r = [];
                r.push({x: i, y: e, p: QM.LEFT_TOP, cursor: SL, rotate: 5 * lj}), r.push({
                    x: i + n / 2,
                    y: e,
                    p: QM[Jk],
                    cursor: IL,
                    rotate: 6 * lj
                }), r.push({x: i + n, y: e, p: QM.RIGHT_TOP, cursor: Lc, rotate: 7 * lj}), r[Wr]({
                    x: i,
                    y: e + s / 2,
                    p: QM[AL],
                    cursor: LL,
                    rotate: 4 * lj
                }), r[Wr]({x: i + n, y: e + s / 2, p: QM[Cu], cursor: LL, rotate: 0}), r.push({
                    x: i,
                    y: e + s,
                    p: QM[CL],
                    cursor: Lc,
                    rotate: 3 * lj
                }), r.push({x: i + n / 2, y: e + s, p: QM.CENTER_BOTTOM, cursor: IL, rotate: 2 * lj}), r.push({
                    x: i + n,
                    y: e + s,
                    p: QM.RIGHT_BOTTOM,
                    cursor: SL,
                    rotate: lj
                }), this._jh = r
            }
            this._rotatePoint = this._ey ? {x: i + n / 2, y: e, cursor: jD} : null, this._n8i()
        }, _f3: function (t, i, e, n) {
            t[ig]();
            var s = (this[vL] - 1) / n;
            t.rect(i - s, e - s, 2 * s, 2 * s), t.lineWidth = 1 / n, t.lineDash = [], t.strokeStyle = jv, t.fillStyle = "rgba(255, 255, 255, 0.8)", t.stroke(), t[Mv]()
        }, _6h: function (t, i, e, n, s, r) {
            s = s || this[vL], r = r || RL, t.beginPath(), s /= n, t[ng](i, e, s, 0, 2 * Math.PI, !1), t[io] = 1 / n, t.lineDash = [], t.strokeStyle = jv, t[Cv] = r, t[Tb](), t[Mv]()
        }, _hw: function (t, i) {
            t -= this[iA].x, i -= this.element.y;
            var e = {x: t, y: i};
            return this.element.rotate && Ps(e, -this[iA][so]), e
        }, _f8: function (t, i) {
            if (this._d9) {
                if (t[jb](), t[bo](this.element.x, this.element.y), this.element.rotate && t.rotate(this.element.rotate), this._rotatePoint) {
                    this._6h(t, 0, 0, i, 3, ML);
                    var e = this._rotatePoint.x, n = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath(), t.moveTo(e, this._rotatePoint.y), t[P_](e, n), t.lineWidth = 1 / i, t.strokeStyle = bL, t.stroke(), this._6h(t, e, n, i)
                }
                if (this._jh) {
                    var s = this._d9.x, r = this._d9.y, h = this._d9.width, a = this._d9.height;
                    t.beginPath(), t[Nl](s, r, h, a), t.lineWidth = 1 / i, t[Ko] = [2 / i, 3 / i], t.strokeStyle = bL, t[Tb](), l(this._jh, function (e) {
                        this._f3(t, e.x, e.y, i)
                    }, this)
                }
                t[$b]()
            }
        }, _n8i: function () {
            this[yc][kp]()
        }, _3u: function (t, i, e, n) {
            this.element = t, this._n7z();
            var s = i.getUI(t);
            this._n9ody = s[kv], this._ez = e, this._ey = n, this._9g(), this._8()
        }, _9g: function () {
            if (this._f8Id) {
                var t = wr(this._n9ody, this._n9ody._iz), i = wr(this._n9ody, this._n9ody._8l);
                this._insets = new JM(t.y - i.y, t.x - i.x, i[jh] - t[jh], i.right - t.right), this._91(i)
            }
        }, _n99: function (t, i) {
            return (!t._i5() || !t[lE]) && i[gL](t)
        }, _n9a: function (t, i) {
            return (!t._i5() || !t[lE]) && i.isRotatable(t)
        }, _da: function (t, i) {
            return t instanceof PN && i[WA](t)
        }, onstart: function (t, i) {
            if (!i.editable)return void(this.element && this[FO](i));
            if (!t[mA]) {
                var e = i[Mf](t), n = t[aA]();
                if (n != this.element) {
                    if (this.element) {
                        if (this._f7(t, i))return void(t.responded = !0);
                        this.destroy(i)
                    }
                    if (n && !n._editting && this._da(n, i)) {
                        var s = this._n99(n, i, e), r = this._n9a(n, i, e);
                        (s || r) && this._3u(n, i, s, r)
                    }
                }
            }
        }, onrelease: function (t, i) {
            this.element && (this._n8anEdit = !0, this._n7z(), i.callLater(function () {
                this._9g()
            }, this))
        }, _9i: null, _f7: function (t, i) {
            var e = i.toLogical(t);
            e = this._hw(e.x, e.y);
            var n = i[ha], s = this.handlerSize / n;
            if (this._rotatePoint) {
                var r = this._rotatePoint.x, h = this._rotatePoint.y - this._rotateHandleLength / n;
                if (XM(e.x, e.y, r, h) < s)return this._rotatePoint
            }
            if (this._jh && this._jh[jr]) {
                var a;
                return l(this._jh, function (t) {
                    return XM(e.x, e.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        }, onmousemove: function (t, i) {
            if (this[iA]) {
                var e = this._f7(t, i);
                if (!e)return void(i[fL] = null);
                if (e != this._rotatePoint && this[iA][so]) {
                    var n = e[so] + this[iA][so];
                    return void(i.cursor = Or(n))
                }
                i[fL] = e[fL]
            }
        }, startdrag: function (t, i) {
            if (this[iA] && (this._75(), this._n8anEdit && (this._9i = this._f7(t, i), this._9i))) {
                if (t.responded = !0, this._9i == this._rotatePoint)return this._9i[oA] = i[lI](t), void(this._9i[so] = this[iA][so] || 0);
                var e = new Sr(i, Sr.RESIZE_START, t, this[iA]);
                e.point = this._9i, i.onInteractionEvent(e)
            }
        }, _79: function (t, i, e, n, s, r) {
            var h = this._d9, a = h.x, o = h.y, _ = h[ka], f = h[Sa];
            if (r) {
                var c = n != _;
                c ? s = n * f / _ : n = s * _ / f
            }
            var u = t.path._fb, d = n / _, l = s / f, v = -a * d + i, b = -o * l + e;
            u.forEach(function (t) {
                if (t.type != UD.SEGMENT_CLOSE) {
                    var n = t[Xa];
                    if (n && n.length)for (var s = 0, r = n[jr]; r > s; s += 2) {
                        var h = n[s], _ = n[s + 1];
                        n[s] = (h - a) * d + i - v, n[s + 1] = (_ - o) * l + e - b
                    }
                }
            }), this._d9.set(i - v, e - b, n, s), t[US](t.x + v, t.y + b), t.firePathChange()
        }, _5a: function (t, i, e, n, s) {
            if (this.element instanceof NN)return this._79(this.element, t, i, e, n, s);
            var r = this._n9ody instanceof tj;
            if (!r && s) {
                var h = this._d9, a = this._n9ody[DL], o = e != h[ka];
                o ? n = e * a[Sa] / a[ka] : e = n * a.width / a[Sa]
            }
            var _ = this[iA][Jp], f = new ZM(e - this._insets.left - this._insets[Ph], n - this._insets.top - this._insets[jh]);
            if (f[ka] < 1 && (e = this._insets.left + this._insets[Ph] + 1, f[ka] = 1), f.height < 1 && (n = this._insets.top + this._insets[jh] + 1, f[Sa] = 1), r ? this[iA][of](GN[PL], f) : this.element[Kp] = f, _) {
                var c = oi(_, e, n), u = c.x + t - (this._n9ody.offsetX || 0), d = c.y + i - (this._n9ody[ME] || 0);
                if (this._d9.set(t - u, i - d, e, n), this.element.rotate) {
                    var c = Ps({x: u, y: d}, this[iA].rotate);
                    u = c.x, d = c.y
                }
                this[iA].x += u, this.element.y += d
            } else {
                var u = this._d9.x * e / this._d9.width - t, d = this._d9.y * n / this._d9.height - i;
                if (this._d9[du](t + u, i + d, e, n), this.element[so]) {
                    var c = Ps({x: u, y: d}, this.element.rotate);
                    u = c.x, d = c.y
                }
                this.element.x -= u, this.element.y -= d
            }
        }, ondrag: function (t, i) {
            if (this[iA] && this._9i) {
                if (this._9i == this._rotatePoint) {
                    var e = i.toLogical(t), n = de(e.x, e.y, this.element.x, this.element.y, this._9i[oA].x, this._9i[oA].y, !0);
                    return n += this._9i[so] || 0, t[Oy] && (n = Math[Za](n / Math.PI * 4) * Math.PI / 4), void(this[iA].rotate = n % (2 * Math.PI))
                }
                var s = t.dx, r = t.dy, h = i.scale;
                if (s /= h, r /= h, this[iA].rotate) {
                    var e = {x: s, y: r};
                    Ps(e, -this[iA][so]), s = e.x, r = e.y
                }
                var a = this._9i.p, o = this._d9, _ = o.x, f = o.y, c = o[ka], u = o.height;
                a.horizontalPosition == tD ? s >= c ? (_ += c, c = s - c || 1) : (_ += s, c -= s) : a[Bh] == eD && (-s >= c ? (c = -s - c || 1, _ -= c) : c += s), a.verticalPosition == nD ? r >= u ? (f += u, u = r - u || 1) : (f += r, u -= r) : a[$h] == rD && (-r >= u ? (u = -r - u || 1, f -= u) : u += r), this._5a(_, f, c, u, t[Oy]);
                var d = new Sr(i, Sr.RESIZING, t, this.element);
                d[NL] = this._9i, i[PS](d)
            }
        }, enddrag: function (t, i) {
            if (this[iA] && this._9i && this._9i != this._rotatePoint) {
                var e = new Sr(i, Sr[jL], t, this.element);
                e.point = this._9i, i[PS](e)
            }
        }
    }, WD[nA] = Tr;
    var mj = function (t) {
        this.graph = t
    };
    mj[fh] = {
        onstart: function (t, i) {
            if (!t[mA]) {
                BM || SM || i[HS](!0);
                var e = t.getData();
                if (e && !i.isSelectable(e) && (e = null), e && Oi(t)) {
                    i[BL](e);
                    var n = new Sr(i, Sr.SELECT, t, i[dc]);
                    return void i.onInteractionEvent(n)
                }
                if (!e || !i[dc][eL](e)) {
                    e ? (i[$L](e), i.sendToTop(e)) : i[$L](null);
                    var n = new Sr(i, Sr.SELECT, t, i[dc]);
                    i.onInteractionEvent(n)
                }
            }
        }, onkeydown: function (t, i) {
            return 27 == t[ky] ? void i[WS]() : void(Oi(t) && 65 == t[ky] && (i[FL](), L(t)))
        }
    };
    var xj = 0, Tj = 15;
    zM.TOOLTIP_DURATION = 3e3, zM[GL] = 1e3;
    var wj = function (t) {
        this[Rf] = t
    };
    wj.prototype = {
        _n91: {}, _n93: null, _n94: function () {
            delete this._initTimer, this._n91[to] && (this._n93 || (this._n93 = i[Na](Wf), this._n93.className = zL, WD.css(this._n93, {
                "background-color": YL,
                overflow: ec,
                "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
                color: zv,
                "pointer-events": nc,
                border: HL,
                padding: qL,
                display: II,
                position: sc
            })), this._n93.parentNode || i[kv].appendChild(this._n93), this._n8z(this.graph, this._n91.data))
        }, _n8z: function (t, i) {
            var e = t.getTooltip(i), n = xS == i[WL];
            e && !n && (e = e.replace(/\n/g, UL)), n ? this._n93.textContent = e || "" : this._n93[JS] = e || "";
            var s = this._n91[XL].pageX + xj, r = this._n91[XL][VL] + Tj;
            kr(this._n93, s, r), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._deleteTimer = setTimeout(WD.createFunction(this, this._93), t.tooltipDuration || zM[ZL])
        }, _93: function () {
            delete this._deleteTimer, this._n93 && this._n93.parentNode && this._n93[Av].removeChild(this._n93), delete this._n93, this._n91 = {}
        }, _eq: function (t, i, e, n) {
            if (!this._n93) {
                var s = n.tooltipDelay;
                return isNaN(s) && (s = zM[GL]), void(this._initTimer = setTimeout(WD[KL](this, this._n94), s))
            }
            this._n8z(n, t)
        }, onstart: function (t, i) {
            this.destroy(i)
        }, onmousemove: function (t, i) {
            if (i[JL]) {
                var e = t.getData();
                if (this._n91[XL] = t, this._n91.data != e && (this._n91.data = e, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), e)) {
                    var n = i[QL](e);
                    n && this._eq(e, n, t, i)
                }
            }
        }, destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._n93 && this._93()
        }
    };
    var Oj = function (t) {
        this.graph = t
    };
    Oj[fh] = {
        onmousewheel: function (t, i) {
            if (i.enableWheelZoom !== !1) {
                if (i._scaling)return void L(t);
                i._scaling = !0, m(function () {
                    delete i._scaling
                }, this, 100), hr(i, t, t.delta > 0) !== !1 && L(t)
            }
        }
    };
    var kj = function (t) {
        this.graph = t
    };
    kj[fh] = {
        onclick: function (t, i) {
            hr(i, t, !Oi(t))
        }
    };
    var Sj = function (t) {
        this[Rf] = t
    };
    Sj.prototype = {
        onclick: function (t, i) {
            hr(i, t, Oi(t))
        }
    }, N(Sr, oD), Sr[sL] = tC, Sr[iC] = eC, Sr[oL] = nC, Sr.ELEMENT_CREATED = sC, Sr.ELEMENT_REMOVED = rC, Sr.POINT_MOVE_START = hC, Sr.POINT_MOVING = aC, Sr[oC] = _C, Sr.RESIZE_START = fC, Sr[cC] = uC, Sr[jL] = dC, Sr[lC] = vC, Sr[bC] = Ic, Sr.SELECT_START = gC, Sr[OL] = yC, Sr[pC] = EC, Sr[mC] = xC, Ir[fh] = {
        _9s: function (t) {
            if (this._interactionSupport)switch (t[Rc]) {
                case yD.KIND_REMOVE:
                    this._interactionSupport._58(t[to]);
                    break;
                case yD[_S]:
                    this._interactionSupport._74(t.data)
            }
        }, destroy: function () {
            delete this._kk, delete this._4r, this._interactionSupport && (this._interactionSupport._hd(), delete this._interactionSupport)
        }, _kk: null, _4r: null, defaultMode: null, _gw: function (t, i, e) {
            this._4r[t] = new _r(i, e), t == this[Dc] && this._interactionSupport._7h(i)
        }, addCustomInteraction: function (t) {
            this._interactionSupport._$b(t)
        }, _mq: function (t) {
            var i = this._4r[t];
            return i ? i : Ij[t]
        }
    }, K(Ir.prototype, {
        defaultCursor: {
            get: function () {
                return this[TC] ? this[TC].defaultCursor : void 0
            }
        }, currentMode: {
            get: function () {
                return this._n8urrentMode
            }, set: function (t) {
                this._n8urrentMode != t && (this._n8urrentMode, this._interactionSupport || (this._interactionSupport = new RD(this._kk)), this._n8urrentMode = t, this.currentInteractionMode = this._mq(this._n8urrentMode), this._kk[fL] = this[bI], this._interactionSupport._7h(this.currentInteractionMode ? this[TC].getInteractionInstances(this._kk) : []))
            }
        }
    });
    var Ij = {};
    zM.registerInteractions = function (t, i, e) {
        var n = new _r(i, e);
        Ij[t] = n
    }, UD[wC] = OC, UD[Pc] = Ec, UD.INTERACTION_MODE_SELECTION = kc, UD.INTERACTION_MODE_ZOOMIN = kC, UD[SC] = IC, UD[AC] = LC, UD.INTERACTION_MODE_CREATE_EDGE = CC, UD[RC] = MC, UD[DC] = PC, zM[NC](UD[wC], [mj, pj, Oj, gj, vj, wj]), zM[NC](UD.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [bj, vr, mj, pj, Oj, gj, wj]), zM[NC](UD.INTERACTION_MODE_CREATE_EDGE, [bj, ur, mj, pj, Oj, gj, wj]), zM[NC](UD.INTERACTION_MODE_CREATE_SHAPE, [bj, dr, mj, pj, Oj, gj, wj]), zM[NC](UD.INTERACTION_MODE_CREATE_LINE, [lr, mj, pj, Oj, gj, wj]), zM[NC](UD.INTERACTION_MODE_DEFAULT, [bj, Tr, xr, mj, yj, pj, Oj, gj, vj, wj]), zM.registerInteractions(UD.INTERACTION_MODE_SELECTION, [bj, Tr, xr, mj, yj, Ej, pj, Oj, gj, vj, wj]), zM.registerInteractions(UD.INTERACTION_MODE_ZOOMIN, [Oj, gj, kj], MD), zM[NC](UD[SC], [Oj, gj, Sj], DD), WD.PanInteraction = pj, WD.SelectionInteraction = mj, WD[jC] = yj, WD[BC] = Oj, WD.DoubleClickInteraction = vj, WD.ExportInteraction = gj, WD.TooltipInteraction = wj, WD.RectangleSelectionInteraction = Ej, WD[$C] = xr;
    var Aj = function (t) {
        this.graph = t
    };
    WD[FC] = Aj, Aj[fh] = {
        getNodeBounds: function (t) {
            return this[Rf].getUIBounds(t)
        }, isLayoutable: function (t) {
            return t[GC] !== !1
        }, getLayoutResult: function () {
        }, updateLocations: function (t, i, e, n, s) {
            if (i === !0) {
                if (this.animate || (this.animate = new eB), e && (this[zC][JI] = e), n && (this[zC].animationType = n), this.animate.locations = t, s) {
                    var r = s, h = this;
                    s = function () {
                        r[Fr](h, t)
                    }
                }
                return void this.animate[oA](s)
            }
            for (var a in t) {
                var o = t[a], _ = o.node;
                _.setLocation(o.x, o.y)
            }
            s && s[Fr](this, t)
        }, _fx: function (t) {
            var i, e, n, s = null;
            t && (i = t[YC], s = t[FA], e = t.duration, n = t[HC]);
            var r = this[qC](t);
            return r ? (this.updateLocations(r, i, e, n, s), r) : !1
        }, doLayout: function (t, i) {
            return this.graph && i !== !0 ? void this.graph[qS](function () {
                this._fx(t)
            }, this) : this._fx(t)
        }
    };
    var Lj = 11, Cj = 12, Rj = 13, Mj = 21, Dj = 22, Pj = 23;
    UD.DIRECTION_RIGHT = Lj, UD[WC] = Cj, UD[UC] = Rj, UD.DIRECTION_BOTTOM = Mj, UD[XC] = Dj, UD.DIRECTION_MIDDLE = Pj;
    var Nj = VC, jj = ZC, Bj = KC, $j = JC;
    UD[QC] = Nj, UD.LAYOUT_TYPE_EVEN_HORIZONTAL = Bj, UD[tR] = $j, UD.LAYOUT_TYPE_TWO_SIDE = jj, WD.isHorizontalDirection = Ar;
    var Fj = function (t) {
        this[Rf] = t
    };
    Fj[fh] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: Mj,
        layoutType: Nj,
        defaultSize: {width: 50, height: 60},
        getNodeSize: function (t) {
            if (this.graph._8v._n7g) {
                var i = this.graph.getUI(t);
                if (i)return i._fc
            }
            return t.image && t[Jv].bounds ? {width: t.image.bounds.width, height: t[Jv].bounds[Sa]} : this.defaultSize
        },
        _n9z: function (t, i) {
            if (this.isLayoutable(t)) {
                var e = this.getNodeSize(t), n = t.id, s = (t[iR], i ? this._n72[i.id] : this._n7x);
                this._n72[n] = new Gj(t.hGap || this[eR], t[nR] || this[nR], t[sR] || this[sR], t[iR], s, t, e[ka], e[Sa])
            }
        },
        _n72: null,
        _n7x: null,
        _kg: function () {
            this._n72 = null, this._n7x = null
        },
        getLayoutResult: function (t) {
            var i, e, n, s, r = this.graph;
            t instanceof Object && (i = t.x, e = t.y, r = t.root || this[Rf], n = t[Fo], s = t.undirected), this._n72 = {}, this._n7x = new Gj, this._n7x._mo(this[eR], this[nR], this.parentChildrenDirection, this[sR]);
            var h = {}, a = rB(r, this._n9z, this, !1, s);
            return a && (this._n7x._fx(i || 0, e || 0, h), n && n.set(this._n7x.x, this._n7x.y, this._n7x.width, this._n7x[Sa])), this._kg(), h
        },
        doLayout: function (t, i) {
            if (k(t)) {
                var e = t, n = 0;
                k(i) && (n = i), t = {x: e, y: n}, i = !0
            }
            return B(this, Fj, rR, [t, i])
        }
    }, N(Fj, Aj);
    var Gj = function (t, i, e, n, s, r, h, a) {
        this._ls = t || 0, this._ml = i || 0, this.layoutType = e, this[iR] = n, this[hR] = s, s && s._ft(this), this.node = r, this._ep = h, this._d1 = a
    };
    Gj.prototype = {
        _mo: function (t, i, e, n) {
            this._ls = t, this._ml = i, this.parentChildrenDirection = e, this.layoutType = n
        },
        _8r: function () {
            this._f5 = []
        },
        _ls: 0,
        _ml: 0,
        _f5: null,
        _ep: 0,
        _d1: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _ft: function (t) {
            this._f5 || (this._f5 = []), this._f5.push(t)
        },
        _n8y: function (t, i, e, n) {
            var s = new KM;
            return e(this._f5, function (e) {
                e._43(t, i), s.add(e), n ? t += e[ka] + this._ls : i += e[Sa] + this._ml
            }, this), s
        },
        _8s: function (t, i, e, n, s) {
            var r, h = n ? this._ls : this._ml, a = n ? this._ml : this._ls, o = n ? "width" : Sa, _ = n ? "height" : ka, f = n ? "_ep" : aR, c = n ? "_d1" : oR, u = n ? "hostDX" : _R, d = n ? "hostDY" : fR, v = new KM, b = 0, g = 0, y = [], p = 0, E = 0;
            e(this._f5, function (e) {
                var s = E >= g;
                e._inheritedParentChildrenDirection = s ? n ? Cj : Dj : n ? Lj : Mj, e._43(t, i), s ? (y[Wr](e), b = Math.max(b, e[o]), g += e[_] + a) : (r || (r = []), r[Wr](e), p = Math[za](p, e[o]), E += e[_] + a)
            }, this), g -= a, E -= a;
            var m = Math.max(g, E), x = h, T = 0;
            this.node && (s && (x += this[f] + h, m > this[c] ? this[d] = (m - this[c]) / 2 : T = (this[c] - m) / 2), this[u] = b + x / 2 - this[f] / 2);
            var w = 0, O = T;
            return l(y, function (t) {
                n ? t[Ev](b - t[o], O) : t[Ev](O, b - t[o]), O += a + t[_], v.add(t)
            }, this), r ? (O = T, w = b + x, l(r, function (t) {
                n ? t[Ev](w, O) : t.offset(O, w), O += a + t[_], v.add(t)
            }, this), v) : v
        },
        offset: function (t, i) {
            this.x += t, this.y += i, this.nodeX += t, this[cR] += i, this._7p(t, i)
        },
        _n7b: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _n9h: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _lr: function (t) {
            if (this._f5 && 0 != this._f5.length) {
                if (t)return this.node && (this.nodeX += this._n7b(this[uR], this._ep)), void l(this._f5, function (t) {
                    t[Ev](this._n7b(t.x, t.width), 0)
                }, this);
                this[dR] && (this.nodeY += this._n9h(this.nodeY, this._d1)), l(this._f5, function (t) {
                    t[Ev](0, this._n9h(t.y, t[Sa]))
                }, this)
            }
        },
        _7p: function (t, i) {
            this._f5 && l(this._f5, function (e) {
                e[Ev](t, i)
            }, this)
        },
        _43: function (t, i) {
            return this.x = t || 0, this.y = i || 0, this._f5 && 0 != this._f5.length ? void this._25(this.x, this.y, this[sR]) : void(this.node && (this.width = this._ep, this[Sa] = this._d1, this.nodeX = this.x, this[cR] = this.y))
        },
        _7r: function (t) {
            this.node && (t[this.node.id] = {
                node: this[dR],
                x: this.nodeX + this._ep / 2,
                y: this.nodeY + this._d1 / 2,
                left: this.nodeX,
                top: this[cR],
                width: this._ep,
                height: this._d1
            }), this._f5 && l(this._f5, function (i) {
                i._7r(t)
            }, this)
        },
        _fx: function (t, i, e) {
            this._43(t, i), this._7r(e)
        },
        _25: function (t, i, n) {
            var s, r = t, h = i;
            !this[iR] && this[hR] && (this.parentChildrenDirection = this._inheritedParentChildrenDirection || this.parentBounds[iR]);
            var a = this.parentChildrenDirection, o = Ar(a);
            if (this[dR]) {
                s = a == Rj || a == Pj;
                var _ = Lr(a);
                s || (o ? t += this._ep + this._ls : i += this._d1 + this._ml)
            }
            var f, c = this.node && this[dR].layoutReverse ? b : l;
            if (n == jj)f = this._8s(t, i, c, !o, s); else {
                var u;
                u = n == Nj ? !o : n == Bj, f = this._n8y(t, i, c, u, s)
            }
            var d = 0, v = 0;
            f && !f[qo]() && (d = f[ka], v = f[Sa], this.add(f)), this.node && (this[uR] = r, this.nodeY = h, this.hostDX !== e || this.hostDY !== e ? (this[uR] += this[fR] || 0, this.nodeY += this[_R] || 0) : o ? this[cR] += v / 2 - this._d1 / 2 : this.nodeX += d / 2 - this._ep / 2, this[Uk](this.nodeX, this[cR], this._ep, this._d1), _ && this._lr(o))
        },
        node: null,
        uiBounds: null
    }, N(Gj, KM), Rr.prototype = {
        layoutDatas: null, isMovable: function (t) {
            return !this.currentMovingNodes[t.id]
        }, _7c: !1, _3v: function () {
            this._7c = !0, this[Rf]._1u.addListener(this._9h, this), this[Rf]._1r.addListener(this._2j, this)
        }, _1z: function () {
            this._7c = !1, this[Rf]._1u[Qu](this._9h, this), this[Rf]._1r[Qu](this._2j, this)
        }, invalidateFlag: !0, invalidateLayoutDatas: function () {
            this.invalidateFlag = !0
        }, resetLayoutDatas: function () {
            return this[EI] = !1, this.layoutDatas = Cr[Fr](this)
        }, _2j: function (t) {
            Sr.ELEMENT_MOVE_START == t.kind ? (this[Gc] = {}, t[Mc][__](function (t) {
                this.currentMovingNodes[t.id] = t
            }, this)) : Sr[oL] == t.kind && (this[Gc] = {})
        }, _9h: function () {
            this[lR]()
        }, isRunning: function () {
            return this.timer && this.timer._ek()
        }, getLayoutResult: function () {
            this[vR](), this[bR]();
            for (var t = this.getMaxIterations(this.layoutDatas[gR] || 0, this.layoutDatas.edgeCount || 0), i = 0; t > i && this[yR](!1) !== !1; i++);
            var e = this[pR][ER];
            return this[mR](), e
        }, _m3: function () {
            return !1
        }, step: function (t) {
            if (t === !1)return this._m3(this.timeStep);
            (this[EI] || !this[pR]) && this[bR]();
            var i = this._m3(t), e = this[pR][ER];
            for (var n in e) {
                var s = e[n], r = s.node;
                this.isMovable(r) ? r.setLocation(s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        }, onstop: function () {
            delete this.layoutDatas
        }, start: function (t) {
            if (this.isRunning())return !1;
            this._7c || this._3v(), this._k1r || (this._k1r = z(this, function (t) {
                return this.step(t)
            })), this.invalidateLayoutDatas(), this[xR] = new YD(this._k1r);
            var i = this;
            return this[xR]._kc(function () {
                i[mR](), t && t()
            }), !0
        }, stop: function () {
            this[xR] && (this[xR]._lp(), this[mR]())
        }, getMaxIterations: function (t) {
            return Math[Ha](1e3, 3 * t + 10)
        }, minEnergyFunction: function (t, i) {
            return 10 + Math.pow(t + i, 1.4)
        }, resetGraph: function () {
            this._7c || this._3v(), this.resetLayoutDatas()
        }, destroy: function () {
            this.stop(), this._1z()
        }
    }, N(Rr, Aj);
    var zj = function (t, i, e, n) {
        this[Rf] = t, k(i) && (this[Ru] = i), k(e) && (this[TR] = e), k(n) && (this.startAngle = n)
    };
    WD.BalloonLayouter = zj;
    var Yj = wR, Hj = OR, qj = kR, Wj = SR;
    UD[IR] = Yj, UD.ANGLE_SPACING_REGULAR = Hj, UD[AR] = qj, UD.RADIUS_MODE_VARIABLE = Wj, zj.prototype = {
        angleSpacing: Yj,
        radiusMode: Wj,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _n72: null,
        _n7x: null,
        _kg: function () {
            this._n72 = null, this._n7x = null
        },
        getLayoutResult: function (t) {
            var i, e = 0, n = 0, s = this.graph;
            t instanceof Object && (e = t.cx || 0, n = t.cy || 0, s = t.root || this[Rf], i = t[Fo]), this._n72 = {}, this._n7x = new Vj(this);
            var r = {}, h = hB(s, this._n9z, this);
            return h && (this._n7x._f5 && 1 == this._n7x._f5.length && (this._n7x = this._n7x._f5[0]), this._n7x._dz(!0), this._n7x._63(e, n, this[LR], r, i)), this._kg(), r
        },
        _n9z: function (t, i) {
            if (this[Nc](t)) {
                var e = i ? this._n72[i.id] : this._n7x;
                this._n72[t.id] = new Vj(this, t, e)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this.radius
        },
        getNodeSize: function (t) {
            if (this.graph._8v._n7g) {
                var i = this[Rf].getUI(t);
                if (i)return (i._fc[ka] + i._fc[Sa]) / 2
            }
            return this.defaultSize
        },
        getGap: function () {
            return this[TR]
        },
        _3p: function (t, i, e) {
            return this[CR](t, i, e) + this.getGap(t, i, e)
        }
    };
    var Uj = function (t) {
        var i, e = this._f5.length, n = 0, s = 0;
        if (l(this._f5, function (t) {
                var e = t._dz();
                1 > e && (e = 1), s += e, e > n && (n = e, i = t)
            }, this), e > 1) {
            var r = 0, h = {}, a = s / e / 3;
            s = 0, l(this._f5, function (t) {
                var i = t._m8;
                a > i && (i = a), h[t.id] = i, s += i
            }, this);
            var o = Zj / s;
            l(this._f5, function (i, e) {
                var n = h[i.id], s = n * o;
                0 === e && (r = t ? -s / 2 : -s), i._ke = r + s / 2, i._la = s, r += s
            }, this)
        }
        return [n, i._la]
    }, Xj = function (t) {
        var i = this._8n, e = 2 * Math.PI / i, n = 0, s = t ? 0 : i > 1 ? -e / 2 : 0;
        return l(this._f5, function (t) {
            t._ke = s % Zj, s += e, t._la = e;
            var i = t._dz();
            i > n && (n = i)
        }, this), [n, e]
    }, Vj = function (t, i, e) {
        this[RR] = t, i && (this._m9 = i, this.id = i.id), e && (e._ft(this), e._m4 = !1, this._kf = e._kf + 1)
    }, Zj = 2 * Math.PI;
    Vj[fh] = {
        _la: 0,
        _ke: 0,
        _iu: 0,
        _eb: 0,
        _n9p: 0,
        _kf: 0,
        _m4: !0,
        _m8: 0,
        _h4: 0,
        _f5: null,
        _m9: null,
        _ft: function (t) {
            this._f5 || (this._f5 = []), this._f5.push(t), t.parent = this
        },
        _h3: function (t) {
            if (this._ke = (this._ke + t) % Zj, this._f5) {
                var i = this._f5[jr];
                if (1 == i)return void this._f5[0]._h3(this._ke);
                t = this._ke + Math.PI, l(this._f5, function (i) {
                    i._h3(t)
                }, this)
            }
        },
        _8n: 0,
        _6o: function (t) {
            return this._m9 && (this._h4 = this.layouter._3p(this._m9, this._kf, this._m4) / 2), this._f5 ? (this._h4, this._8n = this._f5[jr], this._8n <= 2 || this.layouter[MR] == Hj ? Xj[Fr](this, t) : Uj[Fr](this, t)) : null
        },
        _dz: function (t) {
            var i = this._6o(t);
            if (!i)return this._m8 = this._h4;
            var e = i[0], n = i[1], s = this[RR].getRadius(this._m9, this._kf);
            if (s < this._h4 && (s = this._h4), this._eb = s, this._h4 + e > s && (s = this._h4 + e), e && this._8n > 1 && n < Math.PI) {
                var r = e / Math.sin(n / 2);
                r > s && (s = r)
            }
            return this._iu = s, this._m8 = s + e, this._m9 && this._f5 && this[RR].radiusMode == Wj && l(this._f5, function (t) {
                var i = t._m8;
                1 == t._8n && (i /= 2);
                var e = this._h4 + i, n = t._la;
                if (n && n < Math.PI) {
                    var s = Math[Dh](n / 2), r = i / s;
                    r > i && (i = r)
                }
                e > i && (i = e), t._n9p = i
            }, this), (!this._m9 || t) && this._h3(0), this._m8
        },
        _63: function (t, i, e, n, s) {
            if (this._m9 && (n[this._m9.id] = {
                    x: t,
                    y: i,
                    node: this._m9
                }, s && s[Uk](t - this._h4 / 2, i - this._h4 / 2, this._h4, this._h4)), this._f5) {
                if (!this._m9 && 1 == this._f5.length)return void this._f5[0]._63(t, i, e, n, s);
                e = e || 0;
                var r = this._iu, h = this._eb;
                l(this._f5, function (a) {
                    var o = r;
                    a._n9p && (o = Math[za](h, a._n9p));
                    var _ = a._ke + e, f = t + o * Math[ro](_), c = i + o * Math[Dh](_);
                    a._63(f, c, e, n, s)
                }, this)
            }
        }
    }, N(zj, Aj);
    var Kj = function () {
        j(this, Kj, arguments)
    };
    N(Kj, Mr);
    var Jj = function (t, i) {
        this[DR] = t, this.node2 = i, t == i ? (this[O_] = !0, this._l1 = t._l7) : this._l1 = new HM, this._8y = [], this._gq = zM[PR]
    };
    zM.EDGE_BUNDLE_EXPANDED = !0, Jj[fh] = {
        node1: null,
        node2: null,
        _l1: null,
        _gq: zM[PR],
        _8y: null,
        _go: null,
        agentEdge: null,
        _n7o: function (t, i, e) {
            this._l1.forEach(function (n) {
                return e && n[M_] != e && n[Rp] != e ? void 0 : t[Fr](i, n)
            })
        },
        _5m: 0,
        _5q: 0,
        _i9: function (t, i) {
            return this._l1[qa](t) === !1 ? !1 : (i == this[DR] ? this._5m++ : this._5q++, this._n7g ? void this._1i(t) : void(this._n7g = !0))
        },
        _n8g: function (t, i) {
            return this._l1.remove(t) === !1 ? !1 : (i == this.node1 ? this._5m-- : this._5q--, this._n8iBindableFlag = !0, this._6s = !0, void this._l1.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0, t.__5c = !0
            }, this))
        },
        _1i: function (t) {
            this._n8iBindableFlag = !0, this._6s = !0, t._edgeBundleInvalidateFlag = !0, t.__5c = !0
        },
        _n8i: function () {
            this._6s || (this._6s = !0, this._l1[__](function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function () {
            return this._l1.isEmpty()
        },
        isPositiveOrder: function (t) {
            return this[DR] == t.$from || this.node1 == t.fromAgent
        },
        canBind: function (t) {
            return t && this._6s && this._f9(t), this._l1[jr] > 1 && this._8y[jr] > 1
        },
        _i3: function (t) {
            return this._8y[Ur](t)
        },
        getYOffset: function (t) {
            return this._go[t.id]
        },
        _4s: function (t) {
            if (!this.canBind())return void(this._go = {});
            var i = {}, e = this._8y[jr];
            if (!(2 > e)) {
                var n = 0, s = this._8y[0];
                i[s.id] = 0;
                for (var r = 1; e > r; r++) {
                    s = this._8y[r];
                    var h = t.getStyle(s, GN[NR]) || rj[GN.EDGE_BUNDLE_GAP];
                    n += h, i[s.id] = n
                }
                if (!this[O_])for (var a = n / 2, r = 0; e > r; r++)s = this._8y[r], i[s.id] -= a;
                this._go = i
            }
        },
        _n9g: function (t) {
            return this._gq == t ? !1 : (this._gq = t, this._n8i(), !0)
        },
        reverseExpanded: function () {
            return this._n9g(!this._gq)
        },
        _1o: function () {
            this._n8iBindableFlag = !1, this._8y[jr] = 0;
            var t;
            this._l1[__](function (i) {
                if (i.isBundleEnabled()) {
                    if (!this[Dk](i))return t || (t = []), void t[Wr](i);
                    this._8y.push(i)
                }
            }, this), t && (this._8y = t[zr](this._8y))
        },
        _f1: function (t) {
            return t == this[uI] || !this[jR]() || this._gq
        },
        _f9: function (t) {
            this._6s = !1, this._l1.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._n8iBindableFlag && this._1o();
            var i = this._gq, e = this.canBind(), n = !e || i;
            l(this._8y, function (t) {
                t._13 = !0, t._hgInBundle = n, n && (t.__5c = !0)
            }, this), n ? this._9t(null, t) : (this._9t(this._8y[0], t), this[uI]._hgInBundle = !0, this[uI].__5c = !0), n && this._4s(t)
        },
        _9t: function (t, i) {
            if (t != this.agentEdge) {
                var e = this[uI];
                return this.agentEdge = t, i && i._4x(new _D(this, uI, t, e)), !0
            }
        }
    }, K(Jj[fh], {
        bindableEdges: {
            get: function () {
                return this._8y
            }
        }, edges: {
            get: function () {
                return this._l1._ja
            }
        }, length: {
            get: function () {
                return this._l1 ? this._l1.length : 1
            }
        }, expanded: {
            get: function () {
                return this._gq
            }, set: function (t) {
                return this._gq == t ? !1 : (this._gq = t, void this._n8i())
            }
        }
    });
    var Qj = function () {
        function t(t, i) {
            this.node = t, this[kv] = i
        }

        function i() {
            this.stack = [], this.popIdx = 0
        }

        var e = -1e6, n = .8;
        i[fh] = {
            isEmpty: function () {
                return 0 === this.popIdx
            }, push: function (i, e) {
                var n = this.stack[this.popIdx];
                n ? (n.node = i, n[kv] = e) : this.stack[this[BR]] = new t(i, e), ++this[BR]
            }, pop: function () {
                return this.popIdx > 0 ? this.stack[--this.popIdx] : void 0
            }, reset: function () {
                this.popIdx = 0
            }
        };
        var s = [], r = new i, h = function () {
            this[kv] = null, this[$R] = [], this[FR] = 0, this[GR] = 0, this.massY = 0, this.left = 0, this.top = 0, this.bottom = 0, this.right = 0, this[zR] = !1
        }, a = [], o = 0, _ = function () {
            var t;
            return a[o] ? (t = a[o], t.quads[0] = null, t.quads[1] = null, t[$R][2] = null, t[$R][3] = null, t[kv] = null, t.mass = t[GR] = t.massY = 0, t[vo] = t.right = t[Jh] = t.bottom = 0, t.isInternal = !1) : (t = new h, a[o] = t), ++o, t
        }, f = _(), c = function (t, i) {
            var e = Math.abs(t.x - i.x), n = Math[Nh](t.y - i.y);
            return 1e-8 > e && 1e-8 > n
        }, u = function (t) {
            for (r[YR](), r[Wr](f, t); !r.isEmpty();) {
                var i = r.pop(), e = i.node, n = i.body;
                if (e[zR]) {
                    var s = n.x, h = n.y;
                    e.mass = e[FR] + n.mass, e[GR] = e[GR] + n.mass * s, e[HR] = e.massY + n.mass * h;
                    var a = 0, o = e.left, u = (e[Ph] + o) / 2, d = e[Jh], l = (e.bottom + d) / 2;
                    if (s > u) {
                        a += 1;
                        var v = o;
                        o = u, u += u - v
                    }
                    if (h > l) {
                        a += 2;
                        var b = d;
                        d = l, l += l - b
                    }
                    var g = e[$R][a];
                    g || (g = _(), g.left = o, g[Jh] = d, g.right = u, g.bottom = l, e.quads[a] = g), r[Wr](g, n)
                } else if (e[kv]) {
                    var y = e.body;
                    if (e[kv] = null, e.isInternal = !0, c(y, n)) {
                        if (e.right - e[vo] < 1e-8)return;
                        do {
                            var p = Math[oh](), E = (e[Ph] - e[vo]) * p, m = (e[jh] - e[Jh]) * p;
                            y.x = e[vo] + E, y.y = e.top + m
                        } while (c(y, n))
                    }
                    r.push(e, y), r.push(e, n)
                } else e.body = n
            }
        }, d = function (t) {
            var i, r, h, a, o = s, _ = 1, c = 0, u = 1;
            for (o[0] = f; _;) {
                var d = o[c], l = d.body;
                _ -= 1, c += 1, l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math.sqrt(r * r + h * h), 0 === a && (r = (Math[oh]() - .5) / 50, h = (Math[oh]() - .5) / 50, a = Math.sqrt(r * r + h * h)), i = e * l.mass * t[FR] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d[GR] / d.mass - t.x, h = d[HR] / d[FR] - t.y, a = Math[Wa](r * r + h * h), 0 === a && (r = (Math[oh]() - .5) / 50, h = (Math[oh]() - .5) / 50, a = Math[Wa](r * r + h * h)), (d[Ph] - d[vo]) / a < n ? (i = e * d[FR] * t[FR] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d.quads[0] && (o[u] = d[$R][0], _ += 1, u += 1), d[$R][1] && (o[u] = d[$R][1], _ += 1, u += 1), d[$R][2] && (o[u] = d[$R][2], _ += 1, u += 1), d.quads[3] && (o[u] = d.quads[3], _ += 1, u += 1)))
            }
        }, l = function (t, i) {
            e = i;
            var n, s = Number.MAX_VALUE, r = Number[Eu], h = Number[qR], a = Number[qR], c = t, d = c[jr];
            for (n = d; n--;) {
                var l = c[n].x, v = c[n].y;
                s > l && (s = l), l > h && (h = l), r > v && (r = v), v > a && (a = v)
            }
            var b = h - s, g = a - r;
            for (b > g ? a = r + b : h = s + g, o = 0, f = _(), f.left = s, f.right = h, f[Jh] = r, f.bottom = a, n = d; n--;)u(c[n], f)
        };
        return {init: l, update: d}
    }, tB = function (t) {
        t.fx -= t.x * this.attractive, t.fy -= t.y * this.attractive
    }, iB = function (t) {
        if (0 != t.k) {
            var i = this._n8r, e = t[$c], n = t.to, s = n.x - e.x, r = n.y - e.y, h = s * s + r * r, a = Math[Wa](h) || .1, o = (a - i) * t.k * this.elastic;
            o /= a;
            var _ = o * s, f = o * r;
            n.fx -= _, n.fy -= f, e.fx += _, e.fy += f
        }
    };
    Mr.prototype = {
        appendNodeInfo: function (t, i) {
            i[FR] = t[WR] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        }, appendEdgeInfo: function (t, i) {
            i.k = t[UR] || 1
        }, setMass: function (t, i) {
            t[WR] = i, this.layoutDatas && this[pR].nodes && (t = this.layoutDatas.nodes[t.id], t && (t[FR] = i))
        }, setElasticity: function (t, i) {
            t[UR] = i, this.layoutDatas && this.layoutDatas[Dp] && (t = this[pR][Dp][t.id], t && (t.k = i))
        }, _n8r: 50, _ht: .5, timeStep: .15, repulsion: 50, attractive: .1, elastic: 3, _m7: 1e3, _jn: function (t) {
            return this._m7 + .3 * (t - this._m7)
        }, _m3: function (t, i) {
            var e = (Date[ol](), this[pR][ER]);
            for (var n in e) {
                var s = e[n];
                i && (s.x += Math.random() - .5, s.y += Math[oh]() - .5), tB.call(this, s)
            }
            var r = this.layoutDatas.groups;
            if (r)for (var n in r) {
                var h = r[n], a = h[$r], o = 0, _ = 0;
                a.forEach(function (t) {
                    o += t.x, _ += t.y
                }), o /= a[jr], _ /= a[jr];
                var f = 10 * this.attractive;
                a.forEach(function (t) {
                    t.fx -= (t.x - o) * f, t.fy -= (t.y - _) * f
                })
            }
            var c = this._nbodyForce;
            c || (c = this._nbodyForce = Qj()), c.init(this[pR].nodesArray, -this.repulsion * this.repulsion * this[XR]);
            for (var n in e)c[VR](e[n]);
            if (this[ZR]) {
                var u = this.layoutDatas.edges;
                for (var n in u)iB.call(this, u[n])
            }
            return this._m5(t)
        }, _m5: function (t) {
            var i = this[pR][KR], e = (this.layoutDatas[JR], this.layoutDatas.nodes), t = this.timeStep, n = 0, s = this._ht;
            for (var r in e) {
                var h = e[r], a = h.fx / h[FR], o = h.fy / h.mass, _ = h.vx += a * t, f = h.vy += o * t;
                h.x += _ * t, h.y += f * t, i > n && (n += 2 * (_ * _ + f * f)), h.fx = 0, h.fy = 0, h.vx *= s, h.vy *= s
            }
            return this[pR].currentEnergy = n, n >= i
        }
    }, N(Mr, Rr), WD[QR] = Mr;
    var eB = function (t) {
        this.locations = t
    };
    eB[fh] = {
        oldLocations: null, _et: null, duration: 700, animationType: zD[tM], _77: function (t) {
            if (this._et = t, this[iM] = {}, t)for (var i in t) {
                var e = t[i], n = e.node;
                this[iM][i] = {x: n.x, y: n.y}
            }
        }, setLocation: function (t, i, e) {
            t[US](i, e)
        }, forEach: function (t, i) {
            for (var e in this.locations) {
                var n = this[iM][e], s = this[eM][e];
                t.call(i, n, s)
            }
        }, _k8: function (t) {
            this.forEach(function (i, e) {
                var n = e[dR], s = i.x + (e.x - i.x) * t, r = i.y + (e.y - i.y) * t;
                this[US](n, s, r)
            }, this)
        }, stop: function () {
            this._n7nimate && this._n7nimate._lp()
        }, start: function (t) {
            this._n7nimate ? (this._n7nimate._lp(), this._n7nimate._im = this[JI], this._n7nimate._enType = this[HC], this._n7nimate._onfinish = this._onfinish) : this._n7nimate = new HD(this._k8, this, this.duration, this[HC]), this._n7nimate._kc(t)
        }
    }, K(eB.prototype, {
        locations: {
            get: function () {
                return this._et
            }, set: function (t) {
                this._et != t && this._77(t)
            }
        }
    });
    var nB = function (t) {
        var i = new HM;
        return t.forEach(function (t) {
            t instanceof PN && (t[nM]() || i.add(t._e3 || t))
        }), i
    }, sB = function (t, i, e, n, s, r) {
        if (i instanceof pD)return t(i, e, n, s, r), i;
        if (i instanceof aj) {
            var h = new HM;
            i._kkModel[__](function (t) {
                return i[sM](t) ? t._i5() && t._gq && t.hasChildren() ? void(t[Yp] && (t.$location.invalidateFlag = !1)) : void h[qa](t) : void 0
            }), i = h
        }
        var i = nB(i);
        return l(i, function (i) {
            t(i, e, n, s, r)
        }), i
    }, rB = function (t, i, e, n, s) {
        return sB(aB, t, i, e, n, s)
    }, hB = function (t, i, e, n, s) {
        return sB(oB, t, i, e, n, s)
    };
    Jn[fh][rM] = function (t, i, e, n) {
        rB(this, t, i, e, n)
    }, Jn[fh].forEachByTopoBreadthFirstSearch = function (t, i, e, n) {
        hB(this, t, i, e, n)
    };
    var aB = function (t, i, e, n, s) {
        function r(t, i, e, n, s, h, a, o) {
            t._marker = h, n || i[Fr](e, t, o, a), Dr(t, function (o) {
                r(o, i, e, n, s, h, a + 1, t)
            }, o, s, h), n && i[Fr](e, t, o, a)
        }

        r(t, i, e, n, s, {}, 0)
    }, oB = function (t, i, e, n, s) {
        function r(t, i, e, n, s, h, a) {
            var o, _ = t[jr];
            t.forEach(function (t, r) {
                var f = t.v;
                f._marker = h, n || i[Fr](e, f, t._from, a, r, _), Dr(f, function (t) {
                    o || (o = []), t._marker = h, o.push({v: t, _from: f})
                }, f, s, h)
            }), o && r(o, i, e, n, s, h, a + 1), n && t.forEach(function (t, n) {
                i.call(e, t.v, t._from, a, n, _)
            })
        }

        r([{v: t}], i, e, n, s, {}, 0)
    };
    WD[hM] = V, WD[Rh] = ti, WD.error = ei, WD[aM] = ii, WD[oM] = SM, WD.isOpera = kM, WD[_M] = AM, WD[fM] = LM, WD.isFirefox = CM, WD[cM] = MM, WD.isChrome = RM, WD.isMac = DM, WD[uM] = rj, WD.Defaults = zM, WD.Styles = GN, WD[dM] = UD, WD[lM] = CP, WD.Graph = aj, WD.BaseUI = $N, WD.ElementUI = JN, WD.NodeUI = as, WD.EdgeUI = hs, WD[vM] = tj, WD.ImageUI = QN, WD[bM] = jN, WD.Path = IP, WD[gM] = cP, WD[yM] = Sr, WD[dp] = MN, WD[kS] = PN, WD.Edge = DN, WD[pM] = Jn, WD.EdgeBundle = Jj, WD.TreeLayouter = Fj, WD.name = EM;
    var _B = mM;
    return WD[Iy] = mM, WD.about = xM, WD[Ry] = "Copyright © 2015 Qunee.com", WD.css = ui, WD.IDrawable = oj, ti = function () {
    }, WD[Ly] = TM, WD
}(window, document);