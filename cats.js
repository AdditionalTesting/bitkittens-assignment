document.addEventListener("DOMContentLoaded", function () {

    var buttonSummon = document.querySelector('.summon-cats');
    var oldDiv = document.querySelectorAll('.cat-box');

    buttonSummon.addEventListener('click', function () {
        console.log('Verify Code')
        var requestSummon = $.ajax({
            url: 'http://bitkittens.herokuapp.com/cats.json',
            method: 'GET',
            dataType: 'json'
        }).done(function (data){
            console.log('REQUEST WAS SUCCESSFUL')
            for (var i = 0; i < data.cats.length; i++) {
                var newImage = document.createElement('img');
                newImage.src = data.cats[i].photo;
                newImage.alt = 'Photo of ' + data.cats[i].name;
                oldDiv[i].append(newImage);
            }

        })
    })
});