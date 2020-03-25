export const FETCH_ANIMALS = 'FETCH_ANIMALS';
export const SAVE_ANIMALS = 'SAVE_ANIMALS';

export const fetchAnimals = () => ({
    type: FETCH_ANIMALS,
});

export const saveAnimals = (animals) => ({
    type: SAVE_ANIMALS,
    newAnimals: animals,
});

