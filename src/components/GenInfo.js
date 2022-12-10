import React, { Component } from 'react';

class GenInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      nationality: '',
      email: '',
      editMode: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;

    this.setState({
      ...this.state,
      [id]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      editMode: !this.state.editMode,
    });
  }

  render() {
    const { name, age, nationality, email } = this.state;

    if (this.state.editMode)
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>General Information</h2>
            <div className='formLine'>
              <label htmlFor='name'>Name:</label>
              <input
                value={name}
                onChange={this.handleChange}
                type='text'
                id='name'
              />
            </div>
            <div className='formLine'>
              <label htmlFor='age'>Age:</label>
              <input
                value={age}
                onChange={this.handleChange}
                type='number'
                id='age'
              />
            </div>
            <div className='formLine'>
              <label htmlFor='nationality'>Nationality:</label>
              <input
                value={nationality}
                onChange={this.handleChange}
                type='text'
                id='nationality'
              />
            </div>
            <div className='formLine'>
              <label htmlFor='email'>Email:</label>
              <input
                value={email}
                onChange={this.handleChange}
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
          <button onClick={this.handleSubmit}>Edit</button>
        </div>
      );
  }
}

export default GenInfo;
