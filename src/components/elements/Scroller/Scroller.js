import React, {useState, useEffect, useRef} from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Add Scroll Listener
 * @param {object} ref
 * @param {function} setTranslateX
 */
const addScrollListener = (ref, setTranslateX) => {
  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop;

    setTranslateX(offsetTop);
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

Scroller.propTypes = {
  children: PropTypes.object,
};

export default function Scroller(props) {
  const {children} = props;

  const [dynamicHeight, setDynamicHeight] = useState(null);
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

  /**
   * Handle Resize
   */
  const handleResize = () => {
    setHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    setHeight(objectRef, setDynamicHeight);

    window.addEventListener('resize', handleResize);

    addScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div style={{height: `${dynamicHeight}px`}}>
      <InnerContainer ref={containerRef}>
        <TranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </TranslateContainer>
      </InnerContainer>
    </div>
  );
}
