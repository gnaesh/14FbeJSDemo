import { NameContext,CompContext } from '../App'
import React, { useContext } from 'react';
export default function ComponentE() {

const unm=useContext(NameContext);
const cnm=useContext(CompContext)
  return (
    <div>ComponentE  -  FName : {unm.fn} - LName :{unm.ln}
    - CompName: {cnm}</div>
  )
}