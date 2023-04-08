import React, { Component } from 'react';
import Home from '../screen/home/Home';
import Details from '../screen/details/Details';
import moviesData from '../assets/movieData';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screen/bookshow/BookShow';
import Confirmation from '../screen/confirmation/Confirmation';

class Controller extends Component {

  constructor() {
    super();
    this.baseUrl = "http://54.175.21.157:8080/api/v1/";
  }

  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Home {...props} moviesData={moviesData} baseUrl={this.baseUrl} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl={this.baseUrl} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;