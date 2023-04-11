

"""
    Tkinter User.py

    @author Hoang Truong
    @since 2023-03-19
    (c) Copyright 2023 Hoang Truong
"""

class User:
    def __init__(self, username, password):
        self.__username = username
        self.__password = password

    def __str__(self):
        return f"Account information:\n+ Username: {self.__username}\n+ Password: {self.__password}"

    @property
    def get_username(self):
        return self.__username

    @get_username.setter
    def set_username(self, username="Unknown"):
        self.__username = username

    @property
    def get_password(self):
        return self.__password

    @get_password.setter
    def set_password(self, password=""):
        self.__password = password