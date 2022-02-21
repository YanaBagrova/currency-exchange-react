import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './Input.scss'

function Input({ rate, kindPrice, chosenCurrency }) {

  const [volume, setVolume] = useState('')

  const requests = useSelector((state) => state.requestsReducer.requests)

  const dispatch = useDispatch()


  function addRequest() {
    if (volume) {
    const timestamp = new Date()
    dispatch({type: 'ADD_REQUEST', payload: {kindPrice, rate, volume, timestamp, chosenCurrency}})
    }
  }

  function watchRequests(event) {
    event.target = '_blank'
    window.open('/requests')
    localStorage.setItem('orders', JSON.stringify(requests))
  }

  return (
    <>
      <p style={{display: 'inline', verticalAlign: "bottom", fontSize: "30px"}}>Volume</p>
      <input className="class-input"
        onChange={({ target }) => setVolume(target.value)}
        value={volume}
        placeholder='Your text!' />
        <button className="ok-button" onClick={addRequest}>OK</button>
        <Link to={`/requests`}>
        <button className="watch-button" onClick={watchRequests}>Watch requests</button>
        {/* <button onClick={localStorage.clear()}>clear</button> */}
        </Link>
    </>
  );
}

export default Input;
