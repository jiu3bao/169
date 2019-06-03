const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
'y', 'z'
]

const colors = []

function drawCode(dom_id,w,h,sub_id,s_callb,f_callb) {
    var canvas = document.getElementById(dom_id); //获取HTML端画布
    var context = canvas.getContext("2d"); //获取画布2D上下文
    context.fillStyle = "cornflowerblue"; //画布填充色
    context.fillRect(0, 0, w, h);
    // 创建渐变
    var gradient = context.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    //清空画布
    context.fillStyle = gradient; //设置字体颜色
    context.font = "25px Arial"; //设置字体
    var rand = new Array();
    var x = new Array();
    var y = new Array();
    for (var i = 0; i < 4; i++) {
        rand[i] = nums[Math.floor(Math.random() * nums.length)]
        x[i] = i * 16 + 10;
        y[i] = Math.random() * 20 + 20;
        context.fillText(rand[i], x[i], y[i]);
    }
    // console.log(rand);
    //画3条随机线
    for (var i = 0; i < 3; i++) {
        drawline(canvas, context);
    }

    // 画30个随机点
    for (var i = 0; i < 30; i++) {
        drawDot(canvas, context);
    }
    convertCanvasToImage(canvas)


    // 点击提交进行验证
    $("#"+sub_id).click((e) => {
        var newRand=rand.join('').toUpperCase();
        console.log(newRand);

        //下面就是判断是否== 的代码，无需解释
        var oValue = $('#verify').val().toUpperCase();
        console.log(oValue)
        if (oValue == 0) {
        } else if (oValue != newRand) {
            oValue = ' '
            f_callb
        } else {
            s_callb
        }

    })
}