let activeParagraf = []
let getChapterId = (chap) => {
    switch (chap) {
        case 'start.html':
            return '#start'
        case '1.html':
            return '#first'
        case '2.html':
            return '#second'
        case '3.html':
            return '#third'
        case '4.html':
            return '#forth'
        case '5.html':
            return '#fifth'
        case '6.html':
            return '#sixth'
        case '7.html':
            return '#seventh'
        case '8.html':
            return '#eighth'
        case '9.html':
            return '#nineth'
        case '10.html':
            return '#tenth'
        case '11.html':
            return '#eleventh'
        case '12.html':
            return '#twelveth'
        case '13.html':
            return '#thirteenth'
        case '14.html':
            return '#fourteenth'
        case '15.html':
            return '#fifteenth'
        case '16.html':
            return '#sixteenth'
        case '17.html':
            return '#seventeenth'
        case '18.html':
            return '#eighteenth'
        case '19.html':
            return '#nineteenth'
        case '20.html':
            return '#twentieth'
        case '21.html':
            return '#twenty-first'
        case '22.html':
            return '#twenty-sec'
        case '23.html':
            return '#twenty-third'
        case 'glossary.html':
            return '#glossary'
        case 'about.html':
            return '#about'
        case 'end-one.html':
            return '#end-one'
        case 'end-two.html':
            return '#end-two'
        case 'end-three.html':
            return '#end-three'
        case 'end-four.html':
            return '#end-four'
        case 'end-five.html':
            return '#end-five'
        default:
            return false
    }
}
let getChapterById = (chap) => {
    switch (chap) {
        case '#_from_authors':
            return 'start.html'
        case '#first':
            return '1.html'
        case '#example':
            return '1.html'
        case '#second':
            return '2.html'
        case '#third':
            return '1.html'
        case '#sec':
            return '2.html'
        case '#three':
            return '3.html'
        case '#f':
            return '4.html'
        case '#fiv':
            return '5.html'
        case '#six':
            return '6.html'
        case '#sev':
            return '7.html'
        case '#eight':
            return '8.html'
        case '#nine':
            return '9.html'
        case '#t':
            return '10.html'
        case '#el':
            return '11.html'
        case '#tw':
            return '12.html'
        case '#th':
            return '13.html'
        case '#fo':
            return '14.html'
        case '#fif':
            return '15.html'
        case '#sixt':
            return '16.html'
        case '#se':
            return '17.html'
        case '#eig':
            return '18.html'
        case '#ei':
            return '19.html'
        case '#tww':
            return '20.html'
        case '#tf':
            return '21.html'
        case '#twt':
            return '22.html'
        case '#tt':
            return '23.html'

        case '#tfo':
            return '24.html'
        case '#tfv':
            return '25.html'
        case '#tsix':
            return '26.html'
        case '#_glossary':
            return 'glossary.html'
        case '#_about':
            return 'about.html'
        case ('#_app-1-2'):
            return 'end-one.html'
        case ('#_app-2-2'):
            return 'end-two.html'
        case ('#_app-3-2'):
            return 'end-three.html'
        case ('#_app-4-2'):
            return 'end-four.html'
        case ('#_app-5-2'):
            return 'end-five.html'
        case ('#_app-1-1'):
            return 'end-one.html'
        case ('#_app-2-1'):
            return 'end-two.html'
        case ('#_app-3-1'):
            return 'end-three.html'
        case ('#_app-4-1'):
            return 'end-four.html'
        case ('#_app-5-1'):
            return 'end-five.html'
        case '':
            return 'start.html'
        default:
            return 'start.html'
        case '#pr':
            return
        case '#pr1':
            return
        case '#pr2':
            return
        case '#prim2':
            return

    }
}
let chapter = "start.html";
window.onload = function () {
    handleUrl(window.location.hash)
}
window.addEventListener('hashchange', () => handleUrl(window.location.hash))

function addLinkApply() {
    if (location.hash !== '#_glossary' && location.hash !== '#_from_authors' && location.hash !== '') {
        if ($('[lang = bel]').css('display') === 'none') {
            setTimeout(() => {
                addLink(glossaryItemsRu)
            }, 0)



        }
        if ($('[lang = ru]').css('display') === 'none') {
            setTimeout(() => {
                addLink(glossaryItemsBel)
            }, 0)


        }

    }
}

