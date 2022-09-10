import "./Assets/scss/basics.scss";
import FilterPage from "./Pages/FilterPage/FilterPage";
import Header from "./Layout/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <FilterPage />
    </div>
  );
}

export default App;
