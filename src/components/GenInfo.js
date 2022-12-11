import React, { Component } from 'react';

class GenInfo extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { name, age, nationality, email, editMode } = this.props.stateInfo;

    if (editMode)
      return (
        <div>
          <form onSubmit={(e) => this.props.handleSubmit(e, 'genInfo')}>
            <h2>General Information</h2>
            <div className='formLine'>
              <label htmlFor='name'>Name:</label>
              <input
                value={name}
                onChange={(e) => this.props.handleChange(e, 'genInfo')}
                type='text'
                id='name'
              />
            </div>
            <div className='formLine'>
              <label htmlFor='age'>Age:</label>
              <input
                value={age}
                onChange={(e) => this.props.handleChange(e, 'genInfo')}
                type='number'
                id='age'
              />
            </div>
            <div className='formLine'>
              <label htmlFor='nationality'>Nationality:</label>
              <input
                value={nationality}
                onChange={(e) => this.props.handleChange(e, 'genInfo')}
                type='text'
                id='nationality'
              />
            </div>
            <div className='formLine'>
              <label htmlFor='email'>Email:</label>
              <input
                value={email}
                onChange={(e) => this.props.handleChange(e, 'genInfo')}
                type='text'
                id='email'
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
    else
      return (
        <div>
          <div>{name}</div>
          <div>{age}</div>
          <div>{nationality}</div>
          <div>{email}</div>
          <button onClick={(e) => this.props.handleSubmit(e, 'genInfo')}>
            Edit
          </button>
        </div>
      );
  }
}

export default GenInfo;
