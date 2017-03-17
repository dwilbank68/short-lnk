import React, { Component, PropTypes } from 'react';
import {Meteor} from 'meteor/meteor';

// import AddLink from './AddLink.jsx';
class AddLink extends Component {

    constructor(props, context){
        super(props, context);
       this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();
        if (url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div className="add-link">
                <p>Add Link</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}


export default AddLink;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class AddLink extends Component {

    // this.state = {
    //     'whatever':{}
    // }

    // handleSubmit = (e) => {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    // render() {
    //     return (
    //         <div className="add-link">
    //         </div>
    //     );
    // }
// }