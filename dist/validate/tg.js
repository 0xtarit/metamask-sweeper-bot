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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTgMessage = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
class SendTgMessage {
    static prepare_message(prepare_vlaue) {
        const messageText = `
<b>Network:</b> ${prepare_vlaue.network}\n
<b>Tx Hash:</b> <code>${prepare_vlaue.hash}</code>\n
<b>Amount:</b> <code>${prepare_vlaue.amount}</code>`;
        return messageText;
    }
}
exports.SendTgMessage = SendTgMessage;
_a = SendTgMessage;
SendTgMessage.bot = null;
SendTgMessage.send_message = (tg_value, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!SendTgMessage.bot) {
            SendTgMessage.bot = new node_telegram_bot_api_1.default(tg_value.bot_token, {
                polling: true,
            });
        }
        SendTgMessage.bot
            .sendMessage(tg_value.telegram_id, message, { parse_mode: 'HTML' })
            .then(() => {
            console.log('Message sent successfully');
        })
            .catch((error) => {
            console.error('Error:', error.message);
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
