import React from 'react';

import Label from './sharedUI/Label/Label.tsx';

interface ProjectsWrapperProps {
  children: React.ReactNode,
}

const ProjectsWrapper = ({ children }: ProjectsWrapperProps) => (
  <div className='p-10 bg-cyan-500'>
    <Label className='text-3xl font-bold mb-12' content='Projects'/>
    <div className='grid grid-cols-2 gap-60 items-center justify-center'>
      {children}
    </div>
  </div>
);

export default ProjectsWrapper;
