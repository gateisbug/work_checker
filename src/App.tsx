import i18next from 'i18next';
import { Button } from "./components/atoms";
import { StoreInput } from "@components/molecules";

function App() {
  const onClick = (lng: string) => {
    i18next.changeLanguage(lng).then();
  }

  return (
    <div className="App">
      <Button variant='contain' onClick={() => onClick('ko')}>KO</Button>
      <Button variant='outline' onClick={() => onClick('en')}>EN</Button>
      <Button onClick={() => onClick('kp')}>KP</Button>
      <StoreInput index={0} type='arrive' />
    </div>
  )
}

export default App
