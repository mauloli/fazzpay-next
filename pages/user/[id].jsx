import React from "react";
import { useRouter } from "next/router";
export default function User() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Details {router.query.id}</h1>
    </div>
  );
}
