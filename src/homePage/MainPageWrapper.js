import styles from "./MainPageWrapper.module.css"
import {useEffect,useRef, useState} from "react"
import FirstScreenHome from "./screens/FirstScreen"
import SecondScreenHome from "./screens/SecondScreen"
import NavBar from "../components/NavBar/NavBar"
import ThirdScreenHome from "./screens/ThirdScreen"
import ForthPageHome from "./screens/ForthPageHome"
import FifthPageHome from "./screens/FifthPageHome"
import ByMe from "../components/ByMe/ByMe"
const MainPageWrapper=()=>{
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }};
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

return <>
<div className={styles.background}>
 <NavBar />
<FirstScreenHome scrolled={scrolled}/>
<FifthPageHome title="צילומי סטודיו" title2="צילומי חוץ"/>
<SecondScreenHome/>
<ThirdScreenHome/>
<ForthPageHome/>
<ByMe/>
</div>
</>


}
export default MainPageWrapper