package test;

import org.junit.Test;


import java.sql.*;

/**
 * Created by Tony on 3/7/15.
 */

public class tc {

    private static Connection con=null;


    public static Connection getConnection() throws ClassNotFoundException, SQLException {
        if(con == null){
            Class.forName("com.mysql.jdbc.Driver");
            con= DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/mingyue", "root", "");
        }
        return con;
    }

    @Test
    public void tt(){
        Statement st=null;
        ResultSet rs=null;
        try {
            con=getConnection();
            st=con.createStatement();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
