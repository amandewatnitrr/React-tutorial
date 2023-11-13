import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background: #fad0ec;
}

& input:focus {
  outline: none;
  background: #d0e0fa;
  border-color: #0370ddf4;
}

&.inValid input{
  border-color: red;
  background: #fad0ec; /* change the background color to red when input is invalid */
}

&.invalid label{
  color:red;
}

`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setisValid] = useState(true);

  /*
   * As long as the isVlaid has value true, the input is considered valid.
   * And, than we can call it in the formSubmitHandler, and upon getting a wrong input, we can set it to false.
   */

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setisValid(true); // Set isValid to true when the input is not empty
      event.target.style.backgroundColor = "#57f75961";
    }

    if (event.target.value.trim().length === 0) {
      setisValid(false); // Set isValid to true when the input is not empty
      event.target.style.backgroundColor = "#fad0ec";
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // To avoid creation of any object that has null value or simply spaces
    if(enteredValue.trim().length === 0)
      {
        setisValid(false);
        return;
      }
    props.onAddGoal(enteredValue);
  };

  /*
   * Here for form-control using div class with the the css defined in the css file, for all the states.
   */
  const FormControlUsingDiv = () => {
    return(
      <div className="form-control">
        <label style={{color: "#8b005d"}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {emptyFormWarning()}
      </div>
      );
  };

  /* 
   *  Here for form-control we don't use the defined css rather we bring the css to the file
   *  where the component is needed and isolated using the styled-component and, it automatically
   *  takes consideration of all the props that has been passed to the component.
   */

  const FormControlUsingStyledComponents = () => {
    return(
    <FormControl className={!isValid && 'invalid'}>
        <label style={{color: "#8b005d"}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {emptyFormWarning()}
      </FormControl>
    );
  };

  /**
   * But, than there's one more way to this, where we can pass props to the styled components,
   * and utilise those props inside of the `` for the styled components, to easily change
   * styles dynamically.
   */

  function emptyFormWarning(){
    if(isValid === false)
      {
        return (
          <p style={{color:"red",fontSize:"0.75rem"}}>
            Please enter a valid course goal.
          </p>
        );
      }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {FormControlUsingStyledComponents()}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
