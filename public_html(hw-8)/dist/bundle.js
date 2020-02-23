/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: news, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"news\":[{\"id\":1,\"title\":\"Россия оказалась под угрозой потери первого места в медальном зачете Игр в Сочи\",\"text\":\"Сборная России может потерять первое место в медальном зачете зимних Олимпийских игр в Сочи 2014 года. Об этом стало известно после того, как биатлонист Евгений Устюгов, по информации источника, был признан виновным в нарушении допинговых правил, а его результаты с августа 2013 года по конец сезона 2013-2014 — аннулированы, пишет ТАСС. Как указывает агентство, в данный период попадает и сочинская Олимпиада, поэтому Устюгов должен быть лишен золота, завоеванного на этих Играх в эстафете. В связи с этим российская сборная лишится лидерства в общекомандном медальном зачете ОИ-2014 и опустится на третью строчку, пропустив вперед Норвегию и Канаду, которые займут первое и второе места соответственно.\",\"image\":{\"small\":\"/images/news1_small.jpg\",\"large\":\"/images/news1_large.jpg\"},\"features\":{\"newsCategory\":\"главное\",\"newsDate\":\"сегодня\",\"newsActivity\":\"высокая\",\"newsRating\":\"5\"}},{\"id\":2,\"title\":\"Уефа исключили «Манчестер Сити» из еврокубков на два сезона\",\"text\":\"Союз европейских футбольных ассоциаций (УЕФА) отстранил английский «Манчестер Сити» от участия в еврокубках в течение двух следующих сезонов за нарушение финансового фейр-плей. В ходе расследования УЕФА пришел к выводу, что клуб предоставлял неверную отчетность в период с 2012 по 2016 год. Санкции не ограничиваются исключением из еврокубков. Клуб будет обязан выплатить денежный штраф в размере 30 миллионов евро. Строгость наказания объясняется серьезными нарушениями «Сити» в отчетности финансовым органам УЕФА: клуб завышал суммы спонсорских контрактов авиакомпании Etihad. Основная часть средств поступала непосредственно от Abu Dhabi United Group — компании-владельца клуба Мансура ибн Зайд аль-Нахайяна.\",\"image\":{\"small\":\"/images/news2_small.jpg\",\"large\":\"/images/news2_large.jpg\"},\"features\":{\"newsCategory\":\"главное\",\"newsDate\":\"ранее\",\"newsActivity\":\"высокая\",\"newsRating\":\"4\"}},{\"id\":3,\"title\":\"В Китае решили казнить за сокрытие заражения коронавирусом\",\"text\":\"В Китае решили казнить за сокрытие заражения коронавирусом, а также за искажение информации о состоянии больного. Об этом в субботу, 15 февраля, сообщает DW со ссылкой на заявление китайского суда. Помимо этого, уголовным преступлением будет считаться утаивание истории своих путешествий. Заболевший, а затем распространивший коронавирус человек будет обвинен в создании угрозы общественной безопасности и приговорен к 10-летнему либо пожизненному тюремному заключению или к смертной казни. Таким образом, комиссия по здравоохранению Китая запретила гражданам с симптомами вируса перемещаться по территории государства на автобусах, поездах и самолетах. Вернувшиеся после праздников из зоны очага эпидемии должны находиться дома или под наблюдением врачей две недели. Отказ от карантина будет караться наказанием.\",\"image\":{\"small\":\"/images/news3_small.jpg\",\"large\":\"/images/news3_large.jpg\"},\"features\":{\"newsCategory\":\"главное\",\"newsDate\":\"ранее\",\"newsActivity\":\"низкая\",\"newsRating\":\"3\"}},{\"id\":4,\"title\":\"План по Украине исчез с официального сайта Мюнхенской конференции\",\"text\":\"План по урегулированию ситуации на Украине исчез с официального сайта Мюнхенской конференции. Об этом сообщает Obozrevatel.ua. Также исчезло сообщение, в котором говорилось, что данный документ был разработан в соавторстве со специалистами по международной безопасности и поддержан ими, пишет издание. Документ был опубликован 14 февраля. Он получил название «Двенадцать шагов к большей безопасности на Украине и евроатлантическом регионе». «Мюнхенский план» включает восстановление работы Совместного центра по контролю координации (СЦКК), создание переговорной группы между военными ведомствами «нормандской четверки» (России, Украины, Германии и Франции), увеличение пропускной способности и безопасности на линии разграничения. В качестве гуманитарных мер предлагается поиск пропавших без вести в Донбассе и разминирование.\",\"image\":{\"small\":\"/images/news4_small.jpg\",\"large\":\"/images/news4_large.jpg\"},\"features\":{\"newsCategory\":\"главное\",\"newsDate\":\"сегодня\",\"newsActivity\":\"средняя\",\"newsRating\":\"2\"}},{\"id\":5,\"title\":\"Оценены шансы России найти корабль для завершения «Северного потока-2»\",\"text\":\"Россия найдет корабль для завершения «Северного потока-2». Такое мнение высказал глава австрийской нефтяной компании OMV Райнер Зеле, передает Bloomberg. Зеле выразил уверенность в том, что Россия найдет нужный корабль. При этом он не смог ответить, каким способом прокладка труб будет завершена, и сколько времени на это понадобится. При этом глава OMV отметил, что технология прокладки труб не отличается особой сложностью. «Вопрос только в том, подходит ли установка корабля для укладки труб», — подчеркнул он. В декабре прошлого года США ввели новые санкции против «Северного потока-2». Вашингтон потребовал от компаний, ведущих укладку труб, немедленно прекратить строительство газопровода. В результате швейцарская компания Allseas заявила о прекращении работы над проектом.\",\"image\":{\"small\":\"/images/news5_small.jpg\",\"large\":\"/images/news5_large.jpg\"},\"features\":{\"newsCategory\":\"главное\",\"newsDate\":\"сегодня\",\"newsActivity\":\"высокая\",\"newsRating\":\"1\"}},{\"id\":6,\"title\":\"Россия оценила отказ Нидерландов в просьбе самостоятельного суда по делу MH17\",\"text\":\"Генеральная прокуратура России расценила отказ Нидерландов в просьбе самостоятельно судить троих обвиняемых в причастности к крушению малайзийского Boeing MH17 россиян как уклонение от всестороннего расследования катастрофы. Об этом сообщает «Интерфакс» со ссылкой на пресс-службу надзорного ведомства. Проведение всестороннего расследования авиакатастрофы, отмечают в Генпрокуратуре, предписано резолюцией Совбеза ООН. Представители ведомства отметили, что участие сотрудников правоохранительных органов России обеспечило «право потерпевших на установление истинных причин трагедии и на привлечение к ответственности виновных вне зависимости от их гражданской принадлежности».\",\"image\":{\"small\":\"/images/news6_small.jpg\",\"large\":\"/images/news6_large.jpg\"},\"features\":{\"newsCategory\":\"Россия\",\"newsDate\":\"сегодня\",\"newsActivity\":\"высокая\",\"newsRating\":\"4\"}},{\"id\":7,\"title\":\"В Минздраве одобрили документальный фильм Дудя о ВИЧ\",\"text\":\"Заместитель министра здравоохранения России Олег Салагай одобрил документальный фильм журналиста и блогера Юрия Дудя про эпидемию ВИЧ в России. Об этом политик написал в своем Telegram-канале. Салагай назвал фильм Дудя полезным, однако подчеркнул, что о подаче некоторых фактов можно подискутировать. «Но в целом в фильме приводится много важной информации», — добавил он. Чиновник отметил, что, помимо прочего, фильм обращает внимание на необходимость бороться с дискриминацией в отношении ВИЧ-положительных. «Сегодня ВИЧ — это не приговор, и очень важно, чтобы человек, у которого эта инфекция диагностирована, проходил лечение и жил обычной жизнью», — заключил Салагай.\",\"image\":{\"small\":\"/images/news7_small.jpg\",\"large\":\"/images/news7_large.jpg\"},\"features\":{\"newsCategory\":\"Россия\",\"newsDate\":\"ранее\",\"newsActivity\":\"высокая\",\"newsRating\":\"3\"}},{\"id\":8,\"title\":\"Пожизненно осужденный убийца выйдет на свободу после 60 лет в тюрьме\",\"text\":\"Американец Честер Вегер (Chester Weger), пожизненно осужденный за убийство женщины в парке Старвед Рок (Starved Rock) в штате Иллинойс, 21 февраля выйдет на свободу после почти 60 лет в тюрьме. Об этом пишет The Independent. Вегер добивался условно-досрочного освобождения с 1972 года, однако ему постоянно отказывали. Лишь в ноябре 2019-го совет, рассматривающий ходатайства об УДО, проголосовал в пользу заключенного, несмотря то, что внучки его жертвы высказались против освобождения, сообщала газета Chicago Tribune. 3 марта Вегеру исполнится 81 год, как отмечает издание, весь срок заключения он заявлял о своей невиновности.\",\"image\":{\"small\":\"/images/news8_small.jpg\",\"large\":\"/images/news8_large.jpg\"},\"features\":{\"newsCategory\":\"мир\",\"newsDate\":\"сегодня\",\"newsActivity\":\"средняя\",\"newsRating\":\"3\"}},{\"id\":9,\"title\":\"Вечный палач. Северная Корея — это разруха,а Южная — рай с «Самсунгом». Так ли?\",\"text\":\"Северная Корея — это разруха, голод и диктатура, а Южная — рай с «Самсунгом», кей-попом и демократией. Примерно так рассуждают люди, воспитанные на антикимовской пропаганде. Между тем реальность куда сложнее и интереснее. Специально для «Ленты.ру» известный российский кореист Константин Асмолов написал цикл статей об истории Корейского полуострова и двух государств, бывших некогда одним целым. В прошлый раз мы рассказывали, как в Южной Корее 1980-х одна диктатура сменилась другой, а протестующих давили танками. В этот раз речь пойдет о том, как президент Чон Ду Хван создавал собственный культ и расправлялся с несогласными, и в то же время дружил с США и улучшал образ страны.\",\"image\":{\"small\":\"/images/news9_small.jpg\",\"large\":\"/images/news9_large.jpg\"},\"features\":{\"newsCategory\":\"мир\",\"newsDate\":\"ранее\",\"newsActivity\":\"низкая\",\"newsRating\":\"2\"}},{\"id\":10,\"title\":\"Мировая экономика оказалась под угрозой из-за смертельного китайского коронавируса\",\"text\":\"Мировая экономика оказалась под угрозой из-за эпидемии смертельного китайского коронавируса. Его распространение достигло таких масштабов, что игнорировать это уже невозможно. Вирус стал причиной падения цен на нефть, разрушил традиционные цепочки поставок и обрушил мировые фондовые рынки. Россия — не исключение: из-за сильной зависимости бюджета от цен на энергоресурсы и снижения доходов от них под вопросом оказался амбициозный план Владимира Путина по разгону экономики страны. Озноб мирового масштаба — в материале «Ленты.ру».\",\"image\":{\"small\":\"/images/news10_small.jpg\",\"large\":\"/images/news10_large.jpg\"},\"features\":{\"newsCategory\":\"экономика\",\"newsDate\":\"ранее\",\"newsActivity\":\"высокая\",\"newsRating\":\"5\"}},{\"id\":11,\"title\":\"Экономическому господству Китая и США решили бросить вызов\",\"text\":\"Экономическому господству Китая и США решили бросить вызов — пока Пекин страдает от смертельного коронавируса, а Вашингтон погряз в торговых войнах, в лидеры экономических рейтингов захотела выбиться Индия. Амбициозный план местных властей пока лишь вызывает насмешку у западных финансистов, однако премьер Нарендра Моди и его команда настроены совершенно серьезно. На помощь призваны главные практики ведущих стран: снижение налогов из США, программа развития экспорта из Китая и ставка на мегапроекты из России — они должны помочь Индии всего лишь за пять лет войти в тройку крупнейших экономик планеты. Амбициозный рывок на низком старте — в материале «Ленты.ру».\",\"image\":{\"small\":\"/images/news11_small.jpg\",\"large\":\"/images/news11_large.jpg\"},\"features\":{\"newsCategory\":\"экономика\",\"newsDate\":\"ранее\",\"newsActivity\":\"средняя\",\"newsRating\":\"4\"}},{\"id\":12,\"title\":\"Попытка «Челси» взять реванш у МЮ и испытания для грандов — главные интриги\",\"text\":\"Попытка «Челси» взять реванш у МЮ и испытания для грандов — главные интриги тура АПЛ. Во второй части 26-го тура Английской премьер-лиги (АПЛ) Челси постарается взять реванш у «Манчестер Юнайтед» за разгромное поражение в первом круге. Тем же самым займется и «Норвич» в домашнем матче с лидером чемпионата «Ливерпулем». Поправить турнирное положение планируют лондонские «Тоттенхэм» и «Арсенал». Лента.ру — о главных интригах игрового уик-энда.\",\"image\":{\"small\":\"/images/news12_small.jpg\",\"large\":\"/images/news12_large.jpg\"},\"features\":{\"newsCategory\":\"спорт\",\"newsDate\":\"сегодня\",\"newsActivity\":\"высокая\",\"newsRating\":\"5\"}},{\"id\":13,\"title\":\"«Сибирь» досрочно вышла в плей-офф Кубка Гагарина Континентальной хоккейной лиги\",\"text\":\"«Сибирь» досрочно вышла в плей-офф Кубка Гагарина Континентальной хоккейной лиги. Новосибирский клуб пробился в раунд сильнейших впервые с сезона 2015-2016, говорится в сообщении пресс-службы команды, поступившем в редакцию «Ленты.ру». «Плей-офф – это другой уровень ответственности и самоотдачи. Все игроки нашей команды это понимают и будут играть на результат», — прокомментировал генеральный менеджер «Сибири» Кирилл Фастовский. С выходом в восьмерку сильнейших команду поздравил Дмитрий Босов, владелец группы «Сибантрацит», учредившей «Сибирь»: «Необходимо показать свою самую лучшую игру и продолжить движение вверх, к новым достижениям. Желаю команде побед!»\",\"image\":{\"small\":\"/images/news13_small.jpg\",\"large\":\"/images/news13_large.jpg\"},\"features\":{\"newsCategory\":\"спорт\",\"newsDate\":\"сегодня\",\"newsActivity\":\"средняя\",\"newsRating\":\"4\"}},{\"id\":14,\"title\":\"Раскрыты способы защиты от коронавируса в отелях во время путешествия\",\"text\":\"Туристам во время пребывания в отелях следует принимать меры личной защиты во избежание заражения коронавирусом. Соответствующие способы раскрыла представитель Всемирной организации здравоохранения Кармен Долея, пишет Express. По ее словам, в первую очередь путешественникам в гостиничном номере стоит строго соблюдать гигиену. «Вы должны уделять внимание правильному мытью рук, использовать спиртосодержащие средства для этого и следить за тем, чтобы правила гигиены также соблюдались в отношении пищевых продуктов», — объяснила Долея. Кроме того, отметила эксперт, не стоит касаться немытыми руками глаз, носа и рта. Вдобавок необходимо держаться подальше от других постояльцев, которые выглядят заболевшими. В целом, чтобы снизить риск заражения коронавирусом в ходе путешествия, следует придерживаться тех же требований безопасности, как и при любом другом типе респираторных инфекций.\",\"image\":{\"small\":\"/images/news14_small.jpg\",\"large\":\"/images/news14_large.jpg\"},\"features\":{\"newsCategory\":\"путешествия\",\"newsDate\":\"ранее\",\"newsActivity\":\"средняя\",\"newsRating\":\"3\"}},{\"id\":15,\"title\":\"Исчезнувшую при загадочных обстоятельствах туристку нашли мертвой\",\"text\":\"Туристку, которая путешествовала в одиночку по Новой Зеландии и исчезла в национальном парке при загадочных обстоятельствах, нашли мертвой. Об этом пишет Daily Mail. Тело 32-летней Стефани Симпсон (Stephanie Simpson) обнаружили неподалеку от того места, где ее видели в последний раз неделю назад — в национальном парке Маунт-Аспиринг на Южном острове. До этого спасатели отыскали ее походный рюкзак и обувь. По данным участников поисковой операции, никаких явных признаков, свидетельствующих о причинах смерти, выявлено не было. Родственники Симпсон рассказали, что туристка предпочитала активный отдых и имела большой опыт в походах.\",\"image\":{\"small\":\"/images/news15_small.jpg\",\"large\":\"/images/news15_large.jpg\"},\"features\":{\"newsCategory\":\"путешествия\",\"newsDate\":\"ранее\",\"newsActivity\":\"низкая\",\"newsRating\":\"1\"}}]}");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./js/config.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./js/render.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./js/router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.news = [];
    this.router = new _router__WEBPACK_IMPORTED_MODULE_4__["Router"]();
    this.render = new _render__WEBPACK_IMPORTED_MODULE_3__["Render"](this.router);
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].api, "/news"), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.news = data;

        _this.render.generateAllNews(data);

        _this.render.initSingleNewsPage();

        _this.initRouter();

        _this.router.render(decodeURI(window.location.pathname));
      });
    }
  }, {
    key: "initRouter",
    value: function initRouter() {
      this.router.addRoute('', this.render.renderMainPage.bind(this.render, this.news));
      this.router.addRoute('news', this.render.renderSingleNewsPage.bind(this.render, this.news));
    }
  }]);

  return App;
}();

