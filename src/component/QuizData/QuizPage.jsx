import React, { useState } from 'react';
import Questions from './QuestionsData'; // Assuming Questions.js contains your array of questions

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const correctAnswer = Questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

        <div className="container mx-auto">
          {showScore ? (
            <div>
              <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
              <p className="mb-4">Your score: {score}/{Questions.length}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleRestartQuiz}
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-4">{Questions[currentQuestion].questions}</h1> {/* Corrected 'question' to 'questions' */}
              <div className="mb-4">
                {Questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="radio"
                      id={option}
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    <label htmlFor={option} className="ml-2">{option}</label>
                  </div>
                ))}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
              >
                {currentQuestion < Questions.length - 1 ? 'Next' : 'Finish'}
              </button>
            </div>
          )}
        </div>
      
    </div>
  );
};

export default Quiz;
