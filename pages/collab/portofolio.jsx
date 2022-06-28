import React from "react";
import styles from "./Profile.module.css";
import {
  IoMailOutline,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoGitlab,
} from "react-icons/io5";
export default function Portofolio() {
  const skills = [
    "python",
    "laraver",
    "Golang",
    "javascript",
    "php",
    "html",
    "c++",
    "kotlin",
    "swift",
  ];
  return (
    <div className={styles.container} style={{ background: "#E5E5E5" }}>
      <div className=" container d-xl-flex pt-4 pt-xl-5">
        <div className={`${styles.userProfile} container-xl `}>
          <div className=" d-flex justify-content-center mt-xl-4  mb-xl-2  pt-4 pt-xl-">
            <img style={{ width: "100px" }} src="../../user1.png" alt="" />
          </div>
          <div className=" d-flex flex-column">
            <div className={`d-flex flex-column ${styles.detailUser}`}>
              <span className=" fw-bold fs-5 my-3">Louis Tomlison</span>
              <span
                className=""
                style={{ fontSize: "14px", lineHeight: "24px" }}
              >
                Web Developer
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                Freelance
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                Purwokerto Jawa tengah
              </span>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#9EA0A5",
                }}
              >
                0812 - 3456 - 789
              </span>
              <div className=" my-3">
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#9EA0A5",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </span>
              </div>
            </div>

            <div className=" mb-3">
              <button className={styles.buttonHire}>Hire</button>
            </div>
            <div>
              <span
                style={{
                  marginLeft: "5px",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Skill
              </span>
              <div className={styles.skills}>
                {skills.map((item, index) => (
                  <span className="d-inline-block" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={`d-flex flex-column ${styles.mediaSocial}`}>
              <div>
                <IoMailOutline />
                <span> Louistommo@gmail.com</span>
              </div>
              <div>
                <IoLogoInstagram />
                <span>@Louist91</span>
              </div>
              <div>
                <IoLogoGithub />
                <span>@Louistommo</span>
              </div>
              <div>
                <IoLogoGitlab />
                <span>@Louistommo91</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" mx-xl-4 w-75 h-100 bg-white container"
          style={{ flex: 4 }}
        >
          <div className=" pt-xl-3">
            <span className=" mx-xl-4">Portofolio</span>
            <span>Pengalaman Kerja</span>
          </div>
        </div>
      </div>
    </div>
  );
}
