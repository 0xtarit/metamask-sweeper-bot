"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const check_1 = require("../validate/check");
const config_1 = require("../validate/config");
const server_1 = require("./server");
const wallet_1 = require("../process/wallet");
class Controller {
    constructor() { }
    // check rpc url
    checkRpcUrl(rpc_url) {
        if (check_1.Check.isNull(rpc_url)) {
            console.log('Please configure the bot with network RPC URL.');
            return false;
        }
        else {
            return true;
        }
    }
    // check config details
    checkConfigDetails(variables) {
        let config_result = config_1.Config.config(variables);
        if (config_result.status === false ||
            config_result.status === undefined ||
            config_result.status === null) {
            return [false, config_result.error];
        }
        else {
            return [true, config_result.configDetails];
        }
    }
    start_server(port) {
        server_1.Server.start_server(port);
    }
    process(bot_details) {
        wallet_1.SetWallet.main(bot_details);
    }
}
exports.Controller = Controller;
