import { watch } from 'vue'

export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (val) => {
    if (val.length === 100)
        alert('You cannot add more than 100 charactes!');
  });
}