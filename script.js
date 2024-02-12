
let text=document.getElementById('txt')
let btn=document.getElementById('btn')

var microphone = document.getElementById('microphone');
microphone.onclick = function () {
	
	microphone.classList.add("record");
	var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
	recognition.lang = 'en-US';
	recognition.start();


	numbers = {
		"zero":0,
		"one":1,
		"two":2,
		"three":3,
		"four":4,
		"five":5,
		"six":6,
		"seven":7,
		"eight":8,
		"nine":9
	}

	recognition.onresult = function (event) {
		console.log(event)
		var input = event.results[0][0].transcript;
		for (property in numbers) {
			
			input = input.replace(property, numbers[property]);
			
		}

		document.getElementById("txt").value = input;
        Thirukkural()
		microphone.classList.remove("record");
	}

}

btn.addEventListener('click',Thirukkural)


function Thirukkural(){

    let a=Number(document.getElementById('txt').value)
    fetch('https://thirukkural-9382.onrender.com/work/thiru/api?id='+a)
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
        document.getElementById('tit').innerHTML=""
        document.getElementById('auth').innerHTML=""
        document.getElementById('line1').innerHTML=`CHECK YOUR NETWORK CONNECTION (OR)`;
        document.getElementById('line2').innerHTML=`குறள் COUNT(1330) EXCEEDED`;

    })
    
} 
