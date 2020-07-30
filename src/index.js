const displayH = window.innerHeight - (window.innerHeight * .1);
const grid = {
    width:displayH,
    height:displayH,
    col:11,
    row:11,
    cellW:displayH/11,
    cellH:(displayH/11)/2,
    labelFont:"10px Arial"
};
centerCanvas();
setCanvasDimensions();
drawGrid();
drawGrid(grid.width/2);
function setCanvasDimensions(){
    //set canvas dimensions
    const context = getContext();
    context.canvas.width = grid.width;
    context.canvas.height = grid.height;
}
function centerCanvas(){
    //center canvas
    const canvas = document.getElementById('canvas');
    canvas.style.marginRight = "auto";
    canvas.style.marginLeft = "auto";
    canvas.style.display = "table";
}
function drawGrid(drawPosY = 0){
    let y;
    let x;
    for(let i = 0; i < grid.col; i++){
        y = grid.cellH * i + drawPosY;
        for(let j = 0; j < grid.row; j++){
            x = grid.cellW * j;
            drawCell(x,y);
            drawLabel(x,y,i,j,drawPosY);
        }
    }
}
function getLabel(isCol,isRow,number){
    let label = "";
    if(isRow){
        label = number;
    }else if(isCol){
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
    }
    return label;
}
function drawCell(x,y){
    const context = getContext();
    context.strokeRect(x,y,grid.cellW,grid.cellH);
}
function drawLabel(x,y,colNum,rowNum,drawPosY){
    const isColumnHeader = y === drawPosY && rowNum !== 0;
    const isRowHeader = x === 0 && colNum !== 0;
    if((isColumnHeader) || (isRowHeader)){
        let number;
        let label;
        let posX = x + (grid.cellW / 2.5);
        let posY = y + (grid.cellH / 2);
        if(isColumnHeader){
            number = rowNum;
        }else if(isRowHeader){
            number = colNum;
        }
        label = getLabel(isColumnHeader,isRowHeader,number);
        const context = getContext();
        context.font = grid.labelFont;
        context.fillText(label,posX,posY);
    }
}
function getContext(){
    const canvas = document.getElementById('canvas');
    return canvas.getContext('2d');
}