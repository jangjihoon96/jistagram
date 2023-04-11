import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleUser,
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

library.add(faCircleUser, faEllipsis, faHeart, faComment, faPaperPlane, faBookmark, faShare);

export const PostDetail = ({ userId, alt, desc, id, like, src, setPostDetailOpen }) => {
  const [hidePost, setHidePost] = useState(true);
  const ClosePostHandler = (e) => {
    setHidePost(!hidePost);
  };
  const HandlerPostDetailClose = () => {
    setPostDetailOpen(false);
  };
  // useEffect(() => {}, []);
  return (
    <>
      <StyledPostDetail
        aria-hidden="true"
        aria-label="배경"
        onClick={HandlerPostDetailClose}></StyledPostDetail>
      <StyledPostDetailBox>
        <ImageContents></ImageContents>
        <CommentsContents></CommentsContents>
      </StyledPostDetailBox>
    </>
  );
};

const StyledPostDetail = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledPostDetailBox = styled.div`
  /* max-width: 80%;
  height: 90vh; */
  width: 70%;
  height: 90%;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 102;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: row nowrap;
`;
const ImageContents = styled.div`
  width: calc(100% - 28.75rem);
  height: 100%;
  background-color: blue;
`;
const CommentsContents = styled.div`
  width: 28.75rem;
  height: 100%;
  background-color: red;
`;
