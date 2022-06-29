import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
  const navigate = useNavigate();

  const goLoginPage = () => {
    navigate('/login')
  }

  return (
    <div>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <div onClick={goLoginPage}>로그인</div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/3e17273b-330d-4466-b158-d302aaa27d43'></img>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text"></input>
        </div>
      </div>
    </div>
  )
}

export default Navbar
