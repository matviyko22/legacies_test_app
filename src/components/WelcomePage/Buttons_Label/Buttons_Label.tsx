import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Buttons_Label.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    action?: ReactNode;
  };
}
/* @figmaId 3:16 */
export const Buttons_Label: FC<Props> = memo(function Buttons_Label(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.action != null ? props.text?.action : <div className={classes.action}>Action</div>}
    </div>
  );
});
