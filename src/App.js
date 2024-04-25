import { useState } from "react";
import Category from "./Components/Category";
import Hero from "./Components/Hero";
import Main from "./Components/Main";

function App() {
  const [search,setSearch]=useState("general")
  return (
    <>
      <Hero setSearch={setSearch} />
      <Category setSearch={setSearch}/>
      <Main search={search}/>
    </>
  );
}

export default App;
