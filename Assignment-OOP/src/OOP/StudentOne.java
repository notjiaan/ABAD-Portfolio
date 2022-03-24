package OOP;

public class StudentOne extends StudentRecord{

	@Override
	double average(double grade1, double grade2, double grade3) {
		// TODO Auto-generated method stub
		return Math.round((grade1 + grade2 + grade3) / 3);
	}

	@Override
	public void showRecord() {
		// TODO Auto-generated method stub
		System.out.println("\n"+ "Jiaan Abad");
		System.out.println(subjects[0]+ " : " + student_grade[0][0]);
		System.out.println(subjects[1]+ " : " + student_grade[0][1]);
		System.out.println(subjects[2]+ " : " + student_grade[0][2]);
		System.out.println("Your average is : " 
		+average(student_grade[0][0],student_grade[0][1],student_grade[0][2]));
		
	}

}
