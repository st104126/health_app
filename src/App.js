import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Pageone from "./components/Pageone";
import Home from "./components/Home";
import CallNumber from "./components/CallNumber";
import ChatGpt from "./components/ChatGpt";
import HealthEduPage_one from "./components/HealthEduPage_one";
import HealthEduPage_two from "./components/HealthEduPage_two";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Pageone" element={<Pageone />} />
          <Route path="CallNumber" element={<CallNumber />} />
          <Route path="ChatGpt" element={<ChatGpt />} />
          <Route path="HealthEduPage_one" element={<HealthEduPage_one />} />
          <Route path="HealthEduPage_two" element={<HealthEduPage_two />} />
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
