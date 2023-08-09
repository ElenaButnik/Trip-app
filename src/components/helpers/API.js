import axios from "axios";
export const API_KEY = "N9BYZ7BSSMESNQ25GAS2Y3NVE";

export const instance = axios.create({
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
});

export function FetchTimelineDatesWeather(params) {
  const { location, date1, date2 } = params;
  return instance.get(`/`, {
    params: {
      location,
      date1,
      date2,
      key: API_KEY,
      unitGroup: "metric",
      include: "days",
    },
  });
}

export function FetchTimelineOneDayWeather(params) {
  const { location } = params;
  return instance.get(
    `${location}/today?unitGroup=metric&include=days&iconSet=icons2&key=${API_KEY}&contentType=json`,
    {
      params: {
        location,
        key: API_KEY,
        unitGroup: "metric",
        include: "days",
      },
    },
  );
}
