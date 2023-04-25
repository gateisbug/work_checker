import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Button, Label } from "./components/atoms";
import { Input } from "@components/atoms";
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');

  const onClick = (lng: string) => {
    i18next.changeLanguage(lng);
  }

  const { t } = useTranslation();

  return (
    <div className="App">
      <Button variant='contain' onClick={() => onClick('ko')}>KO</Button>
      <Button variant='outline' onClick={() => onClick('en')}>EN</Button>
      <Button onClick={() => onClick('kp')}>KP</Button>
      <Label>{ t('test') }</Label>
      <Input variant='none' value={value} onChange={(v) => setValue(v)} />
    </div>
  )
}

export default App
