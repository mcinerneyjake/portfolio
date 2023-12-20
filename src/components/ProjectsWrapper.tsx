import React from 'react';

import Label from './sharedUI/Label/Label.tsx';

interface ProjectsWrapperProps {
  children: React.ReactNode,
}

const ProjectsWrapper = ({ children }: ProjectsWrapperProps) => (
  <div className='p-10 bg-cyan-500'>
    <Label className='flex mb-14 items-center justify-center text-3xl font-bold' content='Projects'/>
    <div className='grid grid-cols-2 h-auto w-auto gap-60 items-stretch justify-evenly'>
      {children}
    </div>
  </div>
);

export default ProjectsWrapper;
