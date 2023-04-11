
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;
import java.util.TreeMap;
public class MapDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Construct Map with empty constructor: Map <Key, Value> object_name = new HashMap<>();
		Map<Integer, String> hashMap = new HashMap<>();
		hashMap.put(1, "Truong");
		hashMap.put(2, "Thu");
		hashMap.put(5, "Quoc Anh");
		hashMap.put(9, "Bao");
		hashMap.put(2, "Na");
		for (int key : hashMap.keySet()) {
			System.out.println("Key: " + key + ". Value: " + hashMap.get(key));
		}
		
		System.out.println("Iterator: ");
		Iterator<Integer> iterator = hashMap.keySet().iterator();
		while (iterator.hasNext()) {
			Integer key = iterator.next();
			System.out.println("Key :" + key + ". Value: " + hashMap.get(key));
		}
		for (String value : hashMap.values()) {
			System.out.println("Value: " + value);
		}
		
		//TreeMap
		Map<String, Integer> treeMap = new TreeMap<>();
		treeMap.put("One", 1);
		treeMap.put("Five", 5);
		treeMap.put("Two", 2);
		treeMap.put("Six", 6);
		treeMap.put("Five", 0);
		for (String key : treeMap.keySet()) {
			System.out.println("Key: " + key + ". Value: " + treeMap.get(key));
		}
	}

}
