const { Customer } = require("../models/collections");
import { CustomersInput } from './../types';
const customerResolvers = {
  Query: {
    customers: async () => {
      return await Customer.find();
    },
    customer: async (_:void, { id }:{id:string}) => {
      return await Customer.findById(id);
    },
  },
  Mutation: {
    createCustomer: async (_:void, { input }:{input:CustomersInput}) => {
      return await Customer.create(input);
    },
    updateCustomer: async (_:void, { id, input }:{id:string,input:CustomersInput}) => {
      return await Customer.findByIdAndUpdate(id, input, { new: true });
    },
    deleteCustomer: async (_:void, { id }:{id:string}) => {
      return await Customer.findByIdAndDelete(id);
    },
  },
};

module.exports = customerResolvers;