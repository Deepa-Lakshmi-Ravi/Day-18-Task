const apiurl = "https://www.themealdb.com/api/json/v1/1/random.php";

const ImageArea = document.getElementById("Meal");

const overlayElem = document.getElementById("overlay");

const loadMealimg = async ({ meals }) => {
  const imgElem = document.getElementById("img-Element");

  imgElem.src = meals[0].strMealThumb;
};

const sleeptime = () =>
  new promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resloved");
    }, 2000);
  });

const getRandomMeal = async () => {
  overlayElem.style.display = "flex";
  await sleeptime;
  const response = await fetch(apiurl);
  const data = await response.json();

  loadMealimg(data);
  overlayElem.style.display = "none";
};
getRandomMeal();
