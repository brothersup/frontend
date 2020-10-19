import React, { useEffect, useState, useContext } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FormGroup, Button, FormControl } from 'react-bootstrap';
import { AuthContext } from '../src/utils/authProvider';
import Layout from '../components/layout';

const QuillEditor = dynamic(import('react-quill'), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['code-block'],
    ['clean'],
  ],
};

const dataURItoBlob = dataURI => {
  const byteString = atob(dataURI.split(',')[1]);

  const mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0];

  const ab = new ArrayBuffer(byteString.length);

  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: mimeString });
  return blob;
};

const WriteForm = () => {
  const [writable, setWritable] = useState(null);
  const [content, setContent] = useState('');
  const { token, isValid } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {});

  useEffect(() => {
    if (token && isValid) {
      setWritable(true);
    } else {
      setWritable(false);
    }

    if (writable !== null && writable === false) {
      router.push('/');
    }
  }, [token, isValid, writable]);

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <Layout>
      <div className="d-flex flex-column align-items-center w-100 h-100">
        {writable && (
          <div style={{ maxWidth: 550, height: '100%' }}>
            <FormGroup>
              <FormControl type="text" placeholder="제목" />
            </FormGroup>
            <QuillEditor
              value={content}
              onChange={value => {
                setContent(value);
              }}
              modules={modules}
              placeholder="내용"
              className="d-flex flex-column mb-3"
              style={{ height: '55%' }}
            />
            <div className="w-100 d-flex justify-content-between">
              <Button>작성</Button>
              <Button>취소</Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WriteForm;
