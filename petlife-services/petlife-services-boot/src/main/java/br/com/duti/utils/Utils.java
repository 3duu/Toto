package br.com.duti.utils;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public class Utils {
	
	private Utils() {}
	
	public static final String MD5 = "MD5";
	private static MessageDigest messageDigest;
	public static final String ANGULAR_HOST = "http://localhost:4200";
	public static final String ANGULAR_CREDENTIALS =  "petlife-toto";
	public static final String PHONEGAP_HOST = "http://home:3000";
	public static final String PHONEGAP_HOST2 = "http://192.168.1.2:3000";
	public static final String PHONEGAP_HOST3 = "http://192.168.1.3:3000";
	public static final String PHONEGAP_HOST4 = "http://home:3000";
	public static final String PHONEGAP_HOST5 = "http://172.20.148.39:3000";
	public static final String SMARTPHONE = "file://";
	public static final String HTTP = "http://";

	public static final String[] CORS = {Utils.ANGULAR_HOST, Utils.PHONEGAP_HOST, Utils.PHONEGAP_HOST2, Utils.PHONEGAP_HOST3, Utils.SMARTPHONE};
	
	public static final String getEncryptedString(final String string) {
		if(messageDigest == null) {
			try {
				messageDigest = MessageDigest.getInstance(MD5);
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			}
		}
		messageDigest.update(string.getBytes(),0,string.length());
		return new BigInteger(1,messageDigest.digest()).toString(16);
	}
	
	private static final String CONFIG_PATH = System.getProperty("user.home").concat(File.separator).concat("toppet");
	public static final String DB_CONFIG_FILE = CONFIG_PATH.concat(File.separator).concat("dbconfig.cfg");
	public static final String ADMIN_CONFIG_FILE = CONFIG_PATH.concat(File.separator).concat("admconfig.cfg");
	
	public static List<String> readConfigFile(final String file){
		final Path path = Paths.get(file);
		List<String> data = null;
		if(Files.exists(path)){
			try {
				data = Files.readAllLines(path);
			} catch (IOException e) {
				e.printStackTrace();
			}	
		}
		return data;
	}
	
}
