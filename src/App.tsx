import { Button, Input } from "./components/atoms";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState<string>('');

  const onChange = (v:string) => {
    setValue(v);
  }

  useEffect(() => {
    console.log(value);
  }, [value])

  return (
    <div className="App">
      <Input value={value} onChange={onChange} />
    </div>
  )
}

export default App
