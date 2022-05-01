# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

from os import dup
# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/python

def duplicate_count(text):
    return len([letter for letter in set(text.lower()) if text.lower().count(letter) > 1])
    
def main():
    print(duplicate_count("abcde"))
    print(duplicate_count("Indivisibilities"))

main()
    