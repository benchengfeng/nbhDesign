import React from "react";
import axios from "axios";

const SendMailButton: React.FC = () => {
  const name = "cheng_feng";
  const email = "aminebizerta@gmail.com";
  const message = "hello cheng feng";

  const handleClick = async () => {
    try {
      await axios.post(
        "sendEmail.php",
        `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Email sent successfully!");
    } catch (error: any) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
      alert("Error sending email. Please try again later.");
    }
  };

  return <button onClick={handleClick}>Send Email</button>;
};

export default SendMailButton;
