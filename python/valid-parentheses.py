# https://www.codewars.com/kata/52774a314c2333f0a7000688/train/python

def valid_parentheses(string):
    open = 0
    for letter in string:
        if letter == '(':
            open+=1
        if letter == ')':
            if open == 0:
                return False 
            else:
                open -= 1    

    return True if open == 0 else False  
    
def main():
    print(valid_parentheses('hi(hi)()'))
    print(valid_parentheses(')(()))'))

main()