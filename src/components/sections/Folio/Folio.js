import React, {useState} from 'react';

import AliceCarousel from 'react-alice-carousel';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import IosClose from 'react-ionicons/lib/IosClose';
import Rodal from 'rodal';

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

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
  const [selected, setSelected] = useState(0);

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
    onClose: () => handleModalToggle(),
    visible: modalOpen,
  };

  /**
   * Get Studies
   * @return {JSX}
   */
  const getStudies = () => {
    return studies.map((study, index) => {
      return (
        <div className="item" key={study.name}>
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
   * Handle Modal Toggle
   */
  const handleModalToggle = () => {
    !modalOpen ? disableBodyScroll(Rodal) : enableBodyScroll(Rodal);

    setModalOpen(!modalOpen);
  };

  /**
   * Handle Slide Changed
   * @param {object} event
   */
  const handleSlideChanged = (event) => {
    setSelected(event.slide);
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
          <div
            className="preview__container"
            onClick={() => handleModalToggle()}
          >
            {getStudies()}
          </div>
        </Scroller>
      </div>

      <Rodal {...modalOptions}>
        <div className="study">
          <div
            className="study__close"
            onClick={() => handleModalToggle(!modalOpen)}
          >
            <IosClose color="#f9f9f9" fontSize="32" />
          </div>
          <div className="study__container">
            <header className="study__header">
              <img
                alt="Study Logo"
                className="study__image"
                src="/assets/portfolio/bonterpolaris/logo.png"
              />
              <h3 className="study__pre-title">Web</h3>
              <h2 className="study__title">Design/Development</h2>
              <div className="study__line" />
              <p className="study__summary">
                Located in Marmora, Ontario, Bonter Marine services customers
                throughout the surrounding area. They focus on new and used
                vehicle sales, ongoing maintenance of customer’s vehicles and
                parts.
              </p>

              <a
                className="study__link"
                href="https://matthewsullivan.media"
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit Live Site <IosArrowRoundForward fontSize="24" />
              </a>
            </header>
            <div className="study__content">
              <div className="study__showcase">
                <AliceCarousel
                  className="study-carousel"
                  onSlideChanged={handleSlideChanged}
                  ref={(el) => (carousel = el)}
                  {...carouselOptions}
                >
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/01.png"
                    />
                  </div>

                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/02.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/03.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/04.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/05.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/06.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/07.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/08.png"
                    />
                  </div>
                  <div
                    className="study-carousel__slide"
                    onDragStart={carouselOptions.handleOnDragStart}
                  >
                    <img
                      alt="Carousel Slide Forest Background"
                      className="study-carousel__image"
                      src="assets/portfolio/bonterpolaris/images/09.png"
                    />
                  </div>
                </AliceCarousel>

                <nav className="study-controls">
                  <div className="study-controls__dots">
                    <span
                      className={`study-controls__dot ${
                        selected === 0 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 1 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 3 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 4 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 5 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 6 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 7 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 8 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                    <span
                      className={`study-controls__dot ${
                        selected === 9 ? 'study-controls__dot--selected' : ''
                      }`}
                    ></span>
                  </div>
                </nav>
              </div>
              <div className="study__information">
                <h3 className="study__pre-title">Bonter Polaris</h3>
                <h2 className="study__title">Task</h2>
                <p className="study__summary">
                  Design and develop a new website to add and manage vehicle
                  inventory.
                  <br /> <br /> A custom CMS was built for the staff at Bonter
                  Polaris to manage, upload, and archive inventory. A custom API
                  was built specifically for the CMS and scalability.
                  Multi-image uploading and record management were high priority
                  items built into the CMS. <br />
                  <br />
                  The front-end design is built with simplicity and
                  user-experience in mind. Customers may view inventory with
                  multiple filter controls, view featured items, view similar
                  items based on the current inventory being viewed as well as
                  see current deals.
                </p>

                <h2 className="study__title">Languages</h2>
                <p className="study__summary">
                  Built using HTML5/CSS3, jQuery, AJAX, JSON, PHP(PDO), and
                  MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Rodal>
    </section>
  );
});
