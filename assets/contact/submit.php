<?php
// Check for empty fields
if(empty($_POST['name'])  	||
   empty($_POST['email']) 	||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
    
	echo "Please fill out all fields correctly.";
    
}else{
    
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    $to = 'contact@matthewsullivan.media';
    $email_subject = "matthewsullivan.media contact form:  $name";
    $email_body = "You have received a new message from the matthewsullivan.media contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
    $headers = "From: noreply@matthewsullivan.media\n";
    $headers .= "Reply-To: $email_address";
    
    mail($to,$email_subject,$email_body,$headers);
    
    echo "Thanks $name. I will be in touch shortly.";
    
}

?>
