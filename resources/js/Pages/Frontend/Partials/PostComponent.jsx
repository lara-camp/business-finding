import React, { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's CSS

function PostComponent({ post }) {
  useEffect(() => {
    const quill = new Quill('#editor', {
      readOnly: true, // Set to true to make the content read-only
      theme: 'snow',
      modules: {
        toolbar: false, // Disable the toolbar completely
      },
    });

    quill.root.innerHTML = post.content;
  }, [post]);

  return <div id="editor" style={{border: "none",
    outline: "none", fontSize: "30px" }}/>;
}

export default PostComponent;
