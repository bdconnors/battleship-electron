const grid = {
    width:800,
    height:600,
    col:11,
    row:11,
    cellW:72.7,
    cellH:54.5,
    labelFont:"10px Arial"
};
drawGrid();

function drawGrid(){
    let y;
    let x;
    for(let i = 0; i < grid.col; i++){
        y = grid.cellH * i;

        for(let j = 0; j < grid.row; j++){
            x = grid.cellW * j;
            if(x === 0 && i !== 0) {
                drawLabel(x+grid.cellW/2.5 , y + grid.cellH/2, i);
            }else if(y === 0 && j !== 0){
                let label = getColumnLabel(j);
                drawLabel(x+grid.cellW/2.5 ,y + grid.cellH /2,label);
            }
            drawCell(x,y);
        }
    }
}
function getColumnLabel(number){
    let label;
    if(number === 1){
        label = "A";
    }else if(number === 2){
        label = "B";
    }else if(number === 3){
        label = "C";
    }else if(number === 4){
        label = "D";
    }else if(number === 5){
        label = "E";
    }else if(number === 6){
        label = "F";
    }else if(number === 7){
        label = "G";
    }else if(number === 8){
        label = "H";
    }else if(number === 9){
        label = "I";
    }else if(number === 10){
        label = "J";
    }
    return label;
}
function drawCell(x,y){
    const context = getContext();
    context.strokeRect(x,y,grid.cellW,grid.cellH);
}
function drawLabel(x,y,label){
    const context = getContext();
    context.font = grid.labelFont;
    context.fillText(label, x, y);
}
function getContext(){
    const canvas = document.getElementById('canvas');
    return canvas.getContext('2d');
}