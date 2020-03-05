import React, {useState, useEffect, useRef} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Add Resize Listener
 * @param {object} ref
 * @param {function} setDynamicHeight
 */
const addResizeListener = (ref, setDynamicHeight) => {
  window.addEventListener('resize', () => {
    setHeight(ref, setDynamicHeight);
  });
};

/**
 * Add Scroll Listener
 * @param {object} ref
 * @param {function} setTranslateX
 * @param {function} setScrolling
 */
const addScrollListener = (ref, setTranslateX, setScrolling) => {
  let timer;

  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop;

    setScrolling(true);
    setTranslateX(offsetTop);

    window.clearTimeout(timer);

    timer = setTimeout(() => setScrolling(false), 100);
  });
};

/**
 * Calculate Height
 * @param {number} objectWidth
 * @return {number}
 */
const calculateHeight = (objectWidth) => {
  const vh = window.innerHeight;
  const vw = window.innerWidth;

  return objectWidth - vw + vh + 32;
};

/**
 * Set Height
 * @param {object} ref
 * @param {function} setDynamicHeight
 */
const setHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;

  const dynamicHeight = calculateHeight(objectWidth);

  setDynamicHeight(dynamicHeight);
};

const Scroller = (props) => {
  const {children} = props;

  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const InnerContainer = styled.div`
    height: 100vh;
    overflow: hidden;
    position: sticky;
    top: 0;
    width: 100%;
  `;

  const TranslateContainer = styled.div.attrs(({translateX}) => ({
    style: {transform: `translate3d(${translateX}px, 0, 0)`},
  }))`
    height: 100%;
    position: absolute;
    will-change: transform;
  `;

  useEffect(() => {
    setHeight(objectRef, setDynamicHeight);

    addResizeListener(objectRef, setDynamicHeight);
    addScrollListener(containerRef, setTranslateX, setScrolling);
  }, []);

  return (
    <div
      style={{
        height: `${dynamicHeight}px`,
        pointerEvents: scrolling ? 'none' : 'auto',
      }}
    >
      <InnerContainer ref={containerRef}>
        <TranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </TranslateContainer>
      </InnerContainer>
    </div>
  );
};

Scroller.propTypes = {
  children: PropTypes.object,
};

export default Scroller;
