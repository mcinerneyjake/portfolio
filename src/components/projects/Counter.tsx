import { useState } from 'react';

import Button from '../sharedUI/Button/Button.tsx';

const buttonLayout = 'flex items-center justify-center h-10 w-36';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [plusButtonIsPressed, setPlusButtonIsPressed] = useState(false);
  const [subtractButtonIsPressed, setSubtractButtonIsPressed] = useState(false);
  const [resetButtonIsPressed, setResetButtonIsPressed] = useState(false);

  const plusButtonBackground = plusButtonIsPressed ? 'bg-green-700' : 'bg-green-500';
  const subtractButtonBackground = subtractButtonIsPressed ? 'bg-red-700' : 'bg-red-500';
  const resetButtonBackground = resetButtonIsPressed ? 'bg-violet-700' : 'bg-violet-500';

  const countIsZero = count === 0;

  return (
    <div className='flex flex-col items-center justify-center gap-3 h'>
      <div className='flex flex-col items-center justify-center h-20 w-20 bg-blue-500'>
        <div className='flex text-2xl cursor-default'>
          {count}
        </div>
      </div>
      <div className='flex gap-4'>
        <div className={`${buttonLayout} ${subtractButtonBackground}`}>
          <Button
            className='h-full w-full text-xl font-medium text-white'
            isDisabled={countIsZero}
            onPress={() => setCount(() => (countIsZero ? 0 : count - 1))}
            onPressChange={(isPressed) => { setSubtractButtonIsPressed(isPressed); }}
          >
            -
          </Button>
        </div>
        <div className={`${buttonLayout} ${plusButtonBackground}`}>
          <Button
            className='h-full w-full text-xl font-medium text-white'
            onPress={() => setCount(() => count + 1)}
            onPressChange={(isPressed) => { setPlusButtonIsPressed(isPressed); }}
          >
            +
          </Button>
        </div>
      </div>
        <div className={`${buttonLayout} ${resetButtonBackground}`}>
          <Button
            className='h-full w-full text-xl font-medium text-white'
            onPress={() => setCount(0)}
            onPressChange={(isPressed) => { setResetButtonIsPressed(isPressed); }}
          >
            Reset
          </Button>
        </div>
    </div>
  );
};

export default Counter;
