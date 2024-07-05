var openNav=document.querySelector('.open')
var closeNav=document.querySelector('.close')
var navList=document.querySelector('.navlist')
var tabi=document.querySelectorAll('.tabList')
var tabCont=document.querySelectorAll('.tab-contents')
var msg=document.getElementById('msg')
var loadForm=document.querySelector('.col6 button')
var title=document.querySelector('#title')
var email=document.querySelector('#email')
var colHigh=document.querySelectorAll('.col3')


colHigh.forEach(col=>{
    col.onclick=(e)=>{
        for(colt of colHigh){
            colt.classList.remove('show')
        }
        e.target.classList.add('show')


    }
})

loadForm.onclick=()=>{
    if(title.value!=='' || email.value!==''){
        msg.innerHTML="Success"
    }else{
        msg.innerHTML="Not sent"
        
    }
    
    
}

openNav.onclick=()=>{
    navList.classList.add('show')

}
closeNav.onclick=()=>{
    navList.classList.remove('show')

}

function openTab(tabname){
    for(tab of tabi){
        tab.classList.remove('active')
    }
    for(tabcon of tabCont){
        tabcon.classList.remove('show')
    }
    event.currentTarget.classList.add('active')
    document.getElementById(tabname).classList.add('show')

}

/*tabi.forEach(tbi=>{
    tbi.onclick=(tabname)=>{
        for(tab of tabi){
            tab.classList.remove('active')
        }
        for(tabcon of tabCont){
            tabcon.classList.remove('show')
        }
       
       
        
        event.target.classList.add('active')
        document.getElementById(tabname).classList.add('show')
    }
})*/
