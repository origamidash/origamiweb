"use server";

import { db } from "@/server/db";
import { eq, and } from "drizzle-orm";
import { dashboards } from "./db/schema";

import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs/server";

export async function getDashboards() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return;
  }

  const dashboards = await db.query.dashboards.findMany({
    where: (dashboards, { eq }) => eq(dashboards.owner, userId),
  });

  return dashboards;
}

export async function getDashboard(id: string) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return;
  }

  const dashboard = await db.query.dashboards.findFirst({
    where: (dashboards, { eq }) =>
      and(eq(dashboards.internalID, id), eq(dashboards.owner, userId)),
  });

  return dashboard;
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

  console.log(newDashboard[0]);

  return newDashboard[0];
}

export async function updateDashboard(id: string, data: any) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return;
  }

  const dashboard = await db.query.dashboards.findFirst({
    where: (dashboards, { eq }) => eq(dashboards.internalID, id),
  });

  if (!dashboard) {
    return;
  }

  await db
    .update(dashboards)
    .set({ ...data })
    .where(eq(dashboards.internalID, id) && eq(dashboards.owner, userId));

  return dashboard;
}

export async function deleteDashboard(id: string) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return;
  }

  const dashboard = await db.query.dashboards.findFirst({
    where: (dashboards, { eq }) => eq(dashboards.internalID, id),
  });

  if (!dashboard) {
    return;
  }

  await db
    .delete(dashboards)
    .where(eq(dashboards.internalID, id) && eq(dashboards.owner, userId));

  return dashboard;
}
