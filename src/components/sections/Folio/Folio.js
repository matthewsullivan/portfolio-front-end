import React, {useEffect, useState} from 'react';

import axios from 'axios';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import MdUmbrella from 'react-ionicons/lib/MdUmbrella';

import api from '../../../api/api';
import Card from '../../elements/Card/Card';
import Scroller from '../../elements/Scroller/Scroller';
import Study from '../../elements/Study/Study';
import Title from '../../elements/Title/Title';

import './Folio.css';

export default function Folio() {
  const [fetchError, setfetchError] = useState();
  const [selectedStudy, setSelectedStudy] = useState();
  const [showStudy, setShowStudy] = useState();
  const [studies, setStudies] = useState();

  useEffect(() => {
    axios
      .get(`${api}/api/v1/studies`)
      .then((res) => {
        if (res.status === 204) {
          setfetchError('Unable to load case studies');

          return;
        }

        setStudies(res.data);
      })
      .catch(() => {
        setfetchError('Unable to load case studies');
      });
  }, []);

  /**
   * Handle Study Selection
   * @param {object} study
   */
  const handleStudySelection = (study) => {
    setSelectedStudy(study);
    setShowStudy(true);
  };

  return (
    <section className="folio">
      <Title
        body="Hand picked projects and case studies."
        chapter="03"
        className="title"
        title="Works"
      />

      <div className="preview">
        {studies ? (
          <Scroller>
            <div className="preview__container">
              {studies.map((study) => {
                return (
                  <div
                    className="preview__item"
                    onClick={() => handleStudySelection(study)}
                    key={study.name}
                  >
                    <Card study={study} />
                  </div>
                );
              })}
            </div>
          </Scroller>
        ) : (
          <div className="error">
            <MdUmbrella color="#2ecc71" fontSize="48" shake={true} />

            <h1 className="error__title">{fetchError}</h1>
            <p className="error__text">
              Until this is fixed, feel free to checkout out:
            </p>
            <div className="error__links">
              <a
                href="https://www.linkedin.com/in/matthew-sullivan/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LogoLinkedin color="#070a21" fontSize="24" />
              </a>
              <a
                href="https://github.com/matthewsullivan/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LogoGithub color="#070a21" fontSize="24" />
              </a>
            </div>
          </div>
        )}
      </div>

      {showStudy && <Study setShowStudy={setShowStudy} study={selectedStudy} />}
    </section>
  );
}
