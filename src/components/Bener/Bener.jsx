import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="동탄 파라곤 3차 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '동양 파라곤' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '동탄 파라곤 3차') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동탄2신도시 신주거문화타운에서 만나는 프리미엄 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          82㎡·108㎡ 중대형 중심, 총 1,247세대 대단지 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동탄 파라곤 3차, 교통·교육·생활 인프라를 품은 새로운 주거 선택.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          경기도 화성시 동탄2지구 A58블록에 조성되는 동탄 파라곤 3차.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지하 2층부터 지상 최고 20층, 총 18개 동 규모의 대단지 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 82㎡와 108㎡ 타입으로 구성된 실수요 중심 주거 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동탄 파라곤 3차
        </div>
      </>
    );
  } else if (text === '입지환경'|| text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동탄2신도시 신주거문화타운의 쾌적한 주거환경과 미래가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동탄역, GTX-A, SRT, 생활 인프라를 연결하는 광역 생활권을 누리세요.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          총 1,247세대 규모로 완성되는 동탄 파라곤 3차의 단지 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          여유로운 동 배치와 커뮤니티, 조경까지 고려한 쾌적한 주거 설계.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동탄 파라곤 3차, 일상의 품격을 더하다.
        </div>
      </>
    );
  }
};
