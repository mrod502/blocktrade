import TransactionProps from "../Transaction/TransactionProps";


export default class {

  address:string;
  constructor(address:string){
    this.address = address
  }


  getHistory = (tokenAddress:string):TransactionProps[]=>{

    return []
  }
}