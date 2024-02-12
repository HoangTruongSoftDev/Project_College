<?php
declare(strict_types=1);

/*
 * 420DW3_07250_Final EnumGenre.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-25
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Enums;

enum EnumGenre : string {
    case STRATEGY = "Strategy";
    case SIMULATION = "Simulation";
    case RPG = "RPG";
    case FPS = "FPS";
}
