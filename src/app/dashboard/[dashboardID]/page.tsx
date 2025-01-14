export default async function dashboardDashboard({
  params,
}: {
  params: Promise<{ dashboardID: string }>;
}) {
  const id = await params;
  return <h1>{id.dashboardID}</h1>;
}
