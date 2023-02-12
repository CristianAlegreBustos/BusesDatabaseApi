import { GraphQLError } from "graphql";
import { NotFoundErrorHandling } from "../NotFoundErrorHandling";
export const ValidationError = (error) => {
    switch (error.name) {
        case "CastError":
            throw new GraphQLError(`Validation error on field ${error.path}: value (${error.value}) must be ${error.kind}`, {
                extensions: {
                    code: "VALIDATION_FAILED",
                },
            });
        case "ValidationError":
            throw new GraphQLError(`Validation error: ${error.message}`, {
                extensions: {
                    code: "VALIDATION_FAILED",
                },
            });
        case "SyntaxError":
            throw new GraphQLError(`Syntax error in your query: ${error.message}`, {
                extensions: {
                    code: "SYNTAX_ERROR",
                },
            });
        case "AuthenticationError":
            throw new GraphQLError(`Authentication error: ${error.message}`, {
                extensions: {
                    code: "AUTHENTICATION_FAILED",
                },
            });
        case "AuthorizationError":
            throw new GraphQLError(`Authorization error: ${error.message}`, {
                extensions: {
                    code: "AUTHORIZATION_FAILED",
                },
            });
        case "NotFoundError":
            NotFoundErrorHandling(error);
        case "DataFetchingError":
            throw new GraphQLError(`Data fetching error: ${error.message}`, {
                extensions: {
                    code: "DATA_FETCHING_FAILED",
                },
            });
        default:
            throw error;
    }
};
