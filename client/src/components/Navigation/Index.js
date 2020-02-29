import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'reactstrap'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <ul className='navigation__list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/stocks' onClick={toggle}>
              Stocks
            </Link>
            <Collapse isOpen={isOpen}>
              <ul className='list'>
                <li>
                  <Link to='/stocks/purchase'>Purchase</Link>
                </li>
                <li>
                  <Link to='/stocks/available'>Available</Link>
                </li>
                <li>
                  <Link to='/stocks/item'>Item</Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to='/orders'>Orders</Link>
          </li>
          <li>
            <Link to='/suppliers'>Supplier</Link>
          </li>
          <li>
            <Link to='/customers'>Customers</Link>
          </li>
          <li>
            <Link to='/reports'>Reports</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Index
