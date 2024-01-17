<?php
// Retrieve data from the request
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up email parameters
$to = 'amine_bh@outlook.com';
$subject = 'New Contact Form Submission';
$headers = 'From: ' . $email . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Compose the email body
$emailBody = "Name: $name\nEmail: $email\nMessage: $message";

// Send the email
$success = mail($to, $subject, $emailBody, $headers);

// Return response to the client-side
if ($success) {
    http_response_code(200);
    echo "Email sent successfully!";
} else {
    http_response_code(500);
    echo "Error sending email.";
}
?>
