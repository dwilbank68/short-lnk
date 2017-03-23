import React, { Component, PropTypes } from 'react';
import Clipboard from 'clipboard';
import {Meteor} from 'meteor/meteor';
import moment from 'moment';

// import LinksListItem from './LinksListItem.jsx';
class LinksListItem extends Component {

    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);
        this.clipboard
                .on('success', () => {
                    this.setState({copied: true});
                    setTimeout(() => {
                        this.setState({copied: false});
                    }, 1000);
                })
                .on('error', () => {
                    alert('error - you must manually copy the short url');
                })

    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    constructor(props, context){
        super(props, context);
        this.state = {
            copied:false
        }
       // this.handleClick = this.handleClick.bind(this)
    }


    // handleClick(e) {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    render() {
        return (
            <div className="links-list-item item" >
                <h2>{this.props.url}</h2>
                <p className="item__message">{this.props.shortUrl}</p>
                {this.renderStats()}
                <div className="item__buttons">
                    <a  className="button button--pill button--link"
                        href={this.props.shortUrl}
                        target="_blank">
                        Visit
                    </a>
                    <button className="button button--pill"
                            ref="copy"
                            data-clipboard-text={this.props.shortUrl}>
                        {this.state.copied ? 'copied':'copy'}
                    </button>
                    <button className="button button--pill"
                            onClick={() => {
                                Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
                            }}>
                        {this.props.visible ? 'Hide':'Unhide'}
                    </button>
                </div>
            </div>
        );
    }

    renderStats(){
        const visitMsg = this.props.visitedCount === 1 ? 'visit':'visits';
        let visitedMsg = null;
        if (typeof this.props.lastVisitedAt === 'number'){
            visitedMsg = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`
        }
        return (
            <p className="item__message">
                {this.props.visitedCount} {visitMsg} {visitedMsg}
            </p>
        )
    }

}

// LinksListItem.defaultProps = {};
LinksListItem.propTypes = {
    _id:            PropTypes.string.isRequired,
    url:            PropTypes.string.isRequired,
    shortUrl:       PropTypes.string.isRequired,
    userId:         PropTypes.string.isRequired,
    visible:        PropTypes.bool.isRequired,
    visitedCount:   PropTypes.number.isRequired,
    lastVisitedAt:  PropTypes.number
//     key:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
};
//
// PropTypes -> array, bool, func, number, object, string, symbol

// LinksListItem.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default LinksListItem;