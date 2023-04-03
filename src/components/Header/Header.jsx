import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCompass,
  faSquarePlus,
  faPaperPlane,
  faCircleUser,
} from '@fortawesome/free-regular-svg-icons';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/assets/icons/logo.svg';

library.add(faCompass, faSquarePlus, faPaperPlane, faCircleUser, faHouse, faMagnifyingGlass);

export const Header = () => {
  const navData = [
    { id: 1, icon: faHouse, link: '/', title: '홈' },
    { id: 2, icon: faMagnifyingGlass, link: '/', title: '검색' },
    { id: 3, icon: faCompass, link: '/', title: '탐색 탭' },
    { id: 4, icon: faPaperPlane, link: '/', title: '메시지' },
    { id: 5, icon: faSquarePlus, link: '/', title: '만들기' },
    { id: 6, icon: faCircleUser, link: '/', title: '프로필' },
  ];

  return (
    <StyledHeader>
      <h1>
        <Link to="/">
          <img src={Logo} alt="Jistagram" height="40px" />
        </Link>
      </h1>
      <StyledNav>
        <ul>
          {navData.map((list) => {
            return (
              <li key={list.id}>
                <Link to={list.link}>
                  <FontAwesomeIcon icon={list.icon} />
                  <span>{list.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  padding: 0.625rem;
  height: 100vh;
  border-right: 0.0625rem solid #444;
  h1 {
    padding: 1.75rem 1rem;
  }
`;

const StyledNav = styled.nav`
  li + li {
    margin-top: 0.625rem;
  }
  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 1.875rem;
  }
  a:hover {
    background-color: #333;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  span {
    margin-left: 1.25rem;
  }
`;
