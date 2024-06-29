// クラス名を定義する
class Product {
  // インスタンスかすると同時に処理を実行する（初期化）
  // constructor() {
  constructor(name, price, category) {
    // console.log("敏感肌にもやさしい100%天然由来のシャンプーです");
    // インスタンス（オブジェクト）にプロパティをもたせる
    // this.name = "シャンプー";
    // this.price = 500;
    // this.category = "生活雑貨";
    this.name = name;
    this.price = price;
    this.category = category;
  }
  // メソッドを定義する
  describe() {
    console.log("この商品は" + this.name + "です。");
  }
}
// インスタンス化する
// const shampoo = new Product();
const shampoo = new Product("シャンプー", 500, "生活雑貨");
const coffee = new Product("コーヒー", 1500, "飲料");
// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す（実行する）
shampoo.describe();

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: "侍太郎",
  age: 36,
  gender: "男性",
  greet: () => {
    console.log("よろしくお願いします！");
  },
};
// メソッドを実行する
user.greet();
console.log(user);
