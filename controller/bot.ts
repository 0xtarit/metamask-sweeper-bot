import { Controller } from './controller';


class Bot {
  private rpc_url: string;
  private bot_details: object | any;
  private Controller: Controller;
  private configStatus: boolean;

  constructor(rpc_url_value: string) {
    this.rpc_url = rpc_url_value;
    this.Controller = new Controller();
    this.configStatus = false;
  }

  // =================================

  // Method to check user's details
  private checks(): boolean {
    if (this.Controller.checkRpcUrl(this.rpc_url)) {
      return false;
    }else{
      return true;
    }
  }

  public Config(config_values: object) {
    let config_results = this.Controller.checkConfigDetails(config_values);
    if(!config_results[0]){
      this.configStatus = false;
      return;
    }else{
      this.configStatus = true;
      this.bot_details = config_results[1];
    }
  }

  private start_server(){
      this.Controller.start_server(this.bot_details.server_port);
  }

  public start(): void {

    if (this.checks()){
      return;
    }

    this.start_server();

    if(this.configStatus){
      this.bot_details['rpc_url'] = this.rpc_url;
      this.Controller.process(this.bot_details);
    }

  }
}

export { Bot };