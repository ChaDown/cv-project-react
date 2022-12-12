import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      education: {
        degree: '',
        institution: '',
        duration: '',
        editMode: true,
      },
      educationArr: [
        {
          degree: '',
          institution: '',
          duration: '',
          editMode: true,
        },
      ],
    };
  }

  handleChange(e, index) {
    const { id, value } = e.target;

    let newEducationArr = this.state.educationArr.map((el, ind) => {
      if (ind === index) {
        el = {
          ...el,
          [id]: value,
        };
      }
      return el;
    });

    this.setState(
      {
        ...this.state,
        educationArr: [...newEducationArr],
      },
      () => console.log(this.state, newEducationArr)
    );
  }

  handleSubmit(e, index) {
    e.preventDefault();

    let newEducationArr = this.state.educationArr.map((el, ind) => {
      if (ind === index) {
        el = {
          ...el,
          editMode: !el.editMode,
        };
      }
      return el;
    });

    this.setState({
      ...this.state,
      educationArr: newEducationArr,
    });
  }

  handleAdd() {
    this.setState({
      educationArr: this.state.educationArr.concat(this.state.education),
      education: {
        degree: '',
        institution: '',
        duration: '',
        editMode: true,
      },
    });
  }

  handleDelete(index) {
    const newArray = this.state.educationArr.filter((el, ind) => ind !== index);

    this.setState({
      ...this.state,
      educationArr: newArray,
    });
  }

  render() {
    const educationArr = this.state.educationArr;

    const returnRender = educationArr.map((task, index) => {
      if (task.editMode) {
        return (
          <li key={index}>
            {index !== 0 ? <div className='divider'></div> : ''}
            <div>
              <form id={index} onSubmit={(e) => this.handleSubmit(e, index)}>
                <div className='formLine'>
                  <label htmlFor='institution'>Institution Name:</label>
                  <input
                    type='text'
                    id='institution'
                    value={task.institution}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </div>
                <div className='formLine'>
                  <label htmlFor='degree'>Degree:</label>
                  <input
                    type='text'
                    id='degree'
                    value={task.degree}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </div>
                <div className='formLine'>
                  <label htmlFor='duration'>Duration:</label>
                  <input
                    type='text'
                    id='duration'
                    placeholder='3 years full-time'
                    value={task.duration}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </div>
                <button id={index} type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </li>
        );
      } else
        return (
          <li key={index}>
            {index !== 0 ? <div className='divider'></div> : ''}
            <div>
              <div className='formLine' key={uniqid()}>
                Institution Name: <span> {task.institution}</span>
              </div>
              <div className='formLine' key={uniqid()}>
                Degree/Subject: <span> {task.degree}</span>
              </div>
              <div className='formLine' key={uniqid()}>
                Duration of Study: <span> {task.duration}</span>
              </div>
              <button id={index} onClick={(e) => this.handleSubmit(e, index)}>
                Edit
              </button>
              {index === educationArr.length - 1 ? (
                <button onClick={this.handleAdd} className='addEducation'>
                  Add Another
                </button>
              ) : (
                ''
              )}
              {index !== 0 ? (
                <button
                  onClick={() => this.handleDelete(index)}
                  className='addEducation'
                >
                  Delete
                </button>
              ) : (
                ''
              )}
            </div>
          </li>
        );
    });

    return (
      <div>
        <h2>Education</h2>
        <ul className='list'>{returnRender}</ul>
      </div>
    );
  }
}

export default Education;
