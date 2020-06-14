import React from 'react';
import { MenuStyled, MenuList, MenuLink } from './styled';
import { useTranslation } from 'react-i18next';

import { routerList, routerKeys } from 'utils/routes';

function Menu(props) {
    const { t } = useTranslation();

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
                            {t(route.name)}
                        </MenuLink>
                    );
                })}
            </MenuList>
        </MenuStyled>
    );
}

export default Menu;