var app = new App();

/***/ }),

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
// eslint-disable-next-line import/prefer-default-export
var CONFIG = {
  api: 'http://localhost:3006',
  elements: {
    mainPage: document.getElementById('mainPage'),
    filtersPage: document.getElementById('filtersPage'),
    allNewsPage: document.getElementById('allNewsPage'),
    singleNewsPage: document.getElementById('singleNewsPage'),
    singleNews: document.querySelectorAll('.single-news'),
    signInPage: document.getElementById('signInPage'),
    signUpPage: document.getElementById('signUpPage'),
    aboutPage: document.getElementById('aboutPage'),
    errorPage: document.getElementById('errorPage'),
    checkboxes: '#filtersPage input[type=checkbox]'
  },
  displayNone: 'd-none',
  displayBlock: 'd-block',
  filterOptions: ['newsCategory', 'newsDate', 'newsActivity', 'newsRating']
};

/***/ }),

/***/ "./js/render.js":
/*!**********************!*\
  !*** ./js/render.js ***!
  \**********************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./js/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var previewTemplate = __webpack_require__(/*! ../templates/preview-template.handlebars */ "./templates/preview-template.handlebars");

var viewTemplate = __webpack_require__(/*! ../templates/view-template.handlebars */ "./templates/view-template.handlebars"); // eslint-disable-next-line import/prefer-default-export


