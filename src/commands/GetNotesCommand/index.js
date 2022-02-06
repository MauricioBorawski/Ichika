"use strict";
exports.__esModule = true;
exports.createNewNote = void 0;
var fs_1 = require("fs");
var createNewNote = function () {
    return { content: "Pong", ephemeral: true };
};
exports.createNewNote = createNewNote;
var db = (0, fs_1.readFileSync)(__dirname + '../../../db.json');
// const json = JSON.parse(db.toString());
console.log(db);
