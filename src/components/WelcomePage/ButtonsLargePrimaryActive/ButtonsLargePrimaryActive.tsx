import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Buttons_Label } from '../Buttons_Label/Buttons_Label';
import classes from './ButtonsLargePrimaryActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    action?: ReactNode;
  };
}
/* @figmaId 3:14 */
export const ButtonsLargePrimaryActive: FC<Props> = memo(function ButtonsLargePrimaryActive(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Buttons_Label
        className={classes.label}
        text={{
          action: props.text?.action,
        }}
      />
    </button>
  );
});
