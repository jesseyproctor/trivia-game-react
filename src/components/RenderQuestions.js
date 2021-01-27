import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RenderQuestions ({ category, handleGoBack }) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
        .then(response => {
            const results = response.data.results
            setQuestions(results)
        })
    }, [category])

    return (
        <div>
            <h2>{category.name}</h2>
            <div>
                {questions.map(question => (
                    <div key={question.correct_answer}>
                        {question.question}
                    </div>
                ))}
            </div>

            <button
                onClick={handleGoBack}
            >
                Back to categories
            </button>
        </div>
    )
}

export default RenderQuestions