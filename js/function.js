// 朝のあいさつを出力する関数を定義する
const sayGoodMorning = () => {
  console.log("おはようございます");
  console.log("昨日はよく蒸れましたか？");
  console.log("今日も一日頑張りましょう！");
};
// 夜のあいさつを出力する関数を定義する
const sayGoodEvening = () => {
  console.log("こんばんは！");
  console.log("今日も一日お疲れ様でした。");
};

// 朝のあいさつを出力する関数を呼び出す
sayGoodMorning();

sayGoodMorning();

// 与えられた引数priceに送料を加算し、その値を出力する関数を定義する
const calculateTotal = (price) => {
  console.log(price + 500 + "円");
};

// 関数を呼び出し、引数として購入金額を渡す
calculateTotal(1800);

//  // 与えられた引数priceと引数shippingFeeを加算し、その値を出力する関数を定義する
const addTwoArgument = (price, shippingFee) => {
  console.log(price + shippingFee + "円");
};
// // 関数を呼び出し、引数として購入金額と送料を渡す
addTwoArgument(1200, 500);

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num) => {
  return num * 2;
};
// 関数の戻り値を出力する
console.log(double(30));
