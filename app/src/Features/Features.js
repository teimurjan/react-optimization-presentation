import React from 'react';
import PropTypes from 'prop-types';

const Features = ({featuresNames}) => (
    <div className="wrapper">
        <ul>
            {featuresNames.map(({key, value}) => <li key={key}>{value}</li>)}
        </ul>
    </div>
);

Features.propTypes = {
    featuresNames: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired
}

Features.defaultProps = {
    featuresNames: [{key: 'no-features', value: 'No features available'}]
}

export default Features;