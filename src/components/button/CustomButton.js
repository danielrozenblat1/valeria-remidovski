import styles from './CustomButton.module.css';

const CustomButton = (props) => {

  const handleClick = () => {
    const phoneNumber = "+972584242199";
    // Set the message content
    const message =props.message || "היי ולריה , אשמח לשמוע על..";

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");

  };
  return (
    <div className={styles.button} onClick={handleClick}>
{props.text}
      <span className={styles['button-border']}></span>
    </div>
  );
};

export default CustomButton;