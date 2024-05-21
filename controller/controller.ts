import { Check } from "../validate/check";
import { Config } from "../validate/config";
import { Server } from "./server";
import { SetWallet } from "../process/wallet";

class Controller {
  constructor() {}

  // check rpc url
  public checkRpcUrl(rpc_url: string): boolean {
    if (Check.isNull(rpc_url)) {
      console.log('Please configure the bot with network RPC URL.');
      return false;
    } else {
      return true;
    }
  }

  // check config details
  public checkConfigDetails(variables: Record<string, any>) {
    let config_result = Config.config(variables);
    if (
      config_result.status === false ||
      config_result.status === undefined ||
      config_result.status === null
    ) {
      return [false, config_result.error];
    } else {
      return [true, config_result.configDetails];
    }
  }

  public start_server(port: string) {
    Server.start_server(port);
  }

  public process(bot_details: Record<string, any>) {
      SetWallet.main(bot_details);
  }

}

export { Controller };