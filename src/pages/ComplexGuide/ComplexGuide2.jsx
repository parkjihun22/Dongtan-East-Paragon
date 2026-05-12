import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";




const ComplexGuide1 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
  <title>동탄 파라곤 3차 - 동·호수 배치</title>
  <meta
    name="description"
    content="동탄 파라곤 3차 동·호수 배치도 안내. 총 18개 동, 1,247세대 규모의 세대별 위치와 동별 배치, 조망, 일조, 생활 동선을 확인하세요."
  />
  <link rel="canonical" href="https://paragon-modelhouse.co.kr/ComplexGuide/detailintro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="동탄 파라곤 3차" />
  <meta property="og:title" content="동탄 파라곤 3차 - 동·호수 배치" />
  <meta
    property="og:description"
    content="총 18개 동, 1,247세대 규모의 동탄 파라곤 3차 동·호수 배치도와 세대별 위치, 조망, 일조, 생활 동선을 확인하세요."
  />
  <meta property="og:url" content="https://paragon-modelhouse.co.kr/ComplexGuide/detailintro" />
  <meta property="og:image" content="https://paragon-modelhouse.co.kr/img/og/complex.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="단지안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  동탄 파라곤 3차 - 동·호수 배치
</h1>
<p className={styles.screenReaderOnly}>
  본 페이지는 동탄 파라곤 3차의 동·호수 배치 정보를 제공합니다.
  총 18개 동, 1,247세대 규모의 단지 내 세대별 위치와 동별 배치,
  조망, 일조, 생활 동선 등을 확인하고 원하는 세대를 비교해보세요.
</p>

<div className={styles.textBox}>
  <div>동탄2신도시 신주거문화타운의 세대 배치</div>
  <div>동탄 파라곤 3차의 동·호수 배치를 확인하세요.</div>
</div>

<img
  className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
  src={page1}
  alt="동탄 파라곤 3차 동호수 배치도 이미지"
  onLoad={handleImageLoad}
/>


  

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 호수배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와
          차이가 날 수 있습니다
        </div>
        <div className={styles.notice}>
          ※ 단지 내 조경 및 세부 식재계획, 시설물의 위치는 실제 시공시 현장
          상황에 따라 변경될 수 있습니다
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
