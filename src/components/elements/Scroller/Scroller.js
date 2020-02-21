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

  return objectWidth - vw + vh + 150;
};

/**
 * Handle Height
 * @param {object} ref
 * @param {function} setDynamicHeight
 */
const handleHeight = (ref, setDynamicHeight) => {
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
    overflow-x: hidden;
    position: sticky;
    top: 0;
    width: 100%;
  `;

  const TranslateContainer = styled.div.attrs(({translateX}) => ({
    style: {transform: `translateX(${translateX}px)`},
  }))`
    height: 100%;
    position: absolute;
    will-change: transform;
    -webkit-transform: translate3d(0, 0, 0);
  `;

  /**
   * Handle Resize
   */
  const handleResize = () => {
    handleHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleHeight(objectRef, setDynamicHeight);

    window.addEventListener('resize', handleResize);

    addScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div className="scroller">
      <div className="scroller__outer" style={{height: `${dynamicHeight}px`}}>
        <InnerContainer ref={containerRef}>
          <TranslateContainer translateX={translateX} ref={objectRef}>
            {children}
          </TranslateContainer>
        </InnerContainer>
      </div>
    </div>
  );
}
