# https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/python

def high(text):
    word_value = 0
    best_value = 0
    for word in text.split(' '):
        word_value = sum([(ord(letter) - 96) for letter in word if letter.isalpha()]) 
        if word_value > best_value:
            best_word = word 
            best_value = word_value
        word_value = 0
        
    return best_word 
    
def main():
    print(high('man i need a taxi up to ubud'))
    print(high('what time are we climbing up the volcano'))

main()