
import React from "react";
import Landing from "../landing/landing";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import "./App.css";
import Chal from "../chall/chllenge-section";
class App extends React.Component{
    render(){
        return <div className='app'>
            <Nav/>
            <Landing/>
            <Chal/>
            <Footer/>
        </div>;
    }
}
export default App;