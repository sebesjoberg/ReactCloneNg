const apiroot = "http://192.168.1.10:8000/";

export async function fetchDate(date) {
  const response = await fetch(
    apiroot +
      "api/list/?starttime=" +
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

export async function fetchEvent(id) {
  const response = await fetch(apiroot + "api/list/?id=" + id);
  return response.json();
}
