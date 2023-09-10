//document.createElement()
//html 구조에는 없고 오직 메모리에만 존재한다. 

const divEl = document.createElement('div')
console.log(divEl)


//E.prepend() / E.append()
//노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입한다.

const parentEl = document.querySelector('.parent')
const el = document.createElement('div')
el.textContent = 'hello~'

parentEl.prepend(new Comment('주석!'))
parentEl.append(el)
parentEl.append('Text!')


//E.remove()
//요소를 제거한다.

const el2 = document.querySelector('.child')
el.remove()

//E.insertAdgacentElement()
//대상 요소 .insert(위치,새로운요소)

