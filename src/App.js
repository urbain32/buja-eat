import Category from "./component/Category";
import Food from "./component/Food";
import HeadlineCards from "./component/HeadlineCards";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category/>
    </div>
  );
}

export default App;
