var AllExercises=Array.from(document.querySelectorAll())
var AllRecipes=Array.from(document.querySelectorAll())

function addRecipe(photoURL,name,calories,protein,sugar,carbs,fat,link)
{

}
function filterExercises(muscle,type)
{
    clearExercises()

}
function filterExercisesByname(name)
{
    clearExercises()


}
function filterRecipes(calories)
{
    clearRecipes()
}
function filterRecipes(calories)
{
    clearRecipes()
}
function closeExercise()
{
    
}
function closeFoodFilter()
{
    var modalB=document.getElementById('modal-backdrop')
    var foodFilter=document.getElementById('sell-something-modal')
    modalB.classList.add('hidden')
    foodFilter.classList.add('hidden')
    var text=document.getElementById('post-calories-input')
    text.value=""
    var textPhoto=document.getElementById('post-photo-input')
    textPhoto.value=""
    var textPrice=document.getElementById('post-price-input')
    textPrice.value=""
    var textCity=document.getElementById('post-city-input')
    textCity.value=""
}
function clearExercises()
{
    var posts=document.getElementById('exercisePosts')
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
