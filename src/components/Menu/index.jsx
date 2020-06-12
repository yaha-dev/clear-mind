import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { MenuStyled } from './styled';
import { ThemeContext } from '../../utils/themes';

function Menu(props) {
    return (
        <MenuStyled {...props}>
            <ThemeContext.Consumer>
                {({ toggleTheme }) => <Button onClick={toggleTheme} />}
            </ThemeContext.Consumer>
        </MenuStyled>
    );
}

Menu.propTypes = {};

export default Menu;
