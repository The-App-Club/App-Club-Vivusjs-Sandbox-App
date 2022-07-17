import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {useEffect, useRef, useState} from 'react';
import '@fontsource/inter';
import './styles/index.scss';
import opentype, {Path, Glyph} from 'opentype.js';
import Vivus from 'vivus';
import {Button} from '@mui/material';
import {Bebop} from './components/Bebop';
const App = () => {
  const [tik, setTik] = useState(null);

  const handleDo = (e) => {
    setTik(new Date());
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleDo}
        className={css`
          position: fixed;
          top: 3rem;
          left: 3rem;
        `}
      >
        Do
      </Button>
      <Bebop tik={tik} />
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
