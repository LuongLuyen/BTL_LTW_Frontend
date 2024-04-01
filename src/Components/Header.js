import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { useState,useEffect } from "react";

function Header(props) {
  const [menus,setMenus] = useState(false)
  const [dn,setDn] = useState(false)
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  useEffect(() => {
    const userName = JSON.parse(sessionStorage.getItem('name'))
    const password = JSON.parse(sessionStorage.getItem('pass'))
    if (userName && password) {
     setUserName(userName)
     setPassword(password)
    }
  }, [])
  const checkLogin = ()=>{
    if (userName !== null && password !== null){
      return true
    }
    return false
  }
const clickMennu = ()=>{
  setMenus(!menus)
}
const dangNhap =()=>{
  setDn(!dn)
  sendData()
}
 const sendData = () => {
  props.parentCallback(dn)
}
const logOut = ()=>{
  sessionStorage.clear()
  window.location.href = process.env.REACT_APP_CLIENT
}
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <a className="navbar-brand text-color qr" href="/home">Kết quả học tập sinh viên</a>
        <button className="navbar-toggler r" onClick={()=>clickMennu(menus)} >
          <span className="navbar-toggler-icon"></span>
        </button>
        {menus ? 
          <div className="menu">
          {checkLogin()? 
          <>
          <a href="/thongtin" className="item">Thông tin</a>
          <a href="/home" className="item">Xem điểm</a>
          <span className="item" onClick={()=>logOut()}>Đăng xuất</span>
          </>
          :
          <div className="item" onClick={()=>dangNhap(dn)}>Đăng nhập</div>
          }
          <div className="btnnone" onClick={()=>clickMennu(menus)}>Thoát</div>
        </div>
          :<></>
          }
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-color" href="/home">
                <span className="iconheader">
                <MdHome/>
                </span>
                Trang chủ
              </a>
            </li>
            {checkLogin()? 
            <>
            {password ==="ADMIN"?<>
            <li className="nav-item active">
              <a className="nav-link text-color" href="/admin">
                <span className="iconheader">
                <MdAdminPanelSettings />
                </span>
                Người quản lý
              </a>
            </li>
                      <li className="nav-item active">
                      <a className="nav-link text-color" href="/giangvien">
                        <span className="iconheader">
                        <RiAdminFill />
                        </span>
                        Giảng viên
                      </a>
                    </li>
            
            </>
            :<></>}
            {password ==="GIANGVIEN"?
            <li className="nav-item active">
            <a className="nav-link text-color" href="/giangvien">
              <span className="iconheader">
              <RiAdminFill />
              </span>
              Giảng viên
            </a>
          </li>
            :<></>}
             <li className="nav-item">
              <a className="nav-link text-color" href="/thongtin">
              <span className="iconheader">
                <FaUser/>
                </span>
                Thông tin
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-color" href="/home">
              <span className="iconheader">
                <PiExamFill/>
                </span>
                Xem điểm 
              </a>
            </li>
            </>
            :
            <></>
            }
          </ul>
        </div>
      </nav>
    );
}

export default Header;