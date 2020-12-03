import React from "react";
import './input.scss';


function Input(props) {

  const handleChange = (e) => {
    props.onType(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  }

  const { name, className } = props;
  return (
    <form onSubmit={handleSubmit} className={className}>
       <p>Insert pokemon you want to find.</p>
       <input value={name} onChange={handleChange} />
       <input type="submit" />
    </form>
  )
}

export default Input;
