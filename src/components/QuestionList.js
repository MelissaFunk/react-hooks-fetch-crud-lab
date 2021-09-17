import React from "react";
import { useState, useEffect } from "react"
import QuestionItem from "./QuestionItem.js"

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(setQuestions)
  }, [])

  function handleDeleteQ(questionToDelete) {
    setQuestions(questions.filter(question => question.id !== questionToDelete.id))
  }

  function handleUpdateQ(questionToUpdate) {
    setQuestions(questions.map(question => question.id === questionToUpdate.id ? questionToUpdate : question))
  }

  const eachQuestion = questions.map(question => 
    <QuestionItem 
      question={question} 
      key={question.id} 
      handleDeleteQ={handleDeleteQ}
      handleUpdateQ={handleUpdateQ}
    />
  )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{eachQuestion}</ul>
    </section>
  );
}

export default QuestionList;
