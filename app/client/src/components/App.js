import "./App.css";
import TemplateList from "./template_list/TemplateList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="templates" element={<TemplateList />} />
    </Routes>
  );
}

export default App;
