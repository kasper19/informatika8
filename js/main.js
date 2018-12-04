let emailClickStatus = null;

(function () {
    let clickState = false;
    let imgState = false;
    let screenWidth = $(window).width()


    if ($(window).width() > 850) {


        $('.header-arrow').on('click', function () {
            $('.left').css({
                "left": "1%",
                "transition": "0.5s"
            })
            $('#arrow-left').css({
                "left": "-50%",
                "transition": "0.5s"
            })
            let mainWidth = $('.main').width()

            if ((mainWidth * 100) / screenWidth > 85) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "76%",
                        "left": "22%"
                    })
                }), 200)
            }
            if ((mainWidth * 100) / screenWidth < 85) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "56%",
                        "left": "22%"
                    })
                }), 200)
            }
        })

        $('#close-left').on('click', () => {
            $('.left').css({
                "left": "-50%"
            })
            $('#arrow-left').css({
                "left": "1%"
            })

            let right = +$('.right').css("left").split('px')[0]
            let mainWidth = $('.main').width()
            if ((mainWidth * 100) / screenWidth > 65) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "96%",
                        "left": "2%"
                    })

                }), 200)
            }

            if ((mainWidth * 100) / screenWidth < 65) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "76%",
                        "left": "2%"
                    })
                }), 200)
            }

        })

    }



    $('.forTitle').click(function (ev) {

        if (ev.target.matches('.title') || ev.target.matches('.forTitle img')) {
            $(ev.target.parentElement.parentElement.children[1]).slideToggle();
            $(ev.target.parentElement.children[2]).toggleClass('rotate-icon')
            $(ev.target.parentElement).toggleClass('onTitle-click')
        }
        if (ev.target.matches('.forTitle')) {
            $(ev.target.parentElement.children[1]).slideToggle();
            $(ev.target).toggleClass('onTitle-click')
            $(ev.target.children[2]).toggleClass('rotate-icon')
        }
    })
//уменьшение текста
    $('#little-a').on('click', () => {
        let startMainSize = +$('.main').css('font-size').split('px')[0]
        let startRightSize = +$('.right').css('font-size').split('px')[0]
        $('.main').css({
            'font-size': startMainSize - 2 + 'px'
        })
        $('.right').css({
            'font-size': startRightSize - 2 + 'px'
        })
        $('#big-a').css('opacity', 0.5)
        $('#little-a').css('opacity', 1)
    })
