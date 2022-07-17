import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {useEffect, useRef, useState} from 'react';
import '@fontsource/inter';
import './styles/index.scss';
import {Button} from '@mui/material';
import {Bebop} from './components/Bebop';
import eduVICWANTBeginner from './fonts/EduVICWANTBeginner-VariableFont_wght.ttf';
import robotoBlack from './fonts/Roboto-Black.ttf';
import oleoScript from './fonts/OleoScript-Regular.ttf';
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
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          min-height: 100vh;
          width: 100%;
          max-width: 40rem;
          margin: 0 auto;
        `}
      >
        <h2>This is sample</h2>
        <hr
          className={css`
            width: 100%;
            height: 1rem;
            background-image: repeating-linear-gradient(
              45deg,
              #0078aa,
              #0078aa 10px,
              #3ab4f2 10px,
              #3ab4f2 20px
            );
          `}
        />
        <Bebop
          tik={tik}
          text={`Hello, World!`}
          magic={22}
          choicedFont={eduVICWANTBeginner}
        />
        <Bebop
          tik={tik}
          text={`Cowboy Bebop`}
          magic={72}
          choicedFont={robotoBlack}
        />
        <Bebop
          tik={tik}
          text={`Banana Fish`}
          magic={32}
          choicedFont={oleoScript}
        />
        <hr
          className={css`
            width: 100%;
            height: 1rem;
            background-image: repeating-linear-gradient(
              45deg,
              #ca4e79,
              #ca4e79 10px,
              #ffc18e 10px,
              #ffc18e 20px
            );
          `}
        />
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
