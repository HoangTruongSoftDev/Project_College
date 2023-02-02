import java.util.StringTokenizer;

public class StringTokenizer1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Array
			String[] truong = new String[4];
			truong[0] = "Truong";
			truong[1] = new String("Truong");
			truong[2] = "Truong";
			truong[3] = "Nan";
			System.out.println(truong[0] == truong[2]);
			System.out.println(truong[0] == truong[1]);
			System.out.println(truong[3] == truong[0]);
			
			String[] truong1 = truong; //Shallow copy
			System.out.println(truong1[0]);
			truong1[0] = "Quang";
			
			System.out.println(truong1[0]);
			Integer[] intArr = new Integer[5];
			intArr[0] = 2;
			intArr[1] = 1000;
			intArr[2] = 1000;
			intArr[3] = 2;
			intArr[4] = 3;
			System.out.println(intArr[0] == intArr[3]);
			System.out.println(intArr[1] == intArr[2]);
			System.out.println(intArr[0] == intArr[4]);
			
			//Deep copy is the two arrays have the same length, and same elements but points to different memory space
			int[] intArray = new int[4];
			Integer[] intArray1 = new Integer[4];
			intArray1[0] = 2;
			intArray[0] = 2;
			System.out.println(intArray[0] == intArray1[0]);
			
			System.out.println("========================================");
			StringTokenizer tokenizer = new StringTokenizer("techvidvan, article, on, StringTokenizer", ",", true );
			while(tokenizer.hasMoreElements())
				System.out.println(tokenizer.nextToken());
			
			//StringTokenizer WorkShop
			/* 1) Read the description of the StringTokenizer class: what is your understanding of a token?
			 * How many tokens are there in each of the following strings: 
			 * 
			 * a. “2022-2-22” => If the delimeter is "-" it will have 3 tokens
			 * b.“Mary Jane is working from home today.” => If the delimeter is " " it will have 7 tokens
			 * c.“Mary-Jane is working from home today.” => If the delimeter is " " it will have 6 tokens
			 * 											 => If the delimeter is "-" it will have 2 tokens
			 * d.“Mary-Jane decided to work from home on the 2022-2-22.” 
			 * 		=> If the delimeter is " " it will have 9 tokens
			 * 		=> If the delimeter is "-" it will have 4 tokens
			 * e.“Mary-Jane decided to work from home on the 2/22/2022.”
			 * 		=> If the delimeter is " " it will have 9 tokens
			 * 		=> If the delimeter is "-" it will have 2 tokens
			 * 		=> If the delimeter is "/" it will have 3 tokens
			 */
			
			
			 /* 2) Instantiate a StringTokenizer object for each of the strings above,using the StringTokenizer(String str)constructor.
			 * Then, call countTokens() on your objects and printout the answers. Are they in-line with the number of tokens you guessed? 
			 * If yes, what do you draw from this? 
			 * 
			 * 
			 * */  
			StringTokenizer tokenizerA = new StringTokenizer("2022-2-22");
			StringTokenizer tokenizerB = new StringTokenizer("Mary Jane is working from hometoday.");
			StringTokenizer tokenizerC = new StringTokenizer("Mary-Jane is working from home today.");
			StringTokenizer tokenizerD = new StringTokenizer("Mary-Jane decided to work from home on the 2022-2-22.");
			StringTokenizer tokenizerE = new StringTokenizer("Mary-Jane decided to work from home on the 2/22/2022.");
			
			System.out.println("Count Token A: " + tokenizerA.countTokens());
			System.out.println("Count Token B: " + tokenizerB.countTokens());
			System.out.println("Count Token C: " + tokenizerC.countTokens());
			System.out.println("Count Token D: " + tokenizerD.countTokens());
			System.out.println("Count Token E: " + tokenizerE.countTokens());
			
			/*3) Repeat question 2 using the constructors below and draw your conclusions re: the functioning of the constructor sand which of them are equivalent.*/
			
			StringTokenizer tokenizerF = new StringTokenizer("Mary-Jane decided to work from home on the 2022-2-22.","-");
			StringTokenizer tokenizerG = new StringTokenizer("Mary-Jane decided to work from home on the 2022-2-22.","-",false);
			StringTokenizer tokenizerH = new StringTokenizer("Mary-Jane decided to work from home on the 2022-2-22.","-",true);
			StringTokenizer tokenizerJ = new StringTokenizer("Mary-Jane decided to work from home on the 2/22/2022.","/");
			StringTokenizer tokenizerK = new StringTokenizer("Mary-Jane decided to work from home on the 2/22/2022.","/",false);
			StringTokenizer tokenizerL = new StringTokenizer("Mary-Jane decided to work from home on the 2/22/2022.","/",true);
			
			System.out.println("Count Token F: " + tokenizerF.countTokens());
			System.out.println("Count Token G: " + tokenizerG.countTokens());
			System.out.println("Count Token H: " + tokenizerH.countTokens());
			System.out.println("Count Token J: " + tokenizerJ.countTokens());
			System.out.println("Count Token K: " + tokenizerK.countTokens());
			System.out.println("Count Token L: " + tokenizerL.countTokens());
			
			System.out.println("Before:" + tokenizerE.countTokens()); 
			int i = 0;
			while(tokenizerE.hasMoreElements()) {
				
				System.out.println("During " + i +": "+tokenizerE.countTokens()); 
			}
			System.out.println("After:" + tokenizerE.countTokens()); 
			
	}

}
