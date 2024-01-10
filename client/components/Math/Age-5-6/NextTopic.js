// NextTopic.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NextTopic = () => {
  const history = useHistory();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const topics = [
    { path: "/basic-subtraction", label: "Basic Subtraction" },
    { path: "/shapes", label: "Shapes" },
    { path: "/counting", label: "Counting" },
    { path: "/math/age-5-6/basic-addition", label: "Basic Addition" },
  ];

  const navigateToTopic = (path) => {
    history.push(path);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Choose Next Topic
      </button>
      {isDropdownVisible && (
        <div className="dropdown-content">
          {topics.map((topic, index) => (
            <a key={index} onClick={() => navigateToTopic(topic.path)}>
              {topic.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NextTopic;
