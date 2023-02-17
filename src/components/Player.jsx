import { useDispatch, useSelector } from "react-redux";
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from "../redux/actions";

const Player = () => {
  let condition = useSelector((state) => state.song.content);
  let favouriteList = useSelector((state) => state.favourite.content);
  let songResult = condition[0];
  const dispatch = useDispatch();

  return (
    <section id="navbar-bottom">
      {condition.length > 0 && (
        <nav className="navbar fixed-bottom">
          <a className="navbar-brand w-100" href="#">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap set-width">
                <div className="album-photo" id="player-album">
                  <img
                    src={songResult.album.cover_small}
                    height="48"
                    width="48"
                    alt=""
                  />
                </div>
                <div className="album-details">
                  <div
                    className="d-flex flex-column truncate2"
                    id="player-title"
                  >
                    {songResult.title_short}
                  </div>
                  <div id="player-artist">{songResult.artist.name}</div>
                </div>
                <div>
                  {favouriteList.includes(songResult) ? (
                    <span
                      onClick={() => {
                        dispatch(removeFromFavouriteAction(songResult));
                        return false;
                      }}
                    >
                      <i className=" mr-2 bi bi-heart-fill"></i>
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        dispatch(addToFavouriteAction(songResult));
                        return false;
                      }}
                    >
                      <i className=" mr-2 bi bi-heart"></i>
                    </span>
                  )}

                  <span>
                    <svg
                      className="item-2"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                          fillRule="nonzero"
                        ></path>
                        <path d="M10 8h4v3h-4z"></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center gap">
                  <div className="nav-icon">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      className="Svg-sc-ytk21e-0 uPxdw"
                    >
                      <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
                      <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
                    </svg>
                  </div>
                  <div
                    className="nav-icon prev-track"
                    //   onClick="prevTrack(); return false"
                  >
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      className="Svg-sc-ytk21e-0 uPxdw"
                    >
                      <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
                    </svg>
                  </div>
                  <div className="pb-1">
                    <button
                      className="play pb-1"
                      id="play"
                      // onClick="playpauseTrack(); return false"
                      aria-label="Play"
                      data-testid="control-button-playpause"
                      // style="--button-size: 32px"
                      aria-expanded="false"
                    >
                      <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 uPxdw"
                      >
                        <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path>
                      </svg>
                    </button>
                    <button
                      id="stop"
                      className="d-none"
                      // onClick="playpauseTrack(); return false"
                      aria-label="Pause"
                      data-testid="control-button-playpause"
                      // style="--button-size: 32px"
                      aria-expanded="false"
                    >
                      <svg
                        role="img"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        data-encore-id="icon"
                        className="Svg-sc-ytk21e-0 uPxdw"
                      >
                        <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className="nav-icon next-track"
                    //   onClick="nextTrack(); return false"
                  >
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      className="Svg-sc-ytk21e-0 uPxdw"
                    >
                      <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
                    </svg>
                  </div>
                  <div className="nav-icon">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      className="Svg-sc-ytk21e-0 uPxdw"
                    >
                      <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="d-flex gap align-items-center">
                  <div className="slider_container">
                    <span className="current-time">00:00</span>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value="0"
                      className="seek_slider"
                      // onChange="seekTo()"
                    />
                    <span className="total-duration">
                      0{Math.floor(songResult.duration / 60)}:{" "}
                      {Math.floor(songResult.duration % 60)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap align-items-center">
                <div className="nav-icon">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 uPxdw"
                  >
                    <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
                  </svg>
                </div>
                <div className="nav-icon">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 uPxdw"
                  >
                    <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
                  </svg>
                </div>
                <div className="nav-icon">
                  <svg
                    role="presentation"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    className="Svg-sc-ytk21e-0 uPxdw"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
                    <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
                  </svg>
                </div>
                <div
                  className="nav-icon"
                  id="mute"
                  //    onClick="mute()"
                >
                  <svg
                    role=" presentation"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    aria-label="Volume high"
                    id="volume-icon"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 uPxdw"
                  >
                    <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
                    <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
                  </svg>
                </div>
                <div
                  className="nav-icon d-none"
                  id="unmute"
                  //   onClick="unMute()"
                >
                  <svg
                    role="presentation"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    aria-label="Volume off"
                    id="volume-icon"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 uPxdw"
                  >
                    <path d="M13.86 5.47a.75.75 0 00-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 008.8 6.53L10.269 8l-1.47 1.47a.75.75 0 101.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 001.06-1.06L12.39 8l1.47-1.47a.75.75 0 000-1.06z"></path>
                    <path d="M10.116 1.5A.75.75 0 008.991.85l-6.925 4a3.642 3.642 0 00-1.33 4.967 3.639 3.639 0 001.33 1.332l6.925 4a.75.75 0 001.125-.649v-1.906a4.73 4.73 0 01-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 01-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
                  </svg>
                </div>
                <div className="slider_container-volume">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value="99"
                    className="volume_slider"
                    //   onChange="setVolume()"
                  />
                </div>
                <div className="nav-icon">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 uPxdw"
                  >
                    <path d="M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75 0 010 1.5H1.25v-3.579a.75.75 0 011.5 0v1.018l2.72-2.72a.75.75 0 011.06 0zm2.94-2.94a.75.75 0 010-1.06l2.72-2.72h-1.018a.75.75 0 110-1.5h3.578v3.579a.75.75 0 01-1.5 0V3.81l-2.72 2.72a.75.75 0 01-1.06 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </nav>
      )}
    </section>
  );
};

export default Player;
