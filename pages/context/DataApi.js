import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const category = `${baseUrl}/category`;
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [jewelry, setJewelry] = useState([]);
  const [men, setMen] = useState([]);
  const [wonen, setWomen] = useState([]);

  const getProduct = async () => {
    await axios
      .get(`${baseUrl}`)
      .then((res) => {
        setLoading(true);
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getJewelry = async () => {
    await axios
      .get(`${category}/jewelery`)
      .then((res) => {
        setLoading(true);
        setJewelry(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getMen = async () => {
    await axios
      .get(`${category}/men's%20clothing`)
      .then((res) => {
        setLoading(true);
        setMen(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getWonen = async () => {
    await axios
      .get(`${category}/women's%20clothing`)
      .then((res) => {
        setLoading(true);
        setWomen(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
    getJewelry();
    getWonen();
    getMen();
  }, []);

  return (
    <ApiDataContext.Provider value={{ loading, products, jewelry, men, wonen }}>
      {children}ff
    </ApiDataContext.Provider>
  );
};
