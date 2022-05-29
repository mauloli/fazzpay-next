import React, { useState } from "react";
import axiosServer from "../../utils/axiosServer";
import { useRouter } from "next/router";
import Router from "next/router";
import cookies from "next-cookies";
import styles from "./Transfer.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer/index ";
import Menu from "../../components/menu";
import MainLayout from "../../components/Layout/main";
import { IoSearchOutline } from "react-icons/io5";

export async function getServerSideProps(context) {
  const params = context.query;
  const page = !params?.page ? 1 : params.page;
  const filter = !params?.filter ? "" : params.filter;
  const dataCookies = cookies(context);
  const dataUser = await axiosServer
    .get(`/user?page=1&limit=100&search=&sort=firstName ASC`, {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return [];
    });
  console.log(dataUser);
  return {
    props: {
      data: dataUser.data.data,
    }, // will be passed to the page component as props
  };
}

export default function Transfer(props) {
  const router = useRouter();
  const [data, setData] = useState(props.data);
  const dummyData = [
    { name: "samue", status: "accept", total: 500000 },
    { name: "Netflix", status: "transfer", total: 500000 },
    { name: "Cristine", status: "accept", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
  ];
  const handleSelect = (id) => {
    console.log(router.asPath + "/test");
  };
  return (
    <MainLayout data="transfer">
      <div className={styles.mainContainer}>
        <div className={` m-5 ${styles.userContainer}`}>
          <div className={styles.inputContainer}>
            <IoSearchOutline className={` ${styles.iconSearch}`} />
            <input type="text" className={` bg-light ${styles.search}`} />
          </div>

          {data.map((item, index) => (
            <div
              key={index}
              className={styles.containerUser}
              onClick={() => Router.push(`${router.asPath}/${item.id}`)}
            >
              <img src="../../user1.png" style={{ width: "50px" }} alt="" />
              <div className=" d-flex flex-column ms-3 ">
                <span className=" mb-2">{`${item.firstName} ${item.lastName}`}</span>
                <span>{item.noTelp ? item.noTelp : "08374727"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
