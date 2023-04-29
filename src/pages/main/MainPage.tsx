import { Content, Header } from "@components/templates";
import { useEffect } from "react";
import { getStorage, setStorage } from "@src/lib/storage";
import { useRecoilState } from "recoil";
import { weekAtom } from "@src/stores/week";

function MainPage() {
  const [ week, setWeek] = useRecoilState(weekAtom);

  useEffect(() => {
    const storage = getStorage();
    setWeek(storage);
  }, [])

  useEffect(() => {
    setStorage(week);
  }, [week])

  return (
    <div className="Page">
      <Header />

      <div className="wrap">
        <Content />
      </div>
    </div>
  )
}

export default MainPage;