//увеличение текста

    $('#big-a').on('click', () => {
        let startMainSize = +$('.main').css('font-size').split('px')[0]
        let startRightSize = +$('.right').css('font-size').split('px')[0]
        $('.main').css({
            'font-size': startMainSize + 2 + 'px'
        })
        
        $('.right').css({
        'font-size': startRightSize + 2 + 'px'
    })
        $('#big-a').css('opacity', 1)
        $('#little-a').css('opacity', 0.5)
    })

    //вывод справки
    $('.help').on('click', () => {
        $('#reference').animate({
            "top": "5px"
        }, 400)
    })
    $('#close-ref').on('click', () => {
        $('#reference').animate({
            "top": "-300%"
        }, 400)
    })

    // вывод боковых картинок на весь экран
    $('body').on('click', (ev) => {
        if (ev.target.matches('.right img:not(.not-incresed)') || ev.target.matches('.hiddenEl img:not(.close-pop)')) {
            clickState = !clickState
            
            imgState = !imgState
            if (clickState && imgState) {
                $('#for-tiltoop-pics, #dark-back').css({
                    "display": "block"
                })
               
                let src = ev.target.src.split('/img')[1];

                $('#for-tiltoop-pics img').attr('src', `img/${src}`)
                $('#for-tiltoop-pics').css({
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': 'center'
                })
                // $('#for-tiltoop-pics img').css({'width':'70%'})
                clickState = !clickState
                imgState = !imgState
            }

        } else {
            if (!clickState && !imgState) {
                $('#for-tiltoop-pics, #dark-back').css({
                    "display": "none"
                })
            }
        }
    })
    //показ и закрытие формы
    $('#email').on('click', () => {
        if (emailClickStatus === null) {
            emailClickStatus = false
        }
        if ($('[lang = bel]').css('display') === 'none') {
            $('.for-email[lang=ru]').show()
            emailClickStatus = !emailClickStatus

        }
        if ($('[lang = ru]').css('display') === 'none') {
            $('.for-email[lang=bel]').show()
            emailClickStatus = !emailClickStatus

        }


    })
    if ($(window).width() > 850) {
        $('.close-email').on('click', () => {
            $('.for-email').hide()
            emailClickStatus = !emailClickStatus

        })
        $('#close-right').click(() => {
            $('.right').animate({
                "left": "200%"
            }, 200)
            let mainWidth = $('.main').width()

            if ((mainWidth * 100) / screenWidth > 75) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "96%",
                        "left": "2%"
                    })
                }), 200)
            }
            if ((mainWidth * 100) / screenWidth < 75) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "76%",
                        "left": "22%"
                    })
                }), 200)
            }

            setTimeout((() => {
                $('#arrow-right').animate({
                    "left": "10%"
                }, 400)
            }), 200)


        })
        $('#arrow-right').click(() => {
            let mainWidth = $('.main').width()
            $('.right').animate({
                "left": "79%"
            }, 400)
            $('#arrow-right').animate({
                "left": "100%"
            }, 400)
            if ((mainWidth * 100) / screenWidth < 85) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "56%",
                        "left": "22%"
                    })
                }), 200)
            }
            if ((mainWidth * 100) / screenWidth > 85) {
                setTimeout((() => {
                    $('.main').css({
                        "width": "76%",
                        "left": "2%"
                    })
                }), 200)
            }
        })
    }



    $('.main').on('click', (ev) => {
        if (ev.target.matches('.questions-btn')) {

            $(ev.target.parentElement.children[2]).slideToggle();
           
        }
        if (ev.target.matches('.practise-btn')) {
            $(ev.target.parentElement.children[4]).slideToggle();
        }
    })

    $('#lng').on('click', function () {
        changeLng()
        if (!emailClickStatus) {
            $('.for-email[lang=ru]').hide()
            $('.for-email[lang=bel]').hide()
        }



    })
    // Обработка кнопки отправки формы
    $('.for-email button').on('click', (ev) => {
        ev.preventDefault();
        if ($(ev.target.parentElement.children[1].children[1]).val() === '' &&
            ev.target.parentElement.children[1].children[2] === undefined) {
            if ($('[lang = bel]').css('display') === 'none') {
                $(ev.target.parentElement.children[1]).append('<p>Поле обязательное для заполнения</p>')
            } else {
                $(ev.target.parentElement.children[1]).append('<p>Поле абавязковае для запаўнення</p>')
            }

            $(ev.target.parentElement.children[1].children[2]).css({
                "color": "red",
                "font-size": "14px"
            })
        }
        if ($(ev.target.parentElement.children[1].children[1]).val() !== '' &&
            ev.target.parentElement.children[1].children[2] !== undefined) {
            $(ev.target.parentElement.children[1].children[2]).remove()
            $(ev.target.parentElement).trigger("reset");
        }
        if ($(ev.target.parentElement.children[1].children[1]).val() !== '' &&
            ev.target.parentElement.children[1].children[2] === undefined) {
            $(ev.target.parentElement).trigger("reset");
        }
    })

    function changeLng() {

        if ($('[lang = bel]').css('display') === 'none') {
            $('[lang = ru]').css({
                "display": "none"
            })
            $('[lang = bel]').css({
                "display": "inline-block"
            })
            $('#lng').html(`БЕЛ <img src="images/arrow-lng.png">`)
            $('.help').css({
                "padding-top": "32px"
            })
            if(location.hash!=='#_glossary'){
                addLink(glossaryItemsBel)
            }
            


        } else {
            $('[lang = ru]').css({
                "display": "inline-block"
            })
            $('[lang = bel]').css({
                "display": "none"
            })

            $('#lng').html(`РУС <img src="images/arrow-lng.png">`)
            if(location.hash!=='#_glossary'){
                addLink(glossaryItemsRu)
            }
            
        }
    }
    $('.start-dynamic-wrapper').on('click', function(){
        $(this).fadeOut()
        setTimeout(()=>{
            $(this).remove()
        },3000)
       
    })

    window.onload = function () {
       $('#dark-back1').hide()
    }
})()