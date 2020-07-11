import React from "react";
import data from "./unis.json";
import consulateData from "./consulatesData";
import mpData from "./mpData";
import {isMobile} from "react-device-detect"

export default class Form extends React.Component {

    state = {
        inUS: false,
        consulateData: [],
        consulate: "Select Consulate",
        stateData: [],
        state: "Select State",
        constituency: "Select Constituency",
        filteredData: [],
        submitted: false,
        firstName: "",
        lastName: "",
        error: false,

        //old

        email: "",
        university: "Select University",
        selectedOption: "",

        data: [],


    };

    onSubmit = e => {
        e.preventDefault();
        if(this.state.firstName !== "" && this.state.state !== "Select State" && this.state.constituency !== "Select Constituency") {
            this.setState({submitted: true, error: false});
        }else{
            this.setState({error: true});
        }
    };

    showEmail = () => {
        if(this.state.submitted === true) {
            var subject = "We Ask You To Sue The Government";
            console.log("filteredData is :");
            console.log(this.state.filteredData);
            console.log("Constit is ");
            console.log(this.state.constituency);
            var obj = this.state.filteredData.find(mp => mp.Constituency === this.state.constituency);
            if (obj.E1.length !== 0 || obj.E2.length !== 0) {
                var to = 'connect@mygov.nic.in, eam@mea.gov.in, minister.hrd@gov.in,' + obj.E1+','+obj.E2;
            } else {
                var to = "connect@mygov.nic.in, eam@mea.gov.in, minister.hrd@gov.in";
            }

            if(this.state.consulate === "Select Consulate"){
                var cc = "comm-ea-lss@sansad.nic.in, rsc_hrd@sansad.nic.in";
            }else {
                var consulate = this.state.consulateData.find(cons => cons.Location === this.state.consulate);
                var cc = "comm-ea-lss@sansad.nic.in, rsc_hrd@sansad.nic.in," + consulate.E1;
            }
            var userName = ((this.state.selectedOption === 'option1')? this.state.firstName : this.state.firstName + ' ' + this.state.lastName);
            var email = 'To Whom It May Concern,\n\n' + ((this.state.selectedOption === 'option1')? 'We' : 'I') + ', ' + userName + ' of ' + this.state.constituency + ', ' + this.state.state + ' request this institution to sue the government and stand against the U.S. Immigration and Customs Enforcement (ICE) directive against international students' + '\n\nCall to Action:\nAs you are aware, Harvard University and MIT recently filed a lawsuit in federal court against the ICE directives announced on Monday, July 6, 2020. As of now, several institutions have jointly filed amicus briefs, including, but not limited to, Cornell University, Georgetown University, Northeastern University, Purdue University, and USC. Suing the Trump administration for their misguided policies is imperative to protect the globally acclaimed higher-level education system America prides itself upon. Moreover, filing an amicus brief will provide the opportunity for an institution like ours to advocate for its students in an instrumental manner. We urge you to realize that while other institutions are taking action, they cannot compensate for your silence. We need you to protect the diversity at your institution, to support the future of immigrant students, and to prevent international students from being denied their fundamental rights as members of this community.\n\nThe impact of the new ICE directive on campus: \n  -  Limits international students\' ability to attain an education safely by restricting online education, an exemption previously exercised in light of the growing Pandemic.\n  -  Unduly demands a highly contributive minority cohort to make abrupt life-changing decisions about education, employment, and economic goals based on discriminatory policy-making.\n  -  Discounts the enhanced struggle immunocompromised students would have to face with in-person classes in the midst of a public health crisis.\n  -  Overlooks conditions involving a dearth of resources such as stable internet, electricity, and space that students might be forced to face if they return to their home countries. These factors hinder both academic progress and stable mental health.\n\nThe adaptive measures being provided to international students to continue to be part of the institution are appreciated, but, we need you to do more. ICE’s announcement is the ultimate restriction for all international students around the United States.\n\nIt is imperative that this institution takes the necessary steps to stand against this injustice and join the legal battle against the Department of Homeland Security.\n\nRegards,\n' + userName;
            var mailMsg = "mailto:" + to + "?cc="+ cc +"&subject=We%20Ask%20You%20To%20Sue%20The%20Government&body=" + encodeURIComponent(email);
            var gmailMsg = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + to + "&cc="+ cc +"&su=" + subject + "&body=" + encodeURIComponent(email);

            return (
                <div>
                    <div>
                        <div className="ui labeled icon button">
                            <i className="envelope icon"></i>
                            <a href={mailMsg}>Open in Mail</a>
                        </div>
                        <div className="ui button">
                            <i className="google icon"></i>
                            <a href={gmailMsg}>Open in Gmail</a>
                        </div>
                    </div>
                </div>
            )
        }
    }

