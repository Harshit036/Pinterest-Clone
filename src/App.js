import Pins from "./components/Pins";
import Navbar from "./components/Navbar";

function App() {
  const onSearchSubmit = (term) => {
    console.log(term);
  };
  return (
    <>
      <Navbar onSubmit={onSearchSubmit} />
      <Pins />
    </>
  );
}

export default App;
