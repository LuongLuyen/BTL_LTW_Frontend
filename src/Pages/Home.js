import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Main from "../Components/Main";
function Home() {
    return ( 
        <>
          <Header/>
          <div className="container-fluid main">
            <div className="content">
              <Main/>
            </div>
            <div className="login">
              <Login/>
            </div>
          </div>
          <Footer/>
        </>
     );
}

export default Home;