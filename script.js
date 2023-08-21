
let text=document.getElementById('txt')
let btn=document.getElementById('btn')

btn.addEventListener('click',Thirukkural)


function Thirukkural(){

    let a=Number(document.getElementById('txt').value)
    fetch('https://api-production-f819.up.railway.app/work/thiru/api?id='+a)
    .then((res)=>{
        console.log(res)
        if(res.ok){
            console.log('success')
        }
        else{
            console.log('failed')
        }
        return res.json()})
    .then((msg)=>{
        let line1=msg[0].line1;
        let line2=msg[0].line2;
        document.getElementById('line1').innerHTML=line1;
        document.getElementById('line2').innerHTML=line2;
        document.getElementById('tit').innerHTML=msg[0].chap_tam;
        responsiveVoice.speak(`${line1+line2}`, "Tamil Male",{rate: 0.8});
        document.getElementById('auth').innerHTML="-திருவள்ளுவர்"
    })
    .catch((err)=>{
        document.getElementById('auth').innerHTML=""
        document.getElementById('line1').innerHTML=`CHECK YOUR NETWORK CONNECTION (OR)`;
        document.getElementById('line2').innerHTML=`I HAVE ADDED ONLY 10 குறள்`;

    })
    
} 