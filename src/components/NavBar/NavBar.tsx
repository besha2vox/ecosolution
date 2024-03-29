import React from 'react';

import { navList } from '../../utils/data/navList';
import { scrollToElementById } from '../../utils/scrollToElementById';
import { TSectionId } from '../../types';

import { ReactComponent as Arrow } from '../../assets/images/icons/arrow.svg';
import { NavBarList, NavButton } from './NavBar.styled';

interface INavBarProps {
  closeMenu: () => void;
  sectionId: TSectionId | '';
}

const NavBar: React.FC<INavBarProps> = ({ closeMenu, sectionId }) => {
  const handleClick = (id: TSectionId) => {
    closeMenu();
    scrollToElementById(id);
  };

  return (
    <nav>
      <NavBarList>
        {navList.map(({ name, id }) => (
          <li key={id}>
            <NavButton
              className={sectionId === id ? 'current' : ''}
              onClick={() => handleClick(id)}
            >
              {name} <Arrow width={16} height={16} />
            </NavButton>
          </li>
        ))}
      </NavBarList>
    </nav>
  );
};

export default NavBar;
