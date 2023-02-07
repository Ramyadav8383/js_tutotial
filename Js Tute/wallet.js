// // import { Secp256k1HdWallet } from "/@cosmjs/launchpad";
// // // const Secp256k1HdWallet = require("/@cosmjs/launchpad");

// // const wallet = await Secp256k1HdWallet.generate();
// // console.log("Mnemonic:", wallet.mnemonic);

// // const [{ address }] = await wallet.getAccounts();
// // console.log("Address:", address);
// import {
//   Secp256k1HdWallet,
//   SigningCosmosClient,
//   coins,
// } from "/@cosmjs/launchpad";

// // import { Secp256k1HdWallet } from "@cosmjs/launchpad";

// // const wallet = await Secp256k1HdWallet.fromMnemonic(
// //   // your mnemonic here 👇
// //   "enlist hip relief stomach skate base shallow young switch frequent cry park"
// // );

// // const [{ address }] = await wallet.getAccounts();
// // console.log("Address:", address);

// // …

// const wallet = await Secp256k1HdWallet.generate();
// const [{ address }] = await wallet.getAccounts();
// console.log("Address:", address);

// // Ensure the address has some tokens to spend

// const lcdApi = "https://…";
// const client = new SigningCosmosClient(lcdApi, address, wallet);

// // check our balance
// const account = await client.getAccount();
// console.log("Account:", account);

// // Send tokens
// const recipient = "cosmos1b2340gb2…";
// await client.sendTokens(recipient, coins(123, "uatom"));
