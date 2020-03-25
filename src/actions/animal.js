export const FETCH_ANIMAL = 'FETCH_ANIMAL';
export const SAVE_ANIMAL = 'SAVE_ANIMAL';

export const fetchAnimal = (id) => ({
    type: FETCH_ANIMAL,
    id : id,
    
});

export const saveAnimal = (animal, id) => ({
    type: SAVE_ANIMAL,
    newAnimal: animal,
    newId: id,
});

