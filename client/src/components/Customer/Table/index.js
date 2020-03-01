import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'

import { Card } from '../../UI'

// const { SearchBar } = Search

const columns = [
  {
    dataField: 'id',
    text: 'Id',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Name',
    sort: true
  },
  {
    dataField: 'contact',
    text: 'Contact',
    sort: true
  },
  {
    dataField: 'gender',
    text: 'Gender',
    sort: true
  }
]

const products = [
  {
    id: 1,
    name: 'Jeremy Espinosa',
    contact: '09157978892',
    gender: 'Male'
  },
  {
    id: 2,
    name: 'Giancarlo Espinosa',
    contact: '09157978892',
    gender: 'Male'
  },
  {
    id: 3,
    name: 'Moira Espinosa',
    contact: '09157978892',
    gender: 'Female'
  }
]

class index extends Component {
  render() {
    return (
      <Card header='Customer Details'>
        <ToolkitProvider keyField='id' data={products} columns={columns} search>
          {props => (
            <div className='react-bootstrap-table-custom'>
              {/* <SearchBar {...props.searchProps} /> */}
              <BootstrapTable
                {...props.baseProps}
                bordered={false}
                noDataIndication='Looking for customers ...'
              />
            </div>
          )}
        </ToolkitProvider>
      </Card>
    )
  }
}

export default index
