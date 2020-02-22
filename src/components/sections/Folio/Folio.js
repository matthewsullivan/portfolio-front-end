import React, {useState} from 'react';

import axios from 'axios';

import AliceCarousel from 'react-alice-carousel';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import IosClose from 'react-ionicons/lib/IosClose';
import ScrollLock from 'react-scrolllock';
import Rodal from 'rodal';

import Scroller from '../../elements/Scroller/Scroller';
import Title from '../../elements/Title/Title';

import './Folio.css';

const studies = [
  {
    image: 'assets/portfolio/burgerdex/burgerdex.jpg',
    name: 'Burgerdex',
    type: 'iOS Application',
  },
  {
    image: 'assets/portfolio/easyAisle/easyAisle.jpg',
    name: 'easyAisle',
    type: 'iOS Application',
  },
  {
    image: 'assets/portfolio/gidme/gidme.jpg',
    name: 'Gidme',
    type: 'iOS Application',
  },
  {
    image: 'assets/portfolio/bonterpolaris/bonterpolaris-dark.jpg',
    name: 'Bonter Polaris',
    type: 'Website / CMS',
  },
  {
    image: 'assets/portfolio/freeliveyoga/freelive.jpg',
    name: 'Free Live Yoga',
    type: 'Website / CMS',
  },
  {
    image: 'assets/portfolio/madxscape/madxscape.jpg',
    name: 'Mad Xscape',
    type: 'iOS Application',
  },
  {
    image: 'assets/portfolio/mortgagealliance/mortgagealliance.jpg',
    name: 'Mortgage Alliance',
    type: 'Website',
  },
  {
    image: 'assets/portfolio/stockgaming/stockgaming.jpg',
    name: 'Stock Gaming',
    type: 'Angular Application',
  },
  {
    image: 'assets/portfolio/tracelogix/tracelogix.jpg',
    name: 'Trace Logix',
    type: 'Inventory System CMS',
  },
  {
    image: 'assets/portfolio/villageinn/villageinn.jpg',
    name: 'Village Inn',
    type: 'Website',
  },
];

export default React.forwardRef(function Folio(props, ref) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [selectedStudy, setSelectedStudy] = useState();

  const carouselOptions = {
    buttonsDisabled: true,
    dotsDisabled: true,
    handleOnDragStart: (e) => e.preventDefault(),
    mouseTrackingEnabled: true,
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
    onClose: () => setModalOpen(!modalOpen),
    visible: modalOpen,
  };

  /**
   * Get Studies
   * @return {JSX}
   */
  const getStudies = () => {
    console.log('got here');
    return studies.map((study, index) => {
      return (
        <div
          className="item"
          data-study={index}
          key={study.name}
          onClick={() => handleStudySelection(index)}
        >
          <img alt="Portfolio Clip" className="item__image" src={study.image} />

          <div className="item__content">
            <h2 className="item__chapter">{`0${index + 1}`}</h2>
            <h2 className="item__title">{study.name}</h2>
            <h3 className="item__subheading">{study.type}</h3>
          </div>
        </div>
      );
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
    let api = 'https://matthewsullivan.media';

    if (process.env.NODE_ENV === 'development') {
      api = 'http://127.0.0.1:4444';
    } else if (process.env.NODE_ENV === 'staging') {
      api = 'https://staging.matthewsullivan.media';
    }

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

      <div className="preview" ref={ref}>
        <Scroller>
          <div className="preview__container">{getStudies()}</div>
        </Scroller>
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
                  <p className="study__summary">{selectedStudy.synopsis}</p>

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
                              key={index}
                            ></span>
                          );
                        })}
                      </div>
                    </nav>
                  </div>
                  <div className="study__information">
                    <h3 className="study__pre-title">{selectedStudy.name}</h3>
                    <h2 className="study__title">Task</h2>
                    <p className="study__summary">
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
                    <p className="study__summary">{selectedStudy.languages}</p>
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
});
