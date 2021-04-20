import '../static/css/Card.css';

const Card = ({
  companyLogo,
  companyName,
  isNew,
  isFeatured,
  jobTitle,
  jobDetails,
  tags,
  handleSetFilter,
}) => {
  return (
    <article className={isFeatured ? 'Card is-featured' : 'Card'}>
      <div className="Card-content">
        <figure className="Card-picture">
          <img
            src={require(`../static/images/${companyLogo}`).default}
            alt={companyName}
          />
        </figure>
        <section className="details-container">
          <header className="Card-header">
            <p>{companyName}</p>
            <div className="Card-status">
              {isNew && <span className="status-new">new!</span>}
              {isFeatured && <span className="status-featured">featured</span>}
            </div>
          </header>
          <section className="Card-info">
            <strong>{jobTitle}</strong>
            <div className="Card-info-details">
              {jobDetails.map((detail) => (
                <p>{detail}</p>
              ))}
            </div>
          </section>
        </section>
      </div>

      <section className="Card-tags">
        {tags.map((tag) => (
          <button onClick={() => handleSetFilter(tag)}>{tag}</button>
        ))}
      </section>
    </article>
  );
};

export default Card;
