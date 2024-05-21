declare class Config {
    constructor();
    static config(variables: Record<string, any>): {
        status: boolean;
        configDetails?: Record<string, any>;
        error?: string;
    };
}
export { Config };
