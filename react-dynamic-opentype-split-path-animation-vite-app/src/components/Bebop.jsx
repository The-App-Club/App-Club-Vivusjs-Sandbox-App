import {css} from '@emotion/css';
import {useEffect, useRef, useState} from 'react';
import opentype, {Path, Glyph} from 'opentype.js';
import eduVICWANTBeginner from '../fonts/EduVICWANTBeginner-VariableFont_wght.ttf';
import Vivus from 'vivus';

const Bebop = ({
  tik,
  text = `Banana Fish`,
  magic = 22,
  choicedFont = eduVICWANTBeginner,
}) => {
  const svgDomRef = useRef(null);
  const pathDomRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!tik) {
      return;
    }
    const v = new Vivus(svgDomRef.current, {
      type: 'oneByOne',
      start: 'manual',
      duration: 150,
      forceRender: false,
      animTimingFunction: Vivus.LINEAR,
    });
    v.play();
    return () => {
      v.destroy();
    };
  }, [tik]);

  useEffect(() => {
    (async () => {
      // const text = `Hello, World!`;
      const font = await opentype.load(choicedFont);
      const path = font.getPath(text, 0, 0, magic);
      const {x1, y1, x2, y2} = path.getBoundingBox();
      const x = x1;
      const y = y1;
      const w = x2 - x1;
      const h = y2 - y1;
      const viewbox = `${x} ${y} ${w} ${h}`;
      svgDomRef.current.setAttribute('viewBox', viewbox);
      const glyphPathDataList = path
        .toPathData()
        .split(/(?<=(z|Z))/)
        .filter((item) => {
          return item !== 'z' && item !== 'Z';
        });
      setData(glyphPathDataList);
    })();
  }, [text, magic, choicedFont]);
  return (
    <svg
      ref={svgDomRef}
      className={css`
        display: block;
        width: 300px;
        /* border: 1px solid; */
      `}
    >
      <g>
        {data.map((item, index) => {
          return (
            <path
              key={index}
              fill={`none`}
              stroke={`black`}
              strokeWidth={1}
              d={`${item}`}
            />
          );
        })}
      </g>
    </svg>
  );
};

export {Bebop};
