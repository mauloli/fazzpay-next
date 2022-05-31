import React, { useEffect } from "react";
import axiosServer from "../../utils/axiosServer";
import cookies from "next-cookies";
import Navbar from "../../components/navbar";
import styles from "./Home.module.css";
import { IoArrowDownSharp, IoArrowUp, IoAddSharp } from "react-icons/io5";
import ChartReact from "../../components/chart";
import Menu from "../../components/menu";
import Footer from "../../components/footer/index ";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard } from "../../stores/action/dashboard";
import { getBalance } from "../../stores/action/balance";
import { getUser } from "../../stores/action/user";
import withPrivateRoute from "../../components/withPrivateRoute";
import Router from "next/router";
export async function getServerSideProps(context) {
  const dataCookies = cookies(context);

  const result = await axiosServer
    .get(`/user/profile/${dataCookies.id}`, {
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
  const income = await axiosServer.get(`/dashboard/${dataCookies.id}`, {
    headers: {
      Authorization: `Bearer ${dataCookies.token}`,
    },
  });
  const history = await axiosServer.get(
    `/transaction/history?page=1&limit=10&filter=WEEK`,
    {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    }
  );
  const dashboard = await axiosServer.get(`/dashboard/${dataCookies.id}`, {
    headers: {
      Authorization: `Bearer ${dataCookies.token}`,
    },
  });
  const dataUser = await axiosServer.get(
    `/user?page=1&limit=100000&search=&sort=firstName ASC`,
    {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    }
  );
  return {
    props: {
      data: result.data.data,
      income: income.data.data,
      history: history.data.data,
      dashboard: dashboard.data.data,
      user: dataUser.data.data,
    }, // will be passed to the page component as props
  };
}

function Home(props) {
  const cloudinaryImg = process.env.CLOUDINARY_IMAGE;

  console.log(props.history);
  const { firstName, lastName, image, id, ammount } = props.history;
  const { totalIncome, totalExpense } = props.income;
  const { balance } = props.data;
  const dispatch = useDispatch();
  const dummyData = [
    { name: "samue", status: "accept", total: 500000 },
    { name: "Netflix", status: "transfer", total: 500000 },
    { name: "Cristine", status: "accept", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
    { name: "Robert", status: "topup", total: 500000 },
  ];
  const getData = () => {
    dispatch(getDashboard(props.dashboard));
    dispatch(getBalance(props.data.balance));
    dispatch(getUser(props.user));
  };
  useEffect(() => {
    getData();
  }, []);
  const currency = new Intl.NumberFormat("id-ID", {
    // style: "currency",
    currency: "IDR",
  });
  return (
    <div>
      <Navbar />
      <div
        className={``}
        style={{ backgroundColor: "#FAFCFF", height: "100%" }}
      >
        <div className={`${styles.dashboardContainer} d-flex container`}>
          <div className={styles.menuContainer} style={{ flex: 1 }}>
            <Menu data="home" />
          </div>
          <div className={`${styles.transactionContainer}`}>
            <div className={`${styles.transactionTop}`}>
              <div className={`${styles.balanceLeft}`}>
                <span style={{ fontSize: "18px", color: "#E0E0E0" }}>
                  Balance
                </span>
                <span style={{ fontSize: "40px" }}>
                  {currency.format(balance)}
                </span>
                <span style={{ fontSize: "14px" }}>093473270</span>
              </div>
              <div className={`${styles.balanceRight}`}>
                <button onClick={() => Router.push("transfer")}>
                  <IoArrowUp
                    size={25}
                    style={{ position: "relative", right: "20" }}
                  />
                  Transfer
                </button>
                <button>
                  <IoAddSharp
                    size={25}
                    style={{ position: "relative", right: "20" }}
                  />
                  Topup
                </button>
              </div>
            </div>
            <div className={`${styles.transactionBtm}`}>
              <div className={`${styles.transactionLeft}`}>
                <div className={styles.incomeTop}>
                  <div className={styles.incomeLeft}>
                    <IoArrowDownSharp style={{ color: "green" }} size={20} />
                    <span>Income</span>
                    <span>Rp. {currency.format(totalIncome)}</span>
                  </div>
                  <div className={styles.incomeRight}>
                    <IoArrowUp style={{ color: "red" }} size={20} />
                    <span>Expense</span>
                    <span>Rp. {currency.format(totalExpense)}</span>
                  </div>
                </div>
                <div className={styles.incomeBtm}>
                  <div
                    className=""
                    style={{ width: "90%", position: "relative", top: "-30px" }}
                  >
                    <ChartReact />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className={`${styles.transactionRight}`}>
                <div className=" d-flex justify-content-between w-100 ps-3 pe-3 pt-3 pb-3 sticky-top bg-white">
                  <span>Transaction History</span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => Router.push("history?page=1&filter=")}
                  >
                    See All
                  </span>
                </div>
                {props.history.map((item, index) => (
                  <div
                    key={index}
                    className=" d-flex justify-content-between align-items-center m-3"
                  >
                    <div className=" d-flex align-items-center">
                      <img
                        src={`${cloudinaryImg}${item.image}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                      <div className=" d-flex flex-column ms-2">
                        <span>{item.fullName}</span>
                        <span>{item.status}</span>
                      </div>
                    </div>
                    {item.type == "send" ? (
                      <span className=" text-danger">
                        -Rp {currency.format(item.amount)}
                      </span>
                    ) : (
                      <span className=" text-success">
                        +Rp {currency.format(item.amount)}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
