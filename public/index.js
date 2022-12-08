
var videoArray=[];
//var AllRecipes=Array.from(document.querySelectorAll())
function insertVideo(name, videoURL,type) {
    var videoPost = Handlebars.templates.exerciseElement({
      name: name,
      videoURL: videoURL,
      type: type,
    })
    var videoSection = document.getElementById('exercise-videos');
    videoSection.insertAdjacentHTML("beforeend", videoPost);
  }
function addRecipe(photoURL,name,calories,protein,sugar,carbs,fat,link)
{

}
/*
    this function filters all the exercises based on what boxes the user checked

*/

function filterExercises(AllExercises)
{
    

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
function parseVideoElem(videoElem) {
    
    var postVideoElem = videoElem.querySelector('.video iframe');
    var videoURL = postVideoElem.src;

    var video = {
      name: videoElem.getAttribute('data-name'),
      type: videoElem.getAttribute('data-type'),
      url:  videoURL
    };
  
    return video;
  
  }
window.addEventListener('DOMContentLoaded', function(){

    
    var filterExButton = document.getElementById('filter-update-button');

    filterExButton.addEventListener('click', function(videoArray) {
        
    var videoElems =document.getElementsByClassName('exercise-video')
    for (var i = 0; i < videoElems.length; i++) 
    {
        
       videoArray.push(parseVideoElem(videoElems[i]));
       console.log(videoArray[i].type)
    
    }
        clearExercises()
        var Videos=document.getElementById('exercise-videos')
        var muscleType= document.querySelectorAll("#filter-exercise input:checked")
        var values = [];
        for (var i=0;i<muscleType.length;i++) 
        {
            values.push(muscleType[i].value)
        }
        console.log(videoArray.length)
        for(var i=0; i<30;i++)
        {
            console.log('inside for loop')
            if(values.length!==0 && !values.includes(videoArray[i].type))
            {
                continue
            }
            
           insertVideo(videoArray[i].name, videoArray[i].url, videoArray[i].type)
        }
        toggleExerciseFilter()
    });
});