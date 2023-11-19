import { useState } from 'react';

import './App.css';

import Button from './components/Button/Button.tsx';
import Label from './components/Label/Label.tsx';

function App() {
  const [count, setCount] = useState(0);
  const [ariaIsPressed, setAriaIsPressed] = useState(false);

  const ariaBorder = ariaIsPressed ? 'bg-red-700' : 'bg-green-500';

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <div className='gap-4'>
        <div className='text-5xl font-bold'>Jake McInerney</div>
        <div className='text-2xl font-bold'>_________________________</div>
        <div className='text-3xl font-bold'>Software Developer</div>
      </div>
      <div className={`flex items-center justify-center w-20 h-20 ${ariaBorder}`}>
        <Button
          className='h-full w-full text-xl font-medium text-white'
          onPress={() => setCount(() => count + 1)}
          onPressChange={(isPressed) => { setAriaIsPressed(isPressed); }}
        >
          Click Me
        </Button>
      </div>
      <div className='flex flex-col bg-slate-500'>
        <Label className='text-2xl h-10 w-60' content='Counter' />
        <div className='text-2xl'>{count}</div>
      </div>
    </div>
  );
}

export default App;
