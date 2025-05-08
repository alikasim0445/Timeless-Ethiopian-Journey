import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './Navbar';
import { FaArrowLeft } from 'react-icons/fa';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function MapPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const mapRef = useRef(null);
  
  // Default to Addis Ababa coordinates if none provided
  const { lat = 9.1450, lng = 40.4897, locationName = 'Ethiopia' } = location.state || {};

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([lat, lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mapRef.current);

      const customIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      L.marker([lat, lng], { icon: customIcon })
        .addTo(mapRef.current)
        .bindPopup(`<b>${locationName}</b><br>Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
        .openPopup();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, locationName]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      
      <div className="relative flex-grow">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-[1000] bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Go back"
        >
          <FaArrowLeft className="text-gray-800" />
        </button>
        
        {/* Map container */}
        <div id="map" className="h-full w-full" />
        
        {/* Coordinates display */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-white p-2 rounded-md shadow-md text-sm">
          <p className="font-semibold">{locationName}</p>
          <p>Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}</p>
        </div>
      </div>
    </div>
  );
}