<!--nav_games_pc-->
var a = 1;
var b = 1;
var c = 1;


/*游戏*/
$(".games_open").click(function () {
    if (a == 1) {
        $(".games").show();
        $(".game_img").eq(0).css("transform", "rotate(180deg)");
        $(".masked").show();
        a = 2;
    } else if (a == 2) {
        $(".games").hide();
        $(".game_img").eq(0).css("transform", "none");
        $(".masked").hide();
        a = 1;
    }
});
$(document).click(function () {
    $(".games").hide();
    $(".game_img").eq(0).css("transform", "none");
    $(".masked").hide();
    a = 1;
});


/*电子竞技*/
$(".e-sports_open").click(function () {
    if (b == 1) {
        $(".e-sports").show();
        $(".game_img").eq(1).css("transform", "rotate(180deg)");
        $(".masked").show();
        b = 2;
    } else if (b == 2) {
        $(".e-sports").hide();
        $(".game_img").eq(1).css("transform", "none");
        $(".masked").hide();
        b = 1;
    }
});
$(document).click(function () {
    $(".e-sports").hide();
    $(".game_img").eq(1).css("transform", "none");
    $(".masked").hide();
    b = 1;
});


/*你的通行证*/
$(".myuser_open").click(function () {
    if (c == 1) {
        $(".my_battle").show();
        $(".game_img").eq(2).css("transform", "rotate(180deg)");
        $(".masked").show();
        c = 2;
    } else if (c == 2) {
        $(".my_battle").hide();
        $(".game_img").eq(2).css("transform", "none");
        $(".masked").hide();
        c = 1;
    }
});
$(document).click(function () {
    $(".my_battle").hide();
    $(".game_img").eq(2).css("transform", "none");
    $(".masked").hide();
    c = 1;
});


/*阻止冒泡事件*/
$(".games_open,.games,.myuser_open,.my_battle,.e-sports_open,.e-sports").click(function (event) {
    event.stopPropagation();
});


$(".ow_special").mouseover(function () {
    $(".ow_two_container").addClass("aaa");
});


/*$(".ow_special").hover(function () {

    if($(".ow_two_container").width() == 100){
        $(".ow_two_container").removeClass("bbb").removeClass("aaa").addClass("ccc");
    }else {
        $(".ow_two_container").removeClass("bbb").addClass("aaa");
    }
}, function () {
    $(".ow_two_container").removeClass("aaa").removeClass("ccc").addClass("bbb");
});

$(".ow_two_container").hover(function () {
    $(".ow_two_container").removeClass("aaa").removeClass("bbb").addClass("ccc");
},function () {
    $(".ow_two_container").removeClass("aaa").removeClass("ccc").addClass("bbb");
});*/

<!--nav_moblie 战网菜单-->


/*左边*/

$(".nav_battle_mobile_left a").on('click', function () {
    $(".navBar_mobile_left").removeClass("navBar_mobile_leftBack").show();
    $(".navBar_mobile_right").addClass("navBar_mobile_rightBack");
    $(".masked").show();
});

$(".mobile_close").on('click', function () {
    $(".navBar_mobile_left").addClass("navBar_mobile_leftBack");
    $(".masked").hide();
});


/*右边*/

$(".nav_battle_mobile_right a").on('click', function () {
    $(".navBar_mobile_right").removeClass("navBar_mobile_rightBack").show();
    $(".navBar_mobile_left").addClass("navBar_mobile_leftBack");
    $(".masked").show();
});

$(".mobile_close2").on('click', function () {
    $(".navBar_mobile_right").addClass("navBar_mobile_rightBack");
    $(".masked").hide();
});


/*其他层*/

$(document).on('click touchstart', function () {
    $(".navBar_mobile_left").addClass("navBar_mobile_leftBack");
    $(".masked").hide();

    $(".navBar_mobile_right").addClass("navBar_mobile_rightBack");
    $(".masked").hide();
});

$(".nav_battle_mobile_left,.navBar_mobile_left_main,.navBar_mobile_left,.nav_battle_mobile_right,.navBar_mobile_right_main,.navBar_mobile_right").on('click touchstart', function (event) {
    event.stopPropagation();
});


/*mobile 战网二级菜单*/


/*左边*/

