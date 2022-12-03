var AllExercises=Array.from(document.querySelectorAll())
var AllRecipes=Array.from(document.querySelectorAll())
function addExercise(photoURL,muscleGroup,muscle,type,name,description)
{

}
function addRecipe(photoURL,name,calories,protein,sugar,carbs,fat,link)
{

}
function filterExercise(muscle,type)
{
    clearExercises()

}
function filterRecipes(calories)
{
    clearRecipes()
}
function closeExercise()
{
    
}
function closeFoodMenu()
{

}
function clearExercises()
{
    var posts=document.getElementById('ExercisePosts')
    while(posts.firstChild)
    {
      posts.removeChild(posts.firstChild)
    }
}
function clearRecipes()
{
    var posts=document.getElementById('recipePosts')
    while(posts.firstChild)
    {
       posts.removeChild(posts.firstChild)
    } 
}
