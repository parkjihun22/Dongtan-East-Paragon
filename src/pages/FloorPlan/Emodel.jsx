import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "82㎡", key: "82㎡" },
    { title: "108㎡", key: "108㎡" },
    // { title: "84A", key: "84A" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "82㎡": "https://storage.net-fs.com/hosting/7834212/92/index.html",
    "108㎡": "https://storage.net-fs.com/hosting/7834212/93/index.html",
    // "84A": "https://www.prugio.com/hb/2025/onecluster/vr/84a.html",
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };





  const [selectedType, setSelectedType] = useState("82㎡");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 핵심 SEO 페이지: 82㎡ */}
  <title>동탄 파라곤 3차 - 82㎡</title>
  <meta
    name="description"
    content="동탄 파라곤 3차 82㎡ 세대 평면을 확인하세요. 전용 82㎡ 타입의 공간 구성과 실내 구조, 세대 배치 정보를 온라인으로 편리하게 확인할 수 있습니다."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://paragon-modelhouse.co.kr/FloorPlan/Emodel" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="동탄 파라곤 3차" />
  <meta property="og:title" content="동탄 파라곤 3차 - 82㎡" />
  <meta
    property="og:description"
    content="동탄 파라곤 3차 전용 82㎡ 세대 평면과 공간 구성을 확인하세요."
  />
  <meta property="og:url" content="https://paragon-modelhouse.co.kr/FloorPlan/Emodel" />
  <meta property="og:image" content="https://paragon-modelhouse.co.kr/img/og/emodel.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="동탄 파라곤 3차 - 82㎡" />
  <meta
    name="twitter:description"
    content="동탄 파라곤 3차 82㎡ 세대 평면과 공간 구성을 확인하세요."
  />
  <meta name="twitter:image" content="https://paragon-modelhouse.co.kr/img/og/emodel.jpg" />
  <meta name="twitter:url" content="https://paragon-modelhouse.co.kr/FloorPlan/Emodel" />

  {/* JSON-LD (구조화데이터) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "동탄 파라곤 3차 - 82㎡",
      "url": "https://paragon-modelhouse.co.kr/FloorPlan/Emodel",
      "description":
        "동탄 파라곤 3차 전용 82㎡ 세대 평면과 공간 구성을 확인할 수 있습니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://paragon-modelhouse.co.kr/img/og/emodel.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://paragon-modelhouse.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "82㎡", "item": "https://paragon-modelhouse.co.kr/FloorPlan/Emodel" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="82㎡" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  동탄 파라곤 3차 - 82㎡
</h1>
<p className={styles.screenReaderOnly}>
  동탄 파라곤 3차 전용 82㎡ 세대 평면을 온라인으로 확인하세요.
  세대 구조와 공간 구성, 생활 동선을 고려한 설계 정보를 통해
  동탄 파라곤 3차의 주거 공간을 살펴볼 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>동탄2신도시 신주거문화타운의 주거 공간</div>
  <div>동탄 파라곤 3차 82㎡ 평면을 확인하세요.</div>
</div>




      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="82㎡" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>동탄 파라곤 3차- 82㎡</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
