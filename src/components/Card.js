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
      <figure className="Card-picture">
        <img
          src={require(`../static/images/${companyLogo}`).default}
          alt={companyName}
        />
      </figure>
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
      <span className="separator"></span>
      <section className="Card-tags">
        {tags.map((tag) => (
          <button onClick={() => handleSetFilter(tag)}>{tag}</button>
        ))}
      </section>
    </article>
  );
};

export default Card;
