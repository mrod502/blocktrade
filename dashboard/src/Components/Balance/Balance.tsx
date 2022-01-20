import Tile from "../Utils/Tile"
import BalanceProps from "./BalanceProps"

export default ({Balance, Symbol, ContractAddress }:BalanceProps) =>{
  return (
    <Tile>
      <span>Symbol:{Symbol}{ContractAddress ? `(${ContractAddress})`:""}</span>
      <br/>
      <span>Balance:{Balance}</span>
      

    </Tile>
  )
}