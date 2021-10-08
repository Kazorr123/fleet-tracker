const PlateNum = ({length}) =>  {

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
 
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    
    result = result.slice(0, -3) + (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
 
  
    return result;
 }
 
 export default PlateNum
 