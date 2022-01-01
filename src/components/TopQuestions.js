import React from "react";

const TopQuestions = (props) => {
  return (
    <div>
      <div className="container">
        {props.questions.map((question) => {
          return (
            <div key={question.question_id} className="row">
              <div className="col-md-1">
                <div className="tabs mb-4">
                  <span className="tabs-count">{question.score}</span>
                  <br />
                  <span>votes</span>
                  <br />
                  <span className="tabs-count">{question.answer_count}</span>
                  <br />
                  <span>answers</span>
                  <br />
                  <span>{question.view_count}</span> <span>views</span>
                </div>
              </div>
              <div className="col-md-10">
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="title"
                >
                  {question.title}
                </a>
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      {question.tags.map((tag, i) => {
                        return (
                          <span key={i} className="tag mb-2">
                            {tag}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div className="col-md-4 user">
                    <div className="row">
                      <div className="col-md-2">
                        <img
                          className="userLogo"
                          src={question.owner.profile_image}
                          alt="userLogo"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="userBadge">
                          <a
                            href={question.owner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {question.owner.display_name}
                          </a>
                          <br />
                          <span className="tabs">
                            <strong>{question.owner.reputation}</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};

export default TopQuestions;
