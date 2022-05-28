import React, { useEffect, useState } from "react";
import cookies from "next-cookies";
import styles from "./History.module.css";
import Router from "next/router";
import MainLayout from "../../components/Layout/main";
import Paginattion from "react-paginate";
import axiosServer from "../../utils/axiosServer";
import { Params } from "next/dist/server/router";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const params = context.query;
  const page = !params?.page ? 1 : params.page;
  const filter = !params?.filter ? "" : params.filter;
  const dataCookies = cookies(context);
  const history = await axiosServer
    .get(`/transaction/history?page=${page}&limit=6&filter=${filter}`, {
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
  return {
    props: {
      data: history.data.data,
      pagination: history.data.pagination,
    }, // will be passed to the page component as props
  };
}
export default function History(props) {
  console.log(props);
  const router = useRouter();
  const dummyData = [
    { name: "samue", status: "accept", total: 500000 },
    { name: "Netflix", status: "transfer", total: 500000 },
    { name: "Cristine", status: "accept", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
  ];
  const [data, setData] = useState(props.data);
  const [totalPage, setTotalPage] = useState(props.pagination.totalPage);
  const [page, setPage] = useState(router.query.page);
  const handlePage = (data) => {
    setPage(data.selected + 1);
    Router.push(
      `history?page=${data.selected + 1}&filter=${router.query.filter}`
    );
  };
  const handleFilter = (e) => {
    const params = router.query;
    const page = !params?.page ? 1 : params.page;
    const { value } = e.target;
    if (value !== "") {
      Router.push(`history?page=${page}&filter=${value}`);
    }
  };
  useEffect(() => {
    setData(props.data);
    setTotalPage(props.pagination.totalPage);
  }, [props.data]);
  return (
    <MainLayout data={"home"}>
      <div className={styles.mainContainer}>
        <div className=" mx-5 m-4 d-flex justify-content-between">
          <span>Transation History</span>
          <select
            name=""
            id=""
            className=" bg-light"
            style={{ border: "0px", height: "40px", borderRadius: "10px" }}
            onChange={(e) => handleFilter(e)}
          >
            <option value="">--Select Filter--</option>
            <option value="YEAR">Year</option>
            <option value="MONTH">Month</option>
            <option value="WEEK">Week</option>
          </select>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className=" mx-5 d-flex justify-content-between align-items-center m-3"
          >
            <div className=" d-flex align-items-center">
              <img src="../../user1.png" style={{ width: "50px" }} alt="" />
              <div className=" d-flex flex-column ms-2">
                <span>{item.fullName}</span>
                <span style={{ fontSize: "14px", color: "#7A7886" }}>
                  {item.type}
                </span>
              </div>
            </div>

            {item.type == "accept" ? (
              <span className=" text-success">+Rp {item.amount}</span>
            ) : (
              <span className=" text-danger">-Rp {item.amount}</span>
            )}
          </div>
        ))}
      </div>
      <Paginattion
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPage}
        onPageChange={(e) => handlePage(e)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        initialPage={page - 1}
      />
    </MainLayout>
  );
}
