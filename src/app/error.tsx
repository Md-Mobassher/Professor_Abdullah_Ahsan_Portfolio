"use client";

import { Button } from "@/components/ui/button";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="mt-10  text-center">
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl">
        Something went wrong!!!
      </p>
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl mt-2">
        {error.message}
      </p>
      <Button
        onClick={() => reset()}
        className="bg-cyan-400 hover:bg-cyan-600 hover:text-white mt-10"
      >
        Try Again
      </Button>
    </div>
  );
};

export default ErrorPage;
