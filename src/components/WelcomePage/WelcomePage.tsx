import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonsLargePrimaryActive } from './ButtonsLargePrimaryActive/ButtonsLargePrimaryActive';
import { Icons24pxPlane } from './Icons24pxPlane/Icons24pxPlane';
import { Icons24pxPlaneIcon } from './Icons24pxPlaneIcon';
import { Icons24pxPlaneIcon2 } from './Icons24pxPlaneIcon2';
import { Icons24pxPlaneIcon3 } from './Icons24pxPlaneIcon3';
import { Icons24pxPlaneIcon4 } from './Icons24pxPlaneIcon4';
import { InputsDefault } from './InputsDefault/InputsDefault';
import classes from './WelcomePage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 151:78 */
export const WelcomePage: FC<Props> = memo(function WelcomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle4}></div>
      <div className={classes.menu4}>
        <div className={classes.menu}>
          <div className={classes.menuTwo}>About</div>
          <div className={classes.menuThree}>Login</div>
        </div>
        <div className={classes.menuOne}>Home</div>
      </div>
      <div className={classes.m_logoRemovebgPreview1}></div>
      <div className={classes.content}>
        <div className={classes.headline}>
          <div className={classes.mediumLengthDispla}>Login to take the survey</div>
          <div className={classes.separatedTheyLive}>
            Take the Survey in preparation for the Foundation Week. Contact us if you encounter any issues!
          </div>
          <div className={classes.button3}>
            <ButtonsLargePrimaryActive
              className={classes.button}
              text={{
                action: <div className={classes.action}>How to use the website</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.button4}>
          <ButtonsLargePrimaryActive
            className={classes.button2}
            text={{
              action: <div className={classes.action2}>Contact Us</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.subscribe}>
        <div className={classes.subscribe2}>Register</div>
        <div className={classes.frame1}>
          <InputsDefault
            swap={{
              control: (
                <Icons24pxPlane
                  className={classes.icons24pxPlane}
                  swap={{
                    icon: <Icons24pxPlaneIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
            text={{
              placeholder: <div className={classes.placeholder}>Minerva email address</div>,
            }}
          />
        </div>
        <div className={classes.frame2}>
          <InputsDefault
            swap={{
              control: (
                <Icons24pxPlane
                  className={classes.icons24pxPlane2}
                  swap={{
                    icon: <Icons24pxPlaneIcon2 className={classes.icon2} />,
                  }}
                />
              ),
            }}
            text={{
              placeholder: <div className={classes.placeholder2}>Password</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.features4}></div>
      <div className={classes.m_logoRemovebgPreview12}></div>
      <div className={classes.menu2}>
        <div className={classes.column1}>
          <div className={classes.firstColumn}>First column</div>
          <div className={classes.menu3}>
            <div className={classes.firstPage}>First page</div>
            <div className={classes.secondPage}>Second page</div>
            <div className={classes.third}>Third</div>
            <div className={classes.fourth}>Fourth</div>
          </div>
        </div>
        <div className={classes.column2}>
          <div className={classes.second}>Second</div>
          <div className={classes.menu5}>
            <div className={classes.firstPage2}>Fifth page</div>
            <div className={classes.secondPage2}>Sixth page</div>
            <div className={classes.third2}>Eighth</div>
          </div>
        </div>
        <div className={classes.column3}>
          <div className={classes.third3}>Third</div>
          <div className={classes.menu6}>
            <div className={classes.firstPage3}>Fifth page</div>
            <div className={classes.secondPage3}>Sixth page</div>
            <div className={classes.third4}>Eighth</div>
          </div>
        </div>
      </div>
      <div className={classes.subscribe3}>
        <div className={classes.subscribe4}>Login</div>
        <div className={classes.frame12}>
          <InputsDefault
            swap={{
              control: (
                <Icons24pxPlane
                  className={classes.icons24pxPlane3}
                  swap={{
                    icon: <Icons24pxPlaneIcon3 className={classes.icon3} />,
                  }}
                />
              ),
            }}
            text={{
              placeholder: <div className={classes.placeholder3}>Minerva email address</div>,
            }}
          />
        </div>
        <div className={classes.frame22}>
          <InputsDefault
            swap={{
              control: (
                <Icons24pxPlane
                  className={classes.icons24pxPlane4}
                  swap={{
                    icon: <Icons24pxPlaneIcon4 className={classes.icon4} />,
                  }}
                />
              ),
            }}
            text={{
              placeholder: <div className={classes.placeholder4}>Password</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});
