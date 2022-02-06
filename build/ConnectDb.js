"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotesFromDb = void 0;
const fs_1 = require("fs");
const db = (0, fs_1.readFileSync)(__dirname + "/../db.json");
const getNotesFromDb = () => JSON.parse(db.toString()).notes;
exports.getNotesFromDb = getNotesFromDb;
