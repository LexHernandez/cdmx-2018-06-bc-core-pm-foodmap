const splash = () => {
    setInterval(function(){
        location.assign("home.html");
    }, 2000);
};

splash();

let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
let lat = 19.43;
let lng = -99.13;
let queryS = 'comida%20mexicana';


let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS + 
'&intent=browse&radius=2000&limit=10&client_id=ZINY5BOEKJIGJYOFQZI4SQ1H0A1VSFAHEVJKYL12Z331B0J4&client_secret=O1L5JQCRCGABU0IV2ERHCVV3N4GWOPQARYD1PI3JTZXV0NW0';


