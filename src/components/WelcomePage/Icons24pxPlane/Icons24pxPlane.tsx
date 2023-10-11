import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Icons24pxPlane.module.css';
import { Icons24pxPlaneIcon } from './Icons24pxPlaneIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3:71 */
export const Icons24pxPlane: FC<Props> = memo(function Icons24pxPlane(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Icons24pxPlaneIcon className={classes.icon2} />}</div>
    </div>
  );
});
