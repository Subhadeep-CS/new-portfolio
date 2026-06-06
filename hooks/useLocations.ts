import { useState, useEffect } from "react";

export interface Coordinates {
  lat: string;
  lng: string;
}

export const useLocations = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          const latStr = position.coords.latitude >= 0 ? `${lat}° N` : `${Math.abs(position.coords.latitude).toFixed(4)}° S`;
          const lngStr = position.coords.longitude >= 0 ? `${lng}° E` : `${Math.abs(position.coords.longitude).toFixed(4)}° W`;
          setCoords({ lat: latStr, lng: lngStr });
          setIsLoading(false);
        },
        (error) => {
          // Fallback to default developer location (Kolkata)
          setCoords({ lat: "22.5726° N", lng: "88.3639° E" });
          setIsLoading(false);
        },
        { timeout: 6000 }
      );
    } else {
      setCoords({ lat: "22.5726° N", lng: "88.3639° E" });
      setIsLoading(false);
    }
  }, []);

  return { coords, isLoading };
};

// Export fallback alias in case of typos in imports
export { useLocations as useLoactions };
