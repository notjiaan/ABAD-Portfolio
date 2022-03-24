package OOP;

import java.util.Scanner;

public class Login {
	
	static Scanner user_input = new Scanner(System.in);  // Create a Scanner object
    static String user_email, user_password ,user_type;
	User user = new User();
	
	public void userLogin() {
		
		System.out.println("Enter email: ");
		user_email = user_input.nextLine();
		user.setEmail(user_email);

	
		System.out.println("Enter password: ");
		user_password = user_input.nextLine();
		user.setPass(user_password);
		
		
		if(user.getEmail().equals("student@gmail.com") && user.getPass().equals("student")) {
			System.out.println("\nHello student!");
			user.setUserType("student");
			user_type = user.getUserType();
		}
		else if(user.getEmail().equals("faculty@gmail.com") && user.getPass().equals("faculty")) {
			System.out.println("\nHello teacher!");
			user.setUserType("faculty");
			user_type = user.getUserType();
		}
	}

}
