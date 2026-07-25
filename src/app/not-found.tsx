import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/sections/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="mt-4 text-muted">This page could not be found.</p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </Container>
  );
}
