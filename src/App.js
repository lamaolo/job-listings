import Header from './components/Header';
import Card from './components/Card';

import './static/css/global.css';

import jobsData from './data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="cards-container">
        {jobsData.map((job) => (
          <Card
            companyLogo={job.logo}
            companyName={job.company}
            isNew={job.new}
            isFeatured={job.featured}
            jobTitle={job.position}
            jobDetails={[job.postedAt, job.contract, job.location]}
            tags={[job.role, job.level, ...job.languages, ...job.tools]}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
