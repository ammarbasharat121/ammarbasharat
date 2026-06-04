<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = $_POST['fname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'gestion@olabgroup.fr'; 
    $subject = 'Mail From ÒLAB GROUP';
    $body = "Name: $fname\nEmail: $email\nMessage: $message";

    // Create additional headers
    $headers = "From: $fname <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully.';
    } else {
        echo 'Failed to send the email.';
    }
}
?>
