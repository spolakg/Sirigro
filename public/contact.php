<?php
/**
 * SiriGro Contact Form Handler for Verpex cPanel (PHP 8.x+)
 * Receives JSON POST submissions from ContactPage and dispatches email to info@sirigro.com.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Same-origin check when Origin header is present
if (!empty($_SERVER['HTTP_ORIGIN'])) {
    $originHost = parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST);
    $allowedHosts = ['sirigro.com', 'www.sirigro.com', 'localhost', '127.0.0.1'];
    if ($originHost && !in_array(strtolower((string)$originHost), $allowedHosts, true)) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Origin not permitted']);
        exit;
    }
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot check (must stay empty)
if (!empty($data['company_website'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$cleanHeader = static function (string $val): string {
    return trim(str_replace(["\r", "\n", "\0"], ' ', $val));
};

$name    = $cleanHeader((string)($data['name'] ?? ''));
$email   = $cleanHeader((string)($data['email'] ?? ''));
$phone   = $cleanHeader((string)($data['phone'] ?? ''));
$subject = $cleanHeader((string)($data['subject'] ?? 'Website inquiry'));
$message = trim((string)($data['message'] ?? ''));
$consent = !empty($data['consent']);

if (mb_strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 5 || !$consent) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please complete all required fields and accept the reply consent.']);
    exit;
}

$recipient = 'info@sirigro.com';
$mailSubject = '[SiriGro Website] ' . ($subject !== '' ? $subject : 'New Inquiry');

$bodyLines = [
    'New contact inquiry via sirigro.com',
    '----------------------------------------',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
    '',
    '----------------------------------------',
    'Consent to reply via email: Yes',
];
$body = implode("\r\n", $bodyLines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: SiriGro Website <noreply@sirigro.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($recipient, $mailSubject, $body, implode("\r\n", $headers));

if ($sent) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery failed on server. Please email info@sirigro.com directly.']);
}
