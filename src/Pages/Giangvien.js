import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Assets/Admin.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
function Giangvien() {
  const [data, setData] = useState([])
  const [maLop, setMaMon] = useState("D21CQCN01-B")
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/api/user/${maLop}`)
    .then((response) => {
          setData(response.data)
      })
  }, [maLop]) 

    return ( 
        <div>
          <Header/>
          <div className="admin">
          <div className="admin_filter">
          <span className="admin_name" >Lọc theo lớp:</span>
            <select onChange={(e)=>setMaMon(e.target.value)} name="mon" id="mon">
            <option value="D21CQCN01-B">B21DCCN01-B</option>
            <option value="D21CQCN02-B">B21DCCN02-B</option>
            <option value="D21CQCN03-B">D21CQCN03-B</option>
            <option value="D21CQCN04-B">D21CQCN04-B</option>
            <option value="D21CQCN05-B">D21CQCN05-B</option>
            <option value="D21CQCN06-B">D21CQCN06-B</option>
            <option value="D21CQCN07-B">D21CQCN07-B</option>
            <option value="D21CQCN08-B">D21CQCN08-B</option>
            <option value="D21CQCN09-B">D21CQCN09-B</option>
            <option value="D21CQCN10-B">D21CQCN10-B</option>
            <option value="D21CQCN11-B">D21CQCN11-B</option>
            <option value="D21CQCN12-B">D21CQCN12-B</option>
            </select>
          </div>
          <table>
                <tbody>
                    <tr>
                        <th className='td'>STT</th>
                        <th className='td'>Mã SV</th>
                        <th className='td'>Mã lớp</th>
                        <th className='td'>Họ</th>
                        <th className='td'>Tên</th>
                    </tr>  
                    {Array.from(data).map((i,index)=>(        
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{i.maSinhVien}</td>
                          <td>{i.maLop}</td>
                          <td>{i.ho}</td>
                          <td>{i.ten}</td>
                      </tr>
                       ))}
                </tbody>
        </table>
          </div>
          <Footer/>
        </div>
     );
}

export default Giangvien;