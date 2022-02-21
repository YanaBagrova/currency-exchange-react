import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';
import './Select.scss'


function Select(props) {
  const [modal, setModal] = useState(false)
  const [isSellSelectedForModal, setIsSellSelectedForModal] = useState(true)
  const [chosenCurrency, setChosenCurrency] = useState('')
  const [ratesFullInfo, setRatesFullInfo] = useState([])
  const [sell, setSell] = useState('')
  const [buy, setBuy] = useState('')
  const [modalRate, setModalRate] = useState('')

  useEffect(() => {
    makeRates()
  }, [])

  useEffect(() => setTimeout(makeRates, 1000 * 5), [ratesFullInfo])

  useEffect(() => { setModalRate(isSellSelectedForModal ? sell : buy) },
    [chosenCurrency, isSellSelectedForModal, buy, sell, ratesFullInfo])

  useEffect(() => {
    setSell(ratesFullInfo.find((el) => el.currency === chosenCurrency && el.kind === 'SELL')?.rate)
    setBuy(ratesFullInfo.find((el) => el.currency === chosenCurrency && el.kind === 'BUY')?.rate)
  }, [ratesFullInfo, chosenCurrency])

  function makeRates() {
    let result = []
    for (let i = 0; i < 6; i++) {
      let rate = (Math.random() * 10).toFixed(4)
      result.push(rate)
    }
    const ratesFullInfo = [
      { kind: "SELL", currency: "USD/EUR", rate: result[0] },
      { kind: "BUY", currency: "USD/EUR", rate: result[1] },
      { kind: "SELL", currency: "USD/RUB", rate: result[2] },
      { kind: "BUY", currency: "USD/RUB", rate: result[3] },
      { kind: "SELL", currency: "USD/CAD", rate: result[4] },
      { kind: "BUY", currency: "USD/CAD", rate: result[5] },
    ]
    console.log(ratesFullInfo)
    setRatesFullInfo(ratesFullInfo)
  }

  function selectHandler(event) {
    let chosen = event.target.options[event.target.selectedIndex].value
    setChosenCurrency(chosen)
    setSell(ratesFullInfo.find((el) => el.currency === chosen && el.kind === 'SELL').rate)
    setBuy(ratesFullInfo.find((el) => el.currency === chosen && el.kind === 'BUY').rate)
  }

  function openModal(type) {
    if (type === 'SELL') {
      setIsSellSelectedForModal(true)
    } else {
      setIsSellSelectedForModal(false)
    }
    setModal(!modal)
  }

  return (
    <>
      <div>
        <select onChange={selectHandler} name="" id="" className="select">
          {ratesFullInfo
            .filter((el) => el.kind === "SELL")
            .map((el) => <option key={uuidv4()} value={el.currency}>{el.currency}</option>)}
        </select>
      </div>
      <div className="show-chosen-currency-outer-div">
        {sell && <div onClick={() => openModal('SELL')} className="show-sell">SELL {sell}</div>}
        {buy && <div onClick={() => openModal('BUY')} className="show-buy">BUY {buy}</div>}
        {modal && <Modal
          isOpen={setModal}
          rate={modalRate}
          chosenCurrency={chosenCurrency}
          isSellSelectedForModal={isSellSelectedForModal} />}
      </div>
    </>
  );
}

export default Select;
