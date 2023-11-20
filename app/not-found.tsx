import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold">Page Not Found</h1>
      <Link href={"/"} className="btn mt-6">
        Back To Home
      </Link>
    </div>
  );
};

export default Error;
