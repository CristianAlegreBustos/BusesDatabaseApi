import { BusesInput } from './../types';
const { Bus } = require("../models/collections");
const busResolvers = {
  Query: {
    buses: async () => {
      return await Bus.find();
    },
    bus: async (_:void,  { id }:{id:string}) => {
      return await Bus.findById(id);
    },
  },
  Mutation: {
    createBus: async (_:void, { input }:{input:BusesInput}) => {
      return await Bus.create(input);
    },
    updateBus: async (_:void, { id, input }:{id:string,input:BusesInput}) => {
      return await Bus.findByIdAndUpdate(id, input, { new: true });
    },
    deleteBus: async (_:void,  { id }:{id:string}) => {
      return await Bus.findByIdAndDelete(id);
    },
  },
};

module.exports = busResolvers;
