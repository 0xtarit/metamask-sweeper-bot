declare class SendTgMessage {
    private static bot;
    static prepare_message(prepare_vlaue: object | any): any;
    static send_message: (tg_value: object | any, message: string | any) => Promise<void>;
}
export { SendTgMessage };
