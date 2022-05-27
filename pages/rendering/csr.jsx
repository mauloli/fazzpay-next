import axios from "axios";
import React, { useState, useEffect } from "react";

export default function CSR() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const result = await axios.get(`${process.env.URL_BACKEND2}/users`);
      setData(result.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Rendering with CSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}
