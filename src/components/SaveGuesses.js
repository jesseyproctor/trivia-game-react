import React, { useState, useEffect } from 'react'
import axios from 'axios'


function SaveGuesses (questionIndex, guess) {
    let newQuestions = questions.slice(0, questionIndex)
    newQuestions.push({
        questions[questionIndex]
        guess: guess
    })
    newQuestions = newQuestions.append(questions.slice(questionIndex + 1))
    setQuestion(newQuestions)
}

export default SaveGuesses

//once question object is updated with a guess I can say 
//if question.guess == question.correct_answer 
// a counter will increase by 1
//else the counter will not increase (or do I need a counter for a wrong answer too?)
// let count = 0
// maybe use ternary operator?
// condition to be tested? value if truthy: value if falsy
