import axios from "axios";
import React from "react";
import Item from "../components/Item";
import Header from "../components/Header";

export const getStaticPaths = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const Product = await res.data;
  const paths = Product.map((data) => `/Product/${data.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  const Product = await res.data;
  return {
    props: { Product },
  };
};

export default function Detail({ Product }) {
  return (
    <div>
      <Header name={Product.title} image="/cat-5.jpg" />
      <Item
        id={Product.id}
        title={Product.title}
        image={Product.image}
        category={Product.category}
        description={Product.description}
        price={Product.price}
      />
    </div>
  );
}
