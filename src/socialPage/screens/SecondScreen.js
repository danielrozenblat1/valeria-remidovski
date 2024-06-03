import styles from "./SecondScreen.module.css"
import time from "../../icons/wired-lineal-61-camera (1).json"
import free from "../../icons/wired-lineal-61-camera (1).json"
import classic from "../../icons/wired-lineal-61-camera (1).json"
import Box from "../../components/box/Box"
const SecondScreenSocial=()=>{


    return <>
    <div className={styles.title}>"אני יכול לנהל את הסושיאל שלי בעצמי"</div>
    <div className={styles.description}>אתה לגמרי יכול !</div>
    <div className={styles.but}>אבל אתה מאבד 3 דברים</div>
    <div className={styles.row}>
<Box title="זמן" icon={time} description="אתה מאבד את הזמן בליצור תוכן איכותי כל פעם מחדש לעסק שלך"/>
<Box title="חופש" icon={free} description="אתה מאבד את החופש בליצור תוכן איכותי כל פעם מחדש לעסק שלך"/>
<Box title="אלגנטיות" icon={classic} description="אתה מאבד את האלגנטיות בליצור תוכן איכותי כל פעם מחדש לעסק שלך"/>
    </div>
    </>
}
export default SecondScreenSocial