/**
 * Created by user on 2016-11-10.
 */


$(document).ready(function(){

    $('#button').click(function (){
        mainRequest();
    })
});
function mainRequest (){

    var type = 'channel';
    var text = 'test';
    var WinPage = '0';
    var targetURL = 'http://localhost:7002/search/'+type+'?word='+encodeURIComponent(text)+'&page='+WinPage;
    $.ajax({
        url:targetURL,
        dataType:'text',
        processDat:false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        type:'GET',
        success:function(response){
            console.log(response);
            mainList(response);

        }

    })
};

