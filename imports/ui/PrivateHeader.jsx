import React, { PropTypes } from 'react';
import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = ({title}) => {

    return (
        <div className="private-header">
            <h1>{title}</h1>
            <button onClick={() => Accounts.logout()}>
                Log Out
            </button>
        </div>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
};


export default PrivateHeader;

