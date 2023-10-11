import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Inputs_Controls_Empty } from '../Inputs_Controls_Empty/Inputs_Controls_Empty';
import classes from './InputsDefault.module.css';

interface Props {
  className?: string;
  swap?: {
    control?: ReactNode;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 3:65 */
export const InputsDefault: FC<Props> = memo(function InputsDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.input}></div>
      {props.swap?.control || <Inputs_Controls_Empty className={classes.control} />}
      {props.text?.placeholder != null ? (
        props.text?.placeholder
      ) : (
        <div className={classes.placeholder}>Placeholder</div>
      )}
    </div>
  );
});
