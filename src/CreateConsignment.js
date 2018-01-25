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
      body: JSON.stringify(_.omit(consignment, 'created')),
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        created: res.created,
      });
    });
  }

  addContainer = e => {}

  setDescription = e => {}

  setWeight = e => {}

  render() {
    return (
      <div className='consignment-form'>
        <div className='form-group'>
          <textarea className='form-control' placeholder='Description'></textarea>
        </div>
        <div className='form-group'>
          <input type='number' placeholder='weight' />
        </div>
        <div className='form-control'>
          Add containers...
        </div>
      </div>
    );
  }
}
