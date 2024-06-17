import { atom } from "nanostores";

const initialValue = { character: '', world: ''};

const characterName = atom(initialValue);

export { characterName };