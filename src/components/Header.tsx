import LoginDialog from "./LoginDialog";
import SignUpDialog from "./SignUpDialog";
import logo from "../assets/img/map.png";


const Header = () =>

    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Эх, прокачу</h1>
        <div className="LogIn" >
            <LoginDialog />
            <span className="Dialog"><SignUpDialog /></span>



        </div>

    </header>

export default Header;
