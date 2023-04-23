import { ChangeEvent, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Input.module.scss';
import { v4 as uuidv4 } from 'uuid';

const cx = classnames.bind(styles);

type Props = {
  value: string;
  onChange: (value: string) => void;
}

function Input(props:Props) {
  const [uuid, setUuid] = useState<string|undefined>(undefined);
  const [state, setState] = useState<string>('');

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  }

  useEffect(() => {
    setUuid(uuidv4());
  }, [])

  useEffect(() => {
    setState(props.value);
  }, [props.value])

    return (
      <div className={ cx("input-container") }>
        <label htmlFor={uuid} className={ cx("input-box") }>
          <input id={uuid} type="text" className={ cx("input-core") } onChange={onChange} value={state}/>
        </label>
      </div>
    )
}

export default Input;