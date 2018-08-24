import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.action(event.target.value);
  }

  render() {
    return (
      <label>
        Sort:
        <select value={this.props.currentVal} onChange={this.handleChange}>
          <option value="score">score</option>
          <option value="stars">stars</option>
        </select>
      </label>
    );
  }
}

export default Sort;
