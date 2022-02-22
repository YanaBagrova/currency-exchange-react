import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';
import './Select.scss'


function Select(props) {
  const allCurrenciesArr = ['USD/EUR', 'USD/RUB', 'USD/CAD']
  const [value, setValue] = useState('')
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
    const ratesFullInfo = []
    for (let i = 0; i < allCurrenciesArr.length; i++) {
        let sell = { kind: "SELL", currency: allCurrenciesArr[i], rate: result[i * 2] }
        let buy = { kind: "BUY", currency: allCurrenciesArr[i], rate: result[i * 2 + 1] }
        ratesFullInfo.push(sell)
        ratesFullInfo.push(buy)
    }
    setRatesFullInfo(ratesFullInfo)
  }

  function selectHandler(event) {
    setValue(event.target.value);
    let chosen = event.target.options[event.target.selectedIndex].value
    setChosenCurrency(chosen)
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
        <select value={value} onChange={selectHandler} name="" id="" className="select">
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
