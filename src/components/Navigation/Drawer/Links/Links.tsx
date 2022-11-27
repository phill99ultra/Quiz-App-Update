import React from 'react';
import { List } from '@mui/material';

import { SIDEBAR_LINKS, AUTH_SIDEBAR_LINKS } from '../../../../constants/sidebarLinks';
import LinkItem from './LinkItem/LinkItem';
import LinkItemMenuOpen from './LinkItem/LinkItemMenuOpen';

type LinksProps = {
    isOpen: boolean | null;
    listClass: string;
    authState: boolean; 
    handleToggle: () => void;
}

const PagesLinks: React.FC<LinksProps> = ({ isOpen, listClass, authState, handleToggle }) => {    
    let links = SIDEBAR_LINKS;
    if (authState) links = AUTH_SIDEBAR_LINKS;
    
    return(
        <List className={listClass}>
            {
                links.map((link, _) => (
                    !isOpen ? (
                        <LinkItem
                            key={link.id}
                            link={link} 
                            handleToggle={handleToggle}
                        />
                    ) : (
                        <LinkItemMenuOpen
                            key={link.id}
                            link={link} 
                            handleToggle={handleToggle}
                        />
                    ) 
                ))
            }
        </List>
    )
}

export default PagesLinks;