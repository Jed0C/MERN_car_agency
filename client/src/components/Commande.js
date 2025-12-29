import React from 'react'
import { useSelector } from 'react-redux';

function Commande() {

    const commande=useSelector((state)=>state.commande.commandelist);
  return (
    <div>Commande</div>
  )
}

export default Commande