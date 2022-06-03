//トピックデータリスト
var datas = [
  "わかってもらいづらい話",
  "ここだけの秘密",
  "猫被ってる話",
  "気力体力をもっていかれた話",
  "自分頭いいなと思った話",
  "知略を巡らせた話",
  "自分バカだなと思った話",
  "特級呪物の話",
  "わからせた、分からされた話",
  "人生の最高到達点",
  //10
  "嫌いな言葉",
  "受け入れたくない一般常識",
  "レベル35とレベル75位の自慢(1と100を定義づける)",
  "満場一致の話",
  "神の存在を感じた話",
  "運命を感じた話",
  "二項対立の話",
  "嘘つきの話",
  "買ってよかったもの",
  "興味があるけど手が出ない話",
  //20
  "ほしい兄弟としたいこと",
  "一度は行くべきところ",
  "会いたい人",
  "行ってみたいところ",
  "おすすめ動画の話",
  "皆に問いかけたい話",
  "浮気の定義",
  "ダブルスタンダードな話",
  "強運エピソード",
  "名前の話",
  //30
  "別格だなと思った話",
  "死後の話",
  "心に残る言葉の話",
  "罪の告白と懺悔",
  "信じて貰えない話",
  "九死に一生を得た話",
  "無意味だと思うものの話",
  "時事の話",
  "一押しのコンビ、ライバル、カップリングの話",
  "自身の大怪我、大病の話",
  //40
  "10年後の自分の姿の話",
  "許せる遅刻許せない遅刻",
  "まちきれない話",
  "懐かしい話",
  "本気で取り組んだ話",
  "体質の話",
  "時効の話",
  "論争勃発する話",
  "人生の教訓の話",
  "一石二鳥の話",
  //50
  "win-winな話",
  "意外な一面の話",
  "成長した話",
  "推しの話",
  "確率、割合の話",
  "自分だけかも？な話",
  "焦った話",
  "学習スタイルの話",
  "勘違いしてた物の話",
  "あっちがたてばこっちがたたない話",
  //60
  "哲学的な話",
  "一番のイケメンの話",
  "一番の美女の話",
  "幼い話",
  "勧誘する話",
  "見て貰いたい自分の姿の話",
  "失敗した話",
  "根性みせた、みせられた話",
  "五十歩百歩な話",
  "名勝負の話",
  //70
  "一番高い買い物",
];

var selected = [];

//トピック選択
var word = datas[Math.floor( Math.random() * datas.length)];

datas.forEach(function(value) {
document.writeln("<option value=\"", value, "\">", value,
"</option>");
});


//トピックランダム
function onButtonClick1(){
  var word = datas[Math.floor( Math.random() * datas.length)];
  document.getElementById("topix1").value = word;
  selected[0] = word;
}
function onButtonClick2(){
  var word = datas[Math.floor( Math.random() * datas.length)];
  document.getElementById("topix2").value = word;
  selected[1] = word;
}
function onButtonClick3(){
  var word = datas[Math.floor( Math.random() * datas.length)];
  document.getElementById("topix3").value = word;
  selected[2] = word;
}
function onButtonClick4(){
  var word = datas[Math.floor( Math.random() * datas.length)];
  document.getElementById("topix4").value = word;
  selected[3] = word;
}
function onButtonClick5(){
  var word = datas[Math.floor( Math.random() * datas.length)];
  document.getElementById("topix5").value = word;
  selected[4] = word;
}
function onButtonClick6(){
  var word = datas[Math.floor( Math.random() * datas.length)];
  document.getElementById("topix6").value = word;
  selected[5] = word
}

//ダイス生成と開始
var i = 0
function start(){
   ;
   selected[0] = document.getElementById("topix1").value;
   selected[1] = document.getElementById("topix2").value;
   selected[2] = document.getElementById("topix3").value;
   selected[3] = document.getElementById("topix4").value;
   selected[4] = document.getElementById("topix5").value;
   selected[5] = document.getElementById("topix6").value;

  
  var DemeTopix = document.getElementById("DemeTopix");
  if(!selected[0]||!selected[1]||!selected[2]||!selected[3]||!selected[4]||!selected[5]){
    DemeTopix.innerHTML = ("＊すべて埋めてください");
  }else{
    var deme = selected[Math.floor(Math.random() * selected.length)];
    i++
    DemeTopix.innerHTML = (deme) + (" ")+i;
  }
  
 }


 