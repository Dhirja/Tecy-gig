import React from 'react';
import './styles/Watsapp.css'
import { FcUp } from "react-icons/fc";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIntegration = () => {
  const phoneNumber = '7031630063'; // Replace with the recipient's phone number

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className='watsapp-button' style={{float:"left"}}
      onClick={openWhatsApp}
    >
      <FaWhatsapp/>
    </div>
  );
};
export default WhatsAppIntegration