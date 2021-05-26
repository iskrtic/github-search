import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export default function Repos({ listaRepos }) {
  if (!listaRepos || listaRepos.length <= 0) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>REPOSITORIES: </strong>
      </p>
      <ListGroup>
        {listaRepos.map((repo, index) => (
          <ListGroup.Item key={index}>
              {repo.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

Repos.propTypes = {
  listaRepos: PropTypes.array,
};
