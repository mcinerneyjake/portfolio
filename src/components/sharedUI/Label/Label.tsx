import { Label as AriaLabel, LabelProps as AriaLabelProps } from 'react-aria-components';

interface LabelProps extends AriaLabelProps {
  className?: string;
  content: string;
}

const Label = ({ className, content }: LabelProps) => (
  <AriaLabel className={className}>
    {content}
  </ AriaLabel>
);

export default Label;
