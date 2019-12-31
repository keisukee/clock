timerID = setInterval('clock()', 500); //0.5秒毎にclock()を実行
// clock();
function clock() {
  // document.getElementById("time").innerHTML = getNow();
  getNow();
}

function getNow() {
  let numbers = document.getElementsByClassName('display');
  deleteNumberElements(...numbers);
	let now = new Date();
	let year = now.getFullYear();
	let mon = now.getMonth() + 1; //１を足すこと
	let day = now.getDate();
	let hour = now.getHours();
	let min = now.getMinutes();
  let sec = now.getSeconds();
  
  let timeInfo = [year, mon, day, hour, min, sec];

  for (let i = 0; i < timeInfo.length; i++) {
    // console.log(timeInfo[i]);
    showMultipleNumbers(timeInfo[i], 'time');
  }

	//出力用
	let s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒"; 
	return s;
}

function renderNumber(number, id) {
  let element = document.getElementById(id);
  let newDigit = document.createElement("div");
  let digitClassName = ('display ' + 'd' + number.toString());
  newDigit.setAttribute("class", digitClassName);
  console.log('digit', newDigit);
  element.appendChild(newDigit);
}

function showMultipleNumbers(numbers, id) {
  let numbersArray = numbers.toString();
  console.log('numbersArray', numbersArray);

  for (let i = 0; i < numbersArray.length; i++) {
    console.log(`hoge${i}: ${numbersArray[i]}`);
    renderNumber(numbersArray[i], id);
  }
}

function deleteNumberElements(...numbers) {
  // let numbers = document.getElementsByClassName(className);
  // console.log('length: ', numbers.length);
  for (let i = 0; i < numbers.length; i++) {
    // console.log()
    console.log(`${i}: ${numbers[i]}`);
    numbers[i].remove();
    // document.getElementById("test").remove();

    // bullet.parentNode.removeChild(bullet); // 弾丸が消滅

    // numbers[i].parentNode.removeChild(numbers[i]);
  };
}
// renderNumber(7, 'time')

// getNow();