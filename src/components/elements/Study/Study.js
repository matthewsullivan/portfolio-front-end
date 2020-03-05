import React, {useEffect, useState} from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import IosClose from 'react-ionicons/lib/IosClose';
import ScrollLock from 'react-scrolllock';
import BarLoader from 'react-spinners/BarLoader';
import Rodal from 'rodal';

import api from '../../../api/api';

import './Study.css';

const Study = (props) => {
  const {setShowStudy, study} = props;

  const [loading, setLoading] = useState(true);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const carouselOptions = {
    autoPlay: true,
    autoPlayInterval: 4000,
    buttonsDisabled: true,
    disableAutoPlayOnAction: true,
    dotsDisabled: true,
    handleOnDragStart: (e) => e.preventDefault(),
    mouseTrackingEnabled: true,
    stopAutoPlayOnHover: true,
  };

  const modalOptions = {
    animation: 'door',
    customStyles: {
      borderRadius: 0,
      bottom: 'auto',
      height: '100%',
      overflow: 'scroll',
      padding: 0,
      top: 'auto',
      width: 'auto',
    },
    onClose: () => {},
    onAnimationEnd: () => {
      setLoading(false);
      setSelectedSlide(0);

      window.dispatchEvent(new Event('resize'));
    },
    visible: modalOpen,
  };

  useEffect(() => {
    if (!study) return;

    setLoading(true);

    axios.get(`${api}/api/v1/study/${study.id}`).then((res) => {
      setSelectedStudy(res.data);

      setModalOpen(true);
    });
  }, [study]);

  /**
   * Handle Slide Changed
   * @param {object} event
   */
  const handleSlideChanged = (event) => {
    setSelectedSlide(event.slide);
  };

  /**
   * Handle Study Close
   */
  const handleStudyClose = () => {
    setModalOpen(!modalOpen);
    setShowStudy(false);
  };

  return (
    <>
      {selectedStudy && (
        <Rodal {...modalOptions}>
          <ScrollLock isActive={modalOpen}>
            <div className="study">
              <div className="study__close" onClick={() => handleStudyClose()}>
                <IosClose color="#f9f9f9" fontSize="32" />
              </div>

              <div className="study__container">
                <header className="study__header">
                  <img
                    alt="Study Logo"
                    className="study__image"
                    src={selectedStudy.media.logo}
                  />
                  <h3 className="study__pre-title">{selectedStudy.platform}</h3>
                  <h2 className="study__title">{selectedStudy.project}</h2>
                  <div className="study__line" />
                  <p className="study__synopsis">{study.synopsis}</p>

                  {selectedStudy.link && (
                    <a
                      className="study__link"
                      href={selectedStudy.link.path}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {selectedStudy.link.title}{' '}
                      <IosArrowRoundForward fontSize="24" />
                    </a>
                  )}
                </header>

                <div className="study__content">
                  {loading ? (
                    <BarLoader
                      css="margin: auto; width: 136px;"
                      color={'#2ecc71'}
                      loading={loading}
                    />
                  ) : (
                    <div className="study__showcase">
                      <AliceCarousel
                        className="study-carousel"
                        onSlideChanged={handleSlideChanged}
                        {...carouselOptions}
                      >
                        {selectedStudy.media.images.map((media, index) => {
                          return (
                            <div
                              className="study-carousel__slide"
                              key={index}
                              onDragStart={carouselOptions.handleOnDragStart}
                            >
                              <img
                                alt={media.alt}
                                className="study-carousel__image"
                                src={media.path}
                              />
                            </div>
                          );
                        })}
                      </AliceCarousel>

                      <nav className="study-controls">
                        <div className="study-controls__dots">
                          {selectedStudy.media.images.map((media, index) => {
                            return (
                              <span
                                className={`study-controls__dot ${
                                  selectedSlide === index
                                    ? 'study-controls__dot--selected'
                                    : ''
                                }`}
                                key={`${media}-${index}`}
                              ></span>
                            );
                          })}
                        </div>
                      </nav>
                    </div>
                  )}

                  <div className="study__information">
                    <h3 className="study__pre-title">{selectedStudy.name}</h3>
                    <h2 className="study__title">Task</h2>
                    <p className="study__body">
                      {selectedStudy.description
                        .split('\n')
                        .map((item, key) => {
                          return (
                            <span key={key}>
                              {item}
                              <br />
                            </span>
                          );
                        })}
                    </p>

                    <h2 className="study__title">Languages</h2>
                    <p className="study__body">{selectedStudy.languages}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollLock>
        </Rodal>
      )}
    </>
  );
};

Study.propTypes = {
  setShowStudy: PropTypes.func,
  study: PropTypes.object,
};

export default Study;
