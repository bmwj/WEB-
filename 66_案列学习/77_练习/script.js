const panels = document.querySelectorAll('.panel');
// panels 是一个类数组对象（NodeList）
console.log(panels);
//使用 for 循环为每个 .panel 元素添加点击事件监听器
for (let i = 0; i < panels.length; i++) {
    // 注意这里的 () => {} 是一个箭头函数，它会在循环中创建新的函数实例，因此可以访问当前的 i 变量
    //当点击某个 .panel 元素时，会调用 removeActiveClasses 函数，然后为被点击的元素添加 active 类
    panels[i].addEventListener('click', () => {
        removeActiveClasses();
        panels[i].classList.add('active');
    });
}
//这个函数使用 for 循环遍历所有的 .panel 元素。
// 在每次循环中，移除当前 .panel 元素的 active 类。
function removeActiveClasses() {
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active');
    }
}
