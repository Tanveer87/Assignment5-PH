
const getMeal = meal =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    fetch(url)
    .then (res => res.json())
    .then (data => displayMeals(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click',()=>{
    const inputMeal = document.getElementById('food').value;
    getMeal(inputMeal);
})

const updateList = data =>{
    d
}

const displayMeals = meals =>{
    const mealsDiv = document.getElementById('meals');
    for(let i=0; i<meals.length;i++){
        const meal= meals[i];
        const mealDiv = document.createElement('div');
        div.innerText= meal.strMeal;
        ul.appendChild(li);

    }
}