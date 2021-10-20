function generateCss() {
    let inset = document.getElementById('inset').checked
    inset = inset ? ' inset' : '' // если inset == true, заносим в переменную inset строку ' inset'

    let offsetX = document.getElementById('offsetX').value
    let offsetY = document.getElementById('offsetY').value
    let blur = document.getElementById('blur').value
    let stretch = document.getElementById('stretch').value

    let color = document.getElementById('color').value
    let red = parseInt(color.slice(1, 3), 16) // при помощи метода parseInt() переводим значение красного (первые две цифры) в rgb (16ричное значение)
    let green = parseInt(color.slice(3, 5), 16) // при помощи метода parseInt() переводим значение зеленого (вторая и третья цифры) в rgb (16ричное значение)
    let blue = parseInt(color.slice(5, 7), 16) // при помощи метода parseInt() переводим значение синего (последние две цифры) в rgb (16ричное значение)
    let opacity = document.getElementById('opacity').value

    let result = document.getElementById('result')
    let textarea = document.getElementById('cssCode')

    // Заносим в переменную str все значения из элементов формы
    let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`

    // Выводим строку с готовым css кодом
    textarea.value = 'box-shadow:' + str
        // Присваиваем код тестовому
    result.style.boxShadow = str
}
// Слушаем событие на каждом input'e, которое сразу запускает фнкцию изменения стилей элемента
for (let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss)
}
generateCss()