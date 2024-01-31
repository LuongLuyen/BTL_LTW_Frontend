import '../Assets/Profile.css'
import Avt from '../Assets/avt.jpg'
import { FaFacebookF,FaTwitter,FaLinkedinIn ,FaGithub } from "react-icons/fa";
function Profile() {
    return ( 
        <div class="cardp">
        <img src={Avt} alt="John" style={{width:"50%",margin:"10px",borderRadius: "100px", border: "solid 1px #333"}}/>
        <h2>Nguyễn Văn A</h2>
        <p class="title">D21CQCN12-B</p>
        <p>B21DCCN123</p>
        <a className='iconP' href="/"><FaFacebookF/></a>
        <a className='iconP' href="/"><FaTwitter/></a>
        <a className='iconP' href="/"><FaGithub/></a>
        <a className='iconP' href="/"><FaLinkedinIn/></a>
        <p><button>Hồ sơ</button></p>
        <p><button>Đăng xuất</button></p>
      </div>
    );
}

export default Profile;