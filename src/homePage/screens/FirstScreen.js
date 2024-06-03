import styles from "./FirstScreen.module.css"
import {useEffect,useRef} from "react"
import valeria from "../../images/ולריה רמידובסקי.png"
import socialIcon from "../../icons/wired-lineal-962-social-media-marketing.json"
import ugcIcon from "../../icons/wired-lineal-1027-marketing-campaign.json"
import CameraIcon from "../../icons/wired-lineal-61-camera (1).json"
import Button from "../../components/button/Button"
const FirstScreenHome=(props)=>{
  


return <>
<div className={styles.background}>
<h1 className={props.scrolled ?styles.nameP :styles.name}>ולריה רמידובסקי</h1>
<div className={styles.description}>צילום | ניהול סושיאל מדיה | UGC</div>
<div className={styles.center}><img className={styles.image} src={valeria}/></div>
<div className={styles.who}>אז על מה נדבר היום?</div>
<div className={styles.column}>
<Button icon={CameraIcon} text="צילום"/>
<Button icon={socialIcon} text="ניהול סושיאל מדיה"/>
<Button icon={ugcIcon} text="UGC"/>
</div>
</div>
</>


}
export default FirstScreenHome