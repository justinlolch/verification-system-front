import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import QRCamera from "../components/home-page/qr-camera";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
   <Fragment>
      <QRCamera />
   </Fragment>
  );
};

export default Home;
