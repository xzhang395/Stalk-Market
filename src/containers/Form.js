import React from 'react';

class Form extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { items: [], text: '' };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    render() {
      return (
        <div className="form">
        <div className="question">
          <label for="basic">What's the current Stalk price on your island?</label><br/>
          <input type="number" name="price" id="price" value=""/>
        </div>
        <div className="question">
          <label for="basic">What's the name of your island?</label><br/>
          <input type="text" name="island-name" id="island" value=""/>
        </div>
        <div className="question">
            <label for="basic">What's your name?</label><br/>
            <input type="text" name="owner-name" id="name" value=""/>
          </div>
        <button type="button" id="myBtn">Submit</button>
      </div>
      );
    }
  }

  export default Form;