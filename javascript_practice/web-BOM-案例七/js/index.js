window.addEventListener('load',function () {
    let arrowL = document.querySelector('.arrow-l')
    let arrowR = document.querySelector('.arrow-r')
    let focus = document.querySelector('.focus')
    focus.addEventListener('mouseenter', function () {
        arrowL.style.display = 'block'
        arrowR.style.display = 'block'
        clearInterval(timer)
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none'
        arrowR.style.display = 'none'
        timer = setInterval(function () {
            arrowR.click()
        },2000)
    })
    //動態生成圓圈
    let ul = focus.querySelector('ul')
    let ol = focus.querySelector('.circle')
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement('li')
        li.setAttribute('index', i)
        ol.appendChild(li)
        //綁定點及事件
        li.addEventListener('click', function () {
            for (let j = 0; j < ol.children.length; j++) {
                ol.children[j].className = ''
            }
            this.className = 'current'
            num = this.getAttribute('index')
            circle = this.getAttribute('index')
            //移動ul
            let target = -focus.offsetWidth*this.getAttribute('index')
            animate(ul, target)
        })
    }
    ol.children[0].className = 'current'
    let first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    let num = 0
    let circle = 0
    let flag = true
    arrowR.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num == ul.children.length - 1) {
                ul.style.left = 0 + 'px'
                num = 0
            }
            num++
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true
            })
            circle++
            if (circle == ol.children.length) {
                circle = 0
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            ol.children[circle].className = 'current'
        }
    })
    arrowL.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num == 0) {
                num = ul.children.length -1
                ul.style.left = (num)*focus.offsetWidth + 'px'
            }
            num--
            animate(ul, -num * focus.offsetWidth, function () {
                flag = true
            })
            circle--
            if (circle < 0) {
                circle = ol.children.length - 1
            }
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            ol.children[circle].className = 'current'
        }
    })
    //自動撥放
    let timer = setInterval(function () {
        arrowR.click()
    },2000)

})