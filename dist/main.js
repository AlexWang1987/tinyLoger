'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// //////////////////////////////////////////////////////////////////////////////
//
//  Copyright (C) 2016-present  All Rights Reserved.
//  Licensed under the Apache License, Version 2.0 (the "License");
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Github Home: https://github.com/AlexWang1987
//  Author: AlexWang
//  Date: 2016-08-27 22:58:47
//  QQ Email: 1669499355@qq.com
//  Last Modified time: 2016-11-17 14:59:05
//  Description: Loger
//
// //////////////////////////////////////////////////////////////////////////////

var Loger = function () {
  function Loger(info) {
    _classCallCheck(this, Loger);

    this.info = info || '';
    this.id = this.initId();
  }

  _createClass(Loger, [{
    key: 'initId',
    value: function initId() {
      var infoType = this.info.constructor.name.toLowerCase();
      if (infoType === 'string') {
        return this.info;
      }
      if (infoType === 'object') {
        return this.info.mid || '';
      }
      return '';
    }
  }, {
    key: 'log',
    value: function log() {
      for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {
        msg[_key] = arguments[_key];
      }

      this._log(Loger.LOG, msg);
    }
  }, {
    key: 'warn',
    value: function warn() {
      for (var _len2 = arguments.length, msg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        msg[_key2] = arguments[_key2];
      }

      this._log(Loger.WARN, msg);
    }
  }, {
    key: 'error',
    value: function error() {
      for (var _len3 = arguments.length, msg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        msg[_key3] = arguments[_key3];
      }

      this._log(Loger.ERROR, msg);
    }
  }, {
    key: '_log',
    value: function _log(type, msg) {
      msg = JSON.stringify(msg);

      var logMsg = this.id + ' -> ' + msg;
      if (type >= Loger.logLevel) {
        switch (type) {
          case Loger.LOG:
            console.log(logMsg);
            break;
          case Loger.WARN:
            console.warn(logMsg);
            break;
          case Loger.ERROR:
            console.error(logMsg);
            break;
        }
      }
    }
  }]);

  return Loger;
}();

Loger.LOG = 0;
Loger.WARN = 1;
Loger.ERROR = 2;
Loger.NO = Infinity;
Loger.logLevel = Loger.LOG;

exports.default = {
  getLoger: function getLoger(info) {
    return new Loger(info);
  },
  setLogLevel: function setLogLevel(logLevel) {
    Loger.logLevel = logLevel;
  },
  LOG: Loger.LOG,
  WARN: Loger.WARN,
  ERROR: Loger.ERROR,
  NO: Loger.NO
};
