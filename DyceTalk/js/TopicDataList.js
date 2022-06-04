//トピックデータリスト
const datas = [
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

//指定された配列からランダムに選ぶための関数
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

//トピック選択
window.onload = init;
function init() {
  let list = document.getElementById("t_list");
  datas.forEach(value => {
    dom = document.createElement("option");
    dom.textContent = value;
    dom.value = value;
    list.appendChild(dom);
  });
}

//トピックランダム
function onButtonClick(i) {
  document.getElementById("topix" + i).value = random(datas);
}

//ダイス生成と開始
let i = 0;
function start() {
  const selected = Array.from(document.querySelectorAll(".combo"));
  let DemeTopix = document.getElementById("DemeTopix");
  if (!selected.every(x => x.value)) {
    DemeTopix.innerHTML = ("＊すべて埋めてください");
    return;
  }
  DemeTopix.innerHTML = random(selected).value + " " + ++i;
}