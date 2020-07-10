import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
        <div className="App">
            <h2 className="ui navy blue header" style={{paddingTop:20}}>#SueTheGovernment</h2>
            <h3 className="ui header" style={{paddingLeft:10, paddingRight: 10}}>We need to protect the diversity at our institutions, to support the future of immigrant students, and to prevent international students from being denied their fundamental rights as members of this community.   Ask your university to sue the Trump administration for their misguided policies is imperative to protect the globally acclaimed higher-level education system America prides itself upon.</h3>
            <h2 className="ui navy blue header">How Do You Get Your School To Sue?</h2>
            <h3 className="ui header" style={{paddingLeft:10, paddingRight: 10}}>Put pressure on your institution's administration by sending our pre-drafted statement as a campus club, association, fraternity or even as an individual to your president, provost and general counsel.   The action of some universities cannot compensate for your institution's silence. We urge you all to take action.      </h3>
            <h5> None of the information entered here will ever be stored. All processing is done client-side.</h5>
            <Form onChange={fields => this.onChange(fields)} />
            <div className="ui fluid image">
                <a href="https://naais.org">
                <img src={require('./images/naaispetition.png')} style = {{padding:10, margin:10}}/>
                </a>
            </div>
            <div>
                <h4>Powered by the <a href="https://naais.org">North American Association of Indian Students</a>.</h4>
            </div>

        </div>
    );
  }
}

export default App;