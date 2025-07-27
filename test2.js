const obj = {
    first_name: "John",
    last_name: "Doe",
    user_id: 1234
  };
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        // 将下划线分隔的字符串分割成数组
        const keys = key.split('_');
        console.log(keys.slice(1))
    }
}
