export const NotFOundErrorHandling = (error) => {
    console.log(error);
    //   if (response && response.length > 0 ||response && Object.keys(response).length>0) {
    //     console.log(Object.keys(response).length)
    //     return response;
    //   } else {
    //     console.log("HOLA")
    //     if (id==null){ 
    //         throw new GraphQLError(`There are no ${type} in the Database`, {
    //         extensions: {
    //             code: `${type.toUpperCase()}_NOT_FOUND`,
    //         },
    //         });
    //     }else{
    //         throw new GraphQLError(`There are no ${type} with the id `+id, {
    //             extensions: {
    //                 code: `${type.toUpperCase()}_NOT_FOUND`,
    //             },
    //             });
    //     }
    //   }
};
