
import * as React from 'react';
import clsx from 'clsx';

import styles from './impermax-input.module.css';

const COLORS = Object.freeze({
  primary: 'primary',
  secondary: 'secondary'
});

const COLOR_VALUES = Object.values(COLORS);

interface CustomProps {
  color?: typeof COLOR_VALUES[number];
}

type Ref = HTMLInputElement;
const ImpermaxInput = React.forwardRef<Ref, Props>(({
  color = COLORS.primary,
  className,
  ...rest
}, ref): JSX.Element => (
  <input
    ref={ref}
    type='text'
    className={clsx(
      styles.impermaxInput,
      'focus:ring',
      { 'focus:border-primary-300': color === COLORS.primary },
      { 'focus:ring-primary-200': color === COLORS.primary },
      { 'focus:border-secondary-300': color === COLORS.secondary },
      { 'focus:ring-secondary-200': color === COLORS.secondary },
      'focus:ring-opacity-50',
      'text-textPrimary',
      'bg-white',
      'block',
      'w-full',
      'text-base',
      'border-gray-300',
      'shadow-sm',
      'rounded-md',
      'placeholder-gray-400',
      className
    )}
    {...rest} />
));
ImpermaxInput.displayName = 'ImpermaxInput';

export type Props = CustomProps & React.ComponentPropsWithRef<'input'>;

export default ImpermaxInput;
