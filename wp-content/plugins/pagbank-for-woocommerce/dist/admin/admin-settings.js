var he = Object.defineProperty;
var me = (f, e, t) => e in f ? he(f, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : f[e] = t;
var I = (f, e, t) => (me(f, typeof e != "symbol" ? e + "" : e, t), t);
import { a as J } from "../ui/shared/axios-1edb1632.js";
const m = {};
m.allowedTagList = [
  "b",
  "caption",
  "cite",
  "code",
  "const",
  "dd",
  "del",
  "div",
  "dfn",
  "dt",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "input",
  "ins",
  "kdb",
  "label",
  "li",
  "option",
  "output",
  "p",
  "q",
  "s",
  "sample",
  "span",
  "strong",
  "td",
  "th",
  "u"
];
Object.freeze(m.allowedTagList);
Object.defineProperty(m, "allowedTagList", { configurable: !1, writable: !1 });
m.fromCharCodeKeyCode = {
  0: "LaunchCalculator",
  8: "Backspace",
  9: "Tab",
  13: "Enter",
  16: "Shift",
  17: "Ctrl",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  // 65: 'a',
  // 66: 'b',
  // 67: 'c',
  // 68: 'd',
  // 69: 'e',
  // 70: 'f',
  // 71: 'g',
  // 72: 'h',
  // 73: 'i',
  // 74: 'j',
  // 75: 'k',
  // 76: 'l',
  // 77: 'm',
  // 78: 'n',
  // 79: 'o',
  // 80: 'p',
  // 81: 'q',
  // 82: 'r',
  // 83: 's',
  // 84: 't',
  // 85: 'u',
  // 86: 'v',
  // 87: 'w',
  // 88: 'x',
  // 89: 'y',
  // 90: 'z',
  91: "OS",
  // Note: Firefox and Chrome reports 'OS' instead of 'OSLeft'
  92: "OSRight",
  93: "ContextMenu",
  96: "0",
  97: "1",
  98: "2",
  99: "3",
  100: "4",
  101: "5",
  102: "6",
  103: "7",
  104: "8",
  105: "9",
  106: "*",
  107: "+",
  109: "-",
  // The 'NumpadSubtract' code
  110: ".",
  111: "/",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  173: "-",
  // The 'Minus' sign on Firefox. This is only needed when using the Selenium bot though.
  182: "MyComputer",
  183: "MyCalculator",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  // The 'Minus' sign on all other browsers
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
  224: "Meta",
  225: "AltGraph"
};
Object.freeze(m.fromCharCodeKeyCode);
Object.defineProperty(m, "fromCharCodeKeyCode", { configurable: !1, writable: !1 });
m.keyName = {
  // Special values
  Unidentified: "Unidentified",
  AndroidDefault: "AndroidDefault",
  // Modifier keys
  Alt: "Alt",
  AltGr: "AltGraph",
  CapsLock: "CapsLock",
  // Under Chrome, e.key is empty for CapsLock
  Ctrl: "Control",
  Fn: "Fn",
  FnLock: "FnLock",
  Hyper: "Hyper",
  // 'OS' under Firefox
  Meta: "Meta",
  OSLeft: "OS",
  OSRight: "OS",
  Command: "OS",
  NumLock: "NumLock",
  ScrollLock: "ScrollLock",
  Shift: "Shift",
  Super: "Super",
  // 'OS' under Firefox
  Symbol: "Symbol",
  SymbolLock: "SymbolLock",
  // Whitespace keys
  Enter: "Enter",
  Tab: "Tab",
  Space: " ",
  // 'Spacebar' for Firefox <37, and IE9
  // Navigation keys
  LeftArrow: "ArrowLeft",
  // 'Left' for Firefox <=36, and IE9
  UpArrow: "ArrowUp",
  // 'Up' for Firefox <=36, and IE9
  RightArrow: "ArrowRight",
  // 'Right' for Firefox <=36, and IE9
  DownArrow: "ArrowDown",
  // 'Down' for Firefox <=36, and IE9
  End: "End",
  Home: "Home",
  PageUp: "PageUp",
  PageDown: "PageDown",
  // Editing keys
  Backspace: "Backspace",
  Clear: "Clear",
  Copy: "Copy",
  CrSel: "CrSel",
  // 'Crsel' for Firefox <=36, and IE9
  Cut: "Cut",
  Delete: "Delete",
  // 'Del' for Firefox <=36, and IE9
  EraseEof: "EraseEof",
  ExSel: "ExSel",
  // 'Exsel' for Firefox <=36, and IE9
  Insert: "Insert",
  Paste: "Paste",
  Redo: "Redo",
  Undo: "Undo",
  // UI keys
  Accept: "Accept",
  Again: "Again",
  Attn: "Attn",
  // 'Unidentified' for Firefox, Chrome, and IE9 ('KanaMode' when using the Japanese keyboard layout)
  Cancel: "Cancel",
  ContextMenu: "ContextMenu",
  // 'Apps' for Firefox <=36, and IE9
  Esc: "Escape",
  // 'Esc' for Firefox <=36, and IE9
  Execute: "Execute",
  Find: "Find",
  Finish: "Finish",
  // 'Unidentified' for Firefox, Chrome, and IE9 ('Katakana' when using the Japanese keyboard layout)
  Help: "Help",
  Pause: "Pause",
  Play: "Play",
  Props: "Props",
  Select: "Select",
  ZoomIn: "ZoomIn",
  ZoomOut: "ZoomOut",
  // Device keys
  BrightnessDown: "BrightnessDown",
  BrightnessUp: "BrightnessUp",
  Eject: "Eject",
  LogOff: "LogOff",
  Power: "Power",
  PowerOff: "PowerOff",
  PrintScreen: "PrintScreen",
  Hibernate: "Hibernate",
  // 'Unidentified' for Firefox <=37
  Standby: "Standby",
  // 'Unidentified' for Firefox <=36, and IE9
  WakeUp: "WakeUp",
  // IME and composition keys
  Compose: "Compose",
  Dead: "Dead",
  // Function keys
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  // Document keys
  Print: "Print",
  // 'Normal' keys
  num0: "0",
  num1: "1",
  num2: "2",
  num3: "3",
  num4: "4",
  num5: "5",
  num6: "6",
  num7: "7",
  num8: "8",
  num9: "9",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z",
  Semicolon: ";",
  Equal: "=",
  Comma: ",",
  Hyphen: "-",
  Minus: "-",
  Plus: "+",
  Dot: ".",
  Slash: "/",
  Backquote: "`",
  LeftParenthesis: "(",
  RightParenthesis: ")",
  LeftBracket: "[",
  RightBracket: "]",
  Backslash: "\\",
  Quote: "'",
  // Numeric keypad keys
  numpad0: "0",
  numpad1: "1",
  numpad2: "2",
  numpad3: "3",
  numpad4: "4",
  numpad5: "5",
  numpad6: "6",
  numpad7: "7",
  numpad8: "8",
  numpad9: "9",
  NumpadDot: ".",
  NumpadDotAlt: ",",
  // Modern browsers automatically adapt the character sent by this key to the decimal character of the current language
  NumpadMultiply: "*",
  NumpadPlus: "+",
  NumpadMinus: "-",
  NumpadSubtract: "-",
  NumpadSlash: "/",
  NumpadDotObsoleteBrowsers: "Decimal",
  NumpadMultiplyObsoleteBrowsers: "Multiply",
  NumpadPlusObsoleteBrowsers: "Add",
  NumpadMinusObsoleteBrowsers: "Subtract",
  NumpadSlashObsoleteBrowsers: "Divide",
  // Special arrays for quicker tests
  _allFnKeys: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  _someNonPrintableKeys: ["Tab", "Enter", "Shift", "ShiftLeft", "ShiftRight", "Control", "ControlLeft", "ControlRight", "Alt", "AltLeft", "AltRight", "Pause", "CapsLock", "Escape"],
  _directionKeys: ["PageUp", "PageDown", "End", "Home", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"]
};
Object.freeze(m.keyName._allFnKeys);
Object.freeze(m.keyName._someNonPrintableKeys);
Object.freeze(m.keyName._directionKeys);
Object.freeze(m.keyName);
Object.defineProperty(m, "keyName", { configurable: !1, writable: !1 });
Object.freeze(m);
class i {
  /**
   * Return `true` if the `value` is null
   *
   * @static
   * @param {*} value The value to test
   * @returns {boolean} Return `true` if the `value` is null, FALSE otherwise
   */
  static isNull(e) {
    return e === null;
  }
  /**
   * Return `true` if the `value` is undefined
   *
   * @static
   * @param {*} value The value to test
   * @returns {boolean} Return `true` if the `value` is undefined, FALSE otherwise
   */
  static isUndefined(e) {
    return e === void 0;
  }
  /**
   * Return `true` if the `value` is undefined, null or empty
   *
   * @param {*} value
   * @returns {boolean}
   */
  static isUndefinedOrNullOrEmpty(e) {
    return e == null || e === "";
  }
  /**
   * Return `true` if the given parameter is a String
   *
   * @param {*} str
   * @returns {boolean}
   */
  static isString(e) {
    return typeof e == "string" || e instanceof String;
  }
  /**
   * Return `true` if the `value` is an empty string ''
   *
   * @static
   * @param {*} value The value to test
   * @returns {boolean} Return `true` if the `value` is an empty string '', FALSE otherwise
   */
  static isEmptyString(e) {
    return e === "";
  }
  /**
   * Return `true` if the parameter is a boolean
   *
   * @static
   * @param {*} value
   * @returns {boolean}
   */
  static isBoolean(e) {
    return typeof e == "boolean";
  }
  /**
   * Return `true` if the parameter is a string 'true' or 'false'
   *
   * This function accepts any cases for those strings.
   * @param {string} value
   * @returns {boolean}
   */
  static isTrueOrFalseString(e) {
    const t = String(e).toLowerCase();
    return t === "true" || t === "false";
  }
  /**
   * Return `true` if the parameter is an object
   *
   * @param {*} reference
   * @returns {boolean}
   */
  static isObject(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
  }
  /**
   * Return `true` if the given object is empty
   * cf. http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object and http://jsperf.com/empty-object-test
   *
   * @param {object} obj
   * @returns {boolean}
   */
  static isEmptyObj(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t))
        return !1;
    return !0;
  }
  /**
   * Return `true` if the parameter is a real number (and not a numeric string).
   *
   * @param {*} n
   * @returns {boolean}
   */
  static isNumberStrict(e) {
    return typeof e == "number";
  }
  /**
   * Return `true` if the parameter is a number (or a number written as a string).
   *
   * @param {*} n
   * @returns {boolean}
   */
  static isNumber(e) {
    return !this.isArray(e) && !isNaN(parseFloat(e)) && isFinite(e);
  }
  /**
   * Return `true` if the given character is a number (0 to 9)
   *
   * @param {char} char
   * @returns {boolean}
   */
  static isDigit(e) {
    return /\d/.test(e);
  }
  /**
   * Return `true` if the parameter is a number (or a number written as a string).
   * This version also accepts Arabic and Persian numbers.
   *
   * @param {*} n
   * @returns {boolean}
   */
  static isNumberOrArabic(e) {
    const t = this.arabicToLatinNumbers(e, !1, !0, !0);
    return this.isNumber(t);
  }
  /**
   * Return `true` if the parameter is an integer (and not a float).
   *
   * @param {*} n
   * @returns {boolean}
   */
  static isInt(e) {
    return typeof e == "number" && parseFloat(e) === parseInt(e, 10) && !isNaN(e);
  }
  /**
   * Return `true` if the parameter is a function.
   *
   * @param {function} func
   * @returns {boolean}
   */
  static isFunction(e) {
    return typeof e == "function";
  }
  /**
   * Return `true` is the string `str` contains the string `needle`
   * Note: this function does not coerce the parameters types
   *
   * @param {string} str
   * @param {string} needle
   * @returns {boolean}
   */
  static contains(e, t) {
    return !this.isString(e) || !this.isString(t) || e === "" || t === "" ? !1 : e.indexOf(t) !== -1;
  }
  /**
   * Return `true` if the `needle` is in the array
   *
   * @param {*} needle
   * @param {Array} array
   * @returns {boolean}
   */
  static isInArray(e, t) {
    return !this.isArray(t) || t === [] || this.isUndefined(e) ? !1 : t.indexOf(e) !== -1;
  }
  /**
   * Return `true` if the parameter is an Array
   * //TODO Replace this by the default `Array.isArray()` function?
   *
   * @param {*} arr
   * @throws Error
   * @returns {*|boolean}
   */
  static isArray(e) {
    if (Object.prototype.toString.call([]) === "[object Array]")
      return Array.isArray(e) || typeof e == "object" && Object.prototype.toString.call(e) === "[object Array]";
    throw new Error("toString message changed for Object Array");
  }
  /**
   * Return `true` if the parameter is a DOM element
   * cf. http://stackoverflow.com/a/4754104/2834898
   *
   * @param {*} obj
   * @returns {boolean}
   */
  static isElement(e) {
    return typeof Element > "u" ? !1 : e instanceof Element;
  }
  /**
   * Return `true` in the given DOM element is an <input>.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @returns {boolean}
   * @private
   */
  static isInputElement(e) {
    return this.isElement(e) && e.tagName.toLowerCase() === "input";
  }
  /**
   * Return `true` if the parameter is a string that represents a float number, and that number has a decimal part
   *
   * @param {string} str
   * @returns {boolean}
   */
  // static hasDecimals(str) {
  //     const [, decimalPart] = str.split('.');
  //     return !isUndefined(decimalPart);
  // }
  /**
   * Return the number of decimal places if the parameter is a string that represents a float number, and that number has a decimal part.
   *
   * @param {string} str
   * @returns {int}
   */
  static decimalPlaces(e) {
    const [, t] = e.split(".");
    return this.isUndefined(t) ? 0 : t.length;
  }
  /**
   * Return the index of the first non-zero decimal place in the given value.
   * The index starts after the decimal point, if any, and begins at '1'.
   * If no decimal places are found in the value, this function returns `0`.
   *
   * @example
   * indexFirstNonZeroDecimalPlace('0.00') -> 0
   * indexFirstNonZeroDecimalPlace('1.00') -> 0
   * indexFirstNonZeroDecimalPlace('0.12') -> 1
   * indexFirstNonZeroDecimalPlace('0.1234') -> 1
   * indexFirstNonZeroDecimalPlace('0.01234') -> 2
   * indexFirstNonZeroDecimalPlace('0.001234') -> 3
   * indexFirstNonZeroDecimalPlace('0.0001234') -> 4
   *
   * @param {number} value
   * @returns {Number|number}
   */
  static indexFirstNonZeroDecimalPlace(e) {
    const [, t] = String(Math.abs(e)).split(".");
    if (this.isUndefined(t))
      return 0;
    let s = t.lastIndexOf("0");
    return s === -1 ? s = 0 : s += 2, s;
  }
  /**
   * Return the code for the key used to generate the given event.
   *
   * @param {Event} event
   * @returns {string|Number}
   */
  static keyCodeNumber(e) {
    return typeof e.which > "u" ? e.keyCode : e.which;
  }
  /**
   * Return the character from the event key code.
   * If the KeyboardEvent does not represent a printable character, then the key name is used (ie. 'Meta', 'Shift', 'F1', etc.)
   * @example character(50) => '2'
   *
   * @param {KeyboardEvent} event
   * @returns {string}
   */
  static character(e) {
    let t;
    if (e.key === "Unidentified" || e.key === void 0 || this.isSeleniumBot()) {
      const s = this.keyCodeNumber(e);
      if (s === 229)
        return m.keyName.AndroidDefault;
      const a = m.fromCharCodeKeyCode[s];
      i.isUndefinedOrNullOrEmpty(a) ? t = String.fromCharCode(s) : t = a;
    } else
      switch (e.key) {
        case "Add":
          t = m.keyName.NumpadPlus;
          break;
        case "Apps":
          t = m.keyName.ContextMenu;
          break;
        case "Crsel":
          t = m.keyName.CrSel;
          break;
        case "Decimal":
          e.char ? t = e.char : t = m.keyName.NumpadDot;
          break;
        case "Del":
          t = m.keyName.Delete;
          break;
        case "Divide":
          t = m.keyName.NumpadSlash;
          break;
        case "Down":
          t = m.keyName.DownArrow;
          break;
        case "Esc":
          t = m.keyName.Esc;
          break;
        case "Exsel":
          t = m.keyName.ExSel;
          break;
        case "Left":
          t = m.keyName.LeftArrow;
          break;
        case "Meta":
        case "Super":
          t = m.keyName.OSLeft;
          break;
        case "Multiply":
          t = m.keyName.NumpadMultiply;
          break;
        case "Right":
          t = m.keyName.RightArrow;
          break;
        case "Spacebar":
          t = m.keyName.Space;
          break;
        case "Subtract":
          t = m.keyName.NumpadMinus;
          break;
        case "Up":
          t = m.keyName.UpArrow;
          break;
        default:
          t = e.key;
      }
    return t;
  }
  /**
   * Return an object containing the name and version of the current browser.
   * @example `browserVersion()` => { name: 'Firefox', version: '42' }
   * Based on http://stackoverflow.com/a/38080051/2834898
   *
   * @returns {{ name: string, version: string }}
   */
  static browser() {
    const e = navigator.userAgent;
    let t, s = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /trident/i.test(s[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], { name: "ie", version: t[1] || "" }) : s[1] === "Chrome" && (t = e.match(/\b(OPR|Edge)\/(\d+)/), t !== null) ? { name: t[1].replace("OPR", "opera"), version: t[2] } : (s = s[2] ? [s[1], s[2]] : [navigator.appName, navigator.appVersion, "-?"], (t = e.match(/version\/(\d+)/i)) !== null && s.splice(1, 1, t[1]), { name: s[0].toLowerCase(), version: s[1] });
  }
  /**
   * Check if the browser is controlled by Selenium.
   * Note: This only works within the geckodriver.
   * cf. http://stackoverflow.com/questions/33225947/can-a-website-detect-when-you-are-using-selenium-with-chromedriver
   *
   * @returns {boolean}
   */
  static isSeleniumBot() {
    return window.navigator.webdriver === !0;
  }
  /**
   * Return `true` if the given number is negative, or if the given string contains a negative sign :
   * - everywhere in the string (by default), or
   * - on the first character only if the `checkEverywhere` parameter is set to `false`.
   *
   * Note: `-0` is not a negative number since it's equal to `0`.
   *
   * @param {number|string} numberOrNumericString A Number, or a number represented by a string
   * @param {string} negativeSignCharacter The single character that represent the negative sign
   * @param {boolean} checkEverywhere If TRUE, then the negative sign is search everywhere in the numeric string (this is needed for instance if the string is '1234.56-')
   * @returns {boolean}
   */
  static isNegative(e, t = "-", s = !0) {
    return e === t ? !0 : e === "" ? !1 : i.isNumber(e) ? e < 0 : s ? this.contains(e, t) : this.isNegativeStrict(e, t);
  }
  /**
   * Return `true` if the given string contains a negative sign on the first character (on the far left).
   *
   * @example isNegativeStrict('1234.56')     => false
   * @example isNegativeStrict('1234.56-')    => false
   * @example isNegativeStrict('-1234.56')    => true
   * @example isNegativeStrict('-1,234.56 €') => true
   *
   * @param {string} numericString
   * @param {string} negativeSignCharacter The single character that represent the negative sign
   * @returns {boolean}
   */
  static isNegativeStrict(e, t = "-") {
    return e.charAt(0) === t;
  }
  /**
   * Return `true` if the very first character is the opening bracket, and if the rest of the `valueString` also has the closing bracket.
   *
   * @param {string} valueString
   * @param {string} leftBracket
   * @param {string} rightBracket
   * @returns {boolean}
   */
  static isNegativeWithBrackets(e, t, s) {
    return e.charAt(0) === t && this.contains(e, s);
  }
  /**
   * Return `true` if the formatted or unformatted numeric string represent the value 0 (ie. '0,00 €'), or is empty (' €').
   * This works since we test if there are any numbers from 1 to 9 in the string. If there is none, then the number is zero (or the string is empty).
   *
   * @param {string} numericString
   * @returns {boolean}
   */
  static isZeroOrHasNoValue(e) {
    return !/[1-9]/g.test(e);
  }
  /**
   * Return the negative version of the value (represented as a string) given as a parameter.
   * The numeric string is a valid Javascript number when typecast to a `Number`.
   *
   * @param {string} value
   * @returns {*}
   */
  static setRawNegativeSign(e) {
    return this.isNegativeStrict(e, "-") ? e : `-${e}`;
  }
  /**
   * Replace the character at the position `index` in the string `string` by the character(s) `newCharacter`.
   *
   * @param {string} string
   * @param {int} index
   * @param {string} newCharacter
   * @returns {string}
   */
  static replaceCharAt(e, t, s) {
    return `${e.substr(0, t)}${s}${e.substr(t + s.length)}`;
  }
  /**
   * Return the value clamped to the nearest minimum/maximum value, as defined in the settings.
   *
   * @param {string|number} value
   * @param {object} settings
   * @returns {number}
   */
  static clampToRangeLimits(e, t) {
    return Math.max(t.minimumValue, Math.min(t.maximumValue, e));
  }
  /**
   * Return the number of number or dot characters on the left side of the caret, in a formatted number.
   *
   * @param {string} formattedNumberString
   * @param {int} caretPosition This must be a positive integer
   * @param {string} decimalCharacter
   * @returns {number}
   */
  static countNumberCharactersOnTheCaretLeftSide(e, t, s) {
    const a = new RegExp(`[0-9${s}-]`);
    let n = 0;
    for (let c = 0; c < t; c++)
      a.test(e[c]) && n++;
    return n;
  }
  /**
   * Walk the `formattedNumberString` from left to right, one char by one, counting the `formattedNumberStringIndex`.
   * If the char is in the `rawNumberString` (starting at index 0), then `rawNumberStringIndex++`, and continue until
   * there is no more characters in `rawNumberString`) or that `rawNumberStringIndex === caretPositionInRawValue`.
   * When you stop, the `formattedNumberStringIndex` is the position where the caret should be set.
   *
   * @example
   * 1234567|89.01   : position 7 (rawNumberString)
   * 123.456.7|89,01 : position 9 (formattedNumberString)
   *
   * @param {string} rawNumberString
   * @param {int} caretPositionInRawValue
   * @param {string} formattedNumberString
   * @param {string} decimalCharacter
   * @returns {*}
   */
  static findCaretPositionInFormattedNumber(e, t, s, a) {
    const n = s.length, c = e.length;
    let o, l = 0;
    for (o = 0; o < n && l < c && l < t; o++)
      (e[l] === s[o] || e[l] === "." && s[o] === a) && l++;
    return o;
  }
  /**
   * Count the number of occurrence of the given character, in the given text.
   *
   * @param {string} character
   * @param {string} text
   * @returns {number}
   */
  static countCharInText(e, t) {
    let s = 0;
    for (let a = 0; a < t.length; a++)
      t[a] === e && s++;
    return s;
  }
  /**
   * Return the index that can be used to set the caret position.
   * This takes into account that the position is starting at '0', not 1.
   *
   * @param {int} characterCount
   * @returns {number}
   */
  static convertCharacterCountToIndexPosition(e) {
    return Math.max(e, e - 1);
  }
  /**
   * Cross browser routine for getting selected range/cursor position.
   * Note: this also works with edge cases like contenteditable-enabled elements, and hidden inputs.
   *
   * @param {HTMLInputElement|EventTarget} element
   * @returns {{}}
   */
  static getElementSelection(e) {
    const t = {};
    let s;
    try {
      s = this.isUndefined(e.selectionStart);
    } catch {
      s = !1;
    }
    try {
      if (s) {
        const n = window.getSelection().getRangeAt(0);
        t.start = n.startOffset, t.end = n.endOffset, t.length = t.end - t.start;
      } else
        t.start = e.selectionStart, t.end = e.selectionEnd, t.length = t.end - t.start;
    } catch {
      t.start = 0, t.end = 0, t.length = 0;
    }
    return t;
  }
  /**
   * Cross browser routine for setting selected range/cursor position
   *
   * @param {HTMLInputElement|EventTarget} element
   * @param {int} start
   * @param {int|null} end
   */
  static setElementSelection(e, t, s = null) {
    if (this.isUndefinedOrNullOrEmpty(s) && (s = t), this.isInputElement(e))
      e.setSelectionRange(t, s);
    else if (!i.isNull(e.firstChild)) {
      const a = document.createRange();
      a.setStart(e.firstChild, t), a.setEnd(e.firstChild, s);
      const n = window.getSelection();
      n.removeAllRanges(), n.addRange(a);
    }
  }
  /**
   * Function that throw error messages
   *
   * @param {string} message
   * @throws
   */
  static throwError(e) {
    throw new Error(e);
  }
  /**
   * Function that display a warning messages, according to the debug level.
   *
   * @param {string} message
   * @param {boolean} showWarning If FALSE, then the warning message is not displayed
   */
  static warning(e, t = !0) {
    t && console.warn(`Warning: ${e}`);
  }
  /**
   * Return `true` if the given event is an instance of WheelEvent
   *
   * @static
   * @param {event} event The event to test
   * @returns {boolean} Return `true` if the event is an instance of WheelEvent, FALSE otherwise
  */
  static isWheelEvent(e) {
    return e instanceof WheelEvent;
  }
  /**
   * Return `true` if the given event is a wheelup event
   *
   * @param {WheelEvent} wheelEvent
   * @returns {boolean}
   */
  static isWheelUpEvent(e) {
    return (!this.isWheelEvent(e) || this.isUndefinedOrNullOrEmpty(e.deltaY)) && this.throwError(`The event passed as a parameter is not a valid wheel event, '${e.type}' given.`), e.deltaY < 0;
  }
  /**
   * Return `true` if the given event is a wheeldown event
   *
   * @param {WheelEvent} wheelEvent
   * @returns {boolean}
   */
  static isWheelDownEvent(e) {
    return (!this.isWheelEvent(e) || this.isUndefinedOrNullOrEmpty(e.deltaY)) && this.throwError(`The event passed as a parameter is not a valid wheel event, '${e.type}' given.`), e.deltaY > 0;
  }
  /**
   * Return `true` if the given event is an instance of WheelEvent and the deltaY value is equal to zero
   *
   * @param {WheelEvent} wheelEvent The event to test
   * @returns {boolean} Return `true` if the event is an instance of WheelEvent and the deltaY value is equal to zero, FALSE otherwise
   */
  static isWheelEventWithZeroDeltaY(e) {
    return this.isWheelEvent(e) && !this.isUndefinedOrNullOrEmpty(e.deltaY) && e.deltaY === 0;
  }
  /**
   * Return the given raw value truncated at the given number of decimal places `decimalPlaces`.
   * This function does not round the value.
   *
   * @example
   * forceDecimalPlaces(123.45678, 0) -> '123.45678'
   * forceDecimalPlaces(123.45678, 1) -> '123.4'
   * forceDecimalPlaces(123.45678, 2) -> '123.45'
   * forceDecimalPlaces(123.45678, 3) -> '123.456'
   *
   * @param {number} value
   * @param {int} decimalPlaces
   * @returns {number|string}
   */
  static forceDecimalPlaces(e, t) {
    const [s, a] = String(e).split(".");
    return a ? `${s}.${a.substr(0, t)}` : e;
  }
  /**
   * Return the 'nearest rounded' value, according to the given step size.
   * @example roundToNearest(264789, 10000)) => 260000
   *
   * @param {number} value
   * @param {number} stepPlace
   * @returns {*}
   */
  static roundToNearest(e, t = 1e3) {
    return e === 0 ? 0 : (t === 0 && this.throwError("The `stepPlace` used to round is equal to `0`. This value must not be equal to zero."), Math.round(e / t) * t);
  }
  /**
   * Return the 'nearest rounded' value by automatically adding or subtracting the calculated offset to the initial value.
   * This is done without having to pass a step to this function, and based on the size of the given `value`.
   *
   * @example                    Calculated offset
   *           1 ->           1 (1)
   *          14 ->          10 (10)
   *         143 ->         140 (10)
   *       1.278 ->       1.300 (100)
   *      28.456 ->      28.500 (100)
   *     276.345 ->     276.000 (1.000)
   *   4.534.061 ->   4.530.000 (10.000)
   *  66.723.844 ->  66.700.000 (100.000)
   * 257.833.411 -> 258.000.000 (1.000.000)
   *
   *                           Initial   Added   Offset
   * 2 decimalPlacesRawValue : 1.12   -> 2.00   (1)
   * 3 decimalPlacesRawValue : 1.123  -> 2.000  (1)
   *
   * Special case when the `value` to round is between -1 and 1, excluded :
   * @example
   *     Number of             Initial   Result  Calculated
   *     decimal places        value     (add)   offset
   * 2 decimalPlacesRawValue : 0.12   -> 0.13    (0.01) : Math.pow(10, -2)
   * 2 decimalPlacesRawValue : 0.01   -> 0.02    (0.01)
   * 2 decimalPlacesRawValue : 0.00   -> 0.01    (0.01)
   *
   * 3 decimalPlacesRawValue : 0.123  -> 0.133   (0.01)  : Math.pow(10, -2)
   * 3 decimalPlacesRawValue : 0.012  -> 0.013   (0.001) : Math.pow(10, -3)
   * 3 decimalPlacesRawValue : 0.001  -> 0.001   (0.001)
   * 3 decimalPlacesRawValue : 0.000  -> 0.001   (0.001)
   *
   * 4 decimalPlacesRawValue : 0.4123 -> 0.4200  (0.01)   : Math.pow(10, -2)
   * 4 decimalPlacesRawValue : 0.0412 -> 0.0420  (0.001)  : Math.pow(10, -3)
   * 4 decimalPlacesRawValue : 0.0041 -> 0.0042  (0.0001) : Math.pow(10, -4)
   * 4 decimalPlacesRawValue : 0.0004 -> 0.0005  (0.0001)
   * 4 decimalPlacesRawValue : 0.0000 -> 0.0001  (0.0001)
   *
   * @param {number} value
   * @param {boolean} isAddition
   * @param {int} decimalPlacesRawValue The precision needed by the `rawValue`
   * @returns {*}
   */
  static modifyAndRoundToNearestAuto(e, t, s) {
    e = Number(this.forceDecimalPlaces(e, s));
    const a = Math.abs(e);
    if (a >= 0 && a < 1) {
      const n = Math.pow(10, -s);
      if (e === 0)
        return t ? n : -n;
      let c;
      const o = s, l = this.indexFirstNonZeroDecimalPlace(e);
      l >= o - 1 ? c = n : c = Math.pow(10, -(l + 1));
      let h;
      return t ? h = e + c : h = e - c, this.roundToNearest(h, c);
    } else {
      e = parseInt(e, 10);
      const n = Math.abs(e).toString().length;
      let c;
      switch (n) {
        case 1:
          c = 0;
          break;
        case 2:
        case 3:
          c = 1;
          break;
        case 4:
        case 5:
          c = 2;
          break;
        default:
          c = n - 3;
      }
      const o = Math.pow(10, c);
      let l;
      return t ? l = e + o : l = e - o, l <= 10 && l >= -10 ? l : this.roundToNearest(l, o);
    }
  }
  /**
   * Return the 'nearest rounded' value automatically by adding the calculated offset to the initial value.
   * This will limit the result to the given number of decimal places `decimalPlacesLimit`.
   *
   * @param {number} value
   * @param {int} decimalPlacesLimit
   * @returns {*}
   */
  static addAndRoundToNearestAuto(e, t) {
    return this.modifyAndRoundToNearestAuto(e, !0, t);
  }
  /**
   * Return the 'nearest rounded' value automatically by subtracting the calculated offset to the initial value.
   * This will limit the result to the given number of decimal places `decimalPlacesLimit`.
   *
   * @param {number} value
   * @param {int} decimalPlacesLimit
   * @returns {*}
   */
  static subtractAndRoundToNearestAuto(e, t) {
    return this.modifyAndRoundToNearestAuto(e, !1, t);
  }
  /**
   * Take an arabic number as a string and return a javascript number.
   * By default, this function does not try to convert the arabic decimal and thousand separator characters.
   * This returns `NaN` is the conversion is not possible.
   * Based on http://stackoverflow.com/a/17025392/2834898
   *
   * @param {string} arabicNumbers
   * @param {boolean} returnANumber If `true`, return a Number, otherwise return a String
   * @param {boolean} parseDecimalCharacter
   * @param {boolean} parseThousandSeparator
   * @returns {string|number|NaN}
   */
  static arabicToLatinNumbers(e, t = !0, s = !1, a = !1) {
    if (this.isNull(e))
      return e;
    let n = e.toString();
    if (n === "")
      return e;
    if (n.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g) === null)
      return t && (n = Number(n)), n;
    s && (n = n.replace(/٫/, ".")), a && (n = n.replace(/٬/g, "")), n = n.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (o) => o.charCodeAt(0) - 1632).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (o) => o.charCodeAt(0) - 1776);
    const c = Number(n);
    return isNaN(c) ? c : (t && (n = c), n);
  }
  /**
   * Create a custom event and immediately sent it from the given element.
   * By default, if no element is given, the event is thrown from `document`.
   *
   * @param {string} eventName
   * @param {HTMLElement|HTMLDocument|EventTarget} element
   * @param {object} detail
   * @param {boolean} bubbles Set to `true` if the event must bubble up
   * @param {boolean} cancelable Set to `true` if the event must be cancelable
   */
  static triggerEvent(e, t = document, s = null, a = !0, n = !0) {
    let c;
    window.CustomEvent ? c = new CustomEvent(e, { detail: s, bubbles: a, cancelable: n }) : (c = document.createEvent("CustomEvent"), c.initCustomEvent(e, a, n, { detail: s })), t.dispatchEvent(c);
  }
  /**
   * Function to parse minimumValue, maximumValue & the input value to prepare for testing to determine if the value falls within the min / max range.
   * Return an object example: minimumValue: "999999999999999.99" returns the following "{s: -1, e: 12, c: Array[15]}".
   *
   * This function is adapted from Big.js https://github.com/MikeMcl/big.js/. Many thanks to Mike.
   *
   * @param {number|string} n A numeric value.
   * @returns {{}}
   */
  static parseStr(e) {
    const t = {};
    let s, a, n, c;
    if (e === 0 && 1 / e < 0 && (e = "-0"), e = e.toString(), this.isNegativeStrict(e, "-") ? (e = e.slice(1), t.s = -1) : t.s = 1, s = e.indexOf("."), s > -1 && (e = e.replace(".", "")), s < 0 && (s = e.length), a = e.search(/[1-9]/i) === -1 ? e.length : e.search(/[1-9]/i), n = e.length, a === n)
      t.e = 0, t.c = [0];
    else {
      for (c = n - 1; e.charAt(c) === "0"; c -= 1)
        n -= 1;
      for (n -= 1, t.e = s - a - 1, t.c = [], s = 0; a <= n; a += 1)
        t.c[s] = +e.charAt(a), s += 1;
    }
    return t;
  }
  /**
   * Function to test if the input value falls with the Min / Max settings.
   * This uses the parsed strings for the above parseStr function.
   *
   * This function is adapted from Big.js https://github.com/MikeMcl/big.js/. Many thanks to Mike.
   *
   * @param {object} y Big number instance
   * @param {object} x Big number instance
   * @returns {*}
   */
  static testMinMax(e, t) {
    const s = t.c, a = e.c;
    let n = t.s, c = e.s, o = t.e, l = e.e;
    if (!s[0] || !a[0]) {
      let g;
      return s[0] ? g = n : g = a[0] ? -c : 0, g;
    }
    if (n !== c)
      return n;
    const h = n < 0;
    if (o !== l)
      return o > l ^ h ? 1 : -1;
    for (n = -1, o = s.length, l = a.length, c = o < l ? o : l, n += 1; n < c; n += 1)
      if (s[n] !== a[n])
        return s[n] > a[n] ^ h ? 1 : -1;
    let d;
    return o === l ? d = 0 : d = o > l ^ h ? 1 : -1, d;
  }
  /**
   * Generate a random string.
   * cf. http://stackoverflow.com/a/8084248/2834898
   *
   * @param {Number} strLength Length of the generated string (in character count)
   * @returns {string}
   */
  static randomString(e = 5) {
    return Math.random().toString(36).substr(2, e);
  }
  /**
   * Return the DOM element when passed either a DOM element or a selector string.
   *
   * @param {HTMLElement|string} domElementOrSelector
   * @returns {HTMLElement}
   */
  static domElement(e) {
    let t;
    return i.isString(e) ? t = document.querySelector(e) : t = e, t;
  }
  /**
   * Retrieve the current element value.
   *
   * @param {HTMLElement|HTMLInputElement|EventTarget} element
   * @returns {number|string|null}
   */
  static getElementValue(e) {
    return e.tagName.toLowerCase() === "input" ? e.value : this.text(e);
  }
  /**
   * Modify the element value directly.
   *
   * @param {HTMLElement|HTMLInputElement} element
   * @param {number|string|null} value
   */
  static setElementValue(e, t = null) {
    e.tagName.toLowerCase() === "input" ? e.value = t : e.textContent = t;
  }
  /**
   * Set the invalid state for the given element.
   * A custom message can be passed as the second argument.
   * Note: This does not work with contenteditable elements
   *
   * @param {HTMLElement|HTMLInputElement} element
   * @param {string|null} message
   * @throws Error
   */
  static setInvalidState(e, t = "Invalid") {
    (t === "" || this.isNull(t)) && this.throwError("Cannot set the invalid state with an empty message."), e.setCustomValidity(t);
  }
  /**
   * Set the valid state for the given element.
   * Note: This does not work with contenteditable elements
   *
   * @param {HTMLElement|HTMLInputElement} element
   */
  static setValidState(e) {
    e.setCustomValidity("");
  }
  /**
   * This clone the given object, and return it.
   * WARNING: This does not do a deep cloning.
   * cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Examples
   * //TODO Add a `deep` option to clone object with more than one depth
   *
   * @param {object} obj
   * @returns {object}
   */
  static cloneObject(e) {
    return Object.assign({}, e);
  }
  /**
   * Return a 'camelized' version of the given string.
   * By default, this assume that :
   * - the separators are hyphens '-',
   * - the 'data-' string should be removed, and
   * - that the very first word should not be capitalized.
   *
   * @example camelize('data-currency-symbol') => 'currencySymbol'
   *
   * @param {string} str Text to camelize
   * @param {string} separator Character that separate each word
   * @param {boolean} removeData If set to `true`, remove the `data-` part that you can find on some html attributes
   * @param {boolean} skipFirstWord If set to `true`, do not capitalize the very first word
   * @returns {string|null}
   */
  static camelize(e, t = "-", s = !0, a = !0) {
    if (this.isNull(e))
      return null;
    s && (e = e.replace(/^data-/, ""));
    let c = e.split(t).map((o) => `${o.charAt(0).toUpperCase()}${o.slice(1)}`);
    return c = c.join(""), a && (c = `${c.charAt(0).toLowerCase()}${c.slice(1)}`), c;
  }
  /**
   * Return the text component of the given DOM element.
   *
   * @param {Element} domElement
   * @returns {string}
   */
  static text(e) {
    const t = e.nodeType;
    let s;
    return t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? s = e.textContent : t === Node.TEXT_NODE ? s = e.nodeValue : s = "", s;
  }
  /**
   * Set the text content of the given DOM element.
   * @param {Element} domElement
   * @param {string} text
   */
  static setText(e, t) {
    const s = e.nodeType;
    (s === Node.ELEMENT_NODE || s === Node.DOCUMENT_NODE || s === Node.DOCUMENT_FRAGMENT_NODE) && (e.textContent = t);
  }
  /**
   * Filter out the given `arr` array with the elements found in `excludedElements`.
   * This returns a new array and does not modify the source.
   * cf. verification here : http://codepen.io/AnotherLinuxUser/pen/XpvrMg?editors=0012
   *
   * @param {Array} arr
   * @param {Array} excludedElements
   * @returns {*|Array.<T>}
   */
  static filterOut(e, t) {
    return e.filter((s) => !this.isInArray(s, t));
  }
  /**
   * Remove the trailing zeros in the decimal part of a number.
   *
   * @param {string} numericString
   * @returns {*}
   */
  static trimPaddedZerosFromDecimalPlaces(e) {
    if (e = String(e), e === "")
      return "";
    const [t, s] = e.split(".");
    if (this.isUndefinedOrNullOrEmpty(s))
      return t;
    const a = s.replace(/0+$/g, "");
    let n;
    return a === "" ? n = t : n = `${t}.${a}`, n;
  }
  /**
   * Return the top-most hovered item by the mouse cursor.
   *
   * @returns {*}
   */
  static getHoveredElement() {
    const e = [...document.querySelectorAll(":hover")];
    return e[e.length - 1];
  }
  /**
   * Return the given array trimmed to the given length.
   * @example arrayTrim([1, 2, 3, 4], 2) -> [1, 2]
   *
   * @param {Array} array
   * @param {Number} length
   * @returns {*}
   */
  static arrayTrim(e, t) {
    const s = e.length;
    return s === 0 || t > s ? e : t < 0 ? [] : (e.length = parseInt(t, 10), e);
  }
  /**
   * Merge all the given arrays by keeping only unique elements, and return an array with de-duplicated values.
   * cf. http://stackoverflow.com/a/27664971/2834898
   *
   * @param {...array} arrays
   * @returns {[*]}
   */
  static arrayUnique(...e) {
    return [...new Set([].concat(...e))];
  }
  /**
   * Merge all the given Maps by keeping only unique elements, and return a new Map with de-duplicated keys.
   *
   * @param {...Map} mapObjects
   * @returns {Map}
   */
  static mergeMaps(...e) {
    return new Map(e.reduce((t, s) => t.concat([...s]), []));
  }
  /**
   * Search the given `value` in the object `obj`, and return the very first key it finds
   *
   * @param {object} obj
   * @param {string|number} value
   * @returns {*|null}
   */
  static objectKeyLookup(e, t) {
    const s = Object.entries(e).find((n) => n[1] === t);
    let a = null;
    return s !== void 0 && (a = s[0]), a;
  }
  /**
   * Insert the single character `char` in the string `str` at the given position `index`
   *
   * @param {string} str
   * @param {string} char
   * @param {int} index
   * @returns {string}
   */
  static insertAt(e, t, s) {
    if (e = String(e), s > e.length)
      throw new Error("The given index is out of the string range.");
    if (t.length !== 1)
      throw new Error("The given string `char` should be only one character long.");
    return e === "" && s === 0 ? t : `${e.slice(0, s)}${t}${e.slice(s)}`;
  }
  /**
   * Convert the given scientific notation to the 'expanded' decimal notation
   *
   * @example scientificToDecimal('-123.4567e-6') returns '-0.0001234567'
   *
   * @param {number|string} val
   * @returns {number|string}
   */
  static scientificToDecimal(e) {
    const t = Number(e);
    if (isNaN(t))
      return NaN;
    if (e = String(e), !(this.contains(e, "e") || this.contains(e, "E")))
      return e;
    let [a, n] = e.split(/e/i);
    const c = a < 0;
    c && (a = a.replace("-", ""));
    const o = +n < 0;
    o && (n = n.replace("-", ""));
    const [l, h] = a.split(/\./);
    let d;
    return o ? (l.length > n ? d = this.insertAt(l, ".", l.length - n) : d = `0.${"0".repeat(n - l.length)}${l}`, d = `${d}${h || ""}`) : h ? (a = `${l}${h}`, n < h.length ? d = this.insertAt(a, ".", +n + l.length) : d = `${a}${"0".repeat(n - h.length)}`) : (a = a.replace(".", ""), d = `${a}${"0".repeat(Number(n))}`), c && (d = `-${d}`), d;
  }
}
class de {
  constructor(e) {
    if (e === null)
      throw new Error("Invalid AST");
  }
  evaluate(e) {
    if (e == null)
      throw new Error("Invalid AST sub-tree");
    if (e.type === "number")
      return e.value;
    if (e.type === "unaryMinus")
      return -this.evaluate(e.left);
    {
      const t = this.evaluate(e.left), s = this.evaluate(e.right);
      switch (e.type) {
        case "op_+":
          return Number(t) + Number(s);
        case "op_-":
          return t - s;
        case "op_*":
          return t * s;
        case "op_/":
          return t / s;
        default:
          throw new Error(`Invalid operator '${e.type}'`);
      }
    }
  }
}
class N {
  /*
  constructor() {
      // this.type = void(0);
      // this.value = 0;
      // this.left = null;
      // this.right = null;
  }
  */
  static createNode(e, t, s) {
    const a = new N();
    return a.type = e, a.left = t, a.right = s, a;
  }
  static createUnaryNode(e) {
    const t = new N();
    return t.type = "unaryMinus", t.left = e, t.right = null, t;
  }
  static createLeaf(e) {
    const t = new N();
    return t.type = "number", t.value = e, t;
  }
}
class ge {
  constructor(e, t, s) {
    this.type = e, this.value = t, this.symbol = s;
  }
}
class fe {
  constructor(e) {
    this.text = e, this.textLength = e.length, this.index = 0, this.token = new ge("Error", 0, 0);
  }
  /**
   * Ignore white spaces and increment the index count until a non-space character is found
   * @private
   */
  _skipSpaces() {
    for (; this.text[this.index] === " " && this.index <= this.textLength; )
      this.index++;
  }
  /**
   * Return the current index
   *
   * @returns {number}
   */
  getIndex() {
    return this.index;
  }
  /**
   * Return the next token object
   *
   * @param {string} decimalCharacter The decimal character to use in the float numbers
   * @returns {Token}
   */
  getNextToken(e = ".") {
    if (this._skipSpaces(), this.textLength === this.index)
      return this.token.type = "EOT", this.token;
    if (i.isDigit(this.text[this.index]))
      return this.token.type = "num", this.token.value = this._getNumber(e), this.token;
    switch (this.token.type = "Error", this.text[this.index]) {
      case "+":
        this.token.type = "+";
        break;
      case "-":
        this.token.type = "-";
        break;
      case "*":
        this.token.type = "*";
        break;
      case "/":
        this.token.type = "/";
        break;
      case "(":
        this.token.type = "(";
        break;
      case ")":
        this.token.type = ")";
        break;
    }
    if (this.token.type !== "Error")
      this.token.symbol = this.text[this.index], this.index++;
    else
      throw new Error(`Unexpected token '${this.token.symbol}' at position '${this.token.index}' in the token function`);
    return this.token;
  }
  /**
   * Return the integer or float number starting from the `this.index` string index
   *
   * @param {string} decimalCharacter The decimal character to use in the float numbers
   *
   * @returns {string}
   * @private
   */
  _getNumber(e) {
    this._skipSpaces();
    const t = this.index;
    for (; this.index <= this.textLength && i.isDigit(this.text[this.index]); )
      this.index++;
    for (this.text[this.index] === e && this.index++; this.index <= this.textLength && i.isDigit(this.text[this.index]); )
      this.index++;
    if (this.index === t)
      throw new Error("No number has been found while it was expected");
    return this.text.substring(t, this.index).replace(e, ".");
  }
}
class pe {
  /**
   * Parse the given string, and generate an abstract syntax tree (AST) from the math expression
   *
   * @param {string} text
   * @param {string} customDecimalCharacter The custom decimal character to use in floats
   * @returns {ASTNode}
   */
  constructor(e, t = ".") {
    return this.text = e, this.decimalCharacter = t, this.lexer = new fe(e), this.token = this.lexer.getNextToken(this.decimalCharacter), this._exp();
  }
  _exp() {
    const e = this._term(), t = this._moreExp();
    return N.createNode("op_+", e, t);
  }
  _moreExp() {
    let e, t;
    switch (this.token.type) {
      case "+":
        return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._term(), t = this._moreExp(), N.createNode("op_+", t, e);
      case "-":
        return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._term(), t = this._moreExp(), N.createNode("op_-", t, e);
    }
    return N.createLeaf(0);
  }
  _term() {
    const e = this._factor(), t = this._moreTerms();
    return N.createNode("op_*", e, t);
  }
  _moreTerms() {
    let e, t;
    switch (this.token.type) {
      case "*":
        return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._factor(), t = this._moreTerms(), N.createNode("op_*", t, e);
      case "/":
        return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._factor(), t = this._moreTerms(), N.createNode("op_/", t, e);
    }
    return N.createLeaf(1);
  }
  _factor() {
    let e, t, s;
    switch (this.token.type) {
      case "num":
        return s = this.token.value, this.token = this.lexer.getNextToken(this.decimalCharacter), N.createLeaf(s);
      case "-":
        return this.token = this.lexer.getNextToken(this.decimalCharacter), t = this._factor(), N.createUnaryNode(t);
      case "(":
        return this.token = this.lexer.getNextToken(this.decimalCharacter), e = this._exp(), this._match(")"), e;
      default:
        throw new Error(`Unexpected token '${this.token.symbol}' with type '${this.token.type}' at position '${this.token.index}' in the factor function`);
    }
  }
  _match(e) {
    const t = this.lexer.getIndex() - 1;
    if (this.text[t] === e)
      this.token = this.lexer.getNextToken(this.decimalCharacter);
    else
      throw new Error(`Unexpected token '${this.token.symbol}' at position '${t}' in the match function`);
  }
}
/**
 *               AutoNumeric.js
 *
 * @version      4.10.5
 * @date         2024-02-06 UTC 20:14
 *
 * @authors      2016-2024 Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 *               2009-2016 Bob Knothe <bob.knothe@gmail.com>
 * @contributors Sokolov Yura and others, cf. AUTHORS
 * @copyright    Alexandre Bonneau & Robert J. Knothe
 * @since        2009-08-09
 *
 * @summary      AutoNumeric is a standalone Javascript library
 *               that provides live *as-you-type* formatting for
 *               international numbers and currencies.
 *
 * @link         http://autonumeric.org
 * @docs         https://docs.autonumeric.org
 *
 *               Note : Some functions are borrowed from big.js
 * @see          https://github.com/MikeMcl/big.js/
 *
 * Please report any bugs to https://github.com/autoNumeric/autoNumeric
 *
 * @license      Released under the MIT License
 * @link         http://www.opensource.org/licenses/mit-license.php
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const r = class r {
  /**
   * Return the autoNumeric version number (for debugging purpose)
   *
   * @returns {string}
   */
  static version() {
    return "4.10.5";
  }
  /**
   * Initialize the AutoNumeric object onto the given DOM element, and attach the settings and related event listeners to it.
   * The options passed as a parameter is an object that contains the settings (i.e. {digitGroupSeparator: ".", decimalCharacter: ",", currencySymbol: '€ '})
   *
   * @example
   * anElement = new AutoNumeric(domElement); // With the default options
   * anElement = new AutoNumeric(domElement, { options }); // With one option object
   * anElement = new AutoNumeric(domElement, 'euroPos'); // With a named pre-defined string
   * anElement = new AutoNumeric(domElement, [{ options1 }, 'euroPos', { options2 }]); // With multiple option objects (the latest option overwriting the previous ones)
   * anElement = new AutoNumeric(domElement, null, { options }); // With one option object, and a failed initial value
   * anElement = new AutoNumeric(domElement).french(); // With one pre-defined language object
   * anElement = new AutoNumeric(domElement).french({ options });// With one pre-defined language object and additional options that will override the defaults
   *
   * // ...or init and set the value in one call :
   * anElement = new AutoNumeric(domElement, 12345.789); // With the default options, and an initial value
   * anElement = new AutoNumeric(domElement, 12345.789, { options });
   * anElement = new AutoNumeric(domElement, '12345.789', { options });
   * anElement = new AutoNumeric(domElement, 12345.789, 'euroPos');
   * anElement = new AutoNumeric(domElement, 12345.789, [{ options1 }, 'euroPos', { options2 }]);
   * anElement = new AutoNumeric(domElement, 12345.789).french({ options });
   * anElement = new AutoNumeric(domElement, 12345.789, { options }).french({ options }); // Not really helpful, but possible
   *
   * // The AutoNumeric constructor class can also accept a string as a css selector. Under the hood this use `QuerySelector` and limit itself to only the first element it finds.
   * anElement = new AutoNumeric('.myCssClass > input');
   * anElement = new AutoNumeric('.myCssClass > input', { options });
   * anElement = new AutoNumeric('.myCssClass > input', 'euroPos');
   * anElement = new AutoNumeric('.myCssClass > input', [{ options1 }, 'euroPos', { options2 }]);
   * anElement = new AutoNumeric('.myCssClass > input', 12345.789);
   * anElement = new AutoNumeric('.myCssClass > input', 12345.789, { options });
   * anElement = new AutoNumeric('.myCssClass > input', 12345.789, 'euroPos');
   * anElement = new AutoNumeric('.myCssClass > input', 12345.789, [{ options1 }, 'euroPos', { options2 }]);
   * anElement = new AutoNumeric('.myCssClass > input', null, { options }); // With a failed initial value
   * anElement = new AutoNumeric('.myCssClass > input', 12345.789).french({ options });
   *
   * @param {object|Array|number|string} arg1
   * @param {object|Array|number|string|null} arg2
   * @param {object|Array|number|string|null} arg3
   * @throws
   */
  constructor(e = null, t = null, s = null) {
    const { domElement: a, initialValue: n, userOptions: c } = r._setArgumentsValues(e, t, s);
    if (this.domElement = a, this.defaultRawValue = "", this._setSettings(c, !1), this._checkElement(), this.savedCancellableValue = null, this.historyTable = [], this.historyTableIndex = -1, this.onGoingRedo = !1, this.parentForm = this._getParentForm(), !this.runOnce && this.settings.formatOnPageLoad)
      this._formatDefaultValueOnPageLoad(n);
    else {
      let o;
      if (i.isNull(n))
        switch (this.settings.emptyInputBehavior) {
          case r.options.emptyInputBehavior.min:
            o = this.settings.minimumValue;
            break;
          case r.options.emptyInputBehavior.max:
            o = this.settings.maximumValue;
            break;
          case r.options.emptyInputBehavior.zero:
            o = "0";
            break;
          case r.options.emptyInputBehavior.focus:
          case r.options.emptyInputBehavior.press:
          case r.options.emptyInputBehavior.always:
            o = "";
            break;
          case r.options.emptyInputBehavior.null:
            o = null;
            break;
          default:
            o = this.settings.emptyInputBehavior;
        }
      else
        o = n;
      this._setElementAndRawValue(o);
    }
    this.runOnce = !0, this.hasEventListeners = !1, (this.isInputElement || this.isContentEditable) && (this.settings.noEventListeners || this._createEventListeners(), this._setWritePermissions(!0)), this._saveInitialValues(n), this.storageNamePrefix = "AUTO_", this._setPersistentStorageName(), this.validState = !0, this.isFocused = !1, this.isWheelEvent = !1, this.isDropEvent = !1, this.isEditing = !1, this.rawValueOnFocus = void 0, this.internalModification = !1, this.attributeToWatch = this._getAttributeToWatch(), this.getterSetter = Object.getOwnPropertyDescriptor(this.domElement.__proto__, this.attributeToWatch), this._addWatcher(), this.settings.createLocalList && this._createLocalList(), this.constructor._addToGlobalList(this), this.global = {
      /**
       * Set the same given element value for each element in the local AutoNumeric element list, and format those elements immediately
       *
       * @param {number|string} newValue The value must be a number or a numeric string
       * @param {object} options A settings object that will override the current settings. Note: the update is done only if the `newValue` is defined.
       */
      set: (o, l = null) => {
        this.autoNumericLocalList.forEach((h) => {
          h.set(o, l);
        });
      },
      /**
       * Set the value given value directly as the DOM element value, without formatting it beforehand.
       * This sets the same unformatted value for each element in the local AutoNumeric element list.
       *
       * @param {number|string} value
       * @param {object} options
       */
      setUnformatted: (o, l = null) => {
        this.autoNumericLocalList.forEach((h) => {
          h.setUnformatted(o, l);
        });
      },
      /**
       * This is an alias of the `getNumericString()` function, and should not be used anymore.
       *
       * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
       * @returns {Array<string>}
       * @deprecated
       */
      get: (o = null) => {
        const l = [];
        return this.autoNumericLocalList.forEach((h) => {
          l.push(h.get());
        }), this._executeCallback(l, o), l;
      },
      /**
       * Return an array of the unformatted values (as a string) of each AutoNumeric element of the local AutoNumeric element list
       *
       * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
       * @returns {Array<string>}
       */
      getNumericString: (o = null) => {
        const l = [];
        return this.autoNumericLocalList.forEach((h) => {
          l.push(h.getNumericString());
        }), this._executeCallback(l, o), l;
      },
      /**
       * Return an array of the current formatted values (as a string) of each AutoNumeric element of the local AutoNumeric element list
       *
       * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
       * @returns {Array<string>}
       */
      getFormatted: (o = null) => {
        const l = [];
        return this.autoNumericLocalList.forEach((h) => {
          l.push(h.getFormatted());
        }), this._executeCallback(l, o), l;
      },
      /**
       * Return an array of the element unformatted values (as a real Javascript number), for each element of the local AutoNumeric element list
       *
       * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
       * @returns {Array<number>}
       */
      getNumber: (o = null) => {
        const l = [];
        return this.autoNumericLocalList.forEach((h) => {
          l.push(h.getNumber());
        }), this._executeCallback(l, o), l;
      },
      /**
       * Returns the unformatted values (following the `outputFormat` setting) of each element of the local AutoNumeric element list into an array
       *
       * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
       * @returns {Array<string>}
       */
      getLocalized: (o = null) => {
        const l = [];
        return this.autoNumericLocalList.forEach((h) => {
          l.push(h.getLocalized());
        }), this._executeCallback(l, o), l;
      },
      /**
       * Force each element of the local AutoNumeric element list to reformat its value
       */
      reformat: () => {
        this.autoNumericLocalList.forEach((o) => {
          o.reformat();
        });
      },
      /**
       * Remove the formatting and keep only the raw unformatted value (as a numericString) in each element of the local AutoNumeric element list
       */
      unformat: () => {
        this.autoNumericLocalList.forEach((o) => {
          o.unformat();
        });
      },
      /**
       * Remove the formatting and keep only the localized unformatted value in the element, with the option to override the default outputFormat if needed
       *
       * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
       */
      unformatLocalized: (o = null) => {
        this.autoNumericLocalList.forEach((l) => {
          l.unformatLocalized(o);
        });
      },
      /**
       * Updates the AutoNumeric settings, and immediately format the elements accordingly, for each element of the local AutoNumeric element list
       *
       * @param {object} newOptions This can be either one or more option objects
       */
      update: (...o) => {
        this.autoNumericLocalList.forEach((l) => {
          l.update(...o);
        });
      },
      /**
       * Return `true` if *all* the autoNumeric-managed elements are pristine, if their raw value hasn't changed.
       * By default, this returns `true` if the raw unformatted value is still the same even if the formatted one has changed (due to a configuration update for instance).
       *
       * @param {boolean} checkOnlyRawValue If set to `true`, the pristine value is done on the raw unformatted value, not the formatted one. If set to `false`, this also checks that the formatted value hasn't changed.
       * @returns {boolean}
       */
      isPristine: (o = !0) => {
        let l = !0;
        return this.autoNumericLocalList.forEach((h) => {
          l && !h.isPristine(o) && (l = !1);
        }), l;
      },
      /**
       * Execute the `clear()` method on each AutoNumeric object in the local AutoNumeric element list
       *
       * @param {boolean} forceClearAll
       */
      clear: (o = !1) => {
        this.autoNumericLocalList.forEach((l) => {
          l.clear(o);
        });
      },
      /**
       * Execute the `remove()` method on each AutoNumeric object in the local AutoNumeric element list
       */
      remove: () => {
        this.autoNumericLocalList.forEach((o) => {
          o.remove();
        });
      },
      /**
       * Execute the `wipe()` method on each AutoNumeric object in the local AutoNumeric element list
       */
      wipe: () => {
        this.autoNumericLocalList.forEach((o) => {
          o.wipe();
        });
      },
      /**
       * Execute the `nuke()` method on each AutoNumeric object in the local AutoNumeric element list
       */
      nuke: () => {
        this.autoNumericLocalList.forEach((o) => {
          o.nuke();
        });
      },
      /**
       * Return `true` if the given AutoNumeric object (or DOM element) is in the local AutoNumeric element list
       *
       * @param {HTMLElement|HTMLInputElement|AutoNumeric} domElementOrAutoNumericObject
       * @returns {*}
       */
      has: (o) => {
        let l;
        return o instanceof r ? l = this.autoNumericLocalList.has(o.node()) : l = this.autoNumericLocalList.has(o), l;
      },
      /**
       * Add an existing AutoNumeric object (or DOM element) to the local AutoNumeric element list, using the DOM element as the key.
       * This manages the case where `addObject` is used on an AutoNumeric object that already has multiple elements in its local list.
       *
       * @param {HTMLElement|HTMLInputElement|AutoNumeric} domElementOrAutoNumericObject
       */
      addObject: (o) => {
        let l, h;
        o instanceof r ? (l = o.node(), h = o) : (l = o, h = r.getAutoNumericElement(l)), this._hasLocalList() || this._createLocalList();
        let d = h._getLocalList();
        d.size === 0 && (h._createLocalList(), d = h._getLocalList());
        let g;
        d instanceof Map ? g = i.mergeMaps(this._getLocalList(), d) : (this._addToLocalList(l, h), g = this._getLocalList()), g.forEach((p) => {
          p._setLocalList(g);
        });
      },
      /**
       * Remove the given AutoNumeric object (or DOM element) from the local AutoNumeric element list, using the DOM element as the key.
       * If this function attempts to remove the current AutoNumeric object from the local list, a warning is shown, but the deletion is still done.
       *
       * Special cases :
       * - If the current object removes itself, then it's removed from the shared local list, then a new empty local list is used/created
       * - If another object remove this object, then a local list with only this object is used/created
       *
       * @param {HTMLElement|HTMLInputElement|AutoNumeric} domElementOrAutoNumericObject
       * @param {boolean} keepCurrentANObject If set to `false`, then the function will also remove the current AutoNumeric object if asked, otherwise it will ignore it and print a warning message
       */
      removeObject: (o, l = !1) => {
        let h, d;
        o instanceof r ? (h = o.node(), d = o) : (h = o, d = r.getAutoNumericElement(h));
        const g = this.autoNumericLocalList;
        this.autoNumericLocalList.delete(h), g.forEach((p) => {
          p._setLocalList(this.autoNumericLocalList);
        }), !l && h === this.node() ? d._setLocalList(/* @__PURE__ */ new Map()) : d._createLocalList();
      },
      /**
       * Remove all elements from the shared list, effectively emptying it.
       * This is the equivalent of calling `detach()` on each of its elements.
       *
       * @param {boolean} keepEachANObjectInItsOwnList If set to `true`, then instead of completely emptying the local list of each AutoNumeric objects, each one of those keeps itself in its own local list
       */
      empty: (o = !1) => {
        this.autoNumericLocalList.forEach((h) => {
          o ? h._createLocalList() : h._setLocalList(/* @__PURE__ */ new Map());
        });
      },
      /**
       * Return an array containing all the AutoNumeric DOM elements that have been initialized by each other
       *
       * @returns {Array<HTMLElement>}
       */
      elements: () => {
        const o = [];
        return this.autoNumericLocalList.forEach((l) => {
          o.push(l.node());
        }), o;
      },
      /**
       * Return the `Map` object directly
       * @returns {Map}
       */
      getList: () => this.autoNumericLocalList,
      /**
       * Return the number of element in the local AutoNumeric element list
       * @returns {number}
       */
      size: () => this.autoNumericLocalList.size
    }, this.options = {
      /**
       * Reset any options set previously, by overwriting them with the default settings
       *
       * @returns {AutoNumeric}
       */
      reset: () => (this.settings = { rawValue: this.defaultRawValue }, this.update(r.defaultSettings), this),
      allowDecimalPadding: (o) => (this.update({ allowDecimalPadding: o }), this),
      alwaysAllowDecimalCharacter: (o) => (this.update({ alwaysAllowDecimalCharacter: o }), this),
      caretPositionOnFocus: (o) => (this.settings.caretPositionOnFocus = o, this),
      createLocalList: (o) => (this.settings.createLocalList = o, this.settings.createLocalList ? this._hasLocalList() || this._createLocalList() : this._deleteLocalList(), this),
      currencySymbol: (o) => (this.update({ currencySymbol: o }), this),
      currencySymbolPlacement: (o) => (this.update({ currencySymbolPlacement: o }), this),
      decimalCharacter: (o) => (this.update({ decimalCharacter: o }), this),
      decimalCharacterAlternative: (o) => (this.settings.decimalCharacterAlternative = o, this),
      /**
       * Update the decimal places globally, which means this override any previously set number of decimal shown on focus, on blur, or in the raw value.
       *
       * @param {int} decimalPlaces
       * @returns {AutoNumeric}
       */
      decimalPlaces: (o) => (i.warning("Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.", this.settings.showWarnings), this.update({ decimalPlaces: o }), this),
      decimalPlacesRawValue: (o) => (this.update({ decimalPlacesRawValue: o }), this),
      decimalPlacesShownOnBlur: (o) => (this.update({ decimalPlacesShownOnBlur: o }), this),
      decimalPlacesShownOnFocus: (o) => (this.update({ decimalPlacesShownOnFocus: o }), this),
      defaultValueOverride: (o) => (this.update({ defaultValueOverride: o }), this),
      digitalGroupSpacing: (o) => (this.update({ digitalGroupSpacing: o }), this),
      digitGroupSeparator: (o) => (this.update({ digitGroupSeparator: o }), this),
      divisorWhenUnfocused: (o) => (this.update({ divisorWhenUnfocused: o }), this),
      emptyInputBehavior: (o) => (this.rawValue === null && o !== r.options.emptyInputBehavior.null && (i.warning(`You are trying to modify the \`emptyInputBehavior\` option to something different than \`'null'\` (${o}), but the element raw value is currently set to \`null\`. This would result in an invalid \`rawValue\`. In order to fix that, the element value has been changed to the empty string \`''\`.`, this.settings.showWarnings), this.rawValue = ""), this.update({ emptyInputBehavior: o }), this),
      eventBubbles: (o) => (this.settings.eventBubbles = o, this),
      eventIsCancelable: (o) => (this.settings.eventIsCancelable = o, this),
      failOnUnknownOption: (o) => (this.settings.failOnUnknownOption = o, this),
      formatOnPageLoad: (o) => (this.settings.formatOnPageLoad = o, this),
      formulaMode: (o) => (this.settings.formulaMode = o, this),
      historySize: (o) => (this.settings.historySize = o, this),
      invalidClass: (o) => (this.settings.invalidClass = o, this),
      isCancellable: (o) => (this.settings.isCancellable = o, this),
      leadingZero: (o) => (this.update({ leadingZero: o }), this),
      maximumValue: (o) => (this.update({ maximumValue: o }), this),
      minimumValue: (o) => (this.update({ minimumValue: o }), this),
      modifyValueOnUpDownArrow: (o) => (this.settings.modifyValueOnUpDownArrow = o, this),
      modifyValueOnWheel: (o) => (this.settings.modifyValueOnWheel = o, this),
      negativeBracketsTypeOnBlur: (o) => (this.update({ negativeBracketsTypeOnBlur: o }), this),
      negativePositiveSignPlacement: (o) => (this.update({ negativePositiveSignPlacement: o }), this),
      negativeSignCharacter: (o) => (this.update({ negativeSignCharacter: o }), this),
      negativePositiveSignBehavior: (o) => (this.settings.negativePositiveSignBehavior = o, this),
      noEventListeners: (o) => (o === r.options.noEventListeners.noEvents && this.settings.noEventListeners === r.options.noEventListeners.addEvents && this._removeEventListeners(), this.update({ noEventListeners: o }), this),
      onInvalidPaste: (o) => (this.settings.onInvalidPaste = o, this),
      outputFormat: (o) => (this.settings.outputFormat = o, this),
      overrideMinMaxLimits: (o) => (this.update({ overrideMinMaxLimits: o }), this),
      positiveSignCharacter: (o) => (this.update({ positiveSignCharacter: o }), this),
      rawValueDivisor: (o) => (this.update({ rawValueDivisor: o }), this),
      readOnly: (o) => (this.settings.readOnly = o, this._setWritePermissions(), this),
      roundingMethod: (o) => (this.update({ roundingMethod: o }), this),
      saveValueToSessionStorage: (o) => (this.update({ saveValueToSessionStorage: o }), this),
      symbolWhenUnfocused: (o) => (this.update({ symbolWhenUnfocused: o }), this),
      selectNumberOnly: (o) => (this.settings.selectNumberOnly = o, this),
      selectOnFocus: (o) => (this.settings.selectOnFocus = o, this),
      serializeSpaces: (o) => (this.settings.serializeSpaces = o, this),
      showOnlyNumbersOnFocus: (o) => (this.update({ showOnlyNumbersOnFocus: o }), this),
      showPositiveSign: (o) => (this.update({ showPositiveSign: o }), this),
      showWarnings: (o) => (this.settings.showWarnings = o, this),
      styleRules: (o) => (this.update({ styleRules: o }), this),
      suffixText: (o) => (this.update({ suffixText: o }), this),
      unformatOnHover: (o) => (this.settings.unformatOnHover = o, this),
      unformatOnSubmit: (o) => (this.settings.unformatOnSubmit = o, this),
      upDownStep: (o) => (this.settings.upDownStep = o, this),
      valuesToStrings: (o) => (this.update({ valuesToStrings: o }), this),
      watchExternalChanges: (o) => (this.update({ watchExternalChanges: o }), this),
      wheelOn: (o) => (this.settings.wheelOn = o, this),
      wheelStep: (o) => (this.settings.wheelStep = o, this)
    }, this._triggerEvent(r.events.initialized, this.domElement, {
      newValue: i.getElementValue(this.domElement),
      newRawValue: this.rawValue,
      error: null,
      aNElement: this
    });
  }
  /**
   * Take the parameters given to the AutoNumeric object, and output the three variables that are needed to finish initializing it :
   * - domElement : The target DOM element
   * - initialValue : The initial value, or `null` if none is given
   * - userOptions : The option object
   *
   * @param {object|Array|number|string} arg1
   * @param {object|Array|number|string|null} arg2
   * @param {object|Array|number|string|null} arg3
   * @returns {{domElement: *, initialValue: *, userOptions: *}}
   * @throws
   * @private
   */
  static _setArgumentsValues(e, t, s) {
    i.isNull(e) && i.throwError("At least one valid parameter is needed in order to initialize an AutoNumeric object");
    const a = i.isElement(e), n = i.isString(e), c = i.isObject(t), o = Array.isArray(t) && t.length > 0, l = i.isNumberOrArabic(t) || t === "", h = this._isPreDefinedOptionValid(t), d = i.isNull(t), g = i.isEmptyString(t), p = i.isObject(s), y = Array.isArray(s) && s.length > 0, v = i.isNull(s), E = this._isPreDefinedOptionValid(s);
    let b, S, w;
    return a && d && v ? (b = e, w = null, S = null) : a && l && v ? (b = e, w = t, S = null) : a && c && v ? (b = e, w = null, S = t) : a && h && v ? (b = e, w = null, S = this._getOptionObject(t)) : a && o && v ? (b = e, w = null, S = this.mergeOptions(t)) : a && (d || g) && p ? (b = e, w = null, S = s) : a && (d || g) && y ? (b = e, w = null, S = this.mergeOptions(s)) : n && d && v ? (b = document.querySelector(e), w = null, S = null) : n && c && v ? (b = document.querySelector(e), w = null, S = t) : n && h && v ? (b = document.querySelector(e), w = null, S = this._getOptionObject(t)) : n && o && v ? (b = document.querySelector(e), w = null, S = this.mergeOptions(t)) : n && (d || g) && p ? (b = document.querySelector(e), w = null, S = s) : n && (d || g) && y ? (b = document.querySelector(e), w = null, S = this.mergeOptions(s)) : n && l && v ? (b = document.querySelector(e), w = t, S = null) : n && l && p ? (b = document.querySelector(e), w = t, S = s) : n && l && E ? (b = document.querySelector(e), w = t, S = this._getOptionObject(s)) : n && l && y ? (b = document.querySelector(e), w = t, S = this.mergeOptions(s)) : a && l && p ? (b = e, w = t, S = s) : a && l && E ? (b = e, w = t, S = this._getOptionObject(s)) : a && l && y ? (b = e, w = t, S = this.mergeOptions(s)) : i.throwError(`The parameters given to the AutoNumeric object are not valid, '${e}', '${t}' and '${s}' given.`), i.isNull(b) && i.throwError(`The selector '${e}' did not select any valid DOM element. Please check on which element you called AutoNumeric.`), { domElement: b, initialValue: w, userOptions: S };
  }
  /**
   * Merge the option objects found in the given array `optionsArray`.
   * If a `string` is found, then we try to get the related pre-defined option using that string as its name.
   * When merging the options, the latest option overwrite any previously set. This allows to fine tune a pre-defined option for instance.
   *
   * @param {Array<object|string>} optionsArray
   * @returns {{}}
   */
  static mergeOptions(e) {
    const t = {};
    return e.forEach((s) => {
      Object.assign(t, this._getOptionObject(s));
    }), t;
  }
  /**
   * Return `true` if the given pre-defined option name is an attribute of the `AutoNumeric.predefinedOptions` object
   *
   * @param {string} preDefinedOptionName
   * @returns {boolean}
   * @private
   */
  static _isPreDefinedOptionValid(e) {
    return Object.prototype.hasOwnProperty.call(r.predefinedOptions, e);
  }
  /**
   * Return an option object based on the given parameter.
   * If `optionObjectOrPredefinedName` is as string, then we retrieve the pre-defined option object, if it's an object, we use it as is.
   *
   * @param {object|string} optionObjectOrPredefinedName
   * @returns {object}
   */
  static _getOptionObject(e) {
    let t;
    return i.isString(e) ? (t = r.getPredefinedOptions()[e], t == null && i.warning(`The given pre-defined option [${e}] is not recognized by autoNumeric. Please check that pre-defined option name.`, !0)) : t = e, t;
  }
  /**
   * Save the initial element values for later use in the pristine test.
   * Those values are :
   * - the html attribute (i.e. <input value='42'>), and
   * - the script `value` (i.e. `let domElement.value`)
   *
   * @param {null|number|string} initialValue
   * @private
   */
  _saveInitialValues(e) {
    this.initialValueHtmlAttribute = i.scientificToDecimal(this.domElement.getAttribute("value")), i.isNull(this.initialValueHtmlAttribute) && (this.initialValueHtmlAttribute = ""), this.initialValue = e, i.isNull(this.initialValue) && (this.initialValue = "");
  }
  /**
   * Generate all the event listeners for the given DOM element
   * @private
   */
  _createEventListeners() {
    this.formulaMode = !1, this._onFocusInFunc = (e) => {
      this._onFocusIn(e);
    }, this._onFocusInAndMouseEnterFunc = (e) => {
      this._onFocusInAndMouseEnter(e);
    }, this._onFocusFunc = () => {
      this._onFocus();
    }, this._onKeydownFunc = (e) => {
      this._onKeydown(e);
    }, this._onKeypressFunc = (e) => {
      this._onKeypress(e);
    }, this._onKeyupFunc = (e) => {
      this._onKeyup(e);
    }, this._onFocusOutAndMouseLeaveFunc = (e) => {
      this._onFocusOutAndMouseLeave(e);
    }, this._onPasteFunc = (e) => {
      this._onPaste(e);
    }, this._onWheelFunc = (e) => {
      this._onWheel(e);
    }, this._onDropFunc = (e) => {
      this._onDrop(e);
    }, this._onKeydownGlobalFunc = (e) => {
      this._onKeydownGlobal(e);
    }, this._onKeyupGlobalFunc = (e) => {
      this._onKeyupGlobal(e);
    }, this.domElement.addEventListener("focusin", this._onFocusInFunc, !1), this.domElement.addEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("focus", this._onFocusFunc, !1), this.domElement.addEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("keydown", this._onKeydownFunc, !1), this.domElement.addEventListener("keypress", this._onKeypressFunc, !1), this.domElement.addEventListener("keyup", this._onKeyupFunc, !1), this.domElement.addEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("paste", this._onPasteFunc, !1), this.domElement.addEventListener("wheel", this._onWheelFunc, !1), this.domElement.addEventListener("drop", this._onDropFunc, !1), this._setupFormListener(), this.hasEventListeners = !0, r._doesGlobalListExists() || (document.addEventListener("keydown", this._onKeydownGlobalFunc, !1), document.addEventListener("keyup", this._onKeyupGlobalFunc, !1));
  }
  /**
   * Remove all the autoNumeric-related event listeners for the given DOM element
   * @private
   */
  _removeEventListeners() {
    this.domElement.removeEventListener("focusin", this._onFocusInFunc, !1), this.domElement.removeEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("focus", this._onFocusFunc, !1), this.domElement.removeEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("keydown", this._onKeydownFunc, !1), this.domElement.removeEventListener("keypress", this._onKeypressFunc, !1), this.domElement.removeEventListener("keyup", this._onKeyupFunc, !1), this.domElement.removeEventListener("paste", this._onPasteFunc, !1), this.domElement.removeEventListener("wheel", this._onWheelFunc, !1), this.domElement.removeEventListener("drop", this._onDropFunc, !1), this._removeFormListener(), this.hasEventListeners = !1, document.removeEventListener("keydown", this._onKeydownGlobalFunc, !1), document.removeEventListener("keyup", this._onKeyupGlobalFunc, !1);
  }
  /**
   * Toggle the event listeners according to the `noEventListeners` option, if those were not activated/deactivated before
   * @private
   */
  _updateEventListeners() {
    !this.settings.noEventListeners && !this.hasEventListeners && this._createEventListeners(), this.settings.noEventListeners && this.hasEventListeners && this._removeEventListeners();
  }
  /**
   * Mark the parent <form> so that other AutoNumeric object will not add more listeners.
   * Add a counter so that when removing the AutoNumeric object, we only remove the submit listener if that count is equal to 0.
   * Also keep a reference to the 'submit' event handler function to be able to remove that handler later if the `_removeFormListener()` function is called from another AutoNumeric object.
   *
   * @private
   */
  _setupFormListener() {
    i.isNull(this.parentForm) || (this._onFormSubmitFunc = () => {
      this._onFormSubmit();
    }, this._onFormResetFunc = () => {
      this._onFormReset();
    }, this._hasParentFormCounter() ? this._incrementParentFormCounter() : (this._initializeFormCounterToOne(), this.parentForm.addEventListener("submit", this._onFormSubmitFunc, !1), this.parentForm.addEventListener("reset", this._onFormResetFunc, !1), this._storeFormHandlerFunction()));
  }
  /**
   * Remove the form 'submit' event listener, as well as the `dataset` info (`anCount` and `anFormHandler`) from the parent form, only when there are only one AutoNumeric child element left in that <form>.
   * Otherwise, decrement the `anCount`.
   *
   * @private
   */
  _removeFormListener() {
    if (!i.isNull(this.parentForm)) {
      const e = this._getParentFormCounter();
      e === 1 ? (this.parentForm.removeEventListener("submit", this._getFormHandlerFunction().submitFn, !1), this.parentForm.removeEventListener("reset", this._getFormHandlerFunction().resetFn, !1), this._removeFormDataSetInfo()) : e > 1 ? this._decrementParentFormCounter() : i.throwError("The AutoNumeric object count on the form is incoherent.");
    }
  }
  /**
   * Return `true` if the parent form has the form counter attribute
   *
   * @returns {boolean}
   * @private
   */
  _hasParentFormCounter() {
    return "anCount" in this.parentForm.dataset;
  }
  /**
   * Return the count of AutoNumeric form children
   *
   * @returns {number}
   * @private
   */
  _getParentFormCounter() {
    return Number(this.parentForm.dataset.anCount);
  }
  /**
   * Set the count of AutoNumeric form children to 1 for the given form element, or if none are passed, the current `this.parentForm` one.
   *
   * @param {HTMLFormElement|null} formElement
   * @private
   */
  _initializeFormCounterToOne(e = null) {
    this._getFormElement(e).dataset.anCount = 1;
  }
  /**
   * Increment the AutoNumeric form children count for the given form element, or if none are passed, the current `this.parentForm` one.
   *
   * @param {HTMLFormElement|null} formElement
   * @private
   */
  _incrementParentFormCounter(e = null) {
    this._getFormElement(e).dataset.anCount++;
  }
  /**
   * Decrement the AutoNumeric form children count for the current `this.parentForm` form element.
   *
   * @private
   */
  _decrementParentFormCounter() {
    this.parentForm.dataset.anCount--;
  }
  /**
   * Return `true` if the global form handler list exists on the `window` object.
   *
   * @returns {boolean}
   * @private
   */
  static _doesFormHandlerListExists() {
    const e = typeof window.aNFormHandlerMap;
    return e !== "undefined" && e === "object";
  }
  /**
   * Create the global form handler list on the `window` object.
   *
   * @private
   */
  static _createFormHandlerList() {
    window.aNFormHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * Return `true` if the given form element, or if none are passed, the current `this.parentForm` one has a form handler name.
   *
   * @param {HTMLFormElement|null} formElement
   * @returns {boolean}
   * @private
   */
  _hasFormHandlerFunction(e = null) {
    return "anFormHandler" in this._getFormElement(e).dataset;
  }
  /**
   * Return the given form element, or defaults to `this.parentForm` if no argument is passed.
   *
   * @param {HTMLFormElement|null} formElement
   * @returns {*}
   * @private
   */
  _getFormElement(e = null) {
    let t;
    return i.isNull(e) ? t = this.parentForm : t = e, t;
  }
  /**
   * Generate a form handler unique name and store it in the global form handler list.
   * This also save that name in the dataset of the given form element.
   *
   * @param {HTMLFormElement|null} formElement
   * @private
   */
  _storeFormHandlerFunction(e = null) {
    this.constructor._doesFormHandlerListExists() || this.constructor._createFormHandlerList();
    const t = i.randomString();
    this._getFormElement(e).dataset.anFormHandler = t, window.aNFormHandlerMap.set(t, { submitFn: this._onFormSubmitFunc, resetFn: this._onFormResetFunc });
  }
  /**
   * Return the form handler key name from the parent form element, for the global form handler list.
   *
   * @returns {string|*}
   * @private
   */
  _getFormHandlerKey() {
    this._hasFormHandlerFunction() || i.throwError("Unable to retrieve the form handler name");
    const e = this.parentForm.dataset.anFormHandler;
    return e === "" && i.throwError("The form handler name is invalid"), e;
  }
  /**
   * Return the 'submit' event handler function used for the parent form.
   *
   * @returns {function}
   * @private
   */
  _getFormHandlerFunction() {
    const e = this._getFormHandlerKey();
    return window.aNFormHandlerMap.get(e);
  }
  /**
   * Remove the dataset attributes `data-an-count` and `data-an-form-handler` from the parent form element.
   *
   * @private
   */
  _removeFormDataSetInfo() {
    this._decrementParentFormCounter(), window.aNFormHandlerMap.delete(this._getFormHandlerKey()), this.parentForm.removeAttribute("data-an-count"), this.parentForm.removeAttribute("data-an-form-handler");
  }
  /**
   * Set the DOM element write permissions according to the current settings, by setting the `readonly` or `contenteditable` attributes depending on its tag type.
   * If the `useHtmlAttribute` parameter is set to `true`, then the `readonly` html attribute is used and has precedence over the `readOnly` option to set the element as read-only.
   *
   * @param {boolean} useHtmlAttribute If set to `true`, then the write permissions are set by taking into account the html 'readonly' attribute, even if the `readOnly` option is set to false
   * @private
   */
  _setWritePermissions(e = !1) {
    e && this.domElement.readOnly || this.settings.readOnly ? this._setReadOnly() : this._setReadWrite();
  }
  /**
   * Set the element to be read-only.
   * If the DOM element tag is not an `input`, then it `contenteditable` attribute is set to `false`.
   *
   * @private
   */
  _setReadOnly() {
    this.isInputElement ? this.domElement.readOnly = !0 : this.domElement.setAttribute("contenteditable", !1);
  }
  /**
   * Set the element to be read-write.
   *
   * @private
   */
  _setReadWrite() {
    this.isInputElement ? this.domElement.readOnly = !1 : this.domElement.setAttribute("contenteditable", !0);
  }
  /**
   * Add a watcher so that any external change to the AutoNumeric-managed element would be detected.
   * As soon as such change is detected, AutoNumeric then tries to `set()` the value so that it gets formatted and stored in the history.
   * //XXX For now, this only works when watching the `value` attribute, not the `textContent` one
   * @private
   */
  _addWatcher() {
    if (!i.isUndefined(this.getterSetter)) {
      const { set: e, get: t } = this.getterSetter;
      Object.defineProperty(this.domElement, this.attributeToWatch, {
        configurable: !0,
        // This is needed in some rare cases
        get: () => t.call(this.domElement),
        set: (s) => {
          e.call(this.domElement, s), this.settings.watchExternalChanges && !this.internalModification && this.set(s);
        }
      });
    }
  }
  /**
   * Remove the watcher on the AutoNumeric-managed element
   * Note: This needs to be called when the AutoNumeric element is 'removed', otherwise the getter/setter stays on the DOM element and that can lead to problem if the user initialize another AutoNumeric object on it.
   * @private
   */
  _removeWatcher() {
    if (!i.isUndefined(this.getterSetter)) {
      const { set: e, get: t } = this.getterSetter;
      Object.defineProperty(this.domElement, this.attributeToWatch, {
        configurable: !0,
        // This is needed in some rare cases
        get: () => t.call(this.domElement),
        set: (s) => {
          e.call(this.domElement, s);
        }
      });
    }
  }
  /**
   * Return the name of the object attribute that store the current formatted data in the DOM element.
   *
   * @returns {string}
   * @private
   */
  _getAttributeToWatch() {
    let e;
    if (this.isInputElement)
      e = "value";
    else {
      const t = this.domElement.nodeType;
      t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e = "textContent" : t === Node.TEXT_NODE && (e = "nodeValue");
    }
    return e;
  }
  /**
   * Save the current raw value into the history table, along with the selection information.
   *
   * If the user has done some undos and tries to enter:
   * - a new and different number than the 'next' state, this drops the rest of the history table
   * - the very same number that result in the same rawValue as the 'next' state, we only move the history table pointer to the next state
   *
   * @private
   */
  _historyTableAdd() {
    const e = this.historyTable.length === 0;
    if (e || this.rawValue !== this._historyTableCurrentValueUsed()) {
      let t = !0;
      if (!e) {
        const s = this.historyTableIndex + 1;
        s < this.historyTable.length && this.rawValue === this.historyTable[s].value ? t = !1 : i.arrayTrim(this.historyTable, this.historyTableIndex + 1);
      }
      if (this.historyTableIndex++, t) {
        const s = i.getElementSelection(this.domElement);
        this.selectionStart = s.start, this.selectionEnd = s.end, this.historyTable.push({
          // Save the rawValue and selection start/end
          value: this.rawValue,
          // The selection for this element is temporary, and will be updated when the next history state will be recorded.
          // That way, we are always sure we save the last caret or selection positions just before the value is changed. Otherwise, we would only save those positions when the value is first changed, and would not take into account that the user could move the caret around afterward.
          // For instance, this is needed if the user change the element value, and immediately undo it ; if he then does a redo, he'll see the value and the right selection
          // To sum up; The selection position are not always +1 character, since it could also be '2' if a group separator is added when entering one character. That's why the current history state caret/selection position is updated on each `keyup` event.
          start: this.selectionStart + 1,
          // Here we add one since the user added one character too
          end: this.selectionEnd + 1
        }), this.historyTable.length > 1 && (this.historyTable[this.historyTableIndex - 1].start = this.selectionStart, this.historyTable[this.historyTableIndex - 1].end = this.selectionEnd);
      }
      this.historyTable.length > this.settings.historySize && this._historyTableForget();
    }
  }
  /**
   * Debug function for the history table
   * @private
   */
  /*
  _debugHistoryTable() {
      let i = 0;
      let mark;
      this.historyTable.forEach(history => {
          if (this.historyTableIndex === i) {
              mark = '> ';
          } else {
              mark = '';
          }
          console.log(`${mark}${i++}: ${history.value} ${history.start}|${history.end} [onGoingRedo: ${this.onGoingRedo}]`); //DEBUG
      });
  }
  */
  /**
   * 'Undo' or 'Redo' the last/next user entry in the history table.
   * This does not modify the history table, only the pointer to the current state.
   *
   * @param {boolean} undo If set to `true`, then this function does an 'Undo', otherwise it does a 'Redo'
   * @private
   */
  _historyTableUndoOrRedo(e = !0) {
    let t;
    if (e ? (t = this.historyTableIndex > 0, t && this.historyTableIndex--) : (t = this.historyTableIndex + 1 < this.historyTable.length, t && this.historyTableIndex++), t) {
      const s = this.historyTable[this.historyTableIndex];
      this.set(s.value, null, !1), i.setElementSelection(this.domElement, s.start, s.end);
    }
  }
  /**
   * 'Undo' the last user entry by going back one entry in the history table.
   * This keeps the following entries in order to allow for a 'redo'.
   * This does not modify the history table, only the pointer to the current state.
   * @private
   */
  _historyTableUndo() {
    this._historyTableUndoOrRedo(!0);
  }
  /**
   * 'Redo' the next user entry in the history table.
   * This does not modify the history table, only the pointer to the current state.
   * @private
   */
  _historyTableRedo() {
    this._historyTableUndoOrRedo(!1);
  }
  /**
   * Reset the history table to its initial state, and select the value.
   * @private
   */
  /*
  resetHistoryTable() { //FIXME Test this
      this.set(this.rawValue, null, false);
      this.select();
      const selection = AutoNumericHelper.getElementSelection(this.domElement);
      this.historyTableIndex = 0;
      this.historyTable = [{
          // Save the rawValue and selection start/end
          value: this.rawValue,
          start: selection.start,
          end  : selection.end,
      }];
  }
  */
  /**
   * Make the history table forget its first N elements, shifting its indexes in the process.
   * `N` being given as the `numberOfEntriesToForget` parameter.
   *
   * @param {Number} numberOfEntriesToForget
   * @returns {object|Array<object>} The discarded objects, in an Array.
   * @private
   */
  _historyTableForget(e = 1) {
    const t = [];
    for (let s = 0; s < e; s++)
      t.push(this.historyTable.shift()), this.historyTableIndex--, this.historyTableIndex < 0 && (this.historyTableIndex = 0);
    return t.length === 1 ? t[0] : t;
  }
  /**
   * Return the currently used value from the history table.
   *
   * @returns {string|number}
   * @private
   */
  _historyTableCurrentValueUsed() {
    let e = this.historyTableIndex;
    e < 0 && (e = 0);
    let t;
    return i.isUndefinedOrNullOrEmpty(this.historyTable[e]) ? t = "" : t = this.historyTable[e].value, t;
  }
  /**
   * Parse the `styleRules` option and run the test for each given rules, either pre-defined ones like `positive`, `negative` and `ranges`, or user defined callbacks within the `userDefined` attribute.
   * @private
   */
  _parseStyleRules() {
    i.isUndefinedOrNullOrEmpty(this.settings.styleRules) || this.rawValue === "" || (i.isUndefinedOrNullOrEmpty(this.settings.styleRules.positive) || (this.rawValue >= 0 ? this._addCSSClass(this.settings.styleRules.positive) : this._removeCSSClass(this.settings.styleRules.positive)), i.isUndefinedOrNullOrEmpty(this.settings.styleRules.negative) || (this.rawValue < 0 ? this._addCSSClass(this.settings.styleRules.negative) : this._removeCSSClass(this.settings.styleRules.negative)), !i.isUndefinedOrNullOrEmpty(this.settings.styleRules.ranges) && this.settings.styleRules.ranges.length !== 0 && this.settings.styleRules.ranges.forEach((e) => {
      this.rawValue >= e.min && this.rawValue < e.max ? this._addCSSClass(e.class) : this._removeCSSClass(e.class);
    }), !i.isUndefinedOrNullOrEmpty(this.settings.styleRules.userDefined) && this.settings.styleRules.userDefined.length !== 0 && this.settings.styleRules.userDefined.forEach((e) => {
      if (i.isFunction(e.callback))
        if (i.isString(e.classes))
          e.callback(this.rawValue) ? this._addCSSClass(e.classes) : this._removeCSSClass(e.classes);
        else if (i.isArray(e.classes))
          if (e.classes.length === 2)
            e.callback(this.rawValue) ? (this._addCSSClass(e.classes[0]), this._removeCSSClass(e.classes[1])) : (this._removeCSSClass(e.classes[0]), this._addCSSClass(e.classes[1]));
          else if (e.classes.length > 2) {
            const t = e.callback(this.rawValue);
            i.isArray(t) ? e.classes.forEach((s, a) => {
              i.isInArray(a, t) ? this._addCSSClass(s) : this._removeCSSClass(s);
            }) : i.isInt(t) ? e.classes.forEach((s, a) => {
              a === t ? this._addCSSClass(s) : this._removeCSSClass(s);
            }) : i.isNull(t) ? e.classes.forEach((s) => {
              this._removeCSSClass(s);
            }) : i.throwError(`The callback result is not an array nor a valid array index, ${typeof t} given.`);
          } else
            i.throwError("The classes attribute is not valid for the `styleRules` option.");
        else
          i.isUndefinedOrNullOrEmpty(e.classes) ? e.callback(this) : i.throwError("The callback/classes structure is not valid for the `styleRules` option.");
      else
        i.warning(`The given \`styleRules\` callback is not a function, ${typeof e.callback} given.`, this.settings.showWarnings);
    }));
  }
  /**
   * Add the given CSS class to the DOM element.
   *
   * @param {string} cssClassName
   * @private
   */
  _addCSSClass(e) {
    this.domElement.classList.add(e);
  }
  /**
   * Remove the given CSS class from the DOM element.
   *
   * @param {string} cssClassName
   * @private
   */
  _removeCSSClass(e) {
    this.domElement.classList.remove(e);
  }
  // Those are the public function available on each autoNumeric-managed element
  /**
   * Method that updates the AutoNumeric settings, and immediately format the element accordingly.
   * The options passed as parameter(s) is either one or many objects that each contains some settings, i.e. :
   * {
   *     digitGroupSeparator: ".",
   *     decimalCharacter: ",",
   *     currencySymbol: '€ ',
   * }
   * If multiple options are passed, the latter overwrite the previous ones.
   *
   * Note: If the new settings are not validated, or the call to `set()` fails, then the previous valid settings are reverted back to.
   *
   * @example anElement.update({ options }) // Updates the settings
   * @example anElement.update({ options1 }, { options2 }) // Updates the settings with multiple option objects
   * @example anElement.update([{ options1 }, { options2 }]) // Updates the settings with multiple option objects in a single array
   *
   * @param {object|string|array} newOptions
   * @returns {AutoNumeric}
   */
  update(...e) {
    Array.isArray(e) && Array.isArray(e[0]) && (e = e[0]);
    const t = i.cloneObject(this.settings), s = this.rawValue;
    let a = {};
    i.isUndefinedOrNullOrEmpty(e) || e.length === 0 ? a = null : e.length >= 1 && e.forEach((n) => {
      this.constructor._isPreDefinedOptionValid(n) && (n = this.constructor._getOptionObject(n)), Object.assign(a, n);
    });
    try {
      this._setSettings(a, !0), this._setWritePermissions(), this._updateEventListeners(), this.set(s);
    } catch (n) {
      return this._setSettings(t, !0), i.throwError(`Unable to update the settings, those are invalid: [${n}]`), this;
    }
    return this;
  }
  /**
   * Return the options object containing all the current autoNumeric settings in effect.
   * You can then directly access each option by using its name : `anElement.getSettings().optionNameAutoCompleted`.
   *
   * @example
   * anElement.getSettings()
   * anElement.getSettings().decimalCharacter // Return the decimalCharacter setting as a string - any valid option name can be used
   *
   * @returns {object}
   */
  getSettings() {
    return this.settings;
  }
  /**
   * Set the given element value, and format it immediately.
   * Additionally, this `set()` method can accept options that will be merged into the current AutoNumeric element, taking precedence over any previous settings.
   *
   * @example anElement.set('12345.67') // Formats the value
   * @example anElement.set(12345.67) // Formats the value
   * @example anElement.set(12345.67, { decimalCharacter : ',' }) // Update the settings and formats the value in one go
   * @example anElement.northAmerican().set('$12,345.67') // Set an already formatted value (this does not _exactly_ respect the currency symbol/negative placements, but only remove all non-numbers characters, according to the ones given in the settings)
   * @example anElement.set(null) // Set the rawValue and element value to `null`
   *
   * @param {number|string|null} newValue The value must be a Number, a numeric string or `null` (if `emptyInputBehavior` is set to `'null'`)
   * @param {object} options A settings object that will override the current settings. Note: the update is done only if the `newValue` is defined.
   * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history table
   * @returns {AutoNumeric}
   * @throws
   */
  set(e, t = null, s = !0) {
    if (i.isUndefined(e))
      return i.warning("You are trying to set an 'undefined' value ; an error could have occurred.", this.settings.showWarnings), this;
    if (i.isNull(t) || this._setSettings(t, !0), e === null && this.settings.emptyInputBehavior !== r.options.emptyInputBehavior.null)
      return i.warning(`You are trying to set the \`null\` value while the \`emptyInputBehavior\` option is set to ${this.settings.emptyInputBehavior}. If you want to be able to set the \`null\` value, you need to change the 'emptyInputBehavior' option to \`'null'\`.`, this.settings.showWarnings), this;
    let a;
    if (e === null)
      return this._setElementAndRawValue(null, null, s), this._saveValueToPersistentStorage(), this;
    if (a = this.constructor._toNumericValue(e, this.settings), isNaN(Number(a)))
      return i.warning("The value you are trying to set results in `NaN`. The element value is set to the empty string instead.", this.settings.showWarnings), this.setValue("", s), this;
    if (a === "")
      switch (this.settings.emptyInputBehavior) {
        case r.options.emptyInputBehavior.zero:
          a = 0;
          break;
        case r.options.emptyInputBehavior.min:
          a = this.settings.minimumValue;
          break;
        case r.options.emptyInputBehavior.max:
          a = this.settings.maximumValue;
          break;
        default:
          i.isNumber(this.settings.emptyInputBehavior) && (a = Number(this.settings.emptyInputBehavior));
      }
    if (a !== "") {
      const [n, c] = this.constructor._checkIfInRangeWithOverrideOption(a, this.settings);
      if (n && c && this.settings.valuesToStrings && this._checkValuesToStrings(a))
        return this._setElementAndRawValue(this.settings.valuesToStrings[a], a, s), this._saveValueToPersistentStorage(), this;
      if (i.isZeroOrHasNoValue(a) && (a = "0"), n && c) {
        let l = this.constructor._roundRawValue(a, this.settings);
        return l = this._trimLeadingAndTrailingZeros(l.replace(this.settings.decimalCharacter, ".")), a = this._getRawValueToFormat(a), this.isFocused ? a = this.constructor._roundFormattedValueShownOnFocus(a, this.settings) : (this.settings.divisorWhenUnfocused && (a = a / this.settings.divisorWhenUnfocused, a = a.toString()), a = this.constructor._roundFormattedValueShownOnBlur(a, this.settings)), a = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(a, this.settings), a = this.constructor._addGroupSeparators(a, this.settings, this.isFocused, this.rawValue, l), !this.isFocused && this.settings.symbolWhenUnfocused && (a = `${a}${this.settings.symbolWhenUnfocused}`), (this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._saveValueToPersistentStorage(), this._setElementAndRawValue(a, l, s), this._setValidOrInvalidState(l), this;
      } else
        return this._triggerRangeEvents(n, c), i.throwError(`The value [${a}] being set falls outside of the minimumValue [${this.settings.minimumValue}] and maximumValue [${this.settings.maximumValue}] range set for this element`), this._removeValueFromPersistentStorage(), this.setValue("", s), this;
    } else {
      let n;
      return this.settings.emptyInputBehavior === r.options.emptyInputBehavior.always ? n = this.settings.currencySymbol : n = "", this._setElementAndRawValue(n, "", s), this;
    }
  }
  /**
   * Set the given value directly as the DOM element value, without formatting it beforehand.
   * You can also set the value and update the setting in one go (the value will again not be formatted immediately).
   *
   * @param {number|string} value
   * @param {object} options
   * @returns {AutoNumeric}
   * @throws
   */
  setUnformatted(e, t = null) {
    if (e === null || i.isUndefined(e))
      return this;
    i.isNull(t) || this._setSettings(t, !0);
    const s = this.constructor._removeBrackets(e, this.settings), a = this.constructor._stripAllNonNumberCharacters(s, this.settings, !0, this.isFocused);
    return i.isNumber(a) || i.throwError("The value is not a valid one, it's not a numeric string nor a recognized currency."), this.constructor._isWithinRangeWithOverrideOption(a, this.settings) ? this.setValue(e) : i.throwError(`The value is out of the range limits [${this.settings.minimumValue}, ${this.settings.maximumValue}].`), this;
  }
  /**
   * Set the given value directly as the DOM element value, without formatting it beforehand, and without checking its validity.
   * This also updates the `rawValue` with the given `newValue`, without checking it too ; if it's not formatted like a number recognized by Javascript, this *will* likely make other AutoNumeric methods fail.
   *
   * @param {string|number|null} newValue The new value to set on the element
   * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history array, otherwise it is not
   * @returns {AutoNumeric}
   */
  setValue(e, t = !0) {
    return this._setElementAndRawValue(e, t), this;
  }
  /**
   * Save the raw value inside the AutoNumeric object.
   *
   * @param {number|string|null} rawValue The numeric value as understood by Javascript like a `Number`
   * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history array, otherwise it is not
   * @private
   */
  _setRawValue(e, t = !0) {
    if (this.rawValue !== e) {
      const s = this.rawValue;
      this.rawValue = e, !i.isNull(this.settings.rawValueDivisor) && this.settings.rawValueDivisor !== 0 && // Only divide if the `rawValueDivisor` option is set
      e !== "" && e !== null && // Do not modify the `rawValue` if it's an empty string or null
      this._isUserManuallyEditingTheValue() && (this.rawValue /= this.settings.rawValueDivisor), this._triggerEvent(r.events.rawValueModified, this.domElement, {
        oldRawValue: s,
        newRawValue: this.rawValue,
        isPristine: this.isPristine(!0),
        error: null,
        aNElement: this
      }), this._parseStyleRules(), t && window.requestAnimationFrame(() => this._historyTableAdd());
    }
  }
  /**
   * Set the given value on the DOM element, without affecting the `rawValue`.
   * This sends an 'autoNumeric:formatted' event if the new value is different from the old one.
   *
   * @param {number|string} newElementValue
   * @param {boolean} sendFormattedEvent If set to `true`, then the `AutoNumeric.events.formatted` event is sent if the value has changed
   * @returns {AutoNumeric}
   * @private
   */
  _setElementValue(e, t = !0) {
    const s = i.getElementValue(this.domElement);
    return e !== s && (this.internalModification = !0, i.setElementValue(this.domElement, e), this.internalModification = !1, t && this._triggerEvent(r.events.formatted, this.domElement, {
      oldValue: s,
      newValue: e,
      oldRawValue: this.rawValue,
      newRawValue: this.rawValue,
      isPristine: this.isPristine(!1),
      error: null,
      aNElement: this
    })), this;
  }
  /**
   * Set the given value on the DOM element, and the raw value on `this.rawValue`, if both are given.
   * If only one value is given, then both the DOM element value and the raw value are set with that value.
   * The third argument `saveChangeToHistory` defines if the change should be recorded in the history array.
   * Note: if the second argument `rawValue` is a boolean, we consider that is really is the `saveChangeToHistory` argument.
   *
   * @param {number|string|null} newElementValue
   * @param {number|string|null|boolean} rawValue
   * @param {boolean} saveChangeToHistory
   * @returns {AutoNumeric}
   * @private
   */
  _setElementAndRawValue(e, t = null, s = !0) {
    return i.isNull(t) ? t = e : i.isBoolean(t) && (s = t, t = e), this._setElementValue(e), this._setRawValue(t, s), this;
  }
  /**
   * Return the multiplied raw value with the `rawValueDivisor`.
   * This is used to display different values between the raw and formatted values.
   *
   * @param {number|string|null} rawValue The numeric value as understood by Javascript like a `Number`
   * @returns {number|string|null}
   * @private
   */
  _getRawValueToFormat(e) {
    let t;
    return !i.isNull(this.settings.rawValueDivisor) && this.settings.rawValueDivisor !== 0 && // Only multiply if the `rawValueDivisor` option is set
    e !== "" && e !== null ? t = e * this.settings.rawValueDivisor : t = e, t;
  }
  /**
   * Check if the given value has a corresponding key in the `valuesToStrings` option object.
   *
   * @param {number|string} value
   * @returns {boolean} Returns `true` if such a key is found.
   * @private
   */
  _checkValuesToStrings(e) {
    return this.constructor._checkValuesToStringsArray(e, this.valuesToStringsKeys);
  }
  /**
   * Check if the given value has a corresponding key in the `stringsArray` array.
   *
   * @param {number|string} key
   * @param {array} stringsArray Array where the `key` is checked against its keys
   * @returns {boolean} Returns `true` if such a key is found.
   * @private
   */
  static _checkValuesToStringsArray(e, t) {
    return i.isInArray(String(e), t);
  }
  /**
   * Static helper for checking if the given `key` is found in the settings' `valuesToStrings` option object.
   *
   * @param {number|string} key
   * @param {object} settings
   * @returns {boolean}
   * @private
   */
  static _checkValuesToStringsSettings(e, t) {
    return this._checkValuesToStringsArray(e, Object.keys(t.valuesToStrings));
  }
  /**
   * Static helper for checking if the given `value` is found in the settings' `valuesToStrings` option object.
   *
   * @param {number|string} value
   * @param {object} settings
   * @returns {boolean}
   * @private
   */
  static _checkStringsToValuesSettings(e, t) {
    return this._checkValuesToStringsArray(e, Object.values(t.valuesToStrings));
  }
  /**
   * Return `true` if the user is currently modifying the element value manually.
   *
   * @returns {boolean}
   * @private
   */
  _isUserManuallyEditingTheValue() {
    return this.isFocused && this.isEditing || this.isDropEvent;
  }
  /**
   * Execute the given callback function using the given result as its first parameter, and the AutoNumeric object as its second.
   *
   * @param {number|string|Array|null} result
   * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
   * @private
   */
  _executeCallback(e, t) {
    !i.isNull(t) && i.isFunction(t) && t(e, this);
  }
  /**
   * Trigger the given event on the given element with the given detail.
   * This takes into account the `eventBubbles` and `eventIsCancelable` options.
   *
   * @param {string} eventName
   * @param {HTMLElement|HTMLDocument|EventTarget} element
   * @param {object} detail
   * @private
   */
  _triggerEvent(e, t = document, s = null) {
    i.triggerEvent(e, t, s, this.settings.eventBubbles, this.settings.eventIsCancelable);
  }
  /**
   * Alias of the `getNumericString()` function.
   * Developers should use one of the more explicit function names to get what they want :
   * - a numeric string : `getNumericString()`
   * - a formatted string : `getFormatted()`
   * - a number : `getNumber()`, or
   * - a localized numeric string : `getLocalized()`
   *
   * @usage anElement.get();
   *
   * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
   *
   * @deprecated
   * @returns {string|null}
   */
  get(e = null) {
    return this.getNumericString(e);
  }
  /**
   * Return the unformatted value as a string.
   * This can also return `null` if `rawValue` is null.
   *
   * @usage anElement.getNumericString();
   *
   * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
   *
   * @returns {string|null}
   */
  getNumericString(e = null) {
    let t;
    return i.isNull(this.rawValue) ? t = null : t = i.trimPaddedZerosFromDecimalPlaces(this.rawValue), this._executeCallback(t, e), t;
  }
  /**
   * Return the current formatted value of the AutoNumeric element as a string
   *
   * @usage anElement.getFormatted()
   *
   * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
   *
   * @returns {string}
   */
  getFormatted(e = null) {
    "value" in this.domElement || "textContent" in this.domElement || i.throwError("Unable to get the formatted string from the element.");
    const t = i.getElementValue(this.domElement);
    return this._executeCallback(t, e), t;
  }
  /**
   * Return the element unformatted value as a real Javascript number.
   * Warning: This can lead to precision problems with big numbers that should be stored as strings.
   *
   * @usage anElement.getNumber()
   *
   * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
   *
   * @returns {number|null}
   */
  getNumber(e = null) {
    let t;
    return this.rawValue === null ? t = null : t = this.constructor._toLocale(this.getNumericString(), "number", this.settings), this._executeCallback(t, e), t;
  }
  /**
   * Returns the unformatted value, but following the `outputFormat` setting, which means the output can either be :
   * - a string (that could or could not represent a number (i.e. "12345,67-")), or
   * - a plain number (if the setting 'number' is used).
   *
   * By default, the returned values are an ISO numeric string "1234.56" or "-1234.56" where the decimal character is a period.
   * Check the "outputFormat" option definition for more details.
   *
   * @usage anElement.getLocalized();
   *
   * @param {null|string|function} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
   *
   * @returns {*}
   */
  getLocalized(e = null, t = null) {
    i.isFunction(e) && i.isNull(t) && (t = e, e = null);
    let s;
    i.isEmptyString(this.rawValue) ? s = "" : s = "" + Number(this.rawValue), s !== "" && Number(s) === 0 && this.settings.leadingZero !== r.options.leadingZero.keep && (s = "0");
    let a;
    i.isNull(e) ? a = this.settings.outputFormat : a = e;
    const n = this.constructor._toLocale(s, a, this.settings);
    return this._executeCallback(n, t), n;
  }
  /**
   * Force the element to reformat its value again (just in case the formatting has been lost).
   * This can be used right after a form submission for instance (after a previous call to `unformat`).
   *
   * @example anElement.reformat()
   *
   * @returns {AutoNumeric}
   */
  reformat() {
    return this.set(this.rawValue), this;
  }
  /**
   * Remove the formatting and keep only the raw unformatted value in the element (as a numericString)
   * Note: this is loosely based on the previous 'unSet()' function
   *
   * By default, values are returned as ISO numeric strings (i.e. "1234.56" or "-1234.56"), where the decimal character is a period.
   * @example anElement.unformat()
   *
   * @returns {AutoNumeric}
   */
  unformat() {
    return this._setElementValue(this.getNumericString()), this;
  }
  /**
   * Remove the formatting and keep only the localized unformatted value in the element, with the option to override the default outputFormat if needed
   *
   * Locale formats are supported "1234.56-" or "1234,56" or "-1234,56 or "1234,56-", or even plain numbers.
   * Take a look at the `outputFormat` option definition in the default settings for more details.
   *
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @returns {AutoNumeric}
   */
  unformatLocalized(e = null) {
    return this._setElementValue(this.getLocalized(e)), this;
  }
  /**
   * Return `true` if the current value is the same as when the element got initialized.
   * Note: By default, this returns `true` if the raw unformatted value is still the same even if the formatted one has changed (due to a configuration update for instance).
   * In order to test if the formatted value is the same (which means neither the raw value nor the settings have been changed), then you must pass `false` as its argument.
   *
   * @param {boolean} checkOnlyRawValue If set to `true`, the pristine value is done on the raw unformatted value, not the formatted one.  If set to `false`, this also checks that the formatted value hasn't changed.
   * @returns {boolean}
   */
  isPristine(e = !0) {
    let t;
    return e ? t = this.initialValue === this.getNumericString() : t = this.initialValueHtmlAttribute === this.getFormatted(), t;
  }
  /**
   * Select the formatted element content, based on the `selectNumberOnly` option
   *
   * @returns {AutoNumeric}
   */
  select() {
    return this.settings.selectNumberOnly ? this.selectNumber() : this._defaultSelectAll(), this;
  }
  /**
   * Select the whole element content (including the currency symbol).
   * @private
   */
  _defaultSelectAll() {
    i.setElementSelection(this.domElement, 0, i.getElementValue(this.domElement).length);
  }
  /**
   * Select only the numbers in the formatted element content, leaving out the currency symbol, whatever the value of the `selectNumberOnly` option
   *
   * @returns {AutoNumeric}
   */
  selectNumber() {
    const e = i.getElementValue(this.domElement), t = e.length, s = this.settings.currencySymbol.length, a = this.settings.currencySymbolPlacement, n = i.isNegative(e, this.settings.negativeSignCharacter) ? 1 : 0, c = this.settings.suffixText.length;
    let o;
    a === r.options.currencySymbolPlacement.suffix ? o = 0 : this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.left && n === 1 && s > 0 ? o = s + 1 : o = s;
    let l;
    if (a === r.options.currencySymbolPlacement.prefix)
      l = t - c;
    else
      switch (this.settings.negativePositiveSignPlacement) {
        case r.options.negativePositiveSignPlacement.left:
          l = t - (c + s);
          break;
        case r.options.negativePositiveSignPlacement.right:
          s > 0 ? l = t - (s + n + c) : l = t - (s + c);
          break;
        default:
          l = t - (s + c);
      }
    return i.setElementSelection(this.domElement, o, l), this;
  }
  /**
   * Select only the integer part in the formatted element content, whatever the value of `selectNumberOnly`
   *
   * @returns {AutoNumeric}
   */
  selectInteger() {
    let e = 0;
    const t = this.rawValue >= 0;
    (this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix || this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix && (this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.prefix || this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.none)) && (this.settings.showPositiveSign && t || // This only exclude the positive sign from being selected
    !t && this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.left) && (e = e + 1), this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix && (e = e + this.settings.currencySymbol.length);
    const s = i.getElementValue(this.domElement);
    let a = s.indexOf(this.settings.decimalCharacter);
    return a === -1 && (this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix ? a = s.length - this.settings.currencySymbol.length : a = s.length, !t && (this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.suffix || this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix) && (a = a - 1), a = a - this.settings.suffixText.length), i.setElementSelection(this.domElement, e, a), this;
  }
  /**
   * Select only the decimal part in the formatted element content, whatever the value of `selectNumberOnly`
   * Multiple cases are possible :
   * +1.234,57suffixText
   *
   * € +1.234,57suffixText
   * +€ 1.234,57suffixText
   * € 1.234,57+suffixText
   *
   * 1.234,57+ €suffixText
   * 1.234,57 €+suffixText
   * +1.234,57 €suffixText
   *
   * @returns {AutoNumeric}
   */
  selectDecimal() {
    let e = i.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter), t;
    if (e === -1)
      e = 0, t = 0;
    else {
      e = e + 1;
      let s;
      this.isFocused ? s = this.settings.decimalPlacesShownOnFocus : s = this.settings.decimalPlacesShownOnBlur, t = e + Number(s);
    }
    return i.setElementSelection(this.domElement, e, t), this;
  }
  /**
   * Return the DOM element reference of the autoNumeric-managed element
   *
   * @returns {HTMLElement|HTMLInputElement}
   */
  node() {
    return this.domElement;
  }
  /**
   * Return the DOM element reference of the parent node of the autoNumeric-managed element
   *
   * @returns {HTMLElement|HTMLInputElement|Node}
   */
  parent() {
    return this.domElement.parentNode;
  }
  /**
   * Detach the current AutoNumeric element from the shared local 'init' list.
   * This means any changes made on that local shared list will not be transmitted to that element anymore.
   * Note : The user can provide another AutoNumeric element, and detach this one instead of the current one.
   *
   * @param {AutoNumeric} otherAnElement
   * @returns {AutoNumeric}
   */
  detach(e = null) {
    let t;
    return i.isNull(e) ? t = this.domElement : t = e.node(), this._removeFromLocalList(t), this;
  }
  /**
   * Attach the given AutoNumeric element to the shared local 'init' list.
   * When doing that, by default the DOM content is left untouched.
   * The user can force a reformat with the new shared list options by passing a second argument to `true`.
   *
   * @param {AutoNumeric} otherAnElement
   * @param {boolean} reFormat
   * @returns {AutoNumeric}
   */
  attach(e, t = !0) {
    return this._addToLocalList(e.node()), t && e.update(this.settings), this;
  }
  /**
   * Format and return the given value, or set the formatted value into the given DOM element if one is passed as an argument.
   * By default, this use the current element settings.
   * The user can override any option of its choosing by passing an option object.
   *
   * @param {number|HTMLElement|HTMLInputElement} valueOrElement
   * @param {null|object} optionOverride
   * @returns {string|null}
   */
  formatOther(e, t = null) {
    return this._formatOrUnformatOther(!0, e, t);
  }
  /**
       * Unformat and return the raw numeric string corresponding to the given value, or directly set the unformatted value into the given DOM element if one is passed as an argument.
       * By default, this use the current element settings.
       * The user can override any option of its choosing by passing an option object.
  
       * @param {string|HTMLElement|HTMLInputElement} stringOrElement
       * @param {null|object} optionOverride
       * @returns {string|null}
       */
  unformatOther(e, t = null) {
    return this._formatOrUnformatOther(!1, e, t);
  }
  /**
   * Method that either format or unformat the value of another element.
   *
   * - Format and return the given value, or set the formatted value into the given DOM element if one is passed as an argument.
   * - Unformat and return the raw numeric string corresponding to the given value, or directly set the unformatted value into the given DOM element if one is passed as an argument.
   *
   * By default, this use the current element settings.
   * The user can override any option of its choosing by passing an option object.
   *
   * @param {boolean} isFormatting If set to `true`, then the method formats, otherwise if set to `false`, it unformats
   * @param {number|string|HTMLElement|HTMLInputElement} valueOrStringOrElement
   * @param {null|object} optionOverride
   * @returns {string|null}
   * @private
   */
  _formatOrUnformatOther(e, t, s = null) {
    let a;
    i.isNull(s) ? a = this.settings : a = this._cloneAndMergeSettings(s);
    let n;
    if (i.isElement(t)) {
      const c = i.getElementValue(t);
      return e ? n = r.format(c, a) : n = r.unformat(c, a), i.setElementValue(t, n), null;
    }
    return e ? n = r.format(t, a) : n = r.unformat(t, a), n;
  }
  /**
   * Use the current AutoNumeric element settings to initialize the DOM element(s) given as a parameter.
   * Doing so will *link* the AutoNumeric elements together since they will share the same local AutoNumeric element list.
   * (cf. prototype pattern : https://en.wikipedia.org/wiki/Prototype_pattern)
   *
   * You can `init` either a single DOM element (in that case an AutoNumeric object will be returned), or an array of DOM elements or a string that will be used as a CSS selector. In the latter cases, an array of AutoNumeric objects will then be returned (or an empty array if nothing gets selected by the CSS selector).
   *
   * Use case : Once you have an AutoNumeric element already setup correctly with the right options, you can use it as many times you want to initialize as many other DOM elements as needed.
   * Note : this works only on elements that can be managed by autoNumeric.
   *
   * @param {HTMLElement|HTMLInputElement|Array<HTMLElement|HTMLInputElement>|string} domElementOrArrayOrString
   * @param {boolean} attached If set to `false`, then the newly generated AutoNumeric element will not share the same local element list
   * @returns {AutoNumeric|[AutoNumeric]}
   */
  init(e, t = !0) {
    let s = !1, a = [];
    if (i.isString(e) ? a = [...document.querySelectorAll(e)] : i.isElement(e) ? (a.push(e), s = !0) : i.isArray(e) ? a = e : i.throwError("The given parameters to the 'init' function are invalid."), a.length === 0)
      return i.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", !0), [];
    const n = this._getLocalList(), c = [];
    return a.forEach((o) => {
      const l = this.settings.createLocalList;
      t && (this.settings.createLocalList = !1);
      const h = new r(o, i.getElementValue(o), this.settings);
      t && (h._setLocalList(n), this._addToLocalList(o, h), this.settings.createLocalList = l), c.push(h);
    }), s ? c[0] : c;
  }
  /**
   * Reset the element value either to the empty string '', or the currency sign, depending on the `emptyInputBehavior` option value.
   * If you set the `forceClearAll` argument to `true`, then the `emptyInputBehavior` option is overridden and the whole input is clear, including any currency sign.
   *
   * @param {boolean} forceClearAll
   * @returns {AutoNumeric}
   */
  clear(e = !1) {
    if (e) {
      const t = {
        emptyInputBehavior: r.options.emptyInputBehavior.focus
      };
      this.set("", t);
    } else
      this.set("");
    return this;
  }
  /**
   * Remove the autoNumeric data and event listeners from the element, but keep the element content intact.
   * This also clears the value from sessionStorage (or cookie, depending on browser supports).
   * Note: this does not remove the formatting.
   *
   * @example anElement.remove()
   */
  remove() {
    this._removeValueFromPersistentStorage(), this._removeEventListeners(), this._removeWatcher(), this._removeFromLocalList(this.domElement), this.constructor._removeFromGlobalList(this);
  }
  /**
   * Remove the autoNumeric data and event listeners from the element, and reset its value to the empty string ''.
   * This also clears the value from sessionStorage (or cookie, depending on browser supports).
   *
   * @example anElement.wipe()
   */
  wipe() {
    this._setElementValue("", !1), this.remove();
  }
  /**
   * Remove the autoNumeric data and event listeners from the element, and delete the DOM element altogether
   */
  nuke() {
    this.remove(), this.domElement.parentNode.removeChild(this.domElement);
  }
  // Special functions that really work on the parent <form> element, instead of the <input> element itself
  /**
   * Return a reference to the parent <form> element if it exists, otherwise return `null`.
   * If the parent form element as already been found, this directly return a reference to it.
   * However, you can force AutoNumeric to search again for its reference by passing `true` as a parameter to this method.
   * This method updates the `this.parentForm` attribute.
   *
   * In either case, whenever a new parent form is set for the current AutoNumeric element, we make sure to update the anCount and anFormHandler attributes on both the old form and the new one (for instance in case the user moved the input elements with `appendChild()` since AutoNumeric cannot not detect that).
   *
   * @param {boolean} forceSearch If set to `true`, the parent form is searched again, even if `this.parentForm` is already set.
   *
   * @returns {HTMLFormElement|null}
   */
  form(e = !1) {
    if (e || i.isUndefinedOrNullOrEmpty(this.parentForm)) {
      const t = this._getParentForm();
      if (!i.isNull(t) && t !== this.parentForm) {
        const s = this._getFormAutoNumericChildren(this.parentForm);
        this.parentForm.dataset.anCount = s.length, this._hasFormHandlerFunction(t) ? this._incrementParentFormCounter(t) : (this._storeFormHandlerFunction(t), this._initializeFormCounterToOne(t));
      }
      this.parentForm = t;
    }
    return this.parentForm;
  }
  /**
   * Returns an array of the AutoNumeric-managed elements for the given form element is passed, otherwise for the current `this.parentForm` element.
   * This search for <input> elements, as well as contenteditable non-input tag ones. This also search for elements outside the `form` elements.
   *
   * @param {HTMLFormElement|null} formElement
   *
   * @returns {Array.<HTMLInputElement>}
   * @private
   */
  _getFormAutoNumericChildren(e) {
    const t = [...e.elements], s = this._getContenteditableElements(e);
    return i.arrayUnique(t, s).filter((n) => this.constructor.isManagedByAutoNumeric(n));
  }
  /**
   * Returns an array of the non-input contenteditable elements linked to the given form element.
   * Two types of elements are possible, either located inside the form element, or outside.
   * For the outside elements, this only works if the form element has a defined id and that id is referenced on the non-input element as the `form` attribute.
   * If no elements can be found, then an empty array is returned.
   *
   * @param {HTMLFormElement|null} formElement
   *
   * @returns {Array.<HTMLInputElement>}
   * @private
   */
  _getContenteditableElements(e) {
    if (i.isUndefinedOrNullOrEmpty(e) || !e.hasAttribute("id"))
      return [];
    const t = [...e.querySelectorAll("[contenteditable=true]")], s = [...document.querySelectorAll(`*:not(input)[form=${e.id}][contenteditable=true]`)];
    return i.arrayUnique(t, s);
  }
  /**
   * Returns a reference to the parent <form> element if it exists, otherwise return `null`.
   *
   * @returns {HTMLFormElement|null}
   * @private
   */
  _getParentForm() {
    if (!i.isUndefined(this.domElement.form))
      return this.domElement.form;
    if (this.domElement.tagName.toLowerCase() === "body")
      return null;
    let e = this.domElement, t;
    do {
      if (e = e.parentNode, i.isNull(e))
        return null;
      if (e.tagName ? t = e.tagName.toLowerCase() : t = "", t === "body")
        break;
    } while (t !== "form");
    return t === "form" ? e : null;
  }
  /**
   * Return a string in standard URL-encoded notation with the form input values being unformatted.
   * This string can be used as a query for instance.
   *
   * @returns {string}
   */
  formNumericString() {
    return this.constructor._serializeNumericString(this.form(), this.settings.serializeSpaces);
  }
  /**
   * Return a string in standard URL-encoded notation with the form input values being formatted.
   *
   * @returns {string}
   */
  formFormatted() {
    return this.constructor._serializeFormatted(this.form(), this.settings.serializeSpaces);
  }
  /**
   * Return a string in standard URL-encoded notation with the form input values, with localized values.
   * The default output format can be overridden by passing the option as a parameter.
   *
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @returns {string}
   */
  formLocalized(e = null) {
    let t;
    return i.isNull(e) ? t = this.settings.outputFormat : t = e, this.constructor._serializeLocalized(this.form(), this.settings.serializeSpaces, t);
  }
  /**
   * Return an array containing an object for each form <input> element.
   * Those objects are of the following structure `{ name: foo, value: '42' }`, where the `name` is the DOM element name, and the `value` is an unformatted numeric string.
   *
   * @returns {Array}
   */
  formArrayNumericString() {
    return this.constructor._serializeNumericStringArray(this.form(), this.settings.serializeSpaces);
  }
  /**
   * Return an array containing an object for each form <input> element.
   * Those objects are of the following structure `{ name: foo, value: '42' }`, where the `name` is the DOM element name, and the `value` is the formatted string.
   *
   * @returns {Array}
   */
  formArrayFormatted() {
    return this.constructor._serializeFormattedArray(this.form(), this.settings.serializeSpaces);
  }
  /**
   * Return an array containing an object for each form <input> element.
   * Those objects are of the following structure `{ name: foo, value: '42' }`, where the `name` is the DOM element name, and the `value` is the localized numeric string.
   *
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @returns {Array}
   */
  formArrayLocalized(e = null) {
    let t;
    return i.isNull(e) ? t = this.settings.outputFormat : t = e, this.constructor._serializeLocalizedArray(this.form(), this.settings.serializeSpaces, t);
  }
  /**
   * Return a JSON string containing an object representing the form input values.
   * This is based on the result of the `formArrayNumericString()` function.
   *
   * @returns {string}
   */
  formJsonNumericString() {
    return JSON.stringify(this.formArrayNumericString());
  }
  /**
   * Return a JSON string containing an object representing the form input values.
   * This is based on the result of the `formArrayFormatted()` function.
   *
   * @returns {string}
   */
  formJsonFormatted() {
    return JSON.stringify(this.formArrayFormatted());
  }
  /**
   * Return a JSON string containing an object representing the form input values.
   * This is based on the result of the `formArrayLocalized()` function.
   *
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @returns {string}
   */
  formJsonLocalized(e = null) {
    return JSON.stringify(this.formArrayLocalized(e));
  }
  /**
   * Unformat all the autoNumeric-managed elements that are a child of the parent <form> element of this DOM element, to numeric strings
   *
   * @returns {AutoNumeric}
   */
  formUnformat() {
    return this.constructor._getChildANInputElement(this.form()).forEach((t) => {
      r.getAutoNumericElement(t).unformat();
    }), this;
  }
  /**
   * Unformat all the autoNumeric-managed elements that are a child of the parent <form> element of this DOM element, to localized strings
   *
   * @returns {AutoNumeric}
   */
  formUnformatLocalized() {
    return this.constructor._getChildANInputElement(this.form()).forEach((t) => {
      r.getAutoNumericElement(t).unformatLocalized();
    }), this;
  }
  /**
   * Reformat all the autoNumeric-managed elements that are a child of the parent <form> element of this DOM element
   *
   * @returns {AutoNumeric}
   */
  formReformat() {
    return this.constructor._getChildANInputElement(this.form()).forEach((t) => {
      r.getAutoNumericElement(t).reformat();
    }), this;
  }
  /**
   * Convert the input values to numeric strings, submit the form, then reformat those back.
   * The function can either take a callback, or not. If it doesn't, the default `form.submit()` function will be called.
   * Otherwise, it runs `callback(value)` with `value` being equal to the result of `formNumericString()`.
   *
   * @param {function|null} callback
   * @returns {AutoNumeric}
   */
  formSubmitNumericString(e = null) {
    return i.isNull(e) ? (this.formUnformat(), this.form().submit(), this.formReformat()) : i.isFunction(e) ? e(this.formNumericString()) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Submit the form with the current formatted values.
   * The function can either take a callback, or not. If it doesn't, the default `form.submit()` function will be called.
   * Otherwise, it runs `callback(value)` with `value` being equal to the result of `formFormatted()`.
   *
   * @param {function|null} callback
   * @returns {AutoNumeric}
   */
  formSubmitFormatted(e = null) {
    return i.isNull(e) ? this.form().submit() : i.isFunction(e) ? e(this.formFormatted()) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Convert the input values to localized strings, submit the form, then reformat those back.
   * The function can either take a callback, or not. If it doesn't, the default `form.submit()` function will be called.
   * Otherwise, it runs `callback(value)` with `value` being equal to the result of `formLocalized()`.
   *
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @param {function|null} callback
   * @returns {AutoNumeric}
   */
  formSubmitLocalized(e = null, t = null) {
    return i.isNull(t) ? (this.formUnformatLocalized(), this.form().submit(), this.formReformat()) : i.isFunction(t) ? t(this.formLocalized(e)) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Generate an array of numeric strings from the `<input>` elements, and pass it to the given callback.
   * Under the hood, the array is generated via a call to `formArrayNumericString()`.
   *
   * @param {function} callback
   * @returns {AutoNumeric}
   */
  formSubmitArrayNumericString(e) {
    return i.isFunction(e) ? e(this.formArrayNumericString()) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Generate an array of the current formatted values from the `<input>` elements, and pass it to the given callback.
   * Under the hood, the array is generated via a call to `formArrayFormatted()`.
   *
   * @param {function} callback
   * @returns {AutoNumeric}
   */
  formSubmitArrayFormatted(e) {
    return i.isFunction(e) ? e(this.formArrayFormatted()) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Generate an array of localized strings from the `<input>` elements, and pass it to the given callback.
   * Under the hood, the array is generated via a call to `formArrayLocalized()`.
   *
   * @param {function} callback
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @returns {AutoNumeric}
   */
  formSubmitArrayLocalized(e, t = null) {
    return i.isFunction(e) ? e(this.formArrayLocalized(t)) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Generate a JSON string with the numeric strings values from the `<input>` elements, and pass it to the given callback.
   * Under the hood, the array is generated via a call to `formJsonNumericString()`.
   *
   * @param {function} callback
   * @returns {AutoNumeric}
   */
  formSubmitJsonNumericString(e) {
    return i.isFunction(e) ? e(this.formJsonNumericString()) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Generate a JSON string with the current formatted values from the `<input>` elements, and pass it to the given callback.
   * Under the hood, the array is generated via a call to `formJsonFormatted()`.
   *
   * @param {function} callback
   * @returns {AutoNumeric}
   */
  formSubmitJsonFormatted(e) {
    return i.isFunction(e) ? e(this.formJsonFormatted()) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Generate a JSON string with the localized strings values from the `<input>` elements, and pass it to the given callback.
   * Under the hood, the array is generated via a call to `formJsonLocalized()`.
   *
   * @param {function} callback
   * @param {null|string} forcedOutputFormat If set to something different from `null`, then this is used as an overriding outputFormat option
   * @returns {AutoNumeric}
   */
  formSubmitJsonLocalized(e, t = null) {
    return i.isFunction(e) ? e(this.formJsonLocalized(t)) : i.throwError("The given callback is not a function."), this;
  }
  /**
   * Unformat the given AutoNumeric element, and update the `hoveredWithAlt` variable.
   *
   * @param {AutoNumeric} anElement
   * @private
   */
  static _unformatAltHovered(e) {
    e.hoveredWithAlt = !0, e.unformat();
  }
  /**
   * Reformat the given AutoNumeric element, and update the `hoveredWithAlt` variable.
   *
   * @param {AutoNumeric} anElement
   * @private
   */
  static _reformatAltHovered(e) {
    e.hoveredWithAlt = !1, e.reformat();
  }
  /**
   * Return an array of autoNumeric elements, child of the <form> element passed as a parameter.
   *
   * @param {HTMLElement} formNode
   * @returns {Array}
   * @private
   */
  static _getChildANInputElement(e) {
    const t = e.getElementsByTagName("input"), s = [];
    return Array.prototype.slice.call(t, 0).forEach((n) => {
      this.test(n) && s.push(n);
    }), s;
  }
  // Static methods
  /**
   * Test if the given DOM element, or the element selected by the given selector string is already managed by AutoNumeric (if it has been initialized on the current page).
   *
   * @param {HTMLElement|string} domElementOrSelector Accepts either directly a DOM element to test, or a string selector (that will return one and only one element, if any)
   * @returns {boolean}
   */
  static test(e) {
    return this._isInGlobalList(i.domElement(e));
  }
  /**
   * Create a WeakMap with the given name.
   *
   * @param {string} weakMapName
   * @private
   */
  static _createWeakMap(e) {
    window[e] = /* @__PURE__ */ new WeakMap();
  }
  /**
   * Create a list of all the AutoNumeric elements that are initialized on the current page.
   * This is needed in order to determine if a given dom element is already managed by autoNumeric.
   * This uses a WeakMap in order to limit potential garbage collection problems.
   * (cf. my tests on http://codepen.io/AnotherLinuxUser/pen/pRQGaM?editors=1011)
   * @private
   */
  static _createGlobalList() {
    this.autoNumericGlobalListName = "autoNumericGlobalList", this._createWeakMap(this.autoNumericGlobalListName);
  }
  /**
   * Return `true` if the global AutoNumeric element list exists.
   *
   * @returns {boolean}
   * @private
   */
  static _doesGlobalListExists() {
    const e = typeof window[this.autoNumericGlobalListName];
    return e !== "undefined" && e === "object";
  }
  /**
   * Add the given object to the global AutoNumeric element list.
   *
   * @param {AutoNumeric} autoNumericObject
   * @private
   */
  static _addToGlobalList(e) {
    this._doesGlobalListExists() || this._createGlobalList();
    const t = e.node();
    if (this._isInGlobalList(t)) {
      if (this._getFromGlobalList(t) === this)
        return;
      i.warning("A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.", e.getSettings().showWarnings);
    }
    window[this.autoNumericGlobalListName].set(t, e);
  }
  /**
   * Remove the given object from the global AutoNumeric element list.
   *
   * @param {AutoNumeric} autoNumericObject
   * @private
   */
  static _removeFromGlobalList(e) {
    this._doesGlobalListExists() && window[this.autoNumericGlobalListName].delete(e.node());
  }
  /**
   * Return the value associated to the key `domElement` passed as a parameter.
   * The value is the AutoNumeric object that manages the DOM element `domElement`.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @returns {null|AutoNumeric}
   * @private
   */
  static _getFromGlobalList(e) {
    return this._doesGlobalListExists() ? window[this.autoNumericGlobalListName].get(e) : null;
  }
  /**
   * Check if the given DOM element is in the global AutoNumeric element list.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @returns {boolean}
   * @private
   */
  static _isInGlobalList(e) {
    return this._doesGlobalListExists() ? window[this.autoNumericGlobalListName].has(e) : !1;
  }
  /**
   * Create a `Map` that will store all the autoNumeric elements that are initialized from this current element.
   * @private
   */
  _createLocalList() {
    this.autoNumericLocalList = /* @__PURE__ */ new Map(), this._addToLocalList(this.domElement);
  }
  /**
   * In some rare cases, you could want to delete the local list generated during the element initialization (in order to use another one instead for instance).
   * @private
   */
  _deleteLocalList() {
    delete this.autoNumericLocalList;
  }
  /**
   * Set the local list with the given Map object.
   *
   * @param {Map} localList
   * @private
   */
  _setLocalList(e) {
    this.autoNumericLocalList = e;
  }
  /**
   * Return the local list Map object.
   *
   * @returns {*|Map}
   * @private
   */
  _getLocalList() {
    return this.autoNumericLocalList;
  }
  /**
   * Return `true` if the AutoNumeric object has a local list defined already and has at least one element in it (itself usually).
   *
   * @returns {boolean}
   * @private
   */
  _hasLocalList() {
    return this.autoNumericLocalList instanceof Map && this.autoNumericLocalList.size !== 0;
  }
  /**
   * Add the given object to the local autoNumeric element list.
   * Note: in order to keep a coherent list, we only add DOM elements in it, not the autoNumeric object.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @param {AutoNumeric} autoNumericObject A reference to the AutoNumeric object that manage the given DOM element
   * @throws
   * @private
   */
  _addToLocalList(e, t = null) {
    i.isNull(t) && (t = this), i.isUndefined(this.autoNumericLocalList) ? i.throwError(`The local list provided does not exists when trying to add an element. [${this.autoNumericLocalList}] given.`) : this.autoNumericLocalList.set(e, t);
  }
  /**
   * Remove the given object from the local autoNumeric element list.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @private
   */
  _removeFromLocalList(e) {
    i.isUndefined(this.autoNumericLocalList) ? this.settings.createLocalList && i.throwError(`The local list provided does not exists when trying to remove an element. [${this.autoNumericLocalList}] given.`) : this.autoNumericLocalList.delete(e);
  }
  /**
   * Merge the `newSettings` given as parameters into the current element settings.
   *
   * WARNING: Using `Object.assign()` here means the merge is not recursive and only one depth is merged.
   * cf. http://stackoverflow.com/a/39188108/2834898
   * cf. tests on http://codepen.io/AnotherLinuxUser/pen/KaJORq?editors=0011
   *
   * @param {object} newSettings
   * @private
   */
  _mergeSettings(...e) {
    Object.assign(this.settings, ...e);
  }
  /**
   * Return a new object with the current element settings merged with the new settings.
   *
   * @param {object} newSettings
   * @returns {object}
   * @private
   */
  _cloneAndMergeSettings(...e) {
    const t = {};
    return Object.assign(t, this.settings, ...e), t;
  }
  /**
   * Validate the given option object.
   * If the options are valid, this function returns nothing, otherwise if the options are invalid, this function throws an error.
   *
   * This tests if the options are not conflicting and are well formatted.
   * This function is lenient since it only tests the settings properties ; it ignores any other properties the options object could have.
   *
   * @param {*} userOptions
   * @param {Boolean} shouldExtendDefaultOptions If `true`, then this function will extend the `userOptions` passed by the user, with the default options.
   * @param {object|null} originalOptions The user can pass the original options (and not the one that are generated from the default settings and the various usability corrections), in order to add compatibility and conflicts checks.
   * @throws Error This throws if the `userOptions` are not valid
   */
  static validate(e, t = !0, s = null) {
    (i.isUndefinedOrNullOrEmpty(e) || !i.isObject(e)) && i.throwError(`The userOptions are invalid ; it should be a valid object, [${e}] given.`);
    const a = i.isObject(s);
    !a && !i.isNull(s) && i.throwError(`The 'originalOptions' parameter is invalid ; it should either be a valid option object or \`null\`, [${e}] given.`), i.isNull(e) || this._convertOldOptionsToNewOnes(e);
    let n;
    t ? n = Object.assign({}, this.getDefaultConfig(), e) : n = e, !i.isTrueOrFalseString(n.showWarnings) && !i.isBoolean(n.showWarnings) && i.throwError(`The debug option 'showWarnings' is invalid ; it should be either 'true' or 'false', [${n.showWarnings}] given.`);
    const c = /^[0-9]+$/, o = /[0-9]+/, l = /^-?[0-9]+(\.?[0-9]+)?$/, h = /^[0-9]+(\.?[0-9]+)?$/;
    !i.isTrueOrFalseString(n.allowDecimalPadding) && !i.isBoolean(n.allowDecimalPadding) && n.allowDecimalPadding !== r.options.allowDecimalPadding.floats && !(i.isNumber(n.allowDecimalPadding) && n.allowDecimalPadding > 0) && i.throwError(`The decimal padding option 'allowDecimalPadding' is invalid ; it should either be \`false\`, \`true\`, \`'floats'\` or a positive integer superior to 0, [${n.allowDecimalPadding}] given.`), i.isNumber(n.allowDecimalPadding) && n.allowDecimalPadding > n.decimalPlaces && i.warning(`Setting 'allowDecimalPadding' to a number [${n.allowDecimalPadding}] superior to the current 'decimalPlaces' settings [${n.decimalPlaces}] is useless, since the padding will not be shown.`, n.showWarnings), (n.allowDecimalPadding === r.options.allowDecimalPadding.never || n.allowDecimalPadding === "false") && (n.decimalPlaces !== r.options.decimalPlaces.none || n.decimalPlacesShownOnBlur !== r.options.decimalPlacesShownOnBlur.none || n.decimalPlacesShownOnFocus !== r.options.decimalPlacesShownOnFocus.none) && i.warning(`Setting 'allowDecimalPadding' to [${n.allowDecimalPadding}] will override the current 'decimalPlaces*' settings [${n.decimalPlaces}, ${n.decimalPlacesShownOnBlur} and ${n.decimalPlacesShownOnFocus}].`, n.showWarnings), !i.isTrueOrFalseString(n.alwaysAllowDecimalCharacter) && !i.isBoolean(n.alwaysAllowDecimalCharacter) && i.throwError(`The option 'alwaysAllowDecimalCharacter' is invalid ; it should either be \`true\` or \`false\`, [${n.alwaysAllowDecimalCharacter}] given.`), !i.isNull(n.caretPositionOnFocus) && !i.isInArray(n.caretPositionOnFocus, [
      r.options.caretPositionOnFocus.start,
      r.options.caretPositionOnFocus.end,
      r.options.caretPositionOnFocus.decimalLeft,
      r.options.caretPositionOnFocus.decimalRight
    ]) && i.throwError(`The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be \`null\`, 'focus', 'press', 'always' or 'zero', [${n.caretPositionOnFocus}] given.`);
    let d;
    a ? d = s : d = this._correctCaretPositionOnFocusAndSelectOnFocusOptions(e), !i.isNull(d) && d.caretPositionOnFocus !== r.options.caretPositionOnFocus.doNoForceCaretPosition && d.selectOnFocus === r.options.selectOnFocus.select && i.warning(`The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '${d.caretPositionOnFocus}'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'.`, n.showWarnings), i.isInArray(n.digitGroupSeparator, [
      r.options.digitGroupSeparator.comma,
      r.options.digitGroupSeparator.dot,
      r.options.digitGroupSeparator.normalSpace,
      r.options.digitGroupSeparator.thinSpace,
      r.options.digitGroupSeparator.narrowNoBreakSpace,
      r.options.digitGroupSeparator.noBreakSpace,
      r.options.digitGroupSeparator.noSeparator,
      r.options.digitGroupSeparator.apostrophe,
      r.options.digitGroupSeparator.arabicThousandsSeparator,
      r.options.digitGroupSeparator.dotAbove,
      r.options.digitGroupSeparator.privateUseTwo
    ]) || i.throwError(`The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', "'", '', ' ', ' ', ' ', ' ' or empty (''), [${n.digitGroupSeparator}] given.`), !i.isTrueOrFalseString(n.showOnlyNumbersOnFocus) && !i.isBoolean(n.showOnlyNumbersOnFocus) && i.throwError(`The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'true' or 'false', [${n.showOnlyNumbersOnFocus}] given.`), !i.isInArray(n.digitalGroupSpacing, [
      r.options.digitalGroupSpacing.two,
      r.options.digitalGroupSpacing.twoThree,
      r.options.digitalGroupSpacing.twoScaled,
      r.options.digitalGroupSpacing.three,
      r.options.digitalGroupSpacing.four
    ]) && !(n.digitalGroupSpacing >= 2 && n.digitalGroupSpacing <= 4) && i.throwError(`The grouping separator option for thousands 'digitalGroupSpacing' is invalid ; it should be '2', '2t', '2s', '3', or '4', [${n.digitalGroupSpacing}] given.`), i.isInArray(n.decimalCharacter, [
      r.options.decimalCharacter.comma,
      r.options.decimalCharacter.dot,
      r.options.decimalCharacter.middleDot,
      r.options.decimalCharacter.arabicDecimalSeparator,
      r.options.decimalCharacter.decimalSeparatorKeySymbol
    ]) || i.throwError(`The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [${n.decimalCharacter}] given.`), n.decimalCharacter === n.digitGroupSeparator && i.throwError(`autoNumeric will not function properly when the decimal character 'decimalCharacter' [${n.decimalCharacter}] and the thousand separator 'digitGroupSeparator' [${n.digitGroupSeparator}] are the same character.`), !i.isNull(n.decimalCharacterAlternative) && !i.isString(n.decimalCharacterAlternative) && i.throwError(`The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [${n.decimalCharacterAlternative}] given.`), n.currencySymbol !== "" && !i.isString(n.currencySymbol) && i.throwError(`The currency symbol option 'currencySymbol' is invalid ; it should be a string, [${n.currencySymbol}] given.`), i.isInArray(n.currencySymbolPlacement, [
      r.options.currencySymbolPlacement.prefix,
      r.options.currencySymbolPlacement.suffix
    ]) || i.throwError(`The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [${n.currencySymbolPlacement}] given.`), i.isInArray(n.negativePositiveSignPlacement, [
      r.options.negativePositiveSignPlacement.prefix,
      r.options.negativePositiveSignPlacement.suffix,
      r.options.negativePositiveSignPlacement.left,
      r.options.negativePositiveSignPlacement.right,
      r.options.negativePositiveSignPlacement.none
    ]) || i.throwError(`The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [${n.negativePositiveSignPlacement}] given.`), !i.isTrueOrFalseString(n.showPositiveSign) && !i.isBoolean(n.showPositiveSign) && i.throwError(`The show positive sign option 'showPositiveSign' is invalid ; it should be either 'true' or 'false', [${n.showPositiveSign}] given.`), (!i.isString(n.suffixText) || n.suffixText !== "" && (i.isNegative(n.suffixText, n.negativeSignCharacter) || o.test(n.suffixText))) && i.throwError(`The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '${n.negativeSignCharacter}' nor any numerical characters, [${n.suffixText}] given.`), (!i.isString(n.negativeSignCharacter) || n.negativeSignCharacter.length !== 1 || i.isUndefinedOrNullOrEmpty(n.negativeSignCharacter) || o.test(n.negativeSignCharacter)) && i.throwError(`The negative sign character option 'negativeSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [${n.negativeSignCharacter}] given.`), (!i.isString(n.positiveSignCharacter) || n.positiveSignCharacter.length !== 1 || i.isUndefinedOrNullOrEmpty(n.positiveSignCharacter) || o.test(n.positiveSignCharacter)) && i.throwError(`The positive sign character option 'positiveSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [${n.positiveSignCharacter}] given.
If you want to show the positive sign character, you need to set the \`showPositiveSign\` option to \`true\`.`), n.negativeSignCharacter === n.positiveSignCharacter && i.throwError(`The positive 'positiveSignCharacter' and negative 'negativeSignCharacter' sign characters cannot be identical ; [${n.negativeSignCharacter}] given.`), !i.isTrueOrFalseString(n.negativePositiveSignBehavior) && !i.isBoolean(n.negativePositiveSignBehavior) && i.throwError(`The option 'negativePositiveSignBehavior' is invalid ; it should be either 'true' or 'false', [${n.negativePositiveSignBehavior}] given.`);
    const [g, p] = i.isNull(n.negativeBracketsTypeOnBlur) ? ["", ""] : n.negativeBracketsTypeOnBlur.split(",");
    (i.contains(n.digitGroupSeparator, n.negativeSignCharacter) || i.contains(n.decimalCharacter, n.negativeSignCharacter) || i.contains(n.decimalCharacterAlternative, n.negativeSignCharacter) || i.contains(g, n.negativeSignCharacter) || i.contains(p, n.negativeSignCharacter) || i.contains(n.suffixText, n.negativeSignCharacter)) && i.throwError(`The negative sign character option 'negativeSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [${n.negativeSignCharacter}] given.`), (i.contains(n.digitGroupSeparator, n.positiveSignCharacter) || i.contains(n.decimalCharacter, n.positiveSignCharacter) || i.contains(n.decimalCharacterAlternative, n.positiveSignCharacter) || i.contains(g, n.positiveSignCharacter) || i.contains(p, n.positiveSignCharacter) || i.contains(n.suffixText, n.positiveSignCharacter)) && i.throwError(`The positive sign character option 'positiveSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [${n.positiveSignCharacter}] given.`), !i.isNull(n.overrideMinMaxLimits) && !i.isInArray(n.overrideMinMaxLimits, [
      r.options.overrideMinMaxLimits.ceiling,
      r.options.overrideMinMaxLimits.floor,
      r.options.overrideMinMaxLimits.ignore,
      r.options.overrideMinMaxLimits.invalid
    ]) && i.throwError(`The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor', 'ignore' or 'invalid', [${n.overrideMinMaxLimits}] given.`), n.overrideMinMaxLimits !== r.options.overrideMinMaxLimits.invalid && n.overrideMinMaxLimits !== r.options.overrideMinMaxLimits.ignore && (n.minimumValue > 0 || n.maximumValue < 0) && i.warning("You've set a `minimumValue` or a `maximumValue` excluding the value `0`. AutoNumeric will force the users to always have a valid value in the input, hence preventing them to clear the field. If you want to allow for temporary invalid values (i.e. out-of-range), you should use the 'invalid' option for the 'overrideMinMaxLimits' setting."), (!i.isString(n.maximumValue) || !l.test(n.maximumValue)) && i.throwError(`The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [${n.maximumValue}] given.`), (!i.isString(n.minimumValue) || !l.test(n.minimumValue)) && i.throwError(`The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [${n.minimumValue}] given.`), parseFloat(n.minimumValue) > parseFloat(n.maximumValue) && i.throwError(`The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [${n.minimumValue}] should be smaller than 'maximumValue' [${n.maximumValue}].`), i.isInt(n.decimalPlaces) && n.decimalPlaces >= 0 || // If integer option
    i.isString(n.decimalPlaces) && c.test(n.decimalPlaces) || i.throwError(`The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [${n.decimalPlaces}] given.`), i.isNull(n.decimalPlacesRawValue) || i.isInt(n.decimalPlacesRawValue) && n.decimalPlacesRawValue >= 0 || // If integer option
    i.isString(n.decimalPlacesRawValue) && c.test(n.decimalPlacesRawValue) || i.throwError(`The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or \`null\`, [${n.decimalPlacesRawValue}] given.`), this._validateDecimalPlacesRawValue(n), !i.isNull(n.decimalPlacesShownOnFocus) && !c.test(String(n.decimalPlacesShownOnFocus)) && i.throwError(`The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or \`null\`, [${n.decimalPlacesShownOnFocus}] given.`), !i.isNull(n.decimalPlacesShownOnFocus) && Number(n.decimalPlaces) > Number(n.decimalPlacesShownOnFocus) && i.warning(`The extended decimal places 'decimalPlacesShownOnFocus' [${n.decimalPlacesShownOnFocus}] should be greater than the 'decimalPlaces' [${n.decimalPlaces}] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?`, n.showWarnings), (!i.isNull(n.divisorWhenUnfocused) && !h.test(n.divisorWhenUnfocused) || n.divisorWhenUnfocused === 0 || n.divisorWhenUnfocused === "0" || n.divisorWhenUnfocused === 1 || n.divisorWhenUnfocused === "1") && i.throwError(`The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [${n.divisorWhenUnfocused}] given.`), !i.isNull(n.decimalPlacesShownOnBlur) && !c.test(n.decimalPlacesShownOnBlur) && i.throwError(`The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or \`null\`, [${n.decimalPlacesShownOnBlur}] given.`), !i.isNull(n.symbolWhenUnfocused) && !i.isString(n.symbolWhenUnfocused) && i.throwError(`The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [${n.symbolWhenUnfocused}] given.`), !i.isTrueOrFalseString(n.saveValueToSessionStorage) && !i.isBoolean(n.saveValueToSessionStorage) && i.throwError(`The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'true' or 'false', [${n.saveValueToSessionStorage}] given.`), i.isInArray(n.onInvalidPaste, [
      r.options.onInvalidPaste.error,
      r.options.onInvalidPaste.ignore,
      r.options.onInvalidPaste.clamp,
      r.options.onInvalidPaste.truncate,
      r.options.onInvalidPaste.replace
    ]) || i.throwError(`The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [${n.onInvalidPaste}] given.`), i.isInArray(n.roundingMethod, [
      r.options.roundingMethod.halfUpSymmetric,
      r.options.roundingMethod.halfUpAsymmetric,
      r.options.roundingMethod.halfDownSymmetric,
      r.options.roundingMethod.halfDownAsymmetric,
      r.options.roundingMethod.halfEvenBankersRounding,
      r.options.roundingMethod.upRoundAwayFromZero,
      r.options.roundingMethod.downRoundTowardZero,
      r.options.roundingMethod.toCeilingTowardPositiveInfinity,
      r.options.roundingMethod.toFloorTowardNegativeInfinity,
      r.options.roundingMethod.toNearest05,
      r.options.roundingMethod.toNearest05Alt,
      r.options.roundingMethod.upToNext05,
      r.options.roundingMethod.downToNext05
    ]) || i.throwError(`The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [${n.roundingMethod}] given.`), !i.isNull(n.negativeBracketsTypeOnBlur) && !i.isInArray(n.negativeBracketsTypeOnBlur, [
      r.options.negativeBracketsTypeOnBlur.parentheses,
      r.options.negativeBracketsTypeOnBlur.brackets,
      r.options.negativeBracketsTypeOnBlur.chevrons,
      r.options.negativeBracketsTypeOnBlur.curlyBraces,
      r.options.negativeBracketsTypeOnBlur.angleBrackets,
      r.options.negativeBracketsTypeOnBlur.japaneseQuotationMarks,
      r.options.negativeBracketsTypeOnBlur.halfBrackets,
      r.options.negativeBracketsTypeOnBlur.whiteSquareBrackets,
      r.options.negativeBracketsTypeOnBlur.quotationMarks,
      r.options.negativeBracketsTypeOnBlur.guillemets
    ]) && i.throwError(`The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [${n.negativeBracketsTypeOnBlur}] given.`), (!(i.isString(n.emptyInputBehavior) || i.isNumber(n.emptyInputBehavior)) || !(i.isInArray(n.emptyInputBehavior, [
      r.options.emptyInputBehavior.focus,
      r.options.emptyInputBehavior.press,
      r.options.emptyInputBehavior.always,
      r.options.emptyInputBehavior.min,
      r.options.emptyInputBehavior.max,
      r.options.emptyInputBehavior.zero,
      r.options.emptyInputBehavior.null
    ]) || l.test(n.emptyInputBehavior))) && i.throwError(`The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'min', 'max', 'zero', 'null', a number, or a string that represents a number, [${n.emptyInputBehavior}] given.`), n.emptyInputBehavior === r.options.emptyInputBehavior.zero && (n.minimumValue > 0 || n.maximumValue < 0) && i.throwError(`The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [${n.minimumValue}, ${n.maximumValue}].`), l.test(String(n.emptyInputBehavior)) && (this._isWithinRangeWithOverrideOption(n.emptyInputBehavior, n) || i.throwError(`The 'emptyInputBehavior' option is set to a number or a string that represents a number, but its value [${n.emptyInputBehavior}] is outside of the range defined by the 'minimumValue' and 'maximumValue' options [${n.minimumValue}, ${n.maximumValue}].`)), !i.isTrueOrFalseString(n.eventBubbles) && !i.isBoolean(n.eventBubbles) && i.throwError(`The event bubbles option 'eventBubbles' is invalid ; it should be either 'true' or 'false', [${n.eventBubbles}] given.`), !i.isTrueOrFalseString(n.eventIsCancelable) && !i.isBoolean(n.eventIsCancelable) && i.throwError(`The event is cancelable option 'eventIsCancelable' is invalid ; it should be either 'true' or 'false', [${n.eventIsCancelable}] given.`), (i.isBoolean(n.invalidClass) || !/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(n.invalidClass)) && i.throwError(`The name of the 'invalidClass' option is not a valid CSS class name ; it should not be empty, and should follow the '^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$' regex, [${n.invalidClass}] given.`), i.isInArray(n.leadingZero, [
      r.options.leadingZero.allow,
      r.options.leadingZero.deny,
      r.options.leadingZero.keep
    ]) || i.throwError(`The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [${n.leadingZero}] given.`), !i.isTrueOrFalseString(n.formatOnPageLoad) && !i.isBoolean(n.formatOnPageLoad) && i.throwError(`The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'true' or 'false', [${n.formatOnPageLoad}] given.`), !i.isTrueOrFalseString(n.formulaMode) && !i.isBoolean(n.formulaMode) && i.throwError(`The formula mode option 'formulaMode' is invalid ; it should be either 'true' or 'false', [${n.formulaMode}] given.`), (!c.test(n.historySize) || n.historySize === 0) && i.throwError(`The history size option 'historySize' is invalid ; it should be a positive integer, [${n.historySize}] given.`), !i.isTrueOrFalseString(n.selectNumberOnly) && !i.isBoolean(n.selectNumberOnly) && i.throwError(`The select number only option 'selectNumberOnly' is invalid ; it should be either 'true' or 'false', [${n.selectNumberOnly}] given.`), !i.isTrueOrFalseString(n.selectOnFocus) && !i.isBoolean(n.selectOnFocus) && i.throwError(`The select on focus option 'selectOnFocus' is invalid ; it should be either 'true' or 'false', [${n.selectOnFocus}] given.`), !i.isNull(n.defaultValueOverride) && n.defaultValueOverride !== "" && !l.test(n.defaultValueOverride) && i.throwError(`The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [${n.defaultValueOverride}] given.`), !i.isTrueOrFalseString(n.unformatOnSubmit) && !i.isBoolean(n.unformatOnSubmit) && i.throwError(`The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'true' or 'false', [${n.unformatOnSubmit}] given.`), !i.isNull(n.valuesToStrings) && !i.isObject(n.valuesToStrings) && i.throwError(`The option 'valuesToStrings' is invalid ; it should be an object, ideally with 'key -> value' entries, [${n.valuesToStrings}] given.`), !i.isNull(n.outputFormat) && !i.isInArray(n.outputFormat, [
      r.options.outputFormat.string,
      r.options.outputFormat.number,
      r.options.outputFormat.dot,
      r.options.outputFormat.negativeDot,
      r.options.outputFormat.comma,
      r.options.outputFormat.negativeComma,
      r.options.outputFormat.dotNegative,
      r.options.outputFormat.commaNegative
    ]) && i.throwError(`The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [${n.outputFormat}] given.`), !i.isTrueOrFalseString(n.isCancellable) && !i.isBoolean(n.isCancellable) && i.throwError(`The cancellable behavior option 'isCancellable' is invalid ; it should be either 'true' or 'false', [${n.isCancellable}] given.`), !i.isTrueOrFalseString(n.modifyValueOnUpDownArrow) && !i.isBoolean(n.modifyValueOnUpDownArrow) && i.throwError(`The increment/decrement on up and down arrow keys 'modifyValueOnUpDownArrow' is invalid ; it should be either 'true' or 'false', [${n.modifyValueOnUpDownArrow}] given.`), !i.isTrueOrFalseString(n.modifyValueOnWheel) && !i.isBoolean(n.modifyValueOnWheel) && i.throwError(`The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'true' or 'false', [${n.modifyValueOnWheel}] given.`), !i.isTrueOrFalseString(n.watchExternalChanges) && !i.isBoolean(n.watchExternalChanges) && i.throwError(`The option 'watchExternalChanges' is invalid ; it should be either 'true' or 'false', [${n.watchExternalChanges}] given.`), i.isInArray(n.wheelOn, [
      r.options.wheelOn.focus,
      r.options.wheelOn.hover
    ]) || i.throwError(`The wheel behavior option 'wheelOn' is invalid ; it should either be 'focus' or 'hover', [${n.wheelOn}] given.`), (!(i.isString(n.upDownStep) || i.isNumber(n.upDownStep)) || n.upDownStep !== "progressive" && !h.test(n.upDownStep) || Number(n.upDownStep) === 0) && i.throwError(`The up/down arrow step value option 'upDownStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [${n.upDownStep}] given.`), (!(i.isString(n.wheelStep) || i.isNumber(n.wheelStep)) || n.wheelStep !== "progressive" && !h.test(n.wheelStep) || Number(n.wheelStep) === 0) && i.throwError(`The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [${n.wheelStep}] given.`), i.isInArray(n.serializeSpaces, [
      r.options.serializeSpaces.plus,
      r.options.serializeSpaces.percent
    ]) || i.throwError(`The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [${n.serializeSpaces}] given.`), !i.isTrueOrFalseString(n.noEventListeners) && !i.isBoolean(n.noEventListeners) && i.throwError(`The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'true' or 'false', [${n.noEventListeners}] given.`), !i.isNull(n.styleRules) && !(i.isObject(n.styleRules) && (Object.prototype.hasOwnProperty.call(n.styleRules, "positive") || Object.prototype.hasOwnProperty.call(n.styleRules, "negative") || Object.prototype.hasOwnProperty.call(n.styleRules, "ranges") || Object.prototype.hasOwnProperty.call(n.styleRules, "userDefined"))) && i.throwError(`The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [${n.styleRules}] given.`), !i.isNull(n.styleRules) && Object.prototype.hasOwnProperty.call(n.styleRules, "userDefined") && !i.isNull(n.styleRules.userDefined) && n.styleRules.userDefined.forEach((y) => {
      Object.prototype.hasOwnProperty.call(y, "callback") && !i.isFunction(y.callback) && i.throwError(`The callback defined in the \`userDefined\` attribute is not a function, ${typeof y.callback} given.`);
    }), (!i.isNull(n.rawValueDivisor) && !h.test(n.rawValueDivisor) || n.rawValueDivisor === 0 || n.rawValueDivisor === "0" || n.rawValueDivisor === 1 || n.rawValueDivisor === "1") && i.throwError(`The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [${n.rawValueDivisor}] given.`), !i.isTrueOrFalseString(n.readOnly) && !i.isBoolean(n.readOnly) && i.throwError(`The option 'readOnly' is invalid ; it should be either 'true' or 'false', [${n.readOnly}] given.`), !i.isTrueOrFalseString(n.unformatOnHover) && !i.isBoolean(n.unformatOnHover) && i.throwError(`The option 'unformatOnHover' is invalid ; it should be either 'true' or 'false', [${n.unformatOnHover}] given.`), !i.isTrueOrFalseString(n.failOnUnknownOption) && !i.isBoolean(n.failOnUnknownOption) && i.throwError(`The debug option 'failOnUnknownOption' is invalid ; it should be either 'true' or 'false', [${n.failOnUnknownOption}] given.`), !i.isTrueOrFalseString(n.createLocalList) && !i.isBoolean(n.createLocalList) && i.throwError(`The debug option 'createLocalList' is invalid ; it should be either 'true' or 'false', [${n.createLocalList}] given.`);
  }
  /**
   * Check the `decimalPlaces*` options and output the relevant warnings if some of those will get overwritten during the initialization or settings update.
   *
   * @param {object} options
   * @private
   */
  static _validateDecimalPlacesRawValue(e) {
    i.isNull(e.decimalPlacesRawValue) || (e.decimalPlacesRawValue < e.decimalPlaces && i.warning(`The number of decimal places to store in the raw value [${e.decimalPlacesRawValue}] is lower than the ones to display [${e.decimalPlaces}]. This will likely confuse your users.
To solve that, you'd need to either set \`decimalPlacesRawValue\` to \`null\`, or set a number of decimal places for the raw value equal of bigger than \`decimalPlaces\`.`, e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnFocus && i.warning(`The number of decimal places to store in the raw value [${e.decimalPlacesRawValue}] is lower than the ones shown on focus [${e.decimalPlacesShownOnFocus}]. This will likely confuse your users.
To solve that, you'd need to either set \`decimalPlacesRawValue\` to \`null\`, or set a number of decimal places for the raw value equal of bigger than \`decimalPlacesShownOnFocus\`.`, e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnBlur && i.warning(`The number of decimal places to store in the raw value [${e.decimalPlacesRawValue}] is lower than the ones shown when unfocused [${e.decimalPlacesShownOnBlur}]. This will likely confuse your users.
To solve that, you'd need to either set \`decimalPlacesRawValue\` to \`null\`, or set a number of decimal places for the raw value equal of bigger than \`decimalPlacesShownOnBlur\`.`, e.showWarnings));
  }
  /**
   * Return `true` if the settings/options are valid, `false` otherwise.
   *
   * @param {object} options
   * @returns {boolean}
   */
  static areSettingsValid(e) {
    let t = !0;
    try {
      this.validate(e, !0);
    } catch {
      t = !1;
    }
    return t;
  }
  /**
   * Return the default autoNumeric settings.
   *
   * @returns {object}
   */
  static getDefaultConfig() {
    return r.defaultSettings;
  }
  /**
   * Return all the predefined language options in one object.
   * You can also access a specific language object directly by using `AutoNumeric.getPredefinedOptions().French` for instance.
   *
   * @returns {object}
   */
  static getPredefinedOptions() {
    return r.predefinedOptions;
  }
  /**
   * Analyse the given array `options` and return a single 'merged' option objet.
   * `options` can be `null`, or an array of an option objects, or an array containing another array of option objects / strings (pre-defined option names)
   *
   * @param {null|Array<object|string|Array<string|object>>} options
   * @returns {null|object}
   * @private
   */
  static _generateOptionsObjectFromOptionsArray(e) {
    let t;
    return i.isUndefinedOrNullOrEmpty(e) || e.length === 0 ? t = null : (t = {}, e.length === 1 && Array.isArray(e[0]) ? e[0].forEach((s) => {
      Object.assign(t, this._getOptionObject(s));
    }) : e.length >= 1 && e.forEach((s) => {
      Object.assign(t, this._getOptionObject(s));
    })), t;
  }
  /**
   * Format the given number (or numeric string) with the given options. This returns the formatted value as a string.
   * This can also format the given DOM element value with the given options and returns the formatted value as a string.
   * Note : This function does *not* update that element value with the newly formatted value.
   * This basically allows to get the formatted value without first having to initialize an AutoNumeric object.
   *
   * @param {number|string|HTMLElement|HTMLInputElement} numericStringOrDomElement A number, or a string that represent a javascript number, or a DOM element
   * @param {object|null} options Multiple objects can be passed, the latter overwriting the settings from the former ones
   * @returns {string|null}
   */
  static format(e, ...t) {
    if (i.isUndefined(e) || e === null)
      return null;
    let s;
    i.isElement(e) ? s = i.getElementValue(e) : s = e, !i.isString(s) && !i.isNumber(s) && i.throwError(`The value "${s}" being "set" is not numeric and therefore cannot be used appropriately.`);
    const a = this._generateOptionsObjectFromOptionsArray(t), n = Object.assign({}, this.getDefaultConfig(), a);
    n.isNegativeSignAllowed = s < 0, n.isPositiveSignAllowed = s >= 0, this._setBrackets(n);
    const c = {};
    this._cachesUsualRegularExpressions(n, c);
    let o = this._toNumericValue(s, n);
    return isNaN(Number(o)) && i.throwError(`The value [${o}] that you are trying to format is not a recognized number.`), this._isWithinRangeWithOverrideOption(o, n) || (i.triggerEvent(r.events.formatted, document, {
      oldValue: null,
      newValue: null,
      oldRawValue: null,
      newRawValue: null,
      isPristine: null,
      error: "Range test failed",
      aNElement: null
    }, !0, !0), i.throwError(`The value [${o}] being set falls outside of the minimumValue [${n.minimumValue}] and maximumValue [${n.maximumValue}] range set for this element`)), n.valuesToStrings && this._checkValuesToStringsSettings(s, n) ? n.valuesToStrings[s] : (this._correctNegativePositiveSignPlacementOption(n), this._calculateDecimalPlacesOnInit(n), !i.isUndefinedOrNullOrEmpty(n.rawValueDivisor) && n.rawValueDivisor !== 0 && // Only divide if the `rawValueDivisor` option is set
    o !== "" && o !== null && (o *= n.rawValueDivisor), o = this._roundFormattedValueShownOnFocus(o, n), o = this._modifyNegativeSignAndDecimalCharacterForFormattedValue(o, n), o = this._addGroupSeparators(o, n, !1, o), o);
  }
  /**
   * Format the given DOM element value, and set the resulting value back as the element value.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @param {object} options
   * @returns {string|null}
   */
  static formatAndSet(e, t = null) {
    const s = this.format(e, t);
    return i.setElementValue(e, s), s;
  }
  /**
   * Unformat the given formatted string with the given options. This returns a numeric string.
   * It can also unformat the given DOM element value with the given options and returns the unformatted numeric string.
   * Note: This does *not* update that element value.
   * This basically allows to get the unformatted value without first having to initialize an AutoNumeric object.
   *
   * @param {string|number|HTMLElement|HTMLInputElement} numericStringOrDomElement A number, or a string that represent a javascript number, or a DOM element
   * @param {object|null} options Multiple objects can be passed, the latter overwriting the settings from the former ones
   * @returns {string|number|NaN}
   */
  static unformat(e, ...t) {
    if (i.isNumberStrict(e))
      return e;
    let s;
    if (i.isElement(e) ? s = i.getElementValue(e) : s = e, s === "")
      return "";
    if (i.isUndefined(s) || s === null)
      return null;
    (i.isArray(s) || i.isObject(s)) && i.throwError(`A number or a string representing a number is needed to be able to unformat it, [${s}] given.`);
    const a = this._generateOptionsObjectFromOptionsArray(t), n = Object.assign({}, this.getDefaultConfig(), a);
    return n.isNegativeSignAllowed = !1, n.isPositiveSignAllowed = !0, s = s.toString(), n.valuesToStrings && this._checkStringsToValuesSettings(s, n) ? i.objectKeyLookup(n.valuesToStrings, s) : (i.isNegative(s, n.negativeSignCharacter) ? (n.isNegativeSignAllowed = !0, n.isPositiveSignAllowed = !1) : i.isNull(n.negativeBracketsTypeOnBlur) || ([n.firstBracket, n.lastBracket] = n.negativeBracketsTypeOnBlur.split(","), s.charAt(0) === n.firstBracket && s.charAt(s.length - 1) === n.lastBracket && (n.isNegativeSignAllowed = !0, n.isPositiveSignAllowed = !1, s = this._removeBrackets(s, n, !1))), s = this._convertToNumericString(s, n), i.isNumber(Number(s)) && (s = i.scientificToDecimal(s)), new RegExp("[^+-0123456789.]", "gi").test(s) ? NaN : (this._correctNegativePositiveSignPlacementOption(n), n.decimalPlacesRawValue ? n.originalDecimalPlacesRawValue = n.decimalPlacesRawValue : n.originalDecimalPlacesRawValue = n.decimalPlaces, this._calculateDecimalPlacesOnInit(n), !i.isUndefinedOrNullOrEmpty(n.rawValueDivisor) && n.rawValueDivisor !== 0 && // Only divide if the `rawValueDivisor` option is set
    s !== "" && s !== null && (s /= n.rawValueDivisor), s = this._roundRawValue(s, n), s = s.replace(n.decimalCharacter, "."), s = this._toLocale(s, n.outputFormat, n), s));
  }
  /**
   * Unformat the given DOM element value, and set the resulting value back as the element value.
   *
   * @param {HTMLElement|HTMLInputElement} domElement
   * @param {object} options
   * @returns {*}
   */
  static unformatAndSet(e, t = null) {
    const s = this.unformat(e, t);
    return i.setElementValue(e, s), s;
  }
  /**
   * Unformat and localize the given formatted string with the given options. This returns a numeric string.
   * It can also unformat and localize the given DOM element value with the given options and returns the unformatted numeric string.
   * Note: This does *not* update that element value.
   * This basically allows to get the localized value without first having to initialize an AutoNumeric object.
   *
   * @param {string|number|HTMLElement|HTMLInputElement} numericStringOrDomElement
   * @param {object} settings
   * @returns {*}
   */
  static localize(e, t = null) {
    let s;
    if (i.isElement(e) ? s = i.getElementValue(e) : s = e, s === "")
      return "";
    i.isNull(t) && (t = r.defaultSettings), s = this.unformat(s, t), Number(s) === 0 && t.leadingZero !== r.options.leadingZero.keep && (s = "0");
    let a;
    return i.isNull(t) ? a = t.outputFormat : a = r.defaultSettings.outputFormat, this._toLocale(s, a, t);
  }
  static localizeAndSet(e, t = null) {
    const s = this.localize(e, t);
    return i.setElementValue(e, s), s;
  }
  /**
   * Return `true` if the given DOM element has an AutoNumeric object that manages it.
   * This function also accepts a selector string.
   *
   * @param {HTMLElement|string} domElementOrSelector Accepts either directly a DOM element to test, or a string selector (that will return one and only one element, if any)
   * @returns {boolean}
   */
  static isManagedByAutoNumeric(e) {
    return this._isInGlobalList(i.domElement(e));
  }
  /**
   * Return the AutoNumeric object that manages the given DOM element.
   * This function also accepts a selector string.
   *
   * @param {HTMLElement|string} domElementOrSelector Accepts either directly a DOM element to test, or a string selector (that will return one and only one element, if any)
   * @returns {null|AutoNumeric}
   */
  static getAutoNumericElement(e) {
    const t = i.domElement(e);
    return this.isManagedByAutoNumeric(t) ? this._getFromGlobalList(t) : null;
  }
  /**
   * Set the given element value, and format it immediately.
   * Return `null` if no AutoNumeric object is found, else, return the AutoNumeric object.
   *
   * @param {HTMLElement|string} domElementOrSelector Either a DOM element reference, or a selector string can be used
   * @param {number|string|null} newValue The value must be a Number, a numeric string or `null` (if `emptyInputBehavior` is set to `'null'`)
   * @param {object} options A settings object that will override the current settings. Note: the update is done only if the `newValue` is defined.
   * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history table
   * @returns {AutoNumeric|null}
   */
  static set(e, t, s = null, a = !0) {
    const n = i.domElement(e);
    if (!this.isManagedByAutoNumeric(n)) {
      let c;
      return !i.isNull(s) && Object.prototype.hasOwnProperty.call(s, "showWarnings") ? c = s.showWarnings : c = !0, i.warning("Impossible to find an AutoNumeric object for the given DOM element or selector.", c), null;
    }
    return this.getAutoNumericElement(n).set(t, s, a);
  }
  /**
   * Return the unformatted value as a string from the given DOM element or query selector.
   * This can also return `null` if `rawValue` is null.
   *
   * @param {HTMLElement|string} domElementOrSelector
   * @param {function|null} callback
   * @returns {string|null}
   */
  static getNumericString(e, t = null) {
    return this._get(e, "getNumericString", t);
  }
  /**
   * Return the current formatted value of the AutoNumeric element as a string, from the given DOM element or query selector.
   *
   * @param {HTMLElement|string} domElementOrSelector
   * @param {function|null} callback
   * @returns {string}
   */
  static getFormatted(e, t = null) {
    return this._get(e, "getFormatted", t);
  }
  /**
   * Return the element unformatted value as a real Javascript number, from the given DOM element or query selector.
   * Warning: This can lead to precision problems with big numbers that should be stored as strings.
   *
   * @param {HTMLElement|string} domElementOrSelector
   * @param {function|null} callback
   * @returns {number|null}
   */
  static getNumber(e, t = null) {
    return this._get(e, "getNumber", t);
  }
  /**
   * DRY the code between the static `get*` functions
   *
   * @param {HTMLElement|string} domElementOrSelector
   * @param {string} getFunction The name of the non-static `get*` function as a string
   * @param {function|null} callback
   * @returns {*}
   * @private
   */
  static _get(e, t, s = null) {
    const a = i.domElement(e);
    return this.isManagedByAutoNumeric(a) || i.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(a)[t](s);
  }
  /**
   * Returns the unformatted value following the `outputFormat` setting, from the given DOM element or query selector.
   * See the non-static `getLocalized()` method documentation for more details.
   *
   * @param {HTMLElement|string} domElementOrSelector
   * @param {null|string|function} forcedOutputFormat
   * @param {function|null} callback
   * @returns {*}
   */
  static getLocalized(e, t = null, s = null) {
    const a = i.domElement(e);
    return this.isManagedByAutoNumeric(a) || i.throwError("Impossible to find an AutoNumeric object for the given DOM element or selector."), this.getAutoNumericElement(a).getLocalized(t, s);
  }
  // Pre-defined options can be called to update the current default options with their specificities
  //XXX A better way would be to not initialize first, but that's not possible since `new` is called first and we do not pass the language options (i.e. `French`) to the constructor
  /**
   * Update the AutoNumeric object with the predefined options, and possibly some option overrides.
   *
   * @param {object} predefinedOption
   * @param {object} optionOverride
   * @private
   * @returns {AutoNumeric}
   */
  _updatePredefinedOptions(e, t = null) {
    return i.isNull(t) ? this.update(e) : (this._mergeSettings(e, t), this.update(this.settings)), this;
  }
  /**
   * Update the settings to use the French pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  french(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().French, e), this;
  }
  /**
   * Update the settings to use the North American pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  northAmerican(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().NorthAmerican, e), this;
  }
  /**
   * Update the settings to use the British pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  british(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().British, e), this;
  }
  /**
   * Update the settings to use the Swiss pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  swiss(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().Swiss, e), this;
  }
  /**
   * Update the settings to use the Japanese pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  japanese(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().Japanese, e), this;
  }
  /**
   * Update the settings to use the Spanish pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  spanish(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().Spanish, e), this;
  }
  /**
   * Update the settings to use the Chinese pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  chinese(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().Chinese, e), this;
  }
  /**
   * Update the settings to use the Brazilian pre-defined language options.
   * Those pre-defined options can be overridden by passing an option object as a parameter.
   *
   * @param {object} optionOverride
   * @returns {AutoNumeric}
   */
  brazilian(e = null) {
    return this._updatePredefinedOptions(r.getPredefinedOptions().Brazilian, e), this;
  }
  // Internal private functions
  /**
   * Run any callbacks found in the settings object in order to set the settings value back.
   * Any parameter can have a callback defined.
   * The callback takes the current AutoNumeric element as the first argument, and the key name as the second.
   * @example callback(this, 'currencySymbol')
   */
  _runCallbacksFoundInTheSettingsObject() {
    for (const e in this.settings)
      if (Object.prototype.hasOwnProperty.call(this.settings, e)) {
        const t = this.settings[e];
        if (typeof t == "function")
          this.settings[e] = t(this, e);
        else {
          let s = "";
          e in this.domElement.dataset && (s = this.domElement.dataset[e]), s = i.camelize(s), typeof this.settings[s] == "function" && (this.settings[e] = s(this, e));
        }
      }
  }
  /**
   * Keep track if the settings configuration leads to a trailing negative sign (only when the raw value is negative), so we do not have to test the settings values every time we need to know that.
   * `isTrailingNegative` is set to `true` if the settings result in a trailing negative character, `false` otherwise.
   * Note: This returns `true` even if the raw value is positive.
   * @private
   */
  _setTrailingNegativeSignInfo() {
    this.isTrailingNegative = this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.suffix || this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix && (this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.left || this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.right);
  }
  /**
   * Strip all the unwanted non-number characters.
   * However, it does not reorder the localized negative sign.
   *
   * @param {string} s
   * @param {object} settings
   * @param {boolean} stripZeros If set to `false`, then the leading zero(s) are not stripped, otherwise if set to `true`, the `leadingZero` option is followed
   * @param {boolean} isFocused If the element is focused, then this is `true`
   * @returns {string}
   * @private
   */
  static _stripAllNonNumberCharacters(e, t, s, a) {
    return this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, s, a).replace(t.decimalCharacter, ".");
  }
  /**
   * Strip all unwanted non-number characters except the custom decimal character.
   *
   * It converts the custom negative sign and removes the positive sign (custom or not).
   * This keeps :
   * - the numbers,
   * - the normal negative sign '-' if any,
   * - and the *custom* decimal character.
   *
   * @param {string} s
   * @param {object} settings
   * @param {boolean} stripZeros If set to `false`, then the leading zero(s) are not stripped, otherwise if set to `true`, the `leadingZero` option is followed
   * @param {boolean} isFocused If the element is focused, then this is `true`
   * @returns {string|*}
   */
  static _stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, s, a) {
    e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t), e = e.replace(t.allowedAutoStrip, "");
    const n = e.match(t.numRegAutoStrip);
    if (e = n ? [n[1], n[2], n[3]].join("") : "", t.leadingZero === r.options.leadingZero.allow || t.leadingZero === r.options.leadingZero.keep) {
      let c = "";
      const [o, l] = e.split(t.decimalCharacter);
      let h = o;
      i.contains(h, t.negativeSignCharacter) && (c = t.negativeSignCharacter, h = h.replace(t.negativeSignCharacter, "")), c === "" && h.length > t.mIntPos && h.charAt(0) === "0" && (h = h.slice(1)), c !== "" && h.length > t.mIntNeg && h.charAt(0) === "0" && (h = h.slice(1)), e = `${c}${h}${i.isUndefined(l) ? "" : t.decimalCharacter + l}`;
    }
    return (s && t.leadingZero === r.options.leadingZero.deny || !a && t.leadingZero === r.options.leadingZero.allow) && (e = e.replace(t.stripReg, "$1$2")), e;
  }
  /**
   * Sets or removes brackets on negative values, depending on the focus state, which is passed as `isFocused`.
   * The focus state is 'stored' in that object property.
   *
   * @param {string} value
   * @param {object} settings
   * @param {boolean} isFocused
   * @returns {*}
   */
  static _toggleNegativeBracket(e, t, s) {
    let a;
    return s ? a = this._removeBrackets(e, t) : a = this._addBrackets(e, t), a;
  }
  /**
   * Add the bracket types specified in the `settings` object, to the given string `value`.
   *
   * @param {string} value
   * @param {object} settings
   * @returns {string}
   * @private
   */
  static _addBrackets(e, t) {
    return i.isNull(t.negativeBracketsTypeOnBlur) ? e : `${t.firstBracket}${e.replace(t.negativeSignCharacter, "")}${t.lastBracket}`;
  }
  /**
   * Remove the bracket types specified in the `settings` object, from the given string `value`.
   *
   * @param {string} value
   * @param {object} settings
   * @param {boolean} rearrangeSignsAndValueOrder If set to `true`, then only the brackets are remove and a negative sign is added, without reordering the negative sign, currency symbol and value according to the settings.
   * @returns {string}
   * @private
   */
  static _removeBrackets(e, t, s = !0) {
    let a;
    return !i.isNull(t.negativeBracketsTypeOnBlur) && e.charAt(0) === t.firstBracket ? (a = e.replace(t.firstBracket, ""), a = a.replace(t.lastBracket, ""), s ? (a = a.replace(t.currencySymbol, ""), a = this._mergeCurrencySignNegativePositiveSignAndValue(a, t, !0, !1)) : a = `${t.negativeSignCharacter}${a}`) : a = e, a;
  }
  /**
   * Analyze the `negativeBracketsTypeOnBlur` options and keep track of the first and last bracket characters to use.
   *
   * @param {object} settings
   * @private
   */
  static _setBrackets(e) {
    if (i.isNull(e.negativeBracketsTypeOnBlur))
      e.firstBracket = "", e.lastBracket = "";
    else {
      const [t, s] = e.negativeBracketsTypeOnBlur.split(",");
      e.firstBracket = t, e.lastBracket = s;
    }
  }
  /**
   * Return a number as a numeric string that can be typecast to a Number that Javascript will understand.
   *
   * This function returns the given string by stripping:
   * - the currency sign (currencySymbol),
   * - the grouping separators (digitalGroupSpacing),
   * - the suffix text (suffixText),
   * - the positive sign (positiveSignCharacter),
   * - the brackets if any,
   * - by replacing the negative sign character with a hyphen,
   * - and by replacing the decimal character (decimalCharacter) by a dot.
   *
   * Lastly, it also put the negative sign back to its normal position if needed.
   * Bonus; it converts any arabic numbers found to the latin ones.
   *
   * @param {string} s
   * @param {object} settings
   * @returns {string|void|*}
   */
  static _convertToNumericString(e, t) {
    e = this._removeBrackets(e, t, !1), e = this._normalizeCurrencySuffixAndNegativeSignCharacters(e, t), e = e.replace(new RegExp(`[${t.digitGroupSeparator}]`, "g"), ""), t.decimalCharacter !== "." && (e = e.replace(t.decimalCharacter, ".")), i.isNegative(e) && e.lastIndexOf("-") === e.length - 1 && (e = e.replace("-", ""), e = `-${e}`), t.showPositiveSign && (e = e.replace(t.positiveSignCharacter, ""));
    const s = t.leadingZero !== r.options.leadingZero.keep, a = i.arabicToLatinNumbers(e, s, !1, !1);
    return isNaN(a) || (e = a.toString()), e;
  }
  /**
   * Removes the currency symbol and the suffix text from the given string, and replace the custom negative sign with a hyphen.
   *
   * @param {string} s
   * @param {object} settings
   * @returns {string | *}
   * @private
   */
  static _normalizeCurrencySuffixAndNegativeSignCharacters(e, t) {
    return e = String(e), t.currencySymbol !== r.options.currencySymbol.none && (e = e.replace(t.currencySymbol, "")), t.suffixText !== r.options.suffixText.none && (e = e.replace(t.suffixText, "")), t.negativeSignCharacter !== r.options.negativeSignCharacter.hyphen && (e = e.replace(t.negativeSignCharacter, "-")), e;
  }
  /**
   * Converts the ISO numeric string to the locale decimal and minus sign placement.
   * See the "outputFormat" option definition for more details.
   * Note: If the `outputFormat` is set to a number, the custom `negativeSignCharacter` is ignored.
   *
   * @param {string|null} value The unformatted value
   * @param {string|null} locale
   * @param {object} settings
   * @returns {*}
   */
  static _toLocale(e, t, s) {
    if (i.isNull(t) || t === r.options.outputFormat.string)
      return e;
    let a;
    switch (t) {
      case r.options.outputFormat.number:
        a = Number(e);
        break;
      case r.options.outputFormat.dotNegative:
        a = i.isNegative(e) ? e.replace("-", "") + "-" : e;
        break;
      case r.options.outputFormat.comma:
      case r.options.outputFormat.negativeComma:
        a = e.replace(".", ",");
        break;
      case r.options.outputFormat.commaNegative:
        a = e.replace(".", ","), a = i.isNegative(a) ? a.replace("-", "") + "-" : a;
        break;
      case r.options.outputFormat.dot:
      case r.options.outputFormat.negativeDot:
        a = e;
        break;
      default:
        i.throwError(`The given outputFormat [${t}] option is not recognized.`);
    }
    return t !== r.options.outputFormat.number && s.negativeSignCharacter !== "-" && (a = a.replace("-", s.negativeSignCharacter)), a;
  }
  /**
   * Modify the negative sign and the decimal character of the given string value to a hyphen (-) and a dot (.) in order to make that value 'typecastable' to a real number.
   *
   * @param {string} s The formatted value
   * @returns {string} The value with the 'normal' minus sign and decimal character
   */
  _modifyNegativeSignAndDecimalCharacterForRawValue(e) {
    return this.settings.decimalCharacter !== "." && (e = e.replace(this.settings.decimalCharacter, ".")), this.settings.negativeSignCharacter !== "-" && this.settings.isNegativeSignAllowed && (e = e.replace(this.settings.negativeSignCharacter, "-")), e.match(/\d/) || (e += "0"), e;
  }
  /**
   * Modify the negative sign and the decimal character to use those defined in the settings.
   *
   * @param {string} s
   * @param {object} settings
   * @returns {string}
   */
  static _modifyNegativeSignAndDecimalCharacterForFormattedValue(e, t) {
    return t.negativeSignCharacter !== "-" && (e = e.replace("-", t.negativeSignCharacter)), t.decimalCharacter !== "." && (e = e.replace(".", t.decimalCharacter)), e;
  }
  /**
   * Return `true` if the given value is empty or is equal to the negative sign character defined in the given settings.
   *
   * @param {string} value
   * @param {object} settings
   * @returns {boolean}
   * @private
   */
  static _isElementValueEmptyOrOnlyTheNegativeSign(e, t) {
    return e === "" || e === t.negativeSignCharacter;
  }
  /**
   * Return the value with the currency symbol and the suffix text ordered according to the given settings.
   *
   * @param {string} value
   * @param {object} settings
   * @param {boolean} signOnEmpty
   * @returns {*}
   * @private
   */
  static _orderValueCurrencySymbolAndSuffixText(e, t, s) {
    let a;
    if (t.emptyInputBehavior === r.options.emptyInputBehavior.always || s)
      switch (t.negativePositiveSignPlacement) {
        case r.options.negativePositiveSignPlacement.left:
        case r.options.negativePositiveSignPlacement.prefix:
        case r.options.negativePositiveSignPlacement.none:
          a = e + t.currencySymbol + t.suffixText;
          break;
        default:
          a = t.currencySymbol + e + t.suffixText;
      }
    else
      a = e;
    return a;
  }
  /**
   * Modify the input value by adding the group separators, as defined in the settings, and the negative brackets if needed.
   *
   * @param {string} inputValue The formatted value (i.e. with the `decimalCharacter` defined in the settings, not the raw value)
   * @param {object} settings
   * @param {boolean} isFocused
   * @param {number|string|null} currentRawValue The object current raw value (`this.rawValue`)
   * @param {number|string|null} forcedRawValue If this is set, then this rawValue is used instead of the one passed through the `settings` object. This is useful is some very specific cases where we need to set the raw value *after* settings the formatted value, using the `_addGroupSeparators()` method.
   * @returns {*}
   */
  static _addGroupSeparators(e, t, s, a, n = null) {
    let c;
    if (i.isNull(n) ? c = i.isNegative(e, t.negativeSignCharacter) || i.isNegativeWithBrackets(e, t.firstBracket, t.lastBracket) : c = n < 0, e = this._stripAllNonNumberCharactersExceptCustomDecimalChar(e, t, !1, s), this._isElementValueEmptyOrOnlyTheNegativeSign(e, t))
      return this._orderValueCurrencySymbolAndSuffixText(e, t, !0);
    const o = i.isZeroOrHasNoValue(e);
    c && (e = e.replace("-", ""));
    let [l, h] = e.split(t.decimalCharacter);
    if (t.decimalCharacterAlternative && i.isUndefined(h) && ([l, h] = e.split(t.decimalCharacterAlternative)), t.digitGroupSeparator !== "") {
      t.digitalGroupSpacing = t.digitalGroupSpacing.toString();
      let p;
      switch (t.digitalGroupSpacing) {
        case r.options.digitalGroupSpacing.twoThree:
          p = /(\d)((\d)(\d{2}?)+)$/;
          break;
        case r.options.digitalGroupSpacing.twoScaled:
          p = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
          break;
        case r.options.digitalGroupSpacing.two:
        case r.options.digitalGroupSpacing.three:
        case r.options.digitalGroupSpacing.four:
        default:
          p = new RegExp(`(\\d)((\\d{${t.digitalGroupSpacing}}?)+)$`);
      }
      for (; p.test(l); )
        l = l.replace(p, `$1${t.digitGroupSeparator}$2`);
    }
    let d;
    s ? d = t.decimalPlacesShownOnFocus : d = t.decimalPlacesShownOnBlur, d !== 0 && !i.isUndefined(h) ? (h.length > d && (h = h.substring(0, d)), e = `${l}${t.decimalCharacter}${h}`) : e = l, e = r._mergeCurrencySignNegativePositiveSignAndValue(e, t, c, o), i.isNull(n) && (n = a), t.negativeBracketsTypeOnBlur !== null && (n < 0 || i.isNegativeStrict(e, t.negativeSignCharacter)) && (e = this._toggleNegativeBracket(e, t, s));
    let g;
    return t.suffixText ? g = `${e}${t.suffixText}` : g = e, g;
  }
  /**
   * Return a semi-formatted string where the input value, the negative or positive sign, and the currency symbol are stitched together at the right positions, using the options set in the `settings` object.
   * Note : the `inputValue` is usually not a numeric string since the grouping symbols are already added to it at this point.
   *
   * @param {string} inputValue
   * @param {object} settings
   * @param {boolean} isValueNegative
   * @param {boolean} isZeroOrHasNoValue
   * @returns {*}
   * @throws
   * @private
   */
  static _mergeCurrencySignNegativePositiveSignAndValue(e, t, s, a) {
    let n = "";
    s ? n = t.negativeSignCharacter : t.showPositiveSign && !a && (n = t.positiveSignCharacter);
    let c;
    if (t.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix)
      if (t.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (s || !s && t.showPositiveSign && !a))
        switch (t.negativePositiveSignPlacement) {
          case r.options.negativePositiveSignPlacement.prefix:
          case r.options.negativePositiveSignPlacement.left:
            c = `${n}${t.currencySymbol}${e}`;
            break;
          case r.options.negativePositiveSignPlacement.right:
            c = `${t.currencySymbol}${n}${e}`;
            break;
          case r.options.negativePositiveSignPlacement.suffix:
            c = `${t.currencySymbol}${e}${n}`;
            break;
        }
      else
        c = t.currencySymbol + e;
    else if (t.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix)
      if (t.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (s || !s && t.showPositiveSign && !a))
        switch (t.negativePositiveSignPlacement) {
          case r.options.negativePositiveSignPlacement.suffix:
          case r.options.negativePositiveSignPlacement.right:
            c = `${e}${t.currencySymbol}${n}`;
            break;
          case r.options.negativePositiveSignPlacement.left:
            c = `${e}${n}${t.currencySymbol}`;
            break;
          case r.options.negativePositiveSignPlacement.prefix:
            c = `${n}${e}${t.currencySymbol}`;
            break;
        }
      else
        c = e + t.currencySymbol;
    return c;
  }
  /**
   * Calculate where to put the caret position on focus if the element content is not selected.
   * This calculation is affected by the `caretPositionOnFocus` option which can be either `null`, `'start'`, `'end'`, `'decimalLeft'` or 'decimalRight'`, and will decide where to put the caret (on the left or right of the value or the decimal character, respectively) :
   * - `null` : the caret position is not forced
   * - `'start'` : the caret is positioned on the left hand side of the value
   * - `'end'` : the caret is positioned on the right hand side of the value
   * - `'decimalLeft'` : the caret is positioned on the left side of the decimal character
   * - `'decimalRight'` : the caret is positioned on the right side of the decimal character
   *
   * @param {string} value The formatted string stripped of the currency symbol and negative/positive sign
   * @returns {number}
   * @throws
   * @private
   */
  _initialCaretPosition(e) {
    i.isNull(this.settings.caretPositionOnFocus) && this.settings.selectOnFocus === r.options.selectOnFocus.doNotSelect && i.throwError("`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`.");
    const t = this.rawValue < 0, s = i.isZeroOrHasNoValue(e), a = e.length;
    let n = 0, c = 0, o = !1, l = 0;
    this.settings.caretPositionOnFocus !== r.options.caretPositionOnFocus.start && (e = e.replace(this.settings.negativeSignCharacter, ""), e = e.replace(this.settings.positiveSignCharacter, ""), e = e.replace(this.settings.currencySymbol, ""), n = e.length, o = i.contains(e, this.settings.decimalCharacter), (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.decimalLeft || this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.decimalRight) && (o ? (c = e.indexOf(this.settings.decimalCharacter), l = this.settings.decimalCharacter.length) : (c = n, l = 0)));
    let h = "";
    t ? h = this.settings.negativeSignCharacter : this.settings.showPositiveSign && !s && (h = this.settings.positiveSignCharacter);
    const d = h.length, g = this.settings.currencySymbol.length;
    let p;
    if (this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix) {
      if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.start)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.prefix:
            case r.options.negativePositiveSignPlacement.left:
            case r.options.negativePositiveSignPlacement.right:
              p = d + g;
              break;
            case r.options.negativePositiveSignPlacement.suffix:
              p = g;
              break;
          }
        else
          p = g;
      else if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.end)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.prefix:
            case r.options.negativePositiveSignPlacement.left:
            case r.options.negativePositiveSignPlacement.right:
              p = a;
              break;
            case r.options.negativePositiveSignPlacement.suffix:
              p = g + n;
              break;
          }
        else
          p = a;
      else if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.decimalLeft)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.prefix:
            case r.options.negativePositiveSignPlacement.left:
            case r.options.negativePositiveSignPlacement.right:
              p = d + g + c;
              break;
            case r.options.negativePositiveSignPlacement.suffix:
              p = g + c;
              break;
          }
        else
          p = g + c;
      else if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.decimalRight)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.prefix:
            case r.options.negativePositiveSignPlacement.left:
            case r.options.negativePositiveSignPlacement.right:
              p = d + g + c + l;
              break;
            case r.options.negativePositiveSignPlacement.suffix:
              p = g + c + l;
              break;
          }
        else
          p = g + c + l;
    } else if (this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix) {
      if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.start)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.suffix:
            case r.options.negativePositiveSignPlacement.right:
            case r.options.negativePositiveSignPlacement.left:
              p = 0;
              break;
            case r.options.negativePositiveSignPlacement.prefix:
              p = d;
              break;
          }
        else
          p = 0;
      else if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.end)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.suffix:
            case r.options.negativePositiveSignPlacement.right:
            case r.options.negativePositiveSignPlacement.left:
              p = n;
              break;
            case r.options.negativePositiveSignPlacement.prefix:
              p = d + n;
              break;
          }
        else
          p = n;
      else if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.decimalLeft)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.suffix:
            case r.options.negativePositiveSignPlacement.right:
            case r.options.negativePositiveSignPlacement.left:
              p = c;
              break;
            case r.options.negativePositiveSignPlacement.prefix:
              p = d + c;
              break;
          }
        else
          p = c;
      else if (this.settings.caretPositionOnFocus === r.options.caretPositionOnFocus.decimalRight)
        if (this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.none && (t || !t && this.settings.showPositiveSign && !s))
          switch (this.settings.negativePositiveSignPlacement) {
            case r.options.negativePositiveSignPlacement.suffix:
            case r.options.negativePositiveSignPlacement.right:
            case r.options.negativePositiveSignPlacement.left:
              p = c + l;
              break;
            case r.options.negativePositiveSignPlacement.prefix:
              p = d + c + l;
              break;
          }
        else
          p = c + l;
    }
    return p;
  }
  /**
   * Truncate the trailing zeroes to the given number of decimal places
   *
   * @param {string} roundedInputValue
   * @param {int} decimalPlacesNeeded The number of decimal places to keep
   * @returns {string}
   */
  static _truncateZeros(e, t) {
    let s;
    switch (t) {
      case 0:
        s = /(\.(?:\d*[1-9])?)0*$/;
        break;
      case 1:
        s = /(\.\d(?:\d*[1-9])?)0*$/;
        break;
      default:
        s = new RegExp(`(\\.\\d{${t}}(?:\\d*[1-9])?)0*`);
    }
    return e = e.replace(s, "$1"), t === 0 && (e = e.replace(/\.$/, "")), e;
  }
  /**
   * Round the given `value` with the number of decimal places to keep for the raw value.
   *
   * @param {string|null} value An unformatted numeric value
   * @param {object} settings
   * @returns {*}
   * @private
   */
  static _roundRawValue(e, t) {
    return this._roundValue(e, t, t.decimalPlacesRawValue);
  }
  /**
   * Round the given `value` with the number of decimal places to show for the element if focused.
   *
   * @param {string|null} value An unformatted numeric value
   * @param {object} settings
   * @returns {*}
   * @private
   */
  static _roundFormattedValueShownOnFocus(e, t) {
    return this._roundValue(e, t, Number(t.decimalPlacesShownOnFocus));
  }
  /**
   * Round the given `value` with the number of decimal places to show for the element if unfocused.
   *
   * @param {string|null} value An unformatted numeric value
   * @param {object} settings
   * @returns {*}
   * @private
   */
  static _roundFormattedValueShownOnBlur(e, t) {
    return this._roundValue(e, t, Number(t.decimalPlacesShownOnBlur));
  }
  /**
   * Round the given `value` with the number of decimal places to show for the element based on the value of isFocused.
   *
   * @param {string|null} value An unformatted numeric value
   * @param {object} settings
   * @param {boolean} isFocused
   * @returns {*}
   * @private
   */
  static _roundFormattedValueShownOnFocusOrBlur(e, t, s) {
    return s ? this._roundFormattedValueShownOnFocus(e, t) : this._roundFormattedValueShownOnBlur(e, t);
  }
  /**
   * Round the input value using the rounding method defined in the settings.
   * This function accepts multiple rounding methods. See the documentation for more details about those.
   *
   * Note : This is handled as text since JavaScript math functions can return inaccurate values.
   *
   * @param {string|null} inputValue An unformatted numeric value
   * @param {object} settings
   * @param {int} decimalPlacesToRoundTo
   * @returns {*}
   */
  static _roundValue(e, t, s) {
    if (i.isNull(e))
      return e;
    if (e = e === "" ? "0" : e.toString(), t.roundingMethod === r.options.roundingMethod.toNearest05 || t.roundingMethod === r.options.roundingMethod.toNearest05Alt || t.roundingMethod === r.options.roundingMethod.upToNext05 || t.roundingMethod === r.options.roundingMethod.downToNext05)
      return this._roundCloseTo05(e, t);
    const [a, n] = r._prepareValueForRounding(e, t);
    e = n;
    const c = e.lastIndexOf("."), o = c === -1, [l, h] = e.split(".");
    if (!(h > 0) && (t.allowDecimalPadding === r.options.allowDecimalPadding.never || t.allowDecimalPadding === r.options.allowDecimalPadding.floats))
      return Number(e) === 0 ? l : `${a}${l}`;
    let g;
    t.allowDecimalPadding === r.options.allowDecimalPadding.always || t.allowDecimalPadding === r.options.allowDecimalPadding.floats ? g = s : t.allowDecimalPadding > 0 ? g = t.allowDecimalPadding : g = 0;
    const p = o ? e.length - 1 : c;
    let y = e.length - 1 - p, v = "";
    if (y <= s) {
      if (v = e, y < g) {
        o && (v = `${v}${t.decimalCharacter}`);
        let P = "000000";
        for (; y < g; )
          P = P.substring(0, g - y), v += P, y += P.length;
      } else
        y > g ? v = this._truncateZeros(v, g) : y === 0 && g === 0 && (v = v.replace(/\.$/, ""));
      return Number(v) === 0 ? v : `${a}${v}`;
    }
    let E;
    o ? E = s - 1 : E = Number(s) + Number(c);
    const b = Number(e.charAt(E + 1));
    let S = e.substring(0, E + 1).split(""), w;
    if (e.charAt(E) === "." ? w = e.charAt(E - 1) % 2 : w = e.charAt(E) % 2, this._shouldRoundUp(b, t, a, w)) {
      for (let P = S.length - 1; P >= 0; P -= 1)
        if (S[P] !== ".") {
          if (S[P] = +S[P] + 1, S[P] < 10)
            break;
          P > 0 && (S[P] = "0");
        }
    }
    return S = S.slice(0, E + 1), v = this._truncateZeros(S.join(""), g), Number(v) === 0 ? v : `${a}${v}`;
  }
  /**
   * Round the `value` when the rounding method deals with '.05'
   *
   * @param {string} value
   * @param {object} settings
   * @returns {string}
   * @private
   */
  static _roundCloseTo05(e, t) {
    switch (t.roundingMethod) {
      case r.options.roundingMethod.toNearest05:
      case r.options.roundingMethod.toNearest05Alt:
        e = (Math.round(e * 20) / 20).toString();
        break;
      case r.options.roundingMethod.upToNext05:
        e = (Math.ceil(e * 20) / 20).toString();
        break;
      default:
        e = (Math.floor(e * 20) / 20).toString();
    }
    let s;
    return i.contains(e, ".") ? e.length - e.indexOf(".") < 3 ? s = e + "0" : s = e : s = e + ".00", s;
  }
  /**
   * Modify the given `value` in order to make it usable for the rest of the rounding function.
   * This convert the `value` to a positive one, trim any leading zeros and make sure it does not start with a leading dot.
   *
   * @param {string} value The unformatted value
   * @param {object} settings
   * @returns {[string, string]}
   * @private
   */
  static _prepareValueForRounding(e, t) {
    let s = "";
    return i.isNegativeStrict(e, "-") && (s = "-", e = e.replace("-", "")), e.match(/^\d/) || (e = `0${e}`), Number(e) === 0 && (s = ""), (Number(e) > 0 && t.leadingZero !== r.options.leadingZero.keep || e.length > 0 && t.leadingZero === r.options.leadingZero.allow) && (e = e.replace(/^0*(\d)/, "$1")), [s, e];
  }
  /**
   * Return `true` if a round up should be done given the last digit, the settings and other information about the value.
   *
   * @param {number} lastDigit
   * @param {object} settings
   * @param {string} negativeSign This variable comes from `_prepareValueForRounding()`, which return `'-'` if the initial value was negative
   * @param {number} odd
   * @returns {boolean}
   * @private
   */
  static _shouldRoundUp(e, t, s, a) {
    return e > 4 && t.roundingMethod === r.options.roundingMethod.halfUpSymmetric || // Round half up symmetric
    e > 4 && t.roundingMethod === r.options.roundingMethod.halfUpAsymmetric && s === "" || // Round half up asymmetric positive values
    e > 5 && t.roundingMethod === r.options.roundingMethod.halfUpAsymmetric && s === "-" || // Round half up asymmetric negative values
    e > 5 && t.roundingMethod === r.options.roundingMethod.halfDownSymmetric || // Round half down symmetric
    e > 5 && t.roundingMethod === r.options.roundingMethod.halfDownAsymmetric && s === "" || // Round half down asymmetric positive values
    e > 4 && t.roundingMethod === r.options.roundingMethod.halfDownAsymmetric && s === "-" || // Round half down asymmetric negative values
    e > 5 && t.roundingMethod === r.options.roundingMethod.halfEvenBankersRounding || e === 5 && t.roundingMethod === r.options.roundingMethod.halfEvenBankersRounding && a === 1 || e > 0 && t.roundingMethod === r.options.roundingMethod.toCeilingTowardPositiveInfinity && s === "" || e > 0 && t.roundingMethod === r.options.roundingMethod.toFloorTowardNegativeInfinity && s === "-" || e > 0 && t.roundingMethod === r.options.roundingMethod.upRoundAwayFromZero;
  }
  /**
   * Truncates the decimal part of a number to the given number of decimal places `decimalPlacesToRoundTo`.
   *
   * @param {string} value
   * @param {object} settings
   * @param {boolean} isPaste
   * @param {int} decimalPlacesToRoundTo
   * @returns {*}
   */
  static _truncateDecimalPlaces(e, t, s, a) {
    s && (e = this._roundFormattedValueShownOnFocus(e, t));
    const [n, c] = e.split(t.decimalCharacter);
    if (c && c.length > a)
      if (a > 0) {
        const o = c.substring(0, a);
        e = `${n}${t.decimalCharacter}${o}`;
      } else
        e = n;
    return e;
  }
  /**
   * Check if the given value is within the `minimumValue` and `maximumValue` range, while using the override options set with `overrideMinMaxLimits`.
   * The minimum and maximum limit test results are returned in an array like `[isMinimumLimitRespected, isMaximumLimitRespected]`.
   *
   * @param {string} value
   * @param {object} settings
   * @returns {[boolean, boolean]}
   */
  static _checkIfInRangeWithOverrideOption(e, t) {
    if (i.isNull(e) && t.emptyInputBehavior === r.options.emptyInputBehavior.null || // When the `null` value is accepted as the `rawValue`, the limits are ignored
    t.overrideMinMaxLimits === r.options.overrideMinMaxLimits.ignore || t.overrideMinMaxLimits === r.options.overrideMinMaxLimits.invalid)
      return [!0, !0];
    e = e.toString(), e = e.replace(",", ".");
    const s = i.parseStr(t.minimumValue), a = i.parseStr(t.maximumValue), n = i.parseStr(e);
    let c;
    switch (t.overrideMinMaxLimits) {
      case r.options.overrideMinMaxLimits.floor:
        c = [i.testMinMax(s, n) > -1, !0];
        break;
      case r.options.overrideMinMaxLimits.ceiling:
        c = [!0, i.testMinMax(a, n) < 1];
        break;
      default:
        c = [i.testMinMax(s, n) > -1, i.testMinMax(a, n) < 1];
    }
    return c;
  }
  /**
   * Returns `true` if the given value is within the `minimumValue` and `maximumValue` limits, while using the override options set with `overrideMinMaxLimits`, `false` otherwise
   *
   * @param {string} value
   * @param {object} settings
   * @returns {boolean}
   * @private
   */
  static _isWithinRangeWithOverrideOption(e, t) {
    const [s, a] = this._checkIfInRangeWithOverrideOption(e, t);
    return s && a;
  }
  /**
   * Helper function that prepares the value string for the min/max test
   *
   * @param {string} value
   * @returns {{}}
   * @private
   */
  static _cleanValueForRangeParse(e) {
    return e = e.toString().replace(",", "."), i.parseStr(e);
  }
  /**
   * Returns `true` is the value is superior or equal to the `minimumValue` limit, discarding any override options
   *
   * @param {string} value
   * @param {object} settings
   * @returns {boolean}
   * @private
   */
  static _isMinimumRangeRespected(e, t) {
    return i.testMinMax(i.parseStr(t.minimumValue), this._cleanValueForRangeParse(e)) > -1;
  }
  /**
   * Returns `true` is the value is inferior or equal to the `maximumValue` limit, discarding any override options
   *
   * @param {string} value
   * @param {object} settings
   * @returns {boolean}
   * @private
   */
  static _isMaximumRangeRespected(e, t) {
    return i.testMinMax(i.parseStr(t.maximumValue), this._cleanValueForRangeParse(e)) < 1;
  }
  /**
   * Helper function that triggers the range events if they are needed
   *
   * @param {boolean} minTest
   * @param {boolean} maxTest
   * @private
   */
  _triggerRangeEvents(e, t) {
    e || this._triggerEvent(r.events.minRangeExceeded, this.domElement), t || this._triggerEvent(r.events.maxRangeExceeded, this.domElement);
  }
  /**
   * Set the invalid state on the AutoNumeric element.
   * If the element is not an input, and therefore a contenteditable-enabled element, its validity state cannot be changed.
   * In that case, the invalid css class defined with the `settings.invalidClass` option is added to the element.
   * The 'autoNumeric:invalidValue' event is always sent when this function is called.
   *
   * @private
   */
  _setInvalidState() {
    this.isInputElement ? i.setInvalidState(this.domElement) : this._addCSSClass(this.settings.invalidClass), this._triggerEvent(r.events.invalidValue, this.domElement), this.validState = !1;
  }
  /**
   * Set the valid state on the AutoNumeric element.
   * If the element is not an input, and therefore a contenteditable-enabled element, its validity state cannot be changed.
   * In that case, the invalid css class defined with the `settings.invalidClass` option is removed.
   * The 'autoNumeric:correctedValue' event is sent if the element state is invalid when this is called.
   *
   * @private
   */
  _setValidState() {
    this.isInputElement ? i.setValidState(this.domElement) : this._removeCSSClass(this.settings.invalidClass), this.validState || this._triggerEvent(r.events.correctedValue, this.domElement), this.validState = !0;
  }
  /**
   * Sets the valid or invalid state on the DOM element, if the value is within the range set by the minimum and maximum value
   *
   * @param {string} value
   * @private
   */
  _setValidOrInvalidState(e) {
    if (this.settings.overrideMinMaxLimits === r.options.overrideMinMaxLimits.invalid) {
      const t = this.constructor._isMinimumRangeRespected(e, this.settings), s = this.constructor._isMaximumRangeRespected(e, this.settings);
      t && s ? this._setValidState() : this._setInvalidState(), this._triggerRangeEvents(t, s);
    }
  }
  /**
   * Original settings saved for use when the `decimalPlacesShownOnFocus` and `showOnlyNumbersOnFocus` options are used.
   * Those original settings are used exclusively in the `focusin` and `focusout` event handlers.
   */
  _keepAnOriginalSettingsCopy() {
    this.originalDigitGroupSeparator = this.settings.digitGroupSeparator, this.originalCurrencySymbol = this.settings.currencySymbol, this.originalSuffixText = this.settings.suffixText;
  }
  /**
   * Removes any zeros in excess in the front and back of the given `value`, according to the `settings`.
   * This also manages the cases where the decimal point is on the far left or far right of the `value`.
   *
   * @param {string} value
   * @returns {string|null}
   */
  _trimLeadingAndTrailingZeros(e) {
    if (e === "" || e === null)
      return e;
    if (this.settings.leadingZero !== r.options.leadingZero.keep) {
      if (Number(e) === 0)
        return "0";
      e = e.replace(/^(-)?0+(?=\d)/g, "$1");
    }
    return i.contains(e, ".") && (e = e.replace(/(\.[0-9]*?)0+$/, "$1")), e = e.replace(/\.$/, ""), e;
  }
  /**
   * Generate the name for the persistent stored data variable
   * @private
   */
  _setPersistentStorageName() {
    this.settings.saveValueToSessionStorage && (this.domElement.name !== "" && !i.isUndefined(this.domElement.name) ? this.rawValueStorageName = `${this.storageNamePrefix}${decodeURIComponent(this.domElement.name)}` : this.rawValueStorageName = `${this.storageNamePrefix}${this.domElement.id}`);
  }
  /**
   * Save the raw Value into sessionStorage or a cookie depending on what the browser is supporting.
   * @private
   */
  _saveValueToPersistentStorage() {
    this.settings.saveValueToSessionStorage && sessionStorage.setItem(this.rawValueStorageName, this.rawValue);
  }
  /**
   * Retrieve the raw value from sessionStorage or the cookie depending on what the browser is supporting.
   *
   * @returns {*}
   * @private
   */
  _getValueFromPersistentStorage() {
    return this.settings.saveValueToSessionStorage ? sessionStorage.getItem(this.rawValueStorageName) : (i.warning("`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.", this.settings.showWarnings), null);
  }
  /**
   * Remove the raw value data from sessionStorage or the cookie depending on what the browser is supporting.
   * @private
   */
  _removeValueFromPersistentStorage() {
    this.settings.saveValueToSessionStorage && sessionStorage.removeItem(this.rawValueStorageName);
  }
  /**
   * Get the default value from the html `value` attribute.
   * Return the empty string if such attribute is not found.
   *
   * @param {HTMLElement} domElement
   *
   * @returns {string}
   * @private
   */
  _getDefaultValue(e) {
    const t = e.getAttribute("value");
    return i.isNull(t) ? "" : t;
  }
  /**
   * Handler for 'focusin' and 'mouseenter' events
   * On focusin, multiple things happens :
   * - If `Alt` is pressed, unformat
   * - Remove the separators if `showOnlyNumbersOnFocus` is set
   * - Depending on `emptyInputBehavior`, reformat the empty formatted value
   * - Display the correct number of decimal places (on focus/blur)
   * - Place the caret correctly if the element is empty
   *
   * Note: On focusin, the `rawValue` is never changed. Only the formatted value can be modified.
   *
   * @param {KeyboardEvent|MouseEvent} e
   * @private
   */
  _onFocusInAndMouseEnter(e) {
    if (this.isEditing = !1, !this.formulaMode && this.settings.unformatOnHover && e.type === "mouseenter" && e.altKey) {
      this.constructor._unformatAltHovered(this);
      return;
    }
    if (e.type === "focus" && (this.isFocused = !0, this.rawValueOnFocus = this.rawValue), e.type === "focus" && this.settings.unformatOnHover && this.hoveredWithAlt && this.constructor._reformatAltHovered(this), e.type === "focus" || e.type === "mouseenter" && !this.isFocused) {
      let t = null;
      this.settings.emptyInputBehavior === r.options.emptyInputBehavior.focus && this.rawValue < 0 && this.settings.negativeBracketsTypeOnBlur !== null && this.settings.isNegativeSignAllowed && (t = this.constructor._removeBrackets(i.getElementValue(this.domElement), this.settings));
      const s = this._getRawValueToFormat(this.rawValue);
      if (s !== "") {
        const o = this.constructor._roundFormattedValueShownOnFocusOrBlur(s, this.settings, this.isFocused);
        if (this.settings.showOnlyNumbersOnFocus === r.options.showOnlyNumbersOnFocus.onlyNumbers)
          this.settings.digitGroupSeparator = "", this.settings.currencySymbol = "", this.settings.suffixText = "", t = o.replace(".", this.settings.decimalCharacter);
        else {
          let l;
          i.isNull(o) ? l = "" : l = this.constructor._addGroupSeparators(o.replace(".", this.settings.decimalCharacter), this.settings, this.isFocused, s), t = l;
        }
      }
      i.isNull(t) ? this.valueOnFocus = "" : this.valueOnFocus = t, this.lastVal = this.valueOnFocus;
      const a = this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(this.valueOnFocus, this.settings), n = this.constructor._orderValueCurrencySymbolAndSuffixText(this.valueOnFocus, this.settings, !0), c = a && n !== "" && this.settings.emptyInputBehavior === r.options.emptyInputBehavior.focus;
      c && (t = n), i.isNull(t) || this._setElementValue(t), c && n === this.settings.currencySymbol && this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix && i.setElementSelection(e.target, 0);
    }
  }
  /**
   * Handler for the 'focus' event.
   * We update the info of the focused state in the `this.isFocused` variable when the element gets focused.
   * @private
   */
  _onFocus() {
    this.settings.isCancellable && this._saveCancellableValue();
  }
  /**
   * Handler for the 'focusin' event.
   * This is called before the 'focus' event, and is necessary to change the selection on focus under Firefox for instance.
   *
   * @param {Event} e
   * @private
   */
  _onFocusIn(e) {
    this.settings.selectOnFocus ? this.select() : i.isNull(this.settings.caretPositionOnFocus) || i.setElementSelection(e.target, this._initialCaretPosition(i.getElementValue(this.domElement)));
  }
  /**
   * Enter the special 'formula mode' where users can enter a math expression that will be evaluated on blur and `enter`
   * @private
   */
  _enterFormulaMode() {
    this.settings.formulaMode && (this.formulaMode = !0, i.setElementValue(this.domElement, "="), i.setElementSelection(this.domElement, 1));
  }
  /**
   * Exit the formula mode
   * Tries to parse and evaluate the math expression, then `set()` the result if it's correct, otherwise reformat with the previous `rawValue`
   * @private
   */
  _exitFormulaMode() {
    let e = i.getElementValue(this.domElement);
    e = e.replace(/^\s*=/, "");
    let t;
    try {
      const s = new pe(e, this.settings.decimalCharacter);
      t = new de().evaluate(s);
    } catch {
      this._triggerEvent(r.events.invalidFormula, this.domElement, {
        formula: e,
        aNElement: this
      }), this.reformat(), this.formulaMode = !1;
      return;
    }
    this._triggerEvent(r.events.validFormula, this.domElement, {
      formula: e,
      result: t,
      aNElement: this
    }), this.set(t), this.formulaMode = !1;
  }
  /**
   * Returns `true` if the non-printable key is accepted in formula mode
   *
   * @returns {boolean}
   * @private
   */
  _acceptNonPrintableKeysInFormulaMode() {
    return this.eventKey === m.keyName.Backspace || this.eventKey === m.keyName.Delete || this.eventKey === m.keyName.LeftArrow || this.eventKey === m.keyName.RightArrow || this.eventKey === m.keyName.Home || this.eventKey === m.keyName.End;
  }
  /**
   * Handler for 'keydown' events.
   * The user just started pushing any key, hence one event is sent.
   *
   * Note :
   * By default a 'normal' input output those events in the right order when inputting a character key (i.e. 'a') :
   * - keydown
   * - keypress
   * - input
   * - keyup
   *
   * ...when inputting a modifier key (i.e. 'ctrl') :
   * - keydown
   * - keyup
   *
   * If 'delete' or 'backspace' are entered 'normally', the following events are sent :
   * - keydown
   * - input
   * - keyup
   *
   * If 'delete' or 'backspace' are entered continuously (with the key still pressed), the following events are sent :
   * - keydown
   * - input
   * [- keydown
   * - input] x times
   * - keyup
   *
   * If 'enter' is entered and the value has not changed, the following events are sent :
   * - keydown
   * - keypress
   * - keyup
   *
   * If 'enter' is entered and the value has been changed, the following events are sent :
   * - keydown
   * - keypress
   * - change
   * - keyup
   *
   * When a paste is done, the following events are sent :
   * - input (if paste is done with the mouse)
   *
   * - keydown (if paste is done with ctrl+v)
   * - keydown
   * - input
   * - keyup
   * - keyup
   *
   * @param {KeyboardEvent} e
   */
  _onKeydown(e) {
    if (this.formatted = !1, this.isEditing = !0, !this.formulaMode && !this.isFocused && this.settings.unformatOnHover && e.altKey && this.domElement === i.getHoveredElement()) {
      this.constructor._unformatAltHovered(this);
      return;
    }
    if (this._updateEventKeyInfo(e), this.keydownEventCounter += 1, this.keydownEventCounter === 1 && (this.initialValueOnFirstKeydown = i.getElementValue(e.target), this.initialRawValueOnFirstKeydown = this.rawValue), this.formulaMode) {
      if (this.eventKey === m.keyName.Esc) {
        this.formulaMode = !1, this.reformat();
        return;
      }
      if (this.eventKey === m.keyName.Enter) {
        this._exitFormulaMode();
        return;
      }
      if (this._acceptNonPrintableKeysInFormulaMode())
        return;
    } else {
      if (this.eventKey === m.keyName.Equal) {
        this._enterFormulaMode();
        return;
      }
      if (this.settings.modifyValueOnUpDownArrow && (this.eventKey === m.keyName.UpArrow || this.eventKey === m.keyName.DownArrow)) {
        this.upDownArrowAction(e);
        return;
      }
    }
    if (this.domElement.readOnly || this.settings.readOnly || this.domElement.disabled) {
      this.processed = !0;
      return;
    }
    this.eventKey === m.keyName.Esc && (e.preventDefault(), this.settings.isCancellable && this.rawValue !== this.savedCancellableValue && (this.set(this.savedCancellableValue), this._triggerEvent(r.events.native.input, e.target)), this.select());
    let t = i.getElementValue(e.target);
    if (this.eventKey === m.keyName.Enter && this.rawValue !== this.rawValueOnFocus && (this._triggerEvent(r.events.native.change, e.target), this.valueOnFocus = t, this.rawValueOnFocus = this.rawValue, this.settings.isCancellable && this._saveCancellableValue()), this._updateInternalProperties(e), this._processNonPrintableKeysAndShortcuts(e)) {
      this.processed = !0;
      return;
    }
    if (this.eventKey === m.keyName.Backspace || this.eventKey === m.keyName.Delete) {
      const s = this._processCharacterDeletion(e);
      if (this.processed = !0, !s) {
        e.preventDefault();
        return;
      }
      this._formatValue(e), t = i.getElementValue(e.target), t !== this.lastVal && this.throwInput && (this._triggerEvent(r.events.native.input, e.target), e.preventDefault()), this.lastVal = t, this.throwInput = !0;
    }
  }
  /**
   * Handler for 'keypress' events.
   * The user is still pressing the key, which will output a character (i.e. '2') continuously until he releases the key.
   * Note: 'keypress' events are not sent for delete keys like Backspace/Delete.
   *
   * @param {KeyboardEvent} e
   */
  _onKeypress(e) {
    if (this.formulaMode) {
      if (this._acceptNonPrintableKeysInFormulaMode() || this.settings.formulaChars.test(this.eventKey))
        return;
      e.preventDefault();
      return;
    }
    if (this.eventKey === m.keyName.Insert)
      return;
    const t = this.processed;
    if (this._updateInternalProperties(e), this._processNonPrintableKeysAndShortcuts(e))
      return;
    if (t) {
      e.preventDefault();
      return;
    }
    if (this._processCharacterInsertion()) {
      this._formatValue(e);
      const a = i.getElementValue(e.target);
      if (a !== this.lastVal && this.throwInput)
        this._triggerEvent(r.events.native.input, e.target), e.preventDefault();
      else {
        if ((this.eventKey === this.settings.decimalCharacter || this.eventKey === this.settings.decimalCharacterAlternative) && i.getElementSelection(e.target).start === i.getElementSelection(e.target).end && i.getElementSelection(e.target).start === a.indexOf(this.settings.decimalCharacter)) {
          const n = i.getElementSelection(e.target).start + 1;
          i.setElementSelection(e.target, n);
        }
        e.preventDefault();
      }
      this.lastVal = i.getElementValue(e.target), this.throwInput = !0, this._setValidOrInvalidState(this.rawValue);
      return;
    }
    e.preventDefault();
  }
  /**
   * Handler for 'keyup' events.
   * The user just released any key, hence one event is sent.
   *
   * @param {KeyboardEvent} e
   */
  _onKeyup(e) {
    if (this.isEditing = !1, this.keydownEventCounter = 0, this.formulaMode)
      return;
    if (this.settings.isCancellable && this.eventKey === m.keyName.Esc) {
      e.preventDefault();
      return;
    }
    if (this._updateEventKeyInfo(e), this.eventKey === m.keyName.Z || this.eventKey === m.keyName.z) {
      if (e.ctrlKey && e.shiftKey) {
        e.preventDefault(), this._historyTableRedo(), this._triggerEvent(r.events.native.input, e.target), this.onGoingRedo = !0;
        return;
      } else if (e.ctrlKey && !e.shiftKey)
        if (this.onGoingRedo)
          this.onGoingRedo = !1;
        else {
          e.preventDefault(), this._historyTableUndo(), this._triggerEvent(r.events.native.input, e.target);
          return;
        }
    } else if ((this.eventKey === m.keyName.Y || this.eventKey === m.keyName.y) && e.ctrlKey) {
      e.preventDefault(), this._historyTableRedo(), this._triggerEvent(r.events.native.input, e.target), this.onGoingRedo = !0;
      return;
    }
    if (this.onGoingRedo && (e.ctrlKey || e.shiftKey) && (this.onGoingRedo = !1), (e.ctrlKey || e.metaKey) && (this.eventKey === m.keyName.X || this.eventKey === m.keyName.x)) {
      const a = i.getElementSelection(this.domElement).start, n = this.constructor._toNumericValue(i.getElementValue(e.target), this.settings);
      this.set(n), this._setCaretPosition(a);
    }
    if (this.eventKey === m.keyName.Alt && this.settings.unformatOnHover && this.hoveredWithAlt) {
      this.constructor._reformatAltHovered(this);
      return;
    }
    if ((e.ctrlKey || e.metaKey) && (this.eventKey === m.keyName.Backspace || this.eventKey === m.keyName.Delete)) {
      const a = i.getElementValue(e.target);
      this._setRawValue(this._formatOrUnformatOther(!1, a));
      return;
    }
    this._updateInternalProperties(e);
    const t = this._processNonPrintableKeysAndShortcuts(e);
    delete this.valuePartsBeforePaste;
    const s = i.getElementValue(e.target);
    if (!(t || s === "" && this.initialValueOnFirstKeydown === "") && (s === this.settings.currencySymbol ? this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix ? i.setElementSelection(e.target, 0) : i.setElementSelection(e.target, this.settings.currencySymbol.length) : this.eventKey === m.keyName.Tab && i.setElementSelection(e.target, 0, s.length), (s === this.settings.suffixText || this.rawValue === "" && this.settings.currencySymbol !== "" && this.settings.suffixText !== "") && i.setElementSelection(e.target, 0), this.settings.decimalPlacesShownOnFocus !== null && this._saveValueToPersistentStorage(), this.formatted || this._formatValue(e), this._setValidOrInvalidState(this.rawValue), this._saveRawValueForAndroid(), s !== this.initialValueOnFirstKeydown && this._triggerEvent(r.events.formatted, e.target, {
      oldValue: this.initialValueOnFirstKeydown,
      newValue: s,
      oldRawValue: this.initialRawValueOnFirstKeydown,
      newRawValue: this.rawValue,
      isPristine: this.isPristine(!1),
      error: null,
      aNElement: this
    }), this.historyTable.length > 1)) {
      const a = i.getElementSelection(this.domElement);
      this.selectionStart = a.start, this.selectionEnd = a.end, this.historyTable[this.historyTableIndex].start = this.selectionStart, this.historyTable[this.historyTableIndex].end = this.selectionEnd;
    }
  }
  /**
   * On Android Chrome, the `rawValue` is not updated when the user changes the input value.
   * This function updates the `rawValue` accordingly.
   * @private
   */
  _saveRawValueForAndroid() {
    if (this.eventKey === m.keyName.AndroidDefault) {
      let e = this.constructor._stripAllNonNumberCharactersExceptCustomDecimalChar(this.getFormatted(), this.settings, !0, this.isFocused);
      e = this.constructor._convertToNumericString(e, this.settings), this._setRawValue(e);
    }
  }
  /**
   * Handler for 'focusout' events
   * On focusout, multiple things happens :
   * - The element value is formatted back if the `Alt` key was pressed,
   * - The element value is formatted back if `showOnlyNumbersOnFocus` was set to only show numbers,
   * - The element value is multiplied by `rawValueDivisor` on `blur`
   *
   * Note: On focusout, the `rawValue` is never changed. Only the formatted value can be modified.
   *
   * @param {Event} e
   */
  _onFocusOutAndMouseLeave(e) {
    if (this.isEditing = !1, !(e.type === "mouseleave" && this.formulaMode)) {
      if (this.settings.unformatOnHover && e.type === "mouseleave" && this.hoveredWithAlt) {
        this.constructor._reformatAltHovered(this);
        return;
      }
      if (e.type === "mouseleave" && !this.isFocused || e.type === "blur") {
        e.type === "blur" && this.formulaMode && this._exitFormulaMode(), this._saveValueToPersistentStorage(), this.settings.showOnlyNumbersOnFocus === r.options.showOnlyNumbersOnFocus.onlyNumbers && (this.settings.digitGroupSeparator = this.originalDigitGroupSeparator, this.settings.currencySymbol = this.originalCurrencySymbol, this.settings.suffixText = this.originalSuffixText);
        const t = this._getRawValueToFormat(this.rawValue), s = i.isNull(t), [a, n] = this.constructor._checkIfInRangeWithOverrideOption(t, this.settings);
        let c = !1;
        if (t !== "" && !s && (this._triggerRangeEvents(a, n), this.settings.valuesToStrings && this._checkValuesToStrings(t) && (this._setElementValue(this.settings.valuesToStrings[t]), c = !0)), !c) {
          let o;
          if (s || t === "" ? o = t : o = String(t), t !== "" && !s)
            a && n && !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(t, this.settings) ? (o = this._modifyNegativeSignAndDecimalCharacterForRawValue(o), this.settings.divisorWhenUnfocused && !i.isNull(o) && (o = o / this.settings.divisorWhenUnfocused, o = o.toString()), o = this.constructor._roundFormattedValueShownOnBlur(o, this.settings), o = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(o, this.settings)) : this._triggerRangeEvents(a, n);
          else if (t === "")
            switch (this.settings.emptyInputBehavior) {
              case r.options.emptyInputBehavior.zero:
                this._setRawValue("0"), o = this.constructor._roundValue("0", this.settings, 0);
                break;
              case r.options.emptyInputBehavior.min:
                this._setRawValue(this.settings.minimumValue), o = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.minimumValue, this.settings, this.isFocused);
                break;
              case r.options.emptyInputBehavior.max:
                this._setRawValue(this.settings.maximumValue), o = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.maximumValue, this.settings, this.isFocused);
                break;
              default:
                i.isNumber(this.settings.emptyInputBehavior) && (this._setRawValue(this.settings.emptyInputBehavior), o = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.emptyInputBehavior, this.settings, this.isFocused));
            }
          let l = this.constructor._orderValueCurrencySymbolAndSuffixText(o, this.settings, !1);
          this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(o, this.settings) || s && this.settings.emptyInputBehavior === r.options.emptyInputBehavior.null || (l = this.constructor._addGroupSeparators(o, this.settings, !1, t)), (l !== t || t === "" || // This make sure we get rid on any currency symbol or suffix that might have been added on focus
          this.settings.allowDecimalPadding === r.options.allowDecimalPadding.never || this.settings.allowDecimalPadding === r.options.allowDecimalPadding.floats) && (this.settings.symbolWhenUnfocused && t !== "" && t !== null && (l = `${l}${this.settings.symbolWhenUnfocused}`), this._setElementValue(l));
        }
        this._setValidOrInvalidState(this.rawValue), e.type === "blur" && this._onBlur(e);
      }
    }
  }
  /**
   * Handler for 'paste' event
   *
   * @param {Event|ClipboardEvent} e
   */
  _onPaste(e) {
    if (e.preventDefault(), this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled)
      return;
    let t;
    e.clipboardData && e.clipboardData.getData ? t = e.clipboardData.getData("text/plain") : i.throwError("Unable to retrieve the pasted value. Please use a modern browser (i.e. Firefox or Chromium).");
    let s;
    e.target.tagName ? s = e.target : s = e.explicitOriginalTarget;
    const a = i.getElementValue(s), n = s.selectionStart || 0, c = s.selectionEnd || 0, o = c - n;
    if (o === a.length) {
      const L = this._preparePastedText(t), O = i.arabicToLatinNumbers(L, !1, !1, !1);
      if (O === "." || O === "" || O !== "." && !i.isNumber(O)) {
        this.formatted = !0, this.settings.onInvalidPaste === r.options.onInvalidPaste.error && i.throwError(`The pasted value '${t}' is not a valid paste content.`);
        return;
      }
      this.set(O), this.formatted = !0, this._triggerEvent(r.events.native.input, s);
      return;
    }
    const l = i.isNegativeStrict(t, this.settings.negativeSignCharacter);
    l && (t = t.slice(1, t.length));
    const h = this._preparePastedText(t);
    let d;
    if (h === "." ? d = "." : d = i.arabicToLatinNumbers(h, !1, !1, !1), d !== "." && (!i.isNumber(d) || d === "")) {
      this.formatted = !0, this.settings.onInvalidPaste === r.options.onInvalidPaste.error && i.throwError(`The pasted value '${t}' is not a valid paste content.`);
      return;
    }
    let g, p = i.isNegativeStrict(this.getNumericString(), this.settings.negativeSignCharacter), y, v;
    l && !p ? (p = !0, y = !0) : y = !1;
    const E = a.slice(0, n), b = a.slice(c, a.length);
    n !== c ? v = this._preparePastedText(E + b) : v = this._preparePastedText(a), p && (v = i.setRawNegativeSign(v)), g = i.convertCharacterCountToIndexPosition(i.countNumberCharactersOnTheCaretLeftSide(a, n, this.settings.decimalCharacter)), y && g++;
    let S = v.slice(0, g), w = v.slice(g, v.length), P = !1;
    d === "." && (i.contains(S, ".") && (P = !0, S = S.replace(".", "")), w = w.replace(".", ""));
    let U = !1;
    switch (S === "" && w === "-" && (S = "-", w = "", U = !0), this.settings.onInvalidPaste) {
      case r.options.onInvalidPaste.truncate:
      case r.options.onInvalidPaste.replace:
        const L = i.parseStr(this.settings.minimumValue), O = i.parseStr(this.settings.maximumValue);
        let C = v, T = 0, Z = S;
        for (; T < d.length && (Z += d[T], v = Z + w, !!this.constructor._checkIfInRange(v, L, O)); )
          C = v, T++;
        if (g += T, U && g++, this.settings.onInvalidPaste === r.options.onInvalidPaste.truncate) {
          v = C, P && g--;
          break;
        }
        let A = g;
        const ce = C.length;
        for (; T < d.length && A < ce; ) {
          if (C[A] === ".") {
            A++;
            continue;
          }
          if (v = i.replaceCharAt(C, A, d[T]), !this.constructor._checkIfInRange(v, L, O))
            break;
          C = v, T++, A++;
        }
        g = A, P && g--, v = C;
        break;
      case r.options.onInvalidPaste.error:
      case r.options.onInvalidPaste.ignore:
      case r.options.onInvalidPaste.clamp:
      default:
        if (v = `${S}${d}${w}`, n === c)
          g = i.convertCharacterCountToIndexPosition(i.countNumberCharactersOnTheCaretLeftSide(a, n, this.settings.decimalCharacter)) + d.length;
        else if (w === "")
          g = i.convertCharacterCountToIndexPosition(i.countNumberCharactersOnTheCaretLeftSide(a, n, this.settings.decimalCharacter)) + d.length, U && g++;
        else {
          const q = i.convertCharacterCountToIndexPosition(i.countNumberCharactersOnTheCaretLeftSide(a, c, this.settings.decimalCharacter)), ue = i.getElementValue(s).slice(n, c);
          g = q - o + i.countCharInText(this.settings.digitGroupSeparator, ue) + d.length;
        }
        y && g++, P && g--;
    }
    if (!i.isNumber(v) || v === "") {
      this.settings.onInvalidPaste === r.options.onInvalidPaste.error && i.throwError(`The pasted value '${t}' would result into an invalid content '${v}'.`);
      return;
    }
    let _ = !1, j = !1;
    try {
      this.set(v), _ = !0;
    } catch {
      let O;
      switch (this.settings.onInvalidPaste) {
        case r.options.onInvalidPaste.clamp:
          O = i.clampToRangeLimits(v, this.settings);
          try {
            this.set(O);
          } catch {
            i.throwError(`Fatal error: Unable to set the clamped value '${O}'.`);
          }
          j = !0, _ = !0, v = O;
          break;
        case r.options.onInvalidPaste.error:
        case r.options.onInvalidPaste.truncate:
        case r.options.onInvalidPaste.replace:
          i.throwError(`The pasted value '${t}' results in a value '${v}' that is outside of the minimum [${this.settings.minimumValue}] and maximum [${this.settings.maximumValue}] value range.`);
        case r.options.onInvalidPaste.ignore:
        default:
          return;
      }
    }
    const D = i.getElementValue(s);
    let H;
    if (_)
      switch (this.settings.onInvalidPaste) {
        case r.options.onInvalidPaste.clamp:
          if (j) {
            this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix ? i.setElementSelection(s, D.length - this.settings.currencySymbol.length) : i.setElementSelection(s, D.length);
            break;
          }
        case r.options.onInvalidPaste.error:
        case r.options.onInvalidPaste.ignore:
        case r.options.onInvalidPaste.truncate:
        case r.options.onInvalidPaste.replace:
        default:
          H = i.findCaretPositionInFormattedNumber(v, g, D, this.settings.decimalCharacter), i.setElementSelection(s, H);
      }
    _ && a !== D && this._triggerEvent(r.events.native.input, s);
  }
  /**
   * When focusing out of the input, we check if the value has changed, and if it has, then we send a `change` event (since the native one would have been prevented by `e.preventDefault()` called in the other event listeners).
   * We also update the info of the focused state in the `this.isFocused` variable.
   *
   * @param {Event} e
   */
  _onBlur(e) {
    this.isFocused = !1, this.isEditing = !1, i.trimPaddedZerosFromDecimalPlaces(this.rawValue) !== i.trimPaddedZerosFromDecimalPlaces(this.rawValueOnFocus) && this._triggerEvent(r.events.native.change, e.target), this.rawValueOnFocus = void 0;
  }
  /**
   * Helper function that DRY the similar behaviors of the mousewheel and up/down arrow keys, which increment/decrement the element value, either by a fixed value, or using the 'progressive' heuristic
   *
   * @param {WheelEvent|KeyboardEvent} e The `wheel` or keyboard event
   * @param {boolean} isUp Defines if the event should increment the value
   * @param {boolean} isDown Defines if the event should decrement the value
   * @param {string|number} step The step to be applied to the increment/decrement action
   * @private
   */
  _wheelAndUpDownActions(e, t, s, a) {
    const n = e.target.selectionStart || 0, c = e.target.selectionEnd || 0, o = this.rawValue;
    let l;
    if (i.isUndefinedOrNullOrEmpty(o) ? this.settings.minimumValue > 0 || this.settings.maximumValue < 0 ? t ? l = this.settings.minimumValue : l = this.settings.maximumValue : l = 0 : l = o, l = +l, i.isNumber(a)) {
      const h = +a;
      t ? l += h : s && (l -= h);
    } else
      t ? l = i.addAndRoundToNearestAuto(l, this.settings.decimalPlacesRawValue) : s && (l = i.subtractAndRoundToNearestAuto(l, this.settings.decimalPlacesRawValue));
    l = i.clampToRangeLimits(l, this.settings), l !== +o && (this.set(l), this._triggerEvent(r.events.native.input, e.target)), e.preventDefault(), this._setSelection(n, c);
  }
  /**
   * Handler for up and down arrow keys
   * Increment or decrement the element value according to the `upDownStep` option chosen
   *
   * @param {KeyboardEvent} e
   */
  upDownArrowAction(e) {
    if (this.formulaMode || this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled)
      return;
    let t = !1, s = !1;
    this.eventKey === m.keyName.UpArrow ? t = !0 : this.eventKey === m.keyName.DownArrow ? s = !0 : i.throwError("Something has gone wrong since neither an Up or Down arrow key is detected, but the function was still called!"), this._wheelAndUpDownActions(e, t, s, this.settings.upDownStep);
  }
  /**
   * Handler for 'wheel' event
   *
   * @param {WheelEvent} e
   */
  _onWheel(e) {
    this.formulaMode || this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled || this.settings.modifyValueOnWheel && (this.settings.wheelOn === r.options.wheelOn.focus ? this.isFocused ? e.shiftKey || this.wheelAction(e) : e.shiftKey && this.wheelAction(e) : this.settings.wheelOn === r.options.wheelOn.hover ? e.shiftKey ? (e.preventDefault(), window.scrollBy(0, i.isNegativeStrict(String(e.deltaY)) ? -50 : 50)) : this.wheelAction(e) : i.throwError("Unknown `wheelOn` option."));
  }
  /**
   * Increment or decrement the element value according to the `wheelStep` option chosen
   *
   * @param {WheelEvent} e The `wheel` event
   */
  wheelAction(e) {
    this.isWheelEvent = !0;
    let t = !1, s = !1, a = !1;
    i.isWheelUpEvent(e) ? t = !0 : i.isWheelDownEvent(e) ? s = !0 : i.isWheelEventWithZeroDeltaY(e) ? a = !0 : i.throwError("The event is not a 'wheel' event."), a || this._wheelAndUpDownActions(e, t, s, this.settings.wheelStep), this.isWheelEvent = !1;
  }
  /**
   * Handler for 'drop' event
   *
   * @param {DragEvent} e
   */
  _onDrop(e) {
    if (this.formulaMode)
      return;
    this.isDropEvent = !0, e.preventDefault();
    const t = e.dataTransfer.getData("text/plain"), s = this.unformatOther(t), a = this.rawValue;
    this.set(s), this.isDropEvent = !1;
    const n = this.constructor._toNumericValue(s, this.settings);
    isNaN(Number(n)) || i.trimPaddedZerosFromDecimalPlaces(a) !== i.trimPaddedZerosFromDecimalPlaces(n) && this._triggerEvent(r.events.native.change, this.domElement);
  }
  /**
   * Handler for 'submit' events happening on the parent <form> element.
   * If `unformatOnSubmit` is set to `true`, the element value is first unformatted before the form is submitted.
   *
   * @returns {boolean}
   */
  _onFormSubmit() {
    return this._getFormAutoNumericChildren(this.parentForm).map((s) => this.constructor.getAutoNumericElement(s)).forEach((s) => s._unformatOnSubmit()), !0;
  }
  /**
   * Handler for 'reset' events caught on the parent <form> element.
   * When such event is detected, then every child AutoNumeric elements must format their default value that the browser is forcing upon them.
   *
   * @private
   */
  _onFormReset() {
    this._getFormAutoNumericChildren(this.parentForm).map((s) => this.constructor.getAutoNumericElement(s)).forEach((s) => {
      const a = this._getDefaultValue(s.node());
      setTimeout(() => s.set(a), 0);
    });
  }
  /**
   * Unformat the element value according to the `unformatOnSubmit` option
   *
   * @private
   */
  _unformatOnSubmit() {
    this.settings.unformatOnSubmit && this._setElementValue(this.rawValue);
  }
  /**
   * Listen for the `alt` key keydown event globally, and if the event is caught, unformat the AutoNumeric element that is hovered by the mouse.
   *
   * @param {KeyboardEvent} e
   * @private
   */
  _onKeydownGlobal(e) {
    if (i.character(e) === m.keyName.Alt) {
      const t = i.getHoveredElement();
      if (r.isManagedByAutoNumeric(t)) {
        const s = r.getAutoNumericElement(t);
        !s.formulaMode && s.settings.unformatOnHover && this.constructor._unformatAltHovered(s);
      }
    }
  }
  /**
   * Listen for the `alt` key keyup event globally, and if the event is caught, reformat the AutoNumeric element that is hovered by the mouse.
   *
   * @param {KeyboardEvent} e
   * @private
   */
  _onKeyupGlobal(e) {
    if (i.character(e) === m.keyName.Alt) {
      const t = i.getHoveredElement();
      if (r.isManagedByAutoNumeric(t)) {
        const s = r.getAutoNumericElement(t);
        if (s.formulaMode || !s.settings.unformatOnHover)
          return;
        this.constructor._reformatAltHovered(s);
      }
    }
  }
  /**
   * Return `true` if the DOM element is supported by autoNumeric.
   * A supported element is an element whitelisted in the `allowedTagList`.
   *
   * @returns {boolean}
   * @private
   */
  _isElementTagSupported() {
    return i.isElement(this.domElement) || i.throwError(`The DOM element is not valid, ${this.domElement} given.`), i.isInArray(this.domElement.tagName.toLowerCase(), this.allowedTagList);
  }
  /**
   * Return `true` in the DOM element is an <input>.
   *
   * @returns {boolean}
   * @private
   */
  _isInputElement() {
    return this.domElement.tagName.toLowerCase() === "input";
  }
  /**
   * Return `true` if the input type is supported by AutoNumeric
   *
   * @returns {boolean}
   * @throws
   */
  _isInputTypeSupported() {
    return this.domElement.type === "text" || this.domElement.type === "hidden" || this.domElement.type === "tel" || i.isUndefinedOrNullOrEmpty(this.domElement.type);
  }
  /**
   * Check if the DOM element is supported by autoNumeric.
   * A supported element is either an <input> element with the correct 'type' attribute, or a tag whitelisted in the `allowedTagList` array.
   * If the check fails, this method throws.
   * This function also sets the info `this.isInputElement` which keep tracks if the DOM element is an <input> or not, and the `this.isContentEditable` if the element has the `contenteditable` attribute set to `true` initially.
   *
   * @throws
   * @private
   */
  _checkElement() {
    const e = this.domElement.tagName.toLowerCase();
    this._isElementTagSupported() || i.throwError(`The <${e}> tag is not supported by autoNumeric`), this._isInputElement() ? (this._isInputTypeSupported() || i.throwError(`The input type "${this.domElement.type}" is not supported by autoNumeric`), this.isInputElement = !0) : (this.isInputElement = !1, this.isContentEditable = this._isContentEditable(this.domElement));
  }
  /**
   * Returns `true` if the given DOM element is a contenteditable one (set to `true`)
   *
   * @param {HTMLElement} domElement
   * @returns {boolean}
   */
  _isContentEditable(e) {
    return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") === "true";
  }
  /**
   * Formats the default value on page load.
   * This is called only if the `formatOnPageLoad` option is set to `true`.
   *
   * @param {number|string|null} forcedInitialValue The value that should be used for initialization, in place on the eventual html one
   */
  _formatDefaultValueOnPageLoad(e = null) {
    let t = !0, s;
    if (i.isNull(e) ? (s = i.getElementValue(this.domElement).trim(), this.domElement.setAttribute("value", s)) : s = e, this.isInputElement || this.isContentEditable) {
      const a = this.constructor._toNumericValue(s, this.settings);
      if (!this.domElement.hasAttribute("value") || this.domElement.getAttribute("value") === "")
        !isNaN(Number(a)) && a !== 1 / 0 ? (this.set(a), t = !1) : i.throwError(`The value [${s}] used in the input is not a valid value autoNumeric can work with.`);
      else if (this.settings.defaultValueOverride !== null && this.settings.defaultValueOverride.toString() !== s || this.settings.defaultValueOverride === null && s !== "" && s !== this.domElement.getAttribute("value") || s !== "" && this.domElement.getAttribute("type") === "hidden" && !i.isNumber(a)) {
        if (this.settings.saveValueToSessionStorage && (this.settings.decimalPlacesShownOnFocus !== null || this.settings.divisorWhenUnfocused) && this._setRawValue(this._getValueFromPersistentStorage()), !this.settings.saveValueToSessionStorage) {
          const n = this.constructor._removeBrackets(s, this.settings);
          (this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix) && this.settings.negativeSignCharacter !== "" && i.isNegative(s, this.settings.negativeSignCharacter) ? this._setRawValue(`-${this.constructor._stripAllNonNumberCharacters(n, this.settings, !0, this.isFocused)}`) : this._setRawValue(this.constructor._stripAllNonNumberCharacters(n, this.settings, !0, this.isFocused));
        }
        t = !1;
      }
      if (s === "")
        switch (this.settings.emptyInputBehavior) {
          case r.options.emptyInputBehavior.focus:
          case r.options.emptyInputBehavior.press:
            break;
          case r.options.emptyInputBehavior.always:
            this._setElementValue(this.settings.currencySymbol);
            break;
          case r.options.emptyInputBehavior.min:
            this.set(this.settings.minimumValue);
            break;
          case r.options.emptyInputBehavior.max:
            this.set(this.settings.maximumValue);
            break;
          case r.options.emptyInputBehavior.zero:
            this.set("0");
            break;
          case r.options.emptyInputBehavior.null:
            this.set(null);
            break;
          default:
            this.set(this.settings.emptyInputBehavior);
        }
      else
        t && s === this.domElement.getAttribute("value") && this.set(s);
    } else
      (this.settings.defaultValueOverride === null || this.settings.defaultValueOverride === s) && this.set(s);
  }
  /**
   * Enhance the user experience by modifying the default `negativePositiveSignPlacement` option depending on `currencySymbol` and `currencySymbolPlacement`.
   *
   * If the user has not set the placement of the negative sign (`negativePositiveSignPlacement`), but has set a currency symbol (`currencySymbol`),
   * then we modify the default value of `negativePositiveSignPlacement` in order to keep the resulting output logical by default :
   * - "$-1,234.56" instead of "-$1,234.56" ({currencySymbol: "$", negativePositiveSignPlacement: "r"})
   * - "-1,234.56$" instead of "1,234.56-$" ({currencySymbol: "$", currencySymbolPlacement: "s", negativePositiveSignPlacement: "p"})
   *
   * @param {object} settings
   */
  static _correctNegativePositiveSignPlacementOption(e) {
    if (i.isNull(e.negativePositiveSignPlacement))
      if (!i.isUndefined(e) && i.isUndefinedOrNullOrEmpty(e.negativePositiveSignPlacement) && !i.isUndefinedOrNullOrEmpty(e.currencySymbol))
        switch (e.currencySymbolPlacement) {
          case r.options.currencySymbolPlacement.suffix:
            e.negativePositiveSignPlacement = r.options.negativePositiveSignPlacement.prefix;
            break;
          case r.options.currencySymbolPlacement.prefix:
            e.negativePositiveSignPlacement = r.options.negativePositiveSignPlacement.left;
            break;
        }
      else
        e.negativePositiveSignPlacement = r.options.negativePositiveSignPlacement.left;
  }
  /**
   * Correct the `caretPositionOnFocus` and `selectOnFocus` options, since setting both leads to a conflict.
   * This method directly modifies the `options` object passed as a parameter, then returns it.
   * It returns `null` if the given option is `null`.
   *
   * @param {object} options The options passed as an argument by the user
   * @returns {object|null}
   * @private
   */
  static _correctCaretPositionOnFocusAndSelectOnFocusOptions(e) {
    return i.isNull(e) ? null : (!i.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && i.isUndefinedOrNullOrEmpty(e.selectOnFocus) && (e.selectOnFocus = r.options.selectOnFocus.doNotSelect), i.isUndefinedOrNullOrEmpty(e.caretPositionOnFocus) && !i.isUndefinedOrNullOrEmpty(e.selectOnFocus) && e.selectOnFocus === r.options.selectOnFocus.select && (e.caretPositionOnFocus = r.options.caretPositionOnFocus.doNoForceCaretPosition), e);
  }
  /**
   * Calculate the number de decimal places to be used by the AutoNumeric object, for each of its state, and for its formatted and raw value.
   * By default, the `rawValue` precision is the same as the formatted value one.
   *
   * This method is called during the AutoNumeric object initialization. This assumes some internal variable state.
   *
   * This method set the following options accordingly to their own value and the mandatory `decimalPlaces` option:
   * - decimalPlacesRawValue     (nullable)
   * - decimalPlacesShownOnBlur  (nullable)
   * - decimalPlacesShownOnFocus (nullable)
   *
   * Note: the `decimalPlaces` option is only used here and only serve to define those three previous options value.
   * AutoNumeric will then *only* use `decimalPlacesRawValue`, `decimalPlacesShownOnBlur` and `decimalPlacesShownOnFocus` from there.
   *
   * This method directly modifies the `settings` object passed as a parameter.
   *
   * @param {object} settings This is an object with the new settings to use.
   * @private
   */
  static _calculateDecimalPlacesOnInit(e) {
    this._validateDecimalPlacesRawValue(e), e.decimalPlacesShownOnFocus === r.options.decimalPlacesShownOnFocus.useDefault && (e.decimalPlacesShownOnFocus = e.decimalPlaces), e.decimalPlacesShownOnBlur === r.options.decimalPlacesShownOnBlur.useDefault && (e.decimalPlacesShownOnBlur = e.decimalPlaces), e.decimalPlacesRawValue === r.options.decimalPlacesRawValue.useDefault && (e.decimalPlacesRawValue = e.decimalPlaces);
    let t = 0;
    e.rawValueDivisor && e.rawValueDivisor !== r.options.rawValueDivisor.none && (t = String(e.rawValueDivisor).length - 1, t < 0 && (t = 0)), e.decimalPlacesRawValue = Math.max(
      Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + t,
      Number(e.originalDecimalPlacesRawValue) + t
    );
  }
  /**
   * Recalculate the number de decimal places to be used by the AutoNumeric object, for each of its state, and for its formatted and raw value.
   * By default, the `rawValue` precision is the same as the formatted value one.
   *
   * This method is close to the one called during initialization, `_calculateDecimalPlacesOnInit()`, but with slight difference so that the `decimalPlaces*` options are correctly updated as needed.
   *
   * This methods set the following options accordingly to their own value and the mandatory `decimalPlaces` option:
   * - decimalPlacesRawValue     (nullable)
   * - decimalPlacesShownOnBlur  (nullable)
   * - decimalPlacesShownOnFocus (nullable)
   *
   * Note: the `decimalPlaces` option is only used here and only serve to define those three previous options value.
   * AutoNumeric will then *only* use `decimalPlacesRawValue`, `decimalPlacesShownOnBlur` and `decimalPlacesShownOnFocus` from there.
   *
   * This methods directly modifies the `settings` object passed as a parameter.
   *
   * @param {object} settings This is an object with the new settings to use.
   * @param {object} currentSettings This is the current settings (`this.settings`) used by the element.
   * @private
   */
  static _calculateDecimalPlacesOnUpdate(e, t = null) {
    this._validateDecimalPlacesRawValue(e), i.isNull(t) && i.throwError("When updating the settings, the previous ones should be passed as an argument.");
    const s = "decimalPlaces" in e;
    if (!(s || "decimalPlacesRawValue" in e || "decimalPlacesShownOnFocus" in e || "decimalPlacesShownOnBlur" in e || "rawValueDivisor" in e))
      return;
    s ? ((!("decimalPlacesShownOnFocus" in e) || e.decimalPlacesShownOnFocus === r.options.decimalPlacesShownOnFocus.useDefault) && (e.decimalPlacesShownOnFocus = e.decimalPlaces), (!("decimalPlacesShownOnBlur" in e) || e.decimalPlacesShownOnBlur === r.options.decimalPlacesShownOnBlur.useDefault) && (e.decimalPlacesShownOnBlur = e.decimalPlaces), (!("decimalPlacesRawValue" in e) || e.decimalPlacesRawValue === r.options.decimalPlacesRawValue.useDefault) && (e.decimalPlacesRawValue = e.decimalPlaces)) : (i.isUndefined(e.decimalPlacesShownOnFocus) && (e.decimalPlacesShownOnFocus = t.decimalPlacesShownOnFocus), i.isUndefined(e.decimalPlacesShownOnBlur) && (e.decimalPlacesShownOnBlur = t.decimalPlacesShownOnBlur));
    let a = 0;
    e.rawValueDivisor && e.rawValueDivisor !== r.options.rawValueDivisor.none && (a = String(e.rawValueDivisor).length - 1, a < 0 && (a = 0)), !e.decimalPlaces && !e.decimalPlacesRawValue ? e.decimalPlacesRawValue = Math.max(
      Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + a,
      Number(t.originalDecimalPlacesRawValue) + a
    ) : e.decimalPlacesRawValue = Math.max(
      Math.max(e.decimalPlacesShownOnBlur, e.decimalPlacesShownOnFocus) + a,
      Number(e.decimalPlacesRawValue) + a
    );
  }
  /**
   * Analyze and save the minimumValue and maximumValue integer size for later uses
   * @private
   */
  _calculateVMinAndVMaxIntegerSizes() {
    let [e] = this.settings.maximumValue.toString().split("."), [t] = !this.settings.minimumValue && this.settings.minimumValue !== 0 ? [] : this.settings.minimumValue.toString().split(".");
    e = e.replace(this.settings.negativeSignCharacter, ""), t = t.replace(this.settings.negativeSignCharacter, ""), this.settings.mIntPos = Math.max(e.length, 1), this.settings.mIntNeg = Math.max(t.length, 1);
  }
  /**
   * Calculate once what are the `valuesToStrings` option keys.
   * @private
   */
  _calculateValuesToStringsKeys() {
    this.settings.valuesToStrings ? this.valuesToStringsKeys = Object.keys(this.settings.valuesToStrings) : this.valuesToStringsKeys = [];
  }
  /**
   * Caches regular expressions for _stripAllNonNumberCharactersExceptCustomDecimalChar
   *
   * @param {object} settings
   * @param {object} regex
   */
  static _cachesUsualRegularExpressions(e, t) {
    let s;
    e.negativeSignCharacter !== r.options.negativeSignCharacter.hyphen ? s = `([-\\${e.negativeSignCharacter}]?)` : s = "(-?)", t.aNegRegAutoStrip = s, e.allowedAutoStrip = new RegExp(`[^-0123456789\\${e.decimalCharacter}]`, "g"), e.numRegAutoStrip = new RegExp(`${s}(?:\\${e.decimalCharacter}?([0-9]+\\${e.decimalCharacter}[0-9]+)|([0-9]*(?:\\${e.decimalCharacter}[0-9]*)?))`), e.stripReg = new RegExp(`^${t.aNegRegAutoStrip}0*([0-9])`), e.formulaChars = new RegExp(`[0-9${e.decimalCharacter}+\\-*/() ]`);
  }
  /**
   * Modify the user settings to make them 'exploitable' later.
   */
  _transformOptionsValuesToDefaultTypes() {
    for (const e in this.settings)
      if (Object.prototype.hasOwnProperty.call(this.settings, e)) {
        const t = this.settings[e];
        (t === "true" || t === "false") && (this.settings[e] = t === "true"), typeof t == "number" && (this.settings[e] = t.toString());
      }
  }
  /**
   * Convert the old settings options name to new ones.
   *
   * @param {object} options
   */
  static _convertOldOptionsToNewOnes(e) {
    const t = {
      // Old option names, with their corresponding new names
      aSep: "digitGroupSeparator",
      nSep: "showOnlyNumbersOnFocus",
      dGroup: "digitalGroupSpacing",
      aDec: "decimalCharacter",
      altDec: "decimalCharacterAlternative",
      aSign: "currencySymbol",
      pSign: "currencySymbolPlacement",
      pNeg: "negativePositiveSignPlacement",
      aSuffix: "suffixText",
      oLimits: "overrideMinMaxLimits",
      vMax: "maximumValue",
      vMin: "minimumValue",
      mDec: "decimalPlacesOverride",
      eDec: "decimalPlacesShownOnFocus",
      scaleDecimal: "decimalPlacesShownOnBlur",
      aStor: "saveValueToSessionStorage",
      mRound: "roundingMethod",
      aPad: "allowDecimalPadding",
      nBracket: "negativeBracketsTypeOnBlur",
      wEmpty: "emptyInputBehavior",
      lZero: "leadingZero",
      aForm: "formatOnPageLoad",
      sNumber: "selectNumberOnly",
      anDefault: "defaultValueOverride",
      unSetOnSubmit: "unformatOnSubmit",
      outputType: "outputFormat",
      debug: "showWarnings",
      // Current options :
      allowDecimalPadding: !0,
      alwaysAllowDecimalCharacter: !0,
      caretPositionOnFocus: !0,
      createLocalList: !0,
      currencySymbol: !0,
      currencySymbolPlacement: !0,
      decimalCharacter: !0,
      decimalCharacterAlternative: !0,
      decimalPlaces: !0,
      decimalPlacesRawValue: !0,
      decimalPlacesShownOnBlur: !0,
      decimalPlacesShownOnFocus: !0,
      defaultValueOverride: !0,
      digitalGroupSpacing: !0,
      digitGroupSeparator: !0,
      divisorWhenUnfocused: !0,
      emptyInputBehavior: !0,
      eventBubbles: !0,
      eventIsCancelable: !0,
      failOnUnknownOption: !0,
      formatOnPageLoad: !0,
      formulaMode: !0,
      historySize: !0,
      isCancellable: !0,
      leadingZero: !0,
      maximumValue: !0,
      minimumValue: !0,
      modifyValueOnUpDownArrow: !0,
      modifyValueOnWheel: !0,
      negativeBracketsTypeOnBlur: !0,
      negativePositiveSignPlacement: !0,
      negativeSignCharacter: !0,
      negativePositiveSignBehavior: !0,
      noEventListeners: !0,
      onInvalidPaste: !0,
      outputFormat: !0,
      overrideMinMaxLimits: !0,
      positiveSignCharacter: !0,
      rawValueDivisor: !0,
      readOnly: !0,
      roundingMethod: !0,
      saveValueToSessionStorage: !0,
      selectNumberOnly: !0,
      selectOnFocus: !0,
      serializeSpaces: !0,
      showOnlyNumbersOnFocus: !0,
      showPositiveSign: !0,
      showWarnings: !0,
      styleRules: !0,
      suffixText: !0,
      symbolWhenUnfocused: !0,
      upDownStep: !0,
      unformatOnHover: !0,
      unformatOnSubmit: !0,
      valuesToStrings: !0,
      watchExternalChanges: !0,
      wheelOn: !0,
      wheelStep: !0,
      // Additional information that are added to the `settings` object :
      //TODO Find a way to exclude those internal data from the settings object (ideally by using another object, or better yet, class attributes) -->
      allowedAutoStrip: !0,
      formulaChars: !0,
      isNegativeSignAllowed: !0,
      isPositiveSignAllowed: !0,
      mIntNeg: !0,
      mIntPos: !0,
      numRegAutoStrip: !0,
      originalDecimalPlaces: !0,
      originalDecimalPlacesRawValue: !0,
      stripReg: !0
    };
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s)) {
        if (t[s] === !0)
          continue;
        Object.prototype.hasOwnProperty.call(t, s) ? (i.warning(`You are using the deprecated option name '${s}'. Please use '${t[s]}' instead from now on. The old option name will be dropped very soon™.`, !0), e[t[s]] = e[s], delete e[s]) : e.failOnUnknownOption && i.throwError(`Option name '${s}' is unknown. Please fix the options passed to autoNumeric`);
      }
    "mDec" in e && i.warning("The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.", !0);
  }
  /**
   * Analyse the settings/options passed by the user, validate and clean them, then set them into `this.settings`.
   * Note: This sets the settings to `null` if somehow the settings objet is undefined or empty
   *       If only `decimalPlaces` is defined in the option, overwrite the other decimalPlaces* options, otherwise, use those options
   *
   * @param {object} options
   * @param {boolean} update - If set to `true`, then the settings already exists and this function only updates them instead of recreating them from scratch
   * @throws
   */
  _setSettings(e, t = !1) {
    (t || !i.isNull(e)) && this.constructor._convertOldOptionsToNewOnes(e), t ? ("decimalPlacesRawValue" in e && (this.settings.originalDecimalPlacesRawValue = e.decimalPlacesRawValue), "decimalPlaces" in e && (this.settings.originalDecimalPlaces = e.decimalPlaces), this.constructor._calculateDecimalPlacesOnUpdate(e, this.settings), this._mergeSettings(e)) : (this.settings = {}, this._mergeSettings(this.constructor.getDefaultConfig(), this.domElement.dataset, e, { rawValue: this.defaultRawValue }), this.caretFix = !1, this.throwInput = !0, this.allowedTagList = m.allowedTagList, this.runOnce = !1, this.hoveredWithAlt = !1), this._transformOptionsValuesToDefaultTypes(), this._runCallbacksFoundInTheSettingsObject(), this.constructor._correctNegativePositiveSignPlacementOption(this.settings), this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(this.settings), this.constructor._setNegativePositiveSignPermissions(this.settings), t || (i.isNull(e) || !e.decimalPlaces ? this.settings.originalDecimalPlaces = null : this.settings.originalDecimalPlaces = e.decimalPlaces, this.settings.originalDecimalPlacesRawValue = this.settings.decimalPlacesRawValue, this.constructor._calculateDecimalPlacesOnInit(this.settings)), this._calculateVMinAndVMaxIntegerSizes(), this._setTrailingNegativeSignInfo(), this.regex = {}, this.constructor._cachesUsualRegularExpressions(this.settings, this.regex), this.constructor._setBrackets(this.settings), this._calculateValuesToStringsKeys(), i.isEmptyObj(this.settings) && i.throwError("Unable to set the settings, those are invalid ; an empty object was given."), this.constructor.validate(this.settings, !1, e), this._keepAnOriginalSettingsCopy();
  }
  /**
   * Define if the negative or positive signs are allowed, and update the given settings object directly.
   *
   * @param {object} settings
   * @private
   */
  static _setNegativePositiveSignPermissions(e) {
    e.isNegativeSignAllowed = e.minimumValue < 0, e.isPositiveSignAllowed = e.maximumValue >= 0;
  }
  /**
   * Convert the `value` parameter that can either be :
   * - a real number,
   * - a number represented in the scientific notation (i.e. -123.4567e-6)
   * - a string representing a real number, or
   * - a string representing a localized number (with specific group separators and decimal character),
   * ...to a string representing a real 'javascript' number (i.e. '1234' or '1234.567').
   *
   * This function returns `NaN` if such conversion fails.
   *
   * @param {int|float|string} value
   * @param {object} settings
   * @returns {string|NaN}
   */
  static _toNumericValue(e, t) {
    let s;
    return i.isNumber(Number(e)) ? (i.isNumberStrict(e) || (e = String(e).trim()), s = i.scientificToDecimal(e)) : (s = this._convertToNumericString(e.toString(), t), i.isNumber(Number(s)) || (i.warning(`The given value "${e}" cannot be converted to a numeric one and therefore cannot be used appropriately.`, t.showWarnings), s = NaN)), s;
  }
  /**
   * Return the pasted text that will be used, by stripping most non-numeric characters
   *
   * @param {string} text
   * @returns {string}
   */
  _preparePastedText(e) {
    return this.constructor._stripAllNonNumberCharacters(e, this.settings, !0, this.isFocused);
  }
  /**
   * Return TRUE if the given value (a number as a string) is within the range set in the settings `minimumValue` and `maximumValue`, FALSE otherwise.
   *
   * @param {string} value
   * @param {object} parsedMinValue Parsed via the `parseStr()` function
   * @param {object} parsedMaxValue Parsed via the `parseStr()` function
   * @returns {boolean}
   */
  static _checkIfInRange(e, t, s) {
    const a = i.parseStr(e);
    return i.testMinMax(t, a) > -1 && i.testMinMax(s, a) < 1;
  }
  /**
   * Update the selection values as well as resets the internal state of the current AutoNumeric object.
   * This keeps tracks of the current selection and resets the 'processed' state.
   *
   * Note : This state can change between the keydown, keypress and keyup events, that's why
   *        this function is called on each event handler.
   *
   * @private
   */
  _updateInternalProperties() {
    this.selection = i.getElementSelection(this.domElement), this.processed = !1;
  }
  /**
   * Update the `event.key` attribute that triggered the given event.
   *
   * `event.key` describes:
   * - the key name (if a non-printable character),
   * - or directly the character that result from the key press used to trigger the event.
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
   * The key list is described here:
   * @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
   *
   * @param {Event|KeyboardEvent} e
   * @private
   */
  _updateEventKeyInfo(e) {
    this.eventKey = i.character(e);
  }
  /**
   * Save the unformatted element value.
   * This is used in the 'cancellable' feature where the element value is saved on focus and input validation, to be used if the user wants to cancel his modifications by hitting the 'Escape' key.
   *
   * @private
   */
  _saveCancellableValue() {
    this.savedCancellableValue = this.rawValue;
  }
  /**
   * Set the text selection inside the input with the given start and end position.
   *
   * @param {int} start
   * @param {int} end
   * @private
   */
  _setSelection(e, t) {
    e = Math.max(e, 0), t = Math.min(t, i.getElementValue(this.domElement).length), this.selection = {
      start: e,
      end: t,
      length: t - e
    }, i.setElementSelection(this.domElement, e, t);
  }
  /**
   * Set the caret position inside the input at the given position.
   *
   * @param {int} position
   * @private
   */
  _setCaretPosition(e) {
    this._setSelection(e, e);
  }
  /**
   * Return an array containing the string parts located on the left and right side of the caret or selection.
   * Those parts are left 'untouched', i.e. formatted by autoNumeric.
   *
   * @returns {[string, string]} The parts on the left and right of the caret or selection
   * @private
   */
  _getLeftAndRightPartAroundTheSelection() {
    const e = i.getElementValue(this.domElement), t = e.substring(0, this.selection.start), s = e.substring(this.selection.end, e.length);
    return [t, s];
  }
  /**
   * Return an array containing the string parts located on the left and right side of the caret or selection.
   * Those parts are unformatted (stripped) of any non-numbers characters, and any trailing negative character is put back on the left hand side of the number.
   *
   * @returns {[string, string]} The parts on the left and right of the caret or selection, unformatted.
   * @private
   */
  _getUnformattedLeftAndRightPartAroundTheSelection() {
    let [e, t] = this._getLeftAndRightPartAroundTheSelection();
    if (e === "" && t === "")
      return ["", ""];
    let s = !0;
    return (this.eventKey === m.keyName.Hyphen || this.eventKey === m.keyName.Minus) && Number(e) === 0 && (s = !1), this.isTrailingNegative && (i.isNegative(t, this.settings.negativeSignCharacter) && // The caret is placed on the left of the negative sign
    !i.isNegative(e, this.settings.negativeSignCharacter) || t === "" && // ...or the caret is placed on the far right of the input (Fix issue #481)
    i.isNegative(e, this.settings.negativeSignCharacter, !0)) && (e = e.replace(this.settings.negativeSignCharacter, ""), t = t.replace(this.settings.negativeSignCharacter, ""), e = e.replace("-", ""), t = t.replace("-", ""), e = `-${e}`), e = r._stripAllNonNumberCharactersExceptCustomDecimalChar(e, this.settings, s, this.isFocused), t = r._stripAllNonNumberCharactersExceptCustomDecimalChar(t, this.settings, !1, this.isFocused), [e, t];
  }
  /**
   * Strip parts from excess characters and leading zeros.
   *
   * @param {string} left
   * @param {string} right
   * @returns {[*,*,*]}
   * @private
   */
  _normalizeParts(e, t) {
    let s = !0;
    (this.eventKey === m.keyName.Hyphen || this.eventKey === m.keyName.Minus) && Number(e) === 0 && (s = !1), this.isTrailingNegative && i.isNegative(t, this.settings.negativeSignCharacter) && !i.isNegative(e, this.settings.negativeSignCharacter) && (e = `-${e}`, t = t.replace(this.settings.negativeSignCharacter, "")), e = r._stripAllNonNumberCharactersExceptCustomDecimalChar(e, this.settings, s, this.isFocused), t = r._stripAllNonNumberCharactersExceptCustomDecimalChar(t, this.settings, !1, this.isFocused), this.settings.leadingZero === r.options.leadingZero.deny && (this.eventKey === m.keyName.num0 || this.eventKey === m.keyName.numpad0) && Number(e) === 0 && // If `right` is not empty and the first character is not `decimalCharacter`
    !i.contains(e, this.settings.decimalCharacter) && t !== "" && (e = e.substring(0, e.length - 1));
    let a = e + t;
    if (this.settings.decimalCharacter) {
      const n = a.match(new RegExp(`^${this.regex.aNegRegAutoStrip}\\${this.settings.decimalCharacter}`));
      n && (e = e.replace(n[1], n[1] + "0"), a = e + t);
    }
    return [e, t, a];
  }
  /**
   * Set the formatted element value as well as the `rawValue`.
   * This returns `true` if the element and raw value have been modified, `false` otherwise.
   * This method also adjust the caret position according to the `leadingZero` option and the normalized value. //TODO What about the cursor *selection*?
   *
   * @param {string} left
   * @param {string} right
   * @param {boolean} isPaste
   * @returns {boolean}
   * @private
   */
  _setValueParts(e, t, s = !1) {
    const [a, n, c] = this._normalizeParts(e, t), [o, l] = r._checkIfInRangeWithOverrideOption(c, this.settings);
    if (o && l) {
      const d = r._truncateDecimalPlaces(c, this.settings, s, this.settings.decimalPlacesRawValue).replace(this.settings.decimalCharacter, ".");
      if (d === "" || d === this.settings.negativeSignCharacter) {
        let y;
        switch (this.settings.emptyInputBehavior) {
          case r.options.emptyInputBehavior.focus:
          case r.options.emptyInputBehavior.press:
          case r.options.emptyInputBehavior.always:
            y = "";
            break;
          case r.options.emptyInputBehavior.min:
            y = this.settings.minimumValue;
            break;
          case r.options.emptyInputBehavior.max:
            y = this.settings.maximumValue;
            break;
          case r.options.emptyInputBehavior.zero:
            y = "0";
            break;
          case r.options.emptyInputBehavior.null:
            y = null;
            break;
          default:
            y = this.settings.emptyInputBehavior;
        }
        this._setRawValue(y);
      } else
        this._setRawValue(this._trimLeadingAndTrailingZeros(d));
      const g = r._truncateDecimalPlaces(c, this.settings, s, this.settings.decimalPlacesShownOnFocus);
      let p = a.length;
      return p > g.length && (p = g.length), p === 1 && a === "0" && this.settings.leadingZero === r.options.leadingZero.deny && (n === "" || a === "0" && n !== "" ? p = 1 : p = 0), this._setElementValue(g, !1), this._setCaretPosition(p), !0;
    }
    return this._triggerRangeEvents(o, l), !1;
  }
  /**
   * Helper function for `_expandSelectionOnSign()`.
   *
   * @returns {Array} Array containing [signPosition, currencySymbolPosition] of a formatted value
   * @private
   */
  _getSignPosition() {
    let e;
    if (this.settings.currencySymbol) {
      const t = this.settings.currencySymbol.length, s = i.getElementValue(this.domElement);
      if (this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix)
        this.settings.negativeSignCharacter && s && s.charAt(0) === this.settings.negativeSignCharacter ? e = [1, t + 1] : e = [0, t];
      else {
        const a = s.length;
        e = [a - t, a];
      }
    } else
      e = [1e3, -1];
    return e;
  }
  /**
   * Expands selection to cover whole sign
   * Prevents partial deletion/copying/overwriting of a sign
   * @private
   */
  _expandSelectionOnSign() {
    const [e, t] = this._getSignPosition(), s = this.selection;
    s.start < t && s.end > e && ((s.start < e || s.end > t) && i.getElementValue(this.domElement).substring(Math.max(s.start, e), Math.min(s.end, t)).match(/^\s*$/) ? s.start < e ? this._setSelection(s.start, e) : this._setSelection(t, s.end) : this._setSelection(Math.min(s.start, e), Math.max(s.end, t)));
  }
  /**
   * Try to strip pasted value to digits
   */
  _checkPaste() {
    if (!this.formatted && !i.isUndefined(this.valuePartsBeforePaste)) {
      const e = this.valuePartsBeforePaste, [t, s] = this._getLeftAndRightPartAroundTheSelection();
      delete this.valuePartsBeforePaste;
      const a = t.substr(0, e[0].length) + r._stripAllNonNumberCharactersExceptCustomDecimalChar(t.substr(e[0].length), this.settings, !0, this.isFocused);
      this._setValueParts(a, s, !0) || (this._setElementValue(e.join(""), !1), this._setCaretPosition(e[0].length));
    }
  }
  /**
   * Return `true` if the given key should be ignored or not.
   *
   * @param {string} eventKeyName
   * @returns {boolean}
   * @private
   */
  static _shouldSkipEventKey(e) {
    const t = i.isInArray(e, m.keyName._allFnKeys), s = e === m.keyName.OSLeft || e === m.keyName.OSRight, a = e === m.keyName.ContextMenu, n = i.isInArray(e, m.keyName._someNonPrintableKeys), c = e === m.keyName.NumLock || e === m.keyName.ScrollLock || e === m.keyName.Insert || e === m.keyName.Command, o = e === m.keyName.Unidentified;
    return t || s || a || n || o || c;
  }
  /**
   * Process copying, cutting and pasting, as well as undo/redoing and cursor moving.
   * Return `true` if further processing should not be performed.
   *
   * @param {KeyboardEvent} e
   * @returns {boolean}
   * @private
   */
  _processNonPrintableKeysAndShortcuts(e) {
    if ((e.ctrlKey || e.metaKey) && e.type === "keyup" && !i.isUndefined(this.valuePartsBeforePaste) || e.shiftKey && this.eventKey === m.keyName.Insert)
      return this._checkPaste(), !1;
    if (this.constructor._shouldSkipEventKey(this.eventKey))
      return !0;
    if ((e.ctrlKey || e.metaKey) && this.eventKey === m.keyName.a)
      return this.settings.selectNumberOnly && (e.preventDefault(), this.selectNumber()), !0;
    if ((e.ctrlKey || e.metaKey) && (this.eventKey === m.keyName.c || this.eventKey === m.keyName.v || this.eventKey === m.keyName.x))
      return e.type === "keydown" && this._expandSelectionOnSign(), (this.eventKey === m.keyName.v || this.eventKey === m.keyName.Insert) && (e.type === "keydown" || e.type === "keypress" ? i.isUndefined(this.valuePartsBeforePaste) && (this.valuePartsBeforePaste = this._getLeftAndRightPartAroundTheSelection()) : this._checkPaste()), e.type === "keydown" || e.type === "keypress" || this.eventKey === m.keyName.c;
    if (e.ctrlKey || e.metaKey)
      return !(this.eventKey === m.keyName.Z || this.eventKey === m.keyName.z);
    if (this.eventKey === m.keyName.LeftArrow || this.eventKey === m.keyName.RightArrow) {
      if (e.type === "keydown" && !e.shiftKey) {
        const t = i.getElementValue(this.domElement);
        this.eventKey === m.keyName.LeftArrow && (t.charAt(this.selection.start - 2) === this.settings.digitGroupSeparator || t.charAt(this.selection.start - 2) === this.settings.decimalCharacter) ? this._setCaretPosition(this.selection.start - 1) : this.eventKey === m.keyName.RightArrow && (t.charAt(this.selection.start + 1) === this.settings.digitGroupSeparator || t.charAt(this.selection.start + 1) === this.settings.decimalCharacter) && this._setCaretPosition(this.selection.start + 1);
      }
      return !0;
    }
    return i.isInArray(this.eventKey, m.keyName._directionKeys);
  }
  /**
   * Process deletion of characters when the minus sign is to the right of the numeric characters.
   *
   * @param {string[]} leftAndRight The parts on the left and on the right of the caret or selection as an array with [left, right]
   * @returns {string[]} Processed left and right as an array with [left, right]
   * @private
   */
  _processCharacterDeletionIfTrailingNegativeSign([e, t]) {
    const s = i.getElementValue(this.domElement), a = i.isNegative(s, this.settings.negativeSignCharacter);
    if (this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.suffix && (this.eventKey === m.keyName.Backspace ? (this.caretFix = this.selection.start >= s.indexOf(this.settings.suffixText) && this.settings.suffixText !== "", s.charAt(this.selection.start - 1) === "-" ? e = e.substring(1) : this.selection.start <= s.length - this.settings.suffixText.length && (e = e.substring(0, e.length - 1))) : (this.caretFix = this.selection.start >= s.indexOf(this.settings.suffixText) && this.settings.suffixText !== "", this.selection.start >= s.indexOf(this.settings.currencySymbol) + this.settings.currencySymbol.length && (t = t.substring(1, t.length)), i.isNegative(e, this.settings.negativeSignCharacter) && s.charAt(this.selection.start) === "-" && (e = e.substring(1)))), this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix)
      switch (this.settings.negativePositiveSignPlacement) {
        case r.options.negativePositiveSignPlacement.left:
          this.caretFix = this.selection.start >= s.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === m.keyName.Backspace ? this.selection.start === s.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length && a ? e = e.substring(1) : e !== "-" && (this.selection.start <= s.indexOf(this.settings.negativeSignCharacter) || !a) && (e = e.substring(0, e.length - 1)) : (e[0] === "-" && (t = t.substring(1)), this.selection.start === s.indexOf(this.settings.negativeSignCharacter) && a && (e = e.substring(1)));
          break;
        case r.options.negativePositiveSignPlacement.right:
          this.caretFix = this.selection.start >= s.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === m.keyName.Backspace ? this.selection.start === s.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length ? e = e.substring(1) : (e !== "-" && this.selection.start <= s.indexOf(this.settings.negativeSignCharacter) - this.settings.currencySymbol.length || e !== "" && !a) && (e = e.substring(0, e.length - 1)) : (this.caretFix = this.selection.start >= s.indexOf(this.settings.currencySymbol) && this.settings.currencySymbol !== "", this.selection.start === s.indexOf(this.settings.negativeSignCharacter) && (e = e.substring(1)), t = t.substring(1));
          break;
      }
    return [e, t];
  }
  /**
   * Process the deletion of characters.
   * Returns `true` if the deletion is allowed (within the min and max range, according to the `overrideMinMaxLimits` option), `false` otherwise.
   *
   * @param {Event} e
   * @returns {boolean}
   */
  _processCharacterDeletion(e) {
    let t, s;
    return this.selection.length ? (this._expandSelectionOnSign(), [t, s] = this._getUnformattedLeftAndRightPartAroundTheSelection()) : ([t, s] = this._getUnformattedLeftAndRightPartAroundTheSelection(), t === "" && s === "" && (this.throwInput = !1), this.isTrailingNegative && i.isNegative(i.getElementValue(this.domElement), this.settings.negativeSignCharacter) ? [t, s] = this._processCharacterDeletionIfTrailingNegativeSign([t, s]) : this.eventKey === m.keyName.Backspace ? t = t.substring(0, t.length - 1) : s = s.substring(1, s.length)), !this.constructor._isWithinRangeWithOverrideOption(`${t}${s}`, this.settings) || i.getElementValue(e.target) === this.settings.currencySymbol ? !1 : (this._setValueParts(t, s), !0);
  }
  /**
   * Return `true` if a decimal character is allowed to be typed.
   * If the number of decimal places shown on focus is zero, then the decimal character is not allowed.
   *
   * @returns {boolean}
   * @private
   */
  _isDecimalCharacterInsertionAllowed() {
    return String(this.settings.decimalPlacesShownOnFocus) !== String(r.options.decimalPlacesShownOnFocus.none) && String(this.settings.decimalPlaces) !== String(r.options.decimalPlaces.none);
  }
  /**
   * Return `true` if the key is allowed.
   * This function decides if the key pressed should be dropped or accepted, and modify the value 'on-the-fly' accordingly.
   * //TODO This should use another function in order to separate the test and the modification
   *
   * @returns {boolean}
   */
  _processCharacterInsertion() {
    let [e, t] = this._getUnformattedLeftAndRightPartAroundTheSelection();
    if (this.eventKey !== m.keyName.AndroidDefault && (this.throwInput = !0), this.eventKey === this.settings.decimalCharacter || this.settings.decimalCharacterAlternative && this.eventKey === this.settings.decimalCharacterAlternative) {
      if (!this._isDecimalCharacterInsertionAllowed() || !this.settings.decimalCharacter)
        return !1;
      if (this.settings.alwaysAllowDecimalCharacter)
        e = e.replace(this.settings.decimalCharacter, ""), t = t.replace(this.settings.decimalCharacter, "");
      else {
        if (i.contains(e, this.settings.decimalCharacter) || t.indexOf(this.settings.decimalCharacter) > 0)
          return !0;
        t.indexOf(this.settings.decimalCharacter) === 0 && (t = t.substr(1));
      }
      return this.settings.negativeSignCharacter && i.contains(t, this.settings.negativeSignCharacter) && (e = `${this.settings.negativeSignCharacter}${e}`, t = t.replace(this.settings.negativeSignCharacter, "")), this._setValueParts(e + this.settings.decimalCharacter, t), !0;
    }
    if ((this.eventKey === "-" || this.eventKey === "+") && this.settings.isNegativeSignAllowed)
      return e === "" && i.contains(t, "-") ? (this.settings.negativePositiveSignBehavior || !this.settings.negativePositiveSignBehavior && this.eventKey === "+") && (t = t.replace("-", "")) : i.isNegativeStrict(e, "-") ? (this.settings.negativePositiveSignBehavior || !this.settings.negativePositiveSignBehavior && this.eventKey === "+") && (e = e.replace("-", "")) : (this.settings.negativePositiveSignBehavior || !this.settings.negativePositiveSignBehavior && this.eventKey === "-") && (e = `${this.settings.negativeSignCharacter}${e}`), this._setValueParts(e, t), !0;
    const s = Number(this.eventKey);
    return s >= 0 && s <= 9 ? (this.settings.isNegativeSignAllowed && e === "" && i.contains(t, "-") && (e = "-", t = t.substring(1, t.length)), this.settings.maximumValue <= 0 && this.settings.minimumValue < this.settings.maximumValue && !i.contains(i.getElementValue(this.domElement), this.settings.negativeSignCharacter) && this.eventKey !== "0" && (e = `-${e}`), this._setValueParts(`${e}${this.eventKey}`, t), !0) : (this.throwInput = !1, !1);
  }
  /**
   * Formatting of just processed value while keeping the cursor position
   *
   * @param {Event} e
   * @private
   */
  _formatValue(e) {
    const t = i.getElementValue(this.domElement);
    let [s] = this._getUnformattedLeftAndRightPartAroundTheSelection();
    if ((this.settings.digitGroupSeparator === "" || this.settings.digitGroupSeparator !== "" && !i.contains(t, this.settings.digitGroupSeparator)) && (this.settings.currencySymbol === "" || this.settings.currencySymbol !== "" && !i.contains(t, this.settings.currencySymbol))) {
      let [c] = t.split(this.settings.decimalCharacter), o = "";
      i.isNegative(c, this.settings.negativeSignCharacter) && (o = this.settings.negativeSignCharacter, c = c.replace(this.settings.negativeSignCharacter, ""), s = s.replace("-", "")), o === "" && c.length > this.settings.mIntPos && s.charAt(0) === "0" && (s = s.slice(1)), o === this.settings.negativeSignCharacter && c.length > this.settings.mIntNeg && s.charAt(0) === "0" && (s = s.slice(1)), this.isTrailingNegative || (s = `${o}${s}`);
    }
    const a = this.constructor._addGroupSeparators(t, this.settings, this.isFocused, this.rawValue);
    let n = a.length;
    if (a) {
      const c = s.split("");
      if ((this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== r.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix) && c[0] === this.settings.negativeSignCharacter && !this.settings.isNegativeSignAllowed && (c.shift(), (this.eventKey === m.keyName.Backspace || this.eventKey === m.keyName.Delete) && this.caretFix && ((this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.left || this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.suffix) && (c.push(this.settings.negativeSignCharacter), this.caretFix = e.type === "keydown"), this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === r.options.negativePositiveSignPlacement.right))) {
        const h = this.settings.currencySymbol.split(""), d = ["\\", "^", "$", ".", "|", "?", "*", "+", "(", ")", "["], g = [];
        h.forEach((p, y) => {
          y = h[p], i.isInArray(y, d) ? g.push("\\" + y) : g.push(y);
        }), this.eventKey === m.keyName.Backspace && this.settings.negativeSignCharacter === "-" && g.push("-"), c.push(g.join("")), this.caretFix = e.type === "keydown";
      }
      for (let h = 0; h < c.length; h++)
        c[h].match("\\d") || (c[h] = "\\" + c[h]);
      let o;
      this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix ? o = new RegExp(`^.*?${c.join(".*?")}`) : o = new RegExp(`^.*?[${this.settings.currencySymbol}]*${c.join(".*?")}`);
      const l = a.match(o);
      l ? (n = l[0].length, this.settings.showPositiveSign && (n === 0 && l.input.charAt(0) === this.settings.positiveSignCharacter && (n = l.input.indexOf(this.settings.currencySymbol) === 1 ? this.settings.currencySymbol.length + 1 : 1), n === 0 && l.input.charAt(this.settings.currencySymbol.length) === this.settings.positiveSignCharacter && (n = this.settings.currencySymbol.length + 1)), (n === 0 && a.charAt(0) !== this.settings.negativeSignCharacter || n === 1 && a.charAt(0) === this.settings.negativeSignCharacter) && this.settings.currencySymbol && this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.prefix && (n = this.settings.currencySymbol.length + (i.isNegativeStrict(a, this.settings.negativeSignCharacter) ? 1 : 0))) : (this.settings.currencySymbol && this.settings.currencySymbolPlacement === r.options.currencySymbolPlacement.suffix && (n -= this.settings.currencySymbol.length), this.settings.suffixText && (n -= this.settings.suffixText.length));
    }
    a !== t && (this._setElementValue(a, !1), this._setCaretPosition(n)), this.formatted = !0;
  }
  /**
   * Serialize the form child <input> element values to a string, or an Array.
   * The output format is defined with the `formatType` argument.
   * This is loosely based upon http://stackoverflow.com/a/40705993/2834898.
   *
   * @param {HTMLFormElement} form
   * @param {boolean} intoAnArray If `true`, instead of generating a string, it generates an Array.
   * @param {string} formatType If `'unformatted'`, then the AutoNumeric elements values are unformatted, if `'localized'`, then the AutoNumeric elements values are localized, and if `'formatted'`, then the AutoNumeric elements values are kept formatted. In either way, this function does not modify the value of each DOM element, but only affect the value that is returned by that serialize function.
   * @param {string} serializedSpaceCharacter Can either be the '+' character, or the '%20' string.
   * @param {string|null} forcedOutputFormat If set, then this is the format that is used for the localization, instead of the default `outputFormat` option.
   * @returns {string|Array}
   * @private
   */
  static _serialize(e, t = !1, s = "unformatted", a = "+", n = null) {
    const c = [];
    typeof e == "object" && e.nodeName.toLowerCase() === "form" && Array.prototype.slice.call(e.elements).forEach((l) => {
      if (l.name && !l.disabled && ["file", "reset", "submit", "button"].indexOf(l.type) === -1) {
        if (l.type === "select-multiple")
          Array.prototype.slice.call(l.options).forEach((h) => {
            h.selected && (t ? c.push({ name: l.name, value: h.value }) : c.push(`${encodeURIComponent(l.name)}=${encodeURIComponent(h.value)}`));
          });
        else if (["checkbox", "radio"].indexOf(l.type) === -1 || l.checked) {
          let h;
          if (this.isManagedByAutoNumeric(l)) {
            let d;
            switch (s) {
              case "unformatted":
                d = this.getAutoNumericElement(l), i.isNull(d) || (h = this.unformat(l, d.getSettings()));
                break;
              case "localized":
                if (d = this.getAutoNumericElement(l), !i.isNull(d)) {
                  const g = i.cloneObject(d.getSettings());
                  i.isNull(n) || (g.outputFormat = n), h = this.localize(l, g);
                }
                break;
              case "formatted":
              default:
                h = l.value;
            }
          } else
            h = l.value;
          i.isUndefined(h) && i.throwError("This error should never be hit. If it has, something really wrong happened!"), t ? c.push({ name: l.name, value: h }) : c.push(`${encodeURIComponent(l.name)}=${encodeURIComponent(h)}`);
        }
      }
    });
    let o;
    return t ? o = c : (o = c.join("&"), a === "+" && (o = o.replace(/%20/g, "+"))), o;
  }
  /**
   * Serialize the form values to a string, outputting numeric strings for each AutoNumeric-managed element values.
   *
   * @param {HTMLFormElement} form
   * @param {string} serializedSpaceCharacter
   * @returns {string}
   */
  static _serializeNumericString(e, t = "+") {
    return this._serialize(e, !1, "unformatted", t);
  }
  /**
   * Serialize the form values to a string, outputting the formatted value as strings for each AutoNumeric-managed elements.
   *
   * @param {HTMLFormElement} form
   * @param {string} serializedSpaceCharacter
   * @returns {string}
   */
  static _serializeFormatted(e, t = "+") {
    return this._serialize(e, !1, "formatted", t);
  }
  /**
   * Serialize the form values to a string, outputting localized strings for each AutoNumeric-managed element values.
   *
   * @param {HTMLFormElement} form
   * @param {string} serializedSpaceCharacter
   * @param {string|null} forcedOutputFormat If set, then this is the format that is used for the localization, instead of the default `outputFormat` option.
   * @returns {string}
   */
  static _serializeLocalized(e, t = "+", s = null) {
    return this._serialize(e, !1, "localized", t, s);
  }
  /**
   * Generate an Array with the form values, outputting numeric strings for each AutoNumeric-managed element values.
   *
   * @param {HTMLFormElement} form
   * @param {string} serializedSpaceCharacter
   * @returns {Array}
   */
  static _serializeNumericStringArray(e, t = "+") {
    return this._serialize(e, !0, "unformatted", t);
  }
  /**
   * Generate an Array with the form values, outputting the formatted value as strings for each AutoNumeric-managed elements.
   *
   * @param {HTMLFormElement} form
   * @param {string} serializedSpaceCharacter
   * @returns {Array}
   */
  static _serializeFormattedArray(e, t = "+") {
    return this._serialize(e, !0, "formatted", t);
  }
  /**
   * Generate an Array with the form values, outputting localized strings for each AutoNumeric-managed element values.
   *
   * @param {HTMLFormElement} form
   * @param {string} serializedSpaceCharacter
   * @param {string|null} forcedOutputFormat If set, then this is the format that is used for the localization, instead of the default `outputFormat` option.
   * @returns {Array}
   */
  static _serializeLocalizedArray(e, t = "+", s = null) {
    return this._serialize(e, !0, "localized", t, s);
  }
};
I(r, "options"), // Those static declarations are only used by the IDE, to prevent error messages not finding those fields declarations
I(r, "events"), I(r, "defaultSettings"), I(r, "predefinedOptions");
let u = r;
u.multiple = (f, e = null, t = null) => {
  const s = [];
  if (i.isObject(e) && (t = e, e = null), i.isString(f))
    f = [...document.querySelectorAll(f)];
  else if (i.isObject(f)) {
    Object.prototype.hasOwnProperty.call(f, "rootElement") || i.throwError("The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found.");
    const y = [...f.rootElement.querySelectorAll("input")];
    Object.prototype.hasOwnProperty.call(f, "exclude") ? (Array.isArray(f.exclude) || i.throwError("The 'exclude' array passed to the 'multiple' function is invalid."), f = i.filterOut(y, f.exclude)) : f = y;
  } else
    i.isArray(f) || i.throwError("The given parameters to the 'multiple' function are invalid.");
  if (f.length === 0) {
    let y = !0;
    return !i.isNull(t) && i.isBoolean(t.showWarnings) && (y = t.showWarnings), i.warning("No valid DOM elements were given hence no AutoNumeric objects were instantiated.", y), [];
  }
  const n = i.isArray(e) && e.length >= 1;
  let c = !1, o = !1;
  if (n) {
    const y = typeof Number(e[0]);
    c = y === "number" && !isNaN(Number(e[0])), c || (y === "string" || isNaN(y) || y === "object") && (o = !0);
  }
  const l = i.isArray(t) && t.length >= 1;
  let h = !1;
  if (l) {
    const y = typeof t[0];
    (y === "string" || y === "object") && (h = !0);
  }
  let d;
  o ? d = u.mergeOptions(e) : h ? d = u.mergeOptions(t) : d = t;
  const g = i.isNumber(e);
  let p;
  return c && (p = e.length), f.forEach((y, v) => {
    g ? s.push(new u(y, e, d)) : c && v <= p ? s.push(new u(y, e[v], d)) : s.push(new u(y, null, d));
  }), s;
};
u.events = {
  correctedValue: "autoNumeric:correctedValue",
  initialized: "autoNumeric:initialized",
  invalidFormula: "autoNumeric:invalidFormula",
  invalidValue: "autoNumeric:invalidValue",
  formatted: "autoNumeric:formatted",
  rawValueModified: "autoNumeric:rawValueModified",
  minRangeExceeded: "autoNumeric:minExceeded",
  maxRangeExceeded: "autoNumeric:maxExceeded",
  native: {
    input: "input",
    change: "change"
  },
  validFormula: "autoNumeric:validFormula"
};
Object.freeze(u.events.native);
Object.freeze(u.events);
Object.defineProperty(u, "events", { configurable: !1, writable: !1 });
u.options = {
  /* Defines if the decimal places should be padded with zeroes
   * `true`     : always pad decimals with zeros (ie. '12.3400')
   * `false`    : never pad with zeros (ie. '12.34')
   * `'floats'` : pad with zeroes only when there are decimals (ie. '12' and '12.3400')
   * Note: setting allowDecimalPadding to 'false' will override the 'decimalPlaces' setting.
   */
  allowDecimalPadding: {
    always: !0,
    never: !1,
    floats: "floats"
  },
  /* Defines if the decimal character or decimal character alternative should be accepted when there is already a decimal character shown in the element.
   * If set to `true`, any decimal character input will be accepted and will subsequently modify the decimal character position, as well as the `rawValue`.
   * If set to `false`, the decimal character and its alternative key will be dropped as before. This is the default setting.
   */
  alwaysAllowDecimalCharacter: {
    alwaysAllow: !0,
    doNotAllow: !1
  },
  /* Defines where should be positioned the caret on focus
   * null : Do not enforce any caret positioning on focus (this is needed when using `selectOnFocus`)
   * `'start'` : put the caret of the far left side of the value (excluding the positive/negative sign and currency symbol, if any)
   * `'end'` : put the caret of the far right side of the value (excluding the positive/negative sign and currency symbol, if any)
   * `'decimalLeft'` : put the caret of the left of the decimal character if any
   * `'decimalRight'` : put the caret of the right of the decimal character if any
   */
  caretPositionOnFocus: {
    start: "start",
    end: "end",
    decimalLeft: "decimalLeft",
    decimalRight: "decimalRight",
    doNoForceCaretPosition: null
  },
  /* Defines if a local list of AutoNumeric objects should be kept when initializing this object.
   * This list is used by the `global.*` functions.
   */
  createLocalList: {
    createList: !0,
    doNotCreateList: !1
  },
  /* Defines the currency symbol string.
   * It can be a string of more than one character (allowing for instance to use a space on either side of it, example: '$ ' or ' $')
   * cf. https://en.wikipedia.org/wiki/Currency_symbol
   */
  currencySymbol: {
    none: "",
    currencySign: "¤",
    austral: "₳",
    // ARA
    australCentavo: "¢",
    baht: "฿",
    // THB
    cedi: "₵",
    // GHS
    cent: "¢",
    colon: "₡",
    // CRC
    cruzeiro: "₢",
    // BRB - Not used anymore since 1993
    dollar: "$",
    dong: "₫",
    // VND
    drachma: "₯",
    // GRD (or 'Δρχ.' or 'Δρ.')
    dram: "​֏",
    // AMD
    european: "₠",
    // XEU (old currency before the Euro)
    euro: "€",
    // EUR
    florin: "ƒ",
    franc: "₣",
    // FRF
    guarani: "₲",
    // PYG
    hryvnia: "₴",
    // грн
    kip: "₭",
    // LAK
    att: "ອັດ",
    // cents of the Kip
    lepton: "Λ.",
    // cents of the Drachma
    lira: "₺",
    // TRY
    liraOld: "₤",
    lari: "₾",
    // GEL
    mark: "ℳ",
    mill: "₥",
    naira: "₦",
    // NGN
    peseta: "₧",
    peso: "₱",
    // PHP
    pfennig: "₰",
    // cents of the Mark
    pound: "£",
    real: "R$ ",
    // Brazilian real
    riel: "៛",
    // KHR
    ruble: "₽",
    // RUB
    rupee: "₹",
    // INR
    rupeeOld: "₨",
    shekel: "₪",
    shekelAlt: "ש״ח‎‎",
    taka: "৳",
    // BDT
    tenge: "₸",
    // KZT
    togrog: "₮",
    // MNT
    won: "₩",
    yen: "¥"
  },
  /* Defines where the currency symbol should be placed (before of after the numbers)
   * for prefix currencySymbolPlacement: "p" (default)
   * for suffix currencySymbolPlacement: "s"
   */
  currencySymbolPlacement: {
    prefix: "p",
    suffix: "s"
  },
  /* Defines what decimal separator character is used
   */
  decimalCharacter: {
    comma: ",",
    dot: ".",
    middleDot: "·",
    arabicDecimalSeparator: "٫",
    decimalSeparatorKeySymbol: "⎖"
  },
  /* Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed.
   * This is used by countries that use a comma ',' as the decimal character and have keyboards with a numeric pads that have
   * a period 'full stop' as the decimal character (France or Spain for instance).
   */
  decimalCharacterAlternative: {
    none: null,
    comma: ",",
    dot: "."
  },
  /* Defines the default number of decimal places to show on the formatted value, and keep for the precision.
   * Incidentally, since we need to be able to show that many decimal places, this also defines the raw value precision by default.
   */
  decimalPlaces: {
    none: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  },
  /* Defines how many decimal places should be kept for the raw value (ie. This is the precision for float values).
   *
   * If this option is set to `null` (which is the default), then the value of `decimalPlaces` is used for `decimalPlacesRawValue` as well.
   * Note: Setting this to a lower number of decimal places than the one to be shown will lead to confusion for the users.
   */
  decimalPlacesRawValue: {
    useDefault: null,
    none: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  },
  /* Defines how many decimal places should be visible when the element is unfocused.
   * If this is set to `null`, then this option is ignored, and the `decimalPlaces` option value will be used instead.
   * This means this is optional ; if omitted the decimal places will be the same when the input has the focus.
   *
   * This option can be used in conjonction with the two other `scale*` options, which allows to display a different formatted value when the element is unfocused, while another formatted value is shown when focused.
   * For those `scale*` options to have any effect, `divisorWhenUnfocused` must not be `null`.
   */
  decimalPlacesShownOnBlur: {
    useDefault: null,
    none: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  },
  /* Defines how many decimal places should be visible when the element has the focus.
   * If this is set to `null`, then this option is ignored, and the `decimalPlaces` option value will be used instead.
   *
   * Example:
   * For instance if `decimalPlacesShownOnFocus` is set to `5` and the default number of decimal places is `2`, then on focus `1,000.12345` will be shown, while without focus `1,000.12` will be set back.
   * Note 1: the results depends on the rounding method used.
   * Note 2: the `getNumericString()` method returns the extended decimal places
   */
  decimalPlacesShownOnFocus: {
    useDefault: null,
    none: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  },
  /* Helper option for ASP.NET postback
   * This should be set as the value of the unformatted default value
   * examples:
   * no default value="" {defaultValueOverride: ""}
   * value=1234.56 {defaultValueOverride: '1234.56'}
   */
  defaultValueOverride: {
    doNotOverride: null
  },
  /* Defines how many numbers should be grouped together (usually for the thousand separator)
   * - "2",  results in 99,99,99,99 Group by two
   * - "2t", results in 99,99,99,999 India's lakhs
   * - "2s", results in 99,999,99,99,999 India's lakhs scaled
   * - "3",  results in 999,999,999 (default)
   * - "4",  results in 9999,9999,9999 used in some Asian countries
   * Note: This option does not accept other grouping choice.
   */
  digitalGroupSpacing: {
    two: "2",
    twoThree: "2t",
    twoScaled: "2s",
    three: "3",
    four: "4"
  },
  /* Defines the thousand grouping separator character
   * Example : If `'.'` is set, then you'll get `'1.234.567'`
   */
  digitGroupSeparator: {
    comma: ",",
    dot: ".",
    normalSpace: " ",
    thinSpace: " ",
    narrowNoBreakSpace: " ",
    noBreakSpace: " ",
    noSeparator: "",
    apostrophe: "'",
    arabicThousandsSeparator: "٬",
    dotAbove: "˙",
    privateUseTwo: "’"
    // \u0092
  },
  /* The `divisorWhenUnfocused` divide the element value on focus.
   * On blur, the element value is multiplied back.
   *
   * Example : Display percentages using { divisorWhenUnfocused: 100 } (or directly in the Html with `<input data-divisor-when-unfocused="100">`)
   * The divisor value does not need to be an integer, but please understand that Javascript has limited accuracy in math ; use with caution.
   * Note: The `getNumericString` method returns the full value, including the 'hidden' decimals.
   */
  divisorWhenUnfocused: {
    none: null,
    percentage: 100,
    permille: 1e3,
    basisPoint: 1e4
  },
  /* Defines what should be displayed in the element if the raw value is an empty string ('').
   * - 'focus'  : The currency sign is displayed when the input receives focus (default)
   * - 'press'  : The currency sign is displayed whenever a key is being pressed
   * - 'always' : The currency sign is always displayed
   * - 'zero'   : A zero is displayed ('rounded' with or without a currency sign) if the input has no value on focus out
   * - 'min'    : The minimum value is displayed if the input has no value on focus out
   * - 'max'    : The maximum value is displayed if the input has no value on focus out
   * - 'null'   : When the element is empty, the `rawValue` and the element value/text is set to `null`. This also allows to set the value to `null` using `anElement.set(null)`.
   */
  emptyInputBehavior: {
    focus: "focus",
    press: "press",
    always: "always",
    zero: "zero",
    min: "min",
    max: "max",
    null: "null"
  },
  /* Defines if the custom and native events triggered by AutoNumeric should bubble up or not.
   */
  eventBubbles: {
    bubbles: !0,
    doesNotBubble: !1
  },
  /* Defines if the custom and native events triggered by AutoNumeric should be cancelable.
   */
  eventIsCancelable: {
    isCancelable: !0,
    isNotCancelable: !1
  },
  /* This option is the 'strict mode' (aka 'debug' mode), which allows autoNumeric to strictly analyse the options passed, and fails if an unknown options is used in the settings object.
   * You should set that to `true` if you want to make sure you are only using 'pure' autoNumeric settings objects in your code.
   * If you see uncaught errors in the console and your code starts to fail, this means somehow those options gets polluted by another program (which usually happens when using frameworks).
   */
  failOnUnknownOption: {
    fail: !0,
    ignore: !1
  },
  /* Determine if the default value will be formatted on initialization.
   */
  formatOnPageLoad: {
    format: !0,
    // automatically formats the default value on initialization
    doNotFormat: !1
    // will not format the default value on initialization
  },
  /* Defines if the 'formula mode' can be activated by the user.
   * If set to `true`, then the user can enter the formula mode by entering the '=' character.
   * He will then be allowed to enter any simple math formula using numeric characters as well as the following operators +, -, *, /, ( and ).
   * The formula mode is closed when the user either validate their math expression using the `Enter` key, or when the element is blurred.
   * If the formula is invalid, the previous valid `rawValue` is set back, and the `autoNumeric:invalidFormula` event is sent.
   * When a valid formula is accepted, then its result is `set()`, and the `autoNumeric:validFormula` event is sent.
   *
   * By default, this mode is disabled.
   */
  formulaMode: {
    enabled: !0,
    disabled: !1
  },
  /* Set the undo/redo history table size.
   * Each record keeps the raw value as well and the last known caret/selection positions.
   */
  historySize: {
    verySmall: 5,
    small: 10,
    medium: 20,
    large: 50,
    veryLarge: 100,
    insane: Number.MAX_SAFE_INTEGER
  },
  /* Defines the name of the CSS class to use on contenteditable-enabled elements when the value is invalid
   * This is not used when the HTML element used is an input.
   */
  invalidClass: "an-invalid",
  /* Allow the user to 'cancel' and undo the changes he made to the given autonumeric-managed element, by pressing the 'Escape' key.
   * Whenever the user 'validate' the input (either by hitting 'Enter', or blurring the element), the new value is saved for subsequent 'cancellation'.
   *
   * The process :
   *   - save the input value on focus
   *   - if the user change the input value, and hit `Escape`, then the initial value saved on focus is set back
   *   - on the other hand if the user either have used `Enter` to validate (`Enter` throws a change event) his entries, or if the input value has been changed by another script in the mean time, then we save the new input value
   *   - on a successful 'cancel', select the whole value (while respecting the `selectNumberOnly` option)
   *   - bonus; if the value has not changed, hitting 'Esc' just select all the input value (while respecting the `selectNumberOnly` option)
   */
  isCancellable: {
    cancellable: !0,
    notCancellable: !1
  },
  /* Controls the leading zero behavior
   * - 'allow' : allows leading zeros to be entered. Zeros will be truncated when entering additional digits. On focusout zeros will be deleted
   * - 'deny'  : allows only one leading zero on values that are between 1 and -1
   * - 'keep'  : allows leading zeros to be entered. on focusout zeros will be retained
   */
  leadingZero: {
    allow: "allow",
    deny: "deny",
    keep: "keep"
  },
  /* Defines the maximum possible value a user can enter.
   * Notes:
   * - this value must be a string and use the period for the decimal point
   * - this value needs to be larger than `minimumValue`
   */
  maximumValue: {
    tenTrillions: "10000000000000",
    // 10000 billions
    oneBillion: "1000000000",
    zero: "0"
  },
  /* Defines the minimum possible value a user can enter.
   * Notes:
   * - this value must be a string and use the period for the decimal point
   * - this value needs to be smaller than `maximumValue`
   * - if this is superior to 0, then you'll effectively prevent your user to entirely delete the content of your element
   */
  minimumValue: {
    tenTrillions: "-10000000000000",
    // 10000 billions
    oneBillion: "-1000000000",
    zero: "0"
  },
  /* Allows the user to increment or decrement the element value with the up and down arrow keys.
   * The behavior is similar to the mouse wheel one.
   * The up and down arrow keys behavior can be modified by the `upDownStep` option.
   * This `upDownStep` option can be used in two ways, either by setting:
   * - a 'fixed' step value (`upDownStep : 1000`), or
   * - the 'progressive' string (`upDownStep : 'progressive'`), which will then activate a special mode where the step is automatically calculated based on the element value size.
   */
  modifyValueOnUpDownArrow: {
    modifyValue: !0,
    doNothing: !1
  },
  /* Allows the user to increment or decrement the element value with the mouse wheel.
   * The behavior is similar to the up/down arrow one.
   * The wheel behavior can be modified by the `wheelStep` option.
   * This `wheelStep` option can be used in two ways, either by setting:
   * - a 'fixed' step value (`wheelStep : 1000`), or
   * - the 'progressive' string (`wheelStep : 'progressive'`), which will then activate a special mode where the step is automatically calculated based on the element value size.
   *
   * Note :
   * You can activate/deactivate the wheel event for each `wheelOn` option value by using the 'Shift' modifier key while using the mouse wheel.
   */
  modifyValueOnWheel: {
    modifyValue: !0,
    doNothing: !1
  },
  /* Adds brackets on negative values (ie. transforms '-$ 999.99' to '($999.99)')
   * Those brackets are visible only when the field does NOT have the focus.
   * The left and right symbols should be enclosed in quotes and separated by a comma.
   */
  negativeBracketsTypeOnBlur: {
    parentheses: "(,)",
    brackets: "[,]",
    chevrons: "<,>",
    curlyBraces: "{,}",
    angleBrackets: "〈,〉",
    japaneseQuotationMarks: "｢,｣",
    halfBrackets: "⸤,⸥",
    whiteSquareBrackets: "⟦,⟧",
    quotationMarks: "‹,›",
    guillemets: "«,»",
    none: null
    // This is the default value, which deactivate this feature
  },
  /* Placement of the negative/positive sign relative to the `currencySymbol` option.
   *
   * Example:
   * // Default values
   * -1,234.56  => default no options required
   * $-1,234.56 => {currencySymbol: "$", negativePositiveSignPlacement: "r"} // Default if negativePositiveSignPlacement is 'null' and currencySymbol is not empty
   *
   * // Sign on the left hand side of the whole number
   * -$1,234.56 => {currencySymbol: "$"} or {currencySymbol: "$", negativePositiveSignPlacement: "l"}
   * -1,234.56$ => {currencySymbol: "$", currencySymbolPlacement: "s", negativePositiveSignPlacement: "p"} // Default if negativePositiveSignPlacement is 'null' and currencySymbol is not empty
   *
   * // Sign on the right hand side of the whole number
   * 1,234.56-  => {negativePositiveSignPlacement: "s"}
   * $1,234.56- => {currencySymbol: "$", negativePositiveSignPlacement: "s"}
   * 1,234.56-$ => {currencySymbol: "$", currencySymbolPlacement: "s"}
   * 1,234.56$- => {currencySymbol: "$", currencySymbolPlacement: "s", negativePositiveSignPlacement: "r"}
   */
  negativePositiveSignPlacement: {
    prefix: "p",
    suffix: "s",
    left: "l",
    right: "r",
    none: null
  },
  /* Defines the negative sign symbol.
   * It can be a string of only one character.
   */
  negativeSignCharacter: {
    hyphen: "-",
    minus: "−",
    heavyMinus: "➖",
    fullWidthHyphen: "－",
    circledMinus: "⊖",
    squaredMinus: "⊟",
    triangleMinus: "⨺",
    plusMinus: "±",
    minusPlus: "∓",
    dotMinus: "∸",
    minusTilde: "≂",
    not: "¬"
  },
  /*
   * Defines if the negative sign should be toggled when hitting the negative or positive key multiple times.
   * When `toggle` is used, using the same '-' on '+' key will toggle between a positive and negative value.
   * When `doNotToggle` is used, using '-' will always set the value negative, and '+' will always set the value positive.
   */
  negativePositiveSignBehavior: {
    toggle: !0,
    doNotToggle: !1
  },
  /* Defines if the element should have event listeners activated on it.
   * By default, those event listeners are only added to <input> elements and html element with the `contenteditable` attribute set to `true`, but not on the other html tags.
   * This allows to initialize elements without any event listeners.
   * Warning: Since AutoNumeric will not check the input content after its initialization, using some autoNumeric methods afterwards *will* probably leads to formatting problems.
   */
  noEventListeners: {
    noEvents: !0,
    addEvents: !1
  },
  /* Manage how autoNumeric react when the user tries to paste an invalid number.
   * - 'error'    : (This is the default behavior) The input value is not changed and an error is output in the console.
   * - 'ignore'   : idem than 'error', but fail silently without outputting any error/warning in the console.
   * - 'clamp'    : if the pasted value is either too small or too big regarding the minimumValue and maximumValue range, then the result is clamped to those limits.
   * - 'truncate' : autoNumeric will insert as many pasted numbers it can at the initial caret/selection, until everything is pasted, or the range limit is hit.
   *                The non-pasted numbers are dropped and therefore not used at all.
   * - 'replace'  : autoNumeric will first insert as many pasted numbers it can at the initial caret/selection, then if the range limit is hit, it will try
   *                to replace one by one the remaining initial numbers (on the right side of the caret) with the rest of the pasted numbers.
   *
   * Note 1 : A paste content starting with a negative sign '-' will be accepted anywhere in the input, and will set the resulting value as a negative number
   * Note 2 : A paste content starting with a number will be accepted, even if the rest is gibberish (ie. '123foobar456').
   *          Only the first number will be used (here '123').
   * Note 3 : The paste event works with the `decimalPlacesShownOnFocus` option too.
   */
  onInvalidPaste: {
    error: "error",
    ignore: "ignore",
    clamp: "clamp",
    truncate: "truncate",
    replace: "replace"
  },
  /* Defines how the value should be formatted when wanting a 'localized' version of it.
   * - null or 'string' => 'nnnn.nn' or '-nnnn.nn' as text type. This is the default behavior.
   * - 'number'         => nnnn.nn or -nnnn.nn as a Number (Warning: this works only for integers inferior to Number.MAX_SAFE_INTEGER)
   * - ',' or '-,'      => 'nnnn,nn' or '-nnnn,nn'
   * - '.-'             => 'nnnn.nn' or 'nnnn.nn-'
   * - ',-'             => 'nnnn,nn' or 'nnnn,nn-'
   *
   * Note: The hyphen '-' is translated to the custom negative sign defined in `negativeSignCharacter`
   */
  outputFormat: {
    string: "string",
    number: "number",
    dot: ".",
    negativeDot: "-.",
    comma: ",",
    negativeComma: "-,",
    dotNegative: ".-",
    commaNegative: ",-",
    none: null
  },
  /* Defines if AutoNumeric should let the user override the minimum and/or maximum limits when he types numbers in the element.
   * - 'ceiling' Strictly adheres to `maximumValue` and ignores the `minimumValue` settings
   *             It allows the user to enter anything between -∞ `and maximumValue`
   *             If `maximumValue` is less than 0, then it will prevent the user emptying the field or typing value above `maximumValue`, making sure the value entered is always valid
   * - 'floor'   Strictly adheres to `minimumValue` and ignores the `maximumValue` settings
   *             It allows the user to enter anything between `minimumValue` and +∞
   *             If `minimumValue` is higher than 0, then it will prevent the user emptying the field or typing value below `minimumValue`, making sure the value entered is always valid
   * - 'ignore'  Ignores both the `minimumValue` and `maximumValue` settings
   *             When using this option, the field will always be valid range-wise
   * - 'invalid' The user can temporarily type out-of-bound values. In doing so, the invalid state is set on the field.
   *             Whenever an invalid value is typed, an 'autoNumeric:invalidValue' event is sent
   *             When the value is correctly set back within the limit boundaries, the invalid state is removed, and the 'autoNumeric:correctedValue' event is sent
   * - 'doNotOverride' Strictly adheres to the `maximumValue` and `minimumValue` settings
   *                   This is the default behavior
   *                   If `0` is out of the min/max range, this will prevent the user clearing the input field, making sure the value entered is always valid
   */
  overrideMinMaxLimits: {
    ceiling: "ceiling",
    floor: "floor",
    ignore: "ignore",
    invalid: "invalid",
    doNotOverride: null
  },
  /* Defines the positive sign symbol.
   * It can be a string of only one character.
   * This is shown only if `showPositiveSign` is set to `true`.
   */
  positiveSignCharacter: {
    plus: "+",
    fullWidthPlus: "＋",
    heavyPlus: "➕",
    doublePlus: "⧺",
    triplePlus: "⧻",
    circledPlus: "⊕",
    squaredPlus: "⊞",
    trianglePlus: "⨹",
    plusMinus: "±",
    minusPlus: "∓",
    dotPlus: "∔",
    altHebrewPlus: "﬩",
    normalSpace: " ",
    thinSpace: " ",
    narrowNoBreakSpace: " ",
    noBreakSpace: " "
  },
  /* The `rawValueDivisor` divides the formatted value shown in the AutoNumeric element and store the result in `rawValue`.
   * @example { rawValueDivisor: '100' } or <input data-raw-value-divisor="100">
   * Given the `0.01234` raw value, the formatted value will be displayed as `'1.234'`.
   * This is useful when displaying percentage for instance, and avoid the need to divide/multiply by 100 between the number shown and the raw value.
   */
  rawValueDivisor: {
    none: null,
    percentage: 100,
    permille: 1e3,
    basisPoint: 1e4
  },
  /* Defines if the element (`<input>` or another allowed html tag) should be set as read-only on initialization.
   * When set to `true`, then:
   * - the `readonly` html property is added to the <input> element on initialization, or
   * - the `contenteditable` attribute is set to `false` on non-input elements.
   */
  readOnly: {
    readOnly: !0,
    readWrite: !1
  },
  /* Defines the rounding method to use.
   * roundingMethod: "S", Round-Half-Up Symmetric (default)
   * roundingMethod: "A", Round-Half-Up Asymmetric
   * roundingMethod: "s", Round-Half-Down Symmetric (lower case s)
   * roundingMethod: "a", Round-Half-Down Asymmetric (lower case a)
   * roundingMethod: "B", Round-Half-Even "Bankers Rounding"
   * roundingMethod: "U", Round Up "Round-Away-From-Zero"
   * roundingMethod: "D", Round Down "Round-Toward-Zero" - same as truncate
   * roundingMethod: "C", Round to Ceiling "Toward Positive Infinity"
   * roundingMethod: "F", Round to Floor "Toward Negative Infinity"
   * roundingMethod: "N05" Rounds to the nearest .05 => same as "CHF" used in 1.9X and still valid
   * roundingMethod: "U05" Rounds up to next .05
   * roundingMethod: "D05" Rounds down to next .05
   */
  roundingMethod: {
    halfUpSymmetric: "S",
    halfUpAsymmetric: "A",
    halfDownSymmetric: "s",
    halfDownAsymmetric: "a",
    halfEvenBankersRounding: "B",
    upRoundAwayFromZero: "U",
    downRoundTowardZero: "D",
    toCeilingTowardPositiveInfinity: "C",
    toFloorTowardNegativeInfinity: "F",
    toNearest05: "N05",
    toNearest05Alt: "CHF",
    upToNext05: "U05",
    downToNext05: "D05"
  },
  /* Set to `true` to allow the `decimalPlacesShownOnFocus` value to be saved with sessionStorage
   * If IE 6 or 7 is detected, the value will be saved as a session cookie.
   */
  saveValueToSessionStorage: {
    save: !0,
    doNotSave: !1
  },
  /* Determine if the select all keyboard command will select the complete input text, or only the input numeric value
   * Note : If the currency symbol is between the numeric value and the negative sign, only the numeric value will be selected
   */
  selectNumberOnly: {
    selectNumbersOnly: !0,
    selectAll: !1
  },
  /* Defines if the element value should be selected on focus.
   * Note: The selection is done using the `selectNumberOnly` option.
   */
  selectOnFocus: {
    select: !0,
    doNotSelect: !1
  },
  /* Defines how the serialize functions should treat the spaces.
   * Those spaces ' ' can either be converted to the plus sign '+', which is the default, or to '%20'.
   * Both values being valid per the spec (http://www.w3.org/Addressing/URL/uri-spec.html).
   * Also see the summed up answer on http://stackoverflow.com/a/33939287.
   *
   * tl;dr : Spaces should be converted to '%20' before the '?' sign, then converted to '+' after.
   * In our case since we serialize the query, we use '+' as the default (but allow the user to get back the old *wrong* behavior).
   */
  serializeSpaces: {
    plus: "+",
    percent: "%20"
  },
  /* Defines if the element value should be converted to the raw value on focus (and back to the formatted on blur).
   * If set to `true`, then autoNumeric remove the thousand separator, currency symbol and suffix on focus.
   * Example:
   * If the input value is '$ 1,999.88 suffix', on focus it becomes '1999.88' and back to '$ 1,999.88 suffix' on blur.
   */
  showOnlyNumbersOnFocus: {
    onlyNumbers: !0,
    showAll: !1
  },
  /* Allow the positive sign symbol `+` to be displayed for positive numbers.
   * By default, this positive sign is not shown.
   * The sign placement is controlled by the 'negativePositiveSignPlacement' option, mimicking the negative sign placement rules.
   */
  showPositiveSign: {
    show: !0,
    hide: !1
  },
  /* Defines if warnings should be shown in the console.
   * Those warnings can be ignored, but are usually printed when something could be improved by the user (ie. option conflicts).
   */
  showWarnings: {
    show: !0,
    // All warning are shown
    hide: !1
    // No warnings are shown, only the thrown errors
  },
  /* Defines the rules that calculate the CSS class(es) to apply on the element, based on the raw unformatted value.
   * This can also be used to call callbacks whenever the `rawValue` is updated.
   * Important: all callbacks must return `null` if no ranges/userDefined classes are selected
   * @example
   * {
   *     positive   : 'autoNumeric-positive', // Or `null` to not use it
   *     negative   : 'autoNumeric-negative',
   *     ranges     : [
   *         { min: 0, max: 25, class: 'autoNumeric-red' },
   *         { min: 25, max: 50, class: 'autoNumeric-orange' },
   *         { min: 50, max: 75, class: 'autoNumeric-yellow' },
   *         { min: 75, max: Number.MAX_SAFE_INTEGER, class: 'autoNumeric-green' },
   *     ],
   *     userDefined: [
   *         // If 'classes' is a string, set it if `true`, remove it if `false`
   *         { callback: rawValue => { return true; }, classes: 'thisIsTrue' },
   *         // If 'classes' is an array with only 2 elements, set the first class if `true`, the second if `false`
   *         { callback: rawValue => rawValue % 2 === 0, classes: ['autoNumeric-even', 'autoNumeric-odd'] },
   *         // Return only one index to use on the `classes` array (here, 'class3')
   *         { callback: rawValue => { return 2; }, classes: ['class1', 'class2', 'class3'] },
   *         // Return an array of indexes to use on the `classes` array (here, 'class1' and 'class3')
   *         { callback: rawValue => { return [0, 2]; }, classes: ['class1', 'class2', 'class3'] },
   *         // If 'classes' is `undefined` or `null`, then the callback is called with the AutoNumeric object passed as a parameter
   *         { callback: anElement => { return anElement.getFormatted(); } },
   *     ],
   * }
   */
  styleRules: {
    none: null,
    positiveNegative: {
      positive: "autoNumeric-positive",
      negative: "autoNumeric-negative"
    },
    range0To100With4Steps: {
      ranges: [
        { min: 0, max: 25, class: "autoNumeric-red" },
        { min: 25, max: 50, class: "autoNumeric-orange" },
        { min: 50, max: 75, class: "autoNumeric-yellow" },
        { min: 75, max: 100, class: "autoNumeric-green" }
      ]
    },
    evenOdd: {
      userDefined: [
        { callback: (f) => f % 2 === 0, classes: ["autoNumeric-even", "autoNumeric-odd"] }
      ]
    },
    rangeSmallAndZero: {
      userDefined: [
        {
          callback: (f) => f >= -1 && f < 0 ? 0 : Number(f) === 0 ? 1 : f > 0 && f <= 1 ? 2 : null,
          classes: [
            "autoNumeric-small-negative",
            "autoNumeric-zero",
            "autoNumeric-small-positive"
          ]
        }
      ]
    }
  },
  /* Add a text on the right hand side of the element value.
   * This suffix text can have any characters in its string, except numeric characters and the negative/positive sign.
   * Example: ' dollars'
   */
  suffixText: {
    none: "",
    percentage: "%",
    permille: "‰",
    basisPoint: "‱"
  },
  /* The three options (divisorWhenUnfocused, decimalPlacesShownOnBlur & symbolWhenUnfocused) handle scaling of the input when the input does not have focus
   * Please note that the non-scaled value is held in data and it is advised that you use the `saveValueToSessionStorage` option to ensure retaining the value
   * ["divisor", "decimal places", "symbol"]
   * Example: with the following options set {divisorWhenUnfocused: '1000', decimalPlacesShownOnBlur: '1', symbolWhenUnfocused: ' K'}
   * Example: focusin value "1,111.11" focusout value "1.1 K"
   */
  /* The `symbolWhenUnfocused` option is a symbol placed as a suffix when not in focus.
   * This is optional too.
   */
  symbolWhenUnfocused: {
    none: null,
    percentage: "%",
    permille: "‰",
    basisPoint: "‱"
  },
  /* Defines if the element value should be unformatted when the user hover his mouse over it while holding the `Alt` key.
   * Unformatting there means that this removes any non-number characters and displays the *raw* value, as understood by Javascript (ie. `12.34` is a valid number, while `12,34` is not).
   *
   * We reformat back before anything else if :
   * - the user focus on the element by tabbing or clicking into it,
   * - the user releases the `Alt` key, and
   * - if we detect a mouseleave event.
   *
   * We unformat again if :
   * - while the mouse is over the element, the user hit `Alt` again
   */
  unformatOnHover: {
    unformat: !0,
    doNotUnformat: !1
    //TODO Rename to `keepFormat`
  },
  /* Removes the formatting and use the raw value in each autoNumeric elements of the parent form element, on the form `submit` event.
   * The output format is a numeric string (nnnn.nn or -nnnn.nn).
   */
  unformatOnSubmit: {
    unformat: !0,
    keepCurrentValue: !1
  },
  /* That option is linked to the `modifyValueOnUpDownArrow` one and will only be used if the latter is set to `true`.
   * This option will modify the up/down arrow behavior and can be used in two ways, either by setting :
   * - a 'fixed' step value (a positive float or integer number (ex: `1000`)), or
   * - the `'progressive'` string.
   *
   * The 'fixed' mode always increment/decrement the element value by that amount, while respecting the `minimumValue` and `maximumValue` settings.
   * The 'progressive' mode will increment/decrement the element value based on its current value. The bigger the number, the bigger the step, and vice versa.
   */
  upDownStep: {
    progressive: "progressive"
  },
  /* Provides a way for automatically replacing the formatted value with a pre-defined string, when the raw value is equal to a specific value
   * Here you can specify as many 'conversion' as needed.
   */
  valuesToStrings: {
    none: null,
    zeroDash: {
      0: "-"
    },
    oneAroundZero: {
      "-1": "Min",
      1: "Max"
    }
  },
  /* Defines if the AutoNumeric element should watch external changes made without using `.set()`, but by using the basic `aNElement.node().value = 42` notation.
   * If set to `watch`, then AutoNumeric will format the new value using `.set()` internally.
   * Otherwise it will neither format it, nor save it in the history.
   */
  watchExternalChanges: {
    watch: !0,
    doNotWatch: !1
  },
  /* Defines when the wheel event will increment or decrement the element value.
   * When set to `'focus'`, the AutoNumeric-managed element needs to be focused for the wheel event to change the value.
   * When set to `'hover'`, using the wheel event while the mouse is hovering the element is sufficient (no focus needed).
   *
   * Note :
   * When `wheelOn` is set to `'focus'`, you can use the 'Shift' modifier key while using the mouse wheel in order to temporarily activate the increment/decrement feature even if the element is not focused.
   * When `wheelOn` is set to `'hover'`, you can use the 'Shift' modifier key while using the mouse wheel in order to temporarily disable the increment/decrement feature even if the element is not hovered.
   */
  wheelOn: {
    focus: "focus",
    hover: "hover"
  },
  /* That option is linked to the `modifyValueOnWheel` one and will only be used if the latter is set to `true`.
   * This option will modify the wheel behavior and can be used in two ways, either by setting :
   * - a 'fixed' step value (a positive float or integer (ex: number `1000`)), or
   * - the `'progressive'` string.
   *
   * The 'fixed' mode always increment/decrement the element value by that amount, while respecting the `minimumValue` and `maximumValue` settings.
   * The 'progressive' mode will increment/decrement the element value based on its current value. The bigger the number, the bigger the step, and vice versa.
   */
  wheelStep: {
    progressive: "progressive"
  }
};
function ve(f) {
  return Object.getOwnPropertyNames(f).forEach((e) => {
    e === "valuesToStrings" ? Object.getOwnPropertyNames(f.valuesToStrings).forEach((s) => {
      f.valuesToStrings[s] !== null && Object.freeze(f.valuesToStrings[s]);
    }) : e !== "styleRules" && f[e] !== null && Object.freeze(f[e]);
  }), Object.freeze(f);
}
ve(u.options);
Object.defineProperty(u, "options", { configurable: !1, writable: !1 });
u.defaultSettings = {
  allowDecimalPadding: u.options.allowDecimalPadding.always,
  alwaysAllowDecimalCharacter: u.options.alwaysAllowDecimalCharacter.doNotAllow,
  caretPositionOnFocus: u.options.caretPositionOnFocus.doNoForceCaretPosition,
  createLocalList: u.options.createLocalList.createList,
  currencySymbol: u.options.currencySymbol.none,
  currencySymbolPlacement: u.options.currencySymbolPlacement.prefix,
  decimalCharacter: u.options.decimalCharacter.dot,
  decimalCharacterAlternative: u.options.decimalCharacterAlternative.none,
  decimalPlaces: u.options.decimalPlaces.two,
  decimalPlacesRawValue: u.options.decimalPlacesRawValue.useDefault,
  decimalPlacesShownOnBlur: u.options.decimalPlacesShownOnBlur.useDefault,
  decimalPlacesShownOnFocus: u.options.decimalPlacesShownOnFocus.useDefault,
  defaultValueOverride: u.options.defaultValueOverride.doNotOverride,
  digitalGroupSpacing: u.options.digitalGroupSpacing.three,
  digitGroupSeparator: u.options.digitGroupSeparator.comma,
  divisorWhenUnfocused: u.options.divisorWhenUnfocused.none,
  emptyInputBehavior: u.options.emptyInputBehavior.focus,
  eventBubbles: u.options.eventBubbles.bubbles,
  eventIsCancelable: u.options.eventIsCancelable.isCancelable,
  failOnUnknownOption: u.options.failOnUnknownOption.ignore,
  formatOnPageLoad: u.options.formatOnPageLoad.format,
  formulaMode: u.options.formulaMode.disabled,
  historySize: u.options.historySize.medium,
  invalidClass: u.options.invalidClass,
  isCancellable: u.options.isCancellable.cancellable,
  leadingZero: u.options.leadingZero.deny,
  maximumValue: u.options.maximumValue.tenTrillions,
  minimumValue: u.options.minimumValue.tenTrillions,
  modifyValueOnUpDownArrow: u.options.modifyValueOnUpDownArrow.modifyValue,
  modifyValueOnWheel: u.options.modifyValueOnWheel.modifyValue,
  negativeBracketsTypeOnBlur: u.options.negativeBracketsTypeOnBlur.none,
  negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.none,
  negativeSignCharacter: u.options.negativeSignCharacter.hyphen,
  negativePositiveSignBehavior: u.options.negativePositiveSignBehavior.doNotToggle,
  noEventListeners: u.options.noEventListeners.addEvents,
  //TODO Shouldn't we use `truncate` as the default value?
  onInvalidPaste: u.options.onInvalidPaste.error,
  outputFormat: u.options.outputFormat.none,
  overrideMinMaxLimits: u.options.overrideMinMaxLimits.doNotOverride,
  positiveSignCharacter: u.options.positiveSignCharacter.plus,
  rawValueDivisor: u.options.rawValueDivisor.none,
  readOnly: u.options.readOnly.readWrite,
  roundingMethod: u.options.roundingMethod.halfUpSymmetric,
  saveValueToSessionStorage: u.options.saveValueToSessionStorage.doNotSave,
  selectNumberOnly: u.options.selectNumberOnly.selectNumbersOnly,
  selectOnFocus: u.options.selectOnFocus.select,
  serializeSpaces: u.options.serializeSpaces.plus,
  showOnlyNumbersOnFocus: u.options.showOnlyNumbersOnFocus.showAll,
  showPositiveSign: u.options.showPositiveSign.hide,
  showWarnings: u.options.showWarnings.show,
  styleRules: u.options.styleRules.none,
  suffixText: u.options.suffixText.none,
  symbolWhenUnfocused: u.options.symbolWhenUnfocused.none,
  unformatOnHover: u.options.unformatOnHover.unformat,
  unformatOnSubmit: u.options.unformatOnSubmit.keepCurrentValue,
  upDownStep: "1",
  // To mimic the behavior of 'numeric'-typed input
  valuesToStrings: u.options.valuesToStrings.none,
  watchExternalChanges: u.options.watchExternalChanges.doNotWatch,
  wheelOn: u.options.wheelOn.focus,
  wheelStep: u.options.wheelStep.progressive
};
Object.freeze(u.defaultSettings);
Object.defineProperty(u, "defaultSettings", { configurable: !1, writable: !1 });
const F = {
  // Français
  digitGroupSeparator: u.options.digitGroupSeparator.dot,
  // or '\u202f'
  decimalCharacter: u.options.decimalCharacter.comma,
  decimalCharacterAlternative: u.options.decimalCharacterAlternative.dot,
  currencySymbol: " €",
  currencySymbolPlacement: u.options.currencySymbolPlacement.suffix,
  negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.prefix
}, k = {
  digitGroupSeparator: u.options.digitGroupSeparator.comma,
  decimalCharacter: u.options.decimalCharacter.dot,
  currencySymbol: u.options.currencySymbol.dollar,
  currencySymbolPlacement: u.options.currencySymbolPlacement.prefix,
  negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.right
}, Y = {
  // 日本語
  digitGroupSeparator: u.options.digitGroupSeparator.comma,
  decimalCharacter: u.options.decimalCharacter.dot,
  currencySymbol: u.options.currencySymbol.yen,
  currencySymbolPlacement: u.options.currencySymbolPlacement.prefix,
  negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.right
}, ye = i.cloneObject(F);
ye.formulaMode = u.options.formulaMode.enabled;
const X = i.cloneObject(F);
X.minimumValue = 0;
const z = i.cloneObject(F);
z.maximumValue = 0;
z.negativePositiveSignPlacement = u.options.negativePositiveSignPlacement.prefix;
const B = i.cloneObject(F);
B.digitGroupSeparator = u.options.digitGroupSeparator.normalSpace;
const Q = i.cloneObject(B);
Q.minimumValue = 0;
const K = i.cloneObject(B);
K.maximumValue = 0;
K.negativePositiveSignPlacement = u.options.negativePositiveSignPlacement.prefix;
const x = i.cloneObject(F);
x.currencySymbol = u.options.currencySymbol.none;
x.suffixText = ` ${u.options.suffixText.percentage}`;
x.wheelStep = 1e-4;
x.rawValueDivisor = u.options.rawValueDivisor.percentage;
const W = i.cloneObject(x);
W.minimumValue = 0;
const M = i.cloneObject(x);
M.maximumValue = 0;
M.negativePositiveSignPlacement = u.options.negativePositiveSignPlacement.prefix;
const ee = i.cloneObject(x);
ee.decimalPlaces = 3;
const te = i.cloneObject(W);
te.decimalPlaces = 3;
const ie = i.cloneObject(M);
ie.decimalPlaces = 3;
const Se = i.cloneObject(k);
Se.formulaMode = u.options.formulaMode.enabled;
const se = i.cloneObject(k);
se.minimumValue = 0;
const R = i.cloneObject(k);
R.maximumValue = 0;
R.negativePositiveSignPlacement = u.options.negativePositiveSignPlacement.prefix;
const ne = i.cloneObject(R);
ne.negativeBracketsTypeOnBlur = u.options.negativeBracketsTypeOnBlur.parentheses;
const V = i.cloneObject(k);
V.currencySymbol = u.options.currencySymbol.none;
V.suffixText = u.options.suffixText.percentage;
V.wheelStep = 1e-4;
V.rawValueDivisor = u.options.rawValueDivisor.percentage;
const G = i.cloneObject(V);
G.minimumValue = 0;
const $ = i.cloneObject(V);
$.maximumValue = 0;
$.negativePositiveSignPlacement = u.options.negativePositiveSignPlacement.prefix;
const re = i.cloneObject(V);
re.decimalPlaces = 3;
const ae = i.cloneObject(G);
ae.decimalPlaces = 3;
const oe = i.cloneObject($);
oe.decimalPlaces = 3;
const le = i.cloneObject(F);
le.currencySymbol = u.options.currencySymbol.lira;
u.predefinedOptions = {
  euro: F,
  euroPos: X,
  euroNeg: z,
  euroSpace: B,
  euroSpacePos: Q,
  euroSpaceNeg: K,
  percentageEU2dec: x,
  percentageEU2decPos: W,
  percentageEU2decNeg: M,
  percentageEU3dec: ee,
  percentageEU3decPos: te,
  percentageEU3decNeg: ie,
  dollar: k,
  dollarPos: se,
  dollarNeg: R,
  dollarNegBrackets: ne,
  percentageUS2dec: V,
  percentageUS2decPos: G,
  percentageUS2decNeg: $,
  percentageUS3dec: re,
  percentageUS3decPos: ae,
  percentageUS3decNeg: oe,
  French: F,
  // Français
  Spanish: F,
  // Español
  NorthAmerican: k,
  British: {
    digitGroupSeparator: u.options.digitGroupSeparator.comma,
    decimalCharacter: u.options.decimalCharacter.dot,
    currencySymbol: u.options.currencySymbol.pound,
    currencySymbolPlacement: u.options.currencySymbolPlacement.prefix,
    negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.right
  },
  Swiss: {
    // Suisse
    digitGroupSeparator: u.options.digitGroupSeparator.apostrophe,
    decimalCharacter: u.options.decimalCharacter.dot,
    currencySymbol: " CHF",
    currencySymbolPlacement: u.options.currencySymbolPlacement.suffix,
    negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.prefix
  },
  Japanese: Y,
  // 日本語
  Chinese: Y,
  // 中国語 (Chinese)
  Brazilian: {
    digitGroupSeparator: u.options.digitGroupSeparator.dot,
    decimalCharacter: u.options.decimalCharacter.comma,
    currencySymbol: u.options.currencySymbol.real,
    currencySymbolPlacement: u.options.currencySymbolPlacement.prefix,
    negativePositiveSignPlacement: u.options.negativePositiveSignPlacement.right
  },
  Turkish: le,
  dotDecimalCharCommaSeparator: {
    digitGroupSeparator: u.options.digitGroupSeparator.comma,
    decimalCharacter: u.options.decimalCharacter.dot
  },
  commaDecimalCharDotSeparator: {
    digitGroupSeparator: u.options.digitGroupSeparator.dot,
    decimalCharacter: u.options.decimalCharacter.comma,
    decimalCharacterAlternative: u.options.decimalCharacterAlternative.dot
  },
  integer: {
    decimalPlaces: 0
  },
  integerPos: {
    minimumValue: u.options.minimumValue.zero,
    decimalPlaces: 0
  },
  integerNeg: {
    maximumValue: u.options.maximumValue.zero,
    decimalPlaces: 0
  },
  float: {
    allowDecimalPadding: u.options.allowDecimalPadding.never
  },
  floatPos: {
    allowDecimalPadding: u.options.allowDecimalPadding.never,
    minimumValue: u.options.minimumValue.zero,
    maximumValue: u.options.maximumValue.tenTrillions
  },
  floatNeg: {
    allowDecimalPadding: u.options.allowDecimalPadding.never,
    minimumValue: u.options.minimumValue.tenTrillions,
    maximumValue: u.options.maximumValue.zero
  },
  numeric: {
    digitGroupSeparator: u.options.digitGroupSeparator.noSeparator,
    decimalCharacter: u.options.decimalCharacter.dot,
    currencySymbol: u.options.currencySymbol.none
  },
  numericPos: {
    digitGroupSeparator: u.options.digitGroupSeparator.noSeparator,
    decimalCharacter: u.options.decimalCharacter.dot,
    currencySymbol: u.options.currencySymbol.none,
    minimumValue: u.options.minimumValue.zero,
    maximumValue: u.options.maximumValue.tenTrillions
  },
  numericNeg: {
    digitGroupSeparator: u.options.digitGroupSeparator.noSeparator,
    decimalCharacter: u.options.decimalCharacter.dot,
    currencySymbol: u.options.currencySymbol.none,
    minimumValue: u.options.minimumValue.tenTrillions,
    maximumValue: u.options.maximumValue.zero
  }
};
Object.getOwnPropertyNames(u.predefinedOptions).forEach((f) => {
  Object.freeze(u.predefinedOptions[f]);
});
Object.freeze(u.predefinedOptions);
Object.defineProperty(u, "predefinedOptions", { configurable: !1, writable: !1 });
document.querySelectorAll("[data-toggle]").forEach((f) => {
  f.addEventListener("change", (e) => {
    const t = e.target, s = t.getAttribute("data-toggle"), a = t.checked;
    if (!(s !== null))
      throw new Error("data-toggle attribute is required");
    const c = document.querySelectorAll(s);
    if (!(c.length > 0))
      throw new Error("data-toggle elements not found");
    c.forEach((l) => {
      a ? l.removeAttribute("disabled") : (l.setAttribute("disabled", "disabled"), l instanceof HTMLInputElement && l.type === "checkbox" && (l.checked = !1, l.dispatchEvent(new Event("change"))));
    });
  }), f.dispatchEvent(new Event("change"));
});
document.querySelectorAll("[data-format-currency]").forEach((f) => {
  new u(f, null, {
    currencySymbol: f.getAttribute("data-currency-symbol") ?? "R$ ",
    decimalCharacter: f.getAttribute("data-decimal-character") ?? ",",
    digitGroupSeparator: f.getAttribute("data-digit-group-separator") ?? ".",
    unformatOnSubmit: !0
  });
});
document.querySelectorAll("[data-pagbank-connect-environment-select]").forEach((f) => {
  const e = f.getAttribute(
    "data-pagbank-connect-modal-environment-id"
  );
  if (e === null)
    throw new Error(
      "Missing data-pagbank-connect-modal-production-id or data-pagbank-connect-modal-sandbox-id attribute"
    );
  const t = f.getAttribute(
    "data-pagbank-connect-environment-select"
  );
  if (t === null)
    throw new Error("Missing data-pagbank-connect-environment-select attribute");
  const s = document.getElementById(
    t
  );
  if (s === null)
    throw new Error("data-pagbank-connect-environment-select element not found");
  const a = () => {
    const d = s.value;
    return e.replace("{{environment}}", d);
  }, n = () => {
    const d = a(), g = document.getElementById(d);
    if (g === null)
      throw new Error(`Modal with id ${d} not found`);
    g.classList.remove("hidden"), g.querySelectorAll("[data-modal-close-button]").forEach((p) => {
      p.addEventListener("click", () => {
        g.classList.add("hidden");
      });
    });
  }, c = () => {
    const d = a(), g = document.getElementById(d);
    if (g === null)
      throw new Error(`Modal with id ${d} not found`);
    g.classList.add("hidden");
  };
  f.addEventListener("click", () => {
    n();
  });
  const o = () => {
    f.classList.remove("button-primary"), f.setAttribute("disabled", "disabled"), f.textContent = f.getAttribute(
      "data-pagbank-loading-text"
    );
  }, l = () => {
    f.removeAttribute("disabled"), f.classList.add("button-primary"), f.textContent = f.getAttribute(
      "data-pagbank-not-connected-text"
    );
  }, h = () => {
    f.removeAttribute("disabled"), f.classList.remove("button-primary"), f.textContent = f.getAttribute(
      "data-pagbank-connected-text"
    );
  };
  window.addEventListener("update_pagbank_connect_oauth_status", () => {
    (async () => {
      c(), o();
      const { data: d } = await J.get(woocommerce_admin.ajax_url, {
        params: {
          action: "pagbank_woocommerce_oauth_status",
          environment: s.value,
          nonce: f.getAttribute("data-pagbank-connect-nonce")
        }
      });
      d.oauth_status === "connected" ? h() : l();
    })();
  }), s.addEventListener("change", () => {
    window.dispatchEvent(new Event("update_pagbank_connect_oauth_status"));
  }), window.dispatchEvent(new Event("update_pagbank_connect_oauth_status"));
});
document.querySelectorAll("[data-connect-application-id]").forEach((f) => {
  const e = f.getAttribute("data-connect-application-id"), t = f.getAttribute("data-connect-application-environment"), s = f.getAttribute("data-connect-nonce");
  if (e == null)
    throw new Error("Missing data-connect-application-id attribute");
  if (t === null)
    throw new Error("Missing data-connect-application-environment attribute");
  if (s === null)
    throw new Error("Missing data-connect-nonce attribute");
  f.addEventListener("click", (a) => {
    a.preventDefault();
    const n = a.target;
    (async () => {
      try {
        n.classList.add("disabled"), n.setAttribute("disabled", "disabled");
        const { data: c } = await J.get(woocommerce_admin.ajax_url, {
          params: {
            action: "pagbank_woocommerce_oauth_url",
            id: e,
            nonce: s,
            environment: t
          }
        }), o = window.open(c.oauth_url);
        if (o != null) {
          const l = setInterval(() => {
            o.closed && (clearInterval(l), window.dispatchEvent(new Event("update_pagbank_connect_oauth_status")));
          }, 500);
        } else
          alert(
            "Parece que seu navegador bloqueou a janela de autenticação. Por favor, desbloqueie e tente novamente."
          );
      } catch {
        alert("Houve um erro na conexão. Por favor, tente novamente.");
      }
      n.classList.remove("disabled"), n.removeAttribute("disabled");
    })();
  });
});
