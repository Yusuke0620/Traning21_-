
/*-------------------------------------------
ヘッダーのフェードインアニメーション
-------------------------------------------*/
const header = document.querySelector('#header');

const keyframes = {
    opacity: [0, 1],
};
const options = {
    duration: 5000,
    easing: 'ease',
    fill: 'forwards'
};

window.addEventListener('load', () => {
    header.animate(keyframes, options);
});

/*-------------------------------------------
メニューアイテムの拡大アニメーション
-------------------------------------------*/
//配列にしてforEach
//取得する要素は

const list = document.querySelectorAll('.menu-second > li');
console.log(list);

for (let i = 0; i < list.length; i++) {
    list[i],addEventListener('mouseover', () => {
        console.log(list[i]);
    })
}