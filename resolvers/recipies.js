import apiInstance from "../spoonacular/api";

// Return popular recipie card data for landing page
export function getRecipies(number= 3){
    // fetch only free stuff
    const options = {"limitLicense": true, "_number": number}

    apiInstance.getRandomRecipes(options, (err, data, res)=>{
        if (err){
            console.log(err.status)
        } else{
            // console.log(res)
            // TODO: parse and format data for card
            return data
        }
    })

}

export function getExploreRecipies(){
    // Batch fetch recipies for explore page
    // TODO: cache recipies with redis per hour before refresh
    // fetch only free stuff
    const options = {"limitLicense": true}

    apiInstance.getRandomRecipes(options, (err, data, res)=>{
        if (err){
            console.log(err.status)
        } else{
            // console.log(res)
            // TODO: parse and format data for card
            return data
        }
    })
}

export function createRecipes(){

}