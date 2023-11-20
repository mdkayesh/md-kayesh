import Logo from "@/utils/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className="loading flex min-h-screen w-full items-center justify-center bg-bg_primary opacity-0">
      <Logo className="h-fit w-40" />
    </div>
  );
};

export default Loading;
