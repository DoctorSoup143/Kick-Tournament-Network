<?php
if(isset($_POST['submit'])){
    $to = "sdrobish4@gmail.com"; // this is your Email address
    $from = $_POST['paypalemail']; // this is the sender's Email address
    $discord_name = $_POST['discord_name'];
    $tarkov_name = $_POST['tarkov_name'];
    $kick_link = $_POST['kick_link'];
    $PMC_level = $_POST['PMC_level'];
    $kd = $_POST['kd'];
    $team_name = $_POST['team_name'];
    $team_captain = $_POST['team_captain'];
    $team_member1 = $_POST['team_member1'];
    $team_member2 = $_POST['team_member2'];

    $subject = "Form submission";
    
$message  ="Discord Username: " .  $discord_name . "\n";
$message .="Tarkov Name: " .  $tarkov_name . "\n";
$message .="Kick Link: " .  $kick_link . "\n";
$message .="PMC Level: " .  $PMC_level. "\n";
$message .="KD: " .  $kd. "\n";
$message .="Team Name: " .$team_name. "\n";
$message .= "Team Captain: ".$team_captain."\n";
$message .= "Team Member1: ".$team_member1."\n";
$message .= "Team Member2: ".$team_member2."\n";

$headers = 'From:' .$from;
mail($to,$subject,$message,$headers);
}
?>