
import { Suspense } from 'preact/compat';
import { characterName } from '../../context/storeCharacter';
import { useStore } from '@nanostores/preact';

const Fallback = () => <p>Loading...</p>;

export default function Card() {
  const character = useStore(characterName);

  return (
    <>
      <div className="flex flex-wrap bg-slate-800 rounded-xl p-8">
        <Suspense fallback={<Fallback />}>
          <p className="text-lg font-medium text-slate-50 columns-12">
           {character.character}
          </p>
          <p className="text-lg font-medium text-slate-50  columns-12">
           {character.world}
          </p>
        </Suspense>
      </div>
    </>
  );
}