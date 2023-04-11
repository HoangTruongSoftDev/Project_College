from tkinter import *
from tkinter import filedialog
from PIL import ImageTk, Image
from tkinter import messagebox

"""
    Tkinter view_form.py

    @author Hoang Truong
    @since 2023-03-19
    (c) Copyright 2023 Hoang Truong
"""


def create_view_form(login_form):
    """
        this function will create a view form for users to upload or delete the image

    :param login_form: the Tk object which is the login form. Data type is Tk of Tkinter
    """

# --------------------------------------------- Construct View Form ------------------------------------------------------------------------------------

    view_form = Toplevel(login_form)
    view_form.attributes("-topmost", True,"-fullscreen", True)
    view_form.title("Upload Image")
    view_form.configure(bg="white")
# --------------------------------------------------------------------------------------------------------------------------------------------------------



# ------------------------------------------------- Header ----------------------------------------------------------------------------------------

    # Frame Header of View Form---
    frame_header = Frame(view_form, bg="purple")
    frame_header.pack(fil=BOTH, ipady=50)

    # Title Sign Up---
    label_title = Label(frame_header, text="Uploaded Image", fg="white", font=("Times New Roman", 30, "bold"), bg="purple", justify=CENTER)
    label_title.place(relx =.5, rely = .5, anchor=CENTER)

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------




# ------------------------------------------------- Body ---------------------------------------------------------------------------------------------------------------------

    # Frame Body of View Form ---
    frame_body = Frame(view_form, width=1250, height=520, borderwidth=2, relief="solid", bg="white")
    frame_body.pack(pady=50)


# Image ---------------------------------------------------------

    # Label Image ---
    label_image = Label(frame_body)


# ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------




# ------------------------------------------------- Footer -------------------------------------------------------------------------------------------------------------------

    # Frame Footer of Sign Up Form ---
    frame_footer = Frame(view_form, bg="white")
    frame_footer.pack(pady=20)


    # Button Upload ------
    def upload():
        """
            this function allows users to upload the image
        """
        global imageTk
        file_image = filedialog.askopenfilename(initialdir="/", title="Select an image", filetypes=(("png files", "*.png"), ("jpg files", "*.jpg"), ("All files", "*.*")))
        image = Image.open(file_image)
        image = image.resize((1250, 500))
        imageTk = ImageTk.PhotoImage(image)
        label_image["image"] = imageTk
        label_image.pack()

    button_upload = Button(frame_footer, text="Upload Image", font=("Times New Roman", 15, "bold"), command=upload, fg="white", bg="purple")
    button_upload.grid(row=0, column=0, ipadx=10, pady=60, ipady=5)


    # Button Delete ------
    button_delete = Button(frame_footer, text="Delete Image", font=("Times New Roman", 15, "bold"), command=label_image.pack_forget, fg="white", bg="purple")
    button_delete.grid(row=0, column=1, ipadx=10, pady=60, ipady=5)


    # Button Log Out -----
    def log_out():
        """
            This function will allows users to log out, and open the login_form
        """

        response = messagebox.askquestion("Log out", "Do you want to log out?")
        if response=="yes":
            view_form.destroy()
            login_form.deiconify()

    button_log_out = Button(frame_footer, text="Log Out", font=("Times New Roman", 15, "bold"), command=log_out, fg="white", bg="#386ef5")
    button_log_out.grid(row=1, column=0, padx=30, ipadx=40, ipady=2)


    # Button Exit -----
    def exit():
        """
            This function will close the login_form and view_form
        """
        response = messagebox.askquestion("Exit Application", "Do you want exit the application?")
        if response == "yes":
            messagebox.showinfo("Exit Successfully", "Thank you for using our application")
            login_form.destroy()

    button_exit = Button(frame_footer, text="Exit", font=("Times New Roman", 15, "bold"), command=exit, fg="white", bg="red")
    button_exit.grid(row=1, column=1, padx=30, ipadx=60, ipady=2)


# ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------







