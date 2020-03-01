import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const Index = props => {
  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    </div>
  )
}

export default Index
