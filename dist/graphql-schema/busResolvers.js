import { Bus } from "../models/collections.js";
export const busResolvers = {
    Query: {
        getAllBuses: async () => {
            const Buses = await Bus.find();
            return Buses;
        },
        getBusesbyId: async (_, args) => {
            const individual_Bus = await Bus.findById(args.id);
            return individual_Bus;
        },
    },
    Mutation: {
        createBus: async (_, { Total_Seat, Empty_Seat, Full_Seat, Patent }) => {
            const bus = new Bus({ Total_Seat, Empty_Seat, Full_Seat, Patent });
            return await bus.save();
        },
        updateBus: async (_, { id, Total_Seat, Empty_Seat, Full_Seat, Patent }) => {
            return await Bus.findByIdAndUpdate(id, { $set: { Total_Seat, Empty_Seat, Full_Seat, Patent } }, { new: true });
        },
        deleteBus: async (_, args) => {
            const BusDeleted = await Bus.findByIdAndDelete(args.id);
            return `Bus deleted succesfully : ${BusDeleted}`;
        },
    },
};
