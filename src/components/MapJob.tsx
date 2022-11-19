import maplibregl from "maplibre-gl";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Location } from "../models/job";

export const MapJob = ({ location }: { location: Location }) => {
    return (
        <Map
            mapLib={maplibregl}
            initialViewState={{
                longitude: location.long,
                latitude: location.lat,
                zoom: 14,
            }}
            style={{ width: "100%", height: " 220px" }}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=fkvYoFT8CnptG8Fd9yYD"
        >
            <NavigationControl position="top-left" />
            <Marker latitude={location.lat} longitude={location.long} />
        </Map>
    );
};
