import beefRagu from "../images/beef-ragu.jpg";
import tuna from "../images/tuna.jpg";
import pesto from "../images/pesto.jpg";
import plantBased from "../images/plant-based.jpg";
import chickenTikka from "../images/chicken-tika.jpg";
import tomatoBasil from "../images/tomato-basil.jpg";
import truffle from "../images/truffle.jpg";
import parmesanChicken from "../images/parmesan-chicken.jpg";
import macCheese from "../images/maccheese.jpg";
import creamyAglioOlio from "../images/creamy-aglio-olio.jpg";

export const DISHES = [
  {
    id: "beef-ragu",
    name: "BEEF RAGU",
    desc: "House-made beef ragu, parmesan",
    price: 12.99,
    img: beefRagu,
    tags: ["POPULAR", "CLASSICS"]
  },
  {
    id: "tuna",
    name: "TUNA",
    desc: "Chili tomato sauce, flaked tuna",
    price: 13.9,
    img: tuna,
    tags: ["CLASSICS"]
  },
  {
    id: "pesto",
    name: "PESTO",
    desc: "Basil pesto, pine nuts, parmesan",
    price: 12.5,
    img: pesto,
    tags: ["POPULAR", "CLASSICS"]
  },
  {
    id: "plant-based",
    name: "PLANT BASED",
    desc: "Plant-based ragu, tomato sauce",
    price: 12.9,
    img: plantBased,
    tags: ["PLANT-BASED"]
  },
  {
    id: "chicken-tikka",
    name: "CHICKEN TIKKA",
    desc: "Grilled chicken, creamy tikka sauce",
    price: 13.9,
    img: chickenTikka,
    tags: ["POPULAR", "SPECIALS"]
  },
  {
    id: "tomato-basil",
    name: "TOMATO BASIL",
    desc: "Fresh tomato sauce, basil, parmesan",
    price: 11.9,
    img: tomatoBasil,
    tags: ["CLASSICS", "PLANT-BASED"]
  },
  {
    id: "truffle",
    name: "TRUFFLE",
    desc: "Three cheeses, black truffle oil",
    price: 12.9,
    img: truffle,
    tags: ["POPULAR", "SPECIALS"]
  },
  {
    id: "parmesan-chicken",
    name: "PARMESAN CHICKEN",
    desc: "Grilled chicken, wild mushrooms, cream sauce",
    price: 13.9,
    img: parmesanChicken,
    tags: ["SPECIALS"]
  },
  {
    id: "mac-cheese",
    name: "MAC & CHEESE",
    desc: "Creamy cheddar sauce, crispy pancetta",
    price: 11.9,
    img: macCheese,
    tags: ["POPULAR", "MAC & CHEESE"]
  },
  {
    id: "creamy-aglio-olio",
    name: "CREAMY AGLIO OLIO",
    desc: "Garlic, chili flakes, herbs, parmesan",
    price: 12.5,
    img: creamyAglioOlio,
    tags: ["PLANT-BASED"]
  }
];
