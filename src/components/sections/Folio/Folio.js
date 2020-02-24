import React, {useEffect, useState} from 'react';

import axios from 'axios';

import AliceCarousel from 'react-alice-carousel';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import IosClose from 'react-ionicons/lib/IosClose';
import ScrollLock from 'react-scrolllock';
import Rodal from 'rodal';

import Card from '../../elements/Card/Card';
import Scroller from '../../elements/Scroller/Scroller';
import Title from '../../elements/Title/Title';

import './Folio.css';

let api = 'https://matthewsullivan.media';

if (process.env.NODE_ENV === 'development') {
  api = 'http://127.0.0.1:4444';
} else if (process.env.NODE_ENV === 'staging') {
  api = 'https://staging.matthewsullivan.media';
}

export default function Folio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState();
  const [studies, setStudies] = useState();

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
      padding: '0',
      top: 'auto',
      width: 'auto',
    },
    onClose: () => {
      setModalOpen(!modalOpen);
    },
    onAnimationEnd: () => {
      setSelectedSlide(0);

      window.dispatchEvent(new Event('resize'));
    },
    visible: modalOpen,
  };

  useEffect(() => {
    fetchStudies();
  }, []);

  /**
   * Fetch Studies
   */
  const fetchStudies = () => {
    axios
      .get(`${api}/api/v1/studies`)
      .then((res) => {
        if (res.status === 204) throw Error('No case studies found.');

        setStudies(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /**
   * Handle Slide Changed
   * @param {object} event
   */
  const handleSlideChanged = (event) => {
    setSelectedSlide(event.slide);
  };

  /**
   * Handle Study Selection
   * @param {number} study
   */
  const handleStudySelection = (study) => {
    console.log('got here');

    axios
      .get(`${api}/api/v1/study/${study}`)
      .then((res) => {
        if (res.status === 204) throw Error('No case study found.');

        setSelectedStudy(res.data);

        setModalOpen(!modalOpen);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section className="folio">
      <Title
        body="Hand picked projects and case studies."
        className="title"
        chapter="03"
        title="Works"
      />

      <div className="preview">
        {studies ? (
          <Scroller>
            <div className="preview__container">
              {studies.map((study, index) => {
                return (
                  <div
                    className="preview__item"
                    onClick={() => handleStudySelection(index)}
                    key={study.name}
                  >
                    <Card study={study} />
                  </div>
                );
              })}
            </div>
          </Scroller>
        ) : (
          <br />
        )}
      </div>

      {selectedStudy ? (
        <Rodal {...modalOptions}>
          <ScrollLock isActive={modalOpen}>
            <div className="study">
              <div
                className="study__close"
                onClick={() => setModalOpen(!modalOpen)}
              >
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
                  <p className="study__synopsis">{selectedStudy.synopsis}</p>

                  {selectedStudy.link ? (
                    <a
                      className="study__link"
                      href={selectedStudy.link.path}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {selectedStudy.link.title}{' '}
                      <IosArrowRoundForward fontSize="24" />
                    </a>
                  ) : (
                    <br />
                  )}
                </header>
                <div className="study__content">
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
                  <div className="study__information">
                    <h3 className="study__pre-title">{selectedStudy.name}</h3>
                    <h2 className="study__title">Task</h2>
                    <p className="study__synopsis">
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
                    <p className="study__synopsis">{selectedStudy.languages}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollLock>
        </Rodal>
      ) : (
        ''
      )}
    </section>
  );
}
