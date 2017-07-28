"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Insulin_1 = require("./Insulin");
/**
 * 5000ms onset delay
 * 240000ms effect duration
 * 2 power
 * false = flat response profile
 */
exports.basal = new Insulin_1.Insulin(5000, 240000, 5, false);
