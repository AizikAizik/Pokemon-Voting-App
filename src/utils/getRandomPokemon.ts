const MAX_DEX_ID = 493;

export const getRandomPokemon: (notThisOne?: number) => (number) = (notThisOne?: number) => {
  const pokedXNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;

  if(pokedXNumber != notThisOne) return pokedXNumber;
  return getRandomPokemon(notThisOne);
}

export const getOptionsForVote = () =>{
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
}