var Render =
/*#__PURE__*/
function () {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  function Render(router) {
    _classCallCheck(this, Render);

    this.router = router;
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Render, [{
    key: "renderMainPage",
    value: function renderMainPage(newsElems) {
      var mainPage = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.mainPage;
      var allNews = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.singleNews;

      _toConsumableArray(allNews).forEach(function (news) {
        news.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayNone);
      });

      _toConsumableArray(allNews).forEach(function (news) {
        newsElems.forEach(function (item) {
          if (Number(news.dataset.index) === Number(item.id)) {
            news.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayNone);
          }
        });
      });

      mainPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "generateAllNews",
    value: function generateAllNews(data) {
      var _this = this;

      var allNewsPage = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.allNewsPage;
      allNewsPage.innerHTML = previewTemplate(data);
      var singleNewsButton = document.querySelectorAll('.single-news-btn');
      singleNewsButton.forEach(function (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          var index = button.dataset.index;
          window.history.pushState(null, null, "/news/".concat(index));

          _this.router.render(decodeURI(window.location.pathname));
        });
      });
    }
  }, {
    key: "initSingleNewsPage",
    value: function initSingleNewsPage() {
      var _this2 = this;

      this.singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.singleNewsPage;
      this.singleNewsPage.addEventListener('click', function (event) {
        event.preventDefault();

        if (_this2.singleNewsPage.classList.contains(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock)) {
          var clicked = event.target;

          if (clicked.classList.contains('back')) {
            window.history.back();

            _this2.router.render(decodeURI(window.location.pathname));

            _this2.singleNewsPage.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock);
          }
        }
      });
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "renderSingleNewsPage",
    value: function renderSingleNewsPage(newsElems) {
      var singleNewsPage = _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].elements.singleNewsPage;
      var index = window.location.pathname.split('/news/')[1].trim();
      var isFind = false;

      if (newsElems.length) {
        newsElems.forEach(function (news) {
          if (Number(news.id) === Number(index)) {
            isFind = true;
            singleNewsPage.innerHTML = viewTemplate(news);
          }
        });
      } // eslint-disable-next-line no-unused-expressions


      isFind ? singleNewsPage.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock) : console.log('404 not found');
    }
  }]);

  return Render;
}();

