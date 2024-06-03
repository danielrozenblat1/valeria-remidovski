import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(135deg, rgba(31,130,167,0.5545868005405288) 0%, rgba(119,255,254,0.5013655120251226) 100%)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">שאלות נפוצות</div>
      <DropdownAccordion title="למה שיווק אותנטי למוצר שלי כל כך חשוב היום?" content="ברור ! , לאורך דף הנחיתה אתה מנרטל התנגדויות שיכולות להיות לליד שלך בשיחת המכירה , גורם לו להבין מי אתה ושאתה זו שיכול לפתור לו את הבעיה , הוא מגיע לשיחה כשהוא מכיר אותך , את תהליך העבודה איתך והרבה יותר מוכן לסגור איתך - מה שמקצר את שיחת המכירה שלך  " />
      <DropdownAccordion title="את עושה UGC רק על מוצרים/מותגים או גם על בתי עסק, בתי מלון...?" content="דף נחיתה הוא העובד הוירטואלי של כל בעל עסק ,הוא כלי עסקי לכל דבר ועניין שאוסף את כל אלה שמגיעים מהשיווק שלך ומעביר אותם תהליך חימום וסינון , הוא מסביר להם איזו בעיה אתה פותר , מי אתה , למה לבחור דווקא בך ועל התהליך שהם יעברו איתך. בדף יהיה מקום להשארת פרטים. ובמידה ובונה הדף שלך עשה עבודה טובה ,הפניות אליך יהיו הרבה יותר ממוקדות ורציניות  " />
     
      {/* <DropdownAccordion title="מה אני עושה אם אני אתקל בבעיה ? " content="אז סביר להניח שיהיו דברים מאתגרים, בשביל זה אני כאן. אני אלווה אותך בכל מהלך תוכנית ההכשרה מפתיחת החנות ועד לחנות יציבה ורווחית באיביי" />
      <Accordion
        disabled
        sx={{
          width: "50%",
          margin: "0 auto",
          background: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography></Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  
  );
}
