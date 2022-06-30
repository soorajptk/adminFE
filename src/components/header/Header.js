import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {LOGOUT} from '../../redux/auth/AuthAction'
function Header() {
    const history=useHistory()
    const dispatch=useDispatch()
    const handleLogout=()=>{
        history.push('/')
        dispatch(LOGOUT())
    }
    return (
    <div>
            <button onClick={handleLogout}>logout</button>
            <button onClick={()=>history.push('/addproduct')}>addProduct</button>
    </div>
  )
}

export default Header