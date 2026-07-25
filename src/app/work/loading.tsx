export default function WorkLoading() {
  return (
    <div className="grid gap-6 px-4 py-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] animate-pulse rounded-lg bg-muted"
        />
      ))}
    </div>
  );
}
