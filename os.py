import os
import sys
import random
import PyQt5

#    print(os.getcwd()) # get our directory
#
#    os.chdir('D:')
#   print(os.getcwd())
#  print(os.listdir())
# os.mkdir('name') or os.makedirs('name/name2')
# os.rmdir('name') or os.removedirs('name/name2')
# rename('1.text','2.text')   rename directory


class File():
    Name = "file.file"
    a=open(Name,"w+")
    a.close()
    
    
   
class game():
    
    a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    munster = random.choice(a)
    run_game = True
    nothing = ''
    hero_money = 10
    health_hero = 100
    health_monster = 1000
    
    def main(self):

        self.start()
        while self.run_game:
            self.input_num()

            if self.input_number == self.nothing: 
                print('rong number')
                self.run_game = False
            else:
                self.run()
       
    
    def run(self):
        
        if self.input_number == self.munster:
            print(f'you win {self.input_hero}')
            self.run_game = False
            print('end game')
        else:
            print(f"number is {self.munster} and your number is {self.input_number}")
            self.munster = random.choice(self.a)
            

    
    def start(self):
        self.input_hero = input('whats your name for start game: ')
        print('game is begin')
        
    
    def input_num(self):
        self.input_number = input('whats your guess: ')
        self.int_input = int(self.input_number)
        self.str_input = self.input_number
    


if __name__ == "__main__":
    #File()
    pass