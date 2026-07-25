"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/sections/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-4 text-muted">{error.message}</p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </Container>
  );
}
