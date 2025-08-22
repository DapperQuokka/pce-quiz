import React from 'react';
import { useState } from 'react';

function Question(props) {
  const [isCorrect, setCorrect] = useState(false);

  const answer = props.answer;
  const showAnswer = props.showAnswer;

  const handleOnChange = (event) => {
    const choice = Number(event.target.value);
    const answer = props.answer;
    setCorrect(choice === answer);
    props.recall(choice === answer, props.id - 1);
  };

  return (
    <div
      className='question'
      style={{
        backgroundColor: showAnswer
          ? isCorrect
            ? '#9ade95'
            : '#e05353'
          : 'unset',
      }}
    >
      <div className='question-text'>
        <span className='text-bold'>Question {props.id}: </span>
        {props.text}
      </div>
      <div className='question-options'>
        <label className='option' htmlFor={props.id + 'A'}>
          <input
            id={props.id + 'A'}
            type='radio'
            name={props.id}
            value='0'
            onChange={handleOnChange}
          />
          {props.option[0]}
        </label>
        <label className='option' htmlFor={props.id + 'B'}>
          <input
            id={props.id + 'B'}
            type='radio'
            name={props.id}
            value='1'
            onChange={handleOnChange}
          />
          {props.option[1]}
        </label>
        <label className='option' htmlFor={props.id + 'C'}>
          <input
            id={props.id + 'C'}
            type='radio'
            name={props.id}
            value='2'
            onChange={handleOnChange}
          />
          {props.option[2]}
        </label>
        <label className='option' htmlFor={props.id + 'D'}>
          <input
            id={props.id + 'D'}
            type='radio'
            name={props.id}
            value='3'
            onChange={handleOnChange}
          />
          {props.option[3]}
        </label>
      </div>
    </div>
  );
}

export default Question;
