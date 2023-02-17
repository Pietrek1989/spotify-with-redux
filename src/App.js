import HomePage from "./components/HomePage";
import NavBar2 from "./components/NavBar2";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
import "./styles/styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResultActionAsync } from "./redux/actions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourite from "./components/Favourite";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchResultActionAsync("queen"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let searchResult = useSelector((state) => state.search.content);
  return (
    <>
      <BrowserRouter>
        <NavBar2></NavBar2>

        <div className="d-flex flex-column">
          <div id="wrapper-main">
            {searchResult.length > 0 && <SideBar></SideBar>}
            <Routes>
              {searchResult.length > 0 && (
                <Route path="/" element={<HomePage></HomePage>} />
              )}
              <Route
                path="/favourite"
                element={<Favourite></Favourite>}
              ></Route>
            </Routes>
          </div>
        </div>
        {searchResult.length > 0 && <Player></Player>}
      </BrowserRouter>
    </>
  );
}

export default App;
