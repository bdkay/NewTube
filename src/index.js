import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = "AIzaSyDKegUcJbAmoWRzw1mmH-KXQszHRUOZlt4";

// Class-based app component
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'cats'}, (videos) => {
      this.setState({ videos });
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[1] } />
        <VideoList videos={ this.state.videos } />
      </div>
    )
  };
};

ReactDOM.render(<App />, document.querySelector('.container'));