    showGmailWarning = () => {
        if(isMobile){
            return(
                <div className="ui warning message" style={{display: 'flex', justifyContent: 'center'}}>
                    <h4>
                        To open in Gmail on a phone, please enable desktop view in your browser.
                    </h4>
                </div>
            )
        }
    };

    showError = () => {
        if(this.state.error === true){
            return(
                <div className="ui negative message" style={{display: 'flex', justifyContent: 'center'}}>
                    <h4>
                        Please make sure all fields are filled.
                    </h4>
                </div>
            )
        }
    };

    showConstituencies = () => {
        var constituencies = [];
        return this.state.filteredData.map((item, key) => {
            return(
                <option value={item.Constituency}>{item.Constituency}</option>
            )
        })
    }

    showConsulates = () => {
        const consulates = this.state.consulateData;
        if(consulates.length === 0){
        }else{
            return consulates.map((item, key) => {
                var location = item.Location;
                return(
                    <option value={location}>{location}</option>
                )
            });
        }
    };

    showStates = () => {
        const states = [...new Set(this.state.stateData.map(item => item.State))];
        return states.map((item, key) =>{
            return(
                <option value={item}>{item}</option>
            )
        });
    };

    onChangeName(event) {
        this.setState({firstName: event.target.value})
    }

    onChangeLastName(event) {
        this.setState({lastName: event.target.value})
    }

    handleUSChange = (event) => {
        this.setState({inUS: event.target.value, submitted: false, consulate: "Select Consulate"})
    };

    handleConstituencyChange = (event) => {
        this.setState({constituency: event.target.value, submitted: false})
    };

    handleStateChange = (event) => {
        var filteredData = [];
        this.state.stateData.map((item, key) => {
            if(item.State === event.target.value){
                filteredData.push(item);
            }
        });
        this.setState({state: event.target.value, filteredData: filteredData, constituency: "Select Constituency", submitted: false})
    };

    handleConsulateChange = (event) => {
        this.setState({consulate: event.target.value, submitted: false});
    };

    consulatePicker = () => {
        if(this.state.inUS === 'yes'){
            return(
                <div style={{paddingTop: 10}}>
                    <div className="ui sub header">
                        Select your nearest Consulate
                    </div>
                    <select className="ui fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleConsulateChange}>
                        <option value="">{this.state.consulate}</option>
                        {this.showConsulates()}
                    </select>
                </div>
            )
        }
    }

    namePicker = () => {
        return(
            <div className="ui column stackable center page grid" style={{paddingTop: 10}}>
                <div className="forty wide column">
                    <div className="two fields">
                        <div className="twelve wide required field">
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
    };

    csvReaderConsulate = () => {
        console.log("Reading data in");
        console.log(this.state.consulateData);
        if(Object.keys(this.state.consulateData).length === 0){
            this.setState({consulateData: consulateData});
        }
    };

    csvReaderStates = () => {
        console.log("Reading states in");
        if(Object.keys(this.state.stateData).length === 0){
            this.setState({stateData: mpData});
        }
    }

    render() {
        return (
            <div className="form">
                {this.csvReaderConsulate()}
                {this.csvReaderStates()}
                <form className="ui huge form">
                    <h1 className="ui red center aligned dividing header">
                        Fill out this form for an email template to send to your school authorities!
                    </h1>
                    <div className="ui sub header">
                        Are you an Indian student studying in the U.S. or an Indian alumni of a U.S. university?
                    </div>
                    <select className="ui fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleUSChange}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {this.consulatePicker()}
                    {this.namePicker()}
                    <div className="ui sub header">
                        State
                    </div>
                    <select className="ui fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleStateChange}>
                        <option value="">{this.state.state}</option>
                        {this.showStates()}
                    </select>
                    <div className="ui sub header">
                        Constituency
                    </div>
                    <select className="ui required fluid search dropdown" style={{fontSize: '17px', padding: 0}} onChange={this.handleConstituencyChange}>
                        <option value={this.state.constituency}>{this.state.constituency}</option>
                        {this.showConstituencies()}
                    </select>

                    <button onClick={e => this.onSubmit(e)} style = {{margin:20}}>Generate template</button>
                </form>
                {this.showEmail()}
                {this.showGmailWarning()}
                {this.showError()}
            </div>
        );
    }
}