window.addEventListener('load', function() {
    let focus = document.querySelector('.focus')
    let ul = focus.children[0]
    let w = focus.offsetWidth
    let ol = focus.children[1]
    let index = 0
    let timer = setInterval(function () {
        index++
        let translateX = -index * w
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translateX+ 'px)'
    },2000)
    ul.addEventListener('transitionend',function () {
        if (index == 3) {
            index = 0
            ul.style.transition = 'none'
            let translateX = -index * w
            ul.style.transform = 'translateX(' + translateX+ 'px)'
        }else if (index < 0) {
            index = 2
            ul.style.transition = 'none'
            let translateX = -index * w
            ul.style.transform = 'translateX(' + translateX+ 'px)'
        }
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })

    //滑動輪播
    let startX = 0
    let moveX = 0
    let flag = false
    ul.addEventListener('touchstart' ,function (evt) {
        startX = evt.targetTouches[0].pageX
        clearInterval(timer)
    })
    ul.addEventListener('touchmove' ,function (evt) {
        moveX = evt.targetTouches[0].pageX - startX
        let translateX = -index * w + moveX
        ul.style.transition = 'none'
        ul.style.transform = 'translateX(' + translateX+ 'px)'
        flag = true
        evt.preventDefault()
    })
    ul.addEventListener('touchend' ,function (evt) {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--
                } else {
                    index++
                }
                let translateX = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translateX+ 'px)'
            }else {
                let translateX = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translateX+ 'px)'
            }
        }
        clearInterval(timer)
        timer = setInterval(function () {
            index++
            let translateX = -index * w
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translateX+ 'px)'
        },2000)
    })
})