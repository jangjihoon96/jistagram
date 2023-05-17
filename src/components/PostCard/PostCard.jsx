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
import { PostDetail } from '@/components/PostDetail/PostDetail';
import { PostDetailPortal } from '@/components/PostDetail/PostDetailPortal';
import { useState } from 'react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

library.add(faCircleUser, faEllipsis, faHeart, faComment, faPaperPlane, faBookmark, faShare);

export const PostCard = ({ userId, alt, desc, id, like, src }) => {
  const [postDetailOpen, setPostDetailOpen] = useState(false);
  const { lockScroll, openScroll } = useBodyScrollLock();
  const HandlerPostDetailOpen = () => {
    lockScroll();
    setPostDetailOpen(true);
  };
  return (
    <>
      <StyledPostCard>
        <StyledTopContents>
          <Link to="/" className="profileContents">
            <span className="profileImage">
              <FontAwesomeIcon icon={faCircleUser} />
            </span>
            <span className="profileId">{userId}</span>
          </Link>
          <span className="lastHour">
            <span aria-label="hidden" className="middot">
              &middot;
            </span>
            10분
          </span>
          <button className="moreButton">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </StyledTopContents>
        <StyledMiddleContents>
          <img src={src} alt={alt} />
        </StyledMiddleContents>
        <StyledButtonContents>
          <ContentButton>
            <span className="a11y-hidden">좋아요</span>
            <FontAwesomeIcon icon={faHeart} />
          </ContentButton>
          <ContentButton onClick={HandlerPostDetailOpen}>
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
        <StyledLikeContents>
          <StyledLikeCount>좋아요 {like}개</StyledLikeCount>
        </StyledLikeContents>
        <StyledUserContents>
          <span className="userId">{userId}</span>
          <span className="comment">{desc}</span>
        </StyledUserContents>
        <StyledCommentContents>
          <StyledCommentCount onClick={HandlerPostDetailOpen}>
            댓글 10개 모두 보기
          </StyledCommentCount>
        </StyledCommentContents>
        <StyledInputContents>
          <textarea placeholder="댓글 달기..." onClick={HandlerPostDetailOpen} readOnly></textarea>
          <button>
            <FontAwesomeIcon icon={faShare} />
          </button>
        </StyledInputContents>
      </StyledPostCard>
      {postDetailOpen && (
        <PostDetailPortal>
          <PostDetail
            setPostDetailOpen={setPostDetailOpen}
            HandlerPostDetailClose
            openScroll={openScroll}
            userId={userId}
            alt={alt}
            desc={desc}
            id={id}
            like={like}
            src={src}
          />
        </PostDetailPortal>
      )}
    </>
  );
};

const StyledPostCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1rem 0 1.5rem 0;
  border-bottom: 1px solid #444444;
`;

const StyledTopContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 3.5rem;
  align-items: center;
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
  .lastHour {
    font-size: 0.875rem;
    color: #a8a8a8;
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

const StyledMiddleContents = styled.div`
  width: 100%;
  max-height: 36.5625rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid #444444;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    max-height: 36.5625rem;
    object-fit: contain;
    vertical-align: middle;
  }
`;

const StyledButtonContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 2.875rem;
  margin-top: 0.375rem;
  margin-left: -0.5rem;
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

const StyledLikeContents = styled.div``;

const StyledLikeCount = styled.button`
  background-color: transparent;
  padding-left: 0;
  border: 0;
  font-weight: 600;
  font-size: 0.875rem;
  color: #ffffff;
  text-align: left;
  cursor: pointer;
`;

const StyledUserContents = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.4;
  .userId {
    font-weight: 600;
  }
  .comment {
    margin-left: 0.5rem;
    word-break: break-all;
  }
`;

const StyledCommentContents = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const StyledCommentCount = styled.button`
  flex-shrink: 1;
  margin-top: 0.5rem;
  background-color: transparent;
  border: 0;
  color: #aaa;
  text-align: left;
  padding: 0;
  cursor: pointer;
`;

const StyledInputContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 0.5rem;
  textarea {
    flex-grow: 1;
    background-color: transparent;
    border: 0;
    padding: 0.25rem 0;
    color: #ffffff;
    height: 1.5rem;
    resize: none;
  }
  textarea::placeholder {
    color: #aaa;
  }
  button {
    background-color: transparent;
    border: 0;
    color: #ffffff;
    margin-left: 8px;
    padding-left: 8px;
    cursor: pointer;
  }
`;
