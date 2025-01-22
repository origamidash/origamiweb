// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  jsonb,
  boolean,
  uuid,
} from "drizzle-orm/pg-core";
import internal from "stream";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */

export const createTable = pgTableCreator((name) => `origamiweb_${name}`);

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

export const dashboards = createTable(
  "dashboards",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    internalID: varchar("internal_id")
      .$defaultFn(() => generateRandomString(7))
      .unique()
      .notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
    owner: varchar("owner", { length: 256 }).notNull(),
    siteUrl: varchar("site_url", { length: 256 }),
    linked: boolean("linked").default(false).notNull(),
  },
  (example) => ({
    nameIndex: index("name_index").on(example.name),
    internalIndex: index("internal_index").on(example.internalID),
  }),
);

export const dashboardNodes = createTable("dashboard_nodes", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  internalID: varchar("internal_id")
    .unique()
    .references(() => dashboards.internalID),
  name: varchar("name", { length: 256 }).notNull(),
  source: varchar("source", { length: 256 }).notNull(),
  dataType: varchar("data_type", { length: 256 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
    () => new Date(),
  ),
});
