import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout/main";
export default function HandleImage() {
  const imageProfile = {
    width: "150px",
    backgroundColor: "red",
  };

  return (
    <Layout>
      <div>
        <h1>Handle Image</h1>
        <hr />
        <h4>Withot next Image</h4>
        <img src="../vercel.svg" alt="img image" style={imageProfile} />
        <hr />
        <h4>With next</h4>
        <Image
          src="/vercel.svg"
          alt="img image"
          width={100}
          height={100}
        ></Image>
      </div>
    </Layout>
  );
}
