import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
// import styled from "styled-components";

// const StyledAppLayout=styled.div`
//   display: grid;
//   grid-template-columns:26rem 1fr;
//   grid-template-rows:auto 1fr;
//   height :100vh;
// `;

// const Main =styled.main`
//   background-color: green;
//   pad
// `;

function AppLayout() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <main>
          <Outlet/>
      </main>
    </div>
  )
}

export default AppLayout
