import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "../404/404Page";
import { Contact } from "../Contact/Contact";
import Form from "../Form/Form";
import Home from "../Home/Home";
import { Terms } from "../Terms/Terms";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Form />} />
        <Route path="/contact-us" element={<Terms />} />
        <Route path="/terms-and-conditions" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
