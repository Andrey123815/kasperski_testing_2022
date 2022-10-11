export const baseURI = 'http://localhost:3221';

export const END_POINTS = {
  getEmployees: '/employees'
};

export async function request(endPointURL) {
  const response = await fetch(baseURI + endPointURL);

  if (response.ok) {
    return await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}
