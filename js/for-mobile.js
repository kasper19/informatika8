
$(window).on('load',()=>{
    
    if ($(window).width() <= 850){
        $('.header-arrow').on('click', ()=>{
            $('.left').css({"left": "0%"})
            $('.main').css({"left": "100%"})
            $('.right').css({"left": "300%"})
           
        })
        $('#close-left').on('click', ()=>{
            
            $('.left').css({"left": "-100%"})
            
                $('.main').css({"left": "2%", "width": "92%"})
           
        })
      
        function showMainContent(){
            $('.left').css({"left": "-100%"})
            $('#arrow-left').css({"left": "1%"})
            setTimeout((()=>{
                $('.main').css({"left": "2%", "width": "92%"})
            }),400) 
            if($('[lang = bel]').css('display') === 'inline-block'){
                $('.main *[lang=ru]').css({"display":"none"})
                $('.main *[lang = bel]').css({"display":"inline-block"})
                $('.right *[lang=ru]').css({"display":"none"})
                $('.right *[lang = bel]').css({"display":"inline-block"})
            }
        }
        $('.paragraf').on('click', ()=>{
            showMainContent()
        })
        $('.chapter').on('click', ()=>{
            showMainContent()
        })
        $('.main').on('click',(ev)=>{
            if(ev.target.matches('a[href]')){
              $('.right').show()
              $('.right').animate({"left": "2%"},200)
            }
        })
        $('#reference').on('click',function(ev){
            $(this).animate({"top": "-500%"},400)
        })
        $('.right').on('click',function(ev){
            $('.right').animate({"left": "100%"},200)
            if(ev.target.matches('img')){
                $('.right').stop() 
            }
        })
       
        $('.for-email').on('click',function(ev){
            if(ev.target.matches('.send') || ev.target.matches('.textForSend')){
                return false
            }else{
                    $('.for-email').hide()
                    emailClickStatus = !emailClickStatus
     
            }
        })
    } 
})