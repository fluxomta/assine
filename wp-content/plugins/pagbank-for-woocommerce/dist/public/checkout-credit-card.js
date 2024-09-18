import { a as ne } from "../ui/shared/axios-1edb1632.js";
var f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function W(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ae = {
  visa: {
    niceType: "Visa",
    type: "visa",
    patterns: [4],
    gaps: [4, 8, 12],
    lengths: [16, 18, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  mastercard: {
    niceType: "Mastercard",
    type: "mastercard",
    patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  },
  "american-express": {
    niceType: "American Express",
    type: "american-express",
    patterns: [34, 37],
    gaps: [4, 10],
    lengths: [15],
    code: {
      name: "CID",
      size: 4
    }
  },
  "diners-club": {
    niceType: "Diners Club",
    type: "diners-club",
    patterns: [[300, 305], 36, 38, 39],
    gaps: [4, 10],
    lengths: [14, 16, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  discover: {
    niceType: "Discover",
    type: "discover",
    patterns: [6011, [644, 649], 65],
    gaps: [4, 8, 12],
    lengths: [16, 19],
    code: {
      name: "CID",
      size: 3
    }
  },
  jcb: {
    niceType: "JCB",
    type: "jcb",
    patterns: [2131, 1800, [3528, 3589]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVV",
      size: 3
    }
  },
  unionpay: {
    niceType: "UnionPay",
    type: "unionpay",
    patterns: [
      620,
      [624, 626],
      [62100, 62182],
      [62184, 62187],
      [62185, 62197],
      [62200, 62205],
      [622010, 622999],
      622018,
      [622019, 622999],
      [62207, 62209],
      [622126, 622925],
      [623, 626],
      6270,
      6272,
      6276,
      [627700, 627779],
      [627781, 627799],
      [6282, 6289],
      6291,
      6292,
      810,
      [8110, 8131],
      [8132, 8151],
      [8152, 8163],
      [8164, 8171]
    ],
    gaps: [4, 8, 12],
    lengths: [14, 15, 16, 17, 18, 19],
    code: {
      name: "CVN",
      size: 3
    }
  },
  maestro: {
    niceType: "Maestro",
    type: "maestro",
    patterns: [
      493698,
      [5e5, 504174],
      [504176, 506698],
      [506779, 508999],
      [56, 59],
      63,
      67,
      6
    ],
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    code: {
      name: "CVC",
      size: 3
    }
  },
  elo: {
    niceType: "Elo",
    type: "elo",
    patterns: [
      401178,
      401179,
      438935,
      457631,
      457632,
      431274,
      451416,
      457393,
      504175,
      [506699, 506778],
      [509e3, 509999],
      627780,
      636297,
      636368,
      [650031, 650033],
      [650035, 650051],
      [650405, 650439],
      [650485, 650538],
      [650541, 650598],
      [650700, 650718],
      [650720, 650727],
      [650901, 650978],
      [651652, 651679],
      [655e3, 655019],
      [655021, 655058]
    ],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVE",
      size: 3
    }
  },
  mir: {
    niceType: "Mir",
    type: "mir",
    patterns: [[2200, 2204]],
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    code: {
      name: "CVP2",
      size: 3
    }
  },
  hiper: {
    niceType: "Hiper",
    type: "hiper",
    patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  },
  hipercard: {
    niceType: "Hipercard",
    type: "hipercard",
    patterns: [606282],
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      name: "CVC",
      size: 3
    }
  }
}, ie = ae, S = {}, M = {};
Object.defineProperty(M, "__esModule", { value: !0 });
M.clone = void 0;
function oe(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
M.clone = oe;
var R = {};
Object.defineProperty(R, "__esModule", { value: !0 });
R.matches = void 0;
function se(e, r, t) {
  var n = String(r).length, a = e.substr(0, n), i = parseInt(a, 10);
  return r = parseInt(String(r).substr(0, a.length), 10), t = parseInt(String(t).substr(0, a.length), 10), i >= r && i <= t;
}
function le(e, r) {
  return r = String(r), r.substring(0, e.length) === e.substring(0, r.length);
}
function ce(e, r) {
  return Array.isArray(r) ? se(e, r[0], r[1]) : le(e, r);
}
R.matches = ce;
Object.defineProperty(S, "__esModule", { value: !0 });
S.addMatchingCardsToResults = void 0;
var ue = M, de = R;
function fe(e, r, t) {
  var n, a;
  for (n = 0; n < r.patterns.length; n++) {
    var i = r.patterns[n];
    if (de.matches(e, i)) {
      var l = ue.clone(r);
      Array.isArray(i) ? a = String(i[0]).length : a = String(i).length, e.length >= a && (l.matchStrength = a), t.push(l);
      break;
    }
  }
}
S.addMatchingCardsToResults = fe;
var B = {};
Object.defineProperty(B, "__esModule", { value: !0 });
B.isValidInputType = void 0;
function pe(e) {
  return typeof e == "string" || e instanceof String;
}
B.isValidInputType = pe;
var j = {};
Object.defineProperty(j, "__esModule", { value: !0 });
j.findBestMatch = void 0;
function he(e) {
  var r = e.filter(function(t) {
    return t.matchStrength;
  }).length;
  return r > 0 && r === e.length;
}
function ge(e) {
  return he(e) ? e.reduce(function(r, t) {
    return !r || Number(r.matchStrength) < Number(t.matchStrength) ? t : r;
  }) : null;
}
j.findBestMatch = ge;
var D = f && f.__assign || function() {
  return D = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, D.apply(this, arguments);
}, Z = ie, me = S, ve = B, ye = j, w = M, T = {}, d = {
  VISA: "visa",
  MASTERCARD: "mastercard",
  AMERICAN_EXPRESS: "american-express",
  DINERS_CLUB: "diners-club",
  DISCOVER: "discover",
  JCB: "jcb",
  UNIONPAY: "unionpay",
  MAESTRO: "maestro",
  ELO: "elo",
  MIR: "mir",
  HIPER: "hiper",
  HIPERCARD: "hipercard"
}, ee = [
  d.VISA,
  d.MASTERCARD,
  d.AMERICAN_EXPRESS,
  d.DINERS_CLUB,
  d.DISCOVER,
  d.JCB,
  d.UNIONPAY,
  d.MAESTRO,
  d.ELO,
  d.MIR,
  d.HIPER,
  d.HIPERCARD
], v = w.clone(ee);
function X(e) {
  return T[e] || Z[e];
}
function _e() {
  return v.map(function(e) {
    return w.clone(X(e));
  });
}
function J(e, r) {
  r === void 0 && (r = !1);
  var t = v.indexOf(e);
  if (!r && t === -1)
    throw new Error('"' + e + '" is not a supported card type.');
  return t;
}
function y(e) {
  var r = [];
  if (!ve.isValidInputType(e))
    return r;
  if (e.length === 0)
    return _e();
  v.forEach(function(n) {
    var a = X(n);
    me.addMatchingCardsToResults(e, a, r);
  });
  var t = ye.findBestMatch(r);
  return t ? [t] : r;
}
y.getTypeInfo = function(e) {
  return w.clone(X(e));
};
y.removeCard = function(e) {
  var r = J(e);
  v.splice(r, 1);
};
y.addCard = function(e) {
  var r = J(e.type, !0);
  T[e.type] = e, r === -1 && v.push(e.type);
};
y.updateCard = function(e, r) {
  var t = T[e] || Z[e];
  if (!t)
    throw new Error('"' + e + "\" is not a recognized type. Use `addCard` instead.'");
  if (r.type && t.type !== r.type)
    throw new Error("Cannot overwrite type parameter.");
  var n = w.clone(t);
  n = D(D({}, n), r), T[n.type] = n;
};
y.changeOrder = function(e, r) {
  var t = J(e);
  v.splice(t, 1), v.splice(r, 0, e);
};
y.resetModifications = function() {
  v = w.clone(ee), T = {};
};
y.types = d;
var re = y, $ = {};
Object.defineProperty($, "__esModule", { value: !0 });
$.cardholderName = void 0;
var be = /^[\d\s-]*$/, Ce = 255;
function I(e, r) {
  return { isValid: e, isPotentiallyValid: r };
}
function Ve(e) {
  return typeof e != "string" ? I(!1, !1) : e.length === 0 ? I(!1, !0) : e.length > Ce ? I(!1, !1) : be.test(e) ? I(!1, !0) : I(!0, !0);
}
$.cardholderName = Ve;
var x = {};
function Ee(e) {
  for (var r = 0, t = !1, n = e.length - 1, a; n >= 0; )
    a = parseInt(e.charAt(n), 10), t && (a *= 2, a > 9 && (a = a % 10 + 1)), t = !t, r += a, n--;
  return r % 10 === 0;
}
var Ie = Ee;
Object.defineProperty(x, "__esModule", { value: !0 });
x.cardNumber = void 0;
var Pe = Ie, K = re;
function _(e, r, t) {
  return {
    card: e,
    isPotentiallyValid: r,
    isValid: t
  };
}
function ke(e, r) {
  r === void 0 && (r = {});
  var t, n, a;
  if (typeof e != "string" && typeof e != "number")
    return _(null, !1, !1);
  var i = String(e).replace(/-|\s/g, "");
  if (!/^\d*$/.test(i))
    return _(null, !1, !1);
  var l = K(i);
  if (l.length === 0)
    return _(null, !1, !1);
  if (l.length !== 1)
    return _(null, !0, !1);
  var o = l[0];
  if (r.maxLength && i.length > r.maxLength)
    return _(o, !1, !1);
  o.type === K.types.UNIONPAY && r.luhnValidateUnionPay !== !0 ? n = !0 : n = Pe(i), a = Math.max.apply(null, o.lengths), r.maxLength && (a = Math.min(r.maxLength, a));
  for (var c = 0; c < o.lengths.length; c++)
    if (o.lengths[c] === i.length)
      return t = i.length < a || n, _(o, t, n);
  return _(o, i.length < a, !1);
}
x.cardNumber = ke;
var L = {}, Y = {}, V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.expirationYear = void 0;
var Te = 19;
function m(e, r, t) {
  return {
    isValid: e,
    isPotentiallyValid: r,
    isCurrentYear: t || !1
  };
}
function Me(e, r) {
  r === void 0 && (r = Te);
  var t;
  if (typeof e != "string")
    return m(!1, !1);
  if (e.replace(/\s/g, "") === "")
    return m(!1, !0);
  if (!/^\d*$/.test(e))
    return m(!1, !1);
  var n = e.length;
  if (n < 2)
    return m(!1, !0);
  var a = (/* @__PURE__ */ new Date()).getFullYear();
  if (n === 3) {
    var i = e.slice(0, 2), l = String(a).slice(0, 2);
    return m(!1, i === l);
  }
  if (n > 4)
    return m(!1, !1);
  var o = parseInt(e, 10), c = Number(String(a).substr(2, 2)), h = !1;
  if (n === 2) {
    if (String(a).substr(0, 2) === e)
      return m(!1, !0);
    t = c === o, h = o >= c && o <= c + r;
  } else
    n === 4 && (t = a === o, h = o >= a && o <= a + r);
  return m(h, h, t);
}
V.expirationYear = Me;
var U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.isArray = void 0;
U.isArray = Array.isArray || function(e) {
  return Object.prototype.toString.call(e) === "[object Array]";
};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.parseDate = void 0;
var we = V, Oe = U;
function Ne(e) {
  var r = Number(e[0]), t;
  return r === 0 ? 2 : r > 1 || r === 1 && Number(e[1]) > 2 ? 1 : r === 1 ? (t = e.substr(1), we.expirationYear(t).isPotentiallyValid ? 1 : 2) : e.length === 5 ? 1 : e.length > 5 ? 2 : 1;
}
function Ae(e) {
  var r;
  if (/^\d{4}-\d{1,2}$/.test(e) ? r = e.split("-").reverse() : /\//.test(e) ? r = e.split(/\s*\/\s*/g) : /\s/.test(e) && (r = e.split(/ +/g)), Oe.isArray(r))
    return {
      month: r[0] || "",
      year: r.slice(1).join()
    };
  var t = Ne(e), n = e.substr(0, t);
  return {
    month: n,
    year: e.substr(n.length)
  };
}
Y.parseDate = Ae;
var O = {};
Object.defineProperty(O, "__esModule", { value: !0 });
O.expirationMonth = void 0;
function P(e, r, t) {
  return {
    isValid: e,
    isPotentiallyValid: r,
    isValidForThisYear: t || !1
  };
}
function De(e) {
  var r = (/* @__PURE__ */ new Date()).getMonth() + 1;
  if (typeof e != "string")
    return P(!1, !1);
  if (e.replace(/\s/g, "") === "" || e === "0")
    return P(!1, !0);
  if (!/^\d*$/.test(e))
    return P(!1, !1);
  var t = parseInt(e, 10);
  if (isNaN(Number(e)))
    return P(!1, !1);
  var n = t > 0 && t < 13;
  return P(n, n, n && t >= r);
}
O.expirationMonth = De;
var F = f && f.__assign || function() {
  return F = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, F.apply(this, arguments);
};
Object.defineProperty(L, "__esModule", { value: !0 });
L.expirationDate = void 0;
var Se = Y, Re = O, Be = V;
function k(e, r, t, n) {
  return {
    isValid: e,
    isPotentiallyValid: r,
    month: t,
    year: n
  };
}
function je(e, r) {
  var t;
  if (typeof e == "string")
    e = e.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2"), t = Se.parseDate(String(e));
  else if (e !== null && typeof e == "object") {
    var n = F({}, e);
    t = {
      month: String(n.month),
      year: String(n.year)
    };
  } else
    return k(!1, !1, null, null);
  var a = Re.expirationMonth(t.month), i = Be.expirationYear(t.year, r);
  if (a.isValid) {
    if (i.isCurrentYear) {
      var l = a.isValidForThisYear;
      return k(l, l, t.month, t.year);
    }
    if (i.isValid)
      return k(!0, !0, t.month, t.year);
  }
  return a.isPotentiallyValid && i.isPotentiallyValid ? k(!1, !0, null, null) : k(!1, !1, null, null);
}
L.expirationDate = je;
var H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
H.cvv = void 0;
var te = 3;
function $e(e, r) {
  for (var t = 0; t < e.length; t++)
    if (r === e[t])
      return !0;
  return !1;
}
function xe(e) {
  for (var r = te, t = 0; t < e.length; t++)
    r = e[t] > r ? e[t] : r;
  return r;
}
function C(e, r) {
  return { isValid: e, isPotentiallyValid: r };
}
function Le(e, r) {
  return r === void 0 && (r = te), r = r instanceof Array ? r : [r], typeof e != "string" || !/^\d*$/.test(e) ? C(!1, !1) : $e(r, e.length) ? C(!0, !0) : e.length < Math.min.apply(null, r) ? C(!1, !0) : e.length > xe(r) ? C(!1, !1) : C(!0, !0);
}
H.cvv = Le;
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 });
z.postalCode = void 0;
var Ye = 3;
function Q(e, r) {
  return { isValid: e, isPotentiallyValid: r };
}
function Ue(e, r) {
  r === void 0 && (r = {});
  var t = r.minLength || Ye;
  return typeof e != "string" ? Q(!1, !1) : e.length < t ? Q(!1, !0) : Q(!0, !0);
}
z.postalCode = Ue;
var He = f && f.__createBinding || (Object.create ? function(e, r, t, n) {
  n === void 0 && (n = t), Object.defineProperty(e, n, { enumerable: !0, get: function() {
    return r[t];
  } });
} : function(e, r, t, n) {
  n === void 0 && (n = t), e[n] = r[t];
}), ze = f && f.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", { enumerable: !0, value: r });
} : function(e, r) {
  e.default = r;
}), Ge = f && f.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var r = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && He(r, e, t);
  return ze(r, e), r;
}, Qe = Ge(re), Fe = $, Xe = x, Je = L, qe = O, Ke = V, We = H, Ze = z, er = {
  creditCardType: Qe,
  cardholderName: Fe.cardholderName,
  number: Xe.cardNumber,
  expirationDate: Je.expirationDate,
  expirationMonth: qe.expirationMonth,
  expirationYear: Ke.expirationYear,
  cvv: We.cvv,
  postalCode: Ze.postalCode
}, rr = er;
const N = /* @__PURE__ */ W(rr);
function tr(e) {
  return e && e.length ? e[0] : void 0;
}
var nr = tr, ar = nr;
const ir = /* @__PURE__ */ W(ar), or = () => {
  let e = jQuery(
    ".woocommerce-NoticeGroup-updateOrderReview, .woocommerce-NoticeGroup-checkout"
  );
  e.length > 0 || (e = jQuery("form.checkout")), jQuery.scroll_to_notices(e);
}, A = (e) => {
  jQuery(".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message").remove();
  const r = jQuery("form.checkout");
  r.prepend(
    '<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout"><ul class="woocommerce-error" role="alert"><li>' + e + "</li></ul></div>"
  ), r.removeClass("processing").unblock(), r.find(".input-text, select, input:checkbox").trigger("validate").trigger("blur"), or(), jQuery(document.body).trigger("checkout_error", [e]);
};
jQuery("form.checkout").on("checkout_place_order_pagbank_credit_card", () => {
  const e = document.querySelector(
    "[name=wc-pagbank_credit_card-payment-token]:checked"
  );
  if (e !== null && e.value !== "new")
    return !0;
  try {
    const r = document.getElementById(
      "pagbank_credit_card-card-holder"
    ), t = document.getElementById(
      "pagbank_credit_card-card-number"
    ), n = document.getElementById(
      "pagbank_credit_card-card-expiry"
    ), a = document.getElementById(
      "pagbank_credit_card-card-cvc"
    );
    if (r == null || t == null || n == null || a == null)
      throw new Error(
        "Não foi possível encontrar os campos do cartão de crédito. Entre em contato com nosso suporte."
      );
    const i = (p) => p.length === 2 ? `20${p}` : p, o = (({
      holder: p,
      number: s,
      expiryDate: u,
      cvc: g
    }) => {
      if (!N.cardholderName(p).isValid)
        throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_holder_name);
      const q = N.number(s);
      if (q.card == null || !q.isValid)
        throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_card_number);
      const G = N.expirationDate(u);
      if (!G.isValid)
        throw new Error(
          PagBankCheckoutCreditCardVariables.messages.invalid_card_expiry_date
        );
      if (!N.cvv(g).isValid)
        throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_security_code);
      return {
        holder: p.trim(),
        number: s.replace(/\s/g, ""),
        expirationDate: {
          month: G.month,
          year: i(
            G.year
          )
        },
        cvc: g.trim()
      };
    })({
      holder: r.value,
      number: t.value,
      expiryDate: n.value,
      cvc: a.value
    }), c = PagSeguro.encryptCard({
      publicKey: PagBankCheckoutCreditCardVariables.settings.card_public_key,
      holder: o.holder,
      number: o.number,
      expMonth: o.expirationDate.month,
      expYear: o.expirationDate.year,
      securityCode: o.cvc
    }), h = {
      INVALID_NUMBER: PagBankCheckoutCreditCardVariables.messages.invalid_card_number,
      INVALID_SECURITY_CODE: PagBankCheckoutCreditCardVariables.messages.invalid_security_code,
      INVALID_EXPIRATION_MONTH: PagBankCheckoutCreditCardVariables.messages.invalid_card_expiry_date,
      INVALID_EXPIRATION_YEAR: PagBankCheckoutCreditCardVariables.messages.invalid_card_expiry_date,
      INVALID_PUBLIC_KEY: PagBankCheckoutCreditCardVariables.messages.invalid_public_key,
      INVALID_HOLDER: PagBankCheckoutCreditCardVariables.messages.invalid_holder_name
    };
    if (c.hasErrors) {
      const p = c.errors.map((s) => h[s.code]);
      throw new Error(ir(p));
    }
    const E = document.getElementById(
      "pagbank_credit_card-encrypted-card"
    ), b = document.getElementById(
      "pagbank_credit_card-card-bin"
    );
    if (E == null)
      throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_encrypted_card);
    if (b === null)
      throw new Error(PagBankCheckoutCreditCardVariables.messages.invalid_card_bin);
    return E.value = c.encryptedCard, b.value = o.number.substring(0, 6), !0;
  } catch (r) {
    return r instanceof Error && A(r.message), !1;
  }
});
jQuery(document.body).on("updated_checkout", () => {
  try {
    if (!(PagBankCheckoutCreditCardVariables.settings.installments_enabled && PagBankCheckoutCreditCardVariables.settings.transfer_of_interest_enabled))
      return;
    const r = jQuery("#order_review"), t = document.getElementById(
      "pagbank_credit_card-installments"
    ), n = document.getElementById(
      "pagbank_credit_card-card-number"
    );
    if (t === null)
      throw new Error("Installments select not found");
    if (n === null)
      throw new Error("Card number input not found");
    const a = t.getAttribute("data-nonce"), i = t.getAttribute("data-amount"), l = t.getAttribute("data-url");
    if (a === null || i === null || l === null)
      throw new Error("Invalid nonce, amount or url");
    const o = document.querySelectorAll(
      "[name=wc-pagbank_credit_card-payment-token]"
    ), c = (s) => {
      s ? r.addClass("processing").block({
        message: null,
        overlayCSS: {
          background: "#fff",
          opacity: 0.6
        }
      }) : r.removeClass("processing").unblock();
    }, h = (s) => {
      t.innerHTML = "", s.forEach((u) => {
        t.appendChild(
          new Option(u.title, u.installments.toString(), u.installments === 1)
        );
      }), t.removeAttribute("disabled");
    }, E = async (s) => {
      c(!0);
      try {
        const { data: u } = await ne.get(l, {
          params: {
            nonce: s.nonce,
            amount: s.amount,
            card_bin: s.type === "card_bin" ? s.cardBin : void 0,
            payment_token: s.type === "payment_token" ? s.paymentToken : void 0
          }
        });
        h(u.data);
      } catch {
        const g = document.getElementById(
          "pagbank_credit_card-card-number"
        );
        g != null && (g.value = ""), A("Não foi possível calcular as parcelas. Tente novamente.");
      } finally {
        c(!1);
      }
    }, b = async (s) => {
      if (t.innerHTML = "", t.setAttribute("disabled", "disabled"), s === "new") {
        const u = n.value.replace(/\s/g, "").substring(0, 6);
        u !== null && u.length === 6 && E({
          type: "card_bin",
          nonce: a,
          amount: i,
          cardBin: u
        });
      } else
        E({
          type: "payment_token",
          nonce: a,
          amount: i,
          paymentToken: s
        });
    };
    o.forEach((s) => {
      s.addEventListener("change", (u) => {
        const g = u.target;
        g.checked && b(g.value);
      });
    }), (() => {
      const s = document.querySelector(
        "[name=wc-pagbank_credit_card-payment-token]:checked"
      );
      b(
        s === null ? "new" : s.value
      ), n.addEventListener("change", () => {
        b("new");
      });
    })();
  } catch (e) {
    e instanceof Error ? A(e.message) : A("Unknown error");
  }
});
