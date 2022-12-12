import React, { Component } from 'react';

class GenInfo extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      age: '',
      nationality: '',
      email: '',
      editMode: true,
    };
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
    const { name, age, nationality, email, editMode } = this.state;

    if (editMode)
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>General Information</h2>

            <div className='genInfo'>
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
            </div>
          </form>
        </div>
      );
    else
      return (
        <div>
          <h2>General Information</h2>
          <div className='genInfo'>
            <div className='formLine'>
              Name: <span>{name}</span>
            </div>
            <div className='formLine'>
              Age:<span>{age}</span>{' '}
            </div>
            <div className='formLine'>
              Nationality: <span>{nationality}</span>
            </div>
            <div className='formLine'>
              Email: <span>{email}</span>
            </div>
            <button onClick={this.handleSubmit}>Edit</button>
          </div>
        </div>
      );
  }
}

export default GenInfo;
