import classes from "../../styles/hero.module.css";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
// import dynamic from "next/dynamic";
// const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

export default function QRCamera() {
  const [data, setData] = useState<any>("No result");

  const [result, setResult] = useState("No result");

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <section className={classes.hero}>
      <div className={classes.image}>
      <QrReader
      constraints={{ facingMode: 'environment' }}
        onResult={(result, error) => {
          if (result) {
            setData(result);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
        <p>{data}</p>
      </div>
      <h1>Hi, I&quot;m Justin</h1>
      <p>I blog about webdev, frontend, and backend development.</p>
      <p>{data}</p>
    </section>
  );
}
