
function showImage(src_image) {
    document.getElementById('my_image').src = src_image;
}

for (let i = 0; i < 5; i++) {
    setTimeout(function(){ 
       console.log('Yo! ', i);
    }, 1000);
 }