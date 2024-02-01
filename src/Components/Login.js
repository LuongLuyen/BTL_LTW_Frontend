import { useState,useEffect } from 'react';
import '../Assets/Login.css'
import axios from 'axios'
function Login() {
  const [userName,setUserName]=useState(null)
  const [password,setPassword]=useState(null)

  useEffect(() => {
    if( userName !== null && password !== null){
        sessionStorage.setItem('name', JSON.stringify(userName))
        sessionStorage.setItem('pass', JSON.stringify(password))
    }
  }, [userName,password])
  const HoTen = (input)=>{
    const words = input.split(" ")
    if (words.length >= 2) {
        const ho = words.slice(0, -1).join(" ")
        const ten = words[words.length - 1]
        return [ho, ten]
    } else {
        return [input, ""]
    }
  }
  const Authentication = async()=> {
    const [ho, ten] = HoTen(userName)
    if(userName ==="" || password === ""){
        alert("Vui lòng kiểm tra lại tài khoản mật khẩu")
        return null
    }
    try{
        const res = await axios.post(`${process.env.REACT_APP_SERVER}/api/user1`, {ho, ten,password})
        const dataDB = res.data
        const name =dataDB.ho +" "+dataDB.ten
        if(name === userName && dataDB.maSinhVien === password){
            sessionStorage.setItem('class', JSON.stringify(dataDB.maLop))
            window.location.href = `${process.env.REACT_APP_CLIENT}/home`
        }else {
            alert("Vui lòng kiểm tra lại tài khoản mật khẩu")
            return null
        }
    }catch(err){
        alert("Vui lòng kiểm tra lại tài khoản mật khẩu")
        return null
    }
  }
    return ( 
        <>
        <div className="container">
          <label htmlFor="uname"><b>Tai khoản</b></label>
          <input type="text" placeholder="Họ và tên: (Nguyễn Văn A)" onChange={(e)=>setUserName(e.target.value)}/>
  
          <label htmlFor="psw"><b>Mật khẩu</b></label>
          <input type="password" placeholder="Mã sinh viên:(B21DCCN001)" onChange={(e)=>setPassword(e.target.value)}/>
  
          <button onClick={Authentication}>Đăng nhập</button>
          <label>
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
        </div>
        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Quên mật khẩu?</span>
        </div>
      </>
     );
}

export default Login;