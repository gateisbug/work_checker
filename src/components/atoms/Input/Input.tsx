import { ChangeEvent, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Input.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";

const cx = classnames.bind(styles);

type Props = {
  onChange: (value: string) => void;
  value?: string;
  padding?: string;
  placeholder?: string;
  variant?: 'outline'|'none';
}

function Input({ value, onChange, variant='none', placeholder, padding='8px 16px' }:Props) {
  const { i18n } = useTranslation();

  const [uuid, setUuid] = useState<string|undefined>(undefined);
  const [state, setState] = useState<string>('');

  const onInput = (e:ChangeEvent<HTMLInputElement>) => {
    let returnValue = e.target.value;
    if(returnValue.length > 4) {
      returnValue = e.target.value.substring(0, 4);
    }

    returnValue = returnValue.replace(/[^0-9]/g, "")

    if(Number(returnValue) > 2400) {
      returnValue = '2400';
    }

    setState(returnValue);
  }

  useEffect(() => {
    setUuid(uuidv4());
  }, [])

  useEffect(() => {
    setState(value ?? '');
  }, [value])

  useEffect(() => {
    onChange(state)
  }, [onChange, state])

    return (
      <div className={ cx("input-container", variant, i18n.language) }>
        <label htmlFor={uuid} className={ cx("input-box") } style={{ padding }}>
          <input id={uuid}
                 type="text"
                 className={ cx("input-core") }
                 onInput={onInput}
                 value={state}
                 placeholder={placeholder}
                 maxLength={4}
          />
        </label>
      </div>
    )
}

export default Input;