import styles from "./NewImageGrid.module.css"
import video1 from "../../videos/וידאו בדיקה.mp4"
// import grid1 from "../../videos/"

// import grid2 from "../../videos/"
// import grid3 from "../../videos/"
// import grid4 from "../../videos/"
// import grid5 from "../../videos/"
// import grid6 from "../../videos/"
// import grid7 from "../../videos/"
// import grid8 from "../../videos/"
// import grid13 from "../../videos/"
//  import grid10 from "../../videos/"
//  import grid14 from "../../videos/"
//  import grid12 from "../../videos/"
//  import grid15 from "../../videos/"
import { useEffect, useState } from "react"
import ScrollReveal from "scrollreveal"
import CustomButton from "../button/CustomButton"
const NewImagesGrid=()=>{

const [zoom,setZoom]=useState(false)


    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.image1}`, {
            duration: 600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image2}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
          });
          ScrollReveal().reveal(`.${styles.image3}`, {
            duration:600,
            distance: "60px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 200,
            delay: 100,
            scale: 1,
          });
    },[])
    return <>
<div className={styles.title}>איך זה נראה אתם שואלים?</div>
<div className={styles.description}>גללו למטה והתרשמו</div>
    <div className={styles.container}>
    <div className={styles.row2}>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
    </div>

    <div className={styles.row2}>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
    <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image3} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
                <video className={styles.image1} autoPlay loop muted alt="ולריה רמידובסקי UGC">
                    <source src={video1} type="video/mp4" />
                </video>
    </div>
    {/* <div className={styles.row}>
    <img className={styles.image3}  alt="ולריה רמידובסקי UGC"src={image6}/>
    </div> */}
    {/* <div className={styles.row2}>


    </div> */}
  
    
    </div>
    <CustomButton text="לחץ כאן לעוד פרטים"/>
    </>
    }
    export default NewImagesGrid