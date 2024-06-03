import styles from "./UGCWrapper.module.css"
import {useEffect,useRef} from "react"

import NavBar from "../components/NavBar/NavBar"
import FirstScreenUGC from "./screens/FirstScreenUGC"
import NewImagesGrid from "../components/grid/NewImageGrid"
import ForthPageHome from "../homePage/screens/ForthPageHome"
import BasicAccordion from "../components/Akordion/AkordionUGC"
import ByMe from "../components/ByMe/ByMe"


const UGCWrapper=()=>{
  


return <>
<div className={styles.background}>
<NavBar/>
<FirstScreenUGC/>
<ForthPageHome/>
<NewImagesGrid/>
<BasicAccordion/>
<ByMe/>
</div>
</>


}
export default UGCWrapper