let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';//api de foursquare, venues=lugares
let lat = 19.43;
let lng = -99.13;
let queryS = 'pulque';


let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS + 
'&intent=browse&radius=6000&limit=100&client_id=J5F1YZWTSSCSFY3OFS1X32XSDCQKO1C4EIYNM3PPGM02P2UB&client_secret=SXSBDCLD3ACJWR3HRMR2KSD2LPFYZXEIKLTDCIXTSLAMRCOL';

fetch(url)
.then (Response => Response.json())
.then(data => {
    for(firstLevel in data){
        
        let secondLevel = data[firstLevel]
        let thirdLevel = secondLevel.venues;
        for(fourth in thirdLevel){
            let fiveLevel = thirdLevel[fourth]
            // console.log(fiveLevel);
            let pulqueId =fiveLevel.id
            let pulqueName=fiveLevel.name
            let pulqueLocation=fiveLevel.location
            let pulqueDirection=pulqueLocation.city
            let pulqueAdress=pulqueLocation.formattedAddress
            console.log(pulqueAdress);
            for (let i = 0;i <= pulqueAdress.length; i++){
                console.log(pulqueAdress[i]);
            }

        pulqueNames.innerHTML+=`<h5>${pulqueName}</h5>`;
            // console.log("este es pulqueName" + pulqueName)

            // console.log("este es pulqueId" + pulqueId);
        }
    }
})

const pulqueNames = document.getElementById("namePulcatas");