function saveData(){
 
        //save item(key-value pair) to local storage

        localStorage.setItem(`name`, document.getElementById("name").value);
        localStorage.setItem(`email`, document.getElementById("email").value);
        localStorage.setItem(`onHours`, document.getElementById("onHours").value);
        localStorage.setItem(`offHours`, document.getElementById("offHours").value);
        localStorage.setItem(`midHours`, document.getElementById("midHours").value);

    
}

function display(){
    let idNameLocalStorage = localStorage.getItem("name");
    document.getElementById('outName').value = idNameLocalStorage;

    let idEmailLocalStorage = localStorage.getItem("email");
    document.getElementById('outEmail').value = idEmailLocalStorage;

    let idOnLocalStorage = parseFloat(localStorage.getItem("onHours"));
    let onCharge = idOnLocalStorage*0.132;
    document.getElementById('outOn').value = onCharge.toFixed(2);

    let idOffLocalStorage = parseFloat(localStorage.getItem("offHours"));
    let offCharge = idOffLocalStorage*0.065;
    document.getElementById('outOff').value = offCharge.toFixed(2);

    let idMidLocalStorage = parseFloat(localStorage.getItem("midHours"));
    let midCharge = idMidLocalStorage*0.094;
    document.getElementById('outMid').value = midCharge.toFixed(2);

    let gross = onCharge+offCharge+midCharge;
    document.getElementById('outGross').value = gross.toFixed(2);

    let HST = gross-(gross*0.87);
    document.getElementById('outHST').value = HST.toFixed(2);

    let ProRebate = gross-(gross*0.92);
    document.getElementById('outPro').value = ProRebate.toFixed(2);

    let NetConsumption = gross+HST-ProRebate;
    document.getElementById('outNet').value = NetConsumption.toFixed(2);

}