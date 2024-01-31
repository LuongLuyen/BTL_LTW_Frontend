import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";

function Header() {
const checkLogin = ()=>{
  const status = false
  if(status === true){
    return true
  }
  return false
}
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <a className="navbar-brand text-color" href="/">Quản lý sinh viên</a>
        <button className="navbar-toggler r" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-color" href="/">
                <span className="iconheader">
                <MdHome/>
                </span>
                Trang chủ
              </a>
            </li>
            {checkLogin()? 
            <>
             <li className="nav-item">
              <a className="nav-link text-color" href="/">
              <span className="iconheader">
                <FaUser/>
                </span>
                Thông tin
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-color" href="/">
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