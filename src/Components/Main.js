import '../Assets/Main.css'
import TB from '../Assets/tb.png'
function Main() {
    return ( 
        <div>
            <h1>Thông báo</h1>
            <div>
                <div className="card mb-3 main__content">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={TB} className="img-fluid rounded-start img-custom" alt="/"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 main__content">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={TB} className="img-fluid rounded-start img-custom" alt="/"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Main;