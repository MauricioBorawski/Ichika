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
exports.test = exports.createNote = void 0;
const builders_1 = require("@discordjs/builders");
const createNote = () => { };
exports.createNote = createNote;
const createNoteCommand = new builders_1.SlashCommandBuilder()
    .setName("create")
    .setDescription("creates a new note.")
    .addStringOption((option) => option.setName("add_note").setDescription("note:").setRequired(true));
exports.test = {
    data: createNoteCommand,
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Funciono :v");
        });
    },
};
