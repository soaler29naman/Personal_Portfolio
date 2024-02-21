import React, { useRef, useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ok9pl85",
        "template_dxjjsz5",
        form.current,
        "W_HaljHlUGH1nQxgG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={sendEmail} ref={form}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="FullName"
                    name="name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
