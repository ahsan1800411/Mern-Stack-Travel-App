import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "./App.css";
import axios from "axios";
import { format } from "timeago.js";

function App() {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  useEffect(() => {
    const getPins = async () => {
      const { data } = await axios.get("/pins");
      setPins(data);
    };
    getPins();
  }, []);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle='mapbox://styles/safak/cknndpyfq268f17p53nmpwira'
    >
      {pins.map((pin) => {
        return (
          <>
            <Marker
              latitude={pin.latitude}
              longitude={pin.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Room
                style={{ fontSize: viewport.zoom * 7, color: "slateblue" }}
              />
            </Marker>
            <Popup
              latitude={pin.latitude}
              longitude={pin.longitude}
              closeButton={true}
              closeOnClick={false}
              anchor='left'
            >
              <div className='card'>
                <label>Place:</label>
                <h4 className='place'>{pin.title}</h4>
                <label>Review:</label>
                <p className='desc'> {pin.description} </p>
                <label>Rating:</label>
                <div className='stars'>
                  <Star className='star' />
                  <Star className='star' />
                  <Star className='star' />
                  <Star className='star' />
                  <Star className='star' />
                </div>
                <label>Information:</label>
                <span className='username'>
                  Created by: <strong>{pin.name}</strong>{" "}
                </span>
                <span className='date'>{format(pin.createdAt)}</span>
              </div>
            </Popup>
          </>
        );
      })}
    </ReactMapGL>
  );
}

export default App;
