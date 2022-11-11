const addMore = document.querySelector(".add-more-vehicle")
const input = document.querySelector(".inp-grp")

function addInput(){

    const vehicleType = document.createElement("input") ;
    vehicleType.type = "text" ;
    vehicleType.placeholder = "EX:Car,bike" ;
    vehicleType.id = "vehicle-type"
    vehicleType.name = "vehicle-type-2"
    const VehicleNo = document.createElement ("input") ;
    VehicleNo.type = "number" ;
    VehicleNo.placeholder = "No" ;
    VehicleNo.id = "vehicle-no"
    VehicleNo.name ="vehicle-no-2"
    const vehicleSum = document.createElement("input")
    vehicleSum.type = "number"
    vehicleSum.placeholder = "Sum Assured"
    vehicleSum.id = "vehicle-sum"
    vehicleSum.name = "sum-assured-2"
    const vehiclePremium = document.createElement("input")
    vehiclePremium.type = "number"
    vehiclePremium.placeholder="Premium"
    vehiclePremium.id = "vehicle-premium"
    vehiclePremium.name ="premium-2"
    const VehiclePpt = document.createElement("input")
    VehiclePpt.type="number"
    VehiclePpt.placeholder="PPT"
    VehiclePpt.placeholder = "vehicle-ppt"
    VehiclePpt.name="ppt-2"
    const btn = document.createElement ("a") ;
    btn.className = "delete" ;
    btn.innerHTML = "&imes" ;
    const flex = document.createElement ("div") ;
    flex.className = "flex" ;
    input.appendChild(flex)
    flex.appendChild(vehicleType)
    flex.appendChild(VehicleNo)
    flex.appendChild(vehicleSum)
    flex.appendChild(vehiclePremium)
    flex.appendChild(VehiclePpt)
    flex.appendChild(VehiclePpt)
}

addMore.addEventListener("click",addInput)
