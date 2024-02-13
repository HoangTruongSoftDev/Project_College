from User import *
from tkinter import *
import Function
from tkinter import messagebox
"""
    Tkinter login_form.py
    
    @author Hoang Truong
    @since 2023-03-19
    (c) Copyright 2023 Hoang Truong
"""


#--------------------------------------------- Construct Login Form ----------------------------------------------------

login_form = Tk()
login_form.title("Login")
login_form.geometry("550x550")
login_form.attributes("-topmost", True)
login_form.configure(bg="white")
# ----------------------------------------------------------------------------------------------------------------------



#--------------------------------------------- Header ------------------------------------------------------------------

# Frame Header of Login Form---
frame_header = Frame(login_form, bg="#386ef5")
frame_header.pack(fill=BOTH, ipady=50)

# Title Login---
label_title = Label(frame_header, text="Sign In", font=("Times New Roman", 40, "bold"), fg="white", bg="#386ef5", justify=CENTER)
label_title.place(relx=.5, rely=.5, anchor=CENTER)

# ----------------------------------------------------------------------------------------------------------------------




#---------------------------------------------  Body -------------------------------------------------------------------

# Frame Body of Login Form ---
frame_body = Frame(login_form, bg="white")
frame_body.pack(pady=70)

# Username ------------------------------------------------------------
# Label Username ---
label_username = Label(frame_body, text="Username: ", font=("Times New Roman", 17, "bold"), bg="white", fg="#386ef5")
label_username.grid(row=0, column=0, pady=10)

# Entry Username ---
entry_username = Entry(frame_body, font=("Times New Roman", 17), fg="#386ef5")
entry_username.insert(0, "enter your username")
entry_username.bind("<Button-1>", lambda x: entry_username.delete(0, END))
entry_username.grid(row=0, column=1, pady=10, ipady=5)


# Password --------------------------------------------------------------
# Label Password ---
label_password = Label(frame_body, text="Password: ", font=("Times New Roman", 17, "bold"),  bg="white", fg="#386ef5")
label_password.grid(row=1, column=0, pady=40)

# Entry Password ---
entry_password = Entry(frame_body, font=("Times New Roman", 17), show="*",fg="#386ef5")
entry_password.bind("<Button-1>", lambda x: entry_password.delete(0, END))
entry_password.grid(row=1, column=1, pady=20, ipady=5)

# Button Show Passowrd ---
def show_password():
    """
        This function will show or hide the password that users input
    """

    if button_show_password["text"] == "Show":
        entry_password.config(show="")
        button_show_password.config(text="Hide")
    else:
        entry_password.config(show="*")
        button_show_password.config(text="Show")

button_show_password = Button(frame_body, font=("Times New Roman", 14), text="Show", command=show_password, bg="#39a1f7", fg="white")
button_show_password.grid(row=1, column=2, pady=20, padx=5 )

# ----------------------------------------------------------------------------------------------------------------------



#---------------------------------------------  Footer -----------------------------------------------------------------

#Frame Footer of Login Form ---
frame_footer = Frame(login_form, bg="white")
frame_footer.pack()

# Button Login ------
def login():
    """
        This function will call function login_user() from Function.py, and it passes three arguments to that function which are entry_username.get(), entry_password.get(), login_form
    """
    Function.login_user(entry_username.get(), entry_password.get(), login_form)
    entry_username.delete(0,END)
    entry_password.delete(0,END)
button_login = Button(frame_footer, text="Login", font=("Times New Roman", 14, "bold"), command=login, bg="#384ef5", fg="white")
button_login.pack(ipadx=15, side=LEFT, padx=30)


# Button Sign Up -----
def sign_up():
    """
        This function will call the function redirect_sign_up_form() from Function.py, and it passes an arguments to that function which is login_form
    """

    Function.redirect_sign_up_form(login_form)
    entry_username.delete(0, END)
    entry_password.delete(0, END)
button_sign_up= Button(frame_footer, text="Sign Up", font=("Times New Roman", 14, "bold"), command=sign_up, bg="#4492f2", fg="white")
button_sign_up.pack(ipadx=15, side=LEFT)

# Button Exit -----
def exit():
    """
        This function will close the login_form
    """
    response = messagebox.askquestion("Exit", "Do you want to exit the appplication?")
    if response == "yes":
        messagebox.showinfo("Exit Successfully","Thank you for using our application")
        login_form.destroy()

button_exit= Button(frame_footer, text="Exit", font=("Times New Roman", 14, "bold"), command=exit, bg="#62bef0", fg="white")
button_exit.pack(ipadx=15, side=LEFT, padx=30)

#-----------------------------------------------------------------------------------------------------------------------

login_form.mainloop()


