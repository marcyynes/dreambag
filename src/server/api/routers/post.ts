import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

// MOCK MODE — set to true to disable real database
const USE_MOCK = true;

// Fake data for testing
const mockPosts = [
  { id: 1, name: "Mock Post 1", createdAt: new Date() },
  { id: 2, name: "Mock Post 2", createdAt: new Date() },
];

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return { greeting: `Hello ${input.text}` };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      if (USE_MOCK) {
        // Simulate adding a post
        const newPost = {
          id: mockPosts.length + 1,
          name: input.name,
          createdAt: new Date(),
        };
        mockPosts.push(newPost);
        return newPost;
      } else {
        // Real database insert (disabled in mock mode)
        await ctx.db.insert(posts).values({ name: input.name });
        return { success: true };
      }
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    if (USE_MOCK) {
      // Return the last mock post
      return mockPosts[mockPosts.length - 1] ?? null;
    } else {
      const post = await ctx.db.query.posts.findFirst({
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      });
      return post ?? null;
    }
  }),
});
