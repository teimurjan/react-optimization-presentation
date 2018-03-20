import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ featuresNames }) => (
    <div className="wrapper">
        {featuresNames.map(({ key, value }) => <h2 key={key}>{value}</h2>)}
    </div>
);

Features.propTypes = {
    featuresNames: PropTypes
        .arrayOf(PropTypes.object)
        .isRequired
}

Features.defaultProps = {
    featuresNames: [{ key: 'no-features', value: 'No features available' }]
}

export default Features;