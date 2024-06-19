
import { Suspense } from 'preact/compat';
import { characterName } from '../../context/storeCharacter';
import { useStore } from '@nanostores/preact';

const Fallback = () => <p>Loading...</p>;

export default function Card() {
  const character = useStore(characterName);

  return (
    <div className="flex flex-wrap bg-slate-800 rounded-xl h-full p-8">
      <Suspense fallback={<Fallback />}>
        {character.character ? (
          <div>
            <p class="text-slate-50 font-medium">Nome:</p>
            <p className="text-3xl font-body font-medium text-slate-50">
              {character.character}
            </p>
            <p class="text-slate-50 font-medium mt-5">Mundo:</p>
            <p className="text-3xl font-body font-medium text-slate-50">
              {character.world}
            </p>
            <p class="text-slate-50 font-medium mt-5">Level:</p>
            <p className="text-3xl font-body font-medium text-slate-50">
              {character.level}
            </p>

            <p class="text-slate-50 font-medium mt-5">Vocação:</p>

            <p className="text-3xl font-body font-medium text-slate-50">
              {character.vocation}
            </p>
          </div>
        ) : (
          <p class="text-slate-50 font-medium text-center w-full">Personagem não encontrado</p>
        )}
      </Suspense>
    </div>
  );
}