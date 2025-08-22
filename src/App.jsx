import { useState } from 'react';
import Question from './components/Question.jsx';
import './App.css';
import potatoGif from './assets/potato.gif';
import sadGif from './assets/sad-dancing-potato.gif';
import danceGif from './assets/dancing-potato.gif';

import questionSet from './data/questions.json';

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(new Array(200).fill(false));
  const [percentage, setPercentage] = useState(0.0);
  const [showGif, setShowGif] = useState(true);

  const handleOnChange = (isCorrect, index) => {
    correct[index] = isCorrect;
    const correctArray = correct.filter((i) => i);
    setScore(correctArray.length);
    setPercentage(((correctArray.length / 197) * 100).toFixed(2));
  };

  const handleOnClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleOnClickGif = () => {
    setShowGif(!showGif);
  };

  return (
    <div className='quiz'>
      <div className='control-panel'>
        <div className='button' onClick={handleOnClick}>
          {showAnswer ? 'Hide' : 'Show'} Answers
        </div>
        <div
          className='score'
          style={{ display: showAnswer ? 'block' : 'none' }}
        >
          Score: {score} / 197
        </div>
        <div
          className='score'
          style={{
            display: showAnswer ? 'block' : 'none',
            color: percentage >= 75 ? '#9ade95' : '#e05353',
          }}
        >
          Percentage: {percentage}%
        </div>
        <img
          className='wave-potato'
          style={{ display: showAnswer ? 'none' : showGif ? 'block' : 'none' }}
          src={potatoGif}
          alt=''
        />
        <img
          className='sad-potato'
          style={{
            display:
              showAnswer && showGif
                ? percentage < 75
                  ? 'block'
                  : 'none'
                : 'none',
          }}
          src={sadGif}
          alt=''
        />
        <img
          className='dance-potato'
          style={{
            display:
              showAnswer && showGif
                ? percentage >= 75
                  ? 'block'
                  : 'none'
                : 'none',
          }}
          src={danceGif}
          alt=''
        />
        <div className='button' onClick={handleOnClickGif}>
          {showGif ? 'Hide' : 'Show'} Potatoes
        </div>
      </div>
      <div className='question-set'>
        {questionSet.map((object, id) => (
          <div className='question-object' key={id}>
            <div className='vignette'>{object.vignette}</div>
            {object.questions.map((question, questionId) => (
              <Question
                showAnswer={showAnswer}
                recall={handleOnChange}
                key={questionId}
                id={question.id}
                text={question.question}
                option={question.options}
                answer={question.answer}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
