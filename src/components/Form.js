import React, { useState } from 'react';

export default function Form(props) {
  let { handler } = props;
  const [info, setInfo] = useState({ name: '', email: '', website: '' });

  const onChangeHandler = (e) => {
    let temp = JSON.parse(JSON.stringify(info));
    temp[e.target.placeholder.toLowerCase()] = e.target.value;
    setInfo(temp);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault() || (e.returnValue = false);
    setInfo({ name: '', email: '', website: '' });
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <h1>Contact Form</h1>
      <input
        className="input"
        placeholder="Name"
        value={info.name}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        required
      />
      <input
        className="input"
        placeholder="Email"
        value={info.email}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        required
      />
      <input
        className="input"
        placeholder="Website"
        value={info.website}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        required
      />
      <button className="btn" type="submit" onClick={() => handler(info)}>
        Add
      </button>
    </form>
  );
}
