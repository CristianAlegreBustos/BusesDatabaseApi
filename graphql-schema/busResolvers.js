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
const { Bus } = require("../models/collections");
const busResolvers = {
    Query: {
        buses: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Bus.find();
        }),
        bus: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Bus.findById(id);
        }),
    },
    Mutation: {
        createBus: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Bus.create(input);
        }),
        updateBus: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Bus.findByIdAndUpdate(id, input, { new: true });
        }),
        deleteBus: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Bus.findByIdAndDelete(id);
        }),
    },
};
module.exports = busResolvers;
