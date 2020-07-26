import React from 'react';
import { MenuStyled, MenuList, MenuLink, MenuIcon, MenuInfo } from './styled';
import { useTranslation } from 'react-i18next';
import { packageConf } from 'utils/constants';

import { routerList, routerKeys } from 'utils/routes';

function Menu(props: React.HTMLProps<HTMLDivElement>) {
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
                            <MenuIcon icon={route.icon} /> {t(route.name)}
                        </MenuLink>
                    );
                })}
            </MenuList>
            <MenuInfo>
                {t('version')} {packageConf.version}
            </MenuInfo>
        </MenuStyled>
    );
}

export default Menu;
