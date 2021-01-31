import React, { useState, useEffect } from 'react'
import axios from 'axios'

function combineAnswers (question) {
  const answers = [question.correct_answer].concat(question.incorrect_answers)
  question.answers = answers
  // console.log(question.answers)
  console.log(answers)
  const shuffledAnswers = (array) => {
    let currentIndex = array.length; let temporaryValue; let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
  shuffledAnswers(answers)
  console.log(answers)

  return question
}

function RenderQuestions ({ category, handleGoBack }) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
      .then(response => {
        let questionList = response.data.results
        questionList = questionList.map(question => combineAnswers(question))
        setQuestions(questionList)
      })
  }, [category])

  return (
    <div>
      <h2 className='categoryName'>{category.name}</h2>
      <div className='questions'>
        {questions.map((question, index) => (
          <div key={index}>
            <p dangerouslySetInnerHTML={{ __html: `${index + 1}. ${question.question}` }} />
            <ul>
              {question.answers.map(answer => (
                <li key={answer}>
                  <div dangerouslySetInnerHTML={{ __html: `${answer}` }} />
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      <button
        className='backButton'
        onClick={handleGoBack}
      >
        Back to categories
      </button>
    </div>
  )
}

export default RenderQuestions
