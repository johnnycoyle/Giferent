webpackHotUpdate(0,{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(52);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var CreateAccount = function CreateAccount(props) {
  _objectDestructuringEmpty(props);

  var handleSubmit = function handleSubmit(event) {
    console.log(event.target.value);
  };

  return _react2.default.createElement(
    "form",
    { onSubmit: handleSubmit },
    _react2.default.createElement(
      "label",
      null,
      "Name:",
      _react2.default.createElement("input", { type: "text", value: "defaultValue" })
    ),
    _react2.default.createElement("input", { type: "submit", value: "Submit" })
  );
};

CreateAccount.propTypes = {};

exports.default = CreateAccount;

/***/ })

})