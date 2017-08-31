/**
 * Бинарный поиск
 * Асимптотическая сложность O(log n)
 * @param list отсортированный массив данных
 * @param item названное значение
 */
function binary_search(list, item) {
    //low и high - границы той части списка, в которой выполняется поиск
    var low = 0,
        high = list.length-1;
    //пока часть не сократится до одного аргумента
    while (low <= high) {
        var mid = Math.floor((low + high)/2), // проверяем средний элемент
            guess = list[mid];
        if (guess === item) { //когда значение найдено
            return mid
        } else if (guess > item) { //много
            high = mid - 1;
        } else { // мало
            low = mid + 1;
        }
    }
    if (!list[item]) {
        return null; // значение не существует
    }
}