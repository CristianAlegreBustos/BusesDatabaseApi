import { Customer } from "../models/collections.js";
export const customerResolvers = {
    Query: {
        getAllcustomers: async () => {
            const customers = await Customer.find();
            return customers;
        },
        getCustomerbyId: async (_, args) => {
            const customer = await Customer.findById(args.id);
            return customer;
        },
    },
    Mutation: {
        createCustomer: async (_, args) => {
            const { name, email, phone, seat } = args;
            // console.log({parent,args,context,info})
            const newCostumer = new Customer({ name, email, phone, seat });
            console.log(newCostumer);
            await newCostumer.save();
            return newCostumer;
        },
        updateCustomer: async (_, { id, name, email, phone, seat }) => {
            return await Customer.findByIdAndUpdate(id, { $set: { name, email, phone, seat } }, { new: true });
        },
        deleteCustomer: async (_, args) => {
            const customer = await Customer.findByIdAndDelete(args.id);
            return `Customer deleted succesfully : ${customer}`;
        },
    },
};
