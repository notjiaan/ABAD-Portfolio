package OOP;

public class Main {
	

	public static void main(String[] args) {
		
		Login login = new Login ();
		Faculty faculty = new Faculty();
		StudentOne student_one = new StudentOne();
		
		login.userLogin();
		
		if(Login.user_type.equals("student")){
			System.out.println("---------- Here is your record ----------");
			student_one.showRecord();
			System.out.println("--------------------");
		}
		else if (Login.user_type.equals("faculty")) {
			System.out.println("---------- Here are your Student's Records ----------");
			faculty.showRecord();
			System.out.println("--------------------");
		}
		
	}

}
