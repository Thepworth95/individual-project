package fontEndTesting;

import static org.junit.Assert.*;

import org.junit.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class FrontEndTestUsingSelenium {
	
	WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:/Users/Admin/Desktop/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@Test
	public void UserStoryTest() throws InterruptedException {
		driver.get("file:///c%3A/Users/Admin/individual%20project/front%20end/index.html");
		WebElement webEle = driver.findElement(By.xpath("/html/body/nav/a[4]"));
		webEle.click();
		WebElement createuserame = driver.findElement(By.xpath("/html/body/form/input[1]"));
		createuserame.sendKeys("frenchy");
		WebElement createpassword = driver.findElement(By.xpath("/html/body/form/input[2]"));
		createpassword.sendKeys("password");
		WebElement createfirstname = driver.findElement(By.xpath("/html/body/form/input[3]"));
		createfirstname.sendKeys("frenchy");
		WebElement createlastname = driver.findElement(By.xpath("/html/body/form/input[4]"));
		createlastname.sendKeys("lastname");
		WebElement createfavchar = driver.findElement(By.xpath("/html/body/form/input[5]"));
		createfavchar.sendKeys("57");
		WebElement createregister = driver.findElement(By.xpath("/html/body/form/button"));
		createregister.click();
		Thread.sleep(2000);
		WebElement loginpage = driver.findElement(By.xpath("/html/body/nav/a[3]"));
		loginpage.click();
		WebElement loginuserame2 = driver.findElement(By.xpath("/html/body/form/input[1]"));
		loginuserame2.sendKeys("frenchy");
		WebElement loginpassword = driver.findElement(By.xpath("/html/body/form/input[2]"));
		loginpassword.sendKeys("password");
		WebElement loginsubmitdetails = driver.findElement(By.xpath("/html/body/form/button"));
		loginsubmitdetails.click();
		Thread.sleep(2000);
		WebElement updateuserame = driver.findElement(By.xpath("/html/body/form[1]/input"));
		updateuserame.sendKeys("zak");
		WebElement updateuserameclick = driver.findElement(By.xpath("/html/body/form[1]/button"));
		updateuserameclick.click();
		Thread.sleep(2000);		
		WebElement updatepassword = driver.findElement(By.xpath("/html/body/form[2]/input"));
		updatepassword.sendKeys("abcde");
		WebElement updatepasswordclick = driver.findElement(By.xpath("/html/body/form[2]/button"));
		updatepasswordclick.click();
		WebElement loginpage2 = driver.findElement(By.xpath("/html/body/nav/a[3]"));
		loginpage2.click();
		WebElement loginuserame = driver.findElement(By.xpath("/html/body/form/input[1]"));
		loginuserame.sendKeys("zak");
		WebElement loginpassword2 = driver.findElement(By.xpath("/html/body/form/input[2]"));
		loginpassword2.sendKeys("abcde");
		WebElement loginsubmitdetails2 = driver.findElement(By.xpath("/html/body/form/button"));
		loginsubmitdetails2.click();
		WebElement deleteuser = driver.findElement(By.xpath("/html/body/button"));
		deleteuser.click();	
		WebElement loginuserame3 = driver.findElement(By.xpath("/html/body/form/input[1]"));
		loginuserame3.sendKeys("zak");
		WebElement loginpassword3 = driver.findElement(By.xpath("/html/body/form/input[2]"));
		loginpassword3.sendKeys("abcde");
		WebElement loginsubmitdetails3 = driver.findElement(By.xpath("/html/body/form/button"));
		loginsubmitdetails3.click();
		Thread.sleep(5000);	
		String a = driver.switchTo().alert().getText();
		driver.switchTo().alert().accept(); 
		assertEquals("", "username does not exist", a);
	}
	
	@Test
	public void loginTest() throws InterruptedException {
		driver.get("file:///c%3A/Users/Admin/individual%20project/front%20end/login.html");
		WebElement loginuserame = driver.findElement(By.xpath("/html/body/form/input[1]"));
		loginuserame.sendKeys("tom");
		WebElement loginpassword = driver.findElement(By.xpath("/html/body/form/input[2]"));
		loginpassword.sendKeys("password");
		WebElement loginsubmitdetails = driver.findElement(By.xpath("/html/body/form/button"));
		loginsubmitdetails.click();
		Thread.sleep(5000);	
		String a = driver.findElement(By.xpath("/html/body/div/h1")).getText();
		System.out.println(a);
		assertEquals("", "tom-Shulk", a);		
	}
		
	@Test
	public void registerTest() throws InterruptedException {
		driver.get("file:///c%3A/Users/Admin/individual%20project/front%20end/register.html");
		WebElement createuserame = driver.findElement(By.xpath("/html/body/form/input[1]"));
		createuserame.sendKeys("andy");
		WebElement createpassword = driver.findElement(By.xpath("/html/body/form/input[2]"));
		createpassword.sendKeys("password");
		WebElement createfirstname = driver.findElement(By.xpath("/html/body/form/input[3]"));
		createfirstname.sendKeys("frenchy");
		WebElement createlastname = driver.findElement(By.xpath("/html/body/form/input[4]"));
		createlastname.sendKeys("lastname");
		WebElement createfavchar = driver.findElement(By.xpath("/html/body/form/input[5]"));
		createfavchar.sendKeys("57");
		WebElement createregister = driver.findElement(By.xpath("/html/body/form/button"));
		createregister.click();
		Thread.sleep(5000);	
		String a = driver.findElement(By.xpath("/html/body/div/h1")).getText();
		assertEquals("", "andy-Shulk", a);		
	}
	
	
	@After
	public void destroy() {
	driver.close();
		
	}


}
