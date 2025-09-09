export type QueryParam = "race" | "type" | "attribute" | "frameType";

export interface Option {
  label: string;
  value: string;
  queryParam: QueryParam;
}

export const RACE: Option[] = [
  { label: "Bestiário", value: "beast", queryParam: "race" },
  { label: "Fada", value: "fairy", queryParam: "race" },
  { label: "Demônio", value: "fiend", queryParam: "race" },
  { label: "Dragão", value: "dragon", queryParam: "race" },
  { label: "Cibernético", value: "cyberse", queryParam: "race" },
  { label: "Dinossauro", value: "dinosaur", queryParam: "race" },
  { label: "Bestiário-Lutador", value: "beast-warrior", queryParam: "race" },
  { label: "Criador-Deus", value: "creator god", queryParam: "race" },
  { label: "Divino-Bestiário", value: "divine-beast", queryParam: "race" },
  { label: "Inseto", value: "insect", queryParam: "race" },
  { label: "Máquina", value: "machine", queryParam: "race" },
  { label: "Planta", value: "plant", queryParam: "race" },
  { label: "Psíquico", value: "psychic", queryParam: "race" },
  { label: "Piro", value: "pyro", queryParam: "race" },
  { label: "Réptil", value: "reptile", queryParam: "race" },
  { label: "Pedra", value: "rock", queryParam: "race" },
  { label: "Serpente-do-mar", value: "sea serpent", queryParam: "race" },
  { label: "Mago", value: "Spellcaster", queryParam: "race" },
  { label: "Trovão", value: "Thunder", queryParam: "race" },
  { label: "Lutador", value: "Warrior", queryParam: "race" },
  { label: "Bestiário-Ave", value: "winged beast", queryParam: "race" },
  { label: "Wyrm", value: "wyrm", queryParam: "race" },
  { label: "Zumbi", value: "zombie", queryParam: "race" },
  { label: "Peixe", value: "fish", queryParam: "race" },
  { label: "Normal", value: "normal", queryParam: "race" },
  { label: "Campo", value: "field", queryParam: "race" },
  { label: "Equipamento", value: "Equip", queryParam: "race" },
  { label: "Contínuo", value: "continuous", queryParam: "race" },
  { label: "Rápido-Jogo", value: "quick-play", queryParam: "race" },
  { label: "Ritual", value: "ritual", queryParam: "race" },
  { label: "Ilusão", value: "illusion", queryParam: "race" },
];

export const CARD_TYPE: Option[] = [
  { label: "Armadilha", value: "trap card", queryParam: "type" },
  { label: "Mágica", value: "spell card", queryParam: "type" },
  { label: "Contra-Ataque", value: "counter", queryParam: "race" },
  { label: "Monstro", value: "monster", queryParam: "type" },
  { label: "Skill Card", value: "skill", queryParam: "frameType" },
  { label: "Token", value: "token", queryParam: "frameType" },
];

export const ATTRIBUTE: Option[] = [
  { label: "Escuridão", value: "dark", queryParam: "attribute" },
  { label: "Vento", value: "wind", queryParam: "attribute" },
  { label: "Fogo", value: "fire", queryParam: "attribute" },
  { label: "Terra", value: "earth", queryParam: "attribute" },
  { label: "Água", value: "water", queryParam: "attribute" },
  { label: "Luz", value: "light", queryParam: "attribute" },
];
