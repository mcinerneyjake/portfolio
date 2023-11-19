type ButtonProps = {
  children: (string | number)[];
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className='text-xl font-medium text-white bg-black' onClick={onClick}>{children}</button>
  );
}

export default Button;