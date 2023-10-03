<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebFormAdmin.aspx.cs" Inherits="RestoClerkInventory.GUI.WebFormAdmin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="formAdmin" runat="server">
        <div>
            <asp:Label ID="LabelTitle" runat="server" Text="Administrator"></asp:Label>
            <table cellpadding="2">
                <tr>
                    <td>
                        <asp:Label ID="LabelEmployeeId" runat="server" Text="Employee ID"></asp:Label></td>
                    <td>
                        <asp:TextBox placeholder="6-digit number" ID="TextBoxEmployeeId" runat="server"></asp:TextBox></td>
                    <td>
                        <asp:Button ID="ButtonSave" runat="server" Text="Save" OnClick="ButtonSave_Click" /></td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LabelPosition" runat="server" Text="Position"></asp:Label></td>
                    <td>
                        <asp:DropDownList ID="DropDownListPosition" runat="server"></asp:DropDownList></td>
                    <td>
                        <asp:Button ID="ButtonClear" runat="server" Text="Clear" OnClick="ButtonClear_Click" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LabelFirstName" runat="server" Text="First Name"></asp:Label></td>
                    <td>
                        <asp:TextBox ID="TextBoxFirstName" runat="server" placeholder="ex. Truong"></asp:TextBox></td>
                    <td>
                        <asp:Button ID="ButtonUpdate" runat="server" Text="Update" OnClick="ButtonUpdate_Click" Enabled="False" /></td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LabelLastName" runat="server" Text="Last Name" ></asp:Label></td>
                    <td>
                        <asp:TextBox ID="TextBoxLastName" runat="server" placeholder="ex. Pham"></asp:TextBox></td>
                    <td>
                        <asp:Button ID="ButtonDelete" runat="server" Text="Delete" OnClick="ButtonDelete_Click" Enabled="False" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LabelEmail" runat="server" Text="Email"></asp:Label></td>
                    <td>
                        <asp:TextBox ID="TextBoxEmail" runat="server" placeholder="ex. abc@abc.abc"></asp:TextBox></td>
                    <td>
                        <asp:Button ID="ButtonListAll" runat="server" Text="List All" OnClick="ButtonListAll_Click" />
                    </td>
                </tr>

                <tr>
                    <td>
                        <asp:Label ID="LabelPassword" runat="server" Text="Password"></asp:Label></td>
                    <td>
                        <asp:TextBox ID="TextBoxPassword" type="password" placeholder="ex. 123abc" runat="server"></asp:TextBox></td>
                    <td>
                        <asp:ImageButton ID="ImageButtonPassword" Style="width: 18px; height: 18px" ImageUrl="../img/show-password.png" runat="server" OnClick="ImageButtonPassword_Click" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <br />
                        <br />
                        <asp:Label ID="LabelMessage" runat="server" Text="Enter the Employee ID"></asp:Label></td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LabelSearch" runat="server" Text="Search By"></asp:Label></td>
                    <td>
                        <asp:DropDownList ID="DropDownListSearch" runat="server" OnSelectedIndexChanged="DropDownListSearch_SelectedIndexChanged" AutoPostBack="True"></asp:DropDownList>
                    </td>
                    <td>
                        <asp:DropDownList ID="DropDownListSearchPosition" runat="server" Visible="False" ></asp:DropDownList>
                        <asp:TextBox ID="TextBoxSearch" runat="server" placeholder="6-digit number"></asp:TextBox>

                    </td>
                    <td>
                        <asp:ImageButton ID="ImageButtonSearch" Style="width: 18px; height: 18px" runat="server" ImageUrl="../img/magnifying-glass.jfif" OnClick="ImageButtonSearch_Click" />
                    </td>
                </tr>
            </table>
            <br />
            <br />
            <asp:Label ID="LabelResult" runat="server" Text="Result"></asp:Label>
            
            <asp:GridView Style="height: 183px" ID="GridViewEmployee" runat="server" AutoGenerateColumns="False" OnSelectedIndexChanged="GridViewEmployee_SelectedIndexChanged">
                    <Columns>
                        <asp:BoundField DataField="UserId" HeaderText="Employee ID" ReadOnly="True"></asp:BoundField>
                        <asp:BoundField DataField="FirstName" HeaderText="First Name" ReadOnly="True" SortExpression="FirstName"></asp:BoundField>
                        <asp:BoundField DataField="LastName" HeaderText="Last Name" ReadOnly="True" SortExpression="LastName"></asp:BoundField>
                        <asp:BoundField DataField="Email" HeaderText="Email" ReadOnly="True" SortExpression="Email"></asp:BoundField>
                        <asp:BoundField DataField="Position" HeaderText="Position" ReadOnly="True"></asp:BoundField>
                        <asp:BoundField DataField="Password" HeaderText="Password" ReadOnly="True"></asp:BoundField>
                        <asp:ButtonField CommandName="Select" Text="Select" ButtonType="Button"></asp:ButtonField>
                    </Columns>
                </asp:GridView>           
            
            
        </div>
    </form>
</body>
</html>
