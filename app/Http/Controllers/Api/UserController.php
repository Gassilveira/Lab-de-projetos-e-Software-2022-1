<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Rules\CPF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
            ($request->name)? ($user->name = $request->name): '';
            ($request->cpf)? ($user->cpf = $request->cpf): '';
            ($request->email)? ($user->email = $request->email): '';
            ($request->birthday)? ($user->birthday = $request->birthday): '';
            $user->save();
            return $this->sendResponse($user, 'User updated successfully');
        }else{
            return $this->sendError('Unauthorised.', ['error' => '']);
        }
    }

    public function changePassword(Request $request)
    {
        $user = Auth::user();

        $messsages = [
            'id.in' => 'User invalid',
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'id' => ['required','in:'.$user->id],
                'password' => 'required',
                'c_password' => 'required|same:password',
            ]
            , $messsages);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if($user)
        {
            $user->password = Hash::make($request->password);
            $user->save();
            return $this->sendResponse($user, 'User password updated successfully');
        }else{
            return $this->sendError('Unauthorised.', ['error' => '']);
        }
    }

}
