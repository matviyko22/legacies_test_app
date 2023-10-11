import { memo, SVGProps } from 'react';

const Icons24pxPlaneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.3497 11.5L6.9543 9.21477L5.58509 10.3628L5.02898 7.91888L10.9587 2.72567L3.84882 6.80974L0.5 4.39355L13.5 0.5L10.3497 11.5Z'
      fill='#0065F2'
    />
  </svg>
);

const Memo = memo(Icons24pxPlaneIcon);
export { Memo as Icons24pxPlaneIcon };
