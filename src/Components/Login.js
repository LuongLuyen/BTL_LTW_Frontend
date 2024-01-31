import '../Assets/Login.css'
function Login() {
    return ( 
        <form>
        <div className="container">
          <label htmlFor="uname"><b>Tai khoản</b></label>
          <input type="text" placeholder="Họ và tên" name="uname"  required />
  
          <label htmlFor="psw"><b>Mật khẩu</b></label>
          <input type="password" placeholder="Mã sinh viên" name="psw" required />
  
          <button type="submit">Đăng nhập</button>
          <label>
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
        </div>
        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Quên <a href="/">mật khẩu?</a></span>
        </div>
      </form>
     );
}

export default Login;