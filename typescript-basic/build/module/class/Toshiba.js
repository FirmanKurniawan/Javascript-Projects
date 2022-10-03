"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Laptop_1 = __importDefault(require("../Laptop"));
class Toshiba extends Laptop_1.default {
    constructor(type, withNumeric, withTouchpadButtons) {
        super("Toshiba", type, withNumeric, withTouchpadButtons);
    }
}
exports.default = Toshiba;
