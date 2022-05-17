import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "Reptiles",
    totalScore: 15,
    imageUrl : "https://images.unsplash.com/photo-1545286796-2ec7f880a911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVwdGlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Which is the biggest reptile in the world?",
        options: ["Saltwater crocodile", "Green anaconda", "Green turtle", "Komodo dragon"],
        answer: "Saltwater crocodile",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "Which of these reptile can change the colour of its skin?",
        options: ["Tortoise", "Gharial", "Chameleon", "Green Tree Python"],
        answer: "Chameleon",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Which of these reptile is not a type of snake?",
        options: ["Colubrid", "Viper", "Caiman", "Boa"],
        answer: "Caiman",
      },
    ],
    catergoryName: "WildLife",
  },
  {
    _id: uuid(),
    title: "Volcanoes",
    imageUrl : "https://images.unsplash.com/photo-1580250642511-1660fe42ad58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dm9sY2Fub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    totalScore: 15,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Which type of volcano has a broad shape with gentle slopes",
        options: ["Shield", "Caldera", "Stratovolcano", "Cinder cone"],
        answer: "Shield",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "Which lava only occurs underwater ? ",
        options: ["Pahoehoe", "Magma", "Pillow", "Aa"],
        answer: "Pillow",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "What is magma ?",
        options: ["Hot,molten rock", "Magnetic force under the ground", "Lava", "Tectonic plate"],
        answer: "Hot,molten rock",
      },
    ],
    catergoryName: "Earth",
  },
  {
    _id: uuid(),
    title: "Birds",
    totalScore: 15,
    imageUrl : "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Which of these is not a flightless bird?",
        options: ["Penguin", "Kiwi", "Owl", "Rhea"],
        answer: "Owl",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "Which bird catches fish in its throat pouch?",
        options: ["Heron", "Pelican", "Flamingo", "KingFisher"],
        answer: "Pelican",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Which bird lays largest egg?",
        options: ["HummingBird", "Emu", "Song thrushes", "Ostrich"],
        answer: "Ostrich",
      },
    ],
    catergoryName: "WildLife",
  },
  
];