import './style/styles.css';
import CustomHeader from "./components/CustomHeader";
import Converter from "./components/Converter";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <div className="converter">
      <CustomHeader />

      <Converter />

      <CustomFooter/>
    </div>
  );
}

export default App;
