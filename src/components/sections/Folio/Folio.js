import React, {useEffect, useState} from 'react';

import axios from 'axios';

import Card from '../../elements/Card/Card';
import Scroller from '../../elements/Scroller/Scroller';
import Study from '../../elements/Study/Study';
import Title from '../../elements/Title/Title';

import './Folio.css';

let api = 'https://www.matthewsullivan.media';

if (process.env.NODE_ENV === 'development') {
  api = 'http://127.0.0.1:8080';
} else if (process.env.REACT_APP_ENV === 'staging') {
  api = 'https://www.staging.matthewsullivan.media';
}

export default function Folio() {
  const [selectedStudy, setSelectedStudy] = useState();
  const [studies, setStudies] = useState();
  const [fetchError, setfetchError] = useState();

  useEffect(() => {
    axios
      .get(`${api}/api/v1/studies`)
      .then((res) => {
        if (res.status === 204) {
          setfetchError('Unable to load case studies');
        }

        setStudies(res.data);
      })
      .catch(() => {
        setfetchError('Unable to load case studies');
      });
  }, []);

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
                    onClick={() => setSelectedStudy(study)}
                    key={study.name}
                  >
                    <Card study={study} />
                  </div>
                );
              })}
            </div>
          </Scroller>
        ) : (
          <p>{fetchError}</p>
        )}
      </div>

      <Study study={selectedStudy} />
    </section>
  );
}
