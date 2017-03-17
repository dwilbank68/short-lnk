import React, { Component, PropTypes } from 'react';
import Clipboard from 'clipboard';

// import LinksListItem from './LinksListItem.jsx';
class LinksListItem extends Component {

    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);
        this.clipboard
                .on('success', () => {
                    alert('worked')
                })
                .on('error', () => {
                    alert('unable to copy')
                })

    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }


    // handleClick(e) {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    render() {
        return (
            <div className="links-list-item" >
                <h3>{this.props.url}</h3>
                <p>{this.props.shortUrl}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                    copy
                </button>
            </div>
        );
    }
}

// LinksListItem.defaultProps = {};
LinksListItem.propTypes = {
    _id:        PropTypes.string.isRequired,
    url:        PropTypes.string.isRequired,
    shortUrl:   PropTypes.string.isRequired,
    userId:     PropTypes.string.isRequired,
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