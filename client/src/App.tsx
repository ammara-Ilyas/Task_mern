import Header from "./components/layout/Header";
import WillMakerForm from "./components/mainComponents/WillMakerForm";
function App() {
  return (
    <div className="w-[80%] mx-auto border-2 shadow-md rounded-md p-8">
      <Header />
      <WillMakerForm />
    </div>
  );
}

export default App;
