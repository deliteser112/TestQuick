$(document).ready(function(){
    var obj = $('#dog_o')
    var r_width = obj.width()
    var r_height = obj.height()
   
    var temp = new Array()
    var count = 1
    temp[0] = 0

    var p_left, p_top, c_left, c_top, centerPositionX, centerPositionY
    $('#btn_up').click(function(){
        move_up(obj)
        p_top = obj.css('margin-top')
        $("#coord_y").html(p_top)
    })

    $('#btn_down').click(function(){
        move_down(obj)
        p_top = obj.css('margin-top')
        $("#coord_y").html(p_top)
    })

    $('#btn_left').click(function(){
        move_left(obj)
        p_left = obj.css('margin-left')
        $("#coord_x").html(p_left)
    })

    $('#btn_right').click(function(){
        move_right(obj)
        p_left = obj.css('margin-left')
        $("#coord_x").html(p_left)
    })

    $("div#slider").slider({
        animate: true,                  
        start: function (event)
        {
            var value = $("div#slider").slider("value");
        },
        stop: function (event)
        {
            var value = $("div#slider").slider("value");
        },
        change: function (event)
        {
            var value = $("div#slider").slider("value");
        },
        slide: function (event)
        {
            var value = $("div#slider").slider("value");
            
            temp[count] = value
            p_left = obj.css('margin-left')
            p_top = obj.css('margin-top')
            c_left = Number(p_left.replace("px",""))
            c_top = Number(p_top.replace("px",""))
            
            if(temp[count]>temp[count-1]){
                centerPositionX = c_left-1
                centerPositionY = c_top-1
            }else{
                centerPositionX = c_left+1
                centerPositionY = c_top+1
            }

            zoom(obj, value*2, r_width, r_height)
            obj.css('margin-left',centerPositionX)
            obj.css('margin-top',centerPositionY)

            $("#valueSlide").html("1."+(value<10?('0'+value):value)+"x")
            count++
        } 
    });
})

function move_up(e){
    e.animate({
        'marginTop' : "-=30px" //moves up
    }, 'fast');
    p = e.offset();
}

function move_down(e){
    e.animate({
        'marginTop' : "+=30px" //moves down
    }, 'fast');
    p = e.offset();
}

function move_left(e){
    e.animate({
        'marginLeft' : "-=30px" //moves left
    }, 'fast');
    p = e.offset();
}

function move_right(e){
    e.animate({
        'marginLeft' : "+=30px" //moves right
    }, 'fast');
    p = e.offset();
}

function zoom(e, zx, r_width, r_height){
    var d_width = Number(r_width + zx) + 'px'
    var d_height = Number(r_height + zx) + 'px'
    e.width(d_width)
    e.height(d_height)
}