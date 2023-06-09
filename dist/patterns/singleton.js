"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySingleton = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MySingleton = /*#__PURE__*/function () {
  function MySingleton() {
    _classCallCheck(this, MySingleton);
    _defineProperty(this, "_number", 0);
    _defineProperty(this, "_name", "foobaz");
    if (!MySingleton.$i) MySingleton.$i = this;
    return MySingleton.$i;
  }
  _createClass(MySingleton, [{
    key: "increment",
    value: function increment() {
      this._number++;
      console.log('mySingletonInstance2.increment', this._number);
    }
  }, {
    key: "setName",
    value: function setName(string) {
      this._name = string;
      console.log('mySingletonInstance2.setName', string);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "number",
    get: function get() {
      return this._number;
    }
  }]);
  return MySingleton;
}(); // Many Instances, One Memory Reference
exports.MySingleton = MySingleton;
var mySingletonInstance1 = new MySingleton();
console.log('mySingletonInstance1.number', mySingletonInstance1.number);
mySingletonInstance1.increment();
var mySingletonInstance2 = new MySingleton();
console.log('mySingletonInstance2.number', mySingletonInstance2.number);
mySingletonInstance2.setName('foobaz2');
console.log('mySingletonInstance2.name', mySingletonInstance2.name);