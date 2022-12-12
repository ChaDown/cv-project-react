import React, { Component } from 'react';
import Education from './components/Education';
import GenInfo from './components/GenInfo';
import WorkXp from './components/WorkXp';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.printPage = this.printPage.bind(this);
  }

  printPage() {
    window.print();
  }

  render() {
    return (
      <div className='cv'>
        <h1 className='mainTitle'>Curriculum Vitae</h1>
        <div className='cvBody'>
          <GenInfo />
          <Education />
          <WorkXp />
          <div className='printBtnCtr'>
            <button class='printBtn' onClick={this.printPage}>
              Print CV
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
