import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faSignOutAlt,
  faFile,
  faUser,
  faPeopleCarry,
  faMoneyBill,
  faWarehouse
} from '@fortawesome/free-solid-svg-icons'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className='navigation'>
      <div className='navigation__overlay'></div>
      <div className='navigation__container'>
        <div className='navigation__user'>
          <Link to='/'>
            <img
              src='https://pbs.twimg.com/profile_images/731462042662494208/lhxjirl-_400x400.jpg'
              alt=''
            />
          </Link>

          <div className='navigation__user-details'>
            <p className='title'>Jeremy Espinosa</p>
            <p className='description'>jeremyespinosa1995@gmail.com</p>
          </div>
        </div>

        <ul className='navigation__list'>
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/stocks/purchase' onClick={toggle}>
              <FontAwesomeIcon icon={faWarehouse} />
              <span>Stocks</span>
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
            <Link to='/orders'>
              <FontAwesomeIcon icon={faMoneyBill} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to='/suppliers'>
              <FontAwesomeIcon icon={faPeopleCarry} />
              <span>Supplier</span>
            </Link>
          </li>
          <li>
            <Link to='/customers'>
              <FontAwesomeIcon icon={faUser} />
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link to='/reports'>
              <FontAwesomeIcon icon={faFile} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to='/logout'>
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Index
