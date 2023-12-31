/*
 *  Exercise page
 */
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

/*
    this function filters all the exercises based on what boxes the user checked
*/
function toggleExerciseFilter()
{
    document.getElementById("myDropdown").classList.toggle("show");
}
function toggleAddBtn()
{
    document.getElementById("addDropdown").classList.toggle("show");
}
  
function clearExercises()
{
    var posts=document.getElementById('exercise-videos')
    while(posts.firstChild)
    {
      posts.removeChild(posts.firstChild)
    }
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
  function getValues()
  {
      var filters = {
          name: document.getElementById('filter-text').value,
          type: document.getElementById('filter-min-price').value,
          videoURL: document.getElementById('filter-max-price').value,
        }
        return filters
  }
  function clearMenu()
  {
    var nameInput=document.getElementById('video-input-name')
    nameInput.value=""
    var typeInput=document.getElementById('video-input-type')
    typeInput.value=""
    var urlInput=document.getElementById('video-input-url')
    urlInput.value=""
    toggleAddBtn()

  }
window.addEventListener('DOMContentLoaded', function(){
    
    
    var videoElems =document.getElementsByClassName('exercise-video');
    /*
    this part of the code handles the checkbox exercise filter 
    */
    var filterExButton = document.getElementById('filter-update-button');
    filterExButton.addEventListener('click', function() {
    for (var i = 0; i < videoElems.length; i++) 
    {
       videoArray.push(parseVideoElem(videoElems[i]));    
    }
        clearExercises()
        var Videos=document.getElementById('exercise-videos')
        var muscleType= document.querySelectorAll("#filter-exercise input:checked")
        var values = [];
        for (var i=0;i<muscleType.length;i++) 
        {
            values.push(muscleType[i].value)
        }
        for(var i=0; i<30;i++)
        {
            if(values.length!==0 && !values.includes(videoArray[i].type))
            {
                continue
            }
            var tempVid
           insertVideo(videoArray[i].name, videoArray[i].url, videoArray[i].type)
        }
        toggleExerciseFilter()
    });


    var searchExButton = document.getElementById('Search-update-button');
    searchExButton.addEventListener('click', function() {
    for (var i = 0; i < videoElems.length; i++) 
    {
        
       videoArray.push(parseVideoElem(videoElems[i]));
    
    }
        clearExercises()
        var Videos=document.getElementById('exercise-videos')
        var searched= document.getElementById('filter-text')
        for(var i=0; i<30;i++)
        {
            if(searched.value!=="" && !videoArray[i].name.toLowerCase().includes(searched.value.toLowerCase()))
            {
                continue
            }
           insertVideo(videoArray[i].name, videoArray[i].url, videoArray[i].type)
        }
    });
 
    var addButton = document.getElementById('addbtn');
    addButton.addEventListener('click',function(){
        var textName= document.getElementById('video-input-name')
        var textType= document.getElementById('video-input-type')
        var textURL= document.getElementById('video-input-url')
         
        if(textName.value==""||textURL.value==""||textType.value=="") 
        {
            alert("please fill out all elements")
            return;
        }
        var data={
            name:textName.value,
            type:textType.value,
            videoURL: textURL.value,
         }
        insertVideo(textName.value,textURL.value,textType.value)
        clearMenu()
        /*
        var theData=JSON.stringify(data)
        fs.appendFile("exerciseData.json", theData , function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
         });
         */
    })
});