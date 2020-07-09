import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    };

    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });
        this.props.onChange({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
        });
    };

    showStates = () => {
        // const csvFilePath='./../csv/state-abbrevs.csv';
        // console.log("pre require");
        // var Papa = require("./papaparse/papaparse.min.js");
        // console.log("post require");
        // Papa.parse(csvFilePath, {
        //     delimiter: ",",
        //     complete: function(results) {
        //         console.log(results);
        //     }
        // });
        return(
            <div>
                <div>
                    <button className="item"
                    >
                        Test
                    </button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="form">
                <form className="ui huge form">
                    <h1 className="ui center aligned dividing header">
                        Fill out this form for an email template to send to your school authorities!
                    </h1>
                    <div className="two fields">
                        <div className="required field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="type here.."/>
                        </div>
                        <div className="required field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="type here.."/>
                        </div>
                    </div>
                    <div className="inline fields">
                        <label htmlFor="fruit">Select which desribes you best:</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="user" checked="" tabIndex="0" className="hidden"/>
                                    <label>Student org/club</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input type="radio" name="user" tabIndex="0" className="hidden"/>
                                    <label>Individual student</label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>State</label>
                        <div className="ui simple dropdown item">
                            <a className="item" style={{fontSize: '17px', padding: 0}}>
                                Select State
                            </a>
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                <a className="item" style={{fontSize: '17px', padding: 0}}>
                                    {this.showStates()}
                                </a>
                            </div>
                        </div>
                    </div>
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
        );
    }
}