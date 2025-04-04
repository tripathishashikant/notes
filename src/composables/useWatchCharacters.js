import { watch } from 'vue'

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (val) => {
    if (val.length === maxChars)
        alert(`You cannot add more than ${maxChars} charactes!`);
  });
}