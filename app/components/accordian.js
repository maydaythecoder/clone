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
    <div className="absolute w-96 mt-96">
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && (
        <div className=" h-64 truncate" style={accordionContentStyles}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
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