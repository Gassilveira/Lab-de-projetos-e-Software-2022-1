<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Clinic;
use App\Models\ClinicUsers;
use App\Models\User;
use App\Rules\CPF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class ClinicController extends BaseController
{
    public function get()
    {
        $user = Auth::user();

        $clinic = ClinicUsers::with('user', 'clinic')
            ->where('user_id', $user->id)->get()->makeHidden(['clinic_id','user_id','created_at','updated_at']);

        if($clinic->count() > 0)
        {
            return $this->sendResponse($clinic, '');
        }else{
            return $this->sendError('Unauthorised.', ['error' => 'User not allowed in any clinic']);
        }
    }

    public function update(Request $request)
    {
        $messsages = [
            'id.required' => 'Invalid ID',
            'name.min' => 'Minimum length 10',
            'cnpj.digits'  => 'Invalid CNPJ'
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'id' => 'required',
                'name' => 'min:10',
                'cnpj' => ['string', 'digits:14'],
            ]
            , $messsages);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $user = Auth::user();
        $clinic = Clinic::find($request->id);

        if($clinic)
        {
            $usePermition = ClinicUsers::with('user', 'clinic')
                ->where('user_id', $user->id)
                ->where('clinic_id', $clinic->id)
                ->get()
                ->makeHidden(['clinic_id','user_id','created_at','updated_at']);

            if($usePermition->count() == 0) {
                return $this->sendError('Unauthorised.', ['error' => 'User not allowed in this clinic']);
            }
            $clinic->name = $request->name;
            $clinic->cnpj = $request->cnpj;
            $clinic->save();
            return $this->sendResponse($clinic, 'Clinic successful updated!');
        }else{
            return $this->sendError('Not Found.', ['error' => 'Clinic not found']);
        }

    }

    public function allowUser(Request $request)
    {
        $messsages = [
            'id' => 'Invalid clinic ID',
            'cpf.digits' => 'Invalid CPF'
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'id' => 'required|numeric',
                'cpf' => ['string', 'digits:11', new CPF()],
            ]
            , $messsages);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $user = Auth::user();
        $clinic = Clinic::find($request->id);
        if ($clinic) {
            $usePermition = ClinicUsers::with('user', 'clinic')
                ->where('user_id', $user->id)
                ->where('clinic_id', $clinic->id)
                ->first();
            if ($usePermition == null) {
                return $this->sendError('Unauthorised.', ['error' => 'User not allowed in this clinic']);
            }
            $userToAllow = User::where('cpf', $request->cpf)->first();
            if($userToAllow) {
                $newPermition = new ClinicUsers();
                $newPermition->user_id = $userToAllow->id;
                $newPermition->clinic_id = $clinic->id;
                $newPermition->save();
                return $this->sendResponse($userToAllow, 'User allowed to modify clinic!');
            }
            return $this->sendError('Unauthorised.', ['error' => 'User not registred']);
        }
        return $this->sendError('Not Found.', ['error' => 'Clinic not found']);
    }

}
