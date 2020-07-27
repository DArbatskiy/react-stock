import React from 'react';

function Form(props) {
  return (
    <form onSubmit={props.stockMethod}>
      <input type="text" name="brand" placeholder="brand" />
      <button>Get info</button>
    </form>
  );
}

export default Form;
