// // 東京都の天気予報データを取得するためのURL
// const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
// // イベント処理の対象となるボタン
// const button = document.getElementById("ajax-btn");

// // ボタンのクリック時にイベント処理を実行する
// button.addEventListener("click", () => {
//   // 気象庁のwebサイトにリクエストを送信し、天気予報データーを取得する
//   fetch(url)
//     // サーバーからAjaxのレスポンシブを受け取った時の処理
//     .then((response) => response.json()) //JSON形式のデーターに変換
//     .then((data) => {
//       // JSONデーターから『東京の明日の天気』を抽出して表示
//       const weather = data[0].timeSeries[0].areas[0].weathers[1];
//       console.log("東京の明日の天気:" + weather);
//     });
// });

// ダミーデータを送信するためのURL
const url = "https://jsonplaceholder.typicode.com/posts";

const button = document.getElementById("ajax-btn");

button.addEventListener("click", () => {
  const dummyData = { name: "侍太郎", age: 30 };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dummyData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("サーバーからの応答：\n" + JSON.stringify(data, null, 2));
    });
});
