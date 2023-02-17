import { useDispatch } from "react-redux";
import { addToPlayerAction } from "../redux/actions";

const MusicRow = (props) => {
  const dispatch = useDispatch();
  // const handleChange = (track) => {
  //   dispatch(addToPlayerAction(track));
  // };
  return (
    <div className="row">
      {props.searchResult.map((musicTrack) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={musicTrack.id}>
          <div className="card">
            <img
              src={musicTrack.album.cover}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <button
                className="btn play-button ml-auto mr-3"
                onClick={() => {
                  dispatch(addToPlayerAction(musicTrack));
                }}
              >
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 uPxdw"
                >
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
              <h5 className="card-title">{musicTrack.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicRow;
