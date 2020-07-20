import React from 'react';

class Form extends React.Component {
render() {
  return (
    <form onSubmit={this.props.stockMethod}>
      <input type="text" name="brand" placeholder="brand" />
      <button>Get info</button>
    </form>
  );
}
}

export default Form;