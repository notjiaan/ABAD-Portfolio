package OOP;

public class User {
	
	private String user_email, user_password ,user_type;
	
		public void setEmail(String user_email) {
			this.user_email = user_email;
		}
		public void setPass(String user_password) {
			this.user_password = user_password;
		}
		public void setUserType(String user_type) {
			this.user_type = user_type;
		}
		
		public String getEmail() {
			return user_email;
		}
		public String getPass() {
			return user_password;
		}
		public String getUserType() {
			return user_type;
		}
}
