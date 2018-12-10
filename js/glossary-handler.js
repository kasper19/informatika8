let glossaryItemsRu = [
    {
        name: ["Алгоритм", "алгоритм"],
        definition: 'Конечная последовательность точных действий, формальное выполнение которых позволяет получить решение задачи для любого допустимого набора исходных данных.'
    },
    {
        name: ['Алгоритмы', "алгоритмы", "алгоритмов", "алгоритмами"],
        definition: 'Понятные и конечные последовательности точных действий (команд), формальное выполнение которых позволяет получить решение поставленной задачи.'
    },

    {
        name: ["Алгоритмическая конструкция ветвление", 'ветвление'],
        definition: 'Обеспечивает выполнение одной или другой последовательности команд в зависимости от истинности или ложности некоторого условия'
    },

    {
        name: ["Алгоритмическая конструкция повторение", "повторение", 'цикл', ],
        definition: 'Представляет собой последовательность действий, выполняемых многократно.'
    },
    {
        name: ['Анимация', 'анимация'],
        definition: 'Процесс изменения размера, положения, цвета или формы объекта с течением времени.'
    },
    {
        name: ['анимация движения', "анимации движения"],
        definition: 'Анимация, в которой достаточно задать состояние объекта в начале и в конце движения, а все промежуточные фазы движения рассчитает программа.'
    },
    {
        name: ["Аудиоинформация", "звукозапись"],
        definition: 'Звуковая информация, записанная каким-либо образом, пригодным для воспроизведения.'
    },

    {
        name: ['Аудиоредактор', 'аудиоредактор', ],
        definition: 'Программное средство, которое используется для редактирования аудиофайлов.'
    },
    {
        name: ['Базовые алгоритмические конструкции'],
        definition: 'Следование, цикл и ветвление.'
    },
    {
        name: ['Битрейт', 'битрейт', "битрейта"],
        definition: 'Количество бит двоичной записи, которое приходится на секунду воспроизведения (скорость потока).'
    },
    {
        name: ['Видеоконвертер', 'видеоконвертер'],
        definition: 'Программное средство для конвертации видеофайлов.'
    },
    {
        name: ['Видеопереход между клипами', 'видеопереход между клипами', 'видеопереход', 'видеопереходы'],
        definition: 'Эффект смены, который можно вставлять между клипами.'
    },
    {
        name: ['Видеоредактор', 'видеоредактор', ],
        definition: 'Программное средство для видеомонтажа.'
    },
    {
        name: ['Видеоряд', 'видеоряд'],
        definition: 'Полоса из условных изображений видеофрагментов, которая отражает структуру видеофильма.'
    },
    {
        name: ['Вспомогательный алгоритм', "вспомогательный алгоритм"],
        definition: 'Алгоритм, который можно использовать в других алгоритмах, указав его имя и, если необходимо, значения параметров.'
    },
    {
        name: ["Высказывание", 'высказывание'],
        definition: 'Повествовательное предложение (утверждение), о котором можно сказать, истинно оно или ложно.'
    },

    {
        name: ['Исполнитель', 'исполнитель'],
        definition: 'Наука, изучающая методы представления, хранения, передачи, обработки и использования информации с применением компьютерных технологий в различных сферах человеческой деятельности.'
    },
    {
        name: ['Кадры', 'кадры', "кадр", ],
        definition: 'Изображения последовательных фаз движения объектов или их частей.'
    },
    {
        name: ['Клип', 'клип', "клипа"],
        definition: 'Видеофрагмент.'
    },
    {
        name: ['Ключевые кадры', 'ключевые кадры'],
        definition: 'Кадры, содержимое которых определяется автором анимации.'
    },
    {
        name: ['Кодеке', 'кодек'],
        definition: 'Специальная программа, которая сжимает (уменьшает) и восстанавливает первоначальный объем аудио- или видеофайла.'
    },
    {
        name: ['Колонтитул', 'колонтитул'],
        definition: 'Текст или изображение, которые размещаются на краю каждой страницы документа и повторяются на всех страницах.'
    },

    {
        name: ['Компьютерный видеомонтаж', 'компьютерный видеомонтаж', "видеомонтаж"],
        definition: 'Процесс создания видеофильма из видеофрагментов с помощью специального программного средства.'
    },
    {
        name: ['Конвертация ', 'конвертация ', ],
        definition: 'Процесс изменения его формата.'
    },
    {
        name: ['Логические операции', 'логические операции'],
        definition: 'НЕ, И, ИЛИ, в PascalABC not, and, or (соответственно).'
    },
    {
        name: ['логический тип данных', 'boolean'],
        definition: 'Тип данных, предназначенный для работы с условиями. Величины типа boolean могут принимать два значения — false (ложь) и true (истина).'
    },
    {
        name: ['логическое выражение', 'Логическое выражение'],
        definition: 'Выражение, принимающее одно из двух значений: true или false.'
    },
    {
        name: ['Маркированный список', 'маркированный список'],
        definition: 'Список абзацев, отмеченных маркерами.'
    },
    {
        name: ['Медиаплеер', 'медиаплеер', "медиаплеера"],
        definition: 'Плеер, который воспроизводит как звук, так и видео.'
    },
    {
        name: ['Многоуровневый список', 'многоуровневый список'],
        definition: 'Список абзацев, в которых применяются одновременно различные виды номеров и/или маркеров.'
    },
    {
        name: ['Направляющий слой', 'направляющий слой', ],
        definition: 'Слой, содержащий траекторию движения.'
    },
    {
        name: ['Нумерованный список', 'нумерованный список', ],
        definition: 'Список абзацев, отмеченных номерами.'
    },
    {
        name: ["Оглавление", "оглавление"],
        definition: 'Указатель заголовков в документе, отражающий его структуру и ускоряющий поиск частей произведения по номерам страниц.'
    },

    {
        name: ['Оператор ветвления', 'оператор ветвления'],
        definition: 'Команда, реализующая алгоритмическую конструкцию ветвление на языке программирования.'
    },
    {
        name: ['Оператор присваивания', "оператор присваивания"],
        definition: 'Предназначен для того, чтобы задавать значения переменным и вычислять значение выражений.'
    },

    {
        name: ['Оператор цикла', 'оператор цикла'],
        definition: 'Команда, реализующая алгоритмическую конструкцию повторение на языке программирования.'
    },
    {
        name: ['Плеер', 'плеер'],
        definition: 'Программа для воспроизведения аудио- и видеофайлов.'
    },
    {
        name: ['Программа', 'программа'],
        definition: 'Последовательность команд, исполнителем которой является компьютер. Представляет собой запись на некотором формальном языке — языке программирования.'
    },
    {
        name: ['Публикация', 'публикация', ],
        definition: 'Сохранение фильма в формате SWF.'
    },
    {
        name: ['Система проверки правописания', 'система проверки правописания'],
        definition: 'Компьютерная программа, осуществляющая проверку заданного текста на наличие в нем орфографических ошибок.'
    },
    {
        name: ['Следование', 'следование'],
        definition: 'Последовательность команд алгоритма, которые выполняются в том порядке, в котором они записаны. Среди команд, образующих алгоритмическую конструкцию следование, отсутствуют команды, меняющие порядок выполнения других команд.'
    },
    {
        name: ['Составное условие', 'составное условие'],
        definition: 'Логическое выражение, в котором наряду с простыми условиями (сравнениями) используются логические операции.'
    },
    {
        name: ['Список', "список"],
        definition: 'Абзацы, отмеченные маркерами или номерами.'
    },
    {
        name: ['Стиль', 'стиль'],
        definition: 'Набор параметров форматирования текста.'
    },
    {
        name: ['Текстовый клип', "текстовый клип"],
        definition: 'Видеофрагмент с текстовой надписью на прозрачном или цветном фоне.'
    },
    {
        name: ['Фильм', 'фильм'],
        definition: 'Документ, созданный в Flash.'
    },
    {
        name: ['Цикл с параметром', 'цикл с параметром'],
        definition: 'Используется тогда, когда известно количество повторений.'
    },
    {
        name: ['Цикл с предусловием', 'цикл с предусловием'],
        definition: 'Используется в том случае, когда известно условие продолжения работы.'
    },
    {
        name: ['Экземпляр', 'экземпляр'],
        definition: 'Копия символа, помещенная в рабочую область.'
    }


]

