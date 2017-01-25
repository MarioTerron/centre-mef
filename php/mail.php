<?php

$EmailTo = "hps@centremef.com";
$Subject = "Preguntes del formulari de contacte de la pàgina web";
$Name = Trim(stripslashes($_POST['name']));
$Tel = Trim(stripslashes($_POST['phone']));
$Email = Trim(stripslashes($_POST['email']));
$Message = Trim(stripslashes($_POST['message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Nom: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tlf: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Mail: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Missatge: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=../gracies-per-contactar.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>
