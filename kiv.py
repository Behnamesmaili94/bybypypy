import kivy
from kivy.app import App
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout

class Mygrid(GridLayout):
    def __init__(self,**kewargs):
        super(Mygrid,self).__init__(**kewargs)
        self.cols = 2
        self.l = Label(text="hi",color="1,1,0,0")
        self.add_widget(self.l)

class ru(App):

    def r(self):
        return Mygrid()


if __name__ == "__main__":
    App().run()