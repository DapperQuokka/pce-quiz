import { useState } from 'react';
import Question from './components/Question.jsx';
import './App.css';

import questionSet from './data/questions.json';

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(160);
  const [correct, setCorrect] = useState(new Array(200).fill(false));
  const [percentage, setPercentage] = useState(0);

  const handleOnChange = (isCorrect, index) => {
    correct[index] = isCorrect;
    const correctArray = correct.filter((i) => i);
    setScore(correctArray.length);
    setPercentage(((correctArray.length / 197) * 100).toFixed(2));
  };

  const handleOnClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className='quiz'>
      <div className='control-panel'>
        <div className='show-answer-button' onClick={handleOnClick}>
          {showAnswer ? 'Hide' : 'Show'} Answers
        </div>
        <div
          className='score'
          style={{ display: showAnswer ? 'block' : 'none' }}
        >
          {score} / 197
        </div>
        <div
          className='score'
          style={{
            display: showAnswer ? 'block' : 'none',
            color: percentage >= 75 ? '#9ade95' : '#e05353',
          }}
        >
          {percentage}
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
