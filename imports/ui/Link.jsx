import React, { Component, PropTypes } from 'react';
import {browserHistory} from 'react-router';

class Link extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {

        }
       this.onLogOut = this.onLogOut.bind(this)
    }


    // handleSubmit(e) {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    onLogOut(){
        browserHistory.push('/');
    }

    render() {
        return (
            <div className="link">
                Link
                <button onClick={this.onLogOut}>
                    Log Out
                </button>
            </div>
        );
    }
}

// Link.defaultProps = {};
// Link.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Link.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Link;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class Link extends Component {

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
    //         <div className="link">
    //         </div>
    //     );
    // }
// }