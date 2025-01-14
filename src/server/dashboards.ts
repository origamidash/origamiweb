"use server";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { dashboards } from "./db/schema";

import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

export async function getDashboards() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const dashboards = await db.query.dashboards.findMany({
    where: (dashboards, { eq }) => eq(dashboards.owner, userId),
  });

  return dashboards;
}

export async function createDashboard({
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

  let newDashboard = await db
    .insert(dashboards)
    .values({ name: name, owner: userId, siteUrl: siteUrl })
    .returning();

  console.log(newDashboard);

  return newDashboard;
}
