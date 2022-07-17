import {css, cx} from '@emotion/css';
import {useEffect, useRef, useState} from 'react';
import Vivus from 'vivus';
import bg from '../assets/bg.png';
import logo from '../assets/logo.svg';
const Bebop = ({tik}) => {
  const svgDomRef = useRef(null);
  const animationPathDomRef = useRef(null);
  const maskImageDomRef = useRef(null);

  useEffect(() => {
    if (!tik) {
      return;
    }
    maskImageDomRef.current.style.opacity = 0;
    animationPathDomRef.current.style.opacity = 1;
    const v = new Vivus(
      svgDomRef.current,
      {
        type: 'oneByOne',
        start: 'manual',
        duration: 150,
        forceRender: false,
        animTimingFunction: Vivus.LINEAR,
      },
      function (instance) {
        maskImageDomRef.current.style.opacity = 1;
        // animationPathDomRef.current.style.opacity = 0;
      }
    );
    v.play();
    return () => {
      v.destroy();
    };
  }, [tik]);

  return (
    <svg
      ref={svgDomRef}
      viewBox={`0 0 360 220`}
      width="360"
      height="220"
      className={css`
        border: 1px solid red;
        image {
          overflow: hidden;
        }
      `}
    >
      <g ref={animationPathDomRef}
      transform={`translate(0,0)`}
      className={cx(
        css`
          transition: opacity 0.4s ease-in-out;
          opacity: 0;
        `,
        `animation-path`
      )}
      >
        <path
          d="M 87.644 171.863 C 80.678 171.863 71.856 170.772 61.179 168.584 C 54.454 170.12 48.188 170.889 42.389 170.889 C 36.588 170.889 33.247 170.736 32.358 170.429 C 33.247 163.868 37.071 147.708 43.838 121.944 C 50.606 96.185 53.99 80.021 53.99 73.46 C 53.99 72.164 53.167 70.421 51.512 68.233 C 49.82 66.049 48.129 64.184 46.436 62.646 L 43.959 60.34 L 44.504 57.88 C 61.42 54.943 79.609 53.472 99.064 53.472 C 109.741 53.472 118.544 55.624 125.469 59.93 C 132.356 64.271 135.801 70.319 135.801 78.072 C 135.801 93.038 125.028 103.427 103.475 109.234 C 112.139 110.126 119.39 112.894 125.227 117.537 C 131.111 122.185 134.049 128.709 134.049 137.115 C 134.049 147.401 129.662 155.77 120.877 162.228 C 112.139 168.655 101.058 171.863 87.644 171.863 Z M 84.14 113.641 C 80.557 113.641 77.336 113.918 74.472 114.462 C 68.956 135.239 65.408 149.722 63.838 157.923 C 67.065 159.804 72.14 160.741 79.064 160.741 C 85.952 160.741 91.838 158.42 96.708 153.771 C 101.627 149.128 104.079 142.43 104.079 133.68 C 104.079 120.324 97.433 113.641 84.14 113.641 Z M 95.015 63.62 C 90.103 63.62 87.203 64.015 86.314 64.798 C 84.503 74.639 81.523 87.539 77.373 103.493 C 82.532 103.493 86.157 103.222 88.249 102.674 C 90.302 102.13 92.139 101.413 93.747 100.52 C 95.361 99.67 97.191 98.302 99.245 96.421 C 103.759 92.393 106.013 85.915 106.013 76.996 C 106.013 68.079 102.351 63.62 95.015 63.62 Z"
          fill="none"
          stroke="black"
          strokeWidth={4}
        />
      </g>
      <defs>
        <mask id="mask-path">
          <path
            d="M 87.644 171.863 C 80.678 171.863 71.856 170.772 61.179 168.584 C 54.454 170.12 48.188 170.889 42.389 170.889 C 36.588 170.889 33.247 170.736 32.358 170.429 C 33.247 163.868 37.071 147.708 43.838 121.944 C 50.606 96.185 53.99 80.021 53.99 73.46 C 53.99 72.164 53.167 70.421 51.512 68.233 C 49.82 66.049 48.129 64.184 46.436 62.646 L 43.959 60.34 L 44.504 57.88 C 61.42 54.943 79.609 53.472 99.064 53.472 C 109.741 53.472 118.544 55.624 125.469 59.93 C 132.356 64.271 135.801 70.319 135.801 78.072 C 135.801 93.038 125.028 103.427 103.475 109.234 C 112.139 110.126 119.39 112.894 125.227 117.537 C 131.111 122.185 134.049 128.709 134.049 137.115 C 134.049 147.401 129.662 155.77 120.877 162.228 C 112.139 168.655 101.058 171.863 87.644 171.863 Z M 84.14 113.641 C 80.557 113.641 77.336 113.918 74.472 114.462 C 68.956 135.239 65.408 149.722 63.838 157.923 C 67.065 159.804 72.14 160.741 79.064 160.741 C 85.952 160.741 91.838 158.42 96.708 153.771 C 101.627 149.128 104.079 142.43 104.079 133.68 C 104.079 120.324 97.433 113.641 84.14 113.641 Z M 95.015 63.62 C 90.103 63.62 87.203 64.015 86.314 64.798 C 84.503 74.639 81.523 87.539 77.373 103.493 C 82.532 103.493 86.157 103.222 88.249 102.674 C 90.302 102.13 92.139 101.413 93.747 100.52 C 95.361 99.67 97.191 98.302 99.245 96.421 C 103.759 92.393 106.013 85.915 106.013 76.996 C 106.013 68.079 102.351 63.62 95.015 63.62 Z"
            fill="#fff"
          />
        </mask>
      </defs>
      <g
        ref={maskImageDomRef}
        transform={`translate(0,0)`}
        className={cx(
          css`
            transition: opacity 0.4s ease-in-out;
            opacity: 0;
          `,
          `mask-image`
        )}
      >
        <image href={`${bg}`} width={`100%`} mask="url(#mask-path)"></image>
      </g>
    </svg>
  );
};

export {Bebop};