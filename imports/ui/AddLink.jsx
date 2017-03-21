import React, { Component, PropTypes } from 'react';
import {Meteor} from 'meteor/meteor';
import Modal from 'react-modal';

// import AddLink from './AddLink.jsx';
class AddLink extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            url: '',
            isOpen: false,
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalClose(){
        this.setState({
            isOpen: false,
            url: '',
            error: ''
        })
    }

    onChange(e){
        e.preventDefault();
        this.setState({
            url: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const url = this.state.url;

        Meteor.call('links.insert', url, (err, res) => {
            if (!err) {
                this.handleModalClose();
            } else {
                this.setState({error: err.reason});
            }
        });

    }

    render() {
        return (
            <div className="add-link">
                <button className="button"
                        onClick={() => this.setState({isOpen:true})}>
                    + Add Link
                </button>
                <Modal  className="boxed-view__box"
                        overlayClassName="boxed-view boxed-view--modal"
                        isOpen={this.state.isOpen}
                        contentLabel="Add link"
                        onAfterOpen={() => this.refs.url.focus()}
                        onRequestClose={this.handleModalClose}>
                    <h1>Add Link</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form   onSubmit={this.onSubmit}
                            className="boxed-view__form">
                        <input  type="text" ref="url"
                                onChange={this.onChange}
                                placeholder="URL"
                                value={this.state.url}/>
                        <button className="button">Add Link</button>
                        <button onClick={this.handleModalClose}
                                className="button button--secondary" type="button">
                            cancel
                        </button>
                    </form>

                </Modal>
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