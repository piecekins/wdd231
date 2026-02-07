import { getParkData, getAlertData, getVisitorCenterData} from "./parkService.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs"
import { alertTemplate, centerTemplate, activitiesTemplate } from "./templates.mjs";


import "../css/style.css";
import "../css/conditions.css";

function setAlerts(data){
  /* added info.innerHTML = html.join(""); after i looked and updated it to have html const*/
  const info = document.querySelector(".alertList")
  
  const html = data.map(alertTemplate)
  
  info.innerHTML = html.join("");
}

function setCenters(data){
  /* added info.innerHTML = html.join(""); after i looked and updated it to have html const*/
  const info = document.querySelector(".serviceList")
  console.log(data)
  const html = data.map(centerTemplate)
  
  info.innerHTML = html.join("");
}

function setActivity(data){
  const info = document.querySelector(".activity")
  
  const html = data.map(activitiesTemplate)
  
  info.innerHTML = html.join("");
}

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData)
  setActivity(parkData.activities)
  const alertData = await getAlertData()
  setAlerts(alertData)
  const centersData = await getVisitorCenterData()
  setCenters(centersData)

}

init()