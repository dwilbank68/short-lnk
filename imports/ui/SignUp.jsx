import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class SignUp extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            count:0
        }
       this.increment = this.increment.bind(this)
    }


    increment() {
       this.setState({
           count:this.state.count+1
       })
    }

    render() {
        return (
            <div className="sign-up">
                <h1>Join Short Link</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>+1</button>
                <Link to="/">
                    Already have an account?
                </Link>
            </div>
        );
    }
}

// SignUp.defaultProps = {};
// SignUp.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// SignUp.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default SignUp;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class SignUp extends Component {

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
    //         <div className="sign-up">
    //         </div>
    //     );
    // }
// }