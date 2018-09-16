let triangle = document.getElementById('triangle');
        triangle.width = 650;
        triangle.height = 600;
    let context = triangle.getContext('2d');

    context.beginPath();
    context.moveTo(15, 550);
    context.lineTo(275, 15); //left
    context.lineTo(550, 550);
    context.lineTo(0, 550);
    context.closePath();
    
    context.shadowColor = "rgba(221, 234, 240, 1)";
    context.shadowBlur = 50;
    context.shadowOffsetX = -1;
    context.shadowOffsetY = -5;
    context.fillStyle = "#fff";
    context.fill();