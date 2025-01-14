export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[100rem] flex-row items-center justify-center gap-2">
        <div className="flex h-full w-full flex-col justify-start rounded-lg border border-neutral-800 p-5 px-6 shadow shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
