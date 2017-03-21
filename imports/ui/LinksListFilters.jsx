import React, { Component, PropTypes } from 'react';
import {Session} from 'meteor/session';


class LinksListFilters extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            showVisible:true
        }
    }

    componentWillMount() {
        this.visibilityTracker =
            Tracker.autorun(() => {
                this.setState({
                    showVisible:Session.get('showVisible')
                });
            })
    }

    componentWillUnmount() {
        this.visibilityTracker.stop();
    }

    render() {
        return (
            <div className="links-list-filters">
                <label className="checkbox">
                    <input  className="checkbox__box"
                            type="checkbox"
                            checked={!this.state.showVisible}
                            onChange={(e) => {
                                Session.set('showVisible', !e.target.checked);
                            }}/>
                    show hidden links
                </label>
            </div>
        );
    }
}

export default LinksListFilters;