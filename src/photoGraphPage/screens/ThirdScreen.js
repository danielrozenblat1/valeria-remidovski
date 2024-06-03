import styles from "./ThirdScreen.module.css"
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import { Player } from "@lordicon/react"
import camera from "../../icons/wired-lineal-61-camera (1).json"
import polaroid from "../../icons/wired-lineal-1035-polaroid-camera.json"
import slider from "../../icons/wired-lineal-729-interface-slider-music.json"
import suit from "../../icons/wired-lineal-681-lawyer (1).json"
import CustomButton from "../../components/button/CustomButton"
const ThirdScreenPhoto=()=>{
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    const handleComplete1 = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      const handleComplete2 = () => {
        setTimeout(() => {
          playerRef2?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      const handleComplete3 = () => {
        setTimeout(() => {
          playerRef3?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
      const handleComplete4 = () => {
        setTimeout(() => {
          playerRef4?.current?.playFromBeginning();
        }, 2000); // play again after 2.5 seconds
      };
    useEffect(()=>{
      
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
          ScrollReveal().reveal(`.${styles.section}`, {
              duration: 1000,
              distance: "30px",
              origin: "right", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
            ScrollReveal().reveal(`.${styles.stepHeader}`, {
              duration: 1000,
              distance: "30px",
              origin: "top", // Start from the right side
              easing: "ease-in-out",
              reset:false,
              viewFactor: 0.2,
              interval: 300, // Delay between each element
              delay: 200, // Delay before the animation starts
              scale: 1, // Set scale to 1 or null
            });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])


   

return <>
<div className={styles.title}>למה צילומי תדמית הם כל כך חשובים ?</div>
<div className={styles.bigWrapper}>

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef1} size="100%" onComplete={handleComplete1}
icon={polaroid}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>מקצועיות</div>
    <div className={styles.section}>תחסכו מכם טעויות קריטיות והמון כסף.<br/>
יועץ משכנתאות מנוסה מביא עימו ידע רחב ועשיר בתחום המשכנתאות, הוא מכיר היטב את כל החוקים, התנאים והמגמות בשוק המשכנתאות 
המשתנה תדיר. היועץ יתכנן עבורך ויעזור לך לקבל את המשכנתא המתאימה בדיוק לצרכיך וליכולותיך הכלכליות</div>
</div>
</div>
{/* חץ לשלב הבא */}

<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>תדמית עסקית</div>
    <div className={styles.section}>הליך לקיחת משכנתא הינו מורכב עבור מי שאינו חי את התחום וכרוך בהרבה בירוקרטיה וניירת. יועץ המשכנתאות יבצע זאת עבורכם, יקצר את 
זמני התהליך וימנע מכם כאב ראש</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef2} delay={500} size="100%" onComplete={handleComplete2}
icon={suit}/>
</div>
</div>

{/* חץ לשלב הבא */}

<div className={styles.step}>
<div className={styles.icons}>
<Player ref={playerRef3} size="100%" onComplete={handleComplete3}
icon={camera}/>
</div>
<div className={styles.text}>

    <div className={styles.stepHeader}>תדמית דיגיטלית</div>
    <div className={styles.section}>כלקוח בודד מול המערכת הבנקאית הסיכויים שלנו להוזלה משמעותית של המשכנתא נמוכים. 
ליועץ משכנתאות מקצועי ומנוסה יש את הידע והקשרים הנדרשים כדי לנהל עבורך משא ומתן תקיף ולהשיג את התנאים הטובים ביותר</div>
</div>
</div>
<div className={styles.step}>

<div className={styles.text}>

 
<div className={styles.stepHeader}>אסתטיות</div>
    <div className={styles.section}>יועץ המשכנתאות יאפיין במקצועיות את מצבך הפיננסי ויבנה עבורך משכנתא ייחודית המתאימה לצרכים וליכולות שלך</div>
</div>
<div className={styles.icons}>
<Player ref={playerRef4} delay={500} size="100%" onComplete={handleComplete4}
icon={slider}/>
</div>
</div>


<CustomButton text="ולריה, בואי נדבר" message="היי ולריה אני אשמח לשמוע עוד בנוגע לצילומי תדמית אצלך"/>
</div>





</>


}
export default ThirdScreenPhoto