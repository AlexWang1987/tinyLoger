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

class Loger {
  constructor(info) {
    this.info = info || '';
    this.id = this.initId();
  }

  initId() {
    const infoType = this.info.constructor.name.toLowerCase();
    if (infoType === 'string') {
      return this.info;
    }
    if (infoType === 'object') {
      return this.info.mid || '';
    }
    return '';
  }

  log(...msg) {
    this._log(Loger.LOG, msg);
  }

  warn(...msg) {
    this._log(Loger.WARN, msg);
  }

  error(...msg) {
    this._log(Loger.ERROR, msg);
  }

  _log(type, msg) {
    msg = JSON.stringify(msg);

    let logMsg = `${this.id} -> ${msg}`;
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
}

Loger.LOG = 0;
Loger.WARN = 1;
Loger.ERROR = 2;
Loger.NO = Infinity;
Loger.logLevel = Loger.LOG;

export default {
  getLoger: function getLoger(info) {
    return new Loger(info);
  },
  setLogLevel: function setLogLevel(logLevel) {
    Loger.logLevel = logLevel;
  },
  LOG: Loger.LOG,
  WARN: Loger.WARN,
  ERROR: Loger.ERROR,
  NO: Loger.NO,
};

