export declare const customerResolvers: {
    Query: {
        getAllcustomers: () => Promise<any>;
        getCustomerbyId: (_: void, args: any) => Promise<any>;
    };
    Mutation: {
        createCustomer: (_: void, args: any) => Promise<import("mongoose").Document<unknown, any, {
            name: string;
            email: string;
            phone: string;
            seat: number;
        }> & {
            name: string;
            email: string;
            phone: string;
            seat: number;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }>;
        updateCustomer: (_: void, args: any) => Promise<(import("mongoose").Document<unknown, any, {
            name: string;
            email: string;
            phone: string;
            seat: number;
        }> & {
            name: string;
            email: string;
            phone: string;
            seat: number;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }) | null>;
        deleteCustomer: (_: void, args: any) => Promise<any>;
    };
};
//# sourceMappingURL=customerResolvers.d.ts.map