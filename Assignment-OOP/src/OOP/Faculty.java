package OOP;

public  class Faculty extends StudentRecord {

	public static String[] student_names = {"Jiaan Abad", "Carla Caleruega"};
	
	
	

	@Override
	double average(double grade1, double grade2, double grade3) {
		// TODO Auto-generated method stub
		return Math.round((grade1 + grade2 + grade3) / 3);
	}

	@Override
	public void showRecord() {
		// TODO Auto-generated method stub
		for(String name: student_names) {
			if(name.equals(student_names[0])) {
				System.out.println("\n"+student_names[0]);
				System.out.println(subjects[0]+ " : " + student_grade[0][0]);
				System.out.println(subjects[1]+ " : " + student_grade[0][1]);
				System.out.println(subjects[2]+ " : " + student_grade[0][2]);
				System.out.println(student_names[0]+" Average is : " 
				+average(student_grade[0][0],student_grade[0][1],student_grade[0][2]));
			}
			if(name.equals(student_names[1])) {
				System.out.println("\n"+student_names[1]);
				System.out.println(subjects[0]+ " : " + student_grade[1][0]);
				System.out.println(subjects[1]+ " : " + student_grade[1][1]);
				System.out.println(subjects[2]+ " : " + student_grade[1][2]);
				System.out.println(student_names[1]+" Average is : "  
				+average(student_grade[1][0],student_grade[1][1],student_grade[1][2]));
			}
		}
	}

}
