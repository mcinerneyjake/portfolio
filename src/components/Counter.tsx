import { useState } from 'react';

import Button from './sharedUI/Button/Button.tsx';
import Label from './sharedUI/Label/Label.tsx';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [plusButtonIsPressed, setPlusButtonIsPressed] = useState(false);
  const [subtractButtonIsPressed, setSubtractButtonIsPressed] = useState(false);
  const [resetButtonIsPressed, setResetButtonIsPressed] = useState(false);

  const plusButtonBackground = plusButtonIsPressed ? 'bg-green-700' : 'bg-green-500';
  const subtractButtonBackground = subtractButtonIsPressed ? 'bg-red-700' : 'bg-red-500';
  const resetButtonBackground = resetButtonIsPressed ? 'bg-yellow-700' : 'bg-yellow-500';

  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <div className='flex flex-col bg-slate-300'>
        <Label className='text-2xl h-10 w-60' content='Counter' />
        <div className='text-2xl'>{count}</div>
      </div>
      <div className='flex gap-4'>
        <div className={`flex items-center justify-center w-36 h-10 ${plusButtonBackground}`}>
          <Button
            className='h-full w-full text-xl font-medium text-white'
            onPress={() => setCount(() => count + 1)}
            onPressChange={(isPressed) => { setPlusButtonIsPressed(isPressed); }}
          >
            +
          </Button>
        </div>
        <div className={`flex items-center justify-center w-36 h-10 ${subtractButtonBackground}`}>
          <Button
            className='h-full w-full text-xl font-medium text-white'
            onPress={() => setCount(() => (count === 0 ? 0 : count - 1))}
            onPressChange={(isPressed) => { setSubtractButtonIsPressed(isPressed); }}
          >
            -
          </Button>
        </div>
        <div className={`flex items-center justify-center w-36 h-10 ${resetButtonBackground}`}>
          <Button
            className='h-full w-full text-xl font-medium text-white'
            onPress={() => setCount(0)}
            onPressChange={(isPressed) => { setResetButtonIsPressed(isPressed); }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
