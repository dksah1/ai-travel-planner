const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for : California USA,for 1 days and 1 night for family with a Luxury budget with Flight details,Flight Price with Booking url,Hotels options list with HotelName,Hotel address,Price hotel image Url,geo coordinates,rating,descriptions and Places to visit nearby with placeName,Place Details,Place Image Url,Geo Coordinates,ticket Pricing,Time t travel eact of the location for 1 day and 1 night with each day plan with best time to visit in JSON format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "trip_name": "Luxury California Getaway",\n  "duration": "1 Day & 1 Night",\n  "budget": "Luxury",\n  "travel_date": "2023-11-10", // Replace with your desired travel date\n  "flight_details": {\n    "airline": "United Airlines",\n    "flight_number": "UA1234", // Replace with actual flight number\n    "departure_airport": "SFO", // San Francisco International Airport\n    "arrival_airport": "LAX", // Los Angeles International Airport\n    "departure_time": "10:00 AM", // Replace with actual departure time\n    "arrival_time": "11:30 AM", // Replace with actual arrival time\n    "price": "$500", // Replace with actual price\n    "booking_url": "https://www.united.com/" // Replace with actual booking URL\n  },\n  "hotel_options": [\n    {\n      "hotel_name": "The Beverly Hills Hotel",\n      "address": "9641 Sunset Blvd, Beverly Hills, CA 90210",\n      "price": "$1500+",\n      "image_url": "https://www.beverlyhillshotel.com/images/gallery/bh-hero.jpg",\n      "geo_coordinates": {\n        "latitude": 34.0736,\n        "longitude": -118.4037\n      },\n      "rating": 4.8,\n      "description": "Iconic luxury hotel with lush gardens, a world-renowned pool, and exceptional dining."\n    },\n    {\n      "hotel_name": "Four Seasons Hotel Los Angeles at Beverly Hills",\n      "address": "300 South Doheny Drive, Beverly Hills, CA 90210",\n      "price": "$1200+",\n      "image_url": "https://www.fourseasons.com/images/hotels/losangeles/losangeles_hero_1600x900.jpg",\n      "geo_coordinates": {\n        "latitude": 34.0742,\n        "longitude": -118.4069\n      },\n      "rating": 4.9,\n      "description": "Luxurious hotel with a rooftop pool, exquisite dining options, and stunning views of the city."\n    }\n  ],\n  "day_plan": [\n    {\n      "day": "Day 1",\n      "schedule": [\n        {\n          "time": "12:00 PM",\n          "activity": "Arrive at LAX and check into your hotel.",\n          "place": "Los Angeles International Airport (LAX)",\n          "details": "After arriving at LAX, get a luxurious car service to your hotel. Take a moment to settle in and enjoy the amenities."\n        },\n        {\n          "time": "2:00 PM",\n          "activity": "Lunch at The Polo Lounge.",\n          "place": "The Polo Lounge",\n          "details": "Enjoy a sophisticated lunch at the iconic The Polo Lounge in Beverly Hills, known for its celebrity clientele and elegant ambiance.",\n          "image_url": "https://www.beverlyhillshotel.com/images/restaurants/polo-lounge-hero.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0738,\n            "longitude": -118.4033\n          }\n        },\n        {\n          "time": "4:00 PM",\n          "activity": "Shopping on Rodeo Drive.",\n          "place": "Rodeo Drive",\n          "details": "Indulge in a luxurious shopping experience on Rodeo Drive, home to designer boutiques and exclusive brands.",\n          "image_url": "https://www.beverlyhills.com/images/RodeoDriveShopping.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0759,\n            "longitude": -118.4043\n          }\n        },\n        {\n          "time": "7:00 PM",\n          "activity": "Dinner at Nobu Malibu.",\n          "place": "Nobu Malibu",\n          "details": "Experience the renowned Japanese cuisine at Nobu Malibu, offering breathtaking ocean views and a celebrity-favorite atmosphere.",\n          "image_url": "https://www.noburestaurants.com/locations/malibu/images/nobu-malibu-hero.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0184,\n            "longitude": -118.7856\n          }\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "schedule": [\n        {\n          "time": "8:00 AM",\n          "activity": "Breakfast at The Rooftop Garden at The Beverly Hills Hotel.",\n          "place": "The Rooftop Garden at The Beverly Hills Hotel",\n          "details": "Enjoy a relaxing breakfast at the hotel\'s Rooftop Garden, offering panoramic city views and a luxurious ambiance.",\n          "image_url": "https://www.beverlyhillshotel.com/images/restaurants/rooftop-garden-hero.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0738,\n            "longitude": -118.4033\n          }\n        },\n        {\n          "time": "10:00 AM",\n          "activity": "Visit the Getty Center.",\n          "place": "Getty Center",\n          "details": "Explore the world-renowned Getty Center, a museum complex with an impressive collection of art and stunning gardens.",\n          "image_url": "https://www.getty.edu/museum/images/photo/Getty_Center_Exterior_Aerial.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0522,\n            "longitude": -118.4065\n          },\n          "ticket_pricing": "$25 per person",\n          "time_to_travel": "45 minutes"\n        },\n        {\n          "time": "1:00 PM",\n          "activity": "Lunch at The Grill at The Getty Center.",\n          "place": "The Grill at The Getty Center",\n          "details": "Enjoy a delicious lunch with stunning views of the city from The Grill at The Getty Center.",\n          "image_url": "https://www.getty.edu/museum/images/photo/Getty_Center_The_Grill_Aerial.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0522,\n            "longitude": -118.4065\n          }\n        },\n        {\n          "time": "3:00 PM",\n          "activity": "Relax by the pool at your hotel.",\n          "place": "Your Hotel",\n          "details": "Indulge in a relaxing afternoon by the pool at your luxurious hotel, enjoying the amenities and tranquility."\n        },\n        {\n          "time": "6:00 PM",\n          "activity": "Enjoy a cocktail at the hotel bar.",\n          "place": "Hotel Bar",\n          "details": "Enjoy a sophisticated cocktail at the hotel bar, savoring the ambiance and live music."\n        },\n        {\n          "time": "7:00 PM",\n          "activity": "Dinner at Spago.",\n          "place": "Spago",\n          "details": "Experience world-class dining at Spago, a renowned restaurant by Wolfgang Puck, offering innovative cuisine and a luxurious atmosphere.",\n          "image_url": "https://www.wolfgangpuck.com/wp-content/uploads/2021/11/Spago-Homepage-Hero-9.jpg",\n          "geo_coordinates": {\n            "latitude": 34.0625,\n            "longitude": -118.3925\n          }\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This plan is a suggestion and can be customized to your family\'s interests.\n* Hotel prices and flight costs are estimates and can vary depending on the time of year and availability.\n* Ensure you book your flights and accommodations in advance, especially during peak season.\n* Consider purchasing a California Attractions Pass for discounts on attractions.\n* Allow for travel time between locations and factor in traffic.\n* Have a great time!\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
