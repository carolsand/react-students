import React from 'react';

function Scores(props) {
  return (
    <div>
      {props.scores.map(each => (
        <h4>
          {each.score} {each.date}
        </h4>
      ))}
    </div>
  );
}
export default Scores;