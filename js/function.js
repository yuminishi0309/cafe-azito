$(function() {

// メニューボタン
$('#btn').on('click', function() {
    $('#btn__top').toggleClass('rotateTop');
    $('#btn__middle').toggleClass('hideMiddle');
    $('#btn__bottom').toggleClass('rotateBottom');
    $('#gnav').toggleClass('gnav-fadeIn');
});

// ナビゲーション操作
$('.gnav__link').on('click', function () {
    $('#btn__top').removeClass('rotateTop');
    $('#btn__middle').removeClass('hideMiddle');
    $('#btn__bottom').removeClass('rotateBottom');
    $('#gnav').removeClass('gnav-fadeIn');
});






});