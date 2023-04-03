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

library.add(faCircleUser, faEllipsis, faHeart, faComment, faPaperPlane, faBookmark, faShare);

export const PostCard = ({ children }) => {
  return (
    <StyledPostCard>
      <StyledTopContents>
        <Link to="/" className="profileContents">
          <span className="profileImage">
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <span className="profileId">jihooon2</span>
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
        <img
          src="http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
          alt=""
        />
      </StyledMiddleContents>
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
      <StyledLikeContents>
        <StyledLikeCount>좋아요 0개</StyledLikeCount>
      </StyledLikeContents>
      <StyledUserContents>
        <span className="userId">Jihooon2</span>
        <span className="comment">
          2023.04.03 귀여운 우리 집 갱얼쥐~ 좋아요 한번씩 누르고 가요😄
        </span>
      </StyledUserContents>
      <StyledCommentContents>
        <StyledCommentCount>댓글 10개 모두 보기</StyledCommentCount>
      </StyledCommentContents>
      <StyledInputContents>
        {/* <input type="text" placeholder="댓글 달기..." /> */}
        <textarea placeholder="댓글 달기..."></textarea>
        <button>
          <FontAwesomeIcon icon={faShare} />
        </button>
      </StyledInputContents>
    </StyledPostCard>
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
    /* white-space: pre-wrap; */
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