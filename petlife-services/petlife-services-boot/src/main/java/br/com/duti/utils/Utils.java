package br.com.duti.utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Utils {
	
	private Utils() {}
	
	public static final String MD5 = "MD5";
	private static MessageDigest messageDigest;
	public static final String ANGULAR_HOST =  "http://localhost:4200";
	public static final String ANGULAR_CREDENTIALS =  "petlife-toto";
	
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
}
