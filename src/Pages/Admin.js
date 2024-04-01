import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Assets/Admin.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
function Admin() {
  const [data, setData] = useState([])
  const [maMon, setMaMon] = useState("BAS1107")
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/api/diem/${maMon}`)
      .then((response) => {
          setData(response.data)
      })
  }, [maMon]) 

    return ( 
        <div>
          <Header/>
          <div className="admin">
          <div className="admin_filter">
          <span className="admin_name" >Lọc theo môn:</span>
            <select onChange={(e)=>setMaMon(e.target.value)} name="mon" id="mon">
              <option value="BAS1107">Giáo dục thể chất 2</option>
              <option value="BAS1151">Kinh tế chính trị Mác- Lênin</option>
              <option value="BAS1204">Giải tích 2</option>
              <option value="BAS1224">Vật lý 1 và thí nghiệm</option>
              <option value="ELE1433">Kỹ thuật số</option>
              <option value="INT1155">Tin học cơ sở 2</option>
            </select>
          </div>
          <table>
                <tbody>
                    <tr>
                        <th className='td'>STT</th>
                        <th className='td'>Mã SV</th>
                        <th className='td'>Mã MH</th>
                        <th className='td'>Nhóm HP</th>
                        <th className='td'>Bài tập lớn</th>
                        <th className='td'>Thi giữa kỳ</th>
                        <th className='td'>Điểm thực hành</th>
                        <th className='td'>Điểm CC</th>
                        <th className='td'>Thi cuối kỳ</th>
                        <th className='td'>Điểm (10)</th>
                        <th className='td'>Điểm (C)</th>
                    </tr>  
                    {Array.from(data).map((i,index)=>(        
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{i.maSinhVien}</td>
                          <td>{i.maMonHoc}</td>
                          <td>{i.nhomHocPhan}</td>
                          <td>{i.diemBaiTapLon}</td>
                          <td>{i.diemThiGiuaKy}</td>
                          <td>{i.diemThucHanh}</td>
                          <td>{i.diemChuyenCan}</td>
                          <td>{i.diemThiCuoiKy}</td>
                          <td>{i.diemTongKetHe10}</td>
                          <td>{i.diemBangChu}</td>
                      </tr>
                       ))}
                </tbody>
        </table>
          </div>
          <Footer/>
        </div>
     );
}

export default Admin;