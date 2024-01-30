const Projects = (props) => {

    //The Components Returned JSX
    return <div className="Projects">
    <div class='card1'>
        <div class = 'project-sidebar'>
            <img src='https://thumbs.dreamstime.com/b/museum-logo-trendy-minimal-linear-style-vector-icon-bank-building-columns-simple-emblem-university-isolated-177740902.jpg' alt=""/>

            <a href="https://github.com/LilyX2023/sealproject1"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class = 'project-main'>
        <h2 class="project-name">ArtWalk</h2>
        <p class="project-description"> An app can retrieve the information of the art galleries that are in the Harvard Art Museums building on each floor. </p> 
        </div>

    </div>
    <div class='card2'>
        <div class = 'project-sidebar'>
            <img src='https://static.vecteezy.com/system/resources/previews/014/662/247/non_2x/job-search-line-icon-vector.jpg' alt=""/>

            <a href="https://github.com/LilyX2023/project2"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class = 'project-main'>
        <h2 class="project-name">CareerCanvas</h2>
        <p class="project-description"> An app to help users to document their job searching process. Users will be able to create, update, and delete the positions they applied for. </p> 
        </div>

    </div>
    </div>
}

// export the component
export default Projects