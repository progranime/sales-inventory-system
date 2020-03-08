import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'

import { Card } from '../../UI'

const index = ({ data, columns }) => {
  return (
    <Card header='Supplier Details'>
      <ToolkitProvider keyField='id' data={data} columns={columns} search>
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

export default index
