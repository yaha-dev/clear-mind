import React from 'react';
import { MenuStyled, MenuList, MenuLink } from './styled';

import { routerList, routerKeys } from 'utils/routing';

function Menu(props) {
    return (
        <MenuStyled {...props}>
            <MenuList>
                {routerKeys.map((key) => {
                    const route = routerList[key];
                    return (
                        <MenuLink
                            to={route.path}
                            key={key}
                            activeClassName="active"
                            exact={route.path === '/'}
                        >
                            {route.name}
                        </MenuLink>
                    );
                })}
            </MenuList>
        </MenuStyled>
    );
}

export default Menu;
