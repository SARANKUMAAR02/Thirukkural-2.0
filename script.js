let div=document.createElement('div')
let text=document.createElement('input')
text.id="txt"
text.placeholder='TYPE THIRUKKURAL NO'
text.style.width="250px";text.style.borderColor="red";text.style.padding="2px"
let wrapper=document.querySelector('#wrapper')
let btn=document.createElement('button')
div.appendChild(text)
div.appendChild(btn)
div.style.paddingTop='50px'
div.style.paddingLeft='30%'
wrapper.appendChild(div)
btn.textContent="Search"
btn.style.cursor='pointer'
btn.addEventListener('click',Thirukkural)


function Thirukkural(){

    let a=Number(document.getElementById('txt').value)
    fetch('https://api-production-f819.up.railway.app/work/thiru/api?id='+a)
    .then((res)=>{
        if(res.ok){
            console.log('success')
        }
        else{
            console.log('failed')
        }
        return res.json()})
    .then((msg)=>{
        document.getElementById('line1').innerHTML=msg[0].line1;
        document.getElementById('line2').innerHTML=msg[0].line2;
        document.getElementById('tit').innerHTML=msg[0].chap_tam;
        document.getElementById('auth').innerHTML="-திருவள்ளுவர்"
    })
    .catch((err)=>{
        document.getElementById('auth').innerHTML=""
        document.getElementById('line1').innerHTML=`CHECK YOUR NETWORK CONNECTION (OR)`;
        document.getElementById('line2').innerHTML=`குறள் COUNT(1330) EXCEEDED`;

    })
    
}




















/* fetch("http://localhost:4000/work/thiru/api?id=1")
.then((msg)=>{

    console.log(msg.json())
    return msg.json()
})
.then((res)=>{
    let h5=document.getElementById('h5')
    
    h5.innerHTML=res.line1
})
.catch((err)=>{
    console.log(err)
})  */