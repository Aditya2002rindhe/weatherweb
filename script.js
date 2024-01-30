var cityname;

var getcity = document.getElementById ("getcity");
getcity.focus ();


const addData=()=>{
    var loader = '<div class="spinner-border text-danger"></div>';
    linebreak.insertAdjacentHTML("afterend", loader);
    const loading = document.querySelector(".spinner-border");

    setTimeout(() => {
      try {
        document.querySelector(".container1").removeChild(loading);
        var city = document.getElementById("getcity").value;

        fetchdata(city);
      } catch (error) {
        console.log(`we will work on ${error}`);
      }
    }, 1000);
}

button.addEventListener("click", async () => {
    addData();
});

function keyPress() {
  if (event.key == "Enter") {
    addData();
  }
}

const fetchdata = async (somecity) => {
  var gotdata = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a4a6ad3a7a9747ec84e92733242301&q=${somecity}&aqi=no`
  );
  var data = await gotdata.json();
  console.log(data);

  var status = `<br>
                        <div>
                            <img src="${data["current"]["condition"]["icon"]}" alt="">
                            <p>${data["current"]["condition"]["text"]}</p>
                        </div>
                        <br>`;

  var condtion = document.querySelector(".status");

  condtion.innerHTML = status;

  document.getElementById("city").innerHTML = somecity.toUpperCase();
  document.getElementById("region").innerHTML = data["location"]["region"];

  var tempcity = (document.getElementById("temp").innerHTML =
    data["current"]["temp_c"]);

  document.getElementById("farh").innerHTML = data["current"]["temp_f"];
};
