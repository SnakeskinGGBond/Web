function sum(a, b) {
    return a + b;
}

var res = sum('jack');
alert(res);//jackundefined

var res2 = sum();
alert(res2);//NaN,是一个具体存在的值,表示不是数字,not a number

var res3 = sum(1,2,3);
alert(res3);//3