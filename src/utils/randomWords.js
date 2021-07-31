export const weatherRandom = ['sunny', 'cloudy', 'rainy', 'snowy', 'foggy', 'stormy', 'bright', 'brilliant', 'astronomical', 'magical', 'starry']
export const timeOfDayRandom = ['morning', 'midnight', 'noon', 'night', 'evening']
export const timeRandom = ['months', 'days', 'years', 'millennia', 'weeks', 'centuries', 'decades']
export const sizeRandom = ['big', 'measly', 'expansive', 'gigantic', 'tiny', 'small', 'minuscule', 'compact', 'dainty', 'colossal', 'immense', 'momentous', 'massive', 'puny', 'vast', 'hulking']
export const sizesRandom = ['big', 'gigantic', 'tiny', 'small', 'minuscule', 'compact', 'dainty', 'colossal', 'immense', 'momentous', 'massive', 'galactic', 'microscopic', 'petite', 'jumbo']
export const beautyRandom = ['brilliant', 'dazzling', 'lustrous', 'luminescent', 'gleaming', 'astute', 'beaming', 'luminous']
export const timesRandom = ['months', 'days', 'weeks']
export const partyRandom = ['gathering', 'party', 'ball', 'fiesta', 'celebration', 'reunion', 'blowout', 'banquet', 'bash']
export const amazingRandom = ['amazing', 'astonishing', 'astounding', 'breathtaking', 'perplexing', 'remarkable', 'wonderful', 'amazeballs', 'flabbergasting', 'mind-blowing']
export const unexpectedRandom = ['unexpected', 'unpredicted', 'unforeseen', 'serendipitous', 'extraordinary', 'unplanned', 'surprising']


export function randomWord(list) {
  return list[Math.floor(Math.random() * list.length)]
}