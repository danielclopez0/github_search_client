import React from 'react';

const RepoCard = ({ description, language, name, owner, score, stars, url }) => (
  <a href={url} className="repoCard">
    <div className="cardHeader">{name}</div>
    <div>{description}</div>
    <br />
    <div>{`Owner: ${owner}`}</div>
    <div>{`Language: ${language}`}</div>
    <div>{`Relevance: ${score} `}</div>
    <div>{`Stars: ${stars} `}</div>
  </a>
)

export default RepoCard;
