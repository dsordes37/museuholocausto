const lista=document.querySelector(".car_list")

const bt1=document.querySelector("#car_bt1")
const bt2=document.querySelector("#car_bt2")

const estilo=document.body.style
var x=1

var vid1= document.getElementById('vci_1')
var vid2= document.getElementById('vci_2')
var vid3= document.getElementById('vci_3')
var vid4= document.getElementById('vci_4')
var vid5= document.getElementById('vci_5')
var vid6= document.getElementById('vci_6')


vid1.addEventListener('click', ()=>{
    var win = window.open("video1.html", '_parent');
    win.focus();
})

vid2.addEventListener('click', ()=>{
    var win = window.open("video2.html", '_parent');
    win.focus();
})

vid3.addEventListener('click', ()=>{
    var win = window.open("video3.html", '_parent');
    win.focus();
})

vid4.addEventListener('click', ()=>{
    var win = window.open("video4.html", '_parent');
    win.focus();
})

vid5.addEventListener('click', ()=>{
    var win = window.open("video5.html", '_parent');
    win.focus();
})

vid6.addEventListener('click', ()=>{
    var win = window.open("video6.html", '_parent');
    win.focus();
})


bt1.addEventListener('click', ()=>{
    if(x==2){
        x--
        estilo.setProperty('--list_x', '0')
        bt1.style.color='rgba(199, 199, 199, 0.685)'
    }else if(x==3){
        x--
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-1)')
    }else if(x==4){
        x--
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-2)')
    }else if(x==5){
        x--
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-3)')

        var width=window.innerWidth

        bt2.style.color='rgba(255, 255, 255, 0.89)'
        
    }else if(x==6){
        x--
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-4)')
        bt2.style.color='rgba(255, 255, 255, 0.89)'
    }



    
    
})

bt2.addEventListener('click', ()=>{
    
    if(x==1){
        x++
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-1)')
        bt1.style.color='rgba(255, 255, 255, 0.89)'
    }else if(x==2){
        x++
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-2)')
    }else if(x==3){
        x++
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-3)')
    }else if(x==4){
        var width=window.innerWidth

        x++
        estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-4)')
        if(width>580){

            bt2.style.color='rgba(199, 199, 199, 0.685)'
        }

    }else if(x==5){
        var width=window.innerWidth

        if(width<=580){
            x++
            estilo.setProperty('--list_x', 'calc(clamp(250px, 30vw, 100vw)*-5)')

            bt2.style.color='rgba(199, 199, 199, 0.685)'
        }
    }
})