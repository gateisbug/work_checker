import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { ColorSet } from "@components/types";
import Label from "@components/atoms/Label";
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

type Variant = 'text' | 'contain' | 'outline';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  colorSet?: ColorSet;
  variant?: Variant;
  style?: CSSProperties;
}

function Button({
  variant='text',
  colorSet='primary',
  children,
  onClick=undefined,
  style=undefined
}:Props) {
  const [ch, setCh] = useState<ReactNode>(null);

  useEffect(() => {
    if(!children) {
      setCh(null);
    }
    else if(typeof children === 'string') {
      setCh(<Label typo='btn'>{children}</Label>)
    }
    else {
      setCh(<>{children}</>)
    }
  }, [children])

  return (
    <div className={ cx('button-container', variant, colorSet) }
         onClick={onClick}
         style={style}
    >
      {ch}
    </div>
  )
}

export default Button;