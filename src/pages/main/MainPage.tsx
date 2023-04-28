import { Content, Header } from "@components/templates";

function MainPage() {
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