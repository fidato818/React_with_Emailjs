import React from "react";
import "./styles.css";
import emailjs from "emailjs-com";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  render() {
    return (
      <div className="App">
        <form className="contact-form" onSubmit={this.sendEmail}>
          <label>Full Name</label>
          <input type="text" name="from_name" />
          <br />
          <br />
          <label>Email</label>
          <input type="email" name="user_email" />
          <br />
          <br />
          <label>Budget</label>
          <input type="text" name="user_budget" />
          <br />
          <br />
          <label>Product Select</label>
          <input type="text" name="selected_product" />
          <br />
          <br />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          <br />
          <br />
        </form>
      </div>
    );
  }
}
