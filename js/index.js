var key = true;
var curIndex;
// 随机获取最小值到最大值之间的随机数
function randomFn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// 初始化网格结构
function initDom() {
    var show = document.querySelector('.show');
    curIndex = randomFn(0, 16); // 
    show.innerHTML = '';
    var index;
    for (let i = 0; i < 100; i++) {
        index = randomFn(0, 16);
        if (i % 9 == 0) {
            index = curIndex;
        } else {
            index = randomFn(0, 16);
        }
        show.innerHTML += `<div class="item">
                                <span class="number">${i}</span>
                                <span class="value">
                                    <img src="./img/values/${index}.png" alt="">
                                </span>
                            </div>`
    }
}
initDom();
// 点击转盘旋转
var panel = document.querySelector('.panel');
var resultImg = document.querySelector('#resultImg');
var initImg = document.querySelector('#initImg');
panel.addEventListener('click', function() {
    if (key) {
        this.style.transform = 'rotate(1800deg)';
        this.style.transition = 'all 2s cubic-bezier(0.1, 0.68, 0.53, 0.98)';
    }
})
// 旋转结束后展示图片
panel.addEventListener('transitionend', function() {
    this.style.transform = 'rotate(0deg)';
    this.style.transition = 'none';
    key = true;
    resultImg.src = `./img/values/${curIndex}.png`;
    resultImg.style.opacity = 1;
    initImg.style.opacity = 0;
    // xy = 
})