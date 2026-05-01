import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "공급안내", url: "/BusinessGuide/documents" },
		{ title: "모집공고안내", url: "/SalesInfo/announcement" },
		// { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
		// { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
		// { title: "청약안내문", url: "/SalesInfo/guide" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  {/* 필수 메타 */}
  <title>동탄 동양 파라곤 3차 - 공급안내</title>
  <meta
    name="description"
    content="동탄 동양 파라곤 3차 공급안내. 82㎡·108㎡ 총 1,247세대 공급 구성과 계약 절차, 제출서류, 준비 방법 및 유의사항을 확인하세요."
  />
  <meta name="robots" content="index,follow" />
  <link
    rel="canonical"
    href="https://paragon-modelhouse.co.kr/BusinessGuide/documents"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="동탄 동양 파라곤 3차" />
  <meta property="og:title" content="동탄 동양 파라곤 3차 - 공급안내" />
  <meta
    property="og:description"
    content="동탄 동양 파라곤 3차 공급안내: 82㎡·108㎡ 총 1,247세대 공급 구성과 계약서류, 준비 절차 및 유의사항을 확인하세요."
  />
  <meta property="og:url" content="https://paragon-modelhouse.co.kr/BusinessGuide/documents" />
  <meta property="og:image" content="https://paragon-modelhouse.co.kr/Main1.png" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="공급안내" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>동탄 동양 파라곤 3차 - 공급안내</h1>
<p className={styles.screenReaderOnly}>
  본 페이지는 동탄 동양 파라곤 3차의 공급 정보와 계약 진행에 필요한 주요 안내를 제공합니다.
  82㎡와 108㎡ 타입, 총 1,247세대 공급 구성과 제출 서류, 준비 방법 및 유의사항을 확인해 정확하게 진행하세요.
</p>

<div className={styles.textBox}>
  <div>동탄2신도시 신주거문화타운의 새로운 기준 위에</div>
  <div>동탄 동양 파라곤 3차, 공급안내를 미리 확인하세요.</div>
</div>

{/* 이미지에 isImageVisible 상태 적용 */}
{/* <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="동탄 동양 파라곤 3차 공급안내 이미지" /> */}



			<Ready/>


			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
