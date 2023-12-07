function ponto(){
    var x,y,p;
    var Q1,Q2,Q3,Q4;
    x=4.5;
    p=-2.2;
    
    if (x>0){
        p=Q1||Q4;
}else{
        p=Q2||Q3;
    }

    if (y>0){
        p=Q2||Q1;
    }else{
        p=Q3||Q4;
    }

alert(p);
}
