<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Rules\CPF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

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

    public function update(Request $request)
    {
        $user = Auth::user();

        $messsages = [
            'id.in' => 'User invalid',
            'name.min' => 'Minimum length 10',
            'birthday' => 'Invalid Date'
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'id' => ['required','in:'.$user->id],
                'name' => 'min:10',
                'email' => 'email',
                'cpf' => ['string', 'digits:11', new CPF],
                'birthday' => 'date',
            ]
            , $messsages);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if($user)
        {
            $user->name = $request->name;
            $user->email = $request->email;
            $user->cpf = $request->cpf;
            $user->birthday = $request->birthday;
            return $this->sendResponse($user, 'User updated successfully');
        }else{
            return $this->sendError('Unauthorised.', ['error' => '']);
        }
    }


}