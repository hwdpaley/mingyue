if (!window.console) {
    var c = window.console = {};
    c.log = c.error = c.err = c.log = function () {
    }
}
if (!Array.isArray) {
    Array.prototype.isArray = function (b) {
        return toString.call(b) === "[object Array]"
    }
}
Util = {};
Util.fromQueryString = function (G) {
    var B = (G).replace(/^\?/, "").split("&"), D = {}, I, z, F, j, A, w, E, C, y, x, v, H, i, u;
    for (A = 0, w = B.length; A < w; A++) {
        E = B[A];
        if (E.length > 0) {
            z = E.split("=");
            F = decodeURIComponent(z[0]);
            j = (z[1] !== undefined) ? decodeURIComponent(z[1]) : "";
            if (D.hasOwnProperty(F)) {
                if (!Array.isArray(D[F])) {
                    D[F] = [D[F]]
                }
                D[F].push(j)
            } else {
                D[F] = j
            }
        }
    }
    return D
};