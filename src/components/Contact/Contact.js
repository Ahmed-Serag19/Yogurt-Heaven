import React from 'react';
import Button from '../UI/Button';
import HeaderTitle from '../UI/HeaderTitle';
import classes from './Contact.module.css';

export default function Contact() {
  return (
    <section className={classes.contact}>
      <HeaderTitle>Contact</HeaderTitle>
      <div className="row d-flex text-center justify-content-center align-items-center my-5">
        <div className="col-xlg-4 col-lg-4 ">
          <iframe
            title="yogurt spot"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214645.0933085636!2d-117.2424229830554!3d32.79677764116041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf99fd8faee45%3A0xbf15ae1b9a0adeb!2sYogurt%20Heaven!5e0!3m2!1sen!2seg!4v1657996128006!5m2!1sen!2seg"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-xlg-4 col-lg-4 my-5 ">
          <h3>We are waiting for you!</h3>
          <p>
            Come and pay us a visit and have a flavour you never tried
            before. <br />
            its going to be worth every step closer to us !{' '}
          </p>
        </div>
        <div className="col-md-6 my-5">
          <div className="contact p-3">
            <h3>INQUIRY FORM</h3>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Name
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Email
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Subject
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <textarea
              className="form-control mb-3"
              name="meassage"
              cols="50"
              rows="7"
            >
              Share your thoughts
            </textarea>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
