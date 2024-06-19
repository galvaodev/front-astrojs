import { getApi } from '../../services/getApi';
import { characterName } from '../../context/storeCharacter';

export default function Form() {
    const character = characterName;
    const onSubmit = async (event: any) => {
        event.preventDefault();
        const inputValue = event.target.character.value;
        const teste = await getApi(inputValue) as any
        const response = await teste.json();

        if (response.character.character.name) {
            character.set({
                character: response.character.character.name,
                world: response.character.character.world,
                vocation: response.character.character.vocation,
                level: response.character.character.level
            });
        }
    };

    return (
        <form class="w-full block py-5" onSubmit={onSubmit}>
            <input
                placeholder="Deseja procurar qual personagem?"
                class="border-gray-800 border-2 p-5 w-10/12"
                type="text"
                name="character" required />

            <button class="w-2/12 p-5 bg-gray-800 border-2 border-gray-800 text-white" type="submit">Procurar</button>
        </form>
    )
}
