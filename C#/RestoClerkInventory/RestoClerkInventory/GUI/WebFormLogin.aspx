<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebFormLogin.aspx.cs" Inherits="RestoClerkInventory.GUI.WebFormLogin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="formLogin" runat="server">
        <div>
            <asp:Label ID="LabelTitle" runat="server" Text="Resto Inventory Clerk"></asp:Label><table>
                <tr>
                    <td>
                        <asp:Label ID="LabelUserId" runat="server" Text="User ID"></asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="TextBoxUserId" runat="server" placeholder="4-digit number"></asp:TextBox>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="LabelPassword" runat="server" Text="Password"></asp:Label>

                    </td>
                    <td>
                        <asp:TextBox ID="TextBoxPassword" runat="server" placeholder="enter password"></asp:TextBox>
                    </td>
                    <td>
                        <asp:Button ID="ButtonShowPassword" runat="server" Text="Show Password" />
                    </td>
                </tr>
                <tr>
                    <td>Position</td>
                    <td>
                        <asp:DropDownList ID="DropDownListPosition" runat="server" OnSelectedIndexChanged="DropDownListPosition_SelectedIndexChanged" AutoPostBack="True"></asp:DropDownList></td>
                </tr>
            </table>
            <asp:Button ID="ButtonLogin" runat="server" Text="Login" OnClick="ButtonLogin_Click" />
        </div>
    </form>
</body>
</html>
