import React from 'react';

const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {

  const percentage = (points/maxPossiblePoints)*100;

  let emoji;
  if(percentage >= 100) emoji="🎖️"
  if(percentage >=80 && percentage < 100) emoji="🎉"
  if(percentage >=50 && percentage < 80) emoji="☺️"
  if(percentage > 0 && percentage < 50) emoji="😐"
  if(percentage === 0) emoji="🤦‍♂️"

  return (
    <React.Fragment>
        <p className='result'>
            <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%).
        </p>
        <p className='highscore'>
            HighScore: {highScore}
        </p>
        <button className='btn btn-ui' onClick={() => dispatch({ type: "restart" })}>Restart</button>
    </React.Fragment>

  )
}

export default FinishScreen;