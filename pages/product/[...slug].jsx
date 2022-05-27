import React from "react";
import { useRouter } from "next/router";
export default function Product() {
  const router = useRouter();
  console.log(router.query.slug);
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
