import Header from './components/Header.tsx';
import ProjectsWrapper from './components/ProjectsWrapper.tsx';

import Counter from './components/projects/Counter.tsx';
import TicTacToe from './components/projects/TicTacToe/TicTacToe.tsx';

import Label from './components/sharedUI/Label/Label.tsx';

import './App.css';

const labelLayout = 'text-3xl font-bold h-10 w-60 mb-8';

const App = () => (
  <div className='flex flex-col gap-10 items-center justify-center'>
    <Header />
    <ProjectsWrapper>
      <div className='flex flex-col items-center justify-center p-10 bg-cyan-300'>
        <Label className={labelLayout} content={'Counter'} />
        <Counter />
      </div>
      <div className='flex flex-col items-center justify-center p-10 bg-cyan-300'>
        <Label className={labelLayout} content={'Tic Tac Toe'} />
        <TicTacToe />
      </div>
    </ProjectsWrapper>
  </div>
);

export default App;
