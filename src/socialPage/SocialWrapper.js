import styles from "./SocialWrapper.module.css"
import {useEffect,useRef} from "react"
import FirstScreenSocial from "./screens/FirstScreenSocial"
import ThirdScreenHome from "../homePage/screens/ThirdScreen"
import NavBar from "../components/NavBar/NavBar"
import SecondScreenSocial from "./screens/SecondScreen"
import ForthScreenSocial from "./screens/ForthScreenSocial"
import BasicAccordion from "../components/Akordion/AkordionSocial"
import ByMe from "../components/ByMe/ByMe"


const SocialWrapper=()=>{
  


return <>
<div className={styles.background}>
<NavBar/>
<FirstScreenSocial/>
<ThirdScreenHome/>
<SecondScreenSocial/>
<ForthScreenSocial/>
<BasicAccordion/>
<ByMe/>
</div>
</>


}
export default SocialWrapper