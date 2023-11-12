import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const getPrompt = () => {
  const hour = new Date().getHours();
  const prompts = [
    "🌅 Good morning! Share your sunrise feast?",
    "🍴 It's lunch o'clock! What's fueling your afternoon?",
    "🍪 Snack attack! What are you nibbling on?",
    "🌜 Evening's here! What's simmering for dinner?",
    "🌌 Night owl, huh? What's on your plate?",
  ];

  if (hour < 12) {
    return prompts[0];
  } else if (hour < 16) {
    return prompts[1];
  } else if (hour < 18) {
    return prompts[2];
  } else if (hour < 22) {
    return prompts[3];
  } else {
    return prompts[4];
  }
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const getTodayDate = () => {
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[today.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[today.getMonth()];
  const date = today.getDate();

  return `${dayName}, ${monthName} ${date}`;
};

export { getPrompt, getGreeting, getTodayDate };
