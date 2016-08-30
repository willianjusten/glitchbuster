function surroudingTiles(f){
    var cameraRightX = V.x + CANVAS_WIDTH,
        cameraBottomY = V.y + CANVAS_HEIGHT;

    for(var row = ~~(V.y / TILE_SIZE) ; row <  ~~(cameraBottomY / TILE_SIZE) + 1 ; row++){
        for(var col = ~~(V.x / TILE_SIZE) ; col <  ~~(cameraRightX / TILE_SIZE) + 1 ; col++){
            if(W.tiles[row] && W.tiles[row][col]){
                f(W.tiles[row][col]);
            }
        }
    }
}

function showTilesAnimation(){
    G.hideTiles = false;

    surroudingTiles(function(t){
        var r = dist(t.center, P);
        t.scale = 0.5;
        interp(t, 'scale', 0, 1, r / CANVAS_WIDTH, 0, easeOutBounce);
    });
}

function hideTilesAnimation(){
    G.hideTiles = false;

    surroudingTiles(function(t){
        var r = dist(t.center, P);
        t.scale = 0.5;
        interp(t, 'scale', 1, 0, r / CANVAS_WIDTH, 0, easeOutBounce);
    });
}