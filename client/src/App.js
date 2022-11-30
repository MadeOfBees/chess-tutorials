import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "bootstrap/dist/css/bootstrap.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navi from './components/Navbar';
import Footer from './components/Footer';
import Puzzle1 from "./pages/Puzzles/Puzzle1";
import Puzzle2 from "./pages/Puzzles/Puzzle2";
import Puzzle3 from "./pages/Puzzles/Puzzle3";
import Puzzle4 from "./pages/Puzzles/Puzzle4";
import Puzzle5 from "./pages/Puzzles/Puzzle5";
import Puzzle6 from "./pages/Puzzles/Puzzle6";
import Puzzle7 from "./pages/Puzzles/Puzzle7";
import Puzzle8 from "./pages/Puzzles/Puzzle8";
import Puzzle9 from "./pages/Puzzles/Puzzle9";
import Puzzle10 from "./pages/Puzzles/Puzzle10";
import Puzzle11 from "./pages/Puzzles/Puzzle11";
import Basic1 from "./pages/Basics/Basic1";
import Basic2 from "./pages/Basics/Basic2";
import Basic3 from "./pages/Basics/Basic3";
import Basic4 from "./pages/Basics/Basic4";
import Basic5 from "./pages/Basics/Basic5";
import Basic6 from "./pages/Basics/Basic6";
import Basic7 from "./pages/Basics/Basic7";
import Basic8 from "./pages/Basics/Basic8";
import Basic9 from "./pages/Basics/Basic9";
import Basic10 from "./pages/Basics/Basic10";
import Basic11 from "./pages/Basics/Basic11";
import Advanced1 from "./pages/Advanced/Advanced1";
import Advanced2 from "./pages/Advanced/Advanced2";
import Advanced3 from "./pages/Advanced/Advanced3";
import Advanced4 from "./pages/Advanced/Advanced4";
import Advanced5 from "./pages/Advanced/Advanced5";
import Advanced6 from "./pages/Advanced/Advanced6";
import Advanced7 from "./pages/Advanced/Advanced7";
import Advanced8 from "./pages/Advanced/Advanced8";
import Advanced9 from "./pages/Advanced/Advanced9";
import Advanced10 from "./pages/Advanced/Advanced10";
import Advanced11 from "./pages/Advanced/Advanced11";
import "./App.css";


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main className="alex">
          <Navi />
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/Puzzle1"
                element={<Puzzle1 />}
              />
              <Route
                path="/Puzzle2"
                element={<Puzzle2 />}
              />
              <Route
                path="/Puzzle3"
                element={<Puzzle3 />}
              />
              <Route
                path="/Puzzle4"
                element={<Puzzle4 />}
              />
              <Route
                path="/Puzzle5"
                element={<Puzzle5 />}
              />
              <Route
                path="/Puzzle6"
                element={<Puzzle6 />}
              />
              <Route
                path="/Puzzle7"
                element={<Puzzle7 />}
              />
              <Route
                path="/Puzzle8"
                element={<Puzzle8 />}
              />
              <Route
                path="/Puzzle9"
                element={<Puzzle9 />}
              />
              <Route
                path="/Puzzle10"
                element={<Puzzle10 />}
              />
              <Route
                path="/Puzzle11"
                element={<Puzzle11 />}
              />
              <Route
                path="/Basic1"
                element={<Basic1 />}
              />
              <Route
                path="/Basic2"
                element={<Basic2 />}
              />
              <Route
                path="/Basic3"
                element={<Basic3 />}
              />
              <Route
                path="/Basic4"
                element={<Basic4 />}
              />
              <Route
                path="/Basic5"
                element={<Basic5 />}
              />
              <Route
                path="/Basic6"
                element={<Basic6 />}
              />
              <Route
                path="/Basic7"
                element={<Basic7 />}
              />
              <Route
                path="/Basic8"
                element={<Basic8 />}
              />
              <Route
                path="/Basic9"
                element={<Basic9 />}
              />
              <Route
                path="/Basic10"
                element={<Basic10 />}
              />
              <Route
                path="/Basic11"
                element={<Basic11 />}
              />
              <Route
                path="/Advanced1"
                element={<Advanced1 />}
              />
              <Route
                path="/Advanced2"
                element={<Advanced2 />}
              />
              <Route
                path="/Advanced3"
                element={<Advanced3 />}
              />
              <Route
                path="/Advanced4"
                element={<Advanced4 />}
              />
              <Route
                path="/Advanced5"
                element={<Advanced5 />}
              />
              <Route
                path="/Advanced6"
                element={<Advanced6 />}
              />
              <Route
                path="/Advanced7"
                element={<Advanced7 />}
              />
              <Route
                path="/Advanced8"
                element={<Advanced8 />}
              />
              <Route
                path="/Advanced9"
                element={<Advanced9 />}
              />
              <Route
                path="/Advanced10"
                element={<Advanced10 />}
              />
              <Route
                path="/Advanced11"
                element={<Advanced11 />}
              />
            </Routes>
          </div>
        </main>
        <Footer className="geddy" />
      </Router>
    </ApolloProvider>
  );
}


export default App;
