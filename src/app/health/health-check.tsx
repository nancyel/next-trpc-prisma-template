import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const HealthCheck = () => {
  const trpc = useTRPC();
  const { data, error } = useSuspenseQuery(trpc.health.queryOptions());
  return (
    <div>
      <h1>Health Check</h1>
      {error ? (
        <div style={{ color: "red" }}>Error: {error.message}</div>
      ) : (
        <div style={{ color: "green" }}>Status: {data?.status}</div>
      )}
    </div>
  );
};

export default HealthCheck;
