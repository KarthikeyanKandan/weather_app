window.addEventListener('load', ()=>{
   let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const api=`https://api.darksky.net/forecast/76462b849293bf6babaa711474ef32ba/${lat},${long}`;
        });
        
        fetch(api)
            .then(data)
    }
    
});