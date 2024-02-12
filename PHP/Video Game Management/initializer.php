<?php
declare(strict_types=1);

/*
 * 420DW3_07250_Final initializer.php
 * 
 * @author Marc-Eric Boury (Newironsides)
 * @since 2023-04-12
 * (c) Copyright 2023 Marc-Eric Boury 
 */



// <editor-fold defaultstate="collapsed"> PATHS SECTION

const ABS_PROJECT_ROOT = __DIR__.DIRECTORY_SEPARATOR;
define("WEB_PROJECT_ROOT", str_replace(str_replace("\\", "/", $_SERVER["DOCUMENT_ROOT"]), "", str_replace("\\", "/", __DIR__))."/");


const PRIVATE_DIR = ABS_PROJECT_ROOT."private".DIRECTORY_SEPARATOR;
const CONFIG_DIR = PRIVATE_DIR."config".DIRECTORY_SEPARATOR;
const SOURCES_DIR = PRIVATE_DIR."src".DIRECTORY_SEPARATOR;


const WEB_PUBLIC_DIR = WEB_PROJECT_ROOT."public/";
const WEB_CSS_DIR = WEB_PUBLIC_DIR."css/";
const WEB_ENDPOINTS_DIR = WEB_PUBLIC_DIR."endpoints/";
const WEB_JS_DIR = WEB_PUBLIC_DIR."js/";
const WEB_PAGES_DIR = WEB_PUBLIC_DIR."pages/";

// </editor-fold>



// <editor-fold defaultstate="collapsed"> AUTOLOADER SECTION

$psr4_autoloader = function(string $class) : bool {
    $file = str_replace('\\', DIRECTORY_SEPARATOR, $class).'.php';
    $file_path = SOURCES_DIR . $file;
    if (file_exists($file_path)) {
        require_once $file_path;
        return true;
    }
    return false;
};
spl_autoload_register($psr4_autoloader);

// </editor-fold>



// <editor-fold defaultstate="collapsed"> DEBUG FUNCTION SECTION

/**
 * Instructs {@see debug()} to echo its results to the output.
 */
const DEBUG_OUTPUT_ECHO = 1;
/**
 * Instructs {@see debug()} to echo its results to the output AND terminate the application.
 */
const DEBUG_OUTPUT_ECHO_AND_DIE = 2;
/**
 * Instructs {@see debug()} to return its results instead of adding to the output.
 */
const DEBUG_OUTPUT_RETURN = 3;

/**
 * Basic debug helper function. Generates an HTML table string for whatever value is provided in <code>$input</code>.
 * The table will contain the type data of the <code>$input</code> value, and its value(s). For container-types values
 * (arrays, objects...), the function is recursive and will display each element or property of the container-type.
 *
 * By default, the string is echoed before the function returns it.
 *
 * @param mixed $input        The value to debug
 * @param int   $outputMethod OPTIONAL: Whether to echo the generated HTML table string before returning it or not.
 *                            Defaults to <code>DEBUG_OUTPUT_ECHO</code>
 *
 * @return string|null
 *
 * @author Marc-Eric Boury
 * @since  2023-01-05
 */
function debug(mixed $input, int $outputMethod = DEBUG_OUTPUT_ECHO) : ?string {
    $return_value = "<table style='border: 1px solid black; border-collapse: collapse;'>";
    $input_type = gettype($input);
    switch ($input_type) {
        case "boolean":
            $return_value .= "<tr><td style='border: 1px solid black;'>$input_type</td><td style='border: 1px solid black;'>".($input ? "true" : "false")."</td></tr>";
            break;
        case "integer":
        case "double":
            $return_value .= "<tr><td style='border: 1px solid black;'>$input_type</td><td style='border: 1px solid black;'>$input</td></tr>";
            break;
        case "string":
            $return_value .= "<tr><td style='border: 1px solid black;'>$input_type</td><td style='border: 1px solid black;'><pre>\"$input\"</pre></td></tr>";
            break;
        case "NULL":
            $return_value .= "<tr><td style='border: 1px solid black;'>null</td></tr>";
            break;
        case "array":
            $return_value .= "<tr><td style='border: 1px solid black;'>$input_type</td><td style='border: 1px solid black;'><table style='border: 1px solid black; border-collapse: collapse;'>";
            foreach ($input as $key => $value) {
                $key_name = $key;
                if (!is_numeric($key)) {
                    $key_name = "\"$key\"";
                }
                $return_value .= "<tr><td style='border: 1px solid black;'>$key_name</td><td style='border: 1px solid black;'>".
                                 debug($value, DEBUG_OUTPUT_RETURN)."</td>";
            }
            $return_value .= "</table></td></tr>";
            break;
        case "object":
            try {
                if ($input instanceof UnitEnum) {
                    $reflection_class = new ReflectionEnum($input);
                    if ($input instanceof BackedEnum) {
                        $return_value .= "<tr><td style='border: 1px solid black;'>".$reflection_class->getShortName()."::".$input->name.
                                         "</td><td style='border: 1px solid black;'>.$input->value.</td></tr>";
                    } else {
                        $return_value .= "<tr><td style='border: 1px solid black;' colspan='2'>".$reflection_class->getShortName()."::".$input->name.
                                         "</td></tr>";
                    }
                } else {
                    $reflection_class = new ReflectionClass($input);
                    $return_value .= "<tr><td style='border: 1px solid black;'>".$reflection_class->getShortName().
                                     "</td><td style='border: 1px solid black;'><table style='border: 1px solid black; border-collapse: collapse;'>";
                    $properties = $reflection_class->getProperties();
                    foreach ($properties as $property) {
                        $return_value .= "<tr><td style='border: 1px solid black;'>\"".$property->getName().
                                         "\"</td><td style='border: 1px solid black;'>".
                                         debug($property->getValue($input), DEBUG_OUTPUT_RETURN)."</td>";
                    }
                    $return_value .= "</table></td></tr>";
                }
            } catch (ReflectionException $refl_ex) {
                $return_value .= "<tr><td style='border: 1px solid black;'>ReflectionException thrown: ".
                                 $refl_ex->getMessage()."</td></tr>";
            }
            break;
        case "resource":
        case "resource (closed)":
        case "unknown type":
        default:
            try {
                $return_value .= "<tr><td style='border: 1px solid black;'>$input_type</td><td style='border: 1px solid black;'>$input</td></tr>";
            } catch (Exception $exception) {
                $return_value .= "<tr><td style='border: 1px solid black;'>unstringifyable $input_type</td></tr>";
            }
            break;
    }
    $return_value .= "</table>";
    switch ($outputMethod) {
        case DEBUG_OUTPUT_RETURN:
            return $return_value;
        case DEBUG_OUTPUT_ECHO_AND_DIE:
            echo $return_value;
            die(0);
        case DEBUG_OUTPUT_ECHO:
        default:
            echo $return_value;
            return null;
    }
}

// </editor-fold>
