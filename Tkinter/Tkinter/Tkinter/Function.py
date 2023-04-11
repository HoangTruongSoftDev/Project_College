from User import *
from tkinter import *
from tkinter import messagebox
from view_form import *
import sign_up_form

"""
    Tkinter Function.py

    @author Hoang Truong
    @since 2023-03-19
    (c) Copyright 2023 Hoang Truong
"""

# Function for button Login in login_form to login
def login_user(username, password, login_form):
    """
        This function will allow users to login if their username and password are correct

    :param username: the username that users input to login. Data type is string
    :param password: the password that users input to login. Data type is string
    :param login_form: the Tk object which is the login form. Data type is Tk of Tkinter
    :return: void type
    """
    # object User
    user = User(username, password)
    if user.get_username == "" or user.get_password == "":
        messagebox.showwarning("Missing information", "You must fill out all information")
        return
    with open("account.txt", 'r') as rFile:
        exist_account = False
        account = rFile.readline()
        while account:
            account_username = account.strip().split(',')
            if user.get_username == account_username[0]:
                exist_account = True
                break
            account = rFile.readline()
        if exist_account:
            if account_username[0] == user.get_username and account_username[1] == user.get_password:
                response = messagebox.askquestion("Login Successfully", "Do you want to login?")
                if response == "yes":
                    messagebox.showinfo("Login Successfully", "Login")
                    login_form.withdraw()
                    # call function create_view_form in view_form.py
                    create_view_form(login_form)
                else:
                    messagebox.showinfo("Login Fail", "Not Login")
            else:
                messagebox.showinfo("Failure", "Your username or password is incorrect")
        else:
            messagebox.showinfo("Failure", "Your account does not exist")


# Function for button Sign Up in login_form to redirect to sign_up_form
def redirect_sign_up_form(login_form):
    """
        This function will close the login_form and open the sign_up_form for users to sign up

    :param login_form: the Tk object which is the login form. Data type is Tk of Tkinter
    """
    login_form.withdraw()
    # call function create_sign_up_form() from sign_up_form.py
    sign_up_form.create_sign_up_form(login_form)

# Function for button Sign Up in sign_up_form to create a new account
def sign_up_user(username, password, repassword):
    """
        This function allows users to sign up with their username and password, only when the username doesn't exist, and password must be the same with repassword

    :param username: the unexisting username that the user inputs to sign up for new account. Data type is Entry of Tkinter
    :param password: the password that the user inputs to sign up for new account. Data type is Entry of Tkinter
    :param repassword: the checking password that the user inputs to verify if they enter the correct password or not. Data type is Entry of Tkinter
    :return: void type
    """
    if username.get() == "" or password.get() == "" or repassword.get() == "":
        messagebox.showwarning("Missing information", "You must fill out all information")
        return
    with open("account.txt", 'r') as rFile:
        account = rFile.readline()
        exist_account = False
        while account:
            account_username = account.strip().split(',')[0]
            if account_username == username.get():
                exist_account = True
                break
            account = rFile.readline()
        if exist_account == True:
            messagebox.showwarning("Sign Up Unsuccessfully", "This account already exists!")
        else:
            if password.get() == repassword.get():
                messagebox.showinfo("Sign Up successfully", "The account has been created successfully!")
                with open("account.txt", 'a') as aFile:
                    aFile.write(f"\n{username.get().strip()},{password.get().strip()}")
                username.delete(0,END)
                password.delete(0, END)
                repassword.delete(0, END)

