import React from 'react'
import { useNavigate , useParams} from 'react-router-dom'
export default function ShowUpdateEmpPage() {
    let navigate=useNavigate();
    let {idd}=useParams();
    console.log(idd);
  return (
    <div>THis is update Emp Page -{idd}
    </div>
  )
}