var i = 1;
$(".games_open_mobile").on('click', function () {
    if (i == 1) {
        $(".navBar_left_contentTwo").css("animation", "two_open .2s forwards");
        $(".mobile_arrows").eq(0).addClass("mobile_arrowsRotate");
        i = 2;
    } else if (i == 2) {
        $(".navBar_left_contentTwo").css("animation", "two_close .2s forwards");
        $(".mobile_arrows").eq(0).removeClass("mobile_arrowsRotate");
        i = 1;
    }
    ;
});

var j = 1;
$(".party_open_mobile").on('click', function () {
    if (j == 1) {
        $(".navBar_left_contentTwo2").css("animation", "two_open2 .2s forwards");
        $(".mobile_arrows").eq(1).addClass("mobile_arrowsRotate");
        j = 2;
    } else if (j == 2) {
        $(".navBar_left_contentTwo2").css("animation", "two_close2 .2s forwards");
        $(".mobile_arrows").eq(1).removeClass("mobile_arrowsRotate");
        j = 1;
    }
    ;
});


/*右边游戏*/

var k = 1;
$(".right_games_open").on('click', function () {
    if (k == 1) {
        $(".right_games_open").attr('id', 'right_mobile_open');
        $(".navBar_right_contentTwo").css("animation", "two_open3 .2s forwards");
        $(".mobile_arrows").eq(2).addClass("mobile_arrowsRotate");
        k = 2;
    } else if (k == 2) {
        $(".right_games_open").attr('id', '');
        $(".navBar_right_contentTwo").css("animation", "two_close3 .2s forwards");
        $(".mobile_arrows").eq(2).removeClass("mobile_arrowsRotate");
        k = 1;
    }
    ;
});

/*右边电子竞技二级菜单*/

var q = 1;

$(".e_sports_mobile_open").click(function () {

    if (q == 1) {
        $(".e_sports_mobile_open").attr('id', 'right_mobile_e-sports_open');
        $(".e_sports_mobileTwo").css("animation", "two_open4 .2s forwards");
        $(".mobile_arrows").eq(3).addClass("mobile_arrowsRotate");
        q = 2;
    } else if (q == 2) {
        $(".e_sports_mobile_open").attr('id', '');
        $(".e_sports_mobileTwo").css("animation", "two_close4 .2s forwards");
        $(".mobile_arrows").eq(3).removeClass("mobile_arrowsRotate");
        q = 1;
    }
});


/*if (q == 1) {
    $(".e-sports_mobileTwo").show();

    /!*$(".e-sports_mobile_open").attr('id','right_mobile_e-sports_open');
    $(".e-sports_mobileTwo").show();/!*.css("animation", "two_open4 .2s forwards");*!/
    $(".mobile_arrows").eq(3).addClass("mobile_arrowsRotate");*!/
    q = 2;
} else if (q == 2) {
    $(".e-sports_mobile_open").attr('id','');
    $(".e-sports_mobileTwo").css("animation", "two_close4 .2s forwards");
    $(".mobile_arrows").eq(3).removeClass("mobile_arrowsRotate");
    q = 1;
}*/
/*});*/

/*overwatch 导航条*/


window.onscroll = function () { //绑定scroll事件
    var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动距离
    /*console.log(t);*/
    var ow_nav = document.getElementById("menu");
    if (t >= 40) {
        ow_nav.style.cssText = "position:fixed; top: 0px; right:0;left:0; z-index:50;"  /*margin:0px; width:100%;*/;
    } else if (t < 40) {
        ow_nav.style.cssText = "position:;  width:; top:;z-index:; " /*margin:25px 20px 0px 20px;*/;
    }
}


/*top返回顶部*/


$(window).scroll(function () {
    var a = $(window).scrollTop();
    if (a >= 250) {
        $(".top").show()
    } else {
        $(".top").hide()
    }
})
$(".top").click(function () {
    $("html,body").animate({
        "scrollTop": 0
    }, 300)
});


<!--背景轮播图片部分-->


// 替换class达到淡入淡出的效果
function fadeIn(e) {
    e.className = "bg fadein"
};

function fadeOut(e) {
    e.className = "bg"
};
//申明图片数组中当前的轮播图片
cur_img = document.getElementById("intro_bg").children.length - 1;

