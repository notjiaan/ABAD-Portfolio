package OOP;

public abstract class StudentRecord {
	
	public static double [][] student_grade = {{95, 85, 79}, {99, 89, 95}};
	public static String[] subjects = {"Science", "Math", "English"};
	
	abstract double average(double grade1, double grade2, double grade3);
	public abstract void showRecord(); 
	

}
