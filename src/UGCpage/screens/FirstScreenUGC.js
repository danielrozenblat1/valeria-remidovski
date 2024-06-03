import styles from "./FirstScreenUGC.module.css"
import {useEffect,useRef} from "react"
import valeria from "../../images/ולריה רמידובסקי UGC.png"

const FirstScreenUGC=()=>{
  


return <>
 <>
<div className={styles.background}>
<div className={styles.description}>המותג שלך זקוק <div className={styles.bold}>לאותנטיות</div></div>
<div className={styles.center}><img className={styles.image} src={valeria}/></div>
</div>
</>
</>


}
export default FirstScreenUGC