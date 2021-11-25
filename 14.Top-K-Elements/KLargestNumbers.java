import java.util.*;

/**
 * KLargestNumbers
 */
public class KLargestNumbers {

  public static List<Integer> findKLargestNumbers(int[] arr, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>((n1, n2) -> n1 - n2);

    for (int i = 0; i < arr.length; i++) {
      minHeap.add(arr[i]);
      if (minHeap.size() > k) {
        minHeap.poll();
      }
    }

    return new ArrayList<>(minHeap);
  }

  public static void main(String[] args) {
    int[] arr = { 12, 13, 1, 10, 34, 16, 7, 19 };
    int k = 3;
    List<Integer> result = findKLargestNumbers(arr, k);
    System.out.println(result);
  }
}