# https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(text):
    solution = [str(ord(letter) - 96) for letter in text.lower() if letter.isalpha()]  
    return ' '.join(solution)
    
def main():
    print(alphabet_position("The sunset sets at twelve o' clock."))

main()