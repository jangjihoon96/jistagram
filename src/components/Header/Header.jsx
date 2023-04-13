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
import {
  faHouse,
  faMagnifyingGlass,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '@/assets/icons/logo.svg';
import { PostDetail } from '@/components/PostDetail/PostDetail';
import { PostDetailPortal } from '@/components/PostDetail/PostDetailPortal';
import { useState } from 'react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

library.add(
  faCompass,
  faSquarePlus,
  faPaperPlane,
  faCircleUser,
  faHouse,
  faMagnifyingGlass,
  faArrowRightFromBracket
);

export const Header = () => {
  // const [postDetailOpen, setPostDetailOpen] = useState(false);
  // const { lockScroll, openScroll } = useBodyScrollLock();
  // const HandlerPostDetailOpen = () => {
  //   lockScroll();
  //   setPostDetailOpen(true);
  // };
  const navData = [
    { id: 1, icon: faHouse, link: '/', title: '홈', onClick: null },
    { id: 2, icon: faMagnifyingGlass, link: '/', title: '검색', onClick: null },
    { id: 3, icon: faCompass, link: '/', title: '탐색 탭', onClick: null },
    { id: 4, icon: faPaperPlane, link: '/', title: '메시지', onClick: null },
    { id: 5, icon: faSquarePlus, link: '/', title: '만들기', onClick: null },
    { id: 6, icon: faCircleUser, link: '/', title: '프로필', onClick: null },
  ];

  return (
    <>
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
                  <button onClick={list.onClick}>
                    <FontAwesomeIcon icon={list.icon} />
                    <span>{list.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </StyledNav>
        <BottomContainer>
          <LogOutButton>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span>로그아웃</span>
          </LogOutButton>
        </BottomContainer>
      </StyledHeader>
      {/* {postDetailOpen && (
        <PostDetailPortal>
          <PostDetail
            setPostDetailOpen={setPostDetailOpen}
            HandlerPostDetailClose
            openScroll={openScroll}
          />
        </PostDetailPortal>
      )} */}
    </>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  padding: 0.625rem;
  height: 100vh;
  background-color: #191919;
  border-right: 0.0625rem solid #444;
  z-index: 101;
  h1 {
    padding: 1.75rem 1rem;
  }
`;

const StyledNav = styled.nav`
  li + li {
    margin-top: 0.625rem;
  }
  button {
    color: #ffffff;
    background-color: transparent;
    border: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 1.875rem;
    font-size: 0.875rem;
    cursor: pointer;
  }
  button:hover {
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

const BottomContainer = styled.div`
  background-color: #191919;
  padding-bottom: 20px;
  position: absolute;
  bottom: 0;
`;

const LogOutButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: transparent;
  border: 0;
  font-size: 0.875rem;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  span {
    margin-left: 1.25rem;
  }
`;
