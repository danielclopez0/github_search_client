import React from 'react';

const RepoCard = ({ name, score, stars, url }) => (
  <a href={url}>
    <div className="repoCard" key={name}>
      {`name: ${name} | relevance: ${score} | stars: ${stars}`}
    </div>
  </a>
)

export default RepoCard;
