import React, { Component } from 'react';
import uniqid from 'uniqid';

class WorkXp extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      workXp: {
        company: '',
        position: '',
        jobDuration: '',
        editMode: true,
      },
      workXpArr: [
        {
          company: '',
          position: '',
          jobDuration: '',
          editMode: true,
        },
      ],
    };
  }

  handleChange(e, index) {
    const { id, value } = e.target;

    let newWorkXpArr = this.state.workXpArr.map((el, ind) => {
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
        workXpArr: [...newWorkXpArr],
      },
      () => console.log(this.state, newWorkXpArr)
    );
  }

  handleSubmit(e, index) {
    e.preventDefault();

    let newWorkXpArr = this.state.workXpArr.map((el, ind) => {
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
      workXpArr: newWorkXpArr,
    });
  }

  handleAdd() {
    this.setState({
      workXpArr: this.state.workXpArr.concat(this.state.workXp),
      workXp: {
        company: '',
        position: '',
        jobDuration: '',
        editMode: true,
      },
    });
  }

  handleDelete(index) {
    const newArray = this.state.workXpArr.filter((el, ind) => ind !== index);

    this.setState({
      ...this.state,
      workXpArr: newArray,
    });
  }

  render() {
    const workXpArr = this.state.workXpArr;

    const returnRender = workXpArr.map((task, index) => {
      if (task.editMode) {
        return (
          <li key={index}>
            <div>
              {index !== 0 ? <div className='divider'></div> : ''}
              <form id={index} onSubmit={(e) => this.handleSubmit(e, index)}>
                <div className='formLine'>
                  <label htmlFor='company'>Company Name:</label>
                  <input
                    type='text'
                    id='company'
                    value={task.company}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </div>
                <div className='formLine'>
                  <label htmlFor='position'>Job Title:</label>
                  <input
                    type='text'
                    id='position'
                    value={task.position}
                    onChange={(e) => this.handleChange(e, index)}
                  />
                </div>
                <div className='formLine'>
                  <label htmlFor='jobDuration'>Duration:</label>
                  <input
                    type='text'
                    id='jobDuration'
                    placeholder='2 years'
                    value={task.jobDuration}
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
                Company: <span>{task.company}</span>{' '}
              </div>
              <div className='formLine' key={uniqid()}>
                Job Title:<span> {task.position}</span>{' '}
              </div>
              <div className='formLine' key={uniqid()}>
                Duration: <span>{task.jobDuration}</span>{' '}
              </div>
              <button id={index} onClick={(e) => this.handleSubmit(e, index)}>
                Edit
              </button>
              {index === workXpArr.length - 1 ? (
                <button onClick={this.handleAdd} className='addItem'>
                  Add Another
                </button>
              ) : (
                ''
              )}
              {index !== 0 ? (
                <button
                  onClick={() => this.handleDelete(index)}
                  className='deleteItem'
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
        <h2>Work Experience</h2>
        <ul className='list'>{returnRender}</ul>
      </div>
    );
  }
}

export default WorkXp;
