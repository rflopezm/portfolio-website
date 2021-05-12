import React from 'react';
import Project from './Project';

export default function ProjectGrid({ projects }) {
    return <div className="flex flex-col md:flex-row w-full px-10 md:px-10w flex-wrap justify-center items-stretch md:justify-start">
        {projects.map(project => <Project key={project.id} {...project}></Project>)}
    </div>
}