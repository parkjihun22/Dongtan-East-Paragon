import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
  { label: '사업명', value: '동탄 파라곤 3차' },
  { label: '대지위치', value: '경기도 화성시 동탄2지구 A58BL' },
  { label: '주택형', value: '전용 82㎡ / 108㎡' },
  { label: '세대수', value: '총 1,247세대' },
  { label: '건축규모', value: '지하 2층 ~ 지상 18층~20층' },
  { label: '주차대수', value: '총 1,828대 (아파트 1,780대 / 근린생활시설 48대)' },
  { label: '건축면적', value: '12,866.5157㎡' },
  { label: '건폐율', value: '12.38%' },
  { label: '용적률', value: '139.91%' },
];
  
  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		// { title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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

	return (
		<div className={styles.container}>

<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>동탄 파라곤 3차 - 사업안내</title>
  <meta
    name="description"
    content="경기도 화성시 동탄2지구 A58BL에 들어서는 동탄 파라곤 3차의 사업 개요를 확인하세요. 82㎡·108㎡ 총 1,247세대, 지하 2층~지상 18층~20층 규모, 주차 총 1,828대 계획 안내."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://paragon-modelhouse.co.kr/BusinessGuide/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="동탄 파라곤 3차" />
  <meta property="og:title" content="동탄 파라곤 3차 - 사업안내" />
  <meta
    property="og:description"
    content="동탄2신도시 신주거문화타운 A58BL에 조성되는 총 1,247세대 대단지. 82㎡·108㎡ 타입, 지하 2층~지상 18층~20층 규모와 주차 계획을 확인하세요."
  />
  <meta property="og:url" content="https://paragon-modelhouse.co.kr/BusinessGuide/intro" />
  <meta property="og:image" content="https://paragon-modelhouse.co.kr/img/og/business.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="동탄 파라곤 3차 - 사업안내" />
  <meta
    name="twitter:description"
    content="동탄 파라곤 3차 사업 개요: 동탄2지구 A58BL, 82㎡·108㎡ 총 1,247세대, 지하 2층~지상 18층~20층 규모 안내."
  />
  <meta name="twitter:image" content="https://paragon-modelhouse.co.kr/img/og/business.jpg" />
  <meta name="twitter:url" content="https://paragon-modelhouse.co.kr/BusinessGuide/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "동탄 파라곤 3차 - 사업안내",
      "url": "https://paragon-modelhouse.co.kr/BusinessGuide/intro",
      "description":
        "경기도 화성시 동탄2지구 A58BL에 들어서는 동탄 파라곤 3차의 사업 개요와 위치, 세대정보, 규모, 주차대수, 건폐율, 용적률 정보를 제공합니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://paragon-modelhouse.co.kr/img/og/business.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://paragon-modelhouse.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://paragon-modelhouse.co.kr/BusinessGuide/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>동탄 파라곤 3차 - 사업안내</h1>
<p className={styles.screenReaderOnly}>
  동탄 파라곤 3차는 경기도 화성시 동탄2지구 A58BL에 조성되는 대단지 아파트입니다.
  이 페이지에서는 전용 82㎡와 108㎡, 총 1,247세대 세대정보와 지하 2층~지상 18층~20층 규모,
  총 1,828대 주차계획, 건폐율 12.38%, 용적률 139.91% 등 사업의 핵심 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>동탄2신도시 신주거문화타운의 새로운 주거 가치</div>
  <div>동탄 파라곤 3차, 대단지 프리미엄을 만듭니다.</div>
</div>

<img className={styles.img3} src={page1} alt="동탄 파라곤 3차 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
