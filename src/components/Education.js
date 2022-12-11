import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <h2>Education</h2>
          <div className='formLine'>
            <label htmlFor='institution'>Institution Name:</label>
            <input type='text' id='institution' />
          </div>
          <div className='formLine'>
            <label htmlFor='degree'>Degree:</label>
            <input type='text' id='degree' />
          </div>{' '}
          <div className='formLine'>
            <label htmlFor='duration'>Duration:</label>
            <input type='text' id='duration' placeholder='3 years full-time' />
          </div>
          <button type='submit'>Submit</button>
          <button className='addEducation'>Add Another</button>
        </form>
      </div>
    );
  }
}

export default Education;
