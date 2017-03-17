import React, { PropTypes } from 'react';

import {Links} from '../api/links';
import LinksList from './LinksList.jsx';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

const Link = (props) => {

    return (
        <div className="link">

            <PrivateHeader title="Your Links"/>
            <LinksList/>
            <AddLink/>

        </div>
    );
};


// Link.defaultProps = {};
// Link.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

export default Link;
