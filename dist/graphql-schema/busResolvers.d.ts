export declare const busResolvers: {
    Query: {
        getAllBuses: () => Promise<any>;
        getBusesbyId: (_: void, args: any) => Promise<any>;
    };
    Mutation: {
        createBus: (_: any, args: any) => Promise<import("mongoose").Document<unknown, any, {
            Total_Seat: number;
            Empty_Seat: number;
            Full_Seat: number;
            Patent: string;
        }> & {
            Total_Seat: number;
            Empty_Seat: number;
            Full_Seat: number;
            Patent: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }>;
        updateBus: (_: void, args: any) => Promise<(import("mongoose").Document<unknown, any, {
            Total_Seat: number;
            Empty_Seat: number;
            Full_Seat: number;
            Patent: string;
        }> & {
            Total_Seat: number;
            Empty_Seat: number;
            Full_Seat: number;
            Patent: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        }) | null>;
        deleteBus: (_: void, args: any) => Promise<any>;
    };
};
//# sourceMappingURL=busResolvers.d.ts.map