import pstats
from tkinter import N


def sonn(n):
    if n == 1:
        return n
    else:
        return n + sonn(n-1)

sum= sonn(50)
print(sum)

#exception 
def find_reciprocal(value):
    try:
        print("value;", value)
        r= 1/value 
        print("the reciprocal of", value, "is", r)
    except:
        print("you cannot find the reciprocal of", value)

find_reciprocal("hello")
find_reciprocal(2)

#raisiong exceptions 
a=int(input("enter a positive integer" ))
try:
    if a<=0:
        raise ValueError("Not a posiive integer!")
        print("You entered", a)
except ValueError as ve:
    print(ve)

#raising custom exceptions 
class CustomError (Exception):
    pass 

#raise CustomError("an error you created occured" )*****

class Error(Exception):
    pass
class ValueTooSmall(Error):
    pass
class ValueTooLarge(Error):
    pass

number= 10 

while True:
    try:
        i_num=int(input("Enter a number; "))
        if i_num<number:
            raise ValueTooSmall
        elif i_num>number:
            raise ValueTooLarge
        elif i_num==number:
            print("You guessed it correctly :) ")
        break 
    except ValueTooSmall:
        print("This value is too small, try again! ")
    except ValueTooLarge:
        print("This value is too large, try agin! ")
    
    
class Wrong (Exception):
    pass
class WrongName (Wrong):
    pass

name= "shyllon"
while True:
    try:
        i_name=input("Guess the name ")
        if i_name!=name:
            print(i_name, "is not correct")
            raise WrongName
        else:
            print(i_name, "is correct")
            break
    except WrongName:
        print("namee is incorrect try again")

def Sumnn (n):
    if n == 1:
        return n 
    else:
      return  n + Sumnn(n-1)

print(Sumnn(100))

def mplt(n):
    if n<=5:
        return n
    else:
        for i in range(1, 10):
             return (n*i)

print(mplt(8))
