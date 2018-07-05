import React, { Component } from "react";
import Header from "./components/header";
import Search from "./components/search";
import WeekendSearch from "./components/weekendSearch";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saturday: []
    };
    this.citySearch = this.citySearch.bind(this);
  }

  componentWillMount() {
    this.citySearch("Glendale");
  }

  citySearch(city = "", keyword = "") {
    const token = "PYNUZARXIQCRX3QWY3WZ";
    let cityField = city;
    let keywords = keyword;

    if (cityField === "") {
      cityField = "Glendale";
    }

    if (keyword === "") {
      keywords = "today";
    }

    // let price = " " || "&price=free";
    let searchQuery = `https://www.eventbriteapi.com/v3/events/search/?token=${token}&expand=venue&location.within=1mi&location.address=${cityField}&sort_by=best&start_date.keyword=${keywords}`;
    console.log(searchQuery);
    const self = this;
    axios
      .get(searchQuery)
      .then(data => {
        self.setState({
          saturday: data.data.events,
          sunday: data.data.events
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.saturday[0] === undefined) {
      return (
        <div className="App">
          <Header />
          <Search onSearchTermChange={term => this.citySearch(term)} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <Search
            onSearchTermChange={(term, keyword) =>
              this.citySearch(term, keyword)
            }
          />
          <WeekendSearch satEvents={this.state.saturday} />
        </div>
      );
    }
  }
}

export default App;
