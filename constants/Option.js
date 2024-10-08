export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "🧍", // Emoji representing a single person
    people: "1",
  },
  {
    id: 2,
    title: "Family Fun",
    desc: "Perfect for family vacations",
    icon: "👨‍👩‍👧‍👦", // Emoji for family
    people: "4",
  },
  {
    id: 3,
    title: "Friends Trip",
    desc: "Group travels for fun and adventure",
    icon: "👯", // Emoji for friends
    people: "5",
  },
  {
    id: 4,
    title: "Romantic Getaway",
    desc: "A romantic escape for couples",
    icon: "💑", // Emoji for a couple
    people: "2",
  },
  {
    id: 5,
    title: "Business Travel",
    desc: "Work trips and business events",
    icon: "💼", // Emoji for business
    people: "1",
  },
  {
    id: 6,
    title: "Adventure Group",
    desc: "Join a large group for an adventure",
    icon: "🏞️", // Emoji for adventure
    people: "10",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Best for budget travelers who are looking to save money.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Ideal for those looking for a balance between comfort and cost.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Perfect for travelers seeking high-end experiences and premium services.",
    icon: "💎",
  },
];

export const AI_Prompt =
  "Generate Travel Plan for : {location},for {totalDay} days and {totalNight} night for {traveller} with a {budget} with Flight details,Flight Price with Booking url,Hotels options list with HotelName,Hotel address,Price hotel image Url,geo coordinates,rating,descriptions and Places to visit nearby with placeName,Place Details,Place Image Url,Geo Coordinates,ticket Pricing,Time t travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format";