//бел версия
let glossaryItemsBel = [

    {
        name: ['Алгарытмы', 'алгарытмы', "алгарытм", "алгарытмамі"],
        definition: 'Зразумелыя і канечныя паслядоўнасцi дакладных дзеянняў (каманд), фармальнае выкананне якіх дазваляе атрымаць рашэнне пастаўленай задачы.'
    },
    {
        name: ['Алгарытмічная канструкцыя галінаванне', 'алгарытмічная канструкцыя галінаванне', 'галінаванне'],
        definition: 'Забяспечвае выкананне адной ці другой паслядоўнасці каманд у залежнасці ад праўдзівасці або непраўдзівасці некаторай умовы.'
    },

    {
        name: ['Алгарытмічная канструкцыя паслядоўнасць', 'алгарытмічная канструкцыя паслядоўнасць', "паслядоўнасць"],
        definition: 'Паслядоўнасць каманд алгарытму, што выконваюцца ў тым парадку, у якім яны запісаны. Сярод каманд, якія ўтвараюць алгарытмічную канструкцыю паслядоўнасць, адсутнічаюць каманды, што змяняюць парадак выканання іншых каманд.'
    },
    {
        name: ['Алгарытмічная канструкцыя паўтарэнне (цыкл)', 'паўтарэнне'],
        definition: 'Паслядоўнасць дзеянняў, якія выконваюцца шматразова.'
    },
    {
        name: ['Анімацыя', 'анімацыя', "анімацыі"],
        definition: 'Працэс змянення памеру, становішча, колеру або формы аб’екта з цягам часу.'
    },
    {
        name: ['Анімацыя руху', 'анімацыя руху'],
        definition: 'Анімацыя, у якой дастаткова задаць стан аб’екта ў пачатку і ў канцы руху, а ўсе прамежкавыя фазы руху разлічыць праграма.'
    },
    {
        name: ['Анімацыя формы', 'анімацыя формы'],
        definition: 'Плаўнае змяненне аб’екта анімацыі.'
    },
    {
        name: ['Аператар галінавання', 'аператар галінавання'],
        definition: 'Каманда, якая рэалізуе алгарытмічную канструкцыю галінаванне на мове праграміравання.'
    },
    {
        name: ['Аператар прысвойвання', 'аператар прысвойвання'],
        definition: 'Прызначаны для таго, каб задаваць значэнні пераменным і вылічаць значэнне выразу.'
    },
    {
        name: ['Аператар цыкла', 'аператар цыкла'],
        definition: 'Каманда, якая рэалізуе алгарытмічную канструкцыю паўтарэнне на мове праграміравання.'
    },
    {
        name: ['Аўдыяінфармацыя (гуказапіс)', 'аўдыяінфармацыя', "гуказапіс"],
        definition: 'Гукавая інфармацыя, запісаная якім-небудзь чынам, прыдатным для ўзнаўлення.'
    },
    {
        name: ['Аўдыярэдактар', 'аўдыярэдактар'],
        definition: 'Праграмныя сродкі, якія выкарыстоўваюцца для рэдагавання аўдыяфайлаў.'
    },
    {
        name: ['Аўдыяфайл', "аўдыяфайл"],
        definition: 'Файл з аудыяінфармацыяй у лічбавай форме.'
    },
    {
        name: ['Базавыя алгарытмічныя канструкцыі', 'базавыя алгарытмічныя канструкцыі'],
        definition: 'Паслядоўнасць, цыкл і галінаванне.'
    },
    {
        name: ['Бітрэйт', 'хуткасць патоку', "бітрэйт"],
        definition: 'Колькасць біт двайковага запісу, якая прыходзіцца на секунду праслухоўвання.'
    },
    {
        name: ['Відэаінфармацыя', "відэаінфармацыя", 'відэаінфармацыі'],
        definition: 'Адлюстраванне рухомых аб’ектаў, запісанае якім-небудзь чынам, прыдатным для ўзнаўлення.'
    },
    {
        name: ['Відэаканвертар', 'відэаканвертар'],
        definition: 'Праграмны сродак, які выкарыстоўваецца для канвертацыі відэафайлаў.'
    },
    {
        name: ['Відэапераход паміж кліпамі', 'відэапераход паміж кліпамі', "відэапераход"],
        definition: 'Эфект змены, які можна ўстаўляць паміж кліпамі.'
    },
    {
        name: ['Відэарад', 'відэарад', ],
        definition: 'Паласа з умоўных відарысаў відэафрагментаў, якая адлюстроўвае структуру відэастужкі.'
    },
    {
        name: ['Відэарэдактар', 'відэарэдактар'],
        definition: 'Праграмны сродак для відэамантажу.'
    },
    {
        name: ['Выказванне', 'выказванне'],
        definition: 'Апавядальны сказ (сцверджанне), пра які можна сказаць, праўдзівы ён ці непраўдзівы.'
    },
    {
        name: ['Выканаўца алгарытму', 'выканаўца алгарытму'],
        definition: 'Чалавек, група людзей або тэхнічнае ўстройства, якія разумеюць каманды алгарытму і ўмеюць правільна іх выконваць.'
    },

    {
        name: ['Дапаможны алгарытм', 'дапаможны алгарытм'],
        definition: 'Алгарытм, які цалкам выкарыстоўваецца ў складзе іншага алгарытму.'
    },
    {
        name: ['Змест', 'змест', ],
        definition: 'Паказальнік загалоўкаў у дакуменце, які адлюстроўвае яго структуру і паскарае пошук частак твора па нумарах старонак.'
    },
    {
        name: ['Кадры', 'кадры'],
        definition: 'Відарысы паслядоўных фаз руху аб’ектаў або іх частак.'
    },
    {
        name: ['Калонтытул', 'калонтытул'],
        definition: 'Тэкст або відарыс, якія размяшчаюцца на краі кожнай старонкі дакумента і паўтараюцца на ўсіх старонках.'
    },
    {
        name: ['Каманды кіравання (кіруючыя канструкцыі)', 'аманды кіравання', "кіруючыя канструкцыі"],
        definition: 'Каманды, якія кіруюць парадкам выканання іншых каманд у праграме (каманды цыкла і галінавання).'
    },
    {
        name: ['Камп’ютарная анімацыя', 'камп’ютарная анімацыя'],
        definition: 'Стварэнне анімацыі з дапамогай камп’ютара.'
    },
    {
        name: ['Камп’ютарны відэамантаж', 'камп’ютарны відэамантаж'],
        definition: 'Гэта працэс стварэння відэафільма з відэафрагментаў з дапамогай спецыяльнага праграмнага сродку.'
    },
    {
        name: ['Канвертацыя аўдыяфайла', 'канвертацыя аўдыяфайла'],
        definition: 'Працэс змянення фармату аўдыяфайла.'
    },
    {
        name: ['Кліп', 'кліп'],
        definition: 'Відэафрагмент.'
    },
    {
        name: ['Ключавыя кадры', 'ключавыя кадры'],
        definition: 'Кадры, змесціва якіх вызначаецца аўтарам анімацыі.'
    },
    {
        name: ["Кодэк", "кодэк", ],
        definition: 'Спецыяльная праграма, якая сціскае (памяншае) і аднаўляе першапачатковы аб’ём аўдыя- або відэафайла..'
    },

    {
        name: ['Лагічны выраз', 'лагічны выраз'],
        definition: 'Выраз, які прымае адно з двух значэнняў: true або false.'
    },
    {
        name: ['Лагічны тып даных Boolean', "лагічны тып даных Boolean", 'лагічны тып', "boolean", ],
        definition: 'Тып даных, прызначаны для працы з умовамі. Велічыні тыпу boolean могуць прымаць два значэнні — false (непраўдзіва) і true (праўдзіва).'
    },
    {
        name: ['Лагічныя аперацыі', 'лагічныя аперацыі'],
        definition: 'НЕ, І, АБО, у PascalABC not, and, or (адпаведна).'
    },
    {
        name: ['Маркіраваны спіс', 'маркіраваны спіс'],
        definition: 'Спіс абзацаў, адзначаных маркерамі.'
    },
    {
        name: ['Медыяплэеры', 'медыяплэеры'],
        definition: 'Плэеры, якія прайграюць як гук, так і відэа.'
    },
    {
        name: ['Накіравальны слой', 'накіравальны слой'],
        definition: 'Слой, які змяшчае траекторыю руху.'
    },
    {
        name: ['Нумараваны спіс', 'нумараваны спіс'],
        definition: 'Спіс абзацаў, адзначаных нумарамі.'
    },
    {
        name: ['Пакадравая анімацыя', 'пакадравая анімацыя'],
        definition: 'Анімацыя, якая складаецца з ключавых кадраў.'
    },
    {
        name: ['Плэер', 'плэер'],
        definition: 'Праграма для прайгравання аўдыя- і відэафайлаў.'
    },
    {
        name: ['Праграма', 'праграма', "праграм"],
        definition: 'Паслядоўнасць каманд, выканаўцам якой з’яўляецца камп’ютар.'
    },
    {
        name: ['Публікацыя', 'публікацыя'],
        definition: 'Захаванне фільма ў фармаце SWF.'
    },
    {
        name: ['Рэдагаванне аўдыяфайла', 'рэдагаванне аўдыяфайла'],
        definition: 'Працэс яго змянення, які складаецца ў выразанні, устаўцы, выдаленні і камбінаванні частак аўдыяфайла, што называюцца фрагментамі.'
    },
    {
        name: ['Састаўныя ўмовы', 'састаўныя ўмовы'],
        definition: 'Лагічныя выразы, у якіх поруч з простымі ўмовамі (параўнаннямі) выкарыстоўваюцца лагічныя аперацыі.'
    },
    {
        name: ['Сімвал (Flesh)', 'сімвал (Flesh)'],
        definition: 'Аб’ект, змешчаны ў бібліятэку.'
    },
    {
        name: ['Сістэма праверкі правапісу', 'сістэма праверкі правапісу'],
        definition: 'Камп’ютарная праграма, якая ажыццяўляе праверку зададзенага тэксту на наяўнасць у ім арфаграфічных памылак.'
    },
    {
        name: ['Спіс', 'спіс'],
        definition: ' Абзацы, адзначаныя маркерамі або нумарамі.'
    },
    {
        name: ['Стыль', 'стыль'],
        definition: 'Набор параметраў фармаціравання тэксту.'
    },
    {
        name: ["Тэкставы кліп", 'тэкставы кліп'],
        definition: 'Відэафрагмент з тэкставым надпісам на празрыстым або каляровым фоне.'
    },
    {
        name: ["Умова для выканаўцы", 'умова для выканаўцы'],
        definition: 'Зразумелае выканаўцу выказванне, якое можа быць праўдзівым (выконвацца) або непраўдзівым (не выконвацца).'
    },
    {
        name: ["Фармат аўдыяфайла", 'фармат аўдыяфайла'],
        definition: 'Структура і асаблівасці запісу ў файле лічбавай аўдыяінфармацыі.'
    },
    {
        name: ["Фармат відэафайла", 'фармат відэафайла'],
        definition: 'Структура і асаблівасці запісу ў файле лічбавай відэаінфармацыі, якая суправаджаецца аўдыяінфармацыяй.'
    },
    {
        name: ["Фільм", 'фільм'],
        definition: 'Дакумент, створаны ў Flash.'
    },
    {
        name: ["Цыкл з параметрам", 'цыкл з параметрам'],
        definition: 'Выкарыстоўваецца тады, калі вядомая колькасць паўтарэнняў.'
    },
    {
        name: ["Цыкл з перадумовай", 'цыкл з перадумовай'],
        definition: 'Выкарыстоўваецца ў тым выпадку, калі вядомая ўмова працягвання работы.'
    },
    {
        name: ["Шматузроўневы спіс", 'шматузроўневы спіс'],
        definition: 'Спісы, у якіх выкарыстоўваюцца адначасова розныя віды нумароў і/або маркераў.'
    },
    {
        name: ["Экзэмпляр", 'экзэмпляр'],
        definition: 'Копія сімвала, змешчаная ў рабочую вобласць.'
    },

]

function addLink(arr) {
    let words = [...arr]

    $($('.main')[0].children).each((ind, item) => {
        $($(item)[0].children).each((i, elem) => {
            if (!elem.matches('.not-linked')) {
                words.forEach(word => {
                    word.name.forEach(item => {
                        let regexp = new RegExp(" " + item + "[\\s,]", 'i')

                        if (regexp.exec(elem.innerHTML)) {
                            result = regexp.exec(elem.innerHTML)
                            let elName = elem.name ? (elem.name.split('-')[0]) : null


                            if (elem.className !== 'bordered' && elem.className !== 'noparset' && !elem.matches('.glossary-word') && !elem.matches('.about') && elName !== 'to' && elem.tagName !== 'H4' && elem.tagName !== 'H1' && elem.tagName !== 'H5' && elem.tagName !== 'B') {
                                var reg = new RegExp(item, 'g');

                                elem.innerHTML = elem.innerHTML.replace(reg, '<span style="color: gray;" class = "glossary-word">' + item + '</span>');
                            }



                        }
                    })

                })
            }
        })


    })

}
