import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { prisma } from "@/lib/db";
import { createTRPCRouter, authProcedure } from "../init";

export const usersRouter = createTRPCRouter({
  getUser: authProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: { name: true },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      return { name: user.name };
    }),
});
