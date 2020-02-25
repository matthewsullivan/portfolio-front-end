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
                    onClick={() => setSelectedStudy(index)}
                    key={study.name}
                  >
                    <Card study={study} />
                  </div>
                );
              })}
            </div>
          </Scroller>
        ) : (
          <p>Unable to load media</p>
        )}
      </div>

      {selectedStudy >= 0 ? (
        <Study resetSelectedStudy={setSelectedStudy} study={selectedStudy} />
      ) : (
        ''
      )}
    </section>
  );
}
