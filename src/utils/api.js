const ASTRO_URL = 'http://api.open-notify.org/astros.json';
const SPACE_URL = 'https://api.le-systeme-solaire.net/rest.php';
const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';



const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status < 200 || response.status > 399) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();

  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function getPeople() {
  const url = `${ASTRO_URL}`;
  return await fetchJson(url, {});
}

export async function spaceItem() {
  const url = `${SPACE_URL}`;
  return await fetchJson(url, {});
}

export async function randomDrink() {
  const url = `${DRINK_URL}`;
  return await fetchJson(url, {});
}