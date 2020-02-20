import React, {useState, useEffect, useRef} from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const HorizontalTranslateContainer = styled.div.attrs(({translateX}) => ({
  style: {transform: `translateX(${translateX}px)`},
}))`
  height: 100%;
  position: absolute;
  will-change: transform;
`;

const StickyInnerContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  width: 100%;
`;

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

const TallOuterContainer = styled.div.attrs(({dynamicHeight}) => ({
  style: {height: `${dynamicHeight}px`},
}))`
  position: relative;
  width: 100%;
`;

const calcDynamicHeight = (objectWidth) => {
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;

  const dynamicHeight = calcDynamicHeight(objectWidth);

  setDynamicHeight(dynamicHeight);
};

Scroller.propTypes = {
  children: PropTypes.string,
};

export default function Scroller({children}) {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);

    window.addEventListener('resize', resizeHandler);

    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
}
