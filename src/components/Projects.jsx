import React from 'react'
import ProjectItem from './ProjectItem'
import apiNetflixImg from '../assets/projects/apiNetflix.png'
import djacketsImg from '../assets/projects/djackets.png'
import netflixCloneImg from '../assets/projects/netflixClone.png'
import socialBookImg from '../assets/projects/socialBook.png'
import jsonImg from '../assets/projects/json.png'
import spaceInvaderImg from '../assets/projects/spaceInvader.png'
import taskManagerImg from '../assets/projects/taskManager.png'
import chrisBlogImg from '../assets/projects/chrisBlog.png'
import shoppingAppImg from '../assets/projects/shoppingApp.png'
import doomImg from '../assets/projects/doom.png'
import eyeControlImg from '../assets/projects/eyeControl.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            A Small fraction of projects I have completed.  
        </p>
        <div className='grid sm:grid-cols-3 gap-6'>
            <ProjectItem img={apiNetflixImg} title='Netflix Clone API App' lang="React Js"/>
            <ProjectItem img={djacketsImg} title='Djackets Ecommerce App' lang="Django"/>
            <ProjectItem img={netflixCloneImg} title='Netflix Clone App' lang="React Js"/>
            <ProjectItem img={socialBookImg} title='Social Book App' lang="Django"/>
            <ProjectItem img={jsonImg} title='Convert Json to CSV App' lang="Python"/>
            <ProjectItem img={spaceInvaderImg} title='Python Space Invader Game' lang="Python"/>
            <ProjectItem img={taskManagerImg} title='Django DRF Task Manager' lang="Django"/>
            <ProjectItem img={chrisBlogImg} title='Django with Bootstrap Blog' lang="Django/Bootstrap"/>
            <ProjectItem img={shoppingAppImg} title='Mobile app' lang="React Native"/>
            <ProjectItem img={doomImg} title='Python Doom Game' lang="Python"/>
            <ProjectItem img={eyeControlImg} title='Python Eye control mouse' lang="Python"/>
        </div>
    </div>
  )
}

export default Projects