$("#js-menu").on("click", function () {
  $("#js-drawer").slideToggle();
});

// トップへ戻るボタンをつける
$(window).scroll(function () {
  //トップから80pxスクロールしたら
  if ($(this).scrollTop() > 80) {
    $("#js-top-btn").fadeIn(300);
  } else {
    $("#js-top-btn").fadeOut(300);
  }
});
$("#js-top-btn").on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, 500);
});

//モーダルで画像の拡大表示
//画像をクリックした際の処理
$(".menu-img").click(function () {
  var imgSrc = $(this).find("img").attr("src"); // find() で内側の img を取得
  $(".menu-bigimg").prop("src", imgSrc);
  $(".menu-modal").fadeIn();
  $("body").css("overflow", "hidden"); //画面下をスクロールさせない
  return false; //aタグの無効化
});

//画面のどこかをクリックしたらフェードアウト
$(".menu-modal").click(function () {
  $(".menu-modal").fadeOut();
  $("body").css("overflow", "auto"); //スクロールロック解除
});
