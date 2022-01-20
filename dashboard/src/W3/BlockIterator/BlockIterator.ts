import Web3 from 'web3'
import {
  BlockTransactionString,
  Transaction,
} from 'web3-eth'


export const forEachBlock = (web3:Web3, callback:(blk:BlockTransactionString)=>void) => {
  web3.eth.getBlockNumber().then(numblocks => {
    for (let i=0;i<numblocks;i++){
      web3.eth.getBlock(i).then(callback).catch(console.warn)
    }
  }).catch(console.warn)
}

export const forEachTxn = (web3:Web3, callback:(txn:Transaction)=>void) =>{
  forEachBlock(web3,block =>{
    block.transactions.forEach(txnId =>{
      web3.eth.getTransaction(txnId).then(callback).catch(console.warn)
    })
  })
}


export default class {

  _w3:Web3
  constructor(w3:Web3){
    this._w3 = w3

  }

  next = ():boolean=>{
    return false
  }


  forEachBlock = (callback:any) =>{
    
  }
}