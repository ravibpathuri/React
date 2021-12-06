import React from "react";
import { Routes, Route } from "react-router-dom";

const Counter = React.lazy(() =>
  import("./../features/counter/Counter").then((module) => ({
    default: module.Counter,
  }))
);
const Card = React.lazy(() => import("../components/card/Card"));
const Users = React.lazy(() => import("./../components/users/Users"));

const User = React.lazy(() =>
  import("./../features/counter/Counter").then((module) => ({
    default: module.Counter,
  }))
);

const NewUser = React.lazy(() =>
  import("./../features/counter/Counter").then((module) => ({
    default: module.Counter,
  }))
);

export const routes = (
  <Routes>
    <Route path="/counter" element={<Counter />} />
    <Route path="/card" element={<Card />} />
    <Route path="/users" element={<Users />}>
      <Route path=":userId" element={<User />} />
      <Route path="new" element={<NewUser />} />
      <Route index element={<Users />} />
    </Route>
  </Routes>
);
