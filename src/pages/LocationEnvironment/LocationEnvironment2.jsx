import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>동탄 동양 파라곤 3차 - 프리미엄</title>
  <meta
    name="description"
    content="동탄 동양 파라곤 3차 프리미엄 안내. 동탄2신도시 신주거문화타운 A58BL 입지, 82㎡·108㎡ 총 1,247세대 대단지, 동탄역 GTX-A·SRT 광역 교통망과 생활 인프라를 확인하세요."
  />
  <link rel="canonical" href="https://paragon-modelhouse.co.kr/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  동탄 동양 파라곤 3차 - 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  동탄 동양 파라곤 3차만의 프리미엄을 확인하세요.
  경기도 화성시 동탄2지구 A58BL에 들어서는 82㎡·108㎡ 총 1,247세대 대단지로,
  동탄2신도시 신주거문화타운의 주거환경과 동탄역 GTX-A·SRT 광역 교통망,
  생활 인프라와 교육 환경을 함께 누릴 수 있는 주거 가치를 제안합니다.
</p>

<div className={styles.textBox}>
  <div>동탄2신도시 신주거문화타운 위에</div>
  <div>동탄 동양 파라곤 3차의 프리미엄을 누리세요.</div>
</div>

<img
  src={page1}
  className={styles.image3}
  alt="동탄 동양 파라곤 3차 프리미엄 이미지"
/>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
