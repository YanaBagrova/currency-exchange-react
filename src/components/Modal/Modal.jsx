import React from 'react';
import Input from '../Input/Input'
import './Modal.scss'

function Modal({ isOpen, rate, isSellSelectedForModal, chosenCurrency }) {
  const kindPrice = isSellSelectedForModal ? 'SELL' : 'BUY'

  return (
    <div className="modal">
      <p className="title">Make order</p>
      <div style={{ marginBottom: "15px" }}>
        <p className="sell-buy">{kindPrice}</p><p className="currency-info">{rate} {chosenCurrency}</p>
      </div>
      <Input rate={rate} kindPrice={kindPrice} chosenCurrency={chosenCurrency}/>
      <button type="button" className="modal-close" onClick={() => isOpen(false)}>Cancel</button>
    </div>
  );
}

export default Modal;
