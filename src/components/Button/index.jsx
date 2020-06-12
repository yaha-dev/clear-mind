import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styled';

function Button(props) {
    return <Btn {...props} />;
}

Button.propTypes = {
    onClick: PropTypes.func,
};

Button.defaultProps = {
    children: 'click me',
};

export default Button;
