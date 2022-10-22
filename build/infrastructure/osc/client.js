"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const osc_1 = __importDefault(require("osc"));
const osc_json_1 = __importDefault(require("../../config/osc.json"));
const client = new osc_1.default.UDPPort({ remotePort: osc_json_1.default.port });
exports.client = client;
client.open();
