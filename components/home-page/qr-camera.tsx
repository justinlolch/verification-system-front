import classes from "../../styles/hero.module.css";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
// import dynamic from "next/dynamic";
// const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default function QRCamera() {
  const [data, setData] = useState("No result");

  const [result, setResult] = useState("No result");

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
        <p>{data}</p>
      </div>
      <h1>Hi, I&quot;m Justin</h1>
      <p>I blog about webdev, frontend, and backend development.</p>
    </section>
  );
}
