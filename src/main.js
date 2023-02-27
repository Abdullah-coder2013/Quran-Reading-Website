var response = "";

  document.getElementById("selectbtn").addEventListener("click", function(e) {
    async function get() {
      let data = document.getElementById("surahs").value;

      res = await fetch(`https://api.alquran.cloud/v1/surah/${data}`);
      return await res.json();
    }
    let apiresponse = get().then(async res => {
      res["data"]["ayahs"].forEach(element => {
        document.getElementById("display").value += `${element.text}\n`;
      });
    })
  });

