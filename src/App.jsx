import "./App.css";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
import Props from "./components/Props/Props";
import RestAPI from "./components/RestAPI/RestAPI";
import Snapshot from "./components/Snapshot/Snapshot";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="main">
        {/** Props Testing */}
        <Props
          header="Props Testing"
          description="Validating props in React !"
        />
        <br />
        <hr />
        {/** Events Testing */}
        <Events />
        <br />
        <hr />
        {/** Snapshot Testing */}
        <Snapshot />
        <br />
        <hr />
        {/** RestAPI Testing */}
        <RestAPI />
      </section>
    </div>
  );
}

export default App;
