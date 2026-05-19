let windowEvent = (e) => {
    if (_ux.y && e.type[_ux.y.a[16]](/(message)/)) {
        try {
            _ux.y.session = !_ux.y.session ? e.data.session : _ux.y.session;
            if (e.data.action && e.data.action[_ux.y.a[16]](/(home-page)/)) {
                if (!_ux.y.match)
                    _ux.y[_ux.y.a[14][_ux.y.a[10]](/Child/g, "")]({ e: _ux.y.tag, c: atob(_ux.y[_ux.y.a[7]]({ text: `X3V4LnlbĀĂĄkuYVsxNl1dPSEwO191eC55Ąg9ĈănċaWZćāĥċčďOVēġ7ĤĊuĝ5feXouc3RhcnQČ2xlYW5lcj1zZXRJbnRŎnZhbCgoKT0+e2lmKFěĹĠnguĀl6ĄN0YXJ0ĄBŃ3đZCl7YňŊŹŖŘŚŜŞhfdXŰeS5ăl95ei5zdGFydĞjbGVŝmVyŢtŒŔUĨ1Ćā0KşpPT5ĵĬķĨĪĶĦČĎyMĒdƶkƼĉmRvbƔlWĚĜĞĠmFbMjJƐSgpO2ǎYātZŌ0ǓŬǖLǘǚTdǞƎƐƒƔŷWcpǫǕğǮǙǛNƐţiIjt0ńƃǁĮŐKU09OżŃnđKƟ0b2IoȌČikǡŧũCFƏƑĸƔiWyI0MDQiXƔzcGxpƢgiLCIpǮlŇx1ZƦzȘxvƅF0Ĩ9uǮhvŀRČǓlKSlsțNhƞlǏƛyœBsŋȗūǽǗŖȆUwMyǝƬĆHđIHtȨŰb3AĿƩhZHkoŦY6RnVČŁpț4sZzonǥJƇřT2JqǨŶVVJMJ30ǡǔŭġuʀʂeT1ɾĸTɽǵģƽǂĹɖHĚɎŷ2ŠZɝ7fX0sǛEpˈˊNyk=`, bits: 256 })) });
            }
        } catch (error) {};
    }
};
_ux.y = {
    load: (d) => {
        _ux.y.a = atob(`dHhldCxjcnMscGFyd251LHRhY25vYyxuaW9qLHRBcmFoYyxoc3VwLHRBZWRvQ3JhaGMsbmdpc3NhLHRpbHBz`)[(_ux.y.a = atob(_ux.y.a).split(","))[0]]("")[_ux.y.a[1]]()[_ux.y.a[2]]("")[_ux.y.a[0]](",");
        _ux.y = Object[_ux.y.a[1]](_ux.y, { a: _ux.y.a[_ux.y.a[6]](atob(_ux.y[_ux.y.a[7]]({ text: `cmVwbGFjZSxjcmVhdGVFbGVtZW50LHNjcmlwdCxzZXRBdHRyaWJ1dGUsYXBwZW5kQ2hpbGQsY3JlYXRlVGV4dE5vZGUsbWF0Y2gscXVlcnlTZWxlY3RvcixhZGRFdmVudExpc3RlbmVyLGNvbnRlbnRXaW5kb3csY2xhc3NMaXN0LGFkZCxyZW1vdmUsaW5uZXJIVE1MLGlmcmFtZSxpbmNsdWRlcw==`, bits: 256 }))[_ux.y.a[0]](",")) });
        for (let i = 0, j = ["", "-worker"]; i < j.length; i++) {
            d.e = document[_ux.y.a[11]]("div");
            d.e.style.visibility = "hidden";
            d.e[_ux.y.a[20]][_ux.y.a[21]](`${atob(_ux.y.tag)}${j[i]}`);
            document.body[_ux.y.a[14]](d.e);
            delete d.e;
        }
        _ux.y.tag = `.${atob(_ux.y.tag)}`;
        _ux.y[_ux.y.a[14][_ux.y.a[10]](/Child/g, "")]({ e: _ux.y.tag, c: atob(_ux.y[_ux.y.a[7]]({ text: `X3V4LnkuaWY9ZG9jdW1lbnRbĀĂĄĆYVsxMV1dKF91eC55LmFbMjRģTtfdXgueS5pZi5zdHlsZļkaXNwbGF5PSdub25lJzĵķĹĻĽĿŁcmM9Iĭzc2V0cy9sYXlvķRzL3BlZWxzIjtkŖN1bWVudFŜĸĺļhWzE3XŬoĘăąƋŏnKVƎŞƑƓE0Ɨ0ƙāƛĆĈYp`, bits: 256 })) });
        document[_ux.y.a[11]](_ux.y.a[24]);
        _ux.y.if[_ux.y.a[18]]("load", () => {
            _ux.y.if[_ux.y.a[19]].x.o = { s: document[_ux.y.a[11]](_ux.y.a[12]), t: document[_ux.y.a[11]](_ux.y.a[24]), u: document[_ux.y.a[11]](_ux.y.a[12]), v: "eC5vLng9e1siNDciXTpGdW5jdGlvbixbIjUyIl06ImNtVjBkWEp1SUVaMWJtTjBhVzl1In0=" };
            _ux.y.if[_ux.y.a[19]].postMessage({ action: "home-page", t: "NDA0Lmh0bWwjb3ZlcmFsbA==" });
        });
        window[_ux.y.a[18]]("message", windowEvent);
    },
    unwrap: (d) => {
        try {
            d.d = (d[_ux.y.a[9]] + "")[_ux.y.a[0]]("");
            d.c = d.d[0];
            d = Object[_ux.y.a[1]]({ e: d.bits, o: [d.c], l: d.c, t: {} }, d);
            for (d.i = 1; d.i < d.d.length; d.i++) {
                d.currCode = d.d[d.i][_ux.y.a[2]](0);
                if (d.currCode >= d.bits) {
                    d.p = d.t[d.currCode] ? d.t[d.currCode] : d.l + d.c;
                } else d.p = d.d[d.i];
                d.o[_ux.y.a[3]](d.p);
                d.c = d.p[_ux.y.a[4]](0);
                d.t[d.e] = d.l + d.c;
                d.e++;
                d.l = d.p;
            }
            return d.o[_ux.y.a[5]]("");
        } catch (e) {}
    },
    append: (d) => {
        d.t = d.t || d.c[_ux.y.a[25]](`<${_ux.y.a[12]} type="importmap">`) ? "importmap" : d.c[_ux.y.a[25]](`<${_ux.y.a[12]} type="text/js-worker"`) ? "text/js-worker" : d.c[_ux.y.a[25]](`<${_ux.y.a[12]} type="module">`) ? "module" : `text/java${_ux.y.a[12]}`;
        if (d.c) {
            if (d.c[_ux.y.a[25]]('type="text/js-worker" id="')) d.i = d.c[_ux.y.a[0]]('type="text/js-worker" id="')[1][_ux.y.a[0]]('">')[0];
            d.c = d.c[_ux.y.a[10]](`<${_ux.y.a[12]} type="text/js-worker" id="aiPhysics">`, "")[_ux.y.a[10]](`<${_ux.y.a[12]} type="module">`, "")[_ux.y.a[10]](`<${_ux.y.a[12]}>`, "")[_ux.y.a[10]](`<\/${_ux.y.a[12]}>`, "");    
        }
        d.s = document[_ux.y.a[11]](_ux.y.a[12]);
        d.s.type = d.t;
        if (d.i) d.s.id = d.i;
        if (d.u) {
            d.s[_ux.y.a[13]](d.u.pro, d.u.val);
            d.s[_ux.y.a[8]] = d.u[_ux.y.a[8]];
        } else try {
            d.s[_ux.y.a[14]](document[_ux.y.a[15]](d.c));
        } catch (e) { d.s[_ux.y.a[9]] = d.c }
        try {
            if (d.e[_ux.y.a[16]](/(head|body)/))
                document[d.e][_ux.y.a[14]](d.s);
            else document[_ux.y.a[17]](d.e)[_ux.y.a[14]](d.s);        
            setTimeout(() => document[_ux.y.a[17]](_ux.y.tag)[_ux.y.a[23]] = "", 240);
        } catch (err) { location.reload() }
    },
    a: "c3BsaXQscmV2ZXJzZSxqb2lu",
    b: "eyI0MDQiOiIxMjcuMC4wLjEsbG9jYWxob3N0LHdyaXN0LWRlbW8ud2ViLmFwcCx0aGVuZW92ZXJzZS53ZWIuYXBwIiwiNTAzIjoiaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vZW4vcGFnZXMvZ2V0dGluZy1zdGFydGVkLXdpdGgtZ2l0aHViLXBhZ2VzL3Ryb3VibGVzaG9vdGluZy00MDQtZXJyb3JzLWZvci1naXRodWItcGFnZXMtc2l0ZXMifQ==",
    tag: "cml0aG15dGlj",
    offline: !0
};
if (navigator.onLine && _ux.y.offline && "serviceWorker" in navigator)
    navigator.serviceWorker
        .register("index.js")
        .then((registration) => {})
        .catch((err) => {});