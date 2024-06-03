import styles from "./FirstScreenPhoto.module.css"
import {useEffect,useRef} from "react"
import valeria from "../../images/ולריה רמידובסקי צילום.png"

const FirstScreenPhoto=()=>{
  


return <>
<div className={styles.background}>
<div className={styles.description}> זה לא רק פלאש וגמרנו..</div>
<div className={styles.center}><img className={styles.image} src={valeria}/></div>

</div>
</>


}
export default FirstScreenPhoto