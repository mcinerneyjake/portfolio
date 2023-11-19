import Header from './components/Header.tsx';
import Counter from './components/Counter.tsx';

import './App.css';

const App = () => (
  <div className='flex flex-col gap-10 items-center justify-center'>
    <Header />
    <Counter />
  </div>
);

export default App;
