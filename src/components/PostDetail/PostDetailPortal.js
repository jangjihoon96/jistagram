import ReactDom from 'react-dom';

export const PostDetailPortal = ({ children }) => {
  const el = document.getElementById('post-root');

  return ReactDom.createPortal(children, el);
};

// export default PostDetailPortal;
