import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

class LogIn extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            error: ''
        }
       this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(e){
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor
            .loginWithPassword(
                {email},
                password,
                (err) => { console.log(err);}
            )
    }

    render() {
        return (
            <div className="log-in">
                <h1>Short Link</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit ={this.onSubmit}>
                    <input type="email"     ref="email"     name="email"    placeholder="Email"/>
                    <input type="password"  ref="password"  name="password" placeholder="Password"/>
                    <button>Log In </button>
                </form>

                <Link to="/signup ">Have an account?</Link>

            </div>
        );
    }
}

// LogIn.defaultProps = {};
// LogIn.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// LogIn.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default LogIn;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class LogIn extends Component {

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
    //         <div className="login">
    //         </div>
    //     );
    // }
// }