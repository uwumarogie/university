
import heapq
from typing import Dict, Optional


def get_probability(string: str) -> Dict[str, float]:
    LENGTH = len(string)
    my_set = set(string)
    result = {}
    if LENGTH == 0:
        return result
    for char in my_set:
        frequency = string.count(char)
        result[char] = frequency / LENGTH
    return result


class Node:
    def __init__(
        self,
        prob: float,
        char: Optional[str] = None,
        left: Optional["Node"] = None,
        right: Optional["Node"] = None,
    ):
        self.prob = prob
        self.char = char
        self.left = left
        self.right = right

    # Define comparison methods for heapq
    def __lt__(self, other: "Node"):
        return self.prob < other.prob


def huffman_code(probabilities: Dict[str, float]) -> Dict[str | None, str]:
    # Build initial heap
    heap = [Node(prob=prob, char=char) for char, prob in probabilities.items()]
    heapq.heapify(heap)

    # Edge case: only one character
    if len(heap) == 1:
        only_node = heap[0]
        return {only_node.char: "0"}

    # Build the Huffman tree
    while len(heap) > 1:
        # Pop two nodes with the smallest probabilities
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)

        # Create a new internal node with these two nodes as children
        merged = Node(prob=left.prob + right.prob, left=left, right=right)
        heapq.heappush(heap, merged)

    # The heap now contains only one node, the root of the Huffman tree
    root = heap[0]

    # Traverse the tree to generate Huffman codes
    codes = {}

    def generate_codes(node: Node, current_code: str):
        if node.char is not None:
            # It's a leaf node, assign the current code
            codes[node.char] = current_code
            return
        if node.left:
            generate_codes(node.left, current_code + "1")
        if node.right:
            generate_codes(node.right, current_code + "0")

    generate_codes(root, "")

    return codes


if __name__ == "__main__":
    string = "aabcbdacababbbbcbddbbbaababdbdbb"
    print("Input string:", string)
    prob_dict = get_probability(string)
    sorted_dict = {key: value for key, value in sorted(prob_dict.items(), key=lambda items: items[1])}
    print("Character probabilities:", prob_dict)
    codes = huffman_code(sorted_dict)
    print("Huffman Codes:")
    for char, code in codes.items():
        print(f"'{char}': {code}")