function handleUrl(hash) {

    let reg = /\d-/;
    if (hash.split('-')[0] === '#to') {
        chapter = hash.split('-')[1].split('top')[1] + '.html';

        getChapter('articles', chapter, '.main')
        getChapter('examples', chapter, '#tiltoops')

        $('.main').animate({
            scrollTop: 0
        }, 600);
        $('.right').animate({
            scrollTop: '0px',
        }, 600);
        if ($(window).width() > 850) {
            $('.main').css({
                "width": "56%"
            })

            setTimeout((() => {

                $('.right').animate({
                    "left": "79%"
                }, 400)
                $('#arrow-right').animate({
                    "left": "150%"
                }, 400)
            }), 200)

        }
    } else if (hash.split('')[1] === '_' || hash === '') {

        chapter = getChapterById(hash)
        getChapter('articles', chapter, '.main')

        $('.main').animate({
            scrollTop: 0
        }, 600);
        if ($(window).width() > 850) {
            $('.main').css({
                "width": "76%"
            })
            $('.right').animate({
                "left": "105%"
            }, 400)
            $('#arrow-right').animate({
                "left": "150%"
            }, 400)
        }
    } else {

        let subChap = hash.split(reg)[0]
        chapter = getChapterById(subChap)

        getChapter('articles', chapter, '.main')
        getChapter('examples', chapter, '#tiltoops')



        if ($(window).width() > 850) {
            $('.main').css({
                "width": "56%"
            })

            setTimeout((() => {

                $('.right').animate({
                    "left": "79%"
                }, 400)
                $('#arrow-right').animate({
                    "left": "150%"
                }, 400)
            }), 200)

        }
    }
    $('#dark-back1').show()

    if (activeParagraf[0] !== getChapterId(chapter)) {
        activeParagraf.unshift(getChapterId(chapter))
    }


    if ($(activeParagraf[0])) {
        $($(activeParagraf[0])[0].children[0].children[0]).css({
            'color': '#3385ff'
        })
        $($(activeParagraf[0])[0].children[1].children[0]).css({
            'color': '#3385ff'
        })
        for (var i = 1; i < activeParagraf.length; i++) {
            if (activeParagraf[i] !== activeParagraf[0]) {
                $($(activeParagraf[i])[0].children[0].children[0]).css({
                    'color': 'black'
                })
                $($(activeParagraf[i])[0].children[1].children[0]).css({
                    'color': 'black'
                })
            }

        }
    }

}


function getChapter(url, chap, block) {

    $.ajax({
            url: `./${url}/${chap}`,
            dataType: 'text',

        })
        .done(function (data) {
            let res = data.split('<body>')[1].split('</body>')[0]
            if ($('[lang = ru]').css('display') === 'none') {
                $(`${block}`).html(res)
                $(`${block} [lang = ru]`).css({
                    "display": "none"
                })
                $(`${block} [lang = bel]`).css({
                    "display": "inline-block"
                })
                $('#dark-back1').hide()
            }
            if ($('[lang = bel]').css('display') === 'none') {
                $(`${block}`).html(res)
                $(`${block} [lang = bel]`).css({
                    "display": "none"
                })
                $(`${block} [lang = ru]`).css({
                    "display": "inline-block"
                })
                $('#dark-back1').hide()
            }


        }).then(() => {
            addLinkApply()
        })
        .fail(function (xhr) {
            $('#dark-back1').hide()
            console.log(xhr.responseText);
        });
}





