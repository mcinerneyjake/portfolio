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
  onPress = () => {},
  onPressChange = () => {},
  value,
}: ButtonProps) => (
  <AriaButton
    className={className}
    isDisabled={isDisabled}
    name={name}
    onPress={onPress}
    onPressChange={onPressChange}
    value={value}
  >
    {children}
  </AriaButton>
);

export default Button;
