import webbrowser
from tkinter import Tk

# get stuff from clipboard
r = Tk()
r.withdraw()
result = r.selection_get(selection = "CLIPBOARD")
for url in result.split('\n'):
    webbrowser.open(url)
