// atoms.js
import { atom } from 'jotai';

export const selectCarModelAtom = atom({}); // Replace 'initialValue' with the initial state

export const selectCarBrandAtom = atom({});

export const selectCarVariantAtom = atom({});

export const selectCarDealerAtom = atom({});

export const selectCarDealersListAtom = atom([]);

export const selectCityAtom = atom(1);
export const selectBrandAtom = atom('');

export const selectOnRoadPriceModelAtom = atom('');

export const selectSugestedCompareData =atom([]);

export const filteredCarData =atom([]);

export const carFilters = atom(
    { brand: '', bodyType: '', fuelType: [],
    transmissionType: [], price: [] }
)