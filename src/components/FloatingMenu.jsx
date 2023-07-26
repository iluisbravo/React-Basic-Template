import React, { useState } from "react";
import "./FloatingMenu.css";

const Sidebar = () => {
  const [options, setOptions] = useState([
    {
      id: 1,
      title: "Opción 1",
      suboptions: [{ id: 1, title: "Subopción 1" }, { id: 2, title: "Subopción 2" }],
    },
    {
      id: 2,
      title: "Opción 2",
      suboptions: [{ id: 3, title: "Subopción 3" }, { id: 4, title: "Subopción 4" }],
    },
    {
      id: 3,
      title: "Opción 3",
      suboptions: [{ id: 5, title: "Subopción 5" }, { id: 6, title: "Subopción 6" }],
    },
    {
      id: 4,
      title: "Opción 4",
      suboptions: [{ id: 7, title: "Subopción 7" }, { id: 8, title: "Subopción 8" }],
    },
  ]);

  const [activeOption, setActiveOption] = useState(null);

  const handleClick = (optionId) => {
    setActiveOption(activeOption === optionId ? null : optionId);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Título del Sidebar</h3>
      </div>
      <ul className="sidebar-options">
        {options.map((option) => (
          <li key={option.id}>
            <div className="sidebar-option" onClick={() => handleClick(option.id)}>
              <span>{option.title}</span>
              <i className={`fa fa-angle-${activeOption === option.id ? "up" : "down"}`} />
            </div>
            {activeOption === option.id && (
              <ul className="sidebar-suboptions">
                {option.suboptions.map((suboption) => (
                  <li key={suboption.id}>{suboption.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
