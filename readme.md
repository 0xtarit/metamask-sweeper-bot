<div align="center">
  <h1>
  <strong style="font-size:45px;">metamask-sweeper-bot</strong>
  </h1>
</div>

![GitHub license](https://img.shields.io/github/license/0xtarit/metamask-sweeper-bot)
![npm](https://img.shields.io/npm/v/metamask-sweeper-bot)
![GitHub issues](https://img.shields.io/github/issues/0xtarit/metamask-sweeper-bot)
![GitHub stars](https://img.shields.io/github/stars/0xtarit/metamask-sweeper-bot)
![GitHub forks](https://img.shields.io/github/forks/0xtarit/metamask-sweeper-bot)

# Description

metamask-sweeper-bot is an npm package that watches each block for a balance update. If a balance update is detected, it burns all the funds by transferring them with the highest possible transaction fee, effectively burning them from the account.

# Supported Chains

- **Ethereum**: Mainnet, Goerli, Sepolia
- **Polygon**: Mainnet, Mumbai, Amoy
- **Optimism**: Mainnet, Goerli, Kovan, Sepolia
- **Arbitrum**: Mainnet, Goerli, Rinkeby, Sepolia
- **Astar**: Mainnet
- **PolygonZKEVM**: Mainnet, Testnet
- **Base**: Mainnet, Goerli, Sepolia
- **Zksync**: Mainnet, Sepolia


# Available Parameters

- `target_wallet_private_key`: Private key of the target wallet.
- `recipient_address`: Wallet address for receiving burning funds.
- `telegram_user_id`: Your Telegram user ID for sending messages.
- `telegram_bot_token`: Your Telegram bot token ID.
- `network_name`: Name of the burning network. [ex- Ethereum, Ethereum Sepolia] ( use only for sending telegram message ).

Optional Parameters:

- `server_port`: Bot running server port number.
- `extra_gas_fee`: Extra gas fee in Gwei. Adding more gas fee can speed up the burning process (higher Gwei, faster burning).
- `gas_limit`: Gas limit per unit. Minimum required is 21,000. Increasing gas limit can speed up transactions.

<br>

# **Getting started :-**

## **1. Installation**

```bash
npm install metamask-sweeper-bot
```

## **2. Setting up Telegram Bot**

1. Go to [@BotFather](https://t.me/BotFather) on Telegram and create a new bot. Copy the bot token provided.
2. Visit [@userinfobot](https://t.me/userinfobot) and get your Telegram user ID.

## **3. Generating RPC URLs**

1. Sign up for accounts on [Alchemy](https://alchemy.com/) and [Infura](https://www.infura.io/) services to get RPC URLs.


## **4. Usage**
#### **TypeScript**
```
import { Bot } from "metamask-sweeper-bot";
const bot = new Bot('RPC URL');
```
#### **Node.js**
```
const { Bot } = require("metamask-sweeper-bot");
const bot = new Bot('RPC URL');
```
#### **Bot Configuration**
```
const details = {
    target_wallet_private_key: 'Target wallet private key',
    recipient_address: 'Recipient address',
    telegram_user_id: 'Your Telegram user ID',
    telegram_bot_token: 'Your Telegram bot token',
    network_name: 'Network name',

    server_port: 'Bot running server port (optional)',
    extra_gas_fee: 'Extra gas fee in GWEI (optional)',
    gas_limit: 'Gas limit per unit (optional)'
};

bot.Config(details);
```

#### **Bot Start Function**
```
bot.start();
```

## **5. Running the Bot**
```
node index.js
```

Your bot is now running. Wait for it to receive funds on your target wallet.

<br><br>

# **Questions and Feedback**

If you have any questions, issues, or feedback, please file an issue
on [GitHub](https://github.com/0xtarit/metamask-sweeper-bot/issues), or drop us a message on
our [Telegram]() channel for the SDK.

<br>

> 🙋‍♀️ **WE WANT TO HEAR FROM YOU!**
>
>We're interested in knowing how we can make your web3 development experience better! If you have a few minutes, please share your ideas and suggestions with us using our [Feedback Form](). Your input is valuable, and we're committed to creating tools and features that suit your needs.
