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
/******/ 		"main": 0
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
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../db.json":
/*!******************!*\
  !*** ../db.json ***!
  \******************/
/*! exports provided: news, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"news\":[{\"id\":1,\"title\":\"Россия оказалась под угрозой потери первого места в медальном зачете Игр в Сочи\",\"text\":\"Сборная России может потерять первое место в медальном зачете зимних Олимпийских игр в Сочи 2014 года. Об этом стало известно после того, как биатлонист Евгений Устюгов, по информации источника, был признан виновным в нарушении допинговых правил, а его результаты с августа 2013 года по конец сезона 2013-2014 — аннулированы, пишет ТАСС. Как указывает агентство, в данный период попадает и сочинская Олимпиада, поэтому Устюгов должен быть лишен золота, завоеванного на этих Играх в эстафете. В связи с этим российская сборная лишится лидерства в общекомандном медальном зачете ОИ-2014 и опустится на третью строчку, пропустив вперед Норвегию и Канаду, которые займут первое и второе места соответственно.\",\"image\":{\"small\":\"./images/news1_small.jpg\",\"large\":\"./images/news1_large.jpg\"},\"features\":{\"newsCategory\":\"main\",\"newsDate\":\"today\",\"newsActivity\":\"high\",\"newsRating\":\"five\"}},{\"id\":2,\"title\":\"Уефа исключили «Манчестер Сити» из еврокубков на два сезона\",\"text\":\"Союз европейских футбольных ассоциаций (УЕФА) отстранил английский «Манчестер Сити» от участия в еврокубках в течение двух следующих сезонов за нарушение финансового фейр-плей. В ходе расследования УЕФА пришел к выводу, что клуб предоставлял неверную отчетность в период с 2012 по 2016 год. Санкции не ограничиваются исключением из еврокубков. Клуб будет обязан выплатить денежный штраф в размере 30 миллионов евро. Строгость наказания объясняется серьезными нарушениями «Сити» в отчетности финансовым органам УЕФА: клуб завышал суммы спонсорских контрактов авиакомпании Etihad. Основная часть средств поступала непосредственно от Abu Dhabi United Group — компании-владельца клуба Мансура ибн Зайд аль-Нахайяна.\",\"image\":{\"small\":\"./images/news2_small.jpg\",\"large\":\"./images/news2_large.jpg\"},\"features\":{\"newsCategory\":\"main\",\"newsDate\":\"previously\",\"newsActivity\":\"medium\",\"newsRating\":\"four\"}},{\"id\":3,\"title\":\"В Китае решили казнить за сокрытие заражения коронавирусом\",\"text\":\"В Китае решили казнить за сокрытие заражения коронавирусом, а также за искажение информации о состоянии больного. Об этом в субботу, 15 февраля, сообщает DW со ссылкой на заявление китайского суда. Помимо этого, уголовным преступлением будет считаться утаивание истории своих путешествий. Заболевший, а затем распространивший коронавирус человек будет обвинен в создании угрозы общественной безопасности и приговорен к 10-летнему либо пожизненному тюремному заключению или к смертной казни. Таким образом, комиссия по здравоохранению Китая запретила гражданам с симптомами вируса перемещаться по территории государства на автобусах, поездах и самолетах. Вернувшиеся после праздников из зоны очага эпидемии должны находиться дома или под наблюдением врачей две недели. Отказ от карантина будет караться наказанием.\",\"image\":{\"small\":\"./images/news3_small.jpg\",\"large\":\"./images/news3_large.jpg\"},\"features\":{\"newsCategory\":\"main\",\"newsDate\":\"previously\",\"newsActivity\":\"low\",\"newsRating\":\"three\"}},{\"id\":4,\"title\":\"План по Украине исчез с официального сайта Мюнхенской конференции\",\"text\":\"План по урегулированию ситуации на Украине исчез с официального сайта Мюнхенской конференции. Об этом сообщает Obozrevatel.ua. Также исчезло сообщение, в котором говорилось, что данный документ был разработан в соавторстве со специалистами по международной безопасности и поддержан ими, пишет издание. Документ был опубликован 14 февраля. Он получил название «Двенадцать шагов к большей безопасности на Украине и евроатлантическом регионе». «Мюнхенский план» включает восстановление работы Совместного центра по контролю координации (СЦКК), создание переговорной группы между военными ведомствами «нормандской четверки» (России, Украины, Германии и Франции), увеличение пропускной способности и безопасности на линии разграничения. В качестве гуманитарных мер предлагается поиск пропавших без вести в Донбассе и разминирование.\",\"image\":{\"small\":\"./images/news4_small.jpg\",\"large\":\"./images/news4_large.jpg\"},\"features\":{\"newsCategory\":\"main\",\"newsDate\":\"today\",\"newsActivity\":\"medium\",\"newsRating\":\"two\"}},{\"id\":5,\"title\":\"Оценены шансы России найти корабль для завершения «Северного потока-2»\",\"text\":\"Россия найдет корабль для завершения «Северного потока-2». Такое мнение высказал глава австрийской нефтяной компании OMV Райнер Зеле, передает Bloomberg. Зеле выразил уверенность в том, что Россия найдет нужный корабль. При этом он не смог ответить, каким способом прокладка труб будет завершена, и сколько времени на это понадобится. При этом глава OMV отметил, что технология прокладки труб не отличается особой сложностью. «Вопрос только в том, подходит ли установка корабля для укладки труб», — подчеркнул он. В декабре прошлого года США ввели новые санкции против «Северного потока-2». Вашингтон потребовал от компаний, ведущих укладку труб, немедленно прекратить строительство газопровода. В результате швейцарская компания Allseas заявила о прекращении работы над проектом.\",\"image\":{\"small\":\"./images/news5_small.jpg\",\"large\":\"./images/news5_large.jpg\"},\"features\":{\"newsCategory\":\"main\",\"newsDate\":\"today\",\"newsActivity\":\"high\",\"newsRating\":\"one\"}},{\"id\":6,\"title\":\"Россия оценила отказ Нидерландов в просьбе самостоятельного суда по делу MH17\",\"text\":\"Генеральная прокуратура России расценила отказ Нидерландов в просьбе самостоятельно судить троих обвиняемых в причастности к крушению малайзийского Boeing MH17 россиян как уклонение от всестороннего расследования катастрофы. Об этом сообщает «Интерфакс» со ссылкой на пресс-службу надзорного ведомства. Проведение всестороннего расследования авиакатастрофы, отмечают в Генпрокуратуре, предписано резолюцией Совбеза ООН. Представители ведомства отметили, что участие сотрудников правоохранительных органов России обеспечило «право потерпевших на установление истинных причин трагедии и на привлечение к ответственности виновных вне зависимости от их гражданской принадлежности».\",\"image\":{\"small\":\"./images/news6_small.jpg\",\"large\":\"./images/news6_large.jpg\"},\"features\":{\"newsCategory\":\"russia\",\"newsDate\":\"today\",\"newsActivity\":\"high\",\"newsRating\":\"four\"}},{\"id\":7,\"title\":\"В Минздраве одобрили документальный фильм Дудя о ВИЧ\",\"text\":\"Заместитель министра здравоохранения России Олег Салагай одобрил документальный фильм журналиста и блогера Юрия Дудя про эпидемию ВИЧ в России. Об этом политик написал в своем Telegram-канале. Салагай назвал фильм Дудя полезным, однако подчеркнул, что о подаче некоторых фактов можно подискутировать. «Но в целом в фильме приводится много важной информации», — добавил он. Чиновник отметил, что, помимо прочего, фильм обращает внимание на необходимость бороться с дискриминацией в отношении ВИЧ-положительных. «Сегодня ВИЧ — это не приговор, и очень важно, чтобы человек, у которого эта инфекция диагностирована, проходил лечение и жил обычной жизнью», — заключил Салагай.\",\"image\":{\"small\":\"./images/news7_small.jpg\",\"large\":\"./images/news7_large.jpg\"},\"features\":{\"newsCategory\":\"russia\",\"newsDate\":\"previously\",\"newsActivity\":\"high\",\"newsRating\":\"three\"}},{\"id\":8,\"title\":\"Пожизненно осужденный убийца выйдет на свободу после 60 лет в тюрьме\",\"text\":\"Американец Честер Вегер (Chester Weger), пожизненно осужденный за убийство женщины в парке Старвед Рок (Starved Rock) в штате Иллинойс, 21 февраля выйдет на свободу после почти 60 лет в тюрьме. Об этом пишет The Independent. Вегер добивался условно-досрочного освобождения с 1972 года, однако ему постоянно отказывали. Лишь в ноябре 2019-го совет, рассматривающий ходатайства об УДО, проголосовал в пользу заключенного, несмотря то, что внучки его жертвы высказались против освобождения, сообщала газета Chicago Tribune. 3 марта Вегеру исполнится 81 год, как отмечает издание, весь срок заключения он заявлял о своей невиновности.\",\"image\":{\"small\":\"./images/news8_small.jpg\",\"large\":\"./images/news8_large.jpg\"},\"features\":{\"newsCategory\":\"world\",\"newsDate\":\"today\",\"newsActivity\":\"medium\",\"newsRating\":\"three\"}},{\"id\":9,\"title\":\"Вечный палач. Северная Корея — это разруха,а Южная — рай с «Самсунгом». Так ли?\",\"text\":\"Северная Корея — это разруха, голод и диктатура, а Южная — рай с «Самсунгом», кей-попом и демократией. Примерно так рассуждают люди, воспитанные на антикимовской пропаганде. Между тем реальность куда сложнее и интереснее. Специально для «Ленты.ру» известный российский кореист Константин Асмолов написал цикл статей об истории Корейского полуострова и двух государств, бывших некогда одним целым. В прошлый раз мы рассказывали, как в Южной Корее 1980-х одна диктатура сменилась другой, а протестующих давили танками. В этот раз речь пойдет о том, как президент Чон Ду Хван создавал собственный культ и расправлялся с несогласными, и в то же время дружил с США и улучшал образ страны.\",\"image\":{\"small\":\"./images/news9_small.jpg\",\"large\":\"./images/news9_large.jpg\"},\"features\":{\"newsCategory\":\"world\",\"newsDate\":\"previously\",\"newsActivity\":\"low\",\"newsRating\":\"two\"}},{\"id\":10,\"title\":\"Мировая экономика оказалась под угрозой из-за смертельного китайского коронавируса\",\"text\":\"Мировая экономика оказалась под угрозой из-за эпидемии смертельного китайского коронавируса. Его распространение достигло таких масштабов, что игнорировать это уже невозможно. Вирус стал причиной падения цен на нефть, разрушил традиционные цепочки поставок и обрушил мировые фондовые рынки. Россия — не исключение: из-за сильной зависимости бюджета от цен на энергоресурсы и снижения доходов от них под вопросом оказался амбициозный план Владимира Путина по разгону экономики страны. Озноб мирового масштаба — в материале «Ленты.ру».\",\"image\":{\"small\":\"./images/news10_small.jpg\",\"large\":\"./images/news10_large.jpg\"},\"features\":{\"newsCategory\":\"economics\",\"newsDate\":\"previously\",\"newsActivity\":\"high\",\"newsRating\":\"five\"}},{\"id\":11,\"title\":\"Экономическому господству Китая и США решили бросить вызов\",\"text\":\"Экономическому господству Китая и США решили бросить вызов — пока Пекин страдает от смертельного коронавируса, а Вашингтон погряз в торговых войнах, в лидеры экономических рейтингов захотела выбиться Индия. Амбициозный план местных властей пока лишь вызывает насмешку у западных финансистов, однако премьер Нарендра Моди и его команда настроены совершенно серьезно. На помощь призваны главные практики ведущих стран: снижение налогов из США, программа развития экспорта из Китая и ставка на мегапроекты из России — они должны помочь Индии всего лишь за пять лет войти в тройку крупнейших экономик планеты. Амбициозный рывок на низком старте — в материале «Ленты.ру».\",\"image\":{\"small\":\"./images/news11_small.jpg\",\"large\":\"./images/news11_large.jpg\"},\"features\":{\"newsCategory\":\"economics\",\"newsDate\":\"previously\",\"newsActivity\":\"medium\",\"newsRating\":\"four\"}},{\"id\":12,\"title\":\"Попытка «Челси» взять реванш у МЮ и испытания для грандов — главные интриги\",\"text\":\"Попытка «Челси» взять реванш у МЮ и испытания для грандов — главные интриги тура АПЛ. Во второй части 26-го тура Английской премьер-лиги (АПЛ) Челси постарается взять реванш у «Манчестер Юнайтед» за разгромное поражение в первом круге. Тем же самым займется и «Норвич» в домашнем матче с лидером чемпионата «Ливерпулем». Поправить турнирное положение планируют лондонские «Тоттенхэм» и «Арсенал». Лента.ру — о главных интригах игрового уик-энда.\",\"image\":{\"small\":\"./images/news12_small.jpg\",\"large\":\"./images/news12_large.jpg\"},\"features\":{\"newsCategory\":\"sport\",\"newsDate\":\"today\",\"newsActivity\":\"high\",\"newsRating\":\"five\"}},{\"id\":13,\"title\":\"«Сибирь» досрочно вышла в плей-офф Кубка Гагарина Континентальной хоккейной лиги\",\"text\":\"«Сибирь» досрочно вышла в плей-офф Кубка Гагарина Континентальной хоккейной лиги. Новосибирский клуб пробился в раунд сильнейших впервые с сезона 2015-2016, говорится в сообщении пресс-службы команды, поступившем в редакцию «Ленты.ру». «Плей-офф – это другой уровень ответственности и самоотдачи. Все игроки нашей команды это понимают и будут играть на результат», — прокомментировал генеральный менеджер «Сибири» Кирилл Фастовский. С выходом в восьмерку сильнейших команду поздравил Дмитрий Босов, владелец группы «Сибантрацит», учредившей «Сибирь»: «Необходимо показать свою самую лучшую игру и продолжить движение вверх, к новым достижениям. Желаю команде побед!»\",\"image\":{\"small\":\"./images/news13_small.jpg\",\"large\":\"./images/news13_large.jpg\"},\"features\":{\"newsCategory\":\"sport\",\"newsDate\":\"today\",\"newsActivity\":\"medium\",\"newsRating\":\"four\"}},{\"id\":14,\"title\":\"Раскрыты способы защиты от коронавируса в отелях во время путешествия\",\"text\":\"Туристам во время пребывания в отелях следует принимать меры личной защиты во избежание заражения коронавирусом. Соответствующие способы раскрыла представитель Всемирной организации здравоохранения Кармен Долея, пишет Express. По ее словам, в первую очередь путешественникам в гостиничном номере стоит строго соблюдать гигиену. «Вы должны уделять внимание правильному мытью рук, использовать спиртосодержащие средства для этого и следить за тем, чтобы правила гигиены также соблюдались в отношении пищевых продуктов», — объяснила Долея. Кроме того, отметила эксперт, не стоит касаться немытыми руками глаз, носа и рта. Вдобавок необходимо держаться подальше от других постояльцев, которые выглядят заболевшими. В целом, чтобы снизить риск заражения коронавирусом в ходе путешествия, следует придерживаться тех же требований безопасности, как и при любом другом типе респираторных инфекций.\",\"image\":{\"small\":\"./images/news14_small.jpg\",\"large\":\"./images/news14_large.jpg\"},\"features\":{\"newsCategory\":\"journeys\",\"newsDate\":\"previously\",\"newsActivity\":\"medium\",\"newsRating\":\"three\"}},{\"id\":15,\"title\":\"Исчезнувшую при загадочных обстоятельствах туристку нашли мертвой\",\"text\":\"Туристку, которая путешествовала в одиночку по Новой Зеландии и исчезла в национальном парке при загадочных обстоятельствах, нашли мертвой. Об этом пишет Daily Mail. Тело 32-летней Стефани Симпсон (Stephanie Simpson) обнаружили неподалеку от того места, где ее видели в последний раз неделю назад — в национальном парке Маунт-Аспиринг на Южном острове. До этого спасатели отыскали ее походный рюкзак и обувь. По данным участников поисковой операции, никаких явных признаков, свидетельствующих о причинах смерти, выявлено не было. Родственники Симпсон рассказали, что туристка предпочитала активный отдых и имела большой опыт в походах.\",\"image\":{\"small\":\"./images/news15_small.jpg\",\"large\":\"./images/news15_large.jpg\"},\"features\":{\"newsCategory\":\"journeys\",\"newsDate\":\"previously\",\"newsActivity\":\"low\",\"newsRating\":\"one\"}}]}");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db.json */ "../db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "../db.json", 1);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);



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

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map