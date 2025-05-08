import { useState } from "react";

const accordionStyles = {
  maxWidth: "600px",
};

const accordionTitleStyles = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "5px",
  background: "#FFFFFF",
};

const accordionContentStyles = {
  padding: "5px",
  margin: "20px",
  background: "#FFFFFF",
  overflow: "auto", // Added overflow auto
  maxHeight: "200px", // Set a max height for scroll
};

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className=" w-96 ">
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>
          {isActiveSection ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </div>
      </div>
      {isActiveSection && (
        <div className="h-64 truncate" style={accordionContentStyles}>
          {section.content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Set default to 0 to open the first section by default

  return (
    <div style={accordionStyles}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
