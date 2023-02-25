import { sanitize } from "../utils/sanitize";
import { User } from "../models/collections";
import { ManageQueryAnswer } from "../utils/ErrorHandling/typesErrors/NotFoundErrorHandling.js";
import { ErrorHandling } from "../utils/ErrorHandling/ErrorHandling.js";

export const register_user = {
  Mutation: {
    registerUser: async (_, args) => {
      const sanitizedArgs = sanitize(args);
      const { email, password } = sanitizedArgs;
      const user = new User({ email, password });
      return await user.save();
    },
  },
  Query: {
    getBusesbyEmail: async (_: void, args) => {
      try {
        const user = await User.findOne({
          email: encodeURIComponent(args.email),
        });
        return ManageQueryAnswer(user, "users");
      } catch (error) {
        ErrorHandling(error);
      }
    },
  },
};
