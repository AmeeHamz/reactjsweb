import React from 'react';
import styled from "styled-components";

const Contact = () => {
  

  return (
    <Wrapper>
   <h2 className="common-heading">Feel Free to Contact us</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.
  4250650926415!2d74.1851629144789!3d31.374841061454337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
  1!3m3!1m2!1s0x3918ffc08ebba023%3A0x745ec63e3803260!2sCybexo%20Inc.
  !5e0!3m2!1sen!2s!4v1663070298770!5m2!1sen!2s" 
  width="100%" 
  height="450" 
  style= {{ border:0 }}
  allowFullScreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
  </iframe>

  <div className="container">
        <div className="contact-form">
          <form
        action="https://formspree.io/f/xpznqgel"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            border-Radius: 4px;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;