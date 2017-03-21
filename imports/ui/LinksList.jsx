import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

import FlipMove from 'react-flip-move';

import {Links} from '../api/links';
import LinksListItem from './LinksListItem';

class LinksList extends Component {

    componentDidMount() {
        this.linksTracker =
            Tracker.autorun(() => {
                Meteor.subscribe('links');
                let links = Links.find({
                    visible: Session.get('showVisible')
                }).fetch();
                this.setState({links});
            })
    }

    componentWillUnmount() {
        this.linksTracker.stop();
    }


    constructor(props, context) {
        super(props, context);
        this.state = {
            links: []
        }
    }

    renderLinksListItems() {
        if (this.state.links.length === 0) {
            return (
                <div className="item">
                    <p className="item__status-message">No links found</p>
                </div>
            )
        }
        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id}
                                  shortUrl={shortUrl}
                                  {...link}/>
        })
    }

    render() {
        return (
            <div className="links-list">
                <div>
                    <FlipMove maintainContainerHeight={true}>
                        {this.renderLinksListItems()}
                    </FlipMove>
                </div>
            </div>
        );
    }
}

// LinksList.defaultProps = {};
// LinksList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

// LinksList.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default LinksList;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')


//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class LinksList extends Component {

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
//         <div className="links-list">
//         </div>
//     );
// }
// }