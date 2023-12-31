import "./navbar.css"
import ProfileIcon from '../Icons/profile-circle-svgrepo-com.svg'
const Navbar =()=>{
    return(

    <nav class="navbar">
        <a href="/">Home</a>
        <a href="/analytics">View Analytics</a>
        <a href="/help">FAQs</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/profile"><img src={ProfileIcon} alt="logo.png" className="w-[20px] md:w-[30px]"/></a>
    </nav>
    )
}
export default Navbar;