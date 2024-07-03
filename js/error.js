try {
  notFunction();
} catch (error) {
  console.log("---output error---");
  console.log(error.name);
  console.log(error.massage);
}
try {
  console.log("hello!");
} catch (error) {
  console.log("--- output error ---");
  console.log(error.name);
  console.log(error.message);
}
try {
  console.log("hello!");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("end!");
}
