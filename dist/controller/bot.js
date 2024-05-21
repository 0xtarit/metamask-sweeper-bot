"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const controller_1 = require("./controller");
class Bot {
    constructor(rpc_url_value) {
        this.rpc_url = rpc_url_value;
        this.Controller = new controller_1.Controller();
        this.configStatus = false;
    }
    // =================================
    // Method to check user's details
    checks() {
        if (this.Controller.checkRpcUrl(this.rpc_url)) {
            return false;
        }
        else {
            return true;
        }
    }
    Config(config_values) {
        let config_results = this.Controller.checkConfigDetails(config_values);
        if (!config_results[0]) {
            this.configStatus = false;
            return;
        }
        else {
            this.configStatus = true;
            this.bot_details = config_results[1];
        }
    }
    start_server() {
        this.Controller.start_server(this.bot_details.server_port);
    }
    start() {
        if (this.checks()) {
            return;
        }
        this.start_server();
        if (this.configStatus) {
            this.bot_details['rpc_url'] = this.rpc_url;
            this.Controller.process(this.bot_details);
        }
    }
}
exports.Bot = Bot;
