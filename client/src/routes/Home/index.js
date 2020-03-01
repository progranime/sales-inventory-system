import React, { Component } from 'react'

import { Card } from '../../components/UI'

class Index extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-sm-6'>
          <Card header='Order for this month'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque adipisci nam corrupti culpa optio eos aliquid mollitia
              at iusto a tempore quo, voluptate voluptates ducimus, provident,
              saepe modi sunt eveniet?
            </p>
          </Card>
        </div>
        <div className='col-sm-6'>
          <Card header='Lowest Stocks'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque adipisci nam corrupti culpa optio eos aliquid mollitia
              at iusto a tempore quo, voluptate voluptates ducimus, provident,
              saepe modi sunt eveniet?
            </p>
          </Card>
        </div>
        <div className='col-sm-6'>
          <Card header='Customer Orders'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque adipisci nam corrupti culpa optio eos aliquid mollitia
              at iusto a tempore quo, voluptate voluptates ducimus, provident,
              saepe modi sunt eveniet?
            </p>
          </Card>
        </div>
        <div className='col-sm-6'>
          <Card header='Total Revenue'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque adipisci nam corrupti culpa optio eos aliquid mollitia
              at iusto a tempore quo, voluptate voluptates ducimus, provident,
              saepe modi sunt eveniet?
            </p>
          </Card>
        </div>
      </div>
    )
  }
}

export default Index
