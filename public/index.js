/*
var AllExercises=Array.from(document.querySelectorAll())
var AllRecipes=Array.from(document.querySelectorAll())
*/
function addRecipe(photoURL,name,calories,protein,sugar,carbs,fat,link)
{

}
/*
    this function filters all the exercises based on what boxes the user checked

*/
function filterExercises(muscle,type)
{
    clearExercises()

}
function filterExercisesByname(name)
{
    clearExercises()
}
var filterExButton = document.getElementById('filter-update-button')
filterExButton.addEventListener('click',function(){

    var conditionType= document.querySelectorAll('input[name="filter-condition"]')
    var values = [];
    for (var i=0;i<5;i++) 
    {
      if (conditionType[i].checked) 
      {
        values.push(conditionType[i].value)
      }
    }
})
function filterRecipes(calories)
{
    clearRecipes()
}
function filterRecipes(calories)
{
    clearRecipes()
}
function toggleExerciseFilter()
{
    document.getElementById("myDropdown").classList.toggle("show");
}
  
function clearExercises()
{
    
    var posts=document.getElementById('exercise-videos')
    while(posts.firstChild)
    {
      posts.removeChild(posts.firstChild)
    }
}
function clearRecipes()
{
    /*
    var posts=document.getElementById('recipePosts')
    while(posts.firstChild)
    {
       posts.removeChild(posts.firstChild)
    } 
    */
}
