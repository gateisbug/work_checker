import { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Input.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";

const cx = classnames.bind(styles);

type Props = {
  value: string;
  onChange: (value: string) => void;
  padding?: string;
  placeholder?: string;
  variant?: 'outline'|'none';
  style?: CSSProperties;
}

function Input({ value, onChange, variant='none', placeholder, padding='8px 16px', style=undefined }:Props) {
  const { i18n } = useTranslation();

  const [uuid, setUuid] = useState<string|undefined>(undefined);
  const [state, setState] = useState<string>(value ?? '');

  const onInput = (e:ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }

  useEffect(() => {
    setUuid(uuidv4());
  }, [])

  useEffect(() => {
    setState(value ?? '');
  }, [value])

    return (
      <div className={ cx("input-container", variant, i18n.language) } style={style}>
        <label htmlFor={uuid} className={ cx("input-box") } style={{ padding }}>
          <input id={uuid}
                 type="text"
                 className={ cx("input-core") }
                 onInput={onInput}
                 onChange={(e) => onChange(e.target.value)}
                 value={state}
                 placeholder={placeholder}/>
        </label>
      </div>
    )
}

export default Input;