//图片轮播函数
function turnImgs(imgs) {


    var imgs = document.getElementById("intro_bg").children;
    /*        console.log(imgs);*/
    if (cur_img == 0) {
        fadeOut(imgs[cur_img]);
        cur_img = imgs.length - 1;
        fadeIn(imgs[cur_img]);
    } else {
        fadeOut(imgs[cur_img]);
        fadeIn(imgs[cur_img - 1]);
        cur_img--;
    }
}

//设置轮播间隔
setInterval(turnImgs, 15000);


var image = new Array('img/hero/doomfist.png', 'img/hero/genji.png', 'img/hero/mccree.png', 'img/hero/pharah.png', 'img/hero/reaper.png', 'img/hero/soldier-76.png', 'img/hero/sombra.png', 'img/hero/tracer.png', 'img/hero/bastion.png', 'img/hero/hanzo.png', 'img/hero/junkrat.png', 'img/hero/mei.png', 'img/hero/torbjorn.png', 'img/hero/widowmaker.png', 'img/hero/dva.png', 'img/hero/orisa.png', 'img/hero/reinhardt.png', 'img/hero/roadhog.png', 'img/hero/winston.png', 'img/hero/zarya.png', 'img/hero/ana.png', 'img/hero/brigitte.png', 'img/hero/lucio.png', 'img/hero/mercy.png', 'img/hero/moira-full-portrait.png', 'img/hero/symmetra.png', 'img/hero/zenyatta.png');
var heroName = new Array('末日铁拳', '源氏', '麦克雷', '法老之鹰', '死神', '士兵：76', '黑影', '猎空', '堡垒', '半藏', '狂鼠', '美', '托比昂', '黑百合', 'D.Va', '奥丽莎', '莱因哈特', '路霸', '温斯顿', '查莉娅', '安娜', '布丽吉塔', '卢西奥', '天使', '莫伊拉', '秩序之光', '禅雅塔');
var herointro = new Array('一位利用个人头脑、魅力和蛮力来创建一个更强大世界的战术家。', '一名致命的半机械忍者，通过他的机械躯体寻得了身心的和谐。'
    , '一名亡命天涯的神枪手，以自己的方式伸张正义。', '一名恪守岗位的战士，用实验性的“猛禽”作战服确保天空的安全。'
    , '一名无情的杀手，一直在追杀前守望先锋的特工们。', '一名试图自己将守望先锋敌人绳之于法的独行侠。'
    , '臭名昭著的黑客，沉迷于揭秘——及其带来的权力。', '一名前守望先锋特工，同时也是可以穿梭时间的充满正义的冒险家。'
    , '一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。', '一名强大而致命的弓箭大师。'
    , '一名满脑子都是爆炸的变态疯子，只为了混乱和破坏而活。', '一名能够操控天气，为了保护环境而选择战斗的科学家。'
    , '一名天才工程师，可以在战场上打造武器系统。', '一名完美的杀手：耐心、果断、无情。没有任何情感且事后毫无悔意。'
    , '一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。', '维护努巴尼秩序并保护努巴尼人民的维和机器人。'
    , '一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。', '一名残暴的杀手，因残忍和肆意破坏而臭名昭著。'
    , '一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。', '世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。'
    , '守望先锋的创始成员之一，“起死回生”重返战场保护亲人和朋友。', '一位渴望冒险，希望惩强扶弱的重装战士。'
    , '一位国际名人，通过音乐和巡演激发社会正能量。', '一名集顶尖的治疗者、出色的科学家和坚定的和平主义者于一身的守护天使。'
    , '一位天才基因科学家，无视道德的束缚，一心追求科学发现。', '一名通过控制高强度光束，将世界改造成她心目中完美、有序的模样的光子建筑师。'
    , '一位游走于世界寻找灵魂升华之道的机械僧侣。');

$(".hero_icon ul li").mouseenter(function () {
    var a = $(".hero_icon ul li").index($(this)[0]);
    for (var i = 0; i <= image.length; i++) {
        if (a == i) {
            $(".hero_left").css("background-image", "url(" + image[i] + ")");
            $(".hero_right h2").html(heroName[i]);
            $(".hero_right p").html(herointro[i]);
        }
    }
});
