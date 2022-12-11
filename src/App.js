import React, { Component } from 'react';
import Education from './components/Education';
import GenInfo from './components/GenInfo';
import WorkXp from './components/WorkXp';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      genInfo: {
        name: '',
        age: '',
        nationality: '',
        email: '',
        editMode: true,
      },
      education: {
        degree: '',
        institution: '',
        yearFrom: '',
        yearTo: '',
        editMode: true,
      },
      allEducation: [],
      workXp: {
        position: '',
        company: '',
        yearFrom: '',
        yearTo: '',
        editMode: true,
      },
      allWorkXp: [],
    };
  }

  handleChange(e, type) {
    const { id, value } = e.target;

    this.setState({
      ...this.state,
      [type]: {
        ...this.state[type],
        [id]: value,
      },
    });
  }

  handleSubmit(e, type) {
    e.preventDefault();
    this.setState({
      ...this.state,
      [type]: {
        ...this.state[type],
        editMode: !this.state[type].editMode,
      },
    });
  }

  render() {
    const { genInfo, education, workXp } = this.state;

    return (
      <div className='cv'>
        <h1 className='mainTitle'>Curriculum Vitae</h1>
        <GenInfo
          stateInfo={genInfo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Education />
        <WorkXp />
      </div>
    );
  }
}

export default App;
