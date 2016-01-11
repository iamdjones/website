<?php

error_reporting(-1);
ini_set('display_errors', 1);




$layoutContents = file_get_contents("view/shared/_layout.html.php");

print $layoutContents;