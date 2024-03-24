let input = document.getElementsByTagName('input')[0];
let addBtn = document.querySelector(".add");
let olEl = document.getElementsByTagName('ol')[0];
addBtn.addEventListener("click",()=>{
	if(input.value==""){
		alert("Cannot be empty");
	}else{
		let liEl = document.createElement("li");
		liEl.innerText = input.value;
		olEl.append(liEl);
		input.value="";
		let delBtn = document.createElement('button');
		delBtn.innerHTML = "<i class='bi bi-trash3'></i>";
		liEl.append(delBtn);
			let checkBtn = document.createElement("button");
		checkBtn.innerHTML = "<i class='bi bi-check2'></i>";
		liEl.append(checkBtn);
		delBtn.className = "del";
		
		saveData();
	}
});
olEl.addEventListener("click",(e)=>{
	console.log(e.target);
	let targetEl = e.target;
	let parentEl = (targetEl.parentElement).parentElement;
	if(targetEl.className=="bi bi-trash3"){
		parentEl.remove();
	}else if(targetEl.className="bi bi-check2"){
		parentEl.classList.toggle("checked");
	}
	saveData();
});
function saveData(){
	localStorage.setItem('todo', olEl.innerHTML);
}
function getData(){
	olEl.innerHTML = localStorage.getItem('todo');
}
getData();