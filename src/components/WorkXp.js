import React, { Component } from 'react';

class WorkXp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <h2>Work Experience</h2>
          <div className='formLine'>
            <label htmlFor='position'>Position:</label>
            <input type='text' id='position' />
          </div>
          <div className='formLine'>
            <label htmlFor='company'>Company:</label>
            <input type='text' id='company' />
          </div>
          <div className='formLine'>
            <label htmlFor='jobDuration'>Duration:</label>
            <input type='number' id='jobDuration' />
          </div>
          <button type='submit'>Submit</button>
          <button className='addWork'>Add Another</button>
        </form>
      </div>
    );
  }
}

export default WorkXp;
