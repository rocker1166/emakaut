import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  contents: defineTable({
    description: v.string(),
    tag: v.array(v.string()),
    title: v.string(),
    url: v.string(),
  }),
});