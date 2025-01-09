import "./assets/css/style.css"; 
import Header from "./components/Header";
import Footer from './components/Footer';
import Categories from "./components/Categories";
import ToDoList from "./components/ToDoList";


function App() {
  return (
    <div className="App">
      <div className="app">
      <div className="app-main">
        <Header/>
        <div className="app-dashboard">
          <Categories/>
          <ToDoList/>
        </div>
        <Footer/>
      </div>
    </div>
    </div>
  );
}

export default App;
