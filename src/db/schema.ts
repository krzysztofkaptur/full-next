import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  completed: boolean("completed").default(false).notNull(),
});