function MyFunction() {
    let opera = "+";
    let a = 6
    let b = 5
    switch (opera) {
        case '+':
            alert("a+b="+(a+b));
            break;
        case '-':
            alert("a-b="+(a-b));
            break;
        case '*':
            alert("a*b="+(a*b));
            break;
        case '/':
            alert("a/b="+(a/b));
            break;
        default:
            alert("không có phép toán")
            break;
    }