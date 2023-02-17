import { useSelector } from "react-redux";
import "../styles/App.css";

const Favourite = () => {
  let favouriteList = useSelector((state) => state.favourite.content);

  return (
    <>
      <div id="favourite-body">
        <table class="table table-borderless table-hover">
          <tbody id="tbody">
            {favouriteList.map((song, i) => (
              <tr>
                <th scope="row" class="grey row-btn">
                  {i + 1}
                </th>
                <td>
                  <img
                    class="p-1"
                    src={song.album.cover_small}
                    height="48"
                    width="48"
                    alt=""
                  />
                </td>
                <td class="song-btn grey" id="title">
                  ${song.title}
                </td>
                <td>
                  <span class="grey"> @ ${song.album.title}</span>
                </td>
                <td>
                  <span class="grey">
                    {parseInt(song.duration / 60)}m{song.duration % 60}s
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Favourite;
