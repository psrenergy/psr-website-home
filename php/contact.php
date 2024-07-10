<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    # FIX: Replace this email with recipient email
    $my_email = "sales@psr-inc.com";

    # Sender Data
    $name           = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
    $email          = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone          = trim($_POST["phone"]);
    $company        = trim($_POST["company"]);
    $findus         = trim($_POST["find-us"]);
    $findusother    = trim($_POST["find-us-other"]);
    $subject        = trim($_POST["subject"]);
    $topic          = trim($_POST["topic"]);
    $title          = trim($_POST["title"]);
    $message        = trim($_POST["message"]);


    if ( empty($name) || empty($email) || empty($message) || empty($company) || empty($phone)) {
        # Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete all required fields and try again.";
        exit;
    }

    # Mail Content
    $content = "Name: $name\n";
    $content .= "Email: $email\n";
    $content .= "Phone: $phone\n";
    $content .= "Company: $company\n";
    $content .= "Subject: $subject\n";
    $content .= "Find us: $findus\n";
    if (!empty($findusother)) {
        $content .= "Find us (other): $findusother\n";
    }
    $content .= "Find us: $findus\n";
    $content .= "Topic: $topic\n";
    if (!empty($title)) {
        $content .= "Title: $title\n";
    }
    $content .= "Message:\n$message\n";

    # email headers.
    $headers = "Subject: $subject - From: $name <$email>";

    # Send the email.
    $success = mail($my_email, $name, $content, $headers);
    if ($success) {
        # Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank you! Your message has been sent and we will contact you soon.";
    } else {
        # Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }

} else {
    # Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

