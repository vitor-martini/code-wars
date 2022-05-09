# https://www.codewars.com/kata/5264d2b162488dc400000001/train/python

def spin_words(sentence):
    words = sentence.split(" ")
    words = [word if len(word) < 5 else word[::-1] for word in words]
    return ' '.join(words)
    
def main():
    print(spin_words('This is a test'))
    print(spin_words('Hey fellow warriors'))
    print(spin_words('This is another test'))

main()