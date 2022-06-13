import React from "react";
import SelectDropDown from "./SelectDropDown";

const TextBox = ({
  style,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) => {
  const clickHandler = () => {
    setTranslatedText("");
    setTextToTranslate("");
  };

  return (
    <div className={style}>
      <SelectDropDown
        selectedLanguage={selectedLanguage}
        setShowModal={setShowModal}
        style={style}
      />
      <textarea
        placeholder={style == "input" ? "Enter Text" : "Translation"}
        disabled={style === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style == "input" ? textToTranslate : translatedText}
      />
      {style == "input" && (
        <div className="delete" onClick={clickHandler}>
          x
        </div>
      )}
    </div>
  );
};

export default TextBox;
