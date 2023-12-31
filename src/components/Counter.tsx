import { useState } from 'react';

import createCounterSlice from '../stores/Counter.store.ts';
import Button from './sharedUI/Button/Button.tsx';
import { buttonContainer, buttonStyle } from './sharedConstants.ts';

const Counter = () => {
  const count = createCounterSlice((state) => state.count);
  const increaseCount = createCounterSlice((state) => state.increaseCount);
  const decreaseCount = createCounterSlice((state) => state.decreaseCount);
  const resetCount = createCounterSlice((state) => state.resetCount);

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
        <div className={`${buttonContainer} ${subtractButtonBackground}`}>
          <Button
            className={`${buttonStyle}`}
            isDisabled={countIsZero}
            onPress={() => increaseCount()}
            onPressChange={(isPressed) => { setSubtractButtonIsPressed(isPressed); }}
          >
            -
          </Button>
        </div>
        <div className={`${buttonContainer} ${plusButtonBackground}`}>
          <Button
            className={`${buttonStyle}`}
            onPress={() => decreaseCount()}
            onPressChange={(isPressed) => { setPlusButtonIsPressed(isPressed); }}
          >
            +
          </Button>
        </div>
      </div>
        <div className={`${buttonContainer} ${resetButtonBackground}`}>
          <Button
            className={`${buttonStyle}`}
            onPress={() => resetCount}
            onPressChange={(isPressed) => { setResetButtonIsPressed(isPressed); }}
          >
            Reset
          </Button>
        </div>
    </div>
  );
};

export default Counter;
