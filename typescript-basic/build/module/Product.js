"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Acer_1 = __importDefault(require("./class/Acer"));
const Toshiba_1 = __importDefault(require("./class/Toshiba"));
const acer = new Acer_1.default("Aspire 13 A315-41G-R5RI", true, false);
const toshiba = new Toshiba_1.default("Portege X30", false, false);
console.log(acer);
console.log(acer.handleBackspace());
console.log(toshiba);
console.log(toshiba.handleEnter());
