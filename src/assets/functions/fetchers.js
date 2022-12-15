export async function fetchDate(date) {
  const response = await fetch(
    "https://backendnationsinn.herokuapp.com/api/list/?starttime=" +
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate()
  );
  return response.json();
}

export async function fetchDateNation(date, nations) {
  console.log("Fetchdatingnation");
}
