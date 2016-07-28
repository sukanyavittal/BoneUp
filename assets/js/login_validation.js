
			function validateForm()
			{
				var email=document.forms["login_form"]["email"].value;
				var pswd=document.forms["login_form"]["password"].value;
				var at_ind=email.indexOf("@")
				var dot_ind=email.indexOf(".");
				if(at_ind<1 || dot_ind<at_ind+2 || dot_ind+2>email.length)
					{
					alert("Please enter a valid email address");
					login_form.email.focus();
					return false;
					}
				if(pswd.length < 6 )
					{
					alert("Password should be minimum 6 characters");
					login_form.password.focus();
					return false;
					}
					
			return true;
			}
			
			function validateSpecific()
			{
				var email=document.forms["login_form"]["email"].value;
				var pswd=document.forms["login_form"]["password"].value;
				if((email!="user@test.com") && (pswd!="test"))
				{
				alert("Not a valid credentials");
				}
				return true;
				
			}
			