import { atom } from "nanostores";

interface IInitial {
    character?: string;
    world?: string;
    vocation?: string;
    level?: string;
}

const initialValue: IInitial = { character: '', world: '', vocation: '', level: '' };
const characterName = atom(initialValue);
export { characterName };