import { useEffect, useState } from "react";
import Template from "../template/Template";
import "./TemplateList.css";

const TemplateList = () => {
  const [selectedId, setSelectedId] = useState(false);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("/templates")
      .then((response) => response.json())
      .then((templates) => {
        setTemplates(templates);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <div className="listContainer">
      {templates.map((template, index) => {
        return (
          <Template
            title={template["title"]}
            text={template["text"]}
            key={index}
            index={index}
            handleSelection={setSelectedId}
            selected={selectedId === index}
          />
        );
      })}
    </div>
  );
};

export default TemplateList;
