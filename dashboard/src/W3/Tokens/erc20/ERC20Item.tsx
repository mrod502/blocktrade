import React from 'react';
import IERC20ItemProps from './IERC20ItemProps'
import ABI from './ABI'
import Web3 from 'web3'


const decodeFunctionCall = (input:string, w3:Web3):any =>{
  
  let decodedName = w3.eth.abi.decodeParameter('string',input.slice(0,10))

  return null
}
export default ({blockHash,blockNumber, input}:IERC20ItemProps) =>{

  return (
    <div></div>
  )
}