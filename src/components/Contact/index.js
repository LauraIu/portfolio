import React from "react";
import emailjs from "emailjs-com";
// import { Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import { NavBtnLink } from "./ContactElements";
import {
  ContactContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormTextarea,
} from "./ContactElements";

const SERVICE_ID = "service_47rl4io";
const TEMPLATE_ID = "template_z6u35ag";
const USER_ID = "XsJRAHmRzoUQmaV0f";

const ContactComponent = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          iconColor: "#b3fb61",
          title: "Thank You! Your Message was Successfully Sent!",
          confirmButtonColor: "#2b3b2d",
          color: "#f8f8f8",
          background: "#728775",
          padding: "20px 15px 40px 15px",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <ContactContainer id="contact">
      <FormWrap>
        <Icon to="/">IuLa</Icon>
        <FormContent onSubmit={sendEmail}>
          <Form>
            <FormH1>Send me a message</FormH1>
            <FormLabel htmlFor="user_name">Name</FormLabel>
            <FormInput
              type="text"
              id="form-input-control-last-name"
              name="user_name"
              placeholder="Name…"
              style={{ color: "#728775" }}
              required
              icon="user circle"
              iconPosition="left"
            />

            <FormLabel htmlFor="user_email">Email</FormLabel>
            <FormInput
              type="email"
              id="form-input-control-email"
              name="user_email"
              placeholder="Email…"
              style={{ color: "#728775" }}
              required
              icon="user circle"
              iconPosition="left"
            />

            <FormLabel htmlFor="user_message">Message</FormLabel>
            <FormTextarea
              id="form-textarea-control-opinion"
              control={FormTextarea}
              label="Message"
              name="user_message"
              placeholder="Message…"
              style={{ color: "#728775" }}
              required
            />
            <NavBtnLink type="submit">Send</NavBtnLink>
          </Form>
        </FormContent>
      </FormWrap>
    </ContactContainer>
  );
};

export default ContactComponent;
