module.exports = function reverse(n) {
    let absolute = Math.abs(n);
    let result = 0;
    while (absolute) {
        result = result * 10 + absolute % 10;
        absolute = Math.floor(absolute / 10);
    }
    return (result);
}