const Footer = (props) => {

    //The Components Returned JSX
    return <div className="Footer"> 
    <div class="socialIcons">
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href=""><i class="fa-brands fa-google-plus"></i></a>
        <a href=""><i class="fa-brands fa-youtube"></i></a>
    </div>
    <div class="footerNav">
        <ul>
            <li><a href ="">Home</a></li>
            <li><a href ="">About</a></li>
            <li><a href ="">Contact Us</a></li>
            <li><a href ="">Our Team</a></li>
        </ul>
    </div>
    <div class='footerBottom'>
        <p>Copyright &Copy;2024; Designed by <span class="designer">Rachel</span></p>

    </div>
    </div>



}

// export the component
export default Footer