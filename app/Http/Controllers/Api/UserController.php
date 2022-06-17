<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends BaseController
{
    public function get()
    {
        $user = Auth::user();
        if($user)
        {
            return $this->sendResponse($user, '');
        }else{
            return $this->sendError('Unauthorised.', ['error' => 'User not found']);
        }
    }

    public function update()
    {

    }
}
