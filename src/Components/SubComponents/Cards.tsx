export default function Cards() {
  const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      image: "/images/img-1",
      abilities: ["Grass", "Position"],
      mark: "#010",
    },
    {
      id: 2,
      name: "Ivysaur",
      image: "/images/img-2",
      abilities: ["Grass", "Position"],
      mark: "#010",
    },
    {
      id: 3,
      name: "Venusaur",
      image: "/images/img-3",
      abilities: ["Grass", "Position"],
      mark: "#010",
    },
    {
      id: 4,
      name: "Charmander",
      image: "/images/img-4",
      abilities: ["Fire"],
      mark: "#010",
    },
    {
      id: 5,
      name: "Charmeleon",
      image: "/images/img-5",
      abilities: ["Fire"],
      mark: "#010",
    },
    {
      id: 6,
      name: "Charizard",
      image: "/images/img-6",
      abilities: ["Fire", "Flying"],
      mark: "#010",
    },
    {
      id: 7,
      name: "Squirtle",
      image: "/images/img-7",
      abilities: ["Water"],
      mark: "#010",
    },
    {
      id: 8,
      name: "Wartortle",
      image: "/images/img-8",
      abilities: ["Water"],
      mark: "#010",
    },
    {
      id: 9,
      name: "Blastoise",
      image: "/images/img-9",
      abilities: ["Water"],
      mark: "#010",
    },
    {
      id: 10,
      name: "Caterpir",
      image: "/images/img-10",
      abilities: ["Bug"],
      mark: "#010",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-self-center gap-12">
      Cards
    </div>
  );
}
