function calculateGrade(percentage) {
  //your code here
	if(percentage >= 90){
		return 'A';
	}else if(percentage >= 80){
		return 'B'
	}else if(percentage >= 70){
		return 'C';
	}else if(percentage >= 60){
		return 'D';
	}else {
		return 'F';
	}
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
