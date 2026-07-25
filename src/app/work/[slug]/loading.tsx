export default function ProjectLoading() {
  return (
    <div className="space-y-6 px-4 py-20 sm:px-6 lg:px-8">
      <div className="aspect-[16/9] w-full animate-pulse rounded-lg bg-muted" />
      <div className="h-6 w-1/3 animate-pulse rounded bg-muted" />
      <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
    </div>
  );
}
