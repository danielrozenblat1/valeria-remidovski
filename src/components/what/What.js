import styles from "./What.module.css"
const What =(props)=>{


    return <>
       <div className={styles.box}>
      <div className={styles.glassEffect}></div>
      <div className={styles.content}>
        {/* <div className={styles.number}>{props.number}</div> */}
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
      <div className={styles.center}><button className={styles.button}>לחץ כאן לעוד פרטים</button></div>
    </div>
    
    </>

}
export default What