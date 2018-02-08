import React from 'react';
import { Jumbotron } from '../Components/jumbotron/Jumbotron';

const defaultState = {
  email: '',
  body: '',
}
var styles = {
  fonts:{
    color: 'blue',
    backgroundColor:'red'
  },
  background:{
    backgroundColor:'cyan'
  }
}

export class Contact extends React.Component {

  state = defaultState;

  handleInputChange = (event) => {
    const { name, value }= event.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`email: ${this.state.email} and body: ${this.state.body}`);

    this.setState(defaultState)
  }

  render() {
    return (
      <section>
          <Jumbotron 
            title="Contact US"
            subTitle="We would love to hear your feedback"
            description="Thank you for being a customer!"
          />
          <form style={styles.background}className="container">
            <div className="form-group">
              <label style={styles.fonts} for="exampleFormControlInput1">Email address</label>
              <input type="email"
                    value={this.state.email}
                      className="form-control"
                      name="email"
                      id="exampleFormControlInput1"
                      onChange={this.handleInputChange}
                      placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">What do you want?</label>
              <textarea className="form-control"
                        name="body"
                        value={this.state.body}
                        id="exampleFormControlTextarea1"
                        onChange={this.handleInputChange}
                        rows="3"></textarea>
            </div>
            <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
          </form>
        </section>
    )
  }
}

export default Contact;