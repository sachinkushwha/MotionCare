import { Appointment } from "../components/appointment";
import { Poster } from "../components/poster"
import { Review } from "../components/review";
import { Service } from "../components/service-block"
import { Space, Space1 } from "../components/space"
import { useEffect, useState } from "react";
import { doctor, servarr } from "../services/backend";

function Home() {
  const [arr, setarr] = useState([]);
  const [doc, setDoctor] = useState([]);
  useEffect(() => {
    let arrReady = false;
    let docReady = false;
    const interval = setInterval(() => {
      servarr().then((data) => {
        if (data.length > 0) {
          setarr(data);
          arrReady = true;
        }

      })
      doctor().then((data) => {
        if (data.length > 0) {
          setDoctor(data);
          docReady = true;
        }
      });
      if(arrReady && docReady){
        clearInterval(interval);
      }
    },500);
    return ()=>clearInterval(interval);
  },[])



  return (
    <>
      <Poster />
      <Space />
      <Service imag={arr} />
      <Appointment />
      <Space1 />
      <Service imag={doc} />
      <Review />
    </>
  )
}

export default Home
