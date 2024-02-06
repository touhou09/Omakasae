import {RouterProvider, createBrowserRouter} from "react-router-dom";
import reset from "styled-reset";
import Mainpage from "./routes/mainpage";
import Search from "./routes/search";
import { createGlobalStyle, styled } from "styled-components";
import Layout from "./components/layout";

/* 
import Layout from "./component/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account"; 
import styled, { createGlobalStyle } from "styled-components";
import LoadingScreen from "./component/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./component/protected-route";
*/

const router = createBrowserRouter([
  {
    path:"/",
    element: 
      <Layout />,
    children: [
      {
        path:"",
        element: <Mainpage />
      },
      {
        path:"search",
        element: <Search />,
      }
    ],
  }
])


const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: white;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  
  return (
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App