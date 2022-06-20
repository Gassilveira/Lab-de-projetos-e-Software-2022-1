<?php

namespace App\Http\Controllers\Api;

use App\Models\Clinic;
use App\Models\ClinicUsers;
use App\Models\Exam;
use App\Models\User;
use App\Rules\CPF;
use Carbon\Carbon;
use http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Validator;

class ClinicController extends BaseController
{
    public function get()
    {
        $user = Auth::user();

        $clinic = ClinicUsers::with('user', 'clinic')
            ->where('user_id', $user->id)->first()->makeHidden(['clinic_id','user_id','created_at','updated_at']);

        if($clinic)
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
            $usePermition = ClinicUsers::where('user_id', $user->id)
                ->where('clinic_id', $clinic->id)
                ->first();

            if(!$usePermition) {
                return $this->sendError('Unauthorised.', ['error' => 'User not allowed in this clinic']);
            }
            ($request->name)? ($clinic->name = $request->name): '';
            ($request->cnpj)? ($clinic->cnpj = $request->cnpj): '';

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
            $usePermition = ClinicUsers::where('user_id', $user->id)
                ->where('clinic_id', $clinic->id)
                ->first();
            if (!$usePermition) {
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

    public function removeUser(Request $request)
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
            $usePermition = ClinicUsers::where('user_id', $user->id)
                ->where('clinic_id', $clinic->id)
                ->first();
            if (!$usePermition) {
                return $this->sendError('Unauthorised.', ['error' => 'User not allowed in this clinic']);
            }
            $userToRemove = User::where('cpf', $request->cpf)->first();
            if($userToRemove) {
                $permissionToRemove = ClinicUsers::with('user', 'clinic')
                    ->where('user_id', $userToRemove->id)
                    ->where('clinic_id', $clinic->id)
                    ->first();

                if(!$permissionToRemove){
                    return $this->sendError('Unauthorised.', ['error' => 'Permission not exists']);
                }

                ClinicUsers::where('user_id', $userToRemove->id)
                    ->where('clinic_id', $clinic->id)
                    ->delete();

                return $this->sendResponse($permissionToRemove, 'User removed from list of permission to modify clinic!');
            }
            return $this->sendError('Unauthorised.', ['error' => 'User not registered']);
        }
        return $this->sendError('Not Found.', ['error' => 'Clinic not found']);
    }

    public function sendExam (Request $request)
    {
        $messsages = [
            'id' => 'Invalid clinic ID',
            'cpf.digits' => 'Invalid CPF',
            'exam' => 'File is invalid'
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'id' => 'required|numeric',
                'cpf' => ['string', 'digits:11', new CPF()],
                'exam' => "required",
                'specialty' => 'required|String',
                'exam_desc' => 'required|String',
                'exam_date' => 'required|String',
            ]
            , $messsages);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $user = Auth::user();
        $clinic = Clinic::find($request->id);
        if ($clinic) {
            if (!$this->checkPermission($user, $clinic)) {
                return $this->sendError('Unauthorised.', ['error' => 'User not allowed in this clinic','code' => 4002], 401);
            }
            $patient = User::where('cpf', $request->cpf)->first();
            if($patient) {

                $fileExtencion = explode(".", $request->exam->getClientOriginalName())[1];

                if(in_array($fileExtencion, ['exe', 'dll', 'js', 'vue', 'ts', 'cmd', 'bat'])){
                    return $this->sendError('Unauthorised.', ['error' => 'Invalid file','code' => 4001], 400);
                }

                $exam = new Exam();
                $exam->patient_id = $patient->id;
                $exam->clinic_id = $clinic->id;
                $exam->specialty = $request->specialty;
                $exam->exam_desc = $request->exam_desc;
                $exam->exam_date = Carbon::createFromFormat('d/m/Y H:i:s', $request->exam_date)->toString();
                $exam->url = '';
                $exam->save();


                $examFileName = "exam_" . Carbon::createFromFormat('d/m/Y H:i:s', $request->exam_date)->unix() . "_" . "." . $fileExtencion;
                $storagePath = "exams/" . str_split($patient->cpf,6)[1] . "/" .  $exam->id . "/";

                $request->exam->storeAs($storagePath, $examFileName);
                $exam->url = $storagePath . $examFileName;

                $exam->save();
                return $this->sendResponse('', 'Exam send to user storage');
            }
            return $this->sendError('Not found.', ['error' => 'Patient not registered','code' => 4003], 401);
        }
        return $this->sendError('Not Found.', ['error' => 'Clinic not found', 'code' => 4004], 401);
    }

    public function getApiToken(Request $request)
    {

    }

    private function checkPermission(User $user, Clinic $clinic)
    {
        $usePermition = ClinicUsers::with('user', 'clinic')
            ->where('user_id', $user->id)
            ->where('clinic_id', $clinic->id)
            ->first();
        return (bool)$usePermition;
    }
}
