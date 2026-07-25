import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/sections/container";

export default function ProjectNotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-semibold">Project Not Found</h1>
<p className="mt-4 text-muted">
  This case study doesn&apos;t exist or may have been moved.
</p>
      <Button asChild className="mt-8">
        <Link href="/work">Back to Work</Link>
      </Button>
    </Container>
  );
}
