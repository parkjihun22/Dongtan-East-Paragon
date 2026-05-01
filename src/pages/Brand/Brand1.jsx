import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>동탄 동양 파라곤 3차 - 브랜드 소개</title>
  <meta
    name="description"
    content="동탄 동양 파라곤 3차 브랜드 소개. 경기도 화성시 동탄2지구 A58BL에 들어서는 총 1,247세대 대단지 아파트로, 동탄2신도시 신주거문화타운의 입지와 주거 가치를 소개합니다."
  />
  <link rel="canonical" href="https://paragon-modelhouse.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="동탄 동양 파라곤 3차" />
  <meta property="og:title" content="동탄 동양 파라곤 3차 - 브랜드 소개" />
  <meta
    property="og:description"
    content="동탄2신도시 신주거문화타운 A58BL에 들어서는 82㎡·108㎡ 총 1,247세대 규모의 동탄 동양 파라곤 3차 브랜드 가치를 소개합니다."
  />
  <meta property="og:url" content="https://paragon-modelhouse.co.kr/Brand/intro" />
  <meta property="og:image" content="https://paragon-modelhouse.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>동탄 동양 파라곤 3차 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  동탄 동양 파라곤 3차는 경기도 화성시 동탄2지구 A58BL에 들어서는 대단지 아파트입니다.
  전용 82㎡와 108㎡, 총 1,247세대 규모로 계획되어 동탄2신도시 신주거문화타운의 쾌적한 주거환경과 생활 인프라를 누릴 수 있습니다.
  동탄 동양 파라곤 3차는 실용적인 설계와 쾌적한 단지 환경을 바탕으로 새로운 주거 가치를 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>동탄2신도시의 생활을 가까이</div>
  <div>동탄 동양 파라곤 3차, 새로운 주거 가치</div>
</div>

<img
  className={`${styles.image} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="동탄 동양 파라곤 3차 브랜드 소개 이미지"
/>
            <Footer />
        </div>
    );
}

export default Brand1;
