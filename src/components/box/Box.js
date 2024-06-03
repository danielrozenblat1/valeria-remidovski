import styles from "./Box.module.css"
import {useEffect,useRef} from "react"
import { Player } from "@lordicon/react"

const Box=(props)=>{
const playerRef1=useRef(null)
    useEffect(()=>{

   
    playerRef1?.current?.playFromBeginning()
},[])
const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2000); // play again after 2.5 seconds
  };


return <>
<div className={styles.box}>
<div className={styles.circle}><div className={styles.icon}><Player icon={props.icon} size="90%" onComplete={handleComplete} ref={playerRef1}/></div></div>
<div className={styles.title}>{props.title}</div>
<div className={styles.description}>{props.description}</div>

</div>
</>


}
export default Box