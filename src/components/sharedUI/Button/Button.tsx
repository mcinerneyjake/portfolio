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
  const getButtonClassName = (cName: string | undefined) => {
    let finalizedClassName;

    if (cName) {
      finalizedClassName = cName;

      if (isDisabled) {
        finalizedClassName = `${cName} ${disabledButtonStyle}`;
      }
    }

    return finalizedClassName;
  };

  return (
    <AriaButton
      className={getButtonClassName(className)}
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
