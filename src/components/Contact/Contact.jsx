import React, { useRef } from "react";
import "./Contact.css"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';



function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("your message has been sent",{position:"top-center"})
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("your message has not been sent",{position:"top-center"})
        },
      );
  };



  
  return (
    <section className="contact-section" id="contact">
     <div>
        <ToastContainer />
      </div>
    <h1>Contact Me</h1>
    <div className="contact">
      <div className="info">
        <h2>Let's Keep In Touch</h2>
        <p>Hi, I'm actively looking out for a working opportunity. If you are interested ,
          or if you would just like to chat about some great ideas, feel free to contact me</p>
        <div>
          <a href="https://www.linkedin.com/in/abdelghafour-elouakkassi-9a2789284/"><BsLinkedin size={30} style={{ marginRight:15,cursor:"pointer" }}/></a>
          <a href="https://github.com/AbdelghafourELouakkassi"><BsGithub size={32} style={{ cursor:"pointer" }} /></a>
        </div>
      </div>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Name" required />
        <input type="email" name="from_email" placeholder="Email" required />
        <textarea name="message" rows={8} placeholder="Message..." required ></textarea>
        <button>Send</button>
      </form>
    </div>
  </section>
  );
}

export default Contact;
