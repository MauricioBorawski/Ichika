"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require the necessary discord.js classes
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
const commands_1 = require("./commands");
(0, dotenv_1.config)();
const { TOKEN } = process.env;
console.log(TOKEN);
// Create a new client instance
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Ready!");
});
client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    (0, commands_1.respondInteraction)(interaction);
}));
// Login to Discord with your client's token
client.login(TOKEN);
