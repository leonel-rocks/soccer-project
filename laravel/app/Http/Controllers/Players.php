<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Player;
class Players extends Controller
{
    //
    function list()
    {
        $data = Player::all();
        return view('playerview', ['data'=>$data]);
    }
    function create()
    {
        return view('createplayer');
    }
    function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'position' => 'required',
            'goals' => 'required',
        ]);
        $player = new Player([
            'name'      => $request->get('name'),
            'position'  => $request->get('position'),
            'goals'     => $request->get('goals'),
        ]);
        $player->save();
        
        return redirect()->route('player.create')->with('success', 'New player created');
    }
}
