using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using RestoClerkInventory.BLL;
using System.Windows.Forms;
using RestoClerkInventory.ENUM;
using RestoClerkInventory.SERVICE;
using RestoClerkInventory.Validation;
namespace RestoClerkInventory.GUI
{
    public partial class WebFormAdmin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                DropDownListPosition.Items.Add(Position.Manager.ToString());
                DropDownListPosition.Items.Add(Position.Staff.ToString());
                DropDownListSearch.Items.Add("Employee ID");
                DropDownListSearch.Items.Add("Position");
                DropDownListSearch.Items.Add("First Name");
                DropDownListSearch.Items.Add("Last Name");
                DropDownListSearch.Items.Add("Email");
                DropDownListSearchPosition.Items.Add(Position.Manager.ToString());
                DropDownListSearchPosition.Items.Add(Position.Staff.ToString());

            }

        }

        protected void ButtonSave_Click(object sender, EventArgs e)
        {
            if (TextBoxEmployeeId.Text.Trim() == string.Empty)
            {
                MessageBox.Show("Missing Employee ID", "Warning!!!", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                TextBoxEmployeeId.Focus();
                Service.ClearAllTextBoxes(this);
                return;
            }
            if (!Validator.IsValidUserId(TextBoxEmployeeId.Text.Trim(), DropDownListPosition.SelectedValue.Trim()))
            {
                MessageBox.Show("Invalid User ID", "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxEmployeeId.Focus();
                Service.ClearAllTextBoxes(this);
                return;
            }
            if (!Validator.IsValidName(TextBoxFirstName.Text.Trim()))
            {
                string messageFirstName = (TextBoxFirstName.Text.Trim() == string.Empty) ? "Missing First Name!!!" : "Invalid First Name";
                MessageBox.Show(messageFirstName, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxFirstName.Text = string.Empty;
                TextBoxFirstName.Focus();
                return;
            }
            if (!Validator.IsValidName(TextBoxLastName.Text.Trim()))
            {
                string messageLastName = (TextBoxLastName.Text.Trim() == string.Empty) ? "Missing Last Name!!!" : "Invalid Last Name";
                MessageBox.Show(messageLastName, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxLastName.Text = string.Empty;
                TextBoxLastName.Focus();
                return;
            }
            if (!Validator.IsValidEmail(TextBoxEmail.Text.Trim()))
            {
                string messageEmail = (TextBoxEmail.Text.Trim() == string.Empty) ? "Missing Email!!!" : "Invalid Email";
                MessageBox.Show(messageEmail, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxEmail.Text = string.Empty;
                TextBoxEmail.Focus();
                return;
            }

            if (!Validator.IsValidPassword(TextBoxPassword.Text.Trim()))
            {
                string messagePassword = (TextBoxPassword.Text.Trim() == string.Empty) ? "Missing Password!!!" : "Invalid Password";
                MessageBox.Show(messagePassword, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxPassword.Text = string.Empty;
                TextBoxPassword.Focus();
                return;
            }



            User user = new User();
            List<User> listAllUsers = user.GetAllUsers();
            user = user.GetUserById(Convert.ToInt32(TextBoxEmployeeId.Text.Trim()));

            if (listAllUsers.Contains(user))
            {
                MessageBox.Show("This user already exist!", "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            user = new User();
            user.UserId = Convert.ToInt32(TextBoxEmployeeId.Text.Trim());
            user.Password = TextBoxPassword.Text.Trim();

            Position position = new Position();
            if (Enum.TryParse(DropDownListPosition.SelectedValue, out position))
                user.Position = position;

            Employee employee = new Employee();
            employee.User = user;
            employee.FirstName = TextBoxFirstName.Text.Trim();
            employee.LastName = TextBoxLastName.Text.Trim();
            employee.Email = TextBoxEmail.Text.Trim();


            user.InsertUser(user);
            employee.InsertEmployee(employee);
            MessageBox.Show("Save Employee Successfully", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);




        }

        protected void DropDownListSearch_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (DropDownListSearch.SelectedValue == "Position")
            {
                DropDownListSearchPosition.Visible = true;
                TextBoxSearch.Visible = false;
                LabelMessage.Text = "Choose Employee's Position";
            }
            else
            {
                DropDownListSearchPosition.Visible = false;
                TextBoxSearch.Visible = true;
                switch (DropDownListSearch.SelectedValue)
                {
                    case "Employee ID":
                        LabelMessage.Text = "Enter the Employee ID";
                        TextBoxSearch.Attributes["placeholder"] = "6-digit number";
                        break;
                    case "First Name":
                        LabelMessage.Text = "Enter the Employee First Name";
                        TextBoxSearch.Attributes["placeholder"] = "ex. Truong";
                        break;
                    case "Last Name":
                        LabelMessage.Text = "Enter the Employee Last Name";
                        TextBoxSearch.Attributes["placeholder"] = "ex. Pham";
                        break;
                    case "Email":
                        LabelMessage.Text = "Enter the Employee Email";
                        TextBoxSearch.Attributes["placeholder"] = "ex. abc@abc.abc";
                        break;
                    default:
                        MessageBox.Show("Please choose option before searching", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        break;
                }
            }
        }

        protected void ButtonClear_Click(object sender, EventArgs e)
        {
            Service.ClearAllTextBoxes(this);
            GridViewEmployee.DataSource = null;
            GridViewEmployee.DataBind();
            TextBoxEmployeeId.ReadOnly = false;
            ButtonDelete.Enabled = false;
            ButtonUpdate.Enabled = false;
        }

        protected void ButtonUpdate_Click(object sender, EventArgs e)
        {
            if (TextBoxEmployeeId.Text.Trim() == string.Empty)
            {
                MessageBox.Show("Missing Employee ID", "Warning!!!", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                TextBoxEmployeeId.Focus();
                Service.ClearAllTextBoxes(this);
                return;
            }
            if (!Validator.IsValidUserId(TextBoxEmployeeId.Text.Trim(), DropDownListPosition.SelectedValue.Trim()))
            {
                MessageBox.Show("Invalid User ID", "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxEmployeeId.Focus();
                Service.ClearAllTextBoxes(this);
                return;
            }

            if (!Validator.IsValidName(TextBoxFirstName.Text.Trim()))
            {
                string messageFirstName = (TextBoxFirstName.Text.Trim() == string.Empty) ? "Missing First Name!!!" : "Invalid First Name";
                MessageBox.Show(messageFirstName, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxFirstName.Text = string.Empty;
                TextBoxFirstName.Focus();
                return;
            }
            if (!Validator.IsValidName(TextBoxLastName.Text.Trim()))
            {
                string messageLastName = (TextBoxLastName.Text.Trim() == string.Empty) ? "Missing Last Name!!!" : "Invalid Last Name";
                MessageBox.Show(messageLastName, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxLastName.Text = string.Empty;
                TextBoxLastName.Focus();
                return;
            }
            if (!Validator.IsValidEmail(TextBoxEmail.Text.Trim()))
            {
                string messageEmail = (TextBoxEmail.Text.Trim() == string.Empty) ? "Missing Email!!!" : "Invalid Email";
                MessageBox.Show(messageEmail, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxEmail.Text = string.Empty;
                TextBoxEmail.Focus();
                return;
            }

            if (!Validator.IsValidPassword(TextBoxPassword.Text.Trim()))
            {
                string messagePassword = (TextBoxPassword.Text.Trim() == string.Empty) ? "Missing Password!!!" : "Invalid Password";
                MessageBox.Show(messagePassword, "Error!!!", MessageBoxButtons.OK, MessageBoxIcon.Error);
                TextBoxPassword.Text = string.Empty;
                TextBoxPassword.Focus();
                return;
            }

            User user = new User();
            user.UserId = Convert.ToInt32(TextBoxEmployeeId.Text.Trim());
            user.Password = TextBoxPassword.Text.Trim();

            Position position = new Position();
            if (Enum.TryParse(DropDownListPosition.SelectedValue, out position))
                user.Position = position;

            Employee employee = new Employee();
            employee.User = user;
            employee.FirstName = TextBoxFirstName.Text.Trim();
            employee.LastName = TextBoxLastName.Text.Trim();
            employee.Email = TextBoxEmail.Text.Trim();


            user.UpdateUser(user);
            employee.UpdateEmployee(employee);
            MessageBox.Show(employee.ToString());
            MessageBox.Show("Update Employee Successfully", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
            Service.ClearAllTextBoxes(this);
            GridViewEmployee.DataSource = null;
            GridViewEmployee.DataBind();
            ButtonUpdate.Enabled = false;
            ButtonDelete.Enabled = false;
        }

        protected void ButtonListAll_Click(object sender, EventArgs e)
        {
            User user = new User();
            Employee employee = new Employee();
            GridViewEmployee.DataSource = employee.GetAllEmployeesJoinForeignTable().Select(emp => new
            {
                emp.User.UserId,
                emp.FirstName,
                emp.LastName,
                emp.Email,
                emp.User.Position,
                emp.User.Password
            }).ToList();
            GridViewEmployee.DataBind();
        }

        protected void ButtonDelete_Click(object sender, EventArgs e)
        {
            User user = new User();
            user = user.GetUserById(Convert.ToInt32(TextBoxEmployeeId.Text));
            Employee employee = new Employee();
            employee = employee.GetEmployeeById(Convert.ToInt32(TextBoxEmployeeId.Text));
            if (user.GetAllUsers().Contains(user))
            {
                employee.DeleteEmployee(employee);
                user.DeleteUser(user);
                MessageBox.Show("Delete Employee Successfully", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                Service.ClearAllTextBoxes(this);
                GridViewEmployee.DataSource = null;
                GridViewEmployee.DataBind();
                ButtonUpdate.Enabled = false;
                ButtonDelete.Enabled = false;
            }
            else
                MessageBox.Show("Fail Deleting Employee", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);

        }

        protected void GridViewEmployee_SelectedIndexChanged(object sender, EventArgs e)
        {
            TextBoxEmployeeId.Text = GridViewEmployee.SelectedRow.Cells[0].Text.ToString();
            TextBoxFirstName.Text = GridViewEmployee.SelectedRow.Cells[1].Text.ToString();
            TextBoxLastName.Text = GridViewEmployee.SelectedRow.Cells[2].Text.ToString();
            TextBoxEmail.Text = GridViewEmployee.SelectedRow.Cells[3].Text.ToString();
            DropDownListPosition.SelectedValue = (GridViewEmployee.SelectedRow.Cells[4].Text.ToString() == Position.Manager.ToString()) ? Position.Manager.ToString() : Position.Staff.ToString();
            TextBoxPassword.Text = GridViewEmployee.SelectedRow.Cells[5].Text.ToString();
            TextBoxEmployeeId.ReadOnly = true;
            ButtonDelete.Enabled = true;
            ButtonUpdate.Enabled = true;
        }

        protected void ImageButtonSearch_Click(object sender, ImageClickEventArgs e)
        {
            Employee employee;
            List<Employee> listEmployees;
            switch (DropDownListSearch.SelectedValue)
            {
                case "Employee ID":
                    employee = new Employee();
                    if (!Validator.IsValidUserId(TextBoxSearch.Text, DropDownListPosition.SelectedValue))
                    {
                        MessageBox.Show("Employee ID must be 6-digit", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }

                    employee = employee.GetEmployeeById(Convert.ToInt32(TextBoxSearch.Text));
                    if (employee == null)
                    {
                        MessageBox.Show("There is no employee has been found", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    else
                        MessageBox.Show("The Employee has been found", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    GridViewEmployee.DataSource = new List<Employee>() { employee }.Select(emp => new
                    {
                        emp.User.UserId,
                        emp.FirstName,
                        emp.LastName,
                        emp.Email,
                        emp.User.Position,
                        emp.User.Password
                    }).ToList();
                    GridViewEmployee.DataBind();
                    break;
                case "Position":
                    employee = new Employee();
                    string userPosition = (DropDownListSearchPosition.SelectedValue == Position.Staff.ToString()) ? Position.Staff.ToString() : Position.Manager.ToString();
                    listEmployees = employee.GetEmployeesByPosition(userPosition);
                    if (listEmployees == null)
                    {
                        MessageBox.Show("There is no employee has been found", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    else
                    {
                        MessageBox.Show("The Employee has been found", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        GridViewEmployee.DataSource = listEmployees.Select(emp => new
                        {
                            emp.User.UserId,
                            emp.FirstName,
                            emp.LastName,
                            emp.Email,
                            emp.User.Position,
                            emp.User.Password
                        });
                        GridViewEmployee.DataBind();
                    }
                    break;
                case "First Name":
                    employee = new Employee();
                    if (TextBoxSearch.Text.Trim() == string.Empty)
                    {
                        MessageBox.Show("Enter the Employee's First Name to search", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    if (!Validator.IsValidName(TextBoxSearch.Text.Trim()))
                    {
                        MessageBox.Show("Invalid Name", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    listEmployees = employee.GetEmployeesByFirstName(TextBoxSearch.Text.Trim());
                    if (listEmployees == null)
                    {
                        MessageBox.Show("There is no employee has been found", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    else
                    {
                        MessageBox.Show("The Employee has been found", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        GridViewEmployee.DataSource = listEmployees.Select(emp => new
                        {
                            emp.User.UserId,
                            emp.FirstName,
                            emp.LastName,
                            emp.Email,
                            emp.User.Position,
                            emp.User.Password
                        });
                        GridViewEmployee.DataBind();
                    }
                    break;
                case "Last Name":
                    employee = new Employee();
                    if (TextBoxSearch.Text.Trim() == string.Empty)
                    {
                        MessageBox.Show("Enter the Employee's Last Name to search", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    if (!Validator.IsValidName(TextBoxSearch.Text.Trim()))
                    {
                        MessageBox.Show("Invalid Name", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    listEmployees = employee.GetEmployeesByLastName(TextBoxSearch.Text.Trim());
                    if (listEmployees == null)
                    {
                        MessageBox.Show("There is no employee has been found", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    else
                    {
                        MessageBox.Show("The Employee has been found", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        GridViewEmployee.DataSource = listEmployees.Select(emp => new
                        {
                            emp.User.UserId,
                            emp.FirstName,
                            emp.LastName,
                            emp.Email,
                            emp.User.Position,
                            emp.User.Password
                        });
                        GridViewEmployee.DataBind();
                    }
                    break;
                case "Email":
                    employee = new Employee();
                    if (TextBoxSearch.Text.Trim() == string.Empty)
                    {
                        MessageBox.Show("Enter the Employee's Email to search", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    if (!Validator.IsValidEmail(TextBoxSearch.Text.Trim()))
                    {
                        MessageBox.Show("Invalid Name", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    listEmployees = employee.GetEmployeesByEmail(TextBoxSearch.Text.Trim());
                    if (listEmployees == null)
                    {
                        MessageBox.Show("There is no employee has been found", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }
                    else
                    {
                        MessageBox.Show("The Employee has been found", "Information", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        GridViewEmployee.DataSource = listEmployees.Select(emp => new
                        {
                            emp.User.UserId,
                            emp.FirstName,
                            emp.LastName,
                            emp.Email,
                            emp.User.Position,
                            emp.User.Password
                        });
                        GridViewEmployee.DataBind();
                    }
                    break;
                default:
                    MessageBox.Show("There is something wrong", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);

                    break;

            }
        }

        protected void ImageButtonPassword_Click(object sender, ImageClickEventArgs e)
        {
            string imagePassword = (TextBoxPassword.Attributes["type"] == "password") ? "../img/hide-password.png" : "../img/show-password.png";
            string typePassword = (TextBoxPassword.Attributes["type"] == "password") ? "text" : "password";
            ImageButtonPassword.ImageUrl = imagePassword;
            TextBoxPassword.Attributes["type"] = typePassword;
        }
    }
}