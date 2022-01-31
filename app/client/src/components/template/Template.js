import "./Template.css";

const Template = ({ title, text, index, handleSelection, selected }) => {
  const handleClick = () => {
    handleSelection(index);
    window.parent.postMessage({ template: text }, "https://mail.google.com/");
  };

  return (
    <button onClick={handleClick} className={selected ? "selected" : ""}>
      {title}
    </button>
  );
};

export default Template;
