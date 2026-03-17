import { baseProcedure, createTRPCRouter } from "../init";
import { usersRouter } from "./users";
export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async () => {
    return {
      status: "ok",
    };
  }),
  users: usersRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
