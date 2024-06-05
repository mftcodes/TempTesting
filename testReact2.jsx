const Quiz = ({ props }) => {
  let question = getQuestion();
  function getQuestion() {
    if (this.state.correct === null) {
      return (
        <>
          <div>
            <button onClick={() => this.answer(false)}>
              a) A graph database query language
            </button>
            <button onClick={() => this.answer(true)}>
              b) An API query language
            </button>
            <button onClick={() => this.answer(false)}>
              c) A graph drawing API
            </button>
          </div>
        </>
      );
    } else {
      return null;
    }
  }

  let answer = getAnswer();
  function getAnswer() {
    if (this.state.correct === true) {
      return (
        <>
          <div className="correct">Correct! It is an API query language</div>
        </>
      );
    } else if (this.state.correct === false) {
      return (
        <>
          <div className="incorrect">
            Nope! It's actually an API query language
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="quiz">
        <p>What is GraphQL?</p>
        {question}
        {answer}
      </div>
    </>
  );
};

export default Quiz;
