import React from "react";

import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";

const App = () => {
const users = [
  {
    img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    intro: "",
    color: "blue",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1699075092694-d2d7d8f7f13f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
    intro: "",
    color: "green",
    tag: "Underserved",
  },
  {
    img: "https://images.unsplash.com/photo-1539713161238-577393fe91ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
    intro: "",
    color: "orange",
    tag: "Underbanked",
  },
];



  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
