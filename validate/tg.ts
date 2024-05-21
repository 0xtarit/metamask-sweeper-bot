import TelegramBot from 'node-telegram-bot-api';

class SendTgMessage {

  private static bot: TelegramBot | null = null;

  public static prepare_message(prepare_vlaue: object | any): any {
    const messageText = `
<b>Network:</b> ${prepare_vlaue.network}\n
<b>Tx Hash:</b> <code>${prepare_vlaue.hash}</code>\n
<b>Amount:</b> <code>${prepare_vlaue.amount}</code>`;

    return messageText;
  }

  public static send_message = async (
    tg_value: object | any,
    message: string | any,
  ) => {
    try {

      if (!SendTgMessage.bot) {
        SendTgMessage.bot = new TelegramBot(tg_value.bot_token, {
          polling: true,
        });
      }


      SendTgMessage.bot
        .sendMessage(tg_value.telegram_id, message, { parse_mode: 'HTML' })
        .then(() => {
          console.log('Message sent successfully');
        })
        .catch((error: Error) => {
          console.error('Error:', error.message);
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };
}

export {SendTgMessage};