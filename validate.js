function validate()
{
	var email = document.getElementById("email");
	var vemail = document.getElementById("vemail");

	var val = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gm;
	if (!email.value.match(val))
	{
		vemail.style.display = "block";

		return false;
	}
	else
	{
		vemail.style.display = "none";

		alert("You have successfully logged in.!");
	}
}