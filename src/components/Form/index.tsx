import { getApi } from '../../services/getApi';
import { characterName } from '../../context/storeCharacter';

export default function Form() {
    const character = characterName;
    const handleBlur = async (event: any) => {
        const inputValue = event.target.value;
        const teste = await getApi(inputValue) as any
        const response = await teste.json();

        if (response.character.character.name) {
            character.set({character: response.character.character.name, world: response.character.character.world});
        }
    };

    return (
        <form>
            <input type="text" name="inputName" onBlur={(e) => handleBlur(e)} required />
        </form>
    )
}
