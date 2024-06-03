import styles from "./SecondScreen.module.css"
import result1 from "../../images/ולריה רמידובסקי לקוחות ממליצים 1.PNG"
import result2 from "../../images/ולריה רמידובסקי לקוחות ממליצים 2.PNG"
import result3 from "../../images/ולריה רמידובסקי לקוחות ממליצים 3.PNG"
import result4 from "../../images/ולריה רמידובסקי לקוחות ממליצים 4.PNG"
import result5 from "../../images/ולריה רמידובסקי לקוחות ממליצים 5.PNG"
import result6 from "../../images/ולריה רמידובסקי לקוחות ממליצים 6.PNG"
import result7 from "../../images/ולריה רמידובסקי לקוחות ממליצים 7.PNG"
import result8 from "../../images/ולריה רמידובסקי לקוחות ממליצים 8.PNG"
import result9 from "../../images/ולריה רמידובסקי לקוחות ממליצים 9.PNG"
import result10 from "../../images/ולריה רמידובסקי לקוחות ממליצים 10.PNG"
import result11 from "../../images/ולריה רמידובסקי לקוחות ממליצים 11.PNG"
import result12 from "../../images/ולריה רמידובסקי לקוחות ממליצים 12.PNG"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
import CustomButton from "../../components/button/CustomButton"
const SecondScreenHome=()=>{
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2500,
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : 3,
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
            src: result9,
          },
          {
              type: 'image',
              src: result10,
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
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
    ];
   
    return <>
    <div className={styles.background}>
<div className={styles.title}>הלקוחות שלי רצו לדבר אתכם לפני..</div>
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
  <CustomButton text="ולריה, בואי נדבר" message="היי ולריה , אני רוצה לשמוע מה יש לך להציע לי בנושא ..."/>
  </div>
    </>
}
export default SecondScreenHome