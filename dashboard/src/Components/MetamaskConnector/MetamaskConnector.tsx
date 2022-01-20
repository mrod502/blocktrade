import { useMetaMask } from 'metamask-react';
import React from 'react';
import MetamaskConnectorProps from './MetamaskConnectorProps'

const ButtonText = ({connectionState,address}:{connectionState:string,address:string}) =>{
  let text = "" 
  switch (connectionState){
    case "initializing":
      text = "initializing...."
      break;
    case "unavailable":
      text = "metamask not available"
      break;
    case "notConnected":
      text = "connect to metamask"
      break;
    case "connecting":
      text = "connecting..."
      break;
    case "connected":
      text = address.slice(0,5) + "..." + address.slice(address.length - 4)
      break;
  }
return (
  <p style={{color: "#FF99FF"}}>{text}</p>
)
}

const shouldDisable = (state:string):boolean =>{

  return state !== "notConnected"
}

export default ({}:MetamaskConnectorProps):React.ReactElement =>{
  const {status, connect, account} = useMetaMask()

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgb(36, 38, 76)",
      borderRadius: 12,
      whiteSpace: "nowrap",
      width: "fit-content",
      cursor: "pointer",
      pointerEvents: "auto"}
    }>
      <button style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgb(36, 38, 76)",
        borderRadius: 12,
        whiteSpace: "nowrap",
        width: "fit-content",
        cursor: "pointer"}}
        onClick={connect}
        disabled={shouldDisable(status)}
      >
        <ButtonText address={account ? account : ""} connectionState={status}/>
      </button>
    </div>
  )
}