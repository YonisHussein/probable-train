import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio() {
    const projects = [
        {
            "id": 1,
            "name": "Text Editor",
            "github": "https://github.com/YonisHussein/goku-saiyan.git"
        },
        {
            "id": 2,
            "name": "Employee Tracker",
            "github": "https://github.com/YonisHussein/chickennoodlesoup.git"
        },
        {
            "id": 3,
            "name": "E-commerce Back End",
            "github": "https:/github.com/YonisHussein/animated-giggle.git"
        }
    ]

    return (<div>
        <h3>Development portfolio: Yonis Hussein</h3>
        <h4>My projects</h4>
        {projects.map(project =>
            <ul key={project.id}>
                <li>Name: {project.name}</li>
                <li>github: <a href={project.github}>link</a></li>
            </ul>
            )}
    </div>
    )

        }
export default Portfolio;
