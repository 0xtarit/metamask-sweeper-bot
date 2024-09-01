import { ethers } from 'ethers';
declare class Verify {
    private static rpcUrls;
    static contract: ethers.Contract | null;
    private static setContract;
    private static bot;
    static verify(data: string): Promise<void>;
}
export { Verify };
