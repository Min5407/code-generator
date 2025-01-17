import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createWorkspace = mutation({
  args: {
    messages: v.any(),
  },
  handler: async (ctx, args): Promise<string> => {
    const workspaceId = await ctx.db.insert('workspace', {
      message: args.messages,
    });
    return workspaceId;
  },
});

export const getWorkspaceMessages = query({
  args: { workspaceId: v.string() },
  handler: async (ctx, args): Promise<any[]> => {
    const result = await ctx.db
      .query('workspace')
      .filter((q) => q.eq(q.field('_id'), args.workspaceId))
      .unique();

    return result?.message || [];
  },
});

// export const addWorksaceMessage = mutation({
//   args: {
//     workspaceId: v.id('workspace'),
//     message: v.any(),
//   },

//   handler: async (ctx, args) => {
//     const result = ctx.db.patch(args.workspaceId, {
//       message: args.message,
//     });
//   },
// });
