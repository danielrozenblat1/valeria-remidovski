import styles from "./FifthPageHome.module.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import CustomButton from "../../components/button/CustomButton";

import result1 from "../../images/ולריה רמידובסקי צילומי סטודיו 1.PNG"
import result2 from "../../images/ולריה רמידובסקי צילומי סטודיו 2.PNG"
import result3 from "../../images/ולריה רמידובסקי צילומי סטודיו 3.PNG"
import result4 from "../../images/ולריה רמידובסקי צילומי סטודיו 4.PNG"
import result5 from "../../images/ולריה רמידובסקי צילומי סטודיו 5.PNG"
import result6 from "../../images/ולריה רמידובסקי צילומי סטודיו 6.PNG"
import result7 from "../../images/ולריה רמידובסקי צילומי סטודיו 7.PNG"
import result8 from "../../images/ולריה רמידובסקי צילומי סטודיו 8.PNG"
import result9 from "../../images/ולריה רמידובסקי צילומי סטודיו 9.PNG"
import result10 from "../../images/ולריה רמידובסקי צילומי סטודיו 10.PNG"
import result11 from "../../images/ולריה רמידובסקי צילומי סטודיו 11.PNG"
import result12 from "../../images/ולריה רמידובסקי צילומי סטודיו 12.PNG"
import result13 from "../../images/ולריה רמידובסקי צילומי סטודיו 13.PNG"
import result14 from "../../images/ולריה רמידובסקי צילומי סטודיו 14.PNG"


import out1 from "../../images/ולריה רמידובסקי צילומי חוץ 1.PNG"
import out2 from "../../images/ולריה רמידובסקי צילומי חוץ 2.PNG"
import out3 from "../../images/ולריה רמידובסקי צילומי חוץ 3.PNG"
import out4 from "../../images/ולריה רמידובסקי צילומי חוץ 4.PNG"
import out5 from "../../images/ולריה רמידובסקי צילומי חוץ 5.PNG"
import out6 from "../../images/ולריה רמידובסקי צילומי חוץ 6.PNG"
import out7 from "../../images/ולריה רמידובסקי צילומי חוץ 7.PNG"
import out8 from "../../images/ולריה רמידובסקי צילומי חוץ 8.PNG"
import out9 from "../../images/ולריה רמידובסקי צילומי חוץ 9.PNG"
import out10 from "../../images/ולריה רמידובסקי צילומי חוץ 10.PNG"
import out11 from "../../images/ולריה רמידובסקי צילומי חוץ 11.PNG"
import out12 from "../../images/ולריה רמידובסקי צילומי חוץ 12.PNG"
import out13 from "../../images/ולריה רמידובסקי צילומי חוץ 13.PNG"
import out14 from "../../images/ולריה רמידובסקי צילומי חוץ 14.PNG"
import out15 from "../../images/ולריה רמידובסקי צילומי חוץ 15.PNG"
import out16 from "../../images/ולריה רמידובסקי צילומי חוץ 16.PNG"
const FifthPageHome=(props)=>{


    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 550 ? 2 : window.innerWidth < 750 ? 3 : 4,
        slidesToScroll:1,
  
      };

    const content = [
        {
          type: 'image',
          src: result1,
        },
        {
            type: 'image',
            src: result2,
          },
          {
            type: 'image',
            src: result3,
          },
          {
            type: 'image',
            src: result4,
          },
          {
            type: 'image',
            src: result5,
          },

        {
          type: 'image',
          src: result6,
        },
        {
          type: 'image',
          src: result7,
        },
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result9,
        },
        {
            type: 'image',
            src: result10,
          },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
            type: 'image',
            src: result13,
          },
          {
              type: 'image',
              src: result14,
            },
   

    ];


    const content1 = [
        {
          type: 'image',
          src: out1,
        },
        {
            type: 'image',
            src: out2,
          },
          {
            type: 'image',
            src: out3,
          },
          {
            type: 'image',
            src: out4,
          },
          {
            type: 'image',
            src: out5,
          },

        {
          type: 'image',
          src: out6,
        },
        {
          type: 'image',
          src: out7,
        },
        {
          type: 'image',
          src: out8,
        },
        {
          type: 'image',
          src: out9,
        },
        {
            type: 'image',
            src: out10,
          },
        {
          type: 'image',
          src: out11,
        },
        {
          type: 'image',
          src: out12,
        },
        {
            type: 'image',
            src: out13,
          },
          {
              type: 'image',
              src: out14,
            },
          {
            type: 'image',
            src: out15,
          },
          {
            type: 'image',
            src: out16,
          },

    ];





return <>
<div className={styles.title}>{props.title}</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ולריה רמידובסקי צילומי תדמית מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
  <CustomButton text="אני רוצה לתאם צילומי סטודיו" message="מה נשמע ולריה ? אשמח לשמוע עוד על צילוי סטודיו אצלך"/>


  <div className={styles.title}>{props.title2}</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content1.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ולריה רמידובסקי צילומי תדמית מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
  <CustomButton text="אני רוצה לתאם צילומי חוץ" message="מה נשמע ולריה ? אשמח לשמוע עוד על צילומי חוץ אצלך"/>

</>
}
export default FifthPageHome