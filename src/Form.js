import React from "react";
import data from "./unis.json";

export default class Form extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        state: "Select State",
        email: "",
        university: "A T Still University of Health Sciences",
        selectedOption: "",
        submitted: false,
        data: []
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({submitted: true});
    };

    showEmail = () => {
        if(this.state.submitted === true) {
            var subject = "We Ask You To Sue The Government";
            var obj = this.state.data.find(uni => uni.Name === this.state.university);
            if (obj.E1.length !== 0|| obj.E2.length !== 0 || obj.E3.length !== 0 || obj.E4.length !== 0 || obj.E5.length !== 0|| obj.E6.length !== 0) {
                var to = obj.E1+','+obj.E2+','+obj.E3+','+obj.E4 + obj.E5 + obj.E6;
            } else {
                var to = "";
            }
            var userName = ((this.state.selectedOption === 'option1')? this.state.firstName : this.state.firstName + ' ' + this.state.lastName);
            var email = 'To Whom It May Concern,\n\n' + ((this.state.selectedOption === 'option1')? 'We' : 'I') + ', ' + userName + ' of ' + this.state.university + ', ' + this.state.state + ' request this institution to sue the government and stand against the U.S. Immigration and Customs Enforcement (ICE) directive against international students' + '\n\nCall to Action:\nAs you are aware, Harvard University and MIT recently filed a lawsuit in federal court against the ICE directives announced on Monday, July 6, 2020. As of now, several institutions have jointly filed amicus briefs, including, but not limited to, Cornell University, Georgetown University, Northeastern University, Purdue University, and USC. Suing the Trump administration for their misguided policies is imperative to protect the globally acclaimed higher-level education system America prides itself upon. Moreover, filing an amicus brief will provide the opportunity for an institution like ours to advocate for its students in an instrumental manner. We urge you to realize that while other institutions are taking action, they cannot compensate for your silence. We need you to protect the diversity at your institution, to support the future of immigrant students, and to prevent international students from being denied their fundamental rights as members of this community.\n\nThe impact of the new ICE directive on campus: \n  -  Limits international students\' ability to attain an education safely by restricting online education, an exemption previously exercised in light of the growing Pandemic.\n  -  Unduly demands a highly contributive minority cohort to make abrupt life-changing decisions about education, employment, and economic goals based on discriminatory policy-making.\n  -  Discounts the enhanced struggle immunocompromised students would have to face with in-person classes in the midst of a public health crisis.\n  -  Overlooks conditions involving a dearth of resources such as stable internet, electricity, and space that students might be forced to face if they return to their home countries. These factors hinder both academic progress and stable mental health.\n\n\nThe adaptive measures being provided to international students to continue to be part of the institution are appreciated, but, we need you to do more. ICE’s announcement is the ultimate restriction for all international students around the United States.\n\n\nIt is imperative that this institution takes the necessary steps to stand against this injustice and join the legal battle against the Department of Homeland Security.\n\nRegards,\n' + userName;
            var mailMsg = "mailto:" + to + "?subject=We%20Ask%20You%20To%20Sue%20The%20Government&body=" + encodeURIComponent(email);
            var gmailMsg = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + to + "&su=" + subject + "&body=" + encodeURIComponent(email);

            return (
                <div>
                    <div className="ui labeled icon button">
                        <i class="envelope icon"></i>
                        <a href={mailMsg}>Open in Mail</a>
                    </div>
                    <div className="ui button">
                        <i className="google icon"></i>
                        <a href={gmailMsg}>Open in Gmail</a>
                    </div>
                </div>
            )
        }
    }

    showUnis = () => {
        var unis = [];
        this.state.data.map((item, key) =>{
            unis.push(item.Name);
        });
        return unis.map((item, key) =>{
            return(
                <option value={item}>{item}</option>
            )
        });
    };

    showStates = () => {
        const states = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','MD','MA','MI','MN','MS','MO','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
        return states.map((item, key) =>{
            return(
                <option value={item} onClick={() =>{
                    this.setState({state: item})
                }}>{item}</option>
            )
        });
    };

    onChangeName(event) {
        this.setState({firstName: event.target.value})
    }

    onChangeLastName(event) {
        this.setState({lastName: event.target.value})
    }

    handleUserChange = (event) => {
        this.setState({selectedOption: event.target.value})
    };

    handleUniChange = (event) => {
        this.setState({university: event.target.value})
    };

    handleStateChange = (event) => {
        this.setState({state: event.target.value})
    };

    namePicker = () => {
        if(this.state.selectedOption === 'option1'){
            return(
                <div className="fields" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="field">
                        <label>Name of Organization</label>
                        <input type="text" name="Org-name" placeholder="type here.." onChange={this.onChangeName.bind(this)}/>
                    </div>
                </div>
            )
        }else if(this.state.selectedOption === 'option2'){
            return(
                <div className="ui column stackable center page grid">
                    <div className="forty wide column">
                         <div className="two fields">
                            <div className="twelve wide field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="type here.." onChange={this.onChangeName.bind(this)}/>
                          </div>
                         <div className="twelve wide field">
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="type here.." onChange={this.onChangeLastName.bind(this)}/>
                         </div>
                    </div>
                </div>
                </div>
            )
        }
    };

    csvReader = () =>{
        if(Object.keys(this.state.data).length == 0) {
            this.setState({data: data})
        }else{
        }
    };

    render() {
        return (
            <div className="form">
                {this.csvReader()}
                <form className="ui huge form">
                    <h1 className="ui red center aligned dividing header">
                        Fill out this form for an email template to send to your school authorities!
                    </h1>
                    <div className="ui sub header">
                        Please select which describes you best
                    </div>
                    <select className="ui fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleUserChange}>
                        <option value="">Select an option</option>
                        <option value="option1">Student Organization</option>
                        <option value="option2">Individual</option>
                    </select>

                    {this.namePicker()}
                    <div className="ui sub header">
                        State
                    </div>
                    <select className="ui fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleStateChange}>
                        <option value="">{this.state.state}</option>
                        {this.showStates()}
                    </select>
                    <div className="ui sub header">
                        University
                    </div>
                    <select className="ui required fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleUniChange}>
                        <option value="">{this.state.university}</option>
                        {this.showUnis()}
                    </select>

                    <button onClick={e => this.onSubmit(e)} style = {{margin:20}}>Submit</button>
                </form>
                {this.showEmail()}
            </div>
        );
    }
}