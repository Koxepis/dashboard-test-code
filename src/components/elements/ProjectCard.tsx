import React from 'react'
interface Props{
  children:any
}

const ProjectCard:React.FC<Props> = (props) => {
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Pinned Projects
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 2xl:grid-cols-4 mt-3">
          {props.children}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
