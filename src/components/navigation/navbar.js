import React,{Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/navbar.css'
// import Logout from '../auth/logout'
// import Searchbar from './searchbar'


// function updateNavbar(){
//     if(localStorage.getItem('token') != null){
//         this.setState({auth : true}); 
//     }
//     else{
//         this.setState({auth : false});
//     }
// }

export class Navbar extends Component{ 
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         auth : false,
    //         update : updateNavbar.bind(this),
    //     };
    // }

    // componentDidMount(){
    //     if(localStorage.getItem('token') != null){
    //         this.setState({auth : true}); 
    //     }
    //     else{
    //         this.setState({auth : false});
    //     }
    // }

    // componentDidUpdate(){
    //     if(localStorage.getItem('token') != null){
    //         if(!this.state.auth)
    //         this.setState({auth : true}); 
    //     }
    //     else{
    //         if(this.state.auth){
    //             this.setState({auth : false});
    //         }
    //     }
    // }

    render(){
        // console.log("Nav: " + this.state.update)
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                {/* <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-right" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    </ul>
                </div> */}
                </nav>
        
        )}

    // _search = async tagName => {
    //     console.log(this.props)
    // }

    // _changeAuthStatus = () =>{
    //     this.setState(this.state.isAuthenticated = true)
    //     console.log("incAS")
    //     console.log(this.state.isAuthenticated)
    // }

}
export default Navbar
