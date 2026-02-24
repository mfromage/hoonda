import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tighter text-zinc-200 sm:text-9xl">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
