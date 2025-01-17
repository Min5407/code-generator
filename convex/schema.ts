import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

const schema = defineSchema({
  workspace: defineTable({
    message: v.array(v.any()),
    fileData: v.optional(v.any()),
  }),
});

export default schema;
