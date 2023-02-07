window.addEventListener('load',function () {
    let preview_img = document.querySelector('.preview_img')
    let mask = document.querySelector('.mask')
    let big = document.querySelector('.big')
    preview_img.addEventListener('mouseover',function () {
        mask.style.display = 'block'
        big.style.display = 'block'
    })
    preview_img.addEventListener('mouseout',function () {
        mask.style.display = 'none'
        big.style.display = 'none'
    })
    preview_img.addEventListener('mousemove',function (e) {
        let x = e.pageX - this.offsetLeft
        let y = e.pageY - this.offsetTop

        let maskX = x - mask.offsetWidth/2
        let maxX = preview_img.offsetWidth - mask.offsetWidth
        let maskY = y - mask.offsetHeight/2
        let maxY = preview_img.offsetHeight - mask.offsetHeight
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maxX) {
            maskX = maxX
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maxY) {
            maskY = maxY
        }
        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'
        let bigIMG = document.querySelector('.bigImg')
        let bigMax = bigIMG.offsetWidth - big.offsetWidth
        let bigX = maskX * bigMax / maxX
        let bigY = maskY * bigMax / maxY
        bigIMG.style.left = -bigX + 'px'
        bigIMG.style.top = -bigY + 'px'
    })
})