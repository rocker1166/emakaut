import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  content: defineTable({
    description: v.string(),
    id: v.float64(),
    tag: v.string(),
    title: v.string(),
    url: v.string(),
  }),
});