num=new Array();
c=0;
function random(){
    if(c>0){
    do{
    	 var v=false;
    	 do{
	       var number=Math.floor(Math.random()*10);
           }while(number>=7 || number==0);
           console.log("number bedore loop:"+number);
    	for(i=0;i<num.length;i++){
    		if(number==num[i]){
    			v=true;
    		}
    	}
    }while(v==true);
    }
    else {
    	do{
	       var number=Math.floor(Math.random()*10);
           }while(number>=7 || number==0);
    }
    num[c]=number;
    console.log("num[c]"+num[c]);
    c++;
    return number;
}
comp=0;
vcompt=0;
TV=new Array();
function test(i,ch){
     console.log("i : "+i);
     if(comp==0){
        if(ti[i]==1){
            document.getElementById(tc[i]).src="image/1.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==2){
            document.getElementById(tc[i]).src="image/2.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==3){
            document.getElementById(tc[i]).src="image/3.png";
            TV[comp]=tc[i];
        }
        comp++;
     }
     else if(comp==1){
        if(ti[i]==1){
            document.getElementById(tc[i]).src="image/1.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==2){
            document.getElementById(tc[i]).src="image/2.png";
            TV[comp]=tc[i];
        }
        else if(ti[i]==3){
            document.getElementById(tc[i]).src="image/3.png";
            TV[comp]=tc[i];
        }
        console.log(TV[0]);
        console.log(TV[1]);
        i1=document.getElementById(TV[0]).value;
        i2=document.getElementById(TV[1]).value;
        if(i1==i2){
            document.getElementById(TV[0]).onclick="";
            document.getElementById(TV[1]).onclick="";
            TV = new Array();
            comp=0;
        }
        else{
            setTimeout(function reset(){document.getElementById(TV[0]).src="image/t.png";
            document.getElementById(TV[1]).src="image/t.png";
            TV = new Array();
            comp=0;},1000);
        }
     }
}
ti =new Array();
tc = new Array();
function random_image(){
     for(i=0;i<6;i++){
     	var ch="i"+i;
     	var n=random();
     	if(n==1 || n==2){
     		var d=document.getElementById(ch);
     		d.src="image/1.png";
            d.value="1";
     		d.class="p1";
            ti[i]=1;
     	}
     	else if(n==3 || n==4){
     		var d=document.getElementById(ch);
     		d.src="image/2.png";
            d.value="2";
     		d.class="p2";
            ti[i]=2;
     	}
     	else if(n==5 || n==6){
     		var d=document.getElementById(ch);
     		d.src="image/3.png";
     		d.class="p2";
            d.value="3";
            ti[i]=3;
     	}
     }
     document.getElementById("start_restart").style.visibility="hidden";
     setTimeout(function start(){
	for(i=0;i<6;i++){
	    var ch="i"+i;
        tc[i]=ch;
	    d=document.getElementById(ch);
        d.src="image/t.png";
        d.setAttribute("onclick","test("+i+");");
	}
    },250);     
 
}



