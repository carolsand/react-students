import React from 'react';
import Scores from '../Scores/Scores'

const Students = (props) => (
  <div className="students">
      <h1>Name</h1>{props.name}
      <br></br>
      <h2>BIO</h2>{props.bio}
      <h3>Scores</h3><Scores scores={props.scores} />
  </div>
);

export default Students;