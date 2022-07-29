let obj1 = [{
    'src':'../Extras/item1.jpg',
    'name':'Airforce1',
    'price':'$40/hour'

},
{
    'src':'../Extras/item2.webp',
    'name':'Airforce2',
    'price':'$35/hour'

},{
    'src':'../Extras/item3.webp',
    'name':'Airforce1 high top',
    'price':'$45/hour'

},{
    'src':'../Extras/item4.webp',
    'name':'Airforce1 special edition',
    'price':'$90/hour'

},{
    'src':'../Extras/item5.webp',
    'name':'Adidas low',
    'price':'$60/hour'

},{
    'src':'../Extras/item6.webp',
    'name':'adidas neo',
    'price':'$70/hour'

},{
    'src':'../Extras/item7.webp',
    'name':'Adidas Superstar',
    'price':'$30/hour'

},{
    'src':'../Extras/item8.webp',
    'name':'adidas yeezies',
    'price':'$100/hour'

},{
    'src':'../Extras/item9.webp',
    'name':'adidas superstar basic',
    'price':'$30/hour'

},]

function fun1(){

    sessionStorage.setItem('newva1','true')
    alert('item added succesully')    
}
function fun2(){
    sessionStorage.setItem('newva2','true')
    alert('item added succesully')    
}
function fun3(){
    sessionStorage.setItem('newva3','true')
    alert('item added succesully')    
}
function fun4(){
    sessionStorage.setItem('newva4','true')
    alert('item added succesully')    
}
function fun5(){
    sessionStorage.setItem('newva5','true')
    alert('item added succesully')    
}
function fun6(){

    sessionStorage.setItem('newva6','true')
    alert('item added succesully')    
}
function fun7(){
    sessionStorage.setItem('newva7','true')
    alert('item added succesully')    
}
function fun8(){
    sessionStorage.setItem('newva8','true')
    alert('item added succesully')    
}
function fun9(){
    sessionStorage.setItem('newva9','true')
    alert('item added succesully')    
}
function function1(){
    var main = document.getElementById('mainele')
    var s1 = sessionStorage.getItem('newva1')
    var s2 = sessionStorage.getItem('newva2')
    var s3 = sessionStorage.getItem('newva3')
    var s4 = sessionStorage.getItem('newva4')
    var s5 = sessionStorage.getItem('newva5')
    var s6 = sessionStorage.getItem('newva6')
    var s7 = sessionStorage.getItem('newva7')
    var s8 = sessionStorage.getItem('newva8')
    var s9 = sessionStorage.getItem('newva9')
    if(s1){
        console.log(s1);
    main.innerHTML='<tr><td><img src= '+obj1[0].src+'><br><h3>'+obj1[0].name+'</h3><br><p>'+obj1[0].price+'</p></td></tr>'
    }
    if(s2){
        console.log(s2);
        let p2 = document.createElement('div')
     p2.innerHTML='<tr><td><img src= '+obj1[1].src+'><br><h3>'+obj1[1].name+'</h3><br><p>'+obj1[1].price+'</p></td></tr>'
        main.append(p2)
    }
    if(s3){
        console.log(s3);
        let p3 = document.createElement('div')
    p3.innerHTML='<tr><td><img src= '+obj1[2].src+'><br><h3>'+obj1[2].name+'</h3><br><p>'+obj1[2].price+'</p></td></tr>'
        main.append(p3)
}
    if(s4){
        console.log(s4);
        let p4 = document.createElement('div')
    p4.innerHTML='<tr><td><img src= '+obj1[3].src+'><br><h3>'+obj1[3].name+'</h3><br><p>'+obj1[3].price+'</p></td></tr>'
        main.append(p4)
}
    if(s5){
        console.log(s5);
        let p5 = document.createElement('div')
    p5.innerHTML='<tr><td><img src= '+obj1[4].src+'><br><h3>'+obj1[4].name+'</h3><br><p>'+obj1[4].price+'</p></td></tr>'
        main.append(p5)
}

    if(s6){
        console.log(s6);
        let p6 = document.createElement('div')
    p6.innerHTML='<tr><td><img src= '+obj1[5].src+'><br><h3>'+obj1[5].name+'</h3><br><p>'+obj1[5].price+'</p></td></tr>'
        main.append(p6)
}if(s7){
        console.log(s7);
        let p7 = document.createElement('div')
    p7.innerHTML='<tr><td><img src= '+obj1[6].src+'><br><h3>'+obj1[6].name+'</h3><br><p>'+obj1[6].price+'</p></td></tr>'
    main.append(p7)
}
    if(s8){
        console.log(s8);
        let p8 = document.createElement('div')
    p8.innerHTML='<tr><td><img src= '+obj1[7].src+'><br><h3>'+obj1[7].name+'</h3><br><p>'+obj1[7].price+'</p></td></tr>'
        main.append(p8)
}
    if(s9){
        console.log(s9);
        let p9 = document.createElement('div')
    p9.innerHTML='<tr><td><img src= '+obj1[8].src+'><br><h3>'+obj1[8].name+'</h3><br><p>'+obj1[8].price+'</p></td></tr>'
    main.append(p9)
}
    console.log(main);
}