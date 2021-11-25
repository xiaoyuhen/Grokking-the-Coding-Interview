import java.util.*;

public class KSmallestNumbers {
  public static int findKSmallestNumbers(int[] arr, int k) {
    PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>((n1, n2) -> n2 - n1);
    for (int i = 0; i < k; i++) {
      maxHeap.add(arr[i]);
    }

    for (int i = k; i < arr.length; i++) {
      if (arr[i] < maxHeap.peek()) {
        maxHeap.poll();
        maxHeap.add(arr[i]);
      }
    }

    return maxHeap.peek();
  }

  public static void main(String[] args) {
    int result = KSmallestNumbers.findKSmallestNumbers(new int[] {1, 5, 12, 2, 11, 5}, 3);
    System.out.println("Kth smallest number is:" + result); // 5

    result = KSmallestNumbers.findKSmallestNumbers(new int[] {1, 5, 12, 2, 11, 5}, 4);
    System.out.println("Kth smallest number is:" + result); // 5

    result = KSmallestNumbers.findKSmallestNumbers(new int[] {5, 12, 11, -1, 12}, 3);
    System.out.println("Kth smallest number is:" + result);  // 11
  }
}
