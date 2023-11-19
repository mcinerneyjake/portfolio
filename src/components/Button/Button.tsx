import { Button as AriaButton } from 'react-aria-components';

type ButtonProps = {
  children: (string | number)[];
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => (
  <AriaButton
    className='text-xl font-medium text-white bg-black'
    onPress={onClick}
  >
    {children}
  </AriaButton>
);

export default Button;
