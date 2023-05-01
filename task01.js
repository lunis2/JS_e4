function printProperties(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`K: ${key}, V: ${obj[key]}`);
    }
  }
}