(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[94260], {

    /***/
    697478: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(905716);
        __web_req__(841953);
        __web_req__(563169);
        __web_req__(503407);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var qb = __c.qb;
            var A = __c.A;
            var K = __c.K;
            var mCc = function(a) {
                __c.Okc({
                    ...a,
                    G: a.span
                })
            }
              , O5 = function(a, b) {
                var c = a.Zfb.get(b);
                if (c != null)
                    return c;
                c = {
                    value: a.Kn.cu(b)
                };
                a.Zfb.set(b, c);
                a.Tfb.set(c, b);
                return c
            }
              , P5 = function(a, b) {
                a = a.Tfb.get(b);
                if (a == null)
                    throw new nCc("ref does not exists");
                return a
            }
              , oCc = function() {
                const a = b => {
                    if (b?.type !== "text2")
                        throw new Q5("text2",b);
                    return b.value
                }
                ;
                return {
                    Wl: b => ({
                        type: "text2",
                        value: b
                    }),
                    du: b => {
                        if (b?.type !== "text2")
                            throw new R5("text2",b);
                        return b.value
                    }
                    ,
                    cu: a,
                    Pv: a
                }
            }
              , pCc = function(a) {
                const b = () => a.Il.dD.get(a.If.ij) || S5;
                return {
                    r_: function() {
                        return a.Il.Fl ? 3 : a.Il.CAb === "checking" || a.Il.jd.status === 2 ? 1 : a.Il.jd.status === 3 ? 4 : a.Il.qz ? 2 : 0
                    },
                    JCa: function() {
                        const c = a.If
                          , {pK: d} = b();
                        return !(!d || !c.fields.first( ({value: e}) => e.type === "select" && !!e.options.first( ({value: f}) => f.id === d)))
                    },
                    ayb: function(c, d) {
                        const {results: e} = b();
                        c = e.fields.get(c);
                        if (!c)
                            return 0;
                        d = c.FJ.get(d) ?? 0;
                        d = c.total > 0 ? d / c.total * 100 : 0;
                        Number.isInteger(d) || (d = parseFloat(d.toFixed(1)));
                        return d
                    },
                    Cyb: function(c) {
                        if (!a.If.fields.first( ({value: e}) => e.id === c))
                            return 0;
                        var {results: d} = b();
                        return (d = d.fields.get(c)) ? d.total : 0
                    },
                    XCa: b,
                    pFb: c => {
                        const d = new Map(a.Il.dD);
                        d.set(a.If.ij, {
                            ...b(),
                            ...c
                        });
                        return d
                    }
                }
            }
              , tCc = function(a, b, c, d, e, f) {
                function g() {
                    const v = b.r_()
                      , w = q();
                    return (p === "poll" || !w) && v === 0
                }
                async function h() {
                    const v = f.Nh("submit_response", {
                        wp: {
                            name: "ui.rendering.form.submit_response"
                        }
                    })
                      , w = {
                        sI: m,
                        bka: p,
                        zs: "interacted",
                        action: "response_submitted",
                        location: "in_form"
                    };
                    e && mCc({
                        span: v,
                        ka: e,
                        event: __c.M2,
                        props: w
                    });
                    const {results: y, lg: B, kJa: D} = r();
                    if (B != null && g()) {
                        var C = a.If.fields.first( ({value: Q}) => Q.type === "select" && !!Q.options.first( ({value: R}) => R.id === B)?.value)?.value;
                        if (C) {
                            l("selected_field_found", v);
                            var H = a.Il
                              , J = y;
                            p === "poll" && D && D !== B && (J = qCc({
                                Dwa: y,
                                et: C.id,
                                b1: D
                            }));
                            J = rCc({
                                QWa: J,
                                et: C.id,
                                b1: B
                            });
                            l("field_results_created", v);
                            T5( () => {
                                a.po( () => ({
                                    dD: t({
                                        lg: B,
                                        pK: B,
                                        results: J
                                    }),
                                    qz: !0
                                }))
                            }
                            );
                            l("submission_set", v);
                            v.PZ();
                            var M = await c.ODb({
                                bs: a.If.bs,
                                ij: n,
                                Tva: [{
                                    type: 0,
                                    et: C.id,
                                    zm: C.label.text.stream.Z.trim(),
                                    D2: [B],
                                    options: C.type === "select" ? C.options.map( ({value: Q}) => ({
                                        id: Q.id,
                                        label: Q.label.text.stream.Z.trim()
                                    })) : []
                                }]
                            });
                            if (M.ok)
                                return T5( () => {
                                    const Q = R => !!M.value.result.$Za.get(C.id)?.feedback?.jE?.includes(R);
                                    a.po( () => ({
                                        qz: !1,
                                        jd: {
                                            ...a.Il.jd,
                                            Ila: Q
                                        },
                                        dD: t({
                                            kJa: void 0
                                        })
                                    }))
                                }
                                );
                            d?.ny({
                                Az: K("izckBA"),
                                group: sCc,
                                my: {
                                    Cy: K("mQhziQ"),
                                    onClick: h
                                }
                            });
                            var O = qCc({
                                Dwa: J,
                                et: C.id,
                                b1: B
                            });
                            D && (O = rCc({
                                QWa: O,
                                et: C.id,
                                b1: D
                            }));
                            T5( () => {
                                a.po({
                                    ...H,
                                    ...(D && {
                                        dD: t({
                                            lg: D,
                                            pK: D,
                                            results: O
                                        })
                                    })
                                })
                            }
                            )
                        } else
                            v.abort()
                    } else
                        v.abort()
                }
                async function k(v) {
                    const w = r()
                      , y = a.If.fields.first( ({value: C}) => C.type === "select" && !!C.options.first( ({value: H}) => H.id === v)?.value)?.value;
                    if (y) {
                        var B = a.Il
                          , D = qCc({
                            Dwa: w.results,
                            et: y.id,
                            b1: v
                        });
                        T5( () => {
                            a.po( () => ({
                                dD: t({
                                    lg: void 0,
                                    pK: void 0,
                                    results: D
                                }),
                                AA: void 0,
                                qz: !0
                            }))
                        }
                        );
                        (await c.R1({
                            ij: n
                        })).ok ? T5( () => {
                            a.po({
                                qz: !1
                            })
                        }
                        ) : (d?.ny({
                            Az: K("kgHTHw"),
                            group: sCc,
                            my: {
                                Cy: K("mQhziQ"),
                                onClick: () => k(v)
                            }
                        }),
                        T5( () => {
                            a.po(B)
                        }
                        ))
                    }
                }
                function l(v, w) {
                    w.addEvent(v);
                    w.vd().addEvent(v)
                }
                const m = a.If.id
                  , n = a.If.ij
                  , p = a.If.type
                  , q = b.JCa
                  , r = b.XCa
                  , t = b.pFb;
                return {
                    submit: h,
                    AGa: function() {
                        a.po( () => ({
                            QV: 1
                        }))
                    },
                    BGa: function() {
                        a.po( () => ({
                            QV: 0
                        }))
                    },
                    zGa: function() {
                        a.po( () => ({
                            QV: 2
                        }))
                    },
                    CGa: function() {
                        a.po( () => ({
                            QV: 1
                        }))
                    },
                    Csa: function(v) {
                        const w = r()
                          , y = p === "poll" && v === w?.lg && v === w?.pK;
                        if (g() && y)
                            k(v);
                        else if (g() && a.If.fields.some( ({value: D}) => D.type === "select" && D.options.some( ({value: C}) => C.id === v))) {
                            var B = w?.pK;
                            T5( () => {
                                const D = r();
                                a.po( () => ({
                                    dD: t({
                                        kJa: B,
                                        lg: D.lg === v ? void 0 : v
                                    })
                                }))
                            }
                            );
                            p === "poll" && h()
                        }
                    },
                    Fna: function(v) {
                        g() && a.If.fields.some( ({value: w}) => w.type === "select" && w.options.some( ({value: y}) => y.id === v)) && a.po( () => ({
                            EI: v
                        }))
                    },
                    Gna: function(v) {
                        b.r_() === 0 && a.If.fields.some( ({value: w}) => w.type === "select" && w.options.some( ({value: y}) => y.id === v)) && a.Il.EI && a.po( () => ({
                            EI: void 0
                        }))
                    },
                    Dna: function(v) {
                        const {pK: w, lg: y} = r();
                        b.r_() === 0 && a.If.fields.some( ({value: B}) => B.type === "select" && B.options.some( ({value: D}) => D.id === v)) && y !== v && !w && a.po( () => ({
                            AA: v
                        }))
                    },
                    Hna: function(v) {
                        b.r_() === 0 && a.If.fields.some( ({value: w}) => w.type === "select" && w.options.some( ({value: y}) => y.id === v)) && a.Il.AA && a.po( () => ({
                            AA: void 0
                        }))
                    }
                }
            }
              , qCc = function({Dwa: a, et: b, b1: c}) {
                const d = a.fields.get(b) ?? {
                    id: b,
                    FJ: new Map,
                    total: 0
                }
                  , e = Math.max(0, (d.FJ.get(c) ?? 0) - 1)
                  , f = new Map(d.FJ);
                e > 0 ? f.set(c, e) : f.delete(c);
                return {
                    fields: uCc(a.fields, b, {
                        id: b,
                        FJ: f,
                        total: Math.max(0, d.total - 1)
                    })
                }
            }
              , rCc = function({QWa: a, et: b, b1: c}) {
                const d = a.fields.get(b) ?? {
                    id: b,
                    FJ: new Map,
                    total: 0
                }
                  , e = (d.FJ.get(c) ?? 0) + 1;
                return {
                    fields: uCc(a.fields, b, {
                        id: b,
                        FJ: uCc(d.FJ, c, e),
                        total: d.total + 1
                    })
                }
            }
              , uCc = function(a, b, c) {
                return new Map([...a.entries(), [b, c]])
            }
              , U5 = function(a, b) {
                __c.u(b.length > 0, "zero contrast candidates received");
                const c = new Map;
                return __c.Ci(b, d => {
                    const e = c.get(d) ?? __c.Ol(d, a);
                    c.set(d, e);
                    return e
                }
                )
            }
              , vCc = function(a, b) {
                return __c.ooc(a, b) >= 20 ? a : U5(b, V5)
            }
              , W5 = function(a) {
                switch (a.type) {
                case "color":
                    return a.color;
                case "gradient":
                    return a.Ta.Pg[0].color;
                default:
                    throw new A(a);
                }
            }
              , X5 = function({layout: a, direction: b, gap: c, padding: d, background: e, border: f, O: g, cells: h, ...k}) {
                a = a === "vertical";
                let l = [];
                const m = []
                  , n = c && d
                  , p = d ? 1 : 0;
                let q = 1;
                for (let r = 0; r < h.length; r++) {
                    const t = h[r];
                    typeof t.size === "string" ? l.push(t.size) : l.push(`${t.size}px`);
                    m.push({
                        ...t,
                        id: t.id,
                        placement: a ? {
                            gridColumnStart: `${p + 1}`,
                            gridColumnEnd: `${p + 2}`,
                            gridRowStart: `${p + q}`,
                            gridRowEnd: `${p + q + 1}`,
                            padding: t.padding ? wCc(t.padding) : void 0,
                            alignSelf: t.alignSelf
                        } : {
                            gridColumnStart: `${p + q}`,
                            gridColumnEnd: `${p + q + 1}`,
                            gridRowStart: `${p + 1}`,
                            gridRowEnd: `${p + 2}`,
                            padding: t.padding ? wCc(t.padding) : void 0,
                            alignSelf: t.alignSelf
                        }
                    });
                    q += n ? 2 : 1
                }
                n && (l = l.join(` ${c}px `).split(" "));
                d && (l = [`${d}px`, ...l, `${d}px`]);
                return {
                    ...k,
                    type: "layout",
                    cells: m,
                    direction: b,
                    fill: e,
                    border: f,
                    O: g,
                    gridTemplateColumns: a ? d ? [`${d}px`, "1fr", `${d}px`] : ["1fr"] : l,
                    gridTemplateRows: a ? l : d ? [`${d}px`, "auto", `${d}px`] : ["auto"],
                    columnGap: n || a ? void 0 : c,
                    rowGap: !n && a ? c : void 0
                }
            }
              , xCc = function({padding: a, direction: b, background: c, O: d, za: e, border: f, content: g, ref: h, key: k, ...l}) {
                return {
                    ...l,
                    type: "layout",
                    direction: b,
                    gridTemplateColumns: ["1fr"],
                    gridTemplateRows: ["1fr"],
                    fill: c,
                    O: d,
                    za: e,
                    border: f,
                    cells: [{
                        id: "_",
                        content: g,
                        placement: {
                            gridColumnStart: "1",
                            gridColumnEnd: "2",
                            gridRowStart: "1",
                            gridRowEnd: "2",
                            alignSelf: "center",
                            padding: a
                        }
                    }],
                    key: k,
                    ref: h
                }
            }
              , wCc = function(a) {
                switch (a.length) {
                case 0:
                    break;
                case 1:
                    return a[0];
                case 2:
                    return {
                        ha: a[0],
                        Ha: a[1],
                        wa: a[0],
                        ma: a[1]
                    };
                case 4:
                    return {
                        ha: a[0],
                        Ha: a[1],
                        wa: a[2],
                        ma: a[3]
                    };
                default:
                    throw Error(`Invalid padding value: ${a}`);
                }
            }
              , Y5 = function(a, b) {
                a = __c.qk.create(__c.qk.snapshot(a.text));
                b != null && a.stream.setAttributes(b);
                return {
                    type: "text",
                    yG: 1,
                    text: __c.qk.snapshot(a)
                }
            }
              , Z5 = function(a) {
                switch (a) {
                case "l":
                    return 1;
                case "r":
                    return 2;
                default:
                    throw new A(a);
                }
            }
              , $5 = function(a) {
                switch (a) {
                case "l":
                    return "ltr";
                case "r":
                    return "rtl";
                default:
                    throw new A(a);
                }
            }
              , yCc = function(a) {
                if (a)
                    return {
                        Csa: a.Csa,
                        Fna: a.Fna,
                        Gna: a.Gna,
                        Dna: a.Dna,
                        Hna: a.Hna
                    }
            }
              , zCc = function({direction: a, text: b, background: c}) {
                return {
                    id: "header",
                    size: "auto",
                    fill: c,
                    padding: [20, 20, 16, 20],
                    content: Y5(b, {
                        direction: $5(a)
                    })
                }
            }
              , CCc = function({direction: a, messages: b, hIa: c, fontFamily: d, lba: e, O: f, state: g, Aq: h, Lt: k}) {
                var l = h !== k
                  , m = U5(k, V5);
                h = l ? h : m;
                m = vCc("#000000", k);
                var n = vCc(h, k);
                l = ACc(g, g === 3 && l ? n : m, l);
                b = {
                    type: "layout",
                    gridTemplateRows: ["10px", "1fr", "10px"],
                    gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
                    fill: l,
                    cells: [{
                        id: "text",
                        placement: {
                            gridColumnStart: "2",
                            gridColumnEnd: "3",
                            gridRowStart: "2",
                            gridRowEnd: "3",
                            alignSelf: "center"
                        },
                        content: Y5(c, {
                            direction: $5(a),
                            ...(g === 3 && {
                                color: U5(h, V5)
                            })
                        })
                    }, g === 3 || g === 4 || g === 5 ? {
                        id: "percentage",
                        placement: {
                            gridColumnStart: "4",
                            gridColumnEnd: "5",
                            gridRowStart: "2",
                            gridRowEnd: "3",
                            alignSelf: "center"
                        },
                        content: {
                            type: "text",
                            yG: 0,
                            fontFamily: d,
                            fontWeight: "bold",
                            fontSize: BCc,
                            text: b.eqa(e),
                            textAlign: "end",
                            direction: $5(a),
                            color: g === 3 ? U5(h, V5) : U5(k, V5)
                        }
                    } : void 0].filter(qb)
                };
                if (g !== 3 && g !== 4 && g !== 5)
                    return b;
                c = e > 0;
                const p = e < 100;
                n = (k = c && !p || !c && p) ? 1 : 2;
                e = [c ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(qb);
                g = {
                    type: "color",
                    color: g === 3 ? h : m,
                    za: g === 3 ? 0 : .8
                };
                return k ? {
                    ...b,
                    fill: c ? g : l
                } : {
                    type: "layout",
                    direction: Z5(a),
                    gridTemplateRows: ["1fr"],
                    gridTemplateColumns: e,
                    fill: l,
                    cells: [{
                        id: "bar",
                        O: f,
                        fill: g,
                        placement: {
                            gridColumnStart: "1",
                            gridColumnEnd: "2",
                            gridRowStart: "1",
                            gridRowEnd: "2"
                        },
                        content: xCc({
                            direction: Z5(a),
                            content: {
                                type: "text",
                                yG: 0,
                                text: "",
                                fontFamily: d,
                                fontSize: BCc,
                                direction: $5(a)
                            }
                        })
                    }, {
                        id: "optionTextWithPercentage",
                        placement: {
                            gridColumnStart: "1",
                            gridColumnEnd: `${n + 1}`,
                            gridRowStart: "1",
                            gridRowEnd: "2"
                        },
                        content: b
                    }]
                }
            }
              , ACc = function(a, b, c) {
                switch (a) {
                case 0:
                    return {
                        type: "color",
                        color: b,
                        za: .92
                    };
                case 1:
                case 5:
                    return {
                        type: "color",
                        color: b,
                        za: .88
                    };
                case 2:
                    return {
                        type: "color",
                        color: b,
                        za: .74
                    };
                case 3:
                    return {
                        type: "color",
                        color: b,
                        za: c ? .5 : .92
                    };
                case 4:
                    return {
                        type: "color",
                        color: b,
                        za: .92
                    };
                default:
                    throw new A(a);
                }
            }
              , DCc = function({Vwb: a, wT: b, et: c, direction: d, options: e, lg: f, EI: g, AA: h, gIa: k, fontFamily: l, Jca: m, Aq: n, Lt: p, messages: q, rta: r}) {
                return {
                    id: "field",
                    size: "1fr",
                    padding: [16, 20],
                    alignSelf: "center",
                    content: X5({
                        layout: "vertical",
                        direction: Z5(d),
                        gap: 8,
                        cells: e.map( ({value: t}) => {
                            var v = t.id === f;
                            const w = t.id === g
                              , y = t.id === h;
                            v = m ? v ? 3 : w ? 5 : 4 : y ? 2 : w ? 1 : 0;
                            return {
                                id: t.id,
                                size: "auto",
                                alignSelf: "center",
                                content: {
                                    ref: r.option,
                                    key: t.id,
                                    O: k,
                                    Bn: () => b?.Csa?.(t.id),
                                    onMouseEnter: () => b?.Fna?.(t.id),
                                    onMouseLeave: () => b?.Gna?.(t.id),
                                    onMouseDown: () => b?.Dna?.(t.id),
                                    onMouseUp: () => b?.Hna?.(t.id),
                                    ...CCc({
                                        messages: q,
                                        hIa: t.label,
                                        direction: d,
                                        fontFamily: l,
                                        lba: a.ayb(c, t.id),
                                        O: k,
                                        state: v,
                                        Aq: n,
                                        Lt: p
                                    })
                                }
                            }
                        }
                        )
                    })
                }
            }
              , ICc = function(a) {
                const b = a.status
                  , c = a.direction
                  , d = a.backgroundColor
                  , e = a.fontSize
                  , f = a.fontFamily
                  , g = U5(d, V5);
                switch (b) {
                case 0:
                    return {
                        type: "text",
                        yG: 1,
                        text: a6(a.statusMessage ?? (a.messages.kt("live") || K("/iw6+Q")), c, U5(d, ECc), g, e, f)
                    };
                case 1:
                    return {
                        type: "text",
                        yG: 1,
                        text: a6(a.messages.loading(), c, U5(d, FCc), g, e, f)
                    };
                case 2:
                    return {
                        type: "text",
                        yG: 1,
                        text: a6(a.messages.ada(), c, U5(d, FCc), g, e, f)
                    };
                case 3:
                    return {
                        type: "text",
                        yG: 1,
                        text: a6(a.messages.offline(), c, U5(d, GCc), g, e, f)
                    };
                case 4:
                    return {
                        type: "text",
                        yG: 1,
                        text: a6(a.messages.kt("somethingWentWrong") || K("ElTceA"), c, U5(d, HCc), g, e, f)
                    };
                default:
                    throw new A(b);
                }
            }
              , JCc = function({direction: a, messages: b, zGb: c, status: d, jd: e, backgroundColor: f, fontSize: g, fontFamily: h}) {
                e = e.status === 1 ? e.data.RV?.type === "ANON" ? b.t4() : b.s4() : b.kt("live") || K("/iw6+Q");
                return [{
                    id: "footer",
                    size: "auto",
                    padding: [0, 20, 20, 20],
                    content: ICc({
                        messages: b,
                        status: d,
                        statusMessage: `${e} | ${b.saa(c)}`,
                        backgroundColor: f,
                        direction: a,
                        fontSize: g,
                        fontFamily: h
                    })
                }]
            }
              , LCc = function(a, b, c, d, e, f, g) {
                const h = c.If;
                c = c.Il;
                const k = a.Ht;
                a = a.Mt;
                b = b.border;
                const l = b.Xab
                  , m = h.direction
                  , n = h.fields.first()?.value;
                if (!n || n.type !== "select" || !k || !a)
                    return {
                        ...X5({
                            layout: "vertical",
                            direction: Z5(m),
                            background: {
                                type: "color",
                                color: "#ffffff"
                            },
                            cells: []
                        }),
                        minWidth: h.minWidth,
                        minHeight: h.minHeight
                    };
                const p = W5(k)
                  , q = W5(a);
                var r = n.options.first()?.value.label.text
                  , t = D => D?.values().next().value
                  , v = r?.stream.Ei("font-size")["font-size"]?.values().next().value || 16;
                const w = t(r?.stream.Ei("font-family")["font-family"]) || h.XY
                  , y = t(r?.stream.Ei("font-weight")["font-weight"]) || __c.sg.Mb["font-weight"];
                r = t(r?.stream.Ei("font-style")["font-style"]) || __c.sg.Mb["font-style"];
                v *= KCc;
                t = d.JCa();
                const B = d.XCa();
                return {
                    minWidth: h.minWidth,
                    minHeight: h.minHeight,
                    ...X5({
                        layout: "vertical",
                        direction: Z5(m),
                        background: a,
                        O: l,
                        border: b,
                        cells: [h.XM ? void 0 : zCc({
                            direction: m,
                            text: n.label,
                            background: k
                        }), DCc({
                            Vwb: d,
                            wT: yCc(e),
                            options: n.options,
                            EI: c.EI,
                            AA: c.AA,
                            lg: B.lg,
                            gIa: n.O,
                            Aq: p,
                            Lt: q,
                            fontFamily: w,
                            direction: m,
                            Jca: t,
                            et: n.id,
                            messages: f,
                            rta: g
                        }), ...JCc({
                            direction: m,
                            messages: f,
                            zGb: d.Cyb(n.id),
                            status: d.r_(),
                            jd: c.jd,
                            backgroundColor: q,
                            fontSize: v,
                            fontFamily: w,
                            fontWeight: y,
                            fontStyle: r
                        })].filter(qb)
                    }),
                    ref: g.root
                }
            }
              , MCc = function({width: a, height: b, le: c, color: d, sBb: e, backgroundColor: f}) {
                return {
                    type: "shape",
                    width: a,
                    height: b,
                    sta: {
                        width: 16,
                        height: 16
                    },
                    kb: [{
                        d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                        stroke: {
                            weight: c,
                            color: d
                        },
                        fill: {
                            type: "color",
                            color: d
                        }
                    }, {
                        d: e ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z" : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                        fill: {
                            type: "color",
                            color: f
                        }
                    }]
                }
            }
              , PCc = function({direction: a, hIa: b, Lt: c, state: d}) {
                const e = vCc("#000000", c);
                return {
                    type: "layout",
                    gridTemplateRows: ["10px", "1fr", "10px"],
                    gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
                    fill: NCc(d, e),
                    cells: [{
                        id: "text",
                        placement: {
                            alignSelf: "center",
                            gridColumnStart: "2",
                            gridColumnEnd: "3",
                            gridRowStart: "2",
                            gridRowEnd: "3"
                        },
                        content: ( () => {
                            switch (d) {
                            case 5:
                                return Y5(b, {
                                    direction: $5(a),
                                    color: "#00873d"
                                });
                            case 6:
                                return Y5(b, {
                                    direction: $5(a),
                                    color: "#c8001e"
                                });
                            case 4:
                                return Y5(b, {
                                    direction: $5(a),
                                    color: U5(c, OCc)
                                });
                            default:
                                return Y5(b, {
                                    direction: $5(a)
                                })
                            }
                        }
                        )()
                    }, d === 5 || d === 6 ? {
                        id: "validation",
                        placement: {
                            gridColumnStart: "4",
                            gridColumnEnd: "5",
                            gridRowStart: "2",
                            gridRowEnd: "3",
                            alignSelf: "center"
                        },
                        content: MCc({
                            width: 18,
                            height: 18,
                            le: 1.6,
                            sBb: d === 5,
                            color: d === 5 ? "#00873d" : "#c8001e",
                            backgroundColor: "#ffffff"
                        })
                    } : void 0].filter(qb)
                }
            }
              , NCc = function(a, b) {
                switch (a) {
                case 0:
                    return {
                        type: "color",
                        color: b,
                        za: .92
                    };
                case 1:
                    return {
                        type: "color",
                        color: b,
                        za: .74
                    };
                case 2:
                    return {
                        type: "color",
                        color: b,
                        za: .88
                    };
                case 3:
                    return {
                        type: "color",
                        color: b,
                        za: .74
                    };
                case 4:
                    return {
                        type: "color",
                        color: b,
                        za: .9
                    };
                case 5:
                    return {
                        type: "color",
                        color: "#e3fff0",
                        za: 0
                    };
                case 6:
                    return {
                        type: "color",
                        color: "#ffd9df",
                        za: 0
                    };
                default:
                    throw new A(a);
                }
            }
              , QCc = function({wT: a, direction: b, options: c, jd: d, lg: e, EI: f, AA: g, gIa: h, Lt: k, Jca: l, rta: m, context: n}) {
                return {
                    id: "field",
                    size: "1fr",
                    padding: [16, 20, 10, 20],
                    alignSelf: "center",
                    content: X5({
                        layout: "vertical",
                        direction: Z5(b),
                        gap: 8,
                        cells: c.map( ({value: p}) => {
                            var q = p.id === e;
                            const r = d.status === 1
                              , t = p.id === f
                              , v = p.id === g;
                            q = r && l && n.mode !== "edit" ? d.data.Ila(p.id) ? 5 : q ? 6 : 4 : n.mode === "edit" ? r && d.data.Ila(p.id) ? 5 : 4 : q ? 1 : v ? 3 : t ? 2 : 0;
                            return {
                                id: p.id,
                                size: "auto",
                                alignSelf: "center",
                                content: {
                                    ref: m.option,
                                    key: p.id,
                                    O: h,
                                    Bn: () => a?.Csa?.(p.id),
                                    onMouseEnter: () => a?.Fna?.(p.id),
                                    onMouseLeave: () => a?.Gna?.(p.id),
                                    onMouseDown: () => a?.Dna?.(p.id),
                                    onMouseUp: () => a?.Hna?.(p.id),
                                    ...PCc({
                                        direction: b,
                                        hIa: p.label,
                                        Lt: k,
                                        state: q
                                    })
                                }
                            }
                        }
                        )
                    })
                }
            }
              , RCc = function({direction: a, text: b, bY: c, dY: d, wT: e, fontSize: f, fontFamily: g, fontWeight: h, fontStyle: k}) {
                const l = V5.includes(c)
                  , {h: m, s: n, ra: p} = __c.El(c);
                var q = new __c.wl(m,n,p < 10 ? p + 6 : p - 6);
                q = __c.Fl(q);
                var r = new __c.wl(m,n,p < 10 ? p + 10 : p - 10);
                r = __c.Fl(r);
                return {
                    id: "submit",
                    size: "auto",
                    padding: [0, 20],
                    content: xCc({
                        direction: Z5(a),
                        Bn: e?.submit,
                        onMouseEnter: e?.AGa,
                        onMouseLeave: e?.BGa,
                        onMouseDown: e?.zGa,
                        onMouseUp: e?.CGa,
                        background: {
                            type: "color",
                            color: d === 2 ? r : d === 1 ? q : c,
                            za: e?.submit ? l ? .1 : void 0 : .6
                        },
                        O: 24,
                        padding: 12,
                        content: Y5(b, {
                            direction: $5(a),
                            "font-size": f,
                            "font-family": g,
                            "font-weight": h,
                            "font-style": k
                        })
                    })
                }
            }
              , SCc = function({wT: a, direction: b, messages: c, Cy: d, Aq: e, status: f, jd: g, lg: h, backgroundColor: k, Jca: l, QV: m, t8: n, fontFamily: p, fontWeight: q, fontStyle: r}) {
                if (!l || !g || !h)
                    return h = e === k ? U5(e, V5) : e,
                    g = g?.status === 1 ? g.data.RV?.type === "ANON" ? c.t4() : c.s4() : void 0,
                    [RCc({
                        direction: b,
                        text: d,
                        bY: h,
                        dY: m,
                        wT: a,
                        fontSize: n.label,
                        fontFamily: p,
                        fontWeight: q,
                        fontStyle: r
                    }), {
                        id: "quiz_status",
                        size: "auto",
                        padding: [8, 20, 10, 20],
                        content: ICc({
                            status: f,
                            statusMessage: g,
                            messages: c,
                            direction: b,
                            backgroundColor: k,
                            fontSize: n.message,
                            fontFamily: p
                        })
                    }];
                a = U5(k, V5);
                return [{
                    id: "quiz_results_footer",
                    size: "auto",
                    padding: [20, 20, 24, 20],
                    content: X5({
                        layout: "vertical",
                        direction: Z5(b),
                        cells: [{
                            id: "quiz_result",
                            size: "auto",
                            content: {
                                type: "text",
                                yG: 0,
                                fontFamily: p,
                                text: g.data.Ila(h) ? c.C6() : c.H9(),
                                fontSize: n.label,
                                fontWeight: "bold",
                                textAlign: "center",
                                direction: $5(b),
                                color: a
                            }
                        }, {
                            id: "quiz_message",
                            size: "auto",
                            content: {
                                type: "text",
                                yG: 0,
                                fontFamily: p,
                                text: c.Qba(),
                                fontSize: n.message,
                                za: .2,
                                textAlign: "center",
                                direction: $5(b),
                                color: a
                            }
                        }]
                    })
                }]
            }
              , UCc = function(a, b, c, d, e, f, g, h) {
                const k = c.If;
                c = c.Il;
                var l = a.Ht;
                a = a.Mt;
                b = b.border;
                const m = b.Xab
                  , n = k.direction;
                var p = k.fields.first()?.value;
                if (!p || p.type !== "select" || !l || !a)
                    return {
                        ...X5({
                            layout: "vertical",
                            direction: Z5(n),
                            background: {
                                type: "color",
                                color: "#ffffff"
                            },
                            cells: []
                        }),
                        minWidth: k.minWidth,
                        minHeight: k.minHeight
                    };
                const q = W5(l)
                  , r = W5(a)
                  , t = d.r_()
                  , v = c.jd.status === 1 && c.jd
                  , w = d.JCa() && v && t === 0;
                var y = p.options.first()?.value.label.text
                  , B = Q => Q?.values().next().value
                  , D = y?.stream.Ei("font-size")["font-size"]?.values().next().value || 16;
                const C = B(y?.stream.Ei("font-family")["font-family"]) || k.XY
                  , H = B(y?.stream.Ei("font-weight")["font-weight"]) || __c.sg.Mb["font-weight"];
                y = B(y?.stream.Ei("font-style")["font-style"]) || __c.sg.Mb["font-style"];
                B = D * TCc;
                D *= KCc;
                d = d.XCa();
                var J = k.minWidth
                  , M = k.minHeight
                  , O = Z5(n);
                l = k.XM ? void 0 : zCc({
                    direction: n,
                    text: p.label,
                    background: l
                });
                p = QCc({
                    wT: yCc(e),
                    direction: n,
                    options: p.options,
                    jd: c.jd,
                    EI: c.EI,
                    AA: c.AA,
                    lg: d.lg,
                    gIa: p.O,
                    Lt: r,
                    Jca: w,
                    rta: g,
                    context: h
                });
                e = e ? {
                    submit: e.submit,
                    AGa: e.AGa,
                    BGa: e.BGa,
                    zGa: e.zGa,
                    CGa: e.CGa
                } : void 0;
                return {
                    minWidth: J,
                    minHeight: M,
                    ...X5({
                        layout: "vertical",
                        direction: O,
                        background: a,
                        O: m,
                        border: b,
                        cells: [l, p, ...SCc({
                            wT: e,
                            direction: n,
                            messages: f,
                            Cy: k.footer.label,
                            Aq: q,
                            status: t,
                            Jca: w && h.mode !== "edit",
                            jd: v ? v : void 0,
                            lg: d.lg,
                            backgroundColor: r,
                            QV: c.QV,
                            t8: {
                                label: B,
                                message: D
                            },
                            fontFamily: C,
                            fontWeight: H,
                            fontStyle: y
                        })].filter(qb)
                    }),
                    ref: g.root
                }
            }
              , VCc = class {
                constructor() {
                    this.type = "layout"
                }
            }
              , b6 = __webpack_require__(186901)
              , c6 = b6.EW
              , T5 = b6.h5
              , WCc = b6.mJ
              , XCc = b6.sH
              , YCc = b6.XI;
            var ZCc = class {
                static D(a) {
                    __c.L(a, {
                        hYa: c6
                    })
                }
                get hYa() {
                    const a = [];
                    for (const b of this.list.value) {
                        const c = O5(this, b);
                        if (c === void 0)
                            throw new nCc("undefined value found when deserializing list.");
                        a.push(c)
                    }
                    return a
                }
                count() {
                    return this.list.value.count()
                }
                toArray() {
                    return this.hYa.map( ({value: a}) => a)
                }
                first(a) {
                    const b = this.list.value.first(a ? c => a(O5(this, c)) : void 0);
                    if (b != null)
                        return O5(this, b)
                }
                last(a) {
                    const b = this.list.value.last(a ? c => a(O5(this, c)) : void 0);
                    if (b != null)
                        return O5(this, b)
                }
                next(a, b) {
                    var c = b ? d => b(O5(this, d)) : void 0;
                    a = P5(this, a);
                    c = this.list.value.next(a, c);
                    if (c != null)
                        return O5(this, c)
                }
                previous(a, b) {
                    var c = b ? d => b(O5(this, d)) : void 0;
                    a = P5(this, a);
                    c = this.list.value.previous(a, c);
                    if (c != null)
                        return O5(this, c)
                }
                map(a) {
                    return this.list.value.map( (b, c) => a(O5(this, b), c))
                }
                filter(a) {
                    return this.list.value.filter( (b, c) => a(O5(this, b), c)).map(b => O5(this, b))
                }
                forEach(a) {
                    return this.list.value.forEach( (b, c) => a(O5(this, b), c))
                }
                some(a) {
                    return this.list.value.some(b => a(O5(this, b)))
                }
                constructor(a, b) {
                    this.Kn = b;
                    this.Zfb = (ZCc.D(this),
                    new WeakMap);
                    this.Tfb = new WeakMap;
                    __c.x(a.type === "list");
                    this.list = a
                }
            }
              , $Cc = class extends ZCc {
                replace(a, b) {
                    a = P5(this, a);
                    b = this.list.value.replace(a, this.Kn.Wl(b));
                    return O5(this, b)
                }
                LI(a, b) {
                    a = a != null ? P5(this, a) : void 0;
                    b = this.list.value.LI(a, this.Kn.Wl(b));
                    return O5(this, b)
                }
                bF(a, b) {
                    a = a != null ? P5(this, a) : void 0;
                    return this.list.value.bF(a, b.map(c => this.Kn.Wl(c))).map(c => O5(this, c))
                }
                insertBefore(a, b) {
                    a = a != null ? P5(this, a) : void 0;
                    b = this.list.value.insertBefore(a, this.Kn.Wl(b));
                    return O5(this, b)
                }
                append(a) {
                    a = this.list.value.append(this.Kn.Wl(a));
                    return O5(this, a)
                }
                prepend(a) {
                    a = this.list.value.prepend(this.Kn.Wl(a));
                    return O5(this, a)
                }
                delete(a) {
                    a = P5(this, a);
                    this.list.value.delete(a)
                }
                dB(a) {
                    this.list.value.dB(a ? b => a(O5(this, b)) : void 0)
                }
                moveBefore(a, b) {
                    a = a == null ? void 0 : P5(this, a);
                    b = P5(this, b);
                    this.list.value.moveBefore(a, b)
                }
            }
            ;
            var e6 = class {
                static string(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "string")
                            throw d === "toWidgetData" ? new Q5("string",c) : new R5("string",c);
                        return c.value
                    }
                    ;
                    return {
                        Wl: c => ({
                            type: "string",
                            value: c
                        }),
                        du: c => b(c, "toWidgetState"),
                        cu: c => b(c, "toWidgetData"),
                        Pv: c => b(c, "toWidgetData")
                    }
                }
                static literal(a, b) {
                    if (a.length === 0)
                        throw new d6("At least one value must be provided for literal types.");
                    const c = new Set(a)
                      , d = (e, f) => {
                        if (e == null && b != null)
                            return b;
                        if (e?.type !== "string" || !c.has(e.value))
                            throw f === "toWidgetData" ? new Q5("literal",e) : new R5("literal",e);
                        return e.value
                    }
                    ;
                    return {
                        Wl: e => ({
                            type: "string",
                            value: e
                        }),
                        du: e => d(e, "toWidgetState"),
                        cu: e => d(e, "toWidgetData"),
                        Pv: e => d(e, "toWidgetData")
                    }
                }
                static integer(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "int32" || !Number.isFinite(c.value) || !Number.isInteger(c.value))
                            throw d === "toWidgetData" ? new Q5("integer",c) : new R5("integer",c);
                        return c.value
                    }
                    ;
                    return {
                        Wl: c => {
                            if (!Number.isFinite(c) || !Number.isInteger(c))
                                throw new aDc("integer",c);
                            return {
                                type: "int32",
                                value: c
                            }
                        }
                        ,
                        du: c => b(c, "toWidgetState"),
                        cu: c => b(c, "toWidgetData"),
                        Pv: c => b(c, "toWidgetData")
                    }
                }
                static double(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "double" || !Number.isFinite(c.value))
                            throw d === "toWidgetData" ? new Q5("double",c) : new R5("double",c);
                        return c.value
                    }
                    ;
                    return {
                        Wl: c => {
                            if (!Number.isFinite(c))
                                throw new aDc("double",c);
                            return {
                                type: "double",
                                value: c
                            }
                        }
                        ,
                        du: c => b(c, "toWidgetState"),
                        cu: c => b(c, "toWidgetData"),
                        Pv: c => b(c, "toWidgetData")
                    }
                }
                static Cd(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "boolean")
                            throw d === "toWidgetData" ? new Q5("boolean",c) : new R5("boolean",c);
                        return c.value
                    }
                    ;
                    return {
                        Wl: c => ({
                            type: "boolean",
                            value: c
                        }),
                        du: c => b(c, "toWidgetState"),
                        cu: c => b(c, "toWidgetData"),
                        Pv: c => b(c, "toWidgetData")
                    }
                }
                static fill() {
                    const a = b => {
                        if (b?.type !== "fill")
                            throw new Q5("fill",b);
                        return b.value
                    }
                    ;
                    return {
                        Wl: b => ({
                            type: "fill",
                            value: b
                        }),
                        du: b => {
                            if (b?.type !== "fill")
                                throw new R5("fill",b);
                            return b.value
                        }
                        ,
                        cu: a,
                        Pv: a
                    }
                }
                static stroke() {
                    const a = b => {
                        if (b?.type !== "stroke")
                            throw new Q5("stroke",b);
                        return b.value
                    }
                    ;
                    return {
                        Wl: b => ({
                            type: "stroke",
                            value: b
                        }),
                        du: b => {
                            if (b?.type !== "stroke")
                                throw new R5("stroke",b);
                            return b.value
                        }
                        ,
                        cu: a,
                        Pv: a
                    }
                }
                static P(a) {
                    const b = new Set;
                    for (const d of Object.keys(a)) {
                        const [e] = a[d];
                        if (b.has(e))
                            throw new d6(`Duplicate serialized keys "${e}" found in record schema.`);
                        b.add(e)
                    }
                    const c = (d, e) => {
                        if (e?.type !== "dict")
                            throw new Q5("record",e);
                        const f = {};
                        for (const g of Object.keys(a)) {
                            const [h,k] = a[g]
                              , l = c6( () => {
                                const m = e.value.get(h);
                                return k.cu(m)
                            }
                            , {
                                keepAlive: !0
                            });
                            Object.defineProperty(f, g, {
                                get() {
                                    return l.get()
                                },
                                set(m) {
                                    d !== "readonly" && (m = k.Wl(m),
                                    m == null ? e.value.delete(h) : e.value.set(h, m))
                                },
                                enumerable: !0
                            })
                        }
                        return f
                    }
                    ;
                    return {
                        Wl: d => {
                            const e = {};
                            for (const f of Object.keys(a)) {
                                const [g,h] = a[f]
                                  , k = h.Wl(d[f]);
                                k != null && (e[g] = k)
                            }
                            return {
                                type: "dict",
                                value: new Map(Object.entries(e))
                            }
                        }
                        ,
                        du: d => {
                            if (d?.type !== "dict")
                                throw new R5("record",d);
                            const e = {};
                            for (const f of Object.keys(a)) {
                                const [g,h] = a[f]
                                  , k = h.du(d.value.get(g));
                                k != null && (e[f] = k)
                            }
                            return e
                        }
                        ,
                        cu: d => c("editable", d),
                        Pv: d => c("readonly", d),
                        Cb: d => e6.P({
                            ...a,
                            ...d
                        })
                    }
                }
                static list(a) {
                    return {
                        Wl: b => ({
                            type: "list",
                            value: b.map(c => a.Wl(c))
                        }),
                        du: b => {
                            if (b?.type !== "list")
                                throw new R5("list",b);
                            return b.value.filter(qb).map(c => a.du(c))
                        }
                        ,
                        cu: b => {
                            if (b?.type !== "list")
                                throw new Q5("list",b);
                            return new $Cc(b,a)
                        }
                        ,
                        Pv: b => {
                            if (b?.type !== "list")
                                throw new Q5("list",b);
                            return new ZCc(b,a)
                        }
                    }
                }
                static optional(a) {
                    return {
                        Wl: b => {
                            if (b != null)
                                return a.Wl(b)
                        }
                        ,
                        du: b => {
                            if (b != null)
                                return a.du(b)
                        }
                        ,
                        cu: b => {
                            if (b != null)
                                return a.cu(b)
                        }
                        ,
                        Pv: b => {
                            if (b != null)
                                return a.Pv(b)
                        }
                    }
                }
                static union(a, b) {
                    const c = new Set(Object.keys(a))
                      , d = e => {
                        if (e?.type !== "dict")
                            throw new Q5("union",e);
                        const f = e.value.get("k")?.value
                          , g = e.value.get("v");
                        if (f == null || g == null || typeof f !== "string" || !c.has(f))
                            throw new Q5("union",e);
                        return {
                            Lga: a[f],
                            Mga: g
                        }
                    }
                    ;
                    return {
                        Wl: e => {
                            const f = b(e);
                            return {
                                type: "dict",
                                value: new Map([["k", {
                                    type: "string",
                                    value: f
                                }], ["v", a[f].Wl(e)]])
                            }
                        }
                        ,
                        du: e => {
                            if (e?.type !== "dict")
                                throw new R5("union",e);
                            const f = e.value.get("k")?.value
                              , g = e.value.get("v");
                            if (f == null || g == null || typeof f !== "string" || !c.has(f))
                                throw new R5("union",e);
                            const {Lga: h, Mga: k} = {
                                Lga: a[f],
                                Mga: g
                            };
                            return h.du(k)
                        }
                        ,
                        cu: e => {
                            const {Lga: f, Mga: g} = d(e);
                            return f.cu(g)
                        }
                        ,
                        Pv: e => {
                            const {Lga: f, Mga: g} = d(e);
                            return f.Pv(g)
                        }
                    }
                }
            }
              , d6 = class extends Error {
                constructor(a) {
                    super(a);
                    this.name = "SchemaError"
                }
            }
              , nCc = class extends d6 {
                constructor(a) {
                    super(`ListError: ${a}`)
                }
            }
              , Q5 = class extends d6 {
                constructor(a, b) {
                    super(`Error transforming ${b} into type ${a} of widget data`)
                }
            }
              , R5 = class extends d6 {
                constructor(a, b) {
                    super(`Error transforming ${b} into type ${a} of widget state`)
                }
            }
              , aDc = class extends d6 {
                constructor(a, b) {
                    super(`Error transforming ${b} into type ${a} of document state`)
                }
            }
            ;
            var S5 = {
                lg: void 0,
                pK: void 0,
                kJa: void 0,
                results: {
                    fields: new Map
                }
            }
              , bDc = {
                jd: {
                    status: 2
                },
                dD: new Map,
                QV: 0,
                EI: void 0,
                AA: void 0,
                uDa: !1,
                CAb: "unchecked",
                qz: !1,
                Fl: !1
            };
            var cDc = e6.P({
                type: ["t", e6.literal(["text2"], "text2"), "readonly"],
                text: ["te", oCc()]
            })
              , dDc = e6.union({
                text2: cDc
            }, a => a.type)
              , eDc = e6.P({
                id: ["i", e6.string("")],
                label: ["l", dDc]
            })
              , fDc = e6.list(eDc)
              , gDc = e6.list(e6.string(""))
              , hDc = e6.P({
                id: ["i", e6.string("")],
                label: ["l", dDc],
                cJ: ["tl", e6.literal(["c", "u"], "c")],
                kFa: ["k", e6.optional(e6.double(1))],
                required: ["rq", e6.Cd(!1)],
                O: ["c", e6.double(0)]
            })
              , iDc = e6.P({
                type: ["t", e6.literal(["r"], "r"), "readonly"]
            })
              , jDc = e6.P({
                type: ["t", e6.literal(["p"], "p"), "readonly"]
            })
              , kDc = e6.P({
                type: ["t", e6.literal(["q"], "q"), "readonly"]
            })
              , lDc = e6.union({
                r: iDc,
                p: jDc,
                q: kDc
            }, a => a.type)
              , mDc = hDc.Cb({
                type: ["t", e6.literal(["select"], "select"), "readonly"],
                variant: ["v", e6.optional(lDc)],
                options: ["o", fDc],
                F0: ["m", e6.optional(e6.integer(1))],
                D6: ["co", gDc]
            })
              , nDc = e6.P({
                type: ["t", e6.literal(["e"], "e"), "readonly"]
            })
              , oDc = e6.P({
                type: ["t", e6.literal(["f"], "f"), "readonly"],
                bO: ["n", e6.integer(1)]
            })
              , pDc = e6.union({
                e: nDc,
                f: oDc
            }, a => a.type)
              , qDc = hDc.Cb({
                type: ["t", e6.literal(["text"], "text"), "readonly"],
                placeholder: ["p", e6.string("")],
                variant: ["v", pDc]
            })
              , rDc = e6.P({
                type: ["t", e6.literal(["a"], "a"), "readonly"]
            })
              , sDc = e6.P({
                type: ["t", e6.literal(["b"], "b"), "readonly"]
            })
              , tDc = e6.P({
                type: ["t", e6.literal(["c"], "c"), "readonly"]
            })
              , uDc = e6.P({
                type: ["t", e6.literal(["d"], "d"), "readonly"]
            })
              , vDc = e6.union({
                a: rDc,
                b: sDc,
                c: tDc,
                d: uDc
            }, a => a.type)
              , wDc = hDc.Cb({
                type: ["t", e6.literal(["number"], "number"), "readonly"],
                variant: ["v", vDc],
                min: ["a", e6.optional(e6.double())],
                max: ["b", e6.optional(e6.double())]
            })
              , xDc = e6.union({
                select: mDc,
                text: qDc,
                number: wDc
            }, a => a.type)
              , yDc = e6.list(xDc)
              , zDc = e6.P({
                xq: ["A", e6.optional(e6.double(1))],
                yq: ["B", e6.optional(e6.double(1))],
                mx: ["C", e6.optional(e6.double(1))]
            })
              , ADc = e6.P({
                label: ["l", dDc],
                cJ: ["B", e6.optional(e6.literal(["c", "u"]))],
                mx: ["C", e6.optional(e6.double(1))],
                yq: ["E", e6.optional(e6.double(1))],
                xq: ["D", e6.optional(e6.double(1))],
                Xaa: ["F", e6.optional(e6.double(1))]
            })
              , BDc = e6.P({})
              , CDc = e6.P({
                Waa: ["A", e6.double(1.25)],
                mx: ["B", e6.double(1)],
                yq: ["C", e6.double(1.25)],
                xq: ["D", e6.double(1.25)],
                background: ["E", e6.optional(e6.fill())]
            })
              , DDc = e6.P({
                label: ["A", oCc()],
                cJ: ["tl", e6.literal(["c", "u"])]
            })
              , EDc = e6.literal(["l", "r"], "l")
              , FDc = e6.P({
                minHeight: ["mh", e6.double(1)],
                minWidth: ["mw", e6.double(1)],
                type: ["t", e6.literal(["poll", "quiz"], "poll"), "readonly"],
                id: ["i", e6.string()],
                ij: ["s", e6.string()],
                bs: ["a", e6.optional(e6.string())],
                direction: ["r", EDc],
                XY: ["d", e6.string("")],
                Ht: ["pf", e6.fill()],
                Mt: ["sf", e6.fill()],
                border: ["b", e6.stroke()],
                O: ["c", e6.double(0)],
                Rj: ["D", e6.optional(e6.double(16))],
                Ck: ["E", e6.optional(e6.double(16))],
                CM: ["F", e6.optional(zDc)],
                XM: ["hh", e6.Cd(!1)],
                DDa: ["I", e6.optional(e6.Cd(!1))],
                sra: ["z", e6.Cd(!0)],
                sXa: ["h", e6.optional(BDc)],
                title: ["j", e6.optional(DDc)],
                header: ["A", e6.optional(CDc)],
                fields: ["f", yDc],
                footer: ["fo", e6.optional(ADc)]
            })
              , GDc = e6.union({
                poll: FDc,
                quiz: FDc
            }, a => a.type);
            var sCc = Symbol("UNABLE_TO_SUBMIT");
            var HDc = {
                resultsPercentage: 0,
                yourNameWillBeShared: 1,
                incorrectLabel: 2,
                responseSaved: 3,
                submitting: 4,
                loading: 5,
                numVotes: 6,
                offline: 7,
                yourNameWontBeShared: 8,
                somethingWentWrong: 9,
                correctLabel: 10,
                live: 11
            }
              , IDc = class {
                static D(a) {
                    __c.L(a, {
                        C3: XCc.ref
                    })
                }
                async $Da(a) {
                    const b = await a;
                    T5( () => {
                        const c = JSON.parse(b)
                          , d = new Map;
                        for (const e in c)
                            d.set(e, Object.values(c[e]));
                        this.C3 = d
                    }
                    )
                }
                kt(a) {
                    return (this.C3?.get(this.document.language || "en") || [])[HDc[a]]
                }
                C6() {
                    return this.kt("correctLabel") || K("i3mNPA")
                }
                H9() {
                    return this.kt("incorrectLabel") || K("As1GTA")
                }
                Qba() {
                    return this.kt("responseSaved") || K("xSH8Og")
                }
                saa(a) {
                    const b = this.kt("numVotes");
                    return b ? __c.noc(b, [a], this.document.language) : __c.tb("6QpLYA", [a])
                }
                eqa(a) {
                    const b = this.kt("resultsPercentage");
                    return b ? __c.noc(b, [a], this.document.language) : __c.tb("sUWUOA", [a])
                }
                offline() {
                    return this.kt("offline") || K("nFbxIQ")
                }
                loading() {
                    return this.kt("loading") || K("2Q9Q+A")
                }
                ada() {
                    return this.kt("submitting") || K("wutQEA")
                }
                t4() {
                    return this.kt("yourNameWontBeShared") || K("Gzs/9g")
                }
                s4() {
                    return this.kt("yourNameWillBeShared") || K("WjcAyg")
                }
                constructor(a, b) {
                    this.document = a;
                    this.C3 = (IDc.D(this),
                    void 0);
                    this.$Da(b)
                }
            }
            ;
            var KDc = class extends IDc {
                constructor(a) {
                    const b = __webpack_require__.me(253210).then( () => __c.JDc).then( ({JK: c}) => c);
                    super(a, b)
                }
            }
            ;
            var LDc = class {
                static D(a) {
                    __c.L(a, {
                        border: c6
                    })
                }
                get border() {
                    const a = this.bB.If;
                    a.border.weight && !a.border.color && this.J && this.J.error("Form widget borders cannot have weight without a color");
                    return {
                        weight: a.border.weight,
                        color: a.border.color,
                        Xab: a.O
                    }
                }
                constructor(a, b) {
                    this.bB = a;
                    this.J = b;
                    LDc.D(this)
                }
            }
            ;
            var MDc = class {
                static D(a) {
                    __c.L(a, {
                        Ht: c6,
                        Mt: c6,
                        Aq: c6,
                        Lt: c6
                    })
                }
                get Ht() {
                    const a = this.bB.If.Ht.color
                      , b = this.bB.If.Ht.Ta;
                    if (a)
                        return {
                            type: "color",
                            color: a
                        };
                    if (b.ref)
                        return {
                            type: "gradient",
                            Ta: b.ref
                        }
                }
                get Mt() {
                    const a = this.bB.If.Mt.color
                      , b = this.bB.If.Mt.Ta;
                    if (a)
                        return {
                            type: "color",
                            color: a
                        };
                    if (b.ref)
                        return {
                            type: "gradient",
                            Ta: b.ref
                        }
                }
                get Aq() {
                    if (!this.Ht)
                        return "#000000";
                    switch (this.Ht.type) {
                    case "color":
                        return this.Ht.color;
                    case "gradient":
                        return this.Ht.Ta.Pg[0].color;
                    default:
                        throw new A(this.Ht);
                    }
                }
                get Lt() {
                    if (!this.Mt)
                        return "#000000";
                    switch (this.Mt.type) {
                    case "color":
                        return this.Mt.color;
                    case "gradient":
                        return this.Mt.Ta.Pg[0].color;
                    default:
                        throw new A(this.Mt);
                    }
                }
                constructor(a) {
                    this.bB = a;
                    MDc.D(this)
                }
            }
            ;
            var V5 = ["#000000", "#ffffff"];
            var BCc = 9 * __c.tT
              , OCc = ["#cccccc", "#333333"]
              , ECc = ["#00d200", "#00ed00"]
              , FCc = ["#ffae00", "#ffc654"]
              , GCc = ["#545454", "#c8c8c8"]
              , HCc = ["#e53935", "#ef5350"]
              , TCc = 14 * __c.tT / 16
              , KCc = 9 * __c.tT / 16;
            var a6 = (a, b, c, d, e, f) => ({
                ...__c.rk,
                stream: __c.ch.Ib().attrs({
                    "font-family": f,
                    "font-size": e,
                    leading: void 0,
                    "text-align": "center",
                    direction: $5(b),
                    color: c
                }).fb("\u25cf ").attrs({
                    "font-family": f,
                    "font-size": e,
                    color: d,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }).fb(a).Kr().build()
            });
            var NDc;
            NDc = ({eGb: a, $rb: b}) => {
                const c = b.status !== 1 && a.status === 1;
                return a.status === 1 && b.status === 1 && a.data.hya !== b.data.hya || c
            }
            ;
            __c.WKa = {
                yrb: function(a, b, c, d, e, f, g, h, k) {
                    g.Xf("forms");
                    const {Wwb: l} = d ?? {}
                      , m = h.Mw("ui.rendering.form")
                      , n = {
                        root: new VCc,
                        option: new VCc
                    }
                      , p = new KDc(b);
                    return {
                        UDa: bDc,
                        Kn: GDc,
                        jHa: ({bB: q}) => {
                            if (l && a) {
                                var r, t = WCc( () => q.If.id, () => {
                                    const w = q.If.type
                                      , y = l.get({
                                        sI: q.If.id,
                                        rg: a,
                                        Z7: c
                                    });
                                    r?.unsubscribe();
                                    w === "poll" && (r = y.kDb({
                                        yyb: () => q.If.ij
                                    }).subscribe( ({results: B, ij: D}) => {
                                        T5( () => {
                                            const C = new Map(q.Il.dD);
                                            C.set(D, {
                                                ...(C.get(D) ?? S5),
                                                results: B
                                            });
                                            q.po({
                                                dD: C
                                            })
                                        }
                                        )
                                    }
                                    ));
                                    y.getSettings({
                                        j4b: () => q.If.bs
                                    }).subscribe(B => {
                                        const D = q.Il.jd;
                                        let C = B;
                                        if (B.status === 1 && !q.If.bs && q.If.type === "quiz") {
                                            const H = q.If.fields.first()?.value
                                              , J = H?.type === "select" ? H.D6.toArray() : [];
                                            C = {
                                                status: 1,
                                                data: {
                                                    jE: new Map(q.If.fields.filter( ({value: M}) => M.type === "select").map( ({value: M}) => [M.id, M.D6.toArray()])),
                                                    Ila: M => J.includes(M),
                                                    hya: B.data.hya,
                                                    RV: B.data.RV,
                                                    KLb: !1
                                                }
                                            }
                                        }
                                        T5( () => {
                                            q.po({
                                                jd: C
                                            })
                                        }
                                        );
                                        NDc({
                                            eGb: C,
                                            $rb: D
                                        }) && y.lwb({
                                            ij: q.If.ij,
                                            bs: q.If.bs
                                        }).then(YCc(H => {
                                            const J = q.If.ij;
                                            if (H.ok) {
                                                var M = new Map(q.Il.dD);
                                                if (H.value) {
                                                    H = H.value;
                                                    const O = q.If.fields.first()?.value.id ?? "";
                                                    H = H.Tva.get(O);
                                                    H = H?.type === 0 && H.D2.length >= 1 ? H.D2[0] : void 0;
                                                    M.set(J, {
                                                        ...(M.get(J) ?? S5),
                                                        lg: H,
                                                        pK: H
                                                    })
                                                } else
                                                    M.set(J, {
                                                        ...(M.get(J) ?? S5),
                                                        lg: void 0,
                                                        pK: void 0
                                                    });
                                                q.po({
                                                    dD: M,
                                                    AA: void 0
                                                })
                                            }
                                        }
                                        ))
                                    }
                                    )
                                }
                                , {
                                    fireImmediately: !0
                                }), v = WCc( () => k?.status === 2, YCc(w => {
                                    q.po({
                                        Fl: w
                                    })
                                }
                                ), {
                                    fireImmediately: !0
                                });
                                return () => {
                                    r?.unsubscribe();
                                    t();
                                    v()
                                }
                            }
                        }
                        ,
                        render: (q, r) => {
                            const t = pCc(q);
                            if (l && a) {
                                var v = l.get({
                                    sI: q.If.id,
                                    rg: a,
                                    Z7: c
                                });
                                v = tCc(q, t, v, e, f, m)
                            }
                            a: {
                                const w = q.If
                                  , y = new MDc(q)
                                  , B = new LDc(q);
                                switch (w.type) {
                                case "poll":
                                    q = LCc(y, B, q, t, v, p, n);
                                    break a;
                                case "quiz":
                                    q = UCc(y, B, q, t, v, p, n, r);
                                    break a;
                                default:
                                    throw new A(w.type);
                                }
                            }
                            return q
                        }
                        ,
                        rta: n
                    }
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/0cdce1bc58739211.js.map
