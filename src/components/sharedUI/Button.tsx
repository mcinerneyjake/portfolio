import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';

interface ButtonProps extends AriaButtonProps {
  className?: string;
}

const disabledButtonStyle = 'bg-gray-400 cursor-not-allowed';

const Button = ({
  className,

  // React-Aria Props
  children,
  isDisabled,
  name,
  onPress = () => {},
  onPressChange = () => {},
  value,
}: ButtonProps) => {
  // Helper Functions
  const getButtonClassName = () => {
    let finalizedClassName;

    if (className) {
      finalizedClassName = className;

      if (isDisabled) {
        finalizedClassName = `${className} ${disabledButtonStyle}`;
      }
    }

    return finalizedClassName;
  };

  return (
    <AriaButton
      className={getButtonClassName()}
      isDisabled={isDisabled}
      name={name}
      onPress={onPress}
      onPressChange={onPressChange}
      value={value}
    >
      {children}
    </AriaButton>
  );
};

export default Button;
