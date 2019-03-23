import React from 'react'
import Modal from 'react-modal'

export const OptionModal = (props) => (

  <Modal
    isOpen={props.showModal}
    contentLabel="Confirm deletion"
    ariaHideApp={false}
    className='modal'
  >
    <div>
      <p>Do you want to delete this expense?</p>
      <button className="button-blue button-github" onClick={props.onRemove}>Remove Expense</button>
      <button className="button-blue button-github" onClick={props.handleCloseModal}>Close</button>
    </div>
  </Modal>
)