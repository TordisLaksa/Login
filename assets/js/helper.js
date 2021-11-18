export const myFetch = async (url, options = null) => {
//giver fejl i console hvis den ikke deklareres her, 
//ellers får vi problemer med scoping
    let response;
    try{
        if(!options){
            response = await fetch(url);
        } else{
            response = await fetch(url, options);
        }
        const result = await response.json();
        return result;
    }
    catch(err) {
        console.error(`Error in myFetch: ${err}`);
    }
}