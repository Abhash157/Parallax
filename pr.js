let chk= document.getElementById("check")
let bgr= document.querySelector(".burger")
let crs= document.querySelector(".cross")
let navBox=document.querySelector(".navBox")
let layer=document.getElementById("layer")
let header= document.getElementById("header")
let nav= document.getElementById("nav")
let bgrCont= document.querySelector(".burgerCont")

bgr.addEventListener("click",show)
crs.addEventListener("click",show)
function show(){
		if(chk.checked==false) {
				bgr.style.right="-40px"
				crs.style.top="10px"
				navBox.style.top="0%"
				document.body.style.background="#716affa0"
		}else{
				bgr.style.right="15px"
				crs.style.top="-40px"
				navBox.style.top="-100%"
	  			document.body.style.background="var(--clr)"
		}
}



//----------------header----------------
let cliff= document.getElementById("cliff")
let mountain= document.getElementById("mountain")
let sun= document.getElementById("sun")

window.addEventListener("scroll",()=>{
		let value=window.scrollY
		if(0.05*value<15) {
				cliff.style.bottom= -20+(0.06*value) +"%"	
		}
		
		mountain.style.bottom= 0+(0.02*value) +"%"	
		let mount= 0.08*value+100
		mountain.style.transform= "scale("+mount+"%)"
			
		if(value>550) {
				nav.style.top=0;
		}else{
				nav.style.top="-50px";
		}
		if(value>500) {
				bgr.style.top="10px";
		}else{
				bgr.style.top="-50px";
		}
			
		if(screen.width<700){
				sun.style.top=10+0.1*value+"vh"
		}else {
				sun.style.top=10+0.2*value+"vh"
		}
		
		let sunTop;
		let opacity;
		let grn;
		if(screen.width<700){
				sunTop= 10+0.1*value
		}else {
				sunTop= 10+0.2*value
		}
			
		let hue;
		sun.style.boxShadow="0 0 100px "+ 100*(1/20)*(sunTop-20) +"px #f22"
		if(screen.width>700) {
				sun.style.boxShadow="0 0 100px "+ 100*(1/60)*(sunTop-20) +"px #f22"
		}
			
		if(sunTop<20) {
				opacity=0;
				grn= 250
				
				grn=250-(9/1.2)*(sunTop-20)
				if (screen.width>700) {
						grn=250-(9/2.5)*(sunTop-20)
				}
				sun.style.background= "rgba(360,"+grn+",0,1)"
				//layer.style.background="rgba50,r100,360,"+opacity+")"
				
				opacity= 1.30-1/3*(sunTop-20);
				if (screen.width>700){
						opacity= 1.2-1/60*(sunTop-20);
				}
					layer.style.background="rgba(50,100,360,"+"opacity)"		
				
				sun.style.boxShadow="0 0 100px "+ 100*(1/20)*(sunTop-20) +"px #f22"
				if(screen.width>700) {
						sun.style.boxShadow="0 0 100px "+ 100*(1/60)*(sunTop-20) +"px #f22"
				}
		}

			
			
			let fullH= Math.max(document.body.offsetHeight)
			let scrollH= screen.height+value
			let startpos= fullH-screen.height/2
			
			if(screen.width>700) {
					startpos= fullH-screen.height
			}
			
			if(value<startpos) {
					endBox.style.left="-100vw";
			}
			if(scrollH>startpos && ((scrollH-startpos)/(fullH-startpos))<=1) {
					endBox.style.left= -100+100*(scrollH-startpos)/(fullH-startpos)+"vw"
			}
			if((scrollH-startpos)/(fullH-startpos)>1) {
					endBox.style.left=0
			}
		 
		 
			if (screen.width>700) {
					if(scrollH>startpos && ((scrollH-startpos)/(fullH-startpos))<=10/12) {
							endBox.style.left= -120+120*(scrollH-startpos)/(fullH-startpos)+"vw"
					}
					if((scrollH-startpos)/(fullH-startpos)>10/12) {
							endBox.style.left=0
					}
			}
			
			
})


