var div = document.createElement("div");
div.setAttribute("class", "divmain");
div.style.color = "red";
div.style.fontSize = "25px";

var div1 = document.createElement("div");
div1.setAttribute("class", "divmain1");
div1.style.color = "blue";
div1.style.fontSize = "25px";

var div2 = document.createElement("div");
div2.setAttribute("class", "divmain2");
div2.style.color = "green";
div2.style.fontSize = "25px";

var div3 = document.createElement("div");
div3.setAttribute("class", "divmain3");
div3.style.color = "purple";
div3.style.fontSize = "25px";

var div4 = document.createElement("div");
div4.setAttribute("class", "divmain4");
div4.style.color = "red";
div4.style.fontSize = "25px";

var div5 = document.createElement("div");
div5.setAttribute("class", "divmain5");
div5.style.color = "blue";
div5.style.fontSize = "25px";

var div6 = document.createElement("div");
div6.setAttribute("class", "divmain6");
div6.style.color = "green";
div6.style.fontSize = "25px";

var div7 = document.createElement("div");
div7.setAttribute("class", "divmain7");
div7.style.color = "purple";
div7.style.fontSize = "25px";

var div8 = document.createElement("div");
div8.setAttribute("class", "divmain8");
div8.style.color = "red";
div8.style.fontSize = "25px";

var div9 = document.createElement("div");
div9.setAttribute("class", "divmain9");
div9.style.color = "blue";
div9.style.fontSize = "25px";

var div10 = document.createElement("div");
div10.setAttribute("class", "divmain10");
div10.style.color = "green";
div10.style.fontSize = "25px";

async function foo() {
  try {
    let kural_num = document.getElementById("t1").value;
    let res =
      await fetch(`https://api-thirukkural.vercel.app/api?num=${kural_num}
    `);
    let result = await res.json();
    console.log(result);

    div.innerHTML = `Kural Number:  ${result["number"]}`;
    document.body.append(div);

    div1.innerHTML = `The section (in Tamil) to which the poem belongs: ${result["sect_tam"]}`;
    document.body.append(div1);

    div2.innerHTML = `The Chapter Group (in Tamil) to which the poem belongs
    : ${result["chapgrp_tam"]}`;
    document.body.append(div2);

    div3.innerHTML = `The Chapter (in Tamil) to which the poem belongs: 
    ${result["chap_tam"]}`;
    document.body.append(div3);

    div4.innerHTML = `The Line of the Poem(in Tamil): ${result["line1"]}  ${result["line2"]}`;
    document.body.append(div4);

    div5.innerHTML = `The explanation (in Tamil) of the poem:${result["tam_exp"]}`;
    document.body.append(div5);

    div6.innerHTML = `The section (in English) to which the poem belongs
    : ${result["sect_eng"]}`;
    document.body.append(div6);

    div7.innerHTML = `The Chapter Group (in English) to which the poem belongs
    : ${result["chapgrp_eng"]}`;
    document.body.append(div7);

    div8.innerHTML = `The Chapter (in English) to which the poem belongs
    : ${result["chap_eng"]}`;
    document.body.append(div8);

    div9.innerHTML = `The poem traslated to English: ${result["eng"]}`;
    document.body.append(div9);

    div9.innerHTML = `The explanation (in English) of the poem: ${result["eng_exp"]}`;
    document.body.append(div10);
  } catch (error) {
    console.log(error);
  }
}
