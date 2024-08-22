
public class test {

    public static void main(String[] arga) {
        
        for(int i = 1; i <= 12; i++) {
            // System.out.print(i + " ");
            for(int j = 1; j <= 12; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }
    }
}