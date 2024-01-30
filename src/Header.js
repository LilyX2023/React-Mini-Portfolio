// the component function
const Header = (props) => {

    //The Components Returned JSX
    return <div className="Header"> 
    <h1>Portfolio</h1>
    <nav>
        <ul id="primary-navigation" class="primary-navigation flex">
            <li class= 'gitHub'>
                <a href="https://github.com/LilyX2023">
                    <h3>gitHub <i class="fa-brands fa-github"></i></h3>
                </a>
            </li>
            <li class="linkedIn">
                <a href="https://www.linkedin.com/in/rachelyang00/"> 
                    <h3>linkedIn <i class="fa-brands fa-linkedin"></i></h3>
                </a>

            </li>
        </ul>
    </nav>
    </div>
}

// export the component
export default Header