(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[6712], {

    /***/
    258551: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(905716);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var I_;
            var w0;
            var L = __c.L;
            var Qa = __c.Qa;
            var VI = __c.VI;
            var F = __c.F;
            var Y = __c.Y;
            var X = __c.X;
            var G = __c.G;
            var PD = __c.PD;
            var Sd = __c.Sd;
            var md = __c.md;
            var bf = __c.bf;
            var A = __c.A;
            var u = __c.u;
            var z = __c.z;
            var Da = __c.Da;
            var Yac, $ac, abc, cbc, ebc, fbc, gbc, hbc, jbc, ibc, lbc, kbc, o_, obc, tbc, s_, t_, Abc, Ebc, r_, Fbc, Hbc, Jbc, Mbc, z_, A_, Nbc, B_, C_, D_, Obc, E_, F_, G_, Pbc, H_, Qbc, Sbc, Tbc, Ubc, Ybc, $bc, Xbc, Zbc, Vbc, Wbc, acc, bcc, L_, ccc, ecc, hcc, Acc, Hcc, Scc, Tcc, Ucc, Vcc, Wcc, P_, Q_, Ycc, Zcc, $cc, R_, cdc, adc, S_, gdc, edc, fdc, T_, idc, kdc, ldc, ndc, W_, odc, Bdc, Cdc, Ddc, Edc, $_, pdc, rdc, vdc, ydc, Adc, Y_, xdc, Fdc, mdc, Hdc, Idc, Jdc, Gdc, Mdc, Ndc, Pdc, b0, dec, aec, Ydc, $dc, Qdc, Tdc, Sdc, Zdc, Rdc, eec, Xdc, Vdc, Udc, c0, d0, iec, jec, kec, mec, lec, oec, f0, tec, xec, vec, Bcc, k0, zec, Lcc, Mcc, Ncc, Bec, Cec, Dec, Eec, Fec, Jec, Lec, l0, m0, n0, o0, icc, Mec, Qec, Sec, Rec, Uec, Tec, Vec, Wec, Xec, afc, bfc, dfc, efc, ffc, gfc;
            Yac = function(a, b) {
                b = a.zi.get(__c.Pq(b));
                return b != null ? a.$X.get(b) : void 0
            }
            ;
            __c.j_ = function(a) {
                return {
                    type: 1,
                    Component: a
                }
            }
            ;
            __c.k_ = function() {
                return a => a
            }
            ;
            $ac = function(a) {
                a.he = setTimeout( () => {
                    a.lab(new Zac)
                }
                , 500)
            }
            ;
            abc = function(a, b) {
                if (!a)
                    return Da("missing 'data' field in MessageEvent");
                const c = a.sandboxCommsSource ?? a.source;
                return c ? c !== "iframe" ? Da("invalid source") : a.clientId !== b ? Da("unknown client id") : (0,
                __c.Ba)() : Da("'source' is missing in MessageEvent data object")
            }
            ;
            cbc = function({src: a, srcdoc: b, sandbox: c}) {
                if (b.length !== 0 || !c.contains("allow-same-origin"))
                    return bbc;
                a = (new URL(a)).origin;
                return a === "null" ? bbc : {
                    ePa: a,
                    Hbb: a
                }
            }
            ;
            ebc = function(a) {
                return dbc.some(b => a.endsWith(b))
            }
            ;
            fbc = function(a, {SJ: b, clientId: c}) {
                if (a = a.ER.get(b))
                    return a.get(c)
            }
            ;
            gbc = function(a, {SJ: b, clientId: c}, d) {
                let e = a.ER.get(b);
                e || (e = new Map,
                a.ER.set(b, e));
                if (e.has(c))
                    throw d.promise.resolve(void 0),
                    Error("A connection request with the same processId and clientId already exists");
                e.set(c, d)
            }
            ;
            hbc = function(a, {SJ: b, clientId: c}) {
                const d = a.ER.get(b);
                d && (d.delete(c),
                d.size === 0 && a.ER.delete(b))
            }
            ;
            jbc = function({SJ: a, className: b, embed: c, Pqa: d}) {
                return l_( () => {
                    const {id: e, src: f, sandbox: g, allow: h, allowFullscreen: k} = ibc(z(c.html));
                    return m_("div", {
                        className: b,
                        children: m_("div", {
                            ref: l => {
                                l && d(l)
                            }
                            ,
                            className: "R9vaCQ",
                            children: m_("iframe", {
                                id: e,
                                className: "_5K1SQ",
                                "data-process-id": a,
                                src: f,
                                title: c.title || __c.K("gs+cqw"),
                                sandbox: g,
                                allow: h,
                                allowFullScreen: k
                            })
                        })
                    })
                }
                , [c.html, c.title, b, d, a])
            }
            ;
            ibc = function(a) {
                a = (new DOMParser).parseFromString(a, "text/html");
                a = z(a.querySelector("iframe"));
                return {
                    id: a.id,
                    src: a.src,
                    sandbox: a.sandbox.toString(),
                    allow: a.allow,
                    allowFullscreen: a.allowFullscreen
                }
            }
            ;
            lbc = async function(a, b) {
                const c = b.requestId
                  , d = b.path;
                b = b.payload;
                const e = a.V1.get(d);
                if (e) {
                    a.daa.L5.send({
                        type: "ack",
                        requestId: c
                    });
                    var f = setInterval( () => a.daa.L5.send({
                        type: "ack",
                        requestId: c
                    }), 9E3);
                    try {
                        var g = await e(b);
                        clearInterval(f);
                        a.daa.L5.send({
                            type: "response",
                            requestId: c,
                            payload: g
                        })
                    } catch (k) {
                        clearInterval(f);
                        g = "internal_error";
                        b = "Something went wrong on our end, if this issue persists please contact us.";
                        if (k instanceof n_) {
                            var h = k;
                            k.code === "internal_error" ? a.J.Ob(k, {
                                Be: "Internal error in comms handler",
                                tags: new Map([["type", "request"], ["path", d]])
                            }) : (g = k.code,
                            b = k.PKb)
                        } else
                            a.ELb ? a.J.Ob(k, {
                                Be: "Unexpected error type thrown from comms handler",
                                tags: new Map([["type", "request"], ["path", d]])
                            }) : a.Rsb.error(k);
                        g = kbc(a.daa, c, g, b);
                        g.ok || a.J.PR(g.error, {
                            Be: "unable to send error response",
                            tags: new Map([["type", "request"], ["path", d]])
                        })
                    }
                    if (h != null)
                        for (const k of a.jvb)
                            try {
                                k(h)
                            } catch (l) {
                                a.J.YK(l, {
                                    Be: "Error executing errorObserver"
                                })
                            }
                } else
                    h = kbc(a.daa, c, "internal_error", `No request handler configured for path: "${d}".`),
                    h.ok || a.J.PR(h.error, {
                        Be: "unable to send error response",
                        tags: new Map([["type", "request"], ["path", d]])
                    })
            }
            ;
            kbc = function(a, b, c, d) {
                return a.L5.send({
                    type: "error",
                    requestId: b,
                    code: c,
                    message: d
                })
            }
            ;
            o_ = function(a, b, c, d, e) {
                a.handle(b, async f => {
                    if (f === void 0)
                        throw new n_({
                            code: "internal_error",
                            message: `${b}: request cannot be undefined.`
                        });
                    f = c.Ba(f);
                    f = await d(f);
                    if (e)
                        return e.Ja(f)
                }
                )
            }
            ;
            obc = function(a, b) {
                o_(a, "INIT_DATA", mbc, c => b.V0a(c), p_);
                o_(a, "DATA_RENDER_READY", nbc, c => b.Z0a(c), q_)
            }
            ;
            tbc = function(a, b) {
                o_(a, "SELECTION_CHANGED", pbc, c => b.czb(c), qbc);
                o_(a, "TEXT_CONTENT_CHANGED", rbc, c => b.ezb(c), sbc)
            }
            ;
            s_ = async function(a, b) {
                a = await a.WA.request("RENDER_ELEMENT", ubc.Ja(b));
                a = r_(a, "RENDER_ELEMENT");
                return vbc.Ba(a)
            }
            ;
            t_ = async function(a, b) {
                a = await a.WA.request("SET_CAPABILITY", wbc.Ja(b));
                a = r_(a, "SET_CAPABILITY");
                return xbc.Ba(a)
            }
            ;
            Abc = async function(a, b) {
                a = await a.WA.request("SET_EDIT_PANEL_VALUE", ybc.Ja(b));
                a = r_(a, "SET_EDIT_PANEL_VALUE");
                return zbc.Ba(a)
            }
            ;
            Ebc = function(a, b) {
                o_(a, "SET_CONFIG", Bbc, c => b.dzb(c), Cbc);
                o_(a, "RESIZE_EVENT", Dbc, c => b.Yyb(c))
            }
            ;
            r_ = function(a, b) {
                if (!a.ok)
                    throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                if (a.value == null)
                    throw Error(`${b}: Result cannot be empty`);
                return a.value
            }
            ;
            Fbc = async function(a, b, c) {
                const {port1: d, port2: e} = new MessageChannel;
                c = new u_(d,c);
                await a.p6({
                    zha: {
                        SJ: b,
                        clientId: "canva-code-data-sdk"
                    },
                    port: e
                });
                return {
                    WA: c
                }
            }
            ;
            Hbc = async function(a, b, c) {
                const {port1: d, port2: e} = new MessageChannel;
                c = new u_(d,c);
                await a.p6({
                    zha: {
                        SJ: b,
                        clientId: "canva-code-element-sdk"
                    },
                    port: e
                });
                return {
                    WA: c,
                    Xtb: new Gbc(c)
                }
            }
            ;
            Jbc = async function(a, b, c) {
                const {port1: d, port2: e} = new MessageChannel;
                c = new u_(d,c);
                await a.p6({
                    zha: {
                        SJ: b,
                        clientId: "canva-code-editing-sdk"
                    },
                    port: e
                });
                return {
                    WA: c,
                    Qtb: new Ibc(c)
                }
            }
            ;
            Mbc = function({ff: a, Iu: b, Fw: c, $a: d, J: e}) {
                const f = new Kbc(e)
                  , g = new Lbc(f,e)
                  , h = (k, l) => e.error(k, {
                    Be: "codelet: ",
                    extra: new Map(Object.entries(l))
                });
                return v_(k => {
                    const [l] = w_( () => `${"codelet"}-${__c.Sq()}`)
                      , m = x_(p => {
                        g.p6(p, l, k.tV, k.Vqa, k.Uqa)
                    }
                    , [k.tV, k.Vqa, k.Uqa, l])
                      , n = l_( () => p => m_(jbc, {
                        SJ: l,
                        ...p
                    }), [l]);
                    return m_(__c.sz, {
                        url: k.url,
                        store: b,
                        Jn: c,
                        hI: h,
                        $a: d,
                        aV: a > 10,
                        Sj: k.Sj || !1,
                        lO: m,
                        AF: k.AF,
                        jkb: n
                    })
                }
                )
            }
            ;
            __c.y_ = function() {
                return a => a
            }
            ;
            z_ = function(a, b) {
                return b.map(c => ({
                    type: a,
                    id: c.id,
                    version: c.version
                }))
            }
            ;
            A_ = function(a) {
                return {
                    kind: 0,
                    NO: a
                }
            }
            ;
            Nbc = function() {
                return {
                    kind: 1
                }
            }
            ;
            B_ = function(a) {
                return {
                    kind: 3,
                    range: a
                }
            }
            ;
            C_ = function(a) {
                return {
                    kind: 2,
                    range: a
                }
            }
            ;
            D_ = function(...a) {
                return {
                    kind: 4,
                    values: new Set(a)
                }
            }
            ;
            Obc = function(a) {
                return {
                    kind: 5,
                    itemType: a
                }
            }
            ;
            E_ = function(a) {
                return {
                    kind: 7,
                    name: a
                }
            }
            ;
            F_ = function(a) {
                return {
                    kind: 8,
                    itemType: a
                }
            }
            ;
            G_ = function(a) {
                return {
                    kind: 10,
                    fields: a
                }
            }
            ;
            Pbc = function(a, ...b) {
                return {
                    kind: 11,
                    rYa: a,
                    Gg: b
                }
            }
            ;
            H_ = function(a, b, c) {
                return (d, ...e) => ({
                    key: d,
                    XLa: a,
                    NF: b,
                    type: c(...e)
                })
            }
            ;
            I_ = __c.I_ = function(a) {
                const b = new Set;
                for (const c of Object.values(a))
                    u(!b.has(c.key), "duplicate key: {}", c.key),
                    b.add(c.key);
                return a
            }
            ;
            Qbc = function(a) {
                switch (a.kind) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    return !1;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    return !0;
                default:
                    throw new A(a);
                }
            }
            ;
            __c.J_ = function(a) {
                return () => ({
                    ...Rbc,
                    ...a
                })
            }
            ;
            Sbc = function(a, b) {
                a = {
                    ...a.ZY
                };
                b.kb.every(c => !!c.fill.Ge.ref?.image && !!c.fill.Ge.ref?.video) && (a.Bu = !0);
                return a
            }
            ;
            Tbc = function(a, b) {
                a = {
                    ...a.ZY
                };
                b.ub.every(c => !!c.Ge.ref?.text) && (a.Bu = !0);
                return a
            }
            ;
            Ubc = function(a, b) {
                switch (b.type) {
                case "rect":
                    return a = {
                        ...a.ZY
                    },
                    b.fill.Ge.ref?.image && b.fill.Ge.ref?.video && (a.Bu = !0),
                    a;
                case "shape":
                    return Sbc(a, b);
                case "text":
                    return a = {
                        ...a.ZY
                    },
                    b.Ge.ref?.text && (a.Bu = !0),
                    a;
                case "chart":
                    return {
                        ...a.ZY
                    };
                case "line":
                    return Tbc(a, b);
                case "grid":
                    return {
                        ...a.ZY
                    };
                default:
                    throw new A(b);
                }
            }
            ;
            Ybc = function(a, b) {
                return a.e.classes.z4.create({}, {
                    W: {
                        image: a.e.computed( () => Vbc(a.Ge, b.image, b.Ge.ref?.image)),
                        video: a.e.computed( () => Wbc(a.Ge, b.video, b.Ge.ref?.video)),
                        Ta: b.Ta
                    },
                    attributes: Xbc(b)
                })
            }
            ;
            $bc = function(a, b) {
                return {
                    ...Zbc(a, b),
                    O: () => b.O
                }
            }
            ;
            Xbc = function(a) {
                return {
                    ym: () => a.ym,
                    color: () => a.color,
                    za: () => a.za,
                    locked: () => a.locked,
                    yg: () => a.yg,
                    wl: () => a.wl,
                    cd: () => a.cd,
                    flipX: () => a.flipX,
                    flipY: () => a.flipY
                }
            }
            ;
            Zbc = function(a, b) {
                return {
                    height: () => b.height,
                    width: () => b.width,
                    top: () => b.top,
                    left: () => b.left,
                    rotation: () => b.rotation,
                    Qg: () => Ubc(a.A4a, b),
                    locked: !0
                }
            }
            ;
            Vbc = function(a, b, c) {
                const d = c ? a.Ge?.get(c) : void 0;
                return {
                    ref: (d && acc(d, "image_fill"))?.image.ref ?? b.ref,
                    set: e => bcc(a, {
                        type: "image_fill",
                        value: {
                            ...__c.RD,
                            image: e
                        }
                    }, c)
                }
            }
            ;
            Wbc = function(a, b, c) {
                const d = c ? a.Ge?.get(c) : void 0;
                return {
                    ref: (d && acc(d, "video_fill"))?.video.ref ?? b.ref,
                    set: e => bcc(a, {
                        type: "video_fill",
                        value: {
                            ...__c.RD,
                            video: e
                        }
                    }, c)
                }
            }
            ;
            acc = function(a, b) {
                if (a.type !== b)
                    throw Error(`Expected override type ${b} but got ${a.type}`);
                return a.value
            }
            ;
            bcc = function(a, b, c) {
                if (!c)
                    throw Error("No override key is available, but this is being set on an instance. This is likely an error with the locking logic.");
                a.Ge.set(c, b)
            }
            ;
            L_ = async function(a, b) {
                [a] = await a.xja([b]);
                return new K_({
                    id: b.id,
                    url: a.fonts[0].files[0].url
                })
            }
            ;
            ccc = async function(a, b, c) {
                a = await L_(a, c);
                return t_(b, a)
            }
            ;
            ecc = async function(a, b, c, d, e, f, g) {
                const h = b.dCa.ref?.first()
                  , k = a.Ca;
                c = await s_(c, {
                    config: b.config,
                    o8: k != null && h != null ? await L_(k, h) : void 0
                });
                a.config.mS?.POa({
                    ...c,
                    oI: c.oI?.size
                }, b, d, e, f, g);
                dcc( () => {
                    a.nT = !0
                }
                )
            }
            ;
            hcc = function(a, b) {
                const c = new Map;
                return M_( () => {
                    const d = new Map;
                    a.config.forEach( (e, f) => {
                        let g;
                        const h = c.get(f);
                        e.textContent !== h?.textContent && (g = {
                            ...(g ?? new fcc({})),
                            textContent: e.textContent
                        });
                        e.backgroundColor !== h?.backgroundColor && (g = {
                            ...(g ?? new fcc({})),
                            backgroundColor: e.backgroundColor
                        });
                        g && d.set(f, g);
                        c.set(f, {
                            ...e
                        })
                    }
                    );
                    return d
                }
                , async d => b.pca(new gcc({
                    config: d
                })), {
                    fireImmediately: !0
                })
            }
            ;
            Acc = function(a) {
                function b(d, e) {
                    var f = c;
                    e = e();
                    u(!f.dca.has(d));
                    e = {
                        document: icc(f.zWa(d, e.document)),
                        G: icc(f.zWa(d, e.G))
                    };
                    f.dca.set(d, e);
                    return {
                        id: d,
                        Kn: e
                    }
                }
                const c = a.QPa;
                return {
                    Hs: b("w:wnJF5T87v", jcc),
                    uZ: b("w:xB9fK2LmQ", kcc),
                    vj: a.KAa ? Promise.all([__webpack_require__.me(288639).then( () => __c.lcc), __webpack_require__.me(229274).then( () => __c.mcc), __webpack_require__.me(89563).then( () => __c.ncc), __webpack_require__.me(706140).then( () => __c.occ), __webpack_require__.me(58313).then( () => __c.pcc), __webpack_require__.me(879434).then( () => __c.qcc), __webpack_require__.me(181007).then( () => __c.rcc), __webpack_require__.me(354456).then( () => __c.scc), __webpack_require__.me(920429).then( () => __c.tcc), __webpack_require__.me(580825).then( () => __c.ucc)]).then( ([d,e,f,g,h,k,l,m,n,p]) => ({
                        bZ: b("w:cm9wgGptP", d.oh),
                        dZ: b("w:yLMS4dWnl", e.oh),
                        eZ: b("w:2flp30CGQ", f.oh),
                        fZ: b("w:1Nv6K6Dtv", g.oh),
                        gZ: b("w:5Nv6K6Dtv", h.oh),
                        hZ: b("w:6Nv6K6Dtv", k.oh),
                        iZ: b("w:7Nv6K6Dtv", l.oh),
                        jZ: b("w:8Nv6K6Dtv", m.oh),
                        kZ: b("w:9Nv6K6Dtv", n.oh),
                        cZ: b("w:sSrc7m4Q3", p.oh)
                    })) : void 0,
                    Fy: b("w:JR4G8hDDg", vcc),
                    sY: b("w:KS5H9iEEh", wcc),
                    form: __webpack_require__.me(649E3).then( () => __c.xcc).then(d => b("widget:form", d.oh)),
                    UN: a.SAa ? __webpack_require__.me(320784).then( () => __c.ycc).then(d => b("w:K7mQ9xR3p", d.oh)) : void 0,
                    scene: a.XAa ? __webpack_require__.me(290120).then( () => __c.N_).then(d => b("w:2pbXJMtm1", d.oh)) : void 0,
                    button: __webpack_require__.me(856598).then( () => __c.zcc).then(d => b("w:PQccHDsCJ", d.oh))
                }
            }
            ;
            Hcc = function(a) {
                function b({id: f, Kn: g}, h, k) {
                    var l = e;
                    h = h(k);
                    k = z(l.CKa.dca.get(f));
                    u(k.G === g.G);
                    u(!l.DWa.has(f));
                    g = Bcc(f, h, g);
                    l.DWa.set(f, g);
                    return g
                }
                const c = new Ccc
                  , d = a.RPa
                  , e = a.PPa;
                return {
                    Bhc: c,
                    vj: d.vj ? Promise.all([d.vj, __webpack_require__.me(288639).then( () => __c.lcc), __webpack_require__.me(229274).then( () => __c.mcc), __webpack_require__.me(89563).then( () => __c.ncc), __webpack_require__.me(706140).then( () => __c.occ), __webpack_require__.me(58313).then( () => __c.pcc), __webpack_require__.me(879434).then( () => __c.qcc), __webpack_require__.me(181007).then( () => __c.rcc), __webpack_require__.me(354456).then( () => __c.scc), __webpack_require__.me(920429).then( () => __c.tcc), __webpack_require__.me(580825).then( () => __c.ucc)]).then( ([f,g,h,k,l,m,n,p,q,r,t]) => ({
                        bZ: b(f.bZ, g.nh, void 0),
                        dZ: b(f.dZ, h.nh, void 0),
                        eZ: b(f.eZ, k.nh, void 0),
                        fZ: b(f.fZ, l.nh, void 0),
                        gZ: b(f.gZ, m.nh, void 0),
                        hZ: b(f.hZ, n.nh, void 0),
                        iZ: b(f.iZ, p.nh, void 0),
                        jZ: b(f.jZ, q.nh, void 0),
                        kZ: b(f.kZ, r.nh, void 0),
                        cZ: b(f.cZ, t.nh, void 0)
                    })) : void 0,
                    scene: d.scene ? Promise.all([d.scene, __webpack_require__.me(290120).then( () => __c.N_)]).then( ([f,g]) => b(f, g.nh, void 0)) : void 0,
                    button: Promise.all([d.button, __webpack_require__.me(856598).then( () => __c.zcc)]).then( ([f,g]) => b(f, g.nh, {
                        Tia: c.Tia
                    })),
                    Fy: b(d.Fy, Dcc, void 0),
                    sY: b(d.sY, Ecc, void 0),
                    form: Promise.all([d.form, __webpack_require__.me(649E3).then( () => __c.xcc)]).then( ([f,g]) => b(f, g.nh, void 0)),
                    Hs: b(d.Hs, Fcc, void 0),
                    uZ: b(d.uZ, Gcc, void 0),
                    UN: d.UN ? Promise.all([d.UN, __webpack_require__.me(320784).then( () => __c.ycc)]).then( ([f,g]) => b(f, g.nh, void 0)) : void 0
                }
            }
            ;
            Scc = function(a) {
                const b = a.RPa
                  , c = a.Eea
                  , d = a.uf
                  , e = a.BR
                  , f = a.ei;
                class g extends Icc {
                    async load() {
                        const [m,n,p] = await Promise.all([this.Ln, this.loadModule(), Promise.resolve(this.ei)])
                          , q = m.id
                          , r = m.Kn;
                        var t = n.Go({
                            BR: {
                                ...e,
                                bb: d.Mw(`widgets.rendering.clients.${this.Yl}`)
                            },
                            ei: p
                        })
                          , v = z(c.CKa.dca.get(q));
                        u(v.G === r.G);
                        u(!c.dV.has(q));
                        Jcc.has(q) || (__c.fS.set(q, Kcc),
                        Jcc.add(q));
                        const {cvb: w, IN: y} = Lcc(c, r, t);
                        v = Mcc(c, r, t, y);
                        t = {
                            G: w,
                            email: v,
                            exports: t.exports,
                            metadata: t.metadata,
                            sFb: Ncc(r, t.metadata),
                            IN: y,
                            wia: t.wia
                        };
                        c.dV.set(q, t);
                        return {
                            id: q,
                            Kn: r,
                            ZJa: t,
                            Yl: this.Yl
                        }
                    }
                    constructor(m) {
                        super(m.id, m.loadModule);
                        this.Ln = m.Ln;
                        this.ei = m.ei;
                        this.Yl = m.Yl ?? "default"
                    }
                }
                const h = {
                    Hs: new g({
                        id: "w:wnJF5T87v",
                        Ln: Promise.resolve(b.Hs),
                        loadModule: () => __webpack_require__.me(196751).then( () => Occ),
                        ei: {
                            wH: f.wH,
                            XD: f.XD
                        },
                        Yl: "blueprint"
                    }),
                    uZ: new g({
                        id: "w:xB9fK2LmQ",
                        Ln: Promise.resolve(b.uZ),
                        loadModule: () => __webpack_require__.me(258551).then( () => Pcc),
                        ei: {
                            wH: f.wH
                        },
                        Yl: "documentBlueprint"
                    }),
                    bZ: b.vj ? new g({
                        id: "w:cm9wgGptP",
                        Ln: b.vj.then(m => m.bZ),
                        loadModule: () => __webpack_require__.me(288639).then( () => __c.lcc),
                        ei: void 0,
                        Yl: "demo1"
                    }) : null,
                    dZ: b.vj ? new g({
                        id: "w:yLMS4dWnl",
                        Ln: b.vj.then(m => m.dZ),
                        loadModule: () => __webpack_require__.me(229274).then( () => __c.mcc),
                        ei: void 0,
                        Yl: "demo2"
                    }) : null,
                    eZ: b.vj ? new g({
                        id: "w:2flp30CGQ",
                        Ln: Promise.resolve(b.vj.then(m => m.eZ)),
                        loadModule: () => __webpack_require__.me(89563).then( () => __c.ncc),
                        ei: void 0,
                        Yl: "demo3"
                    }) : null,
                    fZ: b.vj ? new g({
                        id: "w:1Nv6K6Dtv",
                        Ln: Promise.resolve(b.vj.then(m => m.fZ)),
                        loadModule: () => __webpack_require__.me(706140).then( () => __c.occ),
                        ei: void 0,
                        Yl: "demo4"
                    }) : null,
                    gZ: b.vj ? new g({
                        id: "w:5Nv6K6Dtv",
                        Ln: Promise.resolve(b.vj.then(m => m.gZ)),
                        loadModule: () => __webpack_require__.me(58313).then( () => __c.pcc),
                        ei: void 0,
                        Yl: "demo5"
                    }) : null,
                    hZ: b.vj ? new g({
                        id: "w:6Nv6K6Dtv",
                        Ln: Promise.resolve(b.vj.then(m => m.hZ)),
                        loadModule: () => __webpack_require__.me(879434).then( () => __c.qcc),
                        ei: void 0,
                        Yl: "demo6"
                    }) : null,
                    iZ: b.vj ? new g({
                        id: "w:7Nv6K6Dtv",
                        Ln: Promise.resolve(b.vj.then(m => m.iZ)),
                        loadModule: () => __webpack_require__.me(181007).then( () => __c.rcc),
                        ei: void 0,
                        Yl: "demo7"
                    }) : null,
                    jZ: b.vj ? new g({
                        id: "w:8Nv6K6Dtv",
                        Ln: Promise.resolve(b.vj.then(m => m.jZ)),
                        loadModule: () => __webpack_require__.me(354456).then( () => __c.scc),
                        ei: void 0,
                        Yl: "demo8"
                    }) : null,
                    kZ: b.vj ? new g({
                        id: "w:9Nv6K6Dtv",
                        Ln: Promise.resolve(b.vj.then(m => m.kZ)),
                        loadModule: () => __webpack_require__.me(920429).then( () => __c.tcc),
                        ei: void 0,
                        Yl: "demo9"
                    }) : null,
                    cZ: b.vj ? new g({
                        id: "w:sSrc7m4Q3",
                        Ln: Promise.resolve(b.vj.then(m => m.cZ)),
                        loadModule: () => __webpack_require__.me(580825).then( () => __c.ucc),
                        ei: void 0,
                        Yl: "demo10"
                    }) : null,
                    Fy: new g({
                        id: "w:JR4G8hDDg",
                        Ln: Promise.resolve(b.Fy),
                        loadModule: () => __webpack_require__.me(149342).then( () => Qcc),
                        ei: {
                            RW: f.RW,
                            Ca: f.Ca,
                            Ep: f.Ep
                        },
                        Yl: "codelet"
                    }),
                    sY: new g({
                        id: "w:KS5H9iEEh",
                        Ln: Promise.resolve(b.sY),
                        loadModule: () => __webpack_require__.me(761582).then( () => Rcc),
                        ei: {
                            RW: f.RW,
                            Ep: f.Ep
                        },
                        Yl: "codelet2"
                    }),
                    form: new g({
                        id: "widget:form",
                        Ln: b.form,
                        loadModule: () => __webpack_require__.me(649E3).then( () => __c.xcc),
                        ei: Promise.all([f.hN?.()]).then( ([m]) => ({
                            Xwb: m,
                            rh: f.rh,
                            xE: f.xE
                        })),
                        Yl: "form"
                    }),
                    UN: b.UN ? new g({
                        id: "w:K7mQ9xR3p",
                        Ln: b.UN,
                        loadModule: () => __webpack_require__.me(320784).then( () => __c.ycc),
                        ei: void 0,
                        Yl: "navigationMenu"
                    }) : null,
                    scene: b.scene ? new g({
                        id: "w:2pbXJMtm1",
                        Ln: b.scene,
                        loadModule: () => __webpack_require__.me(290120).then( () => __c.N_),
                        ei: {
                            Vz: f.Vz
                        },
                        Yl: "scene"
                    }) : null,
                    button: new g({
                        id: "w:PQccHDsCJ",
                        Ln: b.button,
                        loadModule: () => __webpack_require__.me(856598).then( () => __c.zcc),
                        ei: void 0,
                        Yl: "button"
                    })
                };
                a = new Set(["widget:form", "w:JR4G8hDDg", "w:wnJF5T87v", "w:2pbXJMtm1", "w:PQccHDsCJ"]);
                const k = [];
                for (var l of Object.values(h))
                    l && a.has(l.id) && k.push(l.yn(Promise.resolve()));
                l = Promise.allSettled(k).then( () => {}
                );
                return {
                    dV: {
                        Hs: h.Hs.yn(l),
                        uZ: h.uZ.yn(l),
                        vj: b.vj && {
                            bZ: h.bZ.yn(l),
                            dZ: h.dZ.yn(l),
                            eZ: h.eZ.yn(l),
                            fZ: h.fZ.yn(l),
                            gZ: h.gZ.yn(l),
                            hZ: h.hZ.yn(l),
                            iZ: h.iZ.yn(l),
                            jZ: h.jZ.yn(l),
                            kZ: h.kZ.yn(l),
                            cZ: h.cZ.yn(l)
                        },
                        Fy: h.Fy.yn(l),
                        sY: h.sY.yn(l),
                        form: h.form?.yn(l) ?? void 0,
                        UN: h.UN?.yn(l) ?? void 0,
                        scene: h.scene?.yn(l) ?? void 0,
                        button: h.button?.yn(l) ?? void 0
                    },
                    K_a: () => {
                        const m = [];
                        for (const n of Object.values(h))
                            n && m.push(n.yn(Promise.resolve()));
                        return Promise.allSettled(m)
                    }
                }
            }
            ;
            Tcc = function(a) {
                var b = {
                    document: void 0,
                    G: void 0
                };
                const c = new Map;
                for (const d in b)
                    a[d].RL.forEach( (e, f) => c.set(f, e));
                return {
                    RL: c,
                    decode: d => {
                        const e = new Map
                          , f = {};
                        for (const g in d) {
                            const h = a[g].decode(d[g]);
                            h.vKa.forEach( (k, l) => e.set(l, k));
                            f[g] = h.data
                        }
                        return {
                            vKa: e,
                            data: f
                        }
                    }
                    ,
                    encode: d => bf(b, (e, f) => a[f].encode(d[f]))
                }
            }
            ;
            Ucc = function(a) {
                return () => a
            }
            ;
            Vcc = function(a) {
                return a()
            }
            ;
            Wcc = function(a, b, c) {
                return new O_([a],b,c)
            }
            ;
            P_ = function(a, b, c, d) {
                return new O_([a, b],c,d)
            }
            ;
            Q_ = function(a, b, c, d) {
                return new Xcc(a,b,c,d)
            }
            ;
            Ycc = function(a, b) {
                return b(a)
            }
            ;
            Zcc = function(a) {
                return (b, c) => ({
                    kind: 2,
                    name: a,
                    args: [b, c]
                })
            }
            ;
            $cc = function(a) {
                return b => ({
                    kind: 3,
                    name: a,
                    args: b
                })
            }
            ;
            R_ = function(a, b) {
                return a === b || b.map(c => a.uEa(adc(c)))
            }
            ;
            cdc = function(a, b) {
                return a.KGa(b).map(c => new bdc(c,d => d.props[b]))
            }
            ;
            adc = function(a) {
                u(a instanceof ddc);
                return a
            }
            ;
            S_ = function(a) {
                const b = new WeakMap;
                return function(c) {
                    let d = b.get(c);
                    d == null && (d = a.call(this, c),
                    b.set(c, d));
                    return d
                }
            }
            ;
            gdc = function(a, b) {
                if (a === b)
                    return !0;
                switch (typeof a) {
                case "string":
                case "number":
                case "boolean":
                case "undefined":
                    return !1;
                case "object":
                    if (typeof b !== "object" || a.kind !== b.kind)
                        return !1;
                    switch (a.kind) {
                    case "array":
                        return b.kind === "array" && edc(a.items, b.items);
                    case "set":
                        var c;
                        if (c = b.kind === "set")
                            a = a.items,
                            b = b.items,
                            c = a === b ? !0 : a.size !== b.size ? !1 : edc([...a], [...b]);
                        return c;
                    case "map":
                        if (c = b.kind === "map")
                            a = a.items,
                            b = b.items,
                            c = a === b ? !0 : a.size !== b.size ? !1 : edc([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                        return c;
                    case "record":
                        return b.kind === "record" && fdc(a.fields, b.fields);
                    case "instance":
                        return b.kind === "instance" && a.instance === b.instance;
                    default:
                        throw new A(a);
                    }
                default:
                    throw new A(a);
                }
            }
            ;
            edc = function(a, b) {
                if (a === b)
                    return !0;
                if (a.length !== b.length)
                    return !1;
                for (let c = 0; c < a.length; c++)
                    if (!gdc(a[c], b[c]))
                        return !1;
                return !0
            }
            ;
            fdc = function(a, b) {
                if (a === b)
                    return !0;
                const c = Object.keys(a)
                  , d = Object.keys(b)
                  , e = new Set([...c, ...d]);
                if (c.length !== e.size || d.length !== e.size)
                    return !1;
                for (const f of e)
                    if (!gdc(a[f], b[f]))
                        return !1;
                return !0
            }
            ;
            T_ = function(a) {
                return typeof a === "string" ? JSON.stringify(a) : String(a)
            }
            ;
            idc = function(a, b) {
                return a.map(c => b.map(d => hdc[0](c, d)))
            }
            ;
            kdc = function(a, b, c) {
                return b.map(d => jdc[a](d, c))
            }
            ;
            ldc = function(a, b) {
                return new U_(new V_(new Map(b),a.vars),a.E8)
            }
            ;
            ndc = function(a, b, c) {
                for (const [e,f] of c.E8) {
                    var d = f.params.map( ([g,h]) => [g, a.types.evaluate(h)]);
                    d = mdc(b, d, g => W_(a, g, f.body));
                    b = new U_(b.vars,b.E8.define(e, d))
                }
                return W_(a, b, c.body)
            }
            ;
            W_ = function(a, b, c) {
                switch (c.kind) {
                case 1:
                    return odc(c.value);
                case 2:
                    const f = c.args.map(q => W_(a, b, q));
                    c = c.name;
                    return typeof c === "string" ? b.E8.resolve(c).map(q => pdc(q, f)) : qdc[c].map(q => rdc(q, f));
                case 3:
                    const g = c.args.map(q => q.kind !== 13 ? new sdc(W_(a, b, q)) : new tdc(W_(a, b, q.I5b)));
                    c = c.name;
                    switch (c) {
                    case 0:
                    case 1:
                        var d = g.map(q => q.XBa(r => r.type, r => r.type.KT()));
                        return X_.union(...d).map(udc[c]).map(q => vdc(q, g));
                    default:
                        return wdc[c].map(q => vdc(q, g))
                    }
                case 4:
                    d = c.name;
                    var e = c.param;
                    const h = c.body
                      , k = W_(a, b, c.AY);
                    c = k.type.KT();
                    const l = mdc(b, [[e, c]], q => W_(a, q, h));
                    return kdc(d, c, l.resultType).map(q => xdc(q, k, l));
                case 5:
                    const m = c.entries.map( ([q,r]) => [W_(a, b, q), W_(a, b, r)]);
                    c = X_.union(...m.map( ([q]) => q.type));
                    d = X_.union(...m.map( ([,q]) => q.type));
                    if (!R_(c, X_.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                    return idc(c, d).map(q => ydc(q, m));
                case 6:
                    const n = bf(c.fields, q => W_(a, b, q));
                    c = bf(n, q => q.type);
                    return (0,
                    zdc[0])(c).map(q => Adc(q, n));
                case 7:
                    d = a.types.resolve(c.name);
                    if (!d)
                        throw Error(`cannot instantiate unknown type: ${c.name}`);
                    const p = W_(a, b, {
                        kind: 6,
                        fields: c.args
                    });
                    return d.aGb.map(q => rdc(q, [p], {
                        rq: !0
                    }));
                case 8:
                    return d = W_(a, b, c.base),
                    Bdc(d, c.edc);
                case 9:
                    return Cdc(b, c.name);
                case 10:
                    return d = md(c.defs, q => W_(a, b, q)),
                    Ddc(a, b, d, c.body);
                case 11:
                    return d = W_(a, b, c.test).as(X_.Cd),
                    e = W_(a, b, c.tZb),
                    c = W_(a, b, c.alternate),
                    Edc(d, e, c);
                case 12:
                    return W_(a, b, c.body).computed();
                default:
                    throw new A(c);
                }
            }
            ;
            odc = function(a) {
                switch (typeof a) {
                case "string":
                    return Y_(X_.string, a);
                case "number":
                    return Y_(X_.number, a);
                case "boolean":
                    return Y_(X_.Cd, a);
                case "undefined":
                    return Y_(X_.undefined, a);
                default:
                    throw new A(a);
                }
            }
            ;
            Bdc = function(a, b) {
                return a.map(c => cdc(c, b).map( ({type: d, get: e}) => rdc(new O_([c],d,e), [a])))
            }
            ;
            Cdc = function(a, b) {
                return a.vars.resolve(b).map(c => Z_.of(c, d => d.resolve(b)))
            }
            ;
            Ddc = function(a, b, c, d) {
                const e = md(c, g => g.type)
                  , f = md(c, g => g.evaluate);
                return Fdc(W_(a, ldc(b, e), d), g => {
                    const h = md(f, k => k(g));
                    return new V_(new Map(h),g)
                }
                )
            }
            ;
            Edc = function(a, b, c) {
                return b.map( (d, e) => c.map( (f, g) => {
                    f = X_.union(d, f);
                    return Z_.of(f, h => {
                        const k = a(h)
                          , l = e(h)
                          , m = g(h);
                        return () => k() ? l() : m()
                    }
                    )
                }
                ))
            }
            ;
            $_ = function(a) {
                return b => b(a)
            }
            ;
            pdc = function({Woa: a, resultType: b, evaluate: c}, d) {
                if (d.length !== a.length)
                    throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                const e = Gdc(a, (f, g) => d[g].as(f));
                return Z_.of(b, f => {
                    const g = e.map($_(f));
                    return c(f)(...g)
                }
                )
            }
            ;
            rdc = function({Woa: a, resultType: b, apply: c}, d, e) {
                if (d.length !== a.length)
                    throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                const f = Gdc(a, (g, h) => d[h].as(g));
                return Z_.of(b, g => {
                    g = f.map($_(g));
                    return Hdc(e?.rq ? Idc(c) : c, g)
                }
                )
            }
            ;
            vdc = function({BJb: a, resultType: b, apply: c}, d) {
                let e;
                const f = d.map(g => g.Fwa(h => h.as(a), h => h.as(e ?? (e = X_.AY(a)))));
                return new Z_(b,g => {
                    const h = $_(g)
                      , k = f.map(l => l.Fwa(h, h));
                    return () => {
                        const l = [];
                        k.forEach(m => {
                            m.XBa(n => l.push(n()), n => l.push(...n()))
                        }
                        );
                        return c(l)
                    }
                }
                )
            }
            ;
            ydc = function({keyType: a, valueType: b, resultType: c, apply: d}, e) {
                const f = e.map( ([g,h]) => [g.as(a), h.as(b)]);
                return new Z_(c,g => {
                    const h = f.map( ([k,l]) => [k(g), l(g)]);
                    return () => d(h.map( ([k,l]) => [k(), l()]))
                }
                )
            }
            ;
            Adc = function({tnb: a, resultType: b, apply: c}, d) {
                const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                if (e.length)
                    throw Error(`too few arguments (missing ${e})`);
                const f = Jdc(a, (g, h) => d[h].as(g));
                return new Z_(b,g => {
                    const h = bf(f, $_(g));
                    return () => {
                        var k = bf(h, Vcc);
                        return c(k)
                    }
                }
                )
            }
            ;
            Y_ = function(a, b) {
                const c = Ucc(b);
                return new Z_(a, () => c)
            }
            ;
            xdc = function({itemType: a, Qnb: b, resultType: c, reduce: d}, e, f) {
                const g = f.as([a], b)
                  , h = e.as(X_.AY(a));
                return new Z_(c,k => {
                    const l = h(k)
                      , m = g(k)
                      , n = Idc(p => {
                        p = p.map(Ucc);
                        return [p, p.map(m)]
                    }
                    );
                    return () => {
                        const [p,q] = n(l());
                        return d(p, q)
                    }
                }
                )
            }
            ;
            Fdc = function(a, b) {
                const c = a.evaluate;
                return new Z_(a.type,d => c(b(d)))
            }
            ;
            mdc = function(a, b, c) {
                const d = b.map(f => f[0])
                  , e = b.map(f => f[1]);
                return Ycc(e, f => c(ldc(a, new Map(b))).map( (g, h) => new Kdc(f,g,k => (...l) => {
                    const m = new Map(d.map( (n, p) => [n, l[p]]));
                    return h(new V_(new Map(m),k))
                }
                )))
            }
            ;
            Hdc = function(a, b) {
                switch (b.length) {
                case 0:
                    return a;
                case 1:
                    const [c] = b;
                    return () => a(c());
                case 2:
                    const [d,e] = b;
                    return () => a(d(), e());
                default:
                    return () => {
                        var f = b.map(Vcc);
                        return a(...f)
                    }
                }
            }
            ;
            Idc = function(a) {
                let b;
                return (...c) => {
                    if (b && b.Whb.length === c.length && b.Whb.every( (e, f) => a0.Dg(e, c[f])))
                        return b.v;
                    const d = a(...c);
                    b = {
                        Whb: c,
                        v: d
                    };
                    return d
                }
            }
            ;
            Jdc = function(a, b) {
                return bf(a, b)
            }
            ;
            Gdc = function(a, b) {
                return a.map(b)
            }
            ;
            Mdc = function(a, b, c) {
                return new Ldc(a,b,c)
            }
            ;
            Ndc = function(a, b) {
                return [...a].map(b)[Symbol.iterator]()
            }
            ;
            Pdc = function(a, b, c) {
                return new Odc(a,b,c)
            }
            ;
            b0 = function(a, b, c, d) {
                if (d == null)
                    throw a.error(b.GM(c), "not found");
                return d
            }
            ;
            dec = function(a) {
                function b(r) {
                    return m[r.kind](r)
                }
                const c = a.types
                  , d = a.values;
                class e {
                    static of(r, t, v, w, y, B) {
                        return new e(r,v,w,Qdc(y, Rdc(t)),Sdc(B, Rdc(t)))
                    }
                    map(r) {
                        return r(this)
                    }
                    validate(r) {
                        return r ? new e(this.dataType,this.bea,this.Ada,Tdc(this.decode, r),Qdc(this.encode, r)) : this
                    }
                    constructor(r, t, v, w, y) {
                        this.dataType = r;
                        this.bea = t;
                        this.Ada = v;
                        this.decode = w;
                        this.encode = y
                    }
                }
                const f = e.of({
                    kind: 0
                }, "string", c.string, r => r, (r, t, v) => v.value, (r, t, v) => ({
                    type: "string",
                    value: v
                }))
                  , g = e.of({
                    kind: 1
                }, "boolean", c.Cd, r => r, (r, t, v) => v.value, (r, t, v) => ({
                    type: "boolean",
                    value: v
                }))
                  , h = e.of({
                    kind: 2
                }, "double", c.number, r => r, (r, t, v) => v.value, (r, t, v) => ({
                    type: "double",
                    value: v
                })).validate( (r, t, v) => {
                    if (!Number.isFinite(v))
                        throw r.error(t, `number is not finite: ${v}`);
                }
                )
                  , k = e.of({
                    kind: 3
                }, "int32", c.number, r => r, (r, t, v) => v.value, (r, t, v) => ({
                    type: "int32",
                    value: v
                })).validate( (r, t, v) => {
                    if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                        throw r.error(t, `number is not an int32: ${v}`);
                }
                )
                  , l = {
                    FontRef: e.of({
                        kind: 7,
                        name: "FontRef"
                    }, "ref", c.instance("FontRef"), r => d.instance("FontRef", r), c0("font"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    MediaRef: e.of({
                        kind: 7,
                        name: "MediaRef"
                    }, "ref", c.instance("MediaRef"), r => d.instance("MediaRef", r), c0("media"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    VideoRef: e.of({
                        kind: 7,
                        name: "VideoRef"
                    }, "ref", c.instance("VideoRef"), r => d.instance("VideoRef", r), c0("video"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    AudioRef: e.of({
                        kind: 7,
                        name: "AudioRef"
                    }, "ref", c.instance("AudioRef"), r => d.instance("AudioRef", r), c0("audio"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    EmbedRef: e.of({
                        kind: 7,
                        name: "EmbedRef"
                    }, "ref", c.instance("EmbedRef"), r => d.instance("EmbedRef", r), c0("embed"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    SceneRef: e.of({
                        kind: 7,
                        name: "SceneRef"
                    }, "ref", c.instance("SceneRef"), r => d.instance("SceneRef", r), c0("scene"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    BlueprintRef: e.of({
                        kind: 7,
                        name: "BlueprintRef"
                    }, "ref", c.instance("BlueprintRef"), r => d.instance("BlueprintRef", r), c0("blueprint"), (r, t, v) => ({
                        type: "ref",
                        value: v
                    })),
                    Fill: e.of({
                        kind: 7,
                        name: "Fill"
                    }, "fill", c.instance("Fill"), r => d.instance("Fill", r), (r, t, v) => v.value, (r, t, v) => ({
                        type: "fill",
                        value: v
                    })),
                    Stroke: e.of({
                        kind: 7,
                        name: "Stroke"
                    }, "stroke", c.instance("Stroke"), r => d.instance("Stroke", r), (r, t, v) => v.value, (r, t, v) => ({
                        type: "stroke",
                        value: v
                    })),
                    Richtext2: e.of({
                        kind: 7,
                        name: "Richtext2"
                    }, "text2", c.instance("Richtext2"), r => d.instance("Richtext2", r), (r, t, v) => v.value, (r, t, v) => ({
                        type: "text2",
                        value: v
                    }))
                }
                  , m = {
                    [0]: r => f.validate(Udc(r.NO)),
                    [1]: () => g,
                    [2]: r => h.validate(Vdc(r.range)),
                    [3]: r => k.validate(Vdc(r.range)),
                    [4]: r => e.of({
                        kind: 4,
                        values: r.values
                    }, Wdc, c.primitive, t => t, (t, v, w) => w.value, (t, v, w) => {
                        a: switch (typeof w) {
                        case "string":
                            t = {
                                type: "string",
                                value: w
                            };
                            break a;
                        case "boolean":
                            t = {
                                type: "boolean",
                                value: w
                            };
                            break a;
                        case "number":
                            t = {
                                type: "int32",
                                value: w
                            };
                            break a;
                        default:
                            throw new A(w);
                        }
                        return t
                    }
                    ).validate(Xdc(r.values)),
                    [5]: r => {
                        const {dataType: t, bea: v, Ada: w, decode: y, encode: B} = b(r.itemType);
                        return e.of({
                            kind: 5,
                            itemType: t
                        }, "list", c.array(v), D => d.array(D.map(w)), (D, C, H) => H.value.toArray().map( (J, M) => y(D, C.JS(M), J)), (D, C, H) => ({
                            type: "list",
                            value: H.map( (J, M) => B(D, C.JS(M), J))
                        }))
                    }
                    ,
                    [6]: r => {
                        const {dataType: t, bea: v, Ada: w, decode: y, encode: B} = b(r.itemType);
                        return e.of({
                            kind: 6,
                            itemType: t
                        }, "dict", c.map(c.string, v), D => d.map(md(D, w)), (D, C, H) => md(H.value.Xl(), (J, M) => y(D, C.u8(M), J)), (D, C, H) => ({
                            type: "dict",
                            value: md(H, (J, M) => B(D, C.u8(M), J))
                        }))
                    }
                    ,
                    [7]: r => l[r.name],
                    [8]: r => {
                        const {dataType: t, decode: v, encode: w} = b(r.itemType);
                        return e.of({
                            kind: 8,
                            itemType: t
                        }, "list", c.undefined, () => {}
                        , (y, B, D) => Pdc(D.value, C => w(y, B.JS("*"), C), Ydc(v, y, B.JS("*"))), (y, B, D) => ({
                            type: "list",
                            value: D.map( (C, H) => w(y, B.JS(H), C))
                        }))
                    }
                    ,
                    [9]: r => {
                        const {dataType: t, decode: v, encode: w} = b(r.itemType);
                        return e.of({
                            kind: 9,
                            itemType: t
                        }, "dict", c.undefined, () => {}
                        , (y, B, D) => Mdc(D.value, C => w(y, B.u8("*"), C), Ydc(v, y, B.JS("*"))), (y, B, D) => ({
                            type: "dict",
                            value: md(D, (C, H) => w(y, B.u8(H), C))
                        }))
                    }
                    ,
                    [10]: r => {
                        const {decode: t, encode: v} = p.G4a(r.fields);
                        return e.of({
                            kind: 10,
                            fields: r.fields
                        }, "dict", c.undefined, () => {}
                        , t, v)
                    }
                    ,
                    [11]: r => {
                        function t(J, M, O, Q) {
                            O = O.get(Q);
                            if (O == null)
                                throw J.error(M, `unknown case for discriminator value: ${Q}`);
                            return O
                        }
                        const v = r.rYa;
                        r = r.Gg;
                        var w = Object.keys(v);
                        u(w.length >= 1, "missing discriminator props");
                        u(w.length <= 1, "too many discriminator props: {}", w);
                        const y = w[0];
                        u(r.length >= 1, "discriminated union has no cases");
                        w = new Map;
                        for (const J of r) {
                            const M = J.fields[y].type.values
                              , O = b(J);
                            for (const Q of M)
                                u(!w.has(Q), "discriminator values are not unique across cases: {}", Q),
                                w.set(Q, O)
                        }
                        const {decode: B, encode: D} = b({
                            kind: 4,
                            values: new Set(w.keys())
                        })
                          , C = md(w, J => J.decode)
                          , H = md(w, J => J.encode);
                        return e.of({
                            kind: 11,
                            rYa: v,
                            Gg: r
                        }, "dict", c.undefined, () => {}
                        , (J, M, O) => {
                            var Q = b0(J, M, "k", O.value.get("k"));
                            O = b0(J, M, "v", O.value.get("v"));
                            Zdc(J, M, "dict", O);
                            Q = B(J, M, Q);
                            return t(J, M, C, Q)(J, M, O)
                        }
                        , (J, M, O) => {
                            const Q = O[y]
                              , R = t(J, M, H, Q);
                            return {
                                type: "dict",
                                value: new Map([["k", D(J, M, Q)], ["v", R(J, M, O)]])
                            }
                        }
                        )
                    }
                }
                  , n = Symbol("$impl");
                class p {
                    static G4a(r) {
                        r = bf(r, w => q.of(w));
                        const t = bf(r, w => w.yQb())
                          , v = Object.entries(r);
                        return {
                            RL: new Map(v.map( ([,w]) => w.tQb())),
                            AQb: w => {
                                const y = w[n];
                                return new Map(v.map( ([,B]) => B.BQb(y)))
                            }
                            ,
                            decode: (w, y, B) => {
                                const D = Object.create(null, t);
                                Object.defineProperty(D, n, {
                                    enumerable: !1,
                                    writable: !1,
                                    value: new p(w,y,B.value)
                                });
                                return D
                            }
                            ,
                            encode: (w, y, B) => {
                                const D = v.map( ([C,H]) => H.encode(w, y, B[C]));
                                return {
                                    type: "dict",
                                    value: new Map(D.filter(__c.qb))
                                }
                            }
                        }
                    }
                    UCa(r, t) {
                        const v = b0(this.e, this.p, t, this.data.get(t));
                        return $dc(this.YZa, r.decode, this.e, this.p.GM(t), v)
                    }
                    RCa(r, t) {
                        const v = this.data.get(t);
                        if (v != null)
                            return $dc(this.YZa, r.decode, this.e, this.p.GM(t), v)
                    }
                    tdb(r, t, v) {
                        this.data.set(t, r.encode(this.e, this.p.GM(t), v))
                    }
                    mdb(r, t, v) {
                        v != null ? this.data.set(t, r.encode(this.e, this.p.GM(t), v)) : this.data.delete(t)
                    }
                    constructor(r, t, v) {
                        this.e = r;
                        this.p = t;
                        this.data = v;
                        this.YZa = new WeakMap;
                        this.hUa = new Map;
                        this.oyb = aec(this.hUa, (w, y) => {
                            const B = this;
                            return {
                                get ref() {
                                    return B.UCa(y, w)
                                },
                                set(D) {
                                    B.tdb(y, w, D)
                                }
                            }
                        }
                        );
                        this.byb = aec(this.hUa, (w, y) => {
                            const B = this;
                            return {
                                get ref() {
                                    return B.RCa(y, w)
                                },
                                set(D) {
                                    B.mdb(y, w, D)
                                }
                            }
                        }
                        )
                    }
                }
                class q {
                    static of(r) {
                        return new q(r,b(r.type))
                    }
                    tQb() {
                        const r = this.key
                          , t = this.Kb
                          , v = this.type;
                        switch (t.NF) {
                        case 0:
                            return [r, v.bea];
                        case 1:
                            return [r, c.optional(v.bea)];
                        default:
                            throw new A(t.NF);
                        }
                    }
                    BQb(r) {
                        const t = this.key
                          , v = this.Kb
                          , w = this.type;
                        switch (v.NF) {
                        case 0:
                            return [t, () => w.Ada(r.UCa(w, t))];
                        case 1:
                            return [t, () => {
                                const y = r.RCa(w, t);
                                return y != null ? w.Ada(y) : void 0
                            }
                            ];
                        default:
                            throw new A(v.NF);
                        }
                    }
                    yQb() {
                        const r = this.key;
                        var t = this.Kb;
                        const v = this.type;
                        if (Qbc(v.dataType) && t.XLa === 1) {
                            switch (t.NF) {
                            case 0:
                                t = function() {
                                    return this[n].oyb(r, v)
                                }
                                ;
                                break;
                            case 1:
                                t = function() {
                                    return this[n].byb(r, v)
                                }
                                ;
                                break;
                            default:
                                throw new A(t.NF);
                            }
                            return {
                                enumerable: !0,
                                get: t
                            }
                        }
                        let w;
                        switch (t.NF) {
                        case 0:
                            w = {
                                enumerable: !0,
                                get() {
                                    return this[n].UCa(v, r)
                                },
                                set(y) {
                                    this[n].tdb(v, r, y)
                                }
                            };
                            break;
                        case 1:
                            w = {
                                enumerable: !0,
                                get() {
                                    return this[n].RCa(v, r)
                                },
                                set(y) {
                                    this[n].mdb(v, r, y)
                                }
                            };
                            break;
                        default:
                            throw new A(t.NF);
                        }
                        switch (t.XLa) {
                        case 0:
                            w.set = void 0;
                            break;
                        case 1:
                            break;
                        default:
                            throw new A(t.XLa);
                        }
                        return w
                    }
                    encode(r, t, v) {
                        const w = this.key
                          , y = this.Kb
                          , B = this.type;
                        switch (y.NF) {
                        case 0:
                            return [w, B.encode(r, t.GM(w), b0(r, t, w, v))];
                        case 1:
                            return v != null ? [w, B.encode(r, t.GM(w), v)] : void 0;
                        default:
                            throw new A(y.NF);
                        }
                    }
                    constructor(r, t) {
                        this.Kb = r;
                        this.type = t;
                        r = r.key;
                        u(r > 0 && Number.isInteger(r));
                        if (r <= 52)
                            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[r - 1];
                        else {
                            for (t = ""; r > 0; )
                                r--,
                                t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[r % 52] + t,
                                r = Math.floor(r / 52);
                            r = t
                        }
                        this.key = r
                    }
                }
                return (r, t) => {
                    const v = new bec(r)
                      , w = new cec
                      , {RL: y, AQb: B, decode: D, encode: C} = p.G4a(t);
                    return {
                        RL: y,
                        decode: H => {
                            H = D(v, w, {
                                type: "dict",
                                value: H
                            });
                            return {
                                vKa: B(H),
                                data: H
                            }
                        }
                        ,
                        encode: H => C(v, w, H).value
                    }
                }
            }
            ;
            aec = function(a, b) {
                return (c, ...d) => {
                    a.has(c) || a.set(c, b(c, ...d));
                    return a.get(c)
                }
            }
            ;
            Ydc = function(a, b, c) {
                const d = new WeakMap;
                return e => $dc(d, a, b, c, e)
            }
            ;
            $dc = function(a, b, c, d, e) {
                let f = a.get(e);
                f == null && (f = b(c, d, e),
                a.set(e, f));
                return f
            }
            ;
            Qdc = function(a, b) {
                return (c, d, e) => {
                    b(c, d, e);
                    return a(c, d, e)
                }
            }
            ;
            Tdc = function(a, b) {
                return (c, d, e) => {
                    e = a(c, d, e);
                    b(c, d, e);
                    return e
                }
            }
            ;
            Sdc = function(a, b) {
                var c = eec();
                return (d, e, f) => {
                    f = a(d, e, f);
                    b(d, e, f);
                    c(d, e, f);
                    return f
                }
            }
            ;
            Zdc = function(a, b, c, d) {
                if (d.type !== c)
                    throw a.error(b, `type error: expected ${c}, was ${d.type}`);
            }
            ;
            Rdc = function(a) {
                return typeof a === "string" ? (b, c, d) => Zdc(b, c, a, d) : (b, c, d) => {
                    if (!a.has(d.type))
                        throw b.error(c, `type error: expected one of ${[...a].join(" or ")}, was ${d.type}`);
                }
            }
            ;
            eec = function() {
                return (a, b, c) => {
                    if (typeof c.value !== fec[c.type])
                        throw a.error(b, `type error: expected ${c.type}, was ${typeof c.value}`);
                }
            }
            ;
            Xdc = function(a) {
                return (b, c, d) => {
                    if (!a.has(d))
                        throw b.error(c, `expected one of ${[...a].join(" or ")}, was ${d}`);
                }
            }
            ;
            Vdc = function(a) {
                if (a) {
                    var b = a.min
                      , c = a.max;
                    u(b == null || c == null || b <= c);
                    return (d, e, f) => {
                        if (b != null && f < b)
                            throw d.error(e, `value below min ${b}: ${f}`);
                        if (c != null && f > c)
                            throw d.error(e, `value above max ${b}: ${f}`);
                    }
                }
            }
            ;
            Udc = function(a) {
                if (a)
                    return (b, c, d) => {
                        if (!a.test(d))
                            throw b.error(c, `value does not match regex ${a}: '${d}'`);
                    }
            }
            ;
            c0 = function(a) {
                return (b, c, d) => {
                    if (d.value.type !== a)
                        throw b.error(c, `expected ${gec[a]} resource type, got ${gec[d.value.type]}`);
                    return {
                        ...d.value,
                        type: a
                    }
                }
            }
            ;
            d0 = function(a) {
                return typeof a === "function"
            }
            ;
            iec = function(a) {
                return {
                    get: () => a,
                    set: hec
                }
            }
            ;
            jec = function(...a) {
                const b = new Set
                  , c = new Set;
                for (const d of a)
                    for (const e in d)
                        b.has(e) ? c.add(e) : b.add(e);
                if (c.size)
                    throw Error(`keys not disjoint: ${[...c].map(d => `'${d}'`).join(", ")}`);
            }
            ;
            kec = function(a, b) {
                return () => b(bf(a, c => c()))
            }
            ;
            mec = function(a) {
                u(a.length === 1);
                let b;
                return c => {
                    if (b != null && lec(b[0], c))
                        return b[1];
                    const d = a(c);
                    b = [c, d];
                    return d
                }
            }
            ;
            lec = function(a, b) {
                if (a === b)
                    return !0;
                if (a == null || b == null)
                    return !1;
                const c = Object.keys(a)
                  , d = Object.keys(b);
                if (c.length !== d.length)
                    return !1;
                for (const e of c)
                    if (a[e] !== b[e])
                        return !1;
                return !0
            }
            ;
            oec = function(a) {
                var b = nec;
                return {
                    z4: b({
                        aq: a.z4,
                        args: {},
                        Ge: {
                            W: {
                                image: void 0,
                                video: void 0,
                                Ta: void 0
                            },
                            attributes: {
                                ym: void 0,
                                color: void 0,
                                za: void 0,
                                locked: void 0,
                                yg: void 0,
                                wl: void 0,
                                cd: void 0,
                                flipX: void 0,
                                flipY: void 0
                            }
                        }
                    }),
                    Gua: b({
                        aq: a.Gua,
                        args: {},
                        Ge: {
                            W: {
                                fill: void 0
                            },
                            attributes: {
                                weight: void 0,
                                color: void 0,
                                Uc: void 0,
                                Ce: void 0
                            }
                        }
                    }),
                    $W: b({
                        aq: a.$W,
                        args: {
                            d: void 0
                        },
                        Ge: {
                            W: {
                                fill: void 0,
                                stroke: void 0
                            },
                            attributes: {
                                O: void 0
                            }
                        }
                    }),
                    E4: b({
                        aq: a.E4,
                        args: {},
                        Ge: {
                            W: {
                                fill: void 0,
                                stroke: void 0
                            },
                            attributes: {
                                ...e0,
                                O: void 0
                            }
                        }
                    }),
                    Aua: b({
                        aq: a.Aua,
                        args: {},
                        Ge: {
                            W: {
                                ub: void 0,
                                resizeMode: void 0,
                                slice: void 0,
                                kb: void 0
                            },
                            attributes: {
                                ...e0,
                                Xj: void 0,
                                viewBox: void 0
                            }
                        }
                    }),
                    ifa: b({
                        aq: a.ifa,
                        args: {},
                        Ge: {
                            W: {
                                text: void 0
                            },
                            attributes: {
                                ...e0,
                                TA: void 0,
                                Kh: void 0,
                                Ka: void 0,
                                I: void 0,
                                N: void 0,
                                Kf: void 0
                            }
                        }
                    }),
                    EQa: b({
                        aq: a.EQa,
                        args: {
                            url: void 0,
                            I: void 0,
                            N: void 0
                        },
                        Ge: {
                            W: {},
                            attributes: e0
                        }
                    })
                }
            }
            ;
            f0 = function(a, b) {
                return c => b({
                    ...a,
                    ...c
                })
            }
            ;
            tec = function() {
                return oec({
                    z4: f0(g0, a => Sd(__c.dO, a)),
                    Gua: f0(pec, a => Sd(__c.TA, a)),
                    $W: f0(qec, a => Sd(__c.LR, a)),
                    E4: f0(h0, a => Sd(__c.OD, {
                        ...a,
                        id: PD.generate()
                    })),
                    Aua: f0(i0, a => Sd(__c.hH, {
                        ...a,
                        kb: [],
                        viewBox: {
                            top: 0,
                            left: 0,
                            width: 1,
                            height: 1
                        },
                        id: PD.generate()
                    })),
                    ifa: f0(rec, a => Sd(__c.$R, {
                        ...a,
                        id: PD.generate()
                    })),
                    EQa: f0(sec, a => Sd(__c.aS, {
                        ...a,
                        id: PD.generate()
                    }))
                })
            }
            ;
            xec = function() {
                return (new uec({})).add( (a, b) => ({
                    FontRef: new a("FontRef",{
                        id: b.string,
                        version: b.number
                    },c => ({
                        type: "font",
                        id: c.id,
                        version: c.version
                    }))
                })).add( (a, b) => ({
                    MediaRef: new a("MediaRef",{
                        id: b.string,
                        version: b.number
                    },c => ({
                        type: "media",
                        id: c.id,
                        version: c.version
                    }))
                })).add( (a, b) => ({
                    VideoRef: new a("VideoRef",{
                        id: b.string
                    },c => ({
                        type: "video",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    AudioRef: new a("AudioRef",{
                        id: b.string
                    },c => ({
                        type: "audio",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    EmbedRef: new a("EmbedRef",{
                        id: b.string
                    },c => ({
                        type: "embed",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    SceneRef: new a("SceneRef",{
                        id: b.string
                    },c => ({
                        type: "scene",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    BlueprintRef: new a("BlueprintRef",{
                        id: b.string,
                        version: b.number
                    },c => ({
                        type: "blueprint",
                        id: c.id,
                        version: c.version
                    }))
                })).add( (a, b) => ({
                    Fill: new a("Fill",{
                        color: b.string
                    },c => __c.dO.create({
                        ...g0,
                        color: c.color
                    }))
                })).add( (a, b) => ({
                    Stroke: new a("Stroke",{
                        color: b.string,
                        weight: b.number,
                        Uc: b.array(b.number),
                        Ce: b.Cd
                    },c => __c.TA.create({
                        ...pec,
                        color: c.color,
                        weight: c.weight,
                        Uc: c.Uc.items,
                        Ce: c.Ce
                    }))
                })).add( (a, b) => ({
                    Richtext2: new a("Richtext2",{
                        axb: b.array(b.P({
                            fb: b.string,
                            attrs: b.map(b.string, b.string)
                        }))
                    },c => {
                        c = c.axb;
                        const d = __c.qk.Ib();
                        c.items.forEach(e => {
                            const f = e.fields.fb;
                            d.attrs(__c.ug(e.fields.attrs.items));
                            d.fb(f)
                        }
                        );
                        return __c.qk.create(d.build())
                    }
                    )
                })).add( (a, b) => ({
                    Path: new a("Path",{
                        d: b.string,
                        fill: b.instance("Fill"),
                        stroke: b.union(b.instance("Stroke"), b.undefined)
                    },c => {
                        const d = c.stroke
                          , e = c.fill;
                        c = __c.LR.create({
                            ...qec,
                            d: c.d,
                            fill: g0
                        });
                        Object.defineProperties(c, {
                            fill: {
                                value: e.instance
                            },
                            stroke: {
                                value: vec(d)
                            }
                        });
                        return c
                    }
                    )
                })).add( (a, b) => ({
                    RectElement: new a("RectElement",{
                        top: b.number,
                        left: b.number,
                        width: b.number,
                        height: b.number,
                        rotation: b.union(b.number, b.undefined),
                        fill: b.instance("Fill"),
                        O: b.union(b.array(b.number), b.undefined),
                        stroke: b.union(b.instance("Stroke"), b.undefined)
                    },c => {
                        const d = c.stroke
                          , e = __c.OD.create({
                            ...h0,
                            id: PD.generate(),
                            top: c.top,
                            left: c.left,
                            width: c.width,
                            height: c.height,
                            rotation: c.rotation ?? h0.rotation,
                            fill: g0,
                            O: c.O?.items ?? h0.O
                        });
                        Object.defineProperties(e, {
                            fill: {
                                value: c.fill.instance
                            },
                            stroke: {
                                value: vec(d)
                            }
                        });
                        return e
                    }
                    )
                })).add( (a, b) => ({
                    ShapeElement: new a("ShapeElement",{
                        top: b.number,
                        left: b.number,
                        width: b.number,
                        height: b.number,
                        rotation: b.union(b.number, b.undefined),
                        za: b.union(b.number, b.undefined),
                        viewBox: b.P({
                            top: b.number,
                            left: b.number,
                            width: b.number,
                            height: b.number
                        }),
                        kb: b.array(b.instance("Path"))
                    },c => {
                        const d = __c.hH.create({
                            ...i0,
                            id: PD.generate(),
                            top: c.top,
                            left: c.left,
                            width: c.width,
                            height: c.height,
                            rotation: c.rotation ?? i0.rotation,
                            za: c.za ?? i0.za,
                            kb: [],
                            viewBox: c.viewBox.fields
                        });
                        Object.defineProperties(d, {
                            kb: {
                                value: new wec(c.kb.items.map(e => j0( () => e.instance)))
                            }
                        });
                        return d
                    }
                    )
                }))
            }
            ;
            vec = function(a) {
                return a && {
                    ref: a.instance,
                    set() {
                        throw Error("Replacing of stroke on a model unit is not yet supported");
                    }
                }
            }
            ;
            Bcc = function(a, b, c) {
                return bf(b, d => (...e) => {
                    const {data: f, S: {width: g, height: h}} = d(...e);
                    e = c.G.encode(f.G);
                    const k = c.document.RL.size > 0 ? c.document.encode(f.document) : void 0;
                    return {
                        Yc: {
                            ...__c.zEb,
                            app: {
                                id: a,
                                version: 1
                            }
                        },
                        j0b: k,
                        Wd: e,
                        lf: {
                            width: g,
                            height: h
                        }
                    }
                }
                )
            }
            ;
            k0 = function() {
                throw Error("ref not found");
            }
            ;
            zec = function(a, b) {
                return class extends yec {
                    componentDidCatch(c) {
                        a.error(c);
                        this.setState({
                            hasError: !0
                        })
                    }
                    render() {
                        return this.state.hasError ? m_(__c.st, {
                            background: "criticalLow",
                            width: "full",
                            height: "full",
                            padding: "0.25u",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            role: "alert",
                            children: m_(__c.ux, {
                                size: "xsmall",
                                alignment: "center",
                                children: __c.K("Q6XSow")
                            })
                        }) : m_(b, {
                            ...this.props
                        })
                    }
                    constructor(...c) {
                        super(...c);
                        this.state = {
                            hasError: !1
                        }
                    }
                }
            }
            ;
            Lcc = function(a, b, c) {
                const d = c.G
                  , e = (c = c.K6) ? new Aec(c) : void 0;
                c = e ? f => e.Kc(f.G) : void 0;
                switch (d.type) {
                case 0:
                    a = Bec(a, d, b, c);
                    break;
                case 1:
                    a = Cec(a, d, b, c);
                    break;
                default:
                    throw new A(d);
                }
                return {
                    cvb: a,
                    IN: e
                }
            }
            ;
            Mcc = function(a, b, c, d) {
                c = c.email;
                if (c != null) {
                    var e = d ? g => d.Kc(g.G) : void 0
                      , f = c.type;
                    switch (f) {
                    case 2:
                        return Dec(a, c, b, e);
                    default:
                        throw new A(f);
                    }
                }
            }
            ;
            Ncc = function(a, b) {
                return c => {
                    if (b)
                        return c = a.G.decode(c.G.Wd).data,
                        {
                            type: b.type,
                            PV: typeof b.PV === "function" ? b.PV(c) : b.PV,
                            name: typeof b.name === "function" ? b.name(c) : b.name
                        }
                }
            }
            ;
            Bec = function(a, b, c, d) {
                const e = b.Ly
                  , {Vva: f, N6: g, Kn: h, YJa: k} = Eec(a, c);
                return typeof e === "object" ? (b = a.D3.types,
                b = b.AY(b.union(b.instance("RectElement"), b.instance("ShapeElement"))),
                Fec(a, f, h, b, e, l => new Gec( () => l().map(m => m.instance)), k)) : {
                    type: 0,
                    Ly: (l, m) => {
                        const {document: n, G: p} = h.decode(f(l)).data;
                        m = g(l, m);
                        l = d ? {
                            document: n,
                            G: p,
                            local: d(l)
                        } : {
                            document: n,
                            G: p,
                            local: void 0
                        };
                        return e(l, m)
                    }
                    ,
                    qna: l0(k),
                    PN: m0(k),
                    WS: n0(k),
                    O1: o0(k)
                }
            }
            ;
            Cec = function(a, b, c, d) {
                const e = b.Component
                  , {Vva: f, N6: g, Kn: h, YJa: k} = Eec(a, c);
                return {
                    type: 1,
                    qna: l0(k),
                    PN: m0(k),
                    WS: n0(k),
                    O1: o0(k),
                    Component: zec(a.J, p0( ({model: l, ff: m, yUa: n, Oqa: p}) => {
                        n = Hec(a.ue, n);
                        const q = l_( () => {
                            const {document: r, G: t} = h.decode(f(l)).data;
                            return d ? {
                                document: r,
                                G: t,
                                local: d(l)
                            } : {
                                document: r,
                                G: t,
                                local: void 0
                            }
                        }
                        , [l]);
                        m = g(l, m);
                        return m_(e, {
                            data: q,
                            ue: n,
                            ji: m,
                            Oqa: p
                        })
                    }
                    ))
                }
            }
            ;
            Dec = function(a, b, c, d) {
                const e = b.Component
                  , {Vva: f, N6: g, Kn: h, YJa: k} = Eec(a, c);
                return {
                    type: 2,
                    qna: l0(k),
                    PN: m0(k),
                    WS: n0(k),
                    O1: o0(k),
                    Component: zec(a.J, p0( ({model: l, ff: m, scale: n}) => {
                        const p = Iec(a.dub, n)
                          , q = l_( () => {
                            const {document: r, G: t} = h.decode(f(l)).data;
                            return d ? {
                                document: r,
                                G: t,
                                local: d(l)
                            } : {
                                document: r,
                                G: t,
                                local: void 0
                            }
                        }
                        , [l]);
                        m = g(l, m);
                        return m_(e, {
                            data: q,
                            ue: p,
                            scale: n,
                            ji: m
                        })
                    }
                    ))
                }
            }
            ;
            Eec = function(a, b) {
                return {
                    Vva: c => ({
                        document: Jec(a, c),
                        G: c.G.Wd
                    }),
                    N6: (c, d) => a.lUb.N6(c, d),
                    Kn: Tcc(b),
                    YJa: new Kec
                }
            }
            ;
            Fec = function(a, b, c, d, e, f, g) {
                const h = a.Qya(a.D3, c, d).compile(e);
                return {
                    type: 0,
                    Ly: k => ({
                        Pa: f(h(b(k)))
                    }),
                    PN: m0(g),
                    qna: l0(g),
                    WS: n0(g),
                    O1: o0(g)
                }
            }
            ;
            Jec = function(a, b) {
                return a.Fa.Ym.first(c => c.app.id === b.G.Yc.app.id && c.app.version === b.G.Yc.app.version)?.data ?? __c.eS.create(new Map)
            }
            ;
            Lec = function(a, b) {
                return a.dV.get(b.G.Yc.app.id)?.sFb(b)
            }
            ;
            l0 = function(a) {
                return q0(b => {
                    if ((b = a.get(b.G)) && b.size !== 0)
                        return Array.from(b).map(c => c.wka()).reduce( (c, d) => ({
                            width: Math.max(c.width, d.width),
                            height: Math.max(c.height, d.height)
                        }), {
                            width: -Infinity,
                            height: -Infinity
                        })
                }
                )
            }
            ;
            m0 = function(a) {
                return q0( (b, c) => {
                    b = a.get(b);
                    if (!b || b.size === 0)
                        return c;
                    for (const d of b)
                        if (d.PN)
                            return d.PN(c);
                    return c
                }
                )
            }
            ;
            n0 = function(a) {
                return q0(b => (b = a.get(b.G)) && b.size !== 0 ? Array.from(b).flatMap(c => c.WS()) : [])
            }
            ;
            o0 = function(a) {
                return (b, c) => {
                    a.add(b.G, c);
                    return () => a.remove(b.G, c)
                }
            }
            ;
            icc = function(a) {
                return {
                    RL: a.RL,
                    decode: Mec(a.decode),
                    encode: a.encode
                }
            }
            ;
            Mec = function(a) {
                const b = new WeakMap;
                return c => {
                    let d = b.get(c);
                    d || (d = a(c),
                    b.set(c, d));
                    return d
                }
            }
            ;
            Qec = function(a) {
                var b = a.Dta;
                const c = a.pUb
                  , d = a.mUb
                  , e = a.$ya
                  , f = a.D3
                  , g = a.J
                  , h = a.Fa
                  , k = a.Fbb
                  , l = a.gab;
                a = new Nec(a.$n,h);
                const m = new Oec(h,b,f,e,g,a,c,d);
                b = new Pec;
                k && k.vdc(n => Lec(m, n));
                l && l(n => Lec(m, n));
                return {
                    Eea: m,
                    sD: m,
                    expr: b
                }
            }
            ;
            Sec = function(a, b) {
                if (!a)
                    return "Arial, Helvetica, sans-serif";
                const c = __c.Wq(a);
                a = b.find(d => d.id === c.id && d.version === c.version);
                switch (a?.name) {
                case "Arimo":
                case "Arial":
                    return "Arial, Helvetica, sans-serif";
                case "Helvetica":
                case "Helvetica Now":
                    return "Helvetica, Arial, sans-serif";
                case "Times New Roman MT":
                case "Times New Roman":
                    return '"Times New Roman", Times, serif';
                case "Tahoma":
                    return "Tahoma, Geneva, sans-serif";
                case "Trebuchet MS":
                    return '"Trebuchet MS", Helvetica, sans-serif';
                case "Lucida Console":
                    return '"Lucida Console", Monaco, monospace';
                case "Comic Sans":
                    return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
                case "Courier New OS":
                case "Courier New":
                    return '"Courier New", monospace';
                case "Georgia Pro":
                case "Georgia":
                    return "Georgia, serif";
                case "Verdana Pro":
                case "Verdana":
                    return "Verdana, Geneva, sans-serif";
                default:
                    return a?.name ? `${Rec(a.name)}, ${"Arial, Helvetica, sans-serif"}` : "Arial, Helvetica, sans-serif"
                }
            }
            ;
            Rec = function(a) {
                a = a.replace(/["']/g, "");
                return /[\s,]/.test(a) ? `"${a}"` : a
            }
            ;
            Uec = function() {
                ({mi: a} = {
                    mi: []
                });
                var a;
                return ({text: b}) => {
                    const c = Tec(b, a);
                    return m_("span", {
                        style: {
                            ...c,
                            display: "table-cell",
                            width: "100%",
                            height: "100%",
                            verticalAlign: "middle",
                            boxSizing: "border-box"
                        },
                        children: b.stream.Z
                    })
                }
            }
            ;
            Tec = function(a, b) {
                var c = q => [...a.stream.Ei(q)[q]].values().next().value ?? __c.sg.Mb[q]
                  , d = c("font-family");
                b = Sec(d, b);
                d = c("font-size");
                var e = c("color")
                  , f = c("font-weight")
                  , g = c("font-style")
                  , h = c("decoration")
                  , k = c("strikethrough")
                  , l = c("direction")
                  , m = c("text-align")
                  , n = c("leading");
                c = c("tracking");
                const p = [];
                h === "underline" && p.push("underline");
                k === "strikethrough" && p.push("line-through");
                h = p.length > 0 ? p.join(" ") : "none";
                return {
                    color: e,
                    fontSize: `${d}px`,
                    fontWeight: f,
                    fontFamily: b,
                    fontStyle: g === "italic" ? "italic" : "normal",
                    textDecoration: h,
                    direction: l,
                    textAlign: Vec(l, m),
                    lineHeight: `${Wec(n)}em`,
                    letterSpacing: `${Wec(c)}em`
                }
            }
            ;
            Vec = function(a, b) {
                const c = {
                    start: "left",
                    center: "center",
                    end: "right",
                    justify: "justify"
                };
                if (a !== "rtl")
                    return c[b];
                switch (b) {
                case "start":
                    return "end";
                case "end":
                    return "start";
                default:
                    return c[b]
                }
            }
            ;
            Wec = function(a) {
                if (!Number.isFinite(a))
                    throw Error("Invalid milliEms value");
                return a / 1E3
            }
            ;
            Xec = function(a) {
                a.zQ && (a.zQ(),
                a.zQ = null);
                const b = a.props.xtb;
                b.forEach(c => {
                    window.addEventListener(c, a.TRa)
                }
                );
                a.zQ = () => {
                    b.forEach(c => {
                        window.removeEventListener(c, a.TRa)
                    }
                    )
                }
            }
            ;
            afc = function(a) {
                const b = v_(function(c) {
                    const [{store: d, Ma: e}] = w_( () => {
                        const f = new Yec
                          , g = new Zec(f);
                        return {
                            store: f,
                            Ma: g
                        }
                    }
                    );
                    return m_($ec, {
                        Aaa: e.reset,
                        children: m_(__c.rZb, {
                            WAb: e,
                            XAb: d,
                            n3a: a.Iu.contains(c.url),
                            children: ({Sj: f}) => c.children({
                                Sj: f
                            })
                        })
                    })
                });
                return v_(c => c.Vob && a.$a?.status !== 2 ? m_(b, {
                    ...c
                }) : c.children({
                    Sj: !1
                }))
            }
            ;
            bfc = function(a) {
                return p0(function(b) {
                    return m_("div", {
                        className: "gcYy_A PYuKbg",
                        children: m_(__c.by, {
                            Y7: "both",
                            children: ({width: c, height: d}) => m_(a.rj, {
                                fill: b.fill,
                                Tb: c,
                                wc: d,
                                ne: void 0,
                                animation: void 0,
                                nG: !1,
                                da: void 0,
                                ia: void 0
                            })
                        })
                    })
                })
            }
            ;
            dfc = function(a) {
                const b = a.Ca
                  , c = a.nka
                  , d = e => {
                    e = __c.Wq(e);
                    b.Uy([e], {
                        Gl: !0
                    });
                    return b.Oba(e)
                }
                ;
                return p0(function(e) {
                    var f = e.cCa;
                    const g = e.fontWeight
                      , h = e.Owa
                      , k = e.Ec
                      , l = e.vnb
                      , m = e.ariaInvalid
                      , n = e.disabled
                      , p = e.id
                      , q = e.name
                      , r = e.inputMode
                      , t = e.onBlur
                      , v = e.onFocus
                      , w = e.onChange
                      , y = e.padding
                      , B = e.placeholder
                      , D = e.R9a
                      , C = e.readOnly
                      , H = e.outline
                      , J = e.paddingInlineEnd
                      , M = e.type
                      , O = e.value
                      , Q = e.width;
                    e = {
                        boxSizing: e.boxSizing,
                        color: e.Wi,
                        fontSize: e.fontSize,
                        backgroundColor: e.backgroundColor,
                        borderStyle: e.borderStyle,
                        borderRadius: e.borderRadius,
                        borderWidth: e.borderWidth,
                        fontFamily: f && d(f),
                        fontWeight: g && __c.cr(g),
                        padding: y,
                        paddingInlineEnd: J,
                        outline: H,
                        width: Q
                    };
                    [f] = w_( () => c?.Byb());
                    return m_("div", {
                        ref: f?.fj,
                        className: "BHOPhg PYuKbg",
                        children: m_("input", {
                            "aria-describedby": k,
                            "aria-errormessage": l,
                            "aria-invalid": m,
                            className: cfc(["_6Yde8g", D && "sR0SUA"]),
                            disabled: n,
                            id: p,
                            name: q,
                            inputMode: r,
                            onBlur: t,
                            onFocus: v,
                            onChange: w,
                            placeholder: B,
                            readOnly: C,
                            type: M,
                            value: O,
                            style: {
                                ...e,
                                "--srRiKA": D,
                                "--oiOG3Q": h?.default,
                                "--oGOcXA": h?.Jg,
                                "--UBd2ow": h?.focus
                            }
                        })
                    })
                })
            }
            ;
            efc = function() {
                return () => m_(__c.OV, {
                    mediaType: "embed",
                    failed: !1
                })
            }
            ;
            ffc = function(a) {
                return p0(function(b) {
                    return m_("div", {
                        className: "oUJNhQ PYuKbg",
                        children: m_(a.ke, {
                            text: b.text,
                            animation: void 0,
                            xd: "middle",
                            pa: void 0,
                            hb: void 0,
                            Ke: [],
                            writingMode: 1
                        })
                    })
                })
            }
            ;
            gfc = function(a) {
                const b = a.Ca
                  , c = a.nka
                  , d = e => {
                    e = __c.Wq(e);
                    b.Uy([e], {
                        Gl: !0
                    });
                    return b.Oba(e)
                }
                ;
                return p0(function(e) {
                    var f = e.cCa;
                    const g = e.fontSize
                      , h = e.fontWeight
                      , k = e.Owa
                      , l = e.Ec
                      , m = e.vnb
                      , n = e.ariaInvalid
                      , p = e.disabled
                      , q = e.id
                      , r = e.name
                      , t = e.onBlur
                      , v = e.onFocus
                      , w = e.onChange
                      , y = e.padding
                      , B = e.paddingInlineEnd
                      , D = e.placeholder
                      , C = e.R9a
                      , H = e.readOnly
                      , J = e.resize
                      , M = e.outline
                      , O = e.rows
                      , Q = e.value
                      , R = e.width
                      , U = e.whiteSpace
                      , W = e.wordBreak;
                    e = {
                        backgroundColor: e.backgroundColor,
                        borderRadius: e.borderRadius,
                        borderStyle: e.borderStyle,
                        borderWidth: e.borderWidth,
                        boxSizing: e.boxSizing,
                        color: e.Wi,
                        fontFamily: f && d(f),
                        fontSize: g,
                        fontWeight: h && __c.cr(h),
                        outline: M,
                        padding: y,
                        paddingInlineEnd: B,
                        resize: J,
                        whiteSpace: U,
                        width: R,
                        wordBreak: W
                    };
                    [f] = w_( () => c?.Byb());
                    return m_("div", {
                        ref: f?.fj,
                        className: "BHOPhg PYuKbg",
                        children: m_("textarea", {
                            "aria-describedby": l,
                            "aria-errormessage": m,
                            "aria-invalid": n,
                            className: cfc(["_6Yde8g", C && "sR0SUA"]),
                            disabled: p,
                            id: q,
                            name: r,
                            onBlur: t,
                            onFocus: v,
                            onChange: w,
                            placeholder: D,
                            rows: O,
                            readOnly: H,
                            style: {
                                ...e,
                                "--srRiKA": C,
                                "--oiOG3Q": k?.default,
                                "--oGOcXA": k?.Jg,
                                "--UBd2ow": k?.focus
                            },
                            value: Q
                        })
                    })
                })
            }
            ;
            __c.Ec.prototype.PR = __c.ea(3, function(a, b) {
                this.console.error(...__c.Dc(this, "critical", a, b))
            });
            __c.tI.prototype.PR = __c.ea(2, function(a, b) {
                this.ww.PR(a, b);
                __c.rI(this, a, "critical", b)
            });
            var hfc = class {
                constructor(a) {
                    this.ref = a
                }
            }
              , ifc = class {
                get ref() {
                    return this.box.get()
                }
                constructor(a) {
                    this.box = a
                }
            }
              , jfc = class {
                get ref() {
                    return this.box.ref
                }
                set() {
                    throw Error("cannot set unmodifiable box");
                }
                constructor(a) {
                    this.box = a
                }
            }
              , kfc = __webpack_require__(322594)
              , m_ = kfc.jsx
              , lfc = kfc.jsxs;
            var r0 = __webpack_require__(205482)
              , mfc = r0.Component
              , p0 = r0.memo
              , yec = r0.PureComponent
              , x_ = r0.useCallback
              , nfc = r0.useEffect
              , l_ = r0.useMemo
              , w_ = r0.useState;
            var v_ = __webpack_require__(721226).PA;
            var s0 = __webpack_require__(186901)
              , j0 = s0.EW
              , ofc = s0.fm
              , dcc = s0.h5
              , pfc = s0.m3
              , M_ = s0.mJ
              , t0 = s0.sH
              , qfc = s0.XI;
            var q0 = __webpack_require__(536618).iB;
            var rfc = __webpack_require__
              , sfc = rfc(208463)
              , cfc = rfc.n_x(sfc)();
            var Zac = class extends Error {
                constructor() {
                    super("[internal_error] Comms promise timed out.")
                }
            }
              , tfc = class {
                reset(a) {
                    a && (this.timeoutMs = a);
                    this.setTimeout()
                }
                resolve(a) {
                    clearTimeout(this.he);
                    this.SLb(a)
                }
                reject(a) {
                    clearTimeout(this.he);
                    this.lab(a)
                }
                promise() {
                    return this.p
                }
                setTimeout() {
                    clearTimeout(this.he);
                    this.he = setTimeout( () => {
                        $ac(this)
                    }
                    , Math.max(this.timeoutMs - 500, 500))
                }
                constructor(a) {
                    this.timeoutMs = a;
                    this.p = new Promise( (b, c) => {
                        this.SLb = b;
                        this.lab = c
                    }
                    );
                    this.setTimeout()
                }
            }
            ;
            var bbc = {
                ePa: "null",
                Hbb: "*"
            }
              , dbc = "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(" ");
            var ufc = () => [...document.getElementsByTagName("iframe")]
              , Kbc = class {
                async p6({zha: a, port: b}) {
                    __c.x(!this.disposed, "IFrameHostConnector disposed");
                    const c = new tfc(6E4);
                    gbc(this, a, {
                        port: b,
                        promise: c
                    });
                    try {
                        await c.promise()
                    } finally {
                        hbc(this, a)
                    }
                }
                dispose() {
                    this.disposed || (this.disposed = !0,
                    this.B1a.removeEventListener("message", this.X0),
                    vfc.delete(this.XU),
                    this.ER.forEach(a => {
                        a.forEach(b => {
                            b.promise.reject(Error("IFrameHostConnector disposed"))
                        }
                        )
                    }
                    ),
                    this.ER.clear(),
                    this.SVa.clear())
                }
                constructor(a) {
                    var b = window;
                    this.options = {
                        XU: "codelet"
                    };
                    this.J = a;
                    this.B1a = b;
                    this.cyb = cbc;
                    this.Sxb = ufc;
                    this.disposed = !1;
                    this.X0 = async ({data: c, source: d, origin: e}) => {
                        if (d) {
                            var f = c?.clientId
                              , g = c?.sandboxCommsSource ?? c?.source;
                            if (!g?.startsWith("react-")) {
                                var h = this.Sxb().find(n => n.contentWindow === d);
                                if (h) {
                                    var k = h.getAttribute("data-process-id");
                                    if (k && k.startsWith(this.XU)) {
                                        var l = z(h.contentWindow)
                                          , m = this.cyb(h);
                                        if (e !== m.ePa)
                                            ebc(e) || this.J.info("received message event from an unexpected origin", {
                                                extra: new Map([["expected", m.ePa], ["actual", e]])
                                            });
                                        else if (c = abc(c, f),
                                        c.ok) {
                                            c = {
                                                type: "connection_request_not_matched"
                                            };
                                            if (e = fbc(this, {
                                                SJ: k,
                                                clientId: f
                                            }))
                                                c = {
                                                    type: "connection_request_matched",
                                                    port: e.port
                                                };
                                            else
                                                for (const n of this.SVa)
                                                    if (c = await n({
                                                        zha: {
                                                            SJ: k,
                                                            clientId: f
                                                        },
                                                        iframe: h
                                                    }))
                                                        break;
                                            switch (c.type) {
                                            case "connection_request_matched":
                                                l.postMessage({
                                                    source: "parent",
                                                    sandboxCommsSource: "parent",
                                                    clientId: f
                                                }, m.Hbb, [c.port]);
                                                e?.promise.resolve(void 0);
                                                break;
                                            case "connection_request_not_matched":
                                                this.J.sA("received an init message with no matching connection request and no listener accepted", {
                                                    extra: new Map([["processId", k], ["data.source", g], ["data.clientId", f]])
                                                });
                                                this.options.pYb && h.remove();
                                                break;
                                            case "already_connected":
                                                this.J.sA("received an init message for a processId & clientId that is already connected", {
                                                    extra: new Map([["processId", k], ["data.source", g], ["data.clientId", f]])
                                                });
                                                break;
                                            default:
                                                throw new A(c);
                                            }
                                        } else
                                            this.J.sA(c.error, {
                                                extra: new Map([["data.source", g], ["data.clientId", f]])
                                            })
                                    }
                                }
                            }
                        }
                    }
                    ;
                    this.XU = this.options.XU ?? `iframe_host_${wfc++}`;
                    this.ER = new Map;
                    this.SVa = new Set;
                    __c.x(!vfc.has(this.XU), `A IFrameHostConnector has already been created with the prefix ${this.options.XU}`);
                    vfc.add(this.XU);
                    this.B1a.addEventListener("message", this.X0)
                }
            }
              , wfc = 0
              , vfc = new Set;
            var n_ = class extends Error {
                constructor(a) {
                    a.code = a.code;
                    const b = a.message.endsWith(".") ? "" : ".";
                    super(`[${a.code}]:  ${a.message}${b}`.trim());
                    this.code = a.code;
                    this.name = "CanvaError";
                    this.PKb = a.message;
                    Object.setPrototypeOf(this, n_.prototype)
                }
            }
            ;
            var xfc = class {
                constructor(a, b, c) {
                    this.handler = a;
                    this.port = b;
                    this.J = c;
                    this.send = d => {
                        try {
                            return this.port.postMessage(d),
                            (0,
                            __c.Ba)()
                        } catch (e) {
                            return this.J.Ob(e),
                            Da(e)
                        }
                    }
                    ;
                    this.FHb = d => {
                        this.J.Ob(d)
                    }
                    ;
                    this.X0 = ({data: d}) => {
                        if (d)
                            try {
                                this.handler.UKb(d)
                            } catch (e) {
                                this.J.Ob(e)
                            }
                        else
                            this.J.error(new n_({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                    }
                    ;
                    this.port.onmessage = this.X0;
                    this.port.onmessageerror = this.FHb
                }
            }
            ;
            var yfc = class {
                request(a, b) {
                    const c = this.G9a
                      , d = new tfc(5E3)
                      , e = this.GLb()
                      , f = async function() {
                        c.set(e, {
                            path: a,
                            ILb: d
                        });
                        try {
                            const g = await d.promise();
                            return (0,
                            __c.Ba)(g)
                        } catch (g) {
                            return g instanceof Zac ? Da(new n_({
                                code: "internal_error",
                                message: `Comms promise timed out (${a}).`
                            })) : Da(g)
                        } finally {
                            c.delete(e)
                        }
                    }();
                    b = this.send(e, a, b);
                    b.ok || (this.J.Ob(b.error, {
                        Be: "unable to send request",
                        tags: new Map([["type", "request"], ["path", a]])
                    }),
                    d.reject(b.error));
                    return f
                }
                constructor(a, b) {
                    this.send = a;
                    this.J = b;
                    this.GLb = __c.Sq;
                    this.G9a = new Map
                }
            }
            ;
            var zfc = class {
                handle(a, b) {
                    if (this.V1.has(a))
                        throw new n_({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                    this.V1.set(a, b)
                }
                constructor(a, b) {
                    var c = console;
                    this.daa = a;
                    this.J = b;
                    this.ELb = !0;
                    this.Rsb = c;
                    this.V1 = new Map;
                    this.jvb = new Set
                }
            }
            ;
            var u_ = class {
                constructor(a, b) {
                    this.request = (c, d) => this.client.request(c, d);
                    this.handle = (c, d) => this.V1.handle(c, d);
                    a = new Afc(c => {
                        switch (c.type) {
                        case "ack":
                        case "error":
                        case "response":
                            var d = this.client;
                            const e = c.requestId
                              , f = c.type
                              , {path: g, ILb: h} = d.G9a.get(e) || {};
                            if (h)
                                switch (f) {
                                case "response":
                                    h.resolve(c.payload);
                                    break;
                                case "ack":
                                    h.reset(2E4);
                                    break;
                                case "error":
                                    d.J.d5({
                                        level: "info",
                                        category: "sandbox_comms",
                                        message: "Error response received",
                                        data: {
                                            path: g ?? "unknown"
                                        }
                                    });
                                    h.reject(new n_({
                                        code: c.code,
                                        message: c.message
                                    }));
                                    break;
                                default:
                                    throw new A(c);
                                }
                            else
                                f !== "ack" && d.J.error("request has already been handled and resolved or was not sent from this client", {
                                    tags: new Map([["type", f], ["requestId", `${e}`]])
                                });
                            break;
                        case "request":
                            lbc(this.V1, c);
                            break;
                        default:
                            throw new A(c);
                        }
                    }
                    ,a,b.Xf("bus"));
                    this.client = new yfc(a.iG,b.Xf("client"));
                    this.V1 = new zfc(a,b.Xf("requestHandler"))
                }
            }
              , Afc = class {
                constructor(a, b, c) {
                    this.Vka = a;
                    this.iG = (d, e, f) => this.L5.send({
                        type: "request",
                        requestId: d,
                        path: e,
                        payload: f
                    });
                    this.QHb = d => {
                        switch (d.type) {
                        case "ack":
                            this.Vka({
                                type: "ack",
                                requestId: d.requestId
                            });
                            break;
                        case "error":
                            this.Vka({
                                type: "error",
                                requestId: d.requestId,
                                code: d.code,
                                message: d.message
                            });
                            break;
                        case "response":
                            this.Vka({
                                type: "response",
                                requestId: d.requestId,
                                payload: d.payload
                            });
                            break;
                        case "request":
                            this.Vka({
                                type: "request",
                                requestId: d.requestId,
                                path: d.path,
                                payload: d.payload
                            });
                            break;
                        default:
                            throw new A(d);
                        }
                    }
                    ;
                    this.L5 = new xfc({
                        UKb: this.QHb
                    },b,c)
                }
            }
            ;
            var mbc = G( () => ({}));
            var Bfc = G( () => ({
                a7: X(1),
                od: X(2)
            }));
            var p_ = G( () => ({
                xj: Y("documentId", 1),
                Pk: Y("elementId", 2),
                Mib: F("websiteContext", 3, Bfc),
                QEa: __c.dJ("isPreview", 4)
            }), {
                Cl: 0
            });
            var nbc = G( () => ({}));
            var q_ = G( () => ({}));
            var fcc = G( () => ({
                textContent: Y("textContent", 1),
                backgroundColor: Y("backgroundColor", 2)
            }), {
                Cl: 0
            });
            var gcc = G( () => ({
                config: (0,
                __c.hJ)("config", 1, fcc)
            }), {
                Cl: 0
            });
            var Cfc = G( () => ({}));
            var pbc = G( () => ({
                jBa: Y("entityId", 1)
            }), {
                Cl: 0
            });
            var qbc = G( () => ({}));
            var rbc = G( () => ({
                jBa: X("entityId", 1),
                textContent: X("textContent", 2)
            }), {
                Cl: 0
            });
            var sbc = G( () => ({}));
            var Ibc = class {
                async pca(a) {
                    a = await this.WA.request("SET_EDITING_CONFIG", gcc.Ja(a));
                    if (!a.ok)
                        throw Error(`Encountered an error while sending ${"SET_EDITING_CONFIG"} request: ${a.error}`);
                    if (a.value == null)
                        throw Error("SET_EDITING_CONFIG: Result cannot be empty");
                    return Cfc.Ba(a.value)
                }
                constructor(a) {
                    this.WA = a
                }
            }
            ;
            var K_ = G( () => ({
                type: __c.E("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
                id: X("id", 1),
                url: X("url", 4)
            }), {
                Cl: 0
            });
            var ubc = G( () => ({
                config: Y("config", 1),
                o8: F("fontEditable", 2, K_)
            }), {
                Cl: 0
            });
            var u0 = G( () => ({
                type: __c.E("type", "RECOLORABLE", 1, "RECOLORABLE"),
                id: X("id", 1),
                value: X("value", 2)
            }), {
                Cl: 0
            });
            var Dfc = G( () => ({
                borderRadius: VI("borderRadius", 1),
                borderWidth: VI("borderWidth", 2)
            }), {
                Cl: 0
            });
            var Efc = G( () => ({
                type: __c.E("type", "BORDERABLE", 2, "BORDERABLE"),
                id: X("id", 1),
                value: __c.Pa("value", 2, Dfc)
            }), {
                Cl: 0
            });
            var Ffc = G( () => ({
                id: X("id", 1),
                value: X("value", 2)
            }), {
                Cl: 0
            });
            var v0 = G( () => ({
                type: __c.E("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
                size: VI("size", 21)
            }), {
                Cl: 0
            });
            var vbc = G( () => ({
                config: X("config", 1),
                K1: Qa("recolorables", 4, u0),
                Cob: Qa("borderables", 5, Efc),
                Ptb: Qa("editPanelValues", 6, Ffc),
                oI: F("fontSizeable", 7, v0),
                o8: F("fontEditable", 8, K_)
            }), {
                Cl: 0
            });
            var wbc = __c.bb( () => ({
                type: [1, u0, 2, Efc, 3, K_, 5, v0]
            }), () => ({}), {
                Cl: 0
            });
            var xbc = G( () => ({
                config: X("config", 1)
            }), {
                Cl: 0
            });
            var ybc = G( () => ({
                id: X(1),
                value: X(2)
            }));
            var zbc = G( () => ({
                config: X(1)
            }));
            var Bbc = G( () => ({
                config: X("config", 1),
                K1: Qa("recolorables", 4, u0),
                Cob: Qa("borderables", 5, Efc),
                o8: F("fontEditable", 6, K_),
                Ptb: Qa("editPanelValues", 7, Ffc),
                oI: F("fontSizeable", 8, v0)
            }), {
                Cl: 0
            });
            var Cbc = G( () => ({}));
            var Gfc = G( () => ({
                scrollWidth: VI("scrollWidth", 1),
                scrollHeight: VI("scrollHeight", 2),
                offsetWidth: VI("offsetWidth", 3),
                offsetHeight: VI("offsetHeight", 4)
            }), {
                Cl: 0
            });
            var Dbc = G( () => ({
                body: __c.Pa("body", 1, Gfc)
            }), {
                Cl: 0
            });
            var Gbc = class {
                constructor(a) {
                    this.WA = a
                }
            }
            ;
            var Lbc = class {
                constructor(a, b) {
                    this.LDa = a;
                    this.J = b;
                    this.p6 = (c, d, e, f, g) => {
                        c.addEventListener("load", async () => {
                            Fbc(this.LDa, d, this.J).then( ({WA: h}) => {
                                const {ZWa: k} = e();
                                obc(h, k)
                            }
                            ).catch(h => {
                                this.J.Ob(h)
                            }
                            );
                            f != null && Hbc(this.LDa, d, this.J).then( ({WA: h, Xtb: k}) => {
                                ({Ytb: k} = f(k));
                                Ebc(h, k)
                            }
                            ).catch(h => {
                                this.J.Ob(h)
                            }
                            );
                            g != null && Jbc(this.LDa, d, this.J).then( ({WA: h, Qtb: k}) => {
                                ({Rtb: k} = g(k));
                                tbc(h, k)
                            }
                            ).catch(h => {
                                this.J.Ob(h)
                            }
                            )
                        }
                        )
                    }
                }
            }
            ;
            var Hfc;
            Hfc = Symbol.iterator;
            var Gec = class {
                static D(a) {
                    L(a, {
                        hn: j0,
                        Dr: j0
                    })
                }
                get hn() {
                    return this.znb().map(a => {
                        let b = this.J1a.get(a);
                        b == null && (b = `${this.Ozb++}`,
                        this.J1a.set(a, b));
                        return {
                            id: b,
                            ref: a
                        }
                    }
                    )
                }
                get Dr() {
                    const a = new Map;
                    this.hn.forEach( (b, c) => b && a.set(b.ref, c));
                    return a
                }
                Xk(a) {
                    return z(this.Dr.get(a), "ref not found")
                }
                get empty() {
                    return !this.hn.length
                }
                count() {
                    return this.hn.length
                }
                toArray() {
                    return this.hn.map(a => a.ref)
                }
                Xl() {
                    return new Map(this.map( (a, b) => [b, a]))
                }
                get ES() {
                    return this.hn[0]?.ref
                }
                get NT() {
                    return this.hn[this.hn.length - 1]?.ref
                }
                first(a) {
                    return a ? this.hn.find(b => a(b.ref))?.ref : this.ES
                }
                last(a) {
                    if (!a)
                        return this.NT;
                    const b = this.hn;
                    for (let c = b.length - 1; c >= 0; c--) {
                        const d = b[c];
                        if (a(d.ref))
                            return d.ref
                    }
                }
                next(a, b) {
                    const c = this.hn;
                    for (a = this.Xk(a) + 1; a < c.length; a++) {
                        const d = c[a];
                        if (!b || b(d.ref))
                            return d.ref
                    }
                }
                previous(a, b) {
                    const c = this.hn;
                    for (a = this.Xk(a) - 1; a >= 0; a--) {
                        const d = c[a];
                        if (!b || b(d.ref))
                            return d.ref
                    }
                }
                bf(a, b) {
                    a = this.Dr.get(a);
                    b = this.Dr.get(b);
                    u(a != null);
                    u(b != null);
                    return a < b ? -1 : a > b ? 1 : 0
                }
                Qw(a) {
                    return this.hn[this.Xk(a)].id
                }
                has(a) {
                    return this.Dr.has(a)
                }
                jq(a) {
                    return new __c.xK(this,a)
                }
                map(a) {
                    return this.hn.map( ({ref: b, id: c}) => a(b, c))
                }
                flatMap(a) {
                    return this.hn.flatMap( ({ref: b, id: c}) => a(b, c))
                }
                filter(a) {
                    return this.hn.filter(b => a(b.ref, b.id)).map(b => b.ref)
                }
                forEach(a) {
                    this.hn.forEach( (b, c) => a(b.ref, b.id, c))
                }
                reduce(a, b) {
                    return this.hn.reduce( (c, d) => a(c, d.ref, d.id), b)
                }
                some(a) {
                    return this.hn.some(b => a(b.ref, b.id))
                }
                every(a) {
                    return this.hn.every(b => a(b.ref, b.id))
                }
                [Hfc]() {
                    return this.toArray()[Symbol.iterator]()
                }
                constructor(a) {
                    this.znb = a;
                    this.Ozb = (Gec.D(this),
                    0);
                    this.J1a = new WeakMap
                }
            }
            ;
            var Fcc = __c.y_()( () => ({
                GZb({GL: a, xob: b, version: c}, d, e) {
                    e = e && {
                        fonts: z_("font", e.fonts),
                        media: z_("media", e.media),
                        wd: z_("video", e.wd),
                        embeds: z_("embed", e.embeds)
                    };
                    return {
                        data: {
                            G: {
                                GL: a,
                                Hs: {
                                    domain: "resource",
                                    resource: {
                                        ref: {
                                            type: "blueprint",
                                            id: b,
                                            version: c
                                        },
                                        resources: e
                                    }
                                },
                                type: "instance",
                                Ge: void 0
                            },
                            document: {}
                        },
                        S: d
                    }
                }
            }))
              , Ifc = ({resource: a, XD: b}) => {
                const c = ofc( () => {
                    __c.Kra(b, a.ref.ref)
                }
                );
                return {
                    Pa: new Gec( () => {
                        const d = Yac(b, a.ref.ref);
                        return d ? (__c.x(d.type === "group", "Expected group element"),
                        d.Pa.filter(__c.qb).map(e => __c.YE.create({
                            ...e,
                            locked: !0,
                            yg: !0
                        }))) : []
                    }
                    ),
                    jg: c
                }
            }
              , Jfc = __c.k_()( ({ei: {XD: a}}) => ({
                metadata: {
                    type: "blueprint",
                    name: __c.K("iAtEVw")
                },
                G: {
                    type: 0,
                    Ly: ({G: b}) => Ifc({
                        resource: b.Hs.resource,
                        XD: a
                    })
                },
                exports: {}
            }));
            w0 = __c.w0 = class {
            }
            ;
            w0.val = (a, b) => H_(0, 0, () => b)(a);
            w0.OD = (a, b) => H_(1, 0, () => b)(a);
            w0.ref = (a, b) => H_(0, 0, () => b)(a);
            w0.tIb = () => {
                var a = __c.x0;
                return H_(1, 1, () => a)(1)
            }
            ;
            w0.u8a = (a, b) => H_(0, 1, () => b)(a);
            w0.Vra = H_(0, 0, A_);
            w0.NYa = H_(0, 0, C_);
            w0.Yi = H_(0, 0, D_);
            w0.Kx = H_(1, 0, A_);
            w0.cUa = H_(1, 0, Nbc);
            w0.MYa = H_(1, 0, C_);
            w0.Kma = H_(1, 0, D_);
            w0.eF = H_(1, 0, B_);
            w0.nTa = H_(1, 0, Obc);
            w0.Fz = H_(1, 1, A_);
            w0.Paa = H_(1, 1, Nbc);
            w0.Dj = H_(1, 1, C_);
            w0.xIb = H_(1, 1, B_);
            w0.hC = H_(1, 1, D_);
            w0.sIb = H_(1, 1, Obc);
            w0.Cm = H_(0, 0, E_);
            w0.listRef = H_(0, 0, F_);
            w0.jYa = H_(0, 0, function(a) {
                return {
                    kind: 9,
                    itemType: a
                }
            });
            w0.Ipa = H_(0, 0, G_);
            w0.TSb = H_(0, 0, Pbc);
            w0.wIb = H_(0, 1, E_);
            w0.AIb = H_(0, 1, G_);
            w0.$wa = H_(1, 0, G_);
            w0.s8a = H_(1, 1, E_);
            w0.vIb = H_(1, 1, F_);
            w0.Hoa = H_(1, 1, G_);
            w0.XMa = A_;
            w0.VAb = B_;
            w0.T9 = E_;
            w0.n4a = F_;
            w0.ci = G_;
            w0.H3 = Pbc;
            w0.nGb = I_({});
            var Rbc = Object.freeze({
                document: Object.freeze({}),
                G: Object.freeze({})
            });
            var jcc = __c.J_({
                G: I_({
                    GL: w0.Vra(1),
                    Hs: w0.Ipa(2, {
                        domain: w0.Yi(1, "resource"),
                        resource: w0.$wa(2, {
                            ref: w0.Cm(2, "BlueprintRef"),
                            resources: w0.AIb(3, {
                                fonts: w0.listRef(1, w0.T9("FontRef")),
                                media: w0.listRef(2, w0.T9("MediaRef")),
                                wd: w0.listRef(3, w0.T9("VideoRef")),
                                embeds: w0.listRef(5, w0.T9("EmbedRef"))
                            })
                        })
                    })
                })
            });
            var Occ = {
                nh: Fcc,
                Go: Jfc,
                oh: jcc
            };
            var Kfc = class {
                constructor() {
                    this.ZY = {
                        Bu: !1,
                        yK: !1,
                        JH: !1,
                        ZH: !1
                    }
                }
            }
            ;
            var Lfc = class {
                create(a) {
                    switch (a.type) {
                    case "rect":
                        return this.e.classes.E4.create({}, {
                            W: {
                                fill: Ybc(this, a.fill)
                            },
                            attributes: $bc(this, a)
                        });
                    default:
                        const b = __c.iS.snapshot(a);
                        return __c.iS.create({
                            ...b,
                            locked: !0,
                            yg: !0,
                            Qg: Ubc(this.A4a, a)
                        })
                    }
                }
                constructor(a, b) {
                    this.e = a;
                    this.Ge = b;
                    this.A4a = new Kfc
                }
            }
            ;
            var Mfc = class {
                constructor(a) {
                    this.Ge = a
                }
            }
            ;
            var Gcc = __c.y_()( () => ({
                KZb({GL: a, xob: b, type: c}, d) {
                    return {
                        data: {
                            G: {
                                GL: a,
                                Hs: {
                                    domain: "document",
                                    id: b,
                                    version: 1,
                                    Kb: c === "source" ? {
                                        type: c
                                    } : {
                                        type: c,
                                        Ge: new Map
                                    }
                                }
                            },
                            document: {}
                        },
                        S: d
                    }
                }
            }))
              , Nfc = ({data: a, wH: b, expr: c}) => {
                b = b.jwb(a.GL);
                if (!b)
                    throw Error(`Blueprint set ${a.GL} not found`);
                const d = b.zi.get(a.Hs.id);
                if (!d)
                    throw Error(`Blueprint ${a.Hs.id} not found in blueprint set ${a.GL}`);
                if (a.Hs.Kb.type === "source")
                    return {
                        Pa: d.elements
                    };
                const e = new Lfc(c,new Mfc(a.Hs.Kb.Ge));
                return {
                    Pa: c.list( () => d.elements.map(f => e.create(f)))
                }
            }
              , Ofc = __c.k_()( ({BR: {expr: a}, ei: {wH: b}}) => ({
                metadata: {
                    type: void 0,
                    name: void 0
                },
                G: {
                    type: 0,
                    Ly: ({G: c}) => Nfc({
                        data: c,
                        wH: b,
                        expr: a
                    })
                },
                exports: {}
            }));
            var Pfc = w0.H3({
                type: void 0
            }, w0.ci({
                type: w0.Yi(1, "boolean"),
                value: w0.Paa(2)
            }), w0.ci({
                type: w0.Yi(1, "non-negative-double"),
                value: w0.Dj(2, {
                    min: 0
                })
            }), w0.ci({
                type: w0.Yi(1, "double"),
                value: w0.Dj(2)
            }), w0.ci({
                type: w0.Yi(1, "string"),
                value: w0.Fz(2)
            }), w0.ci({
                type: w0.Yi(1, "richtext2"),
                value: w0.Cm(2, "Richtext2")
            }), w0.ci({
                type: w0.Yi(1, "image_fill"),
                value: w0.Cm(2, "Fill")
            }), w0.ci({
                type: w0.Yi(1, "video_fill"),
                value: w0.Cm(2, "Fill")
            }));
            var Qfc = w0.ci({
                type: w0.Yi(1, "source")
            })
              , Rfc = w0.ci({
                type: w0.Yi(1, "instance"),
                Ge: w0.jYa(2, Pfc)
            })
              , kcc = __c.J_({
                G: I_({
                    GL: w0.Vra(1),
                    Hs: w0.Ipa(2, {
                        domain: w0.Yi(1, "document"),
                        id: w0.Vra(2),
                        version: w0.eF(3),
                        Kb: w0.TSb(4, {
                            type: void 0
                        }, Qfc, Rfc)
                    })
                })
            });
            var Pcc = {
                nh: Gcc,
                Go: Ofc,
                oh: kcc
            };
            var Sfc = class {
                static D(a) {
                    L(a, {
                        Pk: t0.ref
                    })
                }
                constructor(a) {
                    this.Pk = (Sfc.D(this),
                    void 0);
                    this.Pk = a
                }
            }
              , Dcc = __c.y_()( () => ({
                JZb(a, b) {
                    return {
                        data: {
                            G: {
                                bya: {
                                    type: "embed",
                                    id: a,
                                    version: 0
                                },
                                nVa: b,
                                config: void 0,
                                dCa: void 0
                            },
                            document: {}
                        },
                        S: {
                            width: 1366,
                            height: 768
                        }
                    }
                }
            }));
            var Tfc = class {
            }
            ;
            var Ufc = class {
                static D(a) {
                    L(a, {
                        nT: t0.ref
                    })
                }
                subscribe(a) {
                    this.Gm.add(a);
                    return () => {
                        this.Gm.delete(a)
                    }
                }
                constructor(a, b, c) {
                    this.config = a;
                    this.Ca = b;
                    this.Ep = c;
                    this.Gm = (Ufc.D(this),
                    new Set);
                    this.nT = !1;
                    this.notifyListeners = d => {
                        this.Gm.forEach(e => e(d))
                    }
                    ;
                    this.Vqa = (d, e) => {
                        this.Al?.();
                        this.Al = void 0;
                        const f = q => t_(e, new u0(q))
                          , g = this.Ca
                          , h = g ? q => ccc(g, e, q) : void 0
                          , k = q => Abc(e, new ybc(q))
                          , l = q => t_(e, new v0({
                            size: q
                        }))
                          , m = {
                            dzb: q => {
                                this.config.mS?.POa({
                                    ...q,
                                    oI: q.oI?.size
                                }, d, f, h, l, k);
                                return new Cbc
                            }
                            ,
                            Yyb: this.Qyb
                        }
                          , n = M_( () => d.config, async q => {
                            const r = await s_(e, {
                                config: q,
                                o8: void 0
                            });
                            r.config && r.config !== q && this.config.mS?.POa({
                                ...r,
                                oI: r.oI?.size
                            }, d, f, h, l, k)
                        }
                        )
                          , p = M_( () => d.dCa.ref?.first(), async q => {
                            const r = d.config
                              , t = this.Ca;
                            q = await s_(e, {
                                config: r,
                                o8: t != null && q != null ? await L_(t, q) : void 0
                            });
                            q.config && q.config !== r && this.config.mS?.POa({
                                ...q,
                                oI: q.oI?.size
                            }, d, f, h, l, k)
                        }
                        );
                        this.Al = () => {
                            n();
                            p()
                        }
                        ;
                        ecc(this, d, e, f, h, l, k);
                        return {
                            Ytb: m
                        }
                    }
                    ;
                    this.tV = d => {
                        const e = this.Ep && new Bfc({
                            a7: this.Ep.id,
                            od: this.Ep.od
                        });
                        return {
                            ZWa: {
                                V0a: () => new p_({
                                    xj: d.page?.container?.id,
                                    Pk: d.Pk,
                                    Mib: e
                                }),
                                Z0a: () => new q_
                            }
                        }
                    }
                    ;
                    this.AF = () => {
                        this.Al?.()
                    }
                    ;
                    this.Qyb = d => {
                        this.notifyListeners({
                            height: d.body.scrollHeight,
                            width: d.body.scrollWidth
                        })
                    }
                }
            }
            ;
            var vcc = __c.J_({
                G: I_({
                    bya: w0.Cm(1, "EmbedRef"),
                    nVa: w0.Vra(35),
                    config: w0.Fz(29),
                    dCa: w0.vIb(6, w0.T9("FontRef"))
                })
            });
            var Vfc = __c.k_()( ({ei: a}) => {
                const b = a.RW
                  , c = a.Ca
                  , d = a.Ep
                  , e = new Tfc;
                return {
                    metadata: {
                        type: "codelet",
                        name: __c.K("4kcGvw"),
                        PV: f => f.nVa
                    },
                    K6: () => new Sfc(void 0),
                    G: __c.j_(v_( ({data: {G: f, local: g}, ue: {Wea: h, Wkb: k}, ji: l, Oqa: m}) => {
                        dcc( () => {
                            g.Pk = l.Pk
                        }
                        );
                        const [n] = w_( () => new Ufc(e,c,d));
                        nfc( () => {
                            m?.(n)
                        }
                        , [n, m]);
                        const p = x_(r => n.Vqa(f, r), [f, n])
                          , q = x_( () => n.tV(l), [n, l]);
                        return lfc("div", {
                            className: "guWTXA",
                            children: [m_(h, {
                                url: f.bya.id,
                                children: ({Sj: r}) => m_(b, {
                                    url: f.bya.id,
                                    Sj: r,
                                    tV: q,
                                    Vqa: p,
                                    AF: n.AF
                                })
                            }), l.ff > 10 && f.config != null && !n.nT && m_("div", {
                                className: "djA3nQ",
                                children: m_(k, {})
                            })]
                        })
                    }
                    )),
                    exports: {
                        config: e
                    }
                }
            }
            )
              , Qcc = {
                nh: Dcc,
                Go: Vfc,
                oh: vcc
            };
            var wcc = __c.J_({
                G: I_({
                    Fy: w0.$wa(1, I_({
                        cya: w0.Cm(1, "EmbedRef"),
                        config: w0.jYa(2, w0.ci({
                            textContent: w0.Fz(1),
                            backgroundColor: w0.Fz(2, /^#[0-9a-f]{6}$/)
                        })),
                        xfb: w0.Fz(3)
                    }))
                })
            })
              , Ecc = __c.y_()( () => ({
                IZb(a, b, c) {
                    return {
                        data: {
                            G: {
                                Fy: {
                                    cya: {
                                        type: "embed",
                                        id: a,
                                        version: 0
                                    },
                                    config: b,
                                    xfb: c
                                }
                            },
                            document: {}
                        },
                        S: {
                            width: 1366,
                            height: 768
                        }
                    }
                }
            }))
              , Wfc = class {
            }
            ;
            var Xfc = class {
                dispose() {
                    this.Al?.();
                    this.Al = void 0
                }
                constructor(a, b) {
                    this.config = a;
                    this.Ep = b;
                    this.Uqa = (c, d) => {
                        this.dispose();
                        this.Al = hcc(c, d);
                        return {
                            Rtb: {
                                czb: e => {
                                    this.config.mS?.rbc(c, e.jBa);
                                    return new qbc
                                }
                                ,
                                ezb: e => {
                                    this.config.mS?.ybc(c, e.jBa, e.textContent);
                                    return new sbc
                                }
                            }
                        }
                    }
                    ;
                    this.tV = c => {
                        const d = this.Ep && new Bfc({
                            a7: this.Ep.id,
                            od: this.Ep.od
                        });
                        return {
                            ZWa: {
                                V0a: () => new p_({
                                    xj: c.page?.container?.id,
                                    Pk: c.Pk,
                                    Mib: d
                                }),
                                Z0a: () => new q_
                            }
                        }
                    }
                    ;
                    this.AF = () => {
                        this.dispose()
                    }
                }
            }
            ;
            var Yfc = __c.k_()( ({ei: a}) => {
                const b = a.RW
                  , c = a.Ep
                  , d = new Wfc;
                return {
                    metadata: {
                        type: void 0,
                        name: void 0
                    },
                    G: __c.j_(v_( ({data: {G: e}, ue: {Wea: f}, ji: g}) => {
                        const [h] = w_( () => new Xfc(d,c))
                          , k = x_(m => h.Uqa(e.Fy.ref, m), [e.Fy.ref, h])
                          , l = x_( () => h.tV(g), [h, g]);
                        return m_(f, {
                            url: e.Fy.ref.cya.id,
                            children: ({Sj: m}) => m_(b, {
                                url: e.Fy.ref.cya.id,
                                Sj: m,
                                tV: l,
                                Uqa: k,
                                AF: h.AF
                            })
                        })
                    }
                    )),
                    exports: {
                        configuration: d
                    }
                }
            }
            )
              , Rcc = {
                nh: Ecc,
                Go: Yfc,
                oh: wcc
            };
            var Icc = class {
                yn(a) {
                    this.loading || (this.loading = (a ?? Promise.resolve()).then( () => this.load()));
                    return this.loading
                }
                constructor(a, b) {
                    this.id = a;
                    this.loadModule = b
                }
            }
              , Ccc = class {
                static D(a) {
                    L(a, {
                        Tia: t0.ref
                    })
                }
                constructor() {
                    this.Tia = (Ccc.D(this),
                    void 0)
                }
            }
            ;
            var O_ = class {
                static of(a, b, c) {
                    return new O_(a,b,c)
                }
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.Woa = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , $fc = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    var c = Zfc;
                    this.tnb = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , y0 = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.BJb = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , bgc = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    var d = agc;
                    this.keyType = a;
                    this.valueType = b;
                    this.resultType = c;
                    this.apply = d
                }
            }
              , Xcc = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c, d) {
                    this.itemType = a;
                    this.Qnb = b;
                    this.resultType = c;
                    this.reduce = d
                }
            }
            ;
            var bdc = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    this.type = a;
                    this.get = b
                }
            }
            ;
            __c.cgc = Zcc(4);
            __c.dgc = Zcc(6);
            __c.egc = $cc(5);
            __c.z0 = $cc(0);
            var fgc = class {
            }
              , sdc = class extends fgc {
                Fwa(a) {
                    return new sdc(a(this.value))
                }
                XBa(a) {
                    return a(this.value)
                }
                constructor(a) {
                    super();
                    this.value = this.value = a
                }
            }
              , tdc = class extends fgc {
                Fwa(a, b) {
                    return new tdc(b(this.value))
                }
                XBa(a, b) {
                    return b(this.value)
                }
                constructor(a) {
                    super();
                    this.value = this.value = a
                }
            }
            ;
            var ddc = class {
                map(a) {
                    return a(this)
                }
            }
              , A0 = class extends ddc {
                uEa(a) {
                    return this === a || a.sMa(b => this.Y9(b))
                }
                KT() {
                    throw Error(`${this} is not iterable`);
                }
                KGa(a) {
                    const b = this.propTypes ?? (this.propTypes = this.Uma());
                    if (!b)
                        throw Error(`${this} is not navigable"`);
                    if (!b.hasOwnProperty(a))
                        throw Error(`${this} has no navigable property "${a}"`);
                    return b[a]
                }
                Uma() {
                    throw Error(`${this} is not navigable`);
                }
                gCa(a) {
                    a(this)
                }
                sMa(a) {
                    return a(this)
                }
                constructor() {
                    super();
                    this.kind = "simple";
                    this.propTypes = void 0
                }
            }
              , B0 = class extends A0 {
                Y9(a) {
                    return a instanceof B0 && this.name === a.name
                }
                toString() {
                    return this.name
                }
                constructor(a) {
                    super();
                    this.name = a
                }
            }
              , ggc = class extends A0 {
                Y9(a) {
                    return a instanceof ggc && this.aq === a.aq
                }
                toString() {
                    return this.aq.name
                }
                constructor(a) {
                    super();
                    this.aq = a
                }
            }
              , hgc = class extends A0 {
                Y9(a) {
                    return a instanceof hgc && this.aq === a.aq && R_(this.arg, a.arg)
                }
                toString() {
                    return `${this.aq}<${this.arg}>`
                }
                constructor(a, b) {
                    super();
                    this.aq = a;
                    this.arg = b
                }
            }
              , igc = class extends hgc {
                KT() {
                    return this.arg
                }
                Uma() {
                    const a = this.arg;
                    return {
                        size: X_.number,
                        empty: X_.Cd,
                        get first() {
                            return X_.optional(a)
                        }
                    }
                }
                constructor(a) {
                    super("array", a)
                }
            }
              , jgc = class extends hgc {
                KT() {
                    return this.arg
                }
                Uma() {
                    const a = this.arg;
                    return {
                        size: X_.number,
                        empty: X_.Cd,
                        get first() {
                            return X_.optional(a)
                        }
                    }
                }
                constructor(a) {
                    super("set", a)
                }
            }
              , kgc = class extends A0 {
                Y9(a) {
                    return a instanceof kgc && R_(this.key, a.key) && R_(this.value, a.value)
                }
                toString() {
                    return `map<${this.key}, ${this.value}>`
                }
                constructor(a, b) {
                    super();
                    this.key = a;
                    this.value = b
                }
            }
              , lgc = class extends A0 {
                Y9(a) {
                    return a instanceof lgc ? Object.entries(a.fields).every( ([b,c]) => this.fields.hasOwnProperty(b) && R_(this.fields[b], c)) : !1
                }
                Uma() {
                    return this.fields
                }
                toString() {
                    const a = Object.entries(this.fields);
                    return a.length ? `{ ${a.map( ([b,c]) => `${b}: ${c}`).join(", ")} }` : "{}"
                }
                constructor(a) {
                    super();
                    this.fields = a
                }
            }
              , C0 = class extends ddc {
                uEa(a) {
                    return this === a || this.Gg.every(b => b.uEa(a))
                }
                KT() {
                    return X_.union(...this.Gg.map(a => a.KT()))
                }
                KGa(a) {
                    return X_.union(...this.Gg.map(b => b.KGa(a)))
                }
                gCa(a) {
                    this.Gg.forEach(b => b.gCa(a))
                }
                sMa(a) {
                    return this.Gg.some(b => b.sMa(a))
                }
                toString() {
                    return this.Gg.length ? this.Gg.map(a => a.toString()).join(" | ") : "never"
                }
                constructor(a) {
                    super();
                    this.Gg = a;
                    this.kind = "disjunction";
                    u(a.length !== 1)
                }
            }
              , mgc = new C0([])
              , ngc = new B0("string")
              , ogc = new B0("number")
              , pgc = new B0("boolean")
              , qgc = new B0("undefined")
              , rgc = new C0([ngc, ogc, pgc])
              , sgc = class {
                get never() {
                    return mgc
                }
                get string() {
                    return ngc
                }
                get number() {
                    return ogc
                }
                get Cd() {
                    return pgc
                }
                get undefined() {
                    return qgc
                }
                get primitive() {
                    return rgc
                }
                optional(a) {
                    return X_.union(a, X_.undefined)
                }
                array(a) {
                    return new igc(a)
                }
                set(a) {
                    return new jgc(a)
                }
                AY(a) {
                    return new C0([new igc(a), new jgc(a)])
                }
                map(a, b) {
                    return new kgc(a,b)
                }
                P(a) {
                    return new lgc({
                        ...a
                    })
                }
                union(...a) {
                    if (a.length === 0)
                        return mgc;
                    if (a.length === 1)
                        return a[0];
                    const b = new Set;
                    for (const d of a)
                        adc(d).gCa(e => b.add(e));
                    a = [...b];
                    if (a.length === 0)
                        return mgc;
                    if (a.length === 1)
                        return a[0];
                    if (a.length === 2) {
                        const [d,e] = a;
                        return R_(d, e) ? e : R_(e, d) ? d : new C0(a)
                    }
                    const c = new Set;
                    for (const d of a)
                        [...c].some(e => R_(d, e)) || (c.forEach(e => R_(e, d) && c.delete(e)),
                        c.add(d));
                    return c.size === 1 ? [...c][0] : new C0([...c])
                }
                constructor() {
                    this.optional = S_(this.optional);
                    this.array = S_(this.array);
                    this.set = S_(this.set);
                    this.AY = S_(this.AY)
                }
            }
              , tgc = class extends sgc {
                instance(a) {
                    return new ggc(a)
                }
            }
              , X_ = new tgc
              , ugc = class extends sgc {
                instance(a) {
                    return new ggc(z(this.classes[a]))
                }
                constructor(a) {
                    super();
                    this.classes = a
                }
            }
            ;
            var vgc, wgc, D0 = Symbol("value"), xgc = class {
                get props() {
                    return this.zmb ?? (this.zmb = this.ewa())
                }
            }
            , ygc = class {
                get size() {
                    return this[D0].length
                }
                get empty() {
                    return this[D0].length === 0
                }
                get first() {
                    return this[D0][0]
                }
                constructor(a) {
                    this[D0] = a
                }
            }
            ;
            vgc = Symbol.iterator;
            var zgc = class extends xgc {
                ewa() {
                    return new ygc(this.items)
                }
                map(a) {
                    return this.items.map(a)
                }
                [vgc]() {
                    return this.items[Symbol.iterator]()
                }
                toString() {
                    return this.items.length ? `[${Array.from(this.items, T_).join(", ")}]` : "[]"
                }
                constructor(a) {
                    super();
                    this.kind = "array";
                    this.items = [...a]
                }
            }
              , Agc = class {
                get size() {
                    return this[D0].size
                }
                get empty() {
                    return this[D0].size === 0
                }
                get first() {
                    return this[D0][Symbol.iterator]().next().value
                }
                constructor(a) {
                    this[D0] = a
                }
            }
            ;
            wgc = Symbol.iterator;
            var Bgc = class extends xgc {
                ewa() {
                    return new Agc(this.items)
                }
                map(a) {
                    return Array.from(this.items, a)
                }
                [wgc]() {
                    return this.items[Symbol.iterator]()
                }
                toString() {
                    return this.items.size ? `Set [${Array.from(this.items, T_).join(", ")}]` : "Set []"
                }
                constructor(a) {
                    super();
                    this.kind = "set";
                    this.items = new Set(a)
                }
            }
              , Cgc = class {
                toString() {
                    return this.items.size ? `Map {${Array.from(this.items, ([a,b]) => `[${T_(a)}]: ${T_(b)}`).join(", ")}}` : "Map {}"
                }
                constructor(a) {
                    this.items = a;
                    this.kind = "map"
                }
            }
              , Dgc = class extends xgc {
                ewa() {
                    return this.fields
                }
                toString() {
                    const a = Object.entries(this.fields);
                    return a.length ? `{ ${[...a].map( ([b,c]) => `${b}: ${T_(c)}`).join(", ")} }` : "{}"
                }
                constructor(a) {
                    super();
                    this.fields = a;
                    this.kind = "record"
                }
            }
              , Egc = class {
                toString() {
                    return `[instance ${this.aq.name}]`
                }
                constructor(a, b) {
                    this.aq = a;
                    this.instance = b;
                    this.kind = "instance"
                }
            }
              , Fgc = class {
                array(a) {
                    return new zgc(a)
                }
                set(a) {
                    return new Bgc(a)
                }
                map(a) {
                    return new Cgc(new Map(a))
                }
                P(a) {
                    return new Dgc({
                        ...a
                    })
                }
            }
              , Ggc = class extends Fgc {
                instance(a, b) {
                    return new Egc(a,b)
                }
                stringify(a) {
                    return T_(a)
                }
                constructor() {
                    super();
                    this.Dg = gdc
                }
            }
              , a0 = new Ggc
              , Hgc = class extends Fgc {
                instance(a, b) {
                    a = z(this.classes[a]);
                    return new Egc(a,b)
                }
                constructor(a) {
                    super();
                    this.classes = a
                }
            }
            ;
            var qdc = {
                [0]: Wcc(X_.number, X_.number, a => -a),
                [1]: Wcc(X_.string, X_.number, a => a.length),
                [2]: Wcc(X_.Cd, X_.Cd, a => !a),
                [3]: P_(X_.number, X_.number, X_.number, (a, b) => a + b),
                [4]: P_(X_.number, X_.number, X_.number, (a, b) => a - b),
                [5]: P_(X_.number, X_.number, X_.number, (a, b) => a * b),
                [6]: P_(X_.number, X_.number, X_.number, (a, b) => a / b),
                [7]: P_(X_.number, X_.number, X_.number, (a, b) => a % b),
                [8]: P_(X_.string, X_.string, X_.string, (a, b) => a + b),
                [9]: P_(X_.number, X_.number, X_.Cd, (a, b) => a === b),
                [10]: P_(X_.number, X_.number, X_.Cd, (a, b) => a !== b),
                [11]: P_(X_.number, X_.number, X_.Cd, (a, b) => a < b),
                [12]: P_(X_.number, X_.number, X_.Cd, (a, b) => a <= b),
                [13]: P_(X_.number, X_.number, X_.Cd, (a, b) => a > b),
                [14]: P_(X_.number, X_.number, X_.Cd, (a, b) => a >= b),
                [15]: P_(X_.Cd, X_.Cd, X_.Cd, (a, b) => a && b),
                [16]: P_(X_.Cd, X_.Cd, X_.Cd, (a, b) => a || b)
            }
              , wdc = {
                [2]: new y0(X_.number,X_.number,a => a.reduce( (b, c) => b + c, 0)),
                [3]: new y0(X_.number,X_.number,a => a.reduce( (b, c) => b * c, 1)),
                [4]: new y0(X_.number,X_.number,a => Math.max(...a)),
                [5]: new y0(X_.number,X_.number,a => Math.min(...a)),
                [6]: new y0(X_.string,X_.string,a => a.join(""))
            }
              , Igc = a => a0.array(a)
              , Jgc = a => a0.set(a)
              , udc = {
                [0]: a => new y0(a,X_.array(a),Igc),
                [1]: a => new y0(a,X_.set(a),Jgc)
            }
              , agc = a => a0.map(a)
              , hdc = {
                [0]: (a, b) => new bgc(a,b,X_.map(a, b))
            }
              , Zfc = a => a0.P(a)
              , zdc = {
                [0]: a => new $fc(a,X_.P(a))
            }
              , Kgc = (a, b) => a0.array(b.map(c => c()))
              , Lgc = (a, b) => a0.array(b.flatMap(c => c().items))
              , Mgc = (a, b) => a0.array(a.filter( (c, d) => b[d]()).map(c => c()))
              , Ngc = (a, b) => b.some(c => c())
              , Ogc = (a, b) => b.every(c => c())
              , Pgc = (a, b) => a.find( (c, d) => b[d]())?.()
              , jdc = {
                [0]: (a, b) => b.map(c => Q_(a, c, X_.array(c), Kgc)),
                [1]: (a, b) => b.KT().map(c => Q_(a, X_.array(c), X_.array(c), Lgc)),
                [2]: a => Q_(a, X_.Cd, X_.array(a), Mgc),
                [3]: a => Q_(a, X_.Cd, X_.Cd, Ngc),
                [4]: a => Q_(a, X_.Cd, X_.Cd, Ogc),
                [5]: a => Q_(a, X_.Cd, X_.optional(a), Pgc)
            };
            var V_ = class {
                define(a, b) {
                    return new V_(new Map([[a, b]]),this)
                }
                resolve(a) {
                    const b = this.defs.get(a);
                    if (b)
                        return b;
                    if (this.parent)
                        return this.parent.resolve(a);
                    throw Error(`undefined symbol: "${a}"`);
                }
                constructor(a, b) {
                    this.defs = a;
                    this.parent = b
                }
            }
            ;
            var Rgc = (a, b, c) => {
                const d = U_.create(b.RL)
                  , e = new Qgc(a);
                return {
                    compile: f => {
                        const g = ndc(e, d, f).as(c);
                        return h => {
                            h = new V_(new Map(b.decode(h).vKa));
                            return g(h)
                        }
                    }
                }
            }
              , U_ = class {
                static create(a) {
                    return new U_(new V_(new Map(a)),new V_(new Map))
                }
                constructor(a=new V_(new Map), b=new V_(new Map)) {
                    this.vars = a;
                    this.E8 = b
                }
            }
              , Qgc = class {
                constructor(a) {
                    this.types = a
                }
            }
              , Z_ = class {
                static of(a, b) {
                    return new Z_(a,b)
                }
                as(a) {
                    if (!R_(this.type, a))
                        throw Error(`type ${this.type} does not match expected type: ${a}`);
                    return this.evaluate
                }
                computed() {
                    const a = this.evaluate;
                    return new Z_(this.type,b => {
                        const c = j0(a(b), {
                            equals: a0.Dg
                        });
                        return () => c.get()
                    }
                    )
                }
                map(a) {
                    return a(this.type, this.evaluate)
                }
                constructor(a, b) {
                    this.type = a;
                    this.evaluate = b
                }
            }
              , Kdc = class {
                as(a, b) {
                    const c = this.Woa
                      , d = this.resultType;
                    if (a.length < c.length)
                        throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                    for (let e = 0; e < c.length; e++)
                        if (!R_(a[e], c[e]))
                            throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                    if (!R_(d, b))
                        throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                    return this.evaluate
                }
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.Woa = a;
                    this.resultType = b;
                    this.evaluate = c
                }
            }
            ;
            var uec = class {
                add(a) {
                    a = a(Sgc, this.types);
                    return new uec({
                        ...this.classes,
                        ...a
                    })
                }
                resolve(a) {
                    return this.classes[a]
                }
                evaluate(a) {
                    const b = this.types;
                    switch (a.kind) {
                    case 0:
                        switch (a.name) {
                        case "string":
                            return b.string;
                        case "number":
                            return b.number;
                        case "boolean":
                            return b.Cd;
                        case "undefined":
                            return b.undefined;
                        default:
                            throw new A(a);
                        }
                    case 1:
                        return b.instance(a.name);
                    case 4:
                        switch (a.name) {
                        case "array":
                            return b.array(this.evaluate(a.lTa));
                        case "set":
                            return b.set(this.evaluate(a.lTa));
                        default:
                            throw new A(a);
                        }
                    case 5:
                        switch (a.name) {
                        case "map":
                            const c = this.evaluate(a.lTa);
                            a = this.evaluate(a.RXb);
                            if (!R_(c, b.primitive))
                                throw Error(`key type is not a primitive: ${c}`);
                            return b.map(c, a);
                        default:
                            throw new A(a);
                        }
                    case 3:
                        return b.union(...a.args.map(c => this.evaluate(c)));
                    case 2:
                        return b.P(bf(a.args, c => this.evaluate(c)));
                    default:
                        throw new A(a);
                    }
                }
                constructor(a) {
                    this.classes = a;
                    this.types = new ugc(this.classes);
                    this.values = new Hgc(this.classes)
                }
            }
              , Sgc = class {
                constructor(a, b, c) {
                    this.name = a;
                    this.create = c;
                    this.aGb = new O_([X_.P(b)],X_.instance(this),d => a0.instance(this, c(d.fields)))
                }
            }
            ;
            var Tgc;
            Tgc = Symbol.iterator;
            var Ldc = class {
                static D(a) {
                    L(a, {
                        R$: j0
                    })
                }
                get R$() {
                    const a = new Map;
                    this.base.forEach(b => a.set(this.xg(b), b));
                    return a
                }
                gv(a) {
                    return z(this.R$.get(a))
                }
                H0(a) {
                    return a != null ? this.xg(a) : void 0
                }
                get size() {
                    return this.base.size
                }
                get(a) {
                    a = this.base.get(a);
                    return this.H0(a)
                }
                has(a) {
                    return this.base.has(a)
                }
                forEach(a) {
                    this.base.forEach( (b, c) => a(this.xg(b), c))
                }
                map(a) {
                    return this.base.map( (b, c) => a(this.xg(b), c))
                }
                set(a, b) {
                    return this.xg(this.base.set(a, this.jJ(b)))
                }
                every(a) {
                    return this.base.every( (b, c) => a(this.xg(b), c))
                }
                delete(a) {
                    this.base.delete(a)
                }
                entries() {
                    return Ndc(this.base.entries(), ([a,b]) => [a, this.xg(b)])
                }
                keys() {
                    return this.base.keys()
                }
                values() {
                    return Ndc(this.base.values(), this.xg)
                }
                [Tgc]() {
                    return this.Xl()[Symbol.iterator]()
                }
                Xl() {
                    return md(this.base.Xl(), this.xg)
                }
                constructor(a, b, c) {
                    this.base = a;
                    this.jJ = b;
                    this.xg = c;
                    Ldc.D(this)
                }
            }
            ;
            var Ugc;
            Ugc = Symbol.iterator;
            var Odc = class {
                static D(a) {
                    L(a, {
                        R$: j0
                    })
                }
                get R$() {
                    const a = new Map;
                    this.base.forEach(b => a.set(this.xg(b), b));
                    return a
                }
                gv(a) {
                    return z(this.R$.get(a))
                }
                H0(a) {
                    return a != null ? this.xg(a) : void 0
                }
                get empty() {
                    return this.base.empty
                }
                count() {
                    return this.base.count()
                }
                toArray() {
                    return this.base.toArray().map(this.xg)
                }
                Xl() {
                    return md(this.base.Xl(), this.xg)
                }
                [Ugc]() {
                    return this.toArray()[Symbol.iterator]()
                }
                first(a) {
                    return this.H0(this.base.first(a && (b => a(this.xg(b)))))
                }
                last(a) {
                    return this.H0(this.base.last(a && (b => a(this.xg(b)))))
                }
                next(a, b) {
                    return this.H0(this.base.next(this.gv(a), b && (c => b(this.xg(c)))))
                }
                previous(a, b) {
                    return this.H0(this.base.previous(this.gv(a), b && (c => b(this.xg(c)))))
                }
                bf(a, b) {
                    return this.base.bf(this.gv(a), this.gv(b))
                }
                Qw(a) {
                    return this.base.Qw(this.gv(a))
                }
                has(a) {
                    return this.base.has(this.gv(a))
                }
                set(a, b) {
                    return this.xg(this.base.set(a, this.jJ(b)))
                }
                replace(a, b) {
                    return this.xg(this.base.replace(this.gv(a), this.jJ(b)))
                }
                append(a) {
                    return this.xg(this.base.append(this.jJ(a)))
                }
                prepend(a) {
                    return this.xg(this.base.prepend(this.jJ(a)))
                }
                LI(a, b) {
                    return this.xg(this.base.LI(a && this.gv(a), this.jJ(b)))
                }
                insertBefore(a, b) {
                    return this.xg(this.base.insertBefore(a && this.gv(a), this.jJ(b)))
                }
                bF(a, b) {
                    return this.base.bF(a && this.gv(a), b.map(this.jJ)).map(this.xg)
                }
                delete(a) {
                    this.base.delete(this.gv(a))
                }
                dB(a) {
                    this.base.dB(a && (b => a(this.xg(b))))
                }
                moveBefore(a, b) {
                    this.base.moveBefore(a && this.gv(a), this.gv(b))
                }
                jq(a) {
                    return new __c.xK(this,a)
                }
                map(a) {
                    return this.base.map( (b, c) => a(this.xg(b), c))
                }
                flatMap(a) {
                    return this.base.flatMap( (b, c) => a(this.xg(b), c))
                }
                filter(a) {
                    return this.base.filter( (b, c) => a(this.xg(b), c)).map(this.xg)
                }
                forEach(a) {
                    this.base.forEach( (b, c) => a(this.xg(b), c))
                }
                reduce(a, b) {
                    return this.base.reduce( (c, d) => a(c, this.xg(d)), b)
                }
                some(a) {
                    return this.base.some(b => a(this.xg(b)))
                }
                every(a) {
                    return this.base.every(b => a(this.xg(b)))
                }
                constructor(a, b, c) {
                    this.base = a;
                    this.jJ = b;
                    this.xg = c;
                    Odc.D(this)
                }
            }
            ;
            var E0 = class {
                GM(a) {
                    return new Vgc(this,a)
                }
                u8(a) {
                    return new Wgc(this,a)
                }
                JS(a) {
                    return new Xgc(this,a)
                }
                toString() {
                    return this.s ?? (this.s = this.S$())
                }
            }
              , cec = class extends E0 {
                GM(a) {
                    return new Ygc(a)
                }
                u8() {
                    throw Error();
                }
                JS() {
                    throw Error();
                }
                S$() {
                    return "(global)"
                }
            }
              , Ygc = class extends E0 {
                S$() {
                    return this.name
                }
                constructor(a) {
                    super();
                    this.name = a
                }
            }
              , Vgc = class extends E0 {
                S$() {
                    return `${this.parent}.${this.name}`
                }
                constructor(a, b) {
                    super();
                    this.parent = a;
                    this.name = b
                }
            }
              , Wgc = class extends E0 {
                S$() {
                    return `${this.parent}["${this.key}"]`
                }
                constructor(a, b) {
                    super();
                    this.parent = a;
                    this.key = b
                }
            }
              , Xgc = class extends E0 {
                S$() {
                    return `${this.parent}[${this.index}]`
                }
                constructor(a, b) {
                    super();
                    this.parent = a;
                    this.index = b
                }
            }
              , bec = class {
                error(a, b) {
                    return Error(`widget '${this.oUb}': schema error on key '${a}': ${b}`)
                }
                constructor(a) {
                    this.oUb = a
                }
            }
              , fec = {
                string: "string",
                boolean: "boolean",
                double: "number",
                int32: "number",
                list: "object",
                dict: "object",
                ref: "object",
                fill: "object",
                stroke: "object",
                text2: "object"
            }
              , Wdc = new Set(["string", "boolean", "int32"])
              , gec = {
                font: "font",
                media: "media",
                video: "video",
                audio: "audio",
                embed: "embed",
                scene: "scene",
                blueprint: "blueprint"
            };
            var Zgc, $gc = class {
                get value() {
                    return this.box.get()
                }
                constructor(a, b) {
                    this.id = a;
                    this.box = b
                }
            }
            ;
            Zgc = Symbol.iterator;
            var wec = class {
                static D(a) {
                    L(a, {
                        Dr: j0,
                        ES: j0,
                        NT: j0
                    })
                }
                get Dr() {
                    const a = new Map;
                    this.cells.forEach( (b, c) => a.set(b.value, c));
                    return a
                }
                Xk(a) {
                    return z(this.Dr.get(a), "ref not found")
                }
                get empty() {
                    return !this.cells.length
                }
                count() {
                    return this.cells.length
                }
                toArray() {
                    return this.cells.map(a => a.value)
                }
                Xl() {
                    return new Map(this.map( (a, b) => [b, a]))
                }
                get ES() {
                    return this.cells[0]?.value
                }
                get NT() {
                    return this.cells[this.cells.length - 1]?.value
                }
                first(a) {
                    return a ? this.cells.find(b => a(b.value))?.value : this.ES
                }
                last(a) {
                    if (!a)
                        return this.NT;
                    const b = this.cells;
                    for (let c = b.length - 1; c >= 0; c--) {
                        const d = b[c];
                        if (a(d.value))
                            return d.value
                    }
                }
                next(a, b) {
                    const c = this.cells;
                    for (a = this.Xk(a) + 1; a < c.length; a++) {
                        const d = c[a];
                        if (d && (!b || b(d.value)))
                            return d.value
                    }
                }
                previous(a, b) {
                    const c = this.cells;
                    for (a = this.Xk(a) - 1; a >= 0; a--) {
                        const d = c[a];
                        if (d && (!b || b(d.value)))
                            return d.value
                    }
                }
                bf(a, b) {
                    a = this.Dr.get(a);
                    b = this.Dr.get(b);
                    u(a != null);
                    u(b != null);
                    return a < b ? -1 : a > b ? 1 : 0
                }
                Qw(a) {
                    return this.cells[this.Xk(a)].id
                }
                has(a) {
                    return this.Dr.has(a)
                }
                jq(a) {
                    return new __c.xK(this,a)
                }
                map(a) {
                    return this.cells.map(b => a(b.value, b.id))
                }
                flatMap(a) {
                    return this.cells.flatMap(b => a(b.value, b.id))
                }
                filter(a) {
                    return this.cells.filter(b => a(b.value, b.id)).map(b => b.value)
                }
                forEach(a) {
                    this.cells.forEach(b => a(b.value, b.id))
                }
                reduce(a, b) {
                    return this.cells.reduce( (c, d) => a(c, d.value, d.id), b)
                }
                some(a) {
                    return this.cells.some(b => a(b.value, b.id))
                }
                every(a) {
                    return this.cells.every(b => a(b.value, b.id))
                }
                [Zgc]() {
                    return this.toArray()[Symbol.iterator]()
                }
                constructor(a) {
                    this.cells = (wec.D(this),
                    void 0);
                    this.cells = a.map( (b, c) => new $gc(String(c),b))
                }
            }
            ;
            var Pec, nec, hec, ahc, bhc;
            __c.F0 = class {
                map(a, b) {
                    const c = this.get
                      , d = this.set;
                    return new __c.F0( () => a(c()),e => d(b(e)))
                }
                project({get: a, set: b}) {
                    const c = this.get
                      , d = this.set;
                    return new __c.F0( () => a(c()),e => d(b(c(), e)))
                }
                constructor(a, b) {
                    this.get = a;
                    this.set = b
                }
            }
            ;
            Pec = class {
                read(a) {
                    return d0(a) ? a() : a
                }
                computed(a) {
                    const b = j0(a);
                    return () => b.get()
                }
                map(a, b) {
                    return d0(a) ? () => b(a()) : b(a)
                }
                box(a) {
                    return new jfc(d0(a) ? new ifc(j0(a)) : new hfc(a))
                }
                list(a) {
                    const b = this.map(a, c => new __c.oub(new wec(c.map(d => d0(d) ? j0(d) : iec(d)))));
                    return d0(b) ? __c.Pg( () => b()) : b
                }
                constructor() {
                    this.classes = tec()
                }
            }
            ;
            nec = a => {
                const b = a.aq
                  , c = a.Ge
                  , d = c.W
                  , e = c.attributes;
                jec(a.args, d, e);
                return {
                    create: function(f, g) {
                        const h = {};
                        var k;
                        const l = g?.W;
                        g = g?.attributes;
                        if (l)
                            for (const [m,n] of Object.entries(l))
                                u(m in d, "unknown override: '{}'", m),
                                d0(n) ? (k || (k = {}))[m] = n : h[m] = ahc(n);
                        if (g)
                            for (const [m,n] of Object.entries(g))
                                u(m in e, "unknown override: '{}'", m),
                                h[m] = n instanceof __c.F0 ? n : d0(n) ? {
                                    enumerable: !0,
                                    get: n,
                                    set: hec
                                } : bhc(n);
                        if (k)
                            return kec(k, mec(m => {
                                const n = b(f);
                                Object.defineProperties(n, {
                                    ...h,
                                    ...bf(m, ahc)
                                });
                                return n
                            }
                            ));
                        k = b(f);
                        Object.defineProperties(k, h);
                        return k
                    }
                }
            }
            ;
            hec = () => {}
            ;
            ahc = a => ({
                enumerable: !0,
                writable: !1,
                value: a
            });
            bhc = a => ({
                enumerable: !0,
                get: () => a,
                set: hec
            });
            var e0 = {
                top: void 0,
                left: void 0,
                width: void 0,
                height: void 0,
                rotation: void 0,
                locked: void 0,
                Qg: void 0
            };
            var chc = new Map
              , G0 = []
              , g0 = Object.freeze({
                ym: void 0,
                image: void 0,
                video: void 0,
                Ta: void 0,
                color: void 0,
                za: 0,
                locked: !0,
                yg: !0,
                wl: void 0,
                cd: void 0,
                K: void 0,
                transition: void 0,
                flipX: !1,
                flipY: !1
            })
              , qec = Object.freeze({
                fill: g0,
                stroke: void 0,
                O: 0
            })
              , pec = Object.freeze({
                weight: 0,
                color: "#000000",
                fill: g0,
                Uc: G0,
                Ce: !1
            })
              , H0 = Object.freeze({
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                rotation: 0,
                za: 0,
                gj: void 0,
                fa: void 0,
                K: void 0,
                transition: void 0,
                pa: G0,
                ac: G0,
                animation: void 0,
                Uf: void 0,
                link: void 0,
                locked: !0,
                Qg: void 0,
                yg: !0,
                wl: void 0,
                Xa: void 0,
                zs: void 0,
                Lf: G0,
                SF: chc,
                hG: chc,
                anchor: void 0,
                ih: chc
            })
              , h0 = Object.freeze({
                ...H0,
                type: "rect",
                fill: g0,
                stroke: void 0,
                O: G0
            })
              , i0 = Object.freeze({
                ...H0,
                type: "shape",
                slice: void 0,
                Xj: void 0,
                ub: G0,
                resizeMode: void 0
            })
              , rec = Object.freeze({
                ...H0,
                type: "text",
                text: __c.qk.Ny("\n"),
                Ka: Object.freeze({
                    Ya: []
                }),
                Re: void 0,
                placeholder: void 0,
                Kf: 1,
                writingMode: void 0,
                I: void 0,
                N: void 0,
                Ro: !1,
                TA: void 0,
                Kh: void 0,
                cd: void 0
            })
              , sec = Object.freeze({
                ...H0,
                type: "embed"
            });
            var Nec = class {
                N6(a, b) {
                    const c = __c.qh(a);
                    __c.x(c.type !== "body", "Unexpected body context.");
                    switch (c.type) {
                    case "fixed-page":
                        return {
                            page: this.wj.n0a(c),
                            S: new dhc(a),
                            Pk: a.G.id,
                            ff: b
                        };
                    case "concatenated-fixed-page":
                        return {
                            page: this.wj.d0a(c),
                            S: new dhc(a),
                            Pk: a.G.id,
                            ff: b
                        };
                    case "responsive-page":
                        return {
                            page: this.wj.C0a(c),
                            S: new dhc(a),
                            Pk: a.G.id,
                            ff: b
                        };
                    default:
                        throw new A(c);
                    }
                }
                constructor(a, b) {
                    this.gqa = a;
                    u(b.Tf === "fixed", "Responsive documents are not supported in widget rendering.");
                    this.Fa = __c.vh(b);
                    this.wj = new ehc(this.gqa,this.Fa)
                }
            }
              , dhc = class {
                get width() {
                    return this.container.type === "controlled-item" ? this.container.G.lf?.width || 0 : this.container.G.I
                }
                get height() {
                    return this.container.type === "controlled-item" ? this.container.G.lf?.height || 0 : this.container.G.N
                }
                constructor(a) {
                    this.container = a
                }
            }
              , fhc = class {
                getIndex() {
                    return this.PM(this.page)
                }
                get id() {
                    return this.page.G.id
                }
                get title() {
                    return this.page.G.title
                }
                get anchor() {
                    return this.page.G.anchor
                }
                get Y2a() {
                    return this.page.G.sg
                }
                constructor(a, b) {
                    this.page = a;
                    this.PM = b
                }
            }
              , ghc = class extends fhc {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "fixed"
                }
            }
              , hhc = class extends fhc {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "concatenated-fixed"
                }
            }
              , ihc = class extends fhc {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "responsive"
                }
            }
              , jhc = class {
                get id() {
                    return this.gqa?.id
                }
                get extension() {
                    return this.gqa?.extension
                }
                get language() {
                    return this.Fa.G.language
                }
                constructor(a, b) {
                    this.gqa = a;
                    this.Fa = b
                }
            }
              , ehc = class extends jhc {
                static D(a) {
                    L(a, {
                        ba: j0({
                            equals: pfc.shallow
                        }),
                        R6a: j0({
                            equals: pfc.shallow
                        })
                    })
                }
                get ba() {
                    return this.Fa.G.ba.map(a => this.fyb(this.Fa.De(a)))
                }
                get R6a() {
                    return this.Fa.G.ba.toArray()
                }
                constructor(a, b) {
                    super(a, b);
                    this.$n = a;
                    this.Fa = b;
                    this.type = (ehc.D(this),
                    "fixed");
                    this.n0a = q0(c => new ghc(c,this.PM,this));
                    this.d0a = q0(c => new hhc(c,this.PM,this));
                    this.C0a = q0(c => new ihc(c,this.PM,this));
                    this.fyb = q0(c => {
                        switch (c.type) {
                        case "fixed-page":
                            return this.n0a(c);
                        case "concatenated-fixed-page":
                            return this.d0a(c);
                        case "responsive-page":
                            return this.C0a(c);
                        default:
                            throw new A(c);
                        }
                    }
                    );
                    this.PM = q0(c => {
                        c = this.Fa.G.ba.has(c.G) ? c.G : void 0;
                        return c != null ? this.R6a.indexOf(c) : -1
                    }
                    )
                }
            }
            ;
            var khc = class {
                constructor(a) {
                    this.CKa = a;
                    this.DWa = new Map
                }
            }
            ;
            var lhc = Object.freeze({
                empty: !0,
                count() {
                    return 0
                },
                toArray() {
                    return []
                },
                Xl() {
                    return new Map
                },
                first() {},
                last() {},
                next() {
                    k0()
                },
                previous() {
                    k0()
                },
                bf() {
                    k0()
                },
                Qw() {
                    k0()
                },
                has() {
                    return !1
                },
                jq() {
                    return this
                },
                map() {
                    return []
                },
                flatMap() {
                    return []
                },
                filter() {
                    return []
                },
                forEach() {},
                reduce(a, b) {
                    return b
                },
                some() {
                    return !1
                },
                every() {
                    return !0
                },
                [Symbol.iterator]() {
                    return [][Symbol.iterator]()
                }
            });
            var Kec = class {
                add(a, b) {
                    let c = this.store.get(a);
                    c || (c = t0.set(void 0, {
                        deep: !1
                    }),
                    this.store.set(a, c));
                    c.add(b)
                }
                get(a) {
                    return this.store.get(a)
                }
                remove(a, b) {
                    const c = this.store.get(a);
                    c && (c.delete(b),
                    c.size === 0 && this.store.delete(a))
                }
                constructor() {
                    this.store = new __c.rB
                }
            }
            ;
            var Aec = class {
                Kc(a) {
                    let b = this.store.get(a);
                    b == null && (b = this.Drb(),
                    this.store.set(a, b));
                    return b
                }
                constructor(a) {
                    this.Drb = a;
                    this.store = new WeakMap
                }
            }
            ;
            var Jcc = new Set
              , Kcc = {
                Ly: () => ({
                    Pa: lhc
                })
            }
              , Oec = class {
                static D(a) {
                    L(a, {
                        dV: t0.shallow
                    })
                }
                Lja(a) {
                    return this.dV.get(a)?.G
                }
                constructor(a, b, c, d, e, f, g, h) {
                    this.Fa = a;
                    this.CKa = b;
                    this.D3 = c;
                    this.Qya = d;
                    this.J = e;
                    this.lUb = f;
                    this.ue = g;
                    this.dub = h;
                    this.dV = (Oec.D(this),
                    new Map)
                }
            }
              , Hec = (a, b) => ({
                ...a,
                Wea: c => m_(a.Wea, {
                    ...c,
                    Vob: b || !1
                })
            })
              , Iec = (a, b) => ({
                ...a,
                Oj: c => m_(a.Oj, {
                    ...c,
                    scale: b || 1
                })
            });
            var mhc = class {
                static D(a) {
                    L(a, {
                        dca: t0.shallow
                    })
                }
                constructor(a) {
                    this.zWa = a;
                    this.dca = (mhc.D(this),
                    new Map)
                }
            }
            ;
            var nhc = class extends mfc {
                render() {
                    const {children: a, component: b="div", QKb: c, hoa: d} = this.props;
                    let e = {};
                    d && (e = c.reduce( (f, g) => {
                        f[g] = this.pmb;
                        return f
                    }
                    , {}));
                    return m_(b, {
                        className: "_kI3Pw",
                        ...e,
                        children: a
                    })
                }
                componentDidMount() {
                    this.props.hoa && Xec(this)
                }
                componentDidUpdate() {
                    this.props.hoa && Xec(this)
                }
                componentWillUnmount() {
                    this.zQ && (this.zQ(),
                    this.zQ = null)
                }
                constructor(...a) {
                    super(...a);
                    this.nva = this.zQ = null;
                    this.pmb = b => {
                        this.nva = b.nativeEvent
                    }
                    ;
                    this.TRa = b => {
                        const c = this.props.hoa
                          , d = this.nva === b;
                        c && !d && c(b);
                        this.nva = null
                    }
                }
            }
            ;
            var $ec = a => m_(nhc, {
                QKb: ["onMouseDown", "onTouchStart"],
                xtb: ["mousedown", "touchstart"],
                hoa: a.Aaa,
                children: a.children
            });
            var Yec = class {
                static D(a) {
                    L(a, {
                        Sj: t0.ref
                    })
                }
                constructor() {
                    this.Sj = (Yec.D(this),
                    !0)
                }
            }
              , Zec = class {
                static D(a) {
                    L(a, {
                        onDoubleClick: qfc.bound,
                        onTouchEnd: qfc.bound,
                        reset: qfc.bound
                    })
                }
                onDoubleClick() {
                    this.store.Sj = !1
                }
                onTouchEnd(a) {
                    a.touches.length > 0 || (this.VV ? (window.clearTimeout(this.VV),
                    this.VV = void 0,
                    this.store.Sj = !1) : this.VV = window.setTimeout( () => this.VV = void 0, 300))
                }
                reset() {
                    this.store.Sj = !0
                }
                pY() {
                    this.VV && window.clearTimeout(this.VV)
                }
                constructor(a) {
                    this.store = a;
                    this.VV = (Zec.D(this),
                    void 0)
                }
            }
            ;
            __c.q0a = {
                SAb: function({document: a, wj: b, Ep: c, Vz: d, XD: e, wH: f, dg: g, Wia: h, Ca: k, Ff: l, ke: m, eg: n, ff: p, xE: q, qUb: r, Fbb: t, gab: v, nka: w}) {
                    const y = g.hN
                      , B = g.rh;
                    var D = g.J;
                    const C = g.uf
                      , H = g.ka
                      , J = g.dZa
                      , M = g.$a;
                    var O = h.Iu;
                    const {KAa: Q=!1, XAa: R=!1, SAa: U=!1} = r ?? {}
                      , {Jn: W, Qya: ba} = {
                        Jn: xec(),
                        Qya: Rgc
                    };
                    r = new mhc(dec(W));
                    const {QPa: da, Dta: ja, $ya: ra, D3: ta} = {
                        QPa: r,
                        Dta: r,
                        $ya: ba,
                        D3: W
                    };
                    r = Acc({
                        QPa: da,
                        KAa: Q,
                        XAa: R,
                        SAa: U
                    });
                    var ka = new khc(ja);
                    const {PPa: ya, Oib: aa} = {
                        PPa: ka,
                        Oib: ka
                    };
                    ka = Hcc({
                        RPa: r,
                        PPa: ya
                    });
                    D = D.Xf("widget");
                    O = afc({
                        Iu: O,
                        $a: M
                    });
                    const fa = efc();
                    m = ffc({
                        ke: m
                    });
                    n = bfc({
                        rj: n
                    });
                    const pa = dfc({
                        Ca: k,
                        nka: w
                    });
                    w = gfc({
                        Ca: k,
                        nka: w
                    });
                    const {Eea: sa, sD: Ea, expr: Ca} = Qec({
                        J: D,
                        Dta: ja,
                        pUb: {
                            Wea: O,
                            Wkb: fa,
                            Oj: m,
                            Um: n,
                            Zea: pa,
                            Jua: w
                        },
                        mUb: {
                            Oj: Uec()
                        },
                        $ya: ra,
                        D3: ta,
                        $n: b,
                        Fa: a,
                        Fbb: t,
                        gab: v
                    });
                    a = Mbc({
                        ff: p,
                        Iu: h.Iu,
                        Fw: h.Fw,
                        $a: g.$a,
                        J: g.J.Xf("codelet")
                    });
                    const {dV: eb, K_a: Oa} = Scc({
                        RPa: r,
                        Eea: sa,
                        uf: C,
                        BR: {
                            J: D,
                            ka: H,
                            Ff: p === 30 ? l : void 0,
                            $a: M,
                            expr: Ca
                        },
                        ei: {
                            Vz: d,
                            wH: f,
                            XD: e,
                            dZa: J,
                            Ca: k,
                            Ep: c,
                            RW: a,
                            xE: q,
                            hN: y,
                            rh: B
                        }
                    });
                    return {
                        Dta: ja,
                        sD: Ea,
                        Ehc: eb,
                        Chc: ka,
                        Oib: aa,
                        K_a: Oa
                    }
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    },

    /***/
    196751: (_, __, r) => r(258551),

    /***/
    149342: (_, __, r) => r(258551),

    /***/
    761582: (_, __, r) => r(258551),

    /***/
    751088: (_, __, r) => r(258551)

}])
//# sourceMappingURL=sourcemaps/1eb59a70fac22aa1.js.map
