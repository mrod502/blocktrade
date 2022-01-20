import React, { useState, useEffect } from 'react';
import {forEachTxn} from './W3/BlockIterator/BlockIterator'
import MetamaskConnector from './Components/MetamaskConnector/MetamaskConnector'
import {
  Transaction,
} from 'web3-eth';
import {AbiItem} from 'web3-utils'
import './App.css';
import { useMetaMask } from 'metamask-react';
import Balance from './Components/Balance/Balance'
import { Grid } from '@material-ui/core';
import Web3 from 'web3';
import Tile from './Components/Utils/Tile';
import ABI, {decodeMethod} from './W3/Tokens/erc20/ABI';
import { stringify } from 'querystring';

const baseUnit:number = 1000000000000000000;
function App() {
  const metamask = useMetaMask()
  const web3 = new Web3('http://192.168.50.115:33333/ext/bc/C/rpc')
  const [txnUri, setTxnUri] = useState<string>("")
  const [balance, setBalance] = useState<number>(0)
  const [txns, setTxns] = useState<Set<Transaction>>(new Set())
  useEffect(() => {
    console.log(metamask.account)
    if (metamask.account != null){
      if (txns.size >0){

        let text = JSON.stringify(Array.from(txns))
        let b = new Blob([text],{type:"text/plain"})
        let textFile = window.URL.createObjectURL(b);
        setTxnUri(textFile)
      }
      var xx = new Map<string,any>()

      console.log('encoded transfer:', web3.eth.abi.encodeFunctionSignature('transfer(address,uint256)'))

      console.log(JSON.stringify(Object.fromEntries(xx)))

      
      forEachTxn(web3, txn => setTxns(txns.add(txn)))
      console.log("txns:",Array.from(txns))
      txns.forEach(txn =>{
        console.log('method:',decodeMethod(txn.input))
      })
      web3.eth.getBalance(metamask.account).then( value =>{
        console.log('account balance',value)
        setBalance(+value/baseUnit)
      }, reason => console.warn('oops',reason))
    }
  }, [metamask])
  return (
    <div className="App">
      <a href={txnUri}>download</a>
      <header className="App-header">
        <MetamaskConnector/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Grid container xs={12} spacing={3} alignContent='center'>
          <Balance
          Balance={balance}
          Symbol='AVAX'
          ></Balance>
        </Grid>
      </header>
    </div>
  );
}

export default App;
