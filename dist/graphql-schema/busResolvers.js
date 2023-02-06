import { Bus } from '../models/collections.js';
export const busResolvers = {
    Query: {
        buses: async () => {
            return await Bus.find();
        },
        bus: async (_, { id }) => {
            return await Bus.findById(id);
        },
    },
    Mutation: {
        createBus: async (_, { input }) => {
            return await Bus.create(input);
        },
        updateBus: async (_, { id, input }) => {
            return await Bus.findByIdAndUpdate(id, input, { new: true });
        },
        deleteBus: async (_, { id }) => {
            return await Bus.findByIdAndDelete(id);
        },
    },
};
