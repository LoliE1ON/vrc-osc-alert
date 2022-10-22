"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const animationParameters_json_1 = __importDefault(require("../../config/animationParameters.json"));
const sync = (client, status) => {
    try {
        client.send({
            address: animationParameters_json_1.default.alert.address,
            args: {
                type: animationParameters_json_1.default.alert.type,
                value: Boolean(status),
            },
        });
    }
    catch (throwable) {
        console.error(throwable);
    }
};
exports.sync = sync;
