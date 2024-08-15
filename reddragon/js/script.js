$(document).ready(function(){

    let key;

    $($('li')[0]).mouseenter(function(){

        $('.box1').slideDown(150)
    })
    $($('li')[0]).mouseleave(function(){

        key=setTimeout(function(){
            $('.box1').slideUp(150)
        },200)
    })

    $('.box1').mouseenter(function(){
        clearTimeout(key)
        $('.box1').slideDown(150)
    })
    $('.box1').mouseleave(function(){

        $('.box1').slideUp(150)
    })

    $('.menue').click(function(){
        $('.box-menu').slideDown(250)
    })
    $('.exite').click(function(){
        $('.box-menu').slideUp(250)
    })

    $('.right').click(function(){
        $('.box-menu2').addClass('show')
    })
    $('.left').click(function(){
        $('.box-menu2').removeClass('show')
    })


    const slid =document.querySelectorAll('.slid')
    let index=0;
    setInterval(function(){

        slid[index].style.animation='n1 0.5s ease-in forwards'
        if(index >= slid.length-1){
            index = 0;
        }
        else{
            index++;
        }
        slid[index].style.animation='n2 0.5s ease-in forwards'


    },5000)



    const box2_item =document.querySelectorAll('.box2-item')
    let index2=0;

    setInterval(function(){

        box2_item[index2].style.animation='n1 0.5s ease-in forwards'
        if(index2 >= box2_item.length-1){
            index2 = 0;
        }
        else{
            index2++;
        }
        box2_item[index2].style.animation='n2 0.5s ease-in forwards'


    },5000)
    
    // $('.right2').click(function(){
    //     box2_item[index2].style.animation='n1 0.5s ease-in forwards'
    //     if(index2 >= box2_item.length-1){
    //         index2 = 0;
    //     }
    //     else{
    //         index2++;
    //     }
    //     box2_item[index2].style.animation='n2 0.5s ease-in forwards'
    // })

    // $('.left2').click(function(){
    //     box2_item[index2].style.animation='n3 0.5s ease-in forwards'
    //     if(index2 == 0){
    //         index2 = box2_item.length-1;
    //     }
    //     else{
    //         index2--;
    //     }
    //     box2_item[index2].style.animation='n4 0.5s ease-in forwards'
    // })

    console.log(slid)

})