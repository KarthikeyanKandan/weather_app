window.addEventListener('load', ()=>{
   let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          long=position.coords.longitude;
            lat=position.coords.latitude;
            
            const api=`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&APPID=dc2e13638fabb06dc102bcc7c90f2655`;
        
        });
    }
    
});