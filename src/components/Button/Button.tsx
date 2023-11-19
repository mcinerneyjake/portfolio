import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';

interface ButtonProps extends AriaButtonProps {
  className?: string;
}

const Button = ({
  className,

  // React-Aria Props
  children,
  isDisabled,
  name,
  onPress = () => { },
  value,
}: ButtonProps) => (
  <AriaButton
    className={className}
    isDisabled={isDisabled}
    name={name}
    onPress={onPress}
    value={value}
  >
    {children}
  </AriaButton>
);

export default Button;
