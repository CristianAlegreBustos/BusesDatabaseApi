import { Customer } from '../models/collections.js';
export const customerResolvers = {
    Query: {
        customers: async () => {
            return await Customer.find();
        },
        customer: async (_, { id }) => {
            return await Customer.findById(id);
        },
    },
    Mutation: {
        createCustomer: async (_, { input }) => {
            return await Customer.create(input);
        },
        updateCustomer: async (_, { id, input }) => {
            return await Customer.findByIdAndUpdate(id, input, { new: true });
        },
        deleteCustomer: async (_, { id }) => {
            return await Customer.findByIdAndDelete(id);
        },
    },
};
