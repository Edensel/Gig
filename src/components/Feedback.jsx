import React, { useState } from "react";
import { feedback } from "../constants";
import "../feedback.css";

const Feedback = () => {
  const [userFeedback, setUserFeedback] = useState("");
  const [postedFeedback, setPostedFeedback] = useState([]);

  const handleFeedbackChange = (e) => {
    setUserFeedback(e.target.value);
  };

  const handlePostFeedback = () => {
    if (userFeedback.trim() !== "") {
      setPostedFeedback([...postedFeedback, userFeedback]);
      setUserFeedback("");
    }
  };

  return (
    <div className="container mt-20 tracking-wide">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Feedback
      </h1>

      <div className="feedback-section">
        <p>
          Please provide your valuable feedback below:
          <input
            type="text"
            value={userFeedback}
            onChange={handleFeedbackChange}
            placeholder="Type your feedback here"
            className="block w-full border border-gray-300 rounded-md p-2 my-2"
          />
          <button
            onClick={handlePostFeedback}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Post Feedback
          </button>
        </p>
      </div>

      {/* Posted Feedback */}
      <div>
        <ul>
          {postedFeedback.map((feedback, index) => (
            <li key={index} className="posted-feedback">
              {feedback}
            </li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {feedback.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
