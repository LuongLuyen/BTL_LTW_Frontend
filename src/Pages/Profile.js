import Header from "../Components/Header";
import Footer from "../Components/Footer";
function Profile() {
    return ( <>
     <Header/>
          <div className="container-fluid main" style={{ overflowY: "scroll"}}>
            <div className="container">
            <div className="row flex-lg-nowrap">
            <div className="col-12 col-lg-auto mb-3" style={{ width: "200px" }}>
                <div className="card p-3">
                <div className="e-navlist e-navlist--active-bg">
                    <ul className="nav">
                    <li className="nav-item"><a className="nav-link px-2 active" href="/"><i className="fa fa-fw fa-bar-chart mr-1"></i><span>Thông tin</span></a></li>
                    <li className="nav-item"><a className="nav-link px-2" href="/"><i className="fa fa-fw fa-th mr-1"></i><span>Chức năng</span></a></li>
                    <li className="nav-item"><a className="nav-link px-2" href="/"><i className="fa fa-fw fa-cog mr-1"></i><span>Cài đặt</span></a></li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="row">
                <div className="col mb-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="e-profile">
                        <div className="row">
                            <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" style={{ width: "140px" }}>
                                <div className="d-flex justify-content-center align-items-center rounded" style={{height: "140px", backgroundColor: "rgb(233, 236, 239)"}}>
                                <span style={{color: "rgb(166, 168, 170)", font: "bold 8pt Arial"}}>140x140</span>
                                </div>
                            </div>
                            </div>
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Nguyễn Văn A</h4>
                                <p className="mb-0">nguyenvana@gmail.com</p>
                                <div className="text-muted"><small>Cập nhật 2 ngày trước</small></div>
                                <div className="mt-2">
                                <button className="btn btn-primary" type="button">
                                    <i className="fa fa-fw fa-camera"></i>
                                    <span>Thay đổi ảnh đại diện</span>
                                </button>
                                </div>
                            </div>
                            <div className="text-center text-sm-right">
                                <span className="badge badge-secondary">administrator</span>
                                <div className="text-muted"><small>Đã tham gia ngày 09 tháng 12 năm 2017</small></div>
                            </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a href="/" className="active nav-link">Settings</a></li>
                        </ul>
                        <div className="tab-content pt-3">
                            <div className="tab-pane active">
                            <form className="form" novalidate="">
                                <div className="row">
                                <div className="col">
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Họ và tên</label>
                                        <input className="form-control" type="text" name="name" placeholder="Nguyễn Văn A" value="Nguyễn Văn A"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Tài khoản</label>
                                        <input className="form-control" type="text" name="username" placeholder="Nguyễn Văn A" value="Nguyễn Văn A"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="text" placeholder="nguyena2003@example.com"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col mb-3">
                                        <div className="form-group">
                                        <label>About</label>
                                        <textarea className="form-control" rows="5" placeholder="My Bio"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <div className="mb-2"><b>Thay đổi mật khẩu</b></div>
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Mật khẩu hiện tại</label>
                                        <input className="form-control" type="password" placeholder="••••••"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Mật khẩu mới</label>
                                        <input className="form-control" type="password" placeholder="••••••"/>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Nhập lại <span className="d-none d-xl-inline">mật khẩu</span></label>
                                        <input className="form-control" type="password" placeholder="••••••"/></div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                    <div className="mb-2"><b>Giữ liên lạc</b></div>
                                    <div className="row">
                                    <div className="col">
                                        <label>Email Notifications</label>
                                        <div className="custom-controls-stacked px-2">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="notifications-blog" checked=""/>
                                            <label className="custom-control-label" for="notifications-blog">Blog posts</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="notifications-news" checked=""/>
                                            <label className="custom-control-label" for="notifications-news">Newsletter</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="notifications-offers" checked=""/>
                                            <label className="custom-control-label" for="notifications-offers">Personal Offers</label>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-primary" type="submit">Cập nhật</button>
                                </div>
                                </div>
                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mb-3">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="px-xl-3">
                        <button className="btn btn-block btn-secondary">
                            <i className="fa fa-sign-out"></i>
                            <span>Thoát</span>
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-body">
                        <h6 className="card-title font-weight-bold">Hỗ trợ kỷ thuật</h6>
                        <p className="card-text">Liên hệ quản trị viên</p>
                        <button type="button" className="btn btn-primary">Kết nối</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
            </div>
          </div>
          <Footer/>
    </> );
}

export default Profile;