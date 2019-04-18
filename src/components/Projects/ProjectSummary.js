import React from 'react'

//rainbow HOC
import Rainbow from '../../hoc/Rainbow'

const ProjectSummary = () => {
    return (
        
            <div className='card z-depth-0 project-summary'>
                <div className='card-content'>
                    <span className='card-title'>Project Title</span>
                    <p>Test1</p>
                    <p className>April 18th</p>
                </div>
            </div>
        
    )
}

export default Rainbow(ProjectSummary)