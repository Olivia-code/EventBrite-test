import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const options = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "this_week", label: "This Week" },
  { value: "next_week", label: "Next Week" },
  { value: "this_weekend", label: "This Weekend" },
  { value: "this_month", label: "This Month" },
  { value: "next_month", label: "Next Month" }
];
const defaultOption = options[0];

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "", time: defaultOption };
  }

  render() {
    return (
      <div className="search-bar">
        <Dropdown
          className="dropdown"
          options={options}
          onChange={event => this.onDropdownChange(event.value)}
          value={this.state.time.label}
          placeholder={"Select new days"}
        />
        <input
          placeholder="City      "
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term, this.state.time.value);
  }

  onDropdownChange(time) {
    this.setState({ time });
    this.props.onSearchTermChange(this.state.term, time);
  }
}

export default Search;
