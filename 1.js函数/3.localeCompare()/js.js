var stringValue = "yellow";
alert(stringValue.localeCompare("black")); //1
alert(stringValue.localeCompare("yellow")); //0
alert(stringValue.localeCompare("zoo")); //-1

// 如果字符串在字母表中应该排在字符串参数前，则返回一个负数
// 如果字符串等于字符串参数，则返回0
// 如果字符串在字母表中应该排在字符串参数后，则返回一个正数