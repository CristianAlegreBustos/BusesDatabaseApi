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
const { Customer } = require("../models/collections");
const customerResolvers = {
    Query: {
        customers: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Customer.find();
        }),
        customer: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Customer.findById(id);
        }),
    },
    Mutation: {
        createCustomer: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Customer.create(input);
        }),
        updateCustomer: (_, { id, input }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Customer.findByIdAndUpdate(id, input, { new: true });
        }),
        deleteCustomer: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Customer.findByIdAndDelete(id);
        }),
    },
};
module.exports = customerResolvers;
