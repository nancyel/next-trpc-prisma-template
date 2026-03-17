import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { Suspense } from "react";
import HealthCheck from "./health-check";

const TestPage = () => {
  prefetch(trpc.health.queryOptions());

  return (
    <HydrateClient>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1>TRPC Test Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <HealthCheck />
        </Suspense>
      </div>
    </HydrateClient>
  );
};

export default TestPage;
