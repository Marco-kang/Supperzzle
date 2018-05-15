/**
 * Created by 康磊 on 2018/5/1.
 */
var arr = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    1, 2, 3, 4,
    5, 6, 7, 8
]
function onSort() {
    return Math.random() > .5 ? -1 : 1;
}
// 打乱数组的顺序
arr.sort(onSort);

// 设置span标签的内容
var span = document.querySelectorAll('.span');
for(var i = 0; i < span.length; i++) {
    span[i].innerText = arr[i];
}

// 事件委托
var dv = document.querySelector('.dv');
var arrFlag = []; // 存储点击两次的下标
dv.addEventListener('click', function (e) {
    // 判断目标元素是否有sel样式，有就移除，没有添加
    // e.target.classList.toggle('sel');
    for (var i = 0; i < span.length; i++) {
        // 获取点击元素的下标，并且两次不是点击在同一个元素上
        if(span[i] == e.target && i != arrFlag[0]) {
           span[i].classList.toggle('sel');
            if(arrFlag.length) {
                arrFlag[1] = i;
                var res = isEqual();
                setTimeout(function() {
                    if(res == 1) {
                        span[arrFlag[0]].classList.add('equal');
                        span[arrFlag[1]].classList.add('equal');
                        arrFlag = [];
                        // span[arrFlag[0]].setAttribute('disabled', 'disabled');
                        // span[arrFlag[1]].setAttribute('disabled', 'disabled');
                    }else {
                        // 存在样式sel则移除
                        span[arrFlag[0]].classList.toggle('sel', false);
                        span[arrFlag[1]].classList.toggle('sel', false);
                        arrFlag = [];
                    }
                 }, 800);
            }else {
                arrFlag[0] = i;
                console.log(arrFlag);
            }
        }
    }
})

// 判断两次点击的元素是否相同
function isEqual() {
    console.log(arrFlag);
    if(arr[arrFlag[0]] == arr[arrFlag[1]]) {
        console.log('相同。。。');
        return 1;
    }else {
        console.log('不相同。。。');
        return 0;
    }
    // arrFlag = [];
    // setTimeout(function () {
    //     for (var i = 0; i < span.length; i++) {
    //         // 存在样式sel则移除
    //         span[i].classList.toggle('equal', false);
    //     }
    // }, 1200)
}

