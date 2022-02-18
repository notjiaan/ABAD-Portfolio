import java.sql.*;

public class ConnectSQL {
    public static void main(String[] args) {
        String DB_URL = "jdbc:mysql://localhost:3306/";
        String DB_User = "root";
        String DB_Pass = "$eptembeR19";
       
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection(DB_URL, DB_User, DB_Pass);
            Statement stmt = con.createStatement();

            //Create Database
            String create_database = "CREATE DATABASE School";
            stmt.executeUpdate(create_database);
            System.out.println("Database created successfully... \n");

            //Go inside the School Database
            String use_database = "USE School";
            stmt.executeUpdate(use_database);
            System.out.println("You are in school database... \n");

            //Create Table inside School and name it Students
            String create_table = "CREATE TABLE Students " +
                    "(StudentID int NOT NULL AUTO_INCREMENT PRIMARY KEY, " +
                    " FName varchar(50) NOT NULL, " +
                    " LName varchar(50) NOT NULL, " +
                    " BDay date NOT NULL, " +
                    " YearEnrolled year NOT NULL)";
            stmt.executeUpdate(create_table);
            System.out.println("Table Created successfully... \n");

            //Alter Table by adding increment that will start at 1000
            String increment_studentID = "ALTER TABLE Students AUTO_INCREMENT = 1000";
            stmt.executeUpdate(increment_studentID);
            System.out.println("Incremented successfully... \n");

            //Insert data in the table
            String insert_Data = "INSERT INTO Students (FName, LName, BDay ,YearEnrolled) Values ('Jiaan' , 'Abad' ,'1999-09-19', '2022')," + 
            "('Levi', 'Sazon','1999-11-19', '2022')," + "('Pat', 'Valenzuela', '2000-08-18', '2022')," + "('Daneah' , 'Sarmiento' , '1999-11-07', '2022')," +
            "('Julia' , 'Bongayan' , '1999-12-02', '2022')," + "('Joyce', 'Pestin', '2000-01-16', '2018')," + "('Gabriel', 'Usita', '1999-11-23', '2018')," +
            "('Richmond', 'Francisco', '1999-02-06', '2018')," + "('Abby', 'Bonuan', '1999-12-23', '2018')," + "('Daniel', 'Busmente', '1999-08-22', '2018')";
            stmt.executeUpdate(insert_Data);
            System.out.println("Data successfully inserted into the database... \n");

            //Print the Data in the command prompt
            ResultSet rs = stmt.executeQuery("SELECT * from Students");
            
            while(rs.next()){
                
                System.out.println(rs.getString("StudentID")+ " " + rs.getString("FName") + " " + rs.getString("LName"));
            }

            stmt.close();
            con.close();
        } catch (Exception e) {
            System.out.println("Error Connecting to SQL!");
            e.printStackTrace();
        }

    }
}
