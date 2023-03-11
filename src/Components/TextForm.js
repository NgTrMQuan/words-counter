import React, {useState} from "react";
const TextForm = () => {

    const [text, setText] = useState("")
    
    const onChangeHandler = (event) => {
        let newtext = event.target.value
        setText(newtext)
    };

  return (
    <div>
      <h1>Enter Your Paragraph</h1>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" rows={8} value={text} onChange={onChangeHandler} ></textarea>
      </div>

        <div className="container">
            <h2>Total Characters are </h2>
            <p>{text.length}</p>
            <h2 style={{
              position: "relative",
              left: "700px",
              bottom: "85px",
            }}>Total Words are </h2>
            <p style={{
              position: "relative",
              left: "700px",
              bottom: "85px",
            }}>{text.split(" ").length}</p>
        </div>

    </div>
    
  );
};
export default TextForm;
