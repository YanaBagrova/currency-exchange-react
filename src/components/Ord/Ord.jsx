import React from 'react';

const Ord = React.memo(function Ord({order}) {

  const { chosenCurrency } = order
  const { rate } = order
  const { volume } = order
  const { timestamp } = order
  const { kindPrice } = order

  return (
      <div style={{height: "33px", border: "1px solid lightgray", display: "flex", flexDirection: "row", 
      textAlign: "center", justifyContent: "space-evenly", paddingTop: "17px", fontSize: "19px"}} className="orderlist">
        <div style={{marginLeft: "-15px"}}>{kindPrice}</div>
      <div style={{verticalAlign: "middle", marginLeft: "-20px"}}>{rate}</div>
      <div>{chosenCurrency}</div>
      <div style={{width: "30px", marginRight: "-50px"}}>{volume}</div>
      <div style={{width: "250px", marginRight: "-90px"}}>{timestamp}</div>
    </div>
  );
})

export default Ord;
