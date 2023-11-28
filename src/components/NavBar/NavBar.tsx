import React from 'react';

import { navList } from './navList';
import { scrollToElementById } from '../../utils/scrollToElementById';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { NavBarList, NavButton } from './NavBar.styled';

const NavBar: React.FC = () => {
  return (
    <nav>
      <NavBarList>
        {navList.map(({ name, id }) => (
          <li key={id}>
            <NavButton onClick={() => scrollToElementById(id)}>
              {name} <Arrow width={16} height={16} />
            </NavButton>
          </li>
        ))}
      </NavBarList>
    </nav>
  );
};

export default NavBar;
