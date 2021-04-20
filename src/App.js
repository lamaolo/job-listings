/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';

import './static/css/App.css';
const data = require('./data.json');

function App() {
  const [filters, setFilters] = useState([]);
  const [jobsData, setJobsData] = useState(data);

  const handleSetFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  useEffect(() => {
    if (filters.length) {
      const filteredJobs = data
        .map((job) => {
          // Todos los tags a filtrar por cada trabajo
          const tags = [job.role, job.level, ...job.languages, ...job.tools];

          // Comprobar que cada uno de los jobs mostrados tenga todos los tags que hay en los filtros
          if (filters.every((filter) => tags.includes(filter))) return job;
          else return null;
        })
        .filter(Boolean); // Elimina los elementos nulos del array

      setJobsData(filteredJobs);
    } else {
      // Si no hay ningún filtro, muestro la información inicial
      setJobsData(data);
    }
  }, [filters]);

  const handleRemoveFilter = (filter) => {
    setFilters(filters.filter((existentFilters) => existentFilters !== filter));
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <Header />
      {filters.length ? (
        <section className="filters-container">
          <div className="filters">
            {filters.map((filter) => (
              <div className="filter">
                <p>{filter}</p>
                <button onClick={() => handleRemoveFilter(filter)}>x</button>
              </div>
            ))}
          </div>
          <button onClick={handleClearFilters} className="clear-filters">
            Clear
          </button>
        </section>
      ) : null}
      <main className="cards-container">
        {jobsData.map((job) => (
          <Card
            key={job.id}
            companyLogo={job.logo}
            companyName={job.company}
            isNew={job.new}
            isFeatured={job.featured}
            jobTitle={job.position}
            jobDetails={[job.postedAt, job.contract, job.location]}
            tags={[job.role, job.level, ...job.languages, ...job.tools]}
            handleSetFilter={handleSetFilter}
          />
        ))}
      </main>
      <footer className="credits-footer">
        <p>
          Challenge by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
          >
            FrontendMentor
          </a>
          . Coded by{' '}
          <a target="_blank" rel="noreferrer" href="https://github.com/lamaolo">
            Lucero Amaolo
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
