<?php

use Illuminate\Database\Seeder;
use App\Menu;

class MenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Menu::truncate();

    Menu::create([
        'name' => 'Inicio',
        'parent' => null,
        'sequence' => '1'
        ]);

        Menu::create([
            'name' => 'Independencia Efimera',
            'parent' => null,
            'sequence' => '2'
        ]);

        Menu::create([
            'name' => 'Invasion y ocupacion Haitiana',
            'parent' => null,
            'sequence' => '3'
        ]);

        Menu::create([
            'name' => 'Independencia Dominicana',
            'parent' => null,
            'sequence' => '4'
        ]);

        Menu::create([
            'name' => 'Haiti intenta dominar R. Dominicana',
            'parent' => null,
            'sequence' => '5'
        ]);
    }
}
