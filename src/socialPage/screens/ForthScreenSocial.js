import What from "../../components/what/What"
import styles from "./ForthScreenSocial.module.css"
const ForthScreenSocial=()=>{
    
return <>
<div className={styles.title}>מה תוכל לקבל ?</div>
<div className={styles.row}>
<What title="חבילת סרטונים" description="בלחיצה על הכפתור תוכל לברר על חבילת הסרטונים המכילה צילום ועריכה"/>
<What title="חבילת סרטונים + צילומי תדמית" description="בלחיצה על הכפתור תוכל לברר על חבילת הסרטונים המכילה צילומי צדמית + צילומי סרטונים ועריכה"/>
</div>
<div className={styles.row}>
<What title="ניהול סושיאל" description="בלחיצה על הכפתור תוכל לברר על חבילת הסרטונים המכילה רק את ניהול עמודי הסושיאל שלך"/>
<What title="הכל כלול" description="בלחיצה על הכפתור תוכל לברר על חבילת הסרטונים המכילה ניהול סושיאל, צילומי תדמית , צילום סרטונים ועריכה שלהם"/>
</div>
</>


}
export default ForthScreenSocial