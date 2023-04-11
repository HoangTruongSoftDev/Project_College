from User import *
from tkinter import *
from tkinter import messagebox
from Function import *
import Function

"""
    Tkinter sign_up_form.py

    @author Hoang Truong
    @since 2023-03-19
    (c) Copyright 2023 Hoang Truong
"""


# Create function to create Sign Up Form when clicking on button Sign Up of Login Form
def create_sign_up_form(login_form):
    """
        this function will create a sign up form for users to sign up new account

    :param login_form: the Tk object which is the login form. Data type is Tk of Tkinter
    """

# --------------------------------------------- Construct Sign Up Form ----------------------------------------------------
    sign_up_form = Toplevel(login_form)
    sign_up_form.title("Sign Up")
    sign_up_form.geometry("600x600")
    sign_up_form.attributes("-topmost", True)
    sign_up_form.configure(bg="white")
# ----------------------------------------------------------------------------------------------------------------------




# ------------------------------------------------- Header -------------------------------------------------------------

    # Frame Header of Sign Up Form---
    frame_header = Frame(sign_up_form, bg="red")
    frame_header.pack( fill=BOTH, ipady=50)

    # Title Sign Up---
    label_title = Label(frame_header, fg="white", font=("Times New Roman", 35, "bold"), text="SIGN UP", bg="red", justify=CENTER)
    label_title.place(relx=.5, rely=.5,anchor= CENTER)

# ----------------------------------------------------------------------------------------------------------------------




# ------------------------------------------------- Body ---------------------------------------------------------------

    # Frame Body of Sign Up Form ---
    frame_body = Frame(sign_up_form, bg="white")
    frame_body.pack(pady=50)



# Username -------------------------------------------------------------
    # Label Username -----
    label_username = Label(frame_body, font=("Times New Roman", 15), text="Username", bg="white")
    label_username.grid(row=0, column=0, padx=20, pady=20)

    # Entry Username -----
    entry_username = Entry(frame_body, font=("Times New Roman", 15))
    entry_username.bind("<Button-1>", lambda x: entry_username.delete(0, END))
    entry_username.grid(row=0, column=1, pady=20)



# Password ----------------------------------------------------------------
    # Label Password -----
    label_password = Label(frame_body, font=("Times New Roman", 15), text="Password", bg="white")
    label_password.grid(row=1, column=0, padx=20, pady=20)

    # Entry Password -----
    entry_password = Entry(frame_body, font=("Times New Roman", 15), show="*")
    entry_password.bind("<Button-1>", lambda x: entry_password.delete(0, END))
    entry_password.grid(row=1, column=1, pady=20)

    # Button Show Password ----
    def show_password():
        if button_show_password["text"] == "Show":
            button_show_password.config(text="Hide")
            entry_password.config(show="")
        else:
            button_show_password.config(text="Show")
            entry_password.config(show="*")

    button_show_password = Button(frame_body, font=("Times New Roman", 14), text="Show", command=show_password, bg="red", fg="white")
    button_show_password.grid(row=1, column=2, pady=20, padx=5)

# Reenter Password ----------------------------------------------------------------
    # Label Re-enter Password ----
    label_password = Label(frame_body, font=("Times New Roman", 15), text="Re-enter Password", bg="white")
    label_password.grid(row=2, column=0, padx=20, pady=20)

    # Entry Re-enter Password ----
    entry_repassword = Entry(frame_body, font=("Times New Roman", 15), show="*")
    entry_repassword.bind("<Button-1>", lambda x: entry_repassword.delete(0,END))
    entry_repassword.grid(row=2, column=1, pady=20)

    # Button Show RePassword ----
    def show_repassword():
        if button_show_repassword["text"] == "Show":
            button_show_repassword.config(text="Hide")
            entry_repassword.config(show="")
        else:
            button_show_repassword.config(text="Show")
            entry_repassword.config(show="*")

    button_show_repassword = Button(frame_body, font=("Times New Roman", 14), text="Show", command=show_repassword, bg="red", fg="white")
    button_show_repassword.grid(row=2, column=2, pady=20, padx=5)

# ----------------------------------------------------------------------------------------------------------------------



# ------------------------------------------------- Footer -------------------------------------------------------------

    # Frame Footer of Sign Up Form ---
    frame_footer = Frame(sign_up_form, bg="white")
    frame_footer.pack()

    # Button Sign Up ------
    def sign_up():
        """
            This function will call function sign_up_user in Function.py, and and it passes three arguments to that function which are entry_username, entry_password, entry_repassword
        """
        Function.sign_up_user(entry_username, entry_password, entry_repassword)

    button_sign_up = Button(frame_footer, background="grey", font=("Times New Roman", 18), text="Sign Up", command=sign_up, bg="red", fg="white")
    button_sign_up.pack(side=LEFT, padx=20, ipadx=10)


    # Button Back To Login ------
    def back_to_login():
        """
            This function will close the sign_up_form, and open the login_form
        """
        login_form.deiconify()
        sign_up_form.destroy()

    button_back_to_login = Button(frame_footer, background="grey", font=("Times New Roman", 18), text="Back to Login", command=back_to_login, bg="red", fg="white")
    button_back_to_login.pack(side=LEFT, padx=20)


# ----------------------------------------------------------------------------------------------------------------------