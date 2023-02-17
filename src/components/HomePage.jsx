import { useSelector } from "react-redux";
import "../styles/homepage.css";
import MainPageHeading from "./MainPageHeading";
import MusicRow from "./MusicRow";

const HomePage = () => {
  let searchResult = useSelector((state) => state.search.content[0]);
  let firstResult = searchResult.slice(0, 6);
  let secondResult = searchResult.slice(6, 12);
  let thirdResult = searchResult.slice(12, 18);

  return (
    <div className="main-container mb-5">
      <div className="background-effect"></div>

      <section>
        <div className="container-fluid">
          <div className="px-4 my-4">
            <h2>Playlists</h2>
            <MainPageHeading></MainPageHeading>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="px-4 my-4">
            <div className="d-flex align-items-center">
              <h4>Your top mixes</h4>
              <span className="ml-auto">SEE ALL</span>
            </div>
            <MusicRow searchResult={firstResult}></MusicRow>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="px-4 my-4">
            <div className="d-flex align-items-center">
              <h4>Recently played</h4>
              <span className="ml-auto">SEE ALL</span>
            </div>
            <MusicRow searchResult={secondResult} />
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="px-4 my-5">
            <div className="d-flex align-items-center">
              <h4>Today's biggest hits</h4>
              <span className="ml-auto">SEE ALL</span>
            </div>
            <MusicRow searchResult={thirdResult} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
