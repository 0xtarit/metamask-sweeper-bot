declare class Controller {
    constructor();
    checkRpcUrl(rpc_url: string): boolean;
    checkConfigDetails(variables: Record<string, any>): (string | boolean | undefined)[] | (boolean | Record<string, any> | undefined)[];
    start_server(port: string): void;
    process(bot_details: Record<string, any>): void;
}
export { Controller };
