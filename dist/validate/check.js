"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
class Check {
    constructor() { }
    static isNull(checking_value) {
        if (checking_value == null ||
            checking_value == undefined ||
            checking_value === '') {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Check = Check;
