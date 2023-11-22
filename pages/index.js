import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header/Header";
import Pictures from "../components/Pictures/Pictures";

const index = () => {
  const [pictures, setPictures] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/"
      );
      setPictures(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {pictures && pictures.length === 0 ? (
        <h1>The pictures gallery is empty</h1>
      ) : (
        <Pictures pictures={pictures} />
      )}
    </>
  );
};

export default index;
