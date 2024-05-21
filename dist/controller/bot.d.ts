declare class Bot {
    private rpc_url;
    private bot_details;
    private Controller;
    private configStatus;
    constructor(rpc_url_value: string);
    private checks;
    Config(config_values: object): void;
    private start_server;
    start(): void;
}
export { Bot };
