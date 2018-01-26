import React from 'react';
import * as _ from 'lodash';

class CreateConsignment extends React.Component {

  state = {
    created: false,
    description: '',
    weight: 0,
    containers: [],
  }

  create = () => {
    const consignment = this.state;
    fetch(`http://localhost:8080/consignment/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_.omit(consignment, 'created')),
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        created: res.created,
      });
    });
  }

  addContainer = e => {
    this.setState({
      containers: [...this.state.containers, e.target.value],
    });
  }

  setDescription = e => {
    this.setState({
      description: e.target.value,
    });
  }

  setWeight = e => {
    this.setState({
      weight: e.target.value,
    });
  }

  render() {
    return (
      <div className='consignment-form container'>
        <br />
        <div className='form-group'>
          <textarea className='form-control' placeholder='Description'></textarea>
        </div>
        <div className='form-group'>
          <input type='number' placeholder='Weight' className='form-control' />
        </div>
        <div className='form-control'>
          Add containers...
        </div>
        <br />
        <button onClick={this.create} className='btn btn-primary'>Create</button>
      </div>
    );
  }
}

export default CreateConsignment;
