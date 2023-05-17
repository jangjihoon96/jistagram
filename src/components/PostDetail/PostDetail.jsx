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

export const PostDetail = ({ userId, alt, desc, id, like, src, setPostDetailOpen, openScroll }) => {
  const HandlerPostDetailClose = () => {
    openScroll();
    setPostDetailOpen(false);
  };
  return (
    <>
      <StyledPostDetail
        aria-hidden="true"
        aria-label="배경"
        onClick={HandlerPostDetailClose}></StyledPostDetail>
      <StyledPostDetailBox>
        <ImageContents>
          <img src={src} alt={alt} />
        </ImageContents>
        <CommentsContents>
          <StyledTopContents>
            <Link to="/" className="profileContents">
              <span className="profileImage">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <span className="profileId">{userId}</span>
            </Link>
            <button className="moreButton">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </StyledTopContents>
          <CommentsContainer>
            <StyledUserContents>
              <span className="profileImage">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <span className="userId">{userId}</span>
              <span className="comment">{desc}</span>
            </StyledUserContents>
          </CommentsContainer>
          <StyledFooterContainer>
            <StyledButtonContents>
              <ContentButton>
                <span className="a11y-hidden">좋아요</span>
                <FontAwesomeIcon icon={faHeart} />
              </ContentButton>
              <ContentButton>
                <span className="a11y-hidden">댓글</span>
                <FontAwesomeIcon icon={faComment} />
              </ContentButton>
              <ContentButton>
                <span className="a11y-hidden">메시지</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </ContentButton>
              <ContentButton>
                <span className="a11y-hidden">북마크</span>
                <FontAwesomeIcon icon={faBookmark} />
              </ContentButton>
            </StyledButtonContents>
            <LikeCount>
              {userId}님의 게시물을 {like}명이 좋아합니다.
            </LikeCount>
            <AddComment>
              <textarea placeholder="댓글 달기..."></textarea>
              <button>게시</button>
            </AddComment>
          </StyledFooterContainer>
        </CommentsContents>
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
  width: 70%;
  height: 90%;
  background-color: #191919;
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
  border-right: 0.0625rem solid #444;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const CommentsContents = styled.div`
  width: 28.75rem;
  height: 100%;
`;
const StyledTopContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 3.5rem;
  align-items: center;
  border-bottom: 0.0625rem solid #444;
  padding: 0 1rem;
  .profileContents {
    display: flex;
    align-items: center;
  }
  .profileImage {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    svg {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .profileId {
    margin-left: 0.75rem;
    font-size: 0.875rem;
  }
  .middot {
    margin: 0 0.25rem;
  }
  .moreButton {
    margin-left: auto;
    background-color: transparent;
    border: 0;
    font-size: 1.125rem;
    color: #ffffff;
    cursor: pointer;
  }
`;
const StyledUserContents = styled.div`
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.4;
  display: flex;
  flex-flow: row nowrap;
  min-height: 3.5rem;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.625rem;
  .profileImage {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    flex-shrink: 0;
    svg {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .userId {
    margin-left: 0.75rem;
    font-size: 0.875rem;
  }
  .comment {
    margin-left: 0.5rem;
    word-break: break-all;
  }
`;
const CommentsContainer = styled.div`
  width: 100%;
  height: calc(100% - 13.5rem);
  overflow: auto;
`;
const StyledFooterContainer = styled.div`
  width: 100%;
  height: 10rem;
  border-top: 0.0625rem solid #444;
`;
const StyledButtonContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 2.875rem;
  margin-top: 0.375rem;
  margin-left: -0.5rem;
  padding: 0 1rem;
`;
const ContentButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: 0;
  color: #ffffff;
  cursor: pointer;
  &:hover svg {
    color: #aaa;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:last-child {
    margin-left: auto;
    margin-right: -1rem;
  }
`;
const LikeCount = styled.div`
  padding: 0 1rem;
  font-size: 0.875rem;
`;
const AddComment = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 1rem;
  padding: 0 1rem;
  textarea {
    flex-grow: 1;
    height: 3.75rem;
    resize: none;
    background-color: transparent;
    border: 1px solid #444;
    border-right: 0;
    border-radius: 0;
    padding: 0.625rem;
    color: #ffffff;
  }
  button {
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 0;
    border: 0;
    cursor: pointer;
  }
`;
