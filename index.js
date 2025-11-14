// https://potterhead-api.vercel.app/api/books
async function main(){
    const characters = await fetch("https://potterhead-api.vercel.app/api/books");
    const charactersData = await characters.json();
    console.log(charactersData)
}


console.log(main());