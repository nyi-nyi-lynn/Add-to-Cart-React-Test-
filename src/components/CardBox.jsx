import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardBox = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="diplay-3 text-center mb-5 fw-bold">Avaliable Products</h1>
      <section className="container card-container">
        <Card products={products} />
      </section>
    </>
  );
};

export default CardBox;
