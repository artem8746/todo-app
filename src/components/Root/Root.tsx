import { Route, Routes } from "react-router-dom";
import App from "../../App";
import { Todos } from "../../pages/Todos";

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Todos />} />
      <Route path="deleted" element={<Todos isDeleted />} />
    </Route>
  </Routes>
)