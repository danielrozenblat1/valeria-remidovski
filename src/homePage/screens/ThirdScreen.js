import styles from "./ThirdScreen.module.css"
import social1 from "../../images/ולריה רמידובסקי עמוד סושיאל 1.PNG"
import social2 from "../../images/ולריה רמידובסקי עמוד סושיאל 2.PNG"
import social3 from "../../images/ולריה רמידובסקי עמוד סושיאל 3.PNG"
import social4 from "../../images/ולריה רמידובסקי עמוד סושיאל 4.PNG"
import social5 from "../../images/ולריה רמידובסקי עמוד סושיאל 5.PNG"
import social6 from "../../images/ולריה רמידובסקי עמוד סושיאל 6.PNG"
import social7 from "../../images/ולריה רמידובסקי עמוד סושיאל 7.PNG"
import social8 from "../../images/ולריה רמידובסקי עמוד סושיאל 8.PNG"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
const ThirdScreenHome=()=>{

    const sliderSettings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll:1,
  
      };


    const content1 = [
        {
          type: 'image',
          src: social1,
        },
        {
          type: 'image',
          src: social2,
        },
        {
          type: 'image',
          src: social3,
        },
        {
          type: 'image',
          src: social4,
        },
        {
          type: 'image',
          src: social5,
        },
        {
          type: 'image',
          src: social6,
        },
        {
          type: 'image',
          src: social7,
        },
        {
            type: 'image',
            src: social8,
          },
    ];

return <>
    <div className={styles.title}>עמודי סושיאל שניהלתי</div>
    <div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings1}>
          {content1.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ולריה רמידובסקי ניהול סושיאל עמוד מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
</>


}
export default ThirdScreenHome