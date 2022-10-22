"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application = void 0;
const handleAlertsStatus_1 = require("./job/handleAlertsStatus");
const application = () => {
    (0, handleAlertsStatus_1.handleAlertsStatus)();
};
exports.application = application;
