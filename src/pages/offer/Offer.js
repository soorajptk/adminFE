import React,{useRef} from 'react'
import {useParams,useHistory}from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addoffer } from '../../apiCalls/apiCalls'
function Offer() {
    const {id}=useParams()
    const dispatch=useDispatch()
    const history=useHistory()
    const date=useRef()
    const discount=useRef()
    const handlesubmit=(e)=>{
        e.preventDefault()
        let data={Date:date.current.value,discount:discount.current.value,product_id:id}
        dispatch(addoffer(data))
        history.push('/')
    }
  return (
    <div className='offerpages'>
        <form className='offerpage' onSubmit={(e)=>handlesubmit(e)}>
            <label htmlFor='date'>Offer Date</label>
            <input id='date' ref={date}  type={"date"}/>
             <label htmlFor='date'>discount in percentage</label>
            <input id='date' ref={discount}/>
            <button>add offer</button>
        </form>
    </div>
  )
}

export default Offer