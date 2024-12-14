import './Header.css'
import logo from '../../Media/logo.png'
function Header(){
    return(
        <div>
            <p className='header'>
             <ul>
                <li>HOME</li>
                <li>TRAINING COURSES</li>
                <li>PLACEMENTS</li>
                <li>REVIEWS</li>
                <li>BRANCHES</li>
                <li>GALLERY</li>
                <li>CERTIFICATIONS</li>
                <li>CAREERS</li>
                <li>CONTACT US</li>
             </ul>
            </p>
            <p className='logo'>
                <img src={logo} alt='logo'/>

            </p>
        </div>
        
    );
}
export default Header;