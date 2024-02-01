import '../Assets/Point.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
function Point() {
    const [listPoint, setListPoint] = useState([])
    useEffect(() => {
      const maSV = JSON.parse(sessionStorage.getItem('pass'))
      axios.post(`${process.env.REACT_APP_SERVER}/api/point`,{maSV})
        .then((response) => {
            setListPoint(response.data)
        })
    }, []) 
    return ( 
        <>
            <h4>Học kỳ 2 Năm học 2021-2022</h4>
            <table>
                <tbody>

                    <tr>
                        <th className='td'>STT</th>
                        <th className='td'>Mã MH</th>
                        <th className='td'>Nhóm HP</th>
                        <th className='td'>Tên Môn học</th>
                        <th className='td'>Số tín</th>
                        <th className='td'>Điểm thi</th>
                        <th className='td'>Điểm TK(10)</th>
                        <th className='td'>Điểm TK(4)</th>
                        <th className='td'>Điểm TK(C)</th>
                        <th className='td'>Kết quả</th>
                    </tr>
                    {Array.from(listPoint).map((i,index)=>(
                            <tr key={index+1}>
                                <td>{index}</td>
                                <td>{i[0].maMonHoc}</td>
                                <td>{i[0].nhomHocPhan}</td>
                                <td>{i[1].tenMonHoc}</td>
                                <td>{i[1].soTin}</td>
                                <td>{i[0].diemThiCuoiKy}</td>
                                <td>{i[0].diemTongKetHe10}</td>
                                <td>{i[2].diemTongKetHe4}</td>
                                <td>{i[0].diemBangChu}</td>
                                <td>{i[2].trangThai}</td>
                            </tr>
                    ))}
                </tbody>
        </table>
        <div className='fpoint'>
            <div>
                <div>- Điểm trung bình học kỳ hệ 4:</div>
                <div>- Điểm trung bình học kỳ hệ 10:	</div>
                <div>- Số tín chỉ đạt học kỳ:</div>
            </div>
            <div>
                <div>- Điểm trung bình tích lũy hệ 4:	</div>
                <div>- Điểm trung bình tích lũy hệ 10:	</div>
                <div>- Số tín chỉ tích lũy:</div>
            </div>
        </div>
        </>
     );
}

export default Point;