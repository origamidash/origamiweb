export default function NewAppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex h-full flex-row justify-center">{children}</div>;
}