/***/ }),

/***/ "./js/router.js":
/*!**********************!*\
  !*** ./js/router.js ***!
  \**********************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./js/config.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // eslint-disable-next-line import/prefer-default-export

var Router =
/*#__PURE__*/
function () {
  function Router() {
    var _this = this;

    _classCallCheck(this, Router);

    this.routes = {
      404: function _() {
        console.log('404 not found');
      }
    };
    this.mainPage = document.querySelectorAll('#mainPage');
    window.addEventListener('popstate', function (event) {
      event.preventDefault();

      _this.render(decodeURI(window.location.pathname));
    });
  }

  _createClass(Router, [{
    key: "addRoute",
    value: function addRoute(route, action) {
      this.routes[route] = action;
    }
  }, {
    key: "render",
    value: function render(url) {
      var temp = url.split('/')[1];

      _toConsumableArray(this.mainPage).forEach(function (page) {
        page.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"].displayBlock);
      }); // eslint-disable-next-line no-unused-expressions


      this.routes[temp] ? this.routes[temp]() : this.routes['404']();
    }
  }]);

  return Router;
}();

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./templates/preview-template.handlebars":
/*!***********************************************!*\
  !*** ./templates/preview-template.handlebars ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"col-md-4 mb-4 mt-3 single-news\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":58},"end":{"line":2,"column":64}}}) : helper)))
    + "\">\n    <div class=\"card\">\n      <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"small") : stack1), depth0))
    + "\"\n           class=\"rounded mx-auto d-block mt-3\"\n           width=\"235\"\n           height=\"160\"\n           alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":25}}}) : helper)))
    + "\"\n           title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":18},"end":{"line":9,"column":27}}}) : helper)))
    + "\"/>\n      <div class=\"card-body\">\n        <h6 class=\"text-center\">\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":19}}}) : helper)))
    + "\n        </h6>\n        <p class=\"text-muted\">категория: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsCategory") : stack1), depth0))
    + "; дата выхода:\n          "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsDate") : stack1), depth0))
    + "; активность: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsActivity") : stack1), depth0))
    + ";\n          рейтинг: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsRating") : stack1), depth0))
    + "</p>\n      </div>\n      <button type=\"button\"\n              class=\"btn-primary btn-sm w-25 mx-auto mb-3 single-news-btn\"\n              data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":32}}}) : helper)))
    + "\">\n        Читать\n      </button>\n    </div>\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":9}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./templates/view-template.handlebars":
/*!********************************************!*\
  !*** ./templates/view-template.handlebars ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col mt-3 single-news\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":52}}}) : helper)))
    + "\">\n  <div class=\"card\">\n    <img src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"large") : stack1), depth0))
    + "\"\n         class=\"rounded mx-auto d-block mt-3\"\n         width=\"480\"\n         height=\"300\"\n         alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":14},"end":{"line":7,"column":23}}}) : helper)))
    + "\"\n         title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":8,"column":25}}}) : helper)))
    + "\"/>\n    <div class=\"card-body\">\n      <h5 class=\"card-title text-center font-weight-bold\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":11,"column":17}}}) : helper)))
    + "\n      </h5>\n      <p class=\"card-text\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":16}}}) : helper)))
    + "\n      </p>\n      <p class=\"text-muted\">категория: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsCategory") : stack1), depth0))
    + "; дата выхода:\n        "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsDate") : stack1), depth0))
    + "; активность: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsActivity") : stack1), depth0))
    + ";\n        рейтинг: "
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"features") : depth0)) != null ? lookupProperty(stack1,"newsRating") : stack1), depth0))
    + "</p>\n    </div>\n    <button type=\"button\"\n            class=\"btn-primary btn-sm ml-3 mb-3 container-button back\"\n            data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":30}}}) : helper)))
    + "\">\n      На главную\n    </button>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./js/app.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map