// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>동탄 파라곤 3차</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 화성시 동탄2지구 A58BL</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 18층 ~ 20층</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>82㎡ · 108㎡ 총 1,247세대</span>
        </li>
        <li>
          <strong>주차대수</strong>
          <span>아파트 1,780대 / 근린생활시설 48대 / 총 1,828대</span>
        </li>
        <li>
          <strong>건축면적</strong>
          <span>12,866.5157㎡</span>
        </li>
        <li>
          <strong>건폐율</strong>
          <span>12.38% (법정 50% 이하)</span>
        </li>
        <li>
          <strong>용적률</strong>
          <span>139.91% (법정 140% 이하)</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            동탄신도시 생활중심과 학세권을 누리는<br />
            동탄 파라곤 3차프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "동탄2신도시 신주거문화타운 입지",
      desc:
        "경기도 화성시 동탄2지구 A58BL 위치<br/>동탄2신도시 주거 인프라와 미래가치 기대<br/>쾌적한 신도시 생활권을 누리는 주거단지",
    },
    {
      img: slide2,
      title: "82㎡·108㎡ 총 1,247세대 대단지",
      desc:
        "전용 82㎡와 108㎡ 중심의 중대형 구성<br/>총 1,247세대 규모의 대단지 아파트<br/>실수요 중심의 여유로운 주거 선택",
    },
    {
      img: slide3,
      title: "동탄 광역 교통망 프리미엄",
      desc:
        "동탄역 GTX-A·SRT 광역 교통망 이용 가능<br/>수도권 주요 업무지구로 이동 편의성 기대<br/>동탄대로와 주요 도로망을 통한 생활권 확장",
    },
    {
      img: slide4,
      title: "교육·생활 인프라를 품은 동탄 생활권",
      desc:
        "동탄2신도시 내 교육·생활 편의시설 이용<br/>상업시설, 공원, 문화시설을 누리는 생활환경<br/>가족 중심 주거에 적합한 쾌적한 인프라",
    },
    {
      img: slide5,
      title: "지하 2층~지상 18층~20층 단지 규모",
      desc:
        "총 18개 동으로 계획된 대단지 아파트<br/>건폐율 12.38%, 용적률 139.91%의 단지 설계<br/>쾌적성과 실용성을 고려한 주거 공간",
    },
    {
      img: slide6,
      title: "총 1,828대 주차공간 확보",
      desc:
        "아파트 1,780대, 근린생활시설 48대 주차 계획<br/>총 1,828대 규모의 여유 있는 주차공간<br/>입주민의 일상 편의를 고려한 단지 구성",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
