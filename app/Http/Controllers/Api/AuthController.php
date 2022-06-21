<?php

namespace App\Http\Controllers\Api;

use App\Models\ClinicUsers;
use App\Rules\CPF;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;

class AuthController extends BaseController
{
    /**
     * Registration Req
     */
    public function register(Request $request)
    {
        $messsages = [
            'name.min' => 'Minimum length 10',
            'birthday' => 'Invalid Date'
        ];

        $user = Auth::user();
        $clinic = ClinicUsers::with('user', 'clinic')
            ->where('user_id', $user->id)->first()->makeHidden(['clinic_id','user_id','created_at','updated_at']);

        if(!$clinic){
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'cpf' => ['string', 'digits:11', new CPF],
        ], $messsages);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = Hash::make(substr($input['cpf'], -4));
        $user = User::create($input);

        return $this->sendResponse($user, 'User register successfully.');
    }

    /**
     * Login Req
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user()->load('clinic');

            $success['token'] = $user->createToken('Personal Token')->accessToken;
            $success['name'] =  $user->name;
            $success['has_clinic'] = ($user->clinic->count() > 0)? true : false;
            $success['share_code'] = $user->share_code;


            return $this->sendResponse($success, 'User login successfully.');
        }
        else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }

    public function logout(Request $request)
    {
        Auth::user()->token()->revoke();
        return $this->sendResponse('', 'User logged out.');

    }
}
