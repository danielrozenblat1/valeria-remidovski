import styles from "./ForthPageHome.module.css"
import result1 from "../../images/ולריה רמידובסקי לוגו 1.png"
import result2 from "../../images/ולריה רמידובסקי לוגו 2.png"
import result3 from "../../images/ולריה רמידובסקי לוגו 3.png"
import result4 from "../../images/ולריה רמידובסקי לוגו 4.png"
import result5 from "../../images/ולריה רמידובסקי לוגו 5.png"
import result6 from "../../images/ולריה רמידובסקי לוגו 6.png"
import result7 from "../../images/ולריה רמידובסקי לוגו 7.png"
import result8 from "../../images/ולריה רמידובסקי לוגו 8.png"
import result9 from "../../images/ולריה רמידובסקי לוגו 9.png"
import result10 from "../../images/ולריה רמידובסקי לוגו 10.png"
import result11 from "../../images/ולריה רמידובסקי לוגו 11.png"
import result12 from "../../images/ולריה רמידובסקי לוגו 12.png"
import result13 from "../../images/ולריה רמידובסקי לוגו 13.png"
import result14 from "../../images/ולריה רמידובסקי לוגו 14.png"
import result15 from "../../images/ולריה רמידובסקי לוגו 15.png"
import result16 from "../../images/ולריה רמידובסקי לוגו 16.png"
import result17 from "../../images/ולריה רמידובסקי לוגו 17.png"
import result18 from "../../images/ולריה רמידובסקי לוגו 18.png"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick"
import CustomButton from "../../components/button/CustomButton"
const ForthPageHome=()=>{

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 450 ? 2 : window.innerWidth < 650 ? 3 : 4,
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
          {
            type: 'image',
            src: result15,
          },
          {
            type: 'image',
            src: result16,
          },
          {
            type: 'image',
            src: result17,
          },
          {
            type: 'image',
            src: result18,
          },
    ];
   
    return <>
<div className={styles.title}>מותגים שעבדתי איתם</div>
<div className={styles.description}>מוזמנים להחליק ולהתרשם</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index}>
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ולריה רמידובסקי לקוחה ממליצה מספר ${index + 1}`} />
              )}
  
            </div>
          ))}
        </Slider>
      </div>
  <CustomButton text="אני רוצה להכנס לרשימה הזו" message="היי ולריה, אשמח לשמוע עוד על שירות ה UGC "/>



  
    </>
}
export default ForthPageHome