$('.main').click((e) => {
    if (e.target.matches('.next')) {

        let nextChapter = ''
        if (chapter === '23.html') {
            nextChapter = 'end.html'
            if (activeParagraf[0] !== '#end') {
                activeParagraf.unshift('#end')
            }
            getChapter('articles', nextChapter, '.main')
            $('#tiltoops').html('')
            $($(activeParagraf[0])[0].children[0].children[0]).css({
                'color': '#3385ff'
            })
            for (var i = 1; i < activeParagraf.length; i++) {
                if (activeParagraf[i] !== activeParagraf[0])
                    $($(activeParagraf[i])[0].children[0].children[0]).css({
                        'color': 'black'
                    })
            }
            if ($(window).width() > 850) {
                $('.main').css({
                    "width": "76%"
                })
                $('.right').animate({
                    "left": "105%"
                }, 400)
                $('#arrow-right').animate({
                    "left": "150%"
                }, 400)
            }


        } else {
            nextChapter = `${+chapter.split('.')[0] + 1}.html`
            if (activeParagraf[0] !== getChapterId(nextChapter)) {
                activeParagraf.unshift(getChapterId(nextChapter))
            }

            $($(activeParagraf[0])[0].children[0].children[0]).css({
                'color': '#3385ff'
            })
            for (var i = 1; i < activeParagraf.length; i++) {
                if (activeParagraf[i] !== activeParagraf[0])
                    $($(activeParagraf[i])[0].children[0].children[0]).css({
                        'color': 'black'
                    })
            }

        }

        chapter = nextChapter
        $('.main').animate({
            scrollTop: 0
        }, 600);
    }
    if (e.target.matches('.prev')) {
        let prevChapter = ''
        if (chapter === 'end-one.html') {
            prevChapter = '23.html'
            if (activeParagraf[0] !== '#twenty-third') {
                activeParagraf.unshift('#twenty-third')
            }

            $($(activeParagraf[0])[0].children[0].children[0]).css({
                'color': '#3385ff'
            })
            for (var i = 1; i < activeParagraf.length; i++) {
                if (activeParagraf[i] !== activeParagraf[0])
                    $($(activeParagraf[i])[0].children[0].children[0]).css({
                        'color': 'black'
                    })
            }

            if ($(window).width() > 850) {
                $('.main').css({
                    "width": "56%"
                })

                setTimeout((() => {

                    $('.right').animate({
                        "left": "79%"
                    }, 400)
                    $('#arrow-right').animate({
                        "left": "150%"
                    }, 400)
                }), 200)

            }

        } else {
            prevChapter = `${+chapter.split('.')[0] - 1}.html`
            if (activeParagraf[0] !== getChapterId(prevChapter)) {
                activeParagraf.unshift(getChapterId(prevChapter))
            }

            $($(activeParagraf[0])[0].children[0].children[0]).css({
                'color': '#3385ff'
            })
            for (var i = 1; i < activeParagraf.length; i++) {
                if (activeParagraf[i] !== activeParagraf[0])
                    $($(activeParagraf[i])[0].children[0].children[0]).css({
                        'color': 'black'
                    })
            }
        }

        chapter = prevChapter
        $('.main').animate({
            scrollTop: 0
        }, 600);
    }
})




$('body').on('click', (ev) => {

    if (ev.target.matches('.link-ex1')) {

        chapter = '19.html'
        getChapter('examples', chapter, '#tiltoops')
        setTimeout((() => {
            $('.right').animate({

                scrollTop: 2380
            }, 100);
        }), 500)


    }
    if (ev.target.matches('.link-ex0')) {

        chapter = '19.html'
        getChapter('examples', chapter, '#tiltoops')
        setTimeout((() => {
            $('.right').animate({

                scrollTop: 4000
            }, 100);
        }), 500)


    }
    if (ev.target.matches('.link-ex7')) {
        $('.pop-up').show()


    }
    if (ev.target.matches('.link-ex8')) {
        $('.pop-up2').show()


    }
    if (ev.target.matches('.close-pop')) {
        $('.pop-up').hide()
        $('.pop-up2').hide()
    }

    if (ev.target.matches('.link-ex2') || ev.target.matches('.link-ex3') || ev.target.matches('.link-ex4') || ev.target.matches('.link-ex5') || ev.target.matches('.link-ex6')) {
        chapter = '20.html'
        getChapter('examples', chapter, '#tiltoops')
    }



})

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}

$('.main').on('mouseover', function (e) {
    if (e.target.matches('.glossary-word')) {
        let def = ''
        if ($('[lang = ru]').css('display') === 'block') {

            glossaryItemsRu.forEach(el => {
                el.name.forEach(item => {
                    if (item === e.target.innerText) {
                        def = el.definition;
                    }
                })

            })
        }
        if ($('[lang = ru]').css('display') === 'none') {

            glossaryItemsBel.forEach(el => {
                el.name.forEach(item => {
                    if (item === e.target.innerText) {
                        def = el.definition;
                    }
                })

            })
        }
        var coords = getCoords(e.target)
        $('.glossary-link').show()
        $('.glossary-link').text(def)
        if ($(window).width() > 850) {
            $('.glossary-link').css({
                "top": coords.top + 20,
                "left": coords.left
            })
        } else {
            $('.glossary-link').css({
                "top": coords.top + 20,
                "left": '3%'
            })
        }

    }
})
$('.main').on('mouseout', function (e) {
    if (e.target.matches('.glossary-word')) {
        $('.glossary-link').hide()
    }
})
