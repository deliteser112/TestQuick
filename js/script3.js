$(document).ready(function(){
    var obj = $('#dog_o')
    var r_size = obj.css('background-size')
    $('#btn_up').click(function(){
        move_up(obj)
        var full_height = $(".box-container").height()
        p_top = obj.css('margin-top')
        var p_t = Number(p_top.replace('px',''))
        var r_dis = (p_t/full_height)*100
        r_dis = r_dis.toFixed(2)
        $("#coord_y").html(r_dis)
    })

    $('#btn_down').click(function(){
        move_down(obj)
        var full_height = $(".box-container").height()
        p_top = obj.css('margin-top')
        var p_t = Number(p_top.replace('px',''))
        var r_dis = (p_t/full_height)*100
        r_dis = r_dis.toFixed(2)
        $("#coord_y").html(r_dis)
    })

    $('#btn_left').click(function(){
        move_left(obj)
        var full_width = $(".box-container").width()
        p_left = obj.css('margin-left')
        var p_l = Number(p_left.replace('px',''))
        var r_dis = (p_l/full_width)*100
        r_dis = r_dis.toFixed(2)
        $("#coord_x").html(r_dis)
    })

    $('#btn_right').click(function(){
        move_right(obj)
        var full_width = $(".box-container").width()
        p_left = obj.css('margin-left')
        var p_l = Number(p_left.replace('px',''))
        var r_dis = (p_l/full_width)*100
        r_dis = r_dis.toFixed(2)
        $("#coord_x").html(r_dis)
    })

    $("div#slider").slider({
        value: 50,
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
            var point, setValue
            point = value/2 - 25
            setValue = Number(r_size.replace('%',''))
            setValue += point
            console.log(point, r_size, setValue)
            zoom(obj, setValue)
        } 
    });
})

function move_up(e){
    e.animate({
        'marginTop' : "-=10px" //moves up
    }, 'fast');
    p = e.offset();
}

function move_down(e){
    e.animate({
        'marginTop' : "+=10px" //moves down
    }, 'fast');
    p = e.offset();
}

function move_left(e){
    e.animate({
        'marginLeft' : "-=10px" //moves left
    }, 'fast');
    p = e.offset();
}

function move_right(e){
    e.animate({
        'marginLeft' : "+=10px" //moves right
    }, 'fast');
    p = e.offset();
}

function zoom(e, zx){
    e.css('background-size', zx+'%')
    var rate = (zx - 140)/5
    $("#valueSlide").html(rate+'%')
}