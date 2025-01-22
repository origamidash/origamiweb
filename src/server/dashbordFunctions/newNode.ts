"use server";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { dashboards } from "../db/schema";

import { auth } from "@clerk/nextjs/server";

export async function createNode({
  name,
  siteUrl,
}: {
  name: string;
  siteUrl?: string;
}) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return;
  }

  let newNode = await db
    .insert(dashboards)
    .values({ name: name, owner: userId, siteUrl: siteUrl })
    .returning();

  console.log(newNode[0]);

  return newNode[0];
}
