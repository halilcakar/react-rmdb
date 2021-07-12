import { IMAGE_BASE_URL, POSTER_SIZE } from "./config";

import NoImage from "./images/no_image.jpg";

// Convert time to hours and minutes
export const calcTime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to money formatting
export const convertMoney = (money: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName);

  return sessionState && JSON.parse(sessionState);
};

export const urlBuilder = (path: string | undefined): string => {
  return path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${path}` : NoImage;
};
