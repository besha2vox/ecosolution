import React from 'react';

import { navList } from './navList';
import { scrollToElementById } from '../../utils/scrollToElementById';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { NavBarList, NavButton } from './NavBar.styled';

interface INavBarProps {
  closeMenu: () => void;
}

const NavBar: React.FC<INavBarProps> = ({ closeMenu }) => {
  const handleClick = (id: string) => {
    closeMenu();
    scrollToElementById(id);
  };

  return (
    <nav>
      <NavBarList>
        {navList.map(({ name, id }) => (
          <li key={id}>
            <NavButton onClick={() => handleClick(id)}>
              {name} <Arrow width={16} height={16} />
            </NavButton>
          </li>
        ))}
      </NavBarList>
    </nav>
  );
};

export default NavBar;